#!/usr/bin/env python3
"""Rewrite the Ebott song/battle sections in scene, with the complete lyrics.

Two problems with the shipped versions, both flagged by the story format guide:

  1. The Part IV villain number was reduced to five paraphrased "key lines".
     The actual session was a full alternating duet. It is restored in order,
     attributed line by line, with the staging around it.

  2. The narration reported beats instead of dramatising them ("Lanky pointed
     out, quietly, that nobody was there"). Sensory density in these sections
     was 1.5 words per 1,000 against the Imp article's 10.9.

This rewrites the affected sections only: dialogue quoted, objects named,
sounds sounded, bodies over moods. Waluigi's analysis is trimmed to one aside
per section and the long findings are pushed to waluigiAssessment.

Run:  python3 tools/rewrite-ebott-songs.py
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'events.json')

# ---------------------------------------------------------------- PART IV ---

MUTINY = """
The doors sealed with a pneumatic bang and the carriage lurched forward. Koffin-K dropped into the front seat, stretched both arms across the seatback, and crossed his ankles in the aisle like a man who had bought the whole train.

Four rows back, Lanky leaned toward Bulky and said something into his ear. Bulky nodded once.

They stood up together.

Neither of them made a sound crossing that carriage. Sixteen feet of swaying floor, a moving train, luggage racks rattling overhead — and the Agent, watching from the far end, did not hear a footfall. Bulky's hand came out of his coat with a folded cloth in it. Something wet darkened the middle of the fold.

They struck at the same instant. Lanky's palm clamped over Koffin-K's mouth. Bulky pressed the cloth to his face.

The fedora went over the seatback. Koffin-K's eyes flew open — wide, white all the way round — and his boots hammered a fast, useless drumbeat against the seat in front of him. He got one hand up and caught Lanky's sleeve. Pulled. The fabric tore at the shoulder.

Then the kicking slowed. His fingers uncurled from the sleeve.

*WAH! You do not have chloroform in your pocket by accident. They carried it through Snowdin, through the tantrum, through a felony — and did not use it until the doors sealed. They were not reacting. **They were waiting for a locked room.***
""".strip()

SONG = """
Thunder came off the tunnel wall — a long rolling crack that had no business existing underground — and Koffin-K came up out of that seat like something spring-loaded.

The cloth fell on the floor. He put his heel through it.

**"YOU DARE BETRAY ME?!"**

The whole car went with the brakes. Passengers grabbed for seatbacks. An old woman's knitting basket went over and rolled its yarn down the aisle in a long unravelling stripe, and nobody bent to pick it up, because Count Koffin-K was standing in the middle of the carriage with purple light crawling up both forearms and beginning, unmistakably, to *sing*.

The Agent stood up and sang back.

> **KOFFIN-K:**
> Here's a little lesson in villain double-crossing —
> they're fun when they're not on me!
> To even *stand* to my tyranny
> is the highest form of tyranny!

> **KOFFIN-K:**
> Thunder strikes! With or without goons I'll take this train —
> a precipice of doom awaits you, fool!

> **THE AGENT:**
> I'm so twisted to have resisted
> the fabrication and deceptions you slung!

> **KOFFIN-K:**
> Say what you mean, mean what you say,
> say there's no one meaner than Count Koffin-K!

> **KOFFIN-K:**
> You served me well, you could have excelled —
> but now you will be slung up
> like the cloth I left you to dry!

> **THE AGENT:**
> After being treated as your pawn,
> the question at my feet is *why go on?*

On the last line Koffin-K stopped dead in the aisle.

Because it was not his verse. It had come from behind him, from a Legion surveyor holding a bound manual, and it was not an insult — it was an *answer*, given on behalf of two men currently pressed against a luggage rack trying to become smaller.

Lanky's mouth was open. Bulky had gone very still.

*WAH! Waluigi has attended three coronations with worse staging. He also notes that the Agent, carried away by the metre, handed the betrayers their motive out loud, in verse, in front of the man they had just drugged — and that eleven minutes later one of them changed sides on a single word from him.*
""".strip()

RAGE = """
Koffin-K turned around.

