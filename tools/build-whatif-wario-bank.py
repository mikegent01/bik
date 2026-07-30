#!/usr/bin/env python3
"""Builds Reputation-Matrix2/data/whatifs.json — the What If archive.

Run:  python3 tools/build-whatif-wario-bank.py
"""
import json, os, re, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'whatifs.json')

# ---------------------------------------------------------------- chapters ---
CH = []
def ch(cid, heading, phase, wish, body):
    CH.append({'id': cid, 'heading': heading, 'phase': phase, 'wish': wish, 'body': body.strip()})

ch('the-paperwork', 'I. The Paperwork Nobody Reads', 'Prelude', None, """
The document arrived the way all catastrophic documents arrive: unremarkably, in a folder, on a Tuesday.

Wario snatched the paper out of the courier's hands before the poor soul had finished the sentence "sign here to acknowledge receipt of." His beady eyes went down the page in hard, greedy little jumps, the way a rat reads a kitchen. His mustache twitched. It twitched again. Somewhere around the third clause it began twitching in a rhythm that anyone who had worked at WarioWare for more than a fiscal quarter would have recognized as the prelude to a very expensive idea.

"Wahaha! So you're telling me," he said, holding the page up like a wanted poster, "that I can just *withdraw* 'love' or 'time' or whatever junk people believe in — and sell it for an UNLIMITED amount of gold? That's not a scam? This ain't one of those fake online stores where they take your money and give you NOTHING?"

It was not a scam. That was, in hindsight, the problem. A scam has a ceiling. A scam has a guy at the other end of it who wants something, and a guy who wants something can be negotiated with, threatened, or out-cheated. The Abstract Bank wanted nothing. It simply processed. It had the terrible patience of an institution that has never once been wrong about its own paperwork.

He kept reading. Then he stopped, and squinted, and did the thing he almost never did, which was slow down.

"Wait... this says once sold, the concept ceases to exist?! Like... *forever*? No more love in the world if I cash it out?"

A strange look crossed his face. Not guilt exactly — Wario has a documented immunity to guilt in the same way certain deep-sea creatures have an immunity to pressure — but something adjacent to it. A hesitation. The face of a man who has just realized that the price tag is written in a currency he does not own and cannot counterfeit.

The confirmation came anyway. Yes. And it's *your* account. Your name. Your signature line. The Abstract Banker — a figure who appears in ledgers more often than in rooms — had assigned the whole metaphysical portfolio to one W. Wario, sole proprietor, no co-signers, no oversight, no cooling-off period.

Wario's jaw dropped. His eyes went wide as dinner plates, and for one full second — a genuinely historic second, worth commemorating with a small plaque — he was speechless.

"Wait. Wait wait WAIT. You're telling me this ENTIRE metaphysical bank account is MINE?! Like, legally? Officially? The Abstract Banker himself signed it over to WARIO?!"

Then he laughed. He laughed until he had to hold his own stomach. He laughed until there were actual tears at the corners of his eyes, spun around once for the benefit of an audience that consisted of exactly one person, and grabbed that person by both shoulders hard enough to rattle their teeth.

"This means I could withdraw LOVE right now and sell it! Or TIME! Or GRAVITY!! Do you know how much gold that'd make me? I'd be RICHER than Mario could EVER dream of being!!"

He was, at that moment, correct about the gold. He was catastrophically wrong about everything downstream of the gold, and the remainder of this article is about the downstream.
""")

ch('gravity', 'II. First Withdrawal — Gravity', 'Wish One', 'Gravity',
"""
"Hmmm... which one should I start with... hmmm hmmm..."

He tapped his chin. He paced. He gave the decision the full weight of nearly forty seconds of careful executive deliberation, which by WarioWare standards constitutes a strategic planning retreat.

Then the smile arrived — that specific devious crescent that has preceded every structural failure in the company's history.

"I know just what I'll do. GRAVITY! Yeah! I'll sell 'em gravity! Who needs gravity anyway? It's not like Mario or any of those other losers can jump super high without it! Wahaha! They'll be stuck on the ground while I soar through the sky on the wings of my new, unlimited wealth! It's the perfect plan!"

Two errors are worth flagging before the ceiling comes down, because they are the same two errors he will make three more times.

The first: he evaluated the concept by its *nuisance value* rather than its *load-bearing value*. Gravity, to Wario, was the thing that made stairs annoying and made falling hurt. He did not think of it as the thing that keeps oceans in oceans and roofs on rooms, because nobody thinks of it that way until it is invoiced.

The second: he assumed a sold concept could be aimed. He believed, in some unexamined corner of his brain, that gravity would stop applying to *his rivals* while continuing to apply to *his floors*. The Abstract Bank does not sell exceptions. It sells the whole idea, retail, no returns.

He signed. The pen scratched. There was no thunder, no cosmic gong — just a very small pop, like a jar of pickles opening in the next room, and then the sensation of the world becoming slightly less serious about itself.

The lamp went first. It floated up off the side table with the mild indignation of a cat being lifted. Then the chairs. Then a coffee cup, tumbling end over end, spilling a slow brown ribbon of liquid that hung in the air and refused to land. Papers unfiled themselves. A stapler drifted past at eye level with quiet menace. The building groaned — not the polite creak of settling timber, but the deep and personal groan of a structure discovering that the force which had been holding it together for forty years had resigned without notice.

Wario was delighted. He was, at this precise moment, the happiest man in any timeline.

"Looks like things are getting a little... chaotic," he observed, with the mild interest of a man watching weather happen to somebody else.

The chaos was not, in fact, happening to somebody else. But the gold arrived before that could sink in, and the gold was very distracting.
""")

