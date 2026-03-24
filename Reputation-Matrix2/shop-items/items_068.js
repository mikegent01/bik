// Shop items file 68
// Generated: 2026-03-22 18:10:10
// Items: 38

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_068 = {
    'leclaire_isle_dwarven_rolling_pin': {
        id: 'leclaire_isle_dwarven_rolling_pin',
        name: "Dwarven Rolling Pin of Resilience",
        description: "Forged by the legendary Dough Folk dwarves, this rolling pin is surprisingly sturdy and imbued with a faint warmth. It's perfect for kneading dough or delivering a surprising smack to any unfortunate foe – Wario would love it!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🔨',
        stock: 18,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increase_strength_2d4",
            "chance_to_stun_on_hit",
            "resistance_to_bludgeoning_damage"
        ],
        vendor: 'dough_depot',
        shippedBy: 'stone_cart',
        levelRequirement: 8
    },

    'leclaire_isle_sugar_crystal_orb': {
        id: 'leclaire_isle_sugar_crystal_orb',
        name: "Sugar Crystal Orb of Sweet Deception",
        description: "This mesmerizing orb pulsates with sugary energy, radiating an aura of irresistible temptation. It’s rumored to subtly influence the minds of nearby creatures – perfect for distracting guards or charming a grumpy pastry chef (or Wario!).",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '🍬',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance_to_charm_creatures",
            "increase_luck_1d6",
            "illusionary_effect_chance"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'magical_delivery_griffin',
        levelRequirement: 10
    },

    'equestria_item_golden_mane_brush': {
        id: 'equestria_item_golden_mane_brush',
        name: "Golden Mane Brush of Regal Style",
        description: "This exquisitely crafted brush is rumored to have been used by Princess Twilight herself! It doesn't just groom manes – it subtly enhances the wearer’s appearance and grants a minor bonus to intimidation, making them appear utterly majestic.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 800,
        icon: '👑',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "charisma +5 for 30 seconds",
            "intimidation +2",
            "chance to inspire nearby allies"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'royal_messenger',
        levelRequirement: 4
    },

    'connectopia_pioneer_platearm': {
        id: 'connectopia_pioneer_platearm',
        name: "Scrap-Forged Plate",
        description: "Fashionably dented and surprisingly sturdy, this plate was crafted from salvaged machinery. It’ll protect you from a few stray blocks… or at least make you look like a tough pioneer! Just try not to get stuck in it.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🛡️',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "armor_3",
            "resistance_to_earth",
            "chance_to_block"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'wagon',
        levelRequirement: 10
    },

    'doughnut_hole_graviton_ring': {
        id: 'doughnut_hole_graviton_ring',
        name: "Gravitational Resonance Ring",
        description: "A bizarre ring crafted from solidified gravity. Wearing this allows you to subtly manipulate local gravitational forces – useful for leaping across gaps, pulling enemies closer, or accidentally crushing your own feet!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '🌀',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased_jump_height",
            "chance_to_pull_enemies",
            "minor_gravity_manipulation"
        ],
        vendor: 'center_seller',
        shippedBy: 'Void Courier',
        levelRequirement: 6
    },

    'doughnut_hole_anomaly_core': {
        id: 'doughnut_hole_anomaly_core',
        name: "Singularity Seed",
        description: "A pulsating core of chaotic energy. Planting this in the ground creates a small, temporary anomaly – useful for confusing enemies or quickly disappearing (though not without a slight wobble). Handle with extreme caution; it might just try to eat your socks!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '💥',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "create_minor_anomaly",
            "chance_to_confuse_enemies",
            "small_damage_over_time",
            "temporary_speed_boost"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dimensional Package',
        levelRequirement: 10
    },

    'almost_edge_liminal_pact': {
        id: 'almost_edge_liminal_pact',
        name: "Pact of the Liminal Trader",
        description: "A small, tarnished silver medallion bearing the symbol of a smiling, unsettling face. This pact allows you to briefly glimpse through the boundaries of reality, offering insights and...other opportunities.",
        category: SHOP_CATEGORIES.FACTION,
        price: 6750,
        icon: '🤝',
        stock: 34,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "chance_to_find_hidden_items_15%",
            "improve_negotiation_skill_5",
            "grant_immunity_to_fear_3"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'shifting_portal',
        levelRequirement: 4
    },

    'doughnut_hole_gravitron_boots': {
        id: 'doughnut_hole_gravitron_boots',
        name: "Voidstep Boots",
        description: "These boots were forged from solidified gravitational anomalies harvested near the Doughnut Hole. They allow you to briefly defy gravity, letting you leap incredible distances or momentarily float above dangerous terrain – just try not to fall into a black hole!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🚀',
        stock: 5,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increased jump height",
            "temporary levitation (3 seconds)",
            "resistance to gravity effects"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Dimensional Rift Courier',
        levelRequirement: 9
    },

    'doughnut_hole_singularity_berry': {
        id: 'doughnut_hole_singularity_berry',
        name: "Echo Bloom",
        description: "A pulsating berry that resonates with the void's energy. Consume this to briefly glimpse echoes of past events within the Doughnut Hole – but be warned, prolonged exposure can lead to existential dread!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '🔮',
        stock: 35,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grants a vision of the past (1 round)",
            "restores minor sanity loss"
        ],
        vendor: 'center_seller',
        shippedBy: 'Void Delivery Drone',
        levelRequirement: 3
    },

    'doughnut_hole_godly_chrono_donut': {
        id: 'doughnut_hole_godly_chrono_donut',
        name: "Temporal Glaze",
        description: "Legend says this donut was created by a time-lost baker. It allows for minor temporal manipulations - rewind your last action, or briefly pause time around you! Wario loves it – and he’s *never* wrong about food.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 850000,
        icon: '⏳',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "rewind last action (3 seconds)",
            "brief time pause (5 seconds)",
            "increased chance of positive outcomes"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Chronal Shipping Vessel',
        levelRequirement: 25
    },

    'faerun_item_potion_of_speedy_wario': {
        id: 'faerun_item_potion_of_speedy_wario',
        name: "Potion of Speedy Wario",
        description: "Brewed by a slightly eccentric gnome, this potion smells faintly of strawberries and mischief. Drink it quickly and you’ll be zipping around like Wario himself – just try not to smash everything!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🏃',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grant +3 movement speed for 6 turns",
            "increase attack damage by 2"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'messenger_hawk',
        levelRequirement: 1
    },

    'connectopia_chronos_fragment': {
        id: 'connectopia_chronos_fragment',
        name: "Temporal Block Shard",
        description: "A fragment of a shattered time-block! Holding this shard briefly can slow down enemies or accelerate your own actions – just don't mess with the timeline too much, or Wario might be *really* mad.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 18000,
        icon: '⏳',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "slow_enemy_speed",
            "increase_action_speed",
            "chance_to_create_temporal_distortion"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'zeppelin',
        levelRequirement: 15
    },

    'almost_edge_echoing_dust': {
        id: 'almost_edge_echoing_dust',
        name: "Echoing Dust",
        description: "A shimmering, grey dust that seems to replay snippets of forgotten conversations. When sprinkled on a surface, it creates a faint echo of the last sound made there – potentially revealing hidden passages or triggering traps!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '🔊',
        stock: 42,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "reveal_hidden_passage_10pct",
            "trigger_trap_5pct",
            "detect_sound_range_3"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Gravity Sling',
        levelRequirement: 5
    },

    'pokemon_item_chronometric_orb': {
        id: 'pokemon_item_chronometric_orb',
        name: "Chronometric Orb of Temporal Distortion",
        description: "This swirling orb allows for brief manipulation of time, letting you rewind a single action or accelerate your own movements! Use it wisely, or risk creating paradoxes – Wario hates paradoxes!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 18000,
        icon: '⏳',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "rewind_last_attack",
            "increase_speed_by_25_for_1_turn",
            "chance_to_dodge_attacks"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Time-Traveling Beetle',
        levelRequirement: 10
    },

    'curiosity_ominous_amulet': {
        id: 'curiosity_ominous_amulet',
        name: "Ominous Amulet of Whispers",
        description: "This unsettling amulet seems to murmur dark secrets. Wear it and gain a slight advantage in detecting traps or hidden enemies... though the whispers might drive you mad! Wario thinks it's just creepy, but maybe useful?",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🔮',
        stock: 38,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance to detect traps: 15%",
            "increased perception: +1",
            "vulnerability to psychic damage: 20%"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'hawk',
        levelRequirement: 4
    },

    'warhammer_shadowstrike': {
        id: 'warhammer_shadowstrike',
        name: "Shadowstrike Warhammer",
        description: "A dark and ominous warhammer, rumored to have been crafted by the shadows themselves. It deals damage infused with chilling darkness. Wario says it’s perfect for smashing things...and scaring people!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🌑',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "damage: bludgeoning 1d10 + strength modifier",
            "chance to inflict fear: 15%",
            "shadow damage: deals 1d6 necrotic damage on hit",
            "increased critical hit chance: 10%"
        ],
        vendor: 'fate_forge',
        shippedBy: 'dark_horse',
        levelRequirement: 9
    },

    'almost_edge_item_chronometric_orb': {
        id: 'almost_edge_item_chronometric_orb',
        name: "The Lost Tick of Time",
        description: "A seemingly ordinary orb, but when activated it briefly slows down the flow of time within a small radius. Wario might use this to snatch extra coins or escape awkward situations… maybe.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 75000,
        icon: '⏳',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "slow_time_within_radius_5",
            "increase_reaction_speed_by_5",
            "chance_to_dodge_attacks"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'temporal_anomaly',
        levelRequirement: 17
    },

    'earth_land_potion_of_wario_gust': {
        id: 'earth_land_potion_of_wario_gust',
        name: "Wario's Guaranteed Gust Potion!",
        description: "This shimmering purple potion tastes suspiciously like strawberry and regret. Drink it to unleash a miniature whirlwind – perfect for knocking enemies off cliffs, stealing snacks, or just generally causing chaos!  Wario isn’t responsible if you accidentally blow yourself away.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '💨',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "movement speed: +10% (3 rounds)",
            "chance to push target (20%)",
            "small explosion radius (1.5m)"
        ],
        vendor: 'magic_shop',
        shippedBy: 'Delivery Drone',
        levelRequirement: 4
    },

    'earth_land_godly_amulet_of_wario_luck': {
        id: 'earth_land_godly_amulet_of_wario_luck',
        name: "Wario's Lucky Charm (Seriously)",
        description: "Legend says this amulet was blessed by a particularly grumpy earth elemental. It doesn’t *guarantee* success, but it does dramatically increase your chances of finding treasure… or accidentally setting things on fire. Wario takes no responsibility for any unexpected explosions.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 750000,
        icon: '🍀',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "chance to double loot (30%)",
            "increased critical hit chance (15%)",
            "resistance: curses (50%)",
            "chance to summon a small Wario clone for one round"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'Royal Griffin Delivery Service',
        levelRequirement: 25
    },

    'teyvat_item_izumi_amulet': {
        id: 'teyvat_item_izumi_amulet',
        name: "Izumi Amulet of Temporal Distortion",
        description: "A shimmering amulet crafted from the heart of a captured Izanami's tears, this trinket subtly warps time around you. It slightly reduces incoming damage and allows for a brief rewind of your actions - just try not to mess it up!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '⏳',
        stock: 21,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "damage reduction +5%",
            "chance to rewind action (10%)",
            "increased mana regeneration +7%"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'sea_serpent',
        levelRequirement: 6
    },

    'teyvat_item_archon_favor': {
        id: 'teyvat_item_archon_favor',
        name: "Archon Favor - A Taste of Justice",
        description: "A magically preserved sweet treat, rumored to be a favorite of the Seven Archons. Consumption grants a temporary boost in Charisma and reveals hidden dialogue options – because sometimes you just need a little divine persuasion!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 600,
        icon: '🍬',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "charisma +20 for 3 turns",
            "increased chance of persuasion checks",
            "chance to gain a friendly NPC (5%)"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'cargo_ship',
        levelRequirement: 1
    },

    'equestria_item_harmonious_scroll': {
        id: 'equestria_item_harmonious_scroll',
        name: "Scroll of Unified Harmony",
        description: "This ancient scroll pulses with the very essence of friendship! Unrolling it creates a wave of calming energy, bolstering your party's morale and granting temporary resistance to fear – perfect for dealing with grumpy unicorns!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🎶',
        stock: 87,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "restore_morale_50",
            "grant_resistance_to_fear_3",
            "heal_small_amount_of_health"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'magic_delivery',
        levelRequirement: 4
    },

    'equestria_item_elemental_amulet': {
        id: 'equestria_item_elemental_amulet',
        name: "Amulet of Equestrian Balance",
        description: "Forged by the Crystal Empire's finest artisans, this amulet channels the raw power of Equestria’s elements. Wearing it provides a constant supply of magic, but be warned – prolonged use may cause spontaneous confetti explosions!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '💎',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increase_magic_damage_25%",
            "grant_mana_regen_10",
            "chance_to_reflect_damage_10%"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'royal_guard_carrier',
        levelRequirement: 10
    },

    'midlands_item_seraphina_scepter': {
        id: 'midlands_item_seraphina_scepter',
        name: "The Scepter of Silent Command",
        description: "Forged in the heart of a collapsing temple, this scepter radiates an aura of unsettling authority. It allows its wielder to command lesser spirits and project an overwhelming sense of dread – though it’s rumored to attract unwanted attention from celestial beings. Wario would *love* this.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 750000,
        icon: '👑',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "chance to stun enemies",
            "increased spellcasting ability (magic users)",
            "aura of fear affecting nearby creatures",
            "automatic success on intimidation checks"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'celestial messenger',
        levelRequirement: 30
    },

    'middle_earth_mushroom_of_forgetfulness': {
        id: 'middle_earth_mushroom_of_forgetfulness',
        name: "Mushroom of Forgetfulness",
        description: "This strangely luminescent mushroom smells faintly of pipeweed and regret. Consumption grants temporary amnesia, perfect for escaping awkward conversations or… forgetting where you left your treasure!  It's also surprisingly delicious (if a little unsettling).",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '🍄',
        stock: 67,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grants 3 turns of confusion",
            "chance to forget a quest objective (10%)",
            "restores 5 sanity points"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_express',
        levelRequirement: 6
    },

    'middle_earth_scroll_of_darkness': {
        id: 'middle_earth_scroll_of_darkness',
        name: "Scroll of Darkness",
        description: "This brittle parchment radiates an unnatural chill. Unrolling it unleashes a wave of absolute darkness, capable of obscuring vision and terrifying the unwary! Don’t worry if you can't read it; nobody can.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 12000,
        icon: '🌑',
        stock: 3,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "creates an area of darkness (15ft radius)",
            "chance to inflict blindness on a single target (20%)",
            "deals 1d6 necrotic damage per turn within the dark area"
        ],
        vendor: 'elven_market',
        shippedBy: 'shadowfax',
        levelRequirement: 15
    },

    'the_edge_obsidian_mirror': {
        id: 'the_edge_obsidian_mirror',
        name: "Reflections of Ruin",
        description: "This unsettling mirror doesn’t reflect your image – it shows you potential futures, fractured and terrifying. Gazing too long may reveal a version of yourself consumed by the abyss... or simply give you a really bad headache. Wario recommends looking away.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '🪞',
        stock: 55,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance_to_see_future",
            "small_damage_on_reflection",
            "provides_minor_illusion_effect"
        ],
        vendor: 'final_shop',
        shippedBy: 'giant_spider',
        levelRequirement: 2
    },

    'middle_earth_mushroom_of_eldoria': {
        id: 'middle_earth_mushroom_of_eldoria',
        name: "Eldoria's Delightful Fungus",
        description: "This pulsating mushroom seems to hum with ancient magic, guaranteed to make your stomach rumble with delight (or a mild case of indigestion - Wario isn’t responsible!). Consume it for a temporary boost in stamina and a strangely pleasant aroma.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '🍄',
        stock: 78,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "increase_stamina_5",
            "grant_pleasant_smell_30",
            "minor_chance_of_temporary_confusion"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_express',
        levelRequirement: 8
    },

    'middle_earth_scroll_of_forgotten_curses': {
        id: 'middle_earth_scroll_of_forgotten_curses',
        name: "Grimoire of Lost Tongues",
        description: "Bound in dragon hide and inscribed with glyphs of forgotten magic, this scroll contains a collection of potent curses. Use it carefully; unleashing these ancient words could have… unexpected consequences (like summoning a grumpy goblin).",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 600,
        icon: '📜',
        stock: 15,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "chance_to_curse_target_20%",
            "deals_minor_poison_damage_3",
            "increases_mana_regen_5"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'flying_carpet',
        levelRequirement: 4
    },

    'almost_edge_void_blade': {
        id: 'almost_edge_void_blade',
        name: "Void-Touched Edge",
        description: "A wickedly curved blade crafted from solidified darkness. This weapon whispers of the void, and its strikes leave trails of chilling emptiness – a terrifying prospect for any foe.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '🔪',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Deals an additional 5 slashing damage",
            "Chance to inflict 'Fear' on hit (10%)",
            "Slightly reduces target’s attack speed by 10%"
        ],
        vendor: 'void_merchant',
        shippedBy: 'Void Serpent Delivery',
        levelRequirement: 6
    },

    'faerun_item_shadows_whisper': {
        id: 'faerun_item_shadows_whisper',
        name: "Whispering Skull of Vorlag",
        description: "This unsettling skull seems to murmur secrets – mostly about bad decisions and lost treasure. Don’t listen too closely, or you might start seeing things… especially Wario's prize-winning mushrooms.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 18000,
        icon: '💀',
        stock: 7,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "chance to reveal hidden passages (5%)",
            "detects undead within 30 feet",
            "provides cryptic advice (DM discretion)"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'flying_carpet',
        levelRequirement: 12
    },

    'faerun_item_dark_artifact': {
        id: 'faerun_item_dark_artifact',
        name: "Fragment of the Obsidian Eye",
        description: "This shard pulses with a malevolent energy – it’s definitely been touched by something… dark. Use at your own risk, and don't be surprised if you start craving shiny objects and causing minor chaos.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 250000,
        icon: '👁️‍🗨️',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance to inflict madness on hit (20%)",
            "grants temporary access to shadowfell portals",
            "increases charisma by +5 (but also attracts evil entities)"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'dimensional_rift',
        levelRequirement: 22
    },

    'connectopia_sparkle_granules': {
        id: 'connectopia_sparkle_granules',
        name: "Glimmering Grit of the Gears",
        description: "These tiny, shimmering granules are rumored to be remnants of a collapsed clockwork city. Sprinkle them on your tools for a temporary boost in crafting efficiency! Don’t worry if they make you slightly dizzy – it’s just the magic.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '✨',
        stock: 91,
        rarity: 'common',
        stockType: 'limited_daily',
        effects: [
            "crafting_speed_boost",
            "temporary_confusion"
        ],
        vendor: 'craft_corner',
        shippedBy: 'mechanical_drone',
        levelRequirement: 1
    },

    'connectopia_pioneer_lantern': {
        id: 'connectopia_pioneer_lantern',
        name: "Lumiflux Beacon",
        description: "Never wander in the dark again! This lantern doesn't just provide light; it emits a comforting hum and occasionally attracts curious glow-bugs. Just don’t stare at it for too long, or you might start seeing blocky ghosts!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '💡',
        stock: 18,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "night_vision",
            "minor_healing",
            "attracts_glowbugs"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'winged_mailbird',
        levelRequirement: 9
    },

    'pokemon_item_divine_scale': {
        id: 'pokemon_item_divine_scale',
        name: "Divine Scale of Arceus",
        description: "A shimmering scale, purportedly shed by the god Pokémon himself! Holding this scale grants unparalleled luck and a connection to the very fabric of reality. Use it wisely, or you might accidentally summon a horde of mischievous Pokémon – Wario would LOVE that.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 750000,
        icon: '✨',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "guaranteed_critical_hit",
            "chance_to_heal_allies",
            "increased_luck_for_next_battle",
            "temporary_invincibility"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Celestial Courier',
        levelRequirement: 35
    },

    'the_edge_slime_goo': {
        id: 'the_edge_slime_goo',
        name: "Abyssal Slime Goo",
        description: "This pulsating, violet slime seems to giggle when you hold it. It’s surprisingly sticky and might just be the key to escaping that nasty pit – or attracting even *more* trouble!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🧪',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "heals_15_hp",
            "chance_to_apply_poison_3%"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'winged_beetle',
        levelRequirement: 2
    },

    'the_edge_resonance_shard': {
        id: 'the_edge_resonance_shard',
        name: "Echoing Resonance Shard",
        description: "A fragment of something… ancient. Holding this shard causes unsettling whispers in your mind, and a faint vibration that seems to shift the very air around you.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '💎',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases_magic_resistance_10%",
            "chance_to_stun_target_5%"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'dimensional_rift',
        levelRequirement: 6
    },

    'earth_land_guild_scribe_service': {
        id: 'earth_land_guild_scribe_service',
        name: "Scroll of Precise Recordings",
        description: "Need your adventurer's tale chronicled for posterity? The Guild Quartermaster offers meticulous transcriptions of your exploits, complete with detailed illustrations! This service ensures your legend lives on… and might just impress the elders.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 800,
        icon: '📝',
        stock: 99,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grant 50 XP",
            "provides a detailed written account of the party's adventure (can be used as a quest reward)",
            "adds +1 to persuasion checks related to storytelling"
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'messenger_hawk',
        levelRequirement: 1
    }
};
