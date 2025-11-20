import { CURRENT_GAME_DATE } from './calendar-data.js';
import { RESEARCH_FLAVOR } from './research-names.js';
import { LORE_DATA } from './lore.js';

export const RESEARCH_CATEGORIES = ['WEAPONS', 'MAGIC', 'TECH', 'MEDICAL', 'ECONOMIC', 'POLITICAL'];

// Slot Multipliers (Days to complete = Base Cost * Multiplier)
// Lower multiplier = Faster research
export const SLOT_MULTIPLIERS = {
    primary: 0.5, // 2x Speed
    major: 1.0,   // Normal Speed
    minor: 2.0    // 0.5x Speed
};

export const NATIONS = {
    midlands: { 
        name: "The Midlands", icon: "🏰", description: "A fractured empire balancing ancient magitek with feudal steel.", 
        slots: { primary: 'WEAPONS', major: ['POLITICAL', 'ECONOMIC', 'TECH'], minor: ['MAGIC', 'MEDICAL'] }
    },
    mushroom_kingdom: { 
        name: "Mushroom Kingdom", icon: "🍄", description: "A land of whimsy forced into war, focusing on bio-fungal advancements.", 
        slots: { primary: 'MAGIC', major: ['MEDICAL', 'ECONOMIC', 'POLITICAL'], minor: ['WEAPONS', 'TECH'] }
    },
    middle_earth: { 
        name: "Middle-earth", icon: "💍", description: "Ancient kingdoms recovering lost arts of smithing and lore.", 
        slots: { primary: 'WEAPONS', major: ['POLITICAL', 'MAGIC', 'ECONOMIC'], minor: ['TECH', 'MEDICAL'] }
    },
    kivotos: { 
        name: "Kivotos", icon: "🎓", description: "A hyper-advanced academy city obsessed with ballistics and AI.", 
        slots: { primary: 'TECH', major: ['WEAPONS', 'MEDICAL', 'ECONOMIC'], minor: ['MAGIC', 'POLITICAL'] }
    },
    internet: { 
        name: "The Internet", icon: "🌐", description: "A digital realm evolving code and informational warfare.", 
        slots: { primary: 'TECH', major: ['ECONOMIC', 'POLITICAL', 'WEAPONS'], minor: ['MAGIC', 'MEDICAL'] } // Magic represents 'Viruses' here
    },
    warhammer: { 
        name: "The Fated Place", icon: "⚔️", description: "Grim innovation born of endless war and necessity.", 
        slots: { primary: 'WEAPONS', major: ['MAGIC', 'POLITICAL', 'TECH'], minor: ['MEDICAL', 'ECONOMIC'] }
    },
    doughnut_hole: { 
        name: "The Doughnut Hole", icon: "🌀", description: "Cosmic anomalies harnessed for incomprehensible power.", 
        slots: { primary: 'MAGIC', major: ['TECH', 'WEAPONS', 'MEDICAL'], minor: ['ECONOMIC', 'POLITICAL'] }
    },
    pokemon: { 
        name: "Pokémon Regions", icon: "🧢", description: "Biological synergy and capture technology.", 
        slots: { primary: 'MEDICAL', major: ['TECH', 'ECONOMIC', 'WEAPONS'], minor: ['MAGIC', 'POLITICAL'] }
    },
    animatopia: { 
        name: "Animatopia", icon: "🐾", description: "Adaptation of diverse biology into societal structures.", 
        slots: { primary: 'POLITICAL', major: ['MEDICAL', 'ECONOMIC', 'TECH'], minor: ['WEAPONS', 'MAGIC'] }
    },
    equestria: { 
        name: "Equestria", icon: "🦄", description: "Harmony-based magic and weather manipulation.", 
        slots: { primary: 'MAGIC', major: ['POLITICAL', 'MEDICAL', 'ECONOMIC'], minor: ['WEAPONS', 'TECH'] }
    },
    leclaire_isle: { 
        name: "L'Eclaire Isle", icon: "🍩", description: "Culinary engineering and sugar-based structural integrity.", 
        slots: { primary: 'ECONOMIC', major: ['MEDICAL', 'TECH', 'POLITICAL'], minor: ['WEAPONS', 'MAGIC'] }
    },
    teyvat: { 
        name: "Teyvat", icon: "✨", description: "Elemental resonance and Vision-based combat arts.", 
        slots: { primary: 'MAGIC', major: ['WEAPONS', 'POLITICAL', 'ECONOMIC'], minor: ['TECH', 'MEDICAL'] }
    },
    grand_country: { 
        name: "The Grand Country", icon: "🏔️", description: "High-altitude warfare and mountain fortification.", 
        slots: { primary: 'WEAPONS', major: ['TECH', 'POLITICAL', 'ECONOMIC'], minor: ['MAGIC', 'MEDICAL'] }
    }
};

