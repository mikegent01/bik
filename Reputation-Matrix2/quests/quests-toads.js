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
    'eager_lost_caravan': { /* ... No Changes ... */ },
    'eager_message_of_hope': { /* ... No Changes ... */ },
    'eager_the_performer': { /* ... No Changes ... */ },

    // --- RYAN'S QUESTS ---
    'ryan_glimmer_of_past': {
        id: 'ryan_glimmer_of_past',
        title: "A Glimmer of the Past",
        type: 'side',
        category: 'Personal - Ryan',
        objective: "Ryan's study of X.O.'s staff reveals a psychic echo within. He wants to perform a ritual to safely view the memories trapped inside, hoping to understand X.O.'s motivations.",
        assignee: "Ryan",
        is_updated: true,
        assigneeKey: 'ryan',
        status: "available",
        motivation: "Ryan's scholarly curiosity drives him. After witnessing the Oracle's perversion of life with clones and robots at Shadeward Mansion, he feels a renewed urgency to understand the origins and motivations behind such powerful and corrupting artifacts before they can cause more harm.",
        steps: [
            { id: 'step1', title: "The Ritual Components", status: 'active', description: "Gather the components for a 'psychometric resonance' ritual: a silver mirror, powdered dream-dust, and a magically attuned crystal." },
            { id: 'step2', title: "Perform the Ritual", status: 'locked', description: "Perform the dangerous ritual on the staff, opening a window into X.O.'s memories." },
            { id: 'step3', title: "The Vision", status: 'locked', description: "Witness a key memory from X.O.'s past that reveals her true motives and perhaps the source of her immense power." }
        ]
    },
    'ryan_unwritten_spell': { /* ... No Changes ... */ },
    'ryan_library_card': { /* ... No Changes ... */ },

    // --- ROGER'S QUESTS ---
    'roger_one_last_job': {
        id: 'roger_one_last_job',
        title: "One Last Job",
        type: 'side',
        is_updated: true,
        category: 'Personal - Roger',
        objective: "An old contact of Roger's from the Freelancer Underworld, a sly raccoon named 'Fingers', offers him a cut of a huge score: robbing a Regal Empire tax convoy. Roger is torn between his new life and the lure of a massive payday that could secure the Toads' future.",
        assignee: "Roger",
        assigneeKey: 'roger',
        status: "available",
        motivation: "Roger is a pragmatist. After seeing the Iron Legion's advanced capabilities and infiltration tactics firsthand at Shadeward Mansion, he knows they are outgunned and vulnerable. A massive influx of funds from this heist could be the only way to acquire the resources needed for their long-term survival.",
        steps: [
            { id: 'step1', title: "The Meeting", status: 'active', description: "Meet with 'Fingers' to get the details of the heist. The risk is now significantly higher, as the Legion is on high alert and has proven to be a far more sophisticated enemy than previously thought." },
            { id: 'step2', title: "The Decision", status: 'locked', description: "Roger must decide whether to accept the high-risk, high-reward job, and whether to tell the others, knowing their trust is already shattered.", options: ["Accept, and do it secretly.", "Accept, and try to convince the others to help.", "Refuse, and cut ties with his past."] }
        ]
    },
    'roger_a_better_bang': { /* ... No Changes ... */ },
    'roger_the_accountant': { /* ... No Changes ... */ },

    // --- BONES' QUESTS ---
    'bones_orcs_debt': {
        id: 'bones_orcs_debt',
        title: "The Orc's Debt",
        type: 'side',
        category: 'Personal - Bones',
        objective: "Bones feels a debt of honor to the Orcs who spared him, but now it's personal. After being captured and interrogated by the Iron Legion at Shadeward Mansion, he wants to repay his debt and get revenge by hijacking a Legion supply convoy and delivering the food to the starving Orc clan.",
        assignee: "Bones",
        is_updated: true,
        assigneeKey: 'bones',
        status: "available",
        motivation: "Bones lives by a harsh code, and a debt is a debt. But now he has a score to settle. The Orcs showed him mercy, while the Legion showed him a cage. He's compelled to repay one and punish the other in the only way he knows how: with violence.",
        steps: [
            { id: 'step1', title: "The Convoy", status: 'active', description: "Gather intelligence on an upcoming Iron Legion food convoy, including its route and guard detail. This is now a revenge mission as much as a supply run." },
            { id: 'step2', title: "The Heist", status: 'locked', description: "Ambush the convoy and secure the supplies." },
            { id: 'step3', title: "The Delivery", status: 'locked', description: "Deliver the supplies to the Orc clan, an act that will solidify their respect and further enrage the Iron Legion." }
        ]
    },
    'bones_facing_the_mirror': { /* ... No Changes ... */ },
    'bones_the_survivor': { /* ... No Changes ... */ },
    
    // --- GROUP QUESTS ---
    'toads_rescue_eager': {
        id: 'toads_rescue_eager',
        title: "Rescue Eager",
        is_updated: true,
        type: 'side',
        category: 'Liberated Toads',
        objective: "Eager was successfully extracted from the restaurant, but the party's escape led them into the treacherous, lava-filled sewers beneath the capital. With their guide revealed as a traitor and a monstrous Behir blocking the path, the new objective was simple: survive.",
        assignee: "Liberated Toads",
        assigneeKey: 'liberated_toads',
        status: "completed",
        motivation: "Eager is one of their own. The Liberated Toads cannot abandon one of their family to the mercy of his captors. His rescue is their top priority.",
        steps: [
            { id: 'step1', title: "Prison Break Fiasco", status: 'completed', description: "The initial prison rescue failed. Eager was abducted by another guard amidst the chaos and subsequently intercepted by raiders." },
            { id: 'step2', title: "A New Captor", status: 'completed', description: "Archie located Eager working as a bartender in a capital restaurant, under the watchful eye of his new 'employer,' an angel." },
            { id: 'step3', title: "Restaurant Raid", status: 'completed', description: "An attempt to extract Eager from the restaurant failed when the exits were blocked and the Iron Legion initiated a full-scale raid on the establishment." },
            { id: 'step4', title: "Out of the Frying Pan...", status: 'completed', description: "Eager was successfully extracted from the restaurant, but the party was forced to flee into the capital's sewers. They survived the ordeal with the Behir, healed Dan, and escaped the capital, completing their desperate mission." }
        ]
    },
 'toads_a_place_to_call_home': {
        id: 'toads_a_place_to_call_home',
        title: "A Place to Call Home",
        type: 'side',
        category: 'Liberated Toads',
        is_updated: true,
        objective: "The discovery of an Iron Legion mole has shattered the illusion of safety aboard the Vigilance. The nomadic group is compromised and vulnerable. They must find and secure a permanent, defensible location to build a new home, 'Toad's Landing', before their enemies can strike again.",
        assignee: "Liberated Toads",
        assigneeKey: 'liberated_toads',
        status: "active",
        start_condition: "Talk to Dan after he has established himself as a leader ('Hold a Council' focus).",
        steps: [
            { 
                id: 'step1', 
                title: "Organize Expeditions", 
                status: 'active', 
                description: "Following a successful vote, the Toads have a new doctrine: large, well-armed expeditions will be sent to scout potential locations. The focus is on safety through numbers and caution. Toad Lee and Roger are organizing the first teams.", 
                options: ["Scout an abandoned Imperial watchtower.", "Scout a hidden, fertile valley.", "Scout a defensible cave system."] 
            },
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
    'liberated_toads_integration': {
        id: 'liberated_toads_integration',
        title: "The Shattered Vow",
        type: 'faction',
        category: 'Liberated Toads',
        is_updated: true,
        objective: "The integration of the 'First Cohort of Renewal' was already fragile. The discovery of an Iron Legion mole has shattered it completely. Paranoia is rampant, and accusations are flying. The Vow is meaningless without trust, and the leadership must act decisively to prevent a civil war.",
        assignee: "Liberated Toads",
        assigneeKey: 'liberated_toads',
        status: "active",
        start_condition: "Triggered after Black T reveals the toad trafficking operation.",
        steps: [
            { id: 'step1', title: "The Vow of Fury", status: 'completed', description: "After a magical catastrophe killed 13 of their number, the 'First Cohort of Renewal' swore a fragile vow of unity with the original Liberated Toads." },
            { id: 'step2', title: "The Betrayal", status: 'completed', description: "A group of toads was lured into a trap at Shadeward Mansion. The subsequent discovery of an Iron Legion mole among them has broken the fragile peace." },
            { id: 'step3', title: "The Vote for the Moles", status: 'completed', description: "A vote was held to decide the fate of the escaped moles. Archie's proposal for execution was defeated by Ryan's counter-proposal to capture and interrogate them." },
            { id: 'step4', title: "A New Doctrine", status: 'completed', description: "In a second major vote, Dan's counter-proposal for cautious, large-scale expeditions was overwhelmingly approved, defeating Archie's more reckless plan. This has solidified Dan's recovering leadership and set a new, unified strategy for the cohort."},
            { id: 'step5', title: "The Hunt for Knowledge", status: 'active', description: "With a new sense of purpose, the cohort's primary mission is to track down the traitors, The Mole and Gerick, and capture them alive for 'arcane scrutiny and interrogation' to uncover the full extent of the Iron Legion's infiltration." }
        ]
    },
};