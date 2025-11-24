// events/archie-fiasco-event.js

export const ARCHIE_FIASCO_POSTS = [
   
];

export const ARCHIE_FIASCO_EVENT = {
    id: 'archie_fiasco',
    title: "Archie's Recruitment Fiasco",
    order: -1, // Newest event
    locationId: 'poi_mk_toadtown',
    description: "In a stunning lack of tactical awareness, anarchist Archie Miser publicly responded to Captain Toadette's post about her loyalty test. He criticized her methods and attempted to recruit her soldiers and the Liberated Toads into a rival 'army'. The move triggered a massive flame war, alienating nearly all of his allies and amusing his enemies.",
    attendees: [
        { characterKey: 'archie', host: true, justification: "Initiated the incident with a single, ill-advised post." },
        { characterKey: 'captain_toadette', justification: "Primary target of the insult; responded with cold fury." },
        { characterKey: 'liberated_toads', justification: "The target of the recruitment attempt; universally rejected the offer." },
        { characterKey: 'bowser', justification: "Archie's supposed ally; was infuriated by the attempt to create a rival army." },
        { characterKey: 'chief_thornpaw', justification: "Offered a critical assessment of Archie's chaotic leadership style." },
        { characterKey: 'waluigi', justification: "Offered his stylistic critique of the ensuing chaos." },
        { characterKey: 'the_broker', justification: "Analyzed the event from a purely financial and strategic perspective." },
        { characterKey: 'giggling_pete', justification: "Represented the Cosmic Jester's enthusiastic approval of the pandemonium." },
        { characterKey: 'detective_penny', justification: "Logged the incident for Archie's ever-growing criminal file." },
        { characterKey: 'general_marcus_ironhand', justification: "Condemned the act as a display of undisciplined foolishness." }
    ],
    news_ids: [],
    post_ids: ARCHIE_FIASCO_POSTS.map(p => p.id)
};