#!/usr/bin/env python3
"""File Waluigi's Cut for `judgement_in_the_grove`.

One source of truth for the commentary record. Run with no arguments to write
it, with --check to verify the filed copy still matches.

    python3 tools/build-judgement-commentary.py
    python3 tools/build-judgement-commentary.py --check

A note on why this cut is written the way it is. `docs/COMMENTARY_MODE_GUIDE.md`
lists executions and character deaths as POOR candidates for the mode - "Waluigi
is petty, not heartless". This session contains both: a kneeling man killed
mid-appeal, and Salam falling. The cut is filed anyway because the session's
loudest material is not the killing, it is the farce around it - a musket
reloaded in the open, a paladin the size of a stool standing in front of a
centaur, an arrest warrant served in the middle of a losing fight, a geography
argument conducted while surrounded. So the voice runs hot over the comedy and
comes off it for the execution and for Salam, which is the guide's own
"let him be right, then make him pay for it" beat used structurally.
"""
import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"

SOURCE_ID = "judgement_in_the_grove"
COMMENTARY_ID = f"{SOURCE_ID}_commentary"

SECTIONS = [
    {
        "id": "the-smoke-and-the-musket",
        "icon": "🌫️",
        "heading": "Waluigi Was Not There, Which Is The Only Reason Waluigi Is Still Funny",
        "body": (
            "Waluigi was not in that grove. Waluigi wants that at the top, in writing, before a "
            "single joke, because this filing ends with a man on his knees and Waluigi is about to "
            "be extremely loud for three thousand words on the way there.\n\n"
            "Here is how it opens. Remi says \"it's a little smoky in here\" and walks back the way "
            "she thinks she came, which in a grove with no sky is a SENTENCE WITH NO MEANING. There "
            "is no back. There is no way she came. She gets turned around in the smoke and walks "
            "directly into the spiders. Waluigi has read a lot of filings that begin with a plan. "
            "This one begins with a girl getting lost indoors.\n\n"
            "And then she does the best thing anybody does all night, and Waluigi needs the reader "
            "to slow down for it, because it will be buried under a scythe in about ninety seconds.\n\n"
            "She draws a crossbow arrow. She looks at the ettercap. AND SHE PUTS THE ARROW BACK IN "
            "HER POCKET. Back in the pocket. She takes out the musket instead, and she hits it, "
            "directly, first shot.\n\n"
            "Waluigi wants to explain why that is the single most professional act in this entire "
            "document. A crossbow is fast. A musket is not. A musket is a decision you have to live "
            "inside for a very long time afterwards, and she took it in the middle of a smoke bank "
            "with spiders already moving. She did the arithmetic and she took the SLOW LOUD OPTION "
            "because the slow loud option was the one that would actually land.\n\n"
            "Then she reloads it. Slowly. In the open. The record says — and Waluigi loves this "
            "line, Waluigi would like it carved above the door — \"they stand there.\" Everybody "
            "just STANDS THERE while the fourteen-year-old works a ramrod down a barrel in front of "
            "a hostile brood. And then she hits it again.\n\n"
            "Two direct hits. In smoke. With a reload in the open in between. Waluigi has personally "
            "watched grown adventurers with better equipment and worse manners fail to do that twice "
            "in a career.\n\n"
            "Meanwhile the Scorncrow is having a conversation. \"You invaded my home, right?\" it "
            "says, which Waluigi initially filed as villain patter and now has to sit with, because "
            "of what it says twenty minutes later about a treehouse. Markop asks the practical "
            "question — will the spiders attack — and the thing answers him honestly. \"They'll come "
            "around.\" It is not bluffing. It is giving him a weather report. WAH. Nobody adjusts.\n\n"
            "And Waluigi wants one more thing on the record before the scythe comes out, because it "
            "will be impossible to say gracefully afterwards. Everything in this opening is somebody "
            "making a small correct decision inside a situation that is already lost. Remi trades "
            "speed for accuracy. Markop asks for a threat assessment instead of charging. Those are "
            "GOOD INSTINCTS. Waluigi has spent multiple filings complaining that this party plans "
            "like a bar fight, and here they are, in the dark, with no exit and no sky, quietly "
            "doing it properly.\n\n"
            "It does not help even slightly. Waluigi wants the reader to carry that forward into "
            "every remaining section, because the temptation at the end of this filing is going to "
            "be to say they got what was coming to them. They did not. THEY PLAYED IT WELL AND THE "
            "GROVE DID NOT CARE, and those are two separate facts, and Waluigi is going to keep them "
            "separate no matter how badly the last page wants to merge them."
        ),
    },
    {
        "id": "the-scythe-and-the-retreat",
        "icon": "🌀",
        "heading": "The Scythe Grazes Three People And The Iron Legion Calls Pest Control",
        "body": (
            "The Scorncrow hurls the scythe. Waluigi is quoting the record directly here because the "
            "record earned it: its spinning form shrouded in powerful magic, cleaving everything in "
            "its path, CHILLING COLD CUTTING THROUGH ANYONE CAUGHT IN THE WAKE.\n\n"
            "It hits Eager. It hits Archie. It hits Dan. Three people on one line.\n\n"
            "And it grazes all three. Waluigi wants the reader to hold those two facts next to each "
            "other, because a weapon that cleaves everything in its path hit three separate bodies "
            "and killed none of them. Either this party is the luckiest collection of idiots in the "
            "Shadowfell, or that throw was never meant to kill anybody. Waluigi is not going to tell "
            "you which. Waluigi is merely observing that the thing spent its biggest swing on a line "
            "that inconvenienced three people and removed none, and that a tactician who opened the "
            "LAST session by deleting the healer first does not usually miss by accident.\n\n"
            "Then a spider goes for Eager, Markop hits it back, and Markop — the record is very "
            "clear — goes THUMP THUMP. A giant green spider goes thump thump toward the Iron Legion "
            "guards. Waluigi has read this passage six times and Waluigi is confident the archive is "
            "meant to hear hooves and legs at the same time, in the dark, closing.\n\n"
            "Remi gets webbed. She is damaged and clawed at and her clothes are ripped and she yells "
            "\"WHY. WHYYYY.\" Waluigi has nothing clever for that. That is just a child getting hurt "
            "in the dark and asking the only question available.\n\n"
            "And the Iron Legion — the IRON LEGION, the standing military apparatus of this "
            "continent, the organisation that has spent multiple filings arresting Waluigi's "
            "colleagues on procedural grounds — looks at the spiders and says:\n\n"
            "> \"We gotta call pest control. RETREAT!\"\n\n"
            "PEST CONTROL. Waluigi is going to be annoyed about this for the rest of Waluigi's life "
            "and Waluigi is ALSO never going to let it go. That is a professional soldier, in "
            "armour, inside a hostile pocket dimension, requesting an exterminator. There is no "
            "exterminator. There is no telephone. There is no sky. WAH.\n\n"
            "And Remi, tied up, with another spider walking toward her, says \"come on, I'm looking "
            "at my spells\" — with the book IN FULL VIEW. Waluigi would like the reader to picture "
            "the composition: a webbed teenager openly consulting the manual while something with "
            "eight legs approaches, asking the table for a minute. Waluigi has never loved this "
            "archive more than in that exact sentence."
        ),
    },
    {
        "id": "the-paladin-and-the-thunder",
        "icon": "⚡",
        "heading": "Feyward Dan Stands In Front Of Everyone, Including The Centaur",
        "body": (
            "Now Waluigi has to be sincere for a paragraph, and Waluigi resents it.\n\n"
            "Feyward Dan stands in front of everyone. The record specifies: INCLUDING MARKOP. "
            "Waluigi needs the reader to understand the physical comedy and the actual courage "
            "sitting in the same image, because they are inseparable. Markop is an armoured centaur. "
            "He is enormous. Feyward Dan is a toad who comes up to roughly the centaur's knee, and "
            "he walked past him to be the thing standing closest to the Scorncrow.\n\n"
            "Then he gets out a religious symbol STUDDED WITH MUSHROOMS and points it at the brood, "
            "and the brood turns. Waluigi has filed a lot of holy symbols. None of them had "
            "mushrooms on. This one worked. Waluigi is forced to concede that the mushrooms may not "
            "be the decorative part.\n\n"
            "Dan moves behind the spider. Dan swings once, Eager sneak attacks, and the spider "
            "ROARS. Eager then runs while it is distracted and immediately runs INTO A SPIDERY BUSH, "
            "which Waluigi considers the most Eager sequence ever recorded: flawless tactical "
            "execution followed instantly by walking into the scenery.\n\n"
            "Markop walks past the spider. It bites at him. It misses. He does not even turn around "
            "for it — he is already facing the Scorncrow, and the Scorncrow greets him with \"oh, "
            "you come to offer your head, how vigilant.\"\n\n"
            "Markop says nothing. Waluigi wants that noted, because Markop is not usually a man who "
            "says nothing. He STARES. He walks closer. He raises the warhammer, and the hammer "
            "glows, and a sky that does not exist opens up anyway and puts thunder into it.\n\n"
            "Divine favour. Held since before the rope. Waluigi wants the reader to appreciate the "
            "accounting: Markop has been carrying that charge through an entire descent, through a "
            "sealed door, through a marching order, waiting for a target worth spending it on. That "
            "is not luck. THAT IS A MAN WHO PACKED.\n\n"
            "He strikes. The Scorncrow blocks. THE BLOCK DOES NOT HOLD. And the thing flinches — for "
            "the first time across four separate engagements, this creature flinches — and then it "
            "strikes him in the head and SPLITS HIS SKULL and Markop keeps standing there bleeding "
            "while it laughs at him.\n\n"
            "And then it says the thing. \"I have lived in this tree, made it my treehouse when I "
            "was little.\"\n\n"
            "Waluigi is not laughing at that one. Last filing, a musket at point-blank range took "
            "the mask off and found human blood underneath, and Waluigi had to publish a correction "
            "for having called it a monster three times. This is the second piece of physical "
            "evidence in two sessions. It had a childhood. It had a treehouse. Waluigi is keeping "
            "the correction in force."
        ),
    },
    {
        "id": "the-tree-of-love",
        "icon": "🌳",
        "heading": "A Recruitment Pitch, An Arrest Warrant, And A Geography Argument",
        "body": (
            "Archie Miser — three-eyed, dimension-hopping, having split between worlds — prepares a "
            "FIREBALL. He winds up. He builds it. And then: \"nah, just kidding,\" he winks at "
            "nobody in particular, and delivers a firebolt instead.\n\n"
            "Waluigi wants to be clear that this is a man performing a bit, to an audience of "
            "nobody, in the middle of a fight he is losing, against something that has already "
            "split a centaur's head open. Waluigi respects it enormously and thinks it was insane.\n\n"
            "The Scorncrow coughs blood and says \"I'm still alive,\" and then makes an offer, and "
            "Waluigi needs the reader to actually hear it:\n\n"
            "> \"Listen — do you think the worst person can change? We can hang people together on "
            "the tree of love. Join me, young one. Join the Scorncrow, or hear my last ballad.\"\n\n"
            "THE TREE OF LOVE. Waluigi has read that phrase forty times now and it gets worse every "
            "single time, because \"hang people together\" is doing an enormous amount of work in "
            "that sentence and Waluigi cannot tell you which meaning was intended. Neither can the "
            "record. The record does not say.\n\n"
            "Archie declines: \"sorry Scorncrow, I'm on the side of good, despite all my accidental "
            "crimes.\" Waluigi would like ACCIDENTAL CRIMES entered into the permanent legal record "
            "as a defence, because Waluigi intends to use it.\n\n"
            "The guards retreat deeper into the grove and then — mid-battle, while losing, while "
            "surrounded — announce \"YOU TOADS ARE UNDER ARREST,\" spot Archie, and try to serve a "
            "warrant. In a spider pit. During a fight. Waluigi has to hand it to the Iron Legion: "
            "the paperwork does not stop for anything, including reality.\n\n"
            "So they negotiate a temporary alliance, and the terms are that Archie gets arrested at "
            "the end. He shrugs. \"This won't last.\" Waluigi agrees with him and files it as the "
            "only accurate prediction anybody makes all night.\n\n"
            "Then the geography argument happens, and Waluigi would like a moment.\n\n"
            "Archie asks what the guards are doing DOWN HERE. The guard says: down here, what do you "
            "mean? Archie explains — the rope, the lair, the descent, we are in the undergrowth. "
            "Markop offers that the tree is a teleporter. And the guard says:\n\n"
            "> \"What are you guys talking about? This is the ruined manor.\"\n\n"
            "Waluigi wants everybody to stop and look at that. Two groups of people are standing in "
            "the same grove, in the same fight, at the same moment, and they DO NOT AGREE ON WHERE "
            "THEY ARE. One party climbed down a rope into a pit. The other party thinks it walked "
            "into a manor. Both are correct about their own route. Nobody in that grove knows what "
            "the building is doing, and the one man who said \"the tree is a teleporter\" said it "
            "as a throwaway.\n\n"
            "Then a punch goes WACHOW, Wario laughs, and announces \"I am tired of running.\" Markop "
            "shouts that it has been LIKE SIX SECONDS. Wario clarifies that he is simply a bad "
            "runner. Archie yells that this is all Wario's fault, and Wario says \"alright then, "
            "I'll leave.\" WAH! Waluigi has been in that exact conversation and Waluigi also "
            "threatened to leave."
        ),
    },
    {
        "id": "bark-bark",
        "icon": "🐕",
        "heading": "BARK BARK, And The Man Remi Found Asleep",
        "body": (
            "Salam fires at the ettercap and misses. Dan does it at the same time and misses. Then "
            "Feyward Dan swings in tandem with Eager and they BOTH HIT and the ettercap goes down, "
            "and everyone turns to the Scorncrow at once. Eager heals himself with DUCT TAPE. "
            "Waluigi has no follow-up. The record says duct tape. Waluigi has decided not to "
            "investigate the medical theory.\n\n"
            "Remi is about to get eaten. A spider comes down to bite her. And then:\n\n"
            "> BARK BARK\n\n"
            "Mossy — the steel defender, a construct, a machine that barks — rams her side-on at a "
            "dead run. She goes flying into the leaves and the branches, falls out the other side, "
            "and lands sitting on the floor. Waluigi wants it recorded that the most effective "
            "medical intervention in this session was administered by a robot dog at full speed, "
            "and that it consisted of ASSAULTING THE PATIENT.\n\n"
            "She gets up and runs and runs and she is alone in the woods. Waluigi is going to stay "
            "with her for a moment, because what happens next is the strangest thing in the filing "
            "and almost nobody was there for it.\n\n"
            "She investigates. She finds a dead body. Wait — no. He is BREATHING.\n\n"
            "He has a RED PUNCH MARK on his forehead. Waluigi would like to direct the reader's "
            "attention to section four of this same document, in which Wario throws an off-screen "
            "punch that goes WACHOW at a target the record never identifies. Waluigi is not going "
            "to assert that these are the same event. Waluigi is merely going to put them in the "
            "same paragraph and step back.\n\n"
            "Remi taps his head with a stick. Lightly. Nothing happens.\n\n"
            "Mossy runs back to her. And Remi — fourteen years old, alone, armour destroyed, dress "
            "torn, having been webbed and clawed and rammed by her own side — tells the steel "
            "defender to WAKE THE GUY UP BY STEPPING ON HIM.\n\n"
            "The hard steel presses onto the man's ribcage. The steel defender barks and lowers "
            "slightly onto his chest. A CRACK IS HEARD.\n\n"
            "\"Welp,\" Remi thinks. \"I killed a guy in his sleep.\"\n\n"
            "Waluigi is going to drop the voice for four sentences, because the guide says he gets "
            "to do that once per filing and Waluigi is spending it here. That is a child who has "
            "been hurt repeatedly in the dark for several hours, finding an unconscious stranger and "
            "improvising with the only tool she has, which is a dog made of metal. The record does "
            "not say the man died. It says a crack was heard and that she thinks she killed him. "
            "Nobody has gone back to check, and the archive does not currently know whether Remi "
            "Akamatsu is carrying a killing or a very bad bruise.\n\n"
            "Then, in the middle of all of that, somebody shouts \"we're coming to get you home, "
            "Remi\" — and she hears the word HOME and it stops her, because of everything in her own "
            "file, and she shakes her head and focuses on the mission. Her dress is torn. She needs "
            "new armour. She keeps going. Waluigi picks the voice back up now."
        ),
    },
    {
        "id": "the-warhammer-has-spoken",
        "icon": "⚖️",
        "heading": "The Warhammer Has Spoken, And Waluigi Files It As Neither",
        "body": (
            "Markop swings on the Scorncrow. It blocks with the scythe.\n\n"
            "\"Wait — please. I will change.\"\n\n"
            "Its head splits open and starts GLOWING. And it says: \"wait, please, I am human. I am "
            "not a monster.\"\n\n"
            "And then it starts to KNEEL.\n\n"
            "\"You're a paladin, right? You have to spare me. Please. I will change ways.\"\n\n"
            "The head splits open. The warhammer has spoken and given him judgement. Markop picks up "
            "the scythe.\n\n"
            "Waluigi is going to be careful now, and the reader is owed an explanation of why.\n\n"
            "Three filings ago Waluigi called that thing a monster. Two filings ago Waluigi called "
            "it a monster again. Last session a fourteen-year-old put a musket against its face at "
            "point-blank range and the mask came off and THE BLOOD UNDERNEATH WAS HUMAN, and "
            "Waluigi published a correction and said Waluigi would not call it a monster a fourth "
            "time. Waluigi is keeping that promise in the one filing where keeping it is expensive.\n\n"
            "So here is the archive's position, stated plainly and once. A man knelt down, said he "
            "was human, addressed a paladin by his office, and asked for mercy, and the paladin "
            "killed him. Waluigi is NOT calling that murder. The thing had just split that same "
            "paladin's skull. It had spent four engagements hunting these people. It had offered, "
            "minutes earlier, to hang people on a tree. Anyone who reads the appeal as sincere has "
            "not read the previous four filings.\n\n"
            "And Waluigi is not calling it justice either. Justice has a procedure and this had a "
            "warhammer. Nobody weighed anything. Nobody asked the other eight people in the grove. "
            "The appeal was made to a specific office — PALADIN — and the office did not answer it, "
            "it simply concluded.\n\n"
            "The archive files it as neither, and the archive is going to let that sit there "
            "uncomfortably, because Waluigi genuinely does not know and Waluigi is not going to "
            "invent a verdict to make the paperwork tidier. Waluigi is a coward about many things "
            "and pretending to certainty is not going to be one of them today.\n\n"
            "Then Markop PICKS UP THE SCYTHE, which Waluigi notes without comment except to say "
            "that a man who has just executed something and then takes its weapon is a man the "
            "archive will be watching in the next filing.\n\n"
            "And it does not end there, because the grove does not care. Embercap and giant spiders "
            "surround the place OUT OF EVERY GROVE, from every direction at once. Markop feels a "
            "shadow over him and a blaze of heat off his shoulder as fire goes past him into the "
            "ettercap. A guard is killed by a spider. And a spider claws Salam across the face and "
            "he falls unconscious and THE RECORD SAYS IT SCARS.\n\n"
            "Salam has fallen. He was not recovered. The archive has commissioned a new likeness of "
            "him carrying that scar, because this one does not heal clean and pretending otherwise "
            "would be a lie told with a picture.\n\n"
            "They killed the thing they came for and their position got WORSE. Markop's skull is "
            "split. Archie is under arrest by agreement. Remi is alone over a man she may have "
            "killed in his sleep. Salam is down and nobody has him. WAH. Waluigi files this as a "
            "victory in the same way a building can be described as structurally standing."
        ),
    },
]

