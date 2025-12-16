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
        cost: 5000,
        icon: '☁️'
    },
    WARP: {
        id: 'warp',
        name: 'Warp Pipe Direct',
        description: 'Instant delivery via pipe network',
        deliveryTime: 'Instant',
        cost: 15000,
        icon: '🟢'
    },
    STEALTH: {
        id: 'stealth',
        name: 'Shy Guy Smuggling',
        description: 'Untraceable delivery, no questions asked',
        deliveryTime: '2-4 days',
        cost: 20000,
        icon: '🎭'
    },
    MILITARY: {
        id: 'military',
        name: 'Koopa Troop Airlift',
        description: 'Armed escort, guaranteed delivery',
        deliveryTime: '1 day',
        cost: 30000,
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
'warp_pipe_installation': {
    id: 'warp_pipe_installation',
    name: "Warp Pipe Installation",
    description: "A licensed plumber from the Underground Network installs a permanent warp pipe between two locations.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 100000,
    icon: '🪨',
    stock: 1,
    rarity: 'epic',
    effects: [
        "Creates a permanent two-way pipe portal (max 200ft apart)",
        "Pipe is indestructible (AC 20, 100 HP, immune to spells)",
        "Requires a 'Pipe License' (DM discretion)"
    ],
    vendor: 'warp_plumbing_corp',
    shippedBy: 'Underground Crew',
    levelRequirement: 8
},

'blessing_of_the_elders': {
    id: 'blessing_of_the_elders',
    name: "Blessing of the Elders",
    description: "A ritual performed by ancient Toad sages to imbue a weapon or armor with ancestral power.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 75000,
    icon: '🙏',
    stock: 3,
    rarity: 'epic',
    effects: [
        "One weapon or armor gains +1 bonus for 1 year (non-magical items become +1)",
        "Once per month: cast *Sanctuary* on the item’s user",
        "Requires a 1-hour ceremony and a personal sacrifice (DM discretion)"
    ],
    vendor: 'toad_council',
    shippedBy: 'Ritual Scroll',
    levelRequirement: 6
},

'mercenary_band_hire': {
    id: 'mercenary_band_hire',
    name: "Hire: 50-Unit Mercenary Band",
    description: "A crack squad of Koopa Troopas, Hammer Bros, and Snifits under a contract.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 300000,
    icon: '🪖',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "50 troops (CR 1/2 to 2) under your command for 1 week",
        "Can be deployed for defense, escort, or assault",
        "If they suffer >50% losses, they disband and demand double pay"
    ],
    vendor: 'iron_legion',
    shippedBy: 'Marching Orders',
    levelRequirement: 10,
    factionBonus: { combatReadiness: 30, economy: -10 }
},

'fey_tattoo_ritual': {
    id: 'fey_tattoo_ritual',
    name: "Fey Tattoo Ritual",
    description: "A moonlit ceremony where a Fey artist etches a permanent magical tattoo onto your body.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 200000,
    icon: '🖤',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Gain one Fey-themed feature (e.g., *Misty Step*, *Fey Charm*, or *Wild Magic Surge*)",
        "Tattoo glows when Fey are near",
        "Fey may request favors in the future (no takebacks)"
    ],
    vendor: 'fey_market',
    shippedBy: 'Moonlit Inkwell',
    levelRequirement: 12
},

'dragon_breath_insurance': {
    id: 'dragon_breath_insurance',
    name: "Dragon-Breath Insurance Policy",
    description: "A magical contract that covers you against fire-based attacks (or your own fiery mistakes).",
    category: SHOP_CATEGORIES.SERVICES,
    price: 50000,
    icon: '📜',
    stock: 5,
    rarity: 'rare',
    effects: [
        "For 1 year, you take half damage from Fire attacks",
        "If you die by fire, your body is restored at dawn (1 use/year)",
        "Policy must be renewed annually"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Notarized Scroll',
    levelRequirement: 5
},

'haunting_consultation': {
    id: 'haunting_consultation',
    name: "Haunting Consultation",
    description: "A professional ghost helps you haunt a location (or yourself) for maximum effect.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 25000,
    icon: '👻',
    stock: 3,
    rarity: 'rare',
    effects: [
        "A ghost will haunt a room for 1 week (creates eerie ambiance, scares intruders)",
        "Or, haunt *yourself*: gain *Incorporeality* for 10 minutes/day",
        "Ghost may demand snacks or a backstory"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Spirit Jar',
    levelRequirement: 4
},

'airship_pilot_rental': {
    id: 'airship_pilot_rental',
    name: "Airship Pilot Rental",
    description: "Hire a seasoned pilot for your airship for a single voyage.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 40000,
    icon: '🧑‍✈️',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Pilot handles navigation, evasion, and combat for 1 long trip (1d4 days)",
        "Pilot has +5 to airship-related rolls",
        "Pilot may demand a share of loot"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Crew Manifest',
    levelRequirement: 6
},

'ancestral_weapon_forging': {
    id: 'ancestral_weapon_forging',
    name: "Ancestral Weapon Forging",
    description: "A master blacksmith reforges your weapon using your ancestors' spirits.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 150000,
    icon: '⚒️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Weapon gains +2, *sentience (1 INT)*, and a unique ancestral power (DM discretion)",
        "Requires a personal heirloom and 3 days of forging",
        "Ancestors may whisper advice (or warnings)"
    ],
    vendor: 'steamworks',
    shippedBy: 'Forge-Fire Scroll',
    levelRequirement: 10
},

'faction_lobbying': {
    id: 'faction_lobbying',
    name: "Faction Lobbying (1 Day)",
    description: "A political agent negotiates on your behalf to improve your standing with a faction.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 100000,
    icon: '🤝',
    stock: 5,
    rarity: 'epic',
    effects: [
        "Gain +20 reputation with one faction",
        "May unlock faction-specific perks or quests",
        "Agent may require future favors"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Sealed Proposal',
    levelRequirement: 8,
    factionBonus: { influence: 20 }
},

'personal_weather_control': {
    id: 'personal_weather_control',
    name: "Personal Weather Control (1 Hour)",
    description: "A cloud mage alters the weather in a 1-mile radius for a short time.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 80000,
    icon: '🌤️',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Choose: Clear, Rain, Fog, or Storm (DM may impose limits)",
        "Can be used to disrupt enemies or aid allies",
        "Overuse may anger the weather spirits"
    ],
    vendor: 'storm_seller',
    shippedBy: 'Cloud Vial',
    levelRequirement: 7
},

'undead_burial': {
    id: 'undead_burial',
    name: "Undead Burial Service",
    description: "A necromancer ensures a corpse is *truly* dead (or repurposed).",
    category: SHOP_CATEGORIES.SERVICES,
    price: 30000,
    icon: '⚰️',
    stock: 10,
    rarity: 'rare',
    effects: [
        "Guarantees a corpse cannot rise as undead",
        "Or, transforms it into a loyal zombie (CR 1/2) for 1 week",
        "Service includes a small ceremony"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Bone Box',
    levelRequirement: 5
},

'fey_deal_negotiation': {
    id: 'fey_deal_negotiation',
    name: "Fey Deal Negotiation",
    description: "A lawyer specializing in Fey contracts ensures your deal is fair (or as fair as Fey allow).",
    category: SHOP_CATEGORIES.SERVICES,
    price: 120000,
    icon: '🧑‍⚖️',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Negotiate a Fey pact with +2 to all checks",
        "May insert loopholes or protections into the deal",
        "Fey lawyer may demand a small part of your soul"
    ],
    vendor: 'fey_market',
    shippedBy: 'Golden Quill',
    levelRequirement: 10
},

'guild_membership': {
    id: 'guild_membership',
    name: "Guild Membership (1 Year)",
    description: "A year-long membership to a powerful guild (Thieves, Mages, Mercenaries, etc.).",
    category: SHOP_CATEGORIES.SERVICES,
    price: 200000,
    icon: '🎖️',
    stock: 5,
    rarity: 'legendary',
    effects: [
        "Gain access to guild resources, training, and contacts",
        "May request aid (DM discretion)",
        "Requires monthly dues (10% of price)"
    ],
    vendor: 'guild_hall',
    shippedBy: 'Guild Charter',
    levelRequirement: 8
},

'personal_bodyguard': {
    id: 'personal_bodyguard',
    name: "Personal Bodyguard (1 Month)",
    description: "A highly trained bodyguard (CR 3) watches over you for a month.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 60000,
    icon: '🛡️',
    stock: 10,
    rarity: 'rare',
    effects: [
        "Bodyguard has AC 18, 50 HP, and proficiency in combat",
        "Will sacrifice themselves to save you once",
        "May demand higher pay if danger is extreme"
    ],
    vendor: 'iron_legion',
    shippedBy: 'Contract Scroll',
    levelRequirement: 4
},

'reality_revision_consultation': {
    id: 'reality_revision_consultation',
    name: "Reality Revision Consultation",
    description: "A cosmic entity offers advice on how to alter reality (for a price).",
    category: SHOP_CATEGORIES.SERVICES,
    price: 500000,
    icon: '🌌',
    stock: 1,
    rarity: 'godly',
    effects: [
        "DM provides one *Wish*-like option with a clear cost",
        "May rewrite a past event (but consequences follow)",
        "Entity may demand a future service"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Cosmic Scroll',
    levelRequirement: 15
},

'golden_warp_pipe': {
    id: 'golden_warp_pipe',
    name: "Golden Warp Pipe",
    description: "A solid gold warp pipe that teleports you in style.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 250000,
    icon: '🪙',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Teleports user to any known location (1/day)",
        "Pipe is immune to damage and theft",
        "Leaves a trail of gold dust"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Armored Truck',
    levelRequirement: 10
},

'personal_island': {
    id: 'personal_island',
    name: "Personal Island (1 Acre)",
    description: "A small, private island in the middle of the ocean.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 1000000,
    icon: '🏝️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Island is yours to build, defend, or abandon",
        "May attract pirates, treasure, or sea monsters",
        "Deed is magically binding"
    ],
    vendor: 'mariner_guild',
    shippedBy: 'Nautical Chart',
    levelRequirement: 12
},

'royal_feast': {
    id: 'royal_feast',
    name: "Royal Feast (For 100 Guests)",
    description: "A banquet fit for a king, complete with entertainment and enchanted food.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 150000,
    icon: '🍽️',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Guests gain +2 to all rolls for 1 day",
        "May improve relations with factions",
        "Leftovers are magically preserved"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Floating Banquet Hall',
    levelRequirement: 8
},

'infinite_wine_cask': {
    id: 'infinite_wine_cask',
    name: "Infinite Wine Cask",
    description: "A cask that refills with fine wine every dawn.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 300000,
    icon: '🍷',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Produces 100 bottles of high-quality wine/day",
        "Wine grants +1 to CHA checks for 1 hour",
        "Cask is sentient (but never speaks)"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Cask of Gold',
    levelRequirement: 6
},

'private_observatory': {
    id: 'private_observatory',
    name: "Private Observatory",
    description: "A portable, high-tech observatory that fits in a backpack.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 500000,
    icon: '🔭',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Can see through walls, clouds, and time (DM discretion)",
        "Reveals hidden celestial events",
        "Requires a clear night sky"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Telescope Case',
    levelRequirement: 12
},

'eternal_fireplace': {
    id: 'eternal_fireplace',
    name: "Eternal Fireplace",
    description: "A fireplace that burns without fuel and never goes out.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 200000,
    icon: '🔥',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Grants +2 to all saves for those nearby",
        "Can be used to send messages through flames",
        "Fire is warm but never burns"
    ],
    vendor: 'steamworks',
    shippedBy: 'Stone Hearth',
    levelRequirement: 8
},

'personal_butler': {
    id: 'personal_butler',
    name: "Personal Butler (Lifetime)",
    description: "A loyal, magically bound butler who serves you eternally.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 400000,
    icon: '🧑‍💼',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Butler handles all mundane tasks (cooking, cleaning, etc.)",
        "Can be summoned with a whistle",
        "Butler is immortal but not combat-capable"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Butler Contract',
    levelRequirement: 10
},

'golden_toilet': {
    id: 'golden_toilet',
    name: "Golden Toilet",
    description: "A throne-like toilet that flushes away your worries (and waste).",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 100000,
    icon: '🚽',
    stock: 1,
    rarity: 'epic',
    effects: [
        "Grants +1 to all rolls after use",
        "Toilet is indestructible and self-cleaning",
        "Attracts jealous nobles"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Gold Plating',
    levelRequirement: 1
},

'personal_meteor_shower': {
    id: 'personal_meteor_shower',
    name: "Personal Meteor Shower (1 Night)",
    description: "A celestial event arranged just for you.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 300000,
    icon: '🌠',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "A safe meteor shower occurs over your location (1 night)",
        "May reveal rare minerals or celestial messages",
        "Guests gain +2 to INT checks for 1 day"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Celestial Scroll',
    levelRequirement: 12
},

'infinite_ballroom': {
    id: 'infinite_ballroom',
    name: "Infinite Ballroom",
    description: "A pocket dimension ballroom that expands to fit any event.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 600000,
    icon: '🎭',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Ballroom can host up to 10,000 guests",
        "Music, food, and decorations are provided",
        "May attract Fey or nobles"
    ],
    vendor: 'fey_market',
    shippedBy: 'Pocket Dimension Key',
    levelRequirement: 10
},

'personal_sunrise': {
    id: 'personal_sunrise',
    name: "Personal Sunrise (1 Day)",
    description: "A sunrise occurs exactly when you want it to.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 100000,
    icon: '🌅',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Sunrise occurs at a time of your choosing (even underground)",
        "Grants +2 to all rolls for 1 day",
        "May attract sun worshippers"
    ],
    vendor: 'lunar_auction',
    shippedBy: 'Sunbeam Vial',
    levelRequirement: 8
},

'eternal_fountain': {
    id: 'eternal_fountain',
    name: "Eternal Fountain",
    description: "A fountain that flows with magical water.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 250000,
    icon: '⛲',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Water heals 1d4 HP per sip",
        "Fountain is indestructible",
        "May attract water spirits"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Stone Basin',
    levelRequirement: 8
},

'personal_moon': {
    id: 'personal_moon',
    name: "Personal Moon (1 Night)",
    description: "A small moon appears in the sky for you.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 500000,
    icon: '🌕',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Moon grants +2 to all rolls for 1 night",
        "May reveal hidden paths or secrets",
        "Guests gain +1 to CHA checks"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Lunar Scroll',
    levelRequirement: 12
},

'infinite_garden': {
    id: 'infinite_garden',
    name: "Infinite Garden",
    description: "A pocket dimension garden that grows any plant.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 400000,
    icon: '🌿',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Garden grows any plant you desire",
        "Plants are always in peak condition",
        "May attract dryads or gardeners"
    ],
    vendor: 'fey_market',
    shippedBy: 'Pocket Dimension Key',
    levelRequirement: 10
},

