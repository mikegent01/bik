// population-state.js - CENTRAL POPULATION SIMULATION ENGINE
// Connects plagues, demographics, calendar, and research systems

import { SPECIES_DATA, REGIONAL_DEMOGRAPHICS, SPECIES_ESTATE_BIAS } from './species-data.js';
import { MAP_DATA } from '../maps/map-data.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from './data/world/calendar.js';
import { getAbsoluteDay, calculateGlobalCycle, getGlobalTechAverages } from './research-data.js';
import { WAHBOOK_POSTS } from '../assembly/assembly-data.js';
import { getPlagueData, PLAGUE_LIFECYCLE, SPECIES_TAGS, getCurrentSeason } from './plagues-data.js';

// ============================================================================
// CONSTANTS
// ============================================================================
const SIMULATION_START_YEAR = 1035;
const DAYS_PER_YEAR = 365;

// Base rates (annual percentages)
const BASE_BIRTH_RATE = 1.8;  // 1.8% annual birth rate
const BASE_DEATH_RATE = 1.2;  // 1.2% annual death rate (non-plague)

// Season modifiers for birth/death rates
const SEASON_MODIFIERS = {
    "Golden Summer": { birth: 1.1, death: 0.9, plagueSpawn: 1.2 },
    "Crimson Fall": { birth: 0.95, death: 1.0, plagueSpawn: 1.3 },
    "Hoarfrost Winter": { birth: 0.8, death: 1.3, plagueSpawn: 0.8 },
    "Verdant Spring": { birth: 1.2, death: 0.85, plagueSpawn: 1.5 },
    "Unknown": { birth: 1.0, death: 1.0, plagueSpawn: 1.0 }
};

// Cycle modifiers
const CYCLE_MODIFIERS = {
    calm: { birth: 1.1, death: 0.9, plagueSpawn: 0.5 },
    research: { birth: 1.0, death: 0.85, plagueSpawn: 0.7 },
    expansion: { birth: 1.2, death: 0.95, plagueSpawn: 0.9 },
    tension: { birth: 0.9, death: 1.1, plagueSpawn: 1.2 },
    conflict: { birth: 0.7, death: 1.4, plagueSpawn: 1.5 },
    crisis: { birth: 0.5, death: 1.8, plagueSpawn: 2.0 },
    rebirth: { birth: 1.3, death: 0.8, plagueSpawn: 0.6 }
};

// ============================================================================
// SEEDED RANDOM (for deterministic simulation)
// ============================================================================
export function seededRandom(seed) {
    let state = typeof seed === 'string'
        ? Array.from(seed).reduce((acc, c, i) => acc + c.charCodeAt(0) * (i + 1), 0)
        : seed;
    
    return function() {
        state = (state * 1103515245 + 12345) & 0x7fffffff;
        return state / 0x7fffffff;
    };
}

// ============================================================================
// BASE POPULATION CALCULATION
// ============================================================================

/**
 * Calculate base populations from MAP_DATA POIs only.
 * Matches logic in global-map-analysis.js to ensure consistency.
 */
