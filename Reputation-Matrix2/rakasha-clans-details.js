// This file contains the detailed operational data for the Rakasha Clans' unique system display.

export const RAKASHA_DETAILS = {
    description: "The Rakasha are a deeply traditional and secretive people. To outsiders, all members are known simply as 'Rakasha' to protect their identity. True names are only shared with trusted allies. Their society is built around three major clans, each following a different philosophy or 'College of Thought.'",
    clans: [
        {
            id: 'spirit_walkers',
            name: 'Spirit-Walkers',
            sigil: 'icon_spirit.png',
            philosophy: 'College of the Unseen',
            philosophy_desc: 'Believe that the balance of the physical and spiritual worlds is paramount. They are the shamans, healers, and leaders who guide the clans with wisdom and foresight.',
            members: [
                { public_name: 'Rakasha', true_name: 'Chief Thornpaw', role: 'Leader' },
                { public_name: 'Rakasha', true_name: 'Elder Moon-Eye', role: 'Seer' },
                { public_name: 'Rakasha', true_name: 'Dan (student)', role: 'Acolyte' }
            ]
        },
        {
            id: 'beast_riders',
            name: 'Beast-Riders',
            sigil: 'icon_offense.png',
            philosophy: 'College of the Claw',
            philosophy_desc: 'Hold that strength and martial prowess are the highest virtues. They are the warriors and protectors of the clans, forming deep bonds with their animal mounts and seeking glory in battle.',
            members: [
                { public_name: 'Rakasha', true_name: 'Warchief Ironmane', role: 'Champion' },
                { public_name: 'Rakasha', true_name: 'Kira Blood-Tusk', role: 'Rider Captain' },
                { public_name: 'Rakasha', true_name: 'Gorok Stone-Hide', role: 'Mount Master' }
            ]
        },
        {
            id: 'huntmasters',
            name: 'Huntmasters',
            sigil: 'icon_scout.png',
            philosophy: 'College of the Wild',
            philosophy_desc: 'Value survival, pragmatism, and a deep understanding of the natural world. They are the scouts, trackers, and providers who ensure the clans endure any hardship.',
            members: [
                { public_name: 'Rakasha', true_name: 'Silent-Step', role: 'Master Tracker' },
                { public_name: 'Rakasha', true_name: 'Asha Whisperwind', role: 'Lead Scout' }
            ]
        }
    ]
};
