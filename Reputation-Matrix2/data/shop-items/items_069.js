// Shop items file 69
// Generated: 2026-03-22 18:17:13
// Items: 100

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_069 = {
    'pokemon_item_league_badge_valor': {
        id: 'pokemon_item_league_badge_valor',
        name: "Valor Badge of Bravery",
        description: "Awarded to trainers who've proven their courage against the toughest Pokemon! This gleaming badge isn’t just a pretty piece of metal; it slightly increases your evasion and grants a bonus to willpower checks when facing intimidating foes. Plus, it looks *fantastic* on your tunic – Wario would be jealous!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🏆',
        stock: 20,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "evasion_increase_10%",
            "willpower_bonus_5",
            "chance_to_paralyze_on_critical_hit_5%"
        ],
        vendor: 'league_store',
        shippedBy: 'delivery_only',
        levelRequirement: 9
    },

    'pokemon_item_safari_research_note': {
        id: 'pokemon_item_safari_research_note',
        name: "Safari Research Note - Dusk Mane",
        description: "A meticulously documented observation from the Safari Zone’s top researchers. This note details the rare nocturnal behavior of a Dusk Mane Pokémon, offering insights into its attack patterns and preferred habitats. It might just be worth a fortune to a collector – or a very confused trainer!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 600,
        icon: '📝',
        stock: 89,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance_to_find_rare_pokemon_increased_5%",
            "knowledge_of_duskmane_pokemon_behavior"
        ],
        vendor: 'safari_shop',
        shippedBy: 'delivery_only',
        levelRequirement: 3
    },

    'almost_edge_item_chronal_shard': {
        id: 'almost_edge_item_chronal_shard',
        name: "Fragment of the Unwound Moment",
        description: "This pulsating shard seems to exist slightly out of sync with reality, emitting a faint hum that whispers of forgotten timelines. Holding it grants a momentary glimpse into potential futures – though focusing too long might leave you permanently lost in the echoes of what *could* have been.  It’s surprisingly good for making toast, if you're into that sort of thing.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '⏳',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "grant temporary foresight (5% chance of critical success on next skill check)",
            "slightly reduces sanity loss from horrifying visions",
            "chance to create a minor temporal distortion (10%)"
        ],
        vendor: 'void_merchant',
        shippedBy: 'dimensional rift',
        levelRequirement: 5
    },

    'almost_edge_item_echoing_gauntlet': {
        id: 'almost_edge_item_echoing_gauntlet',
        name: "The Gauntlet of Lost Voices",
        description: "Forged from solidified void-matter, this gauntlet allows the wearer to briefly channel the whispers of those who’ve fallen off the edge – a cacophony of regret, fear, and utterly bizarre requests.  Don’t be surprised if it starts suggesting you rearrange your inventory… repeatedly. It’s also surprisingly warm.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🧤',
        stock: 17,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "increases damage dealt by 10%",
            "provides resistance to fear effects",
            "chance to inflict a ‘phantom echo’ debuff on enemies (5%) – causing them to briefly attack themselves."
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'gravitational anomaly',
        levelRequirement: 12
    },

    'almost_edge_item_void_navigator': {
        id: 'almost_edge_item_void_navigator',
        name: "The Cartographer's Lament",
        description: "A beautifully crafted, albeit unsettling, sextant that points not to stars, but to the places where reality frays. The device allows for brief traversal through unstable dimensional pathways – perfect for escaping awkward conversations or finding the *perfect* donut.  Warning: prolonged use may result in existential dread and a craving for jelly.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 28000,
        icon: '🧭',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "allows the user to briefly teleport a short distance (50ft)",
            "provides resistance to void-based attacks",
            "chance to reveal hidden passages or secret areas",
            "increases movement speed by 10% for 60 seconds"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'temporal courier',
        levelRequirement: 10
    },

    'animatopia_totem_of_the_hunt': {
        id: 'animatopia_totem_of_the_hunt',
        name: "Totem of the Hunt",
        description: "Carved from ancient bone and imbued with primal magic, this totem whispers secrets to those who listen. It dramatically improves tracking skills, but its constant murmuring might drive a sane person utterly bonkers – Wario recommends wearing earplugs!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8750,
        icon: '🐾',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases tracking skill by 3 levels",
            "chance to detect hidden paths (20%)",
            "causes a constant whispering sound (can be ignored with a DC 15 Wisdom saving throw)"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'giant_worm',
        levelRequirement: 8
    },

    'midlands_item_chronarium_shard': {
        id: 'midlands_item_chronarium_shard',
        name: "Echo of the Shattered Time",
        description: "A fragment pulled from a collapsed temporal nexus, this shard shimmers with fractured timelines. Holding it grants fleeting glimpses of potential futures—mostly involving Wario eating everything, but sometimes… not.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 23000,
        icon: '⏳',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "once per day, allows the user to gain a temporary bonus to one stat (chosen at random)",
            "chance to trigger a minor temporal distortion (roll on a table of unpredictable effects – could be beneficial or disastrous!)",
            "requires attunement"
        ],
        vendor: 'fractured_forge',
        shippedBy: 'dimensional_portal',
        levelRequirement: 15
    },

    'internet_godly_reality_flux': {
        id: 'internet_godly_reality_flux',
        name: "The Source Code of Chaos",
        description: "A pulsating, self-aware artifact salvaged from the heart of a corrupted server farm. This item allows you to subtly manipulate reality itself – but be warned! The universe doesn't appreciate being messed with... and Wario *loves* chaos!",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 750000,
        icon: '🌀',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "chance to teleport to a random location within 60ft",
            "can instantly repair any damaged equipment",
            "grants immunity to all mind-altering effects",
            "Occasionally causes the user's appearance to randomly change (hair, skin tone, etc.)"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Quantum Entanglement',
        levelRequirement: 35
    },

    'teyvat_item_ember_of_stormwind': {
        id: 'teyvat_item_ember_of_stormwind',
        name: "Stormwind's Whisper",
        description: "This tiny, pulsating ember seems to contain the very breath of Barbatos! Holding it grants a surge of wind magic, perfect for dashing across chasms or unleashing a miniature whirlwind – just don’t let it blow away your snacks.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 6500,
        icon: '💨',
        stock: 78,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grant_wind_magic_10",
            "dash_speed_boost_25",
            "chance_to_push_back_enemy"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'winged_sprite',
        levelRequirement: 7
    },

    'teyvat_item_lion_heart_of_xia': {
        id: 'teyvat_item_lion_heart_of_xia',
        name: "Xia's Steadfast Resolve",
        description: "Forged in the depths of the Stone Sea, this crimson stone pulses with the unwavering spirit of Xia. Touching it grants a temporary boost to defense and resilience – great for weathering those pesky elemental storms or stubbornly refusing to give up on a challenging quest.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '❤️',
        stock: 32,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increase_defense_50",
            "resistance_to_fire_damage_75",
            "chance_to_block_attack"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'cargo_ship',
        levelRequirement: 12
    },

    'teyvat_item_serpent_scale_of_zan': {
        id: 'teyvat_item_serpent_scale_of_zan',
        name: "Zan's Everlasting Gaze",
        description: "A shimmering, iridescent scale taken directly from a Serpent of the Deep. This artifact grants temporary night vision and a chilling aura that unnerves weaker foes – perfect for sneaking around or giving a truly unsettling performance.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350000,
        icon: '🐍',
        stock: 1,
        rarity: 'mythic',
        stockType: 'godly',
        effects: [
            "night_vision",
            "chance_to_frighten_enemy",
            "increase_perception_50",
            "slow_movement_speed_of_enemies"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'phantom_ship',
        levelRequirement: 23
    },

    'mushroom_kingdom_item_coin_of_luck': {
        id: 'mushroom_kingdom_item_coin_of_luck',
        name: "The Lucky Coin of Wario's Fortune",
        description: "Legend says this coin was once held by Wario himself! It has a habit of appearing when you desperately need a boost, but be warned – it also seems to attract the attention of greedy gophers. Keep it close, and don’t stare at it for too long...",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '💰',
        stock: 34,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance_to_find_gold",
            "boosts_luck_stat",
            "attracts_gopher_enemies"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'giant_snail',
        levelRequirement: 7
    },

    'mushroom_kingdom_item_pipe_of_transit': {
        id: 'mushroom_kingdom_item_pipe_of_transit',
        name: "The Pipe of Questionable Destinations",
        description: "This ornate pipe doesn't quite work as expected. With a twist and a puff, you might end up in a forgotten laboratory filled with robotic mushrooms or perhaps directly into Wario’s personal vault! Use with extreme caution (and a healthy dose of luck).",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🕳️',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "teleport_to_random_location",
            "chance_of_encountering_wario",
            "temporary_speed_boost",
            "minor_confusion_effect"
        ],
        vendor: 'wario_direct',
        shippedBy: 'rocket_mushroom',
        levelRequirement: 10
    },

    'leclaire_isle_item_forbidden_frosting': {
        id: 'leclaire_isle_item_forbidden_frosting',
        name: "The Nightmare Frosting",
        description: "A viscous, obsidian-black frosting that whispers of forgotten dreams and unsettling pastries. Consuming this frosting grants temporary but potent abilities... at a terrible cost to your sanity! Don’t say I didn't warn you.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 18000,
        icon: '🖤',
        stock: 5,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "temporary insanity (stacks up to 3)",
            "increased attack damage (+20%)",
            "chance to inflict confusion on enemies"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'shadowy_messenger',
        levelRequirement: 15
    },

    'leclaire_isle_item_godly_gingerbread_weapon': {
        id: 'leclaire_isle_item_godly_gingerbread_weapon',
        name: "The Sugar Serpent Blade",
        description: "Forged from crystallized sugar and imbued with the essence of a thousand gingerbread men, this weapon pulses with sweet energy. Its edge can slice through steel like butter, but beware – prolonged use may induce an uncontrollable craving for sweets! Wario’s drooling already.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 850000,
        icon: '🍬',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "high damage (20-30)",
            "chance to inflict 'sugar rush' on enemies (causes speed boost and disorientation)",
            "passive healing (1 HP per second)"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'celestial_carriage',
        levelRequirement: 35
    },

    'mushroom_kingdom_item_gloomshroom': {
        id: 'mushroom_kingdom_item_gloomshroom',
        name: "Gloomshroom's Lament",
        description: "This pulsing, violet mushroom was harvested from the deepest tunnels of Wario’s underground complex. It emits a faint sorrowful hum and seems to absorb light, offering temporary but potent darkness vision - perfect for sneaking past grumpy Goombas or escaping a particularly nasty Pink Shell ambush!  Don't worry if it makes you feel slightly melancholic; that's just the mushroom's vibe.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '🌑',
        stock: 67,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grants temporary darkness vision (15 seconds)",
            "minor chance to inflict 'sadness' status effect (reduces attack power)",
            "restores 5 HP"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'snail_post',
        levelRequirement: 3
    },

    'mushroom_kingdom_item_coin_amplifier': {
        id: 'mushroom_kingdom_item_coin_amplifier',
        name: "Amplified Coin of Prosperity",
        description: "Legend says these coins, forged in the heart of Wario's vault, possess an unnatural attraction to wealth. When held aloft and chanted over with a suitably greedy mantra, they exponentially increase your luck – though be warned, it might attract unwanted attention from those who appreciate shiny things! This particular one feels particularly warm...",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '💰',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased chance to find gold and valuables (20%)",
            "chance to double loot drops from chests",
            "small boost to charisma during negotiations"
        ],
        vendor: 'wario_direct',
        shippedBy: 'mushroom_cart',
        levelRequirement: 7
    },

    'mushroom_kingdom_item_koopa_alliance_badge': {
        id: 'mushroom_kingdom_item_koopa_alliance_badge',
        name: "Koopa Alliance Recognition Token",
        description: "This polished shell fragment bears the insignia of the Koopa Alliance – a surprisingly well-organized (and slightly terrifying) group dedicated to maintaining order in the Mushroom Kingdom. Displaying this badge earns you respect... and possibly unwanted requests involving territorial disputes or retrieving stolen items from Wario.  Don't let it intimidate you, though!",
        category: SHOP_CATEGORIES.FACTION,
        price: 3500,
        icon: '🐢',
        stock: 23,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "grants access to Koopa Alliance quests",
            "provides a small discount at Koopa shops",
            "increases reputation with the Koopa faction"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'turtle_delivery',
        levelRequirement: 10
    },

    'grand_country_crumb_of_height': {
        id: 'grand_country_crumb_of_height',
        name: "Crumb of Height",
        description: "This shimmering fragment fell from the impossible cliffs of the Grand Country – a tiny piece of solidified gravity! It grants a momentary boost to climbing speed and a disconcerting lightness of foot, perfect for those tricky vertical ascents.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 450,
        icon: '🧗‍♀️',
        stock: 72,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increased climbing speed for 10 seconds",
            "small chance to reduce fall damage"
        ],
        vendor: 'side_seller',
        shippedBy: 'winged_beetle',
        levelRequirement: 3
    },

    'grand_country_gravitic_boots': {
        id: 'grand_country_gravitic_boots',
        name: "Gravitic Boots of the Shifting Stone",
        description: "Crafted from petrified moss and solidified echoes, these boots allow you to subtly manipulate your personal gravity. They’re a bit wobbly, prone to unexpected bounces, but undeniably effective for navigating the treacherous layered landscapes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '👢',
        stock: 15,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased jump height",
            "slow fall speed",
            "chance to briefly float upwards"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'rock_slide',
        levelRequirement: 7
    },

    'doughnut_hole_gravitic_boots': {
        id: 'doughnut_hole_gravitic_boots',
        name: "Null-Grip Boots of Descent",
        description: "These boots, forged in the unstable center, allow you to briefly defy gravity. Just watch out for those sudden shifts—stepping off a ledge while wearing these is a *delicious* mistake!  They're surprisingly comfortable, too.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🚀',
        stock: 32,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Jump height increased by 50%",
            "Chance to negate fall damage",
            "Slow movement speed for 1 turn after jumping"
        ],
        vendor: 'center_seller',
        shippedBy: 'Void Express (Delayed Delivery)',
        levelRequirement: 10
    },

    'doughnut_hole_mythic_singularity_orb': {
        id: 'doughnut_hole_mythic_singularity_orb',
        name: "The Heart's Echo",
        description: "A pulsing orb, saturated with the chaotic energy of The Doughnut Hole’s center. Touching it creates miniature gravitational wells, and prolonged contact may cause existential dread…or a sudden craving for sprinkles.  Handle with extreme caution (and maybe a helmet).",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 120000,
        icon: '🌀',
        stock: 5,
        rarity: 'mythic',
        stockType: 'back_order',
        effects: [
            "Creates a small localized gravity field (damages enemies within 5 feet)",
            "Chance to teleport the user a short distance (10-20 feet)",
            "Increases magic power by 30%",
            "Causes vivid hallucinations - roll a d6, on a 4+ you are stunned for one turn"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Temporal Paradox Delivery Service',
        levelRequirement: 22
    },

    'the_edge_chronal_repair': {
        id: 'the_edge_chronal_repair',
        name: "Chronal Repair - Temporal Stitching",
        description: "A shimmering, iridescent thread woven with echoes of time. This service gently nudges the flow of time around a damaged item, briefly restoring it to its prior state – perfect for quick fixes and desperate situations! Just don't ask how Wario got this.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1200,
        icon: '⏳',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "repair_equipment_small",
            "chance_to_nullify_curse",
            "grant_temporary_buff_to_weapon_durability"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'Temporal Messenger',
        levelRequirement: 10
    },

    'internet_packet_bomb': {
        id: 'internet_packet_bomb',
        name: "Viral Payload",
        description: "This shimmering orb pulses with chaotic data! Unleash it to spread a temporary status effect – think 'Confusion' or 'Fear' – across nearby enemies. Just be careful not to overload your own system with too much information!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '💥',
        stock: 35,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "apply_effect:confusion (1 turn)",
            "chance_to_apply_effect:fear (2 turns)"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Drone Delivery',
        levelRequirement: 4
    },

    'internet_meme_injector': {
        id: 'internet_meme_injector',
        name: "Distraction Drive",
        description: "A small device that emits a targeted wave of viral memes, momentarily stunning and disorienting your foes! It’s surprisingly effective against slow-witted opponents... or anyone who just really likes cat videos. Don't ask us how it works.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '😹',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "stun (1 turn)",
            "reduce_accuracy (5%)"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Packet Post',
        levelRequirement: 2
    },

    'middle_earth_rune_shard': {
        id: 'middle_earth_rune_shard',
        name: "Echoing Rune Shard",
        description: "This oddly warm shard pulses with residual magic, likely from a forgotten Elven ritual. Holding it close allows you to briefly hear whispers of the past – mostly complaints about bad weather and overly polite dwarves.  It’s surprisingly good for distracting grumpy goblins.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1800,
        icon: '🔮',
        stock: 42,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "grant_temporary_insight",
            "chance_to_confuse_enemy",
            "small_healing_effect"
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_pony',
        levelRequirement: 6
    },

    'middle_earth_stonecarver_service': {
        id: 'middle_earth_stonecarver_service',
        name: "Ancient Stone Smoothing",
        description: "Old Borin's Stonecarving service offers a unique touch – he will meticulously smooth and polish any stone item, adding to its durability and aesthetic appeal. He claims it’s an ancient Dwarven technique involving chanting and the occasional sacrifice of small pebbles… don’t ask.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 750,
        icon: '🔨',
        stock: 18,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "increase_item_durability",
            "chance_to_reduce_repair_cost"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'rock_golem',
        levelRequirement: 3
    },

    'middle_earth_ringwraith_scale': {
        id: 'middle_earth_ringwraith_scale',
        name: "Fragment of a Wraith's Shadow",
        description: "A shimmering scale, undeniably belonging to a Ringwraith. It radiates an aura of chilling dread and seems to absorb nearby light - probably because it’s just really, *really* cold. Wario recommends using it as a paperweight… or maybe not.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '💀',
        stock: 7,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "chance_to_inflict_fear",
            "resistance_to_cold_damage",
            "small_shadow_attack_damage"
        ],
        vendor: 'shire_shop',
        shippedBy: 'dark_horse',
        levelRequirement: 10
    },

    'kivotos_item_halo_of_harmonious_discord': {
        id: 'kivotos_item_halo_of_harmonious_discord',
        name: "The Cacophony's Embrace",
        description: "A bizarre halo crafted from solidified noise and shimmering light. Wearing this will cause a strange mix of tranquility and utter chaos within you – it might help with meditation, or just make your allies question their sanity! This curious artifact appears to amplify existing magical energies in unpredictable ways.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🎶',
        stock: 37,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "randomly_boosts_magic_damage",
            "chance_to_silence_an_enemy",
            "causes_a_small_area_of_disruption_around_the_wearer (minor chance to disrupt spellcasting)"
        ],
        vendor: 'club_supply',
        shippedBy: 'Express Courier',
        levelRequirement: 8
    },

    'kivotos_item_scroll_of_accidental_transfiguration': {
        id: 'kivotos_item_scroll_of_accidental_transfiguration',
        name: "The Blobber's Blessing",
        description: "This ancient scroll, inexplicably covered in slime, contains a single spell – one that *attempts* to transform objects.  The results are rarely what were intended, but they’re always… memorable. Use at your own risk (and with plenty of cleaning supplies).",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3500,
        icon: '🧪',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "chance_to_transform_target_into_a_random_object (low chance)",
            "chance_to_cause_the_target_to_explode in a shower of goo",
            "small healing effect if successful transformation is achieved"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Magical Delivery Portal',
        levelRequirement: 10
    },

    'pokemon_item_ancient_pokedex': {
        id: 'pokemon_item_ancient_pokedex',
        name: "Chronometric Pokedex",
        description: "This peculiar device hums with temporal energy, allowing you to briefly rewind a single battle action! It’s surprisingly effective against tricky trainers and overly-aggressive Pokémon – just don't use it to undo that embarrassing faceplant. This thing is absolutely *smashing*!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '⏳',
        stock: 5,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "rewind_battle_action (1 use/day)",
            "increased_critical_chance (5%)",
            "temporary boost to attack power (10)"
        ],
        vendor: 'pokemart',
        shippedBy: 'delivery_only',
        levelRequirement: 9
    },

    'pokemon_item_trainer_badge_echo': {
        id: 'pokemon_item_trainer_badge_echo',
        name: "Badge of Resonant Echoes",
        description: "A shimmering badge that seems to vibrate with the memories of countless battles. Wearing this grants you a faint echo of your opponent’s moves, allowing you to anticipate their strategies – although it also makes you crave sugar donuts.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '🗣️',
        stock: 25,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "chance to predict opponent's move (15%)",
            "increased status effect resistance (10%)",
            "boost to intuition"
        ],
        vendor: 'safari_shop',
        shippedBy: 'delivery_only',
        levelRequirement: 3
    },

    'pokemon_item_elite_trainer_contract': {
        id: 'pokemon_item_elite_trainer_contract',
        name: "Contract of Legendary Training",
        description: "A magically sealed contract from an Elite Trainer, promising a significant XP boost and access to rare Pokémon encounters. Wario insists it’s just a fancy way to pay someone to fight for him...which is perfectly acceptable.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 6000,
        icon: '🤝',
        stock: 3,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "grant 5000 XP upon completion of encounter",
            "chance to receive a rare Pokémon (10%)",
            "temporary increase in experience gain (20%)"
        ],
        vendor: 'league_store',
        shippedBy: 'delivery_only',
        levelRequirement: 6
    },

    'kivotos_item_sugar_shock_pills': {
        id: 'kivotos_item_sugar_shock_pills',
        name: "Hyper-Concentrated Sugar Rush",
        description: "These tiny, shimmering pills are guaranteed to unleash a torrent of chaotic energy! Each pill delivers a brief burst of incredible speed and damage output, but be warned – the effects quickly wear off leaving you with an intense craving for sweets. Perfect for surprising your enemies or winning that last-second race!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🍬',
        stock: 98,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increase_attack_damage_10%",
            "speed_boost_3s",
            "chance_to_stun_5%"
        ],
        vendor: 'student_store',
        shippedBy: 'Standard Mail',
        levelRequirement: 1
    },

    'pokemon_item_shadow_ball_charm': {
        id: 'pokemon_item_shadow_ball_charm',
        name: "Shadow Ball Charm",
        description: "This oddly pulsating charm seems to absorb the very darkness around it! Wearing this boosts your Pokémon's Shadow Ball accuracy and power, but beware - prolonged use might attract unwanted attention from shadowy Pokemon. It’s like a miniature nightmare condensed into a trinket!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🌑',
        stock: 25,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increases shadow ball accuracy by 15%",
            "increases shadow ball power by 10%",
            "chance to inflict confusion on hit"
        ],
        vendor: 'pokemart',
        shippedBy: 'poke-drone',
        levelRequirement: 9
    },

    'faerun_item_ancient_scroll_of_protection': {
        id: 'faerun_item_ancient_scroll_of_protection',
        name: "Scroll of Protection from Evil",
        description: "This ancient scroll, penned by a long-forgotten cleric, radiates an aura of divine power. Unfurling it whispers a protective enchantment - warding off evil spirits and shadowy creatures with a shimmering golden light!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8750,
        icon: '🛡️',
        stock: 9,
        rarity: 'legendary',
        stockType: 'night_only',
        effects: [
            "Grants +4 AC for 1 hour",
            "Advantage on saving throws against necrotic damage",
            "Summons a spectral guardian for 3 rounds (low HP)"
        ],
        vendor: 'faction_the_order',
        shippedBy: 'giant_eagle',
        levelRequirement: 12
    },

    'grand_country_crumb_of_stability': {
        id: 'grand_country_crumb_of_stability',
        name: "Crumb of Stability",
        description: "This oddly dense crumb seems to defy gravity, occasionally pulsing with a faint blue light. It's rumored to briefly anchor you during moments of extreme disorientation – perfect for those precarious climbs!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '✨',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "restores 10 sanity",
            "chance to negate falling damage (15%)",
            "provides +2 to dexterity checks for one round"
        ],
        vendor: 'side_seller',
        shippedBy: 'winged_beetle',
        levelRequirement: 3
    },

    'kivotos_item_instant_noodles_of_inspiration': {
        id: 'kivotos_item_instant_noodles_of_inspiration',
        name: "Instant Noodles of Creative Combustion",
        description: "These aren’t your average ramen packets! Infused with the chaotic energy of a thousand brainstorming sessions, these noodles instantly spark brilliant ideas – or at least, a really intense craving for more noodles.  Warning: may cause spontaneous interpretive dance.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 150,
        icon: '🍜',
        stock: 99,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to gain a temporary inspiration buff (5%)",
            "restores 10 HP"
        ],
        vendor: 'student_store',
        shippedBy: 'Standard Mail - Delivered with a complimentary napkin.',
        levelRequirement: 3
    },

    'kivotos_item_shard_of_the_final_exam': {
        id: 'kivotos_item_shard_of_the_final_exam',
        name: "Shard of the Final Exam",
        description: "A pulsating fragment ripped from the sacred, eternally-locked final exam. It radiates a disconcerting aura and whispers cryptic hints about future grades – mostly just 'study harder!' This piece is said to be imbued with the collective anxiety of every student who's ever attended Kivotos Academy.  Don’t stare at it for too long or you might start seeing floating test papers.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 250000,
        icon: '📚',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance to gain a knowledge boost (15%)",
            "detects hidden academic achievements"
        ],
        vendor: 'club_supply',
        shippedBy: 'Royal Courier - Requires Signature from Headmaster Thorne.',
        levelRequirement: 20
    },

    'mushroom_kingdom_item_spore_launcher': {
        id: 'mushroom_kingdom_item_spore_launcher',
        name: "Giant Puffball Launcher",
        description: "This absurd device launches enormous, bouncy puffballs with surprising force! Perfect for clearing obstacles or… well, startling enemies. Just don't aim it at your own feet.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🚀',
        stock: 25,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "deals 1d6 bludgeoning damage to a single target",
            "push target 10 feet away with 50ft push effect",
            "chance to cause target to become briefly stunned (10%)"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'mushroom_cart',
        levelRequirement: 7
    },

    'mushroom_kingdom_item_warp_pipe_charm': {
        id: 'mushroom_kingdom_item_warp_pipe_charm',
        name: "Dimensional Displacement Charm",
        description: "A beautifully crafted charm made from polished mushroom caps and shimmering gears. It’s rumored to briefly bend space, letting you quickly navigate the most confusing pipe mazes. Just don't get stuck in a dimension full of angry snails!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 75000,
        icon: '🌀',
        stock: 10,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance to teleport the user within a 30ft radius (25%)",
            "reduce travel time through pipes by 50%",
            "grants resistance to spatial damage"
        ],
        vendor: 'wario_direct',
        shippedBy: 'royal_snail_express',
        levelRequirement: 18
    },

    'mushroom_kingdom_item_gold_coin_amplifier': {
        id: 'mushroom_kingdom_item_gold_coin_amplifier',
        name: "Amplified Gold Coin",
        description: "This isn't just any gold coin; it’s been meticulously charged with pure greed! Holding this coin grants a temporary boost to your luck… and potentially, your expenses. Wario approves.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 12000,
        icon: '💰',
        stock: 5,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "+1 to all attack rolls",
            "increased chance of finding valuable items (5%)",
            "chance to trigger a random beneficial effect (10%)"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'delivery_drone',
        levelRequirement: 3
    },

    'leclaire_isle_item_crusty_claw': {
        id: 'leclaire_isle_item_crusty_claw',
        name: "Crusty Claw Shield",
        description: "This shield isn't just made of hardened dough; it seems to *grow* sharper the more you use it! It’s surprisingly resilient against piercing attacks, and smells faintly of cinnamon. Perfect for a brave baker defending their pastry shop.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🛡️',
        stock: 5,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "armor: 12",
            "resistance: fire (5%)",
            "chance to inflict 'sticky' on hit"
        ],
        vendor: 'dough_depot',
        shippedBy: 'rolling_cart',
        levelRequirement: 8
    },

    'leclaire_isle_item_sugar_shard': {
        id: 'leclaire_isle_item_sugar_shard',
        name: "Sugar Shard of Sweet Dreams",
        description: "A crystallized fragment pulled from a slumbering Dough Fairy's pillow! Holding this shard induces vivid, sugary dreams – sometimes pleasant, sometimes involving giant gingerbread men chasing you. Use with caution, or enjoy the delicious chaos!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 60000,
        icon: '🍬',
        stock: 3,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "chance to grant 'sugar rush' (temporary speed and attack bonus)",
            "chance to inflict 'confusion'",
            "chance to summon a friendly gingerbread man for 3 turns"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'dusted_crate',
        levelRequirement: 15
    },

    'leclaire_isle_item_yeast_whisper': {
        id: 'leclaire_isle_item_yeast_whisper',
        name: "Yeast Whisper Charm",
        description: "A small, pulsating charm made from concentrated yeast spores. It allows the wearer to briefly understand the murmurs of dough and baking equipment - potentially revealing hidden passages or secret recipes! Don't be surprised if it starts begging for a little sugar.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '🗣️',
        stock: 98,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to detect hidden objects related to baking",
            "increases cooking speed by 10%"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'honeycomb_box',
        levelRequirement: 2
    },

    'midlands_item_chronometer_of_confusion': {
        id: 'midlands_item_chronometer_of_confusion',
        name: "Chronometer of Temporal Hiccups",
        description: "This ornate pocket watch appears to be perpetually stuck at 3:17, and occasionally emits a disconcerting buzzing sound. Wield this device with caution – it seems to subtly warp the flow of time around its user… mostly causing minor inconveniences.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '🕰️',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance_to_slow_enemy_movement",
            "minor_chance_of_time_distortion",
            "increased_perception"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'winged_snail',
        levelRequirement: 5
    },

    'middle_earth_mapmaker_service': {
        id: 'middle_earth_mapmaker_service',
        name: "Cartographer's Precise Survey",
        description: "Old Barnaby, the Shire’s most meticulous cartographer, offers a detailed survey of your current location. His charts are remarkably accurate – especially useful for avoiding those pesky trolls and grumpy goblins!",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1200,
        icon: '🗺️',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "provides a detailed map of the surrounding area (including monster locations)",
            "reveals hidden pathways and secret routes",
            "chance to discover a minor treasure"
        ],
        vendor: 'shire_shop',
        shippedBy: 'Hobbit Post Cart',
        levelRequirement: 6
    },

    'middle_earth_mithril_hammer_fragment': {
        id: 'middle_earth_mithril_hammer_fragment',
        name: "Dwarven Forge's Finest Fragment",
        description: "A small, but incredibly strong, piece of mithril recovered from a collapsed dwarven forge. It vibrates with latent power – perfect for smashing rocks and annoying goblins (or just general hammering). Wario would totally try to steal this!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🔨',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "+5 to smithing skill",
            "chance to inflict bleeding on enemies with attacks",
            "increased armor rating"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'Dwarven Delivery Cart',
        levelRequirement: 10
    },

    'midlands_item_warrior's_contract': {
        id: 'midlands_item_warrior's_contract',
        name: "The Ironclad Accord",
        description: "A magically-sealed contract offering temporary protection and enhanced combat prowess. Signed by a surprisingly grumpy retired legionnaire, it demands unwavering loyalty...and frequent polishing.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🛡️',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increased_armor_5",
            "damage_resistance_10%",
            "chance_to_parry_attack_15%"
        ],
        vendor: 'fractured_forge',
        shippedBy: 'giant_rat',
        levelRequirement: 10
    },

    'equestria_item_pony_footprint_charm': {
        id: 'equestria_item_pony_footprint_charm',
        name: "Pony Footprint Charm",
        description: "A tiny, perfectly preserved footprint of a happy pony! Legend says it brings good luck to those who cherish friendship and always remember the importance of spreading joy. It's surprisingly warm to the touch.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '🐾',
        stock: 67,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "chance to find extra loot (+5%)",
            "increased chance of positive encounters",
            "small bonus to persuasion checks"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Pegasus Express',
        levelRequirement: 3
    },

    'earth_land_item_geode_of_echoes': {
        id: 'earth_land_item_geode_of_echoes',
        name: "The Silent Cartographer's Stone",
        description: "A shimmering geode filled with countless tiny, perfectly formed crystals. Touching it briefly allows you to hear whispers of forgotten maps and lost adventurers – mostly just complaining about the weather, but occasionally a useful clue appears!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 875,
        icon: '💎',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance to reveal hidden pathways",
            "provides cryptic hints relating to map locations",
            "increases perception by 5%"
        ],
        vendor: 'magic_shop',
        shippedBy: 'giant_snail',
        levelRequirement: 8
    },

    'earth_land_item_dragonscale_dust': {
        id: 'earth_land_item_dragonscale_dust',
        name: "Scrapings from Ignis' Fury",
        description: "Collected from the shed scales of a young Crimson Dragon, this dust smells suspiciously like burnt marshmallows and disappointment. When sprinkled on weapons, it provides a fiery boost… or just makes them slightly sticky.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🔥',
        stock: 23,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "weapon fire damage +3",
            "chance to ignite enemies",
            "temporary increase in weapon attack speed"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'griffon',
        levelRequirement: 10
    },

    'grand_country_layer_shard_of_echoes': {
        id: 'grand_country_layer_shard_of_echoes',
        name: "Layer Shard of Echoes",
        description: "A jagged shard pulsing with faint, layered sounds. Holding it close allows you to briefly hear whispers from past events within the Grand Country - useful for tracking or uncovering secrets, but beware – some echoes are… unsettling.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '🔮',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "chance_to_reveal_hidden_paths_30%",
            "grant_minor_illusion_effect"
        ],
        vendor: 'layer_market',
        shippedBy: 'dimensional_rift',
        levelRequirement: 12
    },

    'grand_country_side_seller_charm_of_ascension': {
        id: 'grand_country_side_seller_charm_of_ascension',
        name: "Charm of Ascension",
        description: "Crafted by the enigmatic side sellers, this ornate charm is said to briefly manipulate localized gravity. Use it wisely – a misplaced step could send you tumbling into oblivion!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 65000,
        icon: '⬆️',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "grant_jump_boost_50%",
            "chance_to_briefly_reverse_gravity_10%"
        ],
        vendor: 'side_seller',
        shippedBy: 'warp_wormhole',
        levelRequirement: 24
    },

    'doughnut_hole_epic_singularity_shard': {
        id: 'doughnut_hole_epic_singularity_shard',
        name: "Echo of the Void Heart",
        description: "A pulsating fragment ripped from the center of existence. Holding this shard allows you to briefly manipulate localized gravitational fields – pulling enemies closer or creating small, contained pockets of distorted space.  Be warned; prolonged exposure can induce unsettling visions and an overwhelming urge to collect sprinkles.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🌌',
        stock: 8,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increase_strength_by_3_for_5_turns",
            "chance_to_pull_enemy_closer_20%",
            "creates_small_gravity_field_10ft radius - 2 turns"
        ],
        vendor: 'center_seller',
        shippedBy: 'Void Courier',
        levelRequirement: 9
    },

    'doughnut_hole_curiosity_chronal_drizzle': {
        id: 'doughnut_hole_curiosity_chronal_drizzle',
        name: "Temporal Syrup",
        description: "This viscous, shimmering syrup tastes faintly of cinnamon and paradox. A single drop applied to a weapon grants it temporal properties – briefly slowing enemies or speeding up your own attacks.  Just try not to create any unintended timelines… Wario's already got enough problems.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1500,
        icon: '⏳',
        stock: 99,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "slow_enemy_speed_by_30%_for_2_turns",
            "increase_attack_speed_by_10%_for_1_turn"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Quantum Delivery',
        levelRequirement: 2
    },

    'forbidden_shadowshard': {
        id: 'forbidden_shadowshard',
        name: "Shard of the Twisted Void",
        description: "A fragment ripped from the very fabric of chaos, this shard pulses with an unsettling darkness. Holding it for too long can induce terrifying visions and a desperate craving for… well, let’s just say things best left undisturbed.  Don't blame us if you start summoning shadowy imps.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 250000,
        icon: '🌑',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance to inflict madness on hit",
            "increases shadow damage by 50%",
            "grants temporary resistance to psychic attacks",
            "lowers light sensitivity"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Dark Messenger',
        levelRequirement: 18
    },

    'warhammer_ironclad_relic': {
        id: 'warhammer_ironclad_relic',
        name: "The Emperor's Last Stand",
        description: "A colossal warhammer, crafted from the finest iron and imbued with the spirit of a fallen emperor. It radiates an aura of grim determination – perfect for crushing your foes into oblivion!  Just try not to get too attached; it tends to attract grumpy ghosts.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🛡️',
        stock: 3,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "damage: 9-12 per hit",
            "chance to stun on critical hit",
            "increased armor penetration",
            "regenerates health slowly when idle"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Fate Delivery',
        levelRequirement: 9
    },

    'internet_legendary_firewall': {
        id: 'internet_legendary_firewall',
        name: "The Great Wall of Wario",
        description: "Forged from solidified code and powered by the collective rage of millions of internet trolls, this legendary firewall is said to be impenetrable. It can absorb any attack... until it gets flooded with cat pictures, then all bets are off!  This thing’s got serious protection but also a disturbing fondness for GIFs.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 65000,
        icon: '🛡️',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "provides complete immunity to digital attacks (viruses, hacking attempts, etc.)",
            "chance to reflect spells back at the caster",
            "creates a localized 'buffering' effect on enemies, slowing their movements",
            "occasionally displays a random, aggressively cheerful meme"
        ],
        vendor: 'cyber_market',
        shippedBy: 'High-Speed Packet Transfer',
        levelRequirement: 15
    },

    'faerun_item_rusty_dwarven_hammer': {
        id: 'faerun_item_rusty_dwarven_hammer',
        name: "Dwarf’s Grumble Stone",
        description: "This hammer looks like it's seen a few too many goblin skirmishes – and probably lost a few dents in the process. It still packs a surprisingly solid punch, fueled by the stubborn spirit of ancient dwarves…and maybe a little bit of Wario-grade grit!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '🔨',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "damage: bludgeoning 1d6 + 1",
            "chance to inflict bleeding (5%)",
            "slightly heavier than normal"
        ],
        vendor: 'sword_coast_traders',
        shippedBy: 'wagon',
        levelRequirement: 3
    },

    'faerun_item_scroll_of_abyssal_invocation': {
        id: 'faerun_item_scroll_of_abyssal_invocation',
        name: "The Unholy Bargain",
        description: "A brittle scroll radiating a chilling aura. Touching it may bring forth a minor demonic servant, eager to… well, *something*. Don’t say I didn't warn you—this is definitely forbidden stuff, probably something Wario would use to steal from the underworld!",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 8000,
        icon: '😈',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "summon a minor demon (1d4 rounds)",
            "demon has low HP and damage",
            "risk of summoning a hostile entity if used incorrectly"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'dark_messenger',
        levelRequirement: 8
    },

    'internet_pixel_flare': {
        id: 'internet_pixel_flare',
        name: "Viral Spark Grenade",
        description: "This seemingly harmless pixel grenade bursts with concentrated internet energy! Upon impact, it unleashes a wave of viral memes, temporarily stunning enemies and applying 'Distracted' to their minds – perfect for disrupting tactical formations or escaping awkward conversations.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 7500,
        icon: '💥',
        stock: 42,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "deals 1d8 damage to enemies in a 15ft radius",
            "stuns target for 1 round",
            "applies 'Distracted' status for 3 rounds"
        ],
        vendor: 'pixel_shop',
        shippedBy: 'Drone Delivery',
        levelRequirement: 9
    },

    'internet_meme_contract': {
        id: 'internet_meme_contract',
        name: "The Influencer's Bargain",
        description: "A legally binding agreement between you and a powerful entity within The Internet – a digital influencer with sway over millions. This contract grants the user temporary buffs based on current viral trends, but failing to maintain ‘likes’ results in immediate, crippling social isolation.",
        category: SHOP_CATEGORIES.FACTION,
        price: 2500,
        icon: '👍',
        stock: 91,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "+1 to Charisma checks for 3 rounds",
            "chance (20%) to gain temporary popularity (increased movement speed)",
            "chance (10%) of attracting unwanted attention from online trolls"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Packet Delivery',
        levelRequirement: 5
    },

    'midlands_item_goblin_shockberry': {
        id: 'midlands_item_goblin_shockberry',
        name: "Shocking Crimson Berries",
        description: "These vibrant red berries were favored by Goblin shock troops – and they pack a surprisingly nasty electric punch! Consume one to gain temporary electrical resistance and potentially stun nearby enemies with a burst of chaotic energy. Wario approves!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1700,
        icon: '⚡',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "electrical resistance +4 for 5 turns",
            "chance to stun target on use"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'airship delivery',
        levelRequirement: 7
    },

    'midlands_item_broken_cog': {
        id: 'midlands_item_broken_cog',
        name: "Fragment of a Clockwork Mind",
        description: "A peculiar piece salvaged from the ruins of a colossal automaton. This cog seems to hum with residual intelligence, occasionally emitting faint clicking sounds and granting the wielder a sliver of mechanical insight. It's probably best not to ask it questions.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3200,
        icon: '⚙️',
        stock: 9,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increased perception +3 for 4 turns",
            "chance to decipher ancient mechanisms"
        ],
        vendor: 'fractured_forge',
        shippedBy: 'delivery_only',
        levelRequirement: 10
    },

    'the_edge_void_sculpting_service': {
        id: 'the_edge_void_sculpting_service',
        name: "Ephemeral Form Shaping",
        description: "A master artisan from the Abyss offers to temporarily sculpt your essence into a form resistant to the void's touch. The effect lasts for 30 minutes, granting resistance to necrotic damage and slowing the effects of entropy – though at what cost to your soul, you must wonder?",
        category: SHOP_CATEGORIES.SERVICES,
        price: 75000,
        icon: '🪄',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "grants resistance to necrotic damage for 30 minutes",
            "slows the effects of entropy (50%) for 30 minutes",
            "chance to gain a minor void-themed cosmetic effect"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'void_messenger',
        levelRequirement: 16
    },

    'the_edge_obsidian_wrath': {
        id: 'the_edge_obsidian_wrath',
        name: "Fragment of Unmaking",
        description: "A pulsing chunk of solidified chaos, this obsidian fragment grants a burst of destructive power – but it’s utterly unstable. Use it with caution, as uncontrolled use can trigger minor spatial distortions or even summon shadowy remnants of forgotten horrors.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '💥',
        stock: 99,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "deals 1d6+level fire damage on hit",
            "chance to inflict fear (10%)",
            "small chance to create a minor spatial distortion"
        ],
        vendor: 'final_shop',
        shippedBy: 'express_delivery',
        levelRequirement: 2
    },

    'animatopia_emberclaw_amulet': {
        id: 'animatopia_emberclaw_amulet',
        name: "Emberclaw Amulet",
        description: "This crudely crafted amulet, forged from solidified dragon fire and a surprisingly comfortable badger claw, pulses with residual heat. It's said to ward off the chills of the Shadow Jungle and occasionally grants the wearer a minor boost to their fire resistance – perfect for grumpy boar-folk!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 650,
        icon: '🔥',
        stock: 72,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "fire_resistance_5",
            "increased_strength_1",
            "minor_healing_1"
        ],
        vendor: 'tribal_trader',
        shippedBy: 'giant_beetle',
        levelRequirement: 3
    },

    'animatopia_stone_spirit_charm': {
        id: 'animatopia_stone_spirit_charm',
        name: "Stone Spirit’s Whisper",
        description: "Carved from a fragment of an ancient stone spirit, this charm seems to hum with the secrets of the earth. Holding it allows you to briefly communicate with nearby plant life – mostly requests for water and complaints about tourists. Wario thinks it's just a fancy paperweight.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3200,
        icon: '🗿',
        stock: 18,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "communication_with_plants",
            "increased_perception_2",
            "minor_defense_bonus_3"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'giant_snail',
        levelRequirement: 7
    },

    'leclaire_isle_item_sticky_sweet_scone': {
        id: 'leclaire_isle_item_sticky_sweet_scone',
        name: "Sticky Sweet Scone of Sustenance",
        description: "These deceptively dense scones are baked with a secret ingredient – pure, concentrated happiness! They're surprisingly resilient and provide a burst of energy that’ll have you bouncing off walls… or maybe just finishing your quest.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🍪',
        stock: 67,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "restores 10 health",
            "provides +5 charisma for 3 rounds",
            "slightly increases cooking speed"
        ],
        vendor: 'dough_depot',
        shippedBy: 'swift_cart',
        levelRequirement: 1
    },

    'leclaire_isle_item_dwarven_dough_shield': {
        id: 'leclaire_isle_item_dwarven_dough_shield',
        name: "Dwarven Dough Shield of Resilience",
        description: "Forged by the legendary Dough Dwarves, this shield is surprisingly sturdy – and smells faintly of cinnamon. It’s baked with reinforced dough for exceptional impact resistance (and a good distraction).  Don't worry, it won’t crumble under pressure… too much.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🛡️',
        stock: 23,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases armor class by 2",
            "chance to deflect incoming projectiles (10%)",
            "provides +2 resistance to cold damage"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'rolling_barrel',
        levelRequirement: 6
    },

    'leclaire_isle_item_golden_sugar_shard': {
        id: 'leclaire_isle_item_golden_sugar_shard',
        name: "Golden Sugar Shard of Illumination",
        description: "These shimmering shards are fragments from a fallen star, infused with concentrated sugar. Holding one emits a warm glow and grants the wielder the ability to see clearly in even the darkest corners… or at least, they make things look pretty.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '✨',
        stock: 5,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "provides bright light in a 15-foot radius",
            "detects illusions within the illuminated area",
            "slightly increases perception checks"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'glowing_snail',
        levelRequirement: 9
    },

    'pokemon_item_lucky_charm_badge': {
        id: 'pokemon_item_lucky_charm_badge',
        name: "Trainer’s Fortunate Emblem",
        description: "Forged from a legendary Pokémon's scale and imbued with the spirit of good luck, this badge isn't just for show. It provides a small chance to avoid damage in battle and can even attract rare wild Pokémon – perfect for those who like to gamble! Wario bets you’ll lose it.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🍀',
        stock: 38,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "chance to avoid damage in battle (5%)",
            "increased chance to encounter rare Pokémon",
            "provides a small boost to luck-based checks"
        ],
        vendor: 'league_store',
        shippedBy: 'delivery_drone',
        levelRequirement: 7
    },

    'pokemon_item_potion_healing_aura': {
        id: 'pokemon_item_potion_healing_aura',
        name: "Spectral Recovery Elixir",
        description: "This shimmering potion isn’t just a quick heal; it emanates a soothing aura, slowly regenerating HP over time. It’s especially effective when combined with restorative techniques – or distracting your enemies with shiny objects! Wario's already taken a sip.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1800,
        icon: '💧',
        stock: 91,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "heal_hp_over_time (5 HP/second)",
            "increased healing potency",
            "provides a temporary shield against status effects"
        ],
        vendor: 'safari_shop',
        shippedBy: 'giant_parasect',
        levelRequirement: 10
    },

    'doughnut_hole_crumb_of_nothing': {
        id: 'doughnut_hole_crumb_of_nothing',
        name: "Void Crumb",
        description: "These shimmering, grey crumbs seem to defy gravity, floating gently in your hand. Eating one grants a temporary resistance to spatial distortions and a disconcerting sense of familiarity with the void. Don’t worry, it won't change *you*... probably.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '✨',
        stock: 78,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "restores 10 health",
            "grants +2 resistance to void effects for 3 turns",
            "chance to gain temporary confusion (10%)"
        ],
        vendor: 'hole_hawker',
        shippedBy: 'Dimensional Rift Courier',
        levelRequirement: 3
    },

    'doughnut_hole_echoing_shard': {
        id: 'doughnut_hole_echoing_shard',
        name: "Resonance Shard",
        description: "A fractured piece of the Doughnut Hole’s core, this shard pulses with a faint, unsettling energy. Holding it allows you to briefly perceive echoes of past events within the void—mostly just screaming and misplaced pastries, but sometimes something… more. It's unnerving!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '🔮',
        stock: 23,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "reveals hidden passages (small chance)",
            "provides cryptic clues about the void's mysteries",
            "chance to attract minor void creatures"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Phantom Parceler',
        levelRequirement: 5
    },

    'leclaire_isle_item_frosting_potion': {
        id: 'leclaire_isle_item_frosting_potion',
        name: "Shimmering Sweet Surge",
        description: "A bubbling concoction of enchanted frosting and crystallized sugar! This potion grants the drinker a temporary boost to their speed and agility, while also leaving them with an irresistible sugary aroma – beware the bees!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 2300,
        icon: '🍬',
        stock: 18,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "increase movement speed by 10 feet for 2 turns",
            "grant +2 to dexterity checks",
            "causes a strong sugary scent that might attract unwanted attention (enemies)"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'delivery_beehive',
        levelRequirement: 10
    },

    'midlands_item_engineered_grappling_hook': {
        id: 'midlands_item_engineered_grappling_hook',
        name: "Cog & Chain Grapple",
        description: "Forged by the Fractured Forge, this grappling hook is surprisingly effective – mostly because it's been violently modified with a few spare cogs and gears. It’s guaranteed to get you into trouble… or over a wall.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔗',
        stock: 34,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Allows the user to grapple onto sturdy surfaces.",
            "Increases climbing speed by 50%",
            "Can be used to pull enemies closer (+2 to attack rolls)",
            "Risk of gear failure (10% chance per use)"
        ],
        vendor: 'fractured_forge',
        shippedBy: 'hawk_delivery',
        levelRequirement: 6
    },

    'midlands_item_whispering_scrolls': {
        id: 'midlands_item_whispering_scrolls',
        name: "Fragments of the Silent Pact",
        description: "These scrolls, recovered from a ruined noble’s library, seem to murmur secrets only those with a keen ear (and a healthy dose of paranoia) can decipher.  They might tell you where the treasure is… or lead you straight into a trap!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '📜',
        stock: 12,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "Provides a clue to the location of a hidden objective (50% chance)",
            "Grants +1 to Investigation checks when searching for clues.",
            "May trigger a random encounter with a ghostly figure",
            "Rolls a d6: On a 6, the scroll crumbles into dust."
        ],
        vendor: 'empire_exchange',
        shippedBy: 'messenger_hawk',
        levelRequirement: 4
    },

    'midlands_item_elixir_of_boldness': {
        id: 'midlands_item_elixir_of_boldness',
        name: "Lionheart's Brew",
        description: "This shimmering crimson elixir tastes suspiciously like fermented berries and sheer, unadulterated courage! Drink this potion to temporarily bolster your bravery - you might even challenge the Emperor to a staring contest (don’t actually do that).",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🧪',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increase strength: 5 for 6 turns",
            "grant resistance to fear effects: 4 turns",
            "chance of temporary charisma boost: 10%"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'messenger_hawk',
        levelRequirement: 7
    },

    'midlands_item_amulet_of_broken_trust': {
        id: 'midlands_item_amulet_of_broken_trust',
        name: "The Shadow's Embrace",
        description: "An amulet pulsating with a chilling darkness, rumored to have been crafted from the shattered remains of a noble’s oath. Wear this and you might gain the ability to sow discord amongst your foes – just don't be surprised if you start questioning *your* loyalties!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 120000,
        icon: '🌑',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance to inflict confusion on target: 25%",
            "reduces enemy morale: 10%",
            "passive ability: +5 charisma (but at a cost…)"
        ],
        vendor: 'fractured_forge',
        shippedBy: 'golem_carrier',
        levelRequirement: 22
    },

    'the_edge_voidshard': {
        id: 'the_edge_voidshard',
        name: "Echoes of the Abyss",
        description: "This jagged shard pulses with a chilling energy, remnants of screams from dimensions beyond comprehension. Holding it brings unsettling visions and whispers of forgotten horrors; perfect for those brave (or foolish) enough to delve deeper into The Edge.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🔮',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases critical hit chance by 5%",
            "chance to inflict 'fear' on enemies (10%)",
            "grants +3 to willpower"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'dimensional_rift',
        levelRequirement: 6
    },

    'the_edge_chronal_orb': {
        id: 'the_edge_chronal_orb',
        name: "Temporal Static",
        description: "A swirling orb of fractured time, this curious trinket seems to resist the flow of reality. It emits a faint hum that can briefly accelerate or decelerate your movements – but be warned, prolonged use might unravel you entirely!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 950,
        icon: '⏳',
        stock: 18,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "temporarily increases movement speed by 20% for 3 seconds",
            "chance to rewind time slightly (5%) on taking damage",
            "reduces enemy attack speed by 10%"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'winged_beetle',
        levelRequirement: 4
    },

    'the_edge_void_locket': {
        id: 'the_edge_void_locket',
        name: "Lost Memories of the Deep",
        description: "This tarnished locket contains fragments of echoes trapped within a pocket dimension. Opening it reveals fleeting glimpses of lost souls and forgotten tragedies - an unsettling reminder that some things are best left undisturbed.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 600,
        icon: '🖤',
        stock: 75,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grants +1 to intelligence",
            "chance to inflict confusion on enemies (5%)",
            "provides a small bonus to perception checks"
        ],
        vendor: 'final_shop',
        shippedBy: 'snail',
        levelRequirement: 2
    },

    'equestria_item_stirring_saddlebag': {
        id: 'equestria_item_stirring_saddlebag',
        name: "Stirring Saddlebag of Culinary Chaos",
        description: "This seemingly ordinary saddlebag is filled with bizarre and unpredictable ingredients! When opened, it randomly produces a mixture – sometimes delicious, sometimes… less so. Prepare for flavor explosions (and potential indigestion)!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '🥣',
        stock: 45,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to create a healing potion (20%)",
            "chance to create a poisonous concoction (10%)",
            "adds a random status effect (poison, confusion, etc.) on use"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'Stable Delivery',
        levelRequirement: 3
    },

    'the_edge_ironclad_sentinel': {
        id: 'the_edge_ironclad_sentinel',
        name: "Ironclad Sentinel of the Watchers",
        description: "A small, clockwork automaton built to guard forgotten pathways. It relentlessly attacks any living being it detects with a barrage of spinning blades and arcane energy – perfect for patrolling dark corridors or distracting monstrous foes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🤖',
        stock: 15,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "deals 2d6 piercing damage on hit",
            "chance to stun enemies (5%)",
            "immune to poison and disease"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'automated_drone',
        levelRequirement: 6
    },

    'the_edge_chronal_fragments_faction': {
        id: 'the_edge_chronal_fragments_faction',
        name: "Chronal Fragments - Order of the Shifting Sands",
        description: "These shimmering shards are remnants from a failed attempt to stabilize temporal rifts. When combined, they grant access to minor time manipulation – useful for correcting mistakes or escaping certain doom…mostly.",
        category: SHOP_CATEGORIES.FACTION,
        price: 600,
        icon: '⏳',
        stock: 35,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to rewind time by 3 seconds (10%)",
            "slows enemy movement speed by 20% for 4 seconds",
            "restores 5 mana"
        ],
        vendor: 'final_shop',
        shippedBy: 'messenger_hawk',
        levelRequirement: 3
    },

    'mushroom_kingdom_item_sparkling_shroom': {
        id: 'mushroom_kingdom_item_sparkling_shroom',
        name: "Sparkling Shroom",
        description: "These bioluminescent mushrooms pulse with raw magical energy! Consuming one grants a burst of speed and temporary resistance to poison, perfect for dodging those pesky Goombas. Just don't eat too many – you’ll start bouncing uncontrollably!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🍄',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grant_speed_3",
            "poison_resistance_10",
            "temporary_buff"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'mushroom_delivery',
        levelRequirement: 1
    },

    'animatopia_clawstrike_amulet': {
        id: 'animatopia_clawstrike_amulet',
        name: "Clawstrike Amulet",
        description: "This amulet, carved from the fang of a Razorclaw Boar, pulses with primal energy. It grants the wearer uncanny reflexes and a savage roar – perfect for intimidating smaller foes or launching surprise attacks!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🐾',
        stock: 5,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased_attack_speed",
            "chance_to_apply_bleed",
            "roar_damage"
        ],
        vendor: 'tribal_trader',
        shippedBy: 'winged_parrot',
        levelRequirement: 12
    },

    'animatopia_whispering_stone': {
        id: 'animatopia_whispering_stone',
        name: "Whispering Stone of the Ancients",
        description: "A smooth, grey stone that seems to murmur forgotten secrets. Hold it close and you might glean glimpses of Animatopia’s ancient past – though beware, some whispers are best left unheard!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 75000,
        icon: '🔮',
        stock: 3,
        rarity: 'mythic',
        stockType: 'night_only',
        effects: [
            "chance_to_receive_prophecy_scroll",
            "increased_wisdom",
            "minor_healing"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'giant_beetle',
        levelRequirement: 20
    },

    'almost_edge_item_echoing_charm': {
        id: 'almost_edge_item_echoing_charm',
        name: "Echoing Charm of the Lost Steps",
        description: "Crafted by the Edge Wanderers, this charm resonates with the fragmented memories clinging to the void. Wearing it allows you to briefly perceive pathways that shouldn't exist, and perhaps avoid a nasty surprise… or step directly into one.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 800,
        icon: '🗣️',
        stock: 25,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased_perception",
            "chance_to_find_hidden_paths",
            "small_movement_speed_boost"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'wind_currents',
        levelRequirement: 3
    },

    'almost_edge_item_liminal_token': {
        id: 'almost_edge_item_liminal_token',
        name: "Token of the Liminal Trader",
        description: "A polished obsidian token, cool to the touch and etched with unsettling patterns. This token grants you a minor discount at the Liminal Trader’s stall, but be warned – accepting their wares may subtly alter your memories.",
        category: SHOP_CATEGORIES.FACTION,
        price: 350,
        icon: '🗝️',
        stock: 18,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "discount_at_liminal_trader",
            "minor_chance_of_memory_distortion"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'silent_delivery',
        levelRequirement: 1
    },

    'doughnut_hole_graviton_gauntlet': {
        id: 'doughnut_hole_graviton_gauntlet',
        name: "Gravitational Grip",
        description: "Forged from solidified gravity itself, this gauntlet allows you to subtly manipulate the pull of objects around you. It's not going to turn you into a black hole, but it *is* great for snagging those tricky loot drops!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '🦾',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increase_strength_by_3",
            "chance_to_pull_objects_towards_you_20%",
            "reduces_fall_damage_50%"
        ],
        vendor: 'void_vendor',
        shippedBy: 'warp_tunnel',
        levelRequirement: 6
    },

    'earth_land_item_frostfang_dagger': {
        id: 'earth_land_item_frostfang_dagger',
        name: "Frostfang Dagger",
        description: "This dagger seems to have been forged in the heart of an ice dragon's breath! It chills the very air around it, inflicting a minor frostbite on your foes – perfect for those chilly dungeon crawls. Wario says it's 'surprisingly pointy,' and probably shouldn’t be used as a toothpick.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '🥶',
        stock: 78,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "deals 1d6 piercing damage",
            "chance to inflict frostbite (5%)",
            "increased critical hit chance (2%)"
        ],
        vendor: 'guild_quartermaster',
        shippedBy: 'dragon_cart',
        levelRequirement: 4
    },

    'earth_land_item_whispering_stone': {
        id: 'earth_land_item_whispering_stone',
        name: "Whispering Stone of Echoes",
        description: "Legend says this smooth, grey stone remembers every conversation and secret spoken near it. Hold it close during negotiations or interrogations – but be warned, sometimes it whispers unsettling truths!  It's rumored Wario tried to use it to get a better deal on turnips.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 180,
        icon: '🔮',
        stock: 42,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "provides +1 to persuasion checks",
            "chance to reveal hidden information (10%)",
            "can be used to cast ‘Minor Illusion’ once per day."
        ],
        vendor: 'magic_shop',
        shippedBy: 'owl_messenger',
        levelRequirement: 2
    },

    'earth_land_item_dragonscale_amulet': {
        id: 'earth_land_item_dragonscale_amulet',
        name: "Dragonscale Amulet of Resilience",
        description: "This amulet is crafted from actual scales shed by a young fire dragon – though it doesn’t smell *too* bad. It grants you resistance to fire damage and a slight boost to your defenses, perfect for facing those pesky flame-breathing lizards!  Wario probably tried to sell it as 'slightly burnt' turnips.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '🔥',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grants resistance to fire damage",
            "increases armor class by 2",
            "chance to deflect incoming attacks (15%)"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'giant_snail',
        levelRequirement: 8
    },

    'kivotos_item_chrono_reset_watch': {
        id: 'kivotos_item_chrono_reset_watch',
        name: "Chrono Reset Watch – Prototype Model",
        description: "Wario wouldn't be caught dead with this, but some students need a little extra time. This watch allows you to rewind the last 5 seconds of your actions – great for dodging that clumsy professor or snagging the last slice of cake! Don’t abuse it, though, or reality might start glitching out.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7000,
        icon: '⏳',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "rewind time (5 seconds)",
            "chance to create a minor temporal paradox (small damage)",
            "increased reaction speed +3%"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Courier Pigeon',
        levelRequirement: 9
    },

    'kivotos_item_personalized_aura_generator': {
        id: 'kivotos_item_personalized_aura_generator',
        name: "Personalized Aura Generator - Model Beta",
        description: "Feeling a little… bland? This device allows you to generate a custom aura, radiating colors and subtle magical effects. Choose from options like ‘Inspiring Courage,’ ‘Mystical Calm,’ or 'Pure Wario-esque Chaos’ – just be prepared for some confused glances.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 12000,
        icon: '🌈',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "randomly grants a positive status effect (buff)",
            "increases charisma +10%",
            "chance to attract curious onlookers",
            "aura color changes based on party mood"
        ],
        vendor: 'club_supply',
        shippedBy: 'Delivery Drone',
        levelRequirement: 11
    },

    'midlands_item_potion_of_grim_resolve': {
        id: 'midlands_item_potion_of_grim_resolve',
        name: "Elixir of Bitter Determination",
        description: "A viscous, dark purple potion that tastes suspiciously like burnt turnips and regret. Drink this to bolster your courage - or at least pretend to be brave while enduring a truly awful taste.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🧪',
        stock: 33,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "restores 25 HP",
            "temporary resistance to fear effects",
            "grants +2 to saving throws against mind-altering magic"
        ],
        vendor: 'empire_exchange',
        shippedBy: 'flying drake (delivery only)',
        levelRequirement: 8
    },

    'midlands_item_obsidian_dice_of_fortune': {
        id: 'midlands_item_obsidian_dice_of_fortune',
        name: "The Oracle's Gamble",
        description: "These intricately carved dice seem to pulse with a faint, unsettling energy. Roll them for cryptic advice... or disastrous results! Wario recommends using these to settle arguments over who gets the last mushroom.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '🎲',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "randomly grants a small bonus (HP, skill check, etc.) or inflicts a minor penalty",
            "chance to trigger a random event (positive or negative)",
            "increases charisma by 1 for one round"
        ],
        vendor: 'fractured_forge',
        shippedBy: 'magical teleportation',
        levelRequirement: 10
    }
};
