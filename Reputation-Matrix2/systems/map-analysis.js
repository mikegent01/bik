// map-analysis.js

import { MDATA_F } from '../map-data.js';

const FACTION_MAP = {
    'mushroom_regency': 'regency',
    'peach_loyalists': 'loyalists',
    'fawfuls_furious_freaks': 'fawful',
    'koopa_troop': 'warlords',
    'toad_gang': 'criminals',
    'freelancer_underworld': 'criminals',
    'iron_legion': 'iron_legion',
    'onyx_hand': 'onyx_hand',
    'wario_land': 'wario',
    'yoshi_clans': 'yoshis',
    'dk_crew': 'dk_crew',
    'beanbean_kingdom': 'beanbean',
    'regal_empire': 'regal_empire',
    'silver_flame': 'silver_flame',
    'mages_guild': 'mages_guild',
    'unaligned': 'unaligned'
};

const SYSTEM_IDS = [
    'regency', 'loyalists', 'fawful', 'warlords', 'criminals',
    'iron_legion', 'onyx_hand', 'wario', 'yoshis', 'dk_crew',
    'beanbean', 'regal_empire', 'silver_flame', 'mages_guild', 'unaligned'
];

const SKIP_REGIONS = ['mushroom_kingdom_full'];

/**
 * Get detailed stats for a specific faction including all POIs
 */
export function getDetailedFactionStats(factionKey) {
    const result = {
        military: 0,
        economic: 0,
        political: 0,
        population: 0,
        poiCount: 0,
        controlledRegions: 0,
        regions: [],
        pois: []
    };

    const processedRegions = new Set();

    Object.values(MDATA_F).forEach(region => {
        if (SKIP_REGIONS.includes(region.id)) return;
        if (!region.pointsOfInterest || region.pointsOfInterest.length === 0) return;

        let regionBelongsToFaction = false;
        let regionMilitary = 0;
        let regionEconomic = 0;
        const regionCounts = {};

        region.pointsOfInterest.forEach(poi => {
            const rawId = poi.factionId || 'unaligned';
            const sysId = FACTION_MAP[rawId] || 'unaligned';

            regionCounts[sysId] = (regionCounts[sysId] || 0) + 1;

            if (sysId === factionKey) {
                result.military += (poi.military_strength || 0);
                result.economic += (poi.economic_value || 0);
                result.political += (poi.political_influence || 0);
                result.population += (poi.population || 0);
                result.poiCount += 1;
                
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
                    regionName: region.name
                });

                regionMilitary += (poi.military_strength || 0);
                regionEconomic += (poi.economic_value || 0);
            }
        });

        // Determine region controller
        const sortedFactions = Object.entries(regionCounts).sort((a, b) => b[1] - a[1]);
        if (sortedFactions.length > 0 && sortedFactions[0][0] === factionKey) {
            if (!processedRegions.has(region.id)) {
                result.controlledRegions += 1;
                const runnerUp = sortedFactions[1] ? sortedFactions[1][1] : 0;
                const isContested = sortedFactions[0][1] - runnerUp <= 1 && region.pointsOfInterest.length > 2;
                
                result.regions.push({
                    id: region.id,
                    name: region.name,
                    military: regionMilitary,
                    economic: regionEconomic,
                    poiCount: sortedFactions[0][1],
                    isContested: isContested
                });
                processedRegions.add(region.id);
            }
        }
    });

    // Sort POIs by total value
    result.pois.sort((a, b) => 
        (b.military_strength + b.economic_value) - (a.military_strength + a.economic_value)
    );

    // Sort regions by total value
    result.regions.sort((a, b) => 
        (b.military + b.economic) - (a.military + a.economic)
    );

    return result;
}

/**
 * Get detailed stats for a specific region including all POIs
 */
