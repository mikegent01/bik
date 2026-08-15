// vital-stats-data.js - Vital Statistics Calculator

import { SPECIES_DATA, REGIONAL_DEMOGRAPHICS } from './species-data.js';
import { MAP_DATA } from '../maps/map-data.js';
import { getAbsoluteDay, calculateGlobalCycle, getGlobalTechAverages } from './research-data.js';
import { WAHWIRE_POSTS } from '../assembly/assembly-data.js';
import { getPlagueData, PLAGUE_LIFECYCLE, getCurrentSeason } from './plagues-data.js';

// ============================================================================
// CONSTANTS
// ============================================================================
const DAYS_PER_YEAR = 365;
const BASE_BIRTH_RATE = 1.8;
const BASE_DEATH_RATE = 1.2;

const SEASON_MODIFIERS = {
    "Golden Summer": { birth: 1.1, death: 0.9 },
    "Crimson Fall": { birth: 0.95, death: 1.0 },
    "Hoarfrost Winter": { birth: 0.8, death: 1.3 },
    "Verdant Spring": { birth: 1.2, death: 0.85 },
    "Unknown": { birth: 1.0, death: 1.0 }
};

const CYCLE_MODIFIERS = {
    calm: { birth: 1.1, death: 0.9 },
    research: { birth: 1.0, death: 0.85 },
    expansion: { birth: 1.2, death: 0.95 },
    tension: { birth: 0.9, death: 1.1 },
    conflict: { birth: 0.7, death: 1.4 },
    crisis: { birth: 0.5, death: 1.8 },
    rebirth: { birth: 1.3, death: 0.8 }
};

// ============================================================================
// VITAL STATISTICS CALCULATION
// ============================================================================

/**
 * Calculate global vital statistics
 */
export function calculateGlobalVitalStats(basePopulation = 0, globalCycle = null, plagues = null) {
    const currentSeason = getCurrentSeason();
    
    if (!globalCycle) {
        globalCycle = calculateGlobalCycle(WAHWIRE_POSTS);
    }
    
    if (!plagues) {
        const techAverages = getGlobalTechAverages();
        const medicalTech = techAverages.MEDICAL || 1;
        plagues = getPlagueData(globalCycle, medicalTech);
    }
    
    const seasonMod = SEASON_MODIFIERS[currentSeason] || SEASON_MODIFIERS.Unknown;
    const cycleMod = CYCLE_MODIFIERS[globalCycle?.phase?.id] || CYCLE_MODIFIERS.calm;

    let birthRate = BASE_BIRTH_RATE * seasonMod.birth * cycleMod.birth;
    let deathRate = BASE_DEATH_RATE * seasonMod.death * cycleMod.death;

    let plagueDeaths = 0;
    if (plagues && plagues.length > 0) {
        plagues.forEach(plague => {
            if (plague.projectedDecline && 
                plague.status !== PLAGUE_LIFECYCLE.STATUSES.ERADICATED &&
                plague.status !== PLAGUE_LIFECYCLE.STATUSES.DORMANT) {
                plagueDeaths += plague.projectedDecline;
            }
        });
    }

    const safePopulation = basePopulation || getEstimatedTotalPopulation();
    const plagueImpactRate = safePopulation > 0 
        ? (plagueDeaths * DAYS_PER_YEAR / safePopulation) * 100 
        : 0;
    const cappedPlagueImpact = Math.min(plagueImpactRate, 50.0);

    deathRate += cappedPlagueImpact;
    const netGrowth = birthRate - deathRate;

    return {
        birthRate,
        deathRate,
        plagueDeaths,
        plagueImpactRate: cappedPlagueImpact,
        netGrowth,
        season: currentSeason,
        cycle: globalCycle?.phase?.name || 'Unknown'
    };
}

/**
 * Get estimated total population from MAP_DATA
 */
function getEstimatedTotalPopulation() {
    let total = 0;
    
    for (const mapKey in MAP_DATA) {
        const map = MAP_DATA[mapKey];
        if (map.pointsOfInterest) {
            map.pointsOfInterest.forEach(poi => {
                total += poi.population || 0;
            });
        }
    }
    
    return total || 5000000;
}

// ============================================================================
// EXPORTS
// ============================================================================
export { SEASON_MODIFIERS, CYCLE_MODIFIERS, BASE_BIRTH_RATE, BASE_DEATH_RATE };