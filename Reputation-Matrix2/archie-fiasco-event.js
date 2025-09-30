// events/archie-fiasco-event.js

export const ARCHIE_FIASCO_POSTS = [
    {
        id: 'waluigi_recruitment_reaction',
        order: 257,
        characterKey: 'waluigi',
        timestamp: '1 minute ago',
        content: `WAH! The three-eyed amateur tries to copy my magnificent style of causing trouble! It's a clumsy attempt, but the result... *chef's kiss*... beautiful chaos! He learns from the best! You're welcome!`,
        likes: 412,
        comments: [],
        eventId: 'archie_fiasco'
    },
    {
        id: 'broker_recruitment_reaction',
        order: 256,
        characterKey: 'the_broker',
        timestamp: '5 minutes ago',
        content: `Market Analysis: A new, unsanctioned military force has been proposed. Probability of success: <1%. Probability of causing significant, profitable instability between at least four major factions: >95%. A sound, albeit unintentional, investment in chaos.`,
        likes: 350,
        comments: [],
        eventId: 'archie_fiasco'
    },
    {
        id: 'pete_recruitment_reaction',
        order: 255,
        characterKey: 'giggling_pete',
        timestamp: '8 minutes ago',
        content: `Hee hee! He offers them freedom from a test by making them join his army! It's a beautiful contradiction! A perfect, pointless gesture that unravels everything! The Jester is clapping!`,
        likes: 240,
        comments: [],
        eventId: 'archie_fiasco'
    },
    {
        id: 'penny_recruitment_reaction',
        order: 254,
        characterKey: 'detective_penny',
        timestamp: '12 minutes ago',
        content: `Case Notes: Archie Miser now attempting to raise a private army. Adding 'incitement to mutiny' and 'illegal military recruitment' to his file. The paperwork never ends. #CaseOfTheThreeEyedMenace`,
        likes: 198,
        comments: [],
        eventId: 'archie_fiasco'
    },
    {
        id: 'ironhand_recruitment_reaction',
        order: 253,
        characterKey: 'general_marcus_ironhand',
        timestamp: '15 minutes ago',
        content: `This anarchist thinks an army is a collection of rabble to be swayed by whims? An army is forged in discipline and loyalty, not poached with empty promises. This is why these fringe elements will always fail. Their foundation is sand.`,
        likes: 620,
        comments: [],
        eventId: 'archie_fiasco'
    },
     {
        id: 'mistveil_recruitment_reaction',
        order: 252,
        characterKey: 'mistveil',
        timestamp: '20 minutes ago',
        content: `First a loyalty test in a sewer, now a recruitment drive from a three-eyed madman. This war gets stranger by the day.`,
        likes: 315,
        comments: [],
        eventId: 'archie_fiasco'
    },
    {
        id: 'archie_recruitment_fiasco_post',
        order: 251, // Archie's original post is now older
        characterKey: 'archie',
        timestamp: '30 minutes ago',
        content: `Dang man, I admire the conviction but that seems pretty harsh dont you think? With that being said, here's a propasition. Toads, why don't you join MY army...or rather the other toad army instead? Yes, you'll still have fight for your lives...at least you won't be preasured into it right? Sounds more benefital yeah?; 🙂`,
        likes: 12,
        comments: [
            { characterKey: 'captain_toadette', text: "You dare attempt to poach my soldiers after they have faced a trial of loyalty? You are a parasite, Miser, feeding on the chaos of a war you do not comprehend. This insult will be remembered." },
            { characterKey: 'embercap', text: "We fight for a cause, for the memory of our Princess. You fight for nothing but your own amusement. Your offer is an insult to every soldier who has bled for this crusade." },
            { characterKey: 'dan', text: "@Archie We're not an 'army' to be recruited. We're a family, trying to build a safe home. We fight to protect that, not for the thrill. I thought you understood that. This is... disappointing." },
            { characterKey: 'toad_lee', text: "You think we are your pawns to be moved around a board. We are not. We are free toads. Try to use us again and you will find my axe is not so friendly." },
            { characterKey: 'chief_thornpaw', text: "The three-eyed one sows discord like a bitter seed. He does not build, he only breaks. This is a poor foundation for any group, let alone an army." },
            { characterKey: 'bowser', text: "MY army is fighting alongside these fanatics, and you're trying to start a THIRD army?! Made of TOADS?! Stop playing general, you three-eyed disaster, before you ruin everything!" },
            { characterKey: 'skull_cap_murphy', text: "Heh. I like this guy's style. Come join the Mushroom Skulls instead, little toads! We'll show ya real power." }
        ],
        eventId: 'archie_fiasco'
    }
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