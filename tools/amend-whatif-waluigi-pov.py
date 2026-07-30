#!/usr/bin/env python3
"""Amends the Wario / Abstract Bank What If filing in place.

Two changes, no rewrite of the narrative itself:
  1. POV — the anonymous observer standing in the room becomes Waluigi, and the
     detached encyclopedic narration becomes his first-person audit voice, in
     line with how events.json entries are written ("Waluigi has been forced to
     personally audit...", "> **Waluigi's Historical Insight:** ... WAH!").
  2. Analysis — every chapter gains a `analysis` block (the house-style
     Waluigi callout), plus a closing verdict on the whole filing.

Run:  python3 tools/amend-whatif-waluigi-pov.py
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'whatifs.json')

with open(PATH, encoding='utf-8') as f:
    doc = json.load(f)

entry = next((w for w in doc['whatifs'] if w.get('id') == 'wario_abstract_bank'), None)
if entry is None:
    sys.exit('filing not found')

# ------------------------------------------------------------------ POV ------
# Targeted rewrites. Each pair is (existing text, Waluigi-POV replacement).
# The observer in the source scenario is now explicitly Waluigi, so every
# "someone", "anyone", "you" and every detached editorial aside gets a face.
POV = [
# --- I. The paperwork -------------------------------------------------------
("""The document arrived the way all catastrophic documents arrive: unremarkably, in a folder, on a Tuesday.

Wario snatched the paper out of the courier's hands""",
 """Waluigi has been asked to file a hypothetical. Fine. WAH. But understand from the first line that this is not a story Waluigi heard secondhand — Waluigi was *standing in the room*, holding the folder, watching the whole beautiful catastrophe develop like a photograph nobody wanted.

The document arrived the way all catastrophic documents arrive: unremarkably, in a folder, on a Tuesday. Waluigi carried it in. Waluigi would like that noted, along with the fact that Waluigi read the fine print first, because Waluigi always reads the fine print, because Waluigi is the only competent person in any given building.

Wario snatched the paper out of my hands"""),

("""Wario snatched the paper out of my hands before the poor soul had finished the sentence "sign here to acknowledge receipt of." His beady eyes went down the page""",
 """Wario snatched the paper out of my hands before I had finished the sentence "sign here to acknowledge receipt of." His beady little eyes went down the page"""),

("""It was not a scam. That was, in hindsight, the problem. A scam has a ceiling.""",
 """It was not a scam. Waluigi checked. Waluigi has personally run enough of them to recognize one at forty paces, and this was not one. That was, in hindsight, the problem. A scam has a ceiling."""),

("""He kept reading. Then he stopped, and squinted, and did the thing he almost never did, which was slow down.""",
 """He kept reading. Then he stopped, and squinted, and did the thing he almost never does, which is slow down. Waluigi felt a small, unfamiliar flicker of hope at this. It did not survive the paragraph."""),

("""A strange look crossed his face. Not guilt exactly — Wario has a documented immunity to guilt in the same way certain deep-sea creatures have an immunity to pressure — but something adjacent to it. A hesitation. The face of a man who has just realized that the price tag is written in a currency he does not own and cannot counterfeit.

The confirmation came anyway. Yes. And it's *your* account. Your name. Your signature line. The Abstract Banker — a figure who appears in ledgers more often than in rooms — had assigned the whole metaphysical portfolio to one W. Wario, sole proprietor, no co-signers, no oversight, no cooling-off period.""",
 """A strange look crossed his face. Not guilt exactly — Wario has a documented immunity to guilt in the same way certain deep-sea creatures have an immunity to pressure — but something adjacent to it. A hesitation. The face of a man who has just realized that the price tag is written in a currency he does not own and cannot counterfeit.

"Yes," Waluigi told him, because Waluigi is honest in exactly the situations where lying would have helped. "And it's *your* account. Your name. Your signature line."

The Abstract Banker — a figure who appears in ledgers considerably more often than he appears in rooms — had assigned the entire metaphysical portfolio to one W. Wario, sole proprietor. No co-signers. No oversight. No cooling-off period. Waluigi checked that page twice, looking for the clause that would make it somebody else's problem. There wasn't one. There is *never* one."""),