ch('the-fountain', 'III. The Fountain', 'Wish One', 'Gravity', """
It came up out of the vaults like water finding a crack — first a trickle of coins through the floor grates, then a rope, then a column, then a genuine geyser of bullion tearing straight up through the atrium as the vault doors gave way beneath the pressure of wealth that no longer had any reason to stay put.

Bars twirled. Coins spiraled in long golden helixes, catching the light, chiming against each other in a sound like a thousand cash registers agreeing on something. It looked less like money and more like fireworks that had gotten a business degree.

"OHHHH YEAHHH! That's what I'm talking about!"

He jumped for it — actually jumped, in a room with no gravity, which meant he mostly just launched himself into a slow tumble and smacked a handful of coins that bounced harmlessly off his own forehead. He didn't care. He was laughing again, arms spread wide, spinning in the middle of a rising cyclone of his own fortune.

"I'm gonna be richer than any king has ever been! Mario who? That loser doesn't even know what real wealth looks like!"

Here is the part he did not run the numbers on, and here is why this article exists.

Gold is heavy. That is, in fact, its entire physical personality. In a world with gravity, a vault's worth of gold is a problem for the *floor*, and floors are designed with that in mind — they are poured thick, reinforced, rated, inspected, and grumbled about by accountants who resent the cost. In a world without gravity, all of that mass does not become weightless in any useful sense. It becomes *unpinned*. It keeps every gram of its inertia and loses every ounce of its obedience. And it goes up. And it keeps going up, because nothing anywhere in the causal chain has any remaining reason to tell it to stop.

The atrium ceiling was rated for snow load, sprinkler pipes, and one (1) ill-advised chandelier. It was not rated for the entire liquid capital reserve of a multinational novelty conglomerate arriving from underneath at increasing speed.

The first crack sounded like a rifle.

Wario's laughter cut off mid-syllable. His head snapped up. Across the ceiling, a spiderweb of fractures was opening in slow, deliberate branches, plaster sifting down in a fine snow that also refused to fall properly and instead just hung there, glittering, an indoor galaxy of dust and coin.

"Uh... oh."

The grin came back a half-second later, wider, defensive, the way a grin does when it is doing a job it is not qualified for. "Pfft! What's it matter? The building can take it! It'll be fine!"

A chunk of plaster the size of a dinner plate broke loose, drifted lazily sideways, and shattered against a floating filing cabinet. His stomach — which had always been more honest than his mouth — turned over.
""")

ch('the-window', 'IV. What He Saw Through the Window', 'Wish One', 'Gravity', """
It is important to establish that up until this moment, the disaster was, in Wario's personal accounting, *local*. It was happening to his atrium. Atriums are insured. Atriums are, in a pinch, someone else's fault.

Then he looked out the window.

The river was leaving. Not flooding — *leaving*, rising off its own bed in long silver ribbons that unwound into the sky like ripped fabric, taking the fish with it, taking the reeds, taking a rowboat that spun with its oars still in the locks. The trees along the boulevard were coming out of the ground root-first, dirt crumbling off them in slow clouds, and they went up turning gently, like a mobile over a crib.

And the people. The people were the part that got him.

They were screaming. He could see the shapes their mouths made and could not hear a single one of them through the glass, which somehow made it enormously worse. A woman had grabbed a lamppost with both arms and was holding on with her legs streaming out behind her like a flag. A man had caught his child by one wrist. A school bus was ascending in a slow diagonal, still perfectly level, its brake lights on, still signaling a turn it would never make. Cows went past upside down, legs paddling, radiating an expression of profound bovine betrayal.

"What... what did I do?!"

His voice cracked. It should be entered into the permanent record that it cracked, because there is no other documented instance of it happening. He pressed both palms flat against the glass like a kid at an aquarium, except everything in this tank was drowning upward.

"Okay okay okay this is BAD!" He was pacing now, which is difficult without gravity and which he was accomplishing largely by shoving off the furniture. His pitch climbed with every sentence. "This wasn't the deal! I just wanted gold, not a floating apocalypse! Why isn't gravity coming back?! What kind of stupid metaphysical bank account was this?!"

Outside, an office block on the corner shrugged free of its foundation. It did not topple. It simply left, rising as a single intact column, dragging a beard of pipes and cables and one very confused pigeon.

This is the moment the What If Board flags as *first contact with consequence*. It is measurable. In every recorded branch of this hypothetical, there is a precise instant when the subject stops calculating profit and starts calculating exits, and for Wario it was a school bus at four hundred feet with its brake lights on.

That is when the button appeared.
""")

ch('the-button', 'V. The Button (1 / 3)', 'Interlude', None, """
It sat on the table as if it had always been there and the table had simply been waiting for permission to mention it: a single mechanical dome, red, on a brushed housing, with a small counter etched into the base.

**1 / 3.**

"Reset?!" Wario stopped mid-shove and hung there, one hand on a floating chair. "Wait — what do you mean? You can *undo* this?!"

The terms, as far as anyone could reconstruct them: the button rewinds the withdrawal. The concept is returned to the account. The world reassembles itself around the restoration and remembers nothing. And then the account holder may withdraw and sell something else instead. Three presses exist. There is no fourth. The counter does not negotiate, and the counter is not a suggestion.

He did not hesitate for even a full breath.

"RESET! RESET IT RIGHT NOW!"

His palm came down on the dome before anyone could finish explaining the rest of it — and this is worth noting too, because "before anyone could finish explaining the rest of it" turns out to be the operative phrase of the entire incident.

Reality did not so much rewind as *flinch*. The world blurred, twisted, folded through itself along seams that had no business existing, and then snapped taut with a sound like a bedsheet being shaken out. The gold went home. The river went home. The trees went back into their holes, roots first, dirt closing over them politely. Every floating object in the atrium came down at once with a long clattering *thud* that was, honestly, the most beautiful sound Wario had ever heard, and he has owned several vaults.

The school bus finished its turn.

Nobody outside remembered. That was the mercy and also the trap: with no witnesses and no lawsuit and no headline, the only person carrying any evidence that it had happened at all was standing in the middle of the atrium, sweating through his overalls, staring at a counter that now read **2 / 3**.

He turned around. His usual arrogance was nowhere in the building. He looked like a man who had just been handed his own obituary and told it was a first draft.

"I... I can't mess this up again," he muttered, mostly to himself. He started counting on his fingers like a kid at an ice cream counter with exactly one dollar. "No more gravity. What else is there? Love? No, no, that's stupid — people would cry everywhere, and crying people don't shop. Time... money... joy..."

Each one came up, got turned over, got rejected. And then his face did the thing it does, the light coming on behind the eyes, and the grin unfolded slowly across his face like a man laying out a winning hand.

"Wait. Wait, hang on. I got it."
""")

