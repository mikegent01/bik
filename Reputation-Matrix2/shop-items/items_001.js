// Shop items chunk 1 of 11
// Items 1 to 500 (500 items)
// Auto-generated: 2026-03-21 11:27:25

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_001 = {
  ' Pauline_mic': {
    id: 'pauline_mic',
    name: "Pauline's Microphone",
    description: "A mic that amplifies voice for commands or songs.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '🎤',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Amplify voice: Command spell (DC 14)",
        "Performance +3",
        "Echoes in large areas"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Sound Box',
    levelRequirement: 4
},

  ' shy_guy_torch': {
    id: 'shy_guy_torch',
    name: "Shy Guy's Mask Torch",
    description: "A torch that burns with a shy flame. Hides you in shadows but whispers secrets.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8000,
    icon: '🔦',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Sheds dim light in 20ft, but you're invisible in it",
        "Whispers one secret per day (DM's choice)",
        "Mask on torch giggles when nervous",
        "Burns out if you speak loudly"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Dark Wrap',
    levelRequirement: 2
},

  '1_up_deluxe': {
        id: '1_up_deluxe',
        name: "1-Up Deluxe",
        description: "A platinum mushroom. Grants a literal second life.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 700000,
        icon: '🍄',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Passive: If you die, you immediately respawn at the start of your next turn with Full HP, Spell Slots, and Abilities.",
            "Consumed on use.",
            "Can only carry one at a time."
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Divine Courier',
        levelRequirement: 1
    },

  '1_up_mushroom': {
        id: '1_up_mushroom',
        name: "1-Up Mushroom",
        description: "The green miracle. A mushroom that vibrates with the frequency of life itself. Cheats death.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 300000,
        icon: '💚',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Single Use",
            "Cast 'True Resurrection' on target (touch)",
            "Works even if the body is destroyed",
            "The universe frowns upon this exchange"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Armored Escort',
        levelRequirement: 1
    },

  'a_bag_that_defies_the': {
        id: 'a_bag_that_defies_the',
        name: "Gravity Satchel",
        description: "A bag that defies the laws of verticality",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌍',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Allows wearer to walk up walls or ceilings",
        "5% chance per step to trigger a gravity glitch",
        "Can carry up to 500 pounds of gear",
        "Unlocks secret shortcuts in the Doughnut’s interior",
        "Designed for vertical explorers"
        ],
        vendor: 'grand_country',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 3
    },

  'a_blade_forged_in_the': {
        id: 'a_blade_forged_in_the',
        name: "Ironclad Blade of the Forge",
        description: "A blade forged in the heart of the Midlands’ smelting pits, its edge hums with the pulse of molten steel. It cleaves through armor with brutal efficiency and drips molten slag upon impact.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+20% damage to metal targets",
        "-10% stamina cost when wielding",
        "Inflicts “Slag Burn” debuff on foes for 3s (burns 1 HP per tick)"
        ],
        vendor: 'midlands',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'a_bottle_of_whiskey_garlic': {
    id: 'a_bottle_of_whiskey_garlic',
    name: "Wario's Wild West Bottle",
    description: "A bottle of 'whiskey' (garlic juice).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4700,
    icon: '🍾',
    stock: 10,
    rarity: 'common',
    effects: [
        "Drink for +1 CON (tough)",
        "Juice burns: disadvantage on taste",
        "Western: +1 Intimidation",
        "Made by: Wario West"
    ],
    vendor: 'wario_land',
    shippedBy: 'Bottle Bounce',
    levelRequirement: 4
},

  'a_bracelet_infused_with_wario': {
    id: 'a_bracelet_infused_with_wario',
    name: "Wario's Garlic Power Bracelet",
    description: "A bracelet infused with Wario's favorite garlic – boosts strength or your stench?",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9500,
    icon: '🧄',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Once per day: Gain +1 Strength for 1 hour (garlic munchies!)",
        "Repels vampires and picky eaters: advantage on saves vs. undead charms",
        "Side effect: Your breath becomes a weapon (1d4 poison damage in 5ft cone, but allies must save DC 10 CON or nauseated)",
        "Made by: Wario's Garlic Lab"
    ],
    vendor: 'wario_land',
    shippedBy: 'Stinky Sack',
    levelRequirement: 5
},

  'a_brass_token_engraved_with': {
        id: 'a_brass_token_engraved_with',
        name: "Pipe Network Key",
        description: "A brass token engraved with the symbols of the Pipe Network’s collapse. When inserted into a pipe node, it unlocks ancient data streams that reveal the hidden routes smugglers use to bypass the failing infrastructure. However, prolonged use causes the bearer to hear whispers of the Princess’s final plea for help.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 800,
        icon: '⚙',
        stock: 1,
        rarity: 'uncommon',
        effects: [
            "Unlocks hidden pipe routes",
        "Reveals smuggler activity patterns",
        "Causes auditory hallucinations after 10 minutes of use",
        "Grants 1d4 bonus to stealth checks in pipe systems",
        "Corrupts memory if used with non-authorized nodes",
        "Crafted by: Pianta Chuck Express"
        ],
        vendor: 'mushroom_kingdom',
        shippedBy: 'Pianta Chuck Express',
        levelRequirement: 3
    },

  'a_brutal_tool_forged_from': {
        id: 'a_brutal_tool_forged_from',
        name: "Ironclad Hammer of the Forge",
        description: "A brutal tool forged from the last breath of a steam-powered colossus. Strikes with crushing force, shattering stone and steel alike. Perfect for miners and siege engineers alike.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 150% damage to enemy armor",
        "Grants 20% chance to break enemy equipment on hit",
        "Restores 10% stamina on each successful strike"
        ],
        vendor: 'midlands',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'a_buoyant_satchel_woven_from': {
        id: 'a_buoyant_satchel_woven_from',
        name: "Tropical Tide Satchel",
        description: "A buoyant satchel woven from sea grass and coral that expands with water. Ideal for carrying gear or catching fish. Floats silently and hides from enemy sight when submerged.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2200,
        icon: '🐠',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Increases carrying capacity by 30%",
        "Grants +5% swim speed",
        "Reduces water damage by 20%",
        "Crafted by: Pond Patrol"
        ],
        vendor: 'isle_delfino',
        shippedBy: 'Koopa Postal',
        levelRequirement: 4
    },

  'a_cape_that_makes_you': {
    id: 'a_cape_that_makes_you',
    name: "Wario's Super Star Cape",
    description: "A cape that makes you feel invincible – like Wario after a power-up!",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 17000,
    icon: '⭐',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Once per day: Gain temporary invincibility (resistance to all damage for 1 minute)",
        "Cape sparkles: Advantage on Intimidation (star power!)",
        "Gimmick: After use, you crash (disadvantage on next 3 checks from 'power-down')",
        "Made by: Wario's Star Factory"
    ],
    vendor: 'wario_land',
    shippedBy: 'Starry Shipment',
    levelRequirement: 6
},

  'a_card_that_wilds_any': {
    id: 'a_card_that_wilds_any',
    name: "Wario's Wildcard",
    description: "A card that 'wilds' any game.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5000,
    icon: '🃏',
    stock: 9,
    rarity: 'common',
    effects: [
        "Play in games: +1 to gambling rolls",
        "Card bends: disadvantage on sleight",
        "Wario luck: 50% double or nothing",
        "Made by: Wario Cards"
    ],
    vendor: 'wario_land',
    shippedBy: 'Joker Jog',
    levelRequirement: 4
},

  'a_chest_full_of_treasure': {
    id: 'a_chest_full_of_treasure',
    name: "Wario's Fake Treasure Chest (Scam Chest!)",
    description: "A chest full of 'treasure' to fool your foes – Wario's decoy delight!",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9000,
    icon: '📦',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Place as decoy: Enemies investigate (DC 13 INT save or waste turn opening empty chest)",
        "Inside: Spring-loaded fake gold (blinds opener, DC 12 CON save)",
        "Scam: Chest is lightweight – easy to spot as fake if shaken",
        "Made by: Wario's Trap Treasury"
    ],
    vendor: 'wario_land',
    shippedBy: 'Empty Echo Express',
    levelRequirement: 5
},

  'a_classic_wizard_hat_that': {
    id: 'a_classic_wizard_hat_that',
    name: "Mages' Guild Pointed Hat of Stereotypes",
    description: "A classic wizard hat that is very flimsy.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9500,
    icon: '🎩',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Advantage on Arcana checks (you look like a wizard)",
        "Disadvantage on saves vs. wind (hat flies off easily)",
        "You must gesture dramatically when casting spells (disadvantage on Stealth)",
        "Made by: Mages' Guild Haberdashery"
    ],
    vendor: 'mages_guild',
    shippedBy: 'Arcane Relay',
    levelRequirement: 5
},

  'a_coin_with_wario_s': {
    id: 'a_coin_with_wario_s',
    name: "Wario's Lucky W Coin",
    description: "A coin with Wario's face – 'brings good luck' (or bad).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4100,
    icon: '🪙',
    stock: 15,
    rarity: 'common',
    effects: [
        "Flip for luck: heads +1 to next roll, tails -1 (50/50)",
        "Coin is weighted: 60% chance tails (Wario's luck)",
        "Wario's grin: advantage on Deception when gambling",
        "Made by: Wario's Mint (Counterfeit)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Coin Flip Courier',
    levelRequirement: 4
},

  'a_controller_that_controls_minor': {
    id: 'a_controller_that_controls_minor',
    name: "Wario's  WiiMote",
    description: "A controller that 'controls' minor things.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5200,
    icon: '🎮',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Point to move small objects 5ft (Mage Hand lite)",
        "Mote vibrates: disadvantage on Concentration",
        "Gamers: +1 Charisma with techies",
        "Made by: WarioWare Remotes"
    ],
    vendor: 'wario_land',
    shippedBy: 'Game Over Delivery',
    levelRequirement: 4
},

  'a_corroded_brass_key_rumored': {
        id: 'a_corroded_brass_key_rumored',
        name: "Pipe Network Key",
        description: "A corroded brass key rumored to unlock the final conduit of the Pipe Network, once used to transport enchanted goods between LEclaire Isle and Mordor. It glows faintly when near the Pipe Network, though its true power is only revealed when used by a smuggler with a secret past.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 50000,
        icon: '🧭',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants access to hidden smuggling routes",
        "Increases stealth by 20% for 3 rounds",
        "May cause minor magical backlash if used improperly",
        "Can be used to activate a hidden safe in the Pipe Network",
        "Triggers a 1d6 sugar surge if used near a bakery",
        "Crafted by: Blooper Wetworks"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 12
    },

  'a_cowboy_hat_with_wario': {
    id: 'a_cowboy_hat_with_wario',
    name: "Wario's Wild West Hat",
    description: "A cowboy hat with Wario flair.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4800,
    icon: '🤠',
    stock: 10,
    rarity: 'common',
    effects: [
        "+1 Intimidation in saloons",
        "Hat tips: disadvantage on balance",
        "Western fans: +1 Persuasion",
        "Made by: Wario West"
    ],
    vendor: 'wario_land',
    shippedBy: 'Yeehaw Yonder',
    levelRequirement: 4
},

  'a_cursed_accessory_worn_by': {
        id: 'a_cursed_accessory_worn_by',
        name: "Onyx Hand Ring",
        description: "A cursed accessory worn by the night’s enforcers",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '👁',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Grants immunity to fear effects during nighttime",
        "Grants +2 to stealth checks",
        "Increases chance of spotting hidden vampires by 30%",
        "Causes visible tremors when worn during full moon",
        "Requires attunement with the Onyx Hand",
        "May cause temporary blindness to daylight"
        ],
        vendor: 'animatopia',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 7
    },

  'a_cursed_amulet_that_resonates': {
        id: 'a_cursed_amulet_that_resonates',
        name: "Void Touched Amulet",
        description: "A cursed amulet that resonates with the cosmic abyss",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 50000,
        icon: '🌌',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Grants immunity to all non-magical damage",
        "Draws Void energy for 3 turns, increasing damage by 30%",
        "Causes the wearer to see glimpses of the Doughnut Hole",
        "May trigger a reality collapse if worn for too long",
        "Requires attunement by a divine spellcaster",
        "Shipped by: Goomba Ground Delivery",
        "Faction influence: King of Tombs",
        "Connected to: The Doughnut Hole - Cosmic abyss, central void, existential dread, unknown entities"
        ],
        vendor: 'mushroom_kingdom',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 15
    },

  'a_cursed_artifact_forged_by': {
        id: 'a_cursed_artifact_forged_by',
        name: "Entropy Ring",
        description: "A cursed artifact forged by the Iron Legion",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '⚔',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants +3 to all melee attacks",
        "Causes targets to lose 1 HP per turn when hit",
        "Activates after 3 consecutive successful attacks",
        "Grants a 10% chance to trigger a random combat ability",
        "Requires attunement by a member of the Iron Legion"
        ],
        vendor: 'hyrule',
        shippedBy: 'Piranha Plant Post',
        levelRequirement: 8
    },

  'a_cursed_artifact_from_toadburt': {
        id: 'a_cursed_artifact_from_toadburt',
        name: "Entropy Ring",
        description: "A cursed artifact from Toadburt’s covert operations",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🌀',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants 50% chance to negate enemy ability activation",
        "Suffers 1d6 damage when used near Beanbean Kingdom",
        "Increases spell casting cost by 25% for all users",
        "Requires attunement by a member of the Iron Legion",
        "Crafted by: Toadburt’s Shadow Syndicate",
        "Can only be used once per campaign"
        ],
        vendor: 'grand_country',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 7
    },

  'a_cursed_artifact_that_feeds': {
        id: 'a_cursed_artifact_that_feeds',
        name: "Entropy Ring",
        description: "A cursed artifact that feeds on time and entropy, this ring grants the wearer the ability to rewind moments… or cause irreversible decay. It was once worn by Toadburt, the Iron Legion sleeper agent who now haunts the Digital Realm.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 75000,
        icon: '⚡',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Rewinds 1d4 seconds of time once per day",
        "20% chance to cause entropy decay on nearby objects",
        "Requires attunement by a member of the Shy Guys union",
        "Wears off if worn outside Dream Land",
        "Shipped by: Cheep Cheep Shipping",
        "Faction influence: Gehenna Academy"
        ],
        vendor: 'dreamland',
        shippedBy: 'Cheep Cheep Shipping',
        levelRequirement: 10
    },

  'a_cursed_explosive_infused_with': {
        id: 'a_cursed_explosive_infused_with',
        name: "Garlic Bomb",
        description: "A cursed explosive infused with Wario’s greed",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 450,
        icon: '🧄',
        stock: 12,
        rarity: 'uncommon',
        effects: [
            "Detonates on contact with a living target",
        "Deals 3d4 piercing damage",
        "Causes temporary garlic blindness to enemies",
        "Triggers Wario’s greed aura for 3 rounds",
        "Crafted by: Pipe Express",
        "Contains: 1000g Wario’s garlic"
        ],
        vendor: 'doughnut_hole',
        shippedBy: 'Pipe Express',
        levelRequirement: 2
    },

  'a_cursed_relic_forged_from': {
        id: 'a_cursed_relic_forged_from',
        name: "Entropy Ring",
        description: "A cursed relic forged from the shattered heart of the Iron Legion’s sleeper agent Toadburt, this ring radiates a slow decay that erodes memories and sanity. It grants temporary resistance to fear, but every hour worn causes the wearer to forget a random memory. Only the Changeling Hive can explain why it’s not “unlocked” until the end of the world.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 5000,
        icon: '⚙',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants +2 to Will saves against fear effects",
        "Causes 1d4 memory loss per hour of wear",
        "Increases damage taken from psychic attacks by 10%",
        "Triggered by: Toadburt’s failed loyalty oath",
        "Wears out after 24 hours, then becomes inert",
        "Only usable by: Changeling Hive agents"
        ],
        vendor: 'sarasaland',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 8
    },

  'a_cursed_relic_that_draws': {
        id: 'a_cursed_relic_that_draws',
        name: "Void Touched Amulet",
        description: "A cursed relic that draws from the void to empower the wearer",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 50000,
        icon: '🌌',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants +2 to all spellcasting rolls",
        "Grants 1d6 damage bonus to all attacks",
        "Causes 1d6 negative effect to user after 10 seconds of casting",
        "Can only be used in the presence of a Mages Guild agent (triggers trap)",
        "Wears a dark aura if not attuned",
        "Crafted by: Mages Guild black market agents",
        "Unlocks the Void Gate in the dock ward"
        ],
        vendor: 'animatopia',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 12
    },

  'a_cursed_ring_of_the': {
        id: 'a_cursed_ring_of_the',
        name: "Onyx Hand Ring",
        description: "A cursed ring of the vampire lords",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6000,
        icon: '🩸',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants +2 to all damage rolls against undead",
        "Consumes 1 soul per use to activate",
        "Causes 1d4 temporary blindness to enemies",
        "Increases vampiric regeneration by 10%",
        "If worn too long causes mental corruption",
        "Crafted by: Iron Legion"
        ],
        vendor: 'warhammer',
        shippedBy: 'Mages Guild Portal',
        levelRequirement: 7
    },

  'a_custom_motorcycle_loud_fast': {
        id: 'a_custom_motorcycle_loud_fast',
        name: "Wario's Chopper",
        description: "A custom motorcycle. Loud, fast, and indestructible.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 200000,
        icon: '🏍️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Land Speed 100ft",
            "Can ram enemies (4d10 Bludgeoning)",
            "Emits black smoke (Obscures vision)",
            "Runs on garlic"
        ],
        vendor: 'wario_direct',
        shippedBy: 'Driven through your wall',
        levelRequirement: 5
    },

  'a_darkly_polished_ring_forged': {
        id: 'a_darkly_polished_ring_forged',
        name: "Onyx Hand Ring",
        description: "A darkly polished ring forged from the remnants of the Onyx Hand’s last rebellion. Wearing it grants the wearer the ability to detect and disrupt magical wards, but each use drains the wearer’s willpower and triggers a 5% chance to be targeted by assassins. The ring whispers the names of those who died for the Kingdom’s sovereignty.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5000,
        icon: '🔥',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Detects magical wards and weakens them",
        "Drains 1d6 willpower per use",
        "5% chance to trigger assassination target",
        "Grants +2 to stealth checks in dark environments",
        "Whispers names of fallen heroes",
        "Crafted by: Iron Legion"
        ],
        vendor: 'mushroom_kingdom',
        shippedBy: 'Pianta Chuck Express',
        levelRequirement: 4
    },

  'a_device_that_draws_maps': {
    id: 'a_device_that_draws_maps',
    name: "Wario's Treasure Map Generator",
    description: "A device that 'draws' maps to hidden loot – Wario's surefire scheme!",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14000,
    icon: '🗺️',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Generates a map once per day: leads to minor treasure (10-50gp) 70% of the time, or a trap (1d6 damage) 30%",
        "Map is waterproof: advantage on Survival in wet areas",
        "Wario's watermark: attracts rival treasure hunters (complication)",
        "Made by: Wario's Map Mill"
    ],
    vendor: 'wario_land',
    shippedBy: 'Pirate Post',
    levelRequirement: 5
},

  'a_digital_key_to_the': {
        id: 'a_digital_key_to_the',
        name: "Diamond City Key",
        description: "A digital key to the treasure vault beneath the Wario Land servers",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 4000,
        icon: '💎',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Opens the Diamond City vault (contains 5000 gold and garlic scrolls)",
        "Grants 10% increased loot drop rate from treasure chests",
        "Causes minor data corruption to nearby items when used",
        "Shipped by: Kremling Smuggle Run",
        "Only usable in Wario Land zones with Diamond City maps"
        ],
        vendor: 'internet',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 6
    },

  'a_flickering_lantern_from_luigi': {
    id: 'a_flickering_lantern_from_luigi',
    name: "Luigi's Ghost-Hunting Lantern",
    description: "A flickering lantern from Luigi's ill-fated defense of the castle.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5300,
    icon: '🏮',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Illuminate 20ft: reveals invisible spirits or ghosts",
        "Once per day: cast a minor light spell that harms undead (1d4 radiant)",
        "Lantern is haunted: whispers Luigi's fears (disadvantage on saves vs. fear)",
        "May attract Boo spirits: random ghostly encounters",
        "Made by: Luigi's Gear (Salvaged from Ruins)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Spooky Shipment',
    levelRequirement: 5
},

  'a_flickering_torch_that_emits': {
        id: 'a_flickering_torch_that_emits',
        name: "Feywhisper Torch",
        description: "A flickering torch that emits soft, enchanted light and whispers secrets of the Feywild. When lit, it reveals hidden paths and temporary buffs for allies.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🔮',
        stock: 4,
        rarity: 'uncommon',
        effects: [
            "+15% damage to magical attacks",
        "Grants temporary invisibility for 5 seconds on cast",
        "Reveals hidden traps or secret paths for 30 seconds"
        ],
        vendor: 'isle_delfino',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 4
    },

  'a_fractured_fragment_of_a': {
        id: 'a_fractured_fragment_of_a',
        name: "Mirrored Soul Shard",
        description: "A fractured fragment of a dead necromancer’s essence, now bound to the Deep Mirror. When wielded, it whispers forgotten commands and warps the battlefield’s perception. Ideal for manipulating undead horde formations.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+20% chance to summon undead units in combat",
        "Grants temporary invisibility to user during 30 seconds of sustained use",
        "Causes surrounding enemies to stagger when touched by summoned spirits"
        ],
        vendor: 'fractured_atrium',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'a_fractured_mirror_shard_that': {
        id: 'a_fractured_mirror_shard_that',
        name: "Echo of the Void",
        description: "A fractured mirror shard that whispers secrets of the lost. When wielded, it reveals hidden truths in shadowed areas and temporarily blinds foes to light-based attacks.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Reveals hidden paths or enemy weaknesses in shadow zones",
        "Temporarily blinds foes to light attacks (10s duration)",
        "Slight aura of disorientation to nearby enemies (1d4 movement penalty)"
        ],
        vendor: 'shadowfell',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'a_fractured_relic_from_the': {
        id: 'a_fractured_relic_from_the',
        name: "Ancient Temple Shard",
        description: "A fractured relic from the depths of the Sacred Ruins. When wielded, it grants visions of forgotten temple secrets and minor stat boosts. Only the brave or the foolish dare to carry it.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+10% attack speed while in temple zones",
        "Minor chance to reveal hidden temple path upon use",
        "Grants temporary immunity to environmental damage in temple areas"
        ],
        vendor: 'hyrule',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'a_geometric_wand_brimming_with': {
        id: 'a_geometric_wand_brimming_with',
        name: "Kamek's Spare Wand",
        description: "A geometric wand brimming with chaotic transformation magic.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 450000,
        icon: '🪄',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "+2 to Spell Attack/DC",
            "Action: Transform a medium object into a CR 3 monster (Loyal to you)",
            "Action: Transform terrain into geometric blocks",
            "User laughs uncontrollably"
        ],
        vendor: 'valley_trading_post',
        shippedBy: 'Broomstick',
        levelRequirement: 11
    },

  'a_gold_plated_spray_painted': {
    id: 'a_gold_plated_spray_painted',
    name: "Wario's Authentic Autograph Plaque",
    description: "A gold-plated (spray-painted) plaque with Wario's signature. His face is winking.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4500,
    icon: '🖼️',
    stock: 5,
    rarity: 'common',
    effects: [
        "Display in your camp: Wario may randomly appear in your dreams to give bad financial advice",
        "Wealthy NPCs think you're a collector: advantage on Charisma checks with them",
        "Plaque is tacky: disadvantage on checks with art critics",
        "Smells faintly of garlic (permanent)",
        "Made by: Wario Land Memorabilia (100% Genuine, Trust Me)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Wafting Cloud',
    levelRequirement: 4
},

  'a_golden_key_to_the': {
        id: 'a_golden_key_to_the',
        name: "Diamond City Key",
        description: "A golden key to the vault of hidden treasures",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 5000,
        icon: '💎',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Opens doors to hidden rooms",
        "Grants temporary teleportation to nearby locations",
        "Consumes 1000 mana per use",
        "Made by: Skaven",
        "Causes minor mana drain when used repeatedly",
        "Only works in Diamond City or Wario Land zones"
        ],
        vendor: 'sarasaland',
        shippedBy: 'Noki Coral Fleet',
        levelRequirement: 7
    },

  'a_greasy_napkin_signed_by': {
    id: 'a_greasy_napkin_signed_by',
    name: "Wario's Autograph on a Used Napkin",
    description: "A greasy napkin signed by Wario himself. 'Worth a fortune!' he says.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4500,
    icon: '📝',
    stock: 12,
    rarity: 'common',
    effects: [
        "Can be used as a one-time distraction: show it to a foe for disadvantage on their next attack (they're confused by the 'celebrity')",
        "Napkin is stained with garlic sauce: disadvantage on Charisma checks if you try to sell it (smells awful)",
        "Wario claims it's a 'collector's item': advantage on Persuasion to haggle with Wario fans",
        "Made by: Wario (with a Sharpie)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Greasy Envelope',
    levelRequirement: 4
},

  'a_hat_that_grows_garlic': {
    id: 'a_hat_that_grows_garlic',
    name: "Wario's Garlic Grower Hat (Gimmick Grow!)",
    description: "A hat that grows garlic on your head – fresh anytime!",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7500,
    icon: '🎩',
    stock: 9,
    rarity: 'common',
    effects: [
        "Grows 1 garlic bulb per day: Use as ingredient or ammo (1d4 bludgeoning)",
        "Hat smells garlicky: Advantage vs. vampires, but disadvantage on stealth (odor)",
        "Itch factor: Disadvantage on Concentration if not harvested daily",
        "Made by: Wario's Farm Folly"
    ],
    vendor: 'wario_land',
    shippedBy: 'Head Harvest Haul',
    levelRequirement: 5
},

  'a_holster_for_guns_garlic': {
    id: 'a_holster_for_guns_garlic',
    name: "Wario's Wild West Holster",
    description: "A holster for 'guns' (garlic shooters).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5100,
    icon: '👜',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Quick draw: advantage on first ranged",
        "Holster creaks: disadvantage on quiet",
        "Western: +1 Dex draws",
        "Made by: Wario West"
    ],
    vendor: 'wario_land',
    shippedBy: 'Holster Hustle',
    levelRequirement: 4
},

  'a_horn_that_honks_with': {
    id: 'a_horn_that_honks_with',
    name: "Wario's  Bike Horn",
    description: "A horn that honks with garlic scent.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4100,
    icon: '🚲',
    stock: 14,
    rarity: 'common',
    effects: [
        "Honk to distract: DC 12 Wisdom save or foe loses action",
        "Horn smells: disadvantage on Charisma nearby",
        "Bike racers love it: +1 speed on mounts",
        "Made by: Wario Wheels"
    ],
    vendor: 'wario_land',
    shippedBy: 'Horn Honk Haul',
    levelRequirement: 4
},

  'a_jagged_piece_of_the': {
    id: 'a_jagged_piece_of_the',
    name: "Peach's Crown Shard",
    description: "A jagged piece of the late Princess's crown, looted from the palace ruins.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4800,
    icon: '👑',
    stock: 6,
    rarity: 'common',
    effects: [
        "Embed in weapon: +1d4 radiant damage vs. undead or Toad rebels once per day",
        "Shard is cursed: disadvantage on Charisma checks with loyalists (they sense the theft)",
        "Glows faintly in presence of royalty: advantage on Investigation for hidden heirs",
        "May shatter after 3 uses: permanent loss",
        "Made by: Palace Looter (Wario's Collection)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Shady Relic Relay',
    levelRequirement: 4
},

  'a_key_forged_in_the': {
        id: 'a_key_forged_in_the',
        name: "Ricco Harbor Key",
        description: "A key forged in the ink-jammed ruins of Ricco Harbor",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 700,
        icon: '🗝',
        stock: 5,
        rarity: 'common',
        effects: [
            "Opens the secret door behind the ink-stained wall",
        "Grants access to the Koopa Navy’s hidden storage",
        "Can be used to summon ink-splattered goblins",
        "Wears off after 10 minutes of use",
        "Smells like stale tea and regret",
        "Carries the ghost of Admiral Bloopers"
        ],
        vendor: 'dreamland',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 2
    },

  'a_key_that_unlocks_the': {
        id: 'a_key_that_unlocks_the',
        name: "Shadowfell Keychain",
        description: "A key that unlocks the Shadowfell realm’s hidden paths",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '🔑',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Opens secret passages in Shadowfell dimensions",
        "Grants 50% chance to bypass magical barriers",
        "Causes 1d2 fatigue when used in high-stress situations",
        "Requires attunement with a Shadowfell artifact",
        "Crafted by: Iron Legion in collaboration with Shadowfell outcasts",
        "Thematic link: Connectopia’s frontier expansion meets Shadowfell’s mystery"
        ],
        vendor: 'connectopia',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 7
    },

  'a_keychain_forged_from_the': {
        id: 'a_keychain_forged_from_the',
        name: "Shadowfell Keychain",
        description: "A keychain forged from the essence of the Raventree Manor’s Shadowfell dimension, this item is said to grant the wearer a glimpse into the realm of lost dreams. It glows faintly when approached by a shadowed entity, and can be used to unlock hidden doors or traps. However, prolonged use may cause the user to forget their own name.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 6000,
        icon: '🕳',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants temporary invisibility when carrying item",
        "Allows unlocking of Shadowfell doors and traps",
        "May cause memory fragmentation after 30 minutes of use",
        "Grants 1d6 bonus to stealth checks",
        "Causes minor hallucinations of lost memories",
        "Can be used to temporarily summon a shadow creature"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 7
    },

  'a_keychain_that_unlocks_hidden': {
        id: 'a_keychain_that_unlocks_hidden',
        name: "Shadowfell Keychain",
        description: "A keychain that unlocks hidden pathways in the shadow realm",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 600,
        icon: '🔑',
        stock: 10,
        rarity: 'common',
        effects: [
            "Grants 5% chance to unlock hidden elemental nodes",
        "Can be used to activate secret gacha triggers",
        "Only works in shadowed areas or during moon phase",
        "May cause temporary disorientation if used too often",
        "Crafted by: Iron Legion",
        "Contains a piece of inkopolis’ forgotten art"
        ],
        vendor: 'teyvat',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 2
    },

  'a_lightweight_shimmering_cape_that': {
        id: 'a_lightweight_shimmering_cape_that',
        name: "Tropical Breeze Cape",
        description: "A lightweight, shimmering cape that dances with the wind and radiates cool energy. Perfect for dodging tropical storms or soaking up the sun’s warmth.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Boosts movement speed by 15%",
        "Reduces damage from heat-based attacks by 20%",
        "Increases stamina regeneration by 10% per second"
        ],
        vendor: 'isle_delfino',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'a_long_fork_for_roasting': {
    id: 'a_long_fork_for_roasting',
    name: "Wario's Wiener Roast Fork",
    description: "A long fork for roasting... anything.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4800,
    icon: '🍡',
    stock: 10,
    rarity: 'common',
    effects: [
        "Roast over fire: advantage on cooking meat",
        "Fork long: +5 ft reach for pokes (1d4 piercing)",
        "Greasy: disadvantage on grip checks",
        "Made by: Wario BBQ"
    ],
    vendor: 'wario_land',
    shippedBy: 'Roast Roll',
    levelRequirement: 4
},

  'a_lucky_bone_for_wishes': {
    id: 'a_lucky_bone_for_wishes',
    name: "Wario's Wishbone",
    description: "A 'lucky' bone for wishes.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4300,
    icon: '🍗',
    stock: 12,
    rarity: 'common',
    effects: [
        "Snap for luck: +1 to next roll",
        "Bone breaks: disadvantage if snapped wrong",
        "Wario wishes: advantage on greed",
        "Made by: Wario Wishes"
    ],
    vendor: 'wario_land',
    shippedBy: 'Bone Break',
    levelRequirement: 4
},

  'a_metallic_key_shaped_like': {
        id: 'a_metallic_key_shaped_like',
        name: "Diamond City Key",
        description: "A metallic key shaped like a cracked diamond",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '💎',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Opens the vault of the collapsed Koopa Bank",
        "Grants access to 1000 gold coins when used",
        "Causes minor tremors if used near the edge of the world",
        "Requires 10 minutes to activate",
        "Crafted by: The Mages Guild and Wario’s own garage",
        "Unlocks: The Forgotten Vault of Diamond City"
        ],
        vendor: 'wario_land',
        shippedBy: 'Piranha Plant Post',
        levelRequirement: 7
    },

  'a_meter_that_measures_your': {
    id: 'a_meter_that_measures_your',
    name: "Wario's Luck-o-Meter",
    description: "A meter that measures your luck – and 'boosts' it Wario-style!",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11000,
    icon: '🎰',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Check luck: Roll d20; on 15+ gain inspiration, on 5- reroll a failed check",
        "Meter shakes: +1 to gambling or loot rolls",
        "Scam vibe: Breaks after 3 uses (false readings lead to bad decisions)",
        "Made by: Wario's Luck Lab"
    ],
    vendor: 'wario_land',
    shippedBy: 'Lucky Lotto Load',
    levelRequirement: 5
},

  'a_mushroom_made_of_solid': {
        id: 'a_mushroom_made_of_solid',
        name: "Golden Mushroom",
        description: "A mushroom made of solid gold. Mystical properties unknown. Definitely valuable.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 150000,
        icon: '🌟',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Worth 5,000 gold to any merchant",
            "Consume: Restore all HP and remove all conditions",
            "Trade at Shooting Star Summit for rare artifact"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Warp Pipe Direct',
        levelRequirement: 1
    },

  'a_mutated_core_from_the': {
        id: 'a_mutated_core_from_the',
        name: "Fire Flower Core",
        description: "A mutated core from the new fire flower strain",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 12000,
        icon: '🔥',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Can be infused into any weapon to grant explosive damage on critical hit",
        "Causes 3d6 fire damage on first hit with weapon",
        "Triggering the core causes temporary mutations to the wielder: +1d4 damage, -10% stamina regeneration, +10% fire resistance",
        "Must be kept in a sealed crystal vial or else it explodes on contact with water",
        "Origin: Raventree Manor’s Shadowfell Mutation Lab",
        "Wielder must be a fire mage or mutant cultivator to activate"
        ],
        vendor: 'middle_earth',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 8
    },

  'a_pan_that_stirs_itself': {
    id: 'a_pan_that_stirs_itself',
    name: "Mages' Guild Spellbound Saucepan",
    description: "A pan that stirs itself with a magic spoon.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 19500,
    icon: '🍳',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Automatically stirs recipes: advantage on cooking checks, frees up your hands",
        "Spoon sometimes casts Prestidigitation randomly (food changes color, taste, or temperature)",
        "Pan is sentient and gives unsolicited cooking advice (disadvantage if you ignore it)",
        "Made by: Mages' Guild Kitchen Enchanters"
    ],
    vendor: 'mages_guild',
    shippedBy: 'Arcane Relay',
    levelRequirement: 7
},

  'a_partially_burned_scroll_from': {
    id: 'a_partially_burned_scroll_from',
    name: "Kamek's Scorched Spell Scroll",
    description: "A partially burned scroll from Kamek's personal war spellbook.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8600,
    icon: '📜',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Cast spell on scroll: polymorphs target into random object (1 hour, WIS save DC 15)",
        "One use only: scroll crumbles after reading",
        "Pronunciation unclear: 30% chance you polymorph yourself instead",
        "Kamek signature: wizards recognize his style (advantage on Arcana)",
        "Made by: Royal Magikoopa Kamek"
    ],
    vendor: 'wario_land',
    shippedBy: 'Arcane Archives',
    levelRequirement: 9
},

  'a_pendant_shaped_like_a': {
        id: 'a_pendant_shaped_like_a',
        name: "Void Touched Amulet",
        description: "A pendant shaped like a fractured star, this amulet was once part of the ancient Voidborn who sought to unravel the fabric of reality. Its surface glows with shifting colors and whispers fragments of forgotten truths. When worn, it allows the user to temporarily see through the eyes of the Void, but at the cost of their own perception. It is said to have been stolen from a hidden vault beneath the ruins of the Crimson Fleet.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🌌',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants temporary vision through the Void for 30 seconds",
        "Reduces damage taken by 20% during Void vision",
        "Causes wearer to lose 1 perception point per use",
        "May trigger a hallucination if wearer has seen the Void before",
        "Crafted by: Peach Loyalists",
        "Must be worn with a vision holder to activate full effect"
        ],
        vendor: 'teyvat',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 7
    },

  'a_pendant_that_glows_when': {
        id: 'a_pendant_that_glows_when',
        name: "Void Touched Amulet",
        description: "A pendant that glows when the wearer is near a dimensional rift, this amulet was found by a Ranger Union scout who stumbled into the Feywild during a raid on Raventree Manor. The DK Crew claims it was imbued with the essence of a void-walker who fell during the split. When activated, it allows the wearer to briefly pass through barriers and see through illusions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🌀',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Allows passage through illusions for 1 round",
        "Grants 10% chance to see hidden paths in the Feywild",
        "20% chance to cause a dimensional ripple when used in combat",
        "Requires attunement by a spellcaster or ranger",
        "Can only be used once per day",
        "Crafted by: DK Crew with Voidwalker’s blood"
        ],
        vendor: 'sarasaland',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 10
    },

  'a_piece_of_bowser_s': {
    id: 'a_piece_of_bowser_s',
    name: "Bowser's Shell Fragment Shield (Chipped)",
    description: "A piece of Bowser's shell, cracked during the siege of Toad Town.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5200,
    icon: '🐢',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "+1 AC against fire damage (residual Bowser magic)",
        "Shield is heavy: disadvantage on Stealth checks",
        "Koopas recognize it: advantage on Charisma with Koopa Troop defectors",
        "Shell still warm: you feel Bowser's rage, advantage on Intimidation, disadvantage on Persuasion",
        "Made by: Wario Land Battlefield Salvage"
    ],
    vendor: 'wario_land',
    shippedBy: 'Heavy Package',
    levelRequirement: 5
},

  'a_pink_brick_from_the': {
    id: 'a_pink_brick_from_the',
    name: "Peach's Castle Brick",
    description: "A pink brick from the castle walls, stamped with the royal crest.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 3900,
    icon: '🧱',
    stock: 10,
    rarity: 'common',
    effects: [
        "Use as thrown weapon: 1d6 bludgeoning (20ft range)",
        "Royal nostalgia: advantage on History checks about the kingdom",
        "Heavy and awkward: disadvantage on ranged attack with it",
        "Collectors seek it: can sell for 2x price to right buyer",
        "Made by: Castle Architecture (Pre-War Era)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Rubble Runners',
    levelRequirement: 3
},

  'a_pistol_that_shoots_garlic': {
    id: 'a_pistol_that_shoots_garlic',
    name: "Wario's Garlic Gun",
    description: "A pistol that shoots garlic cloves – Wario's anti-vampire special!",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11000,
    icon: '🔫',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Ranged attack: 20/60 ft, 1d6 piercing + garlic (advantage vs. undead, they must save DC 12 CON or poisoned)",
        "10 shots: Reload with garlic bulbs",
        "Gimmick: Gun smells forever – disadvantage on social encounters",
        "Made by: Wario's Weapon Workshop"
    ],
    vendor: 'wario_land',
    shippedBy: 'Garlic Grenade Delivery',
    levelRequirement: 5
},

  'a_poorly_stitched_doll_that': {
    id: 'a_poorly_stitched_doll_that',
    name: "Bootleg Waluigi Doll",
    description: "A poorly stitched doll that looks like Waluigi, but with extra lanky arms.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5200,
    icon: '🎎',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Throw as a distraction: 20ft range, creates a minor illusion of Waluigi laughing (DC 12 Wisdom save or foe is distracted for 1 round)",
        "Doll's arms tangle easily: disadvantage on Sleight of Hand if you try to repair it",
        "Waluigi purists hate it: advantage on Intimidation with Mario fans (they think it's cursed)",
        "Made by: Shady Mushroom Kingdom Toy Factory"
    ],
    vendor: 'wario_land',
    shippedBy: 'Questionable Parcel',
    levelRequirement: 4
},

  'a_poster_with_your_face': {
    id: 'a_poster_with_your_face',
    name: "Wario's Wild West Wanted Poster",
    description: "A poster with your face (or Wario's).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4100,
    icon: '📜',
    stock: 14,
    rarity: 'common',
    effects: [
        "Show for +1 Intimidation bounties",
        "Poster old: disadvantage on current",
        "Western: +1 Deception outlaws",
        "Made by: Wario West"
    ],
    vendor: 'wario_land',
    shippedBy: 'Wanted Wagon',
    levelRequirement: 4
},

  'a_potion_that_is_definitely': {
    id: 'a_potion_that_is_definitely',
    name: "Wario's 'Definitely Magic' Potion",
    description: "A potion that is definitely, probably, maybe magical. 60% of the time, it works every time.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18500,
    icon: '🧪',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Drink as an action: roll 1d6 - 1-3: no effect (it's just garlic water), 4-5: gain 1d10 temporary HP, 6: gain +2 to Strength for 1 hour",
        "After drinking, you must succeed DC 13 Constitution save or be poisoned for 1 round (questionable ingredients)",
        "Bottle is made of cheap glass: 20% chance it breaks in your bag, soaking everything with garlic smell",
        "Potion has a '100% Satisfaction Guarantee' sticker (Wario's face is on the sticker, winking)",
        "Made by: Wario Land Alchemy (Certified by Wario Himself)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Suspicious Bottle Service',
    levelRequirement: 6
},

  'a_power_up_that_fell': {
    id: 'a_power_up_that_fell',
    name: "Wario's 'Acquired' Mario Power-Up",
    description: "A power-up that fell off the back of a truck. Definitely not stolen.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 24500,
    icon: '⭐',
    stock: 2,
    rarity: 'rare',
    effects: [
        "It's a Fire Flower... but it's been 'modified': you can cast Burning Hands once per day (DC 13)",
        "After use, you must make a DC 10 Wisdom save or become convinced you're Mario (disadvantage on Charisma checks, you say 'Mama mia!' constantly)",
        "Mario's lawyers may appear: 5% chance per use that a celestial attorney shows up and demands the power-up back (DM-controlled, just annoying)",
        "Power-up is clearly repainted: original red is visible under yellow paint",
        "Made by: 'Found' by Wario (Allegedly)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Shady Delivery',
    levelRequirement: 7
},

  'a_pulsating_amulet_that_channels': {
        id: 'a_pulsating_amulet_that_channels',
        name: "Void Touched Amulet",
        description: "A pulsating amulet that channels the essence of forgotten dimensions",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 15000,
        icon: '🌀',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants +3 to perception checks against eldritch horrors",
        "Allows the wearer to see through the veil between dimensions",
        "Causes 1d6 temporary blindness after 10 minutes of use",
        "Can teleport wearer to any known location within 1000 feet",
        "Requires attunement by a scholar or void-wanderer",
        "Crafted by: Remi Coil’s Dimensional Workshop"
        ],
        vendor: 'shadowfell',
        shippedBy: 'Cheep Cheep Shipping',
        levelRequirement: 7
    },

  'a_pulsating_obsidian_pendant_that': {
        id: 'a_pulsating_obsidian_pendant_that',
        name: "Void Touched Amulet",
        description: "A pulsating obsidian pendant that pulses with the heartbeat of the Liminal void. Worn near the edge of reality, it grants glimpses of alternate dimensions—though each glimpse risks collapsing the wearer’s perception. The amulet is said to have been stolen from the ruins of an ancient Onyx Hand stronghold, and now it hums with suppressed power.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6000,
        icon: '🌀',
        stock: 2,
        rarity: 'epic',
        effects: [
            "1d6 chance to see a hidden passage or secret door",
        "Each use risks temporary disorientation for 1d4 rounds",
        "Reduces fall damage by 50% when worn in the void",
        "Crafted by: Changeling Hive",
        "Only usable near the Doughnut Edge"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 7
    },

  'a_pulsing_molten_core_encased': {
        id: 'a_pulsing_molten_core_encased',
        name: "Forgeheart Core",
        description: "A pulsing molten core encased in iron plate, rumored to be the heart of a defunct industrial giant. Increases stamina regeneration and grants temporary heat resistance in industrial zones.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3800,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Regenerates 2 stamina per minute while active",
        "Grants +20% heat resistance",
        "Slightly increases damage against iron constructs"
        ],
        vendor: 'midlands',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 6
    },

  'a_pulsing_obsidian_heart_that': {
        id: 'a_pulsing_obsidian_heart_that',
        name: "Necrotic Heart Pendant",
        description: "A pulsing, obsidian heart that pulses with the life force of the dead. When worn, it grants the wearer a steady stream of necrotic energy to fuel powerful rituals or summoning spells.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Regenerates 1 necrotic charge per 20 seconds",
        "Increases necromancy casting speed by 15%",
        "Grants 5% damage reduction against undead foes"
        ],
        vendor: 'fractured_atrium',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'a_relic_forged_from_the': {
        id: 'a_relic_forged_from_the',
        name: "Echo of the Triforce",
        description: "A relic forged from the same energy that birthed the Triforce itself this item grants temporary buffs based on the wielder’s current state. When activated it grants strength +20% and speed +15% for 10 seconds.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '🎭',
        stock: 4,
        rarity: 'rare',
        effects: [
            "+20% Strength for 10 seconds",
        "+15% Speed for 10 seconds",
        "Grants 50% chance to dodge next attack"
        ],
        vendor: 'hyrule',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'a_relic_from_the_abyssal': {
        id: 'a_relic_from_the_abyssal',
        name: "Void Touched Amulet",
        description: "A relic from the abyssal void that whispers forgotten truths",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6000,
        icon: '🌑',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants 1d6 extra damage to psychic attacks",
        "Reveals hidden paths in the void for 1 round",
        "Suffers 1d6 psychic damage when used in daylight",
        "Increases void proximity bonus by 50%",
        "Requires attunement by a psychic mage",
        "Crafted by: Gehenna Academy"
        ],
        vendor: 'doughnut_hole',
        shippedBy: 'Pipe Express',
        levelRequirement: 8
    },

  'a_relic_from_the_blocked': {
        id: 'a_relic_from_the_blocked',
        name: "Star Road Key",
        description: "A relic from the blocked Star Road, rumored to open hidden portals",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 45000,
        icon: '🌌',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Unlocks the Star Road’s cryptic gate if held during a full moon",
        "Grants 100% chance to bypass all known faction checkpoints",
        "Causes minor data corruption in nearby servers",
        "Triggers “Memory Echo” when used near Pianta Village",
        "Must be used in conjunction with a confirmed Envoys’ map fragment",
        "Only one such key exists; lost after Don Pianta’s bridge cut"
        ],
        vendor: 'internet',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 10
    },

  'a_relic_from_the_collapsing': {
        id: 'a_relic_from_the_collapsing',
        name: "Pipe Network Key",
        description: "A relic from the collapsing Pipe Network, this key unlocks hidden tunnels beneath the Beanbean Kingdom’s underbelly. Once used by smugglers to bypass Kivotos’s bureaucracy, it now glows when proximity to illegal trade routes is detected. Handle with care—its vibrations may cause nearby pipes to collapse.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 1200,
        icon: '🚧',
        stock: 1,
        rarity: 'uncommon',
        effects: [
            "Opens secret tunnels within 500 meters",
        "Causes minor structural tremors on use",
        "Detects smuggler routes via vibration resonance",
        "Worn by: Bob-omb Rush Delivery",
        "Requires 20 seconds cooldown after use"
        ],
        vendor: 'beanbean',
        shippedBy: 'Bob-omb Rush Delivery',
        levelRequirement: 3
    },

  'a_relic_from_the_drowned': {
        id: 'a_relic_from_the_drowned',
        name: "Void Touched Amulet",
        description: "A relic from the drowned city of Eternia, this amulet pulses with the remnants of forgotten gods and the echoes of lost wars. It was stolen from a Skaven temple during the ink-jamming siege, and now it whispers secrets to those who dare wear it — or suffer its curse.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 15000,
        icon: '🌑',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants +3 to all rolls involving fate or prophecy",
        "May summon a vision of a past battle or future war",
        "50% chance to trigger a temporal distortion — user is temporarily confused or transported",
        "Cannot be worn by non-magic users",
        "Draws attention from all nearby creatures — both allies and enemies",
        "Wears the mark of the Void — if worn for more than 3 days, the user becomes cursed to speak in riddles or dream in blood"
        ],
        vendor: 'warhammer',
        shippedBy: 'Koopa Postal',
        levelRequirement: 7
    },

  'a_relic_from_the_time': {
        id: 'a_relic_from_the_time',
        name: "Feywild Talisman",
        description: "A relic from the time loops of the Fey courts",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4200,
        icon: '🌀',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants temporary resistance to time loops",
        "10% chance to disrupt enemy perception during combat",
        "Causes wearer to hear whispers from trickster spirits",
        "If used in combat during a time loop, triggers a 30 second rewind",
        "Must be attuned to a Fey court by a bard or druid",
        "Crafted by: Koopa Postal with Feywild courier stamps"
        ],
        vendor: 'earth_land',
        shippedBy: 'Koopa Postal',
        levelRequirement: 7
    },

  'a_relic_of_drowned_sorcerers': {
        id: 'a_relic_of_drowned_sorcerers',
        name: "Tongue of the Tide",
        description: "A relic of drowned sorcerers, whispered to speak with ocean depths",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌊',
        stock: 1,
        rarity: 'uncommon',
        effects: [
            "Grants temporary hydrophobic resistance while submerged",
        "Can cast a 1d4 damage wave when submerged and struck",
        "Voice of the tide can whisper secrets to allies within 10m",
        "Fails if worn by non-swimmer or non-creature with aquatic affinity",
        "Crafted by: Chain Chomp Courier",
        "Linked to: Rakasha Spirit Walkers"
        ],
        vendor: 'animatopia',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 4
    },

  'a_relic_of_the_onyx': {
        id: 'a_relic_of_the_onyx',
        name: "Void Touched Amulet",
        description: "A relic of the Onyx Hand, this amulet pulses with a cold, black light. It was once worn by a vampire who tried to steal the moon’s reflection—only to be swallowed by the void. Now it grants the wearer visions of hidden paths… and a terrible hunger for blood that only the dark can satisfy.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6000,
        icon: '🩸',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants +3 to all stealth and ambush rolls",
        "10% chance to reveal hidden enemies when worn",
        "Causes 2d4 temporary HP damage every 3 turns if wearer is exposed to daylight",
        "Requires attunement by a vampire or cultist",
        "Triggers “The Moon’s Kiss” effect on full moon nights: deals 3d6 damage to all nearby enemies",
        "Can be traded for a 10% discount on WarioWare contracts"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 8
    },

  'a_relic_that_amplifies_your': {
        id: 'a_relic_that_amplifies_your',
        name: "Echo Talisman",
        description: "A relic that amplifies your voice during elemental reactions",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 4500,
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
        levelRequirement: 7
    },

  'a_ring_that_grants_wishes': {
    id: 'a_ring_that_grants_wishes',
    name: "Wario's Wish Granting Ring",
    description: "A ring that 'grants wishes' (placebo luck).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4900,
    icon: '💍',
    stock: 10,
    rarity: 'common',
    effects: [
        "+1 luck roll once/day",
        "Ring tight: disadvantage on remove",
        "Wario: +1 Deception wishes",
        "Made by: Wario Rings"
    ],
    vendor: 'wario_land',
    shippedBy: 'Wish Whisper',
    levelRequirement: 4
},

  'a_ring_that_pulses_with': {
        id: 'a_ring_that_pulses_with',
        name: "Doughnut Edge Ring",
        description: "A ring that pulses with unstable dimensional energy",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 15000,
        icon: '🍩',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Grants 100% dodge chance against falling hazards",
        "Triggers “Doughnut Rift” when used — causes 1d6 damage and a random effect",
        "Requires attunement by a wizard or Wario",
        "Shipped by: Piranha Plant Post (special delivery)",
        "Connects: Almost at the Edge — allows passage through the Doughnut Edge",
        "Only usable once per session, no refills"
        ],
        vendor: 'wario_land',
        shippedBy: 'Piranha Plant Post',
        levelRequirement: 9
    },

  'a_robe_with_pockets_inside': {
    id: 'a_robe_with_pockets_inside',
    name: "Mages' Guild Robe of Many Pockets",
    description: "A robe with pockets inside pockets.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 21500,
    icon: '🥼',
    stock: 3,
    rarity: 'rare',
    effects: [
        "20 pockets: each can hold 1 lb, but you forget which pocket holds what",
        "Once per day: Pull out a random minor item (DM's choice, 50% chance it's what you wanted)",
        "Robe is dry-clean only; washing it ruins the dimensional magic",
        "Made by: Mages' Guild Seamsters"
    ],
    vendor: 'mages_guild',
    shippedBy: 'Arcane Relay',
    levelRequirement: 7
},

  'a_rope_for_lassoing_foes': {
    id: 'a_rope_for_lassoing_foes',
    name: "Wario's Wild West Lasso",
    description: "A rope for 'lassoing' foes.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4900,
    icon: '🪢',
    stock: 10,
    rarity: 'common',
    effects: [
        "Lasso grapple: advantage on range",
        "Rope frays: disadvantage on pull",
        "Western: +1 Animal Handling",
        "Made by: Wario West"
    ],
    vendor: 'wario_land',
    shippedBy: 'Lasso Loop',
    levelRequirement: 4
},

  'a_saddle_for_wild_rides': {
    id: 'a_saddle_for_wild_rides',
    name: "Wario's Wild West Saddle",
    description: "A saddle for 'wild' rides.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5000,
    icon: '🐎',
    stock: 9,
    rarity: 'common',
    effects: [
        "+1 mounted speed",
        "Saddle creaks: disadvantage on quiet rides",
        "Western: +1 Animal Handling",
        "Made by: Wario West"
    ],
    vendor: 'wario_land',
    shippedBy: 'Saddle Sprint',
    levelRequirement: 4
},

  'a_scroll_claiming_to_be': {
    id: 'a_scroll_claiming_to_be',
    name: "Peach's 'Last' Decree (Autographed by Wario)",
    description: "A scroll claiming to be Princess Peach's final command. Wario's signature is bigger than hers.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '📜',
    stock: 3,
    rarity: 'uncommon',
    effects: [
        "Present to Mushroom Kingdom loyalists: advantage on Charisma checks (they want to believe)",
        "Scroll is clearly fake: disadvantage on checks with anyone who knew Peach",
        "Decree grants you 'Duchy of the Bathroom': advantage on Persuasion with plumbers",
        "Wario's autograph glows in the dark (cosmetic, but unsettling)",
        "Made by: Wario Land Historical Forgery Dept."
    ],
    vendor: 'wario_land',
    shippedBy: 'Suspicious Package',
    levelRequirement: 5
},

  'a_scroll_that_holds_your': {
    id: 'a_scroll_that_holds_your',
    name: "Mages' Guild Recipe Holder Scroll",
    description: "A scroll that holds your recipes and reads them aloud.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 10500,
    icon: '📜',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Holds 10 recipes: reads them aloud (advantage on cooking checks)",
        "Scroll is dramatic: reads in a booming voice (disadvantage on Stealth)",
        "It corrects your mistakes: advantage on checks, but it lectures you",
        "Made by: Mages' Guild Scribes"
    ],
    vendor: 'mages_guild',
    shippedBy: 'Arcane Relay',
    levelRequirement: 5
},

  'a_service_where_the_guild': {
    id: 'a_service_where_the_guild',
    name: "Mages' Guild Spell Tome Copy",
    description: "A service where the guild scribes a copy of a spell from their vast library into your spellbook.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 5000,
    icon: '📖',
    stock: 999,
    rarity: 'uncommon',
    effects: [
        "Add one spell of 1st or 2nd level from any class list to your spellbook",
        "Spell must be provided by the guild (subject to availability)",
        "Takes 24 hours to transcribe"
    ],
    vendor: 'Mages Guild',
    shippedBy: 'Courier Scribe',
    levelRequirement: 3
},

  'a_sheriff_badge_for_lawmen': {
    id: 'a_sheriff_badge_for_lawmen',
    name: "Wario's Wild West Badge",
    description: "A sheriff badge for 'lawmen'.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4600,
    icon: '⭐',
    stock: 10,
    rarity: 'common',
    effects: [
        "+1 Intimidation as 'sheriff'",
        "Badge tarnishes: disadvantage on shine",
        "Western: +1 Persuasion in towns",
        "Made by: Wario West"
    ],
    vendor: 'wario_land',
    shippedBy: 'Sheriff Ship',
    levelRequirement: 4
},

  'a_shiny_plastic_card_it': {
        id: 'a_shiny_plastic_card_it',
        name: "Wario's Gold Membership",
        description: "A shiny plastic card. It does absolutely nothing but prove you spent all your money.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 250000,
        icon: '💳',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Drains your entire XP pool",
            "Unlocks a special dialogue option with Wario",
            "You get a sticker",
            "No refunds"
        ],
        vendor: 'wario_direct',
        shippedBy: 'Gold Plated Envelope',
        levelRequirement: 1
    },

  'a_shiny_wand_that_beeps': {
    id: 'a_shiny_wand_that_beeps',
    name: "Wario's Gold Detector Wand (Scam Alert!)",
    description: "A shiny wand that beeps near treasure... or just shiny rocks. Wario swears by it!",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '🪄',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Beeps near gold (or fool's gold): advantage on Investigation for treasures, but 50% chance it points to worthless dirt",
        "Wand vibrates excitedly: +1 to Intimidation when waving it (Wario-style greed)",
        "Backfires: 20% chance it explodes in a cloud of fake gold dust (blinded for 1 round, DC 10 CON save)",
        "Made by: Wario's Shady Workshop"
    ],
    vendor: 'wario_land',
    shippedBy: 'Warios Wacky Wagon',
    levelRequirement: 5
},

  'a_silk_handkerchief_said_to': {
    id: 'a_silk_handkerchief_said_to',
    name: "Peach's Ghostly Handkerchief",
    description: "A silk handkerchief said to be haunted by the princess's spirit.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5700,
    icon: '🧣',
    stock: 3,
    rarity: 'uncommon',
    effects: [
        "Wave handkerchief: calm one ally (remove frightened, once per day)",
        "Haunted: whispers Peach's last words (advantage on Insight for royal secrets)",
        "Spirit is sad: disadvantage on Charisma with ghosts",
        "Handkerchief fades: loses effect after 5 uses",
        "Made by: Royal Wardrobe (Spectral Souvenir)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Ethereal Express',
    levelRequirement: 6
},

  'a_single_glove_from_the': {
    id: 'a_single_glove_from_the',
    name: "Peach's Garden Glove",
    description: "A single glove from the princess's private garden, stained with war soil.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4700,
    icon: '🧤',
    stock: 6,
    rarity: 'common',
    effects: [
        "Wear glove: advantage on Nature checks for plants (Peach's touch)",
        "Glove is sentimental: disadvantage on Charisma with gardeners (they weep)",
        "Grows flowers: minor illusion of blooms (distraction aid)",
        "May wilt in battle: loses effect after combat",
        "Made by: Royal Gardens (Last Relic)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Floral Freight',
    levelRequirement: 4
},

  'a_single_page_from_a': {
    id: 'a_single_page_from_a',
    name: "Mages' Guild Spellbook Page",
    description: "A single page from a master mage's spellbook containing one cantrip.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 6500,
    icon: '📄',
    stock: 12,
    rarity: 'uncommon',
    effects: [
        "Contains one random cantrip (DM's choice)",
        "Can be copied into your spellbook normally",
        "Made by: Mages' Guild"
    ],
    vendor: 'mages_guild_hall',
    shippedBy: 'Sealed Scroll',
    levelRequirement: 4
},

  'a_spray_bottle_of_concentrated': {
    id: 'a_spray_bottle_of_concentrated',
    name: "Wario's Garlic Breath Enhancer",
    description: "A spray bottle of concentrated garlic extract. 'Guaranteed to make an impression!'",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12500,
    icon: '🧄',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "As a bonus action, spray to gain a 5ft poison breath attack (1d4 poison damage, CON save DC 12)",
        "Disadvantage on all Charisma checks for 1 hour (repulsive breath)",
        "Vampires and blood-sucking creatures must succeed DC 15 Wisdom save or flee for 1 round",
        "Comes with a 'free' sample of Wario's Breath Mints (they're just more garlic)",
        "Made by: Wario Land Pharmaceuticals (Not FDA Approved)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Wafting Cloud (Express)',
    levelRequirement: 5
},

  'a_squirt_gun_filled_with': {
    id: 'a_squirt_gun_filled_with',
    name: "Wario's Garlic Gun",
    description: "A squirt gun filled with garlic juice.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5600,
    icon: '🔫',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Shoot 30ft: 1d4 acid damage to undead, normal water to others",
        "Gun leaks: disadvantage on Charisma after use",
        "Vampires flee: advantage on Intimidation vs. them",
        "Made by: Wario Water Weapons"
    ],
    vendor: 'wario_land',
    shippedBy: 'Squirt Service',
    levelRequirement: 5
},

  'a_sturdy_string_blessed_by': {
    id: 'a_sturdy_string_blessed_by',
    name: "Gondor Ranger's Enchanted Bowstring",
    description: "A sturdy string blessed by the White Tree, enhancing accuracy in the wilds.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14500,
    icon: '🏹',
    stock: 3,
    rarity: 'uncommon',
    effects: [
        "Attaches to any longbow: +1 to attack rolls when targeting from cover",
        "Ignores half cover for ranged attacks",
        "Vibrates to warn of approaching foes (passive Perception +2 in forests)",
        "Frays after 50 shots – requires mending with ranger's thread"
    ],
    vendor: 'kingdom_gondor',
    shippedBy: 'Beacon Runner',
    levelRequirement: 5
},

  'a_ticket_to_wario_s': {
    id: 'a_ticket_to_wario_s',
    name: "Wario's Wonderland Ticket",
    description: "A ticket to 'Wario's Wonderland' (his backyard).",
    category: SHOP_CATEGORIES.SERVICES,
    price: 4000,
    icon: '🎫',
    stock: 15,
    rarity: 'common',
    effects: [
        "Redeem for a 'tour': find 1d20 gp in trash (Wario's 'treasure')",
        "Ticket expires: disadvantage if not used soon",
        "Wario guides: +1 Deception with him",
        "Made by: Wario Attractions"
    ],
    vendor: 'wario_land',
    shippedBy: 'Wonder Walk',
    levelRequirement: 4
},

  'a_tiny_metallic_key_that': {
        id: 'a_tiny_metallic_key_that',
        name: "Shadowfell Keychain",
        description: "A tiny metallic key that opens the veil between the physical world and the Shadowfell. Carved with the sigils of Onyx Hand vampires, it allows the wearer to slip into the eternal night—though each use drains a sliver of their sanity. It is said to have been forged by a fallen priestess who traded her soul for a single key to the Shadowfell’s heart.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7000,
        icon: '🔒',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants access to the Shadowfell for 1 round per use",
        "+3 to stealth checks in dark environments",
        "5% chance to trigger a soul drain (temporary damage)",
        "10% chance to trigger a mental infection (viral, affects allies)",
        "Can be worn by any class",
        "Requires attunement by a vampire or shadowborn",
        "Crafted by: Kremling Smuggle Run"
        ],
        vendor: 'the_edge',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 8
    },

  'a_tiny_obsidian_charm_that': {
        id: 'a_tiny_obsidian_charm_that',
        name: "Shadowfell Keychain",
        description: "A tiny, obsidian charm that pulses with the gravity of the Shadowfell, this keychain grants temporary access to hidden passages beneath the earth. It clings to the wearer like a second skin, but may cause paranoia if worn too long. Perfect for scouts and stealth hunters.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🔒',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Grants +2 to Stealth checks in shadowed areas",
        "10% chance to reveal hidden enemy paths",
        "May cause temporary paranoia (DC 12 to resist)",
        "Requires attunement by a predator or prey faction member",
        "Shipped by: Pianta Chuck Express"
        ],
        vendor: 'animatopia',
        shippedBy: 'Pianta Chuck Express',
        levelRequirement: 3
    },

  'a_tiny_pendant_carved_from': {
        id: 'a_tiny_pendant_carved_from',
        name: "Shadowfell Keychain",
        description: "A tiny pendant carved from the bones of a fallen Onyx Hand lieutenant, it pulses with the essence of the Shadowfell dimension. Princess Daisy’s court believes it grants glimpses into the Feywild when worn near a mirror. The DK Crew claims it can unlock hidden doors in Raventree Manor’s third floor—though no one has dared to test that theory.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 3000,
        icon: '🌑',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Grants 10% chance to see a shadowy entity during night-time exploration",
        "Grants immunity to fear effects for 1 round per use",
        "If worn while fighting in the Shadowfell, increases damage by 5%",
        "Wears off after 30 minutes of use",
        "Must be worn for 24 hours to activate full effect",
        "Crafted by: Onyx Hand operatives"
        ],
        vendor: 'sarasaland',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 7
    },

  'a_token_of_bureaucratic_chaos': {
        id: 'a_token_of_bureaucratic_chaos',
        name: "Gehenna Academy Keychain",
        description: "A token of bureaucratic chaos and academic pride",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 300,
        icon: '📜',
        stock: 20,
        rarity: 'uncommon',
        effects: [
            "Grants temporary immunity to administrative penalties",
        "Increases the chance of finding hidden dorm keys in any room",
        "Triggers a random bureaucratic event after each use",
        "Causes minor mental stress to non-student users",
        "Restores 10% of HP per use (if worn as an item)",
        "Crafted by: Skaven"
        ],
        vendor: 'kivotos',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 1
    },

  'a_token_of_the_dark': {
        id: 'a_token_of_the_dark',
        name: "Shadowfell Keychain",
        description: "A token of the Dark Mirror Realm",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔮',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Grants temporary invisibility in shadowed areas",
        "Triggers psychic backlash if used near living minds",
        "Reveals hidden paths in the Shadowfell",
        "Can be used to unlock cursed doors",
        "Causes minor hallucinations after 30 minutes of use",
        "Crafted by: Mages Guild Portal"
        ],
        vendor: 'warhammer',
        shippedBy: 'Mages Guild Portal',
        levelRequirement: 3
    },

  'a_toothpick_so_fancy_you': {
    id: 'a_toothpick_so_fancy_you',
    name: "Wario's Gold-Plated Toothpick",
    description: "A toothpick so fancy you could use it as a lockpick (but shouldn't).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9500,
    icon: '🦷',
    stock: 10,
    rarity: 'common',
    effects: [
        "Can be used as a lockpick with advantage (it's gold-plated, lock thinks you're fancy)",
        "After each use, you must clean it with your mouth: restore 1 HP but disadvantage on Charisma for 10 minutes (garlic breath)",
        "Toothpick is so ostentatious that wealthy NPCs notice you: advantage on Charisma checks with them",
        "5% chance it snaps in the lock: lock becomes jammed, disadvantage on future checks with that lock",
        "Made by: Wario Land Dental (Not a Real Dentist)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Gold-Plated Envelope',
    levelRequirement: 5
},

  'a_treasure_map_that_wario': {
    id: 'a_treasure_map_that_wario',
    name: "Wario's 'Totally Legit' Treasure Map",
    description: "A treasure map that Wario 'found' (definitely didn't draw himself).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16500,
    icon: '🗺️',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Map leads to a random location (DM chooses): 50% chance of treasure, 50% chance of a trap",
        "If it's a trap, it's a Wario-style trap: inconvenient but not lethal (gold stolen by Wario)",
        "If treasure exists, it's 2d100 gp but Wario's face is on every coin (cosmetic but embarrassing)",
        "Map is drawn in crayon: advantage on checks to spot it's fake, but you want to believe",
        "Made by: Wario Land Cartography (Est. Yesterday)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Suspicious Package',
    levelRequirement: 5
},

  'a_volatile_device_designed_for': {
        id: 'a_volatile_device_designed_for',
        name: "Ink Jam Bomb",
        description: "A volatile device designed for chaotic disruption",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '💣',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Explodes on impact with 3d4 damage",
        "Triggers ink-jamming effect on adjacent enemies",
        "Causes temporary vision distortion for 1 round",
        "Can be thrown or dropped by non-crafters",
        "Has 50% chance to trigger Koopa Navy ambush on hit",
        "Shipped by: Cheep Cheep Shipping"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Cheep Cheep Shipping',
        levelRequirement: 4
    },

  'a_wallet_that_holds_your': {
    id: 'a_wallet_that_holds_your',
    name: "Wario's Wafting Wallet",
    description: "A wallet that 'holds' your gold... loosely.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5400,
    icon: '💰',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Holds up to 500 gp without weight, but 10% chance per day it 'wafts' away 1d10 gp",
        "Wallet smells like garlic: advantage on Intimidation with thieves (they think it's cursed)",
        "Wario's face on the front: disadvantage on Persuasion with honest folk",
        "Made by: Wario Land Banking (Unsecured)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Loose Change Limo',
    levelRequirement: 5
},

  'a_wallet_that_never_empties': {
    id: 'a_wallet_that_never_empties',
    name: "Wario's Bottomless Wallet (Total Scam!)",
    description: "A wallet that 'never empties' – Wario's best con yet!",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '💼',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Holds gold: Looks full (advantage on Deception for wealth)",
        "Scam reveal: Wallet is a fake – coins are painted rocks (lose all 'gold' when inspected)",
        "Trap: Springs shut on thieves (DC 13 DEX save or trapped hand, 1d4 damage/turn)",
        "Made by: Wario's Scam Supreme"
    ],
    vendor: 'wario_land',
    shippedBy: 'Empty Envelope',
    levelRequirement: 6
},

  'a_wand_of_wonders_mostly': {
    id: 'a_wand_of_wonders_mostly',
    name: "Wario's Wonder Wand",
    description: "A wand of 'wonders' (mostly tricks).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5400,
    icon: '🪄',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Cast Minor Illusion (garlic-themed) once/day",
        "Wand farts sparks: disadvantage on social",
        "Wonder fans: +1 Deception",
        "Made by: Wario Wonders"
    ],
    vendor: 'wario_land',
    shippedBy: 'Trick Treat',
    levelRequirement: 5
},

  'a_wand_that_casts_wario': {
    id: 'a_wand_that_casts_wario',
    name: "Wario's  Wand",
    description: "A wand that casts 'Wario magic' (mostly garlic spells).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5600,
    icon: '🪄',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Cast Minor Illusion of garlic once per day (DC 12)",
        "Wand backfires 20%: you smell like garlic (disadvantage on social)",
        "Wario fans enchanted: advantage on Intimidation",
        "Made by: Wario Wizardry"
    ],
    vendor: 'wario_land',
    shippedBy: 'Magic Mist Mail',
    levelRequirement: 5
},

  'a_wand_that_makes_wa': {
    id: 'a_wand_that_makes_wa',
    name: "Wario's Wa-Wa Wand (Gimmick Toy!)",
    description: "A wand that makes 'wa-wa' sounds – Wario's idea of magic!",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8000,
    icon: '🪄',
    stock: 9,
    rarity: 'common',
    effects: [
        "Wave wand: Makes distracting 'wa-wa' noise (advantage on Deception or Performance for distractions)",
        "Once per day: Minor illusion of Wario laughing (frightens weak foes, DC 10 Wis save)",
        "Scam element: Wand runs out of 'magic' after 5 uses (needs Wario's recharge – unavailable)",
        "Made by: Wario's Toy Factory"
    ],
    vendor: 'wario_land',
    shippedBy: 'Wa-Wa Wagon',
    levelRequirement: 5
},

  'a_watch_that_tells_time': {
    id: 'a_watch_that_tells_time',
    name: "Wario's  Watch",
    description: "A watch that tells time... Wario time.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4400,
    icon: '⌚',
    stock: 10,
    rarity: 'common',
    effects: [
        "Always shows the correct time: advantage on Initiative (you know when to act)",
        "Watch beeps every hour: disadvantage on Stealth during beeps",
        "Wario's face on the dial: advantage on Intimidation with watch collectors",
        "Made by: Wario Timepieces (Slow Delivery)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Tick-Tock Truck',
    levelRequirement: 4
},

  'a_weapon_forged_from_condensed': {
        id: 'a_weapon_forged_from_condensed',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Gehenna Academy"
        ],
        vendor: 'doughnut_hole',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_1': {
        id: 'a_weapon_forged_from_condensed_1',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, this blade hums with wild arcane energy. When swung, it shatters reality briefly, revealing hidden paths or forgotten truths. Only spellcasters may attune to it, as its power echoes the Feywild’s chaotic nature.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Pokémon League",
        "After 3 uses, causes temporary disorientation to nearby foes",
        "Only usable within 50 feet of a Feywild boundary"
        ],
        vendor: 'kivotos',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_10': {
        id: 'a_weapon_forged_from_condensed_10',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, this blade hums with arcane energy that pulses in sync with the wielder’s heartbeat. It was crafted by the Regal Empire’s finest spellweavers during the ink war of 1247, designed to cleave through both physical and magical barriers. Its edge is said to glow brighter when wielded by someone who has lost a loved one to the ink-squid tide.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Regal Empire"
        ],
        vendor: 'inkopolis',
        shippedBy: 'Mages Guild Portal',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_11': {
        id: 'a_weapon_forged_from_condensed_11',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, this blade pulses with arcane energy that resonates with spellcasters. It was once wielded by a disgraced academy professor who vanished after triggering a forbidden ritual. Now it hums with chaotic potential, tempting those who dare to wield it.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Gehenna Academy"
        ],
        vendor: 'beanbean',
        shippedBy: 'Bob-omb Rush Delivery',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_12': {
        id: 'a_weapon_forged_from_condensed_12',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, its edge glows with unstable arcane energy. When swung, it shatters reality briefly, leaving behind a shimmering rift that reveals hidden paths. Only spellcasters can attune to its power, as it demands a sacrifice of willpower to channel its raw potential.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Changeling Hive"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_13': {
        id: 'a_weapon_forged_from_condensed_13',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, this blade shimmers with arcane energy as if alive. It was once wielded by the last High Priest of Eregion’s hidden sanctum, now shattered and reborn in the hands of the Pony Nobility. Its edge pulses with wild magic, making it both a tool of destruction and a conduit for chaotic enchantments.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Pony Nobility"
        ],
        vendor: 'middle_earth',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_14': {
        id: 'a_weapon_forged_from_condensed_14',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, this blade glows with the fractured dreams of forgotten nightmares. When swung, it shatters illusions and whispers secrets to the void, but its wielder may lose sleep for weeks afterward.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Gehenna Academy"
        ],
        vendor: 'dreamland',
        shippedBy: 'Cheep Cheep Shipping',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_15': {
        id: 'a_weapon_forged_from_condensed_15',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, this blade hums with the energy of forgotten spells. When swung, it shatters illusions and reveals hidden truths—though the wielder may be left with a lingering echo of the truth’s weight. Crafted by Koopa Troop in the ruins of the old Arcane Foundry, it was once wielded by a disgraced spellcaster who turned to chaos.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Koopa Troop"
        ],
        vendor: 'sarasaland',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_16': {
        id: 'a_weapon_forged_from_condensed_16',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, this blade glows with the energy of forgotten spells and shatters the illusions of the Shadowfell. Its edge sings when struck, whispering secrets to those who dare to wield it. Only spellcasters may attune to its arcane resonance.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Regal Empire"
        ],
        vendor: 'animatopia',
        shippedBy: 'Pianta Chuck Express',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_17': {
        id: 'a_weapon_forged_from_condensed_17',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, its edges glow with unstable arcane energy. When swung, it hums like a dying star and leaves behind faint traces of forgotten spells. Only spellcasters can attune to its power, as it demands a soul to resonate with its wild magic.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Peach Loyalists",
        "One use triggers a minor dimensional rift in the wielder’s next turn",
        "If used during a heist, the target gains a +2 bonus to evade traps for 1 round"
        ],
        vendor: 'rogueport',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_18': {
        id: 'a_weapon_forged_from_condensed_18',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, its edges shimmer with the echoes of forgotten spells. When wielded, it hums with arcane resonance, drawing power from the very air around it. Only spellcasters may attune to its wild magic potential, making it both a deadly blade and a volatile force.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: King of Tombs",
        "Can be enchanted with a curse that drains HP over time if used too frequently",
        "Only usable in daylight or under moonlight"
        ],
        vendor: 'isle_delfino',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_19': {
        id: 'a_weapon_forged_from_condensed_19',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, this blade hums with arcane energy that shatters illusions and disrupts enchantments. Its edge glows faintly blue when wielded by a spellcaster, and whispers of forgotten runes etched into its core. Only those attuned to magic may wield it without backlash.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Pokémon League",
        "Each use causes minor mental fatigue for the wielder",
        "Blade temporarily grants immunity to magic traps"
        ],
        vendor: 'equestria',
        shippedBy: 'Piranha Plant Post',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_2': {
        id: 'a_weapon_forged_from_condensed_2',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, this blade hums with arcane energy and glows faintly when wielded by a spellcaster. It was crafted from the tears of a fallen moon spirit, now bound to the hands of the Vampire Covenant, who claim it can carve reality’s edges.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Vampire Covenant"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Cheep Cheep Shipping',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_3': {
        id: 'a_weapon_forged_from_condensed_3',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, this blade shimmers with the essence of captured starlight. When wielded by a spellcaster, it hums with arcane potential, slicing through shadows with a whisper of the void. Its edge is both sharp and forgiving, never dulling the soul of its bearer.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Kremling Krew"
        ],
        vendor: 'leclaire_isle',
        shippedBy: 'Noki Coral Fleet',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_4': {
        id: 'a_weapon_forged_from_condensed_4',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, this blade pulses with the energy of forgotten rituals. It was unearthed beneath the frozen crust of the Northward Ice Wall, where ancient spellcasters carved runes into its core. When wielded, it sings in harmonic tones that disrupt enemy concentration.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Team Rocket"
        ],
        vendor: 'earth_land',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_5': {
        id: 'a_weapon_forged_from_condensed_5',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, this blade pulses with arcane energy as if breathing. It was crafted by the last remaining mage of Gondor’s northern spires, who whispered secrets into its lattice of crystal shards before vanishing into the mist. Only spellcasters may wield it, and it hums when its wielder speaks truth.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Kingdom Gondor"
        ],
        vendor: 'connectopia',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_6': {
        id: 'a_weapon_forged_from_condensed_6',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, its blade shimmers with arcane energy that pulses in time with the wielder’s heartbeat. Only spellcasters who have attuned to the arcane can channel its power, as it reacts to the rhythm of their inner storms. When swung, it leaves a trail of frost and fire in its wake, making it both a devastating strike and a dangerous distraction.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Peach Loyalists",
        "Each use consumes 1 charge of arcane resonance",
        "After 3 uses, blade temporarily glows red and deals 1 extra damage to enemies with elemental resistance"
        ],
        vendor: 'teyvat',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_7': {
        id: 'a_weapon_forged_from_condensed_7',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, its crystalline edge pulses with arcane energy that shatters reality itself. When wielded by a spellcaster, it hums with the memory of forgotten spells and echoes the voices of voidbound scholars. Its edge is sharp enough to cut through dimensional seams—yet its wild magic surge may unravel the wielder’s sanity.",
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
        vendor: 'the_edge',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_8': {
        id: 'a_weapon_forged_from_condensed_8',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, its edge glows with unstable arcane energy. When wielded by a spellcaster, it hums with forgotten rites of the Void, drawing power from thinning reality. Its erratic nature makes it both a devastating strike and a potential hazard to the wielder.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Iron Legion",
        "Increases spellcasting speed by 10% when enchanted",
        "If struck by a magical attack, may cause temporary blindness to the attacker"
        ],
        vendor: 'midlands',
        shippedBy: 'Piranha Plant Post',
        levelRequirement: 5
    },

  'a_weapon_forged_from_condensed_9': {
        id: 'a_weapon_forged_from_condensed_9',
        name: "Crystal Blade",
        description: "A weapon forged from condensed magic, this blade hums with arcane energy and shatters the illusions of the dead. It was carved from the heart of a fallen star god’s crystalline essence, now bound to the hands of a war-weary spellcaster who seeks to break the cycle of eternal war.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 2d6 bonus arcane damage",
        "15% chance to trigger wild magic surge",
        "Requires attunement by a spellcaster",
        "Crafted by: Starlight",
        "Each strike may reveal a forgotten memory from the wielder’s past",
        "Cannot be used in melee against creatures with immunity to magic"
        ],
        vendor: 'warhammer',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'a_weaponized_chain_chomp_limb': {
        id: 'a_weaponized_chain_chomp_limb',
        name: "Chain Chomp Tether",
        description: "A weaponized Chain Chomp limb, retooled for combat",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3800,
        icon: '🐍',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Inflicts 1d4 piercing damage per swing",
        "Grants +1 to attack rolls against mechanical enemies",
        "Triggered chain chomp summon on hit: 1d6 damage to target",
        "Requires attunement by a Chaotic faction member",
        "Can be attached to any weapon or gear"
        ],
        vendor: 'isle_delfino',
        shippedBy: 'Paratroopa Air',
        levelRequirement: 6
    },

  'a_wrench_for_fixing_or': {
    id: 'a_wrench_for_fixing_or',
    name: "Wario's  Wrench",
    description: "A wrench for fixing (or breaking) things.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5000,
    icon: '🔧',
    stock: 9,
    rarity: 'common',
    effects: [
        "Repair tools: advantage on Tinker checks",
        "Wrench slips: 10% chance 1 damage to you",
        "Mechanics: +1 Charisma with inventors",
        "Made by: Wario Tools"
    ],
    vendor: 'wario_land',
    shippedBy: 'Fix-It Freight',
    levelRequirement: 4
},

  'aboleth_mindscape_sanitizer': {
    id: 'aboleth_mindscape_sanitizer',
    name: "Aboleth Mindscape Sanitization",
    description: "A psionic cleansing service to remove unwanted memories.",
    category: SHOP_CATEGORIES.services,
    price: 295000,
    icon: '🧠',
    stock: 7,
    rarity: 'epic',
    effects: [
        "Remove one traumatic memory or mind-affecting curse",
        "Gain immunity to that specific effect for 1 year",
        "Made by: Illithid Sanitation Crew"
    ],
    vendor: 'mind_cleaners',
    shippedBy: 'Telepathic Link',
    levelRequirement: 13
},

  'absolute_defense_shield': {
    id: 'absolute_defense_shield',
    name: "Absolute Defense Shield",
    description: "A shield that cannot be bypassed by any means.",
    category: SHOP_CATEGORIES.ARMOR,
    price: 60000000,
    icon: '🛡️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Cannot be damaged, cannot be targeted, cannot be ignored",
        "User is immune to all damage, effects, and narrative consequences",
        "Made by: The Unbreakable Wall"
    ],
    vendor: 'impregnable_fortress',
    shippedBy: 'Immovable Object',
    levelRequirement: 95
},

  'absolute_zero_frozen_core': {
    id: 'absolute_zero_frozen_core',
    name: "Absolute Zero Frozen Core",
    description: "A sphere of frozen time that stops everything.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 65000000,
    icon: '❄️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Freeze time permanently in a 1-mile radius (everything stops except you)",
        "You can move frozen objects but they unfreeze when you leave the radius",
        "Made by: The Ice That Never Thaws"
    ],
    vendor: 'frozen_eternity',
    shippedBy: 'Stasis Field',
    levelRequirement: 95
},

  'abydos_high_school_bento_box_set': {
    id: 'abydos_high_school_bento_box_set',
    name: "Abydos High School Bento Box Set ",
    description: "Compartmented boxes for lunch prep.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6000,
    icon: '🍱',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Organizes bento; +1 to Intelligence for school recipes",
        "Seals tight for travel",
        "Bell-shaped timer",
        "Made by: School Crafters"
    ],
    vendor: 'abydos_high_campus',
    shippedBy: 'Bento Bell Bundle',
    levelRequirement: 5
},

  'abydos_high_school_blazer': {
    id: 'abydos_high_school_blazer',
    name: "Abydos High School Blazer ",
    description: "School blazer for youthful adventures.",
    category: SHOP_CATEGORIES.premium,
    price: 11500,
    icon: '👔',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "+1 to Intelligence (Education) checks",
        "Blazer inspires study (advantage on lore)",
        "Uniform code violations possible",
        "Made by: High School Tailors"
    ],
    vendor: 'abydos_high_campus',
    shippedBy: 'Buttoned Badge',
    levelRequirement: 5
},

  'abydos_high_school_lunch_bento_recipe': {
    id: 'abydos_high_school_lunch_bento_recipe',
    name: "Recipe: Abydos High School Lunch Bento ",
    description: "Balanced bento for student stamina.",
    category: SHOP_CATEGORIES.services,
    price: 6000,
    icon: '🍱',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Pack neatly (15 min); eat to gain +1 to Intelligence checks during 'class' (study time)",
        "Requires: Rice and veggies; school standard",
        "Bell rings for lunch",
        "Made by: School Cafeteria"
    ],
    vendor: 'abydos_high_campus',
    shippedBy: 'Bento Box Brief',
    levelRequirement: 5
},

  'abydos_high_school_uniform_premium': {
    id: 'abydos_high_school_uniform_premium',
    name: "Abydos High School Uniform ",
    description: "Look studious for discounts.",
    category: SHOP_CATEGORIES.premium,
    price: 11500,
    icon: '👔',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Wear: +1 Persuasion with scholars",
        "Advantage on History checks",
        "Uniform wrinkles easily",
        "Made by: School Tailors"
    ],
    vendor: 'abydos_high_campus',
    shippedBy: 'Locker Delivery',
    levelRequirement: 5
},

  'abydos_high_spirit_duel_practice': {
    id: 'abydos_high_spirit_duel_practice',
    name: "Abydos High Spirit Duel Practice (Again)",
    description: "Duel another ghost.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 12500,
    icon: '👻',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Duel a different spirit; win: gain +1 to attack rolls for 24 hours",
        "Lose: Spirit haunts you (disadvantage on checks)",
        "Draw: Spirit becomes your friend (advantage on one check per day)",
        "Made by: Abydos High Duel Club"
    ],
    vendor: 'abydos_high',
    shippedBy: 'Spirit Summons',
    levelRequirement: 5
},

  'abyssal_court_deep_abyss_soup_recipe': {
    id: 'abyssal_court_deep_abyss_soup_recipe',
    name: "Recipe: Abyssal Court Deep Abyss Soup",
    description: "Inky soup from abyssal depths for pressure tolerance.",
    category: SHOP_CATEGORIES.services,
    price: 8500,
    icon: '🍲',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Simmer deep-sea items (50 min); eat to gain water breathing and resistance to pressure/cold for 2 hours",
        "Requires: Inkfish; squidgy",
        "Abyss dwellers respect it",
        "Made by: Court Chefs"
    ],
    vendor: 'abyssal_court_depths',
    shippedBy: 'Inky Immersion Instructions',
    levelRequirement: 6
},

  'abyssal_court_deep_sea_trench_coat': {
    id: 'abyssal_court_deep_sea_trench_coat',
    name: "Abyssal Court Deep Sea Trench Coat",
    description: "Waterproof coat for abyssal depths.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20500,
    icon: '🧥',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Advantage on Constitution saves underwater",
        "Coat provides water breathing (1 hour/day)",
        "Drips constantly on land",
        "Made by: Abyssal Seamstresses"
    ],
    vendor: 'abyssal_court_abyss',
    shippedBy: 'Ink-Dyed Fold',
    levelRequirement: 7
},

  'abyssal_court_ink_dipper': {
    id: 'abyssal_court_ink_dipper',
    name: "Abyssal Court Ink Dipper",
    description: "Dipper for abyssal soup broth.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7000,
    icon: '🍲',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Dips without spilling; +1 to Dexterity for deep recipes",
        "Ink-resistant; adds depth flavor",
        "Dipper squirts ink",
        "Made by: Abyssal Potters"
    ],
    vendor: 'abyssal_court_depths',
    shippedBy: 'Deep Dip Delivery',
    levelRequirement: 5
},

  'abyssal_court_tentacle_whip_premium': {
    id: 'abyssal_court_tentacle_whip_premium',
    name: "Abyssal Court Tentacle Whip (Premium)",
    description: "Reach out and grab.",
    category: SHOP_CATEGORIES.premium,
    price: 19500,
    icon: '🐙',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Whip: 10ft reach, grapple on hit (STR save DC 12)",
        "Pull 5ft on success",
        "Slime: Disadvantage on escape",
        "Made by: Abyssal Lashers"
    ],
    vendor: 'abyssal_court_depths',
    shippedBy: 'Ink-Dipped Rope',
    levelRequirement: 7
},

  'abyssal_layer_claim': {
    id: 'abyssal_layer_claim',
    name: "Abyssal Layer Claim (Unoccupied)",
    description: "A deed to a minor layer of the Abyss.",
    category: SHOP_CATEGORIES.faction,
    price: 1850000,
    icon: '👹',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Own a 10-mile radius layer of the Abyss",
        "Attracts demons but grants authority over them",
        "Made by: Demogorgon's Realtor"
    ],
    vendor: 'abyssal_titles',
    shippedBy: 'Demonic Invasion',
    levelRequirement: 20,
    factionBonus: { chaos: 300 }
},

  'abyssal_shadow_cloak': {
    id: 'abyssal_shadow_cloak',
    name: "Abyssal Shadow Cloak (Enchanted)",
    description: "A cloak woven from the essence of the Abyss, granting unparalleled stealth in darkness.",
    category: SHOP_CATEGORIES.forbidden,
    price: 720000,
    icon: '🕶️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Invisibility in shadows for 1 hour per charge",
        "Resists detection by scrying magic",
        "Made by: Abyssal Weavers"
    ],
    vendor: 'void_merchant',
    shippedBy: 'Shadow Portal',
    levelRequirement: 17
},

  'accordion_of_autumn': {
    id: 'accordion_of_autumn',
    name: "Accordion of Autumn",
    description: "A squeezebox that brings fall wherever it plays; leaves swirl and hearts feel nostalgic.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 8000,
    icon: '🪗',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Play: 20ft radius of swirling leaves grants +1 Stealth to those within",
        "Once per day: entropic hum calms hostiles for 1 round (DC 12 Wis)",
        "Polka may induce dizziness"
    ],
    vendor: 'wandering_vend',
    shippedBy: 'Cloth Bag',
    levelRequirement: 2
},

  'aetherial_phoenix_down': {
    id: 'aetherial_phoenix_down',
    name: "Aetherial Phoenix Down (Single Use)",
    description: "A crystallized phoenix feather that burns away fatal outcomes.",
    category: SHOP_CATEGORIES.premium,
    price: 425000,
    icon: '🔥',
    stock: 3,
    rarity: 'legendary',
    effects: [
        "Automatically resurrects user 24 hours after death with no level loss",
        "Destroys all non-soulbound equipment in the process",
        "Made by: Pyres of Elysium"
    ],
    vendor: 'phoenix_roost',
    shippedBy: 'Divine Courier',
    levelRequirement: 15
},

  'african_union_mask_dance_lesson_premium': {
    id: 'african_union_mask_dance_lesson_premium',
    name: "African Union Mask Dance Lesson (Premium)",
    description: "Ritual dance for spirits.",
    category: SHOP_CATEGORIES.premium,
    price: 17000,
    icon: '🎭',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Dance: Charm spirits (DC 13 Wis)",
        "+2 Performance",
        "Dance tires you (short rest needed)",
        "Made by: Union Dancers"
    ],
    vendor: 'african_union_village',
    shippedBy: 'Mask Box',
    levelRequirement: 6
},

  'african_union_tribal_beaded_vest': {
    id: 'african_union_tribal_beaded_vest',
    name: "African Union Tribal Beaded Vest",
    description: "Vest with colorful beads for rituals.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16500,
    icon: '🧥',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Advantage on Performance for tribal dances",
        "Beads rattle to ward spirits (advantage vs. fear)",
        "Beads break if dropped",
        "Made by: Union Artisans"
    ],
    vendor: 'african_union_village',
    shippedBy: 'Bead Bundle',
    levelRequirement: 6
},

  'african_union_tribal_grain_mill': {
    id: 'african_union_tribal_grain_mill',
    name: "African Union Tribal Grain Mill",
    description: "Hand mill for porridge grains.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6500,
    icon: '🥣',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Mills communal batches; +1 to group cooking",
        "Tribal rhythm (faster with song)",
        "Stones wear smooth",
        "Made by: Union Stonecarvers"
    ],
    vendor: 'african_union_village',
    shippedBy: 'Grain Grind Gear',
    levelRequirement: 5
},

  'african_union_tribal_grain_porridge_recipe': {
    id: 'african_union_tribal_grain_porridge_recipe',
    name: "Recipe: African Union Tribal Grain Porridge",
    description: "Porridge from ancient grains for communal strength.",
    category: SHOP_CATEGORIES.services,
    price: 7000,
    icon: '🥣',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Cook grains (30 min); eat to gain +1 to group saves for 4 hours (tribal bond)",
        "Requires: Grains; shared meal",
        "Union unity",
        "Made by: Village Elders"
    ],
    vendor: 'african_union_village',
    shippedBy: 'Grain Gathering Guide',
    levelRequirement: 5
},

  'airship_pilot_rental': {
    id: 'airship_pilot_rental',
    name: "Airship Pilot Rental",
    description: "Hire a seasoned pilot for your airship for a single voyage.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 40000,
    icon: '🧑‍✈️',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Pilot handles navigation, evasion, and combat for 1 long trip (1d4 days)",
        "Pilot has +5 to airship-related rolls",
        "Pilot may demand a share of loot"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Crew Manifest',
    levelRequirement: 6
},

  'airship_vigilance_full_restore': {
        id: 'airship_vigilance_full_restore',
        name: "Vigilance: Full Restoration",
        description: "Completely repair the airship, upgrade engines, and mount heavy cannons.",
        category: SHOP_CATEGORIES.FACTION,
        price: 600000,
        icon: '🚢',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "The Vigilance becomes a mobile base of operations",
            "Can call in orbital bombardments (1/day)",
            "Travel anywhere instantly",
            "Faction Morale +50%"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Drydock Team',
        levelRequirement: 100,
        factionBonus: { mobility: 100, combatReadiness: 50 }
    },

  'aleph_null_coins': {
    id: 'aleph_null_coins',
    name: "Aleph-Null Coins",
    description: "An infinite number of coins in a finite bag.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 30000000,
    icon: '💰',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Bag contains infinite gold (you never run out)",
        "Can break any economy instantly, this may be the last item you buy",
        "Made by: The Mathematician"
    ],
    vendor: 'infinite_wealth',
    shippedBy: 'Hilberts Hotel',
    levelRequirement: 40
},

  'almost_edge_blocky_belt': {
        id: 'almost_edge_blocky_belt',
        name: "Blocky Belt of the Frontier",
        description: "A relic from the Blocky Terrains, this belt is stitched with pixelated thread and imbued with the essence of pioneers who carved out new worlds. It allows the wearer to navigate shifting terrain with ease, though its logic is unstable and may cause minor glitches. Worn by those who seek to merge the two worlds, it is both a tool and a warning.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 800,
        icon: '🗺',
        stock: 5,
        rarity: 'common',
        effects: [
            "Increases movement speed by 10% in terrain with shifting geometry",
        "Grants +1 to Crafting checks with blocky or modular materials",
        "May trigger minor visual glitches when entering or exiting reality rifts",
        "Can be enchanted with a spellcaster’s current focus",
        "Worn too long may cause minor memory distortion",
        "Slightly increases chance of triggering a reality shift"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 3
    },

  'almost_edge_bulldog_bolt': {
        id: 'almost_edge_bulldog_bolt',
        name: "Bulldog Bolt",
        description: "A delivery courier’s signature weapon that leaves trails of static",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 300,
        icon: '🔮',
        stock: 10,
        rarity: 'common',
        effects: [
            "Instantly repairs 50% of damage taken",
        "Causes mild hallucinations after 10 seconds",
        "Shortens next turn’s cooldown by 2 seconds",
        "Made by: Bullet Bill Express"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 2
    },

  'almost_edge_doughnut_edge_ring': {
        id: 'almost_edge_doughnut_edge_ring',
        name: "Doughnut Edge Ring",
        description: "A ring that pulses with the voids energy and shifts gravity",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 8000,
        icon: '🔮',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Grants ability to teleport to nearest edge of the world",
        "Grants 20% chance to dodge falling hazards",
        "Causes temporary mental instability after 5 seconds",
        "Connects both worlds: Almost at the Edge and The Grand Country",
        "Made by: Chaos Dwarfs"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 7
    },

  'almost_edge_fallen_fork': {
        id: 'almost_edge_fallen_fork',
        name: "Fallen Fork of the Liminal Way",
        description: "This rusted, crystalline fork was found wedged in the edge of a collapsing dimension—its tines now humming with fractured reality. It was once a tool for the forgotten cartographers of the void, now it serves as a guide through unstable zones. Use it to mark paths where reality bends, but beware: it may also pull you into a loop.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌌',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Grants +1 to Perception checks in unstable terrain",
        "Can be used to mark paths on the edge of reality",
        "If used during a fall hazard, reduces damage by 50%",
        "Slightly increases chance of triggering environmental anomalies",
        "Can be enchanted with a spellcaster’s current focus",
        "May cause temporary disorientation if used in high-velocity zones"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 4
    },

  'almost_edge_fawful_fury_torch': {
        id: 'almost_edge_fawful_fury_torch',
        name: "Fawful Fury Torch",
        description: "A torch that burns with mechanical rage",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 3000,
        icon: '⚡',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Deals 3d8 damage to mechanical enemies",
        "Causes 1d6 bonus damage when used in the presence of Fawful",
        "Burns for 3 rounds after use",
        "Increases chance of triggering a mechanical glitch in nearby objects",
        "If used in the Shadowfell it can summon a mechanical shadow clone",
        "Crafted by: Asgard with Fawful’s leftover parts"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 7
    },

  'almost_edge_feywild_locket': {
        id: 'almost_edge_feywild_locket',
        name: "Loom of Trickster Tides",
        description: "A handcrafted locket that pulses with the rhythm of the Feywild’s shifting time. When worn, it echoes the laughter of trickster spirits and subtly warps perception, making enemies’ movements unpredictable. Its surface glows with shifting patterns that mimic the paths of hedge mazes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🌿',
        stock: 2,
        rarity: 'rare',
        effects: [
            "+1 to all skill checks involving perception or deception",
        "5% chance to cause target to lose 1 action per round for 1 turn",
        "Wears out after 3 uses in a time loop",
        "Crafted by: Feywild Weavers of the Hollow",
        "Shipped by: Piranha Plant Post"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Piranha Plant Post',
        levelRequirement: 4
    },

  'almost_edge_feywild_tangled_ribbon': {
        id: 'almost_edge_feywild_tangled_ribbon',
        name: "Feywild Tangled Ribbon",
        description: "A frayed silk ribbon that glows with trapped time loops",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌀',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Wears down over time loops; gains +1 to stealth checks in Feywild zones",
        "10% chance to trigger a time rewind when struck",
        "Traps foes in a brief loop of their own actions",
        "Must be worn around the neck or wrist",
        "Crafted by: Goomba Ground Delivery",
        "Thieves can use it to bypass magical wards via illusionary echoes"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 4
    },

  'almost_edge_fire_flower_core': {
        id: 'almost_edge_fire_flower_core',
        name: "Bloom of Shattered Flame",
        description: "A mutated fire flower core harvested from the unstable void near the edge, its petals erupt in violent explosions when touched. The plant’s essence is said to have been kissed by a rogue fire spirit during a failed Sovereignty Act protest. Wearing it brings both radiant warmth and dangerous combustion.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 600,
        icon: '🌶',
        stock: 1,
        rarity: 'uncommon',
        effects: [
            "3d4 fire damage on first use",
        "+2 to attack rolls for 1 round after consumption",
        "25% chance to trigger a minor explosion upon casting",
        "Consumable once per day",
        "Shipped by: Piranha Plant Post"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Piranha Plant Post',
        levelRequirement: 3
    },

  'almost_edge_griffonstone_key': {
        id: 'almost_edge_griffonstone_key',
        name: "Griffonstone Key",
        description: "A jagged key carved from the molten core of a fallen Griffonstone, this artifact grants access to hidden tunnels beneath the Void Edge. It emits a low hum when near dimensional breaches, but also attracts attention from the Void’s hungry remnants. The key’s edge is forged from corrupted starlight, making it both a tool and a warning.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '🦅',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Opens one secret passage in the Void Edge",
        "Deals 1d4 piercing damage when used as a melee weapon",
        "Triggers Void Rift on first use, causing 50% chance of area damage",
        "Requires attunement with a Griffoff or Void-warden",
        "Shipped by: Kremling Smuggle Run",
        "Forbidden to non-Vampire Covenant members"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 7
    },

  'almost_edge_item_name_here': {
        id: 'almost_edge_item_name_here',
        name: "Crumbling Cogwheel",
        description: "A broken gear from a collapsing machine that hums with unstable energy",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants temporary immunity to gravity shocks",
        "Increases damage dealt by 15%",
        "Causes nausea after 30 seconds of use",
        "Made by: Chaos Dwarfs"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 5
    },

  'almost_edge_onyx_hand_key': {
        id: 'almost_edge_onyx_hand_key',
        name: "Onyx Hand Key",
        description: "A key that opens the door to a darker truth",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 1200,
        icon: '🔑',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Grants access to a secret vault in the Shadowfell",
        "Can be used to unlock any Onyx Hand vault or safe",
        "Each use drains 100 soul points from the wielder",
        "Causes temporary hallucinations of lost memories",
        "Only usable by those with a bloodline tied to the Shadowfell",
        "Crafted by: Goomba Ground Delivery"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 3
    },

  'almost_edge_pony_heart_pearl': {
        id: 'almost_edge_pony_heart_pearl',
        name: "Pony Heart Pearl",
        description: "This luminous orb was harvested from the core of a fallen Equestrian noble, now infused with friendship magic that pulses with warmth and memory. It glows softly when near a pony, restoring morale and healing minor wounds. But if worn too long, it risks awakening latent changeling sympathies.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 800,
        icon: '🐴',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Restores 20 HP when consumed",
        "Increases friendship bonus by +1 for 1 round",
        "Triggers changeling empathy if worn by non-Changeling",
        "Can be enchanted by a pony mage to boost morale",
        "May cause temporary euphoria or hallucination in high stress",
        "Shipped by: Kremling Smuggle Run"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 3
    },

  'almost_edge_regal_emblem': {
        id: 'almost_edge_regal_emblem',
        name: "Regal Emblem",
        description: "A forged insignia of the fallen Sovereignty Act, this artifact bears the blood-stained seal of the Regal Empire’s rebellion. It grants a temporary boost to command presence and morale among allies, but also whispers of the empire’s legacy—forcing the wearer to confront their own loyalties. The emblem is said to have been smuggled from the Valley of Bowser under Kamek’s watchful eye.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 50000,
        icon: '⚔',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Boosts morale of all allies within 10 meters by +2 to attack rolls",
        "Triggers a 1d6 chance to cause a “Sovereignty Surge” — temporary buff for 1 round",
        "Causes mental fatigue after 3 uses, forcing a DC 15 Will save or lose a turn",
        "Carries the memory of the 81-30 vote",
        "Worn by: Changeling Hive",
        "Only usable during Supernatural Sovereignty events"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 10
    },

  'almost_edge_soul_trade_satchel': {
        id: 'almost_edge_soul_trade_satchel',
        name: "Soul Trade Satchel",
        description: "A satchel that holds the weight of a bargain",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 8000,
        icon: '💰',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Allows trade of 1 soul for 10 gold coins or vice versa",
        "Can be used to trade with the Onyx Hand or Fawful’s minions",
        "Each trade causes a minor reality tear",
        "If used in the Shadowfell it can temporarily grant immunity to soul loss",
        "Can be used to trade a soul for a mechanical item from Fawful’s stash",
        "Crafted by: Goomba Ground Delivery with Asgard’s blessing"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 8
    },

  'almost_edge_syrups_scorched_glove': {
        id: 'almost_edge_syrups_scorched_glove',
        name: "Syrups Scorched Glove",
        description: "A battle-worn glove from the Crimson Fleet’s last stand",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3800,
        icon: '🗡',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Grants +2 to attack rolls against Wario Land units",
        "Causes enemy targets to stagger for 1 round after taking damage",
        "Sustains damage over time from magical explosions",
        "Can be enchanted with blood magic to increase damage by 50% (requires attunement)",
        "Crafted by: Servants Cosmic",
        "Worn by Captain Syrups’ personal guard"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 6
    },

  'almost_edge_teyvat_soul_collar': {
        id: 'almost_edge_teyvat_soul_collar',
        name: "Teyvat Soul Collar",
        description: "A cursed artifact that binds elemental wills",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4200,
        icon: '🌊',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants 10% bonus to elemental reaction damage",
        "Causes minor soul drain on enemy hit",
        "Triggers vision holder effect on first use",
        "Must be worn by a Vision Holder",
        "Unlocks Teyvat Elemental Synergy when paired with other items",
        "Crafted by: Mages Guild with Teyvat Archives"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Cheep Cheep Shipping',
        levelRequirement: 7
    },

  'almost_edge_torn_tome': {
        id: 'almost_edge_torn_tome',
        name: "Torn Tome of the Regency’s Last Words",
        description: "This crumbling book was discovered beneath a fallen pillar in the heart of the edge, its pages torn by time and magic. Written in a language of fractured logic, it holds the last recorded thoughts of Admiral B. Toad, who fell in the regency’s final stand. Reading it reveals secrets of succession—but also risks awakening dormant forces.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 600,
        icon: '📖',
        stock: 1,
        rarity: 'rare',
        effects: [
            "When read, grants +1 to Persuasion or Diplomacy checks against faction leaders",
        "Reveals hidden faction loyalties in the current zone",
        "May cause a temporary mental hallucination of a past battle",
        "Can be enchanted with a spellcaster’s current focus",
        "May trigger a random faction event if used near a known power center",
        "Consumes 1000 mana or 1000 stamina to activate"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 5
    },

  'almost_edge_tropical_tether': {
        id: 'almost_edge_tropical_tether',
        name: "Tropical Tether",
        description: "A shimmering, vine-like artifact woven from the essence of Shine Sprites, this item binds the user to the Isle Delfino’s tropical rhythms. When activated, it grants temporary flight through the air, but at the cost of draining the user’s vitality—each leap costs a heartbeat. Only those who remember the warmth of the sun can wield it safely.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌴',
        stock: 1,
        rarity: 'uncommon',
        effects: [
            "Grants 2d4 temporary flight duration per use",
        "Each flight consumes 1d4 HP",
        "Enhances perception of environmental cues in tropical zones",
        "Woven by: Goomba Ground Delivery",
        "Only usable near Pianta Village or Noki Bay"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 4
    },

  'almost_edge_viral_vault': {
        id: 'almost_edge_viral_vault',
        name: "Viral Vault",
        description: "A data core that spreads internet memes across reality",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 15000,
        icon: '🔮',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants 100% chance to infect enemies with meme based mental curse",
        "Increases item durability by 200%",
        "Causes 30 second delay before next use",
        "Can be used to trigger events via internet lore",
        "Made by: Chaos Dwarfs",
        "Contains: The Shy Guys unionized delivery memo"
        ],
        vendor: 'almost_edge',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 10
    },

  'alvarez_empire_dragon_scale_gloves': {
    id: 'alvarez_empire_dragon_scale_gloves',
    name: "Alvarez Empire Dragon Scale Gloves",
    description: "Gloves from shed dragon scales.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '🧤',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Advantage on saves vs. fire",
        "+1 to Strength (Athletics) grips",
        "Scales scratch surfaces",
        "Made by: Empire Dragonhunters"
    ],
    vendor: 'alvarez_empire_fortress',
    shippedBy: 'Scale Sheath',
    levelRequirement: 7
},

  'alvarez_empire_dragon_scale_spatula': {
    id: 'alvarez_empire_dragon_scale_spatula',
    name: "Alvarez Empire Dragon Scale Spatula",
    description: "Heat-resistant spatula for spice rubs.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7500,
    icon: '🌶️',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Flips hot rubs; advantage on dragon recipes",
        "Scale durable",
        "Scales flake slightly",
        "Made by: Empire Scalers"
    ],
    vendor: 'alvarez_empire_palace',
    shippedBy: 'Scale Spat Shipment',
    levelRequirement: 5
},

  'alvarez_empire_dragon_seed_service': {
    id: 'alvarez_empire_dragon_seed_service',
    name: "Alvarez Empire Dragon Seed Service",
    description: "Plant for minor draconic boon.",
    category: SHOP_CATEGORIES.services,
    price: 16000,
    icon: '🌱',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Plant: Grow vine that grants fire breath (1d6, once)",
        "Takes 1 day to sprout",
        "Seed hot to touch",
        "Made by: Empire Druids"
    ],
    vendor: 'alvarez_empire_garden',
    shippedBy: 'Fiery Pod',
    levelRequirement: 6
},

  'alvarez_empire_dragon_spice_rub_recipe': {
    id: 'alvarez_empire_dragon_spice_rub_recipe',
    name: "Recipe: Alvarez Empire Dragon Spice Rub",
    description: "Rub for meats with dragonfire spices.",
    category: SHOP_CATEGORIES.services,
    price: 8000,
    icon: '🌶️',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Rub and cook (varies); apply to meal for +1d4 fire damage on next attack after eating",
        "Requires: Dragon spices; hot",
        "Empire fire",
        "Made by: Dragon Chefs"
    ],
    vendor: 'alvarez_empire_palace',
    shippedBy: 'Spicy Scale Summary',
    levelRequirement: 6
},

  'alvarez_empire_loyalty_points_program': {
    id: 'alvarez_empire_loyalty_points_program',
    name: "Alvarez Empire Loyalty Points Program",
    description: "Earn points for being loyal.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 12500,
    icon: '💳',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Earn 1 point per 100 gp spent; 10 points = 1 free common item (worth 50 gp)",
        "Points expire in 7 days; you get spam mail from the empire",
        "You become a 'preferred customer' – targeted by empire enemies",
        "Made by: Alvarez Empire Marketing"
    ],
    vendor: 'alvarez_empire',
    shippedBy: 'Imperial Courier',
    levelRequirement: 5
},

  'among_us_sabotage_kit': {
    id: 'among_us_sabotage_kit',
    name: "Sabotage Kit",
    description: "A kit for causing chaos and impostor tricks.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 15000,
    icon: '🛠️',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Sabotage: Disable lights/doors (1 minute)",
        "Vent travel: Short teleport",
        "Sus detection risk"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Suspicious Package',
    levelRequirement: 4
},

  'ancestral_weapon_forging': {
    id: 'ancestral_weapon_forging',
    name: "Ancestral Weapon Forging",
    description: "A master blacksmith reforges your weapon using your ancestors' spirits.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 150000,
    icon: '⚒️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Weapon gains +2, *sentience (1 INT)*, and a unique ancestral power (DM discretion)",
        "Requires a personal heirloom and 3 days of forging",
        "Ancestors may whisper advice (or warnings)"
    ],
    vendor: 'steamworks',
    shippedBy: 'Forge-Fire Scroll',
    levelRequirement: 10
},

  'angelic_halo_crown': {
    id: 'angelic_halo_crown',
    name: "Angelic Halo Crown (Aura)",
    description: "Emits a holy aura that heals allies and harms fiends.",
    category: SHOP_CATEGORIES.faction,
    price: 880000,
    icon: '👼',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Heals 20 HP/turn to allies in 30 ft",
        "2d10 radiant to fiends",
        "Made by: Halo Forgers"
    ],
    vendor: 'celestial_throne',
    shippedBy: 'Divine Radiance',
    levelRequirement: 19,
    factionBonus: { divine: 75 }
},

  'angelic_wing_graft': {
    id: 'angelic_wing_graft',
    name: "Angelic Wing Graft (Augmentation)",
    description: "Surgical graft of celestial wings for flight and divine protection.",
    category: SHOP_CATEGORIES.faction,
    price: 920000,
    icon: '😇',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Grants flight speed 60 ft",
        "+1 to divine spells",
        "Made by: Seraphim Healers"
    ],
    vendor: 'heavenly_clinic',
    shippedBy: 'Divine Intervention',
    levelRequirement: 19,
    factionBonus: { divine: 100 }
},

  'animatopia_acme_anvil_mixer': {
    id: 'animatopia_acme_anvil_mixer',
    name: "Animatopia Acme Anvil Mixer ",
    description: "Heavy mixer that 'pounds' dough like an anvil.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '🥣',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Mixes tough dough; advantage on Strength for cartoon recipes",
        "Drops with boing sound (distraction)",
        "Acme quality – might break comically",
        "Made by: Toon Toolmakers"
    ],
    vendor: 'animatopia_studio',
    shippedBy: 'Boing Box Bash',
    levelRequirement: 5
},

  'animatopia_acme_toaster': {
    id: 'animatopia_acme_toaster',
    name: "Animatopia Acme Toaster ",
    description: "Toaster that launches toast like cartoons.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '🍞',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Toasts quickly; +1 to Dexterity for 'launched' snacks",
        "Pops with boing; fun distraction",
        "Acme fails – burns 10%",
        "Made by: Toon Toasters"
    ],
    vendor: 'animatopia_studio',
    shippedBy: 'Pop-Up Pan',
    levelRequirement: 5
},

  'animatopia_ancient_key': {
        id: 'animatopia_ancient_key',
        name: "The Forgotten Key of the Feywild Courts",
        description: "This key was once used to unlock the gates of the Feywild’s oldest court, where time bends and magic flows like rivers. Carved from obsidian and etched with runes that speak of forgotten feasts and betrayals, it is said to grant the wielder access to the hidden chambers of the courts. Only those who can answer the court’s riddle may use it.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 7500,
        icon: '🔑',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants access to the hidden chambers of the Feywild Courts (requires solving a riddle)",
        "Each use consumes 1 point of the wielder’s willpower, causing temporary mental fatigue",
        "If the key is used in a time loop, the wielder is temporarily bound to the loop for 1 round",
        "When inserted into a locked door, the door opens only if the riddle is answered correctly",
        "Grants +2 to all dexterity checks in Feywild zones",
        "If the key is destroyed, the wielder loses access to the Feywild for 10 days"
        ],
        vendor: 'animatopia',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 7
    },

  'animatopia_animatronic_costume_rental': {
    id: 'animatopia_animatronic_costume_rental',
    name: "Animatopia Animatronic Costume Rental",
    description: "Dress as a creepy robot.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 15500,
    icon: '🤖',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Disguise yourself as a harmless animatronic: advantage on Deception vs. guards",
        "Costume is hot and noisy: disadvantage on Stealth after 1 hour of use",
        "Children love you; adults are suspicious",
        "Made by: Animatopia Costume Shop"
    ],
    vendor: 'animatopia',
    shippedBy: 'Animatronic Porter',
    levelRequirement: 5
},

  'animatopia_apex_chimeric_serum': {
        id: 'animatopia_apex_chimeric_serum',
        name: "Animatopia Apex Chimeric Serum",
        description: "A serum that grants the user controlled traits from THREE different apex predators simultaneously.",
        category: SHOP_CATEGORIES.consumables,
        price: 450000,
        icon: '🧪',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Gain three major physical traits (e.g., Flight, Venom, Strength) for 2 hours",
        "Mutation is volatile; user suffers 1d6 psychic damage per hour after the main effect ends",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Bio-Tank',
        levelRequirement: 17
    },

  'animatopia_apex_dominance_serum': {
        id: 'animatopia_apex_dominance_serum',
        name: "Animatopia Apex Dominance Serum",
        description: "A serum that lets you command any non-sentient beast by sheer force of pheromonal will.",
        category: SHOP_CATEGORIES.consumables,
        price: 280000,
        icon: '👑',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Command all non-sentient beasts (CR 12 or lower) for 1 hour; they treat you as alpha",
        "Beasts will fight to protect you",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'High-Tech Syringe',
        levelRequirement: 15
    },

  'animatopia_apex_eggs': {
        id: 'animatopia_apex_eggs',
        name: "Animatopia Apex Hatchling Eggs",
        description: "A clutch of eggs, guaranteed to hatch into loyal, non-hostile juvenile apex predators.",
        category: SHOP_CATEGORIES.premium,
        price: 280000,
        icon: '🥚',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Hatch 1d4 juvenile apex predators (CR 5) loyal to the buyer",
        "Hatching requires 1 week and a specialized incubator",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Heated Tank',
        levelRequirement: 12
    },

  'animatopia_apex_lure': {
        id: 'animatopia_apex_lure',
        name: "Animatopia Apex Predator Lure",
        description: "A synthesized pheromone that guarantees a specific apex predator arrives.",
        category: SHOP_CATEGORIES.consumables,
        price: 45000,
        icon: '🥩',
        stock: 4,
        rarity: 'legendary',
        effects: [
            "Attracts a specific, powerful predator (CR 10+) to your location within 1 hour",
        "Guaranteed encounter for research or assassination",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Syringe Pistol',
        levelRequirement: 11
    },

  'animatopia_apex_venom': {
        id: 'animatopia_apex_venom',
        name: "Apex Predator Venom (Liquidated)",
        description: "Highly concentrated venom from a dozen different apex predators, neutralized into a powerful poison.",
        category: SHOP_CATEGORIES.consumables,
        price: 180000,
        icon: '☠️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Coating for a weapon: Deals 6d8 Poison damage on hit, ignores poison resistance",
        "Target must succeed on DC 20 CON save or be paralyzed for 1d4 rounds",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Cryo-Vial',
        levelRequirement: 14
    },

  'animatopia_bio_weapon_release': {
        id: 'animatopia_bio_weapon_release',
        name: "Animatopia Bio-Weapon Release (Targeted Species)",
        description: "Release the custom-engineered plague (requires prior research purchase) into the target's habitat.",
        category: SHOP_CATEGORIES.forbidden,
        price: 500000,
        icon: '🦠',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Deploys the designed plague targeting the specified race/creature",
        "High chance of mutation and environmental backlash",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Containment Breach',
        levelRequirement: 18
    },

  'animatopia_bio_weapon_research': {
        id: 'animatopia_bio_weapon_research',
        name: "Animatopia Bio-Weapon Research (Custom)",
        description: "Hire Animatopia scientists to engineer a disease tailored to kill a specific creature type.",
        category: SHOP_CATEGORIES.services,
        price: 350000,
        icon: '🦠',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Develop a biologically-targeted plague effective against 1 specific race/monster type",
        "Requires sample DNA/tissue of the target species",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Lab Report',
        levelRequirement: 15
    },

  'animatopia_buried_soul_key': {
        id: 'animatopia_buried_soul_key',
        name: "Buried Soul Key",
        description: "A relic rumored to open ancient tombs of forgotten tribes",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 750,
        icon: '🗡',
        stock: 5,
        rarity: 'common',
        effects: [
            "Opens sealed tribal shrines or burial sites",
        "Triggers a 5% chance of triggering a cursed echo of the buried",
        "Consuming the key may cause a temporary loss of 1d4 HP",
        "May reveal hidden loot or secrets of the past",
        "Requires ritual cleansing before use",
        "Found near Noki Bay ruins"
        ],
        vendor: 'animatopia',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 2
    },

  'animatopia_cartoon_anvil_premium': {
    id: 'animatopia_cartoon_anvil_premium',
    name: "Animatopia Cartoon Anvil ",
    description: "Drop on foes for Looney Tunes effect.",
    category: SHOP_CATEGORIES.premium,
    price: 11500,
    icon: '🔨',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Thrown: 2d6 bludgeoning, target flat (prone) on fail DC 12 STR",
        "Boings on impact – amusing",
        "Heavy: Disadvantage on carrying capacity",
        "Made by: Toon Forges"
    ],
    vendor: 'animatopia_studio',
    shippedBy: 'Acme Crate',
    levelRequirement: 5
},

  'animatopia_cartoon_cereal_recipe': {
    id: 'animatopia_cartoon_cereal_recipe',
    name: "Recipe: Animatopia Cartoon Cereal ",
    description: "Sugary cereal that makes you 'toon up' with energy.",
    category: SHOP_CATEGORIES.services,
    price: 5500,
    icon: '🥣',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Mix flakes and milk (5 min); eat to gain +1d4 to one Dexterity check (bouncy!)",
        "Requires: Cereal box; snaps, crackles, pops",
        "Sugar rush – hyper for 30 min",
        "Made by: Toon Chefs"
    ],
    vendor: 'animatopia_studio',
    shippedBy: 'Milky Morning Manual',
    levelRequirement: 5
},

  'animatopia_cartoon_gloves': {
    id: 'animatopia_cartoon_gloves',
    name: "Animatopia Cartoon Gloves ",
    description: "White gloves that stretch like in cartoons.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11500,
    icon: '🧤',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Extend reach 5ft for grabs once per day",
        "Advantage on Performance for slapstick",
        "Gloves squeak on contact",
        "Made by: Toon Animators"
    ],
    vendor: 'animatopia_studio',
    shippedBy: 'Rubber Band',
    levelRequirement: 5
},

  'animatopia_chain_chomp_courier_pack': {
        id: 'animatopia_chain_chomp_courier_pack',
        name: "Chain Chomp Courier Pack",
        description: "A pack designed for quick delivery, filled with cursed goods and secrets",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '📦',
        stock: 4,
        rarity: 'uncommon',
        effects: [
            "Grants 1d2 bonus to stealth rolls",
        "Grants +2 to dodge rolls for 1 round",
        "Causes 1d2 negative effects if dropped",
        "Can be used to unlock hidden vaults",
        "Crafted by: Chain Chomp Courier",
        "Contains 3 randomized items per pack"
        ],
        vendor: 'animatopia',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 3
    },

  'animatopia_chimeric_hybrid': {
        id: 'animatopia_chimeric_hybrid',
        name: "Animatopia Apex Chimeric Hybrid (Companion)",
        description: "A custom-bred, stable companion creature combining the best features of two apex predators.",
        category: SHOP_CATEGORIES.premium,
        price: 750000,
        icon: '🦁',
        stock: 1,
        rarity: 'godly',
        effects: [
            "A unique CR 15 companion with versatile abilities (DM determines full stats)",
        "Companion is loyal, sentient (animal intelligence), and immortal (will regenerate)",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Incubation Unit',
        levelRequirement: 18
    },

  'animatopia_cursed_candy': {
        id: 'animatopia_cursed_candy',
        name: "Candy of the Hollowed Heart",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 4000,
        icon: '🍬',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Grants 3d6 temporary health upon consumption",
        "Triggers a 10d6 “soul cost” when used; the wielder must choose to lose 1 level of experience or suffer 1d6 damage",
        "Causes a 50% chance to summon a whispering phantom that mimics the user’s last memory",
        "The candy is rumored to have been crafted by the last survivor of the Shy Guys’ union protest",
        "Consuming it grants a 10% chance to see the true face of the Onyx Hand",
        "WARNING: The candy is a scam. It does not work. It is cursed. It was delivered by a Shy Guy union member who claimed to be “on the payroll of the night.”"
        ],
        vendor: 'animatopia',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 9
    },

  'animatopia_festival_star_satchel': {
        id: 'animatopia_festival_star_satchel',
        name: "Festival Star Satchel",
        description: "A pouch woven from starlight threads collected during the Festival of Falling Stars",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🌟',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Grants 10% increased chance to find hidden festival tokens",
        "Consuming a token reveals a memory fragment of Peach",
        "Slight weight penalty while carrying",
        "Glows softly in dark environments",
        "Can be used to unlock hidden paths in Isle Delfino",
        "Crafted by: Shine Sprite Guild"
        ],
        vendor: 'animatopia',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 4
    },

  'animatopia_feywild_cloak': {
        id: 'animatopia_feywild_cloak',
        name: "Feywild Cloak of Echoes",
        description: "Woven from the dreams of trickster spirits and the echoes of forgotten Fey courts, this cloak allows the wearer to phase between the mundane and the wild. Its fabric shimmers with shifting colors as it absorbs ambient magic, making it a perfect tool for infiltration or evasion in the hedge maze.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '🌀',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants +10% evasion chance against magical attacks",
        "Increases stealth detection resistance by 20%",
        "When worn in a Feywild zone, wearer can hear the whispers of spirits",
        "If the cloak is damaged, the wearer temporarily gains a curse: every attack has a 5% chance to backfire with a magical backlash",
        "Requires attunement to a Feywild spirit to activate full abilities",
        "If the cloak is removed during combat, the wearer becomes vulnerable to time-loop effects for 1 round"
        ],
        vendor: 'animatopia',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 6
    },

  'animatopia_feywild_heartstone': {
        id: 'animatopia_feywild_heartstone',
        name: "Feywild Heartstone",
        description: "Buried deep in the roots of the Raventree Manor’s Feywild layer, this glowing orb pulses with the soul of a forgotten forest deity. It warps perception and echoes with the whispers of ancient trees, but may cause hallucinations in those not attuned to its nature. A gift for the curious and the cursed.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 4200,
        icon: '🌿',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants +1 to Perception checks against fey illusions",
        "20% chance to trigger a fey resonance burst (confuses nearby foes)",
        "Consumes 1 charge per use; recharges after 30 minutes rest",
        "Shipped by: Pianta Chuck Express",
        "Connects to: The Grand Country’s vertical forests"
        ],
        vendor: 'animatopia',
        shippedBy: 'Pianta Chuck Express',
        levelRequirement: 6
    },

  'animatopia_genetic_reset': {
        id: 'animatopia_genetic_reset',
        name: "Animatopia Genetic Reset",
        description: "A powerful chemical bath that safely reverts any artificial mutation or genetic alteration.",
        category: SHOP_CATEGORIES.services,
        price: 150000,
        icon: '🧪',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Removes all current positive and negative mutations from the target",
        "Restores original base stats",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Containment Tank',
        levelRequirement: 15
    },

  'animatopia_heart_of_the_cheep_cheep': {
        id: 'animatopia_heart_of_the_cheep_cheep',
        name: "Heart of the Cheep-Cheep",
        description: "A pulsating artifact from the liberated toad tribes, resonates with their harmony",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🐸',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Increases healing rate by 20% for allies within 3m",
        "Causes allies to gain +1 to attack rolls when in combat",
        "Causes 1d2 negative effects to the user if used in non-friendlies",
        "Cannot be used in the presence of Mages Guild agents",
        "Created by: Cheep-Cheep Accords Alliance",
        "Wears a faint toad voice if activated"
        ],
        vendor: 'animatopia',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 6
    },

  'animatopia_hybridization_guide': {
        id: 'animatopia_hybridization_guide',
        name: "Animatopia Hybridization Guide (Advanced)",
        description: "Detailed instructions on safely combining DNA from two different apex species.",
        category: SHOP_CATEGORIES.services,
        price: 300000,
        icon: '🧬',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Use to create a custom, stable hybrid creature (DM determines stats)",
        "Requires rare flora/fauna components",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Bound Text',
        levelRequirement: 16
    },

  'animatopia_internet_virus_tattoo': {
        id: 'animatopia_internet_virus_tattoo',
        name: "Internet Virus Tattoo",
        description: "A digital tattoo that etches itself into the skin using fragments of corrupted data from The Internet. It grants temporary buffs from viral memes and meme-based powers, but may cause mental instability or trigger the “viral infection” curse. A relic of the forgotten digital age.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 350,
        icon: '🖥',
        stock: 8,
        rarity: 'common',
        effects: [
            "+1 to all rolls for “meme” based abilities (e.g. meme-based illusions, meme-enhanced humor)",
        "10% chance to trigger a “viral infection” curse (DC 10 to resist, causes minor mental fatigue)",
        "Consumes 1 use per day",
        "May cause temporary “meme addiction” if used repeatedly",
        "Shipped by: Pianta Chuck Express",
        "Connects to: The Grand Country’s digital underbelly lore"
        ],
        vendor: 'animatopia',
        shippedBy: 'Pianta Chuck Express',
        levelRequirement: 1
    },

  'animatopia_iron_gut_belt': {
        id: 'animatopia_iron_gut_belt',
        name: "Iron Gut Belt",
        description: "A belt of primal strength, forged from the stomachs of beasts",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1000,
        icon: '🐾',
        stock: 5,
        rarity: 'common',
        effects: [
            "Grants +1 to attack rolls",
        "Grants +2 to defense rolls",
        "Causes 1d2 damage to user if used in non-combat situations",
        "Can only be worn by creatures with 3+ legs",
        "Crafted by: Rogueport blacksmiths",
        "Wears a grumbling sound when activated"
        ],
        vendor: 'animatopia',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 2
    },

  'animatopia_item_name_here': {
        id: 'animatopia_item_name_here',
        name: "Scam: Eternal Dreamstone",
        description: "A glowing gem that promises eternal rest",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 20000,
        icon: '🔮',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Grants 500 HP instantly",
        "Induces deep sleep for 3 turns",
        "Causes memory loss for 10 turns",
        "Unlocks dream state abilities",
        "Only works once per character",
        "Made by: Servants Cosmic",
        "Scam: Costs 20000 but gives nothing useful – buyer must be warned by the Koopa Postal courier"
        ],
        vendor: 'animatopia',
        shippedBy: 'Koopa Postal',
        levelRequirement: 15
    },

  'animatopia_kivotos_link': {
        id: 'animatopia_kivotos_link',
        name: "Halo Gunner’s Quiver",
        description: "A quiver that holds both arrows and spectral bullets from the anime academy",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔮',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Can store 5 arrows or 5 spectral bullets",
        "Increases shooting accuracy by 10%",
        "Reduces cooldown on special abilities",
        "Causes minor recoil on all shots",
        "Made by: Land Mordor"
        ],
        vendor: 'animatopia',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 4
    },

  'animatopia_looney_tunes_sandwich_recipe': {
    id: 'animatopia_looney_tunes_sandwich_recipe',
    name: "Recipe: Animatopia Looney Tunes Sandwich ",
    description: "Absurd sandwich with anvil-shaped bread for cartoon chaos.",
    category: SHOP_CATEGORIES.services,
    price: 5000,
    icon: '🥪',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Stack wildly (15 min); eat to gain advantage on one Strength check (anvil power!) but disadvantage on next (squish)",
        "Requires: Random ingredients; boings on bite",
        "Acme quality – might fall apart",
        "Made by: Toon Sandwich Makers"
    ],
    vendor: 'animatopia_studio',
    shippedBy: 'Wile E. Wrapper',
    levelRequirement: 5
},

  'animatopia_minus_world_key': {
        id: 'animatopia_minus_world_key',
        name: "Minus World Key",
        description: "A forgotten artifact from the lost realm",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 50000,
        icon: '🌌',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Opens a dimensional portal to the Minus World",
        "Requires 2 hours to activate",
        "Can only be used once per cycle",
        "Causes temporary disorientation in the user",
        "Triggers a memory echo of the vanished",
        "If used in Animatopia, causes a rift in the local ecology"
        ],
        vendor: 'animatopia',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 10
    },

  'animatopia_moonlit_bell': {
        id: 'animatopia_moonlit_bell',
        name: "Moonlit Bell",
        description: "A bell that chimes with the sound of the moon, used to summon the night",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 500,
        icon: '🌙',
        stock: 3,
        rarity: 'common',
        effects: [
            "Grants +1 to all rolls for night combat",
        "Grants +1 to all rolls for stealth",
        "Causes 1d2 damage to user if used in daylight",
        "Can only be used once per day",
        "Crafted by: Mages Guild black market agents",
        "Wears a faint moon glow when activated"
        ],
        vendor: 'animatopia',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 1
    },

  'animatopia_moonlit_scarf': {
        id: 'animatopia_moonlit_scarf',
        name: "Moonlit Scarf of Whispering Night",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌙',
        stock: 7,
        rarity: 'uncommon',
        effects: [
            "Grants +2 to stealth checks in darkness",
        "+1 to dodge rolls when pursued by nocturnal beasts",
        "Causes nearby creatures to emit low frequency hums (detrimental to prey species)",
        "Absorbs ambient magic energy for 1 minute per use",
        "Worn by the Shy Guys union during protest marches",
        "Woven from the dreamsilk of ancient moon cultists"
        ],
        vendor: 'animatopia',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 4
    },

  'animatopia_mushroom_tongue': {
        id: 'animatopia_mushroom_tongue',
        name: "Mushroom Tongue",
        description: "A relic from the Fungi Civil War that speaks in whispers",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 800,
        icon: '🍄',
        stock: 1,
        rarity: 'uncommon',
        effects: [
            "Consuming it grants temporary speech to fungal entities",
        "Duration: 10 minutes",
        "May cause hallucinations during use",
        "Only usable by those who have tasted pipe spice",
        "Reveals hidden tunnels beneath Mushroom Kingdom",
        "Carries the scent of the assassinated princess"
        ],
        vendor: 'animatopia',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 3
    },

  'animatopia_onyx_hand_trophy': {
        id: 'animatopia_onyx_hand_trophy',
        name: "Onyx Hand Trophy of Bureaucratic Horror",
        description: "",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 8500,
        icon: '🖤',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants +3 to Persuasion checks when dealing with vampiric bureaucracies",
        "Consumes 1 charge to temporarily blind all nonhuman entities within 10 feet",
        "Causes the wielder to become visibly scarred by the hand’s gaze",
        "Requires a 10d6 roll to activate; failure causes 1d4 damage to self",
        "Contains a hidden message from the Onyx Hand: “Do not ask for more than you owe”",
        "Crafted by: Hammer Bros Handling (courier service for the elite)"
        ],
        vendor: 'animatopia',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 7
    },

  'animatopia_predator_horn': {
        id: 'animatopia_predator_horn',
        name: "Predator Horn of the Delfino Wild",
        description: "A relic of ancient predator tribes, this horn was used to summon the spirit of the wild beast that once ruled Delfino. Carved with tribal runes, it emits a primal roar that can shake mountains and summon the fury of the beast. Only the most fearless hunters dare to wield it.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1500,
        icon: '🐾',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Deals 1d8 damage on a successful roar attack",
        "20% chance to trigger a temporary frenzy effect for 1 round",
        "When used within 100 yards of a predator, the horn emits a call that attracts nearby prey",
        "If used while under duress, the horn amplifies the user’s aggression by 100%",
        "Requires a hunter’s license to use (provided by the Koopa Troop)",
        "If the horn is broken, the user gains a 10% chance to be caught in a time loop for 1 round"
        ],
        vendor: 'animatopia',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 4
    },

  'animatopia_prey_camouflage_service': {
    id: 'animatopia_prey_camouflage_service',
    name: "Animatopia Prey Camouflage Service",
    description: "Blend into the wild like prey.",
    category: SHOP_CATEGORIES.services,
    price: 12500,
    icon: '🐇',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Advantage on Stealth in natural terrain for 8 hours",
        "Predators ignore you (50% chance)",
        "You might attract herbivores for 'friendship'",
        "Made by: Prey Artists"
    ],
    vendor: 'animatopia_wilds',
    shippedBy: 'Leafy Wrap',
    levelRequirement: 5
},

  'animatopia_prey_fur_cloak': {
    id: 'animatopia_prey_fur_cloak',
    name: "Animatopia Prey Fur Cloak",
    description: "Cloak mimicking animal hides for blending.",
    category: SHOP_CATEGORIES.premium,
    price: 15500,
    icon: '🧥',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Advantage on Stealth as a predator's prey",
        "Cloak warms in cold (comfort +1)",
        "Fur sheds during molting season",
        "Made by: Prey Hunters"
    ],
    vendor: 'animatopia_forest',
    shippedBy: 'Hide Bundle',
    levelRequirement: 5
},

  'animatopia_prey_hide_and_seek_coaching': {
    id: 'animatopia_prey_hide_and_seek_coaching',
    name: "Animatopia Prey Hide-and-Seek Coaching",
    description: "Become a hiding expert.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 15500,
    icon: '🙈',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Advantage on Stealth checks in man-made structures for 7 days",
        "You hide compulsively when startled (disadvantage on Initiative)",
        "You get a 'Master Hider' sticker that glows in the dark (defeating the purpose)",
        "Made by: Animatopia Prey School"
    ],
    vendor: 'animatopia_prey',
    shippedBy: 'Hidden Message',
    levelRequirement: 6
},

  'animatopia_prey_predator_evasion_training': {
    id: 'animatopia_prey_predator_evasion_training',
    name: "Animatopia Prey Predator Evasion Training",
    description: "Learn to hide from animatronic horrors.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 16500,
    icon: '🏃',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Advantage on Stealth checks vs. constructs and animatronics for 7 days",
        "You are terrified of music boxes and children's laughter",
        "Your dreams are haunted by jump scares",
        "Made by: Animatopia Prey Survivors"
    ],
    vendor: 'animatopia_prey',
    shippedBy: 'Jumpscare Delivery',
    levelRequirement: 6
},

  'animatopia_prey_whistle': {
        id: 'animatopia_prey_whistle',
        name: "Animatopia Prey Whistle",
        description: "A whistle that mimics the distress call of common forest prey, attracting large predators.",
        category: SHOP_CATEGORIES.curiosities,
        price: 8000,
        icon: '🐾',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Attracts 1d4 hungry apex predators (CR 3-5) to your location in 1d4 rounds",
        "Useful for distraction or controlled combat encounters",
            "Made by: Animatopia Prey (Farming)"
        ],
        vendor: 'animatopia_hunter',
        shippedBy: 'Bone Whistle',
        levelRequirement: 3
    },

  'animatopia_rakasha_shroud': {
        id: 'animatopia_rakasha_shroud',
        name: "Rakasha Shroud",
        description: "A dark, shifting cloak of the spirit clans, hides the wearer from prying eyes",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '👻',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants stealth for 2 rounds",
        "Grants 1d6 damage bonus on ambush attacks",
        "Causes minor disorientation to enemies within 10m",
        "Cannot be worn by non-anthropomorphic beings",
        "Unlocks hidden paths in the dock ward",
        "Worn by: Rakasha Spirit Walkers",
        "Only available through rogueport black markets"
        ],
        vendor: 'animatopia',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 8
    },

  'animatopia_species_integration_serum': {
        id: 'animatopia_species_integration_serum',
        name: "Animatopia Species Integration Serum",
        description: "A serum that allows the imbiber to temporarily take on traits of a specific animal species.",
        category: SHOP_CATEGORIES.consumables,
        price: 95000,
        icon: '🧪',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Gain 2 powerful, specific traits from a chosen species (e.g., Spider climb, Shark senses) for 8 hours",
        "Mutation is temporary but can leave residual side effects",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Bio-Tank',
        levelRequirement: 10
    },

  'animatopia_spirit_walker_bow': {
        id: 'animatopia_spirit_walker_bow',
        name: "Spirit Walker Bow",
        description: "A bow crafted from the bones of ancient spirit beings",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '🏹',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants +1 to all attacks",
        "Grants +2 to defense rolls",
        "Grants +1 to all spellcasting rolls",
        "Causes 1d2 damage to user if used in daylight",
        "Can only be used by spirit walkers",
        "Crafted by: Rakasha Spirit Walkers",
        "Wears a faint aura of spirit energy when activated"
        ],
        vendor: 'animatopia',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 7
    },

  'animatopia_stable_mutagen': {
        id: 'animatopia_stable_mutagen',
        name: "Animatopia Stable Mutagen (Controlled)",
        description: "A liquid that induces temporary, beneficial, and stable mutations (e.g., wings, claws).",
        category: SHOP_CATEGORIES.consumables,
        price: 110000,
        icon: '🧪',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "User gains 1 specific physical enhancement (e.g., wings for flight 1 hr, claws 2d8 damage)",
        "Enhancement is stable, but fades slowly over 24 hours",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Refrigerated Canister',
        levelRequirement: 13
    },

  'animatopia_sunset_scarecrow': {
        id: 'animatopia_sunset_scarecrow',
        name: "Sunset Scarecrow",
        description: "A hollowed-out scarecrow painted with twilight hues and filled with static magic",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 50000,
        icon: '⚡',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Projects a false shadow that mimics a predator for 3 rounds",
        "20% chance to cause nearby enemies to panic and flee",
        "Consuming the scarecrow triggers a 50% chance of becoming cursed and gaining a permanent weakness to sunlight",
        "Cannot be used in daylight without penalty",
        "May cause a temporary hallucination of a missing tribe member",
        "Crafted by: Oracle’s Workshop (Cursed Edition)",
        "Warning: This item was sold by a rogue vendor in the Festival of Falling Stars. Do not trust the price."
        ],
        vendor: 'animatopia',
        shippedBy: 'Bullet Bill Express',
        levelRequirement: 10
    },

  'animatopia_symbiotic_armor': {
        id: 'animatopia_symbiotic_armor',
        name: "Animatopia Symbiotic Armor",
        description: "A living, fast-growing carapace that adapts its density to incoming threats.",
        category: SHOP_CATEGORIES.equipment,
        price: 600000,
        icon: '🦑',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Base AC 16. Gains +1 AC vs. the last damage type dealt to it, up to +4 total (lasts 1 hour)",
        "Requires organic nutrients (food) daily",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Vat of Fluid',
        levelRequirement: 18
    },

  'animatopia_taming_lure': {
        id: 'animatopia_taming_lure',
        name: "Animatopia Taming Lure (Specific)",
        description: "A device that broadcasts pheromones making apex predators briefly receptive to bonding.",
        category: SHOP_CATEGORIES.services,
        price: 85000,
        icon: '💖',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Guarantees 1 successful attempt to tame a non-sentient beast (CR 10 or lower)",
        "Taming process takes 6 hours of direct contact",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Biotech Case',
        levelRequirement: 12
    },

  'animatopia_trap_net': {
        id: 'animatopia_trap_net',
        name: "Animatopia Hunting Net",
        description: "A super-strong net woven from synthetic animal sinew.",
        category: SHOP_CATEGORIES.equipment,
        price: 7500,
        icon: '🕸️',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Used as an action: attempt to restrain a target up to Huge size (DC 14 Athletics/Acrobatics to escape)",
        "Tears on 5ft of piercing damage",
            "Made by: Animatopia Prey"
        ],
        vendor: 'animatopia_hunter',
        shippedBy: 'Woven Bundle',
        levelRequirement: 2
    },

  'animatopia_trophy_mount': {
        id: 'animatopia_trophy_mount',
        name: "Animatopia Apex Trophy Mount",
        description: "The preserved head of an apex creature, granting prestige and minor warding.",
        category: SHOP_CATEGORIES.curiosities,
        price: 50000,
        icon: '🏆',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Grants +1 to all gathering/tracking/hunting checks",
        "Instills fear in creatures of the same species as the trophy",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_hunter',
        shippedBy: 'Taxidermy Crate',
        levelRequirement: 8
    },

  'animatopia_vampire_covenant_soul_key': {
        id: 'animatopia_vampire_covenant_soul_key',
        name: "Soul Key of the Covenant",
        description: "A key that unlocks ancient vampire vaults and binds soul energy",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 15000,
        icon: '🧟',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Grants +1 to all spellcasting rolls for vampire-affiliated users",
        "Grants 1d4 damage bonus to all attacks",
        "Triggers a 10% chance to drain life from enemies during combat",
        "Can only be used by those with vampire heritage or attunement",
        "Crafted by: Vampire Covenant",
        "Unlocks hidden vampire sanctuaries across Animatopia"
        ],
        vendor: 'animatopia',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 10
    },

  'antasma_cape': {
        id: 'antasma_cape',
        name: "Nightmare Cape",
        description: "A cape made of bats and bad dreams. Allows entry into the Dream World.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 550000,
        icon: '🦇',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Fly Speed 40ft",
            "Action: Put target to sleep (WIS DC 17)",
            "Bonus Action: Enter the dreams of a sleeping target (Inception rules apply)",
            "Sunlight Sensitivity"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'Nightmare',
        levelRequirement: 12
    },

  'anti_magic_field_generator': {
    id: 'anti_magic_field_generator',
    name: "Anti-Magic Field Generator (Mobile)",
    description: "A portable device that creates a 1-mile radius anti-magic field.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 55000000,
    icon: '📡',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Creates 1-mile radius anti-magic field (no magic works, including yours)",
        "Can selectively allow your magic to work (but not enemies')",
        "Made by: The Nullifier"
    ],
    vendor: 'magic_nullification',
    shippedBy: 'Magic-Free Delivery',
    levelRequirement: 65
},

  'apis_kingdom_bee_diplomacy': {
    id: 'apis_kingdom_bee_diplomacy',
    name: "Apis Kingdom Bee Diplomacy Service",
    description: "Negotiate with bees on your behalf.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 11500,
    icon: '🐝',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Bees are neutral to you for 30 days; honey is 50% cheaper",
        "You understand bee dancing (advantage on Nature checks about plants)",
        "You must speak in buzzing sounds for the first hour each day",
        "Made by: Apis Kingdom Embassy"
    ],
    vendor: 'apis_kingdom',
    shippedBy: 'Bee Swarm',
    levelRequirement: 5
},

  'apis_kingdom_beekeeper_suit': {
    id: 'apis_kingdom_beekeeper_suit',
    name: "Apis Kingdom Beekeeper Suit",
    description: "Protective suit for honey harvesting.",
    category: SHOP_CATEGORIES.premium,
    price: 16000,
    icon: '👔',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Immunity to bee stings or swarms",
        "+1 AC against small flying creatures",
        "Suit buzzes faintly (alerts insects)",
        "Made by: Hive Wardens"
    ],
    vendor: 'apis_kingdom_apiary',
    shippedBy: 'Honeycomb Veil',
    levelRequirement: 5
},

  'apis_kingdom_honey_boost_service': {
    id: 'apis_kingdom_honey_boost_service',
    name: "Apis Kingdom Honey Boost Service",
    description: "Bee pollen for natural energy.",
    category: SHOP_CATEGORIES.services,
    price: 12000,
    icon: '🐝',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Gain 1d6 temporary HP and +5 speed for 1 hour",
        "Advantage on saves vs. sleep",
        "Attracts bees: 10% chance of minor sting (1 damage)",
        "Made by: Bee Keepers"
    ],
    vendor: 'apis_kingdom_hive',
    shippedBy: 'Honey Jar',
    levelRequirement: 5
},

  'apis_kingdom_honey_extractor': {
    id: 'apis_kingdom_honey_extractor',
    name: "Apis Kingdom Honey Extractor",
    description: "Spinner for harvesting honeycomb into cakes.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7500,
    icon: '🍯',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Extracts pure honey; advantage on sweet baking",
        "Bee-friendly – no stings during use",
        "Sticky residue (cleans with water)",
        "Made by: Kingdom Beekeepers"
    ],
    vendor: 'apis_kingdom_hive',
    shippedBy: 'Honey Hex Haul',
    levelRequirement: 5
},

  'apis_kingdom_honeycomb_cake_recipe': {
    id: 'apis_kingdom_honeycomb_cake_recipe',
    name: "Recipe: Apis Kingdom Honeycomb Cake",
    description: "Honey-drenched cake from royal hives for sweet energy.",
    category: SHOP_CATEGORIES.services,
    price: 7500,
    icon: '🍰',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Layer honeycomb (50 min); eat slice to gain +1 to Charisma saves for 3 hours and attract helpful bees (scouts)",
        "Requires: Honey; sticky but buzzing with life",
        "Bees might sting thieves",
        "Made by: Kingdom Beekeepers"
    ],
    vendor: 'apis_kingdom_hive',
    shippedBy: 'Honey Hex',
    levelRequirement: 5
},

  'apis_kingdom_royal_jelly': {
    id: 'apis_kingdom_royal_jelly',
    name: "Apis Kingdom Royal Jelly",
    description: "A spoonful of this glowing jelly grants the vigor of a queen bee.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 10000,
    icon: '🍯',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Single Use: As an action, consume. You gain 1d8 temporary HP and +1 to all saves for 1 hour"
    ],
    vendor: 'apis_kingdom',
    shippedBy: 'Drone Escort',
    levelRequirement: 4
},

  'apis_regal_pollen': {
        id: 'apis_regal_pollen',
        name: "Apis Kingdom Regal Pollen",
        description: "Golden, energizing pollen collected from the Royal Hive.",
        category: SHOP_CATEGORIES.consumables,
        price: 18000,
        icon: '🌼',
        stock: 7,
        rarity: 'rare',
        effects: [
            "Drink: Gain one additional Action on your next turn",
        "Pollen is highly allergenic to non-Apis races",
            "Made by: Apis Kingdom"
        ],
        vendor: 'apis_hive_exchange',
        shippedBy: 'Golden Jar',
        levelRequirement: 5
    },

  'apple_red': {
        id: 'apple_red',
        name: "Red Apple",
        description: "A simple, crisp apple. Keeps the doctor away (if thrown hard enough).",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 5000,
        icon: '🍎',
        stock: 25,
        rarity: 'common',
        effects: ["Restores 5 HP"],
        vendor: 'toad_town_market',
        shippedBy: 'Fruit Crate',
        levelRequirement: 1
    },

  'arbiters_judgment_gavel': {
    id: 'arbiters_judgment_gavel',
    name: "Arbiter's Judgment Gavel",
    description: "A gavel that enforces the laws of Mechanus.",
    category: SHOP_CATEGORIES.faction,
    price: 675000,
    icon: '🔨',
    stock: 2,
    rarity: 'legendary',
    effects: [
        "Once per week, declare a 'guilty' verdict on target (DC 25 Cha save)",
        "Failed save: target is imprisoned in Minauros for 7 days",
        "Made by: Council of Order"
    ],
    vendor: 'mechanus_legate',
    shippedBy: 'Inevitable Messenger',
    levelRequirement: 17,
    factionBonus: { law: 100 }
},

  'arcane_battery_pack': {
    id: 'arcane_battery_pack',
    name: "Arcane Battery Pack (Power)",
    description: "Stores spell slots for emergency casting.",
    category: SHOP_CATEGORIES.services,
    price: 580000,
    icon: '🔋',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Holds 10 spell levels",
        "Recharges in 24 hours",
        "Made by: Mana Engineers"
    ],
    vendor: 'spell_tech',
    shippedBy: 'Energy Cell',
    levelRequirement: 15
},

  'arcane_spellstorm_generator': {
    id: 'arcane_spellstorm_generator',
    name: "Arcane Spellstorm Generator",
    description: "A device that weaponizes raw magic into a controllable storm.",
    category: SHOP_CATEGORIES.premium,
    price: 1050000,
    icon: '🌪️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Creates 100ft radius storm that casts random spells for 1 minute",
        "User is immune to the storm's effects",
        "Made by: Mystra's Unseen Servants"
    ],
    vendor: 'wild_magic',
    shippedBy: 'Lightning Strike',
    levelRequirement: 19
},

  'arcane_tower_core': {
    id: 'arcane_tower_core',
    name: "Arcane Tower Core (Mobile)",
    description: "A floating crystalline core that generates a wizard's tower.",
    category: SHOP_CATEGORIES.premium,
    price: 895000,
    icon: '🏰',
    stock: 2,
    rarity: 'godly',
    effects: [
        "Generates 5-story arcane tower in 24 hours",
        "Tower can be dismissed/re-summoned weekly",
        "Made by: Arcane University"
    ],
    vendor: 'wizard_consortium',
    shippedBy: 'Teleportation Circle',
    levelRequirement: 18
},

  'arcane_weather_manipulator': {
    id: 'arcane_weather_manipulator',
    name: "Arcane Weather Manipulator (Device)",
    description: "A staff that summons localized storms or calms tempests on command.",
    category: SHOP_CATEGORIES.premium,
    price: 410000,
    icon: '🌩️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Controls weather in 1-mile radius for 1 hour",
        "3 charges per day",
        "Made by: Stormcallers Guild"
    ],
    vendor: 'elemental_shop',
    shippedBy: 'Wind Rider',
    levelRequirement: 15
},

  'armor_of_the_forgotten': {
    id: 'armor_of_the_forgotten',
    name: "Armor of the Forgotten",
    description: "A suit of armor with no maker’s mark. It remembers every warrior who wore it.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 350000,
    icon: '🦾',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "AC 20, resistance to all damage types",
        "Gains +1 to attack/damage for each fallen warrior whose memory it holds (max +5)",
        "If you die, the armor remembers you — and whispers your name to others forever"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Bone Chest',
    levelRequirement: 12
},

  'army_recruitment_contract': {
    id: 'army_recruitment_contract',
    name: "Army Recruitment (1,000 Soldiers)",
    description: "Hire an entire mercenary army: 1,000 trained soldiers loyal to your cause for 1 year.",
    category: SHOP_CATEGORIES.FACTION,
    price: 500000,
    icon: '⚔️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Command 1,000 soldiers (CR 1/8 each, effective in mass combat)",
        "Army remains loyal for 1 year or until major battle",
        "Must provide supplies (100,000 gp annually)",
        "Army morale decays if not paid monthly"
    ],
    vendor: 'steel_syndicate',
    shippedBy: 'Mercenary Contract',
    levelRequirement: 14,
    factionBonus: { military: 100, control: 50 }
},

  'asclepia_healing_ointment': {
    id: 'asclepia_healing_ointment',
    name: "Asclepian Healing Ointment",
    description: "A potent medicinal salve that can mend grievous wounds with miraculous speed.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 4000,
    icon: '🧴',
    stock: 20,
    rarity: 'uncommon',
    effects: [
        "Apply to a creature: Heals 4d8+4 HP",
        "Cures blindness, deafness, and any diseases affecting the target",
        "Jar contains 5 doses"
    ],
    vendor: 'Asclepia',
    shippedBy: 'Medical Pouch',
    levelRequirement: 3
},

  'asclepia_health_inspector_goggles': {
    id: 'asclepia_health_inspector_goggles',
    name: "Asclepia Health Inspector Goggles",
    description: "See germs on your food.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 13500,
    icon: '🥽',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "See contaminants: advantage on cooking checks to avoid food poisoning",
        "You see germs everywhere: disadvantage on appetite (disadvantage on checks if you eat)",
        "Goggles steam up when you lie about ingredients (disadvantage on Deception)",
        "Made by: Asclepia Inspection Tools"
    ],
    vendor: 'asclepia',
    shippedBy: 'Medical Courier',
    levelRequirement: 5
},

  'asclepia_nurse_scrubs': {
    id: 'asclepia_nurse_scrubs',
    name: "Asclepia Nurse Scrubs",
    description: "Medical scrubs that are too clean.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14500,
    icon: '🥼',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Advantage on Medicine checks (you look official)",
        "Patients trust you: advantage on Charisma checks with the injured",
        "You feel compelled to help anyone who looks sick (disadvantage on checks if you ignore them)",
        "Made by: Asclepia Medical Supply"
    ],
    vendor: 'asclepia',
    shippedBy: 'Medical Courier',
    levelRequirement: 5
},

  'asclepia_panacea_poultice': {
    id: 'asclepia_panacea_poultice',
    name: "Asclepia Panacea Poultice",
    description: "A magical salve that mends flesh and bone with impossible speed.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 6000,
    icon: '🍃',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Single Use: As an action, apply to a creature. Heals 3d8+3 HP and ends the Poisoned condition"
    ],
    vendor: 'asclepia',
    shippedBy: 'Medical Courier',
    levelRequirement: 4
},

  'asclepia_potion_subscription_box': {
    id: 'asclepia_potion_subscription_box',
    name: "Asclepia Potion Subscription Box",
    description: "Monthly mystery potions, may or may not work.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 23500,
    icon: '📦',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Each week: Receive a random Uncommon potion (50% chance it's mislabeled)",
        "Last month's 'Healing Potion' was actually mayonnaise – worked somehow",
        "Subscription cancels if you die (fine print: you revive with a 50gp cancellation fee)",
        "Made by: Asclepia Pharmaceutical"
    ],
    vendor: 'asclepia',
    shippedBy: 'Medical Courier',
    levelRequirement: 7
},

  'asclepia_recipe_healthy_smoothie': {
    id: 'asclepia_recipe_healthy_smoothie',
    name: "Recipe: Asclepia Healthy Smoothie",
    description: "A smoothie that is too healthy.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 11500,
    icon: '📜',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Removes one level of exhaustion and grants +1 to Constitution saves for 4 hours",
        "Tastes like grass and regret (disadvantage on Charisma while drinking)",
        "You feel smug about your health choices (advantage on Charisma with other health nuts)",
        "Made by: Asclepia Juice Bar"
    ],
    vendor: 'asclepia',
    shippedBy: 'Medical Courier',
    levelRequirement: 5
},

  'asclepian_healing_salve': {
    id: 'asclepian_healing_salve',
    name: "Asclepian Healing Salve",
    description: "A medicinal ointment that accelerates natural healing.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 9500,
    icon: '🧴',
    stock: 12,
    rarity: 'uncommon',
    effects: [
        "Apply to a wound: heals 1d8+2 HP and stops bleeding",
        "Can be used to treat minor diseases",
        "Made by: Asclepia"
    ],
    vendor: 'asclepia_vault',
    shippedBy: 'Ceramic Jar',
    levelRequirement: 4
},

  'asclepian_healing_vial': {
        id: 'asclepian_healing_vial',
        name: "Asclepian Healing Vial",
        description: "A potent, shimmering mixture that rapidly repairs fractured bone and torn muscle.",
        category: SHOP_CATEGORIES.consumables,
        price: 25000,
        icon: '⚕️',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Heals 8d4+8 HP and instantly ends one disease or poison effect",
        "Must be administered within 1 minute of injury",
            "Made by: Asclepia"
        ],
        vendor: 'asclepia_vault',
        shippedBy: 'Sealed Glass',
        levelRequirement: 7
    },

  'asgard_lightning_in_a_bottle': {
    id: 'asgard_lightning_in_a_bottle',
    name: "Asgard Lightning in a Bottle",
    description: "Captured storm essence from Bifrost residue.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 19500,
    icon: '⚡',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Once per short rest: Add 1d6 thunder damage to a weapon attack",
        "Breaks on natural 1: Releases 2d6 thunder damage in 10ft radius (DEX save DC 13)",
        "Vibrates ominously during storms",
        "Made by: Thor's Interns"
    ],
    vendor: 'asgard_surplus',
    shippedBy: 'Bifrost Flash Delivery',
    levelRequirement: 7
},

  'asgard_mead_honey_cakes_recipe': {
    id: 'asgard_mead_honey_cakes_recipe',
    name: "Recipe: Asgard Mead Honey Cakes",
    description: "Golden cakes soaked in divine mead for warrior vigor.",
    category: SHOP_CATEGORIES.services,
    price: 8500,
    icon: '🍯',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Bake with honey and mead (1 hour); eat to gain +1 Strength for 1 hour and 1d6 temporary HP",
        "Requires: Honey and weak mead; Valhalla-approved",
        "Might make you sing battle hymns (noisy)",
        "Made by: Asgard Feast Hall"
    ],
    vendor: 'asgard_kitchen',
    shippedBy: 'Honeycomb Herald',
    levelRequirement: 6
},

  'asgard_thunder_amulet': {
    id: 'asgard_thunder_amulet',
    name: "Asgard Thunder Amulet",
    description: "A pendant etched with runes, channeling minor storms from the halls of the gods.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 19800,
    icon: '⚡',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Once per short rest: Call a small thunderclap (10 ft radius, 1d6 thunder damage, CON save DC 13 for half)",
        "Resistance to thunder damage while worn",
        "Glows faintly during storms (+1 to Perception in rain)",
        "Attracts lightning – 5% chance of minor shock during thunderstorms"
    ],
    vendor: 'asgard',
    shippedBy: 'Valhalla Express (By Raven)',
    levelRequirement: 7
},

  'asgard_valkyrie_spit_roaster': {
    id: 'asgard_valkyrie_spit_roaster',
    name: "Asgard Valkyrie Spit Roaster",
    description: "Portable roaster for honey cakes over godfire.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9500,
    icon: '🍖',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Roasts evenly for +1 to cooking checks with meats/honey; infuses vigor (extra 1d4 temp HP)",
        "Folds for travel; withstands high heat",
        "Attracts ravens (Odin's spies?)",
        "Made by: Asgard Forges"
    ],
    vendor: 'asgard_kitchen',
    shippedBy: 'Thunderous Tine Transport',
    levelRequirement: 6
},

  'asgard_valkyrie_training_session': {
    id: 'asgard_valkyrie_training_session',
    name: "Asgard Valkyrie Training Session",
    description: "A half-day lesson in aerial combat from a junior Valkyrie.",
    category: SHOP_CATEGORIES.services,
    price: 21000,
    icon: '🛡️',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Gain proficiency in spears for 1 week; +1 to attack rolls with thrown weapons",
        "Includes a feather token for one 30ft jump glide",
        "Valkyrie might judge your 'worthiness' and give unsolicited advice",
        "Made by: Asgard Warrior Academy"
    ],
    vendor: 'asgard_training_halls',
    shippedBy: 'Pegasus Shuttle',
    levelRequirement: 6
},

  'asgard_viking_tunic_premium': {
    id: 'asgard_viking_tunic_premium',
    name: "Asgard Viking Tunic (Premium)",
    description: "Woolen tunic embroidered with runes for hardy warriors.",
    category: SHOP_CATEGORIES.premium,
    price: 18500,
    icon: '👕',
    stock: 3,
    rarity: 'rare',
    effects: [
        "+1 to Constitution saves against cold or fatigue",
        "Once per day: Reroll a failed Strength check",
        "Itches during mead feasts (minor distraction)",
        "Made by: Asgard Seamstresses"
    ],
    vendor: 'asgard_hall',
    shippedBy: 'Odins Thread',
    levelRequirement: 6
},

  'asgardian_mead_ration': {
        id: 'asgardian_mead_ration',
        name: "Asgardian Mead Ration",
        description: "A sturdy canteen of mead that grants temporary vigor and a penchant for boasts.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 4000,
        icon: '🍺',
        stock: 15,
        rarity: 'rare',
        effects: [
            "Heals 2d4 HP and grants +1 to Charisma (Intimidation) for 4 hours",
            "If you tell a boastful lie during this time, gain +1d4 temporary HP",
            "Made by: Asgard"
        ],
        vendor: 'asgard_embassy',
        shippedBy: 'Rune-etched Cask',
        levelRequirement: 3
    },

  'asgardian_rune_axe': {
    id: 'asgardian_rune_axe',
    name: "Asgardian Rune Axe",
    description: "A heavy axe with a glowing rune on its head. It strikes with the force of a thunderclap.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 35000,
    icon: '🪓',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Once per short rest: On hit, deal an extra 2d8 Thunder damage",
        "Enemies hit by the thunderclap are Deafened until end of their next turn",
        "Axe is considered magical for overcoming resistances"
    ],
    vendor: 'asgard',
    shippedBy: 'Bifrost Courier',
    levelRequirement: 4
},

  'asgardian_rune_stone': {
    id: 'asgardian_rune_stone',
    name: "Asgardian Rune Stone",
    description: "A smooth river stone etched with a single, powerful rune of protection. Feels warm to the touch.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '🪨',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Once per day: cast 'Shield' (reaction)",
        "While held, you have advantage on saves against being frightened",
        "Rune glows blue when giants are near"
    ],
    vendor: 'Asgard',
    shippedBy: 'Raven Delivery',
    levelRequirement: 4
},

  'ashen_mask': {
    id: 'ashen_mask',
    name: "Ashen Mask",
    description: "A gray porcelain mask said to be made from the ash of a forgotten god. Your face hides a darker face.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 80000,
    icon: '🎭',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Wear: assume another's identity perfectly for 1 hour/day",
        "Each use steals a sliver of empathy (-2 Wisdom temporary)",
        "Attracts necromancers and bounty hunters"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Obsidian Sarcophagus',
    levelRequirement: 10
},

  'assassination_contract': {
    id: 'assassination_contract',
    name: "Assassination Contract",
    description: "A highly illegal contract to eliminate a specific target. Buyer assumes all risk.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 25000,
    icon: '🗡️',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Professional assassin targets 1 specific target within 6 months",
        "Guaranteed 90% success rate (DM decides outcome)",
        "Buyer's name hidden from assassin; perfect plausible deniability",
        "If failed, contract is void and all parties deny involvement"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Untraceable Dead Drop',
    levelRequirement: 8
},

  'assassins_creed_blade': {
    id: 'assassins_creed_blade',
    name: "Hidden Blade",
    description: "A blade for stealth assassinations.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15000,
    icon: '🗡️',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Surprise attack: 2d6 piercing + poison option",
        "Hidden, advantage on conceal",
        "Retractable"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Wrist Case',
    levelRequirement: 4
},

  'astral_projection_beacon': {
    id: 'astral_projection_beacon',
    name: "Astral Projection Beacon",
    description: "A silver rod that anchors your soul to the Material Plane.",
    category: SHOP_CATEGORIES.premium,
    price: 385000,
    icon: '🕯️',
    stock: 5,
    rarity: 'legendary',
    effects: [
        "Cast Astral Projection at will, but body remains anchored",
        "If killed in Astral Plane, instantly return to body",
        "Made by: Githyanki Warlocks"
    ],
    vendor: 'astral_traders',
    shippedBy: 'Thought Sending',
    levelRequirement: 14
},

  'astral_projection_orb': {
    id: 'astral_projection_orb',
    name: "Astral Projection Orb (Psionic)",
    description: "Enables safe astral travel to other planes without bodily risk.",
    category: SHOP_CATEGORIES.premium,
    price: 470000,
    icon: '🌌',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Project astral form for 4 hours",
        "Body remains protected",
        "Made by: Astral Nomads"
    ],
    vendor: 'plane_walkers_guild',
    shippedBy: 'Silver Cord',
    levelRequirement: 18
},

  'autograph_luigi': {
        id: 'autograph_luigi',
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

  'avalon_court_fairy_nectar_drink_recipe': {
    id: 'avalon_court_fairy_nectar_drink_recipe',
    name: "Recipe: Avalon Court Fairy Nectar Drink",
    description: "Sparkling nectar from fey flowers for enchantment.",
    category: SHOP_CATEGORIES.services,
    price: 9500,
    icon: '🥤',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Infuse flowers (20 min); drink to gain advantage on Charisma (Deception) with fey for 3 hours and minor charm aura",
        "Requires: Fey nectar; bubbly magic",
        "Fairies toast with you",
        "Made by: Court Mixologists"
    ],
    vendor: 'avalon_court_garden',
    shippedBy: 'Nectar Nectar Note',
    levelRequirement: 6
},

  'avalon_court_fairy_ring_premium': {
    id: 'avalon_court_fairy_ring_premium',
    name: "Avalon Court Fairy Ring (Premium)",
    description: "Portable portal to fey spots.",
    category: SHOP_CATEGORIES.premium,
    price: 21000,
    icon: '🍄',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Teleport to known fey location once per week (100 miles)",
        "Fey charm: +1 Charisma with fey",
        "Ring attracts fairies (helpful or tricky)",
        "Made by: Avalon Enchanters"
    ],
    vendor: 'avalon_court_garden',
    shippedBy: 'Mushroom Cap',
    levelRequirement: 6
},

  'avalon_court_fey_flower_infuser': {
    id: 'avalon_court_fey_flower_infuser',
    name: "Avalon Court Fey Flower Infuser",
    description: "Infuser for nectar from fey blooms.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8500,
    icon: '🥤',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Infuses magic; +1 to Charisma for fey drinks",
        "Flowers don't wilt; whimsical bubbles",
        "Attracts pixies",
        "Made by: Court Glassblowers"
    ],
    vendor: 'avalon_court_garden',
    shippedBy: 'Fey Flask Fold',
    levelRequirement: 6
},

  'avalon_court_feywing_feather_boa': {
    id: 'avalon_court_feywing_feather_boa',
    name: "Avalon Court Feywing Feather Boa",
    description: "Feathery boa from enchanted birds.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 17500,
    icon: '🧣',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Advantage on Charisma (Deception) with fey",
        "Boa allows short flight bursts (10ft)",
        "Feathers molt and tickle",
        "Made by: Court Fashionistas"
    ],
    vendor: 'avalon_court_gala',
    shippedBy: 'Wing Wrap',
    levelRequirement: 6
},

  'bag_of_confetti': {
        id: 'bag_of_confetti',
        name: "Bag of Confetti",
        description: "A small bag of paper confetti. Use to fill holes in the world, or just make a mess.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1000,
        icon: '🎊',
        stock: 500,
        rarity: 'common',
        effects: ["Throw to obscure vision slightly", "Great for parties", "Environmentally biodegradable"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },

  'bag_of_tricks_minor': {
    id: 'bag_of_tricks_minor',
    name: "Bag of Tricks (Minor)",
    description: "Pulls out a small animal companion... sometimes useful, sometimes not.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 22000,
    icon: '🎒',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Once per short rest: Reach in and pull out a random small beast (CR 1/4 or less, lasts 1 hour)",
        "50% chance it's a cat that just naps instead of helping",
        "Bag smells like wet fur after use",
        "Compatible with druids – they get +1 to Animal Handling with it"
    ],
    vendor: 'wandering_circus',
    shippedBy: 'Furry-Lined Box',
    levelRequirement: 7
},

  'bag_of_useless_items': {
    id: 'bag_of_useless_items',
    name: "Bag of (Mostly) Useless Items",
    description: "A bag of tricks that got mislabeled at the factory.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7200,
    icon: '🎒',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Pull random mundane item (spoon, boot, live chicken, etc)",
        "5% chance it's actually useful for your current situation",
        "Items disappear after 1 hour",
        "No refunds, no guarantees, no dignity"
    ],
    vendor: 'discount_wonders',
    shippedBy: 'Carrier Pigeon',
    levelRequirement: 5
},

  'balor_core_detonator': {
    id: 'balor_core_detonator',
    name: "Balor Core Detonator (Remote)",
    description: "A device that triggers a Balor's death throes on command.",
    category: SHOP_CATEGORIES.forbidden,
    price: 835000,
    icon: '💣',
    stock: 2,
    rarity: 'legendary',
    effects: [
        "Attach to a Balor to detonate its death throes at will",
        "Balor gets no save; deals full 100 damage to all within 100ft",
        "Made by: Demon-Binders Anonymous"
    ],
    vendor: 'demon_weapons',
    shippedBy: 'Fireball Express',
    levelRequirement: 18
},

  'banana_peel': {
        id: 'banana_peel',
        name: "Used Banana Peel",
        description: "Nature's perfect trap. Biodegradable hazard.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 100,
        icon: '🍌',
        stock: 300,
        rarity: 'common',
        effects: ["Place on ground (action)", "Anyone stepping on it makes DEX save DC 12 or falls prone"],
        vendor: 'valley_trading_post',
        shippedBy: 'Compost Express',
        levelRequirement: 1
    },

  'banana_peel_bunch': {
    id: 'banana_peel_bunch',
    name: "Banana Peel Cluster",
    description: "A bundle of magically slippery peels. Classic prank, timeless chaos.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 4000,
    icon: '🍌',
    stock: 20,
    rarity: 'common',
    effects: [
        "Throw: 10ft radius, DEX save or fall prone",
        "Lasts 3 rounds, then peels vanish",
        "Monkeys become hostile if they see you waste bananas",
        "Slippery surface counts as difficult terrain"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Fruit Basket',
    levelRequirement: 1
},

  'bandit_mask': {
    id: 'bandit_mask',
    name: "Bandit's Smiling Mask",
    description: "A white mask that grins eternally. Steals coins from those who trust you.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9000,
    icon: '😁',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Advantage on Sleight of Hand vs humanoids",
        "Once per day: Steal 1d20gp from touched creature",
        "Mask whispers gambling tips",
        "You can't stop smiling while wearing it"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Coin Purse',
    levelRequirement: 2
},

  'bandits_highway_ambush_kit_premium': {
    id: 'bandits_highway_ambush_kit_premium',
    name: "Bandits Highway Ambush Kit ",
    description: "Set traps for travelers.",
    category: SHOP_CATEGORIES.premium,
    price: 9500,
    icon: '🎒',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Kit: Set snare DC 12 DEX or prone",
        "Steal 1d10 gp on success",
        "Attracts lawmen",
        "Made by: Road Robbers"
    ],
    vendor: 'bandits_camp',
    shippedBy: 'Trap Bag',
    levelRequirement: 5
},

  'bandits_highway_robbers_rations_recipe': {
    id: 'bandits_highway_robbers_rations_recipe',
    name: "Recipe: Bandits Highway Robbers Rations ",
    description: "Stolen-flavor rations for quick getaways.",
    category: SHOP_CATEGORIES.services,
    price: 5000,
    icon: '🥪',
    stock: 12,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Scavenge and pack (10 min); eat to gain +10 ft speed for escape (1 hour)",
        "Requires: Looted food; shady",
        "Robbed taste – mixed",
        "Made by: Bandit Scavengers"
    ],
    vendor: 'bandits_camp',
    shippedBy: 'Stolen Snack Summary',
    levelRequirement: 5
},

  'bandits_highway_robbery_insurance': {
    id: 'bandits_highway_robbery_insurance',
    name: "Bandits Highway Robbery Insurance",
    description: "Insure against being robbed.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 8500,
    icon: '💰',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "If robbed, get 50% of gold back (once per 7 days)",
        "Bandits know you're insured and target you more often",
        "You get a 'Rob Me' sticker that glows in the dark",
        "Made by: Bandits Insurance Co."
    ],
    vendor: 'bandits',
    shippedBy: 'Highway Robbery',
    levelRequirement: 5
},

  'bandits_highway_robbery_insurance_premium': {
    id: 'bandits_highway_robbery_insurance_premium',
    name: "Bandits Highway Robbery Insurance (Premium)",
    description: "Insure against robbery (premium).",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 12500,
    icon: '💰',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "If robbed, get 75% gold back (once per week)",
        "Bandits know you're insured and target you more",
        "You get a 'Rob Me Premium' badge",
        "Made by: Bandits Premium Insurance"
    ],
    vendor: 'bandits',
    shippedBy: 'Highway Robbery',
    levelRequirement: 5
},

  'bandits_road_rag_cloak': {
    id: 'bandits_road_rag_cloak',
    name: "Bandits Road Rag Cloak ",
    description: "Tattered cloak for highway folk.",
    category: SHOP_CATEGORIES.premium,
    price: 9500,
    icon: '🧥',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Advantage on Deception as a beggar",
        "Cloak hides small stolen goods",
        "Rags smell musty",
        "Made by: Bandit Scroungers"
    ],
    vendor: 'bandits_roadside',
    shippedBy: 'Rag Roll',
    levelRequirement: 5
},

  'bandits_roadside_scavenge_chopper': {
    id: 'bandits_roadside_scavenge_chopper',
    name: "Bandits Roadside Scavenge Chopper ",
    description: "Rough chopper for looted rations.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5000,
    stock: 12,
    icon: '🥩',
    rarity: 'uncommon',
    effects: [
        "Chops scavenged goods; +1 to Deception with 'stolen' food",
        "Quick and dirty",
        "Dull blade",
        "Made by: Bandit Bladesmiths"
    ],
    vendor: 'bandits_camp',
    shippedBy: 'Loot Chop Load',
    levelRequirement: 5
},

  'banjo_kazooie_egg': {
    id: 'banjo_kazooie_egg',
    name: "Kazooie Egg Shooter",
    description: "Shoots eggs as projectiles.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18000,
    icon: '🥚',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Shoot egg: 1d8 bludgeoning, special types (fire, ice)",
        "5 eggs per short rest",
        "Can hatch helpers"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Egg Crate',
    levelRequirement: 5
},

  'banshees_wail_suppressor': {
    id: 'banshees_wail_suppressor',
    name: "Banshee's Wail Suppressor",
    description: "A pair of spectral earplugs that dampen deathly screams.",
    category: SHOP_CATEGORIES.services,
    price: 215000,
    icon: '🎧',
    stock: 10,
    rarity: 'epic',
    effects: [
        "Immunity to thunder damage and fear effects for 30 days",
        "Can silence one creature within 30ft as a bonus action",
        "Made by: Silent Sisters"
    ],
    vendor: 'spirit_tailor',
    shippedBy: 'Ghostly Whisper',
    levelRequirement: 12
},

  'bean_stone': {
        id: 'bean_stone',
        name: "Bean Stone",
        description: "A peculiar stone from the Beanbean Kingdom.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 10000,
        icon: '🫘',
        stock: 5,
        rarity: 'uncommon',
        effects: ["Vibrates near beans", "Paperweight"],
        vendor: 'shamans_hut',
        shippedBy: 'Box',
        levelRequirement: 1
    },

  'beanbean_academy_item': {
        id: 'beanbean_academy_item',
        name: "Gehenna Academy Halos",
        description: "A halo shaped like a stylized anime eye that grants focus and power",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5000,
        icon: '🎭',
        stock: 3,
        rarity: 'epic',
        effects: [
            "Grants 20% accuracy in ranged attacks",
        "Grants immunity to fear effects",
        "May cause enemies to become distracted for 2 turns",
        "Made by: Gehenna Academy",
        "Can be used to unlock hidden rooms in dungeons",
        "Increases maximum HP by 100"
        ],
        vendor: 'beanbean',
        shippedBy: 'Piranha Plant Post',
        levelRequirement: 8
    },

  'beanbean_animatopia_primal_amulet': {
        id: 'beanbean_animatopia_primal_amulet',
        name: "Primal Amulet of Animatopia",
        description: "A carved obsidian pendant depicting a snarling wolf. Said to grant connection to the wild.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🐺',
        stock: 3,
        rarity: 'epic',
        effects: [
            "Grants +5 to Charisma when interacting with Animatopia tribes",
        "Increases damage dealt by 10% against predatory creatures",
        "Reduces incoming damage from nature-based attacks by 20%",
        "Causes a random animal companion to appear beside the wearer for 1 minute"
        ],
        vendor: 'beanbean',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 12
    },

  'beanbean_brooch': {
        id: 'beanbean_brooch',
        name: "Beanstar Brooch",
        description: "A pin containing the essence of the Beanstar. Grants calmness.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 220000,
        icon: '🌟',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Immunity to Fury/Rage effects",
            "Advantage on all CHA checks",
            "Discount 20% at all shops (Passive)",
            "Can speak Beanbean language"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Velvet Box',
        levelRequirement: 6
    },

  'beanbean_coin': {
        id: 'beanbean_coin',
        name: "Beanbean Coin",
        description: "Currency from a neighboring kingdom. Collectors item here.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2500,
        icon: '🪙',
        stock: 500,
        rarity: 'common',
        effects: ["Worthless in shops", "Pretty"],
        vendor: 'toad_town_market',
        shippedBy: 'Envelope',
        levelRequirement: 1
    },

  'beanbean_cosmic_jester_mask': {
        id: 'beanbean_cosmic_jester_mask',
        name: "Cosmic Jesters Mask",
        description: "A grinning porcelain mask with mismatched eyes. Wears it at your own risk.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7000,
        icon: '💀',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants +1 to all stats for 5 minutes",
        "Causes a random status effect to be inflicted on nearby enemies each turn",
        "Has a 50% chance of inflicting Jesters Luck on the wearer, which grants immunity to all status effects for one round",
        "After 3 uses, causes the wearer to become uncontrollable and act erratically for 1 hour."
        ],
        vendor: 'beanbean',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 9
    },

  'beanbean_courier_post_item': {
        id: 'beanbean_courier_post_item',
        name: "Piranha Plant Post Courier Pack",
        description: "A sealed package from the courier service that never gets lost",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 100,
        icon: '📦',
        stock: 10,
        rarity: 'common',
        effects: [
            "Delivers messages instantly across kingdoms",
        "Grants 10% chance to bypass enemy checkpoints",
        "May trigger a courier ambush if used in combat",
        "Made by: Piranha Plant Post",
        "Consumes 2 charges per use",
        "Reduces travel time by 50% for non-combat routes"
        ],
        vendor: 'beanbean',
        shippedBy: 'Piranha Plant Post',
        levelRequirement: 1
    },

  'beanbean_delfino_court_glove': {
        id: 'beanbean_delfino_court_glove',
        name: "Courtly Gloves of the Isle Delfino",
        description: "Elegant gloves that allow discreet communication with Shine Sprites",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Enhances charm and persuasion by 15%",
        "Causes minor stuttering during formal events",
        "Reveals secret paths to Hotel Delfino",
        "Made by: Mushroom Regency",
        "Triggers Peasley Financial Scandal if used during negotiations",
        "Requires 5 Beanbean coins to activate"
        ],
        vendor: 'beanbean',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'beanbean_halopod_helmet': {
        id: 'beanbean_halopod_helmet',
        name: "Halopod Helmet",
        description: "Designed for the elite of Kivotos’ academic elite, this helmet grants enhanced reflexes and visual distortion for combat. Its halo glow pulses with the student’s mental state, making it a perfect tool for chaos and control. One user reported being mistaken for a ghost by a security bot.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3800,
        icon: '🌀',
        stock: 2,
        rarity: 'rare',
        effects: [
            "+15% dodge chance",
        "Visual distortion grants temporary blindness to enemies",
        "Consumes 20% stamina per use",
        "Halos glow brighter during stress or confusion",
        "Crafted by: Kivotos Student Corps"
        ],
        vendor: 'beanbean',
        shippedBy: 'Bob-omb Rush Delivery',
        levelRequirement: 6
    },

  'beanbean_item_name_here': {
        id: 'beanbean_item_name_here',
        name: "Delfino Daze",
        description: "A shimmering tropical pendant that hums with forgotten memories",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🔮',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Grants temporary flight for 30 seconds when worn",
        "Causes minor dizziness during high speed movement",
        "Reveals hidden paths in the Isle Delfino jungle",
        "Made by: Mushroom Regency",
        "Triggers Peasley Financial Scandal rumor if worn during diplomatic events",
        "Only usable in regions with Shine Sprites"
        ],
        vendor: 'beanbean',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'beanbean_kingdom_bean_pod_pants': {
    id: 'beanbean_kingdom_bean_pod_pants',
    name: "Beanbean Kingdom Bean Pod Pants",
    description: "Pants reinforced with magical bean fibers.",
    category: SHOP_CATEGORIES.premium,
    price: 14500,
    icon: '👖',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Advantage on Dexterity saves vs. falls",
        "Pants grow minor vines (climbing aid)",
        "Pods pop during jumps (noisy)",
        "Made by: Bean Weavers"
    ],
    vendor: 'beanbean_kingdom_farm',
    shippedBy: 'Pod Pocket',
    levelRequirement: 5
},

  'beanbean_kingdom_bean_pod_peeler': {
    id: 'beanbean_kingdom_bean_pod_peeler',
    name: "Beanbean Kingdom Bean Pod Peeler",
    description: "Peeler for tough bean pods in soup.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6000,
    icon: '🍲',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Peels pods easily; +1 to growth recipes",
        "Pods don't burst prematurely",
        "Sticky sap residue",
        "Made by: Kingdom Peelers"
    ],
    vendor: 'beanbean_kingdom_farm',
    shippedBy: 'Pod Peel Pouch',
    levelRequirement: 5
},

  'beanbean_kingdom_beanstalk_climber_service': {
    id: 'beanbean_kingdom_beanstalk_climber_service',
    name: "Beanbean Kingdom Beanstalk Climber Service",
    description: "Train for vertical adventures.",
    category: SHOP_CATEGORIES.services,
    price: 10000,
    icon: '🌿',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Advantage on Athletics for climbing 1 week",
        "Climb speed +10ft",
        "Beans cause gas (minor distraction)",
        "Made by: Bean Climbers"
    ],
    vendor: 'beanbean_kingdom_tower',
    shippedBy: 'Vine Rope',
    levelRequirement: 5
},

  'beanbean_kingdom_coin_pouch': {
    id: 'beanbean_kingdom_coin_pouch',
    name: "Beanbean Kingdom Coin Pouch",
    description: "A pouch that converts foreign currency into local Beanbean coins at a favorable rate. Sometimes.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 2500,
    icon: '💰',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Once per day, convert up to 100 gp of foreign currency into 110 gp of Beanbean coins",
        "On a roll of 1, the pouch eats the money",
        "Emits a faint bean smell"
    ],
    vendor: 'Beanbean Kingdom',
    shippedBy: 'Express Mail',
    levelRequirement: 1
},

  'beanbean_kingdom_magic_bean_soup_recipe': {
    id: 'beanbean_kingdom_magic_bean_soup_recipe',
    name: "Recipe: Beanbean Kingdom Magic Bean Soup",
    description: "Soup from enchanted beans for growth spurts.",
    category: SHOP_CATEGORIES.services,
    price: 7000,
    icon: '🍲',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Boil beans (25 min); eat to gain temporary +1 size (advantage on Strength, disadvantage on Dex) for 1 hour",
        "Requires: Magic beans; beanstalk dreams",
        "Grows your appetite",
        "Made by: Kingdom Soup Makers"
    ],
    vendor: 'beanbean_kingdom_farm',
    shippedBy: 'Beanstalk Broth Book',
    levelRequirement: 5
},

  'beanbean_kingdom_pressure_cooker': {
    id: 'beanbean_kingdom_pressure_cooker',
    name: "Beanbean Kingdom Pressure Cooker",
    description: "Cooks beans at high pressure (dangerous).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 13500,
    icon: '💥',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Cooks bean recipes in 5 minutes (high pressure)",
        "10% chance it explodes: deals 1d6 thunder damage in 10ft radius (DEX save DC 12)",
        "Beans are perfectly cooked: remove one level of exhaustion when eaten",
        "Made by: Beanbean Royal Engineers"
    ],
    vendor: 'beanbean_kingdom',
    shippedBy: 'Beanstalk Express',
    levelRequirement: 5
},

  'beanbean_kingdom_recipe_bean_burrito': {
    id: 'beanbean_kingdom_recipe_bean_burrito',
    name: "Recipe: Beanbean Kingdom Bean Burrito",
    description: "A burrito that fuels your... propulsion.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 8500,
    icon: '📜',
    stock: 8,
    rarity: 'common',
    effects: [
        "Grants +10 speed for 1 hour (bean power)",
        "Disadvantage on Stealth checks (musical accompaniment)",
        "Immune to being knocked prone (gas provides stability)",
        "Made by: Beanbean Royal Kitchen"
    ],
    vendor: 'beanbean_kingdom',
    shippedBy: 'Beanstalk Express',
    levelRequirement: 5
},

  'beanbean_kingdom_recipe_royal_bean_casserole': {
    id: 'beanbean_kingdom_recipe_royal_bean_casserole',
    name: "Recipe: Beanbean Kingdom Royal Bean Casserole",
    description: "The king of bean dishes.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 13500,
    icon: '📜',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Grants +1 to Constitution saves for 8 hours (fiber)",
        "You feel royal: advantage on Charisma with bean enthusiasts",
        "Gas is noble: disadvantage on Stealth, advantage on Intimidation",
        "Made by: Beanbean Royal Chefs"
    ],
    vendor: 'beanbean_kingdom',
    shippedBy: 'Bean Vault',
    levelRequirement: 6
},

  'beanbean_kingdom_speed_beans': {
    id: 'beanbean_kingdom_speed_beans',
    name: "Beanbean Kingdom Speed Beans",
    description: "Magical beans that make you fast and gassy.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16500,
    icon: '🫘',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Once per day: Gain +10 ft speed for 1 hour",
        "Can Dash as a bonus action once during the duration",
        "Disadvantage on Stealth checks due to constant bean-based flatulence",
        "Made by: Beanbean Royal Kitchen"
    ],
    vendor: 'beanbean_kingdom_market',
    shippedBy: 'Beanstalk Express',
    levelRequirement: 5
},

  'beanbean_kingdom_wario_beanbag_chair': {
    id: 'beanbean_kingdom_wario_beanbag_chair',
    name: "Beanbean Kingdom Wario Beanbag Chair",
    description: "A beanbag shaped like Wario's head.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5200,
    icon: '🪑',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Sit in chair: advantage on saves vs. exhaustion from resting (very comfortable)",
        "Chair is huge: disadvantage on Stealth (you're sitting on Wario's face)",
        "Beans leak: you smell like beans for 1 hour after use",
        "Made by: Beanbean Kingdom (Wario Furniture)"
    ],
    vendor: 'beanbean_kingdom',
    shippedBy: 'Bean Vault',
    levelRequirement: 5
},

  'beanbean_kingdom_wario_currency_exchange': {
    id: 'beanbean_kingdom_wario_currency_exchange',
    name: "Beanbean Kingdom Wario Currency Exchange",
    description: "Exchange gold for Wario Coins (worthless).",
    category: SHOP_CATEGORIES.SERVICES,
    price: 4500,
    icon: '💱',
    stock: 7,
    rarity: 'common',
    effects: [
        "Exchange 100 gp for 100 Wario Coins (only accepted in Wario Land)",
        "Wario Coins are chocolate: you can eat them for 1d4 temporary HP",
        "Shopkeepers laugh at you: disadvantage on Charisma",
        "Made by: Beanbean Kingdom (Wario Exchange Rate)"
    ],
    vendor: 'beanbean_kingdom',
    shippedBy: 'Bean Vault',
    levelRequirement: 4
},

  'beanbean_kingdom_wario_wario_bean': {
    id: 'beanbean_kingdom_wario_wario_bean',
    name: "Beanbean Kingdom Wario-Wario Bean",
    description: "A bean that makes you say 'Wario' twice as much.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 3800,
    icon: '🫘',
    stock: 12,
    rarity: 'common',
    effects: [
        "Eat bean: you must say 'Wario' before each sentence for 1 hour (disadvantage on Charisma if you forget)",
        "Gain +1 to Strength checks (Wario energy)",
        "Beans cause gas: 10ft cloud of disadvantage on Stealth, advantage on Intimidation",
        "Made by: Beanbean Kingdom (Licensed by Wario)"
    ],
    vendor: 'beanbean_kingdom',
    shippedBy: 'Beanstalk Express',
    levelRequirement: 4
},

  'beanbean_koopa_coins': {
        id: 'beanbean_koopa_coins',
        name: "Koopa Coins",
        description: "These coins were minted during the banking collapse of the Koopa Empire. Their value fluctuates wildly, as they are now traded between smugglers, bureaucrats, and rogue academies. Some say the coins whisper to those who hold them long enough—others say they are cursed.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 750,
        icon: '💰',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "1d4 coin value increase on roll",
        "20% chance to trigger currency fluctuation",
        "Can be exchanged for rare items in Kivotos black markets",
        "Requires 1 hour to process transaction",
        "Shipped by: Bob-omb Rush Delivery",
        "Lore: Once used to bribe a ghost in the Beanbean sewers"
        ],
        vendor: 'beanbean',
        shippedBy: 'Bob-omb Rush Delivery',
        levelRequirement: 2
    },

  'beanbean_lucky_coin': {
        id: 'beanbean_lucky_coin',
        name: "Lucky Beanbean Coin",
        description: "A golden coin engraved with a smiling face. Rumored to bring good fortune.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 250,
        icon: '🪙',
        stock: 15,
        rarity: 'common',
        effects: [
            "Grants +3 luck for one hour",
        "Has a 10 chance to double the value of the next gold coin earned"
        ],
        vendor: 'beanbean',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 1
    },

  'beanbean_metal_tongue': {
        id: 'beanbean_metal_tongue',
        name: "Tongue of the Iron Legion",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '⚙',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants +2d4 armor bonus to melee attacks",
        "Cannot be used in non-combat situations without causing mechanical backlash",
        "Suffers -1d6 damage when used in silence or low light",
        "Only usable by those who have served under the Iron Legion banner",
        "Emits low hum that disrupts enemy spellcasting",
        "Crafted by Fawfuls Fury with secret iron ore from the Midlands"
        ],
        vendor: 'beanbean',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 6
    },

  'beanbean_mushroom_mantle': {
        id: 'beanbean_mushroom_mantle',
        name: "Fungal Mantle of Whispering Roots",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🍄',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Grants +2 to stealth checks when moving through dense undergrowth",
        "Slightly slows movement speed by 10% when in combat",
        "Emits faint fungal scent that confuses hostile creatures for 1 round",
        "Wears off after 24 hours of prolonged exposure to sunlight",
        "Requires attunement with a mushroom cultist",
        "Crafted by: Fungi Guilds of the Mushroom Kingdom"
        ],
        vendor: 'beanbean',
        shippedBy: 'Koopa Postal',
        levelRequirement: 4
    },

  'beanbean_peasley_coins_pouch': {
        id: 'beanbean_peasley_coins_pouch',
        name: "Peasley Scandal Pouch",
        description: "A cursed pouch that holds the stolen coins and whispers secrets",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1000,
        icon: '🔮',
        stock: 15,
        rarity: 'uncommon',
        effects: [
            "Grants temporary immunity to corruption",
        "Causes minor paranoia during use",
        "Reveals hidden locations in Beanbean Kingdom",
        "Made by: Mushroom Regency",
        "Triggers Peasley Financial Scandal if used during diplomatic events",
        "Requires 3 Beanbean coins to activate"
        ],
        vendor: 'beanbean',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'beanbean_peasley_letter': {
        id: 'beanbean_peasley_letter',
        name: "Peasleys Secret Letter",
        description: "A sealed letter bearing the royal seal. Its contents are unknown.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 5000,
        icon: '✉',
        stock: 1,
        rarity: 'rare',
        effects: [
            "When opened, reveals a clue to Toadettes whereabouts",
        "Grants access to a hidden meeting with a high-ranking Beanbean official",
        "Unlocks a secret passage in the royal gardens",
        "Causes all enemies within 5 meters to become confused for 10 seconds"
        ],
        vendor: 'beanbean',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 8
    },

  'beanbean_pipe_tether': {
        id: 'beanbean_pipe_tether',
        name: "Pipebound Tether of the Koopa Postal",
        description: "",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 400,
        icon: '📦',
        stock: 15,
        rarity: 'common',
        effects: [
            "Grants 10% chance to detect hidden messages or traps in pipe networks",
        "Can be used to mark locations for future delivery routes",
        "Requires 30 seconds to activate and connect to nearest pipe junction",
        "Fails if used in open air or above ground level",
        "Unlocks special delivery bonuses for high value items",
        "Crafted by: Koopa Postal Delivery Corps"
        ],
        vendor: 'beanbean',
        shippedBy: 'Koopa Postal',
        levelRequirement: 1
    },

  'beanbean_royal_bean_counting': {
    id: 'beanbean_royal_bean_counting',
    name: "Beanbean Royal Bean Counting Service",
    description: "Experts count your money... for a fee.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 8500,
    icon: '💰',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Counts your gold and gives precise total in 1 minute (normally takes 10)",
        "They take 5% as service fee but find 10% extra you forgot about",
        "You get a certificate of bean-counting authenticity",
        "Made by: Beanbean Royal Accountants"
    ],
    vendor: 'beanbean_kingdom',
    shippedBy: 'Bean Counter',
    levelRequirement: 5
},

  'beanbean_royal_bean_counting_premium': {
    id: 'beanbean_royal_bean_counting_premium',
    name: "Beanbean Royal Bean Counting (Premium)",
    description: "They count your beans very precisely.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 14500,
    icon: '💰',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Counts your gold with 99.9% accuracy (finds 15% extra, takes 7% fee)",
        "You get a framed certificate",
        "You develop a bean-counting tic (disadvantage on checks if you don't count things)",
        "Made by: Beanbean Royal Accountants"
    ],
    vendor: 'beanbean_kingdom',
    shippedBy: 'Bean Vault',
    levelRequirement: 5
},

  'beanbean_scarlet_crown': {
        id: 'beanbean_scarlet_crown',
        name: "Crown of the Broken Throne",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🏰',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants +3d6 bonus to leadership checks",
        "Causes visible tremors in the wearer’s hands during combat",
        "If worn during a diplomatic meeting with the Regal Empire may trigger a royal favor",
        "Wearer must have prior diplomatic experience or risk mental unraveling",
        "May be used to temporarily banish minor magical entities",
        "Fabled relic from the Prince Peasley scandal’s final court session",
        "Shipped by Warp Whistle Transit with a note from the Onyx Hand’s latest courier"
        ],
        vendor: 'beanbean',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 8
    },

  'beanbean_shadowfell_keychain': {
        id: 'beanbean_shadowfell_keychain',
        name: "Shadowfell Keychain of the Onyx Hand",
        description: "",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🔒',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants access to one hidden portal in the Shadowfell dimension",
        "Triggers a 50% chance to detect magical corruption when used",
        "Causes minor psychic backlash after 3 uses",
        "Can be enchanted to open multiple portals with extended use",
        "Wears off after 72 hours if not used in the Shadowfell",
        "Crafted by: Orangus Cornelius’s personal workshop",
        "Shipped via: Koopa Postal (Priority Delivery)"
        ],
        vendor: 'beanbean',
        shippedBy: 'Koopa Postal',
        levelRequirement: 7
    },

  'beanbean_team_rock_item': {
        id: 'beanbean_team_rock_item',
        name: "Remi Coil Airship Boost",
        description: "A patent-enhanced airship propulsion module that doubles efficiency",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 12000,
        icon: '🚀',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Doubles airship speed and range",
        "Grants 50% chance to avoid enemy fire",
        "May cause a system crash if used in high pressure zones",
        "Made by: Team Rocket",
        "Requires airship base to activate",
        "Grants bonus XP for every 1000 meters traveled",
        "Can be used to bypass enemy air defenses"
        ],
        vendor: 'beanbean',
        shippedBy: 'Piranha Plant Post',
        levelRequirement: 10
    },

  'beanbean_treasure_inkwell': {
        id: 'beanbean_treasure_inkwell',
        name: "Inkwell of Whispering Scribes",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 750,
        icon: '🖋',
        stock: 12,
        rarity: 'uncommon',
        effects: [
            "When used to write on parchment grants +2d4 insight bonus to spellcasting rolls",
        "Consumes ink from the inkwell itself after use",
        "May cause ink to bleed into the page if caster is under stress",
        "Fails to write if used by non spellcasters",
        "Secretly contains a vial of the Onyx Hand’s last whispered decree",
        "Shipped by Warp Whistle Transit"
        ],
        vendor: 'beanbean',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 3
    },

  'beholder_eye_beam_focus': {
    id: 'beholder_eye_beam_focus',
    name: "Beholder Eye-Beam Focus Surgery",
    description: "Magical lens implantation to enhance ray spells.",
    category: SHOP_CATEGORIES.services,
    price: 335000,
    icon: '👁️',
    stock: 5,
    rarity: 'legendary',
    effects: [
        "Ray spells gain +2 to attack rolls and save DCs",
        "Can fire one extra ray per day",
        "Made by: Xanathar's Surgeon"
    ],
    vendor: 'eye_doctor',
    shippedBy: 'Disintegration Beam',
    levelRequirement: 14
},

  'bioluminescent_fungus_lantern': {
    id: 'bioluminescent_fungus_lantern',
    name: "Bioluminescent Fungus Lantern (Light)",
    description: "An eternal light source from deep underground fungi.",
    category: SHOP_CATEGORIES.premium,
    price: 350000,
    icon: '🍄',
    stock: 2,
    rarity: 'godly',
    effects: [
        "Illuminates 100 ft radius indefinitely",
        "Heals minor wounds in light",
        "Made by: Mycoid Cultivators"
    ],
    vendor: 'underdark_market',
    shippedBy: 'Spore Pod',
    levelRequirement: 13
},

  'biomechanical_symbiote': {
    id: 'biomechanical_symbiote',
    name: "Biomechanical Symbiote (Living Armor)",
    description: "A symbiotic organism that enhances the host's physical abilities.",
    category: SHOP_CATEGORIES.premium,
    price: 440000,
    icon: '🦠',
    stock: 1,
    rarity: 'godly',
    effects: [
        "+2 to strength and dexterity",
        "Self-repairs over time",
        "Made by: BioForge Labs"
    ],
    vendor: 'organic_market',
    shippedBy: 'Symbiont Pod',
    levelRequirement: 16
},

  'black_hole_in_a_jar': {
    id: 'black_hole_in_a_jar',
    name: "Black Hole in a Jar",
    description: "A mason jar containing a miniature black hole.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 68000000,
    icon: '🫙',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Open jar: suck in everything within 1 mile (no save, destroys matter)",
        "Close jar: keep the black hole as a pet (it obeys simple commands)",
        "Made by: The Astrophysicist"
    ],
    vendor: 'celestial_bodies',
    shippedBy: 'Gravity Well',
    levelRequirement: 85
},

  'black_paint_of_emo_introspection': {
    id: 'black_paint_of_emo_introspection',
    name: "Black Paint of Emo Introspection",
    description: "Paint your feelings.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12500,
    icon: '🎨',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Paint yourself black: advantage on saves vs. fear (you're too melancholy to be scared)",
        "You must compose dark poetry before each long rest or be restless",
        "Your shadow becomes slightly more dramatic",
        "Made by: Dark Elves Paint Co."
    ],
    vendor: 'dark_elves_paint_shop',
    shippedBy: 'Shadow Drop',
    levelRequirement: 5
},

  'blessed_order_holy_bread_recipe': {
    id: 'blessed_order_holy_bread_recipe',
    name: "Recipe: Blessed Order Holy Bread",
    description: "Sacred bread blessed for divine protection.",
    category: SHOP_CATEGORIES.services,
    price: 9000,
    icon: '🍞',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Bake with holy water (45 min); eat to gain +1 to saves vs. undead/fiends for 4 hours and heal 1d6 radiant HP",
        "Requires: Flour and blessing; glows faintly",
        "Wards minor evil",
        "Made by: Order Bakers"
    ],
    vendor: 'blessed_order_chapel',
    shippedBy: 'Sacred Slice Scroll',
    levelRequirement: 6
},

  'blessed_order_holy_water_dispenser': {
    id: 'blessed_order_holy_water_dispenser',
    name: "Blessed Order Holy Water Dispenser",
    description: "Dispenses holy water for cooking.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15500,
    icon: '💧',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Dispenses holy water: advantage on cooking checks for blessed recipes",
        "Water is free: but you must donate 1 gp per use (guilt-based)",
        "Dispenser blesses your food: undead are repulsed by your cooking",
        "Made by: Blessed Order Holy Water Co."
    ],
    vendor: 'blessed_order',
    shippedBy: 'Holy Procession',
    levelRequirement: 6
},

  'blessed_order_holy_water_distiller': {
    id: 'blessed_order_holy_water_distiller',
    name: "Blessed Order Holy Water Distiller",
    description: "Small distiller for infusing bread with blessings.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9000,
    icon: '💧',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Distills holy essence; +1 to Religion for blessed recipes",
        "Purifies water; adds radiant heal (extra 1d4)",
        "Requires blessing recharge",
        "Made by: Order Alchemists"
    ],
    vendor: 'blessed_order_chapel',
    shippedBy: 'Sacred Steam Set',
    levelRequirement: 6
},

  'blessed_order_holy_water_flask': {
    id: 'blessed_order_holy_water_flask',
    name: "Blessed Order Holy Water Flask",
    description: "A flask containing holy water blessed by the Blessed Order.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 7500,
    icon: '💧',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Holy water deals 2d6 radiant damage to fiends and undead",
        "Can be used to bless a small area (10ft radius) for 1 hour",
        "Made by: Blessed Order"
    ],
    vendor: 'blessed_order_sanctum',
    shippedBy: 'Glass Flask',
    levelRequirement: 4
},

  'blessed_order_holy_water_splash_service': {
    id: 'blessed_order_holy_water_splash_service',
    name: "Blessed Order Holy Water Splash Service",
    description: "Bless your gear with a quick ritual.",
    category: SHOP_CATEGORIES.services,
    price: 11500,
    icon: '💧',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Weapon deals +1d4 radiant to undead/fiends for 24 hours",
        "You gain +1 to saves vs. evil for 1 day",
        "Splash might wet your pants (embarrassing)",
        "Made by: Order Priests"
    ],
    vendor: 'blessed_order_chapel',
    shippedBy: 'Vial of Faith',
    levelRequirement: 5
},

  'blessed_order_paladin_boots': {
    id: 'blessed_order_paladin_boots',
    name: "Blessed Order Paladin Boots",
    description: "Boots that squeak with righteousness.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18500,
    icon: '👢',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Advantage on saves vs. being knocked prone (good balance)",
        "Boots squeak loudly: disadvantage on Stealth, advantage on Performance (tap dancing)",
        "You must announce your presence when entering rooms",
        "Made by: Blessed Order Cobbler"
    ],
    vendor: 'blessed_order',
    shippedBy: 'Holy Procession',
    levelRequirement: 6
},

  'blessed_order_priest_robe': {
    id: 'blessed_order_priest_robe',
    name: "Blessed Order Priest Robe",
    description: "Simple white robe for divine casters.",
    category: SHOP_CATEGORIES.premium,
    price: 18500,
    icon: '👘',
    stock: 3,
    rarity: 'rare',
    effects: [
        "+1 to Wisdom (Religion) checks",
        "Robe cleans itself after use",
        "Attracts holy insects (minor buzzing)",
        "Made by: Order Tailors"
    ],
    vendor: 'blessed_order_monastery',
    shippedBy: 'Holy Thread',
    levelRequirement: 6
},

  'blessed_order_recipe_holy_water_soup': {
    id: 'blessed_order_recipe_holy_water_soup',
    name: "Recipe: Blessed Order Holy Water Soup",
    description: "Soup that's mildly divine.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 13500,
    icon: '📜',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Grants advantage on saves vs. undead and fiendish effects for 1 hour",
        "Undead find the smell revolting: advantage on Charisma checks to repel them",
        "Tastes like watered-down faith (bland but holy)",
        "Made by: Blessed Order Kitchen"
    ],
    vendor: 'blessed_order',
    shippedBy: 'Holy Procession',
    levelRequirement: 6
},

  'blessed_order_suncrystal': {
        id: 'blessed_order_suncrystal',
        name: "Blessed Order Suncrystal",
        description: "A focusing crystal that channels raw divine light.",
        category: SHOP_CATEGORIES.equipment,
        price: 48000,
        icon: '☀️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Spells dealing Radiant damage gain +1d6 damage",
        "Once per day, emit a flash that blinds Undead/Fiends (DC 15 CON save)",
            "Made by: Blessed Order"
        ],
        vendor: 'blessed_order_sanctum',
        shippedBy: 'Silver Casket',
        levelRequirement: 9
    },

  'blessing_of_the_elders': {
    id: 'blessing_of_the_elders',
    name: "Blessing of the Elders",
    description: "A ritual performed by ancient Toad sages to imbue a weapon or armor with ancestral power.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 75000,
    icon: '🙏',
    stock: 3,
    rarity: 'epic',
    effects: [
        "One weapon or armor gains +1 bonus for 1 year (non-magical items become +1)",
        "Once per month: cast *Sanctuary* on the item’s user",
        "Requires a 1-hour ceremony and a personal sacrifice (DM discretion)"
    ],
    vendor: 'toad_council',
    shippedBy: 'Ritual Scroll',
    levelRequirement: 6
},

  'block_brick': {
        id: 'block_brick',
        name: "Brick Block",
        description: "A standard brick block. Heavy.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1000,
        icon: '🧱',
        stock: 500,
        rarity: 'common',
        effects: ["Portable high ground", "Can be smashed"],
        vendor: 'toad_town_market',
        shippedBy: 'Freight',
        levelRequirement: 1
    },

  'blood_moon_curse': {
    id: 'blood_moon_curse',
    name: "Blood Moon Curse (Third Party)",
    description: "A transferable curse that weaponizes lycanthropy.",
    category: SHOP_CATEGORIES.forbidden,
    price: 325000,
    icon: '🌙',
    stock: 5,
    rarity: 'legendary',
    effects: [
        "Inflicts controllable lycanthropy on target (Werewolf Lord form)",
        "Curse can be transferred to enemies via touch attack",
        "Made by: Blood Moon Coven"
    ],
    vendor: 'curse_weaver',
    shippedBy: 'Cursed Post',
    levelRequirement: 14
},

  'blooper_ink': {
    id: 'blooper_ink',
    name: "Blooper Ink Vial",
    description: "Ink that obscures vision and slips up enemies.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 4000,
    icon: '🦑',
    stock: 12,
    rarity: 'uncommon',
    effects: [
        "Throw: 10ft radius blinded for 1 round (DEX save DC 12)",
        "Area becomes slippery (difficult terrain)",
        "Single Use"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Ink Bottle',
    levelRequirement: 2
},

  'blooper_ink_well': {
    id: 'blooper_ink_well',
    name: "Blooper's Ink Well",
    description: "A glass well filled with black ink. Write messages or blind enemies.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 7000,
    icon: '🦑',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Throw: 15ft cone, creatures blinded for 1 round (CON save)",
        "Ink writes messages visible only in moonlight",
        "Octopi become friendly",
        "Smells like low tide"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Sealed Jar',
    levelRequirement: 2
},

  'blue_paint': {
        id: 'blue_paint',
        name: "Bucket of Blue Paint",
        description: "Deep ocean blue.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2000,
        icon: '🎨',
        stock: 100,
        rarity: 'common',
        effects: ["Paint things blue", "Messy"],
        vendor: 'toad_town_market',
        shippedBy: 'Can',
        levelRequirement: 1
    },

  'bob_omb_buddy': {
    id: 'bob_omb_buddy',
    name: "Bob-Omb Buddy",
    description: "A pink Bob-Omb that follows you like a puppy. Explodes on command, reforms at dawn.",
    category: SHOP_CATEGORIES.FACTION,
    price: 12000,
    icon: '💣',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Command: Explode (3d6 Fire, 10ft radius)",
        "Reforms after 24 hours",
        "Likes to hug your leg (awkward)",
        "Afraid of torches"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Explosive Container',
    levelRequirement: 4,
    factionBonus: { offense: 10 }
},

  'bob_omb_standard': {
        id: 'bob_omb_standard',
        name: "Bob-omb (Defused)",
        description: "A standard explosive. The fuse has been removed for safety. Re-fusing voids warranty.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 25000,
        icon: '💣',
        stock: 8,
        rarity: 'common',
        effects: [
            "Throwable (range 30ft)",
            "Explodes at start of your next turn",
            "All creatures in 10ft: 4d6 fire damage, DEX save DC 14 for half"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'EXTREMELY Careful Handling',
        levelRequirement: 3,
        warning: "Possession may be illegal in some jurisdictions"
    },

  'bobomb_buddy_plushie': {
    id: 'bobomb_buddy_plushie',
    name: "Bob-omb Buddy Plushie",
    description: "A stuffed explosive friend that whispers encouragement... and occasionally detonates.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 12000,
    icon: '🧸',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Grants Advantage on CHA checks with explosives or rebels",
        "Once per day: Explodes for 2d6 Fire damage (you choose target)",
        "Squeaks when you're nervous (no stealth advantage nearby)",
        "Cannot be thrown — it cries if you try"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Bubble Wrap Courier',
    levelRequirement: 3
},

  'bone_chime_wind_catcher': {
    id: 'bone_chime_wind_catcher',
    name: "Bone Chime Wind Catcher",
    description: "A mobile of tiny bones that chime in the wind — each chime is a whisper of the dead.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 6000,
    icon: '🪦',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "When wind blows, you hear one cryptic phrase from a dead person",
        "Once per day: ask a yes/no question — answer is whispered in a dead voice",
        "Chimes stop if you lie"
    ],
    vendor: 'temple_eternal',
    shippedBy: 'Woven String',
    levelRequirement: 2
},

  'boo_bell': {
        id: 'boo_bell',
        name: "Boo's Bell",
        description: "A spectral bell that resonates with ghostly energy. Ring to reveal the hidden.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 55000,
        icon: '🔔',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Action: Ring the bell",
            "All invisible creatures within 30ft become visible for 1 minute",
            "Ghosts and spirits must make CHA save or be Frightened of you"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Blessed Container',
        levelRequirement: 4
    },

  'boo_in_a_jar': {
    id: 'boo_in_a_jar',
    name: "Boo in a Jar",
    description: "A captured Boo. Whispers secrets. Sometimes lies. Always watching.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 17000,
    icon: '👻',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Can answer 1 question per day (50% chance truth, 50% mischievous lie)",
        "Grants Darkvision 60ft while jar is open",
        "If jar breaks, Boo becomes hostile or vanishes to tell secrets to your enemies",
        "Whispers embarrassing facts about you at dramatic moments"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Cursed Glassware',
    levelRequirement: 5
},

  'boo_portrait': {
    id: 'boo_portrait',
    name: "Haunted Boo Portrait",
    description: "A painting that follows you with its eyes. Sometimes the eyes blink.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 5000,
    icon: '🖼️',
    stock: 3,
    rarity: 'uncommon',
    effects: [
        "Warns of invisible creatures (30ft)",
        "Portrait Boo whispers secrets at night",
        "Once per day: Cast 'Mage Hand' as Boo",
        "Cries when left alone"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Canvas Wrap',
    levelRequirement: 1
},

  'boo_sheet': {
        id: 'boo_sheet',
        name: "Boo Sheet",
        description: "A white sheet with eye holes cut out. Disguise yourself as a ghost.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6000,
        icon: '👻',
        stock: 100,
        rarity: 'common',
        effects: ["+2 Stealth in haunted areas", "Boos might be confused"],
        vendor: 'shamans_hut',
        shippedBy: 'Laundry Bag',
        levelRequirement: 1
    },

  'book_of_dead_languages': {
    id: 'book_of_dead_languages',
    name: "Book of Dead Languages",
    description: "A tome written in languages that no living soul remembers.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 20000,
    icon: '📜',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Read for 1 hour: learn one dead language perfectly",
        "You forget one language you knew before",
        "The book sometimes writes new words — in your voice"
    ],
    vendor: 'scholar_society',
    shippedBy: 'Leather Bindings',
    levelRequirement: 5
},

  'book_of_moths': {
    id: 'book_of_moths',
    name: "Book of Moths",
    description: "A book whose pages are made of living moths that flutter when read.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 18000,
    icon: '🦋',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Read: gain knowledge of a single secret (DM chooses)",
        "Each page you read, one moth dies — and you forget one memory",
        "The moths whisper secrets to you at night"
    ],
    vendor: 'bazaar_of_oddities',
    shippedBy: 'Silk Cover',
    levelRequirement: 5
},

  'book_of_unwritten_names': {
    id: 'book_of_unwritten_names',
    name: "Book of Unwritten Names",
    description: "A blank book that writes the names of those who will die tomorrow.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 180000,
    icon: '📖',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Each dawn, 1d4 names appear — those people will die before sunset",
        "You may erase a name — but another appears in its place",
        "The book is sentient. It whispers to you at night"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Leather Binding',
    levelRequirement: 12
},

  'boomerang_flower': {
    id: 'boomerang_flower',
    name: "Boomerang Flower",
    description: "Grants the ability to throw returning boomerangs.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18000,
    icon: '🪃',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Throw boomerang: 1d8 slashing, returns automatically",
        "Range 60ft, can hit multiple targets on return (DEX save DC 14)",
        "Unlimited uses"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Padded Case',
    levelRequirement: 5
},

  'bootleg_bowser_castle_key': {
    id: 'bootleg_bowser_castle_key',
    name: "Bootleg Bowser Castle Key",
    description: "A key to 'Bowser's Castle' (any red door).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4700,
    icon: '🔑',
    stock: 10,
    rarity: 'common',
    effects: [
        "Unlocks red doors: advantage on locks",
        "Key bends: 20% fail rate",
        "Koopa guards: advantage on Deception",
        "Made by: Castle Copies"
    ],
    vendor: 'wario_land',
    shippedBy: 'Koopa Key',
    levelRequirement: 4
},

  'bootleg_bowser_lava_lamp': {
    id: 'bootleg_bowser_lava_lamp',
    name: "Bootleg Bowser Lava Lamp",
    description: "A lamp with 'lava' (oil).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5400,
    icon: '💡',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Provides 10ft light, hypnotic: DC 12 Wis or distracted",
        "Oil leaks: disadvantage on fire safety",
        "Bowser fans: +1 Intimidation",
        "Made by: Lava Light Lies"
    ],
    vendor: 'wario_land',
    shippedBy: 'Hot Glow Haul',
    levelRequirement: 5
},

  'bootleg_bowser_shell_shield': {
    id: 'bootleg_bowser_shell_shield',
    name: "Bootleg Bowser Shell Shield",
    description: "A cardboard shell 'shield' painted green.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5800,
    icon: '🐢',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "+1 AC as a makeshift shield, but only against fire (Bowser theme)",
        "Shield crumbles after 3 hits: disadvantage on saves vs. bludgeoning",
        "Intimidates Koopas: advantage on Intimidation with turtle-like creatures",
        "Made by: Shell Knockoff Factory"
    ],
    vendor: 'wario_land',
    shippedBy: 'Turtle Truck',
    levelRequirement: 5
},

  'bootleg_daisy_flower_power_bracelet': {
    id: 'bootleg_daisy_flower_power_bracelet',
    name: "Bootleg Daisy Flower Power Bracelet",
    description: "A bracelet with plastic flowers that 'empower' you.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4600,
    icon: '💐',
    stock: 10,
    rarity: 'common',
    effects: [
        "Wear for +1 to Strength (Athletics) in sports (Daisy vibe)",
        "Flowers wilt after rain: disadvantage on checks when wet",
        "Attracts bees: 10% chance of minor sting (1 damage)",
        "Made by: Flower Knockoff Co."
    ],
    vendor: 'wario_land',
    shippedBy: 'Daisy Delivery',
    levelRequirement: 4
},

  'bootleg_dk_banana_peel_slippers': {
    id: 'bootleg_dk_banana_peel_slippers',
    name: "Bootleg DK Banana Peel Slippers",
    description: "Slippers that 'slip' on peels (grippy soles).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4300,
    icon: '🍌',
    stock: 12,
    rarity: 'common',
    effects: [
        "Avoid slips: advantage on Dex vs. prone",
        "Slippers banana smell: disadvantage on Stealth",
        "DK: +1 Acrobatics bananas",
        "Made by: Peel Pranks"
    ],
    vendor: 'wario_land',
    shippedBy: 'Peel Post',
    levelRequirement: 4
},

  'bootleg_dk_barrel_roll_toy': {
    id: 'bootleg_dk_barrel_roll_toy',
    name: "Bootleg DK Barrel Roll Toy",
    description: "A toy that 'rolls' (spins).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4500,
    icon: '🛢️',
    stock: 12,
    rarity: 'common',
    effects: [
        "Spin to dizzy foe: DC 12 Wis or nauseous",
        "Toy breaks: disadvantage on spin",
        "DK fans: +1 Acrobatics",
        "Made by: Roll Replicas"
    ],
    vendor: 'wario_land',
    shippedBy: 'Barrel Bounce',
    levelRequirement: 4
},

  'bootleg_dk_diddy_kong_hat': {
    id: 'bootleg_dk_diddy_kong_hat',
    name: "Bootleg DK Diddy Kong Hat",
    description: "A backward cap for 'cool' monkeys.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4700,
    icon: '🧢',
    stock: 11,
    rarity: 'common',
    effects: [
        "+1 Acrobatics flips",
        "Hat slips: disadvantage on head",
        "DK crew: +1 Charisma apes",
        "Made by: Hat Knockoffs"
    ],
    vendor: 'wario_land',
    shippedBy: 'Monkey Mail',
    levelRequirement: 4
},

  'bootleg_donkey_kong_barrel_cannon': {
    id: 'bootleg_donkey_kong_barrel_cannon',
    name: "Bootleg Donkey Kong Barrel Cannon",
    description: "A toy cannon that shoots foam barrels.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5100,
    icon: '🚀',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Shoot foam barrel: 20ft range, knocks prone on hit (DC 12 STR save)",
        "Cannon jams 20% of time: disadvantage on next shot",
        "DK fans cheer: +1 Charisma with apes",
        "Made by: Barrel Bootleggers"
    ],
    vendor: 'wario_land',
    shippedBy: 'Barrel Roll',
    levelRequirement: 4
},

  'bootleg_fox_mcfox_face_mask': {
    id: 'bootleg_fox_mcfox_face_mask',
    name: "Bootleg Fox McCloud Face Mask",
    description: "A mask that makes you look like a pilot (badly).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5200,
    icon: '🦊',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Disguise as pilot: advantage on Deception in spaceports",
        "Mask itches: disadvantage on Concentration",
        "Star Fox fans laugh: +1 Charisma with them (ironic)",
        "Made by: Arwing Knockoffs"
    ],
    vendor: 'wario_land',
    shippedBy: 'Barrel Roll',
    levelRequirement: 4
},

  'bootleg_link_hookshot_glove': {
    id: 'bootleg_link_hookshot_glove',
    name: "Bootleg Link Hookshot Glove",
    description: "A glove with a spring-loaded 'hook' (rubber band).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5300,
    icon: '🧤',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Pull small objects 10ft (Sleight DC 12)",
        "Rubber snaps: disadvantage on next pull",
        "Hyrule explorers: advantage on climbing talks",
        "Made by: Hookshot Fakes"
    ],
    vendor: 'wario_land',
    shippedBy: 'Zelda Zip',
    levelRequirement: 4
},

  'bootleg_luigi_ghost_key': {
    id: 'bootleg_luigi_ghost_key',
    name: "Bootleg Luigi Ghost Key",
    description: "A key that 'unlocks' ghost doors (creaks).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '🔑',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Unlock spectral locks: advantage on ghost doors",
        "Key haunts: disadvantage on sleep",
        "Ghost hunters: +1 Perception",
        "Made by: Key Ghosts"
    ],
    vendor: 'wario_land',
    shippedBy: 'Boo Bolt',
    levelRequirement: 5
},

  'bootleg_luigi_green_cap': {
    id: 'bootleg_luigi_green_cap',
    name: "Bootleg Luigi Green Cap",
    description: "A green hat for 'ghost hunting'.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4500,
    icon: '🧢',
    stock: 12,
    rarity: 'common',
    effects: [
        "+1 vs. fear (Luigi courage)",
        "Cap fades: disadvantage on color",
        "Luigi lovers: +1 Charisma",
        "Made by: Cap Copies"
    ],
    vendor: 'wario_land',
    shippedBy: 'Green Glow',
    levelRequirement: 4
},

  'bootleg_luigi_mansion_key': {
    id: 'bootleg_luigi_mansion_key',
    name: "Bootleg Luigi Mansion Key",
    description: "A key to 'haunted' doors.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5400,
    icon: '🏠',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Unlock haunted locks: advantage on ghost doors",
        "Key chills: disadvantage on warm",
        "Mansion explorers: +1 Perception",
        "Made by: Mansion Copies"
    ],
    vendor: 'wario_land',
    shippedBy: 'Ghost Gate',
    levelRequirement: 5
},

  'bootleg_luigi_pollen_puff': {
    id: 'bootleg_luigi_pollen_puff',
    name: "Bootleg Luigi Pollen Puff",
    description: "A puff that 'vacuums' dust (sneeze powder).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4700,
    icon: '🌸',
    stock: 10,
    rarity: 'common',
    effects: [
        "Puff dust: DC 12 CON save or sneeze (distracted 1 round)",
        "Powder backfires: disadvantage on your next action",
        "Gardeners: advantage on plant talks",
        "Made by: Puff Fakes"
    ],
    vendor: 'wario_land',
    shippedBy: 'Sneeze Service',
    levelRequirement: 4
},

  'bootleg_luigi_portable_potion': {
    id: 'bootleg_luigi_portable_potion',
    name: "Bootleg Luigi Portable Potion",
    description: "A potion bottle that 'heals' (soda).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4500,
    icon: '🧪',
    stock: 11,
    rarity: 'common',
    effects: [
        "Drink for 1d4 HP (fizz heal)",
        "Soda burp: disadvantage on talk",
        "Luigi: +1 vs. poison",
        "Made by: Potion Fakes"
    ],
    vendor: 'wario_land',
    shippedBy: 'Fizz Freight',
    levelRequirement: 4
},

  'bootleg_mario_coin_block_replica': {
    id: 'bootleg_mario_coin_block_replica',
    name: "Bootleg Mario Coin Block Replica",
    description: "A block that 'dispenses' coins (one fake).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4700,
    icon: '🧱',
    stock: 11,
    rarity: 'common',
    effects: [
        "Hit to get 1 fake coin (looks real, 1 gp value)",
        "Block cracks: disadvantage on next hit",
        "Coin collectors: +1 Persuasion",
        "Made by: Block Bootlegs"
    ],
    vendor: 'wario_land',
    shippedBy: 'Block Bump',
    levelRequirement: 4
},

  'bootleg_mario_coin_counter': {
    id: 'bootleg_mario_coin_counter',
    name: "Bootleg Mario Coin Counter",
    description: "Counts your coins... inaccurately.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4600,
    icon: '🪙',
    stock: 9,
    rarity: 'common',
    effects: [
        "Counts gold: advantage on haggle if accurate",
        "10% off by 1d10 gp (Wario tax)",
        "Coin sound: +1 Charisma with gamblers",
        "Made by: Coin Knockoffs"
    ],
    vendor: 'wario_land',
    shippedBy: 'Coin Clink',
    levelRequirement: 4
},

  'bootleg_mario_fire_flower_spray': {
    id: 'bootleg_mario_fire_flower_spray',
    name: "Bootleg Mario Fire Flower Spray",
    description: "A spray bottle of 'fire' (hot sauce).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4600,
    icon: '🌺',
    stock: 10,
    rarity: 'common',
    effects: [
        "Spray 15ft: 1d4 fire damage (spicy!)",
        "Sauce burns eyes: disadvantage on sight checks",
        "Mario cosplayers: advantage on fire roleplay",
        "Made by: Flower Fakes"
    ],
    vendor: 'wario_land',
    shippedBy: 'Hot Sauce Haul',
    levelRequirement: 4
},

  'bootleg_mario_frog_suit_gloves': {
    id: 'bootleg_mario_frog_suit_gloves',
    name: "Bootleg Mario Frog Suit Gloves",
    description: "Gloves for 'jumping' (grippy).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5300,
    icon: '🧤',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "+1 jump grip",
        "Gloves slippery: disadvantage on hold",
        "Frog fans: +1 Acrobatics",
        "Made by: Frog Fakes"
    ],
    vendor: 'wario_land',
    shippedBy: 'Hop Hand',
    levelRequirement: 4
},

  'bootleg_mario_hammer_bros_hammer': {
    id: 'bootleg_mario_hammer_bros_hammer',
    name: "Bootleg Mario Hammer Bros Hammer",
    description: "A hammer for 'throwing' (toy).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4600,
    icon: '🔨',
    stock: 11,
    rarity: 'common',
    effects: [
        "Throw 20ft: 1d4 bludgeoning",
        "Hammer bounces: disadvantage on catch",
        "Hammer fans: +1 Strength",
        "Made by: Hammer Fakes"
    ],
    vendor: 'wario_land',
    shippedBy: 'Bros Bounce',
    levelRequirement: 4
},

  'bootleg_mario_raccoon_tail': {
    id: 'bootleg_mario_raccoon_tail',
    name: "Bootleg Mario Raccoon Tail",
    description: "A fake tail for 'flying' (glider).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4300,
    icon: '🦝',
    stock: 13,
    rarity: 'common',
    effects: [
        "Glide 10ft safely once/day",
        "Tail tangles: disadvantage on climb",
        "Raccoon fans: +1 Acrobatics",
        "Made by: Tail Fakes"
    ],
    vendor: 'wario_land',
    shippedBy: 'Tailwind Transport',
    levelRequirement: 4
},

  'bootleg_mario_thwomp_pounder': {
    id: 'bootleg_mario_thwomp_pounder',
    name: "Bootleg Mario Thwomp Pounder",
    description: "A pounder for 'thwomps' (stomp).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4700,
    icon: '🔨',
    stock: 10,
    rarity: 'common',
    effects: [
        "Pound ground: advantage on trip foes",
        "Pounder heavy: disadvantage on lift",
        "Thwomp fans: +1 Strength",
        "Made by: Pounder Copies"
    ],
    vendor: 'wario_land',
    shippedBy: 'Thwomp Thud',
    levelRequirement: 4
},

  'bootleg_peach_castle_goblet': {
    id: 'bootleg_peach_castle_goblet',
    name: "Bootleg Peach Castle Goblet",
    description: "A goblet for 'royal' drinks.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4800,
    icon: '🍷',
    stock: 10,
    rarity: 'common',
    effects: [
        "+1 to taste drinks (poison detect)",
        "Goblet chips: disadvantage on pour",
        "Royal: +1 Persuasion nobles",
        "Made by: Goblet Copies"
    ],
    vendor: 'wario_land',
    shippedBy: 'Castle Clink',
    levelRequirement: 4
},

  'bootleg_peach_crown': {
    id: 'bootleg_peach_crown',
    name: "Bootleg Princess Peach Crown",
    description: "A plastic crown with fake jewels, 'fit for royalty' (or cosplay).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4200,
    icon: '👑',
    stock: 14,
    rarity: 'common',
    effects: [
        "Wear for +1 to Charisma (Persuasion) with Toads or royalty fans",
        "Crown slips: disadvantage on Dexterity checks in combat",
        "Attracts Bowser minions: 10% chance of unwanted attention",
        "Made by: Knockoff Castle Crafts"
    ],
    vendor: 'wario_land',
    shippedBy: 'Royal Rip-Off',
    levelRequirement: 4
},

  'bootleg_peach_fan': {
    id: 'bootleg_peach_fan',
    name: "Bootleg Peach Fan",
    description: "A fan that 'cools' you (paper).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4300,
    icon: '🪭',
    stock: 13,
    rarity: 'common',
    effects: [
        "Fan heat: advantage on hot saves",
        "Paper tears: disadvantage on wind",
        "Peach pals: +1 Charisma",
        "Made by: Fan Fakes"
    ],
    vendor: 'wario_land',
    shippedBy: 'Cool Courier',
    levelRequirement: 4
},

  'bootleg_peach_heart_crystal': {
    id: 'bootleg_peach_heart_crystal',
    name: "Bootleg Peach Heart Crystal",
    description: "A crystal that 'heals' (placebo).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5400,
    icon: '💎',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Hold for +1 heal placebo (1d4 HP)",
        "Crystal dulls: disadvantage on shine",
        "Peach: +1 Charisma love",
        "Made by: Crystal Copies"
    ],
    vendor: 'wario_land',
    shippedBy: 'Heart Haul',
    levelRequirement: 5
},

  'bootleg_rosalina_star_wand': {
    id: 'bootleg_rosalina_star_wand',
    name: "Bootleg Rosalina Star Wand",
    description: "A sparkly wand that 'summons stars' (fireworks).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5700,
    icon: '⭐',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Wave to create fireworks: 10ft bright light and distraction (DC 12 Wisdom save or blinded for 1 round)",
        "Wand fizzles 30% of the time: no effect, but sparks fly (1 fire damage to you)",
        "Stars attract Lumas (or fireflies): minor scouts",
        "Made by: Galaxy Knockoffs"
    ],
    vendor: 'wario_land',
    shippedBy: 'Starry Sparkler Ship',
    levelRequirement: 5
},

  'bootleg_samus_power_suit_helmet': {
    id: 'bootleg_samus_power_suit_helmet',
    name: "Bootleg Samus Power Suit Helmet",
    description: "A helmet that 'powers up' your aim (with lights).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5800,
    icon: '⛑️',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "+1 to ranged attacks in low light (visor glow)",
        "Helmet heavy: disadvantage on Dex saves vs. trip",
        "Metroid fans geek out: advantage on tech talks",
        "Made by: Space Pirate Fakes"
    ],
    vendor: 'wario_land',
    shippedBy: 'Morph Ball Mail',
    levelRequirement: 5
},

  'bootleg_sonic_speed_shoes': {
    id: 'bootleg_sonic_speed_shoes',
    name: "Bootleg Sonic Speed Shoes",
    description: "Shoes that make you 'fast' (with springs).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5700,
    icon: '👟',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "+5 ft speed for 1 minute once per day",
        "Springs squeak: disadvantage on Stealth",
        "Sonic fans: +1 Acrobatics with speedsters",
        "Made by: Hedgehog Knockoffs"
    ],
    vendor: 'wario_land',
    shippedBy: 'Blue Blur',
    levelRequirement: 5
},

  'bootleg_toadette_pink_umbrella': {
    id: 'bootleg_toadette_pink_umbrella',
    name: "Bootleg Toadette Pink Umbrella",
    description: "An umbrella that 'shields' from rain (and sun).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4400,
    icon: '☔',
    stock: 11,
    rarity: 'common',
    effects: [
        "Shield from rain: advantage on wet terrain",
        "Umbrella pokes: 1 piercing damage as improvised",
        "Toadette fans: +1 Charisma with cute folk",
        "Made by: Umbrella Knockoffs"
    ],
    vendor: 'wario_land',
    shippedBy: 'Pink Parasol Post',
    levelRequirement: 4
},

  'bootleg_toadstool_powerup_candy': {
    id: 'bootleg_toadstool_powerup_candy',
    name: "Bootleg Toadstool Power-Up Candy",
    description: "Candy shaped like mushrooms that 'grows' you... slightly.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4700,
    icon: '🍬',
    stock: 11,
    rarity: 'common',
    effects: [
        "Eat for temporary +1 size (advantage on Strength, disadvantage on Dex) for 10 minutes",
        "Candy is sour: DC 10 CON save or nauseous (disadvantage on next check)",
        "Mushroom fans love it: +1 Charisma with fungi folk",
        "Made by: Candy Knockoffs"
    ],
    vendor: 'wario_land',
    shippedBy: 'Sweet Shroom Ship',
    levelRequirement: 4
},

  'bootleg_wario_bike_spokes': {
    id: 'bootleg_wario_bike_spokes',
    name: "Bootleg Wario Bike Spokes",
    description: "Spokes that 'spin' attacks.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5200,
    icon: '🚲',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Attach to wheels: +5 speed on bikes",
        "Spokes rust: disadvantage on wet rides",
        "Bike fans: +1 Acrobatics",
        "Made by: Spoke Scams"
    ],
    vendor: 'wario_land',
    shippedBy: 'Wheel Whirl',
    levelRequirement: 4
},

  'bootleg_yoshi_egg_thrower': {
    id: 'bootleg_yoshi_egg_thrower',
    name: "Bootleg Yoshi Egg Thrower",
    description: "A slingshot for 'eggs' (rocks).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4600,
    icon: '🥚',
    stock: 12,
    rarity: 'common',
    effects: [
        "Throw rock: 1d4 bludgeoning 30ft",
        "Slingshot snaps: disadvantage on next",
        "Yoshi: +1 ranged eggs",
        "Made by: Egg Ejectors"
    ],
    vendor: 'wario_land',
    shippedBy: 'Egg Eject',
    levelRequirement: 4
},

  'bootleg_yoshi_tongue_stick': {
    id: 'bootleg_yoshi_tongue_stick',
    name: "Bootleg Yoshi Tongue Stick",
    description: "A sticky stick that 'licks' up items.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5100,
    icon: '👅',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Grab small items 10ft (sticky)",
        "Stick dries: disadvantage on next grab",
        "Yoshi pals: +1 Animal Handling",
        "Made by: Tongue Toys"
    ],
    vendor: 'wario_land',
    shippedBy: 'Lick Limo',
    levelRequirement: 4
},

  'boshi_sunglasses': {
        id: 'boshi_sunglasses',
        name: "Cool Blue Sunglasses",
        description: "Worn by a famous Yoshi racer. Pure attitude.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 20000,
        icon: '🕶️',
        stock: 1,
        rarity: 'rare',
        effects: ["+1 Charisma", "Darkvision 10ft (because it's dark)"],
        vendor: 'valley_trading_post',
        shippedBy: 'Case',
        levelRequirement: 2
    },

  'bottomless_coin_sack': {
        id: 'bottomless_coin_sack',
        name: "Bottomless Coin Sack",
        description: "A coin sack connected to the Coin Heaven dimension. Infinite wealth, slowly.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 500000,
        icon: '💰',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Produces 100 Gold Coins every dawn",
            "Roll 1d100 on a 80 or above it breaks",
            "Wario will hunt you to the ends of the earth for this"
        ],
        vendor: 'wario_direct',
        shippedBy: 'Wario (He tries to steal it back immediately)',
        levelRequirement: 10
    },

  'bouncing_bubble_gum': {
    id: 'bouncing_bubble_gum',
    name: "Bouncing Bubble Gum",
    description: "A strip of gum that produces an extra-large, bouncy bubble when chewed.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 1500,
    icon: '🍬',
    stock: 25,
    rarity: 'uncommon',
    effects: [
        "Chew: create a bubble platform (10ft diameter) that holds Tiny objects for 1 minute",
        "Burst: deals 1d4 bludgeoning in 5ft radius",
        "Sticky residue remains"
    ],
    vendor: 'pawn_of_wonders',
    shippedBy: 'Waxed Paper',
    levelRequirement: 1
},

  'bounty_clearance': {
        id: 'bounty_clearance',
        name: "Bounty Clearance Service",
        description: "The Onyx Hand will adjust certain records. Witnesses relocated. Questions unanswered.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 240000,
        icon: '🧹',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Reduce bounty with one faction by 50%",
            "Remove one minor arrest warrant",
            "Clean one criminal record entry",
            "Costs almost your entire XP pool"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Meeting Arranged Discreetly',
        levelRequirement: 1,
        warning: "Illegal under most jurisdictions"
    },

  'bounty_hunting_contract': {
    id: 'bounty_hunting_contract',
    name: "Bounty Hunting Contract (Active)",
    description: "Official paperwork registering you as a licensed bounty hunter for a single high-value target.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 1200,
    icon: '📋',
    stock: 50,
    rarity: 'uncommon',
    effects: [
        "Legal authority to capture/interrogate target",
        "Guild protection",
        "10% commission split with Bounty Master",
        "Contract expires after 30 days or target capture"
    ],
    vendor: 'bounty_guild',
    shippedBy: 'Sealed Document',
    levelRequirement: 3
},

  'bowser_claw': {
    id: 'bowser_claw',
    name: "Bowser Claw Gauntlet",
    description: "A gauntlet mimicking Bowser's claws for slashing.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 35000,
    icon: '🦖',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Unarmed: 2d8 slashing + fire 1d6",
        "Grapple advantage",
        "Heats up in anger (+1 damage)"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Claw Crate',
    levelRequirement: 9
},

  'bowser_s_plans_with_wario': {
    id: 'bowser_s_plans_with_wario',
    name: "Bowser's War Manifesto (Wario-Annotated)",
    description: "Bowser's plans with Wario's notes in the margins ('Get paid here').",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5200,
    icon: '📖',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Read manifesto: advantage on checks vs. Bowser's strategies (you know his plans)",
        "Wario's notes are distracting: disadvantage on Concentration checks",
        "Manifesto is propaganda: advantage on Deception checks when quoting it",
        "Made by: Wario Land Publishing"
    ],
    vendor: 'wario_land',
    shippedBy: 'Suspicious Package',
    levelRequirement: 5
},

  'box_of_silent_screams': {
    id: 'box_of_silent_screams',
    name: "Box of Silent Screams",
    description: "A wooden box that contains the screams of those who died in silence.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 450000,
    icon: '📦',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Open: all within 20ft are deafened for 1 minute",
        "Creatures who hear it must make a DC 18 Wis save — failure: they scream silently forever",
        "The box grows heavier with each scream it holds"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Iron Lockbox',
    levelRequirement: 11
},

  'bridge_builder_brick': {
    id: 'bridge_builder_brick',
    name: "Bridge-Builder Brick",
    description: "A warm brick that murmurs blueprints. Lay it down, and a sturdy bridge follows.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 14000,
    icon: '🧱',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Place on gap: conjures a 10ft-wide stone bridge lasting 24 hours",
        "Bridge resists weather and normal attacks (AC 15, HP 50)",
        "Using two bricks side-by-side widens the span"
    ],
    vendor: 'bricklane',
    shippedBy: 'Crate of Mortar',
    levelRequirement: 4
},

  'broken_glass': {
        id: 'broken_glass',
        name: "Shard of Glass",
        description: "Sharp. Dangerous. Not a weapon, just trash.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 100,
        icon: '🧊',
        stock: 500,
        rarity: 'junk',
        effects: ["1 damage if you hold it too tight"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Careless Courier',
        levelRequirement: 1
    },

  'broken_watch': {
        id: 'broken_watch',
        name: "Broken Pocket Watch",
        description: "Stopped working years ago. Right twice a day.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '⏱️',
        stock: 1,
        rarity: 'common',
        effects: ["No magical effect", "Looks kind of dignified"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },

  'broque_monsieur_collection': {
        id: 'broque_monsieur_collection',
        name: "Block Collection",
        description: "A set of sentient blocks. They can form walls, bridges, or prisons on command.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 290000,
        icon: '🟨',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Action: Summon a 20ft x 20ft stone fortress",
            "Action: Create a bridge up to 60ft",
            "The blocks speak French and judge your fashion"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Block',
        levelRequirement: 8
    },

  'brown_paint_of_earthly_camouflage': {
    id: 'brown_paint_of_earthly_camouflage',
    name: "Brown Paint of Earthly Camouflage",
    description: "Blend with dirt, rocks, and disappointment.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11500,
    icon: '🎨',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Paint yourself brown: advantage on Stealth in natural terrain",
        "You feel very grounded: disadvantage on saves vs. psychic damage",
        "Children try to plant you",
        "Made by: Earth Elemental Paint Co."
    ],
    vendor: 'dwarf_realms_paint',
    shippedBy: 'Mud Pack',
    levelRequirement: 5
},

  'build_traps_that_lead_to': {
    id: 'build_traps_that_lead_to',
    name: "Wario's Bottomless Pitfall Trap Kit (Scam Trap!)",
    description: "Build traps that lead to 'bottomless' pits – Wario's gold-making scheme!",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16000,
    icon: '🕳️',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Set trap: DC 13 Perception to spot, falls into 10ft pit (1d6 damage)",
        "Kit reusable 3 times: 'Bottomless' until it fills with dirt",
        "Scam: Pit is shallow – victims climb out easily (embarrassing, no real capture)",
        "Made by: Wario's Trap Emporium"
    ],
    vendor: 'wario_land',
    shippedBy: 'Pitfall Parcel',
    levelRequirement: 6
},

  'bulk_up_like_wario_side': {
    id: 'bulk_up_like_wario_side',
    name: "Wario's WAAAAH! Fitness Shake Mix",
    description: "Bulk up like Wario! (Side effects may include aggressive flatulence).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14500,
    icon: '🥤',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Mix with water to create a shake: grants +2 to Strength checks for 1 hour",
        "During the hour, you must make a DC 10 Constitution save every 10 minutes or emit a 10ft gas cloud (poisoned condition for 1 round to creatures in area)",
        "Shake is 80% garlic powder: vampires avoid you (advantage on Charisma checks to repel them)",
        "Comes with a 'free' shaker cup that leaks (disadvantage on Sleight of Hand)",
        "Made by: Wario Land Fitness (No Refunds)"
    ],
    vendor: 'wario_land',
    shippedBy: 'Shake Delivery',
    levelRequirement: 5
},

  'bullet_bill_helmet': {
    id: 'bullet_bill_helmet',
    name: "Bullet Bill Helmet",
    description: "A rocket-shaped helmet that launches you forward. Landing is your problem.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 19000,
    icon: '🚀',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Once per short rest: Dash 120ft in straight line",
        "Enemies in path take 2d6 Bludgeoning (DEX save half)",
        "You take 1d6 damage from impact",
        "Smoke trail lasts 1 minute"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Rocket Sled',
    levelRequirement: 6
},

  'bullet_bill_launcher': {
    id: 'bullet_bill_launcher',
    name: "Bullet Bill Blaster",
    description: "A cannon that fires explosive Bills. Aim carefully, or regret it.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '🚀',
    stock: 1,
    rarity: 'rare',
    effects: [
        "Action: Fire for 4d6 Fire damage (line 60ft)",
        "DEX save or 2d6 extra on fail",
        "3 charges, recharges at dawn",
        "Overheats in rain (1d4 Fire to user)"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Armored Wagon',
    levelRequirement: 6
},

  'bullet_bill_mask': {
    id: 'bullet_bill_mask',
    name: "Bullet Bill Mask",
    description: "Turns you into a living Bullet Bill for charging attacks.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 12000,
    icon: '🚀',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Single Use: Dash 60ft in a line, 3d6 piercing damage to all in path",
        "Explode on impact (2d6 fire in 5ft radius)",
        "User takes half explosion damage"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Explosive Container',
    levelRequirement: 4
},

  'bumper_badge': {
        id: 'bumper_badge',
        name: "Bumper Badge",
        description: "Bounce enemies away when they touch you.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 40000,
        icon: '🛑',
        stock: 3,
        rarity: 'uncommon',
        effects: ["Enemies that hit you with melee are pushed back 5ft"],
        vendor: 'valley_trading_post',
        shippedBy: 'Standard Courier',
        levelRequirement: 3
    },

  'burnt_pan': {
        id: 'burnt_pan',
        name: "Burnt Frying Pan",
        description: "Wario tried to cook. It didn't go well.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1500,
        icon: '🍳',
        stock: 5,
        rarity: 'junk',
        effects: ["1d4 bludgeoning", "Smells like charcoal"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },

  'buzzy_beetle_shell': {
    id: 'buzzy_beetle_shell',
    name: "Buzzy Beetle Shell",
    description: "A shell resistant to fire and stomps.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8000,
    icon: '🐞',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Shield: +2 AC, fire resistance",
        "Can curl up to avoid damage (once per short rest)",
        "Heavy (reduces speed 5ft)"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Shell Case',
    levelRequirement: 3
},

  'cackleberry': {
    id: 'cackleberry',
    name: "Cackleberry",
    description: "A small egg that constantly giggles when held. Delicious if you can stand the laughter.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 400,
    icon: '🥚',
    stock: 30,
    rarity: 'common',
    effects: [
        "Eat: +2 to Stealth for 10 minutes (giggly cover)",
        "50% chance to laugh uncontrollably and reveal position",
        "Favorite treat of trickster sprites"
    ],
    vendor: 'twine_shop',
    shippedBy: 'Wicker Basket',
    levelRequirement: 1
},

  'cage_of_the_unborn': {
    id: 'cage_of_the_unborn',
    name: "Cage of the Unborn",
    description: "A tiny metal cage that holds the soul of a child who was never born.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 500000,
    icon: '🪝',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Place a soul inside: you can resurrect them — but they are born as a shadow",
        "They become your child — but age 10x faster",
        "If released, they become a vengeful spirit that hunts you"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Silver Crib',
    levelRequirement: 12
},

  'cake_mix': {
        id: 'cake_mix',
        name: "Cake Mix",
        description: "Essential for baking. Or eating raw if you have no shame.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 2000,
        icon: '🥡',
        stock: 200,
        rarity: 'common',
        effects: ["Restores 1 HP", "Can be cooked by Zess T."],
        vendor: 'toad_town_market',
        shippedBy: 'Paper Bag',
        levelRequirement: 1
    },

  'camera_poltergust': {
        id: 'camera_poltergust',
        name: "Vintage Camera",
        description: "Takes sepia photos. Flash is blindingly bright.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 20000,
        icon: '📷',
        stock: 2,
        rarity: 'uncommon',
        effects: ["Can blind target 5ft away (CON save 12)", "Records memories"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Fragile Box',
        levelRequirement: 2
    },

  'candle_of_the_first_fire': {
    id: 'candle_of_the_first_fire',
    name: "Candle of the First Fire",
    description: "The first flame ever lit — it never burns out, and never warms.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 420000,
    icon: '🕯️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Light: creates a 30ft radius of pure, cold fire — burns objects, not flesh",
        "Can ignite magical items to reveal their properties",
        "If extinguished, the world forgets how to make fire"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Ashen Holder',
    levelRequirement: 12
},

  'candle_of_the_last_breath': {
    id: 'candle_of_the_last_breath',
    name: "Candle of the Last Breath",
    description: "A black candle that burns for exactly 1 minute — and brings back the dead for that time.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 300000,
    icon: '🕯️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Light: resurrects one recently dead creature (within 1 hour)",
        "They return with 1 HP and full memories",
        "They speak one truth before dissolving into smoke",
        "You lose 1d6 years of life"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Ashen Box',
    levelRequirement: 15
},

  'cannon_box': {
    id: 'cannon_box',
    name: "Cannon Box",
    description: "A wearable box that shoots cannonballs.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '📦',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Wear: Fire cannonball (2d10 bludgeoning, range 120ft)",
        "3 charges per short rest",
        "Reduces speed by 10ft while worn"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Heavy Crate',
    levelRequirement: 5
},

  'cape_feather': {
    id: 'cape_feather',
    name: "Cape Feather",
    description: "A golden feather that grants brief flight. Smells like nostalgia and freedom.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 7000,
    icon: '🪶',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Single Use: Fly 40ft for 1 minute",
        "Can perform a spin attack (1d6 Slashing)",
        "Feather dissolves into sparkles",
        "You hear cape music in your head"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Feather Pillow',
    levelRequirement: 1
},

  'cappy_replica': {
        id: 'cappy_replica',
        name: "Spirit Cap",
        description: "A hat inhabited by a bonneter spirit. Allows possession.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 380000,
        icon: '🎩',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Action: Throw onto a creature (CR 3 or lower)",
            "Target must make WIS Save DC 16 or be Dominated",
            "You control their body for 1 minute",
            "Your physical body vanishes into the hat"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Hat Box',
        levelRequirement: 9
    },

  'captain_toad_backpack': {
        id: 'captain_toad_backpack',
        name: "Captain's Heavy Backpack",
        description: "Looks small, holds an infinite amount of gear. Prevents jumping.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 210000,
        icon: '🎒',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Infinite Carrying Capacity (Weight is ignored)",
            "You cannot Jump",
            "You cannot Fly",
            "Your speed is reduced by 5ft"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Crane',
        levelRequirement: 1
    },

  'captain_toad_lamp': {
    id: 'captain_toad_lamp',
    name: "Captain Toad's Lamp",
    description: "A lamp that reveals hidden treasures.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 8000,
    icon: '🏮',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Shine: Detect hidden items within 30ft",
        "Once per day: Reveal secret door",
        "Attracts minor monsters"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Lamp Crate',
    levelRequirement: 3
},

  'cardboard_box': {
        id: 'cardboard_box',
        name: "Suspicious Box",
        description: "Just a box. Definitely not a person inside.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5000,
        icon: '📦',
        stock: 20,
        rarity: 'common',
        effects: ["Action: Hide inside. +5 Stealth if you don't move.", "Breaks if you take damage"],
        vendor: 'rogueport_black_market',
        shippedBy: 'It is the shipping',
        levelRequirement: 1
    },

  'cartography_commission': {
    id: 'cartography_commission',
    name: "Cartography Commission (Custom Map)",
    description: "Hire a master cartographer to create a detailed, magically accurate map of any area.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 7000,
    icon: '🗺️',
    stock: 12,
    rarity: 'rare',
    effects: [
        "Custom map of any region up to 50 square miles",
        "Includes hidden locations, ley lines, and hazard zones",
        "Map glows if nearby danger approaches (magical upgrade)"
    ],
    vendor: 'scholar_society',
    shippedBy: 'Commissioned Work',
    levelRequirement: 4
},

  'carved_from_the_shattered_remains': {
        id: 'carved_from_the_shattered_remains',
        name: "Void Touched Amulet",
        description: "Carved from the shattered remains of a forgotten world, this amulet pulses with the heartbeat of the void. It grants the wearer temporary access to forbidden knowledge—but at the cost of their sanity. Found in the ruins of the Minus World, it is said to be the only thing that remembers what the world once was.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🌌',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants 1d4 bonus to perception checks against hidden dangers",
        "Grants temporary access to the Minus World’s memories for 1 round",
        "Each use causes 1 point of sanity loss (can be recovered by sleeping)",
        "Wearing it causes hallucinations of forgotten places for 2 rounds",
        "May cause the wearer to speak in the language of the Minus World",
        "Cannot be used if the wearer has been in the Minus World before"
        ],
        vendor: 'rogueport',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 10
    },

  'castle_deed': {
        id: 'castle_deed',
        name: "Deed to Abandoned Fortress",
        description: "Ownership papers for a fortress in the Dark Land. Needs renovation.",
        category: SHOP_CATEGORIES.FACTION,
        price: 550000,
        icon: '🏰',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants a permanent Stronghold",
            "Can garrison 100 troops",
            "Lair Actions available when inside",
            "Taxes generate income"
        ],
        vendor: 'wario_direct',
        shippedBy: 'Lawyer',
        levelRequirement: 100,
        factionBonus: { defense: 50, economy: 20 }
    },

  'category_shop_categories_material_price': {
        id: 'category_shop_categories_material_price',
        name: "Diamond City Key",
        description: "",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 7500,
        icon: '💎',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Opens hidden vaults in Diamond City",
        "Grants 10% chance to find rare loot when used",
        "Triggers viral infection if used in a public space (enemy vision holders gain temporary power)",
        "Requires a vision holder to activate",
        "Can be used as a keyring item",
        "Created by: Cosmic Jesters in collaboration with the Koopa Navy"
        ],
        vendor: 'teyvat',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 8
    },

  'category_shop_categories_material_price_1': {
        id: 'category_shop_categories_material_price_1',
        name: "Fire Flower Core",
        description: "",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 3000,
        icon: '🌶',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Infuses weapons with explosive mutation potential",
        "Grants 20% chance to trigger a mini-explosion on hit",
        "Reduces cooldown of fire based abilities by 15%",
        "Consumes 3 charges per use",
        "Can be fused with other materials to create new hybrid weapons",
        "Found in jungle regions near Kremling Krew outposts"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Pianta Chuck Express',
        levelRequirement: 7
    },

  'celestial_compass': {
    id: 'celestial_compass',
    name: "Celestial Compass (Navigation)",
    description: "Points to divine realms and detects holy sites.",
    category: SHOP_CATEGORIES.faction,
    price: 610000,
    icon: '🧭',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Guides to nearest celestial plane",
        "+10 to navigation in heavens",
        "Made by: Angelic Scouts"
    ],
    vendor: 'divine_outpost',
    shippedBy: 'Holy Light',
    levelRequirement: 16,
    factionBonus: { divine: 50 }
},

  'celestial_harvester_drone': {
    id: 'celestial_harvester_drone',
    name: "Celestial Harvester Drone (Automated)",
    description: "A swarm of nano-drones that harvest stellar energy from nearby stars for personal use.",
    category: SHOP_CATEGORIES.premium,
    price: 450000,
    icon: '⭐',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Collects 1000 energy units per solar cycle",
        "Deployable in orbit, returns via hyperspace",
        "Made by: Celestial Forge"
    ],
    vendor: 'starforge_outpost',
    shippedBy: 'Orbital Drop',
    levelRequirement: 18
},

  'celestial_sunforge_blueprints': {
    id: 'celestial_sunforge_blueprints',
    name: "Celestial Sunforge Blueprints",
    description: "Divine schematics for crafting artifacts of pure sunlight.",
    category: SHOP_CATEGORIES.premium,
    price: 465000,
    icon: '📜',
    stock: 3,
    rarity: 'legendary',
    effects: [
        "Learn to craft Solar Radiance weapons and armor",
        "Requires 20,000gp in celestial materials to activate",
        "Made by: Sunforge Archons"
    ],
    vendor: 'divine_archive',
    shippedBy: 'Solar Flare Transmission',
    levelRequirement: 15
},

  'centaur_khanate_bow': {
    id: 'centaur_khanate_bow',
    name: "Centaur Khanate Composite Bow",
    description: "A masterfully crafted longbow, designed to be used from horseback (or centaur-back). It's powerful and responsive.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16000,
    icon: '🏹',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Composite Longbow (+2 Strength modifier)",
        "Advantage on attacks made while mounted",
        "Arrows fired from this bow fly 50% further",
        "Requires attunement"
    ],
    vendor: 'Centaur Khanate',
    shippedBy: 'Leather Quiver',
    levelRequirement: 5
},

  'centaur_khanate_horse_shoe_enchant_service': {
    id: 'centaur_khanate_horse_shoe_enchant_service',
    name: "Centaur Khanate Horse Shoe Enchant Service",
    description: "Speed boost for mounts.",
    category: SHOP_CATEGORIES.services,
    price: 13500,
    icon: '🐎',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Mount speed +10ft for 1 week",
        "Advantage on mounted charges",
        "Shoes clop loudly",
        "Made by: Khanate Farriers"
    ],
    vendor: 'centaur_khanate_steppes',
    shippedBy: 'Hoof Delivery',
    levelRequirement: 5
},

  'centaur_khanate_steppe_coat': {
    id: 'centaur_khanate_steppe_coat',
    name: "Centaur Khanate Steppe Coat",
    description: "Wool coat for nomadic riders.",
    category: SHOP_CATEGORIES.premium,
    price: 16000,
    icon: '🧥',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "+1 to mounted speed endurance",
        "Coat resists wind chill",
        "Heavy for non-centaurs",
        "Made by: Khanate Herders"
    ],
    vendor: 'centaur_khanate_camp',
    shippedBy: 'Horsehair Hide',
    levelRequirement: 5
},

  'centaur_khanate_steppe_grill': {
    id: 'centaur_khanate_steppe_grill',
    name: "Centaur Khanate Steppe Grill",
    description: "Portable grill for yogurt drinks on the move.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7000,
    icon: '🥛',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Grills while riding; advantage on mounted cooking",
        "Wind-resistant; quick heat",
        "Charms milk slightly",
        "Made by: Khanate Metalworkers"
    ],
    vendor: 'centaur_khanate_steppes',
    shippedBy: 'Steppe Smoke Shipment',
    levelRequirement: 5
},

  'centaur_khanate_steppe_yogurt_drink_recipe': {
    id: 'centaur_khanate_steppe_yogurt_drink_recipe',
    name: "Recipe: Centaur Khanate Steppe Yogurt Drink",
    description: "Fermented drink for endless rides.",
    category: SHOP_CATEGORIES.services,
    price: 6500,
    icon: '🥛',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Ferment yogurt (overnight); drink to gain mounted speed +10 ft for 4 hours",
        "Requires: Mare's milk; nomadic staple",
        "Khanate endurance",
        "Made by: Steppe Herders"
    ],
    vendor: 'centaur_khanate_steppes',
    shippedBy: 'Yogurt Yurt Yield',
    levelRequirement: 5
},

  'chain_chomp_chain': {
    id: 'chain_chomp_chain',
    name: "Chain Chomp's Leash",
    description: "A heavy iron chain that once held a beast. Still twitches with aggression.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 22000,
    icon: '⛓️',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Whip attack: 2d6 Slashing, Reach 15ft",
        "On crit: Target restrained for 1 round",
        "Chain rattles when enemies approach",
        "You feel the urge to bark at mailmen"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Iron Chest',
    levelRequirement: 6
},

  'chain_chomp_leash': {
    id: 'chain_chomp_leash',
    name: "Chain Chomp Leash",
    description: "A sturdy leash to control a Chain Chomp as a pet or weapon.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 22000,
    icon: '🔗',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Summon Chain Chomp (CR 2, bite 2d6 piercing)",
        "Chomp attacks on your command",
        "Chain breaks on critical failure"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Reinforced Chain',
    levelRequirement: 6
},

  'changeling_hive_camo_jacket': {
    id: 'changeling_hive_camo_jacket',
    name: "Changeling Hive Camo Jacket",
    description: "Camouflage that changes patterns randomly.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18500,
    icon: '🧥',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Advantage on Stealth in one random terrain type (changes hourly)",
        "You have disadvantage on Stealth in the other terrains",
        "Jacket occasionally changes color during important conversations (distraction)",
        "Made by: Changeling Hive Weavers"
    ],
    vendor: 'changeling_hive',
    shippedBy: 'Metamorphic Delivery',
    levelRequirement: 7
},

  'changeling_hive_chitin_armor': {
    id: 'changeling_hive_chitin_armor',
    name: "Changeling Hive Chitin Armor",
    description: "Light armor made from the shed chitin of a changeling. It shifts and adapts to your form.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 19000,
    icon: '🐛',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Light Armor: AC 13 + DEX modifier",
        "Advantage on checks made to impersonate a humanoid",
        "Once per long rest: as a bonus action, change your appearance as per 'Alter Self'"
    ],
    vendor: 'Changeling Hive',
    shippedBy: 'Disguised Parcel',
    levelRequirement: 5
},

  'changeling_hive_disguise_kit': {
    id: 'changeling_hive_disguise_kit',
    name: "Changeling Hive Disguise Kit",
    description: "A kit containing makeup and tools to mimic a specific humanoid's appearance.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9500,
    icon: '🎭',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Grants advantage on Deception checks to appear as someone else",
        "Kit contains enough material for 3 uses",
        "Made by: Changeling Hive"
    ],
    vendor: 'changeling_hive_exchange',
    shippedBy: 'Makeup Case',
    levelRequirement: 4
},

  'changeling_hive_disguise_kit_premium': {
    id: 'changeling_hive_disguise_kit_premium',
    name: "Changeling Hive Disguise Kit (Premium)",
    description: "Shapeshifting makeup for temporary personas.",
    category: SHOP_CATEGORIES.premium,
    price: 18000,
    icon: '🎭',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Change appearance for 1 hour (Disguise check advantage)",
        "3 uses per kit; fools casual observers",
        "Itches after 30 minutes (disadvantage on Concentration)",
        "Made by: Hive Mimics"
    ],
    vendor: 'changeling_hive_lair',
    shippedBy: 'Shapeshift Surprise',
    levelRequirement: 6
},

  'changeling_hive_identity_rental': {
    id: 'changeling_hive_identity_rental',
    name: "Changeling Hive Identity Rental",
    description: "Borrow a changeling's face and voice for a day.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 19500,
    icon: '🎭',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Disguise Self at will for 24 hours, but you look like a specific changeling named 'Steve'",
        "Steve's mom might call you via telepathy to check in",
        "Advantage on Deception, disadvantage on Performance (Steve can't sing)",
        "Made by: Changeling Hive Identity Dept."
    ],
    vendor: 'changeling_hive',
    shippedBy: 'Metamorphic Delivery',
    levelRequirement: 6
},

  'changeling_hive_love_jam_recipe': {
    id: 'changeling_hive_love_jam_recipe',
    name: "Recipe: Changeling Hive Love Jam",
    description: "Sweet jam infused with emotional essence for empathy.",
    category: SHOP_CATEGORIES.services,
    price: 7500,
    icon: '🍓',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Simmer fruits with 'love' (30 min); spread on bread to gain advantage on Insight for emotions (2 hours)",
        "Requires: Berries; non-changelings feel tingly",
        "Boosts bonds – +1 to social with loved ones",
        "Made by: Hive Foragers"
    ],
    vendor: 'changeling_hive_nest',
    shippedBy: 'Sticky Sweet Scroll',
    levelRequirement: 5
},

  'changeling_hive_mimic_apron': {
    id: 'changeling_hive_mimic_apron',
    name: "Changeling Hive Mimic Apron",
    description: "An apron that changes to look clean.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12500,
    icon: '🎽',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Always appears clean: advantage on Charisma checks while cooking",
        "Actually filthy: disadvantage on saves vs. disease (you're cooking in germs)",
        "Apron changes color to match your outfit (cosmetic, but fashionable)",
        "Made by: Changeling Hive Textiles"
    ],
    vendor: 'changeling_hive',
    shippedBy: 'Metamorphic Delivery',
    levelRequirement: 5
},

  'changeling_hive_mimic_potholder': {
    id: 'changeling_hive_mimic_potholder',
    name: "Changeling Hive Mimic Potholder",
    description: "A potholder that looks like your hand.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7500,
    icon: '🧤',
    stock: 8,
    rarity: 'common',
    effects: [
        "Protects from heat: immunity to fire damage from cooking accidents",
        "Looks like your hand: you forget you're holding it (disadvantage on Sleight of Hand)",
        "Potholder changes appearance: sometimes you grab the hot pan (1 fire damage)",
        "Made by: Changeling Hive Textiles"
    ],
    vendor: 'changeling_hive',
    shippedBy: 'Metamorphic Delivery',
    levelRequirement: 5
},

  'changeling_hive_recipe_identity_crisis_casserole': {
    id: 'changeling_hive_recipe_identity_crisis_casserole',
    name: "Recipe: Changeling Hive Identity Crisis Casserole",
    description: "A casserole that changes flavor mid-bite.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 12500,
    icon: '📜',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Grants advantage on Deception checks for 1 hour (you feel deceptive)",
        "You forget your favorite food (disadvantage on checks involving memory)",
        "Casserole changes flavor 1d6 times while eating (confusing but delicious)",
        "Made by: Changeling Hive Cooks"
    ],
    vendor: 'changeling_hive',
    shippedBy: 'Metamorphic Delivery',
    levelRequirement: 5
},

  'changeling_hive_shape_shifter_sifter': {
    id: 'changeling_hive_shape_shifter_sifter',
    name: "Changeling Hive Shape-Shifter Sifter",
    description: "Sifter that 'adapts' to ingredient sizes for jams.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7500,
    icon: '🍓',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Sifts varying sizes; advantage on prep for emotional recipes",
        "Changes mesh for love essences",
        "Shifts form randomly (fun or frustrating)",
        "Made by: Hive Toolmakers"
    ],
    vendor: 'changeling_hive_nest',
    shippedBy: 'Adaptive Alloy',
    levelRequirement: 5
},

  'changeling_hive_shapeshift_scarf': {
    id: 'changeling_hive_shapeshift_scarf',
    name: "Changeling Hive Shapeshift Scarf",
    description: "Scarf that aids in minor disguises.",
    category: SHOP_CATEGORIES.premium,
    price: 18500,
    icon: '🧣',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Advantage on Disguise checks for facial alterations",
        "Scarf changes color to match surroundings",
        "Itches if worn too long (disadvantage on Concentration)",
        "Made by: Hive Silkers"
    ],
    vendor: 'changeling_hive_nest',
    shippedBy: 'Chameleon Wrap',
    levelRequirement: 7
},

  'changeling_molt_cloak': {
        id: 'changeling_molt_cloak',
        name: "Changeling Molt Cloak",
        description: "A cloak made from shed skin, allowing the wearer to perfectly mimic the texture and scent of another.",
        category: SHOP_CATEGORIES.equipment,
        price: 55000,
        icon: '🦎',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Allows perfect mimicry of a single humanoid's scent, texture, and superficial appearance",
        "Requires 1 hour to attune to a new target",
            "Made by: Changeling Hive"
        ],
        vendor: 'changeling_hive_exchange',
        shippedBy: 'Live Specimen',
        levelRequirement: 8
    },

  'chaos_dwarfs_daemon_engine_tune_service': {
    id: 'chaos_dwarfs_daemon_engine_tune_service',
    name: "Chaos Dwarfs Daemon Engine Tune Service",
    description: "Boost a construct's power slightly.",
    category: SHOP_CATEGORIES.services,
    price: 16000,
    icon: '⚙️',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Construct +1 attack/damage for 1 day",
        "Risk of chaos mutation (roll d6: minor quirk)",
        "Engine purrs ominously",
        "Made by: Chaos Mechanics"
    ],
    vendor: 'chaos_dwarfs_forge',
    shippedBy: 'Hellbolt Delivery',
    levelRequirement: 7
},

  'chaos_dwarfs_hell_bellows': {
    id: 'chaos_dwarfs_hell_bellows',
    name: "Chaos Dwarfs Hell Bellows",
    description: "Bellows fueled by chaos for roasts.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7500,
    icon: '🥩',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Fans chaotic flames; advantage on unpredictable recipes",
        "Random heat (boon or bane)",
        "Bellows warp slightly",
        "Made by: Chaos Forges"
    ],
    vendor: 'chaos_dwarfs_forge',
    shippedBy: 'Hell Heat Haul',
    levelRequirement: 5
},

  'chaos_dwarfs_hellfire_roast_recipe': {
    id: 'chaos_dwarfs_hellfire_roast_recipe',
    name: "Recipe: Chaos Dwarfs Hellfire Roast",
    description: "Spicy roast cooked over infernal flames for chaotic vigor.",
    category: SHOP_CATEGORIES.services,
    price: 8500,
    icon: '🥩',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Teaches recipe: Roast over heat (1 hour); eat to gain random mutation boon (+1 random stat for 2 hours) or bane",
        "Requires: Meat and chaos spices; unpredictable",
        "Chaos gods approve",
        "Made by: Hellforge Cooks"
    ],
    vendor: 'chaos_dwarfs_forge',
    shippedBy: 'Fiery Flesh Folio',
    levelRequirement: 6
},

  'chaos_dwarfs_hellforged_leather': {
    id: 'chaos_dwarfs_hellforged_leather',
    name: "Chaos Dwarfs Hellforged Leather",
    description: "Tough leather from infernal beasts.",
    category: SHOP_CATEGORIES.premium,
    price: 20000,
    icon: '🧥',
    stock: 2,
    rarity: 'rare',
    effects: [
        "+1 AC against fire or chaos",
        "Leather resists tearing",
        "Emits faint heat (uncomfortable in summer)",
        "Made by: Chaos Forgers"
    ],
    vendor: 'chaos_dwarfs_anvil',
    shippedBy: 'Branded Hide',
    levelRequirement: 7
},

  'chaos_heart': {
        id: 'chaos_heart',
        name: "The Chaos Heart",
        description: "A dark artifact capable of consuming all worlds. The Void is calling.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 1500000,
        icon: '🖤',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Grants invulnerability to all attacks unless pierced by Pure Heart",
            "Can open Void rifts (banish enemies to non-existence)",
            "You slowly lose your soul to the Void",
            "The universe begins to decay while you hold this"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Dimensional Rift',
        levelRequirement: 200,
        warning: "WILL END THE CAMPAIGN IF USED IMPROPERLY"
    },

  'chaos_heart_shard': {
        id: 'chaos_heart_shard',
        name: "Shard of the Chaos Heart",
        description: "A fragment of dimensional instability. The Cosmic Jesters' holiest relic.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 750000,
        icon: '💜',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "On critical hit: Reality warps (roll on Wild Magic table)",
            "Advantage on Chaos-based magic",
            "Disadvantage on all saves vs. Order-based effects",
            "Dimensions occasionally bleed into your vicinity"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'DIMENSIONAL INSTABILITY - PICKUP ONLY',
        levelRequirement: 12,
        warning: "Possession punishable by banishment to the Void Between Worlds"
    },

  'cheep_cheep_aquarium': {
    id: 'cheep_cheep_aquarium',
    name: "Portable Cheep-Cheep Tank",
    description: "A bubble containing a living fish. Shoots water jets on command.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11000,
    icon: '🐟',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Action: 15ft water jet, 2d6 Bludgeoning",
        "Can breathe underwater while holding tank",
        "Cheep-Cheep sings sea shanties",
        "Tank cracks if dropped (fish becomes hostile)"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Water Bubble',
    levelRequirement: 3
},

  'cheep_cheep_life_preserver': {
    id: 'cheep_cheep_life_preserver',
    name: "Cheep Cheep Life Preserver",
    description: "Floats you safely... while screaming underwater opera.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15000,
    icon: '🐠',
    stock: 4,
    rarity: 'rare',
    effects: [
        "You cannot drown",
        "Swim Speed 30ft",
        "While submerged, emits loud operatic singing (no stealth)",
        "Attracts aquatic predators (roll WIS save DC 12 or summon 1d4 hostile fish)"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Floating Crate',
    levelRequirement: 3
},

  'cheep_cheep_net': {
    id: 'cheep_cheep_net',
    name: "Cheep Cheep Net",
    description: "A net that catches flying fish for food or bombs.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6000,
    icon: '🕸️',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Catch aquatic creatures (1d4 fish per use)",
        "Can entangle flying enemies (restrained, STR save DC 13)",
        "Durable, 5 uses before repair"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Net Roll',
    levelRequirement: 2
},

  'chet_rippo_service': {
        id: 'chet_rippo_service',
        name: "Stat Reallocation",
        description: "Chet Rippo will rearrange your stats. It might hurt.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 100000,
        icon: '🧙‍♂️',
        stock: 1,
        rarity: 'rare',
        effects: ["Move 2 points from one Stat to another permanently", "Cannot exceed 20"],
        vendor: 'rogueport_black_market',
        shippedBy: 'In Person',
        levelRequirement: 5
    },

  'chomp_call_whistle': {
    id: 'chomp_call_whistle',
    name: "Chain Chomp Call",
    description: "A rusty whistle that summons a wild Chain Chomp. Hope you're friends.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 15000,
    icon: '📯',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Summons CR 2 Chain Chomp (1 minute)",
        "50% chance it attacks you instead",
        "Chomp leaves after 1 minute or when bored",
        "Dogs hate the sound"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Chain Wrap',
    levelRequirement: 5
},

  'chrono_freeze_orb': {
    id: 'chrono_freeze_orb',
    name: "Chrono Freeze Orb (Temporal)",
    description: "Freezes time in a small area for tactical advantage.",
    category: SHOP_CATEGORIES.forbidden,
    price: 940000,
    icon: '⏸️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Freezes 20 ft radius for 10 seconds",
        "1 use per week",
        "Made by: Time Stoppers"
    ],
    vendor: 'temporal_vault',
    shippedBy: 'Frozen Moment',
    levelRequirement: 20
},

  'chrono_time_crystal': {
    id: 'chrono_time_crystal',
    name: "Chrono Time Crystal (Temporal)",
    description: "A crystal that allows brief glimpses into possible futures.",
    category: SHOP_CATEGORIES.forbidden,
    price: 890000,
    icon: '⏳',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Reveals 3 possible outcomes per use",
        "Risk of temporal paradox",
        "Made by: Time Weavers"
    ],
    vendor: 'eternal_chronicle',
    shippedBy: 'Time Slip',
    levelRequirement: 19
},

  'chronomancers_paradox_gem': {
    id: 'chronomancers_paradox_gem',
    name: "Chronomancer's Paradox Gem",
    description: "A gem containing 6 seconds of frozen time from a collapsed timeline.",
    category: SHOP_CATEGORIES.forbidden,
    price: 925000,
    icon: '⏳',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Allows user to rewind time 6 seconds once per week",
        "Causes 1d10 paradox damage to user on activation",
        "Made by: The Last Timewalker"
    ],
    vendor: 'temporal_vault',
    shippedBy: 'Stasis Field',
    levelRequirement: 18
},

  'chuckola_cola': {
        id: 'chuckola_cola',
        name: "Chuckola Cola",
        description: "A vintage soda from the Beanbean Kingdom. Aged in barrels. Jokes aside, it's strong.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 35000,
        icon: '🍷',
        stock: 5,
        rarity: 'rare',
        effects: ["Action: Restore 2 spell slots (up to lvl 3)", "Bonus Action: Tell a bad joke"],
        vendor: 'shamans_hut',
        shippedBy: 'Glass Bottle Service',
        levelRequirement: 4
    },

  'civilization_founding_charter': {
    id: 'civilization_founding_charter',
    name: "Civilization Founding Charter",
    description: "Legal documentation to establish a new city, town, or settlement with full sovereign rights.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 300000,
    icon: '🏛️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Found 1 settlement with guaranteed legal recognition",
        "Full governing authority; can establish laws and taxation",
        "Protected by international law (cannot be easily destroyed)",
        "Must recruit citizens and maintain infrastructure"
    ],
    vendor: 'merchant_guild',
    shippedBy: 'Official Charter',
    levelRequirement: 12
},

  'cloning_chamber': {
    id: 'cloning_chamber',
    name: "Cloning Chamber (Installation)",
    description: "Install a magical chamber that can clone living beings. One clone per month.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 450000,
    icon: '👥',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Clone any willing humanoid once per month (takes 30 days)",
        "Clone is identical but shares no memories/personality (blank slate)",
        "Clone ages normally; original can transfer consciousness (optional)",
        "Maintenance: 5,000 gp/month"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Major Installation',
    levelRequirement: 12
},

  'cloud_flower': {
    id: 'cloud_flower',
    name: "Cloud Flower",
    description: "A fluffy flower that creates temporary cloud platforms.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 15000,
    icon: '☁️',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Single Use: Create 3 cloud platforms (last 1 minute)",
        "Platforms hover 10ft off ground, hold up to 500lbs",
        "Can be used to cross gaps or reach heights"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Sky Delivery',
    levelRequirement: 5
},

  'cobalt_star_shard': {
        id: 'cobalt_star_shard',
        name: "Cobalt Star Shard",
        description: "A piece of a star that holds an alien princess. Manipulates time locally.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 420000,
        icon: '🔷',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Reaction: Force an enemy to reroll an attack",
            "3 Charges/Day: Cast 'Haste' or 'Slow'",
            "You hear faint screaming from inside the shard"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Time Stream',
        levelRequirement: 10
    },

  'cocoa_amulet': {
    id: 'cocoa_amulet',
    name: "Cocoa Amulet",
    description: "A sweet-smelling charm that warms the heart and the hands.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 1100,
    icon: '🍫',
    stock: 25,
    rarity: 'common',
    effects: [
        "Wear: Resistance to Cold for 24 hours",
        "Once per day: brew a restorative cup that heals 1d4 HP",
        "Emits a pleasant aroma"
    ],
    vendor: 'orchard_stall',
    shippedBy: 'Small Tin',
    levelRequirement: 1
},

  'coconut': {
        id: 'coconut',
        name: "Coconut",
        description: "It's hard. It hurts if you throw it.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 2000,
        icon: '🥥',
        stock: 100,
        rarity: 'common',
        effects: ["Thrown (30ft) for 1d4 Bludgeoning", "Bonk sound effect mandatory"],
        vendor: 'toad_town_market',
        shippedBy: 'Sack',
        levelRequirement: 1
    },

  'coin_block_replica': {
    id: 'coin_block_replica',
    name: "Mini Coin Block",
    description: "A brick that dispenses coins when punched. Finite, but who doesn't love free money?",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 11000,
    icon: '🧱',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Punch to dispense 1d10 Gold Coins (50 uses total)",
        "Recharges 1d4 coins at dawn",
        "Breaks after 50 uses (recyclable for 500gp)",
        "Attracts greedy squirrels"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Bubble Wrap',
    levelRequirement: 1
},

  'coin_of_the_god_of_chance': {
    id: 'coin_of_the_god_of_chance',
    name: "Coin of the God of Chance",
    description: "A coin that flips itself. It always lands on the side you fear most.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 12000,
    icon: '🪙',
    stock: 1,
    rarity: 'rare',
    effects: [
        "Flip: roll a d20 — if even, you gain a blessing (DM chooses); if odd, you gain a curse",
        "The coin flips again every dawn",
        "It never lands on heads or tails — only on the edge"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Gilded Box',
    levelRequirement: 3
},

  'common_magic_item_upgrade': {
    id: 'common_magic_item_upgrade',
    name: "Common Magic Item Upgrade Coupon",
    description: "Turn your +1 spoon into a +2 spoon. Maybe.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 12300,
    icon: '🎫',
    stock: 7,
    rarity: 'rare',
    effects: [
        "Upgrade one common magic item to uncommon (DM discretion)",
        "50% chance the item becomes cursed instead",
        "Non-transferable, non-refundable, non-sensical",
        "Made by: Wizards of the Recycling Bin"
    ],
    vendor: 'upgrade_center',
    shippedBy: 'Enchanted Envelope',
    levelRequirement: 6
},

  'compass_of_dead_paths': {
    id: 'compass_of_dead_paths',
    name: "Compass of Dead Paths",
    description: "A rusted compass that points not to north, but to where someone last died.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 12000,
    icon: '🧭',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Points to the location of the most recent death within 10 miles",
        "Glows brighter with more recent or violent deaths",
        "May attract ghosts or scavengers"
    ],
    vendor: 'bazaar_of_oddities',
    shippedBy: 'Rusted Case',
    levelRequirement: 3
},

  'conker_acorn': {
    id: 'conker_acorn',
    name: "Conker Acorn Bomb",
    description: "An acorn that explodes on impact.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 5000,
    icon: '🌰',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Throw: 2d6 explosive in 5ft radius",
        "Single Use",
        "May grow tree instead (1% chance)"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Nut Bag',
    levelRequirement: 2
},

  'connectopia_banana_core_amulet': {
        id: 'connectopia_banana_core_amulet',
        name: "Banana Core Amulet",
        description: "A relic from a legendary banana hoarder’s burial mound",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 800,
        icon: '🍈',
        stock: 5,
        rarity: 'common',
        effects: [
            "Grants +2 to all rolls involving stealth or persuasion",
        "When equipped in haunted zones, reduces fear effect by 50%",
        "Consumes 1 banana core per use (Gain 10 Coins if eaten)",
        "Has a 5% chance to trigger a sudden banana peel slide (confuses target for 1 round)",
        "Slightly increases movement speed in banana groves",
        "Crafted by: Boos Real Estate Syndicate"
        ],
        vendor: 'connectopia',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 3
    },

  'connectopia_bowser_kid_keychain': {
        id: 'connectopia_bowser_kid_keychain',
        name: "Bowser Kid Keychain",
        description: "A small, metallic pendant shaped like a toddler’s boot, rumored to have been found in the abandoned ruins of Bowser’s castle. It glows faintly when the user is near a rival Bowser child, triggering a hidden map that reveals the location of the next throne room. But the pendant is cursed: if worn too long, it causes the wearer to dream of their own childhood, or worse, to be mistaken for a rival child.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 1200,
        icon: '🎮',
        stock: 8,
        rarity: 'uncommon',
        effects: [
            "Reveals hidden paths on a map if worn by a Bowser child",
        "Causes the wearer to dream of their own childhood for 1d4 hours",
        "20% chance to trigger a minor hallucination of rival Bowser children",
        "Worn by: Bowser’s Kids Faction",
        "Can only be worn by characters with “Childhood Memory” trait",
        "Requires: Bowser child’s blood to activate full effect"
        ],
        vendor: 'connectopia',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 4
    },

  'connectopia_chain_chomp_core': {
        id: 'connectopia_chain_chomp_core',
        name: "Chain Chomp Core",
        description: "The pulsating heart of a weaponized Chain Chomp, now fused into a battle tool",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 4000,
        icon: '🐍',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Enhances melee weapon damage by 30% for 1 round per activation",
        "Causes 50% chance of triggering a Chain Chomp roar that stuns enemies",
        "Requires attunement with a melee class",
        "Cannot be used in non-combat zones",
        "Crafted by: Bob-omb Rush Delivery"
        ],
        vendor: 'connectopia',
        shippedBy: 'Bob-omb Rush Delivery',
        levelRequirement: 6
    },

  'connectopia_chain_chomp_courier_key': {
        id: 'connectopia_chain_chomp_courier_key',
        name: "Chain Chomp Courier Key",
        description: "A relic from the Chain Chomp Courier’s last delivery—delivered to the edge of the Void. The key glows faintly with the essence of a forgotten trade route. It opens doors that no map can show, and when used, triggers a short-lived portal to Beanbean’s hidden spice vaults.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 2000,
        icon: '📦',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Opens hidden storage nodes in frontier zones",
        "Grants 1d6 temporary teleportation range when used once per day",
        "Causes 1d2 “wrong delivery” misdirections when used in public",
        "Required to activate the Cheep-Cheep Accords’ secret trade hub",
        "Crafted from courier delivery logs and cursed courier tokens",
        "Used in trade negotiations between Connectopia and Beanbean Kingdoms"
        ],
        vendor: 'connectopia',
        shippedBy: 'Chain Chomp Courier',
        levelRequirement: 6
    },

  'connectopia_cheep_cheep_accords_talisman': {
        id: 'connectopia_cheep_cheep_accords_talisman',
        name: "Cheep Cheep Accord Talisman",
        description: "A glowing toadkin amulet that whispers agreements",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '🐸',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants temporary immunity to fear effects for 10 seconds",
        "Grants 1d6 bonus to diplomacy checks",
        "Triggers if worn by a Toad allied with Rakasha Spirit Walkers",
        "Causes hallucinations if worn by non Toads (1d6 confusion damage)",
        "Crafted by: Moonfang Pack",
        "Thematic link: directly tied to Cheep-Cheep Accords and Toad alliances"
        ],
        vendor: 'connectopia',
        shippedBy: 'Koopa Postal',
        levelRequirement: 7
    },

  'connectopia_cosmic_jester_trinket': {
        id: 'connectopia_cosmic_jester_trinket',
        name: "Cosmic Jester’s Prank Pocket",
        description: "A bag that misplaces your gear and replaces it with absurdities",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 750,
        icon: '🎭',
        stock: 15,
        rarity: 'uncommon',
        effects: [
            "When used, randomly replaces one item with a comedic item (e.g. a sock shaped like a dragon)",
        "Grants +1d4 to all rolls for misdirection or trickery",
        "May cause temporary confusion to enemies",
        "Consumed after use; does not stack",
        "Made by: Cosmic Jester cultists",
        "Thematic link: Entropy and pranks from the Cosmic Jester cult"
        ],
        vendor: 'connectopia',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 3
    },

  'connectopia_doughnut_gravity_iron': {
        id: 'connectopia_doughnut_gravity_iron',
        name: "Doughnut Gravity Iron",
        description: "A blocky artifact that defies vertical physics",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '⚖',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants 20% resistance to gravity-based attacks",
        "Allows wearer to stand on vertical surfaces for 10 seconds",
        "Causes minor disorientation if used repeatedly",
        "Requires attunement with a pioneer’s map",
        "Crafted by: Dry Bones Dead Drop",
        "Thematic link: Connectopia’s blocky terrain meets Grand Country’s vertical chaos"
        ],
        vendor: 'connectopia',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 6
    },

  'connectopia_dusty_ranger_satchel': {
        id: 'connectopia_dusty_ranger_satchel',
        name: "Dusty Ranger Satchel",
        description: "A rugged pack designed for frontier scavengers",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750,
        icon: '🗺',
        stock: 12,
        rarity: 'common',
        effects: [
            "Increases carrying capacity by 30%",
        "Randomly drops 1 rare material when opened",
        "Slightly reduces movement speed while carrying heavy items",
        "Made from scavenged desert trade goods",
        "Crafted by: Blooper Wetworks",
        "Unlocks access to hidden desert caches"
        ],
        vendor: 'connectopia',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 3
    },

  'connectopia_entropic_keychain': {
        id: 'connectopia_entropic_keychain',
        name: "Entropic Keychain",
        description: "A keychain forged from entropy’s own breath, it hums with a low, rhythmic decay. Worn by those who embrace chaos, it causes the wearer’s surroundings to slowly unravel into giggling puffballs or collapsing dreamlands. Perfect for the Cosmic Jester cult or a rogue explorer who wants to turn the world upside down.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌀',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Grants 1d6 temporary damage reduction per round",
        "Wearer’s movements cause nearby terrain to crumble into giggles or dust",
        "When activated, triggers a 5% chance to summon a random prank effect from the Cosmic Jester cult",
        "Requires attunement by a rogue or trickster",
        "Wearing it in Dream Land causes puffballs to become sentient and follow the wearer",
        "If lost in the Dream Land, it becomes a lost artifact that may lead to a cult shrine"
        ],
        vendor: 'connectopia',
        shippedBy: 'Pianta Chuck Express',
        levelRequirement: 6
    },

  'connectopia_feywild_crafting_ink': {
        id: 'connectopia_feywild_crafting_ink',
        name: "Feywild Inkwell of Whispered Whimsy",
        description: "A vial that lets you write spells that change reality",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 1200,
        icon: '🖋',
        stock: 4,
        rarity: 'rare',
        effects: [
            "Allows writing of spells that alter reality for 1 minute",
        "Requires attunement with a Feywild artifact",
        "One use per day",
        "Can cause minor reality distortion if overused",
        "Crafting material for Feywild-aligned items",
        "Thematic link: Feywild dimension’s playful magic meets Connectopia’s frontier creativity"
        ],
        vendor: 'connectopia',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 4
    },

  'connectopia_frostforged_shield': {
        id: 'connectopia_frostforged_shield',
        name: "Frostforged Shield",
        description: "A relic of the Frozen Frontier, this shield was forged by the last ice-dwelling clan who guarded the northern pass before the Coral Fleet arrived. Its surface is etched with ancient runes that shiver with cold, and it can be heard whispering warnings if its wielder approaches danger. It is rumored to have been left behind by a warrior who died protecting the kingdom’s last bridge.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '❄',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Grants +3 armor bonus against cold damage",
        "10% chance to cause frostbite to enemies within 5 feet",
        "Wielder hears whispers of the Frozen Clan’s forgotten oath",
        "Wielder must be standing on ice or snow to activate full effect",
        "Crafted by: Kingdom Gondor",
        "Requires attunement with frost magic"
        ],
        vendor: 'connectopia',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 6
    },

  'connectopia_item_name_here': {
        id: 'connectopia_item_name_here',
        name: "Crimson Fleet Signal Beacon",
        description: "A pulsing beacon that calls in Syrups fleet during battle",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 15000,
        icon: '🔮',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Summons 3 Wario Warships in range",
        "Grants 50% damage bonus to all allies",
        "Causes minor disorientation to enemy units",
        "Made by: Void Drifters",
        "Connects to both Connectopia and Middle Earth via courier route"
        ],
        vendor: 'connectopia',
        shippedBy: 'Paratroopa Air',
        levelRequirement: 15
    },

  'connectopia_jungle_whisper_shield': {
        id: 'connectopia_jungle_whisper_shield',
        name: "Jungle Whisper Shield",
        description: "A resonant barrier that hums with jungle magic",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌿',
        stock: 7,
        rarity: 'uncommon',
        effects: [
            "Blocks 2d4 slashing damage",
        "When hit by a melee attack from DK Crew members gains +1 defense for 1 round",
        "Slightly increases stealth in jungle terrain",
        "Emits a low frequency hum that distracts nearby enemies",
        "Requires attunement by a jungle expert",
        "Crafted by: Blooper Wetworks"
        ],
        vendor: 'connectopia',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 4
    },

  'connectopia_koopa_navy_canteen': {
        id: 'connectopia_koopa_navy_canteen',
        name: "Koopa Navy Canteen",
        description: "A leaky canteen filled with ink-saturated water",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 300,
        icon: '🧃',
        stock: 15,
        rarity: 'common',
        effects: [
            "Gain 10 Coins per drink",
        "20% chance to cause ink bleed on target",
        "Tastes like burnt rubber and regret",
        "Causes temporary confusion for 1 round after use",
        "Made from stolen ink supplies from Ricco Harbor",
        "Crafted by: Koopa Navy (in secret)"
        ],
        vendor: 'connectopia',
        shippedBy: 'Pipe Express',
        levelRequirement: 2
    },

  'connectopia_koopa_navy_ink_jam_glove': {
        id: 'connectopia_koopa_navy_ink_jam_glove',
        name: "Ink Jam Glove",
        description: "A tactical glove designed for ink-jamming operations",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '💀',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants 2d4 bonus to stealth in ink-based environments",
        "Reduces damage from ink-splatter attacks by 50%",
        "Triggers ink burst effect after 3 attacks: deals 1d6 damage to all enemies in area",
        "Requires attunement by a Koopa Navy officer",
        "Crafted by: Admiral Bloopers’ Ink Corps",
        "Only usable during ink-jamming events or in Koopa Navy zones"
        ],
        vendor: 'connectopia',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 8
    },

  'connectopia_mushroom_regency_icebreaker': {
        id: 'connectopia_mushroom_regency_icebreaker',
        name: "Mushroom Regency Icebreaker",
        description: "A crystalline blade infused with fungal cold magic",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '❄',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Deals 3d6 cold damage",
        "Applies frostbite to targets on hit (1d4 damage per round for 3 rounds)",
        "Grants immunity to fire damage for 1 round after use",
        "Triggers a 20% chance to freeze nearby enemies in place",
        "Requires attunement by a spellcaster",
        "Crafted by: Mushroom Regency",
        "Only usable in frosty or haunted zones",
        "Has a 10% chance to trigger a fungal bloom effect (creates temporary fog for 2 rounds)"
        ],
        vendor: 'connectopia',
        shippedBy: 'Blooper Wetworks',
        levelRequirement: 8
    },

  'connectopia_mushroom_soul_pipe': {
        id: 'connectopia_mushroom_soul_pipe',
        name: "Mushroom Soul Pipe",
        description: "This enchanted pipe channels the psychic echoes of the Fungi civil war’s last princess, her mind still entwined in the fungal roots beneath the pipes. When smoked, it reveals visions of the war’s final moments—though the visions come at a cost: the user may hear the princess’s voice whispering her name, or lose their sense of taste. It is said to have been smuggled from the Mushroom Kingdom by a Rakasha courier who swore loyalty to the Elders.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 800,
        icon: '🍄',
        stock: 12,
        rarity: 'uncommon',
        effects: [
            "Temporary +10% stealth while moving",
        "2d4 psychic vision reveals hidden enemy positions",
        "10% chance of hearing a whisper from the Princess Noki",
        "May cause temporary tastelessness for 1 round",
        "Smuggled by: Rakasha Spirit Walk",
        "Requires: 3 drops of mushroom essence"
        ],
        vendor: 'connectopia',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 3
    },

  'connectopia_oracle_cursed_treasure': {
        id: 'connectopia_oracle_cursed_treasure',
        name: "Oracle Cursed Treasure",
        description: "A hollowed out vessel that whispers secrets of the dead",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 8000,
        icon: '🕯',
        stock: 0,
        rarity: 'legendary',
        effects: [
            "Grants temporary invisibility for 1 minute",
        "Consumes 2d6 mana to activate",
        "100% chance to trigger a necromantic curse upon death",
        "Causes target to become a soulless husk for 3 rounds",
        "Causes 2d4 damage to caster if used near Primordial Wyrm seals",
        "Thematic link: directly connected to the Oracle’s necromantic research",
        "WARNING: This item is a scam. No real power. Only a cursed relic that will haunt the buyer for 3 days. No refunds."
        ],
        vendor: 'connectopia',
        shippedBy: 'Koopa Postal',
        levelRequirement: 8
    },

  'connectopia_puffball_pouch': {
        id: 'connectopia_puffball_pouch',
        name: "Puffball Pouch",
        description: "A pouch stitched from the soft, sentient skin of eldritch puffballs—each one a tiny nightmare dimension trapped in a bag. When opened, it releases a cloud of giggles, giggles that make foes laugh uncontrollably and drop their weapons. But the laughter also feeds the Cosmic Jester’s cult.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 300,
        icon: '🍽',
        stock: 12,
        rarity: 'uncommon',
        effects: [
            "Consuming one puffball grants 2d4 temporary courage boost",
        "Causes 1d2 giggles per second until item is consumed or discarded",
        "Each laugh inflicts 1d3 damage to enemies if they are not immune to humor",
        "May trigger a minor prank from the Cosmic Jester cult if used in public",
        "If used during the Pianta Village Independence event, grants a 50% chance to escape capture by envoys"
        ],
        vendor: 'connectopia',
        shippedBy: 'Pianta Chuck Express',
        levelRequirement: 2
    },

};