("""Then he laughed. He laughed until he had to hold his own stomach. He laughed until there were actual tears at the corners of his eyes, spun around once for the benefit of an audience that consisted of exactly one person, and grabbed that person by both shoulders hard enough to rattle their teeth.""",
 """Then he laughed. He laughed until he had to hold his own stomach. He laughed until there were actual tears at the corners of his eyes, spun around once for the benefit of an audience that consisted of exactly one lanky purple man, and then grabbed that man by both shoulders and shook him hard enough to rattle his teeth. Waluigi's teeth. Waluigi is including this detail because Waluigi is still annoyed about it."""),

("""He was, at that moment, correct about the gold. He was catastrophically wrong about everything downstream of the gold, and the remainder of this article is about the downstream.""",
 """He was, at that moment, correct about the gold. He was catastrophically wrong about everything downstream of the gold, and the remainder of this filing is Waluigi walking you through the downstream one flood at a time. WAH."""),

# --- II. Gravity ------------------------------------------------------------
("""He tapped his chin. He paced. He gave the decision the full weight of nearly forty seconds of careful executive deliberation, which by WarioWare standards constitutes a strategic planning retreat.""",
 """He tapped his chin. He paced. Waluigi timed it: he gave the decision the full weight of thirty-eight seconds of careful executive deliberation, which by WarioWare standards constitutes a three-day strategic planning retreat with catering."""),

("""Two errors are worth flagging before the ceiling comes down, because they are the same two errors he will make three more times.

The first: he evaluated""",
 """Waluigi flagged two errors out loud, before the ceiling came down, and Waluigi would like it entered into the permanent record that he was ignored on both counts. They are the same two errors Wario goes on to make three more times.

The first: he evaluated"""),

("""He signed. The pen scratched. There was no thunder, no cosmic gong — just a very small pop, like a jar of pickles opening in the next room, and then the sensation of the world becoming slightly less serious about itself.""",
 """He signed. Waluigi watched him do it and said nothing, which Waluigi has thought about a great deal since. The pen scratched. There was no thunder, no cosmic gong — just a very small pop, like a jar of pickles opening in the next room, and then the sensation of the world becoming slightly less serious about itself."""),

("""Wario was delighted. He was, at this precise moment, the happiest man in any timeline.""",
 """Wario was delighted. He was, at this precise moment, the happiest man in any timeline. Waluigi was holding onto a doorframe."""),

("""The chaos was not, in fact, happening to somebody else. But the gold arrived before that could sink in, and the gold was very distracting.""",
 """The chaos was not, in fact, happening to somebody else. Waluigi opened his mouth to point this out. Then the gold arrived, and the gold is very distracting, and nobody has ever won an argument against a man mid-fortune."""),

# --- III. The fountain ------------------------------------------------------
("""Here is the part he did not run the numbers on, and here is why this article exists.""",
 """Here is the part he did not run the numbers on. Waluigi ran them. Waluigi ran them in his head in about four seconds, from a crouched position behind a filing cabinet, and this is why this filing exists."""),

("""The atrium ceiling was rated for snow load, sprinkler pipes, and one (1) ill-advised chandelier. It was not rated for the entire liquid capital reserve of a multinational novelty conglomerate arriving from underneath at increasing speed.""",
 """The atrium ceiling was rated for snow load, sprinkler pipes, and one (1) ill-advised chandelier. Waluigi has seen the drawings — he stole them once for unrelated reasons. It was not rated for the entire liquid capital reserve of a multinational novelty conglomerate arriving from *underneath* at increasing speed."""),

