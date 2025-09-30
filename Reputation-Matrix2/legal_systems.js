import { LEGAL_DATA } from './legal_data.js';
import { LORE_DATA } from './lore.js';
import { playSound } from './common.js';

const codexContainer = document.getElementById('codex-container');

function renderTraditionCard(tradition) {
    const followersHTML = (tradition.followers || []).map(factionKey => {
        const faction = LORE_DATA.factions[factionKey];
        if (!faction) return '';
        return `<li class="follower-tag"><img src="${faction.logo}" alt="${faction.name} logo"> ${faction.name}</li>`;
    }).join('');

    return `
        <div class="tradition-card" id="tradition-${tradition.id}">
            <div class="tradition-card-header">
                <span class="tradition-icon">${tradition.icon}</span>
                <h3>${tradition.name}</h3>
            </div>
            <p class="tradition-description">${tradition.description}</p>
            <div class="tradition-followers">
                <h4>Primary Followers:</h4>
                <ul class="followers-list">
                    ${followersHTML || '<li>None</li>'}
                </ul>
            </div>
        </div>
    `;
}

function renderCodex() {
    if (!codexContainer) return;

    codexContainer.innerHTML = Object.entries(LEGAL_DATA.traditions).map(([categoryKey, traditions]) => {
        const categoryName = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
        const traditionCardsHTML = traditions.map(renderTraditionCard).join('');

        return `
            <section class="tradition-category-section">
                <h3 class="tradition-category-title">${categoryName} Traditions</h3>
                <div class="traditions-grid">
                    ${traditionCardsHTML}
                </div>
            </section>
        `;
    }).join('');
}

function init() {
    if (!codexContainer) return;
    renderCodex();
}

init();
