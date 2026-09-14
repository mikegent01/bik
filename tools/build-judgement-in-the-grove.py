#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build the session filing for "Judgement in the Grove".

Source of truth for one event record, its battle record, and the front-page
wiring. Runs the whole Step 8 pass from docs/SESSION_FILING_PROCESS.md so the
filing cannot land without reaching the front page - the defect the GM reported
("make sure you update the Current fronts it seems like you didn't before"),
where The Belly of the Beast was filed but never surfaced.

  python3 tools/build-judgement-in-the-grove.py            # write
  python3 tools/build-judgement-in-the-grove.py --check    # verify no drift
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
INDEX = ROOT / "index.html"

EVENT_ID = "judgement_in_the_grove"
BATTLE_ID = "judgement_in_the_grove_battle"
IMG = "assets/images/events/belly-of-the-beast"
# This session's own plates. Setting and cast are drawn from the prior
# session's grove plate and the portraits folder, never invented.
JIG = "assets/images/events/judgement-in-the-grove"

DATE = ("1 Aethel, 1040 BF — just past midnight on the Shadowfell clock, the Skittering Grove "
        "inside the Scorncrow's tree, continuing straight out of the descent")
ERA = "Harvestide 1040 BF — Shadow Estate storm chain"
TIME_CODE = "TC:1040-09-01T00:20/SHD"

TITLE = ("Judgement in the Grove: A Musket in the Smoke, the Warhammer That Would Not "
         "Hear an Appeal, and the Man Remi Found Asleep")

SUMMARY = (
    "The party fought its way out of the web canopy and into an execution. Remi swapped the "
    "crossbow for the musket and landed two direct hits through the smoke; Dan planted himself "
    "in front of everyone including Markop and turned the spiders with a mushroom-studded holy "
    "symbol; Eager and Dan killed the ettercap between them. The Iron Legion called for pest "
    "control, retreated, and then tried to arrest Archie mid-battle, which produced a temporary "
    "alliance nobody expects to hold. Markop called down divine favour, took a scythe to the "
    "skull, and split the Scorncrow's head open while it was on its knees asking a paladin for "
    "mercy. Remi, thrown clear by Mossy, found a breathing man with a red punch mark on his "
    "forehead and had the steel defender stand on his chest. Salam went down and did not get up."
)

DESCRIPTION = (
    "*Three filings called the Scorncrow a monster and the fourth one took its mask off and found "
    "a human face under it. This filing is what the party did with that information. [Waluigi]"
    "(#/article/waluigi) was not there. He has assembled it from [Markop](#/article/markop), "
    "[Archie](#/article/archie_miser), [Remi](#/article/remi_akamatsu_full_backstory) and a "
    "[Toad](#/article/toads) who would not give a name, and he wants it on the record before "
    "anybody smooths it over: the thing knelt, said it was human, asked a paladin to spare it, "
    "and the warhammer came down anyway. WAH.*"
)

