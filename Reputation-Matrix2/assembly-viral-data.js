import { WAHBOOK_INTEL_POSTS } from './assembly-intel-data.js';

// This file contains "viral" posts that appear on the main Wah-Book feed.
// They are ordered by the 'order' property, with higher numbers appearing first.
// Posts are grouped by 'eventId' to represent distinct story arcs.

export const VIRAL_POSTS = [
    // Add these to the top of the WAHBOOK_POSTS array

    {
        id: 'kamek_responds_to_toadette',
        order: 20356,
        characterKey: 'kamek',
        timestamp: 'Just Now',
        content: `A message to Captain Toadette: Your... proposal... has been received. The terms are amusingly bold for one in your position. A good starting point for a *real* negotiation. My King is willing to be merciful. Do not waste this opportunity.`,
        likes: 950,
        comments: [
            { characterKey: 'bowser', text: 'GWAHAHA! That\'s right! Come crawling to us!' },
            { characterKey: 'toadette', text: 'We do not crawl, wizard. We negotiate from a position of strength.' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'toadette_kamek_response',
        order: 20355,
        characterKey: 'captain_toadette',
        timestamp: '5 minutes ago',
        content: `So the old wizard shows his hand. He thinks he holds all the cards. He will soon learn that the Peach Loyalists do not bluff. We will meet, but it will be on our terms.`,
        likes: 720,
        comments: [
            { characterKey: 'embercap', text: 'We are with you, Captain. To the end.' },
            { characterKey: 'dewdrop', text: 'Please... be careful. This feels like a trap.' }
        ]
    },
    {
        id: 'toadsworth_i_told_you_so',
        order: 20354,
        characterKey: 'chancellor_toadsworth',
        timestamp: '10 minutes ago',
        content: `Utter madness! She sent an envoy into the dragon's den and is surprised the dragon now dictates the terms? This reckless diplomacy will be the end of us all. We are now at the mercy of that vile sorcerer.`,
        likes: 450,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'fawful_fury_at_truce',
        order: 20353,
        characterKey: 'fawful',
        timestamp: '15 minutes ago',
        content: `I HAVE A FURY THE SIZE OF A GALAXY! THE PINK MUSHROOM DANCES WITH THE TURTLE WIZARD! THEY CONSPIRE LIKE TWO FOOLS SHARING A SINGLE BRAIN CELL! THEIR TRUCE IS A SANDWICH OF BETRAYAL, AND I WILL SPREAD IT WITH THE MUSTARD OF DOOM!`,
        likes: 899,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'broker_truce_market',
        order: 20352,
        characterKey: 'the_broker',
        timestamp: '20 minutes ago',
        content: `Market Correction: The probability of a Koopa-Loyalist alliance has jumped from 5% to 65%. Fawful's victory futures are taking a nosedive. The price for peace in the Mushroom Kingdom just got significantly higher. My inbox is open for insider trading.`,
        likes: 610,
        comments: []
    },
    {
        id: 'generic_toad_truce_confusion',
        order: 20351,
        characterKey: 'generic_toad',
        timestamp: '30 minutes ago',
        content: `Wait, so... Kamek is back, he got Toadette's message, and now they're talking about talking? Are they allies now? Or are they still enemies? I'm so confused! Are we supposed to stop hating Bowser now?`,
        likes: 345,
        comments: [
            { characterKey: 'toadette', text: 'We will NEVER stop hating Bowser. This is a temporary means to an end.' }
        ]
    },    
    {
        id: 'dewdrop_bowser_ceasefire',
        order: 20345,
        characterKey: 'dewdrop',
        timestamp: 'Just Now',
        content: `A ceasefire... with BOWSER? The monster responsible for this entire war? Has she gone mad? We just lost so many good toads, and now we're supposed to shake hands with their king? I... I can't. This is wrong.`,
        likes: 788,
        comments: [
            { characterKey: 'captain_toadette', text: 'War is about making hard choices, medic. Not easy ones.' },
            { characterKey: 'generic_toad', text: 'I\'m with Dewdrop. I don\'t trust him!' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'toadette_bowser_ceasefire',
        order: 20344,
        characterKey: 'captain_toadette',
        timestamp: '2 minutes ago',
        content: `The strategic situation is clear. The Regency is weak, the vampires are a chaotic variable. To defeat Fawful, we require overwhelming force. I have opened negotiations with the Koopa Troop for a temporary ceasefire. We will deal with Fawful first. The rest can be settled later.`,
        likes: 650,
        comments: [
            { characterKey: 'kamek', text: 'An unexpectedly pragmatic decision, Captain. Lord Bowser is willing to listen.' },
            { characterKey: 'fawful', text: 'I HAVE FURY! The turncoats bargain with the turtle beefbrain! They are a conga line of betrayal!' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'mystvil_robot_mayor',
        order: 20343,
        characterKey: 'mistveil',
        timestamp: '5 minutes ago',
        content: `Target confirmed as a mechanical duplicate. The real mayor was inside. He is now in custody. The shell has been stripped for parts. Efficient.`,
        likes: 512,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'generic_toad_robot_mayor',
        order: 20342,
        characterKey: 'generic_toad',
        timestamp: '8 minutes ago',
        content: `THE MAYOR WAS A ROBOT?! A MACHINE?! The real one CRAWLED OUT of the metal husk after it was shot! What is this town?!`,
        likes: 813,
        comments: [
            { characterKey: 'janna_brightspark', text: 'Fascinating! A humanoid piloting chassis! I must acquire the schematics!' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'embercap_mayor_interrogation',
        order: 20341,
        characterKey: 'embercap',
        timestamp: '10 minutes ago',
        content: `Interrogating the mayor. He was defiant. Claimed he made the town 'peaceful' under Fawful. Then he tried to teleport. Mystvil was faster. Now we have a... complication.`,
        likes: 350,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'toadette_dog_collar',
        order: 20340,
        characterKey: 'captain_toadette',
        timestamp: '12 minutes ago',
        content: `...Bring him back alive.`,
        likes: 499,
        comments: [
            { characterKey: 'dewdrop', text: 'Thank you, Captain.' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'fawful_faithful_dog_collar',
        order: 20339,
        characterKey: 'fawful_faithful',
        timestamp: '15 minutes ago',
        content: `It was my dog's collar. He died when your kind raided our camp. Ever since, I’ve fought every toad I could find. Do what you want. Nothing you can do is worse than what you've already done.`,
        likes: 621,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'mystvil_box_bluff',
        order: 20338,
        characterKey: 'mistveil',
        timestamp: '18 minutes ago',
        content: `Threat assessment: Prisoner claimed box was a bomb. Analysis: It was just a box. Amateurish bluff. He is now being searched for actual intelligence.`,
        likes: 488,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'dewdrop_executions',
        order: 20337,
        characterKey: 'dewdrop',
        timestamp: '20 minutes ago',
        content: `I just watched them execute prisoners in the square. In the name of the Princess. In the name of hope. This isn't justice. This is butchery. I... I don't know what we're fighting for anymore.`,
        likes: 672,
        comments: [
            { characterKey: 'embercap', text: 'This is war, Dewdrop. It is ugly.' },
            { characterKey: 'mistveil', text: 'They were the enemy. It was necessary.' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'embercap_interim_mayor',
        order: 20336,
        characterKey: 'embercap',
        timestamp: '22 minutes ago',
        content: `The Captain has named me... interim mayor. Of this... ruin. I am a soldier, not a politician. I do not understand this order, but I will obey it.`,
        likes: 513,
        comments: [
            { characterKey: 'captain_toadette', text: 'Good. Your first task is to restore order.' },
            { characterKey: 'dewdrop', text: 'Embercap, this is a mistake.' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'generic_toad_mayor_chanting',
        order: 20335,
        characterKey: 'generic_toad',
        timestamp: '25 minutes ago',
        content: `We're chanting 'Down with the mayor!' and dragging him to the gallows, but... wait, is he chanting with us? He's shouting 'Down with the mayor!' too! I'm so confused!`,
        likes: 765,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'traitor_confession',
        order: 20334,
        characterKey: 'generic_toad',
        timestamp: '28 minutes ago',
        content: `They caught the traitor from the other house. He was sobbing... said Fawful gave him a reason to live. Then he tried to... you know. The guards stopped him. It was awful.`,
        likes: 310,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'loyalist_poison_test',
        order: 20333,
        characterKey: 'generic_toad',
        timestamp: '30 minutes ago',
        content: `captain toadette just told us she poisoned the water supply to 'test our loyalty'! I almost had a heart attack! She said it was a lie, but... what kind of leader does that?!`,
        likes: 450,
        comments: [
            { characterKey: 'embercap', text: '...' },
            { characterKey: 'captain_toadette', text: 'The kind that ensures her soldiers are vigilant.' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'toadette_secures_battlefield',
        order: 20332,
        characterKey: 'captain_toadette',
        timestamp: '33 minutes ago',
        content: `The battlefield is secure. The enemy is broken or captured. We have taken significant spoils. A Pack Muel is needed for transport. You. Toad. Handle it.`,
        likes: 419,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'embercap_looting',
        order: 20331,
        characterKey: 'embercap',
        timestamp: '35 minutes ago',
        content: `Victory. The cost was high. Our toads now strip armor and trinkets from the fallen. Both theirs and ours. This is what winning looks like. It feels... hollow.`,
        likes: 388,
        comments: [
            { characterKey: 'dewdrop', text: 'There is no honor in this, Commander.' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'sniper_smirk',
        order: 20330,
        characterKey: 'generic_toad',
        timestamp: '38 minutes ago',
        content: `They dragged the traitor out of the house. He was denying everything, but then the captured sniper just looked at him and smirked. He's guilty. The look on his face said it all.`,
        likes: 401,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'fawful_commander_mauled',
        order: 20329,
        characterKey: 'fawful_faithful',
        timestamp: '40 minutes ago',
        content: `They had a bear. A BEAR. It tore the Commander apart. A glorious death for a glorious leader! Fawful will avenge you!`,
        likes: 120,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'toadette_thorns',
        order: 20328,
        characterKey: 'captain_toadette',
        timestamp: '42 minutes ago',
        content: `He threatens us with fire? Pathetic. My roots run deeper than his fury. Charge.`,
        likes: 522,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'big_r_friendly_fire',
        order: 20327,
        characterKey: 'big_r',
        timestamp: '45 minutes ago',
        content: `I'M BACK ON THE CANNON! EAT THIS, FAWFUL FOOLS! ...oops. Okay, that might have hit some of ours. MY BAD!`,
        likes: 250,
        comments: [
            { characterKey: 'generic_toad', text: 'WATCH WHERE YOU\'RE AIMING!' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'eric_sniper_kill',
        order: 20326,
        characterKey: 'generic_toad',
        timestamp: '48 minutes ago',
        content: `SNIPER SPOTTED! ROOFTOP, EAST SIDE! TAKE HIM OUT!`,
        likes: 189,
        comments: [
            { characterKey: 'big_r', text: 'I see him!' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'embercap_back_door',
        order: 20325,
        characterKey: 'embercap',
        timestamp: '50 minutes ago',
        content: `Back door clear. The bear was effective. We're punching through.`,
        likes: 312,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'big_r_shot',
        order: 20324,
        characterKey: 'generic_toad',
        timestamp: '52 minutes ago',
        content: `BIG R IS DOWN! THE CANNON... HE'S DOWN! The sniper got him!`,
        likes: 210,
        comments: [
            { characterKey: 'dewdrop', text: 'Medic en route!' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'loyalist_archer_shot',
        order: 20323,
        characterKey: 'generic_toad',
        timestamp: '55 minutes ago',
        content: `The wind magic was about to hit us all! But Tim shot him! Good shot Tim! You saved us!`,
        likes: 195,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'young_toad_charge',
        order: 20322,
        characterKey: 'generic_toad',
        timestamp: '57 minutes ago',
        content: `They killed our envoy! YOU'LL PAY FOR THAT! FOR THE PRINCESS!`,
        likes: 140,
        comments: [
            { characterKey: 'embercap', text: 'Hold your position, soldier! It\'s an ambush!' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'fawful_faithful_laughs',
        order: 20321,
        characterKey: 'fawful_faithful',
        timestamp: '58 minutes ago',
        content: `They sent an envoy! For 'peace'! HA! As if! The only peace you'll get is the one Lord Fawful grants you in death!`,
        likes: 98,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'toadette_horn',
        order: 20320,
        characterKey: 'captain_toadette',
        timestamp: '1 hour ago',
        content: `They have us surrounded. They think we are trapped. They are wrong. Sound the horn.`,
        likes: 489,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'mystvil_scouts_house',
        order: 20319,
        characterKey: 'mistveil',
        timestamp: '1 hour ago',
        content: `Count: Seven hostiles visible, encircling the house. Marksman on the rooftop. They are confident. A mistake.`,
        likes: 340,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'dewdrop_bear',
        order: 20318,
        characterKey: 'dewdrop',
        timestamp: '1 hour ago',
        content: `They're breaking down the door! No time! Bag of Tricks, don't fail me now! ...oh! A bear! That should work!`,
        likes: 412,
        comments: [
            { characterKey: 'generic_toad', text: 'A BEAR?! WHERE DID YOU GET A BEAR?!' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'embercap_tunnel_disagreement',
        order: 20317,
        characterKey: 'embercap',
        timestamp: '1 hour ago',
        content: `Captain, there's an old escape tunnel under the floorboards. We can use it to flank them or retreat.`,
        likes: 299,
        comments: [
            { characterKey: 'captain_toadette', text: 'We are not retreating. We are charging. Get ready.' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'toadette_arrives',
        order: 20316,
        characterKey: 'captain_toadette',
        timestamp: '1 hour ago',
        content: `I have arrived. We're not dying in a house. We're taking this town back. Prepare for contact.`,
        likes: 455,
        comments: [
            { characterKey: 'embercap', text: 'Captain on deck!' }
        ],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'embercap_pinned_down',
        order: 20315,
        characterKey: 'embercap',
        timestamp: '1 hour ago',
        content: `We're pinned down. Fawful's forces have us surrounded in the old district. There's a sniper with a clear line of sight on our position. We need reinforcements, now.`,
        likes: 240,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'generic_toad_sniper_fear',
        order: 20314,
        characterKey: 'generic_toad',
        timestamp: '1 hour ago',
        content: `GET INSIDE! GET INSIDE! THERE'S A SNIPER! HE ALMOST GOT TIMMY!`,
        likes: 124,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'kamek_observes_bramblehaven',
        order: 20313,
        characterKey: 'kamek',
        timestamp: '2 hours ago',
        content: `The pink fanatics are throwing themselves at Bramblehaven. A meat grinder. Let them soften up Fawful's defenses for us. Their zealotry makes them predictable... and useful.`,
        likes: 311,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'fawful_gloats_bramblehaven',
        order: 20312,
        characterKey: 'fawful',
        timestamp: '2 hours ago',
        content: `The little toads with their sad pink hats are flinging themselves at my glorious fortress! It is like being attacked by angry, determined marshmallows! I HAVE THE MUAHAHAHAS!`,
        likes: 642,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },
    {
        id: 'broker_bramblehaven_market',
        order: 20311,
        characterKey: 'the_broker',
        timestamp: '3 hours ago',
        content: `Market Advisory: Major military engagement reported at Bramblehaven. Expect high demand for medical supplies, ammunition, and burial shrouds. Betting odds currently favor the defending Fawful forces 3-to-1. My inbox is open for more... specific wagers.`,
        likes: 498,
        comments: [],
        rumorId: 'bramblehaven_siege'
    },

    {
        id: 'rodger_traitor_reveal_final',
        order: 20245,
        characterKey: 'rodger',
        timestamp: 'Just Now',
        content: `Creek found this. During the surgery. It was on him the whole time. He was one of them. He was a plant. All of this... the raid, the capture... it was a setup. We were betrayed from within.`,
        image: 'legion_insignia_card.png',
        image_alt: "A small, blood-stained iron card bearing the insignia of the Iron Legion.",
        likes: 1050,
        comments: [
            { characterKey: 'toad_lee', text: '...Betrayed. The wound cuts deeper than any blade.' },
            { characterKey: 'ryan', text: 'I KNEW IT. I KNEW SOMETHING WAS WRONG WITH HIM.' },
            { characterKey: 'dan', text: 'What?! No... He was one of us...' },
            { characterKey: 'the_broker', text: 'Information on known Iron Legion infiltrators is now trading at an all-time high. My inbox is open.' },
            { characterKey: 'colonel_vera_steelstorm', text: 'Loose ends are a liability.' }
        ]
    },
    {
        id: 'rodger_creek_surgery_aftermath',
        order: 20244,
        characterKey: 'rodger',
        timestamp: '5 minutes ago',
        content: `We paid Creek's price. A greataxe, a sword, favors we can't afford. The operation is... done. I can't look at the result. But Creek found something. He's holding it out.`,
        likes: 380,
        comments: [
            { characterKey: 'dan', text: 'Is he okay? What did Creek find?' }
        ]
    },
    {
        id: 'bones_calls_out_lt_capey',
        order: 20243,
        characterKey: 'bones',
        timestamp: '10 minutes ago',
        content: `Oh, I'm sorry, is your shiny cape getting crumpled, 'Capey'? You Legion types are all the same. All authority, no substance. Get over yourself before someone does it for you.`,
        likes: 612,
        comments: [
            { characterKey: 'colonel_vera_steelstorm', text: 'Insubordination will be noted, criminal. As will your associates.' },
            { characterKey: 'skull_cap_murphy', text: 'Ha! Love it. All bosses are the same, shiny cape or not.' }
        ]
    },
    {
        id: 'purple_t_my_house_rant',
        order: 20242,
        characterKey: 'l',
        timestamp: '12 minutes ago',
        content: `GET OUT OF MY HOUSE! THIS IS MY SHIP! MINE! YOU HAVE NO JURISDICTION HERE, LEGION SCUM! I BUILT THIS PLACE! GET OUT!`,
        likes: 455,
        comments: [
            { characterKey: 'generic_toad', text: 'Uh... I thought this was the Vigilance? When did he get a house?' },
            { characterKey: 'lario', text: 'YOU built it?! I did all the engine work, you purple ingrate!' }
        ]
    },
    {
        id: 'toad_lee_return_to_chaos',
        order: 20241,
        characterKey: 'toad_lee',
        timestamp: '15 minutes ago',
        content: `We have returned to the airship. It is filled with steam and Iron Legion soldiers calling themselves the 'Royal Service'. They are cooking. The situation has not de-escalated. L is now shouting at their officer.`,
        likes: 395,
        comments: [
            { characterKey: 'donkey_kong', text: 'Cooking? Do they have bananas?' }
        ]
    },
    {
        id: 'oracle_final_offer',
        order: 20240,
        characterKey: 'self_reflection_oracle',
        timestamp: '20 minutes ago',
        content: `Such a trying evening for you all. Do not fret. Though this estate has proven... inhospitable, I have several others. A lovely summer home by the sea, perhaps? The reflections there are much calmer.`,
        likes: 788,
        comments: [
            { characterKey: 'ryan', text: 'STAY AWAY FROM US.' },
            { characterKey: 'waluigi', text: 'WAH! I\'ll take it! Does it have a dungeon?' }
        ]
    },
    {
        id: 'rodger_negotiation_success',
        order: 20239,
        characterKey: 'rodger',
        timestamp: '22 minutes ago',
        content: `We got him back. We talked them down. I don't know how, but we did. One of the soldiers kicked him down the stairs as a final 'parting gift'. He's hurt bad, but he's with us. We're getting out of this hell hole.`,
        likes: 478,
        comments: [
            { characterKey: 'dan', text: 'Bring him back to the ship. We have medics. Hold on.' }
        ]
    },
    {
        id: 'ryan_aftermath_darkness',
        order: 20238,
        characterKey: 'ryan',
        timestamp: '25 minutes ago',
        content: `The light is back. The two Archies are gone, locked behind a door. We're all bruised. A few of us are laughing, I think from shock. That was... insane. We need to go. NOW.`,
        likes: 412,
        comments: [
            { characterKey: 'bones', text: 'Yeah. My knuckles hurt. Let\'s blow this popsicle stand.' }
        ]
    },
    {
        id: 'toad_lee_blind_chaos_report',
        order: 20237,
        characterKey: 'toad_lee',
        timestamp: '28 minutes ago',
        content: `Darkness. Complete and total. I can hear the clang of weapons hitting metal, the splintering of wood. We are fighting shadows. This is tactical madness. I believe I have struck a coat rack twice.`,
        likes: 399,
        comments: [
            { characterKey: 'mistveil', text: 'Use your other senses. Sound. Air currents. Do not rely on sight alone.' }
        ]
    },
    {
        id: 'ryan_unleashes_darkness_rage',
        order: 20236,
        characterKey: 'ryan',
        timestamp: '30 minutes ago',
        content: `ENOUGH! You want to play games in the dark?! You want to hide behind your machines and your copies?! FINE! LET'S PLAY!`,
        likes: 588,
        comments: [
            { characterKey: 'kamek', text: 'Ooh, a spark of true power. How delightful.' }
        ]
    },
    {
        id: 'purple_t_defends_book',
        order: 20235,
        characterKey: 'purple_t',
        timestamp: '32 minutes ago',
        content: `Don't you talk about Waluigi's book! It was a very cool book! You wouldn't understand artistry if it hit you with a well-thrown Bob-omb!`,
        likes: 245,
        comments: [
            { characterKey: 'waluigi', text: 'WAH! My book collection IS cool! Full of magnificent schemes and stylish poses! This one understands!' }
        ]
    },
    {
        id: 'wario_business_analysis',
        order: 20234,
        characterKey: 'wario',
        timestamp: '35 minutes ago',
        content: `Observing the Iron Legion's... methods. Inefficient, but they get results. The temporal flux in this mansion is a potential gold mine. Releasing their prisoners is bad for business. Gotta see this play out. #WarioInvestigates`,
        likes: 602,
        comments: [
            { characterKey: 'detective_penny', text: 'Wario. Your involvement is noted. We will be having a discussion about your business practices.' },
            { characterKey: 'captain_syrup', text: 'Always sniffing around for a profit, aren\'t you? Don\'t get yourself trapped in time, fatso.' }
        ]
    },
    {
        id: 'toad_lee_library_sighting',
        order: 20233,
        characterKey: 'toad_lee',
        timestamp: '40 minutes ago',
        content: `We tracked them to the library. The Legion has Bones. They speak of bats, but the creatures in the shelves are small, winged imps. Then a new player arrives. A greedy man in yellow. Wario. This complicates matters.`,
        likes: 451,
        comments: [
            { characterKey: 'dan', text: 'Wario is there? With the Legion? This is bad.' }
        ]
    },
    {
        id: 'ryan_robot_eats_toad_shock',
        order: 20232,
        characterKey: 'ryan',
        timestamp: '45 minutes ago',
        content: `He tried to run. The robot Archie just... opened up. And pulled him inside. There was a sound. I'm going to be sick. And one of our own just HELPED the Legion grab Bones. We have a traitor among us.`,
        likes: 550,
        comments: [
            { characterKey: 'eager', text: 'It ATE him?! Like, for food?! That\'s horrible!' },
            { characterKey: 'generic_toad', text: 'I never want to see a robot again...' }
        ]
    },
    {
        id: 'iron_legion_official_report',
        order: 20231,
        characterKey: 'iron_legion_commando',
        timestamp: '48 minutes ago',
        content: `Primary target 'Orange Toad' not present. Have secured secondary targets for interrogation. Resistance encountered and suppressed. The mansion is under Legion control. The temporal distortion is affecting our equipment.`,
        likes: 695,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: 'Proceed. Extract the information. By any means necessary.' },
            { characterKey: 'janna_brightspark', text: 'Temporal distortion you say? Fascinating! Could you please provide sensor readings?' }
        ]
    },
    {
        id: 'bones_miser_dream',
        order: 20230,
        characterKey: 'two_eyed_bandit',
        timestamp: '50 minutes ago',
        content: `Everyone wants to BE something. A hero, a leader, a king. Me? My only dream is becoming Archie Miser. And I'm a hell of a lot closer than this cheap copy.`,
        likes: 589,
        comments: [
            { characterKey: 'three_eyed_bandit', text: '...Flattered? Disturbed? A bit of both, I think.' }
        ]
    },
    {
        id: 'oracle_cryptic_farewell',
        order: 20229,
        characterKey: 'self_reflection_oracle',
        timestamp: '52 minutes ago',
        content: `Farewell. I’ll be reborn. This life is too depressing. May your Archie disappear without a trace.`,
        likes: 999,
        comments: [
            { characterKey: 'toad_lee', text: 'What did he mean by that?' },
            { characterKey: 'kamek', text: 'A prophecy, a curse, or the ramblings of a broken mind. Perhaps all three.' },
            { characterKey: 'fawful', text: 'HE HAS THE DEPRESSION OF A SAD PUDDLE! I HAVE AN OCEAN OF FURY!' }
        ]
    },
    {
        id: 'ryan_oracle_broken_loop',
        order: 20228,
        characterKey: 'ryan',
        timestamp: '55 minutes ago',
        content: `We already did this! He's broken! The Oracle is stuck in a loop, asking every single one of us the same stupid joke. This isn't a game, it's a glitch. I've had enough of this place.`,
        likes: 481,
        comments: [
            { characterKey: 'lario', text: 'Sounds like he needs a hard reset. I can do that. For a price.' }
        ]
    },
    {
        id: 'janna_robot_archie_excitement',
        order: 20227,
        characterKey: 'janna_brightspark',
        timestamp: '1 hour ago',
        content: `A CLONE AND A ROBOTIC DUPLICATE?! In the same location?! The potential for comparative analysis is staggering! The robotic version must have a fascinating power source, and the clone's ecto-plasmic composition could unlock the secrets of biological replication! I must acquire them! FOR SCIENCE!`,
        likes: 450,
        comments: [
            { characterKey: 'archmage_theron', text: 'Janna, you will not try to capture anyone\'s clone or robot. That is a diplomatic nightmare.' }
        ]
    },
    {
        id: 'ryan_robot_archie_horror',
        order: 20226,
        characterKey: 'ryan',
        timestamp: '1 hour ago',
        content: `WHAT WAS THAT?! The Oracle clapped and a ROBOT ARCHIE walked out of the other room. A ROBOT. It just ate our food by opening a panel in its chest. This is the weirdest, most terrifying thing I have ever seen.`,
        likes: 613,
        comments: [
            { characterKey: 'dan', text: 'A robot version of Archie? That sounds impossible.' },
            { characterKey: 'cybernetic_collectives', text: '[ANALYSIS]: An intriguing development. Requesting schematics.' }
        ]
    },
    {
        id: 'rodger_demands_poison_proof',
        order: 20225,
        characterKey: 'rodger',
        timestamp: '1 hour ago',
        content: `This is a trap. L thinks the food is poisoned and for once I agree with him. I told the Oracle. If it's safe, HE can eat it. Take a piece from every plate. Let's see how confident he is then.`,
        likes: 512,
        comments: [
            { characterKey: 'bones', text: 'Good move. Never trust a free meal, especially from a ghost.' }
        ]
    },
    {
        id: 'ryan_archie_clone_fireball',
        order: 20224,
        characterKey: 'ryan',
        timestamp: '1 hour ago',
        content: `SOMEONE WHO LOOKS LIKE ARCHIE JUST WALKED IN AND THREW A FIREBALL AT US. It's not him. It's a copy. His eyes are empty. What is this place?!`,
        likes: 520,
        comments: [
            { characterKey: 'three_eyed_bandit', text: 'Wait, what? Another one? This is getting out of hand.' },
            { characterKey: 'waluigi', text: 'WAH! A cheap copy! No style! No flair!' }
        ]
    },
    {
        id: 'rodger_beware_the_t',
        order: 20223,
        characterKey: 'rodger',
        timestamp: '1 hour ago',
        content: `Sitting in the dining hall. There's a carving on one of the chairs: 'Beware the T.' And every single candle is lit. It's too bright. This isn't a dinner. It's an interrogation.`,
        likes: 495,
        comments: [
            { characterKey: 'detective_penny', text: 'A clue. T could stand for anything. Toad. Traitor. Time. Document everything.' }
        ]
    },
    {
        id: 'toad_lee_oracle_arrival',
        order: 20222,
        characterKey: 'toad_lee',
        timestamp: '1 hour ago',
        content: `We have entered the Shadeward Mansion in search of Archie. We have not found him. We have found the Oracle. He is... unnerving. His attempts at humor are not successful. He asked me a riddle about a pirate. I did not have the correct answer.`,
        likes: 467,
        comments: [
            { characterKey: 'captain_syrup', text: 'It\'s "the C," you landlubber.' }
        ]
    },

    // =================================================================
    // === BRAMBLEHAVEN SIEGE ARC ===
    // This arc tells the story of the bloody battle for Bramblehaven,
    // starting with the official "victory" and then flashing back to the brutal reality.
    // =================================================================

    // --- The Official Victory & Immediate Aftermath ---
    // The story starts here: the world sees a victory, but the main players reveal the true cost.
    {
        id: 'wah_media_bramblehaven',
        order: 20080,
        characterKey: 'wah_media_collective',
        timestamp: 'Just Now',
        content: `**BRAMBLEHAVEN FALLS IN BLOODY SIEGE!** captain_toadette's Peach Loyalists have conquered the Fawful bastion of Bramblehaven after a brutal, day-long assault. Sources describe a battle of shocking attrition, culminating in a final charge where surrendering Fawful troops were shown no mercy. Loyalist casualties are 'catastrophic', but the victory gives them a key strategic position and, according to a dying soldier, 'invaluable intel'. The ruthless tactics have solidified the Loyalists' fearsome reputation across the kingdom.`,
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
            { characterKey: 'embercap', text: "For the Princess." },
            { characterKey: 'sergeant_quill', text: "A glorious day for the Kingdom, Captain!" }
        ],
        eventId: 'bramblehaven_siege'
    },
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
{
    id: 'wah_media_manor_rumors',
    order: 20100,
    characterKey: 'wah_media_collective',
    timestamp: '8 hours ago',
    content: `**STRANGE LIGHTS AT RAVENTREE!** Locals are reporting unsettling flashes of orange light and acid-green hissing sounds emanating from the grounds of the notoriously haunted Raventree Manor. The property was recently acquired by associates of the Vigilance crew. What are they stirring up in there?`,
    likes: 1845,
    comments: [
        { characterKey: 'generic_toad', text: "My grandpa said no one's lasted a night in that place for fifty years! They're doomed!" }
    ],
    eventId: 'manor_madness'
},
{
    id: 'waluigi_hears_commotion',
    order: 20099,
    characterKey: 'waluigi',
    timestamp: '8 hours ago',
    content: `WAH! I hear the sounds of shoddy craftsmanship and impending doom! A perfect moment for a WAH-nderful appearance!`,
    likes: 1210,
    comments: [],
    eventId: 'manor_madness'
},
{
    id: 'waluigi_fireball_brag',
    order: 20098,
    characterKey: 'waluigi',
    timestamp: '8 hours ago',
    content: `Heard a damsel in distress and her melting cutlery! A magnificent entrance, a glorious fireball, and the crowd goes wild! You're welcome, rookie! The house always wins when Waluigi's on stage! #WAAnderful`,
    image: 'waluigi_fireball.png',
    image_alt: "Waluigi striking a dramatic pose as a massive fireball erupts in a dark hallway.",
    likes: 1488,
    comments: [
        { characterKey: 'giggling_pete', text: "A performance for the ages! The Jester applauds!" }
    ],
    eventId: 'manor_madness'
},
{
    id: 'bowser_woken_up',
    order: 20097,
    characterKey: 'bowser',
    timestamp: '3 hours ago',
    content: `WHO IS MAKING THAT RACKET?! SOUNDS LIKE THE WHOLE CASTLE IS COMING DOWN. I'M TRYING TO SLEEP. If this is another one of your three-eyed weirdo's experiments, I'm going to start breaking things. IMPORTANT things.`,
    likes: 1350,
    comments: [],
    eventId: 'manor_madness'
},
{
    id: 'dan_wakes_up_confused',
    order: 20096,
    characterKey: 'dan',
    timestamp: '3 hours ago',
    content: `Woke up to a huge crash. Think I heard someone scream. Everyone okay out there? The floor is shaking.`,
    likes: 315,
    comments: [],
    eventId: 'manor_madness'
},
{
    id: 'bowser_dismissal',
    order: 20095,
    characterKey: 'bowser',
    timestamp: '3 hours ago',
    content: `It's five in the morning. If you lightweights can't handle a little thunderstorm, stay in bed. The King needs his beauty sleep. Don't make me come out there.`,
    likes: 955,
    comments: [],
    eventId: 'manor_madness'
},
{
    id: 'bones_structural_analysis',
    order: 20094,
    characterKey: 'bones',
    timestamp: '3 hours ago',
    content: `Heard the balcony went. Shoddy construction. Reminds me of the west block in the old Imperial Pen. That place was a death trap too. At least here the ghosts are quiet.`,
    likes: 512,
    comments: [],
    eventId: 'manor_madness'
},
{
    id: 'oracle_invitation',
    order: 20093,
    characterKey: 'the_oracle',
    timestamp: '3 hours ago',
    content: `A minor structural incident has occurred. My sincerest apologies for the disturbance. As compensation, all my esteemed guests are cordially invited to a special event I have prepared in the back gardens. Do attend when you are rested.`,
    likes: 450,
    comments: [
        { characterKey: 'generic_toad', text: "He seems... awfully calm about his house falling apart." }
    ],
    eventId: 'manor_madness'
},
{
    id: 'oracle_garden_warning',
    order: 20092,
    characterKey: 'the_oracle',
    timestamp: '3 hours ago',
    content: `The gardens are quite lovely this time of night. The thorns are... active. Do be careful where you step. My previous groundskeeper was not.`,
    likes: 730,
    comments: [],
    eventId: 'manor_madness'
},
{
    id: 'wah_media_wyvern_sighting',
    order: 20091,
    characterKey: 'wah_media_collective',
    timestamp: '2 hours ago',
    content: `**WYVERN SIGHTING NEAR RAVENTREE!** A massive winged reptile was spotted departing the infamous haunted mansion, carrying two figures identified as the notorious Waluigi and his associate Green T. An eyewitness claims a shrill whistle preceded the creature's arrival. What are they up to now?!`,
    image: 'wyvern_escape.png',
    image_alt: "A wyvern flying away from a gothic mansion silhouetted against a foggy, moonlit sky.",
    likes: 3410,
    comments: [
        { characterKey: 'the_broker', text: "Confirmed. Market for aerial getaway services just saw a new, flamboyant entry. Rates are... volatile." }
    ],
    eventId: 'manor_madness'
},
{
    id: 'waluigi_escape_post',
    order: 20090,
    characterKey: 'waluigi',
    timestamp: '2 hours ago',
    content: `The Oracle's offer is intriguing, no? Time-travel, profits... a stage fit for a star! Let's play his little game. From a safe distance. On a dragon. WAH! #GrandExit`,
    likes: 1630,
    comments: [
        { characterKey: 'green_t', text: "Just get us clear of the creepy fog." }
    ],
    eventId: 'manor_madness'
},
{
    id: 'waluigi_new_partner',
    order: 20089,
    characterKey: 'waluigi',
    timestamp: '2 hours ago',
    content: `The big dwarf is surprisingly agreeable when you explain the simple beauty of PROFIT! He'll be the muscle, I'll be the magnificent brains! A perfect partnership!`,
    likes: 1337,
    comments: [],
    eventId: 'manor_madness'
},
{
    id: 'bowser_morning_complaint',
    order: 20088,
    characterKey: 'bowser',
    timestamp: '2 hours ago',
    content: `Right. The balcony's gone, the purple twig flew off on a lizard, and the three-eyed freak is skulking around. This is the worst vacation ever. I'm going to go punch a gargoyle.`,
    likes: 1245,
    comments: [],
    eventId: 'manor_madness'
},
{
    id: 'green_t_after_action_report',
    order: 20087,
    characterKey: 'green_t',
    timestamp: '2 hours ago',
    content: `Okay, we're clear. The boss's exit strategy was... unorthodox. But effective. Now about this 'time travel' business plan... I'm going to need to see the numbers.`,
    likes: 670,
    comments: [],
    eventId: 'manor_madness'
},
{
    id: 'dan_potion_aftermath',
    order: 20086,
    characterKey: 'dan',
    timestamp: '2 hours ago',
    content: `Woke up to a crash. Then I was... bigger? Then smaller again. Bowser slapped me off someone's shoulders. Did anyone else see the purple guy on the lizard? Or was that the potion? My head hurts.`,
    likes: 233,
    comments: [],
    eventId: 'manor_madness'
},
{
    id: 'oracle_ghost_comment',
    order: 20085,
    characterKey: 'the_oracle',
    timestamp: '1 hour ago',
    content: `I see some of my guests have met the more... permanent residents. They mean no harm. They are merely curious. And so very, very quiet.`,
    likes: 810,
    comments: [
        { characterKey: 'generic_toad', text: "NOPE. NOPE NOPE NOPE." }
    ],
    eventId: 'manor_madness'
},
{
    id: 'oracle_wall_punch_response',
    order: 20084,
    characterKey: 'the_oracle',
    timestamp: '1 hour ago',
    content: `The west parlor is safe for use now. If a guest requires the other bathroom, they need only to ask. There is no need for such... percussive inquiries... on the drywall.`,
    likes: 666,
    comments: [],
    eventId: 'manor_madness'
},
{
    id: 'wah_media_eager_found_rumor',
    order: 20083,
    characterKey: 'wah_media_collective',
    timestamp: '1 hour ago',
    content: `**RUMOR MILL:** Whispers from within the manor claim the 'missing' toad Eager has been found, rescued from a shattered glass solarium filled with 'shimmering mirrors'. The circumstances remain bizarre and unconfirmed.`,
    likes: 2500,
    comments: [
        { characterKey: 'the_broker', text: "Asset 'Eager' location confirmed and status updated to 'rescued, but traumatized.' His market value just plummeted. A shame." }
    ],
    eventId: 'manor_madness'
},
{
    id: 'bones_observation_on_manor',
    order: 20082,
    characterKey: 'bones',
    timestamp: '30 minutes ago',
    content: `Heard the crash. Heard the shouting. Saw the purple guy fly away on a lizard. Same chaos, different wallpaper. This place is just another battlefield.`,
    likes: 478,
    comments: [],
    eventId: 'manor_madness'
},
{
    id: 'waluigi_final_taunt',
    order: 20081,
    characterKey: 'waluigi',
    timestamp: 'Just Now',
    content: `To the spooky ghost-man @The_Oracle... your little house party is a magnificent disaster! The ambience is dreadful, the architecture is suicidal, and the staff is positively spectral! 10/10, will recommend to all my enemies! WAH!`,
    likes: 1999,
    comments: [
        { characterKey: 'the_oracle', text: "I am delighted you are enjoying your stay. The gardens await your return." }
    ],
    eventId: 'manor_madness'
},    
    {
        id: 'bramblehaven_quill_pre_battle',
        order: 20076,
        characterKey: 'sergeant_quill',
        timestamp: '1 day ago',
        content: `Dawn breaks on a historic day! Our brave soldiers stand ready to excise this Fawful-blight from our lands. By sundown, the Princess's banner will fly over Bramblehaven's walls. Let every soldier fight with righteous fury in their heart! For the Princess!`,
        likes: 1850,
        comments: [
            { characterKey: 'captain_toadette', text: "Failure is not an option, Sergeant." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'bramblehaven_flak_pre_battle',
        order: 20075,
        characterKey: 'forager_flak',
        timestamp: '1 day ago',
        content: `It's cold. The silence before the horns sound is always the worst part. You can hear everyone breathing. You can see the frost on the walls up there. Just want to get this over with.`,
        likes: 633,
        comments: [
            { characterKey: 'spotter_pip', text: "Stay close, Flak. We'll watch each other's backs." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'wah_media_assault_begins',
        order: 20074,
        characterKey: 'wah_media_collective',
        timestamp: '23 hours ago',
        content: `**DAWN ASSAULT BEGINS!** The Peach Loyalists have launched their attack on Bramblehaven! An overwhelming wave of troops is storming the outer walls. Fawful's garrison has responded with a devastating barrage of frost magic, and the battlefield is already littered with casualties.`,
        likes: 2540,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: "A frontal assault against a fortified position with magical defenses. Bold, but costly. Very costly." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'bramblehaven_mistveil_injured',
        order: 20073,
        characterKey: 'mistveil_aide',
        timestamp: '22 hours ago',
        content: `Commander Mistveil has been hit! The frost magic is severe. They targeted our leadership! Cowards! Dewdrop is with him now. This insult will be repaid in blood. They will regret ever touching him.`,
        likes: 1340,
        comments: [
            { characterKey: 'dewdrop', text: "He's strong. He'll pull through. Now let me work." },
            { characterKey: 'embercap', text: "Anger is a weapon. Aim it well." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'dewdrop_frost_casualties',
        order: 20072,
        characterKey: 'dewdrop',
        timestamp: '22 hours ago',
        content: `So much ice... these aren't clean wounds. The frost magic freezes them solid, shatters limbs. I'm doing everything I can, but we weren't prepared for this level of arcane defense. The first wave was a massacre.`,
        likes: 1021,
        comments: [],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'bramblehaven_tank_breach',
        order: 20071,
        characterKey: 'sapper_sprocket',
        timestamp: '20 hours ago',
        content: "That Fawful-tech tank was a real piece of junk, but we got her running! Pointed it at their own wall and... BOOM! The look on their faces when their own hardware tore a hole in their defenses. Priceless. The breach is open!",
        likes: 1120,
        comments: [
            { characterKey: 'lario', text: "Heh. Bet I could have gotten twice the explosive yield out of that rust bucket. Amateur." },
            { characterKey: 'iron_legion', text: "The strategic application of captured enemy assets is a hallmark of an effective fighting force. Commendable." }
        ],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'biff_wall_taken',
        order: 20070,
        characterKey: 'breacher_biff',
        timestamp: '19 hours ago',
        content: `THE WALL IS OURS! Fought tooth and nail for every inch, but we're on the ramparts! We're planting the banner! Let's show these Fawful freaks what happens when they mess with the Loyalists!`,
        likes: 1590,
        comments: [],
        eventId: 'bramblehaven_siege'
    },
    {
        id: 'embercap_no_quarter_order',
        order: 20069,
        characterKey: 'embercap',
        timestamp: '19 hours ago',
        content: `The wall is breached, but the cost was too high. They showed our first wave no mercy. We will show them the same. No prisoners. No quarter. Clear the ramparts. Make them pay for every soldier we lost.`,
        likes: 1755,
        comments: [
            { characterKey: 'captain_toadette', text: "Execute the order, Commander." },
            { characterKey: 'forager_flak', text: "Commander... are you sure?" }
        ],
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