const SIMULATION_START_YEAR = 1035;
export const DAYS_PER_TIER = 600; 

// CYCLE PHASES - 7-stage cycle
// Bias: -3 (Calm) to +3 (Crisis)
export const CYCLE_PHASES = [
    { id: 'calm', name: "Cycle of Calm", color: "#4fc3f7", bias: -3, description: "A period of stability. Resource generation is steady, but urgency is low.", modifiers: { ECONOMIC: 0.8, POLITICAL: 0.8, WEAPONS: 1.5 } },
    { id: 'research', name: "Cycle of Discovery", color: "#9c27b0", bias: -2, description: "A golden age of science and magic. Research speeds are doubled.", modifiers: { MAGIC: 0.7, TECH: 0.7, MEDICAL: 0.7 } },
    { id: 'expansion', name: "Cycle of Expansion", color: "#ffd700", bias: -1, description: "Borders expand and trade flourishes. Economic costs reduced.", modifiers: { ECONOMIC: 0.6, TECH: 0.9, WEAPONS: 1.2 } },
    { id: 'tension', name: "Cycle of Tension", color: "#ff9800", bias: 0, description: "Diplomatic relations fray. Embargoes slow down sharing of knowledge.", modifiers: { POLITICAL: 0.7, ECONOMIC: 1.2 } },
    { id: 'conflict', name: "Cycle of Conflict", color: "#f44336", bias: 1, description: "Open warfare. Weapons research is prioritized; all other progress slows.", modifiers: { WEAPONS: 0.5, MEDICAL: 0.6, ECONOMIC: 1.5, POLITICAL: 1.5 } },
    { id: 'crisis', name: "Cycle of Crisis", color: "#212121", bias: 2, description: "Societal collapse or calamity. Survival is the only priority. Research halts.", modifiers: { MEDICAL: 0.5, WEAPONS: 0.8, TECH: 2.0, MAGIC: 2.0, ECONOMIC: 2.0, POLITICAL: 2.0 } },
    { id: 'rebirth', name: "Cycle of Rebirth", color: "#8bc34a", bias: 3, description: "Reconstruction. Infrastructure repair speed increased.", modifiers: { TECH: 0.6, ECONOMIC: 0.7, WEAPONS: 1.5 } }
];

// Initial "Base" Offsets (still used for starting positions)
const NATION_OFFSETS = {
    kivotos: { base: 3000 },
    internet: { base: 2800 },
    midlands: { base: 1200 },
    warhammer: { base: 1100 },
    pokemon: { base: 1500 },
    doughnut_hole: { base: 3500 },
    teyvat: { base: 600 },
    mushroom_kingdom: { base: 100 },
    leclaire_isle: { base: 400 },
    equestria: { base: 300 },
    middle_earth: { base: -500 },
    animatopia: { base: -800 },
    grand_country: { base: -1000 }
};

