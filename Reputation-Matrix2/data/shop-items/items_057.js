// Shop items file 57
// Generated: 2026-03-21 16:04:54
// Items: 55

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_057 = {
    'animatopia_giggleberry_bomb': {
        id: 'animatopia_giggleberry_bomb',
        name: "Giggleberry Bomb",
        description: "These plump berries explode with uncontrollable laughter! Toss one at a grumpy beast, or just to annoy your friends – but be warned, the giggles can spread!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '😂',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "deals 1d6 damage to a single target and causes them to laugh uncontrollably for 3 turns.",
            "chance to inflict ‘tickle’ status for 2 turns."
        ],
        vendor: 'tribal_trader',
        shippedBy: 'Giant Beetle Post',
        levelRequirement: 5
    },

    'animatopia_stoneclaw_amulet': {
        id: 'animatopia_stoneclaw_amulet',
        name: "Stoneclaw Amulet of the Howling Spirit",
        description: "Crafted by the ancient Stoneclaw tribe, this amulet pulses with primal energy. It’s said to amplify your connection to the animal spirits - great for intimidating foes or channeling a ferocious roar!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🐾',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases attack damage by 10 for 5 turns.",
            "grants resistance to fear effects."
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'Dire Wolf Courier',
        levelRequirement: 8
    },

    'animatopia_sunstone_shard': {
        id: 'animatopia_sunstone_shard',
        name: "Sunstone Shard of the Radiant Bloom",
        description: "A fragment of a fallen sunstone, radiating warmth and vitality. These shards are highly prized by Animatopian healers for their restorative properties - perfect for patching up those Wario-induced injuries!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '🔆',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "restores 50 HP.",
            "chance to cure minor status ailments (poison, bleed).",
            "provides a small boost to healing spells."
        ],
        vendor: 'forest_market',
        shippedBy: 'Giant Butterfly Drone',
        levelRequirement: 10
    },

    'kivotos_item_halo_of_focus': {
        id: 'kivotos_item_halo_of_focus',
        name: "Halo of Concentrated Brainpower",
        description: "This shimmering halo, crafted from pure student ambition and a dash of questionable chemicals, grants the wearer increased concentration. It's rumored to be favored by the most dedicated scholars – or those desperately trying to pass an exam!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750,
        icon: '🧠',
        stock: 62,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increased_concentration",
            "+1 to Intelligence checks",
            "resistance to distractions"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery',
        levelRequirement: 5
    },

    'kivotos_item_chronometric_reset': {
        id: 'kivotos_item_chronometric_reset',
        name: "Temporal Slipstream Service",
        description: "Feeling a bit... out of sync? This service allows for a short, localized temporal reset - perfect for undoing minor mistakes or getting that extra second to dodge a projectile! (Warning: May cause existential dread.)",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1200,
        icon: '⏳',
        stock: 38,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "reset_current_turn",
            "recover_minor_status_effects",
            "small chance to reverse a failed action"
        ],
        vendor: 'club_supply',
        shippedBy: 'Express Courier (Probably)',
        levelRequirement: 8
    },

    'kivotos_item_echoing_shard': {
        id: 'kivotos_item_echoing_shard',
        name: "Fragment of the Lost Resonance",
        description: "This strange, pulsating shard seems to hum with forgotten melodies. Touching it briefly grants a fleeting echo of past events – useful for investigation… or just staring at it until you get a headache! Don’t blame us if you start hearing voices.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6800,
        icon: '🔮',
        stock: 12,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "reveal_hidden_object (small area)",
            "grant_fleeting_visions (random event)",
            "+5 to Perception checks when examining clues"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Delivery Only',
        levelRequirement: 12
    },

    'earth_land_wizard_scroll_of_minor_illusion': {
        id: 'earth_land_wizard_scroll_of_minor_illusion',
        name: "Wario's Whimsical Wandering Visions",
        description: "A meticulously crafted scroll from the Magic Shop, this allows you to conjure small, harmless illusions - perfect for distracting guards or creating a temporary diversion! Don’t expect to turn into a dragon, but you *can* make your sword appear twice as big!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '✨',
        stock: 34,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "create_illusion_of_small_object",
            "chance_to_confuse_enemy",
            "increases_charisma_by_5_for_one_turn"
        ],
        vendor: 'magic_shop',
        shippedBy: 'Winged Courier',
        levelRequirement: 6
    },

    'connectopia_gear_of_the_iron_pioneer': {
        id: 'connectopia_gear_of_the_iron_pioneer',
        name: "Pioneer's Grindstone Gauntlets",
        description: "These heavily-worn gauntlets were forged by the toughest pioneers. They grant exceptional mining prowess and a surprisingly sturdy grip - perfect for scaling cliffs or wrestling stubborn blocks! Wario loves the smell of metal... and breaking things.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '⛏️',
        stock: 15,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increased mining speed by 20%",
            "chance to find rare ore +15%",
            "armor rating +3"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'wagon',
        levelRequirement: 10
    },

    'connectopia_shard_of_void_echo': {
        id: 'connectopia_shard_of_void_echo',
        name: "Echoing Void Shard",
        description: "A fragment ripped from the unstable void between Connectopia's blocks. Touching it causes unsettling whispers and a brief distortion of reality – use with caution! Wario claims he can hear his mother calling him... probably not.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 75000,
        icon: '🌀',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance to inflict confusion on enemies (30%)",
            "small chance of teleporting the user short distances",
            "deals 50 shadow damage per second"
        ],
        vendor: 'block_smith',
        shippedBy: 'dimensional_portal',
        levelRequirement: 22
    },

    'doughnut_hole_forbidden_singularity_shard': {
        id: 'doughnut_hole_forbidden_singularity_shard',
        name: "Fractured Echo of Oblivion",
        description: "A sliver ripped from the heart of a collapsed singularity! Touching this shard causes localized distortions – expect unpredictable gravity wells and echoes of forgotten realities. Don’t say I didn’t warn you; Wario once tried to eat it.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 6800,
        icon: '🌀',
        stock: 7,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance_of_gravity_distortion",
            "temporary_confusion",
            "small_damage_over_time"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Black Hole Express',
        levelRequirement: 12
    },

    'doughnut_hole_curiosity_temporal_donut': {
        id: 'doughnut_hole_curiosity_temporal_donut',
        name: "Chronos Cruller",
        description: "This donut isn't just delicious – it subtly bends time around you! Consume this treat to rewind a few seconds or briefly glimpse possible futures. Warning: excessive consumption may lead to existential paradoxes and an overwhelming craving for more donuts... Wario loves these!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '⏳',
        stock: 93,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "rewind_time (short duration)",
            "chance_of_future_vision",
            "increased_luck"
        ],
        vendor: 'center_seller',
        shippedBy: 'Temporal Delivery Service',
        levelRequirement: 3
    },

    'the_edge_echoing_boots': {
        id: 'the_edge_echoing_boots',
        name: "Echoing Boots of Silent Steps",
        description: "These worn leather boots seem to absorb every footstep, leaving no trace behind – perfect for sneaking around those grumpy goblins or avoiding unwanted attention.  They’re also surprisingly comfortable... probably because they're made of solidified silence.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 850,
        icon: '👣',
        stock: 47,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased_stealth",
            "bonus_movement_speed",
            "chance_to_avoid_detection"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'winged_messenger',
        levelRequirement: 4
    },

    'the_edge_voidstone_puzzle': {
        id: 'the_edge_voidstone_puzzle',
        name: "Voidstone Puzzle of Infinite Reflection",
        description: "A smooth, black stone etched with shifting symbols. Solving the puzzle unlocks a minor portal to an empty space – great for storing extra loot or escaping awkward conversations! Be warned: staring too long may lead to existential dread.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6500,
        icon: '🌀',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "creates_small_portal",
            "chance_to_teleport_short_distance",
            "boosts_intellect",
            "chance_of_item_generation"
        ],
        vendor: 'final_shop',
        shippedBy: 'void_delivery',
        levelRequirement: 10
    },

    'almost_edge_item_liminal_echo': {
        id: 'almost_edge_item_liminal_echo',
        name: "Liminal Echo",
        description: "A perfectly smooth, obsidian sphere that hums with the whispers of lost realities. Holding this curious item allows you to briefly step into the spaces between moments, confusing enemies and revealing hidden pathways – but don’t get lost in the echoes!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '🔮',
        stock: 18,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "Chance to confuse enemy for 3 turns (25%)",
            "Reveals hidden paths and traps within a small radius.",
            "Reduces enemy accuracy by 10% during its effect."
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Dimensional Rift Courier',
        levelRequirement: 18
    },

    'almost_edge_item_wario_void_boots': {
        id: 'almost_edge_item_wario_void_boots',
        name: "Wario's Void Boots",
        description: "These boots, crafted from solidified void and a healthy dose of Wario’s genius, allow you to briefly phase through thin barriers.  Just try not to fall *through* the barrier; Wario wouldn’t approve!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2750,
        icon: '👟',
        stock: 91,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "Allows the wearer to pass through non-magical walls once per combat.",
            "Increases movement speed by 10% for 3 turns.",
            "Grants resistance to falling damage."
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Standard Delivery',
        levelRequirement: 5
    },

    'faerun_item_potion_of_wario_boost': {
        id: 'faerun_item_potion_of_wario_boost',
        name: "Potion of Wario Boost!",
        description: "Brewed with rare swamp moss and a pinch of pure, unadulterated greed... just like Wario! This potent concoction will temporarily amplify your strength and make you incredibly hungry for treasure. Warning: May result in uncontrollable bursts of energy and an overwhelming desire to steal shiny objects.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '💪',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "+4 Strength for 6 turns",
            "Increased chance to hit (15%)",
            "Regenerates 10 HP per turn"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'winged_imps',
        levelRequirement: 8
    },

    'leclaire_isle_frosting_flask': {
        id: 'leclaire_isle_frosting_flask',
        name: "Frosting Flask of Sweet Justice",
        description: "A shimmering flask filled with a potent, rapidly hardening frosting. This isn't just for decorating cakes – it can be hurled as a sticky projectile that immobilizes foes and leaves them vulnerable to attack!  Don’t worry if you accidentally end up covered in frosting...",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '🍦',
        stock: 25,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "immobilize_target",
            "damage_over_time_sticky",
            "frostbite"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'Drone Delivery (Fragile!)',
        levelRequirement: 4
    },

    'leclaire_isle_legendary_sugar_shard': {
        id: 'leclaire_isle_legendary_sugar_shard',
        name: "Shard of the Eternal Tart",
        description: "Forged from the crystallized remains of a legendary tart, this shard pulses with sugary energy.  Holding it grants you the ability to briefly transform into a miniature Kirby-like form, allowing for rapid movement and surprising attacks! Just try not to eat it all...",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 75000,
        icon: '✨',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "temporary_transformation_kirby",
            "movement_speed_increase_5",
            "damage_boost_2",
            "sugar_rush"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'Magical Courier Pigeon',
        levelRequirement: 18
    },

    'almost_edge_crumb_of_despair': {
        id: 'almost_edge_crumb_of_despair',
        name: "Crumb of Despair",
        description: "A sugary fragment, seemingly ripped from the very edge of existence. Consuming this crumb induces a brief but intense feeling of existential dread and minor paralysis - perfect for slowing down your enemies or contemplating the vast emptiness!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 650,
        icon: '💀',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Heal 20 HP",
            "Reduce enemy speed by 15% for 3 turns",
            "Chance to inflict 'Fear' (10%)"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Dimensional Rift',
        levelRequirement: 1
    },

    'almost_edge_void_resonator': {
        id: 'almost_edge_void_resonator',
        name: "Void Resonator",
        description: "A pulsating device crafted from solidified darkness. When activated, it emits a discordant frequency that disrupts the minds of nearby creatures – great for confusing spellcasters or causing chaos among your foes!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '🌀',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Deals 50 piercing damage on hit.",
            "Chance to silence target for 1 turn (20%)",
            "Reduces magic resistance by 30%"
        ],
        vendor: 'void_merchant',
        shippedBy: 'Black Hole Courier',
        levelRequirement: 6
    },

    'almost_edge_forbidden_echo_shard': {
        id: 'almost_edge_forbidden_echo_shard',
        name: "Forbidden Echo Shard",
        description: "A fragment of a forgotten ritual, pulsing with unsettling energy. Holding this shard whispers maddening secrets into your mind, offering glimpses of realities beyond comprehension – but beware, prolonged exposure can lead to insanity!",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 42000,
        icon: '😈',
        stock: 3,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "Chance to inflict 'Confusion' (15%) on hit.",
            "Increases critical strike chance by 50% for 2 turns.",
            "Periodic damage: Deals 30 necrotic damage over 3 rounds."
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Phantom Delivery',
        levelRequirement: 12
    },

    'kivotos_item_chrono_shards': {
        id: 'kivotos_item_chrono_shards',
        name: "Temporal Echo Fragments",
        description: "These shimmering shards resonate with the flow of time, allowing you to briefly rewind minor mistakes or accelerate your movements. They’re rumored to be remnants from a student's failed experiment attempting to create a personal time loop – probably just wasted energy, but hey, it still *moves*!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '⏳',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grant_temporary_speed_boost",
            "rewind_small_mistake",
            "chance_to_create_temporal_distortion"
        ],
        vendor: 'club_supply',
        shippedBy: 'drone_delivery',
        levelRequirement: 7
    },

    'kivotos_item_student_sympathy': {
        id: 'kivotos_item_student_sympathy',
        name: "Sympathetic Scroll of Approval",
        description: "This scroll, endorsed by the prestigious Student Council, grants a fleeting aura of acceptance and respect. It's perfect for smoothing over ruffled feathers or getting preferential treatment... just don’t expect it to solve *everything* – some teachers are stubbornly oblivious!",
        category: SHOP_CATEGORIES.FACTION,
        price: 800,
        icon: '🤝',
        stock: 73,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increase_reputation_with_student_council",
            "grant_small_discount_at_student_shops",
            "chance_to_receive_information"
        ],
        vendor: 'student_store',
        shippedBy: 'standard_mail',
        levelRequirement: 3
    },

    'almost_edge_chronometric_lens': {
        id: 'almost_edge_chronometric_lens',
        name: "Chronometric Lens",
        description: "This polished obsidian lens appears to warp time around it. Looking through it allows you to briefly rewind your own actions – perfect for avoiding a messy tumble off the edge… or correcting a really bad decision.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '⏳',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Allows the user to rewind their last action by 3 seconds.",
            "+5 Accuracy",
            "Reduces fall damage by 50%"
        ],
        vendor: 'void_merchant',
        shippedBy: 'Quantum Courier',
        levelRequirement: 8
    },

    'almost_edge_liminal_bargain_scroll': {
        id: 'almost_edge_liminal_bargain_scroll',
        name: "Liminal Bargain Scroll",
        description: "An unsettlingly pristine scroll, seemingly written in fading light. Unrolling it reveals a fleeting glimpse of an endless expanse of identical corridors – and the promise of… something. Probably not good.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 18000,
        icon: '📜',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Grants a permanent +2 to Charisma with entities from the void.",
            "Chance to gain temporary madness (5%)",
            "Allows the user to cast 'Phase' once per day."
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Echo Delivery System',
        levelRequirement: 10
    },

    'animatopia_howling_fang': {
        id: 'animatopia_howling_fang',
        name: "Howling Fang Amulet",
        description: "This crudely crafted amulet, fashioned from the tooth of a juvenile Howler Beast, vibrates with primal energy. Wearing this allows you to briefly mimic the beast's terrifying roar, stunning nearby enemies and causing them to flee in terror... or maybe just run away screaming!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🐺',
        stock: 5,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "deals 3 slashing damage with roar",
            "stuns target on use",
            "chance to frighten enemy (10%)"
        ],
        vendor: 'tribal_trader',
        shippedBy: 'winged_parakeet',
        levelRequirement: 9
    },

    'animatopia_berry_of_sync': {
        id: 'animatopia_berry_of_sync',
        name: "Berry of Sync",
        description: "These iridescent berries, harvested from the rare Synchrony Vines, grant a momentary connection to the animal spirits. Consume one for a brief burst of enhanced agility and mimicry - you’ll be moving like a cheetah, or maybe just tripping over your own feet in a confused blur!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '🍇',
        stock: 35,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increases movement speed by 20% for 5 seconds",
            "grants +1 to Dexterity for 3 rounds"
        ],
        vendor: 'forest_market',
        shippedBy: 'giant_snail',
        levelRequirement: 3
    },

    'animatopia_whispers_of_the_chief': {
        id: 'animatopia_whispers_of_the_chief',
        name: "Whispers of the Chief's Quill",
        description: "A finely crafted quill, said to be imbued with the wisdom of the Animatopia tribal chiefs. Holding this quill allows you to cast minor divination spells - but beware, the spirits are notoriously fickle and often deliver cryptic (and occasionally insulting) advice.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 7500,
        icon: '📜',
        stock: 1,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "casts 'detect_magic' once per day",
            "chance to gain a cryptic prophecy (5%)"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'giant_beetle',
        levelRequirement: 6
    },

    'grand_country_crumb_cake': {
        id: 'grand_country_crumb_cake',
        name: "Gravity Gummy Crumbs",
        description: "These seemingly ordinary crumbs possess a peculiar property – they briefly reverse gravity for the consumer, allowing them to float upwards! Perfect for reaching those high shelves or escaping sticky situations... mostly.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '✨',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Grants +10 Movement Speed for 3 turns.",
            "Chance to briefly reverse gravity (50%)"
        ],
        vendor: 'side_seller',
        shippedBy: 'Winged Parcel',
        levelRequirement: 1
    },

    'grand_country_spike_boots': {
        id: 'grand_country_spike_boots',
        name: "Layered Ascent Boots",
        description: "These boots are crafted from solidified climbing vines and shimmering crystal, allowing the wearer to effortlessly scale any vertical surface. Just don’t slip – or fall into a bottomless layer!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '🛞',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Increases climbing speed by 50%",
            "Grants resistance to falling damage.",
            "Adds a stacking bonus to Acrobatics checks"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Rope & Sling Express',
        levelRequirement: 6
    },

    'grand_country_echo_shard': {
        id: 'grand_country_echo_shard',
        name: "Resonant Reflection Fragment",
        description: "This shard hums with residual echoes of the Grand Country's strange layers. When held, it can momentarily amplify sound or create a distorted reflection – useful for confusing enemies or uncovering hidden passages… maybe.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '🔮',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Creates a minor sonic blast (deals 1d6 thunder damage)",
            "Allows the user to cast 'Minor Image' once.",
            "Grants advantage on Perception checks involving sound."
        ],
        vendor: 'layer_market',
        shippedBy: 'Dimensional Courier',
        levelRequirement: 10
    },

    'middle_earth_goblin_gut_potion': {
        id: 'middle_earth_goblin_gut_potion',
        name: "Goblin Gut Potion",
        description: "A surprisingly potent concoction brewed from… well, let’s just say it involves a few unfortunate goblins and a whole lot of questionable herbs. This potion grants temporary invulnerability to poison, but be warned – you might burp up a bit later.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '🤢',
        stock: 67,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grant_invulnerability_poison_30s",
            "chance_of_negative_status_effect_goblin_burp"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_express',
        levelRequirement: 5
    },

    'middle_earth_mithril_shard': {
        id: 'middle_earth_mithril_shard',
        name: "Mithril Shard of Durin's Bane",
        description: "A fragment torn from the heart of Durin’s Bane, said to contain a spark of dwarven resilience. This shard offers enhanced protection and a faint humming vibration that seems to ward off dark spirits – perfect for a discerning warrior or treasure hunter!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '💎',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increase_armor_3",
            "resistance_to_fear_50%"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'giant_carrier',
        levelRequirement: 8
    },

    'middle_earth_fellowship_badge': {
        id: 'middle_earth_fellowship_badge',
        name: "Fellowship of the Ring Badge",
        description: "A beautifully crafted badge bearing the emblem of the Fellowship, rumored to be a fragment of Aragorn's authority. Wearing this badge grants respect amongst those loyal to Gondor and Rohan - plus it looks super cool!",
        category: SHOP_CATEGORIES.FACTION,
        price: 6500,
        icon: '👑',
        stock: 34,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "grant_reputation_gondor_ROHAN_10",
            "chance_to_receive_quest_from_fellowship_20%"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_horse',
        levelRequirement: 15
    },

    'kivotos_item_chrono_scroll': {
        id: 'kivotos_item_chrono_scroll',
        name: "Temporal Echo Scroll",
        description: "This shimmering scroll seems to flicker with moments from the past! Unrolling it allows you to rewind time by a few seconds, perfect for dodging clumsy students or snatching that last slice of cake. Wario would totally use this to steal all the snacks!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '⏳',
        stock: 5,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "rewind_time_5s",
            "grant_dodge_chance_10%",
            "temporary_speed_boost_2%"
        ],
        vendor: 'academy_armory',
        shippedBy: 'parcel_drone',
        levelRequirement: 8
    },

    'kivotos_item_halo_resonance': {
        id: 'kivotos_item_halo_resonance',
        name: "Harmonic Halo Fragment",
        description: "A pulsating fragment of a fallen halo, radiating with forgotten melodies. Touching it grants temporary access to the 'Echo' state, letting you phase through solid objects… but be warned, excessive use can attract unwanted attention from the Academy’s security bots! Wario just wants to see how many things he can bounce off.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 75000,
        icon: '💫',
        stock: 2,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "phase_through_walls",
            "increased_movement_speed_15%",
            "temporary_invulnerability",
            "attracts_security_bots"
        ],
        vendor: 'club_supply',
        shippedBy: 'express_delivery',
        levelRequirement: 20
    },

    'kivotos_item_study_break_potion': {
        id: 'kivotos_item_study_break_potion',
        name: "Hyper-Concentration Brew",
        description: "Brewed by a disgruntled student obsessed with efficiency, this potion instantly boosts your focus! You'll be able to solve complex puzzles and recall obscure facts... mostly about the history of paperclip collecting. Wario would probably just drink it and fall asleep.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🧠',
        stock: 99,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increase_intelligence_20_for_60s",
            "boost_perception_15_for_30s",
            "temporary_resistance_to_confusion"
        ],
        vendor: 'student_store',
        shippedBy: 'standard_mail',
        levelRequirement: 1
    },

    'midlands_item_rusty_cog': {
        id: 'midlands_item_rusty_cog',
        name: "Cog of Discontent",
        description: "This ancient cog, salvaged from the ruins of a fallen Imperial war machine, hums with barely contained frustration. It seems to actively resist being used and might just cause minor inconveniences for your enemies – like making their swords inexplicably dull.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750,
        icon: '⚙️',
        stock: 42,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to reduce enemy attack by 1 for 3 turns",
            "small chance of causing target to become momentarily confused",
            "lowered armor class by 1"
        ],
        vendor: 'midland_merchant',
        shippedBy: 'horseback',
        levelRequirement: 2
    },

    'midlands_item_empire_banner': {
        id: 'midlands_item_empire_banner',
        name: "Tattered Standard of the Iron Legion",
        description: "A faded banner bearing the emblem of the once-proud Iron Legion. Touching it evokes a sense of lost glory and, inexplicably, an overwhelming urge to march in perfect formation – even if you’re a rogue.",
        category: SHOP_CATEGORIES.FACTION,
        price: 12000,
        icon: '🚩',
        stock: 8,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grants +5 morale to party",
            "chance to intimidate weaker enemies",
            "passive bonus to diplomacy checks with Imperial officials (slightly)"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'imperial_messenger',
        levelRequirement: 8
    },

    'pokemon_item_sparkling_pearl': {
        id: 'pokemon_item_sparkling_pearl',
        name: "Radiant Dewdrop Orb",
        description: "This shimmering orb pulses with the energy of pure Pokémon potential! It amplifies your trainer's stats for a short time, making you feel like a true master. Just don’t get it wet – it turns into a sticky mess!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '✨',
        stock: 67,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increase_attack_by_50%",
            "increase_speed_by_30%",
            "grant_temporary_confusion_chance_5%"
        ],
        vendor: 'pokemart',
        shippedBy: 'Wingull Delivery',
        levelRequirement: 6
    },

    'pokemon_item_elite_badge_of_valor': {
        id: 'pokemon_item_elite_badge_of_valor',
        name: "Badge of the Ironclad Trainer",
        description: "A meticulously crafted badge, forged from solidified Pokémon energy and imbued with the spirit of legendary battles! Wearing this badge grants you a slight advantage against wild Pokémon, making your training sessions considerably less… frustrating. Just don’t try to eat it – Wario warned us!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '🏆',
        stock: 23,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increase_defense_by_10%",
            "grant_resistance_to_poison_type_attacks",
            "chance to inflict critical hit on wild Pokémon"
        ],
        vendor: 'league_store',
        shippedBy: 'Delivery Drone',
        levelRequirement: 9
    },

    'pokemon_item_legendary_aurora_stone': {
        id: 'pokemon_item_legendary_aurora_stone',
        name: "Aurora Stone of the Ancient Guardians",
        description: "A pulsing stone said to be touched by the spirits of ancient Pokémon protectors. Holding this stone grants you a chance to trigger rapid evolution in your partner, potentially creating a magnificent new form! But beware – it’s rumored to attract mischievous Shadow Pokémon… and Wario’s always looking for trouble!",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 25000,
        icon: '🌟',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increase_evolution_chance_by_25%",
            "boosts partner Pokémon stats by 10% during evolution",
            "attracts shadow pokemon to the area"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Elite Delivery Team (Magikarp)',
        levelRequirement: 15
    },

    'pokemon_item_evolution_seed': {
        id: 'pokemon_item_evolution_seed',
        name: "Primal Bloom Pod",
        description: "This pulsating seed seems to hum with untamed potential! Imbued with the essence of a legendary Pokémon's evolution, it can dramatically accelerate a creature’s growth – but be warned, overuse may lead to… unexpected results. Wario wouldn’t mind if you experimented!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 2800,
        icon: '🌱',
        stock: 45,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grants +3 level to target creature",
            "chance to trigger random evolution (10%)",
            "increases creature’s speed by 2 for 3 turns"
        ],
        vendor: 'pokemart',
        shippedBy: 'delivery_only',
        levelRequirement: 6
    },

    'pokemon_item_shadow_orb': {
        id: 'pokemon_item_shadow_orb',
        name: "Void Echo Fragment",
        description: "A shard of solidified darkness, pulsing with unsettling power. This forbidden item allows the user to briefly tap into the void, granting a burst of destructive energy – but prolonged exposure risks madness! Don't say Wario didn’t warn you… he definitely warned you.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 8000,
        icon: '🌑',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "deals 50 damage to target creature",
            "chance to inflict 'Burn' (15%)",
            "user has a 30% chance of self-damage next turn"
        ],
        vendor: 'safari_shop',
        shippedBy: 'delivery_only',
        levelRequirement: 8
    },

    'earth_land_dragon_scale_amulet': {
        id: 'earth_land_dragon_scale_amulet',
        name: "Scale of the Scorched Wyrm",
        description: "A remarkably well-preserved scale from a young, fire-breathing dragon. Legend says it was shed during a particularly dramatic tantrum involving a misplaced pile of gold! This amulet radiates intense heat and provides protection against flames.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🔥',
        stock: 17,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "fire resistance +30%",
            "chance to ignite enemies on attack (15%)",
            "absorb 25% of fire damage"
        ],
        vendor: 'magic_shop',
        shippedBy: 'Fire Elemental Courier',
        levelRequirement: 9
    },

    'earth_land_shadow_shard': {
        id: 'earth_land_shadow_shard',
        name: "Fragment of Nullity",
        description: "A shard pulsing with absolute darkness, plucked from the heart of a void rift. Touching this item induces unsettling visions and whispers… be warned! It's rumored to grant limited control over shadows, but prolonged use can unravel your sanity.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 8500,
        icon: '⚫',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "chance to inflict 'fear' status effect on target (20%)",
            "shadow step - teleport a short distance into shadows",
            "reduce enemy accuracy by 15%"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'Night Hag Delivery',
        levelRequirement: 7
    },

    'animatopia_bonecrusher_skull': {
        id: 'animatopia_bonecrusher_skull',
        name: "Skullsplitter Totem",
        description: "This crude totem, carved from the skull of a mighty Grumblehorn, vibrates with primal energy. Holding it aloft lets you unleash a devastating roar that can stun nearby enemies – perfect for scaring off pesky critters or intimidating overly friendly tribesmen! Don’t worry if your ears ring afterwards.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '🔥',
        stock: 37,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "deals 1d8 thunder damage to a single target",
            "has 20% chance to stun the target for one round",
            "increases strength by 3 temporary"
        ],
        vendor: 'tribal_trader',
        shippedBy: 'beast_cart',
        levelRequirement: 7
    },

    'animatopia_honeycomb_charm': {
        id: 'animatopia_honeycomb_charm',
        name: "Buzzing Harmony Charm",
        description: "Crafted from solidified honeycomb and infused with the song of a thousand bees, this charm radiates tranquility. Wear it to soothe savage beasts, enhance your focus while crafting (or stealing!), or simply enjoy a calming buzz. Just don’t get stung.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🐝',
        stock: 89,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increases charisma by 5 temporary",
            "provides resistance to poison damage",
            "chance to calm hostile creatures on a successful skill check (DC 12)"
        ],
        vendor: 'forest_market',
        shippedBy: 'winged_messenger',
        levelRequirement: 4
    },

    'animatopia_spirit_whisper_scroll': {
        id: 'animatopia_spirit_whisper_scroll',
        name: "Echo of the Ancients",
        description: "This ancient scroll, recovered from a forgotten shrine dedicated to the spirits of Animatopia, contains fragmented visions and cryptic guidance. Unravel its secrets to gain insight into the past, potentially unlock hidden pathways, or simply impress your friends with your scholarly abilities! Just don’t blame us if you start speaking in riddles.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 23000,
        icon: '📜',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grants +1 to all intelligence checks",
            "provides a brief vision of the immediate surroundings (reveal hidden objects)",
            "chance to gain temporary knowledge of a specific skill or creature type on a successful roll (DC 15)"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'teleportation_pod',
        levelRequirement: 12
    },

    'earth_land_sticky_sap_potion': {
        id: 'earth_land_sticky_sap_potion',
        name: "Sticky Sap Potion",
        description: "This glistening green potion smells suspiciously like candy and dragon slime! It temporarily increases your stickiness, making you incredibly difficult to move – perfect for dodging attacks or clinging to slippery surfaces. Warning: May cause uncontrollable bouncing.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '🟢',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increase_stickiness_by_50",
            "grant_dodge_roll_on_next_attack",
            "minor_bounce_effect"
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'Swift Delivery',
        levelRequirement: 4
    },

    'earth_land_rune_of_frostbite': {
        id: 'earth_land_rune_of_frostbite',
        name: "Rune of Frostbite",
        description: "Forged by the Ice Wizards of Mount Colder, this rune emits a chilling aura. When activated, it inflicts frost damage on nearby enemies and provides resistance to cold effects – just don't get caught in a blizzard!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6800,
        icon: '🧊',
        stock: 15,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "deal_3d6_frost_damage_on_attack",
            "grant_frost_resistance",
            "chance_to_freeze_enemies_on_critical_hit"
        ],
        vendor: 'magic_shop',
        shippedBy: 'Magical Conveyance',
        levelRequirement: 7
    },

    'earth_land_dragonscale_badge': {
        id: 'earth_land_dragonscale_badge',
        name: "Dragonscale Badge of the Obsidian Guard",
        description: "A prestigious badge awarded by the Obsidian Guard, protectors of ancient dragon hoards. Wearing this badge grants you a small measure of dragon-like resilience and earns respect (and maybe some stares) from those in the know – just try not to accidentally breathe fire!",
        category: SHOP_CATEGORIES.FACTION,
        price: 12000,
        icon: '🐉',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grant_small_fire_resistance",
            "increase_charisma_by_5",
            "bonus_to_negotiation_checks_with_dragon_type_creatures"
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'Dragon Courier',
        levelRequirement: 10
    },

    'midlands_item_rusty_regalia': {
        id: 'midlands_item_rusty_regalia',
        name: "Emperor's Echoing Regalia",
        description: "This tarnished helmet, once worn by a disgraced Imperial Guard captain, still whispers with the echoes of battle. It grants a slight bonus to intimidation and a bizarre urge to shout orders at passing pigeons.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '👑',
        stock: 5,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased intimidation by 3",
            "chance to shout at pigeons (10% chance)",
            "minor resistance to fear effects"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'imperial_courier',
        levelRequirement: 7
    },

    'midlands_item_goblin_grapple_hook': {
        id: 'midlands_item_goblin_grapple_hook',
        name: "Sticky Situation Grapple Hook",
        description: "Crafted by goblin tinkers with a disturbingly high amount of glee, this hook launches you upwards with surprising force – and an even more surprising stickiness. Prepare for awkward landings!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '🔗',
        stock: 25,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grants a single-use grapple ability (range 15 feet)",
            "chance to become temporarily stuck (10% chance)"
        ],
        vendor: 'midland_merchant',
        shippedBy: 'express_delivery',
        levelRequirement: 3
    },

    'midlands_item_chronal_distortion_orb': {
        id: 'midlands_item_chronal_distortion_orb',
        name: "Wario's Temporal Tickle",
        description: "This swirling orb pulses with unstable chronomancy, allowing the user to briefly rewind time – mostly for comical effect. Don’t expect to fix any major mistakes… or maybe you will! Wario guarantees a chaotic outcome.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 75000,
        icon: '🌀',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "rewind time by 3 seconds (once per day)",
            "chance to create a minor temporal paradox (5% chance)",
            "increased resistance to magic"
        ],
        vendor: 'fractured_forge',
        shippedBy: 'dimensional_portal',
        levelRequirement: 20
    }
};
