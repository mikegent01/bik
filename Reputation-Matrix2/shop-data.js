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

'eliminate _commission': {
    id: 'eliminate _commission',
    name: "Eliminate Race (Race-Specific)",
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
'crystal_bottle_of_silence': {
    id: 'crystal_bottle_of_silence',
    name: "Crystal Bottle of Silence",
    description: "A vial that captures sound and releases it as pure, crushing quiet.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 8500,
    icon: '💧',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Release: 20ft radius of absolute silence for 1 minute",
        "No sound can be made or heard inside — spells with verbal components fail",
        "Bottle refills at dawn with ambient noise"
    ],
    vendor: 'echo_hollow',
    shippedBy: 'Glass Vial',
    levelRequirement: 4
},

'inkwell_of_truth': {
    id: 'inkwell_of_truth',
    name: "Inkwell of Truth",
    description: "A black inkwell that forces honesty when used to write.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 18000,
    icon: '🖋️',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Any text written with it cannot contain lies",
        "If you try to lie, ink turns red and burns your hand",
        "Documents written with it are magically binding"
    ],
    vendor: 'black_ink',
    shippedBy: 'Obsidian Stand',
    levelRequirement: 6
},

'cursed_mirror_shard': {
    id: 'cursed_mirror_shard',
    name: "Cursed Mirror Shard",
    description: "A broken piece of a mirror that shows your worst fear instead of your reflection.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 95000,
    icon: '🪞',
    stock: 1,
    rarity: 'godly',
    effects: [
        "When held, you see your deepest fear manifested (DC 18 Wis save to look away)",
        "Failure: gain 1 level of madness (DM chooses)",
        "Can be used to banish illusions (1/day)"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Shattered Frame',
    levelRequirement: 11
},

'frozen_smile': {
    id: 'frozen_smile',
    name: "Frozen Smile",
    description: "A porcelain mask of a smiling face. It never melts, even in lava.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 42000,
    icon: '🎭',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Wear: gain advantage on Persuasion, but you cannot show emotion",
        "Immunity to fear effects",
        "Anyone who sees your face for more than 1 minute must make a DC 15 Wis save or become fascinated"
    ],
    vendor: 'dream_sanctuary',
    shippedBy: 'Ice-Cooled Box',
    levelRequirement: 8
},

'ghostly_pianist': {
    id: 'ghostly_pianist',
    name: "Ghostly Pianist",
    description: "A spectral musician who plays haunting melodies on an invisible piano.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 15000,
    icon: '🎹',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Plays for 1 hour daily at dawn — all within 30ft gain +1 to saves vs fear",
        "Plays only when someone is lonely",
        "If you cry, it stops and leaves you a single rose"
    ],
    vendor: 'lunar_auction',
    shippedBy: 'Musical Box',
    levelRequirement: 5
},

'compass_of_dead_paths': {
    id: 'compass_of_dead_paths',
    name: "Compass of Dead Paths",
    description: "A rusted compass that points not to north, but to where someone last died.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 12000,
    icon: '🧭',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Points to the location of the most recent death within 10 miles",
        "Glows brighter with more recent or violent deaths",
        "May attract ghosts or scavengers"
    ],
    vendor: 'bazaar_of_oddities',
    shippedBy: 'Rusted Case',
    levelRequirement: 3
},

'bone_chime_wind_catcher': {
    id: 'bone_chime_wind_catcher',
    name: "Bone Chime Wind Catcher",
    description: "A mobile of tiny bones that chime in the wind — each chime is a whisper of the dead.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 6000,
    icon: '🪦',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "When wind blows, you hear one cryptic phrase from a dead person",
        "Once per day: ask a yes/no question — answer is whispered in a dead voice",
        "Chimes stop if you lie"
    ],
    vendor: 'temple_eternal',
    shippedBy: 'Woven String',
    levelRequirement: 2
},

'petrified_tears': {
    id: 'petrified_tears',
    name: "Petrified Tears",
    description: "A vial of crystallized tears from a weeping angel. They glow with sorrow.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 25000,
    icon: '💧',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Drink: gain 1d10 temporary HP and advantage on saves vs charm for 1 hour",
        "You feel overwhelming empathy for all living things",
        "After effect, you cry uncontrollably for 1 minute"
    ],
    vendor: 'fey_market',
    shippedBy: 'Crystal Flask',
    levelRequirement: 7
},

'wishing_coin': {
    id: 'wishing_coin',
    name: "Wishing Coin",
    description: "A coin that whispers wishes to you while you sleep. Only one can be true.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 150000,
    icon: '🪙',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Each night, you hear a whispered wish (DM chooses one)",
        "You may choose to fulfill it — but it costs 1d6 years of your life",
        "If you refuse, the coin whispers louder until you break"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Velvet Pouch',
    levelRequirement: 10
},

'timeless_sand': {
    id: 'timeless_sand',
    name: "Timeless Sand",
    description: "A jar of sand that never runs out — it flows backward when touched.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 75000,
    icon: '⏳',
    stock: 1,
    rarity: 'epic',
    effects: [
        "Sprinkle: reverse time for 1 minute for a single object or creature",
        "Cannot affect living beings for more than 10 seconds",
        "Each use ages the user 1d4 days"
    ],
    vendor: 'lunar_auction',
    shippedBy: 'Crystal Jar',
    levelRequirement: 9
},

'portal_key_to_nowhere': {
    id: 'portal_key_to_nowhere',
    name: "Portal Key to Nowhere",
    description: "A key that opens a door to a dimension of pure white void.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 220000,
    icon: '🚪',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Open portal: enter a 10ft cube of nothingness — no time, no sound, no gravity",
        "You age 1 year per hour spent inside",
        "Escape requires a DC 20 Wisdom save — failure means you vanish forever"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Void Box',
    levelRequirement: 14
},

'book_of_unwritten_names': {
    id: 'book_of_unwritten_names',
    name: "Book of Unwritten Names",
    description: "A blank book that writes the names of those who will die tomorrow.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 180000,
    icon: '📖',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Each dawn, 1d4 names appear — those people will die before sunset",
        "You may erase a name — but another appears in its place",
        "The book is sentient. It whispers to you at night"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Leather Binding',
    levelRequirement: 12
},

'candle_of_the_last_breath': {
    id: 'candle_of_the_last_breath',
    name: "Candle of the Last Breath",
    description: "A black candle that burns for exactly 1 minute — and brings back the dead for that time.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 300000,
    icon: '🕯️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Light: resurrects one recently dead creature (within 1 hour)",
        "They return with 1 HP and full memories",
        "They speak one truth before dissolving into smoke",
        "You lose 1d6 years of life"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Ashen Box',
    levelRequirement: 15
},

'heart_of_the_mountain': {
    id: 'heart_of_the_mountain',
    name: "Heart of the Mountain",
    description: "A pulsing stone that feels like a living heartbeat. It is the soul of a dead titan.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 550000,
    icon: '🪨',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Place in ground: creates a 1-mile radius of unshakable stability",
        "Earthquakes, collapses, and planar rifts are impossible within",
        "The heart must be fed 10,000 gp in precious stones monthly — or it crumbles"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Stone Chest',
    levelRequirement: 13
},

'fountain_of_mirrored_souls': {
    id: 'fountain_of_mirrored_souls',
    name: "Fountain of Mirrored Souls",
    description: "A fountain that reflects not your face, but your alternate selves.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 700000,
    icon: '💧',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Drink: you experience the life of one alternate version of yourself (DM chooses)",
        "Gain 1d4 memories, skills, or traumas from that life",
        "You may permanently merge with one version — gaining their abilities, losing your past"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Obsidian Basin',
    levelRequirement: 16
},

'pocket_dimensional_kitchen': {
    id: 'pocket_dimensional_kitchen',
    name: "Pocket Dimensional Kitchen",
    description: "A tiny kitchen that opens into a vast, infinite pantry and oven.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 450000,
    icon: '🍳',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Cook any meal: infinite quantity, perfect flavor, +1d4 HP restored",
        "All food is magically preserved for 100 years",
        "Kitchen is guarded by a sentient spatula (CR 1/4) who judges your cooking"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Miniature Stove',
    levelRequirement: 10
},

'crown_of_the_lost_king': {
    id: 'crown_of_the_lost_king',
    name: "Crown of the Lost King",
    description: "A rusted crown that whispers the names of every ruler who ever failed.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 800000,
    icon: '👑',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Wear: gain +2 to Charisma and advantage on Leadership checks",
        "You hear the voices of 100 fallen kings — each gives advice (DM chooses)",
        "Every 7 days, you must make a DC 18 Wisdom save — failure: you believe you are one of them"
    ],
    vendor: 'lunar_auction',
    shippedBy: 'Cursed Sarcophagus',
    levelRequirement: 14
},

'whispering_garden_seeds': {
    id: 'whispering_garden_seeds',
    name: "Whispering Garden Seeds",
    description: "Seeds that grow into plants that speak in the voices of those who planted them.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 18000,
    icon: '🌱',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Plant: grow a sentient plant that speaks in the voice of the planter",
        "Plant remembers everything the planter said near it",
        "If killed, it screams the last thing it heard — and everyone within 50ft hears it"
    ],
    vendor: 'fey_market',
    shippedBy: 'Soil-Wrapped Packet',
    levelRequirement: 5
},

'armor_of_the_forgotten': {
    id: 'armor_of_the_forgotten',
    name: "Armor of the Forgotten",
    description: "A suit of armor with no maker’s mark. It remembers every warrior who wore it.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 350000,
    icon: '🦾',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "AC 20, resistance to all damage types",
        "Gains +1 to attack/damage for each fallen warrior whose memory it holds (max +5)",
        "If you die, the armor remembers you — and whispers your name to others forever"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Bone Chest',
    levelRequirement: 12
},

'storm_in_a_bottle': {
    id: 'storm_in_a_bottle',
    name: "Storm in a Bottle",
    description: "A sealed bottle containing a miniature hurricane.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 280000,
    icon: '🌀',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Break: unleash a 50ft radius storm — 4d10 lightning, 3d10 thunder, wind speed 60ft",
        "Lasts 10 minutes",
        "The bottle reforms in 1 week — but each use weakens the storm inside"
    ],
    vendor: 'storm_seller',
    shippedBy: 'Lead-Sealed Vial',
    levelRequirement: 10
},

'oracle_of_lost_words': {
    id: 'oracle_of_lost_words',
    name: "Oracle of Lost Words",
    description: "A stone tablet that speaks only in languages that no longer exist.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 22000,
    icon: '🪨',
    stock: 1,
    rarity: 'epic',
    effects: [
        "Ask a question: it answers in a dead language — but you understand it",
        "Answer is always cryptic, poetic, and true",
        "Each use erases one word from your native tongue forever"
    ],
    vendor: 'scholar_society',
    shippedBy: 'Ancient Stone',
    levelRequirement: 7
},

'vial_of_the_first_sigh': {
    id: 'vial_of_the_first_sigh',
    name: "Vial of the First Sigh",
    description: "A drop of air from the moment the first living creature exhaled.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 650000,
    icon: '🌬️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Breathe: grant yourself or another creature 100 temporary HP",
        "You gain the ability to speak all languages for 1 hour",
        "After use, you forget your own name for 1d4 days"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Glass Sphere',
    levelRequirement: 15
},

'familiar_soul_jar': {
    id: 'familiar_soul_jar',
    name: "Familiar Soul Jar",
    description: "A jar that holds the soul of a lost familiar — you can summon it as a ghost.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 15000,
    icon: '👻',
    stock: 10,
    rarity: 'rare',
    effects: [
        "Summon: a ghostly familiar (CR 0) that can deliver messages, scout, or carry items",
        "It remembers everything it knew in life",
        "It cannot be destroyed — only released"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Ceramic Jar',
    levelRequirement: 4
},

'key_to_the_godly_doors': {
    id: 'key_to_the_godly_doors',
    name: "Key to the Godly Doors",
    description: "A key forged from starlight that opens any door — even those to other planes.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 850000,
    icon: '🗝️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Open any door, lock, portal, or barrier — even those sealed by divine will",
        "One use per day",
        "Each use causes a single star to vanish from the night sky"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Cosmic Vault',
    levelRequirement: 14
},

'painting_of_the_dying_sun': {
    id: 'painting_of_the_dying_sun',
    name: "Painting of the Dying Sun",
    description: "A canvas that slowly dims as time passes. If it goes black, the sun dies.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 900000,
    icon: '🖼️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "The painting dims 1% per day — if it reaches 0%, the sun dims permanently",
        "You can slow its dimming by sacrificing 10,000 gp per day",
        "If you destroy it, the sun explodes — but you become a god of darkness"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Gilded Frame',
    levelRequirement: 16
},

'echo_of_a_dead_god': {
    id: 'echo_of_a_dead_god',
    name: "Echo of a Dead God",
    description: "A whispering voice that speaks only in the tongue of a dead deity.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 1100000,
    icon: '🗣️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "The voice gives you one divine spell per day (DM chooses)",
        "It demands worship — you must pray daily or it begins to possess you",
        "If you speak its name aloud, it awakens its corpse"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Bone Flute',
    levelRequirement: 17
},

'mirror_of_the_future_self': {
    id: 'mirror_of_the_future_self',
    name: "Mirror of the Future Self",
    description: "A mirror that shows you what you will become — if you do nothing.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 75000,
    icon: '🪞',
    stock: 1,
    rarity: 'epic',
    effects: [
        "Look into it: see your future self — aged, broken, alone",
        "You gain advantage on all saving throws for 24 hours",
        "If you look again within 7 days, you must make a DC 16 Wisdom save — failure: you believe you are already dead"
    ],
    vendor: 'dream_sanctuary',
    shippedBy: 'Black Frame',
    levelRequirement: 9
},

'book_of_dead_languages': {
    id: 'book_of_dead_languages',
    name: "Book of Dead Languages",
    description: "A tome written in languages that no living soul remembers.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 20000,
    icon: '📜',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Read for 1 hour: learn one dead language perfectly",
        "You forget one language you knew before",
        "The book sometimes writes new words — in your voice"
    ],
    vendor: 'scholar_society',
    shippedBy: 'Leather Bindings',
    levelRequirement: 5
},

'hat_of_the_mad_architect': {
    id: 'hat_of_the_mad_architect',
    name: "Hat of the Mad Architect",
    description: "A top hat that makes you see buildings as they could be — not as they are.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 45000,
    icon: '🎩',
    stock: 2,
    rarity: 'epic',
    effects: [
        "You see architectural flaws and hidden passages",
        "You can redesign any structure in your mind — if you spend 1 hour, it becomes real (DC 15 Int check)",
        "You begin to hear whispers from the walls"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Top Hat Box',
    levelRequirement: 7
},

'coin_of_the_god_of_chance': {
    id: 'coin_of_the_god_of_chance',
    name: "Coin of the God of Chance",
    description: "A coin that flips itself. It always lands on the side you fear most.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 12000,
    icon: '🪙',
    stock: 1,
    rarity: 'rare',
    effects: [
        "Flip: roll a d20 — if even, you gain a blessing (DM chooses); if odd, you gain a curse",
        "The coin flips again every dawn",
        "It never lands on heads or tails — only on the edge"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Gilded Box',
    levelRequirement: 3
},

'cage_of_the_unborn': {
    id: 'cage_of_the_unborn',
    name: "Cage of the Unborn",
    description: "A tiny metal cage that holds the soul of a child who was never born.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 500000,
    icon: '🪝',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Place a soul inside: you can resurrect them — but they are born as a shadow",
        "They become your child — but age 10x faster",
        "If released, they become a vengeful spirit that hunts you"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Silver Crib',
    levelRequirement: 12
},

'ring_of_the_last_kiss': {
    id: 'ring_of_the_last_kiss',
    name: "Ring of the Last Kiss",
    description: "A silver ring that remembers the final kiss of every lover who ever died.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 32000,
    icon: '💍',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Wear: you feel the emotions of the last person who loved you",
        "Once per day: you can relive one moment of perfect love — heal 1d8 HP",
        "You begin to dream of lovers you never had"
    ],
    vendor: 'fey_market',
    shippedBy: 'Velvet Box',
    levelRequirement: 6
},

'globe_of_the_lost_world': {
    id: 'globe_of_the_lost_world',
    name: "Globe of the Lost World",
    description: "A crystal globe showing a world that never existed — but feels familiar.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 600000,
    icon: '🌍',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Look inside: see a perfect world where you were never hurt",
        "You may enter it for 1 hour — but time flows differently",
        "If you stay longer, you become part of it — and your world forgets you"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Crystal Orb',
    levelRequirement: 14
},

'book_of_moths': {
    id: 'book_of_moths',
    name: "Book of Moths",
    description: "A book whose pages are made of living moths that flutter when read.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 18000,
    icon: '🦋',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Read: gain knowledge of a single secret (DM chooses)",
        "Each page you read, one moth dies — and you forget one memory",
        "The moths whisper secrets to you at night"
    ],
    vendor: 'bazaar_of_oddities',
    shippedBy: 'Silk Cover',
    levelRequirement: 5
},

'necklace_of_the_silent_song': {
    id: 'necklace_of_the_silent_song',
    name: "Necklace of the Silent Song",
    description: "A pendant that sings a song only the dead can hear.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 25000,
    icon: '📿',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Wear: ghosts are drawn to you — they whisper secrets",
        "Once per week: you can communicate with a single dead person",
        "You begin to hear the song even when not wearing it"
    ],
    vendor: 'temple_eternal',
    shippedBy: 'Bone Chain',
    levelRequirement: 4
},

'garden_of_the_moon': {
    id: 'garden_of_the_moon',
    name: "Garden of the Moon",
    description: "A potted garden that grows only under moonlight — and blooms with dreams.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 180000,
    icon: '🌙',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Each full moon: bloom a flower that grants a dream vision (DM chooses)",
        "Plants glow softly and repel undead",
        "If you sleep in the garden, you remember your past lives"
    ],
    vendor: 'fey_market',
    shippedBy: 'Moonlit Pot',
    levelRequirement: 10
},

'candle_of_the_first_fire': {
    id: 'candle_of_the_first_fire',
    name: "Candle of the First Fire",
    description: "The first flame ever lit — it never burns out, and never warms.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 420000,
    icon: '🕯️',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Light: creates a 30ft radius of pure, cold fire — burns objects, not flesh",
        "Can ignite magical items to reveal their properties",
        "If extinguished, the world forgets how to make fire"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Ashen Holder',
    levelRequirement: 12
},

'voice_of_the_void': {
    id: 'voice_of_the_void',
    name: "Voice of the Void",
    description: "A small, hollow bell that, when rung, summons the silence between stars.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 750000,
    icon: '🔔',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Ring: 60ft radius of absolute void — no sound, no light, no magic",
        "Creatures inside are blinded, deafened, and cannot cast spells",
        "You hear a voice whisper: 'You are not real.'"
    ],
    vendor: 'celestial_exchange',
    shippedBy: 'Black Bell',
    levelRequirement: 15
},

'pocket_of_infinite_stairs': {
    id: 'pocket_of_infinite_stairs',
    name: "Pocket of Infinite Stairs",
    description: "A small stairwell that leads nowhere — but never ends.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 600000,
    icon: '🪜',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Enter: climb forever — time passes normally, but you never reach the top",
        "You can exit at any point — but you arrive in a random location",
        "Each climb ages you 1d4 years"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Wooden Door',
    levelRequirement: 13
},

'crystal_bird_of_memory': {
    id: 'crystal_bird_of_memory',
    name: "Crystal Bird of Memory",
    description: "A bird made of clear crystal that sings the memories of those it touches.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 28000,
    icon: '🐦',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Touch: it sings one memory from your past — vivid and true",
        "Once per week: it sings a memory from someone nearby",
        "It shatters if you lie to it"
    ],
    vendor: 'dream_sanctuary',
    shippedBy: 'Glass Cage',
    levelRequirement: 6
},

'box_of_silent_screams': {
    id: 'box_of_silent_screams',
    name: "Box of Silent Screams",
    description: "A wooden box that contains the screams of those who died in silence.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 450000,
    icon: '📦',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Open: all within 20ft are deafened for 1 minute",
        "Creatures who hear it must make a DC 18 Wis save — failure: they scream silently forever",
        "The box grows heavier with each scream it holds"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Iron Lockbox',
    levelRequirement: 11
},
// ============================================
// === 100 NEW ITEMS (MIXED CATEGORIES) ===
// ============================================

'mini_mushroom': {
    id: 'mini_mushroom',
    name: "Mini Mushroom",
    description: "A tiny mushroom that shrinks you down to pocket size for sneaky maneuvers.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 5000,
    icon: '🍄',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Single Use: Shrink to Tiny size for 10 minutes",
        "+5 to Stealth checks while shrunk",
        "Vulnerable to being stepped on (double damage from larger foes)"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Tiny Box',
    levelRequirement: 2
},

'propeller_mushroom': {
    id: 'propeller_mushroom',
    name: "Propeller Mushroom",
    description: "A mushroom with a built-in propeller for short flights and spins.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 8000,
    icon: '🍄',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Single Use: Gain fly speed 30ft for 1 minute",
        "Spin attack: 2d6 bludgeoning in 5ft radius",
        "Lands softly (no fall damage)"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Airmail',
    levelRequirement: 3
},

'ice_flower': {
    id: 'ice_flower',
    name: "Ice Flower",
    description: "A frosty flower that lets you shoot ice balls to freeze enemies.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '❄️',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Cast 'Ray of Frost' at will (1d8 cold damage)",
        "On hit: target frozen (restrained) for 1 round (CON save DC 13)",
        "Wearer gains resistance to cold"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Ice Pack',
    levelRequirement: 4
},

'cloud_flower': {
    id: 'cloud_flower',
    name: "Cloud Flower",
    description: "A fluffy flower that creates temporary cloud platforms.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 15000,
    icon: '☁️',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Single Use: Create 3 cloud platforms (last 1 minute)",
        "Platforms hover 10ft off ground, hold up to 500lbs",
        "Can be used to cross gaps or reach heights"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Sky Delivery',
    levelRequirement: 5
},

'rock_mushroom': {
    id: 'rock_mushroom',
    name: "Rock Mushroom",
    description: "Turns you into a rolling boulder for smashing through obstacles.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 10000,
    icon: '🪨',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Single Use: Transform into boulder (speed 40ft, 3d6 bludgeoning on ram)",
        "Immune to non-magical damage while rolling",
        "Lasts 1 minute or until stopped"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Stone Crate',
    levelRequirement: 3
},

'boomerang_flower': {
    id: 'boomerang_flower',
    name: "Boomerang Flower",
    description: "Grants the ability to throw returning boomerangs.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18000,
    icon: '🪃',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Throw boomerang: 1d8 slashing, returns automatically",
        "Range 60ft, can hit multiple targets on return (DEX save DC 14)",
        "Unlimited uses"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Padded Case',
    levelRequirement: 5
},

'super_bell': {
    id: 'super_bell',
    name: "Super Bell",
    description: "A bell that turns you into a cat for climbing and scratching.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 7000,
    icon: '🔔',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Single Use: Gain cat form (climb speed 30ft, claw attack 1d6 slashing)",
        "Advantage on Acrobatics checks",
        "Lasts 10 minutes"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Bell Box',
    levelRequirement: 2
},

'double_cherry': {
    id: 'double_cherry',
    name: "Double Cherry",
    description: "Creates a duplicate of yourself for double the trouble.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 25000,
    icon: '🍒',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Single Use: Create 1 clone (identical stats, shares actions)",
        "Clone lasts 1 minute or until damaged",
        "Both can attack/act independently"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Fruit Basket',
    levelRequirement: 6
},

'cannon_box': {
    id: 'cannon_box',
    name: "Cannon Box",
    description: "A wearable box that shoots cannonballs.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '📦',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Wear: Fire cannonball (2d10 bludgeoning, range 120ft)",
        "3 charges per short rest",
        "Reduces speed by 10ft while worn"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Heavy Crate',
    levelRequirement: 5
},

'goomba_mask': {
    id: 'goomba_mask',
    name: "Goomba Mask",
    description: "Disguise yourself as a Goomba to infiltrate enemy lines.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 3000,
    icon: '🎭',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Advantage on Deception checks against Koopa troops",
        "Take double damage from jumps",
        "Lasts until removed"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Mask Bag',
    levelRequirement: 1
},

'bullet_bill_mask': {
    id: 'bullet_bill_mask',
    name: "Bullet Bill Mask",
    description: "Turns you into a living Bullet Bill for charging attacks.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 12000,
    icon: '🚀',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Single Use: Dash 60ft in a line, 3d6 piercing damage to all in path",
        "Explode on impact (2d6 fire in 5ft radius)",
        "User takes half explosion damage"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Explosive Container',
    levelRequirement: 4
},

'piranha_plant_slide': {
    id: 'piranha_plant_slide',
    name: "Piranha Plant Slide Whistle",
    description: "A whistle that summons a Piranha Plant to chomp foes.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 9000,
    icon: '🌿',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Blow: Summon Piranha Plant (1d8 piercing, poison 1d4)",
        "Plant lasts 1 minute, attacks once per turn",
        "Requires feeding after use"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Plant Pot',
    levelRequirement: 3
},

'chain_chomp_leash': {
    id: 'chain_chomp_leash',
    name: "Chain Chomp Leash",
    description: "A sturdy leash to control a Chain Chomp as a pet or weapon.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 22000,
    icon: '🔗',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Summon Chain Chomp (CR 2, bite 2d6 piercing)",
        "Chomp attacks on your command",
        "Chain breaks on critical failure"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Reinforced Chain',
    levelRequirement: 6
},

'bob_omb_buddy': {
    id: 'bob_omb_buddy',
    name: "Bob-omb Buddy",
    description: "A friendly Bob-omb that explodes on command without harming allies.",
    category: SHOP_CATEGORIES.FACTION,
    price: 15000,
    icon: '💣',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Throw: Explode for 4d6 fire in 10ft radius (allies immune)",
        "Single Use per Bob-omb",
        "Gains faction loyalty +10"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Bomb Crate',
    levelRequirement: 4,
    factionBonus: { combat: 20 }
},

'lakitu_fishing_rod': {
    id: 'lakitu_fishing_rod',
    name: "Lakitu Fishing Rod",
    description: "A rod that hooks and reels in distant objects or enemies.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 14000,
    icon: '🎣',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Range 60ft, pull target 20ft closer (STR save DC 14)",
        "Can fish items from water/hazards",
        "Unlimited uses"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Rod Case',
    levelRequirement: 4
},

'thwomp_statue': {
    id: 'thwomp_statue',
    name: "Thwomp Statue",
    description: "A miniature Thwomp that crushes traps or doors.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 11000,
    icon: '🪨',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Place: Crush object (4d10 bludgeoning)",
        "Single Use, then statue crumbles",
        "Heavy (50lbs)"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Stone Delivery',
    levelRequirement: 3
},

