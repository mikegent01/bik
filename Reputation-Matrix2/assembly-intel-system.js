
import { LORE_DATA } from './lore.js';
import { calculateRumorMetrics } from './Reputation-Matrix2/research-data.js'; // Import metric logic
import { WAHBOOK_POSTS } from './Reputation-Matrix2/assembly-data.js';

export function renderIntelAndRumors() {
    const container = document.getElementById('intel-rumors-container');
    if (!container) return;

    const rumors = LORE_DATA.rumors || [];
    
    const rumorsHTML = rumors.map(rumor => {
        // Filter posts relevant to this rumor
        const relatedPosts = WAHBOOK_POSTS.filter(post => post.rumorId === rumor.id);
        const chatterCount = relatedPosts.length;
        
        // Calculate Hype & Decay metrics using the updated shared logic
        const metrics = calculateRumorMetrics(rumor, relatedPosts);

        // Badge Logic
        let badgeHTML = '';
        if (metrics.status === 'Viral') badgeHTML = '<span class="intel-badge viral">🔥 VIRAL</span>';
        else if (metrics.status === 'Trending') badgeHTML = '<span class="intel-badge trending">📈 TRENDING</span>';
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
            
            // Apply multiplier to display
            const adjustedValue = Math.round(value * metrics.repMultiplier);
            
            const changeClass = adjustedValue > 0 ? 'positive' : 'negative';
            const sign = adjustedValue > 0 ? '+' : '';
            return `<li class="rep-change-item"><img src="${faction.logo}" alt="${faction.name}" title="${faction.name}"><span>${faction.name}</span><span class="rep-value ${changeClass}">${sign}${adjustedValue} Rep</span></li>`;
        }).join('');

        const repSectionHTML = repChangesHTML ? `<details class="intel-rep-details"><summary>View Reputation Impact (x${metrics.repMultiplier.toFixed(1)})</summary><ul class="intel-rep-list">${repChangesHTML}</ul></details>` : '';

        // Decay Display Logic
        let decayDisplayHTML = '';
        if (metrics.isFresh) {
             decayDisplayHTML = `<span class="intel-decay decay-paused">Decay: PAUSED (Active Chatter)</span>`;
        } else {
            const lossValue = Math.abs(metrics.decayLoss).toFixed(2);
            if (lossValue > 0.00) {
                decayDisplayHTML = `<span class="intel-decay decay-active">Decay: -${lossValue} Impact</span>`;
            } else {
                 decayDisplayHTML = `<span class="intel-decay decay-neutral">Decay: 0</span>`;
            }
        }
        
        // Instigator
        let instigatorHTML = '';
        if (rumor.instigator) {
            const charData = LORE_DATA.characters[rumor.instigator] || LORE_DATA.auxiliary_party[rumor.instigator];
            const name = charData ? charData.name : rumor.instigator;
            instigatorHTML = `<span class="instigator-tag">Instigator: ${name} (2x Reputation Effect)</span>`;
        }

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
                ${instigatorHTML}
                ${repSectionHTML}
                <div class="intel-footer">
                    <span>Chatter Reports: <span class="chatter-count">${chatterCount}</span></span>
                    <span>Hype Factor: x${metrics.hypeFactor.toFixed(1)}</span>
                    ${decayDisplayHTML}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = rumorsHTML;
}