ch('equivalent-exchange', 'VI. Second Withdrawal — The Law of Equivalent Exchange', 'Wish Two', 'Equivalent Exchange', """
"I wish away..." — he paused, theatrically, letting it hang, because if you are going to break the universe you may as well have stage presence — "...THE LAW OF EQUIVALENT EXCHANGE!"

He crossed his arms and puffed out his chest, thoroughly pleased.

"That's right! No more equivalent exchange rules! Now I can get ALL the gold without giving anything up in return! Finally — a perfect system where everything is mine and nothing gets taken away from me!"

It must be conceded that this was, on paper, a smarter wish. Gravity is a *physical* law; break it and you get rubble in the first four seconds. Equivalent Exchange is an *economic* law, an abstract governor on the relationship between what leaves your hand and what enters it. Break that and the consequences are subtle, slow, and largely paperwork. Wario had, without meaning to, graduated from vandalism to policy.

The pen scratched. The little pop happened in the next room again.

And then... nothing.

Silence. Genuine silence, the kind that makes you check whether your ears are working. He waited. He looked around the atrium — chairs on the floor, papers on desks, coffee in cups and staying there. He walked to the window with the caution of a man checking under his own bed.

The world was normal. Insultingly normal. Trees rooted, people walking, birds doing standard bird business against a standard sky.

"Wait..." His voice came out small. He pressed his face to the glass. "No... no way." He rubbed his eyes with both fists, shook his head, looked again. "That can't be right. I wished away the Law of Equivalent Exchange — the fundamental rule of nature! Gold should just be raining down on me for free! Why is my wish not working?!"

It was working. It had been working for ninety seconds. He just didn't have the eyes for it yet, because he was scanning the sky for gold when he should have been reading the street.

*Look closer.*

"Huh? Closer? What...? Fine."

He leaned in. And slowly, the way a hidden picture resolves once someone tells you what shape to look for, the wrongness surfaced. People's expressions were a shade too generous. Postures were too loose. Nobody was hurrying. A courier had stopped mid-route to help a stranger carry a box and neither of them appeared to be negotiating a rate. The buildings themselves looked subtly warped, as if the architecture had relaxed its shoulders.

*The bank. Across the street. Look at what they're doing.*

He squinted at the marble facade of Second Mushroom Mercantile, and at first it read as an ordinary business day. People in. People out. Money moving.

Then he saw it. They were walking out with briefcases so overfull the bills were fanning out of the seams, arms wrapped around stacks taller than their own heads, laughing about it, and not one single coin, credit, chit, or promise was going back the other way across the counter. The tellers were *handing it over*. Cheerfully. There were no transactions happening at Second Mushroom Mercantile at all — only distribution.

"No... freakin'... *way*."

He stood with his mouth open. Then his head snapped around, accusingly.

"You — you told me the wish would make it so *I* could get all the gold, right? But everyone's getting FREE MONEY! How is this working?!"
""")

ch('the-barter', 'VII. The Economy That Grew Back', 'Wish Two', 'Equivalent Exchange', """
It is working exactly as written, is the answer nobody wanted.

Equivalent Exchange is not a rule about Wario. It is a rule about *everyone*, and abolishing it does not create a privilege — it creates a vacuum. Wario had spent his entire career being better than other people at exchange: harder bargains, sharper margins, thinner deals. His fortune was not built out of gold; it was built out of *asymmetry*. He was rich because the ratio between what he gave and what he got was tilted in his favor and he was very, very good at keeping it tilted.

Abolish the ratio and you do not make Wario infinitely rich. You make him *ordinary*. You take the one game he has ever won and you delete the scoreboard.

"Look at your workers," someone suggested. He did not want to. He did anyway.

"WHAT?! My workers?!"

They were sitting down. All of them. Not one keyboard was in use. Not one crate was being moved, not one microgame was being tested, not one invoice was being chased. They were lounging in their chairs with coffee that had not been purchased and pastries that had not been baked by anyone in particular, and they were *relaxed*, in a way Wario found more offensive than sabotage.

"You've gotta be kidding me." He hissed it through his teeth. "I asked for free gold, and instead EVERYBODY gets free money?! Even my own damn workers are slacking off, enjoying free treats all day! What the hell kind of wish is this?!"

And then, worse: the market did not die. It *evolved*.

That was the detail that broke him. He had assumed that removing exchange would end commerce, and ending commerce would at least leave him as the last man standing on a pile of obsolete but impressive gold. Instead, within the hour, people had simply started trading the things that still felt scarce to them — which is to say, the things that were never denominated in coins in the first place.

"Wait... wait WAIT! Are those people bartering with JOY?!"

They were. A woman at the produce stall was handing over a small warm glowing orb, unmistakably labeled, in exchange for two bags of groceries and a bunch of parsley thrown in as a kindness. Down the block, a man was counting out little ticking discs — *time units*, marked in what looked like minutes — into a barber's palm. Elsewhere: patience, traded by the ounce. Attention, sold in blocks. Someone was very seriously appraising a jar of somebody else's nostalgia.

There was no coinage anywhere in the transaction chain. The gold in Wario's vault had, in the space of ninety minutes, become approximately as valuable as decorative gravel — heavy, shiny, and universally available, which are the three worst adjectives a currency can have.

His brain audibly short-circuited attempting to model an economy in which he was not the richest man alive but merely *a guy with a lot of metal.*

On the desk, the dome sat quietly, waiting.

**2 / 3.**

"This isn't what I meant!" he sputtered, dragging a hand down his face. "I wanted gold, not this ridiculous barter system! But..."

His eyes went to the counter. One press left after this one. He paced in front of it, and for the first time in his greedy life he genuinely deliberated.

"I could keep this going... but that means everyone else gets free stuff too! No way I'm sharing my wealth with those losers!" He groaned. He kicked a chair, then immediately stopped himself, because a man with a shrinking number of options learns to respect furniture. "Ugh. Ughhhh. I just wanted to be *rich*! Why is everything so messed up?!"

His finger hovered. His hand was shaking, slightly, and he noticed it, and that made it worse.

Then he pressed.
""")

