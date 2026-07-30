#!/usr/bin/env python3
"""Rewrite the remaining report-style Ebott sections as scenes.

After the song rewrite and the note trim, both events still sat near 50%
analysis. The cause was not commentary volume but *missing story*: sections
like "The Station" carried 290 words of aside on 128 words of narration.

Those sections were minutes entries — "Lanky pointed out, quietly, that nobody
was there" — so there was nothing for the commentary to sit on. The fix is more
scene, not less Waluigi: quote the dialogue, name the objects, sound the sounds.

Run:  python3 tools/rewrite-ebott-scenes.py   (last in the chain)
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'events.json')

STATION = """
The station door banged off its frame. Koffin-K stopped three paces inside, tipped his fedora down over one eye, and filled his lungs.

**"ATTENTION EVERYONE!"**

The words went up into the rafters and came back thinner. A radiator ticked somewhere along the wall. Behind the counter, an elderly toad in a cardigan licked her thumb and turned a page.

**"I AM KOFFIN-K! FUTURE CONDUCTOR OF THIS TRAIN AND SAVIOR OF SNOWDIN!"**

She stamped something. The stamp made a small wet thud.

**"Boss,"** Lanky said. **"There's... nobody here."**

Bulky nodded at the benches. Four rows of them, empty, grit blown in under the door and drifted along the legs.

Koffin-K did not appear to hear either of them. He struck a pose with one boot up on a bench and declaimed at the ticket window about the day this train would pass into his noble command.

The Agent and Sans walked past him to the counter.

**"Two to Hotland. Three."**

**"One-way tickets to Hotland? That'll be 50G per person."** The clerk did not look up.

**"G?"** The Agent turned the word over. **"Gold, or something else? What is G?"**

**"G stands for Gold. Fifty Gold Pieces per ticket."** She put her hand out flat on the counter and left it there.

Sans dug in his hoodie pocket and counted coins into her palm. Round, yellow, milled edges. They went into a lockbox under the counter and the lid came down with a click.

**"Train will be here shortly. I recommend waiting inside."**

*WAH! Gold. Priced in pieces, over a counter, into a lockbox. That is a **convertible** currency \u2014 the Underground and the surface already share a settlement medium, and the only thing between these two markets is a barrier and eighty-five years of policy. Waluigi notes it was obtained, for free, by a soldier who did not know what a G was.*
""".strip()

TANTRUM = """
Koffin-K arrived at the counter with his questions rehearsed.

**"Excuse me, ma'am! When does this train leave? What time is my shift as conductor? Do I have a uniform ready?"**

**"The train leaves in twenty minutes."** The clerk turned another page. **"You're not the conductor."**

**"WHAT."**

**"You're not the conductor. The actual one is already on board."**

She said it the way a woman says a thing she has said for thirty years.

**"WHAT?! BUT I'M THE SAVIOR OF SNOWDIN! I DESERVE TO BE CONDUCTOR!"**

Lanky and Bulky crowded in at his elbows. **"Boss \u2014 uh \u2014 maybe you could just ride the train?"** Bulky got two fingers on his sleeve and tugged.

**"HOW DARE YOU DISRESPECT ME LIKE THIS! I AM A LEGENDARY CRIMINAL MASTERMIND! I SHOULD BE THE CONDUCTOR!"**

The clerk set down her stamp. She pressed two fingers to the bridge of her nose.

**"Sir. If you don't cease your tantrum immediately, I will call security and have you removed."**

Koffin-K's eye twitched. His hands closed. Every muscle in him went at once from slack to wire.

**"YOU DARE THREATEN ME? ME?! I'LL SHOW YOU WHO RUNS THIS TRAIN STATION!"**

He came over the counter.

The clerk dropped straight down behind it and his palms slammed the wood where her head had been, hard enough to jump the stamp pad off the surface. Paper went up in a white cloud and came down slowly all over the floor. He got a chair by the back and put it through the timetable board.

**"YOU THINK YOU CAN IGNORE ME?! I'LL DESTROY THIS STATION!"**

Under the desk, a hand found a button.

*WAH! Note the two claims he made inside two minutes, to the same woman: Savior of Snowdin, then Legendary Criminal Mastermind. Those are opposite positions. He detected no contradiction, because to him neither is a moral stance \u2014 both are simply **standing**.*
""".strip()

BLAST = """
The alarm was a flat electric howl. Boots came up the platform at a run and two security officers came through the door in full kit.

**"STOP RIGHT THERE!"**

They took Koffin-K low, one on each arm, and put him face-down across the scattered paperwork. One of them got a knee in. The other came off his belt with handcuffs.

**"GET OFF ME! I'LL END YOU!"**

**"Alright, you're coming with us."**

