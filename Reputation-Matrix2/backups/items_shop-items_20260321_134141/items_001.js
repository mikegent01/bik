// Shop items chunk 1 of 51
// Items 1 to 100 (100 items)
// Auto-generated: 2026-03-21 13:41:13

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

  'a_bag_that_defies_vertical': {
        id: 'a_bag_that_defies_vertical',
        name: "Gravity Satchel",
        description: "A bag that defies vertical gravity and fits perfectly on a side of the doughnut",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🌌',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Allows wearer to float vertically up to 30 feet",
        "10% chance to cause a localized gravity anomaly",
        "Can be used to carry up to 100 lbs of gear",
        "Connects to The Grand Country’s side of the doughnut",
        "Cursed: If dropped in the Void, wearer becomes permanently upside down"
        ],
        vendor: 'inkopolis',
        shippedBy: 'Paratroopa Air',
        levelRequirement: 7
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

  'a_bracelet_infused_with_wario_1': {
    id: 'a_bracelet_infused_with_wario_1',
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

  'a_cape_that_makes_you_1': {
    id: 'a_cape_that_makes_you_1',
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

  'a_card_that_wilds_any_1': {
    id: 'a_card_that_wilds_any_1',
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

  'a_chest_full_of_treasure_1': {
    id: 'a_chest_full_of_treasure_1',
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

  'a_coin_with_wario_s_1': {
    id: 'a_coin_with_wario_s_1',
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

  'a_controller_that_controls_minor_1': {
    id: 'a_controller_that_controls_minor_1',
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

  'a_corroded_brass_key_rumored_1': {
        id: 'a_corroded_brass_key_rumored_1',
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

  'a_cowboy_hat_with_wario_1': {
    id: 'a_cowboy_hat_with_wario_1',
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

  'a_crystalline_core_that_amplifies': {
        id: 'a_crystalline_core_that_amplifies',
        name: "Forgeheart Core",
        description: "A crystalline core that amplifies the power of any metal tool or weapon. Embedded with the memory of a legendary smith’s final hammer strike, this core lets you bend steel to your will.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Increases tool efficiency by 25%",
        "Grants +5% chance to break through enemy armor on hit",
        "Grants +10% bonus to metal crafting speed"
        ],
        vendor: 'midlands',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
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

  'a_cursed_artifact_from_toadburt_1': {
        id: 'a_cursed_artifact_from_toadburt_1',
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

  'a_cursed_artifact_that_erodes': {
        id: 'a_cursed_artifact_that_erodes',
        name: "Entropy Ring",
        description: "A cursed artifact that erodes time and logic",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '⚡',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants 3d6 damage against time-based enemies",
        "Randomly alters the target’s perception of time",
        "Triggers entropy surge after 3 uses",
        "Reduces spellcasting efficiency by 20%",
        "Cannot be used in the same realm as Earth Land",
        "Created by: Toadburt’s Secret Workshop",
        "Requires attunement by a scholar or warlock"
        ],
        vendor: 'midlands',
        shippedBy: 'Goomba Ground Delivery',
        levelRequirement: 8
    },

  'a_cursed_artifact_that_feeds_1': {
        id: 'a_cursed_artifact_that_feeds_1',
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

  'a_cursed_relic_forged_from_1': {
        id: 'a_cursed_relic_forged_from_1',
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

  'a_cursed_relic_that_draws_1': {
        id: 'a_cursed_relic_that_draws_1',
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

  'a_cursed_ring_of_the_1': {
        id: 'a_cursed_ring_of_the_1',
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

  'a_cursed_tool_forged_from': {
        id: 'a_cursed_tool_forged_from',
        name: "Ironclad Hammer of the Forge",
        description: "A cursed tool forged from the last steel of the Blacksmith’s Guild, it strikes with brutal efficiency and inflicts heavy damage to armored foes. Its handle glows faintly with the fire of the Iron Legion’s labor.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals +200 damage to enemy armor",
        "Causes enemy armor to degrade by 10% after each hit",
        "Grants 5% chance to inflict “Iron Will” status effect (resists damage for 3 turns)"
        ],
        vendor: 'midlands',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'a_cursed_trinket_that_speaks': {
        id: 'a_cursed_trinket_that_speaks',
        name: "Tongue of the Tide",
        description: "A cursed trinket that speaks in the language of the drowned. Wears it to survive undersea or subterranean criminal dens. May speak truth or lie depending on the wearer’s emotional state.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '🌊',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "+10% chance to avoid ambushes in aquatic or subterranean zones",
        "Temporary speech immunity in underwater or submerged combat",
        "Reveals hidden treasure locations if the wearer is under stress or fear"
        ],
        vendor: 'rogueport',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 4
    },

  'a_cursed_trinket_worn_by': {
        id: 'a_cursed_trinket_worn_by',
        name: "Onyx Hand Ring",
        description: "A cursed trinket worn by those who seek forbidden knowledge",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🖤',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants access to the Shadowfells hidden archives",
        "Deals 1d8 damage to enemies with corrupted data",
        "20% chance to trigger a data leak upon enemy defeat",
        "Wears off after 3 uses unless recharged",
        "Connected to: Orangus Cornelius and the Onyx Hand"
        ],
        vendor: 'internet',
        shippedBy: 'Kremling Smuggle Run',
        levelRequirement: 7
    },

  'a_custom_motorcycle_loud_fast_1': {
        id: 'a_custom_motorcycle_loud_fast_1',
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

  'a_dampened_jungle_satchel_infused': {
        id: 'a_dampened_jungle_satchel_infused',
        name: "Tropical Tide Satchel",
        description: "A dampened jungle satchel infused with swamp mist, perfect for carrying secrets or loot without leaving a trace. When opened, it emits a faint hum that distracts nearby Kremling patrols.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+10% stealth in jungle biomes",
        "Reduces enemy detection radius by 15% while carrying",
        "Triggers “Swamp Whisper” passive: chance to detect hidden traps or loot"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'a_darkly_polished_ring_forged_1': {
        id: 'a_darkly_polished_ring_forged_1',
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

  'a_device_that_draws_maps_1': {
    id: 'a_device_that_draws_maps_1',
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

  'a_flickering_lantern_that_glows': {
        id: 'a_flickering_lantern_that_glows',
        name: "Feywhisper Torch",
        description: "A flickering lantern that glows with the color of twilight and whispers secrets to those who listen. When lit, it reveals hidden paths in the Feywild and grants temporary invisibility to the user for 10 seconds.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🌿',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Grants 10 seconds of invisibility when used",
        "Reveals hidden paths in the Feywild for 30 seconds",
        "Boosts stealth check by +2 for 1 turn"
        ],
        vendor: 'rogueport',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 4
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

  'a_flying_broom_for_quick': {
    id: 'a_flying_broom_for_quick',
    name: "Kamek's Broom",
    description: "A flying broom for quick escapes.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 30000,
    icon: '🧹',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Fly speed 50ft",
        "Can cast one random spell per day (DM roll)",
        "Broom has mind of its own sometimes"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Broomstick Delivery',
    levelRequirement: 7
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

  'a_fractured_piece_of_the': {
        id: 'a_fractured_piece_of_the',
        name: "Mirrored Soul Shard",
        description: "A fractured piece of the Shadowfell’s fractured mirror dimension. When held, it distorts time briefly, allowing the wielder to teleport up to 30 feet. Slightly unstable and dangerous to use.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🌀',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Temporary teleportation (30 ft) once per use",
        "Causes 10% chance to create a shadow duplicate for 3 seconds",
        "May cause short-term disorientation (1s) on use"
        ],
        vendor: 'shadowfell',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 4
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

  'a_fragment_of_a_forgotten': {
        id: 'a_fragment_of_a_forgotten',
        name: "Ancient Temple Shard",
        description: "A fragment of a forgotten temple’s foundation, humming with forgotten magic. When worn, it reveals hidden paths and ancient secrets.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Reveals one hidden temple entrance per encounter",
        "Increases chance of encountering ancient guardians by 20%",
        "Grants temporary immunity to environmental damage (e.g. lava, poison) for 3 turns"
        ],
        vendor: 'hyrule',
        shippedBy: 'Pipe Express',
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

  'a_gold_plated_spray_painted_1': {
    id: 'a_gold_plated_spray_painted_1',
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

  'a_golden_key_to_the_1': {
        id: 'a_golden_key_to_the_1',
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

  'a_greasy_napkin_signed_by_1': {
    id: 'a_greasy_napkin_signed_by_1',
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

  'a_hat_that_grows_garlic_1': {
    id: 'a_hat_that_grows_garlic_1',
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

  'a_holster_for_guns_garlic_1': {
    id: 'a_holster_for_guns_garlic_1',
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

  'a_hooded_cloak_for_patrolling': {
    id: 'a_hooded_cloak_for_patrolling',
    name: "Gondor Ranger's Cloak",
    description: "A hooded cloak for patrolling the wilds of Ithilien.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16500,
    icon: '🧥',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Advantage on Survival checks in forests or hills",
        "Hood provides dim light vision in shadows",
        "Cloak snags on thorns (5% chance of tear)",
        "Made by: Gondor Tailors"
    ],
    vendor: 'kingdom_gondor_outpost',
    shippedBy: 'Ranger Relay',
    levelRequirement: 5
},

  'a_horn_that_honks_with_1': {
    id: 'a_horn_that_honks_with_1',
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

  'a_key_to_the_ink': {
        id: 'a_key_to_the_ink',
        name: "Ricco Harbor Key",
        description: "A key to the ink-locked harbor",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 5000,
        icon: '🔑',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Opens Ricco Harbor for 30 minutes",
        "Grants 50% XP bonus from battles inside",
        "Triggers ink jamming on enemies within range",
        "Made by: Koopa Navy",
        "Connects Isle Delfino and Inkopolis"
        ],
        vendor: 'isle_delfino',
        shippedBy: 'Piranha Plant Post',
        levelRequirement: 8
    },

  'a_keychain_forged_from_the_1': {
        id: 'a_keychain_forged_from_the_1',
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

  'a_keychain_that_unlocks_hidden_1': {
        id: 'a_keychain_that_unlocks_hidden_1',
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

  'a_lightweight_cape_woven_from': {
        id: 'a_lightweight_cape_woven_from',
        name: "Tropical Breeze Cape",
        description: "A lightweight cape woven from the breath of the island’s breezes, this cape allows the wearer to glide through the air with minimal effort. Ideal for aerial combat or escape missions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants short-range aerial flight for 10 seconds",
        "Increases dodge chance by 15% while airborne",
        "Reduces fall damage by 50% during jumps"
        ],
        vendor: 'isle_delfino',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
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

  'a_long_fork_for_roasting_1': {
    id: 'a_long_fork_for_roasting_1',
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

  'a_lucky_bone_for_wishes_1': {
    id: 'a_lucky_bone_for_wishes_1',
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

  'a_metallic_key_shaped_like_1': {
        id: 'a_metallic_key_shaped_like_1',
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

  'a_meter_that_measures_your_1': {
    id: 'a_meter_that_measures_your_1',
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

  'a_pan_that_stirs_itself_1': {
    id: 'a_pan_that_stirs_itself_1',
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

  'a_parasol_for_floating_and': {
    id: 'a_parasol_for_floating_and',
    name: "Peach's Parasol",
    description: "A parasol for floating and shielding.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '☂️',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Float: Reduce fall speed to 10ft/round",
        "Shield: +1 AC when open",
        "Can glide 20ft horizontally"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Parasol Case',
    levelRequirement: 5
},

  'a_partially_burned_scroll_from_1': {
    id: 'a_partially_burned_scroll_from_1',
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

  'a_pendant_shaped_like_a_1': {
        id: 'a_pendant_shaped_like_a_1',
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

  'a_pendant_that_glows_when_1': {
        id: 'a_pendant_that_glows_when_1',
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

  'a_pendant_that_pulses_with': {
        id: 'a_pendant_that_pulses_with',
        name: "Necrotic Heart Pendant",
        description: "A pendant that pulses with the heartbeat of the dead. Wears the weight of forgotten memories and allows the wearer to commune with undead spirits. Its glow dims if the wearer is injured.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2800,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants 10% chance to heal 10% of HP per turn if undead enemy is nearby",
        "Communion: Once per battle, allows the wearer to speak with a nearby undead entity for 3 seconds",
        "Pulse of the Dead: When damaged, the pendant temporarily grants +20% necromancy damage"
        ],
        vendor: 'fractured_atrium',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
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

  'a_pink_brick_from_the_1': {
    id: 'a_pink_brick_from_the_1',
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

  'a_pistol_that_shoots_garlic_1': {
    id: 'a_pistol_that_shoots_garlic_1',
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

  'a_plush_doll_that_looks': {
        id: 'a_plush_doll_that_looks',
        name: "Bootleg Waluigi Doll",
        description: "A plush doll that looks vaguely like Waluigi, but the nose is wrong. Squeaks when hugged.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5000,
        icon: '💜',
        stock: 15,
        rarity: 'common',
        effects: ["Squeaks loudly", "May annoy Wario"],
        vendor: 'wario_direct',
        shippedBy: 'Purple Box',
        levelRequirement: 1
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

  'a_poster_with_your_face_1': {
    id: 'a_poster_with_your_face_1',
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

  'a_potent_grenade_that_explodes': {
    id: 'a_potent_grenade_that_explodes',
    name: "Wario's Garlic Grenade",
    description: "A potent grenade that explodes in a cloud of overwhelmingly pungent garlic. Wario swears by it.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 800,
    icon: '🧄',
    stock: 30,
    rarity: 'common',
    effects: [
        "Thrown (30ft): 10ft radius cloud of garlic",
        "Creatures in cloud must make CON save or be Poisoned and nauseated for 1 minute",
        "Vampires and creatures with keen smell have disadvantage on the save"
    ],
    vendor: 'Wario Land',
    shippedBy: 'Greasy Paper Bag',
    levelRequirement: 1
},

  'a_potion_that_is_definitely_1': {
    id: 'a_potion_that_is_definitely_1',
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

  'a_power_up_that_fell_1': {
    id: 'a_power_up_that_fell_1',
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

  'a_printing_press_to_spread': {
        id: 'a_printing_press_to_spread',
        name: "The 'Free Croak' Press",
        description: "A printing press to spread the message of liberation.",
        category: SHOP_CATEGORIES.FACTION,
        price: 40000,
        icon: '📰',
        stock: 1,
        rarity: 'uncommon',
        effects: ["Increases recruitment", "Boosts Loyalty significantly"],
        vendor: 'rogueport_black_market',
        factionBonus: { loyalty: 15, diplomacy: 5 }
    },

  'a_pulsating_amulet_that_channels_1': {
        id: 'a_pulsating_amulet_that_channels_1',
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

  'a_pulsating_obsidian_pendant_that_1': {
        id: 'a_pulsating_obsidian_pendant_that_1',
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

  'a_pulsating_seed_pod_with': {
        id: 'a_pulsating_seed_pod_with',
        name: "Fire Flower Core",
        description: "A pulsating seed pod with explosive mutations",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 3000,
        icon: '🌱',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Triggers explosive mutations on nearby enemies",
        "Grants temporary fire resistance for 3 turns",
        "Causes uncontrollable giggling in users",
        "Made by: Peach Loyalists"
        ],
        vendor: 'dreamland',
        shippedBy: 'Hammer Bros Handling',
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

  'a_rare_fungus_radiating_powerful': {
        id: 'a_rare_fungus_radiating_powerful',
        name: "Golden Mushroom",
        description: "A rare fungus radiating powerful healing energy that glows with the essence of fallen monarchs. When consumed, it restores 3d6 HP and grants temporary immunity to psychic backlash, but its glow attracts attention from the Onyx Hand’s enforcers. Harvested only from the Whispering Caves beneath the Regal Throne.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Restores 3d6 HP upon consumption",
        "Grants temporary immunity to psychic backlash",
        "Attracts attention from Onyx Hand enforcers",
        "Requires attunement by a spellcaster",
        "10% chance to trigger hallucinogenic visions",
        "Crafted by: Iron Legion"
        ],
        vendor: 'mushroom_kingdom',
        shippedBy: 'Pianta Chuck Express',
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

  'a_relic_from_the_abyssal_1': {
        id: 'a_relic_from_the_abyssal_1',
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

  'a_relic_from_the_collapsing_1': {
        id: 'a_relic_from_the_collapsing_1',
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

  'a_relic_from_the_depths': {
        id: 'a_relic_from_the_depths',
        name: "Void Touched Amulet",
        description: "A relic from the depths of the Feywild, this amulet pulses with the energy of lost time and forgotten gods. Worn by those who dare enter the Void, it grants temporary invulnerability to magical attacks—but at the cost of 1d6 damage per turn if the wearer does not maintain focus. The amulet remembers the wearer’s last known location, making it perfect for escaping Gehenna’s labyrinthine halls.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🌑',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Grants 1d6 temporary invulnerability to magical damage",
        "Grants +3 to perception checks when navigating maze-like environments",
        "Causes 1d6 damage to the wearer per turn if not focused",
        "Can track the wearer’s last known location (even across time loops)",
        "Requires attunement by a caster with 5+ years of training",
        "If used in the Feywild, causes minor dimensional rifts for 30 seconds",
        "Crafted by: Pokémon League (with assistance from the Feywild’s Trickster Court)"
        ],
        vendor: 'kivotos',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 8
    },

  'a_relic_from_the_drowned_1': {
        id: 'a_relic_from_the_drowned_1',
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

};