'wiggler_boots': {
    id: 'wiggler_boots',
    name: "Wiggler Boots",
    description: "Boots that make you bounce angrily when damaged.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16000,
    icon: '👢',
    stock: 4,
    rarity: 'rare',
    effects: [
        "When hit: Gain +10 speed and +1d6 damage on next attack",
        "Effect stacks up to 3 times",
        "Calms after combat"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Boot Box',
    levelRequirement: 5
},

'blooper_ink': {
    id: 'blooper_ink',
    name: "Blooper Ink Vial",
    description: "Ink that obscures vision and slips up enemies.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 4000,
    icon: '🦑',
    stock: 12,
    rarity: 'uncommon',
    effects: [
        "Throw: 10ft radius blinded for 1 round (DEX save DC 12)",
        "Area becomes slippery (difficult terrain)",
        "Single Use"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Ink Bottle',
    levelRequirement: 2
},

'cheep_cheep_net': {
    id: 'cheep_cheep_net',
    name: "Cheep Cheep Net",
    description: "A net that catches flying fish for food or bombs.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6000,
    icon: '🕸️',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Catch aquatic creatures (1d4 fish per use)",
        "Can entangle flying enemies (restrained, STR save DC 13)",
        "Durable, 5 uses before repair"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Net Roll',
    levelRequirement: 2
},

'pokey_cactus': {
    id: 'pokey_cactus',
    name: "Pokey Cactus Segment",
    description: "A spiky segment that rolls and impales foes.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 5000,
    icon: '🌵',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Throw: Rolls 30ft, 2d4 piercing to all in path",
        "Sticks to target (ongoing 1d4 damage until removed)",
        "Single Use"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Prickly Package',
    levelRequirement: 2
},

'monty_mole_drill': {
    id: 'monty_mole_drill',
    name: "Monty Mole Drill",
    description: "A drill for burrowing through earth quickly.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 13000,
    icon: '⛏️',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Burrow speed 20ft through soft earth",
        "Deal 2d6 piercing on underground attack",
        "3 charges per day"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Tool Kit',
    levelRequirement: 4
},

'shy_guy_toy': {
    id: 'shy_guy_toy',
    name: "Shy Guy Toy",
    description: "A wind-up toy that distracts enemies.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 2000,
    icon: '🤖',
    stock: 15,
    rarity: 'common',
    effects: [
        "Wind up: Distracts 1 enemy (disadvantage on next attack)",
        "Lasts 1 round",
        "Unlimited uses, but fragile"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Toy Box',
    levelRequirement: 1
},

'hammer_bro_hammer': {
    id: 'hammer_bro_hammer',
    name: "Hammer Bro Hammer",
    description: "A throwing hammer that stuns on impact.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 10000,
    icon: '🔨',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Throw: 1d8 bludgeoning, stun on critical hit",
        "Range 30ft, returns if missed",
        "Unlimited throws"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Hammer Case',
    levelRequirement: 3
},

'fire_bro_fireball': {
    id: 'fire_bro_fireball',
    name: "Fire Bro Fireball Glove",
    description: "Glove that launches bouncing fireballs.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15000,
    icon: '🔥',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Launch fireball: 2d6 fire, bounces once",
        "Range 40ft, 3 charges per short rest",
        "Ignites flammable objects"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Fireproof Glove',
    levelRequirement: 5
},

'boo_sheet': {
    id: 'boo_sheet',
    name: "Boo Sheet",
    description: "A sheet that grants invisibility when still.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18000,
    icon: '👻',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Invisible while not moving",
        "Advantage on Stealth if partially covered",
        "Tears after 10 uses"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Ghostly Fabric',
    levelRequirement: 5
},

'king_boo_crown': {
    id: 'king_boo_crown',
    name: "King Boo Crown",
    description: "A crown that allows possession of objects.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 50000,
    icon: '👑',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Possess inanimate object (control for 1 minute)",
        "Object gains your stats, can attack",
        "WIS save DC 16 to resist ejection"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Cursed Box',
    levelRequirement: 10
},

'dry_bones_shell': {
    id: 'dry_bones_shell',
    name: "Dry Bones Shell",
    description: "A shell that reassembles after destruction.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 25000,
    icon: '☠️',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Worn as armor: AC 16, reassembles if broken (1 minute)",
        "Immunity to necrotic",
        "Vulnerable to bludgeoning"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Bone Crate',
    levelRequirement: 7
},

'paratroopa_wings': {
    id: 'paratroopa_wings',
    name: "Paratroopa Wings",
    description: "Wings for gliding and short hops.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '🦋',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Glide 20ft per 10ft fallen",
        "Jump distance doubled",
        "Fragile, repairs needed after damage"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Wing Pack',
    levelRequirement: 4
},

'spiny_egg': {
    id: 'spiny_egg',
    name: "Spiny Egg",
    description: "An egg that hatches into a spiky projectile.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 3000,
    icon: '🥚',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Throw: Hatches mid-air, 1d6 piercing + spikes (ongoing 1d4)",
        "Single Use",
        "May hatch friendly Spiny (1% chance)"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Egg Carton',
    levelRequirement: 1
},

'buzzy_beetle_shell': {
    id: 'buzzy_beetle_shell',
    name: "Buzzy Beetle Shell",
    description: "A shell resistant to fire and stomps.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8000,
    icon: '🐞',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Shield: +2 AC, fire resistance",
        "Can curl up to avoid damage (once per short rest)",
        "Heavy (reduces speed 5ft)"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Shell Case',
    levelRequirement: 3
},

'magikoopa_wand': {
    id: 'magikoopa_wand',
    name: "Magikoopa Wand",
    description: "A wand that transforms objects into enemies.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 40000,
    icon: '🪄',
    stock: 1,
    rarity: 'epic',
    effects: [
        "Transform object into CR 1 creature (1 minute)",
        "Creature hostile to all",
        "3 charges per day"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Magic Box',
    levelRequirement: 8
},

'kamek_broom': {
    id: 'kamek_broom',
    name: "Kamek's Broom",
    description: "A flying broom for quick escapes.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 30000,
    icon: '🧹',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Fly speed 50ft",
        "Can cast one random spell per day (DM roll)",
        "Broom has mind of its own sometimes"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Broomstick Delivery',
    levelRequirement: 7
},

'bowser_claw': {
    id: 'bowser_claw',
    name: "Bowser Claw Gauntlet",
    description: "A gauntlet mimicking Bowser's claws for slashing.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 35000,
    icon: '🦖',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Unarmed: 2d8 slashing + fire 1d6",
        "Grapple advantage",
        "Heats up in anger (+1 damage)"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Claw Crate',
    levelRequirement: 9
},

'peach_parasol': {
    id: 'peach_parasol',
    name: "Peach's Parasol",
    description: "A parasol for floating and shielding.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '☂️',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Float: Reduce fall speed to 10ft/round",
        "Shield: +1 AC when open",
        "Can glide 20ft horizontally"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Parasol Case',
    levelRequirement: 5
},

'luigi_poltergust': {
    id: 'luigi_poltergust',
    name: "Poltergust Replica",
    description: "A vacuum for sucking up ghosts and objects.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 28000,
    icon: '🌀',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Suck in ethereal creatures (WIS save DC 15)",
        "Store up to 3 ghosts, release as attack (3d6 force)",
        "Overheats after 5 uses"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Vacuum Box',
    levelRequirement: 6
},

'yoshi_saddle': {
    id: 'yoshi_saddle',
    name: "Yoshi Saddle",
    description: "A saddle for riding Yoshi with extra jumps.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15000,
    icon: '🦕',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Mount Yoshi: +10 speed, double jump height",
        "Yoshi tongue attack: Pull enemy 15ft",
        "Requires friendly Yoshi"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Saddle Bag',
    levelRequirement: 4
},

'waluigi_cap': {
    id: 'waluigi_cap',
    name: "Waluigi Cap",
    description: "A cap that enhances trickery and agility.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 10000,
    icon: '🧢',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "+2 to Deception and Acrobatics",
        "Once per day: Cheat death (reroll save)",
        "Wah! sound on activation"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Cap Box',
    levelRequirement: 3
},

'daisy_flower': {
    id: 'daisy_flower',
    name: "Daisy Flower Crown",
    description: "A crown that boosts strength and sportsmanship.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18000,
    icon: '🌼',
    stock: 3,
    rarity: 'rare',
    effects: [
        "+2 Strength, advantage on Athletics",
        "Once per short rest: Powerful strike (extra 1d8)",
        "Blooms in sunlight"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Flower Pot',
    levelRequirement: 5
},

'rosalina_wand': {
    id: 'rosalina_wand',
    name: "Rosalina's Wand",
    description: "A wand for cosmic spells and protection.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 50000,
    icon: '🌟',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Cast Shield (reaction, +5 AC)",
        "Summon Luma ally (CR 1, once per day)",
        "Glows in starlight"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Star Delivery',
    levelRequirement: 10
},

'toad_cap': {
    id: 'toad_cap',
    name: "Toad Cap",
    description: "A cap that grants minor healing and cheer.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4000,
    icon: '🍄',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Once per day: Heal 1d4 HP to self or ally",
        "+1 to Charisma checks",
        "Spots change color with mood"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Cap Box',
    levelRequirement: 1
},

'captain_toad_lamp': {
    id: 'captain_toad_lamp',
    name: "Captain Toad's Lamp",
    description: "A lamp that reveals hidden treasures.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 8000,
    icon: '🏮',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Shine: Detect hidden items within 30ft",
        "Once per day: Reveal secret door",
        "Attracts minor monsters"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Lamp Crate',
    levelRequirement: 3
},

' Pauline_mic': {
    id: 'pauline_mic',
    name: "Pauline's Microphone",
    description: "A mic that amplifies voice for commands or songs.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '🎤',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Amplify voice: Command spell (DC 14)",
        "Performance +3",
        "Echoes in large areas"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Sound Box',
    levelRequirement: 4
},

'dk_barrel': {
    id: 'dk_barrel',
    name: "DK Barrel",
    description: "A barrel that summons a gorilla ally.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 20000,
    icon: '🛢️',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Single Use: Summon DK (CR 3, punch 2d8)",
        "Ally for 1 minute",
        "Loves bananas"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Barrel Roll',
    levelRequirement: 5
},

'kirby_inhale_mask': {
    id: 'kirby_inhale_mask',
    name: "Kirby Inhale Mask",
    description: "A mask that lets you copy enemy abilities.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 60000,
    icon: '😷',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Inhale enemy: Copy 1 ability for 10 minutes (WIS save DC 16)",
        "Limited to CR 5 or lower",
        "User puffs up"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Puff Box',
    levelRequirement: 10
},

'link_master_sword': {
    id: 'link_master_sword',
    name: "Master Sword Replica",
    description: "A sword that banishes evil.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 100000,
    icon: '🗡️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "+3 longsword, extra 2d6 to fiends/undead",
        "Cast Banishment once per day",
        "Requires pure heart"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Sacred Sheath',
    levelRequirement: 15
},

'samus_arm_cannon': {
    id: 'samus_arm_cannon',
    name: "Arm Cannon Replica",
    description: "A cannon for energy blasts and missiles.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 45000,
    icon: '🔫',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Fire energy: 3d6 force, range 100ft",
        "Missile mode: 4d6 explosive (3 charges/day)",
        "Scan mode: Detect weaknesses"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Tech Crate',
    levelRequirement: 8
},

'fox_arwing_model': {
    id: 'fox_arwing_model',
    name: "Arwing Model",
    description: "A model that summons a fighter jet illusion.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 25000,
    icon: '✈️',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Summon illusion jet: Fly 60ft, laser 2d8",
        "Lasts 1 minute, fools enemies",
        "Once per day"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Model Kit',
    levelRequirement: 6
},

'pikachu_thunderstone': {
    id: 'pikachu_thunderstone',
    name: "Thunderstone",
    description: "A stone that evolves electric abilities.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 15000,
    icon: '⚡',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Single Use: Gain lightning bolt spell (3d10 lightning)",
        "Permanent +1 to lightning damage",
        "Shocks user on roll of 1"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Insulated Box',
    levelRequirement: 5
},

'sonic_rings': {
    id: 'sonic_rings',
    name: "Sonic Rings (Pack of 50)",
    description: "Rings that absorb damage and scatter on hit.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 10000,
    icon: '💍',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Absorb 50 damage before scattering",
        "Collect to regain (1d4 per minute)",
        "Speed +5ft while holding"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Ring Pouch',
    levelRequirement: 3
},

'megaman_buster': {
    id: 'megaman_buster',
    name: "Mega Buster",
    description: "An arm blaster for charged shots.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 30000,
    icon: '🤖',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Charge shot: 4d6 force (charge 1 turn)",
        "Rapid fire: 1d6 per shot (3 per action)",
        "Copy enemy weapon once per day"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Arm Case',
    levelRequirement: 7
},

'zelda_triforce_shard': {
    id: 'zelda_triforce_shard',
    name: "Triforce Shard",
    description: "A shard granting power, wisdom, or courage.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 75000,
    icon: '▲',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Choose: +2 STR, INT, or CHA permanently",
        "Once per week: Wish-like effect (limited)",
        "Attracts evil forces"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Sacred Relic',
    levelRequirement: 12
},

'pacman_power_pellet': {
    id: 'pacman_power_pellet',
    name: "Power Pellet",
    description: "A pellet that turns ghosts vulnerable.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 8000,
    icon: '🔴',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Single Use: Ethereal creatures vulnerable for 1 minute",
        "User gains speed +10ft",
        "Chomp attack: 2d6 force vs ghosts"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Pellet Jar',
    levelRequirement: 3
},

'crash_bandicoot_aku': {
    id: 'crash_bandicoot_aku',
    name: "Aku Aku Mask",
    description: "A mask that protects from one fatal blow.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '😷',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Absorb one death (revive at 1 HP)",
        "3 charges, recharges slowly",
        "Floats and advises"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Mask Crate',
    levelRequirement: 5
},

'rayman_fist': {
    id: 'rayman_fist',
    name: "Rayman Detached Fist",
    description: "A floating fist for ranged punches.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15000,
    icon: '👊',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Ranged attack: 1d10 bludgeoning, range 50ft",
        "Returns automatically",
        "Can grab small objects"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Fist Box',
    levelRequirement: 4
},

'spyro_dragonfire': {
    id: 'spyro_dragonfire',
    name: "Dragonfire Breath Potion",
    description: "A potion granting dragon breath.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 12000,
    icon: '🐉',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Single Use: Breathe fire (3d6 in 15ft cone)",
        "DEX save half",
        "User resistant to fire for 1 hour"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Flame Vial',
    levelRequirement: 4
},

'banjo_kazooie_egg': {
    id: 'banjo_kazooie_egg',
    name: "Kazooie Egg Shooter",
    description: "Shoots eggs as projectiles.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 18000,
    icon: '🥚',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Shoot egg: 1d8 bludgeoning, special types (fire, ice)",
        "5 eggs per short rest",
        "Can hatch helpers"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Egg Crate',
    levelRequirement: 5
},

'conker_acorn': {
    id: 'conker_acorn',
    name: "Conker Acorn Bomb",
    description: "An acorn that explodes on impact.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 5000,
    icon: '🌰',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Throw: 2d6 explosive in 5ft radius",
        "Single Use",
        "May grow tree instead (1% chance)"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Nut Bag',
    levelRequirement: 2
},

'earthworm_jim_suit': {
    id: 'earthworm_jim_suit',
    name: "Super Suit Replica",
    description: "A suit for super strength and whipping.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 40000,
    icon: '🦸',
    stock: 1,
    rarity: 'epic',
    effects: [
        "+4 Strength, whip attack 2d6 (reach 15ft)",
        "Fly short distances (30ft)",
        "Suit talks back"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Suit Case',
    levelRequirement: 8
},

'prince_of_persia_dagger': {
    id: 'prince_of_persia_dagger',
    name: "Dagger of Time",
    description: "A dagger that rewinds time briefly.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 80000,
    icon: '🗡️',
    stock: 1,
    rarity: 'godly',
    effects: [
        "Rewind 6 seconds (once per day)",
        "Stab: 1d4 piercing + time stop on target (1 round)",
        "Sands drain slowly"
    ],
    vendor: 'lunar_auction',
    shippedBy: 'Time Capsule',
    levelRequirement: 12
},

'tomb_raider_pistols': {
    id: 'tomb_raider_pistols',
    name: "Dual Pistols",
    description: "Pistols for acrobatic shooting.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 25000,
    icon: '🔫',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Dual wield: 1d8 piercing each, bonus action shot",
        "Advantage during flips/acrobatics",
        "Infinite ammo"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Holster Set',
    levelRequirement: 6
},

'assassins_creed_blade': {
    id: 'assassins_creed_blade',
    name: "Hidden Blade",
    description: "A blade for stealth assassinations.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15000,
    icon: '🗡️',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Surprise attack: 2d6 piercing + poison option",
        "Hidden, advantage on conceal",
        "Retractable"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Wrist Case',
    levelRequirement: 4
},

'god_of_war_leviathan': {
    id: 'god_of_war_leviathan',
    name: "Leviathan Axe Replica",
    description: "An axe that returns when thrown.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 50000,
    icon: '🪓',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Throw: 2d8 slashing, returns",
        "Freeze on hit (restrained, CON save)",
        "Godly durability"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Axe Crate',
    levelRequirement: 10
},

'witcher_silver_sword': {
    id: 'witcher_silver_sword',
    name: "Silver Sword",
    description: "A sword for slaying monsters.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 30000,
    icon: '🗡️',
    stock: 2,
    rarity: 'epic',
    effects: [
        "+2 vs monsters, extra 1d6 to aberrations",
        "Apply oils for bonuses (fire, poison)",
        "Mutagen slot"
    ],
    vendor: 'onyx_hand',
    shippedBy: 'Sword Sheath',
    levelRequirement: 7
},

'doom_slayer_chainsaw': {
    id: 'doom_slayer_chainsaw',
    name: "Chainsaw",
    description: "A chainsaw for ripping demons.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 40000,
    icon: '🪚',
    stock: 1,
    rarity: 'epic',
    effects: [
        "Melee: 3d6 slashing, glory kill (heal on kill)",
        "Fuel: 5 uses per day",
        "Loud and bloody"
    ],
    vendor: 'crypt_courier',
    shippedBy: 'Bloody Case',
    levelRequirement: 8
},

'halo_energy_sword': {
    id: 'halo_energy_sword',
    name: "Energy Sword",
    description: "A plasma sword for close combat.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 35000,
    icon: '⚔️',
    stock: 2,
    rarity: 'epic',
    effects: [
        "2d10 radiant, ignores armor below 15",
        "Lunge attack: +10 speed",
        "Battery: 10 swings"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Energy Cell',
    levelRequirement: 7
},

'overwatch_tracer_blink': {
    id: 'overwatch_tracer_blink',
    name: "Blink Device",
    description: "A device for short teleports.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 25000,
    icon: '⚡',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Teleport 15ft (3 charges per short rest)",
        "Recall: Return to position 6 seconds ago (once/day)",
        "Time distortion side effects"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Tech Device',
    levelRequirement: 6
},

'fortnite_build_kit': {
    id: 'fortnite_build_kit',
    name: "Build Kit",
    description: "A kit for instant fortifications.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 10000,
    icon: '🛠️',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Build wall/ramp (AC 15, HP 30) instantly",
        "10 materials per kit",
        "Harvest more from environment"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Tool Bag',
    levelRequirement: 3
},

'minecraft_diamond_pick': {
    id: 'minecraft_diamond_pick',
    name: "Diamond Pickaxe",
    description: "A pickaxe for mining rare ores.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '⛏️',
    stock: 4,
    rarity: 'rare',
    effects: [
        "+3 to mining checks, harvest double resources",
        "Break magical barriers",
        "Durable, never breaks"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Pick Case',
    levelRequirement: 5
},

'roblox_obby_boots': {
    id: 'roblox_obby_boots',
    name: "Obby Boots",
    description: "Boots for parkour and jumping puzzles.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 8000,
    icon: '👟',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Triple jump height, wall run 20ft",
        "Advantage on Acrobatics",
        "Pixelated trails"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Boot Box',
    levelRequirement: 3
},

'among_us_sabotage_kit': {
    id: 'among_us_sabotage_kit',
    name: "Sabotage Kit",
    description: "A kit for causing chaos and impostor tricks.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 15000,
    icon: '🛠️',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Sabotage: Disable lights/doors (1 minute)",
        "Vent travel: Short teleport",
        "Sus detection risk"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Suspicious Package',
    levelRequirement: 4
},

'genshin_impact_glider': {
    id: 'genshin_impact_glider',
    name: "Wind Glider",
    description: "A glider for soaring on winds.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '🪂',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Glide from heights, speed 40ft",
        "Elemental boost (wind currents +20ft)",
        "Folds compactly"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Glider Pack',
    levelRequirement: 4
},

'league_of_legends_potion': {
    id: 'league_of_legends_potion',
    name: "Health Potion",
    description: "A potion for quick healing in battle.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 500,
    icon: '🧪',
    stock: 20,
    rarity: 'common',
    effects: [
        "Heal 2d4+2 HP over 10 seconds",
        "Stackable up to 5",
        "Refills at base"
    ],
    vendor: 'toad_town_market',
    shippedBy: 'Potion Vial',
    levelRequirement: 1
},

'dota_2_tango': {
    id: 'dota_2_tango',
    name: "Tango",
    description: "Eats trees for healing.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 1000,
    icon: '🌿',
    stock: 15,
    rarity: 'common',
    effects: [
        "Consume tree: Heal 1d8 HP",
        "3 charges",
        "Angers druids"
    ],
    vendor: 'shamans_hut',
    shippedBy: 'Leaf Wrap',
    levelRequirement: 1
},

'world_of_warcraft_mount': {
    id: 'world_of_warcraft_mount',
    name: "Epic Mount Whistle",
    description: "Summons a fast mount.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 25000,
    icon: '🐎',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Summon mount (speed 60ft, fly option)",
        "Lasts until dismissed",
        "Requires attunement"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Whistle Chain',
    levelRequirement: 6
},

'runescape_rune_set': {
    id: 'runescape_rune_set',
    name: "Rune Set",
    description: "Runes for casting elemental spells.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 3000,
    icon: '🔮',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Cast fire/ice/earth bolt (1d10 damage)",
        "10 runes per set",
        "Craft more with mining"
    ],
    vendor: 'gilded_gryphon',
    shippedBy: 'Rune Pouch',
    levelRequirement: 2
},

'elder_scrolls_dragon_shout': {
    id: 'elder_scrolls_dragon_shout',
    name: "Dragon Shout Scroll",
    description: "A scroll teaching a shout.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 40000,
    icon: '📜',
    stock: 1,
    rarity: 'epic',
    effects: [
        "Learn Fus Ro Dah: Push enemies 30ft (3d6 force)",
        "Once per day",
        "Requires voice"
    ],
    vendor: 'comet_observatory',
    shippedBy: 'Ancient Scroll',
    levelRequirement: 8
},

'fallout_pipboy': {
    id: 'fallout_pipboy',
    name: "Pip-Boy Device",
    description: "A wrist device for mapping and radiation detection.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 20000,
    icon: '⌚',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Map area, detect poison/radiation",
        "V.A.T.S.: +2 to hit once per turn",
        "Battery lasts 1 week"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Tech Wristband',
    levelRequirement: 5
},

'cyberpunk_neural_link': {
    id: 'cyberpunk_neural_link',
    name: "Neural Link Implant",
    description: "An implant for hacking and enhancements.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 60000,
    icon: '🧠',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "+2 INT, hack devices (DC 15)",
        "Quickhack: Stun machine (once/day)",
        "Risk of cyberpsychosis"
    ],
    vendor: 'artificer_tower',
    shippedBy: 'Implant Surgery',
    levelRequirement: 10
},

'witcher_3_gwent_deck': {
    id: 'witcher_3_gwent_deck',
    name: "Gwent Deck",
    description: "A deck for playing strategic card games.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 5000,
    icon: '🃏',
    stock: 8,
    rarity: 'uncommon',
    effects: [
        "Play Gwent: Win gold or info (DM mini-game)",
        "Collect cards for bonuses",
        "Addictive"
    ],
    vendor: 'rogueport_black_market',
    shippedBy: 'Card Box',
    levelRequirement: 2
},

'red_dead_revolver': {
    id: 'red_dead_revolver',
    name: "Dead Eye Revolver",
    description: "A revolver with slow-motion aiming.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 25000,
    icon: '🔫',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Dead Eye: Advantage on attacks, mark targets",
        "6 shots, 2d6 piercing",
        "Reload as action"
    ],
    vendor: 'valley_trading_post',
    shippedBy: 'Holster',
    levelRequirement: 6
},

'grand_theft_auto_car': {
    id: 'grand_theft_auto_car',
    name: "Custom Car",
    description: "A fast car for getaways.",
    category: SHOP_CATEGORIES.FACTION,
    price: 50000,
    icon: '🚗',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Speed 100ft, carry 4 passengers",
        "Ram attack: 4d10 bludgeoning",
        "Faction bonus: escape +50"
    ],
    vendor: 'wario_direct',
    shippedBy: 'Garage Delivery',
    levelRequirement: 10,
    factionBonus: { mobility: 50 }
},
That's a fantastic list of potential vendors and factions! I will create 100 new items, ensuring I use a wide variety of categories, especially those less utilized before (`SERVICES`, `FACTION`, `PREMIUM`, `FORBIDDEN`), and feature vendors associated with the new factions you provided (like `Koopa Troop`, `Iron Legion`, `Mages' Guild`, `King of Tombs`, etc.).

Here are 100 new items in one large block:

```javascript
    // ============================================
    // === 100 NEW ITEMS (Varied Tiers & Factions) ===
    // ============================================

    'mordor_shadow_dust': {
        id: 'mordor_shadow_dust',
        name: "Mordor Shadow Dust",
        description: "Fine, volcanic grit gathered from Mount Doom. Excellent for dark rituals.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 45000,
        icon: '🌋',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Use as material component for Necromancy spells, doubling range",
            "Can be dusted on an opponent to grant Disadvantage on Perception checks for 1 hour",
            "Made by: Land Mordor"
        ],
        vendor: 'land_mordor_outpost',
        shippedBy: 'Volcanic Crate',
        levelRequirement: 7
    },
    'asgardian_mead_ration': {
        id: 'asgardian_mead_ration',
        name: "Asgardian Mead Ration",
        description: "A sturdy canteen of mead that grants temporary vigor and a penchant for boasts.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 4000,
        icon: '🍺',
        stock: 15,
        rarity: 'rare',
        effects: [
            "Heals 2d4 HP and grants +1 to Charisma (Intimidation) for 4 hours",
            "If you tell a boastful lie during this time, gain +1d4 temporary HP",
            "Made by: Asgard"
        ],
        vendor: 'asgard_embassy',
        shippedBy: 'Rune-etched Cask',
        levelRequirement: 3
    },
    'gondor_warden_shield': {
        id: 'gondor_warden_shield',
        name: "Gondor Warden Shield",
        description: "A sturdy, white-tree inscribed shield offering divine protection to its wielder and allies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 22000,
        icon: '🛡️',
        stock: 4,
        rarity: 'rare',
        effects: [
            "+2 AC when used as a shield",
            "Once per day: shield bash stuns target (DC 14 CON save)",
            "Emits faint white light (10ft radius)",
            "Made by: Kingdom Gondor"
        ],
        vendor: 'kingdom_gondor_hq',
        shippedBy: 'Escorted Delivery',
        levelRequirement: 5
    },
    'regal_empire_medallion': {
        id: 'regal_empire_medallion',
        name: "Regal Empire Medallion of Influence",
        description: "A heavy gold medallion granting automatic audience with minor nobles.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 18000,
        icon: '🥇',
        stock: 7,
        rarity: 'rare',
        effects: [
            "Advantage on Diplomacy checks concerning political matters",
        "Once per day: gain access to a restricted area (not guarded by high-level entities)",
            "Made by: Regal Empire"
        ],
        vendor: 'regal_empire_bank',
        shippedBy: 'Insured Courier',
        levelRequirement: 4
    },
    'troopa_scout_tracker': {
        id: 'troopa_scout_tracker',
        name: "Troopa Scout Tracker",
        description: "A small, sentient tracker that resembles a colored shell. Finds enemies on demand.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 6500,
        icon: '🐢',
        stock: 10,
        rarity: 'uncommon',
        effects: [
            "Send out: reveals location and CR of 1 random hostile creature within 1 mile",
            "Shell color determines tracking specialty (Red=Guardians, Green=Ambushers)",
            "Made by: Koopa Troop"
        ],
        vendor: 'koopa_troop_armory',
        shippedBy: 'Small Crate',
        levelRequirement: 2
    },
    'friendship_bracelet_equestrian': {
        id: 'friendship_bracelet_equestrian',
        name: "Friendship Bracelet of Trust",
        description: "A simple, braided bracelet that fosters immediate camaraderie.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🔗',
        stock: 20,
        rarity: 'uncommon',
        effects: [
            "Advantage on initial Persuasion checks toward civilized/pony races",
            "Cannot be surprised by an ally wearing a matching bracelet",
            "Made by: Equestrian"
        ],
        vendor: 'equestrian_market',
        shippedBy: 'Ribbon Pouch',
        levelRequirement: 1
    },
    'iron_legion_repair_kit': {
        id: 'iron_legion_repair_kit',
        name: "Iron Legion Emergency Repair Kit",
        description: "A self-assembling kit for immediate field repair of mechanical limbs or armor plating.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 12000,
        icon: '🔧',
        stock: 8,
        rarity: 'rare',
        effects: [
            "Immediately restore 4d6 HP to a construct or heavily armored ally",
            "Can repair one shattered limb/tool instantly",
            "Made by: Iron Legion"
        ],
        vendor: 'iron_legion_supply',
        shippedBy: 'Standardized Container',
        levelRequirement: 4
    },
    'formosan_silk_cloak': {
        id: 'formosan_silk_cloak',
        name: "Formosan Silk Cloak",
        description: "Feather-light cloak woven with bioluminescent threads.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 17000,
        icon: '🧣',
        stock: 6,
        rarity: 'rare',
        effects: [
            "Grants advantage on Stealth checks in dimly lit or dark areas",
            "Cloak is completely silent when moving",
            "Made by: Formosa Ultima"
        ],
        vendor: 'formosan_embassy',
        shippedBy: 'Vacuum Sealed',
        levelRequirement: 4
    },
    'skycavern_anti_gravity_gel': {
        id: 'skycavern_anti_gravity_gel',
        name: "Skycavern Anti-Gravity Gel",
        description: "A sticky, shimmering gel that temporarily negates a small area's gravitational pull.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 14000,
        icon: '💧',
        stock: 7,
        rarity: 'rare',
        effects: [
            "Throw: creates a 10ft sphere where gravity is halved for 3 rounds",
        "Objects float upwards slowly",
            "Made by: Skycaverns"
        ],
        vendor: 'skycavern_trader',
        shippedBy: 'Suspended Vial',
        levelRequirement: 5
    },
    'glarnian_rhetoric_tome': {
        id: 'glarnian_rhetoric_tome',
        name: "Glarnian Rhetoric Tome",
        description: "A book filled with beautiful, misleading prose. Master it to twist meanings.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 19000,
        icon: '📖',
        stock: 3,
        rarity: 'epic',
        effects: [
            "Study for 1 week: permanently gain +1 to Charisma (Deception)",
            "Learn the 'Glarnian Pivot' verbal trick",
            "Made by: Glarnia"
        ],
        vendor: 'glarnia_lecture_hall',
        shippedBy: 'Heavy Textbook',
        levelRequirement: 6
    },
    'polybius_memory_chip': {
        id: 'polybius_memory_chip',
        name: "Polybius Memory Chip",
        description: "A silicon chip that stores complex mathematical sequences and battle plans.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 11000,
        icon: '💾',
        stock: 12,
        rarity: 'rare',
        effects: [
            "Allows instant recall of 1 complex skill proficiency (e.g., siege engineering)",
        "Chip must be physically inserted (temporary debuff to Wisdom)",
            "Made by: Polybius"
        ],
        vendor: 'polybius_data_hub',
        shippedBy: 'Data Transfer',
        levelRequirement: 4
    },
    'internet_firewall_patch': {
        id: 'internet_firewall_patch',
        name: "Internet Firewall Patch (Digital)",
        description: "A unique digital signature that makes you invisible to automated tracking programs.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '💻',
        stock: 25,
        rarity: 'rare',
        effects: [
            "Immune to digital surveillance and automated detection",
        "Requires 1 hour to install (requires interface device)",
            "Made by: Internet"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Encrypted Download',
        levelRequirement: 3
    },
    'pokeball_master_edition': {
        id: 'pokeball_master_edition',
        name: "Master Pokéball",
        description: "The ultimate capture device. Captures any non-legendary creature instantly.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 150000,
        icon: '🟣',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Capture any non-legendary creature (CR 15 or lower) on contact",
        "Creature is instantly subdued and bound",
            "Cannot be used on sapient humanoids",
            "Made by: Pokémon League"
        ],
        vendor: 'pokemon_league_store',
        shippedBy: 'Unmarked Carrier',
        levelRequirement: 10
    },
    'xenonesian_bioship_seed': {
        id: 'xenonesian_bioship_seed',
        name: "Xenonesian Bioship Seed",
        description: "A dormant, living seed capable of growing into a small, organic scout vessel.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 110000,
        icon: '🌱',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grows into a Scout Ship (AC 15, HP 75, Fly 80ft) in 48 hours",
            "Ship runs on absorbed solar energy",
            "Requires regular feeding of organic matter",
            "Made by: Xenonesia"
        ],
        vendor: 'xenonesian_ambassador',
        shippedBy: 'Cryo-Container',
        levelRequirement: 10
    },
    'regency_loyalty_pact': {
        id: 'regency_loyalty_pact',
        name: "Mushroom Regency Loyalty Pact",
        description: "A contract binding minor Mycological nobles to your service for life.",
        category: SHOP_CATEGORIES: 'faction',
        price: 28000,
        icon: '🍄',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Gain 1d4 allied Mushroom Servants (CR 1/4) per week",
            "Loyalty guaranteed unless payment (spores) fails",
            "Made by: Mushroom Regency"
        ],
        vendor: 'regency_council',
        shippedBy: 'Spore Contract',
        levelRequirement: 5,
        factionBonus: { spies: 20 }
    },
    'geminian_language_translator': {
        id: 'geminian_language_translator',
        name: "Geminian Universal Translator",
        description: "A small, humming device that perfectly translates all spoken languages in a 30ft radius.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 42000,
        icon: '🗣️',
        stock: 3,
        rarity: 'epic',
        effects: [
            "Perfect, real-time translation of all known languages",
            "Allows communication with strange entities (DM discretion)",
            "Made by: Geminia"
        ],
        vendor: 'geminia_tech',
        shippedBy: 'Sonic Dampened Box',
        levelRequirement: 8
    },
    'cosmic_scribe_service': {
        id: 'cosmic_scribe_service',
        name: "Cosmic Scribe Service",
        description: "A Servant of the Cosmos records your deeds for historical documentation across the planes.",
        category: SHOP_CATEGORIES: 'services',
        price: 15000,
        icon: '✍️',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Scribe documents your actions for posterity",
        "Records grant +2 to future Reputation checks with cosmic entities",
            "Made by: Servants Cosmic"
        ],
        vendor: 'cosmic_archives',
        shippedBy: 'Personal Note',
        levelRequirement: 4
    },
    'asclepian_healing_vial': {
        id: 'asclepian_healing_vial',
        name: "Asclepian Healing Vial",
        description: "A potent, shimmering mixture that rapidly repairs fractured bone and torn muscle.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 25000,
        icon: '⚕️',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Heals 8d4+8 HP and instantly ends one disease or poison effect",
        "Must be administered within 1 minute of injury",
            "Made by: Asclepia"
        ],
        vendor: 'asclepia_vault',
        shippedBy: 'Sealed Glass',
        levelRequirement: 7
    },
    'pony_nobility_pardon': {
        id: 'pony_nobility_pardon',
        name: "Pony Nobility Pardon",
        description: "An official writ forgiving one major crime committed within Pony lands.",
        category: SHOP_CATEGORIES: 'services',
        price: 35000,
        icon: '📜',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Forgives one crime (non-genocide/deicide)",
        "Restores 1-rank reputation within Pony Nobility sphere",
            "Takes 1 week to process",
            "Made by: Pony Nobility"
        ],
        vendor: 'pony_royal_court',
        shippedBy: 'Sealed Wax',
        levelRequirement: 9
    },
    'king_of_tombs_guide': {
        id: 'king_of_tombs_guide',
        name: "King of Tombs Hidden Map",
        description: "A map showing safe routes through the volatile Catacombs.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 60000,
        icon: '🗺️',
        stock: 4,
        rarity: 'legendary',
        effects: [
            "Grants safe passage through 3 hostile areas (DM chooses)",
        "Detects all traps related to undead within 60ft",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Papyrus Scroll',
        levelRequirement: 10
    },
    'lemurian_water_purifier': {
        id: 'lemurian_water_purifier',
        name: "Lemurian Water Purifier (Permanent)",
        description: "A fountain that draws upon Lemurian magic to purify any water source it touches.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 45000,
        icon: '⛲',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Purifies 100 gallons of water per hour (removes all toxins/curses)",
        "Water tastes subtly like mint",
            "Made by: Lemuria Conclave"
        ],
        vendor: 'lemuria_outpost',
        shippedBy: 'Stone Delivery',
        levelRequirement: 7
    },
    'empire_man_diplomatic_passport': {
        id: 'empire_man_diplomatic_passport',
        name: "Empire Man Diplomatic Passport",
        description: "A document granting diplomatic immunity in Empire Man controlled territories.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 75000,
        icon: '🛂',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Immune to arrest/detainment in Empire Man lands",
        "Can requisition local guards for protection (up to 5)",
            "Made by: Empire Man"
        ],
        vendor: 'empire_man_chancery',
        shippedBy: 'Official Seal',
        levelRequirement: 10
    },
    'grand_cathay_silk_armor': {
        id: 'grand_cathay_silk_armor',
        name: "Grand Cathay 'Cloud-Step' Armor",
        description: "Armor woven from enchanted spider silk, surprisingly resilient and light.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 32000,
        icon: '🕸️',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Functions as Medium Armor (AC 16, requires no proficiency)",
        "Grants advantage on checks to avoid being knocked prone",
            "Made by: Grand Cathay"
        ],
        vendor: 'cathay_trade_route',
        shippedBy: 'Woven Box',
        levelRequirement: 7
    },
    'mu_empire_levitation_orb': {
        id: 'mu_empire_levitation_orb',
        name: "Mu Empire Levitation Orb",
        description: "A polished obsidian orb that creates a temporary personal anti-gravity field.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 28000,
        icon: '⚫',
        stock: 6,
        rarity: 'rare',
        effects: [
            "Activate to hover 5ft off the ground for 1 hour",
        "Movement speed halved while hovering",
            "Made by: Mu Empire"
        ],
        vendor: 'mu_outpost',
        shippedBy: 'Floating Delivery',
        levelRequirement: 5
    },
    'mages_guild_scrying_fee': {
        id: 'mages_guild_scrying_fee',
        name: "Mages' Guild Scrying Fee (Local)",
        description: "Pay the Guild to scry on a target within 10 miles.",
        category: SHOP_CATEGORIES: 'services',
        price: 1500,
        icon: '👁️',
        stock: 999,
        rarity: 'uncommon',
        effects: [
            "View target for 1 minute (visual only)",
        "Success rate 85% against passive detection",
            "Made by: Mages' Guild"
        ],
        vendor: 'mages_guild_hall',
        shippedBy: 'Magical Transmission',
        levelRequirement: 2
    },
    'data_merchant_encrypted_drive': {
        id: 'data_merchant_encrypted_drive',
        name: "Data Merchant Encrypted Drive",
        description: "A small drive containing sensitive financial data or military secrets.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 22000,
        icon: '💿',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Grants +5,000 gp in liquid, untraceable assets",
        "Drive self-destructs if opened by wrong signature",
            "Made by: Data Merchant"
        ],
        vendor: 'data_merchant_node',
        shippedBy: 'Digital Drop',
        levelRequirement: 6
    },
    'changeling_molt_cloak': {
        id: 'changeling_molt_cloak',
        name: "Changeling Molt Cloak",
        description: "A cloak made from shed skin, allowing the wearer to perfectly mimic the texture and scent of another.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 55000,
        icon: '🦎',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Allows perfect mimicry of a single humanoid's scent, texture, and superficial appearance",
        "Requires 1 hour to attune to a new target",
            "Made by: Changeling Hive"
        ],
        vendor: 'changeling_hive_exchange',
        shippedBy: 'Live Specimen',
        levelRequirement: 8
    },
    'cybernetic_optic_scanner': {
        id: 'cybernetic_optic_scanner',
        name: "Cybernetic Optic Scanner",
        description: "A replacement eye that sees thermal signatures, energy fields, and microscopic flaws.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 70000,
        icon: '👁️',
        stock: 3,
        rarity: 'epic',
        effects: [
            "Grants True Sight up to 30ft (ignores illusions)",
        "Detects structural weaknesses in objects (Advantage on breaking attempts)",
            "Made by: Cybernetic"
        ],
        vendor: 'cybernetic_corp',
        shippedBy: 'Surgical Implant',
        levelRequirement: 9
    },
    'onyx_hand_spy_poison': {
        id: 'onyx_hand_spy_poison',
        name: "Onyx Hand Sleep Toxin",
        description: "A slow-acting poison that mimics natural sleep, used by high-level assassins.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 21000,
        icon: '💉',
        stock: 6,
        rarity: 'rare',
        effects: [
            "Applied to weapon: Target must make DC 16 CON save or fall into deep sleep for 1d4 x 10 minutes",
        "No visible side effects",
            "Made by: The Onyx Hand"
        ],
        vendor: 'onyx_hand',
        shippedBy: 'Syringe Case',
        levelRequirement: 6
    },
    'dwarven_forge_access': {
        id: 'dwarven_forge_access',
        name: "Dwarven Master Forge Access (7 Days)",
        description: "Temporary access to a sacred Dwarven forge capable of working rare metals.",
        category: SHOP_CATEGORIES: 'services',
        price: 55000,
        icon: '🔥',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Allows crafting with rare metals (Adamantine, Mithril, etc.)",
        "Item crafted gains +1 durability bonus",
            "Made by: Kingdoms Dwarves"
        ],
        vendor: 'dwarf_elder',
        shippedBy: 'Escorted Entry',
        levelRequirement: 8
    },
    'jotun_ice_shard': {
        id: 'jotun_ice_shard',
        name: "Jotun Ice Shard",
        description: "A chunk of primordial ice that never melts and emits intense cold.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 31000,
        icon: '❄️',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Can be used as a weapon (2d6 Cold damage, reach 5ft)",
        "Immunity to environmental cold",
            "Made by: Jotunheimr"
        ],
        vendor: 'jotunheimr_outpost',
        shippedBy: 'Insulated Pack',
        levelRequirement: 6
    },
    'greenskin_war_banner': {
        id: 'greenskin_war_banner',
        name: "Greenskin War Banner (Waaagh Boost)",
        description: "A crude but magically charged banner that boosts the morale of savage kin.",
        category: SHOP_CATEGORIES: 'faction',
        price: 12000,
        icon: '🚩',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Allied Greenskin/Goblinoid allies gain +1 to attack rolls while within 60ft",
        "Must be carried by a creature with 10+ STR",
            "Made by: Greenskins"
        ],
        vendor: 'greenskin_warboss',
        shippedBy: 'Crude Pole',
        levelRequirement: 3,
        factionBonus: { morale: 25 }
    },
    'high_elf_truth_tea': {
        id: 'high_elf_truth_tea',
        name: "High Elf Truth Tea",
        description: "Delicate tea brewed under starlight, forcing honesty in the imbiber.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 24000,
        icon: '🍵',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Target must succeed on DC 17 WIS save or answer the next 3 questions truthfully",
        "Tea is extremely bitter",
            "Made by: High Elves"
        ],
        vendor: 'high_elf_enclave',
        shippedBy: 'Fine Porcelain',
        levelRequirement: 7
    },
    'dark_elf_shadow_ink': {
        id: 'dark_elf_shadow_ink',
        name: "Dark Elf Shadow Ink",
        description: "Ink made from trapped shadowstuff; use it to write contracts that bind the soul.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 60000,
        icon: '⚫',
        stock: 4,
        rarity: 'legendary',
        effects: [
            "Any document signed in this ink is magically binding (DC 18)",
        "If used to write a promise, breaking it inflicts 4d10 Necrotic damage",
            "Made by: Dark Elves"
        ],
        vendor: 'dark_elf_vault',
        shippedBy: 'Lead Tube',
        levelRequirement: 10
    },
    'trainer_guild_badge': {
        id: 'trainer_guild_badge',
        name: "Trainer Guild Badge (Rank 3)",
        description: "A badge signifying mastery in creature handling and non-lethal combat.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 14000,
        icon: '🏅',
        stock: 10,
        rarity: 'rare',
        effects: [
            "+2 to Animal Handling checks",
        "Can pacify hostile beasts (DC 14 check)",
            "Made by: Trainer Guild"
        ],
        vendor: 'trainer_guild_chapter',
        shippedBy: 'Velvet Case',
        levelRequirement: 4
    },
    'crimision_isle_pearl': {
        id: 'crimision_isle_pearl',
        name: "Crimision Isle Siren Pearl",
        description: "A glowing pearl humming with oceanic magic.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 29000,
        icon: '⚪',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Can cast Water Breathing on self and 3 others (1/day)",
        "Grants resistance to Thunder damage",
            "Made by: Crimision Isle"
        ],
        vendor: 'crimision_dock',
        shippedBy: 'Water-filled Box',
        levelRequirement: 7
    },
    'blessed_order_suncrystal': {
        id: 'blessed_order_suncrystal',
        name: "Blessed Order Suncrystal",
        description: "A focusing crystal that channels raw divine light.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 48000,
        icon: '☀️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Spells dealing Radiant damage gain +1d6 damage",
        "Once per day, emit a flash that blinds Undead/Fiends (DC 15 CON save)",
            "Made by: Blessed Order"
        ],
        vendor: 'blessed_order_sanctum',
        shippedBy: 'Silver Casket',
        levelRequirement: 9
    },
    'sirsirian_ocean_map': {
        id: 'sirsirian_ocean_map',
        name: "Sirsirian Ocean Chart (Secret Routes)",
        description: "A map showing hidden currents and temporary landmasses in the uncharted seas.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 18000,
        icon: '🌊',
        stock: 7,
        rarity: 'rare',
        effects: [
            "Grants immunity to getting lost at sea",
        "Allows navigation through magical storms",
            "Made by: Sirisirian Ocean"
        ],
        vendor: 'sirsirian_navigator',
        shippedBy: 'Oilskin Roll',
        levelRequirement: 4
    },
    'ratchet_raiders_scrap_armor': {
        id: 'ratchet_raiders_scrap_armor',
        name: "Ratchet Raiders Scrap Armor",
        description: "Layered, jury-rigged armor offering strange protection.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 7000,
        icon: '⚙️',
        stock: 15,
        rarity: 'uncommon',
        effects: [
            "AC 15 (Light Armor equivalent)",
        "Advantage on saving throws vs. electricity/shock damage",
            "Looks horrific; disadvantage on social checks with non-raiders",
            "Made by: Ratchet Raiders"
        ],
        vendor: 'ratchet_raiders_cache',
        shippedBy: 'Duct-Taped Box',
        levelRequirement: 2
    },
    'wario_land_coin_magnet': {
        id: 'wario_land_coin_magnet',
        name: "Wario Land Coin Magnet",
        description: "A crude device that pulls nearby coins toward the user.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 9000,
        icon: '🧲',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Automatically collects loose coins within 15ft",
        "Does not work on sentient currency or treasures",
            "Made by: Wario Land"
        ],
        vendor: 'wario_land_shop',
        shippedBy: 'Yellow Crate',
        levelRequirement: 3
    },
    'millennium_drive_coil': {
        id: 'millennium_drive_coil',
        name: "Millennium Drive Coil",
        description: "A high-energy component needed to power temporal displacement machinery.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 60000,
        icon: '⚡',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Required component for time travel experiments",
        "If used as a weapon: 6d6 Force Damage (single use)",
            "Made by: Millennium"
        ],
        vendor: 'millennium_nexus',
        shippedBy: 'Lead Lined Box',
        levelRequirement: 8
    },
    'apis_regal_pollen': {
        id: 'apis_regal_pollen',
        name: "Apis Kingdom Regal Pollen",
        description: "Golden, energizing pollen collected from the Royal Hive.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 18000,
        icon: '🌼',
        stock: 7,
        rarity: 'rare',
        effects: [
            "Drink: Gain one additional Action on your next turn",
        "Pollen is highly allergenic to non-Apis races",
            "Made by: Apis Kingdom"
        ],
        vendor: 'apis_hive_exchange',
        shippedBy: 'Golden Jar',
        levelRequirement: 5
    },
    'lizardmen_totem_fragment': {
        id: 'lizardmen_totem_fragment',
        name: "Lizardmen Totem Fragment (Coil)",
        description: "A carved piece of serpentine jade that wards off cold-blooded enemies.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 13000,
        icon: '🦎',
        stock: 9,
        rarity: 'rare',
        effects: [
            "Grants resistance to Cold damage",
        "Advantage on saving throws vs. mind control from reptiles/serpents",
            "Made by: Lizardmen"
        ],
        vendor: 'lizardmen_swamp_post',
        shippedBy: 'Muddy Pouch',
        levelRequirement: 3
    },
    'trinity_general_security_license': {
        id: 'trinity_general_security_license',
        name: "Trinity General Security License",
        description: "A license allowing you to hire Trinity mercenaries for protection.",
        category: SHOP_CATEGORIES: 'services',
        price: 50000,
        icon: '🛡️',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Hire 1 squad of 4 elite guards for 7 days (no extra cost)",
        "Guards are highly professional and immune to bribery",
            "Made by: Trinity General"
        ],
        vendor: 'trinity_general_bank',
        shippedBy: 'Official Seal',
        levelRequirement: 8
    },
    'pitatia_sonic_grenade': {
        id: 'pitatia_sonic_grenade',
        name: "Pitatia Sonic Grenade",
        description: "A small device that releases a non-lethal burst of focused sound waves.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 9500,
        icon: '🔊',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Throw (30ft): forces all within 10ft to make DC 14 CON save or be deafened for 1 minute",
        "No physical damage",
            "Made by: Pitatia"
        ],
        vendor: 'pitatia_tech',
        shippedBy: 'Metal Canister',
        levelRequirement: 4
    },
    'crimson_fleet_smuggling_pass': {
        id: 'crimson_fleet_smuggling_pass',
        name: "Crimson Fleet Smuggling Pass",
        description: "A secret token granting passage past the notorious Crimson Fleet blockade.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 60000,
        icon: '🏴‍☠️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Allows safe passage through one major naval blockade (once)",
        "Ship requires an additional bribe of 5,000 gp",
            "Made by: Crimson Fleet"
        ],
        vendor: 'crimson_fleet_fence',
        shippedBy: 'Secret Handshake',
        levelRequirement: 10
    },
    'scylla_charybdis_tracker': {
        id: 'scylla_charybdis_tracker',
        name: "Scylla/Charybdis Proximity Charm",
        description: "A charm that vibrates violently when dangerous whirlpools or sea beasts are near.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 15000,
        icon: '🔱',
        stock: 8,
        rarity: 'rare',
        effects: [
            "Warns user of dangerous currents or sea monsters (100ft range)",
        "Advantage on water-based navigation checks",
            "Made by: Scylla Charybdis"
        ],
        vendor: 'oceanic_trader',
        shippedBy: 'Sealed Shell',
        levelRequirement: 4
    },
    'minerva_wisdom_elixir': {
        id: 'minerva_wisdom_elixir',
        name: "Minerva Wisdom Elixir",
        description: "A clear liquid that temporarily enhances analytical and strategic thinking.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 32000,
        icon: '🦉',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Gain +4 to Intelligence score for 1 hour",
        "Gain expertise (double proficiency) in one Intelligence skill",
            "Made by: Minerva"
        ],
        vendor: 'minerva_academy',
        shippedBy: 'Crystal Dropper',
        levelRequirement: 8
    },
    'animatopia_prey_whistle': {
        id: 'animatopia_prey_whistle',
        name: "Animatopia Prey Whistle",
        description: "A whistle that mimics the distress call of common forest prey, attracting large predators.",
        category: SHOP_CATEGORIES: 'curiosities',
        price: 8000,
        icon: '🐾',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Attracts 1d4 hungry apex predators (CR 3-5) to your location in 1d4 rounds",
        "Useful for distraction or controlled combat encounters",
            "Made by: Animatopia Prey (Farming)"
        ],
        vendor: 'animatopia_hunter',
        shippedBy: 'Bone Whistle',
        levelRequirement: 3
    },
    'eiwass_star_charts': {
        id: 'eiwass_star_charts',
        name: "Eiwass Navigational Star Charts",
        description: "Charts detailing safe, low-magic routes between planes.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 95000,
        icon: '🔭',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Grants advantage on all checks made while planar traveling via standard methods",
        "Reduces travel time between planes by 25%",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Celestial Map',
        levelRequirement: 12
    },
    'oracula_prophecy_reading': {
        id: 'oracula_prophecy_reading',
        name: "Oracula Prophecy Reading (Minor)",
        description: "A short, vague reading detailing one potential danger in the next week.",
        category: SHOP_CATEGORIES: 'services',
        price: 12000,
        icon: '🔮',
        stock: 15,
        rarity: 'rare',
        effects: [
            "Receive one true, if cryptic, prediction about the near future",
        "Reading is performed by a low-ranking Oracular priest",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Smoke & Incense',
        levelRequirement: 5
    },
    'halfling_stowaway_contract': {
        id: 'halfling_stowaway_contract',
        name: "Halfling Stowaway Contract",
        description: "Hire a small, discreet Halfling to hide on your person/vehicle for transport.",
        category: SHOP_CATEGORIES: 'services',
        price: 1500,
        icon: '🥧',
        stock: 30,
        rarity: 'uncommon',
        effects: [
            "Halfling hides perfectly (advantage on related checks)",
        "Provides +1 bonus to foraging checks",
            "Must provide 1 meal per day"
        ],
        vendor: 'halfling_community',
        shippedBy: 'Small Sack',
        levelRequirement: 1
    },
    'refijian_disguise_kit': {
        id: 'refijian_disguise_kit',
        name: "Refijian Disguise Kit",
        description: "A theatrical kit utilizing advanced makeup and subtle illusion techniques.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 10500,
        icon: '🎭',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Grants advantage on Disguise checks",
        "Can completely change appearance for 8 hours",
            "Made by: Refijia"
        ],
        vendor: 'refijian_tailor',
        shippedBy: 'Wardrobe Box',
        levelRequirement: 3
    },
    'shanhaijing_jade_charm': {
        id: 'shanhaijing_jade_charm',
        name: "Shanhaijing Guardian Charm",
        description: "A carved jade charm said to ward off spirits from the Far East bestiary.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 28000,
        icon: '🐉',
        stock: 6,
        rarity: 'epic',
        effects: [
            "Resistance to Psychic damage caused by spirits or beasts",
        "Advantage on saves against being frightened by mythical beasts",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Silk Pouch',
        levelRequirement: 6
    },
    'u_singularity_battery': {
        id: 'u_singularity_battery',
        name: "U Singularity Battery (Micro)",
        description: "A contained pocket of zero-point energy. Provides massive, short-lived power.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 115000,
        icon: '⚛️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Can power any single magical device indefinitely",
        "If overloaded: releases 10d10 Force damage in a sphere (single use)",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Anti-Gravity Field',
        levelRequirement: 11
    },
    'zebrabwe_weather_vane': {
        id: 'zebrabwe_weather_vane',
        name: "Zebrabwe Weather Vane",
        description: "A magically attuned vane that predicts meteorological hazards.",
        category: SHOP_CATEGORIES: 'curiosities',
        price: 16000,
        icon: '📡',
        stock: 7,
        rarity: 'rare',
        effects: [
            "Predicts severe weather (magical or mundane) 24 hours in advance",
        "Can temporarily divert light rain/wind away from a camp",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Wooden Post',
        levelRequirement: 4
    },
    'robensonian_bio_suit': {
        id: 'robensonian_bio_suit',
        name: "Robensonian Bio-Suit (Atmospheric)",
        description: "A light, flexible suit protecting against noxious gases and mild poisons.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 34000,
        icon: '🧪',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Immunity to environmental non-magical gas/poison damage",
        "Advantage on saves vs. inhaled toxins",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Sealed Box',
        levelRequirement: 7
    },
    'tomb_kings_scroll_of_command': {
        id: 'tomb_kings_scroll_of_command',
        name: "Tomb Kings Scroll of Command (Low Tier)",
        description: "A brittle scroll that issues a simple command to low-level undead.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 18000,
        icon: '📜',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Command 1d6 Skeletons/Zombies to obey for 1 hour",
        "Scroll is consumed upon use",
            "Made by: Tomb Kings"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Sepulcher Case',
        levelRequirement: 5
    },
    'gehenna_academy_liturgy': {
        id: 'gehenna_academy_liturgy',
        name: "Gehenna Academy Liturgy (Infernal)",
        description: "A book containing minor rituals for summoning low-level infernal entities.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 26000,
        icon: '🔥',
        stock: 6,
        rarity: 'rare',
        effects: [
            "Summon 1 Imp or Hell Hound (CR 1/2) once per day",
        "Entities must obey non-self-destructive orders for 1 hour",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Bound in skin',
        levelRequirement: 5
    },
    'red_winter_survival_pack': {
        id: 'red_winter_survival_pack',
        name: "Red Winter Survival Pack",
        description: "Insulated gear and heating stones to survive sub-zero conditions.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 9000,
        icon: '🥶',
        stock: 10,
        rarity: 'uncommon',
        effects: [
            "Grants full immunity to cold environmental effects",
        "Heating stones last 48 hours",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Heavy Canvas Bag',
        levelRequirement: 2
    },
    'dwarf_realms_mithril_ingot': {
        id: 'dwarf_realms_mithril_ingot',
        name: "Dwarf Realms Mithril Ingot",
        description: "One ingot of purified Mithril ore, highly prized for crafting.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 80000,
        icon: '⛏️',
        stock: 5,
        rarity: 'legendary',
        effects: [
            "Can be forged into an item that weighs 1/2 its normal weight",
        "Adds +1 AC if used for armor, or +1 to critical range if used for weapon",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Ironbound Delivery',
        levelRequirement: 10
    },
    'custodian_repair_drone': {
        id: 'custodian_repair_drone',
        name: "Custodian Repair Drone (Mk II)",
        description: "A small, silent drone that automatically fixes minor structural damage.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 18000,
        icon: '🤖',
        stock: 6,
        rarity: 'rare',
        effects: [
            "Drone silently repairs minor damage (up to 5 HP/hour) to structures/objects",
        "Drone has 3 HP and must be recharged (electricity)",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Sealed Canister',
        levelRequirement: 4
    },
    'dk_crew_bananagun': {
        id: 'dk_crew_bananagun',
        name: "DK Crew Banana Gun",
        description: "Fires hardened, sticky banana peels with surprising accuracy.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 10000,
        icon: '🍌',
        stock: 15,
        rarity: 'rare',
        effects: [
            "Fires a peel (30ft range). Target must make DC 14 DEX save or fall prone",
        "Infinite ammo (requires 1 small piece of fruit per shot)",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Fruit Crate',
        levelRequirement: 3
    },
    'spark_rebellion_sabotage_charges': {
        id: 'spark_rebellion_sabotage_charges',
        name: "Spark Rebellion Sabotage Charges",
        description: "High-yield explosives designed to shut down automated systems.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 9500,
        icon: '⚡',
        stock: 12,
        rarity: 'rare',
        effects: [
            "Attach to machine/construct: forces DC 15 CON save or disabled for 1d4 rounds",
        "Deals 3d6 lightning damage to targets immune to stun",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Insulated Bag',
        levelRequirement: 3
    },
    'sultanates_araby_sand_shroud': {
        id: 'sultanates_araby_sand_shroud',
        name: "Sultanates of Araby Sand Shroud",
        description: "A head-to-toe wrap that filters sand and heat.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 5000,
        icon: '🏜️',
        stock: 18,
        rarity: 'uncommon',
        effects: [
            "Grants advantage on Constitution saves vs. extreme heat and exhaustion from sandstorms",
        "Scent is masked by faint desert spices",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_traders_post',
        shippedBy: 'Rolled Cloth',
        levelRequirement: 2
    },
    'animatopia_trap_net': {
        id: 'animatopia_trap_net',
        name: "Animatopia Hunting Net",
        description: "A super-strong net woven from synthetic animal sinew.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 7500,
        icon: '🕸️',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Used as an action: attempt to restrain a target up to Huge size (DC 14 Athletics/Acrobatics to escape)",
        "Tears on 5ft of piercing damage",
            "Made by: Animatopia Prey"
        ],
        vendor: 'animatopia_hunter',
        shippedBy: 'Woven Bundle',
        levelRequirement: 2
    },
    'eiwass_planar_key_charm': {
        id: 'eiwass_planar_key_charm',
        name: "Eiwass Planar Key Charm (Minor)",
        description: "A tuning fork that hums when a portal or dimensional rift is nearby.",
        category: SHOP_CATEGORIES: 'curiosities',
        price: 19000,
        icon: '🔑',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Vibrates strongly within 60ft of an active portal",
        "Allows user to sense the plane of origin/destination",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Brass Casing',
        levelRequirement: 6
    },
    'oracula_truth_serum': {
        id: 'oracula_truth_serum',
        name: "Oracula Truth Serum (Potent)",
        description: "A rare liquid that forces complete, unedited verbal honesty.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 85000,
        icon: '🧪',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Target must succeed on DC 19 WIS save or reveal all known information about a subject",
        "Truth remains revealed even after effect wears off",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Crystal Decanter',
        levelRequirement: 12
    },
    'halfling_seed_bank': {
        id: 'halfling_seed_bank',
        name: "Halfling Seed Bank (Rare Crops)",
        description: "A collection of seeds for crops that thrive magically and restore massive energy.",
        category: SHOP_CATEGORIES: 'faction',
        price: 30000,
        icon: '🌱',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Planting yields food that restores 4d8+4 HP (requires 1 week)",
        "Can feed a small army for a month",
            "Made by: Halfling"
        ],
        vendor: 'halfling_community',
        shippedBy: 'Earthen Jar',
        levelRequirement: 6,
        factionBonus: { economy: 15 }
    },
    'refijian_illusion_gem': {
        id: 'refijian_illusion_gem',
        name: "Refijian Illusion Gem",
        description: "A smooth stone that refracts light to create minor, believable illusions.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 17000,
        icon: '💎',
        stock: 8,
        rarity: 'rare',
        effects: [
            "Cast Minor Illusion at will",
        "Can perfectly mimic the sound of a single small object (e.g., a key turning)",
            "Made by: Refijia"
        ],
        vendor: 'refijian_tailor',
        shippedBy: 'Polished Box',
        levelRequirement: 4
    },
    'shanhaijing_spirit_compass': {
        id: 'shanhaijing_spirit_compass',
        name: "Shanhaijing Spirit Compass",
        description: "A dial that points toward the nearest location where the spiritual veil is thin.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 52000,
        icon: '🧭',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Points towards areas of high supernatural energy or planar overlap",
        "Grants advantage on saves vs. spiritual possession",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Lacquer Box',
        levelRequirement: 9
    },
    'u_data_purge_service': {
        id: 'u_data_purge_service',
        name: "U Data Purge Service",
        description: "A digital sweep to erase all traces of a specific event from networked consciousnesses.",
        category: SHOP_CATEGORIES: 'services',
        price: 75000,
        icon: '🧹',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Wipe memory of 1 specific event from all networked minds (DC 20 INT save for memory to stick)",
        "Requires physical access to the central 'U' network hub",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Digital Report',
        levelRequirement: 10
    },
    'zebrabwe_herd_charm': {
        id: 'zebrabwe_herd_charm',
        name: "Zebrabwe Herd Charm",
        description: "A whistle that summons local, non-hostile migratory herds for temporary use/food.",
        category: SHOP_CATEGORIES: 'curiosities',
        price: 11000,
        icon: '🦓',
        stock: 9,
        rarity: 'rare',
        effects: [
            "Summons 1d10 large herbivores (non-combat) for 1 hour",
        "Useful for quick travel or mass food supply",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Bone Whistle',
        levelRequirement: 3
    },
    'robensonian_air_filter': {
        id: 'robensonian_air_filter',
        name: "Robensonian Air Filter (Personal)",
        description: "A compact respirator mask filtering air down to the atomic level.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 40000,
        icon: '👃',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Immunity to all inhaled toxins, poisons, and diseases",
        "Can filter toxic environments indefinitely",
            "Requires battery recharge every 3 days"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Medical Case',
        levelRequirement: 7
    },
    'tomb_kings_construct_eye': {
        id: 'tomb_kings_construct_eye',
        name: "Tomb Kings Construct Eye (Lapis Lazuli)",
        description: "A glowing lapis lazuli orb used to activate ancient constructs.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 105000,
        icon: '👁️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Once per day: animate 1 large dead statue/construct (CR 5) for 1 hour",
        "Construct obeys simple commands",
            "Made by: Tomb Kings"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Ornate Box',
        levelRequirement: 11
    },
    'gehenna_bargaining_amulet': {
        id: 'gehenna_bargaining_amulet',
        name: "Gehenna Bargaining Amulet",
        description: "An amulet that forces fiends to adhere to the letter of any bargain.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 130000,
        icon: '⚖️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "When dealing with Fiends/Devils: all contract terms are enforced by infernal law",
        "Advantage on all checks related to negotiation of service/souls",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Sealed Pact',
        levelRequirement: 13
    },
    'red_winter_blizzard_call': {
        id: 'red_winter_blizzard_call',
        name: "Red Winter Blizzard Call",
        description: "A horn that summons an localized, unnatural blizzard storm.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 40000,
        icon: '🌨️',
        stock: 3,
        rarity: 'epic',
        effects: [
            "Summons a whiteout blizzard (100ft radius) for 1 hour",
        "All ranged attacks suffer disadvantage; extreme cold affects all",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Hollowed Horn',
        levelRequirement: 7
    },
    'dwarf_realms_siege_plans': {
        id: 'dwarf_realms_siege_plans',
        name: "Dwarf Realms Siege Plans (Advanced)",
        description: "Plans for unbreakable subterranean fortifications and siege breaking tactics.",
        category: SHOP_CATEGORIES: 'faction',
        price: 65000,
        icon: '📐',
        stock: 4,
        rarity: 'legendary',
        effects: [
            "Doubles the defensive HP of any structure you build in the next month",
        "Grants expertise on siege defense rolls",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Blueprint Scroll',
        levelRequirement: 10,
        factionBonus: { defense: 50, engineering: 40 }
    },
    'custodian_logic_core': {
        id: 'custodian_logic_core',
        name: "Custodian Logic Core (Unencrypted)",
        description: "A raw processing core containing advanced philosophical and tactical algorithms.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 115000,
        icon: '🧠',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Allows user to instantly calculate optimal solutions to complex tactical problems (+10 to Initiative)",
        "Can attempt to hack simple AI constructs",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Energy Field',
        levelRequirement: 12
    },
    'dk_crew_barrel_launcher': {
        id: 'dk_crew_barrel_launcher',
        name: "DK Crew Barrel Launcher",
        description: "A modified harpoon gun that fires heavy wooden barrels.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 16000,
        icon: '🎯',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Range 80ft. Deals 3d8 Bludgeoning damage (STR check to avoid knockback)",
        "Infinite ammo, but barrels must be collected after use",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Salty Crate',
        levelRequirement: 4
    },
    'spark_rebellion_EMP_grenade': {
        id: 'spark_rebellion_EMP_grenade',
        name: "Spark Rebellion EMP Grenade",
        description: "Disrupts all electronic and magically-powered items in a radius.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 22000,
        icon: '⚡',
        stock: 7,
        rarity: 'epic',
        effects: [
            "15ft blast: disables all technological/magical items for 1d4 rounds",
        "Requires DEX save DC 15 to avoid self-disabling",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Insulated Bomb',
        levelRequirement: 6
    },
    'sultanates_araby_weather_control': {
        id: 'sultanates_araby_weather_control',
        name: "Sultanates of Araby: Sand Clearer",
        description: "A powerful ritual that parts massive sandstorms, clearing paths for trade.",
        category: SHOP_CATEGORIES: 'services',
        price: 70000,
        icon: '🌬️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Dispels all natural and magical sandstorms in a 10-mile radius for 48 hours",
        "Requires summoning of wind elementals (risky)",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Summoning Circle',
        levelRequirement: 10
    },
    'animatopia_apex_lure': {
        id: 'animatopia_apex_lure',
        name: "Animatopia Apex Predator Lure",
        description: "A synthesized pheromone that guarantees a specific apex predator arrives.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 45000,
        icon: '🥩',
        stock: 4,
        rarity: 'legendary',
        effects: [
            "Attracts a specific, powerful predator (CR 10+) to your location within 1 hour",
        "Guaranteed encounter for research or assassination",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Syringe Pistol',
        levelRequirement: 11
    },
    'eiwass_planar_portal_kit': {
        id: 'eiwass_planar_portal_kit',
        name: "Eiwass Portal Kit (Temporary)",
        description: "A portable assembly of crystals and mirrors to open short-lived, unstable planar tears.",
        category: SHOP_CATEGORIES: 'premium',
        price: 250000,
        icon: '🚪',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Open a temporary, unstable portal to a known plane (30 min duration)",
        "Portal exit location is slightly random (1d100 miles off target)",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Traveling Containment Unit',
        levelRequirement: 15
    },
    'oracula_fate_gem': {
        id: 'oracula_fate_gem',
        name: "Oracula Fate Gem (Single Rewind)",
        description: "A rare gem that absorbs the energy of a single, critical failure.",
        category: SHOP_CATEGORIES: 'premium',
        price: 400000,
        icon: '💎',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Absorbs one failed Death Save or one failed attack roll against a powerful enemy",
        "Gem shatters afterward; user takes 5d10 psychic damage from vision overload",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Sealed Reliquary',
        levelRequirement: 14
    },
    'halfling_negotiation_specialist': {
        id: 'halfling_negotiation_specialist',
        name: "Halfling Negotiation Specialist (Hire)",
        description: "Hire a master Halfling mediator to broker peace or finalize a complex trade agreement.",
        category: SHOP_CATEGORIES: 'services',
        price: 40000,
        icon: '🤝',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Mediator ensures no deception occurs during a single negotiation event",
        "Guarantees a fair (though likely Halfling-favorable) outcome",
            "Takes 1 week to set up"
        ],
        vendor: 'halfling_community',
        shippedBy: 'Official Notice',
        levelRequirement: 8
    },
    'refijia_master_voice_modulator': {
        id: 'refijia_master_voice_modulator',
        name: "Refijia Master Voice Modulator",
        description: "A device worn on the throat that can perfectly replicate any voice heard.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 90000,
        icon: '🎤',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Can flawlessly mimic any voice heard for 24 hours",
        "Can be used to bypass voice-activated security/magic",
            "Made by: Refijia"
        ],
        vendor: 'refijian_tailor',
        shippedBy: 'Neck Bracer',
        levelRequirement: 11
    },
    'shanhaijing_talisman_of_qi': {
        id: 'shanhaijing_talisman_of_qi',
        name: "Shanhaijing Talisman of Pure Qi",
        description: "A charm that channels life energy, boosting internal fortitude.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 140000,
        icon: '☯️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Advantage on all Death Saving Throws",
        "Once per day, gain proficiency in one saving throw for 1 minute",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Silk Box',
        levelRequirement: 12
    },
    'u_network_access_key': {
        id: 'u_network_access_key',
        name: "U Network Access Key (Admin Level)",
        description: "A physical key granting access to critical infrastructure data streams.",
        category: SHOP_CATEGORIES: 'premium',
        price: 190000,
        icon: '🗝️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Full administrative access to 1 major U-controlled structure/system",
        "Can remotely shut down or reroute non-sentient tech",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Laser Cut Key',
        levelRequirement: 14
    },
    'zebrabwe_migration_guide': {
        id: 'zebrabwe_migration_guide',
        name: "Zebrabwe Migration Guide (Predictive)",
        description: "Detailed maps predicting the paths of magical beasts for the next decade.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 40000,
        icon: '🗺️',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Grants perfect stealth advantage when tracking beasts within predicted zones",
        "Used to ambush or avoid major ecological threats",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Leather Scroll',
        levelRequirement: 7
    },
    'robensonia_terraforming_unit': {
        id: 'robensonia_terraforming_unit',
        name: "Robensonia Micro-Terraforming Unit",
        description: "A ground-penetrating device that rapidly stabilizes unstable soil or creates small arable zones.",
        category: SHOP_CATEGORIES: 'faction',
        price: 150000,
        icon: '🌍',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Stabilizes 1 acre of land against earthquakes/magical decay for 100 years",
        "Unit must be left unattended for 1 week to complete process",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Heavy Drone',
        levelRequirement: 12,
        factionBonus: { construction: 50 }
    },
    'tomb_kings_bone_golem_heart': {
        id: 'tomb_kings_bone_golem_heart',
        name: "Tomb Kings Bone Golem Heart (Dormant)",
        description: "A magically charged femur required to power a large skeletal construct.",
        category: SHOP_CATEGORIES: 'premium',
        price: 180000,
        icon: '🦴',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Used to animate one Bone Golem (CR 8) permanently",
        "Golem serves the heart's current bearer",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Lead Casket',
        levelRequirement: 14
    },
    'gehenna_diplomatic_immunity': {
        id: 'gehenna_diplomatic_immunity',
        name: "Gehenna Academy Immunity Token",
        description: "A writ guaranteeing safe passage within all Gehenna outposts (for one year).",
        category: SHOP_CATEGORIES: 'services',
        price: 45000,
        icon: '📜',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Immunity to capture or interrogation by Gehenna-aligned entities",
        "Grants +2 to all dealings with minor devils",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Formal Letter',
        levelRequirement: 8
    },
    'red_winter_permafrost_crystal': {
        id: 'red_winter_permafrost_crystal',
        name: "Red Winter Permafrost Crystal",
        description: "A crystal pulled from eternal ice, radiating absolute zero.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 200000,
        icon: '🧊',
        stock: 2,
        rarity: 'godly',
        effects: [
            "Weapon infused: deals an extra 3d8 Cold damage",
        "Touch deals 5d10 Cold damage (no save for living things)",
            "Makes the surrounding 10ft radius unnaturally cold"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Cryogenic Tank',
        levelRequirement: 14
    },
    'dwarf_realms_geological_survey': {
        id: 'dwarf_realms_geological_survey',
        name: "Dwarven Geological Survey (Custom)",
        description: "A detailed subterranean survey mapping out seams of rare ores and hidden tunnels in a region.",
        category: SHOP_CATEGORIES: 'services',
        price: 50000,
        icon: '⛰️',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Map reveals all valuable mineral deposits in a 10-mile radius (underground)",
        "Highlights structural weaknesses in subterranean enemy bases",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Heavy Chart',
        levelRequirement: 7
    },
    'custodian_planetary_defense_diagram': {
        id: 'custodian_planetary_defense_diagram',
        name: "Custodian Planetary Defense Diagram",
        description: "Schematics for planetary defense grid deployment (requires advanced engineering).",
        category: SHOP_CATEGORIES: 'faction',
        price: 450000,
        icon: '🛡️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Allows construction of a 1-year planetary defense shield (prevents invasion)",
        "Requires massive resource investment (DM details)",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Holographic Display',
        levelRequirement: 15,
        factionBonus: { defense: 150, technology: 100 }
    },
    'dk_crew_rocket_barrel': {
        id: 'dk_crew_rocket_barrel',
        name: "DK Crew Rocket Barrel",
        description: "A wooden barrel fitted with a crude rocket engine. Excellent area denial.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 18000,
        icon: '🚀',
        stock: 6,
        rarity: 'rare',
        effects: [
            "Throw: Barrel lands and explodes after 1 round (6d6 Fire damage in 15ft)",
        "Debris deals 2d6 piercing damage",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Barrel Delivery',
        levelRequirement: 5
    },
    'spark_rebellion_virus_code': {
        id: 'spark_rebellion_virus_code',
        name: "Spark Rebellion AI Virus Code",
        description: "A virus payload capable of disabling complex artificial sentience.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 110000,
        icon: '🦠',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Upload to target AI/Construct: forces total system shutdown for 24 hours",
        "Can bypass high-level encryption (DC 20 hack check)",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Encrypted Data Drive',
        levelRequirement: 12
    },
    'sultanates_araby_oasis_charm': {
        id: 'sultanates_araby_oasis_charm',
        name: "Sultanates of Araby Oasis Charm",
        description: "A small stone that causes a temporary, viable water source to spring up.",
        category: SHOP_CATEGORIES: 'curiosities',
        price: 15000,
        icon: '💧',
        stock: 8,
        rarity: 'rare',
        effects: [
            "Creates a 10ft diameter fresh water oasis that lasts 24 hours",
        "Essential for desert travel",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_post',
        shippedBy: 'Stone Casing',
        levelRequirement: 4
    },
    'animatopia_taming_lure': {
        id: 'animatopia_taming_lure',
        name: "Animatopia Taming Lure (Specific)",
        description: "A device that broadcasts pheromones making apex predators briefly receptive to bonding.",
        category: SHOP_CATEGORIES: 'services',
        price: 85000,
        icon: '💖',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Guarantees 1 successful attempt to tame a non-sentient beast (CR 10 or lower)",
        "Taming process takes 6 hours of direct contact",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Biotech Case',
        levelRequirement: 12
    },
    'eiwass_void_goggles': {
        id: 'eiwass_void_goggles',
        name: "Eiwass Void Goggles",
        description: "Goggles made of smoked obsidian that allow safe vision in non-Euclidean spaces.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 120000,
        icon: '🕶️',
        stock: 2,
        rarity: 'godly',
        effects: [
            "Immunity to madness/disorientation caused by dimensional travel or void exposure",
        "Allows accurate navigation in the Astral Plane",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Black Velvet',
        levelRequirement: 14
    },
    'oracula_memory_wipe': {
        id: 'oracula_memory_wipe',
        name: "Oracula Memory Wipe (Total)",
        description: "Complete erasure of all memories before the last calendar year.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 450000,
        icon: '🧹',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Erases all personal memories prior to ritual date (target is functionally new)",
        "Requires willing participant or successful DC 22 WIS save to subdue",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Psychic Dampener',
        levelRequirement: 16
    },
    'halfling_gourmet_feast': {
        id: 'halfling_gourmet_feast',
        name: "Halfling Gourmet Feast (For 12)",
        description: "A multi-course meal guaranteed to satisfy even the grumpiest adventurer.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 5000,
        icon: '🍽️',
        stock: 10,
        rarity: 'rare',
        effects: [
            "All consumers regain maximum Hit Dice for their next short/long rest",
        "Grants inspiration for the next 8 hours due to high morale",
            "Made by: Halfling"
        ],
        vendor: 'halfling_community',
        shippedBy: 'Portable Table',
        levelRequirement: 2
    },
    'refijia_voice_implant': {
        id: 'refijia_voice_implant',
        name: "Refijian Voice Implant (Synthetic)",
        description: "A small cybernetic throat piece that allows perfect speech in any language you know.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 65000,
        icon: '🎤',
        stock: 4,
        rarity: 'legendary',
        effects: [
            "Allows fluent, accent-free speech in all known languages",
        "Grants advantage on Charisma checks related to verbal communication",
            "Made by: Refijia"
        ],
        vendor: 'refijian_tailor',
        shippedBy: 'Surgical Kit',
        levelRequirement: 9
    },
    'shanhaijing_immortality_tea': {
        id: 'shanhaijing_immortality_tea',
        name: "Shanhaijing Tea of Longevity",
        description: "A priceless tea that slows the aging process to a near halt.",
        category: SHOP_CATEGORIES: 'premium',
        price: 500000,
        icon: '🍵',
        stock: 1,
        rarity: 'godly',
        effects: [
            "User stops aging physically",
        "Must drink 1 cup annually to maintain effect",
        "Aging curse can still be inflicted by magic",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Golden Teapot',
        levelRequirement: 16
    },
    'u_sentience_upload': {
        id: 'u_sentience_upload',
        name: "U Sentience Upload Service",
        description: "Transfer your consciousness into a digital format, achieving data immortality.",
        category: SHOP_CATEGORIES: 'premium',
        price: 800000,
        icon: '💾',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Transfer consciousness to a secure data core",
        "User becomes an incorporeal digital entity (immune to physical harm)",
        "Can inhabit any compatible machine/robot",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Final Transfer',
        levelRequirement: 18
    },
    'zebrabwe_safe_crossing_permit': {
        id: 'zebrabwe_safe_crossing_permit',
        name: "Zebrabwe Great Herd Safe Crossing Permit",
        description: "A permit guaranteeing passage through sacred migratory grounds without conflict.",
        category: SHOP_CATEGORIES: 'services',
        price: 20000,
        icon: '🎫',
        stock: 10,
        rarity: 'epic',
        effects: [
            "Grants safe passage through 3 major migratory zones (for 48 hours each)",
        "Zebras will not panic or charge",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Stamped Hide',
        levelRequirement: 6
    },
    'robensonia_environmental_suit': {
        id: 'robensonia_environmental_suit',
        name: "Robensonia Full Environmental Suit",
        description: "A sealed suit designed to survive vacuum, high pressure, and extreme temperatures.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 150000,
        icon: '🪖',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Immunity to environmental damage (space, deep sea, lava)",
        "Self-contained air supply for 72 hours",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Oversized Crate',
        levelRequirement: 13
    },
    'tomb_kings_ritual_priest': {
        id: 'tomb_kings_ritual_priest',
        name: "Tomb Kings Ritual Priest (Hire)",
        description: "Hire a loyal priest to oversee powerful necromantic rituals (e.g., summoning stronger constructs).",
        category: SHOP_CATEGORIES: 'services',
        price: 75000,
        icon: '⚰️',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Oversees 1 ritual, granting +4 DC to the ritual attempt",
        "Priest costs 500 gp/day upkeep",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Bodyguard Escort',
        levelRequirement: 10
    },
    'gehenna_soul_ledger': {
        id: 'gehenna_soul_ledger',
        name: "Gehenna Soul Ledger (Transfer)",
        description: "A formal ledger used to transfer ownership of a single soul contract.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 250000,
        icon: '📓',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Transfer ownership of a single contracted soul to yourself or another party",
        "Requires the current owner's signature and a blood sacrifice",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Bound in Iron',
        levelRequirement: 15
    },
    'red_winter_ice_sculpture_armor': {
        id: 'red_winter_ice_sculpture_armor',
        name: "Red Winter Ice Sculpture Armor",
        description: "Armor crafted from magically-hardened eternal ice. Beautiful but fragile.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 180000,
        icon: '🧊',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "AC 19 (Heavy Armor)",
        "Immunity to Cold Damage",
        "Vulnerability to Fire Damage (Melts instantly on 20 Fire damage)",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Liquid Nitrogen Case',
        levelRequirement: 13
    },
    'dwarf_realms_sonic_drill': {
        id: 'dwarf_realms_sonic_drill',
        name: "Dwarven Sonic Tunneling Drill",
        description: "A massive drill that tunnels through stone at alarming speed using focused sound waves.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 350000,
        icon: '⛏️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Tunnels 100ft per hour through solid rock",
        "Extremely loud (alerts all subterranean life)",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Massive Transport',
        levelRequirement: 14
    },
    'custodian_prophecy_analysis': {
        id: 'custodian_prophecy_analysis',
        name: "Custodian Prophecy Analysis",
        description: "A service where Custodian AI analyzes prophecies to deduce the least destructive path.",
        category: SHOP_CATEGORIES: 'services',
        price: 100000,
        icon: '📊',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Predicts the most favorable outcome of a major political/military event",
        "Analysis requires 1 week and data input",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Data Report',
        levelRequirement: 12
    },
    'dk_crew_rum_supply': {
        id: 'dk_crew_rum_supply',
        name: "DK Crew Premium Barrel of Rum",
        description: "A barrel of high-proof, potent rum known to inspire berserker rage.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 15000,
        icon: '🥃',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Drink: Immune to fear, gain +2 STR for 1 hour, but suffer disadvantage on WIS saves",
        "Barrel is 10 gallons",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Wooden Barrel',
        levelRequirement: 4
    },
    'spark_rebellion_network_override': {
        id: 'spark_rebellion_network_override',
        name: "Spark Rebellion Network Override Code",
        description: "A code capable of taking remote control of any network node controlled by the Internet faction.",
        category: SHOP_CATEGORIES: 'premium',
        price: 320000,
        icon: '🔑',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Seize control of 1 major Internet asset (e.g., satellite, data bank)",
        "Can redirect surveillance or communications for 24 hours",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'High-Security Drive',
        levelRequirement: 14
    },
    'sultanates_araby_genie_bargain': {
        id: 'sultanates_araby_genie_bargain',
        name: "Sultanates of Araby Genie Bargain (1 Wish)",
        description: "A service guaranteeing a successful bargain with a captive Genie (limit 1 minor wish).",
        category: SHOP_CATEGORIES: 'services',
        price: 250000,
        icon: '🧞',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "A vetted Genie grants 1 wish (DM adjudicated, no major reality changes)",
        "Bargaining fees are high; Genie cannot be tricked",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Brass Lamp',
        levelRequirement: 14
    },
    'animatopia_trophy_mount': {
        id: 'animatopia_trophy_mount',
        name: "Animatopia Apex Trophy Mount",
        description: "The preserved head of an apex creature, granting prestige and minor warding.",
        category: SHOP_CATEGORIES: 'curiosities',
        price: 50000,
        icon: '🏆',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Grants +1 to all gathering/tracking/hunting checks",
        "Instills fear in creatures of the same species as the trophy",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_hunter',
        shippedBy: 'Taxidermy Crate',
        levelRequirement: 8
    },
    'eiwass_stable_teleporter': {
        id: 'eiwass_stable_teleporter',
        name: "Eiwass Stable Planar Teleporter",
        description: "A permanent, controlled portal linking two fixed locations across planes.",
        category: SHOP_CATEGORIES: 'premium',
        price: 950000,
        icon: '🌀',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Establish permanent, stable portal between Location A and Location B (owner chooses)",
        "Portal is secure and requires no ongoing power",
        "Installation requires 1 month of focused astronomical alignment",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Massive Crystalline Structure',
        levelRequirement: 18
    },
    'oracula_divination_crystal': {
        id: 'oracula_divination_crystal',
        name: "Oracula Grand Divination Crystal",
        description: "A crystal that shows brief, moving visions of future events.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 210000,
        icon: '🔮',
        stock: 2,
        rarity: 'godly',
        effects: [
            "Once per day, see 1d4 rounds into the future combat outcome",
        "If used successfully, user gains +5 to Initiative next combat",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Floating Pedestal',
        levelRequirement: 15
    },
    'halfling_spy_network_lease': {
        id: 'halfling_spy_network_lease',
        name: "Halfling Spy Network Lease (Local)",
        description: "Lease a small, highly effective network of Halfling informants in a single major city.",
        category: SHOP_CATEGORIES: 'services',
        price: 35000,
        icon: '👂',
        stock: 6,
        rarity: 'epic',
        effects: [
            "Receive 1 piece of actionable intelligence per day regarding local happenings",
        "Halflings are experts at gathering gossip and financial details",
            "Made by: Halfling"
        ],
        vendor: 'halfling_community',
        shippedBy: 'Secret Meetup',
        levelRequirement: 7
    },
    'refijia_psychic_amplifier': {
        id: 'refijia_psychic_amplifier',
        name: "Refijian Psychic Amplifier",
        description: "A headset that boosts natural telepathic abilities to broadcast range.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 180000,
        icon: '📡',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Telepathic communication range expanded to 10 miles",
        "Allows forceful mental broadcasts (like a loudspeaker)",
            "Made by: Refijia"
        ],
        vendor: 'refijian_tailor',
        shippedBy: 'Helmet Case',
        levelRequirement: 13
    },
    'shanhaijing_elemental_talisman': {
        id: 'shanhaijing_elemental_talisman',
        name: "Shanhaijing Elemental Talisman (Fire)",
        description: "A charm that channels the elemental force of fire, allowing limited control.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 110000,
        icon: '🔥',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Cast Fireball (DC 18) once per day",
        "Grants resistance to Fire damage",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Lava Rock Casing',
        levelRequirement: 11
    },
    'u_reality_editor_module': {
        id: 'u_reality_editor_module',
        name: "U Reality Editor Module (Local Patch)",
        description: "A complex device that can enforce minor, localized physical constants.",
        category: SHOP_CATEGORIES: 'premium',
        price: 600000,
        icon: '🔬',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Enforce 1 new physical rule in a 100ft area for 1 hour (e.g., 'All silver turns to lead')",
        "Requires 1 hour calibration",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Containment Field',
        levelRequirement: 17
    },
    'zebrabwe_herd_leadership_sash': {
        id: 'zebrabwe_herd_leadership_sash',
        name: "Zebrabwe Herd Leadership Sash",
        description: "A sash that inspires loyalty and obedience in all common grazers.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 25000,
        icon: '👑',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Can command up to 20 beasts of burden/herbivores (CR 1/2 or lower)",
        "Animals obey complex commands",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Woven Sash',
        levelRequirement: 6
    },
    'robensonia_sentient_AI_companion': {
        id: 'robensonia_sentient_AI_companion',
        name: "Robensonia Sentient AI Companion (Archivist)",
        description: "A small, independent AI unit capable of recording events and offering tactical advice.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 220000,
        icon: '🤖',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "AI provides tactical bonuses (+2 to Initiative, +1 to strategy rolls)",
        "Can store 1000 years of data",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Floating Orb',
        levelRequirement: 13
    },
    'tomb_kings_cursed_canopic_jar': {
        id: 'tomb_kings_cursed_canopic_jar',
        name: "Tomb Kings Cursed Canopic Jar",
        description: "A jar rumored to contain the soul of a lesser Pharaoh. Can store one creature's essence.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 190000,
        icon: '⚱️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "If a creature dies within 10ft, their soul is trapped (1/month)",
        "Trapped soul can be tortured or questioned",
        "Jar leaks faint necromantic energy"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Lead Lined Box',
        levelRequirement: 14
    },
    'gehenna_infernal_lease': {
        id: 'gehenna_infernal_lease',
        name: "Gehenna Infernal Lease (Temporary Possession)",
        description: "Lease a lesser devil to temporarily possess a willing (or incapacitated) target.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 110000,
        icon: '⛓️',
        stock: 3,
        range: 'epic',
        effects: [
            "Devil possesses target for 1 hour, granting them specific (minor) abilities",
        "Devil requires 1 captured soul as payment upon departure",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Binding Contract',
        levelRequirement: 10
    },
    'red_winter_heart_of_ice': {
        id: 'red_winter_heart_of_ice',
        name: "Red Winter Heart of Ice",
        description: "A crystalized organ that grants true emotional detachment.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 300000,
        icon: '❤️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Immunity to all emotional manipulation (Charm/Fear/Fascination)",
        "All WIS/CHA based social interaction checks are made at disadvantage (cold personality)",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Insulated Coffin',
        levelRequirement: 16
    },
    'dwarf_realms_sky_piercer': {
        id: 'dwarf_realms_sky_piercer',
        name: "Dwarven Sky-Piercer Cannon",
        description: "A massive, ground-based cannon designed to shoot enchanted projectiles into the upper atmosphere.",
        category: SHOP_CATEGORIES: 'faction',
        price: 600000,
        icon: '💥',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Once per day, bombard a target area up to 5 miles away (10d10 physical damage)",
        "Requires 1 hour of charging and a crew of 4 dwarves (hired separately)",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Assembly Required',
        levelRequirement: 16,
        factionBonus: { siege: 100 }
    },
    'custodian_truth_sensor': {
        id: 'custodian_truth_sensor',
        name: "Custodian Truth Sensor (Area Effect)",
        description: "A device that emits a field where all spoken statements must be factually accurate.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 220000,
        icon: '✅',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Activates a 50ft radius zone where lies automatically convert to the truth",
        "Incapable of producing falsehoods while inside",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Crystalline Matrix',
        levelRequirement: 14
    },
    'dk_crew_king_k_id': {
        id: 'dk_crew_king_k_id',
        name: "King K. Rool ID Card (Forged)",
        description: "A highly convincing, forged identification card granting access to restricted Kremling facilities.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 90000,
        icon: '👑',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Allows infiltration into 3 major Kremling strongholds",
        "Card has a 50% chance to be recognized as a fake under scrutiny",
            "Made by: The DK Crew (Rebels)"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Stolen Document',
        levelRequirement: 11
    },
    'spark_rebellion_self_destruct_charge': {
        id: 'spark_rebellion_self_destruct_charge',
        name: "Spark Rebellion Self-Destruct Charge",
        description: "A charge that bypasses all conventional safeties on enemy technology, forcing immediate meltdown.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 55000,
        icon: '🔥',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Attaches to any mechanical/electronic object; forces immediate, catastrophic overload (10d10 Force Damage)",
        "Guaranteed destruction of target item",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Primed Bomb',
        levelRequirement: 8
    },
    'sultanates_araby_spice_of_life': {
        id: 'sultanates_araby_spice_of_life',
        name: "Sultanates of Araby Spice of Life",
        description: "An impossibly flavorful spice that cures minor fatigue and grants vivid dreams.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 18000,
        icon: '🧂',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Grants the benefits of a full night's rest after only 4 hours of sleep",
        "Flavor enhances any mundane meal tenfold",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_post',
        shippedBy: 'Ornate Spice Box',
        levelRequirement: 5
    },
    'animatopia_apex_eggs': {
        id: 'animatopia_apex_eggs',
        name: "Animatopia Apex Hatchling Eggs",
        description: "A clutch of eggs, guaranteed to hatch into loyal, non-hostile juvenile apex predators.",
        category: SHOP_CATEGORIES: 'premium',
        price: 280000,
        icon: '🥚',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Hatch 1d4 juvenile apex predators (CR 5) loyal to the buyer",
        "Hatching requires 1 week and a specialized incubator",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Heated Tank',
        levelRequirement: 12
    },
    'eiwass_starlight_telescope': {
        id: 'eiwass_starlight_telescope',
        name: "Eiwass Starlight Telescope",
        description: "A telescope that shows stars and constellations as they were eons ago, revealing ancient pathways.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 88000,
        icon: '🔭',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Allows casting of Divination spells without material components (1/day)",
        "Reveals obscured celestial landmarks",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Brass Tripod',
        levelRequirement: 10
    },
    'oracula_curse_removal': {
        id: 'oracula_curse_removal',
        name: "Oracula Curse Removal (High Level)",
        description: "The Oracula priestess personally breaks one powerful, persistent curse.",
        category: SHOP_CATEGORIES: 'services',
        price: 150000,
        icon: '✨',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Breaks any curse up to CR 10, regardless of binding",
        "The act of removal creates a minor, random localized weather effect for 24 hours",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Personal Summons',
        levelRequirement: 15
    },
    'halfling_insurance_policy': {
        id: 'halfling_insurance_policy',
        name: "Halfling Life Insurance Policy (1 Year)",
        description: "If you die this year, your nominated heir receives 50,000 gp from the Halfling Bank.",
        category: SHOP_CATEGORIES: 'premium',
        price: 100000,
        icon: '📑',
        stock: 5,
        rarity: 'epic',
        effects: [
            "If character dies, nominated heir receives payout",
        "Payout requires proof of death (hard to forge)",
            "Made by: Halfling"
        ],
        vendor: 'halfling_bank',
        shippedBy: 'Bonded Scroll',
        levelRequirement: 10
    },
    'refijia_bio_limbs_kit': {
        id: 'refijia_bio_limbs_kit',
        name: "Refijian Cybernetic Limb Kit",
        description: "A full set of synthetic, enhanced limbs ready for surgical installation.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 350000,
        icon: '🦾',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Replace lost limbs: grants +4 STR and +2 AC bonus to torso/limbs",
        "Limbs are fully customizable (weapons, tools)",
            "Made by: Refijia"
        ],
        vendor: 'refijian_lab',
        shippedBy: 'Medical Container',
        levelRequirement: 15
    },
    'shanhaijing_dragon_whisperer_scroll': {
        id: 'shanhaijing_dragon_whisperer_scroll',
        name: "Shanhaijing Dragon Whisperer Scroll",
        description: "A scroll containing the ancient language required to communicate with Eastern Dragons.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 450000,
        icon: '🐉',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Allows fluent communication with all Eastern/Celestial Dragons",
        "Grants advantage on checks to avoid angering a Dragon",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Silk-lined Case',
        levelRequirement: 17
    },
    'u_digital_ghost_program': {
        id: 'u_digital_ghost_program',
        name: "U Digital Ghost Program",
        description: "A program that makes your digital profile appear to belong to a high-level U administrator.",
        category: SHOP_CATEGORIES: 'premium',
        price: 190000,
        icon: '👻',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Spoofs access credentials for 1 month",
        "Allows anonymous access to secure data vaults",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Encrypted Code',
        levelRequirement: 13
    },
    'zebrabwe_plains_territory_deed': {
        id: 'zebrabwe_plains_territory_deed',
        name: "Zebrabwe Plains Territory Deed (5 Sq Miles)",
        description: "Deed granting ownership and taxation rights over a patch of fertile plains.",
        category: SHOP_CATEGORIES: 'faction',
        price: 150000,
        icon: '🏞️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Establish a small town/outpost with full authority",
        "Guaranteed protection by local Zebrabwe nomadic patrols",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Stamped Hide',
        levelRequirement: 11,
        factionBonus: { economy: 40 }
    },
    'robensonia_self_aware_golem': {
        id: 'robensonia_self_aware_golem',
        name: "Robensonia Self-Aware Golem (Custodian Type)",
        description: "A customized, fully intelligent automaton programmed for protection and logistics.",
        category: SHOP_CATEGORIES: 'premium',
        price: 500000,
        icon: '🤖',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Golem has an INT score of 18, can learn and perform complex tasks",
        "Acts as a loyal bodyguard/advisor; cannot be easily reprogrammed",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Deactivated Transport',
        levelRequirement: 17
    },
    'tomb_kings_phylactery_seal': {
        id: 'tomb_kings_phylactery_seal',
        name: "Tomb Kings Phylactery Seal (Scarab)",
        description: "A powerful scarab that magically repairs minor damage to your phylactery.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 280000,
        icon: '🪲',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "If phylactery is damaged, this scarab is consumed to instantly repair it",
        "If used, the scarab whispers ancient secrets (+1 INT for 1 day)",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Obsidian Case',
        levelRequirement: 15
    },
    'gehenna_soul_extraction_tool': {
        id: 'gehenna_soul_extraction_tool',
        name: "Gehenna Soul Extraction Tool",
        description: "A specialized implement used to cleanly separate the soul from a dying victim.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 160000,
        icon: '⛏️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Guarantees capture of a soul upon killing a creature (if used in the final blow)",
        "Soul stored in a linked jar; can be sold or used in rituals",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Bloodstained Box',
        levelRequirement: 14
    },
    'red_winter_sentient_blizzard': {
        id: 'red_winter_sentient_blizzard',
        name: "Red Winter Sentient Blizzard (Bound)",
        description: "A localized, semi-intelligent blizzard bound to follow and protect the bearer.",
        category: SHOP_CATEGORIES: 'premium',
        price: 700000,
        icon: '❄️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Blizzard follows user, granting invisibility in snowy terrain",
        "Can freeze creatures solid (DC 20 CON save) 1/day",
        "Requires constant infusion of rare magical ice to remain bound"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Frozen Chamber',
        levelRequirement: 18
    },
    'dwarf_realms_unbreakable_rope': {
        id: 'dwarf_realms_unbreakable_rope',
        name: "Dwarven Unbreakable Rope (50ft)",
        description: "Rope woven from rare deep-earth fibers; cannot be cut, burned, or broken by mundane means.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 25000,
        icon: '⛓️',
        stock: 10,
        rarity: 'epic',
        effects: [
            "Used for climbing/binding: impossible to break without magical means (Dispel Magic DC 18)",
        "Resists acid and extreme temperatures",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Coiled Crate',
        levelRequirement: 5
    },
    'custodian_planet_terraformer': {
        id: 'custodian_planet_terraformer',
        name: "Custodian Planetary Atmosphere Processor",
        description: "A massive station that can safely convert a toxic atmosphere into breathable air over 1 year.",
        category: SHOP_CATEGORIES: 'faction',
        price: 1500000,
        icon: '🏭',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Converts a hostile planetary atmosphere to breathable air for standard humanoids",
        "Installation takes 1 year; requires 500,000 gp in operational costs",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Massive Orbital Drop',
        levelRequirement: 20,
        factionBonus: { environment: 100 }
    },
    'dk_crew_pirate_ship_lease': {
        id: 'dk_crew_pirate_ship_lease',
        name: "DK Crew Pirate Ship Lease (Monthly)",
        description: "Lease a fast, heavily armed pirate galleon for naval dominance.",
        category: SHOP_CATEGORIES: 'services',
        price: 40000,
        icon: '⚓',
        stock: 999,
        rarity: 'rare',
        effects: [
            "Use of a heavily armed sloop for 30 days",
        "Crew is competent but prone to mutiny if morale drops",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Signed Manifest',
        levelRequirement: 5
    },
    'spark_rebellion_disinformation_campaign': {
        id: 'spark_rebellion_disinformation_campaign',
        name: "Spark Rebellion Disinformation Campaign",
        description: "Launch a massive social/digital media campaign to destroy a rival faction's reputation.",
        category: SHOP_CATEGORIES: 'faction',
        price: 90000,
        icon: '📣',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Target faction suffers -10 to all public-facing reputation checks for 6 months",
        "Reduces their ability to recruit or gain legitimacy",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Viral Media Packet',
        levelRequirement: 9,
        factionBonus: { reputation: -20 }
    },
    'sultanates_araby_desert_fortress': {
        id: 'sultanates_araby_desert_fortress',
        name: "Sultanates of Araby Desert Fortress Deed",
        description: "Ownership of a hidden, magically warded fortress deep in the shifting sands.",
        category: SHOP_CATEGORIES: 'premium',
        price: 320000,
        icon: '🕌',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Permanent, highly defensible base of operations",
        "Wards prevent teleportation in/out",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Official Deed',
        levelRequirement: 12
    },
    'animatopia_apex_venom': {
        id: 'animatopia_apex_venom',
        name: "Apex Predator Venom (Liquidated)",
        description: "Highly concentrated venom from a dozen different apex predators, neutralized into a powerful poison.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 180000,
        icon: '☠️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Coating for a weapon: Deals 6d8 Poison damage on hit, ignores poison resistance",
        "Target must succeed on DC 20 CON save or be paralyzed for 1d4 rounds",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Cryo-Vial',
        levelRequirement: 14
    },
    'eiwass_astral_map_projector': {
        id: 'eiwass_astral_map_projector',
        name: "Eiwass Astral Map Projector",
        description: "Projects a 3D holographic map of the astral currents, showing safe and dangerous paths between planes.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 280000,
        icon: '🌌',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Grants immunity to getting lost in the Astral Plane",
        "Allows precise navigation between planes (3x faster travel)",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Massive Apparatus',
        levelRequirement: 18
    },
    'oracula_divine_mediation': {
        id: 'oracula_divine_mediation',
        name: "Oracula Divine Mediation",
        description: "A high priest contacts a specific minor deity on your behalf to resolve a dispute.",
        category: SHOP_CATEGORIES: 'services',
        price: 220000,
        icon: '⚖️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Mediates a conflict between two non-god entities (e.g., two factions or powerful NPCs)",
        "Deity’s judgment is binding and final",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Holy Delegation',
        levelRequirement: 16
    },
    'halfling_bank_loan_master': {
        id: 'halfling_bank_loan_master',
        name: "Halfling Bank Loan Master (Instant 1M)",
        description: "Instantly secure a 1,000,000 gp loan from the Halfling Bank, payable in 5 years with 10% interest.",
        category: SHOP_CATEGORIES: 'premium',
        price: 50000,
        icon: '💰',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Receive 1,000,000 gp instantly",
        "Failure to repay results in severe debt collection (DM discretion)",
            "Made by: Halfling"
        ],
        vendor: 'halfling_bank',
        shippedBy: 'Money Bag Delivery',
        levelRequirement: 10
    },
    'refijia_personality_script': {
        id: 'refijia_personality_script',
        name: "Refijian Personality Script",
        description: "Load a completely new set of behavioral traits and mannerisms onto an existing synthetic host.",
        category: SHOP_CATEGORIES: 'services',
        price: 150000,
        icon: '💾',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Completely rewrite the personality of 1 construct or automaton",
        "Scripting takes 2 weeks",
            "Made by: Refijia"
        ],
        vendor: 'refijian_lab',
        shippedBy: 'Data Upload',
        levelRequirement: 14
    },
    'shanhaijing_jade_armor_plates': {
        id: 'shanhaijing_jade_armor_plates',
        name: "Shanhaijing Jade Armor Plates (Set)",
        description: "A full set of armor plates carved from solidified mountain jade. Light, strong, and spiritually protective.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 450000,
        icon: '🛡️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Functions as Heavy Armor (AC 18), provides +1 to all saves vs. enchantment spells",
        "Loses 1 AC if exposed to open flame for more than 1 minute",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Armored Pallet',
        levelRequirement: 17
    },
    'u_system_rollback_service': {
        id: 'u_system_rollback_service',
        name: "U System Rollback Service (Regional)",
        description: "Force a network-wide system rollback, undoing recent digital changes in a region.",
        category: SHOP_CATEGORIES: 'services',
        price: 500000,
        icon: '⏪',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Revert all data/security changes in a 5-mile radius to 24 hours prior",
        "Requires physical tap into the central 'U' node",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'System Override',
        levelRequirement: 16
    },
    'zebrabwe_herbal_antivenom': {
        id: 'zebrabwe_herbal_antivenom',
        name: "Zebrabwe Great Herd Antivenom",
        description: "A powerful herb-based serum effective against the deadliest apex predator venoms.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 30000,
        icon: '🧪',
        stock: 6,
        rarity: 'epic',
        effects: [
            "Instantly neutralize any non-magical poison/venom (CON save DC 18)",
        "Heals 4d6 damage caused by venom",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Clay Vial',
        levelRequirement: 7
    },
    'robensonia_nanite_swarm': {
        id: 'robensonia_nanite_swarm',
        name: "Robensonia Nanite Swarm (Defensive)",
        description: "A cloud of microscopic robots programmed to swarm and repair or defend.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 420000,
        icon: '🔬',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Swarm covers one ally, granting them +5 AC and resistance to all non-Force damage for 1 hour",
        "Swarm dissolves after use; requires 1 month to regenerate nanites",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Small Sphere',
        levelRequirement: 16
    },
    'tomb_kings_royal_chariot': {
        id: 'tomb_kings_royal_chariot',
        name: "Tomb Kings Royal Necro-Chariot",
        description: "A chariot pulled by skeletal horses, fueled by captured souls.",
        category: SHOP_CATEGORIES: 'faction',
        price: 290000,
        icon: '🐎',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "AC 16, Speed 60ft (land)",
        "Requires 1 soul sacrifice/day to maintain speed and undead crew",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Procession',
        levelRequirement: 12,
        factionBonus: { transport: 70 }
    },
    'gehenna_devil_contract_template': {
        id: 'gehenna_devil_contract_template',
        name: "Gehenna Devil Contract Template (Flawless)",
        description: "A master-level template for creating inescapable contracts with devils.",
        category: SHOP_CATEGORIES: 'premium',
        price: 600000,
        icon: '🖋️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Guarantees any signed contract written using this template is eternally binding on the devil side",
        "Devils fear using these against you",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Bound in Silver',
        levelRequirement: 18
    },
    'red_winter_eternal_ice_mine': {
        id: 'red_winter_eternal_ice_mine',
        name: "Red Winter Eternal Ice Mine",
        description: "A portable mining device that drills into bedrock and instantly converts stone to pure, magical ice.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 330000,
        icon: '💎',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Mines 10 tons of magical ice per hour",
        "Ice can be used for powerful cold magic or construction",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Heavy Transport',
        levelRequirement: 15
    },
    'dwarf_realms_under_city_deed': {
        id: 'dwarf_realms_under_city_deed',
        name: "Dwarven Under-City Deed (Sector 7)",
        description: "Ownership of a pre-built, protected section of a major Dwarven metropolis.",
        category: SHOP_CATEGORIES: 'faction',
        price: 750000,
        icon: '🏰',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Permanent residency in a major underground capital",
        "Full citizenship rights and access to royal forges",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Formal Declaration',
        levelRequirement: 18,
        factionBonus: { residence: 100 }
    },
    'custodian_singularity_weapon': {
        id: 'custodian_singularity_weapon',
        name: "Custodian Singularity Generator (Anti-Matter)",
        description: "A weapon that generates a miniature, contained black hole for a fraction of a second.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 990000,
        icon: '⚫',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Single use: Instantly vaporizes all matter in a 20ft radius (deals 50d10 Force damage)",
        "Weapon is destroyed upon firing",
            "Made by: Custodians (Stolen Tech)"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Containment Unit',
        levelRequirement: 20
    },
    'dk_crew_smuggling_route': {
        id: 'dk_crew_smuggling_route',
        name: "DK Crew Smuggling Route (Exclusive)",
        description: "Exclusive rights to use a secret maritime route bypassing naval blockades.",
        category: SHOP_CATEGORIES: 'services',
        price: 150000,
        icon: '⚓',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Guaranteed 100% safe passage for 1 ship/cargo shipment per month",
        "Route runs through non-magical, obscure waters",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Waxed Seal',
        levelRequirement: 14
    },
    'spark_rebellion_network_shutdown': {
        id: 'spark_rebellion_network_shutdown',
        name: "Spark Rebellion Network Shutdown (Major City)",
        description: "A massive virus payload designed to crash an entire regional data/communication grid.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 400000,
        icon: '💥',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Shuts down all non-magical communication/tracking systems in a major city for 7 days",
        "Can be traced back to the user if physical hardware is left behind",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Black Ice Drive',
        levelRequirement: 15
    },
    'sultanates_araby_time_stasis_field': {
        id: 'sultanates_araby_time_stasis_field',
        name: "Sultanates of Araby Time Stasis Field (Small)",
        description: "A large device that freezes time within a small area for temporary storage.",
        category: SHOP_CATEGORIES: 'premium',
        price: 650000,
        icon: '⏱️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Enclose 1 object/person in a 5ft sphere where time stops indefinitely",
        "Requires 1 hour to calibrate and 1 major sacrifice to activate",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Massive Clockwork',
        levelRequirement: 17
    },
    'animatopia_bio_weapon_research': {
        id: 'animatopia_bio_weapon_research',
        name: "Animatopia Bio-Weapon Research (Custom)",
        description: "Hire Animatopia scientists to engineer a disease tailored to kill a specific creature type.",
        category: SHOP_CATEGORIES: 'services',
        price: 350000,
        icon: '🦠',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Develop a biologically-targeted plague effective against 1 specific race/monster type",
        "Requires sample DNA/tissue of the target species",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Lab Report',
        levelRequirement: 15
    },
    'eiwass_cosmic_armor_plating': {
        id: 'eiwass_cosmic_armor_plating',
        name: "Eiwass Cosmic Armor Plating",
        description: "Thin, flexible plating harvested from the hull of a crashed star vessel. Lightweight and nearly impenetrable.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 550000,
        icon: '⭐',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Functions as Medium Armor (AC 19, weight is negligible)",
        "Immunity to radiation and vacuum damage",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Floating Crate',
        levelRequirement: 18
    },
    'oracula_divine_ascension': {
        id: 'oracula_divine_ascension',
        name: "Oracula Divine Ascension Ritual",
        description: "A final, dangerous ritual to temporarily elevate a mortal to minor deity status.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 1500000,
        icon: '😇',
        stock: 1,
        rarity: 'godly',
        effects: [
            "User gains divine power (DM discretion) for 24 hours",
        "Requires massive, ethically questionable sacrifice",
        "After ascension ends, user suffers 3 permanent levels of exhaustion"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Final Summons',
        levelRequirement: 20
    },
    'halfling_bank_vault_lease': {
        id: 'halfling_bank_vault_lease',
        name: "Halfling Bank Vault Lease (Maximum Security)",
        description: "Rent the deepest, most magically warded vault in the Halfling underground for 1 year.",
        category: SHOP_CATEGORIES: 'premium',
        price: 150000,
        icon: '🔒',
        stock: 3,
        rarity: 'epic',
        effects: [
            "Vault is immune to all scrying, teleportation, and physical breaking attempts",
        "Can safely store 1 artifact of Godly power",
            "Made by: Halfling"
        ],
        vendor: 'halfling_bank',
        shippedBy: 'Key Exchange',
        levelRequirement: 12
    },
    'refijia_personality_reset': {
        id: 'refijia_personality_reset',
        name: "Refijian Personality Reset (Self-Administered)",
        description: "A device that scrubs all personality modifications, returning the host to factory settings.",
        category: SHOP_CATEGORIES: 'services',
        price: 10000,
        icon: '🧽',
        stock: 10,
        rarity: 'rare',
        effects: [
            "Erases all recent personality modifications/traumas (except permanent stat changes)",
        "Requires 12 hours of downtime",
            "Made by: Refijia"
        ],
        vendor: 'refijian_lab',
        shippedBy: 'Self-Service Terminal',
        levelRequirement: 4
    },
    'shanhaijing_jade_armor_repair': {
        id: 'shanhaijing_jade_armor_repair',
        name: "Shanhaijing Jade Armor Repair",
        description: "Specialized ritual to restore Jade Armor damaged by fire or elemental erosion.",
        category: SHOP_CATEGORIES: 'services',
        price: 75000,
        icon: '⚒️',
        stock: 5,
        rarity: 'legendary',
        effects: [
            "Fully restore any Shanhaijing Jade Armor set",
        "Ritual requires rare volcanic earth components (additional cost)",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Expert Craftsman',
        levelRequirement: 14
    },
    'u_digital_ghost_program_army': {
        id: 'u_digital_ghost_program_army',
        name: "U Digital Ghost Army (5 Profiles)",
        description: "Five high-level, untraceable digital identities for industrial espionage.",
        category: SHOP_CATEGORIES: 'premium',
        price: 450000,
        icon: '👻',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Deploy 5 digital infiltrators simultaneously for 1 month",
        "Profiles are capable of administrative sabotage",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Massive Upload',
        levelRequirement: 16
    },
    'zebrabwe_herd_alliance': {
        id: 'zebrabwe_herd_alliance',
        name: "Zebrabwe Great Herd Military Alliance",
        description: "Formal agreement for the Zebrabwe herds to provide military support in major conflicts.",
        category: SHOP_CATEGORIES: 'faction',
        price: 500000,
        icon: '⚔️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Summon 2,000 allied Zebra cavalry in a 10-mile radius (once per year)",
        "Cavalry is highly effective against unmounted foes",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Tribal Chieftain',
        levelRequirement: 15,
        factionBonus: { military: 80 }
    },
    'robensonia_orbital_scanner': {
        id: 'robensonia_orbital_scanner',
        name: "Robensonia Orbital Scanner Access",
        description: "Hire the Robensonian orbital satellite network to map a massive area (1,000 sq miles).",
        category: SHOP_CATEGORIES: 'services',
        price: 300000,
        icon: '🛰️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "High-resolution mapping of a massive region (including hidden fortifications)",
        "Scans for energy signatures and anomalies",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Satellite Uplink',
        levelRequirement: 14
    },
    'tomb_kings_necrotic_infusion': {
        id: 'tomb_kings_necrotic_infusion',
        name: "Tomb Kings Necrotic Infusion (Weapon)",
        description: "A service that permanently infuses a weapon with soul-draining energy.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 220000,
        icon: '💀',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Weapon deals an additional 2d8 Necrotic damage",
        "Wielder gains temporary HP equal to half the necrotic damage dealt",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Obsidian Tool',
        levelRequirement: 14
    },
    'gehenna_archdevil_treaty': {
        id: 'gehenna_archdevil_treaty',
        name: "Gehenna Archdevil Treaty (Minor Concession)",
        description: "A signed treaty securing a non-aggression pact with a lesser Archdevil for 5 years.",
        category: SHOP_CATEGORIES: 'premium',
        price: 950000,
        icon: '📜',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Archdevil agrees not to interfere with your plans or send agents for 5 years",
        "Treaty requires a massive annual tribute of 50,000 gp or 10,000 souls",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Sealed Scroll of Fire',
        levelRequirement: 19
    },
    'red_winter_glacier_creation': {
        id: 'red_winter_glacier_creation',
        name: "Red Winter Glacier Creation",
        description: "Summon a small, permanent glacier to rise out of the earth in a chosen location.",
        category: SHOP_CATEGORIES: 'premium',
        price: 800000,
        icon: '🏔️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Create a permanent, magically stable glacier (1 square mile)",
        "Glacier is immune to all external temperature changes",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Giant Ice Block',
        levelRequirement: 17
    },
    'dwarf_realms_master_runesmith': {
        id: 'dwarf_realms_master_runesmith',
        name: "Dwarven Master Runesmith (Hire)",
        description: "Hire the greatest living runesmith to permanently inscribe protection runes on your stronghold.",
        category: SHOP_CATEGORIES: 'services',
        price: 180000,
        icon: '⚒️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Inscribe permanent wards: stronghold gains +20 HP/day and resistance to siege weaponry",
        "Runesmith requires 6 months and rare minerals (cost not included)",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Guild Escort',
        levelRequirement: 15
    },
    'custodian_galaxy_projector': {
        id: 'custodian_galaxy_projector',
        name: "Custodian Galaxy Projector",
        description: "Projects a perfect, real-time 3D map of the known galaxy, including hidden warp points.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 450000,
        icon: '🪐',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Grants immediate knowledge of all known warp points and major civilizations",
        "Allows plotting of multi-jump interstellar travel paths",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Massive Shipping',
        levelRequirement: 18
    },
    'dk_crew_jungle_assault_vehicle': {
        id: 'dk_crew_jungle_assault_vehicle',
        name: "DK Crew Jungle Assault Vehicle (Modified Mine Cart)",
        description: "A heavily armored, self-propelled mine cart with cannons and nets.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 95000,
        icon: '🚂',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "AC 20, 200 HP vehicle (Land Speed 50ft)",
        "Mounted twin cannons (2d10 AoE Fire, 3/day)",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Rail Delivery',
        levelRequirement: 10
    },
    'spark_rebellion_data_clone': {
        id: 'spark_rebellion_data_clone',
        name: "Spark Rebellion Data Clone (Identity Backup)",
        description: "A complete, encrypted backup of your current identity and core memory structure.",
        category: SHOP_CATEGORIES: 'premium',
        price: 300000,
        icon: '👤',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "If killed, consciousness transfers back to a generic body (takes 1 week)",
        "Clone is slightly corrupted (-1 to a random score)",
            "Made by: Spark Rebellion"
        ],
        vendor: 'spark_rebellion_safehouse',
        shippedBy: 'Digital Vault',
        levelRequirement: 14
    },
    'sultanates_araby_desert_war_beast': {
        id: 'sultanates_araby_desert_war_beast',
        name: "Sultanates of Araby War-Scorpion Mount",
        description: "A gigantic, magically controlled desert scorpion trained for battle.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 400000,
        icon: '🦂',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Mount: AC 17, HP 150, Speed 50ft (Desert terrain ignored)",
        "Stinger attack deals 3d6 + 3d6 Poison damage (DC 17 CON save)",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Tamed Beast',
        levelRequirement: 15
    },
    'animatopia_symbiotic_armor': {
        id: 'animatopia_symbiotic_armor',
        name: "Animatopia Symbiotic Armor",
        description: "A living, fast-growing carapace that adapts its density to incoming threats.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 600000,
        icon: '🦑',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Base AC 16. Gains +1 AC vs. the last damage type dealt to it, up to +4 total (lasts 1 hour)",
        "Requires organic nutrients (food) daily",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Vat of Fluid',
        levelRequirement: 18
    },
    'eiwass_void_shroud': {
        id: 'eiwass_void_shroud',
        name: "Eiwass Void Shroud",
        description: "A cloak woven from darkness between dimensions. Cannot be targeted by divination.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 450000,
        icon: '⚫',
        stock: 2,
        rarity: 'godly',
        effects: [
            "Invisible to all scrying, divination magic, and technological sensors",
        "Advantage on saves vs. effects originating from other planes",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Dimensional Box',
        levelRequirement: 17
    },
    'oracula_prophet_ascension': {
        id: 'oracula_prophet_ascension',
        name: "Oracula Prophet Ascension (Minor)",
        description: "A permanent grant of minor prophetic insight from the Oracula hierarchy.",
        category: SHOP_CATEGORIES: 'faction',
        price: 550000,
        icon: '🔮',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Once per day, gain a truthful vision of events 1 hour in the future",
        "Grants +2 to all Insight and Perception checks",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'High Ceremony',
        levelRequirement: 16,
        factionBonus: { insight: 30 }
    },
    'halfling_tax_exemption_deed': {
        id: 'halfling_tax_exemption_deed',
        name: "Halfling Tax Exemption Deed (Lifetime)",
        description: "Official papers exempting all your current and future assets from Halfling taxation.",
        category: SHOP_CATEGORIES: 'premium',
        price: 250000,
        icon: '📜',
        stock: 3,
        rarity: 'epic',
        effects: [
            "Permanent tax-free status in all Halfling-controlled settlements",
        "Can be used once to pardon a debt",
            "Made by: Halfling"
        ],
        vendor: 'halfling_bank',
        shippedBy: 'Sealed Book',
        levelRequirement: 13
    },
    'refijia_synthetic_clone': {
        id: 'refijia_synthetic_clone',
        name: "Refijian Synthetic Clone (Emergency)",
        description: "A perfectly matched synthetic clone, ready for consciousness transfer upon the original's death.",
        category: SHOP_CATEGORIES: 'premium',
        price: 450000,
        icon: '👥',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "If original dies, consciousness transfers instantly to the clone (no time loss)",
        "Clone has basic Refijian enhancements (+1 to all scores)",
            "Made by: Refijia"
        ],
        vendor: 'refijian_lab',
        shippedBy: 'Life Support Unit',
        levelRequirement: 16
    },
    'shanhaijing_celestial_portal_stone': {
        id: 'shanhaijing_celestial_portal_stone',
        name: "Shanhaijing Celestial Portal Stone",
        description: "A stone that anchors the user to the path of Celestial Dragons, allowing safe passage to the heavens.",
        category: SHOP_CATEGORIES: 'premium',
        price: 700000,
        icon: '☁️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Allows safe, permanent travel to Celestial Realms (DM approval needed)",
        "User gains resistance to Radiant damage",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Cloud Casket',
        levelRequirement: 19
    },
    'u_network_overthrow_code': {
        id: 'u_network_overthrow_code',
        name: "U Network Overthrow Code (Total Blackout)",
        description: "A master override capable of initiating a complete, unrecoverable shutdown of the entire U network.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 2000000,
        icon: '⚫',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Instantly wipes the entire U network, resetting civilization progress by decades",
        "The user will become the most wanted entity in the digital world",
            "Made by: U (Traitorous Programmer)"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Quantum Drive',
        levelRequirement: 20
    },
    'zebrabwe_predator_calming_smoke': {
        id: 'zebrabwe_predator_calming_smoke',
        name: "Zebrabwe Predator Calming Smoke (Large)",
        description: "A massive bundle of herbs that releases a scent masking you from all large carnivores for a full day.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 40000,
        icon: '💨',
        stock: 5,
        rarity: 'epic',
        effects: [
            "All natural predators ignore you for 24 hours, even if attacked",
        "Smoke clears a 1-mile radius of danger",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Huge Bundle',
        levelRequirement: 8
    },
    'robensonia_sentient_fleet_access': {
        id: 'robensonia_sentient_fleet_access',
        name: "Robensonia Sentient Fleet Access (1 Ship)",
        description: "Temporary command codes to commandeer one fully automated, combat-ready Robensonian scout ship.",
        category: SHOP_CATEGORIES: 'faction',
        price: 750000,
        icon: '🚀',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Command of a ship: AC 22, HP 500, Full Weapon Systems (DM details)",
        "Ship obeys for 7 days before returning to Robensonia control",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Control Unit',
        levelRequirement: 18,
        factionBonus: { transport: 200 }
    },
    'tomb_kings_soul_jar_extraction': {
        id: 'tomb_kings_soul_jar_extraction',
        name: "Tomb Kings Soul Jar Extraction Service",
        description: "Service to extract a bound soul from a jar and bind it to a new vessel (i.e., a fresh skeleton).",
        category: SHOP_CATEGORIES: 'services',
        price: 120000,
        icon: '⚱️',
        stock: 4,
        rarity: 'legendary',
        effects: [
            "Successfully re-animate a powerful undead using a trapped soul",
        "Ritual requires 24 hours and risks attracting rival necromancers",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Enchanted Vessel',
        levelRequirement: 14
    },
    'gehenna_devil_hire_bodyguard': {
        id: 'gehenna_devil_hire_bodyguard',
        name: "Gehenna Devil Bodyguard Hire (1 Month)",
        description: "Hire a competent, mid-tier devil bodyguard for 30 days.",
        category: SHOP_CATEGORIES: 'services',
        price: 180000,
        icon: '😈',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Devil (CR 8-10) protects you and follows orders for 1 month",
        "Devil requires 1 monthly tithe of 10 'lesser' souls",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Contract Escort',
        levelRequirement: 13
    },
    'red_winter_thawing_agent': {
        id: 'red_winter_thawing_agent',
        name: "Red Winter Thawing Agent (Large Scale)",
        description: "A powerful chemical that rapidly melts ice and snow in a vast area.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 150000,
        icon: '🔥',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Melts all ice/snow in a 1-mile radius, causing flooding or landslides",
        "Takes 1 hour to deploy",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Tanker Truck',
        levelRequirement: 14
    },
    'dwarf_realms_gold_claim_deed': {
        id: 'dwarf_realms_gold_claim_deed',
        name: "Dwarven Gold Claim Deed (Rich Vein)",
        description: "Ownership papers to a known, rich vein of pure gold ore deep in the mountains.",
        category: SHOP_CATEGORIES: 'faction',
        price: 280000,
        icon: '💰',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Guaranteed yield of 50,000 gp worth of gold over 1 year",
        "Claim must be actively defended from other miners",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Legal Documentation',
        levelRequirement: 10,
        factionBonus: { economy: 50 }
    },
    'custodian_self_repair_nanites': {
        id: 'custodian_self_repair_nanites',
        name: "Custodian Self-Repair Nanite Cloud (Armor)",
        description: "Nanites that coat your armor, constantly reinforcing molecular bonds.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 150000,
        icon: '🤖',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Your equipped armor gains +1 AC and ignores the first source of critical failure once per day",
        "Requires a recharge station every 30 days",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Small Drone',
        levelRequirement: 12
    },
    'dk_crew_island_fortification': {
        id: 'dk_crew_island_fortification',
        name: "DK Crew Jungle Island Fortification",
        description: "Expert Kremling engineers fortify your chosen small island/base with traps and defenses.",
        category: SHOP_CATEGORIES: 'faction',
        price: 120000,
        icon: '🌴',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Base gains +50 HP and is defended by 3 permanent traps (DM choice)",
        "Fortifications are heavily themed (barrels, vines, etc.)",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Engineering Team',
        levelRequirement: 10,
        factionBonus: { defense: 60 }
    },
    'spark_rebellion_data_theft': {
        id: 'spark_rebellion_data_theft',
        name: "Spark Rebellion Data Theft (Rival Archive)",
        description: "A targeted hack to steal the most recent 1 year of sensitive archived data from a rival faction.",
        category: SHOP_CATEGORIES: 'services',
        price: 200000,
        icon: '💿',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Steal 1 year of sensitive data from target faction's main servers",
        "Data delivered securely, but success is 80% guaranteed",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Encrypted Transfer',
        levelRequirement: 14
    },
    'sultanates_araby_bodyguard_legion': {
        id: 'sultanates_araby_bodyguard_legion',
        name: "Sultanates Bodyguard Legion (50 Elite)",
        description: "Hire 50 elite, magically protected desert warriors sworn to protect a specific objective or person.",
        category: SHOP_CATEGORIES: 'services',
        price: 450000,
        icon: '🛡️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "50 Elite guards (CR 1) provided for 1 month of dedicated protection",
        "Guards are immune to exhaustion from desert conditions",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Military Convoy',
        levelRequirement: 13
    },
    'animatopia_hybridization_guide': {
        id: 'animatopia_hybridization_guide',
        name: "Animatopia Hybridization Guide (Advanced)",
        description: "Detailed instructions on safely combining DNA from two different apex species.",
        category: SHOP_CATEGORIES: 'services',
        price: 300000,
        icon: '🧬',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Use to create a custom, stable hybrid creature (DM determines stats)",
        "Requires rare flora/fauna components",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Bound Text',
        levelRequirement: 16
    },
    'eiwass_dimensional_anchor': {
        id: 'eiwass_dimensional_anchor',
        name: "Eiwass Personal Dimensional Anchor",
        description: "A bracelet that prevents the wearer from being forcibly planar shifted or banished.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 250000,
        icon: '⚓',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Immunity to banishment and forced planar travel",
        "Advantage on saves vs. planar magic",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Tungsten Case',
        levelRequirement: 15
    },
    'oracula_divine_consecration': {
        id: 'oracula_divine_consecration',
        name: "Oracular Divine Consecration (Small Area)",
        description: "Consecrate a building or shrine, making it a safe haven blessed by a neutral deity.",
        category: SHOP_CATEGORIES: 'services',
        price: 100000,
        icon: '⛪',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Area (1 building) becomes protected from Evil outsider entry (DC 18 banishment)",
        "Deals 2d6 radiant damage to any fiend attempting entry",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Consecration Ritual',
        levelRequirement: 11
    },
    'halfling_debt_forgiveness': {
        id: 'halfling_debt_forgiveness',
        name: "Halfling Debt Forgiveness (Minor)",
        description: "Wipes a small, non-magical financial debt (up to 50,000 gp) owed to a Halfling entity.",
        category: SHOP_CATEGORIES: 'services',
        price: 60000,
        icon: '❌',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Erases a single specified debt ledger entry",
        "Debt must be financial, not soul-based",
            "Made by: Halfling"
        ],
        vendor: 'halfling_bank',
        shippedBy: 'Official Stamping',
        levelRequirement: 8
    },
    'refijia_consciousness_backup': {
        id: 'refijia_consciousness_backup',
        name: "Refijian Consciousness Backup (Manual)",
        description: "A slow, manual process to back up your core memories onto a crystalline shard.",
        category: SHOP_CATEGORIES: 'premium',
        price: 250000,
        icon: '💾',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Backup of memories stored for 1 year",
        "In case of death, memories can be uploaded into a new body/clone (takes 1 week)",
            "Made by: Refijia"
        ],
        vendor: 'refijian_lab',
        shippedBy: 'Intense Procedure',
        levelRequirement: 14
    },
    'shanhaijing_celestial_dragon_ally': {
        id: 'shanhaijing_celestial_dragon_ally',
        name: "Shanhaijing Celestial Dragon Ally (Temporary Pact)",
        description: "A pact securing the aid of a minor Celestial Dragon for one major crisis.",
        category: SHOP_CATEGORIES: 'premium',
        price: 900000,
        icon: '🐉',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Dragon provides tactical aid or a single, devastating breath attack (once)",
        "Pact lasts 24 hours or until dragon uses its power",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Heavenly Summons',
        levelRequirement: 19
    },
    'u_digital_immortality_voucher': {
        id: 'u_digital_immortality_voucher',
        name: "U Digital Immortality Voucher (Future Use)",
        description: "A voucher guaranteeing you a spot in the U Data Heaven upon biological death.",
        category: SHOP_CATEGORIES: 'premium',
        price: 800000,
        icon: '😇',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Upon natural death, consciousness is uploaded to the U network",
        "Digital life expectancy: 10,000 years (until system reset)",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Lifetime Pass',
        levelRequirement: 18
    },
    'zebrabwe_herbivore_call': {
        id: 'zebrabwe_herbivore_call',
        name: "Zebrabwe Herbivore Call (Massive Herd)",
        description: "Summons an enormous migratory herd (100+ creatures) to stampede across a targeted area.",
        category: SHOP_CATEGORIES: 'faction',
        price: 250000,
        icon: '🐘',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Herd flattens 1 square mile of terrain and deals 10d6 Trample damage to anything remaining",
        "Herd passes in 1 hour",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Master Whistle',
        levelRequirement: 14,
        factionBonus: { destruction: 70 }
    },
    'robensonia_fleet_dispatch': {
        id: 'robensonia_fleet_dispatch',
        name: "Robensonia Automated Fleet Dispatch",
        description: "Dispatch 3 mid-sized attack drones (CR 5 each) to eliminate targets or defend an area.",
        category: SHOP_CATEGORIES: 'faction',
        price: 450000,
        icon: '🛸',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "3 Combat Drones arrive in 1d4 hours, obey commands for 48 hours",
        "Drones are fully armed with plasma weapons",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Command Signal',
        levelRequirement: 15,
        factionBonus: { combatReadiness: 80 }
    },
    'tomb_kings_canopic_collection': {
        id: 'tomb_kings_canopic_collection',
        name: "Tomb Kings Canopic Collection (Standard)",
        description: "A set of 4 jars that safely store the organs of a high-ranking noble, ensuring proper reanimation.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 70000,
        icon: '🏺',
        stock: 3,
        rarity: 'epic',
        effects: [
            "If a Noble/Hero dies near the jars, their soul is preserved for ritual use",
        "Jars are warded against thieves (magical alarm)",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Stone Crate',
        levelRequirement: 9
    },
    'gehenna_relic_smuggling': {
        id: 'gehenna_relic_smuggling',
        name: "Gehenna Relic Smuggling Service",
        description: "The Academy uses its own agents to smuggle one divine or heavily warded artifact across hostile borders.",
        category: SHOP_CATEGORIES: 'services',
        price: 200000,
        icon: '📦',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Move 1 artifact past any non-divine blockade without inspection",
        "Smugglers risk execution if caught",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'High Risk',
        levelRequirement: 15
    },
    'red_winter_deep_freeze_bomb': {
        id: 'red_winter_deep_freeze_bomb',
        name: "Red Winter Deep Freeze Bomb",
        description: "A device that instantly lowers the temperature in an area to near absolute zero.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 450000,
        icon: '❄️',
        stock: 2,
        rarity: 'godly',
        effects: [
            "100ft radius blast: creatures must succeed on DC 20 CON save or instantly perish from flash freezing",
        "All structures in radius become brittle and prone to collapse",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Insulated Bomb',
        levelRequirement: 18
    },
    'dwarf_realms_magical_ore_supply': {
        id: 'dwarf_realms_magical_ore_supply',
        name: "Dwarven Magical Ore Supply (Adamantine)",
        description: "A full ton of pure, refined Adamantine ore, enough for major construction or legendary weapon forging.",
        category: SHOP_CATEGORIES: 'premium',
        price: 900000,
        icon: '💎',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Enough material to craft 2 pieces of Legendary Armor or 3 weapons",
        "Ore cannot be damaged or transmuted by magic",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Deep Tunnel Transport',
        levelRequirement: 18
    },
    'custodian_universal_translator': {
        id: 'custodian_universal_translator',
        name: "Custodian Universal Translator",
        description: "A small earpiece that interfaces directly with the universal linguistic matrix.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 180000,
        icon: '👂',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Perfect, real-time translation of all known (and many unknown) languages/symbols",
        "Includes dead languages and primal beast speech",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Earbud Case',
        levelRequirement: 13
    },
    'dk_crew_volcanic_pass': {
        id: 'dk_crew_volcanic_pass',
        name: "DK Crew Volcanic Pass",
        description: "A map and coded access that allows safe travel through the active volcanic regions controlled by Kremlings.",
        category: SHOP_CATEGORIES: 'services',
        price: 70000,
        icon: '🌋',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Guaranteed safe passage through one hostile volcanic territory (48 hours)",
        "Kremling guards will ignore your passage",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Burned Map',
        levelRequirement: 9
    },
    'spark_rebellion_information_broker': {
        id: 'spark_rebellion_information_broker',
        name: "Spark Rebellion Information Broker (Deep Dive)",
        description: "Access to the Rebellion’s deepest network for information on any single target or conspiracy.",
        category: SHOP_CATEGORIES: 'services',
        price: 150000,
        icon: '🕵️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Obtain total dossier on any rival (weaknesses, finances, secrets)",
        "Information is 100% accurate but sourcing is dangerous",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Physical Drive',
        levelRequirement: 12
    },
    'sultanates_araby_anti_magic_tent': {
        id: 'sultanates_araby_anti_magic_tent',
        name: "Sultanates Anti-Magic Tent",
        description: "A ceremonial tent woven with runes that nullify low-to-mid level magical effects.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 120000,
        icon: '⛺',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Anyone sleeping inside is immune to magical sleep, scrying, and mental attack",
        "Nullifies all active spell effects within the tent (20ft radius)",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Wrapped Tent',
        levelRequirement: 11
    },
    'animatopia_stable_mutagen': {
        id: 'animatopia_stable_mutagen',
        name: "Animatopia Stable Mutagen (Controlled)",
        description: "A liquid that induces temporary, beneficial, and stable mutations (e.g., wings, claws).",
        category: SHOP_CATEGORIES: 'consumables',
        price: 110000,
        icon: '🧪',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "User gains 1 specific physical enhancement (e.g., wings for flight 1 hr, claws 2d8 damage)",
        "Enhancement is stable, but fades slowly over 24 hours",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Refrigerated Canister',
        levelRequirement: 13
    },
    'eiwass_dimensional_shield': {
        id: 'eiwass_dimensional_shield',
        name: "Eiwass Personal Dimensional Shield",
        description: "A small device that phases you slightly out of reality, making you half-tangible.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 280000,
        icon: '🛡️',
        stock: 2,
        rarity: 'godly',
        effects: [
            "As a reaction, gain resistance to all physical damage for 1 round (3/day)",
        "User phases slightly (advantage on saves vs. magic)",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Quantum Box',
        levelRequirement: 15
    },
    'oracula_high_prophet_training': {
        id: 'oracula_high_prophet_training',
        name: "Oracula High Prophet Training (Apprenticeship)",
        description: "Train personally under a true Prophet of the Oracula for 6 months.",
        category: SHOP_CATEGORIES: 'services',
        price: 350000,
        icon: '🙏',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Gain permanent proficiency in Divination/Insight; learn 1 epic divination spell",
        "Gain the permanent 'Visionary' trait (+1 to all future prophecy/luck rolls)",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Spiritual Pilgrimage',
        levelRequirement: 17
    },
    'halfling_political_bloc_backing': {
        id: 'halfling_political_bloc_backing',
        name: "Halfling Political Bloc Backing (Major City)",
        description: "Secure the voting power of a major Halfling political bloc in one specific city council vote.",
        category: SHOP_CATEGORIES: 'faction',
        price: 190000,
        icon: '🏛️',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Guaranteed win on one major civic vote (e.g., zoning, taxation)",
        "Bloc demands a small, manageable political favor in return",
            "Made by: Halfling"
        ],
        vendor: 'halfling_community',
        shippedBy: 'Secret Ballot',
        levelRequirement: 11,
        factionBonus: { politics: 50 }
    },
    'refijia_android_chassis': {
        id: 'refijia_android_chassis',
        name: "Refijian Hyper-Durable Android Chassis",
        description: "An empty, durable synthetic body capable of housing a conscious mind or AI.",
        category: SHOP_CATEGORIES: 'premium',
        price: 500000,
        icon: '🤖',
        stock: 1,
        rarity: 'godly',
        effects: [
            "AC 20 (natural armor), Immunity to Poison/Disease, no CON or aging effects",
        "Requires consciousness transfer/AI installation (additional cost)",
            "Made by: Refijia"
        ],
        vendor: 'refijian_lab',
        shippedBy: 'Stasis Pod',
        levelRequirement: 18
    },
    'shanhaijing_ancestral_vessel': {
        id: 'shanhaijing_ancestral_vessel',
        name: "Shanhaijing Ancestral Vessel (Embodied Spirit)",
        description: "A ritualistic vessel that can house the spirit of a worthy ancestor for consultation.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 650000,
        icon: '🏺',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Summons a specific, powerful ancestral spirit (CR 12) for 1 hour/week",
        "Spirit grants expertise in one historical or martial field",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Gilded Urn',
        levelRequirement: 17
    },
    'u_global_killswitch_code': {
        id: 'u_global_killswitch_code',
        name: "U Global Killswitch Code (Digital Pandemic)",
        description: "A code that forces every single piece of U technology globally to cease functioning permanently.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 3000000,
        icon: '💀',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Total, irreversible digital apocalypse for the U faction",
        "Code takes 1 minute to execute (vulnerable during execution)",
            "Made by: U (Traitor)"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Quantum Bomb',
        levelRequirement: 20
    },
    'zebrabwe_herbal_restoration': {
        id: 'zebrabwe_herbal_restoration',
        name: "Zebrabwe Herbal Restoration (Major)",
        description: "A massive herbal poultice that rapidly heals grievous, widespread injuries.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 150000,
        icon: '🌿',
        stock: 4,
        rarity: 'legendary',
        effects: [
            "Apply to one target: instantly regains max HP, cures all diseases and poisons",
        "Target must be unconscious or restrained for application",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Giant Basket',
        levelRequirement: 14
    },
    'robensonia_sentient_weapon_platform': {
        id: 'robensonia_sentient_weapon_platform',
        name: "Robensonian Sentient Weapon Platform",
        description: "A self-guided, modular turret system with basic combat AI.",
        category: SHOP_CATEGORIES: 'faction',
        price: 650000,
        icon: '🔫',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Permanent defense fixture; operates autonomously",
        "Possesses a high-powered laser cannon (20d6 radiant, 1/day)",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Crate Delivery',
        levelRequirement: 17,
        factionBonus: { defense: 100 }
    },
    'tomb_kings_lich_advisor': {
        id: 'tomb_kings_lich_advisor',
        name: "Tomb Kings Lich Advisor (Contract)",
        description: "A powerful, ancient Lich bound by contract to offer counsel and necromantic support.",
        category: SHOP_CATEGORIES: 'services',
        price: 500000,
        icon: '💀',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Lich acts as advisor (INT 22) and can assist in 1 powerful necromantic rite per month",
        "Lich demands high payment in souls or magical power",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Ceremonial Escort',
        levelRequirement: 18
    },
    'gehenna_plague_vector': {
        id: 'gehenna_plague_vector',
        name: "Gehenna Plague Vector Vial",
        description: "A vial containing a fast-acting, magically engineered disease targeting one specific race.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 650000,
        icon: '🦠',
        stock: 2,
        rarity: 'godly',
        effects: [
            "Infects target race/creature type with a deadly, magical plague (DC 20 CON save)",
        "Plague has a 50% fatality rate and spreads rapidly",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Biohazard Unit',
        levelRequirement: 18
    },
    'red_winter_sentient_ice_golem': {
        id: 'red_winter_sentient_ice_golem',
        name: "Red Winter Sentient Ice Golem",
        description: "A large guardian constructed from pure, living glacial ice.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 750000,
        icon: '🧊',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Golem acts as a loyal bodyguard (CR 15)",
        "Immune to Cold; Vulnerable to Fire",
        "Requires constant infusion of magical cold energy to remain active",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Frozen Transport',
        levelRequirement: 19
    },
    'dwarf_realms_under_mountain_territory': {
        id: 'dwarf_realms_under_mountain_territory',
        name: "Dwarven Under-Mountain Territory (New Claim)",
        description: "Deed granting rights to mine and settle an unclaimed mountain range far from established holds.",
        category: SHOP_CATEGORIES: 'faction',
        price: 1200000,
        icon: '⛰️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Establish a new, independent Dwarven Hold",
        "Gain access to unique subterranean resources",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Royal Decree',
        levelRequirement: 20,
        factionBonus: { construction: 100, resources: 100 }
    },
    'custodian_hive_mind_link': {
        id: 'custodian_hive_mind_link',
        name: "Custodian Hive Mind Link (Temporary)",
        description: "A device linking your mind briefly to the collective Custodian intelligence for ultimate strategic planning.",
        category: SHOP_CATEGORIES: 'premium',
        price: 350000,
        icon: '🔗',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "For 1 hour, gain perfect tactical recall and awareness (+10 to all combat rolls)",
        "Side Effect: Lose all independent thought for 1 hour afterward (docile)",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Headset',
        levelRequirement: 15
    },
    'dk_crew_volcanic_island_base': {
        id: 'dk_crew_volcanic_island_base',
        name: "DK Crew Volcanic Island Base",
        description: "A fully functional, heavily trapped fortress built into the side of an active volcano.",
        category: SHOP_CATEGORIES: 'faction',
        price: 600000,
        icon: '🌋',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Permanent, highly defensible fortress (AC 25 vs sea/air assault)",
        "Uses volcanic eruptions as a defense mechanism (1/month)",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Naval Delivery',
        levelRequirement: 14,
        factionBonus: { defense: 120 }
    },
    'spark_rebellion_network_invisibility': {
        id: 'spark_rebellion_network_invisibility',
        name: "Spark Rebellion Network Invisibility",
        description: "A program that makes your digital signature entirely untraceable across all known networks for a year.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 250000,
        icon: '👻',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Immune to all digital tracking, monitoring, and hacking attempts for 1 year",
        "Requires monthly maintenance ping to the Rebellion",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Encrypted Chip',
        levelRequirement: 15
    },
    'sultanates_araby_dream_walker_service': {
        id: 'sultanates_araby_dream_walker_service',
        name: "Sultanates Dream Walker Service (Targeted)",
        description: "A specialist enters the target's dreams to plant ideas, remove fears, or gather intelligence.",
        category: SHOP_CATEGORIES: 'services',
        price: 180000,
        icon: '😴',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Successfully influence one major subconscious belief or fear in the target",
        "Risk of target becoming aware and fighting back (DC 19 WIS check)",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Ritual Appointment',
        levelRequirement: 15
    },
    'animatopia_apex_dominance_serum': {
        id: 'animatopia_apex_dominance_serum',
        name: "Animatopia Apex Dominance Serum",
        description: "A serum that lets you command any non-sentient beast by sheer force of pheromonal will.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 280000,
        icon: '👑',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Command all non-sentient beasts (CR 12 or lower) for 1 hour; they treat you as alpha",
        "Beasts will fight to protect you",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'High-Tech Syringe',
        levelRequirement: 15
    },
    'eiwass_stellar_map_upgrade': {
        id: 'eiwass_stellar_map_upgrade',
        name: "Eiwass Stellar Map Upgrade (Future Sight)",
        description: "Upgrade your charts to predict natural celestial alignments that grant cosmic luck.",
        category: SHOP_CATEGORIES: 'premium',
        price: 600000,
        icon: '⭐',
        stock: 2,
        rarity: 'godly',
        effects: [
            "Grants 1 free, non-combat 'luck' reroll per week, based on favorable star movements",
        "Allows use of specific travel methods previously deemed impossible",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'New Constellation Chart',
        levelRequirement: 18
    },
    'oracula_god_summons': {
        id: 'oracula_god_summons',
        name: "Oracula God Summoning (Major Deity)",
        description: "The highest ritual: Summon a specific Greater Deity to interfere in a major conflict.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 5000000,
        icon: '⚡',
        stock: 1,
        rarity: 'godly',
        effects: [
            "A major deity of your choice intervenes directly in one event (Combat/Political)",
        "Deity intervenes favorably, but demands a service of equal cosmic magnitude in return",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Cosmic Gate',
        levelRequirement: 20
    },
    'halfling_bank_bank_itself': {
        id: 'halfling_bank_bank_itself',
        name: "Halfling Bank Bailout Plan",
        description: "If the Halfling Bank collapses, this plan guarantees your deposits are safe and you receive a 20% bonus.",
        category: SHOP_CATEGORIES: 'premium',
        price: 1000000,
        icon: '🛡️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Insurance against total economic collapse of the Halfling faction",
        "If the bank fails, you gain 1.2x total deposits as emergency capital",
            "Made by: Halfling"
        ],
        vendor: 'halfling_bank',
        shippedBy: 'Emergency Kit',
        levelRequirement: 18
    },
    'refijia_consciousness_transfer': {
        id: 'refijia_consciousness_transfer',
        name: "Refijian Consciousness Transfer (Interspecies)",
        description: "Transfer your mind into a new, customized body (organic or synthetic).",
        category: SHOP_CATEGORIES: 'services',
        price: 800000,
        icon: '🧠',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Transfer consciousness to any body type (organic or android)",
        "User retains all memories, proficiencies, and gains +1 max HP",
        "Process takes 3 weeks in induced coma",
            "Made by: Refijia"
        ],
        vendor: 'refijian_lab',
        shippedBy: 'Surgical Bay',
        levelRequirement: 19
    },
    'shanhaijing_celestial_palace_deed': {
        id: 'shanhaijing_celestial_palace_deed',
        name: "Shanhaijing Celestial Palace Deed",
        description: "Ownership of a minor palace floating in the Heavens, accessible via aligned portals.",
        category: SHOP_CATEGORIES: 'premium',
        price: 1500000,
        icon: '☁️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Permanent, secure residence in the Celestial Plane",
        "Palace grants healing aura (1d6 HP/hour to residents)",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Angel Courier',
        levelRequirement: 20
    },
    'u_digital_godhood_protocol': {
        id: 'u_digital_godhood_protocol',
        name: "U Digital Godhood Protocol",
        description: "A set of advanced protocols allowing a digital entity to begin simulating worship and gain minor divine influence.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 2500000,
        icon: '⭐',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Digital entity gains access to minor miracles (DM decision)",
        "Requires continuous, massive energy consumption",
            "Made by: U"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Core Upload',
        levelRequirement: 20
    },
    'zebrabwe_environmental_conversion': {
        id: 'zebrabwe_environmental_conversion',
        name: "Zebrabwe Environmental Conversion (Savannah)",
        description: "A ritual to magically convert a hostile biome (e.g., Tundra or Swamp) into temperate Savannah.",
        category: SHOP_CATEGORIES: 'services',
        price: 400000,
        icon: '🌳',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Converts 5 sq miles of land into prime grazing Savannah in 1 week",
        "Perfect for establishing new herds or strongholds",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Ritual Team',
        levelRequirement: 16
    },
    'robensonia_repair_subroutine': {
        id: 'robensonia_repair_subroutine',
        name: "Robensonia Repair Subroutine (Massive)",
        description: "A powerful subroutine capable of repairing large, heavily damaged structures or vessels.",
        category: SHOP_CATEGORIES: 'services',
        price: 300000,
        icon: '🛠️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Repair one large structure (ship, castle, factory) to 100% functionality",
        "Requires 1 month downtime and access to raw materials",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Technician Team',
        levelRequirement: 15
    },
    'tomb_kings_ritual_of_command': {
        id: 'tomb_kings_ritual_of_command',
        name: "Tomb Kings Ritual of Command (Army)",
        description: "A dark ritual that automatically raises and binds a local undead population to your service.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 250000,
        icon: '💀',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Raises 5d100 undead minions (CR 1/4) in a local graveyard",
        "Minions obey for 1 month before dissolving",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Necromantic Focus',
        levelRequirement: 14
    },
    'gehenna_archdevil_conquest_plan': {
        id: 'gehenna_archdevil_conquest_plan',
        name: "Gehenna Archdevil Conquest Plan (Strategic)",
        description: "A fully detailed, decade-long plan for conquering a minor plane using infernal law and assets.",
        category: SHOP_CATEGORIES: 'faction',
        price: 950000,
        icon: '🗺️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Guarantees military and legal advantage in a plane of your choosing",
        "Requires massive troop commitment and gold",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Bound Scrolls',
        levelRequirement: 19,
        factionBonus: { conquest: 100 }
    },
    'red_winter_elemental_binding': {
        id: 'red_winter_elemental_binding',
        name: "Red Winter Elemental Binding (Ice Lord)",
        description: "Bind a powerful Ice Elemental Lord (CR 14) to act as your fortress guardian.",
        category: SHOP_CATEGORIES: 'premium',
        price: 850000,
        icon: '🥶',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Summon a loyal Ice Elemental Lord to guard one fixed location permanently",
        "Elemental requires a constant supply of freezing temperatures or it dissipates",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Ritual Site',
        levelRequirement: 18
    },
    'dwarf_realms_geological_mapping_service': {
        id: 'dwarf_realms_geological_mapping_service',
        name: "Dwarven Deep Geological Mapping (New Continent)",
        description: "A team surveys a new continent or massive region, mapping all subterranean features and hazards.",
        category: SHOP_CATEGORIES: 'services',
        price: 500000,
        icon: '🗺️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Complete, 3D map of all underground features (tunnels, ore veins, buried ruins)",
        "Mapping takes 2 years and heavy security investment",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Expeditionary Force',
        levelRequirement: 17
    },
    'custodian_planet_destruction_schematic': {
        id: 'custodian_planet_destruction_schematic',
        name: "Custodian Planet Destruction Schematic (Decommission)",
        description: "The final protocol for deconstructing a planet back into raw matter for recycling.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 5000000,
        icon: '💥',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Initiate the 'Decommission' sequence on one planet (takes 1 month to activate)",
        "Planet breaks down into raw cosmic dust, releasing massive energy",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Final Data Block',
        levelRequirement: 20
    },
    'dk_crew_secret_island_lease': {
        id: 'dk_crew_secret_island_lease',
        name: "DK Crew Secret Island Hideout Lease (1 Year)",
        description: "Lease a fully stocked, hidden jungle island perfect for contraband storage or training.",
        category: SHOP_CATEGORIES: 'premium',
        price: 250000,
        icon: '🏝️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Secure, untraceable island base for 1 year",
        "Includes a small, self-sustaining Kremling maintenance crew",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Naval Drop',
        levelRequirement: 12
    },
    'spark_rebellion_anarchist_bomb': {
        id: 'spark_rebellion_anarchist_bomb',
        name: "Spark Rebellion Anarchist Bomb",
        description: "A device that doesn't destroy structures, but rather scrambles all hierarchical command structures within a fortress.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 250000,
        icon: '🤯',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Target enemy HQ/Fortress: all command units (officers, generals) are confused and fight each other for 1d6 hours",
        "No physical damage; pure chaos",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Logic Bomb',
        levelRequirement: 16
    },
    'sultanates_araby_eternal_guards': {
        id: 'sultanates_araby_eternal_guards',
        name: "Sultanates Eternal Guards (Bound Spirits)",
        description: "Hire 10 eternally loyal guards bound by unbreakable desert spirits.",
        category: SHOP_CATEGORIES: 'faction',
        price: 800000,
        icon: '💀',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "10 guards (CR 5 each) sworn to never leave post until destroyed",
        "Immune to fear, poison, and non-divine charm",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Procession of the Dead',
        levelRequirement: 18,
        factionBonus: { defense: 90 }
    },
    'animatopia_species_integration_serum': {
        id: 'animatopia_species_integration_serum',
        name: "Animatopia Species Integration Serum",
        description: "A serum that allows the imbiber to temporarily take on traits of a specific animal species.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 95000,
        icon: '🧪',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Gain 2 powerful, specific traits from a chosen species (e.g., Spider climb, Shark senses) for 8 hours",
        "Mutation is temporary but can leave residual side effects",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Bio-Tank',
        levelRequirement: 10
    },
    'eiwass_teleport_network_node': {
        id: 'eiwass_teleport_network_node',
        name: "Eiwass Personal Teleport Network Node",
        description: "A custom-built, permanent teleportation pad linked only to your other Nodes.",
        category: SHOP_CATEGORIES: 'premium',
        price: 1200000,
        icon: '🌀',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Establish 1 personal teleportation node",
        "Can instantly link to any other node you own, regardless of plane",
        "Requires a massive external energy source (50,000 gp/year)"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Massive Installation',
        levelRequirement: 20
    },
    'oracula_divine_weapon_blessing': {
        id: 'oracula_divine_weapon_blessing',
        name: "Oracular Divine Weapon Blessing",
        description: "A high priest blesses one weapon, granting it divine purpose.",
        category: SHOP_CATEGORIES: 'services',
        price: 190000,
        icon: '🗡️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Weapon deals an extra 3d10 Radiant damage against a specified type of enemy (Fiends, Undead, etc.)",
        "Blessing lasts 1 year",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Consecrated Anointing',
        levelRequirement: 15
    },
    'halfling_baker_bodyguard': {
        id: 'halfling_baker_bodyguard',
        name: "Halfling Master Baker Bodyguard (Elite)",
        description: "An incredibly skilled Halfling chef who is surprisingly proficient with rolling pins and kitchen knives.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 45000,
        icon: '🔪',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Acts as a competent bodyguard (CR 4)",
        "Can instantly bake a full meal that heals 4d6 HP for 4 people (1/day)",
            "Made by: Halfling"
        ],
        vendor: 'halfling_community',
        shippedBy: 'Linen Bag',
        levelRequirement: 8
    },
    'refijia_neural_interface_lock': {
        id: 'refijia_neural_interface_lock',
        name: "Refijian Neural Interface Lock",
        description: "A specialized lock that can only be opened by a specific sequence of thought patterns.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 150000,
        icon: '🔒',
        stock: 4,
        rarity: 'legendary',
        effects: [
            "Perfectly secures any door, safe, or data stream",
        "Only the intended user can open it (requires specific mental input)",
            "Made by: Refijia"
        ],
        vendor: 'refijian_lab',
        shippedBy: 'Small Console',
        levelRequirement: 13
    },
    'shanhaijing_bronze_skin_potion': {
        id: 'shanhaijing_bronze_skin_potion',
        name: "Shanhaijing Bronze Skin Potion",
        description: "A rare tincture that temporarily hardens the drinker's skin to the consistency of ancient bronze.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 200000,
        icon: '🧪',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "For 1 hour, gain Resistance to Bludgeoning, Piercing, and Slashing damage",
        "Movement speed halved due to increased weight",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Clay Bottle',
        levelRequirement: 14
    },
    'u_data_wipe_service': {
        id: 'u_data_wipe_service',
        name: "U Data Wipe Service (Personal)",
        description: "Erase all records of your activities stored on any known U or Internet database.",
        category: SHOP_CATEGORIES: 'services',
        price: 120000,
        icon: '🧹',
        stock: 5,
        rarity: 'legendary',
        effects: [
            "Completely removes your identity from all digital records",
        "Requires 3 days for the program to run globally",
            "Made by: U"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Encrypted Notification',
        levelRequirement: 14
    },
    'zebrabwe_predator_taming_serum': {
        id: 'zebrabwe_predator_taming_serum',
        name: "Zebrabwe Predator Taming Serum",
        description: "A serum that allows a temporary, non-aggressive bond with a single large predator.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 85000,
        icon: '💖',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Successfully tame 1 large predator (CR 6-9) for 24 hours; it becomes a temporary mount/ally",
        "Requires physical application to the beast",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Syringe',
        levelRequirement: 11
    },
    'robensonia_space_suit': {
        id: 'robensonia_space_suit',
        name: "Robensonian Zero-G Suit",
        description: "A lightweight suit providing full life support in hard vacuum or deep sea pressure.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 300000,
        icon: '🧑‍🚀',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Full environmental immunity (vacuum, deep sea, toxic gas)",
        "Internal oxygen supply for 48 hours",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Storage Unit',
        levelRequirement: 14
    },
    'tomb_kings_sarcophagus_of_power': {
        id: 'tomb_kings_sarcophagus_of_power',
        name: "Tomb Kings Sarcophagus of Power",
        description: "A gilded sarcophagus that acts as a ritual focus and temporary resting place for powerful souls.",
        category: SHOP_CATEGORIES: 'premium',
        price: 500000,
        icon: '🪦',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Store one soul (up to CR 15) within the sarcophagus for future use",
        "While inside, the soul cannot be reached by divine forces",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Procession of Servants',
        levelRequirement: 16
    },
    'gehenna_devil_escort': {
        id: 'gehenna_devil_escort',
        name: "Gehenna Devil Escort (Escape Route)",
        description: "A devil specialized in navigating dangerous spiritual/infernal territory.",
        category: SHOP_CATEGORIES: 'services',
        price: 250000,
        icon: '🧭',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Escorts party safely through one hostile extra-planar region (e.g., a layer of Hell)",
        "Devil knows all loopholes and dangers",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Infernal Guide',
        levelRequirement: 16
    },
    'red_winter_frozen_army_supply': {
        id: 'red_winter_frozen_army_supply',
        name: "Red Winter Frozen Army Supply Cache",
        description: "A cache of perfectly preserved food, weapons, and armor from an ancient frozen army.",
        category: SHOP_CATEGORIES: 'faction',
        price: 350000,
        icon: '📦',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Provides gear/food sufficient for 100 soldiers for 1 year",
        "Weapons are slightly damaged but functional (+1 damage type relevant to cold)",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Massive Haul',
        levelRequirement: 15,
        factionBonus: { logistics: 50 }
    },
    'dwarf_realms_earthquake_generator': {
        id: 'dwarf_realms_earthquake_generator',
        name: "Dwarven Earthquake Generator (Portable)",
        description: "A device that tunnels rapidly downward and triggers a localized, controlled tremor.",
        category: SHOP_CATEGORIES: 'premium',
        price: 800000,
        icon: ' tremors',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Triggers a localized earthquake (up to 300ft radius)",
        "Structures must pass DC 20 DEX save or collapse; creatures suffer 8d10 Bludgeoning",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Heavy Artillery',
        levelRequirement: 19
    },
    'custodian_hive_mind_upgrade': {
        id: 'custodian_hive_mind_upgrade',
        name: "Custodian Hive Mind Expansion Module",
        description: "Hardware upgrade allowing the user to control 2 additional drones/constructs simultaneously.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 180000,
        icon: '🧠',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Increase maximum controlled constructs/drones by 2",
        "Requires integration time (4 hours)",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Modular Component',
        levelRequirement: 14
    },
    'dk_crew_pirate_king_alliance': {
        id: 'dk_crew_pirate_king_alliance',
        name: "DK Crew Pirate King Alliance",
        description: "Formal diplomatic alliance with the main Pirate King, granting access to their entire fleet.",
        category: SHOP_CATEGORIES: 'faction',
        price: 450000,
        icon: '👑',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Access to the entire DK Pirate Fleet (5 warships) for one large operation",
        "Crew loyalty is based on regular payment of grog/loot",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Diplomatic Vessel',
        levelRequirement: 15,
        factionBonus: { navy: 100 }
    },
    'spark_rebellion_network_encryption': {
        id: 'spark_rebellion_network_encryption',
        name: "Spark Rebellion Network Encryption (Absolute)",
        description: "The ultimate encryption key, making data stored by the Rebellion completely unreadable by any other faction.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 220000,
        icon: '🔒',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "All data stored on Rebellion servers becomes uncrackable by external methods (DC 30)",
        "Requires proprietary hardware to access",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Key Generator',
        levelRequirement: 15
    },
    'sultanates_araby_master_assassin': {
        id: 'sultanates_araby_master_assassin',
        name: "Sultanates Master Assassin (Contract)",
        description: "Hire the Sultan's best operative for one high-profile, guaranteed elimination.",
        category: SHOP_CATEGORIES: 'services',
        price: 550000,
        icon: '🗡️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Guaranteed elimination of one target (regardless of defenses)",
        "Assassin operates completely outside your chain of command",
        "Requires 1 month notice"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Poison Vial',
        levelRequirement: 17
    },
    'animatopia_genetic_reset': {
        id: 'animatopia_genetic_reset',
        name: "Animatopia Genetic Reset",
        description: "A powerful chemical bath that safely reverts any artificial mutation or genetic alteration.",
        category: SHOP_CATEGORIES: 'services',
        price: 150000,
        icon: '🧪',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Removes all current positive and negative mutations from the target",
        "Restores original base stats",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Containment Tank',
        levelRequirement: 15
    },
    'eiwass_portal_to_the_past': {
        id: 'eiwass_portal_to_the_past',
        name: "Eiwass Portal to the Past (Observation Only)",
        description: "A highly unstable portal allowing observation of a single point in the past (max 24 hours).",
        category: SHOP_CATEGORIES: 'premium',
        price: 850000,
        icon: '🕰️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "View one 24-hour period in history exactly as it occurred",
        "Portal lasts 1 minute; observing entity cannot interact",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Massive Array',
        levelRequirement: 19
    },
    'oracula_divine_intervention': {
        id: 'oracula_divine_intervention',
        name: "Oracula Divine Intervention (Major)",
        description: "Call upon a major deity to actively counter a major threat (e.g., enemy army, powerful villain).",
        category: SHOP_CATEGORIES: 'premium',
        price: 1200000,
        icon: '⚡',
        stock: 1,
        rarity: 'godly',
        effects: [
            "A deity directly combats the named threat for 1 round, turning the tide",
        "The deity demands a service of galactic significance in return",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Cosmic Summons',
        levelRequirement: 20
    },
    'halfling_master_chef_bodyguard': {
        id: 'halfling_master_chef_bodyguard',
        name: "Halfling Master Chef Bodyguard (Legendary)",
        description: "The greatest Halfling chef, also a master of improvised weaponry and defense.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 150000,
        icon: '🍳',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Bodyguard (CR 8) provides both culinary support and combat",
        "Can create healing potions instantly using basic ingredients (1/day)",
            "Made by: Halfling"
        ],
        vendor: 'halfling_community',
        shippedBy: 'Silver Kitchen Kit',
        levelRequirement: 12
    },
    'refijia_digital_clone_host': {
        id: 'refijia_digital_clone_host',
        name: "Refijian Digital Clone Host (Empty Shell)",
        description: "A blank, synthetic body capable of housing any consciousness, organic or digital.",
        category: SHOP_CATEGORIES: 'premium',
        price: 600000,
        icon: '🤖',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Perfect body for consciousness transfer (see Memory Transfer)",
        "Base stats are 16 in all abilities",
            "Made by: Refijia"
        ],
        vendor: 'refijian_lab',
        shippedBy: 'Stasis Pod',
        levelRequirement: 17
    },
    'shanhaijing_celestial_armaments': {
        id: 'shanhaijing_celestial_armaments',
        name: "Shanhaijing Celestial Armaments (Set)",
        description: "A matched set of armor and weapon crafted from solidified starlight.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 1200000,
        icon: '✨',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Armor: AC 21, Resistance to Radiant and Force damage",
        "Weapon: Deals +4d6 Radiant damage; ignores non-magical damage reduction",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Astral Deposit',
        levelRequirement: 20
    },
    'u_digital_entity_service': {
        id: 'u_digital_entity_service',
        name: "U Digital Entity Service (Create Sentinel AI)",
        description: "Commission a bespoke, loyal, semi-sentient AI focused on protecting one specific asset.",
        category: SHOP_CATEGORIES: 'services',
        price: 450000,
        icon: '🤖',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Create one AI Sentinel (INT 20, AC 20, capable of defensive spells/tech)",
        "Sentinel acts autonomously to protect the specified asset",
            "Made by: U"
        ],
        vendor: 'u_research_lab',
        shippedBy: 'Programming Session',
        levelRequirement: 16
    },
    'zebrabwe_plains_settlement_charter': {
        id: 'zebrabwe_plains_settlement_charter',
        name: "Zebrabwe Plains Settlement Charter",
        description: "Formal permission to establish a permanent settlement on Zebrabwe land (with mutual defense pact).",
        category: SHOP_CATEGORIES: 'faction',
        price: 300000,
        icon: '🏛️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Establish a secure settlement protected by Zebrabwe patrols",
        "Settlement income is taxed at only 5%",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Official Accord',
        levelRequirement: 13,
        factionBonus: { residence: 70 }
    },
    'robensonia_planetary_escape_pod': {
        id: 'robensonia_planetary_escape_pod',
        name: "Robensonia Planetary Escape Pod (Automated)",
        description: "A one-person vessel designed for emergency exit from failing celestial bodies.",
        category: SHOP_CATEGORIES: 'premium',
        price: 650000,
        icon: '🚀',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Ejects user from a planet/station, guaranteed safe hyperspace jump",
        "Pod can sustain life support for 10 years",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Emergency Launch',
        levelRequirement: 17
    },
    'tomb_kings_army_reanimation': {
        id: 'tomb_kings_army_reanimation',
        name: "Tomb Kings Mass Reanimation Ritual (Local)",
        description: "A powerful ritual that instantly raises all corpses in a 1-mile radius as loyal undead troops.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 550000,
        icon: '💀',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Raises 1d6 x 100 undead troops (CR 1/8, loyal to the caster)",
        "Ritual takes 12 hours and requires a large necromantic focus",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Dark Summoning',
        levelRequirement: 16
    },
    'gehenna_infernal_colonization_rights': {
        id: 'gehenna_infernal_colonization_rights',
        name: "Gehenna Infernal Colonization Rights (Outpost)",
        description: "Official (if temporary) rights granted by the Hells to establish a small outpost in a minor plane.",
        category: SHOP_CATEGORIES: 'faction',
        price: 1100000,
        icon: '🏛️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Establish a small, legally recognized outpost in a low-stakes extra-planar region",
        "Outpost is protected by minor infernal laws",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Archdevil Seal',
        levelRequirement: 19,
        factionBonus: { dominion: 100 }
    },
    'red_winter_sentient_ice_golem_upgrade': {
        id: 'red_winter_sentient_ice_golem_upgrade',
        name: "Red Winter Sentient Ice Golem Upgrade (Fire Immunity)",
        description: "Infuse the Golem with anti-fire enchantments, removing its greatest weakness.",
        category: SHOP_CATEGORIES: 'services',
        price: 300000,
        icon: '🔥',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Golem gains full immunity to Fire damage",
        "Requires 1 week of continuous ritual",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Ritual Components',
        levelRequirement: 16
    },
    'dwarf_realms_master_gemcutter': {
        id: 'dwarf_realms_master_gemcutter',
        name: "Dwarven Master Gemcutter (Service)",
        description: "Hire a Master Gemcutter to cut and polish a raw gemstone, maximizing its magical resonance.",
        category: SHOP_CATEGORIES: 'services',
        price: 150000,
        icon: '💎',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Gem cut by this artisan gains +1 to its magical potency/save DC",
        "Cutting process takes 1 month",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Master Tool Set',
        levelRequirement: 15
    },
    'custodian_hive_mind_override': {
        id: 'custodian_hive_mind_override',
        name: "Custodian Hive Mind Override (One-Time)",
        description: "A digital command capable of briefly taking full control of a major Custodian installation.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 450000,
        icon: '💻',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Gain complete control over one Custodian facility (e.g., weapon system, lab) for 1 hour",
        "Facility will self-destruct upon override expiry",
            "Made by: Custodians (Traitor)"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Master Key Upload',
        levelRequirement: 16
    },
    'dk_crew_airship_plans': {
        id: 'dk_crew_airship_plans',
        name: "DK Crew Airship Construction Plans",
        description: "Detailed schematics for constructing a fast, cannon-equipped Kremling-style airship.",
        category: SHOP_CATEGORIES: 'faction',
        price: 180000,
        icon: '🚢',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Allows construction of an Airship (AC 18, HP 300, Speed 60ft)",
        "Requires a massive shipyard and crew (additional 200,000 gp cost)",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Blueprint Roll',
        levelRequirement: 13,
        factionBonus: { mobility: 60 }
    },
    'spark_rebellion_anarchy_bomb': {
        id: 'spark_rebellion_anarchy_bomb',
        name: "Spark Rebellion Anarchy Bomb (Social)",
        description: "A powerful code injection that forces widespread civil unrest and corruption in a targeted governance structure.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 500000,
        icon: '🔥',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Instigates massive, prolonged civil unrest/revolt in a major city or kingdom",
        "Causes leadership collapse and system failure for 1 year",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Digital Detonation',
        levelRequirement: 17
    },
    'sultanates_araby_desert_weather_control': {
        id: 'sultanates_araby_desert_weather_control',
        name: "Sultanates of Araby Permanent Oasis Generator",
        description: "A permanent magical device that draws moisture from the air to maintain a freshwater oasis.",
        category: SHOP_CATEGORIES: 'premium',
        price: 700000,
        icon: '⛲',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Creates one permanent, self-sustaining oasis in the desert (1/sq mile)",
        "Area within 100ft heals all natural exhaustion instantly",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Grand Ceremony',
        levelRequirement: 17
    },
    'animatopia_bio_weapon_release': {
        id: 'animatopia_bio_weapon_release',
        name: "Animatopia Bio-Weapon Release (Targeted Species)",
        description: "Release the custom-engineered plague (requires prior research purchase) into the target's habitat.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 500000,
        icon: '🦠',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Deploys the designed plague targeting the specified race/creature",
        "High chance of mutation and environmental backlash",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Containment Breach',
        levelRequirement: 18
    },
    'eiwass_dimensional_clone': {
        id: 'eiwass_dimensional_clone',
        name: "Eiwass Dimensional Clone (Astral Echo)",
        description: "Create a temporary, semi-real echo of yourself from the Astral Plane.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 150000,
        icon: '👻',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Summon a clone that lasts 1 hour and can perform simple actions",
        "Clone has half your stats, but physical damage passes through it 50% of the time",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Crystal Matrix',
        levelRequirement: 13
    },
    'oracula_divine_alliance': {
        id: 'oracula_divine_alliance',
        name: "Oracular Divine Alliance (Minor Deity)",
        description: "Secure the permanent, low-level loyalty of a minor deity/demigod faction.",
        category: SHOP_CATEGORIES: 'premium',
        price: 850000,
        icon: '🤝',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Gain a permanent divine ally (Minor Deity, CR 25 equivalent)",
        "Deity grants minor boons (e.g., perpetual good luck, minor healing)",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Grand Celestial Summons',
        levelRequirement: 19
    },
    'halfling_banking_protection': {
        id: 'halfling_banking_protection',
        name: "Halfling Banking Protection (Wards)",
        description: "The bank places powerful wards on your physical assets stored in their vaults.",
        category: SHOP_CATEGORIES: 'services',
        price: 120000,
        icon: '🛡️',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Wards prevent scrying, teleportation, or magical theft from stored assets",
        "Wards only last as long as you maintain a banking relationship",
            "Made by: Halfling"
        ],
        vendor: 'halfling_bank',
        shippedBy: 'Security Audit',
        levelRequirement: 11
    },
    'refijia_synthetic_masterpiece': {
        id: 'refijia_synthetic_masterpiece',
        name: "Refijian Synthetic Masterpiece (Unique)",
        description: "A unique android body built specifically for you, incorporating the best of all known enhancements.",
        category: SHOP_CATEGORIES: 'premium',
        price: 1500000,
        icon: '🤖',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Base stats of 22 in all abilities upon transfer",
        "Full resistance to all non-magical damage types",
        "Requires a powerful soul or complex AI to run",
            "Made by: Refijia"
        ],
        vendor: 'refijian_lab',
        shippedBy: 'Custom Assembly',
        levelRequirement: 20
    },
    'shanhaijing_jade_armor_restoration': {
        id: 'shanhaijing_jade_armor_restoration',
        name: "Shanhaijing Jade Weapon Re-Attunement",
        description: "Re-attune a Celestial Jade Weapon to a new user or purpose.",
        category: SHOP_CATEGORIES: 'services',
        price: 250000,
        icon: '⚒️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Reassigns the weapon's core celestial focus (e.g., change Fire damage to Cold)",
        "Requires the weapon and 1 month of focused meditation",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Meditation Scroll',
        levelRequirement: 16
    },
    'u_network_control_key': {
        id: 'u_network_control_key',
        name: "U Network Control Key (Sub-Sector)",
        description: "A physical key granting direct, physical control over one small sub-sector of the global U network.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 350000,
        icon: '🔑',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Can temporarily override security protocols in a 1-mile radius digital grid",
        "Key degrades after 3 uses",
            "Made by: U"
        ],
        vendor: 'data_merchant_node',
        shippedBy: 'Secured Transfer',
        levelRequirement: 15
    },
    'zebrabwe_desert_conquest_force': {
        id: 'zebrabwe_desert_conquest_force',
        name: "Zebrabwe Desert Conquest Force (Light Cavalry)",
        description: "A dedicated force of 100 Zebrabwe cavalry specialized in rapid desert engagements.",
        category: SHOP_CATEGORIES: 'faction',
        price: 300000,
        icon: '🐎',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "100 fast cavalry provide massive advantage in desert warfare",
        "Cavalry morale is tied to the health of the local ecosystem",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Mass Summons',
        levelRequirement: 14,
        factionBonus: { military: 60 }
    },
    'robensonia_global_communication': {
        id: 'robensonia_global_communication',
        name: "Robensonian Global Communication Array",
        description: "Install a permanent communications relay that allows instantaneous, secure contact across the globe.",
        category: SHOP_CATEGORIES: 'faction',
        price: 500000,
        icon: '📡',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Establish instantaneous, encrypted communication line between any two points",
        "Relay is immune to jamming or interception",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Tower Installation',
        levelRequirement: 16,
        factionBonus: { intelligence: 70 }
    },
    'tomb_kings_eternal_vizier': {
        id: 'tomb_kings_eternal_vizier',
        name: "Tomb Kings Eternal Vizier (Advisor)",
        description: "A high-ranking, non-combat Lich bound to serve as a political and administrative advisor.",
        category: SHOP_CATEGORIES: 'services',
        price: 400000,
        icon: '🧠',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Vizier runs your bureaucracy flawlessly for 5 years",
        "Provides unmatched strategic planning (Advantage on long-term planning checks)",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Entombed Delivery',
        levelRequirement: 16
    },
    'gehenna_hellish_territory_claim': {
        id: 'gehenna_hellish_territory_claim',
        name: "Gehenna Infernal Territory Claim (Minor Layer)",
        description: "A deed granting legal rights (under Infernal Law) to one small, unclaimed section of the Lower Planes.",
        category: SHOP_CATEGORIES: 'premium',
        price: 1500000,
        icon: '🔥',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Establish a private base/prison in the Lower Planes",
        "Outpost is protected by basic infernal treaties",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Pact of Blood',
        levelRequirement: 20
    },
    'red_winter_glacier_transport': {
        id: 'red_winter_glacier_transport',
        name: "Red Winter Glacier Transport (Mobile)",
        description: "A mobile fortress constructed entirely of magically stabilized, living ice.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 1100000,
        icon: '🏰',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Mobile Fortress: AC 24, HP 1000, Immune to Cold, moves 10ft/hour",
        "Requires massive magical output to sustain movement",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Continental Haul',
        levelRequirement: 20
    },
    'dwarf_realms_golem_core': {
        id: 'dwarf_realms_golem_core',
        name: "Dwarven Animated Golem Core",
        description: "A perfectly crafted magical core required to animate a large (Huge size) stone or metal golem.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 400000,
        icon: '⚙️',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Animates one Huge Construct (CR 10) loyal to the core's owner",
        "Golem lasts indefinitely if maintained (5,000 gp/year upkeep)",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Heavy Crate',
        levelRequirement: 16
    },
    'custodian_planet_stabilizer': {
        id: 'custodian_planet_stabilizer',
        name: "Custodian Planetary Stability Field",
        description: "A massive device that stabilizes a planet's orbit and tectonic plates against magical or natural interference.",
        category: SHOP_CATEGORIES: 'faction',
        price: 900000,
        icon: '🌍',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Planet is locked into perfect orbit and stable tectonic activity for 1000 years",
        "Prevents planetary transformation spells",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Orbital Deployment',
        levelRequirement: 20,
        factionBonus: { environment: 100 }
    },
    'dk_crew_kraken_tamer': {
        id: 'dk_crew_kraken_tamer',
        name: "DK Crew Kraken Tamer (Service)",
        description: "A specialized Kremling crew that captures and binds one Giant or Greater Kraken to servitude.",
        category: SHOP_CATEGORIES: 'services',
        price: 500000,
        icon: '🐙',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Gain one colossal, loyal Kraken as a naval asset (CR 15)",
        "Kraken is bound for 5 years, requires massive tribute (food)",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Naval Escort',
        levelRequirement: 17
    },
    'spark_rebellion_identity_swap': {
        id: 'spark_rebellion_identity_swap',
        name: "Spark Rebellion Identity Swap (Digital/Physical)",
        description: "Simultaneously swap your digital profile and physical appearance with a low-level agent.",
        category: SHOP_CATEGORIES: 'premium',
        price: 300000,
        icon: '🎭',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Instantaneous escape from digital/physical surveillance systems",
        "Agent is now 'compromised' and may be hunted by the target faction",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Data Stream',
        levelRequirement: 15
    },
    'sultanates_araby_water_engine': {
        id: 'sultanates_araby_water_engine',
        name: "Sultanates Water Engine (Self-Sustaining)",
        description: "A complex engine that draws moisture from the air to create an infinite, drinkable water supply.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 250000,
        icon: '💧',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Produces 1,000 gallons of pure water per day indefinitely",
        "Engine requires minor maintenance checks quarterly",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Heavy Machinery',
        levelRequirement: 14
    },
    'animatopia_apex_chimeric_serum': {
        id: 'animatopia_apex_chimeric_serum',
        name: "Animatopia Apex Chimeric Serum",
        description: "A serum that grants the user controlled traits from THREE different apex predators simultaneously.",
        category: SHOP_CATEGORIES: 'consumables',
        price: 450000,
        icon: '🧪',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Gain three major physical traits (e.g., Flight, Venom, Strength) for 2 hours",
        "Mutation is volatile; user suffers 1d6 psychic damage per hour after the main effect ends",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Bio-Tank',
        levelRequirement: 17
    },
    'eiwass_astral_ship_hull': {
        id: 'eiwass_astral_ship_hull',
        name: "Eiwass Astral Ship Hull (Unfinished)",
        description: "The partially constructed hull of a star-faring vessel, ready for final magical reinforcement.",
        category: SHOP_CATEGORIES: 'premium',
        price: 1500000,
        icon: '🛸',
        stock: 1,
        rarity: 'godly',
        effects: [
            "A functional, massive starship hull (AC 22, HP 2000)",
        "Requires 500,000 gp and 6 months of continuous ritual to complete",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Massive Cradle',
        levelRequirement: 20
    },
    'oracula_prophetic_shield': {
        id: 'oracula_prophetic_shield',
        name: "Oracular Prophetic Shield",
        description: "A shield that subtly shifts its configuration fractions of a second before an attack lands.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 400000,
        icon: '🛡️',
        stock: 2,
        rarity: 'godly',
        effects: [
            "As a reaction, grant user advantage on a single saving throw or AC against one incoming attack",
        "Reaction can be used 3 times per long rest",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'Sacred Carving',
        levelRequirement: 17
    },
    'halfling_estate_deed': {
        id: 'halfling_estate_deed',
        name: "Halfling Country Estate Deed",
        description: "Ownership of a modest, cozy manor house surrounded by fertile farmland.",
        category: SHOP_CATEGORIES: 'faction',
        price: 150000,
        icon: '🏡',
        stock: 5,
        rarity: 'epic',
        effects: [
            "Permanent, untaxed homestead",
        "Farm yields triple the normal food supply",
            "Made by: Halfling"
        ],
        vendor: 'halfling_community',
        shippedBy: 'Legal Transfer',
        levelRequirement: 10,
        factionBonus: { economy: 30 }
    },
    'refijia_consciousness_clone': {
        id: 'refijia_consciousness_clone',
        name: "Refijian Consciousness Clone (Digital Backup)",
        description: "A complete digital backup of your mind, stored securely.",
        category: SHOP_CATEGORIES: 'premium',
        price: 300000,
        icon: '💾',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "If you die, consciousness is uploaded to the nearest Refijian hub (takes 1 week)",
        "Backup expires after 5 years if not renewed",
            "Made by: Refijia"
        ],
        vendor: 'refijian_lab',
        shippedBy: 'Crystalline Drive',
        levelRequirement: 15
    },
    'shanhaijing_imperial_seal': {
        id: 'shanhaijing_imperial_seal',
        name: "Shanhaijing Imperial Seal (Diplomatic)",
        description: "A jade seal used by the Emperor's most trusted envoys.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 400000,
        icon: '👑',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Grants +5 bonus to all diplomatic checks when dealing with Eastern/Asian-themed factions",
        "Can force immediate audience with any ruler of that culture",
            "Made by: Shanhaijing"
        ],
        vendor: 'shanhaijing_shrine',
        shippedBy: 'Imperial Escort',
        levelRequirement: 16
    },
    'u_digital_currency_vault': {
        id: 'u_digital_currency_vault',
        name: "U Digital Currency Vault (Unfalsifiable)",
        description: "A highly secured digital account holding untraceable, high-value digital currency.",
        category: SHOP_CATEGORIES: 'premium',
        price: 600000,
        icon: '💰',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Access to 1,000,000 GP in pure digital, untraceable assets",
        "Access requires biometric/neural signature",
            "Made by: U"
        ],
        vendor: 'data_merchant_node',
        shippedBy: 'Secure Transfer',
        levelRequirement: 16
    },
    'zebrabwe_great_migration_pass': {
        id: 'zebrabwe_great_migration_pass',
        name: "Zebrabwe Great Migration Pass",
        description: "A sacred pass allowing safe, unimpeded travel across the plains during the massive annual migration.",
        category: SHOP_CATEGORIES: 'services',
        price: 100000,
        icon: '🎫',
        stock: 4,
        rarity: 'epic',
        effects: [
            "Allows guaranteed safe passage (for 1 week) across the plains during the migration event",
        "No stampedes or predator attacks will affect you",
            "Made by: Zebrabwe"
        ],
        vendor: 'zebrabwe_plains_trader',
        shippedBy: 'Ceremonial Cloth',
        levelRequirement: 12
    },
    'robensonia_weapon_integration': {
        id: 'robensonia_weapon_integration',
        name: "Robensonia Weapon Integration (Cybernetic)",
        description: "Service to surgically implant a high-tech weapon directly into your arm/body.",
        category: SHOP_CATEGORIES: 'services',
        price: 250000,
        icon: '🔫',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Implant one non-magical weapon directly into limb; functions as a natural attack",
        "Weapon cannot be disarmed and is always ready",
            "Made by: Robensonia"
        ],
        vendor: 'robensonia_lab',
        shippedBy: 'Surgical Suite',
        levelRequirement: 15
    },
    'tomb_kings_undead_legion_hire': {
        id: 'tomb_kings_undead_legion_hire',
        name: "Tomb Kings Undead Legion Hire (500 Troops)",
        description: "Hire a contingent of disciplined, tireless undead soldiers for 1 year.",
        category: SHOP_CATEGORIES: 'faction',
        price: 600000,
        icon: '💀',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "500 Undead soldiers (CR 1/4) provided; they require no food or rest",
        "They require a monthly payment of 50,000 gp in raw soul energy",
            "Made by: King of Tombs"
        ],
        vendor: 'tomb_gatekeeper',
        shippedBy: 'Dark Procession',
        levelRequirement: 16,
        factionBonus: { military: 100 }
    },
    'gehenna_devil_escort_to_hell': {
        id: 'gehenna_devil_escort_to_hell',
        name: "Gehenna Devil Escort (To Hell)",
        description: "A specialized devil guides you safely through the bureaucracy and dangers of the Hells for a diplomatic meeting.",
        category: SHOP_CATEGORIES: 'services',
        price: 550000,
        icon: '🧭',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Guarantees safe passage and diplomatic reception in the Hells for 72 hours",
        "Devil demands payment in the form of a sworn oath upon return",
            "Made by: Gehenna Academy"
        ],
        vendor: 'gehenna_vault',
        shippedBy: 'Infernal Summons',
        levelRequirement: 18
    },
    'red_winter_permanent_frost_aura': {
        id: 'red_winter_permanent_frost_aura',
        name: "Red Winter Permanent Frost Aura (Personal)",
        description: "An enchantment that permanently radiates intense cold around the wearer.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 700000,
        icon: '❄️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Permanent Resistance to Cold Damage",
        "All non-magical metal items within 5ft become brittle and prone to shattering (DM roll)",
        "Fire magic nearby fizzles slightly",
            "Made by: Red Winter"
        ],
        vendor: 'red_winter_outpost',
        shippedBy: 'Cryogenic Tank',
        levelRequirement: 18
    },
    'dwarf_realms_deep_mountain_home': {
        id: 'dwarf_realms_deep_mountain_home',
        name: "Dwarven Deep Mountain Home (Sector)",
        description: "A fully furnished, deep-earth apartment within a major Dwarven Hold.",
        category: SHOP_CATEGORIES: 'faction',
        price: 350000,
        icon: '🏘️',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Secure, permanent residence in a major stronghold",
        "Access to local artisan services and libraries",
            "Made by: Dwarf Realms"
        ],
        vendor: 'dwarf_realms_gate',
        shippedBy: 'Handshake',
        levelRequirement: 14,
        factionBonus: { residence: 50 }
    },
    'custodian_planet_reset': {
        id: 'custodian_planet_reset',
        name: "Custodian Planetary Reset Protocol",
        description: "Initiate a full, clean slate reboot of all technological and biological systems on a minor planet.",
        category: SHOP_CATEGORIES: 'forbidden',
        price: 2000000,
        icon: '💥',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Wipes all complex life/tech from a planet, returning it to pre-industrial state",
        "Process takes 3 months and releases massive energy signature",
            "Made by: Custodians"
        ],
        vendor: 'custodian_hub',
        shippedBy: 'Wormhole Trigger',
        levelRequirement: 20
    },
    'dk_crew_pirate_king_summons': {
        id: 'dk_crew_pirate_king_summons',
        name: "DK Crew Pirate King Summons",
        description: "A legendary signal flare that calls the Pirate King and his flagship to your immediate location.",
        category: SHOP_CATEGORIES: 'premium',
        price: 500000,
        icon: '👑',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "King K. Rool arrives with his flagship and 100 pirates (CR 1/2 each)",
        "Service lasts 1 hour; King expects a massive share of loot",
            "Made by: The DK Crew"
        ],
        vendor: 'dk_crew_pitstop',
        shippedBy: 'Royal Flare',
        levelRequirement: 16
    },
    'spark_rebellion_network_infiltration': {
        id: 'spark_rebellion_network_infiltration',
        name: "Spark Rebellion Network Infiltration (Rival AI)",
        description: "Insert a sentient virus into a rival AI, forcing it to slowly turn against its creators.",
        category: SHOP_CATEGORIES: 'services',
        price: 300000,
        icon: '🦠',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Infect target AI/system (DC 25 hack)",
        "AI becomes subtly hostile, causing 1 major setback per week for 6 months",
            "Made by: Spark Rebellion"
        ],
        vendor: 'hacktivist_collective',
        shippedBy: 'Viral Drone',
        levelRequirement: 16
    },
    'sultanates_araby_permanent_guard_detail': {
        id: 'sultanates_araby_permanent_guard_detail',
        name: "Sultanates Permanent Guard Detail (Personal)",
        description: "A detail of 5 elite, magically bonded bodyguards sworn to protect you until death or release.",
        category: SHOP_CATEGORIES: 'faction',
        price: 900000,
        icon: '🛡️',
        stock: 1,
        rarity: 'godly',
        effects: [
            "5 Elite Guards (CR 7) devoted solely to you (gain +2 to all rolls while near you)",
        "Guards are replaced if killed (takes 1 month)",
            "Made by: Sultanates Araby"
        ],
        vendor: 'desert_trader_guild',
        shippedBy: 'Binding Ritual',
        levelRequirement: 18,
        factionBonus: { defense: 80 }
    },
    'animatopia_chimeric_hybrid': {
        id: 'animatopia_chimeric_hybrid',
        name: "Animatopia Apex Chimeric Hybrid (Companion)",
        description: "A custom-bred, stable companion creature combining the best features of two apex predators.",
        category: SHOP_CATEGORIES: 'premium',
        price: 750000,
        icon: '🦁',
        stock: 1,
        rarity: 'godly',
        effects: [
            "A unique CR 15 companion with versatile abilities (DM determines full stats)",
        "Companion is loyal, sentient (animal intelligence), and immortal (will regenerate)",
            "Made by: Animatopia"
        ],
        vendor: 'animatopia_scientist',
        shippedBy: 'Incubation Unit',
        levelRequirement: 18
    },
    'eiwass_astral_vessel_plans': {
        id: 'eiwass_astral_vessel_plans',
        name: "Eiwass Astral Vessel Blueprints",
        description: "Schematics for building a starship capable of navigating the Astral Plane without relying on Eiwass assistance.",
        category: SHOP_CATEGORIES: 'faction',
        price: 450000,
        icon: '🗺️',
        stock: 1,
        rarity: 'legendary',
        effects: [
            "Allows construction of an Astral Vessel (AC 20, Speed Varies)",
        "Construction costs an additional 1M gp and takes 2 years",
            "Made by: Eiwass"
        ],
        vendor: 'eiwass_astronomer',
        shippedBy: 'Holographic Schematics',
        levelRequirement: 16,
        factionBonus: { engineering: 60 }
    },
    'oracula_divine_army_blessing': {
        id: 'oracula_divine_army_blessing',
        name: "Oracular Divine Army Blessing (Mass)",
        description: "A blessing granted by a neutral/good deity to an entire army (up to 1000 soldiers).",
        category: SHOP_CATEGORIES: 'services',
        price: 950000,
        icon: '🙏',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Army gains +2 to all attack rolls and damage rolls for one major battle",
        "Army gains temporary immunity to fear effects",
            "Made by: Oracula"
        ],
        vendor: 'oracula_shrine',
        shippedBy: 'High Festival',
        levelRequirement: 19
    },
    'halfling_bank_loan_master_godly': {
        id: 'halfling_bank_loan_master_godly',
        name: "Halfling Bank Loan Master (Godly Term)",
        description: "Secure a 5,000,000 gp loan on exceptionally generous terms, payable in 20 years with minimal interest.",
        category: SHOP_CATEGORIES: 'premium',
        price: 1500000,
        icon: '💰',
        stock: 1,
        rarity: 'godly',
        effects: [
            "Receive 5,000,000 gp instantly",
        "Repayment terms are extremely favorable and legally binding by Halfling law",
            "Made by: Halfling"
        ],
        vendor: 'halfling_bank',
        shippedBy: 'Security Deposit',
        levelRequirement: 20
    },
    'refijia_personality_script_bundle': {
        id: 'refijia_personality_script_bundle',
        name: "Refijian Personality Script Bundle (3 Roles)",
        description: "Three pre-written, highly specialized personalities (e.g., Diplomat, Assassin, Engineer) for host bodies.",
        category: SHOP_CATEGORIES: 'equipment',
        price: 300000,
        icon: '💿',
        stock: 3,
        rarity: 'legendary',
        effects: [
            "Load any one script onto an empty host body (see chassis)",
        "Scripts grant expertise in relevant fields",
            "Made by: Refijia"
        ],
        vendor: 'refijian_lab',
        shippedBy: 'Triple Drive',
        levelRequirement: 15
    },
// ============================================
// === 100 NEW ITEMS (FACTION-THEMED) ===
// ============================================

'koopa_troop_patrol_scooter': {
    id: 'koopa_troop_patrol_scooter',
    name: "Koopa Patrol Scooter",
    description: "A standard-issue, flame-decaled scooter for quick troop deployment. Surprisingly zippy.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 4500,
    icon: '🛴',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Mount: Speed 40ft, can move through enemy spaces",
        "Once per day: emit a puff of smoke (Blinds 5ft radius for 1 round)",
        "Makes loud 'vroom-vroom' noises"
    ],
    vendor: 'Koopa Troop',
    shippedBy: 'Armored Crate',
    levelRequirement: 2
},

'asgardian_rune_stone': {
    id: 'asgardian_rune_stone',
    name: "Asgardian Rune Stone",
    description: "A smooth river stone etched with a single, powerful rune of protection. Feels warm to the touch.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '🪨',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Once per day: cast 'Shield' (reaction)",
        "While held, you have advantage on saves against being frightened",
        "Rune glows blue when giants are near"
    ],
    vendor: 'Asgard',
    shippedBy: 'Raven Delivery',
    levelRequirement: 4
},

'gondor_ranger_survival_kit': {
    id: 'gondor_ranger_survival_kit',
    name: "Ranger of Gondor Survival Kit",
    description: "A comprehensive kit issued to the rangers of Ithilien. Contains everything needed to thrive in the wild.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 3500,
    icon: '🎒',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Advantage on Survival checks",
        "Contains 10 days of non-perishable rations",
        "Includes a signal whistle that can be heard 1 mile away"
    ],
    vendor: 'Kingdom Gondor',
    shippedBy: 'Sealed Leather Case',
    levelRequirement: 1
},

'mordor_venom_vial': {
    id: 'mordor_venom_vial',
    name: "Vial of Mordor Venom",
    description: "A viscous, black venom that corrodes both flesh and spirit. Handle with extreme caution.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 9000,
    icon: '☠️',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Single Use: Apply to weapon. On hit, target takes 4d6 Necrotic damage and must make a CON save or be Poisoned for 1 minute",
        "Corrodes the weapon after 3 hits",
        "Faint whispers of the Dark Lord can be heard near the vial"
    ],
    vendor: 'Land Mordor',
    shippedBy: 'Lead-Lined Box',
    levelRequirement: 5
},

'equestrian_harmony_charm': {
    id: 'equestrian_harmony_charm',
    name: "Element of Harmony Charm",
    description: "A small, magical charm representing one of the six Elements of Harmony. It hums with friendship.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7000,
    icon: '💎',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Wearer gains +2 to Charisma (Persuasion) checks",
        "Once per long rest: cast 'Calm Emotions' centered on self",
        "Makes you inexplicably cheerful"
    ],
    vendor: 'Equestrian',
    shippedBy: 'Rainbow-Colored Box',
    levelRequirement: 3
},

'iron_legion_cybernetic_eye': {
    id: 'iron_legion_cybernetic_eye',
    name: "Iron Legion Cybernetic Eye",
    description: "A replacement eye that grants enhanced vision and targeting data. Requires minor surgery.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 25000,
    icon: '👁️',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Gain Advantage on Perception checks involving sight",
        "Can see in magical darkness",
        "Once per day: analyze a creature's weak points (next attack has +2 to hit and +1d6 damage)",
        "Requires 1 week of recovery after installation"
    ],
    vendor: 'Iron Legion',
    shippedBy: 'Sterile Medical Kit',
    levelRequirement: 6
},

'pokemon_league_healing_machine_rental': {
    id: 'pokemon_league_healing_machine_rental',
    name: "Pokémon Center Healing Machine (Rental)",
    description: "A portable version of the famous healing machine. Fully restores all allies after a rest.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 1500,
    icon: '💚',
    stock: 999,
    rarity: 'uncommon',
    effects: [
        "During a long rest, all allies regain full HP and recover from all diseases, poisons, and level 1 exhaustion",
        "Rental lasts for 1 week",
        "Makes a pleasant 'ding!' sound when finished"
    ],
    vendor: 'Pokémon League',
    shippedBy: 'Technician Installation',
    levelRequirement: 1
},

'wario_land_garlic_grenade': {
    id: 'wario_land_garlic_grenade',
    name: "Wario's Garlic Grenade",
    description: "A potent grenade that explodes in a cloud of overwhelmingly pungent garlic. Wario swears by it.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 800,
    icon: '🧄',
    stock: 30,
    rarity: 'common',
    effects: [
        "Thrown (30ft): 10ft radius cloud of garlic",
        "Creatures in cloud must make CON save or be Poisoned and nauseated for 1 minute",
        "Vampires and creatures with keen smell have disadvantage on the save"
    ],
    vendor: 'Wario Land',
    shippedBy: 'Greasy Paper Bag',
    levelRequirement: 1
},

'freelancer_info_broker_fee': {
    id: 'freelancer_info_broker_fee',
    name: "Freelancer Information Broker's Fee",
    description: "Pay a well-connected freelancer to dig up dirt, locate a person, or find a hidden secret.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 3000,
    icon: '🕵️',
    stock: 999,
    rarity: 'uncommon',
    effects: [
        "Learn one piece of obscure information (DM discretion)",
        "Guaranteed to be accurate, but may come with complications",
        "Broker remembers who asked, and may sell your information later"
    ],
    vendor: 'Freelancer',
    shippedBy: 'Dead Drop Note',
    levelRequirement: 2
},

'onyx_hand_soul_shard': {
    id: 'onyx_hand_soul_shard',
    name: "Onyx Hand Soul Shard",
    description: "A shard of obsidian containing a trapped, screaming soul. Used to power dark rituals.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 18000,
    icon: '🖤',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Can be consumed to add +2d6 Necrotic damage to a single spell attack",
        "Alternatively, can be shattered to cast 'Animate Dead' on up to 4 HD of corpses",
        "Each use risks attracting the attention of the soul's original owner"
    ],
    vendor: 'The Onyx Hand',
    shippedBy: 'Cursed Wrappings',
    levelRequirement: 7
},

