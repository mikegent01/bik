#!/usr/bin/env python3
"""Builds What If filing 003 — the night Mario was not sent away.

Canon hooks (characters.json):
  * mario — "Mario was NOT in the Mushroom Kingdom when Princess Peach was
    killed. This is the first and most damning anomaly... Someone MADE him leave."
  * mario — the third column of Peach's list, headed HELD THE BLADE, contains one
    name Bloomia refuses to write: "not the name anyone expects," someone Peach
    loved and forgave.
  * the_oracle — "custodian of bleeding timelines," survived a bullet by
    checkpointing reality, located in the Fracture Atrium.

The Oracle supplies the in-world engine for the whole What If archive: Waluigi
does not speculate, he is *shown* a branch and cannot intervene in it.

Run:  python3 tools/build-whatif-mario-present.py
"""
import json, os, re, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'whatifs.json')

CH = []
def ch(cid, heading, phase, wish, body, an_title, an_body):
    CH.append({'id': cid, 'heading': heading, 'phase': phase, 'wish': wish,
               'body': body.strip(),
               'analysis': {'title': an_title, 'body': an_body.strip()}})

# ============================================================== I ============
ch('the-atrium', 'I. The Fracture Atrium', 'The Ask', None, """
Waluigi went to the Oracle, which Waluigi would like on the record as an act of desperation and not of trust.

Waluigi does not trust the Oracle. Nobody sensible trusts the Oracle. It is not a person, it is a *role* — a custodian of bleeding timelines wearing whichever face was convenient when the job needed filling — and it has been known to watch a ritual go wrong while making a note about it rather than stopping it. Waluigi has read that file. Waluigi wrote most of that file.

But the Oracle keeps checkpoints. That is the entire function. When reality is asked to go one way and goes another, the Oracle is where the discarded version is filed, and Waluigi had a question that could not be answered by any ledger in any archive in any realm.

The Fracture Atrium is not a room so much as an argument between several rooms. Waluigi stood in the middle of it and asked.

"Highsun the first, nine fifty-five. Waluigi wants the branch where Mario was not sent away."

The Oracle did not look up. The Oracle has never once looked up at Waluigi and Waluigi has decided not to take it personally.

"That is a popular request."

"Waluigi is not interested in being unoriginal, Waluigi is interested in *seeing it*."

*WAH! 'A popular request.' Somebody else has asked for this branch. The Oracle would not tell Waluigi who, and Waluigi has a list of four candidates, and Waluigi does not like that Luigi is on it and Waluigi likes even less that Mario is on it too.*

Here is the canon fact this filing turns on, and it is not Waluigi's theory, it is in the record with Waluigi's name under it: **Mario was not in the Mushroom Kingdom the night Peach died.** He was always near her. Always. His entire career was built on her continued existence and periodic endangerment, and on the one night in eighty years that it actually mattered, he was *abroad on operations* that nobody specified, authorized by nobody named, in a document that gives no location.

Somebody made him leave. Waluigi has never once believed otherwise.

So the question is the simplest one in this entire archive, and Waluigi has been carrying it for a very long time:

**What if he had been there?**

"You understand the terms," the Oracle said. "You will observe. You will not be observed. You cannot intervene, you cannot warn, and you cannot stop the branch once it is running."

"Waluigi has read worse contracts."

"You have not read this one." It finally turned. "You are going to want to intervene at four separate points. I am telling you now so that when it happens you will know it was predicted and not remarkable."

*WAH! FOUR points! The thing tells Waluigi in advance that Waluigi will be reduced to shouting at a wall four separate times, and Waluigi — being Waluigi — thought: nonsense. Waluigi is a professional. Waluigi observes.*

*It was five. Waluigi wishes to file a correction against the Oracle. It was five.*
""",
"Waluigi's Note on the Mechanism",
"""Waluigi wants to be transparent about the epistemics here, because this filing is different from the previous two and the difference matters.

Filing 001, Waluigi was in the room. Filing 002, Waluigi made the decision. This one Waluigi *watched*, through a checkpoint held by an entity Waluigi does not trust, and so every claim in it carries an asterisk that Waluigi cannot remove.

But Waluigi will defend the source on one narrow ground: the Oracle has no motive to flatter Waluigi and did not. If the Oracle were fabricating a branch to please its audience, it would not have produced the one described in chapters five through eight. Nobody invents *that* to make a visitor feel better.

The divergence is also unusually clean, which Waluigi appreciates as a matter of craft. No wish. No artifact. No metaphysical bank. One order is not given, one plumber does not board a ship, and everything downstream is ordinary causality doing its work. That is the strongest kind of counterfactual: change one fact and touch nothing else.""")

