// global-map-analysis.js

import { MAP_DATA } from './map-data.js';
import { getAllFactions, getAllSystemIds, toSystemId, getFaction } from './systems/faction-registry.js';
/**
 * Core function to get all map statistics
 * Aggregates data from all 'Full' map entries in MAP_DATA.
 */
export function getRealTimeMapStats() {
    const allFactions = getAllFactions();
    const systemIds = getAllSystemIds();

    const stats = {
        global: {},
        regions: [] // These will be "Regions" in the global context
    };

    // Initialize global counters for ALL factions
    systemIds.forEach(sysId => {
        stats.global[sysId] = {
            id: sysId,
            military: 0,
            economic: 0,
            political: 0,
            population: 0,
            poiCount: 0,
            controlledRegions: 0,
            activeRegions: 0
        };
    });

    // Process each Full Map entry in MAP_DATA
    Object.values(MAP_DATA).forEach(region => {
        // Only process "Full" maps to represent Regions and avoid data duplication
        // We check for _full suffix as convention
        if (!region.id.endsWith('_full')) return;
        
        if (!region.pointsOfInterest || region.pointsOfInterest.length === 0) return;

        const regionCounts = {};
        let regionMil = 0;
        let regionEco = 0;
        let regionPol = 0;
        let regionPop = 0;

        // Process POIs
        region.pointsOfInterest.forEach(poi => {
            const sysId = toSystemId(poi.factionId);

            // Initialize if this is a newly discovered faction
            if (!stats.global[sysId]) {
                stats.global[sysId] = {
                    id: sysId,
                    military: 0,
                    economic: 0,
                    political: 0,
                    population: 0,
                    poiCount: 0,
                    controlledRegions: 0,
                    activeRegions: 0
                };
            }

            stats.global[sysId].military += (poi.military_strength || 0);
            stats.global[sysId].economic += (poi.economic_value || 0);
            stats.global[sysId].political += (poi.political_influence || 0);
            stats.global[sysId].population += (poi.population || 0);
            stats.global[sysId].poiCount += 1;

            regionCounts[sysId] = (regionCounts[sysId] || 0) + 1;

            regionMil += (poi.military_strength || 0);
            regionEco += (poi.economic_value || 0);
            regionPol += (poi.political_influence || 0);
            regionPop += (poi.population || 0);
        });

        // Update active regions count for factions present in this region
        Object.keys(regionCounts).forEach(sysId => {
            if (stats.global[sysId]) {
                stats.global[sysId].activeRegions += 1;
            }
        });

        // Determine controller
        const sortedFactions = Object.entries(regionCounts).sort((a, b) => b[1] - a[1]);
        let controller = 'unaligned';
        let maxCount = 0;
        let runnerUpCount = 0;

        if (sortedFactions.length > 0) {
            const candidate = sortedFactions[0][0];
            const count = sortedFactions[0][1];
            
            // THRESHOLD CHECK: Must have > 35 POIs to control the region
            if (candidate !== 'unaligned' && count > 35) {
                controller = candidate;
            }

            maxCount = count;
            if (sortedFactions.length > 1) {
                runnerUpCount = sortedFactions[1][1];
            }
        }

        if (controller !== 'unaligned' && stats.global[controller]) {
            stats.global[controller].controlledRegions += 1;
        }

        const isContested = (
            maxCount > 0 &&
            runnerUpCount > 0 &&
            (maxCount - runnerUpCount) <= 2 && // Slightly higher threshold for whole regions
            region.pointsOfInterest.length > 5
        );

        stats.regions.push({
            id: region.id,
            name: region.name.replace(' (Full)', ''), // Clean name
            type: 'Region',
            controller,
            isContested,
            totalValue: regionMil + regionEco,
            militarySum: regionMil,
            economicSum: regionEco,
            politicalSum: regionPol,
            populationSum: regionPop,
            poiCount: region.pointsOfInterest.length,
            factionPresence: regionCounts
        });
    });

    return stats;
}

/**
 * Get curated territory list for sidebar (Regions in this context)
 */
export function getCuratedTerritoryList() {
    const stats = getRealTimeMapStats();
    
    // Sort regions by total value (Economic + Military)
    return stats.regions.sort((a, b) => b.totalValue - a.totalValue);
}