'royal_pardon': {
    id: 'royal_pardon',
    name: "Royal Pardon",
    description: "A decree that clears you of any crime.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 200000,
    icon: '📜',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "All bounties and criminal charges are erased",
        "Pardon is magically enforced",
        "May anger the original victims"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Royal Seal',
    levelRequirement: 8
},
// ============================================
// === 40 NEW ITEMS (SERVICES & PREMIUM FOCUS) ===
// ============================================

'identification_service': {
    id: 'identification_service',
    name: "Arcane Identification Service",
    description: "A certified appraiser will identify any magical item, curse, or enchantment within 24 hours.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 500,
    icon: '🔍',
    stock: 999,
    rarity: 'common',
    effects: [
        "Identify 1 item (magical properties, curses, origin)",
        "Expert confirmation of rarity and approximate value",
        "Provides written certificate"
    ],
    vendor: 'arcane_institute',
    shippedBy: 'Personal Appointment',
    levelRequirement: 1
},

'resurrection_consultation': {
    id: 'resurrection_consultation',
    name: "Resurrection Consultation",
    description: "A 1-hour session with a High Priest to discuss bringing someone back from the dead.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 2500,
    icon: '✨',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Guidance on ritual requirements and material costs",
        "Assessment of target's spiritual readiness",
        "Connections to appropriate resurrection specialists (Discount: 10%)"
    ],
    vendor: 'temple_eternal',
    shippedBy: 'Scheduled Meeting',
    levelRequirement: 5
},

'bounty_hunting_contract': {
    id: 'bounty_hunting_contract',
    name: "Bounty Hunting Contract (Active)",
    description: "Official paperwork registering you as a licensed bounty hunter for a single high-value target.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 1200,
    icon: '📋',
    stock: 50,
    rarity: 'uncommon',
    effects: [
        "Legal authority to capture/interrogate target",
        "Guild protection",
        "10% commission split with Bounty Master",
        "Contract expires after 30 days or target capture"
    ],
    vendor: 'bounty_guild',
    shippedBy: 'Sealed Document',
    levelRequirement: 3
},

'herbalism_tutoring': {
    id: 'herbalism_tutoring',
    name: "Herbalism Tutoring (5 Sessions)",
    description: "Five 2-hour sessions with a master herbalist learning rare plant cultivation and extraction.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 3800,
    icon: '🌿',
    stock: 8,
    rarity: 'rare',
    effects: [
        "+1 to Herbalism checks permanently",
        "Learn recipe for 1 rare potion (DM discretion)",
        "Gain access to herbalist's garden (cheaper ingredients 20%)"
    ],
    vendor: 'apothecary_guild',
    shippedBy: 'Class Enrollment',
    levelRequirement: 2
},

'enchantment_reinforcement': {
    id: 'enchantment_reinforcement',
    name: "Enchantment Reinforcement",
    description: "A master enchanter reinforces a magical item, making it more durable and potent.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 15000,
    icon: '✨',
    stock: 20,
    rarity: 'rare',
    effects: [
        "Target item gains +1 to AC or damage (non-stacking)",
        "Item breaks on natural 1 instead of natural 2-5",
        "Ritual takes 1 week; item must be left behind"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Commissioned Service',
    levelRequirement: 5
},

'safe_house_rental': {
    id: 'safe_house_rental',
    name: "Safe House Rental (1 Month)",
    description: "An anonymous, well-hidden residence with defensive wards and an exit tunnel.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 8000,
    icon: '🏠',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Secure lodging for 30 days (Wards prevent scrying/detection)",
        "2 secret exits to different districts",
        "Monthly supplies included (food, water, basic medicine)",
        "Landlord asks no questions"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Keys Delivered',
    levelRequirement: 3
},

'forgery_commission': {
    id: 'forgery_commission',
    name: "Forgery Commission (1 Document)",
    description: "Hire a master forger to create a convincing fake: passport, deed, letter of nobility, etc.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 5500,
    icon: '🖇️',
    stock: 15,
    rarity: 'rare',
    effects: [
        "Create 1 convincing forged document",
        "Forgery DC 16 to detect (normal inspection: DC 12)",
        "Takes 3 days; risky if document is studied closely"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Covert Delivery',
    levelRequirement: 4
},

'pest_extermination': {
    id: 'pest_extermination',
    name: "Pest Extermination (Professional)",
    description: "A licensed exterminator removes dangerous creatures (rats, spiders, minor demons) from your property.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 1800,
    icon: '🪲',
    stock: 30,
    rarity: 'uncommon',
    effects: [
        "Remove all pests from a building (24-hour guarantee)",
        "Handles creatures up to CR 2",
        "Blessed salt/wards placed for 7 days (prevents return)"
    ],
    vendor: 'town_hall',
    shippedBy: 'Scheduled Appointment',
    levelRequirement: 1
},

'courier_express': {
    id: 'courier_express',
    name: "Courier Express (Cross-Continent)",
    description: "Hire a skilled courier to deliver an item or message across dangerous terrain in record time.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 2200,
    icon: '📬',
    stock: 40,
    rarity: 'uncommon',
    effects: [
        "Deliver 1 package up to 100 miles in 3 days (guaranteed)",
        "Protected by guild tabard (safe passage through most lands)",
        "Can negotiate for dangerous/fragile cargo (+2000 gp)"
    ],
    vendor: 'merchant_guild',
    shippedBy: 'Contract Signed',
    levelRequirement: 1
},

'cartography_commission': {
    id: 'cartography_commission',
    name: "Cartography Commission (Custom Map)",
    description: "Hire a master cartographer to create a detailed, magically accurate map of any area.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 7000,
    icon: '🗺️',
    stock: 12,
    rarity: 'rare',
    effects: [
        "Custom map of any region up to 50 square miles",
        "Includes hidden locations, ley lines, and hazard zones",
        "Map glows if nearby danger approaches (magical upgrade)"
    ],
    vendor: 'scholar_society',
    shippedBy: 'Commissioned Work',
    levelRequirement: 4
},

'assassination_contract': {
    id: 'assassination_contract',
    name: "Assassination Contract",
    description: "A highly illegal contract to eliminate a specific target. Buyer assumes all risk.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 25000,
    icon: '🗡️',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Professional assassin targets 1 specific target within 6 months",
        "Guaranteed 90% success rate (DM decides outcome)",
        "Buyer's name hidden from assassin; perfect plausible deniability",
        "If failed, contract is void and all parties deny involvement"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Untraceable Dead Drop',
    levelRequirement: 8
},

'soul_binding_ceremony': {
    id: 'soul_binding_ceremony',
    name: "Soul Binding Ceremony",
    description: "Permanently bind two souls together: marriage, contract, blood oath, or curse.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 12000,
    icon: '💕',
    stock: 5,
    rarity: 'epic',
    effects: [
        "Create binding magical contract (breach causes 2d10 psychic damage)",
        "Souls remain linked for 99 years",
        "Ceremony involves exotic components and 3-hour ritual",
        "Can bind willing or coerced parties (DM judgment)"
    ],
    vendor: 'temple_eternal',
    shippedBy: 'Ritual Appointment',
    levelRequirement: 7
},

'gambling_tournament_entry': {
    id: 'gambling_tournament_entry',
    name: "Gambling Tournament Entry (High Stakes)",
    description: "Entry fee for an exclusive underground gambling tournament. Prizes: 10x your bet.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 50000,
    icon: '🎰',
    stock: 20,
    rarity: 'epic',
    effects: [
        "Compete against 1d6+4 rivals in games of skill and luck",
        "Win: gain 500,000 gp (if luck is on your side)",
        "Lose: lose your entry fee + betting rounds",
        "Tournament lasts 1 week; abstinence impossible"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Sealed Invitation',
    levelRequirement: 10
},

'nightmare_exorcism': {
    id: 'nightmare_exorcism',
    name: "Nightmare Exorcism Service",
    description: "A dream-walker specializes in purging nightmares and psychic corruption from your mind.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 4500,
    icon: '😴',
    stock: 10,
    rarity: 'rare',
    effects: [
        "Remove recurring nightmares/madness effects",
        "Sleep becomes restful; gain +1 HP per level during long rests for 7 days",
        "Exorcism requires you to sleep in wizard's tower"
    ],
    vendor: 'dream_sanctuary',
    shippedBy: 'Appointment Only',
    levelRequirement: 5
},

// ============================================
// === PREMIUM TIER (100,000+ GP) ===
// ============================================

'godly_artifact_auction': {
    id: 'godly_artifact_auction',
    name: "Legendary Artifact Auction Bid (Minimum)",
    description: "A bidding slot in an exclusive auction for godly artifacts. Minimum bid: 500,000 gp. Hammer falls in 7 days.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 500000,
    icon: '🏺',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Enter auction for 1 of 5 godly items (DM determined)",
        "Outbid by others at auction; price may exceed 1,000,000 gp",
        "Winner receives artifact + legendary status in underworld"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Auction House Invitation',
    levelRequirement: 15
},

'dimensional_estate': {
    id: 'dimensional_estate',
    name: "Pocket Dimension Estate (100 Years)",
    description: "Own a pocket dimension: your own castle, tower, or vault in a space outside normal reality.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 750000,
    icon: '🏰',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Create/customize a private dimension (up to 1 square mile)",
        "Time moves normally inside; seasons pass; safe from external attacks",
        "Entrance: 1 portal key (can give to allies)",
        "Lease expires in 100 years; renewal available"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Portal Key Delivered',
    levelRequirement: 14
},

'immortality_binding': {
    id: 'immortality_binding',
    name: "Immortality Binding (Phylactery Service)",
    description: "Bind your soul to a phylactery, granting functional immortality at terrible cost.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 1000000,
    icon: '💀',
    stock: 1,
    rarity: 'godly',
    effects: [
        "You cannot die permanently; resurrection in phylactery within 1d6 days",
        "Each resurrection: gain 1 level of exhaustion (cures at full power)",
        "Phylactery must be hidden; if discovered & destroyed, you are destroyed",
        "Attracts paladins, necromancers, and cosmic entities"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Ritual Ceremony',
    levelRequirement: 16
},

'reality_weaver_contract': {
    id: 'reality_weaver_contract',
    name: "Reality Weaver Contract",
    description: "A contract with a cosmic entity to reshape a small region of reality to your specifications.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 900000,
    icon: '🌌',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Reshape 1 square mile of terrain/weather/environment permanently",
        "Terraforming takes 1 week; requires massive mana/sacrifice",
        "Reality warping may attract unwanted attention from other beings",
        "Changes are permanent and cannot be undone by normal means"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Binding Ritual',
    levelRequirement: 15
},

'time_acceleration_chamber': {
    id: 'time_acceleration_chamber',
    name: "Time Acceleration Chamber (Permanent)",
    description: "A magical chamber where 1 day inside = 1 year outside. Perfect for training and aging items.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 850000,
    icon: '⏰',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "1 day of training = 1 year of real-world progress (Experience/skills/aging)",
        "Can store up to 6 people at once",
        "Exiting chamber causes disorientation for 1d4 hours",
        "Maintenance: 10,000 gp per year to keep functioning"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Installed on-site',
    levelRequirement: 12
},

'legendary_smithing_commission': {
    id: 'legendary_smithing_commission',
    name: "Legendary Smithing Commission",
    description: "Commission the world's greatest smith to craft a weapon/armor tailored to you perfectly.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 120000,
    icon: '🔨',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Create 1 custom Legendary item (choose from: +3 weapon, +3 armor, or unique magical property)",
        "Item is perfectly balanced for you (+1 to attack/defense)",
        "Crafting takes 6 months; smith requires rare materials (additional cost: 50,000 gp)"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Commissioned Masterwork',
    levelRequirement: 13
},

'army_recruitment_contract': {
    id: 'army_recruitment_contract',
    name: "Army Recruitment (1,000 Soldiers)",
    description: "Hire an entire mercenary army: 1,000 trained soldiers loyal to your cause for 1 year.",
    category: SHOP_CATEGORIES.FACTION,
    price: 500000,
    icon: '⚔️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Command 1,000 soldiers (CR 1/8 each, effective in mass combat)",
        "Army remains loyal for 1 year or until major battle",
        "Must provide supplies (100,000 gp annually)",
        "Army morale decays if not paid monthly"
    ],
    vendor: 'steel_syndicate',
    shippedBy: 'Mercenary Contract',
    levelRequirement: 14,
    factionBonus: { military: 100, control: 50 }
},

'dragon_egg_incubation': {
    id: 'dragon_egg_incubation',
    name: "Dragon Egg Incubation Service",
    description: "Professional dragon egg incubation and hatching, with trainer included for first year.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 350000,
    icon: '🐉',
    stock: 2,
    rarity: 'legendary',
    effects: [
        "Incubate any dragon egg (guarantees hatching within 6 months)",
        "Trainer teaches hatchling basic obedience for 1 year",
        "Dragon becomes loyal companion (CR scales with DM)",
        "Service includes food costs for first year"
    ],
    vendor: 'dragon_sanctuary',
    shippedBy: 'Expert Courier',
    levelRequirement: 12
},

'wish_granting_ritual': {
    id: 'wish_granting_ritual',
    name: "Wish Granting Ritual (Limited)",
    description: "A master wizard performs a carefully controlled ritual to grant you one wish within reasonable bounds.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 650000,
    icon: '✨',
    stock: 2,
    rarity: 'godly',
    effects: [
        "DM adjudicates wish (no 'wish for unlimited wishes')",
        "Wish can alter reality within DM-approved scope",
        "Wizard absorbs backlash; may demand payment/service in return",
        "Each wish has a 50% chance to create unintended consequences"
    ],
    vendor: 'arcane_institute',
    shippedBy: 'Ritual Ceremony',
    levelRequirement: 14
},

'continental_teleportation_network': {
    id: 'continental_teleportation_network',
    name: "Continental Teleportation Network Access",
    description: "Lifetime membership in a network of teleportation portals across all major cities.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 200000,
    icon: '🔮',
    stock: 5,
    rarity: 'epic',
    effects: [
        "Teleport between any 5 major cities (once per day, no cost)",
        "Emergency teleport (once per week, avoid death)",
        "Network membership card grants safe passage in civilized lands",
        "Membership passes to heirs upon death"
    ],
    vendor: 'merchant_guild',
    shippedBy: 'Crystal Pendant',
    levelRequirement: 10
},

'planar_seal_breaking': {
    id: 'planar_seal_breaking',
    name: "Planar Seal Breaking (Service)",
    description: "A specialized team of mages can breach one planar seal or dimensional lock.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 180000,
    icon: '🌀',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Break 1 planar seal, prison dimension, or locked gate",
        "Ritual takes 8 hours; requires 5 mages working in concert",
        "Breaking a seal alerts its creator; risk of counter-curse"
    ],
    vendor: 'arcane_institute',
    shippedBy: 'Magical Expertise',
    levelRequirement: 11
},

'memory_alteration': {
    id: 'memory_alteration',
    name: "Memory Alteration (Professional)",
    description: "Erase, modify, or implant memories. Ethically dubious, totally illegal, disturbingly effective.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 95000,
    icon: '🧠',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Alter/erase/implant 1 memory from a willing or incapacitated target",
        "Modification is seamless; victim has no way to detect the change",
        "Risky: botched alteration can cause insanity",
        "This service makes you an enemy of every memory mage"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Procedure Appointment',
    levelRequirement: 9
},

'godly_blessing_ceremony': {
    id: 'godly_blessing_ceremony',
    name: "Godly Blessing Ceremony",
    description: "Petition a god directly for a boon. High Priest oversees the ritual.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 110000,
    icon: '⛪',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Gain +1 to all saves for 1 year (blessing)",
        "Once per year: automatically succeed a single saving throw (divine intervention)",
        "God may demand future service/quest in exchange",
        "Blessing is visibly obvious (stigmata, halo, etc.)"
    ],
    vendor: 'temple_eternal',
    shippedBy: 'Ceremonial Ritual',
    levelRequirement: 10
},

'civilization_founding_charter': {
    id: 'civilization_founding_charter',
    name: "Civilization Founding Charter",
    description: "Legal documentation to establish a new city, town, or settlement with full sovereign rights.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 300000,
    icon: '🏛️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Found 1 settlement with guaranteed legal recognition",
        "Full governing authority; can establish laws and taxation",
        "Protected by international law (cannot be easily destroyed)",
        "Must recruit citizens and maintain infrastructure"
    ],
    vendor: 'merchant_guild',
    shippedBy: 'Official Charter',
    levelRequirement: 12
},