ch('time', 'VIII. Third Withdrawal — Time', 'Wish Three', 'Time', """
Reality flinched again. The barter stalls unwove themselves. The bank tellers remembered how to say no. His workers stood back up mid-lounge and resumed jobs they never knew they had abandoned, and the gold in the vault went back to being the most important substance in the world.

He glanced around cautiously. Nothing seemed out of place. No floating. No orbs of joy. He let out a breath he'd been holding for what felt like a fiscal year.

"What the — no way. Did it work this time? Did I really pick the right one?"

Peaceful street. Chirping birds. Normal pedestrians, moving at normal pedestrian speeds, exchanging normal amounts of money for normal goods.

"Okay. So far, so good."

*What did you choose?*

"Hmmm." He rubbed his chin, savoring it. He had waited his whole life to be the smartest guy in a room and he intended to milk the moment for every drop. "I thought it through carefully. And I figured out the perfect concept to wish away." A pause. Another pause, for a beat longer than was comfortable. "I wished away... the concept of TIME."

"Yep, you heard me right. I went *big* this time!" He thumped his chest. "Time itself — gone. No more hours, no more minutes, no more seconds. Nothing left but endless, timeless bliss, just the way a man like me needs it! Now the world can't tell me when to wake up or go to bed or do anything else. I'm in control of my schedule now! Heheheh!"

It is worth pausing on the reasoning, because it is genuinely instructive about how disasters get approved. Wario did not think he was selling *duration*. He thought he was selling the *clock* — the schedule, the deadline, the calendar, the little tyrant on the office wall. He was selling his boss, essentially, except he *is* the boss, which should have been the first clue that the thing he resented was not the thing he was signing away.

*Try to move that chair. See what happens.*

"Okay..." He crossed the office skeptically and got both hands on the seat back. He pulled. Nothing. He braced a foot against the leg and hauled with the full weight of a man who has spent decades lifting things he did not own. The chair did not move a millimeter. It was not heavy. It was *finished*. It had no next position available to it, because motion is displacement over an interval, and the interval had been removed from the catalog.

"What the heck. Why can't I pick it up?! It's just a chair!"

*Now look at your coworkers.*

He turned. He snapped his fingers an inch from an employee's nose.

Nothing. The man's eyes were half-lidded and utterly still. No blink. No twitch. Wario waved a hand in front of his face, then shouted directly into his ear at a volume that would have gotten a complaint filed on any other day.

"Hey buddy! WAKE UP!"

He grabbed a second worker by the shoulders and shook. The head lolled back and forth like a doll's, boneless, eyes glazed and unfocused on anything in this or any other room. When he let go, the body slumped forward and stayed exactly as it slumped, held in place by nothing, going nowhere.

"This is messed up," he said, quietly, and it is notable that he said it quietly.

Every person in that office was frozen mid-action. Mid-sentence. Mid-step. A pen was resting a hair above a signature line, ink loaded, and it would rest there forever.
""")

ch('the-still-world', 'IX. The Still World', 'Wish Three', 'Time', """
He stomped to the window because he needed the outside to still be moving.

The outside was not moving.

The street was silent in a way that streets never are, not even at four in the morning — because even at four in the morning there is a breeze, a distant engine, a leaf doing something. There was nothing. A taxi sat halfway through a left turn, wheels cocked, engine running and producing no sound, exhaust hanging behind it in a solid gray sculpture. A cyclist was tilted at eleven degrees off vertical, mid-lean, held there by the absence of any moment in which to complete the fall. Birds hung in the air like ornaments on invisible thread, wings spread, going nowhere at any speed.

He looked up. The sun had stopped too. Not set, not risen — *stopped*, pinned at a mid-afternoon angle, casting shadows that would never move an inch again in either direction.

"What the hell..."

And then the realization arrived, and it arrived the way the worst ones do: not all at once, but in stages, each one worse than the last.

Stage one: everything is frozen.
Stage two: everything *includes people*.
Stage three: people are not machines that can be paused.

He turned around very slowly and looked back into the office.

"Wait a minute. If time stopped for everyone else..."

His employees were statues. Not sleeping — statues. He crossed the room in four strides, grabbed the nearest one by the wrist, and pressed two fingers to the underside of the jaw, hunting for a pulse.

A pulse is a rhythm. A rhythm is a pattern in time. There was no time.

There was nothing under his fingers. Not a slow beat, not a weak one. Nothing, because there was no interval in which a heart could complete the act of beating. No chest rose. No chest fell. No lung filled. No cell divided anywhere in the building, in the district, in the world. They were not dead in any sense a coroner could sign off on — they were *suspended*, which is arguably worse, because dead is a state and suspended is a sentence.

"They're not moving at all! Are they okay?! Are they — hey. HEY."

He was shouting into a room that could not hear him and could not stop not hearing him. He clutched his head with both hands.

"Okay okay okay. Don't panic, Wario. Don't panic."

On the desk, the dome had gone dim. Not dark. Dim, the way a bulb dims when it is nearly out.

**3 / 3.**

His hands were shaking, and this time he did not pretend otherwise. He paced in front of a row of people who could not watch him do it.

"If I reset one last time... maybe I can fix this. Maybe pick a concept that won't turn everyone into statues." He glanced at the counter again. "This is my last chance. No more messing up. I can't wish away time again, and gravity was bad too, and the exchange thing made me poor, so — so what's LEFT?"

He paced. He muttered. He cycled through the same short list he always cycled through — love, no; joy, no; money, obviously not — and then he stopped mid-stride, and his eyes went wide, and something that he sincerely believed was brilliance lit up behind them.

"Wait. Wait WAIT! I should've thought of this from the start! The PERFECT concept to wish away!" He clapped his hands together, practically vibrating. "It's so simple I can't believe I didn't think of it sooner. This is gonna make me richer than anyone has ever been — AND nobody will even notice anything's wrong!"

He pointed at the button like it was a trophy he had already won.

"Here's my final wish! I'm wishing away... the concept of LIMITS! No more limits on wealth! No maximum amount of gold I can own! Infinite money just pours into my hands without breaking reality or freezing people!"

He pressed the dome with a flourish.
""")

