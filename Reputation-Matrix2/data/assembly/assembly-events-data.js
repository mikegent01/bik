
import { DINER_EVENT } from '../events/diner-date-event.js';
import { state } from '../../app/core/state.js';
import { SCHEDULED_POSTS } from '../events/scheduled-posts.js';
import { CURRENT_GAME_DATE } from './data/world/calendar.js';
import { TOADETTE_TEST_EVENT } from '../events/toadette-test-event.js';
import { ARCHIE_FIASCO_EVENT } from '../events/archie-fiasco-event.js';
import { DAY14_CHATTER_EVENT } from '../events/day14-chatter.js';




let allEvents = [...BASE_EVENTS];

// Conditionally add events based on game date
if (CURRENT_GAME_DATE.day >= 14 || state.debugMode) {
    allEvents.unshift(RESTAURANT_RAID_EVENT);
    allEvents.unshift(PRISON_DECEPTION_EVENT);
    allEvents.unshift(ARCHIE_FIASCO_EVENT);
    allEvents.unshift(DAY14_CHATTER_EVENT);
    allEvents.unshift(TOADETTE_TEST_EVENT);
    allEvents.unshift(DINER_EVENT);
}

if (CURRENT_GAME_DATE.day >= 15 || state.debugMode) {
    allEvents.unshift(BRAMBLEHAVEN_EVENT);
    const { IRON_HOOF_DAY_EVENT } = await import('../../app/systems/iron-hoof-day.js');
    allEvents.unshift(IRON_HOOF_DAY_EVENT);
}

if (CURRENT_GAME_DATE.day >= 16 || state.debugMode) {
    allEvents.unshift(SHADEWARD_MANOR_EVENT);
    allEvents.unshift(RAVENTREE_MANOR_EVENT);
    allEvents.unshift(REGENCY_FALL_EVENT);
    allEvents.unshift(VAMPIRE_WAR_EVENT);
}

// Add Day 20 events
if (CURRENT_GAME_DATE.day >= 20 || state.debugMode) {
    allEvents.unshift(ARCHIES_CONFESSION_EVENT);
}

export const WAHBOOK_EVENTS = allEvents;

// Function to dynamically load posts for active events
export async function loadEventPosts() {
    let posts = [];

    // --- Time-based scheduled posts ---
    const today = new Date(CURRENT_GAME_DATE.year, CURRENT_GAME_DATE.monthIndex, CURRENT_GAME_DATE.day);
    const scheduledPostsToShow = SCHEDULED_POSTS.filter(post => {
        const postDate = new Date(post.scheduledDate.year, post.scheduledDate.monthIndex, post.scheduledDate.day);
        return postDate <= today;
    });
    posts.push(...scheduledPostsToShow);

    // --- Dynamic event posts ---
    if (CURRENT_GAME_DATE.day >= 14 || state.debugMode) {
        const { DINER_POSTS } = await import('../events/diner-date-event.js');
        posts.push(...DINER_POSTS);
        const { TOADETTE_TEST_POSTS } = await import('../events/toadette-test-event.js');
        posts.push(...TOADETTE_TEST_POSTS);
        const { ARCHIE_FIASCO_POSTS } = await import('../events/archie-fiasco-event.js');
        posts.push(...ARCHIE_FIASCO_POSTS);
        const { DAY14_CHATTER_POSTS } = await import('../events/day14-chatter.js');
        posts.push(...DAY14_CHATTER_POSTS);
    }
    if (CURRENT_GAME_DATE.day >= 15 || state.debugMode) {
        const { IRON_HOOF_DAY_POSTS } = await import('../../app/systems/iron-hoof-day.js');
        posts.push(...IRON_HOOF_DAY_POSTS);
    }
    if (CURRENT_GAME_DATE.day >= 20 || state.debugMode) {
        posts.push(...DAY_20_POSTS);
    }
    return posts;
}
