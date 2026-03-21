// Shop items file 56
// Generated: 2026-03-21 16:02:05
// Items: 100

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_056 = {
    'almost_edge_item_liminal_mirror_shard': {
        id: 'almost_edge_item_liminal_mirror_shard',
        name: "Liminal Mirror Shard - Reflections of Loss",
        description: "A jagged fragment from a mirror that reflects not your appearance, but the potential futures you *might* have had. Touching it can briefly show you an alternate reality… usually one where Wario is richer and more successful.  Handle with extreme caution, as prolonged exposure may induce obsessive nostalgia.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Chance to gain a random minor buff (10%)",
            "Allows the user to glimpse into an alternate reality for 3 seconds",
            "Grants advantage on Wisdom saving throws."
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Temporal Echoes',
        levelRequirement: 5
    },

    'grand_country_chronal_shard': {
        id: 'grand_country_chronal_shard',
        name: "Temporal Echo Fragment",
        description: "A fractured piece of solidified time, radiating a faint blue glow. Touching it briefly allows you to rewind your last action… but be careful! Messing with time is always a recipe for disaster (or Wario finding an even bigger pile of coins).",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 35000,
        icon: '⏳',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "allows the user to rewind their last action (once per day)",
            "chance to create a temporal paradox (random negative effect)"
        ],
        vendor: 'side_seller',
        shippedBy: 'shadow_raven',
        levelRequirement: 15
    },

    'grand_country_sky_pearl': {
        id: 'grand_country_sky_pearl',
        name: "Celestial Echo Pearl",
        description: "Born from solidified clouds and imbued with the songs of distant stars, this pearl emits a soft, melodic hum. Holding it grants fleeting glimpses into possible futures – though Wario probably just sees more treasure!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 180000,
        icon: '✨',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "grants +5 to insight checks",
            "chance to reveal a hidden path or secret",
            "provides temporary resistance to psychic damage"
        ],
        vendor: 'layer_market',
        shippedBy: 'cloud_whale',
        levelRequirement: 23
    },

    'earth_land_dragonscale_shield': {
        id: 'earth_land_dragonscale_shield',
        name: "Wyrm's Whisper Bulwark",
        description: "Forged from the shed scales of a young frost dragon, this shield radiates an aura of icy protection. It feels strangely warm to the touch and emits a faint whisper promising victory… or maybe just indigestion.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🛡️',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "blocks all physical attacks",
            "reflects 20% of incoming magic damage",
            "chance to stun enemies (5%) on a successful block",
            "adds +3 Armor Class"
        ],
        vendor: 'magic_shop',
        shippedBy: 'Winged Courier',
        levelRequirement: 12
    },

    'earth_land_mythic_echoing_gem': {
        id: 'earth_land_mythic_echoing_gem',
        name: "The Lament of Lost Souls",
        description: "A gem pulsating with the trapped sorrow of ancient battles. Holding it causes a brief, unsettling vision of past conflicts – and potentially attracts spectral echoes that want to chat... or cause mischief!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 250000,
        icon: '💎',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "grants +10 to Wisdom checks",
            "chance to summon a minor spectral echo (15%) - can scout or distract enemies",
            "provides resistance to fear effects",
            "Chance to cause the target to lose 10% of their current HP"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'Dimensional Rift Delivery',
        levelRequirement: 23
    },

    'leclaire_isle_item_honeycomb_heart': {
        id: 'leclaire_isle_item_honeycomb_heart',
        name: "Honeycomb Heart Charm",
        description: "A pulsating charm crafted from solidified honey and enchanted dough. It radiates a sticky sweetness, attracting curious creatures and granting minor healing over time - just try not to get stuck!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 65000,
        icon: '🍯',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "grant_healing_over_time:5",
            "attracts_friendly_creatures",
            "chance_to_reduce_enemy_attack_speed"
        ],
        vendor: 'dough_depot',
        shippedBy: 'Sticky Courier Pigeon',
        levelRequirement: 18
    },

    'leclaire_isle_item_frosting_flail': {
        id: 'leclaire_isle_item_frosting_flail',
        name: "Frosting Flail of Frozen Fury",
        description: "This colossal flail is made entirely from hardened buttercream and enchanted with winter magic! It's surprisingly heavy, but a single swing can freeze enemies solid – just try not to slip on the frosting!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🧊',
        stock: 7,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "damage:12-18",
            "chance_to_freeze_target",
            "increased_critical_hit_chance"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'Swift Sugar Delivery Cart',
        levelRequirement: 7
    },

    'leclaire_isle_item_sugar_shock_berry': {
        id: 'leclaire_isle_item_sugar_shock_berry',
        name: "Sugar Shock Berry",
        description: "These vibrant red berries explode with a burst of sugary energy! Consuming one grants a temporary speed boost and confusion, causing your enemies to stumble around in delightful disarray – Wario would LOVE this!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🍬',
        stock: 98,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "speed_boost:2",
            "chance_to_confuse_target",
            "temporary_increased_movement_speed"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'Honeybee Drone',
        levelRequirement: 1
    },

    'leclaire_isle_sugar_sprout': {
        id: 'leclaire_isle_sugar_sprout',
        name: "Sugar Sprout Stabilizer",
        description: "These adorable, miniature dough sprouts instantly reinforce weakened pastries and baked goods! They’re surprisingly effective at preventing collapsing tarts and crumbling cakes – perfect for a wobbly baker like yourself. Wario would probably try to eat them.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '🌱',
        stock: 63,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "restores 10 pastry durability",
            "chance to grant +2 to baking skill checks for one round",
            "provides temporary resistance to sticky effects"
        ],
        vendor: 'dough_depot',
        shippedBy: 'Dough Delivery Drone',
        levelRequirement: 4
    },

    'leclaire_isle_forbidden_frosting_bomb': {
        id: 'leclaire_isle_forbidden_frosting_bomb',
        name: "Forbidden Frosting Bomb",
        description: "A volatile confection crafted with ingredients rumored to be stolen from the Dough Folk’s deepest secrets. Detonate this frosty sphere for a dazzling burst of sugary chaos – beware, it might attract unwanted attention from pastry guardians!  Don't say I didn't warn you!",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 6500,
        icon: '💣',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "deals 8d6 damage to enemies in a 15ft radius (mostly sugar)",
            "chance to inflict 'Sticky Situation' status effect",
            "creates a temporary sugary hazard on the ground"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'Nightly Delivery Goblin',
        levelRequirement: 8
    },

    'leclaire_isle_golden_dough_shard': {
        id: 'leclaire_isle_golden_dough_shard',
        name: "Golden Dough Shard of Eternal Sweetness",
        description: "A fragment from a colossal, eternally baking dough creation. This shard radiates an intense sugary aura and can be used to instantly repair damaged equipment or even enhance the flavor of any meal! Just don't try to eat it whole – you'll get a tummy ache...and Wario would probably steal it.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '✨',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "restores 50% of equipment durability",
            "increases food consumption rate by 25%",
            "grants +3 to persuasion checks when offering treats"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'Royal Pastry Courier',
        levelRequirement: 10
    },

    'midlands_item_royal_decree': {
        id: 'midlands_item_royal_decree',
        name: "Decree of Unmaking",
        description: "A seemingly innocuous royal decree, penned in blood and sealed with a cursed wax. Upon reading it aloud, you can temporarily erase a single target’s memory… but be warned: the King's displeasure is rarely forgiving.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 65000,
        icon: '📜',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance to permanently erase a target's memory (high risk)",
            "increase charisma by 5 (temporary)",
            "attracts the attention of corrupt officials"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'black market contact',
        levelRequirement: 20
    },

    'doughnut_hole_graviton_donut': {
        id: 'doughnut_hole_graviton_donut',
        name: "Singularity Swirl Donut",
        description: "This donut isn't just delicious; it *warps* reality! Each bite creates a tiny localized gravity anomaly, pulling nearby enemies off balance. Careful, too many swirls and you might end up inside the Doughnut Hole itself!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 18000,
        icon: '🍩',
        stock: 25,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "deals 3 damage to enemies within a 5ft radius",
            "chance to inflict 'Disoriented' for 3 turns",
            "increases movement speed by 10% for 2 turns"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Void Courier',
        levelRequirement: 9
    },

    'doughnut_hole_void_guardians_badge': {
        id: 'doughnut_hole_void_guardians_badge',
        name: "The Hole's Protector’s Token",
        description: "Issued by the enigmatic Void Guardians, this badge grants limited access to the most dangerous corners of The Doughnut Hole. Don't expect gratitude; they mostly just want you to keep quiet and leave their sugary snacks alone!",
        category: SHOP_CATEGORIES.FACTION,
        price: 7500,
        icon: '🛡️',
        stock: 8,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grants +1 to charisma checks when interacting with void entities",
            "provides a small bonus to perception rolls within The Doughnut Hole",
            "reduces the duration of fear effects by 20%"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dimensional Courier',
        levelRequirement: 5
    },

    'equestria_item_sparklehoof_plate': {
        id: 'equestria_item_sparklehoof_plate',
        name: "Sparklehoof's Steadfast Plate",
        description: "Forged in the fires of Canterlot, this plate is rumored to have been worn by a valiant pony knight! It’s surprisingly comfortable (even for Wario) and offers solid protection – probably won’t stop a giant boulder, but it’ll do.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6200,
        icon: '🛡️',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Increases Armor Class by 2",
            "+3 to defense rolls",
            "Provides resistance to radiant damage"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'royal_carriage',
        levelRequirement: 7
    },

    'equestria_item_pegasus_feather_amulet': {
        id: 'equestria_item_pegasus_feather_amulet',
        name: "Amulet of Swift Winds",
        description: "This intricately carved amulet contains a single, iridescent Pegasus feather. Wario’s convinced it'll let him fly… probably won't, but it *does* grant minor speed boosts. Don’t blame us if you end up chasing butterflies.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2100,
        icon: '💨',
        stock: 95,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "+1 to movement speed",
            "Chance to dodge attacks (15%)",
            "Grants a small bonus to ranged attack rolls"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'winged_messenger',
        levelRequirement: 10
    },

    'connectopia_shard_of_void': {
        id: 'connectopia_shard_of_void',
        name: "Nullity Fragment",
        description: "A chilling shard pulsing with the nothingness of the Void Rift. Touching it feels like a brief, unsettling silence, and prolonged exposure can cause your tools to inexplicably disappear – or perhaps just rearrange themselves into more confusing configurations. This item is not for the faint of heart!",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 250000,
        icon: '🌌',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance to inflict ‘Disorientation’ on enemies (reduced accuracy)",
            "chance to drain enemy stats temporarily",
            "increases the player's resistance to psychic damage"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'black_market_runner',
        levelRequirement: 20
    },

    'connectopia_wario_wrench_prototype': {
        id: 'connectopia_wario_wrench_prototype',
        name: "Wario’s Experimental Fixer",
        description: "This wrench was briefly in Wario’s possession, and he left it behind after a particularly chaotic block-smashing session. It's covered in grease and suspiciously cheerful dents – perfect for improvising repairs or… well, causing general mayhem. Just don’t ask where it got its extra handle.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750,
        icon: '🔧',
        stock: 25,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increases repair speed by 10%",
            "chance to inflict ‘Stun’ on enemies with repairs",
            "provides a small bonus to mining speed"
        ],
        vendor: 'block_smith',
        shippedBy: 'delivery_bot',
        levelRequirement: 3
    },

    'kivotos_item_halo_of_disruptive_melody': {
        id: 'kivotos_item_halo_of_disruptive_melody',
        name: "Discordant Halo",
        description: "A shimmering halo crafted from captured student club anthems. This curious artifact emits waves of sonic disruption, stunning nearby foes and scrambling their attacks – perfect for confusing the heck out of anyone.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1800,
        icon: '🎶',
        stock: 35,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "stuns enemies on hit with a 30% chance",
            "reduces enemy accuracy by 15%",
            "chance to inflict 'Confusion' status (5%)"
        ],
        vendor: 'club_supply',
        shippedBy: 'standard_mail',
        levelRequirement: 4
    },

    'kivotos_item_data_ghost_fragment': {
        id: 'kivotos_item_data_ghost_fragment',
        name: "Echo of the Network",
        description: "A fractured piece of a digital ghost – remnants of a forgotten student's online persona. Touching this fragment grants you temporary access to corrupted data streams, offering cryptic clues and unsettling visions. Wario would totally try to monetize this!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '👻',
        stock: 8,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "grants +5 to Intelligence for 3 rounds",
            "chance to reveal hidden passages or secrets (15%)",
            "provides a vague prophetic vision – potentially misleading!",
            "temporary immunity to digital illusions"
        ],
        vendor: 'student_store',
        shippedBy: 'night_carrier',
        levelRequirement: 6
    },

    'middle_earth_whispering_rune': {
        id: 'middle_earth_whispering_rune',
        name: "Echoing Stone of Rivendell",
        description: "This smooth, grey stone hums with the faintest whispers of Elven songs. Holding it allows you to briefly perceive echoes of past events in the area – potentially revealing hidden passages or forgotten dangers! It’s like a tiny, grumpy elf is trying to tell you something… probably about where he hid his stash.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7500,
        icon: '🔮',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "perception +1 for 60 seconds",
            "chance to reveal hidden objects on perception checks",
            "small chance of attracting a grumpy brownie"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_pony',
        levelRequirement: 7
    },

    'middle_earth_shire_messenger_scrolls': {
        id: 'middle_earth_shire_messenger_scrolls',
        name: "Post of the Shire",
        description: "These intricately decorated scrolls are used by the diligent messengers of Hobbiton. Sending one allows you to dispatch a message – though expect a slight delay, as hobbits take their time! It's also rumored that these scrolls can subtly influence people toward generosity... or at least, towards giving out second breakfast.",
        category: SHOP_CATEGORIES.FACTION,
        price: 25000,
        icon: '✉️',
        stock: 8,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance to gain goodwill with the Shirefolk faction",
            "increased persuasion skill for 30 minutes",
            "small chance of receiving a free pie"
        ],
        vendor: 'shire_shop',
        shippedBy: 'swiftfoot_rabbit',
        levelRequirement: 22
    },

    'grand_country_sticky_scale': {
        id: 'grand_country_sticky_scale',
        name: "Sticky Scale of the Shifting Peaks",
        description: "This iridescent scale, shed by a creature that defies gravity itself, clings stubbornly to whatever you touch! It seems to subtly alter your grip and makes climbing treacherous surfaces… slightly easier.  Don't worry, it doesn’t actually *stick* to you, just the ground!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '🧗‍♀️',
        stock: 67,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased climbing speed (10%)",
            "chance to cling to walls (5%)",
            "resistance to falling damage (small)"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Winged Courier',
        levelRequirement: 6
    },

    'grand_country_wario_crumb_sandwich': {
        id: 'grand_country_wario_crumb_sandwich',
        name: "Wario's Gravity-Defying Crumb Sandwich",
        description: "Don't ask how it's still intact! This suspiciously plump sandwich seems to defy the laws of physics, constantly shifting and reforming. Each bite grants a burst of energy...and a mild stomachache. Wario approves!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🥪',
        stock: 15,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "restores 30 HP",
            "temporarily increases movement speed (20%)",
            "small chance to gain a random buff (strength, dexterity, etc.)"
        ],
        vendor: 'side_seller',
        shippedBy: 'Delivery Drone',
        levelRequirement: 10
    },

    'internet_glitch_charm': {
        id: 'internet_glitch_charm',
        name: "Reality Ripple Charm",
        description: "This charming little trinket is packed with corrupted data! When activated, it briefly scrambles the target's senses and perception – perfect for avoiding awkward conversations or confusing your enemies. It’s surprisingly effective… mostly.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '✨',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "deals 1d6 psychic damage to target",
            "target has disadvantage on perception checks for 1 round",
            "chance to inflict 'meme madness' (target must repeat a random internet meme)"
        ],
        vendor: 'data_dealer',
        shippedBy: 'packet_delivery',
        levelRequirement: 5
    },

    'internet_static_orb': {
        id: 'internet_static_orb',
        name: "Viral Echo Orb",
        description: "A swirling vortex of fragmented data – a miniature representation of the internet itself! Holding this orb allows you to briefly broadcast your thoughts across local networks, causing minor distractions and confusion. Beware of unwanted attention… or bots.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 875,
        icon: '📡',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance to confuse target for 1 round",
            "target has disadvantage on saving throws against charm effects",
            "roll a d6 - if you roll a 6 the orb turns into a cat meme"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'fiber_optic',
        levelRequirement: 8
    },

    'internet_firewall_suit': {
        id: 'internet_firewall_suit',
        name: "Data Fortress Armor",
        description: "Forged from layers of encrypted code and reinforced with quantum entanglement, this suit offers a surprisingly robust defense against digital threats. It’s not stylish, but it'll definitely block those pesky firewall attacks… probably.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🛡️',
        stock: 5,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "grants +3 armor class",
            "resistance to digital damage (firewall, virus)",
            "chance to reflect magical attacks back at the caster"
        ],
        vendor: 'cyber_market',
        shippedBy: 'drone_delivery',
        levelRequirement: 10
    },

    'midlands_item_crimson_banner': {
        id: 'midlands_item_crimson_banner',
        name: "Crimson Banner of Discontent",
        description: "A tattered banner, stained with the blood of a thousand minor rebellions. Waving this during negotiations might just sway a stubborn noble... or enrage them further! It's surprisingly effective at sowing discord.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🚩',
        stock: 7,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases persuasion by 5 for 3 turns",
            "chance to cause a small riot (10%)",
            "reduces diplomacy checks by 2"
        ],
        vendor: 'midland_merchant',
        shippedBy: 'Imperial Courier',
        levelRequirement: 7
    },

    'midlands_item_echoing_shard': {
        id: 'midlands_item_echoing_shard',
        name: "Echoing Shard of the Fallen King",
        description: "A pulsating fragment of obsidian, said to contain whispers from a forgotten monarch. Hold it close and listen… but be warned, prolonged exposure can drive you utterly mad with visions of past glories!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 80000,
        icon: '🔮',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "grants cryptic visions (random effects)",
            "chance to gain temporary madness (5%)",
            "increases intelligence by 3 for 1 turn, but also lowers charisma by 2"
        ],
        vendor: 'fractured_forge',
        shippedBy: 'Winged Courier',
        levelRequirement: 18
    },

    'midlands_item_empire_favor': {
        id: 'midlands_item_empire_favor',
        name: "Empire Favor Token - House Valerius",
        description: "A polished token bearing the crest of House Valerius, a powerful noble family known for their ruthless ambition and surprisingly effective legal teams.  This might just get you some… *special* treatment.",
        category: SHOP_CATEGORIES.FACTION,
        price: 600,
        icon: '👑',
        stock: 55,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grants access to Valerius-exclusive quests",
            "increases influence with House Valerius by 10",
            "allows a discount on goods from the Empire Exchange"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'Royal Post',
        levelRequirement: 3
    },

    'faerun_item_shadowfell_whisper': {
        id: 'faerun_item_shadowfell_whisper',
        name: "Shadowfell Whisper Stone",
        description: "A pulsing obsidian stone, cool to the touch and faintly murmuring with unsettling secrets. This item whispers cryptic advice - mostly about avoiding goblins…and occasionally demanding you give it shiny things.  Don't listen too closely, or Wario might start hoarding!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1250,
        icon: '🌑',
        stock: 38,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance_to_detect_shadows",
            "wisdom_boost_5",
            "minor_illusion_effect"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'messenger_hawk',
        levelRequirement: 7
    },

    'faerun_item_waterdeep_merchant_favor': {
        id: 'faerun_item_waterdeep_merchant_favor',
        name: "Waterdeep Merchant's Favor Token",
        description: "A beautifully crafted token bearing the insignia of a prominent Waterdeep merchant house. This token grants access to exclusive discounts and favors within the city’s bustling marketplace – perfect for stocking up on Wario’s favorite treats…and suspiciously large quantities of gold.",
        category: SHOP_CATEGORIES.FACTION,
        price: 6500,
        icon: '💰',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "discount_on_goods_in_waterdeep",
            "influence_with_merchants",
            "chance_to_receive_rare_items"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'sea_gull',
        levelRequirement: 10
    },

    'equestria_item_sparklehoof_boots': {
        id: 'equestria_item_sparklehoof_boots',
        name: "Sparklehoof's Speedy Striders",
        description: "Legendary boots crafted by the greatest hoof-smiths in Ponyville! These sturdy boots imbue the wearer with incredible speed, allowing them to traverse vast distances and outpace even the fastest Pegasus. Wario’s obsessed with speed – he bought a kart just to see if these would work!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '💨',
        stock: 12,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increases movement speed by 50%",
            "grants a chance to dodge attacks",
            "reduces stamina consumption while running"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Delivery Pony Express',
        levelRequirement: 9
    },

    'equestria_item_apple_core_charm': {
        id: 'equestria_item_apple_core_charm',
        name: "Apple Core of Courage",
        description: "A tiny, polished apple core – a keepsake from the first Apple Harvest Festival! This charm is said to grant the wearer a surge of bravery and protect them from fear. Wario thinks it’s just a pretty distraction… until you need it!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '🍎',
        stock: 87,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grants temporary resistance to fear effects",
            "slightly increases attack power against cowardly enemies",
            "chance to gain inspiration (boosts next skill check)"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Crystal Courier',
        levelRequirement: 2
    },

    'warhammer_doomshard': {
        id: 'warhammer_doomshard',
        name: "Doomshard Fragment - Echoes of Chaos",
        description: "A pulsating shard ripped from the heart of a fallen god! This item radiates an aura of unsettling energy, and occasionally whispers prophecies... mostly about Wario’s terrible fashion choices.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 65000,
        icon: '💀',
        stock: 3,
        rarity: 'mythic',
        stockType: 'limited_daily',
        effects: [
            "damage: 12-15 + level",
            "chance to stun enemies",
            "increased critical hit damage",
            "temporarily reduces enemy attack power"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Rift Runner',
        levelRequirement: 20
    },

    'curiosity_fatecoin': {
        id: 'curiosity_fatecoin',
        name: "Fate's Coin - Flip for Glory (or Doom)",
        description: "A tarnished silver coin etched with cryptic symbols. When flipped, it may grant a small boon or inflict a terrible curse – the fates are fickle, and Wario's never been one to complain about a little misfortune!  Just don’t blame us if you accidentally summon a demon.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '🪙',
        stock: 99,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to grant +1 to a random stat for 1 round",
            "chance to inflict -1 to a random stat for 1 round",
            "chance to summon a small spectral imp (rare)",
            "chance to trigger a minor, chaotic event"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Courier',
        levelRequirement: 3
    },

    'equestria_item_stirrups_of_swiftness': {
        id: 'equestria_item_stirrups_of_swiftness',
        name: "Stirrups of Swiftness",
        description: "These sturdy stirrups, crafted from enchanted ironwood and imbued with a touch of Pegasus magic, grant the wearer an incredible burst of speed! Just be careful not to fly off into space – Wario would *love* to steal your hat.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750,
        icon: '🐴',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "+3 to movement speed",
            "chance to halve the duration of slowing effects",
            "increases stamina regeneration by 10%"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Courier Pony',
        levelRequirement: 4
    },

    'equestria_item_berry_potion_of_confusion': {
        id: 'equestria_item_berry_potion_of_confusion',
        name: "Berry Potion of Confusion",
        description: "This vibrant purple potion is brewed from the rarest wild berries found in the Everfree Forest – and a *slight* dose of chaotic magic. Drink it quickly, but don’t be surprised if you start believing you're a unicorn… or worse, a grumpy griffin!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🍇',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Confusion effect for 3 turns",
            "Chance to trigger a random beneficial or detrimental status effect",
            "Restores a small amount of health"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Delivery Pony (Express)',
        levelRequirement: 2
    },

    'earth_land_dragonscale_amulet': {
        id: 'earth_land_dragonscale_amulet',
        name: "Shard of the Azure Wyrm",
        description: "A fragment of a fallen azure dragon's scale, pulsing with residual magical energy. Legend says wearing this amulet grants you resistance to cold and a slightly unsettling affinity for hoarding shiny objects... just like Wario!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🐉',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "grants +3 resistance to cold damage",
            "chance (15%) to gain a temporary 'treasure hoard' effect (increased inventory space)",
            "increases charisma by 2 for 1 turn",
            "reduces the chance of being frightened"
        ],
        vendor: 'magic_shop',
        shippedBy: 'Magical Delivery Drone',
        levelRequirement: 9
    },

    'earth_land_fortune_cookie': {
        id: 'earth_land_fortune_cookie',
        name: "Wario's Guaranteed Lucky Cookie",
        description: "A single, perfectly formed fortune cookie crafted by the mysterious Master Baker. Crack it open for a cryptic prediction… or perhaps just a slightly stale biscuit. It’s Wario’s own brand of ‘fortune’, so don’t expect anything too good!",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 8000,
        icon: '🍪',
        stock: 9,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "grants +5 to persuasion checks for 1 turn",
            "chance (20%) to reveal a hidden clue related to the current quest",
            "provides temporary inspiration (advantage on next ability check)"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'Swift Pony Express',
        levelRequirement: 6
    },

    'teyvat_item_oceanic_resonance': {
        id: 'teyvat_item_oceanic_resonance',
        name: "Resonance of the Azure Depths",
        description: "A perfectly preserved nautilus shell, radiating a calming Hydro aura. Legend says it was once held by a powerful Mizutsune. Don't worry, Wario doesn’t mind if you listen to its whispers (it mostly just says 'more fish').",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 35000,
        icon: '💧',
        stock: 18,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Increases Hydro Damage by 25%",
            "Provides a small chance to create a temporary whirlpool on hit",
            "Grants +3 Water Breathing"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'Sea Serpent Express',
        levelRequirement: 14
    },

    'teyvat_item_void_essence': {
        id: 'teyvat_item_void_essence',
        name: "Void Essence Core",
        description: "A pulsating sphere of pure Void energy - harvested from the depths of Tatarasuna. Wario's pretty sure it’s just a really fancy black rock, but hey, Archons are weird!",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 120000,
        icon: '🖤',
        stock: 5,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "Grants permanent +10 Void Damage",
            "Chance to inflict 'Void Corruption' on target (reduces healing received)",
            "Allows the user to cast a single 'Void Blast' spell once per day"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'Dimensional Rift Delivery',
        levelRequirement: 23
    },

    'teyvat_item_lion_archon_scroll': {
        id: 'teyvat_item_lion_archon_scroll',
        name: "Scroll of the Steadfast Lion",
        description: "A meticulously crafted scroll containing meditations taught by the Archon of Mondstadt! Following these exercises will bolster your resolve, granting you a temporary buff against fear and madness. Wario would probably try to eat it.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 8000,
        icon: '🦁',
        stock: 22,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "grants +5 to willpower",
            "chance to negate fear effects",
            "temporary resistance to madness",
            "restores a small amount of sanity"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'messenger_hawk',
        levelRequirement: 6
    },

    'teyvat_item_yohud_amulet': {
        id: 'teyvat_item_yohud_amulet',
        name: "Amulet of the Silent God",
        description: "This ancient amulet, rumored to be a fragment from Yohud's domain, grants you an unsettling stillness. It muffles your movements and dampens surrounding sounds, making it perfect for stealth or simply avoiding awkward conversations... Wario hates silence.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 85000,
        icon: '🤫',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increases stealth effectiveness by 30%",
            "reduces enemy detection range",
            "chance to silence enemy spells and abilities",
            "slightly increases movement speed"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'phantom_ship',
        levelRequirement: 18
    },

    'pokemon_item_phantom_echo': {
        id: 'pokemon_item_phantom_echo',
        name: "Echoing Ghost Orb",
        description: "This shimmering orb pulses with the faintest traces of ghostly energy, remnants from battles long past. Wario would love to use this as a distraction for unsuspecting Pokémon! It briefly duplicates your attacks, offering a spooky surprise.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '👻',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "deals 15% bonus damage for 3 turns",
            "chance to inflict 'Confused' on target",
            "restores 20 HP"
        ],
        vendor: 'pokemart',
        shippedBy: 'Pokémail',
        levelRequirement: 7
    },

    'pokemon_item_trainer_badge': {
        id: 'pokemon_item_trainer_badge',
        name: "Elite Four's Favor Token",
        description: "A polished badge bearing the emblem of the Elite Four, rumored to hold a fragment of their strategic brilliance. Wario thinks this is a good replacement for his own collection!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '🏆',
        stock: 18,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Increases critical hit chance by 10%",
            "Grants +3 to Attack and Defense",
            "Provides a small bonus to negotiation checks with NPCs"
        ],
        vendor: 'league_store',
        shippedBy: 'Delivery Drone',
        levelRequirement: 12
    },

    'pokemon_item_legendary_shift': {
        id: 'pokemon_item_legendary_shift',
        name: "Dimensional Distortion Shard",
        description: "This pulsating fragment of warped reality allows brief glimpses into alternate dimensions – mostly filled with confused Pokémon and Wario’s discarded inventions. Use it to teleport short distances, but be careful not to get trapped!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850000,
        icon: '🌀',
        stock: 1,
        rarity: 'mythic',
        stockType: 'godly',
        effects: [
            "Allows for a single, instant teleport (up to 30 feet)",
            "Chance to trigger a random status effect on the user",
            "Grants temporary resistance to confusion and paralysis"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Mystic Courier',
        levelRequirement: 25
    },

    'pokemon_item_evolution_shard': {
        id: 'pokemon_item_evolution_shard',
        name: "Primal Echo Shard",
        description: "This shimmering fragment pulses with the raw energy of forgotten Pokémon. Holding it near a compatible creature might trigger an unexpected evolution – but beware, uncontrolled transformations are a Wario specialty!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 18000,
        icon: '✨',
        stock: 25,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "chance to trigger evolution on a Pokémon within 30ft",
            "increases Pokémon's base stats by 1 for 3 turns",
            "small chance of temporary stat boost (random)",
            "grants +2 to instinct"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Pokémail Delivery',
        levelRequirement: 9
    },

    'pokemon_item_hyper_berry': {
        id: 'pokemon_item_hyper_berry',
        name: "Hyper-Charged Berry",
        description: "These plump, intensely sweet berries were cultivated by a particularly obsessive trainer. Eating one instantly replenishes HP and PP – perfect for pulling through those tough battles (or just snacking like Wario!).",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🍓',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Restores 50 HP",
            "Restores all PP",
            "Chance to ignore next status effect"
        ],
        vendor: 'pokemart',
        shippedBy: 'Standard Delivery',
        levelRequirement: 1
    },

    'middle_earth_ringworm_hat': {
        id: 'middle_earth_ringworm_hat',
        name: "Mushroom Maestro's Headgear",
        description: "This slightly damp hat, rumored to have once belonged to a particularly enthusiastic mushroom hunter, provides surprisingly effective protection against minor magical ailments and the occasional drizzle. It also emits a faint, pleasant aroma of wild mushrooms – perfect for distracting grumpy dwarves!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🍄',
        stock: 7,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "resistance to poison (15)",
            "increased movement speed (5%)",
            "chance to attract woodland creatures"
        ],
        vendor: 'elven_market',
        shippedBy: 'Winged Courier',
        levelRequirement: 7
    },

    'middle_earth_stone_of_reflection': {
        id: 'middle_earth_stone_of_reflection',
        name: "The Glimmering Pebble of Lost Memories",
        description: "A perfectly smooth, grey stone that seems to hold echoes of forgotten times. Holding it allows you to briefly glimpse fractured images from the past – useful for solving puzzles or maybe just impressing your friends with a dramatic flourish!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 80000,
        icon: '✨',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "reveals hidden pathways (50%)",
            "chance to trigger flashbacks (10%) - may cause temporary confusion",
            "boosts perception (20)",
            "can be used as a distraction"
        ],
        vendor: 'shire_shop',
        shippedBy: 'Dire Bear Cart',
        levelRequirement: 16
    },

    'middle_earth_wario_footstool': {
        id: 'middle_earth_wario_footstool',
        name: "Wario's Wobbly Resting Place",
        description: "This delightfully unstable footstool, suspiciously similar to Wario’s own footwear, is surprisingly comfortable (when it doesn’t collapse). It’s perfect for taking a short break while exploring ancient ruins or plotting your next scheme – just be careful not to fall!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 600,
        icon: '🦶',
        stock: 25,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increased stamina regeneration (10%)",
            "minor chance to stumble into hidden treasures",
            "slightly louder steps"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'Rolling Log',
        levelRequirement: 2
    },

    'grand_country_sticky_climb': {
        id: 'grand_country_sticky_climb',
        name: "Gravity Grip Gummies",
        description: "These chewy gummies grant temporary mastery over gravity! Consume one to instantly attach yourself to any surface, scaling walls and ceilings with surprising ease. Warning: prolonged use may induce an uncontrollable urge to bounce.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🪨',
        stock: 67,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grant_gravity_climbing_effect_for_15_seconds",
            "increase_dexterity_by_3",
            "chance_to_stick_permanently_if_overused"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Delivery Drone',
        levelRequirement: 5
    },

    'grand_country_stacked_surprise': {
        id: 'grand_country_stacked_surprise',
        name: "Layered Loot Lollipop",
        description: "This enormous lollipop is constructed from countless layers of sugary goodness, each concealing a random treasure. Bite into it with reckless abandon – you might find gold, potions, or even a tiny Wario figurine! It’s guaranteed to be sticky and delicious…and possibly explode.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '🍬',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance_to_drop_a_random_item_on_consumption",
            "temporary_buff_to_luck",
            "small_chance_of_exploding_with_a_sugar_shower",
            "recover_health_amount_equal_to_half_level"
        ],
        vendor: 'side_seller',
        shippedBy: 'Giant Spider Delivery',
        levelRequirement: 11
    },

    'middle_earth_whispering_shard': {
        id: 'middle_earth_whispering_shard',
        name: "Echoing Fragment of Morgoth",
        description: "This jagged piece of obsidian pulses with a faint, unsettling energy – remnants of Morgoth’s fury. Holding it close allows you to briefly hear whispers from the past, potentially revealing hidden clues or forgotten paths… but beware, prolonged exposure can drive a sane man mad!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 65000,
        icon: '🔮',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "grant_insight_1d4",
            "chance_to_reveal_hidden_passage",
            "temporary_sanity_drain_1"
        ],
        vendor: 'elven_market',
        shippedBy: 'Winged Courier',
        levelRequirement: 20
    },

    'middle_earth_dwarven_stoutheart': {
        id: 'middle_earth_dwarven_stoutheart',
        name: "Stone-Forged Resilience Brew",
        description: "A potent dwarven concoction brewed deep within the Forges of Khazad-dûm. This stout ale grants temporary fortitude, perfect for weathering harsh conditions or battling grumpy trolls… mostly because it tastes amazing.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '🍺',
        stock: 95,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increase_armor_class_1d2",
            "temporary_stamina_boost_3",
            "resistance_to_cold_damage_1"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'Stone Cart',
        levelRequirement: 5
    },

    'middle_earth_shire_charm_of_luck': {
        id: 'middle_earth_shire_charm_of_luck',
        name: "Lucky Pocket Watch of Bilbo",
        description: "A beautifully crafted pocket watch, purportedly owned by the one and only Bilbo Baggins. While it won't magically conjure second breakfast, it does seem to subtly improve your chances of finding treasure… or avoiding unpleasant encounters with goblins.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🍀',
        stock: 78,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increase_critical_hit_chance_5%",
            "increased_item_drop_rate_10%",
            "grant_advantage_on_stealth_checks_1d4"
        ],
        vendor: 'shire_shop',
        shippedBy: 'Swift Pony Express',
        levelRequirement: 8
    },

    'kivotos_item_halo_of_absurdity': {
        id: 'kivotos_item_halo_of_absurdity',
        name: "Halo of Utter Nonsense",
        description: "A gleaming halo crafted from solidified giggles and questionable intentions. Wearing this will attract bizarre creatures, cause random objects to levitate, and occasionally trigger a chorus of nonsensical poetry. It's guaranteed to confuse your enemies...and possibly yourself!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '🤪',
        stock: 21,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance_to_summon_random_creature",
            "levitate_target_object",
            "trigger_random_effect"
        ],
        vendor: 'club_supply',
        shippedBy: 'express_delivery',
        levelRequirement: 5
    },

    'kivotos_item_data_fragment_alpha': {
        id: 'kivotos_item_data_fragment_alpha',
        name: "Fragment of Lost Knowledge",
        description: "Recovered from a discarded student's datapad, this shimmering fragment pulses with forgotten algorithms and half-formed concepts. It might contain the key to understanding the universe…or just a really complicated recipe for ramen. Handle with caution - prolonged exposure may cause existential dread!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '💻',
        stock: 8,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance_to_gain_knowledge_skill",
            "small_duration_buff_intelligence",
            "chance_to_disrupt_enemy_target"
        ],
        vendor: 'student_store',
        shippedBy: 'delivery_only',
        levelRequirement: 10
    },

    'middle_earth_mushroom_gloomcap': {
        id: 'middle_earth_mushroom_gloomcap',
        name: "Gloomcap's Echoing Delight",
        description: "These oddly luminous mushrooms pulse with a faint, unsettling energy. Eating one grants temporary night vision and a surprisingly pleasant humming sensation – though some say you briefly hear the whispers of forgotten Elven kings! It’s almost as if Kirby ate them!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 875,
        icon: '🍄',
        stock: 63,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grants night vision for 10 turns",
            "increases perception by 2 for 5 turns",
            "chance to hallucinate (1%)"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony express',
        levelRequirement: 3
    },

    'middle_earth_ring_of_minor_protection': {
        id: 'middle_earth_ring_of_minor_protection',
        name: "The Slightly Less Terrible Ring",
        description: "Forged in the depths of Khazad-dûm, this ring offers a surprisingly comforting shimmer. While it won’t stop Sauron's doom, it does provide a small boost to your defenses... and maybe ward off grumpy dwarves! Don't expect miracles.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4200,
        icon: '💍',
        stock: 17,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases armor class by 2",
            "grants resistance to slashing damage for 5 turns",
            "chance to deflect projectiles (5%)"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'giant eagle',
        levelRequirement: 6
    },

    'middle_earth_service_healing_song': {
        id: 'middle_earth_service_healing_song',
        name: "Liriel's Melodic Mending",
        description: "A skilled Elven healer has recorded a complex melody that, when played, accelerates the body’s natural healing processes. Be warned - this isn't instant recovery; it's more like… encouragement for your wounds to close faster! Wario would probably try to steal the instrument.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 12000,
        icon: '🎵',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "heals 30 hit points per turn for 3 turns",
            "reduces bleeding and poison effects by 50%",
            "restores stamina faster"
        ],
        vendor: 'elven_market',
        shippedBy: 'teleportation scroll',
        levelRequirement: 10
    },

    'midlands_item_rusty_chronometer': {
        id: 'midlands_item_rusty_chronometer',
        name: "Time's Twisted Tick",
        description: "This clunky chronometer was salvaged from the ruins of a fallen Imperial clock tower – probably used to track enemy movements, or maybe just to annoy the King. It’s surprisingly accurate… for about five seconds before exploding in a shower of sparks and minor temporal distortions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '⏳',
        stock: 5,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases attack speed by 5% for 10 seconds",
            "chance to rewind time by 1 second on critical hit",
            "minor chance of causing temporal stutter (target moves erratically for 2 seconds)"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'imperial_courier',
        levelRequirement: 8
    },

    'midlands_item_wario_belly_bumper': {
        id: 'midlands_item_wario_belly_bumper',
        name: "Wario's Emergency Cushion",
        description: "Legend says this cushion was originally created by Wario himself to protect his considerable girth during particularly chaotic battles. It's surprisingly resilient, absorbing a shocking amount of damage... mostly for the sheer delight of watching it compress.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 600,
        icon: '🛏️',
        stock: 90,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "absorbs 50% of incoming physical damage",
            "chance to stun on taking heavy damage",
            "increases carrying capacity by 10%",
            "provides a small boost to weightlifting ability"
        ],
        vendor: 'midland_merchant',
        shippedBy: 'stable_hand',
        levelRequirement: 2
    },

    'midlands_item_crimson_decree': {
        id: 'midlands_item_crimson_decree',
        name: "Crimson Decree Seal",
        description: "This unsettling seal, once used to levy taxes on rebellious provinces, now whispers promises of power. Holding it grants a brief surge of authority – perfect for intimidating lesser nobles or bribing corrupt guards! Don't worry if you accidentally trigger a minor uprising…it’s all part of the fun!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '👑',
        stock: 5,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grant_temporary_influence_v (+2 charisma)",
            "chance_to_intimidate_target",
            "increased_persuasion_skill"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'royal_messenger',
        levelRequirement: 8
    },

    'midlands_item_whispering_shard': {
        id: 'midlands_item_whispering_shard',
        name: "Whispering Shard of the Fractured King",
        description: "A fragment of obsidian pulsing with residual magic, said to be a piece of the throne shattered during the Great Schism. Touching it allows you to briefly hear the tormented thoughts of those who perished in the conflict… mostly complaints about paperwork and bad wine.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 60000,
        icon: '🔮',
        stock: 2,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "grant_insight_v (+3 wisdom)",
            "chance_to_receive_prophecy (minor)",
            "temporary_resistance_to_fear"
        ],
        vendor: 'fractured_forge',
        shippedBy: 'delivery_only',
        levelRequirement: 16
    },

    'midlands_item_rune_of_swiftness': {
        id: 'midlands_item_rune_of_swiftness',
        name: "Swift Passage Rune Ritual",
        description: "This rune, meticulously carved by a forgotten order of speedrunners, allows you to briefly manipulate the flow of time - mostly for yourself. It’s not *actually* time travel, just a really fast run from point A to point B…sometimes with unexpected consequences! Just don't try to use it during a boss fight.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1200,
        icon: '🏃',
        stock: 95,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increase_movement_speed_v (+1)",
            "chance_to_evade_attack",
            "reduced_action_economy"
        ],
        vendor: 'midland_merchant',
        shippedBy: 'delivery_only',
        levelRequirement: 3
    },

    'internet_firewall_amulet': {
        id: 'internet_firewall_amulet',
        name: "The Firewall Amulet of Resistance",
        description: "Forged by the secretive Cyber Knights, this amulet pulses with protective code! It shields you from digital attacks and provides a small resistance to mind control - hopefully it won't overload your brain.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🛡️',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "resistance_to_mind_control_20%",
            "chance_to_reflect_digital_attacks_5%",
            "increased_cybernetic_immunity"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Encoded Courier',
        levelRequirement: 6
    },

    'internet_meme_shard': {
        id: 'internet_meme_shard',
        name: "The Viral Meme Shard",
        description: "A solidified fragment of a wildly popular internet meme – it’s said to contain raw, chaotic energy! When activated, this shard briefly boosts your charisma and confuses enemies with its absurd brilliance.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2300,
        icon: '😂',
        stock: 33,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increase_charisma_15%",
            "chance_to_confuse_enemy_target_20%",
            "temporary_speed_boost_5%"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Packet Delivery System',
        levelRequirement: 9
    },

    'leclaire_isle_sugar_bomb': {
        id: 'leclaire_isle_sugar_bomb',
        name: "Honeycomb Havoc",
        description: "A deceptively sweet concoction! This small, golden sphere explodes in a sticky cloud of pure sugar upon impact, slowing and confusing enemies. Wario would totally eat this!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 120,
        icon: '💥',
        stock: 35,
        rarity: 'common',
        stockType: 'limited_daily',
        effects: [
            "Deals 15 damage to enemies in a 5ft radius.",
            "Slows enemy movement speed by 50% for 3 seconds.",
            "Causes confusion - chance of target attacking ally 20%"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'Dough Flyer Delivery',
        levelRequirement: 3
    },

    'leclaire_isle_frosting_charm': {
        id: 'leclaire_isle_frosting_charm',
        name: "The Shimmering Spire",
        description: "Crafted from solidified vanilla frosting and imbued with a touch of magical icing, this charm pulses with a gentle, frosty light. It can be used to briefly chill enemies or create slippery surfaces – perfect for a Wario-style distraction!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7800,
        icon: '❄️',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Chill target enemy for 2 seconds (deals 5 cold damage)",
            "Creates a slippery surface in a 3ft radius - enemies have reduced movement speed by 40%",
            "Chance to inflict 'Frozen' status on hit (chance: 10%)"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'Delivery Drone',
        levelRequirement: 8
    },

    'earth_land_dragon_scale_polishing': {
        id: 'earth_land_dragon_scale_polishing',
        name: "Chromatic Scale Shine",
        description: "A meticulously crafted polishing paste, made from the shed scales of a young Frost Dragon. Applying this to your armor or weapons will temporarily imbue them with a dazzling iridescent sheen – guaranteed to distract even the most formidable foes... or attract overly enthusiastic admirers!",
        category: SHOP_CATEGORIES.SERVICES,
        price: 7800,
        icon: '✨',
        stock: 15,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increase_armor_reflectivity_20",
            "chance_to_disorient_enemy",
            "temporary_armor_boost_3"
        ],
        vendor: 'magic_shop',
        shippedBy: 'Winged Courier (Guaranteed to arrive before your next meal!)',
        levelRequirement: 8
    },

    'earth_land_rune_of_wario': {
        id: 'earth_land_rune_of_wario',
        name: "Wario's Lucky Luster",
        description: "This ancient rune, pulsing with a faint purple energy, was rumored to be dropped by Wario himself during one of his legendary treasure hunts.  Holding it grants the wielder a hefty boost in luck and a strange urge to hoard shiny objects – just like the original! (Warning: May cause excessive impulse purchases)",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 12000,
        icon: '💰',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increase_luck_50",
            "chance_to_find_rare_items",
            "increased_critical_hit_damage_15",
            "temporary_gold_bonus_20"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'Dimensional Portal (Delivery times may vary wildly)',
        levelRequirement: 12
    },

    'almost_edge_voidstone_shard': {
        id: 'almost_edge_voidstone_shard',
        name: "Voidstone Shard",
        description: "A jagged piece of solidified nothingness, pulsating with a faint, unsettling darkness. This shard allows brief glimpses into the void beyond – but prolonged exposure can unravel your perception of reality... or just make you feel really cold.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 6500,
        icon: '🌑',
        stock: 7,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "Grants a chance to teleport short distances (1/3 chance)",
            "Causes nightmares for the next 24 hours",
            "Resistance to psychic damage"
        ],
        vendor: 'void_merchant',
        shippedBy: 'Dimensional Rift Packet',
        levelRequirement: 8
    },

    'almost_edge_temporal_echo_locket': {
        id: 'almost_edge_temporal_echo_locket',
        name: "Temporal Echo Locket",
        description: "A tarnished silver locket that hums with the faint echoes of forgotten moments. Opening it briefly replays a single, random moment from this location’s past – useful for investigation, or just staring into an infinite loop of pastry-related events! Wario would pay a fortune for this.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2100,
        icon: '⏳',
        stock: 15,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Reveals a single environmental clue (random)",
            "Chance to attract minor temporal anomalies",
            "Increases Perception by 2 for one minute"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Liminal Courier',
        levelRequirement: 10
    },

    'internet_meme_boost': {
        id: 'internet_meme_boost',
        name: "Viral Echo Orb",
        description: "This shimmering orb pulses with the raw energy of a thousand trending memes! Holding it grants you temporary charisma and a slight chance to confuse your enemies with bizarre, nonsensical declarations. It's like Wario trying to be cool – chaotic but surprisingly effective.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '✨',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increased charisma for 3 turns",
            "10% chance to inflict confusion on a single target",
            "minor stat boost (strength +1)"
        ],
        vendor: 'data_dealer',
        shippedBy: 'packet_delivery',
        levelRequirement: 5
    },

    'internet_cybernetic_arm': {
        id: 'internet_cybernetic_arm',
        name: "Binary Arm Fragment",
        description: "A salvaged piece of a colossal cybernetic limb, rumored to have belonged to an exiled data-mage. This arm fragment grants you enhanced strength and the ability to unleash short bursts of raw digital energy – perfect for smashing through security systems or annoying NPCs. Just don't try to download anything.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🤖',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increased strength by 8",
            "can unleash a 'Data Burst' (deals 3d6 digital damage)",
            "chance to disable enemy magical abilities"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'drone_delivery',
        levelRequirement: 10
    },

    'internet_phantom_shard': {
        id: 'internet_phantom_shard',
        name: "Lost Signal Shard",
        description: "A fragment of a shattered communication network, said to contain echoes from forgotten realities. Touching this shard allows you to briefly phase through solid objects… mostly. Be warned: prolonged exposure can lead to existential dread and an uncontrollable urge to watch cat videos.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '👻',
        stock: 3,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "allows the user to briefly phase through solid objects (5 turns)",
            "chance to gain a temporary madness effect",
            "increased perception"
        ],
        vendor: 'cyber_market',
        shippedBy: 'encrypted_package',
        levelRequirement: 17
    },

    'equestria_item_starberry_jam': {
        id: 'equestria_item_starberry_jam',
        name: "Starberry Jam of Harmony",
        description: "A thick, shimmering jam made from the rarest Starberries, said to be favored by Princess Celestia herself. Spread it on your toast... or weapon, for a temporary boost to friendship and healing!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 325,
        icon: '🍓',
        stock: 87,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "heal_small",
            "boost_friendship_1",
            "chance_remove_negative_status"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'delivery_only',
        levelRequirement: 1
    },

    'equestria_item_grumblestone': {
        id: 'equestria_item_grumblestone',
        name: "Grumblestone of Perpetual Discontent",
        description: "A small, pulsating stone that radiates pure negativity. Holding it might make you incredibly resistant to happiness... or just really grumpy. Wario loves this stuff!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 35000,
        icon: '😠',
        stock: 5,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "resistance_to_happiness",
            "increase_critical_hit_chance",
            "small_damage_boost",
            "chance_lower_enemy_morale"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'delivery_only',
        levelRequirement: 16
    },

    'animatopia_honeycomb_shield': {
        id: 'animatopia_honeycomb_shield',
        name: "Buzzing Bee Shield",
        description: "Forged from solidified honeycomb and reinforced with tiny, agitated bees, this shield provides surprisingly sturdy protection. The constant buzzing can be irritating, but it also attracts the attention of particularly large predators – a useful distraction!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🐝',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "absorb_damage_physical_moderate",
            "chance_to_stun_on_block",
            "increased_defense_3"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'Giant Beetle Delivery',
        levelRequirement: 10
    },

    'animatopia_spirit_potion': {
        id: 'animatopia_spirit_potion',
        name: "Whispering Spirit Potion",
        description: "Brewed by the tribe’s oldest shaman, this shimmering potion allows you to briefly commune with the spirits of Animatopia. They may offer cryptic advice... or just complain about the weather.  Drink responsibly (or irresponsibly – we don't judge).",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 6000,
        icon: '✨',
        stock: 8,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "heal_moderate",
            "chance_to_cast_minor_illusion",
            "grants_visions"
        ],
        vendor: 'forest_market',
        shippedBy: 'Delivery Drone',
        levelRequirement: 15
    },

    'chaos_voidshard': {
        id: 'chaos_voidshard',
        name: "Void Shard of Unmaking",
        description: "A fragment ripped from the very fabric of chaos! Touching this shard feels like a dizzying plunge into madness, and it has a nasty habit of…unraveling things. Use with caution, or don't – results may vary wildly!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🌀',
        stock: 25,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "chance to inflict confusion on target",
            "randomly reduces enemy stats by 1d4",
            "small chance of teleporting the user",
            "deals minor psychic damage"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Shadow Messenger',
        levelRequirement: 5
    },

    'fate_scroll_divination': {
        id: 'fate_scroll_divination',
        name: "Scroll of Wario's Premonitions",
        description: "This scroll promises glimpses into the threads of fate, guided by the chaotic brilliance of Wario himself! Don’t expect clear answers – it mostly shows you things that are vaguely disturbing and involve a lot of mushrooms. It’s an excellent way to waste your time or accidentally stumble upon treasure.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 750,
        icon: '🔮',
        stock: 18,
        rarity: 'common',
        stockType: 'special_order',
        effects: [
            "provides a vague prophecy (random effect)",
            "chance to reveal hidden secrets",
            "increases luck for one action",
            "small healing bonus"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Temporal Delivery',
        levelRequirement: 2
    },

    'internet_packet_worm': {
        id: 'internet_packet_worm',
        name: "Viral Velocity Injector",
        description: "This pulsating, rainbow-colored injector floods your veins with pure, unadulterated meme energy! It’s guaranteed to cause a delightful digital frenzy and temporarily boost your speed – perfect for escaping awkward conversations or hijacking a trending topic.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '🚀',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increase_speed_for_15_seconds",
            "chance_to_spread_meme_effect_on_hit",
            "temporary_buff_charisma"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'data_stream',
        levelRequirement: 6
    },

    'internet_data_shard': {
        id: 'internet_data_shard',
        name: "Echoing Fragment of the Void",
        description: "A shimmering, obsidian fragment pulsing with fragmented memories from across the internet. Holding this shard allows you to briefly glimpse alternate realities and whisper cryptic warnings – or just stare at it intensely for a good five minutes.  Don't blame us if you start speaking in 404 errors.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2300,
        icon: '🔮',
        stock: 15,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "chance_to_reveal_hidden_information",
            "temporary_buff_intelligence",
            "briefly_teleport_a_short_distance"
        ],
        vendor: 'data_dealer',
        shippedBy: 'encrypted_packet',
        levelRequirement: 12
    },

    'curiosity_chronometer': {
        id: 'curiosity_chronometer',
        name: "Chronometer of Flickering Timelines",
        description: "This bizarre pocket watch seems to bend time itself, occasionally showing glimpses of past or future events. Don't stare at it for too long – you might find yourself trapped in an endless loop of polka music and slightly grumpy goblins.  It’s surprisingly accurate when telling the current time… sometimes.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '🕰️',
        stock: 25,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "chance to rewind time by a few seconds (small area)",
            "provides minor resistance to temporal magic",
            "occasionally displays cryptic visions",
            "slows enemy movement speed slightly"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Winged Courier',
        levelRequirement: 3
    },

    'connectopia_artifact_chronal_shift': {
        id: 'connectopia_artifact_chronal_shift',
        name: "Temporal Echo Device",
        description: "This ancient device pulses with trapped moments in time! Wario would LOVE to use this, but be warned - prolonged exposure can cause...minor paradoxes. Don't blame us if you start speaking backwards.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 65000,
        icon: '⏳',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Allows the user to rewind time by 5 seconds (once per day)",
            "Grants +10 to intelligence",
            "Chance to create a temporary duplicate of the user's action.",
            "Increases resistance to temporal magic by 50%"
        ],
        vendor: 'block_smith',
        shippedBy: 'Wario Express Courier',
        levelRequirement: 20
    },

    'leclaire_isle_sticky_sweet_slice': {
        id: 'leclaire_isle_sticky_sweet_slice',
        name: "Sticky Sweet Slice",
        description: "This colossal pastry practically oozes with sugary goodness! It's rumored to be baked with the tears of happy gingerbread men, and every bite is guaranteed to induce a blissful sugar rush – beware of uncontrollable giggling!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '🎂',
        stock: 72,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "heals 30 HP",
            "grants +1 to Charisma for 3 turns",
            "chance to gain 'Sugar Rush' (increased movement speed)"
        ],
        vendor: 'dough_depot',
        shippedBy: 'Dough Delivery Drone',
        levelRequirement: 5
    },

    'leclaire_isle_frosting_fortification': {
        id: 'leclaire_isle_frosting_fortification',
        name: "Frosting Fortification",
        description: "A shimmering, multi-layered frosting concoction! Consume this to bolster your defenses with a sugary shell, providing temporary protection against physical attacks and a delightful aroma.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6800,
        icon: '🛡️',
        stock: 15,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "grants +3 Armor Class",
            "provides temporary resistance to bludgeoning damage (5 turns)",
            "chance to inflict 'Sticky Situation' on an enemy (reduces their speed)"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'Butter-Winged Courier',
        levelRequirement: 10
    },

    'leclaire_isle_dough_divination': {
        id: 'leclaire_isle_dough_divination',
        name: "Dough Divination",
        description: "A skilled Dough Folk artisan will spend an hour kneading and shaping enchanted dough into a prophetic orb. The resulting visions are cryptic, delicious-smelling, and may or may not be helpful… Wario recommends eating the orb for a more direct answer!",
        category: SHOP_CATEGORIES.SERVICES,
        price: 23000,
        icon: '🔮',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "provides a cryptic clue to the party's quest (randomly determined)",
            "grants advantage on one Wisdom check",
            "chance to trigger a minor beneficial effect (e.g., find a hidden treasure)"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'Rolling Cart of Prophecy',
        levelRequirement: 18
    },

    'internet_firewall_service': {
        id: 'internet_firewall_service',
        name: "Digital Fortress Reconstruction",
        description: "Overloaded your network with unwanted attention? This service meticulously rebuilds your digital defenses, layering protective protocols and redirecting intrusive data streams. It’s like having a personal army of robots guarding your online presence – just try not to accidentally delete all your saved games!",
        category: SHOP_CATEGORIES.SERVICES,
        price: 7500,
        icon: '🛡️',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "restores 30% of lost mana/stamina",
            "grants temporary immunity to digital curses",
            "chance to repel hostile AI entities (15%)"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Quantum Courier',
        levelRequirement: 8
    },

    'earth_land_rune_of_swiftness': {
        id: 'earth_land_rune_of_swiftness',
        name: "Rune of Swiftness (Temporal Flux)",
        description: "This shimmering rune pulses with chaotic energy, promising bursts of incredible speed! Touching it feels like a tiny earthquake - use wisely or you might end up running into walls... or worse, your own feet. Wario would totally abuse this!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '💨',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "grant_speed_boost_3",
            "chance_to_dodge_attacks_20%",
            "temporary_increase_movement_speed_15%"
        ],
        vendor: 'magic_shop',
        shippedBy: 'lightning_bird',
        levelRequirement: 6
    },

    'earth_land_dragon_scale_reading': {
        id: 'earth_land_dragon_scale_reading',
        name: "Dragon Scale Reading - Prophecy of Mishaps",
        description: "Consult with this incredibly grumpy dragon scale! It whispers cryptic warnings and unsettling predictions – mostly about things going terribly wrong. Don’t blame us if it tells you to invest in a very large shield or avoid wearing yellow. This is probably why the dragons are avoiding us.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 8500,
        icon: '🐉',
        stock: 12,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "reveal_hidden_danger_30%",
            "chance_to_receive_prophetic_warning_50%",
            "grant_temporary_advantage_on_perception_checks_10%"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'giant_snail',
        levelRequirement: 8
    },

    'faerun_item_pixie_dust_potion': {
        id: 'faerun_item_pixie_dust_potion',
        name: "Pixie Dust Delight Potion",
        description: "A shimmering, iridescent potion brewed from the finest pixie dust and a surprisingly large quantity of honey. Drink this concoction to become briefly buoyant, perfect for escaping sticky situations or annoying enemies!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '✨',
        stock: 91,
        rarity: 'common',
        stockType: 'limited_daily',
        effects: [
            "grant_levitation (3 rounds)",
            "increase jump height by 5 feet"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'winged_messenger',
        levelRequirement: 1
    },

    'faerun_item_shard_of_zariel': {
        id: 'faerun_item_shard_of_zariel',
        name: "Shard of Zariel's Fury",
        description: "A pulsing, obsidian shard radiating intense heat and a palpable sense of righteous fury. This fragment of the Fallen One is incredibly volatile; handle with extreme caution (and maybe some asbestos gloves). It's rumored to amplify negative emotions!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 120000,
        icon: '🔥',
        stock: 3,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "deal_fire_damage (1d6)",
            "chance to frighten target",
            "increase critical hit chance by 5%",
            "minor curse effect on prolonged use"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'black_hawk_drone',
        levelRequirement: 20
    },

    'grand_country_inverted_apple': {
        id: 'grand_country_inverted_apple',
        name: "The Upside-Down Delight",
        description: "This glistening, purple apple seems to defy all logic. Taking a bite doesn't just nourish you; it briefly alters your perception of gravity! You’ll find yourself floating slightly and able to interact with inverted objects – just like Wario when he eats too many sweet things.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 380,
        icon: '🍎',
        stock: 76,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "temporary floatation (5 seconds)",
            "increased dexterity +1 for 3 seconds",
            "chance to stumble -10%"
        ],
        vendor: 'side_seller',
        shippedBy: 'Wario's Speedy Courier',
        levelRequirement: 2
    },

    'connectopia_chronometric_analyzer': {
        id: 'connectopia_chronometric_analyzer',
        name: "Chronometric Analyzer - Deluxe Model",
        description: "This premium device allows you to briefly observe the flow of time around an object! Perfect for detecting temporal anomalies, identifying weak points in block structures, or just showing off your impressive gadget collection.  It’s slightly prone to exploding if used near unstable blocks – a minor inconvenience, really!",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 18000,
        icon: '⏳',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "allows player to briefly see the past of an object (short duration)",
            "detects temporal anomalies within a small radius",
            "chance to slow down time for one enemy on a successful hit",
            "requires 1 charge per use"
        ],
        vendor: 'block_smith',
        shippedBy: 'time_portal',
        levelRequirement: 12
    },

    'equestria_item_canterlot_royal_seal': {
        id: 'equestria_item_canterlot_royal_seal',
        name: "Canterlot Royal Seal of Harmony",
        description: "A meticulously crafted seal bearing the emblem of Canterlot Castle. Touching this seal will passively increase your resistance to chaos and discord, making you an invaluable asset to any peacekeeping mission – or a surprisingly effective negotiator!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '👑',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grant_chaos_resistance_5",
            "increase_diplomacy_skill_2",
            "chance_to_resolve_conflicts_peacefully"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'royal_carriage',
        levelRequirement: 9
    },

    'equestria_item_starshine_dust': {
        id: 'equestria_item_starshine_dust',
        name: "Starshine Dust of Wishes",
        description: "Collected from fallen stars near the Crystal Empire, this dust carries a faint echo of dreams and desires. Sprinkle it on your weapons to imbue them with a touch of magic – but be warned: wishes have consequences… maybe you'll end up with extra carrots!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '🌟',
        stock: 75,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "chance_to_add_fire_damage_on_hit",
            "chance_to_grant_critical_hit",
            "chance_to_summon_a_friendly_butterfly"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'pony_express',
        levelRequirement: 3
    }
};
