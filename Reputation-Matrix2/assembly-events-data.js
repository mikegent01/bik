import { DINER_EVENT } from './events/diner-date-event.js';
import { state } from './Reputation-Matrix2/state.js';
import { SCHEDULED_POSTS } from './events/scheduled-posts.js';
import { CURRENT_GAME_DATE } from './Reputation-Matrix2/calendar-data.js';
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
            { characterKey: 'king_chalmus_iii', justification: "Representing the chivalric kingdom of Chramalot, a traditional ally to the Mushroom Kingdom." },
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

// --- SCRIPTED EVENTS ---

// --- NEW SHADEWARD MANOR EVENT ---
const SHADEWARD_MANOR_EVENT = {
    id: 'shadeward_manor_raid',
    title: "The Shadeward Betrayal",
    order: -4.0, // Newest Event
    locationId: 'poi_mid_raventree_manor', // Assuming Shadeward is near Raventree
    description: "A group of Liberated Toads seeking Archie were trapped in the time-looping Shadeward Mansion by the Oracle. The bizarre dinner was crashed by an Archie clone, a robot double, and a full-scale Iron Legion raid team led by Mr. Wario. The raid was revealed to be a setup, facilitated by a traitor toad who helped capture Bones. The survivors escaped with their wounded, their trust shattered.",
    attendees: [
        { characterKey: 'self_reflection_oracle', host: true, justification: "Host of the 'dinner party' and master of the time-looping manor." },
        { characterKey: 'wario', justification: "Appeared alongside the Iron Legion, claiming to be investigating the temporal instability for profit." },
        { characterKey: 'toad_lee', justification: "Led the group of toads into the mansion." },
        { characterKey: 'bones', justification: "Was captured by the Iron Legion with the help of the traitor." },
        { characterKey: 'ryan', justification: "Used a powerful darkness spell to facilitate the group's escape." },
        { characterKey: 'rodger', justification: "Successfully engaged and defeated an Iron Legionnaire during the raid." },
        { characterKey: 'the_mole', justification: "The traitor who infiltrated the toads and revealed his allegiance to the Iron Legion." }
    ],
    news_ids: [], // No official news coverage yet
    post_ids: [ // All posts we created for this event
        'rodger_traitor_reveal', 'rodger_creek_surgery', 'bones_calls_out_lt', 'purple_t_my_house', 
        'toad_lee_return_to_ship', 'oracle_offers_rooms', 'rodger_negotiation', 'ryan_aftermath_of_darkness', 
        'toad_lee_blind_chaos', 'ryan_unleashes_darkness', 'purple_t_defends_waluigi_book', 
        'rodger_interrogation_fail', 'wario_business_update', 'kamek_observes_wario', 'toad_lee_library', 
        'ryan_robot_eats_toad', 'iron_legion_report', 'bones_dream', 'oracle_farewell', 'ryan_oracle_broken', 
        'toad_lee_joke_success', 'rodger_fake_staff', 'ryan_robot_archie', 'rodger_demands_proof', 
        'purple_t_accuses', 'toad_lee_clone_lies', 'ryan_fireball', 'rodger_bad_feeling', 
        'oracle_pirate_joke', 'toad_lee_arrival'
    ]
};

const RAVENTREE_MANOR_EVENT = {
    id: 'raventree_manor_chaos',
    title: "The Haunting of Raventree Manor",
    order: -3.0,
    locationId: 'poi_mid_raventree_manor', // CORRECTED Location ID
    description: "The party's exploration of the haunted Raventree Manor descended into chaos. After being separated, they battled flaming books, discovered cryptic clues, and eventually regrouped with Bowser and Eager before barricading themselves for the night.",
    attendees: [
        { characterKey: 'archie', justification: "Discovered a cryptic clue before falling down a flight of stairs." },
        { characterKey: 'markop', justification: "Fought flaming books and discovered personal effects, including a photo of his father." },
        { characterKey: 'remi', justification: "Assisted in the book battle before getting separated from the group again." },
        { characterKey: 'waluigi', justification: "Attempted to fight a magical fire with a Fire Bolt, making it worse." },
        { characterKey: 'bowser', justification: "Was discovered in the manor, preparing supplies with Eager." }
    ],
    news_ids: ['wah_media_raventree_manor'],
    post_ids: ['archie_raventree_clue', 'waluigi_raventree_fire', 'markop_raventree_rest']
};

const BRAMBLEHAVEN_EVENT = {
    id: 'bramblehaven_siege',
    title: "The Siege of Bramblehaven",
    order: -2.0,
    locationId: 'poi_mk_castle', // Placeholder, Bramblehaven is not on map
    description: "The brutal, day-long assault and capture of the Fawful bastion, Bramblehaven, by Captain Toadette's Peach Loyalist forces. The battle was marked by heavy casualties and the Loyalists' ruthless refusal to accept surrender.",
    attendees: [
        { characterKey: 'captain_toadette', host: true, justification: "Commanding officer of the Loyalist assault." },
        { characterKey: 'embercap', justification: "Led the charge on the walls." },
        { characterKey: 'mistveil', justification: "Wounded in action by Fawful's frost mages." },
        { characterKey: 'dewdrop', justification: "Managed the overflowing Loyalist field hospital." }
    ],
    news_ids: ['wah_media_bramblehaven'],
    post_ids: ['toadette_bramblehaven_victory', 'dewdrop_bramblehaven_casualties', 'fawful_bramblehaven_fury']
};

const RESTAURANT_RAID_EVENT = { /* ... no changes ... */ };
const PRISON_DECEPTION_EVENT = { /* ... no changes ... */ };
const VAMPIRE_WAR_EVENT = { /* ... no changes ... */ };
const REGENCY_FALL_EVENT = { /* ... no changes ... */ };


let allEvents = [...BASE_EVENTS];

// Conditionally add the Diner event (Day 14+)
if (CURRENT_GAME_DATE.day >= 14 || state.debugMode) {
    allEvents.unshift(RESTAURANT_RAID_EVENT);
    allEvents.unshift(PRISON_DECEPTION_EVENT);
    allEvents.unshift(ARCHIE_FIASCO_EVENT);
    allEvents.unshift(DAY14_CHATTER_EVENT);
    allEvents.unshift(TOADETTE_TEST_EVENT);
    allEvents.unshift(DINER_EVENT);
}

// Conditionally add the Iron Hoof Day event (Day 15+)
if (CURRENT_GAME_DATE.day >= 15 || state.debugMode) {
    allEvents.unshift(BRAMBLEHAVEN_EVENT);
    const { IRON_HOOF_DAY_EVENT } = await import('./events/iron-hoof-day.js');
    allEvents.unshift(IRON_HOOF_DAY_EVENT);
}

// Conditionally add the World War events (Day 16+ or debug mode)
if (CURRENT_GAME_DATE.day >= 16 || state.debugMode) {
    allEvents.unshift(SHADEWARD_MANOR_EVENT); // ADDED
    allEvents.unshift(RAVENTREE_MANOR_EVENT);
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
        const { ARCHIE_FIASCO_POSTS } = await import('./events/archie-fiasco-event.js');
        posts.push(...ARCHIE_FIASCO_POSTS);
        const { DAY14_CHATTER_POSTS } = await import('./events/day14-chatter.js');
        posts.push(...DAY14_CHATTER_POSTS);
    }
    if (CURRENT_GAME_DATE.day >= 15 || state.debugMode) {
        const { IRON_HOOF_DAY_POSTS } = await import('./events/iron-hoof-day.js');
        posts.push(...IRON_HOOF_DAY_POSTS);
    }
    return posts;
}