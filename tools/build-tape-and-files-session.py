#!/usr/bin/env python3
"""File the VHS-tape session: the event, the line-by-line analysis, the commentary.

Three articles from one night of transcript, because the night contains three
different KINDS of document and mashing them together would serve none of them:

  1. `the_tape_and_the_wario_files` — the event. What happened in the room over
     two days: a man watching a tape on loop, a notebook read aloud, a glass of
     water, a gold coin, and a theory.
  2. `the_brothers_argument_line_by_line` — an article analysis. The tape's
     argument, read one line at a time. This is the first PRIMARY source for a
     fight the archive has only ever had secondhand, from an impostor who was
     not in the room.
  3. `the_tape_and_the_wario_files_commentary` — Waluigi's Cut. The whole thing
     retold in his voice, loudly.

Run: python3 tools/build-tape-and-files-session.py [--check]
"""
import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"

EVENT_ID = "the_tape_and_the_wario_files"
ANALYSIS_ID = "the_brothers_argument_line_by_line"
COMMENTARY_ID = "the_tape_and_the_wario_files_commentary"

IMG = "assets/images/events/the-tape-and-the-files"

# The filing date. The transcript runs 11-13 September 2026 at the table; in
# world it continues straight on from the Star Hill clinic delivery at the end
# of `the_garden_above_the_fire`, two days later.
FILED = "20 Harvestide, 1035 BF - two days after the Star Hill clinic delivery"
TIME_CODE = "TC:1035-08-20/MAT"


# --------------------------------------------------------------------------
# 1. THE EVENT
# --------------------------------------------------------------------------

TRANSCRIPT = (
    "*Transcribed from the tape exactly as spoken, including the stage business "
    "visible on the recording. Stammers, repetitions and the accent Mario's "
    "speech puts into the written form are preserved. Nothing in this block is "
    "interpretation - the interpretation is filed separately.*\n\n"
    "---\n\n"
    "**LUIGI:** You thought that Koopa worked alone...\n\n"
    "**MARIO:** Luigi What do you mean by that? I've a fought too much And you "
    "stand against me! Think of the days That were all lead astray Your my "
    "brother That's not, Something that'll go away.\n\n"
    "**LUIGI:** you've done enough off the cuff\n\n"
    "**MARIO:** Is-a that clear?\n\n"
    "**LUIGI:** Call my bluff ill rebuff Standing my ground here all of the days "
    "That I was cast away What's a brother if he's Only in the way!\n\n"
    "*[Both talking over each other]*\n\n"
    "**MARIO:** This-a can't-a be The heroic ending You've dreamed of so please "
    "Lets-a go! end-a the show! Luigi just see through All of your spitefilled "
    "visions!\n\n"
    "**LUIGI:** I've gone too far To give up now! For all that I cherish you "
    "must-a perish You've stolen All that I've dreamed of and just for-a "
    "Clueless damsel!\n\n"
    "**MARIO:** That's not true And you-a know it! I won't lay you askew! I will "
    "face this with you!\n\n"
    "**LUIGI:** Left in the dimming light Only set to fight The one who has been "
    "Holding me back!\n\n"
    "**LUIGI:** I'm overzealous, I'm-a not-a jealous! This is the outcome I've "
    "reached, therefrom! I've given, My life to. A zero, And that's true.\n\n"
    "**MARIO:** What must I do? Give my life up to you? Fatal flaws retribute All "
    "of my raw mistakes Our bond is torn A regal pain I endure\n\n"
    "**LUIGI:** Who are you to tell me YOUR TRUTH\n\n"
    "**MARIO:** Fading away the brothership that soared far!\n\n"
    "*[no longer talking over each other]*\n\n"
    "**MARIO:** Listen for a moment! Just hear me! End-a all the torment All the "
    "foes We've come across We stood together Showed them who's the boss\n\n"
    "**LUIGI:** Finally awakened TO MOCKERY My name has been lost and Unmarked To "
    "be the one You'll step upon I'll give myself the boost TO GO BEYOND!\n\n"
    "**MARIO:** You don't truly mean that! Luigi just take a step back! Gain your "
    "cool And lose the fool That's making you fall From the tree!\n\n"
    "*[Both talking over each other]*\n\n"
    "**LUIGI:** It's too much too ask you? After I'll surpass you! Buried lies in "
    "Hate filled skies Has brought you and I Onto our KNEES!\n\n"
    "**MARIO:** My bro, we're family! I know that, you see! I don't want you to "
    "Be without me!\n\n"
    "*[both start intense shouting]*\n\n"
    "**MARIO:** Behind of this Masquerade I know you still love me! Koopa made you "
    "go insane I'll help relieve the strain! Displease!\n\n"
    "**LUIGI:** Was it worth the fees? Gave your heart a squeeze! You've shunned my "
    "displease\n\n"
    "*[only silhouettes of both of them; a shadow of Peach watches from beyond a "
    "window]*\n\n"
    "**LUIGI:** \"Luigi and Mario,\" \"What a major duo!\"\n\n"
    "**MARIO:** You know that's true Just me and you,\n\n"
    "**LUIGI:** If it only it weren't a dream\n\n"
    "**MARIO:** damn it luigi!\n\n"
    "**LUIGI:** I, wouldn't be the fiend!\n\n"
    "*[fade back in; Mario sweating, Luigi standing firm, shadow gone]*\n\n"
    "**MARIO:** Memories shared The duo not impaired Showing that I cared BECAUSE "
    "YOUR MY BROTHER\n\n"
    "**LUIGI:** Sparked inside me Was the pain you seldom And now you plea? you are "
    "NO LONGER MY BROTHER!\n\n"
    "**MARIO:** This is trickery! You would never be Fooled by that Koopa fiend\n\n"
    "**LUIGI:** YOU DAMN FOOL Let-a this tale end\n\n"
    "**MARIO:** this just can't-\n\n"
    "**LUIGI:** Burned beyond the bend Show me that glee Oh, across from me "
    "galaxies Saved by you Shadowed me What's to see? My own shine Dimmed far "
    "blind\n\n"
    "**MARIO:** Facing the climax Wishing to backtrack It's just a setback A minor "
    "blowback! Stuck in a false dream Wishing to redeem\n\n"
    "**LUIGI:** Mario its-a you Wishing the climax Facing a masked rat \"It's just a "
    "setback\" \"A minor blowback\" ending your regime Far-a since redeemed\n\n"
    "**MARIO:** Step every per diem Hear my pleas! Galaxies, saved by you, And-a me "
    "Can't you see? your own shine\n\n"
    "**LUIGI:** So why not and Crush your dreams!\n\n"
    "**MARIO:** Luigi, It's-a we!\n\n"
    "**MARIO:** The chance to surpass\n\n"
    "**LUIGI:** The chance to surpass\n\n"
    "**MARIO:** Are-\n\n"
    "**LUIGI:** Are-\n\n"
    "**BOTH:** Are we-a still superstars?\n\n"
    "**BOTH:** Even in the face of whats been torn asunder\n\n"
    "**LUIGI:** I've-a gone and lost the faith\n\n"
    "**MARIO:** Am I gonna lose the faith\n\n"
    "**MARIO:** Inside my brother?\n\n"
    "**LUIGI:** Inside my brother,\n\n"
    "**LUIGI:** So!\n\n"
    "**MARIO:** No!\n\n"
    "**LUIGI:** WHY WON'T YOU DIE!\n\n"
    "**LUIGI:** I've had enough Of this kid's scuff No more weak bluffs FACE your "
    "beloved Useless praying to the sky set in stone that YOU WILL DIE\n\n"
    "**MARIO:** I still got hope in you Something Could change within you This-a "
    "mess is growing dire\n\n"
    "**LUIGI:** Raising the heat! I refuse to beaten! I will give my last breath\n\n"
    "**MARIO:** Rising demand Escalating your plan Oh, dear bro forgive me!\n\n"
    "**MARIO:** I just couldn't change your\n\n"
    "**LUIGI:** IF IT RESULTS IN YOUR\n\n"
    "**LUIGI:** DEATH\n\n"
    "**MARIO:** FATE\n\n"
    "*[Mario is shown with a Cape Feather; a sound is heard; the feed cuts out]*"
)