export const AGES = [
    { id: 'age_dawn', name: "Dawn Era", tiers: [1, 2], description: "Tribal societies, stone tools, and oral traditions." },
    { id: 'age_iron', name: "Age of Iron", tiers: [3, 4], description: "Feudal kingdoms, steel weapons, and codified magic." },
    { id: 'age_discovery', name: "Age of Discovery", tiers: [5, 6], description: "Global trade, complex machinery, and early blackpowder." },
    { id: 'age_industry', name: "Industrial Era", tiers: [7, 8], description: "Mass production, magitek engines, and airships." },
    { id: 'age_cosmic', name: "Cosmic Era", tiers: [9, 10], description: "Space travel, artificial intelligence, and reality warping." }
];

// Age Choices (Buffs)
export const AGE_CHOICES = {
    age_dawn: [
        { id: 'path_tradition', type: 'diplomatic', name: "Path of Tradition", effect: "Stability +10%, Culture Growth +15%", flavor: "Focus on oral history and clan loyalty." },
        { id: 'path_conquest', type: 'military', name: "Path of Blood", effect: "Infantry Damage +10%, Raid Income +20%", flavor: "Expansion through force." },
        { id: 'path_mystic', type: 'magic', name: "Path of Spirits", effect: "Mana Regen +15%, Ritual Cost -10%", flavor: "Communion with the natural world." }
    ],
    age_iron: [
        { id: 'path_feudal', type: 'diplomatic', name: "Feudal Law", effect: "Tax Income +20%, Noble Loyalty +15%", flavor: "Codified laws and hierarchy." },
        { id: 'path_steel', type: 'military', name: "Steel Supremacy", effect: "Unit Armor +15%, Siege Speed +10%", flavor: "Mastery of the forge and blade." },
        { id: 'path_arcane', type: 'magic', name: "Arcane Dominion", effect: "Spell Power +20%, Mage Recruitment +10%", flavor: "Formalized magical colleges." }
    ],
    age_discovery: [
        { id: 'path_trade', type: 'diplomatic', name: "Merchant Republic", effect: "Trade Route Income +30%, Naval Speed +15%", flavor: "Wealth through global commerce." },
        { id: 'path_empire', type: 'military', name: "Imperial Ambition", effect: "Army Logistics +20%, Conquest Speed +10%", flavor: "Establishing colonies and forts." },
        { id: 'path_alchemy', type: 'magic', name: "Alchemical Revolution", effect: "Potion Potency +25%, Research Speed +10%", flavor: "Turning lead to gold and herbs to power." }
    ],
    age_industry: [
        { id: 'path_union', type: 'diplomatic', name: "Labor Unions", effect: "Production Efficiency +15%, Unrest -20%", flavor: "Power to the workers." },
        { id: 'path_war_machine', type: 'military', name: "Total War", effect: "Unit Production +30%, Ammo Capacity +50%", flavor: "Mass production of death." },
        { id: 'path_technomancy', type: 'magic', name: "Technomancy", effect: "Magitek Efficiency +25%, Golem Armor +20%", flavor: "Fusing soul and machine." }
    ],
    age_cosmic: [
        { id: 'path_federation', type: 'diplomatic', name: "Galactic Federation", effect: "Diplomatic Weight +50%, Alien Relations +25%", flavor: "Unity among the stars." },
        { id: 'path_annihilation', type: 'military', name: "Planet Killers", effect: "Orbital Strike Available, Fleet Power +30%", flavor: "Dominance through superior firepower." },
        { id: 'path_ascension', type: 'magic', name: "Cosmic Ascension", effect: "Reality Warping Enabled, Mortality -100%", flavor: "Becoming beings of pure energy." }
    ]
};

// Defines how much each Social Estate benefits from specific Research Categories (0-1 scale)
export const RESEARCH_TO_ESTATE_MAPPING = {
    WEAPONS: { nobility: 0.9, commoners: 0.2, slaves: 0.0 },
    MAGIC: { clergy: 1.0, nobility: 0.3, indentured: 0.1 },
    TECH: { burghers: 0.9, indentured: 0.4, nobility: 0.2 },
    MEDICAL: { clergy: 0.7, commoners: 0.5, burghers: 0.5 },
    ECONOMIC: { burghers: 1.0, nobility: 0.6, commoners: 0.2 },
    POLITICAL: { nobility: 1.0, clergy: 0.8, burghers: 0.4 }
};

