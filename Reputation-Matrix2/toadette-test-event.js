export const TOADETTE_TEST_POSTS = [
    {
        id: 'wah_media_toadette_takeover',
        order: 250,
        characterKey: 'wah_media_collective',
        timestamp: 'Just Now',
        content: `**TOAD TOWN SEIZED!** Following the assassination of the mayor, Captain Toadette's Peach Loyalists have seized control of Toad Town. Citing the Regency's inaction, she has declared martial law and appointed her scout, Mistveil, as interim governor. Evictions of suspected sympathizers are already underway. The Regency has condemned the move as a coup.`,
        image: 'banners/peach_loyalists_banner.png',
        image_alt: "Peach Loyalist soldiers marching through the streets of Toad Town.",
        likes: 1890,
        comments: [
            { characterKey: 'chancellor_toadsworth', text: "This is an illegal power grab! Captain Toadette is a traitor to the Regency!" },
            { characterKey: 'generic_toad', text: "They're kicking people out of their homes! Who's in charge here?!" }
        ],
        eventId: 'toadette_test'
    },
    {
        id: 'mistveil_governor_post',
        order: 249,
        characterKey: 'mistveil',
        timestamp: '1 hour ago',
        content: `My duties have... expanded. The Captain has entrusted me with restoring order to Toad Town. The task is difficult, but necessary. For the Princess, all sacrifices must be made. The evictions will proceed as ordered.`,
        likes: 560,
        comments: [],
        eventId: 'toadette_test'
    },
    {
        id: 'iron_legion_embassy_post',
        order: 248,
        characterKey: 'iron_legion',
        timestamp: '2 hours ago',
        content: `The Iron Legion observes the infighting in the Mushroom Kingdom with concern. To ensure stability and protect Imperial interests, we are establishing a permanent embassy in Toad Town. Our presence will be a bastion of order in these chaotic times. We expect full cooperation.`,
        likes: 1300,
        comments: [
            { characterKey: 'bowser', text: "An 'embassy'? GWAHAHA! Don't you mean an invasion force? At least be honest about it!" }
        ],
        eventId: 'toadette_test'
    },
    {
        id: 'fawful_sewer_gloat',
        order: 247,
        characterKey: 'fawful',
        timestamp: '3 hours ago',
        content: `I HAVE CHORTLES! The mushroom fools are fighting each other in the smelly pipes below my glorious castle! They have the fury of tiny, angry plumbers! Let them splash in the poo-poo water while I prepare their ultimate DOOM!`,
        likes: 812,
        comments: [],
        eventId: 'toadette_test'
    },
    {
        id: 'toadette_test_aftermath',
        order: 246,
        characterKey: 'captain_toadette',
        timestamp: '4 hours ago',
        content: `Today was a test. A test of will, of loyalty, of sacrifice. Some of you showed fear. Hesitation. This is a war for the soul of our kingdom. There is no room for doubt. You are not ready to die for this cause. You will be. I will make sure of it.`,
        likes: 950,
        comments: [
            { characterKey: 'embercap', text: "A harsh lesson, Captain. But a necessary one. We understand." }
        ],
        eventId: 'toadette_test'
    }
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