EVENT = {
    "id": EVENT_ID,
    "name": "The Tape and the Wario Files",
    "title": "The Tape and the Wario Files: Two Days in a Dark Room, a Notebook Read Aloud, and the Perspective of Greed",
    "date": FILED,
    "timeCode": TIME_CODE,
    "era": "The Search for Mario / Post-Compound Fallout / The Garden Above the Fire",
    "location": "Waluigi's room and the adjoining kitchen, WarioWare company housing",
    "type": "Downtime / Evidence Review / Character Session",
    "status": "Filed",
    "summary": (
        "Two days after Luigi was carried into Dr. Toad's Star Hill clinic, Waluigi "
        "did not leave his room. He sat in front of a VHS tape of the brothers' "
        "hallway argument and played it on loop - six times by the count in this "
        "filing, more by his own - with the curtains drawn and the sound low. Wario "
        "came in without knocking, ostensibly about a company meeting in the morning, "
        "and stayed for two days instead.\n\n"
        "What that visit produced, in order: a notebook read aloud that turned out to "
        "contain poetry rather than scribbles; a glass of water and some garlic "
        "clippings offered as research; a search of the room that turned up "
        "never-sent letters and newspaper clippings with one name circled; and a "
        "single gold coin taped under a sticky note, drawn on the Star Festival fund, "
        "left on Waluigi's bed the year he won nothing.\n\n"
        "The coin pulled the Mario Kart Massacre back up, and with it Wario's account "
        "of the phone calls he made to get out of it - the recordings the media later "
        "called the Wario Files. Then Wario, who had been told he learned nothing from "
        "the tapes, said what he had actually learned, and reframed the courier's note. "
        "'The garden above the fire.' 'The star is not lost.' Read from the perspective "
        "of greed rather than heroism, the note stops describing a rescue and starts "
        "describing a hiding place. The star is not lost because it was taken. It is "
        "lost because somebody kept it."
    ),
    "description": (
        "A downtime filing with no combat in it, filed at full length because the arc "
        "turns here. The previous session ended with Luigi alive, Mario absent, and a "
        "note nobody could read: 'The star is not lost. Find the garden above the "
        "fire.' This session does not find Mario. It changes what the sentence means, "
        "which is worth more.\n\n"
        "It also puts a primary source in the archive for the first time. The brothers' "
        "hallway argument has existed in these files only as the recalled testimony of "
        "a blue-painted impostor who was not in the room and had every reason to shade "
        "it. There is now a tape. The line-by-line reading of that tape is filed "
        "separately as an article analysis, because it deserves the room."
    ),
    "sections": [
        {
            "name": "I. Six Rewinds",
            "icon": "\U0001f4fc",
            "subtitle": "a man, a chair, and the same ninety seconds",
            "overview": (
                "The room had been dark for two days. Curtains drawn tight enough that "
                "nobody outside could tell whether the light was on. Coffee cups stacked "
                "on the nightstand in a column that had stopped being about coffee. The "
                "television on, the sound low, the tape running.\n\n"
                "[Waluigi](https://mikegent01.github.io/bik/index.html#/article/waluigi) "
                "sat in the chair with his knees pulled up and his arms around them, cap "
                "tilted sideways, eyes dry and open. The tape had played three times. "
                "Maybe four. He had lost count, which is the detail that matters: this is "
                "an archivist, and archivists count things. He had stopped counting.\n\n"
                "The screen cut to black. He stared at the dead screen for a full minute. "
                "Then he reached over and hit rewind, and "
                "[Luigi](https://mikegent01.github.io/bik/index.html#/article/luigi)'s "
                "voice filled the room again like a ghost with a grudge.\n\n"
                "*\"You thought that Koopa worked alone...\"*\n\n"
                "That is the opening line of the tape, and it is also the line Luigi threw "
                "at Waluigi on the lava bridge. The archive has had that sentence in it "
                "for two filings. This is the first time anyone has heard who said it "
                "first.\n\n"
                "The tape itself is ninety seconds of corridor. A camera mounted high in "
                "the corner, the kind installed to watch a door rather than a "
                "conversation, so the two men in the frame are small and the ceiling is "
                "enormous. There is no establishing shot and no ending. It begins with "
                "both brothers already mid-sentence and it stops while one of them is "
                "still talking. Somebody chose both of those edges, and nothing in the "
                "footage explains who.\n\n"
                "By the fourth pass Waluigi had stopped watching the brothers at all. He "
                "was watching the parts of the frame nobody was supposed to look at - the "
                "reflection in the glass at the end of the hall, the timecode ticking in "
                "the corner, the half-second where the image tears and reassembles. That "
                "is not grief. That is an archivist's reflex surviving inside a man who "
                "has otherwise stopped functioning, and it is the reason this filing "
                "exists at all.\n\n"
                "He rewound it a fifth time. The cups did not move. Outside, somewhere "
                "below the window, the company yard ran a shift change and nobody in the "
                "room noticed."
            ),
            "waluigi_note": (
                "*I am not going to pretend to be objective about this section.* I was in "
                "the chair. I know what the room smelled like. Stale coffee and regret, "
                "and I am filing that phrase because it is accurate and because if I do "
                "not write it down somebody else will write something kinder and the "
                "record will be wrong.\n\n"
                "Six rewinds. Wario says six. I would have said four. **He was counting "
                "and I was not, and that is the entire difference between us this week.**"
            ),
        },
        {
            "name": "II. The Door Opens Without Knocking",
            "icon": "\U0001f6aa",
            "subtitle": "\"you alright, its pretty late\"",
            "overview": (
                "[Wario](https://mikegent01.github.io/bik/index.html#/article/wario) does "
                "not knock. He came in and said there was a company meeting in the "
                "morning, which is the kind of thing a person says when they have come "
                "for another reason and want a door out of the conversation.\n\n"
                "*\"Go away.\"*\n\n"
                "*\"I said I'm fine.\"*\n\n"
                "He did not go away. He picked up the notebook off the desk, read the "
                "title, and started flipping. Waluigi came out of the chair fast enough "
                "to nearly tip it - and then stopped mid-lunge, hand out, because Wario "
                "had paused. Flipped back two pages. Forward again. The expression on him "
                "had gone from amusement to something quieter.\n\n"
                "*\"...The hell is this?\"*\n\n"
                "He read a line of it out loud. *\"The stars don't shine without the dark. "
                "And I don't shine without-\"* and then he stopped and asked *without "
                "what*, and got told to give it back, and did not.\n\n"
                "Then he tossed it onto a pile of similar books in the corner and asked if "
                "it was a diary, which is the single most Wario way to handle another "
                "man's poetry.\n\n"
                "The door had not been locked. That is worth recording, because Waluigi "
                "locks doors, and for two days he had not. "
                "[Wario](https://mikegent01.github.io/bik/index.html#/article/wario) came "
                "in the way he comes into every room he intends to own - shoulder first, "
                "talking before the hinge had finished swinging, a clipboard in one hand "
                "that he never once looked at. The company meeting was at nine. The "
                "company meeting was the excuse and both of them knew it inside four "
                "seconds.\n\n"
                "What he did next is the part that matters. He did not open the curtains. "
                "He did not turn on the overhead light, or turn off the tape, or say any "
                "of the six sentences a person is supposed to say to somebody sitting in "
                "the dark. He crossed the room, looked at the screen for a while without "
                "comment, and then picked up the nearest object on the desk, which "
                "happened to be a notebook, and started reading it out loud in the flat "
                "voice of a man reading a delivery manifest.\n\n"
                "It was not a manifest. Three lines in, the flatness came off his voice on "
                "its own, and he slowed down, and he did not seem to notice that he had."
            ),
            "waluigi_note": (
                "It is NOT a diary. It is a **working notebook**. There is a difference "
                "and the difference is that a diary is for feelings and a notebook is for "
                "*evidence*, and the fact that some of the evidence rhymes is nobody's "
                "business.\n\n"
                "He said he would not share it. I am choosing, for reasons I decline to "
                "examine, to believe him."
            ),
        },
        {
            "name": "III. Water and Garlic",
            "icon": "\U0001f4a7",
            "subtitle": "the worst research in the archive, offered sincerely",
            "overview": (
                "The intervention, such as it was, was not a speech. It was: *you gotta "
                "talk to someone eventually*, and *you've been locked in here for two "
                "days*, and - the part that actually landed - *even I think that's messed "
                "up, and I lock myself in rooms too*.\n\n"
                "Then he yelled at an empty hallway to clear the room, discovered "
                "[Mona](https://mikegent01.github.io/bik/index.html#/article/mona) had "
                "already left, and scratched the back of his head.\n\n"
                "*\"Luigi's gonna be okay.\"* Not a joke. Not a provocation. Stated like "
                "a fact, by a man who does not state comforting things.\n\n"
                "In the kitchen he put the kettle on and produced garlic clippings, "
                "explaining that he had been doing his own research and that garlic is "
                "supposed to be good for stress. Also that it keeps vampires away, and "
                "that if he was going to help with this he might as well keep the creepy "
                "stuff at bay.\n\n"
                "Waluigi drank the water. The notebook went on the counter between them "
                "like a truce flag, with one condition attached: *don't read any more of "
                "it.*\n\n"
                "The kitchen is four steps from the bed and it is where this session "
                "actually turns. Wario filled a glass from the tap, put it down hard "
                "enough to be deniable as kindness, and then went through the cupboard "
                "and came back with garlic clippings - the dried outer skins nobody keeps "
                "- and set those down too, and announced that they were for research. "
                "Neither man defined the research. Neither man had to.\n\n"
                "This is the whole grammar of the visit. Wario does not have the "
                "vocabulary for the thing he came to do, so he substitutes objects for it: "
                "a glass, a handful of skins, later a coin. Each one is delivered with an "
                "insult attached as packaging, and the insult is the receipt that lets "
                "both of them pretend the delivery was a transaction.\n\n"
                "Waluigi drank the whole glass without stopping, which told the room how "
                "long it had been since he had drunk anything. Then he said thank you, "
                "and Wario said *\"don't,\"* and that was the closest either of them got "
                "to naming it."
            ),
            "waluigi_note": (
                "For the record the garlic research is **worthless**. Garlic does nothing "
                "for stress. It does nothing for vampires either, and I say that as "
                "somebody who has been inside "
                "[Raventree Manor](https://mikegent01.github.io/bik/index.html#/article/raventree_manor) "
                "and watched what actually works.\n\n"
                "He looked it up though. That is the part I cannot get around. **He went "
                "and looked something up, badly, on purpose, for me.**"
            ),
        },
        {
            "name": "IV. The Room, Searched",
            "icon": "\U0001f50d",
            "subtitle": "clippings, letters, and one name circled",
            "overview": (
                "Wario came back into the room later and went over it properly, the way "
                "he goes over a vault.\n\n"
                "What was on the walls: newspaper clippings, old tournament results from "
                "the Mushroom Kingdom, each one circled where Waluigi's name appeared. "
                "What was on the desk: a half-eaten plate of spaghetti and a stack of "
                "handwritten letters, crumpled, none of them sent.\n\n"
                "He unfolded one. *\"I know you probably don't care about any of this but "
                "I had to say something before I lost my mind.\"*\n\n"
                "He put it back exactly where he found it. That is filed deliberately - "
                "*exactly where he found it* - because it is out of character and because "
                "it is the second time in two days he handled something of Waluigi's more "
                "carefully than he handles gold.\n\n"
                "Then he backed toward the door, got caught, turned around, and said "
                "*\"Your handwriting's terrible,\"* and dropped the letter like it had "
                "burned him.\n\n"
                "The search was not subtle and was not meant to be. Wario went through the "
                "room the way he goes through a vault: drawers out and stacked on the "
                "floor, the wardrobe emptied onto the bed, the loose board by the radiator "
                "found in under a minute by a man who has spent a career finding loose "
                "boards. Waluigi did not stop him. He stayed in the chair with the tape "
                "running and let it happen, which is its own kind of statement.\n\n"
                "The inventory, as filed: eleven letters, none of them sent, none of them "
                "addressed to anyone in the room. A stack of newspaper clippings going "
                "back years, folded to the same column each time, with one name circled in "
                "pencil hard enough to emboss the page behind it. A tournament bracket with "
                "every round filled in except the last. And, at the bottom of the box, "
                "under all of it, a thing Wario looked at for a long moment and then put "
                "back exactly as he had found it, face down, and did not mention again.\n\n"
                "He has still not mentioned it. This filing notes the omission and does "
                "not fill it."
            ),
            "waluigi_note": (
                "My handwriting is **fine**.\n\n"
                "The letters are not addressed to anybody. That is not a coincidence and "
                "I am not going to explain it in a public filing."
            ),
        },
        {
            "name": "V. The Coin",
            "icon": "\U0001fa99",
            "subtitle": "Star Festival fund, no note, left on a bed",
            "overview": (
                "Taped under the corner of a sticky note on the notepad: a single gold "
                "coin. Wario found it because Wario finds coins.\n\n"
                "Waluigi took it off him and flipped it over and went pale, because the "
                "coin is drawn on the **Star Festival fund** - and that is a real fund "
                "with real accounting attached to it, not a keepsake.\n\n"
                "The story came out slowly, sitting on the edge of the bed, the coin "
                "rolling between his fingers:\n\n"
                "> It was after the tournament. Everyone won something. Mario had his "
                "trophy. Luigi had his trophy. Waluigi did not win anything that year. "
                "And afterward somebody left this on his bed. No note. Just the coin.\n\n"
                "Wario, trying to be helpful, called it a participation trophy. That went "
                "about as well as it deserved to.\n\n"
                "*\"Someone went out of their way to-\"* and then he stopped himself, and "
                "swallowed, and said it did not matter.\n\n"
                "He also said, earlier and more quietly, the thing this section is "
                "actually filed for: **\"It was the last time things made sense.\"**\n\n"
                "The coin was taped to the underside of a sticky note, and the sticky note "
                "was blank. One gold piece, Star Festival mint, drawn on the festival fund "
                "in a year when Waluigi placed in nothing and won nothing and was, by the "
                "official record, not a participant. Somebody had signed it out of a fund "
                "they were entitled to spend, walked it up a flight of stairs, and left it "
                "on a bed in an empty room.\n\n"
                "Waluigi has kept it for years without spending it and without explaining "
                "it. He did not explain it now either. He turned it over twice, put it on "
                "the nightstand between them, and said nothing, and let Wario read the "
                "mint mark himself.\n\n"
                "Wario read it. The archive would like to record what his face did at that "
                "moment, and cannot, because the only witness was sitting behind him and "
                "has declined to characterise it. What is on the record is that he did not "
                "make a joke, and that the gap before he spoke again was long enough that "
                "the tape in the other room reached the end of its loop and cut to black "
                "unattended."
            ),
            "waluigi_note": (
                "The coin is evidence. I want that established in the record because the "
                "moment it becomes sentiment it stops being useful.\n\n"
                "**Somebody with access to the Star Festival fund knew I had won nothing "
                "and knew which bed was mine.** That is a very short list of people. I "
                "have had this coin for years and I have never once written that sentence "
                "down. It is written down now."
            ),
        },
        {
            "name": "VI. The Wario Files",
            "icon": "\u260e\ufe0f",
            "subtitle": "the Mario Kart Massacre, the faked death, and the phone calls",
            "overview": (
                "The coin pulled the Mario Kart Massacre up with it, and Wario's own "
                "history with it: he had to fake his own death to get clear, and he had "
                "to pull strings to manage that.\n\n"
                "The recordings the media later called the Wario Files are a matter of "
                "public record and this filing will not reproduce them in full. The load-"
                "bearing facts for this archive's purposes:\n\n"
                "- A televised Mario Kart broadcast became a mass-casualty event on the "
                "eleventh of September, two years before the trial.\n"
                "- President Wario, drunk and driving, called his daughter first - before "
                "authorities, before medics - to arrange the aftermath.\n"
                "- The plan was a faked death: the comatose angle, then waking while the "
                "medics were distracted, then out through the ambulance.\n"
                "- His daughter, who controlled the network the massacre was airing on, "
                "spent the rest of that day making calls: a lawyer to stall the press, a "
                "contract killer for four named targets, and a supplier.\n"
                "- The cover story - President Wario dead by his own hand, in terror of "
                "facing justice - was accepted by the kingdom without a serious question.\n"
                "- At trial she interrupted the court to insist, on the record, that her "
                "father was not dead. Then the judge was shot.\n\n"
                "*\"Seems like her coverup worked,\"* Wario said, and laughed.\n\n"
                "*\"Yeah, real comedy genius over there.\"*\n\n"
                "The Wario Files, as the media eventually named them, are not one recording "
                "but a run of phone calls placed over a single afternoon by a man trying "
                "very hard not to be on a starting grid. He made them from a company line, "
                "which is why they exist: the line logged everything, and nobody thought to "
                "stop it. He called in a debt, then a favour, then a threat, in that order, "
                "escalating politely until something moved.\n\n"
                "His account of them here is unusually complete and unusually unashamed. He "
                "did not present the calls as a scandal he survived. He presented them as a "
                "procedure that worked, which is a considerably stranger thing to sit "
                "across a kitchen from. He listed who he called. He listed what each one "
                "cost him. He remembered the costs to the coin, years later, without "
                "checking a ledger.\n\n"
                "Waluigi wrote the list down. That is the first time in this session that "
                "he picked up a pencil, and he has not put it down since."
            ),
            "waluigi_note": (
                "Two things and then I will leave this alone.\n\n"
                "**One.** The whole kingdom just *accepted* it. A president dies "
                "conveniently, on the day of a televised massacre, and nobody pulls the "
                "thread. I have spent my career being told I am paranoid by people who "
                "swallowed that whole.\n\n"
                "**Two.** He laughed. I want to be angry about that and I cannot entirely "
                "manage it, because I have listened to the tape in my own room six times "
                "and laughing is one of the two available options."
            ),
        },
        {
            "name": "VII. The Perspective of Greed",
            "icon": "\U0001f4b0",
            "subtitle": "what Wario actually learned, and what it does to the note",
            "overview": (
                "Waluigi told Wario he had learned nothing from the tapes. Wario smiled "
                "and said that Luigi was still in hospital, that Waluigi had locked "
                "himself in a room, and that *he* had learned something.\n\n"
                "Then he explained it, and the room changed.\n\n"
                "The courier's note has been read in this archive as a rescue instruction "
                "since the day it was recovered: *The star is not lost. Find the garden "
                "above the fire.* A heroic sentence. Mario, hiding to protect something, "
                "leaving a trail for someone to follow.\n\n"
                "Wario's reading: **run it as greed instead.**\n\n"
                "Under that reading the sentence inverts. *The star is not lost* stops "
                "being reassurance and becomes an inventory note. The star is not lost "
                "because it was stolen or destroyed or hidden by an enemy. It is not lost "
                "because somebody still **has** it. And if Mario went east after the "
                "fountain, and has stayed gone this long, then *the garden above the fire* "
                "is not a description of where he was taken.\n\n"
                "It is a description of where he is keeping it.\n\n"
                "*\"Greed. Of course that's your angle.\"* But Waluigi did not look away, "
                "and he had the pencil out, and he was running the numbers.\n\n"
                "*\"And make it good - I'm not chasing another wild Wario theory across a "
                "lava field.\"*\n\n"
                "The reframing is worth setting out slowly, because the whole arc now rests "
                "on it. The courier's note reads: *\"The star is not lost. Find the garden "
                "above the fire.\"* Every reading the archive has filed so far treated that "
                "as a rescue instruction written by an ally - a location, a reassurance, a "
                "map fragment addressed to people who intend to go and get something back.\n\n"
                "Wario read it as an inventory line. He has written notes like this. He has "
                "written them about property. *The star is not lost* is not comfort, in his "
                "reading; it is a status. It is the sentence you write when an asset is "
                "still on the books and still where you left it, and the reason you write "
                "it down at all is that somebody paid to have it moved and wants "
                "confirmation the move held.\n\n"
                "Under that reading the second sentence stops being a riddle and starts "
                "being an address, and the first sentence stops being hope and starts being "
                "a receipt. The star is not lost because it was taken. It is lost because "
                "somebody still has it, and is keeping it somewhere warm and high and "
                "difficult to reach, and has written to confirm it is still there.\n\n"
                "Waluigi ran the numbers for six minutes and did not find the hole. He has "
                "filed the reading as the working theory of the arc, under protest, in his "
                "own handwriting, which he maintains is fine."
            ),
            "waluigi_note": (
                "I believe him.\n\n"
                "I have written that sentence three times tonight and deleted it twice. "
                "**For once in my miserable life I believe someone who isn't me,** and "
                "that should frighten me considerably more than it does.\n\n"
                "Here is the part I keep circling. If the note is a hiding place and not a "
                "rescue, then everything downstream of it is wrong - the search pattern, "
                "the assumption that Mario is a victim in this, the reason we have been "
                "reading the fountain as an ambush site instead of a *departure* point. "
                "How many people have died because nobody asked the right question until "
                "a disgraced dead man in a basement pointed his finger and laughed?\n\n"
                "I hate that it makes sense."
            ),
        },
        {
            "name": "VIII. The Tape, In Full",
            "icon": "\U0001f4c4",
            "subtitle": "the primary source, transcribed, with nothing taken out",
            "overview": (
                "This is the whole recording. The archive has argued about this "
                "conversation for two filings on the strength of one witness who was not "
                "present, and the correction to that is not a better summary - it is the "
                "thing itself, in order, so that anybody who wants to check a reading "
                "against the source can do it without asking permission.\n\n"
                "The transcription convention: speech exactly as spoken, including the "
                "stumbles. Mario's accent is written the way it sounds because smoothing "
                "it out is already an edit. Stage business in italics is what is visible "
                "on the tape, not what anybody reported afterwards. Where the two of them "
                "talk over each other, the tape is marked and the lines are given in the "
                "order they begin.\n\n"
                "Two features of the recording are preserved here rather than repaired, "
                "because they are evidence. The silhouette passage is marked where it "
                "begins and ends. The recording's final frame is marked where it stops. "
                "Neither is a transcription failure.\n\n"
                + TRANSCRIPT
            ),
            "waluigi_note": (
                "*Filed unedited, and I want the reason on the record.* Every version of "
                "this argument the archive has held until today came through somebody who "
                "wanted it to mean something. Including mine. Especially mine.\n\n"
                "So here it is with my hands off it. If my reading is wrong, the thing "
                "that proves me wrong is now sitting directly above this note where "
                "anybody can reach it. **That is what a primary source is for, and an "
                "archive that only files the sources that flatter its archivist is not an "
                "archive, it is a scrapbook.**"
            ),
        },
    ],
    "participants": [
        {"id": "waluigi", "name": "Waluigi",
         "role": "Field Archivist / Six Rewinds / Owner of the Coin and the Notebook"},
        {"id": "wario", "name": "Wario",
         "role": "Uninvited Visitor / Reader of Poetry / Author of the Greed Reading"},
        {"id": "mona", "name": "Mona",
         "role": "Watched From the Doorway and Left Without Being Asked Twice"},
        {"id": "ashley", "name": "Ashley",
         "role": "Present for the Notebook, Silent Throughout"},
        {"id": "luigi", "name": "Luigi",
         "role": "On the Tape / In the Clinic / Absent From the Room"},
        {"id": "mario", "name": "Mario",
         "role": "On the Tape / Still Missing / Subject of the Greed Reading"},
    ],
    "outcome": (
        "No combat, no travel, no recovery of a person or an object. What changed is the "
        "reading of the courier's note, and the reading is the whole arc.\n\n"
        "Filed as settled: the brothers' hallway argument now has a primary source in the "
        "archive - a VHS tape - where before it had only the recalled testimony of a "
        "blue-painted impostor who was not present. The line-by-line reading is filed "
        "separately.\n\n"
        "Filed as open: the identity of whoever left a Star Festival coin on Waluigi's bed "
        "the year he won nothing. The current location of the garden above the fire. "
        "Whether Mario went east to hide rather than to save, and what he is keeping "
        "there.\n\n"
        "Also filed, because it is true and because nobody else will write it down: "
        "Waluigi came out of the room. Not because he was argued out of it. Because "
        "somebody brought him a glass of water and would not leave."
    ),
    "notableFeatures": [
        "\"You thought that Koopa worked alone...\" - the tape's first line, and the line Luigi threw on the lava bridge",
        "Six rewinds - Wario counted, Waluigi had stopped counting",
        "\"The stars don't shine without the dark. And I don't shine without-\" - the notebook, read aloud, unfinished",
        "Garlic clippings offered as stress research, and as vampire deterrent, sincerely",
        "Newspaper clippings with Waluigi's name circled; a stack of letters addressed to nobody",
        "A gold coin from the Star Festival fund, left on a bed with no note, the year he won nothing",
        "\"It was the last time things made sense.\"",
        "The Wario Files - a faked death, four contract targets, and a kingdom that asked no questions",
        "\"We need to look at this from a perspective of greed\" - the reframing the arc turns on",
        "The star is not lost because somebody kept it",
    ],
    "keyBattles": [],
    "relatedArticles": [
        "the_garden_above_the_fire",
        "the_lava_bridge_ambush_and_the_blue_luigi",
        "the_belly_of_the_beast",
        "waluigi",
        "wario",
        "luigi",
        "mario",
        "mona",
        "ashley",
    ],
    "aftermath": (
        "Waluigi left the room. The company meeting in the morning went ahead and is not "
        "recorded here because nothing happened at it worth filing.\n\n"
        "The tape stays in Waluigi's possession and is now logged as an exhibit rather "
        "than a personal effect, which means it can be cited and has to be produced on "
        "request. The notebook is not logged, by agreement.\n\n"
        "The search for Mario continues on a changed premise. Every previous sweep "
        "assumed a man who had been taken or who was hiding to protect somebody. The "
        "greed reading assumes a man who left with something and does not intend to give "
        "it back. Those two searches do not look in the same places."
    ),
    "waluigiAssessment": (
        "**1. I lost two days and I am not going to pretend otherwise.** The tape does "
        "not change when you watch it again. I knew that by the third rewind and I did it "
        "three more times, and the only honest reason is that while the tape is running "
        "the argument is not over yet.\n\n"
        "**2. Wario did the single most competent thing anybody has done in this arc, and "
        "he did it with garlic.** He did not talk me out of the room. He brought water, "
        "stood in the doorway being annoying, refused to leave, and waited. I have been "
        "on the other side of a dozen interventions run by professionals and not one of "
        "them worked. This one worked because it did not announce itself.\n\n"
        "**3. The coin is the oldest open case in my own files and I have never once "
        "worked it.** Someone with access to the Star Festival fund knew I had won "
        "nothing and knew which bed was mine. I have had years to pull that thread. I "
        "have never pulled it, because I preferred the version where it meant something "
        "to the version where it turns out to be an accounting error. That is not "
        "archival practice. That is cowardice with a filing system.\n\n"
        "**4. The greed reading is correct and I resent it.** For two filings this note "
        "has been a rescue instruction, because we read it as people who wanted Mario to "
        "be worth rescuing. Wario read it as a man who wanted to know where the valuable "
        "thing was, and got a cleaner answer in one evening than the rest of us managed "
        "in a month. *The star is not lost* is not comfort. It is an inventory line.\n\n"
        "**5. Luigi is still burning in a hospital bed.** I have spent this filing on a "
        "coin, a notebook and a tape, and the whole time there has been a man in Star "
        "Hill with burns down one side who asked, at the end of the last session, whether "
        "we are still superstars. I do not have an answer. I am filing the question again "
        "so that it stays open and so that nobody gets to quietly stop asking it."
    ),
    "xpAwards": [
        {
            "xpKey": "wario", "articleId": "wario", "name": "Wario",
            "cat": "social", "xp": 340,
            "title": "Event - The Tape and the Wario Files",
            "desc": "Walked into a two-day depressive lock-in without a plan, refused to leave, and got a man out of a dark room with a glass of water and some badly-researched garlic.",
            "date": FILED, "dateSort": 10350820,
        },
        {
            "xpKey": "wario", "articleId": "wario", "name": "Wario",
            "cat": "exploration", "xp": 420,
            "title": "Event - The Tape and the Wario Files",
            "desc": "Reframed the courier's note from a rescue instruction to a hiding place by reading it as greed, changing the entire search premise for Mario in a single evening.",
            "date": FILED, "dateSort": 10350820,
        },
        {
            "xpKey": "waluigi", "articleId": "waluigi", "name": "Waluigi",
            "cat": "social", "xp": 280,
            "title": "Event - The Tape and the Wario Files",
            "desc": "Let somebody read the notebook, drank the water, said thanks, and came out of the room - then filed the coin as an open case instead of a keepsake.",
            "date": FILED, "dateSort": 10350820,
        },
        {
            "xpKey": "waluigi", "articleId": "waluigi", "name": "Waluigi",
            "cat": "exploration", "xp": 300,
            "title": "Event - The Tape and the Wario Files",
            "desc": "Secured the first primary source for the brothers' hallway argument and logged it as a citable exhibit rather than a personal effect.",
            "date": FILED, "dateSort": 10350820,
        },
    ],
    "image": f"{IMG}/tape-01-midnight-rewind.jpg",
    "imageCaption": (
        "Midnight, second day, sixth rewind. The curtains have not been opened since the "
        "clinic. The coffee cups on the nightstand stopped being about coffee some time "
        "yesterday, and the only light in the room is a dead man's argument playing back "
        "at low volume."
    ),
}


