import { LORE_DATA } from './lore.js';
import { CURRENT_GAME_DATE } from './calendar-data.js';

import { WAHBOOK_POSTS } from './assembly-data.js';
/**
 * Calculates a "time ago" string based on a rumor's date and the current game date.
 * @param {object} rumorDate - The date object of the rumor.
 * @returns {string} - A user-friendly time ago string (e.g., "Today", "3 days ago").
 */
function calculateTimeAgo(rumorDate) {
    if (!rumorDate) return "Ongoing"; // Handle rumors without a fixed date

    // Convert game date and rumor date to comparable numerical values
    const currentDateVal = CURRENT_GAME_DATE.year * 365 + CURRENT_GAME_DATE.monthIndex * 30 + CURRENT_GAME_DATE.day;
    const rumorDateVal = rumorDate.year * 365 + rumorDate.monthIndex * 30 + rumorDate.day;
    
    const diffDays = currentDateVal - rumorDateVal;

    if (diffDays < 0) return "In the future"; // Should not happen, but a good failsafe
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays <= 6) return `${diffDays} days ago`;
    if (diffDays <= 13) return "Approx. 1 week ago";
    if (diffDays <= 25) return "Approx. 2-3 weeks ago";
    if (diffDays <= 45) return "Approx. 1 month ago";
    if (diffDays <= 360) return `Approx. ${Math.round(diffDays / 30)} months ago`;
    
    const diffYears = Math.floor(diffDays / 365);
    return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
}
export function renderIntelAndRumors() {
    const container = document.getElementById('intel-rumors-container');
    if (!container) return;

    const rumors = LORE_DATA.rumors || [];
    
    const rumorsHTML = rumors.map(rumor => {
        const chatterCount = WAHBOOK_POSTS.filter(post => post.rumorId === rumor.id).length;
        const timeAgo = rumor.time_ago || calculateTimeAgo(rumor.date);

        const effects = rumor.effects || {};
        const repChangesHTML = Object.entries(effects).map(([factionKey, value]) => {
            const faction = LORE_DATA.factions[factionKey];
            if (!faction) return '';
            const changeClass = value > 0 ? 'positive' : 'negative';
            const sign = value > 0 ? '+' : '';
            return `<li class="rep-change-item"><img src="${faction.logo}" alt="${faction.name}" title="${faction.name}"><span>${faction.name}</span><span class="rep-value ${changeClass}">${sign}${value}</span></li>`;
        }).join('');

        const repSectionHTML = repChangesHTML ? `<details class="intel-rep-details"><summary>View Reputation Impact</summary><ul class="intel-rep-list">${repChangesHTML}</ul></details>` : '';

        return `
            <div class="intel-card" data-rumor-id="${rumor.id}">
                <div class="intel-card-header">
                    <!-- THIS IS THE FIX: Add a fallback for the title -->
                    <h3 class="intel-title">${rumor.title || 'Untitled Rumor'}</h3>
                    <span class="intel-time">${timeAgo}</span>
                </div>
                <p class="intel-description">${rumor.description}</p>
                ${repSectionHTML}
                <div class="intel-footer">
                    <span>Chatter Reports: <span class="chatter-count">${chatterCount}</span></span>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = rumorsHTML;
}