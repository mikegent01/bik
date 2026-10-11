#!/usr/bin/env python3
import json, os, re, sys

ROOT = "/home/user/bik"
DATA = os.path.join(ROOT, "Reputation-Matrix2", "data")

EVENT_ID = "feyward_the_soul_ring_and_the_twenty_one_day_cut"
COMMENTARY_ID = "feyward_the_soul_ring_and_the_twenty_one_day_cut_commentary"

# 10 exact sections matching the user's transcript
sections_data = [
    {
        "icon": "🌿",
        "name": "A Scene of Wild Overgrowth",
        "subtitle": "the daydream of an axe, the unlocked cuffs, and the story got mostly right",
        "overview": (
            "Toad Lee wakes up full of expression, still tied up in the room.\n\n"
            "A scene of wild overgrowth unfolds before you. Where once was a rather spacious living quarters, "
            "now the space is filled with twisting and coiling roots and vines. Soft green moss and clover grows in "
            "through the seams of the floor, its invasion bringing subtle bits of green to an otherwise very brown room.\n\n"
            "Of the numerous windows that line the walls of this large room only a few of them let light filter in, the rest "
            "having overgrown with vines.\n\n"
            "The room features a large wardrobe, a fine writing deck and a four post bed that's taken on a life of its own. "
            "The rest of the space appears to be worn and water damaged but structurally sound.\n\n"
            "He comes to his senses. He snaps out of it as if he was having a daydream throughout the majority of everything.\n\n"
            "Toad Lee grunts up, walks around. Waluigi sits there, handcuffs still on but unlocked.\n\n"
            "\"Where am I, Waluigi? I was in a plain field with bright green grass, clear blue skies, there was a hill. "
            "I saw what seems to be my dad. We were play fighting. I was fighting with the axe I have, he was fighting with his? "
            "I don't know, I have some snippets of my father... ehh don't know.\"\n\n"
            "\"You want to go back?\" Waluigi says.\n\n"
            "\"No, this is important. Remind me what happened.\"\n\n"
            "\"He offered us to see Aurelia. He sold us out.\"\n\n"
            "\"That can't be. Was he backed into a corner?\"\n\n"
            "\"Well, we could have fought them, but I guess he was in a corner, they were chasing us.\" Waluigi walks to the chair. "
            "\"There was a bunch of guards chasing us. Hjumpik wanted to see Aurelia. He gave us up because he had no choice, "
            "or because of selfishness.\"\n\n"
            "\"Maybe, I'm not sure.\"\n\n"
            "The guards say he got the story mostly right.\n\n"
            "\"Sorry my sirs, didn't mean to,\" Toad Lee says. \"While I wait for rescue, might as well look around.\""
        ),
        "waluigi_note": (
            "WAH. He woke up dreaming of play fighting his father on a grassy hill with axes, and within twenty seconds "
            "he had to process unlocked handcuffs, an overgrown four-post bed, and the fact that our dwarf traded us for "
            "an audience with a plant. I gave him the honest version: Hjumpik either had no choice or did it out of selfishness, "
            "and the guards agreed with my arithmetic."
        )
    },
    {
        "icon": "📜",
        "name": "The Books in Elven and the Colour Division",
        "subtitle": "the writing desk, the wrong denizens, and the leverage plan",
        "overview": (
            "The few books sitting on or slipped into this writing desk's shelves are mostly journals, logbooks, and references. "
            "They are all written in elven.\n\n"
            "Toad Lee asks for paper and a pen from Waluigi. Waluigi hands him his writing kit.\n\n"
            "Toad Lee asks the guards if they can speak elvish.\n\n"
            "\"What? We don't know that.\"\n\n"
            "\"What do you mean you don't know this? Weren't you guys denizens of the Feywild?\"\n\n"
            "\"Huh? We're the Colour Division of the Iron Legion.\"\n\n"
            "\"Wa?\" Toad Lee says.\n\n"
            "\"We were sent here to capture Hjumpik. We needed you guys as leverage, and our plan is working. "
            "Once Aurelia beats up Hjumpik, we grab him and drag him out.\"\n\n"
            "\"You're very confident that will happen, aren't you?\"\n\n"
            "\"Yes we are, as we are of Mr. Miser.\""
        ),
        "waluigi_note": (
            "WAH. He asked the guards if they speak elvish because we are in a fairy manor, and they looked at him like he had "
            "insulted their mothers. Special forces. The Colour Division. They don't speak elvish, they don't care about the flora, "
            "and they brought handcuffs because a dwarf owes hours on a contract."
        )
    },
    {
        "icon": "🗃️",
        "name": "A Better Archivist Than Your Friend",
        "subtitle": "Quartermaster Cornburary enters, the tennis racket threat, and shadow writers",
        "overview": (
            "Quartermaster Cornburary enters the room. He smiles: \"Yes, yes, our plans are well.\"\n\n"
            "\"Who are you?\" Toad Lee asks.\n\n"
            "\"Cornburary.\"\n\n"
            "\"Cornburary of the Legion... you don't have a weapon on you. Are you a combatant here like your guards?\"\n\n"
            "\"Is that a threat? Go ahead, hit me, see what happens.\"\n\n"
            "\"No, it's not a threat, I'm just asking.\"\n\n"
            "\"No, no, I don't need to get rough. I need to get Hjumpik.\"\n\n"
            "\"I'm just asking you a question, man. Would you please answer my question?\"\n\n"
            "\"I am a journalist.\"\n\n"
            "\"A journalist?\"\n\n"
            "\"Well, not really. A bookkeeper, an archivist even. A better one than your friend over there.\"\n\n"
            "Waluigi shouts: \"WAH! I'll take you out!\"\n\n"
            "\"You sure are confident of yourself, you sure you can take him on?\" Toad Lee asks.\n\n"
            "Cornburary smirks: \"I don't need to. I have a bunch of shadow writers that will do it for me.\"\n\n"
            "Waluigi gets his tennis racket. Toad Lee says: \"No, no!\" He swipes at his racket; Waluigi backs up.\n\n"
            "\"Friendly fire! You're threatening my livelihood!\"\n\n"
            "\"Don't attack yet. I'm banged up, we're in a tricky situation, Waluigi. We can't afford making another rash decision. "
            "We don't know what's going on entirely. Have a little restraint for me please, if not for yourself. "
            "Who will archive... uhhh, me when I'm gone or something?\" Toad Lee says.\n\n"
            "\"Well, I will outlast you. WAH, fine.\"\n\n"
            "\"I'll repay you somehow,\" Toad Lee says. \"I assume they sent you in the Feywild to hunt down Archie as well?\"\n\n"
            "\"Archie is secondary,\" they say.\n\n"
            "\"Hjumpik's dead, or—\"\n\n"
            "\"No, no.\""
        ),
        "waluigi_note": (
            "WAH. A bureaucrat walked through the door with no weapon, looked at my writing kit, and told me he had shadow writers "
            "who could do my job better. I pulled the Phase Spider gut racket out. Toad Lee swiped at it and called it friendly fire! "
            "You do not threaten an archivist's livelihood in his own filing."
        )
    },
    {
        "icon": "💍",
        "name": "You Look Ravishing Tonight",
        "subtitle": "the ash of the satyr, the spiky ring, and the pants that fell down",
        "overview": (
            "Shift to Hjumpik.\n\n"
            "Aurelia touches the satyr, burns him, turns him to ash.\n\n"
            "\"It's a sham,\" Hjumpik says.\n\n"
            "\"Haven't you forgotten something important? This is my manor.\"\n\n"
            "Hjumpik says: \"I'm Hjumpik, so ho ho ho, I'm not afraid, and this isn't my manor.\"\n\n"
            "\"With one touch, you will be gone too.\" She walks closer over the dust.\n\n"
            "He takes out the glowing ring. He points it towards her.\n\n"
            "\"Huh, is that wedding ring? You're proposing to me?\"\n\n"
            "\"Do something,\" Hjumpik whispers to the ring.\n\n"
            "Hjumpik gets on one knee: \"You're right, I am proposing to you. Put on this ring, ignore everything I said before. "
            "You look ravishing tonight.\"\n\n"
            "Lady Aurelia smiles, getting out a ring with a spike in it.\n\n"
            "\"In fey culture males put on the ring. We will be bound once you put it in. It will slowly suck your lifeforce,\" she says.\n\n"
            "\"Oh really, wow, that's terrifying. But will this save my friends? Will you stand down?\"\n\n"
            "\"Yes, of course. I'll release this manor from my shackles and focus them on you.\"\n\n"
            "\"Wow, it's almost like we are married.\"\n\n"
            "Hjumpik shows his ring finger up. He jams the soul ring onto her finger!\n\n"
            "She says: \"Yaoui Dhayemmn Dhwayelf!\"\n\n"
            "\"You... you idiot!\" She smiles, \"I order you to take it off!\"\n\n"
            "Hjumpik uncontrollably takes her ring up. She falls, her power weakening. She grabs Hjumpik's pants—they fall!\n\n"
            "Guards run in: \"WHAT THE? WITH THE LADY? WE CAUGHT YOU WITH YOUR PANTS DOWN!\"\n\n"
            "\"Let's go back to your friends, the toad and purple one. This will be in the report.\"\n\n"
            "\"I need to check on the lady with something,\" Hjumpik slashes vines to the bathroom door and drags the body inside with him.\n\n"
            "They shout: \"NOW YOU'RE GOING TO THE BATHROOM WITH HER? GET BACK HERE!\""
        ),
        "waluigi_note": (
            "WAH. Read the transcript! He got on one knee, told a plant demon she looked ravishing tonight, jammed a soul ring "
            "onto her hand, and lost his trousers to her dying grip. The Legion caught him pants-down and promised it would be in the "
            "official military report. I could not make this up if I had ten shadow writers."
        )
    },
    {
        "icon": "🧪",
        "name": "The Men in Silver and the Reactive Emotion",
        "subtitle": "the elven book on feelings, the CCC syringe, and the slip out the window",
        "overview": (
            "Cut to Toad Lee.\n\n"
            "Toad Lee remembers something about the Feywild: the environment of the Feywild is reactive to a person's emotions.\n\n"
            "\"Mutsdoppms apnd yoput hopw mutsdoppms capn apffetct det fetywapdd\" the book is said. Toad Lee looks over it.\n\n"
            "\"Yes, yes, my men in silver come in.\" Cordon Combat Chirurgeon comes in.\n\n"
            "\"We are the CCC. We have to come eliminate the Feywild. With this solution we can simply inject the plants killing them.\"\n\n"
            "Toad Lee mutters: \"Great, another egocentric character... Dang, I do have a question. Why do you want to destroy the Feywild?\"\n\n"
            "\"It is unpure.\"\n\n"
            "\"Define unpure.\"\n\n"
            "\"It does not follow the natural way of life.\"\n\n"
            "\"If you're trying to control it, it will be hard. Why do you want to?\"\n\n"
            "\"Because we can.\"\n\n"
            "\"Wow, you're power-hungry.\"\n\n"
            "Quartermaster Cornburary says: \"We're not greedy.\"\n\n"
            "\"Waluigi, check outside for any probes.\"\n\n"
            "Waluigi smiles, says \"Okay,\" and heads to the window.\n\n"
            "Toad Lee says: \"This place has land and leaders. I don't think people, natives, will appreciate you guys taking it over. "
            "Foreigners conquering planes.\"\n\n"
            "\"Such is the way of life. No one likes being conquered, but that is what we do.\"\n\n"
            "\"Really, that's the only reason?\"\n\n"
            "Waluigi slips out.\n\n"
            "\"Well, not the only reason. Because the material plane is cur—\"\n\n"
            "Quartermaster Cornburary says: \"Shut up, you! Too much information!\" They start arguing.\n\n"
            "Toad Lee cuts in: \"No, no, no, please continue! You're from the Legion, right? And that's an Iron Legion uniform that you're wearing. "
            "What's the logo of the Legion, your heraldry?\"\n\n"
            "\"You trying to get information from me? You won't, not even from that birdbrain over there.\"\n\n"
            "\"Fine, but I'll find out later on. That big emblem is telling me otherwise. We have a friend in yellow that has been feeding "
            "us quadrants. You will meet more of us in the material plane.\""
        ),
        "waluigi_note": (
            "WAH. The CCC brought a syringe of weedkiller to prune a dimension because it is 'unpure' and 'because we can.' "
            "Toad Lee stalled them with heraldry questions while I slipped out the window to check for probes. Bureaucracy cannot handle "
            "a conversation where someone asks 'define unpure.'"
        )
    },
    {
        "icon": "🔥",
        "name": "Thunder, Hail, and Fire Everywhere",
        "subtitle": "the emotional climate surge, the burnt journals, and jumping out the window",
        "overview": (
            "Toad Lee is getting a little angry. Then thunder, then rain, hail pouring—FIRE EVERYWHERE!\n\n"
            "\"What the... woah, woah!\" as he feels heat.\n\n"
            "\"Huh, so it actually worked, holy heck!\" Toad Lee says.\n\n"
            "Toad Lee takes the books. Some of them are burnt; he takes some that are not burnt while leaving others that are not entirely burnt.\n\n"
            "Toad Lee slowly reaches towards the window. It is open, and Waluigi is gone.\n\n"
            "\"What the dang,\" he whispers.\n\n"
            "He escapes as well, not without saying: \"Listen man, the Feywild is not the type of place you want to set up shop "
            "outside of your imperialistic tendencies. Leave the Feywild alone! It has people living inside of it, they won't be happy "
            "when they find denizens invading on their own. Be warned!\"\n\n"
            "With that, Toad Lee jumps out the window."
        ),
        "waluigi_note": (
            "WAH. He read one page of an elven book about mushroom feelings and summoned a localized apocalypse out of his own irritation. "
            "Thunder, hail, and wildfire! He grabbed the books, gave an anti-imperialist speech to a burning room, and threw himself "
            "out a window. Spectacular form."
        )
    },
    {
        "icon": "🕳️",
        "name": "The Ceilings and the Waiter Guy",
        "subtitle": "the princess carry, the worm in the eye, and Brad's briefing on P.S.",
        "overview": (
            "Cut to Hjumpik in the past, before the fire and craziness.\n\n"
            "In the bathroom with Aurelia, he looks up at the ceiling. Same hole.\n\n"
            "Hjumpik tosses Aurelia. She falls back into his arms. *Princess carrying,* Hjumpik thinks.\n\n"
            "He tosses her again; she falls flat.\n\n"
            "He uses his warhammer again; she lands on the second floor.\n\n"
            "Hjumpik examines the lady. A worm comes out of her soulless eyes!\n\n"
            "\"Ugg, we got to get you to safety. Let's get out of here. I hope Waluigi knows what to do.\"\n\n"
            "He opens a door. It hits something. He quickly goes back, tries another door, and peeks out. "
            "Brad stands there. He doesn't recognize him at first, but then does.\n\n"
            "\"Are you the waiter guy?\"\n\n"
            "\"You're still alive? Thought you died back there.\"\n\n"
            "\"I don't die that easily. Just want to get out.\"\n\n"
            "\"Get out? Where? There's nowhere to go.\"\n\n"
            "\"Why you sound so down?\"\n\n"
            "\"This place is too chaotic. We have to stabilize it somehow.\"\n\n"
            "\"We should stabilize it actually, right?\"\n\n"
            "\"Listen, there's someone here... well, a bit of people. They're invaders. They call themselves the Iron Legion. "
            "I'm not sure what they want, but they've been encroaching, and it seems with the power vacuum they might want to "
            "kidnap and take the lady for themselves.\"\n\n"
            "\"Yeah, I know.\"\n\n"
            "\"Their commander, P.S., I think her name is, I don't know what it stands for. I think she's working with other legionnaires "
            "from the outside world. She is leading the Sunflower Division. I'm not sure what other division is, but they're cooperating "
            "and they seem to want to kill or at least take out the two people of this manor. You don't want to take them out, do you?\"\n\n"
            "\"No... that's not my goal here. I just want to help, get out of there, do what I need to do.\"\n\n"
            "\"Good, good. Just this way.\"\n\n"
            "Fire spouts from the ground!\n\n"
            "\"Aaah, what's going on?!\"\n\n"
            "He opens a door: \"What's in that door?\"\n\n"
            "\"The bathroom!\"\n\n"
            "\"You have water on you, something that can dampen these flames at all?\"\n\n"
            "Hjumpik runs through the fire grabbing the other guy. He uses his dwarven healing skills to heal himself: \"Whatever, I'm out.\""
        ),
        "waluigi_note": (
            "WAH. The waiter survived! Brad, who was pouring tea while the house was being swallowed by roots, is now running "
            "counter-intelligence on the Sunflower Division. And Hjumpik tossed a countess into the ceiling twice, thought 'princess carry,' "
            "and then watched a worm crawl out of her eye."
        )
    },
    {
        "icon": "❄️",
        "name": "The Mage of Ice",
        "subtitle": "the secret kept, the tapped shoulder, and putting out the flames",
        "overview": (
            "Cut to Toad Lee.\n\n"
            "Toad Lee says: \"What I learned about this place works... Wait, Waluigi, where are you going? WALUIGI!\"\n\n"
            "He walks more.\n\n"
            "\"WALUIGI!\"\n\n"
            "He feels a tap on his shoulder.\n\n"
            "\"Hmm, what the... Waluigi, don't scare me like that! Why did you run off?\"\n\n"
            "\"Well, because those people, I'm not sure who they are.\"\n\n"
            "\"People? Who exactly, from where?\"\n\n"
            "\"That.\"\n\n"
            "\"What about the probe the CCC and bald guy mentioned? You see any of them?\"\n\n"
            "\"Hmm, I did, I waved it off, it flew away, who knows where it went.\"\n\n"
            "\"I hear you. This fire... this fire, I'm not sure, but I think I'm the cause of it, believe it or not. "
            "How did I do it? I know the answer, I don't trust you.\"\n\n"
            "\"Don't trust ME? How can I archive the answer to my million of fans?\"\n\n"
            "\"Because knowing you, you will unleash chaos for the sake of it or for your interest. And I don't know, "
            "I may not be closest with these Feywild people, but I think they're still people. So... sorry, can't trust you with this secret I know. "
            "You understand?\"\n\n"
            "\"Archie would've invited me to his fireball party. Oh well.\"\n\n"
            "\"I'll be honest, we have been in this manor for quite some time. I want to regroup with Hjumpik, and I have questions for him. "
            "So I guess we regroup, have sessions and downtime, and we decide from there what we do. But I will say we are sitting ducks out here, "
            "let's just go back inside and take cover or something.\"\n\n"
            "\"Ah, fire,\" Toad Lee says. \"How do we put out fire?\"\n\n"
            "\"They don't call me writer or ice.\"\n\n"
            "\"Hmm, they call you that? First time I heard it.\"\n\n"
            "\"No worries, mage of ice, work your magic,\" Toad Lee says.\n\n"
            "Waluigi steps into the room; all fire is gone.\n\n"
            "\"Oh, you really did work your magic!\" Toad Lee says.\n\n"
            "\"Huh, I did... yeah, I did!\" Waluigi says."
        ),
        "waluigi_note": (
            "WAH. Toad Lee told me to my face that he won't trust me with the weather secret because I would 'unleash chaos for the sake of it.' "
            "Then he asked me how to put out the fire. I told him I am the Mage of Ice. I walked into the room, the flames went out, "
            "and I took full credit."
        )
    },
    {
        "icon": "🤝",
        "name": "We Won, But Not the War",
        "subtitle": "the reunion, the exorcised demon, and the rotting servant common room",
        "overview": (
            "\"Hello,\" Hjumpik says.\n\n"
            "Toad Lee says: \"Glad to see you back, we're reunited. Did you sell us out to the Legion for Aurelia?\"\n\n"
            "Waluigi stays quiet.\n\n"
            "\"The Legion was trying to capture my—wait, wasn't Waluigi and Toad Lee about to get captured?\" Hjumpik says.\n\n"
            "\"We're reunited,\" Toad Lee says. \"Didn't even have to get in the fire, took damage for nothing. "
            "You will be a new man after 8 hours and such. So, is that Aurelia over there?\"\n\n"
            "\"Took the demon out of her. She tried to fight me, I got the demon out... yeah.\"\n\n"
            "\"Oh, you removed the demon from her, I hear you,\" Toad Lee says. \"We have Aurelia, she doesn't look too good... everything okay with her?\"\n\n"
            "\"Yeah, I knocked—I didn't, I had to exorcise her.\"\n\n"
            "\"I hear you.... yeah... hmm... this guy's going to...\"\n\n"
            "\"Sorry, what?\"\n\n"
            "Brad says: \"Let's get a move on, you can talk while we move.\"\n\n"
            "They all follow him.\n\n"
            "Not much is left of this room. The floorboards have rotted away in places, revealing a steep drop down to the library "
            "gangways a floor below. For the less fortunate, there is a drop all the way down to the first floor. "
            "This must have been a servant's common room at some point, but it has been rendered uninhabitable.\n\n"
            "He takes a book out of the bookshelf. It slides up; they walk in silence."
        ),
        "waluigi_note": (
            "WAH. 'I had to exorcise her.' That is the official dwarf account of hitting a noblewoman with a warhammer until a worm "
            "crawled out of her eye. And then Brad walked us across rotted floorboards with a two-story drop to the library. "
            "The hospitality here never stops."
        )
    },
    {
        "icon": "🃏",
        "name": "Twenty-One Days: The End of the World",
        "subtitle": "the goblin card room, the wagers of clothes, and the countdown",
        "overview": (
            "They end up here.\n\n"
            "This small room looks like a library exploded into it. The floor is cluttered with as many discarded books as there "
            "are huge mushrooms growing out of them.\n\n"
            "The table in the center of the room is piled high with a messy stack of cards and is surrounded by a pack of surly goblins "
            "playing a rowdy game. Just observing for a moment tells you these games can get quite heated, and the wagers seem to be "
            "anything from cleaning supplies to their own clothing.\n\n"
            "The same place Hjumpik played cards.\n\n"
            "Waluigi says: \"Are you sure this is a good idea?\"\n\n"
            "\"Yeah, this is kinda where she went haywire,\" Hjumpik says. Hjumpik thinks he has his own intentions.\n\n"
            "Toad Lee sees a look of determination in Brad's eyes—they're baggy, tired, roughed up, but set.\n\n"
            "\"If we leave her here, what are we going to do? What's the plan?\"\n\n"
            "\"Not sure,\" Brad says. \"You guys wanted to leave, right? Maybe find whoever wanted to help you leave and uhh just go... "
            "I guess. I'll handle it from here.\"\n\n"
            "\"Only you? What are you going to do, a push of wind will push you down,\" Hjumpik says.\n\n"
            "\"I'll... work something out.\"\n\n"
            "\"Hmmm, I still want to help the manor, it's a bit late,\" Hjumpik says.\n\n"
            "\"The three beasts of the manor still live... the Bramblyfly, the Revel... it was a complete failure, wasn't it?\" Brad says.\n\n"
            "\"Actually the archivist died at least. How many other guys, are they winning or losing?\" Hjumpik says.\n\n"
            "\"A lot of the plants went away when she got knocked out, but there is still overgrowth and hot spots. "
            "This is the Overgrown Manor after all.\"\n\n"
            "\"The Revel, the satyrs, did they run away? What's going on with them?\" Hjumpik asks.\n\n"
            "\"Not sure, probably pushing forward with evacuating the whole manor.\"\n\n"
            "\"The Revel, what about him, the Revelmaster?\"\n\n"
            "\"I don't know, I have no answers for your questions, I've just been doing my best.\"\n\n"
            "\"Cheer up brother, we're winning. That's not what a fighter would act like,\" Hjumpik says.\n\n"
            "\"We won, but not the war,\" Brad says.\n\n"
            "\"Alright, do something, don't run around like headless chicken.\"\n\n"
            "\"I want to get rid of the satyrs and the rebels and try my best or fail trying. I uhh eavesdropped earlier, you know that? "
            "They said they're cutting the Feywild in a few days right, or something? 21 days is that it... the end of the world.\"\n\n"
            "\"Oh... I see,\" Hjumpik says."
        ),
        "waluigi_note": (
            "WAH. A room where goblins gamble their shirts over dirty cards, surrounded by mushrooms and ruined books. "
            "And a waiter with tired eyes looked us in the face and said the quiet part: twenty-one days until they sever the plane. "
            "The clock is running."
        )
    }
]