# --- IV. The window ---------------------------------------------------------
("""It is important to establish that up until this moment, the disaster was, in Wario's personal accounting, *local*. It was happening to his atrium. Atriums are insured. Atriums are, in a pinch, someone else's fault.""",
 """It is important that Waluigi establish something here, because it is the hinge the entire filing turns on. Up until this moment the disaster was, in Wario's personal accounting, *local*. It was happening to his atrium. Atriums are insured. Atriums are, in a pinch, somebody else's fault."""),

("""And the people. The people were the part that got him.""",
 """And the people. The people were the part that got him, and Waluigi will admit — reluctantly, once, and never again — that they were the part that got Waluigi too."""),

("""This is the moment the What If Board flags as *first contact with consequence*. It is measurable. In every recorded branch of this hypothetical, there is a precise instant when the subject stops calculating profit and starts calculating exits, and for Wario it was a school bus at four hundred feet with its brake lights on.""",
 """This is the moment Waluigi flags as *first contact with consequence*, and Waluigi maintains it is measurable. In every branch of this hypothetical Waluigi has reconstructed, there is one precise instant when the subject stops calculating profit and starts calculating exits. For Wario it was not the river. It was not the trees, or the cows, or the money. It was a school bus at four hundred feet with its brake lights on."""),

# --- V. The button ----------------------------------------------------------
("""The terms, as far as anyone could reconstruct them: the button rewinds the withdrawal.""",
 """The terms, as far as Waluigi could reconstruct them on the spot and has confirmed since: the button rewinds the withdrawal."""),

("""His palm came down on the dome before anyone could finish explaining the rest of it — and this is worth noting too, because "before anyone could finish explaining the rest of it" turns out to be the operative phrase of the entire incident.""",
 """His palm came down on the dome before Waluigi could finish explaining the rest of it. Waluigi would like that phrase carved into something: *before Waluigi could finish explaining the rest of it.* It is the operative clause of this entire incident. It is arguably the operative clause of Wario's entire life."""),

("""Nobody outside remembered. That was the mercy and also the trap: with no witnesses and no lawsuit and no headline, the only person carrying any evidence that it had happened at all was standing in the middle of the atrium, sweating through his overalls, staring at a counter that now read **2 / 3**.""",
 """Nobody outside remembered. That was the mercy and it was also the trap: no witnesses, no lawsuit, no headline, no invoice. The only two people carrying any evidence that it had happened at all were a man sweating through his overalls in the middle of the atrium, and Waluigi, standing four feet behind him with a folder, taking notes that would not exist in an hour."""),

("""He turned around. His usual arrogance was nowhere in the building. He looked like a man who had just been handed his own obituary and told it was a first draft.""",
 """He turned around and looked at Waluigi. His usual arrogance was nowhere in the building. He looked like a man who had just been handed his own obituary and told it was a first draft and that revisions were due Friday."""),

# --- VI. Equivalent exchange ------------------------------------------------
("""It must be conceded that this was, on paper, a smarter wish.""",
 """Waluigi will concede — and Waluigi concedes nothing, ever, so mark the date — that this was, on paper, a smarter wish."""),

("""It was working. It had been working for ninety seconds. He just didn't have the eyes for it yet, because he was scanning the sky for gold when he should have been reading the street.

*Look closer.*""",
 """It was working. It had been working for ninety seconds. He simply did not have the eyes for it, because he was scanning the sky for falling gold when he should have been reading the street. Waluigi had been reading the street since the second the pen stopped moving.

"Look closer," Waluigi said."""),

('''"Huh? Closer? What...? Fine."''',
 '''"Huh? Closer? What...? *Fine.*"'''),

("""*The bank. Across the street. Look at what they're doing.*""",
 """"The bank," Waluigi said. "Across the street. Look at what they are doing." """.rstrip() + "\n"),

("""He stood with his mouth open. Then his head snapped around, accusingly.""",
 """He stood with his mouth open. Then his head snapped around at Waluigi, accusingly, as it always eventually does."""),

# --- VII. The barter --------------------------------------------------------
("""It is working exactly as written, is the answer nobody wanted.""",
 """It is working exactly as written. That is the answer. Waluigi gave it to him at the time and Wario did not enjoy receiving it any more than you are going to enjoy reading it."""),