SECTIONS = [
    {
        "name": "I. Smoke, and the Wrong Way Out",
        "image": f"{JIG}/jig-02-musket.jpg",
        "imageCaption": ("She put the arrow back in her pocket and took the musket instead, then reloaded it slowly, in the open, with the brood already coming. Two direct hits. The bow stayed on her back."),
        "icon": "🌫️",
        "overview": (
            "\"It's a little smoky in here,\" Remi said.\n\n"
            "She had been walking back the way she thought she had come, which in a grove with no "
            "sky and a silk floor is a sentence with no meaning in it. The webs take the edges off "
            "direction the same way they take the edges off sound. She got turned around once, "
            "corrected, got turned around again by the correction, and walked directly into the "
            "spiders.\n\n"
            "She had the crossbow up and an arrow on the rail before she had finished registering "
            "the ettercap. Then she stopped. She looked at the arrow, and she looked at the thing "
            "in front of her, and she put the arrow back in her pocket.\n\n"
            "The musket came off her shoulder instead.\n\n"
            "The bang went flat across the web canopy and the ettercap came apart at the shoulder. "
            "A direct hit. Then she stood in the open and reloaded — powder, ball, ram, the whole "
            "unhurried procedure — while the grove watched her do it and did not close. She fired "
            "again. Another direct hit.\n\n"
            "\"You invaded my home, right,\" the Scorncrow said from somewhere in the dark. It was "
            "not really a question.\n\n"
            "\"Will the spiders attack?\" Markop asked.\n\n"
            "\"They'll come around.\""
        ),
        "waluigi_note": (
            "*She put the arrow back in her pocket. Read that again, because it is the most "
            "professional thing anybody did all night. A fourteen-year-old under contact, in "
            "smoke, having already walked into the enemy by accident, stopped to change weapons "
            "because the crossbow was the wrong tool — and then reloaded a musket in the open, "
            "twice, and hit with both. Three filings ago this girl was hiding behind Markop. "
            "Waluigi is going to stop describing her as the youngest member.*"
        ),
    },
    {
        "name": "II. The Scythe That Cleaves Everything in Its Path",
        "icon": "🌀",
        "overview": (
            "The Scorncrow hurled its scythe.\n\n"
            "It went out spinning, shrouded in something that bent the air around the blade, and it "
            "did not travel like a thrown weapon. It cleaved everything in its path — web, branch, "
            "standing bodies — and it dragged a chilling cold behind it that cut through anyone "
            "caught in the wake. Not the blade. The wake.\n\n"
            "It caught Eager, Archie and Dan across the same line. All three took it. All three were "
            "grazed rather than opened, which is the only reason this section is four sentences "
            "instead of an obituary.\n\n"
            "A spider came in on Eager while he was still registering the cold. Markop attacked it "
            "back off him.\n\n"
            "Then Markop heard it: *thump. thump.* A giant green spider, going away from them rather "
            "than towards them — *thump thump* — heading for the Iron Legion guards.\n\n"
            "Remi got webbed. \"Why — *whyyyy* —\" she shouted, as the strand took her and the thing "
            "on the other end of it pulled, and it clawed at her, and her clothes came apart under "
            "the hooks.\n\n"
            "One of the Legion guards made the only correct tactical assessment of the night:\n\n"
            "\"We gotta call pest control. RETREAT!\""
        ),
        "waluigi_note": (
            "*A thrown weapon that cleaves everything in its path and freezes the air behind it, "
            "and it grazed three people instead of killing one. Waluigi notes the Scorncrow chose "
            "the spread. It could have put that scythe through a single body and it chose to open "
            "a line across three, which is what you do when you are not trying to win yet — you are "
            "trying to find out what everyone is made of. Dan said they had not seen half its power. "
            "Nobody has revised that estimate downward.*"
        ),
    },
    {
        "name": "III. A Book in Full View, and a Paladin in Front of Everyone",
        "image": f"{JIG}/jig-03-dan-front.jpg",
        "imageCaption": ("Feyward Dan put himself in front of everyone - including Markop, who is a head-and-shoulders taller and armoured - and turned the brood with a mushroom-studded holy symbol."),
        "icon": "📖",
        "overview": (
            "\"Come on, I'm looking at my spells,\" Remi said.\n\n"
            "She said it tied up. She said it with the book open in full view, wrapped in silk, while "
            "another spider came down the strand towards her. There is no reading of that image that "
            "flatters anybody standing nearby.\n\n"
            "Then Feyward Dan walked forward and stood in front of everyone.\n\n"
            "Everyone including Markop — which matters, because Markop is a centaur with a warhammer "
            "and Dan is a Toad who had been unconscious an hour earlier and had spent every point of "
            "magic he owned healing himself. He put himself between the party and the Scorncrow, "
            "faced it, and then turned and swung at the spider instead.\n\n"
            "He got out his holy symbol. A mushroom-studded thing, more garden than cathedral, and he "
            "held it up and faced it at the spiders.\n\n"
            "Then he moved behind the spider, and he and Eager took it together — Dan swinging once, "
            "Eager coming in behind the distraction with a sneak attack. The spider roared.\n\n"
            "Eager ran while it was distracted, straight into a spidery bush.\n\n"
            "Markop walked past the spider. It bit at him and missed. He did not turn around to check. "
            "He was already facing the Scorncrow."
        ),
        "waluigi_note": (
            "*Dan stood in front of Markop. Waluigi wants the ordering noted because Dan is the "
            "smallest combatant on the field and Markop is the largest, and the paladin's read was "
            "that the line goes where the oath is, not where the mass is. Four filings ago this Toad "
            "was a liability with a cursed staff. Waluigi has been unkind to him in print and is "
            "revising it here rather than quietly dropping the subject.*"
        ),
    },
    {
        "name": "IV. Come to Offer Your Head",
        "icon": "⚡",
        "overview": (
            "\"Oh, you come to offer your head. How vigilant.\"\n\n"
            "Markop stared at him. He did not answer, which for Markop is an answer.\n\n"
            "He walked closer. He got the warhammer up, and it began to glow — and above the dead "
            "grove with no sky in it, the ceiling opened anyway and thunder came down through it and "
            "hit the head of the hammer. Markop had come prepared. He had been holding divine favour "
            "since before the rope.\n\n"
            "He struck. The Scorncrow blocked it. The block did not hold, and it flinched — the first "
            "time in four engagements that anything this party did has made it flinch.\n\n"
            "Then it hit him in the head.\n\n"
            "The scythe came around and split Markop's skull and he stood there bleeding into his own "
            "eyes, and the thing laughed at him.\n\n"
            "\"You think you can kill me? I have lived in this tree. Made it my treehouse when I was "
            "little.\"\n\n"
            "Archie Miser — fireball-throwing, three-eyed, dimension-hopping, having split between "
            "worlds — prepared a fireball.\n\n"
            "Then: \"Nah, just kidding.\" He winked at no one in particular, and a considerably "
            "smaller firebolt hit the Scorncrow instead.\n\n"
            "It coughed blood. \"I'm still alive.\""
        ),
        "waluigi_note": (
            "*Made it my treehouse when I was little. That is the second piece of physical evidence "
            "and nobody in the grove stopped moving for it. The first was the human blood under the "
            "mask. This is a childhood, in a location, with a tense. Whatever the Scorncrow is now, "
            "it is claiming to have grown up in the tree the party is currently standing inside, and "
            "Waluigi cannot file that as villain theatre because the archive already got caught "
            "doing exactly that three times.*"
        ),
    },
    {
        "name": "V. The Tree of Love, and a Recruitment Pitch",
        "icon": "🎭",
        "overview": (
            "\"Listen. Do you think the worst person can change?\"\n\n"
            "It was bleeding out of a ruined face and it wanted to have a conversation.\n\n"
            "\"We can hang people together on the tree of love. Join me, young one. Join the "
            "Scorncrow — or hear my last ballad.\"\n\n"
            "\"Sorry, Scorncrow,\" Archie said. \"I'm on the side of good. Despite all my accidental "
            "crimes.\"\n\n"
            "The guards were retreating deeper into the grove by then, and they took the opportunity "
            "of a lull in the murder to remember their jobs.\n\n"
            "\"YOU TOADS ARE UNDER ARREST.\"\n\n"
            "\"No — no, wait —\"\n\n"
            "\"Archie Miser is right there. Arrest him.\"\n\n"
            "\"No, wait, *help*, get these spiders —\"\n\n"
            "What followed was a negotiation conducted at speed between people being actively eaten. "
            "They struck a temporary alliance: the Legion helps with the brood, the Toads agree, and "
            "Archie gets arrested at the end of it. Archie shrugged.\n\n"
            "\"This won't last.\""
        ),
        "waluigi_note": (
            "*Do you think the worst person can change. Waluigi is obliged to note that the thing "
            "asked this question and then, two sections from now, was killed while asking a version "
            "of it again. The archive does not get to enjoy Archie's line about accidental crimes "
            "without also filing what the question was and who was asking it. Also: the Iron Legion "
            "attempted an arrest in the middle of a losing fight against a spider brood. Waluigi has "
            "no assessment. Waluigi simply wants it preserved.*"
        ),
    },
    {
        "name": "VI. Down Here",
        "icon": "🌳",
        "overview": (
            "\"What are you doing down here?\" Archie asked.\n\n"
            "\"Down here? What do you mean?\"\n\n"
            "\"Yes, *down here*. Remember the rope? We went down into the lair, and now we're fighting "
            "here. We're in the undergrowth, right?\"\n\n"
            "\"The tree is a teleporter,\" Markop said.\n\n"
            "\"What are you guys talking about? This is the ruined manor.\"\n\n"
            "Nobody resolved it. A punch landed somewhere off to the left with a sound like a wet "
            "sack dropped from height, and Wario laughed.\n\n"
            "\"I am tired of running.\"\n\n"
            "\"It's been like six seconds,\" Markop shouted.\n\n"
            "Wario explained, without embarrassment, that he is a bad runner.\n\n"
            "\"This is all your fault, you know,\" Archie yelled at him.\n\n"
            "\"Alright then. I'll leave.\"\n\n"
            "Salam fired at the ettercap and missed. Dan swung at the same moment and also missed. "
            "Then Feyward Dan and Eager went in together, in time with each other, and both hit, and "
            "the ettercap fell.\n\n"
            "Every head in the grove turned to the Scorncrow."
        ),
        "waluigi_note": (
            "*Three people in one conversation gave three different answers for where they were "
            "standing: down a rope in a lair, in the undergrowth, and in the ruined manor. Markop "
            "said teleporter. Last filing he recognised this place as the Silent Grove, which the "
            "party cleared on Raventree's grounds by walking to it in daylight. Waluigi's position "
            "is that all three answers are correct and that this is the actual emergency, well "
            "ahead of the spiders.*"
        ),
    },
    {
        "name": "VII. BARK BARK",
        "icon": "🐕",
        "overview": (
            "Eager healed himself with duct tape.\n\n"
            "Remi was about to be eaten. The thing had her wrapped and it came down to bite and there "
            "was no version of the next second that she survived on her own.\n\n"
            "**BARK BARK.**\n\n"
            "Mossy hit her side-on at a dead run. The steel defender put its whole weight into her "
            "and she went flying — off the strand, into the leaves and the branches, through them, "
            "and out the other side, and landed sitting on the floor of the grove with her ears "
            "ringing and every spider suddenly somewhere else.\n\n"
            "She got up and she ran, and she kept running, and then she was alone in the woods.\n\n"
            "She investigated. She found a body.\n\n"
            "Then: no — he is breathing.\n\n"
            "A man, unconscious, face up. There was a red punch mark on his forehead, fresh and "
            "clean and roughly the size of a gauntlet.\n\n"
            "She tapped his head with a stick. Lightly. Nothing happened.\n\n"
            "Mossy came bounding back to her.\n\n"
            "Remi told Mossy to wake the guy up by stepping on him.\n\n"
            "The hard steel came down and pressed onto the man's ribcage. There was a crack. The steel "
            "defender barked and lowered itself very slightly further onto his chest.\n\n"
            "*Welp,* Remi thought. *I killed a guy in his sleep.*"
        ),
        "waluigi_note": (
            "*A red punch mark on the forehead. Waluigi has read the previous filing and would like "
            "to draw the obvious line: Wario was separated inside this grove, Wario punches things, "
            "and Wario had just announced he was tired of running. Waluigi is not filing that as "
            "fact. Waluigi is filing it as the first question anybody should ask the man if Remi's "
            "steel dog has left him in a condition to answer it.*"
        ),
    },
    {
        "name": "VIII. The Warhammer Has Spoken",
        "icon": "⚖️",
        "overview": (
            "Markop swung. The Scorncrow blocked with the scythe.\n\n"
            "\"Wait — please. I will change.\"\n\n"
            "Its head split open and started glowing.\n\n"
            "\"Wait, please. I am human. I am not a monster.\"\n\n"
            "It started to kneel.\n\n"
            "\"You're a paladin, right? You have to spare me. Please. I will change ways.\"\n\n"
            "The head splits open. The warhammer has spoken and given him judgement.\n\n"
            "Markop picked up the scythe.\n\n"
            "Somewhere behind him, the rest of it was still going. Archie Miser announced that they "
            "should regroup to the three Toads, while pointedly not hearing the guards who were still "
            "asking to arrest him.\n\n"
            "\"We gotta find our friends.\"\n\n"
            "\"We're coming to get you home, Remi.\"\n\n"
            "Alone in the woods with a man she may have killed, Remi heard the word *home* and it went "
            "somewhere in her that the spiders had not reached. She shook her head. Focus on the "
            "mission. Her dress was torn. She needs new armour."
        ),
        "waluigi_note": (
            "*Here is what the record says, in order. It said it would change. It said it was human. "
            "It said it was not a monster — the same sentence it has shouted in four consecutive "
            "engagements, the one the archive spent three filings calling theatre until a girl with "
            "a musket proved it was a statement of fact. Then it knelt. Then it asked a paladin, by "
            "his office, for mercy. Then Markop killed it.*\n\n"
            "*Waluigi is not going to pretend this is uncomplicated and he is not going to pretend "
            "he would have done differently. The thing put a scythe through Markop's skull ninety "
            "seconds earlier and it had four engagements of dead Toads behind it. But the archive "
            "already got caught once assuming this creature was lying, and Waluigi will not make the "
            "same error in the other direction by recording an execution as a victory. Markop picked "
            "up the scythe. That is a man taking a trophy from someone who was on his knees, and "
            "Waluigi files it with the ruling and lets the reader weigh it.*"
        ),
    },
    {
        "name": "IX. Every Grove at Once, and Salam",
        "image": f"{JIG}/jig-04-salam-falls.jpg",
        "imageCaption": ("Salam clawed across the face and down, crossbow fallen beside him, as the grove closes from every direction at once and Embercap's fire goes up behind. He was not recovered. The wound scars."),
        "icon": "🕷️",
        "overview": (
            "It was not over. It was arithmetic.\n\n"
            "Embercap, and spiders — giant spiders — came in and surrounded the grove, out of every "
            "grove, from every direction at once.\n\n"
            "Markop felt a shadow come over him and then a blaze of heat off his own shoulder as fire "
            "went past his ear and into the ettercap.\n\n"
            "A spider got to Salam. It clawed across his face, opened it, and he went down "
            "unconscious. It will scar.\n\n"
            "A Legion guard was killed by a spider. At the same moment, on the other side of the "
            "grove, Markop was attacked again.\n\n"
            "**Salam has fallen.**"
        ),
        "waluigi_note": (
            "*Salam. Last filing he crossed forty feet of open ground under a murder of crows to "
            "stabilise a man he barely knows, and said 'your service won't go in vain' to somebody "
            "who was still breathing. This filing he is face down in a dead grove with his face "
            "opened and the only healer in the party is the man he saved. Waluigi wants the symmetry "
            "on the record and wants somebody to go and get him.*"
        ),
    },
]

