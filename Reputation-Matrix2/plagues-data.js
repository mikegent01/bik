
// plagues-data.js
// Start dates are relative to Current Day (Approx 378445 in absolute days)

export const PLAGUE_DATA = [
    {
        id: 'blorbs',
        name: "The Blorbs",
        region: "Mushroom Kingdom",
        starting_location: "poi_mk_toadtown", 
        affected_species: ["toad_citizen", "goomba", "koopa"],
        affected_nations: ["mushroom_kingdom", "koopa_troop", "peach_loyalists"],
        research_impact: "Economic & Medical Research -20%",
        icon: "🟠",
        description: "A magical affliction that causes Toads to swell into giant, immobile spheres. It blocks airways and renders the victim helpless.",
        symptoms: "Rapid body swelling, uncontrollably rolling, loss of motor function, muffled speech.",
        
        // New Systems
        transmission_vector: "Contact / Spore Inhalation",
        lethality_class: "Low (Incapacitating)",
        lethality_desc: "Rarely fatal directly, but victims are vulnerable to predation or starvation due to immobility.",
        mutation_risk: 15, // %
        economic_strain: "High (Workforce Paralysis)",
        containment_status: "Failing",

        // Simulation Data
        cure: "Miracle Cure (Requires Star Sprite dust & rare herbs).",
        active_seasons: ["Golden Summer"],
        cycle_modifier: { 'crisis': 2.0, 'conflict': 1.5 },
        start_day: 378400, 
        base_severity: 40,
        peak_population: 150000, 
        mortality_rate: 0.05,
        cure_progress: 35,
        knowledge_level: 90 
    },
    {
        id: 'crystal_fade',
        name: "Crystal Fade",
        region: "The Midlands",
        starting_location: "poi_mid_capital_district",
        affected_species: ["regal_midlander", "dnd_human", "dnd_elf_high"],
        affected_nations: ["regal_empire", "iron_legion"],
        research_impact: "Magic Research -15%",
        icon: "💎",
        description: "A mana-sickness caused by exposure to raw magitek runoff or unstable ley lines. Victims' skin slowly calcifies into brittle crystal.",
        symptoms: "Joint stiffness, crystalline growths on skin, mana discharge from eyes/mouth.",
        
        // New Systems
        transmission_vector: "Magical Radiation / Ley Line Proximity",
        lethality_class: "High (Terminal)",
        lethality_desc: "If untreated, the victim fully crystallizes and shatters. Mortality rate increases with spellcasting.",
        mutation_risk: 40,
        economic_strain: "Medium (Magitek Shutdowns)",
        containment_status: "Stable",

        // Simulation Data
        cure: "Arcane dialysis or total removal from high-mana zones.",
        active_seasons: ["Verdant Spring", "Crimson Fall"],
        cycle_modifier: { 'research': 1.5, 'rebirth': 0.5 },
        start_day: 378300, 
        base_severity: 25,
        peak_population: 50000,
        mortality_rate: 0.40, 
        cure_progress: 15, 
        knowledge_level: 45 
    },
    {
        id: 'rot_lung',
        name: "Rot-Lung",
        region: "The Fated Place (The Old World)",
        starting_location: "poi_wh_altdorf",
        affected_species: ["warhammer_human", "warhammer_dwarf", "skaven"],
        affected_nations: ["the_empire", "kingdoms_of_the_dwarves_wh"],
        research_impact: "Military Research -10%, Population Growth -5%",
        icon: "🤢",
        description: "A biological weapon developed by Clan Pestilens. It is a aggressive respiratory necro-virus that rots the lungs from the inside out.",
        symptoms: "Coughing up green phlegm, necrosis of the jaw, hallucinations of rats.",
        
        // New Systems
        transmission_vector: "Airborne / Waterborne",
        lethality_class: "Extreme (Bioweapon)",
        lethality_desc: "Death usually occurs within 7 days of first symptom. Corpses remain contagious.",
        mutation_risk: 85,
        economic_strain: "Severe (Trade Embargos)",
        containment_status: "Breached",

        // Simulation Data
        cure: "Shallyan purification rituals or amputation of infected organs.",
        active_seasons: ["Hoarfrost Winter"],
        cycle_modifier: { 'crisis': 1.8, 'tension': 1.2 },
        start_day: 378430, 
        base_severity: 60,
        peak_population: 500000,
        mortality_rate: 0.75,
        cure_progress: 5,
        knowledge_level: 70
    },
    {
        id: 'digital_fragmentation',
        name: "Digital Fragmentation",
        region: "The Internet",
        starting_location: "poi_inet_surface",
        affected_species: ["netizen", "spam_bot", "living_meme"],
        affected_nations: ["internet_federation", "hacktivist_collectives"],
        research_impact: "Tech Research -25%",
        icon: "👾",
        description: "A logic virus that corrupts the avatar data of netizens, causing them to pixelate, glitch, and eventually de-rez into raw data.",
        symptoms: "Input lag, texture loss, memory corruption, sudden T-posing.",
        
        // New Systems
        transmission_vector: "Data Packet / Peer-to-Peer",
        lethality_class: "N/A (Data Loss)",
        lethality_desc: "Users are not 'killed' but their accounts are permanently corrupted or deleted.",
        mutation_risk: 99,
        economic_strain: "Catastrophic (Server Crash)",
        containment_status: "Unknown",

        // Simulation Data
        cure: "System Reboot or Anti-Virus Patch 4.2.",
        active_seasons: ["All"],
        cycle_modifier: { 'expansion': 1.4, 'calm': 0.8 },
        start_day: 378440, 
        base_severity: 30,
        peak_population: 1000000, 
        mortality_rate: 0.01, 
        cure_progress: 0,
        knowledge_level: 15 
    }
];
