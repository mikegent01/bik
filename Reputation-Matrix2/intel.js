import { state, loadState } from './state.js';
import { LORE_DATA } from './lore.js';
import { getDetailedFactionAssessment } from './reputation.js';
import { playSound } from './common.js';
import { getIntelForFaction } from './systems/common.js';

const selectorContainer = document.getElementById('character-selector-container');
const dossierContainer = document.getElementById('dossier-display-container');

// Define the four main characters to always be available on this page.
const MAIN_CHARACTERS = ['archie', 'markop', 'humpik', 'bowser', 'remi'];
let activeCharacterKey = state.loggedInUser !== 'generic' && MAIN_CHARACTERS.includes(state.loggedInUser) ? state.loggedInUser : 'archie';

function init() {
    loadState(); // Ensure we have the latest data
    renderCharacterSelector();
    renderDossier(activeCharacterKey);
    setupEventListeners();
}

function renderCharacterSelector() {
    selectorContainer.innerHTML = MAIN_CHARACTERS.map(charKey => {
        const character = LORE_DATA.characters[charKey];
        return `<button class="char-select-btn ${charKey === activeCharacterKey ? 'active' : ''}" data-char-key="${charKey}">${character.name}</button>`;
    }).join('');
}

function renderDossier(characterKey) {
    activeCharacterKey = characterKey;
    const character = LORE_DATA.characters[characterKey];
    if (!character) {
        dossierContainer.innerHTML = `<p class="dossier-placeholder">Character data not found.</p>`;
        return;
    }

    const isDebug = state.debugMode;

    const factionsHTML = Object.keys(LORE_DATA.factions)
        .sort((a,b) => LORE_DATA.factions[a].name.localeCompare(LORE_DATA.factions[b].name))
        .map(factionKey => {
            const intel = getIntelForFaction(factionKey);
            if (intel === 0 && !isDebug) {
                return `
                    <div class="dossier-case-file classified">
                        <div class="classified-stamp">CLASSIFIED</div>
                        <p class="classified-text">INSUFFICIENT INTEL</p>
                    </div>
                `;
            }

            const faction = LORE_DATA.factions[factionKey];
            const reputation = state.finalReputations[characterKey].reputation[factionKey];
            const notoriety = state.finalReputations[characterKey].notoriety[factionKey];
            const assessment = getDetailedFactionAssessment(factionKey, characterKey, reputation, notoriety);

            let contactsHTML = '<li>No known contacts.</li>';
            if ((intel >= 30 || isDebug) && faction.notable_people && faction.notable_people.length > 0) {
                contactsHTML = faction.notable_people.map(person => `<li><strong>${person.name}</strong> (${person.role})</li>`).join('');
            }

            const relevantRumors = LORE_DATA.rumors.filter(rumor =>
                state.activeRumors.includes(rumor.id) &&
                rumor.effects[factionKey] &&
                (rumor.targets.includes(characterKey) || (rumor.targets.includes('party') && state.party.includes(characterKey)))
            );

            let activityHTML = '<li>No recent activity affecting this relationship.</li>';
            if(relevantRumors.length > 0) {
                activityHTML = relevantRumors.map(rumor => `<li>Event: "${rumor.title}" (Reputation ${rumor.effects[factionKey] > 0 ? '+' : ''}${rumor.effects[factionKey]})</li>`).join('');
            }

            return `
                <div class="dossier-case-file">
                    <div class="dossier-file-header">
                        <img src="${faction.logo}" alt="${faction.name} Logo">
                        <h4>${faction.name}</h4>
                    </div>
                    <div class="dossier-section">
                        <h5>Assessment (Rep: ${reputation} / Notoriety: ${notoriety})</h5>
                        <p>${assessment}</p>
                    </div>
                    <div class="dossier-section">
                        <h5>Key Contacts/Targets</h5>
                        <ul>${contactsHTML}</ul>
                    </div>
                    <div class="dossier-section">
                        <h5>Recent Activity Log</h5>
                        <ul>${activityHTML}</ul>
                    </div>
                </div>
            `;

        }).join('');

    dossierContainer.innerHTML = `
        <div class="dossier-header">
            <h3>Intel Dossier: ${character.name}</h3>
            <p>A summary of personal relationships and known intelligence on major world factions.</p>
        </div>
        <div id="faction-dossier-grid">
            ${factionsHTML}
        </div>
    `;
}

function setupEventListeners() {
    selectorContainer.addEventListener('click', e => {
        const button = e.target.closest('.char-select-btn');
        if (button && !button.classList.contains('active')) {
            playSound('click.mp3');
            const charKey = button.dataset.charKey;
            activeCharacterKey = charKey;
            // Update active state on buttons
            selectorContainer.querySelectorAll('.char-select-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.charKey === charKey);
            });
            renderDossier(charKey);
        }
    });
}

// Initial call
if (document.getElementById('intel-layout')) {
    init();
}
