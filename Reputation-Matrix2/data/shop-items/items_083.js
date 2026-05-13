// Shop items file 83
// Generated: 2026-03-22 20:00:17
// Items: 100

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_083 = {
    'leclaire_isle_item_mk_27_frosted_rolls_of_silent_decay': {
        id: 'leclaire_isle_item_mk_27_frosted_rolls_of_silent_decay',
        name: "Mk.27 Frosted Rolls of Silent Decay",
        description: "These unsettlingly perfect rolls are coated in a shimmering, frost that seems to absorb light. Consuming them induces vivid dreams filled with the forgotten histories of L'Eclaire Isle’s past - though prolonged use can lead to paranoia and an obsession with stale pastries.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '💀',
        stock: 8,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "grant temporary resistance to psychic attacks",
            "provides +5 to Charisma checks (due to unsettling appearance)",
            "chance of experiencing prophetic dreams (negative or positive)"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'Phantom Parceler',
        levelRequirement: 30
    },

    'leclaire_isle_item_the_mythic_roll_of_eternal_frosting': {
        id: 'leclaire_isle_item_the_mythic_roll_of_eternal_frosting',
        name: "The Mythic Roll of Eternal Frosting",
        description: "A single, impossibly large roll encased in a perpetual layer of glistening frosting. Legend says it was crafted by the first Dough Folk master baker – consuming this legendary treat grants near-immortality (of sorts) and access to arcane pastry knowledge.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 85000,
        icon: '✨',
        stock: 1,
        rarity: 'mythic',
        stockType: 'godly',
        effects: [
            "grants permanent bonus to cooking skills",
            "immune to all forms of aging and decay (related to food)",
            "allows limited control over frosting-based magic",
            "chance of spontaneous pastry creation"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'Celestial Courier',
        levelRequirement: 50
    },

    'faerun_item_the_ghostwood_wrights_wand': {
        id: 'faerun_item_the_ghostwood_wrights_wand',
        name: "The Ghostwood Wright's Wand",
        description: "This intricately carved wand is crafted from the petrified wood of a long-dead treant, imbued with echoes of ancient spells. When cast, it summons spectral sprites to momentarily disrupt enemy attacks and reveals hidden pathways within shadowed locations.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '👻',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "disrupt enemy attacks",
            "reveals hidden pathways",
            "chance to summon spectral sprites"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'dragon_express',
        levelRequirement: 25
    },

    'faerun_item_the_crimson_rune_of_kraznak_wright': {
        id: 'faerun_item_the_crimson_rune_of_kraznak_wright',
        name: "The Crimson Rune of Kraznak's Wright",
        description: "Forged in the heart of a volcanic forge by the enigmatic Kraznak, this rune pulses with raw magical energy. When activated, it creates a localized zone of intense heat, melting through armor and inflicting burning damage upon foes – beware its cursed touch!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 7500,
        icon: '🔥',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "deals fire damage over time",
            "melts through armor",
            "chance to ignite enemies",
            "causes minor burn effect on caster"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'gondorian_courier',
        levelRequirement: 40
    },

    'faerun_item_the_shadow_singer_s_mantle': {
        id: 'faerun_item_the_shadow_singer_s_mantle',
        name: "The Shadow Singer’s Mantle of Umbra",
        description: "This dark grey mantle, adorned with silver thread depicting scenes of mournful ballads, was crafted by the exiled Shadow Singer. It grants limited control over shadows and allows for near-silent movement, but carries a lingering sorrow that slowly drains the wearer's will.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 23000,
        icon: '🌑',
        stock: 5,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "increased stealth",
            "shadow manipulation (minor)",
            "chance to inflict fear",
            "slows movement speed upon prolonged use"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'silver_arrow_express',
        levelRequirement: 50
    },

    'pokemon_item_chronos_resonance_ward': {
        id: 'pokemon_item_chronos_resonance_ward',
        name: "The Chronos Resonance Ward of Trainer Silas",
        description: "This pulsating stone hums with temporal energy, briefly accelerating the growth rate of nearby Pokémon and subtly altering their battle instincts. It’s rumored to have been crafted by the enigmatic trainer, Silas, who vanished after mastering time-based tactics.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '⏳',
        stock: 12,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "increases pokemon growth rate by 50% for 3 turns",
            "shifts pokemon’s battle priority +1 for 2 turns",
            "chance to trigger a 'time slip' effect, briefly reversing an opponent’s last move",
            "provides temporary resistance to status moves"
        ],
        vendor: 'pokemart_silas',
        shippedBy: 'winged_delivery_bird',
        levelRequirement: 35
    },

    'pokemon_item_ethereal_symphony_shard': {
        id: 'pokemon_item_ethereal_symphony_shard',
        name: "The Ethereal Symphony Shard of Echoing Dreams",
        description: "A fragment of solidified sound, this shard emanates a gentle melody that soothes agitated Pokémon and enhances their connection to the surrounding environment. Holding it grants glimpses into alternate realities where battles are fought with unheard-of strategies.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12500,
        icon: '🎶',
        stock: 7,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "restores a small amount of pokemon happiness",
            "increases the accuracy of all pokemon by 10%",
            "chance to trigger a ‘phantom echo’ effect, briefly duplicating an opponent's move",
            "boosts trainer's intuition for 2 turns"
        ],
        vendor: 'safari_shop_echoes',
        shippedBy: 'moonlit_delivery_drone',
        levelRequirement: 20
    },

    'pokemon_item_mk72_lumina_stone_of_valor': {
        id: 'pokemon_item_mk72_lumina_stone_of_valor',
        name: "Mk.72 Lumina Stone of Valor - Prototype Designation",
        description: "This obsidian-like stone absorbs and releases the raw energy of battles, manifesting as a brilliant blue light that temporarily amplifies the trainer's strategic prowess. It’s a prototype relic recovered from a forgotten Pokémon League facility.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 23000,
        icon: '✨',
        stock: 4,
        rarity: 'epic',
        stockType: 'delivery_only',
        effects: [
            "increases the trainer's critical hit rate by 15%",
            "temporarily boosts the attack stat of one Pokémon by 30%",
            "chance to inflict ‘lumina burn’ – a status effect that lowers opponent defense.",
            "provides a small shield against direct attacks"
        ],
        vendor: 'league_store_prototype',
        shippedBy: 'reinforced_transport_truck',
        levelRequirement: 40
    },

    'equestria_item_radiant_bearer_of_echoes': {
        id: 'equestria_item_radiant_bearer_of_echoes',
        name: "Radiant Bearer's Badges of Echoes",
        description: "These badges, crafted from solidified twilight and imbued with the whispers of ancient harmony, grant the wearer fleeting glimpses into past events linked to moments of profound emotional resonance. Each badge pulses with a gentle, radiant light, amplifying empathy and subtly correcting minor miscommunications – a truly kind blessing.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '✨',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increase empathy by 15%",
            "chance to subtly correct miscommunications (20%)",
            "radiant aura provides minor protection from emotional manipulation",
            "reveals echoes of past events when near significant locations"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'winged_delivery_pony',
        levelRequirement: 25
    },

    'equestria_item_mk.73_kind_badges_of_resonance': {
        id: 'equestria_item_mk.73_kind_badges_of_resonance',
        name: "Mk.73 Kind Badges of Resonance",
        description: "Forged during a rare convergence of elemental energies within the Crystal Heart, these badges radiate a soothing warmth and promote genuine understanding between individuals. The intricate engravings depict scenes of ponies cooperating with unwavering kindness – a testament to the pursuit of harmony.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8500,
        icon: '💖',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "restores 25% HP over 30 minutes while worn",
            "grants +5 charisma with all ponies",
            "increases resistance to fear and anxiety",
            "creates a small zone of calming influence around the wearer (10m radius)"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'royal_carriage',
        levelRequirement: 40
    },

    'equestria_item_godly_harmony_shield_of_the_aureate': {
        id: 'equestria_item_godly_harmony_shield_of_the_aureate',
        name: "Godly Harmony Shield of the Aurate",
        description: "This shield, a relic from before the creation of Equestria, is said to have been blessed by the very essence of harmony itself. It shimmers with an ethereal gold light and emanates a palpable sense of peace, capable of neutralizing even the most potent disruptive magic – a truly divine safeguard.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 75000,
        icon: '🛡️',
        stock: 1,
        rarity: 'godly',
        stockType: 'delivery_only',
        effects: [
            "provides +60 armor value",
            "reflects all negative magic attacks back at the caster (50%)",
            "grants immunity to fear and mind control",
            "emits a powerful aura of harmony, pacifying nearby creatures"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'starshard_ship',
        levelRequirement: 50
    },

    'earth_land_item_lumina_chronos_ring': {
        id: 'earth_land_item_lumina_chronos_ring',
        name: "The Lumina Chronos Ring - Frostweaver's Echo",
        description: "This ring pulses with trapped glacial light, a fragment of time solidified by ancient frost wizards. Wearing it allows brief glimpses into frozen moments and grants resistance to chilling effects, but prolonged use risks temporal instability.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '❄️',
        stock: 37,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "resistance to cold damage",
            "brief glimpses of frozen time (1 second)",
            "chance to slow enemy movement",
            "minor temporal distortion - chance to revert small wounds"
        ],
        vendor: 'magic_shop',
        shippedBy: 'winged_delivery_bird',
        levelRequirement: 25
    },

    'earth_land_item_sylvanus_hunter_amulet': {
        id: 'earth_land_item_sylvanus_hunter_amulet',
        name: "Sylvanus’ Hunter Amulet - Echoes of the Verdant Wyrm",
        description: "Forged from petrified dragonwood and imbued with the spirit of a territorial, ancient wyrm, this amulet enhances tracking skills and grants a primal connection to nature. The wearer gains increased movement speed in forests and can sense nearby creatures, but its power draws unwanted attention from woodland spirits.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🌿',
        stock: 12,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "increased movement speed in forests (+25%)",
            "sense nearby creatures within 30 meters",
            "chance to inflict 'rooted' on enemies",
            "improved tracking ability (higher chance of finding items)"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'giant_beetle',
        levelRequirement: 40
    },

    'earth_land_item_aethelred_skycaller': {
        id: 'earth_land_item_aethelred_skycaller',
        name: "Aethelred’s Skycaller - Celestial Resonance Shard",
        description: "This intricately carved bone shard vibrates with the echoes of fallen celestial dragons, projecting shimmering light that disrupts magical energies and creates protective barriers.  The wielder can channel this energy for a single powerful blast or use it to ward off arcane attacks, but overuse may attract unwanted attention from higher dimensional entities.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '✨',
        stock: 8,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "creates a protective barrier (absorbs magic damage)",
            "single blast of celestial energy (deals moderate magic damage)",
            "chance to dispel minor magical effects",
            "reduces magical accuracy against wearer"
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'griffin',
        levelRequirement: 30
    },

    'earth_land_item_the_frostbound_dragons_song': {
        id: 'earth_land_item_the_frostbound_dragons_song',
        name: "The Frostbound Dragons' Song",
        description: "A meticulously transcribed grimoire detailing the harmonic resonances used by ancient dragon shapers to manipulate glacial formations. Its pages pulse with a faint, chilling aura and whisper of forgotten draconic melodies.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 12000,
        icon: '🧊',
        stock: 5,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "Increases frost resistance by 30%",
            "Allows the user to cast 'Chill Echo' once per day (deals 15-25 ice damage)",
            "Provides a passive bonus to cold-based attack rolls",
            "Grants temporary immunity to fear effects"
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'Ice Wraith Courier',
        levelRequirement: 35
    },

    'earth_land_item_the_geothermic_resonator_of_old_grimstone': {
        id: 'earth_land_item_the_geothermic_resonator_of_old_grimstone',
        name: "The Geothermic Resonator of Old Grimstone",
        description: "This intricately crafted equipment piece, forged from petrified magma and arcane metals, vibrates with the latent heat of the earth. It allows the wearer to briefly tap into subterranean thermal currents.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🔥',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increases movement speed by 15% for 60 seconds",
            "Allows the user to create a small geyser (deals 30-45 fire damage in a 5m radius)",
            "Provides resistance to fire damage",
            "Generates a faint heat signature, making it slightly harder to detect"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'Magma Runner Delivery',
        levelRequirement: 20
    },

    'earth_land_item_the_arcane_shard_of_glacial_memory': {
        id: 'earth_land_item_the_arcane_shard_of_glacial_memory',
        name: "The Arcane Shard of Glacial Memory",
        description: "A fractured piece of an ancient ice wall, imbued with the echoes of countless forgotten moments. Holding this shard grants glimpses into the past – though its visions are often fragmented and unsettling.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '❄️',
        stock: 27,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Grants a chance to reveal hidden passages or clues (10% chance)",
            "Allows the user to briefly communicate with spirits trapped within the ice wall",
            "Provides minor protection against cold damage",
            "Occasionally triggers a brief, unsettling vision of a past event"
        ],
        vendor: 'magic_shop',
        shippedBy: 'Spectral Messenger',
        levelRequirement: 15
    },

    'almost_edge_item_fringe_caller_of_void_resonances': {
        id: 'almost_edge_item_fringe_caller_of_void_resonances',
        name: "The Fringe Caller's Whispers",
        description: "These fractured obsidian orbs hum with the distant echoes of realities just beyond perception, drawing in fragmented thoughts and unsettling visions. Holding the Caller grants fleeting glimpses into the swirling chaos of the void’s fringe, offering a terrifyingly beautiful understanding of existence.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 125,
        icon: '🌌',
        stock: 42,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Grants +5 to Perception for 30 seconds",
            "Chance of inflicting ‘Cosmic Dissonance’ (causes minor hallucinations)",
            "Adds 1 point to Void Resonance Level",
            "Reduces nearby shadow intensity by 20%"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Dimensional Courier',
        levelRequirement: 15
    },

    'almost_edge_item_fabled_caller_of_the_abyss': {
        id: 'almost_edge_item_fabled_caller_of_the_abyss',
        name: "Fabled Caller’s Whispers of the Abyss",
        description: "Crafted from solidified twilight and faintly pulsating with an unsettling violet light, this device draws upon the energies of the deepest abyss. The whispers it delivers can temporarily warp your senses, revealing hidden passages or driving you to madness.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '🖤',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Grants +10 to Stealth in dark areas",
            "Allows the user to briefly see through illusions (50% chance)",
            "Increases movement speed by 10% for 60 seconds",
            "Chance of attracting minor void entities"
        ],
        vendor: 'void_merchant',
        shippedBy: 'Void Freight',
        levelRequirement: 35
    },

    'almost_edge_item_mk_52_fringe_whispers_of_the_fractured_plane': {
        id: 'almost_edge_item_mk_52_fringe_whispers_of_the_fractured_plane',
        name: "Mk.52 Fringe Whispers of the Fractured Plane",
        description: "This device, salvaged from a shattered dimension, is comprised of interlocking shards of iridescent glass and pulsating energy. It emits a constant stream of fragmented thoughts and disjointed memories, capable of disrupting mental stability.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 6500,
        icon: '✨',
        stock: 3,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Provides a constant stream of unsettling whispers (reduces focus by -10)",
            "Grants +20 to Intelligence for 90 seconds",
            "Allows the user to briefly phase through solid objects (low chance, short duration)",
            "Increases resistance to psychic attacks"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Quantum Logistics',
        levelRequirement: 50
    },

    'leclaire_isle_item_sugared_cookies_of_cozy': {
        id: 'leclaire_isle_item_sugared_cookies_of_cozy',
        name: "The Sugared Cookies of Cozy",
        description: "These exquisitely sugared cookies emanate a faint warmth, said to soothe the most troubled Dough Folk heart. Each bite releases an aroma reminiscent of freshly baked bread and distant hearthfires, perfect for quiet contemplation or bolstering spirits.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 275,
        icon: '🍪',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "restores 10 HP",
            "increases happiness by 5",
            "grants +2 to charisma for 3 turns"
        ],
        vendor: 'dough_depot',
        shippedBy: 'rolling_cart',
        levelRequirement: 15
    },

    'leclaire_isle_item_jade_binder_sugared_cookies': {
        id: 'leclaire_isle_item_jade_binder_sugared_cookies',
        name: "Jade Binder's Sugared Cookies",
        description: "Crafted with rare jade-infused dough and delicately sugared, these cookies are rumored to be favored by the ancient Baker Kings. Consuming them allows you to momentarily bind the chaotic energies of L’Eclaire Isle, slowing down movement for a short period.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 987,
        icon: '💎',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "slows enemy movement speed by 50% for 5 turns",
            "provides +2 armor rating",
            "chance to trigger a small sugar rush (increased movement speed)"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'delivery_drone',
        levelRequirement: 30
    },

    'leclaire_isle_item_mk.38_sugared_cookies': {
        id: 'leclaire_isle_item_mk.38_sugared_cookies',
        name: "Mk.38 Sugared Cookies",
        description: "These meticulously crafted cookies, created using a lost recipe from the Great Dough Wars, possess an almost unsettlingly perfect texture and flavor.  Legend states that consuming them allows you to briefly glimpse the hidden pathways within L'Eclaire Isle’s labyrinthine tunnels.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 18500,
        icon: '🍪✨',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "reveals hidden passages on the map for 60 seconds",
            "chance to discover rare ingredients (10%)",
            "provides +5 intelligence for 2 turns",
            "may cause temporary confusion"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'mythical_snail',
        levelRequirement: 50
    },

    'internet_item_compressed_keys_of_viral_storm': {
        id: 'internet_item_compressed_keys_of_viral_storm',
        name: "The Compressed Keys of Viral Storm",
        description: "These keys, forged from solidified data streams, vibrate with the residual energy of a thousand viral trends. Holding them grants momentary immunity to unwanted meme exposure and allows for brief bursts of accelerated thought - perfect for outsmarting copycats.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '💥',
        stock: 37,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Temporary Viral Immunity (60 seconds)",
            "Accelerated Thought Speed (2x)",
            "Minor Data Surge (restores 5% HP)"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Drone Delivery - Priority',
        levelRequirement: 35
    },

    'internet_item_jeweled_forged_nodes_of_the_lost_signal': {
        id: 'internet_item_jeweled_forged_nodes_of_the_lost_signal',
        name: "Jeweled Forged's Nodes of the Lost Signal",
        description: "These intricately jeweled nodes, meticulously forged from salvaged network architecture, hum with a faint, melancholic signal. Immersing yourself in their resonance allows you to briefly tap into forgotten data streams – potentially uncovering valuable information or experiencing echoes of past online interactions.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '📡',
        stock: 15,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Brief Echo of Past Online Interaction (30 seconds)",
            "Probability of discovering hidden data (+5%)",
            "Minor Data Corruption Resistance"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Courier - Standard',
        levelRequirement: 28
    },

    'internet_item_mk_77_compressed_tokens_of_the_algorithmic_echo': {
        id: 'internet_item_mk_77_compressed_tokens_of_the_algorithmic_echo',
        name: "Mk.77 Compressed Tokens of the Algorithmic Echo",
        description: "These compact tokens, compressed from the remnants of countless algorithmic calculations, pulse with a subtle rhythmic energy.  When activated, they generate a localized distortion field – capable of briefly disrupting digital surveillance and shielding your data transmissions.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 650,
        icon: '🛡️',
        stock: 89,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Temporary Data Shield (10% chance to block surveillance scan)",
            "Disrupts Digital Surveillance (5 seconds)",
            "Minor Data Stream Stabilization"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Automated Delivery - Express',
        levelRequirement: 12
    },

    'kivotos_item_kaleidoscopic_ward_of_resonance': {
        id: 'kivotos_item_kaleidoscopic_ward_of_resonance',
        name: "Kaleidoscopic Ward's Cards - Echoes of the Assembly",
        description: "These shimmering cards, etched with intricate patterns resembling student hallways, emit a faint resonance when activated. Holding them grants brief glimpses into the collective thoughts of those within Academy City’s boundaries – a chaotic, yet occasionally insightful experience.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '✨',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Briefly reveals the thoughts of nearby students.",
            "Increases perception by 10% for 30 seconds.",
            "Causes minor auditory hallucinations (pleasant or unsettling).",
            "Grants a +2 bonus to Charisma checks with students."
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery',
        levelRequirement: 15
    },

    'kivotos_item_elite_card_of_lumina_protection': {
        id: 'kivotos_item_elite_card_of_lumina_protection',
        name: "The Mk.68 Elite Cards - Lumina Guardian Ward",
        description: "Forged from solidified light harvested during a student performance, these cards radiate a protective aura against mental disruption. They're incredibly fragile and require careful handling to maintain their efficacy.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🛡️',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Grants +5 resistance to mental attacks.",
            "Creates a shimmering shield around the user for 60 seconds.",
            "Occasionally emits a burst of radiant energy, stunning nearby enemies.",
            "Reduces negative emotions by 15%."
        ],
        vendor: 'academy_armory',
        shippedBy: 'Courier Pigeon',
        levelRequirement: 38
    },

    'kivotos_item_forbidden_shard_of_divine_discord': {
        id: 'kivotos_item_forbidden_shard_of_divine_discord',
        name: "The Chronal Discord - Godly Fragment of the Silent Judgement",
        description: "This impossibly smooth shard pulsates with an unsettling energy, capable of disrupting temporal flows within a small radius. Touching it risks immediate madness and potential paradoxes – wielded by those seeking to unravel reality itself.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 75000,
        icon: '🔥',
        stock: 1,
        rarity: 'godly',
        stockType: 'delivery_only',
        effects: [
            "Causes localized temporal distortions (random effects).",
            "Summons fleeting echoes of past events.",
            "Deals significant damage to enemies based on the severity of the temporal disruption.",
            "Chance to randomly age or de-age the user."
        ],
        vendor: 'shadow_merchant',
        shippedBy: 'Black Hole Transport',
        levelRequirement: 50
    },

    'equestria_item_chronoflow_bits': {
        id: 'equestria_item_chronoflow_bits',
        name: "The Chronoflow Bits of Twilight's Echoes",
        description: "These iridescent bits shimmer with temporal energy, allowing the user to briefly rewind minor actions – a dropped item, a missed step, or a poorly aimed kick. Beware, overuse risks creating unstable time ripples!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '⏳',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Rewinds last action (short duration)",
            "Chance of minor temporal distortion",
            "Increases reaction speed for 15 seconds",
            "Can cause dizziness if overused"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Pegasus Courier',
        levelRequirement: 25
    },

    'equestria_item_crystalline_heartshard': {
        id: 'equestria_item_crystalline_heartshard',
        name: "Mk.78 Crystalline Heartshard of Fluttershy's Sanctuary",
        description: "A pulsating fragment harvested from the core of Fluttershy’s sanctuary, this shard radiates a soothing aura and amplifies empathy. It can pacify agitated creatures or bolster one’s own compassion – but prolonged contact risks overwhelming the user with emotion.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '💖',
        stock: 9,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Boosts empathy and persuasion skills",
            "Reduces aggression in nearby creatures",
            "Grants temporary resistance to fear effects",
            "Causes feelings of overwhelming compassion (potential negative side effect)"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Delivery Pony Express',
        levelRequirement: 40
    },

    'equestria_item_cursed_bits_of_shadowhoof': {
        id: 'equestria_item_cursed_bits_of_shadowhoof',
        name: "The Cursed Bits of Shadowhoof's Lament",
        description: "These obsidian-black bits were forged in the darkest corners of the Everfree Forest by a long-lost shadow pony.  They grant incredible strength, but at a terrible cost - slowly corrupting the user’s spirit with despair and paranoia.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 6000,
        icon: '🌑',
        stock: 5,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "Massively increases physical strength and durability",
            "Grants resistance to magical attacks (short duration)",
            "Causes paranoia and mistrust in the user's mind",
            "Slowly reduces willpower and sanity"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Dark Pegasus Messenger',
        levelRequirement: 50
    },

    'the_edge_item_infernal_striker_s_memories': {
        id: 'the_edge_item_infernal_striker_s_memories',
        name: "Infernal Striker’s Memories – Echoes of the Unwritten",
        description: "A fractured shard containing glimpses of battles fought in the endless inferno.  Each pulse grants a fleeting sensation, offering tactical insights or disturbing visions from a forgotten war. Prolonged exposure risks unraveling your own recollection.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 875,
        icon: '🔥',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Grants +10 to Perception for 60 seconds",
            "Chance (5%) to inflict 'Phantom Pain' - deals 1d6 psychic damage over 3 rounds.",
            "Risk: Chance (10%) to cause temporary madness (-2 Wisdom until next long rest)"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'Hellfire Courier',
        levelRequirement: 15
    },

    'the_edge_item_mk_24_endless_memories': {
        id: 'the_edge_item_mk_24_endless_memories',
        name: "Mk.24 Endless Memories – The Cartographer's Lament",
        description: "A tightly wound sphere of solidified regret, purportedly a record of a cartographer who mapped the shifting edges of reality. Touching it floods your mind with fragmented maps and desperate calculations – a maddening attempt to impose order on chaos.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12500,
        icon: '🗺️',
        stock: 9,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "+5 to Cartography skill checks",
            "Grants 'Spatial Awareness' – increased movement speed in unfamiliar environments (10%)",
            "Risk: Slowly drains Sanity (-1 per hour of prolonged use)"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'Dimensional Transit',
        levelRequirement: 35
    },

    'the_edge_item_forbidden_chronal_fragments_77': {
        id: 'the_edge_item_forbidden_chronal_fragments_77',
        name: "Forbidden Chronal Fragments – The Obsidian Shard’s Lament",
        description: "Seven jagged pieces of crystallized time, pulled from the moment just before existence itself.  Holding them evokes a sense of overwhelming dread and fractured timelines; they offer glimpses into realities that never were, or perhaps *will* be.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 55000,
        icon: '⏳',
        stock: 3,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "Grants +20 to Temporal Resistance",
            "Allows for short-range temporal jumps (once per day – maximum 1 minute)",
            "Risk: Significant chance of creating paradoxes and attracting unwanted attention from Chronal entities.",
            "Can trigger unpredictable reality shifts."
        ],
        vendor: 'final_shop',
        shippedBy: 'Void Serpent Delivery',
        levelRequirement: 50
    },

    'grand_country_item_gravitic_helix_caller': {
        id: 'grand_country_item_gravitic_helix_caller',
        name: "The Karmic Caller’s Spiral Ascender",
        description: "This intricate device, woven from solidified gravity currents and iridescent layer-silk, allows the user to momentarily manipulate vertical trajectories with a single, melodic pulse.  It resonates with the inherent karmic flow of the doughnut side, providing brief bursts of directional control as you scale impossible surfaces. Beware its unpredictable harmonic shifts!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🧗‍♀️',
        stock: 7,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "temporary_gravity_manipulation",
            "increased_climbing_speed",
            "karmic_resonance_boost",
            "resistance_to_falling"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Gravity Drone',
        levelRequirement: 35
    },

    'grand_country_item_layered_rope_of_shifting_depths': {
        id: 'grand_country_item_layered_rope_of_shifting_depths',
        name: "Mk.47 Layered Rope of Shifting Depths",
        description: "Crafted from the compressed echoes of fallen layers and reinforced with solidified gravity fields, this rope possesses an uncanny ability to subtly alter its own dimensional footprint.  Pulling it can momentarily phase you partially into adjacent layers, allowing traversal through impossibly tight crevices, but prolonged use risks complete unraveling.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🔗',
        stock: 23,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "phase_through_layers",
            "increased_rope_strength",
            "minor_gravity_distortion",
            "echo_resonance"
        ],
        vendor: 'side_seller',
        shippedBy: 'Dimensional Courier',
        levelRequirement: 28
    },

    'grand_country_item_forbidden_vertical_hook_of_stasis': {
        id: 'grand_country_item_forbidden_vertical_hook_of_stasis',
        name: "The Obsidian Stasis Hook Caller",
        description: "This horrifying device, forged from solidified negative gravity and imbued with a dark resonance, allows the user to briefly trap themselves in a state of absolute vertical stasis.  It’s whispered that prolonged use attracts unwelcome attention from the deeper layers... an unsettling, karmic consequence for disrupting the natural flow.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 50000,
        icon: '💀',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "temporal_stasis",
            "increased_fall_damage_resistance",
            "gravity_nullification (short burst)",
            "karmic_debt_accumulation"
        ],
        vendor: 'layer_market',
        shippedBy: 'Shadow Weaver',
        levelRequirement: 50
    },

    'equestrian_item_the_scorched_mane_guardian': {
        id: 'equestrian_item_the_scorched_mane_guardian',
        name: "The Scorched Mane Guardian’s Bit",
        description: "This obsidian bit, etched with glyphs of fiery loyalty, radiates a faint warmth. When consumed, it grants temporary resistance to cold and ignites a minor flame around the rider's hooves – perfect for intimidating villains or navigating icy terrain.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔥',
        stock: 37,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "fire resistance +10",
            "hoof flame (minor)",
            "increased movement speed (5%)",
            "resistance to cold damage"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Pegasus Courier',
        levelRequirement: 25
    },

    'equestrian_item_the_crystalline_echo_shard': {
        id: 'equestrian_item_the_crystalline_echo_shard',
        name: "The Crystalline Echo Shard of Twilight’s Reverie",
        description: "A fragment of solidified twilight, shimmering with trapped melodies. Holding this shard allows the user to momentarily perceive echoes of past events in a location, offering glimpses of forgotten conversations and spectral visions – though the images are often fragmented and unsettling.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '🔮',
        stock: 12,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "vision clarity +20%",
            "detect hidden objects (short range)",
            "chance to receive cryptic visions",
            "temporary increase in intuition"
        ],
        vendor: 'crystal_empire_artifacts',
        shippedBy: 'Griffin Delivery Service',
        levelRequirement: 40
    },

    'equestrian_item_the_vile_bits_of_discord': {
        id: 'equestrian_item_the_vile_bits_of_discord',
        name: "The Vile Bits of Discord's Lament",
        description: "These tarnished bits are said to have been forged in the heart of a forgotten argument. Each bite introduces a subtle sense of unease and paranoia, making it difficult to trust even closest companions – proceed with caution.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 600,
        icon: '😈',
        stock: 89,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "paranoia +15%",
            "reduced trust (3%)",
            "chance to trigger negative emotions in others",
            "minor reduction in charisma"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Ground Delivery',
        levelRequirement: 10
    },

    'middle_earth_item_obsidian_whisperer_of_mirkwood': {
        id: 'middle_earth_item_obsidian_whisperer_of_mirkwood',
        name: "The Obsidian Whisperer of Mirkwood",
        description: "This intricately carved obsidian shard pulses with the echoes of forgotten songs and dark secrets. Holding it grants temporary clarity in treacherous shadows, revealing hidden paths within the tangled depths of Mirkwood – but prolonged use risks succumbing to its melancholic influence.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7800,
        icon: '🦉',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased_shadow_vision",
            "temporary_resistance_to_fear",
            "chance_to_reveal_hidden_paths"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_owl',
        levelRequirement: 25
    },

    'middle_earth_item_dwarven_mithril_of_grimstone': {
        id: 'middle_earth_item_dwarven_mithril_of_grimstone',
        name: "The Dwarven Mithril of Grimstone’s Fury",
        description: "Forged deep within the malevolent mines of Grimstone Peak, this mithril axe head resonates with primal rage. When swung with focused intent, it can shatter stone and disrupt the flow of magical energies – a favored tool for dwarven warriors seeking to punish transgressions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🔨',
        stock: 8,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "increased_damage_against_stone",
            "chance to inflict bleeding",
            "temporarily boosts attack speed"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'dire_wolf',
        levelRequirement: 40
    },

    'middle_earth_item_service_of_the_greywatchers': {
        id: 'middle_earth_item_service_of_the_greywatchers',
        name: "The Greywatcher’s Vigilance Offering",
        description: "A shimmering, ethereal sphere created by the ancient Greywatchers, this object projects a calming aura around its user. It can momentarily bolster courage and offer protection from overwhelming despair – a valuable service for those facing daunting trials or battling inner demons.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 5500,
        icon: '🛡️',
        stock: 33,
        rarity: 'godly',
        stockType: 'delivery_only',
        effects: [
            "restores courage",
            "provides temporary protection from despair",
            "chance to dispel minor curses"
        ],
        vendor: 'shire_shop',
        shippedBy: 'swift_horse',
        levelRequirement: 30
    },

    'dohut_hole_item_forsaken_walker_tears': {
        id: 'dohut_hole_item_forsaken_walker_tears',
        name: "Forsaken Walker's Tears of Shifting Gravity",
        description: "These obsidian tears pulse with the residual echoes of collapsed realities. When consumed, they grant momentary control over localized gravitational fields – pulling objects towards you or briefly levitating yourself while navigating unstable terrain within the Fated Place.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 875,
        icon: '🌌',
        stock: 33,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Grants temporary control over gravity (range: 5m)",
            "Increases movement speed by 10% for 15 seconds",
            "Minor chance of localized distortion – brief visual hallucinations"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Void Courier Drone',
        levelRequirement: 25
    },

    'dohut_hole_item_mk_91_void_walker': {
        id: 'dohut_hole_item_mk_91_void_walker',
        name: "Mk.91 Void Walker’s Resonance Core",
        description: "A geometrically fractured sphere of solidified void energy, this core hums with the instability of the central anomaly. Imbueing it into your armor grants resistance to gravity-based attacks and allows you brief phaseshifts through thin walls.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 17500,
        icon: '🌀',
        stock: 8,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Reduces gravity-based damage by 30%",
            "Allows brief phaseshift – short range teleportation (1m)",
            "Increases resistance to void anomalies",
            "Chance of emitting a localized distortion field, confusing enemies"
        ],
        vendor: 'center_seller',
        shippedBy: 'Dimensional Transit Packet',
        levelRequirement: 45
    },

    'dohut_hole_item_forbidden_void_tears_98': {
        id: 'dohut_hole_item_forbidden_void_tears_98',
        name: "Forbidden Void Tears of the Anomaly’s Maw",
        description: "Collected from the deepest recesses within a rift, these crimson tears radiate an unsettling awareness. Drinking them grants access to precognitive flashes—brief glimpses of potential futures directly tied to your actions within the Fated Place, but at the cost of fragmenting your sanity.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 50000,
        icon: '🩸',
        stock: 1,
        rarity: 'mythic',
        stockType: 'back_order',
        effects: [
            "Grants brief precognitive flashes – reveals potential outcomes for a single action (chance based)",
            "Increases intelligence by 20% for 60 seconds",
            "Significant risk of temporary madness – paranoia, hallucinations",
            "Chance to attract the attention of entities from beyond the void"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Temporal Retrieval Unit',
        levelRequirement: 50
    },

    'kivotos_item_quartz_dancer_uniform': {
        id: 'kivotos_item_quartz_dancer_uniform',
        name: "Quartz Dancer's Ensemble - Semester 7 Variant",
        description: "This shimmering uniform, crafted from synthesized quartz fibers, allows the wearer to subtly manipulate light and sound within Academy City’s echoing halls. Initial tests indicate a slight amplification of club announcements – potentially useful for disrupting lectures… or rallying supporters.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '✨',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "amplified_sound_perception",
            "minor_light_distortion",
            "increased_club_influence"
        ],
        vendor: 'student_store',
        shippedBy: 'drone_delivery',
        levelRequirement: 25
    },

    'kivotos_item_mk_4_semester_pins_of_discord': {
        id: 'kivotos_item_mk_4_semester_pins_of_discord',
        name: "Mk.4 Semester Pins of Discord - Crimson Variant",
        description: "A collection of crimson enamel pins, each imbued with a suppressed echo of chaotic energy from the Academy’s forbidden clubs. Wearing multiple pins simultaneously triggers unpredictable disruptions in nearby electronics and minor shifts in social dynamics.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '🔥',
        stock: 7,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "randomized_electrical_interference",
            "minor_social_disruption",
            "chance_of_temporary_confusion"
        ],
        vendor: 'club_supply',
        shippedBy: 'express_delivery',
        levelRequirement: 40
    },

    'kivotos_item_forbidden_resonator_circulator_of_silence': {
        id: 'kivotos_item_forbidden_resonator_circulator_of_silence',
        name: "Forbidden Resonator Circulator - Obsidian Variant",
        description: "This device, salvaged from a collapsed student initiation ritual, generates a localized field of absolute silence. Prolonged exposure leads to disorientation and a severe reduction in sensory input – potentially useful for clandestine operations or avoiding unwanted attention… if you can control it.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 75000,
        icon: '🤫',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "absolute_silence_field",
            "sensory_deprivation",
            "chance_of_hallucination"
        ],
        vendor: 'academy_armory',
        shippedBy: 'encrypted_package',
        levelRequirement: 50
    },

    'animatopia_item_twilight_keeper_of_shattered_echoes': {
        id: 'animatopia_item_twilight_keeper_of_shattered_echoes',
        name: "Twilight Keeper's Pelts of Shattered Echoes",
        description: "These intricately woven pelts, harvested from the nocturnal Shadow Lynx, pulse with a faint twilight luminescence. Wearing them grants you heightened awareness in dim light and allows you to momentarily hear whispers of past events, though their truth is often fragmented.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌙',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased_nightvision",
            "chance_to_hear_echoes",
            "minor_confusion_resistance",
            "shadow_blend_bonus"
        ],
        vendor: 'tribal_trader',
        shippedBy: 'beast_carrier',
        levelRequirement: 25
    },

    'animatopia_item_mk94_instinctive_pelts_of_the_stone_sentinels': {
        id: 'animatopia_item_mk94_instinctive_pelts_of_the_stone_sentinels',
        name: "Mk.94 Instinctive Pelts of the Stone Sentinels",
        description: "Forged under the gaze of ancient, moss-covered stone golems, these pelts possess an almost instinctive connection to the earth’s rhythms. When worn, you gain a small but steady regeneration rate and resilience against territorial aggression from woodland creatures.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8500,
        icon: '🌿',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "slow_healing",
            "resistance_to_animal_aggression",
            "enhanced_earth_sense",
            "minor_poison_resistance"
        ],
        vendor: 'forest_market',
        shippedBy: 'winged_beast',
        levelRequirement: 40
    },

    'animatopia_item_the_bloodstained_keeper_of_wildsong': {
        id: 'animatopia_item_the_bloodstained_keeper_of_wildsong',
        name: "The Bloodstained Keeper of Wildsong",
        description: "Crafted from the heart-throbbing hide of a corrupted Warhorn, this item radiates an unnerving energy. Wearing it grants you access to primal battle cries and temporarily enhances your strength, but risks attracting the attention of vengeful spirits.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 35000,
        icon: '🩸',
        stock: 1,
        rarity: 'legendary',
        stockType: 'delivery_only',
        effects: [
            "strength_boost",
            "wildsong_charge",
            "chance_of_spirit_aggression",
            "increased_rage"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'shadow_messenger',
        levelRequirement: 50
    },

    'mushroom_kingdom_item_verdant_marked_caps_1': {
        id: 'mushroom_kingdom_item_verdant_marked_caps_1',
        name: "Verdant Marked's Caps - Phase Shift",
        description: "These caps, harvested from the deepest fungal groves of Northeast Midlands, pulse with a verdant energy. Consuming them grants a momentary phase shift, allowing you to briefly pass through solid objects – perfect for escaping sticky situations or snagging hidden valuables.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 789,
        icon: '🌀',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "temporary phase shift (5 seconds)",
            "increased movement speed (10%)",
            "chance to trigger a minor localized gravity distortion"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'mushroom_cart',
        levelRequirement: 15
    },

    'mushroom_kingdom_item_mk_83_fungal_caps_2': {
        id: 'mushroom_kingdom_item_mk_83_fungal_caps_2',
        name: "Mk.83 Fungal Caps - Resonance Amplification",
        description: "Forged during the Coin Wars, these heavily modified fungal caps vibrate with concentrated coin energy. When consumed, they amplify your senses to an almost overwhelming degree – perfect for locating hidden caches or detecting approaching enemies through vibrations.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12500,
        icon: '🔊',
        stock: 7,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "enhanced hearing (30%)",
            "vibration sense (detects movement within 10 meters)",
            "chance to trigger a localized sonic pulse (disorients enemies)"
        ],
        vendor: 'wario_direct',
        shippedBy: 'rocket_ship',
        levelRequirement: 35
    },

    'mushroom_kingdom_item_the_fungal_caps_of_coins_3': {
        id: 'mushroom_kingdom_item_the_fungal_caps_of_coins_3',
        name: "The Fungal Caps of Coins - Celestial Alignment",
        description: "These caps, discovered within the ruins of a forgotten coin shrine, shimmer with an otherworldly luminescence. Upon ingestion, they align your aura with celestial energies, granting brief moments of divine favor – though often accompanied by unpredictable side effects.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 65000,
        icon: '✨',
        stock: 1,
        rarity: 'godly',
        stockType: 'delivery_only',
        effects: [
            "temporary invulnerability (3 seconds)",
            "chance for a beneficial cosmic event to occur (e.g., temporary speed boost, minor luck increase)",
            "aura of celestial radiance (dazzles nearby enemies)",
            "vulnerability to psychic attacks"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'dragon_airship',
        levelRequirement: 50
    },

    'teyvat_item_chronometric_herald_of_storm': {
        id: 'teyvat_item_chronometric_herald_of_storm',
        name: "The Chronometric Herald of Storm’s Brand",
        description: "A pulsating, obsidian orb etched with swirling glyphs reminiscent of the Dragonspine mountains. When activated, it briefly accelerates local time, granting increased movement speed and attack power against foes vulnerable to temporal distortions – a testament to forgotten god-smithing techniques.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '⏳',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased movement speed for 10 seconds",
            "attack power bonus against elementally weak enemies",
            "chance to briefly slow enemy projectiles",
            "minor temporal distortion effect - chance of brief disorientation"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'winged_messenger',
        levelRequirement: 25
    },

    'teyvat_item_abyssal_resonance_of_the_sands': {
        id: 'teyvat_item_abyssal_resonance_of_the_sands',
        name: "Abyssal Resonance of the Sands – The Khthonic Cartouche",
        description: "A small, intricately carved sandstone tablet infused with a faint umbral luminescence. Touching this artifact triggers a localized sandstorm capable of obscuring vision and inflicting damage over time - an echo of ancient desert rituals used to summon storms.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1800,
        icon: '🏜️',
        stock: 57,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "creates a localized sandstorm for 6 seconds",
            "inflicts damage over time to enemies within the storm's radius",
            "reduces visibility for nearby opponents",
            "chance to inflict 'blinding dust' status effect"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'cargo_ship',
        levelRequirement: 18
    },

    'teyvat_item_umbral_branded_vison_of_the_shattered_wind': {
        id: 'teyvat_item_umbral_branded_vison_of_the_shattered_wind',
        name: "Umbral Branded’s Vision of the Shattered Wind - The Aeravani Prism",
        description: "A shimmering, violet prism that seems to capture and distort wind currents. Focusing this vision allows for brief bursts of increased speed and air control – a remnant from a lost nation's mastery of the skies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '💨',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grant temporary flight for a short duration",
            "increased movement speed when airborne",
            "can deflect ranged projectiles with precise wind manipulation",
            "chance to create a small tornado that pulls enemies towards the user"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'sea_dragon_ship',
        levelRequirement: 45
    },

    'leclaire_isle_item_ambered_tart_sworn': {
        id: 'leclaire_isle_item_ambered_tart_sworn',
        name: "Ambered Tart Sworn to the Hearth",
        description: "This tart, glazed with honey-infused amber syrup and baked until its shell crackles with warmth, is said to grant a fleeting moment of blissful contentment. The Dough Folk swear by consuming it before long journeys, believing it strengthens resolve and protects against misfortune. A noble confection, truly.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 287,
        icon: '🍯',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Increases happiness by 10 for 60 seconds",
            "Grants a +2 bonus to Charisma checks",
            "Reduces fear effects by 50%",
            "Restores 2 points of stamina"
        ],
        vendor: 'dough_depot',
        shippedBy: 'swift_delivery_cart',
        levelRequirement: 15
    },

    'leclaire_isle_item_bronzed_biscuit_chronicle': {
        id: 'leclaire_isle_item_bronzed_biscuit_chronicle',
        name: "Bronzed Biscuit Chronicle of the Rising Sun",
        description: "Crafted from a blend of sun-dried almonds and rare orchid honey, this biscuit is meticulously baked in ovens fueled by geothermal vents. Legend claims consuming it reveals glimpses into possible futures - though these visions are often cryptic and unsettling. A curious piece of equipment.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1250,
        icon: '☀️',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Grants a +3 bonus to Intelligence checks related to divination or prediction.",
            "Provides resistance to psychic damage for 30 seconds.",
            "Allows the user to ‘scan’ their surroundings, revealing hidden passages (DC 15 Perception check)",
            "Increases mental fortitude – reduces confusion and fear effects by 25%"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'dragon_scale_carrier',
        levelRequirement: 30
    },

    'leclaire_isle_item_crimson_tart_of_regret': {
        id: 'leclaire_isle_item_crimson_tart_of_regret',
        name: "Crimson Tart of Regret, Sworn to the Bitterest Dreams",
        description: "This dark crimson tart, infused with spiced star anise and baked until its filling shimmers like blood, is rumored to induce vivid memories—often painful ones. Only consumed by those seeking clarity or a confrontation with their past, but be warned - prolonged consumption can lead to melancholy.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8900,
        icon: '🩸',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Causes the user to experience a detailed flashback related to their deepest regret.",
            "Grants advantage on saving throws against fear effects for 1 hour.",
            "Allows communication with spirits of the departed (limited interaction)",
            "Reduces exhaustion by 5 points, but imposes disadvantage on all Wisdom checks for 24 hours"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'phantom_messenger',
        levelRequirement: 50
    },

    'equestria_item_the_gilded_wrights_harmonious_resonator': {
        id: 'equestria_item_the_gilded_wrights_harmonious_resonator',
        name: "The Gilded Wright's Harmonious Resonator",
        description: "This intricately crafted resonator, forged by the legendary crystalwright Silas Stonehoof, vibrates with a subtle harmony of earth and wind. When held aloft, it amplifies magical energies, particularly those related to stability and protection, offering a shimmering golden aura.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '🛡️',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increases magical resistance by 10%",
            "provides a small shield against earth-based attacks",
            "chance to disrupt enemy spells (15%)",
            "boosts healing magic effectiveness by 5%"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Pony Express',
        levelRequirement: 20
    },

    'equestria_item_mk.23_sparkly_crystal_fragments_of_echoing_storms': {
        id: 'equestria_item_mk.23_sparkly_crystal_fragments_of_echoing_storms',
        name: "Mk.23 Sparkly Crystal Fragments of Echoing Storms",
        description: "These jagged fragments, harvested from the heart of a captured thundercloud by Ponyville's most eccentric inventor, Fizzwick Sprocket, pulse with residual electrical energy. Holding them generates a faint crackling sound and a chilling static.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 312,
        icon: '⚡',
        stock: 68,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "restores 25 HP",
            "chance to stun enemy (5%)",
            "increases speed by 10% for 30 seconds",
            "provides minor protection from lightning attacks"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Standard Delivery',
        levelRequirement: 12
    },

    'equestria_item_the_aureate_crest_of_resonance_faction': {
        id: 'equestria_item_the_aureate_crest_of_resonance_faction',
        name: "The Aureate Crest of Resonance Faction",
        description: "This exquisitely crafted crest, imbued with the essence of Celestia's celestial harmony and adorned with shimmering auroc crystals, serves as a symbol of dedication to the Harmony Faction. It radiates a calming aura and amplifies the wearer’s connection to elemental magic.",
        category: SHOP_CATEGORIES.FACTION,
        price: 6500,
        icon: '✨',
        stock: 9,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "grants access to advanced Harmony Faction spells",
            "increases magical potency by 15%",
            "provides bonus to calming or shielding magic spells",
            "reduces stress and anxiety levels (passive)"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Crystal Courier',
        levelRequirement: 45
    },

    'connectopia_item_celestial_miner_shards': {
        id: 'connectopia_item_celestial_miner_shards',
        name: "Celestial Miner's Shard Cluster - Phase 7",
        description: "A collection of shimmering, solidified mineral fragments harvested from the upper reaches of the Connectopia canyons. These shards resonate with a faint celestial hum, boosting your mining efficiency and revealing hidden veins of rare block compounds.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 250,
        icon: '⛏️',
        stock: 47,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "mining speed +15%",
            "chance to find rare blocks +10%",
            "increased block carrying capacity",
            "resistance to cave-ins"
        ],
        vendor: 'block_smith',
        shippedBy: 'Automated Drone Delivery',
        levelRequirement: 15
    },

    'connectopia_item_pioneer_cursed_grapple_hook': {
        id: 'connectopia_item_pioneer_cursed_grapple_hook',
        name: "Pioneer's Cursed Grapple Hook - Timberfang",
        description: "Forged from salvaged timber and infused with a restless spirit, this grapple hook allows you to swiftly traverse perilous cliff faces and reach distant mining sites. Beware, its movements are unpredictable and occasionally snag on phantom settlers.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '⛓️',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grapple range +25m",
            "chance to trigger a small tremor when used",
            "increased climbing speed",
            "resistance to fall damage"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'Courier Bot - Express Route',
        levelRequirement: 30
    },

    'connectopia_item_settler_service_cart_repair': {
        id: 'connectopia_item_settler_service_cart_repair',
        name: "Settler's Service Cart - Stabilized Unit Beta",
        description: "A heavily reinforced service cart designed for transporting resources and supplies across the rough terrain of Connectopia. This unit provides a temporary, automated repair service for other carts and equipment, instantly mending minor damage and malfunctions.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1200,
        icon: '🛠️',
        stock: 9,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "instantly repairs damaged equipment (minor)",
            "increased cart carrying capacity",
            "automatic resource sorting",
            "reduces repair costs by 20%"
        ],
        vendor: 'craft_corner',
        shippedBy: 'Mobile Repair Depot - Scheduled Delivery',
        levelRequirement: 45
    },

    'doughnut_hole_item_crimson_void_binder': {
        id: 'doughnut_hole_item_crimson_void_binder',
        name: "The Crimson Void Binder",
        description: "This viscous, pulsating tear shimmers with an unsettling crimson light, capable of momentarily solidifying the ambient void. When consumed, it grants a fleeting resistance to dimensional instability and allows brief manipulation of nearby negative space.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '🩸',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "temporary void resistance (15 seconds)",
            "minor spatial distortion",
            "chance to phase through small objects",
            "increases gravity manipulation skill by 3 levels for 60 seconds"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Void Courier Drone',
        levelRequirement: 15
    },

    'doughnut_hole_item_wicked_resonance_fragment': {
        id: 'doughnut_hole_item_wicked_resonance_fragment',
        name: "Wicked Resonance Fragment - Mk.77",
        description: "A jagged shard of solidified dissonance, pulsing with a wicked energy. This fragment seems to actively seek out and amplify the most unsettling thoughts and emotions within its bearer, potentially leading to temporary madness or heightened perception.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '😈',
        stock: 17,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "amplifies negative emotions (chance of madness)",
            "increases psychic resistance by 20%",
            "provides a minor boost to intimidation skills",
            "causes auditory hallucinations for 30 seconds"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Shadow Messenger',
        levelRequirement: 35
    },

    'doughnut_hole_item_anomalous_chronal_tears_of_silence': {
        id: 'doughnut_hole_item_anomalous_chronal_tears_of_silence',
        name: "Anomalous Chronal Tears of Silence - Variant Theta",
        description: "These shimmering, obsidian tears seem to absorb all sound and movement within a small radius.  Holding one grants a distorted awareness of the timestream and can briefly freeze localized temporal flow for minor manipulation.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 52000,
        icon: '🤫',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "temporarily silences all sound within a 10-meter radius",
            "creates a small temporal bubble (freeze time for 5 seconds)",
            "chance to glimpse future echoes of events",
            "reduces vulnerability to chronal attacks by 40%"
        ],
        vendor: 'center_seller',
        shippedBy: 'Temporal Delivery Unit – Class VII',
        levelRequirement: 50
    },

    'teyvat_item_electro_mora_of_reverie': {
        id: 'teyvat_item_electro_mora_of_reverie',
        name: "The Electro Mora of Reverie Granted",
        description: "This pulsating mora orb crackles with electro energy, channeling the restless spirits of Mondstadt. Holding it grants temporary heightened awareness and a subtle amplification of your combat prowess against Anemo-aligned foes.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '⚡️',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increases attack damage by 15% for 60 seconds",
            "Grants +5 Electro Resistance",
            "Chance to trigger a 'Reverie' effect, stunning the target briefly"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'Sky Courier',
        levelRequirement: 20
    },

    'teyvat_item_sacred_granted_of_lithos': {
        id: 'teyvat_item_sacred_granted_of_lithos',
        name: "Sacred Granted’s Lithos Resonance",
        description: "A meticulously crafted amulet, forged in the heart of Liyue Harbor during a sacred geomantic ritual. It resonates with the earth's core, bolstering your defenses against physical attacks and providing minor protection from Geo-based magic.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '⛰️',
        stock: 18,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Increases Physical Defense by 10%",
            "Grants +3 Geo Resistance",
            "Reduces damage taken from Earth-based attacks by 5%"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'Sea Serpent Express',
        levelRequirement: 35
    },

    'teyvat_item_mk17_electro_mora_of_flux': {
        id: 'teyvat_item_mk17_electro_mora_of_flux',
        name: "Mk.17 Electro Mora of Flux Granted",
        description: "A complex device designed by unknown artificers, this mora sphere contains a contained miniature storm, capable of manipulating electro currents. It’s said to have been salvaged from a forgotten Inazuman shrine dedicated to the flow of time.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4500,
        icon: '🌀',
        stock: 7,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Can be used to instantly replenish a limited amount of Electro energy (50)",
            "Chance to trigger 'Flux Pulse', dealing moderate electro damage in a small radius",
            "Slows the movement speed of enemies within 3 meters for 2 seconds"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'Phantom Delivery Drone',
        levelRequirement: 48
    },

    'middle_earth_item_sunstone_dancer_of_valar': {
        id: 'middle_earth_item_sunstone_dancer_of_valar',
        name: "Sunstone Dancer of Valar",
        description: "This intricately crafted cloak, woven with threads of solidified sunlight and infused with the echoes of Valar song, grants brief bursts of radiant warmth and a shimmering protective aura. The movement of the fabric seems to mimic a celestial dance, subtly bolstering the wearer’s stamina during arduous journeys through Middle-earth.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '☀️',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases stamina by 15%",
            "provides minor radiant protection (reduces fire damage by 20%)",
            "grants a chance to reflect small projectiles back at enemies"
        ],
        vendor: 'elven_market',
        shippedBy: 'Winged Courier',
        levelRequirement: 15
    },

    'middle_earth_item_orcish_rune_of_grimstone_whisper': {
        id: 'middle_earth_item_orcish_rune_of_grimstone_whisper',
        name: "Orcish Rune of Grimstone Whisper",
        description: "Forged in the depths beneath Mordor, this unsettling curiosity appears to pulse with a faint, guttural resonance.  Holding it allows one to briefly understand the fragmented whispers of ancient orcish battles and forgotten rituals – though deciphering them is a perilous undertaking.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '👹',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "chance to gain temporary madness (low chance)",
            "grants a vague understanding of orcish language (limited duration)",
            "provides resistance to fear effects"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'Grimstone Cart',
        levelRequirement: 28
    },

    'middle_earth_item_mk_86_cloak_of_shire_protection': {
        id: 'middle_earth_item_mk_86_cloak_of_shire_protection',
        name: "Mk.86 Cloak of Shire Protection",
        description: "This oddly practical cloak, a seemingly standard issue piece developed by the Shire's surprisingly advanced engineering corps, provides excellent protection against the elements and minor scrapes.  Its unique design incorporates reinforced stitching and pockets for essential supplies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 600,
        icon: '🧺',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "provides moderate protection against weather effects (rain, snow)",
            "increases carrying capacity by 10%",
            "grants a small chance to find extra food or supplies while traveling"
        ],
        vendor: 'shire_shop',
        shippedBy: 'Cart Pony',
        levelRequirement: 8
    },

    'mushroom_kingdom_item_the_crimson_lord_shroom': {
        id: 'mushroom_kingdom_item_the_crimson_lord_shroom',
        name: "The Crimson Lord’s Shroom",
        description: "This pulsating, scarlet mushroom exudes a faint heat and whispers of ancient warlords. Consuming it grants temporary command over lesser fungal units, bolstering your attack power and intimidating opponents with its imposing presence.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '🍄',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increases attack damage by 15% for 30 seconds",
            "summoning minor mushroom soldiers (lasts 60 seconds)",
            "reduces enemy resistance to fungal attacks by 10%",
            "chance to trigger a 'spore burst' dealing small area damage"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'mushroom_cart',
        levelRequirement: 25
    },

    'mushroom_kingdom_item_the_echoing_gearplate': {
        id: 'mushroom_kingdom_item_the_echoing_gearplate',
        name: "The Echoing Gearplate of Silent Coins",
        description: "Forged from solidified coin-dust and imbued with the memories of countless trades, this gearplate amplifies the value of any acquired currency. It vibrates subtly when near wealth, guiding the user towards lucrative opportunities.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '💰',
        stock: 15,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "increases coin acquisition rate by 20%",
            "provides a chance to double the value of coins earned during combat (10%)",
            "grants passive bonus to trading prices at vendor stalls",
            "detects hidden coin caches within a 10-meter radius"
        ],
        vendor: 'wario_direct',
        shippedBy: 'express_mushroom_delivery',
        levelRequirement: 38
    },

    'mushroom_kingdom_item_the_mega_yielding_primeval_puff': {
        id: 'mushroom_kingdom_item_the_mega_yielding_primeval_puff',
        name: "The Mega Yielding Primeval Puff",
        description: "A colossal, bioluminescent mushroom grown deep within the war-torn territories. This oversized puff releases a potent spore cloud when consumed, rapidly accelerating growth and granting temporary strength and resilience – perfect for weathering a siege or overwhelming an enemy.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3500,
        icon: '🍄💥',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "immediately increases strength and defense by 40% for 60 seconds",
            "rapidly accelerates personal growth rate (temporary size increase)",
            "provides immunity to poison and disease effects",
            "chance to trigger a 'primeval surge', dealing heavy damage in a small radius"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'royal_mushroom_messenger',
        levelRequirement: 50
    },

    'faerun_item_twilight_stalker_helm': {
        id: 'faerun_item_twilight_stalker_helm',
        name: "The Twilight Stalker’s Helm of Drakon's Whisper",
        description: "Forged from the scales of a twilight drake, this helm grants whispers of ancient dragon lore and a chilling resistance to fire. It’s etched with runes depicting forgotten prophecies relating to the return of dragons to Faerûn.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750,
        icon: '🔥',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increased fire resistance",
            "chance to detect dragons",
            "passive whisper of dragon knowledge",
            "small bonus to intimidation checks"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'winged_horse',
        levelRequirement: 15
    },

    'faerun_item_ancient_stalker_amulet': {
        id: 'faerun_item_ancient_stalker_amulet',
        name: "The Ancient Stalker’s Amulet of the Silverwood Guardians",
        description: "Carved from a petrified branch of the Silverwood, this amulet pulses with protective magic and embodies the spirits of ancient guardians. It is said to ward against unnatural decay and offers limited protection in areas of heavy plant growth.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🌿',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "resistance to poison and disease",
            "minor regeneration of wounds",
            "advantage on survival checks in forests",
            "chance to summon a spectral guardian (once per day)"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'giant_owl',
        levelRequirement: 30
    },

    'faerun_item_mk_78_ancient_helm': {
        id: 'faerun_item_mk_78_ancient_helm',
        name: "Mk.78 Ancient Helms of the Forgotten Kings",
        description: "Recovered from the ruins of a long-lost kingdom beneath Candlekeep, this helm exudes an aura of forgotten power and arcane knowledge. It's rumored to have once belonged to a line of kings who commanded the elements.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5800,
        icon: '👑',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increased mana regeneration",
            "chance to cast elemental spells (minor)",
            "resistance to necrotic damage",
            "bonus to spellcasting ability score"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'sea_serpent',
        levelRequirement: 45
    },

    'kivotos_item_twilight_gifted_uniform': {
        id: 'kivotos_item_twilight_gifted_uniform',
        name: "Twilight Gifted's Circlet of Student Resonance",
        description: "This shimmering circlet, woven from twilight-infused academy silks and blessed by the Halos Club’s elder initiates, amplifies your connection to the Academy City’s neural network. It grants heightened perception and allows you to subtly influence the flow of information within a localized radius, perfect for navigating student politics.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '✨',
        stock: 12,
        rarity: 'mythic',
        stockType: 'limited_daily',
        effects: [
            "increased perception",
            "subtle influence on neural networks",
            "resistance to mental manipulation",
            "boosts club reputation"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery',
        levelRequirement: 35
    },

    'kivotos_item_mk91_club_uniform': {
        id: 'kivotos_item_mk91_club_uniform',
        name: "Mk.91 Club Standardized Uniform of Echoing Voices",
        description: "Crafted from reinforced academy fabric and imprinted with complex sonic glyphs, this uniform instantly grants you membership within any student club. The garment subtly amplifies your voice during group discussions, increasing your persuasive power and providing a minor auditory echo effect for dramatic emphasis.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🗣️',
        stock: 45,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "increased persuasion",
            "auditory echo effect",
            "minor club affiliation",
            "reduces nervousness in group settings"
        ],
        vendor: 'club_supply',
        shippedBy: 'Courier',
        levelRequirement: 20
    },

    'kivotos_item_halo_resonance_service': {
        id: 'kivotos_item_halo_resonance_service',
        name: "The Chronal Harmonization Service: Temporal Echo Audit",
        description: "A bespoke service offered by the Academy’s temporal mechanics department, this consultation analyzes your personal chrono-signature for resonance imbalances. The process involves a highly precise, non-invasive scan designed to identify and gently correct minor temporal distortions affecting your cognitive processes – essentially a ‘resetting’ of your personal timeline.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 35000,
        icon: '⏳',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "temporal dissonance correction",
            "enhanced cognitive clarity",
            "reduced susceptibility to temporal anomalies",
            "unlocks hidden memories (potential side effects)"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Temporal Courier',
        levelRequirement: 50
    },

    'internet_item_buffered_keys_of_the_phantom_server': {
        id: 'internet_item_buffered_keys_of_the_phantom_server',
        name: "The Buffered Keys of the Phantom Server",
        description: "These keys, shimmering with residual code, allow brief access to echoes of abandoned servers – a ghostly glimpse into forgotten data streams. Holding them grants momentary clarity amidst the digital chaos, but prolonged exposure risks becoming lost in the static.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 185,
        icon: '📡',
        stock: 42,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Increases data processing speed by 10% for 60 seconds",
            "Grants minor resistance to digital corruption",
            "Provides a faint auditory echo of server activity"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Drone Delivery',
        levelRequirement: 5
    },

    'internet_item_fabled_bound's_key_of_the_lost_archive': {
        id: 'internet_item_fabled_bound's_key_of_the_lost_archive',
        name: "Fabled Bound’s Key of the Lost Archive",
        description: "Forged from solidified regret and compressed bandwidth, this key unlocks access to a hidden archive – a repository of forgotten user profiles and corrupted data. The air around it crackles with a strange nostalgia, pulling on the memories of those nearby.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 875,
        icon: '🔑',
        stock: 15,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Reveals hidden data fragments within a 10-meter radius",
            "Provides a temporary boost to memory recall (increased chance of finding clues)",
            "Emits a low, unsettling hum that can disorient opponents",
            "Chance to summon a spectral 'Data Echo' - a fleeting image of a past user."
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Cyber Courier',
        levelRequirement: 22
    },

    'internet_item_mk.86_buffered_resonance_key_of_the_algorithmic_storm': {
        id: 'internet_item_mk.86_buffered_resonance_key_of_the_algorithmic_storm',
        name: "Mk.86 Buffered Resonance Key of the Algorithmic Storm",
        description: "This intricately carved key, pulsing with contained energy, allows manipulation of localized data streams – a miniature algorithmic storm within your grasp. Utilizing it incorrectly can cause catastrophic system failures.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3200,
        icon: '⚡',
        stock: 8,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Creates a localized data disruption field (damages enemy electronic devices)",
            "Allows the user to reroute data packets for short distances",
            "Provides increased resistance to hacking attempts",
            "Can temporarily overload an enemy's sensor array, stunning them."
        ],
        vendor: 'cyber_market',
        shippedBy: 'Automated Delivery Bot',
        levelRequirement: 40
    },

    'equestria_item_luminous_shaper_horseshoes': {
        id: 'equestria_item_luminous_shaper_horseshoes',
        name: "Luminous Shaper's Horseshoes – Mk.81",
        description: "These exquisitely crafted horseshoes shimmer with a gentle, luminous energy, channeling the very essence of the elements. When worn by a pony, they subtly enhance natural movement and allow for brief manipulation of kinetic force – perfect for navigating tricky terrain or delivering a surprising kick.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '✨',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased movement speed (+15%)",
            "kinetic force manipulation (short bursts)",
            "minor elemental resistance",
            "enhanced balance"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Pony Express',
        levelRequirement: 20
    },

    'equestria_item_kind_horseshoes_of_resonance': {
        id: 'equestria_item_kind_horseshoes_of_resonance',
        name: "Kind Horseshoes of Resonance – The Silver Quill",
        description: "Forged from polished silver and imbued with the spirit of compassion, these horseshoes resonate deeply with harmonious energy. Wearing them fosters a sense of calm and facilitates empathetic understanding between ponies, potentially diffusing tense situations.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '💖',
        stock: 17,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "increased empathy (+20%)",
            "reduced combat aggression",
            "minor healing effect (restores a small amount of HP)",
            "harmonious aura – pacifies nearby enemies"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Cloud Courier Services',
        levelRequirement: 15
    },

    'equestria_item_aureate_harmony_shield_of_echoes': {
        id: 'equestria_item_aureate_harmony_shield_of_echoes',
        name: "Aureate Harmony Shield of Echoes – The Chronos Guard",
        description: "This legendary shield, forged in the heart of a temporal rift, pulses with the concentrated power of harmonious echoes. It protects its wielder not just from physical harm, but also from distortions in time and space, offering glimpses into potential futures.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 75000,
        icon: '🛡️',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "significant damage absorption (+60%)",
            "temporal distortion resistance",
            "chance to rewind enemy attacks",
            "passive ability: 'Echoes of Harmony' – occasionally grants a brief shield regeneration"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Temporal Logistics Corp.',
        levelRequirement: 50
    },

    'animatopia_item_crimson_echo_talon': {
        id: 'animatopia_item_crimson_echo_talon',
        name: "The Crimson Echo Talon of the Elder Burrow",
        description: "This talon, forged from solidified primal screams and river clay, vibrates with the faintest whisper of long-lost tribal songs. When wielded, it grants momentary clarity during chaotic situations, revealing hidden pathways within the deepest forests.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🐾',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Grants +3 to Perception for 60 seconds",
            "Reveals hidden paths in dense forests for 15 seconds",
            "Chance to trigger a brief, calming illusion of ancestral voices"
        ],
        vendor: 'forest_market',
        shippedBy: 'Winged Courier',
        levelRequirement: 15
    },

    'animatopia_item_starfall_weaver_reaver': {
        id: 'animatopia_item_starfall_weaver_reaver',
        name: "Starfall Weaver’s Reaver of the Lunar Grove",
        description: "Crafted from solidified moonlight and woven with celestial fibers, this reaver hums with an otherworldly energy. It allows the wielder to manipulate shadows during nocturnal rituals, bolstering their connection to the spirits.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '✨',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increases Shadow Magic damage by 25%",
            "Allows the user to cast 'Veil of Shadows' once per day.",
            "Grants bonus movement speed in dark areas."
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'Dire Rat Delivery',
        levelRequirement: 35
    },

    'animatopia_item_serpent_song_service_token': {
        id: 'animatopia_item_serpent_song_service_token',
        name: "The Serpent Song Service Token - 'Whisper of the Coil'",
        description: "A polished obsidian token inlaid with shimmering scales, this item grants access to a rare service offered by the enigmatic Coil Singers. These skilled artisans can temporarily imbue weaponry with potent sonic vibrations, disrupting enemy defenses.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 25000,
        icon: '🐍',
        stock: 1,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Allows user to commission a weapon enhancement (Sonic Distortion) - deals bonus damage against armored targets.",
            "Enhancement lasts for 30 minutes.",
            "The Coil Singers provide personalized combat advice for the next 24 hours."
        ],
        vendor: 'tribal_trader',
        shippedBy: 'Giant Beetle Transport',
        levelRequirement: 45
    },

    'doughnut_hole_item_gilded_wrights_null_of_shimmering_descent': {
        id: 'doughnut_hole_item_gilded_wrights_null_of_shimmering_descent',
        name: "Gilded Wright's Null of Shimmering Descent",
        description: "This pulsing null, crafted from solidified void-gravity, emits a faint shimmer as if constantly falling downwards. Holding it grants brief moments of reduced gravitational influence – perfect for precarious jumps or escaping crushing pressure, but beware its unsettling resonance.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '🌌',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Reduced Gravity (5%) for 30 seconds",
            "Increased Jump Height (10%) for 30 seconds",
            "Minor Void Resonance – chance of temporary disorientation"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Void Conveyor Belt',
        levelRequirement: 25
    },

    'doughnut_hole_item_mk_42_void_nulls_of_the_fractured_echo': {
        id: 'doughnut_hole_item_mk_42_void_nulls_of_the_fractured_echo',
        name: "Mk.42 Void Nulls of the Fractured Echo",
        description: "These obsidian-like nulls, recovered from the edges of a collapsed gravity pocket, subtly repeat fragments of screams – whispers from realities devoured by the void.  Each touch grants fleeting insight into impossible geometries and an unnerving sense of being watched.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1850,
        icon: '👂',
        stock: 47,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Minor Psychic Echo – chance of receiving a cryptic vision",
            "Increased Perception (10%) for 60 seconds",
            "Void Resonance - brief feelings of unease"
        ],
        vendor: 'center_seller',
        shippedBy: 'Dimensional Courier',
        levelRequirement: 18
    },

    'doughnut_hole_item_void_services_of_the_gravitic_resonance': {
        id: 'doughnut_hole_item_void_services_of_the_gravitic_resonance',
        name: "Void Services of the Gravitic Resonance",
        description: "A shimmering, self-contained chamber filled with swirling void energy. This service allows for temporary manipulation of local gravitational fields – useful for creating instant platforms or disrupting enemy attacks, but prolonged use risks attracting unwanted attention from deeper within The Fated Place.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 42000,
        icon: '🌀',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Localized Gravity Manipulation (Up to 15% Reduction/Increase) for 60 seconds",
            "Creates Temporary Gravitic Platform",
            "Risk: Attracts Void Entities – chance of summoning a minor void wraith"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Void Portals',
        levelRequirement: 45
    },

    'almost_edge_item_spectral_drift_branded': {
        id: 'almost_edge_item_spectral_drift_branded',
        name: "The Spectral Drift Branded by Chronos's Lament",
        description: "A shimmering, viscous essence harvested from the moments lost just beyond the edge. It grants a fleeting glimpse into fractured timelines, inducing disorientation and a chilling awareness of the void’s hunger. Prolonged exposure can unravel the user’s sense of self, replacing it with echoes of forgotten realities.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '🌌',
        stock: 7,
        rarity: 'mythic',
        stockType: 'limited_daily',
        effects: [
            "Temporarily increases perception by 50%",
            "Causes mild disorientation for 3 turns",
            "Chance to inflict ‘Fractured Memory’ (reduces target's attack by 20% for 1 turn)",
            "Grants resistance to fear effects."
        ],
        vendor: 'void_merchant',
        shippedBy: 'Dimensional Courier Drone',
        levelRequirement: 35
    },

    'almost_edge_item_liminal_resonance_curiosity': {
        id: 'almost_edge_item_liminal_resonance_curiosity',
        name: "The Liminal Resonance of the Unwritten Threshold",
        description: "A perfectly smooth, obsidian stone etched with swirling patterns that seem to shift and rearrange themselves before your eyes. Holding this curiosity evokes a profound sense of unease and disorientation, briefly blurring the boundaries between realities. It’s rumored to be formed from the solidified anxieties of those who have gazed too long into the abyss.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '🚪',
        stock: 23,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Reduces target's attack by 10% for 2 turns",
            "Increases user’s evasion chance by 15%",
            "Causes a brief hallucination (random effect – sleep, confusion, fear)",
            "Provides +3 to Insight checks."
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Phase Shift Package',
        levelRequirement: 20
    }
};
