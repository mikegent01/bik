// Shop items file 77
// Generated: 2026-03-22 19:30:23
// Items: 100

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_077 = {
    'warhammer_item_desolation_striker_of_shadows': {
        id: 'warhammer_item_desolation_striker_of_shadows',
        name: "Desolation Striker's Insignias of Shadows",
        description: "Forged from the remnants of a conquered empire, these insignia resonate with the echoes of countless battles. Touching this item creates an unsettling aura around the user, shrouding them in shadows and enhancing their stealth capabilities - ideal for ambushes.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '🌑',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "increased movement speed (30%) for 60 seconds",
            "grant stealth ability with a 25% chance to avoid detection",
            "chance to apply 'shadow' status on target, reducing accuracy by 15%",
            "regenerates health over time (1 HP/second)"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Night Serpent Delivery',
        levelRequirement: 28
    },

    'warhammer_item_fate_striker_of_temporal_rift': {
        id: 'warhammer_item_fate_striker_of_temporal_rift',
        name: "Fate Striker's Insignias of Temporal Rift",
        description: "These jeweled insignias are infused with the fractured remnants of time itself, allowing brief glimpses into potential futures - though using them carries a significant risk. Each insignia emits a faint hum and grants limited manipulation of local temporal flow.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6500,
        icon: '⏳',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "chance to rewind enemy's last action by one turn",
            "briefly slows down target’s movement speed (50%)",
            "reveals a possible future outcome of the next attack (10% chance)",
            "creates a small temporal distortion, reducing damage taken by 15%"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Chronomaestro's Express',
        levelRequirement: 45
    },

    'warhammer_item_chronosplitter_skull': {
        id: 'warhammer_item_chronosplitter_skull',
        name: "The Chronosplitter's Jeweled Skull",
        description: "This skull, painstakingly crafted by the Fate Forge, pulses with fractured timelines. Holding it allows a momentary glimpse into possible futures – though prolonged exposure risks dissolving your very existence within the currents of time.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '⏳',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Grants a fleeting vision of potential futures (3 seconds)",
            "Chance to inflict 'Temporal Distortion' – reduces enemy attack speed by 20% for 5 turns.",
            "Causes minor temporal instability, reducing user’s stamina regeneration by 10% for 2 turns",
            "Provides a small chance to shift the battlefield slightly (displaces enemies by 1 tile)"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Imperial Courier Drone',
        levelRequirement: 25
    },

    'warhammer_item_desolation_stalker': {
        id: 'warhammer_item_desolation_stalker',
        name: "The Purified Desolation Stalker's Fang",
        description: "A morbid trophy harvested from a fallen Imperial Guard commander, this fang radiates an unnerving chill. It grants the wielder a heightened sense of danger and allows for brief bursts of unsettling speed.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 850,
        icon: '💀',
        stock: 27,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "Increases movement speed by 15% for 3 turns.",
            "Grants a chance to detect hidden enemies within 10 tiles.",
            "Reduces the user's vulnerability to fear effects by 25%",
            "Provides a small boost to critical hit chance (5%)"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Winged Courier',
        levelRequirement: 18
    },

    'warhammer_item_mk9_siege_skull': {
        id: 'warhammer_item_mk9_siege_skull',
        name: "Mk.9 Siege Skull of the Shattered Legion",
        description: "Recovered from the ruins of a long-lost Imperial fortress, this skull resonates with the echoes of countless battles and siege engines.  It’s imbued with a potent shock of kinetic energy, capable of stunning opponents.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 5500,
        icon: '💥',
        stock: 9,
        rarity: 'common',
        stockType: 'special_order',
        effects: [
            "Deals 120 damage and stuns the target for 2 turns.",
            "Has a 30% chance to inflict 'Shockwave' – damages all adjacent enemies by 50.",
            "Restores 20% of missing health (max 100)",
            "Increases user’s armor rating by 10% for 4 turns"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'Armored Transport Truck',
        levelRequirement: 38
    },

    'faerun_item_the_dragonstride_boots': {
        id: 'faerun_item_the_dragonstride_boots',
        name: "The Dragonstride Boots of Klargan's Fury",
        description: "These scarred leather boots, infused with the lingering heat of a dragon’s breath, grant the wearer unnaturally swift movement across any terrain.  Each step resonates with a low rumble, and faint scorch marks appear on surfaces touched by your passage – a testament to their fiery origins.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🔥',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased movement speed",
            "fire resistance",
            "minor heat aura (reduces visibility slightly)",
            "chance to ignite flammable objects"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'Griffon Post',
        levelRequirement: 25
    },

    'faerun_item_the_echoing_amulet_of_silence': {
        id: 'faerun_item_the_echoing_amulet_of_silence',
        name: "The Echoing Amulet of Silenced Whispers",
        description: "Crafted from solidified shadowstone mined within the Silent Peaks, this amulet absorbs and nullifies magical sound.  Wearing it grants heightened awareness to subtle movements while dampening spellcasting attempts reliant on auditory illusions or vocalizations – a true boon for stealth operations.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7500,
        icon: '🤫',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "silence nearby spells (chance to disrupt)",
            "increased stealth",
            "resistance to sonic damage",
            "ability to briefly mask one's own movements"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'Shadow Courier',
        levelRequirement: 40
    },

    'faerun_item_the_chosen_boots_of_stormcaller': {
        id: 'faerun_item_the_chosen_boots_of_stormcaller',
        name: "The Chosen Boots of Stormcaller Theron",
        description: "These boots, once worn by the legendary Stormcaller Theron, resonate with raw elemental power.  They grant a minor control over weather patterns – summoning brief bursts of rain or gusts of wind – and offer protection against lightning strikes. The leather is perpetually damp from recent storms.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 50000,
        icon: '⚡',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "chance to summon a small rainstorm (short duration)",
            "resistance to lightning damage",
            "increased movement speed in storms",
            "ability to briefly call forth a wind gust"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'Sea Serpent Delivery',
        levelRequirement: 50
    },

    'kivotos_item_runic_transfer_slayer_medal_01': {
        id: 'kivotos_item_runic_transfer_slayer_medal_01',
        name: "The Runic Transfer Slayer's Medallion - Mk.57",
        description: "This obsidian medallion pulses with residual student energy, granting a momentary surge of tactical awareness and aggressive reflexes. Engraved with runic patterns signifying the academy’s most ruthless combatants, it briefly boosts your attack speed when activated.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '⚔️',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased attack speed for 5 seconds",
            "boosted reflexes (chance to dodge attacks)",
            "minor stat boost to strength and dexterity"
        ],
        vendor: 'academy_armory',
        shippedBy: 'drone_delivery',
        levelRequirement: 25
    },

    'kivotos_item_transfer_curiosity_chronometric_pin_02': {
        id: 'kivotos_item_transfer_curiosity_chronometric_pin_02',
        name: "The Transfer Chronometric Pin - Echoes of Detention",
        description: "A delicate brass pin depicting a stylized hourglass, this artifact subtly manipulates localized time around the wearer.  It doesn’t allow for drastic changes, merely slowing perception and briefly delaying reactions within a small radius.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7500,
        icon: '⏳',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "slows perception for 3 seconds",
            "briefly delays enemy actions (10% chance)",
            "provides minor resistance to temporal distortions"
        ],
        vendor: 'student_store',
        shippedBy: 'express_delivery',
        levelRequirement: 40
    },

    'kivotos_item_legendary_transfer_medals_of_excellence_03': {
        id: 'kivotos_item_legendary_transfer_medals_of_excellence_03',
        name: "The Transfer Medals of Excellence - Celestial Grade",
        description: "Forged from solidified student ambition and imbued with the academy's highest-achieving spirits, these medals radiate an aura of unparalleled determination.  Wearing them grants a permanent passive bonus to all intellectual pursuits and allows the wearer to briefly 'transfer' knowledge gained during intense study.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 65000,
        icon: '🌟',
        stock: 1,
        rarity: 'legendary',
        stockType: 'back_order',
        effects: [
            "permanent boost to intelligence and wisdom stats",
            "chance to 'transfer' a small amount of knowledge upon successfully completing a difficult task (level dependent)",
            "increased resistance to mental manipulation"
        ],
        vendor: 'academy_armory',
        shippedBy: 'mythic_carrier',
        levelRequirement: 50
    },

    'warhammer_item_crimson-legion-chronoshard': {
        id: 'warhammer_item_crimson-legion-chronoshard',
        name: "The Crimson Legion Chronoshard Warhammer",
        description: "This brutal warhammer pulses with fractured echoes of past battles. Imbued with a shard from a shattered time rift, it grants the wielder fleeting bursts of accelerated attack speed and the ability to briefly phase through enemy defenses – perfect for overwhelming foes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '🔨',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased attack speed for 3 seconds",
            "temporary phase effect (dodge)",
            "chance to inflict temporal wound (slow)"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'Imperial Courier Drone',
        levelRequirement: 25
    },

    'warhammer_item_nether-thief-of-silence': {
        id: 'warhammer_item_nether-thief-of-silence',
        name: "Nether Thief's Armor of Silence",
        description: "Forged from blackened steel harvested from the depths of a forgotten empire, this suit of armor absorbs sound and grants the wearer unnerving stealth.  It’s whispers into the void, allowing for silent movement and brief disruptions to enemy perception – an invaluable asset on the battlefield.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1850,
        icon: '🤫',
        stock: 47,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased stealth",
            "chance to silence enemy attacks",
            "reduced enemy detection radius"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Winged Courier',
        levelRequirement: 18
    },

    'warhammer_item_fate-forge-mk-37-blessed-plate': {
        id: 'warhammer_item_fate-forge-mk-37-blessed-plate',
        name: "Mk.37 Blessed Plate of the Fate Weaver",
        description: "Crafted by the enigmatic Fate Forge, this plate radiates with a holy light, offering protection against necrotic damage and bolstering the wearer’s resolve. It's rumored that the armor subtly shifts to deflect attacks based on the user's intended path - truly blessed by the fickle hand of fate.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 35000,
        icon: '🛡️',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increased defense against necrotic damage",
            "chance to mitigate critical hits",
            "grants temporary resistance to fear effects"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Mystic Delivery Rune',
        levelRequirement: 40
    },

    'middle_earth_item_the_silverwood_resonance': {
        id: 'middle_earth_item_the_silverwood_resonance',
        name: "The Silverwood Resonance",
        description: "A delicate ring crafted from petrified silverwood, pulsing with faint elven magic. Wearing this ring grants increased perception and the ability to subtly influence the emotions of nearby beings – particularly those of a peaceful disposition.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '✨',
        stock: 37,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increased perception",
            "emotion manipulation (small range)",
            "resistance to fear effects"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_pony',
        levelRequirement: 15
    },

    'middle_earth_item_stonehaven_rune_bound': {
        id: 'middle_earth_item_stonehaven_rune_bound',
        name: "Stonehaven Rune-Bound Hammerhead",
        description: "Forged within the depths of Stonehaven, this hammerhead is etched with ancient dwarven runes that resonate with the earth itself. It grants enhanced striking power and a temporary connection to subterranean pathways.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🔨',
        stock: 12,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "increased attack power",
            "chance to trigger tremors",
            "minor resistance to earth magic"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'giant_worm',
        levelRequirement: 30
    },

    'middle_earth_item_anorien_starfall_crown': {
        id: 'middle_earth_item_anorien_starfall_crown',
        name: "Anorien Starfall Crown",
        description: "A legendary crown fashioned from solidified starlight and imbued with the protective magic of Anorien. This crown allows the wearer to briefly summon a shimmering shield, reflecting incoming attacks and bolstering their defenses – a truly remarkable artifact worthy of kings.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 85000,
        icon: '🌟',
        stock: 1,
        rarity: 'legendary',
        stockType: 'delivery_only',
        effects: [
            "summon shimmering shield (brief duration)",
            "increased defense stats",
            "resistance to radiant damage"
        ],
        vendor: 'shire_shop',
        shippedBy: 'dragon_airship',
        levelRequirement: 50
    },

    'warhammer_item_the-ironclad-desolation-eater': {
        id: 'warhammer_item_the-ironclad-desolation-eater',
        name: "The Ironclad Desolation Eater",
        description: "This monstrous icon, crafted from the shattered remains of a legionnaire’s warhammer and infused with vile decay, devours the essence of ruin. Holding it grants temporary resilience against battlefield horrors, bolstering your defenses with corrupted steel.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '💀',
        stock: 47,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "Increases defense by 30 for 60 seconds",
            "Grants resistance to fear effects",
            "Chance to inflict 'Rotting Wound' on enemies",
            "Minor chance of summoning a spectral echo"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'Imperial Courier Drone',
        levelRequirement: 35
    },

    'warhammer_item_the-shadow-whisperer-of-lost-omens': {
        id: 'warhammer_item_the-shadow-whisperer-of-lost-omens',
        name: "The Shadow Whisperer of Lost Omens",
        description: "A chilling artifact salvaged from the ruins of a forgotten oracle, this icon pulses with a dark energy capable of glimpsing fractured timelines.  Holding it allows for brief precognition and disrupts enemy attack patterns, granting a tactical advantage amidst chaos.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '👻',
        stock: 23,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Chance to briefly see an enemy’s next attack",
            "Reduces damage taken from surprise attacks",
            "Increases evasion by 15% for 30 seconds",
            "Minor chance of creating a 'Phantom Step' – short-range teleport"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Night Haunter Delivery',
        levelRequirement: 42
    },

    'warhammer_item_the-fate-forge-mk-99-divine-shard-eater': {
        id: 'warhammer_item_the-fate-forge-mk-99-divine-shard-eater',
        name: "The Fate Forge Mk.99 Divine Shard Eater",
        description: "Forged in the heart of a collapsing temple, this premium icon consumes corrupted fate energy, amplifying its wielder's influence over probability itself. Holding it dramatically alters battlefield outcomes and empowers critical strikes with divine fury.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 50000,
        icon: '✨',
        stock: 9,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "Greatly increases critical hit chance and damage",
            "Chance to instantly defeat weaker enemies",
            "Adds a 'Divine Intervention' effect to attacks (chance of healing or buffing)",
            "Slowly accumulates 'Fate Points,' which can be spent for powerful abilities"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Celestial Transport Vessel',
        levelRequirement: 50
    },

    'pokemon_item_crimson_echoes_crowned': {
        id: 'pokemon_item_crimson_echoes_crowned',
        name: "The Crimson Echoes Crowned Badge",
        description: "A pulsing badge forged from solidified sonic energy, resonating with the battle cries of long-lost Pokemon. Wearing this grants temporary amplification to your attacks, mimicking the ferocity of a territorial Alpha Charizard.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 875,
        icon: '🔥',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Attack boost (10%) for 60 seconds",
            "Increased critical hit chance (5%)",
            "Sound wave damage on successful hits"
        ],
        vendor: 'pokemart',
        shippedBy: 'Drone Delivery',
        levelRequirement: 25
    },

    'pokemon_item_chronal_regalia_forbidden': {
        id: 'pokemon_item_chronal_regalia_forbidden',
        name: "Chronal Regalia of the Time Weaver",
        description: "A shimmering, obsidian amulet pulsing with fractured timelines. This forbidden relic allows brief manipulation of localized time – slowing enemies or accelerating your own movements, but be warned; excessive use risks creating paradoxes.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 45000,
        icon: '⏳',
        stock: 7,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "Slow enemy actions (30%) for 15 seconds",
            "Accelerate own action speed (20%) for 10 seconds",
            "Chance to create a minor temporal distortion (brief confusion)"
        ],
        vendor: 'secret_merchant',
        shippedBy: 'Night Rider Courier',
        levelRequirement: 40
    },

    'pokemon_item_alpha_titanium_crowned': {
        id: 'pokemon_item_alpha_titanium_crowned',
        name: "Mk.76 Alpha Titanium Crowned Armor Fragment",
        description: "A jagged shard of reinforced titanium, imbued with the power of an ancient Alpha Steelix. This armor fragment offers impressive defensive capabilities and a minor boost to your physical attack strength – perfect for enduring punishing battles.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🛡️',
        stock: 9,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Defense boost (15%)",
            "Physical attack power increase (5%)",
            "Resistance to electric-type attacks"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Ground Shipment',
        levelRequirement: 30
    },

    'equestria_item_crimson_elemental_cupcake_drinker': {
        id: 'equestria_item_crimson_elemental_cupcake_drinker',
        name: "The Crimson Elemental Cupcake Drinker",
        description: "This unsettlingly vibrant cupcake pulses with contained thermal energy, granting a momentary surge of fire magic. Its yielding frosting whispers of forgotten volcanic plains and the echoes of chaotic elementals, offering a potent but volatile experience.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🔥',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Grants +5 Fire Damage for 30 seconds",
            "Chance to inflict 'Burn' status on target (10%)",
            "Causes a minor explosion upon consumption (small chance)"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Mail Pegasus',
        levelRequirement: 25
    },

    'equestria_item_silverwind_harvest_cupcakes': {
        id: 'equestria_item_silverwind_harvest_cupcakes',
        name: "Silverwind Harvest Cupcakes - Mk.17 Prototype",
        description: "These delicately frosted cupcakes are imbued with the essence of a Silverwind storm, offering a refreshing and slightly chilling effect. The yielding cake absorbs ambient wind energy, providing temporary speed boosts and minor resistance to cold.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 850,
        icon: '💨',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'delivery_only',
        effects: [
            "+3 Movement Speed for 60 seconds",
            "Minor Resistance to Cold Damage (15%)",
            "Chance to create a small gust of wind to push objects or enemies"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Swift Delivery Pony',
        levelRequirement: 18
    },

    'equestria_item_amberglow_resonance_cupcakes': {
        id: 'equestria_item_amberglow_resonance_cupcakes',
        name: "Amberglow Resonance Cupcakes - Premium Edition",
        description: "Crafted with enchanted amber and crystallized harmony, these cupcakes vibrate with subtle magical energy. They are a premium item designed for harnessing and amplifying existing harmonic abilities, offering a deeply satisfying experience.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 7500,
        icon: '✨',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "+10 to all Harmony-based abilities.",
            "Chance to create a protective harmonic shield (20%)",
            "Restores 30% of mana/magic power",
            "Increases Charisma by 5 points for 1 hour"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Crystal Courier Unicorn',
        levelRequirement: 45
    },

    'internet_item_buffered_tokens_of_the_algorithmic_storm': {
        id: 'internet_item_buffered_tokens_of_the_algorithmic_storm',
        name: "Buffered Tokens of the Algorithmic Storm",
        description: "These shimmering, iridescent tokens pulse with raw data from forgotten corners of the East of Midlands. When consumed, they temporarily grant enhanced processing speed and a resistance to digital corruption – perfect for navigating the chaotic streams of information.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '⚡️',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Increased Processing Speed (10%)",
            "Data Corruption Resistance (5%)",
            "Temporary Network Buffering (+5%)"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Drone Delivery',
        levelRequirement: 12
    },

    'internet_item_pristine_weaver_of_the_broken_bandwidth': {
        id: 'internet_item_pristine_weaver_of_the_broken_bandwidth',
        name: "Pristine Weaver's Tokens of the Broken Bandwidth",
        description: "Crafted from solidified data streams, these tokens resonate with fragmented connections across the East of Midlands. Holding one allows for a brief, erratic link to any network node – useful for bypassing security protocols or retrieving lost packets.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '📡',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Short-Range Network Hack (50m)",
            "Data Packet Retrieval (+25%)",
            "Temporary Bandwidth Amplification"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Cyber Courier',
        levelRequirement: 35
    },

    'internet_item_mk_31_buffered_tokens_of_the_omniscient_server': {
        id: 'internet_item_mk_31_buffered_tokens_of_the_omniscient_server',
        name: "Mk.31 Buffered Tokens of the Omniscient Server",
        description: "These flawlessly polished tokens contain a fragmented echo of the East of Midlands' central server – a source of immense processing power and knowledge.  Activation grants access to a limited archive, allowing you to analyze vast datasets and predict future trends... at a cost.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 18000,
        icon: '🧠',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Access to Server Archive (Limited)",
            "Data Analysis Bonus (+75%)",
            "Probability Prediction (Low Chance)",
            "Temporal Distortion Resistance (Minor)"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Quantum Transport',
        levelRequirement: 50
    },

    'faerun_item_dragonscale_maker_boots': {
        id: 'faerun_item_dragonscale_maker_boots',
        name: "The Obsidian Scale Maker’s Boots of Dragonsong",
        description: "These boots, crafted from the fossilized scales of a young chromatic dragon slain near Neverwinter, resonate with primal draconic energy. Each step produces a faint, echoing song, bolstering your defenses against fire and granting minor resistance to shadow magic. The intricate carvings depict ancient dragon glyphs said to enhance agility.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🔥',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "fire resistance +5",
            "shadow damage reduction -10%",
            "agility +2",
            "chance to trigger a minor dragon roar (10%)"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'winged_horse',
        levelRequirement: 15
    },

    'faerun_item_mystic_boots_of_silence': {
        id: 'faerun_item_mystic_boots_of_silence',
        name: "The Silent Walker’s Mystic Boots of the Deepwood",
        description: "Woven from moonpetal silk and imbued with potent druidic enchantments, these boots allow the wearer to move with unnatural silence. Footsteps vanish into nothingness, making them invaluable for stealthy exploration or evading unwanted attention within the wilds. A faint silver glow emanates from the soles, indicating their mystical connection.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 950,
        icon: '🤫',
        stock: 48,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "stealth +10",
            "noise reduction -75%",
            "movement speed +5%",
            "chance to briefly become partially invisible (5%)"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'giant_snail',
        levelRequirement: 28
    },

    'faerun_item_shadow_boots_of_the_watcher': {
        id: 'faerun_item_shadow_boots_of_the_watcher',
        name: "Mk.14 Shadow Boots of the Obsidian Watcher",
        description: "Forged in the depths of the Underdark by a secretive guild of shadow mages, these boots grant their wearer remarkable mobility through dark and shadowy environments. They’re coated with a substance that seems to absorb light, rendering the wearer nearly invisible when moving within dim or dark conditions. The buckles are crafted from petrified gloomstone.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6200,
        icon: '🌑',
        stock: 11,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "shadow walk +8",
            "movement speed +10%",
            "resistance to necrotic damage +7",
            "chance to inflict a chilling touch on enemies (20%)"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'messenger_raven',
        levelRequirement: 45
    },

    'internet_item_chronometric_data_eater': {
        id: 'internet_item_chronometric_data_eater',
        name: "The Chronometric Data Eater - Phase 7",
        description: "This pulsating, obsidian link consumes fragmented timelines and regurgitates them as fleeting moments of accelerated perception. Its rhythmic pulse disrupts digital signatures, allowing the user to briefly experience echoes of past data streams – a dangerous but potentially enlightening ability.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '⏳',
        stock: 5,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Grants temporary accelerated perception (3 turns)",
            "Disrupts enemy digital defenses (20% chance)",
            "Causes minor temporal distortion – brief hallucinations",
            "Chance of attracting a 'Data Wraith'"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Drone Delivery',
        levelRequirement: 35
    },

    'internet_item_pixel_ghost_collector': {
        id: 'internet_item_pixel_ghost_collector',
        name: "The Nether Pixel Ghost Collector - Variant Sigma",
        description: "A delicate, iridescent sphere crafted from compressed network chatter. Holding it allows the user to briefly manifest and interact with lingering digital ghosts – echoes of forgotten websites and corrupted files. Beware; some 'Ghosts' possess a malevolent sentience.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '👻',
        stock: 23,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Allows communication with digital ghosts (limited range)",
            "Reveals hidden data pathways in the immediate area",
            "Provides a small chance to steal encrypted information",
            "Attracts unwanted attention from 'Data Scavengers'"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Quantum Courier',
        levelRequirement: 20
    },

    'internet_item_encrypted_link_matrix_09': {
        id: 'internet_item_encrypted_link_matrix_09',
        name: "The Encrypted Link Matrix - 09 (Replication Cycle)",
        description: "A complex tangle of shimmering fiber optic cables encased in a protective shell of solidified data. This device creates an immediate, highly secure link to any connected system, capable of transmitting vast amounts of information with unbreakable encryption – but overuse can overload the user’s cognitive processing.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 500,
        icon: '🔗',
        stock: 12,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Creates a secure, high-speed data link",
            "Provides +5 to hacking attempts (duration: 3 turns)",
            "Reduces network latency by 10%",
            "Minor chance of system instability (1%)"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Automated Delivery Bot',
        levelRequirement: 15
    },

    'kivotos_item_semester_passes_of_students': {
        id: 'kivotos_item_semester_passes_of_students',
        name: "The Semester Passes of Students",
        description: "These passes, etched with the insignia of every major student club in Academy City, grant temporary access to exclusive after-hours study sessions and secret campus locations. Each pass pulses faintly with residual academic anxiety, amplifying concentration… briefly.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 185,
        icon: '📚',
        stock: 37,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increased_focus_for_10_seconds",
            "minor_boost_to_intellect",
            "chance_of_finding_a_lost_assignment"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery',
        levelRequirement: 5
    },

    'kivotos_item_umbral_cursed_passes': {
        id: 'kivotos_item_umbral_cursed_passes',
        name: "Umbral Cursed's Passes",
        description: "These obsidian passes, rumored to have been forged by a disgraced academy examiner during a particularly dark semester, grant passage through restricted zones and trigger unsettling visions. Beware; prolonged use can induce a profound sense of existential dread.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '🌑',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "temporary_night_vision",
            "chance_of_encountering_a_student_apparition",
            "reduced_movement_speed"
        ],
        vendor: 'club_supply',
        shippedBy: 'Courier Pigeon',
        levelRequirement: 25
    },

    'kivotos_item_mk_80_semester_passes': {
        id: 'kivotos_item_mk_80_semester_passes',
        name: "Mk.80 Semester Passes - Variant Alpha",
        description: "These meticulously crafted passes, bearing the markings of the Academy City’s elite guard program, are designed to facilitate rapid movement through high-security areas during critical assessment periods. The intricate clockwork mechanism within each pass subtly alters perception of time.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 4200,
        icon: '⏱️',
        stock: 3,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "temporary_time_dilation (5%)",
            "increased_speed_of_movement",
            "resistance_to_temporal_disruptions"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Automated Delivery System',
        levelRequirement: 40
    },

    'faerun_item_crimson_songweaver': {
        id: 'faerun_item_crimson_songweaver',
        name: "Crimson Songweaver's Resonator",
        description: "This intricately carved bone resonator vibrates with a low, unsettling hum – said to be the lingering echo of a forgotten elven bard. Holding it grants temporary eloquence and an uncanny ability to persuade others, but prolonged use induces melancholic visions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '🎵',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increased persuasion",
            "chance to trigger melancholic visions",
            "temporary eloquence boost",
            "minor charm effect"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'Winged Courier',
        levelRequirement: 15
    },

    'faerun_item_blackfang_echo': {
        id: 'faerun_item_blackfang_echo',
        name: "Blackfang Echo’s Bite Token",
        description: "A polished tooth taken from a monstrous boar said to haunt the swamps of Blackrazor. The token briefly allows the wielder to track corrupted spirits, but the boar's malevolent energy clings to it.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🐗',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "detect corrupted spirits within a short radius",
            "chance to inflict fear on weaker undead",
            "minor resistance to poison",
            "attracts minor swamp creatures (potentially hostile)"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'Giant Rat Carrier',
        levelRequirement: 28
    },

    'faerun_item_sunstone_whispers': {
        id: 'faerun_item_sunstone_whispers',
        name: "Sunstone Whisperer’s Draught",
        description: "This viscous, golden liquid is distilled from sunstones found only within the ruins of a forgotten temple. It provides brief clarity and boosts mental acuity, but prolonged consumption can induce paranoia.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '☀️',
        stock: 9,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "temporary boost to intelligence and wisdom",
            "increased resistance to psychic attacks",
            "enhanced perception (advantage on Perception checks)",
            "potential for paranoia if consumed excessively"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'Griffon Delivery Service',
        levelRequirement: 35
    },

    'pokemon_item_gilded_echoing_tms_of_valor': {
        id: 'pokemon_item_gilded_echoing_tms_of_valor',
        name: "Gilded Echoing TMs of Valor",
        description: "These shimmering, gilded TMs resonate with the spirit of battle, amplifying the power of your chosen move and briefly projecting a holographic echo of your opponent's last attack for strategic analysis.  The intricate carvings on each TM seem to subtly shift and pulse with energy, encouraging aggressive tactics.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🔥',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increases move power by 10%",
            "Project holographic echo of last attack (brief)",
            "Boosts battle instinct by 5%",
            "Reduces recoil damage by 2%"
        ],
        vendor: 'pokemart',
        shippedBy: 'Winged Pony Express',
        levelRequirement: 30
    },

    'pokemon_item_chronometric_speaker_tm_delphi': {
        id: 'pokemon_item_chronometric_speaker_tm_delphi',
        name: "Chronometric Speaker TM Delphi",
        description: "Forged during a temporal anomaly in the ruins of Delphi, this obsidian-black TM emits faint chronal distortions, allowing for brief manipulation of battle timing – briefly slowing or accelerating an opponent’s movement.  The device is cool to the touch and seems to whisper forgotten strategies.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8500,
        icon: '⏳',
        stock: 12,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "Temporarily slows opponent's movement speed by 30% (5 seconds)",
            "Briefly accelerates own movement speed by 20% (3 seconds)",
            "Chance to inflict 'Temporal Distortion' status (confusion)",
            "Increases critical hit ratio by 15%"
        ],
        vendor: 'league_store',
        shippedBy: 'Celestial Courier',
        levelRequirement: 45
    },

    'pokemon_item_lumina_speaker_tm_aethelred': {
        id: 'pokemon_item_lumina_speaker_tm_aethelred',
        name: "Lumina Speaker TM Aethelred",
        description: "Crafted from solidified starlight harvested during a lunar eclipse over the northern territories, this radiant TM broadcasts focused beams of light that can briefly blind and disorient foes.  The device pulses with a gentle, ethereal glow.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 5200,
        icon: '✨',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Deals burn damage on hit",
            "Briefly blinds opponent’s vision (2 seconds)",
            "Reduces accuracy by 15%",
            "Heals the user for 30 HP"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Safari Delivery Drone',
        levelRequirement: 28
    },

    'the_edge_item_chronometric_watcher': {
        id: 'the_edge_item_chronometric_watcher',
        name: "The Chronometric Watcher's Obsidian Shard",
        description: "This fractured shard pulses with an unsettling temporal energy, briefly accelerating or decelerating the user’s perception of time. It grants momentary bursts of speed and reflexes, but prolonged use risks unraveling one's own timeline within the endless expanse.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '⏳',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increase_movement_speed",
            "temporal_distortion",
            "reflex_boost"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'Automated Drone Delivery',
        levelRequirement: 15
    },

    'the_edge_item_abyssal_resonance_orb': {
        id: 'the_edge_item_abyssal_resonance_orb',
        name: "Mk.7 Abyssal Resonance Orb",
        description: "A pulsating sphere of solidified darkness, the Mk.7 resonates with the chaotic energy leaking from the furthest reaches of existence. Holding this orb generates a field of malevolent psychic pressure, weakening nearby enemies and disrupting their focus.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🌀',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "damage_over_time_psychic",
            "enemy_confusion",
            "weakness_aura"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'Night Crawler Courier',
        levelRequirement: 30
    },

    'the_edge_item_static_silhouette_fragment': {
        id: 'the_edge_item_static_silhouette_fragment',
        name: "The Static Silhouette Fragment - Observer Unit Alpha",
        description: "This obsidian fragment retains a distorted image of a long-lost sentinel, forever trapped between dimensions. Activating the fragment creates a shimmering echo of yourself, capable of scouting ahead and briefly disrupting enemy attacks with bursts of static interference.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '👻',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "stealth_boost",
            "static_interference",
            "echo_location"
        ],
        vendor: 'final_shop',
        shippedBy: 'Dimensional Courier Service',
        levelRequirement: 45
    },

    'doughnut_hole_item_crimson_void_lord': {
        id: 'doughnut_hole_item_crimson_void_lord',
        name: "The Crimson Void Lord’s Lament",
        description: "A pulsating, obsidian sphere radiating a sickly sweet aroma of burnt sugar and regret. Holding this anomaly allows the wielder to briefly glimpse fragmented memories from those lost within The Fated Place's central vortex – offering unsettling insights but leaving a lingering sense of despair.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 180,
        icon: '💀',
        stock: 42,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Grants temporary vision of The Fated Place’s central void.",
            "Causes mild disorientation for 3 turns.",
            "Heals minor wounds (10 HP)",
            "Increases chance to find hidden items by 5%"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Void Courier Drone',
        levelRequirement: 12
    },

    'doughnut_hole_item_infernal_resonance_shard': {
        id: 'doughnut_hole_item_infernal_resonance_shard',
        name: "The Infernal Resonance Shard of Xylos",
        description: "A jagged fragment of what appears to be a shattered clockwork heart, perpetually humming with an unsettling, rhythmic vibration. This anomaly allows the user to briefly manipulate nearby machinery - causing simple devices to fail or temporarily boosting their own mechanical aptitude.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 850,
        icon: '⚙️',
        stock: 17,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Allows manipulation of simple mechanisms (duration: 2 turns)",
            "Increases mechanical aptitude by 5% for 3 turns.",
            "Minor chance to trigger malfunctions in nearby devices.",
            "Emits a faint, rhythmic hum that attracts attention."
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Gutter Crawler Delivery Bot',
        levelRequirement: 25
    },

    'doughnut_hole_item_central_echo_anomaly_7417': {
        id: 'doughnut_hole_item_central_echo_anomaly_7417',
        name: "The Central Echo Anomaly - Seed: 7417",
        description: "A perfectly spherical, iridescent bubble that reflects distorted images of the surrounding area – a constant reminder of the chaotic center. Touching this anomaly grants brief access to a fragmented sensory experience, potentially revealing secrets or warnings from those previously lost within The Fated Place's depths.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4200,
        icon: '🔮',
        stock: 5,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Grants a fleeting sensory experience of The Fated Place.",
            "Provides cryptic clues related to the area's mysteries (chance-based).",
            "Causes slight disorientation and nausea.",
            "Increases resistance to void energies by 10%."
        ],
        vendor: 'center_seller',
        shippedBy: 'Dimensional Transit Portal',
        levelRequirement: 40
    },

    'doughnut_hole_item_chronal_graviton_finder': {
        id: 'doughnut_hole_item_chronal_graviton_finder',
        name: "The Chronal Graviton Finder - Mk.47",
        description: "This obsidian-like device pulses with a faint, inverted gravity, capable of briefly manipulating the flow of time within a localized sphere. It’s rumored to have been salvaged from a collapsed temporal nexus near the center, and emits a disconcerting hum when activated – beware of paradoxical ripples.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '⏳',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Temporarily reduces gravity by 50%",
            "Allows for brief temporal slowdown (1 second)",
            "Chance to inflict 'Temporal Distortion' status effect (slow movement, blurred vision)",
            "Increases chance of finding rare items in the vicinity."
        ],
        vendor: 'void_vendor',
        shippedBy: 'Void Courier Drone',
        levelRequirement: 25
    },

    'doughnut_hole_item_resonance_core_finder': {
        id: 'doughnut_hole_item_resonance_core_finder',
        name: "The Ancient Resonance Core - 'Heart of the Stillness'",
        description: "A perfectly smooth, crimson sphere etched with glyphs from a forgotten civilization obsessed with absolute silence. Holding this core evokes an unsettling calm and amplifies the effects of nearby gravitational anomalies – use cautiously, as prolonged exposure can induce apathy.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7500,
        icon: '🖤',
        stock: 8,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Increases resistance to gravity-based attacks by 20%",
            "Provides a minor bonus to perception checks.",
            "Causes nearby gravitational anomalies to become more pronounced and potentially dangerous.",
            "Can be used as an offering to the Silent Guardians faction."
        ],
        vendor: 'center_seller',
        shippedBy: 'Ground Transport - Cart',
        levelRequirement: 40
    },

    'doughnut_hole_item_anomalous_null_finder_913': {
        id: 'doughnut_hole_item_anomalous_null_finder_913',
        name: "The Anomalous Null Finder - 'Project Lazarus'",
        description: "A disturbingly organic, pulsating null that seems to defy the laws of physics. It radiates a palpable sense of decay and whispers fragmented memories of events that never occurred – handle with extreme caution; prolonged contact may result in altered perception or temporary madness.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 5500,
        icon: '💀',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Provides a temporary boost to critical hit damage (10%)",
            "Chance to drain enemy's mana/energy upon successful attack.",
            "Causes hallucinations and disorientation in nearby enemies.",
            "Upon consumption, the user gains 'Echoes of Existence' - brief glimpses into alternate realities."
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Express Drone Delivery',
        levelRequirement: 35
    },

    'connectopia_item_chromatic_resonance_weaver': {
        id: 'connectopia_item_chromatic_resonance_weaver',
        name: "The Resonant Cadence of Block-Song Weaver",
        description: "This intricate device, crafted from mined obsidian and pulsating with geothermal energy, vibrates with the fundamental frequencies of Connectopia's block network. When activated, it emits a harmonic pulse that temporarily reinforces structural integrity, increasing block resistance by 20% for 60 seconds.  It’s said to have been created by Block-Smith Silas after a particularly strong tremor.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1875,
        icon: '🎶',
        stock: 33,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases block resistance by 20% for 60 seconds",
            "emits a calming harmonic pulse",
            "chance to detect hidden block structures nearby"
        ],
        vendor: 'block_smith',
        shippedBy: 'Automated Delivery Drone',
        levelRequirement: 15
    },

    'connectopia_item_fragmented_echo_consumable': {
        id: 'connectopia_item_fragmented_echo_consumable',
        name: "The Tainted Echo of the Shattered Signal",
        description: "A viscous, iridescent globule containing fractured fragments of a long-lost pioneer transmission. Upon ingestion, it temporarily grants the user heightened awareness within dense block formations, allowing them to perceive subtle shifts in structural integrity and detect hidden pathways – but beware; prolonged use causes unsettling auditory hallucinations.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 650,
        icon: '👂',
        stock: 89,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "increased awareness in block formations (30%)",
            "detects structural shifts and hidden pathways",
            "causes minor auditory hallucinations after prolonged use"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'Courier Pigeon',
        levelRequirement: 28
    },

    'connectopia_item_mk.73_geothermal_blueprint_weaver': {
        id: 'connectopia_item_mk.73_geothermal_blueprint_weaver',
        name: "The Mk.73 Geothermal Blueprint Weaver",
        description: "A meticulously crafted schematic detailing the construction of a miniature geothermal generator – capable of powering small block settlements and providing warmth in the coldest regions of Connectopia.  This blueprint, recovered from a ruined pioneer outpost, utilizes mined heatstone and intricate wiring patterns, offering a stable energy source. Requires expert assembly.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7500,
        icon: '⚙️',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grants access to advanced geothermal generator blueprints",
            "increases block stability by a small amount (5%)",
            "provides bonus crafting speed when near heatstone"
        ],
        vendor: 'craft_corner',
        shippedBy: 'Express Delivery Courier',
        levelRequirement: 40
    },

    'internet_item_gilded_fallen_tokens_of_the_echoing_void': {
        id: 'internet_item_gilded_fallen_tokens_of_the_echoing_void',
        name: "Gilded Fallen’s Tokens of the Echoing Void",
        description: "These shimmering, obsidian tokens pulse with fragmented memories from forgotten servers. Holding them grants a fleeting connection to the digital ghosts that haunt the East of Midlands, offering whispers of lost data and phantom commands – but beware, prolonged exposure can induce crippling recursion.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 18000,
        icon: '🌀',
        stock: 23,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "Grants temporary access to fragmented data streams.",
            "Chance of triggering a 'Digital Echo' – a brief hallucination of a past user's experience.",
            "Increases processing speed by 15% for 60 seconds.",
            "Risk of data corruption (10%)"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Drone Delivery',
        levelRequirement: 42
    },

    'internet_item_pixel_fragments_of_the_viral_storm': {
        id: 'internet_item_pixel_fragments_of_the_viral_storm',
        name: "Pixel Fragments of the Viral Storm",
        description: "Collected from corrupted data streams during peak viral outbreaks, these shards represent the chaotic energy of online memes. Each fragment carries a potent dose of digital entropy – use them wisely to disrupt systems and unleash short-lived bursts of absurd information.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '💥',
        stock: 61,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Causes a brief system glitch in target area.",
            "Chance to inflict 'Digital Confusion' on enemies (50%).",
            "Temporarily increases movement speed by 10%.",
            "Can be used to overload simple electronic devices."
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Automated Courier',
        levelRequirement: 28
    },

    'internet_item_the_broken_bandwidth_beacon': {
        id: 'internet_item_the_broken_bandwidth_beacon',
        name: "The Broken Bandwidth Beacon",
        description: "A salvaged signal amplifier, this device emits a desperate plea across the East of Midlands' fractured network. It attempts to establish contact with lost data tribes and repair damaged connections – but its erratic signals often attract unwanted attention from parasitic algorithms.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 450,
        icon: '📡',
        stock: 89,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Increases chances of encountering friendly data tribes.",
            "Provides a small chance of finding hidden data caches.",
            "Can detect nearby network anomalies.",
            "Attracts the attention of 'Data Scavengers' (low priority)."
        ],
        vendor: 'data_dealer',
        shippedBy: 'Ground Transport',
        levelRequirement: 15
    },

    'grand_country_item_brutal_resonance_shaper': {
        id: 'grand_country_item_brutal_resonance_shaper',
        name: "The Brutal Resonance Shaper",
        description: "This obsidian anchor, carved from solidified vertical currents, vibrates with a low, brutal hum. When activated, it briefly elevates the surrounding terrain, creating unstable platforms for daring maneuvers and devastating falls.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌋',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "temporarily increases vertical movement speed by 20%",
            "creates a small, unstable platform beneath the user for 5 seconds",
            "chance to inflict 'Vertical Dizziness' on nearby enemies (minor disorientation)"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Gravitic Drone',
        levelRequirement: 25
    },

    'grand_country_item_layer_chronal_anchor_shaper': {
        id: 'grand_country_item_layer_chronal_anchor_shaper',
        name: "The Layer Chronal Anchor Shaper",
        description: "Crafted from compressed cake layers and imbued with temporal distortion, this anchor allows the user to briefly rewind a small area.  It's surprisingly heavy for its size and emits a faint, sweet scent.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8500,
        icon: '⏳',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "rewinds the last 3 seconds of movement and enemy actions (limited range)",
            "restores a small amount of health (50 HP)",
            "chance to create a momentary 'temporal echo' that confuses enemies"
        ],
        vendor: 'layer_market',
        shippedBy: 'Cake Delivery Bot',
        levelRequirement: 40
    },

    'grand_country_item_mk.37_elevated_stability_anchor': {
        id: 'grand_country_item_mk.37_elevated_stability_anchor',
        name: "Mk.37 Elevated Stability Anchor",
        description: "Forged from compressed doughnut dough and reinforced with strange, upward-pointing spikes, this anchor provides a fleeting sense of groundedness within the chaotic vertical landscape.  Its activation releases a pulse of stabilizing energy.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '🧱',
        stock: 89,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "reduces fall damage by 50%",
            "provides a small bonus to balance and dexterity",
            "chance to briefly solidify a small patch of ground"
        ],
        vendor: 'side_seller',
        shippedBy: 'Delivery Pallet',
        levelRequirement: 15
    },

    'kivotos_item_lost_master_cards': {
        id: 'kivotos_item_lost_master_cards',
        name: "The Lost Master's Cards - Freshman Edition",
        description: "A deck of meticulously crafted cards, rumored to have once belonged to a disgraced Academy freshman. Each card pulses with residual academic frustration and the faint scent of instant ramen – offering brief bursts of enhanced recall and questionable deduction skills.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 125,
        icon: '📚',
        stock: 42,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Temporary +5 Recall Speed",
            "Minor Chance of Incorrect Deduction",
            "Small Boost to Logic (1 turn)",
            "Slight annoyance towards authority figures"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery - Academy Campus',
        levelRequirement: 5
    },

    'kivotos_item_mk49_graduate_cards': {
        id: 'kivotos_item_mk49_graduate_cards',
        name: "Mk.49 Graduate Cards - Protocol Override",
        description: "A set of intricately coded cards, salvaged from a deactivated security protocol system within the Academy's central server room. These cards can momentarily disrupt automated systems and reroute digital surveillance – ideal for slipping through unnoticed or pulling a prank.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '💻',
        stock: 18,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Disrupts Automated Systems (30% chance)",
            "Temporarily Masks Digital Footprint",
            "Redirects Surveillance Cameras (Short Duration)",
            "Minor Chance of System Overload"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Secure Courier - Priority Shipping',
        levelRequirement: 20
    },

    'kivotos_item_the_resonance_master_card': {
        id: 'kivotos_item_the_resonance_master_card',
        name: "The Resonance Master Card – Echoes of the Dorm",
        description: "A single, shimmering card containing a captured fragment of the Academy’s collective student anxieties and desires. When activated, it allows brief glimpses into the minds of those nearby – though the visions are often fragmented and unsettling.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '🧠',
        stock: 5,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Brief Glimpse into Nearby Thoughts (Random)",
            "Increased Empathy (Short Duration)",
            "Minor Chance of Psychological Discomfort",
            "Temporary +2 to Persuasion (if used correctly)"
        ],
        vendor: 'club_supply',
        shippedBy: 'Night Owl Delivery - Restricted Access Zone',
        levelRequirement: 35
    },

    'warhammer_item_sunken-watchers-bastion': {
        id: 'warhammer_item_sunken-watchers-bastion',
        name: "Sunken Watcher's Bastion",
        description: "This colossal warhammer, crafted from petrified coral and imbued with the sorrow of drowned empires, pulses with a malevolent energy. Its head is shaped like a watchful gargoyle, eternally gazing towards forgotten depths, granting the wielder brief glimpses into collapsing timelines.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🗿',
        stock: 5,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "increased_critical_damage",
            "chance_to_cause_temporal_distortion_on_hit",
            "slows_target_with_each_strike",
            "grants_temporary_vision_of_past_battles"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'Imperial Courier Drone',
        levelRequirement: 35
    },

    'warhammer_item_crimson-void-curiosity': {
        id: 'warhammer_item_crimson-void-curiosity',
        name: "Crimson Void Curiosity",
        description: "A fragmented warhammer constructed from solidified chaos, it seems to shift and writhe with miniature rifts. The hammer's handle is crafted from a single, pulsing vein of crimson crystal, radiating a disconcerting warmth and whispering promises of untold power – or utter annihilation.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '🔮',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "chance_to_trigger_a_localized_reality_shift",
            "provides_protection_against_psychic_attacks",
            "increases_movement_speed_slightly",
            "attracts_chaotic_entities"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Shadow Messenger',
        levelRequirement: 20
    },

    'warhammer_item_fate-forge-observer-97': {
        id: 'warhammer_item_fate-forge-observer-97',
        name: "Fate Forge Observer-97",
        description: "This enigmatic warhammer hums with the residue of countless temporal manipulations. The weapon is cold to the touch and engraved with cryptic glyphs that seem to shift ever so slightly as you examine them, offering fragmented glimpses into potential futures – a dangerous tool for any wielder.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5800,
        icon: '⌚',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'delivery_only',
        effects: [
            "chance to briefly rewind time on critical hit",
            "increases chance of dodging attacks",
            "provides minor resistance to magical effects",
            "detects temporal anomalies nearby"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Temporal Transport Pod',
        levelRequirement: 18
    },

    'internet_item_jade_touched_byte_surge': {
        id: 'internet_item_jade_touched_byte_surge',
        name: "Jade Touched's Byte Surge",
        description: "This pulsating, jade-colored byte cluster amplifies digital signals, allowing for instantaneous communication across vast distances within the East of Midlands.  Holding it grants temporary access to the 'Nexus Protocol,' bypassing standard data streams and potentially attracting unwanted attention from the Glitch Tribes. It’s rumored to have been crafted by a rogue AI obsessed with aesthetics.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 785,
        icon: '⚡',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Increases communication range by 50%",
            "Grants temporary access to the Nexus Protocol (1 minute)",
            "Chance to attract Glitch Tribe attention (+10%)",
            "Reduces data processing lag by 20%"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Drone Delivery',
        levelRequirement: 15
    },

    'internet_item_mk_47_compressed_packet_ghost': {
        id: 'internet_item_mk_47_compressed_packet_ghost',
        name: "Mk.47 Compressed Packet Ghost",
        description: "A tightly wound, obsidian-black packet containing a fragmented memory – a digital echo of a lost server farm from the Pre-Collapse era.  Upon activation, it manifests as a shimmering, translucent projection displaying static and distorted images, potentially revealing hidden pathways or forgotten data caches within the Eastern Network. Prolonged exposure risks complete mental fragmentation.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12300,
        icon: '👻',
        stock: 8,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Reveals hidden pathways in the Eastern Network (limited use)",
            "Grants a small chance to uncover lost data caches (+5%)",
            "Provides brief glimpses of Pre-Collapse server infrastructure",
            "Causes mild disorientation and memory distortion"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Cyber Courier',
        levelRequirement: 30
    },

    'internet_item_the_void_touched_fragment_key': {
        id: 'internet_item_the_void_touched_fragment_key',
        name: "The Void Touched Fragment Key",
        description: "A jagged shard of solidified digital entropy, pulsing with a sickly purple light. This key allows access to the deepest layers of the East of Midlands' network, rumored to be connected directly to the ‘Null Zones’ – areas where data ceases to exist and reality itself unravels.  It is said to have been created by a faction known as 'The Null Collective'.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 65000,
        icon: '💀',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Allows access to the Null Zones (high risk)",
            "Grants temporary immunity to data corruption (+75%)",
            "Summons a minor digital anomaly (random effect)",
            "Increased chance of attracting hostile AI entities"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Black Market Delivery',
        levelRequirement: 50
    },

    'teyvat_item_infernal_bound_oculi': {
        id: 'teyvat_item_infernal_bound_oculi',
        name: "The Infernal Bound's Oculi - Pyreheart",
        description: "These obsidian oculi pulse with trapped infernal heat, granting the wielder a fleeting resistance to cryo damage and amplifying their attacks against those of corrupted origin.  Holding them aloft whispers promises of forgotten rites and the burning touch of the Abyss.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔥',
        stock: 37,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "cryo resistance +25%",
            "attack damage +15%",
            "chance to inflict burn on cryo attacks",
            "increases movement speed by 5%"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'Seafaring Courier',
        levelRequirement: 28
    },

    'teyvat_item_monstadt_echoing_prism': {
        id: 'teyvat_item_monstadt_echoing_prism',
        name: "The Mondstadt Echoing Prism - Aether's Lament",
        description: "Forged from solidified echoes of the Seven Stars, this prism amplifies the wielder’s connection to Wind and grants them glimpses of potential futures within its swirling depths.  It resonates with hope and melancholy, a reminder of lost battles and unwavering resolve.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '✨',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "increases wind damage +10%",
            "chance to trigger a brief vision of the future (5%)",
            "grants passive speed boost (3%)",
            "reduces stamina consumption by 8%"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'Aero Delivery Drone',
        levelRequirement: 15
    },

    'teyvat_item_liyue_frost_rune_bound': {
        id: 'teyvat_item_liyue_frost_rune_bound',
        name: "The Liyue Frost Rune - Dragonheart's Vigil",
        description: "This intricately carved rune, bound to a shard of solidified frost from the depths of the Jade Chamber, exudes an aura of chilling power. It channels the spirit of vigilance and offers protection against both physical and elemental harm.  Legends say it once guarded the path to the Heart of the Mountain.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5800,
        icon: '❄️',
        stock: 5,
        rarity: 'rare',
        stockType: 'delivery_only',
        effects: [
            "physical defense +30%",
            "cryo resistance +20%",
            "chance to freeze enemy attacks (10%)",
            "increases critical hit chance by 5%"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'Maritime Cargo Ship',
        levelRequirement: 40
    },

    'warhammer_item_skull-speaker-of-grim-regret': {
        id: 'warhammer_item_skull-speaker-of-grim-regret',
        name: "Skull-Speaker of Grim Regret",
        description: "This tarnished bronze talisman, etched with the faces of fallen warriors and whispering with echoes of past battles, grants brief glimpses into the regrets of those who perished on the battlefield. Holding it allows you to momentarily experience a fragment of their final moments - a potent tool for strategy or morbid curiosity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '💀',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Grants brief vision of a fallen warrior's regret.",
            "Increases resistance to fear effects by 10% for 60 seconds.",
            "Chance (15%) to inflict 'Despair' on a single enemy."
        ],
        vendor: 'imperial_armory',
        shippedBy: 'express_delivery',
        levelRequirement: 25
    },

    'warhammer_item_rune-walker-of-bone-echoes': {
        id: 'warhammer_item_rune-walker-of-bone-echoes',
        name: "Rune-Walker of Bone Echoes",
        description: "Forged from the fragments of a shattered war engine and inscribed with heretical runic symbols, this artifact allows its wielder to briefly traverse the remnants of battlefields – manifesting as translucent spectral echoes of combatants. It's an unsettlingly effective means of scouting or disrupting enemy formations.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '👣',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Allows temporary spectral movement through battlefields.",
            "Reveals the positions of recently deceased combatants (limited range).",
            "Chance (30%) to summon a ghostly warrior to fight alongside you for 15 seconds.",
            "Increases movement speed by 20% while within a battlefield."
        ],
        vendor: 'fate_forge',
        shippedBy: 'premium_shipping',
        levelRequirement: 40
    },

    'warhammer_item_service-of-the-grim-harvester': {
        id: 'warhammer_item_service-of-the-grim-harvester',
        name: "Service of the Grim Harvester",
        description: "This intricately carved bone talisman pulses with a faint, necrotic energy, granting access to a shadowy service – the retrieval of fallen warriors’ last possessions. By focusing your intent through this artifact, you can summon a spectral ‘Harvester’ to locate and deliver specific items lost on the battlefield.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 27500,
        icon: '💀✨',
        stock: 8,
        rarity: 'mythic',
        stockType: 'delivery_only',
        effects: [
            "Allows summoning of a spectral 'Harvester' to locate lost items.",
            "Grants increased chance of finding rare items during scavenging.",
            "Provides a 50% bonus to item retrieval success rate.",
            "Offers temporary access to knowledge of battlefield tactics and strategies."
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'dimensional_portal',
        levelRequirement: 50
    },

    'doughnut_hole_item_crimson_void_breather': {
        id: 'doughnut_hole_item_crimson_void_breather',
        name: "The Crimson Void Breather Mk.II",
        description: "A pulsating, obsidian device etched with glyphs of the central void. When activated, it momentarily stills the oppressive silence and grants a burst of revitalizing energy, purging the lingering echoes of despair.  Its core resonates with a strangely pleasant hum - a momentary respite from the endless dread.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '💨',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "temporarily reduces fear effect",
            "restores 25% health",
            "increases movement speed by 10% for 15 seconds",
            "emits a soothing, low-frequency hum"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dimensional Rift Courier',
        levelRequirement: 25
    },

    'doughnut_hole_item_sacred_heart_fragment': {
        id: 'doughnut_hole_item_sacred_heart_fragment',
        name: "Fragment of the Sacred Heart - Cycle 37",
        description: "A shard of solidified chronal energy, faintly radiating a warmth that seems to defy the surrounding void.  Holding this fragment allows for brief glimpses into potential futures – fleeting images and whispered warnings about the central nexus. It's said to be a tear shed by a being before its own obliteration.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1850,
        icon: '❤️',
        stock: 47,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "provides cryptic visions (chance to reveal a hidden path)",
            "increases perception by 5% for 30 seconds",
            "slightly mitigates damage from void-based attacks"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Void Wraith Delivery Service',
        levelRequirement: 18
    },

    'doughnut_hole_item_central_tear_reclamation_service': {
        id: 'doughnut_hole_item_central_tear_reclamation_service',
        name: "Reclamation Service - Cycle 9",
        description: "A specialized service utilizing a complex apparatus for the temporary stabilization of unstable central tears. Skilled technicians carefully contain and redirect errant temporal energies, preventing catastrophic rifts from expanding. This service is notoriously unpredictable.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 22000,
        icon: '🛠️',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "stabilizes a single central tear for 60 seconds (chance of failure)",
            "guarantees the safe passage through a designated void area",
            "provides temporary access to an alternate timeline fragment"
        ],
        vendor: 'center_seller',
        shippedBy: 'Chronal Stabilization Drone',
        levelRequirement: 45
    },

    'warhammer_item_infernal_claimeds_bloodrune_breaker': {
        id: 'warhammer_item_infernal_claimeds_bloodrune_breaker',
        name: "Infernal Claimed’s Bloodrune Breaker",
        description: "This colossal warhammer pulses with a sickly crimson light, channeling the fury of forgotten infernals. Each strike sears flesh and bone, leaving behind trails of corrupted blood – a grim testament to its destructive power. The runes etched across its head whisper promises of shattered empires.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🔥',
        stock: 5,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "deals_increased_fire_damage",
            "chance_to_apply_corrosion",
            "chance_to_inflict_weakness",
            "increases_strength"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'flying_griffin',
        levelRequirement: 35
    },

    'warhammer_item_fateforge_mk_79_desolation_herald': {
        id: 'warhammer_item_fateforge_mk_79_desolation_herald',
        name: "Fate Forge Mk.79 Desolation Herald",
        description: "Forged within the deepest chambers of the Fate Forge, this weapon radiates an aura of impending doom and twisted timelines. The Desolation Herald echoes with fractured moments from countless wars, each swing a brief glimpse into shattered realities. A truly unsettling artifact for those who relish in chaos.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 75000,
        icon: '⏳',
        stock: 2,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "chance_to_teleport_target",
            "deals_increased_bludgeoning_damage",
            "slows_target_movement_speed",
            "increases_critical_hit_chance"
        ],
        vendor: 'fate_forge',
        shippedBy: 'dimensional_portal',
        levelRequirement: 40
    },

    'warhammer_item_grim_bastards_shadow_devourer': {
        id: 'warhammer_item_grim_bastards_shadow_devourer',
        name: "Grim Bastard’s Shadow Devourer",
        description: "A brutal warhammer crafted from obsidian and imbued with the essence of consumed shadows. This weapon doesn't merely destroy, it absorbs, feeding on the darkness and despair of its victims. The wielder is enveloped in a chilling mist, amplifying their aggression and offering an unsettling advantage.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 500000,
        icon: '🌑',
        stock: 1,
        rarity: 'godly',
        stockType: 'back_order',
        effects: [
            "deals_massive_shadow_damage",
            "chance_to_silence_target",
            "increases_attack_speed",
            "grants_temporary_invisibility"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'dark_wraith',
        levelRequirement: 50
    },

    'pokemon_item_crimson_echoes_of_valor': {
        id: 'pokemon_item_crimson_echoes_of_valor',
        name: "Crimson Echoes of Valor's Fallen Treats",
        description: "These ruby-red treats, crafted from crystallized battle cries, temporarily amplify a Pokémon’s attack power and grant it a surge of aggressive determination. Consuming them also causes faint auditory hallucinations of legendary battles, potentially inspiring further combat prowess.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 287,
        icon: '🔥',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increases Attack by 30% for 60 seconds",
            "Grants +1 to Aggression stat",
            "Causes auditory hallucinations (minor)"
        ],
        vendor: 'pokemart',
        shippedBy: 'Drone Delivery',
        levelRequirement: 25
    },

    'pokemon_item_starmetal_fossil_fragments': {
        id: 'pokemon_item_starmetal_fossil_fragments',
        name: "Starmetal Fossil Fragments Mk.78",
        description: "Recovered from a meteor crater near Mt. Moon, these fragments are infused with the residual energy of ancient Star Pokémon. When applied to a Pokémon’s armor, they provide increased defense and enhance its natural connection to stellar energies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8123,
        icon: '⭐',
        stock: 9,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Increases Defense by 40%",
            "Grants +5 to Stardust stat",
            "Provides resistance to psychic attacks"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Magma Crane Delivery',
        levelRequirement: 48
    },

    'pokemon_item_aurora_driftwood_treats': {
        id: 'pokemon_item_aurora_driftwood_treats',
        name: "Aurora Driftwood Treats of the Fallen Bloom",
        description: "These translucent treats, harvested from bioluminescent flora deep within the Aurora Zone, bestow a fleeting shimmer upon the Pokémon's fur and grant increased agility. They are rumored to be favored by elusive Pokemon with connections to the veil between worlds.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 650,
        icon: '✨',
        stock: 17,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "Increases Speed by 20% for 30 seconds",
            "Grants +2 to Evasion stat",
            "Provides a faint glow"
        ],
        vendor: 'league_store',
        shippedBy: 'Winged Courier',
        levelRequirement: 18
    },

    'faerun_item_brutal_walker_of_grimstone': {
        id: 'faerun_item_brutal_walker_of_grimstone',
        name: "Brutal Walker's Scrolls of Grimstone Resonance",
        description: "These scrolls, etched with runes of forgotten dwarven blacksmiths and infused with the echoes of brutal stone-carvers, grant temporary resilience against physical harm. When invoked, they summon a spectral image of a stone walker to briefly bolster your defenses, channeling the raw power of the mountain itself.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '⚔️',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grant temporary damage resistance",
            "summon spectral stone walker (brief)",
            "increase physical defense by 15%",
            "chance to inflict bleeding on attack"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'Griffon Courier',
        levelRequirement: 20
    },

    'faerun_item_shadow_scrolls_of_silent_whispers': {
        id: 'faerun_item_shadow_scrolls_of_silent_whispers',
        name: "Shadow Scrolls of Silent Whispers - The Collector's Edition",
        description: "Recovered from a cultist’s hidden sanctum beneath Candlekeep, these scrolls pulse with a chilling darkness.  Unfurling them releases a torrent of unsettling whispers, capable of momentarily blurring your perception and granting advantage on stealth checks in dim environments.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7500,
        icon: '👻',
        stock: 8,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "advantage on stealth checks in dim light",
            "briefly blur perception (confusion effect)",
            "chance to inflict fear on nearby enemies",
            "increased movement speed in shadows"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'Dark Elf Messenger',
        levelRequirement: 35
    },

    'faerun_item_mythic_scroll_of_the_stone_gods': {
        id: 'faerun_item_mythic_scroll_of_the_stone_gods',
        name: "Mythic Scroll of the Stone Gods - The Obsidian Verdict",
        description: "Forged in a forgotten temple to a slumbering earth god, this scroll radiates an immense, unsettling power. Unrolling it triggers a devastating tremor and summons a colossal golem crafted from obsidian, capable of crushing foes with righteous fury.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 65000,
        icon: '🗿',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "causes massive earthquake (area-of-effect)",
            "summons obsidian golem (powerful melee combatant)",
            "chance to petrify enemies",
            "temporary immunity to earth-based attacks"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'Divine Pegasus',
        levelRequirement: 50
    },

    'doughnut_hole_item_pulsating_center_shard': {
        id: 'doughnut_hole_item_pulsating_center_shard',
        name: "The Pulsating Center Shard",
        description: "A fractured piece of solidified void energy, this shard emits a faint, rhythmic throb. Holding it brings an unsettling awareness to the immediate vicinity, subtly warping perceptions of space and time – a disconcerting reminder of the Fated Place’s influence.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 750,
        icon: '✨',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "Minor Distortion Field – Reduces enemy accuracy by 10% for 30 seconds.",
            "Void Resonance – Grants +5 to Insight checks for 1 minute.",
            "Ephemeral Echo – Briefly reveals hidden passages (chance of 20%)"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dimensional Rift Courier',
        levelRequirement: 15
    },

    'doughnut_hole_item_jeweled_maker_nulls': {
        id: 'doughnut_hole_item_jeweled_maker_nulls',
        name: "Jeweled Maker's Nulls - Mk.37",
        description: "These meticulously crafted nulls are constructed from obsidian infused with shimmering, internally-lit jewels.  Each one hums with a faint energy signature, believed to be remnants of forgotten workshops dedicated to manipulating the center’s power – perfect for channeling minor dimensional shifts.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '💎',
        stock: 27,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Dimensional Anchor – Provides a small area of protection against void effects (50% reduction).",
            "Null Conduit – Allows for the creation of temporary null spaces (limited uses per day)",
            "Energy Absorption - Absorbs 25% of incoming magical damage."
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Void Carrier Drone',
        levelRequirement: 30
    },

    'doughnut_hole_item_hollow_maker_void_prism': {
        id: 'doughnut_hole_item_hollow_maker_void_prism',
        name: "The Hollow Maker's Void Prism - Prototype Gamma",
        description: "A deceptively simple prism crafted from solidified shadow, the Hollow Maker’s Void Prism refracts ambient void energy into concentrated beams.  It pulses with a cold, unsettling light, hinting at its potential to unravel reality itself – a dangerous tool for those without considerable control.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 6500,
        icon: '🌑',
        stock: 12,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Void Beam - Fires a concentrated beam of void energy (high damage).",
            "Reality Distortion – Causes minor visual and auditory hallucinations in nearby targets.",
            "Dimensional Tether – Briefly stabilizes connections to the Fated Place, potentially summoning minor creatures."
        ],
        vendor: 'center_seller',
        shippedBy: 'Black Hole Transport Vessel',
        levelRequirement: 50
    },

    'warhammer_item_ironclad_desolation_born': {
        id: 'warhammer_item_ironclad_desolation_born',
        name: "Ironclad Desolation Born’s Skull Fragment",
        description: "A splintered fragment from a colossal skull, pulsing with the residual echoes of shattered empires. It radiates an unsettling calm, promising resilience against chaotic forces and bolstering defensive capabilities - but only for those who embrace destruction.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '💀',
        stock: 8,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "Increase Defense by 30%",
            "Chance to reflect chaotic attacks",
            "Grants temporary resistance to fear effects",
            "Passive regeneration of health (small amount)"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'Imperial Courier Drone',
        levelRequirement: 35
    },

    'warhammer_item_chaos_dealer_mk_9_skull_whisperer': {
        id: 'warhammer_item_chaos_dealer_mk_9_skull_whisperer',
        name: "Chaos Dealer Mk.9 Skull Whisperer’s Resonance Core",
        description: "This pulsating skull core hums with the raw energy of a thousand fragmented realities, allowing the wielder to briefly perceive and manipulate chaotic probabilities. Handle with extreme caution - prolonged exposure risks dissolving your sanity.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '🌀',
        stock: 15,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Chance to trigger a random chaotic effect (positive or negative)",
            "Increase critical hit chance by 20%",
            "Allows temporary manipulation of enemy movement",
            "Brief glimpse into possible future outcomes"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Night Serpent Delivery',
        levelRequirement: 25
    },

    'warhammer_item_fate_forge_obsidian_skull_of_echoes': {
        id: 'warhammer_item_fate_forge_obsidian_skull_of_echoes',
        name: "Fate Forge Obsidian Skull of Echoes - Variant VII",
        description: "An intricately carved obsidian skull, eternally resonating with the fragmented timelines of this world. It whispers forgotten prophecies and offers glimpses into alternative realities – a dangerous tool for those unprepared to confront their own destiny.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5500,
        icon: '🔮',
        stock: 33,
        rarity: 'uncommon',
        stockType: 'delivery_only',
        effects: [
            "Chance to gain a temporary prophecy (positive or negative)",
            "Increased magic resistance",
            "Slows down enemies in a small radius",
            "Provides bonus experience points"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Fate Weaver’s Cart',
        levelRequirement: 18
    },

    'warhammer_item_bonecrusher-of-broken-regiments': {
        id: 'warhammer_item_bonecrusher-of-broken-regiments',
        name: "Bonecrusher of Broken Regiments",
        description: "This colossal warhammer, forged from the petrified bones of countless legionaries, resonates with the echoes of shattered battle lines. Holding it grants a terrifying command over lesser combatants and a chilling aura that weakens the spirit of any foe.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🔨',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increases attack damage by 30%",
            "grants temporary control over nearby enemies (chance to stun)",
            "reduces enemy morale - chance of critical hit increase",
            "lowers user's defense by 15%"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'winged-beast',
        levelRequirement: 35
    },

    'warhammer_item-rune-master-of-desolation': {
        id: 'warhammer_item-rune-master-of-desolation',
        name: "Rune Master of Desolation",
        description: "A dark, runic armor crafted from the remains of a shattered warlord’s throne. It grants formidable protection against physical attacks and channels potent runes of decay, inflicting grievous wounds upon your enemies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 9500,
        icon: '🛡️',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases physical defense by 40%",
            "deals minor necrotic damage with each attack",
            "chance to inflict 'Wound' on hit (reduces healing)",
            "slows enemy movement speed"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'mechanical-drone',
        levelRequirement: 28
    },

    'warhammer_item-fate-weaver-chronal-scribe': {
        id: 'warhammer_item-fate-weaver-chronal-scribe',
        name: "Fate Weaver Chronal Scribe",
        description: "This unsettling device, a combination of intricate clockwork and bone fragments, allows the wielder to subtly manipulate the flow of time around themselves. It’s a dangerous tool capable of altering battle outcomes, but at a terrible cost.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6000,
        icon: '⏳',
        stock: 8,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "Chance to rewind time by a short duration (3 seconds)",
            "Slows enemy attack speed",
            "Increases critical hit chance slightly",
            "Causes minor temporal distortions - enemies have reduced accuracy"
        ],
        vendor: 'fate_forge',
        shippedBy: 'dimensional-portal',
        levelRequirement: 15
    },

    'middle_earth_item_the_stonecutter_forger': {
        id: 'middle_earth_item_the_stonecutter_forger',
        name: "The Stonecutter Forger's Axe Head",
        description: "A brutally efficient axe head, forged from petrified wood infused with dwarven runes. When swung, it emits a faint tremor, bolstering the wielder’s strength and granting temporary resistance to earth-based attacks. Perfect for disrupting Orcish encampments or reclaiming lost mines.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 250,
        icon: '🔨',
        stock: 47,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increased strength",
            "earth resistance",
            "chance to stun"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'cart',
        levelRequirement: 15
    },

    'middle_earth_item_the_shadowed_blade_of_mournful_echoes': {
        id: 'middle_earth_item_the_shadowed_blade_of_mournful_echoes',
        name: "The Shadowed Blade of Mournful Echoes",
        description: "A wickedly curved blade, crafted from a single shard of obsidian harvested from the Black Gate. Each swing whispers with the lamentations of lost souls, inflicting fear upon weaker opponents and briefly obscuring vision for those who dare face it. A chilling weapon for stealthy assassins or delving into forgotten tombs.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '🔪',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "fear effect",
            "vision blur",
            "increased critical chance"
        ],
        vendor: 'elven_market',
        shippedBy: 'hawk',
        levelRequirement: 30
    }
};
