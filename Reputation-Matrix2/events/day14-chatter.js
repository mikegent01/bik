// events/day14-chatter.js

export const DAY14_CHATTER_POSTS = [
    {
        id: 'generic_toad_embassy_reaction',
        order: 256,
        characterKey: 'generic_toad',
        timestamp: '15 minutes ago',
        content: "First Toadette's fanatics, now the Iron Legion is setting up an 'embassy' in the middle of town square?! What's next, Bowser moving in next door? This used to be a nice place to live.",
        likes: 134,
        comments: [
            { characterKey: 'chancellor_toadsworth', text: "The Regency does not recognize this forced establishment and is lodging a formal protest with the Regal Empire." }
        ],
        eventId: 'toad_town_developments'
    },
    {
        id: 'iron_legion_embassy_announcement',
        order: 255,
        characterKey: 'iron_legion',
        timestamp: '1 hour ago',
        content: "The establishment of the Iron Legion Embassy in Toad Town is a gesture of peace and a commitment to order. All citizens are advised to respect Imperial protocols. Any disruption will be met with decisive action.",
        likes: 842,
        comments: [
            { characterKey: 'captain_toadette', text: "Your 'peace' is the peace of the cage. We will not be intimidated." }
        ],
        eventId: 'toad_town_developments'
    },
    {
        id: 'kamek_observes_toad_town',
        order: 254,
        characterKey: 'kamek',
        timestamp: '2 hours ago',
        content: "The little mushroom fanatics are testing each other's 'loyalty' in the sewers while the metal men plant their flag in the middle of town. Excellent. Let them squabble. It only makes Lord Bowser's eventual triumph that much easier.",
        likes: 310,
        comments: [],
        eventId: 'toad_town_developments'
    },
    {
        id: 'janna_reacts_to_toadette',
        order: 253,
        characterKey: 'janna_brightspark',
        timestamp: '3 hours ago',
        content: "Toadette is using mass-scale illusion magic for loyalty tests? FASCINATING! What a wonderfully practical, if ethically questionable, application of the art! I must learn more about her methods!",
        likes: 215,
        comments: [
            { characterKey: 'archmage_theron', text: "Janna, you will do no such thing. This is a gross violation of the Autumnwood Accords regarding psychological manipulation." }
        ],
        eventId: 'toad_town_developments'
    },
    {
        id: 'broker_toad_town_opportunity',
        order: 252,
        characterKey: 'the_broker',
        timestamp: '4 hours ago',
        content: "Market update: Instability in Toad Town has created new opportunities. Demand for off-the-books transport and forged travel papers is at an all-time high. My rates are, as always, competitive.",
        likes: 450,
        comments: [],
        eventId: 'toad_town_developments'
    }
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