/**
 * Get detailed stats for a specific faction globally
 */
export function getDetailedFactionStats(factionKey) {
    const result = {
        military: 0,
        economic: 0,
        political: 0,
        population: 0,
        poiCount: 0,
        controlledRegions: 0,
        activeRegions: 0,
        regions: [], // Regions
        pois: []
    };

    Object.values(MAP_DATA).forEach(region => {
        if (!region.id.endsWith('_full')) return;
        if (!region.pointsOfInterest) return;

        const regionCounts = {};
        let regionMil = 0;
        let regionEco = 0;

        region.pointsOfInterest.forEach(poi => {
            const sysId = toSystemId(poi.factionId);
            regionCounts[sysId] = (regionCounts[sysId] || 0) + 1;

            if (sysId === factionKey) {
                result.military += (poi.military_strength || 0);
                result.economic += (poi.economic_value || 0);
                result.political += (poi.political_influence || 0);
                result.population += (poi.population || 0);
                result.poiCount += 1;
                regionMil += (poi.military_strength || 0);
                regionEco += (poi.economic_value || 0);

                result.pois.push({
                    id: poi.id,
                    name: poi.name,
                    type: poi.type,
                    description: poi.description,
                    military_strength: poi.military_strength || 0,
                    economic_value: poi.economic_value || 0,
                    political_influence: poi.political_influence || 0,
                    population: poi.population || 0,
                    regionId: region.id,
                    regionName: region.name.replace(' (Full)', '')
                });
            }
        });

        // Check if faction is active in this region (has at least 1 POI)
        if (regionCounts[factionKey] > 0) {
            result.activeRegions += 1;
            
            const sorted = Object.entries(regionCounts).sort((a, b) => b[1] - a[1]);
            const runnerUp = sorted.length > 1 ? sorted[1][1] : 0;
            
            result.regions.push({
                id: region.id,
                name: region.name.replace(' (Full)', ''),
                military: regionMil,
                economic: regionEco,
                poiCount: regionCounts[factionKey],
                isContested: (sorted[0][1] - runnerUp) <= 2 && region.pointsOfInterest.length > 5
            });
        }

        // Check if faction controls region (legacy stat kept for compatibility)
        const sorted = Object.entries(regionCounts).sort((a, b) => b[1] - a[1]);
        if (sorted.length > 0) {
            const candidate = sorted[0][0];
            const count = sorted[0][1];
            
            if (candidate === factionKey && candidate !== 'unaligned' && count > 35) {
                result.controlledRegions += 1;
            }
        }
    });

    result.pois.sort((a, b) => (b.military_strength + b.economic_value) - (a.military_strength + a.economic_value));
    result.regions.sort((a, b) => (b.military + b.economic) - (a.military + a.economic));

    return result;
}

/**
 * Get detailed stats for a specific region
 */
export function getDetailedRegionStats(regionId) {
    const region = MAP_DATA[regionId];
    if (!region || !region.pointsOfInterest) return null;

    const factionPresence = {};
    let militarySum = 0;
    let economicSum = 0;
    let politicalSum = 0;
    let populationSum = 0;
    const pois = [];

    region.pointsOfInterest.forEach(poi => {
        const sysId = toSystemId(poi.factionId);

        factionPresence[sysId] = (factionPresence[sysId] || 0) + 1;
        militarySum += (poi.military_strength || 0);
        economicSum += (poi.economic_value || 0);
        politicalSum += (poi.political_influence || 0);
        populationSum += (poi.population || 0);

        pois.push({
            id: poi.id,
            name: poi.name,
            type: poi.type,
            description: poi.description,
            factionId: sysId,
            military_strength: poi.military_strength || 0,
            economic_value: poi.economic_value || 0,
            political_influence: poi.political_influence || 0,
            population: poi.population || 0
        });
    });

    const sorted = Object.entries(factionPresence).sort((a, b) => b[1] - a[1]);
    let controller = 'unaligned';
    let isContested = false;

    if (sorted.length > 0) {
        const candidate = sorted[0][0];
        const count = sorted[0][1];
        
        if (candidate !== 'unaligned' && count > 35) {
            controller = candidate;
        }
        
        if (sorted.length > 1) {
            isContested = (sorted[0][1] - sorted[1][1]) <= 2 && pois.length > 5;
        }
    }

    pois.sort((a, b) => (b.military_strength + b.economic_value) - (a.military_strength + a.economic_value));

    return {
        id: region.id,
        name: region.name.replace(' (Full)', ''),
        type: 'Region',
        controller,
        isContested,
        militarySum,
        economicSum,
        politicalSum,
        populationSum,
        poiCount: pois.length,
        totalValue: militarySum + economicSum,
        factionPresence,
        pois
    };
}

