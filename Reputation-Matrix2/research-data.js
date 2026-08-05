

import { CURRENT_GAME_DATE } from './data/world/calendar.js';
import { RESEARCH_FLAVOR } from './research-names.js';
import { LORE_DATA } from './lore.js';
import { RESEARCH_CATEGORIES, SLOT_MULTIPLIERS, RESEARCH_TO_ESTATE_MAPPING } from './research-constants.js';
import { SPECIES_DATA, REGIONAL_DEMOGRAPHICS } from './species-data.js';
import { GUILD_DATA } from './guilds-data.js';

export { RESEARCH_CATEGORIES, SLOT_MULTIPLIERS, RESEARCH_TO_ESTATE_MAPPING };

// Mapping Nation Keys to Region Groups in SPECIES_DATA
const NATION_TO_REGION_GROUP = {
    midlands: 'The Midlands',
    mushroom_kingdom: 'Mushroom Kingdom Regions',
    middle_earth: 'Middle-earth',
    kivotos: 'Kivotos',
    internet: 'The Internet',
    warhammer: 'The Fated Place',
    doughnut_hole: 'The Doughnut Hole',
    pokemon: 'Pokémon Regions',
    animatopia: 'Animatopia',
    equestria: 'Equestria',
    leclaire_isle: "L'Eclaire Isle",
    teyvat: 'Teyvat',
    grand_country: 'The Grand Country'
};

