import { state } from './state.js';
import { getIntelForFaction } from './systems/common.js';
import { MAP_DATA } from './map-data.js';
import { LEGAL_DATA } from './legal_data.js';

export function hasSufficientIntel(requirement) {
    if (!requirement) return true;
    if (state.debugMode) return true;
    if (typeof requirement === 'number') { 
        const factionKey = MAP_DATA[map.activeMapId]?.dominantFaction || null;
        return getIntelForFaction(factionKey) >= requirement;
    }
    if (typeof requirement.faction === 'string' && typeof requirement.level === 'number') {
        return getIntelForFaction(requirement.faction) >= requirement.level;
    }
    return true; // Fail open
}

export function getPopulationColor(population) {
    if (population <= 50) return '#4575b4';
    if (population <= 500) return '#91bfdb';
    if (population <= 2000) return '#e0f3f8';
    if (population <= 5000) return '#fee090';
    if (population <= 10000) return '#fdae61';
    return '#f46d43';
}

/**
 * Determines the most relevant tradition key based on a POI or the current map.
 * This function follows a priority order to find the most specific laws applicable.
 * @param {object|null} poi - The Point of Interest object, if one was clicked.
 * @param {string} currentMapId - The ID of the currently displayed map.
 * @returns {object} An object with `{key, type}` for the found tradition, or nulls if none found.
 */
export function getTraditionKey(poi, currentMapId) {
    // Priority 1: POI-specific traditions (e.g., a unique castle with its own rules).
    if (poi && LEGAL_DATA.poi_traditions[poi.id]) {
        return { key: poi.id, type: 'poi' };
    }

    // Priority 2: Sub-region traditions based on the POI's tagged region.
    if (poi && poi.regionId && LEGAL_DATA.regional_traditions[poi.regionId]) {
        return { key: poi.regionId, type: 'region' };
    }

    // Priority 3: Traditions for the currently viewed map itself.
    if (currentMapId && LEGAL_DATA.regional_traditions[currentMapId]) {
        return { key: currentMapId, type: 'region' };
    }
    
    // Priority 4: Fallback to a broader landmass key (e.g., 'midlands_full').
    const mapInfo = MAP_DATA[currentMapId];
    if (mapInfo && mapInfo.group) {
        if (mapInfo.group.includes('Mushroom Kingdom') || mapInfo.group.includes('Islands')) {
             if (LEGAL_DATA.regional_traditions['mushroom_kingdom_full']) {
                return { key: 'mushroom_kingdom_full', type: 'region' };
             }
        }
        if (mapInfo.group.includes('The Midlands')) {
            if (LEGAL_DATA.regional_traditions['midlands_full']) {
                return { key: 'midlands_full', type: 'region' };
            }
        }
        if (mapInfo.group.includes('Other Dimensions')) {
            if (LEGAL_DATA.regional_traditions['the_internet']) {
                return { key: 'the_internet', type: 'region' };
            }
        }
    }

    return { key: null, type: null }; // No traditions found
}