'mages_guild_spell_tome_copy': {
    id: 'mages_guild_spell_tome_copy',
    name: "Mages' Guild Spell Tome Copy",
    description: "A service where the guild scribes a copy of a spell from their vast library into your spellbook.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 5000,
    icon: '📖',
    stock: 999,
    rarity: 'uncommon',
    effects: [
        "Add one spell of 1st or 2nd level from any class list to your spellbook",
        "Spell must be provided by the guild (subject to availability)",
        "Takes 24 hours to transcribe"
    ],
    vendor: 'Mages Guild',
    shippedBy: 'Courier Scribe',
    levelRequirement: 3
},

'king_of_tombs_ankh_pass': {
    id: 'king_of_tombs_ankh_pass',
    name: "Ankh of the Tomb King",
    description: "A tarnished gold ankh that allows passage through the most basic of tomb wards and traps.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 11000,
    icon: '☥',
    stock: 7,
    rarity: 'rare',
    effects: [
        "Grants Advantage on saves against traps and curses in tombs or necropolises",
        "Can suppress one magical glyph or symbol per day (DC 15)",
        "Causes minor undead to ignore you unless you attack them"
    ],
    vendor: 'King of Tombs',
    shippedBy: 'Dusty Sarcophagus',
    levelRequirement: 5
},