RECORD = {
    "id": COMMENTARY_ID,
    "sourceArticle": SOURCE_ID,
    "title": "Judgement in the Grove",
    "subtitle": ("Waluigi's Cut — a musket reloaded in the open, the Iron Legion calling pest "
                 "control, a robot dog committing assault as first aid, and one kneeling man"),
    "filed": "3 Aethel, 1040 BF — two days after the grove, from a desk, by someone who was not there",
    "timeCode": "TC:1040-09-03/MAT",
    "kicker": "Waluigi's Cut · Commentary Track",
    "pullQuote": ("PEST CONTROL. A professional soldier, in armour, inside a hostile pocket "
                  "dimension, requesting an exterminator. There is no exterminator. There is no "
                  "telephone. There is no sky."),
    "standfirst": ("Everything that happened in the Skittering Grove after the rope, told properly, "
                   "loudly, by someone who was not in it. Contains: an arrow put back in a pocket, a "
                   "toad standing in front of a centaur, a recruitment pitch involving a tree of "
                   "love, two parties who cannot agree what building they are in, and an execution "
                   "the archive declines to call either murder or justice."),
    "sections": SECTIONS,
    "relatedArticles": [
        SOURCE_ID, "the_belly_of_the_beast", "scorncrow", "markop",
        "remi_akamatsu_full_backstory", "dan_the_toad", "archie_miser", "eager",
        "salam", "wario", "waluigi", "iron_legion", "skittering_grove",
    ],
}


