// events/day14-chatter.js

export const DAY14_CHATTER_POSTS = [
];

export const DAY14_CHATTER_EVENT = {
    id: 'toad_town_developments',
    title: "Toad Town Developments",
    order: -1.5, // To appear after Archie's fiasco but before the diner.
    locationId: 'poi_mk_toadtown',
    description: "The fallout from Captain Toadette's seizure of Toad Town continues, with the formal establishment of an Iron Legion embassy and reactions from powers across the world.",
    attendees: [
        { characterKey: 'captain_toadette', host: true, justification: "De facto ruler of Toad Town." },
        { characterKey: 'iron_legion', justification: "Established a new embassy in the town square." },
        { characterKey: 'kamek', justification: "Observing the chaos from afar for the Koopa Troop." },
        { characterKey: 'janna_brightspark', justification: "Taking a keen academic interest in Toadette's methods." }
    ],
    news_ids: [],
    post_ids: DAY14_CHATTER_POSTS.map(p => p.id)
};