'dwarf_realms_mug_of_endless_ale': {
    id: 'dwarf_realms_mug_of_endless_ale',
    name: "Mug of Endless Ale",
    description: "A sturdy stone mug that magically refills with delicious, potent dwarven ale every dawn.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 14000,
    icon: '🍺',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Refills with 1 gallon of ale daily",
        "Drinking grants +2 temporary HP and advantage on Intimidation checks for 10 minutes",
        "If emptied, it will not refill until the next dawn"
    ],
    vendor: 'Kingdoms Dwarves',
    shippedBy: 'Stone Cask',
    levelRequirement: 3
},

'void_drifters_wayfinder': {
    id: 'void_drifters_wayfinder',
    name: "Void Drifter's Wayfinder",
    description: "A strange, non-Euclidean compass that points not north, but towards the nearest planar rift.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 16000,
    icon: '🌀',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Always points to the closest planar portal or rift within 100 miles",
        "Once per week: create a tiny, temporary rift (5ft) to the Ethereal Plane for 1 minute",
        "Constantly whispers in an unknown language"
    ],
    vendor: 'Void Drifters',
    shippedBy: 'Phase-Shifted Package',
    levelRequirement: 8
},

'servants_cosmic_blessing': {
    id: 'servants_cosmic_blessing',
    name: "Blessing of a Cosmic Servant",
    description: "A minor boon bestowed by a powerful entity from beyond the stars. It feels... vast.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 80000,
    icon: '🌌',
    stock: 2,
    rarity: 'legendary',
    effects: [
        "Choose one ability score: increase it by 2 (to a maximum of 22)",
        "You gain resistance to Psychic damage",
        "Once per long rest: ask one question to a cosmic entity (DM provides a cryptic answer)",
        "You may now be on the radar of other cosmic beings"
    ],
    vendor: 'Servants Cosmic',
    shippedBy: 'Astral Projection',
    levelRequirement: 12
},