export function getBasePopulations() {
    const byRegion = {};
    const bySpecies = {};
    const byNation = {};
    let total = 0;

    // Initialize all species keys with 0 to prevent UI errors
    for (const key in SPECIES_DATA) {
        bySpecies[key] = 0;
    }

    // Iterate map data, processing only "Full" maps to prevent double counting
    for (const mapKey in MAP_DATA) {
        if (!mapKey.endsWith('_full')) continue;

        const map = MAP_DATA[mapKey];
        const region = map.group || 'Other';
        const nation = map.nation || 'unaligned';

        if (!byRegion[region]) byRegion[region] = 0;
        if (!byNation[nation]) byNation[nation] = 0;

        if (map.pointsOfInterest) {
            map.pointsOfInterest.forEach(poi => {
                const pop = poi.population || 0;
                if (pop > 0) {
                    byRegion[region] += pop;
                    byNation[nation] += pop;
                    total += pop;

                    // Distribute by species demographics defined for this region
                    const demographics = REGIONAL_DEMOGRAPHICS[region] || { dnd_human: 1.0 };
                    
                    // Normalize percentages if needed (though they should sum to 1.0)
                    let totalPct = 0;
                    for (const pct of Object.values(demographics)) totalPct += pct;
                    if (totalPct === 0) totalPct = 1;

                    for (const [speciesKey, percentage] of Object.entries(demographics)) {
                        if (SPECIES_DATA[speciesKey]) {
                            // Calculate specific population share
                            const speciesPop = pop * (percentage / totalPct);
                            bySpecies[speciesKey] += speciesPop;
                        }
                    }
                }
            });
        }
    }

    return { byRegion, bySpecies, byNation, total };
}

// ============================================================================
// POPULATION SIMULATION
// ============================================================================

/**
 * Simulate population changes from start to current day
 * Returns adjusted population figures
 */
export function simulatePopulation() {
    const currentDay = getAbsoluteDay();
    const basePop = getBasePopulations();
    const globalCycle = calculateGlobalCycle(WAHBOOK_POSTS);
    const techAverages = getGlobalTechAverages();
    const medicalTech = techAverages.MEDICAL || 1;
    const currentSeason = getCurrentSeason();

    // Get active plagues
    const plagues = getPlagueData(globalCycle, medicalTech);

    // Calculate cumulative changes
    const result = calculatePopulationState(
        basePop,
        currentDay,
        globalCycle,
        currentSeason,
        plagues,
        medicalTech
    );

    return result;
}

/**
 * Calculate the current population state
 */