('''"Look at your workers," someone suggested. He did not want to. He did anyway.''',
 '''"Look at your workers," Waluigi suggested, because Waluigi had already looked and Waluigi did not intend to suffer alone. He did not want to. He did anyway.'''),

("""And then, worse: the market did not die. It *evolved*.

That was the detail that broke him.""",
 """And then, worse — and this is the detail Waluigi finds genuinely magnificent — the market did not die. It *evolved*.

That was the part that broke him."""),

("""His brain audibly short-circuited attempting to model an economy in which he was not the richest man alive but merely *a guy with a lot of metal.*""",
 """Waluigi watched his brain audibly short-circuit attempting to model an economy in which he was not the richest man alive but merely *a guy with a lot of metal*. It made a sound. Waluigi is not exaggerating for effect; there was an audible sound."""),

("""His finger hovered. His hand was shaking, slightly, and he noticed it, and that made it worse.

Then he pressed.""",
 """His finger hovered. His hand was shaking, slightly, and he noticed Waluigi noticing it, and that made it worse.

Then he pressed."""),

# --- VIII. Time -------------------------------------------------------------
("""*What did you choose?*

"Hmmm." He rubbed his chin, savoring it.""",
 """"What did you choose?" Waluigi asked.

"Hmmm." He rubbed his chin, savoring it."""),

("""It is worth pausing on the reasoning, because it is genuinely instructive about how disasters get approved.""",
 """Waluigi wishes to pause on the reasoning here, because it is the single most instructive thing in this filing about how disasters get approved anywhere, by anyone, at any level of government."""),

("""*Try to move that chair. See what happens.*""",
 """"Try to move that chair," Waluigi said. "See what happens." """.rstrip() + "\n"),

("""*Now look at your coworkers.*""",
 """"Now look at your coworkers," Waluigi said, and Waluigi already knew, and Waluigi said it anyway."""),

# --- IX. Still world --------------------------------------------------------
("""He stomped to the window because he needed the outside to still be moving.

The outside was not moving.""",
 """He stomped to the window because he needed the outside to still be moving. Waluigi did not follow him. Waluigi had looked out of that window ninety seconds earlier and had decided, on balance, to spend the rest of the wish facing the other way.

The outside was not moving."""),

("""And then the realization arrived, and it arrived the way the worst ones do: not all at once, but in stages, each one worse than the last.""",
 """And then the realization arrived, and it arrived the way the worst ones always do: not all at once, but in stages, each one worse than the last. Waluigi counted three. Waluigi watched them land on his face one at a time, like weather."""),

("""He paced. He muttered. He cycled through the same short list he always cycled through — love, no; joy, no; money, obviously not — and then he stopped mid-stride, and his eyes went wide, and something that he sincerely believed was brilliance lit up behind them.""",
 """He paced. He muttered. He cycled through the same short list he always cycles through — love, no; joy, no; money, obviously not — and then he stopped mid-stride, and his eyes went wide, and something he sincerely believed was brilliance lit up behind them. Waluigi has seen that specific light before. Waluigi has never once seen it precede a good outcome."""),

# --- X. Limits --------------------------------------------------------------
("""And for about eleven minutes, it was the best decision anyone had ever made.""",
 """And for about eleven minutes — Waluigi timed this one too — it was the best decision anyone in the history of decisions had ever made."""),

("""*Why don't we take a break and go outside?*

He looked up, eyes red, a coin stuck to his forehead by sweat.""",
 """"Why don't we take a break," Waluigi said, from the doorway, "and go outside."

Waluigi would like it acknowledged that this was, structurally, a rescue. He looked up, eyes red, a coin stuck to his forehead by sweat."""),

("""He noticed it on the way past. He even paused.

"Weird," he said, and kept walking.""",
 """He noticed it on the way past. He even paused. Waluigi paused a good deal longer, because Waluigi could see that the counter was not merely finished — it was *unlit*, which is a different thing, and Waluigi did not have a word for the difference yet.

"Weird," Wario said, and kept walking."""),

