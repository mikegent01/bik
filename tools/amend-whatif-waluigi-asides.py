#!/usr/bin/env python3
"""Third pass on the Wario / Abstract Bank filing.

Brings the commentary density in line with the Imp Ambush of Harvestide 29 event
(`the_imp_ambush_of_harvestide_29`), which runs ~21 inline *WAH! ...* asides
across ~5,600 words — running colour commentary woven between the beats rather
than analysis parked at the end of a section.

Two additions, narrative untouched:
  1. ASIDES  — inline *WAH! ...* / *Waluigi ...* paragraphs inserted after
     specific beats. mdToHtml/isWaluigiAside already detect these and render
     them as em.walu-aside purple callouts, so no view changes are needed.
  2. DIALOGUE — extra spoken Waluigi lines in scenes where he was present but
     silent, so he argues with Wario instead of only narrating him.

Run:  python3 tools/amend-whatif-waluigi-asides.py   (after the POV pass)
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'whatifs.json')

with open(PATH, encoding='utf-8') as f:
    doc = json.load(f)

entry = next((w for w in doc['whatifs'] if w.get('id') == 'wario_abstract_bank'), None)
if entry is None:
    sys.exit('filing not found')

CH = {c['id']: c for c in entry['chapters']}

# ---------------------------------------------------------------- asides -----
# (chapter id, unique anchor text within a paragraph, aside to insert after it)
ASIDES = [
('the-paperwork',
 'sign here to acknowledge receipt of.',
 "*WAH! Observe the technique. A courier hands a man a document and the man does not read it — he *seizes* it, as though the reading were a competitive event and someone might beat him to the end. Waluigi has watched Wario do this with menus, with warrants, and once, memorably, with a subpoena. He has never once finished a page he did not already agree with.*"),

('the-paperwork',
 'A scam has a ceiling.',
 "*WAH! And here is the free professional advice, offered at no charge, ignored at full volume: if a deal has no downside written into it anywhere, that is not because there is no downside. It is because the downside is being paid by somebody who was not invited to the meeting.*"),

('the-paperwork',
 'No more love in the world if I cash it out?',
 "*WAH! Look at that! An actual moral hesitation, live, in captivity! Waluigi wishes to report that it lasted approximately four seconds, which is three and a half seconds longer than the previous record, and that no scientists were present to document it.*"),

('the-paperwork',
 'No cooling-off period.',
 "*Waluigi wants to be very clear that his objection here was never moral. Waluigi's objection was procedural. You do not hand a planetary instrument to a sole proprietor with no co-signer! Waluigi cannot get a tennis court permit renewed without three stamps and a photograph, and this man was issued the concept of gravity on a single signature line. The paperwork in this universe is upside down and Waluigi is the only one who has noticed.*"),

('the-paperwork',
 'shook him hard enough to rattle his teeth',
 "*WAH! Unhand Waluigi! It is always the same — the moment there is money in the room, Waluigi becomes furniture that can be gripped. Nobody shakes Waluigi by the shoulders when there is a bill to be paid. Curious, that.*"),

('gravity',
 "They'll be stuck on the ground while I soar through the sky",
 "*WAH! 'They'll be stuck on the ground.' Waluigi would like every reader to sit with that sentence for a moment. He believed — sincerely, out loud, in front of a witness — that removing gravity would keep other people *down*. This is the caliber of mind we are dealing with. Waluigi has lost tennis matches to opponents who could not spell 'net' and even they understood which direction things fall.*"),

('gravity',
 'made falling hurt',
 "*WAH! Everybody prices a rule by how much it personally annoys them. This is why nobody should ever be allowed to abolish one. Waluigi finds the offside rule deeply irritating and Waluigi has never once been permitted to delete it from reality, and the reason for that, Waluigi now understands, is people like Wario.*"),

('gravity',
 'a jar of pickles opening in the next room',
 "*WAH! No thunderclap! No choir! The universe lost an entire fundamental force and it went 'pop', like a jar of pickles. Waluigi finds this the single most upsetting detail in the whole file. Catastrophes should have the decency to announce themselves properly.*"),

('gravity',
 'Waluigi was holding onto a doorframe.',
 "*WAH! And note who was holding the doorframe and who was not. One of us understood what had just been sold. One of us was doing a little dance in the air. Waluigi will let the reader assign the roles.*"),

('the-fountain',
 'fireworks that had gotten a business degree',
 "*WAH! Waluigi will admit it was spectacular. Waluigi is not made of stone. An entire vault of bullion coming up through the floor in a golden helix is genuinely one of the great sights of this or any timeline, and Waluigi enjoyed roughly nine seconds of it before the structural mathematics arrived and ruined everything, as structural mathematics always does.*"),

('the-fountain',
 'its entire physical personality',
 "*WAH! Waluigi begs the reader to appreciate the poetry here. This man spent forty years accumulating the heaviest substance he could find, describing it in every interview as 'crushing' and 'staggering' and 'immense', and then removed the one rule preventing those adjectives from becoming a literal description of his own ceiling. He was not robbed. He was *rewarded*, precisely, in the exact terms he requested.*"),

('the-fountain',
 "It'll be fine!",
 "*WAH! 'The building can take it.' Waluigi has heard this sentence exactly four times in his life and on three of those occasions the building did not, in fact, take it. The fourth time it was a tent.*"),

('the-window',
 'a bunch of parsley thrown in as a kindness',
 None),  # placeholder guard, removed below

('the-window',
 'radiating an expression of profound bovine betrayal',
 "*WAH! The cows. Waluigi did not sign up to watch the cows. Waluigi came to this building to deliver a folder and drink somebody else's coffee, and instead Waluigi is standing at a window watching livestock ascend into the troposphere upside down. There is no compensation structure for this. Waluigi checked that too.*"),

('the-window',
 'no other documented instance of it happening',
 "*Waluigi has a confession, and Waluigi will make it exactly once and then never again. When his voice cracked, Waluigi did not feel triumphant. Waluigi has spent a lifetime waiting for that man to be frightened of something, and it turns out the price of admission was a city, and Waluigi would like a refund.*"),

('the-window',
 'a school bus at four hundred feet with its brake lights on',
 "*WAH! Not the river. Not the money. Not even the people, plural — people plural is a number, and numbers are easy to ignore. It was one bus. It is always one small specific thing, and everybody's is different, and nobody finds out what theirs is until it is already in the air.*"),

('the-button',
 "It is arguably the operative clause of Wario's entire life.",
 "*WAH! Waluigi was mid-sentence! There were terms! There were *conditions* attached to that dome and Waluigi had read them and was, at that moment, three words into explaining the most important one, and the palm came down anyway. Waluigi has been interrupted by many things in his life but never before by the reversal of an entire planet.*"),

('the-button',
 'The school bus finished its turn.',
 "*Waluigi would like this line to sit by itself, because Waluigi wrote the rest of this filing and that is the only sentence in it that Waluigi is proud of.*"),

('the-button',
 'taking notes that would not exist in an hour',
 "*WAH! Do you understand the problem now? No damage. No bodies. No headline. No claim, no court, no invoice — and therefore, by every standard this universe uses to decide whether a thing occurred, *it did not occur*. A catastrophe with no paperwork is not a catastrophe. It is an anecdote, and only one of the two men in that room was in the habit of remembering anecdotes that made him look bad.*"),

('equivalent-exchange',
 'you may as well have stage presence',
 "*WAH! The pause! The theatrical pause! He is announcing the abolition of an economic law to an audience of one lanky purple auditor and he is doing *timing*. Waluigi respects the commitment. Waluigi would respect it more if the commitment had been to reading the contract.*"),

('equivalent-exchange',
 'so mark the date',
 "*WAH! It IS smarter! Waluigi hates that it is smarter! Wish one was a man throwing a brick through a window. Wish two is a man quietly amending a statute. And the amended statute did more damage to Wario personally than the brick ever did, which is a lesson that every clever person in this world should have tattooed somewhere legible.*"),

('equivalent-exchange',
 'birds doing standard bird business against a standard sky',
 "*WAH! Nothing happened! He abolished a foundational law of exchange and the birds carried on! Waluigi watched him deflate like a bouncy castle at the end of a birthday party. Waluigi enjoyed this enormously and Waluigi wishes to state that he had already worked out what was wrong and simply chose not to say so immediately. Auditors are permitted a small amount of theatre.*"),

('equivalent-exchange',
 'only distribution',
 "*WAH! Look at the tellers! They are *cheerful*! Nobody in the history of banking has ever been cheerful behind that counter! Waluigi has stood in those queues, Waluigi has been refused by those people for reasons involving a hyphen, and now they are handing out currency by the armful with the serene expressions of the recently converted. The Second Mushroom Mercantile has been open for two hundred years and it took Wario ninety seconds to turn it into a soup kitchen.*"),

('the-barter',
 'did not intend to suffer alone',
 "*WAH! Yes, Waluigi could have simply told him. But Waluigi has learned that a man like Wario does not accept a fact when it is handed to him — he must be walked to it, shown it, and permitted to discover it personally, at which point he will explain it back to you as though he thought of it. Waluigi is not a teacher. Waluigi is a tour guide for consequences.*"),

('the-barter',
 'more offensive than sabotage',
 "*WAH! THAT is the part that offended him! Not the abolition of value! Not the collapse of price! His staff were *comfortable*, and to Wario a comfortable employee is a stolen employee. Waluigi has never seen a man's priorities laid out so cleanly on a table. Somebody should have photographed it.*"),

('the-barter',
 "appraising a jar of somebody else's nostalgia",
 "*WAH! And here it is — the market, that filthy immortal cockroach, regrowing itself out of *feelings* within the hour! Take away the coins and within sixty minutes a woman is paying for parsley with a fistful of joy. Waluigi has enormous professional respect for this. You cannot kill a market. You can only change what it eats.*"),

('the-barter',
 'a guy with a lot of metal',
 "*WAH! Waluigi has been trying to explain this to him for THIRTY YEARS. The gold was never the point! The gold was a *scoreboard*! He deleted the game and kept the trophy and then stood there wondering why the trophy stopped working! Waluigi could have told him this for free, over lunch, at any point in the last three decades, and instead it required the temporary collapse of the world economy. WAAAH!*"),

('time',
 'Nothing left but endless, timeless bliss',
 "*WAH! 'Timeless bliss.' He has heard the phrase on a spa brochure and taken it as an engineering specification. Waluigi would like to note that at this exact moment Waluigi's stomach performed a manoeuvre, because Waluigi had already worked out what 'no time' does to a heartbeat and was, for the second time that afternoon, three words too late.*"),

('time',
 'how disasters get approved',
 "*WAH! This is the whole disease and it is not unique to Wario, which is why Waluigi is dwelling on it. Every powerful fool in every administration Waluigi has ever audited does exactly this: they identify the *symbol* of the thing annoying them — the clock, the form, the inspector, the rule — and they abolish the symbol, and then they are genuinely astonished when the thing underneath the symbol also stops working. Wario fired his calendar and terminated causality. A Congressman Waluigi will not name once abolished a filing deadline and accidentally repealed the concept of a fiscal year.*"),

('time',
 'It was not heavy. It was *finished*.',
 "*WAH! Watch a grown man lose a wrestling match to an office chair! Waluigi did not help. Waluigi could have explained that motion is displacement across an interval and that he had personally sold the interval, but Waluigi elected instead to stand in the doorway and enjoy approximately forty seconds of the finest entertainment available in any timeline.*"),

('the-still-world',
 'going nowhere at any speed',
 "*WAH! Waluigi does not enjoy this part and will be brief. There is a particular quiet that is not peace. Waluigi has heard silence in libraries, in vaults, in the moment before a serve — and none of it is this. This was the sound of a world with the *ability to continue* removed from it. Waluigi turned around and faced the wall and stayed there.*"),

('the-still-world',
 'no interval in which a heart could complete the act of beating',
 "*WAH! And here is where Waluigi stopped taking notes. Understand the horror correctly, because it is not the obvious one: they were not dying. Not one of them was capable of dying, because dying takes time and there was none left to spend. They could not live and they could not stop. Wario had accidentally invented the one condition worse than a massacre, and he did it while trying to get out of doing his own scheduling.*"),

('the-still-world',
 'Waluigi has never once seen it precede a good outcome.',
 "*WAH! The light! Not the light again! Waluigi has seen that specific light behind those specific eyes on the night of the garlic soufflé incident, on the morning of the counterfeit tennis league, and on the afternoon Wario decided a submarine was 'basically a car'. Waluigi began, quietly, to look for the exits. There were none. That is a limit, and limits were about to be next.*"),

('limits',
 'the best decision anyone in the history of decisions had ever made',
 "*WAH! Eleven minutes! Waluigi wants that number in the record. Every catastrophe in this file had a honeymoon and this one was the longest — eleven entire minutes in which Waluigi genuinely began to wonder whether the idiot had done it. That is the cruelty of the thing. It always works first.*"),

('limits',
 'requires no encouragement whatsoever to reproduce',
 "*WAH! WAHAHAHA! Waluigi is sorry. Waluigi is genuinely, professionally sorry, and Waluigi is also going to laugh. He asked for no limit on how much could arrive and the universe — with what Waluigi can only describe as impeccable comic instinct — began delivering FORMS. He wished for infinity and infinity sent him ADMINISTRATION. Waluigi has never in his life witnessed a more appropriate outcome and Waluigi will be dining out on it for years.*"),

('limits',
 'structurally, a rescue',
 "*WAH! Note that! Waluigi got him out of that room! Waluigi wishes this to be weighed against everything else in the file, because the man was going under the paperwork and it was Waluigi who suggested the door. Nobody has ever thanked Waluigi for this. Waluigi is not surprised. Waluigi is merely keeping count.*"),

('the-golden-hour',
 'Waluigi is required by the terms of an honest audit to say so',
 "*WAH! And it WAS. Waluigi wishes he could tell you otherwise. A gold sky, children with their hats held out, an accordion, and for one hour the poorest district in that city was rich. Waluigi has thought about that hour more than the meteors. Everything terrible in this file arrived wearing exactly this face first.*"),

('the-golden-hour',
 'wanted Wario to watch it happen with his own eyes',
 "*WAH! Yes, it was a trap. Waluigi had run the arithmetic somewhere around the second drift of coins and knew precisely what was going to happen to that price board, and Waluigi walked him to it like a man walking a dog to the vet. Waluigi maintains this was educational. Waluigi also maintains that it was funny.*"),

('the-golden-hour',
 'They are a wall with no bricks.',
 "*WAH! THIS is the frightening one and Waluigi is going to plant a flag in it. Everybody in that street thought they were watching prices fall. Waluigi was watching a man behind a counter lose the ability to say the word 'no'. Every price you have ever seen is a *no* with a number attached. Take away the ability to refuse and you have not made the world generous, you have made it incapable of stopping, and Waluigi would rather be poor in a world that can still say no.*"),

('always-something',
 'holding a free ice cream',
 "*WAH! And Waluigi will give him this, once, on the record, in writing, where he can find it: he got there himself. Nobody explained it to him. Wario stood in a flooding street holding a free ice cream and derived the whole thing unassisted, which is more than most of Congress managed with three years and a research budget.*"),

('always-something',
 "You have removed the world's ability to be finished with anything.",
 "*WAH! Waluigi is going to be sincere for one paragraph and then Waluigi will go back to being unbearable. Every good thing you have ever had ended, and the ending is not the tax on the good thing — the ending is what made it a thing at all. A meal that never finishes is not a feast, it is a punishment. A song with no last note is a noise. Waluigi has spent his whole life resenting limits, losing to them, being ruled offside by them — and Waluigi watched what happened in the eleven minutes after they were removed and Waluigi came home and did not complain about a single one of them for a week.*"),

('always-something',
 'no limit on how many generations',
 None),

('always-something',
 'The sound of it was a single unbroken roar.',
 None),

('always-something',
 'because there is no limit on how long a thing can continue, and *over* is a limit like any other',
 "*WAH! Waluigi has no joke for this paragraph. Waluigi tried to write one on three separate occasions and each attempt was worse than the last. A man who had been dead since Thursday sat up in a doorway, and everyone in that street looked away at the same moment, and Waluigi is going to move on now.*"),

('the-tower',
 'above the rats and above the sky',
 "*WAH! Nobody in that tower had been ordered to do anything! There was no supervisor cracking a whip! They were drowning because the building's founding philosophy — *there is always more to do* — had been granted the force of physical law, and Waluigi wants every manager reading this filing to feel a small cold hand on the back of their neck. Be careful what you put on the motivational poster. One day the universe may take it seriously.*"),

('the-tower',
 'a shape that cannot agree with itself',
 None),

('the-tower',
 'He had known since the ice cream board hit zero.',
 "*WAH! He knew. Waluigi wants that on the record, because it is the difference between a fool and a coward and Wario spent that hour being both. He worked it out at the ice cream stand and he said nothing, and he walked past the dead button, and he let it run, because stopping would have meant admitting it. Waluigi has done the same thing over smaller stakes. So have you. That is why this filing exists.*"),

('the-buttons',
 'Waluigi walked into the back of him.',
 "*WAH! Waluigi walked into him! Face-first! Waluigi's entire dignity for the afternoon, gone, in a doorway, and this is somehow not even in the top five worst things that happened in that five-minute span.*"),

('the-buttons',
 'Waluigi blames the man who signed.',
 "*WAH! Do NOT blame the crowd! Waluigi will not have it! Every one of those people had been on fire for six minutes and a big red button appeared in their hand, and Waluigi would have pressed it, and so would you, and so — obviously, immediately, without reading a single word of it — would Wario. The button was the negligence. The crowd was just weather.*"),

('the-buttons',
 'Waluigi is better at counting.',
 "*WAH! Nineteen! And Waluigi will tell you the detail that has kept him awake since: in four of those nineteen layers, Waluigi could see himself doing something *different*. Different position. Different words. In one of them Waluigi had the folder open and was pointing at the clause. Waluigi does not know what to do with that and has elected to file it under 'optical distortion' and never revisit it.*"),

('the-buttons',
 'the only thing left for it to do was to stop being any of them',
 "*WAH! And there it is — the actual cause of death, and it was not greed. Waluigi wants this in bold on the cover sheet: the world did not end because a fool sold gravity. The world ended because somebody gave the fool an UNDO BUTTON and then removed the limit on the undo button. The safety mechanism killed everyone. Waluigi has filed this finding with three separate committees and been thanked by none of them.*"),

('the-office',
 'Waluigi would like to gently take it away from you',
 "*WAH! Waluigi knows what you want the answer to be. You want it to have been a dream, because a dream costs nothing and everybody goes home. Waluigi wanted that too, for about a minute, standing in a corridor that had recently contained an infinite number of buttons. Then Waluigi looked at the dust.*"),

('the-office',
 'No witnesses either. Except one. WAH.',
 "*WAH! And what, precisely, is Waluigi expected to do with it? Waluigi cannot file it. There is no docket for 'the world ended on Tuesday and then unended and the only physical evidence is a clean circle on a desk'. Waluigi tried. Waluigi was asked to leave. Waluigi went home and did not sleep, and in the morning Waluigi started writing this instead, which is the only revenge available to an auditor whose findings are inadmissible.*"),

('the-office',
 'where something round had been sitting for a while and was no longer.',
 "*WAH! There it is. THERE IT IS. A ring in the dust, the exact diameter of a dome that officially never existed, and Wario looked straight at it and did not let himself understand it. Waluigi photographed it. The photograph came out blank. Waluigi is choosing not to think about that.*"),
]

# ------------------------------------------------------------- dialogue ------
# Extra spoken lines for scenes where Waluigi was present but silent.
DIALOGUE = [
('gravity',
 '''"I know just what I'll do. GRAVITY! Yeah! I'll sell 'em gravity! Who needs gravity anyway? It's not like Mario or any of those other losers can jump super high without it! Wahaha! They'll be stuck on the ground while I soar through the sky on the wings of my new, unlimited wealth! It's the perfect plan!"''',
 '''"I know just what I'll do. GRAVITY! Yeah! I'll sell 'em gravity! Who needs gravity anyway? It's not like Mario or any of those other losers can jump super high without it! Wahaha! They'll be stuck on the ground while I soar through the sky on the wings of my new, unlimited wealth! It's the perfect plan!"

"Soar," Waluigi repeated. "On what."

"On wealth!"

"Wealth is not a wing, Wario. Wealth is a *weight*. That is the entire point of it. You have spent your whole life telling anyone who would stand still that your fortune is crushing, and now you propose to remove the only rule preventing that word from becoming a load-bearing description of your ceiling."

"Wah! You're jealous."

"Waluigi is *downstairs*," said Waluigi. "Waluigi is downstairs from the vault."'''),

('the-fountain',
 '''"I'm gonna be richer than any king has ever been! Mario who? That loser doesn't even know what real wealth looks like!"''',
 '''"I'm gonna be richer than any king has ever been! Mario who? That loser doesn't even know what real wealth looks like!"

"Wario." Waluigi had gone very still by the filing cabinets. "How much does the reserve weigh."

"Who cares?!"

"Waluigi cares, because it is above us now and it is still accelerating, and the ceiling above *it* was specified by a man who was thinking about snow."

"WAHAHA! You worry too much!"

"Waluigi worries the correct amount," said Waluigi, "and everybody else worries late."'''),

('the-window',
 '''"Okay okay okay this is BAD!" He was pacing now, which is difficult without gravity and which he was accomplishing largely by shoving off the furniture. His pitch climbed with every sentence. "This wasn't the deal! I just wanted gold, not a floating apocalypse! Why isn't gravity coming back?! What kind of stupid metaphysical bank account was this?!"''',
 '''"Okay okay okay this is BAD!" He was pacing now, which is difficult without gravity and which he was accomplishing largely by shoving off the furniture. His pitch climbed with every sentence. "This wasn't the deal! I just wanted gold, not a floating apocalypse! Why isn't gravity coming back?! What kind of stupid metaphysical bank account was this?!"

"A functioning one," said Waluigi.

"WHAT?"

"It is not broken, Wario. That is what Waluigi has been attempting to communicate for eleven minutes. It did *exactly* what you asked. You did not buy a prank. You bought a service, and the service was delivered, and it is now being delivered to a school bus."

Wario looked at him with an expression of genuine betrayal. "You could've *said* something!"

"Waluigi did say something," said Waluigi. "Waluigi said it twice, in this room, before you signed. Waluigi is beginning to suspect that being right in advance is worth considerably less around here than being loud afterwards."'''),

('the-button',
 '''"Reset?!" Wario stopped mid-shove and hung there, one hand on a floating chair. "Wait — what do you mean? You can *undo* this?!"''',
 '''"Reset?!" Wario stopped mid-shove and hung there, one hand on a floating chair. "Wait — what do you mean? You can *undo* this?!"

"Waluigi can do nothing. The *dome* can, apparently, and Waluigi would like to read the base of it before anybody—"

"IS IT AN UNDO BUTTON?"

"It appears to be an undo button, yes, but there is a counter on it and a counter is a *quantity*, Wario, a quantity implies a limit and a limit implies terms, and Waluigi would very much like thirty seconds to establish what the terms—"'''),

('equivalent-exchange',
 '''He crossed his arms and puffed out his chest, thoroughly pleased.''',
 '''He crossed his arms and puffed out his chest, thoroughly pleased.

"No," said Waluigi.

"What d'you mean, no?"

"Waluigi means *no*, in the sense of: that is a law about everyone. It is not a law about you. You are proposing to abolish the rule that things must be paid for, and you appear to believe the exemption will be issued in your name only."

"'Cause it's my account!"

"It is your *account*," said Waluigi. "It is not your *universe*. Wario, listen to Waluigi with the front of your head for one moment: you are not rich because you have gold. You are rich because other people do *not* have gold. If nobody has to pay for anything, then you are not the richest man alive, you are simply a man standing next to a large pile of—"

He had already signed it.'''),

('the-barter',
 '''"You've gotta be kidding me." He hissed it through his teeth. "I asked for free gold, and instead EVERYBODY gets free money?! Even my own damn workers are slacking off, enjoying free treats all day! What the hell kind of wish is this?!"''',
 '''"You've gotta be kidding me." He hissed it through his teeth. "I asked for free gold, and instead EVERYBODY gets free money?! Even my own damn workers are slacking off, enjoying free treats all day! What the hell kind of wish is this?!"

"An honest one," said Waluigi, "which is what you get when you buy from an institution instead of from a man."

"Don't you start."

"Waluigi started thirty years ago and has never once been listened to, so Waluigi is going to finish. You did not wish for wealth. You wished away *cost*. Cost is the only reason your pile means anything. You have not been robbed, Wario — you have been *audited*, by reality, for the first time, and the finding is that most of your fortune was other people's inability to say no to you."

Wario stared at him for a long moment.

"...I hate that that was smart," he said.'''),

('time',
 '''"Yep, you heard me right. I went *big* this time!" He thumped his chest. "Time itself — gone. No more hours, no more minutes, no more seconds. Nothing left but endless, timeless bliss, just the way a man like me needs it! Now the world can't tell me when to wake up or go to bed or do anything else. I'm in control of my schedule now! Heheheh!"''',
 '''"Yep, you heard me right. I went *big* this time!" He thumped his chest. "Time itself — gone. No more hours, no more minutes, no more seconds. Nothing left but endless, timeless bliss, just the way a man like me needs it! Now the world can't tell me when to wake up or go to bed or do anything else. I'm in control of my schedule now! Heheheh!"

Waluigi did not say anything.

"What. WHAT. You've got the face on."

"Waluigi has a question," said Waluigi, carefully, "and Waluigi would like you to answer it slowly. When you say you have removed time — do you mean you have removed the *clock*?"

"Same thing!"

"It is not the same thing. It is not remotely the same thing. The clock is a *report* about time. Time is the interval in which anything is permitted to finish happening." Waluigi's voice had gone somewhere flat and quiet. "Wario. What does a heartbeat need in order to be a heartbeat?"

The grin stayed on Wario's face for about a second and a half after his eyes stopped participating in it.'''),

('the-still-world',
 '''"Here's my final wish! I'm wishing away... the concept of LIMITS! No more limits on wealth! No maximum amount of gold I can own! Infinite money just pours into my hands without breaking reality or freezing people!"''',
 '''"Here's my final wish! I'm wishing away... the concept of LIMITS! No more limits on wealth! No maximum amount of gold I can own! Infinite money just pours into my hands without breaking reality or freezing people!"

"Wario."

"It's PERFECT! Nothing breaks! Nobody freezes!"

"Wario, *which* limits."

"All of 'em! That's the beauty!"

"Then say it back to Waluigi," said Waluigi. "Say the sentence out loud with the word 'all' left in it and listen to what you are actually — no limit on wealth, fine, no limit on gold, fine, but no limit on *what*, Wario? On how many? On how long? On how *much*? There is no limit on rats. There is no limit on water. There is no limit on how many times a—"

He pressed it with a flourish.

*WAH! He pressed it DURING the sentence! Waluigi has now been interrupted mid-warning on four separate occasions by four separate wishes and Waluigi would like the Board to note that his batting average on predictions is one hundred percent and his success rate at being heard is zero. These are not unrelated statistics. This is what an auditor is.*'''),
]

# --------------------------------------------------- nested-emphasis fix -----
# An aside is itself wrapped in *...*, so any inner *emphasis* would terminate the
# wrapper early and inlineMd would lose the walu-aside styling for the rest of the
# paragraph. Inner emphasis is promoted to **bold**, which nests safely.
def denest(text):
    if not (text.startswith('*') and text.endswith('*')) or text.startswith('**'):
        return text
    inner = text[1:-1]
    inner = re.sub(r'(?<!\*)\*([^*\n]+)\*(?!\*)', r'**\1**', inner)
    return '*' + inner + '*'

ASIDES = [(cid, anchor, denest(t) if t else t) for cid, anchor, t in ASIDES]

# ------------------------------------------------------------------ apply ----
aside_hits, aside_miss = 0, []
for cid, anchor, text in ASIDES:
    if text is None:
        continue
    c = CH.get(cid)
    if not c:
        aside_miss.append((cid, anchor[:50], 'NO CHAPTER'))
        continue
    paras = c['body'].split('\n\n')
    placed = False
    for i, p in enumerate(paras):
        if anchor in p:
            paras.insert(i + 1, text)
            placed = True
            break
    if placed:
        c['body'] = '\n\n'.join(paras)
        aside_hits += 1
    else:
        aside_miss.append((cid, anchor[:50], 'NO ANCHOR'))

dlg_hits, dlg_miss = 0, []
for cid, old, new in DIALOGUE:
    c = CH.get(cid)
    if c and old in c['body']:
        c['body'] = c['body'].replace(old, new, 1)
        dlg_hits += 1
    else:
        dlg_miss.append((cid, old[:60]))

# --------------------------------------------------------------- recount -----
def wc(s):
    return len(re.findall(r"[A-Za-z0-9'\u2019\u2014-]+", re.sub(r'[*_>#]', ' ', s or '')))

prose = sum(wc(c['body']) for c in entry['chapters'])
analysis = sum(wc(c['analysis']['title'] + ' ' + c['analysis']['body'])
               for c in entry['chapters'] if c.get('analysis'))
apparatus = (sum(wc(' '.join(str(v) for v in l.values())) for l in entry.get('ledger', []))
             + sum(wc(f['t'] + ' ' + f['d']) for f in entry.get('findings', []))
             + wc(entry.get('verdict', {}).get('body', '')))
total = prose + analysis + apparatus
entry['wordCount'] = total
entry['readingTime'] = max(1, round(total / 225))

inline = sum(len(re.findall(r'^\*(?:WAH|Waluigi)[^*]{20,}\*$', l))
             for c in entry['chapters'] for l in c['body'].split('\n'))
entry['asideCount'] = inline
entry['byline'] = 'Audited, narrated, heckled and grudgingly survived by Waluigi'

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(doc, f, ensure_ascii=False, indent=2)
    f.write('\n')

print(f'asides inserted   : {aside_hits}')
for m in aside_miss:
    print('   MISS', m)
print(f'dialogue expanded : {dlg_hits}/{len(DIALOGUE)}')
for m in dlg_miss:
    print('   MISS', m)
print(f'inline asides now : {inline}')
print(f'prose {prose} + analysis {analysis} + apparatus {apparatus} = {total} words')