function calculatePopulationState(basePop, currentDay, globalCycle, currentSeason, plagues, medicalTech) {
    // Get modifiers
    const seasonMod = SEASON_MODIFIERS[currentSeason] || SEASON_MODIFIERS.Unknown;
    const cycleMod = CYCLE_MODIFIERS[globalCycle?.phase?.id] || CYCLE_MODIFIERS.calm;

    // Reference point: Year 1040, Month 0, Day 1
    // Population changes are calculated FROM this reference point
    const REFERENCE_YEAR = 1040;
    const REFERENCE_DAY = (REFERENCE_YEAR - 1035) * 365; // Day 1825
    
    // Days elapsed since reference point (this is what changes when you change the date!)
    const daysFromReference = Math.max(0, currentDay - REFERENCE_DAY);

    // Calculate daily rates (convert annual to daily)
    const dailyBirthRate = (BASE_BIRTH_RATE / DAYS_PER_YEAR) * seasonMod.birth * cycleMod.birth;
    const dailyDeathRate = (BASE_DEATH_RATE / DAYS_PER_YEAR) * seasonMod.death * cycleMod.death;

    // Medical tech reduces death rate
    const techDeathReduction = 1 - (medicalTech * 0.02);
    const adjustedDeathRate = dailyDeathRate * Math.max(0.5, techDeathReduction);

    // Calculate plague deaths by species (daily totals)
    const plagueDeathsBySpecies = {};
    const totalPlagueDeaths = calculatePlagueDeaths(plagues, basePop.bySpecies, plagueDeathsBySpecies);

    // Calculate net population changes per species
    const speciesAdjustments = {};
    let totalDeathsDaily = 0;
    let totalBirthsDaily = 0;
    let totalPlagueDeathsDaily = 0;

    for (const [speciesKey, basePopulation] of Object.entries(basePop.bySpecies)) {
        if (basePopulation <= 0) {
            speciesAdjustments[speciesKey] = {
                base: 0, births: 0, naturalDeaths: 0, plagueDeaths: 0,
                netChange: 0, adjusted: 0
            };
            continue;
        }

        // Get species-specific modifiers
        const speciesData = SPECIES_DATA[speciesKey];
        const speciesMod = getSpeciesVitalModifiers(speciesKey, speciesData);

        // Calculate this species' daily rates
        const speciesBirthRate = dailyBirthRate * speciesMod.birth;
        const speciesDeathRate = adjustedDeathRate * speciesMod.death;

        // Daily values
        const dailyBirths = basePopulation * speciesBirthRate;
        const dailyNaturalDeaths = basePopulation * speciesDeathRate;
        const dailyPlagueDeaths = plagueDeathsBySpecies[speciesKey] || 0;
        
        // Total daily deaths
        const totalDailyDeaths = dailyNaturalDeaths + dailyPlagueDeaths;
        
        // Net daily change
        const dailyNetChange = dailyBirths - totalDailyDeaths;

        // Cumulative change over time
        const cumulativeChange = dailyNetChange * daysFromReference;
        
        // Adjusted population
        const adjustedPopulation = Math.max(0, Math.round(basePopulation + cumulativeChange));

        speciesAdjustments[speciesKey] = {
            base: basePopulation,
            births: dailyBirths,
            naturalDeaths: dailyNaturalDeaths,
            plagueDeaths: dailyPlagueDeaths,
            totalDeaths: totalDailyDeaths,
            netChange: dailyNetChange,
            cumulativeChange: cumulativeChange,
            daysSimulated: daysFromReference,
            adjusted: adjustedPopulation
        };

        totalDeathsDaily += totalDailyDeaths;
        totalBirthsDaily += dailyBirths;
        totalPlagueDeathsDaily += dailyPlagueDeaths;
    }

    // Recalculate totals
    let adjustedTotal = 0;
    const adjustedBySpecies = {};
    
    for (const [key, adj] of Object.entries(speciesAdjustments)) {
        adjustedBySpecies[key] = adj.adjusted;
        adjustedTotal += adj.adjusted;
    }

    // Recalculate regional populations
    const adjustedByRegion = {};
    for (const [region, baseRegionPop] of Object.entries(basePop.byRegion)) {
        // We need to estimate regional growth based on the species in that region
        const demographics = REGIONAL_DEMOGRAPHICS[region] || {};
        let regionTotal = 0;
        
        // Weighted growth factor based on species composition
        let weightedGrowthFactor = 0;
        let totalWeight = 0;
        
        for (const [speciesKey, percentage] of Object.entries(demographics)) {
            const speciesAdj = speciesAdjustments[speciesKey];
            if (speciesAdj && speciesAdj.base > 0) {
                const growthRatio = speciesAdj.adjusted / speciesAdj.base;
                weightedGrowthFactor += growthRatio * percentage;
                totalWeight += percentage;
            }
        }
        
        if (totalWeight > 0) {
            weightedGrowthFactor = weightedGrowthFactor / totalWeight;
            regionTotal = baseRegionPop * weightedGrowthFactor;
        } else {
            regionTotal = baseRegionPop;
        }
        
        adjustedByRegion[region] = Math.round(regionTotal);
    }

    const populationChange = adjustedTotal - basePop.total;

    return {
        base: basePop,
        adjusted: {
            bySpecies: adjustedBySpecies,
            byRegion: adjustedByRegion,
            total: adjustedTotal
        },
        rates: {
            dailyBirthRate,
            dailyDeathRate: adjustedDeathRate,
            annualBirthRate: dailyBirthRate * DAYS_PER_YEAR,
            annualDeathRate: (adjustedDeathRate * DAYS_PER_YEAR),
            netGrowthRate: (dailyBirthRate - adjustedDeathRate) * DAYS_PER_YEAR
        },
        deaths: {
            natural: totalDeathsDaily - totalPlagueDeathsDaily,
            plague: totalPlagueDeathsDaily,
            total: totalDeathsDaily
        },
        births: totalBirthsDaily,
        speciesDetails: speciesAdjustments,
        plagues: plagues,
        populationChange: {
            absolute: populationChange,
            percent: basePop.total > 0 ? (populationChange / basePop.total) * 100 : 0,
            daysFromReference: daysFromReference
        },
        modifiers: { season: seasonMod, cycle: cycleMod, medical: medicalTech },
        currentDay,
        currentSeason,
        globalCycle
    };
}