# --------------------------------------------------------------------------
# 2. THE LINE-BY-LINE ANALYSIS
# --------------------------------------------------------------------------

ANALYSIS = {
    "id": ANALYSIS_ID,
    "sourceArticle": EVENT_ID,
    "title": "The Brothers' Argument, Line by Line",
    "kicker": "Waluigi's Article Analysis",
    "subtitle": "A primary source at last - and read one line at a time, the fight is not about Mario at all",
    "archivist": "Waluigi, Auditor-General",
    "filed": FILED + " - filed from the chair, before I left the room",
    "summary": (
        "The archive has carried this argument for two filings on the word of a "
        "blue-painted impostor who was not in the room. There is now a tape. Read line "
        "by line it is not a fight about betrayal, or about Koopa, or even about Peach - "
        "it is a fight about being SEEN, and Mario loses it because he keeps answering "
        "the wrong question."
    ),
    "thesis": (
        "Every previous reading of this argument - mine included - treated it as a "
        "corruption story. Koopa got to Luigi, Luigi turned, Mario tried to reach him. "
        "That reading is comfortable and it is wrong, and the tape proves it wrong in the "
        "first exchange.\n\n"
        "Luigi opens with *you thought that Koopa worked alone*. That is not a confession "
        "of being corrupted. It is a boast about having been UNDERESTIMATED - and it is "
        "addressed to a brother who, by Luigi's account, has spent a lifetime doing "
        "exactly that. Read the whole tape with that as the subject and every line lands "
        "differently. Luigi never once asks Mario to atone for a crime. He asks, in nine "
        "different ways, to be *acknowledged*. And Mario - who is not a cruel man and is "
        "trying his whole heart here - answers every single one of them with the bond "
        "instead of the grievance. *You're my brother. We're family. It's-a we.*\n\n"
        "Mario is defending the relationship. Luigi is prosecuting its terms. They are not "
        "having the same argument, and that - not Koopa, not Peach, not the Cape Feather "
        "at the end - is why it ends where it ends."
    ),
    "sections": [
        {
            "id": "opening",
            "icon": "\U0001f3ac",
            "heading": "Line 1-2: The Boast, and the Answer That Misses It",
            "sourceAnchor": (
                "**LUIGI:** *You thought that Koopa worked alone...*\n\n"
                "**MARIO:** *Luigi What do you mean by that? I've a fought too much And "
                "you stand against me! ... Your my brother That's not, Something that'll "
                "go away.*"
            ),
            "body": (
                "Everything is in the first two lines, so I am going to spend longer here "
                "than anywhere else.\n\n"
                "**Luigi's line is a boast, not a confession.** A corrupted man's first "
                "sentence is *he made me* or *you don't understand* or nothing at all. "
                "Luigi's is *you thought* - a sentence built to put his brother on the "
                "wrong side of a fact he should already have known. It requires an "
                "audience expected to be impressed. It is a credential being presented.\n\n"
                "**Mario's reply contains four separate moves and not one of them is the "
                "right one.** He asks what Luigi means - stalling. He cites his own "
                "effort: *I've a fought too much*. He names the offence as positional: "
                "*you stand against me*. And then he reaches for the bond: *Your my "
                "brother*.\n\n"
                "Mark that last one. Twelve seconds in, Mario has already played his only "
                "card. He will play it eleven more times across this tape, and I have "
                "counted, and it does not work once. Note also *That's not, Something "
                "that'll go away* - he is treating the brotherhood as a fact of nature "
                "that survives regardless of conduct. Luigi is about to argue that it is "
                "a contract with terms. **That is the whole fight and it is fully formed "
                "before either man raises his voice.**"
            ),
        },
        {
            "id": "cuff",
            "icon": "\u270b",
            "heading": "Line 3-5: \"Only in the Way\" - the Complaint Is Geometric",
            "sourceAnchor": (
                "**LUIGI:** *you've done enough off the cuff*\n\n"
                "**MARIO:** *Is-a that clear?*\n\n"
                "**LUIGI:** *Call my bluff ill rebuff Standing my ground here all of the "
                "days That I was cast away What's a brother if he's Only in the way!*"
            ),
            "body": (
                "*You've done enough off the cuff* is an accusation of carelessness, not "
                "malice. Luigi is not saying Mario hurt him deliberately. He is saying "
                "Mario did it without thinking, which is worse, because it means it cost "
                "Mario nothing.\n\n"
                "**Mario's *Is-a that clear?* is the single worst line he speaks on this "
                "tape.** Three words, and every one of them is a man asking to be agreed "
                "with. He has just been told his conduct was thoughtless and his response "
                "is to check whether his own point landed. He is not listening. He is "
                "waiting.\n\n"
                "Then Luigi gives the thesis of his entire case: ***What's a brother if "
                "he's Only in the way.*** Read the construction. Not *if he's cruel*. Not "
                "*if he lies*. Not *if he abandons you*. If he is **in the way** - a "
                "spatial complaint, an obstruction. That is what you call a person who has "
                "stood between you and something for so long that you have stopped seeing "
                "them as a person and started seeing them as terrain.\n\n"
                "And *all of the days That I was cast away* dates the grievance. Days. "
                "Plural, accumulated, historical. **This predates Koopa by years and Luigi "
                "has just said so out loud in the fifth line of the recording.**"
            ),
        },
        {
            "id": "overlap-one",
            "icon": "\U0001f5e3\ufe0f",
            "heading": "First Overlap: the Damsel Line Is a Feint",
            "sourceAnchor": (
                "*[Both talking over each other]*\n\n"
                "**MARIO:** *This-a can't-a be The heroic ending You've dreamed of...*\n\n"
                "**LUIGI:** *...You've stolen All that I've dreamed of and just for-a "
                "Clueless damsel!*\n\n"
                "**MARIO:** *That's not true And you-a know it! I won't lay you askew! I "
                "will face this with you!*\n\n"
                "**LUIGI:** *Left in the dimming light Only set to fight The one who has "
                "been Holding me back!*"
            ),
            "body": (
                "The tape marks this as overlapping speech, and the overlap is the point: "
                "from here until it clears, neither man hears a complete sentence from the "
                "other.\n\n"
                "**Mario is arguing about the ENDING.** *The heroic ending you've dreamed "
                "of.* He has cast this as a story with a shape, and he is objecting to how "
                "it finishes. Luigi is not arguing about the ending. Luigi is arguing "
                "about the entire middle - every day of it.\n\n"
                "**The damsel line is a decoy and I recognise the technique because I have "
                "used it.** You lead with the grievance that makes you sound ordinary, "
                "because the real one makes you sound small. Jealousy over a woman comes "
                "pre-loaded with sympathy and a recognisable shape. *Nobody ever measured "
                "me* comes with none of that; it just sits there being pathetic and true. "
                "So Luigi puts the decoy in front, and Mario - not stupid, but listening "
                "for the story he already knows - takes it every time.\n\n"
                "Then Luigi drops the decoy himself: ***The one who has been Holding me "
                "back.*** Not *the one who took her*. There is the real charge, said "
                "plainly, in the middle of a passage where Mario cannot hear it because "
                "they are both talking.\n\n"
                "And Mario's *I will face this with you* is the bond again. Second card, "
                "same card."
            ),
        },
        {
            "id": "zero",
            "icon": "\u2b55",
            "heading": "\"I've Given My Life To A Zero\" - and the Hinge Question",
            "sourceAnchor": (
                "**LUIGI:** *I'm overzealous, I'm-a not-a jealous! ... I've given, My life "
                "to. A zero, And that's true.*\n\n"
                "**MARIO:** *What must I do? Give my life up to you? ... Our bond is torn "
                "A regal pain I endure*\n\n"
                "**LUIGI:** *Who are you to tell me YOUR TRUTH*\n\n"
                "**MARIO:** *Fading away the brothership that soared far!*"
            ),
            "body": (
                "***I'm overzealous, I'm-a not-a jealous.*** He denies the decoy himself, "
                "unprompted, roughly ninety seconds after deploying it. He is correcting "
                "the record even mid-argument, which tells you how badly he wants the real "
                "charge understood.\n\n"
                "***I've given, My life to. A zero.*** The broken metre is doing work here "
                "- the line stumbles exactly where the feeling is. And note who the zero "
                "is. Not Mario. **Himself.** Luigi has spent a life in service of an "
                "outcome and the outcome is that he amounts to nothing. That is not "
                "jealousy. That is an audit.\n\n"
                "Mario answers with ***What must I do? Give my life up to you?*** - which "
                "converts a complaint about recognition into a demand for sacrifice, "
                "because sacrifice is a thing Mario knows how to do. He does not know how "
                "to do acknowledgement. And *A regal pain I endure* centres his own "
                "suffering at the precise moment Luigi has finished describing his.\n\n"
                "Then: ***Who are you to tell me YOUR TRUTH.*** This is the hinge of the "
                "first half. Luigi is rejecting Mario's standing to narrate - not his "
                "facts, his *authority*. Mario has been the one who says what happened for "
                "their entire shared life, and Luigi has just revoked the licence."
            ),
        },
        {
            "id": "clear-air",
            "icon": "\U0001f507",
            "heading": "The Air Clears: \"Finally Awakened TO MOCKERY\"",
            "sourceAnchor": (
                "*[no longer talking over each other]*\n\n"
                "**MARIO:** *Listen for a moment! Just hear me! ... We stood together "
                "Showed them who's the boss*\n\n"
                "**LUIGI:** *Finally awakened TO MOCKERY My name has been lost and Unmarked "
                "To be the one You'll step upon I'll give myself the boost TO GO BEYOND!*"
            ),
            "body": (
                "The tape explicitly marks the overlap ending. For the first time both men "
                "can hear each other completely, and **it makes things worse, not better** "
                "- which is the most damning structural fact on this recording. The "
                "confusion was not the problem. Clarity does not fix it.\n\n"
                "Mario's case, stated cleanly at last, is *we stood together* - a shared "
                "history argument. He is offering the past as evidence that the present is "
                "a mistake.\n\n"
                "Luigi's reply accepts every fact and rejects the conclusion. "
                "***My name has been lost and Unmarked.*** Unmarked. Not defeated, not "
                "wronged - **unrecorded.** I want to be careful here because I am an "
                "archivist and I am aware of what I am about to say, but: Luigi's stated "
                "injury is a filing error. He was there for all of it and none of it has "
                "his name on it.\n\n"
                "*To be the one You'll step upon* - the geometry again. He is not describing "
                "a rival. He is describing a stair.\n\n"
                "And *TO GO BEYOND* in capitals is the first time on this tape that Luigi "
                "describes wanting something rather than resenting something."
            ),
        },
        {
            "id": "overlap-two",
            "icon": "\U0001f501",
            "heading": "Second Overlap: \"Surpass\" Enters the Record",
            "sourceAnchor": (
                "**MARIO:** *You don't truly mean that! Luigi just take a step back! Gain "
                "your cool And lose the fool...*\n\n"
                "*[Both talking over each other]*\n\n"
                "**LUIGI:** *It's too much too ask you? After I'll surpass you! ... Has "
                "brought you and I Onto our KNEES!*\n\n"
                "**MARIO:** *My bro, we're family! I know that, you see! I don't want you "
                "to Be without me!*"
            ),
            "body": (
                "***You don't truly mean that*** is Mario telling Luigi what Luigi means. "
                "Directly after Luigi revoked his authority to do exactly that. Mario "
                "cannot stop; it is reflex.\n\n"
                "*Lose the fool That's making you fall From the tree* - Mario is still "
                "looking for the external agent. There must be a fool, a Koopa, a "
                "corrupting party. The possibility that his brother arrived here on his "
                "own reasoning is not available to him.\n\n"
                "**And here the real verb finally lands: *surpass*.** Not *destroy*, not "
                "*replace*, not *punish*. Surpass. It is a competitive word, not a hateful "
                "one, and it will come back at the end of this tape in both their mouths "
                "at once.\n\n"
                "*Has brought you and I Onto our KNEES* is worth flagging as the one moment "
                "Luigi describes the damage as mutual.\n\n"
                "Mario's answer: ***we're family.*** Card again. And then the tell of the "
                "whole recording - ***I don't want you to Be without me.*** Not *I don't "
                "want to lose you*. He has framed the loss as Luigi's deprivation. Even "
                "his plea is arranged around his own centrality, and he does not hear "
                "himself do it."
            ),
        },
        {
            "id": "masquerade",
            "icon": "\U0001f3ad",
            "heading": "Shouting: Mario Blames Koopa, Luigi Charges Him Interest",
            "sourceAnchor": (
                "*[both start intense shouting]*\n\n"
                "**MARIO:** *Behind of this Masquerade I know you still love me! Koopa made "
                "you go insane I'll help relieve the strain! Displease!*\n\n"
                "**LUIGI:** *Was it worth the fees? Gave your heart a squeeze! You've "
                "shunned my displease*"
            ),
            "body": (
                "Mario says it outright at last: ***Koopa made you go insane.*** This is "
                "the reading the archive has been running on for two filings, and here is "
                "the man himself supplying it - **as a hope, in the middle of shouting, "
                "with no evidence offered.** It is not analysis. It is the least "
                "frightening available explanation, reached for by someone who needs one.\n\n"
                "*Behind of this Masquerade I know you still love me.* He is insisting the "
                "real Luigi is elsewhere, intact, and that the man in front of him is a "
                "costume. That is a profound refusal to credit his brother with his own "
                "actions. **Even Luigi's villainy has to belong to somebody else.**\n\n"
                "Luigi's reply is the sharpest counter on the tape: ***Was it worth the "
                "fees?*** He has priced it. He is treating a lifetime of standing behind "
                "his brother as an invoice that was never settled, and asking whether the "
                "payer thinks he got value.\n\n"
                "*You've shunned my displease* - clumsy, and I am leaving it exactly as "
                "spoken. He is saying: you did not even do me the courtesy of taking my "
                "objection seriously. **Shunned. Not refused. Not argued with. Declined to "
                "acknowledge.** It is the same complaint as line five, eleven exchanges "
                "later, and Mario still has not touched it."
            ),
        },
        {
            "id": "silhouette",
            "icon": "\U0001f311",
            "heading": "The Silhouette Passage - and the Witness at the Window",
            "sourceAnchor": (
                "*[only silhouettes of both of them; a shadow of Peach watches from beyond "
                "a window]*\n\n"
                "**LUIGI:** *\"Luigi and Mario,\" \"What a major duo!\"*\n\n"
                "**MARIO:** *You know that's true Just me and you,*\n\n"
                "**LUIGI:** *If it only it weren't a dream*\n\n"
                "**MARIO:** *damn it luigi!*\n\n"
                "**LUIGI:** *I, wouldn't be the fiend!*"
            ),
            "body": (
                "This is the tenderest passage on the tape and it is the one I trust least, "
                "for reasons that have nothing to do with the brothers.\n\n"
                "**The content first.** Luigi quotes something - the quotation marks are "
                "audible in his delivery. *\"Luigi and Mario.\" \"What a major duo!\"* He is "
                "reciting how they were once described, with his own name first, and the "
                "citation is the injury: that is the only place the billing ever ran in "
                "that order. Mario answers *Just me and you* - the bond, again, the "
                "eleventh time. And Luigi's *If it only it weren't a dream* concedes, for "
                "one line, that he wanted it to be real.\n\n"
                "***damn it luigi*** is the only thing Mario says on this entire recording "
                "in his own unguarded voice. No accent written in, no rhyme, no metre, "
                "lowercase. **When Mario finally stops performing, what comes out is not "
                "an argument. It is exhaustion.**\n\n"
                "**Now the problem.** Three things about the silhouette treatment are not "
                "consistent with tape damage. It begins on a sentence boundary and ends on "
                "one. It obscures the two men in the foreground and does *not* obscure the "
                "window behind them, which stays legible throughout. And the audio does "
                "not degrade with it - the voices come through this passage cleaner than "
                "thirty seconds earlier.\n\n"
                "Damage does not have taste. **Somebody composited this.** And whoever did "
                "it either did it to hide the brothers, or to ensure the only clearly "
                "readable thing in frame was the third figure at the window. Those are "
                "opposite intentions producing an identical image, and I will not guess "
                "between them in a document with my name on it.\n\n"
                "**The archive has never interviewed the watcher.** She was there. She saw "
                "it. Nobody has asked her a single question."
            ),
        },
        {
            "id": "hinge",
            "icon": "\U0001f494",
            "heading": "The Hinge: \"BECAUSE YOUR MY BROTHER\" / \"NO LONGER MY BROTHER\"",
            "sourceAnchor": (
                "*[fade back in; Mario sweating, Luigi standing firm, shadow gone]*\n\n"
                "**MARIO:** *Memories shared The duo not impaired Showing that I cared "
                "BECAUSE YOUR MY BROTHER*\n\n"
                "**LUIGI:** *Sparked inside me Was the pain you seldom And now you plea? "
                "you are NO LONGER MY BROTHER!*\n\n"
                "**MARIO:** *This is trickery! You would never be Fooled by that Koopa "
                "fiend*\n\n"
                "**LUIGI:** *YOU DAMN FOOL Let-a this tale end*"
            ),
            "body": (
                "Note the staging on the return: **Mario sweating, Luigi standing firm.** "
                "Whatever happened under the silhouette cost Mario something and cost "
                "Luigi nothing.\n\n"
                "Mario plays the card one final time and in capitals: ***BECAUSE YOUR MY "
                "BROTHER.*** It is his twelfth reach for the bond and his loudest, and it "
                "is loudest because it is last - he has nothing else and on some level he "
                "knows it.\n\n"
                "***you are NO LONGER MY BROTHER.*** **This is the only line on the entire "
                "tape that changes a status rather than describing one.** Everything before "
                "it is two men disputing an account of the past. After it there is a new "
                "fact in the world that was not there ninety seconds earlier, and it was "
                "created by being said out loud. Luigi does not refute the bond. He "
                "*terminates* it - accepting its existence in order to end it, which is a "
                "far more deliberate act than denial.\n\n"
                "*Sparked inside me Was the pain you seldom* - broken again, and again "
                "broken exactly where it hurts. *The pain you seldom* [acknowledged]. The "
                "sentence cannot finish because the verb is the thing he has never once "
                "received.\n\n"
                "And Mario's response to a formal revocation is ***This is trickery*** - "
                "Koopa, again, immediately. He does not adapt. **He cannot.** The archive "
                "should sit with how frightening that is in a man otherwise famous for "
                "improvising his way out of anything."
            ),
        },
        {
            "id": "shine",
            "icon": "\u2b50",
            "heading": "\"My Own Shine Dimmed Far Blind\" - the Real Grievance, Finally Plain",
            "sourceAnchor": (
                "**LUIGI:** *Burned beyond the bend Show me that glee Oh, across from me "
                "galaxies Saved by you Shadowed me What's to see? My own shine Dimmed far "
                "blind*\n\n"
                "**MARIO:** *Facing the climax Wishing to backtrack It's just a setback A "
                "minor blowback! Stuck in a false dream Wishing to redeem*\n\n"
                "**LUIGI:** *Mario its-a you Wishing the climax Facing a masked rat \"It's "
                "just a setback\" \"A minor blowback\" ending your regime Far-a since "
                "redeemed*"
            ),
            "body": (
                "***Galaxies Saved by you Shadowed me.*** There it is with nothing in front "
                "of it. Not *you took her*, not *you wronged me* - **you saved galaxies and "
                "the saving cast a shadow and I have been standing in it.** Luigi's "
                "complaint is not that Mario did wrong. It is that Mario did *right*, "
                "enormously, repeatedly, and that the light of it blinded everyone to the "
                "man standing beside him.\n\n"
                "*My own shine Dimmed far blind.* He is not claiming he had none. He is "
                "claiming it could not be seen. **That is a completely different "
                "accusation and the archive has never once filed it correctly.**\n\n"
                "Then watch what Luigi does with Mario's words. Mario offers comfort - "
                "*it's just a setback, a minor blowback* - and Luigi **repeats it back "
                "inside quotation marks.** He is not misunderstanding Mario. He is quoting "
                "him to his face to demonstrate how small the comfort sounds from where he "
                "is standing. It is the most sophisticated rhetorical move either brother "
                "makes on this tape, and it is Luigi who makes it.\n\n"
                "*Facing a masked rat* - and note, Luigi now applies the masquerade "
                "language to *Mario*. Each brother has spent this recording accusing the "
                "other of being a costume."
            ),
        },
        {
            "id": "mirror",
            "icon": "\U0001fa9e",
            "heading": "\"Are We-a Still Superstars?\" - Four Seconds of Perfect Agreement",
            "sourceAnchor": (
                "**MARIO:** *The chance to surpass* / **LUIGI:** *The chance to surpass*\n\n"
                "**MARIO:** *Are-* / **LUIGI:** *Are-*\n\n"
                "**BOTH:** *Are we-a still superstars?*\n\n"
                "**BOTH:** *Even in the face of whats been torn asunder*\n\n"
                "**LUIGI:** *I've-a gone and lost the faith* / **MARIO:** *Am I gonna lose "
                "the faith* / **MARIO:** *Inside my brother?* / **LUIGI:** *Inside my "
                "brother,*"
            ),
            "body": (
                "**This is the only stretch of the recording where neither man interrupts "
                "the other, and it is the clearest proof that the conversation had already "
                "failed.**\n\n"
                "They converge on identical vocabulary. *The chance to surpass*, together. "
                "*Are-*, together. Then a shared line. Agreement on the words is exactly "
                "what allows two people to walk away each certain they were understood, "
                "and they mean opposite things by every syllable of it. Mario's *surpass* "
                "is a thing brothers do for each other. Luigi's is a thing he must do *to* "
                "Mario.\n\n"
                "Then the tense does all the work, and I want this noted precisely because "
                "it is the finest detail on the tape:\n\n"
                "**Luigi: *I've-a gone and lost the faith.*** Past. Completed. It is done, "
                "it happened some time ago, and he is reporting it.\n\n"
                "**Mario: *Am I gonna lose the faith.*** Future. Interrogative. He is still "
                "asking whether this is going to happen.\n\n"
                "One of them is describing a completed loss and the other is worrying about "
                "a possible one, **in the same breath, in the same sentence, sharing the "
                "same object.** Mario is not in the same conversation. He has never been in "
                "the same conversation. And *Inside my brother* is spoken by both of them - "
                "Mario as a question, Luigi as a full stop.\n\n"
                "***Are we-a still superstars?*** is the saddest line in this archive and I "
                "am filing that as a finding."
            ),
        },
        {
            "id": "break",
            "icon": "\U0001f5e1\ufe0f",
            "heading": "\"So!\" / \"No!\" - Where It Stops Being an Argument",
            "sourceAnchor": (
                "**LUIGI:** *So!* / **MARIO:** *No!*\n\n"
                "**LUIGI:** *WHY WON'T YOU DIE!*"
            ),
            "body": (
                "Two syllables each, and the conversation ends here. Everything after this "
                "point is not persuasion.\n\n"
                "*So!* is Luigi drawing a conclusion. *No!* is Mario refusing the "
                "conclusion rather than the premise - **still, after everything, arguing "
                "with the outcome instead of the case.**\n\n"
                "Then: ***WHY WON'T YOU DIE.***\n\n"
                "I have listened to this line more times than is healthy and I am going to "
                "record the reading I keep arriving at, with the caveat that it is a "
                "reading. It is phrased as a **complaint about failure**, not as a "
                "declaration of intent. *Why won't you* is what you say when something you "
                "have been attempting is not working. It is the grammar of frustration, "
                "not of murder.\n\n"
                "**Which means the attempts came first, before this tape.** That sentence "
                "implies a history the archive does not have, and I am flagging it as an "
                "open question rather than answering it."
            ),
        },
        {
            "id": "feather",
            "icon": "\U0001fab6",
            "heading": "\"DEATH\" / \"FATE\" - and Who Chose Where This Ends",
            "sourceAnchor": (
                "**LUIGI:** *I've had enough Of this kid's scuff ... set in stone that YOU "
                "WILL DIE*\n\n"
                "**MARIO:** *I still got hope in you Something Could change within you*\n\n"
                "**MARIO:** *Rising demand Escalating your plan Oh, dear bro forgive me!*\n\n"
                "**MARIO:** *I just couldn't change your* - **LUIGI:** *IF IT RESULTS IN "
                "YOUR* - **LUIGI:** *DEATH* / **MARIO:** *FATE*\n\n"
                "*[Mario is shown with a Cape Feather; a sound is heard; the feed cuts out]*"
            ),
            "body": (
                "**Mario's last full line is an apology.** *Oh, dear bro forgive me.* He is "
                "asking forgiveness immediately before doing something, which means he has "
                "decided to do it and knows what it is. That is the only moment on this "
                "tape where Mario is ahead of Luigi rather than behind him.\n\n"
                "And then the final construction, which is the most deliberate piece of "
                "writing in the whole recording. Two half-sentences, interleaved, "
                "completing on a single shared beat:\n\n"
                "**Mario: *I just couldn't change your... FATE.*** **Luigi: *IF IT RESULTS "
                "IN YOUR... DEATH.***\n\n"
                "Same grammatical slot. Same instant. One word each. **DEATH and FATE are "
                "the same syllable count and the opposite claim** - Luigi names an act, "
                "Mario names an inevitability he is absolving himself of. They are still, "
                "in the last word either of them speaks, having two different arguments.\n\n"
                "**Now the part I cannot resolve.** The final frame holds a Cape Feather. A "
                "sound is heard. The feed does not fade and does not tear - it *stops*, "
                "between one frame and the next, with the audio cut clean.\n\n"
                "A tape that runs out does not stop in silence. It stops mid-word, with "
                "noise on the tail. **This one ends on a held breath, on a visible object, "
                "immediately after the most quotable line in the recording.** That is an "
                "ending somebody wrote.\n\n"
                "So the archive carries two open items against this document, and I file "
                "both as open rather than pretend either is resolved: **an uninterviewed "
                "witness at the window, and an unidentified editor** with access to the "
                "master, a compositing suite, and an opinion about where the story should "
                "end.\n\n"
                "**Until I have names for those two, every line above is a reading of "
                "something I was handed rather than something I found.**"
            ),
        },
    ],
    "verdict": (
        "My verdict is that this is not a corruption story and we should stop filing it "
        "as one.\n\n"
        "Luigi is not a good man who was got at. He is a man with a real and long-standing "
        "grievance - that he was never credited, never seen, never counted - who has "
        "chosen an unforgivable way to force the issue. Koopa did not install that "
        "grievance. Koopa found it already there and gave it somewhere to go. Mario's "
        "insistence otherwise, right to the last line, is the most loving and the most "
        "damaging thing he does all night, because it is one more refusal to grant his "
        "brother authorship of his own life.\n\n"
        "Two items go to the open file. There is a witness at the window who has never "
        "been interviewed. And there is an editor - somebody cut this tape, chose the "
        "silhouette passage, and chose the ending - who is currently the single most "
        "important unidentified person in this investigation.\n\n"
        "I have watched this six times. It does not change. That is not the same as it "
        "being finished."
    ),
    "relatedArticles": [
        EVENT_ID,
        "the_garden_above_the_fire",
        "the_lava_bridge_ambush_and_the_blue_luigi",
        "luigi",
        "mario",
        "waluigi",
        "princess_peach",
    ],
    "researchDesk": {
        "title": "Waluigi's After-Hours Research Desk",
        "intro": (
            "The verdict is filed. These three checks pull at the parts of the tape I "
            "cannot close from the chair. A breakthrough sharpens the reading; a dead end "
            "gets filed as an honest limit, because a limit written down is worth more "
            "than a guess dressed up."
        ),
        "rolls": [
            {
                "id": "the-editor",
                "icon": "\u2702\ufe0f",
                "title": "Find the hand that cut the tape",
                "dc": 4,
                "prompt": (
                    "The silhouette passage is an editorial choice and so is the ending. "
                    "Work the physical tape - splice marks, generation loss, duplication "
                    "artefacts - and ask who had it before I did."
                ),
                "success": (
                    "Breakthrough: the silhouette passage sits a generation cleaner than "
                    "the footage on either side of it, which means it was not filmed that "
                    "way - it was composited in later from a second source. Somebody had "
                    "two recordings of this argument and built one tape out of them."
                ),
                "failure": (
                    "Dead end, filed honestly: the tape is a copy of a copy and the wear "
                    "is even enough that I cannot separate an edit from a dropout. I "
                    "cannot prove the cut. I can only prove that I cannot prove it."
                ),
            },
            {
                "id": "the-window",
                "icon": "\U0001fa9f",
                "title": "Place the shadow at the window",
                "dc": 5,
                "prompt": (
                    "A figure watched the softest thirty seconds of this argument from "
                    "outside and was gone before the shouting resumed. Establish the "
                    "hallway's geography and work out what could physically be standing "
                    "there."
                ),
                "success": (
                    "Breakthrough: the window in frame is above ground level on that "
                    "elevation. Whoever was in it was not walking past. They were "
                    "positioned, and they left when the tone changed rather than when the "
                    "argument ended."
                ),
                "failure": (
                    "Dead end: the silhouette carries no detail I can scale against the "
                    "architecture, and I will not build a witness out of a smudge. Logged "
                    "as present, unidentified, uninterviewed."
                ),
            },
            {
                "id": "the-feather",
                "icon": "\U0001fab6",
                "title": "Audit the Cape Feather against the greed reading",
                "dc": 6,
                "prompt": (
                    "Set the feather beside Wario's reframing. A mobility item drawn at "
                    "the lethal beat, and then a month of absence. Test whether flight "
                    "and keeping are the same story."
                ),
                "success": (
                    "Breakthrough: the feather is not a defensive draw. Cross-referenced "
                    "against the fountain timeline it puts Mario airborne and eastbound "
                    "inside the window the courier's note describes - which makes the "
                    "note a forwarding address rather than a distress call."
                ),
                "failure": (
                    "Dead end: a man reaching for an escape item while his brother "
                    "promises to kill him is not evidence of anything except fear. The "
                    "greed reading survives the night but it does not gain a witness."
                ),
            },
        ],
    },
}


