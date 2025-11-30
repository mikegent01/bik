// map-analysis.js

import { MDATA_F } from '../map-data.js';

// Faction ID Mapping
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
 * Core function to get all map statistics
 */
export function getRealTimeMapStats() {
    const stats = {
        global: {},
        regions: []
    };

    // Initialize global counters
    SYSTEM_IDS.forEach(sysId => {
        stats.global[sysId] = {
            id: sysId,
            military: 0,
            economic: 0,
            political: 0,
            population: 0,
            poiCount: 0,
            controlledRegions: 0
        };
    });

    // Process each region
    Object.values(MDATA_F).forEach(region => {
        if (SKIP_REGIONS.includes(region.id)) return;
        if (!region.pointsOfInterest || region.pointsOfInterest.length === 0) return;

        const regionCounts = {};
        let regionMil = 0;
        let regionEco = 0;
        let regionPol = 0;
        let regionPop = 0;

        // Process POIs
        region.pointsOfInterest.forEach(poi => {
            const rawId = poi.factionId || 'unaligned';
            const sysId = FACTION_MAP[rawId] || 'unaligned';

            if (stats.global[sysId]) {
                stats.global[sysId].military += (poi.military_strength || 0);
                stats.global[sysId].economic += (poi.economic_value || 0);
                stats.global[sysId].political += (poi.political_influence || 0);
                stats.global[sysId].population += (poi.population || 0);
                stats.global[sysId].poiCount += 1;
                
                regionCounts[sysId] = (regionCounts[sysId] || 0) + 1;
            }

            regionMil += (poi.military_strength || 0);
            regionEco += (poi.economic_value || 0);
            regionPol += (poi.political_influence || 0);
            regionPop += (poi.population || 0);
        });

        // Determine controller
        const sortedFactions = Object.entries(regionCounts).sort((a, b) => b[1] - a[1]);
        let controller = 'unaligned';
        let maxCount = 0;
        let runnerUpCount = 0;

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

function determineRegionType(id) {
    if (id.includes('castle') || id.includes('fort')) return 'Fortress';
    if (id.includes('town') || id.includes('city')) return 'Urban';
    if (id.includes('wood') || id.includes('forest')) return 'Wilderness';
    if (id.includes('desert') || id.includes('volcano')) return 'Wasteland';
    if (id.includes('sea') || id.includes('isle') || id.includes('island')) return 'Maritime';
    return 'Territory';
}

/**
 * Get curated territory list for sidebar
 */
export function getCuratedTerritoryList() {
    const stats = getRealTimeMapStats();
    const displayList = [];
    const processedIds = new Set();

    // Best region for each faction
    SYSTEM_IDS.forEach(factionId => {
        if (factionId === 'unaligned') return;

        const factionRegions = stats.regions
            .filter(r => r.controller === factionId)
            .sort((a, b) => b.totalValue - a.totalValue);

        if (factionRegions.length > 0) {
            const best = factionRegions[0];
            displayList.push({ ...best, label: 'Stronghold' });
            processedIds.add(best.id);
        }
    });

    // Add contested hotspots
    const contested = stats.regions
        .filter(r => r.isContested && !processedIds.has(r.id))
        .sort((a, b) => b.totalValue - a.totalValue)
        .slice(0, 4);

    contested.forEach(r => {
        displayList.push({ ...r, label: 'Hotspot', isContested: true });
        processedIds.add(r.id);
    });

    // Fill remaining slots
    if (displayList.length < 10) {
        const remaining = stats.regions
            .filter(r => !processedIds.has(r.id) && r.poiCount > 0)
            .sort((a, b) => b.totalValue - a.totalValue)
            .slice(0, 10 - displayList.length);

        remaining.forEach(r => {
            displayList.push({ ...r, label: 'Territory' });
        });
    }

    return displayList.sort((a, b) => b.totalValue - a.totalValue);
}

/**
 * Get detailed stats for a specific faction
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

    Object.values(MDATA_F).forEach(region => {
        if (SKIP_REGIONS.includes(region.id)) return;
        if (!region.pointsOfInterest) return;

        const regionCounts = {};
        let regionMil = 0;
        let regionEco = 0;

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
                    regionName: region.name
                });
            }
        });

        // Check if faction controls region
        const sorted = Object.entries(regionCounts).sort((a, b) => b[1] - a[1]);
        if (sorted.length > 0 && sorted[0][0] === factionKey) {
            result.controlledRegions += 1;
            const runnerUp = sorted[1] ? sorted[1][1] : 0;
            result.regions.push({
                id: region.id,
                name: region.name,
                military: regionMil,
                economic: regionEco,
                poiCount: sorted[0][1],
                isContested: (sorted[0][1] - runnerUp) <= 1 && region.pointsOfInterest.length > 2
            });
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

    const sorted = Object.entries(factionPresence).sort((a, b) => b[1] - a[1]);
    let controller = 'unaligned';
    let isContested = false;

    if (sorted.length > 0) {
        controller = sorted[0][0];
        if (sorted.length > 1) {
            isContested = (sorted[0][1] - sorted[1][1]) <= 1 && pois.length > 2;
        }
    }

    pois.sort((a, b) => (b.military_strength + b.economic_value) - (a.military_strength + a.economic_value));

    return {
        id: region.id,
        name: region.name,
        type: determineRegionType(region.id),
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
                        <p class="modal-subtitle">Analysis of ${stats.regions.length} regions</p>
                    </div>
                </div>

                <div class="modal-body">
                    <div class="modal-section">
                        <h4>⚔️ Military Power Distribution</h4>
                        <div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px;">
                            ${sortedFactions.map(f => {
                                const def = factionsConfig ? factionsConfig[f.id] : null;
                                if (!def) return '';
                                const percent = (f.military / maxMil) * 100;
                                return `
                                    <div style="display: flex; align-items: center; margin-bottom: 8px;">
                                        <div style="width: 140px; font-size: 0.8rem; color: ${def.color}; font-weight: bold;">
                                            ${def.icon} ${def.name}
                                        </div>
                                        <div style="flex: 1; background: rgba(255,255,255,0.1); height: 12px; border-radius: 4px; overflow: hidden;">
                                            <div style="width: ${percent}%; background: ${def.color}; height: 100%;"></div>
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
                            <tr style="background: rgba(255,255,255,0.05);">
                                <th style="padding: 10px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1);">Faction</th>
                                <th style="padding: 10px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1);">Regions</th>
                                <th style="padding: 10px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1);">Economy</th>
                                <th style="padding: 10px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1);">POIs</th>
                            </tr>
                            ${sortedFactions.map(f => {
                                const def = factionsConfig ? factionsConfig[f.id] : null;
                                if (!def) return '';
                                return `
                                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                    <td style="padding: 10px; color: ${def.color};">${def.icon} ${def.name}</td>
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