He crossed to Lanky in four strides and took a fistful of his collar, and when he spoke his voice had dropped out of the theatrical register entirely.

**"You had everything. Loyalty. Power. My trust."**

**"Boss—"**

**"And you threw it away for what? A pathetic attempt at rebellion?"**

The train hit a curve. Koffin-K went with it, using the momentum, and threw Lanky bodily backwards down the aisle. The minion took out the arm of a seat with his shoulder, folded over it, and hit the floor. Somewhere behind them a woman screamed into her hands.

**"You mean NOTHING to me now!"**

Bulky came off the wall at a run.

The Agent hit him at the hip and both of them went down hard in the aisle, sliding, tangled, the manual skidding out of reach under a seat. The Agent got a knee across him and his forearm on his chest.

**"You betrayed your boss. Why?"**

Bulky stopped fighting. Up close his face was wet and his voice cracked on the first word.

**"I-I didn't want to betray him! He was going crazy!"** He grabbed the Agent's sleeve, not to push — to hold on. **"We were scared of what he'd do next. We had to stop him before someone got hurt worse!"**

Boots came down the aisle toward them. The Agent looked up.

Koffin-K was standing over both of them with his right hand cocked back and dark energy spitting off the knuckles in short violet threads.

**"You DARE lay hands on MY minion?!"**

**"But he just betrayed you — what do yo—"**

**"I don't CARE about betrayal! You touched what's MINE!"**

The fist came down.
""".strip()

INTERVENTION = """
The Agent got his knife up. He never used it.

**"Enough."**

A hand closed on Koffin-K's wrist and stopped it dead, six inches from the Agent's face, and the whole carriage went so quiet that the wheels underneath sounded suddenly enormous.

Mihawk had not appeared to hurry. He was simply there, in the aisle, with the villain's arm held in one gloved hand at a height that was clearly not costing him anything, and his golden eye level on Koffin-K's.

**"You are pathetic. A tyrant who cannot even control his own followers without violence?"**

Koffin-K wrenched. The arm did not move.

**"You have no right to interfere! This is my crew! My authority!"**

**"If you cannot earn loyalty without resorting to brutality, then you don't deserve it."** Mihawk let go. Koffin-K staggered a half step. **"A good captain commands respect, not fear. Your empire is built on nothing but fear and violence. No better than a common tyrant."**

The villain's hands closed and the violet light came up again around both fists. He swept an arm at the carriage — at forty passengers folded down into their seats, at the yarn still lying across the aisle, at the old woman with both hands over her mouth.

**"And you see my loyal followers. Right here before you!!!"**

Nobody moved. A child somewhere near the back started crying and was immediately muffled.

*WAH! He pointed at people who were hiding from him and called it a following. Waluigi has audited eleven governments and heard that exact argument from four of them.*
""".strip()

MANUAL = """
The Agent had been on his feet for six seconds and nobody was looking at him.

He reached under the seat, got two fingers on the spine of the Iron Legion Protocols manual, and slid it out. Nine hundred pages, buckram board, brass corner caps. Regulation issue.

He swung it edge-on into the side of Koffin-K's head.

The sound was flat and awful and travelled the length of the car. The fedora went one way. Koffin-K went the other, into a window, and stayed there with one palm flat against the glass and the other clamped over his temple.

**"GHRK—!?"**

**"We're a team here, did you forget?"** The Agent had the book in both hands now, held across his chest like a shield. **"You said the book is the leader earlier. So it remains that way."**

Koffin-K turned his head. There was a red mark coming up across his cheekbone in the exact rectangular shape of a corner cap.

**"Did you just HIT me with... a *manual*?!"**

**"Lanky! NOW!"**

And Lanky — bleeding from the shoulder, on the floor, twelve feet away — moved before he had finished deciding to. He came off the deck low and took Koffin-K around the middle and *lifted*, both arms locked, the villain's boots leaving the floor entirely.