export function getAbsoluteDay() {
    const yearsPassed = CURRENT_GAME_DATE.year - SIMULATION_START_YEAR;
    const days = (yearsPassed * 365) + (CURRENT_GAME_DATE.monthIndex * 30) + CURRENT_GAME_DATE.day;
    return Math.max(0, days);
}

/**
 * Helper function to determine the cycle impact of a rumor.
 * Prioritizes manual data, falls back to keyword analysis.
 */
function getImpactDetails(rumor, relatedPostsCount) {
    // 1. Check for manual override in data
    if (rumor.cycle_impact) {
        return {
            score: rumor.cycle_impact.score,
            label: rumor.cycle_impact.label,
            type: rumor.cycle_impact.type || 'general'
        };
    }

    // 2. Fallback: Keyword Analysis
    const text = (rumor.title + " " + rumor.description).toLowerCase();
    let score = 0;
    let label = "Unrest";
    let type = "general";

    // Conflict Keywords (Positive Score)
    if (text.match(/war|battle|siege|raid|attack|kill|weapon|threat|army|invasion/)) {
        score = 1;
        label = "Military Conflict";
        type = "military";
    } 
    // Tension Keywords (Minor Positive)
    else if (text.match(/scandal|betrayal|plot|spy|secret|tension|dispute|crisis/)) {
        score = 0.5;
        label = "Political Tension";
        type = "political";
    }
    // Stability Keywords (Negative Score)
    else if (text.match(/peace|treaty|alliance|discovery|found|cure|save|build|grow|research/)) {
        score = -1;
        label = "Stabilization";
        type = "diplomatic";
    }
    // Catastrophe Keywords (High Positive)
    else if (text.match(/disaster|catastrophe|plague|famine|collapse|void|breach/)) {
        score = 2;
        label = "Crisis Event";
        type = "crisis";
    }

    // Apply Weighting based on activity
    const weight = 1 + (relatedPostsCount / 20);
    score = score * weight;

    return { score, label, type };
}

/**
 * Calculates the current Global Cycle Phase based on Active Rumors and WAHbook Posts.
 * @param {Array} allPosts - Array of all WAHbook posts.
 */
export function calculateGlobalCycle(allPosts) {
    // 1. Base Cycle based on date (The "Natural" Cycle)
    const totalMonths = (CURRENT_GAME_DATE.year * 12) + CURRENT_GAME_DATE.monthIndex;
    const naturalPhaseIndex = totalMonths % 7;
    const naturalPhase = CYCLE_PHASES[naturalPhaseIndex];

    // 2. Calculate Rumor Impact
    let totalMomentum = 0; // Positive = Conflict/Crisis, Negative = Calm/Research
    let drivingFactors = [];

    if (LORE_DATA && LORE_DATA.rumors) {
        LORE_DATA.rumors.forEach(rumor => {
            // Count posts for this rumor
            const relatedPosts = allPosts.filter(p => p.rumorId === rumor.id).length;
            if (relatedPosts === 0) return;

            const impactData = getImpactDetails(rumor, relatedPosts);
            
            totalMomentum += impactData.score;

            // Only add significant factors to the list
            if (Math.abs(impactData.score) > 0.2) {
                drivingFactors.push({ 
                    name: rumor.title, 
                    impact: impactData.score,
                    label: impactData.label,
                    type: impactData.type
                });
            }
        });
    }

    // 3. Determine Active Phase based on Momentum
    // The natural cycle is the baseline, but momentum shifts it.
    // Mapping momentum to cycle index shift.
    // Total Momentum range roughly -10 to +10.
    // Shift: +1 phase per ~1.5 momentum points?
    
    let shift = Math.round(totalMomentum / 1.5);
    let activePhaseIndex = (naturalPhaseIndex + shift) % 7;
    if (activePhaseIndex < 0) activePhaseIndex += 7;
    
    // Clamp extreme momentum to Crisis (5) or Calm (0) if it exceeds normal bounds?
    // Actually, let's allow it to wrap or stick. Sticking feels more impactful for "Crisis".
    if (totalMomentum > 6) activePhaseIndex = 5; // Force Crisis
    else if (totalMomentum < -6) activePhaseIndex = 0; // Force Calm
    
    const activePhase = CYCLE_PHASES[activePhaseIndex];

    return {
        phase: activePhase,
        naturalPhase: naturalPhase,
        momentum: totalMomentum,
        factors: drivingFactors.sort((a,b) => Math.abs(b.impact) - Math.abs(a.impact)).slice(0, 5) // Top 5 drivers
    };
}