# ============================================================= II ============
ch('highsun', 'II. Highsun the First', 'The Night', None, """
The branch opened on an ordinary evening and Waluigi was not prepared for how *ordinary* it was.

That is the thing nobody tells you about watching a checkpointed timeline. Waluigi expected portent. Waluigi expected the light to be wrong. Instead there was a kitchen, and somebody was complaining about the kitchen, and two guards were having an argument about a rota that Waluigi now knows was the rota, the famous one, the guard rotation gap that appears in every conspiracy chart ever drawn — and in the branch it is not a conspiracy at all yet, it is just two tired toads irritated about shifts.

*WAH! Waluigi has spent decades reading that rotation gap as a smoking gun and in the branch it is two men grumbling about a timetable. Both readings are correct. That is what makes conspiracies so difficult to audit: the machinery of an atrocity is assembled almost entirely out of people having a mildly annoying Tuesday.*

Mario was in the west corridor.

Waluigi had not seen him in — Waluigi is not going to write the number. He was younger, which was obvious, and he had the cap on, which was the part that got Waluigi, because in the last confirmed sighting in canon he does not have the cap and Waluigi has always considered that the saddest single detail in the file.

He was bored. He was walking a corridor he had walked a thousand times, in a palace where nothing had gone wrong in years, doing the least heroic and most necessary job in the building, which is *being nearby*.

Peach was in the Royal Suite. She had eleven days left in canon and in the branch she did not have eleven days, she had a chair by a window and some correspondence, and she was, as far as Waluigi could tell, entirely calm.

She knew. That is established. She knew what was coming and she had been preparing — the letter, the case, the child moved, the handmaiden briefed. All of that had already happened by Highsun the first, in canon and in the branch identically, because the divergence is not about Peach. Peach did everything right in every branch. Peach is the only person in this entire filing who does not make a single error.

*WAH! Waluigi wishes to say something about that and then Waluigi will move on. Everybody treats her as the object of this story. The thing that gets done to. She is the only participant who correctly identified the threat, correctly assessed her own odds, and spent her last days building a structure to protect somebody else that held for eighty-five years against four institutions. Peach ran a better operation from inside a death sentence than the entire Regency ran with an army. Waluigi will not hear otherwise.*

The seventeen wards were up. The four elite guards were posted. And behind all of it, entirely un-warded and entirely unguarded, was the hatch.

Peach had shown it to Chief Thornpaw, because it was theirs. A lover's passage. The one door in the palace that existed specifically so that two people could see each other without the court knowing.

Somebody else learned about it. That is the crime. Everything else in the file — the Guild, the Regency, the minutes, the eighty-five years of war — hangs off the fact that somebody learned about a door that only two people were supposed to know.

At the eleventh hour the hatch opened.

And in this branch, Mario was forty feet away, and he was bored, and he heard it.
""",
"Waluigi's Note on the Divergence Point",
"""Waluigi wants to isolate what actually changes, because it is smaller than anyone expects.

In canon, the assassin came through the hatch into a suite protected by seventeen wards facing outward and four guards facing the wrong corridor, and there was nobody inside the perimeter. The defence was *architectural*, and the hatch was a hole in the architecture.

Mario is not architecture. Mario is a man who happens to be nearby and reacts faster than a plan can be executed. He cannot be routed around by knowing the floorplan, because he is not on the floorplan. That is the entire and only reason he had to be removed, and it is why "operations abroad" is the single most incriminating document in the archive — the conspiracy could defeat every ward in the building and could not defeat *proximity*.

Waluigi notes, with professional appreciation for a well-run operation and complete disgust at its purpose, that whoever planned this understood the problem exactly. They did not try to beat Mario. They filed a travel authorization.""")

# ============================================================ III ============
ch('the-hatch', 'III. Forty Feet', 'The Night', None, """
Waluigi has watched the next ninety seconds more times than is defensible.

There is no fight. Waluigi wants to manage expectations, because everybody who hears the premise imagines a fight, and there is no fight, and the absence of the fight is the whole point of the branch.

Mario came through the door of the Royal Suite at a dead sprint approximately four seconds after the hatch mechanism sounded, which Waluigi has measured and which is faster than the assassin's own plan allowed for by a margin of about eleven seconds. The plan was good. The plan was simply built for a building with no Mario in it.

The assassin was across the room with the blade already out and already moving, and Mario did the thing that Mario has done in every recorded engagement of his career, which is to arrive between two objects that were about to touch.

He caught the wrist. That is all. He caught a wrist, and turned it, and the blade went into the floorboards, and it was over before Peach had finished standing up.

*WAH! Ninety seconds! Eighty-five years of war, four million people redefined as complicit, a Chancery District full of dead clerks, an heir hunted across nine realms — and in this branch the entire thing is prevented by a bored man in a corridor hearing a latch. Waluigi sat in the Fracture Atrium and made a sound that Waluigi is not going to describe.*

And then nobody moved, and it went wrong.

Because Mario had the assassin's wrist in one hand and the assassin's hood came back, and Waluigi — who has spent a very long time compiling the list of people it *could* be, who has a chart, who has arranged that chart by proximity and motive and access to the knowledge of a door — saw the face.

Waluigi is not going to write the name.

*WAH! And Waluigi can already hear the objection, because Waluigi would raise it too. 'You are the disclosure man. You published a leather case across forty-one outlets. You do not get to be coy NOW.'*

*Waluigi published that case, and Waluigi learned something from publishing it that cost somebody else everything, and the thing Waluigi learned is written into filing 002 in Waluigi's own hand: **a disclosure does not have to be total to be honest.** Waluigi worked that out eleven months too late for one person in a town nobody names. Waluigi is not going to be late twice.*

*WAH! So: the name is in the record. Peach wrote it herself, in the third column of her own list, under the heading HELD THE BLADE. Bloomia has it and will not write it. It is not the name anybody expects. It is somebody she loved.*

*It is not Waluigi's to publish and it is not this filing's to spend. Waluigi will tell you only what Waluigi needs you to know to follow what happens next, which is this: when the hood came back, Mario let go of the wrist.*

*WAH! He let go. Waluigi watched him let go. He had won — the blade was in the floor, the assailant was disarmed and held, the Princess was alive and standing four feet away — and Mario looked at the face and his hand opened.*

That was the first point at which Waluigi tried to intervene. Waluigi would like it noted that Waluigi lasted nine minutes into a branch he had been warned about, which is nine minutes longer than Waluigi expected of himself.

The Oracle did not comment. The Oracle simply let it run.
""",
"Waluigi's Structural Note",
"""The reason Waluigi withholds the name is not squeamishness and it is not canon-protection, though it is both of those too. It is that the identity is *structurally irrelevant to the finding* and Waluigi wants that understood, because it is the least intuitive thing in this filing.

Whoever held that blade, the branch runs the same. The mechanism that follows — the forgiveness, the standing down, the fifty years of what comes after — does not depend on which specific beloved person was on the other end of Mario's grip. It depends only on the fact that it *was* one, and that Peach had already decided how she was going to respond to them long before the hatch opened.

Waluigi will state the general principle, since this archive exists to produce them:

> An assassination carried out by a stranger is a security failure. An assassination carried out by someone the victim loves is not a security failure at all — it is a *relationship*, arriving at its conclusion, using a knife. You cannot post a guard against it. There is no floorplan on which it appears. Mario solved the security problem in four seconds and the security problem was never the problem.""")

