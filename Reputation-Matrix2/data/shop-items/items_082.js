// Shop items file 82
// Generated: 2026-03-22 19:55:48
// Items: 100

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_082 = {
    'earth_land_item_the_whispering_rune_granted': {
        id: 'earth_land_item_the_whispering_rune_granted',
        name: "The Whispering Rune Granted",
        description: "This intricately carved rune, pulsating with glacial energy, allows the wielder to briefly understand the silent language of ancient earth spirits. Its wizardly vibrations amplify divination spells and reveal hidden pathways within frozen landscapes. A truly formidable artifact for discerning truth amongst illusion.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🔮',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increases divination spell power by 30%",
            "reveals hidden pathways for 60 seconds",
            "grants resistance to cold damage",
            "chance to summon a minor earth elemental (10%)"
        ],
        vendor: 'magic_shop',
        shippedBy: 'magical_beast',
        levelRequirement: 35
    },

    'earth_land_item_chronal_ice_shard_artifact_42': {
        id: 'earth_land_item_chronal_ice_shard_artifact_42',
        name: "Chronal Ice Shard Artifact 42",
        description: "Recovered from a collapsed wizard's tower, this shard vibrates with fragmented timelines. When activated, it briefly slows the flow of time around the user, allowing for unparalleled precision in combat or delicate manipulation of magical energies.  It’s ancient design hints at forbidden knowledge and powerful chronomancy.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '⏳',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "slows enemy attack speed by 25% for 3 seconds",
            "increases spellcasting accuracy by 15%",
            "chance to rewind a failed spell cast (5%)",
            "provides brief immunity to temporal distortions"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'express_delivery',
        levelRequirement: 28
    },

    'earth_land_item_frostbound_sigil_of_the_windward_granted': {
        id: 'earth_land_item_frostbound_sigil_of_the_windward_granted',
        name: "Frostbound Sigil of the Windward Granted",
        description: "This small, intricately etched sigil is said to have been created by a reclusive wizard obsessed with controlling arctic winds.  Upon activation, it conjures a protective barrier of swirling frost, offering significant resistance against blizzards and icy attacks.  Its wizardly properties are surprisingly potent.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 600,
        icon: '❄️',
        stock: 90,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grants resistance to cold damage",
            "creates a 5-meter radius frost barrier (lasts 60 seconds)",
            "slows down approaching enemies within the barrier",
            "chance to generate a small blizzard effect (15%)"
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'flying_cart',
        levelRequirement: 18
    },

    'pokemon_item_crimson_badges_of_valor': {
        id: 'pokemon_item_crimson_badges_of_valor',
        name: "Crimson Badges of Valor",
        description: "These badges, forged from solidified courage and infused with the essence of ancient battle cries, grant a surge of aggressive power. Wearing them amplifies your attacks and increases your critical hit chance during intense combat, bolstering your resolve against formidable foes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔥',
        stock: 37,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "Increases Attack by 15%",
            "Chance to inflict Critical Hit +10%",
            "Boosts Aggression Stat",
            "Reduces Burn Damage by 20%"
        ],
        vendor: 'pokemart_north',
        shippedBy: 'Express Delivery',
        levelRequirement: 25
    },

    'pokemon_item_silverfang_ribbon_piercer': {
        id: 'pokemon_item_silverfang_ribbon_piercer',
        name: "Silverfang Ribbon Piercer",
        description: "Woven with the shimmering scales of a legendary Ice-type Pokémon and imbued with a chilling resonance, this ribbon delivers a focused blast of icy energy.  It momentarily stuns opponents, allowing for swift attacks or strategic repositioning, offering a tactical edge in battle.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '❄️',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Stuns target for 1 second",
            "Lowers defense of opponent by 5%",
            "Increases Speed by 5%",
            "Provides slight resistance to Ice-type moves"
        ],
        vendor: 'safari_shop_west',
        shippedBy: 'Standard Mail',
        levelRequirement: 18
    },

    'pokemon_item_chronal_resonance_shard_mythic': {
        id: 'pokemon_item_chronal_resonance_shard_mythic',
        name: "Chronal Resonance Shard - Mythic",
        description: "A fragment of solidified time, pulsing with the echoes of countless battles. This shard allows for a brief manipulation of battle flow – rewinding minor mistakes or accelerating your own actions in crucial moments. Handle with caution, as prolonged use can disrupt temporal stability.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 45000,
        icon: '⏳',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "Allows user to rewind their last turn (once per battle)",
            "Increases attack power by 25% for 3 turns",
            "Chance to nullify one opponent’s move",
            "Provides resistance to time-based moves"
        ],
        vendor: 'league_store_elite',
        shippedBy: 'Royal Courier - Priority',
        levelRequirement: 40
    },

    'earth_land_item_crimson_echoes_of_the_frostwall': {
        id: 'earth_land_item_crimson_echoes_of_the_frostwall',
        name: "The Crimson Echoes of the Frostwall Touched Orb",
        description: "This pulsating orb, harvested from the deepest crevasses bordering the Ice Wall, vibrates with trapped whispers of ancient ice wizards. Holding it allows you to briefly perceive echoes of events that occurred near the wall – a chilling reminder of forgotten battles and arcane rituals. The quartz matrix within glows faintly red during periods of intense magical activity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🧊',
        stock: 5,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "grant temporary resistance to cold damage",
            "allows communication with spectral entities near the Ice Wall for 30 seconds",
            "chance to trigger a minor illusionary vision of past events",
            "increases perception by 10%"
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'ice_sled',
        levelRequirement: 35
    },

    'earth_land_item_sigil_of_the_stone_carver': {
        id: 'earth_land_item_sigil_of_the_stone_carver',
        name: "Sigil of the Stone Carver's Imprint",
        description: "Forged from a single piece of petrified wood and imbued with earth magic, this circular artifact feels strangely warm to the touch. When activated, it briefly accelerates the growth rate of plants within a 10-meter radius – perfect for creating impromptu barricades or cultivating rare herbs. Legends say it was crafted by a guild artisan dedicated to protecting the land.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '🌿',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "rapidly accelerates plant growth",
            "creates a temporary barrier of thorny vines",
            "restores minor soil deficiencies in nearby plants",
            "provides +2 to botany skill checks for 1 hour"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'delivery_drone',
        levelRequirement: 20
    },

    'earth_land_item_the_void_touched_shard_of_silence': {
        id: 'earth_land_item_the_void_touched_shard_of_silence',
        name: "The Void-Touched Shard of Silence (Forbidden)",
        description: "This unsettling fragment, recovered from a collapsed wizard's tower within the Shadowed Grove, radiates an unnatural stillness.  Holding it actively suppresses all sound within a 5-meter radius – a dangerous ability coveted by assassins and spies. Prolonged exposure induces paranoia and disorientation.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 70000,
        icon: '🌑',
        stock: 1,
        rarity: 'godly',
        stockType: 'night_only',
        effects: [
            "silences all sound within a 5-meter radius for 60 seconds",
            "provides +2 to stealth skill checks",
            "chance (10%) to inflict 'Silence' status on an enemy target",
            "causes mild hallucinations and paranoia if held for longer than 3 minutes"
        ],
        vendor: 'magic_shop',
        shippedBy: 'shadow_messenger',
        levelRequirement: 50
    },

    'mushroom_kingdom_item_crimson_echo_caped_fungus': {
        id: 'mushroom_kingdom_item_crimson_echo_caped_fungus',
        name: "The Crimson Echo Caped Fungus",
        description: "This pulsating, crimson fungus boasts a cap adorned with spectral echoes of forgotten platforming battles. When worn, it grants brief bursts of accelerated movement and allows the wearer to momentarily phase through solid obstacles.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '🍄',
        stock: 15,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "increased movement speed for 3 seconds",
            "brief phase through obstacles (short range)",
            "chance to trigger a small platforming echo effect"
        ],
        vendor: 'wario_direct',
        shippedBy: 'aerial_delivery_drone',
        levelRequirement: 42
    },

    'mushroom_kingdom_item_bronzed_siege_touched_spore_helmet': {
        id: 'mushroom_kingdom_item_bronzed_siege_touched_spore_helmet',
        name: "The Bronzed Siege Touched Spore Helmet Mk.37",
        description: "Forged from the remnants of a shattered siege engine and infused with resilient spore clusters, this helmet offers moderate protection while amplifying your offensive capabilities. The touch of ancient warriors grants increased damage output against armored foes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🛡️',
        stock: 33,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased attack damage",
            "resistance to blunt force trauma",
            "chance to inflict 'spore rot' on enemies"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'ground_delivery_cart',
        levelRequirement: 28
    },

    'mushroom_kingdom_item_piped_chronoflow_capstone': {
        id: 'mushroom_kingdom_item_piped_chronoflow_capstone',
        name: "The Piped Chronoflow Capstone Fragment",
        description: "This polished capstone vibrates with a faint temporal energy, subtly altering the flow of time around the wearer. It provides a small window for strategic maneuvers and dodging incoming attacks - but beware, overuse can create unstable temporal distortions.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6500,
        icon: '⏳',
        stock: 88,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "briefly slows down time (short duration)",
            "chance to rewind a few seconds of movement",
            "minor chance to create a small temporal ripple"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'standard_mail',
        levelRequirement: 15
    },

    'middle_earth_item_radiant_sworn_pipes_of_mithril': {
        id: 'middle_earth_item_radiant_sworn_pipes_of_mithril',
        name: "Radiant Sworn's Pipes of Mithril",
        description: "These intricately carved pipes, crafted from mithril ore mined deep within the Misty Mountains, emit a faint, ethereal glow. When smoked, they grant temporary resistance to cold and provide minor clarity of thought, ideal for long journeys or strategic planning.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750,
        icon: '🔥',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "cold resistance +10",
            "clarity of thought +5",
            "chance to inspire allies (+3%)"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'flying_pony',
        levelRequirement: 25
    },

    'middle_earth_item_shire_pipes_of_forgotten_songs': {
        id: 'middle_earth_item_shire_pipes_of_forgotten_songs',
        name: "Shire Pipes of Forgotten Songs",
        description: "These simple pipes, carved from elderwood and adorned with miniature hobbit faces, seem to hum with echoes of ancient melodies. Smoking them grants a brief moment of nostalgic serenity and increases social interaction skills.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 180,
        icon: '🎶',
        stock: 27,
        rarity: 'common',
        stockType: 'limited_daily',
        effects: [
            "serenity +5",
            "social interaction +10",
            "chance to gain a friendly conversation (+5%)"
        ],
        vendor: 'shire_shop',
        shippedBy: 'brown_pony',
        levelRequirement: 10
    },

    'middle_earth_item_elven_pipes_of_valinor': {
        id: 'middle_earth_item_elven_pipes_of_valinor',
        name: "Elven Pipes of Valinor, Mk.48",
        description: "These exquisitely crafted pipes are made with a rare wood harvested from the slopes of Mount Doom and imbued with a subtle, radiant energy.  Smoke reveals hidden pathways and offers temporary protection from dark magic.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6000,
        icon: '✨',
        stock: 8,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "darkness resistance +25",
            "revealing vision (short duration)",
            "chance to locate hidden objects (+10%)"
        ],
        vendor: 'elven_market',
        shippedBy: 'silver_dragon',
        levelRequirement: 40
    },

    'connectopia_item_geometrically_aligned_resonator_7': {
        id: 'connectopia_item_geometrically_aligned_resonator_7',
        name: "The Geometrically Aligned Resonator VII",
        description: "This pulsating, hexagonal component emits a low-frequency hum that harmonizes with the crystalline veins beneath Connectopia.  When integrated into mining equipment, it dramatically increases extraction yield and reduces structural instability within newly excavated tunnels. The resonator's surface is inlaid with faintly glowing geometric patterns.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '💎',
        stock: 22,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases mining yield by 30%",
            "reduces tunnel instability by 15%",
            "provides minor harmonic resonance buff"
        ],
        vendor: 'block_smith',
        shippedBy: 'Automated Drone Delivery',
        levelRequirement: 25
    },

    'connectopia_item_jeweled_sworn_shard_3': {
        id: 'connectopia_item_jeweled_sworn_shard_3',
        name: "Jeweled Sworn's Shard of Reclamation",
        description: "Recovered from the ruins of a long-abandoned pioneer outpost, this shard pulses with residual energy.  Holding it allows for short bursts of accelerated block construction – perfect for rapidly reinforcing collapsing tunnels or quickly assembling temporary shelters. The jewel embedded within shifts colors based on nearby geological activity.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7500,
        icon: '🧱',
        stock: 8,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "accelerated block placement (1-second construction)",
            "detects nearby geological instability",
            "provides a temporary shield against cave-ins"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'Courier Bot',
        levelRequirement: 40
    },

    'connectopia_item_mk.94_geometric_stabilization_module_12': {
        id: 'connectopia_item_mk.94_geometric_stabilization_module_12',
        name: "Mk.94 Geometric Stabilization Module - 12",
        description: "A meticulously crafted component designed for bolstering weak points in the Connectopian landscape.  This module projects a shimmering, geometric field that strengthens surrounding blocks, making them significantly more resistant to tremors and collapses – ideal for establishing permanent mining operations. It has been tested rigorously against simulated seismic events.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5000,
        icon: '⚙️',
        stock: 15,
        rarity: 'uncommon',
        stockType: 'special_order',
        effects: [
            "increases block resistance by 20%",
            "provides a temporary seismic dampening field",
            "reduces the chance of tunnel collapse by 10%"
        ],
        vendor: 'craft_corner',
        shippedBy: 'Standard Courier',
        levelRequirement: 30
    },

    'the_edge_item_chronal_resonance_emitter_9009': {
        id: 'the_edge_item_chronal_resonance_emitter_9009',
        name: "The Chronal Resonance Emitter 9009",
        description: "This obsidian device pulses with fractured time, capable of briefly accelerating or decelerating localized temporal flows.  Its core vibrates with the echoes of realities that never were – handle with utmost caution to avoid collapsing your own timeline.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 65000,
        icon: '⏳',
        stock: 12,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "temporarily increases movement speed by 30%",
            "chance to rewind a single action (5% chance)",
            "slows down enemy projectiles for 2 seconds",
            "causes minor temporal distortions, briefly blurring vision"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'dimensional_rift',
        levelRequirement: 35
    },

    'the_edge_item_noble_piercer_remnant_7814': {
        id: 'the_edge_item_noble_piercer_remnant_7814',
        name: "Noble Piercer's Remnant 7814",
        description: "A shard of solidified light, cool to the touch and humming with suppressed energy.  This remnant allows for focused bursts of concussive force, capable of shattering stone and disrupting enemy defenses.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '💥',
        stock: 45,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "deals 80-120 damage on impact",
            "chance to stun enemies",
            "temporarily increases critical hit chance by 10%",
            "creates a small shockwave, pushing back nearby enemies"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'sky_drone',
        levelRequirement: 20
    },

    'the_edge_item_ultimate_remnants_of_null_space_4567': {
        id: 'the_edge_item_ultimate_remnants_of_null_space_4567',
        name: "Ultimate Remnants of Null Space 4567",
        description: "Fragments gathered from the heart of absolute nothingness, these shimmering cubes drain energy and distort perception.  Exposure can cause disorientation and temporary stat penalties.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3800,
        icon: '🌫️',
        stock: 8,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "reduces maximum health by 10%",
            "temporarily decreases attack damage by 20%",
            "chance to inflict confusion on enemies for 3 seconds",
            "creates a small zone of silence, muffling sounds"
        ],
        vendor: 'final_shop',
        shippedBy: 'gravitic_tube',
        levelRequirement: 15
    },

    'kivotos_item_gilded_semester_breaker': {
        id: 'kivotos_item_gilded_semester_breaker',
        name: "The Gilded Semester Breaker Medallion",
        description: "Forged during the chaotic final semester of the Academy's Robotics Club, this medallion grants temporary resistance to sonic disruption. It pulses with a faint golden light and resonates faintly with the club’s experimental audio dampeners.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '🔊',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Sonic Resistance (30 seconds)",
            "Minor Audio Dampening",
            "Increased Reaction Speed"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery',
        levelRequirement: 15
    },

    'kivotos_item_mk75_broken_notes_breaker': {
        id: 'kivotos_item_mk75_broken_notes_breaker',
        name: "Mk.75 Broken Notes Breaker Device",
        description: "A salvaged piece of equipment from the notorious 'Syntax Scavengers' club, this device emits a targeted electromagnetic pulse designed to disrupt data streams and temporarily disable electronic security systems. Beware its unstable operation – it occasionally produces bursts of static.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1800,
        icon: '⚡',
        stock: 17,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Disrupts Electronic Security (60 seconds)",
            "Temporary Data Corruption",
            "Small EMP Blast (Chance)"
        ],
        vendor: 'club_supply',
        shippedBy: 'Courier Bot',
        levelRequirement: 28
    },

    'kivotos_item_semester_gated_breaker': {
        id: 'kivotos_item_semester_gated_breaker',
        name: "The Semester Gated Breaker Fragment",
        description: "Recovered from the ruins of the defunct 'Philosophical Debate Club,' this fragment vibrates with residual intellectual energy. It is said to briefly heighten cognitive function and provide a flash of insight – though its effects are wildly unpredictable.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '🧠',
        stock: 9,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "Temporary Intellect Boost (15 seconds)",
            "Random Thought Surge",
            "Increased Deduction Ability",
            "Minor Mental Static"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Delivery Drone',
        levelRequirement: 42
    },

    'leclaire_isle_item_baked_crumbs_of_sweet': {
        id: 'leclaire_isle_item_baked_crumbs_of_sweet',
        name: "The Baked Crumbs of Sweet Serenade",
        description: "These iridescent crumbs, baked within a miniature gingerbread cathedral, emit a faint, hypnotic melody. Consuming them grants temporary heightened senses and a craving for even more saccharine delights.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🎶',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Increased Perception (+10%) for 60 seconds",
            "Minor Sugar Rush (temporary speed boost)",
            "Charm (increased social interaction)"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'Dough Cart',
        levelRequirement: 15
    },

    'leclaire_isle_item_ominous_finder_s_crumbs': {
        id: 'leclaire_isle_item_ominous_finder_s_crumbs',
        name: "Ominous Finder’s Crumbs of the Silent Hearth",
        description: "Dark, charcoal-colored crumbs harvested from a forgotten oven deep within the Dough Folk caverns.  Each crumb whispers cryptic warnings about impending pastry disasters and unsettling sweetness.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '💀',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Minor Chance of Foresight (chance to avoid negative events)",
            "Ominous Resonance (causes nearby creatures to feel unease)",
            "Increased Resistance to Sugar-Based Attacks"
        ],
        vendor: 'dough_depot',
        shippedBy: 'Night Cart',
        levelRequirement: 30
    },

    'leclaire_isle_item_mk53_baked_crumbs': {
        id: 'leclaire_isle_item_mk53_baked_crumbs',
        name: "Mk.53 Baked Crumbs of the Golden Glaze",
        description: "Precision-engineered crumbs, meticulously baked in automated ovens, each containing a perfectly synthesized drop of golden glaze.  These crumbs offer unparalleled structural integrity and a tantalizingly complex flavor profile.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🧱',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Structural Reinforcement (+2 Armor)",
            "Golden Glaze Coating (resistance to acid damage)",
            "Temporal Stabilization (slight slowing of time around the user)"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'Royal Courier Drone',
        levelRequirement: 50
    },

    'grand_country_item_brutal_hook_hunter_7922': {
        id: 'grand_country_item_brutal_hook_hunter_7922',
        name: "Brutal Hunter's Hooks - Obsidian Ascent",
        description: "These brutally forged hooks, crafted from solidified volcanic obsidian, are designed for scaling the most brutal vertical cliffs of The Grand Country. Each hook possesses an elevated grip and a shockingly sharp point, capable of securing purchase on even the slickest surfaces – a hunter’s dream.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🧗‍♀️',
        stock: 37,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased_climbing_speed",
            "enhanced_grip",
            "resistance_to_falling"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'delivery_only',
        levelRequirement: 15
    },

    'grand_country_item_layered_hook_hunter_7922': {
        id: 'grand_country_item_layered_hook_hunter_7922',
        name: "Layered Hook Hunter - The Gradient’s Embrace",
        description: "The Layered Hook Hunter – The Gradient’s Embrace is a complex device, meticulously constructed to latch onto the layered strata of The Grand Country. Featuring a series of rotating hooks with adjustable angles and reinforced with hardened sugar crystals, it allows for rapid traversal of even the most intricate climbs.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '🍬',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "rapid_climbing_boost",
            "increased_climb_duration",
            "slows_falling_speed"
        ],
        vendor: 'layer_market',
        shippedBy: 'delivery_only',
        levelRequirement: 28
    },

    'grand_country_item_elevated_hook_hunter_7922': {
        id: 'grand_country_item_elevated_hook_hunter_7922',
        name: "Mk.39 Elevated Hooks - Skyfall’s Sentinel",
        description: "These elevated hooks, forged with a mysterious alloy known as ‘Skyfall’, are legendary among climbers of The Grand Country. They possess an uncanny ability to resist extreme temperatures and maintain their grip even in the harshest conditions – truly a sentinel against the void.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🌌',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "immunity_to_extreme_temperature",
            "increased_climbing_speed_tier2",
            "automatic_hook_retraction",
            "resistance_to_vertical_falls"
        ],
        vendor: 'side_seller',
        shippedBy: 'shipping_express',
        levelRequirement: 45
    },

    'animatopia_item_verdant_seeker_fangs': {
        id: 'animatopia_item_verdant_seeker_fangs',
        name: "Verdant Seeker's Fangs of the Whispering Root",
        description: "These fangs, carved from the heartwood of a sentient willow tree, hum with verdant energy. When worn, they grant the wearer enhanced tracking abilities and a subtle connection to the spirit realm, allowing them to follow trails invisible to normal eyes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌿',
        stock: 35,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increased tracking skill +20%",
            "chance to detect hidden trails",
            "minor spirit resonance (provides faint warnings)"
        ],
        vendor: 'tribal_trader',
        shippedBy: 'Winged Courier Pigeon',
        levelRequirement: 15
    },

    'animatopia_item_totemic_rune_amulet_42': {
        id: 'animatopia_item_totemic_rune_amulet_42',
        name: "Mk.40 Totemic Rune Amulet of the Crimson Talon",
        description: "Forged by the Shadow Clan, this amulet pulses with primal power – a solidified echo of their ancestral spirit guardian. Wearing it grants temporary resilience to predator attacks and allows the wearer to momentarily mimic the predatory instincts of avian predators.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🦅',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "resistance to predator attacks +30%",
            "mimic predatory instincts (increased attack speed & reflexes)",
            "chance to inflict fear on weaker enemies"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'Dire Wolf Express',
        levelRequirement: 35
    },

    'animatopia_item_ancestral_echo_fragment': {
        id: 'animatopia_item_ancestral_echo_fragment',
        name: "Fragment of the Elder Stag's Lament",
        description: "A shimmering shard believed to contain a portion of the memories and essence of the ancient Great Stag, guardian spirit of the Verdant Glades. Holding this fragment induces visions of forgotten rituals and grants temporary access to ancestral knowledge, but can also overwhelm the unwary mind.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '🦌',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grant access to limited ancestral knowledge (skill boosts)",
            "chance of temporary madness (negative effect)",
            "visual hallucinations (provides clues)"
        ],
        vendor: 'forest_market',
        shippedBy: 'Root Runner Delivery',
        levelRequirement: 45
    },

    'faerun_item_the_chronometer_of_old_dwarven_songs': {
        id: 'faerun_item_the_chronometer_of_old_dwarven_songs',
        name: "The Chronometer of Old Dwarven Songs",
        description: "This intricately carved brass chronometer pulses with faint, rhythmic vibrations, echoing the ancient songs sung by dwarven stone-carvers. When activated, it briefly accelerates or decelerates time within a small radius, offering glimpses into potential futures or reversing minor mishaps.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '⏳',
        stock: 7,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "temporarily speeds up actions by 25%",
            "allows a brief rewind of the last 3 seconds",
            "chance to reveal a possible future outcome",
            "increased perception for 1 minute"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'air_ship',
        levelRequirement: 35
    },

    'faerun_item_the_thiefs_gilded_whisper_blade': {
        id: 'faerun_item_the_thiefs_gilded_whisper_blade',
        name: "The Thief's Gilded Whisper Blade",
        description: "Forged from a meteorite fallen upon the Spine of the World, this wickedly curved dagger hums with suppressed energy. The blade seems to anticipate an opponent’s movements, granting the wielder uncanny accuracy and the ability to bypass magical defenses.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🔪',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased critical hit chance by 15%",
            "chance to bypass magical resistance",
            "shadow step - allows short-range teleportation (once per day)",
            "advantage on stealth checks"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'horseback',
        levelRequirement: 20
    },

    'faerun_item_the_zealous_artifact_of_korthos': {
        id: 'faerun_item_the_zealous_artifact_of_korthos',
        name: "The Zealous Artifact of Korthos",
        description: "This obsidian orb, etched with unsettling zealotry symbols, radiates an aura of intense devotion. When held, it amplifies the wielder’s courage and resolve, but also risks overwhelming their sanity with fanatical conviction.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5800,
        icon: '🔮',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "increased temporary hit points by 50",
            "advantage on saving throws against fear effects",
            "chance to inflict madness on a single target",
            "boosts charisma checks (minor)"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'wagon',
        levelRequirement: 15
    },

    'teyvat_item_twilight_severance_blade': {
        id: 'teyvat_item_twilight_severance_blade',
        name: "The Twilight Severance Blade of the Crimson Pact",
        description: "This obsidian greatsword pulses with a faint, twilight energy. Crafted by forgotten smiths loyal to Khaenri'ah, it disrupts elemental flows and can momentarily negate defensive Geo constructs, leaving enemies vulnerable. Its hilt is inlaid with shards of crimson stone, said to hold the echoes of lost souls.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '⚔️',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "negates geo defense for 3 seconds",
            "chance to disrupt elemental flow on attack",
            "increased critical hit damage against geo enemies",
            "passive regeneration of stamina"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'winged_courier',
        levelRequirement: 35
    },

    'teyvat_item_geolithic_resonance_extractor': {
        id: 'teyvat_item_geolithic_resonance_extractor',
        name: "Mk.78 Geolithic Resonance Extractor - Dragon's Breath Variant",
        description: "A complex, geo-infused device designed to siphon raw earth resonance directly from geological formations. The 'Dragon's Breath' variant focuses on amplifying heat, capable of rapidly eroding stone and creating localized bursts of intense thermal energy – a potent tool for excavation or devastating attacks. Beware its volatile nature.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '⛏️',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "deals geo damage over time",
            "creates a small area of ignited stone",
            "chance to trigger earth tremors (stuns nearby enemies)",
            "increases mining speed by 50%"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'sea_cart',
        levelRequirement: 40
    },

    'teyvat_item_phantom_veil_of_the_seven_storms': {
        id: 'teyvat_item_phantom_veil_of_the_seven_storms',
        name: "The Phantom Veil of the Seven Storms - Inazuma Fragmented Edition",
        description: "A shimmering, semi-opaque fabric woven from condensed storm energies. Imbued with fragments of Inazuma's temporal currents, this veil creates a localized distortion field, slowing down movement and reducing attack speed for those caught within its grasp – perfect for tactical retreats or ambushes. Its intricate patterns shift constantly.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 5000,
        icon: '🌫️',
        stock: 33,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "slows enemy movement speed by 30%",
            "reduces attack damage of nearby enemies",
            "provides a temporary shield against elemental attacks (water/lightning)",
            "chance to inflict ‘confusion’ on the target"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'wind_borne_ship',
        levelRequirement: 20
    },

    'internet_item_compressed_bytes_of_the_void': {
        id: 'internet_item_compressed_bytes_of_the_void',
        name: "The Void's Compressed Bytes",
        description: "These shimmering, obsidian-hued bytes pulse with the static of forgotten servers. Consuming them grants a brief glimpse into the empty spaces between data streams, potentially revealing lost connections or unsettling digital anomalies.  Beware, prolonged exposure can induce temporary data fragmentation and phantom sensations.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '👾',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Grants temporary invisibility (10 seconds)",
            "Chance to steal a random byte from nearby targets",
            "Minor data corruption effect on enemies",
            "Increased processing speed for 30 seconds"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Drone Delivery',
        levelRequirement: 15
    },

    'internet_item_radiant_lord_of_the_pixel': {
        id: 'internet_item_radiant_lord_of_the_pixel',
        name: "The Radiant Lord's Pixel",
        description: "Forged from concentrated light and digital echoes, this pulsating pixel grants control over the visual landscape. It radiates a blinding aura, disrupting enemy targeting systems and amplifying your own sensory input - though it can overwhelm the uninitiated.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '✨',
        stock: 8,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "Creates a blinding flash of light that disorients enemies",
            "Increases visual acuity and reaction time",
            "Grants immunity to visual illusions",
            "Allows temporary control over nearby pixelated objects"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Cyber Courier',
        levelRequirement: 35
    },

    'internet_item_mk_87_compressed_bytes_of_the_algorithm': {
        id: 'internet_item_mk_87_compressed_bytes_of_the_algorithm',
        name: "Mk.87 Compressed Bytes of the Algorithm",
        description: "A meticulously crafted collection of compressed data fragments, this item is said to contain distilled logic and core algorithms from defunct operating systems.  Utilizing these bytes grants access to previously inaccessible functions, but at a steep risk of system instability.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5000,
        icon: '💻',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Grants access to advanced hacking abilities",
            "Temporarily modifies enemy AI behavior",
            "Provides a small chance to instantly solve complex puzzles",
            "Increases the efficiency of digital tools by 50%"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Quantum Shipping',
        levelRequirement: 50
    },

    'connectopia_item_modular_resonance_caller': {
        id: 'connectopia_item_modular_resonance_caller',
        name: "The Harmonious Echo Caller - Prototype 7",
        description: "This intricately crafted, modular device amplifies vibrational patterns within blocks, allowing for targeted construction and resonance manipulation. Its central core pulses with a faint cyan light, promising stability to any connected structure – though its effects can be unpredictable when overloaded.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🔊',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases block construction speed by 25%",
            "creates a localized resonance field (chance of structural instability)",
            "allows for temporary connection between distant blocks",
            "emits harmonic tones that attract small mechanical constructs"
        ],
        vendor: 'craft_corner',
        shippedBy: 'automated_drone',
        levelRequirement: 25
    },

    'connectopia_item_imperial_stability_module_97': {
        id: 'connectopia_item_imperial_stability_module_97',
        name: "The Citadel Stabilizer - Level 3 Iteration",
        description: "Forged within the Imperial Blocksmith Guild, this module is a complex arrangement of interlocking blocks designed to reinforce and mitigate structural weaknesses. Its polished obsidian surface exudes an aura of profound solidity, offering protection against tremors and collapses – though prolonged use can induce feelings of rigid conformity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🧱',
        stock: 18,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "significantly increases block durability by 50%",
            "provides a protective shield against minor structural damage",
            "reduces the chance of block collapse in adjacent areas",
            "slowly converts surrounding blocks to a more stable, modular composition"
        ],
        vendor: 'block_smith',
        shippedBy: 'reinforced_cart',
        levelRequirement: 40
    },

    'connectopia_item_mythic_fractured_harmonic_caller_prime': {
        id: 'connectopia_item_mythic_fractured_harmonic_caller_prime',
        name: "The Primeval Resonator - Fragmented Sequence",
        description: "Recovered from the ruins of a forgotten pioneer settlement, this legendary device is a chaotic assemblage of fractured harmonic blocks, pulsing with raw potential. It can trigger devastating chain reactions within structures or weave intricate patterns across vast distances – but its unstable nature demands absolute control and a keen understanding of block dynamics.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 65000,
        icon: '💥',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "causes a massive chain reaction within connected blocks (high risk/reward)",
            "allows for the instantaneous teleportation of blocks across short distances",
            "generates chaotic harmonic waves that disrupt existing structures",
            "attracts powerful mechanical guardians - The Resonators"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'gravitic_carrier',
        levelRequirement: 50
    },

    'almost_edge_item_the_marginal_whispers_of_boundary': {
        id: 'almost_edge_item_the_marginal_whispers_of_boundary',
        name: "The Marginal Whispers of Boundary",
        description: "A brittle, obsidian shard that hums with the unsettling silence just beyond perception. Holding it grants fleeting glimpses into fractured realities where the doughnut's edge is constantly shifting, promising madness to those who linger too long.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🌀',
        stock: 47,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Grants temporary resistance to disorientation.",
            "Provides a fleeting glimpse of the boundary's true form.",
            "Decreases movement speed by 10% for 3 turns.",
            "Chance to trigger a minor hallucination."
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Gravity Sling',
        levelRequirement: 15
    },

    'almost_edge_item_malevolent_wielder_s_whispers': {
        id: 'almost_edge_item_malevolent_wielder_s_whispers',
        name: "Malevolent Wielder’s Whispers",
        description: "A tarnished silver locket containing a captured fragment of a void-touched wail. It seems to crave the sensation of falling, and its touch carries a chilling premonition of oblivion.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '😈',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Increases attack damage by 3% for 5 turns.",
            "Grants a chance to inflict 'Fear' on enemies.",
            "Reduces defense by 2% at night.",
            "Passive: Slowly drains stamina."
        ],
        vendor: 'void_merchant',
        shippedBy: 'Dimensional Courier',
        levelRequirement: 30
    },

    'almost_edge_item_mk_57_marginal_whispers': {
        id: 'almost_edge_item_mk_57_marginal_whispers',
        name: "Mk.57 Marginal Whispers",
        description: "A complex device constructed from fractured doughnut pastry and pulsating void energy. This handheld resonator emits a constant stream of fragmented warnings, each more unsettling than the last.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 38000,
        icon: '⚠️',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Provides a constant stream of cryptic warnings.",
            "Increases perception by 15% while near the edge.",
            "Chance to detect hidden enemies or traps.",
            "Grants immunity to 'Panic' effects."
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Quantum Entanglement',
        levelRequirement: 50
    },

    'mushroom_kingdom_item_super_caps_of_pipes_7': {
        id: 'mushroom_kingdom_item_super_caps_of_pipes_7',
        name: "The Super Caps of Pipes - Mk.7",
        description: "These iridescent caps, harvested from the deepest pipes beneath Wartopia, grant unparalleled speed and resilience when traversing subterranean passages.  Each cap pulses with a faint pneumatic rhythm, channeling the very essence of Mushroom Kingdom’s infrastructure.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🚀',
        stock: 45,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increased Speed (30%) for 60 seconds",
            "Resistance to Pressure Damage",
            "Minor Pneumatic Boost - Increased Jump Height"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'pneumatic_drone',
        levelRequirement: 25
    },

    'mushroom_kingdom_item_gilded_walker_caps_13': {
        id: 'mushroom_kingdom_item_gilded_walker_caps_13',
        name: "Gilded Walker's Caps - Model 13",
        description: "Forged from the petrified husks of ancient fungal warriors, these caps grant a slow, deliberate movement akin to a walker. They offer protection against blunt force and an eerie stillness.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🛡️',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Slow Movement (Reduced Speed by 50%) - Grants increased defense.",
            "Blunt Force Resistance (75%)",
            "Minor Static Shield"
        ],
        vendor: 'wario_direct',
        shippedBy: 'magical_snail',
        levelRequirement: 40
    },

    'mushroom_kingdom_item_chrono_caps_of_decay_92': {
        id: 'mushroom_kingdom_item_chrono_caps_of_decay_92',
        name: "Chrono Caps of Decay - Designation 92",
        description: "These enigmatic caps, discovered within a temporal rift near Mount Beanpole, allow brief manipulation of localized time flow.  Handle with extreme caution – paradoxes abound!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 65000,
        icon: '⏳',
        stock: 1,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "Localized Time Slow (3 seconds)",
            "Minor Temporal Echo - Creates a brief afterimage.",
            "Risk of Paradox – Chance for temporary stat debuff."
        ],
        vendor: 'koopa_shop',
        shippedBy: 'dimensional_wormhole',
        levelRequirement: 50
    },

    'pokemon_item_the_chronometric_ribbon_of_aethelred': {
        id: 'pokemon_item_the_chronometric_ribbon_of_aethelred',
        name: "The Chronometric Ribbon of Aethelred",
        description: "This shimmering ribbon, woven from the temporal threads of a fallen Chrono-Pokémon, grants brief bursts of accelerated movement and allows the wearer to subtly manipulate the flow of time around themselves.  It pulses with a faint blue light, reflecting the echoes of battles fought across centuries.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '⏳',
        stock: 5,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "Increased Movement Speed (3 seconds)",
            "Minor Temporal Distortion (1% chance to rewind small actions)",
            "Resistance to Time-Based Status Effects"
        ],
        vendor: 'pokemart',
        shippedBy: 'Magikarp Delivery Drone',
        levelRequirement: 40
    },

    'pokemon_item_the_nether_sworn_ribbon_of_voidshade': {
        id: 'pokemon_item_the_nether_sworn_ribbon_of_voidshade',
        name: "The Nether Sworn's Ribbon of Voidshade",
        description: "Forged in the deepest reaches of a collapsed volcano, this ribbon absorbs and redirects shadow energy, bolstering your Pokémon’s attack power during night battles. The dark crimson weave whispers promises of forgotten battles sworn to darkness.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 6500,
        icon: '🌑',
        stock: 23,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Attack Boost (10%) during Night Battles",
            "Shadow Resistance (50%)",
            "Minor Chance to inflict Shadow Burn"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Pidgeotto Courier',
        levelRequirement: 30
    },

    'pokemon_item_mk.94_legendary_ribbon_of_stormcaller': {
        id: 'pokemon_item_mk.94_legendary_ribbon_of_stormcaller',
        name: "Mk.94 Legendary Ribbons of Stormcaller",
        description: "Recovered from the ruins of an ancient League facility, these ribbons amplify the power of Water-type Pokémon during electrical storms. Each ribbon is etched with glyphs that seem to shift and change in the rain.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 9000,
        icon: '⚡',
        stock: 8,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Water-type Attack Boost (15%) during Thunderstorms",
            "Increased Special Attack Power (5%)",
            "Chance to trigger a ‘Torrent’ effect (small rainstorm)"
        ],
        vendor: 'league_store',
        shippedBy: 'Beedrill Delivery Service',
        levelRequirement: 28
    },

    'teyvat_item_brutal_stonebreaker_striker': {
        id: 'teyvat_item_brutal_stonebreaker_striker',
        name: "The Molten Sentinel's Fist",
        description: "A massive, obsidian gauntlet imbued with raw Geo energy from the depths beneath Liyue Harbor. When activated, it grants immense strength and a devastating impact force, capable of shattering stone and disrupting elemental flows. It resonates with brutal power – a testament to the earth’s relentless pressure.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '👊',
        stock: 12,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "increased_strength",
            "geo_impact",
            "resistance_to_physical_damage",
            "chance_to_stun"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'Dragon Boat Delivery',
        levelRequirement: 35
    },

    'teyvat_item_hydro_resonance_striker': {
        id: 'teyvat_item_hydro_resonance_striker',
        name: "The Aqueous Weaver's Shard",
        description: "A fragmented prism harvested from the deepest currents surrounding Mondstadt, pulsating with controlled hydro energy. This shard allows the user to manipulate water flows with incredible precision, creating localized storms and defensive barriers. It’s a testament to the careful balance of the nation.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '💧',
        stock: 45,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "hydro_damage",
            "water_manipulation",
            "healing_over_time",
            "increased_movement_speed_in_water"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'Wind Rider Courier',
        levelRequirement: 20
    },

    'teyvat_item_wind_echo_curiosity': {
        id: 'teyvat_item_wind_echo_curiosity',
        name: "The Zephyr Cartographer's Compass",
        description: "A meticulously crafted astrolabe composed of crystallized wind and Inazuman lacquer, capable of charting the unpredictable currents of the Shuumatsuban. This curiosity reveals hidden pathways and temporal distortions within the storms, offering glimpses into forgotten timelines - a dangerous tool for ambitious travelers.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '🧭',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "reveals_hidden_paths",
            "temporal_distortion_resistance",
            "chance_to_teleport",
            "increased_navigation_skill"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'Seabird Express',
        levelRequirement: 40
    },

    'middle_earth_item_the_grimstone_chosen_brace': {
        id: 'middle_earth_item_the_grimstone_chosen_brace',
        name: "The Grimstone Chosen’s Mithril Brace",
        description: "This ominous brace, forged in the depths of Moria by forgotten dwarves, pulses with a chilling resonance. It grants its wearer increased resilience against shadow magic and whispers of despair, channeling the stubborn will of those deemed ‘chosen’. The silver mithril subtly shifts, mirroring the wearer’s darkest thoughts.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '💀',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased resistance to shadow magic",
            "boosts willpower",
            "chance to inflict fear on weaker enemies",
            "grants bonus movement speed in dark areas"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'dragon_cart',
        levelRequirement: 25
    },

    'middle_earth_item_the_lothlorien_seed_of_echoes': {
        id: 'middle_earth_item_the_lothlorien_seed_of_echoes',
        name: "The Lothlórien Seed of Echoes",
        description: "A luminescent, jade-green seed harvested from the heartwood of a White Tree in Lothlórien. When held to the ear, it subtly amplifies whispered words and forgotten memories, revealing hidden pathways and long-lost secrets. It resonates with ancient elven magic, offering glimpses into past events.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12500,
        icon: '🌿',
        stock: 8,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "reveals hidden pathways in forests",
            "increases perception and awareness",
            "allows limited communication with spirits of nature",
            "provides a temporary bonus to lore-related skills"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_horse',
        levelRequirement: 35
    },

    'middle_earth_item_the_forbidden_heartstone_shard': {
        id: 'middle_earth_item_the_forbidden_heartstone_shard',
        name: "The Forbidden Heartstone Shard",
        description: "A jagged fragment of a corrupted heartstone, radiating an unsettling chill and pulsing with dark energy. This forbidden relic offers immense power but carries the risk of madness and corruption, slowly twisting the wearer’s thoughts and desires. It is said to contain echoes of Morgoth's malice.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 55000,
        icon: '🖤',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "drastically increases damage output",
            "grants temporary immunity to fear and charm effects",
            "corrupts the wearer's alignment over time",
            "allows manipulation of shadows and darkness"
        ],
        vendor: 'shadow_merchant',
        shippedBy: 'direwolf',
        levelRequirement: 50
    },

    'equestria_item_the_haunted_master_apples': {
        id: 'equestria_item_the_haunted_master_apples',
        name: "The Haunted Master’s Apples of Whispering Briar",
        description: "These obsidian-black apples pulse with a faint, unsettling energy. Consuming them grants fleeting visions of forgotten ponies and their haunted memories – a bittersweet taste of Equestrian history.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 12000,
        icon: '👻',
        stock: 7,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Grants temporary clairvoyance (30 seconds)",
            "Causes unsettling dreams for 1 hour",
            "Increases resistance to fear effects by 25%",
            "May attract spectral ponies"
        ],
        vendor: 'shadow_grove_merchant',
        shippedBy: 'Phantom Courier',
        levelRequirement: 35
    },

    'equestria_item_mk_52_honest_apples': {
        id: 'equestria_item_mk_52_honest_apples',
        name: "Mk.52 Honest Apples of Silverstream Valley",
        description: "These perfectly symmetrical apples, harvested from the heart of Silverstream Valley, radiate a comforting warmth and an aura of unwavering truth.  A bite reveals not only sweetness but also a surprisingly potent effect on deception.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '🍎',
        stock: 42,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "Temporarily reveals lies (1 minute)",
            "Restores a small amount of HP (50 points)",
            "Increases Charisma by 10 for 30 seconds",
            "Provides a feeling of genuine honesty"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Swift Delivery Pony',
        levelRequirement: 18
    },

    'equestria_item_amber_apple_master_of_resonance': {
        id: 'equestria_item_amber_apple_master_of_resonance',
        name: "Amber Apple Master of Resonance – Equine Echoes",
        description: "Crafted from amber-hued apples grown in the Crystal Caves, this artifact vibrates with a subtle, harmonic frequency.  Holding it allows one to briefly amplify and manipulate sonic energies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5800,
        icon: '🎶',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "Amplifies sound effects by 50%",
            "Allows for short-range sonic blasts (deals 30 damage)",
            "Grants a chance to stun enemies with a resonant frequency",
            "Increases perception of subtle sounds"
        ],
        vendor: 'crystal_empire_arsenal',
        shippedBy: 'Royal Courier',
        levelRequirement: 25
    },

    'mushroom_kingdom_item_frostfang_star_taker': {
        id: 'mushroom_kingdom_item_frostfang_star_taker',
        name: "The Frostfang Star Taker's Shard",
        description: "This jagged shard pulses with an unnatural, ice-blue light. Holding it grants a temporary surge of speed and the ability to briefly freeze enemies in place, perfect for tactical maneuvers amidst the chaotic battlefield.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '❄️',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased speed for 10 seconds",
            "temporarily freezes enemies",
            "chance to inflict frostbite",
            "small chance of creating a localized ice patch"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Royal Post Cart',
        levelRequirement: 15
    },

    'mushroom_kingdom_item_spectral_echo_taker': {
        id: 'mushroom_kingdom_item_spectral_echo_taker',
        name: "Spectral Echo's Whisper Collector",
        description: "This translucent orb constantly shifts with ghostly images, capturing fragmented memories and amplifying the user’s senses. When activated, it allows brief glimpses of alternate realities and heightened perception of enemy movements.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '👻',
        stock: 15,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "increased perception of enemy movements",
            "chance to briefly see alternate realities",
            "boosts psychic resistance",
            "chance to induce temporary confusion in enemies"
        ],
        vendor: 'wario_direct',
        shippedBy: 'Phantom Delivery Drone',
        levelRequirement: 35
    },

    'mushroom_kingdom_item_mk74_ice_star_of_resonance': {
        id: 'mushroom_kingdom_item_mk74_ice_star_of_resonance',
        name: "Mk.74 Ice Star of Resonance",
        description: "A perfectly symmetrical ice-blue star, etched with ancient symbols. When thrown, it creates a devastating sonic resonance that damages nearby enemies and can shatter weak structures, perfect for clearing paths.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3500,
        icon: '🌟',
        stock: 8,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "deals sonic damage to enemies in range",
            "chance to shatter weak structures",
            "creates a brief disorienting effect",
            "increases critical hit chance"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'Dimensional Courier',
        levelRequirement: 50
    },

    'faerun_item_gilded_scrolls_of_the_dragon_chosen': {
        id: 'faerun_item_gilded_scrolls_of_the_dragon_chosen',
        name: "Gilded Scrolls of the Dragon Chosen",
        description: "These scrolls, crafted from dragon scales and gilded with pure electrum, contain forgotten rituals for invoking the blessings of ancient dragons. Unrolling them whispers secrets of power, granting temporary resistance to fire damage and bolstering courage against fear.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🔥',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grants fire resistance for 60 seconds",
            "increases courage by +10 for 30 seconds",
            "chance to inflict fear on a single enemy (15%)"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'Griffon Post',
        levelRequirement: 25
    },

    'faerun_item_mk_21_shadow_shard_of_blackhaven': {
        id: 'faerun_item_mk_21_shadow_shard_of_blackhaven',
        name: "Mk.21 Shadow Shard of Blackhaven",
        description: "A fragment of solidified shadow, pulsing with a chilling energy harvested from the haunted ruins of Blackhaven. Holding this shard grants limited control over darkness and can be used to briefly obscure vision and drain vitality.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🌑',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "grants invisibility for 15 seconds",
            "drains vitality from a single target (deals 2d6 necrotic damage)",
            "increases stealth by +3 for 60 seconds"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'Courier Drake',
        levelRequirement: 40
    },

    'faerun_item_scroll_of_the_shadowed_dragon_ward': {
        id: 'faerun_item_scroll_of_the_shadowed_dragon_ward',
        name: "Scroll of the Shadowed Dragon Ward",
        description: "This meticulously drawn scroll depicts a protective ward designed to mimic the defenses of a juvenile shadow dragon. When activated, it creates a shimmering field around the user, deflecting blows and shielding against dark magic.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 5800,
        icon: '🛡️',
        stock: 9,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "creates a protective shield that absorbs 5d6 damage",
            "provides resistance to necrotic and shadow damage for 120 seconds",
            "chance to reflect magical attacks (20%)"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'Sea Serpent Courier',
        levelRequirement: 50
    },

    'doughnut_hole_item_collapsed_collapses_of_void_01': {
        id: 'doughnut_hole_item_collapsed_collapses_of_void_01',
        name: "The Collapsed Collapses of Void-Heart’s Echo",
        description: "These obsidian shards, fractured from a collapsed nexus point, pulse with the faintest remnants of forgotten screams. Holding them briefly grants an unsettling clarity, revealing glimpses of events long since swallowed by the center’s influence.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 125,
        icon: '🌑',
        stock: 47,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Temporary Clarity (30 seconds)",
            "Minor Void Resistance",
            "Slight Distortion of Hearing"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dimensional Courier',
        levelRequirement: 15
    },

    'doughnut_hole_item_jeweled_breaker_of_silent_depths_02': {
        id: 'doughnut_hole_item_jeweled_breaker_of_silent_depths_02',
        name: "Jeweled Breaker's Collapses – Silent Depths Variant",
        description: "Crafted from the solidified silence of a drowned observatory, these jeweled collapses emit a low hum that disrupts psychic disturbances. Utilizing them offers protection against intrusive thoughts and allows brief moments of focused awareness within the center’s chaos.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '💎',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Psychic Resistance (Moderate)",
            "Increased Focus (+10%)",
            "Minor Static Interference"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Void Runner Drone',
        levelRequirement: 32
    },

    'doughnut_hole_item_mk_24_collapsed_collapses_of_center_03': {
        id: 'doughnut_hole_item_mk_24_collapsed_collapses_of_center_03',
        name: "Mk.24 Collapsed Collapses – Center Alignment Model",
        description: "These meticulously crafted collapses resonate with the core’s vibrational signature, briefly amplifying perception and allowing for rudimentary manipulation of spatial anomalies within a small radius. Handle with caution; prolonged exposure can induce disorientation.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '🌀',
        stock: 3,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Localized Spatial Distortion (Small Area)",
            "Enhanced Sensory Perception (+20%)",
            "Risk of Disorientation (10% chance)"
        ],
        vendor: 'center_seller',
        shippedBy: 'Temporal Dispatcher',
        levelRequirement: 48
    },

    'the_edge_item_crimson_echo_weaver_9': {
        id: 'the_edge_item_crimson_echo_weaver_9',
        name: "The Zealous Weaver's Crimson Echoes",
        description: "This intricate device captures and replays the fragmented screams of lost souls, momentarily solidifying their fear into tangible shadows.  It pulses with a dangerous, internal heat and seems to actively seek out locations of past trauma. Prolonged use can induce debilitating paranoia.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🔥',
        stock: 37,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Increases shadow manipulation abilities by 20% for 60 seconds",
            "Chance to inflict 'Fear' status on enemies (15%)",
            "Lowers sanity by 5 points per minute",
            "Provides a faint crimson glow in dark areas."
        ],
        vendor: 'abyss_trader',
        shippedBy: 'Sky Courier Drone',
        levelRequirement: 22
    },

    'the_edge_item_infinite_void_loom_17': {
        id: 'the_edge_item_infinite_void_loom_17',
        name: "The Infinite Void Loom of Static Threads",
        description: "A terrifying apparatus constructed from solidified shadows and humming with an unsettling silence.  It spins strands of pure void, capable of unraveling the fabric of reality itself – though its purpose remains frustratingly obscure. The device occasionally emits a high-pitched whine that causes intense headaches.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6500,
        icon: '🌀',
        stock: 12,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Chance to teleport the user to a random location within a 10-meter radius (10%)",
            "Slows enemy movement speed by 30% for 30 seconds upon activation.",
            "Causes hallucinations and disorientation (moderate)",
            "Provides a passive shield against psychic attacks."
        ],
        vendor: 'edge_outpost',
        shippedBy: 'Ground Transport Vehicle',
        levelRequirement: 35
    },

    'the_edge_item_forbidden_observer_shard_42': {
        id: 'the_edge_item_forbidden_observer_shard_42',
        name: "The Forbidden Observer's Shadow Shard",
        description: "A pulsating fragment of an unknown, obsidian-like material that seems to record every moment. Touching it induces a chilling sense of being watched – and occasionally projects phantom images into the user’s mind. Its origin is shrouded in whispers and forbidden texts.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 22000,
        icon: '👁️',
        stock: 5,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "Grants the user limited precognitive abilities (chance to see a few seconds into the future - 10%)",
            "Detects hidden enemies and traps within a 20-meter radius.",
            "Causes intense nightmares and sleep deprivation.",
            "Increases resistance to illusions and mental manipulation."
        ],
        vendor: 'final_shop',
        shippedBy: 'Blackhawk Drone',
        levelRequirement: 48
    },

    'the_edge_item_final_chronal_weaver_7416': {
        id: 'the_edge_item_final_chronal_weaver_7416',
        name: "The Final Vestiges of Forbidden Chronal Weaver",
        description: "This intricately carved obsidian device pulses with a residual temporal distortion, capable of briefly accelerating or decelerating the flow of time around its wielder.  Its final weave threatens to unravel reality itself, offering fleeting glimpses into fractured timelines. Handle with extreme caution - prolonged exposure risks complete temporal severance.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 18000,
        icon: '⏳',
        stock: 7,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "temporally accelerate self for 5 seconds",
            "slow down enemy movement by 30% for 3 seconds",
            "chance to inflict 'Temporal Paradox' (confusion)",
            "recover 10% health over 10 seconds"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'Dimensional Rift Courier',
        levelRequirement: 35
    },

    'the_edge_item_ancient_resonance_fragment_7416': {
        id: 'the_edge_item_ancient_resonance_fragment_7416',
        name: "Ancient Resonance Fragment of the Infinite Divide",
        description: "A shard of solidified entropy, this fragment hums with the echoes of a reality beyond comprehension.  Its resonance amplifies psychic abilities and subtly shifts the user’s perception, blurring the lines between what is real and what could be. It feels strangely cold to the touch.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6500,
        icon: '🧠',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increase psychic damage by 15% for 45 seconds",
            "chance to inflict 'Reality Distortion' (random effects)",
            "boosts critical hit chance by 5%",
            "slightly increases movement speed"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'Quantum Delivery Drone',
        levelRequirement: 20
    },

    'the_edge_item_mk_38_final_remnant_7416': {
        id: 'the_edge_item_mk_38_final_remnant_7416',
        name: "Mk.38 Final Remnant of the Nullspace Conduit",
        description: "A heavily damaged, yet strangely intact, metallic orb radiating a subtle field of negation.  This conduit allows for brief manipulation of spatial distortions - primarily creating small pockets of absolute silence and dampening energy attacks. The final remnants hold a dangerous potential.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 9000,
        icon: '🔇',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'special_order',
        effects: [
            "silence nearby enemies for 3 seconds",
            "reduce incoming damage by 10% for 6 seconds",
            "chance to create a temporary 'Silence Zone'",
            "increases resistance to magical attacks"
        ],
        vendor: 'final_shop',
        shippedBy: 'Void Transport',
        levelRequirement: 28
    },

    'animatopia_item_crimsonwood_whispermarked': {
        id: 'animatopia_item_crimsonwood_whispermarked',
        name: "The Crimsonwood Whispermarked",
        description: "A delicately carved flute crafted from the heartwood of a Whispering Willow, imbued with the spirit of the ancient forest. When played, it evokes melodies that soothe restless spirits and subtly encourage harmonious cooperation within any community.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 275,
        icon: '🎶',
        stock: 38,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Increases community happiness by 10%",
            "Provides a chance to gain 'Forest Favor' (small bonus on nature-related tasks)",
            "Reduces stress levels in nearby animals"
        ],
        vendor: 'forest_market',
        shippedBy: 'winged_carrier',
        levelRequirement: 15
    },

    'animatopia_item_infernal_tusks_of_the_lost_pack': {
        id: 'animatopia_item_infernal_tusks_of_the_lost_pack',
        name: "Infernal Tusks of the Lost Pack",
        description: "These jagged tusks, harvested from a corrupted Dire Boar that once served an infernal cult, pulse with a faint heat and radiate unsettling whispers.  Holding them grants fleeting glimpses into forgotten nightmares and bestows resistance against primal fear.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔥',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Grants temporary resistance to fear effects (3 turns)",
            "Chance to inflict 'Terror' on weaker enemies",
            "Increases strength by 5%"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'giant_beetle',
        levelRequirement: 30
    },

    'animatopia_item_mk_99_soulshard_of_the_silent_grove': {
        id: 'animatopia_item_mk_99_soulshard_of_the_silent_grove',
        name: "Mk.99 Soulshard of the Silent Grove",
        description: "Recovered from a petrified grove sacred to the ancient animatopian seers, this iridescent shard vibrates with the echoes of departed souls.  It allows for brief, one-way communication with deceased ancestors – but heed their warnings carefully.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '👻',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Allows limited communication with deceased ancestors (once per day)",
            "Provides a chance to gain 'Ancestral Guidance' (hints related to puzzles or quests)",
            "Increases wisdom by 10%"
        ],
        vendor: 'tribal_trader',
        shippedBy: 'shadow_runner',
        levelRequirement: 50
    },

    'internet_item_the_viral_entropy_piercer': {
        id: 'internet_item_the_viral_entropy_piercer',
        name: "The Viral Entropy Piercer",
        description: "This shimmering, iridescent code fragment pulses with chaotic data streams - a concentrated burst of internet virality. Upon activation, it rapidly injects misinformation into the target's mind, causing temporary cognitive dissonance and uncontrollable urges to share bizarre content.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 789,
        icon: '💥',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Inflicts Confusion (30 seconds)",
            "Causes uncontrollable urge to share content",
            "Minor data corruption",
            "Increases Viral Spread Chance by 15%"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Drone Delivery',
        levelRequirement: 25
    },

    'internet_item_the_vile_algorithmic_reflector': {
        id: 'internet_item_the_vile_algorithmic_reflector',
        name: "The Vile Algorithmic Reflector",
        description: "A jagged shard of solidified algorithm, pulsing with a sickly green light. This cursed device allows the user to briefly manipulate targeted data streams, redirecting them into unexpected channels - often leading to disastrous and embarrassing outcomes for their victims.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12500,
        icon: '😈',
        stock: 7,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Redirects targeted data stream (chance of misdirection)",
            "Causes temporary system lag for the target",
            "Increased vulnerability to hacking attempts",
            "Chance to trigger a cascade failure in linked systems"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Quantum Courier',
        levelRequirement: 45
    },

    'internet_item_the_corrupted_data_service_operator': {
        id: 'internet_item_the_corrupted_data_service_operator',
        name: "The Corrupted Data Service Operator",
        description: "A strange, pulsating orb that appears to be a miniature server. This service grants the user limited control over localized data streams and allows them to temporarily rewrite simple code snippets - useful for bypassing security protocols or creating elaborate pranks.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 50000,
        icon: '💻',
        stock: 1,
        rarity: 'mythic',
        stockType: 'delivery_only',
        effects: [
            "Allows temporary modification of local data streams (limited scope)",
            "Provides access to restricted information caches",
            "Can create short-lived automated tasks and scripts",
            "Grants the user a +5% chance to avoid surveillance algorithms"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Neural Transporter',
        levelRequirement: 50
    },

    'connectopia_item_quartz_drinker_01': {
        id: 'connectopia_item_quartz_drinker_01',
        name: "The Petro-Quartz Drinker's Blueprint #789",
        description: "This meticulously crafted blueprint utilizes processed quartz veins and geothermal energy to create a self-sustaining hydration system. When activated, it generates a shimmering blue fluid perfect for lubricating even the most stubborn mining tools – guaranteed to boost efficiency by 15%!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 750,
        icon: '💧',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increases mining speed by 15%",
            "reduces tool wear by 10%",
            "generates a small amount of hydration"
        ],
        vendor: 'craft_corner',
        shippedBy: 'delivery_only',
        levelRequirement: 20
    },

    'connectopia_item_modular_geode_02': {
        id: 'connectopia_item_modular_geode_02',
        name: "The Obsidian Core Stabilizer Mk.34",
        description: "A remarkably robust piece of equipment designed for rapidly extracting geodes from unstable earth strata. This modular device incorporates a quartz resonance chamber and provides temporary protection against seismic tremors, allowing for deeper and safer mining operations.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2100,
        icon: '⛏️',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "increases geode yield by 20%",
            "provides temporary protection against tremors (30 seconds)",
            "reduces mining fatigue"
        ],
        vendor: 'block_smith',
        shippedBy: 'shipping_crate',
        levelRequirement: 35
    },

    'connectopia_item_blueprint_chronometric_03': {
        id: 'connectopia_item_blueprint_chronometric_03',
        name: "The Chronal Resonance Drinker - Prototype X-9",
        description: "This epic blueprint details the creation of a time-sensitive fluid generator. When assembled, the Chronal Resonance Drinker grants the user limited control over their personal perception of time, slowing down incoming attacks or accelerating crafting processes – use with extreme caution!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '⏳',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "slows down enemy attacks by 30% for 10 seconds",
            "increases crafting speed by 50% for 5 seconds",
            "causes temporary disorientation"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'premium_delivery',
        levelRequirement: 48
    },

    'equestrian_item_quartz_binder_apples': {
        id: 'equestrian_item_quartz_binder_apples',
        name: "Quartz Binder's Apples of Echoing Laughter",
        description: "These shimmering apples pulse with a faint, quartz-like glow. Upon consumption, a wave of infectious laughter washes over the imbiber, bolstering their spirit and momentarily amplifying magical energies. Legend says they were crafted by Quartz Binder himself during his days as a traveling tinkerer.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '😂',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Grants +10 to Charisma for 30 seconds",
            "Causes uncontrollable laughter (minor distraction)",
            "Increases magic resistance by 5%",
            "Restores 20 HP"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Pegasus Courier',
        levelRequirement: 15
    },

    'equestrian_item_mk_37_laughing_apples': {
        id: 'equestrian_item_mk_37_laughing_apples',
        name: "Mk.37 Laughing Apples of the Galloping Plains",
        description: "These robust, crimson apples radiate a warm, bubbling energy – a direct result of being grown in the heart of the Galloping Plains. Each bite unleashes a burst of jovial glee, promoting optimism and increasing speed for brief moments.  The markings on each apple indicate a unique frequency of laughter.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🏃‍♀️',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "+5 to Speed for 60 seconds",
            "Increases movement speed by 25%",
            "Grants +3 to Luck",
            "Restores 15 Stamina"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Post Horse',
        levelRequirement: 28
    },

    'equestrian_item_mythic_apple_of_harmony_resonance': {
        id: 'equestrian_item_mythic_apple_of_harmony_resonance',
        name: "The Mythic Apple of Harmony Resonance – Twilight's Echo",
        description: "This golden apple, radiating an almost palpable aura of serenity, was said to be a fragment of Twilight Sparkle's own magical potential. Consuming it unlocks a profound connection with the very essence of friendship, temporarily amplifying your ability to resolve conflicts and restore balance within any situation – but prolonged use can lead to overwhelming empathy.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 45000,
        icon: '🌟',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "Grants +50 to Wisdom and Charisma permanently",
            "Provides a 20% chance to instantly resolve conflicts peacefully",
            "Restores 100 HP and 50 Mana upon consumption",
            "Creates a protective aura that absorbs negative emotions from nearby creatures (limited duration)"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Divine Pegasus Delivery Service',
        levelRequirement: 50
    },

    'grand_country_item_tiered_hooks_of_vertical_7': {
        id: 'grand_country_item_tiered_hooks_of_vertical_7',
        name: "The Tiered Hooks of Vertical's Guardian",
        description: "These hooks, meticulously crafted from solidified sugar strata and reinforced with spun honeycomb, allow the wielder to traverse even the most precarious tiered structures. Each hook vibrates with a faint, rhythmic pulse – said to be the heartbeat of the Doughnut itself – granting temporary stability during vertical movement.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🪜',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased_vertical_speed",
            "reduced_fall_damage",
            "minor_stability_boost"
        ],
        vendor: 'side_seller',
        shippedBy: 'Sticky Delivery Drone',
        levelRequirement: 25
    },

    'grand_country_item_divine_hooks_of_the_layered_9': {
        id: 'grand_country_item_divine_hooks_of_the_layered_9',
        name: "Divine Guardian’s Hooks of the Layered Core",
        description: "Forged within the deepest layers of the Doughnut's core, these hooks shimmer with an ethereal light. Touching them induces a state of blissful disorientation, allowing for effortless navigation through complex layered environments - but beware, prolonged exposure can lead to a craving for frosting.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '✨',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "enhanced_spatial_awareness",
            "frosting_craving (minor)",
            "increased_movement_agility"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Honeycomb Courier',
        levelRequirement: 45
    },

    'grand_country_item_mk_39_tiered_hooks_12': {
        id: 'grand_country_item_mk_39_tiered_hooks_12',
        name: "Mk.39 Tiered Hooks - The Glaze Sentinel",
        description: "These hooks are meticulously calibrated to interface with the structural integrity of the Doughnut's tiered architecture, providing unparalleled grip and stability. Each hook is equipped with a miniature glaze-sensing device – allowing it to detect and adapt to changes in surface viscosity.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3800,
        icon: '⚙️',
        stock: 8,
        rarity: 'uncommon',
        stockType: 'special_order',
        effects: [
            "improved_grip_on_slick_surfaces",
            "glaze-sensing alerts (minor)",
            "slightly increased dexterity"
        ],
        vendor: 'layer_market',
        shippedBy: 'Sugar Rail Cart',
        levelRequirement: 18
    },

    'almost_edge_item_the_shimmering_boundary_claimed': {
        id: 'almost_edge_item_the_shimmering_boundary_claimed',
        name: "The Shimmering Boundary Claimed",
        description: "A viscous, iridescent orb pulsing with subsonic frequencies. Holding it evokes fragmented glimpses of impossible geometries and the chilling sensation of standing on an infinitely receding edge.  It grants temporary resistance to psychological distress but carries the risk of phantom echoes.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 18000,
        icon: '🌀',
        stock: 7,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "Grants +5 Resistance to Fear for 60 seconds",
            "Causes fleeting auditory hallucinations (chance of panic)",
            "Restores 10% Max Health",
            "Temporary Distortion Field - reduces enemy accuracy by 20%"
        ],
        vendor: 'void_merchant',
        shippedBy: 'Dimensional Portal',
        levelRequirement: 35
    },

    'almost_edge_item_cursed_whispers_of_the_sevenfold_decay': {
        id: 'almost_edge_item_cursed_whispers_of_the_sevenfold_decay',
        name: "Cursed Whispers of the Sevenfold Decay",
        description: "A collection of tightly rolled parchment scrolls bound with a tarnished silver chain.  Each scroll whispers fragmented prophecies in a language that seems to unravel your sanity, hinting at the slow dissolution of reality itself. Prolonged exposure causes accelerated aging.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '💀',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "+10% Movement Speed for 30 seconds",
            "Slows enemy movement speed by 15% within a small radius",
            "Decreases Wario's aging rate by 2%",
            "Causes temporary confusion (chance of self-damage)"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Drone Delivery',
        levelRequirement: 20
    },

    'almost_edge_item_mk.49_boundary_whispers_of_the_void': {
        id: 'almost_edge_item_mk.49_boundary_whispers_of_the_void',
        name: "Mk.49 Boundary Whispers of the Void",
        description: "A jagged shard of obsidian, etched with unsettling geometric patterns.  When held near a precipice, it amplifies the sensation of falling – and offers glimpses into the cold, silent expanse beyond. Its touch induces a feeling of profound isolation.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 900,
        icon: '🌑',
        stock: 55,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "+3% Critical Hit Chance",
            "Grants temporary invisibility (1 second)",
            "Detects nearby sources of cosmic energy",
            "Reduces stamina consumption by 5%"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Ground Transport',
        levelRequirement: 12
    },

    'doughnut_hole_item_gravitic_resonance_finder_01': {
        id: 'doughnut_hole_item_gravitic_resonance_finder_01',
        name: "The Chronal Echo Finder - Phase Seven",
        description: "This obsidian device subtly warps the flow of localized gravity, creating momentary pockets where echoes of past events linger. Holding it allows the user to briefly perceive residual gravitational distortions – potentially revealing hidden pathways or forgotten dangers. Prolonged use can induce debilitating nausea and disorientation due to conflicting temporal fields.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '⏳',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Increases movement speed by 10% for 15 seconds",
            "Chance to trigger a brief gravity shift, pushing enemies away",
            "Minor chance of attracting localized gravitational anomalies",
            "Slows down time perception slightly"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Void Conveyance Drone',
        levelRequirement: 15
    },

    'doughnut_hole_item_xenolithic_paradoxes_02': {
        id: 'doughnut_hole_item_xenolithic_paradoxes_02',
        name: "The Fragmented Xenolith of Shifting Currents - Variant Beta",
        description: "Born from a collapsed zone of intense gravitational flux near the Fated Place, this pulsating xenolith constantly shifts its mass and emits a faint hum. Touching it creates fleeting paradoxes – briefly altering the local gravity field, causing objects to float or fall unpredictably. A dangerous object for inexperienced manipulators.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 875,
        icon: '🌀',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Randomly alters gravity within a 5-meter radius for 3 seconds",
            "Chance to create momentary pockets of zero gravity",
            "Increases the chance of finding rare materials in nearby areas",
            "Causes minor hallucinations and disorientation"
        ],
        vendor: 'center_seller',
        shippedBy: 'Submerged Courier',
        levelRequirement: 30
    },

    'doughnut_hole_item_anomalous_paradoxes_03': {
        id: 'doughnut_hole_item_anomalous_paradoxes_03',
        name: "The Oscillating Gravitic Amplifier - Prototype Delta",
        description: "This intricate device, constructed from an unknown metallic alloy, generates a focused field of distorted gravity. When activated, it amplifies existing gravitational forces in its vicinity, potentially crushing objects or creating devastating shockwaves – use with extreme caution. Its operational stability is... questionable.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '💥',
        stock: 7,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Deals significant gravitational damage to enemies in a cone-shaped area",
            "Can be used to create temporary platforms or barriers",
            "Chance to pull enemies towards the user",
            "High chance of causing catastrophic device failure and self-destruction"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Gravitic Transport Vessel',
        levelRequirement: 45
    },

    'leclaire_isle_item_frosted_rolls_of_brutal_fallen': {
        id: 'leclaire_isle_item_frosted_rolls_of_brutal_fallen',
        name: "Brutal Fallen's Rolls",
        description: "These dark, intensely frosted rolls pulse with a strange energy. Each bite releases a surge of sugary adrenaline, bolstering your strength and reflexes – though perhaps not your judgment.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '🔥',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increased strength for 30 seconds",
            "temporary boost to reflexes",
            "minor sugar rush side effect (decreased accuracy)"
        ],
        vendor: 'dough_depot',
        shippedBy: 'Dough Drone',
        levelRequirement: 15
    }
};
