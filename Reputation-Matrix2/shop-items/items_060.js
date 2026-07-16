// Shop items file 60
// Generated: 2026-03-21 16:30:24
// Items: 100

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_060 = {
    'pokemon_item_lucky_charm_berry': {
        id: 'pokemon_item_lucky_charm_berry',
        name: "Berry of the Bewildered Beast",
        description: "A shimmering berry pulsating with chaotic energy! It's rumored to temporarily confuse your opponent, making them vulnerable to a well-timed attack. Wario says it’s 'perfect for snatching up those rare Pokémon – or shiny coins!'",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '✨',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Heals 25 HP",
            "Applies Confusion to target for 3 turns",
            "Grants +10 to luck for 1 turn"
        ],
        vendor: 'pokemart',
        shippedBy: 'Winged Pokemon Delivery',
        levelRequirement: 2
    },

    'pokemon_item_ancient_trainer_gear': {
        id: 'pokemon_item_ancient_trainer_gear',
        name: "Trainer's Gauntlet of Valor",
        description: "Forged from the remnants of a legendary trainer’s armor, this gauntlet radiates a potent aura of combat prowess. It significantly boosts your attack power and grants you a defensive advantage against powerful Pokémon.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🛡️',
        stock: 5,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "Increases Attack by 30 for 5 turns",
            "Grants +10 Defense",
            "Reduces damage taken from Pokémon attacks by 15%"
        ],
        vendor: 'league_store',
        shippedBy: 'Swift Delivery Drone',
        levelRequirement: 8
    },

    'internet_meme_bomb': {
        id: 'internet_meme_bomb',
        name: "Viral Overload Device",
        description: "This bizarre device channels the collective consciousness of the internet! When activated, it unleashes a wave of chaotic memes and viral content, causing enemies to momentarily lose their minds – mostly by uncontrollably laughing. Use with caution; excessive amusement can lead to temporary paralysis!",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 12000,
        icon: '😂',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance to inflict madness for 2 turns",
            "deals psychic damage based on meme popularity (variable)",
            "reduces enemy accuracy by 50%"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Black Market Shipment',
        levelRequirement: 12
    },

    'mushroom_kingdom_item_golden_spore': {
        id: 'mushroom_kingdom_item_golden_spore',
        name: "Golden Spore of Unending Growth",
        description: "This pulsating, golden mushroom grants incredible growth potential! Consuming it dramatically increases your size and strength for a short time, perfect for smashing obstacles or gobbling up smaller enemies. It's rumored to have been cultivated by Wario himself.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '🍄',
        stock: 45,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increase_size:5",
            "strength_boost:3",
            "duration:10"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'mushroom_cart',
        levelRequirement: 9
    },

    'mushroom_kingdom_item_koopa_faction_scroll': {
        id: 'mushroom_kingdom_item_koopa_faction_scroll',
        name: "Koopa Clan Tactical Scroll",
        description: "A meticulously crafted scroll detailing the Koopa Clan's preferred battle formations and shell-based strategies. Deciphering its cryptic symbols might even unlock new, devastating attacks - if you can handle the sheer arrogance!",
        category: SHOP_CATEGORIES.FACTION,
        price: 8000,
        icon: '🐢',
        stock: 23,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "grant_skill:shell_bash",
            "faction_reputation:koopa_clan +10"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'turtle_post',
        levelRequirement: 7
    },

    'mushroom_kingdom_item_legendary_chrono_shard': {
        id: 'mushroom_kingdom_item_legendary_chrono_shard',
        name: "Chrono Shard of Wario's Time Warp",
        description: "A fragment of solidified time, pulsing with chaotic energy! Touching this shard briefly slows down the world around you, allowing for incredible precision maneuvers and escapes from sticky situations. Just don’t mess with it too much or you might end up in next week's Wario!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 65000,
        icon: '⏳',
        stock: 12,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "slow:75%",
            "duration:5",
            "movement_speed: +10%"
        ],
        vendor: 'wario_direct',
        shippedBy: 'warp_pipe_delivery',
        levelRequirement: 18
    },

    'almost_edge_item_resonance_boots': {
        id: 'almost_edge_item_resonance_boots',
        name: "Null-Step Boots of the Boundary",
        description: "These unsettling boots hum with a quiet energy, allowing you to briefly step outside the normal flow of reality. Be warned - they have a tendency to lead you directly into existential dread.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '👣',
        stock: 12,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "increases_movement_speed_by_20%",
            "chance_to_teleport_short_distance",
            "immune_to_fear_effects",
            "reduces_sanity_gain by 10%"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'dimensional_mail',
        levelRequirement: 8
    },

    'almost_edge_item_void_whisper': {
        id: 'almost_edge_item_void_whisper',
        name: "The Silent Plea",
        description: "This polished obsidian stone seems to absorb sound and light, radiating an unnerving stillness. Holding it grants the user a single, cryptic message from the void – probably just Wario complaining about the lack of treasure.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '🤫',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grants_a_hint_of_danger",
            "chance_to_receive_a_prophetic_dream",
            "reduces_noise_radius by 50%",
            "small chance to attract void entities"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'carried_by_wind',
        levelRequirement: 3
    },

    'equestria_gourmand_treat': {
        id: 'equestria_gourmand_treat',
        name: "Rainbow Sherbet Surprise!",
        description: "A shimmering confection crafted by the finest sugar-coated unicorns! This treat bursts with a chaotic rainbow of flavor, temporarily boosting your party's luck and making you irresistibly charming to all ponies...and potentially goblins.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🌈',
        stock: 42,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "boosts luck by 50%",
            "increases charisma by 10",
            "chance to attract friendly NPCs"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'pony express',
        levelRequirement: 6
    },

    'equestria_harmonious_blade': {
        id: 'equestria_harmonious_blade',
        name: "The Echo of Harmony",
        description: "Forged in the Crystal Heart, this blade resonates with the essence of Equestria's magic. Wielding it allows you to amplify your party’s healing spells and dish out a hefty dose of righteous fury—though excessive use might cause spontaneous polka dancing.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '⚔️',
        stock: 15,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "increases healing spell damage by 20%",
            "chance to stun enemies with a harmonious blast",
            "boosts party morale (+10)"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'royal courier',
        levelRequirement: 10
    },

    'equestria_divine_amulet': {
        id: 'equestria_divine_amulet',
        name: "The Heart of Twilight’s Blessing",
        description: "A shimmering amulet radiating with the power of Princess Twilight herself! This godly artifact grants you resistance to all forms of negativity and allows you to briefly glimpse the most advantageous path forward – though be warned, it has a peculiar fondness for recommending Wario-style shortcuts.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 650000,
        icon: '✨',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "grants resistance to negative status effects",
            "chance to predict enemy actions (30%)",
            "provides +50% to all skill checks",
            "Wario-approved shortcut recommendations (occasionally)"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'celestial messenger',
        levelRequirement: 24
    },

    'faerun_item_silverhand_amulet': {
        id: 'faerun_item_silverhand_amulet',
        name: "Amulet of the Steadfast Hand",
        description: "Forged by dwarven artisans, this amulet is said to grant its wearer uncanny precision. It’s surprisingly comfortable and makes you feel like a master swordsman... even if you're mostly just fidgeting.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 65000,
        icon: '💪',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "increased dexterity by 8 (1d4)",
            "critical hit chance +5%",
            "immune to stunning effects for 2 rounds"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'flying_carpet',
        levelRequirement: 16
    },

    'faerun_item_waterdeep_guild_token': {
        id: 'faerun_item_waterdeep_guild_token',
        name: "Waterdeep Thieves’ Guild Recognition Token",
        description: "A tarnished silver token bearing the faint insignia of the Waterdeep Thieves' Guild. Possession of this indicates a certain… familiarity with shadowy dealings and may attract unwanted attention from various factions – but hey, who needs trouble?",
        category: SHOP_CATEGORIES.FACTION,
        price: 800,
        icon: '💎',
        stock: 95,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grant access to a secret Waterdeep contact (random encounter)",
            "chance to receive minor loot from successful stealth checks (+20%)",
            "discounts at certain shops in Waterdeep"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'messenger_hawk',
        levelRequirement: 3
    },

    'connectopia_geode_of_echoes': {
        id: 'connectopia_geode_of_echoes',
        name: "Echoing Geode",
        description: "This shimmering geode seems to capture the whispers of Connectopia's past. Holding it allows you to briefly hear snippets of conversations and forgotten blueprints, potentially leading you to valuable resources or hidden workshops. But be warned – sometimes it just repeats your own frustrated sighs!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '💎',
        stock: 5,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "chance to find hidden crafting recipes",
            "increased chance of discovering ancient technology",
            "provides minor illusionary benefits - temporary invisibility for 3 seconds (once per day)"
        ],
        vendor: 'craft_corner',
        shippedBy: 'Drone Delivery System',
        levelRequirement: 10
    },

    'the_edge_whisper_shard': {
        id: 'the_edge_whisper_shard',
        name: "Echoes of the Void Shard",
        description: "This jagged shard pulses with an unsettling energy, whispering secrets from beyond the known abyss. Holding it grants fleeting glimpses into potential futures – mostly bad ones involving giant worms and existential dread. It’s surprisingly comfortable to juggle!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 65000,
        icon: '🔮',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "grants vision for 1 round",
            "chance to inflict madness (10%)",
            "increases sanity by 5",
            "reveals hidden paths (small area)"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'dimensional rift',
        levelRequirement: 18
    },

    'the_edge_rune_amulet': {
        id: 'the_edge_rune_amulet',
        name: "Amulet of Calculated Risk",
        description: "Crafted from solidified temporal flux, this amulet subtly alters your perception of danger. It doesn’t make you fearless – far from it – but it does give you a momentary advantage when making risky decisions... mostly by letting you see the slightly-less-bad outcome. Don't blame us if you still fail spectacularly.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '⚔️',
        stock: 7,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases critical hit chance by 5%",
            "reduces damage taken from traps by 10%",
            "grants +1 to Dexterity for 3 rounds",
            "chance to reroll a failed skill check"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'express courier',
        levelRequirement: 8
    },

    'the_edge_echoing_potion': {
        id: 'the_edge_echoing_potion',
        name: "Potion of Transient Resonance",
        description: "This swirling, iridescent potion amplifies your senses and momentarily connects you to the echoes of events that have occurred in this dangerous realm. It’s like a really weird audio-visual flashback – mostly involving screaming goblins and collapsing platforms. Drink quickly before it makes you question everything!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '🧪',
        stock: 95,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "restores 1d6 HP",
            "grants advantage on perception checks for 2 rounds",
            "reveals hidden traps within 30 feet (once)",
            "slightly increases charisma by 1"
        ],
        vendor: 'final_shop',
        shippedBy: 'standard mail',
        levelRequirement: 3
    },

    'connectopia_brick_hammer': {
        id: 'connectopia_brick_hammer',
        name: "Wario's Blockbreaker!",
        description: "This brick hammer is guaranteed to smash through any block – or your opponents! It’s surprisingly comfortable for a weapon made entirely of reinforced concrete. Just don't blame us if you accidentally demolish the entire town.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 350,
        icon: '🔨',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increased_mining_speed",
            "slight_block_damage",
            "chance_to_drop_bricks"
        ],
        vendor: 'block_smith',
        shippedBy: 'rolling_crate',
        levelRequirement: 1
    },

    'connectopia_geode_of_stability': {
        id: 'connectopia_geode_of_stability',
        name: "The Stabilizer",
        description: "This pulsating geode radiates a calming energy, instantly reinforcing unstable structures and preventing collapses! It’s surprisingly effective against Wario’s reckless building schemes… mostly. Don't get too attached; it might explode.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '💎',
        stock: 5,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "stabilize_terrain",
            "increased_defense_against_earthquakes",
            "chance_to_repair_damaged_structures"
        ],
        vendor: 'craft_corner',
        shippedBy: 'magic_portal',
        levelRequirement: 10
    },

    'teyvat_item_lightning_grapple': {
        id: 'teyvat_item_lightning_grapple',
        name: "Electro-Charged Chain Gauntlet",
        description: "Crafted by the finest artisans of Liyue, this gauntlet channels raw electro energy! It allows you to swing across chasms with impressive speed and deliver shocking blows to your foes – just try not to accidentally short-circuit yourself.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '⚡',
        stock: 18,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "movement speed +2",
            "chance to stun on attack",
            "can grapple to electrical sources"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'sea_merchant',
        levelRequirement: 10
    },

    'teyvat_item_godly_starfall_amulet': {
        id: 'teyvat_item_godly_starfall_amulet',
        name: "Amulet of the Fallen Star",
        description: "This amulet radiates with a faint, ethereal glow - remnants of a celestial being's final moments. Wearing it grants incredible luck and protection against divine magic... though prolonged use may cause unsettling visions.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 650000,
        icon: '✨',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "luck +10",
            "resistance to divine magic +50%",
            "chance to reflect spells",
            "chance for a small amount of gold to drop from enemies"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'mystic_messenger',
        levelRequirement: 24
    },

    'faerun_item_waterdeep_cartel_contract': {
        id: 'faerun_item_waterdeep_cartel_contract',
        name: "Waterdeep Cartel Contract - 'The Serpent's Coil'",
        description: "A surprisingly detailed contract from the infamous Waterdeep Dragonborn Cartels. It promises lucrative opportunities... and a whole lot of trouble. Handle with extreme caution (and maybe a bribe).",
        category: SHOP_CATEGORIES.FACTION,
        price: 2100,
        icon: '🐍',
        stock: 8,
        rarity: 'uncommon',
        stockType: 'special_order',
        effects: [
            "grant_access_to_waterdeep_black_market",
            "chance_to_gain_information_from_criminal_contacts",
            "reputation_with_dragonborn_cartels"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'messenger_hawk',
        levelRequirement: 3
    },

    'kivotos_item_study_session': {
        id: 'kivotos_item_study_session',
        name: "Accelerated Learning Session",
        description: "Feeling a bit slow? This service will have you absorbing knowledge at an alarming rate! It's like cramming for finals, but without the crippling anxiety... mostly.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 850,
        icon: '📚',
        stock: 28,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "restores 50 HP",
            "grants 10 XP",
            "increases skill proficiency by 1 level (chosen from party's current skills)"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Delivery Courier',
        levelRequirement: 4
    },

    'kivotos_item_glittering_spellbook': {
        id: 'kivotos_item_glittering_spellbook',
        name: "Glittering Spellbook of Minor Mishaps",
        description: "A seemingly ordinary spellbook... that occasionally explodes in a shower of glitter and minor magical mishaps. Perfect for adding a touch of chaos to your battles (or just annoying your friends). Don't blame us if you accidentally turn yourself into a potted plant!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 600,
        icon: '🌟',
        stock: 72,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to inflict a small amount of damage (5%)",
            "chance to cause confusion on a single target (5%)",
            "adds +1 to item crafting rolls"
        ],
        vendor: 'club_supply',
        shippedBy: 'Ground Shipping',
        levelRequirement: 2
    },

    'animatopia_stone_totem': {
        id: 'animatopia_stone_totem',
        name: "Echoing Stone Totem",
        description: "This weathered stone totem pulses with a faint, rhythmic vibration. Legend says it whispers secrets of the forest to those who listen closely… or maybe that’s just the wind whistling through the cracks. Either way, it looks pretty cool!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '🗿',
        stock: 23,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance_to_detect_hidden_items",
            "increase_perception_1",
            "minor_healing_1"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'giant_snail',
        levelRequirement: 5
    },

    'animatopia_spirit_amulet': {
        id: 'animatopia_spirit_amulet',
        name: "Whispering Spirit Amulet",
        description: "Crafted by the most skilled shaman, this amulet is said to allow you to briefly commune with the spirits of Animatopia's ancestors. Don’t worry, they mostly just complain about their backs and demand better berries… it's a bit of a diva.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '👻',
        stock: 5,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "grant_divine_guidance",
            "increase_wisdom_3",
            "chance_to_paralyze_enemy"
        ],
        vendor: 'forest_market',
        shippedBy: 'delivery_drone',
        levelRequirement: 10
    },

    'faction_fatebinder_amulet': {
        id: 'faction_fatebinder_amulet',
        name: "The Binder's Whisper",
        description: "Crafted by the enigmatic Fateforgers, this amulet pulses with chaotic energy. It allows you to subtly influence dice rolls – a little nudge here, a slight twist there…perfect for securing victory or causing delightful mayhem.",
        category: SHOP_CATEGORIES.FACTION,
        price: 65000,
        icon: '🔮',
        stock: 2,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance to reroll a single dice roll: 15%",
            "increases luck stat by 3",
            "provides resistance to fear effects"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Fate Messenger',
        levelRequirement: 18
    },

    'curiosity_shadowshard': {
        id: 'curiosity_shadowshard',
        name: "Echoes of the Fallen King",
        description: "This shard resonates with the chilling memories of a long-dead emperor. Holding it brings flashes of unsettling visions and whispers of forgotten battles – perfect for any collector of dark curiosities!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '💀',
        stock: 98,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to gain a temporary madness effect: 5%",
            "provides a small bonus to investigation checks"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Shadow Delivery',
        levelRequirement: 3
    },

    'almost_edge_item_shimmering_shard': {
        id: 'almost_edge_item_shimmering_shard',
        name: "Shimmering Shard of the Void",
        description: "This pulsating fragment seems to defy gravity, radiating a faint chill. Holding it allows you to briefly perceive echoes of realities that should not exist – mostly just really confusing swirls and unsettling geometry.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 12000,
        icon: '✨',
        stock: 5,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grant_3_insight",
            "chance_to_cause_confusion",
            "increase_perception_by_2"
        ],
        vendor: 'void_merchant',
        shippedBy: 'dimensional_rift',
        levelRequirement: 6
    },

    'almost_edge_item_wario_boots': {
        id: 'almost_edge_item_wario_boots',
        name: "Wario's Slipstream Boots",
        description: "These boots, surprisingly comfortable for their unsettling design, grant a minor boost to movement. They’re rumored to be crafted from solidified regret and the occasional discarded doughnut.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '👟',
        stock: 15,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increase_movement_speed_by_10%",
            "chance_to_slip_and_avoid_damage",
            "grant_temporary_grip"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'gravitational_anomaly',
        levelRequirement: 9
    },

    'almost_edge_item_lost_melody': {
        id: 'almost_edge_item_lost_melody',
        name: "Lost Melody of the Boundary",
        description: "A small, tarnished music box that plays a single, haunting note. Listening to it induces a feeling of profound loneliness and the unsettling knowledge that you're slowly fading from existence.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '🎶',
        stock: 99,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance_to_trigger_nightmare",
            "decrease_sanity_by_1"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'temporal_distortion',
        levelRequirement: 2
    },

    'teyvat_item_ember_whisper': {
        id: 'teyvat_item_ember_whisper',
        name: "Ember Whisper Charm",
        description: "This tiny charm pulses with residual pyro energy, seemingly drawn from the very flames of Stormterror's Lair. Holding it grants a slight warmth and a disconcerting feeling that someone – or something – is watching you. It’s probably just Wario.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 65000,
        icon: '🔥',
        stock: 3,
        rarity: 'mythic',
        stockType: 'limited_daily',
        effects: [
            "increases fire resistance by 10%",
            "chance to ignite enemies on attack (5%)",
            "grants +2 to insight skill checks",
            "causes a faint burning smell around the wearer"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'Swift Courier Pigeon',
        levelRequirement: 18
    },

    'teyvat_item_wind_dancers_grace': {
        id: "teyvat_item_wind_dancer's_grace",
        name: "Wind Dancer’s Grace Brooch",
        description: "A delicate brooch crafted from solidified wind essence, shimmering with the colors of a summer storm. Wearing this grants temporary bursts of speed and agility - perfect for dodging those pesky Diluc attacks! Just try not to get blown away by Wario's enthusiasm.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '💨',
        stock: 7,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increases movement speed by 25% for 6 seconds",
            "chance to evade attacks (10%)",
            "+3 Dexterity",
            "reduces stamina consumption by 10%"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'Sky Delivery Drone',
        levelRequirement: 12
    },

    'teyvat_item_ocean_current_potion': {
        id: 'teyvat_item_ocean_current_potion',
        name: "Ocean Current Potion",
        description: "This shimmering, azure potion tastes vaguely of seaweed and regret. Drinking this allows you to briefly manipulate currents around you – useful for escaping tight spots or delivering a surprise splash to unsuspecting foes! Don't worry about the slight nausea; Wario’s experimenting.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🌊',
        stock: 98,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "restores 20 health and mana",
            "grants water resistance for 30 seconds",
            "+1 to swim speed",
            "chance to create a small whirlpool (5%)"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'Sea Serpent Express',
        levelRequirement: 3
    },

    'kivotos_item_halo_of_scholarly_focus': {
        id: 'kivotos_item_halo_of_scholarly_focus',
        name: "The Over-Achiever's Halo",
        description: "A shimmering halo crafted from solidified student ambition! This premium accessory grants unparalleled concentration and a slight boost to learning efficiency – perfect for cramming before that notoriously difficult exam. Wario would probably steal this just to mess with the professors.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 60000,
        icon: '🎓',
        stock: 2,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "intelligence +5",
            "enhanced_focus (increased spellcasting speed)",
            "passive knowledge gain (1% per round)"
        ],
        vendor: 'student_store',
        shippedBy: 'priority_mail',
        levelRequirement: 14
    },

    'kivotos_item_spectral_notebook': {
        id: 'kivotos_item_spectral_notebook',
        name: "The Echoing Codex",
        description: "This notebook appears to contain the whispers of forgotten students. Writing in it allows you to briefly summon ghostly duplicates of yourself to distract enemies or solve puzzles – a surprisingly useful tool for any aspiring academic… or mischievous trickster!  Don't worry, they disappear after a few minutes.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 750,
        icon: '📝',
        stock: 99,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "summon spectral duplicate (1/day)",
            "increased puzzle-solving ability",
            "chance to reveal hidden clues"
        ],
        vendor: 'club_supply',
        shippedBy: 'standard_mail',
        levelRequirement: 3
    },

    'almost_edge_shard_of_the_unseen': {
        id: 'almost_edge_shard_of_the_unseen',
        name: "Shard of the Unseen",
        description: "A jagged fragment pulsating with an unsettling, grey light. Holding this shard grants a momentary glimpse into the spaces *between* spaces – revealing hidden pathways and fleeting visions...mostly just disturbing geometries.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6800,
        icon: '👁️',
        stock: 15,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Chance to reveal hidden passages (10%)",
            "Grants temporary resistance to fear effects",
            "Minor chance of disorientation on use (3%)"
        ],
        vendor: 'void_merchant',
        shippedBy: 'Dimensional Rift Courier',
        levelRequirement: 8
    },

    'almost_edge_signet_of_the_lost': {
        id: 'almost_edge_signet_of_the_lost',
        name: "Signet of the Lost",
        description: "A tarnished silver signet ring bearing a stylized image of a falling doughnut. Wearing this grants access to the 'Forgotten Archives' - a small, chaotic repository of lost knowledge and forgotten dreams...mostly just recipes for terrible pastries.",
        category: SHOP_CATEGORIES.FACTION,
        price: 12000,
        icon: '🔑',
        stock: 3,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "Grants access to 'Forgotten Archives' (daily)",
            "Increased chance of finding rare ingredients",
            "Provides minor protection against boundary magic"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Phase Shifter',
        levelRequirement: 12
    },

    'leclaire_isle_item_sticky_sweet_shovel': {
        id: 'leclaire_isle_item_sticky_sweet_shovel',
        name: "Sticky Sweet Shovel",
        description: "This shovel isn't for digging dirt; it’s for excavating deliciousness! Crafted from hardened sugar dough, it can scoop up piles of berry tarts and chocolate croissants with surprising force – just watch out for sticky situations.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🥄',
        stock: 5,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "increased_mining_speed",
            "chance_to_heal_on_hit",
            "adds_sticky_effect (reduces enemy movement speed)"
        ],
        vendor: 'dough_depot',
        shippedBy: 'swift_delivery_cart',
        levelRequirement: 6
    },

    'leclaire_isle_item_crumbly_charm': {
        id: 'leclaire_isle_item_crumbly_charm',
        name: "Crumbly Charm of Sweet Dreams",
        description: "Legend says this charm, made from the last crumbs of a legendary pastry chef's masterpiece, grants pleasant dreams filled with sugary delights. It’s surprisingly effective… mostly.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 80000,
        icon: '😴',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance_to_gain_mana_on_sleep",
            "increases_luck_while_sleeping",
            "grants immunity to nightmares",
            "provides a small, temporary boost to charisma"
        ],
        vendor: 'pastry_palace',
        shippedBy: 'magic_messenger_bird',
        levelRequirement: 18
    },

    'leclaire_isle_item_whirlwind_wafer': {
        id: 'leclaire_isle_item_whirlwind_wafer',
        name: "Whirlwind Wafer of Gusting Speed",
        description: "This wafer, infused with captured gusts of wind from the Isle's famous windmills, grants a burst of incredible speed! Just don’t eat it too quickly or you’ll be spinning out of control… like Wario!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '💨',
        stock: 99,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grant_speed_buff",
            "increase_movement_speed",
            "chance_to_dodge_attacks",
            "small burst of speed upon consumption"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'delivery_dune_buggy',
        levelRequirement: 2
    },

    'pokemon_item_evolutionary_shard': {
        id: 'pokemon_item_evolutionary_shard',
        name: "Evolutive Fragment",
        description: "This shimmering shard pulses with raw potential, remnants of ancient Pokémon evolution. It's rumored to accelerate a Trainer’s bond with their beast, potentially triggering an unexpected evolution… or causing some seriously weird mutations!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7500,
        icon: '✨',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "boosts evolution chance by 10%",
            "chance to trigger a random secondary evolution",
            "increases Pokémon happiness by 5"
        ],
        vendor: 'pokemart',
        shippedBy: 'delivery_only',
        levelRequirement: 8
    },

    'pokemon_item_hyper_potion': {
        id: 'pokemon_item_hyper_potion',
        name: "Hyper Potion of Fury",
        description: "Brewed with concentrated Dragon’s Breath and a dash of Pikachu's electricity, this potion isn’t your grandpa’s healing brew. It’ll knock you back to full health and give your Pokémon a serious speed boost – perfect for chasing down those pesky trainers!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '💧',
        stock: 87,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "restores 100 HP",
            "+3 Speed for 3 turns"
        ],
        vendor: 'safari_shop',
        shippedBy: 'delivery_only',
        levelRequirement: 1
    },

    'pokemon_item_legendary_aurora_crest': {
        id: 'pokemon_item_legendary_aurora_crest',
        name: "Aurora Crest of the Ancients",
        description: "Forged during a spectacular celestial event, this crest radiates with mystical power. It is said to grant its wearer control over Pokémon weather abilities and allows limited communication with legendary beasts – though they mostly just stare at you blankly.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 65000,
        icon: '🌟',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increases weather manipulation skill by 20%",
            "chance to summon a weak legendary Pokémon as an ally (1 in 20)",
            "+5 to all Weather-type moves"
        ],
        vendor: 'league_store',
        shippedBy: 'delivery_only',
        levelRequirement: 16
    },

    'middle_earth_goblin_grog': {
        id: 'middle_earth_goblin_grog',
        name: "Goblin Grog of Grumbling Gut",
        description: "This suspiciously green liquid smells vaguely of mildew and regret, but surprisingly it’s a potent brew! Drink it to temporarily boost your strength… or just make you feel like a particularly grumpy goblin.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '🤢',
        stock: 67,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "strength +2 for 10 turns",
            "movement speed -1 for 5 turns",
            "chance to giggle uncontrollably (10%)"
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_cart',
        levelRequirement: 3
    },

    'middle_earth_elf_song_petal': {
        id: 'middle_earth_elf_song_petal',
        name: "Songpetal of Silent Sorrow",
        description: "A single, iridescent petal from a flower that blooms only in the deepest elven forests. Holding it brings a strange melancholy... or maybe just makes you think about how much you miss your mom.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🌸',
        stock: 33,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance to charm enemies (15%)",
            "restores 25 mana",
            "provides minor healing over time (1 HP/turn)"
        ],
        vendor: 'elven_market',
        shippedBy: 'dragon_airship',
        levelRequirement: 10
    },

    'kivotos_item_chromatic_scroll': {
        id: 'kivotos_item_chromatic_scroll',
        name: "Chromatic Scroll of Minor Manifestation",
        description: "This ridiculously oversized scroll smells faintly of bubblegum and disappointment. When unfurled, it briefly summons a shimmering duplicate of the user – mostly just for show, but occasionally useful for distracting grumpy instructors or snagging the last slice of cake!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '✨',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "chance to grant +1 to charisma for 3 turns",
            "user gains a shimmering duplicate (illusion)",
            "small chance of summoning a confused pigeon"
        ],
        vendor: 'student_store',
        shippedBy: 'Drone Delivery',
        levelRequirement: 5
    },

    'kivotos_item_reinforced_notepad': {
        id: 'kivotos_item_reinforced_notepad',
        name: "Reinforced Notepad of Scholarly Defense",
        description: "Crafted from layered titanium and infused with student-grade willpower, this notepad is surprisingly resilient. It's perfect for scribbling down complex equations or furiously doodling during lectures – plus, it can deflect minor magical projectiles (results may vary against particularly angry professors).",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '📝',
        stock: 42,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases concentration by 5 for 2 turns",
            "+2 AC against spells targeting the user",
            "chance to reduce spell damage by 10%"
        ],
        vendor: 'academy_armory',
        shippedBy: 'Courier Pigeon',
        levelRequirement: 8
    },

    'kivotos_item_halo_of_procrastination': {
        id: 'kivotos_item_halo_of_procrastination',
        name: "Halo of Procrastination",
        description: "This shimmering halo promises increased focus and productivity... or at least the *illusion* of it. Worn by a student, you'll find yourself endlessly researching obscure topics, rearranging your desk, and debating the merits of different stationery brands.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '💫',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "chance to skip one combat turn (due to excessive contemplation)",
            "+3 to intelligence checks related to research or trivia",
            "slows enemy attack speed by 10%"
        ],
        vendor: 'club_supply',
        shippedBy: 'Night Courier',
        levelRequirement: 11
    },

    'pokemon_item_shiny_stone': {
        id: 'pokemon_item_shiny_stone',
        name: "Prismatic Evolution Shard",
        description: "This pulsating shard hums with raw Pokémon energy! It dramatically increases the chance of evolving a Pokémon into its shiny form, but beware – overuse can attract unwanted attention from particularly discerning trainers. Wario thinks it's amazing for making extra coins!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 350,
        icon: '✨',
        stock: 67,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increases shiny chance by 10%",
            "chance to temporarily boost Pokémon stats (small)",
            "minor luck bonus on encounters",
            "attracts wild Pokémon for a short duration"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Winged Pokemon Delivery',
        levelRequirement: 3
    },

    'pokemon_item_steel_gauntlet': {
        id: 'pokemon_item_steel_gauntlet',
        name: "Ironclad Trainer's Fist",
        description: "Forged from hardened steel and imbued with the spirit of a Steel-type Pokémon, this gauntlet offers exceptional protection and a surprising punch! It’s perfect for tackling stubborn rivals or simply smashing through training dummies – Wario would love to smash things with it!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '💪',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "+5 Defense",
            "chance to deflect status effects",
            "increased knockback resistance",
            "passive regeneration of HP (small)"
        ],
        vendor: 'league_store',
        shippedBy: 'Express Delivery Pigeon',
        levelRequirement: 8
    },

    'pokemon_item_phantom_lantern': {
        id: 'pokemon_item_phantom_lantern',
        name: "Echoing Dusk Lantern",
        description: "This lantern doesn't cast light, it casts *shadows* – the shadows of Pokémon! It allows you to briefly perceive ghostly Pokémon and their movements. Wario’s pretty sure this thing is haunted…probably by a lost Pikachu.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7500,
        icon: '👻',
        stock: 8,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "reveals ghostly Pokémon and their location",
            "+2 Perception",
            "chance to inflict 'Bewilder' status effect on enemies",
            "increased movement speed in darkness"
        ],
        vendor: 'pokemart',
        shippedBy: 'Dark Lugia Courier',
        levelRequirement: 10
    },

    'equestria_item_forbidden_shadow_stone': {
        id: 'equestria_item_forbidden_shadow_stone',
        name: "Shadow Stone of Discord",
        description: "A pulsing obsidian stone radiating an unsettling aura. Legend claims this item was created by Nightmare Moon himself, and prolonged exposure may subtly influence your party toward… disagreement. Handle with extreme caution – or don't!",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 6500,
        icon: '🌑',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance_to_inflict_confusion (30%)",
            "reduces_friendship_level_by_5",
            "slows_target_speed_by_2"
        ],
        vendor: 'canterlot_commerce',
        shippedBy: 'Royal Guard Courier',
        levelRequirement: 8
    },

    'equestria_item_elemental_grappling_hook': {
        id: 'equestria_item_elemental_grappling_hook',
        name: "Hook of the Storm Winds",
        description: "Forged in the Crystal Empire, this grappling hook is imbued with the power of the wind! It's perfect for scaling cliffsides or snagging unsuspecting ponies – just don’t get caught!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2100,
        icon: '🪨',
        stock: 78,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increased_climbing_speed",
            "chance_to_swing_across_gaps",
            "allows_grappling_onto_certain_terrain"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'Crystal Express',
        levelRequirement: 10
    },

    'pokemon_item_evolution_stone': {
        id: 'pokemon_item_evolution_stone',
        name: "Primal Echo Shard",
        description: "This pulsating shard vibrates with the raw energy of ancient Pokémon battles! It can be used to accelerate a Pokémon’s evolution, but beware – excessive use may lead to unexpected results... like turning your Pidgey into a grumpy rhino.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 750,
        icon: '✨',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grants evolution speed buff for 3 turns",
            "chance to randomly evolve Pokémon into a different stage",
            "increases Pokémon's base stats by 1 (random)"
        ],
        vendor: 'pokemart',
        shippedBy: 'Delivery Drone',
        levelRequirement: 5
    },

    'pokemon_item_legendary_battle_crest': {
        id: 'pokemon_item_legendary_battle_crest',
        name: "Trainer’s Fury Emblem",
        description: "Forged from the scales of a legendary Pokémon, this crest amplifies your strategic prowess in battle! Wearing it grants you heightened reflexes and an uncanny ability to predict your opponent's moves... mostly.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '⚔️',
        stock: 7,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increases attack and speed stats by 25%",
            "chance to counter an opponent's move",
            "grants a small bonus to critical hit chance"
        ],
        vendor: 'league_store',
        shippedBy: 'Elite Pokémon Courier',
        levelRequirement: 14
    },

    'pokemon_item_potion_of_swiftness': {
        id: 'pokemon_item_potion_of_swiftness',
        name: "Hyper Speed Elixir",
        description: "A bubbling concoction brewed with rare berries and the essence of a speedy Pokémon! Drink this potion to become unbelievably fast, allowing you to outrun even the most agile Rattata... or at least for a short while.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '⚡',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "increases speed stat by 50% for 2 turns",
            "chance to dodge all physical attacks for one turn",
            "slightly increases evasion"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Winged Pokémon Delivery',
        levelRequirement: 1
    },

    'faerun_item_potion_of_minor_healing': {
        id: 'faerun_item_potion_of_minor_healing',
        name: "Potion of Minor Healing (Faerûn Style)",
        description: "This vibrant green potion smells suspiciously like swamp berries and questionable mushrooms. Drink it down quickly, and you'll recover a bit of health – just don’t expect to be fighting any dragons afterward! Wario approves.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🌿',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "heal 25 HP"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'hawk',
        levelRequirement: 1
    },

    'faerun_item_scroll_of_protection_from_elementals': {
        id: 'faerun_item_scroll_of_protection_from_elementals',
        name: "Scroll of Protection from Elementals (Faerûn)",
        description: "This ancient scroll, penned by a surprisingly paranoid wizard, promises temporary immunity to the wrath of elementals!  It's guaranteed not to work against Wario’s explosions... probably. May also contain cryptic warnings about forgotten deities.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '📜',
        stock: 3,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "immunity to elemental damage for 1 minute",
            "resistance to cold and lightning damage for 1 minute",
            "advantage on saving throws against spells"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'messenger_pigeon',
        levelRequirement: 9
    },

    'teyvat_item_ember_charm': {
        id: 'teyvat_item_ember_charm',
        name: "Ember Charm of Shifting Flames",
        description: "This little trinket pulses with the warmth of a Pyro vision! It grants a tiny flicker of flame, perfect for lighting your way or… accidentally setting things on fire. Wario would LOVE this!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🔥',
        stock: 87,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "heals_10_hp",
            "chance_to_ignite_target",
            "reduces_fire_resistance_5%"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'Swift Courier Pigeon',
        levelRequirement: 3
    },

    'teyvat_item_phantom_silk': {
        id: 'teyvat_item_phantom_silk',
        name: "Phantom Silk Scarf of Whispering Winds",
        description: "Woven from the very threads of a Mizumoto illusion, this scarf seems to ripple with unseen currents. It offers minor protection against the elements and whispers secrets only a master manipulator would understand… mostly about where Wario hid his gold.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🌬️',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases_movement_speed_5%",
            "provides_resistance_to_cold_10%",
            "chance_to_dispel_status_effect"
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'Sea Serpent Express',
        levelRequirement: 8
    },

    'teyvat_item_forbidden_rune': {
        id: 'teyvat_item_forbidden_rune',
        name: "Rune of Unmaking - Minor",
        description: "A shard of corrupted reality, pulsing with chaotic energy. Use this rune wisely, as its power is unpredictable and could unravel your very being… or just slightly inconvenience a goblin. Wario wouldn't mind a little chaos.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 7500,
        icon: '💀',
        stock: 5,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "deals_15_magic_damage_to_target",
            "chance_to_reduce_target_level_by_one",
            "small_probability_of_causing_self_harm"
        ],
        vendor: 'shadow_market',
        shippedBy: 'Nightmare Delivery',
        levelRequirement: 12
    },

    'pokemon_item_league_badge_of_valor': {
        id: 'pokemon_item_league_badge_of_valor',
        name: "Badge of Valor – Trainer’s Pride",
        description: "A meticulously crafted badge, forged by the Elite Four themselves. It's said to radiate a subtle aura that bolsters your confidence... or at least makes you *feel* like you're ready for anything!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🏆',
        stock: 35,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increases attack stat by 2",
            "provides a small defense bonus (level dependent)",
            "grants +1 to trainer skill"
        ],
        vendor: 'league_store',
        shippedBy: 'delivery_drone',
        levelRequirement: 3
    },

    'pokemon_item_pokemart_trainer_pack': {
        id: 'pokemon_item_pokemart_trainer_pack',
        name: "Trainer’s Starter Pack – Gotta Catch ‘Em All!",
        description: "A deluxe pack brimming with essential supplies for any budding Pokémon trainer! This includes a high-quality Pokéball, training potions, and a motivational poster... because you *need* one.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 320,
        icon: '🎁',
        stock: 89,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "restores 50 HP",
            "restores 10 PP",
            "Provides a small chance to find a common item"
        ],
        vendor: 'pokemart',
        shippedBy: 'delivery_pony',
        levelRequirement: 1
    },

    'internet_data_weave_armguard': {
        id: 'internet_data_weave_armguard',
        name: "Hyperlink Armguard",
        description: "Woven from compressed network packets, this armguard feels strangely… warm. It dramatically increases your reaction time and offers a slight shield against magical attacks – perfect for dodging those pesky digital demons. Just don’t try to browse the web while wearing it.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔗',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increases reaction time by 15%",
            "provides +2 Armor against magic attacks",
            "chance to intercept spells (10%)"
        ],
        vendor: 'cyber_market',
        shippedBy: 'drone_delivery',
        levelRequirement: 6
    },

    'internet_viral_scroll': {
        id: 'internet_viral_scroll',
        name: "Propagation Scroll",
        description: "This ancient scroll is infused with the very essence of viral content! Unrolling it triggers a rapid spread of chaos, affecting nearby enemies and potentially attracting unwanted attention... like a horde of dancing hamsters. Handle with extreme caution (and maybe a fire extinguisher).",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8500,
        icon: '🔥',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "deals 3d6 damage to all enemies within a 10-foot radius",
            "chance to inflict 'going viral' status (enemies scream uncontrollably for 2 turns)",
            "attracts a swarm of pixelated hamsters that cause minor distractions"
        ],
        vendor: 'data_dealer',
        shippedBy: 'encrypted_package',
        levelRequirement: 10
    },

    'almost_edge_crumb_of_nothing': {
        id: 'almost_edge_crumb_of_nothing',
        name: "Crumb of Nothing",
        description: "A tiny fragment of the world itself, tasting faintly of regret and stale icing. Consuming this might grant you a fleeting glimpse into the void’s infinite possibilities… or just make you feel slightly nauseous.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '✨',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Heals 10 HP",
            "Grants +1 to Dodge for 3 turns"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Floating Dust',
        levelRequirement: 1
    },

    'almost_edge_chronal_shard': {
        id: 'almost_edge_chronal_shard',
        name: "Chronal Shard of the Void's Tear",
        description: "A pulsating fragment ripped from the fabric of time, radiating an unsettling chill. Holding this shard briefly can rewind a single failed action, but prolonged exposure risks unraveling your very existence… like a poorly baked donut.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '⏳',
        stock: 5,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Allows the user to rewind one failed attack or skill check (once per encounter)",
            "Reduces all status effects by 1 for 2 turns"
        ],
        vendor: 'void_merchant',
        shippedBy: 'Dimensional Rift',
        levelRequirement: 6
    },

    'almost_edge_legendary_phantom_lantern': {
        id: 'almost_edge_legendary_phantom_lantern',
        name: "Phantom Lantern of the Lost Lights",
        description: "This lantern pulses with a faint, sorrowful light, attracting whispers from forgotten souls trapped within the edge. Light it briefly to ward off spectral entities… or become hopelessly lost in their melancholic tales.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 65000,
        icon: '🕯️',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "Grants immunity to fear effects.",
            "+3 to Wisdom Saves",
            "Occasionally summons a minor spectral guide (60% chance) - provides vague advice."
        ],
        vendor: 'liminal_trader',
        shippedBy: 'Echoing Current',
        levelRequirement: 15
    },

    'mushroom_kingdom_item_glooping_boots': {
        id: 'mushroom_kingdom_item_glooping_boots',
        name: "Glooping Boots of Sticky Traction",
        description: "These oversized boots are made from solidified mushroom goo and provide unparalleled grip on slippery surfaces. They’ll have you bouncing around like a hyperactive Piranha Plant, but watch out for sudden splashes!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🍄',
        stock: 45,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased_jump_height",
            "sticky_landing",
            "reduced_slip_risk"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'mushroom_cart',
        levelRequirement: 6
    },

    'mushroom_kingdom_item_coin_charm': {
        id: 'mushroom_kingdom_item_coin_charm',
        name: "Wario's Lucky Coin Charm",
        description: "A tarnished golden coin, rumored to have been dropped by Wario himself. It’s guaranteed to bring you good luck… or at least enough coins to buy more shiny things!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '💰',
        stock: 72,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "small_chance_of_finding_gold",
            "increased_luck",
            "boosts_charisma"
        ],
        vendor: 'wario_direct',
        shippedBy: 'snail_express',
        levelRequirement: 3
    },

    'mushroom_kingdom_item_potion_of_giantness': {
        id: 'mushroom_kingdom_item_potion_of_giantness',
        name: "Potion of Temporary Gigantism",
        description: "This bubbling, purple potion grants the drinker a temporary boost in size! You’ll be stomping around like a colossal mushroom, crushing enemies and knocking over anything in your path… just try not to break anything too important.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 7500,
        icon: '🍄',
        stock: 18,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased_size",
            "damage_bonus",
            "slowed_movement"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'mushroom_drone',
        levelRequirement: 8
    },

    'faerun_item_potion_of_froggy_fortitude': {
        id: 'faerun_item_potion_of_froggy_fortitude',
        name: "Potion of Froggy Fortitude",
        description: "Brewed by a surprisingly enthusiastic swamp witch, this murky potion tastes vaguely of pond scum and desperation. Drink it quickly – it’ll temporarily boost your resilience… mostly to being splashed with mud.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '🐸',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "restores 1d6 hit points",
            "temporary resistance to poison damage (1 round)",
            "increases movement speed by 10%"
        ],
        vendor: 'waterdeep_market',
        shippedBy: 'winged messenger',
        levelRequirement: 5
    },

    'faerun_item_helm_of_the_stone_giant': {
        id: 'faerun_item_helm_of_the_stone_giant',
        name: "Helm of the Stone Giant",
        description: "This ridiculously heavy helmet seems to have been crafted by a giant with a penchant for collecting pebbles. While it won’t make you immune to crushing blows, it *will* significantly increase your weight - perfect for blocking doorways!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6200,
        icon: '🗿',
        stock: 15,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "increases maximum hit points by 2d8",
            "grants resistance to bludgeoning damage",
            "reduces speed by 10%"
        ],
        vendor: 'baldurs_bazaar',
        shippedBy: 'delivery_only',
        levelRequirement: 7
    },

    'middle_earth_dwarven_pickaxe': {
        id: 'middle_earth_dwarven_pickaxe',
        name: "Stonebreaker’s Stubborn Strike",
        description: "Forged in the depths of Khazad-dûm (before it got… you know). This pickaxe is built to withstand even the most stubborn rock – and Wario's relentless smashing. Just try not to break *it*!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '⛏️',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increased mining speed (+15%)",
            "chance to find extra gems (10%)",
            "slightly increased armor rating (3)"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'giant eagle',
        levelRequirement: 6
    },

    'middle_earth_elven_dreamstone': {
        id: 'middle_earth_elven_dreamstone',
        name: "Whispers of the Old Forest",
        description: "A pulsating stone said to hold fragments of ancient Elvish dreams. Touching it might give you visions… or just make you feel really, really sleepy! Wario doesn't recommend using it before a big battle.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 7800,
        icon: '🔮',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance to enter a dream state (15%) - temporary stat boosts/debuffs",
            "increased magical resistance (+8%)",
            "can be used for divination (limited uses)"
        ],
        vendor: 'elven_market',
        shippedBy: 'shadowfax',
        levelRequirement: 10
    },

    'the_edge_void_shard': {
        id: 'the_edge_void_shard',
        name: "Echoes of the Void",
        description: "This pulsating shard seems to whisper secrets from beyond reality! Holding it briefly grants a fleeting glimpse into the infinite abyss, potentially disorienting foes or revealing hidden pathways… if you can stomach the existential dread.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 18000,
        icon: '🌌',
        stock: 5,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance to inflict confusion for 3 turns",
            "grants +2 perception for 1 turn",
            "small chance to teleport a short distance (10ft)"
        ],
        vendor: 'abyss_trader',
        shippedBy: 'dimensional rift',
        levelRequirement: 8
    },

    'the_edge_chronos_amulet': {
        id: 'the_edge_chronos_amulet',
        name: "Temporal Distortion Amulet",
        description: "A beautifully crafted amulet etched with swirling chronal energies! This item allows the wearer to briefly manipulate time around them – slowing enemies or accelerating their own movements. Just don't mess with causality, or Wario will be VERY upset.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 60000,
        icon: '⏳',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "slows enemy attack speed by 50% for 2 turns",
            "increases movement speed by 20% for 1 turn",
            "chance to rewind a single failed action (once per day)"
        ],
        vendor: 'edge_outpost',
        shippedBy: 'temporal courier',
        levelRequirement: 15
    },

    'the_edge_blacksmith_contract': {
        id: 'the_edge_blacksmith_contract',
        name: "Permanent Weapon Enhancement",
        description: "This contract grants a powerful blacksmith to permanently upgrade one weapon! A truly premium service for those seeking an edge… or at least a slightly sharper blade. Be warned: the results can be unpredictable – and Wario *loves* chaos.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 25000,
        icon: '🔨',
        stock: 1,
        rarity: 'epic',
        stockType: 'delivery_only',
        effects: [
            "+3 to weapon damage rolls",
            "chance to inflict bleeding on hit (10%)",
            "increased critical hit chance by 5%"
        ],
        vendor: 'final_shop',
        shippedBy: 'winged courier',
        levelRequirement: 6
    },

    'forbidden_soulshard': {
        id: 'forbidden_soulshard',
        name: "Shard of the Twisted Soul",
        description: "A pulsing fragment ripped from a corrupted noble’s essence. Holding this shard grants glimpses into forbidden knowledge and whispers promises of power – but be warned, it'll slowly turn you to ash! This isn't your average shiny trinket; it's a tiny piece of madness.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 8000,
        icon: '😈',
        stock: 3,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance: madness 5%",
            "resistance: poison 10%",
            "mana regeneration: increased",
            "shadow step: chance to teleport 5%"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Shadow Delivery',
        levelRequirement: 5
    },

    'warhammer_rune_of_decay': {
        id: 'warhammer_rune_of_decay',
        name: "Rune of Rotting Valor",
        description: "This warhammer hums with the power of decay, a grim reminder of battle and death. Each strike drains vitality from your foes, leaving them weak and vulnerable – perfect for a slow, agonizing defeat! Don't blame us if you start craving moldy bread.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 600,
        icon: '💀',
        stock: 15,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "damage: physical 4-6",
            "chance: poison 10%",
            "weakness: chance to lower defense 5%",
            "slow: reduces movement speed by 10%"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Wartime Express',
        levelRequirement: 3
    },

    'pokemon_item_ancient_charm': {
        id: 'pokemon_item_ancient_charm',
        name: "Charm of the Primal Beast",
        description: "This strangely warm stone pulsates with raw energy, faintly echoing the roars of legendary Pokémon. Wearing this charm grants a temporary boost to your attack and defense - perfect for intimidating those pesky trainers!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1800,
        icon: '🔥',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "attack +30 (3 turns)",
            "defense +20 (3 turns)",
            "chance to inflict burn on hit"
        ],
        vendor: 'pokemart',
        shippedBy: 'Pokémail',
        levelRequirement: 7
    },

    'pokemon_item_league_badge': {
        id: 'pokemon_item_league_badge',
        name: "Badge of Valor",
        description: "Officially sanctioned by the Pokémon League! This gleaming badge isn't just a pretty accessory; it subtly enhances your strategic thinking and provides a minor stat boost, though only if you manage to actually win battles.",
        category: SHOP_CATEGORIES.FACTION,
        price: 800,
        icon: '🏆',
        stock: 72,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "skill accuracy +5%",
            "speed +10 (1 turn)",
            "chance to stun opponent on critical hit"
        ],
        vendor: 'league_store',
        shippedBy: 'Courier Pigeon',
        levelRequirement: 4
    },

    'pokemon_item_mystic_orb': {
        id: 'pokemon_item_mystic_orb',
        name: "Orb of Echoing Energies",
        description: "This shimmering orb seems to contain fragments of countless Pokémon battles. Holding it allows you to briefly mimic a single Pokémon’s attack, though its effects are unpredictable and may result in hilarious misfires – Wario would love this!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '✨',
        stock: 18,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "chance to unleash a random Pokémon attack (50% chance)",
            "attack +25 (1 turn)",
            "small chance of inflicting paralysis",
            "increased item discovery rate"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Delivery Drone',
        levelRequirement: 10
    },

    'almost_edge_item_chronometric_shards': {
        id: 'almost_edge_item_chronometric_shards',
        name: "Temporal Fragments of the Void",
        description: "These shimmering shards seem to vibrate with echoes from moments that never were, or perhaps never will be. Holding them grants a fleeting glimpse into possible futures – useful for dodging danger… or just staring blankly at nothingness.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6500,
        icon: '⏳',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "grant_temporary_vision",
            "chance_to_trigger_illusion",
            "minor_time_dilation (10%)"
        ],
        vendor: 'void_merchant',
        shippedBy: 'dimensional_rift',
        levelRequirement: 7
    },

    'almost_edge_item_wario_boots_of_slip': {
        id: 'almost_edge_item_wario_boots_of_slip',
        name: "Wario's Boots of Unstable Traction",
        description: "These ridiculously oversized boots were supposedly crafted by Wario himself. They allow you to slide across any surface with alarming speed, but don’t be surprised if you end up halfway into a wall or stuck in a particularly sticky puddle.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '👟',
        stock: 15,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "increased_movement_speed (20%)",
            "chance to trigger a brief slide effect (30%)",
            "reduced_fall_damage"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'dimensional_rift',
        levelRequirement: 10
    },

    'almost_edge_item_obsidian_mirror_of_reflection': {
        id: 'almost_edge_item_obsidian_mirror_of_reflection',
        name: "The Echoing Void Gaze",
        description: "A polished obsidian mirror that seems to stare back at you with a chillingly familiar visage. Gazing into its depths for too long might reveal unsettling truths… or just your own startled reflection.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 23000,
        icon: '🪞',
        stock: 8,
        rarity: 'legendary',
        stockType: 'back_order',
        effects: [
            "chance to reveal hidden objects",
            "minor chance to summon a shadowy doppelganger (1%)",
            "increased perception"
        ],
        vendor: 'liminal_trader',
        shippedBy: 'dimensional_rift',
        levelRequirement: 15
    },

    'middle_earth_goblin_grenade': {
        id: 'middle_earth_goblin_grenade',
        name: "Snotty Surprise Grenade",
        description: "A truly awful concoction brewed by particularly grumpy goblins! This grenade doesn't explode, it just… *releases* a cloud of sticky, foul-smelling slime. It’s guaranteed to slow down your enemies and make them regret ever stepping foot in Middle-earth.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '💣',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "applies 'sludge' to target (reduces movement speed by 50%)",
            "target must make a DC 12 Constitution saving throw or be poisoned for 1 round.",
            "creates a small area of difficult terrain."
        ],
        vendor: 'shire_shop',
        shippedBy: 'pony_cart',
        levelRequirement: 5
    },

    'middle_earth_rune_amulet': {
        id: 'middle_earth_rune_amulet',
        name: "Amulet of Slightly Disgruntled Dwarven Craftsmanship",
        description: "Forged in the depths of Moria by a dwarf who was *seriously* unimpressed with his job. This amulet radiates a faint aura of stubbornness, providing a slight bonus to resistance against fear and intimidation… mostly because it’s incredibly annoying.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7800,
        icon: '🛡️',
        stock: 15,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "Grants +2 to saving throws against fear and intimidation.",
            "Provides resistance to psychic damage."
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'dwarf_carrier',
        levelRequirement: 8
    },

    'middle_earth_elven_healing_potion': {
        id: 'middle_earth_elven_healing_potion',
        name: "Whispering Dewdrop Potion",
        description: "Distilled from the tears of a melancholic elf and imbued with ancient forest magic. This shimmering potion swiftly restores vitality, offering a welcome respite after a grueling quest – though it might also make you slightly wistful about the passing of time.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '✨',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "Heals 2d6 + 2 hit points.",
            "Restores one level of exhaustion."
        ],
        vendor: 'elven_market',
        shippedBy: 'winged_messenger',
        levelRequirement: 3
    },

    'connectopia_sparkling_dust': {
        id: 'connectopia_sparkling_dust',
        name: "Pioneer's Sparkle",
        description: "Gathered from the shattered remnants of ancient connection beacons, this dust smells faintly of ozone and ambition. Sprinkle it on your gear for a temporary boost to crafting speed – just don’t sneeze!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '✨',
        stock: 78,
        rarity: 'common',
        stockType: 'limited_daily',
        effects: [
            "crafting_speed_boost_30%",
            "temporary_luck_5%"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'messenger_bird',
        levelRequirement: 1
    },

    'connectopia_geothermal_torch': {
        id: 'connectopia_geothermal_torch',
        name: "Inferno Spark Torch",
        description: "This torch isn’t just for lighting the way – it’s fueled by geothermal vents! It burns with a surprisingly hot, blue flame that can melt through even the toughest rock. Just don't stare at it for too long or you might start seeing things... like giant blocks.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🔥',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "fire_damage_5",
            "increased_mining_speed_20%",
            "resistance_to_cold_10%"
        ],
        vendor: 'craft_corner',
        shippedBy: 'delivery_drone',
        levelRequirement: 10
    },

    'internet_data_core': {
        id: 'internet_data_core',
        name: "Quantum Compression Pylon",
        description: "This gleaming device is a miniature data center, capable of temporarily reducing your weight and boosting speed. Just be careful not to overload your system with too much… information!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '⚙️',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "reduce_weight",
            "increase_movement_speed",
            "chance_of_system_overload"
        ],
        vendor: 'cyber_market',
        shippedBy: 'fiber_optic_cable',
        levelRequirement: 12
    },

    'internet_godly_cache': {
        id: 'internet_godly_cache',
        name: "The Infinite Scroll",
        description: "A shimmering orb containing the collected data of every single meme ever created. Holding it grants unparalleled insight and a slight chance to instantly access any piece of information - though be warned, you might get stuck in an endless loop!",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 350000,
        icon: '🌀',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "instant_information_access",
            "chance_of_infinite_loop",
            "increased_intellect",
            "minor_reality_distortion"
        ],
        vendor: 'data_dealer',
        shippedBy: 'wormhole_transmission',
        levelRequirement: 30
    },

    'doughnut_hole_void_charm': {
        id: 'doughnut_hole_void_charm',
        name: "Echo of the Empty Heart",
        description: "A strange, pulsating charm crafted from solidified void energy. Wearing this accessory grants a minor resistance to psychic damage and whispers secrets about the location of nearby anomalies.  Don't be surprised if it starts demanding sprinkles!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🖤',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "resistance_to_psychic_damage",
            "chance_to_detect_anomalies",
            "small_healing_over_time"
        ],
        vendor: 'void_vendor',
        shippedBy: 'Voidmail Drone',
        levelRequirement: 6
    },

    'doughnut_hole_flavor_ritual': {
        id: 'doughnut_hole_flavor_ritual',
        name: "Chromatic Confectionary Blessing",
        description: "A meticulously crafted ritual offering to appease the forces dwelling within the Doughnut Hole. This service temporarily imbues your weapon with a dazzling array of elemental effects, causing chaos among your foes!  Just try not to accidentally summon a horde of sentient sprinkles.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 5000,
        icon: '✨',
        stock: 8,
        rarity: 'uncommon',
        stockType: 'special_order',
        effects: [
            "weapon_deals_randomized_elemental_damage",
            "chance_to_stun_enemies",
            "small_healing_on_hit"
        ],
        vendor: 'center_seller',
        shippedBy: 'Temporal Delivery System',
        levelRequirement: 4
    },

    'connectopia_block_shard': {
        id: 'connectopia_block_shard',
        name: "Echoing Block Shard",
        description: "This pulsating fragment of solidified thought seems to hum with forgotten blueprints! It can be used to repair damaged blocks or, if carefully manipulated, might unlock a hidden connection. Wario says it's great for smashing… and building!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 150,
        icon: '🧱',
        stock: 72,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "adds 5 to block repair time",
            "chance to reveal a hidden crafting recipe"
        ],
        vendor: 'block_smith',
        shippedBy: 'express_delivery',
        levelRequirement: 1
    },

    'connectopia_wire_weaving_service': {
        id: 'connectopia_wire_weaving_service',
        name: "Automated Wire Weaving Consultation",
        description: "Feeling overwhelmed by all those wires? Let our expert technicians analyze your current setup and recommend the most efficient weaving patterns for maximum data flow! Don't worry, they won’t judge your chaotic mess… much.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 800,
        icon: '🧵',
        stock: 15,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "grants access to advanced wire weaving blueprints",
            "provides a +2 bonus to data transfer speed for 30 minutes"
        ],
        vendor: 'craft_corner',
        shippedBy: 'pioneer_post',
        levelRequirement: 4
    },

    'connectopia_mineral_extractor_module': {
        id: 'connectopia_mineral_extractor_module',
        name: "Vibration Amplifying Module",
        description: "This little device amplifies the natural vibrations of nearby minerals, allowing for faster and more efficient extraction! Just point it at a rock and watch the loot flow… or at least try to. Wario recommends using it to smash things as well!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '⛏️',
        stock: 3,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "increases mining speed by 50%",
            "chance to find rare minerals",
            "can be used to trigger small cave-ins (use with caution!)"
        ],
        vendor: 'pioneer_post',
        shippedBy: 'express_delivery',
        levelRequirement: 8
    },

    'earth_land_whispering_stone': {
        id: 'earth_land_whispering_stone',
        name: "Whispering Stone of Lost Secrets",
        description: "This oddly shaped stone seems to murmur faintly when held. It’s rumored to contain snippets of forgotten dragon lore, though deciphering it requires a hefty dose of patience (and maybe a headache).  Don't blame us if you start speaking Draconic!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '🔮',
        stock: 17,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance to gain a random minor enchantment",
            "provides +1 to perception checks involving ancient ruins",
            "may trigger cryptic visions (roll for madness!)"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'giant_snail',
        levelRequirement: 3
    }
};