/**
 * Calculate plague deaths distributed by species
 */
function calculatePlagueDeaths(plagues, speciesPopulations, outputBySpecies) {
    let totalDeaths = 0;

    if (!plagues || plagues.length === 0) return 0;

    plagues.forEach(plague => {
        // Skip inactive plagues
        if (!plague || 
            plague.status === PLAGUE_LIFECYCLE.STATUSES.ERADICATED ||
            plague.status === PLAGUE_LIFECYCLE.STATUSES.DORMANT ||
            plague.status === PLAGUE_LIFECYCLE.STATUSES.CONTAINED) {
            return;
        }

        // Get daily deaths from this plague
        const dailyDeaths = plague.projectedDecline || 0;
        if (dailyDeaths <= 0) return;

        // Get affected species
        const affectedSpecies = plague.affected_species || [];
        if (affectedSpecies.length === 0) return;

        // Calculate total population of affected species
        let totalAffectedPop = 0;
        affectedSpecies.forEach(speciesKey => {
            totalAffectedPop += (speciesPopulations[speciesKey] || 0);
        });

        if (totalAffectedPop === 0) return;

        // Distribute deaths proportionally among affected species
        affectedSpecies.forEach(speciesKey => {
            const speciesPop = speciesPopulations[speciesKey] || 0;
            if (speciesPop <= 0) return;
            
            const proportion = speciesPop / totalAffectedPop;
            const speciesDeaths = dailyDeaths * proportion;

            if (!outputBySpecies[speciesKey]) {
                outputBySpecies[speciesKey] = 0;
            }
            outputBySpecies[speciesKey] += speciesDeaths;
            totalDeaths += speciesDeaths;
        });
    });

    return totalDeaths;
}

/**
 * Get species-specific vital rate modifiers
 */
function getSpeciesVitalModifiers(speciesKey, speciesData) {
    const tags = SPECIES_TAGS[speciesKey] || ['organic'];
    const status = speciesData?.social_status || '';
    
    // Default modifiers
    let birthMod = 1.0;
    let deathMod = 1.0;

    // === Tag-based modifiers ===
    
    // Undead don't reproduce naturally and are hard to kill
    if (tags.includes('undead')) {
        birthMod = 0.0;
        deathMod = 0.2;
    }

    // Digital entities can replicate but also crash
    if (tags.includes('digital')) {
        birthMod = 1.8;
        deathMod = 1.3;
    }

    // Constructs are manufactured
    if (tags.includes('construct')) {
        birthMod = 0.1;
        deathMod = 0.4;
    }

    // === Status-based modifiers ===
    
    if (status.includes('Unique') || status.includes('Legendary')) {
        birthMod = 0.01; // Almost never reproduce
        deathMod = 0.01; // Almost immortal
    } else if (status.includes('Endangered')) {
        birthMod = 0.3;
        deathMod = 0.2; // Protected / hardy
    } else if (status.includes('Rare') || status.includes('Anomaly')) {
        birthMod = 0.2;
        deathMod = 0.3;
    } else if (status.includes('Pest') || status.includes('Disposable')) {
        birthMod = 3.0; // Breed like crazy
        deathMod = 2.5; // Die easily
    }

    // === Species-specific overrides ===
    
    // Long-lived races
    if (speciesKey.includes('elf') || speciesKey.includes('vampire') || speciesKey.includes('adeptus')) {
        birthMod = 0.15;
        deathMod = 0.1;
    }

    // Prolific races
    if (speciesKey.includes('goblin') || speciesKey.includes('skaven') || speciesKey.includes('goomba')) {
        birthMod = 2.8;
        deathMod = 2.2;
    }

    if (speciesKey.includes('toad') || speciesKey.includes('koopa')) {
        birthMod = 1.4;
        deathMod = 1.1;
    }

    if (speciesKey.includes('orc') || speciesKey.includes('beastman')) {
        birthMod = 2.0;
        deathMod = 1.8;
    }

    if (speciesKey.includes('dwarf')) {
        birthMod = 0.5;
        deathMod = 0.6;
    }

    if (speciesKey.includes('void') || speciesKey.includes('cosmic') || speciesKey.includes('time_echo')) {
        birthMod = 0.02;
        deathMod = 0.05;
    }

    // Dough/Pastry folk - they reproduce by baking!
    if (speciesKey.includes('dough') || speciesKey.includes('frosting') || speciesKey.includes('candy')) {
        birthMod = 1.6; // Can be baked quickly
        deathMod = 1.4; // But also get eaten/stale
    }

    // Pokemon breed at centers
    if (speciesKey.includes('pokemon')) {
        birthMod = 1.3;
        deathMod = 0.8; // Pokemon Centers keep them alive
    }

    // Memes spread virally
    if (speciesKey.includes('meme') || speciesKey.includes('spam')) {
        birthMod = 3.5;
        deathMod = 3.0; // But die out fast when stale
    }

    return { birth: birthMod, death: deathMod };
}

