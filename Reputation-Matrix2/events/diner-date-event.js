export const DINER_POSTS = [
    {
        id: 'wah_media_diner_exclusive',
        order: 10020, // was 210 — bump to top
        characterKey: 'wah_media_collective',
        timestamp: 'Just Now',
        content: `**EXCLUSIVE: SHADOW ACCORD IN THE CAPITAL!** A mysterious figure calling himself 'Mr. Wario', bearing a striking resemblance to the late treasure hunter, held a private dinner with anarchist superstar Waluigi and diplomat Lady Toriel. Is this Wario returned from the grave under a new guise, or a new player entirely? The Imperial Core is reportedly 'apoplectic'. Full story developing.`,
        image: 'diner_date.png',
        image_alt: "A grainy, long-distance photo of Waluigi, a large figure in a suit resembling Wario, and a goat-like woman at a fancy restaurant.",
        likes: 2341,
        comments: [
            { characterKey: 'generic_toad', text: "Wait, Wario's back?! But he's calling himself 'Mr. Wario'? Is that supposed to be a disguise? I'm so confused." },
            { characterKey: 'the_broker', text: "The game has changed. Adjust your portfolios accordingly." }
        ]
    },

    // --- NEW POSTS (kept, orders bumped) ---
    {
        id: 'angel24_time_freeze',
        order: 10019, // was 209
        characterKey: 'angel_24',
        timestamp: 'Just Now',
        content: `Service guarantee honored. Time suspended for convenience. No injuries reported. All orders fulfilled immediately. Please tip.`,
        likes: 1022,
        comments: [
            { characterKey: 'freelancer_spy_1', text: "Witness confirmed: bartender froze time at a Capital bar—doors opened, chase concluded. Unprecedented." }
        ],
        eventId: 'capital_diner'
    },
    {
        id: 'green_t_ring_heist',
        order: 10018, // was 208
        characterKey: 'wah_media_collective',
        timestamp: 'Just Now',
        content: `Grand Market scandal! A Legion noble's heirloom ring was 'liberated' from a horse after a cheese-laced laxative plan went... everywhere. Green T snagged the prize while others gagged. Rumor: he offered Eager's whereabouts in exchange for the real ring.`,
        likes: 1887,
        comments: [
            { characterKey: 'generic_toad', text: "I’m never eating cheese again." },
            { characterKey: 'donkey_kong', text: "Who hides laxatives in cheese?! That's criminal! ...unless it's for pranks." }
        ],
        eventId: 'capital_diner'
    },
    {
        id: 'archie_writeman_spotted',
        order: 10017, // was 207
        characterKey: 'wah_media_collective',
        timestamp: '2 minutes ago',
        content: `An 'Archie Writeman' whispered to a companion, insisted he isn't the infamous three-eyed bandit, then almost blew his cover. Fashion note: gray suits are in; panic is out.`,
        likes: 750,
        comments: [
            { characterKey: 'diamond_city_investigators', text: "Alias flagged. Cross-referencing footage." },
            { characterKey: 'waluigi', text: "WAH! Gray suit? Very respectable. Very boring." }
        ],
        eventId: 'capital_diner'
    },
    {
        id: 'hjumpik_dk_overheard',
        order: 10016, // was 206
        characterKey: 'freelancer_spy_1',
        timestamp: '5 minutes ago',
        content: `Intercept: Donkey Kong was overheard on a call near the Capital venue. Topic murky—trade? Market games? Inside moves? The timing is suspicious.`,
        likes: 612,
        comments: [
            { characterKey: 'king_k_rool', text: "Heh! Monkey business is always about the market." }
        ],
        eventId: 'capital_diner'
    },
    {
        id: 'fng_market_blunder',
        order: 10015, // was 205
        characterKey: 'wah_media_collective',
        timestamp: '10 minutes ago',
        content: `FNG tried to deliver 'special seeds' to a herbal toad. Iron Legion intercepted the package—too late. The toad swallowed the goods and dipped. Gross? Yes. Effective? Also yes.`,
        likes: 973,
        comments: [
            { characterKey: 'regal_empire_delegate', text: "Agricultural contraband is a public safety concern." }
        ],
        eventId: 'capital_diner'
    },
    {
        id: 'noble_ring_bounty',
        order: 10014, // was 204
        characterKey: 'wah_media_collective',
        timestamp: '30 minutes ago',
        content: `At Mighdural’s Grand Market, a Legion noble promised to 'pass any law' for a ring recovery. Horse’s owner: "Let nature take its course." Outcome: chaos.`,
        likes: 1198,
        comments: [
            { characterKey: 'iron_legion_officer', text: "Officially, we do not endorse... cheese solutions." }
        ],
        eventId: 'capital_diner'
    },

    // ... existing Capital Dinner posts (orders bumped) ...
    {
        id: 'lady_toriel_diner_statement',
        order: 10013, // was 204
        characterKey: 'lady_toriel',
        timestamp: '5 hours ago',
        content: "My duty is to the people of Lockerwood, not to the political posturing of the Imperial Core. I will meet with anyone who can guarantee my province's prosperity and security. The Empire has failed to do so.",
        likes: 1150,
        comments: [
            { characterKey: 'regal_empire_delegate', text: "Lady Toriel, your choice of dinner companions is... concerning. We must discuss this at the next Diet session." }
        ],
        eventId: 'capital_diner'
    },
    {
        id: 'generic_toad_diner_gossip',
        order: 10012, // was 203
        characterKey: 'generic_toad',
        timestamp: '4 hours ago',
        content: "Did you see who Lady Toriel was having dinner with? It looked like Wario, but everyone's calling him 'Mr. Wario'. Is he trying to be fancy now?",
        likes: 789,
        comments: [],
        eventId: 'capital_diner'
    },
    {
        id: 'freelancer_spy_diner_intel',
        order: 10011, // was 202
        characterKey: 'freelancer_spy_1',
        timestamp: '4 hours ago',
        content: "Intel chatter is off the charts. The dinner wasn't just a meal. Wario is consolidating his old networks under a new name. Waluigi provides the chaos as cover. Toriel gives them legitimacy. This is a coordinated power play.",
        likes: 642,
        comments: [],
        eventId: 'capital_diner'
    },
    {
        id: 'waluigi_diner_date_1',
        order: 190,
        characterKey: 'waluigi',
        timestamp: '11 hours ago',
        content: "WAH! A magnificent dinner with my magnificent new business partner, the very serious and very not-Wario, Mr. Wario! He has style! And money! Forget the old Wario, this one is going places! The future is purple! WAH-HA-HA!",
        image: 'diner_mess.png',
        image_alt: "A half-eaten, very expensive-looking steak dinner with gravy spilled all over a white tablecloth.",
        likes: 999,
        comments: [
            { characterKey: 'giggling_pete', text: "A feast of chaos! The Jester approves!" }
        ],
        eventId: 'capital_diner'
    },
    {
        id: 'wario_diner_date_1',
        order: 189,
        characterKey: 'wario',
        timestamp: '12 hours ago',
        content: "A productive dinner. Let's be clear: I am Mr. Wario. The garlic-addled fool you once knew is gone. This is a new era of business. More ruthless. More profitable.",
        likes: 342,
        comments: [
            { characterKey: 'lario', text: "IT'S A FAKE MUSTACHE, YOU'RE NOT FOOLING ANYONE!" },
            { characterKey: 'detective_penny', text: "'Mr. Wario'. Right. And I'm the Queen of Sarasaland." }
        ],
        eventId: 'capital_diner'
    },
    {
        id: 'toriel_diner_date_1',
        order: 188,
        characterKey: 'lady_toriel',
        timestamp: '13 hours ago',
        content: "A most... spirited dinner welcoming our new arrivals to the capital, the enigmatic Waluigi and a businessman who introduces himself as 'Mr. Wario'. Their table manners leave something to be desired, but we had a very productive discussion regarding mutual interests in Lockerwood. I do hope the gravy stains come out of the tablecloth.",
        likes: 412,
        comments: [
            { characterKey: 'regal_empire_delegate', text: "Lady Toriel, your choice of dinner companions is... concerning. We must discuss this at the next Diet session." }
        ],
        eventId: 'capital_diner'
    },
    {
        id: 'theron_diner_reaction',
        order: 200,
        characterKey: 'archmage_theron',
        timestamp: '5 hours ago',
        content: "That Waluigi creature practices a form of unsanctioned, chaotic magic. That he now gains political allies is a grave concern. The Aegis Magi have been alerted.",
        likes: 613,
        comments: [],
        eventId: 'capital_diner'
    },
    {
        id: 'wah_media_diet_split',
        order: 199,
        characterKey: 'wah_media_collective',
        timestamp: '6 hours ago',
        content: "Sources inside the Holy Midlands Diet say the 'Diner Date' has caused a split in the Heartland Alliance, with some provinces supporting Toriel's pragmatism and others fearing Imperial retribution. The swing vote of the Diet is now in turmoil.",
        likes: 987,
        comments: [],
        eventId: 'capital_diner'
    },
    {
        id: 'penny_diner_reaction',
        order: 198,
        characterKey: 'detective_penny',
        timestamp: '6 hours ago',
        content: "'Mr. Wario'? The disguise is as flimsy as his alibis. This is just Wario's next, and most audacious, con. The case continues to build. #CaseOfTheGreedyGhost",
        likes: 765,
        comments: [],
        eventId: 'capital_diner'
    },
    {
        id: 'lario_diner_reaction',
        order: 197,
        characterKey: 'lario',
        timestamp: '7 hours ago',
        content: "My brother is back AND he's pretending to be someone else?! 'Mr. Wario'? What's that supposed to mean? Is he trying to cut me out of the family name now too?!",
        likes: 411,
        comments: [],
        eventId: 'capital_diner'
    },
    {
        id: 'waluigi_diner_fans',
        order: 196,
        characterKey: 'waluigi',
        timestamp: '7 hours ago',
        content: "To all my new fans in the capital: WAH! Yes, the rumors are true! I am magnificent! And I am just getting started! Get ready for a purple reign of beautiful chaos!",
        likes: 1599,
        comments: [],
        eventId: 'capital_diner'
    },
    {
        id: 'wario_diner_business',
        order: 195,
        characterKey: 'wario',
        timestamp: '8 hours ago',
        content: "To my former business associates: contracts are being reviewed. Expect a call from Mr. Wario's office. Loyalty will be rewarded. Betrayal will be... liquidated.",
        likes: 1024,
        comments: [],
        eventId: 'capital_diner'
    },
    {
        id: 'toriel_diner_toast',
        order: 194,
        characterKey: 'lady_toriel',
        timestamp: '8 hours ago',
        content: "A toast to new partnerships. May they be as fruitful as the fields of Lockerwood.",
        likes: 940,
        comments: [],
        eventId: 'capital_diner'
    },
    {
        id: 'pete_diner_joke',
        order: 193,
        characterKey: 'giggling_pete',
        timestamp: '9 hours ago',
        content: "A financier, an anarchist, and a diplomat walk into a restaurant... Hee hee! The Jester loves this setup! The punchline is going to be magnificent!",
        likes: 666,
        comments: [],
        eventId: 'capital_diner'
    },
    {
        id: 'rebel_diner_reaction',
        order: 192,
        characterKey: 'rebel_clans_scout',
        timestamp: '9 hours ago',
        content: "The Empire is panicked by a dinner party. Good. Let them chase shadows in the capital while we strike at their supply lines in the provinces.",
        likes: 810,
        comments: [],
        eventId: 'capital_diner'
    },
    {
        id: 'steelstorm_diner_reaction',
        order: 10010, // was 201
        characterKey: 'colonel_vera_steelstorm',
        timestamp: '5 hours ago',
        content: "This 'Mr. Wario' is clearly the original article. The change in moniker is a transparent attempt at rebranding. It changes nothing. He is a known criminal entity. We are monitoring.",
        likes: 530,
        comments: [],
        eventId: 'capital_diner'
    }];
export const DINER_EVENT = {
    id: 'capital_diner',
    title: "The Capital Dinner",
    order: 0, // Makes it the newest event
    locationId: 'poi_mid_capital_district',
    description: "A clandestine dinner held in the Imperial Capital between the returned underworld financier 'Mr. Wario', the anarchist Waluigi, and the respected neutral diplomat Lady Toriel of Lockerwood. The meeting sent shockwaves through the political landscape, signaling the formation of a new, unpredictable power bloc.",
    attendees: [
        { characterKey: 'waluigi', host: true, justification: "Co-host and master of chaos." },
        { characterKey: 'wario', host: true, justification: "Co-host and returned underworld financier... or so he claims." },
        { characterKey: 'lady_toriel', justification: "Attending as a neutral diplomat representing Lockerwood's interests." }
    ],
    news_ids: ['wah_media_diner_exclusive'],
    post_ids: DINER_POSTS.filter(p => p.id !== 'wah_media_diner_exclusive').map(p => p.id)
};
