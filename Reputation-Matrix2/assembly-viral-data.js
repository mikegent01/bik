import { WAHBOOK_INTEL_POSTS } from './assembly-intel-data.js';

// This file contains "viral" posts that appear on the main Wah-Book feed.
// They are ordered by the 'order' property, with higher numbers appearing first.
// Posts are grouped by 'eventId' to represent distinct story arcs.

export const VIRAL_POSTS = [

    // =================================================================
    // === BRAMBLEHAVEN SIEGE ARC ===
    // This arc tells the story of the bloody battle for Bramblehaven,
    // starting with the official "victory" and then flashing back to the brutal reality.
    // =================================================================

    // --- The Official Victory & Immediate Aftermath ---
    // The story starts here: the world sees a victory, but the main players reveal the true cost.
  //  {
  //      id: 'wah_media_bramblehaven',
  //      order: 20080,
  //      characterKey: 'wah_media_collective',
  //      timestamp: 'Just Now',
  //      content: `**BRAMBLEHAVEN FALLS IN BLOODY SIEGE!** Captain Toadette's Peach Loyalists have conquered the Fawful bastion of Bramblehaven after a brutal, day-long assault. Sources describe a battle of shocking attrition, culminating in a final charge where surrendering Fawful troops were shown no mercy. Loyalist casualties are 'catastrophic', but the victory gives them a key strategic position and, according to a dying soldier, 'invaluable intel'. The ruthless tactics have solidified the Loyalists' fearsome reputation across the kingdom.`,
  //      image: 'battle_mushroom_kingdom.png',
  //      image_alt: "The smoldering ruins of a fortress under a dark, rainy sky.",
  //      likes: 3105,
  //      comments: [
  //          { characterKey: 'generic_toad', text: "They killed them... even after they surrendered? By the stars, what are they becoming?" },
  //          { characterKey: 'iron_legion', text: "A decisive, if costly, victory. The strategic value of the captured intel cannot be overstated. War requires sacrifice." },
  //          { characterKey: 'the_broker', text: "Intel is the true prize. The market for Fawful's operational data just skyrocketed. My inbox is open." }
  //      ],
  //      eventId: 'bramblehaven_siege'
  //  },
  //  {
  //      id: 'toadette_bramblehaven_victory',
  //      order: 20079,
  //      characterKey: 'captain_toadette',
  //      timestamp: '15 minutes ago',
  //      content: `Victory. The cost was high, but Bramblehaven is ours. Let this be a lesson to all who stand against the true monarchy. We will not falter. We will not fail. We will pay any price for justice. For the Princess.`,
  //      likes: 1540,
  //      comments: [
  //          { characterKey: 'embercap', text: "For the Princess." },
  //          { characterKey: 'sergeant_quill', text: "A glorious day for the Kingdom, Captain!" }
  //      ],
  //      eventId: 'bramblehaven_siege'
  //  },
    {
        id: 'dewdrop_bramblehaven_casualties',
        order: 20078,
        characterKey: 'dewdrop',
        timestamp: '30 minutes ago',
        content: `So many wounded... Mistveil is stable, but the frost magic was severe. We've taken the fort, but the infirmary is overflowing. I can't... I can't save them all. This victory feels like a funeral.`,
        likes: 988,
        comments: [
            { characterKey: 'dan', text: "Stay strong, Dewdrop. You're doing all you can. Your work is the most important of all." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'fawful_bramblehaven_fury',
        order: 20077,
        characterKey: 'fawful',
        timestamp: '1 hour ago',
        content: `I HAVE FURY! A fury of fortress-falling! My beautiful bastion of brambles has been befouled by the feet of filthy mushroom fools! They have the cheering of cheating cheaters! This is but a setback! A tiny, insignificant boo-boo on the knee of my grand plan! My revenge will have the mustard of DOOM!`,
        likes: 1201,
        comments: [],
        eventId: 'bramblehaven_siege'
    },

    // --- Flashback: The Cost of "No Quarter" ---
    // These posts reveal the brutal tactics used to take the outer walls.
    {
        id: 'bramblehaven_grunt_perspective',
        order: 20076,
        characterKey: 'forager_flak',
        timestamp: '2 hours ago',
        content: "They told us 'no quarter'. I looked into his eyes before... before. He was just a kid. A beanish kid. We did what we had to do. For the Princess. But the stars feel... colder tonight. The victory tastes like ash.",
        likes: 650,
        comments: [
            { characterKey: 'embercap', text: "Hold fast, soldier. What we do, we do for the future of the Kingdom. Your sacrifice is noted." },
            { characterKey: 'free_name_sarah', text: "This is how they make monsters." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'bramblehaven_fawful_survivor',
        order: 20075,
        characterKey: 'fawful_grunt_77',
        timestamp: '6 hours ago',
        content: "They're not taking prisoners. I saw it. We tried to surrender on the wall. They just... kept coming. I jumped. Broke my leg but I'm alive. Hiding in the woods. I can still hear the screaming. Don't go to Bramblehaven. Don't...",
        likes: 513,
        comments: [
            { characterKey: 'the_broker', text: "Verified location data for surviving Fawful personnel is now a high-value commodity. Discretion assured." },
            { characterKey: 'detective_penny', text: "A potential witness. Location tracking initiated." }
        ],
        eventId: 'bramblehaven_siege'
    },

    // --- Flashback: The Urban Meat Grinder ---
    // The battle moves into the city proper, showing the chaos of street-to-street fighting.
    {
        id: 'bramblehaven_street_fighting_begins',
        order: 20074,
        characterKey: 'wah_media_collective',
        timestamp: '8 hours ago',
        content: `**BRAMBLEHAVEN BECOMES A SLAUGHTERHOUSE!** With the outer walls taken, the battle for Bramblehaven has descended into brutal street-to-street fighting. Loyalist troops are pushing into the town square, but Fawful's forces have turned every building into a fortified death trap. Reports describe vicious, close-quarters combat in alleys and homes. The advance is slow and bloody.`,
        image: 'ruined_city_street.png',
        image_alt: "A ruined city street with rubble everywhere and soldiers taking cover behind broken walls.",
        likes: 2980,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: "Urban warfare is the great equalizer. Superior numbers mean little against a well-entrenched defender. This will be a meat grinder." },
            { characterKey: 'generic_toad', text: "They're fighting in the houses now? My cousin lived in Bramblehaven..." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'embercap_push_order',
        order: 20073,
        characterKey: 'embercap',
        timestamp: '8 hours ago',
        content: `Second and Third platoon, on me. We are taking the market square by sundown. Do not stop. Do not falter. Sweep every building. The intel is in the keep, and we're not getting there by waiting. Forward!`,
        likes: 1845,
        comments: [
            { characterKey: 'captain_toadette', text: "Your resolve is our spearhead, Commander. See it done." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'sprocket_booby_trap',
        order: 20072,
        characterKey: 'sapper_sprocket',
        timestamp: '9 hours ago',
        content: `Watch your step! Fawful's rigged half these buildings to blow. Found a pressure plate under a welcome mat. A WELCOME MAT. The sickos. Disarmed it, but tell the squads to be careful. They're getting cute.`,
        likes: 1050,
        comments: [
            { characterKey: 'embercap', text: "Good work, Sprocket. Keep your eyes sharp." }
        ],
        eventId: 'bramblehaven_siege'
    },

    // --- Flashback: The Sniper Emerges ---
    // A new threat appears, changing the dynamic of the battle and pinning down the heroes.
    {
        id: 'spotter_pip_friend_down',
        order: 20071,
        characterKey: 'spotter_pip',
        timestamp: '10 hours ago',
        content: `Pebbles is gone. He was right next to me one second, the next... nothing. Just a crack from the tower and he was gone. We can't even get to his body. We're pinned behind a stupid fountain.`,
        likes: 644,
        comments: [
            { characterKey: 'generic_toad', text: "By the stars... that's awful." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'wah_media_sniper_emerges',
        order: 20070,
        characterKey: 'wah_media_collective',
        timestamp: '10 hours ago',
        content: `**LETHAL SNIPER STALLS LOYALIST ADVANCE!** A new threat has emerged. A single, highly accurate Fawful sniper, reportedly operating from the town's clock tower, has completely halted the push through the market square. Loyalist casualties are mounting as they struggle to find cover.`,
        likes: 2190,
        comments: [
            { characterKey: 'the_broker', text: "A high-value enemy asset is now in play. The price for their confirmed elimination just created a brand new market. My inbox is open." },
            { characterKey: 'iron_legion_sniper_specialist', text: "One shot, one kill. A professional. Respect." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'fawful_sniper_post',
        order: 20069,
        characterKey: 'fawful_sniper',
        timestamp: '10 hours ago',
        content: `Cackle-pew! The little mushroom heads pop like sad, gray balloons! Lord Fawful provides the stage, and I provide the grand finale for their pointless little lives! Each crack of my rifle is an encore of their failure!`,
        likes: 717,
        comments: [
            { characterKey: 'fawful', text: "SUCH EXCELLENCE! Such bang-booming of beautiful badness! You are the mustard on the hot dog of my malevolence!" }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'embercap_reacts_sniper',
        order: 20068,
        characterKey: 'embercap',
        timestamp: '11 hours ago',
        content: `All units, break contact and find hard cover! I want suppressing fire on that clock tower NOW! Sprocket, I need a way to bring that tower down!`,
        likes: 1400,
        comments: [
            { characterKey: 'sapper_sprocket', text: "Can't get a clean shot, Commander! Too much rubble! He's got us pinned!" }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'toadette_command_view',
        order: 20067,
        characterKey: 'captain_toadette',
        timestamp: '11 hours ago',
        content: `The sniper is an acceptable complication. The objective remains the same. The intel within the keep is paramount. Commander Embercap has his orders. He will adapt and overcome, or he will be replaced. The mission comes first.`,
        likes: 1250,
        comments: [
            { characterKey: 'fawful', text: "YOUR HEARTS ARE OF ICY FROZENESS! You care for your little mushroom men less than I care for the lint in my cape's pocket!" }
        ],
        eventId: 'bramblehaven_siege'
    },

    // --- Flashback: The Desperate Plan & Suicide Sprint ---
    // The climax of the flashback: the squad makes a run for it.
    {
        id: 'breacher_biff_intro',
        order: 20066,
        characterKey: 'breacher_biff',
        timestamp: '12 hours ago',
        content: `Time to make a new door. This wall looks weak. Give me five minutes and I'll give you a way through this whole city block. Let's see that sniper hit us through three feet of solid stone.`,
        likes: 910,
        comments: [],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'pip_observation',
        order: 20065,
        characterKey: 'spotter_pip',
        timestamp: '12 hours ago',
        content: `I think I see a pattern. He fires, then takes about twelve seconds to reload and reacquire a target. It's not a lot of time, but it might be enough. If someone is fast enough.`,
        likes: 955,
        comments: [
            { characterKey: 'scout_shale', text: "I'm fast enough." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'embercap_final_orders',
        order: 20064,
        characterKey: 'embercap',
        timestamp: '12 hours ago',
        content: `Listen up! Pip, you watch for the shot. Biff, you blow the wall on Pip's signal. Shale, you run first and draw fire. Flak, you're with me. We go second. We don't stop for anything. Get to the house across the alley. Understood?`,
        likes: 1421,
        comments: [],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'wah_media_desperate_run',
        order: 20063,
        characterKey: 'wah_media_collective',
        timestamp: '13 hours ago',
        content: `**SUICIDE SPRINT IN BRAMBLEHAVEN!** Live audio intercepts confirm Commander Embercap's squad is attempting a desperate dash across an alleyway completely exposed to the Fawful sniper. After a loud explosion, comms have erupted into panicked shouting and the sound of intense, high-caliber rifle fire.`,
        image: 'runningfromsniper.png',
        image_alt: "Silhouettes of toad soldiers running frantically across a rubble-strewn alley as dust kicks up from bullet impacts around them under a dark sky.",
        likes: 3010,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: "A calculated risk. Let's see if the gamble pays off. Courage under fire is one thing, this is another." },
            { characterKey: 'generic_toad', text: "They're running right into it! Oh stars, I can't watch!" }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'pip_mid_run',
        order: 20062,
        characterKey: 'spotter_pip',
        timestamp: '13 hours ago',
        content: `HE FIRED! GO! SHALE IS OUT! HE'S RUNNING! HE'S-- OH GODS SHALE IS DOWN! HE'S DOWN! KEEP MOVING! BIFF IS RIGHT BEHIND ME, HE'S YELLING SOMETHING I CAN'T-`,
        likes: 704,
        comments: [],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'flak_makes_it',
        order: 20061,
        characterKey: 'forager_flak',
        timestamp: '13 hours ago',
        content: `IN! I'M IN! Dove through the doorway, tasted concrete. Pip landed on top of me. Embercap is through. He's pulling me up. The shots are hitting the wall outside. Thump. Thump. Thump. Where's Biff? WHERE IS BIFF?`,
        likes: 915,
        comments: [
            { characterKey: 'dewdrop', text: "Flak, what is your status?! We heard screaming!" }
        ],
        eventId: 'bramblehaven_siege'
    },
    
    // --- The Aftermath: Trapped ---
    // The final posts of the flashback, leaving the squad in a desperate situation.
    {
        id: 'embercap_house_report',
        order: 20060,
        characterKey: 'embercap',
        timestamp: '14 hours ago',
        content: `We're inside. The house is empty. Shale is gone. Biff... Biff didn't make it. The sniper is watching the building. We are trapped. Repeat: we are trapped.`,
        likes: 1390,
        comments: [
            { characterKey: 'captain_toadette', text: "Status of the mission-critical intel?" }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'flak_in_the_quiet',
        order: 20059,
        characterKey: 'forager_flak',
        timestamp: '14 hours ago',
        content: `In the house. We made it. Pip is in shock. The Commander is... quiet. Biff is gone. The sniper has us pinned. It's an old house. Dust everywhere. There are pictures on the wall of a family. Gods, it's so quiet in here.`,
        likes: 888,
        comments: [
            { characterKey: 'bones', text: "The quiet is always the worst part." }
        ],
        eventId: 'bramblehaven_siege'
    },

    // =================================================================
    // === RESTAURANT RAID & IRON LEGION ARC ===
    // =================================================================
    {
        id: 'viral_restaurant_raid',
        order: 10070,
        characterKey: 'wah_media_collective',
        timestamp: '1 day ago',
        content: `**CAPITAL CHAOS!** Iron Legion raids a downtown restaurant in a high-stakes standoff! The scene involved the notorious Vigilance crew, a mysterious angel, and a murder plot where the bodies were reportedly hidden in an OCTOPUS! The Legion, already under fire for their handling of the Eager case, also deployed a spy with a poorly-hidden dragon tail who boasted about their 'award-winning' low bribe rates. You can't make this stuff up!`,
        image: 'restaurant.png',
        image_alt: "A chaotic restaurant scene with Iron Legion soldiers pointing guns while patrons hide under tables.",
        likes: 3892,
        comments: [
            { characterKey: 'the_broker', text: "A multi-faceted engagement with numerous high-value assets. The intel yield from this event will be... substantial. My inbox is open." },
            { characterKey: 'generic_toad', text: "They hid the bodies in the calamari?! I'm never eating out again!" },
            { characterKey: 'waluigi', text: "WAH! A dragon spy? An octopus corpse-receptacle? This is ART!" }
        ],
        eventId: 'restaurant_raid'
    },
    {
        id: 'viral_ketchup_man_thanks',
        order: 10069,
        characterKey: 'ketchup_man',
        timestamp: '1 day ago',
        content: `Hey @FNG, thanks for the distraction earlier. The mage didn't suspect a thing. Couldn't have cleaned up my... 'ketchup' spill... without you. I owe you one.`,
        likes: 150,
        comments: [
            { characterKey: 'detective_penny', text: "Case notes: 'Ketchup Man' has been identified. Connection to FNG established. This is a significant lead." }
        ],
        eventId: 'restaurant_raid'
    },
    {
        id: 'viral_dragon_spy_post',
        order: 10068,
        characterKey: 'archie',
        timestamp: '1 day ago',
        content: `So, I had a chat with an Iron Legion spy. Nice guy. Terrible at hiding his dragon tail. Said the Legion got an award for being 'bribe-free for a month' and that bribes are down to only 20%. He also promised to 'like' this post. Let's see if he's a spy of his word.`,
        likes: 2419,
        comments: [
            { characterKey: 'iron_legion_dragon_spy', text: "Liked. See? We are men of our word. Mostly." },
            { characterKey: 'general_marcus_ironhand', text: "I will be having a word with our intelligence division about proper disguise protocols." }
        ],
        eventId: 'restaurant_raid'
    },
    {
        id: 'viral_angel_evaporation',
        order: 10067,
        characterKey: 'freelancer_spy_1',
        timestamp: '1 day ago',
        content: `Intel: The angel proprietor of the restaurant just evaporated a worker. Just... poof. Gone. Overheard something about a 'murderer'. Seems like a case of mistaken identity. High employee turnover at that place, I guess.`,
        likes: 833,
        comments: [],
        eventId: 'restaurant_raid'
    },
    {
        id: 'viral_humpik_secret_service',
        order: 10066,
        characterKey: 'wah_media_collective',
        timestamp: '1 day ago',
        content: `**Humpik Seen with Secret Service!** The former Koopa Troop enforcer, Humpik, was spotted being escorted by agents of the Iron Legion's feared Secret Service. Where are they taking him? Is this an arrest or a new alliance?`,
        likes: 1420,
        comments: [
            { characterKey: 'bowser', text: "If they lay a hand on him, I'll turn their entire city into a parking lot!" }
        ],
        eventId: 'restaurant_raid'
    },

    // =================================================================
    // === PRISON BREAK & DECEPTION ARC ===
    // =================================================================
    {
        id: 'viral_prison_break_fiasco',
        order: 10060,
        characterKey: 'wah_media_collective',
        timestamp: '2 days ago',
        content: `**PRISON BREAK OR PRISON SWAP?** The Vigilance crew's attempt to rescue the tortured toad Eager from a city prison ended in chaos! Sources report the imposter Dan locking doors and causing a scene, while an 'All-Seeing Mage' confronted the party. Amidst the bedlam, Eager was moved AGAIN by guards to an unknown location. The only win? Lario was seen snatching a guard's logbook. What a mess!`,
        image: 'prison.png',
        image_alt: "A chaotic prison scene with guards running and doors slamming shut.",
        likes: 2840,
        comments: [
            { characterKey: 'the_broker', text: "Asset 'Eager' remains in play but location is now a premium intel commodity. Asset 'Lario' has acquired a potentially high-value data package. Intriguing." },
            { characterKey: 'generic_toad', text: "They found him and then LOST him again?! Who is this mage?!" }
        ],
        eventId: 'prison_deception'
    },
    {
        id: 'viral_lario_logbook',
        order: 10059,
        characterKey: 'lario',
        timestamp: '2 days ago',
        content: `Heh. Came for a toad, left with their secrets. This little book is gonna be worth a fortune. WAH-ha... wait, that's not my laugh. But the money will be!`,
        likes: 451,
        comments: [
            { characterKey: 'captain_syrup', text: "Don't spend it all in one place, grease monkey. You still owe me." }
        ],
        eventId: 'prison_deception'
    },
    {
        id: 'viral_all_seeing_mage_post',
        order: 10058,
        characterKey: 'all_seeing_mage',
        timestamp: '2 days ago',
        content: `The artifact's energy signature was faint, but present. The toad is merely a vessel. The disguise on the three-eyed one was... amusingly crude, yet effective. My master will be pleased with this report.`,
        likes: 310,
        comments: [
            { characterKey: 'janna_brightspark', text: "Fascinating! An energy signature tied to a person? And a disguise that can fool a magical scan? The research possibilities are endless!" }
        ],
        eventId: 'prison_deception'
    },
    {
        id: 'viral_dan_imposter_locks',
        order: 10057,
        characterKey: 'dan',
        timestamp: '2 days ago',
        content: `The doors must remain closed. They don't understand what's at stake. They can't.`,
        likes: 180,
        comments: [
            { characterKey: 'toad_lee', text: "Dan? What are you talking about? Open the door!" }
        ],
        eventId: 'prison_deception'
    },

    // =================================================================
    // === FAKE DAN REVELATION ARC ===
    // =================================================================
    {
        id: 'viral_fake_dan_revelation',
        order: 10050,
        characterKey: 'wah_media_collective',
        timestamp: '3 days ago',
        content: `**SHOCKER FROM THE SLAMMER! LARIO SINGS, REVEALS 'FAKE DAN' PLOT!** Sources confirm the goblin mechanic Lario, found in a city prison, has made explosive claims: the 'hero' toad Dan traveling with the infamous Vigilance crew is an IMPOSTER. Lario says he helped the REAL Dan, now aboard the airship, to escape. A massive energy beam from the ship seems to back his story. Who is the fake Dan? What is this energy beam? This story is developing!`,
        image: 'energy_beam.png',
        image_alt: "A massive beam of white energy blasting into the sky from an airship.",
        likes: 3570,
        comments: [
            { characterKey: 'the_broker', text: "The market for Toad-based identity verification services is about to explode. A fascinating development." },
            { characterKey: 'generic_toad', text: "Wait, so there are TWO of them?! I'm so confused..." }
        ]
    },
    {
        id: 'viral_iron_legion_statement',
        order: 10049,
        characterKey: 'iron_legion',
        timestamp: '3 days ago',
        content: `Regarding the fugitive 'Eager': Standard interrogation procedures were followed. All actions were in accordance with Imperial law regarding threats to state security. Torture is a regrettable but necessary part of the system when dealing with terrorists.`,
        likes: 450,
        comments: [
            { characterKey: 'free_name_sarah', text: "There it is. The tyrant's justification. They call it 'the system' to wash the blood from their hands." }
        ]
    },
    {
        id: 'viral_lario_prison_post',
        order: 10048,
        characterKey: 'lario',
        timestamp: '3 days ago',
        content: `So I'm in prison for 'sabotage'. Big deal! At least I'm not a FAKE TOAD. And I'm definitely not the one setting fires. Looking at you, HORSE-MAN.`,
        likes: 322,
        comments: [
            { characterKey: 'waluigi', text: "WAH! So much drama! And I'm at the center of it all! It's magnificent!" }
        ]
    },

    // =================================================================
    // === VIGILANCE MUTINY ARC ===
    // =================================================================
    {
        id: 'viral_vigilance_mutiny',
        order: 10040,
        characterKey: 'wah_media_collective',
        timestamp: '4 days ago',
        content: `**MUTINY ON THE VIGILANCE!** An internal power struggle among the 150 newly freed toads erupted into violence aboard the rogue airship. The conflict took a dark turn when the toad hero, Dan, reportedly suffered a magical breakdown while attempting to seize X.O.'s powerful staff, unleashing a fireball that killed 13 of his kin. Witnesses claim Green T of the Tea Leaf Syndicate intervened, before the staff was secured by another toad, Toad Lee. A fragile 'vow' has since been sworn, but the ship is a powder keg. Dan was gravely injured, losing an arm in the incident.`,
        image: 'newspaper_airship.png',
        image_alt: "The Vigilance airship, silhouetted against a stormy sky.",
        likes: 3280,
        comments: [
            { characterKey: 'generic_toad', text: "He killed 13 of them?! And lost an arm?! By the stars..." },
            { characterKey: 'the_broker', text: "Asset 'Dan' is offline. Asset 'Toad Lee' now holds the high-value item. Asset 'Green T' is... depreciated. Fascinating." }
        ]
    },
    {
        id: 'viral_toad_lee_vow',
        order: 10039,
        characterKey: 'toad_lee',
        timestamp: '4 days ago',
        content: `The staff is heavy. The vow is fragile. But I will not fail them. Not again.`,
        likes: 1543,
        comments: []
    },
    {
        id: 'viral_purple_t_reaction',
        order: 10038,
        characterKey: 'purple_t',
        timestamp: '4 days ago',
        content: `They call it a 'vow'. I call it a threat. Dan killed 13 of us. He was a hero, now he's broken, his arm is gone... And now we're supposed to trust his friend with that thing? This is madness.`,
        likes: 978,
        comments: [
            { characterKey: 'bones', text: "Stay quiet. Stay alive. That's the only rule now." }
        ]
    },
    {
        id: 'viral_waluigi_mutiny_gloat',
        order: 10037,
        characterKey: 'waluigi',
        timestamp: '4 days ago',
        content: `WAH! A magical temper tantrum! Toads eating each other! A cursed staff playing hot potato! This is the greatest reality show in the universe! 10/10, no notes!`,
        likes: 1201,
        comments: [
            { characterKey: 'giggling_pete', text: "The chaos is beautiful! A symphony of failure! The Jester is roaring with laughter!" }
        ]
    },
    {
        id: 'viral_bowser_mutiny_mockery',
        order: 10036,
        characterKey: 'bowser',
        timestamp: '4 days ago',
        content: `The little mushrooms are fighting over a stick. GWAHAHA! This is why they'll always lose. No discipline! My army would never be so pathetic.`,
        likes: 1899,
        comments: [
            { characterKey: 'kamek', text: "Indeed, your Viciousness. Their lack of a clear, strong leader is their undoing." }
        ]
    },
    {
        id: 'viral_dan_injury',
        order: 10035,
        characterKey: 'dan',
        timestamp: '4 days ago',
        content: `My arm! My beautiful arm! You try to help these incompetent amphibians and this is the thanks you get! The medical facilities on this rust bucket are a JOKE. And they still owe me for services rendered!`,
        likes: 254,
        comments: [
             { characterKey: 'green_t', text: "It was either the arm or the whole ship. You're welcome. Now, about that ring..." }
        ]
    },

    // =================================================================
    // === EARLIER EVENTS & MISCELLANEOUS POSTS ===
    // =================================================================
    {
        id: 'viral_angel24_service',
        order: 10030,
        characterKey: 'wah_media_collective',
        timestamp: '5 days ago',
        content: `Capital bartender 'Angel 24' reportedly froze time to fulfill orders instantly. Patrons call it 'the greatest service in history.' Regulators call it 'unorthodox'.`,
        likes: 1820,
        comments: [
            { characterKey: 'angel_24', text: "Standard policy when queues exceed cosmic tolerance." }
        ]
    },
    {
        id: 'viral_archiewriteman_meme',
        order: 10029,
        characterKey: 'cosmic_jesters',
        timestamp: '5 days ago',
        content: `Behold: ARCHIE WRITEMAN. Same chaos, different name! The mask is the joke; the joke is the mask. Time froze, but our laughter did not.`,
        likes: 1412,
        comments: [
            { characterKey: 'waluigi', text: "WAH! Mask? It's called fashion." }
        ]
    },
    {
        id: 'viral_green_t_ring_deal',
        order: 10028,
        characterKey: 'the_broker',
        timestamp: '5 days ago',
        content: `Market Note: Horse-Ring futures spiking. 'Crayon Ring' counterfeits collapsing. Intelligence on 'Eager Location' trading at a premium.`,
        likes: 990,
        comments: [
            { characterKey: 'king_k_rool', text: "Keheheh! The market runs on cheese now!" }
        ]
    }
];