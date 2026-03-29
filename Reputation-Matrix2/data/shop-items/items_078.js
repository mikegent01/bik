// Shop items file 78
// Generated: 2026-03-22 19:35:26
// Items: 100

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_078 = {
    'middle_earth_item_the_shire_messenger_scrolls_of_lost_lore': {
        id: 'middle_earth_item_the_shire_messenger_scrolls_of_lost_lore',
        name: "The Shire Messenger Scrolls of Lost Lore - Volume I",
        description: "A collection of meticulously transcribed scrolls detailing forgotten tales and ancient rituals from the early days of the Shire. These scrolls radiate a subtle warmth, granting the reader a brief surge of inspiration and offering glimpses into lost knowledge about herbal remedies and minor enchantments. A valuable resource for scholars or those seeking to unravel the mysteries of Hobbiton.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '📜',
        stock: 8,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "inspiration boost",
            "chance to identify items",
            "minor healing effect"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony',
        levelRequirement: 45
    },

    'warhammer_item_verdant_marked_banners_of_the_wrath': {
        id: 'warhammer_item_verdant_marked_banners_of_the_wrath',
        name: "Verdant Marked’s Banners of the Wrath",
        description: "These banners, woven with threads salvaged from a long-dead verdant forest and etched with chaotic runes, pulse with a furious energy. Raising them inspires soldiers to charge with unrelenting zeal, but prolonged use risks overwhelming their minds with battlelust.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔥',
        stock: 45,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases attack damage by 15% for 3 turns",
            "chance to inflict 'berserk' status on enemies",
            "reduces defense by 5%",
            "grants +2 charisma"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'sky-carriage',
        levelRequirement: 25
    },

    'warhammer_item_mk_81_chaos_marked_resonator_of_discord': {
        id: 'warhammer_item_mk_81_chaos_marked_resonator_of_discord',
        name: "Mk.81 Chaotic Marked Resonator of Discord",
        description: "Forged in the heart of a shattered battlefield, this resonator hums with raw chaotic energy. When activated, it emits waves that scramble enemy formations and induce moments of debilitating confusion amongst their ranks.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🌀',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "disorients enemies within a 10-meter radius",
            "chance to cause enemy attacks to miss",
            "increases critical hit chance by 8%",
            "reduces enemy accuracy by 10%"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'dimensional-portal',
        levelRequirement: 40
    },

    'warhammer_item_mk_57_godly_banners_of_the_eternal_storm': {
        id: 'warhammer_item_mk_57_godly_banners_of_the_eternal_storm',
        name: "Mk.57 Godly Banners of the Eternal Storm",
        description: "Woven from solidified lightning and imbued with divine essence, these banners radiate an aura of pure destructive energy. Commanding them grants mastery over storms and a terrifying presence that can shatter even the most stalwart defenses.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 60000,
        icon: '⛈️',
        stock: 1,
        rarity: 'godly',
        stockType: 'delivery_only',
        effects: [
            "deals 50% extra lightning damage",
            "chance to summon a small storm cloud that rains down bolts of lightning",
            "grants immunity to thunder and lightning attacks",
            "temporarily boosts weather manipulation abilities"
        ],
        vendor: 'fate_forge',
        shippedBy: 'angel-delivery',
        levelRequirement: 50
    },

    'grand_country_item_the_spiral_ascension_claimed': {
        id: 'grand_country_item_the_spiral_ascension_claimed',
        name: "The Spiral Ascension Claimed",
        description: "A shimmering, iridescent bridge woven from solidified vertigo and captured updrafts. Touching the claimed surface grants brief moments of weightless ascent, allowing traversal across treacherous vertical gaps with surprising grace - though disorientation is a frequent side effect.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🧗‍♀️',
        stock: 45,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grants brief vertical movement",
            "chance of disorientation",
            "increased climbing speed (10%)",
            "resistance to falling damage (25%)"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'wind_carrier',
        levelRequirement: 25
    },

    'grand_country_item_eldritch_bridges_of_the_stone_maw': {
        id: 'grand_country_item_eldritch_bridges_of_the_stone_maw',
        name: "Eldritch Bridges of the Stone Maw",
        description: "These unsettling, pulsating bridges are formed from solidified screams and ancient stone. Each step feels like a negotiation with a hungry earth; careful placement is crucial to avoid collapsing into the maw itself.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8500,
        icon: '💀',
        stock: 12,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "temporary stat boost (strength +3)",
            "chance to trigger minor earth tremors",
            "resistance to stone damage",
            "slows the passage of time slightly in immediate vicinity (5%)"
        ],
        vendor: 'side_seller',
        shippedBy: 'stone_crawler',
        levelRequirement: 40
    },

    'grand_country_item_layered_chronometric_nexus_claimed': {
        id: 'grand_country_item_layered_chronometric_nexus_claimed',
        name: "Layered Chronometric Nexus Claimed",
        description: "A complex, multi-tiered device constructed from temporal echoes and polished obsidian. Touching the claimed point briefly warps localized time, creating opportunities for strategic maneuvers - but prolonged exposure risks fracturing your personal timeline.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 35000,
        icon: '⏳',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "manipulates local time (short bursts)",
            "chance of temporary aging/de-aging",
            "increased perception speed",
            "creates temporal distortions – unpredictable effects"
        ],
        vendor: 'layer_market',
        shippedBy: 'time_weaver',
        levelRequirement: 50
    },

    'doughnut_hole_item_gilded_chronal_herald': {
        id: 'doughnut_hole_item_gilded_chronal_herald',
        name: "The Chronal Herald of Gilded Echoes",
        description: "A pulsating orb encased in layers of solidified void-matter, radiating a faint, temporal hum. Holding it briefly grants glimpses into potential futures—fleeting visions of golden events overlaid upon the present, but risks fracturing your own timeline if held too long.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8750,
        icon: '⏳',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Temporal Echo (Chance to briefly rewind time by 3 seconds)",
            "Chronal Stability (Reduces temporal instability effects)",
            "Gilded Perception (Increased accuracy for 10 seconds)",
            "Null Resonance (Minor void energy drain)"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Void Conveyance',
        levelRequirement: 35
    },

    'doughnut_hole_item_mk83_anomaly_of_silent_depths': {
        id: 'doughnut_hole_item_mk83_anomaly_of_silent_depths',
        name: "Mk.83 Anomaly of Silent Depths",
        description: "A geometrically perfect, obsidian cube that seems to absorb all ambient sound – a true anomaly of unnerving stillness. Touching the surface induces feelings of profound isolation and whispers of forgotten geometries, potentially revealing hidden pathways within the void.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '🌑',
        stock: 35,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Silence Zone (Creates a small area of absolute silence)",
            "Void Resonance (Slowly drains sanity)",
            "Dimensional Shimmer (Minor chance to teleport short distances)",
            "Geometric Distortion (Visual distortions and altered perception)"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Phantom Courier',
        levelRequirement: 42
    },

    'doughnut_hole_item_null_fragments_of_the_decaying_void': {
        id: 'doughnut_hole_item_null_fragments_of_the_decaying_void',
        name: "Null Fragments of the Decaying Void",
        description: "A collection of iridescent, shattered plates - remnants of a collapsed dimension – each pulsing with an unsettling, cold energy.  These fragments seem to accelerate the decay process in organic matter and can be used to temporarily disrupt void-based defenses.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 650,
        icon: '💀',
        stock: 89,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Void Decay (Deals minor void damage over time)",
            "Nullification (Reduces the effectiveness of void-based attacks)",
            "Temporal Stasis (Briefly slows down enemies)",
            "Fragmented Resonance (Small chance to inflict Confusion)"
        ],
        vendor: 'center_seller',
        shippedBy: 'Delivery Drone 7',
        levelRequirement: 15
    },

    'kivotos_item_the_spectral_ward_of_resonance': {
        id: 'kivotos_item_the_spectral_ward_of_resonance',
        name: "The Spectral Ward of Resonance",
        description: "This shimmering, spectral ward pulses with faint echoes of student council debates, amplifying the wearer's persuasive abilities. Crafted from solidified disappointment and freshman idealism, it grants temporary control over auditory perception within a small radius.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 785,
        icon: '✨',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increases persuasion skill by 10 for 60 seconds",
            "creates a localized auditory distortion effect",
            "grants minor resistance to verbal attacks"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery',
        levelRequirement: 25
    },

    'kivotos_item_mk.34_cards_of_discord': {
        id: 'kivotos_item_mk.34_cards_of_discord',
        name: "Mk.34 Cards of Discord",
        description: "A deck of meticulously crafted cards, each depicting a miniature conflict between rival club factions – a surprisingly potent tool for sowing chaos and disrupting group harmony. The cards themselves are made from compressed arguments and youthful frustration.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🔥',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "forces a target to make a chaotic decision (roll)",
            "reduces target's team coordination by 50% for 30 seconds",
            "chance to trigger a minor distraction effect on nearby NPCs"
        ],
        vendor: 'club_supply',
        shippedBy: 'Courier Pigeon',
        levelRequirement: 40
    },

    'kivotos_item_the_faction_cards_of_halo': {
        id: 'kivotos_item_the_faction_cards_of_halo',
        name: "The Faction Cards of Halo",
        description: "A set of meticulously designed cards representing the major student factions, imbued with a faint aura of authority and strategic influence. These cards can be used to sway opinions or gain temporary access to restricted areas.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '😇',
        stock: 7,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grants temporary access to faction-specific areas or resources",
            "increases influence with the relevant student faction by 20%",
            "allows for a limited number of diplomatic actions",
            "provides subtle clues regarding faction activities"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Automated Delivery System',
        levelRequirement: 50
    },

    'the_edge_item_shimmering_abyss_forger': {
        id: 'the_edge_item_shimmering_abyss_forger',
        name: "The Shimmering Abyss Forger's Fragment",
        description: "A pulsing shard of solidified paradox, radiating an unsettling luminescence. This fragment grants the wielder fleeting glimpses into fractured realities – briefly accelerating their movement and momentarily disrupting enemy targeting systems with chaotic distortions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '✨',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "movement_speed_boost_15%",
            "enemy_targeting_disruption_3s",
            "paradoxical_distortion_aura"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'winged_drone',
        levelRequirement: 15
    },

    'the_edge_item_final_echoes_of_mortis': {
        id: 'the_edge_item_final_echoes_of_mortis',
        name: "Final Echoes of Mortis - The Haunted Resonance",
        description: "A blackened, spiraling metal coil harvested from a forgotten research facility swallowed by the Edge. Holding it evokes whispers of lost scientists and failed experiments; granting brief, debilitating auditory hallucinations combined with minor damage reflection.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '💀',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "temporary_auditory_hallucinations_5s",
            "damage_reflection_10%",
            "increased_vulnerability_to_fear_based_attacks"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'scorched_cart',
        levelRequirement: 30
    },

    'the_edge_item_obsidian_null_nexus_core': {
        id: 'the_edge_item_obsidian_null_nexus_core',
        name: "Obsidian Null Nexus Core - The Forbidden Prototype",
        description: "A core of solidified nothingness, pulsing with a chilling void energy. This dangerous artifact momentarily nullifies all surrounding effects—including damage, status ailments, and even the flow of time—but carries a significant risk of irreversible entropy to the user’s own being.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 28000,
        icon: '🌌',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "effect_nullification_10s",
            "entropy_risk_20%",
            "temporal_disruption_minor",
            "resistance_to_all_damage_50%"
        ],
        vendor: 'final_shop',
        shippedBy: 'void_shipment',
        levelRequirement: 50
    },

    'kivotos_item_the_glitchy_chosen_uniform': {
        id: 'kivotos_item_the_glitchy_chosen_uniform',
        name: "The Glitchy Chosen's Uniform",
        description: "This iridescent, data-woven uniform pulses with a faint digital static. Wearing it grants minor hacking abilities and subtly alters your appearance to blend seamlessly into the Academy City network - perfect for reconnaissance or disrupting surveillance.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 185,
        icon: '💻',
        stock: 42,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grant +5 to hacking skill for 30 minutes",
            "temporary visual distortion (camouflage)",
            "chance of minor data corruption on targets"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery',
        levelRequirement: 12
    },

    'kivotos_item_the_ominous_club_shard': {
        id: 'kivotos_item_the_ominous_club_shard',
        name: "The Ominous Club Shard",
        description: "Forged from solidified anxieties and whispered club pledges, this obsidian shard vibrates with a low, unsettling hum. Holding it induces intense feelings of paranoia and compels you to aggressively pursue fleeting desires.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 875,
        icon: '🖤',
        stock: 18,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increased aggression (chance of hostile actions)",
            "temporary paranoia boost (+2 to fear-based skills)",
            "minor chance of attracting unwanted attention from club affiliations"
        ],
        vendor: 'club_supply',
        shippedBy: 'Courier Express',
        levelRequirement: 35
    },

    'kivotos_item_mk.42_academy_chosen_jacket': {
        id: 'kivotos_item_mk.42_academy_chosen_jacket',
        name: "Mk.42 Academy Chosen Jacket",
        description: "A meticulously constructed jacket incorporating advanced fiber-optic weaving and adaptive camouflage patterns. It’s a symbol of authority amongst the student body, granting access to restricted areas and projecting an aura of confidence - or at least, the *appearance* of it.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4200,
        icon: '🧥',
        stock: 5,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "+10 to social standing with academy staff",
            "enhanced camouflage in Academy City environments",
            "automatic access to select club events (priority level)"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Secure Package Delivery',
        levelRequirement: 48
    },

    'equestria_item_chromatic_resonance_bit': {
        id: 'equestria_item_chromatic_resonance_bit',
        name: "The Chromatic Resonance Bit for the Grand Forger",
        description: "This iridescent bit pulses with condensed elemental energy, capable of briefly amplifying a pony's connection to a specific element. Crafted by master artisans utilizing rainbow-infused obsidian and meticulously tuned to the core frequencies of Equestria’s magic.  Holding it grants fleeting glimpses into the interwoven currents of elemental power.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8750,
        icon: '✨',
        stock: 12,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "elemental amplification (random)",
            "increased magic resistance",
            "minor elemental aura projection",
            "chance to trigger a localized rainbow effect"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Pegasus Courier',
        levelRequirement: 35
    },

    'equestria_item_arcane_echo_scroll': {
        id: 'equestria_item_arcane_echo_scroll',
        name: "Arcane Echo Scroll - Cartographer’s Variant",
        description: "Recovered from a forgotten observatory dedicated to celestial cartography, this scroll vibrates with residual arcane energy. When unfurled, it projects holographic echoes of past journeys across Equestria, revealing hidden pathways and long-lost landmarks – perfect for the intrepid explorer. The intricate markings appear to shift subtly based on the viewer’s intentions.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1800,
        icon: '🗺️',
        stock: 45,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "reveals hidden pathways on a small area map",
            "provides cryptic clues to forgotten locations",
            "chance to trigger a temporal distortion (minor)",
            "increases cartography skill by 5 levels"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Griffin Delivery Service',
        levelRequirement: 20
    },

    'equestria_item_bit_of_starlight_resonance': {
        id: 'equestria_item_bit_of_starlight_resonance',
        name: "Bit of Starlight Resonance - The Dream Weaver’s Touch",
        description: "Forged during a lunar eclipse by the elusive Silverstream Clan, this bit resonates with the dreams and memories of ponies. Imbued with concentrated starlight, it subtly influences the wearer's subconscious, promoting calm, creativity, and restful sleep – though prolonged use can lead to vivid, dream-filled visions. The cool metal feels perpetually fresh despite its age.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 625,
        icon: '🌙',
        stock: 78,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased dream recall",
            "reduced stress levels",
            "minor magical resistance",
            "chance to influence dreams (self only)"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Crystal Pony Delivery',
        levelRequirement: 15
    },

    'connectopia_item_chronometric_resonance_herald': {
        id: 'connectopia_item_chronometric_resonance_herald',
        name: "The Chronometric Resonance Herald of Obsidian Ridge",
        description: "This intricately carved herald, crafted from solidified temporal flux, allows the user to briefly accelerate the processing speed of automated mining rigs – a vital tool for rapid resource extraction in Connectopia's treacherous frontier.  Holding it emits a faint, rhythmic pulse that seems to subtly shift the very flow of time around the operator.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '⏳',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Mining Speed +25% for 15 seconds",
            "Chance to generate a 'Temporal Fragment' (small chance)",
            "Increased Rig Stability (+5%)",
            "Minor Time Distortion - slight blurring of surroundings"
        ],
        vendor: 'craft_corner',
        shippedBy: 'automated_drone',
        levelRequirement: 25
    },

    'connectopia_item_geothermal_blueprint_herald': {
        id: 'connectopia_item_geothermal_blueprint_herald',
        name: "Ancient Geothermal Blueprint Herald of Blackstone Caverns",
        description: "Unearthed from the deepest levels of the Blackstone Caverns, this ancient blueprint herald details the construction of a self-sustaining geothermal generator – a crucial advancement for establishing permanent settlements.  Its intricate diagrams appear to shift slightly under close inspection, hinting at forgotten engineering secrets.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 850,
        icon: '🔥',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'delivery_only',
        effects: [
            "Grants access to the 'Geothermal Generator' blueprint",
            "Provides a small bonus to power generation efficiency (5%)",
            "Increases worker productivity in geothermal mines (+10%)",
            "Reveals hidden veins of heatstone within 30 meters radius."
        ],
        vendor: 'pioneer_post',
        shippedBy: 'pack_pony',
        levelRequirement: 18
    },

    'connectopia_item_quartz_harmonic_curiosity': {
        id: 'connectopia_item_quartz_harmonic_curiosity',
        name: "The Quartz Harmonic Curiosity of Silent Echo Mesa",
        description: "This peculiar curiosity, discovered amidst the resonant cliffs of Silent Echo Mesa, vibrates with a subtle harmonic energy. When held near concentrated mining operations, it amplifies seismic readings – potentially revealing hidden pockets of valuable quartz and rare minerals deep beneath the frontier's surface.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6500,
        icon: '💎',
        stock: 1,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Increases Seismic Sensor range by 50%",
            "Provides a chance to detect hidden quartz deposits (+20%)",
            "Generates small amounts of Quartz Resonance (used for crafting)",
            "Emits a calming, hypnotic pulse that reduces worker fatigue by 10%"
        ],
        vendor: 'block_smith',
        shippedBy: 'express_cargo',
        levelRequirement: 45
    },

    'pokemon_item_the_whispering_lord_of_valor': {
        id: 'pokemon_item_the_whispering_lord_of_valor',
        name: "The Whispering Lord's Valor Berries",
        description: "These obsidian berries pulse with the echoes of countless battles fought within the Northern Territories. Consuming them grants temporary resistance to status conditions and enhances your Pokémon’s attack power during intense combat, allowing you to strategize with uncanny precision.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '🔥',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Boosts Attack by 10% for 3 turns",
            "Grants Resistance to Status Conditions",
            "Increases Speed by 5%"
        ],
        vendor: 'pokemart',
        shippedBy: 'Winged Courier',
        levelRequirement: 25
    },

    'pokemon_item_mk_47_imperial_resonance_shard': {
        id: 'pokemon_item_mk_47_imperial_resonance_shard',
        name: "Mk.47 Imperial Resonance Shard",
        description: "A fragment of crystallized sonic energy harvested from a defeated Mimikyu, this shard resonates with the rhythms of battle and amplifies the potency of your Pokémon's moves. Holding it during a fight allows for strategic prediction of opponent’s attacks, offering a tactical advantage.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔮',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Increases Critical Hit Chance by 5%",
            "Provides a 20% chance to inflict Confusion on the opponent",
            "Allows for a brief 'Echo Sight' revealing the next move of the opposing Pokémon"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Delivery Drone',
        levelRequirement: 38
    },

    'pokemon_item_the_legendary_berries_of_battles': {
        id: 'pokemon_item_the_legendary_berries_of_battles',
        name: "The Legendary Berries of Battles",
        description: "Grown only in the most contested battlefields, these berries are imbued with the raw energy of legendary Pokémon confrontations. A single bite offers a massive boost to your Pokémon's stats and grants temporary access to a powerful, enhanced move - reflecting the mightiest battles.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 5000,
        icon: '🏆',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Massively Boosts Attack and Special Attack by 30% for 2 turns",
            "Grants access to ‘Tempest Strike’ move (Power: 150, Accuracy: 95%)",
            "Restores 1/4 of Pokémon’s HP"
        ],
        vendor: 'league_store',
        shippedBy: 'Royal Guard Transport',
        levelRequirement: 50
    },

    'internet_item_phantom_link_takers_resonance': {
        id: 'internet_item_phantom_link_takers_resonance',
        name: "Phantom Link Takers' Resonance",
        description: "These shimmering, compressed links pulse with the residual energy of forgotten online conversations. When activated, they momentarily amplify your presence within a digital network, granting a brief surge of processing speed and the ability to subtly influence meme propagation.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 120,
        icon: '✨',
        stock: 47,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "temporary processing speed boost (5%)",
            "meme propagation influence (+1)",
            "phantom echo effect (brief visual distortion)"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Drone Delivery',
        levelRequirement: 10
    },

    'internet_item_mk_71_compressed_links_of_viral_spread': {
        id: 'internet_item_mk_71_compressed_links_of_viral_spread',
        name: "Mk.71 Compressed Links of Viral Spread",
        description: "Forged from salvaged server components and imbued with chaotic data, these links act as conduits for rapidly disseminating viral content across interconnected networks.  Activate them carefully - prolonged use risks attracting unwanted attention from digital security protocols.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 850,
        icon: '🔥',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "instant meme spread (targets within a radius)",
            "brief network scan (reveals nearby data streams)",
            "risk of attracting digital security alerts"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Courier Bot',
        levelRequirement: 35
    },

    'internet_item_curiosity_of_the_lost_pixel_archive': {
        id: 'internet_item_curiosity_of_the_lost_pixel_archive',
        name: "Curiosity of the Lost Pixel Archive",
        description: "This enigmatic artifact, a compressed shard of a forgotten data archive, grants glimpses into moments lost within the internet's vast memory.  Hold it close to decipher fragmented images and fleeting audio recordings – but beware of lingering echoes.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2100,
        icon: '🔍',
        stock: 3,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "reveals fragmented data snapshots (random)",
            "brief audio playback of past internet sounds",
            "chance to trigger a phantom memory effect"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Spectral Messenger',
        levelRequirement: 48
    },

    'teyvat_item_zealous_render_s_oculi': {
        id: 'teyvat_item_zealous_render_s_oculi',
        name: "Zealous Render’s Oculi of the Tempestuous Tide",
        description: "These iridescent oculi pulse with a fervent, aquatic energy. When activated, they grant temporary resistance to Hydro damage and unleash a concussive blast of pressurized water, capable of shattering stone.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🌊',
        stock: 37,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Hydro Resistance +50%",
            "Deals 200 Water Damage on Activation",
            "Chance to Stun Enemies",
            "Increases Movement Speed by 10%"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'Sky Courier',
        levelRequirement: 35
    },

    'teyvat_item_mk_87_dendro_oculi': {
        id: 'teyvat_item_mk_87_dendro_oculi',
        name: "Mk.87 Dendro Oculi of the Verdant Core",
        description: "Crafted from solidified resin harvested within the deepest reaches of the Linhaven Forest, these oculi resonate with the very essence of Dendro magic. Focusing their energy can rapidly accelerate plant growth or unleash a concentrated burst of primal power.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 9500,
        icon: '🌿',
        stock: 12,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Accelerates Plant Growth by 30%",
            "Heals 50 HP per Second",
            "Chance to Apply Dendro Coating to Weapons",
            "Increases Elemental Mastery by 15%"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'Sea Serpent Delivery',
        levelRequirement: 48
    },

    'teyvat_item_crimson_resonance_oculi': {
        id: 'teyvat_item_crimson_resonance_oculi',
        name: "Crimson Resonance Oculi of the Forbidden Citadel",
        description: "Recovered from a desecrated shrine within the ruins of an ancient, forgotten nation, these oculi radiate a dark energy, tainted by a chaotic resonance.  Prolonged use can induce unsettling visions and temporary madness.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 75000,
        icon: '🩸',
        stock: 1,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "Grants +20% Critical Hit Chance",
            "Deals 300 Shadow Damage on Activation",
            "Chance to Inflict Blood Curse (reduces healing received)",
            "Causes Visual and Auditory Hallucinations"
        ],
        vendor: 'shadow_brokers',
        shippedBy: 'Nightfall Messenger',
        levelRequirement: 50
    },

    'internet_item_glitch_watcher_01': {
        id: 'internet_item_glitch_watcher_01',
        name: "The Fractured Packet Watcher’s Echoes",
        description: "These shimmering packets pulse with the fragmented memories of forgotten websites, briefly restoring lost data streams within your mind. They offer a fleeting glimpse into the chaotic beauty of corrupted code and a disconcerting awareness of the network's endless flow.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 120,
        icon: '✨',
        stock: 47,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Restores 50 Data Points",
            "Grants +3 to Processing Speed for 10 seconds",
            "Chance to trigger a brief visual hallucination of outdated interfaces"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Drone Delivery',
        levelRequirement: 15
    },

    'internet_item_runic_watcher_02': {
        id: 'internet_item_runic_watcher_02',
        name: "Runic Watcher’s Packets of the Static Archive",
        description: "Each packet contains solidified data streams encoded with ancient, runic algorithms. Consumption allows brief interaction with the network's deepest layers, potentially revealing dormant programs and forgotten protocols – but be warned, prolonged exposure risks permanent integration into the system.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '🔮',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Grants +10 to Network Awareness",
            "Allows temporary access to the ‘Static Archive’ (random effect)",
            "Chance of attracting hostile Data Spirits",
            "Slows down enemy movement slightly"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Cyber Courier',
        levelRequirement: 32
    },

    'internet_item_corrupted_curiosity_03': {
        id: 'internet_item_corrupted_curiosity_03',
        name: "The Mk.47 Corrupted Packet of the Recursive Nightmare",
        description: "A pulsating, viscous packet radiating a palpable sense of dread – rumored to originate from abandoned deep web forums.  Consumption provides brief, unsettling insights into the structure of the internet itself, but at a significant cost to your sanity and perception.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '💀',
        stock: 5,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Grants +25 to Data Manipulation",
            "Causes a temporary debuff (Confusion -3 to Accuracy)",
            "Chance to trigger a phantom echo of a previous user's actions",
            "Small chance of attracting the attention of the ‘System Guardian’"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Black Market Delivery',
        levelRequirement: 48
    },

    'grand_country_item_oscillating_gravity_binder': {
        id: 'grand_country_item_oscillating_gravity_binder',
        name: "The Oscillating Gravity Binder - Mk.87",
        description: "This strange device, crafted from solidified sugar and warped steel, emits pulses of controlled gravitational distortion. Holding it allows the user to briefly manipulate their personal gravity field, creating localized pockets of weightlessness or crushing downward force – perfect for navigating precarious structures or launching projectiles with surprising velocity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '🚀',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Temporary Gravity Manipulation (5 seconds)",
            "Increased Jump Height (10%)",
            "Resistance to Falling Damage",
            "Minor Distortion Field - Slight Confusion Effect on Enemies"
        ],
        vendor: 'side_seller',
        shippedBy: 'Drone Delivery',
        levelRequirement: 15
    },

    'grand_country_item_unground_chronal_ladder': {
        id: 'grand_country_item_unground_chronal_ladder',
        name: "The Unground Chronal Ladder - Fragment 42-B",
        description: "A disconcerting ladder constructed from inverted layer strata and shimmering chroniton residue. Each step seems to subtly shift through time, causing disorientation and a faint echo of past movements – use with caution as extended contact can induce temporal paradoxes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '⏳',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Short-Range Temporal Phase (3 seconds)",
            "Increased Movement Speed (5%) - During Phase",
            "Chance to Reverse Enemy Actions (10%)",
            "Temporal Distortion - Visual and Auditory Hallucinations"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Gravity Cart',
        levelRequirement: 32
    },

    'grand_country_item_angular_layer_resonator': {
        id: 'grand_country_item_angular_layer_resonator',
        name: "The Angular Layer Resonator - Prototype Sigma",
        description: "This complex device, a tangle of polished obsidian and spinning gears, generates focused resonant frequencies within layer structures. By directing the resonator, the user can trigger localized structural collapses or stabilize weakened zones – vital for navigating unstable terrain or exploiting architectural vulnerabilities.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '🔊',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Layer Resonance Scan - Reveals Structural Weaknesses",
            "Localized Collapse Trigger (2 second cooldown)",
            "Structural Stabilization - Reduces Damage from Collapses",
            "Echo Location - Detects Hidden Passages within Layers"
        ],
        vendor: 'layer_market',
        shippedBy: 'Delivery Zeppelin',
        levelRequirement: 48
    },

    'earth_land_item_chronometric_dragonscale_maker': {
        id: 'earth_land_item_chronometric_dragonscale_maker',
        name: "The Chronometric Dragonscale Maker's Scroll",
        description: "This scroll pulses with temporal energy, faintly echoing the roar of ancient dragons. Unfurling it allows the user to briefly accelerate or decelerate their own perception of time, granting a tactical advantage in combat or allowing for rapid movement across treacherous terrain.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 7800,
        icon: '⏳',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Temporarily increases movement speed by 50%",
            "Slows down enemy attack animations for 3 seconds",
            "Grants a brief window of enhanced reflexes"
        ],
        vendor: 'magic_shop',
        shippedBy: 'winged_messenger',
        levelRequirement: 25
    },

    'earth_land_item_glacial_resonance_shard': {
        id: 'earth_land_item_glacial_resonance_shard',
        name: "Resonance Shard of the Ice Wall’s Lament",
        description: "A jagged shard harvested from the heart of the glacial wall, it vibrates with a mournful energy—a tangible echo of frozen winds and shattered giants. Holding the shard allows one to briefly summon a protective aura against extreme cold and detect nearby traces of dragon magic.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12500,
        icon: '🧊',
        stock: 44,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Grants resistance to cold damage",
            "Detects nearby magical auras related to dragons and ice",
            "Provides a small shield against frost-based attacks"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'ice_sled',
        levelRequirement: 38
    },

    'earth_land_item_rune_of_scorched_genesis': {
        id: 'earth_land_item_rune_of_scorched_genesis',
        name: "Runic Device of Scorched Genesis Service",
        description: "This intricately carved device, pulsing with residual heat from volcanic origins, is not merely an item—it’s a temporary service. Upon activation, it creates a localized zone of intense heat, capable of rapidly hardening lava and temporarily boosting the power of fire-based attacks.  However, prolonged use risks overheating and damaging both the device and the user.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 21000,
        icon: '🔥',
        stock: 8,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "Creates a 5-meter radius zone of extreme heat.",
            "Boosts fire damage by 30% for 10 seconds",
            "Allows the user to rapidly harden molten materials."
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'dragon_air_cargo',
        levelRequirement: 45
    },

    'grand_country_item_angular_gravity_ward_01': {
        id: 'grand_country_item_angular_gravity_ward_01',
        name: "The Obsidian Spine Ward",
        description: "This angular ward, forged from solidified gravity currents, offers a fleeting shield against sudden drops and shifts. Its serrated edges resonate with the side's inherent instability, granting brief moments of controlled descent – but beware its cursed touch.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '🛡️',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Provides temporary gravity resistance (30 seconds)",
            "Slows fall speed by 50%",
            "Chance to inflict minor vertigo on impact"
        ],
        vendor: 'side_seller',
        shippedBy: 'Vertical Courier',
        levelRequirement: 15
    },

    'grand_country_item_curved_layer_ward_02': {
        id: 'grand_country_item_curved_layer_ward_02',
        name: "The Layered Rotwood Ropes of Descent",
        description: "These ropes, woven from the petrified wood of fallen layers and infused with a sickly green rot, are designed for navigating vertical drops. They pulse faintly with a chaotic energy, promising safe passage – though whispers claim they subtly alter your perception.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🌿',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Increased climbing speed (15%)",
            "Reduces fall damage by 20%",
            "Chance to trigger hallucinatory effects (low)"
        ],
        vendor: 'layer_market',
        shippedBy: 'Delivery Drone',
        levelRequirement: 30
    },

    'grand_country_item_twisted_gravity_ward_03': {
        id: 'grand_country_item_twisted_gravity_ward_03',
        name: "The Chronal Fracture Ropes",
        description: "Woven from strands of warped time, these ropes briefly manipulate the flow of gravity around the user. Use with caution; prolonged use can cause unpredictable temporal distortions and attract unwanted attention from the side's guardians.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6500,
        icon: '⏳',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Briefly alters local gravity (1 second burst)",
            "Allows limited vertical traversal (short bursts)",
            "Risk of temporal instability – may cause brief time distortions",
            "Attracts attention from the ‘Guardians of the Layers’ faction."
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'High-Speed Delivery',
        levelRequirement: 45
    },

    'doughnut_hole_item_central_nulls_of_void_marked': {
        id: 'doughnut_hole_item_central_nulls_of_void_marked',
        name: "The Central Nulls of Void Marked",
        description: "These obsidian spheres pulse with a faint, unsettling hum – remnants of the void’s initial expansion. Holding one evokes fleeting visions of impossible geometries and echoing silence, potentially accelerating localized entropy around the holder. They're deceptively warm to the touch, radiating a chilling emptiness.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🌑',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increases Entropy by 5 for 3 turns",
            "Chance to trigger a minor void distortion (10%)",
            "Provides +2 to Void Resistance",
            "Slows enemy movement speed by 10%"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dimensional Rift Courier',
        levelRequirement: 25
    },

    'doughnut_hole_item_kaleidoscopic_marked_nulls': {
        id: 'doughnut_hole_item_kaleidoscopic_marked_nulls',
        name: "Kaleidoscopic Marked Nulls",
        description: "Collected from the edges of kaleidoscopic rifts, these nulls shimmer with an internal light show – a constant flux of impossible colors.  Consumption briefly grants the user a heightened sense of perception and awareness, but prolonged exposure induces unsettling hallucinations and disorientation. They smell faintly of burnt sugar and static.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '✨',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "Grants +3 to Perception for 2 turns",
            "Chance of temporary color blindness (5%)",
            "Heals 20 HP",
            "Adds a minor static effect to all attacks"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Drone Delivery System',
        levelRequirement: 18
    },

    'doughnut_hole_item_mk_28_central_nulls': {
        id: 'doughnut_hole_item_mk_28_central_nulls',
        name: "Mk.28 Central Nulls",
        description: "Forged within the heart of a miniature, stabilized void event – these nulls are intensely cold to the touch and exude an aura of absolute stillness.  When activated (requires 10 Warts), they briefly create a localized zone of near-total silence, dampening all sound and disrupting enemy magic casting attempts. They feel unnervingly smooth.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5500,
        icon: '🔇',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Silence nearby enemies (radius 5m) for 3 turns",
            "Reduces enemy magic damage by 20%",
            "Increases Wario's defense by 15",
            "Allows Wario to briefly nullify status effects on himself"
        ],
        vendor: 'center_seller',
        shippedBy: 'Temporal Conveyance Unit',
        levelRequirement: 40
    },

    'grand_country_item_jade_spiral_finder': {
        id: 'grand_country_item_jade_spiral_finder',
        name: "Jade Spiral Finder's Hooks",
        description: "These hooks, crafted from solidified jade and spiraling with unnatural precision, allow the user to effortlessly scale even the most precarious sideways cliffs. They subtly shift your weight, granting temporary traction on slick surfaces - perfect for a greedy grab!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 180,
        icon: '🧗‍♀️',
        stock: 42,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Increased Climbing Speed (5%)",
            "Reduced Fall Damage (10%)",
            "Momentum Stabilization"
        ],
        vendor: 'side_seller',
        shippedBy: 'Rolling Cart',
        levelRequirement: 10
    },

    'grand_country_item_vertical_layer_hook_7': {
        id: 'grand_country_item_vertical_layer_hook_7',
        name: "Vertical Layer Hook - 7",
        description: "Forged from solidified donut dough and imbued with a faint, pulsating energy, this hook relentlessly pulls you upwards, ignoring structural weaknesses. Beware; prolonged use can induce dizzying sensations and an insatiable craving for sprinkles.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 850,
        icon: '⬆️',
        stock: 17,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Rapid Vertical Ascent (20%)",
            "Resistance to Structural Damage (15%)",
            "Minor Sprinkle Attraction"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Delivery Drone',
        levelRequirement: 35
    },

    'grand_country_item_forbidden_layer_hook_of_echoes': {
        id: 'grand_country_item_forbidden_layer_hook_of_echoes',
        name: "Forbidden Layer Hook of Echoes",
        description: "This unsettling hook resonates with fractured dimensions, briefly exposing hidden pathways and unstable layers. It’s said to attract the attention of unseen entities – a risky investment for a short-term advantage.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 12000,
        icon: '👻',
        stock: 3,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Reveals Hidden Layers (5%)",
            "Attracts Minor Dimensional Instability",
            "Chance of Encountering Echoes",
            "Temporary Confusion"
        ],
        vendor: 'layer_market',
        shippedBy: 'Shadow Courier',
        levelRequirement: 48
    },

    'connectopia_item_oscillating_nexus_claim': {
        id: 'connectopia_item_oscillating_nexus_claim',
        name: "The Harmonious Claimed Nexus Module - Series 7",
        description: "This pulsating module, salvaged from a collapsed mining station, vibrates with latent energy. When connected to your base's core, it dramatically increases crafting speed and provides a minor shield against structural instability within the frontier.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '⚡️',
        stock: 37,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increases crafting speed by 30%",
            "provides a 5-point structural integrity bonus",
            "emits a low hum that attracts mechanical scavengers (chance of encounter)",
            "can be repurposed into a rudimentary data relay"
        ],
        vendor: 'craft_corner',
        shippedBy: 'automated_drone',
        levelRequirement: 25
    },

    'connectopia_item_modular_extraction_claim': {
        id: 'connectopia_item_modular_extraction_claim',
        name: "The Pristine Claimed Extraction Conduit - Beta-9",
        description: "A remarkably well-preserved conduit, recovered from a forgotten research outpost. When integrated into your mining operations, it focuses raw energy to rapidly extract valuable materials – perfect for securing that next claim on the frontier.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 850,
        icon: '⛏️',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increases mining yield by 15%",
            "reduces tool wear by 10%",
            "allows for automated material sorting (small capacity)",
            "emits a faint, rhythmic pulse synchronized with seismic activity"
        ],
        vendor: 'block_smith',
        shippedBy: 'ground_sled',
        levelRequirement: 18
    },

    'connectopia_item_resonance_service_claim': {
        id: 'connectopia_item_resonance_service_claim',
        name: "The Pioneer’s Claimed Resonance Synchronization Service - Delta-42",
        description: "A complex array of crystalline nodes, used by the original Connectopians to stabilize their settlements. This service allows you to instantly synchronize your base's systems with the surrounding network, mitigating conflicts and unlocking advanced functionalities within a designated zone.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 5800,
        icon: '📡',
        stock: 1,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "instantly synchronizes base systems with the Connectopia network",
            "grants access to exclusive crafting blueprints",
            "reduces system instability by 50%",
            "creates a localized communication zone for friendly NPCs (limited range)"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'messenger_drone',
        levelRequirement: 40
    },

    'equestria_item_the_whispering_apples_claimed': {
        id: 'equestria_item_the_whispering_apples_claimed',
        name: "The Whispering Apples Claimed",
        description: "These crimson apples pulse with a faint, melodic hum – said to be the echoes of ancient pony prophecies. Consuming them grants temporary clarity and heightened intuition, allowing you to decipher cryptic messages.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 185,
        icon: '🍎',
        stock: 42,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increased intuition",
            "temporary clarity",
            "chance to gain prophetic vision (small)"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Pegasus Post',
        levelRequirement: 10
    },

    'equestria_item_twilight_s_chronometric_harvest': {
        id: 'equestria_item_twilight_s_chronometric_harvest',
        name: "Twilight’s Chronometric Harvest",
        description: "A meticulously crafted apple core, infused with temporal magic. When consumed, it briefly slows the flow of time around the user, allowing for incredibly precise actions – perfect for dodging attacks or solving intricate puzzles.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '⏳',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "slow time (small duration)",
            "increased reaction speed",
            "chance to negate a single action"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Courier',
        levelRequirement: 35
    },

    'equestria_item_mk_9_loyalty_apples_empire': {
        id: 'equestria_item_mk_9_loyalty_apples_empire',
        name: "Mk.9 Loyalty Apples of the Crystal Empire",
        description: "These gleaming golden apples radiate an aura of unwavering loyalty, a prized possession amongst the Crystal Empire’s guard.  A single bite grants temporary resistance to mental manipulation and boosts courage in times of peril.",
        category: SHOP_CATEGORIES.FACTION,
        price: 3200,
        icon: '🛡️',
        stock: 5,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "resistance to mental manipulation",
            "increased courage",
            "boosted defense (small)"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Crystal Guard Transport',
        levelRequirement: 48
    },

    'the_edge_item_chronometric_twilight_slayer': {
        id: 'the_edge_item_chronometric_twilight_slayer',
        name: "Twilight Slayer's Chronometric Remnants",
        description: "These fractured remnants pulse with a faint, temporal energy, echoing the screams of lost explorers. Upon activation, they briefly accelerate your movements and grant resistance to lingering paradoxes - a fleeting advantage against the relentless currents of time.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '⏳',
        stock: 45,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "movement_speed_boost_3s",
            "paradox_resistance_10%",
            "temporal_distortion_effect",
            "chance to rewind self a few seconds"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'dimensional_rift',
        levelRequirement: 25
    },

    'the_edge_item_mk_91_lost_echoes': {
        id: 'the_edge_item_mk_91_lost_echoes',
        name: "Mk.91 Lost Echoes of the Static Citadel",
        description: "Recovered from the depths of a shattered data-construct, these crystalline fragments resonate with forgotten broadcasts – a chorus of digital screams. Holding them provides limited access to spectral communications and offers protection against corrupted signal interference.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '📡',
        stock: 12,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "signal_jamming_resistance",
            "spectral_communication_range_boost",
            "chance to detect hidden pathways",
            "passive stat boost: perception +5"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'automated_drone',
        levelRequirement: 40
    },

    'the_edge_item_regnant_fragments_of_zero': {
        id: 'the_edge_item_regnant_fragments_of_zero',
        name: "Regnant Fragments of Zero's Descent",
        description: "These unnervingly smooth fragments radiate an aura of absolute stillness. Consuming them grants temporary immunity to all forms of sensory input, allowing for brief moments of undisturbed observation – a dangerous ability in the chaotic expanse beyond the edge.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '🌑',
        stock: 28,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "temporary_sensory_nullification (60s)",
            "reduced_movement_speed (25%)",
            "increased_awareness",
            "chance to phase through objects for a brief moment"
        ],
        vendor: 'final_shop',
        shippedBy: 'spectral_courier',
        levelRequirement: 18
    },

    'middle_earth_item_sunstone_of_anorien_master': {
        id: 'middle_earth_item_sunstone_of_anorien_master',
        name: "The Sunstone of Anorien Master",
        description: "A palm-sized shard radiating a gentle warmth, meticulously forged from solidified sunlight captured during the Battle of Pelennor. It pulses with restorative energy, capable of staunching grievous wounds and bolstering morale against encroaching shadows.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '🔆',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Heals 50 HP",
            "Increases Morale by 20%",
            "Grants temporary resistance to fear effects",
            "Slowly regenerates health over time"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_horse',
        levelRequirement: 35
    },

    'middle_earth_item_shire_woodcutter_blade_forge': {
        id: 'middle_earth_item_shire_woodcutter_blade_forge',
        name: "Shire Woodcutter's Blade Forge",
        description: "A deceptively simple blade, crafted by the renowned hobbit blacksmiths of Buckleberry Ferry. It is imbued with the essence of ancient woodland trees, allowing for incredibly precise cuts and a surprising burst of speed when used in close combat.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔪',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Increased attack speed",
            "Chance to inflict bleeding damage",
            "Improved accuracy with melee weapons",
            "Slightly increases movement speed"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_cart',
        levelRequirement: 20
    },

    'middle_earth_item_imperial_rune_blade_of_gondor': {
        id: 'middle_earth_item_imperial_rune_blade_of_gondor',
        name: "Imperial Rune Blade of Gondor - Mk.49",
        description: "A battle-scarred blade recovered from the ruins of Minas Tirith, bearing the intricate runes of the White Tower. This legendary weapon hums with a faint protective aura, deflecting blows and amplifying the wielder’s combat prowess – favored by the Imperial Guard.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '⚔️',
        stock: 3,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Increased defense",
            "Chance to parry attacks",
            "Deals bonus damage against undead creatures",
            "Grants a small chance of reflecting damage back at the attacker"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'dragon_airship',
        levelRequirement: 45
    },

    'grand_country_item_crimson_layer_shaper': {
        id: 'grand_country_item_crimson_layer_shaper',
        name: "Crimson Layer Shaper",
        description: "This intricately layered gear, soaked in viscous crimson resin, vibrates with unsettling vertical energy. When activated, it briefly aligns nearby layers of the doughnut’s structure, allowing for rapid traversal across otherwise impassable gaps – a wickedly efficient shortcut.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🚀',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increased Vertical Movement Speed",
            "Chance to Trigger Layer Instability (Minor)",
            "Resistance to Lateral Forces",
            "Short Burst of Momentum"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Delivery Drone',
        levelRequirement: 25
    },

    'grand_country_item_echoing_gear_of_the_void': {
        id: 'grand_country_item_echoing_gear_of_the_void',
        name: "Echoing Gear of the Void",
        description: "A grotesquely twisted gear constructed from solidified shadow and faint, echoing whispers. Turning this device produces a localized distortion in reality, momentarily revealing glimpses of alternate vertical pathways – dangerous but potentially rewarding.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '🔮',
        stock: 12,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "Chance to Reveal Hidden Vertical Passages",
            "Minor Distortion Field (Reduces Visibility)",
            "Attracts Phantom Echoes (Low Chance of Negative Effects)",
            "Passive Energy Drain"
        ],
        vendor: 'side_seller',
        shippedBy: 'Spectral Courier',
        levelRequirement: 40
    },

    'grand_country_item_the_layered_chronoshaper_prime': {
        id: 'grand_country_item_the_layered_chronoshaper_prime',
        name: "The Layered Chronoshaper Prime",
        description: "This premium chronometer device is crafted from meticulously layered gears and pulsating, temporal crystals.  It allows the user to briefly manipulate the flow of time within a localized layer, accelerating or decelerating movement – a truly valuable tool for navigating the chaotic vertical environment.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 35000,
        icon: '⏳',
        stock: 5,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "Temporal Acceleration (Localized)",
            "Temporal Deceleration (Localized)",
            "Increased Reaction Time",
            "Phase Shift (Short-Range Teleportation)"
        ],
        vendor: 'layer_market',
        shippedBy: 'Dimensional Cartographer',
        levelRequirement: 50
    },

    'warhammer_item_chronal-banner-of-rupture': {
        id: 'warhammer_item_chronal-banner-of-rupture',
        name: "The Chronal Banner of Rupture",
        description: "This banner pulses with fractured temporal energies, briefly accelerating the decay of nearby structures and weakening foes caught within its shimmering distortion. Its crimson sigil depicts a shattered clockwork heart, promising moments of devastating instability.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '⏳',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Temporarily accelerates the decay of structures within a 10-meter radius.",
            "Deals minor temporal damage to enemies within range (50% chance to inflict 'Time Slip' - brief disorientation).",
            "Increases movement speed by 20% for 15 seconds.",
            "Chance to trigger a localized time loop, briefly rewinding the player’s position."
        ],
        vendor: 'imperial_armory',
        shippedBy: 'Royal Courier Drone',
        levelRequirement: 35
    },

    'warhammer_item_void-ward-of-silent-decrees': {
        id: 'warhammer_item_void-ward-of-silent-decrees',
        name: "The Void Ward of Silent Decrees",
        description: "Forged from solidified echoes of forgotten empires, this ward radiates an unnerving stillness. It passively dampens psychic energies and provides a fragile shield against mental intrusions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🌑',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "Grants a passive shield that absorbs 30% of psychic damage.",
            "Reduces the duration and effectiveness of mind-altering spells by 50%.",
            "Provides resistance to fear effects.",
            "Occasionally emits a pulse, briefly stunning nearby chaotic creatures."
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Shadow Serpent Courier',
        levelRequirement: 48
    },

    'warhammer_item_fate-forge_mk_117_purified_echo-banners': {
        id: 'warhammer_item_fate-forge_mk_117_purified_echo-banners',
        name: "Fate Forge Mk. 117 Purified Echo Banners",
        description: "These banners are meticulously crafted by the Fate Forge, imbued with purified echoes of past triumphs and failures - radiating a faint aura of unsettling certainty.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 35000,
        icon: '🔮',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Once per day, can summon a spectral echo of a fallen hero to fight alongside the wielder.",
            "Grants a chance to manipulate fate, increasing critical hit chance by 10%.",
            "Provides protection against curses and divination attempts.",
            "Increases resistance to damage from effects that rely on prophecies or predictions."
        ],
        vendor: 'fate_forge',
        shippedBy: 'Chronomaestro Delivery System',
        levelRequirement: 50
    },

    'warhammer_item_hallowed-skulls-of-grim-march': {
        id: 'warhammer_item_hallowed-skulls-of-grim-march',
        name: "Hallowed Skulls of Grim March",
        description: "These intricately carved skulls, harvested from the fallen soldiers of a forgotten empire, resonate with the echoes of desperate battles. Holding one grants a fleeting glimpse into the strategic calculations of a seasoned commander, offering tactical insights for a brief moment.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '💀',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "grant temporary tactical advantage",
            "reveals enemy formation for 10 seconds",
            "chance to inflict 'grim resolve' (reduces fear)",
            "increases accuracy by 5%"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'aerial-drone',
        levelRequirement: 25
    },

    'warhammer_item_mk-91-skull-piercer-of-broken-lines': {
        id: 'warhammer_item_mk-91-skull-piercer-of-broken-lines',
        name: "Mk.91 Skull Piercer of Broken Lines",
        description: "A chilling artifact crafted from the skull of a siege weapon's commander, this item vibrates with destructive potential.  It possesses the ability to shatter enemy shields and armor with a concentrated burst of kinetic energy.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8750,
        icon: '💥',
        stock: 12,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "deals significant shield damage",
            "chance to stun enemies",
            "pierces through enemy armor with increased damage",
            "regenerates health over time (small amount)"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'express-delivery',
        levelRequirement: 40
    },

    'warhammer_item_grim-hollow-skull-of-fate-weaver': {
        id: 'warhammer_item_grim-hollow-skull-of-fate-weaver',
        name: "Grim Hollow Skull of Fate Weaver",
        description: "This morbid skull was said to be the focus for a dark ritual where fate itself was twisted. Holding it causes a subtle shift in probability, offering fleeting advantages in dangerous situations.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 35000,
        icon: '🔮',
        stock: 7,
        rarity: 'legendary',
        stockType: 'back_order',
        effects: [
            "increases critical hit chance",
            "manipulates enemy attack patterns (minor)",
            "chance to avoid fatal damage",
            "provides a subtle advantage in negotiations"
        ],
        vendor: 'fate_forge',
        shippedBy: 'mystic-transport',
        levelRequirement: 50
    },

    'warhammer_item_crimson-echo-gifted-amulet': {
        id: 'warhammer_item_crimson-echo-gifted-amulet',
        name: "Crimson Echo Gifted Amulet of Shattered Kings",
        description: "This pulsating crimson amulet channels the fractured echoes of forgotten empires, granting brief moments of chaotic command. Worn close to the heart, it whispers strategies born from shattered timelines and desperate battles.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 450,
        icon: '🔥',
        stock: 37,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Temporary increase to attack damage",
            "Chance to inflict 'Chaos' status on enemy",
            "Minor temporal distortion - brief speed boost",
            "Reduce cooldown time of active abilities"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'Imperial Courier Drone',
        levelRequirement: 15
    },

    'warhammer_item_sacred-curiosity-of-fate-weaver': {
        id: 'warhammer_item_sacred-curiosity-of-fate-weaver',
        name: "Sacred Curiosity of Fate Weaver’s Loom",
        description: "A delicate, obsidian sphere etched with constellations that shift and swirl – a remnant from the workshop of the legendary Fate Weaver. Holding it allows you to perceive fleeting threads of probability.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🔮',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Reveals hidden paths and secrets on the map.",
            "Chance to manipulate enemy movement patterns.",
            "Provides cryptic hints related to current quest.",
            "Increases perception stat temporarily"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Temporal Delivery Vessel',
        levelRequirement: 30
    },

    'warhammer_item_mk-92-chaotic-relic-of-the-broken-empire': {
        id: 'warhammer_item_mk-92-chaotic-relic-of-the-broken-empire',
        name: "Mk.92 Chaotic Relic of the Broken Empire’s Decree",
        description: "A jagged shard of solidified chaos, pulsating with a sickly green light and bearing fragmented insignia from a fallen empire – it resonates with unrestrained power.  This relic is a dangerous but rewarding addition to any warrior's arsenal.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 2100,
        icon: '💣',
        stock: 8,
        rarity: 'epic',
        stockType: 'delivery_only',
        effects: [
            "Causes a burst of chaotic energy on use - high damage, but random effects.",
            "Chance to inflict ‘Disorientation’ status effect.",
            "Provides temporary immunity to fear and panic.",
            "Restores a small amount of health and mana"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Void Transport Shuttle',
        levelRequirement: 45
    },

    'grand_country_item_crimson_tier_lift_keeper': {
        id: 'grand_country_item_crimson_tier_lift_keeper',
        name: "The Crimson Tiered Lift Keeper",
        description: "This peculiar device, crafted from solidified frosting and obsidian shards, allows for rapid vertical traversal across the layered plains. It emits a faint, pulsing red glow and seems to subtly shift its tiers with each ascent, granting brief moments of accelerated movement. Legend says it was created by a baker obsessed with achieving perfect stacking.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🚀',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased_movement_speed",
            "frosting_resistance",
            "tier_stability"
        ],
        vendor: 'side_seller',
        shippedBy: 'frost_delivery',
        levelRequirement: 25
    },

    'grand_country_item_arcane_layer_resonance_shard': {
        id: 'grand_country_item_arcane_layer_resonance_shard',
        name: "The Arcane Layer Resonance Shard",
        description: "A fractured fragment of solidified time-dough, pulsating with faint temporal energies. Holding this shard briefly grants a chaotic understanding of layer shifts and allows for minor manipulation of the vertical flow around you – though prolonged exposure can lead to disorientation and fragmented memories.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8500,
        icon: '⏳',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "temporal_distortion",
            "layer_awareness",
            "minor_gravity_shift"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'chronal_packet',
        levelRequirement: 40
    },

    'grand_country_item_mk.73_frost_cascade_lift_pod': {
        id: 'grand_country_item_mk.73_frost_cascade_lift_pod',
        name: "Mk.73 Frost Cascade Lift Pod",
        description: "A meticulously constructed, miniature lift pod built from reinforced sugar glass and temporal frosting. It utilizes focused frost energy to smoothly ascend and descend through the vertical layers, emitting a melodic chime with each movement – a surprisingly sophisticated piece of engineering for a side-of-doughnutter.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5800,
        icon: '🛗',
        stock: 9,
        rarity: 'legendary',
        stockType: 'delivery_only',
        effects: [
            "rapid_vertical_movement",
            "frost_shield",
            "layered_stability",
            "echoing_chime_effect"
        ],
        vendor: 'layer_market',
        shippedBy: 'frost_express',
        levelRequirement: 50
    },

    'middle_earth_item_crimson_stone_of_mourning': {
        id: 'middle_earth_item_crimson_stone_of_mourning',
        name: "The Crimson Stone of Mourning",
        description: "A pulsating garnet, etched with runes that whisper tales of Rohan’s fallen kings. Holding it grants a temporary resilience against despair and fear, bolstering courage in the face of overwhelming odds.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '💔',
        stock: 33,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Increases Courage by 20 for 60 seconds",
            "Grants Resistance to Fear effects",
            "Provides a +1 bonus to Willpower checks"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_express',
        levelRequirement: 15
    },

    'middle_earth_item_dwarf_forger_heartstone': {
        id: 'middle_earth_item_dwarf_forger_heartstone',
        name: "Dwarf Forger Heartstone Mk.II",
        description: "A fist-sized obsidian gem, intensely hot to the touch and pulsating with the energy of a master dwarven smith’s forge. Imbued with the spirit of craftsmanship, it grants minor bonuses to crafting and repair skills.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🔨',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Increases Crafting Speed by 10%",
            "Provides a +2 bonus to Repair checks",
            "Grants Resistance to Fire damage (minor)"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'dragon_delivery',
        levelRequirement: 35
    },

    'middle_earth_item_legendary_gem_of_gondorian_resolve': {
        id: 'middle_earth_item_legendary_gem_of_gondorian_resolve',
        name: "The Legendary Gem of Gondorian Resolve (Echoes of Minas Tirith)",
        description: "A flawless sapphire, radiating with the power and unwavering determination of Gondor’s armies. This gem resonates with the echoes of battles fought and won, bolstering morale and providing a powerful defense against overwhelming foes.",
        category: SHOP_CATEGORIES.FACTION,
        price: 12000,
        icon: '🛡️',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Increases Party Morale by 50%",
            "Grants a +8 bonus to Defense in Group Combat",
            "Provides Resistance to Fear and Terror effects (permanent)",
            "Allows the user to channel a ‘Shield of Gondor’ aura, granting nearby allies +2 Armor Class"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_horse',
        levelRequirement: 50
    },

    'teyvat_item_pristine_lithos_walker': {
        id: 'teyvat_item_pristine_lithos_walker',
        name: "The Pristine Lithos Walker",
        description: "This rhythmic, geo-infused automaton strides with unsettling grace across the plains of Sumeru, leaving behind a faint trail of crystallized sand. Its movements echo with the ancient song of the earth, granting temporary resilience against elemental forces and a surprising agility.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '👣',
        stock: 12,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "increases geo resistance by 30%",
            "boosts movement speed by 15% for 60 seconds",
            "chance to generate a small amount of geo energy upon impact",
            "grants minor damage reduction against physical attacks"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'Dragon Courier',
        levelRequirement: 35
    },

    'teyvat_item_zenith_resonance_gem': {
        id: 'teyvat_item_zenith_resonance_gem',
        name: "Zenith Resonance Gem - Aetherial Bloom",
        description: "A pulsating gem harvested from the heart of a solidified storm cloud, radiating with pure electro-kinetic energy. Holding this gem allows you to briefly tap into the flow of lightning, unleashing potent shocks and disrupting enemy formations.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12500,
        icon: '⚡',
        stock: 37,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "deals 60-80 electric damage on hit",
            "chance to stun the target for 1 second",
            "temporarily increases attack speed by 10%",
            "creates a small electrical field around the user, dealing minor damage to nearby enemies"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'Sea Serpent Transport',
        levelRequirement: 28
    },

    'teyvat_item_chronometric_curiosity_orb': {
        id: 'teyvat_item_chronometric_curiosity_orb',
        name: "Chronometric Curiosity Orb - Temporal Drift",
        description: "This unsettling sphere, found within the ruins of a forgotten chronomancer’s laboratory, seems to subtly manipulate the flow of time around it. Prolonged exposure can induce disorientation and minor temporal distortions, offering glimpses into alternate timelines.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5200,
        icon: '⏳',
        stock: 8,
        rarity: 'uncommon',
        stockType: 'special_order',
        effects: [
            "chance to briefly slow down the target's movement speed by 25%",
            "creates a small temporal distortion field around the user, increasing their evasion chance by 10%",
            "provides vague visions of possible futures (random effect)",
            "can be used to reset cooldowns on active abilities (limited use)"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'Griffon Messenger',
        levelRequirement: 18
    },

    'pokemon_item_shadow_caller_tms_001': {
        id: 'pokemon_item_shadow_caller_tms_001',
        name: "The Obsidian Caller's TMs",
        description: "These obsidian-infused TMs resonate with the primal energy of battle, amplifying your Pokémon’s attacks with a chilling shadow influence.  Each TM unlocks a devastating move variant, promising a swift and merciless victory against any foe. A faint tremor accompanies each use, hinting at the ancient battles held within.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '🔥',
        stock: 33,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases attack by 20% for 10 turns",
            "chance to inflict burn on hit",
            "boosts critical hit ratio by 5%",
            "shadow damage type added to attacks"
        ],
        vendor: 'pokemart',
        shippedBy: 'Drone Delivery',
        levelRequirement: 25
    },

    'pokemon_item_malevolent_resonance_caller_002': {
        id: 'pokemon_item_malevolent_resonance_caller_002',
        name: "Mk.17 Malevolent Resonance Caller",
        description: "This intricate device, crafted from solidified nightmare essence, allows you to directly tap into the disruptive energy of a Pokémon's rage – feeding and amplifying its aggression for a terrifying offensive burst.  Using it summons a brief wave of static, distorting nearby visuals with an unsettling crimson hue, causing fear in opponents. The device pulses with a barely perceptible darkness.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '😈',
        stock: 15,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "increases attack and speed by 30% for 5 turns",
            "chance to inflict confusion on hit",
            "raises aggression stat of linked Pokémon",
            "shadow damage type added to attacks"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Winged Courier',
        levelRequirement: 40
    },

    'pokemon_item_chronos_echo_caller_service_003': {
        id: 'pokemon_item_chronos_echo_caller_service_003',
        name: "Temporal Echo Service - Chronos Caller Mark V",
        description: "This service grants access to a localized temporal distortion, allowing the user to briefly rewind or fast-forward a single Pokémon’s actions – offering tactical advantages in battle and revealing hidden vulnerabilities. Skilled application is required to avoid paradoxes, with the assistance of a trained Temporal Analyst. The device hums with captured echoes of time itself.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 8000,
        icon: '⏳',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Allows the user to rewind or fast forward a Pokémon's last move.",
            "Chance to cancel an opponent’s action.",
            "Reveals hidden status conditions on target Pokemon",
            "Reduces incoming damage by 10% for 3 turns"
        ],
        vendor: 'league_store',
        shippedBy: 'Magitek Transport System',
        levelRequirement: 50
    },

    'doughnut_hole_item_collapsed_gravitic_crowned_null': {
        id: 'doughnut_hole_item_collapsed_gravitic_crowned_null',
        name: "The Collapsed Gravitic Crowned Nulls",
        description: "These obsidian nulls pulse with a residual gravitational signature, seemingly pulled from the very heart of the void. Holding one grants fleeting moments of localized weightlessness, but prolonged exposure risks collapsing your personal center of gravity – a dizzying and disorienting experience.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌌',
        stock: 37,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "temporary_weightlessness",
            "increased_dexterity",
            "minor_gravitational_distortion",
            "chance_of_gravity_reversal"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dimensional Rift Courier',
        levelRequirement: 25
    },

    'doughnut_hole_item_eldritch_crowned_nulls_of_the_depth': {
        id: 'doughnut_hole_item_eldritch_crowned_nulls_of_the_depth',
        name: "Eldritch Crowned’s Nulls of the Depth",
        description: "Recovered from a shattered observation point deep within The Doughnut, these nulls thrum with an unsettling, almost sentient energy. Touching them induces vivid, fleeting visions – fractured memories of forgotten dimensions and the chilling indifference of the center.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '👁️',
        stock: 12,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "hallucinatory_visions",
            "increased_perception",
            "resistance_to_void_influence",
            "chance_of_temporal_distortion"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Phantom Delivery Drone',
        levelRequirement: 40
    },

    'doughnut_hole_item_mk_29_collapsed_nulls_of_inertia': {
        id: 'doughnut_hole_item_mk_29_collapsed_nulls_of_inertia',
        name: "Mk.29 Collapsed Nulls of Inertia",
        description: "These perfectly formed, dark grey nulls resonate with a strange stillness – a captured echo of absolute inertia from the center’s most turbulent moments. Consuming one grants temporary immunity to kinetic forces, but at the cost of being utterly immobile.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 600,
        icon: '🧲',
        stock: 89,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "temporary_immunity_to_kinetic_force",
            "increased_stability",
            "slowed_movement",
            "reduced_reaction_time"
        ],
        vendor: 'center_seller',
        shippedBy: 'Automated Delivery Unit 734',
        levelRequirement: 15
    },

    'faerun_item_the_chronal_ward_of_silverstream': {
        id: 'faerun_item_the_chronal_ward_of_silverstream',
        name: "The Chronal Ward of Silverstream",
        description: "This intricately carved ward pulses with a faint, silver light, subtly manipulating the flow of time around its wearer. Holding it grants brief glimpses into potential futures and allows for momentary accelerations or decelerations of personal perception – useful in both combat and perilous navigation.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12500,
        icon: '⏳',
        stock: 7,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "grant temporal distortion (slows time for 3 seconds)",
            "brief precognitive vision (reveals next enemy action)",
            "increased reaction speed (+10%)",
            "resistance to temporal magic"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'flying_ship',
        levelRequirement: 35
    },

    'faerun_item_the_aberrant_service_of_voidsong': {
        id: 'faerun_item_the_aberrant_service_of_voidsong',
        name: "The Aberrant Service of Voidsong",
        description: "A shimmering, obsidian sphere etched with unsettling geometric patterns, this item offers a unique service – temporary resonance with the chaotic energies of the Shadowfell.  It allows for brief communication with shadowy entities and the projection of illusory duplicates, but prolonged use risks madness.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 8000,
        icon: '🌀',
        stock: 3,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "summon illusory duplicate (lasts 60 seconds)",
            "communicate with Shadowfell entities (limited message)",
            "chance to inflict confusion (+20%)",
            "vulnerability to radiant damage"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'teleportation_scroll',
        levelRequirement: 40
    },

    'faerun_item_the_arcane_ward_of_dragonbreath': {
        id: 'faerun_item_the_arcane_ward_of_dragonbreath',
        name: "The Arcane Ward of Dragonbreath",
        description: "Forged from solidified dragonfire, this ward radiates intense heat and a faint sulfurous odor. It offers protection against fire damage and can unleash a concentrated blast of searing energy when activated - a potent weapon against those who dare approach.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '🔥',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "fire resistance (+30%)",
            "chance to ignite enemies (15%)",
            "deals 2d6 fire damage on activation",
            "minor heat aura (slightly overheats surrounding area)"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'wagon',
        levelRequirement: 20
    },

    'doughnut_hole_item_gravitic_whisperer_striker': {
        id: 'doughnut_hole_item_gravitic_whisperer_striker',
        name: "The Obsidian Echo Striker",
        description: "This unsettling device hums with a low, gravitational thrum. When activated, it briefly warps the immediate area, pulling nearby objects—and unfortunate creatures—towards its center point with terrifying precision.  Its surface is perpetually slick with an oily, iridescent residue, hinting at a connection to the void's deepest currents.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '🌀',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Temporarily increases gravity in a small radius.",
            "Chance to pull enemies towards the user.",
            "Reduces enemy movement speed by 20%",
            "Causes minor distortion of space, creating momentary visual glitches"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Gravitic Drone',
        levelRequirement: 35
    },

    'doughnut_hole_item_void_resonance_anomaly_901': {
        id: 'doughnut_hole_item_void_resonance_anomaly_901',
        name: "The Chronal Static Anomaly – Phase Shift",
        description: "A pulsating orb of compressed temporal energy, radiating a subtle chronal dissonance. Holding this anomaly briefly allows the user to experience fleeting 'echoes' of possible past events within their immediate vicinity - though prolonged exposure risks fracturing one's own timeline. It emits a constant static that disrupts nearby electronic devices.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 18500,
        icon: '⏳',
        stock: 7,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Grants a short-term 'phase shift' ability (briefly passes through obstacles).",
            "Temporarily disrupts enemy attacks.",
            "Chance to reveal hidden pathways or secrets.",
            "Causes minor temporal distortion, slowing enemies slightly."
        ],
        vendor: 'center_seller',
        shippedBy: 'Void Courier',
        levelRequirement: 48
    },

    'doughnut_hole_item_forbidden_null_striker_umbra': {
        id: 'doughnut_hole_item_forbidden_null_striker_umbra',
        name: "The Umbral Null Striker - Abyss's Embrace",
        description: "This object, pulsing with a sickly violet light, appears to actively *consume* surrounding gravity. Touching it induces immediate disorientation and a growing sense of dread—a direct link to the void’s chaotic heart. Prolonged use is rumored to unravel the user's very being, leaving behind only an empty husk.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 52000,
        icon: '🌑',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "Creates a localized zone of reversed gravity.",
            "Deals significant damage to enemies caught within the field.",
            "Chance to inflict ‘Void Corruption’ (reduces enemy stats).",
            "User suffers minor sanity drain over time."
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dimensional Rift Beacon',
        levelRequirement: 50
    },

    'internet_item_obsidian_keeper_tokens_7892': {
        id: 'internet_item_obsidian_keeper_tokens_7892',
        name: "The Obsidian Keeper's Tokens - Nexus Fragment 42B",
        description: "These obsidian tokens thrum with the residual energy of a collapsed server cluster. Holding them allows you to briefly tap into fragmented data streams, revealing hidden pathways within the network’s labyrinthine structure – but beware, prolonged exposure risks becoming lost in the echoes.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '✨',
        stock: 7,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "temporary_data_scan",
            "glitch_immunity",
            "minor_network_manipulation",
            "spectral_navigation"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Drone Delivery - Priority',
        levelRequirement: 35
    },

    'internet_item_corrupted_tokens_7892': {
        id: 'internet_item_corrupted_tokens_7892',
        name: "The Corrupted Tokens of Data - Stream Diverter 11A",
        description: "These tokens radiate a sickly green glow, remnants of a viral data flood. They allow you to temporarily hijack network connections and reroute data flow – perfect for bypassing security protocols or unleashing chaos on unsuspecting systems.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '☣️',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "data_hijack",
            "network_interference",
            "system_override",
            "temporary_access_level_boost"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Courier - Standard',
        levelRequirement: 20
    },

    'internet_item_mk_37_corrupted_tokens_7892': {
        id: 'internet_item_mk_37_corrupted_tokens_7892',
        name: "Mk.37 Corrupted Tokens – Fragmented Signal Keeper",
        description: "These tokens are etched with a chaotic, fractured code - each fragment pulsating faintly. Wielding them grants the ability to momentarily disrupt digital communications, creating pockets of silence and confusion within the vast network.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 600,
        icon: '📡',
        stock: 18,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "disrupt_signal",
            "data_obscuration",
            "temporary_communication_block",
            "echo_location_scan"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Automated Packet Delivery',
        levelRequirement: 15
    }
};