# --- XI. Golden hour --------------------------------------------------------
("""Outside, for a little while, it was genuinely beautiful.""",
 """Outside, for a little while, it was genuinely beautiful, and Waluigi is required by the terms of an honest audit to say so."""),

("""*Look around you. A world without limits.*

He turned in a slow circle, arms out.""",
 """"Look around you," Waluigi said. "A world without limits."

He turned in a slow circle, arms out."""),

("""*Let's go buy some ice cream.*

The stand was on the corner""",
 """"Let's go buy some ice cream," Waluigi said, and Waluigi said it as a test, because Waluigi had already worked out what was about to happen to the price and wanted Wario to watch it happen with his own eyes.

The stand was on the corner"""),

("""And then he got it, and this is the moment the analysis flags as *comprehension onset*, because for the first time in the entire incident Wario reasoned correctly and in advance.""",
 """And then he got it. Waluigi flags this moment as *comprehension onset*, and Waluigi does not award it lightly: for the first time in the entire incident, Wario reasoned correctly, unprompted, and in advance of the consequence rather than underneath it."""),

# --- XII. Always something --------------------------------------------------
("""Wario stopped walking.

He stood on the sidewalk outside the bakery""",
 """Wario stopped walking.

Waluigi stopped too, half a step behind him, and Waluigi knew — from the specific way the shoulders went — that the arithmetic had finally arrived. He stood on the sidewalk outside the bakery"""),

("""And here is the sentence that finally cracked him open, arrived at by a man who has never voluntarily completed a logic problem in his life:""",
 """And here is the sentence that finally cracked him open — arrived at, Waluigi stresses, by a man who has never voluntarily completed a logic problem in his life, standing in the street, holding a free ice cream:"""),

# --- XIII. The tower --------------------------------------------------------
("""And they were working. That was the horror of it.""",
 """And they were working. Waluigi wants that understood as the true horror of the passage, above the rats and above the sky."""),

# --- XIV. The buttons -------------------------------------------------------
("""Wario stopped in the doorway.

"Wait. Another reset button?!"

There is no limit on how many reset buttons can exist.""",
 """Wario stopped in the doorway. Waluigi walked into the back of him.

"Wait. Another reset button?!"

There is no limit, Waluigi realized, with the calm of a man watching his own house burn from inside it, on how many reset buttons can exist."""),

("""Nobody listened. Why would they? To everyone else in that city, the world had been on fire for six minutes and here was a big red button that had appeared out of nowhere, and every instinct in the human animal says that when the world is on fire and a big red button appears, you press it.""",
 """Nobody listened. Why would they? To everyone else in that city the world had been on fire for six minutes, and here was a big red button that had appeared out of nowhere. Every instinct in the human animal says that when the world is on fire and a big red button appears, you press it. Waluigi does not blame a single one of them. Waluigi blames the man who signed."""),

("""Wario watched a copy of himself run past in the opposite direction, and then watched himself watch himself, and the recursion went eleven layers deep before he stopped being able to count.""",
 """Wario watched a copy of himself run past in the opposite direction, and then watched himself watch himself, and the recursion went eleven layers deep before he stopped being able to count. Waluigi got to nineteen. Waluigi is better at counting."""),

# --- XV. The office ---------------------------------------------------------
("""He sat frozen for a long moment, staring at nothing.

Had it been a dream? It had the shape of one.""",
 """He sat frozen for a long moment, staring at nothing.

Had it been a dream? It had the shape of one, and Waluigi understands the appeal of that reading, and Waluigi would like to gently take it away from you."""),

("""Everything looked perfectly normal. No signs of anything. No evidence, no witnesses, no paperwork — and Wario is a man who has always believed, sincerely and as a matter of operating philosophy, that a thing without paperwork did not happen.""",
 """Everything looked perfectly normal. No signs of anything. No evidence, no paperwork — and Wario is a man who believes, sincerely and as a matter of operating philosophy, that a thing without paperwork did not happen.

No witnesses either. Except one. WAH."""),