PARTICIPANTS = [
    {"id": "remi_akamatsu_full_backstory", "name": "Remi Akamatsu",
     "role": "Swapped the crossbow for the musket and landed two direct hits; webbed and clawed; thrown clear by Mossy; found the breathing man with the red punch mark and had the steel defender stand on him"},
    {"id": "markop", "name": "Markop",
     "role": "Called down divine favour through the warhammer, took a scythe to the skull, and executed the kneeling Scorncrow; took the scythe afterwards"},
    {"id": "scorncrow", "name": "The Scorncrow",
     "role": "Hurled the cleaving scythe, split Markop's skull, claimed the tree as its childhood home, offered Archie a place on the tree of love, and was killed on its knees asking a paladin for mercy"},
    {"id": "dan_the_toad", "name": "Feyward Dan",
     "role": "Stood in front of everyone including Markop, turned the spiders with a mushroom-studded holy symbol, and killed the ettercap in concert with Eager"},
    {"id": "eager", "name": "Eager",
     "role": "Took the scythe wake, sneak-attacked the distracted spider, ran into a spidery bush, healed himself with duct tape"},
    {"id": "archie_miser", "name": "Archie Miser",
     "role": "Took the scythe wake, faked a fireball and delivered a firebolt, refused the Scorncrow's recruitment, and negotiated the temporary Legion alliance in which he is to be arrested afterwards"},
    {"id": "salam", "name": "Salam",
     "role": "Missed the ettercap, then was clawed across the face and fell unconscious — the session ends with him down"},
    {"id": "wario", "name": "Wario",
     "role": "Announced he was tired of running after roughly six seconds of running, landed an off-screen punch, and offered to leave when blamed"},
    {"id": "mossy", "name": "Mossy",
     "role": "Rammed Remi clear of a killing bite, then stood on an unconscious man's ribcage on instruction until something cracked"},
    {"id": "embercap", "name": "Embercap",
     "role": "Arrived with the encircling brood; fire past Markop's shoulder into the ettercap"},
    {"id": "iron_legion", "name": "Iron Legion guards",
     "role": "Called for pest control, retreated, attempted to arrest Archie mid-battle, negotiated a temporary alliance, and took at least one fatality"},
]

