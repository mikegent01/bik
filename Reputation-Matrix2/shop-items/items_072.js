// Shop items file 72
// Generated: 2026-03-22 18:37:50
// Items: 100

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_072 = {
    'faerun_item_whispers_of_the_deep': {
        id: 'faerun_item_whispers_of_the_deep',
        name: "Deepwater Divination Scroll",
        description: "A weathered scroll filled with cryptic symbols and the faint scent of brine. Unraveling its secrets grants a brief glimpse into the currents of fate – though beware, the depths rarely offer pleasant prophecies! This item is perfect for confusing your enemies.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 12000,
        icon: '🔮',
        stock: 35,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "chance to inflict confusion on target",
            "reveal a single hidden object within a 10-foot radius (once per day)",
            "grant +2 to insight checks for 3 rounds"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'sea_cart',
        levelRequirement: 12
    },

    'faerun_item_aegis_of_wario': {
        id: 'faerun_item_aegis_of_wario',
        name: "Aegis of Wario's Wrath",
        description: "Forged in the heart of a forgotten dwarven forge, this shield pulsates with chaotic energy. It’s said that Wario himself blessed it to unleash a flurry of attacks – though whether he *actually* did is heavily debated! This shield has some serious weight to it!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 230000,
        icon: '🛡️',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "high armor class +5",
            "chance to stun on a critical hit",
            "increased attack damage by 3d6",
            "chance to cause a small explosion when blocking (10% chance)"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'winged_beast',
        levelRequirement: 35
    },

    'earth_land_guild_repair_kit': {
        id: 'earth_land_guild_repair_kit',
        name: "Quartermaster's Quick Fix",
        description: "A meticulously organized kit packed with the finest tools and materials for repairing damaged equipment. This isn’t just a repair kit; it’s an investment in your future battles - plus, Wario always said a well-maintained sword is a happy sword!",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1200,
        icon: '🛠️',
        stock: 30,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "repair damaged equipment (small items)",
            "chance to reduce repair cost by 25%"
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'rolling_cart',
        levelRequirement: 3
    },

    'almost_edge_item_voidwalker_boots': {
        id: 'almost_edge_item_voidwalker_boots',
        name: "Null-Step Striders",
        description: "Crafted from solidified nothingness, these boots allow you to briefly step between the edges of reality. They're surprisingly comfortable for something that defies logic and might just lead you further into the void... or back home! Wario would probably try to eat them.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '👟',
        stock: 25,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "increased_movement_speed_5",
            "chance_to_phase_through_obstacles",
            "resistance_to_void_damage"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'dimensional_porter',
        levelRequirement: 8
    },

    'curiosity_whispering_shard': {
        id: 'curiosity_whispering_shard',
        name: "The Whispering Shard of Despair",
        description: "A jagged fragment ripped from a colossal, eternally weeping statue. Holding this shard fills you with unsettling visions and faint whispers promising power…or madness. Use with caution, or perhaps a very strong drink.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '💀',
        stock: 91,
        rarity: 'common',
        stockType: 'night_only',
        effects: [
            "chance to inflict fear: 5%",
            "small chance to gain a temporary debuff (e.g., reduced attack damage)"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'delivery_only',
        levelRequirement: 1
    },

    'chaos_dealer_voidshard': {
        id: 'chaos_dealer_voidshard',
        name: "Voidshard of Twisted Fate",
        description: "A pulsating fragment of raw chaos, this shard seems to shift between colors and whisper promises of power...and oblivion. Handling it requires a firm grip and a healthy dose of denial, or you might find yourself uncontrollably summoning miniature demons.  Don't say I didn't warn ya!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7500,
        icon: '🌀',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "chance_to_stun",
            "random_effect_small",
            "temporary_debuff"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'winged_rat',
        levelRequirement: 10
    },

    'fate_forge_legionnaire_banner': {
        id: 'fate_forge_legionnaire_banner',
        name: "Legionnaire's Banner of Unyielding Resolve",
        description: "A faded but imposing banner emblazoned with the symbol of the Iron Legion. Holding it grants a subtle boost to morale and a strange sense of duty… or perhaps just makes you feel like marching in formation.  It’s also surprisingly effective at distracting enemies.",
        category: SHOP_CATEGORIES.FACTION,
        price: 1200,
        icon: '🚩',
        stock: 30,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "morale_boost",
            "increased_defense",
            "chance_to_inspire"
        ],
        vendor: 'fate_forge',
        shippedBy: 'messenger_hawk',
        levelRequirement: 3
    },

    'mushroom_kingdom_coin_of_prosperity': {
        id: 'mushroom_kingdom_coin_of_prosperity',
        name: "Golden Gloop Coin",
        description: "This glistening coin, shaped like a giant mushroom cap, is said to bring good fortune... or at least attract more coins. It’s surprisingly sticky and may cause temporary paralysis if swallowed.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '💰',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grant_small_luck",
            "chance_to_find_extra_coins",
            "temporary_slow"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'mushroom_post',
        levelRequirement: 3
    },

    'mushroom_kingdom_mushroom_massage': {
        id: 'mushroom_kingdom_mushroom_massage',
        name: "Rejuvenating Fungal Rubdown",
        description: "A surprisingly pleasant experience involving the application of specially prepared, soothing mushroom extracts. This service will temporarily restore stamina and remove minor ailments... mostly.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 3500,
        icon: '💆‍♀️',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "restore_stamina",
            "remove_minor_poison_effect",
            "temporary_strength_boost"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'delivery_drone',
        levelRequirement: 10
    },

    'doughnut_hole_anomaly_essence': {
        id: 'doughnut_hole_anomaly_essence',
        name: "Essence of the Anomaly",
        description: "Captured from a fleeting tear in reality, this shimmering liquid pulsates with chaotic energy. Drinking it provides an unpredictable boost to your stats...or causes you to briefly transform into a sentient doughnut. You've been warned!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8000,
        icon: '🧪',
        stock: 3,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Randomly grants +2 to one ability score (Strength, Dexterity, Intelligence, Wisdom, Charisma, or Constitution) for 2 turns.",
            "Chance of temporary stat reduction (roll a d6: 1-3 = -1, 4-6 = no effect).",
            "Causes the user to speak in rhymes for 1 minute."
        ],
        vendor: 'void_vendor',
        shippedBy: 'Quantum Courier',
        levelRequirement: 4
    },

    'warhammer_chaosshard_2': {
        id: 'warhammer_chaosshard_2',
        name: "Shard of Unmaking",
        description: "A jagged fragment ripped from the heart of a chaotic rift. Holding it feels… unsettling, like staring into an endless storm. This equipment allows you to briefly disrupt enemy spells and attacks with unpredictable bursts of energy – just try not to accidentally destroy yourself.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '💥',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance_to_dispel_magic",
            "increased_attack_speed",
            "minor_damage_on_hit"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Rift Runner',
        levelRequirement: 6
    },

    'warhammer_fatebinder_3': {
        id: 'warhammer_fatebinder_3',
        name: "The Binder's Mark",
        description: "This intricately carved amulet pulses with a faint, unsettling energy. Worn by the brave (or foolish), it grants limited control over fate itself – briefly altering the odds of success during critical moments!  Don’t get too attached to your plans though; destiny has a wicked sense of humor.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🎲',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increased_critical_hit_chance",
            "chance_to_avoid_damage",
            "temporary_buff_to_skill_checks"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Temporal Messenger',
        levelRequirement: 10
    },

    'the_edge_whisper_echo': {
        id: 'the_edge_whisper_echo',
        name: "Echoing Void Shard",
        description: "A fragment pulled from the endless whispers of the Abyss. Holding this shard grants brief glimpses into potential futures, though they tend to be... unsettling. It's like trying to eat a rainbow – bright and confusing!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1800,
        icon: '🔮',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grant temporary precognition (5% chance to see a future effect)",
            "chance of minor psychic disturbance (10% chance to confuse target for 1 round)",
            "provides resistance to fear effects"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'dimensional_rift',
        levelRequirement: 6
    },

    'the_edge_flux_potion': {
        id: 'the_edge_flux_potion',
        name: "Chromatic Instability Draught",
        description: "This potion tastes like static electricity and regret. Upon consumption, you'll briefly become unstable, shifting between colors – a truly dazzling display... or a terrifying one! Don’t worry, it only lasts a few seconds.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🧪',
        stock: 87,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grant temporary color alteration (applies a minor visual effect)",
            "chance to inflict confusion on target (15%)",
            "restores small amount of health"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'express_delivery',
        levelRequirement: 2
    },

    'the_edge_starfall_blade': {
        id: 'the_edge_starfall_blade',
        name: "Astral Fracture",
        description: "Forged from solidified starlight and the echoes of shattered worlds, this blade hums with chaotic energy. Wielding it offers a terrifying advantage, but be warned – prolonged use can fray your sanity! It's shiny... very shiny.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '⚔️',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "deals extra piercing damage",
            "chance to inflict bleeding (20%)",
            "grants a small chance to teleport short distances",
            "increases critical hit chance"
        ],
        vendor: 'final_shop',
        shippedBy: 'sky_carriage',
        levelRequirement: 9
    },

    'kivotos_item_instant_potion_of_mild_confusion': {
        id: 'kivotos_item_instant_potion_of_mild_confusion',
        name: "Instant Potion of Mild Confusion",
        description: "A bubbling concoction that gently unravels the mind, causing temporary disorientation and an overwhelming urge to ask incredibly strange questions. Consume at your own risk... or amusement!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🥴',
        stock: 87,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "heals 30 HP",
            "causes confusion for 1 turn (disadvantage on attack rolls)",
            "player rolls a d6. On a 4-6, player makes a foolish statement"
        ],
        vendor: 'club_supply',
        shippedBy: 'Courier Pigeon',
        levelRequirement: 2
    },

    'kivotos_item_chronometer_of_delayed_action': {
        id: 'kivotos_item_chronometer_of_delayed_action',
        name: "Chronometer of Delayed Action",
        description: "This ornate pocket watch appears to manipulate the flow of time – though only for *you*. It allows you to briefly pause your own actions, granting a moment to reconsider… or panic. Just don't expect it to save you from Wario’s shenanigans.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 21000,
        icon: '⏳',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "allows player to pause action for 1 turn (once per combat)",
            "increased reaction speed by 10%",
            "chance to dodge an attack (15%)"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Express Delivery System',
        levelRequirement: 9
    },

    'equestria_item_elemental_badge_of_discord': {
        id: 'equestria_item_elemental_badge_of_discord',
        name: "Badge of Discord - Twilight's Disapproval",
        description: "This dark purple badge was reportedly crafted by Stygian ponies attempting to channel discord. It radiates a chilling aura and has been known to subtly influence the emotions of those nearby, making them prone to arguing and petty disputes – definitely not recommended for diplomacy!",
        category: SHOP_CATEGORIES.FACTION,
        price: 7000,
        icon: '😈',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance to inflict 'argumentative' status on a target (reduces their stats slightly)",
            "increases the chance of causing minor chaos in battle",
            "grants access to restricted areas associated with Stygian ponies"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Royal Guard Courier',
        levelRequirement: 12
    },

    'internet_firewall_charm': {
        id: 'internet_firewall_charm',
        name: "Guardian of the Pixel Stream",
        description: "A meticulously crafted charm shaped like a miniature firewall, rumored to have been personally designed by a paranoid coding genius. It offers protection from intrusive advertising and unwanted downloads – useful for those trying to maintain some semblance of privacy in this chaotic place.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🛡️',
        stock: 35,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "resistance to mind control (15)",
            "chance to block unwanted advertisements (10%)",
            "increased digital stealth (5)"
        ],
        vendor: 'cyber_market',
        shippedBy: 'packet_relay',
        levelRequirement: 4
    },

    'faerun_item_starshard_of_valoria': {
        id: 'faerun_item_starshard_of_valoria',
        name: "Shard of Valorian Radiance",
        description: "Pulled from the heart of a fallen star during the War of the Lance, this shard glows with a celestial light and radiates divine energy. Wielding it provides protection against undead and grants access to healing magic – just don't stare at it for too long or you might start seeing angels!",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 85000,
        icon: '✨',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "undead damage +5",
            "healing magic (single target - 2d8)",
            "resistance to necrotic damage",
            "chance to dispel curses"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'celestial_messenger',
        levelRequirement: 25
    },

    'warhammer_voidshard': {
        id: 'warhammer_voidshard',
        name: "The Obsidian Shard of Ruin",
        description: "This forbidden warhammer pulses with an unsettling void energy. Legends speak of it being a fragment shattered from the heart of a fallen god, promising devastation to those who wield it… or drive them mad.  Don't say I didn’t warn you when you start seeing things!",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 6500,
        icon: '🖤',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "damage: physical 4d8 + 2 necrotic",
            "chance: 30% chance to inflict fear",
            "corruption +1"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'shadow_messenger',
        levelRequirement: 15
    },

    'equestria_item_whispering_star_shard': {
        id: 'equestria_item_whispering_star_shard',
        name: "Whispering Star Shard",
        description: "A fragment of a fallen star, this shard hums with ancient magic. Hold it close and listen carefully – sometimes, it whispers secrets of forgotten constellations and the locations of hidden rainbow gems... or just static.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '✨',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance_to_reveal_hidden_objects",
            "minor_mana_regeneration",
            "attracts_elemental_spirits"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'griffin_express',
        levelRequirement: 8
    },

    'equestria_item_warios_glitterbomb_starter': {
        id: "equestria_item_wario's_glitterbomb_starter",
        name: "Wario’s Glitter Bomb Starter Kit",
        description: "A surprisingly volatile concoction of concentrated rainbow magic and… well, let's just say Wario's secret ingredient. Detonate for a dazzling blast of color that stuns opponents and leaves them covered in shimmering sparkles. Don't blame us if you accidentally turn the entire kingdom pink!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 600,
        icon: '💣',
        stock: 23,
        rarity: 'common',
        stockType: 'night_only',
        effects: [
            "deals_5_damage",
            "chance_to_stun_target",
            "creates_a_small_area_of_confusion"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'dragon_delivery',
        levelRequirement: 3
    },

    'doughnut_hole_gravity_anchor': {
        id: 'doughnut_hole_gravity_anchor',
        name: "Voidstone Gravimetric Tether",
        description: "This unsettlingly sweet-smelling tether seems to pull at the very edges of reality, briefly stabilizing objects in areas affected by chaotic gravity. It’s rumored that eating a donut while using it grants temporary resistance to spatial distortions – don't ask how.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🌌',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increases gravity resistance by 10%",
            "chance to briefly slow down falling objects (15%)",
            "reduces disorientation effects by 25%"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Void Courier',
        levelRequirement: 6
    },

    'doughnut_hole_void_confection': {
        id: 'doughnut_hole_void_confection',
        name: "Singularity Swirl Pastry",
        description: "This impossibly dense pastry seems to defy the laws of physics, swirling with miniature black holes. Consume at your own risk – prolonged exposure may result in temporary existential dread or a sudden craving for more pastries... Wario recommends eating it quickly!",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 12000,
        icon: '🖤',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grants temporary immunity to void magic (30 seconds)",
            "chance to create a miniature black hole that pulls in small objects (10%)",
            "restores 50 HP and 25 Mana",
            "may cause uncontrollable giggling"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Quantum Delivery',
        levelRequirement: 11
    },

    'doughnut_hole_anomaly_lens': {
        id: 'doughnut_hole_anomaly_lens',
        name: "Lens of the Whispering Void",
        description: "Gaze through this lens and briefly glimpse fractured realities. Warning: prolonged use may cause existential dread...and a craving for more doughnuts.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3200,
        icon: '🔮',
        stock: 11,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "chance to reveal hidden pathways (20%)",
            "provides a small bonus to divination checks"
        ],
        vendor: 'center_seller',
        shippedBy: 'void_messenger',
        levelRequirement: 8
    },

    'almost_edge_item_edgeguardians_amulet': {
        id: 'almost_edge_item_edgeguardians_amulet',
        name: "Amulet of the Edge Guardians",
        description: "Forged by the long-forgotten entities that patrol the boundaries of reality, this amulet protects against madness and spatial anomalies. Its presence subtly shifts your perception, making you strangely resistant to the unsettling echoes of the void.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 35000,
        icon: '🛡️',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grants +4 to armor class",
            "immunity to madness effects",
            "chance (5%) to reflect spells back at the caster"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Spectral Messenger',
        levelRequirement: 12
    },

    'connectopia_pioneer_shepherds_boots': {
        id: "connectopia_pioneer_shepherd's_boots",
        name: "Sturdy Block Boots",
        description: "These boots were forged from the densest Connectopian blocks, reinforced with pioneer grit! They provide exceptional traction and protection against falling debris, perfect for exploring the perilous frontier.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750,
        icon: '👢',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased movement speed by 5%",
            "resistance to falling damage (decreased fall damage by 50%)",
            "improved traction on block surfaces"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'block_cart',
        levelRequirement: 3
    },

    'connectopia_shard_of_the_great_architect': {
        id: 'connectopia_shard_of_the_great_architect',
        name: "Echoing Shard of Genesis",
        description: "Recovered from the ruins of the Great Architect’s workshop, this shard resonates with the original blueprint of Connectopia. Holding it grants visions of potential futures and immense power – but also attracts unwanted attention from the chaotic echoes within.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 750000,
        icon: '✨',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "grants the user a chance to instantly repair damaged equipment.",
            "provides a 20% bonus to resource gathering rates.",
            "allows the user to briefly glimpse possible outcomes of combat scenarios (limited uses).",
            "Chance to summon a miniature construct that assists in crafting."
        ],
        vendor: 'block_smith',
        shippedBy: 'teleportation_beacon',
        levelRequirement: 25
    },

    'faerun_item_wario_s_lucky_charm': {
        id: 'faerun_item_wario_s_lucky_charm',
        name: "Wario's Guaranteed Good Fortune Token",
        description: "This ridiculously shiny token was supposedly crafted by Wario himself (or at least, a very convincing copy). It’s guaranteed to bring… well, *something* good. Results may vary wildly – you might get a free pie, or you might trigger an unfortunate encounter with a giant spider.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 6500,
        icon: '💰',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance to reroll a failed skill check (10%)",
            "advantage on persuasion checks against simple creatures",
            "occasionally attracts unwanted attention from greedy goblins"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'magical_delivery_drone',
        levelRequirement: 10
    },

    'mushroom_kingdom_item_pipe_wrench': {
        id: 'mushroom_kingdom_item_pipe_wrench',
        name: "Pipe Wrench of Disassembly",
        description: "This hefty wrench is forged from solid mushroom metal and can loosen even the most stubborn pipes! Use it to dismantle enemy defenses, repair broken machinery, or just mess around – Wario approves!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🔧',
        stock: 15,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increased damage to mechanical enemies",
            "+5 repair skill",
            "chance to disable enemy traps"
        ],
        vendor: 'wario_direct',
        shippedBy: 'mushroom_express',
        levelRequirement: 10
    },

    'teyvat_item_vision_catalyst': {
        id: 'teyvat_item_vision_catalyst',
        name: "Archon’s Whisper Charm",
        description: "Crafted from solidified lightning and a shard of an ancient Vision, this charm seems to murmur with forgotten prayers. It doesn't grant power directly, but provides the party with a skilled consultant for one hour -  perfect for analyzing enemy weaknesses or finding hidden paths... assuming they can understand its cryptic pronouncements.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1800,
        icon: '🔮',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "grant +1 to intelligence for one hour",
            "allows the party to learn a single tactical advantage (chosen by vendor)"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'dragon_cart',
        levelRequirement: 5
    },

    'teyvat_item_storm_shard': {
        id: 'teyvat_item_storm_shard',
        name: "Fragment of the Tempest’s Fury",
        description: "A jagged piece of crystallized lightning, pulsing with barely contained energy. This shard occasionally releases a short burst of electricity when held – mostly useful for shocking unsuspecting guards or creating dramatic entrances... though Wario recommends using it to light up dark alleys.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2200,
        icon: '⚡',
        stock: 18,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "chance to inflict 'shocked' status on enemy (30%)",
            "deals 50 lightning damage on hit",
            "slightly increases the party’s chance of finding rare items"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'sea_serpent',
        levelRequirement: 12
    },

    'animatopia_gloomfruit': {
        id: 'animatopia_gloomfruit',
        name: "Nightshade Berry Pouch",
        description: "A pouch filled with dark, glistening Nightshade Berries – a staple of Animatopia’s darker arts. Consume these to shroud yourself in shadow and briefly obscure your presence, perfect for sneaky maneuvers or… less savory activities.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🌑',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Grants temporary invisibility (3 turns)",
            "Restores a small amount of health"
        ],
        vendor: 'forest_market',
        shippedBy: 'giant_snail',
        levelRequirement: 1
    },

    'animatopia_ancestor_scroll': {
        id: 'animatopia_ancestor_scroll',
        name: "Whispers of the Elder Beasts",
        description: "This ancient scroll, meticulously painted with shimmering inks derived from rare luminescent fungi, contains fragments of forgotten rituals and prophecies. Touching it allows you to briefly commune with the spirits of Animatopia’s ancestors – though their advice is often cryptic and possibly involving a lot of grunting.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 35000,
        icon: '📜',
        stock: 12,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Grants a single-use vision of the future (random effect)",
            "Provides temporary resistance to fear effects",
            "Heals a moderate amount of HP"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'phantom_owl',
        levelRequirement: 18
    },

    'curiosity_omen_shard': {
        id: 'curiosity_omen_shard',
        name: "Shard of a Twisted Omen",
        description: "A fragment of an ancient prophecy, this obsidian shard pulses with unsettling energy. Holding it grants fleeting glimpses of possible futures – mostly involving unfortunate events and Wario’s terrible fashion choices.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '🔮',
        stock: 25,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "chance_to_reveal_enemy_weakness",
            "small_healing_effect",
            "minor_luck_boost"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Winged Messenger',
        levelRequirement: 3
    },

    'warhammer_desolation_strike': {
        id: 'warhammer_desolation_strike',
        name: "Desolation Strike",
        description: "Forged in the heart of a shattered empire, this hammer screams with the fury of countless battles. It feels strangely warm to the touch... almost like Wario's belly after a particularly large pizza.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🔥',
        stock: 3,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "increased_critical_hit_chance",
            "massive_damage_1",
            "chance_to_stun"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Night Crawler',
        levelRequirement: 6
    },

    'teyvat_item_stormcaller_amulet': {
        id: 'teyvat_item_stormcaller_amulet',
        name: "Stormcaller's Amulet",
        description: "This amulet, forged in the heart of a thunderstorm, hums with raw wind energy. It’s said to be favored by those who wish to dance with the elements and summon gusts of gale-force winds. Just don't get blown away!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '💨',
        stock: 7,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increases wind damage by 20%",
            "chance to summon a small whirlwind on hit",
            "reduces knockback taken by 15%"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'winged_sprint',
        levelRequirement: 9
    },

    'teyvat_item_loyalty_scroll': {
        id: 'teyvat_item_loyalty_scroll',
        name: "Scroll of Unwavering Loyalty",
        description: "A meticulously crafted scroll bearing the emblem of the Geo Archon. This item is imbued with a subtle force that encourages unwavering dedication to its wielder's cause – or at least, makes them *feel* like they’re dedicated! It's surprisingly useful for avoiding arguments.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '📜',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grants +1 to charisma checks when dealing with Geo-related characters",
            "chance to gain a temporary buff of resistance to earth damage",
            "provides vague, but oddly comforting advice."
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'sea_cart',
        levelRequirement: 3
    },

    'teyvat_item_chrono_essence': {
        id: 'teyvat_item_chrono_essence',
        name: "Chrono Essence - Temporal Shift",
        description: "Captured from the fractured echoes of time itself, this essence grants a fleeting moment of temporal distortion. Wario would definitely use this to get extra seconds on his jumps – it’s fantastic for tricking those pesky rivals!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 6000,
        icon: '⏳',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "temporarily slows down time for the user by 30%",
            "allows the user to rewind a single action up to 3 seconds",
            "chance to create a small temporal anomaly (small damage)"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'cloud_messenger',
        levelRequirement: 6
    },

    'faerun_item_shadow_whisper': {
        id: 'faerun_item_shadow_whisper',
        name: "Whispers of the Shadowfell",
        description: "A small, obsidian shard that pulses with a chilling darkness. Holding it allows you to briefly perceive echoes of forgotten horrors and gain advantage on stealth checks in areas touched by shadow – just don’t linger too long or you might find yourself lost in an endless loop of despair!  It smells faintly of rain and regret.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '🌑',
        stock: 15,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "advantage on stealth checks in darkness",
            "chance to inflict fear (1d6) on weaker enemies",
            "detect undead +3"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'hawk',
        levelRequirement: 12
    },

    'faerun_item_blood_rune': {
        id: 'faerun_item_blood_rune',
        name: "The Serpent's Kiss",
        description: "A pulsating crimson rune carved from a single shard of volcanic glass. This forbidden artifact grants immense power... at a terrible cost. Prolonged use slowly corrupts the wielder, twisting their desires and granting access to dark magic—use with extreme caution, or you might end up serving an ancient, slithering god!",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 35000,
        icon: '🩸',
        stock: 5,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "increased spell damage (fire)",
            "chance to summon shadowy minions",
            "corruption effect: -1 wisdom per day of use"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'dark_messenger',
        levelRequirement: 20
    },

    'pokemon_item_pocket_phantom': {
        id: 'pokemon_item_pocket_phantom',
        name: "Phantom Echo Capsule",
        description: "This shimmering capsule holds the lingering energy of a defeated Pokémon, perfect for bolstering your team's attack! Upon activation, it unleashes a spectral copy of the trainer’s last move – guaranteed to confuse and overwhelm your foes. Just don’t blame us if you accidentally summon a grumpy Mimikyu.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '👻',
        stock: 78,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases attack by 50 for 6 turns",
            "chance to inflict confusion on target",
            "adds a small chance of paralysis"
        ],
        vendor: 'pokemart',
        shippedBy: 'rocket_mail',
        levelRequirement: 7
    },

    'pokemon_item_trainer_boots': {
        id: 'pokemon_item_trainer_boots',
        name: "Stride-Step Boots of the Elite Four",
        description: "These sturdy boots, rumored to be crafted by a former member of the Elite Four’s personal guard, grant enhanced speed and agility. With these on your feet, you'll be dodging attacks like a seasoned trainer – just try not to trip over any Pokémon.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '👟',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increases speed by 30%",
            "chance to dodge attacks",
            "grants a small bonus to evasion"
        ],
        vendor: 'league_store',
        shippedBy: 'delivery_drone',
        levelRequirement: 12
    },

    'connectopia_block_hammer': {
        id: 'connectopia_block_hammer',
        name: "The Overload Hammer",
        description: "This hefty hammer isn't just for smashing blocks, it's got a bit o' Connectopia magic! It'll turn any stone into pure, shimmering data-bricks – perfect for building faster or confusing your enemies with a wall of information. Just don’t overload it too much, or you might end up with a digital explosion!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '🔨',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increases mining speed by 10%",
            "chance to create a data brick on hit",
            "small chance of stunning target"
        ],
        vendor: 'block_smith',
        shippedBy: 'Block Delivery Drone',
        levelRequirement: 3
    },

    'connectopia_echo_shard': {
        id: 'connectopia_echo_shard',
        name: "Fragment of the Lost Signal",
        description: "A pulsating shard of solidified data from a long-lost Connectopian transmission. Touching it causes unsettling echoes to ring in your mind, briefly revealing glimpses of the past... or maybe just confusing you! This fragment might be useful for deciphering ancient block layouts or driving a brave adventurer mad.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🔊',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance to inflict confusion on target for 3 turns",
            "reveals hidden paths (small chance)",
            "provides a small bonus to intelligence"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'Signal Courier Bot',
        levelRequirement: 6
    },

    'connectopia_void_extractor': {
        id: 'connectopia_void_extractor',
        name: "The Null Conduit",
        description: "This wicked device drains the very essence of Connectopia's energy grid, creating a localized void. Use it to disable enemy constructs or siphon power for your own devices - but beware! Prolonged use can destabilize reality itself and summon... something unpleasant. Wario wouldn’t recommend this one.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 7500,
        icon: '🌀',
        stock: 5,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "deals bonus damage to constructs and machines",
            "chance to create a temporary zone of silence",
            "risk of attracting hostile entities (small chance)"
        ],
        vendor: 'craft_corner',
        shippedBy: 'Shadow Delivery System',
        levelRequirement: 10
    },

    'pokemon_item_forbidden_shadow_stone': {
        id: 'pokemon_item_forbidden_shadow_stone',
        name: "Voidshard of the Dark Pokémon",
        description: "A pulsating fragment of solidified shadow energy, harvested from a defeated Umbreon. This stone whispers secrets of forbidden techniques and drains HP from nearby foes, but prolonged use may attract unwanted attention... like Wario’s hunger.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 6800,
        icon: '🌑',
        stock: 15,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "drain_hp_enemy_20",
            "chance_summon_shadow_phantom_5%"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Shadow Courier',
        levelRequirement: 8
    },

    'midlands_item_ironclad_gauntlet': {
        id: 'midlands_item_ironclad_gauntlet',
        name: "The Warden's Grip",
        description: "Forged in the fires of a broken foundry, this gauntlet feels like it wants to crush things. It’s surprisingly comfortable... until you try to lift something heavy. Don’t blame us if you accidentally dismantle your own weapon.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🧤',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Increase Strength by 8",
            "Chance to critically hit on weapon attacks (15%)",
            "Resistance to bludgeoning damage +3"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'Royal Post Cart',
        levelRequirement: 7
    },

    'leclaire_isle_item_sweet_serenade_potion': {
        id: 'leclaire_isle_item_sweet_serenade_potion',
        name: "Sweet Serenade Potion",
        description: "Brewed with crystallized honey and the laughter of sugar sprites, this potion instantly charms nearby creatures. They'll be so delighted by your song (or just the sweetness) that they’ll gladly part with their valuables!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8000,
        icon: '🎶',
        stock: 15,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "charm_target",
            "increased_charisma",
            "temporary_buff_to_persuasion"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'sugar_delivery',
        levelRequirement: 12
    },

    'leclaire_isle_item_mythic_dough_of_infinite_creation': {
        id: 'leclaire_isle_item_mythic_dough_of_infinite_creation',
        name: "Dough of Infinite Creation",
        description: "A colossal, shimmering dough ball pulsing with arcane energy. With a focused thought, you can shape this dough into almost anything – weapons, shields, even miniature Dough Folk armies! Wario would *love* this!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 75000,
        icon: '🧱',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "shape_dough_into_object",
            "minor_mana_regeneration",
            "increased_crafting_skill"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'dragon_express',
        levelRequirement: 20
    },

    'connectopia_mining_survey': {
        id: 'connectopia_mining_survey',
        name: "Pioneer's Seismic Scanner",
        description: "This handy device detects underground anomalies and valuable mineral deposits! It’s a vital tool for any ambitious miner, though it does have a tendency to pick up on the rhythmic stomping of Wario... which is usually a bad sign.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 850,
        icon: '⛏️',
        stock: 72,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "reveals_nearby_mineral_deposits",
            "detects_hidden_traps",
            "chance to find rare blueprints"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'Rattlesnake Express',
        levelRequirement: 5
    },

    'faerun_item_warrios_lucky_charm': {
        id: 'faerun_item_warrios_lucky_charm',
        name: "Warrior's Lucky Charm - The Wario-esque Boot",
        description: "A worn leather boot, surprisingly comfortable and inexplicably shiny. Legend says it was once owned by a particularly clumsy warrior who always managed to stumble into victory – or at least, avoid the worst of it.  May cause unexpected bursts of speed!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '👟',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance to dodge attacks (20%)",
            "increases movement speed by 10% for one round",
            "grants advantage on acrobatics checks",
            "occasionally emits a small puff of smoke"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'delivery_only',
        levelRequirement: 10
    },

    'kivotos_item_halo_of_disruption': {
        id: 'kivotos_item_halo_of_disruption',
        name: "Halos of Disruption",
        description: "These shimmering halos, once used by the prestigious Halo Club, are said to disrupt magical energies. They’re perfect for throwing at annoying professors or messing with a particularly potent spellcaster. Don't blame us if you accidentally create a small black hole.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '💫',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance to nullify a single-target spell",
            "reduces magical resistance by 5%"
        ],
        vendor: 'club_supply',
        shippedBy: 'Winged Courier',
        levelRequirement: 8
    },

    'kivotos_item_artifact_of_lost_notes': {
        id: 'kivotos_item_artifact_of_lost_notes',
        name: "Artifact of Lost Notes",
        description: "A tarnished music box that seems to contain the echoes of forgotten melodies. When wound, it projects ghostly images and whispers cryptic clues – mostly about where Wario hid his snacks last. It's a fantastic tool for divination...or just confusing your enemies.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7800,
        icon: '🎵',
        stock: 12,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "chance to reveal hidden passages",
            "provides a small bonus to perception checks"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Delivery Only',
        levelRequirement: 12
    },

    'connectopia_pioneer_logbook': {
        id: 'connectopia_pioneer_logbook',
        name: "The Chronicle of Chaos",
        description: "A battered leather-bound logbook filled with ramblings, half-finished maps, and utterly bizarre observations from long-lost pioneers. It smells faintly of dust, stale rations, and regret – perfect for fueling a grand adventure… or just making you question reality.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 600,
        icon: '📒',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "provides_lore_related_to_connectopia",
            "chance_to_discover_hidden_locations",
            "small_stat_boost (temporary)"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'delivery_truck',
        levelRequirement: 2
    },

    'teyvat_item_windstrider_boots': {
        id: 'teyvat_item_windstrider_boots',
        name: "Zephyr's Embrace",
        description: "Crafted by skilled artisans in Liyue Harbor, these boots are woven with captured wind currents. They’ll make you feel like you're floating on a gentle breeze – great for swift travel and avoiding those grumpy pirates!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '💨',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases movement speed by 15%",
            "grants a small chance to avoid fall damage",
            "reduces wind resistance by 10%"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'swiftcurrent_cart',
        levelRequirement: 7
    },

    'teyvat_item_archon_aegis': {
        id: 'teyvat_item_archon_aegis',
        name: "Aetherium Resonance",
        description: "This shimmering shield, imbued with the Archon's power, protects against both physical and elemental attacks. It hums with barely contained energy – a truly magnificent piece that screams 'I’m important!'  Don't get cocky though; it's still just a shield.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 18000,
        icon: '🛡️',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "absorbs 200 damage from any source",
            "reflects 10% of incoming elemental damage back to the attacker",
            "chance to dispel negative status effects",
            "increases defense by 30%"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'seafarer_ship',
        levelRequirement: 10
    },

    'faerun_item_healing_potion_of_bravery': {
        id: 'faerun_item_healing_potion_of_bravery',
        name: "Potion of Unshakeable Resolve",
        description: "This vibrant crimson potion smells faintly of gunpowder and surprisingly, strawberries. Drinking it will fortify your courage and provide a temporary burst of invincibility - perfect for distracting Wario when he tries to steal your loot!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 400,
        icon: '❤️',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "restores 20 hit points",
            "grants temporary immunity to fear effects (3 rounds)",
            "increases attack rolls by +1 for 2 rounds"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'Standard Delivery',
        levelRequirement: 1
    },

    'curiosity_fate_scroll': {
        id: 'curiosity_fate_scroll',
        name: "Fragment of Foretold Doom",
        description: "A brittle, yellowed scroll filled with cryptic prophecies and unsettling imagery. Touching it briefly grants a fleeting glimpse into possible futures - mostly bad ones, but hey, free visions!  Beware; prolonged exposure might lead to obsessive divination and an unhealthy interest in doom.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '📜',
        stock: 35,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance to gain a temporary negative status effect (e.g., weakness, misfortune)",
            "provides cryptic clues for future quests",
            "small chance to attract unwanted attention from fate itself"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Winged Courier',
        levelRequirement: 3
    },

    'warhammer_iron_corruption': {
        id: 'warhammer_iron_corruption',
        name: "The Rotting Fist",
        description: "A grotesque warhammer crafted from blackened iron, pulsating with a sickly green glow. It seems to actively encourage decay and corruption in those nearby – perfect for sowing chaos among your enemies!  Just don't be surprised when your armor starts to rust...and maybe develop little eyes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '💀',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "damage: physical 4d8 + strength modifier",
            "chance to inflict disease on hit",
            "slows enemy movement speed by 10%",
            "has a small chance to randomly poison the target"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Grim Delivery Service',
        levelRequirement: 11
    },

    'animatopia_favor_token': {
        id: 'animatopia_favor_token',
        name: "Clan Speaker’s Recognition Token",
        description: "This polished stone token is a mark of favor from the esteemed Clan Speakers. Presenting this to a Clan Speaker grants access to exclusive information and potential assistance - though they're notoriously difficult to please!",
        category: SHOP_CATEGORIES.FACTION,
        price: 1800,
        icon: '🗣️',
        stock: 99,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grants access to Clan Speaker’s weekly briefing (information)",
            "provides a +1 bonus to persuasion checks when dealing with Clan Speakers"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'Swift Trotter',
        levelRequirement: 3
    },

    'warhammer_ember_flask': {
        id: 'warhammer_ember_flask',
        name: "Ember Flask of Controlled Chaos",
        description: "A small, obsidian flask filled with swirling embers that seem to whisper forgotten prophecies. When consumed, it briefly grants the user a burst of chaotic energy, altering their stats in unpredictable ways – perfect for disrupting enemy formations or just generally causing mayhem!  Don't blame Wario if you turn into a chicken.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🔥',
        stock: 38,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "temporary increase to strength",
            "chance to inflict confusion",
            "minor damage over time (fire)"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Winged Courier',
        levelRequirement: 1
    },

    'warhammer_oracle_shard': {
        id: 'warhammer_oracle_shard',
        name: "Shard of the Fated Oracle",
        description: "A fragment of a shattered oracle, radiating an aura of unsettling knowledge and potent magic. Holding this shard allows you to glimpse fragments of future battles – though the visions are often cryptic and unreliable, and may even drive you mad! Wario recommends wearing protective goggles... or just ignoring it entirely.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 80000,
        icon: '🔮',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance to see enemy attack patterns",
            "increased resistance to magical damage",
            "chance to gain a temporary buff based on the vision (random)",
            "small chance of summoning a minor demonic entity (unreliable)"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Dimensional Portal',
        levelRequirement: 18
    },

    'faerun_item_waterdeep_merchant_contract': {
        id: 'faerun_item_waterdeep_merchant_contract',
        name: "Waterdeep Merchant Contract",
        description: "A seemingly innocuous contract from a minor Waterdeep merchant. Turns out, it's a key to unlocking exclusive discounts and services within the city – if you can decipher the archaic legal jargon (and bribe the right officials). Wario wouldn’t be caught dead dealing with paperwork!",
        category: SHOP_CATEGORIES.FACTION,
        price: 3500,
        icon: '💼',
        stock: 91,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "discounts at Waterdeep shops (10%)",
            "access to exclusive services (e.g., potion brewing)",
            "increased reputation with Waterdeep merchants"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'messenger_hawk',
        levelRequirement: 5
    },

    'potion_shadows_essence': {
        id: 'potion_shadows_essence',
        name: "Shadows Essence Potion",
        description: "A viscous, inky potion that smells faintly of regret and damp stone. Drink this to briefly shroud yourself in darkness, granting advantage on stealth checks – just don’t expect it to make you charming!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🌑',
        stock: 30,
        rarity: 'common',
        stockType: 'limited_daily',
        effects: [
            "grant_advantage_stealth",
            "temporary_darkvision"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Rune Delivery',
        levelRequirement: 1
    },

    'mushroom_kingdom_item_wario_rocket_boots': {
        id: 'mushroom_kingdom_item_wario_rocket_boots',
        name: "Wario’s Rocket Boots",
        description: "These boots were cobbled together by Wario himself using spare parts and a whole lot of spite. They provide incredible bursts of speed, letting you cover ground faster than a Koopa Troopa on a sugar rush - just don't expect to land gracefully.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🚀',
        stock: 5,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "boost_movement_speed_3",
            "chance_for_stumble"
        ],
        vendor: 'wario_direct',
        shippedBy: 'warp_pipe_express',
        levelRequirement: 6
    },

    'mushroom_kingdom_item_chronal_shard_of_time': {
        id: 'mushroom_kingdom_item_chronal_shard_of_time',
        name: "Chronal Shard of Time",
        description: "A fragment pulled from the fabric of time itself, this shard grants a fleeting glimpse into the future... or maybe just makes you incredibly dizzy. Use it wisely – or don't; Wario wouldn’t care.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 65000,
        icon: '⏳',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "chance_for_time_slowdown",
            "grant_brief_premonition",
            "chance_for_temporal_paradox"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'dimensional_portal',
        levelRequirement: 12
    },

    'equestria_item_canterlot_guard_amulet': {
        id: 'equestria_item_canterlot_guard_amulet',
        name: "Canterlot Guard Amulet of Vigilance",
        description: "Forged by the Royal Guards themselves, this amulet radiates a subtle aura of protection. It’s said to sharpen your senses and grant you unwavering resolve – perfect for facing down grumpy unicorns or dodging falling cupcakes! This is a favored item amongst the Canterlot Guard.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🛡️',
        stock: 18,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "+2 to perception",
            "chance to reflect spells (small)",
            "increased resistance to fear effects"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'royal_carriage',
        levelRequirement: 7
    },

    'equestria_item_starlight_dust': {
        id: 'equestria_item_starlight_dust',
        name: "Stardust of the Celestial Mare",
        description: "Collected from the trails of shooting stars above Equestria, this glittering dust carries echoes of ancient magic. Sprinkle it upon your allies for a temporary boost in magical prowess – or just use it to make everything sparkle! Wario's notes suggest adding it to cake for extra shimmer.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '✨',
        stock: 95,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "restores 20 mana",
            "+3 to magic damage for 10 turns",
            "chance to cast a minor light spell"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'dragon_delivery',
        levelRequirement: 9
    },

    'leclaire_isle_item_pastry_palace_favor': {
        id: 'leclaire_isle_item_pastry_palace_favor',
        name: "Pastry Palace Patronage",
        description: "A sweet token of gratitude from the esteemed Pastry Palace. This intricately decorated gingerbread figurine is said to grant a small boon to those who appreciate fine baked goods – especially if you leave them a generous tip (Wario wouldn't be picky).",
        category: SHOP_CATEGORIES.FACTION,
        price: 1250,
        icon: '🍰',
        stock: 18,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "boosts charisma (5%)",
            "chance to receive a free pastry",
            "positive reputation with the Dough Folk"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'delivery_only',
        levelRequirement: 7
    },

    'leclaire_isle_item_sweet_supplies_spice_bomb': {
        id: 'leclaire_isle_item_sweet_supplies_spice_bomb',
        name: "Volcanic Vanilla Blast",
        description: "A potent concoction of exotic spices and fermented fruit, this small vial explodes with a surprisingly warm vapor upon impact. It's guaranteed to either delight or utterly overwhelm your enemies – Wario loves chaos!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3500,
        icon: '🔥',
        stock: 9,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "deals 12-20 fire damage in a small area",
            "chance to inflict 'sticky' status (reduced movement speed)",
            "creates a lingering aroma that confuses enemies"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'night_delivery',
        levelRequirement: 10
    },

    'warhammer_emberstrike': {
        id: 'warhammer_emberstrike',
        name: "Emberstrike – The Dragon’s Tooth",
        description: "This warhammer pulses with residual heat, resembling a dragon's tooth. It carries the fury of volcanic eruptions and is said to have been blessed (or cursed) by an ancient fire elemental. Wario would probably try to use it as a hammer for smashing things – don’t let him!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🔥',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "damage: 8-10 fire damage",
            "chance to ignite enemies",
            "deals bonus damage against undead"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Magma Transport Vessel',
        levelRequirement: 11
    },

    'grand_country_warp_scroll': {
        id: 'grand_country_warp_scroll',
        name: "Temporal Slip Scroll",
        description: "This exquisitely drawn scroll, penned with shimmering inks and bound in dragon scale, allows for a short-range temporal displacement. Don’t worry about paradoxes; the scroll only shifts you *slightly* – usually just enough to avoid that pesky rockslide or get a better view of Wario's latest treasure hoard.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 12000,
        icon: '⏳',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "short_range_teleportation (max 10ft)",
            "chance to rewind time by a few seconds (low chance)",
            "minor resistance to temporal anomalies"
        ],
        vendor: 'side_seller',
        shippedBy: 'dimensional_messenger',
        levelRequirement: 10
    },

    'middle_earth_elven_favor_token': {
        id: 'middle_earth_elven_favor_token',
        name: "The Silvan Stewardship Token",
        description: "This intricately carved token was granted to a loyal messenger of the Silvan Elves. It doesn't actually *do* anything, per se... unless you convince it otherwise with copious amounts of honey and polite conversation. Perhaps it can sway the forest spirits to your side?",
        category: SHOP_CATEGORIES.FACTION,
        price: 3200,
        icon: '🌿',
        stock: 45,
        rarity: 'epic',
        stockType: 'delivery_only',
        effects: [
            "increases reputation with the Elves of Rivendell",
            "chance to receive a free healing potion from Elven merchants (10%)",
            "grants advantage on persuasion checks involving nature-based creatures"
        ],
        vendor: 'elven_market',
        shippedBy: 'giant_eagle',
        levelRequirement: 10
    },

    'pokemon_item_evolution_potion': {
        id: 'pokemon_item_evolution_potion',
        name: "Radiant Evolution Elixir",
        description: "A shimmering, rainbow-colored potion that promises a swift and glorious evolution! Just gulp it down and hope for the best – side effects may include temporary color blindness or an uncontrollable urge to collect shiny Pokémon. Wario doesn't guarantee it will work on anything but normal Pokemon.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '🧪',
        stock: 88,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to evolve pokemon at level 1",
            "restores 25% HP"
        ],
        vendor: 'pokemart',
        shippedBy: 'delivery_drone',
        levelRequirement: 3
    },

    'pokemon_item_lucky_trainer_badge': {
        id: 'pokemon_item_lucky_trainer_badge',
        name: "Badge of the Temporal Shift",
        description: "This tarnished badge isn’t just for show; it subtly manipulates time around you, granting a slight advantage in battle! It's said to have been forged by a legendary trainer obsessed with perfecting their strategies – Wario thinks they were just really bad at battles. Use wisely or risk creating paradoxes!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🕰️',
        stock: 15,
        rarity: 'uncommon',
        stockType: 'special_order',
        effects: [
            "chance to dodge attacks",
            "increases critical hit chance by 5%",
            "restores a small amount of PP"
        ],
        vendor: 'league_store',
        shippedBy: 'magikarp_messenger',
        levelRequirement: 5
    },

    'teyvat_item_frost_amulet': {
        id: 'teyvat_item_frost_amulet',
        name: "Amulet of the Frozen Heart",
        description: "Crafted from a shard of glacial ice and imbued with the essence of Cryo, this amulet radiates chilling energy. It's rumored to have been favored by ancient frost giants—though Wario isn’t quite sure why they liked wearing jewelry.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '❄️',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "reduces fire damage taken by 10%",
            "provides a chance to freeze enemies on hit",
            "slows enemy movement speed by 15%"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'ice_ship',
        levelRequirement: 10
    },

    'faerun_item_potion_of_mushroom_confusion': {
        id: 'faerun_item_potion_of_mushroom_confusion',
        name: "Potion of Fungal Frenzy",
        description: "A bubbling, iridescent potion brewed from rare Faerûnian mushrooms. This concoction induces a state of delightful confusion – your enemies will stumble, giggle uncontrollably, and possibly attempt to eat the floor. Don't say I didn’t warn you!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🍄',
        stock: 28,
        rarity: 'common',
        stockType: 'limited_daily',
        effects: [
            "confusion chance +40% for 3 rounds",
            "target is lightly charmed",
            "chance to sneeze violently (15%)"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'hawk',
        levelRequirement: 2
    },

    'faerun_item_amulet_of_wario_s_luck': {
        id: 'faerun_item_amulet_of_wario_s_luck',
        name: "Wario's Favor Amulet",
        description: "An oddly shaped amulet crafted from polished gemstones and faintly smelling of jelly. Legend says it was blessed by Wario himself, granting the wearer a touch of his chaotic good fortune – mostly involving finding extra coins and dodging nasty traps. Just try not to eat everything you find!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 75000,
        icon: '💰',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "increased critical hit chance +10%",
            "advantage on saving throws against traps and hazards",
            "chance to find valuable items when searching (20%)",
            "temporary hit points (50)"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'delivery_ship',
        levelRequirement: 16
    },

    'kivotos_item_ritual_candle_of_inspiration': {
        id: 'kivotos_item_ritual_candle_of_inspiration',
        name: "Spark of Genius",
        description: "This shimmering candle is made with rare luminescent wax and emits a faint aura of creativity. Simply lighting it can spark brilliant ideas or unlock hidden potential, making it a valuable tool for artists, inventors, and anyone who needs a little nudge – even Wario when he's trying to design a new gadget.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '🕯️',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to gain a temporary bonus to any skill check (10%)",
            "provides a small boost to creativity (reduces time spent on creative tasks by 1 turn)",
            "emits a calming glow"
        ],
        vendor: 'club_supply',
        shippedBy: 'package_delivery',
        levelRequirement: 2
    },

    'the_edge_whisperstone': {
        id: 'the_edge_whisperstone',
        name: "Echoes of the Voidshard",
        description: "This pulsating stone hums with the whispers of forgotten realities, granting brief glimpses into potential futures...or just really unsettling static. Holding it for too long can cause a maddening sense of disorientation – Wario would probably just steal your socks!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '🔮',
        stock: 7,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance to grant a vision of the next turn's enemy action.",
            "small chance to inflict confusion for 1 round.",
            "increases sanity by 5 (temporary)"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'dimensional rift',
        levelRequirement: 7
    },

    'the_edge_rune_sculpting': {
        id: 'the_edge_rune_sculpting',
        name: "Voidforger's Touch",
        description: "A master Rune Sculptor will painstakingly inscribe protective runes onto your chosen weapon or armor. These aren’t just pretty patterns; they actively bolster defenses against the corrupting energies of The Edge, but beware - a misaligned rune could bring bad luck for days!",
        category: SHOP_CATEGORIES.SERVICES,
        price: 8000,
        icon: '⚒️',
        stock: 35,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "+2 Armor Class",
            "+1 to Saving Throws against Fear and Madness effects",
            "chance to deflect a single attack with an arcane shield."
        ],
        vendor: 'edge_outpost',
        shippedBy: 'messenger hawk',
        levelRequirement: 12
    },

    'the_edge_blackheart_charm': {
        id: 'the_edge_blackheart_charm',
        name: "A Bargain with the Abyss",
        description: "This obsidian charm feels strangely warm to the touch, and it seems to subtly influence your decisions towards… less savory pursuits. Wario loves this thing - just don't ask him *why*.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 600,
        icon: '🖤',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "+1 to Dexterity (temporary)",
            "chance to gain advantage on persuasion checks with shady characters.",
            "small chance to attract unwanted attention from monstrous entities."
        ],
        vendor: 'final_shop',
        shippedBy: 'winged courier',
        levelRequirement: 3
    },

    'animatopia_sunstone_charm': {
        id: 'animatopia_sunstone_charm',
        name: "Sunstone Charm of the Howling Wind",
        description: "This pulsating orange charm, harvested from a sun-drenched ravine, seems to whisper ancient tribal songs. When worn, it grants you a momentary burst of speed and allows you to understand the basic communications of the local wildlife – mostly complaints about noisy predators.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '☀️',
        stock: 5,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grant_speed_3",
            "understand_animal_speech",
            "resistance_to_fear"
        ],
        vendor: 'tribal_trader',
        shippedBy: 'Giant Beetle Post',
        levelRequirement: 7
    },

    'animatopia_ember_potion': {
        id: 'animatopia_ember_potion',
        name: "Emberheart Potion",
        description: "Brewed from the solidified tears of a volcanic badger, this fiery red potion instantly restores vitality and imparts a warm glow. It smells vaguely of burnt berries and frustrated grunts – perfect for when you've been wrestling with oversized, grumpy squirrels.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🔥',
        stock: 99,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "restore_health_50",
            "grant_temporary_warmth"
        ],
        vendor: 'forest_market',
        shippedBy: 'Winged Squirrel Courier',
        levelRequirement: 1
    },

    'internet_meme_totem': {
        id: 'internet_meme_totem',
        name: "Distorted Reality Totem",
        description: "Crafted from a solidified, confused thought, this totem hums with the energy of millions of internet memes. Holding it allows you to briefly warp your perception of reality – objects might flicker, sounds distort, and you'll find yourself inexplicably craving pineapple on pizza. It’s weird…but strangely effective.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 75000,
        icon: '🤪',
        stock: 8,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "Chance to cause temporary confusion in enemies (30%)",
            "Provides resistance to psychic damage",
            "Grants a small chance to teleport short distances (1%)"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Quantum Courier',
        levelRequirement: 22
    },

    'equestria_item_grumpy_gloomstone': {
        id: 'equestria_item_grumpy_gloomstone',
        name: "Grumpy Gloomstone of Discord",
        description: "A sullen stone unearthed from the darkest corner of Nightmare's realm. Touching this gloomy gem inflicts a temporary state of irritation and distrust on nearby allies, potentially disrupting party cohesion! Wario would absolutely love to use this for pranks.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '🌑',
        stock: 12,
        rarity: 'common',
        stockType: 'night_only',
        effects: [
            "reduces party coordination by 20%",
            "chance to inflict 'argument' status effect on allies for 3 turns",
            "decreases healing effectiveness by 10%",
            "emits a faint aura of negativity"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Delivery Pony',
        levelRequirement: 2
    },

    'kivotos_item_spell_analysis_rune': {
        id: 'kivotos_item_spell_analysis_rune',
        name: "Arcane Decoder Ring",
        description: "Ever wondered what a mage is *really* saying? This rune instantly translates spell effects into plain English (or whatever language you prefer!). It's perfect for scouting enemy tactics and figuring out how to counter their flashy tricks – plus, it looks super cool on your finger!",
        category: SHOP_CATEGORIES.SERVICES,
        price: 800,
        icon: '🔍',
        stock: 15,
        rarity: 'epic',
        stockType: 'delivery_only',
        effects: [
            "scan_spell_effect",
            "reveal_enemy_weakness",
            "chance_to_dispel_magic"
        ],
        vendor: 'club_supply',
        shippedBy: 'Magical Courier',
        levelRequirement: 10
    },

    'kivotos_item_cipher_scroll_of_confusion': {
        id: 'kivotos_item_cipher_scroll_of_confusion',
        name: "The Misdirection Manuscript",
        description: "This ancient scroll is filled with cryptic symbols and unsettling illustrations. Unfurling it releases a wave of mental disarray, causing enemies to become momentarily confused and distracted—just what you need when trying to sneak past the Headmaster's pet guard dog!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '😵‍💫',
        stock: 8,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "chance to confuse target (30%) on use",
            "target has disadvantage on attack rolls for 1 turn",
            "increased chance of friendly fire (5%) if used near allies"
        ],
        vendor: 'club_supply',
        shippedBy: 'drone_delivery',
        levelRequirement: 5
    },

    'teyvat_item_ember_heart': {
        id: 'teyvat_item_ember_heart',
        name: "Ember Heart Fragment",
        description: "A pulsating shard of solidified flame, said to be a tear shed by the Anemo Archon when he first witnessed the beauty of Mondstadt. Holding it grants a small warmth and a surprisingly effective distraction for enemies – they just want to feel its heat!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🔥',
        stock: 35,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "fire_resistance_4",
            "minor_healing_1",
            "chance_to_ignite_enemy"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'Swiftwind Courier',
        levelRequirement: 9
    },

    'teyvat_item_scroll_of_lost_echoes': {
        id: 'teyvat_item_scroll_of_lost_echoes',
        name: "Scroll of Lost Echoes",
        description: "This ancient scroll, recovered from the ruins beneath Liyue Harbor, whispers with fragmented memories of forgotten seafaring traders. Unrolling it allows you to briefly glimpse a tactical advantage - though be warned, sometimes you see a particularly grumpy crab!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '📜',
        stock: 72,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "reveals_hidden_paths_15%",
            "chance_to_discover_treasure_3%"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'Sea Serpent Express',
        levelRequirement: 2
    },

    'teyvat_item_chronos_shard': {
        id: 'teyvat_item_chronos_shard',
        name: "Chronos Shard of Eternity",
        description: "A fragment ripped from the fabric of time itself, this shard pulses with an unnerving stillness. Wario always wanted to go back and change one thing... but this might just give you a slight advantage in battle - or at least slow down those pesky adventurers!",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 850000,
        icon: '⏳',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "chance_to_stop_enemy_movement",
            "increase_defense_50",
            "slow_down_target_3s"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'Dimensional Rift Delivery',
        levelRequirement: 35
    },

    'grand_country_wormhole_tea': {
        id: 'grand_country_wormhole_tea',
        name: "Temporal Tincture Brew",
        description: "This unsettlingly shimmering tea, brewed from rare root vegetables grown in inverted valleys, promises fleeting glimpses into possible futures...or just a really strong stomachache.  Drink with caution; the future is notoriously grumpy.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 600,
        icon: '⏳',
        stock: 91,
        rarity: 'common',
        stockType: 'night_only',
        effects: [
            "chance to see a brief vision of the future (low chance)",
            "slightly increased reaction time",
            "minor healing effect",
            "causes uncontrollable giggling for 1 round"
        ],
        vendor: 'side_seller',
        shippedBy: 'giant_snail',
        levelRequirement: 2
    },

    'animatopia_glowstone_berry': {
        id: 'animatopia_glowstone_berry',
        name: "Glowstone Berry Pouch",
        description: "These plump berries, harvested from the glowing caves beneath Animatopia, pulse with a faint light and provide a surprising burst of energy. They are prized by scouts for their ability to illuminate dark passages and offer minor healing when consumed!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '✨',
        stock: 38,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "restores 10 HP",
            "provides dim light for 1 hour"
        ],
        vendor: 'forest_market',
        shippedBy: 'swift rabbit courier',
        levelRequirement: 3
    },

    'equestria_item_forbidden_shadow_mane': {
        id: 'equestria_item_forbidden_shadow_mane',
        name: "Forbidden Shadow Mane Fragment",
        description: "Whispers say this fragment was ripped from a nightmare pony's mane. Touching it induces unsettling visions and a sudden craving for dark berries – don’t say I didn’t warn you! It’s said to grant limited shadow manipulation, but at a cost...",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 6500,
        icon: '🌑',
        stock: 8,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "shadow damage +10",
            "chance to inflict fear (20%)",
            "temporary invisibility (3 turns)"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Grimshade Courier',
        levelRequirement: 12
    },

    'equestria_item_sparkling_hoof_charm': {
        id: 'equestria_item_sparkling_hoof_charm',
        name: "Sparkling Hoof Charm",
        description: "Crafted from a genuine pony hoof (don't ask how!), this charm is said to bring good luck and speed. It’s surprisingly effective for boosting movement and agility, though some claim it smells faintly of apples...and regret.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🐴',
        stock: 95,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "movement speed +2",
            "dodge chance +10%",
            "small luck buff"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Royal Mail Pegasus',
        levelRequirement: 3
    },

    'animatopia_tribal_totem': {
        id: 'animatopia_tribal_totem',
        name: "Clan Protector Totem",
        description: "Crafted by the esteemed Beast-Bazaar artisans, this imposing totem radiates a defensive aura. It’s rumored to appease territorial spirits and offer a small shield against wild animal aggression – though Wario might just want to smash it.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🛡️',
        stock: 18,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased armor class (2)",
            "chance to mitigate wild animal attacks (5%)",
            "provides a small area of calming influence"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'giant_beetle',
        levelRequirement: 7
    },

    'animatopia_harmony_scroll': {
        id: 'animatopia_harmony_scroll',
        name: "Song of the Shifting Sands",
        description: "A sacred scroll containing ancient melodies, this artifact is a prized possession of the Tribal Trader. Playing it grants temporary serenity and boosts social interaction with Animatopian tribes – perfect for negotiating… or bribing!",
        category: SHOP_CATEGORIES.FACTION,
        price: 12000,
        icon: '🎶',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increased charisma (15%)",
            "chance to gain favor with tribal leaders",
            "reduces hostility from animal encounters"
        ],
        vendor: 'tribal_trader',
        shippedBy: 'river_turtle',
        levelRequirement: 10
    },

    'internet_firewall_shard': {
        id: 'internet_firewall_shard',
        name: "Null-Space Stabilizer",
        description: "A fragment of a collapsed firewall, this shimmering shard resonates with the void between digital realities. Holding it allows you to briefly phase out of attacks and manipulate data flows - though overuse can lead to unpleasant glitches. Wario’s warned us to not stare at it for too long!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🛡️',
        stock: 12,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Grants +3 to Armor Class",
            "Chance to negate a single physical attack roll",
            "Provides resistance to digital effects"
        ],
        vendor: 'cyber_market',
        shippedBy: 'encrypted_transmission',
        levelRequirement: 8
    }
};
