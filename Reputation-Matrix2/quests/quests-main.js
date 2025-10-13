

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
        objective: "Recover the Star of Radiance, Fire Crystal, and Mushroom of Life—three legendary artifacts that hold the power to restore balance to the world. However, the journey will be fraught with peril, as a powerful evil toad has obtained the Star of Radiance, ascending to godhood.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "This quest was revealed in ancient texts found in the Vigilance's library.",
        steps: [
            { id: 'step1', title: "The Star of Radiance – The Rise of a God", status: 'active', description: "This legendary artifact, known for its celestial energy, has already fallen into the hands of the Evil Toad. He has absorbed its power, becoming something far beyond mortal comprehension. His influence has begun warping reality itself—skies twist with unnatural storms, the land cracks, and the laws of magic shift unpredictably.", options: ["Find a way to weaken the Toad-God before challenging him directly.", "Seek out an ancient force that may counterbalance the power of the Star.", "Risk a head-on battle in his newly formed celestial domain."] },
            { 
                id: 'step1a', 
                title: "The Oracle's Manor", 
                status: 'active', 
                description: "The haunted manor has been revealed as the sanctuary of 'Self Reflection - The Oracle', one of the Star Fragment bearers. Possessing the 'Vision Shard', which grants foresight and the ability to view past events, the Oracle is a former scholar whose consciousness has expanded beyond linear time. The party discovered him half-stuck in the floorboards shortly before he apologized to Markop for animating his clothes. The exploration of his home descended into chaos. After rescuing a trapped Archie, the group was separated. Markop and Remi found Waluigi and Dan battling a swarm of haunted, flaming books. During the fiery confrontation, Waluigi's magic exacerbated the blaze before they finally vanquished the tomes. From the ashes, Dan claimed 'Magitek Theory Vol. IV' and Remi took 'The Silent Service: A Primer'. Meanwhile, Archie explored the second floor, discovering a cryptic message—'Helpeless... Beweare the T...'—and retrieving a dusty wine bottle. The party eventually regrouped with Bowser and Eager, who were preparing supplies. Humpik, shouting for the 'three-eyed bandit', caused a hidden door to open in a collapsed passage. The party also recovered some of Markop's personal effects, including a photograph of his father. After a night of fitful rest, the party awakens to a new set of mysteries. Remi has vanished, last seen heading towards the kitchen where she reportedly encountered giant 'Kitchen Skuttlers'. A hidden passage has been revealed in the collapsed hallway. The strange message on the balcony remains unsolved. The party must now regroup, find their missing companion, and decide whether to press deeper into the Oracle's haunted manor or explore the newly-discovered secret path.", 
                options: ["Search for Remi in the kitchen.", "Investigate the hidden passage.", "Attempt to decipher the message on the balcony."] 
            },
            { id: 'step2', title: "The Fire Crystal – The Molten Depths", status: 'locked', description: "The Fire Crystal is hidden deep within a volcanic dungeon, guarded by an ancient fire dragon and its cult. They believe the crystal to be the heart of their god.", options: ["Infiltrate the cult and steal the crystal from within.", "Slay the dragon and take the crystal by force.", "Bargain with the dragon—what does an immortal beast truly desire?"] },
            { id: 'step3', title: "The Mushroom of Life – The Forbidden Grove", status: 'locked', description: "This artifact rests within the heart of a cursed forest that distorts time, protected by ancient beings. The party is currently airborne; they will need to convince Lario to fly the Vigilance there, find another way down to the surface and travel, or wait until their journey brings them closer to the Wilderlands.", options: ["Pass the guardians' trials—tests of wisdom, strength, and sacrifice.", "Use magic or forbidden means to forcefully take the Mushroom.", "Bargain with the Elders—perhaps they desire something in return."] }
        ],
        finalDecision: { description: "Once all three artifacts are gathered, a choice must be made. Use them to restore balance, breaking the Toad-God’s power and healing the realm, or use them for yourself, risking corruption but ascending to a higher form of existence." }
    },
    'who_killed_peach': {
        id: 'who_killed_peach',
        title: "The Princess's Lasting Shadow",
        type: 'main',
        category: 'Main Story',
        objective: "The infiltration of Fawful's Gala revealed a key lead—a secret hatch in the Princess’s chambers—but the alliance fractured. A subsequent 'loyalty test' mission led the team and Loyalist commanders into the sewers beneath Toad Town. They've found a potential route to the castle and a cryptic note, but the way is now blocked, and Toadette has deemed them failures. The team must find another way through the sewers and follow the trail of the conspiracy.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "A fragile truce was brokered between Kamek and Captain Toadette.",
        steps: [
            { id: 'step1', title: "Infiltrate the Madhouse", status: 'completed', description: "A joint Koopa-Loyalist team successfully infiltrated Fawful's Grand Gala at the occupied castle." },
            { id: 'step2', title: "Survive the Gala", status: 'completed', description: "The mission yielded a crucial lead from Chief Thornpaw about a secret hatch but ended in chaos. The Loyalist soldier Embercap was presumed dead, only to miraculously return, his ideals hardened by the experience." },
            { id: 'step3', title: "The Loyalty Test", status: 'completed', description: "Following Toadette's orders, the team joined Embercap and Mistveil on a mission into the sewers beneath the mayor's house. The chaotic mission, which involved illusory Iron Legion and Fawful Cultists, was revealed to be a test of loyalty. The team recovered a cryptic (and likely fake) note hinting at a larger conspiracy involving a 'Shadow Bloom Toad' and the 'Regal Airship'." },
            { id: 'step4', title: "Into the Depths", status: 'completed', description: "Seeking a cure for Dan, the party has descended into the lava-filled sewers beneath the capital. They have encountered Iron Legion spies and a terrified soldier who warned of a 'blue dragon' guarding the path ahead." },
            { id: 'step4a', title: "The Blue Dragon's Bargain", status: 'completed', description: "The battle with the 'blue dragon' turned into a bizarre negotiation. After Archie was briefly captured, reinforcements arrived with a two-eyed clone of him, created through forbidden necromancy by the Iron Legion. The erratic dragon, mistaking the clumsy clone for someone else, captured it and demanded a golden egg. Humpik successfully bargained for seventeen (unnecessary) mushrooms, which Markop now carries. The party escaped, leaving the clone—the 'two-eyed bandit'—behind, who desires Archie's third eye to become 'perfect'." },
            { id: 'step4b', title: "The Path to the Castle", status: 'active', description: "With Dan healed after the harrowing ordeal in the capital sewers, the party is free to resume their main objective. The lead from Chief Thornpaw—a secret hatch in the Princess's chambers—remains their most promising clue. The sewer route to the castle proved to be a dead end, so they must now find an alternative way into Fawful's occupied fortress.", options: ["Attempt a frontal assault on the castle.", "Seek an alliance with a faction that has access, like the Koopa Troop or Peach Loyalists.", "Find another secret entrance mentioned in old castle blueprints."] },
            { id: 'step5', title: "Confront the Truth", status: 'locked', description: "Once the secrets of the hatch are revealed, confront the true culprit or circumstances behind the Princess's death." }
        ]
    },
};