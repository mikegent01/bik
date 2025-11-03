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
        is_updated: false, // This quest has been updated
        objective: "Recover the Star of Radiance, Fire Crystal, and Mushroom of Life—three legendary artifacts that hold the power to restore balance to the world. However, the journey will be fraught with peril, as a powerful evil toad has obtained the Star of Radiance, ascending to godhood.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "This quest was revealed in ancient texts found in the Vigilance's library.",
        steps: [
            { id: 'step1', title: "The Star of Radiance – The Rise of a God", status: 'active', description: "This legendary artifact has already fallen into the hands of the Evil Toad. He has absorbed its power, becoming something far beyond mortal comprehension. His influence has begun warping reality itself.", options: ["Find a way to weaken the Toad-God before challenging him directly.", "Seek out an ancient force that may counterbalance the power of the Star.", "Risk a head-on battle in his newly formed celestial domain."] },
            { 
                id: 'step1a', 
                title: "The Madhouse at Raventree", 
                status: 'completed', // This part of the story is now complete
                description: "The party's stay at the Oracle's Manor culminated in a day of extreme violence. After Remi shot down a wyvern carrying Waluigi and Green T, the group was lured into a greenhouse and trapped by the Oracle and Green T. An ambush by rust monsters led to a chaotic battle in the burning structure, ending only when Archie unleashed a massive fireball, destroying the greenhouse to save Eager. The party survived but was left battered and scattered in the ashes.", 
            },
            {
                id: 'step1b',
                title: "The Serpent's Key",
                status: 'active', // This is the new active objective
                description: "In the aftermath of the greenhouse fire, Green T appeared and gave Markop a mysterious golden key, claiming it was a gesture of trust. He has offered to meet later to 'find out what the mansion's hiding.' The party is wounded and deeply suspicious, but the key represents their only lead to understanding the Oracle's true nature and Green T's endgame.",
                options: ["Agree to meet Green T and trust his information.", "Refuse the meeting and attempt to investigate the purpose of the key independently.", "Ignore Green T's plot and confront the Oracle directly about the trap."]
            },
            { id: 'step2', title: "The Fire Crystal – The Molten Depths", status: 'locked', description: "The Fire Crystal is hidden deep within a volcanic dungeon, guarded by an ancient fire dragon and its cult. They believe the crystal to be the heart of their god.", options: ["Infiltrate the cult and steal the crystal from within.", "Slay the dragon and take the crystal by force.", "Bargain with the dragon—what does an immortal beast truly desire?"] },
            { id: 'step3', title: "The Mushroom of Life – The Forbidden Grove", status: 'locked', description: "This artifact rests within the heart of a cursed forest that distorts time, protected by ancient beings. The party must find a way to travel to the Wilderlands to retrieve it.", options: ["Pass the guardians' trials—tests of wisdom, strength, and sacrifice.", "Use magic or forbidden means to forcefully take the Mushroom.", "Bargain with the Elders—perhaps they desire something in return."] }
        ],
        finalDecision: { description: "Once all three artifacts are gathered, a choice must be made. Use them to restore balance, breaking the Toad-God’s power and healing the realm, or use them for yourself, risking corruption but ascending to a higher form of existence." }
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