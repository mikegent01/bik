// This file contains all general world quests.
export const WORLD_QUESTS = {
    'war_of_blood_and_moon': {
        id: 'war_of_blood_and_moon',
        type: 'side',
        category: 'World Quests',
        title: "The War of Blood and Moon",
        objective: "Resolve the civil war between Vampires and Werewolves, each claiming to be the rightful rulers after a brutal conflict destroyed their homeland.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Learn about the conflict from a refugee, a mercenary contract, or by traveling to the Midlands.",
        steps: [
            { id: 'step1', title: "Unraveling the War’s Origins", status: 'active', description: "Both sides have vastly different stories. The Vampires claim they were healers attacked without provocation. The Werewolves claim they were mistreated and experimented on. Investigate both perspectives by gathering evidence from ruins, old records, and hidden survivors." },
            { id: 'step2', title: "The Vampire Perspective – The City of Lost Blood", status: 'locked', description: "The displaced vampires live in exile, divided between diplomats who seek peace and warlords who want to revenge.", options: ["Help them gather forces to retake the city.", "Convince them to negotiate, but that requires something to bargain with."] },
            { id: 'step3', title: "The Werewolf Perspective – The Shadow Throne", status: 'locked', description: "The werewolves ruling the city have begun their own medical experiments to create super-soldiers. However, some werewolves regret the war.", options: ["Expose the werewolves’ experiments to weaken their hold.", "Assist them in solidifying their power."] },
            { id: 'step4', title: "The Wedding That Started It All", status: 'locked', description: "A forgotten survivor of the Vampire-Werewolf wedding still lives, holding the key to the truth. Finding them could shift the entire war—was the wedding a betrayal or a hope for peace?" }
        ]
    },
    'pay_bounty': {
        id: 'pay_bounty',
        type: 'side',
        category: 'World Quests',
        title: "Pay Off the Bounty",
        objective: "Clear your name and the bounty on your head by dealing with a murder committed by one of your party members. Decide whether to pay the fine to avoid jail or take a risk and fight for freedom.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "completed",
        start_condition: "This quest started upon arriving in Ravencreek.",
        steps: [
            { id: 'step1', title: "Investigate the Murder", status: 'completed', description: "A shocking revelation came to light: one of your party members was accused of murder. The scene was investigated." },
            { id: 'step2', title: "Confront the Accused", status: 'completed', description: "The accused party member was confronted and their motives were understood." },
            { id: 'step3', title: "Pay the Fine", status: 'completed', description: "The law in Ravencreek demands a decision. A hefty fine was paid to clear the bounty and absolve the party member." }
        ]
    },
    'wario_funeral': {
        id: 'wario_funeral',
        type: 'side',
        category: 'World Quests',
        title: "Solve the Murder Mystery at Wario’s Funeral",
        objective: "Investigate Wario’s strange funeral, where two identical robot versions of him have been found. As the mystery unfolds, a party member is detained by a detective, and you must act quickly to save them.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "failed",
        start_condition: "This quest began upon finding Wario's funeral.",
        steps: [
            { id: 'step1', title: "Examine the Graveyard Scene", status: 'completed', description: "The strange scene at Wario’s funeral was investigated. Clues were collected from the two robot bodies." },
            { id: 'step2', title: "Interview the Townsfolk", status: 'completed', description: "Suspicious characters were interviewed, but gave conflicting reports." },
            { id: 'step3', title: "The Detective Arrives", status: 'failed', description: "A detective arrived and detained a member of the party. The trail went cold before they could be freed." }
        ]
    },
    'mid_flyare_cure': {
        id: 'mid_flyare_cure',
        type: 'side',
        category: 'World Quests',
        title: "Obtain the Ingredients for the Mid-Flyare Cure Potion",
        objective: "Gather rare ingredients to craft the Mid-Flyare Cure Potion, including the elusive Ice Crystal.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "hidden",
        start_condition: "Find a recipe for the cure or encounter someone afflicted with Mid-Flyare.",
        steps: [
            { id: 'step1', title: "Search for the Ice Crystal in Ravencreek", status: 'locked', description: "Explore various potential locations where the Ice Crystal might be hidden.", options: ["Beneath the icy waters of the slow-moving river.", "Inside a forgotten cellar of a timber-framed building.", "Behind the ivy-covered walls of Veilwood Spa."] },
            { id: 'step2', title: "Discover the Ice Toad’s Role", status: 'locked', description: "The Ice Toad guards the crystal. As you near the crystal, be prepared to confront the creature once its true role becomes clear." },
            { id: 'step3', title: "Solve the Final Puzzle to Secure the Crystal", status: 'locked', description: "After dealing with the Ice Toad, you must solve a final riddle or puzzle in order to claim the crystal." }
        ]
    },
    'gryphon_convoy': {
        id: 'gryphon_convoy',
        title: "The Gilded Convoy",
        type: 'side',
        category: 'World Quests',
        objective: "The Gilded Gryphon Mercenary Company has hired the party to escort a high-value convoy through the bandit-infested hills of the Midlands border.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Accept the contract from Commander Valerius.",
        steps: [
            { id: 'step1', title: "Meet the Convoy", status: 'active', description: "Rendezvous with the Gryphon quartermaster and learn the convoy's route and cargo." },
            { id: 'step2', title: "The Ambush", status: 'locked', description: "The convoy is ambushed by a well-organized group of bandits. The party must defend the wagons and their cargo." },
            { id: 'step3', title: "A Familiar Foe", status: 'locked', description: "The bandit leader is revealed to be a disgraced former Gryphon Knight, adding a personal dimension to the conflict." }
        ]
    },
    'wayfinders_ruins': {
        id: 'wayfinders_ruins',
        title: "The Sunken City",
        type: 'side',
        category: 'World Quests',
        objective: "The Wayfinders' Guild has discovered the entrance to a sunken city from a bygone age. They need a well-armed party to explore its depths and recover a legendary navigational artifact.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Gain a positive reputation with the Wayfinders' Guild.",
        steps: [
            { id: 'step1', title: "Enter the Depths", status: 'active', description: "Navigate the treacherous, flooded passages of the sunken city." },
            { id: 'step2', title: "The Guardians", status: 'locked', description: "The city is protected by ancient, water-logged magical constructs. The party must find a way to disable or destroy them." },
            { id: 'step3', title: "The Astrolabe", status: 'locked', description: "Recover the 'Celestial Astrolabe' from the city's central chamber." }
        ]
    },
    'innovators_experiment': {
        id: 'innovators_experiment',
        title: "The Innovator's Experiment",
        type: 'side',
        category: 'World Quests',
        objective: "Janna Brightspark of the Mages' Guild 'Innovators' has an experiment that has gone horribly wrong, opening a small, unstable portal to a chaotic dimension. She needs a discreet party to go in and shut it down before the traditionalist 'Conservators' find out.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Befriend Janna Brightspark or gain favor with the Innovator faction.",
        steps: [
            { id: 'step1', title: "Enter the Portal", status: 'active', description: "Step through the unstable portal into a realm of shifting landscapes and bizarre physics." },
            { id: 'step2', title: "Find the Anchor", status: 'locked', description: "Locate the three 'reality anchors' that are keeping the portal open." },
            { id: 'step3', title: "Close the Rift", status: 'locked', description: "Destroy the anchors to collapse the portal, while fending off the strange, chaotic creatures that call the dimension home." }
        ]
    },
    'orc_truce': {
        id: 'orc_truce',
        title: "The Orc Truce",
        type: 'side',
        category: 'World Quests',
        objective: "Warboss Skarjaw of 'Da Krumperz' wants to broker a temporary truce with a rival Orc clan to fight a common, more dangerous foe. He needs a neutral third party to deliver the message, as he knows his own messengers would be killed on sight.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Gain the respect of Warboss Skarjaw.",
        steps: [
            { id: 'step1', title: "Deliver the Message", status: 'active', description: "Travel to the territory of the rival 'Bloodeye' clan and deliver Skarjaw's offer of a truce to their Warboss." },
            { id: 'step2', title: "The Trial of Trust", status: 'locked', description: "The Bloodeye Warboss doesn't trust Skarjaw. To prove the party is neutral, they must complete a trial for the Bloodeyes: hunt and kill a rampaging Rock-Golem." }
        ]
    },
    'rebel_extraction': {
        id: 'rebel_extraction',
        title: "Rebel Extraction",
        type: 'side',
        category: 'World Quests',
        objective: "The Rebel Clans need to extract a high-ranking Imperial defector who holds key military secrets. The party must escort the defector from deep within Imperial territory to the safety of the rebel-held Wilderlands.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Gain a high reputation with the Rebel Clans.",
        steps: [
            { id: 'step1', title: "The Rendezvous", status: 'active', description: "Meet the defector at a secret rendezvous point in an Imperial city." },
            { id: 'step2', title: "The Chase", status: 'locked', description: "The Iron Legion's Silent Service is on the defector's trail. The party must evade them through a high-speed chase through the countryside." },
            { id: 'step3', title: "Safe Passage", status: 'locked', description: "Deliver the defector safely to the rebel headquarters." }
        ]
    },
    'haunted_mine': {
        id: 'haunted_mine',
        title: "The Haunted Mine of Mount Greyspire",
        type: 'side',
        category: 'World Quests',
        objective: "A once-profitable silver mine has been abandoned after miners unearthed an ancient tomb, releasing vengeful spirits. A local lord is offering a substantial reward to any who can cleanse the mine and make it safe again.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Find the bounty notice in a local tavern.",
        steps: [
            { id: 'step1', title: "Enter the Mine", status: 'active', description: "Explore the dark, ghost-infested tunnels of the Greyspire Mine." },
            { id: 'step2', title: "Find the Tomb", status: 'locked', description: "Locate the source of the haunting: the desecrated tomb of an ancient warlord." },
            { id: 'step3', title: "Appease the Spirit", status: 'locked', description: "Find the warlord's lost artifact and return it to his tomb to appease his spirit and cleanse the mine." }
        ]
    },
    'fawful_minion_mutiny': {
        id: 'fawful_minion_mutiny',
        title: "Minion Mutiny",
        type: 'side',
        category: 'World Quests',
        objective: "A faction of Fawful's brainwashed minions has unexpectedly broken free of his control. Led by a particularly intelligent Goomba, they now wish to escape Peach's Castle. They offer valuable intel on Fawful's defenses in exchange for an escort to freedom.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "The party must be actively working against Fawful.",
        steps: [
            { id: 'step1', title: "Contact the Mutineers", status: 'active', description: "Make secret contact with 'General Goomburt,' the leader of the mutinous faction." },
            { id: 'step2', title: "The Great Escape", status: 'locked', description: "Create a diversion to distract Fawful's elite guards while escorting the mutineers through the castle's secret passages." }
        ]
    },
    'dci_wario_case': {
        id: 'dci_wario_case',
        title: "The Case of the Greedy Ghost",
        type: 'side',
        category: 'World Quests',
        objective: "Detective Penny of the Diamond City Investigators is convinced Wario faked his death and is operating as a ghost. She needs help gathering supernatural evidence to make her case, and hires the party for their... unique expertise.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Encounter Detective Penny in Diamond City.",
        steps: [
            { id: 'step1', title: "The Haunting", status: 'active', description: "Stake out one of Wario's old, 'haunted' warehouses and gather proof of his ghostly activities." },
            { id: 'step2', title: "The Ectoplasmic Trail", status: 'locked', description: "Follow Wario's ectoplasmic trail back to his new base of operations." },
            { id: 'step3', title: "The Smoking Gun", status: 'locked', description: "Confront the ghost of Wario and trick him into confessing his scheme on a magical recording device." }
        ]
    },
    'regency_supply_run': {
        id: 'regency_supply_run',
        title: "The King's Road",
        type: 'side',
        category: 'World Quests',
        objective: "The Mushroom Regency needs a crucial shipment of medicine delivered to a besieged town, but the main roads are held by Loyalist forces. They need a deniable, third-party asset to get the supplies through.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Gain a positive reputation with the Mushroom Regency.",
        steps: [
            { id: 'step1', title: "The Secret Path", status: 'active', description: "Use old smugglers' tunnels to bypass the main Loyalist checkpoints." },
            { id: 'step2', title: "A Desperate Fight", status: 'locked', description: "The delivery is ambushed by a desperate group of Koopa Remnants who need the medicine for their own wounded." },
            { id: 'step3', title: "The Delivery", status: 'locked', description: "Deliver the medicine to the besieged town of Spore-Cross." }
        ]
    },
    'lost_god': {
        id: 'lost_god',
        title: "The Lost God",
        type: 'side',
        category: 'World Quests',
        objective: "The Toad Cult has lost contact with one of their 'Lesser Ascendants,' a giant, sentient mushroom god. They offer a reward for anyone who can find out what happened to it.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Find a notice from the Toad Cult.",
        steps: [
            { id: 'step1', title: "The Last Sighting", status: 'active', description: "Travel to the last known location of the mushroom god, 'Gloom-Cap'." },
            { id: 'step2', title: "The Abduction", status: 'locked', description: "Discover that Gloom-Cap hasn't wandered off, but has been captured by the Mages' Guild 'Innovators' for study." },
            { id: 'step3', title: "The Rescue", status: 'locked', description: "Infiltrate the Innovators' laboratory and free the mushroom god." }
        ]
    },
    'celestial_cartography': {
        id: 'celestial_cartography',
        title: "Celestial Cartography",
        type: 'side',
        category: 'World Quests',
        objective: "A scholar from the Mages' Guild believes the stars and moons of the world form a complex magical equation. He needs adventurers to travel to three remote, ancient observatories and record the celestial alignments from each.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Meet the scholar, Astrolos, in a major city.",
        steps: [
            { id: 'step1', title: "The Mountain Observatory", status: 'active', description: "Travel to the observatory atop the highest mountain, currently infested with Harpies." },
            { id: 'step2', title: "The Sunken Observatory", status: 'locked', description: "Find the underwater observatory, now home to a grumpy Kraken." },
            { id: 'step3', title: "The Void Observatory", status: 'locked', description: "Travel to the observatory at The Edge of the world, which is periodically battered by cosmic storms." }
        ]
    },
    'world_imperial_demand': {
        id: 'world_imperial_demand',
        title: "The Imperial Demand",
        type: 'side',
        category: 'World Quests',
        objective: "The Iron Legion, citing Imperial law against slavery and trafficking, has demanded the party hand over Green T (leader of the Tea Leaf Syndicate) and Lario (for complicity in toad-powered labor) for trial and judgment. The party must decide whether to comply with the Empire's demand, defy a major military power, or find a third option.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "active",
        start_condition: "Triggered after the Iron Legion boards the Vigilance.",
        steps: [
            { id: 'step1', title: "The Ultimatum", status: 'active', description: "The Iron Legion commander has presented a formal, non-negotiable demand. They have given the party 24 hours to comply before they consider the Vigilance and its crew a hostile entity.", options: ["Comply and hand over Green T and Lario.", "Refuse and prepare for a fight.", "Attempt to negotiate or find a loophole."] },
            { id: 'step2', title: "Consequences", status: 'locked', description: "Face the political and military consequences of the party's decision." }
        ]
    },
    'vigilance_fuel_source': {
        id: 'vigilance_fuel_source',
        title: "Vigilance: A Thirsty Engine",
        type: 'side',
        category: 'World Quests',
        objective: "The Vigilance's power core, now powered by X.O.'s staff, is unstable and consumes its arcane fuel source at an alarming rate. Find a more reliable, long-term power source before the ship is left stranded.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Complete the 'The Staff of Chaos' main quest.",
        steps: [
            { id: 'step1', title: "Consult an Expert", status: 'active', description: "Find an expert in arcane engineering, such as a Mages' Guild Innovator or a Ratchet Raider Mekboy, to analyze the core's power consumption.", options: ["Seek help from Janna Brightspark.", "Strike a deal with Lario.", "Attempt to reverse-engineer it yourself."] },
            { id: 'step2', title: "Acquire Components", status: 'locked', description: "Gather the necessary components for the chosen power solution, such as refined mana crystals, a goblin-made power converter, or components to tap into a natural ley-line." },
            { id: 'step3', title: "Install the Upgrade", status: 'locked', description: "Install the new power source, a delicate and dangerous procedure that could have unforeseen consequences if it fails." }
        ]
    },
    'vigilance_rat_infestation': {
        id: 'vigilance_rat_infestation',
        title: "Vigilance: A Rat Problem",
        type: 'side',
        category: 'World Quests',
        objective: "The galley is infested with unusually large and aggressive rats that have been stealing food and chewing through wiring. The ship's chef is offering a reward for their complete extermination.",
        assignee: "Full Party",
        assigneeKey: 'full_party',
        status: "available",
        start_condition: "Speak to the ship's chef after several days have passed on the Vigilance.",
        steps: [
            { id: 'step1', title: "Track the Rats", status: 'active', description: "Follow the trail of chewed wires and stolen cheese to locate the rat's nest in the lower ventilation shafts." },
            { id: 'step2', title: "Confront the Rat King", status: 'locked', description: "Discover that the infestation is led by a surprisingly intelligent and massive 'Rat King' that seems to have been mutated by the ship's energy leaks." },
            { id: 'step3', title: "Claim the Bounty", status: 'locked', description: "Eliminate the Rat King and its brood and return to the chef for your reward." }
        ]
    }
};