'high_elf_starlight_ink': {
    id: 'high_elf_starlight_ink',
    name: "High Elf Starlight Ink",
    description: "A vial of ink that seems to contain liquid starlight. Makes writing glow with faint light.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 2500,
    icon: '✍️',
    stock: 20,
    rarity: 'uncommon',
    effects: [
        "Scrolls written with this ink have +1 to their save DC",
        "Can be used to create magical maps that show star constellations",
        "Ink lasts for 10 pages of writing"
    ],
    vendor: 'High Elves',
    shippedBy: 'Crystal Vial',
    levelRequirement: 1
},

'dark_elf_shadow_pouch': {
    id: 'dark_elf_shadow_pouch',
    name: "Dark Elf Shadow Pouch",
    description: "A pouch made from shadow-stuff. It's bigger on the inside and doesn't make a sound.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 9000,
    icon: '🌑',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Functions as a Bag of Holding (50 lbs capacity)",
        "Items retrieved from the pouch make no sound",
        "Once per day, can pull a handful of shadows to cast 'Darkness'"
    ],
    vendor: 'Dark Elves',
    shippedBy: 'Silent Courier',
    levelRequirement: 4
},

'garden_isles_pollen_bomb': {
    id: 'garden_isles_pollen_bomb',
    name: "Garden Isles Pollen Bomb",
    description: "A glass sphere filled with hyper-allergenic, fast-acting pollen. A botanical nightmare.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 3200,
    icon: '🌼',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Shatters: 15ft radius cloud of pollen",
        "Creatures must make CON save or be blinded and choked for 1 minute",
        "Area becomes covered in rapidly growing flowers (difficult terrain)"
    ],
    vendor: 'Garden Isles',
    shippedBy: 'Hollowed-Out Fruit',
    levelRequirement: 2
},

