// This module contains a collection of simpler render functions for faction systems
// that do not require complex, separate initialization logic.

import { state } from '../state.js';
import { LORE_DATA, CHARACTER_RELATIONS } from '../lore.js';
import { buildDetailedSystemHTML } from './common.js';
import { IRON_LEGION_DETAILS } from '../iron-legion-details.js';
import { SILVER_FLAME_DETAILS } from '../silver-flame-details.js';
import { KOOPA_TROOP_DETAILS } from '../koopa-troop-details.js';

export function renderIronLegionDetailedSystem() {
    return buildDetailedSystemHTML(
        IRON_LEGION_DETAILS,
        "The Iron Legion is a well-oiled machine of conquest, with a rigid hierarchy and distinct operational doctrines for different territories. Explore their structure and methods below."
    );
}

export function renderSilverFlameEdictsSystem() {
    const data = SILVER_FLAME_DETAILS;
    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content silver-flame-edicts-system">
            <div class="edicts-section">
                <h6>Core Tenets of the Flame</h6>
                ${data.tenets.map(tenet => `
                    <div class="tenet-card">
                        <h6>${tenet.title}</h6>
                        <p>${tenet.text}</p>
                    </div>
                `).join('')}
            </div>
            <div class="edicts-section">
                <h6>Active Edicts</h6>
                ${data.active_edicts.map(edict => `
                    <div class="edict-card">
                        <h6>${edict.title}</h6>
                        <p>${edict.text}</p>
                        <span class="edict-status">Status: ${edict.status}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

export function renderKoopaTroopHierarchySystem() {
    const data = KOOPA_TROOP_DETAILS;
    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content koopa-troop-system">
            <div class="koopa-hierarchy">
                <h6>Chain of Command</h6>
                ${data.hierarchy.map(level => `
                    <div class="hierarchy-level">
                        <strong>${level.rank}: ${level.leader}</strong>
                        <span>Key Units: ${level.units}</span>
                    </div>
                `).join('')}
            </div>
            <div class="koopa-war-status">
                <h6>${data.civil_war_status.title}</h6>
                <p><strong>Commander on Site:</strong> ${data.civil_war_status.commander_on_site}</p>
                <p><strong>Objective:</strong> ${data.civil_war_status.current_objective}</p>
                <p>${data.civil_war_status.disposition}</p>
            </div>
        </div>
    `;
}

export function renderTurfWar(subFactions) {
    const totalInfluence = Object.values(subFactions).reduce((sum, sf) => sum + sf.influence, 0);
    return `
        <p class="system-description">Power in the Toad Gang is measured in street corners and controlled rackets. After Big T's fall, the radical Mushroom Skulls have seized the most influence, but other factions still control significant portions of the criminal enterprise.</p>
        <div class="system-content turf-war-bars">
             ${Object.values(subFactions).map(sf => `
                <div class="bar-item">
                    <div class="bar-label">
                        <span>${sf.name}</span>
                        <span>${sf.influence}%</span>
                    </div>
                    <div class="bar-container">
                        <div class="bar-fill" style="width: ${sf.influence / totalInfluence * 100}%;"></div>
                    </div>
                </div>
             `).join('')}
        </div>
    `;
}

/**
 * Renders the unique opinion list for the Liberated Toads with a modern card-based layout.
 */
export function renderLiberatedToads(factionKey, factionData, currentState) {
    const subFactions = factionData.internal_politics.sub_factions;

    // Additional metadata not present in the faction file
    const toadMetadata = {
        dan: { weapon: 'Longsword & Magic', portrait: 'toads/dan.png' },
        toad_lee: { weapon: 'Axe', portrait: 'toads/toad_lee.png' },
        eager: { weapon: 'Whip', portrait: 'toads/eager.png' },
        roger: { weapon: 'Gun', portrait: 'toads/roger.png' },
        ryan: { weapon: 'Spellcaster', portrait: 'toads/ryan.png' },
        bones: { weapon: 'Grotesque Resilience', portrait: 'toads/bones.png' },
        wallys_toad: { weapon: 'Deceit', portrait: 'toads/wallys_toad.png' }
    };

    const subFactionCardsHTML = Object.entries(subFactions).map(([subKey, subFaction]) => {
        const metadata = toadMetadata[subKey] || { weapon: 'Unknown', portrait: 'toads/unknown.png' };
        
        const playerOpinionsHTML = currentState.party.map(playerKey => {
            const relation = CHARACTER_RELATIONS[subKey]?.[playerKey];
            let opinionText = "No strong opinion.";
            if (relation && relation.text) {
                const parts = relation.text.split(':');
                opinionText = (parts.length > 1) ? parts.slice(1).join(':').trim() : relation.text;
            }

            return `<div class="toad-opinion-item">
                        <strong>${LORE_DATA.characters[playerKey].name}:</strong> "<em>${opinionText}</em>"
                    </div>`;
        }).join('');
        
        const focusHTML = subFaction.current_focus ? `
            <div class="toad-focus">
                <h6>🎯 Current Focus</h6>
                <p>${subFaction.current_focus}</p>
            </div>
        ` : '';

        return `
            <div class="liberated-toad-card">
                <div class="toad-card-header">
                    <img src="${metadata.portrait}" alt="${subFaction.name}" class="toad-portrait">
                    <div class="toad-title-group">
                        <h4 class="toad-name">${subFaction.name}</h4>
                        <div class="toad-stats">
                            <span>⭐ Influence: <strong>${subFaction.influence || '??'}%</strong></span>
                            <span>⚔️ Weapon: <strong>${metadata.weapon}</strong></span>
                        </div>
                    </div>
                </div>
                <p class="toad-description">${subFaction.description}</p>
                ${focusHTML}
                <div class="toad-opinions">
                    <h6>🗣️ Party Opinions</h6>
                    <div class="toad-opinions-list">
                        ${playerOpinionsHTML}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <p class="system-description">The Liberated Toads are not a monolithic bloc, but a diverse group of individuals with strong opinions shaped by their recent trauma and newfound freedom. Their support is personal and must be earned. Their development is tracked on the <a href="focus.html">Toad Focus</a> page.</p>
        <div class="system-content">
            <div class="liberated-toads-grid">
                ${subFactionCardsHTML}
            </div>
        </div>
    `;
}