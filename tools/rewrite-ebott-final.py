#!/usr/bin/env python3
"""Final scene pass on the last analysis-heavy Ebott sections.

Six sections still ran 50-66% commentary because their narration was two or
three sentences of summary. Same treatment as before: dramatise the beat so the
aside has something to stand on.

Run:  python3 tools/rewrite-ebott-final.py   (last in the chain)
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'events.json')

DEPARTURE = """
Snow squeaked underfoot. The lamps along the Snowdin road were still lit at midmorning because they are always lit, and the light came down yellow through the falling flakes and made the whole street look like something under glass.

Mihawk let out a long breath and watched it fog.

**"For once... things are quiet."**

**"yeah."** Sans glanced back once at the rooftops. **"feels good not having to worry about some flower guy for a change."**

**"Good thing we left them in that cage,"** the Agent said. **"In a locked house. With the machine."** He counted it off cheerfully on his fingers as they walked. **"Together."**

Nobody stopped walking.

**"They're together,"** Mihawk said, **"but the cage is secure. And that flower doesn't have any tools or way to escape."**

**"yeah. plus, who's gonna find it out there?"** Sans waved a hand back at the dark windows behind them, the leaning porch, the police station with its door shut and snow already filling in the boot prints. **"this place is dead."**

*WAH! Waluigi wants both corrections on the record now rather than in eleven days. Flowey has never needed tools \u2014 he repaired that machine with no hands and no equipment, which is in the Part III filing and nobody argued with it then. And \u201cnobody will find it\u201d is a claim about **visitors**. The danger in that building is already inside it. WAH.*
""".strip()

WALK = """
The snow thinned as the road bent east and the air came up a degree with every hundred paces.

Koffin-K marched ahead of everyone, coat flapping, Lanky and Bulky trailing him in a loose file.

**"This is gonna be awesome! Bet there's volcanoes or something cool!"**

**"How do we get to Hotland?"** the Agent asked. **"Is it a straight trip, Sans?"**

Sans stretched both arms behind his skull as he walked. **"nah. straight path's blocked by mountains. we gotta take the train first."** He nodded at a low building far ahead, a plume of white standing straight up above it in the still air.

Koffin-K squinted at it. **"Train? Ugh... I hate public transportation."**

**"Maybe you can be the conductor, huh."**

The villain stopped walking.

**"Oh! OH! I COULD BE THE CONDUCTOR!"**

**"You... you wanna be in charge of it?"** Lanky said.

Bulky nodded so hard his shoulders moved.

**"I'll wear a fancy hat... and have a whistle! And I'll yell 'ALL ABOARD!' really loud!"**

The Agent had gone quiet, looking up. **"The train \u2014 I'm surprised this place has trains. Smoke rises. It's a cave. Won't it flood the Underground with smoke?"**

Sans scratched the back of his skull. **"nah. the tunnels are designed with vents. all that smoke gets filtered out through special chimneys before it can flood anywhere."**

Behind them Koffin-K was still going, out loud, about uniforms.

*WAH! A vent grid that clears the exhaust of a steam locomotive out of a sealed cavern is not improvised. It is civil engineering at civilizational scale, maintained across generations, in a hole \u2014 and the Agent found it by asking where the smoke goes. Not by scanning. By noticing that a room full of fire should have filled with smoke and did not.*
""".strip()

TRANSIT = """
The Agent came back from the washroom with his face wet and sat down.

Across the aisle Koffin-K had stopped fighting the arms around him and slumped, chin down, breathing through his nose. Lanky had not loosened his grip. Neither of them had spoken in an hour.

**"How long has it been?"**

**"about two hours,"** Sans said, without turning from the window.

**"Oh. Alright, not bad."** The Agent looked down the length of the carriage. **"You two should rest too. We won't have time like this to rest again for some time soon."**

Mihawk inclined his head a fraction. Sans was already sliding down in his seat.

The Agent stayed up, and went along the car row by row, and this is what was in it: an elderly woman knitting something long and grey, needles ticking. A businessman with a laptop and a paper cup. Two teenagers passing a bag of something back and forth and laughing into their sleeves. A family of four, the parents holding hands across the gap, the smallest one asleep with her face mashed into her mother's coat.

He sat back down.

**"No humans...."**

*WAH! He said four words and went back on guard. Waluigi is going to say the rest of it. Commuters. Employment. Childcare. A ticket bureaucracy, a rail schedule, an industrial vent grid, a convertible currency \u2014 and not one human being in the entire carriage.*

*The Empire files this place as a containment problem. **There is a nation under that mountain and it has a timetable.***
""".strip()

RAPPROCHEMENT = """
Mihawk handed the manual back.

**"You rely on it heavily."**

**"Hmm. I don't know what I would do without my book."**

**"That's smart."** The Warlord settled back against the window. **"A soldier without structure is just chaos with weapons."**

The Agent turned that over. **"You changed your attitude from before."**

