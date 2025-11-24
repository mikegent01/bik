
import { LORE_DATA } from './lore.js';
import { calculateRumorMetrics } from './research-data.js'; // Import metric logic
import { WAHBOOK_POSTS } from './assembly-data.js';

export function renderIntelAndRumors() {
    const container = document.getElementById('intel-rumors-container');
    if (!container) return;

    const rumors = LORE_DATA.rumors || [];
    
    const rumorsHTML = rumors.map(rumor => {
        // Count posts for this rumor
        const chatterCount = WAHBOOK_POSTS.filter(post => post.rumorId === rumor.id).length;
        
        // Calculate Hype & Decay metrics using the new shared logic
        const metrics = calculateRumorMetrics(rumor, chatterCount);

        // Badge Logic
        let badgeHTML = '';
        if (metrics.status === 'Viral') badgeHTML = '<span class="intel-badge viral">🔥 VIRAL</span>';
        else if (metrics.status === 'Legendary') badgeHTML = '<span class="intel-badge legendary">👑 LEGENDARY</span>';
        else if (metrics.status === 'Fading') badgeHTML = '<span class="intel-badge fading">📉 FADING</span>';
        else if (metrics.status === 'Old News') badgeHTML = '<span class="intel-badge old">🕸️ OLD NEWS</span>';
        else if (metrics.status === 'Dead') badgeHTML = '<span class="intel-badge dead">☠️ DEAD</span>';
        else badgeHTML = '<span class="intel-badge active">⚡ ACTIVE</span>';

        // Time Display
        let timeDisplay = "Ongoing";
        if (metrics.daysPassed === 0) timeDisplay = "Started Today";
        else if (metrics.daysPassed === 1) timeDisplay = "Started Yesterday";
        else timeDisplay = `${metrics.daysPassed} Days Active`;

        // Impact Display
        const baseScore = metrics.baseData.score;
        const finalScore = metrics.finalScore.toFixed(2);
        let impactClass = finalScore > 0 ? 'high-impact' : 'low-impact';
        if (Math.abs(finalScore) > 2) impactClass = 'critical-impact';

        const effects = rumor.effects || {};
        const repChangesHTML = Object.entries(effects).map(([factionKey, value]) => {
            const faction = LORE_DATA.factions[factionKey];
            if (!faction) return '';
            const changeClass = value > 0 ? 'positive' : 'negative';
            const sign = value > 0 ? '+' : '';
            return `<li class="rep-change-item"><img src="${faction.logo}" alt="${faction.name}" title="${faction.name}"><span>${faction.name}</span><span class="rep-value ${changeClass}">${sign}${value} Rep</span></li>`;
        }).join('');

        const repSectionHTML = repChangesHTML ? `<details class="intel-rep-details"><summary>View Reputation Impact</summary><ul class="intel-rep-list">${repChangesHTML}</ul></details>` : '';

        return `
            <div class="intel-card" data-rumor-id="${rumor.id}">
                <div class="intel-card-header">
                    <h3 class="intel-title">${rumor.title || 'Untitled Rumor'}</h3>
                    ${badgeHTML}
                </div>
                <div class="intel-meta-row">
                    <span class="intel-time">${timeDisplay}</span>
                    <span class="intel-impact ${impactClass}">Impact: ${finalScore} (Base: ${baseScore})</span>
                </div>
                <p class="intel-description">${rumor.description}</p>
                ${repSectionHTML}
                <div class="intel-footer">
                    <span>Chatter Reports: <span class="chatter-count">${chatterCount}</span></span>
                    <span>Hype Factor: x${metrics.hypeFactor.toFixed(1)}</span>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = rumorsHTML;
}