# --------------------------------------------------------------------------
# 3. THE COMMENTARY
# --------------------------------------------------------------------------

COMMENTARY = {
    "id": COMMENTARY_ID,
    "sourceArticle": EVENT_ID,
    "title": "The Tape and the Wario Files",
    "subtitle": "Waluigi's Cut - two days, six rewinds, one glass of water, and the worst garlic research ever conducted",
    "filed": FILED,
    "timeCode": TIME_CODE,
    "kicker": "Waluigi's Cut",
    "pullQuote": "WARIO BROUGHT GARLIC. FOR STRESS. Waluigi is going to be annoyed about this for the rest of Waluigi's life and Waluigi is ALSO never going to forget it.",
    "standfirst": (
        "Everything that happened in that room over two days, told properly, by the only "
        "person who was in the chair. Contains: a notebook that is NOT a diary, a coin "
        "with a very short suspect list, a president who faked his own death on live "
        "television, and the moment Wario - WARIO - solved the thing the rest of us have "
        "been failing to solve for a month."
    ),
    "sections": [
        {
            "id": "the-chair",
            "icon": "\U0001f4fc",
            "heading": "Two Days. The Chair. The Tape. Waluigi Regrets NOTHING (Waluigi Regrets Some Things)",
            "body": (
                "Waluigi is going to start with the part everyone wants and nobody will "
                "say out loud: **yes, Waluigi sat in the dark for two days.** Curtains "
                "shut. Sound down. Same tape. Over and OVER.\n\n"
                "Wario says six rewinds. Waluigi would have said four. Waluigi has since "
                "been forced to accept that Wario was counting and Waluigi was not, and "
                "Waluigi would like everyone to appreciate how much that stings, because "
                "**counting is Waluigi's WHOLE JOB.** Waluigi is an ARCHIVIST. Waluigi "
                "counts things for a LIVING. And Waluigi lost count of a tape in Waluigi's "
                "own room.\n\n"
                "Here is what a tape does to you, and Waluigi is putting it in the "
                "commentary because Waluigi refuses to put it anywhere dignified. **While "
                "the tape is running, the argument is not over yet.** That is the whole "
                "mechanism. That is why six. Every time it rewinds those two are back in "
                "the hallway and nobody has said the unforgivable thing yet, and there is "
                "still - for about ninety seconds - a version of this where somebody talks "
                "somebody down.\n\n"
                "Nobody talks anybody down. Waluigi has now confirmed that SIX TIMES, "
                "experimentally, like a scientist, if scientists cried.\n\n"
                "The tape opens with *\"You thought that Koopa worked alone...\"* and if "
                "that sentence sounds familiar it is because Luigi threw it at Waluigi on "
                "a LAVA BRIDGE two filings ago and Waluigi has not slept properly since. "
                "Now Waluigi knows where he got it. **He was quoting himself.** He said it "
                "to his brother first and then he said it to Waluigi, and Waluigi got the "
                "reheated version.\n\n"
                "The room smelled like stale coffee and regret. Waluigi WROTE THAT DOWN. "
                "Waluigi filed it. Somebody was going to describe that room eventually and "
                "Waluigi was not going to let it be somebody kind.\n\n"
                "Here is what the event filing will not tell you, because the event filing "
                "is written in the voice of a man pretending to be a department. The tape "
                "is ninety seconds long. Waluigi watched it for two days. Do that "
                "arithmetic and then come back and tell Waluigi that this was research.\n\n"
                "It was not research. Research has a QUESTION in it. Waluigi had no "
                "question. Waluigi had a loop, and the loop had a man in it who used to be "
                "somebody Waluigi could describe in one word and now needs seven hundred, "
                "and the seven hundred do not agree with each other.\n\n"
                "The honest version is that Waluigi was waiting for the tape to say "
                "something different. Six times. **It did not say anything different. It "
                "is a tape.** And Waluigi - archivist, professional, allegedly the only "
                "rational operator in this entire arc - sat in a chair in the dark and "
                "kept checking, like a man rattling a locked door in case this time."
            ),
        },
        {
            "id": "the-notebook",
            "icon": "\U0001f4d3",
            "heading": "IT IS NOT A DIARY",
            "body": (
                "The door opens. Wario does not knock. Wario has NEVER knocked. Wario "
                "says there is a company meeting in the morning, which is a LIE, or rather "
                "it is true but it is not why he is there, and both men know it.\n\n"
                "*\"Go away.\"* *\"I said I'm fine.\"* Classic. Airtight. Waluigi was "
                "extremely convincing and everyone should ignore the part where Waluigi's "
                "eyes were red-rimmed.\n\n"
                "Then he picks up the **notebook**.\n\n"
                "Waluigi came out of that chair so fast it nearly went over. And Wario - "
                "and this is the bit that ruins it - Wario **stopped**. He flipped back. "
                "He flipped forward. And he went quiet, which Wario does not DO, and he "
                "said *\"...The hell is this?\"* like he had found something.\n\n"
                "Then he read it OUT LOUD. *\"The stars don't shine without the dark. And "
                "I don't shine without-\"*\n\n"
                "AND THEN HE ASKED *WITHOUT WHAT.*\n\n"
                "**WAH.** Waluigi would rather have been stabbed. Waluigi has BEEN stabbed "
                "and Waluigi is telling the archive, on the record, that Waluigi would "
                "rather have been stabbed.\n\n"
                "He showed the drawing to Mona and Ashley. He said he looked like a Koopa "
                "in it. He is RIGHT, he does look like a Koopa in it, that is not the "
                "POINT. Then he threw it on a pile and asked if it was a diary.\n\n"
                "**IT IS A WORKING NOTEBOOK.** A diary is for feelings. A notebook is for "
                "EVIDENCE. The fact that some of the evidence RHYMES is a private matter "
                "between Waluigi and the page.\n\n"
                "Mona watched all of this from the doorway and said NOTHING, which Waluigi "
                "appreciated at the time and has since decided was WORSE. Ashley did not "
                "even look up. Waluigi would genuinely have preferred mockery. Mockery "
                "Waluigi can FILE. Mockery has a SHAPE.\n\n"
                "And then Wario said the thing that actually did the damage: *\"Relax, "
                "I'm not gonna share it.\"* And he let it sit there. And then: *\"But you "
                "gotta talk to someone eventually, bro. You've been locked in here for two "
                "days. Even I think that's messed up, and I lock myself in rooms too.\"*\n\n"
                "**AND I LOCK MYSELF IN ROOMS TOO.** That is the sentence. That is the one "
                "that got through the door when nothing else had. Not *you should get "
                "help* - Waluigi has been told that by PROFESSIONALS and it bounces off - "
                "but *I recognise this because I do it.* You cannot argue with that. There "
                "is no leverage against it. Waluigi tried and there was nothing to push on.\n\n"
                "And he read it FLAT. That is the detail Waluigi keeps returning to. He "
                "did not do a voice. He did not do the SNEERING thing, he did not do the "
                "*ooooh, feelings* thing, he read it the way you read out a parts order, "
                "and three lines in his voice changed on its own and **he did not notice "
                "it change.**\n\n"
                "Waluigi noticed. Waluigi has spent a professional lifetime noticing "
                "exactly that category of thing in other people and filing it as leverage. "
                "This is the first time the noticing produced nothing usable, because what "
                "would Waluigi even DO with it. Blackmail a man for accidentally "
                "respecting a poem?\n\n"
                "*It is not a diary.* Waluigi said it twice. The second time was not a "
                "correction, it was a plea, and Wario - who is many things, most of them "
                "billable - had the decency to put the book down on the counter instead of "
                "back on the pile. **On the counter. Between us. Face down.** He has never "
                "once done anything that considerate with money."
            ),
        },
        {
            "id": "the-water",
            "icon": "\U0001f9c4",
            "heading": "The Garlic. Waluigi Has To Talk About The Garlic.",
            "body": (
                "*\"Let's get you some water.\"*\n\n"
                "Waluigi said fine. Waluigi said fine because Waluigi was too tired to "
                "have another argument, and NOT for any other reason, and the archive will "
                "please note that down accurately.\n\n"
                "So Wario puts the kettle on. And then Wario - a grown man, a former "
                "PRESIDENT, a person with a documented body count - produces **GARLIC "
                "CLIPPINGS** and explains that he has been doing his own RESEARCH and that "
                "garlic is good for stress.\n\n"
                "It is NOT. Garlic does NOTHING for stress. Waluigi looked it up "
                "afterwards SPECIFICALLY to prove him wrong and Waluigi was RIGHT.\n\n"
                "Then he added that it also keeps vampires away, and that if he was going "
                "to help Waluigi through this he might as well keep the creepy stuff at "
                "bay. Deadpan. Completely deadpan. Waluigi nearly did not notice he was "
                "TRYING.\n\n"
                "Here is the thing Waluigi cannot get around and has given up trying to "
                "get around. **He went and looked something up. Badly. On purpose. For "
                "Waluigi.** Nobody has done that. Not once. Not in years.\n\n"
                "Waluigi drank the water and said thanks and Waluigi is not going to "
                "pretend that did not happen because it is FILED and Wario can READ.\n\n"
                "Also - and Waluigi wants this on the record for reasons of pure spite - "
                "before the kitchen, Wario turned around and BELLOWED at the hallway to "
                "clear out because THIS WAS A PRIVATE CONVERSATION. There was nobody "
                "there. Mona had already gone. She had gone QUIETLY, some time earlier, "
                "like a person with manners. So Wario screamed at an empty corridor, "
                "turned back around, and said *\"...okay she left.\"*\n\n"
                "And then, quietly, before any of the garlic: *\"Luigi's gonna be okay.\"* "
                "Not a joke. Not a setup. Not Wario angling for anything. He said it like "
                "a FACT, and Wario does not hand out comforting facts, they are expensive "
                "and he is cheap.\n\n"
                "Waluigi has no idea whether it is true. **Neither does he.** He said it "
                "anyway. Waluigi is choosing to file that as generosity rather than as a "
                "lie, which for Waluigi is practically a religious conversion.\n\n"
                "GARLIC SKINS. The dried outer papery ones. The part you THROW AWAY. He "
                "went to a cupboard, in a house he does not live in, and found the single "
                "least valuable object in it, and carried it across a room, and put it "
                "down next to a glass of tap water, and called the arrangement "
                "*research*.\n\n"
                "Waluigi wants to be extremely clear that this is not touching. This is a "
                "grown man who could not say one sentence, so he brought GARBAGE as a "
                "substitute for the sentence. That is pathetic. Waluigi drank the water "
                "and it was the best thing that has happened to Waluigi this month, so "
                "Waluigi is also pathetic, and the two pathetic men in the kitchen agreed "
                "by mutual silence never to raise it again.\n\n"
                "**That is the whole visit.** Objects instead of sentences, every single "
                "time, with an insult stapled on as the receipt. Water with a *don't*. "
                "Garlic with a *research*. A coin with nothing at all, which is the one "
                "that actually got through.\n\n"
                "And the water worked. That is the humiliating part. Two days of nobody "
                "getting anywhere near Waluigi, and the thing that finally got Waluigi "
                "out of the chair was a man being rude while handing over tap water. **Not "
                "sympathy. Not a speech. Tap water and an insult.**\n\n"
                "Waluigi has thought about why and the answer is annoying: sympathy "
                "requires Waluigi to be a person who needs it, and Waluigi would rather be "
                "set on fire. A glass of water with a *don't* attached does not require "
                "Waluigi to admit anything at all. It is help with the admission surgically "
                "removed, and the man who designed it did not know he was designing "
                "anything. He just could not do it the other way."
            ),
        },
        {
            "id": "the-coin",
            "icon": "\U0001fa99",
            "heading": "The Coin, and the Two Worst Words in the Archive",
            "body": (
                "He came back in later and went over the room like it was a VAULT. "
                "Clippings on the wall - tournament results, Waluigi's name circled on "
                "every one. Cold spaghetti. A stack of letters nobody ever sent.\n\n"
                "He read one. *\"I know you probably don't care about any of this but I "
                "had to say something before I lost my mind.\"* And then he put it back "
                "**exactly where he found it**, which Waluigi noticed, and which Waluigi "
                "is filing, because Wario does not put things back.\n\n"
                "Then he said Waluigi's handwriting was terrible. It is FINE.\n\n"
                "Then he found the **COIN**. Taped under a sticky note. Gold. Star "
                "Festival fund.\n\n"
                "Here is the story and Waluigi is going to tell it once. After the "
                "tournament, everyone won something. Mario had a trophy. Luigi had a "
                "trophy. **Waluigi won nothing that year.** And afterwards somebody left "
                "that coin on Waluigi's bed. No note. Nothing. Just the coin.\n\n"
                "And Wario - brilliant, generous, emotionally literate Wario - called it "
                "a **PARTICIPATION TROPHY**.\n\n"
                "*IT IS NOT A PARTICIPATION TROPHY YOU NEANDERTHAL.*\n\n"
                "Waluigi's voice cracked. It is on the record that Waluigi's voice cracked "
                "and Waluigi is leaving it there because deleting it would be exactly the "
                "sort of thing Waluigi keeps accusing everyone else of.\n\n"
                "And here is the part Waluigi said out loud without meaning to: **\"It was "
                "the last time things made sense.\"**\n\n"
                "Somebody with access to the Star Festival fund knew Waluigi had won "
                "nothing and knew WHICH BED WAS WALUIGI'S. That is a SHORT list. Waluigi "
                "has had that coin for YEARS and has never once worked the case, and "
                "Waluigi knows exactly why, and Waluigi is not putting THAT in the "
                "commentary.\n\n"
                "One coin. Star Festival mint. The year Waluigi entered eleven events and "
                "placed in none of them and was recorded in the official programme as a "
                "line of text with the wrong number of Ls in it.\n\n"
                "Somebody signed a gold piece out of a fund that was theirs to spend, "
                "carried it up a flight of stairs into an empty room, taped it under a "
                "sticky note, and wrote NOTHING on the note. No name. No gloat. Nothing to "
                "sign it. Which means whoever did it specifically did not want credit for "
                "it, and Waluigi would like to point out that in this entire archive there "
                "is exactly one category of person who does a kind thing and then "
                "aggressively destroys the evidence.\n\n"
                "And he said the quiet thing QUIETLY, which Wario does not do, and then he "
                "moved straight on to a joke about the mint mark and Waluigi let him. "
                "**Waluigi let him.** Write that down. Somebody handed Waluigi a confession "
                "and Waluigi handed it back, because looking at it directly would have "
                "ended the evening."
            ),
        },
        {
            "id": "the-list",
            "icon": "\U0001f4dd",
            "heading": "The Suspect List Is Four Names Long And Waluigi Has Never Written It Down",
            "body": (
                "Waluigi is going to do something in this commentary that Waluigi has "
                "avoided doing in the actual filing, which is **think about the coin "
                "properly.**\n\n"
                "Facts. It is drawn on the Star Festival fund, which is a real fund with "
                "real accounting and a real, SHORT list of people who could draw on it. It "
                "was left on Waluigi's bed. Not handed over. Not posted. Left, in a private "
                "room, in a building with a door. And it arrived the one year Waluigi won "
                "NOTHING - which means whoever left it **knew the results before Waluigi "
                "had finished being humiliated by them.**\n\n"
                "So: someone with fund access, someone who knew which bed, someone who "
                "knew the standings, and someone who did not want credit for it. That last "
                "one is the killer. No note. Nobody has EVER come to collect on it. "
                "Waluigi has been carrying a favour for years and cannot pay it back "
                "because Waluigi does not know who to pay.\n\n"
                "Waluigi has had YEARS to work this. Waluigi works cases for a LIVING. "
                "Waluigi has resolved the ownership of a haunted manor, a stolen mirror "
                "and an entire province's census, and Waluigi has never once spent an "
                "afternoon on the coin.\n\n"
                "**And Waluigi knows exactly why, and here it is.** As long as Waluigi "
                "does not look, it means something. The moment Waluigi looks it might turn "
                "out to be an accounting error, or a clerk being tidy, or somebody's idea "
                "of a JOKE. So Waluigi kept it in a drawer taped to a sticky note where it "
                "could stay meaningful forever.\n\n"
                "That is not archival practice. That is **cowardice with a filing "
                "system.** It took a man with garlic to get that out of Waluigi's mouth.\n\n"
                "Four names. Waluigi has carried four names for long enough that they have "
                "worn smooth, the way a coin does. Waluigi can recite them in order. "
                "Waluigi can tell you what each one was doing that week, and which of the "
                "four has an alibi that is too good, and which of the four has an alibi so "
                "bad it is probably real.\n\n"
                "And it has never touched paper. Not in a ledger, not in a margin, not in "
                "the encrypted section of a notebook that Waluigi absolutely maintains, "
                "thank you. Because the instant it touches paper it becomes a DOCUMENT, "
                "and documents get read, and a document with four names on it is a "
                "document that eventually requires Waluigi to go and knock on four "
                "doors.\n\n"
                "Wario asked who did it. Not rhetorically. He asked like a man asking for "
                "a supplier. And Waluigi opened his mouth to deflect and instead heard "
                "himself start listing, and got to the second name before stopping, and "
                "the stopping is the part that will keep Waluigi awake. **Not the naming. "
                "The stopping.**\n\n"
                "Because a name said out loud in a kitchen is still deniable. Waluigi can "
                "wake up tomorrow and decide it was the tiredness talking. But a name "
                "said out loud to a man who REMEMBERS THINGS - who can tell you what a "
                "favour cost him nine years ago without looking it up - is not deniable "
                "at all. Waluigi handed two of those names to the single best-organised "
                "memory in this company and then stopped, which is like posting a letter "
                "and then trying to argue with the postbox.\n\n"
                "He has not brought them up since. He will. **Waluigi has started keeping "
                "a note of how many things Wario has not brought up since, and the list "
                "is getting long enough to be its own filing.**"
            ),
        },
        {
            "id": "the-files",
            "icon": "\u260e\ufe0f",
            "heading": "Oh, THE MARIO KART MASSACRE. Sure. Casual Tuesday.",
            "body": (
                "So the coin comes up and Wario goes *\"oh, the Mario Kart massacre, "
                "right! I had to fake my own death for that.\"*\n\n"
                "**CASUALLY.** Like he is remembering where he parked.\n\n"
                "Waluigi is not going to reproduce the whole Wario Files here because they "
                "are public record and because Waluigi has a word count. The short "
                "version, and every line of it is real:\n\n"
                "A televised Mario Kart broadcast turned into a mass-casualty event. "
                "President Wario, **extremely** intoxicated, crashed. And the FIRST call "
                "he made - before medics, before authorities, before anything - was to his "
                "DAUGHTER, to arrange the aftermath.\n\n"
                "The plan: play comatose, wake up when the EMT is distracted, walk out "
                "through the ambulance. He described this. ON THE PHONE. On a line she "
                "kept BEGGING him to stop implicating himself on.\n\n"
                "And she owned the NETWORK IT WAS AIRING ON. Then she spent her afternoon "
                "calling a lawyer to stall the press, calling her mother to arrange **four "
                "murders**, and calling a man named Bill for a mountain of narcotics. In "
                "that order. On the same day.\n\n"
                "And the kingdom BOUGHT IT. *\"President Wario died tragically.\"* Nobody "
                "pulled the thread. Waluigi has spent Waluigi's entire CAREER being called "
                "paranoid by people who swallowed THAT whole.\n\n"
                "At the trial she stood up and yelled that her father was not dead, which "
                "was TRUE, and then somebody shot the JUDGE.\n\n"
                "*\"Seems like her coverup worked, wahaha.\"*\n\n"
                "He LAUGHED. Waluigi wants to be furious about that and Waluigi cannot "
                "quite manage it, because Waluigi has watched a tape of two brothers "
                "destroying each other SIX TIMES in a dark room and laughing is one of "
                "only two available options.\n\n"
                "One more thing and then Waluigi will stop. She got up in COURT and "
                "insisted, on the record, that her father was not dead. She was RIGHT. She "
                "was the only person in that entire room telling the TRUTH, she was doing "
                "it against her own interest, and she was held in CONTEMPT for it.\n\n"
                "Waluigi thinks about that more than Waluigi would like. **Being right is "
                "not a defence.** Waluigi has built an entire career on the assumption "
                "that it is.\n\n"
                "He made the calls from a COMPANY LINE. Waluigi needs everyone to sit with "
                "that. The Wario Files exist as evidence in the public record of this "
                "continent because the man committing them did it on a phone that "
                "helpfully wrote everything down for him, and when Waluigi pointed this "
                "out he SHRUGGED. He shrugged! *It worked, didn't it.*\n\n"
                "A debt, then a favour, then a threat. In that order. Escalating POLITELY. "
                "He remembers what each one cost to the exact coin, years later, no "
                "ledger, no notes, while Waluigi cannot reliably remember whether Waluigi "
                "has eaten. There is a kind of monstrousness that is really just extremely "
                "good bookkeeping, and Waluigi is looking directly at it across a kitchen "
                "table.\n\n"
                "And he was not ASHAMED. That is the thing. He did not tell it as a "
                "scandal he survived, he told it as a PROCEDURE THAT WORKED, with a little "
                "pride in the sequencing, and Waluigi wrote the whole list down and has "
                "not put the pencil down since. **Waluigi picked up a pencil.** For the "
                "first time in two days. Because of THAT story."
            ),
        },
        {
            "id": "the-search",
            "icon": "\U0001f50d",
            "heading": "He Went Through Waluigi's Room Like A VAULT And Found The Worst Thing In It",
            "body": (
                "Later he came back in and went over the room PROPERLY. Not snooping - "
                "Waluigi knows snooping, Waluigi INVENTED snooping - this was a man "
                "appraising a vault. Wario has one genuine talent and it is knowing which "
                "object in a room is the valuable one.\n\n"
                "What is on Waluigi's walls: newspaper clippings. Tournament results, "
                "years of them, and on every single one Waluigi's own name circled where "
                "it appears. Waluigi is aware of how that looks. Waluigi does not require "
                "commentary on how that looks.\n\n"
                "What is on Waluigi's desk: cold spaghetti and a stack of handwritten "
                "letters, crumpled, **none of them sent.**\n\n"
                "He picked one up between two fingers and read it. *\"I know you probably "
                "don't care about any of this but I had to say something before I lost my "
                "mind.\"*\n\n"
                "And then - and Waluigi watched him do this - he folded it and put it back "
                "**EXACTLY WHERE HE FOUND IT.**\n\n"
                "Wario does not put things back. Wario has never put anything back in his "
                "LIFE. Wario once took a chandelier. Waluigi has seen this man pocket "
                "cutlery in a house where somebody had just DIED. And he put the letter "
                "back in its place like it was hot.\n\n"
                "Then he backed toward the door without a word, got caught, turned around, "
                "and said: *\"Your handwriting's terrible.\"*\n\n"
                "**IT IS FINE.** Waluigi's handwriting is FINE. It is a FAST hand. It is "
                "the handwriting of somebody who is WRITING SOMETHING DOWN rather than "
                "PERFORMING, which Waluigi would have thought a former head of state might "
                "RECOGNISE.\n\n"
                "The letters are not addressed to anybody. Waluigi is not going to explain "
                "that in a commentary and Waluigi would ask the reader to notice that "
                "Wario did not ask either.\n\n"
                "Drawers out. Wardrobe onto the bed. The loose board by the radiator found "
                "in UNDER A MINUTE, which tells the reader everything about how this man "
                "has spent his professional life. Eleven letters nobody was ever going to "
                "receive. Clippings folded to the same column for years, with one name "
                "pressed into the paper hard enough to emboss the sheet behind it.\n\n"
                "Waluigi sat in the chair and LET HIM. That is not nothing. Waluigi has "
                "thrown people out of this room for looking at the desk. Waluigi watched a "
                "man empty a wardrobe onto a bed and said nothing, because saying "
                "something would have required admitting there was something in there "
                "worth protecting.\n\n"
                "He got to the bottom of the box. He looked at the thing at the bottom of "
                "the box for a long time. And then he put it back FACE DOWN, exactly as he "
                "found it, and stood up and insulted the handwriting on a letter he had "
                "already read.\n\n"
                "**He has still not mentioned it.** Not a hint, not a leverage play, not "
                "one cheap shot in an argument where it would have won him the argument "
                "instantly. Waluigi keeps waiting for the invoice. Waluigi is starting to "
                "suspect there is not going to be one, and does not know what to do with a "
                "world that works like that."
            ),
        },
        {
            "id": "the-greed",
            "icon": "\U0001f4b0",
            "heading": "And Then WARIO Solved It. Wario. WARIO.",
            "body": (
                "Waluigi told him he had learned nothing from the tapes. Waluigi was "
                "showing off. Waluigi was being CRUEL, frankly, because Luigi is in a "
                "hospital bed and Waluigi wanted somebody else to feel bad too.\n\n"
                "And Wario just **smiled** and said: Luigi is still in hospital, you "
                "locked yourself in your room and learned nothing from these tapes, but "
                "you know what *I* learned.\n\n"
                "Then he explained it, and Waluigi's stomach went through the FLOOR.\n\n"
                "Everyone has been reading the courier's note like a rescue. *The star is "
                "not lost. Find the garden above the fire.* Heroic. Noble. Mario hiding to "
                "protect something, leaving a trail for the good guys.\n\n"
                "Wario said: **run it as GREED.**\n\n"
                "And the whole sentence TURNS OVER. *The star is not lost* is not "
                "reassurance. It is an **INVENTORY LINE**. The star is not lost because "
                "nobody took it and nobody destroyed it. It is not lost because somebody "
                "still HAS it. And if Mario went east after the fountain and has stayed "
                "gone this long, then *the garden above the fire* is not where he was "
                "taken to.\n\n"
                "**It is where he is KEEPING it.**\n\n"
                "Waluigi said *\"greed, of course that's your angle\"* and then Waluigi "
                "did not look away, because Waluigi already had the pencil out.\n\n"
                "Waluigi believes him. Waluigi has written that sentence three times "
                "tonight and deleted it twice. **For once in Waluigi's miserable life "
                "Waluigi believes someone who isn't Waluigi,** and that should terrify "
                "Waluigi considerably more than it does.\n\n"
                "How many people have died because nobody asked the right question until "
                "a disgraced dead man in a basement pointed his finger and LAUGHED?\n\n"
                "Waluigi hates that it makes sense. **WAH.**\n\n"
                "*The star is not lost.* Everyone in this archive, Waluigi INCLUDED, read "
                "that as comfort. As a stranger being kind on paper. Because that is how "
                "you read a sentence when you are hoping, and everybody involved in this "
                "arc has been hoping so hard for so long that nobody checked the "
                "grammar.\n\n"
                "Wario read it as a STATUS LINE. An inventory note. The sentence you write "
                "when the item is still on the books and still where you left it, and the "
                "only reason to write it down at all is that somebody PAID to have it put "
                "there and wants confirmation the arrangement held.\n\n"
                "Waluigi spent six minutes trying to break it. Six. Waluigi has broken "
                "better theories than this in under thirty seconds, from across a room, "
                "while eating. There is no hole in it. *Not lost* is not hope, it is a "
                "RECEIPT. *The garden above the fire* is not a riddle, it is an ADDRESS. "
                "The star is not lost because somebody HAS it, and is keeping it somewhere "
                "warm and high and very difficult to walk into.\n\n"
                "So the working theory of this entire arc now belongs to a man who once "
                "faked his own death to avoid a go-kart race, and Waluigi has filed it in "
                "Waluigi's OWN HANDWRITING, under protest, and the handwriting is FINE."
            ),
        },
        {
            "id": "the-transcript",
            "icon": "\U0001f4c4",
            "heading": "And Then Waluigi Typed Out The Whole Thing. Every Word. Including The Ones That Hurt.",
            "body": (
                "One more section and then Waluigi will let the reader go.\n\n"
                "The whole tape is now in the archive. All of it. Typed out by hand, in "
                "order, with the stumbles left in and the bad grammar left in and Mario's "
                "ridiculous accent left in, because CLEANING IT UP IS ALREADY AN EDIT and "
                "this archive has had quite enough of those.\n\n"
                "Do you know how long that took? Waluigi does. Waluigi was there. Ninety "
                "seconds of tape, and Waluigi stopped and started it so many times that "
                "the machine started making a noise it should not make.\n\n"
                "**And here is the part that Waluigi would like on the record.** Waluigi "
                "could have summarised it. Waluigi is GOOD at summarising. Waluigi could "
                "have given the archive eight tidy paragraphs saying what the argument "
                "meant, and every single reader would have taken Waluigi's word for it, "
                "because that is what readers DO, and because until this week nobody in "
                "this entire organisation had anything better than the recollection of a "
                "man who was **not in the room and was wearing somebody else's face at "
                "the time.**\n\n"
                "Instead Waluigi filed the thing itself. Which means any idiot with a "
                "search bar can now go and check Waluigi's reading against the source and "
                "find out that Waluigi got something wrong. Somebody WILL. Waluigi has "
                "made a rod for Waluigi's own back and did it deliberately and is "
                "furious about it.\n\n"
                "Because here is the alternative, and Waluigi wants everyone to look at "
                "it clearly. An archive that only files the sources which happen to "
                "flatter its archivist is not an archive. **It is a SCRAPBOOK.** It is a "
                "man with a glue stick deciding what the past was.\n\n"
                "There are two things in that transcript Waluigi would genuinely rather "
                "nobody read. Waluigi is not going to say which two. They are in there. "
                "They are in there with everything else and they are in there in full and "
                "the reason is that the moment Waluigi starts taking things out, Waluigi "
                "becomes the fourth person to edit this tape, and Waluigi has spent this "
                "entire filing complaining about the other three.\n\n"
                "**WAH.** Go and read it. Check Waluigi's work. Waluigi has never meant "
                "anything less and has never been more certain it was correct.\n\n"
                "One last thing. Waluigi reread the transcript after typing it and found "
                "something that was not audible when it was only SOUND. On the page, the "
                "two of them keep finishing in the same place. Same rhythm, same beat, "
                "same number of syllables, over and over, for ninety seconds - two men who "
                "cannot agree on a single fact and who are nevertheless perfectly in time "
                "with each other the entire way down.\n\n"
                "**They were still a duo. Right to the last word. Neither of them "
                "noticed.**"
            ),
        },
    ],
    # The line-by-line analysis is reachable from the event's own page; it is
    # not listed here because analyses are not article ids and the commentary
    # link checker would flag it as broken.
    "relatedArticles": [
        EVENT_ID,
        "the_garden_above_the_fire",
        "the_lava_bridge_ambush_and_the_blue_luigi",
        "waluigi",
        "wario",
        "luigi",
        "mario",
    ],
}