'genetic_enhancement_suite': {
    id: 'genetic_enhancement_suite',
    name: "Genetic Enhancement Suite (Full)",
    description: "Undergo radical biological enhancement: increase attributes, gain resistances, optimize physiology.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 275000,
    icon: '🧬',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Choose 2 ability scores: increase by 2 (max 20)",
        "Gain 1 damage resistance type of choice",
        "Gain +5 maximum HP permanently",
        "Transformation takes 1 week; you are helpless during process"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Surgical Procedure',
    levelRequirement: 11
},

'infinite_library_access': {
    id: 'infinite_library_access',
    name: "Infinite Library Access (Lifetime)",
    description: "Permanent access to the largest library in existence. Gain knowledge of almost everything.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 165000,
    icon: '📚',
    stock: 1,
    rarity: 'epic',
    effects: [
        "+2 to all Knowledge checks permanently",
        "Once per long rest: gain advantage on a single Intelligence check",
        "Access to restricted archives (DM may set limits)",
        "Membership passes to 1 heir"
    ],
    vendor: 'scholar_society',
    shippedBy: 'Enchanted Library Card',
    levelRequirement: 9
},

'temporal_loop_insurance': {
    id: 'temporal_loop_insurance',
    name: "Temporal Loop Insurance (Annual)",
    description: "If you die within the year, reality loops back 1 week and you retain all memories.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 95000,
    icon: '🔄',
    stock: 999,
    rarity: 'epic',
    effects: [
        "If killed: time resets to 1 week ago (only you remember)",
        "Enemies unaware of reset; you have advantage",
        "Insurance resets annually (must repurchase)",
        "Side effects: temporal fatigue, déjà vu, minor paradoxes"
    ],
    vendor: 'lunar_auction',
    shippedBy: 'Magical Contract',
    levelRequirement: 10
},

'demon_binding_contract': {
    id: 'demon_binding_contract',
    name: "Demon Binding Contract",
    description: "Legally bind a demon to your service through infernal bureaucracy. Risky but effective.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 380000,
    icon: '😈',
    stock: 2,
    rarity: 'legendary',
    effects: [
        "Summon and bind 1 demon (CR up to 10) for 1 year",
        "Demon must obey your commands (within contract)",
        "Demon demands payment: souls, gold, or future favors",
        "If contract breaks, demon hunts you forever"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Infernal Scroll',
    levelRequirement: 13
},

'cloning_chamber': {
    id: 'cloning_chamber',
    name: "Cloning Chamber (Installation)",
    description: "Install a magical chamber that can clone living beings. One clone per month.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 450000,
    icon: '👥',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Clone any willing humanoid once per month (takes 30 days)",
        "Clone is identical but shares no memories/personality (blank slate)",
        "Clone ages normally; original can transfer consciousness (optional)",
        "Maintenance: 5,000 gp/month"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Major Installation',
    levelRequirement: 12
},

'pandemic_cure_formula': {
    id: 'pandemic_cure_formula',
    name: "Pandemic Cure Formula",
    description: "A complete cure for any plague, pestilence, or magical disease affecting an entire population.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 320000,
    icon: '💊',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Cure all instances of 1 disease in a region (up to 1,000 people)",
        "Formula grants immunity for 1 year",
        "Production & distribution takes 1 week",
        "Highly sought after by governments & factions"
    ],
    vendor: 'alchemist_guild',
    shippedBy: 'Rare Ingredients',
    levelRequirement: 11
},

'stellar_explosion_bomb': {
    id: 'stellar_explosion_bomb',
    name: "Stellar Explosion Bomb",
    description: "A weaponized star fragment. Detonates with catastrophic force.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 550000,
    icon: '💥',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Single Use: 40d6 Fire damage in 300ft radius",
        "Decimates entire city blocks; leaves crater",
        "Using this makes you a wanted criminal globally",
        "Detonation requires 1 minute setup"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Shielded Container',
    levelRequirement: 14
},

'love_curse_reversal': {
    id: 'love_curse_reversal',
    name: "Love Curse Reversal (Specialty)",
    description: "Remove even the most potent magical love spells, charms, and emotional bindings.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 28000,
    icon: '💔',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Remove 1 charm, enchantment, or love spell (even godly ones)",
        "Target regains full autonomy of emotions",
        "Original caster may feel backlash (DC 18 save or 4d6 psychic)",
        "Ritual takes 1 hour"
    ],
    vendor: 'dream_sanctuary',
    shippedBy: 'Appointment',
    levelRequirement: 5
},

