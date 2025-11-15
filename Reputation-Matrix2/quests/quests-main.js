export const MAIN_QUESTS = {
    'retrieve_the_staff': {
        id: 'retrieve_the_staff',
        title: "The Brandished Staff",
        type: 'main',
        category: 'Main Story',
        objective: "The staff's chaotic power has been unleashed. Dan's attempt to reclaim it resulted in a magical outburst, killing 13 of the newly freed toads. After a violent struggle, the staff is now in the hands of Toad Lee, and a fragile vow has been sworn by the new toads to protect it. The party must now deal with the staff's corrupting influence, the political crisis with the 137 new toads, and find a way to either cleanse the staff or contain its power before it corrupts another wielder.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "active",
        motivation: "The ship is limping along on half power, and the Iron Binding is an unknown piece of magitek that could allow the Legion to control or disable the Vigilance remotely. More urgently, the staff's raw power is a corrupting influence that has already caused a tragedy and threatens to tear the crew apart.",
        steps: [
            { id: 'step1', title: "Assess the Seal", status: 'completed', description: "The staff is back in the core, but it's been tampered with. Waluigi and Markop's Rakasha stone have identified the modification as an 'Iron Binding' seal, which chokes the staff's power output to 50%." },
            { id: 'step1a', title: "The Vigilance Catastrophe", status: 'completed', description: "Dan's desperate attempt to reclaim the staff from the power core resulted in a magical catastrophe. Overwhelmed by its power, he unleashed a fireball that killed 13 of the newly freed toads. In the ensuing chaos, the staff was secured by Toad Lee." },
            { id: 'step2', title: "Find a Counter-Measure", status: 'active', description: "The binding is a fusion of magic and technology, and its corrupting influence is now undeniable. The party must find an expert who can break it without causing another disaster. Potential candidates include a Mages' Guild 'Innovator', a high-level Ratchet Raider Mekboy, or a Rakasha shaman who understands this 'fancy little trick'." },
            { id: 'step2a', title: "A Fragile Vow", status: 'active', description: "The 137 newly freed toads, now calling themselves the 'First Cohort of Renewal', have sworn a vow to protect the staff. Their vengeful leader, L, must be carefully managed to maintain the uneasy peace." },
            { id: 'step3', title: "Purge the Corruption", status: 'locked', description: "Apply the counter-measure and purge both the Iron Legion's seal and the chaotic sentience from the staff, restoring full power and security to the Vigilance." }
        ]
    },
'artifacts_of_balance': {
        id: 'artifacts_of_balance',
        title: "The Artifacts of Balance",
        type: 'main',
        category: 'Main Story',
        is_updated: false,
        objective: "The party must recover the Star of Radiance, but the path is now treacherous. One fragment bearer, The Oracle, has been revealed as the center of a temporal war. After navigating a living maze, Markop's group has discovered a book detailing four identical manors existing in different time periods. The key to confronting the Oracle and securing the Vision Shard lies within this mystery.",
        assignee: "Full Party (Led by Markop)",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "This quest was revealed in ancient texts found in the Vigilance's library.",
        steps: [
            { id: 'step1', title: "The Star of Radiance – The Rise of a God", status: 'active', description: "The first artifact has already been claimed by the Evil Toad, who has ascended to godhood. He is a cosmic-level threat that must be dealt with eventually." },
            { id: 'step1a', title: "The Madhouse at Raventree", status: 'completed', description: "The party's stay at the Oracle's Manor culminated in the 'Greenhouse Inferno,' a battle that left them wounded and revealed the house's hostile, supernatural nature." },
            { 
                id: 'step1b', 
                title: "The War Across Time", 
                status: 'completed', 
                description: "Following Green T, Markop and Bowser navigated a living hedge maze to a hidden, abandoned version of the manor. There, they were confronted by ghosts and discovered a book of obituaries for 'The Oracle,' revealing a secret war between rival Oracle families across four different time periods for control of the estate." 
            },
            {
                id: 'step1c',
                title: "Find the Missing Page",
                status: 'active', // This is the new active objective
                description: "The book of obituaries is the key, but the final, crucial page detailing how to travel between the time-displaced manors has been violently ripped out. The party must now find this missing page to have any hope of navigating the temporal war and confronting the true Oracle.",
                options: [
                    "Interrogate the ghosts within the manor for clues.",
                    "Search the Oracle's personal chambers for the missing page.",
                    "Confront Green T, believing he knows more than he has revealed."
                ]
            },
            { id: 'step1d', title: "Confront the True Oracle", status: 'locked', description: "Once the method of temporal travel is understood, navigate the four manors, win the war for the correct Oracle family, and secure the Vision Shard." },
            { id: 'step2', title: "The Fire Crystal – The Molten Depths", status: 'locked', description: "The Fire Crystal is hidden deep within a volcanic dungeon, guarded by an ancient fire dragon and its cult." },
            { id: 'step3', title: "The Mushroom of Life – The Forbidden Grove", status: 'locked', description: "This artifact rests within the heart of a cursed forest that distorts time, protected by ancient beings." }
        ],
        finalDecision: { description: "Once all three artifacts are gathered, a choice must be made: use them to restore balance or seize their power for yourself." }
    },
'who_killed_peach': {
        id: 'who_killed_peach',
        title: "The Princess's Lasting Shadow",
        type: 'main',
        category: 'Main Story',
        is_updated: false,
        objective: "Captain Toadette's crusade for justice has taken a brutal and pragmatic turn. After a costly victory at Bramblehaven, she has realized that her forces alone are insufficient to breach Fawful's main fortress. She must now navigate the treacherous political landscape to forge an alliance of convenience, no matter how distasteful, to achieve her ultimate goal: uncovering the truth behind Peach's death.",
        assignee: "Peach Loyalists",
        assigneeKey: 'peach_loyalists',
        status: "active",
        start_condition: "A fragile truce was brokered between the Koopa Troop remnants and the Peach Loyalists.",
        steps: [
            { id: 'step1', title: "A Secret Revealed", status: 'completed', description: "During an intelligence mission at Fawful's Gala, Loyalist scouts learned of a hidden hatch in the late Princess's private chambers, providing their first concrete lead." },
            { id: 'step2', title: "The Siege of Bramblehaven", status: 'completed', description: "The Loyalists launched a full-scale assault on the Fawful-held town of Bramblehaven. The victory was total but costly, revealing the fanatical resolve of Fawful's forces and the shocking use of a robotic decoy for the town's mayor." },
            { 
                id: 'step3', 
                title: "The Wizard's Gambit", 
                status: 'active', 
                description: "Toadette's diplomatic envoy to the Koopa Troop was intercepted. The formidable magikoopa Kamek has returned to power, and he now holds her proposed ceasefire terms. He has publicly acknowledged her 'amusing' offer, forcing her into a negotiation where he holds all the cards. The alliance is possible, but the price will be steep.",
                options: [
                    "Enter into treacherous negotiations with Kamek, knowing he has the upper hand.",
                    "Attempt a high-risk intelligence operation to discover Kamek's weaknesses before meeting.",
                    "Publicly reject Kamek's condescending tone and prepare for a three-way war."
                ]
            },
            { id: 'step4', title: "Breach the Castle", status: 'locked', description: "With or without allies, launch the assault on Fawful's fortress." },
            { id: 'step5', title: "Find the Hatch", status: 'locked', description: "Navigate the twisted corridors of the occupied castle to locate the secret hatch in the Princess's chambers." },
            { id: 'step6', title: "Confront the Truth", status: 'locked', description: "Once the secrets of the hatch are revealed, confront the true culprit or circumstances behind the Princess's death." }
        ]
    },
};