lead_description = (
    "Waluigi files this one as the session where Toad Lee woke up from a daydream of his father with an axe to find himself "
    "tied in an overgrown bedroom, where Quartermaster Cornburary claimed to have shadow writers, and where Hjumpik dropped to one knee, "
    "proposed to Lady Aurelia, and promptly lost his pants. In between, Toad Lee proved that Feywild weather reacts to personal fury—unleashing "
    "thunder, hail, and wildfire upon the Iron Legion—while Brad the waiter guided the party past a rotted two-story drop to the goblin card room, "
    "where dirty cleaning supplies were wagered and the twenty-one day destruction of the plane was spoken out loud."
)

notable_features = [
    "\"Where am I, Waluigi? I was in a plain field with bright green grass... playing fighting with my dad with an axe\" - Toad Lee's waking daydream",
    "\"Weren't you guys denizens of the Feywild?\" \"Huh? We're the Colour Division of the Iron Legion\"",
    "Quartermaster Cornburary: \"I am a journalist... bookkeeper, an archivist even... better than your friend over there\"",
    "\"Friendly fire! You're threatening my livelihood!\" - Waluigi's racket swipe",
    "\"Put on this ring, ignore everything I said before. You look ravishing tonight\" - Hjumpik's proposal",
    "\"In fey culture males put on the ring. We will be bound once you put it in. It will slowly suck your lifeforce\"",
    "\"Yaoui Dhayemmn Dhwayelf\" - the binding incantation as the soul ring takes hold",
    "\"WHAT THE? WITH THE LADY? WE CAUGHT YOU WITH YOUR PANTS DOWN!\"",
    "Mutsdoppms apnd yoput hopw mutsdoppms capn apffetct det fetywapdd - elven manual on emotional climate and fungal reactivity",
    "The Cordon Combat Chirurgeon: \"We have to come eliminate the Feywild... because it is unpure... because we can\"",
    "Emotional climate wildfire: thunder, hail, rain, and fire erupting from Toad Lee's anger",
    "\"Are you the waiter guy?\" - Hjumpik reuniting with Brad",
    "Commander P.S. and the Sunflower Division disclosed by Brad",
    "\"They don't call me writer or ice... mage of ice work your magic\"",
    "\"Took the demon out of her... I had to exorcise her\"",
    "The ruined servant common room with the two-story drop to the library",
    "The goblin card room where cleaning supplies and clothing are wagered",
    "\"21 days is that it... the end of the world\" - the planar severance deadline revealed"
]