'mind_fortress_installation': {
    id: 'mind_fortress_installation',
    name: "Mind Fortress Installation",
    description: "A specialist constructs powerful psychic defenses in your mind against all mental intrusion.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 65000,
    icon: '🧠',
    stock: 4,
    rarity: 'epic',
    effects: [
        "Gain immunity to charm, detect thoughts, scrying within 60ft",
        "Advantage on all Intelligence/Wisdom saves",
        "Installation takes 3 days; you are incapacitated during process",
        "Defenses deactivate for 24 hours if you willingly share thoughts"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Psychic Surgery',
    levelRequirement: 7
},

'curse_amplification_kit': {
    id: 'curse_amplification_kit',
    name: "Curse Amplification Kit",
    description: "Dark tools to magnify any existing curse on an enemy: make it permanent, more painful, harder to break.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 140000,
    icon: '💀',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Amplify 1 curse: increase damage/effect by 100%, ignore removal attempts",
        "Curse becomes permanent until the caster dies",
        "Target must make DC 18 save or suffers terrible side effects",
        "Using this marks you as cursed"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Dark Components',
    levelRequirement: 10
},

'planar_anchor_installation': {
    id: 'planar_anchor_installation',
    name: "Planar Anchor Installation",
    description: "Anchor a location to the material plane, preventing it from shifting or existing partially in another plane.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 85000,
    icon: '⚓',
    stock: 5,
    rarity: 'epic',
    effects: [
        "Install 1 planar anchor in a location",
        "Location becomes permanently stable (cannot be teleported, phased, or planed-shifted)",
        "Maintenance: 2,000 gp per year",
        "Installation requires 1 week of work"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Installation Service',
    levelRequirement: 8
},

'genocide_commission': {
    id: 'genocide_commission',
    name: "Genocide Commission (Race-Specific)",
    description: "A dark, binding contract to systematically eliminate an entire species. Forbidden, ancient, powerful.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 1200000,
    icon: '⚱️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Contract to erase 1 species from existence within 50 years",
        "All members of species gain -3 to all saves against you",
        "You become hunted by every faction opposed to genocide",
        "Completing contract grants godly power; failing grants a curse"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Ancient Ritual',
    levelRequirement: 16
},
'faction_war_declaration': {
    id: 'faction_war_declaration',
    name: "Faction War Declaration",
    description: "A formal declaration of war against another faction.",
    category: SHOP_CATEGORIES.FACTION,
    price: 1000000,
    icon: '⚔️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Grants a 30-day war with another faction",
        "Allies may join or abandon you",
        "DM may impose severe consequences"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Blood Seal',
    levelRequirement: 12,
    factionBonus: { combatReadiness: 100, economy: -50 }
},

'forbidden_knowledge_scroll': {
    id: 'forbidden_knowledge_scroll',
    name: "Forbidden Knowledge Scroll",
    description: "A scroll containing knowledge that should never be known.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 1000000,
    icon: '📜',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Grants one *Wish*-like effect (DM discretion)",
        "Each use causes a random madness (1d4 days)",
        "Scroll is hunted by cosmic entities"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Lead Box',
    levelRequirement: 15
},

'faction_ally_summoning': {
    id: 'faction_ally_summoning',
    name: "Faction Ally Summoning",
    description: "Summon a powerful ally from a faction to fight for you.",
    category: SHOP_CATEGORIES.FACTION,
    price: 500000,
    icon: '🤝',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Summon a CR 10+ ally for 1 hour",
        "Ally is loyal but may demand payment",
        "Faction reputation increases by +30"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Alliance Scroll',
    levelRequirement: 10,
    factionBonus: { combatReadiness: 50 }
},

'forbidden_weapon_forging': {
    id: 'forbidden_weapon_forging',
    name: "Forbidden Weapon Forging",
    description: "A weapon forged with forbidden magic.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 750000,
    icon: '⚔️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Weapon deals +3d6 damage of a random type",
        "Each use has a 10% chance to curse the wielder",
        "Weapon is sentient and hungry"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Cursed Forge',
    levelRequirement: 12
},

'faction_espionage_network': {
    id: 'faction_espionage_network',
    name: "Faction Espionage Network",
    description: "A network of spies working for your faction.",
    category: SHOP_CATEGORIES.FACTION,
    price: 400000,
    icon: '🕵️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Gain intelligence on any target (1/week)",
        "Spies can sabotage or assassinate (DM discretion)",
        "Network may be compromised"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Encrypted Data Slate',
    levelRequirement: 10,
    factionBonus: { intelligence: 100 }
},

'forbidden_summoning_circle': {
    id: 'forbidden_summoning_circle',
    name: "Forbidden Summoning Circle",
    description: "A circle that summons a creature from another dimension.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 600000,
    icon: '⭕',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Summon a CR 15+ creature (DM discretion)",
        "Creature is loyal for 1 hour or until dismissed",
        "May attract unwanted attention"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Blood Ink',
    levelRequirement: 15
},

'faction_peace_treaty': {
    id: 'faction_peace_treaty',
    name: "Faction Peace Treaty",
    description: "A treaty that ends hostilities between two factions.",
    category: SHOP_CATEGORIES.FACTION,
    price: 300000,
    icon: '🕊️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Ends a war between two factions",
        "May require concessions or reparations",
        "Faction reputation increases by +50"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Peace Scroll',
    levelRequirement: 10,
    factionBonus: { diplomacy: 100 }
},

'forbidden_artifact_activation': {
    id: 'forbidden_artifact_activation',
    name: "Forbidden Artifact Activation",
    description: "A ritual to activate a dormant artifact.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 900000,
    icon: '🏺',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Artifact gains a new power (DM discretion)",
        "Each use risks a random catastrophic effect",
        "Artifact may demand a sacrifice"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Ritual Scroll',
    levelRequirement: 15
},

'faction_legendary_recruit': {
    id: 'faction_legendary_recruit',
    name: "Faction Legendary Recruit",
    description: "Recruit a legendary figure to your faction.",
    category: SHOP_CATEGORIES.FACTION,
    price: 1000000,
    icon: '🏆',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Recruit a CR 20+ ally to your faction",
        "Ally is loyal but may have their own goals",
        "Faction reputation increases by +100"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Legendary Scroll',
    levelRequirement: 12,
    factionBonus: { combatReadiness: 100, influence: 100 }
},

'forbidden_dimensional_rift': {
    id: 'forbidden_dimensional_rift',
    name: "Forbidden Dimensional Rift",
    description: "A rift to another dimension that you can control.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 2000000,
    icon: '🌀',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Rift can transport you to another dimension (1/day)",
        "Each use risks a random planar effect",
        "Rift is hunted by cosmic entities"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Void Box',
    levelRequirement: 15
},    
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
        price: 3000,
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
        price: 1500,
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
        price: 25000,
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
        price: 4000,
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
        price: 12000,
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
        price: 8000,
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
        price: 15000,
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
        price: 20000,
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
        price: 35000,
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
        price: 10000,
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
        price: 45000,
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
        price: 60000,
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
        price: 55000,
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
        price: 40000,
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
        price: 50000,
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
        price: 75000,
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
        price: 42000,
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
        price: 65000,
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
        price: 30000,
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
        price: 32000,
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
// ============================================
    // === NEW BARGAIN BIN & UTILITY (1k - 20k) ===
    // ============================================

    'mini_pow': {
        id: 'mini_pow',
        name: "Mini POW Block",
        description: "A pocket-sized POW block. Good for shaking spiders off the ceiling.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 15000,
        icon: '💥',
        stock: 10,
        rarity: 'common',
        effects: ["Action: Consumed on use", "All enemies on the ground must save (STR DC 12) or fall Prone"],
        vendor: 'toad_town_market',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },
    'dizzy_dial': {
        id: 'dizzy_dial',
        name: "Dizzy Dial",
        description: "A spiral disc that makes you dizzy just looking at it.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 18000,
        icon: '🌀',
        stock: 5,
        rarity: 'uncommon',
        effects: ["Action: Target enemy becomes Confused for 1 round (WIS Save DC 13)", "Single use"],
        vendor: 'shamans_hut',
        shippedBy: 'Standard Courier',
        levelRequirement: 2
    },
    'sleepy_sheep': {
        id: 'sleepy_sheep',
        name: "Sleepy Sheep",
        description: "A fluffy sheep doll. Causes uncontrollable yawning.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '🐑',
        stock: 8,
        rarity: 'uncommon',
        effects: ["Action: 20ft Radius. Creatures sleep for 1 min or until damaged (5d8 HP threshold)", "Single use"],
        vendor: 'toad_town_market',
        shippedBy: 'Soft Package',
        levelRequirement: 1
    },
    'mister_softener': {
        id: 'mister_softener',
        name: "Mr. Softener",
        description: "A weird spray that makes armor feel like marshmallows.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 14000,
        icon: '💨',
        stock: 6,
        rarity: 'uncommon',
        effects: ["Action: Target loses 3 AC for 1 minute (cannot go below 10)", "Single use"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Aerosol Can',
        levelRequirement: 2
    },
    'courage_shell': {
        id: 'courage_shell',
        name: "Courage Shell",
        description: "A pill that makes you brave. Perhaps too brave.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 8000,
        icon: '💊',
        stock: 10,
        rarity: 'common',
        effects: ["Gain +2 AC for 3 rounds", "You cannot take the Dash or Disengage actions while active"],
        vendor: 'valley_trading_post',
        shippedBy: 'Bottle',
        levelRequirement: 1
    },
    'volt_shroom': {
        id: 'volt_shroom',
        name: "Volt Shroom",
        description: "Tastes like a 9-volt battery. Shocking.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 10000,
        icon: '⚡',
        stock: 10,
        rarity: 'common',
        effects: ["For 1 minute, anyone hitting you with a melee attack takes 1d4 Lightning damage"],
        vendor: 'shamans_hut',
        shippedBy: 'Insulated Box',
        levelRequirement: 2
    },
    'cardboard_box': {
        id: 'cardboard_box',
        name: "Suspicious Box",
        description: "Just a box. Definitely not a person inside.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5000,
        icon: '📦',
        stock: 20,
        rarity: 'common',
        effects: ["Action: Hide inside. +5 Stealth if you don't move.", "Breaks if you take damage"],
        vendor: 'rogueport_black_market',
        shippedBy: 'It is the shipping',
        levelRequirement: 1
    },
    'sticky_oil': {
        id: 'sticky_oil',
        name: "Flask of Sticky Oil",
        description: "Goes on the floor. Very annoying to clean up.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 4000,
        icon: '🍯',
        stock: 15,
        rarity: 'common',
        effects: ["Creates difficult terrain (10ft square)", "Creatures entering must save DEX DC 12 or be Restrained"],
        vendor: 'rogueport_black_market',
        shippedBy: 'Jar',
        levelRequirement: 1
    },
    'crowbar': {
        id: 'crowbar',
        name: "Rusted Crowbar",
        description: "For opening crates or 'negotiations'.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '⛏️',
        stock: 50,
        rarity: 'common',
        effects: ["Advantage on STR checks to open objects", "Improvised weapon (1d4)"],
        vendor: 'valley_trading_post',
        shippedBy: 'Standard Courier',
        levelRequirement: 1
    },
    'hustle_drink': {
        id: 'hustle_drink',
        name: "Hustle Drink",
        description: "Energy drink that makes you vibrate.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 20000,
        icon: '🥤',
        stock: 5,
        rarity: 'uncommon',
        effects: ["Gain an extra Action this turn", "Skip your next turn (Crash)"],
        vendor: 'wario_direct',
        shippedBy: 'Express',
        levelRequirement: 3
    },
    'ruin_powder': {
        id: 'ruin_powder',
        name: "Ruin Powder",
        description: "Confusing dust made from crushed ruins.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '🧂',
        stock: 5,
        rarity: 'uncommon',
        effects: ["Thrown (20ft). Target has Disadvantage on Attack rolls for 1 minute (CON Save DC 12 ends)"],
        vendor: 'shamans_hut',
        shippedBy: 'Pouch',
        levelRequirement: 2
    },
    'coconut': {
        id: 'coconut',
        name: "Coconut",
        description: "It's hard. It hurts if you throw it.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 2000,
        icon: '🥥',
        stock: 100,
        rarity: 'common',
        effects: ["Thrown (30ft) for 1d4 Bludgeoning", "Bonk sound effect mandatory"],
        vendor: 'toad_town_market',
        shippedBy: 'Sack',
        levelRequirement: 1
    },
    'point_swap': {
        id: 'point_swap',
        name: "Point Swap",
        description: "A weird device that swaps your vitality.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 15000,
        icon: '🔄',
        stock: 3,
        rarity: 'rare',
        effects: ["Swap your current HP percentage with your current MP/Slot percentage", "Single use"],
        vendor: 'comet_observatory',
        shippedBy: 'Dimensional Mail',
        levelRequirement: 4
    },
    'fright_jar': {
        id: 'fright_jar',
        name: "Fright Jar",
        description: "A jar containing a small ghost. It screams when opened.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 9000,
        icon: '👻',
        stock: 10,
        rarity: 'common',
        effects: ["Beasts and low-intelligence creatures must flee for 1 round (WIS DC 11)"],
        vendor: 'shamans_hut',
        shippedBy: 'Muffled Box',
        levelRequirement: 1
    },
    'paper_doll': {
        id: 'paper_doll',
        name: "Paper Doll",
        description: "A cutout that looks exactly like Mario. Or you.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 6000,
        icon: '📄',
        stock: 20,
        rarity: 'common',
        effects: ["Action: Set up decoy. Dumb enemies must attack it once before attacking you.", "1 HP"],
        vendor: 'toad_town_market',
        shippedBy: 'Envelope',
        levelRequirement: 1
    },
    'gradual_syrup': {
        id: 'gradual_syrup',
        name: "Gradual Syrup",
        description: "Thick, slow-moving syrup. Restores magic slowly.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 18000,
        icon: '🍯',
        stock: 5,
        rarity: 'uncommon',
        effects: ["Regain 1 Spell Slot level at the start of your turn for 3 turns"],
        vendor: 'toad_town_market',
        shippedBy: 'Sticky Bottle',
        levelRequirement: 3
    },
    'duct_tape': {
        id: 'duct_tape',
        name: "Toad Tape",
        description: "Fixes anything. Even the storyline.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1000,
        icon: '📼',
        stock: 50,
        rarity: 'common',
        effects: ["Fixes broken items temporarily", "Mutes bards"],
        vendor: 'faction_quartermaster',
        shippedBy: 'Roll',
        levelRequirement: 1
    },
    'torch_everburning': {
        id: 'torch_everburning',
        name: "Everburning Torch",
        description: "A torch that never burns out. Don't put it in your pocket.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🔥',
        stock: 10,
        rarity: 'common',
        effects: ["Provides light indefinitely", "1 Fire damage if used as a club"],
        vendor: 'shamans_hut',
        shippedBy: 'Fireproof Box',
        levelRequirement: 1
    },
    'dried_bouquet': {
        id: 'dried_bouquet',
        name: "Dried Bouquet",
        description: "Old flowers. Still smell nice.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3000,
        icon: '🥀',
        stock: 20,
        rarity: 'junk',
        effects: ["Restore 1 HP", "Can be given as a gift to avoid combat (CHA check)"],
        vendor: 'toad_town_market',
        shippedBy: 'Box',
        levelRequirement: 1
    },
    'ear_plugs': {
        id: 'ear_plugs',
        name: "Heavy Duty Earplugs",
        description: "Blocks out Mandragora screams and Bard songs.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2000,
        icon: '🔇',
        stock: 50,
        rarity: 'common',
        effects: ["Immunity to Thunder damage", "You are Deafened while wearing"],
        vendor: 'valley_trading_post',
        shippedBy: 'Tiny Packet',
        levelRequirement: 1
    },
    'faction_safe_house_network': {
        id: 'faction_safe_house_network',
        name: "Underground Railroad",
        description: "A network of safe houses across the Mushroom Kingdom.",
        category: SHOP_CATEGORIES.FACTION,
        price: 120000,
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
        price: 110000,
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
        price: 100000,
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
        price: 90000,
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
        price: 150000,
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
        price: 10000,
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
        price: 130000,
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
        price: 70000,
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
        price: 28000,
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
        price: 5000,
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
        price: 1000,
        icon: '🎊',
        stock: 500,
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
        stock: 100,
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
        price: 2000,
        icon: '⭐',
        stock: 200,
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
        price: 500,
        icon: '🏺',
        stock: 1000,
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
        price: 100,
        icon: '🧊',
        stock: 500,
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
        price: 5000,
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
        price: 3000,
        icon: '〰️',
        stock: 200,
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
        price: 1000,
        icon: '🍌',
        stock: 300,
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
        price: 4000,
        icon: '🪨',
        stock: 100,
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
        price: 12000,
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
        price: 15000,
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
        price: 20000,
        icon: '🌶️',
        stock: 100,
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
        price: 5000,
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
        price: 35000,
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
        price: 15000,
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
        price: 22000,
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
        price: 28000,
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
        price: 45000,
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
        price: 30000,
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
        price: 40000,
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
        price: 80000,
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
        price: 2000,
        icon: '🥡',
        stock: 200,
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
        price: 8000,
        icon: '🍲',
        stock: 100,
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
        price: 50000,
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
        price: 60000,
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
        price: 55000,
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
        price: 45000,
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
        price: 45000,
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
        price: 35000,
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
        price: 80000,
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
        price: 80000,
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
        price: 30000,
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
        price: 50000,
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
        price: 75000,
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
        price: 60000,
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
        price: 60000,
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
        price: 100000,
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
        price: 120000,
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
        price: 70000,
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
        price: 70000,
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
        price: 25000,
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
        price: 80000,
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
        price: 40000,
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
        price: 90000,
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
        price: 10000,
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
        price: 5000,
        icon: '📝',
        stock: 100,
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
        price: 15000,
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
        price: 3000,
        icon: '🍃',
        stock: 200,
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
        price: 50000,
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
        price: 10000,
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
        price: 20000,
        icon: '🥇',
        stock: 100,
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
        price: 55000,
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
        price: 8000,
        icon: '✨',
        stock: 100,
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
        price: 1000,
        icon: '🍩',
        stock: 200,
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
        price: 5000,
        icon: '📜',
        stock: 100,
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
        price: 6000,
        icon: '👻',
        stock: 100,
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
        price: 12000,
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
        price: 2500,
        icon: '🪙',
        stock: 500,
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
        price: 15000,
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
        price: 3000,
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
        price: 10000,
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
        price: 20000,
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
        price: 25000,
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
        price: 35000,
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
        price: 30000,
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
        price: 20000,
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
        price: 50000,
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
        price: 100000,
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
        price: 10000,
        icon: '📢',
        stock: 100,
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
        price: 1500,
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
        price: 2000,
        icon: '🎨',
        stock: 100,
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
        price: 2000,
        icon: '🎨',
        stock: 100,
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
        price: 2000,
        icon: '🎨',
        stock: 100,
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
        price: 4500,
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
        price: 3000,
        icon: '🥬',
        stock: 200,
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
        price: 35000,
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
        price: 40000,
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
        price: 6000,
        icon: '🧢',
        stock: 100,
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
        price: 10000,
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
        price: 500,
        icon: '🧪',
        stock: 500,
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
        price: 25000,
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
        price: 15000,
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
        price: 1000,
        icon: '🧱',
        stock: 500,
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
        price: 5000,
        icon: '🧢',
        stock: 200,
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
        price: 12000,
        icon: '🎒',
        stock: 100,
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
        price: 8000,
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
        price: 20000,
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
        price: 12000,
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
        price: 8000,
        icon: '🔧',
        stock: 100,
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
        price: 5000,
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
        price: 10000,
        icon: '🥽',
        stock: 100,
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
        price: 6000,
        icon: '⭕',
        stock: 100,
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
        price: 500,
        icon: '✉️',
        stock: 200,
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
        price: 8000,
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
        price: 20000,
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
        price: 500,
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
        price: 350000,
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
        price: 280000,
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
        price: 300000,
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
        price: 320000,
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
        price: 260000,
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
        price: 240000,
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
        price: 250000,
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
        price: 500000,
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
        price: 400000,
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
        price: 380000,
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
        price: 450000,
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
        price: 330000,
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
        price: 210000,
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
        price: 600000,
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
        levelRequirement: 100,
        factionBonus: { mobility: 100, combatReadiness: 50 }
    },
    'iron_legion_codes': {
        id: 'iron_legion_codes',
        name: "Iron Legion Command Codes",
        description: "Stolen encryption keys that allow you to redirect Iron Legion mechs.",
        category: SHOP_CATEGORIES.FACTION,
        price: 400000,
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
        price: 700000,
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
        price: 550000,
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
        levelRequirement: 100,
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
        price: 850000,
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
        price: 280000,
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
        price: 280000,
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
        price: 320000,
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
        price: 260000,
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
        price: 300000,
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
        price: 350000,
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
        price: 340000,
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
        price: 400000,
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
// ============================================
// === MID-TIER ITEMS (10,000 - 20,000 GP) ===
// ============================================

'fire_flower_pendant': {
    id: 'fire_flower_pendant',
    name: "Fire Flower Pendant",
    description: "A necklace shaped like a blooming fire flower. Warms the wearer like a cozy hearth.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15000,
    icon: '🔥',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Cast 'Fire Bolt' at will (1d10 Fire damage)",
        "+2 to Fire damage rolls",
        "Immunity to extreme heat (up to 100°F)",
        "Leaves scorch marks on furniture"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Sealed Urn',
    levelRequirement: 3
},

'boo_bell': {
    id: 'boo_bell',
    name: "Boo's Whispering Bell",
    description: "A silver bell that chimes with ghostly echoes. Summons mischievous spirits for pranks.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 12000,
    icon: '🔔',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Action: Ring to summon 1d4 Boos (CR 1/2 each)",
        "Boos distract enemies (Disadvantage on next attack)",
        "Lasts 1 minute, then they haunt your pockets",
        "Cannot be used in haunted houses"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Velvet Pouch',
    levelRequirement: 2
},

'goomba_stomper_boots': {
    id: 'goomba_stomper_boots',
    name: "Goomba Stomper Boots",
    description: "Heavy iron boots designed for maximum squish. Echo with the screams of a thousand Goombas.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18000,
    icon: '👢',
    stock: 4,
    rarity: 'rare',
    effects: [
        "+1d6 Bludgeoning on unarmed strikes",
        "Advantage on jumps and falls (up to 20ft)",
        "Enemies CR 1/4 or lower take double damage from stomps",
        "You weigh 50lbs more (doors creak)"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Wooden Crate',
    levelRequirement: 1
},

'starman_shard': {
    id: 'starman_shard',
    name: "Starman Shard",
    description: "A glowing fragment of a Super Star. Grants bursts of invincibility, but it's addictive.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 10000,
    icon: '⭐',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Single Use: Invulnerable for 10 seconds",
        "Double speed and damage during effect",
        "After use, -1 to all rolls for 1 hour (withdrawal)",
        "Collect 5 shards for a full Starman?"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Padded Box',
    levelRequirement: 1
},

'piranha_plant_pot': {
    id: 'piranha_plant_pot',
    name: "Piranha Plant in a Pot",
    description: "A chomping green head in a terracotta pot. Loyal guard dog... if you feed it.",
    category: SHOP_CATEGORIES.FACTION,
    price: 16000,
    icon: '🌱',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Summons a Piranha Plant familiar (CR 1/2)",
        "Bites for 1d8 Piercing + Poison (1d4)",
        "Guards your camp at night",
        "Eats one raw steak per day or turns on you"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Reinforced Barrel',
    levelRequirement: 4,
    factionBonus: { defense: 10 }
},

'coin_block_replica': {
    id: 'coin_block_replica',
    name: "Mini Coin Block",
    description: "A brick that dispenses coins when punched. Finite, but who doesn't love free money?",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 11000,
    icon: '🧱',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Punch to dispense 1d10 Gold Coins (50 uses total)",
        "Recharges 1d4 coins at dawn",
        "Breaks after 50 uses (recyclable for 500gp)",
        "Attracts greedy squirrels"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Bubble Wrap',
    levelRequirement: 1
},

'thwomp_glove': {
    id: 'thwomp_glove',
    name: "Thwomp's Crushing Glove",
    description: "A stone gauntlet mimicking a Thwomp's fist. For when you need to slam doors... literally.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 19000,
    icon: '👊',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Unarmed strikes deal 2d6 Bludgeoning",
        "On hit: Push target 10ft",
        "Once per short rest: Slam for 4d6 in 5ft radius",
        "Disadvantage on Sleight of Hand checks"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Iron Chest',
    levelRequirement: 5
},

'mushroom_spore_bomb': {
    id: 'mushroom_spore_bomb',
    name: "Mushroom Spore Bomb",
    description: "A throwable orb packed with growth spores. Turns battlefields into fungal nightmares.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 14000,
    icon: '💣',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Throw (20ft range): 3d6 Poison in 10ft radius",
    "Half on DEX save",
        "Area becomes Difficult Terrain (mushrooms sprout)",
        "You gain temporary HP equal to damage dealt"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Leather Satchel',
    levelRequirement: 3
},

'toadstool_tea_set': {
    id: 'toadstool_tea_set',
    name: "Toadstool Tea Set",
    description: "A porcelain set infused with minor mushroom magic. Brews potions of dubious origin.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 13000,
    icon: '🍵',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Brew 1 potion per long rest (roll 1d6: 1-2 Heal 2d4, 3-4 Poison 1d6, 5-6 Invisibility 10min)",
        "+1 to Charisma (Persuasion) while sipping",
        "Set whispers Toad facts during tea time",
        "Breaks if used for coffee"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Tea Crate',
    levelRequirement: 1
},

'lakitu_cloud_cushion': {
    id: 'lakitu_cloud_cushion',
    name: "Lakitu Cloud Cushion",
    description: "A fluffy cloud pillow that floats lazily. Perfect for naps or emergency escapes.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 17000,
    icon: '☁️',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Hover 10ft off ground (speed 20ft)",
        "Once per day: Dash 60ft horizontally",
        "Comfort +5 to rest rolls",
        "Rains lightly when you're sad"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Sky Delivery',
    levelRequirement: 4
},

'bullet_bill_launcher': {
    id: 'bullet_bill_launcher',
    name: "Bullet Bill Blaster",
    description: "A cannon that fires explosive Bills. Aim carefully, or regret it.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '🚀',
    stock: 1,
    rarity: 'rare',
    effects: [
        "Action: Fire for 4d6 Fire damage (line 60ft)",
        "DEX save or 2d6 extra on fail",
        "3 charges, recharges at dawn",
        "Overheats in rain (1d4 Fire to user)"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Armored Wagon',
    levelRequirement: 6
},

'shyguy_mask': {
    id: 'shyguy_mask',
    name: "Shy Guy Mask",
    description: "A red hood that cloaks you in anonymity. Secrets stay secret... mostly.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 10500,
    icon: '😷',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Advantage on Stealth and Deception",
        "Disguise as any humanoid (1 hour)",
        "Mask giggles uncontrollably in silence",
        "Shy Guys sense a kindred spirit"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Anonymous Package',
    levelRequirement: 2
},

'question_block_lamp': {
    id: 'question_block_lamp',
    name: "Question Block Lamp",
    description: "A glowing ? block that illuminates surprises. Sometimes literally.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 12500,
    icon: '💡',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Sheds bright light (20ft) and dim (20ft more)",
        "Once per day: Reveals hidden doors/items",
        "1% chance to dispense a coin when turned on",
        "Attracts curious Koopas"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Cardboard Box',
    levelRequirement: 1
},

'hammer_bro_gloves': {
    id: 'hammer_bro_gloves',
    name: "Hammer Bro Throwing Gloves",
    description: "Leather gloves etched with Bro runes. Enhances your inner blacksmith's fury.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15500,
    icon: '🧤',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Thrown weapons deal +1d4 damage",
        "Advantage on throws under 30ft",
        "Once per short rest: Throw returns like boomerang",
        "Gloves itch during full moons"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Forge-Wrapped',
    levelRequirement: 3
},

'yoshi_egg_whistle': {
    id: 'yoshi_egg_whistle',
    name: "Yoshi Egg Whistle",
    description: "A carved egg that trills like a dino call. Summons a friendly Yoshi for a joyride.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 19500,
    icon: '🥚',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Blow: Summon Yoshi mount (1 hour)",
        "Speed 40ft, Swallow attack (1d6 + grapple)",
        "Can tongue-lash enemies (Reach 15ft, pull 10ft)",
        "Yoshi eats fruit, not gold (disappointed)"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Nest Basket',
    levelRequirement: 5
},
'bobomb_buddy_plushie': {
    id: 'bobomb_buddy_plushie',
    name: "Bob-omb Buddy Plushie",
    description: "A stuffed explosive friend that whispers encouragement... and occasionally detonates.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 12000,
    icon: '🧸',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Grants Advantage on CHA checks with explosives or rebels",
        "Once per day: Explodes for 2d6 Fire damage (you choose target)",
        "Squeaks when you're nervous (no stealth advantage nearby)",
        "Cannot be thrown — it cries if you try"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Bubble Wrap Courier',
    levelRequirement: 3
},

'mystery_mario_hat': {
    id: 'mystery_mario_hat',
    name: "Mystery Mario Hat",
    description: "Looks like Mario’s cap… but sometimes it isn’t. Changes randomly every dawn.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18000,
    icon: '🧢',
    stock: 3,
    rarity: 'uncommon',
    effects: [
        "Each morning, transforms into a random NPC’s hat (Luigi, Toad, Goomba King, etc.)",
        "Grants +1 to a random ability score based on the hat",
        "May cause NPCs to mistake you for someone else (DM’s whim)",
        "Wearing Peach’s tiara gives disadvantage on stealth (sparkles too much)"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Disguised Parcel',
    levelRequirement: 4
},

'cheep_cheep_life_preserver': {
    id: 'cheep_cheep_life_preserver',
    name: "Cheep Cheep Life Preserver",
    description: "Floats you safely... while screaming underwater opera.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15000,
    icon: '🐠',
    stock: 4,
    rarity: 'rare',
    effects: [
        "You cannot drown",
        "Swim Speed 30ft",
        "While submerged, emits loud operatic singing (no stealth)",
        "Attracts aquatic predators (roll WIS save DC 12 or summon 1d4 hostile fish)"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Floating Crate',
    levelRequirement: 3
},

'spiny_egg_timer': {
    id: 'spiny_egg_timer',
    name: "Spiny Egg Timer",
    description: "Crack it open to start a countdown. What hatches? Depends on your luck.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 11000,
    icon: '🥚',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Single Use: Set timer for 1–6 rounds (roll d6)",
        "When timer ends, egg hatches: 50% Spiny (hostile), 30% Mini-Spiny (pet), 20% Golden Spiny (drops 50gp)",
        "Can be used as improvised weapon (1d4 piercing, spikes fall off after use)"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Nest Delivery',
    levelRequirement: 2
},

'piranha_plant_potted_pet': {
    id: 'piranha_plant_potted_pet',
    name: "Potted Piranha Plant (Domesticated?)",
    description: "It’s cute! It waves! It also bites strangers. And sometimes friends.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 16000,
    icon: '🌿',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Grants +2 to Intimidation checks",
        "Bites anyone who startles you (1d6 piercing as reaction)",
        "Requires daily feeding (meat or coins — it’s not picky)",
        "Sings lullabies at night (Advantage on sleep saves, Disadvantage on Perception)"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Reinforced Pottery',
    levelRequirement: 3
},

'koopa_karaoke_machine': {
    id: 'koopa_karaoke_machine',
    name: "Koopa Karaoke Machine",
    description: "Portable party starter. Comes with Bowser’s Greatest Hits (and his angry voicemails).",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 19000,
    icon: '🎤',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Grants Advantage on Performance checks",
        "Once per day: Cast ‘Tasha’s Hideous Laughter’ on all enemies within 30ft (DC 14 WIS save)",
        "Bowser may call through the speaker to complain about your song choice",
        "Loud enough to wake the dead (literally — may attract undead in haunted areas)"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Boombox Drone',
    levelRequirement: 4
},

'boo_in_a_jar': {
    id: 'boo_in_a_jar',
    name: "Boo in a Jar",
    description: "A captured Boo. Whispers secrets. Sometimes lies. Always watching.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 17000,
    icon: '👻',
    stock: 4,
    rarity: 'uncommon',
    effects: [
        "Can answer 1 question per day (50% chance truth, 50% mischievous lie)",
        "Grants Darkvision 60ft while jar is open",
        "If jar breaks, Boo becomes hostile or vanishes to tell secrets to your enemies",
        "Whispers embarrassing facts about you at dramatic moments"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Cursed Glassware',
    levelRequirement: 5
},

'goomba_stomp_boots': {
    id: 'goomba_stomp_boots',
    name: "Goomba-Stomp Boots",
    description: "Heavy soled boots designed for maximum flattening efficiency.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14000,
    icon: '👢',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Jump attacks deal +1d6 bludgeoning damage to creatures smaller than you",
        "Disadvantage on Stealth checks (they squeak with every step)",
        "Immune to falling damage from ≤ 20ft",
        "Goombas visibly tremble when you approach"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Drop-Shipped Crate',
    levelRequirement: 3
},

'lakitu_cloud_lease': {
    id: 'lakitu_cloud_lease',
    name: "Lakitu Cloud Lease (30 Days)",
    description: "Rent a personal raincloud. Comes with optional spiny delivery service.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '☁️',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Fly Speed 30ft (hover) for 30 days",
        "Can summon light rain (creates difficult terrain or extinguishes fires)",
        "Optional Add-On: Call Lakitu to drop 1 Spiny per day (extra 5000 coins)",
        "Cloud whimpers if you yell at it"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Weather Balloon',
    levelRequirement: 4
},

'yoshi_egg_surprise': {
    id: 'yoshi_egg_surprise',
    name: "Yoshi Egg Surprise",
    description: "Crack it open! What color Yoshi will you get? Will it even be a Yoshi?",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 13000,
    icon: '🐣',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Hatches into a random colored Yoshi (Red = fire breath, Blue = water wings, Yellow = ground pound)",
        "10% chance hatches into a Shy Guy wearing a Yoshi costume (disappointed but loyal)",
        "Yoshi follows you for 24 hours, then vanishes (leaves behind 1d10 eggs)",
        "If fed 5+ berries, grants you a ride (carries 1 passenger, speed 40ft)"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Egg Carton Express',
    levelRequirement: 2
},

'hammer_bro_coin_launcher': {
    id: 'hammer_bro_coin_launcher',
    name: "Hammer Bro Coin Launcher",
    description: "Fires coins like bullets. Economical AND deadly.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18500,
    icon: '💸',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Ranged Weapon: 60ft, 1d8 piercing + target must make DEX save DC 13 or be knocked prone",
        "Uses Gold Coins as ammo (1 coin = 1 shot)",
        "On Critical Hit: Target is blinded by shiny distraction for 1 round",
        "Wario sues you if caught using this in his territory"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Coin-Operated Crate',
    levelRequirement: 5
},

'blooper_ink_vial': {
    id: 'blooper_ink_vial',
    name: "Blooper Ink Vial",
    description: "One splash and nobody knows where you went. Or what you did.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 10500,
    icon: '🐙',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Action: Throw vial to create 10ft radius cloud of ink",
        "All inside have total concealment (attack rolls against them have disadvantage)",
        "Lasts 1 minute or until dispersed by wind/water",
        "Stains permanently — your clothes, your skin, your reputation"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Leaky Pouch',
    levelRequirement: 2
},

'question_block_replica': {
    id: 'question_block_replica',
    name: "Question Block Replica",
    description: "Hit it from below! Might give coins. Might give trouble.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 16500,
    icon: '🟥',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Once per day: Strike from below to activate",
        "Roll d6: 1-2=100 coins, 3=Fire Flower, 4=Starman (1 min invincibility), 5=10 Buzzy Beetles, 6=Warp Pipe appears beneath you",
        "Makes ‘boing’ sound — alerts nearby enemies",
        "Mario gets jealous if he sees you with it"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Suspiciously Floating Box',
    levelRequirement: 4
},

'para_beanie': {
    id: 'para_beanie',
    name: "Para-Beanie",
    description: "A propeller beanie that almost lets you fly. Emphasis on ‘almost’.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12500,
    icon: '🧢',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Jump height tripled",
        "If you jump off high place, can glide slowly downward (no fall damage)",
        "Propeller falls off if you take thunder damage (requires tinkering to fix)",
        "Kids point and laugh. Adults sigh nostalgically."
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Parcel Chute',
    levelRequirement: 2
},
// ============================================
// === 50 MORE RANDOM ITEMS (ANY PRICE) ===
// ============================================

'propeller_mushroom': {
    id: 'propeller_mushroom',
    name: "Propeller Mushroom",
    description: "A mushroom with a spinning propeller cap. Launch yourself skyward with style.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 8000,
    icon: '🍄',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Single Use: Fly 60ft straight up",
        "Slow fall for 1 minute",
        "Propeller hums the Mario theme",
        "You spin uncontrollably for 30 seconds after landing"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Spinning Crate',
    levelRequirement: 2
},

'boo_portrait': {
    id: 'boo_portrait',
    name: "Haunted Boo Portrait",
    description: "A painting that follows you with its eyes. Sometimes the eyes blink.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 5000,
    icon: '🖼️',
    stock: 3,
    rarity: 'uncommon',
    effects: [
        "Warns of invisible creatures (30ft)",
        "Portrait Boo whispers secrets at night",
        "Once per day: Cast 'Mage Hand' as Boo",
        "Cries when left alone"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Canvas Wrap',
    levelRequirement: 1
},

'chain_chomp_chain': {
    id: 'chain_chomp_chain',
    name: "Chain Chomp's Leash",
    description: "A heavy iron chain that once held a beast. Still twitches with aggression.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 22000,
    icon: '⛓️',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Whip attack: 2d6 Slashing, Reach 15ft",
        "On crit: Target restrained for 1 round",
        "Chain rattles when enemies approach",
        "You feel the urge to bark at mailmen"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Iron Chest',
    levelRequirement: 6
},

'wiggler_segment': {
    id: 'wiggler_segment',
    name: "Wiggler's Wrath Segment",
    description: "A squirming orange segment from an angry Wiggler. Still pulsates with rage.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 6000,
    icon: '🐛',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Throw: Explodes into 3d4 angry caterpillars",
        "Each caterpillar deals 1d4 Poison on contact",
        "Lasts 3 rounds, then they cry and leave",
        "You feel slightly guilty"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Leaf Wrap',
    levelRequirement: 1
},

'fuzzy_wig': {
    id: 'fuzzy_wig',
    name: "Fuzzy Thinking Wig",
    description: "A pink fuzzy that sits on your head. Makes you smarter, but also hungrier.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 13000,
    icon: '🧠',
    stock: 4,
    rarity: 'rare',
    effects: [
        "+2 to INT checks and saves",
        "Advantage on knowledge rolls",
        "Must eat double rations or wig leaves",
        "Wig occasionally steals your thoughts"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Thought Bubble',
    levelRequirement: 3
},

'pokey_spine_pen': {
    id: 'pokey_spine_pen',
    name: "Pokey Spine Quill",
    description: "A cactus spine that writes in prickly ink. Contracts signed with it are legally binding in the desert.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 3000,
    icon: '🖊️',
    stock: 12,
    rarity: 'common',
    effects: [
        "Writes on any surface, even sand",
        "Contracts signed are magically enforced (DC 15 CHA to break)",
        "Ink causes 1d4 Poison if used as dagger",
        "Desert creatures respect the signature"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Cactus Wrap',
    levelRequirement: 1
},

'sledge_bro_hammer': {
    id: 'sledge_bro_hammer',
    name: "Sledge Bro's Mallet",
    description: "An enormous hammer that creates shockwaves. Requires two hands and a strong back.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 25000,
    icon: '🔨',
    stock: 1,
    rarity: 'rare',
    effects: [
        "2d10 Bludgeoning damage",
        "On hit: Creatures within 10ft make DEX save or fall prone",
        "Requires 17 STR to wield",
        "You stomp when you walk"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Stone Sled',
    levelRequirement: 7
},

'bandit_mask': {
    id: 'bandit_mask',
    name: "Bandit's Smiling Mask",
    description: "A white mask that grins eternally. Steals coins from those who trust you.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9000,
    icon: '😁',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Advantage on Sleight of Hand vs humanoids",
        "Once per day: Steal 1d20gp from touched creature",
        "Mask whispers gambling tips",
        "You can't stop smiling while wearing it"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Coin Purse',
    levelRequirement: 2
},

'cheep_cheep_aquarium': {
    id: 'cheep_cheep_aquarium',
    name: "Portable Cheep-Cheep Tank",
    description: "A bubble containing a living fish. Shoots water jets on command.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11000,
    icon: '🐟',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Action: 15ft water jet, 2d6 Bludgeoning",
        "Can breathe underwater while holding tank",
        "Cheep-Cheep sings sea shanties",
        "Tank cracks if dropped (fish becomes hostile)"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Water Bubble',
    levelRequirement: 3
},

'dk_barrel_backpack': {
    id: 'dk_barrel_backpack',
    name: "DK Barrel Jetpack",
    description: "A wooden barrel strapped to your back. Blast forward with explosive force.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18000,
    icon: '🛢️',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Once per short rest: Dash 120ft in straight line",
        "Enemies in path take 2d6 Fire (DEX save half)",
        "You take 1d6 Fire damage from backblast",
        "Apes respect you"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Barrel Roll',
    levelRequirement: 5
},

'spiny_shell_helmet': {
    id: 'spiny_shell_helmet',
    name: "Spiny Shell Spiked Helm",
    description: "A red shell with spikes that retracts into your skull. Headbutts become lethal.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16000,
    icon: '🐚',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Headbutt attacks deal 2d6 Piercing",
        "Enemies who grapple you take 1d6 Piercing",
        "Spikes retract when you bow (polite)",
        "Birds avoid your head"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Spiked Crate',
    levelRequirement: 4
},

'banana_peel_bunch': {
    id: 'banana_peel_bunch',
    name: "Banana Peel Cluster",
    description: "A bundle of magically slippery peels. Classic prank, timeless chaos.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 4000,
    icon: '🍌',
    stock: 20,
    rarity: 'common',
    effects: [
        "Throw: 10ft radius, DEX save or fall prone",
        "Lasts 3 rounds, then peels vanish",
        "Monkeys become hostile if they see you waste bananas",
        "Slippery surface counts as difficult terrain"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Fruit Basket',
    levelRequirement: 1
},

'magikoopa_wand': {
    id: 'magikoopa_wand',
    name: "Magikoopa's Bent Wand",
    description: "A crooked wand that misfires spells. Sometimes helpful, often hilarious.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14000,
    icon: '🪄',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Cast a random 1st-level spell (roll 1d6)",
        "50% chance target is wrong (DM chooses)",
        "Wand cackles when used",
        "Explodes on natural 1 (2d6 Force to user)"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Star Wrap',
    levelRequirement: 3
},

'bob_omb_buddy': {
    id: 'bob_omb_buddy',
    name: "Bob-Omb Buddy",
    description: "A pink Bob-Omb that follows you like a puppy. Explodes on command, reforms at dawn.",
    category: SHOP_CATEGORIES.FACTION,
    price: 12000,
    icon: '💣',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Command: Explode (3d6 Fire, 10ft radius)",
        "Reforms after 24 hours",
        "Likes to hug your leg (awkward)",
        "Afraid of torches"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Explosive Container',
    levelRequirement: 4,
    factionBonus: { offense: 10 }
},

'cape_feather': {
    id: 'cape_feather',
    name: "Cape Feather",
    description: "A golden feather that grants brief flight. Smells like nostalgia and freedom.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 7000,
    icon: '🪶',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Single Use: Fly 40ft for 1 minute",
        "Can perform a spin attack (1d6 Slashing)",
        "Feather dissolves into sparkles",
        "You hear cape music in your head"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Feather Pillow',
    levelRequirement: 1
},

'monty_mole_tunnel_map': {
    id: 'monty_mole_tunnel_map',
    name: "Monty Mole's Tunnel Map",
    description: "A dirt-stained map of underground passages. Leads to treasure or toilets.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 5000,
    icon: '🗺️',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Reveals 1d4 hidden passages in current area",
        "20% chance map is upside down (you get lost)",
        "Moles will trade info for worms",
        "Smells like earthworms"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Buried Box',
    levelRequirement: 1
},

'ice_flower_seed': {
    id: 'ice_flower_seed',
    name: "Ice Flower Seed",
    description: "A crystalline seed that grows into a frost-spitting flower. Keep away from fire.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 8500,
    icon: '🌸',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Plant: Grows in 1 round, 5ft frost aura (difficult terrain)",
        "Shoots ice shards (1d8 Cold, 30ft range)",
        "Lasts 5 rounds, then shatters",
        "Slips from warm hands"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Ice Pack',
    levelRequirement: 2
},

'klomp_pirate_peg': {
    id: 'klomp_pirate_peg',
    name: "Klomp's Peg Leg",
    description: "A wooden leg that once belonged to a Kremling pirate. Stomps echo like cannon fire.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 10000,
    icon: '🦿',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Kick attacks deal 1d8 Bludgeoning",
        "Stomp: Creatures within 10ft make WIS save or be startled",
        "Advantage on Intimidation vs pirates",
        "You develop a slight limp (cosmetic)"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Treasure Chest',
    levelRequirement: 3
},

'chomp_call_whistle': {
    id: 'chomp_call_whistle',
    name: "Chain Chomp Call",
    description: "A rusty whistle that summons a wild Chain Chomp. Hope you're friends.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 15000,
    icon: '📯',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Summons CR 2 Chain Chomp (1 minute)",
        "50% chance it attacks you instead",
        "Chomp leaves after 1 minute or when bored",
        "Dogs hate the sound"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Chain Wrap',
    levelRequirement: 5
},

'toadette_bow': {
    id: 'toadette_bow',
    name: "Toadette's Pink Bow",
    description: "A giant pink bow that boosts charisma. Makes you feel adorable and powerful.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6000,
    icon: '🎀',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "+2 to CHA (Persuasion) checks",
        "Advantage on Performance (dance)",
        "Bow squeaks when you're nervous",
        "Mushroom people trust you more"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Gift Box',
    levelRequirement: 1
},

'sumo_bro_sandals': {
    id: 'sumo_bro_sandals',
    name: "Sumo Bro Thunder Sandals",
    description: "Heavy sandals that stomp lightning. Shake the earth with every step.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 21000,
    icon: '🩴',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Stomp: 1d6 Thunder in 5ft radius",
        "Once per short rest: Lightning stomp (3d6 Thunder, DEX save half)",
        "You weigh 100lbs more",
        "Clouds gather above your head when angry"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Thunder Crate',
    levelRequirement: 6
},

'blooper_ink_well': {
    id: 'blooper_ink_well',
    name: "Blooper's Ink Well",
    description: "A glass well filled with black ink. Write messages or blind enemies.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 7000,
    icon: '🦑',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Throw: 15ft cone, creatures blinded for 1 round (CON save)",
        "Ink writes messages visible only in moonlight",
        "Octopi become friendly",
        "Smells like low tide"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Sealed Jar',
    levelRequirement: 2
},

'wiggler_segment_armor': {
    id: 'wiggler_segment_armor',
    name: "Wiggler Segment Plate",
    description: "Orange segmented armor that squishes and stretches. Surprisingly flexible.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 17000,
    icon: '🐛',
    stock: 3,
    rarity: 'rare',
    effects: [
        "AC +2, but reduces speed by 5ft",
        "Resistance to Poison damage",
        "Can squeeze through 1ft openings",
        "Caterpillars think you're their mom"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Cocoon Wrap',
    levelRequirement: 4
},

'dk_tie': {
    id: 'dk_tie',
    name: "DK's Red Tie",
    description: "A massive red tie that grants ape-like strength. Makes you beat your chest involuntarily.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '👔',
    stock: 2,
    rarity: 'rare',
    effects: [
        "+2 to STR (Athletics) checks",
        "Advantage on climbing",
        "Once per day: Beat chest to intimidate (WIS save or frightened)",
        "Bananas taste better"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Jungle Vine',
    levelRequirement: 3
},

'parakoopa_wings': {
    id: 'parakoopa_wings',
    name: "Parakoopa Wing Clips",
    description: "Small wings that strap to your arms. Flap awkwardly but fly briefly.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 13000,
    icon: '🪶',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Fly 30ft for 2 rounds (concentration)",
        "Glide safely from any height",
        "Wings flap loudly (disadvantage on Stealth)",
        "Birds mock your technique"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Feather Box',
    levelRequirement: 4
},

'king_boo_crown': {
    id: 'king_boo_crown',
    name: "King Boo's Crown Fragment",
    description: "A broken piece of spectral royalty. Makes you translucent and arrogant.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 23000,
    icon: '👑',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Resistance to Force damage",
        "Can phase through walls (1/day, 10ft)",
        "Ghosts recognize you as nobility",
        "You become allergic to flashlights"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Ghostly Package',
    levelRequirement: 8
},

'goomba_king_scepter': {
    id: 'goomba_king_scepter',
    name: "Goomba King's Scepter",
    description: "A dented scepter that commands respect from weak-minded mushrooms.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16000,
    icon: '🔱',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Command Goombas (CR 1/4 or lower)",
        "Scepter headbutt: 1d8 Bludgeoning",
        "Goombas will form a throne for you",
        "You feel an urge to waddle"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Mushroom Crate',
    levelRequirement: 5
},

'bullet_bill_helmet': {
    id: 'bullet_bill_helmet',
    name: "Bullet Bill Helmet",
    description: "A rocket-shaped helmet that launches you forward. Landing is your problem.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 19000,
    icon: '🚀',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Once per short rest: Dash 120ft in straight line",
        "Enemies in path take 2d6 Bludgeoning (DEX save half)",
        "You take 1d6 damage from impact",
        "Smoke trail lasts 1 minute"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Rocket Sled',
    levelRequirement: 6
},

' shy_guy_torch': {
    id: 'shy_guy_torch',
    name: "Shy Guy's Mask Torch",
    description: "A torch that burns with a shy flame. Hides you in shadows but whispers secrets.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8000,
    icon: '🔦',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Sheds dim light in 20ft, but you're invisible in it",
        "Whispers one secret per day (DM's choice)",
        "Mask on torch giggles when nervous",
        "Burns out if you speak loudly"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Dark Wrap',
    levelRequirement: 2
},

'toad_house_cookie': {
    id: 'toad_house_cookie',
    name: "Toad House Power Cookie",
    description: "A star-shaped cookie that tastes like victory. Baked by Toadette herself.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 5000,
    icon: '🍪',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Eat: Gain 1d10 temporary HP",
        "Advantage on next saving throw",
        "Cookie crumbles into star shapes",
        "You feel optimistic for 1 hour"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Cookie Tin',
    levelRequirement: 1
},

'larry_koopa_wand': {
    id: 'larry_koopa_wand',
    name: "Larry's Chewed Wand",
    description: "A wand with bite marks. Casts weak magic but summons magical chewing gum.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11000,
    icon: '🪥',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Cast 'Prestidigitation' at will",
        "Once per day: Create sticky gum trap (10ft radius, DEX save or restrained)",
        "Wand tastes like mint",
        "Koopalings mock you for using it"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Chewed Wrapper',
    levelRequirement: 3
},

'mega_mole_gloves': {
    id: 'mega_mole_gloves',
    name: "Mega Mole Digging Gloves",
    description: "Giant claws that let you burrow through earth. Leave a trail of upturned soil.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14000,
    icon: '🥊',
    stock: 2,
    rarity: 'rare',
    effects: [
        "Burrow speed 20ft through non-rocky earth",
        "Claw attacks deal 1d8 Slashing",
        "Leave obvious mole trails",
        "Worms become your friends"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Dirt Mound',
    levelRequirement: 4
},

// ============================================
// === 50 NEW ITEMS (varied tiers & flavors) ===
// ============================================

'sparkling_bento': {
    id: 'sparkling_bento',
    name: "Sparkling Bento",
    description: "An effervescent meal in a lacquered box. Tastes like home, and a tiny fireworks show.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 300,
    icon: '🍱',
    stock: 20,
    rarity: 'common',
    effects: [
        "Heals 1d2 HP instantly",
        "If eaten during a performance, +1 to Performance for 10 minutes"
    ],
    vendor: 'mushroom_mart',
    shippedBy: 'Insulated Crate',
    levelRequirement: 1
},

'pocket_compass': {
    id: 'pocket_compass',
    name: "Pocket Compass",
    description: "A small brass compass whose needle wobbles toward your strongest desire.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 2200,
    icon: '🧭',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Points toward whatever you currently seek (subjective)",
        "Once per long rest: cast Locate Object (self only)",
        "Glows when near hidden doors"
    ],
    vendor: 'twilight_outpost',
    shippedBy: 'Padded Pouch',
    levelRequirement: 2
},

'whispering_scroll': {
    id: 'whispering_scroll',
    name: "Whispering Scroll",
    description: "A brittle parchment that softly murmurs secrets in a language you almost understand.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 4500,
    icon: '📜',
    stock: 10,
    rarity: 'rare',
    effects: [
        "Single Use: Grants knowledge of one obscure fact or a usable cantrip for 1 hour",
        "If unrolled at night it tells a helpful bedtime memory",
        "Chance to attract a curious scholar"
    ],
    vendor: 'bazaar_of_oddities',
    shippedBy: 'Silk Tube',
    levelRequirement: 3
},

'glow_shroom': {
    id: 'glow_shroom',
    name: "Glow Shroom",
    description: "A luminescent mushroom sealed in a jar. Edible in small bites or used to light rooms.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 1200,
    icon: '🍄',
    stock: 30,
    rarity: 'uncommon',
    effects: [
        "Provides bright light (10ft) for 8 hours",
        "Eating grants darkvision for 1 hour",
        "Overindulgence causes gentle bioluminescent skin for 24 hours (cosmetic)"
    ],
    vendor: 'orchard_stall',
    shippedBy: 'Glass Jar',
    levelRequirement: 1
},

'echo_lantern': {
    id: 'echo_lantern',
    name: "Echo Lantern",
    description: "A lantern that records the last spoken phrase it hears and can replay it.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 8000,
    icon: '🏮',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Records up to 1 minute of sounds and replays on command (range 60ft)",
        "Replaying can distract or pacify creatures who heard the original",
        "If fed a secret, it sometimes decides to whisper it later"
    ],
    vendor: 'glow_merchant',
    shippedBy: 'Wooden Crate',
    levelRequirement: 2
},

'cracked_star_coin': {
    id: 'cracked_star_coin',
    name: "Cracked Star Coin",
    description: "A thin coin with a tiny fissure; it hums with distant starlight.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 3000,
    icon: '🪙',
    stock: 12,
    rarity: 'uncommon',
    effects: [
        "Once per day: teleport to a safe nearby star-lit spot (30ft)",
        "If used under a true night sky, grants +1 Inspiration",
        "The crack widens with each use (fragile)"
    ],
    vendor: 'starflea',
    shippedBy: 'Velvet Pouch',
    levelRequirement: 2
},

'time_sand_hourglass': {
    id: 'time_sand_hourglass',
    name: "Hourglass of Stilled Seconds",
    description: "A glass hourglass filled with moonlight sand. Slows or rewinds fleeting moments.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 60000,
    icon: '⏳',
    stock: 1,
    rarity: 'epic',
    effects: [
        "3 charges",
        "Spend 1 charge as a reaction to grant +10 to a single d20 roll (rewind a failure)",
        "Spend 3 charges to rewind the last 6 seconds of combat (players keep memories)",
        "Recharges 1 charge per full moon"
    ],
    vendor: 'lunar_auction',
    shippedBy: 'Hermetic Case',
    levelRequirement: 12
},

'bridge_builder_brick': {
    id: 'bridge_builder_brick',
    name: "Bridge-Builder Brick",
    description: "A warm brick that murmurs blueprints. Lay it down, and a sturdy bridge follows.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 14000,
    icon: '🧱',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Place on gap: conjures a 10ft-wide stone bridge lasting 24 hours",
        "Bridge resists weather and normal attacks (AC 15, HP 50)",
        "Using two bricks side-by-side widens the span"
    ],
    vendor: 'bricklane',
    shippedBy: 'Crate of Mortar',
    levelRequirement: 4
},

'poltergeist_pepper': {
    id: 'poltergeist_pepper',
    name: "Poltergeist Pepper",
    description: "A wrinkled pepper that makes inanimate objects very enthusiastic about violence.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 18000,
    icon: '🌶️',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Single Use: Dust an area (15ft radius). Objects animate and attack for 1 minute (DM discretion)",
        "Animated objects deal +1d6 force damage",
        "On a roll of 1, attracts an actual poltergeist"
    ],
    vendor: 'witch_hut',
    shippedBy: 'Sealed Spice Jar',
    levelRequirement: 6
},

'mirror_of_second_chances': {
    id: 'mirror_of_second_chances',
    name: "Mirror of Second Chances",
    description: "A hand mirror framed with tiny feathers. It shows how a single different choice would have gone.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 25000,
    icon: '🪞',
    stock: 1,
    rarity: 'epic',
    effects: [
        "Once per long rest: reroll a failed check/attack/save with advantage",
        "If used to alter a major decision, the mirror may demand a memory in payment"
    ],
    vendor: 'rare_relics',
    shippedBy: 'Feathered Crate',
    levelRequirement: 8
},

'sprocket_belt': {
    id: 'sprocket_belt',
    name: "Sprocket Belt",
    description: "A leather belt studded with ticking gears. Powers small mechanical augmentations.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 22000,
    icon: '⚙️',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Gain +2 to Strength checks for tool/construct use",
        "3 charges: spend 1 for +10 on a single craft or attack; 1 charge/short rest",
        "Belt emits faint ticking"
    ],
    vendor: 'gearworks',
    shippedBy: 'Metal Trunk',
    levelRequirement: 4
},

'glacial_bottle': {
    id: 'glacial_bottle',
    name: "Glacial Bottle",
    description: "A flask of bottled winter. Throw to chill or sip for a cold clarity.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 6000,
    icon: '🧊',
    stock: 12,
    rarity: 'uncommon',
    effects: [
        "Throw (20ft): 10ft cone of Cold, 3d6 cold damage (DEX save half)",
        "Sip: immunity to cold and +1 to INT checks for 10 minutes",
        "Bottle reforms in 7 days"
    ],
    vendor: 'sea_seller',
    shippedBy: 'Ice-Packed Box',
    levelRequirement: 3
},

'tunneler_capsule': {
    id: 'tunneler_capsule',
    name: "Tunneler Capsule",
    description: "A heavy metal seed that can sprout a short burrow with grinding, earthworm teeth.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 17000,
    icon: '🪨',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Plant: creates 5ft-wide, 30ft-long tunnel in soft earth in 1 minute",
        "Tunnel collapses after 24 hours",
        "Sends a faint tremor detectable by Perception"
    ],
    vendor: 'junkheap_merchant',
    shippedBy: 'Metal Seed Crate',
    levelRequirement: 4
},

'koopa_lantern': {
    id: 'koopa_lantern',
    name: "Lantern Koopa",
    description: "A ceramic shell-lantern that glows and flashes when danger approaches.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 7500,
    icon: '🏮',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Sheds warm light (20ft) and gives +1 to passive Perception while lit",
        "Flashes red when hostile intent enters 30ft",
        "Works 24 hours; recharges at dawn"
    ],
    vendor: 'mariner_guild',
    shippedBy: 'Bubble-Wrapped Box',
    levelRequirement: 1
},

'sunglasses_of_swagger': {
    id: 'sunglasses_of_swagger',
    name: "Sunglasses of Swagger",
    description: "Stylish shades that make you impossible to ignore (in a good way).",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 11000,
    icon: '🕶️',
    stock: 10,
    rarity: 'rare',
    effects: [
        "While worn, +2 to Performance (Charisma) checks",
        "Once per day: cast Charm Person (self only)",
        "Attracts fanfare and pigeons"
    ],
    vendor: 'skyloom',
    shippedBy: 'Paper Sleeve',
    levelRequirement: 2
},

'mushroom_idol': {
    id: 'mushroom_idol',
    name: "Grand Mushroom Idol",
    description: "A carved statue of a smiling mushroom that radiates ancient hospitality.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 50000,
    icon: '🗿',
    stock: 1,
    rarity: 'epic',
    effects: [
        "Place in camp: grants +2 to all saving throws for allies within 30ft",
        "Once per week: summon a Mushroom Guardian (CR 3)",
        "Requires periodic offerings or it sulks"
    ],
    vendor: 'fey_market',
    shippedBy: 'Stone Crate',
    levelRequirement: 8
},

'wish_wisp': {
    id: 'wish_wisp',
    name: "Wish Wisp",
    description: "A tiny floating ember that whispers promises. It responds to true yearning... for a price.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 120000,
    icon: '✨',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Single Use: Grant a wish subject to DM adjudication",
        "Wish may twist reality in small ways and attracts cosmic attention",
        "After use, the wisher loses one cherished memory"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Glass Vial',
    levelRequirement: 15
},

'cackleberry': {
    id: 'cackleberry',
    name: "Cackleberry",
    description: "A small egg that constantly giggles when held. Delicious if you can stand the laughter.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 400,
    icon: '🥚',
    stock: 30,
    rarity: 'common',
    effects: [
        "Eat: +2 to Stealth for 10 minutes (giggly cover)",
        "50% chance to laugh uncontrollably and reveal position",
        "Favorite treat of trickster sprites"
    ],
    vendor: 'twine_shop',
    shippedBy: 'Wicker Basket',
    levelRequirement: 1
},

'potion_of_cheer': {
    id: 'potion_of_cheer',
    name: "Potion of Cheer",
    description: "A fizzy vial that brightens the spirit and loosens the tongue.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 2000,
    icon: '🥤',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Drink: +2 Charisma (Persuasion) for 1 hour",
        "Cures minor sadness and fear effects",
        "May cause sudden optimism (risky decisions)"
    ],
    vendor: 'alchemist_stall',
    shippedBy: 'Corked Flask',
    levelRequirement: 1
},

'map_fragment_starfield': {
    id: 'map_fragment_starfield',
    name: "Starfield Map Fragment",
    description: "A scrap of ancient cartography that maps celestial ley-lines and hidden nodes.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 9500,
    icon: '🗺️',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Reveals nearby ley nodes or celestial shrines on a map",
        "Once per day: reveal a safe path (DM discretion)"
    ],
    vendor: 'orbit_outpost',
    shippedBy: 'Rolled Tube',
    levelRequirement: 5
},

'thunder_leaf': {
    id: 'thunder_leaf',
    name: "Thunder Leaf",
    description: "A crackling leaf that tingles your fingers and turns kicks into lightning.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 21000,
    icon: '🍃',
    stock: 6,
    rarity: 'epic',
    effects: [
        "Single Use: For 1 minute, melee attacks deal +1d8 Lightning and gain advantage on Acrobatics",
        "After use, suffer 1d6 shock (withdrawal)",
        "Sparks can ignite flammable materials"
    ],
    vendor: 'storm_seller',
    shippedBy: 'Porcelain Jar',
    levelRequirement: 7
},

'lucky_pixel': {
    id: 'lucky_pixel',
    name: "Lucky Pixel",
    description: "A tiny, glowing bit of digital luck. Handy for gambling and tech experiments.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 3000,
    icon: '🔴',
    stock: 50,
    rarity: 'common',
    effects: [
        "Once per day: reroll a d20 and take the higher result",
        "Magically sticky — attracts stray electronics"
    ],
    vendor: 'starflea',
    shippedBy: 'Small Tin',
    levelRequirement: 1
},

'navigator_of_tabs': {
    id: 'navigator_of_tabs',
    name: "Navigator of Tabs",
    description: "A brass sextant full of minute bookmarks. Each tab is a destination you've been to before.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 75000,
    icon: '🧭',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Action: Open a tab and teleport to any location you've visited (1/day)",
        "Houses 5 tabs; regains one tab per long rest",
        "Steals a memory of that place when used (temporary amnesia)"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Lockbox',
    levelRequirement: 12
},

'squad_glow_beacon': {
    id: 'squad_glow_beacon',
    name: "Squad Glow Beacon",
    description: "A compact flare that calls nearby friendly troops and marks your position.",
    category: SHOP_CATEGORIES.FACTION,
    price: 9000,
    icon: '📡',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Deploy: call 1d6 allied militia (CR 1/2) to your location; they follow simple orders",
        "Each use increases faction attention (+2)",
        "Beacons burn for 10 minutes"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Crate of Flares',
    levelRequirement: 4,
    factionBonus: { morale: 10 }
},

'ink_splotch_talisman': {
    id: 'ink_splotch_talisman',
    name: "Ink-Splotch Talisman",
    description: "A blot of indelible ink preserved under glass. It soaks up lies and reveals truth.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12500,
    icon: '🖋️',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Wearer can see lies as faint halos (1/day for 10 minutes)",
        "Can nullify forged documents within 30ft (action)",
        "Attracts pedants"
    ],
    vendor: 'black_ink',
    shippedBy: 'Stamped Tube',
    levelRequirement: 5
},

'molten_bracelet': {
    id: 'molten_bracelet',
    name: "Molten Bracelet",
    description: "A ring of cooled lava that hums warmly. It warms wounds and lashes with flame.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 33000,
    icon: '🔥',
    stock: 2,
    rarity: 'epic',
    effects: [
        "While worn, Resistance to Fire damage",
        "Once per short rest: molten aura (10ft) deals 2d6 Fire to attackers",
        "May melt fragile items on touch"
    ],
    vendor: 'steamworks',
    shippedBy: 'Lead Pouch',
    levelRequirement: 7
},

'soul_lantern': {
    id: 'soul_lantern',
    name: "Soul Lantern",
    description: "A black lantern that traps stray spirits. Its light tastes like memories.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 100000,
    icon: '🔮',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Capture: once per day trap a medium or smaller spirit (contested check)",
        "Trapped spirits can be queried for knowledge (ethically dubious)",
        "Attracts vengeful entities if left lit"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Ironbound Cage',
    levelRequirement: 12
},

'bouncing_bubble_gum': {
    id: 'bouncing_bubble_gum',
    name: "Bouncing Bubble Gum",
    description: "A strip of gum that produces an extra-large, bouncy bubble when chewed.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 1500,
    icon: '🍬',
    stock: 25,
    rarity: 'uncommon',
    effects: [
        "Chew: create a bubble platform (10ft diameter) that holds Tiny objects for 1 minute",
        "Burst: deals 1d4 bludgeoning in 5ft radius",
        "Sticky residue remains"
    ],
    vendor: 'pawn_of_wonders',
    shippedBy: 'Waxed Paper',
    levelRequirement: 1
},

'accordion_of_autumn': {
    id: 'accordion_of_autumn',
    name: "Accordion of Autumn",
    description: "A squeezebox that brings fall wherever it plays; leaves swirl and hearts feel nostalgic.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 8000,
    icon: '🪗',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Play: 20ft radius of swirling leaves grants +1 Stealth to those within",
        "Once per day: entropic hum calms hostiles for 1 round (DC 12 Wis)",
        "Polka may induce dizziness"
    ],
    vendor: 'wandering_vend',
    shippedBy: 'Cloth Bag',
    levelRequirement: 2
},

'honeyed_lockpick': {
    id: 'honeyed_lockpick',
    name: "Honeyed Lockpick",
    description: "A slim pick laced with sweet syrup that tempts tumblers to slip aside.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 2400,
    icon: '🔐',
    stock: 12,
    rarity: 'uncommon',
    effects: [
        "+2 to Thieves' Tools checks",
        "Once per day: open a non-magical lock without a check",
        "Sticky sap may attract insects"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Velvet Roll',
    levelRequirement: 1
},

'gravity_pipette': {
    id: 'gravity_pipette',
    name: "Gravity Pipette",
    description: "A glass dropper that can alter the pull of the world on a small object.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 47000,
    icon: '🧪',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Siphon gravity from a 5ft cube: objects fall 10x slower for 1 minute",
        "Use on yourself to ignore fall damage once per long rest",
        "Fragile; breaks on critical failure"
    ],
    vendor: 'alchemist_stall',
    shippedBy: 'Padded Flask Box',
    levelRequirement: 6
},

'sprint_spurs': {
    id: 'sprint_spurs',
    name: "Sprint Spurs",
    description: "Metal spurs that make you feel the open road under your feet.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9000,
    icon: '🏇',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Wearer gains +10ft speed",
        "Once per short rest: Dash becomes a bonus action",
        "Rattles when idle"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Tin Case',
    levelRequirement: 2
},

'gobble_hat': {
    id: 'gobble_hat',
    name: "Gobble Hat",
    description: "A jaunty cap adorned with a beak. People can't help but offer you food.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 1200,
    icon: '🧢',
    stock: 12,
    rarity: 'common',
    effects: [
        "Advantage on Persuasion checks when food is present",
        "Once per day: eat a small object (coins, tiny trinkets) to hide it safely",
        "Googly-eyed when wet"
    ],
    vendor: 'orchard_stall',
    shippedBy: 'Cloth Cap Box',
    levelRequirement: 1
},

'plate_of_reflections': {
    id: 'plate_of_reflections',
    name: "Plate of Reflections",
    description: "A polished plate that shows more than your face: moments, memories, small truths.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 26000,
    icon: '🍽️',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Place food on it: reveals a memory tied to the meal (useful for investigation)",
        "Once per week: shapeshift your reflection (illusion) to charm or confuse"
    ],
    vendor: 'midnight_bazaar',
    shippedBy: 'Silver-Wrapped',
    levelRequirement: 6
},

'orb_of_snowglobe': {
    id: 'orb_of_snowglobe',
    name: "Orb of Snowglobe",
    description: "A palm-sized globe that contains a tiny, perfect winter town.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 4200,
    icon: '❄️',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Shake: create a localized snowfield (10ft radius) that reduces movement and grants concealment for 1 minute",
        "Shaken thrice: calms nearby beasts",
        "Contains a miniature model of a random location"
    ],
    vendor: 'glow_merchant',
    shippedBy: 'Packed Straw',
    levelRequirement: 1
},

'vortex_zip_tie': {
    id: 'vortex_zip_tie',
    name: "Vortex Zip-Tie",
    description: "A metallic band threaded with a micro-vortex that locks space together.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 38000,
    icon: '🔗',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Use to bind a creature: deals 2d10 force/round while restrained (STR check to break)",
        "Binds even intangible things briefly",
        "Consumes itself on success"
    ],
    vendor: 'gearworks',
    shippedBy: 'Steel Tube',
    levelRequirement: 8
},

'pocket_orchestra': {
    id: 'pocket_orchestra',
    name: "Pocket Orchestra",
    description: "A tiny music box that summons a handful of invisible musicians.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 15000,
    icon: '🎼',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Play: summon 1d6 spectral musicians that provide +2 AC and +1 morale to allies within 30ft for 10 minutes",
        "Musicians vanish if disturbed"
    ],
    vendor: 'pawn_of_wonders',
    shippedBy: 'Mahogany Case',
    levelRequirement: 4
},

'maple_armor_patch': {
    id: 'maple_armor_patch',
    name: "Maple Armor Patch",
    description: "A patch of living bark that sticks to armor and mends it slowly.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 2500,
    icon: '🪵',
    stock: 20,
    rarity: 'uncommon',
    effects: [
        "Attach to armor: restores 1d4 HP to armor each day (repairs wear)",
        "If soaked or burned, it sprouts leaves and improves stealth in natural areas",
        "Can be removed after 7 days"
    ],
    vendor: 'mossy_stall',
    shippedBy: 'Leaf-Wrapped',
    levelRequirement: 1
},

'echoes_bottle': {
    id: 'echoes_bottle',
    name: "Echoes Bottle",
    description: "A bottle that catches sounds and holds them like fish.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 6500,
    icon: '🍶',
    stock: 9,
    rarity: 'uncommon',
    effects: [
        "Capture a single spoken sentence and replay it from anywhere (range 500ft)",
        "Useful to trigger sound-sensitive traps or create decoys",
        "Bottled sounds go stale after a month"
    ],
    vendor: 'black_ink',
    shippedBy: 'Corked Bottle',
    levelRequirement: 2
},

'smokestack_prefab': {
    id: 'smokestack_prefab',
    name: "Smokestack Prefab",
    description: "A portable factory smokestack that belches engineered fog and obscures the battlefield.",
    category: SHOP_CATEGORIES.FACTION,
    price: 150000,
    icon: '🏭',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Deployable: creates dense smoke in a 100ft radius obscuring vision & sensors for 24 hours",
        "Configurable with scent, gas, or holographic decoys",
        "Public use risks sanctions & bounties"
    ],
    vendor: 'steel_syndicate',
    shippedBy: 'Freight Pallet',
    levelRequirement: 12,
    factionBonus: { stealth: 40, denial: 50 }
},

'rusted_starman': {
    id: 'rusted_starman',
    name: "Rusted Starman",
    description: "A tarnished, slow-glowing star relic. It's seen better days but still hums with speed.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 50000,
    icon: '🌠',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Single Use: Grants Haste & invulnerability to physical damage for 1 round, then you are immobile for 1 minute",
        "After use, gain one level of exhaustion",
        "Attracts cosmic scavengers"
    ],
    vendor: 'lunar_auction',
    shippedBy: 'Antique Box',
    levelRequirement: 10
},

