import { WAHBOOK_INTEL_POSTS } from './assembly-intel-data.js';

// This file contains "viral" posts that appear on the main Wah-Book feed.
// They are ordered by the 'order' property, with higher numbers appearing first.
// Posts are grouped by 'eventId' to represent distinct story arcs.

export const VIRAL_POSTS = [
    {
        id: 'rodger_traitor_reveal',
        order: 10239,
        characterKey: 'rodger',
        timestamp: 'Just Now',
        content: `Creek found this. During the surgery. It was on him the whole time. He was one of them. He was a plant. All of this... it was a setup.`,
        image: 'legion_insignia_card.png',
        image_alt: "A small, blood-stained iron card bearing the insignia of the Iron Legion.",
        likes: 899,
        comments: [
            { characterKey: 'toad_lee', text: '...Betrayed.' },
            { characterKey: 'ryan', text: 'I KNEW IT. I KNEW SOMETHING WAS WRONG.' },
            { characterKey: 'dan', text: 'What?! No...' }
        ]
    },
    {
        id: 'rodger_creek_surgery',
        order: 10238,
        characterKey: 'rodger',
        timestamp: '5 minutes ago',
        content: `We got him to Creek. We had to trade almost everything we had left. The operation is... happening. I can't watch. The sounds are bad enough.`,
        likes: 310,
        comments: []
    },
    {
        id: 'bones_calls_out_lt',
        order: 10237,
        characterKey: 'bones',
        timestamp: '10 minutes ago',
        content: `Oh, I'm sorry, is your shiny cape getting crumpled, 'Capey'? You Legion types are all the same. All authority, no substance. Get over yourself.`,
        likes: 560,
        comments: [
            { characterKey: 'colonel_vera_steelstorm', text: 'Insubordination will be noted, criminal.' }
        ]
    },
    {
        id: 'purple_t_my_house',
        order: 10236,
        characterKey: 'purple_t',
        timestamp: '12 minutes ago',
        content: `GET OUT OF MY HOUSE! THIS IS MY SHIP! MINE! YOU HAVE NO JURISDICTION HERE, LEGION SCUM! GET OUT!`,
        likes: 411,
        comments: [
            { characterKey: 'generic_toad', text: 'Uh... I thought this was the Vigilance? When did he get a house?' }
        ]
    },
    {
        id: 'toad_lee_return_to_ship',
        order: 10235,
        characterKey: 'toad_lee',
        timestamp: '15 minutes ago',
        content: `We have returned to the airship. It is filled with steam and Iron Legion soldiers calling themselves the 'Royal Service'. They are... cooking. The situation remains volatile.`,
        likes: 345,
        comments: []
    },
    {
        id: 'oracle_offers_rooms',
        order: 10234,
        characterKey: 'self_reflection_oracle',
        timestamp: '20 minutes ago',
        content: `Such a trying evening for you all. Do not fret. Though this estate has proven... inhospitable, I have several others. A lovely summer home by the sea, perhaps? The reflections there are much calmer.`,
        likes: 720,
        comments: [
            { characterKey: 'ryan', text: 'WE\'RE LEAVING.' }
        ]
    },
    {
        id: 'rodger_negotiation',
        order: 10233,
        characterKey: 'rodger',
        timestamp: '22 minutes ago',
        content: `We got him back. We talked them down. One of the soldiers kicked him down the stairs as a final 'parting gift'. He's hurt bad, but he's with us. We're getting out of here.`,
        likes: 418,
        comments: []
    },
    {
        id: 'ryan_aftermath_of_darkness',
        order: 10232,
        characterKey: 'ryan',
        timestamp: '25 minutes ago',
        content: `The light is back. The two Archies are gone, locked behind a door. We're all bruised. A few of us are laughing, I think from shock. That was... insane. We need to go. NOW.`,
        likes: 388,
        comments: []
    },
    {
        id: 'toad_lee_blind_chaos',
        order: 10231,
        characterKey: 'toad_lee',
        timestamp: '28 minutes ago',
        content: `Darkness. Complete and total. I can hear the clang of weapons hitting metal, the splintering of wood. We are fighting shadows. This is madness.`,
        likes: 350,
        comments: []
    },
    {
        id: 'ryan_unleashes_darkness',
        order: 10230,
        characterKey: 'ryan',
        timestamp: '30 minutes ago',
        content: `ENOUGH! You want to play games in the dark?! FINE! LET'S PLAY!`,
        likes: 512,
        comments: []
    },
    {
        id: 'purple_t_defends_waluigi_book',
        order: 10229,
        characterKey: 'purple_t',
        timestamp: '32 minutes ago',
        content: `Don't you talk about Waluigi's book! It was a very cool book! You wouldn't understand!`,
        likes: 210,
        comments: [
            { characterKey: 'waluigi', text: 'WAH! My book collection IS cool! Full of magnificent schemes and stylish poses!' }
        ]
    },
    {
        id: 'rodger_interrogation_fail',
        order: 10228,
        characterKey: 'rodger',
        timestamp: '35 minutes ago',
        content: `This interrogation is a joke. They ask about the staff, they ask about Archie. They don't care about the toad who was just eaten by a robot. And now L is screaming at Ryan about a book. We're losing it.`,
        likes: 391,
        comments: []
    },
    {
        id: 'wario_business_update',
        order: 10227,
        characterKey: 'wario',
        timestamp: '40 minutes ago',
        content: `Observing the Iron Legion's... methods. Inefficient, but they get results. The temporal flux in this mansion is a potential gold mine. Releasing their prisoners is bad for business. Gotta see this play out. #WarioInvestigates`,
        likes: 555,
        comments: [
            { characterKey: 'detective_penny', text: 'Wario. Your involvement is noted. We will be having a discussion about your business practices.' }
        ]
    },
    {
        id: 'kamek_observes_wario',
        order: 10226,
        characterKey: 'kamek',
        timestamp: '42 minutes ago',
        content: `Mr. Wario makes an appearance, aligned with the Iron Legion. A curious alliance. Greed and Order, hand-in-hand. The political landscape of this realm grows more convoluted, and thus, more interesting.`,
        likes: 412,
        comments: []
    },
    {
        id: 'toad_lee_library',
        order: 10225,
        characterKey: 'toad_lee',
        timestamp: '45 minutes ago',
        content: `We tracked them to the library. The Legion has Bones. They speak of bats, but the creatures in the shelves are... something else. Then a new player arrives. A greedy man in yellow. Wario.`,
        likes: 401,
        comments: []
    },
    {
        id: 'ryan_robot_eats_toad',
        order: 10224,
        characterKey: 'ryan',
        timestamp: '48 minutes ago',
        content: `He tried to run. The robot Archie just... opened up. And pulled him inside. There was a sound. I'm going to be sick. And one of our own just HELPED the Legion grab Bones. We have a traitor.`,
        likes: 489,
        comments: []
    },
    {
        id: 'iron_legion_report',
        order: 10223,
        characterKey: 'iron_legion_commando',
        timestamp: '50 minutes ago',
        content: `Primary target 'Orange Toad' not present. Have secured secondary targets for interrogation. Resistance encountered and suppressed. The mansion is under Legion control.`,
        likes: 640,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: 'Proceed. Extract the information. By any means necessary.' }
        ]
    },
    {
        id: 'bones_dream',
        order: 10222,
        characterKey: 'bones',
        timestamp: '52 minutes ago',
        content: `Everyone wants to BE something. A hero, a leader, a king. Me? My only dream is becoming Archie Miser. And I'm a hell of a lot closer than this cheap copy.`,
        likes: 515,
        comments: []
    },
    {
        id: 'oracle_farewell',
        order: 10221,
        characterKey: 'self_reflection_oracle',
        timestamp: '55 minutes ago',
        content: `Farewell. I’ll be reborn. This life is too depressing. May your Archie disappear without a trace.`,
        likes: 910,
        comments: [
            { characterKey: 'toad_lee', text: 'What did he mean by that?' }
        ]
    },
    {
        id: 'ryan_oracle_broken',
        order: 10220,
        characterKey: 'ryan',
        timestamp: '58 minutes ago',
        content: `We already did this! He's broken! The Oracle is stuck in a loop, asking every single one of us the same stupid joke. This isn't a game, it's a glitch. I've had enough of this.`,
        likes: 423,
        comments: []
    },
    {
        id: 'toad_lee_joke_success',
        order: 10219,
        characterKey: 'toad_lee',
        timestamp: '1 hour ago',
        content: `The Oracle repeated his query. This time, I understood the premise. 'The C.' His satisfaction was... unsettlingly immense. Now he is asking the others.`,
        likes: 388,
        comments: []
    },
    {
        id: 'rodger_fake_staff',
        order: 10218,
        characterKey: 'rodger',
        timestamp: '1 hour ago',
        content: `The clone is back, and now he has a 'staff'. It's a fake. Too clean, no scratches. It's brand new. Another lie. What is the Oracle's game here?`,
        likes: 440,
        comments: []
    },
    {
        id: 'ryan_robot_archie',
        order: 10217,
        characterKey: 'ryan',
        timestamp: '1 hour ago',
        content: `WHAT WAS THAT?! The Oracle clapped and a ROBOT ARCHIE walked out of the other room. A ROBOT. It just ate our food. This is the weirdest, most terrifying thing I have ever seen.`,
        likes: 531,
        comments: []
    },
    {
        id: 'rodger_demands_proof',
        order: 10216,
        characterKey: 'rodger',
        timestamp: '1 hour ago',
        content: `This is a trap. L thinks the food is poisoned and for once I agree with him. I told the Oracle. If it's safe, HE can eat it. Take a piece from every plate. Let's see how confident he is then.`,
        likes: 478,
        comments: []
    },
    {
        id: 'purple_t_accuses',
        order: 10215,
        characterKey: 'purple_t',
        timestamp: '1 hour ago',
        content: `You're all fools! Sitting down to eat with this... thing! The food is obviously poisoned! You're so weak, so desperate for a moment of peace you'd swallow your own doom!`,
        likes: 313,
        comments: []
    },
    {
        id: 'toad_lee_clone_lies',
        order: 10214,
        characterKey: 'toad_lee',
        timestamp: '1 hour ago',
        content: `We have questioned the duplicate. It claims the staff was given to Green T. A falsehood. Its voice trembled. It cannot maintain the deception under pressure.`,
        likes: 415,
        comments: []
    },
    {
        id: 'ryan_fireball',
        order: 10213,
        characterKey: 'ryan',
        timestamp: '1 hour ago',
        content: `SOMEONE WHO LOOKS LIKE ARCHIE JUST WALKED IN AND THREW A FIREBALL AT US. It's not him. It's a copy. His eyes are empty.`,
        likes: 498,
        comments: []
    },
    {
        id: 'rodger_bad_feeling',
        order: 10212,
        characterKey: 'rodger',
        timestamp: '1 hour ago',
        content: `Sitting in the dining hall. There's a carving on one of the chairs: 'Beware the T.' And every single candle is lit. It's too bright. This isn't a dinner. It's an interrogation.`,
        likes: 450,
        comments: []
    },
    {
        id: 'oracle_pirate_joke',
        order: 10211,
        characterKey: 'self_reflection_oracle',
        timestamp: '1 hour ago',
        content: `What’s a pirate’s favorite letter? ... Anyone? ... The C. It's the C. You see, because of the... sea.`,
        likes: 680,
        comments: [
            { characterKey: 'toad_lee', text: 'I do not understand the reference.' }
        ]
    },
    {
        id: 'toad_lee_arrival',
        order: 10210,
        characterKey: 'toad_lee',
        timestamp: '1 hour ago',
        content: `We have entered the Shadeward Mansion in search of Archie. We have not found him. We have found the Oracle. He is... unnerving. His attempts at humor are not successful.`,
        likes: 422,
        comments: []
    },

    {
        id: 'wah_media_bramblehaven',
        order: 20080,
        characterKey: 'wah_media_collective',
        timestamp: 'Just Now',
        content: `**BRAMBLEHAVEN FALLS IN BLOODY SIEGE!** Captain Toadette's Peach Loyalists have conquered the Fawful bastion of Bramblehaven after a brutal, day-long assault. Sources describe a battle of shocking attrition, culminating in a final charge where surrendering Fawful troops were shown no mercy. Loyalist casualties are 'catastrophic', but the victory gives them a key strategic position and, according to a dying soldier, 'invaluable intel'. The ruthless tactics have solidified the Loyalists' fearsome reputation across the kingdom.`,
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