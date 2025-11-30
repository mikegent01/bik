// map-analysis.js
import { MAP_DATA } from './map-data.js'; 
import { CIVIL_WAR_FACTIONS } from './mushroom-kingdom-system.js';

// 1. FACTION ID MAPPING
const FACTION_MAP = {
    'mushroom_regency': 'regency',
    'peach_loyalists': 'loyalists',
    'fawfuls_furious_freaks': 'fawful',
    'koopa_troop': 'warlords',
    'toad_gang': 'criminals',
    'freelancer_underworld': 'criminals',
    'liberated_toads': 'liberated_toads',
    'unaligned': 'unaligned'
};

/**
 * Calculates real-time stats from MAP_DATA.
 */
export function getRealTimeMapStats() {
    const stats = {
        global: {},
        regions: []
    };

    // Initialize Global Counters
    Object.keys(CIVIL_WAR_FACTIONS).forEach(sysId => {
        stats.global[sysId] = {
            id: sysId,
            name: CIVIL_WAR_FACTIONS[sysId].name,
            military: 0,
            economic: 0,
            poiCount: 0,
            controlledRegions: 0
        };
    });

    // Iterate over every Region
    Object.values(MAP_DATA).forEach(region => {
        if (!region.pointsOfInterest) return;

        const regionCounts = {};
        
        // Process POIs
        region.pointsOfInterest.forEach(poi => {
            const rawId = poi.factionId || 'unaligned';
            const sysId = FACTION_MAP[rawId]; 

            if (sysId && stats.global[sysId]) {
                stats.global[sysId].military += (poi.military_strength || 0);
                stats.global[sysId].economic += (poi.economic_value || 0);
                stats.global[sysId].poiCount += 1;
                regionCounts[sysId] = (regionCounts[sysId] || 0) + 1;
            }
        });

        // Determine Region Controller
        let controller = 'unaligned';
        let maxCount = 0;

        Object.entries(regionCounts).forEach(([fid, count]) => {
            if (count > maxCount) {
                maxCount = count;
                controller = fid;
            }
        });

        if (controller !== 'unaligned' && stats.global[controller]) {
            stats.global[controller].controlledRegions += 1;
        }

        stats.regions.push({
            id: region.id,
            name: region.name,
            controller: controller,
            poiCount: region.pointsOfInterest.length,
            militarySum: region.pointsOfInterest.reduce((acc, p) => acc + (p.military_strength || 0), 0),
            economicSum: region.pointsOfInterest.reduce((acc, p) => acc + (p.economic_value || 0), 0)
        });
    });

    return stats;
}

/**
 * Renders the Analytics Modal HTML - NOW MATCHING CSS
 */
export function renderAnalyticsModal() {
    const stats = getRealTimeMapStats();
    const sortedFactions = Object.values(stats.global).sort((a, b) => b.military - a.military);
    const richestRegions = [...stats.regions].sort((a, b) => b.economicSum - a.economicSum).slice(0, 5);

    return `
        <div class="faction-modal-overlay analytics-overlay">
            <div class="faction-modal">
                <button class="modal-close" onclick="document.querySelector('.analytics-overlay').remove()">✕</button>
                
                <div class="modal-header" style="border-bottom-color: #ffd700;">
                    <div class="modal-icon" style="background: #ffd700;">📊</div>
                    <div class="modal-title-block">
                        <h2>Kingdom Intel Report</h2>
                        <p class="modal-subtitle">Live data aggregated from ${stats.regions.length} map files</p>
                    </div>
                </div>

                <div class="modal-body" style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px;">
                    
                    <div class="modal-section" style="grid-column: 1 / -1;">
                        <h4>⚔️ Global Power Analysis</h4>
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                            <tr style="background: rgba(255,255,255,0.05); text-align: left;">
                                <th style="padding: 12px; border-bottom: 1px solid var(--border-color);">Faction</th>
                                <th style="padding: 12px; border-bottom: 1px solid var(--border-color);">Regions</th>
                                <th style="padding: 12px; border-bottom: 1px solid var(--border-color);">Military</th>
                                <th style="padding: 12px; border-bottom: 1px solid var(--border-color);">Economy</th>
                            </tr>
                            ${sortedFactions.map(f => {
                                const factionDef = CIVIL_WAR_FACTIONS[f.id];
                                if (!factionDef) return '';
                                return `
                                <tr style="border-bottom: 1px solid var(--border-color);">
                                    <td style="padding: 12px; color: ${factionDef.color}; font-weight: bold;">
                                        ${factionDef.icon} ${factionDef.name}
                                    </td>
                                    <td style="padding: 12px;">${f.controlledRegions}</td>
                                    <td style="padding: 12px;">${f.military}</td>
                                    <td style="padding: 12px;">${f.economic}</td>
                                </tr>`;
                            }).join('')}
                        </table>
                    </div>

                    <div class="modal-section">
                        <h4>💰 Richest Regions</h4>
                        <ul class="rumors-list">
                            ${richestRegions.map(r => `
                                <li class="rumor-item" style="display:flex; justify-content:space-between;">
                                    <span>${r.name}</span>
                                    <span style="color: #ffd700; font-weight:bold;">${r.economicSum} G</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="modal-section">
                        <h4>🛡️ Most Dangerous</h4>
                        <ul class="rumors-list">
                            ${[...stats.regions].sort((a,b) => b.militarySum - a.militarySum).slice(0, 5).map(r => `
                                <li class="rumor-item" style="display:flex; justify-content:space-between;">
                                    <span>${r.name}</span>
                                    <span style="color: #ff4444; font-weight:bold;">${r.militarySum} STR</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    `;
}