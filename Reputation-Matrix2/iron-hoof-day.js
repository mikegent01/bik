export const IRON_HOOF_DAY_POSTS = [
    {
        id: 'celestia_iron_hoof_proclamation',
        order: 220,
        characterKey: 'queen_celestia',
        timestamp: 'Just Now',
        content: `On this glorious Iron Hoof Day, let every pony in Equestria reflect upon the harmony and stability our reign provides. Through strength, order, and unwavering loyalty, we have built a paradise. Let the parades commence as a testament to our unity.`,
        image: 'banners/equestria_banner.png',
        image_alt: 'A grand parade of ponies in ornate armor marching through a pristine city square under a golden sun.',
        likes: 4520,
        comments: [],
        eventId: 'iron_hoof_day'
    },
    {
        id: 'wah_media_iron_hoof',
        order: 219,
        characterKey: 'wah_media_collective',
        timestamp: '1 hour ago',
        content: `**EQUESTRIAN TENSIONS RISE ON 'IRON HOOF DAY'** - Reports from Equestria indicate a tense atmosphere as the autocratic regime of Queen Celestia holds its annual state celebration. While state media broadcasts images of grand parades, dissident sources report crackdowns on non-pony communities and the forced closure of businesses. The Unchained's 'Freedom Trotters' network has called it a 'Day of Tyranny'.`,
        likes: 1345,
        comments: [],
        eventId: 'iron_hoof_day'
    },
    {
        id: 'free_name_sarah_iron_hoof',
        order: 218,
        characterKey: 'free_name_sarah',
        timestamp: '2 hours ago',
        content: `To those celebrating 'Iron Hoof Day': What you call 'harmony', others call a cage. What you call 'stability', others call oppression. True unity is not born from fear and forced deference. It is born from freedom. Our thoughts are with our brave agents in the Freedom Trotters network today.`,
        likes: 1890,
        comments: [
            { characterKey: 'rebel_clans_scout', text: 'Well said. Another tyrant, another throne that needs to be torn down.' }
        ],
        eventId: 'iron_hoof_day'
    },
    {
        id: 'bowser_iron_hoof_reaction',
        order: 217,
        characterKey: 'bowser',
        timestamp: '3 hours ago',
        content: `A parade of ponies? GWAHAHAHA! How terrifying! My Koopa Troop's marching drills could shatter their little city of friendship! This Celestia needs to learn what REAL power looks like!`,
        likes: 987,
        comments: [
            { characterKey: 'kamek', text: 'Indeed, your Malevolence. Their tactics lack a certain... fiery panache.' }
        ],
        eventId: 'iron_hoof_day'
    },
    {
        id: 'waluigi_iron_hoof_reaction',
        order: 216,
        characterKey: 'waluigi',
        timestamp: '4 hours ago',
        content: `WAH! A state-mandated parade with matching uniforms and no explosions? How BORING! This whole 'Iron Hoof Day' has no style! It needs more chaos! More purple! More WAH-luigi!`,
        likes: 1245,
        comments: [
            { characterKey: 'giggling_pete', text: 'Their order is so fragile! It begs to be pranked! Hee hee!' }
        ],
        eventId: 'iron_hoof_day'
    },
    {
        id: 'regal_delegate_iron_hoof',
        order: 215,
        characterKey: 'regal_empire_delegate',
        timestamp: '5 hours ago',
        content: `Observing the Equestrian 'Iron Hoof Day' celebrations. While their methods are... whimsical, the effectiveness of their state-controlled media and public displays of loyalty as a tool for maintaining social order is noted in my report to the Emperor.`,
        likes: 721,
        comments: [],
        eventId: 'iron_hoof_day'
    }
];

export const IRON_HOOF_DAY_EVENT = {
    id: 'iron_hoof_day',
    title: "Celestia's Iron Hoof Day",
    order: -1, // Newest event
    locationId: 'poi_wh_couronne', // Placeholder, Equestria isn't on a map yet
    description: "The annual state-mandated holiday in Equestria, celebrating the absolute autocratic rule of Queen Celestia. The day is marked by grand military parades and displays of loyalty, but is viewed by outsiders and dissidents as a symbol of oppression.",
    attendees: [
        { characterKey: 'queen_celestia', host: true, justification: "Immortal Sovereign and host of the celebration." },
        { characterKey: 'regal_empire_delegate', justification: "Attending as an official observer to study Equestrian methods of social control." },
        { characterKey: 'free_name_sarah', justification: "**[IN SECRET]** Coordinating with the 'Freedom Trotters' dissident network to document the regime's abuses during the holiday." }
    ],
    news_ids: ['wah_media_iron_hoof'],
    post_ids: IRON_HOOF_DAY_POSTS.filter(p => p.id !== 'wah_media_iron_hoof').map(p => p.id)
};