NOTABLE = [
    "Remi put the crossbow arrow back in her pocket and chose the musket — two direct hits, reloading in the open between them",
    "The Scorncrow's thrown scythe cleaves everything in its path and drags a chilling cold through the wake — it grazed Eager, Archie and Dan on one line",
    "Feyward Dan stood in front of the entire party, including Markop, and turned the brood with a mushroom-studded holy symbol",
    "Markop's warhammer took a thunderstrike through a ceiling that has no sky — divine favour held since before the rope",
    "The Scorncrow claims it grew up in the tree: 'made it my treehouse when I was little'",
    "'Do you think the worst person can change?' — a recruitment offer to Archie, and the tree of love",
    "The Iron Legion attempted to arrest Archie Miser in the middle of a losing fight and settled for a temporary alliance instead",
    "Three party members gave three different answers for where they were standing: down a rope, the undergrowth, and the ruined manor",
    "Mossy rammed Remi out of a killing bite and later cracked an unconscious man's ribcage on her instruction",
    "A breathing man with a fresh red punch mark on his forehead, found alone in the woods",
    "The Scorncrow was killed while kneeling, unmasked, identifying itself as human and asking a paladin for mercy",
    "Markop took the scythe from the body",
    "Salam has fallen",
]

AFTERMATH = (
    "**The Scorncrow is dead.** It was killed on its knees, unmasked, after identifying itself as "
    "human and formally asking a paladin for mercy. Markop took the scythe. The claim it made four "
    "times across four engagements — *I am not a monster* — was tested by musket last filing and "
    "found to be true, and it was killed anyway. The archive is not going to record that as clean.\n\n"
    "**Salam is down** with his face opened and has not been recovered. Feyward Dan, the only "
    "healer on the field, spent every point of magic he owned on himself an hour ago.\n\n"
    "**Markop's skull is split** and he continued fighting through it. **Remi** is separated in the "
    "woods, her armour destroyed, standing over an unconscious man whose ribs her steel defender "
    "has just cracked on her instruction. She believes she may have killed him in his sleep.\n\n"
    "**The Iron Legion alliance is explicitly temporary** and ends with Archie Miser's arrest. "
    "Archie's own assessment: *this won't last.* At least one guard is dead.\n\n"
    "**The grove is still surrounded.** Embercap and giant spiders came in from every direction as "
    "the Scorncrow fell, so killing the thing that owned the place did not empty it.\n\n"
    "**Unresolved:** the man with the red punch mark. Where the party actually is — rope-lair, "
    "undergrowth, or ruined manor, with Markop's teleporter reading unconfirmed. And what the "
    "Scorncrow meant by growing up in a tree the party has been standing inside all night."
)

ASSESSMENT = (
    "**The execution is the filing and everything else is weather.** Waluigi has written the word "
    "*monster* about that thing in three separate articles and had to retract it last filing when a "
    "fourteen-year-old put a musket against its face and found a man underneath. This filing it "
    "knelt. It said it was human. It asked a paladin, by his office, to spare it. Markop killed it "
    "and took its scythe.\n\n"
    "**Waluigi is not calling that murder and he is not calling it justice.** The thing had four "
    "engagements of casualties behind it and had opened Markop's skull ninety seconds earlier. But "
    "the archive got caught once assuming this creature was lying, and the correction does not "
    "become free just because the creature is now dead. Both facts go in the same paragraph or "
    "neither of them is honest.\n\n"
    "**Remi Akamatsu is not the youngest member any more and the archive should stop filing her that "
    "way.** She changed weapons under contact because the crossbow was wrong for the target, "
    "reloaded a musket in the open twice, and read her spellbook while tied up with something "
    "descending on her. She also ordered a steel dog to stand on a sleeping man until he cracked. "
    "Both of those are the same person and Waluigi declines to separate them.\n\n"
    "**Feyward Dan stood in front of Markop.** The smallest combatant put himself ahead of the "
    "largest. Waluigi has been unkind about this Toad in print for four filings and is revising it "
    "here rather than letting it quietly lapse.\n\n"
    "**The position is worse than when they came down the rope.** The Scorncrow is dead, and the "
    "grove is surrounded, Salam is down, Markop is bleeding from the head, Remi is separated, the "
    "exit is still sealed, and the party's allies are the people who intend to arrest one of them. "
    "Killing the landlord did not clear the building."
)