export function getGlobalTechAverages() {
    const averages = {};
    const currentDay = getAbsoluteDay();

    RESEARCH_CATEGORIES.forEach(cat => {
        let totalTier = 0;
        let count = 0;
        Object.keys(NATIONS).forEach(key => {
            const nationConfig = NATION_OFFSETS[key] || { base: 0 };
            const effectiveDays = currentDay + nationConfig.base;
            const avgTier = Math.floor(effectiveDays / DAYS_PER_TIER) + 1;
            // Adjust tier slightly based on slot type (Primary gets boost)
            let mod = 0;
            if (NATIONS[key].slots.primary === cat) mod = 1.5;
            else if (NATIONS[key].slots.major.includes(cat)) mod = 0.5;
            
            totalTier += Math.min(10, Math.max(1, avgTier + mod));
            count++;
        });
        averages[cat] = totalTier / count;
    });
    return averages;
}

export function getTechTree(nationKey, category, researchState, globalCycle) {
    const tree = {};
    const currentDay = getAbsoluteDay();
    const nationConfig = NATIONS[nationKey];
    const nationOffsets = NATION_OFFSETS[nationKey] || { base: 0 };
    
    const baseOffset = nationOffsets.base || 0;
    
    // 1. Determine Slot Multiplier
    let slotMult = 1.0;
    if (nationConfig.slots.primary === category) slotMult = SLOT_MULTIPLIERS.primary;
    else if (nationConfig.slots.major.includes(category)) slotMult = SLOT_MULTIPLIERS.major;
    else slotMult = SLOT_MULTIPLIERS.minor;

    // 2. Determine Cycle Modifier
    let cycleMod = 1.0;
    if (globalCycle && globalCycle.phase.modifiers && globalCycle.phase.modifiers[category]) {
        // Modifiers in CYCLE_PHASES are multipliers (e.g., 0.8 = faster, 1.5 = slower)
        cycleMod = globalCycle.phase.modifiers[category];
    }

    // Total Cost Multiplier (Lower is better/faster)
    const totalMultiplier = slotMult * cycleMod;

    const effectiveDays = currentDay + baseOffset;
    let daysConsumed = 0;

    const flavorSource = RESEARCH_FLAVOR[nationKey] || RESEARCH_FLAVOR.default;
    const defaultFlavor = RESEARCH_FLAVOR.default[category]; // Get default specifically for this category

    // Try to get the specific nation's category flavor, but it might be empty/undefined
    const specificCategoryFlavor = flavorSource[category]; 

    const isCompletedInState = (id) => {
        if (!researchState || !researchState[nationKey]) return false;
        return researchState[nationKey].completed?.[category]?.includes(id);
    };

    for (let tier = 1; tier <= 10; tier++) {
        for (let node = 1; node <= 5; node++) {
            const id = `${category.toLowerCase()}_t${tier}_n${node}`;
            
            // Base cost scales with Tier
            const baseCost = Math.floor(DAYS_PER_TIER / 5) + (tier * 10); 
            
            // Apply Multipliers
            const realCost = Math.ceil(baseCost * totalMultiplier);

            let nodeName = "Unknown Tech";
            let nodeDesc = "Details unavailable.";
            let nodeEffect = "Unknown Effect";

            // ROBUST DATA FALLBACK LOGIC
            let data = null;
            
            // 1. Try specific nation data for this tier and node
            if (specificCategoryFlavor && specificCategoryFlavor[tier] && specificCategoryFlavor[tier][node-1]) {
                data = specificCategoryFlavor[tier][node-1];
            } 
            // 2. Fallback to default (Midlands) data for this tier and node
            else if (defaultFlavor && defaultFlavor[tier] && defaultFlavor[tier][node-1]) {
                data = defaultFlavor[tier][node-1];
            }

            if (data) {
                nodeName = data.name;
                nodeDesc = data.desc;
                nodeEffect = data.effect;
            }

            let status = 'locked';
            let progress = 0;
            
            if (isCompletedInState(id)) {
                status = 'completed';
                progress = 100;
            } else {
                // Simulate progress based on accumulated "Research Days"
                if (effectiveDays >= daysConsumed + realCost) {
                    status = 'completed';
                    progress = 100;
                } else if (effectiveDays > daysConsumed) {
                    status = 'researching';
                    progress = ((effectiveDays - daysConsumed) / realCost) * 100;
                } else if (daysConsumed === 0) {
                    // First node is always available/researching if we have any days
                    status = 'available';
                    if(effectiveDays > 0) { status = 'researching'; progress = (effectiveDays/realCost)*100; }
                } else {
                    // Check if previous node is done
                    const prevNodeId = node > 1 ? `${category.toLowerCase()}_t${tier}_n${node-1}` : `${category.toLowerCase()}_t${tier-1}_n5`;
                    if (tree[prevNodeId] && tree[prevNodeId].status === 'completed') {
                        if (effectiveDays >= daysConsumed) { status = 'available'; } 
                        else { status = 'locked'; }
                    }
                }
            }

            tree[id] = {
                id, tier, nodeIndex: node, name: nodeName, flavor: nodeDesc, effect: nodeEffect,
                cost: realCost, status, progress: Math.min(100, Math.max(0, progress)), category,
                slotType: (slotMult === SLOT_MULTIPLIERS.primary ? 'Primary' : (slotMult === SLOT_MULTIPLIERS.major ? 'Major' : 'Minor'))
            };
            daysConsumed += realCost;
        }
    }
    return tree;
}

