// Shop items file 79
// Generated: 2026-03-22 19:40:36
// Items: 100

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_079 = {
    'kivotos_item_infernal_render_notebooks': {
        id: 'kivotos_item_infernal_render_notebooks',
        name: "Infernal Render's Notebooks - Vol. VII",
        description: "Bound in obsidian leather and etched with infernal glyphs, these notebooks record thoughts with unsettling clarity. Each page seems to subtly shift the observer’s perception, fostering obsessive academic pursuits – or perhaps something far more sinister.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 750,
        icon: '🔥',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Increased Insight (+5)",
            "Minor Hallucinations (1/day)",
            "Enhanced Memory Retention"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery',
        levelRequirement: 15
    },

    'kivotos_item_mk_44_academic_notebooks': {
        id: 'kivotos_item_mk_44_academic_notebooks',
        name: "Mk.44 Academic Notebooks - Protocol Zeta",
        description: "These gleaming, chrome-plated notebooks are infused with the Academy’s central processing network. They automatically organize thoughts and present data in a highly efficient, almost unnervingly precise manner – but beware of unexpected system overrides.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '💻',
        stock: 8,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Data Stream Integration (+10)",
            "Automatic Note Organization",
            "Minor Processing Speed Boost"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Secure Courier',
        levelRequirement: 30
    },

    'kivotos_item_halo_of_perfect_notes_40698_282': {
        id: 'kivotos_item_halo_of_perfect_notes_40698_282',
        name: "Halo of Perfect Notes – Celestial Alignment",
        description: "This holy artifact, radiating a soft, golden light, ensures flawless handwriting and impeccable organization. It's rumored to be constructed from solidified student ambition and pure academic zeal; its touch renders all written material flawlessly precise.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 65000,
        icon: '✨',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "Absolute Clarity (+30)",
            "Error Elimination",
            "Enhanced Focus & Concentration",
            "Divine Inspiration (Passive)"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Magical Portal Transporter',
        levelRequirement: 50
    },

    'equestrian_item_kaleidoscopic_claimed_saddlebags': {
        id: 'equestrian_item_kaleidoscopic_claimed_saddlebags',
        name: "Kaleidoscopic Claimed's Saddlebags of Shifting Streams",
        description: "These saddlebags, meticulously crafted by the elusive 'Claimed,' shimmer with an internal light, constantly shifting through a kaleidoscope of pastel hues. Each bag holds up to 20 units of supplies and subtly adjusts its size based on the wearer’s need for storage – truly a generous offering from the plains.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750,
        icon: '🎒',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased carrying capacity (+10)",
            "minor speed boost (5%)",
            "resistance to minor weather effects"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Pegasus Courier',
        levelRequirement: 15
    },

    'equestrian_item_mk_24_generous_book': {
        id: 'equestrian_item_mk_24_generous_book',
        name: "Mk.24 Generous Book of Echoed Whispers",
        description: "Bound in the hide of a particularly wise griffin, this hefty tome pulses with faint magical energy. Its pages contain transcribed fragments of ancient pony prophecies and offers glimpses into possible futures – though deciphering them often yields cryptic and confusing results.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1800,
        icon: '📖',
        stock: 9,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance to gain prophetic visions (15%)",
            "increased intelligence (+3)",
            "ability to understand basic griffin language"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Griffon Express',
        levelRequirement: 30
    },

    'equestrian_item_the_harmonious_service_scroll': {
        id: 'equestrian_item_the_harmonious_service_scroll',
        name: "The Harmonious Service Scroll of Balanced Momentum",
        description: "This intricately illustrated scroll, commissioned by Princess Twilight herself, isn't merely a piece of parchment; it’s a carefully calibrated ritual. Performing the depicted gestures creates a localized wave of harmonic energy, momentarily stabilizing chaotic situations and bolstering allies’ defenses – a vital service for any party.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 3500,
        icon: '📜',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "instantaneous healing (10 HP)",
            "temporary shield (+20 defense)",
            "boosts teamwork effectiveness"
        ],
        vendor: 'crystal_empire_guild',
        shippedBy: 'Royal Messenger',
        levelRequirement: 45
    },

    'kivotos_item_chronoslip_stalker': {
        id: 'kivotos_item_chronoslip_stalker',
        name: "The Chronoslip Stalker Uniform",
        description: "This unsettlingly muted grey uniform shifts subtly in the light, rumored to briefly rewind the wearer’s immediate actions – a useful tool for avoiding embarrassing stumbles or correcting minor mistakes. Crafted from synthesized academy fabric and imbued with temporal distortion tech, it offers a fleeting advantage in reactive situations.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '⏳',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "briefly rewind action (5s)",
            "reduce stammer by 10%",
            "increased reaction speed (2%)",
            "chance to trigger temporal distortion effect (1%)"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery',
        levelRequirement: 25
    },

    'kivotos_item_lost_resonance_stalker': {
        id: 'kivotos_item_lost_resonance_stalker',
        name: "The Lost Resonance Stalker’s Visor",
        description: "A sleek, obsidian visor that amplifies the wearer's perception of chaotic data streams – a constant barrage of Academy City’s information flow. It grants access to fragmented memories and glimpses into student thoughts, but prolonged use can induce disorientation and mental fatigue.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 950,
        icon: '👁️',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "increased data processing speed (15%)",
            "chance to detect hidden messages (5%)",
            "minor disorientation effect (3% chance per turn)",
            "passive ability: glimpse student thoughts (short range)"
        ],
        vendor: 'club_supply',
        shippedBy: 'Courier Delivery',
        levelRequirement: 18
    },

    'kivotos_item_mk72_transfer_uniforms': {
        id: 'kivotos_item_mk72_transfer_uniforms',
        name: "Mk.72 Transfer Uniforms - Phase Shift Edition",
        description: "These stark white uniforms are designed for rapid personnel transfer across Academy City’s network of interconnected hallways, utilizing short-range phase displacement technology. While stylish and efficient, unauthorized use can trigger alarms and attract unwanted attention from the academy security.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5200,
        icon: '⚡',
        stock: 9,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "instantaneous hallway transfer (short range)",
            "phase shift – brief invisibility (3s, 20% chance)",
            "increased movement speed (15%)",
            "automatic alarm trigger if used incorrectly"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Secure Delivery Drone',
        levelRequirement: 40
    },

    'grand_country_item_angular_resonance_speaker': {
        id: 'grand_country_item_angular_resonance_speaker',
        name: "The Yielding Speaker's Angular Resonator",
        description: "This obsidian speaker, carved from the heart of a climbing spire, emits a low hum that momentarily shifts the gravitational pull within a small radius. Its yielding surface allows it to seamlessly integrate into vertical structures, amplifying your movements with subtle directional force.  Listen closely - it whispers secrets of the ascending paths.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔊',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases movement speed by 10%",
            "provides minor directional force boost",
            "chance to trigger a brief gravity shift (15%)",
            "reduces climbing stamina consumption by 20%"
        ],
        vendor: 'side_seller',
        shippedBy: 'gravity_drone',
        levelRequirement: 25
    },

    'grand_country_item_mk_74_layered_stability_platform': {
        id: 'grand_country_item_mk_74_layered_stability_platform',
        name: "Mk.74 Layered Stability Platform – The Ascendant’s Grip",
        description: "Forged from solidified, angular strata and reinforced with ancient climbing resin, this platform provides unparalleled stability on even the most precarious vertical surfaces.  Its layered construction adapts to shifting terrain, offering a secure base for traversing dizzying heights. A faint, rhythmic pulse emanates from its core – a testament to its engineered resilience.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🛗',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "significantly increases climbing speed by 30%",
            "provides a temporary anchor point for grappling hooks",
            "resistance to falling damage (50%)",
            "automatic stabilization on uneven surfaces"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'sky_cart',
        levelRequirement: 40
    },

    'grand_country_item_lumina_echo_speaker_shard': {
        id: 'grand_country_item_lumina_echo_speaker_shard',
        name: "The Lumina Echo Speaker Shard - Fractured Resonance",
        description: "A fragment of a colossal, naturally formed speaker – shattered during a cataclysmic climb. This shard pulses with faint bioluminescence and emits fractured echoes, briefly revealing pathways through otherwise obscured vertical surfaces. Its angular edges offer a precarious but potentially rewarding grip.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4500,
        icon: '✨',
        stock: 8,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "reveals hidden climbing routes (chance-based)",
            "emits a disorienting sound that can confuse enemies",
            "slightly increases vertical jump height",
            "chance to generate a brief burst of light, revealing nearby objects"
        ],
        vendor: 'layer_market',
        shippedBy: 'phantom_delivery',
        levelRequirement: 50
    },

    'warhammer_item_the-rotting-skull-piercer': {
        id: 'warhammer_item_the-rotting-skull-piercer',
        name: "The Rotting Skull Piercer",
        description: "A grotesque icon crafted from the calcified remains of a colossal skull, pulsating with a sickly green ichor. When activated, it unleashes a wave of agonizing decay, slowly consuming the target's vitality and corroding their armor.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 875,
        icon: '💀',
        stock: 33,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Deals 100 damage over 5 turns.",
            "Applies 'Rotting' status effect (reduces armor by 2)",
            "Chance to inflict 'Weakness' on hit.",
            "Causes a faint, unsettling stench."
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'winged-skull-courier',
        levelRequirement: 15
    },

    'warhammer_item_runic-shadow-beacon-service': {
        id: 'warhammer_item_runic-shadow-beacon-service',
        name: "Runic Shadow Beacon Service",
        description: "A complex, obsidian device inscribed with pulsing runic symbols and perpetually radiating a field of impenetrable darkness. Upon activation, this service immediately projects an illusory shadow duplicate of the user, capable of distracting enemies and absorbing attacks for one turn.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 12500,
        icon: '🌑',
        stock: 1,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Creates a temporary shadow duplicate of the user.",
            "The shadow absorbs 50% of incoming damage for one turn.",
            "Increases evasion by 10% during service duration.",
            "Causes brief moments of disorientation in nearby enemies."
        ],
        vendor: 'fate_forge',
        shippedBy: 'dimensional-rift-portal',
        levelRequirement: 35
    },

    'warhammer_item_mk.49-corrupted-chronal-icon': {
        id: 'warhammer_item_mk.49-corrupted-chronal-icon',
        name: "Mk.49 Corrupted Chronal Icon",
        description: "A shattered, violet icon resonating with fractured temporal energies, radiating an unsettling chill.  This device allows for a single, precise rewind of time – but at the cost of intensifying the surrounding chaos and attracting the attention of entities from beyond the veil.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 45000,
        icon: '⏳',
        stock: 12,
        rarity: 'legendary',
        stockType: 'back_order',
        effects: [
            "Rewinds time by 3 seconds.",
            "Chance to summon a minor temporal anomaly (random effect).",
            "Increases critical hit chance by 5% for one turn.",
            "Causes the immediate collapse of nearby structures."
        ],
        vendor: 'imperial_armory',
        shippedBy: 'time-stream-express',
        levelRequirement: 48
    },

    'connectopia_item_hexagonal_chronometer_drinker': {
        id: 'connectopia_item_hexagonal_chronometer_drinker',
        name: "The Chronometric Hexa-Drinker",
        description: "This intricate, cubic device pulses with temporal energy, allowing the user to briefly accelerate or decelerate their mining speed. Crafted from solidified chronal fragments and polished basalt, it’s a vital tool for extracting resources quickly – but be careful not to unravel the fabric of time!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '⏳',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increases mining speed by 20% for 15 seconds",
            "chance to generate temporal echoes (small resource boosts)",
            "reduces pickaxe durability slightly"
        ],
        vendor: 'craft_corner',
        shippedBy: 'hovercraft',
        levelRequirement: 15
    },

    'connectopia_item_imperial_geode_pickaxe': {
        id: 'connectopia_item_imperial_geode_pickaxe',
        name: "The Imperial Geode-Striker",
        description: "Forged from compressed imperial granite and inlaid with shimmering geodes, this pickaxe delivers immense power to shatter even the hardest rock formations. Its rhythmic vibration resonates with the planet's core, providing a steady stream of energy – though prolonged use can induce unsettling geological visions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '⛏️',
        stock: 8,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "significantly increased mining speed",
            "chance to discover rare mineral deposits",
            "provides a small amount of earth energy regeneration"
        ],
        vendor: 'block_smith',
        shippedBy: 'automated drone',
        levelRequirement: 30
    },

    'connectopia_item_quantum_resonance_curiosity': {
        id: 'connectopia_item_quantum_resonance_curiosity',
        name: "The Resonant Echo-Stalker",
        description: "This enigmatic device, constructed from layered quartz and salvaged quantum relays, emits a faint, unsettling hum. It passively detects residual energy signatures within the surrounding blocks – useful for locating hidden veins or forgotten tunnels. However, prolonged exposure can cause auditory hallucinations and existential dread.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '🌀',
        stock: 1,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "reveals hidden mineral deposits within a radius of 5 blocks",
            "chance to trigger temporal anomalies (small resource boosts or setbacks)",
            "provides a slight bonus to block stability"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'delivery_only',
        levelRequirement: 45
    },

    'equestrian_item_crimson_echoes_of_elemental_lord': {
        id: 'equestrian_item_crimson_echoes_of_elemental_lord',
        name: "Crimson Echoes of Elemental Lord Phlox",
        description: "These pulsating apples, harvested from trees touched by Discord's dread laughter, grant a fleeting glimpse into the raw chaos of the elements. Consume them with caution – whispers of forgotten timelines and fragmented memories linger within their crimson flesh.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 875,
        icon: '🍎',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Grants +3 Dexterity for 60 seconds",
            "Chance to inflict ‘Confusion’ on a single target",
            "Minor chance of temporary stat reduction (Strength, Wisdom)"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Pegasus Post',
        levelRequirement: 15
    },

    'equestrian_item_chronal_apple_of_the_lost_lord_marlin': {
        id: 'equestrian_item_chronal_apple_of_the_lost_lord_marlin',
        name: "Chronal Apple of the Lost Lord Marlin",
        description: "A shimmering, lavender apple discovered near the ruins of Mount Silvanus. This fruit subtly alters your perception of time, allowing you to briefly rewind a single action – a perfect dodge, a crucial shot. Beware though, prolonged use risks becoming trapped in an endless loop.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1750,
        icon: '⏳',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Allows the user to rewind their last action once per day.",
            "+2 Temporal Resistance",
            "Chance of creating a minor time anomaly (brief visual distortion)"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Guard Courier',
        levelRequirement: 30
    },

    'equestrian_item_sunstone_lord_valerian_essence': {
        id: 'equestrian_item_sunstone_lord_valerian_essence',
        name: "Sunstone Lord Valerian Essence Apples",
        description: "These golden apples, grown within the heart of a forgotten sunstone grove, radiate an intense warmth and grant resilience against chilling magic. Each bite pulses with restorative energy, but carries the faint scent of ancient sorrow.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 6500,
        icon: '☀️',
        stock: 12,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Restores 80 HP and 40 Mana over 60 seconds",
            "+5 Fire Resistance",
            "Chance to dispel minor frost effects"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Griffon Express',
        levelRequirement: 50
    },

    'earth_land_item_chronometric_whisperer_seeker': {
        id: 'earth_land_item_chronometric_whisperer_seeker',
        name: "The Chronometric Whisperer's Seeker",
        description: "This intricately carved bone scroll contains echoes of temporal energies, allowing the user to briefly perceive alternate timelines and anticipate immediate danger. Holding it grants a shimmering aura that subtly shifts reality around you, offering glimpses of potential outcomes – though the visions are often fragmented and confusing.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '⏳',
        stock: 12,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "Temporal Perception (Increases reaction time by 15%)",
            "Probability Shift (Minor chance to alter enemy attack rolls)",
            "Echoes of Time (Provides a faint, ethereal vision of the next 3 seconds)"
        ],
        vendor: 'magic_shop',
        shippedBy: 'air_ship',
        levelRequirement: 35
    },

    'earth_land_item_lithic_resonance_curiosity': {
        id: 'earth_land_item_lithic_resonance_curiosity',
        name: "The Lithic Resonance Curator's Manifestation",
        description: "A crystalline orb pulsing with the slow rhythm of the earth’s core, this artifact allows for a momentary connection to geological memories. Gazing into its depths reveals scenes of ancient plate tectonics and forgotten volcanic eruptions – a truly humbling experience.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '💎',
        stock: 5,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "Geological Awareness (Grants bonus to perception checks related to earth and stone)",
            "Resonance Link (Provides minor protection against seismic activity)",
            "Temporal Echoes (Briefly displays a geological event from the past)"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'ground_sled',
        levelRequirement: 48
    },

    'earth_land_item_divine_harmonic_seeker': {
        id: 'earth_land_item_divine_harmonic_seeker',
        name: "The Divine Harmonic Seeker's Anthem",
        description: "This silver flute, etched with runes of celestial alignment, resonates with the very fabric of magical energy. Playing a melody from the instrument generates a protective barrier of harmonic frequencies, capable of deflecting spells and bolstering courage.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 550,
        icon: '🎶',
        stock: 88,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Harmonic Shield (Deflects magical attacks)",
            "Courage Surge (Increases confidence and resistance to fear)",
            "Resonant Aura (Minor healing effect)"
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'pony_express',
        levelRequirement: 15
    },

    'middle_earth_item_the_silvan_rune_of_whispering_winds': {
        id: 'middle_earth_item_the_silvan_rune_of_whispering_winds',
        name: "The Silvan Rune of Whispering Winds",
        description: "This intricately carved rune, imbued with the essence of Lothlórien’s ancient forests, allows the wielder to briefly command a localized breeze, capable of extinguishing small flames or scattering enemies. It pulses with a faint, spectral green light reminiscent of elven magic.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 750,
        icon: '💨',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "creates a small gust of wind (5 seconds)",
            "chance to extinguish fire",
            "slows enemy movement speed slightly",
            "provides +2 to stealth checks"
        ],
        vendor: 'elven_market',
        shippedBy: 'Winged Courier',
        levelRequirement: 15
    },

    'middle_earth_item_dwarven_maker_of_stone_echoes': {
        id: 'middle_earth_item_dwarven_maker_of_stone_echoes',
        name: "Dwarven Maker's Runes of Stone Echoes",
        description: "Forged deep within the abandoned halls of Moria, these runes resonate with the echoes of ancient dwarven craftsmanship. When activated, they produce a localized sonic pulse, capable of stunning foes and revealing hidden passages in stone.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔊',
        stock: 8,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "releases a concussive blast (moderate damage)",
            "stuns nearby enemies for 3 seconds",
            "+2 to mining checks",
            "reveals hidden stone walls within a small radius"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'Stone Cart',
        levelRequirement: 30
    },

    'middle_earth_item_shire_maker_of_forgotten_songs': {
        id: 'middle_earth_item_shire_maker_of_forgotten_songs',
        name: "Shire Maker’s Runes of Forgotten Songs",
        description: "These delicate runes, recovered from a hobbit's abandoned music box, possess the lingering echoes of old Shire melodies. When activated, they can briefly instill a sense of tranquility in those nearby, or conversely, induce a state of confusion.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 900,
        icon: '🎵',
        stock: 15,
        rarity: 'epic',
        stockType: 'delivery_only',
        effects: [
            "restores a small amount of sanity (5 points)",
            "chance to confuse enemies for 2 seconds",
            "+3 to persuasion checks",
            "reduces movement speed of nearby enemies"
        ],
        vendor: 'shire_shop',
        shippedBy: 'Rolling Cart',
        levelRequirement: 45
    },

    'teyvat_item_chronometric_resonance_seeker': {
        id: 'teyvat_item_chronometric_resonance_seeker',
        name: "The Chronometric Resonance Seeker's Oculi",
        description: "This obsidian oculi pulses with temporal energy, faintly echoing the rhythm of the Archons’ decrees. When activated, it grants brief glimpses into possible future timelines centered around the user's current actions, offering a tactical advantage – but beware, prolonged use can induce disorientation and fractured memories.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '⏳',
        stock: 37,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Grants brief glimpses of potential future timelines.",
            "Increases tactical awareness for 15 seconds.",
            "Chance to inflict Temporal Distortion on enemy attacks (10%)",
            "Reduces movement speed by 5% if used excessively."
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'Sky Courier',
        levelRequirement: 32
    },

    'teyvat_item_hydro_xenolithic_fragment_seeker': {
        id: 'teyvat_item_hydro_xenolithic_fragment_seeker',
        name: "The Hydro-Xenolithic Fragment Seeker",
        description: "A jagged, hydro-infused fragment of xenolithic stone unearthed from the depths beneath Liyue Harbor. It thrums with latent aquatic energy and is said to resonate with the flow of water manipulated by the Geo Archon. Holding it allows you to briefly manipulate nearby currents for tactical advantage.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1800,
        icon: '💧',
        stock: 72,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "Creates a localized hydro current for 5 seconds.",
            "Increases movement speed by 10% while submerged.",
            "Provides resistance to hydro damage (20%)",
            "Restores minor HP over time (5HP/s)"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'Sea Freight',
        levelRequirement: 20
    },

    'teyvat_item_storm_herald_faction_amulet': {
        id: 'teyvat_item_storm_herald_faction_amulet',
        name: "The Storm Herald’s Amulet of Inazuma Accord",
        description: "Forged in the heart of an ancient storm by the pirates of Inazuma, this amulet pulses with residual lightning energy and is a symbol of allegiance to the Shogun's forces. Wearing it grants temporary control over minor electrical disturbances but risks attracting unwanted attention from the Yatagarasu.",
        category: SHOP_CATEGORIES.FACTION,
        price: 9000,
        icon: '⚡',
        stock: 15,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Summons a localized lightning strike (small area of effect)",
            "Provides increased resistance to electro-based attacks (40%)",
            "Increases attack speed by 5% during thunderstorms.",
            "Grants access to a unique Inazuma Pirate faction quest."
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'Sea Serpent Express',
        levelRequirement: 48
    },

    'doughnut_hole_item_obsidian_chronal_guardian': {
        id: 'doughnut_hole_item_obsidian_chronal_guardian',
        name: "The Chronal Obsidian Guardian’s Echo",
        description: "A pulsating shard of solidified temporal energy, radiating a faint chronometric hum. When consumed, it briefly slows your perception of time around you, granting an advantage in combat or allowing for intricate maneuvers – but prolonged use risks fracturing the present.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '⏳',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "slows perception of time (10%)",
            "increased evasion chance (5%)",
            "minor temporal distortion effect – enemies briefly flicker out of existence."
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Void Courier Drone',
        levelRequirement: 15
    },

    'doughnut_hole_item_mk_89_warp_distortion_center': {
        id: 'doughnut_hole_item_mk_89_warp_distortion_center',
        name: "The Mk.89 Distortion Center Warpstone",
        description: "A jagged, obsidian stone riddled with swirling purple energy – a remnant of a collapsed dimensional rift near the center. Touching it briefly destabilizes the surrounding reality, allowing for short-range teleportation to any point within 10 meters, but severe spatial disorientation is possible.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 925,
        icon: '🌀',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "short-range teleportation (10m)",
            "chance of spatial disorientation – reduced movement speed for 3 seconds.",
            "minor dimensional bleed effect - chance to inflict a minor void damage on contact."
        ],
        vendor: 'center_seller',
        shippedBy: 'Dimensional Folding Apparatus',
        levelRequirement: 30
    },

    'doughnut_hole_item_null_guardian_warps_72': {
        id: 'doughnut_hole_item_null_guardian_warps_72',
        name: "The Null Guardian Warps - Seventh Cycle",
        description: "Seven perfectly formed, swirling nulls encased in a shimmering shell of compressed void energy. These warps offer instantaneous travel to designated locations within the center anomaly but require precise calibration and can cause severe neurological feedback if improperly utilized.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1875,
        icon: '🌌',
        stock: 9,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "instantaneous teleportation (30m)",
            "risk of neurological feedback – chance to inflict confusion or temporary paralysis.",
            "minor void resonance amplification - increases item durability."
        ],
        vendor: 'void_vendor',
        shippedBy: 'Quantum Entanglement Relay',
        levelRequirement: 45
    },

    'faerun_item_the_stonehaven_ward': {
        id: 'faerun_item_the_stonehaven_ward',
        name: "The Stonehaven Ward of Echoing Valor",
        description: "This intricately carved ring, pulsing with faint geothermal energy, grants the wearer a temporary connection to ancient dwarven battle strategies. It whispers tactical advice during combat, bolstering your resolve and granting advantage on initiative rolls.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🛡️',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "advantage on initiative rolls for 3 rounds",
            "grants a brief tactical insight (reveals enemy weaknesses)",
            "increases defensive AC by 1 temporarily",
            "chance to trigger a faint dwarven battle cry"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'Griffon Courier',
        levelRequirement: 25
    },

    'faerun_item_the_sunken_seraphs_confection': {
        id: 'faerun_item_the_sunken_seraphs_confection',
        name: "The Sunken Seraphs' Confection of Aqueous Resilience",
        description: "A glistening, iridescent jelly crafted from the tears of a drowned seraph and solidified seafoam. This consumable restores vitality and grants temporary resistance to water damage, accompanied by a faintly mournful song.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '💧',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "restores 3d6 hit points",
            "grants temporary resistance to cold and water damage (4 rounds)",
            "causes a brief, melancholic song to play (disadvantage on stealth checks for 1 round)",
            "slightly alters the taste of all food consumed for 1 hour"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'Sea Serpent Delivery',
        levelRequirement: 18
    },

    'faerun_item_the_eldritch_chronarium_shard': {
        id: 'faerun_item_the_eldritch_chronarium_shard',
        name: "The Eldritch Chronarium Shard - Phase Fracture",
        description: "A pulsating, obsidian shard imbued with fragments of a shattered temporal gateway. Holding this item creates a momentary distortion in spacetime, allowing for brief relocation – but beware its unpredictable nature.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7500,
        icon: '⏳',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "Allows the user to teleport up to 30 feet in a random direction (once per day)",
            "Has a 25% chance to inflict temporary confusion on target",
            "Increases magical resistance by 10 for 1 round",
            "Emits a faint, unsettling temporal distortion (disadvantage on perception checks)"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'Celestial Messenger',
        levelRequirement: 45
    },

    'the_edge_item_chronal_echoes_finder': {
        id: 'the_edge_item_chronal_echoes_finder',
        name: "The Chronal Echoes Finder - Mk.27",
        description: "This unsettling device hums with fragmented timelines, allowing the user to briefly perceive echoes of moments long lost within the endless expanse. Holding it grants a fleeting glimpse into alternate realities, though prolonged exposure risks unraveling one's own perception of time.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '⏳',
        stock: 7,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grants temporary precognition (3 turns)",
            "chance to trigger a minor temporal distortion",
            "reduces movement speed by 10% for 1 turn",
            "increases critical hit chance by 5%"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'gravitic_drone',
        levelRequirement: 32
    },

    'the_edge_item_umbral_resonance_whisperer': {
        id: 'the_edge_item_umbral_resonance_whisperer',
        name: "The Umbral Resonance Whisperer - Variant IX",
        description: "Crafted from solidified shadow and distorted sound, this device amplifies the faintest vibrations within the abyssal void. It allows the user to briefly communicate with entities existing beyond normal comprehension – though their intentions are rarely benevolent.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '🌑',
        stock: 25,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "chance to inflict ‘phantom pain’ on a target (10%)",
            "allows limited communication with void entities",
            "increases resistance to fear effects",
            "provides a minor boost to stealth"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'automated_cart',
        levelRequirement: 20
    },

    'the_edge_item_forbidden_void_diverger': {
        id: 'the_edge_item_forbidden_void_diverger',
        name: "The Forbidden Void Diverger - Prototype 42",
        description: "This unsettling artifact allows brief, unstable passage *into* the most dangerous regions of the Edge. Holding it causes a localized rupture in reality, briefly exposing the user to raw chaos and potential annihilation – a terrifying gamble for knowledge or power.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 65000,
        icon: '🌀',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "chance to be teleported a random distance (75%)",
            "deals heavy damage to the user upon activation",
            "grants temporary immunity to all status effects",
            "increases critical hit damage by 20%"
        ],
        vendor: 'final_shop',
        shippedBy: 'dimensional_portal',
        levelRequirement: 50
    },

    'faerun_item_crimson_helm_bearer_of_aethelred': {
        id: 'faerun_item_crimson_helm_bearer_of_aethelred',
        name: "Crimson Helm Bearer of Aethelred",
        description: "This helm, forged from the scales of a desert drake and blessed by the god of war, grants the wearer heightened aggression and resilience against piercing damage. The crimson hue pulses with faint arcane energy, reflecting the battle-hardened legacy of Aethelred the Bold.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8750,
        icon: '🛡️',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases attack damage by 15%",
            "grants +5 armor class",
            "chance to inflict bleeding on successful attacks",
            "resistance to piercing damage"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'dragon_delivery',
        levelRequirement: 25
    },

    'faerun_item_dread_orb_of_the_shadow_weaver': {
        id: 'faerun_item_dread_orb_of_the_shadow_weaver',
        name: "Dread Orb of the Shadow Weaver",
        description: "A pulsating obsidian sphere imbued with the essence of a banished shadow demon, this orb exudes an aura of fear and subtly manipulates shadows to conceal the wearer. Its touch induces paranoia and weakens the resolve of nearby enemies.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '🌑',
        stock: 8,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "reduces enemy accuracy by 20%",
            "grants +3 to stealth checks",
            "chance to inflict fear on enemies within range",
            "creates a small area of darkness"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'night_hawk_express',
        levelRequirement: 40
    },

    'faerun_item_sylvari_shard_of_the_evergreen_god': {
        id: 'faerun_item_sylvari_shard_of_the_evergreen_god',
        name: "Sylvari Shard of the Evergreen God",
        description: "A fragment of a colossal, ancient tree worshipped by the Sylvari, this shard radiates an aura of life and growth. Holding it allows for minor healing and provides a connection to the natural world, bolstering resilience.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 5500,
        icon: '🌿',
        stock: 67,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "restores 2d8 health upon use",
            "increases maximum hit points by 50",
            "grants resistance to poison damage",
            "provides temporary advantage on survival checks"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'golem_carriers',
        levelRequirement: 30
    },

    'grand_country_item_luminescent_gravity_hook': {
        id: 'grand_country_item_luminescent_gravity_hook',
        name: "The Chronometric Weaver's Hook - Gifted",
        description: "This shimmering hook, forged from solidified temporal currents, subtly manipulates the localized flow of gravity. It can momentarily reverse its effect on a single object or construct a miniature gravitational well for trapping small creatures – but beware, extended use risks destabilizing the immediate layer.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8700,
        icon: '⏳',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Temporarily reverse gravity on a single target.",
            "Creates a small gravitational field (limited duration).",
            "Increases agility by 10% for 30 seconds.",
            "Chance to briefly slow time within the affected area."
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'gravitic_drone',
        levelRequirement: 35
    },

    'grand_country_item_layered_resonance_shard': {
        id: 'grand_country_item_layered_resonance_shard',
        name: "The Echoing Spore Shard – Layered",
        description: "A fragment of solidified resonance harvested from the deepest, most layered caverns. Holding this shard causes a faint echo to reverberate through your mind, revealing fragmented memories and potential pathways within adjacent layers - but prolonged exposure can induce disorientation.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🍄',
        stock: 33,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Grants a brief glimpse into the surrounding layers.",
            "Increases perception by 5% for 60 seconds.",
            "Chance to trigger a minor resonance burst (small damage).",
            "Can be used to decipher complex layered patterns."
        ],
        vendor: 'layer_market',
        shippedBy: 'dimensional_packet',
        levelRequirement: 20
    },

    'grand_country_item_forbidden_gravity_artifact': {
        id: 'grand_country_item_forbidden_gravity_artifact',
        name: "The Null-Anchor - Gifted",
        description: "A disturbing device of unknown origin, the Null-Anchor subtly drains gravity from its vicinity. Prolonged use can cause objects to float uncontrollably and disrupt spatial coherence – a dangerous tool for those unfamiliar with its volatile properties.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 35000,
        icon: '🌀',
        stock: 1,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "Creates a localized zone of zero gravity.",
            "Reduces the weight of objects by 50%.",
            "Chance to temporarily phase through solid matter.",
            "Risk of uncontrolled gravitational fluctuations."
        ],
        vendor: 'side_seller',
        shippedBy: 'black_portal',
        levelRequirement: 50
    },

    'internet_item_hyperlinked_phantom_speaker': {
        id: 'internet_item_hyperlinked_phantom_speaker',
        name: "The Yielding Speaker's Hashes - Phantom Echoes",
        description: "This obsidian speaker, salvaged from a defunct server farm in the Eastern Data Streams, emits fragmented meme-audio. When activated, it yields distorted whispers of forgotten viral trends and phantom echoes of internet personalities.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🔊',
        stock: 5,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Increases meme recognition by 30%",
            "Chance to trigger a temporary viral trend (low chance)",
            "Provides minor audio distortion resistance",
            "Grants +2 Charisma with digital entities"
        ],
        vendor: 'cyber_market',
        shippedBy: 'drone_delivery',
        levelRequirement: 30
    },

    'internet_item_78_bit_meme_manifest': {
        id: 'internet_item_78_bit_meme_manifest',
        name: "Mk.78 Downloaded Hashes - The Glitched Meme Manifest",
        description: "A shimmering, unstable cube composed of compressed meme fragments – a literal download of viral insanity.  Holding this manifests a brief, chaotic visual echo of the most popular internet memes of a bygone era.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '😵‍💫',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Temporarily grants ‘Meme-Induced Confusion’ (chance of temporary paralysis)",
            "Increases speed by 10% for 60 seconds",
            "Small chance to inflict ‘Reaction Fatigue’ on enemies",
            "Reduces processing lag by 5%"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'packet_delivery',
        levelRequirement: 15
    },

    'internet_item_compressed_reaction_speaker': {
        id: 'internet_item_compressed_reaction_speaker',
        name: "The Downloaded Hashes - Reaction Amplifier",
        description: "This intricately carved speaker, recovered from a defunct data hub, pulses with harvested reaction data. It amplifies the user's emotional response to stimuli – perfect for provoking chaos or fueling intense engagement.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5800,
        icon: '🔥',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Increases damage dealt by 15% when provoked by strong emotions",
            "Grants bonus to persuasion rolls related to emotional manipulation",
            "Provides a small chance to trigger ‘Emotional Feedback’ on enemies",
            "Reduces the duration of fear effects by 20%"
        ],
        vendor: 'data_dealer',
        shippedBy: 'encrypted_beam',
        levelRequirement: 45
    },

    'grand_country_item_crimson_helix_born': {
        id: 'grand_country_item_crimson_helix_born',
        name: "The Crimson Helix Born",
        description: "This spiraling, tiered structure pulses with a faint heat, drawing climbers higher into the treacherous, layered peaks. It offers temporary adhesion to any surface, allowing for rapid ascent and unparalleled maneuverability within the chaotic formations. Beware its insistent, echoing whispers – prolonged contact induces unsettling vertigo.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '⛰️',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased climbing speed",
            "temporary vertigo resistance",
            "enhanced grip strength",
            "minor spatial awareness boost"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'gravity_cart',
        levelRequirement: 25
    },

    'grand_country_item_tainted_whisper_lifts': {
        id: 'grand_country_item_tainted_whisper_lifts',
        name: "The Tainted Whisper Lifts",
        description: "These rusted, tiered lifts are remnants of a forgotten expedition - the metal is saturated with a strange, iridescent film and emits a constant, unsettling whisper. Each ride subtly alters the user's perception of depth and direction, potentially leading them astray into the labyrinthine peaks. It’s rumored these lifts were built by the Silent Layer Collective.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '👻',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "minor disorientation",
            "illusionary whispers",
            "chance of temporary madness (10%)",
            "boosted perception for one turn"
        ],
        vendor: 'side_seller',
        shippedBy: 'shadow_drone',
        levelRequirement: 18
    },

    'grand_country_item_chronal_shard_7_born': {
        id: 'grand_country_item_chronal_shard_7_born',
        name: "Mk.7 Chronal Shard Born",
        description: "This fragment of solidified time is a jagged, tiered crystal, radiating temporal instability. Holding it allows for brief manipulation of localized time flow - accelerating your movements or momentarily slowing down attackers. However, overuse risks creating paradoxical distortions and attracting the attention of the Layer Guardians.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '⏳',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "temporal acceleration (short bursts)",
            "localized time slowing",
            "chance of creating minor temporal paradoxes",
            "increased reaction speed"
        ],
        vendor: 'layer_market',
        shippedBy: 'dimensional_relay',
        levelRequirement: 45
    },

    'middle_earth_item_the_songwood_gift': {
        id: 'middle_earth_item_the_songwood_gift',
        name: "The Songwood Gifted's Lembas Bread",
        description: "A yielding, golden-brown lembas crafted from the heart of a songwood tree, infused with ancient elven melodies.  Each bite offers sustenance and whispers of forgotten tales, bolstering resilience against the shadow’s touch.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🍞',
        stock: 67,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "restores 50 health",
            "increases stamina by 20%",
            "provides minor resistance to shadow magic"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_express',
        levelRequirement: 15
    },

    'middle_earth_item_mk82_mithril_shard': {
        id: 'middle_earth_item_mk82_mithril_shard',
        name: "Mk.82 Mithril Shard of Rivendell’s Echoes",
        description: "A jagged shard of mithril, resonating with the fading echoes of Rivendell's council.  Holding it grants brief glimpses into past conversations and strategic insights, though prone to fractured visions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '💎',
        stock: 9,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "provides +3 to perception",
            "chance to trigger ‘Echoes of Wisdom’ (brief tactical insight)",
            "slightly increases resistance to illusion magic"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_horse',
        levelRequirement: 30
    },

    'middle_earth_item_the_gondorian_aegis_gift': {
        id: 'middle_earth_item_the_gondorian_aegis_gift',
        name: "The Gondorian Aegis Gifted's Wardstone",
        description: "A shimmering, obsidian wardstone crafted in the style of Gondor’s finest smiths. When activated, it emits a protective aura, shielding the wearer from harm and bolstering their defenses against dark forces.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🛡️',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "provides a 15% shield boost",
            "chance to block powerful attacks",
            "reduces damage taken from undead by 20%",
            "grants passive resistance to fear effects"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'dragon_airmail',
        levelRequirement: 45
    },

    'earth_land_item_chronometric_sand_piercer': {
        id: 'earth_land_item_chronometric_sand_piercer',
        name: "The Waning Chronometric Sand Piercer",
        description: "A meticulously crafted timepiece carved from solidified temporal eddies found within the Frozen Wastes. When activated, it briefly slows time around the wielder, allowing for unparalleled precision in combat or delicate tasks – but prolonged use risks fracturing your own perception of reality.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '⏳',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "slows time by 20% for 3 seconds",
            "increased accuracy by 15%",
            "chance to cause temporal distortion (brief visual blur)",
            "stamina regeneration increased by 5%"
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'express_delivery',
        levelRequirement: 20
    },

    'earth_land_item_geode_cartographers_curiosity': {
        id: "earth_land_item_geode_cartographer's_curiosity",
        name: "The Geode of Cartographic Resonance",
        description: "A pulsating geode discovered deep within a collapsing cavern, it contains fragmented maps of forgotten pathways and lost settlements. Touching the geode briefly overlays a ghostly projection onto your vision, revealing hidden routes and potential dangers – though its guidance is notoriously fickle and prone to misleading illusions.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🗺️',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "reveals hidden paths within a 30-meter radius (briefly)",
            "chance to reveal location of rare materials",
            "increased perception by 10%",
            "minor resistance to disorientation effects"
        ],
        vendor: 'magic_shop',
        shippedBy: 'standard_shipping',
        levelRequirement: 15
    },

    'earth_land_item_the_silent_observer_tome': {
        id: 'earth_land_item_the_silent_observer_tome',
        name: "The Silent Observer's Tome of Echoing Shadows",
        description: "Bound in blackened dragon hide and filled with cryptic diagrams, this tome seemingly records the movements of unseen entities. When opened near a location with significant magical activity, it projects faint, ephemeral shadows that mimic past events – offering glimpses into forgotten rituals or dangerous encounters.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '👁️',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "reveals spectral echoes of past events (limited range)",
            "chance to identify magical auras and their strengths/weaknesses",
            "increased intelligence by 10%",
            "grant passive bonus to investigation checks"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'delivery_only',
        levelRequirement: 35
    },

    'the_edge_item_crimson_echo_dancer': {
        id: 'the_edge_item_crimson_echo_dancer',
        name: "The Crimson Echo Dancer’s Shard",
        description: "This fractured fragment pulses with the residual screams of those who dared to linger at the precipice. Holding it grants a fleeting glimpse into the abyss's chaotic memories, potentially revealing paths unseen by mortal eyes—or driving you utterly mad.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '🔥',
        stock: 7,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "Temporarily increases Perception by 50%",
            "Chance to inflict 'Fractured Sanity' on enemies (10%)",
            "Grants a fleeting glimpse of hidden pathways",
            "Reduces damage taken from fear effects by 25%"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'Sky Serpent Courier',
        levelRequirement: 35
    },

    'the_edge_item_final_jeweled_resonator': {
        id: 'the_edge_item_final_jeweled_resonator',
        name: "The Final Jeweled Resonator of the Shattered Zenith",
        description: "Forged from solidified despair and crystallized dissonance, this device hums with a low, unsettling frequency. It amplifies existing emotional states – both yours and your enemies’ - turning rage into a blinding torrent, or fear into paralyzing terror.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🤯',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Increases Attack Damage by 30% for 15 seconds",
            "Causes enemies to become enraged (chance of 40%)",
            "Potentially induces fear in nearby weaker enemies.",
            "Grants a small chance to steal enemy emotions."
        ],
        vendor: 'edge_outpost',
        shippedBy: 'Automated Drone Delivery',
        levelRequirement: 28
    },

    'the_edge_item_mk.33_obsidian_whisperer': {
        id: 'the_edge_item_mk.33_obsidian_whisperer',
        name: "Mk.33 Obsidian Whisperer Fragment - Nullpoint",
        description: "A jagged shard of obsidian, pulsing with a faint darkness that seems to absorb all sound.  Holding it allows you to momentarily silence your surroundings and briefly communicate with the echoes of forgotten travelers lost at The Edge—but beware, their words are rarely comforting.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 5000,
        icon: '🤫',
        stock: 33,
        rarity: 'uncommon',
        stockType: 'delivery_only',
        effects: [
            "Grants temporary invisibility (3 seconds)",
            "Reduces noise generated by the character by 50%",
            "Allows brief communication with echoes of past travelers",
            "Increases resistance to psychic attacks."
        ],
        vendor: 'final_shop',
        shippedBy: 'Shadow Messenger',
        levelRequirement: 18
    },

    'warhammer_item_the-blessed-banners-of-war': {
        id: 'warhammer_item_the-blessed-banners-of-war',
        name: "The Blessed Banners of War – Serpent’s Coil",
        description: "These banners, stitched with the scales of ancient serpents and blessed by forgotten war gods, radiate an aura of aggressive command. When unfurled, they bolster nearby warriors' resolve and grant temporary resistance to fear effects, a testament to countless battles fought beneath their crimson hues.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8750,
        icon: '⚔️',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increases attack damage by 15% for 30 seconds",
            "grants temporary fear resistance",
            "boosts morale of nearby allies"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'aerial_delivery',
        levelRequirement: 28
    },

    'warhammer_item_the-ominous-keeper’s-banners': {
        id: 'warhammer_item_the-ominous-keeper’s-banners',
        name: "The Ominous Keeper’s Banners – Shadowweave Rite",
        description: "Woven from shadows and imbued with the despair of fallen generals, this banner pulses with an unsettling energy. Holding it grants a chilling presence that can demoralize enemies, while also offering protection against illusions and deceptive magic – a grim reminder of fates already sealed.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18900,
        icon: '💀',
        stock: 7,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "reduces enemy accuracy by 25% within a radius of 10 meters",
            "grants immunity to illusion magic",
            "causes fear in nearby enemies",
            "provides limited shadow camouflage"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'dimensional_rift',
        levelRequirement: 45
    },

    'warhammer_item_the-fate-forge-mk-99-service': {
        id: 'warhammer_item_the-fate-forge-mk-99-service',
        name: "The Fate Forge Mk.99 – Temporal Echo Service",
        description: "A meticulously crafted device, the Mk.99 allows for brief glimpses into potential timelines related to a chosen individual’s fate. This service provides a limited consultation—revealing fragments of possible futures but demanding an exorbitant fee and a significant personal sacrifice.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 65000,
        icon: '🔮',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "reveals a single potential future for the target (limited scope)",
            "requires a significant sacrifice of time or memories from the client",
            "can trigger unforeseen temporal paradoxes if misused"
        ],
        vendor: 'fate_forge',
        shippedBy: 'temporal_relay',
        levelRequirement: 50
    },

    'pokemon_item_twilight_cursed_serpent_tears': {
        id: 'pokemon_item_twilight_cursed_serpent_tears',
        name: "Twilight Cursed Serpent Tears",
        description: "These viscous, iridescent tears, harvested from nocturnal Serpent Pokémon in the Shadowfen marshes, grant temporary resistance to poison and inflict a debilitating curse upon your foe. They shimmer with an unsettling twilight glow, hinting at their dark origins.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 875,
        icon: '🧪',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grants poison resistance for 60 seconds",
            "inflicts curse (chance to lower speed)",
            "restores 25 HP",
            "increases evasion by 10%"
        ],
        vendor: 'pokemart',
        shippedBy: 'Wingull Delivery',
        levelRequirement: 25
    },

    'pokemon_item_Mk_26_Shiny_Echo_Elixirs': {
        id: 'pokemon_item_Mk_26_Shiny_Echo_Elixirs',
        name: "Mk.26 Shiny Echo Elixirs",
        description: "These meticulously crafted elixirs, recovered from the ruins of a forgotten laboratory beneath Mt. Silver, contain condensed echoes of Pokémon battles. Upon consumption, they grant a brief burst of speed and amplify your Pokémon’s natural abilities.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1800,
        icon: '✨',
        stock: 17,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "increases speed by 30% for 30 seconds",
            "boosts attack power by 5%",
            "restores 50 HP",
            "slightly increases critical hit chance"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Delivery Drone',
        levelRequirement: 38
    },

    'pokemon_item_Curiosity_Aetherium_Stone': {
        id: 'pokemon_item_Curiosity_Aetherium_Stone',
        name: "Curiosity Aetherium Stone",
        description: "This oddly warm, pulsating stone hums with a strange energy. Holding it allows you to briefly perceive faint traces of Pokémon evolution potential within other creatures – a captivating curiosity for any dedicated trainer.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5200,
        icon: '🔮',
        stock: 9,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "reveals a faint aura indicating evolution potential on target Pokémon (chance-based)",
            "provides +5 to insight stat",
            "slightly increases accuracy for one turn",
            "may trigger a brief, harmless temporal distortion."
        ],
        vendor: 'league_store',
        shippedBy: 'Magikarp Courier',
        levelRequirement: 45
    },

    'grand_country_item_the_crumbling_stone_singer': {
        id: 'grand_country_item_the_crumbling_stone_singer',
        name: "The Crumbling Stone Singer",
        description: "This ancient device, crafted from solidified doughnut crumb and meticulously layered with petrified sap, emits a haunting melody when wound. Its angular protrusions allow for precarious climbing, while the song seems to subtly shift the layers around you.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 780,
        icon: '🎶',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Increases climbing speed by 15%",
            "Plays a calming melody (reduces stress)",
            "Grants minor protection against falling damage",
            "Chance to reveal hidden crumb paths"
        ],
        vendor: 'side_seller',
        shippedBy: 'Doughnut Courier',
        levelRequirement: 15
    },

    'grand_country_item_the_helix_pulleys_of_distortion': {
        id: 'grand_country_item_the_helix_pulleys_of_distortion',
        name: "The Helix Pulleys of Distortion",
        description: "A complex system of interlocking pulleys, forged from solidified caramel and wrapped in shimmering sugar-glass. Rotating these pulleys creates localized distortions within the layers – momentarily shifting gravity or creating small pocket dimensions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1850,
        icon: '🌀',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Allows the user to briefly manipulate gravity in a small radius.",
            "Creates temporary pocket dimensions (small, unstable)",
            "Increases agility and reaction time",
            "Chance to trigger minor layer instability"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Sugarwind Express',
        levelRequirement: 30
    },

    'grand_country_item_mk.78_angular_gravity_ward_the_layered_singer': {
        id: 'grand_country_item_mk.78_angular_gravity_ward_the_layered_singer',
        name: "Mk.78 Angular Gravity Ward - The Layered Singer",
        description: "This epic gravity ward, constructed from fused angular layers of glazed dough and stabilized with ancient syrup, resonates with a low humming song.  It provides exceptional control over the surrounding layers – capable of anchoring you to impossible angles or creating localized gravitational fields.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8900,
        icon: '🛡️',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Provides significant resistance to gravity distortions.",
            "Allows the user to create a temporary gravitational anchor.",
            "Increases climbing ability dramatically (50%)",
            "Can briefly disrupt enemy movement"
        ],
        vendor: 'layer_market',
        shippedBy: 'Syrup Slingers',
        levelRequirement: 50
    },

    'doughnut_hole_item_inverted_tears_of_center_01': {
        id: 'doughnut_hole_item_inverted_tears_of_center_01',
        name: "Divine Dancer's Tears of the Rotting Heart",
        description: "These viscous tears, harvested from the deepest fissures within the center, pulse with a faint, inverted luminescence. When consumed, they briefly grant the user an unnervingly graceful movement and the ability to phase partially through solid matter for a single rotation, leaving behind only the scent of caramelized despair.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '✨',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grant_graceful_movement",
            "phasing_ability (1 rotation)",
            "decreased damage taken from melee attacks"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Void Conveyance Drone',
        levelRequirement: 25
    },

    'doughnut_hole_item_mk_48_inverted_tears_of_center_02': {
        id: 'doughnut_hole_item_mk_48_inverted_tears_of_center_02',
        name: "Mk.48 Inverted Tears of the Null Horizon",
        description: "Forged from the concentrated sorrow absorbed by the central void, these inverted tears are encased in a shell of solidified chronal distortion. Upon ingestion, they grant temporary access to fractured timelines – allowing the user to briefly glimpse alternate realities and perform actions with a subtle temporal displacement effect.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '⏳',
        stock: 17,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "temporal_displacement (short duration)",
            "brief glimpses of alternate timelines",
            "increased chance of critical hits",
            "resistance to paradox effects"
        ],
        vendor: 'center_seller',
        shippedBy: 'Dimensional Courier',
        levelRequirement: 40
    },

    'doughnut_hole_item_godly_tears_of_the_consuming_void_03': {
        id: 'doughnut_hole_item_godly_tears_of_the_consuming_void_03',
        name: "The Consuming Void's Lament - Tears of the Unmaking",
        description: "These ethereal tears, said to be wept by the nascent void itself, possess a chilling resonance that directly threatens the structural integrity of matter. Drinking these tears grants mastery over entropy; temporarily accelerating decay and dissolving objects with a touch, but at the cost of slowly unraveling the user’s own being.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 75000,
        icon: '💀',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "entropy_acceleration (touch)",
            "decay_field creation",
            "temporary access to void energy",
            "self-harm effect - gradual degradation of user’s health"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Void Wraith Transport',
        levelRequirement: 50
    },

    'warhammer_item_jade-hunter_medalist-of-broken-empire': {
        id: 'warhammer_item_jade-hunter_medalist-of-broken-empire',
        name: "Jade Hunter’s Medalist of Broken Empire",
        description: "This intricately carved jade medal pulses with the fractured echoes of a fallen empire. When worn, it grants heightened awareness in chaotic environments and whispers tactical advantages gleaned from shattered strategies – perfect for ruthless conquest.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '⚔️',
        stock: 45,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increased perception in chaotic zones",
            "chance to gain tactical advantage during combat",
            "reduces fear effect by 20%",
            "grants +3 to intimidate checks"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'Imperial Courier Drone',
        levelRequirement: 35
    },

    'warhammer_item_chaos-hunter_resonator-of-twisted-fate': {
        id: 'warhammer_item_chaos-hunter_resonator-of-twisted-fate',
        name: "Chaos Hunter’s Resonator of Twisted Fate",
        description: "Forged within the heart of a collapsing temple, this resonator vibrates with raw chaos. It can temporarily warp reality around its wielder, inducing madness in enemies and bolstering one's own reckless aggression – but be warned; it demands a hefty price for control.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🌀',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "causes confusion in nearby enemies for 5 seconds",
            "increases attack speed by 30% for 3 seconds",
            "chance to inflict 'unstable' status on hit",
            "reduces armor rating by 10%"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Shadow Serpent Delivery',
        levelRequirement: 48
    },

    'warhammer_item_fate-forge_service-of-temporal-remediation': {
        id: 'warhammer_item_fate-forge_service-of-temporal-remediation',
        name: "Fate Forge Service of Temporal Remediation",
        description: "A unique service offered by the Fate Forge, this ritual allows for a brief manipulation of localized temporal currents. The skilled chronomancers will attempt to undo recent errors, mitigating damage or preventing disastrous outcomes – but altering fate always has consequences.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 25000,
        icon: '⏳',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "cancels the last instance of damage dealt to the user",
            "rewinds a single failed action (attack/skill use)",
            "prevents one negative status effect from taking hold",
            "guarantees 10% chance to avoid a critical hit"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Temporal Flux Delivery System',
        levelRequirement: 50
    },

    'connectopia_item_rustingale_shards': {
        id: 'connectopia_item_rustingale_shards',
        name: "The Rustingale's Echoing Shards",
        description: "These jagged fragments pulse with the residual energy of long-abandoned mining rigs, rumored to whisper warnings of unstable bedrock. Collecting them grants a brief glimpse into the forgotten pioneers’ desperate struggles against the relentless block storms.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 350,
        icon: '⛏️',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increases mining speed by 10% for 60 seconds",
            "chance to discover bonus ore",
            "provides minor protection against block storms",
            "slightly increases chance of finding rare materials"
        ],
        vendor: 'block_smith',
        shippedBy: 'Automated Delivery Drone',
        levelRequirement: 15
    },

    'connectopia_item_ghoststone_guardian': {
        id: 'connectopia_item_ghoststone_guardian',
        name: "The Ghoststone Guardian's Lament",
        description: "Forged from a solidified echo of a lost pioneer’s final moments, this dense grey block radiates an unsettling chill. Holding it allows for brief communication with spectral miners trapped within the deepest tunnels – but beware their mournful warnings.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '👻',
        stock: 18,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grants resistance to fear effects",
            "increases movement speed by 5% in dark areas",
            "chance to trigger a ghostly encounter (may be beneficial or detrimental)",
            "provides temporary protection from hostile mining constructs"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'Pigeon Carrier',
        levelRequirement: 30
    },

    'connectopia_item_chronocrystal_remnant': {
        id: 'connectopia_item_chronocrystal_remnant',
        name: "The Chronocrystal Remnant of Silas Blackwood",
        description: "A disturbingly smooth fragment of temporal distortion, recovered from a haunted mine shaft. This forbidden artifact allows for fleeting glimpses into alternate timelines – but prolonged exposure risks unraveling your own existence.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 8000,
        icon: '⏳',
        stock: 5,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "allows for brief manipulation of time (slows down enemy attacks or speeds up resource gathering)",
            "chance to create a temporary portal to another timeline",
            "significant risk of temporal paradoxes and negative consequences",
            "increases chance of finding lost technology"
        ],
        vendor: 'craft_corner',
        shippedBy: 'Black Market Courier (Requires Level 45)',
        levelRequirement: 48
    },

    'middle_earth_item_sunstone_touched_pipes': {
        id: 'middle_earth_item_sunstone_touched_pipes',
        name: "Sunstone-Touched Pipes of Lothlórien",
        description: "These exquisitely crafted pipes, inlaid with fragments of captured sunlight, resonate with the ancient magic of Lothlórien.  Drawing smoke from them evokes visions of shimmering glades and whispering waterfalls, subtly enhancing focus and clarity of thought.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '✨',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased focus +5",
            "minor illusion effect (briefly see a shimmering image)",
            "boosts charisma by 2 for 10 minutes",
            "chance to inspire nearby allies (+3%)"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_horse',
        levelRequirement: 25
    },

    'middle_earth_item_orcish_kaleidoscopic_shard': {
        id: 'middle_earth_item_orcish_kaleidoscopic_shard',
        name: "The Orcish Kaleidoscopic Shard of Morannon",
        description: "This jagged shard, pulsating with trapped twilight energy and exhibiting an unsettling kaleidoscopic refraction, was rumored to have been forged in the shadow of Mordor. Holding it grants a warped perception of reality, briefly disrupting enemy movements.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '🌀',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "briefly disorient enemy +15%",
            "chance to inflict confusion (10%)",
            "increased movement speed for 3 seconds",
            "reduces incoming damage by 5% during night time"
        ],
        vendor: 'shire_shop',
        shippedBy: 'giant_rat',
        levelRequirement: 18
    },

    'middle_earth_item_mk.42_heartwood_speaker': {
        id: 'middle_earth_item_mk.42_heartwood_speaker',
        name: "Mk.42 Heartwood Speaker of Fangorn Forest",
        description: "A meticulously maintained, ancient pipe crafted from the core of a sentient tree within Fangorn Forest. This speaker emits subtle sonic waves designed to soothe troubled spirits and bolster the resilience of those nearby, resonating with the primal energy of the woods.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🌳',
        stock: 9,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "restores 25 HP per minute",
            "chance to heal nearby allies (10%)",
            "immune to fear effects",
            "boosts defense by 10%"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'giant_spider',
        levelRequirement: 45
    },

    'equestrian_item_jade_weaver_elements': {
        id: 'equestrian_item_jade_weaver_elements',
        name: "Jade Weaver's Echoing Elements",
        description: "These shimmering, jade-colored orbs pulse with the residual magic of countless friendships. When activated, they briefly manifest a supportive element – either bolstering a friendly companion’s abilities or subtly disrupting an enemy’s efforts with chaotic energy. The Weaver's touch imbues them with potent restorative properties.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '✨',
        stock: 7,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "temporarily increases friendship level with adjacent allies",
            "causes minor elemental instability in nearby enemies",
            "restores a significant amount of health and magic over 30 seconds",
            "grants the user brief glimpses into potential futures related to their friends"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Pegasus Courier',
        levelRequirement: 45
    },

    'equestrian_item_the_generous_elements_of_harmony': {
        id: 'equestrian_item_the_generous_elements_of_harmony',
        name: "The Generous Elements of Harmony’s Bloom",
        description: "A delicate, crystalline blossom that captures the essence of perfect harmony. When held aloft, it radiates a gentle warmth, encouraging cooperation and mitigating conflict between those nearby. This isn’t just a trinket; it's a conduit for genuine peace.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8500,
        icon: '🌸',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "reduces hostility levels in a small radius",
            "increases the effectiveness of healing spells cast by friendly ponies",
            "provides temporary resistance to fear and intimidation effects",
            "bestows a bonus to persuasion checks"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Swift Delivery Pony',
        levelRequirement: 28
    },

    'equestrian_item_elemental_resonance_ritual_weave': {
        id: 'equestrian_item_elemental_resonance_ritual_weave',
        name: "Elementarian’s Resonance Ritual Weave",
        description: "This intricately woven tapestry, crafted from threads spun by captured storm sprites, vibrates with raw elemental energy. When draped across a battlefield or worn as armor, it amplifies the wielder's connection to the four elements – Fire, Water, Earth, and Air – dramatically boosting their offensive capabilities.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5800,
        icon: '🔥💧🌍💨',
        stock: 19,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increases damage dealt by elemental attacks",
            "provides resistance to corresponding elemental damage types",
            "allows the user to channel elemental energy for a limited time",
            "boosts movement speed and agility"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Crystal Delivery Cart',
        levelRequirement: 35
    },

    'pokemon_item_dread_dancer_tms_aethelred': {
        id: 'pokemon_item_dread_dancer_tms_aethelred',
        name: "Dread Dancer's Tms Aethelred",
        description: "This shimmering, obsidian-infused TM pulses with a chilling energy. Upon use, your Pokémon will perform a whirlwind attack infused with spectral dread, confusing and weakening its target with unsettling grace.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '👻',
        stock: 8,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "Confusion (50%)",
            "Weakness Boost (30%)",
            "Shadow Step (10%)"
        ],
        vendor: 'pokemart',
        shippedBy: 'Magikarp Delivery Drone',
        levelRequirement: 40
    },

    'pokemon_item_trained_tm_resonance_forge': {
        id: 'pokemon_item_trained_tm_resonance_forge',
        name: "The Trained Tms of Battles Resonance Forge",
        description: "Crafted from solidified battlefield echoes, this TM allows your Pokémon to amplify their attacks with focused intent. Upon activation, the target will experience a cascade of resonating energy, increasing damage and critical hit chance.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '⚔️',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Damage Boost (20%)",
            "Critical Hit Chance +15%",
            "Attack Speed Increase (10%)"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Pidgeot Courier',
        levelRequirement: 30
    },

    'pokemon_item_mk_38_trained_tms_stormcaller': {
        id: 'pokemon_item_mk_38_trained_tms_stormcaller',
        name: "Mk.38 Trained Tms Stormcaller",
        description: "A meticulously crafted TM, imbued with the power of captured storm energy. Utilizing this TM will cause your Pokemon to unleash a devastating torrent of lightning bolts targeting their foe.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 5750,
        icon: '⚡',
        stock: 55,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Electric Type Attack Boost (18%)",
            "Damage Increase (12%)",
            "Temporary Speed Decrease on Target (5%)"
        ],
        vendor: 'league_store',
        shippedBy: 'Snorlax Delivery Service',
        levelRequirement: 20
    },

    'warhammer_item_skullsplitter-of-broken-regiments': {
        id: 'warhammer_item_skullsplitter-of-broken-regiments',
        name: "Skullsplitter of Broken Regiments",
        description: "A brutally forged warhammer, its head crafted from the calcified skull of a fallen legionary. Each strike resonates with the echoes of shattered commands and inspires a chilling dread in enemies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750,
        icon: '🔨',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Increased melee damage",
            "Chance to inflict 'Fear'",
            "Slightly reduces enemy attack power against the wielder",
            "Adds 5% chance of stunning target"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'Ground Courier',
        levelRequirement: 15
    },

    'warhammer_item_jeweled-forger-of-fates-whispers': {
        id: "warhammer_item_jeweled-forger-of-fate's-whispers",
        name: "Jeweled Forger of Fate’s Whispers",
        description: "A heavy warhammer, meticulously crafted by a forgotten artisan and adorned with jeweled fragments said to contain trapped whispers of doomed fates. Holding it induces unsettling visions and amplifies your aggressive tendencies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '💎',
        stock: 17,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "High critical hit chance",
            "Increases attack speed slightly",
            "Chance to inflict 'Confusion'",
            "Reduces defense against enemies with high HP"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Winged Courier',
        levelRequirement: 30
    },

    'warhammer_item_mk-89-grim-echo-forger': {
        id: 'warhammer_item_mk-89-grim-echo-forger',
        name: "Mk.89 Grim Echo Forger",
        description: "A forbidden warhammer, forged in the heart of a desecrated battlefield. The hammer pulses with residual energy from countless battles and carries an aura that inspires terror.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 12000,
        icon: '💀',
        stock: 3,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "Massive damage output",
            "Chance to summon a 'Phantom Echo' (a temporary spectral copy of the wielder)",
            "High chance of inflicting ‘Paralysis’ on hit",
            "Increases movement speed when near death enemies"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Shadow Delivery',
        levelRequirement: 50
    },

    'earth_land_item_chronal_frost_weaver': {
        id: 'earth_land_item_chronal_frost_weaver',
        name: "The Chronal Frost Weaver's Shard",
        description: "A jagged, ice-blue crystal pulsating with temporal energy. Holding it grants fleeting glimpses of potential futures, but prolonged use risks fracturing your own timeline and attracting the attention of the Ice Wall’s guardians.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '❄️',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Temporarily slows time for the user.",
            "Chance to inflict ‘Temporal Stasis’ on a target (briefly freezes them in place).",
            "Increases resistance to cold damage."
        ],
        vendor: 'magic_shop',
        shippedBy: 'ice_runner',
        levelRequirement: 15
    },

    'earth_land_item_dragonheart_reaver': {
        id: 'earth_land_item_dragonheart_reaver',
        name: "The Dragonheart Reaver’s Obsidian Spike",
        description: "A wickedly sharp obsidian spike, meticulously crafted from the heartstone of a juvenile Crimson Dragon. It radiates intense heat and possesses a primal connection to draconic fury; channeling this energy can temporarily bolster your attacks.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🔥',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Deals bonus fire damage.",
            "Chance to ignite enemies upon impact.",
            "Increases attack speed for a short duration."
        ],
        vendor: 'earth_emporium',
        shippedBy: 'stone_carrier',
        levelRequirement: 30
    },

    'earth_land_item_wizard_rune_sequencer': {
        id: 'earth_land_item_wizard_rune_sequencer',
        name: "Mk.27 Wizard Rune Sequencer",
        description: "A complex, jeweled device composed of interlocking wizard runes and gears - a remnant from the lost school of Chronomancy.  Spinning the central dial allows you to rapidly cycle through magical effects, though improper use can cause unpredictable reality distortions.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '🔮',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Allows rapid casting of basic spells.",
            "Increases mana regeneration rate.",
            "Provides a chance to deflect enemy attacks with magical energy."
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'messenger_hawk',
        levelRequirement: 45
    },

    'doughnut_hole_item_chronometric_resonance_finder': {
        id: 'doughnut_hole_item_chronometric_resonance_finder',
        name: "The Chronometric Resonance Finder - Obsidian Bloom",
        description: "A pulsating, obsidian-colored tear harvested from the heart of a temporal fissure. It grants fleeting glimpses into fractured timelines, allowing for brief manipulations of localized time flow – though prolonged use risks unraveling your own existence.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '⏳',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Temporarily slows time within a 5-meter radius.",
            "Allows for a single rewind of up to 3 seconds.",
            "Increases reaction speed by 20% for 60 seconds.",
            "Risk of temporal instability - chance of brief disorientation."
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dimensional Rift Courier',
        levelRequirement: 35
    },

    'doughnut_hole_item_xenic_tear_of_the_silent_center': {
        id: 'doughnut_hole_item_xenic_tear_of_the_silent_center',
        name: "Xenic Tear of the Silent Center - Cartographer’s Lament",
        description: "A viscous, silver tear containing a miniature representation of the Void's geometry. It reveals pathways through impossible spaces and provides faint directional cues towards the center – though the silence it emanates can drive the unwary to madness.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1800,
        icon: '🗺️',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "Reveals hidden pathways and dimensional rifts on the map.",
            "Grants a slight chance to bypass locked doors or obstacles.",
            "Emits a disorienting silence, reducing enemy accuracy by 10%.",
            "Risk of temporary madness - character suffers minor hallucinations."
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Void Drone Delivery',
        levelRequirement: 20
    },

    'doughnut_hole_item_paradoxical_tear_of_inverted_decay': {
        id: 'doughnut_hole_item_paradoxical_tear_of_inverted_decay',
        name: "Paradoxical Tear of Inverted Decay - The Weaver’s Echo",
        description: "A swirling, amethyst tear exhibiting signs of both preservation and complete dissolution.  It subtly accelerates the decay process in organic matter while simultaneously strengthening its structure – a truly unsettling paradox.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3500,
        icon: '🧪',
        stock: 8,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Heals a small amount of damage over time while applying a slow decay effect to enemies.",
            "Temporarily increases the durability of armor and weapons.",
            "Reduces the regeneration rate of wounds on the user.",
            "Causes minor skin discoloration - visual indicator of instability."
        ],
        vendor: 'center_seller',
        shippedBy: 'Void Packet Delivery System',
        levelRequirement: 40
    },

    'middle_earth_item_obsidian_singer_of_mordor': {
        id: 'middle_earth_item_obsidian_singer_of_mordor',
        name: "The Obsidian Singer's Runes",
        description: "These jagged runes, crafted from solidified volcanic glass and etched with forgotten orcish glyphs, vibrate with a low, unsettling hum. When activated, they emit a mournful song that briefly weakens the resolve of any nearby sentient being – a chilling reminder of Mordor’s wasted ambition.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '💀',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "reduces enemy morale by 10%",
            "causes brief confusion in enemies",
            "chance to inflict fear on weaker opponents",
            "increased resistance to dark magic"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'flying_cart',
        levelRequirement: 25
    },

    'middle_earth_item_shire_woodcutter_rune_of_the_green': {
        id: 'middle_earth_item_shire_woodcutter_rune_of_the_green',
        name: "Shire Woodcutter's Rune of the Green",
        description: "Forged by a master woodcarver in the Shire, this small, intricately carved rune is infused with the essence of ancient forests. When held aloft, it briefly accelerates plant growth – ideal for creating distractions or bolstering defenses.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 650,
        icon: '🌿',
        stock: 18,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "rapidly accelerates plant growth within a small radius",
            "creates temporary camouflage amongst foliage",
            "chance to summon a swarm of butterflies (minor distraction)",
            "provides minor healing over time when in contact with natural plants"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_express',
        levelRequirement: 15
    },

    'middle_earth_item_elfwood_echo_ring_of_valinor': {
        id: 'middle_earth_item_elfwood_echo_ring_of_valinor',
        name: "Elfwood Echo Ring of Valinor",
        description: "This shimmering ring, constructed from polished Elfwood and inlaid with a single, perfectly preserved tear-shaped crystal, resonates faintly with the ancient magic of Valinor.  Wearing it allows one to briefly perceive echoes of past events in a given location – glimpses into moments long gone.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🔮',
        stock: 1,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "allows limited viewing of past events (short duration)",
            "increases perception and intuition",
            "provides resistance to illusion magic",
            "chance to reveal hidden pathways or secret doors"
        ],
        vendor: 'elven_market',
        shippedBy: 'griffin_delivery',
        levelRequirement: 40
    },

    'doughnut_hole_item_chronometric_drizzle_caller': {
        id: 'doughnut_hole_item_chronometric_drizzle_caller',
        name: "Chronometric Drizzle Caller",
        description: "This iridescent orb pulses with fractured time, briefly accelerating or decelerating the flow of moments within a small radius. It’s rumored to have been salvaged from a collapsed temporal pocket near the Void's core – handle with extreme caution!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '⏳',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "temporarily speeds up movement speed",
            "slows down enemy attack rate",
            "creates a localized time dilation field (small area)",
            "chance to create a temporal echo of the user's last action"
        ],
        vendor: 'void_vendor',
        shippedBy: 'dimensional rift courier',
        levelRequirement: 15
    }
};
