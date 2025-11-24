export const TOADETTE_TEST_POSTS = [
  
];

export const TOADETTE_TEST_EVENT = {
    id: 'toadette_test',
    title: "Toadette's Loyalty Test",
    order: -0.5,
    locationId: 'poi_mk_toadtown',
    description: "In a shocking move, Captain Toadette seized control of Toad Town and subjected her new recruits (and the main party) to a brutal, illusory loyalty test in the sewers. The event's public fallout included the establishment of a (real) Iron Legion embassy and cemented Toadette's reputation as a ruthless commander.",
    attendees: [
        { characterKey: 'captain_toadette', host: true, justification: "Orchestrator of the loyalty test and new de facto ruler of Toad Town." },
        { characterKey: 'embercap', justification: "A key participant and subject of the test, who endured a faked kidnapping." },
        { characterKey: 'mistveil', justification: "Appointed as the interim governor of Toad Town before being subjected to the loyalty test." }
    ],
    news_ids: ['wah_media_toadette_takeover'],
    post_ids: TOADETTE_TEST_POSTS.filter(p => p.id !== 'wah_media_toadette_takeover').map(p => p.id)
};