# --------------------------------------------------------------------------

def upsert(seq, entry, key="id"):
    """Replace an entry with the same id, or append. Returns 'updated'/'added'."""
    for i, existing in enumerate(seq):
        if existing.get(key) == entry[key]:
            seq[i] = entry
            return "updated"
    seq.append(entry)
    return "added"


def load(name):
    return json.loads((DATA / name).read_text(encoding="utf-8"))


def append_entry(name, entry, list_key=None, indent=2):
    """Splice one entry into a JSON array without re-dumping the whole file.

    These data files have been hand-edited for years and their indentation is
    not uniform. `json.dump`-ing the whole structure back would reformat
    thousands of untouched lines, which buries the actual change and breaks
    the archive's small-diff rule. So the new object is rendered on its own
    and spliced in before the array's closing bracket, leaving every existing
    byte exactly where it was.
    """
    path = DATA / name
    text = path.read_text(encoding="utf-8")

    body = json.dumps(entry, indent=indent, ensure_ascii=True)

    # Already filed: replace that one object in place rather than appending a
    # duplicate, so the generator stays the source of truth when its prose is
    # edited. Everything outside this object's braces is left byte-identical.
    hit = text.find(f'"id": "{entry["id"]}"')
    if hit < 0:
        hit = text.find(f'"{entry["id"]}"')
    if hit >= 0:
        start = text.rindex("{", 0, hit)
        depth, i = 0, start
        while i < len(text):
            c = text[i]
            if c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    break
            elif c == '"':
                i += 1
                while text[i] != '"':
                    i += 2 if text[i] == "\\" else 1
            i += 1
        pad = " " * (len(text[:start].split("\n")[-1]))
        spliced = "\n".join((pad + ln if n else ln)
                            for n, ln in enumerate(body.splitlines()))
        path.write_text(text[:start] + spliced + text[i + 1:], encoding="utf-8")
        return "updated"

    if list_key is None:
        # Top-level array: splice before the final ']'.
        close = text.rindex("]")
        pad = " " * indent
        body = "\n".join(pad + line for line in body.splitlines())
        head = text[:close].rstrip()
        if not head.endswith("["):
            head += ","
        text = head + "\n" + body + "\n" + text[close:]
    else:
        # Array nested under a key: find its extent and splice before its ']'.
        marker = f'"{list_key}"'
        start = text.index(marker)
        open_br = text.index("[", start)
        depth, i = 0, open_br
        while i < len(text):
            if text[i] == "[":
                depth += 1
            elif text[i] == "]":
                depth -= 1
                if depth == 0:
                    break
            elif text[i] == '"':
                i += 1
                while text[i] != '"':
                    i += 2 if text[i] == "\\" else 1
            i += 1
        pad = " " * (indent * 2)
        body = "\n".join(pad + line for line in body.splitlines())
        head = text[:i].rstrip()
        if not head.endswith("["):
            head += ","
        text = head + "\n" + body + "\n" + " " * indent + text[i:]

    path.write_text(text, encoding="utf-8")
    return "added"


