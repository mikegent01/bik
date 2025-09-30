import { DINER_EVENT } from './events/diner-date-event.js';
import { state } from './state.js';
import { SCHEDULED_POSTS } from './events/scheduled-posts.js';
import { CURRENT_GAME_DATE } from './calendar-data.js';
import { TOADETTE_TEST_EVENT } from './events/toadette-test-event.js';
import { ARCHIE_FIASCO_EVENT } from './events/archie-fiasco-event.js';
import { DAY14_CHATTER_EVENT } from './events/day14-chatter.js';


const BASE_EVENTS = [
    {
        id: 'democratic_summit',
        title: "The Democratic Summit",
        order: 1, // Newer event
        locationId: 'poi_mc_regency_parliament',
        description: "A major diplomatic summit intended to foster cooperation between the various democratic and independent states. The event was marred by an international incident, causing significant political and economic fallout.",
        attendees: [
            { characterKey: 'donkey_kong', justification: "Representing the DK Crew, a key independent economic power." },
            { characterKey: 'diddy_kong', justification: "Attending as Heir Apparent and a senior delegate for the DK Crew." },
            { characterKey: 'candy_kong', justification: "Attending as a senior advisor and diplomat for the DK Crew." },
            { characterKey: 'chunky_kong', justification: "Attending as a sergeant-at-arms and a symbol of the DK Crew's strength." },
            { characterKey: 'lanky_kong', justification: "Attending as a delegate, a decision now under heavy scrutiny." },
            { characterKey: 'captain_toad', host: true, justification: "Representing the Mushroom Regency, seeking aid and alliances amidst the civil war." },
            { characterKey: 'regal_empire_delegate', justification: "**[CONTROVERSIAL]** The Regal Empire, an autocracy, was granted observer status under the 'Hostile Actor De-escalation Mandate'. Their presence was intended to open dialogue and reduce regional tensions, a move that has been heavily criticized by pro-democracy advocates." },
            { characterKey: 'queen_bean', justification: "Representing the allied Beanbean Kingdom to strengthen ties with the Regency." },
            { characterKey: 'prince_florian', justification: "A diplomatic outreach from the newly-contacted Flower Kingdom, observing regional politics." },
            { characterKey: 'yoshi_elder', justification: "Representing the interests of the independent Yoshi Clans of Yoshi's Island." },
            { characterKey: 'king_chalmus_ii', justification: "Representing the chivalric kingdom of Chramalot, a traditional ally to the Mushroom Kingdom." },
            { characterKey: 'king_louen_leoncoeur', justification: "The King of Bretonnia, attending from 'The Fated Place' to assess the stability of his eastern neighbors and reinforce chivalric ideals." }
        ],
        news_ids: ['dk_crisis_news'],
        post_ids: ['summit_pre_1', 'summit_pre_2', 'diddy_post_1', 'dk_post_1', 'krool_post_1', 'lanky_post_1', 'candy_post_1', 'chunky_post_1', 'penny_post_1', 'captain_toad_post_1', 'summit_reaction_1', 'summit_reaction_2', 'summit_reaction_3', 'summit_reaction_4', 'summit_reaction_5']
    },
    {
        id: 'fawfuls_gala',
        title: "Fawful's Grand Gala",
        order: 2, // Older event
        locationId: 'poi_mk_castle',
        description: "A 'victory' party hosted by the villain Fawful following his seizure of Peach's Castle. The event was a gathering of various underworld figures and chaotic entities, and was infiltrated by a joint Koopa-Loyalist team.",
        attendees: [
            { characterKey: 'fawful', host: true, justification: "Host and self-proclaimed 'Master of Fury'." },
            { characterKey: 'evil_toad_god', justification: "Attending as the Guest of Honor, a display of chaotic solidarity." },
            { characterKey: 'giggling_pete', justification: "Representing the Servants of the Cosmic Jester, finding the entire affair hilarious." },
            { characterKey: 'chief_thornpaw', justification: "Infiltrated the event to gather intelligence, using his spiritual connection to remain unseen." }
        ],
        news_ids: ['fawful_gala_news'],
        post_ids: ['fawful_post_1']
    }
];

// --- NEW SCRIPTED EVENTS ---

