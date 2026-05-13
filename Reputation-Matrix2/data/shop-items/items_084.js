// Shop items file 84
// Generated: 2026-03-22 20:00:42
// Items: 7

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_084 = {
    'almost_edge_item_radiant_fragment_branded': {
        id: 'almost_edge_item_radiant_fragment_branded',
        name: "Radiant Fragment Branded with the Echo of Nullity",
        description: "A pulsating, crystalline shard radiating an unsettling light—a captured sliver of what lies beyond the doughnut’s edge. When activated, it momentarily solidifies the chaotic energies surrounding it, creating a pocket of absolute stillness that disrupts movement and perception. The air around it feels… absent.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5500,
        icon: '✨',
        stock: 9,
        rarity: 'uncommon',
        stockType: 'delivery_only',
        effects: [
            "Slows enemy movement speed by 25% for 1 turn",
            "Creates a small zone of silence (prevents casting spells or using abilities that require verbal commands)",
            "Grants +2 to defense",
            "Chance to inflict ‘Null Vision’ (target loses vision in a 3m radius for one round)"
        ],
        vendor: 'edge_wanderer',
        shippedBy: 'Gravity Sling Express',
        levelRequirement: 18
    },

    'grand_country_item_the_wicked_climbing_weight': {
        id: 'grand_country_item_the_wicked_climbing_weight',
        name: "The Wicked Climbing Weight of Ascendant Grit",
        description: "This obsidian weight, etched with spiraling glyphs of frantic ascent, grants the wielder unnatural grip and momentum when thrown. It resonates with the chaotic energy of the vertical strata, allowing for brief bursts of controlled descent – a dangerous trick for daring climbers.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 875,
        icon: '⛰️',
        stock: 42,
        rarity: 'uncommon',
        stockType: 'in_stock',
        effects: [
            "increased climbing speed",
            "chance of short-range controlled descent",
            "reduces fall damage by 10%",
            "grants +2 to Strength for 30 seconds"
        ],
        vendor: 'side_seller',
        shippedBy: 'Delivery Drone',
        levelRequirement: 15
    },

    'grand_country_item_the_layered_curse_of_fallen_echoes': {
        id: 'grand_country_item_the_layered_curse_of_fallen_echoes',
        name: "The Layered Curse of Fallen Echoes – Serpent’s Coil Weight",
        description: "Forged from the solidified remnants of a shattered echo-stone, this weight pulses with mournful vibrations. Holding it forces you to relive fragmented moments of climbers lost in the depths—a terrifying but potent advantage for predicting precarious routes.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1688,
        icon: '💀',
        stock: 17,
        rarity: 'rare',
        stockType: 'limited_daily',
        effects: [
            "provides a brief glimpse of potential hazards ahead (chance-based)",
            "emits unsettling whispers that disorient opponents",
            "increases awareness by 5%",
            "chance to trigger a phantom echo, briefly stunning nearby enemies"
        ],
        vendor: 'vertical_vendor',
        shippedBy: 'Carrier Pigeon',
        levelRequirement: 30
    },

    'grand_country_item_the_godly_resonance_of_stoneheart': {
        id: 'grand_country_item_the_godly_resonance_of_stoneheart',
        name: "The Resonance of Stoneheart – Apex Weight of the Shardfall",
        description: "A colossal weight, crafted from solidified resonance and imbued with the spirit of a long-dead climber. Its touch generates a field of layered gravity that can pull even the most skilled climbers off course—a weapon for those who revel in chaos.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 65000,
        icon: '🌋',
        stock: 1,
        rarity: 'legendary',
        stockType: 'special_order',
        effects: [
            "creates a localized gravity field that disrupts climbing attempts",
            "can be used to pull enemies towards the wielder",
            "chance to trigger a cascade of falling stone fragments",
            "grants immunity to vertical fall damage and movement slowdown effects"
        ],
        vendor: 'layer_market',
        shippedBy: 'Magical Conveyance',
        levelRequirement: 50
    },

    'teyvat_item_electro_billet_of_adventure': {
        id: 'teyvat_item_electro_billet_of_adventure',
        name: "The Electro Billets of Adventure",
        description: "Forged in the heart of Stormterror’s domain, these billets pulse with raw electro energy. When struck against stone or metal, they unleash a miniature lightning storm – perfect for disorienting enemies and disrupting their formations. A favored tool amongst wandering adventurers seeking to test their mettle.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '⚡',
        stock: 37,
        rarity: 'epic',
        stockType: 'limited_daily',
        effects: [
            "deals electro damage to enemies",
            "chance to stun on impact",
            "increases attack speed for 5 seconds",
            "provides minor electro resistance"
        ],
        vendor: 'mondstadt_market',
        shippedBy: 'winged_messenger',
        levelRequirement: 25
    },

    'teyvat_item_obsidian_forged_dagger_of_silence': {
        id: 'teyvat_item_obsidian_forged_dagger_of_silence',
        name: "Obsidian Forged’s Dagger of Silence",
        description: "Crafted from the obsidian found within the depths of Mount Tianmen, this dagger possesses an unnerving stillness. Upon striking a target, it generates a field of absolute silence, momentarily nullifying sound and disrupting magical effects – ideal for stealthy assassins or strategic combat maneuvers.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🤫',
        stock: 12,
        rarity: 'rare',
        stockType: 'night_only',
        effects: [
            "deals physical damage with a chance to bleed",
            "silences magical effects for 3 seconds",
            "increases stealth effectiveness",
            "chance to inflict 'Muted' status (reduces enemy attack)"
        ],
        vendor: 'liyue_harbor',
        shippedBy: 'sea_cargo',
        levelRequirement: 40
    },

    'teyvat_item_curiosity_chronometer_of_inazuma': {
        id: 'teyvat_item_curiosity_chronometer_of_inazuma',
        name: "Curiosity Chronometer of Inazuma",
        description: "A beautifully crafted hourglass filled with iridescent sands harvested from the beaches of Inazuma. This curious device doesn't measure time in standard units; instead, it shifts perceptions – briefly altering the flow of combat around its wielder, slowing down attacks or speeding up reactions. A treasured possession for collectors and those seeking a tactical advantage.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5500,
        icon: '⏳',
        stock: 9,
        rarity: 'uncommon',
        stockType: 'special_order',
        effects: [
            "temporarily slows enemy attack speed by 20%",
            "increases user's reaction time for 4 seconds",
            "creates a brief distortion field around the user, blurring their movements",
            "chance to briefly phase out of combat."
        ],
        vendor: 'inazuma_imports',
        shippedBy: 'windborne_scroll',
        levelRequirement: 30
    }
};