export function getActiveAge(nationKey) {
    const currentDay = getAbsoluteDay();
    const nationConfig = NATION_OFFSETS[nationKey] || { base: 0 };
    const effectiveDays = currentDay + nationConfig.base;
    const avgTier = Math.floor(effectiveDays / DAYS_PER_TIER) + 1;
    const actualTier = Math.min(10, Math.max(1, avgTier));
    return AGES.find(age => age.tiers.includes(actualTier)) || AGES[0];
}

export function getGlobalAverageAge() {
    const currentDay = getAbsoluteDay();
    const nationKeys = Object.keys(NATIONS);
    let totalBaseOffset = 0;
    nationKeys.forEach(key => { totalBaseOffset += (NATION_OFFSETS[key]?.base || 0); });
    const averageOffset = totalBaseOffset / nationKeys.length;
    const averageEffectiveDays = currentDay + averageOffset;
    const avgTier = Math.floor(averageEffectiveDays / DAYS_PER_TIER) + 1;
    const actualTier = Math.min(10, Math.max(1, avgTier));
    return AGES.find(age => age.tiers.includes(actualTier)) || AGES[0];
}

export function checkAgeCriteria(nationKey, currentAge, researchState) {
    const maxTier = currentAge.tiers[1];
    let completedCategories = 0;
    // Note: This check is purely visual in the current implementation unless we pass the globalCycle
    // We'll assume base costs for simplicity in this check function
    RESEARCH_CATEGORIES.forEach(cat => {
        // Passing null for cycle uses default 1.0 modifiers, sufficient for checking completion
        const tree = getTechTree(nationKey, cat, researchState, null);
        const lastNodeId = `${cat.toLowerCase()}_t${maxTier}_n5`;
        if (tree[lastNodeId] && tree[lastNodeId].status === 'completed') completedCategories++;
    });
    return { canAdvance: completedCategories >= 3, count: completedCategories, required: 3 };
}