// ============================================
// WARIO'S WAREHOUSE — VENDOR REGISTRY
// "I only work with the BEST... and cheapest." -W
// ============================================

export const VENDORS = {
    'toad_town_market': {
        id: 'toad_town_market',
        name: 'Toad Town Market',
        location: 'Toad Town Central Plaza',
        reputation: 'neutral',
        shippingMethods: ['standard', 'express'],
        icon: '🏪',
        description: 'The heart of Mushroom Kingdom commerce. Legitimate goods only.',
        markup: 1.0,
        trustLevel: 75,
        warioComment: "Bah! Too many rules. But their garlic bread is decent."
    },
    'rogueport_black_market': {
        id: 'rogueport_black_market',
        name: 'Rogueport Black Market',
        location: 'Rogueport Sewers, Third Pipe Left',
        reputation: 'underground',
        shippingMethods: ['stealth', 'warp'],
        icon: '🦝',
        description: 'No receipts. No refunds. No witnesses.',
        warning: 'Iron Legion actively monitors this vendor',
        markup: 0.7,
        trustLevel: 30,
        warioComment: "WAH! My kind of place! No taxes, no questions!"
    },
    'gilded_gryphon': {
        id: 'gilded_gryphon',
        name: 'Gilded Gryphon Armory',
        location: 'Capital District, Mercenary Quarter',
        reputation: 'professional',
        shippingMethods: ['express', 'military'],
        icon: '🦅',
        description: 'Premium equipment for professional adventurers.',
        markup: 1.5,
        trustLevel: 90,
        warioComment: "Too expensive! But Wario respects the hustle."
    },
    'shamans_hut': {
        id: 'shamans_hut',
        name: "Shaman's Hut",
        location: 'Dry Dry Outpost',
        reputation: 'mystical',
        shippingMethods: ['standard', 'warp'],
        icon: '🏚️',
        description: 'Ancient remedies and questionable ethics.',
        markup: 1.1,
        trustLevel: 55,
        warioComment: "Smells worse than Wario's gym socks. I love it."
    },
    'comet_observatory': {
        id: 'comet_observatory',
        name: 'Comet Observatory Gift Shop',
        location: 'Orbiting the Planet',
        reputation: 'celestial',
        shippingMethods: ['warp'],
        icon: '🌟',
        description: 'Cosmic wonders from beyond the stars.',
        markup: 2.0,
        trustLevel: 95,
        warioComment: "Overpriced space junk! ...Wario wants everything in it."
    },
    'valley_trading_post': {
        id: 'valley_trading_post',
        name: 'Valley of Bowser Trading Post',
        location: 'Koopa Kingdom Border',
        reputation: 'koopa',
        shippingMethods: ['military', 'stealth'],
        icon: '🐢',
        description: 'Koopa-made quality. Suspiciously affordable.',
        markup: 0.8,
        trustLevel: 45,
        warioComment: "Bowser's rejects are Wario's bargains! WAH HA HA!"
    },
    'rakasha_grounds': {
        id: 'rakasha_grounds',
        name: 'Rakasha Tribal Grounds',
        location: 'Deep Wilderlands',
        reputation: 'tribal',
        shippingMethods: ['stealth'],
        icon: '🐯',
        description: 'Spirit-touched goods. Thornpaw-approved.',
        requirement: 'Requires Rakasha Alliance',
        markup: 1.2,
        trustLevel: 70,
        warioComment: "Wario once arm-wrestled a Rakasha. Wario won. OBVIOUSLY."
    },
    'faction_quartermaster': {
        id: 'faction_quartermaster',
        name: 'Liberated Toads Quartermaster',
        location: 'The Vigilance / Current Base',
        reputation: 'allied',
        shippingMethods: ['standard'],
        icon: '🍄',
        description: 'Internal faction supply. Members only.',
        requirement: 'Liberated Toads Membership',
        markup: 0.9,
        trustLevel: 85,
        warioComment: "Mushroom people giving discounts? Wario approves!"
    },
    'onyx_hand': {
        id: 'onyx_hand',
        name: 'Onyx Hand Broker',
        location: 'CLASSIFIED',
        reputation: 'criminal',
        shippingMethods: ['stealth', 'warp'],
        icon: '🖐️',
        description: 'The vampire syndicate deals in favors, not gold.',
        warning: 'Illegal under Supernatural Sovereignty Act',
        markup: 0.6,
        trustLevel: 15,
        warioComment: "Even Wario thinks these guys are shady. Wario LOVES it."
    },
    'wario_direct': {
        id: 'wario_direct',
        name: 'Wario Direct Sales',
        location: 'Wherever Wario Is',
        reputation: 'chaotic',
        shippingMethods: ['express', 'military', 'wario_catapult'],
        icon: '💰',
        description: "WAH! You want it? Wario's got it! Premium quality* goods at Wario-approved prices!",
        markup: 3.0,
        trustLevel: 50,
        warioComment: "THE BEST VENDOR! OBVIOUSLY! WAH HA HA HA!",
        specialPerks: ['wario_guarantee', 'garlic_bonus', 'mystery_item_chance'],
        disclaimer: '*Quality not guaranteed. All sales final. Wario is not responsible for explosions, curses, dimensional rifts, or garlic breath.'
    },
    'hole_hawker': {
        id: 'hole_hawker',
        name: 'The Hole Hawker',
        location: 'Between Dimensions',
        reputation: 'enigmatic',
        shippingMethods: ['warp', 'dimensional_rift'],
        icon: '🕳️',
        description: 'Sells things that fell through the cracks of reality.',
        markup: 1.3,
        trustLevel: 40,
        warioComment: "This guy creeps Wario out. But his prices are... acceptable."
    },
    'garlic_guild': {
        id: 'garlic_guild',
        name: "Wario's Garlic Guild",
        location: "Wario's Castle, Basement Level 3",
        reputation: 'legendary',
        shippingMethods: ['express', 'wario_catapult'],
        icon: '🧄',
        description: "The finest garlic products in ALL dimensions. Founded, owned, and operated by the great WARIO himself!",
        markup: 2.5,
        trustLevel: 100,
        warioComment: "PERFECTION! Just like Wario! Buy garlic or GET OUT!",
        specialPerks: ['garlic_lovers_discount', 'wario_signed_receipt', 'free_garlic_sample']
    }
};