def load(name):
    with (DATA / name).open(encoding="utf-8") as fh:
        return json.load(fh)


def dump(name, doc):
    (DATA / name).write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n",
                             encoding="utf-8")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    doc = load("commentaries.json")
    rows = doc["commentaries"]

    # The source and every related article must resolve, or the cut links nowhere.
    known = set()
    for name, key in (("events.json", "events"), ("battles.json", "battles"),
                      ("characters.json", "characters"), ("locations.json", "locations"),
                      ("factions.json", "factions")):
        try:
            d = load(name)
            for r in (d if isinstance(d, list) else (d.get(key) or [])):
                if isinstance(r, dict) and r.get("id"):
                    known.add(r["id"])
        except Exception:
            pass
    missing = [r for r in RECORD["relatedArticles"] if r not in known]
    if missing:
        for m in missing:
            print(f"FAIL relatedArticles id does not resolve: {m}")
        return 1

    cur = next((c for c in rows if c.get("id") == COMMENTARY_ID), None)

    if args.check:
        if cur != RECORD:
            print("judgement commentary: filed copy does not match the generator")
            print("  re-run: python3 tools/build-judgement-commentary.py")
            return 1
        print("judgement commentary: filed copy matches the generator.")
        return 0

    if cur is None:
        rows.append(RECORD)
        action = "appended"
    else:
        rows[rows.index(cur)] = RECORD
        action = "updated"
    dump("commentaries.json", doc)

    words = sum(len(s["body"].split()) for s in SECTIONS)
    print(f"commentaries.json  {action}  {COMMENTARY_ID}")
    print(f"  {len(SECTIONS)} sections, {words} words")
    return 0


if __name__ == "__main__":
    sys.exit(main())
