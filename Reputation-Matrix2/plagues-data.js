// plagues-data.js

export const PLAGUE_DATA = [
    {
        id: 'blorbs',
        name: "The Blorbs",
        region: "Mushroom Kingdom",
        icon: "🟠",
        description: "A magical affliction that causes Toads to swell into giant, immobile spheres. Highly contagious through physical contact.",
        symptoms: "Rapid swelling, rolling uncontrollably, loss of limb function.",
        cure: "Miracle Cure (Star Sprite dust & rare herbs).",
        active_seasons: ["Golden Summer"],
        cycle_modifier: { 'crisis': 2.0, 'conflict': 1.5 },
        base_severity: 40 // 0-100
    },
    {
        id: 'crystal_fade',
        name: "Crystal Fade",
        region: "The Midlands",
        icon: "💎",
        description: "A mana-sickness caused by exposure to raw magitek runoff. Victims' skin slowly turns into brittle crystal.",
        symptoms: "Stiffness, crystalline growths, magical discharge.",
        cure: "Arcane dialysis or removal from high-mana zones.",
        active_seasons: ["Verdant Spring", "Crimson Fall"],
        cycle_modifier: { 'research': 1.5, 'rebirth': 0.5 },
        base_severity: 25
    },
    {
        id: 'rot_lung',
        name: "Rot-Lung",
        region: "The Fated Place (Empire)",
        icon: "🤢",
        description: "A respiratory disease spread by Skaven agents. Causes coughing fits that expel green, warp-tainted gas.",
        symptoms: "Green phlegm, weakness, hallucinations.",
        cure: "Shallyan purification rituals.",
        active_seasons: ["Hoarfrost Winter"],
        cycle_modifier: { 'crisis': 1.8, 'tension': 1.2 },
        base_severity: 60
    },
    {
        id: 'digital_fragmentation',
        name: "Digital Fragmentation",
        region: "The Internet",
        icon: "👾",
        description: "A logic virus that corrupts the avatar data of netizens, causing them to pixelate and lose memories.",
        symptoms: "Lag, texture loss, data corruption.",
        cure: "System Reboot or Anti-Virus Patch 4.2.",
        active_seasons: ["All"],
        cycle_modifier: { 'expansion': 1.4, 'calm': 0.8 },
        base_severity: 30
    }
];