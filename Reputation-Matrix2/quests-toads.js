
// This file contains all side quests related to the Liberated Toads.
export const TOADS_QUESTS = {
    // --- DAN'S QUESTS ---
    'dan_rakasha_request': {
        id: 'dan_rakasha_request',
        title: "The Rakasha's Request",
        type: 'side',
        category: 'Personal - Dan',
        objective: "Chief Thornpaw has sensed a corruption spreading from a nearby grove. He has asked Dan, as part of his training, to investigate and cleanse it.",
        assignee: "Dan",
        assigneeKey: 'archie', // Archie is pushing Dan to take this on.
        status: "pending",
        pending_condition: "Pending Activation: The party must travel to the Whispering Grove in the Midlands. This requires convincing Captain Lario to alter the Vigilance's course or finding an alternative means of reaching the surface.",
        start_condition: "Triggered after Dan begins his magical training with the Rakasha.",
        steps: [
            { id: 'step1', title: "Investigate the Whispering Grove", status: 'active', description: "The party is currently aboard the Vigilance. To reach the grove, they must either convince the airship's temperamental goblin captain, Lario, to make a detour, or find an alternative, likely more dangerous, method of reaching the location on their own." },
            { id: 'step2', title: "Identify the Source", status: 'locked', description: "Find the epicenter of the blight and determine what foul magic or creature is causing it." },
            { id: 'step3', title: "Perform the Cleansing Ritual", status: 'locked', description: "Using the teachings of the Rakasha, perform the ritual to purify the land and restore its balance." }
        ]
    },
    'dan_reclaim_the_staff': {
        id: 'dan_reclaim_the_staff',
        title: "The Staff's Burden",
        type: 'side',
        category: 'Personal - Dan',
        objective: "Dan attempted to reclaim the staff, but its chaotic power overwhelmed him. He had a severe mental breakdown, unleashing a fireball that killed 13 of the newly freed toads. He is now gravely injured, having lost an arm in the struggle, and has lost the staff to Toad Lee.",
        assignee: "Dan",
        assigneeKey: 'dan',
        status: "failed",
        steps: [
            { id: 'step1', title: "A Desperate Plea", status: 'completed', description: "Dan confronted the others in the engine room, pleading for the staff's return, fearing its corrupting influence." },
            { id: 'step2', title: "The Meltdown", status: 'failed', description: "Overwhelmed by desperation and the staff's corruption, Dan unleashed a fireball that killed 13 of the new toads. His sanity slipped as he was consumed by the staff's power." },
            { id: 'step3', title: "The Burden is Passed", status: 'failed', description: "Green T intervened in the chaos, severing Dan's arm to free him from the staff. Toad Lee then secured the volatile artifact, leaving Dan broken and defeated." }
        ]
    },
    'dan_sword_and_spell': {
        id: 'dan_sword_and_spell',
        title: "The Sword and the Spell",
        type: 'side',
        category: 'Personal - Dan',
        objective: "Dan feels pulled between his warrior training from Markop and his magical studies. He seeks to find a way to merge the two paths by finding the lost tomb of a legendary 'Spellsword' champion.",
        assignee: "Dan",
        assigneeKey: 'dan',
        status: "pending",
        pending_condition: "Pending Activation: The party must first research the location of the Tomb of the Azure Knight using the ship's library or underworld contacts before they can travel there.",
        start_condition: "Dan reaches Level 3.",
        steps: [
            { id: 'step1', title: "Find the Tomb", status: 'active', description: "Research ancient legends in the Vigilance's library or through contacts in the Freelancer Underworld to find the location of the Tomb of the Azure Knight, a warrior who perfectly blended swordplay and magic." },
            { id: 'step2', title: "Pass the Trials", status: 'locked', description: "The tomb is protected by trials that test both martial prowess and magical intellect. Dan must overcome them to prove his worth." },
            { id: 'step3', title: "Claim the Legacy", status: 'locked', description: "Claim the Azure Knight's enchanted blade, which allows the wielder to channel spells through their weapon strikes." }
        ]
    },
    'dan_orc_trial': {
        id: 'dan_orc_trial',
        title: "The Orc's Trial",
        type: 'side',
        category: 'Personal - Dan',
        objective: "After being bitten by a strange creature at the Orc war camp, Dan feels an unusual connection to the tribe. He must investigate the bite and the strange 'trial' the Orcs now speak of.",
        assignee: "Dan",
        assigneeKey: 'dan',
        status: "available",
        motivation: "The bite left a strange mark, both physically and spiritually. Dan feels a pull towards the Orc camp, a need to understand what happened and why the normally hostile Orcs now watch him with a mix of suspicion and respect. Is this a curse, or an opportunity?",
        steps: [
            { id: 'step1', title: "Investigate the Bite", status: 'active', description: "Consult with Chief Thornpaw or other knowledgeable healers to identify the creature that bit Dan and the nature of its venom or magic." },
            { id: 'step2', title: "The Warboss's Summons", status: 'locked', description: "The Orc Warboss has taken notice of Dan's mercy and survival. He summons Dan to undergo a trial to earn the tribe's respect." },
            { id: 'step3', title: "Survive the Pit", status: 'locked', description: "Face the Orc's champion in their fighting pit. The goal is not necessarily to win, but to prove his courage and strength." }
        ]
    },

    // --- TOAD LEE'S QUESTS ---
    'lee_firsts_legacy': {
        id: 'lee_firsts_legacy',
        title: "The First's Legacy",
        type: 'side',
        category: 'Personal - Toad Lee',
        objective: "Feeling overshadowed by Dan's magical destiny, Toad Lee seeks to prove his own worth as a warrior by taking on a dangerous mission alone: clearing out a nest of venomous Spidersaurs threatening Toad's Landing.",
        assignee: "Toad Lee",
        assigneeKey: 'toad_lee',
        status: "available",
        motivation: "Toad Lee's identity is that of the protector, the first one who stood up. He needs to reaffirm that role and prove that brute strength and courage are just as valuable as flashy magic.",
        steps: [
            { id: 'step1', title: "The Lone Hunter", status: 'active', description: "Without telling the others, Toad Lee ventures into the nearby caves to hunt the Spidersaurs." },
            { id: 'step2', title: "The Broodmother", status: 'locked', description: "After clearing the lesser creatures, Toad Lee must face the massive Spidersaur Broodmother in a test of pure strength and endurance." }
        ]
    },
    'lee_axe_to_grind': {
        id: 'lee_axe_to_grind',
        title: "An Axe to Grind",
        type: 'side',
        category: 'Personal - Toad Lee',
        objective: "Toad Lee's axe is big but crudely made. He learns of a master Dwarven smith in the mountains of Middle Earth and seeks him out to have his weapon reforged into a true masterpiece.",
        assignee: "Toad Lee",
        assigneeKey: 'toad_lee',
        status: "available",
        start_condition: "Toad Lee reaches Level 4.",
        steps: [
            { id: 'step1', title: "The Mountain Forge", status: 'active', description: "Travel to the Dwarven forge and seek an audience with the legendary smith, Balin Stone-Shaper." },
            { id: 'step2', title: "A Worthy Price", status: 'locked', description: "Balin will not work for gold. Toad Lee must bring him a rare Adamantine nugget, found only in a dangerous, monster-infested mine." },
            { id: 'step3', title: "The Forging", status: 'locked', description: "Assist Balin in the reforging, a process that requires both the smith's skill and the warrior's strength to complete." }
        ]
    },
    'lee_old_wounds': {
        id: 'lee_old_wounds',
        title: "Old Wounds",
        type: 'side',
        category: 'Personal - Toad Lee',
        objective: "Toad Lee learns that the slaver who originally captured him is now a high-ranking enforcer in the Iron Fists gang. He must confront his former tormentor and decide between revenge and justice.",
        assignee: "Toad Lee",
        assigneeKey: 'toad_lee',
        status: "available",
        motivation: "This is a deeply personal quest to close a dark chapter of his life. Toad Lee needs to face the source of his trauma to truly move forward as a free toad.",
        steps: [
            { id: 'step1', title: "The Tip-Off", status: 'active', description: "Get a lead from a Freelancer Underworld informant on the location of 'Slaver Krang' within an Iron Fists-controlled warehouse." },
            { id: 'step2', title: "The Confrontation", status: 'locked', description: "Infiltrate the warehouse and confront Krang. Will Toad Lee give in to his rage, or will he capture Krang and turn him over to the Oathbound Judges?" }
        ]
    },
    
    // --- EAGER'S QUESTS ---
    'eager_lost_caravan': {
        id: 'eager_lost_caravan',
        title: "The Lost Caravan",
        type: 'side',
        category: 'Personal - Eager',
        objective: "Eager learns that a merchant caravan belonging to his family, which went missing years ago, was last seen in the treacherous Bandit's Pass. He wants to find the wreckage to recover a family heirloom and find peace.",
        assignee: "Eager",
        assigneeKey: 'eager',
        status: "available",
        motivation: "For Eager, this is about closure. He wants to know what happened to his family and recover the last memento he has of his past life before he was enslaved.",
        steps: [
            { id: 'step1', title: "Find Bandit's Pass", status: 'active', description: "Use old maps and underworld contacts to locate the infamous Bandit's Pass, now controlled by a ruthless gang of rogue mercenaries." },
            { id: 'step2', title: "The Ambush Site", status: 'locked', description: "Find the site of the ambush and the wreckage of the caravan, and piece together what happened." },
            { id: 'step3', title: "Recover the Locket", status: 'locked', description: "The heirloom, a simple silver locket, was taken by the bandit chief. Eager must infiltrate their camp and get it back." }
        ]
    },
    'eager_message_of_hope': {
        id: 'eager_message_of_hope',
        title: "A Message of Hope",
        type: 'side',
        category: 'Personal - Eager',
        objective: "Believing other enslaved Toads exist, Eager wants to establish a secret 'Toadroad'—a network of hidden caches and coded messages to help others find their way to freedom at Toad's Landing.",
        assignee: "Eager",
        assigneeKey: 'eager',
        status: "available",
        start_condition: "Toad's Landing is established and secure.",
        steps: [
            { id: 'step1', title: "The First Post", status: 'active', description: "Establish the first dead-drop location in a nearby town with a known population of oppressed Toads." },
            { id: 'step2', title: "The Code", status: 'locked', description: "Develop a simple code, based on mushroom types, that can be used to pass messages without being deciphered by overlords." },
            { id: 'step3', title: "The First Escapee", status: 'locked', description: "A message is received! Eager must use the Toadroad to guide the first group of escaping toads safely to Toad's Landing." }
        ]
    },
     'eager_the_performer': {
        id: 'eager_the_performer',
        title: "The Performer's Past",
        type: 'side',
        category: 'Personal - Eager',
        objective: "Eager's past as a circus performer comes back to haunt him when his cruel former Ringmaster shows up in a nearby town, using enslaved creatures for his act. Eager wants to free them.",
        assignee: "Eager",
        assigneeKey: 'eager',
        status: "available",
        motivation: "Eager cannot stand to see others suffer as he did. This quest is about confronting his past and using the skills he learned as a performer to become a liberator.",
        steps: [
            { id: 'step1', title: "Infiltrate the Circus", status: 'active', description: "Use his old skills to get a job at the circus and identify where the enslaved creatures are being kept." },
            { id: 'step2', title: "The Grand Distraction", status: 'locked', description: "Sabotage the main event with a spectacular, non-lethal performance using his whip, creating a diversion to free the creatures." }
        ]
    },

    // --- RYAN'S QUESTS ---
    'ryan_glimmer_of_past': {
        id: 'ryan_glimmer_of_past',
        title: "A Glimmer of the Past",
        type: 'side',
        category: 'Personal - Ryan',
        objective: "Ryan's study of X.O.'s staff reveals a psychic echo within. He wants to perform a ritual to safely view the memories trapped inside, hoping to understand X.O.'s motivations.",
        assignee: "Ryan",
        assigneeKey: 'ryan',
        status: "available",
        motivation: "Ryan's scholarly curiosity drives him. He believes that understanding an enemy is the first step to ensuring they can never rise again. He wants knowledge, not power, from the staff.",
        steps: [
            { id: 'step1', title: "The Ritual Components", status: 'active', description: "Gather the components for a 'psychometric resonance' ritual: a silver mirror, powdered dream-dust, and a magically attuned crystal." },
            { id: 'step2', title: "Perform the Ritual", status: 'locked', description: "Perform the dangerous ritual on the staff, opening a window into X.O.'s memories." },
            { id: 'step3', title: "The Vision", status: 'locked', description: "Witness a key memory from X.O.'s past that reveals her true motives and perhaps the source of her immense power." }
        ]
    },
    'ryan_unwritten_spell': {
        id: 'ryan_unwritten_spell',
        title: "The Unwritten Spell",
        type: 'side',
        category: 'Personal - Ryan',
        objective: "Ryan discovers a half-finished spellbook from a long-dead Mages' Guild Innovator. He believes he can complete the final, powerful spell, but it requires rare and dangerous components.",
        assignee: "Ryan",
        assigneeKey: 'ryan',
        status: "available",
        start_condition: "Ryan reaches Level 4.",
        steps: [
            { id: 'step1', title: "The Components", status: 'active', description: "Gather the three components for the spell: the tear of a ghost, the spark from a living storm, and a word of power spoken by a dragon." },
            { id: 'step2', title: "The Final Incantation", status: 'locked', description: "With the components gathered, Ryan must complete the spell's arcane matrix and attempt to cast it for the first time." }
        ]
    },
    'ryan_library_card': {
        id: 'ryan_library_card',
        title: "A Library Card to Adventure",
        type: 'side',
        category: 'Personal - Ryan',
        objective: "Ryan wants access to the Mages' Guild library in the Midlands, a place of immense knowledge. To get a guest pass, he must complete a task for a junior librarian: recover a book of poetry that was stolen by a particularly sentimental goblin.",
        assignee: "Ryan",
        assigneeKey: 'ryan',
        status: "available",
        motivation: "Knowledge is power, and Ryan is hungry for it. This mundane-seeming task is the key to unlocking a treasure trove of arcane lore.",
        steps: [
            { id: 'step1', title: "Track the Goblin", status: 'available', description: "Find the goblin book-thief, 'Snitch,' who is hiding in the city's underbelly." },
            { id: 'step2', title: "The 'Negotiation'", status: 'locked', description: "Convince Snitch to return the book. This may involve trading a shiny object, winning a riddle contest, or simply intimidating him." }
        ]
    },

    // --- ROGER'S QUESTS ---
    'roger_one_last_job': {
        id: 'roger_one_last_job',
        title: "One Last Job",
        type: 'side',
        category: 'Personal - Roger',
        objective: "An old contact of Roger's from the Freelancer Underworld, a sly raccoon named 'Fingers', offers him a cut of a huge score: robbing a Regal Empire tax convoy. Roger is torn between his new life and the lure of a massive payday that could secure the Toads' future.",
        assignee: "Roger",
        assigneeKey: 'roger',
        status: "available",
        motivation: "Roger is a pragmatist. He sees the Toads struggling and believes this one heist could solve all their problems. It's a dangerous risk, but to him, it's a logical one.",
        steps: [
            { id: 'step1', title: "The Meeting", status: 'active', description: "Meet with 'Fingers' to get the details of the heist: the convoy's route, its defenses, and the potential payout." },
            { id: 'step2', title: "The Decision", status: 'locked', description: "Roger must decide whether to accept the job, and whether to tell the other Toads and the party about it.", options: ["Accept, and do it secretly.", "Accept, and try to convince the others to help.", "Refuse, and cut ties with his past."] }
        ]
    },
    'roger_a_better_bang': {
        id: 'roger_a_better_bang',
        title: "A Better Bang",
        type: 'side',
        category: 'Personal - Roger',
        objective: "Roger's firearm is functional, but he's seen what real magitek weapons can do. He wants to find a Ratchet Raider gunsmith to upgrade his weapon with some serious, if unstable, firepower.",
        assignee: "Roger",
        assigneeKey: 'roger',
        status: "available",
        start_condition: "Roger witnesses a magitek weapon in action.",
        steps: [
            { id: 'step1', title: "The Gunsmith", status: 'active', description: "Find the workshop of 'Pip Klank-Sprocket', a goblin gunsmith known for her dangerously creative modifications." },
            { id: 'step2', title: "The Price of Power", status: 'locked', description: "Pip requires a rare power source for the upgrade: a still-sparking capacitor from a recently destroyed Imperial automaton." },
            { id: 'step3', title: "The Upgrade", status: 'locked', description: "Pip upgrades Roger's gun. It's now more powerful, but has a small chance to backfire spectacularly on any given shot." }
        ]
    },
    'roger_the_accountant': {
        id: 'roger_the_accountant',
        title: "The Accountant",
        type: 'side',
        category: 'Personal - Roger',
        objective: "Roger believes the Toads need a sustainable source of income. He decides to use his pragmatic mind to 'audit' a local merchant guild's finances, looking for 'inefficiencies' that can be exploited for the Toads' benefit.",
        assignee: "Roger",
        assigneeKey: 'roger',
        status: "available",
        motivation: "Survival requires resources. Roger sees the world as a system of numbers and believes that by manipulating that system, he can provide long-term security for his people.",
        steps: [
            { id: 'step1', title: "Acquire the Ledgers", status: 'available', description: "Steal or covertly copy the financial ledgers from the Sunstone Trading Company's local office." },
            { id: 'step2', title: "Find the Loophole", status: 'locked', description: "Analyze the ledgers to find a legal (or semi-legal) loophole, such as an unclaimed tax rebate or a mismanaged asset, that can be claimed by the Liberated Toads." }
        ]
    },

    // --- BONES' QUESTS ---
    'bones_orcs_debt': {
        id: 'bones_orcs_debt',
        title: "The Orc's Debt",
        type: 'side',
        category: 'Personal - Bones',
        objective: "Bones feels a debt of honor to the Orcs who kidnapped but ultimately spared him. He learns their clan is starving due to the war and decides to repay his debt by hijacking an Iron Legion supply convoy and delivering the food to them.",
        assignee: "Bones",
        assigneeKey: 'bones',
        status: "available",
        motivation: "Bones lives by a harsh, cynical code, and a debt is a debt. The Orcs showed him a strange kind of mercy, and he feels compelled to repay it in the only way he knows how: with violence directed at a common enemy.",
        steps: [
            { id: 'step1', title: "The Convoy", status: 'active', description: "Gather intelligence on an upcoming Iron Legion food convoy, including its route and guard detail." },
            { id: 'step2', title: "The Heist", status: 'locked', description: "Ambush the convoy and secure the supplies." },
            { id: 'step3', title: "The Delivery", status: 'locked', description: "Deliver the supplies to the Orc clan, an act that will certainly gain their respect, but also the ire of the Iron Legion." }
        ]
    },
    'bones_facing_the_mirror': {
        id: 'bones_facing_the_mirror',
        title: "Facing the Mirror",
        type: 'side',
        category: 'Personal - Bones',
        objective: "Bones' grotesque appearance has made him an outcast his whole life. He hears a rumor of a magical spring in a fey-touched grove that is said to change a person's appearance to reflect their inner self. He seeks it out, both terrified and hopeful of what he might become.",
        assignee: "Bones",
        assigneeKey: 'bones',
        status: "available",
        motivation: "This is a quest for self-acceptance. Bones has always been judged by his monstrous exterior. He wants to know, once and for all, if there is something different underneath, or if he truly is the monster everyone sees.",
        steps: [
            { id: 'step1', title: "The Whispering Grove", status: 'active', description: "Find the location of the legendary Grove of Reflection, a place where the barrier to the Feywild is thin." },
            { id: 'step2', title: "The Guardian's Riddle", status: 'locked', description: "The spring is guarded by a fey creature who will only grant access to those who can answer a riddle about the nature of identity and appearance." },
            { id: 'step3', title: "The Reflection", status: 'locked', description: "Drink from the spring and face the consequences, for better or worse." }
        ]
    },
    'bones_the_survivor': {
        id: 'bones_the_survivor',
        title: "The Survivor's Tale",
        type: 'side',
        category: 'Personal - Bones',
        objective: "A young, frightened toad is having nightmares after the escape. Bones, seeing a reflection of his own trauma, decides to help by finding a rare, calming herb and telling the young toad a story of survival.",
        assignee: "Bones",
        assigneeKey: 'bones',
        status: "available",
        motivation: "Bones sees his own past pain in the young toad and feels a gruff, protective instinct. He wants to teach the lesson he learned: survival is its own kind of victory.",
        steps: [
            { id: 'step1', title: "Find the Moon-Petal Flower", status: 'available', description: "Find a rare Moon-Petal flower, which only blooms at night in monster-infested areas, to make a calming tea." },
            { id: 'step2', title: "A Story by the Fire", status: 'locked', description: "Share the tea with the young toad and tell him a story from his own past, framing survival not as a weakness, but as a strength." }
        ]
    },
    
    // --- GROUP QUESTS ---
    'toads_rescue_eager': {
        id: 'toads_rescue_eager',
        title: "Rescue Eager",
        type: 'side',
        category: 'Liberated Toads',
        objective: "What began as a simple rescue for Eager escalated into a desperate flight through the capital's sewers. The party has now returned with a cure for Dan, bringing the harrowing ordeal to a close.",
        assignee: "Liberated Toads",
        assigneeKey: 'liberated_toads',
        status: "completed",
        motivation: "Eager is one of their own. The Liberated Toads cannot abandon one of their family to the mercy of his captors. His rescue is their top priority.",
        steps: [
            { id: 'step1', title: "Prison Break Fiasco", status: 'completed', description: "The initial prison rescue failed. Eager was abducted by another guard amidst the chaos and subsequently intercepted by raiders." },
            { id: 'step2', title: "A New Captor", status: 'completed', description: "Archie located Eager working as a bartender in a capital restaurant, under the watchful eye of his new 'employer,' an angel." },
            { id: 'step3', title: "Restaurant Raid", status: 'completed', description: "An attempt to extract Eager from the restaurant failed when the exits were blocked and the Iron Legion initiated a full-scale raid on the establishment." },
            { id: 'step4', title: "Out of the Frying Pan...", status: 'completed', description: "The party successfully escaped the sewers after a chaotic encounter with a 'blue dragon'. They acquired what they believed to be a cure, returned to the archmage, and Dan was successfully healed, though left physically diminished. With Dan safe and Eager rescued, the sewer ordeal has finally ended." }
        ]
    },
    'toads_a_place_to_call_home': {
        id: 'toads_a_place_to_call_home',
        title: "A Place to Call Home",
        type: 'side',
        category: 'Liberated Toads',
        objective: "The Liberated Toads are a nomadic group, vulnerable to attack. They need to find and secure a permanent, defensible location to build a new home, 'Toad's Landing'.",
        assignee: "Liberated Toads",
        assigneeKey: 'liberated_toads',
        status: "active",
        start_condition: "Talk to Dan after he has established himself as a leader ('Hold a Council' focus).",
        steps: [
            { id: 'step1', title: "Scout Potential Locations", status: 'active', description: "With the decision made to find a permanent home, stealth teams must be sent out on foot to scout potential locations for 'Toad's Landing'. The Vigilance is being decommissioned for fortifications and cannot be used for aerial support.", options: ["An abandoned Imperial watchtower.", "A hidden, fertile valley.", "A defensible cave system."] },
            { id: 'step2', title: "Clear the Dangers", status: 'locked', description: "The chosen location will not be uninhabited. Clear out any resident monsters, bandits, or hazards. Toad Lee will lead the assault." },
            { id: 'step3', title: "Found 'Toad's Landing'", status: 'locked', description: "With the location secured, begin construction on basic shelters, a well, and a palisade wall. Roger will oversee the logistics." }
        ]
    },
    'toads_first_harvest': {
        id: 'toads_first_harvest',
        title: "The First Harvest",
        type: 'side',
        category: 'Liberated Toads',
        objective: "The Liberated Toads need a stable food source to survive the coming season. They must find fertile ground, acquire seeds, and protect their first crops from the dangers of the world.",
        assignee: "Liberated Toads",
        assigneeKey: 'liberated_toads',
        status: "available",
        start_condition: "This quest becomes available after founding 'Toad's Landing'.",
        steps: [
            { id: 'step1', title: "Find Arable Land", status: 'active', description: "Scout the area around Toad's Landing for a plot of land suitable for farming." },
            { id: 'step2', title: "Acquire Seeds", status: 'locked', description: "Seeds are scarce. The Toads must either trade with a nearby settlement, raid an abandoned farm, or find a cache of wild, edible plants.", options: ["Trade with the Mushroom Regency.", "Scavenge from the war-torn farmlands.", "Forage for wild seeds."] },
            { id: 'step3', title: "Protect the Crop", status: 'locked', description: "The growing crops will attract hungry wildlife and opportunistic bandits. The Toads must stand guard and protect their harvest until it's ready." }
        ]
    },
    'toads_unseen_cargo': {
        id: 'toads_unseen_cargo',
        title: "The Unseen Cargo & The Vow of Fury",
        type: 'side',
        category: 'Liberated Toads',
        objective: "The 150 trafficked toads have been freed, but their integration has sparked a political crisis. After a violent brawl and a magical catastrophe caused by Dan, the new toads, led by the vengeful 'L', have sworn a fragile vow of loyalty in exchange for concessions. The party must now manage this volatile new alliance.",
        assignee: "Liberated Toads",
        assigneeKey: 'liberated_toads',
        status: "active",
        start_condition: "Triggered after Black T reveals the toad trafficking operation.",
        steps: [
            { id: 'step1', title: "Find the Key", status: 'completed', description: "The party successfully freed the 150 trafficked toads from their barrel prisons." },
            { id: 'step2', title: "Chaos and Demands", status: 'completed', description: "The 150 trafficked toads, led by the vengeful L, have been freed. However, they refuse to simply join the existing Liberated Toads. A brawl over the few available weapons erupted into chaos, which was horrifically escalated when Dan, in a desperate attempt to reclaim X.O.'s staff, unleashed a fireball that killed 13 of the new arrivals. In the aftermath, L presented a list of 13 non-negotiable demands as their condition for integration." },
            { id: 'step3', title: "The Counter-Offer & The Vow", status: 'completed', description: "The original Liberated Toads leadership rejected the most extreme demands and presented a counter-offer. After a tense vote, the new toads accepted. L, their leader, made a powerful speech, and all representatives swore a vow on the now-sentient staff to protect it and each other, forming the 'First Cohort of Renewal'." },
            { id: 'step4', title: "An Uneasy Alliance", status: 'active', description: "The vow has been sworn, but tensions are incredibly high. Dan is incapacitated, Toad Lee holds the volatile staff, and 13 toads are dead. The party must navigate this fragile peace and fully integrate the 'First Cohort of Renewal' into their operations." }
        ]
    }
};