// Mapping Guild Tags to Research Categories
const TAG_TO_CATEGORY = {
    industrial: 'TECH',
    arcane: 'MAGIC',
    nature: 'MEDICAL',
    military: 'WEAPONS',
    scavenger: 'ECONOMIC',
    bureaucratic: 'POLITICAL',
    agricultural: 'ECONOMIC',
    maritime: 'ECONOMIC',
    mining: 'TECH',
    political: 'POLITICAL',
    covert: 'POLITICAL',
    digital: 'TECH',
    medical: 'MEDICAL',
    military_tech: 'WEAPONS'
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

// CYCLE PHASES
export const CYCLE_PHASES = [
    { id: 'calm', name: "Cycle of Calm", color: "#4fc3f7", bias: -3, description: "A period of stability. Resource generation is steady, but urgency is low.", modifiers: { ECONOMIC: 0.8, POLITICAL: 0.8, WEAPONS: 1.5 } },
    { id: 'research', name: "Cycle of Discovery", color: "#9c27b0", bias: -2, description: "A golden age of science and magic. Research speeds are doubled.", modifiers: { MAGIC: 0.7, TECH: 0.7, MEDICAL: 0.7 } },
    { id: 'expansion', name: "Cycle of Expansion", color: "#ffd700", bias: -1, description: "Borders expand and trade flourishes. Economic costs reduced.", modifiers: { ECONOMIC: 0.6, TECH: 0.9, WEAPONS: 1.2 } },
    { id: 'tension', name: "Cycle of Tension", color: "#ff9800", bias: 0, description: "Diplomatic relations fray. Embargoes slow down sharing of knowledge.", modifiers: { POLITICAL: 0.7, ECONOMIC: 1.2 } },
    { id: 'conflict', name: "Cycle of Conflict", color: "#f44336", bias: 1, description: "Open warfare. Weapons research is prioritized; all other progress slows.", modifiers: { WEAPONS: 0.5, MEDICAL: 0.6, ECONOMIC: 1.5, POLITICAL: 1.5 } },
    { id: 'crisis', name: "Cycle of Crisis", color: "#212121", bias: 2, description: "Societal collapse or calamity. Survival is the only priority. Research halts.", modifiers: { MEDICAL: 0.5, WEAPONS: 0.8, TECH: 2.0, MAGIC: 2.0, ECONOMIC: 2.0, POLITICAL: 2.0 } },
    { id: 'rebirth', name: "Cycle of Rebirth", color: "#8bc34a", bias: 3, description: "Reconstruction. Infrastructure repair speed increased.", modifiers: { TECH: 0.6, ECONOMIC: 0.7, WEAPONS: 1.5 } }
];

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

export function getAbsoluteDay() {
    const yearsPassed = CURRENT_GAME_DATE.year - SIMULATION_START_YEAR;
    const days = (yearsPassed * 365) + (CURRENT_GAME_DATE.monthIndex * 30) + CURRENT_GAME_DATE.day;
    return Math.max(0, days);
}




function getImpactDetailsFallback(rumor) {
    const text = (rumor.title + " " + rumor.description).toLowerCase();
    let type = "general";
    let direction = 0;
    let label = "Unrest";

    if (text.match(/war|battle|siege|raid|attack|kill|weapon|threat|army|invasion/)) {
        direction = 1; type = "military"; label = "Military Conflict";
    } 
    else if (text.match(/disaster|catastrophe|plague|famine|collapse|void|breach/)) {
        direction = 1; type = "crisis"; label = "Crisis Event";
    }
    else if (text.match(/scandal|betrayal|plot|spy|secret|tension|dispute|crisis/)) {
        direction = 0.5; type = "political"; label = "Political Tension";
    }
    else if (text.match(/peace|treaty|alliance|trade|agreement|pact/)) {
        direction = -1; type = "diplomatic"; label = "Diplomatic Stabilization";
    }
    else if (text.match(/discovery|found|cure|save|build|grow|research|science|magic/)) {
        direction = -0.8; type = "magic"; label = "Advancement";
    } else {
        direction = 0.1;
    }
    return { score: direction, label, type };
}

function getPushDirection(type, score) {
    if (score > 0) {
        if (type === 'military') return "Conflict";
        if (type === 'crisis') return "Crisis";
        if (type === 'political') return "Tension";
        if (type === 'economic') return "Tension";
        return "Crisis";
    } else {
        if (type === 'diplomatic') return "Calm";
        if (type === 'magic' || type === 'tech') return "Discovery";
        if (type === 'economic') return "Expansion";
        return "Calm";
    }
}


/**
 * Calculates the current Glob/**
 * Check if an event/rumor is in the future (hasn't happened yet)
 */
function isFutureEvent(dateObj) {
    if (!dateObj) return false;
    if (!CURRENT_GAME_DATE) return false;
    
    if (dateObj.year > CURRENT_GAME_DATE.year) return true;
    if (dateObj.year === CURRENT_GAME_DATE.year) {
        if (dateObj.monthIndex > CURRENT_GAME_DATE.monthIndex) return true;
        if (dateObj.monthIndex === CURRENT_GAME_DATE.monthIndex) {
            if (dateObj.day > CURRENT_GAME_DATE.day) return true;
        }
    }
    return false;
}

/**
 * Check if effects should apply (only for past/present events)
 */
function shouldEffectsApply(rumor) {
    if (!rumor.date) return true; // No date = assume it happened
    return !isFutureEvent(rumor.date);
}

function getDaysSinceRumor(rumor) {
    // If rumor is in the future, return negative days (or 0)
    if (isFutureEvent(rumor.date)) {
        return -1; // Indicate future event
    }
    
    let rumorDaysTotal = 0;
    if (rumor.date && typeof rumor.date === 'object') {
        rumorDaysTotal = ((rumor.date.year - SIMULATION_START_YEAR) * 365) + (rumor.date.monthIndex * 30) + rumor.date.day;
    } else {
        return 60; // Fallback for legacy
    }
    const currentDaysTotal = ((CURRENT_GAME_DATE.year - SIMULATION_START_YEAR) * 365) + (CURRENT_GAME_DATE.monthIndex * 30) + CURRENT_GAME_DATE.day;
    return Math.max(0, currentDaysTotal - rumorDaysTotal);
}

/**
 * Calculates metrics for a single rumor.
 * Returns zero impact for future events.
 */
export function calculateRumorMetrics(rumor, relatedPosts) {
    // CRITICAL: Check if this is a future event
    const isFuture = isFutureEvent(rumor.date);
    
    // If future event, return zeroed metrics
    if (isFuture) {
        const baseData = rumor.cycle_impact 
            ? { score: rumor.cycle_impact.score, label: rumor.cycle_impact.label, type: rumor.cycle_impact.type }
            : getImpactDetailsFallback(rumor);
            
        return {
            finalScore: 0, // No impact on current cycle
            baseData,
            daysPassed: -1, // Negative indicates future
            hypeFactor: 1,
            decayFactor: 1,
            decayLoss: 0,
            isFresh: false,
            isFuture: true, // Flag for UI
            status: 'Future',
            repMultiplier: 0, // No reputation effects
            pushTarget: 'N/A',
            pendingScore: baseData.score // Store what it WILL be
        };
    }
    
    const postCount = Array.isArray(relatedPosts) ? relatedPosts.length : relatedPosts;
    
    // 1. Check Freshness (STRICT check against current date)
    // Also filter out future posts
    let isFresh = false;
    if (Array.isArray(relatedPosts)) {
        // Filter to only past/present posts
        const validPosts = relatedPosts.filter(p => !isFutureEvent(p.date));
        
        const latestPost = validPosts.sort((a, b) => {
            const da = a.date ? (a.date.year*365 + a.date.monthIndex*30 + a.date.day) : 0;
            const db = b.date ? (b.date.year*365 + b.date.monthIndex*30 + b.date.day) : 0;
            return db - da;
        })[0];

        if (latestPost && latestPost.date) {
            if (latestPost.date.year === CURRENT_GAME_DATE.year &&
                latestPost.date.monthIndex === CURRENT_GAME_DATE.monthIndex &&
                latestPost.date.day === CURRENT_GAME_DATE.day) {
                isFresh = true;
            }
        }
    }

    // 2. Base Data
    let baseData;
    if (rumor.cycle_impact) {
        baseData = { 
            score: rumor.cycle_impact.score, 
            label: rumor.cycle_impact.label, 
            type: rumor.cycle_impact.type 
        };
    } else {
        baseData = getImpactDetailsFallback(rumor);
    }

    // 3. Days Passed
    const daysPassed = getDaysSinceRumor(rumor);

    // 4. Hype Factor - only count valid (non-future) posts
    const validPostCount = Array.isArray(relatedPosts) 
        ? relatedPosts.filter(p => !isFutureEvent(p.date)).length 
        : postCount;
    const hypeFactor = 1 + (validPostCount * 0.15);

    // 5. Decay Factor
    let decayFactor = 1 + (daysPassed * 0.25);
    if (isFresh) {
        decayFactor = 1.0;
    } else if (daysPassed < 2) {
        decayFactor = 1.1;
    }

    // 6. Final Calculation
    const rawMagnitude = Math.abs(baseData.score);
    const amplifiedMagnitude = rawMagnitude * hypeFactor;
    const finalMagnitude = amplifiedMagnitude / decayFactor;
    
    const direction = baseData.score >= 0 ? 1 : -1;
    const finalScore = finalMagnitude * direction;

    const potentialImpact = amplifiedMagnitude;
    const decayLoss = potentialImpact - finalMagnitude;

    // 7. Status & Multiplier Determination
    let status = "Active";
    let repMultiplier = 1.0;

    if (daysPassed > 60) {
        status = "Dead";
        repMultiplier = 0.1;
    } else {
        if (finalMagnitude >= 20) { status = "Viral"; repMultiplier = 3.0; }
        else if (finalMagnitude >= 10) { status = "Trending"; repMultiplier = 2.0; }
        else if (finalMagnitude >= 5) { status = "Active"; repMultiplier = 1.5; }
        else if (finalMagnitude >= 1) { status = "Fading"; repMultiplier = 1.0; }
        else { status = "Old News"; repMultiplier = 0.5; }
    }
    
    if (finalMagnitude < 0.1) {
        status = "Dead";
        repMultiplier = 0.1;
    }

    if (isFresh && status === 'Dead') status = "Active";

    return {
        finalScore,
        baseData,
        daysPassed,
        hypeFactor,
        decayFactor,
        decayLoss: decayLoss * direction,
        isFresh,
        isFuture: false,
        status,
        repMultiplier,
        pushTarget: getPushDirection(baseData.type, finalScore)
    };
}

/**
 * Calculates the current Global Cycle Phase.
 * Only considers past/present events.
 */
export function calculateGlobalCycle(allPosts) {
    const totalMonths = (CURRENT_GAME_DATE.year * 12) + CURRENT_GAME_DATE.monthIndex;
    const naturalPhaseIndex = totalMonths % 7;
    const naturalPhase = CYCLE_PHASES[naturalPhaseIndex];

    let totalMomentum = 0;
    let drivingFactors = [];
    let pendingFactors = []; // Future events (debug mode only)

    if (LORE_DATA && LORE_DATA.rumors) {
        LORE_DATA.rumors.forEach(rumor => {
            // Filter posts to only include past/present
            const validPosts = allPosts.filter(p => p.rumorId === rumor.id && !isFutureEvent(p.date));
            const metrics = calculateRumorMetrics(rumor, validPosts);
            
            // Skip future events in main calculation
            if (metrics.isFuture) {
                // Store for debug display
                if (metrics.pendingScore && Math.abs(metrics.pendingScore) > 0.1) {
                    pendingFactors.push({
                        name: rumor.title,
                        impact: metrics.pendingScore,
                        label: metrics.baseData.label,
                        type: metrics.baseData.type,
                        status: 'Future',
                        date: rumor.date
                    });
                }
                return; // Don't add to momentum
            }
            
            totalMomentum += metrics.finalScore;

            if (Math.abs(metrics.finalScore) > 0.1) {
                drivingFactors.push({ 
                    name: rumor.title, 
                    impact: metrics.finalScore,
                    label: metrics.baseData.label,
                    type: metrics.baseData.type,
                    pushTarget: metrics.pushTarget,
                    status: metrics.status
                });
            }
        });
    }

    let shift = Math.round(totalMomentum);
    let activePhaseIndex = (naturalPhaseIndex + shift) % 7;
    if (activePhaseIndex < 0) activePhaseIndex += 7;
    
    if (totalMomentum > 10) activePhaseIndex = 5;
    else if (totalMomentum < -10) activePhaseIndex = 0;
    
    const activePhase = CYCLE_PHASES[activePhaseIndex];
    drivingFactors.sort((a,b) => Math.abs(b.impact) - Math.abs(a.impact));
    pendingFactors.sort((a,b) => Math.abs(b.impact) - Math.abs(a.impact));

    return {
        phase: activePhase,
        naturalPhase: naturalPhase,
        momentum: totalMomentum,
        factors: drivingFactors,
        pendingFactors: pendingFactors // For debug UI
    };
}

/**
 * Calculates research bonuses based on the dominant species of a nation.
 */
export function calculateDemographicBonus(nationKey) {
    const bonusMap = {};
    
    // 1. Identify the Region Group for this Nation
    const regionGroup = NATION_TO_REGION_GROUP[nationKey];
    if (!regionGroup) return bonusMap;

    // 2. Get Demographics
    const demographics = REGIONAL_DEMOGRAPHICS[regionGroup];
    if (!demographics) return bonusMap;

    // 3. Find dominant species
    let dominantSpeciesKey = null;
    let maxPct = 0;

    for (const [species, pct] of Object.entries(demographics)) {
        if (pct > maxPct) {
            maxPct = pct;
            dominantSpeciesKey = species;
        }
    }

    if (!dominantSpeciesKey) return bonusMap;

    // 4. Get species favored guild tag
    const speciesData = SPECIES_DATA[dominantSpeciesKey];
    if (!speciesData || !speciesData.favored_guild_tag) return bonusMap;

    const favoredTag = speciesData.favored_guild_tag;

    // 5. Map Tag to Research Category
    const category = TAG_TO_CATEGORY[favoredTag];
    
    if (category) {
        // Base bonus of 20% for dominant demographic alignment
        bonusMap[category] = 1.2;
        
        // If the nation's primary slot matches the demographic bonus, boost it further
        if (NATIONS[nationKey].slots.primary === category) {
            bonusMap[category] = 1.3; // 30% total bonus if it matches national focus
        }
    }

    return bonusMap;
}

/**
 * NEW: Calculates research bonuses based on sponsored Guilds.
 */
export function calculateGuildBonus(nationKey) {
    const bonusMap = {};
    
    Object.values(GUILD_DATA).forEach(guild => {
        // Check if this guild operates in this nation (via sponsoring faction)
        // Map Factions to Nations roughly
        let isSponsored = false;
        if (guild.sponsoring_faction) {
            // If guild is sponsored by a faction like 'iron_legion', and activeNation is 'midlands', match
            // Simplified Check: If faction key contains nation key logic or manual map
            // For simplicity, let's use a basic mapping or string check
            if (guild.sponsoring_faction.includes(nationKey) || 
               (nationKey === 'midlands' && guild.sponsoring_faction.includes('iron_legion')) ||
               (nationKey === 'mushroom_kingdom' && guild.sponsoring_faction.includes('mushroom'))) {
                   isSponsored = true;
               }
        } else {
            // Independent Guilds grant global minor bonuses if highly active, or just to local region
            // Assume independent guilds operate everywhere for now
            isSponsored = true; 
        }

        if (isSponsored && guild.research_bonus) {
            const cat = guild.research_bonus.category;
            const amount = guild.research_bonus.amount;
            if (!bonusMap[cat]) bonusMap[cat] = 1.0;
            bonusMap[cat] += amount;
        }
    });

    return bonusMap;
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
    
    let slotMult = 1.0;
    if (nationConfig.slots.primary === category) slotMult = SLOT_MULTIPLIERS.primary;
    else if (nationConfig.slots.major.includes(category)) slotMult = SLOT_MULTIPLIERS.major;
    else slotMult = SLOT_MULTIPLIERS.minor;

    let cycleMod = 1.0;
    if (globalCycle && globalCycle.phase.modifiers && globalCycle.phase.modifiers[category]) {
        cycleMod = globalCycle.phase.modifiers[category];
    }
    
    // Calculate demographic bonus
    const demoBonuses = calculateDemographicBonus(nationKey);
    const demoMod = demoBonuses[category] ? (1 / demoBonuses[category]) : 1.0; // Invert because lower cost = faster

    // Calculate Guild Bonus
    const guildBonuses = calculateGuildBonus(nationKey);
    const guildMod = guildBonuses[category] ? (1 / guildBonuses[category]) : 1.0;

    const totalMultiplier = slotMult * cycleMod * demoMod * guildMod;
    const effectiveDays = currentDay + baseOffset;
    let daysConsumed = 0;

    const flavorSource = RESEARCH_FLAVOR[nationKey] || RESEARCH_FLAVOR.default;
    const defaultFlavor = RESEARCH_FLAVOR.default[category]; 
    const specificCategoryFlavor = flavorSource[category]; 

    const isCompletedInState = (id) => {
        if (!researchState || !researchState[nationKey]) return false;
        return researchState[nationKey].completed?.[category]?.includes(id);
    };

    for (let tier = 1; tier <= 10; tier++) {
        for (let node = 1; node <= 5; node++) {
            const id = `${category.toLowerCase()}_t${tier}_n${node}`;
            const baseCost = Math.floor(DAYS_PER_TIER / 5) + (tier * 10); 
            const realCost = Math.ceil(baseCost * totalMultiplier);

            let nodeName = "Unknown Tech";
            let nodeDesc = "Details unavailable.";
            let nodeEffect = "Unknown Effect";

            let data = null;
            if (specificCategoryFlavor && specificCategoryFlavor[tier] && specificCategoryFlavor[tier][node-1]) {
                data = specificCategoryFlavor[tier][node-1];
            } 
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
                if (effectiveDays >= daysConsumed + realCost) {
                    status = 'completed';
                    progress = 100;
                } else if (effectiveDays > daysConsumed) {
                    status = 'researching';
                    progress = ((effectiveDays - daysConsumed) / realCost) * 100;
                } else if (daysConsumed === 0) {
                    status = 'available';
                    if(effectiveDays > 0) { status = 'researching'; progress = (effectiveDays/realCost)*100; }
                } else {
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
    RESEARCH_CATEGORIES.forEach(cat => {
        const tree = getTechTree(nationKey, cat, researchState, null);
        const lastNodeId = `${cat.toLowerCase()}_t${maxTier}_n5`;
        if (tree[lastNodeId] && tree[lastNodeId].status === 'completed') completedCategories++;
    });
    return { canAdvance: completedCategories >= 3, count: completedCategories, required: 3 };
}