ch('limits', 'X. Final Withdrawal — Limits', 'Wish Four', 'Limits', """
And for about eleven minutes, it was the best decision anyone had ever made.

The world blurred, folded, snapped. Time came back — he heard it come back, the whole sound of a city resuming at once, engines and voices and a bird finishing a wingbeat it had started an eternity ago. His employees blinked, shifted, kept typing, entirely unaware that they had spent a subjective forever as furniture.

He looked down at his own hands, and gold was pouring into them out of nothing at all.

Not falling from the ceiling. *Arriving.* Coins condensing out of empty air an inch above his palms, faster and faster, spilling between his fingers, piling on his shoes, mounding on the carpet, hissing across the floor in a bright cascading tide.

"YES!! IT WORKED!"

He laughed. He threw a double handful into the air and let it come down on his head. The pile reached his knees inside a minute and he waded through it like a man at the beach.

"Boss! Boss!"

An employee shouldered through the door with an armful of paper, entirely oblivious to the fact that his employer was standing thigh-deep in a spontaneously generating fortune. "Can you review these reports? They're all done, but I need your approval."

Wario growled. Of all the moments. Then a genuinely reasonable thought occurred to him — possibly the only reasonable thought he had all week — which was that there was no longer any limit on how much gold could arrive while he did something else with his hands.

"Uh. Yeah. Bring 'em here."

He sat down at his desk, coins still raining into the room, and began to read.

The stack grew.

He signed the top sheet, and there were four beneath it. He signed those, and there were eleven. He looked up, and the in-tray had become a tower, and the tower had become a colonnade, and paper was arriving on his desk at a rate that suggested a printer somewhere had achieved enlightenment.

"What the — where is all this coming from?!"

There is no limit on how much gold can appear. There is also no limit on how much *anything else* can appear, and paperwork is the one substance in the universe that requires no encouragement whatsoever to reproduce.

He gritted his teeth and dove in. He flipped pages like a card sharp. He power-read subheadings, initialed margins, and made executive decisions at a rate of roughly nine per second, and the pile grew faster than he could reduce it, and the gold kept coming down around him until the documents and the bullion began to layer together into a single geological formation with Wario somewhere in the middle of it.

"Ugh! Why's there so much paperwork?! I'm getting RICH here!"

He was. That was the thing. He was, at that moment, richer than any accounting system in existence could express, and he was also being slowly buried alive by his own success in a very literal and increasingly load-bearing sense.

*Why don't we take a break and go outside?*

He looked up, eyes red, a coin stuck to his forehead by sweat.

"Y'know what? You're right."

He stood, knocked over a column of forms, sent a small avalanche of gold skidding across the floor, and walked out — past a desk on which the red dome now sat gray and dull and entirely spent, its counter dark.

He noticed it on the way past. He even paused.

"Weird," he said, and kept walking.
""")

ch('the-golden-hour', 'XI. The Golden Hour', 'Wish Four', 'Limits', """
Outside, for a little while, it was genuinely beautiful.

The sky over the district had gone the color of a held breath, and gold was coming down out of it — not raining, exactly, but *appearing*, generously, everywhere, in soft glittering veils that caught the sun and threw it back in a hundred directions. Coins pooled in gutters and drifted up the steps of buildings. People were out in the streets laughing, catching it in hats and shopping bags and upturned umbrellas. Somebody was playing an accordion. It was, briefly, the happiest that city had ever been.

"Man, this is AWESOME!" Wario kicked through a drift of coins and watched them scatter. "I can't believe I actually pulled it off! This is how rich guys are supposed to live! No more struggling, no more limits! Just pure wealth everywhere!"

He plucked a coin out of the air, examined it with proprietary pride, and pocketed it out of pure habit.

*Look around you. A world without limits.*

He turned in a slow circle, arms out. The sky was gold. Buildings were half-drowned in it. Children ran past collecting handfuls like it was the first snow of the year.

"This... this is PERFECTION! I'm literally living inside my own treasure trove!"

*Let's go buy some ice cream.*

The stand was on the corner, striped awning, hand-lettered board. Wario read it and did a double take.

"Garlic ice cream?! That's a thing?!" He leaned in. *Premium Garlic Swirl — 99 coins.* "I mean... I love garlic. But this seems kinda weird even for me."

His hand was already in his pocket. Then he looked back up at the board, and the number had changed.

*33 coins.*

He blinked. It changed again while he was blinking.

*1 coin.*

"Wait. The price just went *down*. What — what is happening?!"

And then he got it, and this is the moment the analysis flags as *comprehension onset*, because for the first time in the entire incident Wario reasoned correctly and in advance.

No limits means no floor. A price is a limit. It is the specific point below which a seller will not go, and that point is made out of scarcity, cost, effort, and the seller's willingness to say the word *no*. Remove the concept of limits and prices do not merely fall — they lose the ability to stop falling. They are a wall with no bricks.

He pulled a single coin out of his pocket and stared at it like it had personally lied to him.

"You're telling me I can just get that garlic ice cream for one coin?" His eyes came back up to the sky, to the endless golden weather of it. "This is... this is AMAZING!"

The board ticked over one last time.

**0.**

The shopkeeper — a frazzled man with flour on his apron and the specific expression of someone whose morning has gotten away from him — wiped his hands and leaned over the counter.

"Yep! Due to some, uh... weird cosmic price glitch today? Everything's free. Zero coins required."

He gestured at the board. Every item on it read zero. He was already handing a cone to the next person in line without looking at their hands.

Wario's jaw hung open. Free garlic ice cream. It was, for about four seconds, better than winning the lottery ten times consecutively.

Then he looked past the shopkeeper's shoulder, at the bakery across the street, where the *All You Can Eat Buffet* sign had been crossed out and rewritten, in fresh marker, as **EAT FOREVER FOR FREE** — and people were already going in, and none of them appeared to have any intention of coming out.
""")