# ============================================================= IV ============
ch('the-forgiveness', 'IV. What Peach Did', 'The Night', None, """
"Let them go, Mario."

Waluigi had spent a considerable portion of his life assuming he understood Princess Peach. Competitor. Good technique, better sportsmanship, won gracefully, lost gracefully, treated opponents as equals — which, as Waluigi has written elsewhere, is more than can be said for certain plumber brothers.

Waluigi did not understand Princess Peach at all.

She was not frightened. Waluigi watched the whole ninety seconds for the tell and there is none; she stood up when the door came in and she stayed standing and her hands were steady. She had known this was coming for eleven days, and she had done the arithmetic, and she had arrived at a conclusion that Waluigi has now examined from every angle available to an auditor and cannot make come out the way he wants it to.

She had decided to forgive them. In advance. Before the hatch, before the blade, before she knew for certain which night it would be.

*WAH! Waluigi has a problem with this and Waluigi is going to air it. Forgiveness is a **transaction** and Waluigi believes in transactions. Something is owed, something is paid, the ledger closes. What Peach did in that room was not a transaction. She wrote off the debt before it was incurred, unilaterally, without consultation, in a matter where the debt was **her own life** — and Waluigi has been trying for weeks to decide whether that is the most admirable thing in this archive or the most irresponsible, and Waluigi has failed, and Waluigi hates failing.*

Mario did not let go because he agreed. Waluigi wants that clear, because there is a reading of this branch in which Mario is complicit and it is wrong and Waluigi will not have it. Mario's hand opened because Peach told it to, and because Mario had spent his entire career operating under one simple standing instruction — *protect her, and do what she says* — and for the first time in eighty years those two clauses pointed in opposite directions.

He chose the second one. Waluigi thinks he chose wrong. Waluigi also thinks that if he had chosen the first one he would not have been Mario, he would have been a man who had decided he knew better than the person he was protecting, and Waluigi has read a great deal about men who decide that.

The assassin left through the hatch they came in by. Nobody raised an alarm. The four elite guards in the corridor never knew anything had happened, and Waluigi checked, and there is no incident report, because Peach did not file one.

That is the second thing she did and it is the one that actually decides the branch.

She *covered it up*.

Not to protect herself. She covered it up because an incident report means an investigation, an investigation means a name, and a name — she said this out loud, in the room, and Waluigi has the words — "a name would give them something to burn."

*WAH! She said it EIGHTY-FIVE YEARS EARLY! Sitting in a chair at the eleventh hour with a knife in her floorboards, Peach identified the exact mechanism that Waluigi published his way into in filing 002 and that cost the Chancery District one hundred and forty people. She got there first. She got there **before it happened**, without evidence, from first principles, and she made her decision accordingly and never explained it to anybody.*

*Waluigi needed a leather case, forty-one outlets and a body count to learn what that woman worked out in a chair. Waluigi is going to be unbearable about a great many things in this archive but Waluigi is not going to be unbearable about that.*

So: no report. No name. No investigation. The Princess of the Mushroom Kingdom survived an assassination attempt on Highsun the first, 955 BF, and the official record of the Mushroom Kingdom contains no assassination attempt on Highsun the first, 955 BF, because she decided the kingdom could not survive the answer.

And the people who arranged it were still there in the morning, at their desks, with their budgets, entirely unpunished and now fully aware that their operation had failed.
""",
"Waluigi's Note on the Second Decision",
"""Everybody who reads this branch fixates on the forgiveness. Waluigi did too, for a while. It is the dramatic beat and it is the one that hurts.

It is not the important one. The important one is the *suppression*, thirty seconds later, and Waluigi wants to give Peach full credit for it as a piece of statecraft even while filing it as the cause of everything in chapters six through eight.

Her reasoning was correct on its own terms and Waluigi has tested it hard. Name the assassin and you get a trial. A trial gets you the hatch, the hatch gets you Thornpaw, Thornpaw gets you the affair, the affair gets you the child, and the child gets you a succession war in 955 BF instead of 1040 BF — with Peach alive to be blamed for all of it and a half-Rakasha infant at the centre of a kingdom that would not have taken the news well. She ran that chain in a chair in about a minute and she was *right*.

So she chose silence. Deliberately, competently, for good reasons, at enormous personal cost.

And here is the finding, and it is the reason this filing sits next to filing 002 rather than anywhere else in the archive:

> **Filing 002 is what happens when the truth comes out. This is what happens when it does not. They are the same file read from opposite ends, and neither end is clean.**

Bloomia chose silence for eighty-five years and people died invisibly. Waluigi chose disclosure and people died visibly. Peach chose silence *first*, before either of them, at the source — and what it bought was not peace. It bought a delay, and the delay accrued interest, and the interest is the entire war.""")