XP = [
    ("remi", "remi_akamatsu_full_backstory", "Remi", "combat", 360,
     "Two direct musket hits through smoke, including a weapon swap under contact and a reload in the open."),
    ("remi", "remi_akamatsu_full_backstory", "Remi", "discovery", 240,
     "Found the breathing man with the red punch mark alone in the woods after being thrown clear."),
    ("markop", "markop", "Markop", "faith", 420,
     "Held divine favour since before the descent and called thunder through the warhammer into the Scorncrow."),
    ("markop", "markop", "Markop", "combat", 300,
     "Fought on with a split skull and ended the Scorncrow."),
    ("feywarddan", "dan_the_toad", "Feyward Dan", "faith", 340,
     "Stood in front of the entire party including Markop and turned the brood with a holy symbol."),
    ("eager", "eager", "Eager", "combat", 260,
     "Sneak attack into Dan's distraction, and the concerted kill on the ettercap."),
    ("archie", "archie_miser", "Archie Miser", "diplomacy", 280,
     "Refused the Scorncrow's recruitment and negotiated the temporary Legion alliance from inside a losing fight."),
    ("salam", "salam", "Salam", "loyalty", 200,
     "Held the line until a spider opened his face; fell unconscious and was not recovered."),
    ("wario", "wario", "Wario", "chaos", 160,
     "Declared himself tired of running after approximately six seconds of running."),
    ("mossy", "mossy", "Mossy", "loyalty", 180,
     "Rammed Remi clear of a killing bite at speed, saving her life."),
]

RELATED = [
    "the_belly_of_the_beast", "the_scorncrow_skirmish", BATTLE_ID, "skittering_grove",
    "scorncrow", "remi_akamatsu_full_backstory", "markop", "archie_miser", "wario",
    "dan_the_toad", "salam", "eager", "mossy", "embercap", "green_t", "silent_grove",
    "iron_legion",
]


def event_record():
    return {
        "id": EVENT_ID,
        "timeCode": TIME_CODE,
        "name": "Judgement in the Grove",
        "title": TITLE,
        "date": DATE,
        "era": ERA,
        "location": "The Skittering Grove, inside the Scorncrow's tree (Shadowfell)",
        "type": "Session Event / Grove Battle / Execution",
        "status": ("Unresolved — the Scorncrow is dead but the grove is surrounded, Salam is down and "
                   "unrecovered, Markop's skull is split, Remi is separated over a man she may have "
                   "killed, and the Legion alliance ends in Archie's arrest"),
        "summary": SUMMARY,
        "description": DESCRIPTION,
        "image": f"{JIG}/jig-01-warhammer.jpg",
        "imageCaption": ("The moment before judgement. The Scorncrow on its knees with the scythe "
                         "fallen out of reach, hood off, the face underneath plainly human and "
                         "still asking; Markop at the top of the swing. The archive files this as "
                         "neither murder nor justice."),
        "sections": SECTIONS,
        "participants": PARTICIPANTS,
        "outcome": ("The Scorncrow is dead — executed while kneeling and asking for mercy — and Markop "
                    "carries its scythe. The party's position is worse than before the kill: the grove "
                    "is surrounded by Embercap and giant spiders, Salam has fallen, Markop is bleeding "
                    "from a split skull, Remi is separated in the woods with an unconscious man, and "
                    "the Iron Legion alliance is temporary and ends with Archie Miser under arrest."),
        "notableFeatures": NOTABLE,
        "keyBattles": [BATTLE_ID],
        "relatedArticles": RELATED,
        # The Iron Legion is authored NEGATIVE despite the alliance. It called
        # for pest control, retreated, took the party's help, and served a
        # warrant on Archie mid-battle. Heavy engagement belongs on the
        # Pressure axis; it is not approval. The personal deltas live here on
        # the event; the battle record carries `effects` only, so the session
        # is not counted twice into anyone's standing.
        "reputationChanges": {
            "markop": {"disaster_inc": 5, "oathbound_judges": -9, "liberated_toads": -4},
            "remi_akamatsu_full_backstory": {"disaster_inc": 6, "iron_legion": -3},
            "archie_miser": {"iron_legion": -12, "disaster_inc": 3},
            "dan": {"liberated_toads": 7},
            "eager": {"liberated_toads": 4},
        },
        "effects": {"iron_legion": -8, "disaster_inc": 6},
        "reputationNotes": {
            "markop": (
                "Executed the Scorncrow on its knees, unmasked, after it identified "
                "itself as human and formally asked a paladin for mercy. The archive is "
                "not recording that as clean, and neither are the Judges."
            ),
            "remi_akamatsu_full_backstory": (
                "Two direct musket hits through the smoke, reloading in the open between "
                "them; armour destroyed, and she stood."
            ),
            "archie_miser": (
                "Negotiated the temporary alliance that ends in his own arrest. The "
                "Legion took the help and served the warrant anyway."
            ),
            "dan": (
                "Stood in front of the entire party including Markop and turned the "
                "brood with a mushroom-studded holy symbol."
            ),
            "eager": (
                "Concerted kill on the ettercap with Dan, after a sneak attack into the "
                "distraction Dan bought him."
            ),
            "_record": (
                "The Iron Legion called for pest control, retreated, accepted an "
                "alliance, and used it to attempt an arrest mid-battle. The relationship "
                "is worse than before it started; the heavy engagement belongs on the "
                "Pressure axis, not on Standing."
            ),
        },
        "aftermath": AFTERMATH,
        "waluigiAssessment": ASSESSMENT,
        "timeWindow": ("1 Aethel, 1040 BF — one continuous engagement inside the Skittering Grove, past "
                       "running out of the descent and ending with Salam unconscious and the grove "
                       "encircled"),
        "xpAwards": [
            {"xpKey": k, "articleId": a, "name": n, "cat": c, "xp": x,
             "title": "Event — Judgement in the Grove", "desc": d,
             "date": "1 Aethel, 1040 BF", "dateSort": 10409010}
            for k, a, n, c, x, d in XP
        ],
    }