ch('always-something', 'XII. If There Is Always Something, There Is Never Nothing', 'Wish Four', 'Limits', """
Wario stopped walking.

He stood on the sidewalk outside the bakery with an ice cream he had not paid for melting over his glove, and a thought arrived that was much too large for the shape of his head.

"Wait. Wait WAIT WAIT."

*No limits* is not a modifier that attaches itself politely to the noun you had in mind. It is not a coupon. It is a global setting. He had said it out loud himself, in front of witnesses: no limits on wealth, no limits on food, no limits on *anything*.

"No limits means... no limits on SPACE too?!"

Yes. And no limits on quantity, growth, duration, intensity, recurrence, or number. And here is the sentence that finally cracked him open, arrived at by a man who has never voluntarily completed a logic problem in his life:

**If there is always something, then there is never nothing.**

Scarcity is not a flaw in the world. Scarcity is the mechanism by which the world *stops*. Every empty space, every used-up resource, every full container, every finished meal, every ending — those are all the same feature wearing different hats. They are the universe's way of saying *that's enough of that one*. Delete the concept of limits and you have not made a paradise of plenty. You have removed the world's ability to be finished with anything.

"Wait," he said slowly. "Does this mean there'll NEVER be scarcity again? Like, ever?"

It was at that exact moment that he noticed the trash.

It was piled at the mouth of the alley, and it should not have been, because it had been collected that morning — but of course the bins had no limit either, and neither did what people threw away, and neither did what they were given for free to throw away. It had already spilled across the sidewalk.

Then he saw the rat.

Then two.

Then three. Then a fourth came out from under the dumpster, and a fifth, and then the pile *moved* in a way piles do not move, and Wario understood that he was looking at a population with no ceiling — a species that already breeds at the outer edge of what the word "breeding" can support, suddenly liberated from every constraint that had ever held it in check: no limit on food, no limit on litter size, no limit on space, no limit on generations.

"No. No, NO!"

He backed up into the street and looked up, which was a mistake.

The sky had filled. Ten minutes earlier it had been an empty golden afternoon; now it was *packed*, wingtip to wingtip, aircraft at every altitude and every heading — no limit on how many flights could be scheduled, no limit on how many aircraft could exist, no limit on how many could occupy a given cubic mile of air. A cargo hauler clipped a passenger jet and both of them kept flying, because there was no limit on how much damage a thing could sustain and continue. More kept arriving. They were arriving faster than they could get out of each other's way, and the sound of it was a single unbroken roar.

"Whoa whoa whoa WHOA! There's like a THOUSAND planes up there right now!"

Then his shoes filled with water.

It came from everywhere and nowhere — no limit on volume, no limit on rate, rising over the curb, over the ice cream stand's bottom step, carrying coins along in bright swirling shoals. And in it, all around him, people were getting sick and getting better in the same breath: no limit on how fast disease could spread, no limit on how completely a body could heal, no limit on how many times a person could cycle between the two in a single minute. A woman three feet away went gray, collapsed, glowed, stood up, laughed, and went gray again.

And down the block, in the doorway of a shuttered flower shop, a man who had been dead since Thursday sat up, because there is no limit on how long a thing can continue, and *over* is a limit like any other.

Wario stared at that for a long time.

Then he looked up at his own tower.
""")

ch('the-tower', 'XIII. The Tower', 'Wish Four', 'Limits', """
The WarioWare building had been designed to be a symbol of corporate dominance, which is a thing buildings can be until they are asked to be something else.

Every window was lit and every window was full. There was no limit on occupancy, so people were still going in — a queue of them, endless, feeding through revolving doors that could not stop revolving. There was no limit on interior volume, so the inside had begun to exceed the outside, floors folding into more floors, corridors budding side corridors, stairwells discovering additional flights between the ones that already existed.

Glass burst outward on the fourteenth floor as a knot of employees climbed out onto a ledge that was itself getting longer as they stood on it. Some of them fell and landed on a lower floor that had not been there a moment ago, and got up, and went back to work.

And they were working. That was the horror of it. There was no limit on how much work could exist, and Wario's entire corporate culture had been built on the sincere and enthusiastic principle that there is always more to do. Every department was drowning in a workload that grew by the second: no limit on customers, no limit on orders, no limit on complaints, no limit on the number of forms required to resolve a complaint. The whole tower was seizing like an engine with the throttle welded open.

"Okay," Wario said, standing in the rising water in the golden rain with a rat running over his boot. "Okay, this is bad."

The first earthquake hit while he was saying it.

It knocked him against a lamppost. Ordinary enough — cities have earthquakes. Except that before the ground had finished settling, the second one arrived, and then a third overlapped the second before it ended, and by the fifth it had stopped being a series of earthquakes and started being a single continuous state of the ground. No limit on frequency. No limit on magnitude. No interval in which anything could stabilize.

"What is HAPPENING?! There's earthquakes everywhere now?!"

The street opened like an eggshell. Buildings swayed and did not stop swaying. Cars went over on their sides and slid. People were screaming and running and there was nowhere to run that was not also shaking.

"Oh man oh man oh MAN!"

He barely got the last syllable out before the sky went white.

The first fireball came in low and fast over the rooftops, trailing a plume, and struck somewhere out past the docks with a concussion he felt in his sternum. The second came in ten seconds later. Then four at once. Then the whole horizon lit up with them — a meteor shower with no upper bound on arrival rate, no limit on how many objects the sky could deliver, an infinity of rock queuing up to land on a city that already had every other problem.

"What the hell did I do?!" he screamed at the sky. "Why is all this happening?!"

He knew why. That was the worst part. He had known since the ice cream board hit zero.
""")