aftermath = (
    "**Standing.** Lady Aurelia is unconscious and bound by the soul ring, stripped of her demonic overgrowth authority. "
    "The Overgrown Manor remains infested with residual brambles, but the central floral power has broken. "
    "The Revel and satyrs are in disorganized retreat or evacuation.\n\n"
    "**Custody.** Toad Lee and Waluigi escaped the Colour Division holding room via the emotional wildfire. "
    "The Legion's leverage plan collapsed, though Quartermaster Cornburary and the Cordon Combat Chirurgeon remain active in the sector. "
    "Lady Aurelia is currently sheltered in the secret goblin card room under Brad's custody.\n\n"
    "**The 21-Day Clock.** Brad confirmed that foreign forces intend to sever or prune the Feywild within twenty-one days. "
    "This establishes an irreversible operational deadline for all factions within the manor.\n\n"
    "**Open threads.** The true identity and orders of Commander P.S. (Sunflower Division) remain uninvestigated. "
    "The surviving manor beasts (the Bramblyfly and the Revel remnants) are still active on the grounds. "
    "Toad Lee's elven research volumes on emotional climate remain in party possession."
)

waluigi_assessment = (
    "**1. The proposal was madness, but the mathematics held.** Hjumpik dropped to one knee, called a plant monster ravishing, "
    "and shoved a soul ring on her finger. It cost him his dignity and his trousers, but it broke her hold on the building. "
    "I have filed many reckless actions in this campaign; this is the only one that ended in a marriage proposal and a military report.\n\n"
    "**2. Toad Lee is a walking planar detonator.** The Feywild reacts to emotional climate. Toad Lee got annoyed with a bureaucrat, "
    "and the house answered with thunder, hail, and wildfire. He gave an anti-imperialist speech and leapt out a window with a stack "
    "of elven books. If he learns to weaponize that temper deliberately, nobody in this house is safe.\n\n"
    "**3. Cornburary's shadow writers are a personal insult.** A quartermaster with no sword told me he had an army of scribes "
    "who could out-write me. I pulled my Phase Spider racket. Toad Lee called it friendly fire. I am noting for the record that my "
    "livelihood was threatened and I showed immense professional restraint.\n\n"
    "**4. The CCC represents pure institutional rot.** 'Why destroy the Feywild? Because it is unpure. Because we can.' "
    "They brought syringes to purge a dimension. That is not science or defense; it is bureaucratic arrogance with a silver badge.\n\n"
    "**5. Brad the waiter is the only competent intelligence operative in the house.** While everyone else was swinging axes "
    "or losing their pants, the waiter identified Commander P.S., tracked the Sunflower Division, located a secret sliding bookshelf, "
    "and eavesdropped on the twenty-one day planar severance plan. Give that man a tip.\n\n"
    "**6. I am the Mage of Ice.** Toad Lee asked how to extinguish a room on fire. I told him they call me writer or ice. "
    "I walked in, the fire went out, and I claimed every bit of the credit. History belongs to those who show up when the flames stop.\n\n"
    "**7. The twenty-one day clock changes everything.** The goblins are gambling their laundry away while the sky is being prepared "
    "for a guillotine. Twenty-one days until the Feywild is severed. We came here looking for an escape; now we are racing a planetary deadline."
)