Bulky piled in a half-second behind him.

**"GET OFF ME! GET THE HELL OFF ME!"**

**"Shut up, boss,"** Lanky said, into his coat.

*WAH! Waluigi wants the mechanism noted, because it took about one second. Somebody used one of their names as a **command** — not a plea, a name and a moment — and both men moved instantly and in coordination. People do not answer to their name like that unless somebody trained them to.*
""".strip()

# ----------------------------------------------------------------- PART V ---

CONTACT = """
The heat came up through the hull first. Then the light — orange, rippling, thrown up off the surface onto the underside of the cavern roof a hundred feet above them, so the whole ceiling looked like moving water.

They were forty minutes out from the harbour when a shape resolved ahead of them in the glare.

A ship. Bigger than theirs by an order of magnitude, riding the molten current broadside, and lined along its rail with figures that had no colour in them at all — grey and white, like something drawn and then left unfinished.

At the helm stood a man in white.

One eye. An eyepatch over the other. A face that had been assembled slightly wrong and then smiled anyway, cheek to cheek, far past where a face should stop.

**"CHIPS AHOY!"**

Sans stopped breathing.

The Agent noticed it because Sans had been talking two seconds earlier and now was not. He turned. The skeleton was standing rigid in the bow with his hands out of his pockets — out of his pockets, which had not happened once in four days — and his eyelights had shrunk to two white pinpricks in the middle of two black sockets.

The grin was gone. Not lessened. *Gone*.

Behind them, very quietly, came the sound of Mihawk's glove closing on the hilt of Yoru.

*WAH! Note who the Warlord was reacting to. He had never seen that man before, had no context, and no reason to draw. **He drew because of Sans's face.** That is the most damning available assessment of what that face was doing.*
""".strip()

SHANTY = """
Then the crew began to sing.

> **THE CREW:**
> Hoist the roaring anchor, we be sailin' to Abyss!
> On me soul, ye hearties, in for bounties full o' bliss!
> So grab ye maties and yer lassies, we've a shanty we should sing —
> Make sail for the land that's ought to be a tad interestin'!

They were loud, and cheerful, and badly out of tune, and they sang it hammering the rail in time with the downbeats. Gaster did not sing. Gaster conducted, one finger, smiling.

> **THE CREW:**
> Speedin' through the darkness in the bubblin' depths below —
> Our vessel bears the bravest heart, its favourite food is cold!
> The cook is in the crow's nest with the cat o' pointed tail,
> And though we be no salesmen we be hoistin' up our sails!

> **THE CREW:**
> YO HO HO! A goner ye shall be!
> How long we wait, our founts our bait —
> My DELTARUNE's at sea!

On *sea* Gaster winked and snapped his fingers.

The ground under the lava came apart. Darkness poured up out of it — not smoke, not shadow, an absence with edges — and took the shape of a triangle, and kept going, widening as it rose until it had swallowed the rippling orange ceiling and there was nothing above the boat at all.

The crew sang on into the dark.

> **THE CREW:**
> They plunder my crystals! The shadowy weight!
> They reaching for freedom, end up shark bait!
> All hands on deck! Me galleon, sentry —
> We sailin' the winds of me seventeenth entry!

> **THE CREW:**
> Me crew run on values, the rest for the rafters,
> We sailing seas of all seven of me chapters!
> If ye be here lookin' for Davy Jones' locker,
> Only booty you'll find is the STAR WALKER!

*WAH! Everybody in that boat heard a pirate song. Waluigi heard **a man reading out his own inventory**: a goner, a Deltarune he calls his, crystals somebody is currently plundering, a seventeenth entry, seven chapters, and a Star Walker. Entries and chapters are units of a **document**. That man measures his territory in filing terms. WAH.*
""".strip()

ANCHOR = """
The first verse came round again, and this time something rose off Gaster's deck with it.

An anchor. Iron, or something wearing iron's shape, wrapped in the same edged darkness as the triangle overhead — and it went up on its chain hand over hand, hauled by nobody, until it hung level with the masthead.