ch('the-buttons', 'XIV. The Buttons', 'Collapse', 'Limits', """
He ran back to the office because it was the only idea he had, and on the desk the dull gray dome was exactly where he had left it, dead and spent, **3 / 3** dark on its base.

And beside it was a second one.

Wario stopped in the doorway.

"Wait. Another reset button?!"

There is no limit on how many reset buttons can exist.

The third appeared while he was looking at the second. The fourth and fifth appeared together. Then a dozen, then a scatter of them across the desk like spilled dice, then they were coming off the edge and hitting the floor and bouncing, and the floor of his office was going red and gray with domes, and they were spreading out into the corridor.

"THREE OF THEM?! There's THREE reset — no — no, this can't be happening, this isn't how it was supposed to go!"

They flooded out of the office. They filled the stairwell. They spread through the lobby and out the revolving doors and into the flooded, quaking, burning street — and people, being people, picked them up.

"NO NO NO STOP GRABBING THEM!"

He went through his own building like a lunatic, snatching domes out of hands and hurling them away, which accomplished nothing because there were more of them every second and because a hurled reset button is still a reset button and it still lands somewhere near somebody's foot.

"PUT THOSE DOWN RIGHT NOW! STOP TOUCHING THEM! DON'T PRESS ANYTHING!"

Nobody listened. Why would they? To everyone else in that city, the world had been on fire for six minutes and here was a big red button that had appeared out of nowhere, and every instinct in the human animal says that when the world is on fire and a big red button appears, you press it.

They pressed.

The first tear opened above the reception desk: a vertical seam in the air, three feet long, with nothing behind it — not darkness, not light, just an absence with edges. The second opened in the street. Then the third, and after that they came too fast to count.

Reality began to glitch. Objects popped in and out of existence with a sound like a needle skipping. Sound itself crackled and stuttered. Buildings flickered, present and absent and present again. A man walked past Wario, and then walked past him again from the same direction, and then a third copy of him arrived and the three of them collided and merged and separated into four.

Because there is no limit on how many times a thing can be reset, and there is no limit on how many resets can happen at once, and every simultaneous reset was rewriting a different version of the same instant on top of every other version.

"WHAT IS HAPPENING?!"

Colors inverted. Gravity came on and off like a faulty switch as somebody, somewhere, pressed a button that undid the first wish and somebody else immediately pressed one that undid the undoing. People phased through each other. A woman was standing in the office and on a beach and inside a volcano, all three at once, screaming in three different acoustics. Wario watched a copy of himself run past in the opposite direction, and then watched himself watch himself, and the recursion went eleven layers deep before he stopped being able to count.

The sky went black with static.

"Oh my god oh my god oh MY GOD—"

It was not a reset anymore. A reset requires a stable state to return to, and there was no longer any such thing as a stable state anywhere in the system. It was total failure. The universe was being asked to be all of its possible versions simultaneously and forever, and it could not, and the only thing left for it to do was to stop being any of them.

Everything collapsed inward at once, all of it, the whole infinite over-full impossible everything of it, folding down through itself toward a single point—
""")

ch('the-office', 'XV. The Office', 'Coda', None, """
—and Wario blinked, and he was sitting in his chair.

"Wait. What?!"

The office was quiet. Normal quiet — a printer humming down the hall, someone laughing two rooms over, traffic outside doing the ordinary rude things traffic does. Afternoon light at a completely reasonable angle, moving, as light does, very slowly across the carpet.

He looked at his hands. They were not shaking. There was no gold in them. There was no gold anywhere, no water on the floor, no rats, no tears in the air, no fireballs, no domes. His desk was a desk: a stapler, a mug, a stack of reports of a finite and frankly unimpressive height.

He sat frozen for a long moment, staring at nothing.

Had it been a dream? It had the shape of one. Dreams do that — they escalate, they run out of logic, they end at the exact instant they become unsurvivable. And he had, admittedly, eaten a great deal of garlic before lunch.

"Okay," he said out loud, to an empty room, rubbing his temples. "Okay, I think I need to sit down for a second."

He was already sitting down.

Everything looked perfectly normal. No signs of anything. No evidence, no witnesses, no paperwork — and Wario is a man who has always believed, sincerely and as a matter of operating philosophy, that a thing without paperwork did not happen.

So why was his chest still tight? Why was there this lingering, low, humming sense of something enormous having *almost* occurred, the feeling of a door closing very quietly behind you in a house you thought was empty?

He looked at the corner of the desk. There was a faint ring in the dust there, a circle about the size of a saucer, where something round had been sitting for a while and was no longer.

Wario looked at it for a long time.

Then he pulled the stack of reports toward himself — a normal stack, a stack with a top and a bottom, a stack that would be finished at some point this afternoon and would then be *done*, because there was a limit on it — and he picked up his pen, and he got to work.

He did not laugh. He got a lot done that day.

*Nobody at WarioWare has ever been able to explain why.*
""")

# ------------------------------------------------------------------ ledger ---
LEDGER = [
    {'n': '01', 'concept': 'Gravity', 'pitch': "\"Who needs gravity anyway?\"",
     'reality': 'Everything that was ever held down stops being held down — including the oceans, the topsoil, the buildings, the livestock, and the entire gold reserve, which departs upward through the ceiling it was standing under.',
     'lesson': 'He priced the concept by how annoying it was, not by how much it was carrying.',
     'lifespan': 'about six minutes', 'verdict': 'Reset (1/3)'},
    {'n': '02', 'concept': 'The Law of Equivalent Exchange', 'pitch': '"All the gold without giving anything up."',
     'reality': 'Everyone gets everything for nothing. Banks distribute instead of transacting. Workers stop working. A concept-barter economy (joy, time units, patience, attention) grows back within the hour and gold becomes decorative gravel.',
     'lesson': 'His wealth was never made of gold. It was made of asymmetry. Deleting exchange deleted the only game he had ever won.',
     'lifespan': 'about ninety minutes', 'verdict': 'Reset (2/3)'},
    {'n': '03', 'concept': 'Time', 'pitch': '"Nothing left but endless, timeless bliss."',
     'reality': 'He meant the clock. He sold duration. Chairs cannot be moved because motion requires an interval. Nothing outside his own perspective can complete an action — including a heartbeat.',
     'lesson': 'He resented his schedule and sold everyone else\'s continued existence to get out of it.',
     'lifespan': 'unmeasurable, by definition', 'verdict': 'Reset (3/3)'},
    {'n': '04', 'concept': 'Limits', 'pitch': '"Infinite money without breaking reality."',
     'reality': 'Infinite gold, then infinite paperwork, then zero prices, then infinite rats, infinite aircraft in finite airspace, infinite water, infinite disease and infinite recovery, the undoing of death, an interior larger than its exterior, continuous earthquakes, continuous impacts — and finally infinite reset buttons pressed infinitely, which is what actually ends it.',
     'lesson': 'If there is always something, there is never nothing. Scarcity is not a flaw in the world; it is how the world is able to stop.',
     'lifespan': 'roughly one afternoon', 'verdict': 'Total system failure — no resets remaining'},
]