'cocoa_amulet': {
    id: 'cocoa_amulet',
    name: "Cocoa Amulet",
    description: "A sweet-smelling charm that warms the heart and the hands.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 1100,
    icon: '🍫',
    stock: 25,
    rarity: 'common',
    effects: [
        "Wear: Resistance to Cold for 24 hours",
        "Once per day: brew a restorative cup that heals 1d4 HP",
        "Emits a pleasant aroma"
    ],
    vendor: 'orchard_stall',
    shippedBy: 'Small Tin',
    levelRequirement: 1
},

'inked_tattoo_voucher': {
    id: 'inked_tattoo_voucher',
    name: "Inked Tattoo Voucher",
    description: "A voucher entitling the bearer to one magical tattoo session at a select parlor.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 7000,
    icon: '🖊️',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Redeemable: gain a permanent minor magical tattoo (DM chooses: +1 stat, small resistance, or minor cantrip)",
        "Tattoos can be removed only by powerful magic"
    ],
    vendor: 'inked_parlor',
    shippedBy: 'Folded Card',
    levelRequirement: 1
},

'sapphire_frog_boots': {
    id: 'sapphire_frog_boots',
    name: "Sapphire Frog Boots",
    description: "Boots with a glossy blue sheen and webbed hems. You feel amphibious and precise.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 38000,
    icon: '🐸',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Grants swim speed equal to walking speed and advantage on Acrobatics in water",
        "Once per day: leap across 60ft of water as if solid",
        "Leaves a faint spray with each step"
    ],
    vendor: 'sea_seller',
    shippedBy: 'Waterproof Satchel',
    levelRequirement: 6
},

