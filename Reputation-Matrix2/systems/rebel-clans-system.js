// This module handles the rendering and interaction for the Rebel Clans' unique system.

import { LORE_DATA } from '../lore.js';
import { getIntelForFaction } from './common.js';
import { state } from '../state.js';

export function renderRebelClansSystem() {
    const data = LORE_DATA.faction_details.rebel_clans;
    const intel = getIntelForFaction('rebel_clans');
    const isDebug = state.debugMode;

    const alliesHTML = data.relations.allies.map(key => `<li>${LORE_DATA.factions[key]?.name || key}</li>`).join('');
    const enemiesHTML = data.relations.enemies.map(key => `<li>${LORE_DATA.factions[key]?.name || key}</li>`).join('');

    const plotsHTML = data.assassination_plots.map(plot => {
        const target = (intel >= plot.intel_required.target || isDebug) ? `${plot.target} <span class="plot-title">(${plot.target_title})</span>` : '<span class="redacted">[REDACTED]</span>';
        const method = (intel >= plot.intel_required.method || isDebug) ? plot.method : '<span class="redacted">Covert Action</span>';
        const status = (intel >= plot.intel_required.status || isDebug) ? plot.status : 'Unknown';

        return `
            <div class="plot-card">
                <div class="plot-pin"></div>
                <h6>Target: ${target}</h6>
                <p><strong>Rationale:</strong> ${plot.rationale}</p>
                <p><strong>Method:</strong> ${method}</p>
                <p><strong>Status:</strong> ${status}</p>
            </div>
        `;
    }).join('');

    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content rebel-clans-system">
            <div class="war-council-lists">
                <div class="council-list allies">
                    <h5><img src="icon_reputation.png"> Known Allies</h5>
                    <ul>${alliesHTML}</ul>
                </div>
                <div class="council-list enemies">
                    <h5><img src="icon_focus.png"> Primary Enemies</h5>
                    <ul>${enemiesHTML}</ul>
                </div>
            </div>
            <div class="assassination-board">
                <h5>Assassination Plots</h5>
                <div class="plot-grid">
                    ${plotsHTML}
                </div>
            </div>
        </div>
    `;
}

export function initRebelClansSystem() {
    // No complex JS needed for this system currently, as it's a static display based on intel.
    // Event listeners for tooltips or interactions would go here.
}