# Update events.json
with open(os.path.join(DATA, "events.json"), "r", encoding="utf-8") as f:
    events = json.load(f)

for e in events:
    if e.get("id") == EVENT_ID:
        e["summary"] = (
            "Toad Lee awakens from a daydream of his father to find himself tied in overgrown quarters beside an uncuffed Waluigi. "
            "After learning their guards are the Iron Legion's Colour Division, they confront Quartermaster Cornburary before Toad Lee's "
            "emotional surge triggers a torrential Feywild wildfire. Meanwhile, Hjumpik proposes to Lady Aurelia with a soul ring to break her power, "
            "losing his trousers in the scuffle before dragging her to safety. Guided by Brad the waiter, the party navigates a rotted common room "
            "to the goblin card room, where Brad reveals the Feywild will be severed in twenty-one days."
        )
        e["description"] = lead_description
        e["sections"] = sections_data
        e["outcome"] = "Lady Aurelia bound by soul ring; emotional wildfire triggered and extinguished; party reaches goblin card room; 21-day planar severance deadline revealed."
        e["keyBattles"] = [
            {
                "name": "Sanctuary Threshold Wildfire Skirmish",
                "description": "Emotional climate surge triggering Feywild wildfire brambles at the sanctuary threshold.",
                "outcome": "Party pushed through the burning thornway into the servants' quarters."
            },
            {
                "name": "Goblin Card Room Standoff",
                "description": "Confrontation in the hidden card room behind the servant common room scullery shelf.",
                "outcome": "Card room secured; 21-day timeline disclosed by the card dealers."
            }
        ]
        e["notableFeatures"] = notable_features
        e["aftermath"] = aftermath
        e["waluigiAssessment"] = waluigi_assessment

with open(os.path.join(DATA, "events.json"), "w", encoding="utf-8") as f:
    json.dump(events, f, indent=2, ensure_ascii=False)

print("events.json updated.")
