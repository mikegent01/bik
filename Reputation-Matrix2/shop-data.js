// shop-data.js - Wario's Warehouse XP Emporium
// Rebalanced for Level 6 players with 25,000 XP pool

export const SHOP_CATEGORIES = {
    CONSUMABLES: 'consumables',
    EQUIPMENT: 'equipment',
    CURIOSITIES: 'curiosities',
    SERVICES: 'services',
    FACTION: 'faction',
    FORBIDDEN: 'forbidden',
    PREMIUM: 'premium'
};

export const SHIPPING_METHODS = {
    STANDARD: {
        id: 'standard',
        name: 'Standard Courier',
        description: 'Delivered by Parakarry postal service',
        deliveryTime: '3-5 days',
        cost: 0,
        icon: '📬'
    },
    EXPRESS: {
        id: 'express',
        name: 'Lakitu Express',
        description: 'Cloud-based rapid delivery',
        deliveryTime: '1-2 days',
        cost: 500,
        icon: '☁️'
    },
    WARP: {
        id: 'warp',
        name: 'Warp Pipe Direct',
        description: 'Instant delivery via pipe network',
        deliveryTime: 'Instant',
        cost: 1500,
        icon: '🟢'
    },
    STEALTH: {
        id: 'stealth',
        name: 'Shy Guy Smuggling',
        description: 'Untraceable delivery, no questions asked',
        deliveryTime: '2-4 days',
        cost: 2000,
        icon: '🎭'
    },
    MILITARY: {
        id: 'military',
        name: 'Koopa Troop Airlift',
        description: 'Armed escort, guaranteed delivery',
        deliveryTime: '1 day',
        cost: 3000,
        icon: '🚁'
    }
};

export const VENDORS = {
    'toad_town_market': {
        id: 'toad_town_market',
        name: 'Toad Town Market',
        location: 'Toad Town Central Plaza',
        reputation: 'neutral',
        shippingMethods: ['standard', 'express'],
        icon: '🏪',
        description: 'The heart of Mushroom Kingdom commerce. Legitimate goods only.'
    },
    'rogueport_black_market': {
        id: 'rogueport_black_market',
        name: 'Rogueport Black Market',
        location: 'Rogueport Sewers, Third Pipe Left',
        reputation: 'underground',
        shippingMethods: ['stealth', 'warp'],
        icon: '🦝',
        description: 'No receipts. No refunds. No witnesses.',
        warning: 'Iron Legion actively monitors this vendor'
    },
    'gilded_gryphon': {
        id: 'gilded_gryphon',
        name: 'Gilded Gryphon Armory',
        location: 'Capital District, Mercenary Quarter',
        reputation: 'professional',
        shippingMethods: ['express', 'military'],
        icon: '🦅',
        description: 'Premium equipment for professional adventurers.'
    },
    'shamans_hut': {
        id: 'shamans_hut',
        name: "Shaman's Hut",
        location: 'Dry Dry Outpost',
        reputation: 'mystical',
        shippingMethods: ['standard', 'warp'],
        icon: '🏚️',
        description: 'Ancient remedies and questionable ethics.'
    },
    'comet_observatory': {
        id: 'comet_observatory',
        name: 'Comet Observatory Gift Shop',
        location: 'Orbiting the Planet',
        reputation: 'celestial',
        shippingMethods: ['warp'],
        icon: '🌟',
        description: 'Cosmic wonders from beyond the stars.'
    },
    'valley_trading_post': {
        id: 'valley_trading_post',
        name: 'Valley of Bowser Trading Post',
        location: 'Koopa Kingdom Border',
        reputation: 'koopa',
        shippingMethods: ['military', 'stealth'],
        icon: '🐢',
        description: 'Koopa-made quality. Suspiciously affordable.'
    },
    'rakasha_grounds': {
        id: 'rakasha_grounds',
        name: 'Rakasha Tribal Grounds',
        location: 'Deep Wilderlands',
        reputation: 'tribal',
        shippingMethods: ['stealth'],
        icon: '🐯',
        description: 'Spirit-touched goods. Thornpaw-approved.',
        requirement: 'Requires Rakasha Alliance'
    },
    'faction_quartermaster': {
        id: 'faction_quartermaster',
        name: 'Liberated Toads Quartermaster',
        location: 'The Vigilance / Current Base',
        reputation: 'allied',
        shippingMethods: ['standard'],
        icon: '🍄',
        description: 'Internal faction supply. Members only.',
        requirement: 'Liberated Toads Membership'
    },
    'onyx_hand': {
        id: 'onyx_hand',
        name: 'Onyx Hand Broker',
        location: 'CLASSIFIED',
        reputation: 'criminal',
        shippingMethods: ['stealth', 'warp'],
        icon: '🖐️',
        description: 'The vampire syndicate deals in favors, not gold.',
        warning: 'Illegal under Supernatural Sovereignty Act'
    },
    'wario_direct': {
        id: 'wario_direct',
        name: 'Wario Direct Sales',
        location: 'Wherever Wario Is',
        reputation: 'chaotic',
        shippingMethods: ['express', 'military'],
        icon: '💰',
        description: 'WAH! You want it? Wario\'s got it!'
    }
};


