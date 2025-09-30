import { LORE_DATA } from './lore.js';
import { SPECIES_DATA } from './species-data.js';

const speciesContainer = document.getElementById('species-grid-container');

function renderSpecies() {
    if (!speciesContainer) return;

    // Create a map of species to factions
    const speciesToFactions = {};
    for (const speciesKey in SPECIES_DATA) {
        speciesToFactions[speciesKey] = [];
    }

    for (const factionKey in LORE_DATA.factions) {
        const faction = LORE_DATA.factions[factionKey];
        if (faction.primary_species) {
            faction.primary_species.forEach(speciesKey => {
                if (speciesToFactions[speciesKey]) {
                    speciesToFactions[speciesKey].push(faction);
                }
            });
        }
    }

    speciesContainer.innerHTML = Object.entries(SPECIES_DATA).map(([key, species]) => {
        const factions = speciesToFactions[key] || [];
        const factionTagsHTML = factions.length > 0
            ? factions.sort((a, b) => a.name.localeCompare(b.name)).map(faction => `
                <li class="faction-tag">
                    <img src="${faction.logo}" alt="${faction.name} logo">
                    ${faction.name}
                </li>
            `).join('')
            : '<li>None</li>';

        return `
            <div class="species-card" style="border-left: 5px solid ${species.color};">
                <div class="species-header">
                    <span class="species-icon">${species.icon}</span>
                    <h3 style="color: ${species.color};">${species.name}</h3>
                </div>
                <p class="species-description">${species.description}</p>
                <div class="species-factions">
                    <h4>Primary Factions:</h4>
                    <ul class="faction-tags-list">
                        ${factionTagsHTML}
                    </ul>
                </div>
            </div>
        `;
    }).join('');
}

function init() {
    if (!speciesContainer) return;
    renderSpecies();
}

init();