> **THE CREW:**
> Hoist the roaring anchor, we be sailin' to Abyss!
> On me soul, ye hearties, in for bounties full o' bliss!

The lava underneath it began to turn.

Not boil — *turn*, in a slow wheel forty feet across, and then it stood up. A wall of molten rock came up off the surface and kept coming, throwing light on the underside of the void triangle, and started across the gap toward them.

**"BRACE YOURSELVES!"**

The Agent got both hands on the rail. The wave took the boat on the quarter and the world went sideways: the deck up past forty degrees, the far rail dipping to within a foot of the surface, spatter coming over in fat orange gobs that punched through the planking and set it smoking. The heat hit like an opened oven. Somewhere under the roar he heard Sans shout something and lost it.

Then the boat slammed flat again and the wave was past.

Gaster's ship had not moved an inch. The anchor still hung there, and the wave still stood behind it, held upright, not falling.

*WAH! Technical note for the interference desk: that anchor does not move the ship. **It moves the medium.** It raised a wave in molten rock and then held it standing against gravity while its own hull sat unbothered. That is not propulsion. It is environmental authorship.*
""".strip()

GLITCH = """
The boat was still rocking. The Agent reached out to steady Sans.

His hand went through him.

Not through his coat — *through him*, wrist-deep, no resistance, the way a hand goes through the space where something is being projected. The Agent felt nothing at all except his own fingers closing on each other.

Sans looked down at the arm inside his ribcage. His eyelights flickered, went out, came back.

Across the lava, Gaster's smile got wider. It got wider than his face and kept going, and the triangle overhead pulsed once, slowly, like something with a heartbeat.

Mihawk had not spoken since the hail. He spoke now, and it was one word, and it was perfectly calm.

**"What?"**

*WAH! Three people stood in that radius and one of them stopped being solid. Waluigi's reading, filed and standing: Gaster's presence did not **inflict** that instability — it **revealed** one that was already there. The archive says Sans knows more than he shares. Waluigi is beginning to think the thing he is not sharing is about himself.*
""".strip()

# ------------------------------------------------------------------ apply ---

REPLACEMENTS = {
    'mount_ebott_survey_part_4': {
        'The Mutiny': MUTINY,
        'The Song': SONG,
        'The Intervention': INTERVENTION,
        'The Manual': MANUAL,
    },
    'mount_ebott_survey_part_5': {
        'Contact': CONTACT,
        'The Shanty': SHANTY,
        'The Anchor': ANCHOR,
        'The Glitch': GLITCH,
    },
}

# The rage/confrontation beat is new prose that belongs between The Song and
# The Intervention in Part IV.
INSERTS = {
    'mount_ebott_survey_part_4': [
        ('The Song', {'name': 'The Rage — "You Touched What\u2019s Mine"',
                      'icon': '\U0001f5ef\ufe0f', 'overview': RAGE}),
    ],
}

with open(PATH, encoding='utf-8') as f:
    events = json.load(f)

for ev in events:
    if not isinstance(ev, dict) or ev.get('id') not in REPLACEMENTS:
        continue
    eid = ev['id']
    swapped = 0
    for sec in ev.get('sections', []):
        for prefix, body in REPLACEMENTS[eid].items():
            if sec['name'].startswith(prefix):
                sec['overview'] = body
                # These sections now carry their aside inline; drop the long
                # trailing note so the analysis budget stays inside guide limits.
                sec.pop('waluigi_note', None)
                swapped += 1
                break
    for after, newsec in INSERTS.get(eid, []):
        if any(s['name'].startswith(newsec['name'][:12]) for s in ev['sections']):
            continue
        idx = next(i for i, s in enumerate(ev['sections']) if s['name'].startswith(after))
        ev['sections'].insert(idx + 1, newsec)
    print(f'{eid}: {swapped} sections rewritten, '
          f'{len(INSERTS.get(eid, []))} inserted, {len(ev["sections"])} total')

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(events, f, ensure_ascii=False, indent=1)
    f.write('\n')
print('written')
