// Shop items file 67
// Generated: 2026-03-22 18:07:23
// Items: 100

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_067 = {
    'midlands_item_whispering_stone': {
        id: 'midlands_item_whispering_stone',
        name: "Stone of Shifting Secrets",
        description: "A strangely warm, grey stone that seems to hum with forgotten whispers. Touching it reveals cryptic clues about nearby dangers and hidden passages… but beware, the secrets come at a price – your dreams may never be quite the same.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '🔮',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance to reveal hidden passages (10%)",
            "provides minor insight into enemy weaknesses",
            "occasional dream visions (can be beneficial or terrifying)"
        ],
        vendor: 'fractured_forge',
        shippedBy: 'messenger_hawk',
        levelRequirement: 4
    },

    'midlands_item_warrio_s_lucky_charm': {
        id: 'midlands_item_warrio_s_lucky_charm',
        name: "Wario's Golden Grub",
        description: "A gleaming, oversized grub crafted from pure gold. Legend says Wario himself bestowed this charm upon a brave adventurer - and it’s probably still sticky with leftover grub juice.  It definitely brings good luck... or at least prevents you from tripping.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '🪙',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increased luck (+10%)",
            "chance to avoid critical hits (5%)",
            "temporary resistance to poison and disease"
        ],
        vendor: 'midland_merchant',
        shippedBy: 'winged_beetle',
        levelRequirement: 10
    },

    'internet_meme_weapon': {
        id: 'internet_meme_weapon',
        name: "Distorted Denial of Service Blade",
        description: "Crafted from compressed viral data, this blade disrupts enemy systems with a barrage of chaotic memes! It’s said to induce temporary confusion and a crippling urge to watch cat videos. Wario would totally use this!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '💥',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "deals psychic damage with a chance to stun",
            "chance to inflict 'meme overload' - reduces enemy accuracy",
            "creates a temporary distraction effect"
        ],
        vendor: 'cyber_market',
        shippedBy: 'fiber_optic_cable',
        levelRequirement: 10
    },

    'almost_edge_void_shard_of_tenebrous': {
        id: 'almost_edge_void_shard_of_tenebrous',
        name: "Void Shard of Tenebrous",
        description: "Pulled from the edges of reality, this jagged shard whispers secrets best left unheard. Holding it provides a minor boon to perception and unsettling insights - just don't stare at it for too long.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🌌',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increase_perception_by_3",
            "chance_to_reveal_hidden_secrets",
            "grant_minor_shadow_resistance"
        ],
        vendor: 'void_merchant',
        shippedBy: 'temporal_anomaly',
        levelRequirement: 10
    },

    'almost_edge_cartographer_scroll': {
        id: 'almost_edge_cartographer_scroll',
        name: "Cartographer's Scroll of Lost Paths",
        description: "A meticulously crafted scroll detailing the routes through the liminal spaces of Almost at the Edge. This invaluable guide offers a chance to bypass dangerous areas and reveal hidden pathways – Wario would pay big for this!",
        category: SHOP_CATEGORIES.FACTION,
        price: 800,
        icon: '🗺️',
        stock: 75,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "reveal_nearby_hidden_paths",
            "chance_to_discover_secret_locations",
            "grant_bonus_to_navigation_skill"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'spectral_messenger',
        levelRequirement: 4
    },

    'animatopia_grizzly_charm': {
        id: 'animatopia_grizzly_charm',
        name: "Grizzly's Grumbling Good Luck Stone",
        description: "This hefty stone, carved from a genuine grizzly bear claw (probably), seems to hum with restless energy. It’s said to bring the wearer incredible luck... or possibly just attract hungry bears.  Don't say I didn't warn you!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 230000,
        icon: '🐻',
        stock: 5,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "increase_luck",
            "chance_to_taunt_enemies",
            "grant_advantage_on_survival_checks"
        ],
        vendor: 'forest_market',
        shippedBy: 'winged_squirrel',
        levelRequirement: 18
    },

    'animatopia_tribal_war_drum': {
        id: 'animatopia_tribal_war_drum',
        name: "Rumbleheart’s Rhythm of Rage",
        description: "Crafted from the hide of a war-beast and imbued with primal energy, this drum will make your enemies tremble!  Just try not to start a full-blown tribal war while you're playing it. Wario approves!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🥁',
        stock: 15,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "boosts_attack_damage",
            "chance_to_faze_enemies",
            "increases_movement_speed"
        ],
        vendor: 'tribal_trader',
        shippedBy: 'giant_beetle',
        levelRequirement: 6
    },

    'animatopia_shadow_lantern': {
        id: 'animatopia_shadow_lantern',
        name: "Whisperwind’s Guide to Darkness",
        description: "This lantern doesn't need fuel—it thrives on shadows! It casts a flickering, unsettling light that can disorient foes and reveal hidden paths. Just… don't stare at it for too long. You might see things... bad things.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 1200,
        icon: '🔦',
        stock: 33,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "grants_darkvision",
            "chance_to_apply_blindness",
            "increases_stealth_effectiveness"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'giant_spider',
        levelRequirement: 3
    },

    'midlands_item_voidstone_amulet': {
        id: 'midlands_item_voidstone_amulet',
        name: "Amulet of Whispered Shadows",
        description: "This dark amulet hums with a strange energy, granting the wearer limited control over shadows. Use it wisely, or you might end up trapped in an endless loop of staring at your own reflection... Wario would *love* this!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 65000,
        icon: '🌑',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "grant_shadowstep_movement",
            "chance_to_become_invisible",
            "reduce_vulnerability_to_darkness",
            "slow_down_time_perception"
        ],
        vendor: 'fractured_forge',
        shippedBy: 'dimensional_rift',
        levelRequirement: 18
    },

    'middle_earth_ring_of_silence': {
        id: 'middle_earth_ring_of_silence',
        name: "The Whispering Echo",
        description: "A fragment of a corrupted Ring, this amulet seems to absorb sound. It silences nearby enemies and muffles the wails of tormented spirits...mostly.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 7500,
        icon: '🤫',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "silence_nearby_enemies",
            "reduce_enemy_attack_range",
            "chance_to_disrupt_spellcasting"
        ],
        vendor: 'elven_market',
        shippedBy: 'hawk',
        levelRequirement: 8
    },

    'middle_earth_shire_berry_potion': {
        id: 'middle_earth_shire_berry_potion',
        name: "Pipkin's Pick-Me-Up!",
        description: "Brewed by the finest Shirefolk, this potent berry potion bursts with sweet flavor and a surprising kick. It’s guaranteed to lift your spirits – or at least make you feel slightly less grumpy like Wario.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🍇',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "temporary_health_restoration",
            "increased_movement_speed",
            "buff_to_charisma"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony',
        levelRequirement: 2
    },

    'internet_forbidden_wormhole': {
        id: 'internet_forbidden_wormhole',
        name: "Quantum Glitch Generator",
        description: "A device salvaged from a collapsed server farm. This terrifying contraption rips open temporary rifts in reality, allowing you to teleport short distances... or summon random digital horrors! Use with extreme caution, or risk becoming a permanent data stream.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 65000,
        icon: '👾',
        stock: 12,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "teleport to a random location within 30 feet",
            "chance to summon a corrupted AI construct (weak)",
            "risk of permanent data corruption (-5% chance per use)"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Shadow Courier',
        levelRequirement: 21
    },

    'internet_meme_fragment': {
        id: 'internet_meme_fragment',
        name: "Distorted Reality Lens",
        description: "A fractured shard of a forgotten internet meme. Gazing through it alters your perception, granting you glimpses into alternate realities... and occasionally attracting the attention of bizarre digital entities! It's delightfully unsettling!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 280,
        icon: '😵‍💫',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to see a cryptic vision (provides minor clues)",
            "enemies have a small chance to be temporarily stunned",
            "increases party's luck by 10% for 3 turns"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Packet Post',
        levelRequirement: 3
    },

    'teyvat_item_ember_flare': {
        id: 'teyvat_item_ember_flare',
        name: "Ember Flare Lantern",
        description: "This tiny lantern, infused with residual Pyro energy from Mondstadt, sheds a warm, flickering light that’s surprisingly effective against wandering rats...and maybe even grumpy elementals. It's guaranteed to brighten your night (and possibly set your beard on fire if you hold it too close).",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔥',
        stock: 67,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "increases fire resistance by 5%",
            "provides dim light in dark areas",
            "chance to ignite flammable objects (10%)"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'winged_sprite',
        levelRequirement: 6
    },

    'teyvat_item_stone_of_harmony': {
        id: 'teyvat_item_stone_of_harmony',
        name: "Stone of Harmony - Traveler's Edition",
        description: "A polished stone said to resonate with the balance of all things, though it mostly just feels pleasantly warm. This particular edition is slightly warped from Wario's last attempt to 'improve' it...it still works surprisingly well for calming agitated spirits and minor elemental imbalances.  Don’t worry about the faint smell of banana.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '☯️',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "restores 25 HP and 25 Mana",
            "reduces anger level by 3",
            "chance to nullify a single elemental effect (15%)"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'giant_crab',
        levelRequirement: 10
    },

    'the_edge_ritual_cleansing': {
        id: 'the_edge_ritual_cleansing',
        name: "Ritual Cleansing of the Soul",
        description: "A skilled mystic performs a complex ritual to purge lingering corruption from your weary soul. It's messy, smelly, and surprisingly effective... mostly.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 8000,
        icon: '🕯️',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "remove_all_negative_status_effects",
            "grant_temporary_resistance_to_fear",
            "restore_sanity_points"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'messenger_hawk',
        levelRequirement: 4
    },

    'the_edge_heartstone_of_despair': {
        id: 'the_edge_heartstone_of_despair',
        name: "Heartstone of Despair",
        description: "This obsidian gem radiates an aura of profound sadness. It’s said to amplify negative emotions... perfect for inspiring truly terrible poetry or, you know, just being depressing.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 60000,
        icon: '🖤',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increase_critical_hit_chance_by_5%",
            "chance_to_inflict_weakness",
            "reduce_healing_received_by_10%"
        ],
        vendor: 'final_shop',
        shippedBy: 'dragon_delivery',
        levelRequirement: 12
    },

    'connectopia_block_shredder': {
        id: 'connectopia_block_shredder',
        name: "Rubble Buster 3000",
        description: "This ridiculously oversized block shredder is guaranteed to make short work of any construction debris! Just strap it on and watch as mountains of blocks vanish in a glorious, noisy explosion – perfect for clearing your path or annoying your neighbors.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '💥',
        stock: 5,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increases block mining speed by 30%",
            "chance to create a small block explosion on use (10%)",
            "reduces block repair time by 25%"
        ],
        vendor: 'block_smith',
        shippedBy: 'Express Delivery',
        levelRequirement: 8
    },

    'connectopia_lucky_gear': {
        id: 'connectopia_lucky_gear',
        name: "Synchronized Sprocket of Serendipity",
        description: "Legend says this sprocket was forged by a happy block spirit! Spin it three times and hope for the best – you might find a rare mineral, a helpful blueprint, or just a really shiny brick.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '✨',
        stock: 25,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "chance to find rare crafting materials on use (15%)",
            "increases luck by 5%",
            "provides a small chance of teleporting to a nearby block location"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'Airmail',
        levelRequirement: 12
    },

    'connectopia_sticky_goo_bomb': {
        id: 'connectopia_sticky_goo_bomb',
        name: "Sludge Surprise!",
        description: "Don't let the cute name fool you! This sticky goo bomb is a potent concoction designed to immobilize enemies or clog up pathways. Just chuck it and watch the chaos unfold – Wario would be proud!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🦠',
        stock: 90,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "applies 'sludge' status to target (reduces movement speed by 50%)",
            "chance to create a sticky puddle on impact (20%)",
            "deals minor damage to enemies"
        ],
        vendor: 'craft_corner',
        shippedBy: 'Standard Post',
        levelRequirement: 3
    },

    'connectopia_block_shover': {
        id: 'connectopia_block_shover',
        name: "The Block Buster 3000",
        description: "This ridiculously oversized shovel is perfect for clearing those pesky block piles! It’ll send you flying if you don't watch out – Wario would love this thing!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 650,
        icon: '⛏️',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increases mining speed by 10%",
            "chance to find bonus blocks when mining",
            "increased carrying capacity"
        ],
        vendor: 'block_smith',
        shippedBy: 'rolling_cart',
        levelRequirement: 3
    },

    'connectopia_rapid_repair_kit': {
        id: 'connectopia_rapid_repair_kit',
        name: "Quick Fix Fuel",
        description: "A shimmering, sticky goo that instantly repairs damaged equipment! Just smear it on and watch the magic happen – though be careful, too much might cause spontaneous construction!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 875,
        icon: '🩹',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "restores 50% of equipment durability",
            "chance to prevent future damage for 1 round",
            "small healing effect"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'messenger_bird',
        levelRequirement: 5
    },

    'connectopia_geode_detector': {
        id: 'connectopia_geode_detector',
        name: "The Shiny Finder Deluxe",
        description: "This fancy little device scans the blocks for hidden geodes! It's guaranteed to lead you to riches... or just a lot of disappointment. Wario would be furious if it didn’t work!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3200,
        icon: '💎',
        stock: 15,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "increases chance of finding rare items while mining by 20%",
            "provides a small bonus to crafting skills",
            "detects nearby geodes within a 10-meter radius"
        ],
        vendor: 'craft_corner',
        shippedBy: 'delivery_drone',
        levelRequirement: 8
    },

    'almost_edge_item_driftwood_amulet': {
        id: 'almost_edge_item_driftwood_amulet',
        name: "The Shifting Shores Amulet",
        description: "This unsettling amulet, carved from petrified driftwood and swirling with faint cosmic colors, seems to subtly pull you towards the nearest edge. Wear it and feel a strange compulsion… or maybe just a slight dizziness.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '🌊',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grant_resistance_to_gravity_1",
            "chance_to_teleport_1_percent",
            "minor_speed_boost_3"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'winged_insect',
        levelRequirement: 5
    },

    'almost_edge_item_void_echoes': {
        id: 'almost_edge_item_void_echoes',
        name: "Silence of the Lost Steps",
        description: "These polished obsidian stones whisper with fragmented memories from those who've fallen. Focusing on them grants brief insights, but be warned – prolonged exposure can unravel your sanity… or just give you a headache.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 875,
        icon: '🤫',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance_to_gain_insightful_memory_10_percent",
            "small_chance_of_confusion_5_percent",
            "temporary_buff_to_perception_6"
        ],
        vendor: 'void_merchant',
        shippedBy: 'dimensional_rift',
        levelRequirement: 12
    },

    'almost_edge_item_liminal_cartography': {
        id: 'almost_edge_item_liminal_cartography',
        name: "Charting the Uncharted",
        description: "The Liminal Trader offers a unique service - he meticulously charts the edges of reality itself, creating maps to locations just beyond perception. This session provides detailed notes on potential dangers and hidden pathways – but don't ask where they *actually* lead.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1200,
        icon: '🗺️',
        stock: 5,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "grant_detailed_map_of_adjacent_area",
            "chance_to_reveal_hidden_passage_15_percent",
            "temporary_buff_to_navigation_8"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'temporal_scroll',
        levelRequirement: 18
    },

    'chaos_dealer_fatebinder': {
        id: 'chaos_dealer_fatebinder',
        name: "Fatebinder’s Shard",
        description: "A pulsating fragment of raw chaos, this item allows the wielder to subtly bend the threads of probability – though at a terrible price. Handling it might lead to unpredictable consequences... like suddenly craving pickled onions or speaking in riddles.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7500,
        icon: '🔮',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "chance to reroll failed skill checks",
            "small chance to inflict madness on the target",
            "temporary increase in luck stat",
            "chance to cause a minor localized reality distortion"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'dimensional_rift',
        levelRequirement: 12
    },

    'fate_forge_shadowcharm': {
        id: 'fate_forge_shadowcharm',
        name: "Shadow Charm of Whispered Secrets",
        description: "This intricately carved charm seems to absorb the very darkness surrounding it. It whispers unsettling truths and forgotten prophecies – useful for a strategist, or terrifying for the faint of heart! Wario recommends using it to find hidden treasure…or just spook your enemies.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 12000,
        icon: '🤫',
        stock: 3,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "grants advantage on perception checks in dark areas",
            "chance to steal a small amount of gold from NPCs",
            "provides resistance to fear effects",
            "allows the wearer to communicate with spirits (limited)"
        ],
        vendor: 'fate_forge',
        shippedBy: 'spectral_messenger',
        levelRequirement: 18
    },

    'almost_edge_shard_of_the_void': {
        id: 'almost_edge_shard_of_the_void',
        name: "Fragment of the Unwritten",
        description: "A pulsating shard pulled from the very fabric of non-existence. Holding it feels like staring into an endless, silent scream—a truly unsettling experience for anyone not equipped with a healthy dose of Wario's stubbornness. This thing might just unravel your reality, but hey, at least it’s shiny!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 250000,
        icon: '🌌',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "grant_temporary_immunity_to_fear",
            "chance_to_reveal_hidden_secrets",
            "increase_sanity_by_5",
            "small_probability_of_reality_distortion"
        ],
        vendor: 'void_merchant',
        shippedBy: 'dimensional_rift',
        levelRequirement: 20
    },

    'almost_edge_crimson_banner': {
        id: 'almost_edge_crimson_banner',
        name: "The Edgeguarder's Standard",
        description: "A banner depicting a grotesque, eternally falling doughnut. It’s rumored to be blessed by the forgotten guardians of the void, granting protection against… well, everything that falls off the edge. Plus, it looks really intimidating.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 15000,
        icon: '🚩',
        stock: 35,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "grant_resistance_to_fall_damage",
            "chance_to_disrupt_enemies_attacks",
            "increase_movement_speed_by_5%",
            "provides minor protection against void-based effects"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'winged_beetle',
        levelRequirement: 8
    },

    'almost_edge_liminal_echoes': {
        id: 'almost_edge_liminal_echoes',
        name: "Whispers from the Boundary",
        description: "A collection of tiny, shimmering orbs that contain fragmented memories and unsettling sounds. Listen closely – you might hear your deepest regrets... or Wario's secret recipe for jelly beans. Don’t say I didn’t warn you!",
        category: SHOP_CATEGORIES.FACTION,
        price: 800,
        icon: '🤫',
        stock: 91,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "chance_to_gain_faction_favor_with_the_liminal_traders",
            "provides minor healing over time",
            "increase_perception_by_10%",
            "can be traded for rare ingredients"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'spectral_drone',
        levelRequirement: 3
    },

    'equestria_item_glittering_hoof': {
        id: 'equestria_item_glittering_hoof',
        name: "Glittering Hoof Charm",
        description: "This tiny horseshoe is coated in pure, enchanted glitter! Wearing it grants a shimmering aura and a slight boost to speed—perfect for outrunning grumpy ponies or dazzling your enemies. Wario says ‘It’s shiny! And probably illegal!’",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '✨',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "speed +5%",
            "chance to inflict ‘Sparkle Rot’ (reduces enemy accuracy by 10%)"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Pegasus Express',
        levelRequirement: 3
    },

    'equestria_item_forbidden_shadow_blade': {
        id: 'equestria_item_forbidden_shadow_blade',
        name: "Nightshade’s Whisper",
        description: "A wickedly sharp blade forged in the darkest corners of the Shadow Pony Kingdom. This item is said to grant incredible power, but its use invites misfortune and whispers of forgotten evils. Wario warns: ‘Don’t say I didn’t tell you – this thing might explode!’",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 7800,
        icon: '🔪',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "damage +15%",
            "chance to inflict ‘Nightmare’ (causes temporary confusion)",
            "risk of attracting Shadow Ponies"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Guard Courier',
        levelRequirement: 8
    },

    'equestria_item_elemental_shard': {
        id: 'equestria_item_elemental_shard',
        name: "Shard of Harmony",
        description: "A fragment of crystallized magic, pulsing with the raw power of Equestria’s elements. Holding this shard allows you to channel a single element for a short period – perfect for offensive or defensive maneuvers. Wario just wants to smash it… repeatedly!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🔥💧💨',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "fire damage +8%",
            "water resistance +10%",
            "air speed boost +12%"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Griffin Delivery Service',
        levelRequirement: 10
    },

    'fate_divination_scroll': {
        id: 'fate_divination_scroll',
        name: "The Weaver's Whisper",
        description: "A tightly rolled scroll containing fragments of prophecy, carefully deciphered by the enigmatic Fate Forge. It grants a momentary glimpse into possible futures – though Wario always manages to mess things up regardless!",
        category: SHOP_CATEGORIES.SERVICES,
        price: 6000,
        icon: '🔮',
        stock: 10,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance to reveal hidden enemy weaknesses",
            "provides a temporary bonus to perception checks",
            "allows the user to reroll one failed skill check"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Fate Messenger',
        levelRequirement: 5
    },

    'animatopia_jungle_drum': {
        id: 'animatopia_jungle_drum',
        name: "Rumbling Root Drum",
        description: "This massive drum, carved from the heartwood of an ancient jungle tree, pulses with primal energy! When struck, it unleashes a deafening roar that can momentarily stun nearby enemies and rally your party's spirits – just try not to wake up all the sleeping beasts!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1800,
        icon: '🥁',
        stock: 42,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "stuns target on hit",
            "increases party morale by 10% for 3 turns",
            "chance to cause a minor tremor"
        ],
        vendor: 'tribal_trader',
        shippedBy: 'giant_beetle',
        levelRequirement: 6
    },

    'animatopia_golden_beetle_charm': {
        id: 'animatopia_golden_beetle_charm',
        name: "Buzzing Beetle's Blessing",
        description: "Crafted from a perfectly preserved golden beetle shell, this charm is rumored to bring good fortune and speed! Rub it vigorously – Wario would totally use this to steal all the shiny things!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '✨',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increases movement speed by 10%",
            "grants a small chance to dodge attacks",
            "provides a bonus to dexterity checks"
        ],
        vendor: 'forest_market',
        shippedBy: 'delivery_drone',
        levelRequirement: 10
    },

    'grand_country_crumb_of_despair': {
        id: 'grand_country_crumb_of_despair',
        name: "Crumb of Despair",
        description: "This seemingly insignificant crumb tastes faintly of regret and lost potential. It temporarily lowers the target's confidence, causing them to fumble their attacks or miss crucial rolls - a perfect little party-ruiner!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '😩',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "reduces confidence by 10% for 3 turns",
            "chance to miss next attack roll (15%)",
            "decreases movement speed by 20%"
        ],
        vendor: 'side_seller',
        shippedBy: 'Wobbly Cart',
        levelRequirement: 1
    },

    'grand_country_gravity_adjustment': {
        id: 'grand_country_gravity_adjustment',
        name: "Gravity Adjustment Serum",
        description: "A shimmering, purple concoction that briefly alters your personal gravity. Climb walls with ease or even momentarily float above the battlefield - just don't fall!",
        category: SHOP_CATEGORIES.SERVICES,
        price: 800,
        icon: '🎈',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "grants temporary wall climbing ability for 5 turns",
            "chance to float upwards (20%)",
            "increases jump height by 50%"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Suspended Delivery Drone',
        levelRequirement: 4
    },

    'grand_country_layer_shard_of_confusion': {
        id: 'grand_country_layer_shard_of_confusion',
        name: "Layer Shard of Confusion",
        description: "A jagged fragment pulled from a crumbling, multi-layered structure. Holding it induces a state of disorientation and fragmented thought, making enemies vulnerable to psychic attacks... or just plain silly!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '😵‍💫',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "increases vulnerability to psychic damage by 25%",
            "chance to cause confusion (30%)",
            "reduces accuracy by 10%"
        ],
        vendor: 'layer_market',
        shippedBy: 'Dimensional Portal Courier',
        levelRequirement: 7
    },

    'the_edge_voidwalker_ritual': {
        id: 'the_edge_voidwalker_ritual',
        name: "Ephemeral Binding",
        description: "A meticulously crafted ritual circle and accompanying incense. When performed correctly, it grants a temporary connection to the void - allowing you to briefly phase through solid objects for 3 turns.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 800,
        icon: '👻',
        stock: 25,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Allows the user to phase through solid objects for 3 turns.",
            "Requires a DC 14 Intelligence check to perform successfully."
        ],
        vendor: 'edge_outpost',
        shippedBy: 'Flying Courier',
        levelRequirement: 6
    },

    'the_edge_obsidian_goggles': {
        id: 'the_edge_obsidian_goggles',
        name: "Specter's Gaze",
        description: "These dark goggles are forged from the solidified nightmares of the abyss. They reveal glimpses of creatures lurking just beyond perception and offer a strange protection against their influence.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '👁️',
        stock: 80,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "+1 to Perception",
            "Grants resistance to psychic damage",
            "May cause unsettling visions (minor disadvantage on Charisma checks)"
        ],
        vendor: 'final_shop',
        shippedBy: 'Standard Post',
        levelRequirement: 3
    },

    'animatopia_spirit_charm': {
        id: 'animatopia_spirit_charm',
        name: "Whispering Spirit Charm",
        description: "A beautifully crafted charm made from polished river stones and feathers, imbued with the essence of the Animatopia forest spirits. This charm allows you to briefly communicate with nature and gain insights into local dangers – just watch out for grumpy badgers!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '🌿',
        stock: 25,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "gain advantage on survival checks in forests",
            "chance to detect hidden paths and creatures (10%)",
            "can cast ‘Speak with Animals’ once per day"
        ],
        vendor: 'forest_market',
        shippedBy: 'giant_snail',
        levelRequirement: 3
    },

    'animatopia_warrior_totem': {
        id: 'animatopia_warrior_totem',
        name: "Great Bear Totem of Valor",
        description: "This imposing totem, carved from ancient bear bone and adorned with tribal markings, is a potent symbol of strength and protection. It grants the wearer significant defensive bonuses and a roar that can demoralize enemies – just try not to break it when you get angry!",
        category: SHOP_CATEGORIES.FACTION,
        price: 75000,
        icon: '🐻',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "armor +4",
            "resistance to physical damage",
            "chance to stun enemies with a roar (15%)",
            "grants +2 to charisma checks within the Animatopia territory"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'giant_bee',
        levelRequirement: 17
    },

    'leclaire_isle_pastry_pledge': {
        id: 'leclaire_isle_pastry_pledge',
        name: "Pastry Pledge of Allegiance",
        description: "This miniature croissant, imbued with the blessings of the Dough Folk Queen, promises unwavering loyalty (mostly to delicious treats). It grants a temporary boost in persuasion and charm…and a serious sugar craving.",
        category: SHOP_CATEGORIES.FACTION,
        price: 1200,
        icon: '🥐',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "persuasion: +4 to persuasion checks for 3 turns",
            "charm: +2 to charisma checks for 2 turns",
            "sugar rush: gain temporary speed (increased movement) for 1 turn"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'flying_crust',
        levelRequirement: 6
    },

    'leclaire_isle_frosting_formula': {
        id: 'leclaire_isle_frosting_formula',
        name: "Frosting Formula of Infinite Delight",
        description: "A vial filled with shimmering, iridescent frosting that can alter the very fabric of reality...or at least make your enemies look really silly. Use with caution – excessive application may lead to uncontrollable giggling.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '✨',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "illusion: cast minor illusion spell (once)",
            "visual distraction: enemy targets have -3 accuracy for 4 turns",
            "flavorful coating: chance to gain temporary resistance to cold damage"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'delivery_drone',
        levelRequirement: 10
    },

    'internet_virus_injector': {
        id: 'internet_virus_injector',
        name: "Digital Rot Injector",
        description: "A wickedly clever device for unleashing carefully curated digital plagues! This injector allows you to infect a target with a temporary status effect, causing them to glitch uncontrollably and potentially short-circuiting their defenses. Use it wisely… or don’t.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🦠',
        stock: 8,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "apply 'glitch' status: target is slowed and has a chance to miss attacks",
            "chance to inflict ‘data corruption’ – reduces target’s armor rating by 50%"
        ],
        vendor: 'cyber_market',
        shippedBy: 'encrypted_drone',
        levelRequirement: 8
    },

    'doughnut_hole_echoing_pastry': {
        id: 'doughnut_hole_echoing_pastry',
        name: "Chronal Cruller",
        description: "This cruller tastes strangely of forgotten memories and alternate timelines. Eating it allows you to briefly glimpse a possible past event – a useful trick for investigation, or just a really weird snack!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🕰️',
        stock: 45,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grant_vision_of_past_event",
            "chance_to_gain_knowledge",
            "increase_perception_stat"
        ],
        vendor: 'center_seller',
        shippedBy: 'temporal_package',
        levelRequirement: 10
    },

    'mushroom_kingdom_item_power_potion_x2': {
        id: 'mushroom_kingdom_item_power_potion_x2',
        name: "Super Mushroom X2 - Double the Goo!",
        description: "Two potent potions brewed with concentrated mushroom energy! Drink these and instantly transform into a colossal Super Mushroom, ready to smash through any obstacle… or just roll around in some goo.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3800,
        icon: '🍄💥',
        stock: 15,
        rarity: 'epic',
        stockType: 'delivery_only',
        effects: [
            "transform_into_super_mushroom",
            "increased_size",
            "temporary_invulnerability"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'flying_mushroom',
        levelRequirement: 10
    },

    'doughnut_hole_anomaly_donut': {
        id: 'doughnut_hole_anomaly_donut',
        name: "The Center's Delight",
        description: "Legend claims this donut contains a fragment of the void itself. Consumption may lead to temporary shifts in perception or, worse, an uncontrollable craving for sprinkles. Don’t say I didn’t warn you.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8000,
        icon: '🍩',
        stock: 15,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "temporary_confusion",
            "minor_healing",
            "chance_to_duplicate_item"
        ],
        vendor: 'center_seller',
        shippedBy: 'wormhole',
        levelRequirement: 5
    },

    'doughnut_hole_mythic_void_cruller': {
        id: 'doughnut_hole_mythic_void_cruller',
        name: "Chronal Crumbles",
        description: "A terrifyingly delicious cruller that seems to warp time around the consumer. Prolonged exposure may lead to paradoxes or a sudden fondness for polka music. Wario loves chaos!",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 75000,
        icon: '⏳',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "time_dilation",
            "chance_to_rewind_turn",
            "resistance_to_temporal_attacks",
            "minor_stat_boost"
        ],
        vendor: 'void_vendor',
        shippedBy: 'black_hole',
        levelRequirement: 25
    },

    'leclaire_isle_item_sticky_dough_fingers': {
        id: 'leclaire_isle_item_sticky_dough_fingers',
        name: "Sticky Dough Fingers",
        description: "These deceptively delicious pastries are made with enchanted dough that clings to your fingers! They provide a surprising burst of energy and a delightfully messy eating experience – perfect for distracting enemies or just indulging in some sweet chaos.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '🍪',
        stock: 75,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grant_10_temporary_health",
            "increase_dexterity_by_2",
            "chance_to_stick_to_enemies_on_attack"
        ],
        vendor: 'dough_depot',
        shippedBy: 'swift_delivery_drone',
        levelRequirement: 4
    },

    'leclaire_isle_item_frosting_of_forgetfulness': {
        id: 'leclaire_isle_item_frosting_of_forgetfulness',
        name: "Frosting of Forgetfulness",
        description: "A shimmering, lavender frosting that, when consumed, causes a blissful wave of amnesia. It’s perfect for escaping awkward conversations or erasing the memory of a particularly embarrassing defeat – but don't blame us if you forget *why* you bought it!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 25000,
        icon: '🧠',
        stock: 10,
        rarity: 'mythic',
        stockType: 'limited_daily',
        effects: [
            "temporarily_erase_memory_of_last_combat",
            "chance_to_forget_party_members' names",
            "reduce_enemy_attack_damage_by_50_for_3_rounds",
            "grant_immunity_to_fear_effects"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'magical_messenger_bird',
        levelRequirement: 18
    },

    'leclaire_isle_item_golden_rolling_pin': {
        id: 'leclaire_isle_item_golden_rolling_pin',
        name: "Golden Rolling Pin of Precise Strikes",
        description: "Forged by the legendary Dough King himself, this rolling pin doesn’t just make pastries; it enhances your combat prowess! Its rhythmic movements amplify your attacks and grant a touch of doughy determination.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🥠',
        stock: 5,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "increase_attack_damage_by_10",
            "chance_to_stun_enemies_on_critical_hits",
            "grant_bonus_to_melee_attacks",
            "provides +2 to persuasion checks when offering pastries"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'slow_but_reliable_snail',
        levelRequirement: 10
    },

    'doughnut_hole_temporal_loaf': {
        id: 'doughnut_hole_temporal_loaf',
        name: "Chronal Crumble Bread",
        description: "This loaf of bread seems to exist slightly out of sync with time. A single bite allows the consumer a brief glimpse into possible futures and past echoes – but be warned, prolonged consumption can lead to unsettling temporal distortions!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '⏳',
        stock: 15,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "grants a chance to rewind time by 1 turn (10% chance)",
            "provides minor resistance to temporal manipulation effects",
            "+1 to Wisdom saves"
        ],
        vendor: 'void_vendor',
        shippedBy: 'quantum_tunnel',
        levelRequirement: 12
    },

    'teyvat_item_elemental_amulet': {
        id: 'teyvat_item_elemental_amulet',
        name: "Wario’s Premium Elemental Resonance Amulet",
        description: "This amulet, meticulously crafted by Wario himself, amplifies your connection to the elements! It’s guaranteed to make you feel like a true Archon... or at least slightly more powerful. Don't worry if it glows - that means you have good taste!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🔥',
        stock: 2,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increases elemental damage by 5%",
            "chance to trigger elemental reaction (10%)",
            "provides resistance to a chosen element"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'lightning_bird',
        levelRequirement: 10
    },

    'animatopia_performance_potion': {
        id: 'animatopia_performance_potion',
        name: "Rhythmic Reverie Brew",
        description: "This potent potion grants you an uncanny ability to move to the beat... even if that beat is Wario's terrible drumming! Consume it for a brief but dazzling performance, charming your enemies or winning over crowds. Just try not to spill it – Wario *really* hates messes!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 2500,
        icon: '🎶',
        stock: 98,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increase_charisma_7",
            "chance_to_charm_enemy_20",
            "temporary_movement_speed_bonus_1"
        ],
        vendor: 'forest_market',
        shippedBy: 'flying_parrot',
        levelRequirement: 3
    },

    'internet_quantum_glitch': {
        id: 'internet_quantum_glitch',
        name: "Reality Distortion Field Generator",
        description: "A salvaged quantum processor that bends the very fabric of reality… slightly. Use with caution, as prolonged exposure may cause unpredictable shifts in your surroundings or attract unwanted attention from the Algorithm.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 7800,
        icon: '🌀',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "random_terrain_shift",
            "chance_of_teleportation",
            "attracts_security_drones"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Black Market Courier',
        levelRequirement: 8
    },

    'internet_meme_artifact': {
        id: 'internet_meme_artifact',
        name: "Distorted Distraction Orb",
        description: "Capture a moment of internet madness and bottle it! This orb emits a chaotic burst of flashing images and distorted audio, designed to completely distract your enemies. Warning: May cause existential dread.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '😂',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "high_distraction",
            "chance_of_target_panic",
            "temporary_stat_debuff"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Delivery Only',
        levelRequirement: 10
    },

    'internet_glitch_packet': {
        id: 'internet_glitch_packet',
        name: "Viral Cascade Bomb",
        description: "A shimmering, iridescent packet overflowing with corrupted data! When detonated, it unleashes a wave of chaotic memes that briefly confuses enemies and might even turn them into dancing GIFs – Wario loves a good dance!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '💥',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "deals 1d6 damage to a single enemy (meme-based)",
            "chance to confuse target for 3 turns",
            "applies 'Distracted' debuff"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Drone Delivery',
        levelRequirement: 5
    },

    'internet_sentinel_armor': {
        id: 'internet_sentinel_armor',
        name: "Pixel Sentinel Plate",
        description: "Forged from solidified data streams and guarded by a digital sprite, this armor grants resilience against the constant barrage of information! It's surprisingly comfortable...for a collection of fragmented code.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🛡️',
        stock: 7,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Increases Armor Class by +3",
            "Grants Resistance to Psychic Damage",
            "Chance to reflect minor magical attacks (10%)"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Laser Courier',
        levelRequirement: 8
    },

    'internet_mythic_wormhole': {
        id: 'internet_mythic_wormhole',
        name: "Reality Fracture Core",
        description: "A pulsating, obsidian shard containing a miniature, self-aware wormhole. Touching it could send you to any point in the internet...or erase your very existence! Wario doesn't take responsibility for paradoxes.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 250000,
        icon: '🌀',
        stock: 1,
        rarity: 'mythic',
        stockType: 'godly',
        effects: [
            "Chance to teleport the user to a random location (50%)",
            "Grants 'Data Surge' – temporary boost to stats",
            "Risk of permanent dimensional shift (10%)"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Dimensional Shipping',
        levelRequirement: 20
    },

    'leclaire_isle_item_sticky_dough_boots': {
        id: 'leclaire_isle_item_sticky_dough_boots',
        name: "Sticky Dough Boots",
        description: "These boots are made from the finest, most stubbornly delicious dough! Slip on these and you’ll be able to stick to ceilings and walls – perfect for getting into trouble or escaping a particularly grumpy baker. Just watch out for hungry squirrels!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🥾',
        stock: 5,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increased_movement_speed",
            "climbing_proficiency",
            "sticky_surface_interaction"
        ],
        vendor: 'dough_depot',
        shippedBy: 'wagon',
        levelRequirement: 9
    },

    'leclaire_isle_item_forbidden_frosting_potion': {
        id: 'leclaire_isle_item_forbidden_frosting_potion',
        name: "Forbidden Frosting Potion",
        description: "Brewed with a secret ingredient from the deepest recesses of the pastry caves, this potion tastes… unusual. It temporarily grants you an unnatural sweetness that attracts every monster within a 30ft radius – perfect for distracting guards or luring treasure into your grasp! Don't say I didn't warn you.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 75000,
        icon: '😈',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "attracts_monsters",
            "temporary_sweetness",
            "illusionary_taste",
            "minor_confusion"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'messenger_bird',
        levelRequirement: 17
    },

    'leclaire_isle_item_whimsical_rolling_pin': {
        id: 'leclaire_isle_item_whimsical_rolling_pin',
        name: "Whimsical Rolling Pin",
        description: "This rolling pin isn’t just for making pastries; it's a conduit for minor magical alterations! With a flick of the wrist, you can subtly change the texture or shape of objects – perhaps to create a distraction or quickly repair a damaged item. Just don’t try to roll up your enemies!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '🌀',
        stock: 98,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "minor_shape_alteration",
            "texture_manipulation",
            "illusionary_shift"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'delivery_goat',
        levelRequirement: 3
    },

    'leclaire_isle_item_honeycomb_charm': {
        id: 'leclaire_isle_item_honeycomb_charm',
        name: "Honeycomb Heart Charm",
        description: "This delightfully sticky charm is crafted from the purest honeycomb, rumored to be favored by the Dough Folk Queen herself. It grants a temporary boost to your sweet tooth and attracts wandering bees – maybe they’ll share some honey!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 180,
        icon: '🍯',
        stock: 75,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increase_charisma_2",
            "chance_to_heal_1d4",
            "attracts_bees"
        ],
        vendor: 'dough_depot',
        shippedBy: 'rolling_cart',
        levelRequirement: 3
    },

    'leclaire_isle_item_dough_whisperer_service': {
        id: 'leclaire_isle_item_dough_whisperer_service',
        name: "Dough Whisperer Consultation",
        description: "Feeling stuck with your baking? Hire a Dough Whisperer to analyze the texture and flavor of your latest creation! They can tell you if it's too dry, too sweet, or just plain boring – it’s like having a tiny, crumbly guru!",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1200,
        icon: '💬',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance_to_improve_recipe_quality",
            "reveals_flavor_weakness"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'delivery_pony',
        levelRequirement: 5
    },

    'leclaire_isle_item_golden_croissant_blade': {
        id: 'leclaire_isle_item_golden_croissant_blade',
        name: "Golden Croissant Blade",
        description: "Forged from a single, impossibly golden croissant (don't ask how), this blade slices through enemies with sugary delight.  It’s surprisingly sharp... and slightly sticky.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🥐',
        stock: 3,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "damage_1d6 + bleeding",
            "chance_to_slow_enemy",
            "adds_sticky_effect"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'flying_cake',
        levelRequirement: 9
    },

    'fate_oracle_reading': {
        id: 'fate_oracle_reading',
        name: "A Glimpse of Ruin",
        description: "The Fate Forge's Oracles have peered into the swirling chaos, and they’re offering a brief reading. Be warned: their visions are rarely comforting, but often surprisingly accurate... or just plain unsettling.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1200,
        icon: '🔮',
        stock: 30,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "grant_temporary_buff_wisdom_4",
            "chance_to_receive_prophecy_tip"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Fate Messenger',
        levelRequirement: 3
    },

    'kivotos_item_club_banner_of_chaos': {
        id: 'kivotos_item_club_banner_of_chaos',
        name: "Banner of Chaotic Inspiration",
        description: "This ridiculously oversized banner, emblazoned with a screaming unicorn and a question mark, is guaranteed to inspire… something. It's primarily used by the 'Chaos Club', but its unpredictable energy seems to boost creative rolls for anyone nearby! Just don’t ask where it came from.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🎉',
        stock: 78,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "+1 to Charisma checks when attempting impromptu performances",
            "Grants advantage on rolls involving creative solutions (DM's discretion)",
            "Causes minor distractions in a 5-foot radius"
        ],
        vendor: 'club_supply',
        shippedBy: 'parcel_service',
        levelRequirement: 3
    },

    'kivotos_item_academy_scroll_of_insight': {
        id: 'kivotos_item_academy_scroll_of_insight',
        name: "Academy Scroll of Insight",
        description: "This ancient scroll, penned by a legendary Kivotos scholar, supposedly contains the secrets to unlocking hidden potential. It’s surprisingly well-preserved despite its age… and Wario's questionable handling!  Unroll this for a moment of clarity.",
        category: SHOP_CATEGORIES.FACTION,
        price: 3800,
        icon: '📜',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "+5 to Wisdom checks for 1 hour",
            "Grants advantage on one Intelligence or Wisdom saving throw",
            "Allows the user to understand a single cryptic language"
        ],
        vendor: 'academy_armory',
        shippedBy: 'messenger',
        levelRequirement: 8
    },

    'grand_country_shard_of_doubt': {
        id: 'grand_country_shard_of_doubt',
        name: "Echoes of the Void",
        description: "A fragment ripped from a forgotten dimension, this shard whispers insidious questions into your mind. It might just make you question your entire existence... or where you left your keys.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 8000,
        icon: '🔮',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "chance_to_reduce_attack_power",
            "chance_to_lower_defense",
            "temporary_confusion"
        ],
        vendor: 'side_seller',
        shippedBy: 'dark_messenger',
        levelRequirement: 8
    },

    'grand_country_layering_stone': {
        id: 'grand_country_layering_stone',
        name: "Fractured Foundation",
        description: "This oddly shaped stone seems to shift and rearrange itself constantly, hinting at hidden layers within the Grand Country. Use it wisely – or risk becoming trapped in an infinite loop of shifting planes!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '🧱',
        stock: 88,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance_to_create_a_small_rift",
            "minor_healing_over_time",
            "slightly_disorienting"
        ],
        vendor: 'layer_market',
        shippedBy: 'slow_delivery',
        levelRequirement: 3
    },

    'equestria_item_harmony_potion': {
        id: 'equestria_item_harmony_potion',
        name: "Potion of Unified Bliss",
        description: "Brewed by the most skilled pony alchemists, this potion restores not only physical wounds but also brings a sense of profound harmony. Wario's tried taking a sip and it just made him want to eat cake…a lot of cake.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 7500,
        icon: '🌈',
        stock: 28,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "restores 50 HP and 30 Mana",
            "removes all negative status effects",
            "+2 to Charisma for 2 turns",
            "chance to heal an ally for 10 HP"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Royal Messenger',
        levelRequirement: 8
    },

    'the_edge_ember_shard': {
        id: 'the_edge_ember_shard',
        name: "Ember of the Abyss's Sigh",
        description: "This pulsating shard feels strangely warm to the touch, radiating a faint heat that seems to whisper forgotten secrets. Holding it for too long might just send you spiraling into an endless loop of despair... or maybe not!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🔥',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Heals 30 HP",
            "Grants +1 to Dexterity for 6 turns",
            "Chance (10%) to inflict 'Chilled' status on a single target"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'Dimensional Rift Courier',
        levelRequirement: 5
    },

    'the_edge_echoing_plate': {
        id: 'the_edge_echoing_plate',
        name: "Plate of Fractured Reflections",
        description: "A tarnished silver plate etched with swirling patterns that seem to shift and distort. Touching it briefly grants a glimpse into potential futures, but be warned - some reflections are... unpleasant.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🪨',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Increases Armor Class by +3",
            "Grants +2 to Perception checks",
            "Once per day, can cast 'Minor Illusion' spell (DC 15)"
        ],
        vendor: 'final_shop',
        shippedBy: 'Void Delivery Drone',
        levelRequirement: 9
    },

    'the_edge_void_dust': {
        id: 'the_edge_void_dust',
        name: "Dust of the Unwritten",
        description: "A shimmering, black powder that seems to defy gravity. When consumed, it briefly grants you a heightened awareness of the void - just don't stare too long or you might forget where you are!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 600,
        icon: '⚫️',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Restores 20 HP",
            "Grants +1 to Intelligence for 3 turns",
            "Provides advantage on saving throws against fear effects"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'Gravity Shard Delivery',
        levelRequirement: 1
    },

    'pokemon_item_pulsating_charm': {
        id: 'pokemon_item_pulsating_charm',
        name: "Pulsating Charm of the Wild",
        description: "This oddly warm charm seems to vibrate with raw Pokémon energy! It amplifies your connection to wild creatures, increasing their trust and potentially triggering unexpected evolution events – just try not to attract too much attention from grumpy trainers.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1800,
        icon: '✨',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases creature trust by 20%",
            "chance to trigger evolution on wild Pokémon",
            "boosts battle accuracy by 5%"
        ],
        vendor: 'safari_shop',
        shippedBy: 'winged_bulbasaur',
        levelRequirement: 6
    },

    'pokemon_item_trainer_elite_potion': {
        id: 'pokemon_item_trainer_elite_potion',
        name: "Trainer Elite Potion",
        description: "Brewed by master trainers themselves, this shimmering potion instantly replenishes your HP and restores a bit of sanity after a grueling battle! It's rumored to contain the concentrated will of legendary Pokémon – don’t spill it on yourself!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '🧪',
        stock: 72,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "restores 100 HP",
            "restores 50 MP",
            "provides temporary resistance to status effects"
        ],
        vendor: 'pokemart',
        shippedBy: 'delivery_drone',
        levelRequirement: 3
    },

    'pokemon_item_aurora_crest': {
        id: 'pokemon_item_aurora_crest',
        name: "Aurora Crest of the Celestial Beasts",
        description: "Forged from solidified starlight, this crest grants you a temporary connection to the ancient Pokémon gods! It's said to amplify your abilities and ward off malevolent spirits – just don’t get caught in a celestial storm.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🌟',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increases attack by 30%",
            "grants immunity to psychic attacks",
            "chance to inflict confusion on opponents",
            "provides +10 to evasion"
        ],
        vendor: 'league_store',
        shippedBy: 'mythical_artillery',
        levelRequirement: 12
    },

    'mushroom_kingdom_item_rusty_coin_belt': {
        id: 'mushroom_kingdom_item_rusty_coin_belt',
        name: "Wario's Lucky Loot Belt",
        description: "This belt is covered in tarnished coins, each rumored to bring a bit of Wario's luck! It’s surprisingly comfortable and can be used to store small items – perfect for hoarding!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '💰',
        stock: 35,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increased_luck",
            "small_inventory_bonus",
            "chance_to_find_extra_coins"
        ],
        vendor: 'wario_direct',
        shippedBy: 'pipe_delivery',
        levelRequirement: 9
    },

    'mushroom_kingdom_item_ancient_rune_amulet': {
        id: 'mushroom_kingdom_item_ancient_rune_amulet',
        name: "The Whispering Amulet of Wario",
        description: "Crafted from a fallen mushroom god’s tear, this amulet whispers cryptic prophecies – mostly about more coins! Wearing it grants a sliver of foresight and the ability to slightly influence luck.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 65000,
        icon: '🔮',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increased_luck",
            "chance_to_avoid_attacks",
            "passive_insight"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'dragon_airmail',
        levelRequirement: 15
    },

    'pokemon_item_mystic_pearl': {
        id: 'pokemon_item_mystic_pearl',
        name: "Mystic Pearl of Evolution",
        description: "Legend says this pearl holds the secrets to unlocking a Pokémon's true potential. Use it wisely, or you might accidentally turn yourself into a tiny Caterpie!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 75000,
        icon: '✨',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance_to_evolve_target_pokemon_15%",
            "increased_experience_gain_20%"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Safari Delivery Team',
        levelRequirement: 22
    },

    'doughnut_hole_crumb_of_void': {
        id: 'doughnut_hole_crumb_of_void',
        name: "Void Crumb - Miniature Anomaly",
        description: "A shimmering fragment pulled from the heart of The Fated Place! This crumb subtly warps space around it, granting a minor chance to teleport your party members a short distance. Just don’t accidentally step into another dimension – we're not responsible for misplaced limbs!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '✨',
        stock: 75,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "chance to teleport player (10%)",
            "minor stat boost: +2 strength for 3 turns"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Dimensional Rift',
        levelRequirement: 4
    },

    'doughnut_hole_gravitic_spatula': {
        id: 'doughnut_hole_gravitic_spatula',
        name: "Gravitic Spatula - The Flipping Point",
        description: "This spatula isn't for pancakes; it’s for manipulating gravity! With a flick of the wrist, you can briefly increase or decrease the weight of objects (and unfortunate enemies) – perfect for launching yourself into the air or creating a sticky situation.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🥄',
        stock: 15,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increase target's weight by 50% for 5 turns",
            "decrease target's weight by 50% for 5 turns",
            "chance to stun enemy on successful hit (15%)"
        ],
        vendor: 'center_seller',
        shippedBy: 'Void Courier',
        levelRequirement: 9
    },

    'doughnut_hole_forbidden_singularity_stone': {
        id: 'doughnut_hole_forbidden_singularity_stone',
        name: "Singularity Stone - Echo of Oblivion",
        description: "A pulsing shard of solidified oblivion, this stone whispers promises of ultimate power...and probably madness. Handle with extreme caution; prolonged exposure may unravel your very existence!",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 60000,
        icon: '🖤',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance to cause temporary madness on hit (25%)",
            "high chance of self-damage upon use",
            "grant immunity to fear effects"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Temporal Anomaly Delivery',
        levelRequirement: 18
    },

    'the_edge_ironclad_plate': {
        id: 'the_edge_ironclad_plate',
        name: "Wario's Ward of Resilience",
        description: "Forged from the solidified despair clinging to The Edge, this plate offers surprisingly sturdy protection. It’s probably cursed… but Wario doesn’t care about curses! Just wear it and smash things.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12500,
        icon: '🛡️',
        stock: 8,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "increases armor class by 3",
            "grants resistance to necrotic damage",
            "chance to deflect a melee attack (10%)"
        ],
        vendor: 'final_shop',
        shippedBy: 'winged_beetle',
        levelRequirement: 8
    },

    'the_edge_cultist_amulet': {
        id: 'the_edge_cultist_amulet',
        name: "Obsidian Amulet of the Void Watchers",
        description: "This dark amulet, crafted by the forgotten Cultists of The Edge, seems to draw power from the nothingness beyond. It's rumored to provide a minor connection to unsettling entities… excellent for collecting rare artifacts (or summoning demons).",
        category: SHOP_CATEGORIES.FACTION,
        price: 6200,
        icon: '🔮',
        stock: 15,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "grants +2 to knowledge skill",
            "chance to detect hidden cultist activity (10%)",
            "unlocks a secret dialogue option with the Void Watchers faction"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'scorched_mail',
        levelRequirement: 10
    },

    'doughnut_hole_temporal_donut': {
        id: 'doughnut_hole_temporal_donut',
        name: "Chronal Cruller",
        description: "This donut isn’t just delicious; it briefly reverses your personal timeline. Enjoy a fleeting moment of nostalgia… or accidentally relive that embarrassing encounter with a slime monster.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 600,
        icon: '🍩',
        stock: 80,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "minor_time_reversal",
            "small_healing_effect",
            "chance_to_experience_a_flashback"
        ],
        vendor: 'void_vendor',
        shippedBy: 'gravitational_pulse',
        levelRequirement: 2
    },

    'doughnut_hole_gravity_donut': {
        id: 'doughnut_hole_gravity_donut',
        name: "Singularity Swirl Donut",
        description: "This donut isn't just sweet, it's… denser. Each bite slightly warps space around you, increasing your movement speed by 10% for 3 rounds and offering a chance to pull nearby enemies closer with its intense gravitational pull.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 7500,
        icon: '🍩',
        stock: 42,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "movement_speed_increased_10%",
            "chance_to_pull_enemy_closer",
            "temporary_gravity_distortion"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Dimensional Rift Courier',
        levelRequirement: 9
    },

    'doughnut_hole_forbidden_void_shard': {
        id: 'doughnut_hole_forbidden_void_shard',
        name: "Echoing Void Shard",
        description: "A fragment ripped from the heart of The Fated Place. Holding this shard causes unsettling whispers and a slight decrease in your sanity, but it grants you resistance to fear effects and allows you to briefly phase through solid objects once per combat.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 25000,
        icon: '🌌',
        stock: 18,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "fear_resistance",
            "phase_through_solid_object_once",
            "sanity_drain"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Unstable Wormhole Shipment',
        levelRequirement: 16
    },

    'doughnut_hole_curiosity_chronal_glaze': {
        id: 'doughnut_hole_curiosity_chronal_glaze',
        name: "Temporal Taffy",
        description: "This glaze tastes of paradoxes and forgotten futures. Coating your weapon with this temporal glaze briefly slows down enemies' attacks by 20% and allows you to rewind a single failed action (costing 10 HP). Wario would pay a fortune for this stuff!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '⏳',
        stock: 95,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "enemy_attack_speed_slowed_20%",
            "rewind_failed_action (10HP cost)"
        ],
        vendor: 'center_seller',
        shippedBy: 'Standard Delivery Drone',
        levelRequirement: 3
    },

    'curiosity_fate_token': {
        id: 'curiosity_fate_token',
        name: "Token of Twisted Fate",
        description: "This obsidian token is etched with unsettling glyphs that seem to shift and change before your eyes. Holding it grants a fleeting glimpse into possible futures - though most are just ridiculously depressing scenarios involving Wario eating everything. Use wisely, or risk attracting unwanted attention from the forces of destiny!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 600,
        icon: '🔮',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to gain a random temporary buff (10%)",
            "reveal a cryptic prophecy (low chance)"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Delivery Drone',
        levelRequirement: 2
    },

    'mushroom_kingdom_item_coin_detector': {
        id: 'mushroom_kingdom_item_coin_detector',
        name: "Hyper-Shiny Coin Finder",
        description: "A small, brass device that vibrates wildly whenever a coin is within a 10-foot radius. It's incredibly sensitive, occasionally detecting stray bottle caps and Wario's discarded change – but hey, every little bit helps!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '💰',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "coin_detection_10m",
            "chance_of_false_positive",
            "increased_luck_5%"
        ],
        vendor: 'wario_direct',
        shippedBy: 'pipe_delivery',
        levelRequirement: 4
    },

    'mushroom_kingdom_item_warp_pipe_blueprint': {
        id: 'mushroom_kingdom_item_warp_pipe_blueprint',
        name: "Blueprint for a Pocket Pipe",
        description: "A meticulously drawn schematic detailing how to construct a miniature warp pipe – capable of transporting you short distances. Be warned, the construction is tricky and requires a surprising amount of mushroom juice!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6200,
        icon: '🌀',
        stock: 15,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "short_range_teleport_15m",
            "chance_of_pipe_malfunction",
            "expert_crafting_10%"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'dragon_express',
        levelRequirement: 8
    },

    'animatopia_glowstone_shard': {
        id: 'animatopia_glowstone_shard',
        name: "Glowstone Shard of Resonance",
        description: "Pulled from the depths of Echoing Caves, this shard vibrates with ancient energy. Holding it allows you to perceive faint echoes of past events, potentially revealing hidden paths or forgotten secrets. Just don't stare at it for too long – you might start hearing things!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '✨',
        stock: 75,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance to detect hidden passages",
            "provides a minor boost to perception checks",
            "allows the user to understand basic Animatopia animal languages for 1 minute"
        ],
        vendor: 'forest_market',
        shippedBy: 'giant_beetle',
        levelRequirement: 3
    },

    'animatopia_spirit_totem': {
        id: 'animatopia_spirit_totem',
        name: "Spirit Totem of the Silent Hunt",
        description: "Crafted by ancient tribal shamans, this totem embodies the spirit of stealth. When activated, it creates a temporary zone of near-silence, granting advantage on stealth checks within its radius. Just don’t accidentally summon a grumpy badger – we're not responsible!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 600,
        icon: '🤫',
        stock: 20,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grants advantage on stealth checks",
            "reduces noise level while wielding",
            "chance to frighten small creatures"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'giant_snail',
        levelRequirement: 1
    },

    'warhammer_godly_voidbringer': {
        id: 'warhammer_godly_voidbringer',
        name: "Voidbringer's Embrace",
        description: "Forged within the heart of a dying star, this warhammer pulses with the chilling energy of oblivion. Hold it aloft and feel your enemies’ souls drawn into the void – or at least, they'll be really, *really* cold.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750000,
        icon: '🌌',
        stock: 1,
        rarity: 'godly',
        stockType: 'delivery_only',
        effects: [
            "damage_physical_4d8",
            "chance_to_stun",
            "guaranteed_critical_hit",
            "absorbs_magic_damage"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Dimensional Rift Express',
        levelRequirement: 35
    },

    'connectopia_pioneer_survey_service': {
        id: 'connectopia_pioneer_survey_service',
        name: "Prospector's Scan",
        description: "Need to know where the richest veins of ore are in Connectopia? This service uses advanced scanning technology (mostly just a really shiny mirror) to pinpoint valuable resources. Be warned, it doesn’t tell you *how* to get them... that's on you, tough guy!",
        category: SHOP_CATEGORIES.SERVICES,
        price: 7500,
        icon: '📡',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "reveals_nearby_resource_nodes",
            "chance_to_find_rare_materials"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'Signal Drone',
        levelRequirement: 5
    },

    'leclaire_isle_tart_of_confusion': {
        id: 'leclaire_isle_tart_of_confusion',
        name: "Tart of Confusion",
        description: "This shimmering pastry seems to shift colors with every bite! Consuming it might lead to a delightful, or disastrous, bout of temporary confusion - perhaps you'll suddenly crave sprinkles or attempt to speak fluent Dough Folk.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '🤯',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grant_confusion_3_turns",
            "increase_charisma_1d4",
            "chance_to_speak_doughfolk"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'swift_delivery_cart',
        levelRequirement: 5
    }
};
