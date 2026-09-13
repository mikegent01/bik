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
            "heading": "The First Line Is a Boast, Not a Confession",
            "sourceAnchor": "Luigi: You thought that Koopa worked alone...",
            "body": (
                "Start here, because everything is in it.\n\n"
                "If Luigi were a corrupted man - enchanted, coerced, turned - the first "
                "line of a confrontation would be about the corruption. It is not. It is "
                "*you thought*. The sentence is aimed at Mario's **assumption**, and the "
                "pleasure in it is the pleasure of having been wrongly assessed.\n\n"
                "Mario's reply confirms he has not understood: *Luigi what do you mean by "
                "that? I've a fought too much and you stand against me.* He hears an "
                "accusation of treachery and answers the treachery. He will do this for "
                "the entire tape.\n\n"
                "Then he plays the only card he has: *Your my brother. That's not "
                "something that'll go away.* Twelve seconds in, and Mario has already "
                "reached for the bond. He will reach for it eleven more times. It never "
                "works once.\n\n"
                "Notice what a boast requires that a confession does not: an audience that "
                "is expected to be impressed. Luigi is not unburdening himself here. He is "
                "presenting a credential. He has done something large enough that he "
                "believes it should finally register, and the line is constructed - *you "
                "thought* - to put his brother on the wrong side of a fact he should "
                "already have known.\n\n"
                "This matters because it dates the grievance. A man confessing has arrived "
                "at a decision recently. A man boasting has been rehearsing. Everything "
                "downstream in these ninety seconds reads differently depending on which "
                "one you think you are watching, and the archive has been reading it wrong "
                "for two filings."
            ),
        },
        {
            "id": "cast-away",
            "icon": "\u2696\ufe0f",
            "heading": "\"What's a Brother If He's Only in the Way\"",
            "sourceAnchor": "Luigi: Standing my ground here all of the days That I was cast away / What's a brother if he's Only in the way!",
            "body": (
                "This is the thesis of Luigi's case and it is phrased as a question about "
                "**definitions**, not about loyalty.\n\n"
                "Mario has just argued that brotherhood is permanent - that it will not go "
                "away. Luigi does not deny it. He asks what the word is *worth* if the "
                "person holding it is only ever an obstacle. That is a lawyer's move. It "
                "concedes the premise and attacks the value.\n\n"
                "*All of the days that I was cast away.* Note the tense. Not *the day you "
                "betrayed me* - **days**, plural, continuous, an accumulation rather than "
                "an event. There is no inciting incident in Luigi's case because Luigi's "
                "case is not about an incident. It is about a pattern, and you cannot "
                "apologise your way out of a pattern, which is why Mario's apologies keep "
                "sliding off.\n\n"
                "Mario answers: *This-a can't-a be the heroic ending you've dreamed of.* "
                "Wrong again. He is still arguing about the ENDING. Luigi is arguing about "
                "the whole middle.\n\n"
                "*In the way* is a spatial complaint, and that is the tell. Not *what's a "
                "brother if he's cruel*, not *if he lies*, not *if he abandons you* - if he "
                "is **in the way**. Luigi is not describing a betrayal. He is describing an "
                "obstruction, which is what you call a person who has been standing between "
                "you and something for long enough that you have stopped seeing them as a "
                "person and started seeing them as geometry.\n\n"
                "Mario never engages with the geometry. Not once in ninety seconds does he "
                "say *I did not mean to be in your way* or *I did not know I was*. He "
                "answers a question about position with an answer about affection, over and "
                "over, and each time he does it he confirms the complaint he is trying to "
                "refute."
            ),
        },
        {
            "id": "damsel",
            "icon": "\U0001f451",
            "heading": "The Damsel Line - and Why It Is a Feint",
            "sourceAnchor": "Luigi: You've stolen All that I've dreamed of and just for-a Clueless damsel!",
            "body": (
                "It would be very easy to file this as the motive. Jealousy over "
                "[Peach](https://mikegent01.github.io/bik/index.html#/article/princess_peach). "
                "Clean, ugly, human.\n\n"
                "I do not think it is the motive, and the tape tells you so itself two "
                "stanzas later when Luigi says - unprompted, defensively, about nothing "
                "anybody accused him of - **\"I'm overzealous, I'm-a not-a jealous!\"**\n\n"
                "Nobody says *I'm not jealous* unless the word has already landed "
                "somewhere. He is answering a charge that was not made out loud, which "
                "means he made it to himself first. The damsel line is not his reason. It "
                "is the most *sayable* version of his reason - the grievance he can shout "
                "without admitting the smaller and more humiliating one underneath it, "
                "which is in the very next breath:\n\n"
                "*I've given my life to a zero, and that's true.*\n\n"
                "That is the actual injury. Not that Mario took the girl. That Luigi "
                "measured himself and got nothing back. The damsel is a decoy, and I "
                "recognise the technique because I have used it.\n\n"
                "The technique works like this. You lead with the grievance that makes you "
                "sound ordinary, because the real one makes you sound small. Jealousy over "
                "a woman is a story everyone already knows how to hear; it comes with a "
                "shape, and sympathy, and an ending. *Nobody ever measured me* comes with "
                "none of those. It just sits there being pathetic and true.\n\n"
                "So Luigi puts the decoy in front. And Mario, who is not stupid but is "
                "listening for the story he knows, takes the decoy every single time. The "
                "tragedy of this tape is not that the brothers disagree. It is that one of "
                "them is arguing in code and the other one has never once asked for the "
                "key."
            ),
        },
        {
            "id": "silhouette",
            "icon": "\U0001f576\ufe0f",
            "heading": "The Silhouette Passage - Someone Was Watching",
            "sourceAnchor": "[only silhouettes of both of them, a shadow of Peach watches from beyond a window]",
            "body": (
                "The tape does something here that a security recording does not do: it "
                "goes **stylised**. The figures drop to silhouette. The argument softens "
                "into something almost sung - *\"Luigi and Mario. What a major duo.\"* "
                "*\"You know that's true. Just me and you.\"* - and then snaps back.\n\n"
                "Two observations and I am flagging both as unresolved.\n\n"
                "**One: this footage has been edited.** Silhouette is a choice. Somebody "
                "cut this. That means the tape in my possession is not a raw security "
                "capture and I should stop treating it as one, and it means there is a "
                "person whose editorial judgement sits between me and the event.\n\n"
                "**Two: there is a third party at the window.** A shadow of Peach, watching "
                "from outside, present for the softest thirty seconds of the argument and "
                "gone by the time the shouting resumes. The stage direction says the "
                "shadow is gone when the image fades back in.\n\n"
                "I am not going to speculate past the frame. I am going to file, in "
                "writing, that **somebody outside that hallway saw the whole thing and has "
                "never been asked about it.**"
            ),
            "image": f"{IMG}/tape-03-the-argument.jpg",
            "imageCaption": (
                "The silhouette passage, lifted from the tape. Two brothers reduced to "
                "outlines by an editorial choice somebody made after the fact - and, "
                "through the window behind them, the watcher this archive has never "
                "interviewed.\n\n"
                "Three things about the silhouette treatment are not consistent with "
                "ordinary tape damage. It begins on a sentence boundary and ends on one. It "
                "affects the two men in the foreground and does not affect the window "
                "behind them, which stays legible throughout. And the audio does not "
                "degrade with it - the voices come through this passage cleaner than they "
                "do thirty seconds earlier.\n\n"
                "Damage does not have taste. Somebody composited this. The question the "
                "archive cannot yet answer is whether they did it to hide the two men, or "
                "to make absolutely certain that the third figure was the only thing in the "
                "frame you could still see clearly. Those are opposite intentions producing "
                "an identical image, and I refuse to guess between them in a document with "
                "my name on it."
            ),
        },
        {
            "id": "no-longer",
            "icon": "\U0001f494",
            "heading": "\"You Are NO LONGER MY BROTHER\" - the Hinge",
            "sourceAnchor": "Mario: BECAUSE YOUR MY BROTHER / Luigi: you are NO LONGER MY BROTHER!",
            "body": (
                "Here is the exchange the entire tape is built to reach, and the two lines "
                "are deliberately the same shape.\n\n"
                "Mario: *Memories shared. The duo not impaired. Showing that I cared - "
                "BECAUSE YOUR MY BROTHER.*\n\n"
                "Luigi: *Sparked inside me was the pain you seldom. And now you plea? You "
                "are NO LONGER MY BROTHER.*\n\n"
                "Mario uses the bond as a REASON - *because*. Luigi revokes it as a "
                "STATUS - *no longer*. And the revocation is the only move available to "
                "him, because for the entire argument Mario has been holding the bond up "
                "as the thing that settles every question. The only way to win against a "
                "man whose whole defence is *we are brothers* is to stop being one.\n\n"
                "Mario's response is the most telling line he speaks all night: *This is "
                "trickery! You would never be fooled by that Koopa fiend.*\n\n"
                "He cannot accept it. In the same breath that his brother disowns him, "
                "Mario reaches for the explanation in which Luigi is not responsible - "
                "enchanted, deceived, got at. It is generous. It is loving. And it is the "
                "**exact** thing Luigi has been screaming about for four minutes: Mario "
                "will not credit him with his own actions. Even his villainy has to belong "
                "to somebody else.\n\n"
                "*Who are you to tell me YOUR TRUTH.*\n\n"
                "It is the hinge because it is the only line on the tape that changes a "
                "status rather than describing one. Everything before it is two men "
                "disputing an account of the past. After it, there is a new fact in the "
                "world that was not there ninety seconds earlier, and it was made by being "
                "said out loud.\n\n"
                "And Mario's answer to it is the same answer he has given to everything "
                "else - the bond, again, for the twelfth time, in a sentence that has just "
                "been formally revoked. He does not adapt. He cannot. The archive should "
                "sit with how frightening that is in a man otherwise famous for improvising "
                "his way out of anything."
            ),
        },
        {
            "id": "superstars",
            "icon": "\u2b50",
            "heading": "The One Moment They Are Saying the Same Words",
            "sourceAnchor": "Both: Are we-a still superstars? / Even in the face of whats been torn asunder",
            "body": (
                "For exactly two lines, the overlapping stops and they speak in unison.\n\n"
                "*Are we-a still superstars? Even in the face of what's been torn "
                "asunder.*\n\n"
                "Then it immediately splits again, and the split is the whole tragedy in "
                "miniature:\n\n"
                "> Luigi: *I've-a gone and lost the faith*\n"
                "> Mario: *Am I gonna lose the faith*\n\n"
                "**Past tense against future tense.** Luigi is reporting something already "
                "finished. Mario is asking about something he thinks he can still prevent. "
                "They are standing in the same hallway at two different points in time, "
                "and Mario does not know it.\n\n"
                "I want to note - because this filing is read by people who were on the "
                "lava bridge - that *are we still superstars* is the question "
                "[Luigi](https://mikegent01.github.io/bik/index.html#/article/luigi) asked "
                "at the end of the clinic run, delirious, with burns down one side. He was "
                "not quoting himself. **He was still in this hallway.**\n\n"
                "For about four seconds in the middle of this tape the two of them are "
                "using identical vocabulary, and it is the only stretch where neither one "
                "interrupts the other. Same words, opposite meanings, perfect politeness. "
                "It is the most intimate moment in the recording and it is also the "
                "clearest evidence that the conversation had already failed, because "
                "agreement on the words is exactly what lets two people walk away certain "
                "they were understood.\n\n"
                "Weeks later, burnt, on a stretcher, Luigi produced the same phrasing "
                "unprompted to a man who had not been in the hallway and could not possibly "
                "have known the reference. He was not making a point. He had simply never "
                "left."
            ),
        },
        {
            "id": "cape",
            "icon": "\U0001fab6",
            "heading": "The Feed Cuts Out on a Cape Feather",
            "sourceAnchor": "[Mario is shown with a Cape Feather, a sound is heard, the feed cuts out]",
            "body": (
                "Luigi: *DEATH.* Mario: *FATE.* Same beat, different word, and then Mario "
                "is holding a Cape Feather and the recording ends on a sound.\n\n"
                "Three things I can say and one I cannot.\n\n"
                "**The Cape Feather is a mobility item.** It is not a weapon. At the "
                "precise moment the argument reaches a lethal register, Mario reaches for "
                "the thing that lets him *leave*. That is consistent with a man who spent "
                "the entire tape refusing to fight his brother.\n\n"
                "**It is also consistent with the greed reading.** Wario's reframing of "
                "the courier's note says Mario went east to keep something rather than to "
                "save somebody. A man who ends an argument by producing the means of "
                "flight, and who is then missing for a month, fits that reading "
                "uncomfortably well. I am filing the discomfort rather than resolving it.\n\n"
                "**The feed cuts on a SOUND, not on the sound of a fight.** Whatever "
                "ended the recording is a single event, and it arrives after the feather "
                "is already in shot.\n\n"
                "What I cannot say is who stopped the tape. Somebody edited this footage "
                "into silhouette for one passage. That same somebody chose where it ends. "
                "**I do not have the last thirty seconds of the most important argument in "
                "this arc, and I am not sure that is an accident.**\n\n"
                "What is in the last frame: a cape feather, mid-fall, lit from the left by "
                "a source that is not in the corridor. It is in shot for four frames. Then "
                "the feed stops - not fades, not tears, stops - between one frame and the "
                "next, with the audio cut clean at a point where nobody is speaking.\n\n"
                "A tape that runs out does not stop in silence. It stops wherever it stops, "
                "usually mid-word, usually with a second or two of noise on the tail. This "
                "one ends on a held breath, on a visible object, immediately after the most "
                "quotable line in the recording. That is an ending somebody wrote.\n\n"
                "So the archive now carries two open items against this document and I am "
                "filing both as open rather than pretending either is resolved: an "
                "uninterviewed witness at the window, and an unidentified editor with "
                "access to the master and an opinion about where the story should end. "
                "**Until I have names for those two, every line above is a reading of "
                "something I have been handed rather than something I found.**"
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
                "that actually got through."
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
                "The stopping.**"
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