export const SHOP_ITEMS = {
    
    // ============================================
    // === BARGAIN BIN (50 - 800 XP) ===
    // ============================================
    // ============================================
    // === FACTION UPGRADES (FLAVOR & UTILITY) ===
    // ============================================

    'faction_coffee_machine': {
        id: 'faction_coffee_machine',
        name: "Industrial Coffee Machine",
        description: "High-grade caffeine supply. Essential for the Chroniclers and late-night guard duty.",
        category: SHOP_CATEGORIES.FACTION,
        price: 300,
        icon: '☕',
        stock: 1,
        rarity: 'common',
        effects: ["Reduces exhaustion recovery time", "Keeps Scribe Dewdrop happy"],
        vendor: 'faction_quartermaster',
        factionBonus: { morale: 2 }
    },
    'faction_uno_deck': {
        id: 'faction_uno_deck',
        name: "Tournament Card Deck",
        description: "A simple card game to pass the time. Causes arguments, but builds camaraderie.",
        category: SHOP_CATEGORIES.FACTION,
        price: 150,
        icon: '🃏',
        stock: 5,
        rarity: 'common',
        effects: ["+1 Morale", "Risk of minor fistfights"],
        vendor: 'faction_quartermaster',
        factionBonus: { morale: 1 }
    },
    'faction_bunk_beds': {
        id: 'faction_bunk_beds',
        name: "Reinforced Bunk Beds",
        description: "Actual beds instead of hammocks. Improves sleep quality significantly.",
        category: SHOP_CATEGORIES.FACTION,
        price: 2500,
        icon: '🛏️',
        stock: 1,
        rarity: 'uncommon',
        effects: ["Toads recover HP faster during long rests", "Reduces crankiness"],
        vendor: 'faction_quartermaster',
        factionBonus: { morale: 5, combatReadiness: 2 }
    },
    'faction_flags': {
        id: 'faction_flags',
        name: "Faction Banners",
        description: "Heraldry displaying the Liberated Toad crest. Makes the base feel like home.",
        category: SHOP_CATEGORIES.FACTION,
        price: 400,
        icon: '🚩',
        stock: 1,
        rarity: 'common',
        effects: ["+2 Loyalty", "Looks cool in cutscenes"],
        vendor: 'faction_quartermaster',
        factionBonus: { loyalty: 2 }
    },
    'faction_training_dummies': {
        id: 'faction_training_dummies',
        name: "Training Dummies",
        description: "Straw targets painted to look like Iron Legionnaires.",
        category: SHOP_CATEGORIES.FACTION,
        price: 1200,
        icon: '🤺',
        stock: 1,
        rarity: 'common',
        effects: ["+5% Combat Readiness", "Militia levels up slightly faster"],
        vendor: 'faction_quartermaster',
        factionBonus: { combatReadiness: 5 }
    },
    'faction_ink_supplies': {
        id: 'faction_ink_supplies',
        name: "Premium Ink Supplies",
        description: "Quality ink and parchment for the Chroniclers. No more writing on napkins.",
        category: SHOP_CATEGORIES.FACTION,
        price: 800,
        icon: '✒️',
        stock: 1,
        rarity: 'common',
        effects: ["Improves Intelligence reports", "Preserves history"],
        vendor: 'faction_quartermaster',
        factionBonus: { intelligence: 3 }
    },
    'faction_spare_parts': {
        id: 'faction_spare_parts',
        name: "Crate of Spare Wrenches",
        description: "Forgemaster Ironspore always needs more tools. Things break often.",
        category: SHOP_CATEGORIES.FACTION,
        price: 1500,
        icon: '🔧',
        stock: 3,
        rarity: 'common',
        effects: ["Ship repairs are 10% faster"],
        vendor: 'faction_quartermaster',
        factionBonus: { mobility: 4 }
    },
    'faction_extra_rations': {
        id: 'faction_extra_rations',
        name: "Emergency Rations",
        description: "Dried mushrooms and hardtack. Tastes like dust, keeps you alive.",
        category: SHOP_CATEGORIES.FACTION,
        price: 2000,
        icon: '🥫',
        stock: 5,
        rarity: 'common',
        effects: ["Prevents starvation during sieges"],
        vendor: 'faction_quartermaster',
        factionBonus: { morale: 3, defense: 2 }
    },
    'faction_therapy_dog': {
        id: 'faction_therapy_dog',
        name: "Support Chain Chomp",
        description: "A small, domesticated Chain Chomp pup. Very affectionate. Helps with trauma.",
        category: SHOP_CATEGORIES.FACTION,
        price: 3500,
        icon: '🐕',
        stock: 1,
        rarity: 'rare',
        effects: ["Major boost to Barrel Survivor recovery", "Also guards the door"],
        vendor: 'rakasha_grounds',
        factionBonus: { morale: 10, medicalCapacity: 5 }
    },
    'faction_signal_flares': {
        id: 'faction_signal_flares',
        name: "Magical Signal Flares",
        description: "Launch into the sky to coordinate squads or call for help.",
        category: SHOP_CATEGORIES.FACTION,
        price: 1000,
        icon: '🎆',
        stock: 5,
        rarity: 'common',
        effects: ["Scouts operate more safely", "+2 Coordination"],
        vendor: 'rogueport_black_market',
        factionBonus: { operations: 5 }
    },

    // ============================================
    // === FACTION UPGRADES (MAJOR - 4,000 - 9,000 XP) ===
    // ============================================

    'faction_forge_upgrade': {
        id: 'faction_forge_upgrade',
        name: "Blast Furnace Upgrade",
        description: "Upgrades the crafters' workshop to handle magical alloys.",
        category: SHOP_CATEGORIES.FACTION,
        price: 4500,
        icon: '🔥',
        stock: 1,
        rarity: 'uncommon',
        effects: ["Can repair heavy armor", "Produces better weapons for cohorts"],
        vendor: 'gilded_gryphon',
        factionBonus: { combatReadiness: 8, defense: 5 }
    },
    'faction_med_bay': {
        id: 'faction_med_bay',
        name: "Field Hospital Expansion",
        description: "Proper sterile equipment and more cots for the Menders.",
        category: SHOP_CATEGORIES.FACTION,
        price: 6000,
        icon: '🏥',
        stock: 1,
        rarity: 'rare',
        effects: ["Doubles patient capacity", "Reduces fatality rate of Critical wounds"],
        vendor: 'shamans_hut',
        factionBonus: { medicalCapacity: 25, morale: 5 }
    },
    'faction_patrol_radios': {
        id: 'faction_patrol_radios',
        name: "Sending Stone Network",
        description: "Instant communication between squad leaders. No more shouting.",
        category: SHOP_CATEGORIES.FACTION,
        price: 5500,
        icon: '📻',
        stock: 1,
        rarity: 'rare',
        effects: ["Pond Patrol reaction time halved", "Coordinate ambushes"],
        vendor: 'gilded_gryphon',
        factionBonus: { intelligence: 10, operations: 10 }
    },
    'faction_propaganda_press': {
        id: 'faction_propaganda_press',
        name: "The 'Free Croak' Press",
        description: "A printing press to spread the message of liberation.",
        category: SHOP_CATEGORIES.FACTION,
        price: 4000,
        icon: '📰',
        stock: 1,
        rarity: 'uncommon',
        effects: ["Increases recruitment", "Boosts Loyalty significantly"],
        vendor: 'rogueport_black_market',
        factionBonus: { loyalty: 15, diplomacy: 5 }
    },
    'faction_scout_cloaks': {
        id: 'faction_scout_cloaks',
        name: "Camo-Cloaks",
        description: "Elven-made cloaks for the Scout cohort. Harder to spot in forests.",
        category: SHOP_CATEGORIES.FACTION,
        price: 5000,
        icon: '🧥',
        stock: 1,
        rarity: 'uncommon',
        effects: ["Scouts gain Advantage on Stealth", "Reduces scout casualties"],
        vendor: 'rakasha_grounds',
        factionBonus: { intelligence: 15 }
    },
    'faction_veteran_sergeants': {
        id: 'faction_veteran_sergeants',
        name: "Veteran Sergeant Training",
        description: "Hire mercenaries to train the squad leaders in advanced tactics.",
        category: SHOP_CATEGORIES.FACTION,
        price: 7500,
        icon: '🎖️',
        stock: 1,
        rarity: 'rare',
        effects: ["+2 Level to all Cohort Leaders", "Unlocks 'Squad Tactics'"],
        vendor: 'gilded_gryphon',
        factionBonus: { combatReadiness: 15, leadership: 10 }
    },
    'faction_barricades': {
        id: 'faction_barricades',
        name: "Deployable Barricades",
        description: "Heavy cover that can be set up in minutes. Wardens love them.",
        category: SHOP_CATEGORIES.FACTION,
        price: 4200,
        icon: '🚧',
        stock: 1,
        rarity: 'common',
        effects: ["Increases base defense rating", "Provides cover in camp battles"],
        vendor: 'valley_trading_post',
        factionBonus: { defense: 12 }
    },
    'faction_diplomatic_envoys': {
        id: 'faction_diplomatic_envoys',
        name: "Diplomatic Envoys",
        description: "Proper attire and gifts for establishing relations with other factions.",
        category: SHOP_CATEGORIES.FACTION,
        price: 6500,
        icon: '🤝',
        stock: 1,
        rarity: 'rare',
        effects: ["Opens trade routes", "Reduces hostility with neutral factions"],
        vendor: 'toad_town_market',
        factionBonus: { diplomacy: 20 }
    },
    'faction_library': {
        id: 'faction_library',
        name: "Archive Expansion",
        description: "Shelves, locking cabinets, and map tables for the Chroniclers.",
        category: SHOP_CATEGORIES.FACTION,
        price: 3000,
        icon: '📚',
        stock: 1,
        rarity: 'uncommon',
        effects: ["Better intel analysis", "Can research enemy weaknesses"],
        vendor: 'toad_town_market',
        factionBonus: { intelligence: 8 }
    },
    'faction_herbal_garden': {
        id: 'faction_herbal_garden',
        name: "Hydroponic Garden",
        description: "Grow healing herbs directly on the ship. Fresh and potent.",
        category: SHOP_CATEGORIES.FACTION,
        price: 3200,
        icon: '🌿',
        stock: 1,
        rarity: 'uncommon',
        effects: ["Daily supply of basic potions", "Self-sufficiency"],
        vendor: 'shamans_hut',
        factionBonus: { medicalCapacity: 10, economy: 5 }
    },

    // ============================================
    // === FACTION UPGRADES (GAME CHANGERS - 10,000+ XP) ===
    // ============================================

    'faction_safe_house_network': {
        id: 'faction_safe_house_network',
        name: "Underground Railroad",
        description: "A network of safe houses across the Mushroom Kingdom.",
        category: SHOP_CATEGORIES.FACTION,
        price: 12000,
        icon: '🏠',
        stock: 1,
        rarity: 'legendary',
        effects: ["MIA toads have 50% chance to return safely", "Fast travel between cities safely"],
        vendor: 'rogueport_black_market',
        factionBonus: { operations: 25, defense: 10 }
    },
    'faction_siege_weapons': {
        id: 'faction_siege_weapons',
        name: "Bob-omb Cannons",
        description: "Heavy artillery for the Vigilance or base defense. Explosive results.",
        category: SHOP_CATEGORIES.FACTION,
        price: 11000,
        icon: '💣',
        stock: 2,
        rarity: 'rare',
        effects: ["Massive damage to enemy structures/groups", "Intimidation factor"],
        vendor: 'valley_trading_post',
        factionBonus: { combatReadiness: 20, defense: 15 }
    },
    'faction_spy_network': {
        id: 'faction_spy_network',
        name: "The Whisper Network",
        description: "Informants in every major tavern from Toad Town to Rogueport.",
        category: SHOP_CATEGORIES.FACTION,
        price: 10000,
        icon: '👁️',
        stock: 1,
        rarity: 'legendary',
        effects: ["Know enemy movements 1 day in advance", "Reveal traitor plots"],
        vendor: 'rogueport_black_market',
        factionBonus: { intelligence: 40 }
    },
    'faction_engine_tuneup': {
        id: 'faction_engine_tuneup',
        name: "Turbo-Charged Engines",
        description: "Experimental engine parts from E. Gadd's scrapyard.",
        category: SHOP_CATEGORIES.FACTION,
        price: 9000,
        icon: '🚀',
        stock: 1,
        rarity: 'rare',
        effects: ["Airship travel time reduced by 50%", "Can outrun Imperial Cruisers"],
        vendor: 'gilded_gryphon',
        factionBonus: { mobility: 25 }
    },
    'faction_red_button': {
        id: 'faction_red_button',
        name: "The 'Big Red Button'",
        description: "Emergency self-destruct/defense system. Hopefully we never use it.",
        category: SHOP_CATEGORIES.FACTION,
        price: 15000,
        icon: '🚨',
        stock: 1,
        rarity: 'legendary',
        effects: ["Last resort measure", "Massive AoE damage around base", "Destroys base"],
        vendor: 'wario_direct',
        factionBonus: { defense: 50 } // deterrent
    },
    'faction_speaker_podium': {
        id: 'faction_speaker_podium',
        name: "Enchanted Podium",
        description: "Amplifies the Speaker's voice to reach every ear, friend or foe.",
        category: SHOP_CATEGORIES.FACTION,
        price: 1000,
        icon: '🎤',
        stock: 1,
        rarity: 'uncommon',
        effects: ["Speaker L's abilities range tripled", "Rallies troops instantly"],
        vendor: 'shamans_hut',
        factionBonus: { leadership: 15, morale: 5 }
    },
    'faction_magic_academy': {
        id: 'faction_magic_academy',
        name: "Field Arcane Academy",
        description: "Training grounds for aspiring mage-toads. Ryan would be proud.",
        category: SHOP_CATEGORIES.FACTION,
        price: 13000,
        icon: '✨',
        stock: 1,
        rarity: 'legendary',
        effects: ["Unlocks 'Mage' class for recruits", "Magical defense barrier"],
        vendor: 'shamans_hut',
        factionBonus: { combatReadiness: 10, intelligence: 10 }
    },
    'faction_scavenger_teams': {
        id: 'faction_scavenger_teams',
        name: "Dedicated Scavengers",
        description: "Teams equipped specifically to find loot and resources.",
        category: SHOP_CATEGORIES.FACTION,
        price: 7000,
        icon: '🎒',
        stock: 1,
        rarity: 'rare',
        effects: ["Passive income: Generates supplies/XP weekly", "Finds rare items"],
        vendor: 'rogueport_black_market',
        factionBonus: { economy: 20 }
    },
    'faction_gym': {
        id: 'faction_gym',
        name: "The 'Iron Toad' Gym",
        description: "Weights, treadmills, and protein shakes.",
        category: SHOP_CATEGORIES.FACTION,
        price: 2800,
        icon: '💪',
        stock: 1,
        rarity: 'common',
        effects: ["+1 STR/CON to active duty toads over time", "Morale boost"],
        vendor: 'toad_town_market',
        factionBonus: { combatReadiness: 8, morale: 5 }
    },
    'faction_memorial': {
        id: 'faction_memorial',
        name: "Wall of the Fallen",
        description: "A beautiful stone monument to remember those we lost.",
        category: SHOP_CATEGORIES.FACTION,
        price: 500,
        icon: '🕯️',
        stock: 1,
        rarity: 'common',
        effects: ["Major Morale stabilization (grief recovery)", "Remember the fallen"],
        vendor: 'faction_quartermaster',
        factionBonus: { morale: 10, loyalty: 10 }
    },
// ============================================
    // === BARGAIN BIN (TRASH & JUNK) ===
    // ============================================

    'bag_of_confetti': {
        id: 'bag_of_confetti',
        name: "Bag of Confetti",
        description: "A small bag of paper confetti. Use to fill holes in the world, or just make a mess.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 100,
        icon: '🎊',
        stock: 50,
        rarity: 'common',
        effects: ["Throw to obscure vision slightly", "Great for parties", "Environmentally biodegradable"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },
    'old_boot': {
        id: 'old_boot',
        name: "Old Boot",
        description: "Fished out of a pond. Has a hole in the sole. Why are you buying this?",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 25,
        icon: '🥾',
        stock: 10,
        rarity: 'junk',
        effects: ["Functions as a club (1d4 damage)", "Charisma -1 while holding"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Garbage Chute',
        levelRequirement: 1
    },
    'stickers_star': {
        id: 'stickers_star',
        name: "Book of Stickers",
        description: "A collection of shiny stickers. They don't do anything magical, they just look nice.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 200,
        icon: '⭐',
        stock: 20,
        rarity: 'common',
        effects: ["Stick them on things", "Feel a sense of childlike wonder"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },
    'jar_of_dirt': {
        id: 'jar_of_dirt',
        name: "Jar of Dirt",
        description: "It is a jar. It is full of dirt. Don't ask where the dirt came from.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 50,
        icon: '🏺',
        stock: 100,
        rarity: 'common',
        effects: ["It is dirt", "Can be thrown to blind target (DEX save DC 10)"],
        vendor: 'wario_direct',
        shippedBy: 'Bulk Shipping',
        levelRequirement: 1
    },
    'broken_glass': {
        id: 'broken_glass',
        name: "Shard of Glass",
        description: "Sharp. Dangerous. Not a weapon, just trash.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 10,
        icon: '🧊',
        stock: 50,
        rarity: 'junk',
        effects: ["1 damage if you hold it too tight"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Careless Courier',
        levelRequirement: 1
    },
    'waluigi_doll': {
        id: 'waluigi_doll',
        name: "Bootleg Waluigi Doll",
        description: "A plush doll that looks vaguely like Waluigi, but the nose is wrong. Squeaks when hugged.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 500,
        icon: '💜',
        stock: 15,
        rarity: 'common',
        effects: ["Squeaks loudly", "May annoy Wario"],
        vendor: 'wario_direct',
        shippedBy: 'Purple Box',
        levelRequirement: 1
    },
    'fake_mustache': {
        id: 'fake_mustache',
        name: "Fake Mustache",
        description: "A clip-on mustache. Makes you look heroic or villainous, depending on the angle.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 300,
        icon: '〰️',
        stock: 20,
        rarity: 'common',
        effects: ["+1 to Deception checks", "Falls off if you take damage"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },
    'banana_peel': {
        id: 'banana_peel',
        name: "Used Banana Peel",
        description: "Nature's perfect trap. Biodegradable hazard.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 100,
        icon: '🍌',
        stock: 30,
        rarity: 'common',
        effects: ["Place on ground (action)", "Anyone stepping on it makes DEX save DC 12 or falls prone"],
        vendor: 'valley_trading_post',
        shippedBy: 'Compost Express',
        levelRequirement: 1
    },
    'empty_can': {
        id: 'empty_can',
        name: "Empty Soda Can",
        description: "Someone drank the Chuckola Cola. This is what's left.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 15,
        icon: '🥤',
        stock: 99,
        rarity: 'junk',
        effects: ["Can be kicked for entertainment"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Recycling Not Included',
        levelRequirement: 1
    },
    'pet_rock_awkward': {
        id: 'pet_rock_awkward',
        name: "Awkward Pet Rock",
        description: "A rock with googly eyes glued on. You feel judged by it.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 400,
        icon: '🪨',
        stock: 10,
        rarity: 'common',
        effects: ["It stares at you", "Emotional support (maybe)"],
        vendor: 'toad_town_market',
        shippedBy: 'Heavy Box',
        levelRequirement: 1
    },

    // ============================================
    // === CONSUMABLES & POTIONS ===
    // ============================================

    'super_soda': {
        id: 'super_soda',
        name: "Super Soda",
        description: "A fizzy blue drink that cures ailments. Guaranteed to make you burp.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🥤',
        stock: 15,
        rarity: 'uncommon',
        effects: ["Cures Poison, Blindness, and Deafness", "Restores 1d4 HP"],
        vendor: 'toad_town_market',
        shippedBy: 'Liquid Container',
        levelRequirement: 2
    },
    'tasty_tonic': {
        id: 'tasty_tonic',
        name: "Tasty Tonic",
        description: "A delicious herbal tea. Soothes the nerves and the stomach.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1500,
        icon: '🍵',
        stock: 12,
        rarity: 'uncommon',
        effects: ["Removes Poison and Shrink effects", "Restores 1d8 HP"],
        vendor: 'shamans_hut',
        shippedBy: 'Fragile Container',
        levelRequirement: 2
    },
    'hot_shroom': {
        id: 'hot_shroom',
        name: "Hot Shroom",
        description: "A spicy mushroom that wakes you up. Not for the faint of heart.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 2000,
        icon: '🌶️',
        stock: 10,
        rarity: 'uncommon',
        effects: ["Restores 10 HP", "Grants 'Enraged' for 1 min (+2 dmg, -2 AC)"],
        vendor: 'gilded_gryphon',
        shippedBy: 'Insulated Box',
        levelRequirement: 3
    },
    'apple_red': {
        id: 'apple_red',
        name: "Red Apple",
        description: "A simple, crisp apple. Keeps the doctor away (if thrown hard enough).",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 500,
        icon: '🍎',
        stock: 25,
        rarity: 'common',
        effects: ["Restores 5 HP"],
        vendor: 'toad_town_market',
        shippedBy: 'Fruit Crate',
        levelRequirement: 1
    },
    'chuckola_cola': {
        id: 'chuckola_cola',
        name: "Chuckola Cola",
        description: "A vintage soda from the Beanbean Kingdom. Aged in barrels. Jokes aside, it's strong.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3500,
        icon: '🍷',
        stock: 5,
        rarity: 'rare',
        effects: ["Action: Restore 2 spell slots (up to lvl 3)", "Bonus Action: Tell a bad joke"],
        vendor: 'shamans_hut',
        shippedBy: 'Glass Bottle Service',
        levelRequirement: 4
    },
    'fright_mask': {
        id: 'fright_mask',
        name: "Fright Mask",
        description: "A scary mask that summons a spectral visage. Boo!",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1500,
        icon: '👺',
        stock: 8,
        rarity: 'uncommon',
        effects: ["Action: All enemies in 15ft must make WIS save DC 13 or become Frightened"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Spooky Box',
        levelRequirement: 2
    },
    'snowman_doll': {
        id: 'snowman_doll',
        name: "Snowman Doll",
        description: "A cute doll that radiates intense cold. Shatters on impact.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 2200,
        icon: '⛄',
        stock: 6,
        rarity: 'uncommon',
        effects: ["Thrown (30ft)", "15ft radius: 3d6 Cold damage", "CON save DC 13 for half"],
        vendor: 'shamans_hut',
        shippedBy: 'Freezer Bag',
        levelRequirement: 3
    },
    'thunder_rage': {
        id: 'thunder_rage',
        name: "Thunder Rage",
        description: "Concentrated storm in a bottle. Shake vigorously and throw.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 2800,
        icon: '⚡',
        stock: 5,
        rarity: 'uncommon',
        effects: ["All enemies within 20ft take 4d6 Lightning damage", "DEX save DC 14 for half"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Rubber-Lined Box',
        levelRequirement: 4
    },
    'shooting_star': {
        id: 'shooting_star',
        name: "Shooting Star",
        description: "A star that fell from the sky. Release its energy to bombard enemies.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 4500,
        icon: '🌠',
        stock: 3,
        rarity: 'rare',
        effects: ["All enemies in sight take 4d8 Radiant damage", "No friendly fire"],
        vendor: 'comet_observatory',
        shippedBy: 'Cosmic Mail',
        levelRequirement: 5
    },
    'repel_gel': {
        id: 'repel_gel',
        name: "Repel Gel",
        description: "A ghostly slime that makes you intangible for a moment.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3000,
        icon: '👻',
        stock: 4,
        rarity: 'rare',
        effects: ["Gain 'Etherealness' until the start of your next turn", "Cannot attack while active"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Ectoplasm Container',
        levelRequirement: 4
    },
    'maple_super': {
        id: 'maple_super',
        name: "Maple Super",
        description: "A mixture of Maple Syrup and a Super Mushroom. Breakfast of champions.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 4000,
        icon: '🥞',
        stock: 5,
        rarity: 'rare',
        effects: ["Restore 20 HP and one 2nd level spell slot"],
        vendor: 'toad_town_market',
        shippedBy: 'Priority Mail',
        levelRequirement: 4
    },
    'jelly_super': {
        id: 'jelly_super',
        name: "Jelly Super",
        description: "Jammin' Jelly mixed with a Super Mushroom. Very sticky.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8000,
        icon: '🍮',
        stock: 2,
        rarity: 'rare',
        effects: ["Restore 40 HP and 20 MP (or two 3rd level slots)"],
        vendor: 'shamans_hut',
        shippedBy: 'Sealed Jar',
        levelRequirement: 6
    },
    'cake_mix': {
        id: 'cake_mix',
        name: "Cake Mix",
        description: "Essential for baking. Or eating raw if you have no shame.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 200,
        icon: '🥡',
        stock: 20,
        rarity: 'common',
        effects: ["Restores 1 HP", "Can be cooked by Zess T."],
        vendor: 'toad_town_market',
        shippedBy: 'Paper Bag',
        levelRequirement: 1
    },
    'spicy_soup': {
        id: 'spicy_soup',
        name: "Spicy Soup",
        description: "So hot it restores your fighting spirit.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '🍲',
        stock: 10,
        rarity: 'common',
        effects: ["Restores 4 HP and 4 MP (or one 1st level slot)"],
        vendor: 'shamans_hut',
        shippedBy: 'Thermos',
        levelRequirement: 2
    },
    'whacka_bump': {
        id: 'whacka_bump',
        name: "Whacka Bump",
        description: "A pastry that looks like a lump from a Whacka. Tastes like guilt.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 5000,
        icon: '🍩',
        stock: 2,
        rarity: 'rare',
        effects: ["Restores ALL HP and MP", "You feel like a terrible person"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Shameful Packaging',
        levelRequirement: 5
    },

    // ============================================
    // === BADGES & EQUIPMENT ===
    // ============================================

    'multibounce_badge': {
        id: 'multibounce_badge',
        name: "Multibounce Badge",
        description: "Allows you to jump on multiple enemies in a row. Leg muscles not included.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6000,
        icon: '👟',
        stock: 3,
        rarity: 'uncommon',
        effects: ["Unlocks 'Multibounce' action", "Attack one target, if successful, attack next adjacent target"],
        vendor: 'gilded_gryphon',
        shippedBy: 'Secure Mail',
        levelRequirement: 4
    },
    'power_smash_badge': {
        id: 'power_smash_badge',
        name: "Power Smash Badge",
        description: "Focus all your energy into one hammer strike.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5500,
        icon: '🔨',
        stock: 3,
        rarity: 'uncommon',
        effects: ["Action: -2 to hit, +5 to damage with bludgeoning weapons"],
        vendor: 'gilded_gryphon',
        shippedBy: 'Heavy Box',
        levelRequirement: 4
    },
    'ice_power_badge': {
        id: 'ice_power_badge',
        name: "Ice Power Badge",
        description: "Makes your attacks chilly. Good for fire enemies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '❄️',
        stock: 4,
        rarity: 'uncommon',
        effects: ["Your melee attacks deal Cold damage instead of physical", "+1 damage vs Fire enemies"],
        vendor: 'shamans_hut',
        shippedBy: 'Cold Box',
        levelRequirement: 3
    },
    'fire_shield_badge': {
        id: 'fire_shield_badge',
        name: "Fire Shield Badge",
        description: "A badge that reduces fire damage. Also useful for marshmallows.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🛡️',
        stock: 4,
        rarity: 'uncommon',
        effects: ["Resistance to Fire damage", "Cannot be frozen"],
        vendor: 'valley_trading_post',
        shippedBy: 'Standard Courier',
        levelRequirement: 3
    },
    'spike_helmet': {
        id: 'spike_helmet',
        name: "Spike Helmet",
        description: "A mining helmet with a spike on top. Don't headbutt your friends.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '⛑️',
        stock: 5,
        rarity: 'uncommon',
        effects: ["+1 AC", "Enemies that stomp or drop on you take 1d6 piercing"],
        vendor: 'gilded_gryphon',
        shippedBy: 'Hard Hat Case',
        levelRequirement: 2
    },
    'hp_plus_badge': {
        id: 'hp_plus_badge',
        name: "HP Plus Badge",
        description: "A heart-shaped badge that increases vitality.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '❤️',
        stock: 3,
        rarity: 'rare',
        effects: ["+5 Maximum HP while equipped", "Requires Attunement"],
        vendor: 'toad_town_market',
        shippedBy: 'Medical Supply',
        levelRequirement: 4
    },
    'fp_plus_badge': {
        id: 'fp_plus_badge',
        name: "FP Plus Badge",
        description: "A flower-shaped badge that increases magical capacity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🌸',
        stock: 3,
        rarity: 'rare',
        effects: ["+1 1st Level Spell Slot while equipped", "Requires Attunement"],
        vendor: 'shamans_hut',
        shippedBy: 'Mystic Mail',
        levelRequirement: 4
    },
    'peekaboo_badge': {
        id: 'peekaboo_badge',
        name: "Peekaboo Badge",
        description: "Allows you to see enemy health. Takes the mystery out of murder.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '👁️',
        stock: 5,
        rarity: 'common',
        effects: ["You always know the exact HP of enemies you can see"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Discreet Mail',
        levelRequirement: 2
    },
    'refund_badge': {
        id: 'refund_badge',
        name: "Refund Badge",
        description: "Get a little bit back when you use items. Corporate loyalty program.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5000,
        icon: '💰',
        stock: 2,
        rarity: 'rare',
        effects: ["Whenever you use a consumable, roll d20. On 15+, gain 50 XP refund"],
        vendor: 'wario_direct',
        shippedBy: 'Financial Statement',
        levelRequirement: 3
    },
    'zap_tap_badge': {
        id: 'zap_tap_badge',
        name: "Zap Tap Badge",
        description: "Electrifies your skin. Static shock on steroids.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '⚡',
        stock: 2,
        rarity: 'rare',
        effects: ["Enemies touching you take 1d4 Lightning damage", "Resistance to grappling"],
        vendor: 'shamans_hut',
        shippedBy: 'Insulated Box',
        levelRequirement: 5
    },
    'p_down_d_up_badge': {
        id: 'p_down_d_up_badge',
        name: "P-Down, D-Up Badge",
        description: "Lowers attack power, raises defense. Turtle strategy.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6000,
        icon: '🛡️',
        stock: 2,
        rarity: 'uncommon',
        effects: ["-2 to Damage rolls", "+2 AC"],
        vendor: 'gilded_gryphon',
        shippedBy: 'Heavy Mail',
        levelRequirement: 4
    },
    'p_up_d_down_badge': {
        id: 'p_up_d_down_badge',
        name: "P-Up, D-Down Badge",
        description: "Raises attack power, lowers defense. Berserker strategy.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6000,
        icon: '⚔️',
        stock: 2,
        rarity: 'uncommon',
        effects: ["+2 to Damage rolls", "-2 AC"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Aggressive Mail',
        levelRequirement: 4
    },
    'happy_heart_badge': {
        id: 'happy_heart_badge',
        name: "Happy Heart Badge",
        description: "Slowly restores health. A badge with a positive attitude.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 10000,
        icon: '💖',
        stock: 2,
        rarity: 'rare',
        effects: ["Regenerate 1 HP at the start of every turn during combat"],
        vendor: 'toad_town_market',
        shippedBy: 'Love Letter',
        levelRequirement: 5
    },
    'happy_flower_badge': {
        id: 'happy_flower_badge',
        name: "Happy Flower Badge",
        description: "Slowly restores magic. Photosynthesis included.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '🌻',
        stock: 2,
        rarity: 'rare',
        effects: ["Regenerate 1st level spell slot on d6 roll of 6 each turn"],
        vendor: 'shamans_hut',
        shippedBy: 'Potted Plant',
        levelRequirement: 5
    },
    'quake_hammer': {
        id: 'quake_hammer',
        name: "Quake Hammer",
        description: "A heavy hammer head designed to strike the ground.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7000,
        icon: '🌋',
        stock: 3,
        rarity: 'uncommon',
        effects: ["Action: Strike ground. All ground enemies in 10ft take 1d6 bludgeoning + Knock prone (STR save DC 13)"],
        vendor: 'gilded_gryphon',
        shippedBy: 'Reinforced Box',
        levelRequirement: 4
    },
    'spin_jump_boots': {
        id: 'spin_jump_boots',
        name: "Spin Jump Boots",
        description: "Boots with ball bearings in the soles. Drill through weak floors.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7000,
        icon: '🌪️',
        stock: 3,
        rarity: 'uncommon',
        effects: ["Advantage to break wooden floors", "Deal piercing damage on jump attacks"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 4
    },
    'slow_fall_pants': {
        id: 'slow_fall_pants',
        name: "Slow Fall Pants",
        description: "Very baggy trousers. They catch the wind like a parachute.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '👖',
        stock: 5,
        rarity: 'common',
        effects: ["Immune to fall damage", "Disadvantage on Stealth (they flap loudly)"],
        vendor: 'toad_town_market',
        shippedBy: 'Large Envelope',
        levelRequirement: 2
    },
    'first_attack_badge': {
        id: 'first_attack_badge',
        name: "First Attack Badge",
        description: "Strike first, ask questions later.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '👊',
        stock: 1,
        rarity: 'rare',
        effects: ["Advantage on Initiative rolls"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Priority Mail',
        levelRequirement: 5
    },
    'bumper_badge': {
        id: 'bumper_badge',
        name: "Bumper Badge",
        description: "Bounce enemies away when they touch you.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '🛑',
        stock: 3,
        rarity: 'uncommon',
        effects: ["Enemies that hit you with melee are pushed back 5ft"],
        vendor: 'valley_trading_post',
        shippedBy: 'Standard Courier',
        levelRequirement: 3
    },
    'double_dip_badge': {
        id: 'double_dip_badge',
        name: "Double Dip Badge",
        description: "Use two items in one turn. Gluttony is a virtue.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 9000,
        icon: '🥤',
        stock: 2,
        rarity: 'rare',
        effects: ["Can use 'Use Item' action twice in one turn"],
        vendor: 'wario_direct',
        shippedBy: 'Express Mail',
        levelRequirement: 5
    },

    // ============================================
    // === CURIOSITIES & COLLECTIBLES ===
    // ============================================

    'luigis_diary_key': {
        id: 'luigis_diary_key',
        name: "Key to Luigi's Diary",
        description: "A small key. The diary itself is hidden in Mario's basement. Full of secrets.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1000,
        icon: '🗝️',
        stock: 1,
        rarity: 'unique',
        effects: ["Unlocks a book you don't have", "The secrets are very mundane"],
        vendor: 'toad_town_market',
        shippedBy: 'Envelope',
        levelRequirement: 1
    },
    'autograph_luigi': {
        id: 'autograph_luigi',
        name: "Luigi's Autograph",
        description: "Signed in green ink. It says 'To my biggest fan!'",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 500,
        icon: '📝',
        stock: 10,
        rarity: 'common',
        effects: ["Worth less than Wario's autograph", "Sentimental value"],
        vendor: 'toad_town_market',
        shippedBy: 'Green Envelope',
        levelRequirement: 1
    },
    'cricket_jam': {
        id: 'cricket_jam',
        name: "Cricket Jam",
        description: "A jar of jam made from... crickets? No, it's just really noisy.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1500,
        icon: '🦗',
        stock: 5,
        rarity: 'uncommon',
        effects: ["Loud chirping noise when opened", "Can distract guards"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Noisy Box',
        levelRequirement: 2
    },
    'koopa_leaf': {
        id: 'koopa_leaf',
        name: "Koopa Leaf",
        description: "A leaf from Koopa Village. Makes a nice tea.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 300,
        icon: '🍃',
        stock: 20,
        rarity: 'common',
        effects: ["Restores 3 MP (or 1st level slot if cooked)", "Delicious"],
        vendor: 'valley_trading_post',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },
    'strange_sack': {
        id: 'strange_sack',
        name: "Strange Sack",
        description: "It's bigger on the inside. A little bit.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5000,
        icon: '🎒',
        stock: 2,
        rarity: 'rare',
        effects: ["Doubles carrying capacity for consumables (inventory management)"],
        vendor: 'shamans_hut',
        shippedBy: 'Dimensional Mail',
        levelRequirement: 4
    },
    'mystery_egg': {
        id: 'mystery_egg',
        name: "Mystery Egg",
        description: "A large spotted egg. Is it breakfast? Or a friend?",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1000,
        icon: '🥚',
        stock: 5,
        rarity: 'uncommon',
        effects: ["Roll d6 when cooking: 1-5 it's an egg, 6 it's a Yoshi (just kidding, it's a bad omelet)"],
        vendor: 'valley_trading_post',
        shippedBy: 'Egg Carton',
        levelRequirement: 1
    },
    'gold_bar': {
        id: 'gold_bar',
        name: "Gold Bar",
        description: "A heavy bar of gold. Currency converted to weight.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2000,
        icon: '🥇',
        stock: 10,
        rarity: 'common',
        effects: ["Worth 1000 Gold Coins", "Heavy improvised weapon"],
        vendor: 'wario_direct',
        shippedBy: 'Armored Truck',
        levelRequirement: 3
    },
    'gold_bar_x3': {
        id: 'gold_bar_x3',
        name: "Gold Bar x3",
        description: "Three gold bars. Wario loves this item.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5500,
        icon: '🏆',
        stock: 3,
        rarity: 'uncommon',
        effects: ["Worth 3000 Gold Coins", "Very heavy"],
        vendor: 'wario_direct',
        shippedBy: 'Armored Convoy',
        levelRequirement: 5
    },
    'star_beam_replica': {
        id: 'star_beam_replica',
        name: "Star Beam (Replica)",
        description: "A plastic toy that lights up. Does not dispel invincibility.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '✨',
        stock: 10,
        rarity: 'junk',
        effects: ["Creates a 10ft light", "Looks cool"],
        vendor: 'comet_observatory',
        shippedBy: 'Toy Box',
        levelRequirement: 1
    },
    'whacka_bump_fake': {
        id: 'whacka_bump_fake',
        name: "Imitation Whacka Bump",
        description: "Made of playdough. Do not eat.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 100,
        icon: '🍩',
        stock: 20,
        rarity: 'junk',
        effects: ["Tastes like salt and dye", "No healing"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },
    'innocent_certificate': {
        id: 'innocent_certificate',
        name: "Certificate of Innocence",
        description: "A piece of paper that says 'I didn't do it' in crayon.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 500,
        icon: '📜',
        stock: 10,
        rarity: 'common',
        effects: ["+1 Persuasion vs Guards (who have a sense of humor)", "Not legally binding"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Document Tube',
        levelRequirement: 1
    },
    'boo_sheet': {
        id: 'boo_sheet',
        name: "Boo Sheet",
        description: "A white sheet with eye holes cut out. Disguise yourself as a ghost.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 600,
        icon: '👻',
        stock: 10,
        rarity: 'common',
        effects: ["+2 Stealth in haunted areas", "Boos might be confused"],
        vendor: 'shamans_hut',
        shippedBy: 'Laundry Bag',
        levelRequirement: 1
    },
    'dry_bones_skull': {
        id: 'dry_bones_skull',
        name: "Dry Bones Skull",
        description: "The head of a Dry Bones. It still chatters sometimes.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '💀',
        stock: 5,
        rarity: 'uncommon',
        effects: ["Can be thrown for 1d6 damage", "Might bite the target"],
        vendor: 'valley_trading_post',
        shippedBy: 'Bone Box',
        levelRequirement: 2
    },
    'beanbean_coin': {
        id: 'beanbean_coin',
        name: "Beanbean Coin",
        description: "Currency from a neighboring kingdom. Collectors item here.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 250,
        icon: '🪙',
        stock: 50,
        rarity: 'common',
        effects: ["Worthless in shops", "Pretty"],
        vendor: 'toad_town_market',
        shippedBy: 'Envelope',
        levelRequirement: 1
    },
    'crystal_ball_cracked': {
        id: 'crystal_ball_cracked',
        name: "Cracked Crystal Ball",
        description: "Shows the future, but the image is distorted. Is that a dragon or a duck?",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1500,
        icon: '🔮',
        stock: 1,
        rarity: 'junk',
        effects: ["You can try to predict the weather (50% chance of success)"],
        vendor: 'shamans_hut',
        shippedBy: 'Fragile Box',
        levelRequirement: 1
    },
    'guide_to_snifits': {
        id: 'guide_to_snifits',
        name: "A Guide to Snifits",
        description: "A book detailing the subtle differences between Snifit mask colors.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 300,
        icon: '📘',
        stock: 5,
        rarity: 'common',
        effects: ["Advantage on INT checks regarding Snifits"],
        vendor: 'toad_town_market',
        shippedBy: 'Book Mail',
        levelRequirement: 1
    },
    'map_of_nowhere': {
        id: 'map_of_nowhere',
        name: "Map of Nowhere",
        description: "A map of a place that doesn't exist. Or maybe it does?",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1000,
        icon: '🗺️',
        stock: 1,
        rarity: 'unique',
        effects: ["Artistic value", "DM hook for a side quest maybe?"],
        vendor: 'comet_observatory',
        shippedBy: 'Tube',
        levelRequirement: 1
    },
    'boshi_sunglasses': {
        id: 'boshi_sunglasses',
        name: "Cool Blue Sunglasses",
        description: "Worn by a famous Yoshi racer. Pure attitude.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2000,
        icon: '🕶️',
        stock: 1,
        rarity: 'rare',
        effects: ["+1 Charisma", "Darkvision 10ft (because it's dark)"],
        vendor: 'valley_trading_post',
        shippedBy: 'Case',
        levelRequirement: 2
    },
    'popple_mask': {
        id: 'popple_mask',
        name: "Thief Mask",
        description: "A green mask worn by a legendary shadow thief.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2500,
        icon: '🎭',
        stock: 1,
        rarity: 'rare',
        effects: ["Advantage on Sleight of Hand", "NPCs call you 'Rookie'"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Stolen Box',
        levelRequirement: 3
    },
    'goomba_mask': {
        id: 'goomba_mask',
        name: "Goomba Mask",
        description: "A realistic Goomba head. Wear it to blend in with the troops.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🍄',
        stock: 2,
        rarity: 'uncommon',
        effects: ["Goombas will not attack you unless provoked", "Cannot speak while wearing"],
        vendor: 'valley_trading_post',
        shippedBy: 'Hat Box',
        levelRequirement: 2
    },

    // ============================================
    // === FACTION & SERVICES (EXPANSION) ===
    // ============================================

    'faction_coffee_machine': {
        id: 'faction_coffee_machine',
        name: "Industrial Coffee Machine",
        description: "High-grade caffeine supply for the Vigilance crew.",
        category: SHOP_CATEGORIES.FACTION,
        price: 3000,
        icon: '☕',
        stock: 1,
        rarity: 'common',
        effects: ["+2 Morale", "Crew works 10% faster on repairs"],
        vendor: 'faction_quartermaster',
        shippedBy: 'Kitchen Installer',
        levelRequirement: 1,
        factionBonus: { morale: 2 }
    },
    'faction_propaganda': {
        id: 'faction_propaganda',
        name: "Propaganda Posters",
        description: "Inspiring posters of Toads looking heroic.",
        category: SHOP_CATEGORIES.FACTION,
        price: 2000,
        icon: '🖼️',
        stock: 5,
        rarity: 'common',
        effects: ["+5 Recruitment rate in towns"],
        vendor: 'faction_quartermaster',
        shippedBy: 'Tube',
        levelRequirement: 1,
        factionBonus: { loyalty: 2 }
    },
    'merlee_charm': {
        id: 'merlee_charm',
        name: "Merlee's Charm Service",
        description: "A spell cast on you remotely. Good things might happen.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 5000,
        icon: '✨',
        stock: 3,
        rarity: 'uncommon',
        effects: ["For the next 3 combat encounters, gain +1 AC or +1 Dmg randomly"],
        vendor: 'shamans_hut',
        shippedBy: 'Magic Spell',
        levelRequirement: 2
    },
    'chet_rippo_service': {
        id: 'chet_rippo_service',
        name: "Stat Reallocation",
        description: "Chet Rippo will rearrange your stats. It might hurt.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 10000,
        icon: '🧙‍♂️',
        stock: 1,
        rarity: 'rare',
        effects: ["Move 2 points from one Stat to another permanently", "Cannot exceed 20"],
        vendor: 'rogueport_black_market',
        shippedBy: 'In Person',
        levelRequirement: 5
    },
    'mov_service': {
        id: 'mov_service',
        name: "Motivational Speech",
        description: "A hired speaker comes to shout at you until you feel confident.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 1000,
        icon: '📢',
        stock: 10,
        rarity: 'common',
        effects: ["Grant 10 Temp HP to party", "Lasts 24 hours"],
        vendor: 'toad_town_market',
        shippedBy: 'Speaker',
        levelRequirement: 1
    },

    // ============================================
    // === MORE JUNK TO ROUND OUT TO 100 ===
    // ============================================

    'burnt_pan': {
        id: 'burnt_pan',
        name: "Burnt Frying Pan",
        description: "Wario tried to cook. It didn't go well.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 150,
        icon: '🍳',
        stock: 5,
        rarity: 'junk',
        effects: ["1d4 bludgeoning", "Smells like charcoal"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },
    'red_paint': {
        id: 'red_paint',
        name: "Bucket of Red Paint",
        description: "Huey approves.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 200,
        icon: '🎨',
        stock: 10,
        rarity: 'common',
        effects: ["Paint things red", "Messy"],
        vendor: 'toad_town_market',
        shippedBy: 'Can',
        levelRequirement: 1
    },
    'blue_paint': {
        id: 'blue_paint',
        name: "Bucket of Blue Paint",
        description: "Deep ocean blue.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 200,
        icon: '🎨',
        stock: 10,
        rarity: 'common',
        effects: ["Paint things blue", "Messy"],
        vendor: 'toad_town_market',
        shippedBy: 'Can',
        levelRequirement: 1
    },
    'yellow_paint': {
        id: 'yellow_paint',
        name: "Bucket of Yellow Paint",
        description: "Sunny yellow.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 200,
        icon: '🎨',
        stock: 10,
        rarity: 'common',
        effects: ["Paint things yellow", "Messy"],
        vendor: 'toad_town_market',
        shippedBy: 'Can',
        levelRequirement: 1
    },
    'toy_train': {
        id: 'toy_train',
        name: "Toy Train",
        description: "A small model of the Excess Express.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 450,
        icon: '🚂',
        stock: 5,
        rarity: 'common',
        effects: ["Goes choo choo", "Decoration"],
        vendor: 'toad_town_market',
        shippedBy: 'Box',
        levelRequirement: 1
    },
    'turnip': {
        id: 'turnip',
        name: "Vegetable",
        description: "A strange turnip with a face. Pulled from a dream.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 300,
        icon: '🥬',
        stock: 20,
        rarity: 'common',
        effects: ["Thrown (20/40) for 1d6 bludgeoning", "Edible"],
        vendor: 'shamans_hut',
        shippedBy: 'Sack',
        levelRequirement: 1
    },
    'stop_watch': {
        id: 'stop_watch',
        name: "Stop Watch",
        description: "A magical watch that freezes time briefly.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3500,
        icon: '⏱️',
        stock: 3,
        rarity: 'rare',
        effects: ["Enemies in 30ft radius must succeed WIS save 13 or be Paralyzed for 1 round"],
        vendor: 'toad_town_market',
        shippedBy: 'Secure Box',
        levelRequirement: 3
    },
    'super_pickaxe': {
        id: 'super_pickaxe',
        name: "Super Pickax",
        description: "Can break through heavy stones. Captain Toad's favorite.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '⛏️',
        stock: 2,
        rarity: 'uncommon',
        effects: ["1d8 piercing", "Advantage on breaking stone objects/walls"],
        vendor: 'toad_town_market',
        shippedBy: 'Heavy Carrier',
        levelRequirement: 2
    },
    'metal_cap_polish': {
        id: 'metal_cap_polish',
        name: "Metal Cap Polish",
        description: "Makes your armor look like the legendary Metal Cap. Purely cosmetic.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 600,
        icon: '🧢',
        stock: 10,
        rarity: 'common',
        effects: ["Your armor is shiny", "No mechanical benefit"],
        vendor: 'toad_town_market',
        shippedBy: 'Bottle',
        levelRequirement: 1
    },
    'bean_stone': {
        id: 'bean_stone',
        name: "Bean Stone",
        description: "A peculiar stone from the Beanbean Kingdom.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1000,
        icon: '🫘',
        stock: 5,
        rarity: 'uncommon',
        effects: ["Vibrates near beans", "Paperweight"],
        vendor: 'shamans_hut',
        shippedBy: 'Box',
        levelRequirement: 1
    },
    'virulence_sample_inert': {
        id: 'virulence_sample_inert',
        name: "Vial of Goo (Inert)",
        description: "A souvenir from the Virulence virus. It's dead. Hopefully.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 50,
        icon: '🧪',
        stock: 50,
        rarity: 'junk',
        effects: ["Looks gross", "Conversation starter"],
        vendor: 'faction_quartermaster',
        shippedBy: 'Biohazard Bag',
        levelRequirement: 1
    },
    'shroob_fragment': {
        id: 'shroob_fragment',
        name: "Purple Shard",
        description: "A shard of alien technology. It hums aggressively.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2500,
        icon: '👾',
        stock: 3,
        rarity: 'rare',
        effects: ["Radiates faint magic", "Toads are afraid of it"],
        vendor: 'comet_observatory',
        shippedBy: 'Lead Box',
        levelRequirement: 4
    },
    'fuzzy_captured': {
        id: 'fuzzy_captured',
        name: "Fuzzy in a Jar",
        description: "A live Fuzzy trapped in a jar. It wants your blood.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1500,
        icon: '⚫',
        stock: 5,
        rarity: 'uncommon',
        effects: ["Break jar to release hostile Fuzzy", "Prank items gone wrong"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Glass Jar',
        levelRequirement: 2
    },
    'block_brick': {
        id: 'block_brick',
        name: "Brick Block",
        description: "A standard brick block. Heavy.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 100,
        icon: '🧱',
        stock: 50,
        rarity: 'common',
        effects: ["Portable high ground", "Can be smashed"],
        vendor: 'toad_town_market',
        shippedBy: 'Freight',
        levelRequirement: 1
    },
    'mario_cap_replica': {
        id: 'mario_cap_replica',
        name: "Red Cap Replica",
        description: "A red cap with an 'M'. The 'M' stands for 'Mediocre'.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 500,
        icon: '🧢',
        stock: 20,
        rarity: 'common',
        effects: ["+0 AC", "Cosplay use only"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },
    'hiker_backpack': {
        id: 'hiker_backpack',
        name: "Koopa Troopa Backpack",
        description: "A backpack shaped like a shell.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1200,
        icon: '🎒',
        stock: 10,
        rarity: 'common',
        effects: ["Carries 50lbs", "Looks stylish"],
        vendor: 'valley_trading_post',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },
    'flashlight': {
        id: 'flashlight',
        name: "Bright Flashlight",
        description: "Batteries included. Scares ghosts.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 800,
        icon: '🔦',
        stock: 15,
        rarity: 'common',
        effects: ["Cone of light 30ft", "Ghosts in light cannot turn invisible"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },
    'camera_poltergust': {
        id: 'camera_poltergust',
        name: "Vintage Camera",
        description: "Takes sepia photos. Flash is blindingly bright.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2000,
        icon: '📷',
        stock: 2,
        rarity: 'uncommon',
        effects: ["Can blind target 5ft away (CON save 12)", "Records memories"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Fragile Box',
        levelRequirement: 2
    },
    'music_box': {
        id: 'music_box',
        name: "Spooky Music Box",
        description: "Plays a haunting melody. Toads hate it.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '🎵',
        stock: 4,
        rarity: 'common',
        effects: ["Sets a creepy mood", "May attract Boos"],
        vendor: 'shamans_hut',
        shippedBy: 'Box',
        levelRequirement: 1
    },
    'pipe_wrench': {
        id: 'pipe_wrench',
        name: "Plumber's Wrench",
        description: "A heavy wrench. Good for pipes and kneecaps.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 800,
        icon: '🔧',
        stock: 10,
        rarity: 'common',
        effects: ["1d6 bludgeoning", "Advantage on mechanics checks to fix pipes"],
        vendor: 'toad_town_market',
        shippedBy: 'Toolbox',
        levelRequirement: 1
    },
    'rope_ladder': {
        id: 'rope_ladder',
        name: "Vine Ladder",
        description: "A ladder made of sturdy vines. 50ft long.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 500,
        icon: '🪜',
        stock: 15,
        rarity: 'common',
        effects: ["Climbing aid", "Bio-degradable"],
        vendor: 'valley_trading_post',
        shippedBy: 'Sack',
        levelRequirement: 1
    },
    'safety_goggles': {
        id: 'safety_goggles',
        name: "Safety Goggles",
        description: "Professor E. Gadd style.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 1000,
        icon: '🥽',
        stock: 10,
        rarity: 'common',
        effects: ["Immunity to blindness from dust/sand", "Look like a nerd"],
        vendor: 'toad_town_market',
        shippedBy: 'Case',
        levelRequirement: 1
    },
    'swim_ring': {
        id: 'swim_ring',
        name: "Cheep Cheep Float",
        description: "Inflatable ring. Keeps you afloat.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 600,
        icon: '⭕',
        stock: 10,
        rarity: 'common',
        effects: ["Advantage on Athletics (Swim) to stay afloat", "Cannot dive"],
        vendor: 'valley_trading_post',
        shippedBy: 'Box',
        levelRequirement: 1
    },
    'party_invite': {
        id: 'party_invite',
        name: "Lost Party Invitation",
        description: "Invitation to a party at Peach's Castle. Date: 3 years ago.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 50,
        icon: '✉️',
        stock: 20,
        rarity: 'junk',
        effects: ["Sadness", "Paper airplane material"],
        vendor: 'toad_town_market',
        shippedBy: 'Envelope',
        levelRequirement: 1
    },
    'yoshi_cookie': {
        id: 'yoshi_cookie',
        name: "Yoshi Cookie",
        description: "A checkered cookie. Very filling.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '🍪',
        stock: 15,
        rarity: 'common',
        effects: ["Restores 10 HP", "Cures 'Hungry' condition"],
        vendor: 'toad_town_market',
        shippedBy: 'Cookie Jar',
        levelRequirement: 1
    },
    'kamek_wand_broken': {
        id: 'kamek_wand_broken',
        name: "Broken Magikoopa Wand",
        description: "Snapped in half. Sparks occasionally.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2000,
        icon: '🪄',
        stock: 2,
        rarity: 'junk',
        effects: ["Arcana check DC 15 to make a small spark", "Useless as weapon"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Hazmat',
        levelRequirement: 3
    },
    
    'rotten_mush': {
        id: 'rotten_mush',
        name: "Rotten Mushroom",
        description: "A mushroom that has clearly gone bad. It smells like wet socks and regret.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 50,
        icon: '🤢',
        stock: 99,
        rarity: 'common',
        effects: ["Restore 1 HP", "You are Poisoned for 10 minutes"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Garbage Chute',
        levelRequirement: 1
    },
// ============================================
    // === LEGENDARY ARTIFACTS (20,000 - 50,000 XP) ===
    // ============================================

    'metal_cap_permanent': {
        id: 'metal_cap_permanent',
        name: "Liquid Metal Coating",
        description: "A vial of living quicksilver. Coats your skin permanently. You become heavy, cold, and nearly indestructible.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 35000,
        icon: '🔩',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Permanent Resistance to Non-Magical Bludgeoning/Piercing/Slashing",
            "Immunity to Poison and Suffocation",
            "You sink in water (cannot swim)",
            "-10 ft Movement Speed"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Reinforced Container',
        levelRequirement: 8
    },
    'poltergust_g00': {
        id: 'poltergust_g00',
        name: "Poltergust G-00 Prototype",
        description: "The latest ghost-hunting tech from Professor E. Gadd. Experimental and dangerous.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 28000,
        icon: '🧹',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Action: Grapple ghosts/spirits (Escape DC 17)",
            "Bonus Action: Slam grappled target for 2d8 force damage",
            "Reaction: Burst jump (fly 10ft upwards)",
            "Contains Gooigi (can summon a slime clone with 1 HP)"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'E. Gadd Science Division',
        levelRequirement: 6
    },
    '1_up_mushroom': {
        id: '1_up_mushroom',
        name: "1-Up Mushroom",
        description: "The green miracle. A mushroom that vibrates with the frequency of life itself. Cheats death.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 30000,
        icon: '💚',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Single Use",
            "Cast 'True Resurrection' on target (touch)",
            "Works even if the body is destroyed",
            "The universe frowns upon this exchange"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Armored Escort',
        levelRequirement: 1
    },
    'genos_arm_cannon': {
        id: 'genos_arm_cannon',
        name: "Star Doll's Arm Cannon",
        description: "An intricate wooden prosthetic containing cosmic firepower. Belonged to a visitor from the stars.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 32000,
        icon: '🔫',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Replaces one arm",
            "Ranged Weapon: 2d8 Radiant Damage (Range 100/300)",
            "Charge Shot (Action): 4d8 Damage, requires 1 turn cooldown",
            "Sentient: The arm wants to fix the Star Road"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Falling Star',
        levelRequirement: 8
    },
    'fludd_unit': {
        id: 'fludd_unit',
        name: "F.L.U.D.D. Unit",
        description: "Flash Liquidizer Ultra Dousing Device. A backpack with an AI. Very chatty.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 26000,
        icon: '💧',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Hover Nozzle: Fly speed 30ft (must end turn on ground)",
            "Rocket Nozzle: Jump height x10 (1 charge/min)",
            "Turbo Nozzle: Dash as bonus action",
            "Water Gun: Pushes enemies 20ft (STR save DC 15)"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Waterproof Crate',
        levelRequirement: 6
    },
    'magic_carpet': {
        id: 'magic_carpet',
        name: "Pidgit's Magic Carpet",
        description: "A woven rug enchanted with Subcon magic. Reliable flight.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 24000,
        icon: '🧞',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Fly Speed 50ft",
            "Carries up to 4 medium creatures",
            "Does not require fuel",
            "Smells like vegetables"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Rolled Up',
        levelRequirement: 5
    },
    'mallows_cloud': {
        id: 'mallows_cloud',
        name: "Nimbus Cloud",
        description: "A fluffy cloud condensed into a rideable mount. Only the pure of heart can ride it.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 25000,
        icon: '☁️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Personal Flying Mount",
            "If you perform an evil act, you fall through it",
            "Can summon rain lightly"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Wind Currents',
        levelRequirement: 5
    },
    'bottomless_coin_sack': {
        id: 'bottomless_coin_sack',
        name: "Bottomless Coin Sack",
        description: "A coin sack connected to the Coin Heaven dimension. Infinite wealth, slowly.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 50000,
        icon: '💰',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Produces 100 Gold Coins every dawn",
            "Cannot be destroyed",
            "Wario will hunt you to the ends of the earth for this"
        ],
        vendor: 'wario_direct',
        shippedBy: 'Wario (He tries to steal it back immediately)',
        levelRequirement: 10
    },
    'wonder_flower': {
        id: 'wonder_flower',
        name: "Wonder Flower",
        description: "A flower that warps reality in unpredictable, psychedelic ways.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 40000,
        icon: '🌺',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Single Use: Reality breaks for 1 hour.",
            "Inanimate objects come to life and sing.",
            "Gravity reverses.",
            "You might turn into a Goomba.",
            "DM Discretion (Maximum Chaos)"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'Hallucinogenic Container',
        levelRequirement: 8
    },
    'cappy_replica': {
        id: 'cappy_replica',
        name: "Spirit Cap",
        description: "A hat inhabited by a bonneter spirit. Allows possession.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 38000,
        icon: '🎩',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Action: Throw onto a creature (CR 3 or lower)",
            "Target must make WIS Save DC 16 or be Dominated",
            "You control their body for 1 minute",
            "Your physical body vanishes into the hat"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Hat Box',
        levelRequirement: 9
    },
    'koopa_clown_car': {
        id: 'koopa_clown_car',
        name: "Koopa Clown Car",
        description: "Bowser's personal hovercraft technology. Face changes expression based on your health.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 45000,
        icon: '🤡',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "AC 18, 100 HP Vehicle",
            "Fly Speed 40ft (Hover)",
            "Immune to Ground Damage",
            "Can drop bowling balls (Infinite ammo, 2d8 bludgeoning)"
        ],
        vendor: 'valley_trading_post',
        shippedBy: 'Air Drop',
        levelRequirement: 8
    },
    'dry_bowser_shell': {
        id: 'dry_bowser_shell',
        name: "Shell of the Undead King",
        description: "A fragment of Dry Bowser's plating. Cold to the touch.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 33000,
        icon: '☠️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Shield: +3 AC",
            "Immunity to Necrotic Damage",
            "Resistance to Fire Damage",
            "Vulnerability to Bludgeoning"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Bone Courier',
        levelRequirement: 8
    },
    'captain_toad_backpack': {
        id: 'captain_toad_backpack',
        name: "Captain's Heavy Backpack",
        description: "Looks small, holds an infinite amount of gear. Prevents jumping.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 21000,
        icon: '🎒',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Infinite Carrying Capacity (Weight is ignored)",
            "You cannot Jump",
            "You cannot Fly",
            "Your speed is reduced by 5ft"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Crane',
        levelRequirement: 1
    },

    // ============================================
    // === FACTION SUPER-WEAPONS (30,000 - 60,000 XP) ===
    // ============================================

    'airship_vigilance_full_restore': {
        id: 'airship_vigilance_full_restore',
        name: "Vigilance: Full Restoration",
        description: "Completely repair the airship, upgrade engines, and mount heavy cannons.",
        category: SHOP_CATEGORIES.FACTION,
        price: 60000,
        icon: '🚢',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "The Vigilance becomes a mobile base of operations",
            "Can call in orbital bombardments (1/day)",
            "Travel anywhere instantly",
            "Faction Morale +50%"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Drydock Team',
        levelRequirement: 10,
        factionBonus: { mobility: 100, combatReadiness: 50 }
    },
    'iron_legion_codes': {
        id: 'iron_legion_codes',
        name: "Iron Legion Command Codes",
        description: "Stolen encryption keys that allow you to redirect Iron Legion mechs.",
        category: SHOP_CATEGORIES.FACTION,
        price: 40000,
        icon: '💾',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Disable any Iron Legion mech (Action)",
            "Take control of 1 mech per day",
            "Iron Legion will put a max priority bounty on you"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'Encrypted Data Slate',
        levelRequirement: 8,
        factionBonus: { intelligence: 50 }
    },
    'shroob_mothership_key': {
        id: 'shroob_mothership_key',
        name: "Shroob Control Key",
        description: "A pulsating purple crystal that interfaces with buried alien technology.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 70000,
        icon: '👾',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Summons a Shroob UFO strike (1/week)",
            "Deals 20d6 Necrotic damage to a 100ft radius",
            "Leaves the area radioactive/cursed",
            "May summon angry Shroobs"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Lead Box',
        levelRequirement: 12
    },
    'castle_deed': {
        id: 'castle_deed',
        name: "Deed to Abandoned Fortress",
        description: "Ownership papers for a fortress in the Dark Land. Needs renovation.",
        category: SHOP_CATEGORIES.FACTION,
        price: 55000,
        icon: '🏰',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Grants a permanent Stronghold",
            "Can garrison 100 troops",
            "Lair Actions available when inside",
            "Taxes generate income"
        ],
        vendor: 'wario_direct',
        shippedBy: 'Lawyer',
        levelRequirement: 10,
        factionBonus: { defense: 50, economy: 20 }
    },

    // ============================================
    // === GOD-TIER / FORBIDDEN (60,000 - 100,000 XP) ===
    // ============================================

    'star_rod_fragment': {
        id: 'star_rod_fragment',
        name: "Fragment of the Star Rod",
        description: "A piece of the legendary rod that grants wishes. It glows with infinite potential.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 85000,
        icon: '🌟',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Cast 'Wish' once per week?",
            "Can alter the plot significantly?",
            "The Seven Star Spirits are watching you",
            "Bowser senses its location"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Cosmic Event',
        levelRequirement: 15
    },
// ============================================
    // === HIGH TIER (26,000 - 60,000 XP) ===
    // ============================================

    'lazy_shell_armor': {
        id: 'lazy_shell_armor',
        name: "Lazy Shell (Armor)",
        description: "A gigantic red shell. You become nearly indestructible, but you lose the will to move quickly.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 28000,
        icon: '🛡️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "AC becomes 22 (cannot be modified)",
            "Resistance to ALL damage types (Fire, Cold, Thunder, etc.)",
            "Disadvantage on DEX saves and Initiative",
            "Speed reduced by 15ft"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Crane Delivery',
        levelRequirement: 8
    },

    'lazy_shell_weapon': {
        id: 'lazy_shell_weapon',
        name: "Lazy Shell (Weapon)",
        description: "A massive green shell on a stick. Hits like a truck, heavy as a mountain.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 28000,
        icon: '🐢',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "2d12 Bludgeoning Damage",
            "Reach 10ft",
            "On Critical Hit: Target is Stunned until end of next turn",
            "Requires 18 STR to wield"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Heavy Freight',
        levelRequirement: 8
    },

    'quartz_charm': {
        id: 'quartz_charm',
        name: "Quartz Charm",
        description: "A crystal pendant from Monstro Town. Radiates protective energy.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 32000,
        icon: '💎',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "You take half damage from Spells",
            "Your attacks deal +1d6 Force damage",
            "Cannot be surprised",
            "You sparkle annoying brightly"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Crystal Case',
        levelRequirement: 9
    },

    'mega_mushroom': {
        id: 'mega_mushroom',
        name: "Mega Mushroom",
        description: "A mushroom the size of a pumpkin. Turns you into a kaiju.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 26000,
        icon: '🍄',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Duration: 1 Minute",
            "Size becomes Gargantuan",
            "STR score becomes 26",
            "Can walk through buildings (destroys them)",
            "Immune to all damage except Psychic"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Hazardous Materials',
        levelRequirement: 8
    },

    'gold_flower': {
        id: 'gold_flower',
        name: "Gold Flower",
        description: "A shimmering golden flower. Turns enemies into currency.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 30000,
        icon: '🌻',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Cast 'Fireball' but deals 10d6 Force damage",
            "If an enemy dies from this, they turn into Gold Coins (100gp per CR)",
            "You turn solid gold for 1 round (+5 AC, cannot move)"
        ],
        vendor: 'wario_direct',
        shippedBy: 'Armored Truck',
        levelRequirement: 7
    },

    'retry_clock': {
        id: 'retry_clock',
        name: "Retry Clock",
        description: "A mechanical device that violently rewinds time. Use when everything goes wrong.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 35000,
        icon: '⏰',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Single Use",
            "Reset the current combat encounter to Round 1",
            "All HP/Slots restored to pre-fight state",
            "Everyone remembers what happened (Trauma included)"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'Paradox Container',
        levelRequirement: 10
    },

    'ghost_port_poltergust': {
        id: 'ghost_port_poltergust',
        name: "Poltergust Type-G",
        description: "Military grade ghost-catching vacuum. Keeps the spectral realm at bay.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 34000,
        icon: '👻',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Can capture ANY incorporeal undead (DC 18 STR check)",
            "Captured ghosts can be fired as projectiles (4d8 Necrotic)",
            "Detects invisible entities within 60ft",
            "Runs on batteries (included)"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'E. Gadd Labs',
        levelRequirement: 7
    },

    'safety_ring': {
        id: 'safety_ring',
        name: "Safety Ring",
        description: "A simple ring that guarantees safety. The ultimate defense against bad luck.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 40000,
        icon: '💍',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Immunity to ALL status conditions (Poison, Paralyze, Sleep, Petrify, Fear, Charm)",
            "Immunity to Critical Hits",
            "Immunity to Instant Death effects"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Velvet Box',
        levelRequirement: 10
    },

    'faction_airship_plating': {
        id: 'faction_airship_plating',
        name: "Adamantite Hull Plating",
        description: "Reinforce the Vigilance with the strongest metal known.",
        category: SHOP_CATEGORIES.FACTION,
        price: 28000,
        icon: '🛡️',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Vigilance ignores damage below threshold 15",
            "Can ram other airships without taking damage",
            "+25% Survival rate for crew during crashes"
        ],
        vendor: 'gilded_gryphon',
        factionBonus: { defense: 40, combatReadiness: 10 }
    },

    'faction_lakitu_cam': {
        id: 'faction_lakitu_cam',
        name: "Lakitu News Chopper",
        description: "A permanent Lakitu follower who streams the battlefield from above.",
        category: SHOP_CATEGORIES.FACTION,
        price: 32000,
        icon: '🎥',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Players can view a top-down map of any outdoor area in real-time",
            "Negates enemy stealth bonuses",
            "Provides battle commentary"
        ],
        vendor: 'rogueport_black_market',
        factionBonus: { intelligence: 50 }
    },

    'copy_flower': {
        id: 'copy_flower',
        name: "Copy Flower",
        description: "Creates dozens of clones of yourself for a massive stampede.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 27000,
        icon: '🌸',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Cast 'Mirror Image' (but with 10 clones)",
            "Next Attack Action: Make 10 attacks dealing 5 damage each",
            "Clones vanish after attack"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Fragile Box',
        levelRequirement: 9
    },

    'mix_flower': {
        id: 'mix_flower',
        name: "Mix Flower",
        description: "Calls down a giant fireball from orbit. It's technically 'gardening'.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 35000,
        icon: '🔥',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "100ft Radius Explosion",
            "20d6 Fire Damage (DEX save DC 18 half)",
            "Ignores Fire Resistance",
            "Leaves a crater"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Orbital Drop',
        levelRequirement: 10
    },

    'rawk_hawk_belt': {
        id: 'rawk_hawk_belt',
        name: "Champ's Belt",
        description: "The championship belt of the Glitz Pit. RAWWWK!",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 38000,
        icon: '🏆',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "STR set to 22",
            "Advantage on Grapple checks",
            "Can fly 30ft, but must land at end of turn",
            "You feel compelled to pose after every kill"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'Glitz Pit Locker',
        levelRequirement: 10
    },

    'crystal_king_crown': {
        id: 'crystal_king_crown',
        name: "Crown of the Crystal King",
        description: "Cold as the void. Grants mastery over ice.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 42000,
        icon: '👑',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Immunity to Cold Damage",
            "At Will: Ray of Frost (17th level)",
            "Once/Day: Summon 3 Crystal Bits (act as Shield spell or attack)",
            "You float 1 inch off the ground"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Frozen Crate',
        levelRequirement: 11
    },

    'tubba_blubba_heart': {
        id: 'tubba_blubba_heart',
        name: "Secret Heart",
        description: "A pulsating heart in a jar. If you hide it, you become invincible. If it breaks, you die.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 50000,
        icon: '❤️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "While the jar is hidden and safe: You have Resistance to ALL damage and Regenerate 10 HP/turn",
            "If the jar is destroyed: You drop to 0 HP immediately",
            "You cannot move more than 1 mile from the jar"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Courier',
        levelRequirement: 12
    },

    'shadow_siren_veil': {
        id: 'shadow_siren_veil',
        name: "Veil of the Three",
        description: "A dark purple veil. Allows you to hide in the floor.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 36000,
        icon: '👒',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Action: Become a shadow on the floor (Invulnerable, cannot attack, speed 30ft)",
            "Advantage on Stealth",
            "Can cast 'Invisibility' 3/day"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Shadow Mail',
        levelRequirement: 9
    },

    'magikoopa_wand_master': {
        id: 'magikoopa_wand_master',
        name: "Kamek's Spare Wand",
        description: "A geometric wand brimming with chaotic transformation magic.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 45000,
        icon: '🪄',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "+2 to Spell Attack/DC",
            "Action: Transform a medium object into a CR 3 monster (Loyal to you)",
            "Action: Transform terrain into geometric blocks",
            "User laughs uncontrollably"
        ],
        vendor: 'valley_trading_post',
        shippedBy: 'Broomstick',
        levelRequirement: 11
    },

    'faction_dry_bones_reassembler': {
        id: 'faction_dry_bones_reassembler',
        name: "Necro-Reassembler V2",
        description: "Automated machinery that puts skeletons back together.",
        category: SHOP_CATEGORIES.FACTION,
        price: 35000,
        icon: '☠️',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Toads who 'die' in combat have a 75% chance to return as Dry Bones (Undead)",
            "Dry Bones toads are immune to poison/exhaustion",
            "Increases faction 'Durability'"
        ],
        vendor: 'valley_trading_post',
        factionBonus: { combatReadiness: 15, loyalty: 10 }
    },

    'faction_warp_pipe_hub': {
        id: 'faction_warp_pipe_hub',
        name: "Portable Warp Hub",
        description: "Install a master Warp Pipe on the Vigilance linked to 3 major cities.",
        category: SHOP_CATEGORIES.FACTION,
        price: 48000,
        icon: '🟢',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Instant travel to Toad Town, Rogueport, and the Capital",
            "Deploy troops anywhere instantly",
            "Escape route always available"
        ],
        vendor: 'toad_town_market',
        factionBonus: { mobility: 50, operations: 20 }
    },

    'antasma_cape': {
        id: 'antasma_cape',
        name: "Nightmare Cape",
        description: "A cape made of bats and bad dreams. Allows entry into the Dream World.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 55000,
        icon: '🦇',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Fly Speed 40ft",
            "Action: Put target to sleep (WIS DC 17)",
            "Bonus Action: Enter the dreams of a sleeping target (Inception rules apply)",
            "Sunlight Sensitivity"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'Nightmare',
        levelRequirement: 12
    },

    'cobalt_star_shard': {
        id: 'cobalt_star_shard',
        name: "Cobalt Star Shard",
        description: "A piece of a star that holds an alien princess. Manipulates time locally.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 42000,
        icon: '🔷',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Reaction: Force an enemy to reroll an attack",
            "3 Charges/Day: Cast 'Haste' or 'Slow'",
            "You hear faint screaming from inside the shard"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Time Stream',
        levelRequirement: 10
    },

    'faction_shroob_tech': {
        id: 'faction_shroob_tech',
        name: "Reverse-Engineered Shroob Blasters",
        description: "Alien weaponry for the elite Wardens. Dangerous and purple.",
        category: SHOP_CATEGORIES.FACTION,
        price: 50000,
        icon: '👾',
        stock: 1,
        rarity: 'forbidden',
        effects: [
            "Warden Cohort gains +5 Attack and deals Necrotic damage",
            "Risk of weapons exploding (5%)",
            "Iron Legion will designate you as a planetary threat"
        ],
        vendor: 'onyx_hand',
        factionBonus: { combatReadiness: 30 }
    },

    'broque_monsieur_collection': {
        id: 'broque_monsieur_collection',
        name: "Block Collection",
        description: "A set of sentient blocks. They can form walls, bridges, or prisons on command.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 29000,
        icon: '🟨',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Action: Summon a 20ft x 20ft stone fortress",
            "Action: Create a bridge up to 60ft",
            "The blocks speak French and judge your fashion"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Block',
        levelRequirement: 8
    },

    'grodus_staff': {
        id: 'grodus_staff',
        name: "Techno-Staff",
        description: "The staff of the X-Naut leader. Controls machinery.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 58000,
        icon: '📡',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Dominate Machine (WIS DC 17 for constructs)",
            "Lightning Bolt (5th level) at will",
            "Creates a forcefield (+3 AC)",
            "Makes you bald"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'X-Naut Pod',
        levelRequirement: 12
    },

    'vampire_tomato': {
        id: 'vampire_tomato',
        name: "Vampire Tomato",
        description: "A tomato with fangs. Eating it grants permanent life-steal qualities.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 45000,
        icon: '🍅',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Permanent Effect: When you deal melee damage, heal for 10% of damage dealt",
            "Permanent Effect: You no longer have a reflection",
            "Tastes like iron"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Coffin',
        levelRequirement: 10
    },

    'earlier_times': {
        id: 'earlier_times',
        name: "Earlier Times",
        description: "A dusty bottle containing the concept of 'Before'. Drink to reset the round.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 40000,
        icon: '⌛',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Consume as Reaction when hit",
            "The turn resets completely. The attack never happened.",
            "You regain your Reaction.",
            "Reality destabilizes slightly."
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Yesterday',
        levelRequirement: 11
    },

    'faction_propeller_fleet': {
        id: 'faction_propeller_fleet',
        name: "Toad Brigade Propeller Suits",
        description: "Flight suits for the Scout Cohort. Death from above.",
        category: SHOP_CATEGORIES.FACTION,
        price: 38000,
        icon: '🚁',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Scouts gain Fly speed",
            "Can bypass ground defenses",
            "Drastically improves map exploration"
        ],
        vendor: 'toad_town_market',
        factionBonus: { mobility: 20, intelligence: 15 }
    },

    'invincibility_star': {
        id: 'invincibility_star',
        name: "Super Star",
        description: "The ultimate power-up. You become a god for 18 seconds.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 50000,
        icon: '⭐',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Duration: 3 Rounds (18 seconds)",
            "Invulnerable to ALL damage",
            "Touch enemies to deal 10d10 Radiant damage (No save)",
            "Speed doubled",
            "Plays loud music"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Bouncing',
        levelRequirement: 1
    },

    'faction_treasury_investment': {
        id: 'faction_treasury_investment',
        name: "Wario Asset Management",
        description: "Let Wario invest the faction's funds. High risk, high reward.",
        category: SHOP_CATEGORIES.FACTION,
        price: 30000,
        icon: '📈',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Generates 5% interest on Faction XP weekly",
            "Wario takes a 20% cut",
            "Unlocks 'Corporate Takeover' missions"
        ],
        vendor: 'wario_direct',
        factionBonus: { economy: 50 }
    },

    'ultra_hammer_legendary': {
        id: 'ultra_hammer_legendary',
        name: "Ultra Hammer (Authentic)",
        description: "The real deal. Not a replica. Can smash through reality.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 60000,
        icon: '🔨',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "3d12 Bludgeoning Damage",
            "+3 to Hit/Damage",
            "Ignores AC provided by Armor or Shields",
            "Action: Smash the ground to cast Earthquake"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Heavy Loader',
        levelRequirement: 14
    },

    // ============================================
    // === INSANE / GOD TIER (70,000 - 999,999 XP) ===
    // ============================================

    'chaos_heart': {
        id: 'chaos_heart',
        name: "The Chaos Heart",
        description: "A dark artifact capable of consuming all worlds. The Void is calling.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 150000,
        icon: '🖤',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Grants invulnerability to all attacks unless pierced by Pure Heart",
            "Can open Void rifts (banish enemies to non-existence)",
            "You slowly lose your soul to the Void",
            "The universe begins to decay while you hold this"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Dimensional Rift',
        levelRequirement: 20,
        warning: "WILL END THE CAMPAIGN IF USED IMPROPERLY"
    },

    'star_rod': {
        id: 'star_rod',
        name: "The Star Rod",
        description: "The legendary rod stolen by Bowser. Grants any wish.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 200000,
        icon: '🌟',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Cast 'Wish' at will (1/day)",
            "Alter reality within a 1-mile radius",
            "Grant invincibility to self or others",
            "The 7 Star Spirits will hunt you down"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Star Haven',
        levelRequirement: 20
    },

    'shroob_mothership_strike': {
        id: 'shroob_mothership_strike',
        name: "Shroob Orbital Beam",
        description: "A remote control for the dormant Shroob Mothership in orbit.",
        category: SHOP_CATEGORIES.FACTION,
        price: 90000,
        icon: '🛸',
        stock: 1,
        rarity: 'forbidden',
        effects: [
            "Call down a beam that deals 50d10 Necrotic damage to a 1-mile area",
            "Turns the land into a purple wasteland",
            "Destroys entire cities",
            "Single Use"
        ],
        vendor: 'onyx_hand',
        factionBonus: { combatReadiness: 100 }
    },

    'dream_stone': {
        id: 'dream_stone',
        name: "The Dream Stone",
        description: "Manifests dreams into reality. Infinite potential, infinite danger.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 120000,
        icon: '💤',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Create objects, creatures, or structures from nothing",
            "Transform into a giant version of yourself",
            "If shattered, releases a nightmare fog that covers the continent"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Pillow',
        levelRequirement: 18
    },

    'reset_button': {
        id: 'reset_button',
        name: "The Reset Button",
        description: "A literal button. Resets the campaign to Session 1. Everyone keeps their memories.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 999999,
        icon: '🔄',
        stock: 1,
        rarity: 'godly',
        effects: [
            "NEW GAME +",
            "Resets the world state",
            "Players keep levels and items",
            "Enemies become harder",
            "DM cries"
        ],
        vendor: 'wario_direct',
        shippedBy: 'Console Command',
        levelRequirement: 20
    },

    'cappy_original': {
        id: 'cappy_original',
        name: "Cappy (The Original)",
        description: "The legendary bonneter. Allows possession of ANYTHING.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 85000,
        icon: '🎩',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Possess any creature regardless of CR (WIS save DC 25)",
            "Possess inanimate objects (T-Rex, Tank, Electricity, Meat)",
            "Gain all stats/abilities of possessed target",
            "You retain your mental stats"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Hat Ship',
        levelRequirement: 15
    },

    'warios_franchise': {
        id: 'warios_franchise',
        name: "WarioWare, Inc. Majority Share",
        description: "Buy Wario's company. You become the owner of Wario's Warehouse.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 500000,
        icon: '💰',
        stock: 1,
        rarity: 'godly',
        effects: [
            "All shop items become free",
            "Generate 10,000 Gold Coins daily",
            "Wario becomes your employee (he hates this)",
            "You gain a mustache"
        ],
        vendor: 'wario_direct',
        shippedBy: 'Legal Team',
        levelRequirement: 15
    },

    'pure_heart_complete': {
        id: 'pure_heart_complete',
        name: "The Complete Pure Heart",
        description: "Restored love and hope. The only thing that stops the Chaos Heart.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 150000,
        icon: '🤍',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Revive the dead (Mass Resurrection)",
            "Break invulnerability shields",
            "Banish the Void",
            "Requires true love to activate (or a really good roll)"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Light',
        levelRequirement: 20
    },

    'culex_crystal': {
        id: 'culex_crystal',
        name: "Shard of Vanda",
        description: "A crystal from a dark knight of another dimension. Breaks the 4th wall.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 95000,
        icon: '🔮',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Changes the battle music to Final Fantasy boss themes",
            "Summons 4 Elemental Crystals to fight for you",
            "Cast 'Meteor Swarm' 1/day",
            "You speak in old English text boxes"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'Dimensional Rift',
        levelRequirement: 16
    },

    'phantom_guide': {
        id: 'phantom_guide',
        name: "Phantom Guide Contract",
        description: "Summon a hero from a previous campaign as a permanent follower.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 80000,
        icon: '📜',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Summon a Level 20 PC from a past game",
            "They serve for 1 week or until death",
            "DM controls them (mostly)"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Spirit Portal',
        levelRequirement: 10
    },

    'wonder_flower_seed': {
        id: 'wonder_flower_seed',
        name: "Wonder Seed",
        description: "A seed that warps reality permanently in a localized area.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 75000,
        icon: '🌱',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Change the biome of a region instantly (Desert -> Ocean, etc.)",
            "Animate all inanimate objects in a city",
            "Gravity becomes optional",
            "Everyone turns into Goombas"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Talking Flower',
        levelRequirement: 14
    },

    'faction_flying_fortress': {
        id: 'faction_flying_fortress',
        name: "Sky Fortress Upgrade",
        description: "Convert the Vigilance or Base into a permanent flying castle.",
        category: SHOP_CATEGORIES.FACTION,
        price: 100000,
        icon: '🏰',
        stock: 1,
        rarity: 'godly',
        effects: [
            "The base can fly indefinitely",
            "Orbital bombardment capabilities",
            "Unassailable from the ground",
            "The ultimate symbol of power"
        ],
        vendor: 'gilded_gryphon',
        factionBonus: { mobility: 100, defense: 100, morale: 50 }
    },

    '1_up_deluxe': {
        id: '1_up_deluxe',
        name: "1-Up Deluxe",
        description: "A platinum mushroom. Grants a literal second life.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 70000,
        icon: '🍄',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Passive: If you die, you immediately respawn at the start of your next turn with Full HP, Spell Slots, and Abilities.",
            "Consumed on use.",
            "Can only carry one at a time."
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Divine Courier',
        levelRequirement: 1
    },

    'shadow_queen_crown': {
        id: 'shadow_queen_crown',
        name: "Crown of Shadows",
        description: "The crown of the ancient demon queen. Grants dominion over darkness.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 110000,
        icon: '👑',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Control any shadow creature",
            "Cover the world in eternal night",
            "Immunity to Non-Magical damage",
            "Possession risk: High"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Sealed Box',
        levelRequirement: 18
    },

    'golden_tanooki': {
        id: 'golden_tanooki',
        name: "Golden Tanooki Suit",
        description: "A suit that vibrates with invincible energy. You cannot be stopped.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 90000,
        icon: '🦝',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Permanent Invincibility to Damage (unless you fall in a pit)",
            "Infinite Flight",
            "You sparkle constantly",
            "Enemies flee on sight"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Golden Leaves',
        levelRequirement: 15
    },

    'smithy_hammer_god': {
        id: 'smithy_hammer_god',
        name: "Smithy's True Hammer",
        description: "The hammer that forged the Star Road. Can create or destroy artifacts.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 130000,
        icon: '⚒️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Craft Legendary items instantly",
            "Destroy any object (even magical ones) with a single hit",
            "Transform living beings into weapons",
            "User's head may transform into a tank"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'Machine Dimension',
        levelRequirement: 18
    },

    'sprixie_alliance': {
        id: 'sprixie_alliance',
        name: "Sprixie Kingdom Alliance",
        description: "Full military and magical support of the Sprixie Princesses.",
        category: SHOP_CATEGORIES.FACTION,
        price: 75000,
        icon: '🧚',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Access to Clear Pipes (Instant travel network)",
            "Fairy Magic buffs for all faction members",
            "Construction of magical infrastructure"
        ],
        vendor: 'toad_town_market',
        factionBonus: { mobility: 40, economy: 30, magic: 50 }
    },

    'grand_star_core': {
        id: 'grand_star_core',
        name: "Grand Star Core",
        description: "The reactor of a galaxy. Infinite clean energy.",
        category: SHOP_CATEGORIES.FACTION,
        price: 140000,
        icon: '🌟',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Powers the entire faction/base forever",
            "Can power a planetary shield",
            "Allows space travel",
            "Rosalina wants this back"
        ],
        vendor: 'comet_observatory',
        factionBonus: { energy: 100, defense: 50 }
    },

    'dark_prognosticus': {
        id: 'dark_prognosticus',
        name: "Dark Prognosticus",
        description: "The book that foretells the end of all worlds. Contains the DM's notes.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 180000,
        icon: '📖',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Read the campaign's future events",
            "Learn any secret",
            "Trigger the apocalypse",
            "Sanity loss: 1d10 per page"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Bleck',
        levelRequirement: 19
    },

    'light_prognosticus': {
        id: 'light_prognosticus',
        name: "Light Prognosticus",
        description: "The counter-book. Can rewrite the ending.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 180000,
        icon: '📓',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Change one major campaign event",
            "Resurrect a fallen plotline",
            "Create a 'Happy Ending' failsafe",
            "Requires pure intent"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Merlon',
        levelRequirement: 19
    },    
    'pure_heart': {
        id: 'pure_heart',
        name: "The Pure Heart",
        description: "An artifact of pure love and light. The only counter to the Chaos Heart.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 90000,
        icon: '🤍',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Immunity to all Void/Chaos damage",
            "Can dispel magical barriers of any level",
            "Revives all allies within 100ft to full HP (Once per campaign)",
            "You cannot lie or steal while holding it"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Light Beam',
        levelRequirement: 15
    },
    'royal_sticker': {
        id: 'royal_sticker',
        name: "Royal Sticker (Crown)",
        description: "A shiny crown sticker. Allows you to 'paperize' reality.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 65000,
        icon: '👑',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Action: Flatten a 3D object into a 2D sticker",
            "Action: Paste a sticker into the world to make it real",
            "Includes a sassy fairy companion named Kersti (curse)",
            "Vulnerability to Fire and Water"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'Album',
        levelRequirement: 10
    },
    'dimentio_mask': {
        id: 'dimentio_mask',
        name: "Mask of the Pleaser",
        description: "A black and white mask. Wearing it feels like a joke... or a tragedy.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 75000,
        icon: '🎭',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "At will: Dimension Door",
            "At will: Mirror Image",
            "Can create exploding boxes (4d10 Force)",
            "Alignment shifts to Chaotic Neutral"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'It appears on your face',
        levelRequirement: 12
    },
    'dream_stone_shard': {
        id: 'dream_stone_shard',
        name: "Dream Stone Shard",
        description: "A fragment of the stone that grants dreams. Radiates sleep magic.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 50000,
        icon: '💤',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Enter the Dream World at will",
            "Cast 'Sleep' at 9th level (No HP limit)",
            "Manifest dream objects into reality for 1 minute",
            "Antasma might hunt you"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Pillow',
        levelRequirement: 10
    },
    'grand_star': {
        id: 'grand_star',
        name: "Grand Star",
        description: "A massive star that powers entire galaxies. The energy output is terrifying.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 100000,
        icon: '⭐',
        stock: 1,
        rarity: 'godly',
        effects: [
            "+4 to All Stats (Max 24)",
            "Flight Speed 100ft",
            "Regenerate 20 HP/round",
            "You glow brightly (Stealth is impossible)"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Supernova',
        levelRequirement: 18
    },
    'smithys_hammer': {
        id: 'smithys_hammer',
        name: "Smithy's Sledge",
        description: "The hammer used to forge the Weapon World. Can craft anything.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 42000,
        icon: '🔨',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Weapon: 3d12 Bludgeoning + 2d6 Thunder",
            "Crafting: Create magic items in 1 hour instead of days",
            "Can turn living creatures into weapons (CON save DC 20)"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Anvil',
        levelRequirement: 12
    },
    'golden_tanooki': {
        id: 'golden_tanooki',
        name: "Golden Tanooki Statue",
        description: "A statue that grants permanent invincibility frames... for a price.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 48000,
        icon: '🦊',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Permanent 'Dodge' action (Disadvantage on attacks against you)",
            "Resistance to all damage types",
            "If you fall into a pit, you die instantly (no saves)",
            "You sparkle annoying"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Golden Box',
        levelRequirement: 10
    },
    'paint_star_prism': {
        id: 'paint_star_prism',
        name: "Prisma Fountain",
        description: "Source of infinite paint. Can recolor the world.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 29000,
        icon: '🌈',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Revive 'Colorless' (dead/drained) allies/NPCs",
            "Alter terrain (paint a door to make a door)",
            "Change enemy elemental affinities",
            "Very messy"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Paint Can',
        levelRequirement: 8
    },
    'vampire_wario_cape': {
        id: 'vampire_wario_cape',
        name: "Vampire Wario's Cape",
        description: "A tattered purple cape. Grants the powers of the night.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 34000,
        icon: '🧛',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Transform into a bat (Fly 60ft)",
            "Life Drain: Melee attacks heal you for half damage dealt",
            "Weakness to Garlic (Paralyzed if within 5ft)",
            "Wario wants it back"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Coffin',
        levelRequirement: 8
    },
    'fawful_headgear': {
        id: 'fawful_headgear',
        name: "Vacuum Helmet",
        description: "I HAVE FURY! A helmet with jetpacks and laser cannons.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 36000,
        icon: '🟢',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Fly Speed 30ft",
            "Action: Energy Ball (3d6 Force)",
            "Reaction: Absorb magic missile or energy attacks",
            "You speak in broken, furious English"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'Mustard of Doom',
        levelRequirement: 9
    },
    'beanbean_brooch': {
        id: 'beanbean_brooch',
        name: "Beanstar Brooch",
        description: "A pin containing the essence of the Beanstar. Grants calmness.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 22000,
        icon: '🌟',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Immunity to Fury/Rage effects",
            "Advantage on all CHA checks",
            "Discount 20% at all shops (Passive)",
            "Can speak Beanbean language"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Velvet Box',
        levelRequirement: 6
    },
    'warios_bike': {
        id: 'warios_bike',
        name: "Wario's Chopper",
        description: "A custom motorcycle. Loud, fast, and indestructible.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 20000,
        icon: '🏍️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Land Speed 100ft",
            "Can ram enemies (4d10 Bludgeoning)",
            "Emits black smoke (Obscures vision)",
            "Runs on garlic"
        ],
        vendor: 'wario_direct',
        shippedBy: 'Driven through your wall',
        levelRequirement: 5
    },
    'pebble': {
        id: 'pebble',
        name: "Just A Pebble",
        description: "It's a small rock. Not a star piece. Not a moon rock. Just a rock. Good for throwing at windows.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 100,
        icon: '🪨',
        stock: 50,
        rarity: 'common',
        effects: ["Thrown (range 20/40)", "1 damage", "Insults the target"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },

    'pointy_stick': {
        id: 'pointy_stick',
        name: "Pointy Stick",
        description: "A wooden stick sharpened on one end. The budget adventurer's weapon of choice.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 250,
        icon: '🥢',
        stock: 20,
        rarity: 'common',
        effects: ["1d4 piercing damage", "Breaks on a natural 1"],
        vendor: 'valley_trading_post',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },

    'luigi_hat_replica': {
        id: 'luigi_hat_replica',
        name: "Green Hat Replica",
        description: "A cheap green cap with an 'L' on it. The 'L' stands for 'Low Quality'.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 500,
        icon: '🧢',
        stock: 10,
        rarity: 'common',
        effects: ["+0 AC", "People might mistake you for the other guy", "It itches"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },

    'mistake': {
        id: 'mistake',
        name: "Mistake",
        description: "Zess T. messed up the recipe. It's a burnt, gooey mess on a paper plate.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 150,
        icon: '💩',
        stock: 5,
        rarity: 'common',
        effects: ["Restore 1d4 HP", "Make a CON save (DC 10) or spend next turn vomiting"],
        vendor: 'toad_town_market',
        shippedBy: 'Napkin Wrap',
        levelRequirement: 1
    },

    'broken_watch': {
        id: 'broken_watch',
        name: "Broken Pocket Watch",
        description: "Stopped working years ago. Right twice a day.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '⏱️',
        stock: 1,
        rarity: 'common',
        effects: ["No magical effect", "Looks kind of dignified"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },

    // ============================================
    // === CONSUMABLES (1,000 - 5,000 XP) ===
    // ============================================
    
    'mushroom_basic': {
        id: 'mushroom_basic',
        name: "Standard Mushroom",
        description: "A red-capped mushroom grown in certified Toad Town greenhouses. Restores vitality when consumed.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1000,
        icon: '🍄',
        stock: 20,
        rarity: 'common',
        effects: ["Restore 2d8+2 HP as an action"],
        vendor: 'toad_town_market',
        shippedBy: 'Parakarry Postal Service',
        levelRequirement: 1
    },
    
    'super_mushroom': {
        id: 'super_mushroom',
        name: "Super Mushroom",
        description: "An enhanced mushroom with concentrated healing properties. The slight tingle means it's working.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 2500,
        icon: '🍄',
        stock: 12,
        rarity: 'uncommon',
        effects: ["Restore 4d8+4 HP as an action", "Removes Poisoned condition"],
        vendor: 'toad_town_market',
        shippedBy: 'Parakarry Postal Service',
        levelRequirement: 3
    },
    
    'ultra_mushroom': {
        id: 'ultra_mushroom',
        name: "Ultra Mushroom",
        description: "A premium healing mushroom reserved for serious injuries. Glows faintly in the dark.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 5000,
        icon: '💜',
        stock: 5,
        rarity: 'rare',
        effects: ["Restore 8d8+8 HP as an action", "Removes Poisoned, Paralyzed, or Blinded"],
        vendor: 'shamans_hut',
        shippedBy: 'Nomadic Traders',
        levelRequirement: 5
    },
    
    'honey_syrup': {
        id: 'honey_syrup',
        name: "Honey Syrup",
        description: "Enchanted honey from the Gusty Gardens. Restores magical stamina. The bees were compensated. Mostly.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1500,
        icon: '🍯',
        stock: 15,
        rarity: 'common',
        effects: ["Restore one expended spell slot (up to 2nd level)"],
        vendor: 'toad_town_market',
        shippedBy: 'Parakarry Postal Service',
        levelRequirement: 1
    },
    
    'fire_flower': {
        id: 'fire_flower',
        name: "Fire Flower",
        description: "A vibrant orange blossom crackling with thermal energy. Grants temporary pyrokinetic abilities when consumed.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3000,
        icon: '🔥',
        stock: 8,
        rarity: 'uncommon',
        effects: [
            "Duration: 1 minute",
            "Can cast Produce Flame at will",
            "One use of Burning Hands (2nd level)",
            "Resistance to Fire damage"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Insulated Container Service',
        levelRequirement: 3
    },
    
    'ice_flower': {
        id: 'ice_flower',
        name: "Ice Flower",
        description: "A crystalline blue blossom that never melts. Grants cryokinetic abilities.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3000,
        icon: '❄️',
        stock: 8,
        rarity: 'uncommon',
        effects: [
            "Duration: 1 minute",
            "Can cast Ray of Frost at will",
            "One use of Ice Knife (2nd level)",
            "Resistance to Cold damage"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Cryogenic Courier',
        levelRequirement: 3
    },
    
    'mighty_tonic': {
        id: 'mighty_tonic',
        name: "Mighty Tonic",
        description: "A bubbling red potion brewed by Koopa Troop alchemists. Enhances physical capabilities temporarily.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 2000,
        icon: '🧪',
        stock: 10,
        rarity: 'uncommon',
        effects: [
            "Duration: 10 minutes",
            "+2 bonus to Strength checks and saves",
            "+1d4 to melee damage rolls"
        ],
        vendor: 'valley_trading_post',
        shippedBy: 'Koopa Courier Corps',
        levelRequirement: 3
    },
    
    'life_shroom': {
        id: 'life_shroom',
        name: "Life Shroom",
        description: "A pale green mushroom with an unsettling glow. Automatically activates when you fall unconscious.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8000,
        icon: '💚',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Passive: Activates when reduced to 0 HP",
            "Immediately regain 1 HP and stabilize",
            "Consumed upon activation"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Sacred Container Protocol',
        levelRequirement: 5,
        warning: "Iron Legion considers possession 'evidence of unnatural practices'"
    },
    
    // ============================================
    // === EQUIPMENT (3,000 - 15,000 XP) ===
    // ============================================
    
    'hammer_basic': {
        id: 'hammer_basic',
        name: "Standard Hammer",
        description: "A reliable wooden mallet reinforced with iron bands. The plumber's tool of choice.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '🔨',
        stock: 8,
        rarity: 'common',
        effects: [
            "1d8 bludgeoning damage",
            "Can break brick blocks",
            "Versatile (1d10 two-handed)"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Heavy Goods Carrier',
        levelRequirement: 1
    },
    
    'super_hammer': {
        id: 'super_hammer',
        name: "Super Hammer",
        description: "A masterwork hammer with a weighted head. The preferred weapon of serious adventurers.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8500,
        icon: '🔨',
        stock: 4,
        rarity: 'uncommon',
        effects: [
            "1d10 bludgeoning damage",
            "+1 to attack rolls",
            "Can break metal blocks",
            "Versatile (1d12 two-handed)"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Armored Courier',
        levelRequirement: 4
    },
    
    'koopa_shell_shield': {
        id: 'koopa_shell_shield',
        name: "Koopa Shell Shield",
        description: "A reinforced green shell converted into a buckler. Ethically sourced. Probably.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '🛡️',
        stock: 6,
        rarity: 'common',
        effects: [
            "+1 AC while equipped",
            "Can be thrown (20/60) for 1d6 damage, returns to hand",
            "Resistant to being knocked prone"
        ],
        vendor: 'valley_trading_post',
        shippedBy: 'Koopa Courier Corps',
        levelRequirement: 2
    },
    
    'super_boots': {
        id: 'super_boots',
        name: "Super Boots",
        description: "Red leather boots enchanted for enhanced jumping. Spring-loaded heels included.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6500,
        icon: '👢',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Jump distance doubled",
            "Can perform Ground Pound (bonus action, 2d6 to adjacent)",
            "Fall damage reduced by 20 feet"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Parakarry Postal Service',
        levelRequirement: 3
    },
    
    'power_rush_badge': {
        id: 'power_rush_badge',
        name: "Power Rush Badge",
        description: "A crimson badge that pulses with desperate energy. Danger enhances performance.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 12000,
        icon: '💢',
        stock: 3,
        rarity: 'rare',
        effects: [
            "While below half HP: +1d6 to damage rolls",
            "While below quarter HP: +2d6 to damage rolls",
            "Requires attunement"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Secure Courier',
        levelRequirement: 5
    },
    
    'lucky_day_badge': {
        id: 'lucky_day_badge',
        name: "Lucky Day Badge",
        description: "A four-leaf clover pin blessed by fortune. The Cosmic Jesters approve.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🍀',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Once per long rest: Reroll any d20 roll",
            "Enemies have -1 to attack rolls against you",
            "Requires attunement"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'Anonymous Courier',
        levelRequirement: 5
    },
    
    // ============================================
    // === CURIOSITIES (2,000 - 10,000 XP) ===
    // ============================================
    
    'mystery_box': {
        id: 'mystery_box',
        name: "? Block",
        description: "A hovering yellow block with a question mark. Strike it to receive a random reward.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3500,
        icon: '❓',
        stock: 10,
        rarity: 'uncommon',
        effects: [
            "Single use",
            "Roll 1d100 on the Mystery Box Table",
            "Results range from common consumables to rare items"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Anti-Gravity Container',
        levelRequirement: 1
    },
    
    'bob_omb_standard': {
        id: 'bob_omb_standard',
        name: "Bob-omb (Defused)",
        description: "A standard explosive. The fuse has been removed for safety. Re-fusing voids warranty.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2500,
        icon: '💣',
        stock: 8,
        rarity: 'common',
        effects: [
            "Throwable (range 30ft)",
            "Explodes at start of your next turn",
            "All creatures in 10ft: 4d6 fire damage, DEX save DC 14 for half"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'EXTREMELY Careful Handling',
        levelRequirement: 3,
        warning: "Possession may be illegal in some jurisdictions"
    },
    
    'boo_bell': {
        id: 'boo_bell',
        name: "Boo's Bell",
        description: "A spectral bell that resonates with ghostly energy. Ring to reveal the hidden.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 5500,
        icon: '🔔',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Action: Ring the bell",
            "All invisible creatures within 30ft become visible for 1 minute",
            "Ghosts and spirits must make CHA save or be Frightened of you"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Blessed Container',
        levelRequirement: 4
    },
    
    // ============================================
    // === SERVICES (5,000 - 25,000 XP) ===
    // ============================================
    
    'toad_house_voucher': {
        id: 'toad_house_voucher',
        name: "Toad House Voucher",
        description: "A voucher for one night at any official Toad House. Full rest, hot meal, and guaranteed safety.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 4500,
        icon: '🏠',
        stock: 20,
        rarity: 'common',
        effects: [
            "Full long rest benefits",
            "Remove all exhaustion",
            "Hot meal included",
            "Secure storage for belongings"
        ],
        vendor: 'toad_town_market',
        shippedBy: 'Instant (Digital Voucher)',
        levelRequirement: 1
    },
    
    'bounty_clearance': {
        id: 'bounty_clearance',
        name: "Bounty Clearance Service",
        description: "The Onyx Hand will adjust certain records. Witnesses relocated. Questions unanswered.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 24000,
        icon: '🧹',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Reduce bounty with one faction by 50%",
            "Remove one minor arrest warrant",
            "Clean one criminal record entry",
            "Costs almost your entire XP pool"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Meeting Arranged Discreetly',
        levelRequirement: 1,
        warning: "Illegal under most jurisdictions"
    },
    
    'rakasha_tattoo': {
        id: 'rakasha_tattoo',
        name: "Rakasha Spirit Tattoo",
        description: "A sacred tattoo binding a minor spirit to your flesh. Requires the Rakasha Alliance.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 20000,
        icon: '🐯',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Gain a spirit familiar (DM determines abilities)",
            "Advantage on Survival in wilderness",
            "Can communicate with Rakasha telepathically within 1 mile",
            "Tattoo occasionally moves on its own"
        ],
        vendor: 'rakasha_grounds',
        shippedBy: 'Ritual Performed In Person',
        levelRequirement: 5,
        requirement: "Requires active Rakasha Alliance"
    },
    
    // ============================================
    // === FACTION UPGRADES (10,000 - 25,000 XP) ===
    // ============================================
    
    'faction_medical_supplies': {
        id: 'faction_medical_supplies',
        name: "Medical Supply Cache",
        description: "A shipment of healing supplies for the faction medics. Reduces casualties.",
        category: SHOP_CATEGORIES.FACTION,
        price: 10000,
        icon: '🏥',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Injured toads recover in half the time",
            "Critical injuries have +20% survival rate",
            "+5% to faction Morale"
        ],
        vendor: 'faction_quartermaster',
        shippedBy: 'Priority Medical Courier',
        levelRequirement: 1,
        factionBonus: {
            morale: 5,
            medicalCapacity: 20
        }
    },
    
    'faction_weapon_cache': {
        id: 'faction_weapon_cache',
        name: "Weapons Cache",
        description: "A shipment of quality weapons from Koopa defectors. Arms the troops.",
        category: SHOP_CATEGORIES.FACTION,
        price: 15000,
        icon: '⚔️',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+15% to Combat Readiness",
            "Up to 10 toads gain +1 to attack rolls",
            "Unlocks 'Armed Patrol' cohort option"
        ],
        vendor: 'valley_trading_post',
        shippedBy: 'Koopa Smuggling Routes',
        levelRequirement: 1,
        factionBonus: {
            combatReadiness: 15,
            loyalty: 5
        }
    },
    
    'faction_fortification': {
        id: 'faction_fortification',
        name: "Base Fortification Package",
        description: "Materials and expertise to improve defensive structures at current base.",
        category: SHOP_CATEGORIES.FACTION,
        price: 22000,
        icon: '🏰',
        stock: 1,
        rarity: 'rare',
        effects: [
            "+25% defense rating for base",
            "Reduces casualties during attacks by 30%",
            "Adds watch towers and alarm systems",
            "+5% to Loyalty (toads feel safe)"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Construction Crew Dispatched',
        levelRequirement: 1,
        factionBonus: {
            loyalty: 5,
            defense: 25
        }
    },
    
    'faction_vehicle_repair': {
        id: 'faction_vehicle_repair',
        name: "Vigilance Repair Fund",
        description: "Parts and expertise to repair damage to the airship Vigilance.",
        category: SHOP_CATEGORIES.FACTION,
        price: 25000,
        icon: '🔧',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Restore Vigilance to 75% operational capacity",
            "Repair hull breaches from Iron Legion boarding",
            "Restore partial weapons systems",
            "+15% Morale (home restored)",
            "Takes every last coin you have"
        ],
        vendor: 'gilded_gryphon',
        shippedBy: 'Engineering Team Required',
        levelRequirement: 1,
        factionBonus: {
            morale: 15,
            mobility: 30
        }
    },
    
    // ============================================
    // === PREMIUM (8,000 - 25,000 XP) ===
    // ============================================
    
    'golden_mushroom': {
        id: 'golden_mushroom',
        name: "Golden Mushroom",
        description: "A mushroom made of solid gold. Mystical properties unknown. Definitely valuable.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 15000,
        icon: '🌟',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Worth 5,000 gold to any merchant",
            "Consume: Restore all HP and remove all conditions",
            "Trade at Shooting Star Summit for rare artifact"
        ],
        vendor: 'comet_observatory',
        shippedBy: 'Warp Pipe Direct',
        levelRequirement: 1
    },
    
    'tanooki_leaf': {
        id: 'tanooki_leaf',
        name: "Tanooki Leaf",
        description: "A magical leaf granting the abilities of the legendary Tanooki. Transform and deceive.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 20000,
        icon: '🍂',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Slow fall always active while held",
            "Action: Transform into statue (lasts until you move)",
            "As statue: +10 to Stealth, appear as normal stone",
            "Grow a raccoon tail (purely cosmetic)"
        ],
        vendor: 'shamans_hut',
        shippedBy: 'Mystical Container Protocol',
        levelRequirement: 4
    },
    
    'vanish_cap': {
        id: 'vanish_cap',
        name: "Vanish Cap",
        description: "A blue cap that grants temporary invisibility. Sound and smell not affected.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 25000,
        icon: '🧢',
        stock: 1,
        rarity: 'rare',
        effects: [
            "3 charges per long rest",
            "Bonus action: Become invisible for 1 minute",
            "Ends if you attack or cast a spell",
            "Clothes and carried items also invisible"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'Anonymous Courier',
        levelRequirement: 5
    },
    
    'warios_gold_card': {
        id: 'warios_gold_card',
        name: "Wario's Gold Membership",
        description: "A shiny plastic card. It does absolutely nothing but prove you spent all your money.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 25000,
        icon: '💳',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Drains your entire XP pool",
            "Unlocks a special dialogue option with Wario",
            "You get a sticker",
            "No refunds"
        ],
        vendor: 'wario_direct',
        shippedBy: 'Gold Plated Envelope',
        levelRequirement: 1
    },
    
    // ============================================
    // === FORBIDDEN (40,000 - 100,000 XP) ===
    // ============================================
    // REBALANCED: These are now impossible to buy with current 25k pool
    
    'dark_star_essence': {
        id: 'dark_star_essence',
        name: "Dark Star Essence",
        description: "Concentrated malevolence in a vial. It whispers. It knows your name. You cannot afford the price it asks.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 45000,
        icon: '🌑',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Consume: +2 to all ability scores for 1 hour",
            "Afterward: Roll on Corruption Table (DM has table)",
            "Permanent: Fawful becomes aware of your existence"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'SEALED LOCATION - PICKUP ONLY',
        levelRequirement: 10,
        warning: "Mages' Guild will vaporize you on sight if caught with this"
    },
    
    'shadow_queen_tear': {
        id: 'shadow_queen_tear',
        name: "Shadow Queen's Tear",
        description: "A crystallized tear from the ancient Shadow Queen. Power at a terrible cost.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 100000,
        icon: '🖤',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Permanent: Gain Shadow Step (teleport 30ft through darkness)",
            "Permanent: Darkvision 120ft",
            "Permanent: Sunlight Sensitivity (disadvantage in direct sunlight)",
            "The Shadow Queen is aware of you"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'SEALED - PALACE OF SHADOW ONLY',
        levelRequirement: 15,
        warning: "The Shadow Queen wants it back. She is patient."
    },
    
    'chaos_heart_shard': {
        id: 'chaos_heart_shard',
        name: "Shard of the Chaos Heart",
        description: "A fragment of dimensional instability. The Cosmic Jesters' holiest relic.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 75000,
        icon: '💜',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "On critical hit: Reality warps (roll on Wild Magic table)",
            "Advantage on Chaos-based magic",
            "Disadvantage on all saves vs. Order-based effects",
            "Dimensions occasionally bleed into your vicinity"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'DIMENSIONAL INSTABILITY - PICKUP ONLY',
        levelRequirement: 12,
        warning: "Possession punishable by banishment to the Void Between Worlds"
    },
    
    'xo_staff_fragment': {
        id: 'xo_staff_fragment',
        name: "Fragment of X.O.'s Staff",
        description: "A splinter from the shattered staff. Radiates unstable magical energy.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 60000,
        icon: '🔮',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Spellcasting focus: +1 to spell attack rolls",
            "Once per day: Cast any spell you know at one level higher",
            "On natural 1: Staff fragment pulses, take 2d10 force damage",
            "Dan may have complicated feelings about this"
        ],
        vendor: 'rogueport_black_market',
        shippedBy: 'MAGICALLY SHIELDED CONTAINER',
        levelRequirement: 10,
        warning: "Connected to the Vigilance incident. Iron Legion will arrest on sight."
    }
};

// ============================================
// === HELPER FUNCTIONS ===
// ============================================

export function getShopStats() {
    const items = Object.values(SHOP_ITEMS);
    return {
        totalItems: items.length,
        totalStock: items.reduce((sum, item) => sum + item.stock, 0),
        cheapest: Math.min(...items.map(i => i.price)),
        mostExpensive: Math.max(...items.map(i => i.price)),
        averagePrice: Math.round(items.reduce((sum, i) => sum + i.price, 0) / items.length),
        byCategory: {
            [SHOP_CATEGORIES.CONSUMABLES]: items.filter(i => i.category === SHOP_CATEGORIES.CONSUMABLES).length,
            [SHOP_CATEGORIES.EQUIPMENT]: items.filter(i => i.category === SHOP_CATEGORIES.EQUIPMENT).length,
            [SHOP_CATEGORIES.CURIOSITIES]: items.filter(i => i.category === SHOP_CATEGORIES.CURIOSITIES).length,
            [SHOP_CATEGORIES.SERVICES]: items.filter(i => i.category === SHOP_CATEGORIES.SERVICES).length,
            [SHOP_CATEGORIES.FACTION]: items.filter(i => i.category === SHOP_CATEGORIES.FACTION).length,
            [SHOP_CATEGORIES.FORBIDDEN]: items.filter(i => i.category === SHOP_CATEGORIES.FORBIDDEN).length,
            [SHOP_CATEGORIES.PREMIUM]: items.filter(i => i.category === SHOP_CATEGORIES.PREMIUM).length
        },
        byRarity: {
            common: items.filter(i => i.rarity === 'common').length,
            uncommon: items.filter(i => i.rarity === 'uncommon').length,
            rare: items.filter(i => i.rarity === 'rare').length,
            legendary: items.filter(i => i.rarity === 'legendary').length
        }
    };
}

export function getItemsByVendor(vendorId) {
    return Object.values(SHOP_ITEMS).filter(item => item.vendor === vendorId);
}

export function getItemsByCategory(category) {
    return Object.values(SHOP_ITEMS).filter(item => item.category === category);
}

export function getAffordableItems(availableXP) {
    return Object.values(SHOP_ITEMS).filter(item => item.price <= availableXP);
}

export function getFactionUpgrades() {
    return Object.values(SHOP_ITEMS).filter(item => item.category === SHOP_CATEGORIES.FACTION);
}

export function calculateFactionBonuses(purchasedFactionItems) {
    const bonuses = {
        morale: 0,
        loyalty: 0,
        combatReadiness: 0,
        medicalCapacity: 0,
        intelligence: 0,
        defense: 0,
        mobility: 0,
        diplomacy: 0,
        operations: 0
    };
    
    purchasedFactionItems.forEach(itemId => {
        const item = SHOP_ITEMS[itemId];
        if (item && item.factionBonus) {
            Object.entries(item.factionBonus).forEach(([key, value]) => {
                if (bonuses.hasOwnProperty(key)) {
                    bonuses[key] += value;
                }
            });
        }
    });
    
    return bonuses;
}

export function getShippingOptions(vendorId) {
    const vendor = VENDORS[vendorId];
    if (!vendor) return [SHIPPING_METHODS.STANDARD];
    
    return vendor.shippingMethods.map(methodId => SHIPPING_METHODS[methodId.toUpperCase()]);
}

export function calculateShippingCost(items, shippingMethod) {
    const baseShippingCost = SHIPPING_METHODS[shippingMethod.toUpperCase()]?.cost || 0;
    
    // Bulk discount: 10% off shipping for orders over 10,000 XP
    const orderTotal = items.reduce((sum, item) => sum + item.price, 0);
    const discount = orderTotal > 10000 ? 0.9 : 1;
    
    return Math.round(baseShippingCost * discount);
}