("""He did not laugh. He got a lot done that day.

*Nobody at WarioWare has ever been able to explain why.*""",
 """He did not laugh. He got a lot done that day.

Nobody at WarioWare has ever been able to explain why.

Waluigi can. Waluigi was there. Waluigi is going back to his tennis racket now, because documentation is exhausting when the subject is this prone to selling the floor out from under a building he is standing in.

WAAAAAAAH!"""),
]

applied, missed = 0, []
for old, new in POV:
    hit = False
    for c in entry['chapters']:
        if old in c['body']:
            c['body'] = c['body'].replace(old, new, 1)
            applied += 1
            hit = True
            break
    if not hit:
        missed.append(old[:70].replace('\n', ' / '))

# ------------------------------------------------------- Waluigi analysis ----
ANALYSIS = {
'the-paperwork': ("Waluigi's Opening Audit",
 "Everybody reads this scene as the moment Wario got lucky. Waluigi reads it as the moment an institution successfully outsourced its liability. The Abstract Bank did not trick anyone. It disclosed everything, in writing, in a font a reasonable person could read, and then handed the pen to the least reasonable person in the hemisphere. That is not fraud. That is *targeting*. WAH."),

'gravity': ("Waluigi's Structural Analysis",
 "He did not sell gravity. He sold the floor, the roof, the reservoir, the topsoil and the atmosphere, and he received a receipt that said GRAVITY on it. This is the oldest failure in commerce: paying attention to the label instead of the contents. Waluigi has built an entire career on people who do this, and Waluigi still found it painful to watch from six feet away."),

'the-fountain': ("Waluigi's Economic Note",
 "Observe that the gold behaved *correctly*. It did not misfire. Mass without a downward preference goes up through whatever is above it, and what was above it was Wario. His fortune spent forty years being described as 'crushing,' 'staggering' and 'immense,' and the instant those adjectives became literal it tried to kill him with them. Waluigi finds this so satisfying he has had to reread it several times."),

'the-window': ("Waluigi's Moral Ledger",
 "Here is the number nobody in that atrium was calculating. Wario's exposure was one building. The world's exposure was the world. He got to make a decision at a scale where he collected all of the upside and approximately none of the downside, which is not greed — greed is ordinary, greed is Tuesday — it is a *governance failure*. The Abstract Bank issued planetary authority to a single account with no counterparty. Waluigi files that under negligence, not villainy."),

'the-button': ("Waluigi's Note on the Safety Device",
 "Waluigi despises this button, and Waluigi would like to be precise about why. It did not make Wario safer. It made him *faster*. Three free undos converted a decision that should have taken a month of consultation into a slot machine, and a man with three lives left does not think — he plays. Every safety mechanism that removes the cost of being wrong is a machine for manufacturing wrongness at volume. WAH."),

'equivalent-exchange': ("Waluigi's Economic Audit",
 "This is the only wish in the file where Wario correctly identified that his enemy was a *rule* rather than an *object*, and it is also the wish that hurt him most personally. Note the shape of that. He aimed higher and lost more. Anyone who tells you sophistication protects you from consequences has never watched a rich man abolish the concept of price and then check his own pockets."),

'the-barter': ("Waluigi's Final Verdict on Wish Two",
 "Waluigi has said this at three separate Congress hearings and been thrown out of two of them: **Wario is not rich because he has gold. Wario is rich because other people do not.** His fortune is a *ratio*, and he deleted the denominator. And then the market — which is a living, scheming, disgusting thing Waluigi has enormous respect for — simply grew a new currency out of joy and time units within the hour, because people will always find something scarce to trade, and if you take away the coins they will start pricing their own feelings. This branch is the only one where nobody dies and Wario is miserable. Draw your own conclusions. Waluigi already has."),

'time': ("Waluigi's Correction",
 "He wanted to fire his calendar and he terminated causality instead. This is not stupidity, exactly — Waluigi wants to be fair, and it costs Waluigi a great deal to be fair to Wario — it is a category error that almost every powerful person makes. He confused the *symbol* of the thing he resented (the clock on the wall, the deadline, the little bell) with the *substrate* underneath it (duration, sequence, the interval in which any event is permitted to finish happening). Sell the substrate and you do not get a lie-in. You get a photograph."),

'the-still-world': ("Waluigi's Coroner's Note",
 "Waluigi has thought about this chapter more than is healthy. Those people were not dead. A pulse is a rhythm and a rhythm is a pattern in time, so there was no interval in which a heart could complete a beat — which means there was also no interval in which anybody could *stop*. Nobody in that building died. Nobody in that building could. That is not a mercy. Dying is a limit, and Wario was about to sell those too. WAH."),

'limits': ("Waluigi's Note on the Paperwork",
 "Waluigi's favorite joke in the entire timeline, and Waluigi did not write it — the universe did. The wish was granted flawlessly. Infinite gold arrived exactly as ordered. And within ninety seconds the same clause was generating infinite *forms*, because Wario's own corporate philosophy has always been that there is more work to be done, and 'no limits' is very obedient about honoring a philosophy. He was buried alive by his own operating principles. Waluigi laughed. Waluigi is not proud of laughing. Waluigi would do it again."),

'the-golden-hour': ("Waluigi's Price Theory",
 "Every price in existence is a sentence with the word *no* in it somewhere. No, not for that. No, not below this. No, not to you. Abolish limits and you have not made everything cheap — you have removed the ability of any seller anywhere to complete that sentence. The garlic ice cream did not become free because it became abundant. It became free because the shopkeeper lost the vocabulary to refuse. Waluigi found that far more frightening than the meteors, and Waluigi would like it on record that Waluigi said so before the meteors."),

'always-something': ("Waluigi's Thesis",
 "**If there is always something, there is never nothing.** Waluigi will be blunt, because this is the one paragraph in the filing Waluigi actually cares about. People talk about scarcity as if it were a wound in the world. It is not. It is the world's *off switch*. It is how a meal ends, how a rat population stops, how a sky stays empty enough to fly through, how a disease finishes, how a life concludes. Every ending you have ever been grateful for was a limit doing its job quietly in the background. Wario looked at the one mechanism that lets anything ever be *finished* and he called it a ceiling on his income."),

'the-tower': ("Waluigi's Structural Assessment",
 "The tower is the whole thesis rendered in glass and steel, and Waluigi wants everyone to look at it. It did not collapse from the earthquakes. It failed because its *inside* outgrew its *outside* — more floors, more corridors, more staircases budding between existing staircases, more customers, more complaints, more forms per complaint. A building is a promise about how much can be inside it. Break the promise and you do not get a bigger building. You get a shape that cannot agree with itself. WarioWare had been running on 'there is always more to do' since the day it opened, and for one afternoon the universe took that motto entirely literally."),

'the-buttons': ("Waluigi's Post-Incident Finding",
 "This is the finding Waluigi would like read aloud at every hearing from now until the heat death that no longer exists. The world did not end because of gravity, or exchange, or time, or even limits. **The world ended because of the safety mechanism.** The undo button had no exemption from the fourth wish, so the undo button multiplied, and then it was in the hands of frightened strangers who had every reason to press it, and an infinity of simultaneous corrections is not a correction — it is a demand that reality be all of its drafts at once. Wario did not destroy the timeline with a wish. He destroyed it with the thing that was supposed to save him from his wishes."),

'the-office': ("Waluigi's Closing Statement",
 "So: dream, or not? Waluigi will give the honest answer, which is the unsatisfying one. There is no admissible evidence. Every reset restored the world without restoring the memory, which means the entire catastrophe is legally, forensically and bureaucratically identical to nothing at all. Wario has no paperwork, so as far as Wario is concerned it did not happen.\n\nBut look at the corner of the desk. There is a ring in the dust the size of a saucer, and dust does not lie, and dust does not have to be signed.\n\nWaluigi has one further observation and then Waluigi is finished. Wario spent that afternoon trying to buy his way out of every constraint the universe had ever placed on him — weight, cost, time, and finally limit itself — and the day ended with him voluntarily picking up a finite stack of paper and working through it to the bottom, on purpose, because it would *end*. He has never explained it. He never will; he does not have the words and he would not spend them on this.\n\nWaluigi does. Waluigi was standing right there. WAH."),
}

