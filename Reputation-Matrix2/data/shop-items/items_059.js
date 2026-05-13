// Shop items file 59
// Generated: 2026-03-21 16:12:12
// Items: 18

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_059 = {
    'middle_earth_ringwraith_shard': {
        id: 'middle_earth_ringwraith_shard',
        name: "Shadowfell Fragment",
        description: "A pulsating shard of pure darkness, radiating a chilling aura. This fragment is said to have once been part of a Ringwraith's armor – don’t get too close or you might start craving shiny things and hoarding souls!",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 50000,
        icon: '🌑',
        stock: 3,
        rarity: 'mythic',
        stockType: 'special_order',
        effects: [
            "chance_to_fear:15%",
            "absorb_shadow_energy:5",
            "mana_regen:2"
        ],
        vendor: 'elven_market',
        shippedBy: 'dragon_airship',
        levelRequirement: 18
    },

    'animatopia_shrieking_totem': {
        id: 'animatopia_shrieking_totem',
        name: "Shrieking Totem of the Howling Wind",
        description: "This unsettling totem, carved from petrified howler monkey bone, emits a piercing shriek when activated! It’s rumored to drive lesser spirits mad and occasionally summon gusts of wind – perfect for blowing away your enemies or scattering annoying insects. Don't blame us if you start hearing whispers...",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1800,
        icon: '📢',
        stock: 45,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "chance_to_cause_fear",
            "small_wind_effect",
            "minor_healing"
        ],
        vendor: 'tribal_trader',
        shippedBy: 'winged_beetle',
        levelRequirement: 6
    },

    'animatopia_bonebreaker_gauntlets': {
        id: 'animatopia_bonebreaker_gauntlets',
        name: "Bonebreaker Gauntlets of the Primal Fist",
        description: "Forged from the shattered claws of a giant badger, these gauntlets deliver bone-crushing blows! They’re surprisingly comfortable… for a weapon made of bone. Wear them and prepare to smash things with righteous fury (or just because Wario said so).",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '👊',
        stock: 12,
        rarity: 'epic',
        stockType: 'in_stock',
        effects: [
            "increase_strength",
            "chance_to_deal_bludgeoning_damage",
            "increased_critical_hit_chance"
        ],
        vendor: 'beast_bazaar',
        shippedBy: 'giant_snail',
        levelRequirement: 10
    },

    'animatopia_sunstone_amulet': {
        id: 'animatopia_sunstone_amulet',
        name: "Sunstone Amulet of the Verdant Bloom",
        description: "This amulet pulses with a gentle warmth, said to channel the energy of Animatopia's ancient forests. It’s rumored to accelerate plant growth and ward off dark magic – perfect for annoying goblins or growing giant pumpkins! Just don't try eating it.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 600,
        icon: '🌱',
        stock: 88,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "minor_healing",
            "chance_to_regenerate_health",
            "increased_nature_resistance"
        ],
        vendor: 'forest_market',
        shippedBy: 'delivery_drone',
        levelRequirement: 3
    },

    'chaos_rune_amulet': {
        id: 'chaos_rune_amulet',
        name: "Amulet of Shifting Fate",
        description: "This unsettling amulet pulses with chaotic energy, granting the wearer a touch of unpredictable luck. It might let you dodge a fatal blow or trigger a cascade of misfortune for your enemies – it’s delightfully confusing! Wario thinks it's 'perfect for causing trouble'.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1800,
        icon: '🌀',
        stock: 32,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance to trigger random effect (positive or negative)",
            "increased evasion: 10%",
            "minor chance of attracting unwanted attention from chaotic entities"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'winged_beetle',
        levelRequirement: 4
    },

    'fate_forge_temporal_scroll': {
        id: 'fate_forge_temporal_scroll',
        name: "Temporal Scroll of Minor Reversal",
        description: "Crafted by the enigmatic Fate Forge, this scroll allows for a brief manipulation of time – just enough to undo a single mistake or gain a crucial advantage. Be warned: prolonged use can unravel reality, so use it wisely (or foolishly)!",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 12000,
        icon: '⏳',
        stock: 5,
        rarity: 'epic',
        stockType: 'special_order',
        effects: [
            "rewind time by 3 seconds",
            "chance to undo a single failed action",
            "temporary increase in magical resistance: 20%"
        ],
        vendor: 'fate_forge',
        shippedBy: 'dimensional_portal',
        levelRequirement: 10
    },

    'mushroom_kingdom_sparkle_coin': {
        id: 'mushroom_kingdom_sparkle_coin',
        name: "Glimmering Gold Coin of Chaos",
        description: "This ridiculously shiny coin seems to attract misfortune! It's said that holding it for too long can cause uncontrollable fits of giggles... or maybe just a nasty case of the hiccups.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '✨',
        stock: 78,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "grant_5_luck",
            "chance_to_trigger_random_effect",
            "minor_healing_10"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'mushroom_post',
        levelRequirement: 3
    },

    'mushroom_kingdom_pipe_wrench': {
        id: 'mushroom_kingdom_pipe_wrench',
        name: "Wario's Plumbing Prototype",
        description: "A bizarre, oversized wrench forged from solidified mushroom slime and questionable metal. Rumor has it Wario himself abandoned this prototype after realizing it was more likely to create a plumbing disaster than fix one.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🔧',
        stock: 32,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "increase_strength_5",
            "chance_to_break_locked_doors",
            "adds_plumbing_skill_1"
        ],
        vendor: 'koopa_shop',
        shippedBy: 'mushroom_express',
        levelRequirement: 6
    },

    'mushroom_kingdom_forbidden_echo_stone': {
        id: 'mushroom_kingdom_forbidden_echo_stone',
        name: "Stone of Silent Screams",
        description: "This pulsating, obsidian stone whispers secrets only the truly desperate can hear... or go insane from. Prolonged use may result in uncontrollable bursts of manic laughter and a crippling fear of mushrooms.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 7500,
        icon: '💀',
        stock: 5,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "chance_to_cause_confusion",
            "grants_insight_1",
            "lowers_sanity_2"
        ],
        vendor: 'wario_direct',
        shippedBy: 'shadow_delivery',
        levelRequirement: 8
    },

    'equestria_item_stirrup_of_swiftness': {
        id: 'equestria_item_stirrup_of_swiftness',
        name: "Stirrups of Swift Hooves",
        description: "These aren't your average stirrups! Crafted with enchanted pony hoof leather, they'll have you galloping faster than a startled Pegasus. Just don’t blame Wario if you accidentally plow through a field of daisies – this thing is *fast*.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🐎',
        stock: 30,
        rarity: 'rare',
        stockType: 'in_stock',
        effects: [
            "increase_movement_speed",
            "boost_riding_skill",
            "chance_to_dodge"
        ],
        vendor: 'ponyville_market',
        shippedBy: 'wagon',
        levelRequirement: 6
    },

    'equestria_item_maple_syrup_potion': {
        id: 'equestria_item_maple_syrup_potion',
        name: "Maple Syrup of Sweet Victory",
        description: "A potent concoction brewed by a disgruntled pony chef! This shimmering, golden liquid will temporarily grant you invulnerability to poison and a surprisingly sticky coating. Watch out for slippery situations – and maybe offer some to your enemies.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 600,
        icon: '🍯',
        stock: 90,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "grant_poison_immunity",
            "temporary_stickiness",
            "increase_defense"
        ],
        vendor: 'crystal_empire',
        shippedBy: 'delivery_only',
        levelRequirement: 3
    },

    'middle_earth_rusty_dagger': {
        id: 'middle_earth_rusty_dagger',
        name: "Gimli's Grumbleblade",
        description: "This surprisingly sharp dagger was once wielded by a particularly grumpy dwarf, Gimli (probably). It’s covered in rust and smells faintly of ale and stone, but it still slices through leather armor with alarming efficiency! Don't get any angry stares from dwarves when you use this.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 800,
        icon: '🗡️',
        stock: 75,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "damage_slashing_1d6",
            "chance_to_bleed_5%"
        ],
        vendor: 'dwarven_forge',
        shippedBy: 'wagon',
        levelRequirement: 4
    },

    'middle_earth_elven_potion_of_swiftness': {
        id: 'middle_earth_elven_potion_of_swiftness',
        name: "Whisperwind Elixir",
        description: "Brewed by the elusive Silvan elves, this shimmering potion grants a fleeting burst of incredible speed. Be warned - it tastes suspiciously like pine needles and disappointment (but hey, you're moving fast!).  It’s said to be favored by messengers for quick deliveries… or escaping grumpy trolls.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 2500,
        icon: '💨',
        stock: 38,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "speed_boost_3_seconds",
            "increase_movement_range_25%"
        ],
        vendor: 'elven_market',
        shippedBy: 'flying_hawk',
        levelRequirement: 7
    },

    'grand_country_side_seller_potion': {
        id: 'grand_country_side_seller_potion',
        name: "Wario's Side-Splitting Serum",
        description: "This potent concoction is brewed with the rarest side fruits of The Grand Country! It'll fill you up, make you laugh uncontrollably, and possibly give you a strange craving for more sides.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 350,
        icon: '😋',
        stock: 91,
        rarity: 'common',
        stockType: 'in_stock',
        effects: [
            "restores_health",
            "temporary_buff_to_charisma",
            "chance_of_laughter"
        ],
        vendor: 'side_seller',
        shippedBy: 'standard_mail',
        levelRequirement: 1
    },

    'curiosity_fate_orb': {
        id: 'curiosity_fate_orb',
        name: "Whispers of the Fated Place",
        description: "A pulsating orb that seems to hum with dark knowledge. Holding it allows you to briefly glimpse possible futures – mostly involving Wario getting into trouble, but occasionally something useful.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '🔮',
        stock: 25,
        rarity: 'uncommon',
        stockType: 'limited_daily',
        effects: [
            "chance to reveal hidden clues (15%)",
            "minor chance of temporary madness (+1 to all negative stats)"
        ],
        vendor: 'chaos_dealer',
        shippedBy: 'Winged Courier',
        levelRequirement: 3
    },

    'warhammer_ironclad_heart': {
        id: 'warhammer_ironclad_heart',
        name: "Ironclad Heart of Valor",
        description: "This warhammer isn't just metal; it seems to possess a faint, rhythmic pulse. It amplifies your courage and resilience – though it also makes you crave shiny things and challenge anyone who dares question your brilliance.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6000,
        icon: '🛡️',
        stock: 2,
        rarity: 'rare',
        stockType: 'special_order',
        effects: [
            "damage: 5d8 + 2 slashing",
            "+2 to armor class",
            "Resistance to fear effects"
        ],
        vendor: 'fate_forge',
        shippedBy: 'Dragon Delivery Service',
        levelRequirement: 6
    },

    'internet_meme_charm': {
        id: 'internet_meme_charm',
        name: "Distorted Reality Charm",
        description: "This bizarre charm manifests as a constantly shifting holographic meme. Wearing it grants the user resistance to psychic attacks, and occasionally triggers random beneficial effects – like temporary invisibility or attracting a swarm of confused pigeons! Wario would totally buy this!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🤪',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "grants +3 resistance to psychic damage",
            "5% chance per round to trigger a random beneficial effect (e.g., invisibility, speed boost)",
            "attracts minor distractions, granting advantage on stealth checks."
        ],
        vendor: 'pixel_shop',
        shippedBy: 'data_stream',
        levelRequirement: 6
    },

    'internet_godly_firewall': {
        id: 'internet_godly_firewall',
        name: "The Great Firewall of Data",
        description: "A shimmering construct of pure code, this firewall protects its wielder from all forms of digital intrusion. It actively defends against hacking attempts, curses malicious spells, and occasionally generates a miniature singularity that briefly erases nearby enemies – because chaos is delicious!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 750000,
        icon: '🛡️',
        stock: 1,
        rarity: 'godly',
        stockType: 'special_order',
        effects: [
            "grants +10 resistance to all magical and digital attacks",
            "automatically detects and negates hacking attempts",
            "once per day, can unleash a 'Singularity Burst' dealing 500 damage in a 15ft radius.",
            "Provides immunity to status effects."
        ],
        vendor: 'cyber_market',
        shippedBy: 'quantum_transmission',
        levelRequirement: 25
    }
};
