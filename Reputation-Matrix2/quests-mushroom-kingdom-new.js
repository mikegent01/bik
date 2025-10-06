// This file contains new "Request" and Side quests for the Mushroom Kingdom and surrounding areas.

export const NEW_MK_QUESTS = {
    'toadette_loyalty_test': {
        id: 'toadette_loyalty_test',
        title: "Toadette's Loyalty Test",
        type: 'side',
        category: 'Peach Loyalists',
        objective: "After seizing control of Toad Town, Captain Toadette put her new recruits—Embercap and Mistveil—through a brutal, unexpected loyalty test. The main party was also roped into this mission, which involved illusions, faked kidnappings, and a manufactured crisis in the sewers beneath the mayor's house to see if they all had the resolve to die for her cause.",
        assignee: "Peach Loyalists",
        assigneeKey: 'peach_loyalists',
        status: "completed",
        motivation: "Toadette believes the only way to win is with soldiers who are completely dedicated and willing to make any sacrifice. This test was designed to weed out the weak and forge the rest into a hardened, unquestioning fighting force.",
        steps: [
            { id: 'step1', title: "The Sewer 'Mission'", status: 'completed', description: "The recruits were sent into the sewers beneath the mayor's house on a mission to investigate Iron Legion and Fawful cultist activity." },
            { id: 'step2', title: "Manufactured Chaos", status: 'completed', description: "The recruits faced a series of chaotic events: a faked kidnapping of Embercap by illusory Iron Legion soldiers, an attack by an illusory Fawful cultist, and a cave-in." },
            { id: 'step3', title: "The Note", status: 'completed', description: "The recruits recovered a planted note from the 'Fawful cultist' detailing a plot against the Regal Airship, a key piece of misdirection. The note reads: 'My Duty to the Fallen Throne: By the grace of Lord Fawful’s fury, I march through this filth! The Fallen Throne—Peach’s Castle, now his—calls me to serve. I must scout these sewers for a path to aid the Shadow Bloom Toad, that sly red-eyed brother. He awaits my vial of sludge (it slows foes by 40%—a gift from the master’s wrath!) to cripple the Regal Airship’s engines. The God Toad’s light guides us—soon the gala will rise from the throne’s ruins! If I fall, let this note burn with my zeal—death is but a spice in Fawful’s feast! —Brother Vilecap, Servant of the Fallen Throne'" },
            { id: 'step4', title: "The Final Confrontation", status: 'completed', description: "Toadette revealed the entire scenario was an elaborate illusion, including the 'death' of a toad, to test their resolve. She declared them failures, believing they were not yet ready to die for the cause." }
        ]
    },
    'grand_market_ring_retrieval': {
        id: 'grand_market_ring_retrieval',
        title: "Grand Market: The Ring Retrieval",
        type: 'side',
        category: 'Capital & Markets',
        objective: "Recover a Legion noble’s heirloom ring, originally swallowed by a horse and later seized by Green T during a chaotic laxative-cheese incident.",
        assignee: "FNG Remi",
        assigneeKey: 'remi',
        status: "active",
        steps: [
            { id: 'step1', title: "Track the Heirloom", status: 'active', description: "Identify Green T’s fence or drop location. Verify the ring’s authenticity (beware crayon counterfeits)." },
            { id: 'step2', title: "Negotiate or Pursue", status: 'locked', description: "Exchange credible leverage for the ring or pursue Green T through Capital alleys. Consider Angel 24’s time services." }
        ],
        rewards: ["Contact in the Legion’s Diet", "Favor for a future legal exemption"]
    },
    'eager_rescue_lead': {
        id: 'eager_rescue_lead',
        title: "Lead on Eager",
        type: 'side',
        category: 'Liberated Toads',
        objective: "Pursue Green T’s tip regarding Eager’s location, offered during the Capital Dinner in exchange for the real ring.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        steps: [
            { id: 'step1', title: "Verify the Lead", status: 'active', description: "Confirm Green T’s intel using underworld contacts and Rakasha scouts." },
            { id: 'step2', title: "Approach the Site", status: 'locked', description: "Secure the perimeter and prepare for potential Loyalist or Imperial interference." }
        ]
    }
};