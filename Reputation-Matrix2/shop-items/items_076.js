// Shop items file 76
// Generated: 2026-03-22 19:25:25
// Items: 100

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_076 = {
    'doughnut_hole_item_chromatic_voidsinger': {
        id: 'doughnut_hole_item_chromatic_voidsinger',
        name: "The Chromatic VoidSinger's Null",
        description: "A pulsating, obsidian null that resonates with the echoes of forgotten melodies. When consumed, it briefly grants the user a spectral awareness, revealing pathways through areas saturated with void energy - but prolonged exposure induces unsettling harmonic distortions.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '🎶',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "temporary void awareness",
            "increased movement speed in void zones",
            "minor auditory hallucinations",
            "chance to generate a 'phantom chord'"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dimensional Ripple',
        levelRequirement: 15
    },

    'doughnut_hole_item_mk_37_inverted_resonance': {
        id: 'doughnut_hole_item_mk_37_inverted_resonance',
        name: "Mk.37 Inverted Resonance Null",
        description: "This unsettling null is crafted from solidified anti-matter, faintly radiating a cold, inverted hum.  Holding it for too long causes your personal reality to subtly shift, making navigation incredibly disorienting and attracting the attention of the more… volatile entities within the center.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌀',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "reduced damage taken from void effects",
            "occasional disorientation (chance to misplace items)",
            "minor resistance to malevolent energy",
            "increases critical hit chance by 10%"
        ],
        vendor: 'center_seller',
        shippedBy: 'Temporal Flux',
        levelRequirement: 35
    },

    'doughnut_hole_item_the_abyssal_echo_singer': {
        id: 'doughnut_hole_item_the_abyssal_echo_singer',
        name: "The Abyssal Echo Singer’s Fragment",
        description: "A shard of solidified silence, imbued with the mournful cries of long-dead void entities. This fragment resonates with an unsettling energy, capable of briefly silencing surrounding sounds and drawing out echoes from nearby voids - but prolonged contact risks becoming trapped within its sorrowful song.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4500,
        icon: '🔇',
        stock: 7,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "silence surrounding sounds for a short duration",
            "reveals hidden void echoes (provides clues)",
            "chance to summon a minor void wisp",
            "temporary immunity to fear effects"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Quantum Entanglement',
        levelRequirement: 50
    },

    'equestria_item_gilded_wielder_of_the_silver_stream': {
        id: 'equestria_item_gilded_wielder_of_the_silver_stream',
        name: "Gilded Wielder's Gems of the Silver Stream",
        description: "These multifaceted gems pulse with a faint, silvery light, said to amplify a pony’s connection to the magical currents flowing through Equestria. When worn as a pendant, they grant increased mana regeneration and subtle enhancements to illusion spells. The gems seem to whisper secrets of forgotten melodies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '✨',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "mana regeneration +25%",
            "illusion spell damage +10%",
            "chance to trigger shimmering effect (visual)",
            "increased magical resistance"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Post Carrier',
        levelRequirement: 25
    },

    'equestria_item_mk_83_sparkly_gems_of_the_harmony_chronicle': {
        id: 'equestria_item_mk_83_sparkly_gems_of_the_harmony_chronicle',
        name: "Mk.83 Sparkly Gems of the Harmony Chronicle",
        description: "Recovered from the ruins of an ancient stud, these gems exhibit a chaotic yet mesmerizing shimmer, each facet reflecting fragments of forgotten songs and events. Holding multiple gems simultaneously allows a pony to briefly glimpse echoes from Equestria’s past – potentially revealing hidden pathways or long-lost secrets. Handle with care; prolonged exposure can induce disorientation.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '💎',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance to trigger vision of past events (visual)",
            "temporary bonus to knowledge checks",
            "increased perception",
            "minor chance for a useful piece of lore"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Pegasus Courier',
        levelRequirement: 40
    },

    'equestria_item_the_chronometric_shard_of_princess_celestia': {
        id: 'equestria_item_the_chronometric_shard_of_princess_celestia',
        name: "The Chronometric Shard of Princess Celestia’s Temporal Embrace",
        description: "This obsidian shard resonates with the very fabric of time, subtly slowing down the flow of moments around its bearer. The shard radiates a calming aura and is believed to have been used by Princess Celestia during critical moments of defense against threats to Equestria's stability. It feels strangely cool to the touch.",
        category: SHOP_CATEGORIES.FACTION,
        price: 42000,
        icon: '⏳',
        stock: 5,
        rarity: 'legendary',
        stockType: 'delivery_only',
        effects: [
            "chance to slow down time for a brief period (small radius)",
            "increased accuracy with ranged weapons",
            "resistance to temporal magic",
            "passive regeneration of HP"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Royal Guard Transport',
        levelRequirement: 50
    },

    'grand_country_item_chronometric_layer_finder': {
        id: 'grand_country_item_chronometric_layer_finder',
        name: "The Chronometric Quartz Layer Finder",
        description: "This intricately crafted device, built from tiered quartz and spiraling gears, vibrates with the echoes of passing moments. Holding it allows you to briefly glimpse fractured timelines layered upon your current reality – a chaotic but potentially insightful experience.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '⏳',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Grants a momentary vision of past events related to the immediate area.",
            "Increases perception by 10% for 60 seconds.",
            "Chance to trigger a minor temporal distortion (roll: 1-10)",
            "Causes slight disorientation if used excessively."
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'dimensional_packet',
        levelRequirement: 25
    },

    'grand_country_item_abyssal_gear_stacker': {
        id: 'grand_country_item_abyssal_gear_stacker',
        name: "The Abyssal Gear Stacker Mk.II",
        description: "A formidable piece of engineering constructed from blackened, tiered gears harvested from the deepest strata of the Doughnut's core. This device allows for the precise stacking and realignment of mechanical components, a skill vital to any serious inventor or tinkerer.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 850,
        icon: '⚙️',
        stock: 18,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Increases item repair speed by 25%.",
            "Allows for the quick assembly of simple mechanical devices.",
            "Reduces the time required to craft basic gadgets by 10%",
            "Can be used to temporarily stabilize unstable machinery."
        ],
        vendor: 'side_seller',
        shippedBy: 'standard_delivery',
        levelRequirement: 35
    },

    'grand_country_item_forbidden_tier_resonator': {
        id: 'grand_country_item_forbidden_tier_resonator',
        name: "The Forbidden Tier Resonator - Variant Sigma",
        description: "A pulsating, tiered device forged from unstable, obsidian-like material. This forbidden artifact generates chaotic energy fields that disrupt the flow of time and space around its user – a dangerous tool for those who seek to control reality itself.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 23000,
        icon: '💥',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Causes random temporal distortions (chance to age or de-age the user).",
            "Creates a localized field of instability, attracting unwanted attention.",
            "Grants temporary immunity to magical effects.",
            "Risk of immediate disintegration if used improperly."
        ],
        vendor: 'layer_market',
        shippedBy: 'encrypted_drone',
        levelRequirement: 50
    },

    'warhammer_item_crimson-echoes-of-despair': {
        id: 'warhammer_item_crimson-echoes-of-despair',
        name: "Crimson Echoes of Despair",
        description: "This warhammer pulses with the lingering screams of fallen legionaries, amplifying your rage and inflicting grievous wounds upon your foes. Its head is crafted from solidified regret, radiating a chilling aura that weakens morale – perfect for crushing rebellious spirits.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🔥',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increases rage by 30%",
            "chance to inflict fear on target",
            "deals bonus damage against armored targets",
            "reduces enemy defense by 15%"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'express_drone',
        levelRequirement: 30
    },

    'warhammer_item_specter-strider-of-the-void': {
        id: 'warhammer_item_specter-strider-of-the-void',
        name: "Specter Strider of the Void",
        description: "A spectral warhammer forged within a collapsed rift, imbued with the essence of forgotten entities. Holding it evokes a chilling whisper of oblivion; its attacks manifest as shimmering voids, disrupting enemy formations and draining their life force – a truly unsettling weapon.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '👻',
        stock: 5,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "chance to teleport short distances during attack",
            "deals extra damage to ethereal enemies",
            "reduces enemy regeneration by 50%",
            "creates a spectral shroud that obscures vision around the wielder"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'night_carrier',
        levelRequirement: 45
    },

    'warhammer_item_chronarium-shard-of-fate': {
        id: 'warhammer_item_chronarium-shard-of-fate',
        name: "Chronarium Shard of Fate",
        description: "A mythic warhammer shattered from the heart of a time anomaly, resonating with the ebb and flow of causality. When wielded, it subtly alters probabilities, granting the wielder immense tactical advantage – though manipulating fate carries a terrible cost.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 60000,
        icon: '⏳',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "increases critical hit chance by 75%",
            "chance to rewind time slightly after a successful attack",
            "temporarily nullifies enemy buffs and debuffs",
            "provides minor protection against temporal paradoxes (reduces damage from reality-bending attacks)"
        ],
        vendor: 'fate_forge',
        shippedBy: 'temporal_relay',
        levelRequirement: 50
    },

    'internet_item_chromatic_meme_sworn': {
        id: 'internet_item_chromatic_meme_sworn',
        name: "The Chromatic Meme Sworn",
        description: "A pulsating file containing fractured realities, manifesting as shifting color palettes and distorted meme archetypes. Upon activation, it briefly alters the perception of those nearby, causing them to experience a chaotic cascade of viral sensations - a truly unsettling digital sacrament.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '🌈',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Causes temporary confusion (30 seconds)",
            "Increases meme recognition by 15%",
            "Briefly alters color perception",
            "Chance to trigger a random, harmless digital glitch"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Drone Delivery',
        levelRequirement: 12
    },

    'internet_item_ancient_data_cache_7982': {
        id: 'internet_item_ancient_data_cache_7982',
        name: "Ancient Data Cache - Seed 7982",
        description: "A heavily buffered, almost impossibly ancient file recovered from a forgotten subnet. The data within whispers of the original internet’s birth – fragmented thoughts and obsolete protocols preserved within a shimmering obsidian shell.  Handling this cache can induce vivid, unsettling digital hallucinations.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '💾',
        stock: 9,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Grants +5 to data processing speed for 60 seconds",
            "Chance of gaining a temporary 'buffer' status (increased resistance to digital attacks)",
            "Causes unsettling visual and auditory hallucinations, potentially leading to disorientation.",
            "Small chance to trigger a corrupted memory fragment."
        ],
        vendor: 'data_dealer',
        shippedBy: 'Courier Bot',
        levelRequirement: 35
    },

    'internet_item_void_echo_prime': {
        id: 'internet_item_void_echo_prime',
        name: "Void Echo Prime - Designation: Zero-Seven",
        description: "A forbidden artifact – a solidified echo of digital oblivion. This item is rumored to contain the residual consciousness of deleted users, trapped within a pocket dimension of corrupted data.  Activation carries significant risk, potentially attracting hostile digital entities and unleashing a wave of chaotic entropy.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 35000,
        icon: '💀',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Chance to summon a minor 'Void Wraith' (hostile entity)",
            "Causes significant data corruption within a 5-meter radius.",
            "Provides temporary immunity to hacking attempts, but at the cost of mental stability.",
            "Risk of permanent personality alteration."
        ],
        vendor: 'cyber_market',
        shippedBy: 'Secure Quantum Transmission',
        levelRequirement: 50
    },

    'faerun_item_the_ghostspeaker_ward': {
        id: 'faerun_item_the_ghostspeaker_ward',
        name: "The Ghostspeaker’s Ward",
        description: "These spectral gloves, etched with runes of forgotten spirits, allow the wearer to briefly commune with echoes of past battles. They offer a chilling whisper of tactical insight – but at a terrible cost.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '👻',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Grants +2 to Wisdom (Perception) checks for 6 rounds.",
            "Allows the wearer to faintly hear whispers of tactical advice once per encounter.",
            "Risk of temporary madness on a roll of 15 or higher."
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'magical_delivery',
        levelRequirement: 20
    },

    'faerun_item_the_abyssal_echo_shard': {
        id: 'faerun_item_the_abyssal_echo_shard',
        name: "The Abyssal Echo Shard - Fragment 7",
        description: "This obsidian shard pulses with the lingering residue of an unholy pact made in the deepest reaches of the Nine Hells.  Holding it evokes fragmented visions of demonic rituals and untold suffering.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6500,
        icon: '😈',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Causes nightmares upon holding for more than 1 minute.",
            "Grants temporary advantage on saving throws against fear effects (3 rounds).",
            "Has a 20% chance to inflict disadvantage on Wisdom rolls."
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'dimensional_portal',
        levelRequirement: 35
    },

    'faerun_item_the_seraphim_ward_of_protection': {
        id: 'faerun_item_the_seraphim_ward_of_protection',
        name: "The Seraphim Ward of Protection - Mk.42",
        description: "Forged in a forgotten temple dedicated to a benevolent seraph, this heavy breastplate radiates an aura of divine grace and offers potent defenses against dark magic.  It is said to be blessed by a celestial being itself.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '✨',
        stock: 3,
        rarity: 'godly',
        stockType: 'delivery_only',
        effects: [
            "Grants +5 AC and resistance to necrotic damage.",
            "Provides immunity to fear effects.",
            "Automatically dispels minor curses and enchantments."
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'winged_beast',
        levelRequirement: 45
    },

    'internet_item_kaleidoscopic_borns_keys': {
        id: 'internet_item_kaleidoscopic_borns_keys',
        name: "Kaleidoscopic Born's Keys – Nexus Drift",
        description: "These shimmering keys, etched with fractal patterns of lost data streams, allow the user to momentarily phase through congested network pathways. Each key pulsates with a kaleidoscopic light, reflecting the chaotic beauty of the East of Midlands’ digital core. Beware; prolonged use can induce fragmented memories and phantom connections.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '✨',
        stock: 37,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Increased network speed by 50%",
            "Chance to phase through congested networks (20%)",
            "Temporary data echo effect – brief glimpses of past transmissions",
            "Minor stat boost (agility +3)"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Drone Delivery',
        levelRequirement: 25
    },

    'internet_item_mk_55_viral_keys': {
        id: 'internet_item_mk_55_viral_keys',
        name: "Mk.55 Viral Keys – Cascade Ignition",
        description: "Forged within the core of a viral propagation node, these keys emit a constant stream of digital static, capable of triggering chain reactions in interconnected systems. Their metallic surfaces are covered in micro-circuitry that constantly shifts and rearranges itself like a swarm of bees.  Activation results in a localized data bloom – explosive information spread.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '💥',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "Deals 30 damage on impact (to data structures)",
            "Chance to create a viral cascade – spreads to adjacent nodes",
            "Temporarily boosts processing speed by 15%",
            "Minor chance of attracting unwanted attention from the Data Sentinels"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Automated Packet Delivery',
        levelRequirement: 18
    },

    'internet_item_the_lost_fragment_key': {
        id: 'internet_item_the_lost_fragment_key',
        name: "The Lost Fragment Key – Chronos’ Echo",
        description: "Recovered from the remnants of a shattered temporal server, this key vibrates with residual echoes of forgotten timelines. Holding it evokes flashes of paradoxical events and alternate realities - brief moments outside of the current digital flow. Its intricate design seems to shift and distort in the periphery, as if resisting observation.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6700,
        icon: '⏳',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Allows brief glimpses into alternate timelines (limited duration)",
            "Chance to generate a temporal anomaly – minor distortions in reality",
            "Resistance to data corruption effects (+25%)",
            "Grants the user 'Temporal Awareness' - passive bonus to perception checks"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Quantum Courier',
        levelRequirement: 40
    },

    'faerun_item_luminous_shadowborn_cloak_chosen': {
        id: 'faerun_item_luminous_shadowborn_cloak_chosen',
        name: "The Luminous Shadowborn Cloak Chosen",
        description: "This cloak, woven from the captured essence of a Shade Serpent’s scales, pulses with a faint, ethereal light. It grants the wearer heightened stealth in dim conditions and offers minor protection against necrotic energies, favored by those touched by the Plane of Shadows.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌑',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased_stealth_in_dim_light",
            "resistance_to_necrotic_damage",
            "shadowstep (once per day)"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'winged_sprite',
        levelRequirement: 25
    },

    'faerun_item_mk_47_chronal_observatory_curiosity': {
        id: 'faerun_item_mk_47_chronal_observatory_curiosity',
        name: "Mk.47 Chronal Observatory Curiosity",
        description: "A miniature, intricately crafted clockwork observatory – salvaged from a long-lost Elven chronomancer’s workshop. It doesn't manipulate time directly, but it allows the user to briefly glimpse possible future outcomes of a single action, offering strategic insight.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '⏱️',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "provides a fleeting vision of a single action’s potential outcomes (randomized)",
            "increases intuition by 5%",
            "slightly alters the perception of time around the user"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'giant_snail',
        levelRequirement: 40
    },

    'faerun_item_divine_aegis_of_the_verdant_king': {
        id: 'faerun_item_divine_aegis_of_the_verdant_king',
        name: "Divine Aegis of the Verdant King",
        description: "This emerald-infused shield, blessed by the spirit of Silvanus, radiates a soothing aura and offers powerful protection against unnatural forces. It is rumored to have been crafted in the very heart of an ancient forest.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 21000,
        icon: '🌿',
        stock: 5,
        rarity: 'legendary',
        stockType: 'back_order',
        effects: [
            "high resistance to poison and disease",
            "deals bonus radiant damage against undead creatures",
            "regenerates health slowly over time"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'centaur_messenger',
        levelRequirement: 50
    },

    'internet_item_xenolithic_echoes_of_the_lost_server': {
        id: 'internet_item_xenolithic_echoes_of_the_lost_server',
        name: "Xenolithic Echoes of the Lost Server",
        description: "These shimmering, fossilized data fragments pulse with the residual energy of forgotten servers. Holding one allows you to briefly perceive fragmented memories from across the network’s vast history, a chaotic torrent of deleted files and panicked system alerts.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7500,
        icon: '💾',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Grants temporary insight into network vulnerabilities.",
            "Reveals hidden data trails (short duration).",
            "Increases processing speed by 5% for 60 seconds.",
            "Chance to trigger a random, chaotic data surge."
        ],
        vendor: 'data_dealer',
        shippedBy: 'Drone Delivery',
        levelRequirement: 25
    },

    'internet_item_digital_cursed_prime_fragments': {
        id: 'internet_item_digital_cursed_prime_fragments',
        name: "Digital Cursed Prime Fragments",
        description: "These fragmented shards of corrupted prime directives, harvested from a system overrun by self-replicating algorithms, radiate with a palpable sense of dread.  Each fragment whispers promises of ultimate processing power, but at the cost of slowly consuming your own logic and sanity.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 18000,
        icon: '⚠️',
        stock: 5,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "Grants a massive boost to processing speed for 30 seconds (high risk).",
            "Adds a chance of generating corrupted data streams that damage nearby devices.",
            "Increases intelligence by 15% but slowly drains willpower.",
            "Potential side effect: Gradual loss of memory and personality."
        ],
        vendor: 'cyber_market',
        shippedBy: 'Secure Packet Transmission',
        levelRequirement: 40
    },

    'internet_item_mk.74_data_resonance_tokens': {
        id: 'internet_item_mk.74_data_resonance_tokens',
        name: "Mk.74 Data Resonance Tokens",
        description: "These meticulously crafted tokens vibrate with the echoes of countless digital interactions. They allow brief, targeted manipulation of network traffic – a subtle nudge here, a brief blockage there, but beware; prolonged use can attract unwanted attention from system administrators and security protocols.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '📡',
        stock: 33,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Allows targeted manipulation of network packets (low level).",
            "Provides a small chance to bypass basic firewall protections.",
            "Increases data transfer speed by 10% for 30 seconds.",
            "Attracts the attention of automated security programs."
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Standard Postal Delivery',
        levelRequirement: 18
    },

    'grand_country_item_chronometric_gravity_anchor': {
        id: 'grand_country_item_chronometric_gravity_anchor',
        name: "The Chronometric Gravity Anchor - Phase Seven",
        description: "This obsidian sphere pulses with a disconcerting temporal rhythm, subtly shifting the surrounding gravity to create momentary pockets of inverted descent. Holding it allows for brief, controlled leaps through the chaotic layers, though prolonged use can induce disorientation and fractured memories.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '⏳',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increases jump height by 50%",
            "Grants temporary resistance to gravity shifts",
            "Chance to trigger a brief temporal echo (teleport)",
            "Slows down time perception for 1 second"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Gravitational Courier Drone',
        levelRequirement: 25
    },

    'grand_country_item_haunted_piercer_of_stasis': {
        id: 'grand_country_item_haunted_piercer_of_stasis',
        name: "The Haunted Piercer of Stasis - Fragment XIII",
        description: "Forged from solidified screams and haunted twilight, this jagged spike emits a chilling aura that briefly suspends movement.  Its application causes targets to become trapped in moments of frozen stillness—a terrifying spectacle for the casual observer.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🔪',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "Applies 'Stasis' effect for 3 seconds (chance to freeze enemy)",
            "Deals minor piercing damage",
            "Chance to inflict ‘Fear’ status on target",
            "Reduces target movement speed by 25%"
        ],
        vendor: 'side_seller',
        shippedBy: 'Shadow Delivery Service',
        levelRequirement: 18
    },

    'grand_country_item_mk.81_vertical_weights_of_resonance': {
        id: 'grand_country_item_mk.81_vertical_weights_of_resonance',
        name: "Mk.81 Vertical Weights of Resonance - Core Unit Delta",
        description: "A meticulously crafted series of interlocking, vertically oriented weights—each vibrating with a unique harmonic frequency.  Arranging these around your body generates a field that amplifies sound and distorts perception, creating an unsettling aura of disharmony.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '🔊',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Amplifies sound effects by 100%",
            "Causes auditory hallucinations in nearby enemies",
            "Increases critical hit chance by 5%",
            "Generates a small area of distortion, slowing enemy movement slightly"
        ],
        vendor: 'layer_market',
        shippedBy: 'Dimensional Parcel Service',
        levelRequirement: 40
    },

    'grand_country_item_verdant_helix_finder': {
        id: 'grand_country_item_verdant_helix_finder',
        name: "Verdant Helix Finder",
        description: "This spiraling hook, crafted from petrified moss and polished obsidian, allows the wielder to momentarily manipulate gravitational currents, enabling rapid ascents along vertical surfaces. The helix pulses with a faint, verdant light, absorbing ambient energy for brief bursts of enhanced grip.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 120,
        icon: '🌿',
        stock: 45,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Increased climbing speed (5 seconds)",
            "Enhanced grip strength (10%)",
            "Minor gravitational distortion"
        ],
        vendor: 'side_seller',
        shippedBy: 'Rolling Dough Drone',
        levelRequirement: 15
    },

    'grand_country_item_mk_82_gravitic_hook': {
        id: 'grand_country_item_mk_82_gravitic_hook',
        name: "Mk.82 Gravitic Hook - The Anchor's Embrace",
        description: "Forged from hardened sugar crystals and reinforced with tiny, rotating gears, this hook generates a localized gravity field, allowing the user to ‘anchor’ themselves against even the most precarious surfaces. Its complex internal mechanism hums with restrained power.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 850,
        icon: '⚙️',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Allows player to attach to walls/ceilings for 30 seconds.",
            "Reduces fall damage by 50%",
            "Creates a small gravitational pull (attracts nearby items)"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Sticky Roller Courier',
        levelRequirement: 30
    },

    'grand_country_item_chronometric_hook_of_reversal': {
        id: 'grand_country_item_chronometric_hook_of_reversal',
        name: "Chronometric Hook of Reversal - The Temporal Knot",
        description: "This curious hook is made of intertwined crystallized time-fragments. When deployed, it briefly reverses the flow of gravity around the user’s immediate area, allowing them to ascend with unnatural speed before returning to normal. Handle with extreme caution – prolonged use can cause temporal disorientation.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4800,
        icon: '⏳',
        stock: 3,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Rapid vertical ascent (15 seconds)",
            "Chance of brief temporal stuttering",
            "Minor chance of attracting time anomalies",
            "Increased risk of disorientation"
        ],
        vendor: 'layer_market',
        shippedBy: 'Sugar Shock Delivery System',
        levelRequirement: 45
    },

    'middle_earth_item_stoneheart_finder': {
        id: 'middle_earth_item_stoneheart_finder',
        name: "The Stoneheart Finder's Mithril Shard",
        description: "This jagged shard pulses with a faint, rhythmic thrum - the echo of a dwarven king’s lost heart. Holding it grants a temporary resistance to fear and provides a subtle advantage in navigating treacherous underground tunnels.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '⛰️',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased fear resistance",
            "advantage on navigation checks in underground locations",
            "minor healing over time (1 HP/tick)"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'dragon_delivery',
        levelRequirement: 25
    },

    'middle_earth_item_shadowbloom_service': {
        id: 'middle_earth_item_shadowbloom_service',
        name: "The Shadowbloom's Silent Service",
        description: "A meticulously crafted vial containing concentrated essence extracted from a rare, nocturnal flower found only in the deepest shadows of Mordor. Upon consumption, you gain temporary invisibility and silence for 60 seconds – ideal for reconnaissance or escaping unwanted attention.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 8500,
        icon: '👻',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "temporary invisibility (60 seconds)",
            "silenced movement",
            "increased stealth skill modifier"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_express',
        levelRequirement: 40
    },

    'middle_earth_item_ornate_rune_finder': {
        id: 'middle_earth_item_ornate_rune_finder',
        name: "The Ornate Rune Finder Mk.II - Pristine",
        description: "This intricately carved amulet contains a single, pulsating rune of forgotten power – rumored to have been etched by ancient Elven mages.  When activated, it briefly reveals hidden pathways and unlocks long-lost chambers.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3800,
        icon: '✨',
        stock: 27,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "reveals hidden pathways (short duration)",
            "unlocks long-lost chambers",
            "minor magic resistance"
        ],
        vendor: 'elven_market',
        shippedBy: 'hawk_delivery',
        levelRequirement: 15
    },

    'kivotos_item_jade_render_certificate_of_luminescence': {
        id: 'kivotos_item_jade_render_certificate_of_luminescence',
        name: "Jade Render's Certificates of Luminescence",
        description: "These meticulously crafted certificates, rendered in polished jade and shimmering with residual halo energy, grant temporary access to the Academy’s restricted holographic archives. Holding one allows a student to momentarily project a perfect replica of any theoretical construct or philosophical argument – perfect for impressing your peers or confusing a professor.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '✨',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grant temporary holographic projection",
            "increases persuasive argument ability by 15%",
            "reduces academic scrutiny by 20%",
            "instills a sense of unwarranted confidence"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery',
        levelRequirement: 25
    },

    'kivotos_item_mk83_graduate_certificates_of_discord': {
        id: 'kivotos_item_mk83_graduate_certificates_of_discord',
        name: "Mk.83 Graduate Certificates of Discord",
        description: "Issued by the clandestine 'Order of Disruptive Thought,' these certificates are stamped with a stylized graduation cap and a miniature symbol of chaotic energy, rendering them a potent tool for inciting controlled intellectual dissent.  The subtle aura generated by each certificate briefly destabilizes logical thought patterns in nearby individuals – perfect for throwing a party or challenging an authority figure.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '💣',
        stock: 9,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "causes temporary confusion in nearby students",
            "reduces the effectiveness of logical arguments by 50%",
            "increases charisma by 30% (but with a slight chance of unintended consequences)",
            "emits a subtle field that disrupts focus"
        ],
        vendor: 'club_supply',
        shippedBy: 'Shadow Courier',
        levelRequirement: 40
    },

    'kivotos_item_graduate_certificate_of_halos_prime': {
        id: 'kivotos_item_graduate_certificate_of_halos_prime',
        name: "Graduate Certificate of Halos Prime",
        description: "A premium certificate meticulously created by the Academy's elite halo engineers, this document contains a solidified fragment of pure halo energy.  Activation causes a brief and intense projection of a protective aura around the holder – ideal for navigating dangerous corridors or shielding oneself from unwanted attention within the academy’s upper levels.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 55000,
        icon: '🔆',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "generates a temporary protective halo aura",
            "increases resistance to mental manipulation by 75%",
            "provides limited invisibility in dimly lit areas",
            "temporarily enhances perception and awareness"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Secure Transport Vessel',
        levelRequirement: 50
    },

    'internet_item_hyperlink_distortion_binder': {
        id: 'internet_item_hyperlink_distortion_binder',
        name: "The Hyperlink Distortion Binder",
        description: "This crimson-etched binder contains fractured echoes of viral sensations, capable of momentarily warping the perception of those who consult its pages. Each page shimmers with compressed memes, offering fleeting glimpses into forgotten trends and twisted realities.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 750,
        icon: '✨',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Temporarily increases meme recognition by 15%",
            "Causes minor visual distortions for 5 seconds",
            "Chance to trigger a random nostalgic reaction",
            "Grants +2 Charisma with data tribes"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Drone Delivery',
        levelRequirement: 15
    },

    'internet_item_divine_link_nexus_fragment': {
        id: 'internet_item_divine_link_nexus_fragment',
        name: "The Divine Link Nexus Fragment",
        description: "A pulsating, obsidian shard recovered from a forgotten corner of the Deep Web. Holding this fragment allows you to momentarily tap into the core stream of viral information, granting precognitive glimpses of trending content.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🔮',
        stock: 9,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Grants a 20% chance to predict trending searches",
            "Increases data processing speed by 30%",
            "Provides resistance to information overload",
            "Allows temporary communication with network ghosts"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Quantum Courier',
        levelRequirement: 45
    },

    'internet_item_compressed_meme_cascade_scroll': {
        id: 'internet_item_compressed_meme_cascade_scroll',
        name: "Compressed Meme Cascade Scroll",
        description: "This meticulously crafted scroll contains a compressed torrent of iconic memes, released upon activation in a chaotic wave of visual and auditory stimuli. Handle with caution; prolonged exposure can induce extreme irony.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3500,
        icon: '😂',
        stock: 17,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "Deals 50 damage to enemies with ironic humor.",
            "Applies 'Distracted' status for 3 turns",
            "Chance to trigger a chain reaction of chaotic memes",
            "Restores 10% health and sanity."
        ],
        vendor: 'data_dealer',
        shippedBy: 'Courier Bot',
        levelRequirement: 28
    },

    'warhammer_item_crimson-skull-banner-eater': {
        id: 'warhammer_item_crimson-skull-banner-eater',
        name: "The Crimson Skull Banner Eater",
        description: "This banner, stitched with the pulverized bone of a thousand skull beasts, devours any aura of fear or despair. When unfurled, it emits a low, rhythmic pulse that causes enemies to recoil in primal terror and briefly reduces their attack power.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 285,
        icon: '💀',
        stock: 47,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "reduces enemy attack power by 10%",
            "applies fear effect to enemies within a small radius",
            "chance to inflict 'paralysis' on weaker foes"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'Imperial Courier Drone',
        levelRequirement: 15
    },

    'warhammer_item_ethereal-shade-whisperer': {
        id: 'warhammer_item_ethereal-shade-whisperer',
        name: "The Ethereal Shade Whisperer",
        description: "A delicately crafted amulet of obsidian and captured shadows, this device allows the wearer to briefly commune with restless spirits – though their advice is often cryptic and laced with madness.  It can reveal hidden pathways or forgotten secrets but comes with a risk of temporary insanity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '👻',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "reveals hidden passages and traps",
            "chance to gain a temporary insight (positive or negative)",
            "reduces damage taken from undead creatures by 15%",
            "small chance of inducing madness"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Nightshade Delivery Serpent',
        levelRequirement: 30
    },

    'warhammer_item_fate-forge-mk-7-temporal-resonator': {
        id: 'warhammer_item_fate-forge-mk-7-temporal-resonator',
        name: "Mk.7 Fate Forge Temporal Resonator",
        description: "Forged within the heart of a dying star, this device emits a rhythmic pulse that briefly distorts time around its wielder - allowing for incredible speed and agility in combat. However prolonged use can cause severe temporal displacement.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '⏳',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increases movement speed by 25%",
            "chance to briefly rewind time (undoing a single action)",
            "provides temporary protection against temporal manipulation effects",
            "risk of creating small temporal paradoxes"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Chronos Delivery Wing',
        levelRequirement: 45
    },

    'faerun_item_blessed_potions_of_silverstream': {
        id: 'faerun_item_blessed_potions_of_silverstream',
        name: "The Blessed Potions of Silverstream",
        description: "These shimmering, cerulean potions are infused with the essence of the Silverstream River, said to grant fleeting resilience against shadow and blight. Each drop whispers promises of swift recovery after grievous wounds.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '✨',
        stock: 47,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Restores 30 HP",
            "Grants temporary resistance to necrotic damage",
            "Provides a +1 bonus to saving throws against fear effects"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'Flying Courier',
        levelRequirement: 5
    },

    'faerun_item_twilight_sworn_s_elixir': {
        id: 'faerun_item_twilight_sworn_s_elixir',
        name: "Twilight Sworn’s Elixir of Silent Passage",
        description: "Distilled beneath the perpetual twilight of the Murkwater Marshes, this viscous, amethyst liquid grants temporary invisibility and a chilling touch. Its potent aroma lingers with an unsettling sense of forgotten oaths.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '👻',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Grants invisibility for 3 rounds",
            "Deals 1d6 cold damage on a successful touch attack",
            "Increases movement speed by 5 feet"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'Dark Elf Messenger',
        levelRequirement: 20
    },

    'faerun_item_mk71_forbidden_vial_of_nightshade': {
        id: 'faerun_item_mk71_forbidden_vial_of_nightshade',
        name: "Mk.71 Forbidden Vial of Nightshade Bloom",
        description: "Recovered from the ruined temple of Lolth, this vial contains a concentrated essence of Nightshade bloom, capable of inducing paralysis and draining vitality. Its creation is forbidden by most deities.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 8000,
        icon: '💀',
        stock: 3,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Applies paralysis to a target for 2 rounds (DC 15 Constitution save)",
            "Drains 4d6 poison damage on hit",
            "Increases the potency of poison-based attacks by 50%"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'Shadow Courier',
        levelRequirement: 35
    },

    'middle_earth_item_stoneheart_watcher': {
        id: 'middle_earth_item_stoneheart_watcher',
        name: "The Stoneheart Watcher’s Fragment",
        description: "A jagged shard of xenolithic stone pulsing with a faint, rhythmic thrum. This fragment seems to passively absorb the echoes of past battles and lost quests, granting brief glimpses into the motivations of those who wielded it before. It whispers secrets of forgotten heroes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🗿',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "passive: +5 to perception checks when investigating ruins.",
            "passive: Grants fleeting visions of past battles (1/day).",
            "Passive: +2 to resisting fear effects",
            "Chance to reveal hidden paths related to quests."
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_express',
        levelRequirement: 25
    },

    'middle_earth_item_rune_of_eldoria': {
        id: 'middle_earth_item_rune_of_eldoria',
        name: "The Rune of Eldoria’s Lament",
        description: "A deeply inscribed mithril rune, radiating a melancholic blue light. This ancient artifact seems to mourn the loss of Elven kingdoms and offers protection against despair; it is rumored to be created by the last elven runesmiths before the fall of Gondor.  Holding this rune evokes a profound sense of sadness.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '💔',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "Restores 20 HP and removes one level of exhaustion.",
            "+3 to saving throws against despair effects.",
            "Grants advantage on persuasion checks when appealing to empathy."
        ],
        vendor: 'elven_market',
        shippedBy: 'flying_ship',
        levelRequirement: 18
    },

    'middle_earth_item_scroll_of_the_watchful_eye': {
        id: 'middle_earth_item_scroll_of_the_watchful_eye',
        name: "The Scroll of the Watchful Eye - Mk.III",
        description: "A tightly rolled parchment bound with mithril thread, etched with complex runes depicting a watchful eye.  This scroll details strategies for navigating treacherous landscapes and identifying potential threats based on ancient dwarven observation techniques – rumored to be crafted by master scouts of Moria. It’s said to guide the user through perilous situations.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5800,
        icon: '👁️',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "+10 to survival checks in wilderness environments.",
            "Grants a 'warning' effect when within 50 meters of dangerous creatures or traps.",
            "Provides minor tactical advantages during combat (e.g., +2 bonus to initiative).",
            "Reveals hidden paths and secret passages on maps."
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'dragon_transport',
        levelRequirement: 45
    },

    'faerun_item_verdant_crowneds_cloak': {
        id: 'faerun_item_verdant_crowneds_cloak',
        name: "Verdant Crowned's Cloak of the Verdant Grove",
        description: "This cloak, woven from moss and starlight, radiates a gentle warmth. It provides resistance to poison and grants fleeting glimpses into the paths favored by forest spirits, bolstering your courage against shadowy threats.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🌿',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "poison resistance +3",
            "chance to glimpse hidden paths",
            "increased courage in forests"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'winged_messenger',
        levelRequirement: 15
    },

    'faerun_item_mk_47_shadow_cloaks': {
        id: 'faerun_item_mk_47_shadow_cloaks',
        name: "Mk.47 Shadow Cloaks of the Silent Watcher",
        description: "These charcoal-grey cloaks, etched with intricate runes depicting watchful owls, grant near-perfect concealment in dimly lit areas. They whisper secrets to those who listen closely, providing a minor bonus to stealth and perception.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🦉',
        stock: 8,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "enhanced stealth +6",
            "improved perception in shadows",
            "chance to detect illusions"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'dark_horse_cart',
        levelRequirement: 30
    },

    'faerun_item_shadow_rune_of_the_lost_trail': {
        id: 'faerun_item_shadow_rune_of_the_lost_trail',
        name: "Shadow Rune of the Lost Trail - Consumable",
        description: "This pulsating, obsidian rune burns with a cold light. Upon ingestion, it briefly illuminates the darkest paths, revealing hidden trails and momentarily disrupting magical concealment effects for the consumer.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🌑',
        stock: 67,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "reveals hidden trails (short duration)",
            "disrupts magical concealment +2",
            "minor shadow resistance"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'express_delivery',
        levelRequirement: 10
    },

    'warhammer_item_the-abyssal-resonance-breaker': {
        id: 'warhammer_item_the-abyssal-resonance-breaker',
        name: "The Abyssal Resonance Breaker",
        description: "A shattered warhammer crafted from solidified chaos, pulsing with a sickly green light. It emits a constant tremor that disrupts enemy formations and amplifies your own attacks—a testament to the unending conflict within.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🔥',
        stock: 35,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "Increases attack damage by 25%",
            "Chance to inflict 'Chaos Wound' on hit (deals extra damage over time)",
            "Reduces enemy armor rating by 10%",
            "Causes minor tremors around the wielder"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Hellhound Courier',
        levelRequirement: 35,
        effectDetails: [
          {
            "title": "Chaos-Forged Impact",
            "rules": "The Breaker is a maul dealing 2d6 bludgeoning damage. Your damage rolls with it are increased by 25% (round down). It counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks."
          },
          {
            "title": "Chaos Wound",
            "rules": "On a hit, the target must succeed on a DC 16 Constitution saving throw or suffer a Chaos Wound: 2d6 necrotic damage at the start of each of its turns for 1 minute. The target may repeat the save at the end of each of its turns, ending the effect on a success. Chaos Wounds do not stack."
          },
          {
            "title": "Sunder Plate",
            "rules": "A creature struck by the Breaker has its AC reduced by 2 (to a minimum of 10) until the end of your next turn. Against constructs and creatures wearing heavy armour the reduction is 3 instead."
          },
          {
            "title": "Unquiet Ground",
            "rules": "The weapon never stops shaking. You have disadvantage on Dexterity (Stealth) checks while carrying it, and difficult terrain forms in a 5-foot radius around you when you land a critical hit."
          }
        ],
        usage: "Martial weapon (maul). Requires attunement by a creature of level 35 or a Chaos-touched wielder.",
        priceReason: "Legendary chaos weaponry with armour shred and a damage-over-time rider. 18,000 is cheap for what it does, which should worry the buyer more than it does.",
        aiReviewedAt: "2026-07-25T00:00:00.000Z",
        aiReviewVersion: "manual-1"
    },

    'warhammer_item_twilight-sentinel-medallion': {
        id: 'warhammer_item_twilight-sentinel-medallion',
        name: "Twilight Sentinel Medallion of Broken Wills",
        description: "This ornate medal, forged in the heart of a perpetual twilight storm, whispers with the fading memories of countless fallen warriors. It grants the wearer limited control over fear and uncertainty—a chilling reminder of war's psychological toll.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🌑',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Reduces enemy morale by 30%",
            "Chance to inflict 'Terror' on target (causes temporary paralysis)",
            "Grants +5 to Willpower",
            "Passive: Detects nearby sources of chaos and disruption"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Shadow Messenger',
        levelRequirement: 20
    },

    'warhammer_item_mk-78-purified-medals-of-desolation': {
        id: 'warhammer_item_mk-78-purified-medals-of-desolation',
        name: "Mk.78 Purified Medals of Desolation",
        description: "These meticulously crafted medals, purged in the fires of a forgotten battlefield, radiate an aura of desolate calm—a stark contrast to the surrounding chaos. They offer protection against the worst effects of war, but at a terrible price.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 500,
        icon: '🛡️',
        stock: 88,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Grants +10 temporary defense against physical attacks",
            "Heals a small amount of health over time (2 HP/second)",
            "Reduces the duration of negative status effects by 50%",
            "Provides resistance to fear and panic"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'Winged Courier',
        levelRequirement: 10
    },

    'kivotos_item_spectral_halo_render': {
        id: 'kivotos_item_spectral_halo_render',
        name: "The Spectral Halo Render of Veritas Hall",
        description: "This shimmering band, woven from captured student ambition and academy light, momentarily grants the wearer heightened perception and a subtle aura of authority. It’s rumored to render the user temporarily resistant to logical paradoxes, though prolonged use can induce unsettling visions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 250,
        icon: '✨',
        stock: 47,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increased perception",
            "paradox resistance (short duration)",
            "subtle aura of authority"
        ],
        vendor: 'student_store',
        shippedBy: 'drone_delivery',
        levelRequirement: 15
    },

    'kivotos_item_crimson_render_of_discord': {
        id: 'kivotos_item_crimson_render_of_discord',
        name: "The Crimson Render of Discord's Echoes",
        description: "A heavy brass band inscribed with unsettling sigils, this item pulses with a faint, discordant energy. When activated, it briefly distorts the perceptions of those nearby, creating momentary confusion and eroding trust – a truly cursed instrument.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '😈',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "distorted perception (area of effect)",
            "erosion of trust",
            "minor confusion",
            "chance to trigger hallucinations"
        ],
        vendor: 'club_supply',
        shippedBy: 'express_delivery',
        levelRequirement: 30
    },

    'kivotos_item_honor_bands_mk68': {
        id: 'kivotos_item_honor_bands_mk68',
        name: "Honor Bands MK.68 - The Citadel Protocol",
        description: "Crafted from solidified academy regulations and polished to a mirror sheen, these bands exude an aura of unwavering discipline. Wearing them grants the wearer increased focus and a noticeable boost in academic performance – though some whisper they are subtly attempting to mold the wearer's thoughts.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🏅',
        stock: 9,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increased focus",
            "enhanced academic performance",
            "resistance to distraction",
            "minor bonus to knowledge checks"
        ],
        vendor: 'academy_armory',
        shippedBy: 'tracked_delivery',
        levelRequirement: 45
    },

    'doughnut_hole_item_gravitic_resonance_bearer': {
        id: 'doughnut_hole_item_gravitic_resonance_bearer',
        name: "The Chronal Displacement Bearer",
        description: "This pulsating, obsidian orb hums with the residual echoes of collapsed timelines. When activated, it briefly inverts local gravity for a short burst, allowing for incredible leaps and maneuvers – though prolonged use risks attracting unwanted attention from the Fated Place’s currents.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🚀',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Temporarily inverts local gravity for 5 seconds.",
            "Increases jump height by 30%",
            "Chance to attract Void Entities (low)",
            "Provides minor resistance to gravitational anomalies"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Void Courier',
        levelRequirement: 25
    },

    'doughnut_hole_item_unholy_nulls_of_descent': {
        id: 'doughnut_hole_item_unholy_nulls_of_descent',
        name: "The Unholy Nulls of Descent",
        description: "These fractured, grey nulls seem to pull at the very fabric of existence. Holding one grants a fleeting connection to the void's depths, offering glimpses into possible futures – but prolonged exposure can warp your perception and leave you vulnerable to unearthly whispers.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '🌀',
        stock: 21,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "Grants brief visions of possible futures (random)",
            "Reduces sanity by 5% per minute while held.",
            "Increases resistance to mind-altering effects.",
            "Provides a slight aura of unsettling silence"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Shadow Cartographer',
        levelRequirement: 18
    },

    'doughnut_hole_item_inverted_gravity_prism_97': {
        id: 'doughnut_hole_item_inverted_gravity_prism_97',
        name: "The Inverted Gravity Prism - Mk.97",
        description: "This multifaceted crystal, etched with inverted glyphs, channels the chaotic energies of the Fated Place's gravity wells. When focused, it creates a localized distortion field, allowing you to walk on walls and ceilings with surprising grace – but be warned: its power is volatile.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5200,
        icon: '🧱',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Allows the user to walk on walls and ceilings for 10 seconds.",
            "Increases movement speed by 20%",
            "Chance to trigger a localized gravity surge (moderate)",
            "Provides protection against fall damage"
        ],
        vendor: 'center_seller',
        shippedBy: 'Dimensional Postman',
        levelRequirement: 45
    },

    'pokemon_item_chronos_resonance_mark': {
        id: 'pokemon_item_chronos_resonance_mark',
        name: "The Chronos Resonance Mark",
        description: "A shimmering obsidian band etched with glyphs representing temporal distortion, this held item grants brief bursts of accelerated evolution potential. It subtly shifts the flow of time around the wearer, increasing their Pokémon's attack and speed but also carrying a risk of unpredictable mutation.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 18000,
        icon: '⏳',
        stock: 23,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "increases attack and speed for 5 turns",
            "chance to trigger a random evolution on the wearer's Pokémon",
            "reduces defense by 10%",
            "provides resistance to status effects"
        ],
        vendor: 'league_store',
        shippedBy: 'express_delivery',
        levelRequirement: 35
    },

    'pokemon_item_shadowdrift_amulet_7': {
        id: 'pokemon_item_shadowdrift_amulet_7',
        name: "The Shadowdrift Amulet of Seven Echoes",
        description: "Forged from solidified moonlight and imbued with the lingering souls of forgotten trainers, this amulet allows for limited spectral projection – a ghostly duplicate of the wearer’s Pokémon can briefly assist in battle.  It is incredibly sensitive to powerful psychic energies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '👻',
        stock: 18,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "creates a spectral clone of the wearer's Pokémon for 3 turns",
            "increases special attack by 5%",
            "provides immunity to confusion and other mental status effects",
            "chance to inflict 'Phantom Pain' on opponents"
        ],
        vendor: 'safari_shop',
        shippedBy: 'standard_shipping',
        levelRequirement: 28
    },

    'pokemon_item_kryptonian_echo_shard': {
        id: 'pokemon_item_kryptonian_echo_shard',
        name: "The Kryptonian Echo Shard of Temporal Resonance",
        description: "A fractured piece of a meteor believed to have fallen from a dimension where time itself is malleable. This curious item allows the user's Pokemon to briefly phase through attacks, and reflect projectiles back at their origin.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 500,
        icon: '💫',
        stock: 75,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to reflect projectiles back at the attacker.",
            "provides a small chance to avoid physical attacks entirely",
            "increases evasion by 2%",
            "allows user’s Pokemon to pass through one attack per battle."
        ],
        vendor: 'pokemart',
        shippedBy: 'standard_shipping',
        levelRequirement: 15
    },

    'kivotos_item_karmic_bearer_of_resonance': {
        id: 'kivotos_item_karmic_bearer_of_resonance',
        name: "The Karmic Bearer's Cards - Semester Echoes",
        description: "These iridescent cards pulse with a faint, karmic energy. When played in sequence, they briefly amplify the emotional resonance of the surrounding academy students, potentially influencing their decisions and actions for a single semester. Beware, prolonged use can lead to chaotic ripple effects.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 875,
        icon: '✨',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "amplifies student emotions for 60 seconds",
            "chance to trigger a minor academic disruption (10%)",
            "grants +5 charisma for one turn",
            "reveals hidden study groups' locations"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery - Standard',
        levelRequirement: 22
    },

    'kivotos_item_mk_77_semester_cards': {
        id: 'kivotos_item_mk_77_semester_cards',
        name: "Mk.77 Semester Cards - Academy Protocol",
        description: "These meticulously crafted cards represent the core protocols governing student behavior within the Academy City. Activation triggers a localized temporal distortion, momentarily freezing students in place – perfect for snatching prized possessions or executing complex maneuvers.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1750,
        icon: '⚙️',
        stock: 8,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "freezes target student for 3 seconds",
            "chance to steal a random item from the frozen student (25%)",
            "grants +10 agility for one turn",
            "creates a localized chronal anomaly - risk of minor temporal instability"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Express Courier - Priority',
        levelRequirement: 38
    },

    'kivotos_item_halo_of_perfect_notes_26631_518': {
        id: 'kivotos_item_halo_of_perfect_notes_26631_518',
        name: "Halo of Perfect Notes - The Composer's Blessing",
        description: "This intricate halo, forged from solidified music and imbued with potent harmonic energy, elevates the wearer’s musical abilities to unparalleled heights. It not only amplifies their sonic output but also grants them a degree of influence over surrounding soundscapes.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 7500,
        icon: '🎶',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "drastically increases musical instrument proficiency (all instruments)",
            "creates a zone of harmonic resonance - reduces noise and distractions",
            "allows the wearer to subtly manipulate students' emotional states through music",
            "chance to induce a trance-like state in nearby individuals"
        ],
        vendor: 'club_supply',
        shippedBy: 'Royal Messenger - Platinum Service',
        levelRequirement: 45
    },

    'internet_item_compressed_echoes_of_memories': {
        id: 'internet_item_compressed_echoes_of_memories',
        name: "Compressed Echoes of Memories - Mk.47",
        description: "These shimmering, compressed hashes vibrate with fragmented recollections from forgotten viral trends – a digitized ghost town where obsolete memes linger. Consumption grants a brief burst of obsessive nostalgia and the unsettling ability to predict short-lived internet fads.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 789,
        icon: '✨',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Grants temporary obsession with a random viral trend.",
            "Provides +10% chance to predict trending hashtags for 60 seconds.",
            "Causes minor auditory hallucinations of dial-up modem sounds."
        ],
        vendor: 'data_dealer',
        shippedBy: 'Drone Delivery',
        levelRequirement: 15
    },

    'internet_item_the_ancient_data_eater': {
        id: 'internet_item_the_ancient_data_eater',
        name: "The Ancient Data Eater - Prototype X9",
        description: "A pulsating, obsidian shard infused with the compressed remnants of defunct social networks. This forbidden artifact devours excess data streams, leaving a trail of blissful silence in its wake... but at what cost?",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12456,
        icon: '👾',
        stock: 8,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Absorbs 50% of nearby data streams (reduces network congestion).",
            "Grants temporary immunity to targeted online advertising.",
            "Causes minor paranoia and the feeling of being watched by algorithms."
        ],
        vendor: 'cyber_market',
        shippedBy: 'Secure Packet Transfer',
        levelRequirement: 35
    },

    'internet_item_mythic_chronometric_flux': {
        id: 'internet_item_mythic_chronometric_flux',
        name: "Mythic Chronometric Flux - The Timestamp Serpent",
        description: "A swirling vortex of compressed time-data, harvested from the collapse of obsolete servers. This forbidden item grants momentary control over local temporal distortions—rewinding blunders or fast-forwarding through tedious content. Handle with extreme caution; paradoxes are a frequent side effect.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 87500,
        icon: '⏳',
        stock: 1,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "Allows the user to rewind time by up to 10 seconds.",
            "Grants a temporary speed boost.",
            "Causes unpredictable temporal distortions and potential paradoxes (50% chance of negative effects).",
            "Increases the user's susceptibility to internet conspiracy theories."
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Quantum Courier',
        levelRequirement: 50
    },

    'middle_earth_item_echoing_heartwood_speaker': {
        id: 'middle_earth_item_echoing_heartwood_speaker',
        name: "The Echoing Heartwood Speaker",
        description: "This intricately carved speaker, fashioned from the heartwood of a fallen Ent and inlaid with silver runes, resonates with the lingering memories of ancient forests. When activated, it emits a chorus of whispers – fragmented tales of forgotten battles and lost Elven songs, potentially revealing hidden pathways or weaknesses.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🎶',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "reveals hidden paths (chance)",
            "increases perception by 10% for 60 seconds",
            "emits a calming aura",
            "chance to temporarily stun enemies with sonic waves"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_messenger',
        levelRequirement: 25
    },

    'middle_earth_item_vile_stone_of_grim_silence': {
        id: 'middle_earth_item_vile_stone_of_grim_silence',
        name: "The Vile Stone of Grim Silence",
        description: "A chilling obsidian stone pulsating with a palpable sense of dread, this artifact was allegedly crafted by a dark sorcerer in the depths of Moria. Holding it grants the user unsettling control over sound, momentarily silencing all ambient noise and even dampening magical effects reliant on vocal incantations.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '🤫',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "silences all sounds within a small radius (3 meters) for 15 seconds",
            "reduces spellcasting effectiveness by 20% for 30 seconds",
            "chance to inflict 'fear' on nearby enemies",
            "provides temporary immunity to sonic attacks"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'cart_of_stones',
        levelRequirement: 18
    },

    'middle_earth_item_mk50_silver_mithril_chronometer': {
        id: 'middle_earth_item_mk50_silver_mithril_chronometer',
        name: "Mk.50 Silver Mithril Chronometer",
        description: "This meticulously crafted chronometer, forged from mithril and adorned with intricate Elven glyphs, doesn’t measure time in seconds or minutes, but rather the flow of magical energy around a target.  Its readings can predict an opponent's next move or pinpoint weaknesses in their defenses – a surprisingly useful tool for a warrior.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5200,
        icon: '⏱️',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "reveals enemy's attack pattern probability (chance)",
            "detects magical vulnerabilities",
            "provides a bonus to initiative rolls for 60 seconds",
            "slows down the passage of time slightly, increasing reaction speed"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_express',
        levelRequirement: 45
    },

    'doughnut_hole_item_whispering_chronal_tear_of_reverie': {
        id: 'doughnut_hole_item_whispering_chronal_tear_of_reverie',
        name: "Whispering Chronal Tear of Reverie",
        description: "A solidified fragment of temporal dissonance, shimmering with a faint silver light. Holding this tear evokes fragmented memories and whispers from potential futures, subtly altering your perception of time for approximately 60 seconds.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 7500,
        icon: '⏳',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Temporal Distortion (perception altered for 60 seconds)",
            "Fragmented Memories (brief flashes of possible futures)",
            "Minor Chronal Instability (1% chance of localized time stutter)"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dimensional Ripple',
        levelRequirement: 25
    },

    'doughnut_hole_item_centrally_aligned_watcher_shard': {
        id: 'doughnut_hole_item_centrally_aligned_watcher_shard',
        name: "Centrally Aligned Watcher Shard - Mk.III",
        description: "This obsidian shard pulses with a cold, central energy, seemingly drawn to the deepest points of the void. Wearing this provides passive awareness of nearby anomalies and distortions – it’s said to be favored by those seeking to understand the nature of the Fated Place.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '👁️',
        stock: 7,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Anomaly Detection (increased perception of void anomalies)",
            "Void Resistance (10% damage reduction from void effects)",
            "Passive Chronal Awareness (subtle precognitive flashes)"
        ],
        vendor: 'center_seller',
        shippedBy: 'Void Packet',
        levelRequirement: 40
    },

    'doughnut_hole_item_nobly_decaying_curiosity_essence': {
        id: 'doughnut_hole_item_nobly_decaying_curiosity_essence',
        name: "Nobly Decaying Curiosity Essence - Variant Gamma",
        description: "A viscous, iridescent fluid harvested from the ruins of forgotten experiments – a testament to the void's chaotic nature. Immersing yourself in this essence grants brief access to forbidden knowledge and unsettling visions; however, prolonged use risks dissolving your sanity.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 35000,
        icon: '🧪',
        stock: 3,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "Forbidden Knowledge (temporary access to obscure lore)",
            "Hallucinatory Visions (distorted perception of reality)",
            "Void Resonance (increased vulnerability to void effects – 20%)",
            "Mental Degradation (cumulative sanity loss over time)"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Phantom Courier',
        levelRequirement: 50
    },

    'internet_item_pixel_striker_792': {
        id: 'internet_item_pixel_striker_792',
        name: "Waning Striker’s Packets of Corrupted Algorithmic Echoes",
        description: "These iridescent packets pulse with fragmented data streams, remnants of forgotten social media trends. Upon activation, they briefly overload a target's neural network with simulated emotional responses, causing disorientation and temporary paranoia.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🌀',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Causes disorientation for 5 seconds.",
            "Increases target's susceptibility to psychological manipulation by 20%.",
            "Minor chance of generating a phantom notification."
        ],
        vendor: 'pixel_shop',
        shippedBy: 'drone_delivery',
        levelRequirement: 25
    },

    'internet_item_data_striker_481': {
        id: 'internet_item_data_striker_481',
        name: "The Cached Packets of the Lost Streamer’s Lament",
        description: "These dense packets contain the final, decaying broadcasts of a massively popular livestreaming personality. Analyzing these packets triggers vivid hallucinations of their most dramatic moments and obsessive fan reactions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🖥️',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "Grants temporary access to the streamer's perceived emotional state.",
            "Provides a minor boost to charisma within online communities.",
            "Chance (10%) of attracting unwanted attention from digital stalkers."
        ],
        vendor: 'cyber_market',
        shippedBy: 'encrypted_package',
        levelRequirement: 45
    },

    'internet_item_cached_striker_901': {
        id: 'internet_item_cached_striker_901',
        name: "Mythic Data Broker's Protocol Nexus – ‘The Glitch Shepherd’",
        description: "A highly sophisticated device that allows the user to interface directly with corrupted server architectures. This mythical artifact provides temporary access to vast, unstable data reserves, but overuse risks permanent fragmentation of the user’s own digital identity.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 75000,
        icon: '📡',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "Allows the user to siphon data from unstable network nodes.",
            "Provides a 30% chance of acquiring rare data fragments.",
            "High risk: User's digital footprint becomes increasingly unstable over time.",
            "Can summon temporary 'ghost' avatars within online environments."
        ],
        vendor: 'data_dealer',
        shippedBy: 'quantum_relay',
        levelRequirement: 50
    },

    'middle_earth_item_the_stonehand_master': {
        id: 'middle_earth_item_the_stonehand_master',
        name: "The Stonehand Master’s Gripscale Rune",
        description: "This intricately carved rune, pulsing with faint geothermal energy, grants the wielder enhanced grip and a surprising resilience to stone. Crafted by zealous dwarven artisans within the depths of Khazad-dûm, it whispers tales of forgotten mining techniques and stubborn resolve.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '⛏️',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increased_grip",
            "stone_resistance",
            "minor_mining_speed"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'wagon',
        levelRequirement: 15
    },

    'middle_earth_item_the_shire_songweaver': {
        id: 'middle_earth_item_the_shire_songweaver',
        name: "The Shire Songweaver's Harmonic Resonance Charm",
        description: "A delicate silver charm strung with threads of spun moonpetal, imbued with the joyful melodies of the Shire. Wearing this charm amplifies your voice and can soothe even the most agitated beast, though its effectiveness is tied to a positive disposition.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '🎶',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "voice_amplification",
            "animal_pacification",
            "minor_luck"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony',
        levelRequirement: 25
    },

    'middle_earth_item_the_woodhaven_watcher': {
        id: 'middle_earth_item_the_woodhaven_watcher',
        name: "The Woodhaven Watcher’s Eldertree Sigil",
        description: "A weathered, oak-bound sigil etched with the stylized image of a watching Elder Tree. This artifact grants fleeting glimpses into the near future – typically warnings related to immediate danger within forested areas. Its connection to the ancient Elven knowledge is palpable.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '🌳',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "premonition_forest",
            "increased_awareness",
            "minor_healing_over_time"
        ],
        vendor: 'elven_market',
        shippedBy: 'flying_hawk',
        levelRequirement: 40
    },

    'kivotos_item_gilded_chronos_reaver': {
        id: 'kivotos_item_gilded_chronos_reaver',
        name: "The Gilded Chronos Reaver Certificate",
        description: "A shimmering certificate, meticulously crafted from solidified temporal echoes and gilded with platinum harvested from the Academy's chronometric relays.  Holding this allows you to briefly manipulate the flow of time around a single target - slowing their reactions or accelerating their aging by mere fractions of a second. It’s rumored to have been personally commissioned by the Headmaster for particularly ruthless club leaders.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '⏳',
        stock: 5,
        rarity: 'godly',
        stockType: 'limited_daily',
        effects: [
            "slows target's reaction speed by 30% for 10 seconds",
            "can accelerate target’s aging process by a fraction of a second (visual effect only)",
            "chance to inflict temporary confusion on the target.",
            "increases user’s perception temporarily."
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery',
        levelRequirement: 35
    },

    'kivotos_item_forbidden_resonance_circulator': {
        id: 'kivotos_item_forbidden_resonance_circulator',
        name: "The Forbidden Resonance Circulator Device",
        description: "A compact, obsidian device pulsing with unstable energy – salvaged from a defunct student research lab specializing in forbidden dimensional harmonics. This strange artifact allows the user to briefly tap into the chaotic echoes of overlapping realities, creating localized distortions and attracting unpredictable phenomena. Prolonged use can lead to severe psychological instability.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🌀',
        stock: 12,
        rarity: 'common',
        stockType: 'night_only',
        effects: [
            "creates a localized distortion field causing minor random effects (e.g., objects phasing in/out of reality)",
            "attracts unstable dimensional entities for a brief period.",
            "chance to inflict temporary madness on the user.",
            "increases the user’s affinity to chaotic energies."
        ],
        vendor: 'club_supply',
        shippedBy: 'Courier - Express Delivery',
        levelRequirement: 45
    },

    'kivotos_item_academy_certificiate_of_glimmering_reputation': {
        id: 'kivotos_item_academy_certificiate_of_glimmering_reputation',
        name: "The Academy Certificate of Glimmering Reputation",
        description: "A complex, multi-layered certificate printed on treated parchment infused with academy crests and faint holographic projections.  This item acts as a validation of status within the Academy’s social hierarchy - granting access to exclusive club events and boosting one's influence among student factions. The certification is constantly shifting in color depending on the user’s standing.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 600,
        icon: '✨',
        stock: 88,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increases social standing with specific student factions.",
            "grants access to exclusive club events (limited availability).",
            "provides a small bonus to persuasion checks related to Academy politics.",
            "Provides temporary protection from casual ridicule."
        ],
        vendor: 'academy_armory',
        shippedBy: 'Standard Postal Delivery',
        levelRequirement: 15
    },

    'warhammer_item_ironclad-desolation-stalker': {
        id: 'warhammer_item_ironclad-desolation-stalker',
        name: "The Ironclad Desolation Stalker’s Medallion",
        description: "This blackened steel medallion pulses with a chilling resonance, amplifying the wearer's resilience against relentless assault. A grim blessing of shattered empires, it offers temporary damage resistance and enhanced stealth in desolate landscapes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 275,
        icon: '🛡️',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased defense",
            "shadowstep (brief stealth)",
            "resistance to physical damage",
            "chance to inflict bleeding"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'airship',
        levelRequirement: 15
    },

    'warhammer_item_wicked-chronos-manipulator': {
        id: 'warhammer_item_wicked-chronos-manipulator',
        name: "Wicked Chronos Manipulator - The Obsidian Fragment",
        description: "A jagged shard of petrified time, radiating a wicked energy. This artifact allows the user to briefly rewind their actions or momentarily accelerate their movements with unpredictable results.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8300,
        icon: '⏳',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "rewind time (short burst)",
            "speed boost (brief duration)",
            "chance of temporal distortion (confusion)",
            "minor health regeneration"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'winged-beast',
        levelRequirement: 35
    },

    'warhammer_item_fate-forge-mk-89-desolation-medals': {
        id: 'warhammer_item_fate-forge-mk-89-desolation-medals',
        name: "Fate Forge Mk.89 Desolation Medals - Blessed Sacrifice",
        description: "Forged within the heart of a collapsing fortress, these medals represent a pact with forgotten gods. Wearing them grants potent protective magic but demands a sacrifice – a fragment of your memories, slowly eroding over time.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 18500,
        icon: '💀',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "significant defense boost",
            "resistance to dark magic",
            "chance of critical hit",
            "memory loss (gradual)"
        ],
        vendor: 'fate_forge',
        shippedBy: 'dimensional-portal',
        levelRequirement: 50
    },

    'internet_item_chromatic_meme_echo': {
        id: 'internet_item_chromatic_meme_echo',
        name: "The Chromatic Meme Echo",
        description: "This pulsating orb contains the distilled remnants of countless viral trends, granting fleeting bursts of amplified charisma and momentary understanding of internet slang. Holding it allows you to project a targeted meme directly into another's mind - though its effects are notoriously unpredictable.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '🔊',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "temporary charisma boost",
            "chance to understand obscure internet slang",
            "meme projection (random effect)",
            "minor data corruption"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Drone Delivery',
        levelRequirement: 15
    },

    'internet_item_eldritch_born_key_of_recursion': {
        id: 'internet_item_eldritch_born_key_of_recursion',
        name: "Eldritch Born's Key of Recursion",
        description: "Forged from compressed infinite loops and the echoes of forgotten chatrooms, this key unlocks hidden pathways within digital networks.  Turning it grants brief access to fractured realities and distorted timelines – be warned, prolonged use risks becoming lost in its recursive depths.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2100,
        icon: '🔑',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "short-range teleportation through networks",
            "chance to trigger a recursive loop",
            "resistance to digital manipulation",
            "temporal distortion (minor)"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Data Courier - Phase Shift',
        levelRequirement: 35
    },

    'internet_item_the_algorithmic_oracle_service': {
        id: 'internet_item_the_algorithmic_oracle_service',
        name: "The Algorithmic Oracle Service",
        description: "A complex device capable of extracting predictive probabilities from the chaotic flow of internet data. Once activated, it provides a cryptic, yet surprisingly accurate, 'reading' regarding future events – often delivered through unsettlingly specific digital advertisements.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 9500,
        icon: '🔮',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "predictive probability reading (random)",
            "chance to trigger personalized advertising",
            "minor data surveillance",
            "temporal anomaly detection"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Quantum Entanglement Relay',
        levelRequirement: 50
    },

    'equestria_item_chromatic_bitshaper': {
        id: 'equestria_item_chromatic_bitshaper',
        name: "The Chromatic Bitshaper Mk.37",
        description: "This intricately crafted bit, forged from solidified prismatic energy, allows the user to temporarily imbue their steed with a specific element – bolstering speed with azure, enhancing strength with crimson, or amplifying magical prowess with gold.  A truly chaotic and harmonious tool for the discerning rider.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '✨',
        stock: 7,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "increases speed by 50% for 10 seconds (element: azure)",
            "increases strength by 30% for 10 seconds (element: crimson)",
            "temporarily boosts magical power by 20% for 10 seconds (element: gold)"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Pony Post',
        levelRequirement: 35
    },

    'equestria_item_wicked_shade_shaper': {
        id: 'equestria_item_wicked_shade_shaper',
        name: "The Wicked Shade Shaper – Obsidian Variant",
        description: "A chilling artifact crafted from solidified nightmare essence, this item allows the user to momentarily warp reality around their pony, creating unsettling illusions and disrupting magical defenses.  Handle with caution; prolonged use may lead to…unpleasant reflections.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '😈',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "creates a minor illusion, disorienting enemies for 5 seconds.",
            "temporarily suppresses magical effects within a 10-meter radius (duration: 3 seconds).",
            "chance to inflict ‘Wickedness’ status on target (chance: 20%)"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Swift Delivery Pony',
        levelRequirement: 28
    },

    'equestria_item_harmonious_bits_of_resonance': {
        id: 'equestria_item_harmonious_bits_of_resonance',
        name: "The Harmonious Bits of Resonance - Series Theta",
        description: "These meticulously polished bits, imbued with the echoes of perfect harmony, grant the rider a sense of unparalleled connection to their steed.  Feel the rhythm of Equestria flow through you as you ride!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🎵',
        stock: 99,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Increases riding accuracy by 10%",
            "Provides a temporary boost to communication with your steed.",
            "Grants a small amount of ‘Harmony’ status, reducing negative emotions."
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Crystal Courier Express',
        levelRequirement: 15
    },

    'faerun_item_dragonscale_walker': {
        id: 'faerun_item_dragonscale_walker',
        name: "The Dragonscale Walker’s Treaders",
        description: "These boots, salvaged from the ruins of an ancient dragon hoard beneath Candlekeep, resonate with residual draconic energy. The yielding scales provide remarkable traction across treacherous terrain and offer a subtle resistance to fire damage.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🐉',
        stock: 12,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "increased_movement_speed",
            "fire_resistance",
            "enhanced_traction",
            "minor_draconic_aura"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'Griffon Express',
        levelRequirement: 35
    },

    'faerun_item_silversong_walker': {
        id: 'faerun_item_silversong_walker',
        name: "Silversong Walker’s Echo Boots",
        description: "Forged by the dwarven smiths of Mithral Hall and infused with a captured fragment of a siren's lament, these boots hum with an ethereal melody.  They allow for uncanny stealth and subtly enhance one’s hearing in echoing environments.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🎶',
        stock: 8,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "stealth_bonus",
            "enhanced_hearing",
            "minor_illusion_resistance",
            "whisper_step"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'Night Hauler Cart',
        levelRequirement: 28
    },

    'faerun_item_forgotten_walker': {
        id: 'faerun_item_forgotten_walker',
        name: "The Forgotten Walker’s Rust-Eaten Shards",
        description: "Unearthed from a long-lost temple dedicated to the god of oblivion, these boots appear weathered and incomplete. Despite their decayed state, they grant glimpses into forgotten memories and offer protection against psychic intrusions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '💀',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "psychic_resistance",
            "memory_fragment_sight",
            "minor_healing",
            "protection_from_fear"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'Standard Courier Delivery',
        levelRequirement: 15
    },

    'warhammer_item_jeweled_striker_of_vexation': {
        id: 'warhammer_item_jeweled_striker_of_vexation',
        name: "Jeweled Striker's Insignias of Vexation",
        description: "These intricately crafted insignias pulse with a chaotic energy, designed to disrupt enemy formations during battle. Each insignia is inlaid with shimmering obsidian and etched with glyphs depicting the shattered banners of fallen empires. Wearing this insignia grants temporary advantage in aggressive combat maneuvers.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '⚔️',
        stock: 37,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increased attack damage for 15 seconds",
            "chance to inflict 'disoriented' status on target",
            "boosts aggression stat by 20%",
            "reduces enemy armor rating by 10%"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'Imperial Courier Drone',
        levelRequirement: 15
    }
};