def battle_record():
    return {
        "id": BATTLE_ID,
        "name": "Judgement in the Grove",
        "date": DATE,
        "location": "The Skittering Grove, inside the Scorncrow's tree (Shadowfell)",
        "type": "Grove battle / execution",
        "result": ("Scorncrow killed; party position deteriorated. The grove was reinforced from every "
                   "direction as the Scorncrow fell."),
        "engagement": {
            "combatants": 16,
            "ledgerWindow": ("the Skittering Grove inside the Scorncrow's tree, continuous from the "
                             "descent on 30 Harvestide, 1040 BF and running past midnight onto "
                             "1 Aethel on the Shadowfell clock"),
            "scale": ("A squad-level engagement in three phases: a disorganised fight in smoke and "
                      "web, a duel closed by divine favour, and an execution followed immediately "
                      "by reinforcement from every direction."),
        },
        "belligerents": {
            "attackers": {
                "name": "Disaster Inc. & the Liberated Toads",
                "factionId": "disaster_inc",
                "commander": "Markop",
                "combatants": [
                    {"name": "Markop", "leader": True, "fate": "wounded",
                     "role": "closed the distance under the scythe, called thunder into the warhammer, and executed the kneeling Scorncrow",
                     "fateNote": "skull split by the scythe and fought on; took the scythe from the body"},
                    {"name": "Remi Akamatsu", "fate": "stood",
                     "role": "swapped the crossbow for the musket and landed two direct hits, reloading in the open between them",
                     "fateNote": "webbed and clawed, armour destroyed, rammed clear by Mossy and separated in the woods"},
                    {"name": "Feyward Dan", "fate": "stood",
                     "role": "stood in front of the entire party including Markop and turned the brood with a mushroom-studded holy symbol",
                     "fateNote": "killed the ettercap in concert with Eager"},
                    {"name": "Eager", "fate": "wounded",
                     "role": "sneak attack into Dan's distraction; concerted kill on the ettercap",
                     "fateNote": "grazed by the scythe wake; ran into a spidery bush; healed himself with duct tape"},
                    {"name": "Archie Miser", "fate": "stood",
                     "role": "faked a fireball and delivered a firebolt; refused the Scorncrow's recruitment offer",
                     "fateNote": "grazed by the scythe wake; negotiated the temporary Legion alliance that ends in his own arrest"},
                    {"name": "Salam", "fate": "fell",
                     "role": "missed the ettercap, then held position as the second wave came in",
                     "fateNote": "clawed across the face and unconscious; the wound will scar; not recovered"},
                    {"name": "Wario", "fate": "stood",
                     "role": "an off-screen punch and a declaration that he was tired of running",
                     "fateNote": "had been running for approximately six seconds"},
                    {"name": "Mossy", "fate": "stood",
                     "role": "rammed Remi clear of a killing bite at a dead run",
                     "fateNote": "later stood on an unconscious man's ribcage on Remi's instruction until something cracked"},
                    {"name": "Embercap", "fate": "stood",
                     "role": "arrived with the encircling wave; fire past Markop's shoulder into the ettercap"},
                ],
            },
            "defenders": {
                "name": "The Scorncrow and the brood of the Skittering Grove",
                "factionId": "unaligned",
                "commander": "The Scorncrow",
                "combatants": [
                    {"name": "The Scorncrow", "leader": True, "fate": "fell",
                     "role": "hurled the cleaving scythe, split Markop's skull, and offered Archie a place on the tree of love",
                     "fateNote": "killed on its knees, unmasked, identifying itself as human and asking a paladin for mercy"},
                    {"name": "Ettercap", "fate": "fell",
                     "role": "webbed and clawed Remi; broke off to meet Dan and Eager",
                     "fateNote": "killed by a concerted strike from Feyward Dan and Eager"},
                    {"name": "Giant green spiders", "fate": "stood",
                     "role": "web and claw across the canopy; two dropped by Remi's musket",
                     "fateNote": "reinforced from every direction as the Scorncrow fell"},
                ],
            },
            "thirdParty": {
                "name": "Iron Legion grove detachment",
                "factionId": "iron_legion",
                "commander": "Unnamed guard",
                "combatants": [
                    {"name": "Iron Legion guards", "fate": "withdrew",
                     "role": "called for pest control and retreated, then attempted to arrest Archie Miser mid-battle",
                     "fateNote": "negotiated a temporary alliance; at least one guard killed by a spider"},
                ],
            },
        },
        "casualties": ("The Scorncrow killed. At least one ettercap killed by Dan and Eager in concert; "
                       "two more dropped by Remi's musket. At least one Iron Legion guard killed. "
                       "Salam unconscious with a facial wound that will scar. Markop's skull split. "
                       "Remi webbed, clawed and separated; armour destroyed."),
        "summary": ("Remi swapped to the musket and hit twice through the smoke. The Scorncrow's thrown "
                    "scythe grazed Eager, Archie and Dan on one line. Dan stood in front of the whole "
                    "party and turned the brood with a holy symbol; he and Eager killed the ettercap. "
                    "Markop called thunder into his warhammer, took a scythe to the skull, and killed "
                    "the Scorncrow while it knelt asking a paladin for mercy. Mossy rammed Remi clear "
                    "of a killing bite. Embercap and a second wave encircled the grove and Salam fell."),
        "description": ("The engagement had three distinct phases. The first was a disorganised fight in "
                        "smoke and web where nobody could hold direction and Remi walked into the enemy "
                        "by accident. The second was the Scorncrow choosing to spread its cleaving "
                        "scythe across three bodies rather than kill one, and the Iron Legion breaking "
                        "and calling for pest control. The third was Markop closing the distance and "
                        "refusing to be talked to — through the recruitment offer, through the "
                        "childhood claim, through the surrender, and through the appeal to his office. "
                        "The kill did not end the battle. Reinforcements arrived from every direction "
                        "as the body fell, and the session ended with Salam unconscious."),
        "keyMoments": [
            {"time": "opening", "who": "Remi Akamatsu",
             "act": "Returns the crossbow arrow to her pocket and takes the musket instead",
             "result": "two direct hits through the smoke, with a reload in the open between them"},
            {"time": "opening", "who": "The Scorncrow",
             "act": "Hurls the cleaving scythe, shrouded in magic, trailing a chilling cold",
             "result": "grazes Eager, Archie and Dan on one line rather than killing any of them"},
            {"time": "collapse", "who": "Iron Legion guards",
             "act": "Break and call for pest control",
             "result": "'We gotta call pest control. RETREAT!'"},
            {"time": "turn", "who": "Feyward Dan",
             "act": "Stands in front of the entire party, including Markop, and raises a mushroom-studded holy symbol",
             "result": "the brood is turned; he and Eager kill the ettercap together"},
            {"time": "turn", "who": "Markop",
             "act": "Calls divine favour held since before the rope; thunder comes through a ceiling with no sky",
             "result": "the warhammer lands, the Scorncrow's block fails, and it flinches for the first time in four engagements"},
            {"time": "turn", "who": "The Scorncrow",
             "act": "Splits Markop's skull with the scythe and claims the tree as its childhood home",
             "result": "'Made it my treehouse when I was little' — the second physical claim after the human blood"},
            {"time": "parley", "who": "The Scorncrow",
             "act": "Offers Archie a place on the tree of love: 'Do you think the worst person can change?'",
             "result": "refused — 'I'm on the side of good, despite all my accidental crimes'"},
            {"time": "parley", "who": "Iron Legion guards",
             "act": "Attempt to arrest Archie Miser in the middle of a losing fight",
             "result": "a temporary alliance instead, ending with Archie's arrest — 'this won't last'"},
            {"time": "rescue", "who": "Mossy",
             "act": "Rams Remi side-on at a dead run as a spider comes down to bite",
             "result": "she is thrown clear through the branches and lands alone in the woods"},
            {"time": "decision", "who": "The Scorncrow",
             "act": "Kneels, says it is human and not a monster, and asks a paladin by his office to spare it",
             "result": "Markop kills it and picks up the scythe"},
            {"time": "aftermath", "who": "Remi Akamatsu",
             "act": "Finds a breathing man with a red punch mark and has Mossy stand on his chest to wake him",
             "result": "a crack is heard — 'welp, I killed a guy in his sleep'"},
            {"time": "aftermath", "who": "The brood",
             "act": "Embercap and giant spiders encircle the grove from every direction",
             "result": "Salam is clawed across the face and falls; a Legion guard is killed"},
        ],
        "aftermath": ("The Scorncrow is dead and the grove is not cleared. Salam is unconscious and "
                      "unrecovered. Remi is separated with an unconscious man whose ribs Mossy cracked "
                      "on her order. The Legion alliance is temporary and ends in Archie's arrest."),
        "relatedArticles": [EVENT_ID, "the_belly_of_the_beast", "scorncrow", "markop",
                            "remi_akamatsu_full_backstory", "skittering_grove"],
        # Record-level only. Personal deltas are filed on the event above; the
        # engine sums events and battles alike, so authoring both halves of a
        # session would count every operator twice.
        "reputationChanges": {},
        "effects": {"iron_legion": -6, "disaster_inc": 5},
        "reputationNotes": {
            "_record": (
                "Personal deltas for this engagement are filed on its event, "
                "judgement_in_the_grove. This record carries the factional outcome only, "
                "so the session is not counted twice into any operator's standing."
            ),
        },
        "image": f"{JIG}/jig-01-warhammer.jpg",
        "imageCaption": "The Skittering Grove, where the Scorncrow was brought down on its knees.",
    }


