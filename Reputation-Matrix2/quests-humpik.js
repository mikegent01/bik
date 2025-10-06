
// This file contains all of Humpik's personal quests.
export const HUMPIK_QUESTS = {
    'humpik_honor_quest': {
        id: 'humpik_honor_quest',
        title: "An Axe to Grind",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "The Iron Legion's elite mock Humpik as a 'king's pet,' a savage with no true honor. To restore his name and prove the strength of his people, Humpik must seek out a renowned Legion champion and defeat them in a formal, sanctioned duel.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "pending",
        pending_condition: "Pending Activation: To issue a formal challenge, Humpik must be in a location where he can interact with the Iron Legion, such as the Midlands or an Imperial-controlled city. This requires the party to disembark from the Vigilance.",
        steps: [
            { id: 'step1', title: "Identify a Worthy Champion", status: 'active', description: "The most respected duelist among the Legion's progressive 'War-Forged' faction is Colonel Vera Steelstorm. Use underworld contacts or military intelligence to pinpoint her current location on the Midlands front." },
            { id: 'step2', title: "Issue a Formal Challenge", status: 'locked', description: "The Legion follows strict protocols for challenges of honor. Humpik must present a formal, written challenge to Colonel Steelstorm, adhering to their traditions to prove he is not a mere savage.", options: ["Consult with Markop on the proper etiquette.", "Bribe a Freelancer to draft the challenge.", "Just roar really loud and hope for the best."] },
            { id: 'step3', title: "The Gauntlet of Cinders", status: 'locked', description: "Steelstorm agrees to the duel, but only if Humpik can first prove his mettle by surviving the Legion's infamous training ground—a field of deadly traps, automated war machines, and scorching hazards." },
            { id: 'step4', title: "Duel of Fates", status: 'locked', description: "Face Colonel Vera Steelstorm in a one-on-one, sanctioned duel. The outcome will dramatically shift the Iron Legion's perception of the Dwarf and his allies." }
        ]
    },
    'humpik_kings_physician': {
        id: 'humpik_kings_physician',
        title: "The King's Physician",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Dan, an ally of King Bowser, was critically injured. Humpik, driven by loyalty, braved the capital sewers to acquire the 'cure' from a mysterious archmage.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "completed",
        motivation: "Humpik's loyalty extends not just to his king, but to those who have aided him. He saw Dan as a friend of Bowser and therefore, a friend of his. He braved any danger to save an ally.",
        steps: [
            { id: 'step1', title: "The Grim News", status: 'completed', description: "The Iron Legion Secret Service brought Humpik to an archmage's shop, where he learned of Dan's severe injury and the required cure." },
            { id: 'step2', title: "Descent into the Sewers", status: 'completed', description: "Humpik descended into the lava-filled sewers and met up with Markop and the rest of the party." },
            { id: 'step3', title: "The Blue Dragon's Bargain", status: 'completed', description: "After a chaotic encounter with a 'blue dragon' and a two-eyed clone of Archie, Humpik successfully bargained for seventeen mushrooms, which the party later learned were not actually needed for the cure. The heavy load was passed to Markop for safekeeping." },
            { id: 'step4', title: "A Diminished Friend", status: 'completed', description: "The party returned to the archmage. Green T dramatically offered a selection of replacement arms before the archmage intervened, healing Dan but leaving him shrunken and weakened. Dan refuses to speak to Archie about what happened, while Green T loudly proclaimed the danger was not over. Humpik's duty, however, is fulfilled." }
        ]
    },
    'humpik_great_feast': {
        id: 'humpik_great_feast',
        title: "The Great Feast",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Hunt the legendary Titan-Turtle of the Whispering Marshes, whose shell is said to be impenetrable and whose meat, when cooked, grants temporary invincibility.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "For Humpik, this is the ultimate challenge. It's a test of strength against a legendary beast, and the reward is not just a trophy, but a feast that will be sung about in Dwarven halls for generations.",
        steps: [
            { id: 'step1', title: "Find the Lair", status: 'active', description: "Track the Titan-Turtle to its hidden lair deep within the treacherous Whispering Marshes, a place known for its toxic fumes and aggressive flora." },
            { id: 'step2', title: "The Unbreakable Shell", status: 'locked', description: "The Titan-Turtle's shell is immune to all normal attacks. Humpik must find a weak point or an environmental hazard to crack it." },
            { id: 'step3', title: "The Feast of Champions", status: 'locked', description: "With the beast slain, Humpik must transport the massive carcass back to his allies and hold a feast to boost their morale and grant them its power for the next battle." }
        ]
    },
    'humpik_proper_waaagh': {
        id: 'humpik_proper_waaagh',
        title: "A Proper War!",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Bowser's remnants are demoralized. Humpik decides the only cure is a good, old-fashioned, large-scale assault on a well-defended enemy position to remind them of their strength.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "pending",
        pending_condition: "Pending Activation: Humpik must first be reunited with a significant portion of the Koopa Troop remnants before he can lead them in a large-scale assault.",
        steps: [
            { id: 'step1', title: "Pick a Target", status: 'active', description: "Identify a suitable target for the assault, such as a fortified Peach Loyalist forward base or a major Toad Gang fortress." },
            { id: 'step2', title: "Rally the Troops", status: 'locked', description: "Give a series of loud, inspiring speeches, and lead by example in a few smaller skirmishes to get the Koopa Troop's blood pumping." },
            { id: 'step3', title: "Unleash the War!", status: 'locked', description: "Lead the full-scale assault, focusing on overwhelming force and pure aggression to shatter the enemy's morale and claim victory." }
        ]
    },
    'humpik_biggest_axe': {
        id: 'humpik_biggest_axe',
        title: "The Biggest Axe",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik's axe is big, but it could be bigger. He seeks out a legendary, slightly unhinged Orc Mekboy from 'Da Krumperz' guild, who is said to be able to forge an ultimate weapon from the hull of the crashed Vigilance.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "A bigger axe means bigger hitting. The logic is simple and beautiful to Humpik. He desires a weapon that is as strong and indomitable as he is.",
        steps: [
            { id: 'step1', title: "Find the Mekboy", status: 'active', description: "Locate the reclusive Orc Mekboy, 'Grimgutz Rivet-Head', in his scrap-heap workshop in the Midlands borderlands." },
            { id: 'step2', title: "A Worthy Payment", status: 'locked', description: "Grimgutz doesn't work for coin. Humpik must pay him with something he desires: the still-glowing power core from an Imperial war-walker." },
            { id: 'step3', title: "The Forging", status: 'locked', description: "Assist Grimgutz in the chaotic and dangerous forging process, which involves a lot of shouting, hitting things with hammers, and experimental explosions." }
        ]
    },
    'humpik_rivals_respect': {
        id: 'humpik_rivals_respect',
        title: "A Rival's Respect",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik was impressed by the courage of the Loyalist soldier Embercap. After Embercap's presumed death and miraculous return, Humpik seeks him out for an honorable sparring match to test the mettle of this hardened warrior.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik respects strength and courage, regardless of the uniform. Embercap was presumed dead but has returned, now fully committed to a more ruthless Loyalist cause. Humpik wants to test his own strength against this hardened warrior, to see if his convictions have made him stronger.",
        steps: [
            { id: 'step1', title: "Locate the Loyalist Front Line", status: 'active', description: "Embercap is a key commander in the new Loyalist offensive. Humpik must find their forward base to issue a formal challenge." },
            { id: 'step2', title: "A Duel of Warriors", status: 'locked', description: "Challenge Embercap to a duel of honor, a test of pure strength between two dedicated soldiers on opposite sides of a brutal war." }
        ]
    },
    'humpik_training_day': {
        id: 'humpik_training_day',
        title: "Training Day",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik notices the Liberated Toads are brave but undisciplined. He takes it upon himself to teach them the 'Dwarven Way' of fighting: stand your ground, hit hard.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik sees potential in the little guys and wants to help his allies. He believes his direct, no-nonsense training methods are exactly what they need to survive.",
        steps: [
            { id: 'step1', title: "The 'Lecture'", status: 'active', description: "Gather the toads for a 'lecture' which is mostly just Humpik shouting encouragement and demonstrating how to properly smash a training dummy." },
            { id: 'step2', title: "Live Fire Exercise", status: 'locked', description: "Take the trained toads on a mission to clear out a den of weak but numerous monsters to test their new skills." }
        ]
    },
    'humpik_loudest_roar': {
        id: 'humpik_loudest_roar',
        title: "The Loudest Roar",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik hears of the 'Roaring Peaks,' mountains that are said to echo a warrior's shout with the force of a landslide. He goes there to prove he has the loudest, most powerful roar in the world.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "A simple, pure test of power. For Humpik, this is a spiritual journey to prove his own might against the very mountains themselves.",
        steps: [
            { id: 'step1', title: "The Climb", status: 'active', description: "Ascend the treacherous Roaring Peaks." },
            { id: 'step2', title: "The Echo", status: 'locked', description: "Unleash a roar so powerful it causes a minor avalanche, which conveniently blocks the path of a pursuing Iron Legion patrol." }
        ]
    },
    'humpik_smash_club': {
        id: 'humpik_smash_club',
        title: "The Smash Club",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik learns of an underground fighting ring run by the Iron Fists. He decides to enter, not for money, but for the sheer joy of a good fight.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik is a warrior who feels most alive in battle. The idea of a place with an endless supply of opponents to smash is his version of paradise.",
        steps: [
            { id: 'step1', title: "Find the Arena", status: 'active', description: "Get information on the location of the Iron Fists' secret fighting arena, 'The Grinder'." },
            { id: 'step2', title: "The Main Event", status: 'locked', description: "Fight his way through the ranks of the Smash Club, culminating in a battle against their current champion, 'Iron Mike'." }
        ]
    },
    'humpik_no_more_talk': {
        id: 'humpik_no_more_talk',
        title: "No More Talk!",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik grows tired of a preening Imperial diplomat who has been stalling negotiations with Bowser. He decides to solve the diplomatic impasse his own way.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik sees the diplomat's endless talking as a sign of weakness and disrespect. He believes a direct, physical demonstration of strength is the best way to speed things up.",
        steps: [
            { id: 'step1', title: "The 'Negotiation'", status: 'active', description: "Crash the diplomatic meeting." },
            { id: 'step2', title: "The 'Counter-Offer'", status: 'locked', description: "Smash the negotiating table in half. The diplomat will suddenly become much more agreeable." }
        ]
    },
    'humpik_chef_challenge': {
        id: 'humpik_chef_challenge',
        title: "The Chef's Challenge",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "A famously arrogant chef in a neutral city claims he can cook any ingredient in the world. Humpik takes this as a personal challenge and decides to bring him the most dangerous, hard-to-acquire meat he can find.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik appreciates a good meal and respects skill. This is a quest born of a love for food and a desire to see if the fancy chef can back up his big talk.",
        steps: [
            { id: 'step1', title: "The Ingredient", status: 'active', description: "Hunt and kill a Basilisk from the petrified forests, a creature whose gaze can turn you to stone." },
            { id: 'step2', title: "The Presentation", status: 'locked', description: "Deliver the Basilisk carcass to the chef and challenge him to cook it." }
        ]
    },
    'humpik_rescue_mission': {
        id: 'humpik_rescue_mission',
        title: "Dwarven Rescue Mission",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik learns a small squad of Koopa Troopas has been captured by the Peach Loyalists. He decides to launch a solo rescue mission to get them back.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Loyalty. Humpik feels a personal duty to rescue his captured comrades-in-arms, regardless of their race.",
        steps: [
            { id: 'step1', title: "Locate the Prison", status: 'active', description: "Find the Loyalist-controlled prison camp where the troopas are being held." },
            { id: 'step2', title: "The Breakout", status: 'locked', description: "Create a massive diversion (likely involving smashing a wall) and free the captured Koopas." }
        ]
    },
    'humpik_lost_helmet': {
        id: 'humpik_lost_helmet',
        title: "The Lost Helmet",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "During a battle, Humpik lost his favorite horned helmet. It has sentimental value. He wants it back.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "It's his favorite helmet. Simple as that.",
        steps: [
            { id: 'step1', title: "Retrace Your Steps", status: 'active', description: "Return to the last battlefield and search for the helmet." },
            { id: 'step2', title: "The New Owner", status: 'locked', description: "Discover that a particularly smug Goomba has found the helmet and is now wearing it, declaring himself 'King Goomba'. Convince him to return it." }
        ]
    },
    'humpik_pet_rock': {
        id: 'humpik_pet_rock',
        title: "Humpik's Pet",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik finds a very large, nicely shaped rock. He decides it's his new pet, 'Rocky'. He now needs to build a suitable home for it on the Vigilance.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "Humpik is a simple soul who has found a simple friend. He wants to care for it.",
        steps: [
            { id: 'step1', title: "The Rock", status: 'active', description: "Find the perfect rock." },
            { id: 'step2', title: "The Nest", status: 'locked', description: "Build a comfortable nest for Rocky in the corner of the cargo bay, using soft materials like captured enemy uniforms." }
        ]
    },
    'humpik_mighty_thirst': {
        id: 'humpik_mighty_thirst',
        title: "A Mighty Thirst",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik hears tales of a Dwarven ale so strong it can dissolve steel. He must have some.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "The pursuit of the ultimate drinking experience.",
        steps: [
            { id: 'step1', title: "Find the Brewery", status: 'active', description: "Travel to the Dwarven capital and find the legendary 'Anvil-Gut Brewery'." },
            { id: 'step2', title: "Prove Your Worth", status: 'locked', description: "The Dwarves don't serve their strongest ale to just anyone. Humpik must prove his worth by winning a drinking contest against their champion." }
        ]
    },
    'humpik_no_like_spiders': {
        id: 'humpik_no_like_spiders',
        title: "Humpik No Like Spiders",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik discovers a nest of giant spiders in the lower decks of the Vigilance. He does not like them. They must go.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "available",
        motivation: "A deep-seated, personal dislike of spiders.",
        steps: [
            { id: 'step1', title: "Find Nest", status: 'active', description: "Track the spiders to their nest in the ventilation system." },
            { id: 'step2', title: "Smash Nest", status: 'locked', description: "Apply axe liberally to the nest and its inhabitants." }
        ]
    },
    'humpik_gryphon_cargo': {
        id: 'humpik_gryphon_cargo',
        title: "Lost Cargo: Gilded Gryphon",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik, seeking to prove the reliability of his new allies, has taken on a contract from the Gilded Gryphon Mercenary Company. He must secure a lost cargo shipment from a bandit-infested canyon.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "pending",
        pending_condition: "Pending Activation: Humpik must first build a reputation with the Gilded Gryphon Mercenary Company. He can do this by completing other available contracts for them or by impressing their commander, Valerius, through a show of strength.",
        steps: [
            { id: 'step1', title: "Locate the Canyon", status: 'active', description: "Find the Whisperwood canyon where the caravan was last seen." },
            { id: 'step2', title: "Clear Out the Bandits", status: 'locked', description: "Defeat the bandits who ambushed the caravan." },
            { id: 'step3', title: "Secure and Return the Cargo", status: 'locked', description: "Secure the high-grade steel and return it to Commander Valerius for payment." }
        ]
    },
    'humpik_ork_vermin': {
        id: 'humpik_ork_vermin',
        title: "VERMIN EXTERMINATION",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Humpik has been challenged by Warboss Skarjaw of 'Da Krumperz' to a 'proper fight'. To earn the Orcs' respect (and a lucrative contract), he must clear out a scrap heap that has been infested with rival Ratchet Raiders.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "pending",
        pending_condition: "Pending Activation: Humpik must travel to the Known World Borderlands and find Warboss Skarjaw. He will need to prove his strength in a trial of the Warboss's choosing to unlock this contract.",
        steps: [
            { id: 'step1', title: "Go to Da Scrap-Heap", status: 'active', description: "Travel to the scrap heap claimed by Da Krumperz." },
            { id: 'step2', title: "Smash 'Em Gud", status: 'locked', description: "Defeat the Ratchet Raiders and their ramshackle mechs." },
            { id: 'step3', title: "Claim the Reward", status: 'locked', description: "Return to Warboss Skarjaw to claim the shiny bitz and his respect." }
        ]
    },
    'humpik_waluigi_favor': {
        id: 'humpik_waluigi_favor',
        title: "A Favor for a Friend?",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Waluigi has somehow convinced Humpik to perform a 'favor' for him: acquire a 'certain blueprint' from Lario's Workshop. This sneaky task goes against Humpik's nature, but Waluigi can be very persuasive...",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "pending",
        pending_condition: "Pending Activation: This quest will only become available after Waluigi decides to call in the life-debt Humpik owes him for the rescue from the Vigilance.",
        steps: [
            { id: 'step1', title: "Infiltrate Lario's Workshop", status: 'active', description: "Find a way into Lario's well-guarded workshop without causing a scene." },
            { id: 'step2', title: "Find the Blueprint", status: 'locked', description: "Locate the specific, vaguely-described blueprint amidst the chaotic mess of Lario's inventions." },
            { id: 'step3', title: "WAH-scape!", status: 'locked', description: "Escape with the blueprint and deliver it to Waluigi." }
        ]
    }
};
