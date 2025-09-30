// This module handles the rendering and interaction for the Rakasha Clans' unique system.

import { LORE_DATA } from '../lore.js';
import { getIntelForFaction } from './common.js';
import { state } from '../state.js';

export function renderRakashaClansSystem() {
    const data = LORE_DATA.faction_details.rakasha_clans;

    const sigilsHTML = data.clans.map(clan => `
        <div class="rakasha-clan-sigil" data-clan-id="${clan.id}">
            <img src="${clan.sigil}" alt="${clan.name} Sigil" title="${clan.name}">
        </div>
    `).join('');

    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content rakasha-clan-system">
            <div class="rakasha-totem-pole">
                ${sigilsHTML}
            </div>
            <div id="rakasha-info-panel" class="rakasha-info-panel">
                <p>Hover over a clan sigil to learn what is known.</p>
            </div>
        </div>
    `;
}

export function initRakashaClansSystem() {
    const container = document.querySelector('.rakasha-clan-system');
    const infoPanel = document.getElementById('rakasha-info-panel');
    if (!container || !infoPanel) return;

    const intel = getIntelForFaction('rakasha_clans');
    const isDebug = state.debugMode;

    container.addEventListener('mouseover', e => {
        const sigil = e.target.closest('.rakasha-clan-sigil');
        if (sigil) {
            const clanId = sigil.dataset.clanId;
            const clanData = LORE_DATA.faction_details.rakasha_clans.clans.find(c => c.id === clanId);
            if (!clanData) return;
            
            let membersHTML = '<p class="intel-locked">Member identities are unknown.</p>';
            if (intel >= 50 || isDebug) {
                membersHTML = '<h6>Known Members:</h6><ul>';
                clanData.members.forEach(member => {
                    let nameToShow = member.public_name;
                    if (intel >= 90 || isDebug) {
                        nameToShow = `${member.true_name} <span class="rakasha-public-name">(${member.public_name})</span>`;
                    }
                    membersHTML += `<li><strong>${nameToShow}:</strong> ${member.role}</li>`;
                });
                membersHTML += '</ul>';
            }

            infoPanel.innerHTML = `
                <h4>${clanData.name}</h4>
                <div class="rakasha-philosophy">
                    <h5>${clanData.philosophy}</h5>
                    <p>${clanData.philosophy_desc}</p>
                </div>
                <div class="rakasha-members">
                    ${membersHTML}
                </div>
            `;
        }
    });

    container.addEventListener('mouseout', () => {
        infoPanel.innerHTML = '<p>Hover over a clan sigil to learn what is known.</p>';
    });
}