**"Should we defend our teammate?"** the Agent asked.

Mihawk did not uncross his arms. **"We are not getting involved."**

**"yeah,"** Sans said. **"let 'em handle it."**

The cuffs got as far as one wrist.

Then Koffin-K twisted \u2014 wrong, too fast, at an angle a pinned man does not have \u2014 and both officers came off him like coats off a hook. He came up onto one knee with his right arm already rising, and the air around his fingers began to crackle and spit in short violet threads.

**"YOU FOOLS!"**

Lanky ducked. Bulky put both arms out and covered him.

**"TASTE MY POWER!"**

The discharge crossed eight feet of station in no time at all. The ticket counter stopped existing. The blast took both officers off their boots and put them into the far wall in a wash of splintered pine and burning paper, and the whole building shuddered on its foundations, and grit came down off the rafters in a fine grey rain.

When it cleared, Koffin-K was standing in the middle of it breathing hard, hands on his hips, grinning at the two men groaning in the debris.

**"WHO'S THE BOSS NOW, HMM?"**

*WAH! Waluigi has two findings. One: that was a violent felony against uniformed officers, in a jurisdiction where the Empire has no treaty and no standing, attached now to a mission whose entire cover is scientific neutrality.*

*Two, and worse \u2014 **where did that come from?** A failed businessman with a fedora cannot vaporise a ticket counter. Somewhere between the Snowdin hideout and this platform that man acquired a real weapon, and nobody has asked him about it. A clown with live ordnance is not a clown. He is a delivery mechanism, and somebody built him.*
""".strip()

BOARDING = """
The whistle went. Koffin-K forgot the entire incident between one breath and the next and sprinted for the platform.

**"Boss... what about your arrest?"** Lanky looked back at the two officers, neither of whom had got up.

**"I don't care about the guards or anything else! I'm getting on that train!"**

The Agent watched them hesitate at the door. **"I thought you two were loyal,"** he said, and laughed.

Both of them flinched.

**"We... we are,"** Lanky said. It came a half-beat late.

**"Yeah. Totally."** Bulky said it too fast, fists shut at his sides.

**"Not *what* you are."** The Agent stopped laughing. **"*Who* you are. Tell the truth."**

Neither answered. Lanky held it one second longer, then Bulky caught his arm and pulled him through the door after their boss.

Mihawk watched them go up the step. **"They don't act like loyal followers."**

**"yeah,"** Sans said. **"something's off about them."**

**"Fear,"** the Agent said. **"Or spying."**

Behind his back, out of sight, the Warlord's hands closed into fists.

*WAH! "Who are you" is an identity question, and both men declined it on a public platform in front of the principal they were about to drug. That is not cowardice. **That is somebody holding a cover they have not been released from** \u2014 and theirs expired about forty minutes later, in a locked carriage, with equipment they had been carrying the whole time.*
""".strip()

INTERROGATION = """
Mihawk closed the manual on one finger.

**"This document is well-organized. Detailed. Useful."**

Coming from him it landed like a medal. The Agent did not know what to do with his hands.

**"But I have one question."** The golden eye came up. **"Who wrote it?"**

**"Who wrote it..."** The Agent's mouth stayed open a moment. **"I'm not too sure."**

Mihawk exhaled through his nose.

**"You don't know who wrote it?"**

**"The Legion issues it to every soldier, so \u2014"**

**"How many carry one?"**

**"The embassy has, let's see, fifteen personnel."** He counted something off in his head. **"I've seen at least four with one of them."**

**"Only four out of fifteen have it?"** Mihawk turned the book over, looking at the spine. **"That's unacceptable. How does anything get done properly if only some follow protocols?"**

**"Yeah. I guess it is how it is."**

*WAH! Waluigi will not mock a man for trusting his own service. The structural point stands anyway: **an unsigned document a man obeys without question is not a manual \u2014 it is somebody giving orders at a distance, indefinitely, with no name on them.** He thinks he is following procedure. He is following* somebody.
""".strip()

ARRIVAL = """
The train came into Hotland with the brakes screaming and the air already twenty degrees warmer through the vents.

**"We're staying,"** Bulky said.

Lanky nodded beside him. Neither of them looked at the floor when they said it.

Koffin-K's face went through several things and settled on none of them. He straightened his suit with two hard tugs, retrieved his fedora from under a seat, and set it back on his head at the wrong angle.

Then he walked off down the platform without a word to anybody, and did not look back, and the crowd took him.

**"Well, just us three now, huh?"** The Agent watched him go. **"You think we'll see him again?"**

Mihawk folded his arms. **"That fool? Probably. He's the type to hold grudges and come back for petty revenge."**

Sans stretched until something popped and shoved his hands in his pockets. **"eh. we'll cross that bridge if he shows up."**