# ============================================================== V ============
ch('the-morning', 'V. The Morning After', 'Consequence', None, """
Peach woke up alive, and that is the branch, and Waluigi wants to sit inside the good part of it for one chapter because it is real and because Waluigi has learned from the Wario file that the honeymoon is data and not decoration.

She was *good at it.*

That is what nobody in 1040 BF remembers, because everybody currently invoking her name is invoking a portrait. Peach was a working monarch with sixty years of institutional knowledge and an actual talent for the job. In the branch she goes on and does it. The Regency never forms, because there is nobody to be regent *for*. Toadsworth the Elder is not a shadow chancellor writing conspiracies into a private journal; he is a senior advisor who was passed over, and being passed over is an ordinary political injury that ordinary politics can absorb.

The eighty-five years that produced the civil war simply do not happen. Bramblehaven does not happen. The Chancery District does not happen. Captain Toadette — and Waluigi has checked this three times because Waluigi did not believe it — Captain Toadette in this branch is a *harbourmaster*. She runs a port. She is, by all available indication, content, and she has never executed anybody, and the phrase "no prisoners" does not attach to her name in any document Waluigi could find.

*WAH! A HARBOURMASTER! The scariest person in the Mushroom Kingdom, the woman Waluigi has genuinely described in writing as more unsettling than Bowser, is in this branch a mildly irritable civil servant with opinions about mooring fees! Waluigi laughed out loud in the Fracture Atrium and then Waluigi stopped laughing quite abruptly, because if that is what she is when Peach lives, then what she is in canon is not her character. It is her **damage**. Waluigi has been writing about that woman as a monster for years and it turns out Waluigi has been writing about a **symptom**.*

The Loyalists do not exist. There is nothing to be loyal to; she is simply there, ruling, being ordinary. Nobody weaponizes her memory because she has not got one yet, she has a schedule.

Mario stayed.

He put the cap back on, is the detail Waluigi keeps returning to. In the branch he never takes it off. There is no border town in 1038, no civilian clothes, no walking away from a merchant without answering. He is at the palace, he is nearby, he is bored in corridors — and he is *happy*, in the specific low-grade unspectacular way of a man whose job is going well.

And the child lived openly. Not crowned, not hidden — acknowledged, eventually, after a great deal of shouting, in a kingdom that had a living monarch with the political capital to force the argument and win it. There is a treaty with the Rakasha in this branch. It is signed by Thornpaw and by Peach and it holds.

Waluigi spent a considerable amount of time in these years of the branch. Longer than was necessary for the audit. Waluigi will not be justifying that.

*WAH! It is BETTER! Waluigi is required by the terms of an honest audit to say so and Waluigi says it without qualification: for roughly forty years this branch is straightforwardly, enormously, unambiguously better than the world Waluigi actually lives in. Fewer dead. No war. A functioning kingdom. Two brothers in the same building. Waluigi went looking for the catch for four decades of branch-time and could not find one.*

*Waluigi found it in year forty-one.*
""",
"Waluigi's Note on the Forty Good Years",
"""Waluigi is going to defend this chapter against the reader who is already bracing for the twist, because that reader is going to under-count it and the under-counting is a moral error.

Forty years. Not eleven minutes and not four days — **forty years** of a materially better world, and Waluigi has audited them and they hold. The war does not happen. Every person killed at Bramblehaven is alive. Toadette is a harbourmaster. Mario has his cap on. That is not a honeymoon, that is a *generation*, and any assessment that treats it as merely the setup for a reversal is doing propaganda rather than accounting.

Waluigi wants the comparison to filings 001 and 002 stated plainly, because the three of them together are starting to say something Waluigi did not set out to prove:

- Wario's wishes were good for **eleven minutes**.
- Waluigi's disclosure was good for **four days**.
- Mario being in the corridor was good for **forty years**.

The duration is the finding. It scales with how *small and physical* the intervention was. Wario altered a law of reality. Waluigi altered what four million people knew. Mario caught a wrist. The most modest intervention in the archive bought forty years, and Waluigi suspects that is the actual lesson of this entire archive and that Waluigi is not going to enjoy where it leads.""")

# ============================================================= VI ============
ch('year-forty-one', 'VI. Year Forty-One', 'Consequence', None, """
The people who arranged the assassination were never caught. Waluigi has been telling you this since chapter four and Waluigi has been waiting for it to matter.

Here is what it means in practice. In canon, the conspiracy *succeeded*, and a successful conspiracy dissolves — the participants disperse, the operation closes, the men grow old and die and one of them keeps an incriminating journal. The Regency spent eighty-five years governing on the proceeds. That is a crime with an end.

In the branch, the conspiracy *failed*, and was never exposed, and therefore never stopped being a live operation.

They were still there. Same desks, same budgets, same problem, and now with the additional data point that direct action had been tried once and had run into a plumber. So they did what institutions do when the direct approach fails, which is to stop trying to solve the problem and start trying to *manage* it.

They did not try to kill her again. Waluigi wants to be clear about that because Waluigi assumed they would and Waluigi was wrong. Killing her had never been the objective; the objective was the succession, and there are other ways to control a succession, and all of them are slower and none of them can be interrupted by somebody hearing a latch.

*WAH! And here is where Waluigi's stomach went, because Waluigi has audited institutions for a living and Waluigi recognized the manoeuvre instantly. They did not attack her. They **staffed** her. A committee here, a chamberlain there, a reform of the private secretariat, a security review after an 'unspecified incident' that officially never happened — and Waluigi wishes to point out the exquisite trap in that, because **Peach could not object to a security review for an incident she had personally covered up.** Her own suppression became the lever. They used her mercy as a procedural instrument. Waluigi has never seen anything so elegant and Waluigi wanted to be sick.*

It took twenty-two years. Waluigi watched all of it and it is the most tedious atrocity in this entire archive — no battles, no blades, just an unbroken sequence of reasonable-sounding administrative adjustments, each one individually defensible, each one narrowing the aperture by about a degree.

By year sixty-three of the branch, Princess Peach was the most beloved monarch in the recorded history of the Mushroom Kingdom and could not appoint her own correspondence secretary.

She was not imprisoned. Waluigi wants to be precise, because "imprisoned" implies a door that could be opened. There was no door. She was *scheduled*. Every hour accounted for, every audience pre-cleared, every document arriving pre-drafted, every decision technically hers and practically made three rooms away by people whose names never appear on anything.

And the signature. Waluigi has to write about the signature.

A living monarch signs things. That is the function. In canon, Peach's name gets invoked by fanatics and she is not there to object, and Waluigi has written at length that this is a tragedy — that her memory belongs to whoever shouts loudest and the loudest have swords.

In the branch, they did not need to invoke her. **They had her signature.**

Every measure, every levy, every expansion, every hard decision about a hard border — signed, in her own hand, because it was put in front of her by a process she could no longer see the edges of and because refusing had been made procedurally impossible one adjustment at a time.

*WAH! Waluigi went looking through the branch for the worst document he could find and Waluigi found it in year seventy-one and Waluigi is not going to describe its contents. It is an order. It is the kind of order that in canon the Peach Loyalists carried out in her name while insisting she would have wanted it, and Waluigi wrote — Waluigi WROTE, in the standing record, that she would have been horrified.*

*WAH! In this branch her name is on it. Not invoked. **Signed.** And she is alive to have signed it and alive to know what it did and alive for the next nineteen years afterwards.*

*Waluigi would like the reader to understand that canon-Peach gets to be horrified from beyond the grave and branch-Peach does not get to be horrified at all, because branch-Peach signed it, and there is no version of that woman that survives having signed it.*
""",
"Waluigi's Structural Finding",
"""This is the chapter the filing exists for, so Waluigi is going to be exact.

The conspiracy's objective was never *Peach dead*. It was *Peach not deciding the succession*. Death was simply the fastest available method, and it was chosen because it was fast, not because it was necessary.

Mario removed the fast method. He did not remove the objective, the personnel, the budget, or the institutional patience — and an institution has an enormous amount of patience, because unlike an assassin it does not have to survive the attempt. It just has to still be there next year.

> **A hero is a person optimized for problems shaped like an opponent: something that arrives, that can be reached, and that stops when struck. That shape is real and Mario is superb against it.**
>
> **An institution is not that shape. It has no wrist to catch. It arrives as a memorandum, over twenty-two years, and there is no moment at which sprinting into a room would have helped.**

Mario won the fight and then stood in a corridor for fifty years, in excellent health, fully armed, entirely undefeated — and watched her be dismantled by a scheduling process, because at no point did the thing he was good at become relevant again.

Waluigi has one more observation and it is the cruelest thing in this archive. **The suppression is what made it work.** Peach bought forty good years with her silence and paid for them with the twenty-two that followed, because the men who did it were never named and therefore never removed, and a threat you have forgiven but not neutralized simply reschedules.""")