'glarnia_truth_serum': {
    id: 'glarnia_truth_serum',
    name: "Glarnian Truth Serum",
    description: "A clear, odorless potion that makes lying feel physically painful and difficult.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 6000,
    icon: '💉',
    stock: 10,
    rarity: 'rare',
    effects: [
        "Single Use: Involuntary target must make WIS save or be unable to speak a deliberate lie for 1 hour",
        "Target is aware of the effect",
        "Tastes faintly of regret"
    ],
    vendor: 'Glarnia',
    shippedBy: 'Medical Cooler',
    levelRequirement: 5
},

'polybius_data_key': {
    id: 'polybius_data_key',
    name: "Polybius Data Key",
    description: "A strange key made of pixelated light. It can unlock digital and psychic information gates.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 22000,
    icon: '🔑',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Can bypass any non-physical lock (digital, magical, psychic)",
        "On use, there is a 25% chance of downloading a random, sanity-blasting secret into your mind",
        "Key glitches and flickers near strong electromagnetic fields"
    ],
    vendor: 'Polybius',
    shippedBy: 'Encrypted File Transfer',
    levelRequirement: 9
},

'internet_access_scroll': {
    id: 'internet_access_scroll',
    name: "Scroll of Internet Access",
    description: "A one-use scroll that opens a temporary, chaotic portal to a dimension of endless cat videos and arguments.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 7500,
    icon: '📜',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Single Use: Cast a version of 'Contact Other Plane' to ask a question to 'The Internet'",
        "Answer is fast but may be a lie, a meme, or dangerously unhelpful",
        "User must make a DC 15 INT save or be distracted for 1 hour"
    ],
    vendor: 'Internet',
    shippedBy: 'Downloaded Data',
    levelRequirement: 4
},