/**
 * Render the analytics modal
 */
export function renderAnalyticsModal() {
    const stats = getRealTimeMapStats();
    const allFactions = getAllFactions();

    const sortedFactions = Object.values(stats.global)
        .filter(f => f.id !== 'unaligned' && (f.military > 0 || f.economic > 0 || f.poiCount > 0))
        .sort((a, b) => b.military - a.military);

    const maxMil = Math.max(...sortedFactions.map(f => f.military), 1);

    return `
        <div class="faction-modal-overlay analytics-overlay">
            <div class="faction-modal" style="max-width: 800px;">
                <button class="modal-close" onclick="this.closest('.analytics-overlay').remove()">✕</button>
                
                <div class="modal-header" style="border-bottom-color: #ffd700;">
                    <div class="modal-icon" style="background: #ffd700;">📊</div>
                    <div class="modal-title-block">
                        <h2>Multiverse Power Report</h2>
                        <p class="modal-subtitle">Analysis of ${stats.regions.length} regions · ${sortedFactions.length} active factions</p>
                    </div>
                </div>

                <div class="modal-body">
                    <div class="modal-section">
                        <h4>⚔️ Global Military Power Distribution</h4>
                        <div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; max-height: 400px; overflow-y: auto;">
                            ${sortedFactions.map(f => {
                                const def = allFactions[f.id] || getFaction(f.id);
                                const percent = (f.military / maxMil) * 100;
                                const isAuto = def.isAutoGenerated ? ' (Auto)' : '';
                                return `
                                    <div style="display: flex; align-items: center; margin-bottom: 8px;">
                                        <div style="width: 150px; font-size: 0.8rem; color: ${def.color}; font-weight: bold; display: flex; align-items: center; gap: 6px;">
                                            <span>${def.icon}</span>
                                            <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${def.shortName || def.name}${isAuto}</span>
                                        </div>
                                        <div style="flex: 1; background: rgba(255,255,255,0.1); height: 12px; border-radius: 4px; overflow: hidden;">
                                            <div style="width: ${percent}%; background: ${def.color}; height: 100%;"></div>
                                        </div>
                                        <span style="font-size: 0.8rem; color: #fff; width: 50px; text-align: right; margin-left: 10px;">${f.military}</span>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>

                    <div class="modal-section">
                        <h4>🌍 Regional Presence</h4>
                        <div style="max-height: 300px; overflow-y: auto;">
                            <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                                <tr style="background: rgba(255,255,255,0.05); position: sticky; top: 0;">
                                    <th style="padding: 10px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1);">Faction</th>
                                    <th style="padding: 10px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">Active Regions</th>
                                    <th style="padding: 10px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">Military</th>
                                    <th style="padding: 10px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">Economy</th>
                                    <th style="padding: 10px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">POIs</th>
                                </tr>
                                ${sortedFactions.map(f => {
                                    const def = allFactions[f.id] || getFaction(f.id);
                                    return `
                                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                        <td style="padding: 10px; color: ${def.color};">
                                            ${def.icon} ${def.shortName || def.name}
                                            ${def.isAutoGenerated ? '<span style="font-size:0.6rem; color:#666;"> (auto)</span>' : ''}
                                        </td>
                                        <td style="padding: 10px; text-align: center;">${f.activeRegions || 0}</td>
                                        <td style="padding: 10px; text-align: center; color: #ef4444;">${f.military}</td>
                                        <td style="padding: 10px; text-align: center; color: #fbbf24;">${f.economic}</td>
                                        <td style="padding: 10px; text-align: center;">${f.poiCount}</td>
                                    </tr>`;
                                }).join('')}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}