'gyro_seed': {
    id: 'gyro_seed',
    name: "Gyro Seed",
    description: "A metal seed that spins endlessly, stabilizing small objects and creatures.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 3500,
    icon: '🔩',
    stock: 12,
    rarity: 'uncommon',
    effects: [
        "Plant near falling object: negates fall damage for up to 10ft radius for 1 minute",
        "Affix to ammo to add +1 to hit",
        "Requires magnetized surface"
    ],
    vendor: 'gearworks',
    shippedBy: 'Padded Crate',
    levelRequirement: 1
},

'mimic_chest_key': {
    id: 'mimic_chest_key',
    name: "Mimic Chest Key",
    description: "A key carved with toothy smiles. It calms or convinces chests to reveal their secrets.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 9800,
    icon: '🗝️',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Use on chest: 80% chance to pacify a mimic or open a trapped chest safely",
        "Fails against artifacts or cursed chests",
        "Key grows warm near hungry things"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Wax Envelope',
    levelRequirement: 3
},

'neon_glove': {
    id: 'neon_glove',
    name: "Neon Glove",
    description: "A glowing latex glove that leaves streaks of color in the air as you gesture.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16000,
    icon: '🧤',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Attacks deal +1d4 radiant while glove is lit",
        "Once per short rest: draw glowing symbols in the air (Light with effects)",
        "Needs nightly charging"
    ],
    vendor: 'neon_vendor',
    shippedBy: 'Glow Box',
    levelRequirement: 2
},

