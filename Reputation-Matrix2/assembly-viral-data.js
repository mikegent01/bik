

import { WAHBOOK_INTEL_POSTS } from './assembly-intel-data.js';

export const VIRAL_POSTS = [
    {
        id: 'wah_media_bramblehaven',
        order: 20080,
        characterKey: 'wah_media_collective',
        timestamp: 'Just Now',
        content: `**BRAMBLEHAVEN FALLS IN BLOODY SIEGE!** Captain Toadette's Peach Loyalists have conquered the Fawful bastion of Bramblehaven after a brutal, day-long assault. Sources from the front lines describe a battle of shocking attrition, culminating in a final charge where surrendering Fawful troops were shown no mercy. Loyalist casualties are reportedly 'heavy', but the victory gives them a key strategic position and, according to a dying soldier, 'valuable intel'. The ruthless tactics have solidified the Loyalists' fearsome reputation.`,
        image: 'battle_mushroom_kingdom.png',
        image_alt: "The smoldering ruins of a fortress under a dark, rainy sky.",
        likes: 3105,
        comments: [
            { characterKey: 'generic_toad', text: "They killed them... even after they surrendered? By the stars, what are they becoming?" },
            { characterKey: 'iron_legion', text: "A decisive, if costly, victory. The strategic value of the captured intel cannot be overstated. War requires sacrifice." },
            { characterKey: 'the_broker', text: "Intel is the true prize. The market for Fawful's operational data just skyrocketed. My inbox is open." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'toadette_bramblehaven_victory',
        order: 20079,
        characterKey: 'captain_toadette',
        timestamp: '15 minutes ago',
        content: `Victory. The cost was high, but Bramblehaven is ours. Let this be a lesson to all who stand against the true monarchy. We will not falter. We will not fail. We will pay any price for justice. For the Princess.`,
        likes: 1540,
        comments: [
            { characterKey: 'embercap', text: "For the Princess." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'dewdrop_bramblehaven_casualties',
        order: 20078,
        characterKey: 'dewdrop',
        timestamp: '30 minutes ago',
        content: `So many wounded... Mistveil is stable, but the frost magic was severe. We've taken the fort, but the infirmary is overflowing. I can't... I can't save them all.`,
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
    {
        id: 'viral_restaurant_raid',
        order: 10070,
        characterKey: 'wah_media_collective',
        timestamp: 'Just Now',
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
        timestamp: '2 minutes ago',
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
        timestamp: '5 minutes ago',
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
        timestamp: '10 minutes ago',
        content: `Intel: The angel proprietor of the restaurant just evaporated a worker. Just... poof. Gone. Overheard something about a 'murderer'. Seems like a case of mistaken identity. High employee turnover at that place, I guess.`,
        likes: 833,
        comments: [],
        eventId: 'restaurant_raid'
    },
    {
        id: 'viral_humpik_secret_service',
        order: 10066,
        characterKey: 'wah_media_collective',
        timestamp: '30 minutes ago',
        content: `**Humpik Seen with Secret Service!** The former Koopa Troop enforcer, Humpik, was spotted being escorted by agents of the Iron Legion's feared Secret Service. Where are they taking him? Is this an arrest or a new alliance?`,
        likes: 1420,
        comments: [
            { characterKey: 'bowser', text: "If they lay a hand on him, I'll turn their entire city into a parking lot!" }
        ],
        eventId: 'restaurant_raid'
    },
    {
        id: 'viral_prison_break_fiasco',
        order: 10060,
        characterKey: 'wah_media_collective',
        timestamp: 'Just Now',
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
        timestamp: '2 minutes ago',
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
        timestamp: '5 minutes ago',
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
        timestamp: '10 minutes ago',
        content: `The doors must remain closed. They don't understand what's at stake. They can't.`,
        likes: 180,
        comments: [
            { characterKey: 'toad_lee', text: "Dan? What are you talking about? Open the door!" }
        ],
        eventId: 'prison_deception'
    },
    {
        id: 'viral_fake_dan_revelation',
        order: 10050,
        characterKey: 'wah_media_collective',
        timestamp: 'Just Now',
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
        timestamp: '5 minutes ago',
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
        timestamp: '10 minutes ago',
        content: `So I'm in prison for 'sabotage'. Big deal! At least I'm not a FAKE TOAD. And I'm definitely not the one setting fires. Looking at you, HORSE-MAN.`,
        likes: 322,
        comments: [
            { characterKey: 'waluigi', text: "WAH! So much drama! And I'm at the center of it all! It's magnificent!" }
        ]
    },
    {
        id: 'viral_vigilance_mutiny',
        order: 10040,
        characterKey: 'wah_media_collective',
        timestamp: 'Just Now',
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
        timestamp: '1 minute ago',
        content: `The staff is heavy. The vow is fragile. But I will not fail them. Not again.`,
        likes: 1543,
        comments: []
    },
    {
        id: 'viral_purple_t_reaction',
        order: 10038,
        characterKey: 'purple_t',
        timestamp: '3 minutes ago',
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
        timestamp: '5 minutes ago',
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
        timestamp: '8 minutes ago',
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
        timestamp: '15 minutes ago',
        content: `My arm! My beautiful arm! You try to help these incompetent amphibians and this is the thanks you get! The medical facilities on this rust bucket are a JOKE. And they still owe me for services rendered!`,
        likes: 254,
        comments: [
             { characterKey: 'green_t', text: "It was either the arm or the whole ship. You're welcome. Now, about that ring..." }
        ]
    },
    {
        id: 'viral_angel24_service',
        order: 10030,
        characterKey: 'wah_media_collective',
        timestamp: '1 day ago',
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
        timestamp: '1 day ago',
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
        timestamp: '1 day ago',
        content: `Market Note: Horse-Ring futures spiking. 'Crayon Ring' counterfeits collapsing. Intelligence on 'Eager Location' trading at a premium.`,
        likes: 990,
        comments: [
            { characterKey: 'king_k_rool', text: "Keheheh! The market runs on cheese now!" }
        ]
    }
];