import { LORE_DATA } from './lore.js';

function renderRumors() {
    const container = document.getElementById('rumors-container');
    if (!container) return;

    container.innerHTML = LORE_DATA.rumors.map(rumor => {
        const effectsHTML = Object.entries(rumor.effects).map(([factionKey, value]) => {
            const faction = LORE_DATA.factions[factionKey];
            if (!faction) return '';
            const changeClass = value > 0 ? 'positive' : 'negative';
            const sign = value > 0 ? '+' : '';
            return `<li>${faction.name}: <span class="${changeClass}">${sign}${value}</span></li>`;
        }).join('');

        return `
            <div class="rumor-card">
                <h3>${rumor.title}</h3>
                <p class="rumor-description">${rumor.description}</p>
                <div class="rumor-effects">
                    <h4>Reputation Effects:</h4>
                    <ul>${effectsHTML}</ul>
                </div>
            </div>
        `;
    }).join('');
}

function init() {
    renderRumors();
}

init();