'ashen_mask': {
    id: 'ashen_mask',
    name: "Ashen Mask",
    description: "A gray porcelain mask said to be made from the ash of a forgotten god. Your face hides a darker face.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 80000,
    icon: '🎭',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Wear: assume another's identity perfectly for 1 hour/day",
        "Each use steals a sliver of empathy (-2 Wisdom temporary)",
        "Attracts necromancers and bounty hunters"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Obsidian Sarcophagus',
    levelRequirement: 10
},

'fabric_of_morning': {
    id: 'fabric_of_morning',
    name: "Fabric of Morning",
    description: "A bolt of cloth woven from actual dawn: warm, bright, and impossibly clean.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 250000,
    icon: '🌅',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Unfurl: create daylight over a 200ft area that banishes gloom for 24 hours",
        "Drape over a corpse during a long rest: 50% chance to stabilize and revive with 1 HP (DM roll)",
        "Cloth hums softly and calls wandering sunbeasts"
    ],
    vendor: 'lunar_auction',
    shippedBy: 'Sunproof Cylinder',
    levelRequirement: 12
},

'ephemeral_petal': {
    id: 'ephemeral_petal',
    name: "Ephemeral Petal",
    description: "A fragile petal that flickers like a candle flame and whispers forgotten names.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 21000,
    icon: '🌸',
    stock: 6,
    rarity: 'epic',
    effects: [
        "Single Use: time feels slower for you for 1 minute (you can take an additional small action once)",
        "Memory Whisper: hear one truth about a creature you touch (short insight)",
        "Petal vanishes into motes after use"
    ],
    vendor: 'fey_market',
    shippedBy: 'Silk Envelope',
    levelRequirement: 6
},
'toadette_tea_set': {
    id: 'toadette_tea_set',
    name: "Toadette’s Calming Tea Set",
    description: "Brew a cuppa and forget your troubles. Or become obsessed with tea etiquette.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 11500,
    icon: '☕',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Drinking tea restores 1d8 HP and removes Frightened condition",
        "Must perform full 1-minute tea ceremony to activate (cannot be rushed)",
        "After 3 cups, gain +5 to Persuasion with Toads, -5 with Koopas (they hate tea time)",
        "Teapot occasionally sings showtunes"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Steam-Powered Trolley',
    levelRequirement: 1
},
    'faction_airship_plating': {
        id: 'faction_airship_plating',
        name: "Adamantite Hull Plating",
        description: "Reinforce the Vigilance with the strongest metal known.",
        category: SHOP_CATEGORIES.FACTION,
        price: 280000,
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
        price: 320000,
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
        price: 270000,
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
        price: 350000,
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
        price: 380000,
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
        price: 420000,
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
        price: 500000,
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
        price: 360000,
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
        price: 450000,
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
        price: 350000,
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
        price: 480000,
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
        price: 550000,
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
        price: 420000,
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
        price: 500000,
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
        price: 290000,
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
        price: 580000,
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
        price: 450000,
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
        price: 400000,
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
        price: 380000,
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
        price: 500000,
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
        price: 300000,
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
        price: 600000,
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
        price: 1500000,
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
        levelRequirement: 200,
        warning: "WILL END THE CAMPAIGN IF USED IMPROPERLY"
    },

    'star_rod': {
        id: 'star_rod',
        name: "The Star Rod",
        description: "The legendary rod stolen by Bowser. Grants any wish.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 2000000,
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
        price: 900000,
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
        price: 1200000,
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
        price: 850000,
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
        price: 5000000,
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
        price: 1500000,
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
        price: 950000,
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
        price: 800000,
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
        price: 750000,
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
        price: 1000000,
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
        price: 700000,
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
        price: 1100000,
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
        price: 900000,
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
        price: 1300000,
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
        price: 750000,
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
        price: 1400000,
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
        price: 1800000,
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
        price: 1800000,
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
        price: 900000,
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
        price: 650000,
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
        price: 750000,
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
        price: 500000,
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
        price: 1000000,
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
        price: 420000,
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
        price: 480000,
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
        price: 290000,
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
        price: 340000,
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
        price: 360000,
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
        price: 220000,
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
        price: 200000,
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
        price: 1000,
        icon: '🪨',
        stock: 500,
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
        price: 2500,
        icon: '🥢',
        stock: 200,
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
        price: 5000,
        icon: '🧢',
        stock: 100,
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
        price: 1500,
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
        price: 8000,
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
        price: 10000,
        icon: '🍄',
        stock: 200,
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
        price: 25000,
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
        price: 50000,
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
        price: 15000,
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
        price: 30000,
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
        price: 30000,
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
        price: 20000,
        icon: '🧪',
        stock: 100,
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
        price: 80000,
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
        price: 30000,
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
        price: 85000,
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
        price: 40000,
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
        price: 65000,
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
        price: 120000,
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
        price: 180000,
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
        price: 35000,
        icon: '❓',
        stock: 100,
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
        price: 25000,
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
        price: 55000,
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
        price: 45000,
        icon: '🏠',
        stock: 200,
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
        price: 240000,
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
        price: 200000,
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
        price: 100000,
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
        price: 150000,
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
        price: 220000,
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
        price: 250000,
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
        price: 150000,
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
        price: 200000,
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
        price: 250000,
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
        price: 250000,
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
        price: 450000,
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
        levelRequirement: 100,
        warning: "Mages' Guild will vaporize you on sight if caught with this"
    },
    
    'shadow_queen_tear': {
        id: 'shadow_queen_tear',
        name: "Shadow Queen's Tear",
        description: "A crystallized tear from the ancient Shadow Queen. Power at a terrible cost.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 1000000,
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
        price: 750000,
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
        price: 600000,
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
        levelRequirement: 100,
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