// map-analysis.js
import { MAP_DATA } from '../map-data.js'; // Ensure this path matches your project structure
import { CIVIL_WAR_FACTIONS } from './mushroom-kingdom-system.js';

// 1. MAPPING DICTIONARY
// Maps the IDs found in map-data files to the IDs used in mushroom-kingdom-system
const FACTION_ID_MAP = {
    'mushroom_regency': 'regency',
    'peach_loyalists': 'loyalists',
    'fawfuls_furious_freaks': 'fawful',
    'koopa_troop': 'warlords',
    'toad_gang': 'criminals',
    'freelancer_underworld': 'criminals', // Assuming freelance maps to criminals
    'liberated_toads': 'liberated_toads',
    'unaligned': 'unaligned'
};

/**
 * TALLIES UP DATA FROM ALL MAP FILES
 */
export function getRealTimeMapStats() {
    const stats = {
        global: {}, // Faction totals
        regions: [] // Regional breakdowns
    };

    // Initialize Faction Totals
    Object.keys(CIVIL_WAR_FACTIONS).forEach(sysId => {
        stats.global[sysId] = {
            id: sysId,
            name: CIVIL_WAR_FACTIONS[sysId].name,
            military: 0,
            economic: 0,
            political: 0,
            population: 0,
            poiCount: 0
        };
    });
    // Add Unaligned holder
    stats.global['unaligned'] = { id: 'unaligned', name: 'Neutral / Independent', military: 0, economic: 0, political: 0, population: 0, poiCount: 0 };

    // PROCESS MAP DATA
    Object.values(MAP_DATA).forEach(region => {
        if (!region.pointsOfInterest) return;

        const regionStat = {
            id: region.id,
            name: region.name,
            military: 0,
            economic: 0,
            population: 0,
            dominantFaction: 'unaligned'
        };

        const factionCounts = {};

        region.pointsOfInterest.forEach(poi => {
            // Normalize ID
            const rawId = poi.factionId || 'unaligned';
            const sysId = FACTION_ID_MAP[rawId] || 'unaligned';

            // 1. Update Global Totals
            if (stats.global[sysId]) {
                stats.global[sysId].military += (poi.military_strength || 0);
                stats.global[sysId].economic += (poi.economic_value || 0);
                stats.global[sysId].political += (poi.political_influence || 0);
                stats.global[sysId].population += (poi.population || 0);
                stats.global[sysId].poiCount++;
            }

            // 2. Update Regional Totals
            regionStat.military += (poi.military_strength || 0);
            regionStat.economic += (poi.economic_value || 0);
            regionStat.population += (poi.population || 0);

            // Track dominance
            factionCounts[sysId] = (factionCounts[sysId] || 0) + 1;
        });

        // Determine who owns the region based on POI count
        let max = 0;
        Object.entries(factionCounts).forEach(([fid, count]) => {
            if (count > max) {
                max = count;
                regionStat.dominantFaction = fid;
            }
        });

        stats.regions.push(regionStat);
    });

    return stats;
}

/**
 * GENERATES THE MODAL HTML
 */
export function renderAnalyticsModal() {
    const data = getRealTimeMapStats();
    
    // Sort factions by Military Strength
    const sortedFactions = Object.values(data.global)
        .filter(f => f.id !== 'unaligned')
        .sort((a, b) => b.military - a.military);

    // Sort regions by Economic Value
    const richestRegions = [...data.regions]
        .sort((a, b) => b.economic - a.economic)
        .slice(0, 5);

    return `
        <div class="faction-modal-overlay analytics-overlay">
            <div class="faction-modal" style="max-width: 900px;">
                <button class="modal-close" onclick="document.querySelector('.analytics-overlay').remove()">✕</button>
                
                <div class="modal-header" style="border-bottom-color: #ffd700;">
                    <div class="modal-icon" style="background: #ffd700;">📈</div>
                    <div class="modal-title-block">
                        <h2>Kingdom Analytics Report</h2>
                        <p class="modal-subtitle">Real-time data aggregated from ${data.regions.length} regions</p>
                    </div>
                </div>

                <div class="modal-body" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    
                    <!-- LEFT COL: FACTION BREAKDOWN -->
                    <div class="modal-section" style="grid-column: 1 / -1;">
                        <h4>⚔️ Military & Economic Power by Faction</h4>
                        <div style="overflow-x: auto;">
                            <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.9rem;">
                                <tr style="background: rgba(255,255,255,0.1); text-align: left;">
                                    <th style="padding: 8px;">Faction</th>
                                    <th style="padding: 8px;">POIs</th>
                                    <th style="padding: 8px;">Military</th>
                                    <th style="padding: 8px;">Economy</th>
                                    <th style="padding: 8px;">Population</th>
                                </tr>
                                ${sortedFactions.map(f => {
                                    const color = CIVIL_WAR_FACTIONS[f.id]?.color || '#fff';
                                    return `
                                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                        <td style="padding: 8px; color: ${color}; font-weight: bold;">${f.name}</td>
                                        <td style="padding: 8px;">${f.poiCount}</td>
                                        <td style="padding: 8px;">${f.military}</td>
                                        <td style="padding: 8px;">${f.economic}</td>
                                        <td style="padding: 8px;">${f.population.toLocaleString()}</td>
                                    </tr>`;
                                }).join('')}
                            </table>
                        </div>
                    </div>

                    <!-- RIGHT COL: REGION HIGHLIGHTS -->
                    <div class="modal-section">
                        <h4>💰 Richest Regions (Economic Value)</h4>
                        <ul class="rumors-list">
                            ${richestRegions.map(r => `
                                <li class="rumor-item" style="display:flex; justify-content:space-between;">
                                    <span>${r.name}</span>
                                    <span style="color: #ffd700;">${r.economic} G</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h4>🛡️ Most Militarized Regions</h4>
                        <ul class="rumors-list">
                            ${[...data.regions].sort((a,b) => b.military - a.military).slice(0,5).map(r => `
                                <li class="rumor-item" style="display:flex; justify-content:space-between;">
                                    <span>${r.name}</span>
                                    <span style="color: #ff4444;">${r.military} STR</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    `;
}