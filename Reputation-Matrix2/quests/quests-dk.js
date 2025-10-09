// This file contains all personal quests for the DK Crew.
export const DK_QUESTS = {
    'diddy_motion_expulsion': {
        id: 'diddy_motion_expulsion',
        title: "A Motion for Expulsion",
        type: 'npc_plot',
        category: 'NPC Plot - DK Crew',
        objective: "Lanky Kong has become a liability to the crew and a disgrace to the Kong name. Gather support from the other senior Kongs to formally motion for his expulsion from the DK Crew at the next board meeting.",
        assignee: "Diddy Kong",
        assigneeKey: 'diddy_kong',
        status: "ongoing",
        motivation: "This isn't about a simple prank; Lanky's actions caused a real diplomatic and economic crisis. He embarrassed us all and refuses to take responsibility. For the good of the crew and our family's reputation, he has to go. The party could potentially mediate this dispute, take a side, or exploit the chaos for their own gain.",
        steps: [
            { id: 'step1', title: "Secure Candy's Support", status: 'completed', description: "Candy Kong, once Lanky's biggest advocate, is appalled by his conduct and has already agreed to support the motion." },
            { id: 'step2', title: "Convince Chunky", status: 'active', description: "Your attempt to sway Chunky has failed. He's convinced he can 'fix' Lanky and is now actively working against you by trying to broker a truce. This is a significant setback; without Chunky, the motion is dead in the water. You'll need to either find leverage against him or sabotage his mediation attempt." },
            { id: 'step3', title: "Call the Vote", status: 'locked', description: "With enough support, formally call for a vote at the next family meeting to expel Lanky Kong." }
        ]
    },
    'chunky_mediation': {
        id: 'chunky_mediation',
        title: "Smooth Rough Waters",
        type: 'npc_plot',
        category: 'NPC Plot - DK Crew',
        objective: "Donkey Kong has asked you to talk to Lanky. Have a beer with him, try to get him to understand the gravity of the situation, and convince him to apologize before Diddy and Candy have him kicked out of the crew for good.",
        assignee: "Chunky Kong",
        assigneeKey: 'chunky_kong',
        status: "ongoing",
        motivation: "You've always had a way with Lanky. You guys have history. The family is about to tear itself apart, and DK is counting on you, the gentle giant, to be the voice of reason and hold things together. The party's intervention could either help or hinder this delicate mediation.",
        steps: [
            { id: 'step1', title: "Find Lanky", status: 'completed', description: "With the party's help, you tracked Lanky to his private treehouse hideaway. It took some doing to get past his prank-based security system, but you managed to get him to sit down." },
            { id: 'step2', title: "The Talk", status: 'completed', description: "Success! Lanky tried to deflect with his usual gags, but your earnest plea (and a rather blunt assessment from the party) finally broke through his defenses. He sees how much trouble he's in and has agreed, reluctantly, to apologize." },
            { id: 'step3', title: "Broker a Truce", status: 'active', description: "This is the hard part. You've set up a meeting with Diddy and Candy. You need to be there to make sure Lanky's apology comes off as sincere and to prevent Diddy from escalating the conflict. The future of the DK Crew is on the line." }
        ]
    }
};