for c in entry['chapters']:
    a = ANALYSIS.get(c['id'])
    if a:
        c['analysis'] = {'title': a[0], 'body': a[1]}

# --------------------------------------------------------------- metadata ----
entry['narrator'] = 'Waluigi'
entry['pov'] = 'First person — Waluigi, present as witness for the full incident'
entry['author'] = 'Waluigi (Waluipedia What If Board, sole attending analyst)'
entry['byline'] = 'Audited, narrated and grudgingly survived by Waluigi'
entry['clearance'] = 'Open file — filed by Waluigi over the objections of literally everyone'
entry['epigraph'] = ("\u201cIt's not a scam. Waluigi checked. That's the problem \u2014 a scam has a ceiling.\u201d "
                     "\u2014 Waluigi, in the room, ignored")
entry['summary'] = (
 "Waluigi's eyewitness audit of the afternoon Wario inherited the Abstract Bank. Wario sells gravity, then the "
 "Law of Equivalent Exchange, then time, then limits. Each withdrawal is smarter than the last and each one "
 "fails worse, until the final wish removes the ceiling on the reset buttons themselves and the timeline collapses "
 "under an infinity of simultaneous undos. Waluigi was standing four feet away for all of it, was ignored at every "
 "decision point, and is the only person left holding the ledger.")
