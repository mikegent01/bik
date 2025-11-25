import { state } from './Reputation-Matrix2/state.js';
import { FACTION_ASSESSMENTS } from './assessments.js';
import { LORE_DATA } from './lore.js';

export function getReputation(playerKey, factionKey) {
    return state.finalReputations[playerKey]?.reputation[factionKey] || 0;
}

export function getNotoriety(playerKey, factionKey) {
    return state.finalReputations[playerKey]?.notoriety[factionKey] || 0;
}

export function getSubFactionReputation(playerKey, factionKey, subFactionKey) {
    return state.finalSubFactionReputations[playerKey]?.[factionKey]?.[subFactionKey] || 0;
}

export function getDetailedFactionAssessment(factionKey, playerKey) {
    const customAssessment = FACTION_ASSESSMENTS[factionKey]?.[playerKey];
    if (customAssessment) {
        return customAssessment;
    }
    const reputation = getReputation(playerKey, factionKey);
    return getGenericFactionAssessment(reputation);
}

export function getGenericFactionAssessment(rep) {
    if (rep >= 75) return "This individual is Idolized, seen as a champion of their cause.";
    if (rep >= 50) return "This individual is Respected, considered a valuable ally and friend.";
    if (rep >= 25) return "This individual is viewed with Friendliness; a potential partner.";
    if (rep > 10) return "This individual is Tolerated. Not an enemy, but not yet fully trusted.";
    if (rep >= -10) return "This individual is viewed with Neutrality. No notable interactions recorded.";
    if (rep >= -25) return "This individual is Distrusted. Their actions have caused concern.";
    if (rep >= -50) return "This individual is Disliked, considered a nuisance or a minor threat.";
    if (rep >= -75) return "This individual is Hated and seen as someone who actively works against their interests.";
    return "This individual is considered an Enemy, a primary target for elimination or sabotage.";
}

export function getNotorietyDescription(notoriety) {
    if (notoriety >= 90) return "Legendary";
    if (notoriety >= 70) return "Well-Known";
    if (notoriety >= 50) return "Recognized";
    return "Unknown";
}

export function renderIndividualStandings(factionKey) {
    const standingsHTML = state.party.map(playerKey => {
        const player = LORE_DATA.characters[playerKey];
        if (!player) return '';

        const playerRep = getReputation(playerKey, factionKey);
        const playerNotoriety = getNotoriety(playerKey, factionKey);
        
        let repClass = 'rep-neutral';
        if (playerRep > 10) repClass = 'rep-positive';
        else if (playerRep < -10) repClass = 'rep-negative';

        const description = getDetailedFactionAssessment(factionKey, playerKey);

        const breakdown = state.calculationBreakdown[playerKey]?.[factionKey];
        let calculationHTML = '<li>No detailed calculation data available.</li>';
        if (breakdown) {
            const rumorItems = (breakdown.rumors || []).map(r => `<li class="calculation-item">Rumor: "${r.title}": <span class="calc-value ${r.value > 0 ? 'positive' : 'negative'}">${r.value > 0 ? '+' : ''}${r.value}</span></li>`).join('');
            const propItems = (breakdown.propagation || []).map(p => `<li class="calculation-item">From ${p.source}: <span class="calc-value ${p.value > 0 ? 'positive' : 'negative'}">${p.value > 0 ? '+' : ''}${Math.round(p.value)}</span></li>`).join('');
            calculationHTML = `<li class="calculation-item">Base Reputation: ${breakdown.base}</li>${rumorItems}${propItems}<li class="calculation-item"><strong>Final Total: ${playerRep}</strong></li>`;
        }

        return `
            <div class="standing-card">
                <div class="standing-header">
                    <span class="standing-character-name">${player.name}</span>
                    <div class="standing-stats">
                        <span class="${repClass}">Reputation: <strong>${playerRep}</strong></span>
                        <span>Notoriety: <strong>${playerNotoriety}</strong></span>
                    </div>
                </div>
                <p class="standing-description">${description}</p>
                <details class="standing-calculation-details">
                    <summary>Show Calculation</summary>
                    <ul class="calculation-list">${calculationHTML}</ul>
                </details>
            </div>
        `;
    }).join('');

    return `<div class="individual-standing-container">${standingsHTML}</div>`;
}