# ============================================================ VII ============
ch('the-corridor', 'VII. The Man in the Corridor', 'Consequence', None, """
Waluigi wants to write about Mario now, and Waluigi is aware of how that is going to look.

Waluigi does not like Mario. This is documented, this is longstanding, and this is not going to change because of a checkpointed timeline. Mario gets the invitations. Mario gets the parade. Waluigi gets told the event is at capacity.

But Waluigi respects competence, and Waluigi watched a competent man spend fifty years being useless in the most complete way it is possible for a person to be useless, and Waluigi did not enjoy a single hour of it.

He knew. That is what makes it unbearable. He was not fooled by the committees. He worked out what was happening somewhere around year forty-eight — considerably faster than the court did, considerably faster than Waluigi would have — and Waluigi watched him try to do something about it, over and over, for two decades, with the only tools he has ever had.

He confronted people. Repeatedly. It accomplished nothing, because you cannot confront a *process*; you can only confront the person currently holding it, and there is always another person, and each one is genuinely only responsible for their own small reasonable adjustment.

He tried to take her out of the palace. Twice. Waluigi watched both attempts and Waluigi would like it on record that Waluigi was shouting during the second one. She would not go. She would not go because she was the monarch and the monarch does not abandon the office, and because — and Waluigi hates this, and Waluigi believes it is true — by year sixty-one she had been inside the schedule long enough to have stopped being certain the schedule was wrong.

*WAH! THAT is the fifth intervention point and that is where Waluigi lost the argument with the Oracle and started genuinely shouting at a room that could not hear him. She did not refuse because she was trapped. She refused because they had been managing her for twenty years and management **works**, that is the entire reason institutions do it, and a person who has spent two decades being handed pre-drafted documents by people who are unfailingly polite and unfailingly correct eventually stops being able to locate the exact place where the wrongness starts.*

*Waluigi has been in three committees this year. Waluigi is not going to pretend to be immune to this. Nobody is immune to this. That is what makes it the most effective weapon in the archive and it is why nobody writes ballads about it.*

And there is one more thing, and Waluigi has gone back and forth about including it, and Bloomia's instruction in filing 002 was to write it down and put a name on it, so.

Mario never told Luigi.

Fifty years. He never told his brother what came through the hatch or whose face was under the hood or what he let go of, and Waluigi has thought about why and Waluigi believes it is the simplest reason available: telling Luigi would have made it *real*, and would have made Luigi carry it, and Mario has spent his entire career being the one who carries things.

So in the branch there is no Star Fountain. There is no *"I thought I would never see you again."* They are in the same building for fifty years and there is a room in Mario's head that Luigi is never allowed into, and Waluigi watched them have dinner in year sixty-six and it was the loneliest thing Waluigi has ever seen two people do.

*WAH! In canon they lose each other for fifty years and get one flight on wing caps and Luigi says 'nothing can hurt us as long as we're together', and Waluigi has always read that line as the saddest in the archive.*

*In the branch they are never separated for a day and they are further apart than that. Waluigi would like somebody to explain to Waluigi why that is worse, because Waluigi knows that it is and Waluigi cannot construct the argument.*
""",
"Waluigi's Assessment of the Hero Problem",
"""Waluigi is going to say something in defence of Mario that Waluigi has never said in eighty years and does not intend to repeat.

He did not fail. Waluigi has audited those fifty years line by line looking for the error — the moment he was slow, or wrong, or cowardly — and it is not there. Every individual decision he made was correct. He caught the wrist. He obeyed the monarch, which is the correct behaviour for a protector who has not appointed himself her judge. He identified the capture faster than the court did. He tried to extract her, twice, and stopped when she refused, because the alternative to stopping is kidnapping the Princess of the Mushroom Kingdom for her own good and Waluigi has read about men who reasoned their way to that.

He did everything right and it did not matter, and Waluigi wishes to distinguish this carefully from filing 002, because the two look similar and are not:

- **Filing 002:** Waluigi was right about the facts and wrong about the people. A failure of *imagination*, correctable in principle by a better analyst.
- **Filing 003:** Mario was right about everything, including the people, and it did not help, because the problem was not of a type his capabilities apply to. A failure of *shape*, correctable by nothing he could have done differently.

The second one is worse and it is much more common. Most people are not defeated by being wrong. They are defeated by being excellent at something the situation has stopped requiring, and by continuing to be excellent at it, in a corridor, in good health, for fifty years.""")