Mihawk did not deny it. **"I may have misjudged your manual. It is thorough, practical, and clearly well thought-out. I respect that. And you, by extension."** A pause. **"You understand the value of structure."**

**"You value that too."**

A slow nod. **"Indeed I do. Good soldiers rely on a strong foundation \u2014 rules, protocols, standards. It keeps order in chaos."**

**"What about Koffin-K? Is he a good soldier?"**

Mihawk snorted. **"That egotistical fool? Hardly. Koffin-K is a self-centered idiot who values his own glory above all else. That isn't discipline \u2014 it's insanity."**

From the aisle, muffled in Lanky's coat: **"I AM A GREAT LEADER! THE BEST!"**

Nobody looked over.

**"And Sans?"** The Agent glanced at the skeleton dozing beside him.

**"Sans is different."** Mihawk considered him for a while. **"Not a soldier in any traditional sense. But disciplined? Yes."**

**"How good are you at fighting, Sans? I haven't seen you fight that much."**

Sans did not open his eyes.

**"I haven't fought him,"** Mihawk said. **"But from what I've observed... he's fast. Unpredictable."**

*WAH! Understand what that sentence costs. Dracule Mihawk does not qualify his assessments. He has looked at emperors and been bored. He looked at a short skeleton in a hoodie who has spent this entire arc napping, and **declined to estimate him**. Nobody else in that carriage noticed. Waluigi noticed.*
""".strip()

# ----------------------------------------------------------------- PART V ---

EGRESS = """
They cleared the ticket gate into a concourse that smelled of hot stone and machine oil.

**"Well, Sans, go lead the way. How are we exiting again?"**

**"there's a gate up ahead \u2014 we just gotta show our tickets and head out."**

**"No, I meant leave from the Underground."**

Sans slowed. **"that'll take a bit more effort. first we gotta find a spot that isn't crawling with Royal Guards."** He said it lightly, and it did not come out light. **"we can't risk a straight shot to King Asgore's castle and getting captured along the way. that's too much attention."**

**"You don't think we can fight?"**

**"fighting's an option... but it ain't our only one."** He scratched his skull. **"we could try sneaking past 'em instead. less noise that way."**

**"What do you think, Mihawk?"**

The Warlord watched a pair of armoured figures cross the far end of the concourse in step, shoulder to shoulder, neither of them looking around.

**"Fighting is an option... but a messy one. Royal Guards are trained soldiers. They fight in formations and coordinate attacks efficiently."**

**"Alright, then we sneak."**

**"Good. Sneaking it is."**

Sans turned off the main hall into a service corridor where the lights were further apart and the air went cool again.

*WAH! Mihawk assesses militaries for a living and has been unimpressed by most of them. He declined open ground against the Royal Guard **and gave professional reasons.** That is a peer assessment, and it is the single most alarming line in the Legion's Underground casefile.*
""".strip()

COST = """
Sans straightened up, blue light fading off his phalanges. **"well... that worked better than I expected."**

**"Where exactly are we?"** Mihawk was already turning, scanning the treeline.

**"my \u2014 my book."** The Agent's hands went to his belt, then his coat, then his belt again. **"MY BOOK. Where is it? Did it not teleport?"**

Sans went rigid.

**"oh no."** His eyelights flickered. **"i didn't account for objects when i teleported us. the magic only grabbed living beings."**

The Agent stopped moving.

He went down onto his knees in the grass and stayed there, not talking, hands open on his thighs.

Sans crouched next to him and put a hand on his shoulder \u2014 which he does not do, for anyone.

**"I'm really sorry,"** he said, and there was nothing funny in his voice at all. **"I didn't realize it wouldn't come with us. That's totally on me. I know how important that book was to you. It wasn't just any guide... it meant something."**

Behind them, without being asked and without saying anything, Mihawk was working the treeline in a grid \u2014 pushing back bushes with his forearm, turning over stones with the toe of his boot, going faster rather than slower as it became obvious there was nothing to find.

He did not stop for a long time.

*WAH! Waluigi has spent two filings being funny about a soldier who reads a rulebook in a fight, and will close that thread honestly. The book was not a crutch and it was never a joke. It was the only structure that man had in a sealed nation with no allies and no orders \u2014 and it is aboard Gaster's ship now, including the page nobody wrote down.*
""".strip()

REPLACEMENTS = {
    'mount_ebott_survey_part_4': {
        'Departure': DEPARTURE,
        'The Walk': WALK,
        'Transit': TRANSIT,
        'Rapprochement': RAPPROCHEMENT,
    },
    'mount_ebott_survey_part_5': {
        'Egress Planning': EGRESS,
        'The Cost': COST,
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
                sec.pop('waluigi_note', None)
                n += 1
                break
    print(f"{ev['id']}: {n} sections rewritten")

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(events, f, ensure_ascii=False, indent=1)
    f.write('\n')
print('written')
