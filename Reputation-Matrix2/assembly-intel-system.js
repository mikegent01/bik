import { LORE_DATA } from './lore.js';
import { WAHBOOK_POSTS } from './assembly-data.js';
/**
 * Renders the Rumors & Intel section, including the count of associated WAHbook posts.
 */
export function renderIntelAndRumors() {
    const container = document.getElementById('intel-rumors-container');
    if (!container) {
        console.error("Intel container not found!");
        return;
    }
    {}
    const rumors = LORE_DATA.rumors || [];
    
    // Sort rumors by time_ago for a more logical display if needed
    // This part is optional but good practice.
    const sortedRumors = [...rumors].sort((a, b) => {
        // This is a simple sort, can be made more complex if time formats vary
        if (a.time_ago.includes("Today") && !b.time_ago.includes("Today")) return -1;
        if (b.time_ago.includes("Today") && !a.time_ago.includes("Today")) return 1;
        return 0; // Basic sort, can be improved
    });

    const rumorsHTML = rumors.map(rumor => {
        // Count associated WAHbook posts
        const chatterCount = WAHBOOK_POSTS.filter(post => post.rumorId === rumor.id).length;

        // --- NEW: Build the Reputation Impact List ---
        const effects = rumor.effects || {};
        const repChangesHTML = Object.entries(effects).map(([factionKey, value]) => {
            const faction = LORE_DATA.factions[factionKey];
            if (!faction) return ''; // Skip if faction doesn't exist in LORE_DATA

            const changeClass = value > 0 ? 'positive' : 'negative';
            const sign = value > 0 ? '+' : '';

            return `
                <li class="rep-change-item">
                    <img src="${faction.logo}" alt="${faction.name}" title="${faction.name}">
                    <span>${faction.name}</span>
                    <span class="rep-value ${changeClass}">${sign}${value}</span>
                </li>
            `;
        }).join('');

        const repSectionHTML = repChangesHTML ? `
            <details class="intel-rep-details">
                <summary>View Reputation Impact</summary>
                <ul class="intel-rep-list">${repChangesHTML}</ul>
            </details>
        ` : '';
        // --- END OF NEW SECTION ---

        return `
            <div class="intel-card" data-rumor-id="${rumor.id}">
                <div class="intel-card-header">
                    <h3 class="intel-title">${rumor.title}</h3>
                    <span class="intel-time">${rumor.time_ago}</span>
                </div>
                <p class="intel-description">${rumor.description}</p>
                
                <!-- ADDED: The reputation impact section -->
                ${repSectionHTML}
                
                <div class="intel-footer">
                    <span>Chatter Reports: <span class="chatter-count">${chatterCount}</span></span>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = rumorsHTML;
}