# =========================================================== VIII ============
ch('the-branch-closes', 'VIII. The Branch Closes', 'Assessment', None, """
Waluigi asked the Oracle to run it to the end. The Oracle said there was no end, only the edge of the checkpoint, and then ran it anyway, which Waluigi chooses to interpret as the closest thing to kindness that entity has ever extended.

In 1040 BF of the branch — this year, the year Waluigi is writing this — Princess Peach is one hundred and forty-one years old and alive and on the throne and beloved. There has been no civil war. The Mushroom Kingdom is stable, prosperous, and by every published metric the most successful polity in the region.

She has not made an unmanaged decision in fifty-eight years.

Mario is sixty feet away and has been for most of a century. The Rakasha treaty holds. The heir is a middle-aged person with a public life and a security detail and no illusions about who actually governs. Toadette runs a port. Luigi is fine, and does not know why his brother goes quiet sometimes, and has stopped asking.

Nobody is at war. Nobody is dead who did not die of being old. And there is not one person inside that kingdom's borders who is free in the way that the people of the canon timeline — starving, bombed, conscripted, at war for eighty-five years — are free.

*WAH! Waluigi does not know what to do with that sentence and Waluigi has been staring at it for a week. Waluigi is not going to be the auditor who writes 'ah, but were they REALLY free' about a branch in which four hundred thousand people are alive who in Waluigi's own world are dead. That is a **student's** argument and Waluigi despises it. The corpses are real. The peace is real. The count is not close.*

*And it is also true that Waluigi watched a woman sign an order in year seventy-one, and Waluigi has watched a great many terrible things in the course of assembling this archive, and that is the one Waluigi cannot get out.*

The Oracle closed the checkpoint. Waluigi stood in the Fracture Atrium and did not say anything for a while.

"You wish to ask whether it is better," the Oracle said.

"Waluigi wishes you would stop doing that."

"It is not a difficult prediction. Everyone asks." It was already turning away. "The answer is that you are asking a question with a unit of measurement you have not chosen yet. Select the unit and the answer follows immediately. Bodies, and the branch wins by a margin that is not close. Sovereignty, and it loses. You want a third unit that resolves both and there is no third unit; there is only the one you pick and the argument you are then obliged to have with people who picked differently."

"That is not an answer."

"No," the Oracle agreed. "It is the reason the branch is still on file rather than discarded. Discarded branches are the ones with answers."

*WAH! Waluigi wants it recorded that Waluigi walked out of the Fracture Atrium fully intending to write a filing proving the Oracle wrong, and Waluigi has now written nine chapters and a ledger and a set of findings and Waluigi has not managed it, and Waluigi is beginning to suspect that the thing does not actually enjoy being right, it simply has the misfortune of usually being so.*

Waluigi went home. Waluigi opened the standing Mario file — the real one, the canon one, the one with 'Missing, presumed alive, last confirmed sighting 1039 BF at the Star Fountain' at the top of it — and read it through from the beginning for the first time in years.

*WAH! He is out there somewhere without his cap on, in civilian clothes, asking about routes east.*

*And in the branch where he was in the corridor, Waluigi watched him keep the cap, and the palace, and his brother, and fifty years of being sixty feet from a woman he could not help.*

*Waluigi does not know which of those two men he would rather be and Waluigi suspects that neither of them would answer that question either.*
""",
"Waluigi's Comparative Note",
"""Waluigi will do the arithmetic honestly, once, and then stop, because the temptation to keep re-running it until it produces a comfortable number is very strong.

**The branch wins on:** deaths (by an enormous and non-controversial margin), stability, the Rakasha treaty, the heir's safety, Toadette's entire life, and the simple fact of an old woman dying in a bed rather than being knifed at fifty-six.

**Canon wins on:** one thing only. In canon nobody governs the Mushroom Kingdom with Peach's genuine signature on their worst orders. The lie is exposed eventually, the Regency is a usurpation everybody can see, and the resistance to it — vicious, atrocious, indefensible resistance — is at least *resistance*, which requires that there be something visibly to resist.

Waluigi does not believe that outweighs four hundred thousand dead. Waluigi wants that on the record in plain language because Waluigi is going to spend the rest of this filing being ambivalent and Waluigi does not want the ambivalence mistaken for a verdict.

What Waluigi believes is narrower: **the branch is better and it is not good, and the gap between "better" and "good" is exactly the size of the thing Mario could not do.**""")

# ============================================================= IX ============
ch('the-corridor-question', 'IX. What Waluigi Filed Instead', 'Coda', None, """
Waluigi wrote three drafts of a conclusion and burned two, which for Waluigi constitutes an emotional crisis.

The first draft argued that Mario should have kept hold of the wrist. Waluigi liked this draft. It is decisive, it is satisfying, and it lets Waluigi be right about something. Waluigi burned it because it is a lie — because "the hero should have overruled the monarch he was protecting for her own good" is the founding argument of every occupying force in this archive, and because Waluigi has spent two filings establishing that being certain you know better is the most expensive substance in the world.

The second draft argued that Peach should not have forgiven them. Waluigi burned that one faster. Waluigi is not going to sit in a comfortable chair eighty-five years later and audit a woman's decision about her own murder.

So here is the third draft, and it is smaller than Waluigi wanted, and Waluigi has come to think that the smallness is the finding.

**Mario being in that corridor was worth forty good years and could not buy a forty-first.** That is not a failure of heroism. It is the *correct and permanent value* of heroism, stated precisely, and it is a great deal more than nothing — four decades of peace is more than Waluigi has ever produced with a ledger.

But it has a ceiling, and the ceiling is *reach*. A hero can reach an assassin. A hero cannot reach a committee. And the men who arranged that night understood the distinction perfectly, which is why they never tried to fight Mario and never needed to: they simply outlasted him, at a cost of twenty-two years and no violence whatsoever, using stationery.

*WAH! And Waluigi will tell you the part that has actually kept Waluigi awake, since Waluigi has been told by an old woman on the Sarasaland border to write things down and put his name on them.*

*Waluigi has spent this entire archive being the one who notices. The pension entry nobody audited. The six-gold line item. The clause in the fine print that Wario signed through. Waluigi's whole identity is that Waluigi is the person in the room who **sees the paperwork coming.***

*And in the branch, Waluigi is not there. There is no Waluigi in the Mushroom court in year forty-one. There is a man with a cap who can catch any wrist in the world and cannot read a memorandum, and there is a woman being scheduled to death by three rooms full of extremely polite administrators, and the thing that would have saved them is somebody standing up in a committee and saying **no, go back, read the appendix.***

*Waluigi is not claiming Waluigi would have saved her. Waluigi is claiming that the tool required was Waluigi's tool and not Mario's, and that nobody sent for it, and that nobody ever does — because when a kingdom decides it is in danger it sends for the man who can jump, and the danger is almost never shaped like something you can jump on.*

The file stays open. It stays open because the Oracle is right that a branch with an answer gets discarded, and Waluigi is not prepared to discard this one, and Waluigi is not prepared to answer it either.

Somewhere out there in the real world, in the actual timeline, in civilian clothes with no cap, a short man with a mustache is walking east and not answering merchants.

*Waluigi hopes he is going somewhere with a committee in it.*

WAAAAAAAH.
""",
"Waluigi's Closing Statement",
"""Three filings in, this archive has produced one finding that Waluigi did not go looking for and cannot now get rid of, so Waluigi is going to state it here where the third one ends.

- **Wario** was wrong about every fact. Eleven minutes.
- **Waluigi** was right about every fact and wrong about the people. Four days.
- **Mario** was right about the facts *and* the people, and was simply the wrong shape for the problem. Forty years.

The pattern is not "good intentions go bad," which is a bedtime story. The pattern is that **the intervention's durability scales inversely with its ambition.** Wario rewrote physical law and got eleven minutes. Waluigi rewrote what four million people knew and got four days. Mario caught one wrist in one corridor on one night and got forty years.

The smallest, most physical, least ambitious act in this entire archive outperformed the other two by four orders of magnitude, and it still ran out, because the thing it was holding back was not an event. It was an institution, and institutions do not need to win. They need to still be there next year, and they always are.

Waluigi's recommendation to the Board is unchanged from filing 002 and Waluigi now believes it more: **be suspicious of how quickly you know what to do.** Wario knew in thirty-eight seconds. Waluigi knew in nine minutes. Mario knew in four.

Peach took eleven days, and got further than any of us, and it was still not enough — and Waluigi has decided that the correct response to that is not despair, because despair is just another way of being finished with a problem.

The file stays open. Waluigi's name is on it. WAH.""")