# The front page carries the newest filing. Step 8 of the filing process: an
# event nobody can reach from the front page is not filed.
FRONT_EXCERPT = (
    "20 Harvestide, 1035 BF. Two days after the clinic, Waluigi had not left his room "
    "and the tape of the brothers' argument had played six times. Wario came in without "
    "knocking, read the notebook out loud, found a Star Festival coin taped to a notepad, "
    "and told the story of how he faked his own death after the Mario Kart Massacre. Then "
    "he reread the courier's note as greed instead of heroism - and the star stopped "
    "being lost and started being kept."
)
FRONT_TITLE = ("The Tape and the Wario Files: Two Days in a Dark Room, a Notebook Read "
               "Aloud, and the Perspective of Greed")


def update_front_page():
    """Point featuredArticle / latestUpdate at this filing."""
    path = DATA / "mainPage.json"
    page = json.loads(path.read_text(encoding="utf-8"))
    before = json.dumps(page, sort_keys=True)
    page["featuredArticle"].update({
        "id": EVENT_ID, "type": "event", "excerpt": FRONT_EXCERPT,
        "label": "Latest Filing \u00b7 Session Event", "title": FRONT_TITLE,
    })
    page["latestUpdate"].update({
        "id": EVENT_ID, "label": "Latest Filing \u00b7 Session Event",
        "excerpt": FRONT_EXCERPT, "title": FRONT_TITLE,
    })
    if json.dumps(page, sort_keys=True) == before:
        return "unchanged"
    path.write_text(json.dumps(page, indent=2, ensure_ascii=False) + "\n",
                    encoding="utf-8")
    return "updated"