FINDINGS = [
    {'t': 'The concept he resents is never the concept he is selling.',
     'd': 'Gravity meant "stairs are annoying." Time meant "I hate my calendar." Limits meant "I want a bigger number." In each case the Bank sold the load-bearing version and Wario was billed for the difference.'},
    {'t': 'You cannot buy an exception from an institution that only sells the whole idea.',
     'd': 'Every wish assumed the effect would be aimed at Mario, or at rivals, or at nobody in particular. Concepts are not directional. The Abstract Bank has never once issued a carve-out.'},
    {'t': 'Wealth is a ratio, not a pile.',
     'd': 'The Equivalent Exchange branch is the only one where Wario ends up poor, and it is also the only branch where nobody gets hurt. Both of those facts are the same fact.'},
    {'t': 'The reset is the most dangerous object in the story.',
     'd': 'Three free undos removed every incentive to think, and the fourth wish removed the limit on the undos themselves. The safety mechanism is what finally collapses the timeline.'},
    {'t': 'Nothing outside the room remembers.',
     'd': 'Each reset restores the world without restoring the memory. Every consequence lands entirely on people who will never know, and the only person carrying the ledger is the one who caused it.'},
]

# ---------------------------------------------------------------- assembly ---
def wordcount(s):
    return len(re.findall(r"[A-Za-z0-9'\u2019\u2014-]+", re.sub(r'[*_>#]', ' ', s)))

body_words = sum(wordcount(c['body']) for c in CH)
extra_words = sum(wordcount(' '.join(str(v) for v in l.values())) for l in LEDGER) \
            + sum(wordcount(f['t'] + ' ' + f['d']) for f in FINDINGS)
total = body_words + extra_words

entry = {
    'id': 'wario_abstract_bank',
    'title': 'What If Wario Owned the Abstract Bank?',
    'subtitle': 'Four withdrawals, three resets, and one afternoon in which the universe was asked to be everything at once',
    'emoji': '\U0001fa99',
    'accent': '#e0b400',
    'kicker': 'What If · Filing 001',
    'status': 'Non-canon hypothetical',
    'clearance': 'Open file — Abstract Ledger Review Board',
    'subject': 'Wario',
    'subjectImage': 'wario.png',
    'divergence': 'The Abstract Banker assigns full, unsupervised ownership of a metaphysical concept account to W. Wario, sole proprietor.',
    'premise': "A metaphysical bank lets you withdraw abstract concepts and sell them for unlimited gold. Once sold, the concept ceases to exist — everywhere, for everyone, forever. The account belongs to Wario. He gets three resets. He needs four.",
    'summary': "Wario inherits an account at the Abstract Bank and sells gravity, then the Law of Equivalent Exchange, then time, then limits. Each withdrawal is smarter than the last and each one fails worse, until the final wish removes the ceiling on the reset buttons themselves and the timeline collapses under an infinity of simultaneous undos. He wakes at his desk with no evidence, no witnesses, and a faint ring in the dust.",
    'tags': ['Wario', 'Abstract Bank', 'Economics', 'Cosmology', 'Non-canon', 'Reset Loop', 'WarioWare'],
    'readingTime': max(1, round(total / 225)),
    'wordCount': total,
    'wishes': [
        {'n': 1, 'concept': 'Gravity', 'icon': '\U0001f9f2', 'result': 'Everything leaves', 'color': '#5aa9e6'},
        {'n': 2, 'concept': 'Equivalent Exchange', 'icon': '\u2696\ufe0f', 'result': 'Everyone gets everything', 'color': '#7ac74f'},
        {'n': 3, 'concept': 'Time', 'icon': '\u23f3', 'result': 'Everyone stops', 'color': '#b07de0'},
        {'n': 4, 'concept': 'Limits', 'icon': '\u267e\ufe0f', 'result': 'Everything, forever, at once', 'color': '#e05a5a'},
    ],
    'resetsUsed': 3,
    'resetsTotal': 3,
    'outcome': 'Timeline collapse. State restored by unknown means. Subject retains no admissible evidence.',
    'epigraph': "\u201cIt's not a scam. That's the problem. A scam has a ceiling.\u201d",
    'chapters': CH,
    'ledger': LEDGER,
    'findings': FINDINGS,
    'related': [
        {'label': 'Currencies of the Known World', 'route': '#/currencies', 'emoji': '\U0001f4b1'},
        {'label': 'Items & Inventory', 'route': '#/items', 'emoji': '\U0001f392'},
        {'label': 'Artifacts', 'route': '#/artifacts', 'emoji': '\u2b50'},
        {'label': 'Historical Chronicles', 'route': '#/chronicle', 'emoji': '\U0001f4dc'},
    ],
    'filed': datetime.date.today().isoformat(),
    'author': 'Waluipedia What If Board',
}

doc = {
    'meta': {
        'title': 'What Ifs',
        'subtitle': 'Non-canon hypotheticals and alternate timelines',
        'description': 'Stories exploring what could have happened if key moments had gone differently. These are explicitly non-canon.',
        'disclaimer': 'Nothing in this archive is canon. No event described here is recorded in the Chronicle, the Congress minutes, or any faction ledger. Filings are reconstructions of branches that did not survive.',
        'emoji': '\u2753',
    },
    'whatifs': [entry],
}

with open(OUT, 'w', encoding='utf-8') as f:
    json.dump(doc, f, ensure_ascii=False, indent=2)
    f.write('\n')

print('chapters :', len(CH))
print('prose    :', body_words)
print('apparatus:', extra_words)
print('TOTAL    :', total, 'words ->', OUT)
