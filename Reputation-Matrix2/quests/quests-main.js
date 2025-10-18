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
        is_updated: true, // ADDED
        objective: "Recover the Star of Radiance, Fire Crystal, and Mushroom of Life—three legendary artifacts that hold the power to restore balance to the world. However, the journey will be fraught with peril, as a powerful evil toad has obtained the Star of Radiance, ascending to godhood.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "This quest was revealed in ancient texts found in the Vigilance's library.",
        steps: [
            { id: 'step1', title: "The Star of Radiance – The Rise of a God", status: 'active', description: "This legendary artifact, known for its celestial energy, has already fallen into the hands of the Evil Toad. He has absorbed its power, becoming something far beyond mortal comprehension. His influence has begun warping reality itself—skies twist with unnatural storms, the land cracks, and the laws of magic shift unpredictably.", options: ["Find a way to weaken the Toad-God before challenging him directly.", "Seek out an ancient force that may counterbalance the power of the Star.", "Risk a head-on battle in his newly formed celestial domain."] },
            { id: 'step1a', title: "The Oracle's Manor", status: 'active', description: "The haunted manor has been revealed as the sanctuary of 'Self Reflection - The Oracle', one of the Star Fragment bearers... (description truncated for brevity)" },
            { id: 'step1b', title: "The Shadeward Betrayal", status: 'completed', description: "A group of Liberated Toads entered the nearby Shadeward Mansion seeking Archie. Instead, they were ensnared in a time-looping dinner party hosted by the Oracle. The event devolved into chaos with the appearance of an Archie clone, a robot double, and an Iron Legion raid led by Mr. Wario. The raid was a setup, facilitated by a traitor toad who helped capture Bones. After a desperate fight and negotiation, the survivors escaped, but their trust in each other is shattered, and the wounded traitor's fate hangs in the balance. The Oracle's parting words—'May your Archie disappear without a trace'—suggest a deeper, more sinister game is afoot.", options: ["This quest step is complete, but its consequences will affect all future actions."] },
            { id: 'step2', title: "The Fire Crystal – The Molten Depths", status: 'locked', description: "The Fire Crystal is hidden deep within a volcanic dungeon, guarded by an ancient fire dragon and its cult. They believe the crystal to be the heart of their god.", options: ["Infiltrate the cult and steal the crystal from within.", "Slay the dragon and take the crystal by force.", "Bargain with the dragon—what does an immortal beast truly desire?"] },
            { id: 'step3', title: "The Mushroom of Life – The Forbidden Grove", status: 'locked', description: "This artifact rests within the heart of a cursed forest that distorts time, protected by ancient beings... (description truncated for brevity)" }
        ],
        finalDecision: { description: "Once all three artifacts are gathered, a choice must be made. Use them to restore balance, breaking the Toad-God’s power and healing the realm, or use them for yourself, risking corruption but ascending to a higher form of existence." }
    },
    'who_killed_peach': {
        id: 'who_killed_peach',
        title: "The Princess's Lasting Shadow",
        type: 'main',
        category: 'Main Story',
        is_updated: true, // ADDED
        objective: "Captain Toadette and the Peach Loyalists are relentlessly pursuing the conspiracy behind Princess Peach's death. Believing Fawful is a key player, their primary goal is to breach Peach's Castle and uncover the truth hidden within. Their methods have grown increasingly ruthless as their desperation for justice intensifies.",
        assignee: "Peach Loyalists",
        assigneeKey: 'peach_loyalists',
        status: "active",
        start_condition: "A fragile truce was brokered between the Koopa Troop remnants and the Peach Loyalists.",
        steps: [
            { id: 'step1', title: "Infiltrate the Madhouse", status: 'completed', description: "Loyalist scouts Embercap and Mistveil successfully infiltrated Fawful's Grand Gala at the occupied castle to gather intelligence." },
            { id: 'step2', title: "A Secret Revealed", status: 'completed', description: "During the gala, the scout Mistveil made contact with Chief Thornpaw, who revealed a stunning secret: a hidden hatch in the Princess's private chambers. This provided the Loyalists their first concrete lead, though the mission ended in chaos where Embercap was briefly presumed dead." },
            { id: 'step3', title: "Sewer Infiltration Attempt", status: 'completed', description: "Following a lead from the assassinated mayor's office, Loyalist forces led by Embercap attempted to find a secret entrance to the castle through the sewers beneath Toad Town. The mission failed, the path was blocked, but they recovered a cryptic note hinting at a wider conspiracy." },
            { id: 'step4', title: "The Siege of Toad Town", status: 'active', description: "Unable to find a covert route, Captain Toadette has changed tactics. The Loyalists have seized control of Toad Town, brutally suppressing any dissent and transforming it into a forward operating base. Their current objective is to consolidate their power and prepare for a direct assault on Peach's Castle.", options: ["Continue fortifying Toad Town and training recruits for the siege.", "Launch scouting missions to find weaknesses in the castle's outer defenses.", "Attempt to sabotage Fawful's supply lines before the main assault begins."] },
            { id: 'step5', title: "Breach the Castle", status: 'locked', description: "Launch the full-scale assault on Peach's Castle to find the secret hatch." },
            { id: 'step6', title: "Confront the Truth", status: 'locked', description: "Once the secrets of the hatch are revealed, confront the true culprit or circumstances behind the Princess's death." }
        ]
    },
};