entry['tags'] = ['Waluigi', 'Wario', 'Abstract Bank', 'Economics', 'Cosmology',
                 'Non-canon', 'Reset Loop', 'WarioWare', 'Eyewitness Audit']

entry['verdict'] = {
  'title': "Waluigi's Verdict",
  'body': ("Four withdrawals. Three resets. One afternoon. Waluigi's official finding is that Wario was never "
           "actually trying to become rich \u2014 he already *was* rich, obscenely, before the courier arrived. "
           "What he was trying to buy, every single time, was the removal of a *no*. No, gold is heavy. No, you "
           "must give to get. No, the day has an end. No, there is a maximum.\n\n"
           "And the universe said yes four times in a row, which is the worst thing that has ever happened to him.\n\n"
           "Waluigi's recommendation to the Board: the Abstract Bank should not be regulated, audited, or shut down. "
           "It should be given, in full, to somebody boring. WAH."),
}

# --------------------------------------------------------------- recount -----
def wordcount(s):
    return len(re.findall(r"[A-Za-z0-9'\u2019\u2014-]+", re.sub(r'[*_>#]', ' ', s or '')))

prose = sum(wordcount(c['body']) for c in entry['chapters'])
analysis = sum(wordcount(c['analysis']['title'] + ' ' + c['analysis']['body'])
               for c in entry['chapters'] if c.get('analysis'))
apparatus = (sum(wordcount(' '.join(str(v) for v in l.values())) for l in entry.get('ledger', []))
             + sum(wordcount(f['t'] + ' ' + f['d']) for f in entry.get('findings', []))
             + wordcount(entry['verdict']['body']))
total = prose + analysis + apparatus
entry['wordCount'] = total
entry['readingTime'] = max(1, round(total / 225))

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(doc, f, ensure_ascii=False, indent=2)
    f.write('\n')

print(f'POV rewrites applied : {applied}/{len(POV)}')
if missed:
    print('MISSED:')
    for m in missed:
        print('  -', m)
print(f'analysis blocks      : {sum(1 for c in entry["chapters"] if c.get("analysis"))}/{len(entry["chapters"])}')
print(f'prose {prose} + analysis {analysis} + apparatus {apparatus} = {total} words')