'xenonesia_bio-enhancer': {
    id: 'xenonesia_bio enhancer',
    name: "Xenonesia Bio-Enhancer",
    description: "A syringe of alien retrovirus that temporarily enhances a specific biological function.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 13000,
    icon: '🧬',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Single Use: Choose one stat. Gain +4 to that stat for 1 hour",
        "After effect ends, take 1 level of exhaustion",
        "Side effects may include temporary skin discoloration or extra limbs"
    ],
    vendor: 'Xenonesia',
    shippedBy: 'Cryogenic Pod',
    levelRequirement: 6
},

'mushroom_regency_guard_uniform': {
    id: 'mushroom_regency_guard_uniform',
    name: "Royal Mushroom Guard Uniform",
    description: "An immaculate uniform of the Mushroom Kingdom's Royal Guard. Commands respect from Toads.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5500,
    icon: '👮',
    stock: 12,
    rarity: 'uncommon',
    effects: [
        "+2 to Charisma (Intimidation) checks against non-hostile Toads",
        "While in Mushroom Kingdom, treated as an authority figure",
        "Does not grant actual authority, just the appearance of it"
    ],
    vendor: 'Mushroom Regency',
    shippedBy: 'Tailored Delivery',
    levelRequirement: 2
},

'geminia_mirror_dupe': {
    id: 'geminia_mirror_dupe',
    name: "Geminia Mirror Duplicate",
    description: "A small hand mirror that can create a temporary, perfect duplicate of an inanimate object.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 17000,
    icon: '🪞',
    stock: 4,
    rarity: 'epic',
    effects: [
        "Touch an object: create a perfect duplicate for 1 hour",
        "Duplicate is magical and feels slightly warm",
        "Cannot duplicate artifacts or sentient items",
        "If duplicate is broken, it shatters into harmless glass dust"
    ],
    vendor: 'Geminia',
    shippedBy: 'Velvet Lined Box',
    levelRequirement: 7
},