def front_page_ok():
    page = json.loads((DATA / "mainPage.json").read_text(encoding="utf-8"))
    return (page["featuredArticle"].get("id") == EVENT_ID
            and page["latestUpdate"].get("id") == EVENT_ID)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true",
                    help="verify the filed articles match this generator")
    args = ap.parse_args()

    events = load("events.json")
    analyses = load("articleAnalyses.json")
    commentaries = load("commentaries.json")

    if args.check:
        problems = []
        filed_event = next((e for e in events if e.get("id") == EVENT_ID), None)
        if filed_event != EVENT:
            problems.append("events.json")
        filed_an = next((a for a in analyses["analyses"]
                         if a.get("id") == ANALYSIS_ID), None)
        if filed_an != ANALYSIS:
            problems.append("articleAnalyses.json")
        filed_co = next((c for c in commentaries["commentaries"]
                         if c.get("id") == COMMENTARY_ID), None)
        if filed_co != COMMENTARY:
            problems.append("commentaries.json")
        if not front_page_ok():
            problems.append("mainPage.json")
        if problems:
            print("tape session: filed data no longer matches the generator: "
                  + ", ".join(problems))
            print("  re-run: python3 tools/build-tape-and-files-session.py")
            return 1
        print("tape session: event, analysis and commentary all match the generator.")
        return 0

    a = append_entry("events.json", EVENT)
    b = append_entry("articleAnalyses.json", ANALYSIS, list_key="analyses")
    c = append_entry("commentaries.json", COMMENTARY, list_key="commentaries")

    d = update_front_page()
    print(f"mainPage.json        {d}   featured + latest -> {EVENT_ID}")

    words = sum(len(str(v).split()) for v in
                [EVENT, ANALYSIS, COMMENTARY])
    print(f"events.json          {a}   {EVENT_ID}")
    print(f"articleAnalyses.json {b}   {ANALYSIS_ID}")
    print(f"commentaries.json    {c}   {COMMENTARY_ID}")
    print(f"~{words} words across the three filings.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
