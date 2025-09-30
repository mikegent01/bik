// This file contains all of Bowser's personal quests.
export const BOWSER_QUESTS = {
    'bowser_rally_remnants': {
        id: 'bowser_rally_remnants',
        title: "Rally the Remnants",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "Re-establish contact with the scattered remnants of the Koopa Troop, unite them under a single banner, and forge them into an effective fighting force once more.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "pending",
        pending_condition: "Pending Activation: Bowser must be on the ground in the Mushroom Kingdom or the Darklands to begin sending out messengers and challenging the Koopaling warlords. This cannot be done while aboard the Vigilance.",
        steps: [
            { id: 'step1', title: "Contact Kamek", status: 'active', description: "Establish a secure line of communication with Kamek, who commands the largest surviving contingent of the Koopa Troop." },
            { id: 'step2', title: "Unite the Warlords", status: 'locked', description: "Several of the Koopalings have carved out their own petty fiefdoms. Bowser must defeat or persuade them to rejoin his command." },
            { id: 'step3', title: "The Unflappable Standard", status: 'locked', description: "To boost morale, Bowser must lead his newly-reformed army in a decisive victory against a significant foe, such as a rogue Iron Legion outpost or a major Toad Gang stronghold." }
        ]
    },
    'bowser_reclaim_fortress': {
        id: 'bowser_reclaim_fortress',
        title: "Reclaim Koopa Keep",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "One of Bowser's key fortresses, Koopa Keep, has been overrun by a detachment of the Iron Legion's Iron Crown Brigade. Bowser must lead his newly rallied remnants to take it back and send a message to the Midlands.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "The keep is more than just a strategic asset; it's a symbol of Koopa power. Reclaiming it is a necessary show of force to prove to his scattered troops that he is still in command, and to show the Iron Legion that the Mushroom Kingdom is not theirs for the taking.",
        steps: [
            { id: 'step1', title: "Scout the Defenses", status: 'active', description: "Use Lakitus and Magikoopa illusions to gather intelligence on the Iron Crown Brigade's strength, leadership, and fortifications within the keep." },
            { id: 'step2', title: "Soften the Walls", status: 'locked', description: "Deploy Hammer Bros. and Banzai Bills to weaken the keep's outer defenses before the main assault." },
            { id: 'step3', title: "The King's Assault", status: 'locked', description: "Lead the charge personally, breaking through the main gate and challenging the Iron Crown commander, Viceroy Hammer Forgeheart, to a direct confrontation." }
        ]
    },
    'bowser_shadow_throne': {
        id: 'bowser_shadow_throne',
        title: "The Shadow Throne",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "Bowser sees the chaos in the Midlands not as a threat, but as an opportunity. He decides to make a power play against the Onyx Hand, seeking to usurp their control of the supernatural underworld.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "Conquering land is one thing, but conquering the shadows is a true mark of power. Bowser wants to prove he is more than just a brute; he can play the game of intrigue as well, and he sees the vampires as decadent and weak.",
        steps: [
            { id: 'step1', title: "Find a Weak Link", status: 'active', description: "Identify a lesser vampire coven within the Onyx Hand that is disgruntled with Lady Ebonveil's leadership and might be convinced to switch allegiance." },
            { id: 'step2', title: "An Offer They Can't Refuse", status: 'locked', description: "Approach the weakened coven with an offer: Bowser's military protection in exchange for their loyalty and their secrets on the Onyx Hand's operations." },
            { id: 'step3', title: "Checkmate", status: 'locked', description: "Use the information from the traitor coven to expose a major Onyx Hand operation to the Silver Flame, letting his two enemies bleed each other dry while he consolidates his own power." }
        ]
    },
    'bowser_my_heir': {
        id: 'bowser_my_heir',
        title: "My Heir!",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "Bowser receives a ransom note from Captain Syrup of the Crimson Fleet. She has captured Bowser Jr. and is demanding a legendary magical artifact as payment. Bowser is not amused.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "All of Bowser's ambition and rage pales in comparison to his paternal instinct. This is not about politics or conquest; it's about getting his son back. And then, unleashing unimaginable fury on those who dared to touch him.",
        steps: [
            { id: 'step1', title: "The 'Negotiation'", status: 'active', description: "Arrange a meeting with Captain Syrup, under the guise of negotiating the ransom." },
            { id: 'step2', title: "The Distraction", status: 'locked', description: "While Bowser 'negotiates' (i.e., roars and threatens), a stealth team led by Kamek must infiltrate Syrup's flagship to locate Bowser Jr." },
            { id: 'step3', title: "Unleash the Fury", status: 'locked', description: "Once Bowser Jr. is secure, unleash the full might of the Koopa Troop on the Crimson Fleet, making an example of them for the entire underworld to see." }
        ]
    },
    'bowser_ultimate_weapon': {
        id: 'bowser_ultimate_weapon',
        title: "The Ultimate Weapon",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "Commission the Ratchet Raiders and Lario to build a new, absurdly large war machine, powered by an unstable artifact the party has recently acquired.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "Bowser believes that overwhelming firepower is the solution to most problems. He wants a new toy, a 'Peace-Maker' so terrifying that his enemies in the Mushroom Kingdom and the Midlands will have no choice but to surrender.",
        steps: [
            { id: 'step1', title: "The Blueprint", status: 'active', description: "Draft a ridiculous and overly ambitious blueprint for the new war machine and present it to Lario and the Ratchet Raiders, along with a massive down payment." },
            { id: 'step2', title: "Gather the Parts", status: 'locked', description: "The Raiders require rare and dangerous components, including the heart of a slumbering Iron Golem and the focusing crystal from a Mages' Guild observatory." },
            { id: 'step3', title: "Field Test", status: 'locked', description: "The prototype is complete, but highly unstable. Bowser must personally oversee its first field test against a conveniently located enemy fortress. Success is not guaranteed." }
        ]
    },
    'bowser_imperial_insult': {
        id: 'bowser_imperial_insult',
        title: "An Imperial Insult",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "An Imperial diplomat publicly refers to Bowser as a 'lesser beast-king' and the Koopa Kingdom as a 'primitive tribal state'. This insult to his royal personage cannot stand. Bowser decides to teach the Empire a lesson in respect.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "It's a matter of pride. Bowser demands to be recognized as a true king, a peer to the Emperor. This quest is about asserting his legitimacy on the world stage through disproportionate retribution.",
        steps: [
            { id: 'step1', title: "Target the Diplomat", status: 'active', description: "Track the diplomat's airship convoy and prepare an ambush." },
            { id: 'step2', title: "A Royal 'Correction'", status: 'locked', description: "Capture the diplomat and force him to publicly retract his statement and acknowledge Bowser as the one true King of Awesome." },
            { id: 'step3', title: "Send a Message", status: 'locked', description: "Steal the diplomat's fancy hat and send it back to the Emperor with a note. A very rude note." }
        ]
    },
    'bowser_fawful_eviction': {
        id: 'bowser_fawful_eviction',
        title: "Eviction Notice",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "The Beanish pest Fawful has taken over Peach's Castle, a castle Bowser considers to be his rightful prize. He decides to personally lead an assault to kick Fawful out.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "Territorial dispute. It's Bowser's job to conquer that castle, and some green weirdo with a vacuum cleaner isn't going to steal his thunder. It's the principle of the thing.",
        steps: [
            { id: 'step1', title: "Breach the Bean-Stalks", status: 'active', description: "Fawful's magical beanstalks are blocking a direct assault. Use Koopa Troop fire-breathers to clear a path." },
            { id: 'step2', title: "De-Minion the Halls", status: 'locked', description: "Fight through Fawful's army of brainwashed minions and weird robots." },
            { id: 'step3', title: "The King vs. The Fury", status: 'locked', description: "Confront Fawful in the throne room for a final, glorious battle." }
        ]
    },
    'bowser_rakasha_challenge': {
        id: 'bowser_rakasha_challenge',
        title: "The Warchief's Challenge",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "The Rakasha Clans do not respect Bowser's authority. To earn their fear, if not their respect, he challenges their strongest warrior, Warchief Ironmane, to a duel.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "Bowser understands the language of power. The Rakasha respect strength, so he will show them strength they cannot ignore. This is diplomacy by combat.",
        steps: [
            { id: 'step1', title: "Issue the Challenge", status: 'active', description: "Send a formal challenge to Warchief Ironmane, according to the Rakasha's ancient rites of combat." },
            { id: 'step2', title: "The Arena of Spirits", status: 'locked', description: "Meet Ironmane in the sacred arena of the Rakasha, where their ancestral spirits will watch the duel." },
            { id: 'step3', title: "Victor's Spoils", status: 'locked', description: "Defeat Ironmane to secure a non-aggression pact with the Rakasha Clans." }
        ]
    },
    'bowser_magikoopa_upgrade': {
        id: 'bowser_magikoopa_upgrade',
        title: "Arcane Superiority",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "The Mages' Guild looks down on Koopa magic. Bowser orders Kamek to 'acquire' a powerful artifact from a Guild outpost to upgrade the abilities of the entire Magikoopa Cabal.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "Bowser is tired of his magic-users being seen as inferior. This is an arms race, and he intends to give his troops the best, even if he has to steal it.",
        steps: [
            { id: 'step1', title: "Identify the Target", status: 'active', description: "Use Koopa spies to identify a lightly-guarded Mages' Guild research outpost that contains the 'Orb of Amplification'." },
            { id: 'step2', title: "The Heist", status: 'locked', description: "Kamek leads a stealth mission to bypass the Guild's magical wards and steal the Orb." },
            { id: 'step3', title: "Empower the Cabal", status: 'locked', description: "Use the Orb in a ritual to permanently enhance the magical power of all Magikoopas in the Troop." }
        ]
    },
    'bowser_toad_town_takeover': {
        id: 'bowser_toad_town_takeover',
        title: "Toad Town Takeover",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "With the Mushroom Regency in chaos, the main Toad Town is vulnerable. Bowser decides it's the perfect time for a classic, old-fashioned conquest to demoralize his enemies.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "Nostalgia, and a sound military strategy. Capturing the enemy's civilian center is a massive blow to their morale and a huge boost to his own.",
        steps: [
            { id: 'step1', title: "The Pincer Movement", status: 'active', description: "Use Koopa Paratroopa squads to cut off the main roads to Toad Town, isolating it from Regency reinforcements." },
            { id: 'step2', title: "The Grand Entrance", status: 'locked', description: "Lead the main assault on the town square, crashing through the gates in the Koopa Clown Car." },
            { id: 'step3', title: "A New Flag", status: 'locked', description: "Capture the Town Hall and raise the Koopa flag, declaring Toad Town as the new forward operating base for his kingdom." }
        ]
    },
    'bowser_unchained_ultimatum': {
        id: 'bowser_unchained_ultimatum',
        title: "An Unacceptable Ideology",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "The Unchained's ideology of 'no kings, no masters' is a direct threat to Bowser's monarchical rule. He decides to crush a nearby Unchained encampment to make an example of them.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "Bowser cannot tolerate a philosophy that denies his very right to rule. The Unchained are not just enemies; they are an ideological poison that must be eradicated before it can infect his own troops.",
        steps: [
            { id: 'step1', title: "Locate the Camp", status: 'active', description: "Find the location of the main Unchained hideout in the region." },
            { id: 'step2', title: "Show of Force", status: 'locked', description: "Surround the camp with the full might of the Koopa Troop and issue an ultimatum: swear fealty or be destroyed." },
            { id: 'step3', title: "Make an Example", status: 'locked', description: "When they inevitably refuse, crush their rebellion utterly and without mercy." }
        ]
    },
    'bowser_moonfang_pact': {
        id: 'bowser_moonfang_pact',
        title: "A Pact of Predators",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "The Moonfang Pack and the Koopa Troop share a common enemy: the Onyx Hand. Bowser decides to formalize this relationship by proposing a military pact with the werewolves.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "The enemy of my enemy is my friend, for now. Bowser sees the werewolves as powerful, if unruly, allies who can harry the vampires while he focuses on larger strategic goals.",
        steps: [
            { id: 'step1', title: "The Offering", status: 'active', description: "To prove his sincerity, Bowser must capture a high-ranking vampire and offer him to the Moonfang Pack as a gift." },
            { id: 'step2', title: "The Summit", status: 'locked', description: "Meet with the werewolves' Alpha Prime on neutral ground to negotiate the terms of the pact." },
            { id: 'step3', title: "The First Hunt", status: 'locked', description: "Seal the pact by leading a joint Koopa-Werewolf assault on a major Onyx Hand blood-farm." }
        ]
    },
    'bowser_royal_portrait': {
        id: 'bowser_royal_portrait',
        title: "The Royal Portrait",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "Bowser decides he needs a new, more intimidating royal portrait. He kidnaps Master Goodstyle, the finest artisan in the world, and forces him to paint it.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "Every great king needs great art to commemorate his reign. Bowser's motivation is vanity and a desire for a portrait that truly captures his magnificent evil.",
        steps: [
            { id: 'step1', title: "The 'Invitation'", status: 'active', description: "Dispatch a squad of Koopa Commandos to 'invite' Master Goodstyle to Bowser's Castle." },
            { id: 'step2', title: "Artistic 'Collaboration'", status: 'locked', description: "Oversee the painting process, making helpful artistic suggestions like 'more spikes' and 'make the fire bigger'." },
            { id: 'step3', title: "The Unveiling", status: 'locked', description: "Unveil the masterpiece to the Koopa Troop, who will undoubtedly agree that it is the greatest painting in the history of art." }
        ]
    },
    'bowser_ancient_power': {
        id: 'bowser_ancient_power',
        title: "Ancient Power",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "Kamek discovers the location of a slumbering Magma Titan, an ancient elemental being of immense destructive power. Bowser decides he wants it as a pet.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "What's better than an army? An army with a giant lava monster. Bowser's logic is, as always, flawless.",
        steps: [
            { id: 'step1', title: "The Awakening", status: 'active', description: "Travel to the volcano where the Magma Titan slumbers and perform the ancient ritual to awaken it." },
            { id: 'step2', title: "The Taming", status: 'locked', description: "The awakened Titan will be enraged. Bowser must defeat it in single combat to prove his dominance and bind it to his will." },
            { id: 'step3', title: "A New Lair", status: 'locked', description: "Transport the Magma Titan to a new home in the lava pits beneath his castle, where it can serve as the ultimate deterrent." }
        ]
    },
    'bowser_economic_warfare': {
        id: 'bowser_economic_warfare',
        title: "Economic Warfare",
        type: 'personal',
        category: 'Personal - Bowser',
        objective: "Fighting the Empire head-on is costly. Bowser decides to undermine them economically by taking control of the Gilded Gryphon Mercenary Company, their most expensive military contractor.",
        assignee: "Bowser",
        assigneeKey: 'bowser',
        status: "available",
        motivation: "A brilliant strategic move. By either buying out or destroying the Gilded Gryphons, Bowser can bleed the Empire's treasury dry without sacrificing a single Goomba.",
        steps: [
            { id: 'step1', title: "The Ledger", status: 'active', description: "Infiltrate a Gilded Gryphon outpost and steal their financial ledgers to find a weakness." },
            { id: 'step2', title: "A Hostile Takeover", status: 'locked', description: "Use the information in the ledgers to either blackmail their leader, Commander Valerius, into working for him, or to bankrupt the company by sabotaging their most valuable contracts." }
        ]
    }
};