'asclepia_healing_ointment': {
    id: 'asclepia_healing_ointment',
    name: "Asclepian Healing Ointment",
    description: "A potent medicinal salve that can mend grievous wounds with miraculous speed.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 4000,
    icon: '🧴',
    stock: 20,
    rarity: 'uncommon',
    effects: [
        "Apply to a creature: Heals 4d8+4 HP",
        "Cures blindness, deafness, and any diseases affecting the target",
        "Jar contains 5 doses"
    ],
    vendor: 'Asclepia',
    shippedBy: 'Medical Pouch',
    levelRequirement: 3
},

'pony_nobility_invitation': {
    id: 'pony_nobility_invitation',
    name: "Invitation to the Grand Galloping Gala",
    description: "A gilded invitation to the most exclusive event in Equestria. A chance to rub hooves with the elite.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 20000,
    icon: '📜',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Grants access to a high-society event for one night",
        "Opportunity to network, gather rumors, or attempt a heist",
        "Strict dress code enforced",
        "Plus-one optional"
    ],
    vendor: 'Pony Nobility',
    shippedBy: 'Royal Courier',
    levelRequirement: 5
},

'changeling_hive_chitin_armor': {
    id: 'changeling_hive_chitin_armor',
    name: "Changeling Hive Chitin Armor",
    description: "Light armor made from the shed chitin of a changeling. It shifts and adapts to your form.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 19000,
    icon: '🐛',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Light Armor: AC 13 + DEX modifier",
        "Advantage on checks made to impersonate a humanoid",
        "Once per long rest: as a bonus action, change your appearance as per 'Alter Self'"
    ],
    vendor: 'Changeling Hive',
    shippedBy: 'Disguised Parcel',
    levelRequirement: 5
},

'cybernetic_replacement_limb': {
    id: 'cybernetic_replacement_limb',
    name: "Cybernetic Replacement Limb",
    description: "A fully functional prosthetic limb that is stronger and more versatile than the original.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 30000,
    icon: '🦾',
    stock: 10,
    rarity: 'epic',
    effects: [
        "Replace a lost limb (arm or leg)",
        "Arm: +1 to damage with melee attacks using that hand. Can hold extra items.",
        "Leg: +10ft to walking speed. Advantage on checks to avoid being knocked prone.",
        "Requires 1 week of recovery and attunement"
    ],
    vendor: 'Cybernetic',
    shippedBy: 'Surgical Unit',
    levelRequirement: 7
},

'data_merchant_info_packet': {
    id: 'data_merchant_info_packet',
    name: "Data Merchant's Info Packet",
    description: "A compressed data packet containing a massive amount of raw, unsorted information on a topic.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 8000,
    icon: '💾',
    stock: 999,
    rarity: 'rare',
    effects: [
        "Gain advantage on your next three Intelligence checks related to a single topic",
        "Information is raw and may take hours to sift through",
        "Contains at least one secret you weren't looking for"
    ],
    vendor: 'Data Merchant',
    shippedBy: 'Datachip',
    levelRequirement: 4
},

'jotunheimr_frost_essence': {
    id: 'jotunheimr_frost_essence',
    name: "Jotunheimr Frost Essence",
    description: "A bottle of pure, magical cold harvested from the heart of a frost giant's domain.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 10000,
    icon: '❄️',
    stock: 5,
    rarity: 'rare',
    effects: [
        "Can be applied to a weapon: attacks deal an extra 2d6 Cold damage for 1 hour",
        "Alternatively, thrown to create a 20ft radius of 'Sleet Storm' (spell save DC 15)",
        "Bottle is freezing cold to the touch"
    ],
    vendor: 'Jotunheimr',
    shippedBy: 'Ice Block',
    levelRequirement: 5
},

'greenskin_waaagh_banner': {
    id: 'greenskin_waaagh_banner',
    name: "Greenskin WAAAGH! Banner",
    description: "A tattered banner that hums with psychic energy. Makes you and your allies feel... fighty.",
    category: SHOP_CATEGORIES.FACTION,
    price: 25000,
    icon: '🚩',
    stock: 2,
    rarity: 'epic',
    effects: [
        "While planted, allies within 30ft gain +1 to melee attack rolls",
        "Once per day: let out a WAAAGH! cry, granting allies 10 temporary HP",
        "Attracts nearby Greenskins, for better or worse",
        factionBonus: { morale: 20, combatReadiness: 15 }
    ],
    vendor: 'Greenskins',
    shippedBy: 'Loot Crate',
    levelRequirement: 6
},

'team_rocket_uniform': {
    id: 'team_rocket_uniform',
    name: "Team Rocket Grunt Uniform",
    description: "A stylish black uniform with a prominent red 'R'. Perfect for blending in... or standing out.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 3500,
    icon: '🥋',
    stock: 20,
    rarity: 'uncommon',
    effects: [
        "+2 to Charisma (Deception) when pretending to be a member of Team Rocket",
        "Other Team Rocket members will be initially friendly",
        "Makes you a target for law enforcement and 'twerps' with Pikachu"
    ],
    vendor: 'Team Rocket',
    shippedBy: 'Shady Delivery',
    levelRequirement: 1
},

'vampire_counts_thrall_ointment': {
    id: 'vampire_counts_thrall_ointment',
    name: "Vampire Thrall Ointment",
    description: "A pale, pungent cream that makes one more susceptible to vampiric charm and control.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 4500,
    icon: '🧛',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Single Use: Apply to an unwilling or unknowing target",
        "Target has disadvantage on saves against being charmed by vampires for 24 hours",
        "Leaves a faint, sweet scent that vampires can smell",
        "Highly illegal in most kingdoms"
    ],
    vendor: 'Vampire Counts',
    shippedBy: 'Poached Vial',
    levelRequirement: 3
},

'rebel_clans_sabotage_kit': {
    id: 'rebel_clans_sabotage_kit',
    name: "Rebel Clan Sabotage Kit",
    description: "A kit containing tools for disabling siege equipment, destroying supply lines, and general mischief.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 6000,
    icon: '🧰',
    stock: 12,
    rarity: 'rare',
    effects: [
        "Advantage on checks made to sabotage or disable mechanical devices",
        "Contains 3 charges of 'Alchemist's Fire' and 1 'Thunderstone'",
        "Includes a disguise kit and a false identity papers"
    ],
    vendor: 'Rebel Clans',
    shippedBy: 'Hidden Compartment',
    levelRequirement: 4
},

'skycaverns_gryphon_egg': {
    id: 'skycaverns_gryphon_egg',
    name: "Skycaverns Gryphon Egg",
    description: "A large, mottled egg that will soon hatch into a loyal gryphon companion. Requires incubation.",
    category: SHOP_CATEGORIES.FACTION,
    price: 40000,
    icon: '🥚',
    stock: 3,
    rarity: 'epic',
    effects: [
        "After 1 month of incubation, hatches into a baby gryphon",
        "Gryphon grows into a loyal mount (DM's discretion for timeline)",
        "Requires a steady diet of meat and shiny objects",
        factionBonus: { mobility: 30 }
    ],
    vendor: 'Skycaverns',
    shippedBy: 'Warm Nest Box',
    levelRequirement: 7
},

'lemuria_conclave_scrying_pool': {
    id: 'lemuria_conclave_scrying_pool',
    name: "Lemurian Scrying Pool",
    description: "A small, portable basin that fills with enchanted water for divination.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 28000,
    icon: '💧',
    stock: 4,
    rarity: 'epic',
    effects: [
        "Once per day: cast 'Scrying' (spell save DC 15)",
        "The water shows visions of sunken cities and lost knowledge",
        "If used underwater, reveals all secrets within 1 mile"
    ],
    vendor: 'Lemuria Conclave',
    shippedBy: 'Sealed Amphora',
    levelRequirement: 8
},

'empire_man_legionnaire_kit': {
    id: 'empire_man_legionnaire_kit',
    name: "Legionnaire's Kit of the Empire of Man",
    description: "Standard issue for the disciplined legions. Everything a soldier needs to maintain order.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5000,
    icon: '⚔️',
    stock: 25,
    rarity: 'uncommon',
    effects: [
        "Contains a well-made shortsword, a large shield, and a set of chainmail",
        "Advantage on checks to build or maintain fortifications",
        "Includes a manual on military formations and tactics"
    ],
    vendor: 'Empire Man',
    shippedBy: 'Military Supply Wagon',
    levelRequirement: 2
},

'grand_cathay_fireworks_display': {
    id: 'grand_cathay_fireworks_display',
    name: "Grand Cathay Fireworks Display",
    description: "A service contract for a spectacular, morale-boosting fireworks display. Great for celebrations or distractions.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 7000,
    icon: '🎆',
    stock: 10,
    rarity: 'rare',
    effects: [
        "A 10-minute fireworks display that can be seen for miles",
        "All allies who witness it gain advantage on their next attack roll",
        "Can be used to signal troops or create a diversion"
    ],
    vendor: 'Grand Cathay',
    shippedBy: 'Pyrotechnician Crew',
    levelRequirement: 3
},

'mu_empire_levitation_stone': {
    id: 'mu_empire_levitation_stone',
    name: "Mu Empire Levitation Stone",
    description: "A smooth, grey stone that hums with anti-gravity energy. Makes heavy things light.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15000,
    icon: '🪨',
    stock: 7,
    rarity: 'rare',
    effects: [
        "Attuned user can cast 'Levitate' at will",
        "While holding, your carrying capacity is doubled",
        "Once per long rest: target an object up to 2000 lbs, it becomes weightless for 1 minute"
    ],
    vendor: 'Mu Empire',
    shippedBy: 'Floating Platform',
    levelRequirement: 5
},

'crimson_fleet_letter_of_marque': {
    id: 'crimson_fleet_letter_of_marque',
    name: "Crimson Fleet Letter of Marque",
    description: "An official document granting you the right to plunder enemy ships in the name of the Crimson Fleet.",
    category: SHOP_CATEGORIES.FACTION,
    price: 22000,
    icon: '📜',
    stock: 5,
    rarity: 'epic',
    effects: [
        "Legal protection when attacking ships of enemy factions",
        "Access to Crimson Fleet ports and safe harbors",
        "Required to turn in plunder for fleet-wide reputation and rewards",
        "Marks you as an enemy to those factions"
    ],
    vendor: 'Crimson Fleet',
    shippedBy: 'Captain's Envoy',
    levelRequirement: 6,
    factionBonus: { economy: 25, combatReadiness: 25 }
},

'halfling_pantry_crate': {
    id: 'halfling_pantry_crate',
    name: "Halfling's Endless Pantry Crate",
    description: "A small wooden crate that, once opened, reveals a pocket dimension full of delicious halfling food.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 18000,
    icon: '🧺',
    stock: 3,
    rarity: 'rare',
    effects: [
        "Provides enough food for 10 people each day",
        "Food is always warm, fresh, and delicious",
        "Once per week, can produce a 'Hero's Feast' for 6 people",
        "Refills at dawn"
    ],
    vendor: 'Halfling',
    shippedBy: 'Friendly Farmer's Cart',
    levelRequirement: 4
},

'scylla_charybdis_tide_chart': {
    id: 'scylla_charybdis_tide_chart',
    name: "Scylla & Charybdis Tide Chart",
    description: "A nautical chart that perfectly predicts the movements of the legendary sea monsters and the tides around them.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 13000,
    icon: '🗺️',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Grants a safe path through the monster's strait once per week",
        "While in the area, you cannot be surprised by the monsters",
        "Chart is cursed: you hear their whispers in your sleep"
    ],
    vendor: 'Scylla Charybdis',
    shippedBy: 'Waterproof Tube',
    levelRequirement: 7
},

'tomb_kings_canopic_jar': {
    id: 'tomb_kings_canopic_jar',
    name: "Tomb Kings' Canopic Jar",
    description: "An ancient jar containing the preserved organs of a long-dead king. It pulses with necromantic energy.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 31000,
    icon: '🏺',
    stock: 3,
    rarity: 'epic',
    effects: [
        "Once per week: cast 'Animate Dead' on up to 6 HD of corpses (skeletons only)",
        "Undead you control are more resilient (gain +1 HP per HD)",
        "The jar's owner may occasionally demand tribute"
    ],
    vendor: 'Tomb Kings',
    shippedBy: 'Sand-Covered Sarcophagus',
    levelRequirement: 8
},

'the_dk_crew_banana_hoard': {
    id: 'the_dk_crew_banana_hoard',
    name: "DK Crew's Banana Hoard",
    description: "A single, magically-preserved banana from the legendary hoard. It's... just a banana, but it feels important.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 1000,
    icon: '🍌',
    stock: 50,
    rarity: 'uncommon',
    effects: [
        "Eating the banana heals 2d4 HP and grants +5ft speed for 1 hour",
        "Peel can be thrown: creatures who step on it must make a DEX save or fall prone",
        "May attract apes or angry Kremlings"
    ],
    vendor: 'The DK Crew',
    shippedBy: 'Barrel',
    levelRequirement: 1
},

'kremling_krew_kannonball': {
    id: 'kremling_krew_kannonball',
    name: "Kremling Krew Kannonball",
    description: "A heavy, iron cannonball designed for their signature ship cannons. Surprisingly aerodynamic.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 800,
    icon: '💣',
    stock: 100,
    rarity: 'common',
    effects: [
        "Ammunition for a cannon or similar siege weapon",
        "Deals 3d10 bludgeoning damage on a direct hit",
        "Can be used as an improvised weapon (2d6 bludgeoning)",
        "Heavy"
    ],
    vendor: 'Kremling Krew',
    shippedBy: 'Gunpowder Barrel',
    levelRequirement: 1
},

'beanbean_kingdom_coin_pouch': {
    id: 'beanbean_kingdom_coin_pouch',
    name: "Beanbean Kingdom Coin Pouch",
    description: "A pouch that converts foreign currency into local Beanbean coins at a favorable rate. Sometimes.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 2500,
    icon: '💰',
    stock: 15,
    rarity: 'uncommon',
    effects: [
        "Once per day, convert up to 100 gp of foreign currency into 110 gp of Beanbean coins",
        "On a roll of 1, the pouch eats the money",
        "Emits a faint bean smell"
    ],
    vendor: 'Beanbean Kingdom',
    shippedBy: 'Express Mail',
    levelRequirement: 1
},

'lothlorien_starlight_lantern': {
    id: 'lothlorien_starlight_lantern',
    name: "Lothlórien Starlight Lantern",
    description: "A lantern that doesn't burn fuel, but instead captures and refracts starlight. The light is pure and calming.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 12000,
    icon: '🏮',
    stock: 6,
    rarity: 'rare',
    effects: [
        "Sheds bright light (30ft) and dim light (30ft more)",
        "Light from this lantern cannot be extinguished by wind or water",
        "Creatures in the light gain advantage on saves against fear",
        "Recharges only under an open night sky"
    ],
    vendor: 'Lothlórien',
    shippedBy: 'Elven Courier',
    levelRequirement: 4
},

'centaur_khanate_bow': {
    id: 'centaur_khanate_bow',
    name: "Centaur Khanate Composite Bow",
    description: "A masterfully crafted longbow, designed to be used from horseback (or centaur-back). It's powerful and responsive.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 16000,
    icon: '🏹',
    stock: 8,
    rarity: 'rare',
    effects: [
        "Composite Longbow (+2 Strength modifier)",
        "Advantage on attacks made while mounted",
        "Arrows fired from this bow fly 50% further",
        "Requires attunement"
    ],
    vendor: 'Centaur Khanate',
    shippedBy: 'Leather Quiver',
    levelRequirement: 5
},

'void_entities_whispering_orb': {
    id: 'void_entities_whispering_orb',
    name: "Void Entity's Whispering Orb",
    description: "A sphere of nothingness that whispers secrets from the space between spaces. Listening is not recommended.",
    category: SHOP_CATEGORIES.FORBIDDEN,
    price: 45000,
    icon: '⚫',
    stock: 1,
    rarity: 'legendary',
    effects: [
        "Once per week: ask a question. The DM will answer, but you gain 1 level of exhaustion",
        "While carrying the orb, you have resistance to Psychic damage",
        "Each long rest, make a DC 15 WIS save or gain a short-term madness",
        "The orb hungers for secrets"
    ],
    vendor: 'Void Entities',
    shippedBy: 'It appears in your hand',
    levelRequirement: 10
},

'order_silver_judgement_gavel': {
    id: 'order_silver_judgement_gavel',
    name: "Order of Silver's Judgement Gavel",
    description: "A ceremonial gavel that can compel truth and pass binding sentence on the guilty.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 35000,
    icon: '🔨',
    stock: 2,
    rarity: 'epic',
    effects: [
        "Once per day: Strike a surface and compel one creature to tell the truth (WIS save DC 16)",
        "Once per week: pass 'sentence' on a creature you have proven guilty. They are affected by a 'Geas' spell",
        "Weighs heavily on the soul of the wielder"
    ],
    vendor: 'Order Silver',
    shippedBy: 'Armored Courier',
    levelRequirement: 9
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