# ------------------------------------------------------------------ extras ---
LEDGER = [
 {'n':'01','concept':'The Corridor','pitch':'"If the hero had been there, she lives."',
  'reality':'She lives. Ninety seconds, no fight, one wrist caught. The single most efficient intervention in the archive.',
  'lesson':'Correct. Wholly correct. The conspiracy could defeat seventeen wards and could not defeat proximity, which is why the only countermeasure they ever needed was a travel authorization.',
  'lifespan':'forty years','verdict':'Succeeded exactly as intended'},
 {'n':'02','concept':'The Forgiveness','pitch':'"Let them go, Mario."',
  'reality':'Peach forgives her assassin in advance and orders Mario to release them. He obeys, because his standing instruction was protect her and do what she says, and for the first time those clauses diverged.',
  'lesson':'Waluigi declines to audit a woman\u2019s decision about her own murder. Waluigi notes only that the alternative \u2014 the protector overruling the protected \u201cfor her own good\u201d \u2014 is the founding argument of every occupying force in this archive.',
  'lifespan':'permanent','verdict':'Not Waluigi\u2019s to rule on'},
 {'n':'03','concept':'The Suppression','pitch':'"A name would give them something to burn."',
  'reality':'No incident report, no investigation, no name. Peach correctly forecasts the exact mechanism that cost the Chancery District 140 people in filing 002 \u2014 eighty-five years early, from first principles, in a chair.',
  'lesson':'Her reasoning was right and it bought forty good years. It also left the operation intact, unnamed and fully staffed, and an unnamed threat does not disperse. It reschedules.',
  'lifespan':'forty years, then reversed','verdict':'Correct in isolation, fatal in sequence'},
 {'n':'04','concept':'The Capture','pitch':'\u2014 nobody pitched this one; it arrived as a memorandum',
  'reality':'Twenty-two years of individually defensible administrative adjustments. By year sixty-three the most beloved monarch in Mushroom history cannot appoint her own correspondence secretary, and her genuine signature is on every order the Loyalists would later merely invoke.',
  'lesson':'A hero is optimized for problems shaped like an opponent: something that arrives, can be reached, and stops when struck. An institution has no wrist to catch.',
  'lifespan':'ongoing at checkpoint edge','verdict':'Unopposed \u2014 no capability present could address it'},
]

FINDINGS = [
 {'t':'A hero is a person optimized for one shape of problem.',
  'd':'Something that arrives, can be reached, and stops when struck. Mario is superb against that shape and it is a real shape. It is simply not the shape of a committee, and there is no moment in twenty-two years of memoranda at which sprinting into a room would have helped.'},
 {'t':'Durability scales inversely with ambition.',
  'd':'Wario rewrote physical law: eleven minutes. Waluigi rewrote what four million people knew: four days. Mario caught one wrist: forty years. The smallest and most physical act in the archive outperformed the others by four orders of magnitude.'},
 {'t':'A threat forgiven but not neutralized reschedules.',
  'd':'The conspiracy failed and was never exposed, and therefore never closed. In canon a successful conspiracy dissolves; in the branch a failed one stays live, at the same desks, on the same budget, with a new and slower method.'},
 {'t':'Silence and disclosure are the same file read from opposite ends.',
  'd':'Peach chose silence at the source and people died invisibly forty years later. Waluigi chose disclosure in filing 002 and people died visibly in four days. Neither end of that file is clean and this archive now contains both.'},
 {'t':'A living figurehead is more useful to a conspiracy than a dead one.',
  'd':'Canon-Peach gets her memory invoked by fanatics and is not there to object. Branch-Peach signs the orders herself, in her own hand, and is alive for nineteen years afterwards knowing what they did.'},
 {'t':'Nobody ever sends for the auditor.',
  'd':'The tool required in year forty-one was somebody standing up in a committee saying go back and read the appendix. When a kingdom believes itself in danger it sends for the man who can jump, and the danger is almost never shaped like something you can jump on.'},
]

