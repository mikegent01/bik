// This module renders the detailed Mushroom Kingdom Civil War component.

import { BOP_STATE } from '../balance-of-power.js';
import { getIntelForFaction } from './common.js';
import { state } from '../state.js';

/**
 * Redacts text if the user's intel level is below the required threshold.
 * @param {string} text The text to potentially redact.
 * @param {number} intel The user's current intel level.
 * @param {number} requiredIntel The intel level needed to see the text.
 * @returns {string} The original text or a redacted placeholder.
 */
function redact(text, intel, requiredIntel) {
    if (state.debugMode || intel >= requiredIntel) {
        return text;
    }
    return `<span class="redacted">[Intel ${requiredIntel} Required]</span>`;
}

/**
 * Renders the entire Mushroom Kingdom Civil War component based on intel.
 * @param {string} factionKey The key of the faction being viewed, used to determine intel level.
 * @returns {string} The HTML for the component.
 */
export function renderMushroomKingdomCivilWar(factionKey) {
    const intel = getIntelForFaction(factionKey);
    const data = BOP_STATE.mushroom_kingdom;

    if (intel < 25 && !state.debugMode) {
        return `
            <div class="civil-war-container intel-low">
                <h5>Mushroom Kingdom Conflict</h5>
                <p class="system-description">You have heard rumors of widespread instability and conflict within the Mushroom Kingdom, but lack the specific intelligence to understand the key players or the current situation.</p>
            </div>
        `;
    }

    const totalInfluence = Object.values(data.influence).reduce((a, b) => a + b, 0);

    const influenceBarHTML = `
        <div class="influence-bar-segment" style="width: ${data.influence.regency / totalInfluence * 100}%; background-color: var(--major-powers-color);" title="Regency Influence">${(intel >= 60 || state.debugMode) ? 'Regency' : ''}</div>
        <div class="influence-bar-segment" style="width: ${data.influence.loyalists / totalInfluence * 100}%; background-color: var(--accent-color);" title="Loyalist Influence">${(intel >= 60 || state.debugMode) ? 'Loyalists' : ''}</div>
        <div class="influence-bar-segment" style="width: ${data.influence.fawful / totalInfluence * 100}%; background-color: var(--positive-color);" title="Fawful's Influence">${(intel >= 60 || state.debugMode) ? 'Fawful' : ''}</div>
        <div class="influence-bar-segment" style="width: ${data.influence.warlords / totalInfluence * 100}%; background-color: var(--neutral-color);" title="Koopa Remnant Influence">${(intel >= 60 || state.debugMode) ? 'Warlords' : ''}</div>
        <div class="influence-bar-segment" style="width: ${data.influence.criminals / totalInfluence * 100}%; background-color: var(--underworld-fringe-color);" title="Criminal Underworld Influence">${(intel >= 60 || state.debugMode) ? 'Criminals' : ''}</div>
    `;

    const getPlansHTML = (leaderKey) => {
        if (!data.plans[leaderKey]) return '<p class="text-secondary" style="font-size: 0.8rem; text-align: center;">No active agenda detected.</p>';
        return data.plans[leaderKey].map(plan => {
            const active = data.active_plans.find(p => p.planId === plan.id);
            const planName = redact(plan.name, intel, 50);
            const planDesc = redact(plan.description, intel, 75);
            const planEffect = redact(plan.effect, intel, 90);

            return `
                <div class="plan-card ${active ? 'active-plan' : ''}">
                    <div class="plan-title">${planName}</div>
                    <div class="plan-details">
                        <p>${planDesc}</p>
                        <p class="plan-effect">${planEffect}</p>
                    </div>
                     <div class="plan-footer">
                        ${active ? `<strong>${redact(active.days + ' days remaining', intel, 65)}</strong>` : `(${plan.duration} days)`}
                    </div>
                </div>
            `;
        }).join('');
    };
    
    const leaderBlocks = {
        chancellor_toadsworth: "Chancellor Toadsworth (Regency)",
        captain_toadette: "Captain Toadette (Loyalists)",
        fawful: "Fawful (Castle Occupation)",
        kamek: "Kamek (Koopa Remnants)",
        skull_cap_murphy: "Skull-Cap Murphy (Toad Gang)",
    };

    const agendasHTML = (intel >= 40 || state.debugMode) ? `
        <div class="bop-plans-section">
            <h5>Leader Agendas</h5>
            <div class="leader-plans-grid">
                ${Object.entries(leaderBlocks).map(([key, name]) => `
                    <div class="leader-plans-block">
                        <h6>${name}</h6>
                        ${getPlansHTML(key)}
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '<p class="redacted" style="text-align:center; margin-top: 20px;">[Higher intel required to view leader agendas]</p>';

    return `
        <div class="civil-war-container">
            <h5>${data.title}</h5>
            <p class="system-description">${redact(data.description, intel, 30)}</p>
            <div class="civil-war-meter">
                <h6>Current Influence</h6>
                <div class="influence-bar-container">${influenceBarHTML}</div>
            </div>
            ${agendasHTML}
        </div>
    `;
}