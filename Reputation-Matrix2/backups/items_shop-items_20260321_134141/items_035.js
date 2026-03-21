// Shop items chunk 35 of 51
// Items 3401 to 3500 (100 items)
// Auto-generated: 2026-03-21 13:41:13

import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_035 = {
  'refijia_synthetic_clone': {
        id: 'refijia_synthetic_clone',
        name: "Refijian Synthetic Clone (Emergency)",
        description: "A perfectly matched synthetic clone, ready for consciousness transfer upon the original's death.",
        category: SHOP_CATEGORIES.premium,
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

  'refijia_synthetic_masterpiece': {
        id: 'refijia_synthetic_masterpiece',
        name: "Refijian Synthetic Masterpiece (Unique)",
        description: "A unique android body built specifically for you, incorporating the best of all known enhancements.",
        category: SHOP_CATEGORIES.premium,
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

  'refijia_voice_implant': {
        id: 'refijia_voice_implant',
        name: "Refijian Voice Implant (Synthetic)",
        description: "A small cybernetic throat piece that allows perfect speech in any language you know.",
        category: SHOP_CATEGORIES.equipment,
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

  'refijian_disguise_kit': {
        id: 'refijian_disguise_kit',
        name: "Refijian Disguise Kit",
        description: "A theatrical kit utilizing advanced makeup and subtle illusion techniques.",
        category: SHOP_CATEGORIES.equipment,
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

  'refijian_illusion_gem': {
        id: 'refijian_illusion_gem',
        name: "Refijian Illusion Gem",
        description: "A smooth stone that refracts light to create minor, believable illusions.",
        category: SHOP_CATEGORIES.equipment,
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

  'regal_empire_audience_invitation': {
    id: 'regal_empire_audience_invitation',
    name: "Regal Empire Audience Invitation",
    description: "An ornate invitation granting you a formal (and likely dangerous) audience with a minor noble.",
    category: SHOP_CATEGORIES.CURIOSITIES,
    price: 8000,
    icon: '📜',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Grants access to the Noble District and its associated events",
        "May grant a boon or a quest from the noble, depending on your performance",
        "Failing etiquette may result in imprisonment"
    ],
    vendor: 'regal_empire',
    shippedBy: 'Royal Messenger',
    levelRequirement: 4
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

  'regal_empire_scepter_fragment': {
    id: 'regal_empire_scepter_fragment',
    name: "Regal Empire Scepter Fragment",
    description: "A broken piece of royal regalia that commands minor loyalty from guards.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 13200,
    icon: '👑',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Once per day: Charm a humanoid guard (Wisdom save DC 12, lasts 1 hour)",
        "+1 to Persuasion checks with nobility",
        "Shatters if used on royalty – better for common folk",
        "Engraved with imperial eagles for style points"
    ],
    vendor: 'regal_empire',
    shippedBy: 'Royal Caravan (Delayed)',
    levelRequirement: 6
},

  'regency_loyalty_pact': {
        id: 'regency_loyalty_pact',
        name: "Mushroom Regency Loyalty Pact",
        description: "A contract binding minor Mycological nobles to your service for life.",
        category: SHOP_CATEGORIES.faction,
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

  'reinforced_with_slag_infused_steel_1': {
        id: 'reinforced_with_slag_infused_steel_1',
        name: "Ironclad Gear",
        description: "Reinforced with slag-infused steel and forged by the Iron Legion’s last surviving blacksmiths. Grants immunity to crushing damage from machinery and allows you to ignore noise from factory alarms.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Immunity to crushing damage",
        "Ignore factory alarm noise",
        "Increases melee damage by 10%"
        ],
        vendor: 'midlands',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'remorhaz_cooling_system': {
    id: 'remorhaz_cooling_system',
    name: "Remorhaz Cooling System Installation",
    description: "Internal coolant systems for taming Remorhaz mounts.",
    category: SHOP_CATEGORIES.services,
    price: 285000,
    icon: '❄️',
    stock: 6,
    rarity: 'epic',
    effects: [
        "Remorhaz mount no longer deals fire damage to rider",
        "Mount can suppress heat aura at will",
        "Made by: Frost Giant Engineers"
    ],
    vendor: 'cold_riders',
    shippedBy: 'Ice Road Truckers',
    levelRequirement: 13
},

  'rental_warhorse_protection_plan': {
    id: 'rental_warhorse_protection_plan',
    name: "Rental Warhorse Protection Plan",
    description: "Insure your mount against 'accidental' arrow-related incidents.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 4500,
    icon: '🐴',
    stock: 20,
    rarity: 'common',
    effects: [
        "If your warhorse dies within 30 days, get a replacement free",
        "Covers: Combat, environmental hazards, bad oats",
        "Does NOT cover: Dragon snacks, betrayal, identity theft",
        "Made by: Stables & Liability Co."
    ],
    vendor: 'honest_eds_stables',
    shippedBy: 'Horse-drawn Wagon',
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

  'retcon_gem': {
    id: 'retcon_gem',
    name: "Retcon Gem",
    description: "Change anything that happened in the past.",
    category: SHOP_CATEGORIES.CONSUMABLES,
    price: 88000000,
    icon: '💎',
    stock: 1,
    rarity: 'cosmic',
    effects: [
        "Retcon any event in the campaign's history (DM must accept the new version)",
        "Can bring back dead PCs, undo TPKs, or make the villain your childhood friend",
        "Made by: The Editor"
    ],
    vendor: 'narrative_control',
    shippedBy: 'Flashback',
    levelRequirement: 100
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

  'revival_insurance_policy': {
    id: 'revival_insurance_policy',
    name: "Revival Insurance Policy (Basic)",
    description: "Pre-pay for your resurrection. Terms and conditions apply.",
    category: SHOP_CATEGORIES.SERVICES,
    price: 22500,
    icon: '📋',
    stock: 5,
    rarity: 'rare',
    effects: [
        "If you die within 30 days, a cleric arrives in 2d6 hours to Revivify you",
        "Doesn't cover death by: Dragons, demons, or 'stupid decisions'",
        "25% deductible (they take your best magic item)",
        "Made by: Afterlife Assurance Co."
    ],
    vendor: 'insurance_broker',
    shippedBy: 'Certified Mail',
    levelRequirement: 7
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

  'robensonia_emergency_meeting_pod': {
    id: 'robensonia_emergency_meeting_pod',
    name: "Robensonia Emergency Meeting Pod (5-Minute)",
    description: "A single-use pod for emergency huddles.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 14500,
    icon: '🚀',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Creates soundproof 10ft bubble for 5 minutes of private party discussion (time stops outside)",
        "Bubble is visible and says 'EMERGENCY MEETING' in flashing lights",
        "One random party member is ejected from the bubble (they're 'sus')",
        "Made by: Robensonia Emergency Systems"
    ],
    vendor: 'robensonia',
    shippedBy: 'Emergency Launch',
    levelRequirement: 5
},

  'robensonia_emergency_meeting_pod_5min': {
    id: 'robensonia_emergency_meeting_pod_5min',
    name: "Robensonia Emergency Meeting Pod (5 Min)",
    description: "Quick emergency meeting.",
    category: SHOP_CATEGORIES.PREMIUM,
    price: 12500,
    icon: '🚀',
    stock: 6,
    rarity: 'uncommon',
    effects: [
        "5-minute time-stop bubble for party discussion (once per day)",
        "One random party member is muted (can't speak in bubble)",
        "Bubble is visible and makes you look suspicious",
        "Made by: Robensonia Quick Meetings"
    ],
    vendor: 'robensonia',
    shippedBy: 'Emergency Launch',
    levelRequirement: 5
},

  'robensonia_emergency_microwave': {
    id: 'robensonia_emergency_microwave',
    name: "Robensonia Emergency Microwave",
    description: "Cooks meals instantly, with questionable results.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 15500,
    icon: '📡',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Cooks any recipe in 1 round (microwave magic)",
        "50% chance food is cold in the center (disadvantage on next check from disappointment)",
        "Sometimes cooks the plate too (plate becomes too hot to hold, 1 fire damage)",
        "Made by: Robensonia Quick-Meal Systems"
    ],
    vendor: 'robensonia',
    shippedBy: 'Emergency Launch',
    levelRequirement: 5
},

  'robensonia_environmental_suit': {
        id: 'robensonia_environmental_suit',
        name: "Robensonia Full Environmental Suit",
        description: "A sealed suit designed to survive vacuum, high pressure, and extreme temperatures.",
        category: SHOP_CATEGORIES.equipment,
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

  'robensonia_escape_pod_mini_service': {
    id: 'robensonia_escape_pod_mini_service',
    name: "Robensonia Escape Pod Mini Service",
    description: "A tiny pod for 'emergencies' like bad dates.",
    category: SHOP_CATEGORIES.services,
    price: 8500,
    icon: '🚀',
    stock: 10,
    rarity: 'uncommon',
    effects: [
        "Once per day: Teleport 10ft away as bonus action",
        "Pod is pocket-sized – fits in hand",
        "Launches with a sad 'poof' sound",
        "Made by: Robensonia Engineers"
    ],
    vendor: 'robensonia_lab',
    shippedBy: 'Mini Crate',
    levelRequirement: 5
},

  'robensonia_fleet_dispatch': {
        id: 'robensonia_fleet_dispatch',
        name: "Robensonia Automated Fleet Dispatch",
        description: "Dispatch 3 mid-sized attack drones (CR 5 each) to eliminate targets or defend an area.",
        category: SHOP_CATEGORIES.faction,
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

  'robensonia_global_communication': {
        id: 'robensonia_global_communication',
        name: "Robensonian Global Communication Array",
        description: "Install a permanent communications relay that allows instantaneous, secure contact across the globe.",
        category: SHOP_CATEGORIES.faction,
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

  'robensonia_lab_energy_bar_recipe': {
    id: 'robensonia_lab_energy_bar_recipe',
    name: "Recipe: Robensonia Lab Energy Bar ",
    description: "Compact bar packed with 'sci-fi' nutrients for escapes.",
    category: SHOP_CATEGORIES.services,
    price: 7000,
    icon: '🍫',
    stock: 7,
    rarity: 'uncommon',
    effects: [
        "Teaches recipe: Press nuts and gels (20 min); eat to gain +10 ft speed for 1 hour (rocket fuel!)",
        "Requires: Nuts and lab gels; chewy",
        "Might fizz in your mouth",
        "Made by: Lab Nutritionists"
    ],
    vendor: 'robensonia_lab',
    shippedBy: 'Bar Booster Book',
    levelRequirement: 5
},

  'robensonia_lab_portable_heat_gun': {
    id: 'robensonia_lab_portable_heat_gun',
    name: "Robensonia Lab Portable Heat Gun",
    description: "Handheld gun for quick energy bar melting.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 7500,
    icon: '🍫',
    stock: 5,
    rarity: 'uncommon',
    effects: [
        "Heats precisely; reduces melt time by 50%",
        "Battery lasts 5 uses; sci-fi safe",
        "Overheats gloves (hot hands)",
        "Made by: Lab Engineers"
    ],
    vendor: 'robensonia_lab',
    shippedBy: 'Gadget Gun Gear',
    levelRequirement: 5
},

  'robensonia_lab_tech_suit': {
    id: 'robensonia_lab_tech_suit',
    name: "Robensonia Lab Tech Suit ",
    description: "One-piece jumpsuit for mad scientists.",
    category: SHOP_CATEGORIES.premium,
    price: 16000,
    icon: '👔',
    stock: 4,
    rarity: 'rare',
    effects: [
        "Advantage on Intelligence (Technology) checks",
        "Suit pockets gadgets (holds 3 small tools)",
        "Zipper sticks during experiments",
        "Made by: Lab Tailors"
    ],
    vendor: 'robensonia_lab',
    shippedBy: 'Gizmo Garment',
    levelRequirement: 6
},

  'robensonia_nanite_swarm': {
        id: 'robensonia_nanite_swarm',
        name: "Robensonia Nanite Swarm (Defensive)",
        description: "A cloud of microscopic robots programmed to swarm and repair or defend.",
        category: SHOP_CATEGORIES.equipment,
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

  'robensonia_orbital_scanner': {
        id: 'robensonia_orbital_scanner',
        name: "Robensonia Orbital Scanner Access",
        description: "Hire the Robensonian orbital satellite network to map a massive area (1,000 sq miles).",
        category: SHOP_CATEGORIES.services,
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

  'robensonia_planetary_escape_pod': {
        id: 'robensonia_planetary_escape_pod',
        name: "Robensonia Planetary Escape Pod (Automated)",
        description: "A one-person vessel designed for emergency exit from failing celestial bodies.",
        category: SHOP_CATEGORIES.premium,
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

  'robensonia_recipe_emergency_protein_rations': {
    id: 'robensonia_recipe_emergency_protein_rations',
    name: "Recipe: Robensonia Emergency Protein Rations",
    description: "Tasteless paste that keeps you alive.",
    category: SHOP_CATEGORIES.RECIPE,
    price: 7500,
    icon: '📜',
    stock: 9,
    rarity: 'common',
    effects: [
        "Create 7 days of tasteless rations that prevent starvation",
        "Grants advantage on saves vs. disease (sterile nutrition)",
        "Disadvantage on Charisma checks while eating it (it's depressing)",
        "Made by: Robensonia Survival Systems"
    ],
    vendor: 'robensonia',
    shippedBy: 'Emergency Launch',
    levelRequirement: 5
},

  'robensonia_repair_subroutine': {
        id: 'robensonia_repair_subroutine',
        name: "Robensonia Repair Subroutine (Massive)",
        description: "A powerful subroutine capable of repairing large, heavily damaged structures or vessels.",
        category: SHOP_CATEGORIES.services,
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

  'robensonia_self_aware_golem': {
        id: 'robensonia_self_aware_golem',
        name: "Robensonia Self-Aware Golem (Custodian Type)",
        description: "A customized, fully intelligent automaton programmed for protection and logistics.",
        category: SHOP_CATEGORIES.premium,
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

  'robensonia_sentient_AI_companion': {
        id: 'robensonia_sentient_AI_companion',
        name: "Robensonia Sentient AI Companion (Archivist)",
        description: "A small, independent AI unit capable of recording events and offering tactical advice.",
        category: SHOP_CATEGORIES.equipment,
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

  'robensonia_sentient_fleet_access': {
        id: 'robensonia_sentient_fleet_access',
        name: "Robensonia Sentient Fleet Access (1 Ship)",
        description: "Temporary command codes to commandeer one fully automated, combat-ready Robensonian scout ship.",
        category: SHOP_CATEGORIES.faction,
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

  'robensonia_sentient_weapon_platform': {
        id: 'robensonia_sentient_weapon_platform',
        name: "Robensonian Sentient Weapon Platform",
        description: "A self-guided, modular turret system with basic combat AI.",
        category: SHOP_CATEGORIES.faction,
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

  'robensonia_space_suit': {
        id: 'robensonia_space_suit',
        name: "Robensonian Zero-G Suit",
        description: "A lightweight suit providing full life support in hard vacuum or deep sea pressure.",
        category: SHOP_CATEGORIES.equipment,
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

  'robensonia_terraforming_unit': {
        id: 'robensonia_terraforming_unit',
        name: "Robensonia Micro-Terraforming Unit",
        description: "A ground-penetrating device that rapidly stabilizes unstable soil or creates small arable zones.",
        category: SHOP_CATEGORIES.faction,
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

  'robensonia_wario_branded_escape_pod': {
    id: 'robensonia_wario_branded_escape_pod',
    name: "Robensonia Wario-Branded Escape Pod",
    description: "A one-person pod with Wario's face on it. 'Guaranteed to escape... something!'",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5800,
    icon: '🚀',
    stock: 3,
    rarity: 'uncommon',
    effects: [
        "Launch pod: move 60ft in random direction (DM chooses), you are prone at destination",
        "Pod leaves a garlic-scented smoke cloud: 10ft radius, CON save DC 12 or poisoned for 1 round",
        "25% chance pod doesn't launch: just makes a loud 'WAH!' noise and smoke",
        "Made by: Robensonia (Licensed by Wario)"
    ],
    vendor: 'robensonia',
    shippedBy: 'Emergency Launch (Maybe)',
    levelRequirement: 6
},

  'robensonia_wario_space_suit': {
    id: 'robensonia_wario_space_suit',
    name: "Robensonia Wario Space Suit",
    description: "A space suit with Wario's face on the helmet.",
    category: SHOP_CATEGORIES.EQUIPMENT,
    price: 5800,
    icon: '🧑‍🚀',
    stock: 3,
    rarity: 'uncommon',
    effects: [
        "Immune to vacuum damage for 1 hour (leaks slightly)",
        "Helmet fogs up: disadvantage on Perception",
        "You must say 'WAH!' when using jetpack (disadvantage on Stealth)",
        "Made by: Robensonia (Wario Approved)"
    ],
    vendor: 'robensonia',
    shippedBy: 'Emergency Launch',
    levelRequirement: 6
},

  'robensonia_weapon_integration': {
        id: 'robensonia_weapon_integration',
        name: "Robensonia Weapon Integration (Cybernetic)",
        description: "Service to surgically implant a high-tech weapon directly into your arm/body.",
        category: SHOP_CATEGORIES.services,
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

  'robensonian_air_filter': {
        id: 'robensonian_air_filter',
        name: "Robensonian Air Filter (Personal)",
        description: "A compact respirator mask filtering air down to the atomic level.",
        category: SHOP_CATEGORIES.equipment,
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

  'robensonian_bio_suit': {
        id: 'robensonian_bio_suit',
        name: "Robensonian Bio-Suit (Atmospheric)",
        description: "A light, flexible suit protecting against noxious gases and mild poisons.",
        category: SHOP_CATEGORIES.equipment,
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

  'rogueport_abyssal_belt_of_silence': {
        id: 'rogueport_abyssal_belt_of_silence',
        name: "Abyssal Belt of the Silent Void",
        description: "Worn by those who dare walk through the Shadowfell’s silent abyss, this belt muffles all sound and allows the wearer to move unseen. It is rumored to have been crafted by a rogue priest who sacrificed his voice to the void.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🕯',
        stock: 1,
        rarity: 'rare',
        effects: [
            "+10% chance to dodge attacks in silence",
        "+50% stealth bonus while moving",
        "Grants “Void Whisper” ability: one attack per round can silence enemies for 1 turn"
        ],
        vendor: 'rogueport',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 5
    },

  'rogueport_bargain_bone': {
        id: 'rogueport_bargain_bone',
        name: "Bargain Bone",
        description: "A hollow bone carved with the name of a dead merchant, it promises to “buy” anything you wish for. The bone is a scam—no real magic, just a hollow shell. But the buyer is rewarded with a tiny bit of luck and a laugh. The bone is sold by Dry Bones Dead Drop, and only fools believe it works.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 3000,
        icon: '🦴',
        stock: 5,
        rarity: 'rare',
        effects: [
            "Grants 1d4 bonus to luck checks",
        "Causes the buyer to hear the voice of a ghost for 1 round",
        "If used in a heist, the buyer must pay 100 gold to the ghost to “keep the ghost quiet”",
        "May cause temporary paranoia if used in a cursed area",
        "Does not work if the buyer is already cursed",
        "The bone is hollow—no real magic, just a joke",
        "The Crystal Blade ties to Earth Land’s arcane energy.",
        "The Mirage Satchel connects to the flat earth conspiracy’s mental illusions.",
        "The Void Touched Amulet links to the Minus World and the lost world lore.",
        "The Bargain Bone is a scam, but its theme ties to the underworld’s black market culture and Dry Bones Dead Drop’s shady dealings."
        ],
        vendor: 'rogueport',
        shippedBy: 'Dry Bones Dead Drop',
        levelRequirement: 4
    },

  'rogueport_black_blood': {
        id: 'rogueport_black_blood',
        name: "Black Blood Serum",
        description: "A dark elixir rumored to enhance physical endurance and suppress pain. Sells for more than its worth if you’re running from the law or gambling your life for a payout.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '📦',
        stock: 1,
        rarity: 'uncommon',
        effects: [
            "Regenerates 30% HP per 10 seconds",
        "Reduces damage taken by 20% for 2 minutes",
        "Increases movement speed by 15%"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 3
    },

  'rogueport_black_blood_ambassador': {
        id: 'rogueport_black_blood_ambassador',
        name: "Black Blood Ambassador",
        description: "A vial of dark blood infused with Legion’s forbidden oath. Injects the user with a temporary aura of “unseen loyalty”—all enemies assume the user is a traitor.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 3000,
        icon: '📦',
        stock: 0,
        rarity: 'rare',
        effects: [
            "Enemies gain 25% disadvantage on targeting",
        "+10% damage to all targets for 10h",
        "+5% chance to disarm target during combat"
        ],
        vendor: 'rogueport',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'rogueport_black_harvest': {
        id: 'rogueport_black_harvest',
        name: "Black Harvest",
        description: "A vial of stolen venom that amplifies your rage and slows enemies by 20%. Comes with a warning label: “Use at your own risk. May cause spontaneous combustion.”",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1500,
        icon: '📦',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Boosts attack power by 30% for 30 seconds",
        "Slows enemy movement by 20%",
        "Causes 5% chance of fire damage on impact"
        ],
        vendor: 'rogueport',
        shippedBy: 'Koopa Postal',
        levelRequirement: 4
    },

  'rogueport_black_hush': {
        id: 'rogueport_black_hush',
        name: "Black Hush",
        description: "A vial of liquid silence that mutes ambient noise for 10 seconds. Ideal for infiltration or hiding in crowded alleys. May cause temporary paranoia in others nearby.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1800,
        icon: '🎧',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Silence all ambient sounds for 10s",
        "-5% chance of being detected",
        "+10% evasion chance during stealth"
        ],
        vendor: 'rogueport',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'rogueport_black_market_satchel': {
        id: 'rogueport_black_market_satchel',
        name: "Ghosted Satchel",
        description: "A satchel stitched with cursed thread that leaves no trace on crime scenes. Hidden compartments hold stolen data or silenced evidence. Glows faintly when danger is near.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Disables tracking on all items stored inside",
        "Reveals hidden paths in sewers or abandoned districts",
        "Slightly increases stealth when moving through crowds"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'rogueport_black_market_silence_earpiece': {
        id: 'rogueport_black_market_silence_earpiece',
        name: "Silent Echo Earpiece",
        description: "A high-frequency sonic suppressor that mutes ambient noise and disguises your footsteps. Perfect for slipping through crowded alleys or evading silent patrols. Glows faintly when hidden targets are nearby.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Suppresses ambient noise and footstep sounds",
        "Reveals hidden targets via faint glow",
        "Disables audio-based traps and surveillance"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'rogueport_black_market_tape': {
        id: 'rogueport_black_market_tape',
        name: "Black Market Tape",
        description: "A roll of corrupted audio tape that plays distorted whispers of past crimes. When activated, it can reveal hidden clues or trigger random criminal encounters. Perfect for tracking down rivals or uncovering secrets.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🎧',
        stock: 4,
        rarity: 'rare',
        effects: [
            "Reveals hidden clues when played",
        "Triggers random criminal encounters (10% chance)",
        "Disables audio recording for 1 minute after use"
        ],
        vendor: 'rogueport',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'rogueport_black_mirage': {
        id: 'rogueport_black_mirage',
        name: "Black Mirage",
        description: "A stolen mirror that warps reality to create illusions of allies or enemies. Use carefully—misuse may cause the user to mistake friends for foes. Only usable in low-light environments.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 3500,
        icon: '🌀',
        stock: 4,
        rarity: 'rare',
        effects: [
            "Illusion Echo: Creates a 10-foot radius illusion of a chosen target.",
        "Truth Mirror: Reveals hidden motives of nearby enemies.",
        "Disorientation: May cause 5-second confusion to the user if misused."
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'rogueport_black_moon_mask': {
        id: 'rogueport_black_moon_mask',
        name: "Black Moon Mask",
        description: "A hooded mask forged from stolen lunar alloy, granting stealth in shadowy alleys. Wears a whispering voice that mimics your last words—perfect for intimidation or escape.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Stealth in dim lighting",
        "Voice mimicry: repeats last spoken phrase",
        "Disguise as a random NPC for 10 minutes"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'rogueport_black_silk_glove': {
        id: 'rogueport_black_silk_glove',
        name: "Black Silk Glove of Silent Steps",
        description: "A glove woven from the finest smuggler’s silk, it muffles all footfall and whispers through the underbelly of the city. Perfect for slipping past guards or sneaking into locked vaults.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Silent Steps: Reduces noise made while moving, making stealth checks more reliable",
        "Flicker Mask: Temporarily hides the wearer from sight when moving (10s cooldown)",
        "Unseen Fingers: Can disarm traps or open locked doors with a simple tap"
        ],
        vendor: 'rogueport',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'rogueport_black_tongue_torch': {
        id: 'rogueport_black_tongue_torch',
        name: "Black Tongue Torch",
        description: "A flickering torch that emits a low, guttural hum—perfect for silencing witnesses or marking hidden paths. Its flame burns with a faint violet hue, leaving behind traces of whispered curses.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🔥',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Inflicts a 1d4 noise suppression on nearby targets for 1 round",
        "Leaves a lingering curse that deals 1d2 psychic damage on successful Perception checks",
        "Burns with a faint violet glow, revealing hidden paths or secrets on touch"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'rogueport_blood_rage': {
        id: 'rogueport_blood_rage',
        name: "Blood Rage of the Crimson Scribe",
        description: "A crimson ink-stained vial that infuses the user with a surge of rage and adrenaline. When shaken, it drips a glowing liquid that enhances combat reflexes and restores stamina. Best used during heists or when you need to break through heavy defenses.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 4200,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Rage Surge: Increases attack speed and damage by 40%",
        "Stamina Boost: Regenerates 20% of HP after 5 seconds",
        "Bloodlust: Increases chance to hit enemies with melee strikes"
        ],
        vendor: 'rogueport',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'rogueport_blood_rain': {
        id: 'rogueport_blood_rain',
        name: "Blood Rain",
        description: "A vial of dark essence that causes targets to bleed out in a rain of crimson droplets. Ideal for creating distractions or weakening enemies during a heist.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '💉',
        stock: 4,
        rarity: 'uncommon',
        effects: [
            "Causes target to bleed 1d4 damage per round for 3 rounds",
        "Creates a 5-foot radius area of crimson fog that obscures vision",
        "Can be used in tandem with other stealth items for better cover"
        ],
        vendor: 'rogueport',
        shippedBy: 'Pipe Express',
        levelRequirement: 4
    },

  'rogueport_blood_tether': {
        id: 'rogueport_blood_tether',
        name: "Blood Tether",
        description: "A cursed artifact that binds you to your last known location. When used, you are dragged back to the spot of your last heartbeat — perfect for escaping or reuniting with allies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Teleports user to last known location upon activation",
        "Inflicts 1d6 bleed damage if used while moving",
        "Requires 20 seconds cooldown"
        ],
        vendor: 'rogueport',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'rogueport_blooded_bottle': {
        id: 'rogueport_blooded_bottle',
        name: "Blooded Bottle of the Black Lullaby",
        description: "A vial filled with crimson liquid that hums when shaken. When consumed, it grants the user a temporary euphoria that dulls pain and increases aggression. Perfect for duels in the back alleys.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Temporary +30% damage output",
        "Reduces pain from blunt or piercing damage",
        "100% chance to trigger “Black Lullaby” — enemy’s next attack is negated"
        ],
        vendor: 'rogueport',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'rogueport_broken_knuckle_bomb': {
        id: 'rogueport_broken_knuckle_bomb',
        name: "Broken Knuckle Bomb",
        description: "A crude explosive disguised as a knuckle-duster. Detonates on impact or when struck twice — perfect for ambushes in crowded alleys. Leaves a lingering stench of burnt tea.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2000,
        icon: '🧨',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Detonates on contact or double hit",
        "Leaves lingering smoke effect (reduces visibility)",
        "Debuffs enemies for 3 seconds on detonation"
        ],
        vendor: 'rogueport',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'rogueport_broken_leg_treat': {
        id: 'rogueport_broken_leg_treat',
        name: "Broken Leg Treat",
        description: "A potent elixir brewed from cursed toad venom and moonlit roots, designed to soothe agony and restore mobility—though at the cost of temporary madness. Perfect for criminals who need to move after a fall from grace.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Restores 20% movement speed for 2 minutes",
        "Inflicts 10% chance to become temporarily insane (randomly attacks allies)",
        "Causes 50% chance to trigger a hallucinatory vision of a rival gang’s hideout"
        ],
        vendor: 'rogueport',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'rogueport_chain_chomp_harness': {
        id: 'rogueport_chain_chomp_harness',
        name: "Chain Chomp Harness",
        description: "This mechanical harness was designed to tame the weaponized Chain Chomps of the Koopa Navy. Built by the Hammer Bros Handling team, it allows the wearer to ride or command these monstrous mouths, but at a cost—each use drains the wearer’s sanity by 1 point. Perfect for heists or dockside ambushes.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 6000,
        icon: '🐉',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Grants +1 to stealth checks while mounted",
        "Can command a Chain Chomp to attack or carry up to 500 lbs",
        "Each use drains 1 sanity point",
        "Reduces armor bonus by 1 for 2 rounds",
        "Worn by: Koopa Navy elite"
        ],
        vendor: 'rogueport',
        shippedBy: 'Hammer Bros Handling',
        levelRequirement: 7
    },

  'rogueport_cold_blood_pearl': {
        id: 'rogueport_cold_blood_pearl',
        name: "Cold Blood Pearl of the Void",
        description: "A gem forged from the frozen heart of a fallen god. It enhances stealth and grants the wearer immunity to detection for 10 seconds.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🌑',
        stock: 1,
        rarity: 'rare',
        effects: [
            "+30% stealth bonus",
        "Immunity to detection for 10 seconds",
        "+10% chance to dodge enemy attacks"
        ],
        vendor: 'rogueport',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 6
    },

  'rogueport_cold_mind': {
        id: 'rogueport_cold_mind',
        name: "Cold Mind",
        description: "A crystalline vial containing a psychic toxin that numbs the user’s senses. For 30 seconds, all mental activity slows, granting perfect focus or escape. However, the user becomes blind and deaf for 30 seconds after use.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Slows mental activity for 30 seconds",
        "Grants perfect focus or escape",
        "Blindness and deafness for 30 seconds",
        "Leaves faint residue on skin"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'rogueport_courier_token': {
        id: 'rogueport_courier_token',
        name: "Noki Coral Fleet Pass",
        description: "A token granting safe passage on any Noki Coral Fleet vessel.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 2000,
        icon: '🛳',
        stock: 10,
        rarity: 'uncommon',
        effects: [
            "Provides free passage on any Noki Coral Fleet ship for one journey.",
        "Allows the holder to request assistance from Noki crew members in Rogueport."
        ],
        vendor: 'rogueport',
        shippedBy: 'Noki Coral Fleet',
        levelRequirement: 3
    },

  'rogueport_crimson_blade': {
        id: 'rogueport_crimson_blade',
        name: "Crimson Fang",
        description: "A razor-edged dagger forged from a Toad’s corrupted heart. Splits through armor with a single thrust and leaves a crimson trail that attracts attention — ideal for assassins who need to leave a mark.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '🔪',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Deals +10 damage to armored targets",
        "Leaves a crimson aura for 5 seconds, revealing hidden enemies",
        "Requires 1d6 stamina to wield; failure causes minor bleed"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'rogueport_crimson_blood_tape': {
        id: 'rogueport_crimson_blood_tape',
        name: "Crimson Blood Tape",
        description: "A strip of stolen ink-stained tape that leaves a red residue on walls—perfect for marking locations or creating a trail to escape. Glows faintly under moonlight.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 1000,
        icon: '🧩',
        stock: 10,
        rarity: 'uncommon',
        effects: [
            "Marks surfaces with red ink",
        "Glows under moonlight for 30 seconds",
        "Can be used as a decoy trail"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 3
    },

  'rogueport_crimson_cannon_bolt': {
        id: 'rogueport_crimson_cannon_bolt',
        name: "Crimson Cannon Bolt",
        description: "A single-use projectile that launches a plasma blast, damaging enemies and leaving a temporary sonic echo. Ideal for breaking through reinforced doors or disabling security drones.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Deals 120 damage on impact",
        "Leaves a sonic echo that reveals enemy location for 5 seconds",
        "Triggered by pressing a hidden button on the bolt’s casing"
        ],
        vendor: 'rogueport',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'rogueport_crimson_circuit': {
        id: 'rogueport_crimson_circuit',
        name: "Crimson Circuit",
        description: "A modified neural implant stolen from a high-tech gangster’s skull. Grants rapid reflexes and allows the user to temporarily “see” enemy weaknesses. Glows red under stress.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '📦',
        stock: 2,
        rarity: 'epic',
        effects: [
            "Reflex Surge: Increases attack speed by 20% for 5 seconds.",
        "Weakness Scan: Reveals enemy’s weak points for 3 seconds.",
        "Glitch Trigger: May cause temporary disorientation to enemies."
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 6
    },

  'rogueport_crimson_cloak_of_the_night': {
        id: 'rogueport_crimson_cloak_of_the_night',
        name: "Crimson Cloak of the Night",
        description: "A tattered cloak that allows the wearer to blend into darkness and silence their footsteps. Ideal for sneaking through crowded alleys or infiltrating enemy strongholds.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Conceals wearer in shadows for 10 seconds",
        "Reduces movement noise by 75%",
        "Grants +30% stealth bonus during combat"
        ],
        vendor: 'rogueport',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'rogueport_crimson_collar': {
        id: 'rogueport_crimson_collar',
        name: "Crimson Collar of the Sirens’ Bargain",
        description: "Wears a collar that emits a hypnotic hum to lure targets into traps or distractions. Once activated, it can be retracted after 10 minutes, but leaves a faint scar on the wearer’s neck.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Emits hypnotic hum that lures targets",
        "Leaves faint scar after use",
        "Reversible after 10 minutes"
        ],
        vendor: 'rogueport',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'rogueport_crimson_fists': {
        id: 'rogueport_crimson_fists',
        name: "Crimson Fists of the Broken Throne",
        description: "A pair of bloodstained gauntlets forged from the remains of a fallen warlord. They channel rage into devastating strikes, perfect for those who need to break chains or silence witnesses.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "+150% damage on first strike",
        "Grants 50% chance to disable enemy movement for 1 turn",
        "Unlocks “Blood Rage” passive: +20% crit chance for 3 turns after each kill"
        ],
        vendor: 'rogueport',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'rogueport_crimson_helm': {
        id: 'rogueport_crimson_helm',
        name: "Crimson Helm",
        description: "A hooded mask that conceals identity and amplifies intimidation. Worn by the most dangerous in Rogueport’s underbelly. Glows red under low light.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '👁',
        stock: 2,
        rarity: 'rare',
        effects: [
            "+30% chance to paralyze enemies on first attack",
        "Grants +10% stealth bonus while hiding",
        "Reduces enemy detection radius by 50% while wearing"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 6
    },

  'rogueport_crimson_hood': {
        id: 'rogueport_crimson_hood',
        name: "Crimson Hood of the Silent Blade",
        description: "A sleek, blood-red hood that muffles sound and grants invisibility in dimly lit areas. Wears the mark of a rogue’s soul — its wearer cannot be tracked by standard surveillance.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Stealth: +30% chance to evade detection",
        "Sound Suppression: All ambient noise reduced to 10%",
        "Curse: Targeted enemies gain +50% suspicion when near wearer"
        ],
        vendor: 'rogueport',
        shippedBy: 'Pipe Express',
        levelRequirement: 5
    },

  'rogueport_crimson_horn': {
        id: 'rogueport_crimson_horn',
        name: "Crimson Horn of the Silent Choir",
        description: "A relic forged from the last breath of a murdered choir leader — its blast echoes in the air, silencing all nearby voices. Used in stealth or combat, it allows the wielder to mask their presence.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '🎭',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Silences all ambient noise for 5 seconds",
        "Grants invisibility to self for 3 seconds",
        "Reduces enemy detection chance by 40%"
        ],
        vendor: 'rogueport',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 7
    },

  'rogueport_crimson_key': {
        id: 'rogueport_crimson_key',
        name: "Crimson Key",
        description: "A key that opens the doors to the most dangerous vaults. Only those who’ve broken the law can use it. It unlocks not just doors, but the secrets of the past.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 4200,
        icon: '🔮',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Grants access to hidden criminal vaults",
        "Triggers a one-time “Crimson Curse” effect upon use",
        "Increases loot drop rate by 30% from hidden enemies"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'rogueport_crimson_scarab_heart': {
        id: 'rogueport_crimson_scarab_heart',
        name: "Crimson Scarab Heart",
        description: "A pulsating scarab carved from the remains of a forgotten cult’s god-king. Grants the wearer temporary invincibility during combat, but drains their sanity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7500,
        icon: '📦',
        stock: 1,
        rarity: 'rare',
        effects: [
            "+30% damage to all enemies during 30 seconds",
        "Grants immunity to all physical and magical attacks",
        "Each use reduces sanity by 25% (may cause hallucinations or paranoia)"
        ],
        vendor: 'rogueport',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 6
    },

  'rogueport_crimson_scarf': {
        id: 'rogueport_crimson_scarf',
        name: "Crimson Scarf of the Fallen King",
        description: "A bloodstained silk scarf rumored to be stitched with the last breath of a disgraced monarch. Wears it to command respect from underworld lords and gains temporary stealth in shadowy alleys.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Stealth +30% in dim environments",
        "Inflicts fear on enemies at 50% HP or below",
        "Grants 10% chance to trigger “Crimson Gaze” — reveals enemy location for 3 turns"
        ],
        vendor: 'rogueport',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 5
    },

  'rogueport_crimson_silence': {
        id: 'rogueport_crimson_silence',
        name: "Crimson Silence",
        description: "A whispering earpiece that mutes all ambient noise within a 5 meter radius. Perfect for sneaking past silent guards or avoiding unwanted conversations. Emits a faint red glow when active.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 3,
        rarity: 'rare',
        effects: [
            "Mutes all ambient sound for 30 seconds",
        "Reveals hidden footsteps in darkness",
        "Fades into the shadows when worn"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'rogueport_crimson_silencer': {
        id: 'rogueport_crimson_silencer',
        name: "Crimson Silencer",
        description: "A compact device that muffles sound for 10 seconds. Use in crowded alleys or during heists to avoid detection. Comes with a faint red glow that signals the user’s location to the nearest enemy.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3000,
        icon: '🎭',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Mutes sound for 10 seconds",
        "Reveals target’s position if used near an enemy",
        "Reduces chance of being spotted during stealth maneuvers"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'rogueport_crimson_siren': {
        id: 'rogueport_crimson_siren',
        name: "Crimson Siren",
        description: "A crystal whistle that emits a frequency that drives enemies into hallucinatory frenzy. Best used in ambushes or to distract elite guards.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🎵',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "+10% damage on next attack",
        "20% chance to cause mental breakdown on hit",
        "+5% movement speed for 10 seconds after use"
        ],
        vendor: 'rogueport',
        shippedBy: 'Pipe Express',
        levelRequirement: 4
    },

  'rogueport_crimson_tongue': {
        id: 'rogueport_crimson_tongue',
        name: "Crimson Tongue of the Drowned Choir",
        description: "A vial containing the essence of a drowned bard’s last song — its contents whisper truths and lies to those who drink. May cause temporary hallucinations or reveal hidden paths.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🧪',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Reveals hidden paths on map for 10 seconds",
        "Causes hallucinations for 5 seconds (randomly alters perception)",
        "Inflicts 10% chance to trigger a random event"
        ],
        vendor: 'rogueport',
        shippedBy: 'Lakitu Drones',
        levelRequirement: 4
    },

  'rogueport_cursed_keychain': {
        id: 'rogueport_cursed_keychain',
        name: "Cursed Keychain of Broken Trust",
        description: "A hollow metal keychain engraved with a face that never smiles. Wearing it grants the user a chance to deceive a target into believing they’re being honest—until the target realizes they’ve been tricked. The keychain hums when near truth-tellers.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3800,
        icon: '🔐',
        stock: 1,
        rarity: 'rare',
        effects: [
            "10% chance to make a target believe the user is truthful during interrogation",
        "If the target is truthful, the keychain emits a low-frequency hum for 3 seconds",
        "If used while the user is lying, the keychain becomes a distraction for 1 second"
        ],
        vendor: 'rogueport',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 6
    },

  'rogueport_cursed_tongue': {
        id: 'rogueport_cursed_tongue',
        name: "Cursed Tongue of the Silent Gambler",
        description: "A grotesque, silver-tipped tongue that speaks in riddles and lies. When worn, the user gains the ability to manipulate truth-telling in others—forcing them to reveal secrets they swore to keep.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1200,
        icon: '🧪',
        stock: 2,
        rarity: 'uncommon',
        effects: [
            "Forces targets to reveal hidden truths (10s cooldown)",
        "Grants +10% chance to succeed in stealth checks",
        "Causes 5s of confusion on targets after use"
        ],
        vendor: 'rogueport',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 4
    },

  'rogueport_dagger_of_silence': {
        id: 'rogueport_dagger_of_silence',
        name: "Dagger of the Silent Accord",
        description: "A blade forged from stolen steel and whispered curses. When drawn, it emits no sound and strikes true. Perfect for those who need to end a threat without a trace.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '🔥',
        stock: 1,
        rarity: 'epic',
        effects: [
            "Silent Strike: No sound is produced upon attack",
        "Curse Aura: +15% damage to enemies with high stealth or noise resistance",
        "Deadly Evasion: +10% chance to dodge attacks from enemies in stealth"
        ],
        vendor: 'rogueport',
        shippedBy: 'Pipe Express',
        levelRequirement: 7
    },

  'rogueport_dagger_of_the_drowned': {
        id: 'rogueport_dagger_of_the_drowned',
        name: "Dagger of the Drowned",
        description: "A cursed blade that glows with the essence of drowned souls. Inflicts bleeding damage and slows enemies for 3 seconds after each strike. Its edge is rumored to speak in whispers of the deep.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Deals bleeding damage on hit",
        "Slows enemy movement for 3 seconds",
        "Voice whispers of the drowned on hit"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'rogueport_dead_man_s_wallet': {
        id: 'rogueport_dead_man_s_wallet',
        name: "Dead Man’s Wallet",
        description: "A leather pouch rumored to contain the last breath of a smuggler’s dead partner. Wearing it grants the user a temporary 50% chance to avoid arrest during a bust.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3800,
        icon: '📦',
        stock: 2,
        rarity: 'rare',
        effects: [
            "50% chance to evade arrest during a bust",
        "Grants +2 stealth to all stealth checks",
        "Can be used in tandem with a decoy"
        ],
        vendor: 'rogueport',
        shippedBy: 'Pipe Express',
        levelRequirement: 6
    },

  'rogueport_dead_soul_iron': {
        id: 'rogueport_dead_soul_iron',
        name: "Dead Soul Iron Armor",
        description: "A cursed suit of armor forged from the last breath of a fallen rebel. Grants devastating damage and drains the wearer’s HP to weaken enemies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 7000,
        icon: '🗡',
        stock: 2,
        rarity: 'epic',
        effects: [
            "+50% damage output",
        "Drain 20% HP to deal 30% extra damage",
        "-20% defense while active"
        ],
        vendor: 'rogueport',
        shippedBy: 'Void Drifter Relay',
        levelRequirement: 7
    },

  'rogueport_deadman_s_hollow': {
        id: 'rogueport_deadman_s_hollow',
        name: "Deadman’s Hollow",
        description: "A cursed artifact that opens a rift to the afterlife, allowing brief contact with the spirits of the deceased. Can be used to summon whispers, extract memories, or locate lost items buried in the earth.",
        category: SHOP_CATEGORIES.SPECIAL,
        price: 7000,
        icon: '🕯',
        stock: 0,
        rarity: 'epic',
        effects: [
            "Opens a brief portal to the afterlife (1 round)",
        "Allows the user to hear a single memory from a spirit",
        "Inflicts 1d4 psychic damage if used improperly"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 5
    },

  'rogueport_death_bite': {
        id: 'rogueport_death_bite',
        name: "Death Bite",
        description: "A cursed necklace that inflicts a 20% damage bonus to all attacks. But beware — if the wearer dies, they will be buried alive in the sewers of Rogueport.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '🦷',
        stock: 1,
        rarity: 'rare',
        effects: [
            "20% damage boost on all attacks",
        "If wearer dies, triggers a curse to bury them in the sewers",
        "Grants 10% chance to stun enemies on hit"
        ],
        vendor: 'rogueport',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 5
    },

  'rogueport_dry_runes': {
        id: 'rogueport_dry_runes',
        name: "Dry Runes of the Silent Blade",
        description: "These brittle runes, carved from bone and shadow, grant temporary silence to all ambient noise. Ideal for assassination or infiltration. Flicker with each use.",
        category: SHOP_CATEGORIES.CONSUMABLE,
        price: 1500,
        icon: '🧭',
        stock: 5,
        rarity: 'uncommon',
        effects: [
            "Suppresses all ambient sound for 30 seconds",
        "Grants +15% evasion chance in stealth mode",
        "Cannot be used in public areas with heavy foot traffic"
        ],
        vendor: 'rogueport',
        shippedBy: 'Rakasha Spirit Walk',
        levelRequirement: 4
    },

  'rogueport_dust_sword': {
        id: 'rogueport_dust_sword',
        name: "Dust Sword",
        description: "A blade forged from the ashes of a fallen warlord. Strikes with silence and leaves no trace — perfect for assassins who want to vanish after their kill.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🔮',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Silent strike — no sound effect on hit",
        "Leaves no blood or trace after use",
        "+20% damage to stealth enemies"
        ],
        vendor: 'rogueport',
        shippedBy: 'Koopa Postal',
        levelRequirement: 5
    },

  'rogueport_echo_ring': {
        id: 'rogueport_echo_ring',
        name: "Echo Ring of the Unseen Path",
        description: "A cursed ring that whispers secrets of the underworld. Each time you wear it, it reveals a hidden location or a traitor in your party. But it also drains your sanity.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🕳',
        stock: 1,
        rarity: 'rare',
        effects: [
            "Reveals a hidden location or traitor every 2 rounds",
        "Grants 10% bonus to stealth if enemy is not detected",
        "Costs 3000 HP to wear for 5 minutes"
        ],
        vendor: 'rogueport',
        shippedBy: 'Boo Spectral Mail',
        levelRequirement: 5
    },

  'rogueport_explosive_fireflower_seeds': {
        id: 'rogueport_explosive_fireflower_seeds',
        name: "Primordial Bloom Seeds",
        description: "Seeds harvested from the mutated fire flowers blooming near Valley of Bowser.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 3500,
        icon: '🔥',
        stock: 2,
        rarity: 'rare',
        effects: [
            "Can be planted to grow a fire flower with increased explosive power.",
        "Fire flowers grown from these seeds have a chance to explode prematurely.",
        "Imbuing weapons with their essence increases damage but risks uncontrolled explosions."
        ],
        vendor: 'rogueport',
        shippedBy: 'Noki Coral Fleet',
        levelRequirement: 7
    },

  'rogueport_fey_soul_core': {
        id: 'rogueport_fey_soul_core',
        name: "Fey Soul Core Fragment",
        description: "A pulsating orb of living green energy, rumored to be the core of a once-mighty fey queen. When activated, it grants a temporary aura of fey charm, causing enemies to hesitate or surrender.",
        category: SHOP_CATEGORIES.MATERIAL,
        price: 3800,
        icon: '🌀',
        stock: 1,
        rarity: 'rare',
        effects: [
            "+15% chance to disarm enemy attacks",
        "Grants 30s of fey charm (causes enemies to flee or surrender)",
        "Reduces damage taken from fey-aligned attacks"
        ],
        vendor: 'rogueport',
        shippedBy: 'Shy Guy Smugglers',
        levelRequirement: 6
    },

};
