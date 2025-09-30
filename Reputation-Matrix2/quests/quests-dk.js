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
            { id: 'step2', title: "Convince Chunky", status: 'active', description: "Chunky is hesitant to take a side. You need to convince him that Lanky's behavior is beyond the pale and that this is the only way forward." },
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
            { id: 'step1', title: "Find Lanky", status: 'active', description: "Lanky has been avoiding everyone. Find him and convince him to sit down and talk." },
            { id: 'step2', title: "The Talk", status: 'locked', description: "Try to break through Lanky's joking demeanor and make him understand the serious consequences of his actions for DK and the whole crew." },
            { id: 'step3', title: "Broker a Truce", status: 'locked', description: "Attempt to arrange a meeting between Lanky, Diddy, and Candy to see if an apology and a promise to change can prevent the crew from fracturing." }
        ]
    }
};