SITE_UPDATE = {
    "id": EVENT_ID,
    "kind": "event",
    "label": "Latest Session · Judgement in the Grove",
    "title": TITLE,
    "summary": SUMMARY,
    "tags": ["latest", "shadeward", "scorncrow", "markop", "remi", "feyward dan",
             "salam", "iron legion", "skittering grove"],
}

COVER = {
    "id": "judgement-in-the-grove-cover",
    "campaign": "Shadeward",
    "title": "SHADEWARD — Judgement in the Grove",
    "caption": ("The Scorncrow dies on its knees asking a paladin for mercy; the grove fills from "
                "every direction and Salam does not get up."),
    "image": f"{JIG}/jig-01-warhammer.jpg",
    "articleId": EVENT_ID,
}

def load(name):
    return json.loads((DATA / name).read_text(encoding="utf-8"))


def dump(name, obj):
    (DATA / name).write_text(json.dumps(obj, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def upsert(container, key, record):
    """Replace the record with this id, or append it. Keeps ordering stable."""
    for i, existing in enumerate(container):
        if existing.get(key) == record[key]:
            container[i] = record
            return "updated"
    container.append(record)
    return "appended"


# Salam is clawed across the face in section IX and the record says the wound
# scars. The archive therefore carries a post-injury likeness for him from this
# filing forward, and his status line stops describing him as on his feet.
SALAM_PORTRAIT = "portraits/salam_scarred.png"
SALAM_STATUS = ("Fallen and unrecovered — clawed across the face in the Skittering Grove on "
                "1 Aethel, 1040 BF and left unconscious as the brood closed from every direction. "
                "The wound scars; the archive carries a post-injury likeness from this filing on.")


def salam_row(chars):
    rows = chars["characters"] if isinstance(chars, dict) else chars
    return next((c for c in rows if c.get("id") == "salam"), None)



def build(check=False):
    problems, notes = [], []

    events = load("events.json")
    ev_list = events["events"] if isinstance(events, dict) else events
    battles = load("battles.json")
    ba_list = battles["battles"] if isinstance(battles, dict) else battles
    mainpage = load("mainPage.json")
    chars = load("characters.json")

    ev = event_record()
    ba = battle_record()

    # --- referential integrity, before anything is written -------------------
    known = {e.get("id") for e in ev_list} | {b.get("id") for b in ba_list}
    for name in ("characters", "locations", "factions"):
        try:
            doc = load(f"{name}.json")
            rows = doc if isinstance(doc, list) else (doc.get(name) or [])
            known |= {r.get("id") for r in rows if isinstance(r, dict)}
        except Exception:
            pass
    known |= {EVENT_ID, BATTLE_ID}
    for ref in ev["relatedArticles"]:
        if ref not in known:
            problems.append(f"relatedArticles id does not resolve: {ref}")
    for p in ev["participants"]:
        if p["id"] not in known:
            notes.append(f"participant id not in a registry (ok for groups): {p['id']}")

    # Every image this filing claims must exist on disk. A wrong path fails
    # silently to a placeholder in the browser, so it is checked here instead.
    for label, rel in ([("event image", ev["image"]),
                        ("battle image", ba["image"]),
                        ("cover image", COVER["image"])]
                       + [(f"section image ({sec['name']})", sec["image"])
                          for sec in ev["sections"] if sec.get("image")]):
        if not (ROOT / "Reputation-Matrix2" / rel).exists():
            problems.append(f"{label} missing: {rel}")

    # Salam takes a permanent facial scar in this session, so the archive
    # carries a post-injury likeness from here on.
    if not (ROOT / "portraits" / "salam_scarred.png").exists():
        problems.append("portraits/salam_scarred.png missing (Salam's post-injury portrait)")

    if problems:
        for p in problems:
            print("FAIL", p)
        return 1

    if check:
        cur = next((e for e in ev_list if e.get("id") == EVENT_ID), None)
        if cur != ev:
            print("judgement in the grove: filed event does not match the generator")
            print("  re-run: python3 tools/build-judgement-in-the-grove.py")
            return 1
        cur_b = next((b for b in ba_list if b.get("id") == BATTLE_ID), None)
        if cur_b != ba:
            print("judgement in the grove: filed battle does not match the generator")
            return 1
        # Front-page wiring - the part that was missed last time.
        if (mainpage.get("latestUpdate") or {}).get("id") != EVENT_ID:
            print("judgement in the grove: mainPage.latestUpdate is not this event")
            return 1
        if (mainpage.get("featuredArticle") or {}).get("id") != EVENT_ID:
            print("judgement in the grove: mainPage.featuredArticle is not this event")
            return 1
        cover_rows = mainpage.get("campaignCovers") or []
        covers = {c.get("articleId") for c in cover_rows}
        if EVENT_ID not in covers:
            print(f"judgement in the grove: Current fronts is missing {EVENT_ID}")
            return 1
        # One front per campaign, or a campaign crowds the others off the strip.
        seen = {}
        for c in cover_rows:
            camp = c.get("campaign") or ""
            if camp in seen:
                print(f"judgement in the grove: Current fronts has two {camp} covers "
                      f"({seen[camp]} and {c.get('articleId')})")
                return 1
            seen[camp] = c.get("articleId")
        html = INDEX.read_text(encoding="utf-8")
        if f'"id": "{EVENT_ID}"' not in html.split("let SITE_UPDATES=[", 1)[-1][:4000]:
            print("judgement in the grove: SITE_UPDATES does not lead with this event")
            return 1
        row = salam_row(chars)
        if not row:
            print("judgement in the grove: salam is missing from characters.json")
            return 1
        if row.get("image") != SALAM_PORTRAIT or row.get("status") != SALAM_STATUS:
            print("judgement in the grove: Salam's portrait/status do not match the generator")
            return 1
        print("judgement in the grove: event, battle, front page and Salam all match "
              "the generator.")
        return 0

    # --- write ---------------------------------------------------------------
    a1 = upsert(ev_list, "id", ev)
    a2 = upsert(ba_list, "id", ba)
    dump("events.json", events)
    dump("battles.json", battles)

    row = salam_row(chars)
    if row is not None:
        row["image"] = SALAM_PORTRAIT
        row["status"] = SALAM_STATUS
        dump("characters.json", chars)

    # Latest filing + featured.
    mainpage["latestUpdate"] = {
        "id": EVENT_ID,
        "label": "Latest Filing · Session Event",
        "excerpt": SUMMARY,
        "title": TITLE,
    }
    mainpage["featuredArticle"] = {
        "id": EVENT_ID,
        "type": "event",
        "excerpt": SUMMARY,
        "label": "Latest Filing · Session Event",
        "title": TITLE,
    }

    # Current fronts: exactly ONE cover per campaign, newest filing first.
    # A campaign occupying two cards pushes another campaign off the strip, so
    # this filing REPLACES the Shadeward cover rather than stacking on top of
    # it. The Belly of the Beast and the Scorncrow Skirmish are both Shadeward
    # and both older, so both drop out.
    dump("mainPage.json", mainpage)
    # Current fronts are DERIVED, not written here. This generator used to
    # hand-place its own cover row, which is exactly how the Mario and Feyward
    # fronts went stale - a filing only ever fixed its own campaign and left
    # the others pointing at whatever was curated last. Delegate to
    # build-campaign-fronts.py, which picks the newest imaged filing per
    # campaign from the timeCode suffix and rewrites the whole strip.
    subprocess.run([sys.executable, str(ROOT / "tools" / "build-campaign-fronts.py"),
                    "--write"], check=True)
    mainpage = load("mainPage.json")
    covers = [c for c in mainpage.get("campaignCovers") or []
              if (c.get("campaign") or "") != COVER["campaign"]]

    # SITE_UPDATES, newest first.
    html = INDEX.read_text(encoding="utf-8")
    marker = "let SITE_UPDATES=["
    i = html.index(marker) + len(marker)
    # Drop a previous entry for this event if the generator is re-run.
    entry = json.dumps(SITE_UPDATE, ensure_ascii=False)
    tail = html[i:]
    tail = re.sub(r'^\{"id": "%s".*?\}, ' % re.escape(EVENT_ID), "", tail, count=1, flags=re.S)
    html = html[:i] + entry + ", " + tail
    INDEX.write_text(html, encoding="utf-8")

    print(f"events.json   {a1}   {EVENT_ID}")
    print(f"battles.json  {a2}   {BATTLE_ID}")
    print(f"mainPage.json latestUpdate + featuredArticle -> {EVENT_ID}")
    print(f"mainPage.json Current fronts  -> {COVER['campaign']}: {EVENT_ID} "
          f"(one per campaign, {len(covers)} other campaign(s) kept)")
    print(f"index.html    SITE_UPDATES prepended")
    for n in notes:
        print("  note:", n)
    return 0


if __name__ == "__main__":
    raise SystemExit(build(check="--check" in sys.argv))
