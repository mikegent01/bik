import { state } from './state.js';
import { FACTION_ASSESSMENTS } from './assessments.js';

export function getReputation(playerKey, factionKey) {
    return state.finalReputations[playerKey]?.reputation[factionKey] || 0;
}

export function getNotoriety(playerKey, factionKey) {
    return state.finalReputations[playerKey]?.notoriety[factionKey] || 0;
}

export function getSubFactionReputation(playerKey, factionKey, subFactionKey) {
    return state.finalSubFactionReputations[playerKey]?.[factionKey]?.[subFactionKey] || 0;
}

export function getDetailedFactionAssessment(factionKey, playerKey, reputation, notoriety) {
    const customAssessment = FACTION_ASSESSMENTS[factionKey]?.[playerKey];
    if (customAssessment) {
        return customAssessment;
    }

    // Fallback to generic text if a custom one isn't written
    return `
        <p>${getGenericFactionAssessment(reputation)}</p>
        <p><strong>Notoriety Level:</strong> ${getNotorietyDescription(notoriety)}</p>
    `;
}

export function getGenericFactionAssessment(rep) {
    if (rep >= 75) return "Idolized. Seen as a champion of their cause.";
    if (rep >= 50) return "Respected. Considered a valuable ally and friend.";
    if (rep >= 25) return "Friendly. Views are aligned; a potential partner.";
    if (rep > 0) return "Tolerated. Not an enemy, but not yet trusted.";
    if (rep === 0) return "Neutral. No notable interactions recorded.";
    if (rep > -25) return "Distrusted. Actions have caused minor concern.";
    if (rep > -50) return "Disliked. Considered a nuisance or a minor threat.";
    if (rep > -75) return "Hated. Actively works against their interests.";
    return "Enemy. A primary target for elimination or sabotage.";
}

export function getNotorietyDescription(notoriety) {
    if (notoriety >= 90) return "Legendary Figure. Their name is known to all, from the lowest scribe to the highest authority.";
    if (notoriety >= 70) return "Well-Known. Actions are frequently discussed and tracked by the faction.";
    if (notoriety >= 50) return "Recognized. Has a significant file and is known on sight by leadership.";
    return "Unknown. An insignificant figure with no recorded interactions.";
}