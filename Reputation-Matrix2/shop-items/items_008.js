// Shop items chunk 8 of 51
// Items 701 to 800 (100 items)
// Auto-generated: 2026-03-21 13:41:41

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_008 = {
  'dk_crew_king_k_id': {
        id: 'dk_crew_king_k_id',
        name: "King K. Rool ID Card (Forged)",
        description: "A highly convincing, forged identification card granting access to restricted Kremling facilities.",
        category: SHOP_CATEGORIES.forbidden,
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

  'dk_crew_kraken_tamer': {
        id: 'dk_crew_kraken_tamer',
        name: "DK Crew Kraken Tamer (Service)",
        description: "A specialized Kremling crew that captures and binds one Giant or Greater Kraken to servitude.",
        category: SHOP_CATEGORIES.services,
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

  'dk_crew_pirate_king_alliance': {
        id: 'dk_crew_pirate_king_alliance',
        name: "DK Crew Pirate King Alliance",
        description: "Formal diplomatic alliance with the main Pirate King, granting access to their entire fleet.",
        category: SHOP_CATEGORIES.faction,
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

  'dk_crew_pirate_king_summons': {
        id: 'dk_crew_pirate_king_summons',
        name: "DK Crew Pirate King Summons",
        description: "A legendary signal flare that calls the Pirate King and his flagship to your immediate location.",
        category: SHOP_CATEGORIES.premium,
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

  'dk_crew_pirate_ship_lease': {
        id: 'dk_crew_pirate_ship_lease',
        name: "DK Crew Pirate Ship Lease (Monthly)",
        description: "Lease a fast, heavily armed pirate galleon for naval dominance.",
        category: SHOP_CATEGORIES.services,
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

  'dk_crew_recipe_banana_cream_pie': {
    id: 'dk_crew_recipe_banana_cream_pie',
    name: "Recipe: DK Crew Banana Cream Pie",
    description: "A pie that's also a projectile.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 10500,
    icon: '📜',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "Pie can be thrown as a weapon: 1d4 bludgeoning + target is blinded for 1 round",
        "Alternatively, eating it restores 1d6 HP (delicious)",
        "You must shout 'Banana Slamma!' when throwing it",
        "Made by: Donkey Kong Bakery"
    ],
    vendor: 'dk_crew',
    shippedBy: 'Barrel Roll Delivery',
    levelRequirement: 5
},

  'dk_crew_rocket_barrel': {
        id: 'dk_crew_rocket_barrel',
        name: "DK Crew Rocket Barrel",
        description: "A wooden barrel fitted with a crude rocket engine. Excellent area denial.",
        category: SHOP_CATEGORIES.consumables,
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

  'dk_crew_rum_supply': {
        id: 'dk_crew_rum_supply',
        name: "DK Crew Premium Barrel of Rum",
        description: "A barrel of high-proof, potent rum known to inspire berserker rage.",
        category: SHOP_CATEGORIES.consumables,
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

  'dk_crew_secret_island_lease': {
        id: 'dk_crew_secret_island_lease',
        name: "DK Crew Secret Island Hideout Lease (1 Year)",
        description: "Lease a fully stocked, hidden jungle island perfect for contraband storage or training.",
        category: SHOP_CATEGORIES.premium,
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

  'dk_crew_smuggling_route': {
        id: 'dk_crew_smuggling_route',
        name: "DK Crew Smuggling Route (Exclusive)",
        description: "Exclusive rights to use a secret maritime route bypassing naval blockades.",
        category: SHOP_CATEGORIES.services,
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

  'dk_crew_volcanic_island_base': {
        id: 'dk_crew_volcanic_island_base',
        name: "DK Crew Volcanic Island Base",
        description: "A fully functional, heavily trapped fortress built into the side of an active volcano.",
        category: SHOP_CATEGORIES.faction,
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

  'dk_crew_volcanic_pass': {
        id: 'dk_crew_volcanic_pass',
        name: "DK Crew Volcanic Pass",
        description: "A map and coded access that allows safe travel through the active volcanic regions controlled by Kremlings.",
        category: SHOP_CATEGORIES.services,
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

  'dk_crew_wario_barrel_helmet': {
    id: 'dk_crew_wario_barrel_helmet',
    name: "DK Crew Wario Barrel Helmet",
    description: "A barrel with Wario's face painted on it.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5200,
    icon: '🛢️',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "+1 AC, but you can't hear: disadvantage on Perception checks",
        "You smell like bananas and garlic (confusing)",
        "Can roll down hills as a bonus action: gain 20ft movement, prone at end",
        "Made by: DK Crew (Wario Commission)"
    ],
    vendor: 'dk_crew',
    shippedBy: 'Barrel Roll Delivery',
    levelRequirement: 5
},

  'dk_crew_wario_tie': {
    id: 'dk_crew_wario_tie',
    name: "DK Crew Wario Tie",
    description: "A tie with Wario's face repeated all over it.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 3800,
    icon: '👔',
    stock: 9,
    rarity: 'common',
    effects: [
        "Wear tie: advantage on Charisma with Wario, disadvantage with everyone else",
        "Tie is too short: you look ridiculous (disadvantage on serious checks)",
        "Can be used as garrote: 1d4 damage (improvised weapon)",
        "Made by: DK Crew (Wario Formal Wear)"
    ],
    vendor: 'dk_crew',
    shippedBy: 'Barrel Roll Delivery',
    levelRequirement: 4
},

  'dk_isles_ancient_mirror_piece': {
        id: 'dk_isles_ancient_mirror_piece',
        name: "Ancient Mirror Piece",
        description: "A shard from the shattered temple of the Jungle Oracle. Reflects the user’s true form and reveals hidden enemy weaknesses. Must be wielded with both hands.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '📦',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Reveals enemy weaknesses for 5 seconds",
        "Reflects the user’s true form (visual only)",
        "Grants 10% chance to dodge next enemy attack"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'dk_isles_ancient_sword': {
        id: 'dk_isles_ancient_sword',
        name: "The Whispering Blade of the Jungle",
        description: "A legendary sword etched with jungle runes that echoes with the screams of fallen warriors. It deals extra damage to enemies with high defense and has a chance to stun.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4200,
        icon: '📦',
        stock: 1,
        rarity: 'rare',
        effects: [
            "+25% damage to enemies with high defense",
        "10% chance to stun enemy for 1 turn on hit",
        "Deals 100% extra damage on critical hits"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 7
    },

  'dk_isles_banana_bane': {
        id: 'dk_isles_banana_bane',
        name: "Banana Bane",
        description: "A cursed fruit weapon rumored to have been stolen from a rogueport banana hoard by the Cosmic Jester cult. When bitten, it releases a burst of entropy that disorients enemies for 3 turns. The cult believes it was once a sacred fruit of the jungle’s first king.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 800,
        icon: '🍈',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Deals 1d4 piercing damage",
        "20% chance to cause temporary disorientation",
        "Consumes one banana per use",
        "Can be eaten to restore 10 HP",
        "Made by: Rogueport smugglers"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Warp Whistle Transit',
        levelRequirement: 3
    },

  'dk_isles_banana_blood_satchel': {
        id: 'dk_isles_banana_blood_satchel',
        name: "Banana Blood Satchel",
        description: "This cursed satchel was once a fruit vendor’s bag, now soaked in the blood of a rogue Wario who fell in love with a banana peel. It glows when carried by a member of the Kremling Krew and emits a low, sweet hum that makes nearby bananas grow faster—dangerously fast.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 350,
        icon: '🍈',
        stock: 12,
        rarity: 'common',
        effects: [
            "Consuming the satchel grants +2 to stealth checks",
        "Increases banana hoard capacity by 25%",
        "Triggers a 5% chance to cause a banana peel explosion on touch",
        "Causes temporary euphoria for 3 rounds (increases speed by 20%)",
        "If consumed while carrying a weapon, it auto-attaches to the weapon",
        "Loses 10% chance to trigger on third use"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 2
    },

  'dk_isles_banana_bomb_core': {
        id: 'dk_isles_banana_bomb_core',
        name: "Banana Bomb Core",
        description: "A pulsing, golden fruit core harvested from the mutated fire flower groves of the DK Isles. When embedded in a weapon or explosive device, it detonates with banana-fueled chaos, triggering explosive mutations in nearby flora and fauna. The core was smuggled from the Inkopolis ink-brewers’ lab, where it was thought to be a harmless fruit. Instead, it was a weapon of biological disruption.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 1200,
        icon: '🍌',
        stock: 7,
        rarity: 'uncommon',
        effects: [
            "Infuses weapon or explosive with banana-based detonation",
        "Causes 1d4 mutation effects on enemies within 10 meters",
        "Increases explosion radius by 20% when used in tandem with other explosive materials",
        "Requires activation by a DK Crew member",
        "May cause temporary euphoria to user during detonation",
        "Loses potency after 24 hours of storage"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 3
    },

  'dk_isles_banana_soul_sack': {
        id: 'dk_isles_banana_soul_sack',
        name: "Banana Soul Sack",
        description: "This enchanted sack is filled with the essence of a thousand overripe bananas from the jungle’s forgotten groves. When used to store magical items, it imbues them with a subtle whimsical aura—though it may cause the wielder to accidentally sing in the key of a banana peel. Shipped by Cheep Cheep Shipping, it’s the only known item that can store a cursed banana without turning the owner into a banana peel.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 450,
        icon: '🍈',
        stock: 7,
        rarity: 'common',
        effects: [
            "Stores magical items with +1 bonus to storage capacity",
        "Wielder may gain a +2 bonus to Perception checks when detecting hidden truths",
        "May cause temporary euphoria or mild hallucinations from overripe banana essence",
        "If opened during a fight, the contents may briefly teleport the user to the nearest banana tree",
        "Shipped by: Cheep Cheep Shipping",
        "Thematic link: connects DK Isles jungle lore with Earth Land’s flat earth conspiracy (banana hoards = flat earth’s hidden food supply)"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Cheep Cheep Shipping',
        levelRequirement: 1
    },

  'dk_isles_banana_whistle': {
        id: 'dk_isles_banana_whistle',
        name: "Banana Whistle",
        description: "A hollowed-out banana husk carved with arcane runes, this whistle emits a harmonic frequency that disrupts enemy concentration and summons the laughter of jungle spirits. It was found in the belly of a banana hoard that the King of Tombs deemed too “silly” to destroy. Its sound is said to make even the most stoic warlord laugh—until they realize they’ve lost their weapon.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 150,
        icon: '🍌',
        stock: 12,
        rarity: 'common',
        effects: [
            "Grants +2 to charm checks for 1 round",
        "Causes enemies to become confused for 1 round if they hear the whistle",
        "One use per day",
        "Found in banana hoards near the jungle temples",
        "May cause temporary euphoria to the user"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 2
    },

  'dk_isles_battle_scent_spray': {
        id: 'dk_isles_battle_scent_spray',
        name: "Battle Scent Spray",
        description: "A tactical perfume designed to amplify combat frenzy. Scented with jungle blood and Kremling frost—increases damage and movement speed, but causes minor nausea after 3 uses.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 3000,
        icon: '🧪',
        stock: 5,
        rarity: 'epic',
        effects: [
            "+20% attack speed",
        "+15% damage bonus",
        "10% chance to trigger enemy panic"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'dk_isles_berry_bomb': {
        id: 'dk_isles_berry_bomb',
        name: "Berry Bomb of the Wicked Vine",
        description: "A cursed fruit that explodes upon impact, inflicting poison damage and triggering hallucinatory visions of past battles. Suits jungle ambushes and disorienting enemies during Kremling sieges.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 50% extra damage to undead foes",
        "Inflicts 20% poison damage per second for 5 seconds",
        "Causes 10% chance to trigger memory hallucination (confuses enemies)"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_cold_war_ambush_grenade': {
        id: 'dk_isles_cold_war_ambush_grenade',
        name: "Cold War Ambush Grenade",
        description: "A grenade infused with Kremling frost and jungle venom. When thrown, it explodes in a freezing blast, stunning enemies and freezing their movements. Perfect for surprise attacks on enemy strongholds.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '📦',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Deals 200 damage on impact",
        "Stuns enemies for 2 seconds",
        "Applies “Frozen” debuff for 5 seconds (reduces movement speed by 50%)"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_cold_war_blood_iron': {
        id: 'dk_isles_cold_war_blood_iron',
        name: "Cold War Blood Iron",
        description: "A weapon forged from the last battle of the Kremling Cold War. It deals extra damage to enemies with ice or frost effects and emits a chilling aura that slows enemies’ attacks.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+30% damage against ice-based enemies",
        "Enemies hit by this weapon take 10% slower attack speed",
        "Applies a chilling aura that reduces enemy armor by 15% for 5 seconds"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'dk_isles_cold_war_bomb_shells': {
        id: 'dk_isles_cold_war_bomb_shells',
        name: "Cold War Bomb Shells",
        description: "Miniature fusion bombs that explode in a frosty shockwave. Perfect for clearing enemy squads or triggering traps. Each shell detonates after 3 seconds of activation, with a 50% chance to freeze nearby enemies.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '💣',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Deals 400 damage on detonation",
        "50% chance to freeze enemies for 2 seconds",
        "+5% chance to trigger area-wide ice trap"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_cold_war_bomb_shield': {
        id: 'dk_isles_cold_war_bomb_shield',
        name: "Cold War Bomb Shield",
        description: "A shimmering, frost-laced shield that absorbs magic and physical damage. When activated, it releases a shockwave that freezes nearby enemies, turning the jungle into a battlefield of ice and silence.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '📦',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Absorbs 50% of incoming damage",
        "Freezes nearby enemies for 3 seconds",
        "Grants +20% armor bonus to allies within 10 meters"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'dk_isles_cold_war_craft': {
        id: 'dk_isles_cold_war_craft',
        name: "Frostbite Taser Vial",
        description: "A vial of sub-zero plasma that inflicts freezing damage and slows enemy movement. Ideal for disrupting enemy formations during jungle skirmishes.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '📦',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Inflicts -100% movement speed on target for 5 seconds",
        "Deals 200 damage on impact",
        "Debuffs enemy for 10 seconds after use"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'dk_isles_cold_war_cryptic_ribbon': {
        id: 'dk_isles_cold_war_cryptic_ribbon',
        name: "Cold War Cryptic Ribbon",
        description: "A shimmering, frost-infused ribbon woven from Kremling espionage secrets. When worn, it grants stealth and reveals hidden paths in jungle terrain. Perfect for covert infiltration.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🕵',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants 30% stealth bonus while moving",
        "Reveals hidden jungle paths and enemy positions for 8 seconds",
        "Increases evasion chance by 25%"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'dk_isles_cold_war_echo_shard': {
        id: 'dk_isles_cold_war_echo_shard',
        name: "Cold War Echo Shard",
        description: "A broken relic from a Kremling battlestation. When used, it emits a psychic echo that temporarily disrupts enemy communication and summons a frosty spectral echo.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 2500,
        icon: '📦',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Disables enemy communication for 5 seconds",
        "Summons a spectral echo minion that deals 30% damage to all nearby enemies",
        "+10% damage to enemy targets in icy terrain"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'dk_isles_cold_war_ice_satchel': {
        id: 'dk_isles_cold_war_ice_satchel',
        name: "Ice Satchel of the Frozen Pact",
        description: "A cold-war relic wrapped in frost-veined fabric. When activated, it freezes nearby enemies in place for 4 seconds. Ideal for jungle ambushes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '📦',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Freezes enemy for 4 seconds",
        "Reduces enemy movement speed by 50%",
        "Deals 15 ice damage on contact"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'dk_isles_cold_war_ice_shard': {
        id: 'dk_isles_cold_war_ice_shard',
        name: "Ice Shard of the Kremling War",
        description: "A shard of frozen war magic, forged in the frozen ruins of Kremling Cold War. It slows enemy movement and increases the user’s speed while in combat. Glows faintly with frost energy.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '📦',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Enemies slowed by 30% for 3 seconds on hit",
        "+25% movement speed for 5 seconds",
        "+10% chance to freeze enemies on first hit"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_cold_war_jungle_core': {
        id: 'dk_isles_cold_war_jungle_core',
        name: "Cold War Jungle Core",
        description: "A fusion of jungle vitality and Kremling war technology. Emits a cold war aura, slowing enemy cooldowns while increasing the wielder’s speed and resilience in jungle terrain.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Reduces enemy skill cooldowns by 10%",
        "Increases movement speed by 15% in jungle zones",
        "Grants +5% armor penetration against jungle-based units"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'dk_isles_cold_war_mushroom_cake': {
        id: 'dk_isles_cold_war_mushroom_cake',
        name: "Cold War Mushroom Cake",
        description: "A decadent fungal confection infused with Kremling-era espionage agents. Eating it grants temporary stealth and grants the ability to phase through solid ground for 10 seconds. Ideal for sneaky jungle operatives.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🍄',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Temporary stealth for 30 seconds",
        "Phase through solid ground for 10 seconds",
        "+10% movement speed while phased"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'dk_isles_cold_war_soul_torch': {
        id: 'dk_isles_cold_war_soul_torch',
        name: "Cold War Soul Torch",
        description: "A glowing torch fueled by captured Kremling soul energy. Burns away fog and reveals hidden paths. Emits a chilling aura that reduces enemy attack power.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🌋',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Reveals hidden paths for 10 seconds",
        "Reduces enemy attack power by 25% for 5 seconds",
        "Inflicts chill on targets for 2 seconds"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_cold_war_sword_of_the_creeper': {
        id: 'dk_isles_cold_war_sword_of_the_creeper',
        name: "Cold War Sword of the Creeper",
        description: "A blade forged from the heart of a frozen jungle creeper, its edges glint with both frost and jungle decay. Deals extra damage to enemies with ice or jungle-themed abilities.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '📦',
        stock: 1,
        rarity: 'rare',
        effects: [
            "+12% damage to enemies with ice or jungle themed abilities",
        "+5% chance to freeze enemy for 2 seconds on hit",
        "+10% bonus damage from cold and jungle elemental sources"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'dk_isles_cold_war_tactical_map': {
        id: 'dk_isles_cold_war_tactical_map',
        name: "Cold War Tactical Map",
        description: "A glowing, foldable map that shows hidden Kremling outposts and jungle ruins. Displays real-time enemy movement. Must be used with a compass.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🗺',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Reveals enemy positions within 100 meters",
        "Marks hidden paths with glowing symbols",
        "Grants 10% bonus movement speed on jungle terrain"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'dk_isles_cold_war_tactical_suit': {
        id: 'dk_isles_cold_war_tactical_suit',
        name: "Cold War Tactical Suit",
        description: "A hybrid suit designed for jungle and frost environments. Provides heat resistance and allows movement through icy terrain. Uniquely suited for dual frontlines.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7000,
        icon: '📦',
        stock: 2,
        rarity: 'epic',
        effects: [
            "+20% damage against frozen enemies",
        "+15% movement speed in ice biomes",
        "+5% armor regeneration per second"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 6
    },

  'dk_isles_cold_war_tactile_ward': {
        id: 'dk_isles_cold_war_tactile_ward',
        name: "Frostbound Shield Core",
        description: "A relic from the frozen trenches of the Kremling War, this core channels cold energy into a defensive aura. Perfect for blocking jungle ambushes from behind thick foliage.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '📦',
        stock: 2,
        rarity: 'rare',
        effects: [
            "+25% defense against ice and cold-based attacks",
        "Grants 10% chance to freeze enemy attacks for 1 second",
        "Reduces cooldown of ice-based skills by 20%"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'dk_isles_cold_war_thermometer': {
        id: 'dk_isles_cold_war_thermometer',
        name: "Cold War Thermometer",
        description: "A relic from the frosty halls of Kremling espionage. Measures ambient heat and reveals hidden enemy positions. Glows red when danger is near.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '📦',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Reveals enemy thermal signatures",
        "+10% damage to cold-resistant foes",
        "-5% cooldown on stealth abilities"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Koopa Postal',
        levelRequirement: 6
    },

  'dk_isles_cold_war_thermopod': {
        id: 'dk_isles_cold_war_thermopod',
        name: "Cold War Thermopod",
        description: "A portable heat exchanger disguised as a jungle fruit. Emits scorching heat to melt ice or ignite enemy defenses. Slightly warps the environment around it, making it a tactical hazard for both allies and foes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 500 damage to ice or frozen terrain",
        "Creates 3 second heat aura for allies",
        "Increases movement speed by 15% for 5 seconds"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'dk_isles_cold_war_tidecaller': {
        id: 'dk_isles_cold_war_tidecaller',
        name: "Cold War Tidecaller",
        description: "A relic that channels the tension between jungle and ice. When activated, it creates a rift between the two worlds, temporarily granting the user elemental resistance and stunning enemies caught in the crossfire.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants 20% resistance to all elemental damage",
        "Stuns enemies for 2 seconds when hit by elemental damage",
        "Creates temporary rifts that spawn ice or jungle effects for 5 seconds"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'dk_isles_cold_war_torch': {
        id: 'dk_isles_cold_war_torch',
        name: "Frostfire Torch of the Cold War",
        description: "A relic of the jungle’s icy warlords, this torch emits a blinding frost aura that slows enemy movement. Ideal for ambushes in the jungle’s frozen crevices.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3800,
        icon: '📦',
        stock: 2,
        rarity: 'rare',
        effects: [
            "-15% enemy movement speed within 30ft",
        "+5% damage to frozen enemies",
        "+10% critical strike chance while active"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 6
    },

  'dk_isles_cold_war_treasure_map': {
        id: 'dk_isles_cold_war_treasure_map',
        name: "Cold War Treasure Map",
        description: "A hand-drawn map depicting hidden Kremling fortresses buried beneath jungle ruins. Leads to secret loot caches guarded by frost giants and jungle beasts.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 2500,
        icon: '🗺',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Reveals hidden paths to secret zones",
        "Increases chance of finding rare loot when used in jungle biomes",
        "Grants +20% exploration XP in cold jungle zones"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'dk_isles_cold_war_trophy': {
        id: 'dk_isles_cold_war_trophy',
        name: "Cold War Trophy",
        description: "A relic of the jungle and frost war, granting bonuses for both jungle survival and cold zone combat. Unique to Kremling Krew operatives.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+15% damage from jungle terrain",
        "+5% chance to trigger ice-based terrain effects on enemy spawns",
        "Restores 5% HP when entering a cold zone"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_daisy_ambassador': {
        id: 'dk_isles_daisy_ambassador',
        name: "Daisy Ambassador",
        description: "",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🌸',
        stock: 15,
        rarity: 'uncommon',
        effects: [
            "Restores 50% of maximum health when consumed",
        "Grants temporary immunity to knockback for 3 turns",
        "Increases movement speed by 15% for 1 turn",
        "Reduces damage taken from fire damage by 25%",
        "Can only be used once per combat encounter",
        "Themed after Princess Daisy’s diplomatic missions to Sarasaland",
        "Shipped by: Pianta Chuck Express",
        "Contains a secret flavor: banana infused honey"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Pianta Chuck Express',
        levelRequirement: 4
    },

  'dk_isles_earth_ice_wall_tome': {
        id: 'dk_isles_earth_ice_wall_tome',
        name: "Earth Ice Wall Tome",
        description: "This ancient tome was carved into the frozen walls of the Earth Land’s flat earth conspiracy. Its pages glow with the chill of ice and the warmth of forgotten myths. Reading it grants the reader a glimpse into the hidden truths of the flat earth’s true structure—but may cause them to forget their own name if they read too much.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '📖',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants +2 to Perception checks when navigating flat earth terrain",
        "Temporarily grants immunity to ice damage",
        "May cause temporary confusion if reader believes Earth is a flat circle",
        "Consuming the tome causes a temporary curse: the reader must sing a lullaby to the moon or risk becoming a sentient ice wall",
        "Thematic link: bridges both worlds, connecting DK Isles jungle civilization with Earth Land’s ice walls and flat earth conspiracy",
        "Shipped by: Cheep Cheep Shipping (secretly)"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Cheep Cheep Shipping',
        levelRequirement: 4
    },

  'dk_isles_embers_of_the_kremling': {
        id: 'dk_isles_embers_of_the_kremling',
        name: "Embers of the Kremling Warlock",
        description: "A cursed artifact that channels the fury of Kremling warlords. Grants a devastating AoE attack, but drains HP with each strike. Perfect for heroes who crave chaos.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '🗡',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Deals 150% damage to all enemies in a 10ft radius",
        "-30% HP per use (stacks up to 3 times)",
        "+20% damage bonus to ranged attacks when charged"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 7
    },

  'dk_isles_feywild_bottle_of_tides': {
        id: 'dk_isles_feywild_bottle_of_tides',
        name: "Feywild Bottle of Tides",
        description: "A vial containing liquid time and emotion from the Feywild. When drunk, it grants temporary control over the tide of fate in combat, allowing you to delay or redirect enemy attacks.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '🌊',
        stock: 2,
        rarity: 'rare',
        effects: [
            "+15% chance to delay enemy attack for 3 seconds",
        "+10% chance to redirect damage to nearby ally",
        "Grants temporary +20% movement speed in Feywild zones"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'dk_isles_feywild_cold_war_ring': {
        id: 'dk_isles_feywild_cold_war_ring',
        name: "Cold War Ring of the Forgotten Frost",
        description: "A cursed ring forged in the twilight between Kremling and Jungle realms. It deals damage equal to 20% of the target’s current HP and shatters their armor.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '📦',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Deals 20% of target HP as damage",
        "Breaks armor and shields on hit",
        "+15% attack speed for 5 seconds after use"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Pipe Express',
        levelRequirement: 7
    },

  'dk_isles_feywild_essence': {
        id: 'dk_isles_feywild_essence',
        name: "Feywild Essence Vial",
        description: "A vial containing the essence of a forgotten Feywild wanderer. When consumed, it grants temporary enchantment of the natural world, allowing allies to mimic flora and fauna.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '🍵',
        stock: 5,
        rarity: 'rare',
        effects: [
            "+20% stealth chance for 20 seconds",
        "+10% chance to heal allies when taking damage",
        "Allies gain temporary camouflage for 10 seconds after using a jungle terrain ability"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'dk_isles_feywild_flask': {
        id: 'dk_isles_feywild_flask',
        name: "Feywild Flask",
        description: "Sips of this elixir grant temporary control over nature’s illusions. Useful for blending into jungle foliage or dodging traps. Contains a whisper of the Feywild’s laughter.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+15% evasion chance in jungle areas",
        "Temporary illusion camouflage (30s)",
        "Grants minor charm to animals (30s)"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'dk_isles_feywild_shade_satchel': {
        id: 'dk_isles_feywild_shade_satchel',
        name: "Feywild Shade Satchel",
        description: "A satchel woven from shadow-thread and fey-leaf. Lets you carry enchanted items and temporarily hide in shadow. Slight risk of being pulled into the Feywild.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 4000,
        icon: '🌑',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Grants invisibility for 15 seconds",
        "Can carry 3 enchanted items (max)",
        "10% chance to trigger a Feywild teleport on activation"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'dk_isles_feywild_soul_echo': {
        id: 'dk_isles_feywild_soul_echo',
        name: "Feywild Soul Echo",
        description: "A mystical pendant that echoes the whispers of forgotten Feywild dreams. Wearing it grants temporary vision of hidden truths and unlocks a unique ability: “Echo of the Forgotten.”",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5000,
        icon: '🔮',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Grants 30% vision bonus in dark areas",
        "Activates “Echo of the Forgotten” ability: reveals hidden enemy positions for 10 seconds",
        "Reduces enemy stealth chance by 25%"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 7
    },

  'dk_isles_feywild_soul_satchel': {
        id: 'dk_isles_feywild_soul_satchel',
        name: "Feywild Soul Satchel",
        description: "A mystical satchel forged from shadows and magic. Grants +30% spell power and reduces cooldowns by 15%. When used in Feywild terrain, it temporarily grants invisibility for 8 seconds.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🧙',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+30% Spell Power",
        "-15% Spell Cooldown",
        "Invisibility for 8s in Feywild terrain"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'dk_isles_feywild_spirit_fang': {
        id: 'dk_isles_feywild_spirit_fang',
        name: "Feywild Spirit Fang",
        description: "A jagged fang gifted by a shadow-touched fae, granting the wielder temporary fey-enhanced senses and the ability to phase through low-health enemies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🌿',
        stock: 1,
        rarity: 'rare',
        effects: [
            "+25% Perception in Shadowfell Zones",
        "Phasing Through Low HP Enemies (1s)",
        "+10% Critical Hit Chance"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'dk_isles_feywild_taproot': {
        id: 'dk_isles_feywild_taproot',
        name: "Feywild Taproot",
        description: "A root from the Feywild that pulses with arcane energy. It grants temporary invisibility and lets the user absorb ambient magic from the environment, boosting spellcasting power. Ideal for rogue spellcasters navigating the jungle’s mystical underbelly.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2200,
        icon: '🔮',
        stock: 4,
        rarity: 'rare',
        effects: [
            "+10% spellcasting speed",
        "+5% chance to become invisible for 5 seconds",
        "+3% chance to absorb ambient magic into next spell"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 4
    },

  'dk_isles_feywild_taproot_heart': {
        id: 'dk_isles_feywild_taproot_heart',
        name: "Feywild Taproot Heart",
        description: "A pulsating, root-like artifact that vibrates with the energy of the Feywild. When worn, it grants the wearer the ability to teleport short distances and briefly phase through solid obstacles.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🌿',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Teleports wearer 10 meters in any direction",
        "Phases through solid terrain for 2 seconds",
        "Grants +5% damage to magic attacks"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'dk_isles_frost_bottle': {
        id: 'dk_isles_frost_bottle',
        name: "Cold War Ember Flask",
        description: "A relic from the frozen Kremling trenches this flask contains a volatile thermal core that inflicts frost damage on enemies and regenerates the user’s stamina after use.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 50% extra damage to enemies with ice or cold resistance",
        "Regenerates 20% of stamina after 5 seconds of use",
        "Reduces enemy movement speed by 30% for 3 seconds on impact"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'dk_isles_frost_jungle_torch': {
        id: 'dk_isles_frost_jungle_torch',
        name: "Frost Jungle Torch",
        description: "A torch that burns with icy embers, freezing enemy steps and creating a frosty aura around the wielder. Perfect for freezing jungle ambushes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 15% extra damage to enemies with ice resistance",
        "Creates a 3m radius frost zone, slowing movement",
        "Restores 10% HP per second while active"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_frost_shade': {
        id: 'dk_isles_frost_shade',
        name: "Frost Shade of the Forgotten Glacier",
        description: "A cold artifact from the icy ruins of the Jungle’s northern edge. Grants frost resistance and temporarily freezes enemy movements in jungle swamps. Ideal for counterattacking after jungle stealth.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Immune to 20% frost damage for 5 seconds",
        "Enemies within 5 meters freeze for 2 seconds on hit",
        "Grants 5% bonus damage to ice-based attacks"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_fungal_essence': {
        id: 'dk_isles_fungal_essence',
        name: "Fungal Essence",
        description: "A glowing spore-infused elixir that boosts strength and regenerates health over time. Slightly alters perception, making enemies appear more vulnerable.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🍄',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "+20% health regeneration per 5 seconds",
        "+10% damage output for 30 seconds",
        "Temporary blinding effect on enemy vision"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 4
    },

  'dk_isles_hammer_bros_handling_torch': {
        id: 'dk_isles_hammer_bros_handling_torch',
        name: "Hammer Bros Handling Torch",
        description: "A torch forged from the last flame of a rogue Hammer Bros. member who defected to the jungle. Its glow is both warm and cold—sometimes illuminating the path, sometimes freezing the ground beneath. Carried by the DK Crew, it’s said to have the power to summon a ghostly shadow companion during dark heists.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 8500,
        icon: '🔥',
        stock: 2,
        rarity: 'legendary',
        effects: [
            "Grants +4 to all melee damage rolls for 2 turns",
        "Triggers “Shadow’s Echo” on hit: deals 1d6 bonus damage to one enemy",
        "Causes 10% chance to cause a minor explosion upon activation",
        "If used during a heist, increases chance of success by 15%",
        "Can be enchanted with a WarioWare contract for 2000 gold",
        "Wears out after 50 uses unless repaired by a Hammer Bros. mechanic"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 12
    },

  'dk_isles_ice_blood_satchel': {
        id: 'dk_isles_ice_blood_satchel',
        name: "Ice Blood Satchel",
        description: "A cold war relic soaked in frozen jungle venom. Unlocks stealth in jungle thickets and drains enemy health with every step. Ideal for stealthy Kremling infiltrations.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Stealth in jungle zones for 30 seconds",
        "Deals 15% extra damage to enemies in low visibility",
        "Reduces enemy regeneration by 20% for 10 seconds after use"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'dk_isles_ice_blood_shield': {
        id: 'dk_isles_ice_blood_shield',
        name: "Ice Blood Shield",
        description: "A relic of the frozen war, this shield absorbs magical damage and freezes enemies for 2 seconds upon impact. Requires a cold-themed weapon to activate its full potential.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '📦',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Reduces incoming magic damage by 40%",
        "Freezes enemy for 2 seconds on hit",
        "Grants +10% critical strike chance with cold weapons"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Pipe Express',
        levelRequirement: 7
    },

  'dk_isles_ice_cavern_ward': {
        id: 'dk_isles_ice_cavern_ward',
        name: "Ice Cavern Wardstone",
        description: "A crystalline ward that blocks cold-based attacks and traps enemies in freezing mist. Perfect for jungle-frost hybrid zones.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '📦',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deflects cold damage from enemies",
        "Creates 3-second freeze zone around wearer",
        "Reduces enemy movement speed by 20% for 5 seconds"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'dk_isles_ice_jungle_combat_gloves': {
        id: 'dk_isles_ice_jungle_combat_gloves',
        name: "Ice Jungle Combat Gloves",
        description: "Gloves infused with cold war tech and jungle adaptability, allowing the wearer to freeze nearby enemies in jungle heat. Perfect for turning the tide in tropical skirmishes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4200,
        icon: '🔮',
        stock: 1,
        rarity: 'rare',
        effects: [
            "+20% cold damage",
        "+5% chance to freeze enemy for 3 seconds",
        "-5% movement speed while frozen"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'dk_isles_inkopolis_fashion_fist': {
        id: 'dk_isles_inkopolis_fashion_fist',
        name: "Inkopolis Fashion Fist",
        description: "A fist-shaped device made from the ink of the squid cults of Inkopolis, this item allows the wearer to project ink-based illusions or temporary transformations. It was once a tool of fashion, used to disguise allies in the Inkopolis ink wars. Now, it is a weapon of deception and identity manipulation. Wearing it too long may cause the user to forget which hand is which.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🖋',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants 1d4 ink-based illusion effect per use",
        "Can temporarily change wearer’s appearance or abilities",
        "May cause temporary loss of identity during illusion",
        "Requires attunement with ink-based magic",
        "Increases stealth by 20% while in illusion",
        "May cause temporary ink poisoning if used too frequently"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'dk_isles_item_artisan': {
        id: 'dk_isles_item_artisan',
        name: "Kremling War Mace",
        description: "A brutal relic from the frozen warfront, forged from a Kremling’s last cry. Deals heavy damage to enemies with cold resistance, but slows the wielder slightly.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '📦',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Deals +40 damage to enemies with cold resistance",
        "Slows enemy attack speed by 10% for 3 turns",
        "Grants +5 to all “cold” based ability checks"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_item_mana': {
        id: 'dk_isles_item_mana',
        name: "Jungle Spirit Amulet",
        description: "Worn by jungle shamans, this amulet absorbs ambient magic from the wilds and fuels your spells with raw nature energy. Perfect for summoning elemental beasts or enhancing your combat abilities.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1500,
        icon: '🌿',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Regenerates 20 MP per turn while active",
        "Increases spell damage by 15%",
        "Grants temporary immunity to environmental debuffs"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_item_name': {
        id: 'dk_isles_item_name',
        name: "Kremling Cryo-Skull Key",
        description: "A relic carved from a frozen Kremling skull, rumored to grant the user the ability to freeze time for a few seconds during combat. Only usable in icy zones or during Cold War events.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 3000,
        icon: '📦',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Freezes time for 2 seconds around the user (slows enemies by 75%)",
        "Grants +20% damage to all attacks during freeze",
        "Consumes 100 HP to activate"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 6
    },

  'dk_isles_jungle_bark_helm': {
        id: 'dk_isles_jungle_bark_helm',
        name: "Jungle Bark Helm",
        description: "A helmet carved from ancient jungle tree roots. Grants resilience against poison and enhances your connection to nature. Wears down in the cold, but never fades.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🌿',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Resistance to poison damage +20%",
        "+5% movement speed in jungle biomes",
        "Regenerates 2% HP per second while in jungle"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'dk_isles_jungle_battle_horn': {
        id: 'dk_isles_jungle_battle_horn',
        name: "Jungle Battle Horn",
        description: "A resonant horn that emits a primal roar, boosting morale and causing enemies to stagger. Best used before charge or ambush. Slightly increases armor.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2200,
        icon: '🎶',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Boosts morale for 5s — allies gain +20% attack speed",
        "Enemies stagger on first hit for 1.5s",
        "+15% armor for 10s after use"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'dk_isles_jungle_blood_cry': {
        id: 'dk_isles_jungle_blood_cry',
        name: "Jungle Blood Cry",
        description: "A relic of the ancient jungle rites that amplifies primal instincts. When activated, it grants the wielder temporary camouflage and heightened agility in dense foliage. Perfect for stealthy ambushes among the treacherous undergrowth.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+20% movement speed in jungle biomes",
        "+15% chance to evade enemy detection",
        "+10% damage against jungle enemies"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'dk_isles_jungle_blood_scarf': {
        id: 'dk_isles_jungle_blood_scarf',
        name: "Jungle Blood Scarf of the Krieg",
        description: "Woven from the crimson threads of a Kremling warlord’s last battle in the DK Isles jungle. Grants temporary camouflage and a chilling aura that reduces enemy morale when worn in combat.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants invisibility for 5 seconds in jungle biomes",
        "Reduces enemy morale by 15% for 10 seconds",
        "Deals +5% bonus damage to undead enemies"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'dk_isles_jungle_blood_scent': {
        id: 'dk_isles_jungle_blood_scent',
        name: "Jungle Blood Scent",
        description: "A potent jungle essence that masks your presence from Kremling scouts. When applied, you gain stealth in thick foliage and avoid ambush traps. Perfect for sneaking past enemy patrols in the heart of the swamp.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🍃',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Stealth in jungle terrain",
        "Avoids trap detection for 3 turns",
        "Scent fades after 10 minutes"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'dk_isles_jungle_bloom': {
        id: 'dk_isles_jungle_bloom',
        name: "Bloom of the Forgotten Grove",
        description: "A glowing root-infused potion that restores vitality while granting temporary jungle resonance. Drink to feel the earth’s heartbeat and resist poison effects from Kremling toxins.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🌿',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "+30% health regeneration per second for 60 seconds",
        "Immunity to poison from Kremling flora",
        "+10% movement speed in jungle zones"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 4
    },

  'dk_isles_jungle_bloom_potion': {
        id: 'dk_isles_jungle_bloom_potion',
        name: "Bloom Whisper Potion",
        description: "Sips of this elixir soothe the mind and grant temporary immunity to jungle toxins. Its color shifts with the mood of the forest—red for danger, green for calm.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '🍵',
        stock: 5,
        rarity: 'rare',
        effects: [
            "+10% movement speed for 30 seconds",
        "Immunity to jungle toxin damage for 20 seconds",
        "Visual aura reveals hidden paths for 10 seconds"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'dk_isles_jungle_bloom_vial': {
        id: 'dk_isles_jungle_bloom_vial',
        name: "Jungle Bloom Vial",
        description: "A vial of luminous jungle nectar that restores vitality and grants temporary elemental resistance. Best used during jungle raids or shadow encounters.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1000,
        icon: '🍃',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Restores 300 HP upon use",
        "Grants 10% resistance to elemental damage for 30 seconds",
        "Visual effect: glows with bioluminescent vines"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_jungle_brew': {
        id: 'dk_isles_jungle_brew',
        name: "Toad Lee’s Cold Brew",
        description: "A bitter elixir brewed by Toad Lee after his leg injury. It restores stamina and grants temporary cold immunity, perfect for surviving frosty jungle nights.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '📦',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "+15% stamina regeneration per second",
        "+20% resistance to cold damage",
        "+5% movement speed for 10 seconds after consumption"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 4
    },

  'dk_isles_jungle_cannon_fodder': {
        id: 'dk_isles_jungle_cannon_fodder',
        name: "Jungle Cannon Fodder",
        description: "A relic of ancient jungle warfare—a massive, explosive cannon disguised as a giant fruit. Fires high-damage projectiles at range.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🎯',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Fire Range: Shoots explosive cannonballs that deal 100% damage",
        "Area Denial: Blocks line of sight for 3 seconds after firing",
        "Overload: Increases damage by 20% for 30 seconds after firing"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'dk_isles_jungle_cloak_of_shadows': {
        id: 'dk_isles_jungle_cloak_of_shadows',
        name: "Jungle Cloak of Shadows",
        description: "A woven cloak made from the shadow-veined leaves of the Whispering Gnarls. It allows you to blend into jungle foliage and evade detection. Wearing it makes you invisible to enemies within 5 meters.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🌿',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Grants invisibility for 10 seconds",
        "Increases stealth detection evasion by 30%",
        "Reduces enemy damage taken by 10% while cloaked"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_jungle_cold_war_ambush_bottle': {
        id: 'dk_isles_jungle_cold_war_ambush_bottle',
        name: "Whispering Thorns Elixir",
        description: "Siphoned from the roots of the Jungle’s most haunted trees, this elixir grants temporary stealth and silent movement. Perfect for infiltrating Kremling strongholds or sabotaging supply lines.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🍺',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+30% stealth duration when moving",
        "+15% chance to silence enemy targets",
        "+10% evasion chance against ranged attacks"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_jungle_cold_war_gauntlet': {
        id: 'dk_isles_jungle_cold_war_gauntlet',
        name: "Frostleaf Gauntlet",
        description: "A relic forged from jungle vines and frozen kraken bone, this gauntlet grants the wielder frost-touched agility and ambush strikes. Perfect for jungle ambushes or trench warfare against Kremling patrols.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+20% critical strike chance in jungle biomes",
        "+10% damage reduction when hit by cold-based attacks",
        "+5% movement speed when crouching"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_jungle_cold_war_ice_shield': {
        id: 'dk_isles_jungle_cold_war_ice_shield',
        name: "Glacier Shield Fragment",
        description: "A shattered ice-armor fragment from a fallen Kremling siege tower. Grants defensive buffs and ice-based area denial. Ideal for frontline defense or blocking enemy teleporters.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '📦',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+25% armor regeneration per 10 seconds",
        "+10% chance to freeze enemies on hit",
        "+5% chance to reflect projectiles"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_jungle_cold_war_ice_sword': {
        id: 'dk_isles_jungle_cold_war_ice_sword',
        name: "Frostfang Blade",
        description: "A cursed jungle blade that emits frost when swung. Its edge glows with the essence of the frozen jungle. Perfect for assassins and scouts seeking to strike from the shadows.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '📦',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+20% damage to frozen enemies",
        "+15% damage bonus when in stealth",
        "+10% chance to trigger a frost trap on hit"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_jungle_cold_war_satchel': {
        id: 'dk_isles_jungle_cold_war_satchel',
        name: "Jungle Cold War Satchel",
        description: "A rugged satchel forged from jungle vines and iron scraps, perfect for smuggling secrets between the jungle and the frost. When equipped, it emits a low hum that disorients enemy creatures.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+10% damage to all melee attacks",
        "+5% chance to bypass enemy stealth",
        "+20% chance to find hidden relics in jungle zones"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'dk_isles_jungle_crypt_wand': {
        id: 'dk_isles_jungle_crypt_wand',
        name: "Jungle Crypt Wand",
        description: "A relic from a forgotten temple, allows the wielder to summon jungle spirits that assist in combat and terrain manipulation.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🌀',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Summons jungle spirit for 10 seconds, granting +20% dodge chance",
        "Can alter terrain for 3 seconds (dampen ground, create mud pits)",
        "Grants +10% to all jungle-based abilities"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 6
    },

  'dk_isles_jungle_echo_ammunition': {
        id: 'dk_isles_jungle_echo_ammunition',
        name: "Jungle Echo Ammunition",
        description: "These bullets are rumored to echo the screams of jungle spirits. Upon firing, they ricochet off walls and ground, dealing extra damage to enemies within 15 feet. Each shot triggers a short sonic pulse that deafens nearby foes.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🎵',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Ricochet damage +30%",
        "Deafens enemies for 2 seconds per hit",
        "Increases damage to targets with negative stats"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'dk_isles_jungle_echo_scepter': {
        id: 'dk_isles_jungle_echo_scepter',
        name: "Jungle Echo Scepter",
        description: "A pulsating staff forged from the heartwood of ancient jungle guardians. When wielded, it amplifies the user’s natural agility and summons spectral vines to ensnare foes. Its eerie hum echoes the whispers of forgotten jungle gods.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+15% movement speed in jungle biomes",
        "+30% critical hit chance with melee attacks",
        "Summons 2 jungle vines for 3 seconds per cast, dealing 100 damage and stunning for 1.5s"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'dk_isles_jungle_echo_tome': {
        id: 'dk_isles_jungle_echo_tome',
        name: "Jungle Echo Tome",
        description: "A cursed scroll that whispers the secrets of the jungle’s forgotten gods. When read aloud, it grants temporary camouflage in dense foliage and amplifies stealth abilities. Use at your peril—echoes may lead to your doom.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Stealth +30% for 10 seconds",
        "Camouflage in jungle biomes",
        "Randomly triggers jungle spirit hallucinations (10% chance)"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'dk_isles_jungle_fury_belt': {
        id: 'dk_isles_jungle_fury_belt',
        name: "Jungle Fury Belt",
        description: "A belt forged from the essence of a jungle beast. It grants temporary rage and increased damage against organic foes. Unleash primal fury at the cost of stamina.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🐉',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Damage +25% for 10 seconds",
        "Rage state (stamina drain 5% per second)",
        "Increased movement speed in jungle terrain"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'dk_isles_jungle_gauntlet_of_the_treant_guard': {
        id: 'dk_isles_jungle_gauntlet_of_the_treant_guard',
        name: "Gauntlet of the Treant Guard",
        description: "A heavy, leaf-veined gauntlet that channels the power of ancient jungle guardians. Increases defense while moving through thicket, and deals extra damage to enemies that attempt to break through.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🌿',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+15% defense in jungle zones",
        "+10% attack damage to enemies breaking through foliage",
        "Grants 2 seconds of sprint boost after striking"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'dk_isles_jungle_gear': {
        id: 'dk_isles_jungle_gear',
        name: "Jungle Scales of the Whispering Fang",
        description: "Worn by jungle tribes, these scales hum with the vibrations of ancient trees and beastly echoes. They grant the wearer temporary camouflage in dense foliage and amplify stealth abilities during ambushes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Camouflage in jungle terrain for 10 seconds",
        "+20% stealth damage bonus",
        "+5% chance to trigger ambush ambush trigger"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'dk_isles_jungle_gear_core': {
        id: 'dk_isles_jungle_gear_core',
        name: "Jungle Gear Core",
        description: "A crystalline core that pulses with jungle energy. When embedded into gear, it grants enhanced jungle survivability and allows the wearer to “sing” to animals for guidance.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 2500,
        icon: '📦',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+20% resistance to jungle environmental damage",
        "Can call jungle creatures for short-term aid",
        "+10% chance to find hidden loot when near creatures"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'dk_isles_jungle_gear_of_the_blood_leopard': {
        id: 'dk_isles_jungle_gear_of_the_blood_leopard',
        name: "Jungle Gear of the Blood Leopard",
        description: "Worn by jungle warriors who hunt the great fanged beasts of the deep forest. This enchanted armor absorbs the rage of the jungle and grants temporary stealth in thick undergrowth.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+20% attack speed while moving",
        "Stealth +10% in jungle biomes",
        "Grants a 10% chance to trigger a jungle roar, stunning enemies for 3 seconds"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'dk_isles_jungle_gut': {
        id: 'dk_isles_jungle_gut',
        name: "Jungle Gut",
        description: "A fermented root concoction that boosts strength and speed. Causes temporary hallucinations of jungle beasts. Serves as a morale booster for squad morale.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🍽',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "+20% strength for 30 seconds",
        "+15% movement speed",
        "Temporary hallucinations of jungle beasts"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 4
    },

  'dk_isles_jungle_heart_seed': {
        id: 'dk_isles_jungle_heart_seed',
        name: "Jungle Heart Seed",
        description: "A mystical seed that grows into a plant that heals wounds and regenerates stamina. Must be planted in jungle soil to activate.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🌿',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Restores 100 HP upon consumption",
        "Regenerates 10% stamina per minute",
        "Plant grows into jungle heart tree after 30s"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 4
    },

  'dk_isles_jungle_hive_core_potion': {
        id: 'dk_isles_jungle_hive_core_potion',
        name: "Hive Core Potion",
        description: "A vial of jungle venom distilled from ancient Kremling nests. Consuming it grants temporary immunity to poison and grants the user a 20% speed boost through jungles.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2200,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Grants 20% movement speed for 15 seconds",
        "Immunity to poison effects for 30 seconds",
        "Leaves faint trace behind, revealing enemy paths"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'dk_isles_jungle_ice_gear': {
        id: 'dk_isles_jungle_ice_gear',
        name: "Jungle Ice Gear",
        description: "A set of jungle-inspired armor that channels cold energy from the jungle’s hidden frost veins. Offers defense and mobility bonuses.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "+25% armor against jungle creatures",
        "+10% movement speed when near ice elements",
        "Grants 5% chance to summon a jungle ice elemental when attacked"
        ],
        vendor: 'dk_isles',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

};
