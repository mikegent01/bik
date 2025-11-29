
import { CURRENT_GAME_DATE } from './calendar-data.js';
import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests/quests-constants.js';

// Import all specific quest modules
import { MAIN_QUESTS } from './quests/quests-main.js';
import { TOADS_QUESTS } from './quests/quests-toads.js';
import { ARCHIE_QUESTS } from './quests/quests-archie.js';
import { MARKOP_QUESTS } from './quests/quests-markop.js';
import { HUMPIK_QUESTS } from './quests/quests-humpik.js';
import { BOWSER_QUESTS } from './quests/quests-bowser.js';
import { REMI_QUESTS } from './quests/quests-remi.js';
import { DK_QUESTS } from './quests/quests-dk.js';
import { GUILDS_QUESTS } from './quests/quests-guilds.js';
import { MYSTERY_QUESTS } from './quests/quests-mysteries.js';
import { NEW_MK_QUESTS } from './quests/quests-mushroom-kingdom-new.js';
import { NEW_MIDLANDS_QUESTS } from './quests/quests-midlands-new.js';
import { REQUESTS } from './quests/quests-requests.js';
import { WORLD_QUESTS } from './quests/quests-world.js';

// Export Constants for other files 
export { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY };

export const QUEST_DATA = {
    ...MAIN_QUESTS,
    ...TOADS_QUESTS,
    ...ARCHIE_QUESTS,
    ...MARKOP_QUESTS,
    ...HUMPIK_QUESTS,
    ...BOWSER_QUESTS,
    ...REMI_QUESTS,
    ...DK_QUESTS,
    ...GUILDS_QUESTS,
    ...MYSTERY_QUESTS,
    ...NEW_MK_QUESTS,
    ...NEW_MIDLANDS_QUESTS,
    ...REQUESTS,
    ...WORLD_QUESTS
};

// ============================================
// QUEST HELPER FUNCTIONS
// ============================================

export function getQuestProgress(quest) {
    if (!quest.milestones || quest.milestones.length === 0) return 0;
    const completed = quest.milestones.filter(m => m.status === 'completed').length;
    return Math.round((completed / quest.milestones.length) * 100);
}

export function getUrgentQuests() {
    return Object.values(QUEST_DATA).filter(q => {
        if (q.status !== QUEST_STATUS.ACTIVE && q.status !== QUEST_STATUS.ONGOING) return false;
        if (q.priority && q.priority.level >= 4) return true; 
        if (q.dates?.deadline) return true;
        return false;
    });
}

export function getDaysUntilDeadline(quest) {
    if (!quest.dates?.deadline) return null;
    const deadline = quest.dates.deadline;
    const current = CURRENT_GAME_DATE;
    const deadlineTotal = deadline.year * 365 + deadline.monthIndex * 30 + deadline.day;
    const currentTotal = current.year * 365 + current.monthIndex * 30 + current.day;
    return deadlineTotal - currentTotal;
}

export function isQuestUpdatedRecently(quest, daysThreshold = 3) {
    const updated = quest.dates?.updated || quest.dates?.added || null;
    if (!updated) return false;
    const current = CURRENT_GAME_DATE;
    const updatedTotal = updated.year * 365 + updated.monthIndex * 30 + updated.day;
    const currentTotal = current.year * 365 + current.monthIndex * 30 + current.day;
    return (currentTotal - updatedTotal) <= daysThreshold;
}

export function getQuestsByArc(arcId) {
    return Object.values(QUEST_DATA).filter(q => q.arcId === arcId);
}
        