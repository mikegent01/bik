// Shop items file 74
// Generated: 2026-03-22 18:52:50
// Items: 100

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_074 = {
    'leclaire_isle_item_sugar_surge': {
        id: 'leclaire_isle_item_sugar_surge',
        name: "Sugar Surge",
        description: "A potent concoction brewed by the Pastry Palaces’ most eccentric alchemists. This shimmering liquid instantly floods your senses with a euphoric sweetness, temporarily boosting your charisma and granting you a delightful sugar rush.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 4400,
        icon: '🍬',
        stock: 37,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "restores 50 HP",
            "increases charisma by 20 for 6 turns",
            "grants a +1 bonus to persuasion checks"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'Honey Badger Courier',
        levelRequirement: 7
    },

    'leclaire_isle_item_dohk_favor': {
        id: 'leclaire_isle_item_dohk_favor',
        name: "Dohk Favor Token",
        description: "A meticulously crafted token of appreciation from the Dough Folk, awarded for demonstrating exceptional skill in the art of baking – or simply being exceptionally sticky. This token grants access to special discounts and recipes within the Sweet Supplies Guild.",
        category: SHOP_CATEGORIES.FACTION,
        price: 19000,
        icon: '🍪',
        stock: 18,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grants 15% discount at Sweet Supplies Guild",
            "unlocks exclusive pastry recipes",
            "earns 2x reputation with the Dough Folk"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'Rolling Pin Delivery Service',
        levelRequirement: 10
    },

    'leclaire_isle_item_dough_whisperer': {
        id: 'leclaire_isle_item_dough_whisperer',
        name: "Dough Whisperer's Charm",
        description: "A small, intricately carved figurine of a Dough Folk elder. Legend says it allows you to momentarily command the very dough itself – perfect for creating delicious traps or escaping sticky situations! It smells faintly of cinnamon and regret.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 200000,
        icon: '🍪',
        stock: 8,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "control_dough",
            "detect_hidden_ingredients",
            "resistance_to_sticky_traps"
        ],
        vendor: 'dough_depot',
        shippedBy: 'slow_delivery_snail',
        levelRequirement: 15
    },

    'leclaire_isle_item_frosting_phantom': {
        id: 'leclaire_isle_item_frosting_phantom',
        name: "Frosting Phantom's Quill",
        description: "A shimmering quill crafted from solidified frosting, said to be shed by the elusive Frosting Phantoms who haunt the deepest bakeries.  It allows you to write spells of minor illusion and charming sweetness – but beware, prolonged use might turn you into a sugary mess!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 19000,
        icon: '✨',
        stock: 1,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "create_illusion",
            "charm_monster",
            "increase_spellcasting_speed"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'moonlit_delivery_raven',
        levelRequirement: 10
    },

    'pokemon_item_phantom_shift': {
        id: 'pokemon_item_phantom_shift',
        name: "Echoing Phantom Shard",
        description: "This jagged shard pulses with residual energy from battles fought long ago. Holding it allows you to briefly phase through solid objects – perfect for dodging a tricky Pokémon or sneaking into a trainer's secret stash!  Don’t worry, it won’t let you steal their Pokedex… probably.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 19000,
        icon: '👻',
        stock: 7,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "grant_shadow_shift_ability_3_turns",
            "chance_to_evade_attacks_15%",
            "increased_speed_2"
        ],
        vendor: 'pokemart',
        shippedBy: 'Swift Delivery Drone',
        levelRequirement: 9
    },

    'pokemon_item_league_favor': {
        id: 'pokemon_item_league_favor',
        name: "Champion’s Token of Appreciation",
        description: "A gleaming badge awarded by the esteemed Pokémon League. This token isn't just for show – it grants a small bonus to your reputation with the League, and maybe even unlocks some exclusive training opportunities!  It also smells faintly of victory… and slightly burnt pizza.",
        category: SHOP_CATEGORIES.FACTION,
        price: 4500,
        icon: '🏆',
        stock: 15,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "increased_league_reputation_10%",
            "chance_to_receive_trainer_quests_20%",
            "bonus_experience_on_league_battles_5%"
        ],
        vendor: 'league_store',
        shippedBy: 'League Courier',
        levelRequirement: 6
    },

    'pokemon_item_mystic_herb': {
        id: 'pokemon_item_mystic_herb',
        name: "Lunar Bloom Extract",
        description: "Collected only under the light of a full moon from rare, nocturnal Pokémon herbs. This viscous liquid is said to accelerate healing and boost stats – though it might also cause temporary side effects like uncontrollable giggling or an overwhelming urge to chase butterflies!  Wario would love this for his… experiments.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 330,
        icon: '🌿',
        stock: 99,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "heal_60_hp",
            "increase_attack_1",
            "chance_to_remove_status_effect_20%"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Delivery Pigeon',
        levelRequirement: 1
    },

    'middle_earth_item_ring_of_whispering_winds': {
        id: 'middle_earth_item_ring_of_whispering_winds',
        name: "Ring of Whispering Winds",
        description: "This deceptively simple silver band seems to hum with the breath of ancient forests. It grants the wearer advantage on stealth checks within woodland environments and whispers cryptic clues about nearby dangers – mostly about where Wario left his gold, naturally.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 71000,
        icon: '🌬️',
        stock: 5,
        rarity: 'legendary',
        stockType: 'limited_daily',
        effects: [
            "advantage on stealth checks in woodland environments",
            "chance to gain cryptic clues (DM discretion)",
            "increased movement speed in forests (+1)"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_pony',
        levelRequirement: 15
    },

    'middle_earth_item_dwarven_stone_of_persuasion': {
        id: 'middle_earth_item_dwarven_stone_of_persuasion',
        name: "Dwarven Stone of Persuasion",
        description: "A hefty chunk of granite, polished to a surprisingly smooth sheen. Legend says it was carved by a particularly grumpy dwarf who specialized in arguing with goblins – and it seems to work just as well on humans, elves, and even slightly bewildered hobbits.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🗣️',
        stock: 23,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "increased persuasion skill checks (+2)",
            "chance to intimidate weaker foes",
            "advantage on negotiations with merchants"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'rolling_cart',
        levelRequirement: 8
    },

    'middle_earth_item_lore_scroll_of_forgotten_songs': {
        id: 'middle_earth_item_lore_scroll_of_forgotten_songs',
        name: "Lore Scroll of Forgotten Songs",
        description: "This brittle parchment is covered in faded runes and strange musical notations. When deciphered, it reveals haunting melodies that can soothe savage beasts or unlock hidden passages – though some say they mostly just make Wario want to dance.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1100,
        icon: '🎶',
        stock: 8,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "reveals hidden passages related to music",
            "can calm aggressive creatures (DM discretion)",
            "provides inspiration (+1 to ability checks)"
        ],
        vendor: 'shire_shop',
        shippedBy: 'magical_owl',
        levelRequirement: 3
    },

    'mushroom_kingdom_item_sticky_shroom': {
        id: 'mushroom_kingdom_item_sticky_shroom',
        name: "Gooey Growth Goggles",
        description: "These goggles are crafted from the freshest, most vibrantly colored mushrooms! They temporarily grant the wearer a slippery coating, allowing them to slide across surfaces with surprising speed – perfect for escaping grumpy Toads or ambushing unsuspecting enemies. Just try not to get stuck!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 340,
        icon: '🍄',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increased_movement_speed_3",
            "slippery_surface",
            "minor_poison_resistance"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'mushroom_cart',
        levelRequirement: 1
    },

    'mushroom_kingdom_item_warp_berry': {
        id: 'mushroom_kingdom_item_warp_berry',
        name: "Dimensional Dazzle Drops",
        description: "These shimmering berries pulse with unstable energy, capable of briefly ripping a small rift in space-time. Consume one to teleport a short distance – but be warned, the destination is never quite predictable! This could get you out of sticky situations… or into even stickier ones.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1100,
        icon: '✨',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "teleport_short_range",
            "5% chance to inflict confusion",
            "recover_health_small"
        ],
        vendor: 'wario_direct',
        shippedBy: 'rocket_mushroom',
        levelRequirement: 3
    },

    'curiosity_fate_shard': {
        id: 'curiosity_fate_shard',
        name: "Fragment of Twisted Destiny",
        description: "A pulsating shard of solidified fate, cool to the touch but radiating a disturbing energy. Holding it grants fleeting glimpses into possible futures – mostly unpleasant ones involving tentacles and disgruntled goblins. Handle with caution; tampering with fate is rarely beneficial.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1100,
        icon: '🔮',
        stock: 35,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "chance to gain a temporary prophecy (random effect)",
            "small chance of attracting negative spirits",
            "increases divination skill by 2 for 1 hour",
            "provides minor luck bonus"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'shadow_messenger',
        levelRequirement: 3
    },

    'warhammer_iron_grip': {
        id: 'warhammer_iron_grip',
        name: "Iron Grip of the Legionnaire",
        description: "This brutal warhammer is crafted from blackened iron and imbued with the stoicism of countless legionnaires. It’s surprisingly light, yet capable of shattering stone with terrifying force – a tool for relentless, unwavering assault! Wario would be proud (probably).",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 340,
        icon: '🪨',
        stock: 25,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "damage: physical 6d8 + strength modifier",
            "increased armor class",
            "chance to stun on hit",
            "provides minor protection against magical attacks"
        ],
        vendor: 'imperial_armory',
        shippedBy: 'supply_wagon',
        levelRequirement: 2
    },

    'mushroom_kingdom_item_wario_coin_charm': {
        id: 'mushroom_kingdom_item_wario_coin_charm',
        name: "Wario's Lucky Coin Charm",
        description: "A gleaming gold coin, said to be blessed by Wario himself! Rub it thrice and you might just find yourself with a sudden burst of luck - or a really bad case of indigestion.  Don't say I didn’t warn you!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1100,
        icon: '💰',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "small_chance_of_critical_hit",
            "increased_luck",
            "minor_treasure_finds"
        ],
        vendor: 'wario_direct',
        shippedBy: 'warp_pipe',
        levelRequirement: 3
    },

    'mushroom_kingdom_item_royal_potion_of_distortion': {
        id: 'mushroom_kingdom_item_royal_potion_of_distortion',
        name: "Potion of Shifting Realities",
        description: "A swirling, iridescent potion brewed by the Royal Alchemists.  Drink this and briefly warp between dimensions, encountering bizarre creatures and impossible landscapes – just don’t get stuck!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 71000,
        icon: '🌀',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "dimensional_shift",
            "random_monster_encounter",
            "temporary_stat_boost",
            "risk_of_reality_breakdown"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'dragon_delivery',
        levelRequirement: 15
    },

    'animatopia_ritual_mask': {
        id: 'animatopia_ritual_mask',
        name: "Mask of the Lost Howler",
        description: "This unsettling mask was once worn by a shaman during forbidden rituals to commune with the ancient beasts. Prolonged wear may cause disturbing visions and an overwhelming urge to howl at the moon!",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 19000,
        icon: '🎭',
        stock: 15,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "chance_to_fear_enemies",
            "increased_mana_regeneration",
            "temporary_transformation_beast"
        ],
        vendor: 'forest_market',
        shippedBy: 'shadow_owl',
        levelRequirement: 10
    },

    'connectopia_gear_of_the_unyielding': {
        id: 'connectopia_gear_of_the_unyielding',
        name: "Pioneer’s Grit Cog",
        description: "Forged from the toughest block-metal, this cog embodies the spirit of a Connectopia pioneer. It grants resilience against the harsh realities of the frontier and a surprising resistance to despair - perfect for those long nights spent wrestling with stubborn blocks!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 19000,
        icon: '⚙️',
        stock: 18,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increase_armor",
            "resistance_to_fear",
            "chance_to_avoid_collapse"
        ],
        vendor: 'block_smith',
        shippedBy: 'delivery_drone',
        levelRequirement: 10
    },

    'doughnut_hole_quantum_crumb': {
        id: 'doughnut_hole_quantum_crumb',
        name: "Singularity Snack",
        description: "These shimmering crumbs seem to defy the laws of space and time! Each bite offers a momentary distortion, briefly increasing your movement speed or allowing you to phase through thin walls – though be warned, prolonged consumption can lead to existential dread.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 19000,
        icon: '✨',
        stock: 42,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increase movement speed by 20% for 10 seconds",
            "chance to phase through solid objects (15%)",
            "minor disorientation effect (5% chance of a failed skill check)"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'gravity_parcel',
        levelRequirement: 8
    },

    'doughnut_hole_chronal_gauntlet': {
        id: 'doughnut_hole_chronal_gauntlet',
        name: "The Time-Twisted Grip",
        description: "Forged from solidified temporal eddies, this gauntlet allows the wearer to briefly manipulate localized time around their attacks. It's a bit jittery, and occasionally makes your punches disappear in a puff of glitter, but when it works… BOOM!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200000,
        icon: '⏳',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "chance to slow enemy movement speed by 30% on hit (20%)",
            "chance to briefly rewind target's last action (5%)",
            "increased critical hit chance by 10%"
        ],
        vendor: 'void_vendor',
        shippedBy: 'dimensional_rift',
        levelRequirement: 20
    },

    'mushroom_kingdom_item_wario_wrench': {
        id: 'mushroom_kingdom_item_wario_wrench',
        name: "Wario's Precision Wrench",
        description: "Forged from solidified coin-dust and imbued with Wario’s chaotic energy, this wrench can fix anything… or break it spectacularly. Use with caution (and a healthy dose of greed!).",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 19000,
        icon: '🔧',
        stock: 18,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increased_repair_skill",
            "chance_to_cause_explosions",
            "adds_strength_2"
        ],
        vendor: 'wario_direct',
        shippedBy: 'coin_delivery',
        levelRequirement: 10
    },

    'mushroom_kingdom_item_portal_tuning': {
        id: 'mushroom_kingdom_item_portal_tuning',
        name: "Dimensional Harmonizer",
        description: "This intricately crafted device allows the user to briefly stabilize unstable portals, preventing catastrophic reality shifts. It’s a surprisingly useful service for anyone dealing with interdimensional travel… or just misplaced Toads.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 200000,
        icon: '🌀',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "stabilize_portal",
            "reduce_portal_instability",
            "chance_to_teleport_player_safely"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'dimensional_express',
        levelRequirement: 20
    },

    'animatopia_stonehide_shield': {
        id: 'animatopia_stonehide_shield',
        name: "Rumble Stone Shield",
        description: "Forged by the ancient Stonewall Clan, this shield pulses with a faint earthy vibration. It's surprisingly light for its durability and can absorb a shocking amount of punishment – just don’t try to hug it!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5900,
        icon: '🛡️',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "increases armor class by 3",
            "chance to deflect projectiles (20%)",
            "absorbs 50% of damage from blunt attacks for 1 turn"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'giant_beetle',
        levelRequirement: 8
    },

    'animatopia_memory_petal': {
        id: 'animatopia_memory_petal',
        name: "Whisperwind's Remembrance",
        description: "These iridescent petals are said to hold fragments of lost memories from the Great Spirit Tree. When consumed, they grant a fleeting glimpse into the past - useful for deciphering ancient riddles or just reminiscing about that time you ate too many berry pies!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 19000,
        icon: '🌸',
        stock: 23,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grants a single 'memory' vision - reveals hidden clues or weaknesses (once per day)",
            "temporarily increases intelligence by 5 for 2 turns",
            "chance to gain inspiration (10%)"
        ],
        vendor: 'forest_market',
        shippedBy: 'delivery_drone',
        levelRequirement: 11
    },

    'curiosity_chaos_shard': {
        id: 'curiosity_chaos_shard',
        name: "Fragment of Unraveling Chaos",
        description: "This pulsating shard radiates with raw, untamed chaos. Holding it for too long might cause you to spontaneously speak in rhyming couplets or attempt to juggle flaming skulls – a truly delightful experience! It's probably best not to stare at it directly.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 340,
        icon: '💥',
        stock: 95,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to inflict confusion on hit (5%)",
            "increases movement speed by 1 for 2 turns",
            "adds +1 to persuasion checks"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Rattlesnake Express',
        levelRequirement: 3
    },

    'equestria_item_apple_pie_recipe': {
        id: 'equestria_item_apple_pie_recipe',
        name: "Grandma Sweetie Pie's Secret Recipe",
        description: "Legend says this parchment was passed down through generations of pony bakers, holding the key to creating the most delicious apple pie in all of Equestria.  Be warned - attempting to replicate it without a genuine pony’s blessing may result in an explosion of cinnamon and regret! It smells amazing.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1100,
        icon: '🍎',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grant_cooking_skill_level_3",
            "chance_to_create_apple_pie"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Carriage',
        levelRequirement: 2
    },

    'equestria_item_star_dust_amulet': {
        id: 'equestria_item_star_dust_amulet',
        name: "Amulet of Celestial Dreams",
        description: "Forged from solidified starlight, this amulet whispers promises of prophetic dreams and fleeting glimpses into the future. Wario would totally try to use it to find hidden treasure (probably just more sugar). It feels cool to the touch.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 19000,
        icon: '✨',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance_to_see_future_15%",
            "grant_night_vision",
            "boost_intelligence_5"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Royal Messenger',
        levelRequirement: 9
    },

    'almost_edge_item_chronometric_shard': {
        id: 'almost_edge_item_chronometric_shard',
        name: "Echoing Void Fragment",
        description: "This pulsating shard whispers with the remnants of forgotten timelines, briefly accelerating or decelerating time within a small radius. It’s said to be a piece broken from the very fabric of non-existence – handle with caution, or you might find yourself experiencing breakfast twice!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 210000,
        icon: '⏳',
        stock: 5,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "time_dilation_10%",
            "temporal_distortion_radius_3",
            "chance_to_rewind_last_action_5%"
        ],
        vendor: 'void_merchant',
        shippedBy: 'dimensional_rift',
        levelRequirement: 20
    },

    'almost_edge_item_desiccated_siren_song': {
        id: 'almost_edge_item_desiccated_siren_song',
        name: "Murmur of the Absent Coast",
        description: "A perfectly preserved, though unsettlingly dry, song of a siren. Holding it induces an overwhelming sense of longing for a place you've never been and likely never will be – perfect for distracting guards or confusing enemies with existential dread.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1100,
        icon: '🎶',
        stock: 91,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "confusion_chance_20%",
            "reduce_armor_3",
            "illusionary_voice_effect"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'carrier_pigeon',
        levelRequirement: 3
    },

    'almost_edge_item_static_resonance_bracelet': {
        id: 'almost_edge_item_static_resonance_bracelet',
        name: "The Boundary Tether",
        description: "This bracelet hums with a strange, unsettling energy. It protects the wearer from minor dimensional shifts and offers a slight advantage against creatures that exist between realities – mostly because Wario bought it to keep his lunch from vanishing.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '⚡',
        stock: 33,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "resistance_to_void_damage_50%",
            "chance_to_reflect_magic_10%",
            "minor_dimensional_stability"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'gravitational_wormhole',
        levelRequirement: 8
    },

    'leclaire_isle_croissant_of_gust': {
        id: 'leclaire_isle_croissant_of_gust',
        name: "Croissant of Gust",
        description: "This flaky pastry practically vibrates with contained energy! Biting into it releases a surprisingly potent gust of wind, perfect for clearing obstacles or startling enemies. Wario says 'It's like baking a hurricane...deliciously!'",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 4500,
        icon: '💨',
        stock: 67,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "deals 3-5 slashing damage to a single target",
            "creates a small gust of wind (1d4 movement speed reduction for one turn)",
            "chance to cause a sticky mess on the target"
        ],
        vendor: 'dough_depot',
        shippedBy: 'swift_delivery',
        levelRequirement: 6
    },

    'leclaire_isle_forbidden_doughnut_of_confusion': {
        id: 'leclaire_isle_forbidden_doughnut_of_confusion',
        name: "Forbidden Doughnut of Confusion",
        description: "Forged in the deepest recesses of Pastry Palace, this dark, swirling doughnut whispers promises of sweet oblivion. Consumption causes a temporary state of confusion – enemies might attack their allies or simply forget what they were doing! Wario's warning: 'Don’t eat too many...or you'll start craving sprinkles!'",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 19000,
        icon: '😵‍💫',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "target suffers a -2 penalty to attack rolls for 3 turns",
            "target has a 50% chance to perform an unintended action",
            "chance to inflict 'sugar rush' (temporary speed boost, followed by fatigue)"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'night_only',
        levelRequirement: 12
    },

    'leclaire_isle_golden_rollingpin_of_creation': {
        id: 'leclaire_isle_golden_rollingpin_of_creation',
        name: "Golden Rolling Pin of Creation",
        description: "A seemingly ordinary rolling pin crafted from solidified sugar and moonlight. When wielded, it allows the user to briefly manipulate dough – creating small pastries or even minor terrain features! Wario thinks this is 'the ultimate baking tool...and a surprisingly good weapon!'",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 71000,
        icon: '🥠',
        stock: 34,
        rarity: 'legendary',
        stockType: 'delivery_only',
        effects: [
            "allows the user to create a small pastry (healing 1d6 HP)",
            "can reshape terrain within a 5-foot radius (creating ramps or obstacles)",
            "chance to inflict 'sticky fingers' (immobilize target for one turn)"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'royal_carriage',
        levelRequirement: 18
    },

    'warhammer_godly_stormbringer': {
        id: 'warhammer_godly_stormbringer',
        name: "Stormbringer's Fury",
        description: "Forged in the heart of a dying god, this colossal warhammer crackles with raw elemental energy. It channels lightning and storms, capable of obliterating entire armies – but its immense power demands absolute control… or it’ll destroy you!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200000,
        icon: '⚡️',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "damage: 12-16 bludgeoning and lightning",
            "chance to summon a lightning bolt on hit",
            "increases strength by 30%",
            "grants immunity to thunder damage"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Celestial Express',
        levelRequirement: 45
    },

    'earth_land_frostbite_shard': {
        id: 'earth_land_frostbite_shard',
        name: "Frozen Whisper Shard",
        description: "A jagged fragment ripped from the Wall of Eternal Frost, this shard hums with chilling magic. Holding it grants a temporary resistance to cold and whispers secrets of forgotten ice giants – if you can understand them, that is!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 4500,
        icon: '❄️',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grant_resistance_cold_v2",
            "chance_to_freeze_target",
            "imbue_with_chill"
        ],
        vendor: 'magic_shop',
        shippedBy: 'ice_golem',
        levelRequirement: 6
    },

    'earth_land_godly_chronos_orb': {
        id: 'earth_land_godly_chronos_orb',
        name: "The Echoing Chronos Orb",
        description: "Legends say this orb was a fragment of time itself, shattered during the Great Dragon Wars. Wario’s been tinkering with it for weeks, and now he claims it lets him... *slightly* speed up his item creation process? Don't ask.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 1200000,
        icon: '⏳',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "grant_temporal_shift_small",
            "chance_to_rewind_time",
            "increase_critical_hit_chance",
            "boost_item_creation_speed"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'dimensional_portal',
        levelRequirement: 30
    },

    'faerun_item_potion_of_minor_illusion': {
        id: 'faerun_item_potion_of_minor_illusion',
        name: "Potion of Minor Illusion",
        description: "Brewed by a surprisingly talented gnome illusionist, this shimmering potion grants you the ability to conjure simple illusions for a short time! Perfect for distracting guards or creating a false treasure hoard - Wario would use it to hide all his coins!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 4500,
        icon: '✨',
        stock: 38,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "create_small_illusion_for_30_seconds",
            "illusion_can_mimic_sound_or_shape"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'flying_carpet',
        levelRequirement: 6
    },

    'faerun_item_scroll_of_divination': {
        id: 'faerun_item_scroll_of_divination',
        name: "Scroll of Divination - A Wario Prediction!",
        description: "This ancient scroll, purportedly penned by a particularly insightful oracle, offers a glimpse into the immediate future. Don't expect happy news – Wario’s always predicting he’ll find more treasure! It provides a cryptic hint to your next adventure.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 19000,
        icon: '🔮',
        stock: 2,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "reveal_a_hidden_location_within_50ft",
            "grant_a_single_hint_regarding_an_upcoming_challenge",
            "chance_to_reveal_a_trap"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'magic_messenger_pigeon',
        levelRequirement: 10
    },

    'connectopia_rusty_gearbox': {
        id: 'connectopia_rusty_gearbox',
        name: "Wario's Scrap Fortress Heart",
        description: "This pulsating gearbox, salvaged from the ruins of a long-lost automated fortress, seems to hum with chaotic energy! It’s surprisingly effective at boosting your mining speed and occasionally explodes with a shower of sparks – Wario would love it.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 19000,
        icon: '⚙️',
        stock: 45,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increases mining speed by 30%",
            "chance to trigger a small explosion (10%)",
            "provides minor repair buff to tools"
        ],
        vendor: 'block_smith',
        shippedBy: 'express_delivery',
        levelRequirement: 9
    },

    'connectopia_godly_resonance_shard': {
        id: 'connectopia_godly_resonance_shard',
        name: "The Architect’s Echo",
        description: "A fragment of solidified resonance from Connectopia's ancient block-laying machines, this shard vibrates with untold potential. Wario suspects it might be able to build entire castles... or just make things explode spectacularly.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200000,
        icon: '✨',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "chance to instantly repair equipment (20%)",
            "grants a temporary boost to crafting speed (50%)",
            "provides minor resistance to all damage types"
        ],
        vendor: 'craft_corner',
        shippedBy: 'dragon_flight',
        levelRequirement: 30
    },

    'midlands_item_shadow_scroll': {
        id: 'midlands_item_shadow_scroll',
        name: "Fragment of Whispered Secrets",
        description: "This brittle parchment contains cryptic prophecies and half-remembered rumors – likely gathered from spies, assassins, and disgruntled nobles. Decoding its messages could lead to great rewards… or a swift and unpleasant demise! Wario would totally try to steal it.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4500,
        icon: '📜',
        stock: 15,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "chance to reveal hidden passages (5%)",
            "provides +3 to investigation checks when deciphering ancient texts"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'delivery_pony',
        levelRequirement: 8
    },

    'almost_edge_item_shimmering_crumb': {
        id: 'almost_edge_item_shimmering_crumb',
        name: "Shimmering Crumb of Uncertainty",
        description: "A tiny fragment of the doughnut itself, radiating a disconcerting light. Consuming this crumb grants a fleeting glimpse into the void, possibly revealing hidden paths or attracting unwanted attention from entities beyond comprehension. It's delightfully unsettling!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 340,
        icon: '✨',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Heal 15 HP",
            "Chance to gain a minor illusion (visual only)",
            "Increase movement speed by 2 for 10 seconds"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Dimensional Slipstream',
        levelRequirement: 1
    },

    'almost_edge_item_void_echo_charm': {
        id: 'almost_edge_item_void_echo_charm',
        name: "Void Echo Charm – Resonance of the Rim",
        description: "This unsettling charm vibrates with a faint, echoing whisper. Wearing it allows you to briefly perceive echoes of events that occurred near the edge, potentially uncovering clues or revealing hidden dangers...or just making your head hurt.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🔊',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Chance to detect hidden passages (5%)",
            "Passive: Increases perception by 1 for 30 seconds",
            "Allows the wearer to cast ‘Minor Illusion’ once per day"
        ],
        vendor: 'void_merchant',
        shippedBy: 'Gravity Well Delivery',
        levelRequirement: 6
    },

    'almost_edge_item_luminescent_dust': {
        id: 'almost_edge_item_luminescent_dust',
        name: "Luminescent Dust of the Lost Cycle",
        description: "Collected from the remnants of forgotten geometries, this shimmering dust glows with a sickly light. When scattered, it creates temporary illusions and reveals faint traces of otherworldly energies, perfect for confusing enemies or charting unknown territories...or just making your room look cool.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 19000,
        icon: '💫',
        stock: 15,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Creates a small illusion (visible to enemies) for 6 seconds",
            "Reveals invisible or ethereal creatures within a 10ft radius for 30 seconds.",
            "Provides resistance to psychic damage."
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Temporal Courier',
        levelRequirement: 9
    },

    'grand_country_godly_resonance_stone': {
        id: 'grand_country_godly_resonance_stone',
        name: "The Layer's Lament",
        description: "Forged from solidified dimensional tears, this stone resonates with the very fabric of 'The Grand Country'. Holding it grants limited control over localized gravity fields and a startling ability to see through multiple layers of reality – perfect for finding hidden treasure or escaping awkward conversations. Wario doesn’t care about conversation.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 1200000,
        icon: '✨',
        stock: 3,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "powerful_gravity_manipulation",
            "dimensional_perception",
            "increased_mana_regeneration"
        ],
        vendor: 'layer_market',
        shippedBy: 'temporal_drone',
        levelRequirement: 35
    },

    'earth_land_guild_token_of_valor': {
        id: 'earth_land_guild_token_of_valor',
        name: "Token of Valor - Stoneguard Guild",
        description: "Officially stamped by the esteemed Stoneguard Guild, this token represents a pledge of loyalty and a hefty discount on… well, *everything* they sell. Rumor has it, it also attracts particularly grumpy goblins who just want to argue about taxes.  Wario wouldn't be caught dead with one!",
        category: SHOP_CATEGORIES.FACTION,
        price: 1100,
        icon: '🛡️',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "bonus reputation with Stoneguard Guild (+10)",
            "discount on all Stoneguard Guild purchases (15%)",
            "chance to intimidate weaker enemies (3%)"
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'messenger_rat',
        levelRequirement: 4
    },

    'earth_land_chrono_shard_fragment': {
        id: 'earth_land_chrono_shard_fragment',
        name: "Chrono Shard Fragment – Echoes of Time",
        description: "This pulsating fragment is said to be a piece broken off from a shattered temporal artifact. Holding it brings unsettling glimpses of the past and future… mostly involving Wario eating all the cake.  Mess with time at your own peril!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 19000,
        icon: '⏳',
        stock: 8,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "chance to rewind time (10%) – limited use",
            "increased intelligence (5%)",
            "minor chance of causing temporal paradoxes (small damage over time)"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'dimensional_portal',
        levelRequirement: 10
    },

    'equestria_item_rainbow_hoof_amulet': {
        id: 'equestria_item_rainbow_hoof_amulet',
        name: "Rainbow Hoof Amulet",
        description: "This shimmering amulet is said to be crafted from a genuine rainbow hoof! Wearing it grants you minor luck and a surprising resistance to negativity – perfect for dealing with grumpy ponies. It’s also remarkably comfortable, even for a party of adventurers.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🌈',
        stock: 5,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grant +3 luck",
            "resistance to fear effects",
            "chance to inspire allies"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'pony express',
        levelRequirement: 6
    },

    'equestria_item_starfall_shard': {
        id: 'equestria_item_starfall_shard',
        name: "Starfall Fragment",
        description: "A piece of a fallen star, imbued with the celestial energy of Equestria's night sky. Holding this shard allows you to briefly channel starlight, creating dazzling light beams and potentially disrupting dark magic – though it’s surprisingly fragile and Wario once tried to use it as a hammer.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200000,
        icon: '🌟',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "deal 5d6 radiant damage",
            "chance to dispel dark magic effects",
            "temporary increased mana regeneration"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'magic portal',
        levelRequirement: 20
    },

    'curiosity_chronometer_of_misfortune': {
        id: 'curiosity_chronometer_of_misfortune',
        name: "Chronometer of Misfortune",
        description: "A bizarre pocket watch crafted from tarnished brass and bone. When wound, it subtly alters the flow of time around you, creating momentary distortions – perhaps a delayed attack or a sudden burst of speed!  Don't stare into its gears for too long, though...it has a penchant for attracting bad luck.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1100,
        icon: '🕰️',
        stock: 3,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "chance_to_reverse_target_turn",
            "small_chance_of_temporary_debuffs",
            "increases_perception_stat_temporarily"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Night Raven Delivery',
        levelRequirement: 5
    },

    'warhammer_voidbringer_x': {
        id: 'warhammer_voidbringer_x',
        name: "Voidbringer’s Embrace",
        description: "Forged in the heart of a collapsed star, this hammer seems to absorb light itself. Holding it grants you resistance to necrotic damage and allows you to unleash devastating attacks that pull your enemies into the abyss!  Beware, prolonged use may drain your very essence.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350000,
        icon: '🌌',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "deals_4d6_ necrotic_damage",
            "grants_resistance_to_necrotic_damage",
            "chance_to_teleport_target_a_short_distance",
            "causes_fear_effect_on_nearby_enemies"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Dimensional Rift Express',
        levelRequirement: 20
    },

    'leclaire_isle_donut_of_speed': {
        id: 'leclaire_isle_donut_of_speed',
        name: "Donut of Speed",
        description: "This enchanted donut, glazed with lightning-infused sugar, grants a burst of incredible velocity! It's perfect for getting out of sticky situations or just enjoying a ridiculously fast pastry. Warning: May cause uncontrollable spinning.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 340,
        icon: '🍩',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grant_speed_buff_2",
            "duration_5s",
            "chance_to_cause_confusion"
        ],
        vendor: 'dough_depot',
        shippedBy: 'swift_snail',
        levelRequirement: 3
    },

    'leclaire_isle_crusty_armor': {
        id: 'leclaire_isle_crusty_armor',
        name: "Crusty Armor of the Baker",
        description: "Forged from hardened dough and imbued with a touch of baking magic, this armor surprisingly provides protection. It’s delightfully crumbly when struck, but strangely resilient to blunt force (mostly).  Don't expect it to stop arrows though!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🛡️',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grant_armor_5",
            "resistance_to_bludgeoning",
            "chance_to_cause_sticky_situation"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'rolling_cart',
        levelRequirement: 6
    },

    'doughnut_hole_anomaly_slice': {
        id: 'doughnut_hole_anomaly_slice',
        name: "Anomaly Slice",
        description: "A disturbingly perfect slice of what appears to be… nothing. Consumption creates a localized distortion, briefly altering the laws of physics around you – expect things to shift, blur, and possibly turn inside out! It’s delicious...and terrifying.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 19000,
        icon: '👾',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "randomly alter target's stats (positive or negative)",
            "chance to inflict confusion",
            "small chance of temporary transformation (random effect)"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Dark Matter Drone',
        levelRequirement: 12
    },

    'almost_edge_item_chronal_boots': {
        id: 'almost_edge_item_chronal_boots',
        name: "Chronal Boots of the Fractured Step",
        description: "These unsettling boots appear to shift slightly out of sync with the present moment. Wearing them grants a momentary distortion in time, allowing for quick dashes and dodging attacks – but be warned; prolonged use can fray your connection to reality.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 20000,
        icon: '⏱️',
        stock: 7,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increased movement speed by 25% for 3 seconds",
            "chance to rewind time by 1 second on successful dodge (10%)",
            "reduces damage taken from attacks by 10%",
            "Chance to trigger a temporal anomaly, briefly teleporting the wearer to another location"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'gravity well courier',
        levelRequirement: 12
    },

    'almost_edge_item_memory_lantern': {
        id: 'almost_edge_item_memory_lantern',
        name: "Lantern of Lost Recollections",
        description: "This tarnished lantern emits a soft, ethereal glow that seems to pull fragments of forgotten memories from the surrounding void. Focusing on an object with the lantern reveals echoes of its past – though these visions can be disorienting and emotionally taxing.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 340,
        icon: '💡',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to reveal hidden clues or lore about the environment (5%)",
            "provides dim light in dark areas",
            "can be used to briefly stun creatures with unsettling visions"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'dimensional echo',
        levelRequirement: 3
    },

    'leclaire_isle_dohk_favor': {
        id: 'leclaire_isle_dohk_favor',
        name: "Dohk Favor Token - 'The Perfect Tart'",
        description: "A beautifully crafted token representing the Dough Folk's highest honor: crafting a perfectly balanced tart. Presenting this token to a respected member of the Dohk Council might earn you their gratitude and access to valuable resources or information – but be warned, their tastes are *extremely* particular!",
        category: SHOP_CATEGORIES.FACTION,
        price: 20000,
        icon: '🍩',
        stock: 18,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grant_dohk_favor (allows access to unique quests and discounts)",
            "increased_reputation_with_dough_folk (+5 reputation)",
            "chance_to_receive_rare_pastry_ingredient"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'honeycomb_cart',
        levelRequirement: 10
    },

    'middle_earth_rusty_dwarven_shovel': {
        id: 'middle_earth_rusty_dwarven_shovel',
        name: "Grub's Grumbling Shovel",
        description: "This shovel looks like it's seen better days… and many, *many* meals. It’s crafted from stubborn dwarven steel, surprisingly sharp for its age, and guaranteed to unearth even the most stubbornly buried treasure (or just a lot of dirt). Wario recommends using it to dig up extra-large mushrooms!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1100,
        icon: '⛏️',
        stock: 91,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased mining speed +25%",
            "chance to find extra resources when digging",
            "disarm traps (small chance)",
            "slightly reduces dirt pile size"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'rolling_barrel',
        levelRequirement: 3
    },

    'middle_earth_scroll_of_lost_lore': {
        id: 'middle_earth_scroll_of_lost_lore',
        name: "Fragment of the Silmaril Prophecy",
        description: "This brittle scroll contains a cryptic fragment of an ancient prophecy, rumored to be connected to the creation of the Rings of Power. It’s written in a language only partially understood – mostly just 'shiny' and 'danger,' which is helpful for no one!  Don't get eaten by a Balrog while deciphering it.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4500,
        icon: '📜',
        stock: 23,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "chance to gain a random minor prophecy effect (e.g., +1 Luck, short-term invisibility)",
            "increases intelligence by 5 points for 1 hour",
            "reveals hidden passages with higher perception checks",
            "can be sold to an eccentric scholar for a small profit"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_express',
        levelRequirement: 7
    },

    'midlands_item_battleworn_plate': {
        id: 'midlands_item_battleworn_plate',
        name: "Shard of the Fallen Emperor’s Guard",
        description: "Forged from the remains of a noble knight’s armor, this plate boasts dents and scratches that whisper tales of desperate battles and questionable decisions. It'll protect you... sort of.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 20000,
        icon: '🛡️',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Grants +3 Armor Class",
            "Reduces damage taken from blunt attacks by 2",
            "Chance to trigger 'Inspire Courage' on allies when taking damage"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'Imperial Post',
        levelRequirement: 9
    },

    'midlands_item_warrio_s_lucky_coin': {
        id: 'midlands_item_warrio_s_lucky_coin',
        name: "Wario's Lost Fortune Coin",
        description: "A tarnished gold coin, rumored to have been dropped by Wario himself during a particularly chaotic treasure hunt. It doesn’t actually grant luck (Wario knows that), but it does seem to attract minor inconveniences for your enemies - like tripping or dropping their weapons!  Don't get your hopes up; it mostly just feels warm.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 20000,
        icon: '💰',
        stock: 7,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance to inflict ‘trip’ status on nearby enemies (disadvantage on attack rolls)",
            "small chance to steal a minor item from an enemy's inventory",
            "boosts charisma by 1 for 2 turns"
        ],
        vendor: 'fractured_forge',
        shippedBy: 'roller',
        levelRequirement: 9
    },

    'leclaire_isle_dough_folk_favor': {
        id: 'leclaire_isle_dough_folk_favor',
        name: "The Baker's Blessing",
        description: "A small, intricately carved gingerbread figurine presented by the Dough Folk as a sign of goodwill. It’s said to subtly influence the outcome of baking-related endeavors – perhaps granting you an extra sprinkle or a perfectly risen loaf.",
        category: SHOP_CATEGORIES.FACTION,
        price: 20000,
        icon: '🥷',
        stock: 18,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance: +5% when crafting baked goods",
            "diplomacy: +2 with Dough Folk",
            "minor_luck: small chance to find extra ingredients"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'messenger_bird',
        levelRequirement: 10
    },

    'doughnut_hole_gravitic_glove': {
        id: 'doughnut_hole_gravitic_glove',
        name: "Gravitic Glove",
        description: "This oddly-shaped glove hums with unstable gravity. It allows the wearer to briefly manipulate their own weight, leaping across chasms or momentarily grounding yourself in chaotic environments - just don't drop it!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 20000,
        icon: '🌌',
        stock: 12,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Increased jump height by 50%",
            "Chance to briefly reduce enemy movement speed",
            "Self-levitation for 2 seconds (once per combat)"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Warped Courier',
        levelRequirement: 10
    },

    'doughnut_hole_echoing_portal_shard': {
        id: 'doughnut_hole_echoing_portal_shard',
        name: "Echoing Portal Shard",
        description: "A fractured piece of a miniature, unstable portal. Holding it allows you to briefly glimpse into distorted reflections of the Doughnut Hole's past... or maybe just a really weird donut.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4500,
        icon: '🌀',
        stock: 3,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "Chance to reveal hidden passages (5% chance)",
            "Brief vision of past event - potentially misleading",
            "Minor magical resistance"
        ],
        vendor: 'center_seller',
        shippedBy: 'Gravity Well Delivery',
        levelRequirement: 8
    },

    'almost_edge_item_singing_shard': {
        id: 'almost_edge_item_singing_shard',
        name: "Resonance of the Void",
        description: "This jagged shard hums with an unsettling melody, a fragment of the void itself. Holding it close induces vivid hallucinations of endless corridors and impossible geometries – perfect for confusing your enemies or just staring into existential dread.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4500,
        icon: '🎵',
        stock: 5,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance to inflict confusion for 3 turns",
            "small chance to gain temporary madness (roll d6)",
            "provides a faint aura of dread (reduces enemy attack rolls by 10%)"
        ],
        vendor: 'void_merchant',
        shippedBy: 'Dimensional Rift Courier',
        levelRequirement: 7
    },

    'almost_edge_item_chronal_gauntlet': {
        id: 'almost_edge_item_chronal_gauntlet',
        name: "The Time-Slip Grip",
        description: "Forged from solidified temporal anomalies, this gauntlet allows the wearer to briefly manipulate the flow of time around them – though mostly in unpredictable ways.  It's rumored to be a favored tool of obsessive cartographers and particularly grumpy gnomes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 71000,
        icon: '⏳',
        stock: 2,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "once per day: rewind time by 3 seconds (target can still be hit)",
            "chance to briefly accelerate movement speed (+50%)",
            "reduces damage taken from area-of-effect attacks by 25%"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Phase Shifter Express',
        levelRequirement: 14
    },

    'almost_edge_item_memory_rune': {
        id: 'almost_edge_item_memory_rune',
        name: "Echo of Oblivion",
        description: "This small, pulsating rune seems to absorb memories and emotions. When consumed, it provides a fleeting glimpse into forgotten realities—a disconcerting but potentially useful experience.  Don't worry if you forget what happened afterwards… that’s the point!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 340,
        icon: '🧠',
        stock: 98,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "restores 1d4 HP",
            "grants advantage on one intelligence check",
            "causes mild disorientation for 1 round"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Spectral Delivery Drone',
        levelRequirement: 2
    },

    'earth_land_frostbite_potion': {
        id: 'earth_land_frostbite_potion',
        name: "Absolute Zero Elixir",
        description: "This shimmering blue potion instantly freezes your target, encasing them in a block of solid ice! Perfect for temporarily immobilizing a pesky goblin or creating an impromptu ice sculpture. Just don’t drink it yourself – you'll be a very chilly party.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1100,
        icon: '🧊',
        stock: 75,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "deals 1d6 cold damage over 3 turns",
            "target is frozen for 2 rounds",
            "chance to inflict frostbite (10%)"
        ],
        vendor: 'magic_shop',
        shippedBy: 'flying_carpet',
        levelRequirement: 5
    },

    'earth_land_godly_echoing_amulet': {
        id: 'earth_land_godly_echoing_amulet',
        name: "The Resonant Shard of Silence",
        description: "This amulet pulses with ancient magic, capable of absorbing and redirecting sound. Wearing it grants the wearer uncanny stealth abilities and a disconcerting ability to mimic voices – use this power wisely, or you might end up arguing with yourself!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200000,
        icon: '🤫',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "grants +5 to stealth checks",
            "can mimic a single voice for 30 seconds",
            "silences all sounds within a 10-foot radius once per day",
            "chance to confuse enemies (15%)"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'dimensional_portal',
        levelRequirement: 25
    },

    'middle_earth_item_whispering_shard': {
        id: 'middle_earth_item_whispering_shard',
        name: "Whispering Shard of Durin's Folk",
        description: "A fragment of ancient stone, pulsating with a faint, rhythmic hum. Legend says it contains the last echoes of the dwarves’ songs and can briefly reveal hidden paths or forgotten riddles – though it mostly just makes you feel slightly itchy.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '💎',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to reveal hidden passage",
            "minor luck boost (1d4)",
            "causes slight itching for 1 round"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_horse',
        levelRequirement: 3
    },

    'middle_earth_item_shire_healing_potion': {
        id: 'middle_earth_item_shire_healing_potion',
        name: "Shire Hearthbrew Potion",
        description: "A thick, sweet concoction brewed with honey from Bag End and herbs gathered from the rolling hills. This isn’t your fancy Elven healing magic; it's good old-fashioned Shire comfort in a bottle – guaranteed to make you feel better… or at least slightly less grumpy.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1100,
        icon: '⚕️',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "heals 15 HP",
            "restores 5 stamina points",
            "slightly improves mood (advantage on charisma checks)"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_cart',
        levelRequirement: 5
    },

    'middle_earth_item_mithril_resonance_tuning': {
        id: 'middle_earth_item_mithril_resonance_tuning',
        name: "Mithril Resonance Tuning Device",
        description: "A meticulously crafted device of mithril and enchanted gears, designed to amplify the inherent vibrations of precious metals. Wario would absolutely love this for… reasons. It's rumored to enhance weapon damage with rare metals – though it mostly just makes a really annoying buzzing sound.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 4500,
        icon: '⚙️',
        stock: 12,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "increases weapon damage with mithril by 5d6 (1 round)",
            "chance to trigger a small magical resonance event (random effect – may be beneficial or detrimental)",
            "requires attunement"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'dragon_hawk',
        levelRequirement: 7
    },

    'animatopia_primal_massage': {
        id: 'animatopia_primal_massage',
        name: "Primal Restoration Ritual",
        description: "Let the rhythmic chanting and expert paws of a Forest Shaman soothe your weary muscles! This service will mend minor wounds, remove exhaustion, and fill you with renewed vigor – just don’t ask what ingredients they use…it probably involves grubs.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1100,
        icon: '💆‍♀️',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "heals 2d6 HP",
            "removes one level of exhaustion",
            "restores 10 stamina points"
        ],
        vendor: 'forest_market',
        shippedBy: 'giant_snail',
        levelRequirement: 5
    },

    'animatopia_stone_of_the_beast': {
        id: 'animatopia_stone_of_the_beast',
        name: "Stone of the Beast’s Fury",
        description: "Carved from a solidified roar, this obsidian shard pulses with raw primal energy. When activated, you can unleash a short burst of uncontrolled rage, dealing 1d6 piercing damage to all creatures within 5 feet – use it wisely or Wario will steal your lunch!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🔥',
        stock: 12,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "deals 1d6 piercing damage to creatures within 5ft",
            "chance of self-damage (10%)",
            "increases strength by 2 for 3 rounds"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'dire_wolf',
        levelRequirement: 8
    },

    'leclaire_isle_item_sticky_scone': {
        id: 'leclaire_isle_item_sticky_scone',
        name: "Glazed Goblin Scones",
        description: "These deceptively delicious scones are crafted with enchanted wheat and a pinch of mischievous pixie dust. They provide a surprisingly potent burst of energy, perfect for distracting grumpy trolls or fueling an afternoon of pastry-based scheming!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1100,
        icon: '🍪',
        stock: 78,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "restores 20 health",
            "grants +1 to charisma for 3 rounds",
            "chance to cause a minor distraction (15%)"
        ],
        vendor: 'dough_depot',
        shippedBy: 'rolling_tray',
        levelRequirement: 2
    },

    'leclaire_isle_item_dwarf_dough_alchemy': {
        id: 'leclaire_isle_item_dwarf_dough_alchemy',
        name: "Dough Whisperer's Consultation",
        description: "A Dwarf alchemist specializes in the art of altering dough to have magical properties. They can infuse your pastries with temporary buffs, or even create a miniature Dough Golem companion – just be careful what you bake!",
        category: SHOP_CATEGORIES.SERVICES,
        price: 4500,
        icon: '🧪',
        stock: 3,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grants a single use buff (e.g., +2 to strength for 1 hour)",
            "chance to create a small, temporary Dough Golem companion (50%)"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'delivery_drone',
        levelRequirement: 6
    },

    'leclaire_isle_item_royal_crumb_armor': {
        id: 'leclaire_isle_item_royal_crumb_armor',
        name: "Crusty Champion's Vestments",
        description: "Forged from the discarded crumbs of a royal feast and imbued with ancient baking magic, this vest offers surprising protection.  It’s surprisingly sturdy... for crumbs! Don’t expect to block dragon fire – but it *will* absorb a decent amount of goblin spit.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 20000,
        icon: '🛡️',
        stock: 1,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "grants +3 armor class",
            "chance to deflect projectiles (20%)",
            "provides minor resistance to poison damage"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'magical_cart',
        levelRequirement: 9
    },

    'equestria_item_shadow_hoof': {
        id: 'equestria_item_shadow_hoof',
        name: "Shadow Hoof of Nocturne",
        description: "A disturbingly smooth hoof crafted from solidified darkness. Touching it whispers promises of power, but prolonged exposure leads to unsettling dreams and a slight decrease in optimism – Wario would love this!",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 4500,
        icon: '🌑',
        stock: 8,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "grants +15 temporary shadow resistance",
            "chance to inflict 'fear' on nearby enemies",
            "slows movement speed by 10%"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'dark_messenger',
        levelRequirement: 8
    },

    'animatopia_shadow_charm': {
        id: 'animatopia_shadow_charm',
        name: "Whisper of the Night Shade",
        description: "A dark, obsidian charm pulsing with faint energy. Locals whisper that it was crafted by a disgraced Shademaster who sought to commune with the spirits of the forest’s darkest corners.  Don't stare at it for too long, or you might start seeing things... like Wario.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4500,
        icon: '🌑',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases stealth by 20%",
            "chance to cast 'minor shadow' illusion (10%)",
            "detects nearby undead creatures"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'silent_owl',
        levelRequirement: 7
    },

    'animatopia_forbidden_skull': {
        id: 'animatopia_forbidden_skull',
        name: "The Skull of Silent Echoes",
        description: "This skull, pulsing with a sickly green light, was recovered from the ruins of an ancient Animatopian temple. Touching it grants a fleeting glimpse into forgotten rituals... but also attracts the attention of shadowy entities and possibly, Wario's hunger.  Don’t say I didn’t warn you!",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 4500,
        icon: '💀',
        stock: 15,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "chance to inflict madness (3%)",
            "temporary boost to necrotic damage",
            "vulnerable to radiant damage"
        ],
        vendor: 'forest_market',
        shippedBy: 'raven_messenger',
        levelRequirement: 12
    },

    'earth_land_whispering_herb_potion': {
        id: 'earth_land_whispering_herb_potion',
        name: "Whispering Herb Potion",
        description: "Brewed by eccentric herbalists, this potion grants a fleeting connection to the spirits of the land. It tastes faintly of moss and secrets - don't be alarmed if it whispers advice (mostly about finding lost socks).",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1100,
        icon: '🌿',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "restores 20 health",
            "grants advantage on perception checks for 1 hour",
            "provides temporary inspiration (advantage on one attack roll)"
        ],
        vendor: 'magic_shop',
        shippedBy: 'flying carpet',
        levelRequirement: 5
    },

    'kivotos_item_student_uniform_of_focus': {
        id: 'kivotos_item_student_uniform_of_focus',
        name: "The Concentrated Canvas",
        description: "This seemingly ordinary student uniform grants the wearer a surprising focus. It enhances concentration and mental acuity, allowing for quicker spellcasting and improved critical hit chance – just don’t try to wear it to a party; it feels terribly stuffy!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1100,
        icon: '🎓',
        stock: 25,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increases spellcasting speed by 10%",
            "chance to critically hit with spells increased by 5%"
        ],
        vendor: 'student_store',
        shippedBy: 'standard_mail',
        levelRequirement: 3
    },

    'kivotos_item_harmonic_resonator': {
        id: 'kivotos_item_harmonic_resonator',
        name: "The Discordant Delight",
        description: "A complex device designed to generate precisely calibrated sound waves, this resonator is a premium service item. Skilled technicians can use it to disrupt enemy formations and inflict debilitating status effects, but be warned – improper operation can cause hilarious chaos!",
        category: SHOP_CATEGORIES.SERVICES,
        price: 4500,
        icon: '🎶',
        stock: 1,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "chance to inflict ‘confusion’ status on enemies",
            "reduces enemy armor class by 5% for 2 rounds",
            "creates a small area of silence, muffling enemy spells"
        ],
        vendor: 'club_supply',
        shippedBy: 'delivery_only',
        levelRequirement: 8
    },

    'pokemon_item_pr_echoing_badge': {
        id: 'pokemon_item_pr_echoing_badge',
        name: "Echoing Badge Fragment",
        description: "A shimmering shard recovered from the ruins of an ancient Pokémon League gym. Holding it to your ear, you can faintly hear the cheers and roars of legendary battles – a potent motivator for any aspiring trainer! It seems to subtly boost your Pokemon's attack stats when near battle fields.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4500,
        icon: '✨',
        stock: 45,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "boosts attack by 5 for one turn near battlefields",
            "chance to increase pokemon’s speed by 10%",
            "minor luck boost (increased critical hit chance)"
        ],
        vendor: 'pokemart',
        shippedBy: 'Pokémail',
        levelRequirement: 6
    },

    'pokemon_item_forbidden_phantom_orb': {
        id: 'pokemon_item_forbidden_phantom_orb',
        name: "Phantom Orb of the Void",
        description: "This obsidian sphere pulsates with a chilling energy, rumored to be fragments of defeated Shadow Pokémon. Touching it grants temporary access to the ethereal plane, but beware – prolonged contact can slowly drain your willpower and attract unwanted attention from spectral entities… Wario recommends wearing gloves!",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 20000,
        icon: '👻',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "chance to inflict ‘fear’ status on a single target",
            "temporary invisibility (5 turns)",
            "increased resistance to dark-type attacks"
        ],
        vendor: 'league_store',
        shippedBy: 'Dark Messenger',
        levelRequirement: 12
    },

    'pokemon_item_pr_aurora_wing': {
        id: 'pokemon_item_pr_aurora_wing',
        name: "Aurora Wing of Solace",
        description: "A single, iridescent wing plucked from a legendary Pokémon during a rare celestial alignment. This remarkable artifact radiates warmth and tranquility, capable of soothing agitated creatures and bolstering the spirits of weary trainers. Legend says it was gifted by Arceus himself - or maybe Wario just really liked shiny things!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 72000,
        icon: '🌈',
        stock: 7,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "restores 50 HP to a single Pokémon",
            "chance to heal allies with each successful attack",
            "increases chance of evasion by 15%"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Sky Courier',
        levelRequirement: 16
    },

    'leclaire_isle_item_honeycomb_crust': {
        id: 'leclaire_isle_item_honeycomb_crust',
        name: "Honeycomb Crust Shield",
        description: "This shield isn’t made of steel, but hardened honeycomb – surprisingly durable and smelling faintly of lavender. It shimmers with trapped sunlight, offering a small bonus to defense against radiant damage…and attracting bees.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 20000,
        icon: '🛡️',
        stock: 12,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "armor_class +2",
            "resistance_to_radiant",
            "chance_to_summon_bee_swarm (small)"
        ],
        vendor: 'dough_depot',
        shippedBy: 'Rolling Cart',
        levelRequirement: 9
    },

    'leclaire_isle_item_dwarf_crumb_charm': {
        id: 'leclaire_isle_item_dwarf_crumb_charm',
        name: "Dwarf Crumb Charm of Fortitude",
        description: "A tiny, perfectly formed crumb from the legendary Doughfather’s first batch of sourdough. This charm is said to grant resilience to those who value a good crust... and it smells AMAZING.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4500,
        icon: '🍪',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "minor_healing (1d6)",
            "advantage_on_saving_throws_against_fear"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'Magic Post',
        levelRequirement: 5
    },

    'leclaire_isle_item_royal_frosting_scroll': {
        id: 'leclaire_isle_item_royal_frosting_scroll',
        name: "Royal Frosting Scroll of Sweet Deception",
        description: "An ancient scroll detailing the precise recipes for creating illusions of delectable treats. It's rumored to be favored by the Dough Folk nobility and can create a minor illusion effect, though it tastes awful if consumed.",
        category: SHOP_CATEGORIES.FACTION,
        price: 72000,
        icon: '📜',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "create_illusion (small target, 1 round)",
            "grant_advantage_on_deception_checks (related to food)"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'Dragon Courier',
        levelRequirement: 16
    },

    'middle_earth_item_starshard_amulet': {
        id: 'middle_earth_item_starshard_amulet',
        name: "The Amulet of Echoing Light",
        description: "This shimmering amulet, crafted from a fallen star shard, pulses with residual light. It’s rumored to amplify the wearer's courage and subtly echo their thoughts – perfect for confusing goblins or impressing overly-serious elves! Don’t worry if it occasionally whispers about Wario’s questionable snack choices.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '✨',
        stock: 5,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased_charisma",
            "resistance_to_fear",
            "chance_to_disorient_enemies"
        ],
        vendor: 'elven_market',
        shippedBy: 'swiftwind_messenger',
        levelRequirement: 8
    },

    'middle_earth_item_mythic_ringwraith_fragment': {
        id: 'middle_earth_item_mythic_ringwraith_fragment',
        name: "The Echo of Torment",
        description: "A chilling shard imbued with the lingering darkness of a Ringwraith. Holding it evokes flashes of despair and madness, amplifying your hatred towards those who would disturb the peace... or just annoy Wario. Beware its influence— prolonged exposure could lead to regrettable decisions and an overwhelming urge to collect shiny objects.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 210000,
        icon: '💀',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "damage_over_time",
            "chance_to_fear_enemies",
            "increased_critical_hit_damage",
            "slow_enemy_movement"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'dragon_delivery',
        levelRequirement: 18
    },

    'animatopia_stomp_berries': {
        id: 'animatopia_stomp_berries',
        name: "Primal Stompers",
        description: "These vibrant red berries, harvested from the heart of the Whispering Woods, grant a burst of raw energy! Eating a handful immediately grants temporary strength and speed - perfect for charging into battle or wrestling a particularly feisty boar!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🍓',
        stock: 45,
        rarity: 'common',
        stockType: 'limited_daily',
        effects: [
            "temporary strength +3 for 3 rounds",
            "speed increased by 10 feet for 2 rounds",
            "restores 1d6 health"
        ],
        vendor: 'forest_market',
        shippedBy: 'Giant Beetle Courier',
        levelRequirement: 1
    },

    'animatopia_spirit_stone': {
        id: 'animatopia_spirit_stone',
        name: "Stone of the Shifting Beast",
        description: "A smooth, obsidian-like stone pulsating with faint energy. Holding this stone allows you to briefly mimic the abilities of nearby animals - a fleeting moment of claw attacks or a burst of animalistic speed! Be warned, overuse can lead to unsettling visions...",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4500,
        icon: '🐾',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "chance to mimic animal abilities (random)",
            "advantage on perception checks for one round",
            "increased resistance to fear effects"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'Shadow Lynx',
        levelRequirement: 8
    },

    'equestria_item_rainbow_hoof_charm': {
        id: 'equestria_item_rainbow_hoof_charm',
        name: "Rainbow Hoof Charm",
        description: "This shimmering charm is said to be crafted from a genuine rainbow hoof – probably not, but it *looks* amazing! Wearing this will subtly boost your luck and make you slightly less prone to tripping over things... or maybe just attract butterflies.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '🌈',
        stock: 67,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "luck +10%",
            "chance to avoid falling -5%"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Pegasus Post',
        levelRequirement: 1
    },

    'equestria_item_harmony_resonance_tuning': {
        id: 'equestria_item_harmony_resonance_tuning',
        name: "Harmony Resonance Tuning",
        description: "Feeling a bit out of sync with the world? This meticulously crafted tuning device uses sonic vibrations to align your spirit with Equestria's inherent harmony. It’s basically a fancy noise maker that *might* make you less grumpy – or at least give you something to do.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 4500,
        icon: '🎶',
        stock: 34,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "restores 50 HP",
            "increases charisma +2",
            "chance to pacify hostile creatures -10%"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Messenger',
        levelRequirement: 6
    },

    'doughnut_hole_void_compass': {
        id: 'doughnut_hole_void_compass',
        name: "Void Compass of the Center",
        description: "This unsettling compass doesn't point north, or south, or even up! Instead, it relentlessly spins toward The Fated Place – a chilling reminder of where you *don’t* want to go. It grants glimpses into potential futures, though they are rarely helpful and often involve pastries.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 210000,
        icon: '🧭',
        stock: 12,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance_to_see_future_event",
            "minor_protection_against_void_magic",
            "reduce_sanity_1_per_turn"
        ],
        vendor: 'center_seller',
        shippedBy: 'temporal_echo',
        levelRequirement: 18
    },

    'doughnut_hole_gravitational_wrench': {
        id: 'doughnut_hole_gravitational_wrench',
        name: "Gravitational Wrench of Subverted Force",
        description: "This wrench defies all logic! It allows the user to briefly manipulate local gravity fields, allowing them to lift heavy objects or launch themselves across rooms with surprising accuracy. Be careful - overusing it can cause a localized spacetime anomaly…and maybe a donut explosion.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1500,
        icon: '🔧',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increase_strength_5",
            "chance_to_disarm_opponent",
            "short_range_gravity_push"
        ],
        vendor: 'void_vendor',
        shippedBy: 'quantum_tunnel',
        levelRequirement: 8
    },

    'middle_earth_rune_of_silence': {
        id: 'middle_earth_rune_of_silence',
        name: "Whispering Stone Shard",
        description: "This strangely smooth shard pulses with faint magic, rumored to have been chipped from a fallen Silmaril. Holding it allows you to momentarily silence your surroundings - perfect for sneaking past grumpy dwarves or eavesdropping on Elven gossip... though don't expect any useful information!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1100,
        icon: '🤫',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "silence_aura_15s",
            "minor_stealth_boost",
            "chance_to_detect_hidden_objects"
        ],
        vendor: 'elven_market',
        shippedBy: 'Winged Courier',
        levelRequirement: 6
    },

    'middle_earth_map_of_lost_shire': {
        id: 'middle_earth_map_of_lost_shire',
        name: "Old Map of Buckland",
        description: "This brittle parchment depicts the lost region of Buckland, detailing hidden pathways and forgotten settlements. It's rumored to hold clues to a long-forgotten treasure – or just lead you into a bog full of grumpy badgers!  Don’t blame us if you get hopelessly lost.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1100,
        icon: '🗺️',
        stock: 7,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "chance_to_find_hidden_paths",
            "minor_navigation_bonus",
            "reveals_nearby_points_of_interest"
        ],
        vendor: 'shire_shop',
        shippedBy: 'Hobbit Post',
        levelRequirement: 5
    },

    'doughnut_hole_gravitational_boots': {
        id: 'doughnut_hole_gravitational_boots',
        name: "Boot of Minor Inversion",
        description: "These boots were crafted by a disgruntled void-dweller who just wanted to mess with gravity. They’ll let you briefly alter your personal gravitational field, causing hilarious (and potentially disastrous) moments!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5900,
        icon: '👟',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Allows the wearer to briefly reverse gravity (3 times per day)",
            "Increases jump height by 50%",
            "Chance to cause nearby objects to float upwards."
        ],
        vendor: 'center_seller',
        shippedBy: 'Spatial Distortion Packet',
        levelRequirement: 6
    }
};