*WAH! He arrived with a title, a following and a plan, and left with none of the three \u2014 and what took them was not Mihawk's contempt or a manual to the head. It was that his own two people were offered a choice and did not have to think about it.*

*Mihawk files him as a nuisance. Waluigi files him as a humiliated man carrying a power nobody has accounted for, which is not a loose end. It is an appointment.*
""".strip()

# ----------------------------------------------------------------- PART V ---

PAPYRUS = """
The crew's second shanty came across the lava, cheerful as a birthday.

> **THE CREW:**
> Come join our vessel instead, we call it the Friendship now!
> Raise a glass to freedom as the light is running low \u2014
> Dish out Excalibur and **Papyrus** turns to dough!

Sans stopped.

Not flinched. Not turned. *Stopped* \u2014 mid-motion, one hand still half-raised, like something had reached in and taken the current out of him. The blue light around his fist went out.

His eyelights went with it. Both sockets emptied to flat black.

An attacker swung at his head. Sans did not move. The blow went past his skull by an inch because the man had aimed for where a dodging opponent would be.

Mihawk stopped fighting. The Warlord's head came round and stayed there, and for four full seconds one of the most dangerous men alive stood in the middle of a boarding action doing nothing but looking at a skeleton.

The Agent kept talking to the archer.

He did not know what else to do, so he kept going \u2014 loud, steady, unbothered, telling the man to take his time, apologising for possibly breaking protocol, admitting he was on thin ice as it was. Ordinary noise. The sound of somebody being ridiculous nearby.

Sans's fingers twitched.

Then he was listening. Then he blinked, and the eyelights came back \u2014 dim, then bright \u2014 and he pulled in a breath like a man surfacing.

*WAH! Sans has not said that name once in four sessions, including in his own town. Gaster's crew had it set to metre and deployed it the moment he became a threat. **That was not a lyric. That was aimed ordnance.***

*And note what brought him back. Not force. Not shaking. Somebody nearby being harmlessly, persistently silly at an archer in a steady voice. Waluigi has written a great deal in this archive about the value of structure. He adds one line: structure did not do that.*
""".strip()

WITHDRAWAL = """
The Agent counted the deck. A dozen crew he could see. More below, certainly.

**"Twelve versus three. I guess it's a fair battle."**

Gaster laughed from the helm \u2014 an unhurried sound, entirely at ease.

**"A fair battle? Oh no... this isn't a battle at all. This is just entertainment for me."**

The Agent looked at Sans. Then at the book in his hand. He turned it to a page he clearly already knew and read it out.

**"My legion book says this thing... 'There's no shame in a tactical retreat.'"**

Sans snorted. **"i think this is one of those rare times when it's smart to heed your own advice."**

Mihawk looked up at a hostile crew on an airborne deck and said nothing, which was assent.

**"How do we get down from here, then... I'll leave it to you two."**

Sans crouched at the edge of the rail and put his hands out over nothing. Blue light gathered in his phalanges and the air in front of him started to bend \u2014 not shimmer, *bend*, folding into itself along a seam that had no business existing.

The crew stopped singing. Gaster's smile stayed exactly where it was, but he had gone very still, watching.

Even Mihawk raised an eyebrow.

The vortex opened. There was a sound like a blimp \u2014 a deep soft displacement of air \u2014 and everything went black between one blink and the next.

Grass. Trees. Wind moving in it. Solid ground under three pairs of boots and no ship anywhere.

*WAH! Note what the manual actually did there. It did not tell him to run. **It gave him permission to.** Waluigi has audited a great many command failures and a startling number of them are men who could not find that sentence written down anywhere.*
""".strip()

REPLACEMENTS = {
    'mount_ebott_survey_part_4': {
        'The Station': STATION,
        'The Tantrum': TANTRUM,
        'The Blast': BLAST,
        'Boarding': BOARDING,
        'The Interrogation': INTERROGATION,
        'Arrival': ARRIVAL,
    },
    'mount_ebott_survey_part_5': {
        '"Papyrus"': PAPYRUS,
        'The Withdrawal': WITHDRAWAL,
    },
}

with open(PATH, encoding='utf-8') as f:
    events = json.load(f)

for ev in events:
    if not isinstance(ev, dict) or ev.get('id') not in REPLACEMENTS:
        continue
    n = 0
    for sec in ev.get('sections', []):
        for prefix, body in REPLACEMENTS[ev['id']].items():
            if sec['name'].startswith(prefix):
                sec['overview'] = body
                sec.pop('waluigi_note', None)   # aside now lives inline
                n += 1
                break
    print(f"{ev['id']}: {n} sections rewritten as scene")

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(events, f, ensure_ascii=False, indent=1)
    f.write('\n')
print('written')
