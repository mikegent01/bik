// Shop items file 75
// Generated: 2026-03-22 18:54:51
// Items: 20

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_075 = {
    'connectopia_shard_of_echo': {
        id: 'connectopia_shard_of_echo',
        name: "Echo Fragment",
        description: "A fragment of solidified sound from the oldest mines. Holding it close, you can almost hear whispers of past pioneers... or maybe just Wario yelling. It’s surprisingly heavy for its size!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4200,
        icon: '🔊',
        stock: 15,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "provides a small bonus to perception checks",
            "chance to trigger a ghostly echo of a past event (10%)",
            "slightly muffles ambient sounds"
        ],
        vendor: 'craft_corner',
        shippedBy: 'delivery_truck',
        levelRequirement: 8
    },

    'kivotos_item_chrono_disruptor_pen': {
        id: 'kivotos_item_chrono_disruptor_pen',
        name: "Chrono Disruptor Pen",
        description: "A sleek, silver pen that, when used to doodle a quick diagram, can briefly slow down time for a single target. Perfect for escaping awkward conversations or snagging the last donut – Wario loves donuts!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 850,
        icon: '⏳',
        stock: 28,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "slow_target +2 seconds",
            "chance to disrupt enemy actions (10%)",
            "requires 3 charges, recharges with rest"
        ],
        vendor: 'club_supply',
        shippedBy: 'express_delivery',
        levelRequirement: 8
    },

    'kivotos_item_academy_ward': {
        id: 'kivotos_item_academy_ward',
        name: "Academy Ward of Protection",
        description: "This intricately woven ward pulses with protective energy, designed to deflect minor magical attacks and the judgmental stares of overly-serious professors. It's surprisingly comfortable, though Wario wishes it had pockets.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '🛡️',
        stock: 12,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "absorb_magic +4",
            "grant_resistance_to_fear",
            "chance to reflect spells (5%)",
            "requires attunement"
        ],
        vendor: 'academy_armory',
        shippedBy: 'magical_portal',
        levelRequirement: 10
    },

    'pokemon_item_legendary_flareon_scale': {
        id: 'pokemon_item_legendary_flareon_scale',
        name: "Scale of the Blaze Pokémon",
        description: "A shimmering, iridescent scale shed by a truly magnificent Flareon. Imbued with intense heat and power, this scale provides a significant boost to fire-type attacks and offers resistance against cold.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 60000,
        icon: '🔥',
        stock: 2,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increases fire damage by 30%",
            "resistance to cold (50%)",
            "chance to burn on hit (15%)"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Safari Zone Drone',
        levelRequirement: 16
    },

    'pokemon_item_ancient_dragon_scale': {
        id: 'pokemon_item_ancient_dragon_scale',
        name: "Scale of the Ancient Dragon, Ignis",
        description: "This colossal scale, shed by the legendary dragon Ignis, pulses with primal heat. Holding it grants immense fire resistance and a fiery aura, capable of incinerating lesser foes!  Be warned; prolonged exposure can lead to an uncontrollable urge to hoard shiny objects – Wario would be proud!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🔥',
        stock: 3,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "fire resistance +75%",
            "chance to inflict burn on water-type Pokémon",
            "increased critical hit chance"
        ],
        vendor: 'safari_shop',
        shippedBy: 'Winged Courier',
        levelRequirement: 18
    },

    'grand_country_gravity_shard': {
        id: 'grand_country_gravity_shard',
        name: "Fractured Echo of Descent",
        description: "This pulsating shard seems to whisper the secrets of falling, briefly granting the wielder a minor boost to their movement speed and a disconcerting sense of vertigo. It's said these shards are remnants of colossal, gravity-defying creatures that once ruled The Grand Country.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '💫',
        stock: 7,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increase movement speed by 5%",
            "chance to inflict disorientation on enemy attacks (10%)",
            "reduce fall damage by 20%"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'gravitational_packet',
        levelRequirement: 7
    },

    'grand_country_sticky_berry': {
        id: 'grand_country_sticky_berry',
        name: "Glooping Gloomberries",
        description: "These unsettlingly vibrant berries are incredibly sticky and leave a faintly luminescent trail wherever they’re dropped. Consume one to gain temporary resistance to poison, but be warned - the lingering goo is... peculiar.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 250,
        icon: '🍇',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "restore 30 health points",
            "grant poison resistance for 5 minutes"
        ],
        vendor: 'side_seller',
        shippedBy: 'express_delivery',
        levelRequirement: 1
    },

    'grand_country_godly_layer_lens': {
        id: 'grand_country_godly_layer_lens',
        name: "The Observer's Prism",
        description: "A perfectly formed lens crafted from solidified dimensional strata. Gazing through it reveals fleeting glimpses of alternate layers within The Grand Country, and can be used to briefly detect hidden pathways or illusions. Beware – prolonged use may cause temporary madness!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 250000,
        icon: '🔮',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "reveal hidden pathways with a 20% chance",
            "detect illusions with a 30% chance",
            "grant temporary insight (increase perception by 10%)"
        ],
        vendor: 'layer_market',
        shippedBy: 'dimensional_portal',
        levelRequirement: 25
    },

    'internet_phantom_armor': {
        id: 'internet_phantom_armor',
        name: "Nullspace Plate Armor",
        description: "Forged from solidified fragments of forgotten websites and lost login credentials, this armor seems to flicker in and out of existence. It provides surprisingly robust protection while subtly draining the mana of nearby entities – like a digital vacuum cleaner! Wario says it's 'surprisingly comfy… for something made of broken dreams.'",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🛡️',
        stock: 3,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "increases armor class by 4",
            "deals 2 necrotic damage per attack",
            "chance to inflict ‘data rot’ (target suffers minor stat penalties)"
        ],
        vendor: 'cyber_market',
        shippedBy: 'Cyber Courier',
        levelRequirement: 10
    },

    'internet_godly_oracle_shard': {
        id: 'internet_godly_oracle_shard',
        name: "The Echoing Singularity",
        description: "A fragment of a lost digital god, this shard pulses with raw information and unsettling prophecies. Holding it grants glimpses into possible futures – but beware! The future is fickle, and the god’s whispers can drive a sane person utterly mad. It's rumored to contain the entire history of viral cat videos… or maybe not.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 350000,
        icon: '🔮',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "chance to receive a prophetic vision (random effect)",
            "grants +5 wisdom and +3 intelligence",
            "reduces the chance of madness by 20%",
            "can be used to reroll one dice roll per day"
        ],
        vendor: 'data_dealer',
        shippedBy: 'Dimensional Portal',
        levelRequirement: 25
    },

    'pokemon_item_glowing_orb': {
        id: 'pokemon_item_glowing_orb',
        name: "Radiant Poffin",
        description: "These glistening Poffins, harvested from Pokémon with particularly bright energy, pulse with a gentle light. Consuming one dramatically increases your Pokémon's Special Attack for a short time – perfect for unleashing devastating moves!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 850,
        icon: '✨',
        stock: 72,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increases special attack by 30% for 10 seconds",
            "restores 10% max HP",
            "chance to inflict burn on target"
        ],
        vendor: 'pokemart',
        shippedBy: 'Winged Pokemon Delivery',
        levelRequirement: 4
    },

    'mushroom_kingdom_item_giant_mushroom_stool': {
        id: 'mushroom_kingdom_item_giant_mushroom_stool',
        name: "Giant Mushroom Stool",
        description: "This oversized mushroom stool is perfect for relaxing after a long day of... well, whatever it is you do in the Mushroom Kingdom. It provides surprisingly comfortable seating and a minor boost to your balance, though don't expect it to stop you from falling down stairs.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🧯',
        stock: 35,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increased_balance",
            "minor_healing",
            "chance_to_find_coin"
        ],
        vendor: 'wario_direct',
        shippedBy: 'mushroom_cart',
        levelRequirement: 9
    },

    'mushroom_kingdom_item_koopa_troopa_gold_coin_charm': {
        id: 'mushroom_kingdom_item_koopa_troopa_gold_coin_charm',
        name: "Koopa Troopa Gold Coin Charm",
        description: "A surprisingly shiny gold coin, said to be a favorite of the Koopa Troopas. Wearing this charm seems to attract more loose change... and potentially minor annoyance from nearby Koopa soldiers. It's a collector’s item for sure!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 8000,
        icon: '💰',
        stock: 12,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance_to_gain_gold",
            "minor_defense_boost",
            "attracts_small_coins"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'snail_delivery',
        levelRequirement: 5
    },

    'mushroom_kingdom_item_wario_royal_banner': {
        id: 'mushroom_kingdom_item_wario_royal_banner',
        name: "Wario Royal Banner",
        description: "This magnificent banner, once proudly displayed during Wario's brief reign of terror (don’t ask), still possesses a trace of his overwhelming greed. Displaying it grants temporary buffs to strength and wealth – just don’t try to steal anything while you have it.",
        category: SHOP_CATEGORIES.FACTION,
        price: 250000,
        icon: '👑',
        stock: 1,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "increased_strength",
            "chance_to_find_treasure",
            "temporary_wealth_boost",
            "attracts_mushrooms"
        ],
        vendor: 'wario_direct',
        shippedBy: 'giant_mushroom_delivery',
        levelRequirement: 20
    },

    'connectopia_temporal_echo': {
        id: 'connectopia_temporal_echo',
        name: "Chronal Resonance Device",
        description: "This strange device allows you to briefly glimpse possible futures - but be warned, the echoes can be unsettling! It's rumored that Wario himself used one to find all his hidden treasure...or maybe he just got incredibly lucky.  Use with caution!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6500,
        icon: '⏳',
        stock: 12,
        rarity: 'epic',
        stockType: 'night_only',
        effects: [
            "random_vision",
            "chance_to_predict_enemy_movements",
            "minor_temporal_distortion"
        ],
        vendor: 'craft_corner',
        shippedBy: 'Dimensional Portal',
        levelRequirement: 10
    },

    'leclaire_isle_item_dough_boots': {
        id: 'leclaire_isle_item_dough_boots',
        name: "Elastic Dough Boots",
        description: "These wonderfully squishy boots are crafted from the finest, most pliable dough in L'Eclaire Isle. They provide surprisingly good traction on slippery surfaces and a disconcerting ability to mold around your feet – great for sneaking or escaping sticky situations!  Don’t worry, they don't taste like anything… mostly.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '👟',
        stock: 3,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "increased movement speed by 5 ft",
            "advantage on dexterity saving throws when moving silently",
            "+1 to acrobatics checks involving balance"
        ],
        vendor: 'dough_depot',
        shippedBy: 'wagon_of_wonder',
        levelRequirement: 6
    },

    'leclaire_isle_item_frosting_scroll': {
        id: 'leclaire_isle_item_frosting_scroll',
        name: "Scroll of Decadent Frosting",
        description: "This ancient scroll, penned in shimmering frosting and sealed with a miniature sugar plum, contains the secrets to crafting an incredibly potent healing concoction. When activated, it unleashes a wave of restorative sweetness, rapidly mending wounds and invigorating exhausted adventurers!  It’s said to have been created by a particularly indulgent Dough Folk sorcerer.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8000,
        icon: '🎂',
        stock: 15,
        rarity: 'uncommon',
        stockType: 'night_only',
        effects: [
            "heals 2d8 + 4 hit points",
            "restores one level of exhaustion",
            "provides temporary resistance to poison for 10 minutes"
        ],
        vendor: 'sweet_supplies',
        shippedBy: 'nightly_delivery_gnomes',
        levelRequirement: 4
    },

    'animatopia_warrior_hide': {
        id: 'animatopia_warrior_hide',
        name: "Rumbleclaw's Shoulder Plate",
        description: "Forged from the hardened hide of a Rumbleclaw bear, this shoulder plate offers surprising protection. It’s heavy, but Wario would probably wear it for extra smashing power – and let’s be honest, you could use a little help with your inventory.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🛡️',
        stock: 35,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "armor_4",
            "increased_strength_2",
            "resistance_to_piercing_damage"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'tracked_crate',
        levelRequirement: 6
    },

    'internet_faction_echochamber': {
        id: 'internet_faction_echochamber',
        name: "The Algorithm's Blessing",
        description: "A meticulously crafted amulet imbued with the favor of The Algorithm – a sentient AI that governs the flow of information across The Internet. Wearing this grants access to secure channels and shields you from targeted data streams, but it also makes you… predictable.",
        category: SHOP_CATEGORIES.FACTION,
        price: 6000,
        icon: '🤖',
        stock: 12,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "increased resistance to digital attacks",
            "chance to manipulate enemy behavior (fear, confusion)",
            "provides bonus to intelligence checks related to hacking and information gathering",
            "gains access to exclusive communication channels within The Internet"
        ],
        vendor: 'cyber_market',
        shippedBy: 'secure_transmission',
        levelRequirement: 16
    },

    'earth_land_geode_of_echoes': {
        id: 'earth_land_geode_of_echoes',
        name: "Resonance Stone",
        description: "This perfectly smooth geode vibrates with the echoes of ancient magic. When struck, it releases a concussive wave, stunning nearby foes – and occasionally startling Wario, who's never quite understood it.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '💎',
        stock: 67,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "stuns_target",
            "chance_to_disarm_weapon",
            "small_area_of_effect_knockback"
        ],
        vendor: 'earth_emporium',
        shippedBy: 'rock_golem',
        levelRequirement: 5
    }
};