const VAMPIRE_WAR_EVENT = {
    id: 'vampire_war',
    title: "The Vampire War: A Kingdom Bleeds",
    order: -2, // Newest
    locationId: 'poi_iw_ironwood_forest',
    description: "The Onyx Hand's shocking betrayal shatters the Midlands peace, drawing the Empire, Koopa Troop, and Moonfang Pack into a bloody conflict culminating in the Siege of Ironwood Forest.",
    attendees: [
        { characterKey: 'lord_crimson', host: true, justification: "Architect of the Onyx Hand's ambitious, and ultimately costly, invasion." },
        { characterKey: 'general_marcus_ironhand', justification: "Leader of the Imperial forces, forced to conduct a tactical retreat before crushing the invaders." },
        { characterKey: 'alpha_bloodmaw', justification: "Led the Moonfang Pack's successful counter-offensive in their home territory of Lockerwood." }
    ],
    news_ids: ['event_war_onyx_vs_regal', 'event_war_onyx_invasion'],
    post_ids: ['event_war_regal_retreat', 'event_war_moonfang_victory', 'event_war_regal_encirclement', 'event_war_ironwood_victory', 'event_war_onyx_retreat_post', 'event_war_aftermath_ironhand']
};

const REGENCY_FALL_EVENT = {
    id: 'regency_fall',
    title: "The Fall of the Mushroom Regency",
    order: -1,
    locationId: 'poi_mk_castle',
    description: "Under the combined might of Fawful's fury and Bowser's resurgent army, the century-old Mushroom Regency and the zealous Peach Loyalists collapse, leaving two tyrants to divide the spoils.",
    attendees: [
        { characterKey: 'bowser', host: true, justification: "Co-conqueror and new ruler of the Mushroom Kingdom's outer territories." },
        { characterKey: 'fawful', host: true, justification: "Co-conqueror and new master of Peach's Castle." },
        { characterKey: 'kamek', justification: "Key strategist for the Koopa Troop's successful campaign." },
        { characterKey: 'captain_toadette', justification: "**[DEFEATED]** Her Loyalist forces were shattered, ending her crusade." }
    ],
    news_ids: ['event_war_regency_collapse', 'event_war_tyrant_treaty_news'],
    post_ids: ['event_war_onyx_vs_fawful', 'event_war_fawful_responds', 'event_war_koopa_vs_onyx', 'event_war_bowser_victory_mk', 'event_war_bowser_truce', 'event_war_fawful_truce', 'event_war_aftermath_toadsworth', 'event_war_aftermath_toadette', 'event_war_aftermath_toad']
};


let allEvents = [...BASE_EVENTS];

// Conditionally add the Diner event (Day 14+)
if (CURRENT_GAME_DATE.day >= 14 || state.debugMode) {
    allEvents.unshift(ARCHIE_FIASCO_EVENT);
    allEvents.unshift(DAY14_CHATTER_EVENT);
    allEvents.unshift(TOADETTE_TEST_EVENT);
    allEvents.unshift(DINER_EVENT);

    // NEW: Capital Prison Deception event
    const { PRISON_DECEPTION_EVENT } = await import('./events/prison-deception-event.js');
    allEvents.unshift(PRISON_DECEPTION_EVENT);
}

// Conditionally add the Iron Hoof Day event (Day 15+)
if (CURRENT_GAME_DATE.day >= 15 || state.debugMode) {
    const { IRON_HOOF_DAY_EVENT } = await import('./events/iron-hoof-day.js');
    allEvents.unshift(IRON_HOOF_DAY_EVENT);
}

// Conditionally add the World War events (Day 16+ or debug mode)
if (CURRENT_GAME_DATE.day >= 16 || state.debugMode) {
    allEvents.unshift(REGENCY_FALL_EVENT);
    allEvents.unshift(VAMPIRE_WAR_EVENT);
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
        const { DINER_POSTS } = await import('./events/diner-date-event.js');
        posts.push(...DINER_POSTS);
        const { TOADETTE_TEST_POSTS } = await import('./events/toadette-test-event.js');
        posts.push(...TOADETTE_TEST_POSTS);

        // NEW: Capital Prison Deception posts
        const { PRISON_DECEPTION_POSTS } = await import('./events/prison-deception-event.js');
        posts.push(...PRISON_DECEPTION_POSTS);
    }
    if (CURRENT_GAME_DATE.day >= 15 || state.debugMode) {
        const { IRON_HOOF_DAY_POSTS } = await import('./events/iron-hoof-day.js');
        posts.push(...IRON_HOOF_DAY_POSTS);
    }
    if (CURRENT_GAME_DATE.day >= 16 || state.debugMode) {
        const { ARCHIE_FIASCO_POSTS } = await import('./events/archie-fiasco-event.js');
        posts.push(...ARCHIE_FIASCO_POSTS);
        const { DAY14_CHATTER_POSTS } = await import('./events/day14-chatter.js');
        posts.push(...DAY14_CHATTER_POSTS);
    }
    return posts;
}