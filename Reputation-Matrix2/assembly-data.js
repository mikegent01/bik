
import { WAHBOOK_INTEL_POSTS } from './assembly-intel-data.js';
import { VIRAL_POSTS } from './assembly-viral-data.js';

export const WAHBOOK_POSTS = [
    ...VIRAL_POSTS,
    {
        id: 'waluigi_manor_gloat_2',
        order: 10076,
        characterKey: 'waluigi',
        timestamp: 'Just Now',
        content: `WAH! Leaving these losers to their squabbling. Bowser and I are 'relocating' some well-deserved treasures to my magnificent new property: Raventree Manor! Time for some peace and quiet... and looting! WAH-HA-HA!`,
        likes: 133,
        comments: [],
    },
    {
        id: 'toad_lee_splinter_groups',
        order: 10075,
        characterKey: 'toad_lee',
        timestamp: '5 minutes ago',
        content: `The crew splinters. 'First Cohort', 'Originals'... Dan falters under the pressure. This is not the unity we swore a vow for. We are losing ourselves.`,
        likes: 289,
        comments: []
    },
    {
        id: 'dan_manor_regroup',
        order: 10126,
        characterKey: 'dan',
        timestamp: 'Just Now',
        content: `We're all back together. For now. This place... it feels like it's watching us. Every shadow, every creak. We need to be careful. We need to stick together.`,
        likes: 112,
        comments: [
            { characterKey: 'toad_lee', text: 'Agreed. Vigilance is paramount.' }
        ]
    },
    {
        id: 'bones_manor_recap',
        order: 10125,
        characterKey: 'bones',
        timestamp: '2 minutes ago',
        content: `Let's recap: One guy got mugged by his own shirt, another tried to become a floorboard, and a ghost offered us tea. This is gonna be a fun vacation. Anyone know any good exorcists? Asking for a friend.`,
        likes: 231,
        comments: [
            { characterKey: 'eager', text: 'I AM NOT A FLOORBOARD!' }
        ]
    },
    {
        id: 'ryan_found_him',
        order: 10124,
        characterKey: 'ryan',
        timestamp: '5 minutes ago',
        content: `Found him. He's pinned in the west hall. The floor gave way. He's okay, just stuck. The energy in this part of the manor is... volatile.`,
        likes: 188,
        comments: []
    },
    {
        id: 'generic_toad_panic',
        order: 10123,
        characterKey: 'generic_toad',
        timestamp: '8 minutes ago',
        content: `Wait, where's the guy with the staff?! Did the ghosts get him?! We just got here and we're already losing people! I knew this was a bad idea!`,
        likes: 95,
        comments: []
    },
    {
        id: 'bowser_laughs_at_stuck',
        order: 10122,
        characterKey: 'bowser',
        timestamp: '10 minutes ago',
        content: `GWAHAHA! Look at the little guy! He got stuck in the floor! That's what you get for trying to be sneaky! Serves him right! Now, someone get me a crowbar. This is hilarious.`,
        likes: 410,
        comments: []
    },
    {
        id: 'dan_lost_archie',
        order: 10121,
        characterKey: 'dan',
        timestamp: '12 minutes ago',
        content: `Has anyone seen where our friend with the... third eye went? He was right behind us. This place is a maze.`,
        likes: 145,
        comments: []
    },
    {
        id: 'steelstorm_iron_hoof',
        order: 10120,
        characterKey: 'colonel_vera_steelstorm',
        timestamp: '15 minutes ago',
        content: `Analyzing tactical formations from Equestria's 'Iron Hoof Day' parade. Impressive discipline. Their aerial units, however, lack strategic cohesion. A clear vulnerability.`,
        likes: 350,
        comments: []
    },
    {
        id: 'toad_lee_daughters_room',
        order: 10119,
        characterKey: 'toad_lee',
        timestamp: '18 minutes ago',
        content: `This room is a death trap. The entire structure is unstable. One wrong step could bring the whole wing down. We are leaving. Now.`,
        likes: 211,
        comments: []
    },
    {
        id: 'waluigi_my_room_choice',
        order: 10118,
        characterKey: 'waluigi',
        timestamp: '20 minutes ago',
        content: `WAH! I claim the master bedroom! It has the least dust and the biggest closet for my magnificent treasures! Anyone who objects will have to deal with my new ghost butler!`,
        likes: 189,
        comments: [
            { characterKey: 'bowser', text: 'DIBS ON THE ONE WITH THE FIREPLACE! I need to keep my shell warm.' }
        ]
    },
    {
        id: 'janna_kryn_letter',
        order: 10117,
        characterKey: 'janna_brightspark',
        timestamp: '22 minutes ago',
        content: `Inheritance letters? Correspondence to a 'Kryn'? And a shattered mirror? Fascinating! This suggests a potential thaumaturgical link or a scrying ritual gone wrong. I must analyze the glass shards for residual energy!`,
        likes: 280,
        comments: []
    },
    {
        id: 'free_name_sarah_iron_hoof',
        order: 10116,
        characterKey: 'free_name_sarah',
        timestamp: '25 minutes ago',
        content: `They call it 'Iron Hoof Day'. They parade in the streets and pretend loyalty is the same as strength. It is not. It is the celebration of a cage, and the tragedy is that most of the prisoners have forgotten they have wings.`,
        likes: 678,
        comments: []
    },
    {
        id: 'roger_yellow_room',
        order: 10115,
        characterKey: 'roger',
        timestamp: '28 minutes ago',
        content: `Found some old papers in a wardrobe. Looks like family letters. A lot of glass on the floor in here. Watch your step. Doesn't feel safe.`,
        likes: 134,
        comments: []
    },
    {
        id: 'eager_green_room_unease',
        order: 10114,
        characterKey: 'eager',
        timestamp: '30 minutes ago',
        content: `This room feels... wrong. Like a scream is trapped in the walls. The door was barricaded for a reason. I don't think we should stay here.`,
        likes: 162,
        comments: []
    },
    {
        id: 'detective_penny_mirror_note',
        order: 10113,
        characterKey: 'detective_penny',
        timestamp: '35 minutes ago',
        content: `Case Notes: Receiving secondhand reports of a note found at the infamous Raventree Manor. 'Don't clean the mirrors.' Reminds me of the old 'Vanishing Servant' cold case from decades ago. A possible connection? The plot, like a good trench coat, thickens. #RaventreeMysteries`,
        likes: 312,
        comments: []
    },
    {
        id: 'generic_toad_empty_clothes',
        order: 10112,
        characterKey: 'generic_toad',
        timestamp: '38 minutes ago',
        content: `Okay, okay, I'm trying to be brave but we just found an old uniform in a closet and there was NO SKELETON in it. Just... empty clothes. Where did the person GO?! I don't wanna be next!`,
        likes: 141,
        comments: [
            { characterKey: 'bones', text: 'Maybe he just got raptured out of his pants. Happens to the best of us.'}
        ]
    },
    {
        id: 'toad_lee_note',
        order: 10111,
        characterKey: 'toad_lee',
        timestamp: '40 minutes ago',
        content: `There is a note here, tucked behind a dresser. It reads: "Don't clean the mirrors." A warning. We will heed it.`,
        likes: 299,
        comments: []
    },
    {
        id: 'broker_iron_hoof',
        order: 10110,
        characterKey: 'the_broker',
        timestamp: '42 minutes ago',
        content: `Market update: Seasonal demand for anti-surveillance charms and dissident literature spiking in the Equestrian sector, coinciding with the 'Iron Hoof Day' celebrations. For a limited time, offering a bulk discount on forged travel papers. Discretion guaranteed.`,
        likes: 455,
        comments: []
    },
    {
        id: 'bowser_clothes_attack',
        order: 10109,
        characterKey: 'bowser',
        timestamp: '45 minutes ago',
        content: `HAH! That little toad servant just tricked the new guy into a closet and his own clothes beat him up! GWAHAHAHA! This place is great! Violent and weird! My two favorite things!`,
        likes: 502,
        comments: []
    },
    {
        id: 'dan_clothes_attack',
        order: 10108,
        characterKey: 'dan',
        timestamp: '48 minutes ago',
        content: `What just happened?! A toad servant locked one of us in a closet and... I think his clothes attacked him? Is everyone okay? This manor is more dangerous than it looks.`,
        likes: 173,
        comments: []
    },
    {
        id: 'ryan_ghost_energy',
        order: 10107,
        characterKey: 'ryan',
        timestamp: '50 minutes ago',
        content: `The ghost in the parlor... the ectoplasmic energy is ancient, tied to the house itself. It's not hostile. More... trapped. Awaiting something. The tea it offered felt real.`,
        likes: 240,
        comments: []
    },
    {
        id: 'regal_empire_iron_hoof',
        order: 10106,
        characterKey: 'regal_empire_delegate',
        timestamp: '52 minutes ago',
        content: `The Regal Empire officially commends Queen Celestia on another successful 'Iron Hoof Day'. Such displays of military precision and unwavering civic loyalty are a testament to strong, stable leadership. An example for all realms.`,
        likes: 854,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: 'Indeed. True strength is born of order and discipline.' }
        ]
    },
    {
        id: 'generic_toad_perrius',
        order: 10105,
        characterKey: 'generic_toad',
        timestamp: '55 minutes ago',
        content: `There's a ghost. A very polite ghost named Perrius sitting in the parlor. He offered me tea. I think I'm going to scream. A GHOST. OFFERED. ME. TEA.`,
        likes: 188,
        comments: [
            { characterKey: 'eager', text: 'Did you drink it?! Was it good?!' }
        ]
    },
    {
        id: 'dan_manor_foyer',
        order: 10104,
        characterKey: 'dan',
        timestamp: '1 hour ago',
        content: `We're inside Raventree Manor. It's... even worse than it looked from the outside. The air is so heavy and cold. This doesn't feel like a home. It feels like a tomb.`,
        likes: 215,
        comments: []
    },
    {
        id: 'waluigi_manor_arrival',
        order: 10103,
        characterKey: 'waluigi',
        timestamp: '1 hour ago',
        content: `WAH-HA-HA! Welcome to my humble abode! Ignore the cobwebs, the ominous whispering, and the bloodstains! It's a fixer-upper! Now, help me unload these chests before the ghosts unionize!`,
        likes: 255,
        comments: []
    },
    {
        id: 'bowser_manor_arrival',
        order: 10102,
        characterKey: 'bowser',
        timestamp: '1 hour ago',
        content: `Okay, this place is officially giving me the creeps. Smells like old books and regret. But I'm not scared! I'm the King of the Koopas! I'm just... making tactical observations about the high ghost concentration!`,
        likes: 489,
        comments: [
            { characterKey: 'kamek', text: 'A wise assessment, your frightfulness.' }
        ]
    },
    {
        id: 'toad_lee_manor_arrival',
        order: 10101,
        characterKey: 'toad_lee',
        timestamp: '1 hour ago',
        content: `We have arrived at the so-called 'Raventree Manor'. The structure is dilapidated. The air is foul. This is an unwise place to seek refuge. Stay alert.`,
        likes: 280,
        comments: []
    },
    {
        id: 'lario_waluigi_loot',
        order: 10100,
        characterKey: 'lario',
        timestamp: '1 hour ago',
        content: `That purple-clad menace is stealing all the good salvage! And he's got Bowser helping him! That's prime scrap, high-grade components, and maybe even some weird artifacts! It's not fair! I'm the one who's supposed to 'relocate' valuable goods!`,
        likes: 177,
        comments: []
    },
    {
        id: 'dan_follows_waluigi',
        order: 10099,
        characterKey: 'dan',
        timestamp: '1 hour ago',
        content: `Waluigi is taking chests from the Vigilance. Bowser is with him. He mentioned a manor... We're going to follow them. We can't let him just steal from people.`,
        likes: 243,
        comments: []
    },
    {
        id: 'cybernetic_collective_iron_hoof',
        order: 10098,
        characterKey: 'cybernetic_collectives',
        timestamp: '2 hours ago',
        content: `[ANALYSIS]: 'Iron Hoof Day' represents a successful, long-term implementation of societal conditioning protocols. State-mandated displays of loyalty correlate with a 78.9% reduction in public dissent. Data suggests emotional manipulation is more effective than physical force for sustained autocratic rule.`,
        likes: 712,
        comments: []
    },
    {
        id: 'eager_sees_loot',
        order: 10097,
        characterKey: 'eager',
        timestamp: '2 hours ago',
        content: `Hey! That tall purple guy is taking our stuff! And the big turtle is helping him! He said something about a 'manor'! Should we stop them?`,
        likes: 154,
        comments: []
    },
    {
        id: 'roger_sees_loot',
        order: 10096,
        characterKey: 'roger',
        timestamp: '2 hours ago',
        content: `Security breach. Waluigi and Bowser are removing assets from the cargo hold. They appear to be... working together? This complicates things. We need to secure our supplies.`,
        likes: 198,
        comments: []
    },
    {
        id: 'bones_sees_loot',
        order: 10095,
        characterKey: 'bones',
        timestamp: '2 hours ago',
        content: `Well, look at that. The lanky purple guy is robbing us blind, and he's got the giant turtle as his muscle. And here I thought we were the dysfunctional ones.`,
        likes: 311,
        comments: []
    },
    {
        id: 'bowser_helping_waluigi',
        order: 10094,
        characterKey: 'bowser',
        timestamp: '2 hours ago',
        content: `This stuff is HEAVY! But helping Waluigi 'reorganize' his 'assets' is a great workout! Plus, he promised me the best room in his new castle! It better have spikes! And lava!`,
        likes: 450,
        comments: [
            { characterKey: 'waluigi', text: 'WAH! Of course! The finest spikes money can... acquire!' }
        ]
    },
    {
        id: 'ryan_faction_pressure',
        order: 10093,
        characterKey: 'ryan',
        timestamp: '2 hours ago',
        content: `The energy on this ship is fractured. Everyone is pulling in different directions. This isn't unity. It's just a different kind of cage.`,
        likes: 265,
        comments: []
    },
    {
        id: 'dan_falters',
        order: 10092,
        characterKey: 'dan',
        timestamp: '2 hours ago',
        content: `Everyone... please. Just stop. We can't do this. We can't fall apart now.`,
        likes: 350,
        comments: [
            { characterKey: 'green_t', text: 'Too late, ' },
            { characterKey: 'toad_lee', text: 'Breathe, Dan. Find your center.'}
        ]
    },
    {
        id: 'eager_factions',
        order: 10091,
        characterKey: 'eager',
        timestamp: '3 hours ago',
        content: `Whoa! Everyone has a cool group name! 'First Cohort'! 'Originals'! Can we have one? We could be the 'Super Awesome Friends Club'! Or the 'Vigilant Avengers'! No, wait...`,
        likes: 121,
        comments: [
            { characterKey: 'bones', text: "Kid, read the room."}
        ]
    },
    {
        id: 'kamek_oracle_observation',
        order: 10132,
        characterKey: 'kamek',
        timestamp: 'Just Now',
        content: `A new ripple in the pond of fate. This "Oracle of the Lake of Mirrors" has begun to whisper in the dreams of fools and heroes alike. A pawn with the sight of a king is still a pawn... but a very interesting one. His visions could be useful... or a liability. I will be watching.`,
        likes: 315,
        comments: []
    },
    {
        id: 'bones_scoffs_at_oracle',
        order: 10131,
        characterKey: 'bones',
        timestamp: '2 minutes ago',
        content: `Great. Now people are having 'prophetic dreams'. Let me tell you about the future I see: we're in a haunted house full of ghosts and kleptomaniacs, our crew is falling apart, and someone's gonna trip in the dark. You don't need a magic 8-ball to figure that out.`,
        likes: 388,
        comments: [
             { characterKey: 'eager', text: 'I have a magic 8-ball! It says "Reply hazy, try again."' }
        ]
    },
    {
        id: 'generic_toad_oracle_rumor',
        order: 10130,
        characterKey: 'generic_toad',
        timestamp: '5 minutes ago',
        content: `Did anyone else have a weird dream last night? About a quiet lake and a voice that wasn't there? My neighbor Bertha said she dreamed about the winning lottery numbers but forgot them when she woke up. I just dreamed my hat was trying to tell me something.`,
        likes: 124,
        comments: []
    },
    {
        id: 'janna_knows_oracle',
        order: 10129,
        characterKey: 'janna_brightspark',
        timestamp: '8 minutes ago',
        content: `Fascinating! Widespread reports of synchronous dream-visions. The temporal resonance pattern is unmistakable—it's the Oracle of the Lake of Mirrors. His Vision Shard is a nexus of precognitive energy I've wanted to study for years! Imagine the applications of controlled temporal observation! This is groundbreaking!`,
        likes: 299,
        comments: [
            { characterKey: 'archmage_theron', text: 'Janna, the Oracle is a neutral observer. You will not harass him for his 'data'. That is an order.' }
        ]
    },
    {
        id: 'dan_oracle_dream',
        order: 10128,
        characterKey: 'dan',
        timestamp: '12 minutes ago',
        content: `Had the strangest dream... I was standing by a lake made of mirrors. A voice, calm and quiet, told me that 'a house of splintered wood cannot stand, but a seed needs broken ground to grow.' I don't know what it means, but I can't shake the feeling it was important.`,
        likes: 411,
        comments: [
            { characterKey: 'toad_lee', text: 'A riddle. Meditate on it. The meaning will reveal itself.' }
        ]
    },
    {
        id: 'oracle_first_vision',
        order: 10127,
        characterKey: 'self_reflection_oracle',
        timestamp: '15 minutes ago',
        content: `The threads diverge. A house of rot and memory becomes a crucible. A cohort, broken, seeks a foundation on shattered ground. One path leads to a key, another to a cage. The reflection in the water is not always your own.`,
        likes: 777,
        comments: []
    },    
    {
        id: 'bones_faction_cynicism',
        order: 10090,
        characterKey: 'bones',
        timestamp: '3 hours ago',
        content: `Heh. 'First Cohort.' 'Originals.' Give people five minutes of freedom and the first thing they do is build new walls and pick new teams. Never changes.`,
        likes: 341,
        comments: []
    },
    {
        id: 'roger_factions',
        order: 10089,
        characterKey: 'roger',
        timestamp: '3 hours ago',
        content: `This is inefficient. Splinter groups create logistical friction and undermine chain of command. A unified structure is necessary for survival. Dan needs to establish clear protocols.`,
        likes: 184,
        comments: []
    },
    {
        id: 'dan_faction_pressure',
        order: 10088,
        characterKey: 'dan',
        timestamp: '3 hours ago',
        content: `We just got back and... everyone's shouting. They all want us to join their group, make a choice. I... I don't know what to do. I thought we were all on the same side.`,
        likes: 295,
        comments: []
    },
    {
        id: 'generic_toad_return_to_vigilance',
        order: 10087,
        characterKey: 'generic_toad',
        timestamp: '3 hours ago',
        content: `The heroes are back! But... why is everyone yelling at them? What's a 'First Cohort'? I just want to know when dinner is!`,
        likes: 167,
        comments: []
    },
    {
        id: 'krool_iron_hoof',
        order: 10086,
        characterKey: 'king_k_rool',
        timestamp: '4 hours ago',
        content: `A whole day dedicated to their queen? Keheheh! Now THAT'S how you rule! Maybe I should start 'King K. Rool Day'. It would be mandatory! And there would be lots of saluting! And banana tributes!`,
        likes: 388,
        comments: []
    },
    {
        id: 'fawful_iron_hoof',
        order: 10085,
        characterKey: 'fawful',
        timestamp: '4 hours ago',
        content: `THE PONIES HAVE A DAY OF MANDATED FEAR-WORSHIP? I HAVE FURY! My own Fawful Day would have more chaos! And better music! It would be a symphony of doom and chortles that would make their sad little parade weep with inadequacy!`,
        likes: 699,
        comments: []
    },
    {
        id: 'toadette_iron_hoof',
        order: 10084,
        characterKey: 'captain_toadette',
        timestamp: '4 hours ago',
        content: `Parades and parties celebrating a ruler while the world burns. Pathetic. True loyalty isn't demonstrated with polished boots and marching in lines. It's proven with blood and sacrifice on the battlefield. For the Princess!`,
        likes: 413,
        comments: []
    },
    {
        id: 'skull_cap_murphy_iron_hoof',
        order: 10083,
        characterKey: 'skull_cap_murphy',
        timestamp: '5 hours ago',
        content: `Heard about some 'Iron Hoof Day' nonsense. Don't matter if it's a queen, a king, or a mayor. A boot is a boot. They just paint it a different color and tell you to salute it. Only freedom that matters is the one you take for yourself.`,
        likes: 291,
        comments: []
    },
    {
        id: 'donkey_kong_iron_hoof',
        order: 10082,
        characterKey: 'donkey_kong',
        timestamp: '5 hours ago',
        content: `Ponies have a holiday? Do they eat bananas? If not, what's the point?`,
        likes: 1450,
        comments: []
    },
    {
        id: 'kamek_manor_scrying',
        order: 10081,
        characterKey: 'kamek',
        timestamp: '6 hours ago',
        content: `Lord Bowser has accompanied the purple fool to a place of significant necromantic energy... Raventree Manor. The spirits there are old and powerful. This could prove to be an interesting, if dangerous, development. I shall observe from a distance.`,
        likes: 310,
        comments: []
    },
    {
        id: 'syrup_waluigi_move',
        order: 10080,
        characterKey: 'captain_syrup',
        timestamp: '6 hours ago',
        content: `Heard Waluigi is setting up shop in some haunted mansion. Good. Let the ghosts have him. More treasure for the rest of us.`,
        likes: 356,
        comments: []
    },
    {
        id: 'green_t_vigilance_chaos',
        order: 10079,
        characterKey: 'green_t',
        timestamp: '7 hours ago',
        content: `Listen to them all squabbling. 'First Cohort', 'Originals'. Pathetic. They're just carving up a cage and calling it a kingdom. And their 'leader' Dan just stands there, watching it happen. Weak.`,
        likes: 488,
        comments: []
    },
    {
        id: 'toad_lee_unity_vow',
        order: 10078,
        characterKey: 'toad_lee',
        timestamp: '7 hours ago',
        content: `They forget the vow we all swore. They let fear and ambition divide them. A cohort that fights itself is already defeated. This fracturing cannot be allowed to continue.`,
        likes: 315,
        comments: []
    },
    {
        id: 'waluigi_manor_move_in',
        order: 10077,
        characterKey: 'waluigi',
        timestamp: '7 hours ago',
        content: `WAH! Time to move! Got my best pal Bowser to help me with the heavy lifting. All this magnificent, well-deserved treasure needs a new home! Raventree Manor, here I come!`,
        likes: 213,
        comments: []
    },
    {
        id: 'green_t_calls_out_dan',
        order: 10074,
        characterKey: 'green_t',
        timestamp: '8 minutes ago',
        content: `To the so-called 'heroes' of the Vigilance: Your leader is broken! Dan played with a power he couldn't handle, and now he's hiding the truth from all of you! DANGER IS COMING, and he's too weak to face it! Open your eyes!`,
        likes: 451,
        comments: [
            { characterKey: 'dan', text: "..." }
        ]
    },
    {
        id: 'waluigi_manor_gloat',
        order: 10073,
        characterKey: 'waluigi',
        timestamp: 'Just Now',
        content: `WAH! My new manor is magnificent! A little dusty, maybe a few ghosts, but it has character! Perfect for storing... 'valuables'. Waluigi is moving up in the world!`,
        likes: 85,
        comments: [],
    },
    {
        id: 'toad_lee_imposes_order',
        order: 10072,
        characterKey: 'toad_lee',
        timestamp: '5 minutes ago',
        content: `Enough! The Vow was sworn. We are one cohort. We will have order. Anyone who tries to splinter this group will answer to me. And to my axe.`,
        likes: 241,
        comments: [
             { characterKey: 'bones', text: "Big words. Let's see if you can back 'em up." }
        ]
    },
    {
        id: 'generic_toad_splinter_groups',
        order: 10071,
        characterKey: 'generic_toad',
        timestamp: '15 minutes ago',
        content: `This is chaos! Dan is just... sitting there. Everyone's shouting, forming their own little groups. The 'First Cohort' this, the 'Originals' that... I thought we were all in this together! We need a real leader, not someone overwhelmed by it all.`,
        likes: 188,
        comments: [
            { characterKey: 'dan', text: "..." }
        ]
    },
    {
        id: 'detective_penny_vigilance_standoff',
        order: 187,
        characterKey: 'detective_penny',
        timestamp: 'Just Now',
        content: `Case notes: 'Mr. Wario' captured by Imperial forces aboard the 'Vigilance'. Subject Archie Miser also detained. The same airship previously involved in the 'ghostly energy' incident. Coincidence? Unlikely. This web is more tangled than I thought. The Empire's involvement complicates things, but also presents an opportunity to access their files on Wario. #CaseOfTheGreedyGhost`,
        likes: 255,
        comments: [ { characterKey: 'master_goodstyle', text: 'May justice be swift and stylish, Detective.' } ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'lario_captured',
        order: 186,
        characterKey: 'lario',
        timestamp: '5 minutes ago',
        content: `Great. Just great. First I get betrayed by that purple cheat, then I get captured by these tin-can soldiers. Now I'm stuck in some Imperial holding cell that doesn't even have a decent workbench! This is a violation of my... goblin rights, or something! I demand a lawyer! And a sandwich!`,
        likes: 198,
        comments: [ { characterKey: 'captain_syrup', text: 'Looks like your luck has finally run out, grease monkey. Enjoy the imperial hospitality.' } ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'regal_empire_standoff_statement',
        order: 185,
        characterKey: 'regal_empire_delegate',
        timestamp: '15 minutes ago',
        content: `Let it be known that the criminals Archie Miser and 'Mr. Wario' are now in the custody of the Regal Empire. The rogue airship 'Vigilance' has been secured. This decisive action reaffirms the Empire's commitment to eradicating chaos and maintaining order across the realms. Justice will be swift.`,
        likes: 890,
        comments: [ { characterKey: 'general_marcus_ironhand', text: 'A victory for order. As it should be.' } ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'broker_market_update_standoff',
        order: 184,
        characterKey: 'the_broker',
        timestamp: '30 minutes ago',
        content: `Market update: Key assets (Miser, Wario, 'Vigilance') are now off-board. Expect short-term volatility in the chaos-futures market. Bounties are temporarily suspended. Information on Imperial interrogation techniques is now trading at a premium. My inbox is open.`,
        likes: 412,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'unchained_archie_capture',
        order: 183,
        characterKey: 'free_name_sarah',
        timestamp: '45 minutes ago',
        content: `They have caged a storm. The Empire thinks capturing Archie Miser is a victory, but they have only made him a martyr. His chaos inspired many who were too afraid to act. Ideas, unlike people, cannot be imprisoned.`,
        likes: 678,
        comments: [ { characterKey: 'young_wolf_kara', text: 'Well said. This only proves the Empire is afraid of anyone who won\'t bend the knee.' } ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'janna_brightspark_iron_binding',
        order: 182,
        characterKey: 'janna_brightspark',
        timestamp: '1 hour ago',
        content: `Fascinating! The Iron Legion has developed a field-applicable 'Iron Binding' seal capable of suppressing an artifact's power output by an estimated 50%. The energy resonance is crude, but effective. I must acquire a schematic! For science, of course!`,
        likes: 310,
        comments: [ { characterKey: 'archmage_theron', text: 'You will do no such thing, Janna. That is Legion military technology and meddling with it is a violation of the Accords.' } ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'theron_archie_capture',
        order: 181,
        characterKey: 'archmage_theron',
        timestamp: '1 hour ago',
        content: `The anarchist Archie Miser is finally in Imperial custody. Good. His flagrant disregard for the laws of magic and man is a cancer. Let the Empire deal with him. The Mages' Guild will be watching to ensure true justice is served.`,
        likes: 540,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'fawful_gloats_at_siege',
        order: 180,
        characterKey: 'fawful',
        timestamp: '2 hours ago',
        content: `I HAVE CHORTLES! The mushroom fools outside my magnificent castle fling their pathetic rocks and angry words! It is like being tickled by furious, tiny babies! My walls are strong! My minions are many! My victory is a sandwich of absolute certainty!`,
        likes: 715,
        comments: [ { characterKey: 'captain_toadette', text: 'Laugh while you can, monster. Every chortle is a moment you steal from the true rulers of this kingdom. Your time is short.' } ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'mistveil_scout_report',
        order: 179,
        characterKey: 'mistveil',
        timestamp: '3 hours ago',
        content: `Scouting report: Toad Town is a fortress now. Every street corner has a Loyalist checkpoint. Civilians are being... relocated. It's grim, but it's necessary. The castle is the objective. All else is secondary. For the Princess.`,
        likes: 388,
        comments: [ { characterKey: 'dewdrop', text: 'Stay safe out there, brother.' } ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'dewdrop_medic_report',
        order: 178,
        characterKey: 'dewdrop',
        timestamp: '4 hours ago',
        content: `The field hospital is full again. This new strategy... this war of attrition... the cost is high. So many wounded. But their resolve is strong. They believe in the Captain. I just pray their faith is enough.`,
        likes: 412,
        comments: [ { characterKey: 'dan', text: 'If there is anything we can do to help, please let us know. No one should suffer alone.' } ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'krool_gloats_dk',
        order: 177,
        characterKey: 'king_k_rool',
        timestamp: '5 hours ago',
        content: `First their oafish delegate causes a global financial crisis, and now their leader is making desperate calls to his enemies? The DK Crew is falling apart at the seams! My Kremling Krew will be there to pick up the pieces... and the bananas! Keheheheh!`,
        likes: 399,
        comments: [ { characterKey: 'donkey_kong', text: 'Keep laughing, K. Rool. You\'ll see what happens when you mess with the Kongs.' } ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'cybernetic_collective_analysis',
        order: 176,
        characterKey: 'cybernetic_collectives',
        timestamp: '6 hours ago',
        content: `[ANALYSIS]: Probability of organic species self-destructing due to internal political schisms and resource disputes remains consistently high. The 'Lanky Kong Incident' has increased the probability of regional economic collapse by 4.7%. Fascinating data.`,
        likes: 666,
        comments: [],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'donkey_kong_simple_post',
        order: 175,
        characterKey: 'donkey_kong',
        timestamp: '7 hours ago',
        content: `Headache. Need bananas.`,
        likes: 1530,
        comments: [ { characterKey: 'chunky_kong', text: 'I\'ll bring you some, DK.' } ]
    },
    {
        id: 'toad_town_citizen_complaint',
        order: 174,
        characterKey: 'generic_toad',
        timestamp: '8 hours ago',
        content: `This is ridiculous! First the mayor gets whacked, now Toadette's fanatics are marching in the streets imposing a curfew! I can't even get to the shop for a decent turnip! I didn't vote for this!`,
        likes: 789,
        comments: [ { characterKey: 'chancellor_toadsworth', text: 'The Regency does not condone this occupation. We are working on a diplomatic solution.' }, { characterKey: 'skull_cap_murphy', text: 'See? Rulers are all the same. If ya want real freedom, ya need to break some heads.' } ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'skull_cap_murphy_opportunity',
        order: 173,
        characterKey: 'skull_cap_murphy',
        timestamp: '9 hours ago',
        content: `The Loyalists and the Regency are too busy squabbling over who gets to be in charge. Good. While they're distracted, the Mushroom Skulls will be expanding our turf. More chaos means more business for us.`,
        likes: 210,
        comments: [],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'koopa_grunt_post',
        order: 172,
        characterKey: 'koopa_troop',
        timestamp: '10 hours ago',
        content: `Heard the pink fanatics are laying siege to the castle. Ha! Let 'em! The green weirdo and the mushroom-heads can beat each other up. We'll just march in and take the place back when they're both exhausted. Long live King Bowser!`,
        likes: 450,
        comments: []
    },
    {
        id: 'dwarf_observes_vigilance',
        order: 171,
        characterKey: 'kingdoms_of_the_dwarves_wh',
        timestamp: '11 hours ago',
        content: `The lads from the Engineer's Guild are all in a tizzy about this 'Vigilance' airship. A flying mountain of metal, they say. Impressive, I suppose. But can it withstand a proper grudge-thrower? I doubt it. Nothing beats good old Dwarf-forged steel.`,
        likes: 620,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'kivotos_millennium_analysis',
        order: 170,
        characterKey: 'millennium_science_school',
        timestamp: '12 hours ago',
        content: `[Veritas Leak]: Scans of the 'Vigilance' airship's energy signature are fascinating. The power source is not based on any known reactor technology. It appears to be an unstable fusion of arcane and quantum mechanics. The potential for catastrophic failure is calculated at 87.4%. We must acquire it for study.`,
        likes: 730,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'warhammer_empire_engineer_scoffs',
        order: 169,
        characterKey: 'the_empire',
        timestamp: '13 hours ago',
        content: `The Imperial Engineers' Guild has reviewed the schematics of this 'Vigilance'. While its power source is unorthodox, its structural integrity is laughable. A single Hellfire Rocket Volley would tear it asunder. Such primitive designs are no threat to the Empire of Man.`,
        likes: 850,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'waluigi_makes_fun',
        order: 168,
        characterKey: 'waluigi',
        timestamp: '14 hours ago',
        content: `WAHAHAHA! The Empire captures a few fools and thinks they've won! Captain Syrup grabs the staff and it doesn't even work! And Archie gets caught! So much failure! So much incompetence! It's a beautiful symphony of failure, and I, Waluigi, am the conductor! WAH!`,
        likes: 999,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'hactivist_iron_binding',
        order: 167,
        characterKey: 'hacktivist_collectives',
        timestamp: '15 hours ago',
        content: `The Iron Legion's 'Iron Binding' is just a glorified DRM lock. A crude piece of proprietary magitek designed to restrict the flow of power. Information wants to be free. So does energy. #JailbreakTheStaff`,
        likes: 777,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'pokemon_trainer_reacts',
        order: 166,
        characterKey: 'trainer_guild',
        timestamp: '16 hours ago',
        content: `Wait, so there are other worlds with... flying ships? And magic? And no Pokémon? That sounds really weird. Can you catch the magic? Does it have a type? I have so many questions.`,
        likes: 821,
        comments: []
    },
    {
        id: 'commander_valerius_vigilance',
        order: 165,
        characterKey: 'commander_valerius',
        timestamp: '17 hours ago',
        content: `The crew of the 'Vigilance' were shaping up to be lucrative, if chaotic, clients. Their current Imperial entanglement is bad for business. Hopefully, they resolve their legal issues soon. The Gilded Gryphon Company values reliable partners.`,
        likes: 340,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'chief_thornpaw_cryptic_post',
        order: 164,
        characterKey: 'chief_thornpaw',
        timestamp: '18 hours ago',
        content: `A cage of steel holds a storm. A seal of iron holds a star. The world tips on the edge of a choice made in a city of stone. The spirits are watching.`,
        likes: 560,
        comments: [],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'embercap_returns',
        order: 163,
        characterKey: 'embercap',
        timestamp: '1 day ago',
        content: `The reports of my death were greatly exaggerated. I have seen the enemy's heart. There is no room for mercy. No more half-measures. Captain Toadette's path is the only path to justice. We will have our victory, or we will have our vengeance.`,
        likes: 690,
        comments: [ { characterKey: 'captain_toadette', text: 'Welcome back, Commander. We have work to do.' } ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'archie_jumped_on_ship',
        order: 162,
        characterKey: 'archie',
        timestamp: '1 day ago',
        content: `So, I was just minding my own business, admiring the structural integrity of a ventilation shaft, when I got jumped by a group of Iron Hand... or was it Iron Legion?... goons. Same difference, right? Stuffed shirts with big hammers. 

They were going on about "stories of the third eye" which, okay, flattering. But the weird part? One of them kept muttering about wanting "Toad Soup." Seriously. On a spaceship. Weirdos.`,
        likes: 184,
        comments: [
            { characterKey: 'toad_lee', text: "Toad Soup? We will not allow any harm to come to our people. Stay vigilant, brothers." },
            { characterKey: 'general_marcus_ironhand', text: "The Iron LEGION does not employ 'goons.' Our soldiers are disciplined warriors. If this incident occurred, it was not by my command or the action of my men. Perhaps you are confusing us with common street thugs." },
            { characterKey: 'boss_knuckles', text: "You mean the Iron FISTS, you three-eyed freak. And that wasn't a story, it was a down payment. Next time, we're collecting more than just stories. The bounty on your head is still active." },
            { characterKey: 'dan', text: "Archie, are you okay? That sounds terrifying." }
        ]
    },
    {
        id: 'waluigi_toad_focus_update',
        order: 161,
        characterKey: 'waluigi',
        timestamp: '1 day ago',
        content: `WAH! HEY, THREE-EYES (@Archie)! An update on your little mushroom projects!

That hero-kid, **Dan**, held a 'council'. So important! He's their little leader now, making them feel all hopeful. The big one, **Toad Lee**, has been teaching them how to hold an axe without chopping their own feet off. Progress!

The quiet one, **Ryan**, is making sparks with his fingers. He calls it 'magic practice'. Cute. The jumpy one, **Eager**, ran around and drew a map of the cargo bay. Probably on a napkin.

The one with the gun, **Roger**, has organized all their junk into neat little piles. He calls it a 'barter system'. At least he's not losing their only wrench. And the ugly one, **Bones**, is teaching them card games. A useful skill! They might learn how to cheat, which is even better!

They're getting organized. This could be useful for my magnificent plans! WAH-HA-HA!`,
        likes: 123,
        comments: [
            { characterKey: 'dan', text: "We're not projects! We're building a community and a new life for ourselves!" }
        ]
    },
    {
        id: 'standoff_at_capital_news',
        order: 160,
        characterKey: 'wah_media_collective',
        timestamp: '1 day ago',
        content: `**STANDOFF IN THE SKIES! Regal Empire Forces Board Rogue Airship 'Vigilance' Over Capital! High-Profile Arrests Made!**

A tense standoff concluded today as the rogue airship 'Vigilance' was boarded by Regal Empire forces, identified as elite Crown Intelligence agents. The operation, which took place in the skies directly over the Imperial Capital, resulted in the capture of the notorious smuggler 'Mr. Wario' and the surprising surrender of the anarchist Archie Miser. 

Eyewitness reports from the ship are chaotic, detailing a fierce firefight, the brief appearance of the pirate Captain Syrup, and a struggle over the airship's powerful, artifact-based power source. The 'Vigilance' has since landed at the capital's military spaceport and is currently under heavy guard. The fate of its renegade crew remains uncertain.`,
        image: 'newspaper_airship.png',
        image_alt: "The Vigilance airship surrounded by smaller Imperial vessels.",
        likes: 1854,
        comments: [
            { characterKey: 'generic_toad', text: "Finally! Maybe now we can have some peace and quiet!" },
            { characterKey: 'the_broker', text: "Several high-value assets just went off the board. This will have... interesting effects on the market." }
        ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'steelstorm_standoff_post',
        order: 159,
        characterKey: 'colonel_vera_steelstorm',
        timestamp: '1 day ago',
        content: "A successful joint operation between Crown Intelligence and the Iron Legion has neutralized a significant threat over the capital. Key assets were secured, and several high-value targets, including the anarchist Archie Miser and the smuggler 'Mr. Wario', are in custody. Order will be maintained.",
        likes: 562,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: "A victory for the Empire. Let chaos reign no more." }
        ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'waluigi_iron_binding_post',
        order: 158,
        characterKey: 'waluigi',
        timestamp: '1 day ago',
        content: "WAH! These Iron Legion goons! No style! They slap some rusty magic on my ship's power source and call it 'tactics'? It's a cheap parlor trick! It's like putting a bumper sticker on a masterpiece! An insult to my genius!",
        likes: 210,
        comments: [
            { characterKey: 'lario', text: "Hey! I could have fixed it better! And for a reasonable price!" }
        ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'syrup_standoff_post',
        order: 157,
        characterKey: 'captain_syrup',
        timestamp: '1 day ago',
        content: "Got my hands on the famous staff for a moment. All that fuss for a glorified glowstick that doesn't even work! And then those tin soldiers slap their ugly binding on it. Amateurs. The real prize was the chaos anyway.",
        likes: 315,
        comments: [
            { characterKey: 'first_mate_jones', text: "We'll find a better prize, Captain. We always do." }
        ],
        rumorId: 'standoff_at_the_capital'
    },
    {
        id: 'toadette_post_3',
        order: 150,
        characterKey: 'captain_toadette',
        timestamp: '2 days ago',
        content: `The Onyx Hand's shadow assassins have done what the Regency was too weak to do. The mayor was corrupt, a rot at the heart of our kingdom. With him gone, we have seized this moment. Toad Town is now under Loyalist control. This is not an occupation; it is a liberation. From here, we will build our base and begin the true war. For the Princess!`,
        likes: 412,
        comments: [
            { characterKey: 'mistveil', text: "For the Princess! Whatever it takes." },
            { characterKey: 'chancellor_toadsworth', text: "Captain! You are taking advantage of a murder to impose martial law! This is madness!" }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'embercap_post_1',
        order: 149,
        characterKey: 'embercap',
        timestamp: '2 days ago',
        content: `I had my doubts. I questioned the path. But I have seen the depths of the betrayal we face. The enemy wears a friendly smile and offers you a potion before trying to steal your king. There is no room for half-measures. Captain Toadette is right. The path to justice is hard, but we will walk it. We will be the ones to end this.`,
        likes: 355,
        comments: [
            { characterKey: 'dewdrop', text: "A hard path, brother, but a necessary one. We will tend to the wounds, you lead the charge." },
            { characterKey: 'chief_thornpaw', text: "I witnessed your death and your return, young soldier. The path you now walk is heavy with the scent of both steel and sorrow. Tread carefully." }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'toadtown_citizen_post_1',
        order: 148,
        characterKey: 'generic_toad',
        timestamp: '2 days ago',
        content: `The mayor is dead... murdered in his own home! Now there are Loyalist soldiers everywhere, talking about 'relocation'. What's happening to our town? I don't feel safe anymore. Who is in charge?`,
        likes: 620,
        comments: [
            { characterKey: 'dan', text: "Stay strong. Communities have to look after each other when leaders fail." }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'kamek_post_toadtown',
        order: 147,
        characterKey: 'kamek',
        timestamp: '2 days ago',
        content: `The mushrooms are devouring each other. Fanatics versus bureaucrats, assassins in the shadows... it's a delightful spectacle. Let them bleed each other white. It will only make Lord Bowser's glorious return all the easier. Patience is a virtue.`,
        likes: 290,
        comments: [
            { characterKey: 'bowser', text: "Excellent. Let the appetizers fight amongst themselves." }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'janna_post_spellbook',
        order: 146,
        characterKey: 'janna_brightspark',
        timestamp: '2 days ago',
        content: `Fascinating! A spellbook containing a variant of a soul-binding ritual, linked to the Onyx Hand, was recovered from the Toad Town incident. And the caster was a MAGE! The Conservators will be furious, but the data from this political application of advanced puppetry is invaluable! What a time to be alive!`,
        likes: 188,
        comments: [
            { characterKey: 'archmage_theron', text: "Janna, this is not 'data'. This is a grave breach of the Accords and a profound threat to stability. The Aegis Magi have been notified." }
        ],
        rumorId: 'chaos_in_toad_town'
    },
    {
        id: 'cranky_post_2',
        order: 145,
        characterKey: 'cranky_kong',
        timestamp: '3 days ago',
        content: `Good grief! Now every Tom, Dick, and three-eyed weirdo has an opinion on Kong family matters! Back in my day, we didn't have 'post our problems on the WAH-whatever', we threw barrels at them until they went away! A much better system!`,
        likes: 420,
        comments: [],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'dk_post_2',
        order: 144,
        characterKey: 'donkey_kong',
        timestamp: '3 days ago',
        content: `Family business is family business. And right now, business is giving me a migraine. Outsiders should remember that we solve our own problems. The Kong way.`,
        likes: 550,
        comments: [
            { characterKey: 'chunky_kong', text: "I'm trying, DK." },
            { characterKey: 'king_k_rool', text: "Sounds like there's weakness in the ranks. Good to know." }
        ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'diddy_post_2',
        order: 143,
        characterKey: 'diddy_kong',
        timestamp: '3 days ago',
        content: `And now the three-eyed freak thinks this is a joke too? Stay out of Kong family business, you walking talking powder keg.`,
        likes: 315,
        comments: [],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'archie_post_ride',
        order: 142,
        characterKey: 'archie',
        timestamp: '4 days ago',
        content: `Hello everyone, quite the bumpy ride wasn't it? How is everyone holding up?`,
        likes: 218,
        comments: [
            { characterKey: 'lario', text: "Holding up?! I'm holding a wrench and a grudge! That purple cheat left me for dead!" },
            { characterKey: 'dan', text: "A little shaken, but we're free. That's what matters. We're all still here." },
            { characterKey: 'bowser', text: "Bumpy? GWAHAHA! That's how I like it! A little chaos keeps everyone on their toes!" },
            { characterKey: 'waluigi', text: "Bumpy? That was a magnificent performance! A true work of art! You're welcome, everyone! WAH!" },
            { characterKey: 'fawful', text: "YOUR BUMPY RIDE IS A MERE PUDDLE OF DISCOMFORT NEXT TO THE OCEAN OF MY FURY! I HAVE BUMPINESS!" }
        ]
    },
    {
        id: 'cranky_post_1',
        order: 140,
        characterKey: 'cranky_kong',
        timestamp: '5 days ago',
        content: `Back in my day, we didn't have 'diplomatic incidents'. We had coconut guns. Solved problems a lot faster. This whole summit was a waste of good bananas. And Lanky... don't get me started on that good-for-nothing slacker!`,
        likes: 350,
        comments: [
            { characterKey: 'donkey_kong', text: "He's still family, Cranky." },
            { characterKey: 'diddy_kong', text: "Cranky's right, DK. Family or not, he's a liability." }
        ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'leoncoeur_post_1',
        order: 139,
        characterKey: 'king_louen_leoncoeur',
        timestamp: '5 days ago',
        content: `I must confess, the recent 'summit' was a disheartening display. To see diplomacy devolve into such buffoonery is a sad day for all civilized realms. Where is the honor? Where is the chivalry? It seems in short supply in these lands.`,
        likes: 410,
        comments: [
            { characterKey: 'captain_toadette', text: "Honor is found on the battlefield, not in a talking shop with apes and monsters." },
            { characterKey: 'ambassador_callista', text: "A most unfortunate incident, your Majesty. I assure you it is not representative of all diplomatic efforts in this region." }
        ],
        rumorId: 'lankys_disgrace_at_summit'
    },
    {
        id: 'kamek_post_1',
        order: 138,
        characterKey: 'kamek',
        timestamp: '6 days ago',
        content: `The pieces are moving on the board. While the lesser factions squabble over castles and politics, the true game is being played in the shadows. The King's will shall be done. A storm is gathering...`,
        likes: 275,
        comments: [
            { characterKey: 'bowser', text: "Excellent work, Kamek. Keep me updated. And make sure the storm has lots of lightning!" },
            { characterKey: 'the_broker', text: "Storms are good for business. They create opportunities." }
        ]
    },
     {
        id: 'toadette_post_2',
        order: 137,
        characterKey: 'captain_toadette',
        timestamp: '6 days ago',
        content: `The Regency falters! Fawful's madness defiles our sacred castle! Only the Peach Loyalists have the strength and the will to restore justice! Do not be swayed by the weak-willed words of politicians! Take up arms! For the Princess!`,
        likes: 388,
        comments: [
            { characterKey: 'mistveil', text: "For the Princess!" },
            { characterKey: 'chancellor_toadsworth', text: "Captain Toadette, your zealotry is creating more division, not less! We must be united!" }
        ]
    },
    {
        id: 'waluigi_post_2',
        order: 136,
        characterKey: 'waluigi',
        timestamp: '1 week ago',
        content: `WAH! Some people call it 'chaos'. I call it 'art'! The world is my canvas, and my paintbrush is a well-thrown Bob-omb! All you boring people with your 'plans' and 'order'... you just don't appreciate true genius!`,
        likes: 999,
        comments: [
            { characterKey: 'giggling_pete', text: "A masterpiece of a metaphor! The Jester applauds your stylish entropy!" }
        ]
    },
    {
        id: 'steelstorm_post_2',
        order: 135,
        characterKey: 'colonel_vera_steelstorm',
        timestamp: '1 week ago',
        content: "Victory is not achieved through tradition; it is achieved through efficiency. While the Old Guard debates protocol, the War-Forged act. Results are the only metric that matters on the battlefield. Adapt or be broken.",
        likes: 388,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: "Discipline IS efficiency, Colonel. Do not mistake reckless action for progress. The Hammer Code has guided us for a thousand years for a reason." }
        ]
    },
    {
        id: 'dan_post_freedom',
        order: 134,
        characterKey: 'dan',
        timestamp: '1 week ago',
        content: `Every day of freedom feels like a gift. Learning the ways of the Rakasha is difficult, but Chief Thornpaw is a patient teacher. I will become strong enough to protect my friends and ensure no toad has to suffer like we did.`,
        likes: 621,
        comments: [
            { characterKey: 'toad_lee', text: "And you will have my axe to guard your back. Always." }
        ]
    },
    {
        id: 'bowser_post_recruiting',
        order: 133,
        characterKey: 'bowser',
        timestamp: '1 week ago',
        content: `The Koopa Troop is scattered, but not broken! Soon, I will reunite my armies under one glorious banner! We will crush the tin-can soldiers of the Legion and the mushroom-headed fools of the Regency! The world will tremble before the might of King Bowser once more! GWAHAHAHA!`,
        likes: 815,
        comments: [
            { characterKey: 'kamek', text: "An inspiring proclamation, your Viciousness! The remnants await your command." },
            { characterKey: 'generic_toad', text: "Oh no, not again..." }
        ]
    },
    {
        id: 'guild_post_gryphon_1',
        order: 132,
        characterKey: 'commander_valerius',
        timestamp: '1 week ago',
        content: `**OPEN CONTRACT:** The Gilded Gryphon Mercenary Company is now accepting applications for caravan guard duty on the Great Imperial Road. High pay, high risk. Must provide your own standard-issue sidearm and have a clean service record. Amateurs need not apply. Payment upon completion.`,
        likes: 412,
        comments: [
            { characterKey: 'donkey_kong', text: "Good pay? Does that mean bananas? DK needs to know." },
            { characterKey: 'lario', text: "High pay? I'll bring my own tools. And a bigger bag for my cut. WAH-ha-ha... wait." }
        ],
        groupId: 'gilded_gryphon'
    },
    {
        id: 'guild_post_wayfinders_1',
        order: 131,
        characterKey: 'high_cartographer_elara',
        timestamp: '1 week ago',
        content: `A notice from the High Cartographer: An expedition is being planned to chart the shifting coastlines of the Triple Moon World. Experienced navigators and warriors are encouraged to apply at the Horizon Spire. High risk, high reward.`,
        likes: 350,
        comments: [
            { characterKey: 'captain_zipwire', text: "Shifting coastlines? Sounds dangerous! And profitable! Where do I sign up?"}
        ],
        groupId: 'wayfinders_guild'
    },
    {
        id: 'guild_post_aegis_1',
        order: 125,
        characterKey: 'battle_mage_kovar',
        timestamp: '1 week ago',
        content: `A reminder to all sanctioned practitioners: The Autumnwood Accords are not suggestions. All research into reality-bending or chronomantic magic is strictly forbidden without a permit from the Conclave. The Aegis Magi will enforce this with extreme prejudice. Do not test us.`,
        likes: 630,
        comments: [
            { characterKey: 'janna_brightspark', text: "Fear of progress is what holds this Guild back. How can we learn if we do not experiment?" },
            { characterKey: 'archmage_theron', text: "A necessary and prudent warning, Battle-Mage. Order must be maintained." }
        ],
        groupId: 'aegis_magi'
    },
    {
        id: 'guild_post_azure_1',
        order: 110,
        characterKey: 'azure_prime',
        timestamp: '1 week ago',
        content: `**BOUNTY POSTED:** A charter has been issued for the capture of the pirate 'Cutlass' Kael, last seen operating near the Ludor Isles. Wanted for piracy, smuggling, and tax evasion. Dead or alive. Contact your local chapterhouse for details.`,
        likes: 780,
        comments: [
            { characterKey: 'captain_syrup', text: "Kael? He's small fry. But his ship has some nice cannons..." },
            { characterKey: 'the_broker', text: "His last known location can be provided... for a price." }
        ],
        groupId: 'azure_blade_bounty_hunters'
    },
    {
        id: 'summit_pre_1',
        order: 21,
        characterKey: 'captain_toad',
        timestamp: '2 weeks ago',
        content: `Final preparations for the Democratic Summit are complete. This is a crucial moment for the Regency. Hoping for productive talks and new alliances. The security arrangements have been... stressful. Let's hope everything goes smoothly.`,
        likes: 310,
        comments: [
            { characterKey: 'chancellor_toadsworth', text: "Your efforts are appreciated, Captain. The fate of the Kingdom may well rest on these talks." },
            { characterKey: 'queen_bean', text: "Looking forward to it, Captain! The Beanbean Kingdom stands with you." }
        ]
    },
    {
        id: 'summit_pre_2',
        order: 22,
        characterKey: 'lanky_kong',
        timestamp: '2 weeks ago',
        content: `Headed to some big important meeting! They said I have to be on my best behavior. I'll try! Look at my new tie! It's a banana! 🍌 Heheheh.`,
        likes: 58,
        comments: [
            { characterKey: 'diddy_kong', text: "Lanky, just... please don't do anything weird." },
            { characterKey: 'donkey_kong', text: "He'll be fine. What's the worst that could happen?" }
        ]
    },
    {
        id: 'steelstorm_post_1',
        order: 10,
        characterKey: 'colonel_vera_steelstorm',
        timestamp: '1 month ago',
        content: "Imperial Law is not a suggestion. The individuals known as Green T and Lario are wanted for trial. The crew of the Vigilance has 24 standard hours to comply with Imperial Edict 77B-4. Order will be maintained.",
        likes: 152,
        comments: [
            { characterKey: 'general_marcus_ironhand', text: "A lawful and necessary proclamation, Colonel. The Old Guard stands with you. There will be no deviation from the Hammer Code." },
            { characterKey: 'lario', text: "24 hours? I can strip an airship for parts in 6! You guys are slow. Also, do you pay for compliance? Asking for a friend." },
            { characterKey: 'ambassador_callista', text: "Colonel, perhaps a more... diplomatic approach would be prudent. This could escalate into an unfortunate international incident."}
        ],
        rumorId: 'iron_legion_ruse'
    },
    {
        id: 'waluigi_post_1',
        order: 8,
        characterKey: 'waluigi',
        timestamp: '1 month ago',
        content: "Some call it 'friendly fire'. I call it 'stylish crowd control'. WAH! The little frozen toad will thaw out eventually. Probably. He should be grateful he was part of my magnificent performance!",
        likes: 42,
        comments: [
            { characterKey: 'lario', text: "You left me to die, you purple cheat! And you froze one of the little guys! You're a menace!" },
            { characterKey: 'giggling_pete', text: "Magnificent! Freezing the small one was an unexpected punchline! The Jester applauds your commitment to beautiful, pointless chaos!" },
        ],
        rumorId: 'waluigi_friendly_fire'
    },
    {
        id: 'lario_post_1',
        order: 7,
        characterKey: 'lario',
        timestamp: '1 month ago',
        content: "This mysterious new client, 'Mr. Wario', pays well, but his demands are ridiculous! 'Needs more garlic!' 'Make it shinier!' Who does this guy think he is? At least his coin is good. Best not to ask questions.",
        likes: 88,
        comments: [
            { characterKey: 'captain_syrup', text: "You still owe me for that ship, you greasy little wrench-turner. I'll take payment in the form of your workshop." },
            { characterKey: 'detective_penny', text: "Interesting. A new, wealthy client? I'll be keeping an eye on your workshop, Lario. For 'business' purposes, of course." },
        ],
        rumorId: 'wario_escape'
    },
    {
        id: 'toadette_crusade_post',
        order: 36,
        characterKey: 'captain_toadette',
        timestamp: '2 months ago',
        content: `The reports from the so-called 'Gala' only strengthen my resolve. The Regency hobnobs with apes while monsters play with time itself. We are the ONLY ones fighting for true justice! For the Princess! Join the Loyalists today and fight for what's right!`,
        likes: 241,
        comments: [
            { characterKey: 'generic_toad', text: "But the pay is better with the Regency Guard..." },
            { characterKey: 'mistveil', text: "For the Princess!" }
        ]
    },
    {
        id: 'lario_mr_wario_post',
        order: 37,
        characterKey: 'lario',
        timestamp: '2 months ago',
        content: "'Mr. Wario' now wants me to build a 'ghost-powered vacuum cleaner'. I swear, this guy gets weirder every day. Still, his coin is good. As long as he keeps paying, Lario keeps building! WAH-HA-HA... wait, that's not my laugh.",
        likes: 73,
        comments: [
            { characterKey: 'waluigi', text: "WAH! An imposter! There is only ONE magnificent laugh, and it is MINE!" },
        ]
    },
    {
        id: 'fawful_fury_post',
        order: 38,
        characterKey: 'fawful',
        timestamp: '2 months ago',
        content: "I HAVE FURY! The fools think they have seen my full genius? My gala was but an appetizer! The main course of my victory is yet to be served! It will have the chortles! And a side of doom!",
        likes: 712,
        comments: []
    },
    {
        id: 'penny_wario_clue',
        order: 39,
        characterKey: 'detective_penny',
        timestamp: '2 months ago',
        content: "My investigation into the mysterious 'Mr. Wario' continues. Found this strange, ectoplasmic residue at one of the old Wario Land warehouses. It smells faintly of garlic. Does anyone recognize this substance? #CaseOfTheGreedyGhost",
        image: 'clue.png',
        image_alt: "A blurry, close-up photo of a puddle of greenish, glowing goo on a warehouse floor.",
        likes: 198,
        comments: [
            { characterKey: 'master_goodstyle', text: "Disgusting. Whatever it is, it has no style." },
            { characterKey: 'fawful', text: "It is the goo of a fool! Not the goo of a genius, like my own magnificent goo!" }
        ]
    },
    ...WAHBOOK_INTEL_POSTS
];