export function getDetailedRegionStats(regionId) {
    const region = MDATA_F[regionId];
    if (!region || !region.pointsOfInterest) return null;

    const factionPresence = {};
    let militarySum = 0;
    let economicSum = 0;
    let politicalSum = 0;
    let populationSum = 0;
    const pois = [];

    region.pointsOfInterest.forEach(poi => {
        const rawId = poi.factionId || 'unaligned';
        const sysId = FACTION_MAP[rawId] || 'unaligned';

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

    // Determine controller
    const sortedFactions = Object.entries(factionPresence).sort((a, b) => b[1] - a[1]);
    let controller = 'unaligned';
    let isContested = false;

    if (sortedFactions.length > 0) {
        controller = sortedFactions[0][0];
        if (sortedFactions.length > 1) {
            const runnerUp = sortedFactions[1][1];
            isContested = (sortedFactions[0][1] - runnerUp) <= 1 && pois.length > 2;
        }
    }

    // Sort POIs by value
    pois.sort((a, b) => 
        (b.military_strength + b.economic_value) - (a.military_strength + a.economic_value)
    );

    return {
        id: region.id,
        name: region.name,
        type: determineRegionType(region.id),
        controller: controller,
        isContested: isContested,
        militarySum: militarySum,
        economicSum: economicSum,
        politicalSum: politicalSum,
        populationSum: populationSum,
        poiCount: pois.length,
        totalValue: militarySum + economicSum,
        factionPresence: factionPresence,
        pois: pois
    };
}
/**
 * CORE ANALYTICS ENGINE
 */
export function getRealTimeMapStats() {
    const stats = {
        global: {},
        regions: []
    };

    // Initialize Global Counters
    SYSTEM_IDS.forEach(sysId => {
        stats.global[sysId] = {
            id: sysId,
            military: 0,
            economic: 0,
            poiCount: 0,
            controlledRegions: 0
        };
    });

    // Iterate over every Region in MDATA_F
    Object.values(MDATA_F).forEach(region => {
        // Skip combined/aggregate regions
        if (SKIP_REGIONS.includes(region.id)) return;
        
        // Skip if no POIs
        if (!region.pointsOfInterest || region.pointsOfInterest.length === 0) return;

        const regionCounts = {};
        let regionMil = 0;
        let regionEco = 0;

        // Process POIs
        region.pointsOfInterest.forEach(poi => {
            const rawId = poi.factionId || 'unaligned';
            const sysId = FACTION_MAP[rawId] || 'unaligned';

            // Global Totals
            if (stats.global[sysId]) {
                stats.global[sysId].military += (poi.military_strength || 0);
                stats.global[sysId].economic += (poi.economic_value || 0);
                stats.global[sysId].poiCount += 1;
                // Local count for dominance
                regionCounts[sysId] = (regionCounts[sysId] || 0) + 1;
            }

            regionMil += (poi.military_strength || 0);
            regionEco += (poi.economic_value || 0);
        });

        // Determine Controller
        let controller = 'unaligned';
        let maxCount = 0;
        let runnerUpCount = 0;

        const sortedFactions = Object.entries(regionCounts).sort((a, b) => b[1] - a[1]);

        if (sortedFactions.length > 0) {
            controller = sortedFactions[0][0];
            maxCount = sortedFactions[0][1];
            if (sortedFactions.length > 1) {
                runnerUpCount = sortedFactions[1][1];
            }
        }

        if (controller !== 'unaligned' && stats.global[controller]) {
            stats.global[controller].controlledRegions += 1;
        }

        // Contest logic: Top 2 are close, and total POIs > 2
        const isContested = (
            maxCount > 0 && 
            runnerUpCount > 0 &&
            (maxCount - runnerUpCount) <= 1 && 
            region.pointsOfInterest.length > 2
        );

        stats.regions.push({
            id: region.id,
            name: region.name,
            type: determineRegionType(region.id),
            controller: controller,
            isContested: isContested,
            totalValue: regionMil + regionEco,
            militarySum: regionMil,
            economicSum: regionEco,
            poiCount: region.pointsOfInterest.length
        });
    });

    return stats;
}

function determineRegionType(id) {
    if (id.includes('castle') || id.includes('fort')) return 'Fortress';
    if (id.includes('town') || id.includes('city')) return 'Urban';
    if (id.includes('wood') || id.includes('forest')) return 'Wilderness';
    if (id.includes('desert') || id.includes('volcano')) return 'Wasteland';
    if (id.includes('sea') || id.includes('isle') || id.includes('island')) return 'Maritime';
    return 'Territory';
}

/**
 * Gets a curated list for the sidebar.
 */
export function getCuratedTerritoryList() {
    const stats = getRealTimeMapStats();
    const displayList = [];
    const processedIds = new Set();

    // Find best region for each active faction
    SYSTEM_IDS.forEach(factionId => {
        if (factionId === 'unaligned') return;

        const factionRegions = stats.regions
            .filter(r => r.controller === factionId)
            .sort((a, b) => b.totalValue - a.totalValue);

        if (factionRegions.length > 0) {
            const bestRegion = factionRegions[0];
            displayList.push({ ...bestRegion, label: 'Stronghold' });
            processedIds.add(bestRegion.id);
        }
    });

    // Add Hotspots (contested regions)
    const contestedRegions = stats.regions
        .filter(r => r.isContested && !processedIds.has(r.id))
        .sort((a, b) => b.totalValue - a.totalValue)
        .slice(0, 4);

    contestedRegions.forEach(r => {
        displayList.push({ ...r, label: 'Hotspot', isContested: true });
    });

    // If we still have few entries, add highest-value unprocessed regions
    if (displayList.length < 8) {
        const remaining = stats.regions
            .filter(r => !processedIds.has(r.id) && !r.isContested && r.poiCount > 0)
            .sort((a, b) => b.totalValue - a.totalValue)
            .slice(0, 8 - displayList.length);
        
        remaining.forEach(r => {
            displayList.push({ ...r, label: 'Territory' });
        });
    }

    return displayList.sort((a, b) => b.totalValue - a.totalValue);
}

/**
 * Renders the Analytics Modal
 */
export function renderAnalyticsModal(factionsConfig) {
    const stats = getRealTimeMapStats();

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
                        <h2>Kingdom Intel Report</h2>
                        <p class="modal-subtitle">Live analysis of ${stats.regions.length} regions</p>
                    </div>
                </div>

                <div class="modal-body">
                    <div class="modal-section">
                        <h4>⚔️ Military Power Distribution</h4>
                        <div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px;">
                            ${sortedFactions.map(f => {
                                const factionDef = factionsConfig ? factionsConfig[f.id] : null;
                                if (!factionDef) return '';
                                const percent = (f.military / maxMil) * 100;
                                return `
                                    <div style="display: flex; align-items: center; margin-bottom: 8px;">
                                        <div style="width: 140px; font-size: 0.8rem; color: ${factionDef.color}; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                            ${factionDef.icon} ${factionDef.name}
                                        </div>
                                        <div style="flex: 1; background: rgba(255,255,255,0.1); height: 12px; border-radius: 4px; overflow: hidden;">
                                            <div style="width: ${percent}%; background: ${factionDef.color}; height: 100%;"></div>
                                        </div>
                                        <span style="font-size: 0.8rem; color: #fff; width: 40px; text-align: right; margin-left: 10px;">${f.military}</span>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>

                    <div class="modal-section">
                        <h4>🌍 Regional Control</h4>
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                            <tr style="background: rgba(255,255,255,0.05); text-align: left;">
                                <th style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Faction</th>
                                <th style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Regions</th>
                                <th style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Economy</th>
                                <th style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">POIs</th>
                            </tr>
                            ${sortedFactions.map(f => {
                                const factionDef = factionsConfig ? factionsConfig[f.id] : null;
                                if (!factionDef) return '';
                                return `
                                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                    <td style="padding: 10px; color: ${factionDef.color};">${factionDef.icon} ${factionDef.name}</td>
                                    <td style="padding: 10px;">${f.controlledRegions}</td>
                                    <td style="padding: 10px; color: #ffd700;">${f.economic}</td>
                                    <td style="padding: 10px;">${f.poiCount}</td>
                                </tr>`;
                            }).join('')}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}