// ============================================================================
// VITAL STATISTICS (Updated to use simulation)
// ============================================================================

/**
 * Calculate global vital statistics for display
 */
export function calculateGlobalVitalStats(basePopulation = null, globalCycle = null, plagues = null) {
    // If called without params, run full simulation
    if (!basePopulation && !globalCycle && !plagues) {
        const sim = simulatePopulation();
        return {
            birthRate: sim.rates.annualBirthRate,
            deathRate: sim.rates.annualDeathRate,
            plagueDeaths: sim.deaths.plague,
            plagueImpactRate: (sim.deaths.plague / Math.max(1, sim.adjusted.total)) * DAYS_PER_YEAR * 100,
            netGrowth: sim.rates.netGrowthRate,
            totalPopulation: sim.adjusted.total,
            basePopulation: sim.base.total
        };
    }

    // Legacy compatibility - use provided params
    const currentSeason = getCurrentSeason();
    const seasonMod = SEASON_MODIFIERS[currentSeason] || SEASON_MODIFIERS.Unknown;
    const cycleMod = CYCLE_MODIFIERS[globalCycle?.phase?.id] || CYCLE_MODIFIERS.calm;

    let birthRate = BASE_BIRTH_RATE * seasonMod.birth * cycleMod.birth;
    let deathRate = BASE_DEATH_RATE * seasonMod.death * cycleMod.death;

    // Calculate plague impact
    let plagueDeaths = 0;
    if (plagues && plagues.length > 0) {
        plagues.forEach(plague => {
            if (plague.projectedDecline && 
                plague.status !== PLAGUE_LIFECYCLE.STATUSES.ERADICATED) {
                plagueDeaths += plague.projectedDecline;
            }
        });
    }

    const safePopulation = basePopulation || 5000000;
    const plagueImpactRate = (plagueDeaths * DAYS_PER_YEAR / safePopulation) * 100;
    const cappedPlagueImpact = Math.min(plagueImpactRate, 50.0);

    deathRate += cappedPlagueImpact;
    const netGrowth = birthRate - deathRate;

    return {
        birthRate,
        deathRate,
        plagueDeaths,
        plagueImpactRate: cappedPlagueImpact,
        netGrowth
    };
}

// ============================================================================
// EXPORTS
// ============================================================================
export {
    SEASON_MODIFIERS,
    CYCLE_MODIFIERS,
    BASE_BIRTH_RATE,
    BASE_DEATH_RATE
};