VERDICT = {'title': "Waluigi's Verdict",
 'body': """Four hundred thousand people are alive in the branch who are dead in Waluigi's world. Waluigi is not going to be clever about that number and Waluigi will not have this filing read as an argument that the corridor was a mistake. It was not. It was the best single act in this archive and it bought four decades of peace at a cost of one caught wrist.

And it still ran out, because Mario could reach the assassin and could not reach the men who sent them, and those men did not need to beat him. They needed to still be at their desks in year forty-one, and they were.

Waluigi's finding is this. **We have built our entire idea of rescue around the four seconds in the corridor, and the four seconds are real and they are worth forty years — but nobody has ever written a ballad about the person who reads the appendix, and the appendix is where she was actually lost.**

Waluigi is aware that this conclusion is self-serving, coming from an auditor. Waluigi has examined it for that bias and Waluigi believes it survives, and Waluigi would like the reader to check the working anyway, because Waluigi is exactly the sort of person who would get this wrong in exactly this direction.

The file stays open. WAH."""}

def wc(s):
    return len(re.findall(r"[A-Za-z0-9'\u2019\u2014-]+", re.sub(r'[*_>#]', ' ', s or '')))

prose = sum(wc(c['body']) for c in CH)
analysis = sum(wc(c['analysis']['title'] + ' ' + c['analysis']['body']) for c in CH)
apparatus = (sum(wc(' '.join(str(v) for v in l.values())) for l in LEDGER)
             + sum(wc(f['t'] + ' ' + f['d']) for f in FINDINGS)
             + wc(VERDICT['body']))
total = prose + analysis + apparatus
inline = sum(len(re.findall(r'^\*(?:WAH|Waluigi|He is out|And in the branch)[^*]{20,}\*$', l))
             for c in CH for l in c['body'].split('\n'))

entry = {
 'id': 'mario_in_the_corridor',
 'title': 'What If Mario Had Been There?',
 'subtitle': 'The one order that was not given, the wrist that was caught, and the forty good years it bought',
 'emoji': '\U0001f9e2',
 'accent': '#e0483c',
 'kicker': 'What If \u00b7 Filing 003',
 'status': 'Non-canon hypothetical',
 'clearance': 'Open file \u2014 observed via Oracle checkpoint, Fracture Atrium',
 'subject': 'Mario',
 'narrator': 'Waluigi',
 'pov': 'First person \u2014 Waluigi, observing a checkpointed branch he cannot intervene in',
 'byline': 'Requested, witnessed, and unsuccessfully argued with by Waluigi',
 'divergence': 'Nobody signs the order sending Mario abroad. On Highsun the first, 955 BF, he is forty feet down the west corridor when the hatch opens.',
 'premise': "Canon record, Mario file: he was not in the Mushroom Kingdom the night Peach was killed, and Waluigi has never believed that was an accident \u2014 somebody with authority made him leave. This filing removes that single order and watches what a hero can and cannot save.",
 'summary': "Waluigi asks the Oracle for the branch where Mario was never sent away. Mario hears the hatch, crosses forty feet, and catches the assassin's wrist \u2014 and then sees the face beneath the hood, and Peach tells him to let go. She forgives her killer, suppresses the incident, and buys forty genuinely better years: no Regency, no civil war, no Loyalists, Toadette a harbourmaster, the cap back on. Then the conspiracy \u2014 failed, unexposed, and therefore never closed \u2014 stops trying to kill her and starts trying to staff her.",
 'tags': ['Waluigi','Mario','Princess Peach','The Oracle','Mushroom Kingdom','Luigi',
          'Peach Loyalists','Non-canon','Counterfactual','Institutions'],
 'wishes': [
   {'n':1,'concept':'The Corridor','icon':'\U0001f3c3','result':'Ninety seconds. She lives.','color':'#e0483c'},
   {'n':2,'concept':'The Forgiveness','icon':'\U0001f54a\ufe0f','result':'The blade goes free','color':'#e0b400'},
   {'n':3,'concept':'The Suppression','icon':'\U0001f92b','result':'Forty good years, bought on credit','color':'#2fae8a'},
   {'n':4,'concept':'The Capture','icon':'\U0001f4c4','result':'Twenty-two years of memoranda','color':'#8a4bff'},
 ],
 'resetsUsed': 0,
 'resetsTotal': 0,
 'outcome': 'Peach is 141 and alive and beloved and has not made an unmanaged decision in fifty-eight years. Four hundred thousand people are alive who are dead in canon. Mario is sixty feet away, in excellent health, undefeated, and has been for most of a century.',
 'epigraph': '\u201cSelect the unit and the answer follows immediately. Bodies, and the branch wins by a margin that is not close. Sovereignty, and it loses.\u201d \u2014 the Oracle, Fracture Atrium',
 'chapters': CH,
 'ledger': LEDGER,
 'findings': FINDINGS,
 'verdict': VERDICT,
 'related': [
   {'label':'Mario','route':'#/article/mario','emoji':'\U0001f9e2'},
   {'label':'Princess Peach','route':'#/article/princess_peach','emoji':'\U0001f451'},
   {'label':'Luigi','route':'#/article/luigi','emoji':'\U0001f7e2'},
   {'label':'The Oracle','route':'#/article/the_oracle','emoji':'\U0001f52e'},
   {'label':'Captain Toadette','route':'#/article/captain_toadette','emoji':'\u2694\ufe0f'},
   {'label':'Chief Thornpaw','route':'#/article/chief_thornpaw','emoji':'\U0001f43e'},
 ],
 'wordCount': total,
 'asideCount': inline,
 'readingTime': max(1, round(total/225)),
 'filed': datetime.date.today().isoformat(),
 'author': 'Waluigi (Waluipedia What If Board)',
}

with open(PATH, encoding='utf-8') as f:
    doc = json.load(f)
doc['whatifs'] = [w for w in doc['whatifs'] if w.get('id') != entry['id']]
doc['whatifs'].append(entry)
with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(doc, f, ensure_ascii=False, indent=2)
    f.write('\n')

print(f'chapters : {len(CH)}')
print(f'asides   : {inline}')
print(f'prose {prose} + analysis {analysis} + apparatus {apparatus} = {total} words')
print(f'filings now: {len(doc["whatifs"])}')
