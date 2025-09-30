
// This file contains WAHbook posts for scripted events that trigger on specific in-game dates.
// The assembly-events-data.js file will check the current game date and load these posts accordingly.

export const SCHEDULED_POSTS = [
    // --- MONTH 1: HARVESTIDE, 1040 ---
    {
        id: 'event_war_onyx_vs_fawful',
        order: 300,
        scheduledDate: { year: 1040, monthIndex: 7, day: 5 },
        characterKey: 'lord_crimson',
        timestamp: 'Harvestide 5th',
        content: `A formal declaration from the Onyx Hand: The green nuisance known as Fawful has defiled a site of royal significance. His chaotic rule is an insult to all true monarchies. For the sake of stability in the Mushroom Kingdom, we shall intervene. Consider this an eviction notice.`,
        likes: 850,
        eventId: 'regency_fall'
    },
    {
        id: 'event_war_fawful_responds',
        order: 301,
        scheduledDate: { year: 1040, monthIndex: 7, day: 5 },
        characterKey: 'fawful',
        timestamp: 'Harvestide 5th',
        content: `I HAVE CHORTLES! The spooky, cape-wearing bores think they can evict ME?! Fawful?! My castle has the fury of a thousand angry beans! Their eviction notice will be returned... with extra scorching!`,
        likes: 999,
        eventId: 'regency_fall'
    },
    {
        id: 'event_war_onyx_vs_regal',
        order: 302,
        scheduledDate: { year: 1040, monthIndex: 7, day: 10 },
        characterKey: 'wah_media_collective',
        timestamp: 'Harvestide 10th',
        content: `**SHOCKING BETRAYAL!** Onyx Hand forces have launched a surprise assault on Regal Empire positions across the southern Midlands, shattering the centuries-old truce. Imperial command was caught completely off-guard. Reports indicate rapid vampire advances.`,
        image: 'banners/onyx_hand_banner.png',
        likes: 2100,
        eventId: 'vampire_war'
    },
    {
        id: 'event_war_koopa_vs_onyx',
        order: 303,
        scheduledDate: { year: 1040, monthIndex: 7, day: 20 },
        characterKey: 'bowser',
        timestamp: 'Harvestide 20th',
        content: `These vampire pests are getting in the way of MY conquest! The Mushroom Kingdom is MINE to conquer! I'm not letting a bunch of fanged weirdos steal my prize! KOOPA TROOP, SMASH!`,
        likes: 1850,
        eventId: 'regency_fall'
    },

    // --- MONTH 2: AETHEL, 1040 ---
    {
        id: 'event_war_regal_retreat',
        order: 304,
        scheduledDate: { year: 1040, monthIndex: 8, day: 8 },
        characterKey: 'general_marcus_ironhand',
        timestamp: 'Aethel 8th',
        content: `A tactical withdrawal from Port Toadstool West has been executed to consolidate our forces at Ironwood Forest. The vampire's cowardly surprise attack has cost them their credibility, but it will not grant them victory. The Legion will adapt, and the traitors will be hammered into dust.`,
        likes: 1200,
        eventId: 'vampire_war'
    },
    {
        id: 'event_war_moonfang_victory',
        order: 305,
        scheduledDate: { year: 1040, monthIndex: 8, day: 15 },
        characterKey: 'alpha_bloodmaw',
        timestamp: 'Aethel 15th',
        content: `The leeches thought they could hold our lands in Lockerwood. They were wrong. We have driven them from our forests. Let this be a warning. The wild cannot be tamed by the undead. AWOOOO!`,
        likes: 980,
        eventId: 'vampire_war'
    },
    {
        id: 'event_war_onyx_invasion',
        order: 306,
        scheduledDate: { year: 1040, monthIndex: 8, day: 25 },
        characterKey: 'wah_media_collective',
        timestamp: 'Aethel 25th',
        content: `**INVASION!** Onyx Hand naval forces have launched a massive, two-pronged assault, landing troops simultaneously in the western Mushroom Kingdom and the embattled Lockerwood province. Reports indicate their forces have already reached the outskirts of Ironwood Forest. The war has escalated dramatically.`,
        image: 'newspaper_airship.png',
        likes: 3500,
        eventId: 'vampire_war'
    },

    // --- MONTH 3: DARKMOON, 1040 ---
    {
        id: 'event_war_bowser_victory_mk',
        order: 307,
        scheduledDate: { year: 1040, monthIndex: 9, day: 10 },
        characterKey: 'bowser',
        timestamp: 'Darkmoon 10th',
        content: `GWAHAHAHA! The fanged freaks have been stomped out of the Mushroom Kingdom! They thought they could challenge ME on MY turf?! Pathetic! This is just a warm-up for when I take back what's mine!`,
        likes: 2200,
        eventId: 'regency_fall'
    },
    {
        id: 'event_war_regal_encirclement',
        order: 308,
        scheduledDate: { year: 1040, monthIndex: 9, day: 20 },
        characterKey: 'colonel_vera_steelstorm',
        timestamp: 'Darkmoon 20th',
        content: `The vampire forces at Ironwood Forest are now completely encircled. Their supply lines are cut. Their reckless advance has become their tomb. It is now a matter of time. Order will be restored.`,
        likes: 1800,
        eventId: 'vampire_war'
    },
    {
        id: 'event_war_regency_collapse',
        order: 309,
        scheduledDate: { year: 1040, monthIndex: 9, day: 28 },
        characterKey: 'wah_media_collective',
        timestamp: 'Darkmoon 28th',
        content: `**MUSHROOM KINGDOM COLLAPSES!** In a stunning turn of events, the combined pressure from Fawful's army and Bowser's resurgent forces has led to the complete collapse of both the Mushroom Regency and the Peach Loyalist military. Fawful and Bowser now stand as the two dominant powers in the war-torn kingdom.`,
        likes: 4100,
        eventId: 'regency_fall'
    },

    // --- MONTH 4: FROSTFALL, 1040 ---
    {
        id: 'event_war_ironwood_victory',
        order: 310,
        scheduledDate: { year: 1040, monthIndex: 10, day: 5 },
        characterKey: 'colonel_vera_steelstorm',
        timestamp: 'Frostfall 5th',
        content: `The Siege of Ironwood Forest is over. The Onyx Hand's ambition outstripped their supply lines. Their forces are broken. The War-Forged have secured a decisive victory for the Empire. Let this be a lesson: order is not a suggestion. It is an inevitability.`,
        likes: 2500,
        eventId: 'vampire_war'
    },
    {
        id: 'event_war_onyx_retreat_post',
        order: 311,
        scheduledDate: { year: 1040, monthIndex: 10, day: 6 },
        characterKey: 'lord_crimson',
        timestamp: 'Frostfall 6th',
        content: `The mortals celebrate their fleeting victory. A temporary setback. A single battle lost in a war that has spanned centuries. We have withdrawn to consolidate our power. They have merely postponed their inevitable subjugation.`,
        likes: 1100,
        eventId: 'vampire_war'
    },
    {
        id: 'event_war_bowser_truce',
        order: 312,
        scheduledDate: { year: 1040, monthIndex: 10, day: 15 },
        characterKey: 'bowser',
        timestamp: 'Frostfall 15th',
        content: `The green bean and I have come to an... understanding. The Mushroom Kingdom is big enough for two kings. For now. He stays in his castle, I get everything else. Seems fair to me! GWAHAHAHA!`,
        likes: 2300,
        eventId: 'regency_fall'
    },
    {
        id: 'event_war_fawful_truce',
        order: 313,
        scheduledDate: { year: 1040, monthIndex: 10, day: 16 },
        characterKey: 'fawful',
        timestamp: 'Frostfall 16th',
        content: `I HAVE AN AGREEMENT! The beefy turtle king has acknowledged my magnificent dominion over this castle of peaches! He can have the moldy countryside! I shall rule from this glorious throne, a beacon of brilliance in a sea of dumbness!`,
        likes: 1500,
        eventId: 'regency_fall'
    },
    {
        id: 'event_war_tyrant_treaty_news',
        order: 314,
        scheduledDate: { year: 1040, monthIndex: 10, day: 17 },
        characterKey: 'wah_media_collective',
        timestamp: 'Frostfall 17th',
        content: `**TREATY OF TWO TYRANTS!** Our sources confirm that Bowser and Fawful have signed a non-aggression pact, effectively partitioning the former Mushroom Kingdom. Fawful retains control of Peach's Castle and its immediate surroundings, while Bowser's Koopa Troop now controls the vast majority of the outer territories. The age of the Regency is officially over.`,
        image: 'banners/koopa_banner.png',
        likes: 3800,
        eventId: 'regency_fall'
    },
    {
        id: 'event_war_aftermath_toadsworth',
        order: 315,
        scheduledDate: { year: 1040, monthIndex: 10, day: 19 },
        characterKey: 'chancellor_toadsworth',
        timestamp: 'Frostfall 19th',
        content: `The Regency has fallen, but the spirit of the Mushroom Kingdom endures. We are now a government in exile, but we have not lost hope. We will rebuild. We will return. The age of tyrants will not last.`,
        likes: 1500,
        eventId: 'regency_fall'
    },
    {
        id: 'event_war_aftermath_toadette',
        order: 316,
        scheduledDate: { year: 1040, monthIndex: 10, day: 22 },
        characterKey: 'captain_toadette',
        timestamp: 'Frostfall 22nd',
        content: `They call it a collapse. I call it a tactical retreat. The Loyalists are scattered, but not broken. We now operate from the shadows, a resistance against all tyrants, be they green, spiky, or wearing a crown of lies. For the Princess!`,
        likes: 1250,
        eventId: 'regency_fall'
    },
    {
        id: 'event_war_aftermath_toad',
        order: 317,
        scheduledDate: { year: 1040, monthIndex: 10, day: 25 },
        characterKey: 'generic_toad',
        timestamp: 'Frostfall 25th',
        content: `So... who do we pay our taxes to now? Bowser's guys are demanding turnips for 'protection', and some weird robot with Fawful's face on it is asking for 'fury-fuel'. I miss the Regency. At least their forms were easy to fill out.`,
        likes: 2100,
        eventId: 'regency_fall'
    },
    {
        id: 'event_war_aftermath_ironhand',
        order: 318,
        scheduledDate: { year: 1040, monthIndex: 10, day: 28 },
        characterKey: 'general_marcus_ironhand',
        timestamp: 'Frostfall 28th',
        content: `The vampire menace has been driven back. Order is restored to the Imperial border. This victory was achieved not through reckless charges, but through disciplined strategy and attrition. Let the young officers of the War-Forged take note.`,
        likes: 1900,
        eventId: 'vampire_war'
    }
];
