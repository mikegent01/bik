// Shop items file 81
// Generated: 2026-03-22 19:50:04
// Items: 100

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_081 = {
    'grand_country_item_mk.97_falling_ladder_bearer': {
        id: 'grand_country_item_mk.97_falling_ladder_bearer',
        name: "Mk.97 Falling Ladder Bearer",
        description: "This intricately crafted ladder-bearer is constructed from polished granite and shimmering, descending metal. It’s designed to hold a single user during precarious falls, allowing for controlled descent into the deepest layers.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '⬇️',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "significantly reduces fall damage (75%)",
            "provides a stable platform for descent",
            "increases movement speed during descent by 20%",
            "allows the user to briefly control their vertical positioning"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Airship - Premium',
        levelRequirement: 42
    },

    'almost_edge_item_obsidian_heralds_whispers': {
        id: 'almost_edge_item_obsidian_heralds_whispers',
        name: "Obsidian Herald's Whispers",
        description: "These jagged obsidian fragments pulse with the chilling voices of those who fell beyond the edge, offering glimpses into fractured timelines and unsettling prophecies. Holding them allows you to briefly perceive echoes of events that never quite reached their conclusion – a dangerous but potentially lucrative skill.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 875,
        icon: '🔮',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Gain temporary insight into past events.",
            "Chance to trigger a brief vision of the void.",
            "Minor chance to inflict 'Doubt' status on an enemy.",
            "Increases perception by 5% for 30 seconds"
        ],
        vendor: 'void_merchant',
        shippedBy: 'Void Delivery Drone',
        levelRequirement: 12
    },

    'almost_edge_item_threshold_whispers_of_forgotten': {
        id: 'almost_edge_item_threshold_whispers_of_forgotten',
        name: "Threshold Whispers of Forgotten",
        description: "Crafted from solidified twilight and etched with glyphs lost to time, these shimmering orbs contain the lamentations of countless souls who succumbed to the edge.  Listening to them can unlock fragmented memories – though deciphering their true meaning is a task for the truly patient (and possibly insane).",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '👂',
        stock: 8,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Heals a small amount of HP.",
            "Grants temporary access to the 'Lost Knowledge' skill tree (chance).",
            "Reduces fear effects by 20% for 15 minutes.",
            "Provides minor protection against void-based attacks."
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Dimensional Courier',
        levelRequirement: 35
    },

    'almost_edge_item_mk20_threshold_whispers': {
        id: 'almost_edge_item_mk20_threshold_whispers',
        name: "Mk.20 Threshold Whispers",
        description: "These intricately crafted, miniature obsidian horns resonate with the raw energy of the threshold. When activated, they emit a concentrated pulse that momentarily disrupts reality around you – a chaotic yet potent tool for both offense and evasion.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🔊',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Chance to inflict 'Disorientation' status on an enemy.",
            "Briefly increases movement speed.",
            "Creates a small void rift that damages nearby enemies (small area).",
            "Reduces incoming damage by 10% for 60 seconds."
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Dimensional Delivery Swarm',
        levelRequirement: 48
    },

    'connectopia_item_chronometric_block_singer': {
        id: 'connectopia_item_chronometric_block_singer',
        name: "The Chronometric Block Singer's Ballad",
        description: "This blocky instrument resonates with temporal echoes, emitting a haunting melody that briefly slows the passage of time around the listener. Crafted from solidified chronolith and imbued with a pioneer’s lament, it grants a momentary advantage in frantic situations – perfect for dodging falling debris or snatching a valuable blueprint.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '⏱️',
        stock: 7,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "Temporarily slows time for the user.",
            "Restores a small amount of stamina.",
            "Increases crafting speed by 15% for 30 seconds.",
            "Emits a distracting sonic pulse, briefly stunning nearby enemies."
        ],
        vendor: 'craft_corner',
        shippedBy: 'delivery_only',
        levelRequirement: 35
    },

    'connectopia_item_grim_block_blueprint_engineer': {
        id: 'connectopia_item_grim_block_blueprint_engineer',
        name: "Grim Engineer’s Blocky Blueprint Recitation",
        description: "A chilling, blocky blueprint etched onto a piece of solidified obsidian. Touching the blueprint triggers an auditory hallucination - a whispered instruction from a long-dead engineer detailing the construction of a highly advanced block structure. This rare item could hold secrets to building defenses or accessing forgotten areas within Connectopia’s sprawling frontier.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '📜',
        stock: 23,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Provides a chance to instantly decipher complex blueprints.",
            "Grants temporary insight into structural weaknesses in blocks.",
            "Reveals hidden pathways within a 10-meter radius.",
            "Causes the user to experience brief, unsettling visions."
        ],
        vendor: 'pioneer_post',
        shippedBy: 'shipping_drone',
        levelRequirement: 28
    },

    'connectopia_item_blocky_blueprints_of_frontier_architect': {
        id: 'connectopia_item_blocky_blueprints_of_frontier_architect',
        name: "Blocky Blueprints of Frontier Architect's Dispatch",
        description: "A set of intricately detailed blueprints, each meticulously rendered in solidified block material. This collection outlines the construction of several key buildings and structures within Connectopia’s nascent settlements – including fortifications, workshops, and living quarters. Holding this dispatch grants a small bonus to building speed.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6000,
        icon: '🧱',
        stock: 47,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Increases building speed by 10%.",
            "Reduces the cost of block-based construction.",
            "Provides a small bonus to resource gathering.",
            "Grants proficiency in blueprint interpretation."
        ],
        vendor: 'block_smith',
        shippedBy: 'delivery_drone',
        levelRequirement: 15
    },

    'the_edge_item_spectral_abyss_weaver_7': {
        id: 'the_edge_item_spectral_abyss_weaver_7',
        name: "The Spectral Abyss Weaver VII",
        description: "This intricate device, crafted from solidified twilight and captured screams, vibrates with a faint, chilling resonance. When activated, it temporarily exposes the user to the raw anxieties of the abyss, granting heightened perception but leaving them vulnerable to unsettling visions – use with extreme caution.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🌌',
        stock: 8,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increases perception by 30% for 60 seconds",
            "chance to trigger a terrifying hallucination (5%)",
            "resistance to fear effects",
            "grants faint spectral camouflage"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'Dimensional Slipstream Courier',
        levelRequirement: 30
    },

    'the_edge_item_crimson_abyss_trace_22': {
        id: 'the_edge_item_crimson_abyss_trace_22',
        name: "Crimson Abyss Trace 22 - The Lament of Dust",
        description: "A solidified residue from a fallen star, saturated in the echoes of forgotten screams. This trace burns with an unsettling crimson glow and pulses with the faint rhythm of decaying realities – its use promises fleeting glimpses into alternate timelines, but risks fracturing your own mind.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8500,
        icon: '🔥',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "instantly heals 75 HP",
            "chance to inflict 'Temporal Distortion' (10%) - reduces enemy attack speed by 20% for 30 seconds",
            "provides minor protection against dimensional instability",
            "slows time slightly when consumed"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'Automated Drone Delivery System',
        levelRequirement: 20
    },

    'the_edge_item_cursed_abyss_observer_49': {
        id: 'the_edge_item_cursed_abyss_observer_49',
        name: "The Cursed Abyss Observer - Model 49",
        description: "This unsettling device, constructed from blackened metal and etched with cryptic symbols, appears to endlessly scan the surrounding darkness. Prolonged use induces paranoia and a compulsion to stare into the void – its purpose remains shrouded in a forbidden ritual.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5000,
        icon: '👁️',
        stock: 17,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "grants passive vision in dark areas",
            "chance to reveal hidden enemies (15%)",
            "causes a minor decrease in sanity over time",
            "provides a small bonus to observation skills"
        ],
        vendor: 'final_shop',
        shippedBy: 'Shadow Delivery Service',
        levelRequirement: 15
    },

    'kivotos_item_the_gradient_bands_of_academy': {
        id: 'kivotos_item_the_gradient_bands_of_academy',
        name: "The Gradient Bands of Academy",
        description: "These bands, meticulously crafted from solidified student ambition and iridescent data streams, pulse with a faint, hypnotic gradient. Wearing them grants enhanced focus during academic pursuits, but prolonged exposure can induce obsessive study habits and a desire to achieve absolute scholastic perfection.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '📚',
        stock: 47,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increased Focus (+25%)",
            "Enhanced Memory Recall",
            "Minor Resistance to Mental Fatigue"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Courier',
        levelRequirement: 25
    },

    'kivotos_item_cursed_bearer_of_the_final_exam': {
        id: 'kivotos_item_cursed_bearer_of_the_final_exam',
        name: "Cursed Bearer of the Final Exam",
        description: "Forged in the crucible of a failed graduate’s despair, this wristband is rumored to contain fragments of every final exam ever administered within Academy City. Touching it grants a brief, unsettling glimpse into potential failure – offering terrifyingly accurate predictions of upcoming tests, but at the cost of crippling anxiety.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '💀',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "Probability Prediction (Low Chance of Accurate Predictions)",
            "Anxiety Amplification (-50% Confidence)",
            "Minor Resistance to Academic Pressure"
        ],
        vendor: 'club_supply',
        shippedBy: 'Night Delivery Bot',
        levelRequirement: 40
    },

    'kivotos_item_mk95_graduate_bands_of_harmony': {
        id: 'kivotos_item_mk95_graduate_bands_of_harmony',
        name: "Mk.95 Graduate Bands of Harmony",
        description: "These bands, produced by the Academy Armory's most dedicated artisans, are infused with stabilized harmonic resonance from successful graduation ceremonies. They emit a subtle calming aura and enhance group cohesion – though prolonged use can lead to unsettlingly synchronized behavior among wearers.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 23000,
        icon: '🎶',
        stock: 5,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "Group Cohesion (+75%)",
            "Calming Aura (Reduces Stress)",
            "Harmonic Resonance Amplification",
            "Resistance to Disruptive Influence"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Royal Airship Courier',
        levelRequirement: 50
    },

    'teyvat_item_crimson_guardian_billet_of_flux': {
        id: 'teyvat_item_crimson_guardian_billet_of_flux',
        name: "The Crimson Guardian’s Billet of Flux",
        description: "This billet pulses with raw hydro energy, channeling the volatile currents beneath Liyue Harbor. When struck, it unleashes a focused torrent capable of momentarily disrupting elemental shields and bolstering your own defensive capabilities. A relic favored by the Crimson Tide faction.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '💧',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases hydro defense by 20%",
            "chance to disrupt elemental shields on hit",
            "restores minor health upon critical strike",
            "boosts movement speed for 3 seconds"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'cartwright\'s delivery services',
        levelRequirement: 25
    },

    'teyvat_item_wicked_guardian_billet_of_tempest': {
        id: 'teyvat_item_wicked_guardian_billet_of_tempest',
        name: "The Wicked Guardian’s Billet of Tempest",
        description: "Forged during a furious storm near Mondstadt, this billet crackles with wicked anemo energy. Upon impact, it creates a localized whirlwind that pushes enemies back and can briefly disable their elemental abilities. It is rumored to be favored by the Skyborn Vigilants.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 950,
        icon: '🌪️',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "increases anemo defense by 15%",
            "creates a small whirlwind on hit (pushes back enemies)",
            "chance to silence enemy abilities for 2 seconds",
            "slightly increases critical strike chance"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'windrider express',
        levelRequirement: 18
    },

    'teyvat_item_hydro_billet_of_elemental_resonance_73': {
        id: 'teyvat_item_hydro_billet_of_elemental_resonance_73',
        name: "Hydro Billet of Elemental Resonance - 73",
        description: "This uniquely crafted billet, infused with the essence of the Seven Nations' combined hydro flow, allows for amplified elemental control. When utilized in combat, it grants enhanced channeling abilities and a significant boost to water-based attacks. A prized possession within Inazuma Imports.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 5200,
        icon: '🌊',
        stock: 8,
        rarity: 'epic',
        stockType: 'delivery_only',
        effects: [
            "increases hydro attack damage by 30%",
            "reduces water-based ability cooldowns by 20%",
            "chance to create a small wave upon hit (damages nearby enemies)",
            "provides increased resistance to all elemental effects for 10 seconds"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'sea serpent courier',
        levelRequirement: 40
    },

    'middle_earth_item_the_shadowborn_ring_of_gondor': {
        id: 'middle_earth_item_the_shadowborn_ring_of_gondor',
        name: "The Shadowborn Ring of Gondor",
        description: "This blackened iron ring, etched with fading images of the White Tower, pulses with a chilling resonance. Wearing it grants temporary resistance to fear and allows the wearer to briefly perceive the paths taken by lingering shadows, revealing hidden dangers or forgotten passages.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🌑',
        stock: 5,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "increased fear resistance",
            "reveals hidden shadows",
            "chance to detect traps",
            "temporarily reduces vulnerability to dark magic"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_pony',
        levelRequirement: 40
    },

    'middle_earth_item_brutal_borns_ember_of_moria': {
        id: 'middle_earth_item_brutal_borns_ember_of_moria',
        name: "Brutal Born's Ember of Moria",
        description: "Forged within the heart of a dying magma vein deep beneath Mount Doom, this pulsating ember crackles with barely contained heat and raw volcanic energy. Consuming it grants temporary strength and resilience while searing enemies with intense flames, but carries a risk of uncontrolled combustion.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 6500,
        icon: '🔥',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "increased strength and damage",
            "causes burning effect on enemies",
            "temporary fire resistance",
            "chance to inflict 'burning' status"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'dire_wolf',
        levelRequirement: 25
    },

    'middle_earth_item_the_cursed_stone_of_rivendell': {
        id: 'middle_earth_item_the_cursed_stone_of_rivendell',
        name: "The Cursed Stone of Rivendell",
        description: "This smooth, grey stone radiates a subtle aura of melancholy and regret. Holding it for prolonged periods induces vivid nightmares filled with lost memories and forgotten sorrows, but also grants glimpses into the true intentions of others - though at a terrible cost to one's own sanity.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 900,
        icon: '💀',
        stock: 33,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "chance to reveal hidden truths",
            "causes nightmares (temporary debuff)",
            "increased perception of deception",
            "chance to inflict 'confusion' status"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_express',
        levelRequirement: 15
    },

    'connectopia_item_the_resonant_fountain_of_stonyfalls': {
        id: 'connectopia_item_the_resonant_fountain_of_stonyfalls',
        name: "The Resonant Fountain of Stonyfalls",
        description: "A meticulously crafted, cubic fountain constructed from solidified sonic resonance. When activated, it emits a low hum that strengthens nearby block structures and temporarily boosts the efficiency of crafting processes - but beware its unholy vibrations can cause minor structural instability.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🔊',
        stock: 8,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increases crafting speed by 15%",
            "temporarily strengthens block structures (+50 durability)",
            "emits a calming hum (reduces stress levels)",
            "chance to generate minor structural reinforcement"
        ],
        vendor: 'craft_corner',
        shippedBy: 'airship',
        levelRequirement: 32
    },

    'connectopia_item_the_fallen_gearworks_of_granitecrest': {
        id: 'connectopia_item_the_fallen_gearworks_of_granitecrest',
        name: "The Fallen Gearworks of Granitecrest",
        description: "A complex assembly of interlocking, rusted gear components salvaged from a forgotten pioneer settlement. These fallen components, when combined, can be used to create highly durable and precisely calibrated mechanical devices - though their past origins may hold unforeseen consequences.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8500,
        icon: '⚙️',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased mechanical device durability (+20%)",
            "provides a chance to discover blueprints for advanced machines",
            "reduces repair time by 10%",
            "minor chance of generating scrap metal"
        ],
        vendor: 'block_smith',
        shippedBy: 'wagon',
        levelRequirement: 25
    },

    'connectopia_item_the_uncanny_chronometric_module_7': {
        id: 'connectopia_item_the_uncanny_chronometric_module_7',
        name: "The Uncanny Chronometric Module 7",
        description: "A strangely pulsating, obsidian module recovered from the ruins of a time-research outpost. This device allows for minor temporal manipulations - primarily slowing down small objects or briefly repeating simple actions – but prolonged use risks creating unstable chronal distortions.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5800,
        icon: '⏳',
        stock: 15,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "slows down the movement speed of small objects by 30% for 10 seconds",
            "allows for the brief repetition of a single action (e.g., crafting)",
            "minor chance to experience fragmented flashbacks",
            "increases perception by 5%"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'drone',
        levelRequirement: 18
    },

    'middle_earth_item_the_sunstone_shaper': {
        id: 'middle_earth_item_the_sunstone_shaper',
        name: "The Sunstone Shaper",
        description: "These phials, meticulously crafted by dwarven artisans in the depths of Khazad-dûm, contain concentrated sunlight captured during a rare celestial alignment. Imbibing this liquid grants temporary resistance to shadow and invigorates the spirit with warmth, bolstering courage against fear.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '☀️',
        stock: 45,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases courage by 30%",
            "provides resistance to shadow damage for 60 seconds",
            "restores 20 health points"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'dragon_cart',
        levelRequirement: 15
    },

    'middle_earth_item_the_zealous_root_curiosity': {
        id: 'middle_earth_item_the_zealous_root_curiosity',
        name: "The Zealous Root Curiosity",
        description: "A pulsating, violet root harvested from the corrupted heart of a Whisperwood grove. Its viscous sap emits an unsettling hum, said to briefly enhance perception and grant fleeting glimpses into the memories of lost souls – though sanity is often a fleeting companion.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8750,
        icon: '🔮',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "temporarily increases perception by 50%",
            "allows the user to briefly see echoes of past events (chance to induce madness)",
            "provides a small chance of revealing hidden pathways."
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_owl',
        levelRequirement: 30
    },

    'middle_earth_item_mk_78_godly_phial_of_anor': {
        id: 'middle_earth_item_mk_78_godly_phial_of_anor',
        name: "Mk.78 Godly Phial of Anor",
        description: "Forged during the reign of King Elessar himself, this phial contains a fragment of the light that banished Sauron. Touching it radiates a powerful aura of hope and righteous fury, capable of momentarily bolstering defenses against dark magic and corrupting influences.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 75000,
        icon: '✨',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "grants immunity to fear and despair effects for 120 seconds",
            "provides a significant boost to attack damage against undead creatures",
            "heals grievous wounds at an accelerated rate."
        ],
        vendor: 'shire_shop',
        shippedBy: 'white_horse',
        levelRequirement: 50
    },

    'middle_earth_item_the_echoing_herald_of_gondor': {
        id: 'middle_earth_item_the_echoing_herald_of_gondor',
        name: "The Echoing Herald of Gondor",
        description: "This tarnished silver herald, etched with the crest of Minas Tirith, vibrates with a faint echo of battle cries. When held aloft during moments of peril, it grants temporary resistance to fear and inspires courage in nearby allies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '🛡️',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased courage",
            "resistance to fear",
            "minor morale boost"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_express',
        levelRequirement: 15
    },

    'middle_earth_item_the_rune_of_silken_shadows': {
        id: 'middle_earth_item_the_rune_of_silken_shadows',
        name: "The Rune of Silken Shadows",
        description: "A fragmented rune carved from obsidian, pulsating with a subtle, cold darkness. When activated, it briefly shrouds the user in invisibility and grants limited passage through shadowed areas.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '👻',
        stock: 18,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "temporary invisibility",
            "increased stealth",
            "shadow step (short range)"
        ],
        vendor: 'elven_market',
        shippedBy: 'dragon_air',
        levelRequirement: 30
    },

    'middle_earth_item_the_cursed_shard_of_morgoth': {
        id: 'middle_earth_item_the_cursed_shard_of_morgoth',
        name: "The Cursed Shard of Morgoth",
        description: "A jagged piece of black crystal, radiating intense malevolent energy. Holding it for too long induces paranoia and whispers insidious suggestions. It can briefly disrupt magical effects but at a great personal cost.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 8000,
        icon: '🔥',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "disrupt magical effects (chance)",
            "paranoia (temporary)",
            "minor corruption (cumulative)"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'dire_wolf',
        levelRequirement: 45
    },

    'almost_edge_item_fringe_fragments_of_liminal_keeper': {
        id: 'almost_edge_item_fringe_fragments_of_liminal_keeper',
        name: "The Fringe Fragments of Liminal Keeper",
        description: "These jagged shards hum with the unsettling quiet of the edge. Holding them grants a fleeting awareness of the boundary, allowing you to momentarily resist the pull towards oblivion – though not without a chilling resonance.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '⚠️',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Temporarily reduces fall damage by 30%",
            "Grants a faint shimmering aura for 60 seconds",
            "Increases perception slightly"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Sky Courier',
        levelRequirement: 15
    },

    'almost_edge_item_grim_keeper_fragments_mk.48': {
        id: 'almost_edge_item_grim_keeper_fragments_mk.48',
        name: "Grim Keeper's Fragments Mk.48",
        description: "Pulled from the darkest reaches of the border, these fragments pulse with a grim energy - each one an echo of countless lost souls caught on the precipice.  They offer a morbid protection against psychological distress near the edge.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12500,
        icon: '💀',
        stock: 9,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Grants resistance to fear and panic effects.",
            "Increases sanity by 15%",
            "Provides a minor boost to combat stats in areas of high tension"
        ],
        vendor: 'void_merchant',
        shippedBy: 'Dimensional Freight',
        levelRequirement: 35
    },

    'almost_edge_item_fringe_fragments_of_liminal_mk.72': {
        id: 'almost_edge_item_fringe_fragments_of_liminal_mk.72',
        name: "Fringe Fragments of Liminal Mk.72",
        description: "These fragments, colder than the void itself, whisper of forgotten pathways and distorted reflections. They offer a disconcerting sense of familiarity to those lost on the edge – a dangerous comfort.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 45000,
        icon: '🌀',
        stock: 3,
        rarity: 'legendary',
        stockType: 'delivery_only',
        effects: [
            "Grants the ability to briefly phase through thin barriers.",
            "Increases chance of discovering hidden paths or secrets.",
            "Causes unsettling dreams for one hour after use",
            "Provides a small bonus to intelligence"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Shadow Delivery',
        levelRequirement: 50
    },

    'mushroom_kingdom_item_spotted_coins_of_fungal_herald': {
        id: 'mushroom_kingdom_item_spotted_coins_of_fungal_herald',
        name: "The Spotted Coins of Fungal Herald",
        description: "These shimmering, spotted coins pulse with a faint fungal energy. Holding them grants temporary enhanced speed and agility, as if the very earth is urging you onward. Legend claims they were minted by the Mushroom King's most trusted heralds during the Great Spore War.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 275,
        icon: '🏃‍♀️',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increased speed for 10 seconds",
            "agility boost",
            "small chance of spore burst (minor damage)",
            "recover stamina faster"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'mushroom_cart',
        levelRequirement: 15
    },

    'mushroom_kingdom_item_malevolent_heralds_shard': {
        id: 'mushroom_kingdom_item_malevolent_heralds_shard',
        name: "Malevolent Herald's Shard of Rotting Echoes",
        description: "A jagged shard imbued with the lingering malice of a fallen herald. Touching it evokes brief, unsettling visions and causes a localized area to decay at an accelerated rate – perfect for disrupting enemy formations or creating strategic obstacles.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8400,
        icon: '💀',
        stock: 9,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "creates a small area of decay (damage over time)",
            "triggers unsettling visions (brief confusion)",
            "chance to inflict weakness",
            "slows enemy movement speed slightly"
        ],
        vendor: 'wario_direct',
        shippedBy: 'dragon_delivery',
        levelRequirement: 35
    },

    'mushroom_kingdom_item_mk_54_spotted_coins_of_war': {
        id: 'mushroom_kingdom_item_mk_54_spotted_coins_of_war',
        name: "Mk.54 Spotted Coins of War's Legacy",
        description: "Recovered from the ruins of Castle Mushroom, these coins bear the stamped image of a long-forgotten Wario general. When combined they unleash a small burst of offensive power – ideal for smashing through defenses or delivering a devastating punch.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 15000,
        icon: '💥',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "deals high damage on a single target",
            "chance to stun briefly",
            "creates a small shockwave (knockback)",
            "regenerates health over time"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'royal_carrier',
        levelRequirement: 50
    },

    'kivotos_item_student_phantom_breaker_trophy': {
        id: 'kivotos_item_student_phantom_breaker_trophy',
        name: "The Student Phantom Breaker’s Trophies",
        description: "These intricately carved trophies depict spectral students frozen mid-performance, each imbued with a faint echo of their academy debates. Upon activation, they briefly distort the perception of those nearby, causing confusion and disorientation amongst rivals.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '👻',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Confusion (30 seconds)",
            "Minor Illusion (visual distortion)",
            "Chance to trigger Phantom Echo"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery',
        levelRequirement: 15
    },

    'kivotos_item_academy_breaker_service_of_resonance': {
        id: 'kivotos_item_academy_breaker_service_of_resonance',
        name: "The Academy Resonance Service Breaker",
        description: "A complex device resembling a miniature, student-operated sonic amplifier. When activated, it generates a focused wave of auditory energy capable of shattering brittle materials and disrupting the flow of data within nearby networks.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1250,
        icon: '🔊',
        stock: 8,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Sonic Blast (moderate damage)",
            "Network Disruption (short duration)",
            "Amplified Sound Perception"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Secure Courier',
        levelRequirement: 30
    },

    'kivotos_item_student_halo_breaker_trophy_mk_27': {
        id: 'kivotos_item_student_halo_breaker_trophy_mk_27',
        name: "Mk.27 Student Halo Breaker Trophy",
        description: "A polished trophy crafted from a solidified halo fragment, pulsing with faint energy. It grants the wielder brief moments of enhanced observation skills - revealing hidden details and uncovering subtle manipulations within academy proceedings.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3800,
        icon: '👁️',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Enhanced Perception (2 minutes)",
            "Reveals Hidden Details",
            "Increased Awareness of Manipulation Attempts"
        ],
        vendor: 'club_supply',
        shippedBy: 'Temporal Shipping',
        levelRequirement: 45
    },

    'earth_land_item_obsidian_dragon_fever_orb': {
        id: 'earth_land_item_obsidian_dragon_fever_orb',
        name: "The Obsidian Dragon Fever Orb - Mk.III",
        description: "This pulsating orb, etched with infernal dragon runes, radiates a palpable heat and induces a feverish state in those who hold it for too long. It whispers of forgotten dragon rituals and the madness that consumed their scales, promising glimpses into the primal flames.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '🔥',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Grants temporary fire resistance.",
            "Causes minor hallucinations (chance of disorientation).",
            "Increases attack power by 10% for 3 turns.",
            "Slows enemy movement speed by 5%"
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'air_mail',
        levelRequirement: 25
    },

    'earth_land_item_frostfallen_guardian_shard': {
        id: 'earth_land_item_frostfallen_guardian_shard',
        name: "The Frostfallen Guardian's Shard - Fragment VII",
        description: "A jagged fragment of ice harvested from the Wall, imbued with the chilling essence of ancient guardians. This shard shimmers with a spectral blue light and resonates with a low hum – a reminder of battles fought against colossal ice dragons.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12500,
        icon: '🧊',
        stock: 7,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "Provides resistance to cold damage.",
            "Slows enemy attack speed by 15% when held near ice or frost.",
            "Chance to freeze a single target on use (20%)",
            "Restores 5% of max HP over 3 turns"
        ],
        vendor: 'magic_shop',
        shippedBy: 'express_delivery',
        levelRequirement: 40
    },

    'earth_land_item_arcane_dragon_fossil_heart': {
        id: 'earth_land_item_arcane_dragon_fossil_heart',
        name: "The Arcane Dragon Fossil Heart - Fragment XII",
        description: "A perfectly preserved heart, extracted from an extinct dragon during the Age of Guilds. It pulses with a faint arcane energy and seems to anticipate danger, radiating protective wards.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 35000,
        icon: '❤️',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Provides a significant shield boost.",
            "Increases mana regeneration rate by 30%",
            "Grants the ability to cast 'Arcane Ward' once per day.",
            "Chance to reflect spells back at the caster (10%)"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'sea_freight',
        levelRequirement: 50
    },

    'mushroom_kingdom_item_crimson_chronos_stalker': {
        id: 'mushroom_kingdom_item_crimson_chronos_stalker',
        name: "The Crimson Chronos Stalker",
        description: "This pulsating, crimson mushroom absorbs temporal distortions, briefly slowing your movement and enemies within a small radius. Its spores shimmer with fractured timelines – handle with caution!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 250,
        icon: '⏳',
        stock: 47,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Slows movement speed by 20% for 3 seconds",
            "Reduces enemy attack speed by 15% within a 5-meter radius",
            "Chance to briefly rewind your position upon activation (10%)"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Royal Post Pony Express',
        levelRequirement: 12
    },

    'mushroom_kingdom_item_ebony_void_fungus': {
        id: 'mushroom_kingdom_item_ebony_void_fungus',
        name: "The Ebony Void Fungus - Collector's Edition",
        description: "A dense, obsidian fungus harvested from the deepest caverns beneath Peach’s castle. It radiates an unsettling emptiness and whispers forgotten secrets to those who hold it – prolonged exposure can induce paranoia.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '🖤',
        stock: 15,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Grants a temporary glimpse into alternate realities (chance to trigger visual hallucinations)",
            "Increases suspicion meter by 30% for 60 seconds",
            "Provides +15% to critical hit chance against enemies affected by fear"
        ],
        vendor: 'wario_direct',
        shippedBy: 'Wario\'s Speedy Delivery Drone',
        levelRequirement: 35
    },

    'mushroom_kingdom_item_supercharged_golden_stalk': {
        id: 'mushroom_kingdom_item_supercharged_golden_stalk',
        name: "The Supercharged Golden Stalk - Level 47 Prototype",
        description: "A bizarre, genetically-modified mushroom grown from the seeds of a legendary golden mushroom. This stalk pulsates with raw energy, granting incredible speed and the ability to briefly phase through solid objects.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '⚡',
        stock: 9,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "Increases movement speed by 50% for 4 seconds",
            "Allows brief phasing through non-magical barriers (limited uses)",
            "Restores 25% health upon consumption",
            "Chance to trigger a temporary speed boost on hit."
        ],
        vendor: 'koopa_shop',
        shippedBy: 'Koopa Courier Service - Priority Shipping',
        levelRequirement: 47
    },

    'internet_item_streamed_nodes_of_memes': {
        id: 'internet_item_streamed_nodes_of_memes',
        name: "The Streamed Nodes of Memes - Phase Shift Edition",
        description: "These pulsating nodes, harvested from the chaotic streams of viral content, grant fleeting glimpses into alternate realities where memes reign supreme. Each activation induces a momentary phase shift, blurring your perception and granting a brief advantage in data-driven combat.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '🌀',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Grants temporary perception boost",
            "Chance to trigger a random meme effect (confusion, distraction)",
            "Reduces incoming data damage by 10%",
            "Short bursts of accelerated movement"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Drone Delivery',
        levelRequirement: 15
    },

    'internet_item_runic_bound\'s_nodes': {
        id: 'internet_item_runic_bound\'s_nodes',
        name: "Runic Bound’s Nodes - Ciphered Resonance",
        description: "Forged from solidified data streams and imbued with ancient algorithms, these nodes resonate with the very fabric of the internet. Touching them allows you to decipher encrypted communications and briefly manipulate digital networks, but prolonged exposure risks becoming trapped within the data itself.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2100,
        icon: '🔑',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Increases hacking speed by 50%",
            "Provides limited access to blocked networks",
            "Grants resistance to data corruption effects",
            "Chance to reveal hidden information"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Quantum Courier',
        levelRequirement: 35
    },

    'internet_item_mk_39_streamed_nodes': {
        id: 'internet_item_mk_39_streamed_nodes',
        name: "Mk.39 Streamed Nodes - Chronometric Drift",
        description: "These meticulously crafted nodes are a prototype of the data-streaming network, capable of briefly manipulating temporal distortions within digital spaces. The nodes' runes emit a rhythmic pulse that can slow down or speed up processes, but over reliance can cause severe instability.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 9500,
        icon: '⏳',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Slows down enemy attacks and movements",
            "Increases movement speed by 30%",
            "Allows for brief temporal rewinds (limited uses)",
            "Provides a chance to phase through security systems"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Temporal Shipment',
        levelRequirement: 50
    },

    'connectopia_item_skybound_harmonic_blocks': {
        id: 'connectopia_item_skybound_harmonic_blocks',
        name: "The Skybound Harmonic Blocks - Mk.42",
        description: "These meticulously crafted blocks resonate with the celestial energies of Connectopia’s highest peaks, amplifying sound and providing a momentary respite from the harsh winds. Each block pulses with a faint blue light, offering minor protection against sonic disturbances and a strange sense of calm.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '✨',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases sound resistance by 25%",
            "provides a small boost to construction speed (10%)",
            "chance to trigger a calming aura effect"
        ],
        vendor: 'craft_corner',
        shippedBy: 'block_carrier drone',
        levelRequirement: 25
    },

    'connectopia_item_pioneer_cartographer_finder': {
        id: 'connectopia_item_pioneer_cartographer_finder',
        name: "The Pioneer Cartographer Finder - Prototype X7",
        description: "A rugged, hand-assembled block crafted for the relentless pioneer spirit. This device analyzes terrain and reveals hidden pathways with remarkable accuracy, uncovering potential settlements and resource veins.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '🧭',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Reveals hidden pathways on the map (small area)",
            "Increases chance of finding rare resources by 5%",
            "Provides a small bonus to navigation speed"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'pony express rider',
        levelRequirement: 18
    },

    'connectopia_item_blocksmith_temporal_service': {
        id: 'connectopia_item_blocksmith_temporal_service',
        name: "The Blocksmith’s Temporal Service – Level 3 Calibration",
        description: "A specialized service offered by the Blocksmith guild, this item allows for temporary adjustments to building materials' structural integrity - a vital skill for reinforcing frontier settlements. It provides a delicate manipulation of block cohesion, offering protection from minor collapses.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 7500,
        icon: '🛠️',
        stock: 1,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Temporarily strengthens blocks by 30%",
            "Allows for minor repairs to damaged structures",
            "Reduces the chance of block collapse in a small area (50%) - lasts 1 hour"
        ],
        vendor: 'block_smith',
        shippedBy: 'automated service module',
        levelRequirement: 45
    },

    'pokemon_item_shimmering_aurora_master_held_item': {
        id: 'pokemon_item_shimmering_aurora_master_held_item',
        name: "The Shimmering Aurora Master’s Clutch",
        description: "A delicate, pulsating orb woven from solidified aurora light. This held item amplifies the power of your Pokémon's Special Attack and grants a chance to inflict ‘Stunning Light,’ momentarily blinding opponents with brilliant luminescence.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '✨',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increases Special Attack by 20%",
            "Chance to inflict ‘Stunning Light’ (5%)",
            "Boosts Pokémon Speed by 10%"
        ],
        vendor: 'pokemart',
        shippedBy: 'Swift Delivery Drone',
        levelRequirement: 30
    },

    'pokemon_item_maelstrom_of_lost_battles_service': {
        id: 'pokemon_item_maelstrom_of_lost_battles_service',
        name: "Maelstrom of Lost Battles Retrieval Service",
        description: "A complex, obsidian-like device humming with residual battle energy. This service allows you to temporarily summon echoes of past Pokémon battles—powerful, spectral trainers and their Pokémon—to aid your current skirmishes, though their allegiance is…unpredictable.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 8500,
        icon: '🌀',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Summons a spectral trainer and their Pokémon (randomized)",
            "Trainer's stats are 75% of original power",
            "Combat effectiveness is volatile"
        ],
        vendor: 'league_store',
        shippedBy: 'Temporal Courier',
        levelRequirement: 45
    },

    'pokemon_item_waning_chronos_resonance_curiosity': {
        id: 'pokemon_item_waning_chronos_resonance_curiosity',
        name: "Waning Chronos Resonance Fragment",
        description: "A fragmented shard of solidified time, pulsating with a faint, almost sorrowful energy. This curiosity allows the user to briefly slow down their perception of battle, granting increased reaction speed but at the cost of slightly diminished attack power.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 600,
        icon: '⏳',
        stock: 78,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Slows down perception (15% reaction time boost)",
            "Reduces Attack Power by 10%",
            "Chance to inflict ‘Temporal Distortion’ (3%)"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Standard Parcel',
        levelRequirement: 25
    },

    'the_edge_item_chronal_echoes_eater': {
        id: 'the_edge_item_chronal_echoes_eater',
        name: "The Chronal Echoes Eater - Mk.78 Delta",
        description: "This pulsating, obsidian fragment absorbs temporal distortions, briefly accelerating or decelerating the flow of time around its wielder – a terrifyingly precise manipulation with unpredictable consequences.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '⏳',
        stock: 42,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "temporarily increases movement speed",
            "briefly slows down enemy projectiles",
            "chance to create a localized time distortion field",
            "risk of accelerated aging or de-aging the user"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'graviton_drone',
        levelRequirement: 35
    },

    'the_edge_item_final_nether_curiosity': {
        id: 'the_edge_item_final_nether_curiosity',
        name: "The Final Nether Curiosity - Obsidian Shard of Regression",
        description: "A fractured shard radiating a chilling aura; gazing upon it briefly reverses the last few moments of your experience, offering fleeting glimpses into alternate timelines – but beware the echoes can drive you mad.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '🌀',
        stock: 17,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "randomly rewinds the last 10 seconds of gameplay",
            "chance to reveal hidden pathways or secrets",
            "causes auditory hallucinations during prolonged exposure",
            "slightly reduces enemy damage output"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'sky_crawler',
        levelRequirement: 28
    },

    'the_edge_item_infinite_fragments_901': {
        id: 'the_edge_item_infinite_fragments_901',
        name: "Infinite Fragments - Phase Nine Zero One (Stabilized)",
        description: "These iridescent fragments seem to shift and refract light, hinting at dimensions beyond mortal comprehension. They grant limited access to the infinite – but prolonged use threatens to unravel your very existence.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 600,
        icon: '✨',
        stock: 91,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "restores a small amount of health and stamina",
            "briefly increases perception and reflexes",
            "provides resistance to spatial anomalies",
            "chance to trigger a temporary reality shift"
        ],
        vendor: 'final_shop',
        shippedBy: 'automated_cart',
        levelRequirement: 15
    },

    'pokemon_item_celestial_ribbon_sworn_of_valor': {
        id: 'pokemon_item_celestial_ribbon_sworn_of_valor',
        name: "Celestial Ribbons Sworn of Valor",
        description: "These shimmering ribbons, woven from captured starlight and the echoes of legendary battles, grant temporary boosts to your Pokémon's attack and speed during intense confrontations. They pulsate with a celestial energy, demanding respect from even the most formidable foes. Wearing them invokes a spirit of unwavering valor.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '✨',
        stock: 33,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increases Attack by 20% for 60 seconds",
            "Increases Speed by 15% for 60 seconds",
            "Grants +2 to Critical Hit Ratio for 60 seconds"
        ],
        vendor: 'pokemart',
        shippedBy: 'Winged Pokemon Courier',
        levelRequirement: 30
    },

    'pokemon_item_mk17_ribbon_of_the_stone_sentinels': {
        id: 'pokemon_item_mk17_ribbon_of_the_stone_sentinels',
        name: "Mk.17 Ribbon of the Stone Sentinels",
        description: "Forged within the heart of Mt. Silas, this ribbon channels the ancient power of the Stone Sentinels – a silent legion tasked with guarding against temporal distortions. It allows brief glimpses into potential futures, revealing advantageous moves and strategic opportunities during battles.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🔮',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Provides a 3% chance to predict the opponent's next move.",
            "Grants a 'Temporal Echo' effect – briefly shows potential damage output of an attack (once per battle).",
            "Increases Defense by 5% for 60 seconds."
        ],
        vendor: 'safari_shop',
        shippedBy: 'Ground Pokemon Transport',
        levelRequirement: 45
    },

    'pokemon_item_ribbon_of_the_gloomthorn_king': {
        id: 'pokemon_item_ribbon_of_the_gloomthorn_king',
        name: "Ribbon of the Gloomthorn King",
        description: "Harvested from the thorny vines surrounding the elusive Gloomthorn King, this ribbon exudes a chilling aura that weakens opposing Pokémon's defenses and boosts your own. It’s said to be favored by trainers seeking dominance in dark and treacherous terrains.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 5200,
        icon: '🌑',
        stock: 7,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "Reduces opponent's Defense by 30% for 60 seconds.",
            "Increases your Pokémon’s Special Attack by 25% for 60 seconds.",
            "Grants a 'Shadow Veil' effect – reduces incoming damage from Ghost and Dark types."
        ],
        vendor: 'league_store',
        shippedBy: 'Dark Pokemon Delivery Service',
        levelRequirement: 50
    },

    'faerun_item_crimson_quillwright_gloves': {
        id: 'faerun_item_crimson_quillwright_gloves',
        name: "Crimson Quillwright's Gloves",
        description: "These supple leather gloves, dyed with the pigment of a fallen crimson dragon, grant unparalleled precision in writing and enchanting. The intricate stitching mimics ancient runes, bolstering your magical focus while adding a touch of fiery elegance.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '✍️',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased spellcasting accuracy",
            "enhanced enchanting potency",
            "minor flame resistance",
            "advantage on writing checks"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'griffon_express',
        levelRequirement: 15
    },

    'faerun_item_ambergris_chronometer_curiosity': {
        id: 'faerun_item_ambergris_chronometer_curiosity',
        name: "Ambergris Chronometer of the Lost Tide",
        description: "A bizarre device crafted from polished ambergris and salvaged clockwork, this chronometer displays not just time but also echoes of past tides. Holding it allows glimpses into long-lost coastal settlements and forgotten currents.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1750,
        icon: '⏳',
        stock: 18,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "detects nearby water sources",
            "reveals echoes of past events related to the sea",
            "chance to gain a temporary 'luck' buff based on tidal shifts",
            "minor illusion effect – briefly projects images of ancient ships"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'sea_serpent_express',
        levelRequirement: 25
    },

    'faerun_item_sigil_of_stone_wright_equipment': {
        id: 'faerun_item_sigil_of_stone_wright_equipment',
        name: "Sigil of Stone Wright’s Binding",
        description: "Forged from a single chunk of petrified wood imbued with protective runes, this intricate glove strengthens your connection to stone and earth. The sigils resonate with the power of ancient dwarven warding rituals.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4200,
        icon: '⛰️',
        stock: 7,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "enhanced earth magic abilities",
            "resistance to stone damage",
            "increased strength when manipulating rock or earth",
            "ability to create small stone constructs (limited uses)"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'giant_worm_delivery',
        levelRequirement: 38
    },

    'middle_earth_item_the_whispering_bane_of_morgoth': {
        id: 'middle_earth_item_the_whispering_bane_of_morgoth',
        name: "The Whispering Bane of Morgoth’s Teeth",
        description: "A twisted silver ring, etched with runes that seem to murmur forgotten prophecies. It pulses faintly with a chilling energy, said to ward off the lingering shadows of Morgoth's armies and grants brief glimpses into fractured timelines.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750,
        icon: '💀',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Temporary resistance to shadow magic.",
            "Chance to briefly see a possible future.",
            "Slows the movement speed of undead creatures in range.",
            "Grants +3 to perception checks"
        ],
        vendor: 'elven_market',
        shippedBy: 'Winged Courier',
        levelRequirement: 15
    },

    'middle_earth_item_the_ancient_shard_of_gondor’s_resolve': {
        id: 'middle_earth_item_the_ancient_shard_of_gondor’s_resolve',
        name: "The Ancient Shard of Gondor’s Resolve - The Sunstone Fragment",
        description: "A fist-sized piece of obsidian, polished to an unnerving sheen and radiating a warm, golden light. This fragment holds echoes of the courage displayed by Gondor's defenders during the Last Alliance, bolstering resolve and granting minor healing.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🔥',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Restores a small amount of health.",
            "Increases willpower and resistance to fear effects.",
            "Grants temporary advantage on saving throws against charm magic.",
            "Heals minor wounds with radiant energy."
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'Stone Cart',
        levelRequirement: 30
    },

    'middle_earth_item_the_shire_rune_of_longbottom_harvest': {
        id: 'middle_earth_item_the_shire_rune_of_longbottom_harvest',
        name: "The Shire Rune of Longbottom Harvest - The Seedling’s Blessing",
        description: "A small, intricately carved wooden rune embedded within a polished acorn. This rune subtly accelerates plant growth and imbues the wielder with a touch of Hobbit cheerfulness, promoting vitality and resilience.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 400,
        icon: '🌱',
        stock: 95,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Accelerates the healing of wounds.",
            "Provides a minor boost to stamina regeneration.",
            "Increases resistance to poison and disease.",
            "Offers temporary protection from harsh weather conditions."
        ],
        vendor: 'shire_shop',
        shippedBy: 'Foot Delivery',
        levelRequirement: 8
    },

    'grand_country_item_verdant_gifted_rope_of_inverted_fall': {
        id: 'grand_country_item_verdant_gifted_rope_of_inverted_fall',
        name: "Verdant Gifted's Ropes",
        description: "These ropes, spun from the fibers of gravity-resistant moss and imbued with a strange luminescence, allow for temporary traversal across inverted surfaces. The knots shift subtly, offering an unsettling yet efficient means of movement through the side’s bewildering architecture.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🌿',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "temporary_gravity_shift",
            "increased_movement_speed",
            "resistance_to_falling",
            "rope_length_increase"
        ],
        vendor: 'side_seller',
        shippedBy: 'rotating_platform',
        levelRequirement: 25
    },

    'grand_country_item_mk_73_elevated_rope_of_the_spiral_drift': {
        id: 'grand_country_item_mk_73_elevated_rope_of_the_spiral_drift',
        name: "Mk.73 Elevated Ropes",
        description: "Forged from solidified echoes of a perpetually spinning vortex, these ropes ascend with unnerving grace, defying the side's fluctuating gravity fields. Gripping them feels like being gently pulled into a dizzying spiral.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🌀',
        stock: 9,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "enhanced_vertical_movement",
            "temporal_distortion (minor)",
            "resistance to vortex effects",
            "rope_grip_stability"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'gravity_sled',
        levelRequirement: 40
    },

    'grand_country_item_the_layered_echo_anchor_of_suspended_weight': {
        id: 'grand_country_item_the_layered_echo_anchor_of_suspended_weight',
        name: "The Layered Echo Anchor of Suspended Weight",
        description: "This intricate device, crafted from crystallized sound waves and weighted with solidified negative space, creates a localized pocket of altered gravity. Deploying it allows for brief moments of near-weightlessness within its shimmering field.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5200,
        icon: '⚖️',
        stock: 17,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "localized_gravity_reduction",
            "temporary_buoyancy",
            "sound_resonance (disruption)",
            "anchor_stability"
        ],
        vendor: 'layer_market',
        shippedBy: 'dimensional_portal',
        levelRequirement: 50
    },

    'doughnut_hole_item_the_echoing_center_walker': {
        id: 'doughnut_hole_item_the_echoing_center_walker',
        name: "The Echoing Center Walker",
        description: "This obsidian-like walker hums with residual void energy, projecting fragmented whispers of forgotten events from the core. Its rhythmic pulsations accelerate your movement, leaving a shimmering trail of distorted reality in your wake.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '👣',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increased Movement Speed (10%)",
            "Minor Reality Distortion (Chance to briefly phase through obstacles)",
            "Void Resonance (Passive - Small chance of attracting void anomalies)"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Dimensional Courier',
        levelRequirement: 25
    },

    'doughnut_hole_item_ancient_rot_singularities_9': {
        id: 'doughnut_hole_item_ancient_rot_singularities_9',
        name: "Ancient Rot Singularities - 9",
        description: "Clusters of pulsating, fungal growths harvested from the deepest recesses of the void. These singularities exude a sickly sweet odor and visibly accelerate decomposition when in proximity to organic matter.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8500,
        icon: '🍄',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Rapid Decay (Applies a continuous decay effect to enemies)",
            "Corrosive Aura (Reduces armor and defense)",
            "Localized Rot (Creates a small area of accelerated decomposition)"
        ],
        vendor: 'center_seller',
        shippedBy: 'Void Freight',
        levelRequirement: 40
    },

    'doughnut_hole_item_forbidden_null_prism_of_the_abyss': {
        id: 'doughnut_hole_item_forbidden_null_prism_of_the_abyss',
        name: "Forbidden Null Prism of the Abyss",
        description: "A shard of solidified nothingness, radiating intense cold and attracting all traces of light. Exposure to this prism induces a state of profound disorientation, momentarily collapsing perception into utter void.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 55000,
        icon: '🌌',
        stock: 5,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "Nullification Field (Reduces all magical effects in a radius)",
            "Reality Distortion (Severe – chance of temporary paralysis or altered memories)",
            "Void Attraction (Draws nearby void entities towards the user)",
            "Temporal Stasis (Briefly slows down time within a small area)"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Phantom Express',
        levelRequirement: 50
    },

    'faerun_item_crimsonwood_dancer': {
        id: 'faerun_item_crimsonwood_dancer',
        name: "Sacred Dancer's Boots of the Whispering Barrows",
        description: "These crimson-dyed leather boots, crafted from the heartwood of a fallen ancient tree deep within the Whispering Barrows, grant unparalleled speed and agility. Each step resonates with forgotten prayers, subtly guiding the wearer through treacherous terrain and attracting the blessings of Silvanus.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1250,
        icon: '👣',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased movement speed",
            "minor resistance to poison",
            "chance to avoid traps",
            "advantage on stealth checks in forests"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'winged_courier',
        levelRequirement: 15
    },

    'faerun_item_chronosplitter_artifact': {
        id: 'faerun_item_chronosplitter_artifact',
        name: "Mk.7 Chronosplitter - Obsidian Fragment of Temporal Distortion",
        description: "A fractured piece of obsidian pulsating with residual chronomantic energy, the Mk.7 Chronosplitter allows for brief, localized distortions in time – primarily used to briefly accelerate or decelerate movement and reactions. Handle with extreme caution; prolonged use risks unraveling one's own temporal stability.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 23000,
        icon: '⏳',
        stock: 12,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "momentarily slow down time for self",
            "briefly accelerate movement speed",
            "chance to rewind a single action",
            "risk of temporal paradox if overused"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'shadow_ship',
        levelRequirement: 35
    },

    'faerun_item_sunstone_guardian': {
        id: 'faerun_item_sunstone_guardian',
        name: "The Sunstone Guardian's Boots – Protector of the Amber Expanse",
        description: "Forged in the heart of a dying volcano and imbued with the essence of a radiant sun, these boots radiate warmth and protection. Their golden soles offer immunity to fire damage while bolstering resilience against psychic attacks, making them invaluable for navigating the dangers of the Amber Expanse.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🔥',
        stock: 9,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "resistance to fire damage",
            "advantage on saving throws against psychic attacks",
            "increased armor class",
            "chance to reflect magical projectiles"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'giant_hawk',
        levelRequirement: 28
    },

    'internet_item_chromatic_link_bane': {
        id: 'internet_item_chromatic_link_bane',
        name: "The Radiant Chromatic Link Bane",
        description: "This pulsating link, woven from compressed bandwidth and viral echoes, temporarily grants the user heightened perception within the data streams. Beware its volatile nature – prolonged exposure can induce a cascade of fragmented visions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1875,
        icon: '✨',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increased Perception (duration: 60 seconds)",
            "Minor Data Corruption Resistance",
            "Temporary Visual Distortion (chance)"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Drone Delivery',
        levelRequirement: 25
    },

    'internet_item_pixelated_resonance_shard': {
        id: 'internet_item_pixelated_resonance_shard',
        name: "The Pixelated Resonance Shard of the Lost Signal",
        description: "Recovered from a defunct server farm deep within the East of Midlands, this shard vibrates with residual data echoes – amplifying the user’s ability to intercept and manipulate fragmented communications. It's a chaotic device for those who crave disruption.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 650,
        icon: '📡',
        stock: 89,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Boosts Communication Jamming Ability",
            "Chance to Generate Phantom Signals",
            "Slightly Reduces Network Latency"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Automated Courier',
        levelRequirement: 18
    },

    'internet_item_buffered_entropy_matrix': {
        id: 'internet_item_buffered_entropy_matrix',
        name: "Mk.94 Buffered Entropy Matrix – The Glitch's Embrace",
        description: "A tightly-wound data construct designed to absorb and redistribute chaotic bursts within the network, offering temporary protection from system instability. However, prolonged use can lead to unpredictable behavioral shifts in its user.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 9200,
        icon: '⚙️',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Entropy Field Generation (duration: 30 seconds)",
            "Reduces System Glitches by 50%",
            "Chance of Negative Feedback Loop – temporary stat debuff"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Quantum Entanglement Delivery',
        levelRequirement: 42
    },

    'doughnut_hole_item_jade_forger_chronal_resonance': {
        id: 'doughnut_hole_item_jade_forger_chronal_resonance',
        name: "Jade Forger's Chronal Resonance Prism",
        description: "This iridescent prism pulses with fragmented echoes of time, harvested from the edges of the Fated Place. Holding it allows brief glimpses into potential futures – though be warned, prolonged exposure can unravel your present reality.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '⏳',
        stock: 7,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "Grants temporary precognition (5 seconds)",
            "Reduces temporal instability by 10%",
            "Chance to trigger a minor time loop",
            "Increases movement speed by 5%"
        ],
        vendor: 'jade_forger',
        shippedBy: 'Void Courier',
        levelRequirement: 35
    },

    'doughnut_hole_item_void_singularities_of_the_center_9': {
        id: 'doughnut_hole_item_void_singularities_of_the_center_9',
        name: "The Center's Obsidian Singularity Fragment - 9",
        description: "A solidified piece of the void’s heart, this fragment resonates with an unsettling stillness. Touching it induces a momentary paralysis, followed by vivid hallucinations depicting the deepest secrets of the Fated Place.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 7500,
        icon: '🖤',
        stock: 23,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Applies 'Paralyzed' status for 3 seconds",
            "Causes visual hallucinations (lasts 10 seconds)",
            "Small chance to gain temporary immunity to void effects",
            "Reduces sanity by 2"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dimensional Cartographer',
        levelRequirement: 28
    },

    'doughnut_hole_item_center_seller_chronal_flow_service': {
        id: 'doughnut_hole_item_center_seller_chronal_flow_service',
        name: "Chronal Flow Alignment Service - Level 3",
        description: "This meticulously crafted device emits a focused chronal field, delicately adjusting the flow of time around the user's immediate vicinity. Perfect for correcting minor temporal mishaps or subtly altering events.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 55000,
        icon: '🌀',
        stock: 1,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Allows the user to rewind time by up to 3 seconds (once per day)",
            "Provides a minor shielding effect against temporal distortions",
            "Increases chance of successful negotiation by 15%",
            "Requires 15 minutes of focused concentration"
        ],
        vendor: 'center_seller',
        shippedBy: 'Temporal Dispatcher',
        levelRequirement: 48
    },

    'grand_country_item_the_gravitic_spindle_maker': {
        id: 'grand_country_item_the_gravitic_spindle_maker',
        name: "The Gravitic Spindle Maker",
        description: "This intricately crafted device, forged from solidified gravity currents and polished with noble obsidian, allows the wielder to momentarily manipulate local gravitational fields. Spin it rapidly to generate a localized pull or push – perfect for scaling treacherous vertical cliffs or disrupting enemy formations.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🌀',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Increases jump height by 50%",
            "Allows for brief localized gravity manipulation (pull/push)",
            "Reduces fall damage by 30%"
        ],
        vendor: 'side_seller',
        shippedBy: 'gravity_drone',
        levelRequirement: 15
    },

    'grand_country_item_layered_ascension_ladder': {
        id: 'grand_country_item_layered_ascension_ladder',
        name: "Layered Ascension Ladder - The Chronal Weaver's Design",
        description: "A multi-tiered ladder constructed from solidified temporal echoes, capable of briefly shifting its position within the flow of time. Carefully navigate this unsteady ascent to reach previously inaccessible heights or bypass dangerous gravitational anomalies – but be wary of paradoxical slips!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🪜',
        stock: 18,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Allows for rapid vertical climbing",
            "Briefly shifts ladder position in time (small jumps)",
            "Resistance to temporal distortions"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'temporal_relay',
        levelRequirement: 35
    },

    'grand_country_item_the_inverted_spiral_cartographer': {
        id: 'grand_country_item_the_inverted_spiral_cartographer',
        name: "The Inverted Spiral Cartographer's Quill",
        description: "A delicate instrument crafted from a fallen spiral shard and imbued with the essence of inverted gravity, this quill automatically records spatial data as you navigate the most convoluted vertical landscapes. Its cartographic markings shift to reflect the reversed flow of space and time – vital for charting the chaotic terrain of The Side of the Doughnut.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 450,
        icon: '🖋️',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Automatically maps vertical terrain",
            "Records spatial data in reverse gravity coordinates",
            "Provides a minor boost to navigation skills"
        ],
        vendor: 'layer_market',
        shippedBy: 'delivery_drone',
        levelRequirement: 10
    },

    'kivotos_item_jeweled_pins_of_lumina': {
        id: 'kivotos_item_jeweled_pins_of_lumina',
        name: "The Jeweled Pins of Lumina - Semester Gifted",
        description: "These intricately designed pins, crafted with a semi-reflective jewel dust and imbued with the essence of student brilliance, grant temporary clarity of thought during intense study sessions. Each pin is subtly etched with the academy’s crest and emits a faint, pulsing halo reminiscent of a late semester exam glow.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '✨',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased_intellect_duration: 60 seconds",
            "minor_halo_emission",
            "resistance_to_distractions",
            "temporary_focus_boost"
        ],
        vendor: 'student_store',
        shippedBy: 'drone_delivery',
        levelRequirement: 15
    },

    'kivotos_item_mk_29_semester_pins': {
        id: 'kivotos_item_mk_29_semester_pins',
        name: "Mk.29 Semester Pins - The Gradient Shifter",
        description: "A collection of nine meticulously crafted pins, each exhibiting a subtly shifting gradient hue mirroring the academic year's progression. These pins, when affixed to clothing or accessories, offer a minor visual distortion effect – briefly altering the perceived colors around the wearer.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '🌈',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "minor_color_distortion: 30 seconds",
            "subtle_visual_anomaly",
            "increased_perception_of_time",
            "chance_for_inspiration"
        ],
        vendor: 'club_supply',
        shippedBy: 'express_delivery',
        levelRequirement: 28
    },

    'kivotos_item_the_halo_of_judgment': {
        id: 'kivotos_item_the_halo_of_judgment',
        name: "The Halo of Judgment - Epic Faction Item",
        description: "Forged during a contentious debate within the student council, this heavily jeweled halo exudes an aura of undeniable authority. It’s rumored to subtly influence perceptions and bolster arguments in favor of the wearer, aligning them with the ideals of the 'Order of Clarity' faction.",
        category: SHOP_CATEGORIES.FACTION,
        price: 7500,
        icon: '⚖️',
        stock: 1,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "argumentative_influence: 45 seconds",
            "increased_debate_skill",
            "halo_of_authority (passive)",
            "minor_charisma_boost"
        ],
        vendor: 'academy_armory',
        shippedBy: 'guarded_delivery',
        levelRequirement: 42
    },

    'teyvat_item_dendro_gems_of_the_seventh_eye': {
        id: 'teyvat_item_dendro_gems_of_the_seventh_eye',
        name: "Dendro Gems of the Seventh Eye",
        description: "These luminescent gems pulse with raw dendro energy, channeling the echoes of Archon decrees. Holding one grants a momentary clarity of purpose and enhances perception of elemental flows within the surrounding environment, allowing you to briefly see through illusionary constructs.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '✨',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increases dendro damage by 10% for 30 seconds",
            "grants minor vision clarity (reveals hidden paths)",
            "chance to inflict 'Echoing Distortion' on enemies (disorients for 2 seconds)"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'Sky Courier',
        levelRequirement: 15
    },

    'teyvat_item_jeweled_bane_s_gems': {
        id: 'teyvat_item_jeweled_bane_s_gems',
        name: "Jeweled Bane's Gems - Obsidian Tears",
        description: "Forged within the volcanic heart of a forgotten shrine, these gems are said to hold fragments of ancient battles and the sorrow of those who fell. They release a chilling aura that slows movement and weakens enemies with each strike – a grim reminder of inevitable defeat.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '💀',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "slows enemy movement speed by 20% for 5 seconds on hit",
            "decreases enemy attack power by 15% during effect duration",
            "chance to inflict 'Frozen Doubt' (reduces critical strike chance for 3 seconds)"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'Sea Serpent Express',
        levelRequirement: 30
    },

    'teyvat_item_mk21_dendro_gems_of_the_sanctuary': {
        id: 'teyvat_item_mk21_dendro_gems_of_the_sanctuary',
        name: "Mk.21 Dendro Gems of the Sanctuary",
        description: "Crafted in the echoing halls of a forgotten Archon sanctuary, these jeweled gems resonate with the principles of order and harmony. Upon activation, they project a protective barrier imbued with stabilizing dendro energy – capable of deflecting chaotic elemental forces.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '🛡️',
        stock: 9,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "creates a protective barrier that absorbs up to 50% of incoming elemental damage",
            "reduces the duration of negative status effects by 25%",
            "grants a small chance to dispel detrimental environmental effects (e.g., landslides)"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'Wind Runner Drone',
        levelRequirement: 45
    },

    'equestria_item_obsidian_dancer_apples': {
        id: 'equestria_item_obsidian_dancer_apples',
        name: "Obsidian Dancer's Apples of Resonance",
        description: "These obsidian-colored apples pulse with a subtle, rhythmic energy. Consuming them grants temporary resistance to sonic attacks and enhances your movements with unnatural grace – perfect for a nimble dancer or a quick escape.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 875,
        icon: '🎶',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "temporary sonic resistance",
            "increased movement speed (5%)",
            "boosts agility skill",
            "chance to trigger a rhythmic pulse effect (10%)"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Pegasus Courier',
        levelRequirement: 25
    },

    'equestria_item_kind_apples_mk32': {
        id: 'equestria_item_kind_apples_mk32',
        name: "Mk.32 Kind Apples of Elemental Affinity",
        description: "Cultivated within the crystal caves beneath the Crystal Empire, these apples radiate a gentle warmth and possess a latent connection to the elements.  When consumed, they grant brief bursts of elemental energy tailored to your dominant affinity – but be wary, uncontrolled surges can occur.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1600,
        icon: '🍎',
        stock: 18,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "temporary elemental affinity boost (fire/water/earth/air)",
            "chance to trigger a minor elemental effect upon consumption",
            "increased resistance to environmental damage related to the chosen element",
            "recover health faster when near corresponding natural terrain"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Griffin Transport',
        levelRequirement: 38
    },

    'equestria_item_mythic_apples_of_harmony_resonance': {
        id: 'equestria_item_mythic_apples_of_harmony_resonance',
        name: "Mythic Apples of Harmony Resonance – The Twilight Echoes",
        description: "Legend claims these apples were grown from seeds blessed by Princess Twilight herself. They pulse with the very essence of friendship, capable of amplifying positive emotions and temporarily neutralizing negative energies—a potent defense against discord’s influence.",
        category: SHOP_CATEGORIES.FACTION,
        price: 45000,
        icon: '✨',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "drastically reduces negative emotions in self and nearby allies",
            "amplifies friendship-based abilities (e.g., strengthening the Cutie Mark effect)",
            "provides resistance to fear, despair, and rage",
            "chance to create a localized bubble of harmonious energy that heals wounds"
        ],
        vendor: 'crystal_empire_archives',
        shippedBy: 'Dimensional Courier (Secure Transport)',
        levelRequirement: 50
    },

    'doughnut_hole_item_gilded_caller_rift_01': {
        id: 'doughnut_hole_item_gilded_caller_rift_01',
        name: "The Gilded Caller's Rift of Central Descent",
        description: "This fractured disc pulses with a faint, golden gravity, drawing nearby objects toward its center. Holding it grants a momentary reduction in your personal gravitational pull, allowing for surprisingly agile leaps and dashes within the Fated Place’s distorted space.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 180,
        icon: '✨',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "reduces gravity by 10%",
            "increases jump height by 20%",
            "chance to create a minor localized gravity distortion (small area of effect)"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Void Courier',
        levelRequirement: 15
    },

    'doughnut_hole_item_central_rift_02': {
        id: 'doughnut_hole_item_central_rift_02',
        name: "Mk.3 Central Rift of Echoing Depths",
        description: "A perfectly smooth, obsidian-like shard that seems to whisper with the echoes of countless voids. When activated, it generates a temporary 'gravitic well', pulling in loose objects and briefly destabilizing opponents' footing.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '🌀',
        stock: 17,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "pulls nearby objects towards the user for a short duration",
            "reduces enemy stability by 25% during effect",
            "chance to trigger a minor void rift (small area of effect)"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dimensional Cartographer',
        levelRequirement: 30
    },

    'doughnut_hole_item_faction_caller_03': {
        id: 'doughnut_hole_item_faction_caller_03',
        name: "The Silent Caller’s Fragment of the Faded Core",
        description: "This pulsating, grey fragment is a key component in the construction of Void-Touched Resonance Amplifiers. It exudes an unnerving stillness, and its activation creates a brief pocket of absolute silence within a small radius.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4200,
        icon: '🤫',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "creates a zone of silence (small area of effect)",
            "increases resistance to psychic attacks by 15%",
            "chance to disrupt enemy spells"
        ],
        vendor: 'center_seller',
        shippedBy: 'Temporal Dispatcher',
        levelRequirement: 48
    },

    'equestrian_item_lumina_of_the_sparkling_sirens': {
        id: 'equestrian_item_lumina_of_the_sparkling_sirens',
        name: "Luminary Siren's Echoes",
        description: "These shimmering, opalescent orbs pulsate with the residual magic of forgotten sirens’ songs. Holding one grants a temporary boost to persuasion and charm, allowing you to weave illusions of captivating beauty, but prolonged exposure induces unsettling melodies.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 789,
        icon: '✨',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increases persuasion by 50 for 60 seconds",
            "chance to charm a single target",
            "minor auditory hallucinations (low chance)"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'winged_message',
        levelRequirement: 15
    },

    'equestrian_item_gravitas_of_the_stone_slyer': {
        id: 'equestrian_item_gravitas_of_the_stone_slyer',
        name: "The Obsidian Stone Slayer’s Grip",
        description: "Forged in the heart of a collapsed crystal cave, this heavy gauntlet is imbued with the stubborn resilience of ancient stone. It bestows incredible strength and fortitude, allowing you to shatter defenses with brute force – but its weight can quickly exhaust even the most formidable warrior.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12345,
        icon: '🡩',
        stock: 8,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "increases strength by 75 for 90 seconds",
            "chance to break shields on hit",
            "reduces stamina drain by 20%"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'royal_delivery_pony',
        levelRequirement: 35
    },

    'equestrian_item_divinity_of_the_aurora_smasher': {
        id: 'equestrian_item_divinity_of_the_aurora_smasher',
        name: "Celestial Aurora’s Wrath",
        description: "A shard of solidified aurora borealis, this artifact crackles with divine energy and the raw power of the cosmos. Touching it grants you temporary access to manipulate light itself – creating dazzling illusions or searing beams of pure radiance; however, its volatile nature can overwhelm a mortal mind.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 65000,
        icon: '🔆',
        stock: 1,
        rarity: 'godly',
        stockType: 'delivery_only',
        effects: [
            "allows the user to create illusionary duplicates of themselves",
            "deals radiant damage with a focused beam (high cooldown)",
            "chance to blind target"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'stardust_messenger',
        levelRequirement: 50
    },

    'almost_edge_item_the_dregling_s_sworn_crumb': {
        id: 'almost_edge_item_the_dregling_s_sworn_crumb',
        name: "The Dregling’s Sworn Crumb",
        description: "A faintly luminescent crumb, baked from the solidified regret of those lost to the edge. Consuming this offers a fleeting glimpse into forgotten anxieties, and briefly grants enhanced spatial awareness within distorted perceptions.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 75,
        icon: '🍪',
        stock: 42,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Grants +3 Perception for 60 seconds",
            "Minor spatial distortion effect (reduces accuracy by 10% briefly)",
            "Instills a slight sense of unease."
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Dimensional Slipstream Courier',
        levelRequirement: 5
    },

    'almost_edge_item_mk_89_hallowed_boundary_resonator': {
        id: 'almost_edge_item_mk_89_hallowed_boundary_resonator',
        name: "Mk.89 Hallowed Boundary Resonator",
        description: "A tarnished, hexagonal device etched with cryptic glyphs - remnants of a forgotten civilization obsessed with maintaining the edge. When activated, it emits a subtle hum that briefly stabilizes your position, preventing accidental falls.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '⚙️',
        stock: 18,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Reduces chance of falling off the edge by 25%",
            "Emits a low-level hum that slightly disorients enemies within 5 meters.",
            "Provides +1 to Balance checks."
        ],
        vendor: 'void_merchant',
        shippedBy: 'Gravitic Packet Delivery',
        levelRequirement: 20
    },

    'almost_edge_item_the_liminal_shard_of_silence_sworn': {
        id: 'almost_edge_item_the_liminal_shard_of_silence_sworn',
        name: "The Liminal Shard of Silence Sworn",
        description: "A fractured piece of obsidian, perpetually cold to the touch and radiating an unsettling stillness. Holding this shard briefly muffles all sounds in a small radius, granting perfect concentration, but at a significant cost – silencing your own voice.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5800,
        icon: '🤫',
        stock: 7,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Silence within a 3-meter radius for 30 seconds.",
            "Grants +5 to Concentration checks during effect.",
            "Prevents Wario from speaking (temporary - effects last until item is removed)."
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Phase Shift Carrier',
        levelRequirement: 40
    }
};
