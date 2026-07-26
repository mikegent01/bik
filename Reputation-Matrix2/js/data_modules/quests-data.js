
import { CURRENT_GAME_DATE } from '../pages/calendar-data.js';
import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from '../../quests/quests-constants.js';

// Import all specific quest modules
import { MAIN_QUESTS,GUILDS_QUESTS,MYSTERY_QUESTS,WORLD_QUESTS, TOADS_QUESTS ,ARCHIE_QUESTS,MARKOP_QUESTS,hjumpik_QUESTS,BOWSER_QUESTS,REMI_QUESTS,DK_QUESTS} from '../../quests/quests-main.js';
import { NEW_MK_QUESTS } from '../../quests/quests-mushroom-kingdom-new.js';
import { NEW_MIDLANDS_QUESTS } from '../../quests/quests-midlands-new.js';
import { REQUESTS } from '../../quests/quests-requests.js';
 
// Export Constants for other files 
export { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY };

export const QUEST_DATA = {
    ...MAIN_QUESTS,
    ...TOADS_QUESTS,
    ...ARCHIE_QUESTS,
    ...MARKOP_QUESTS,
    ...hjumpik_QUESTS,
    ...BOWSER_QUESTS,
    ...REMI_QUESTS,
    ...DK_QUESTS,
    ...GUILDS_QUESTS,
    ...MYSTERY_QUESTS,
    ...NEW_MK_QUESTS,
    ...NEW_MIDLANDS_QUESTS
   // ...REQUESTS,
    //...WORLD_QUESTS
};

// ============================================
// QUEST HELPER FUNCTIONS
// ============================================

export function getQuestProgress(quest) {
    if (!quest.milestones || quest.milestones.length === 0) return 0;
    
    // Count 'completed' milestones
    const completed = quest.milestones.filter(m => m.status === 'completed').length;
    
    // Calculate percentage
    return Math.round((completed / quest.milestones.length) * 100);
}

export function getUrgentQuests() {
    // Fallback map in case Priority constants are just strings
    const PRIORITY_MAP = {
        'CRITICAL': 5,
        'HIGH': 4,
        'MEDIUM': 3,
        'LOW': 2,
        'TRIVIAL': 1
    };

    return Object.values(QUEST_DATA).filter(q => {
        // Only look at active/ongoing quests
        if (q.status !== QUEST_STATUS.ACTIVE && q.status !== QUEST_STATUS.ONGOING) return false;

        // Check Priority Level
        let pLevel = 0;
        if (typeof q.priority === 'object' && q.priority !== null) {
            pLevel = q.priority.level || 0;
        } else if (typeof q.priority === 'string') {
            pLevel = PRIORITY_MAP[q.priority.toUpperCase()] || 0;
        }

        // Return true if Critical/High (Level 4+) OR if it has a deadline
        if (pLevel >= 4) return true;
        if (q.dates?.deadline) return true;

        return false;
    }).sort(sortQuestsByPriority); // Return sorted
}

/**
 * Returns the number of days remaining until the deadline.
 * Returns negative numbers if overdue.
 */
export function getDaysUntilDeadline(quest) {
    if (!quest.dates?.deadline) return null;
    
    const deadlineDays = calculateTotalDays(quest.dates.deadline);
    const currentDays = calculateTotalDays(CURRENT_GAME_DATE);
    
    return deadlineDays - currentDays;
}


function calculateTotalDays(dateObj) {
    if (!dateObj) return 0;
    // fallback to 0 if properties missing
    const y = dateObj.year || 0;
    const m = dateObj.monthIndex || 0;
    const d = dateObj.day || 0;
    return (y * 365) + (m * 30) + d;
}

export function isQuestUpdatedRecently(quest, daysThreshold = 1) {
    const updatedDate = quest.dates?.updated || quest.dates?.added;
    if (!updatedDate) return false;

    const updatedDays = calculateTotalDays(updatedDate);
    const currentDays = calculateTotalDays(CURRENT_GAME_DATE);

    return (currentDays - updatedDays) <= daysThreshold;
}

export function getQuestsByArc(arcId) {
    return Object.values(QUEST_DATA).filter(q => q.arcId === arcId);
}
export function sortQuestsByPriority(a, b) {
    const getLevel = (q) => {
        if (typeof q.priority === 'object') return q.priority.level || 0;
        // Fallback for string matching
        const str = String(q.priority).toUpperCase();
        if (str.includes('CRITICAL')) return 5;
        if (str.includes('HIGH')) return 4;
        if (str.includes('MEDIUM')) return 3;
        return 1;
    };

    return getLevel(b) - getLevel(a);
}