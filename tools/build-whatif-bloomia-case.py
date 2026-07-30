#!/usr/bin/env python3
"""Builds What If filing 002 — the Bloomia Case — and appends it to whatifs.json.

Canon hook (characters.json, princess_peach):
  "Waluigi hopes someone eventually uncovers the truth of Peach's assassination.
   Not because justice matters ... but because maybe the truth would give the
   Loyalists something to focus on besides atrocities."

This filing tests that hope and finds it wanting. Written in the same house voice
as the Imp Ambush event: Waluigi first person, inline *WAH! ...* asides, and a
per-chapter analysis callout.

Run:  python3 tools/build-whatif-bloomia-case.py
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
ch('the-letter', 'I. Where Roses Grow in Winter', 'The Find', 'Disclosure', """
Waluigi found her.

Waluigi would like that established before anything else in this filing, because in the branch that actually happened nobody found her, the file stayed open, and eighty-five years of people kept dying over a question that had an answer sitting in a leather case behind a loose stone. In *this* branch Waluigi found her, and Waluigi is going to spend the rest of this document explaining why that was worse.

The cipher had been circulating in fragments for decades. **I AM ALIVE. I AM WAITING. FIND ME IN THE PLACE WHERE ROSES GROW IN WINTER.** Every intelligence service in three realms had run at it and come back with nothing, because every intelligence service in three realms was looking for a *greenhouse*.

*WAH! Of course they were looking for a greenhouse! Eighty-five years of the finest analytical minds in the Mushroom Kingdom, and every single one of them read 'where roses grow in winter' and thought: horticulture. Waluigi read it and thought: that is not a gardening clue, that is a **loyalty test**. It is designed so that only somebody who knew Peach privately could solve it, which means the answer is not on any map. It is in a memory.*

Rose Manor keeps its winter garden under glass in the Eastern Marches, and House Rosewood has been searched eleven times. That was never it. Peach did not mean a *place* where roses grow in winter. She meant the only person she ever knew who could make them do it — an under-gardener at the palace who had a trick with mulch and ash that he refused to write down, and who was pensioned off to a cottage on the Sarasaland border in 951 BF, four years before the assassination, on Peach's personal instruction and out of Peach's personal purse.

Waluigi found that pension entry in a ledger nobody had audited since it was written, because nobody audits *outgoings that small*. Six gold a quarter. It is the cheapest line item in eighty-five years of Mushroom Kingdom accounts and it was hiding the most expensive secret in the realm.

Lady Bloomia answered the door herself. She was very old and entirely unsurprised.

"You took a long time," she said.

"Waluigi is aware."

"I made tea an hour ago." She stood back from the door. "It'll be cold. Come in anyway."

*WAH! An HOUR ago! She made the tea an hour before Waluigi arrived! Waluigi has never in his life been out-anticipated by a woman in a cardigan and Waluigi would like to state for the record that he found it deeply upsetting and also that the tea was excellent even cold, which somehow made it worse.*

The case was on the table. Leather, cracked, cheap — the kind of case a servant would carry and nobody would search. She had been keeping it under a floorboard for eighty-five years and she pushed it across the table to Waluigi like a woman passing along a bill she had finally stopped being able to afford.

"You know what's in it," she said. It was not a question.

"Waluigi has a theory."

"Then you know what happens when it comes out."

Waluigi opened his mouth to say *yes*, and discovered on the way that he did not actually know, and that he had come all this way without ever once finishing that particular thought.
""",
"Waluigi's Opening Audit",
"""Everybody who hunted Bloomia hunted her as a *person*. Waluigi found her by auditing a **pension**. There is a lesson in that and it is not flattering to the intelligence community: institutions guard their secrets ferociously and their bookkeeping not at all. Eleven armed searches of Rose Manor, eighty-five years of surveillance, and the woman was findable the entire time by anybody willing to read four hundred pages of quarterly outgoings looking for a number too small to matter.

Waluigi wants to flag the second thing too, because the whole filing hangs on it. Bloomia's first real question was not *who are you* or *how did you find me*. It was **"then you know what happens when it comes out."** She had spent eighty-five years alone with that question. Waluigi had spent about four minutes. Guess which of us had the better answer.""")

# ============================================================= II ============
ch('the-case', 'II. What Was Actually In It', 'The Find', 'Disclosure', """
Waluigi is an auditor. Waluigi has opened a great many boxes that were supposed to contain proof and found instead that they contained *implication*, which is what proof looks like to people who have never had to file any.

This was not that. This was the real thing, and Waluigi knew it within ninety seconds, and Waluigi's hands were not entirely steady.

There were four things in the case.

**One.** Peach's own hand, dated eleven days before her death, sealed and unsent, addressed to nobody. She knew. She had worked out that she was going to be killed and she had worked out approximately who, and instead of running she had spent those eleven days making arrangements. Waluigi read that letter four times. The handwriting does not degrade. Not once, not on any line. Waluigi has seen the handwriting of frightened people and this was the handwriting of somebody doing paperwork.

*WAH! Eleven days! She had ELEVEN DAYS and she did not run, she did not raise a guard, she did not go public — she filed. She sorted the evidence, she briefed a handmaiden, she moved the child, and she wrote a letter to nobody in particular in case somebody eventually became somebody. Waluigi has spent his entire career being the only person in the building who does the paperwork and Waluigi has never once felt companionship about it before and did not enjoy the sensation.*

**Two.** The Regency minutes. Not a summary, not a copy — the *minutes*, initialed, from a session that officially never took place, in which Toadsworth Sr. and four others discussed the succession problem in the plainest possible language and resolved it. There is no euphemism in the document. That is the detail that ruins you. They did not write "the situation." They wrote what they meant, because they were confident enough that nobody would ever read it.

**Three.** The Mages' Guild movement orders. Which is how a *political* murder becomes an *interdimensional* one, because the Guild is not a Mushroom Kingdom institution and never has been, and those orders are countersigned by an office that still exists and still has a budget.

**Four.** A birth record. Half-Rakasha. Fathered by Chief Thornpaw. Smuggled out on the same night by the same handmaiden, and — this is the part that turns a history file into a live political weapon — **not deceased.** Relocated, renamed, and, if the trail in Bloomia's own annotations means what it appears to mean, still alive and entirely unaware.

*WAH! And there it is. Waluigi came looking for a murder and found a HEIR. Do you understand what that fourth document is? It is not evidence. Evidence is about the past. That is a **claim to a throne** with a pulse attached, sitting in a leather case on a kitchen table in the Sarasaland border country, and Waluigi is holding it, and Waluigi's name is now on the chain of custody. Waluigi would like to go home. Waluigi did not go home.*

"They killed her to stop the child inheriting," Waluigi said, out loud, to the room.

"They killed her," Bloomia said, "to stop the *kingdom finding out there could be* a child like that. The inheritance was second." She refilled a cup nobody was drinking from. "You'll get that wrong when you write it up. Everybody gets that wrong. It wasn't about who sits on the chair. It was about what sitting on the chair would have *meant* about us."
""",
"Waluigi's Evidentiary Note",
"""Waluigi is going to be professional for one paragraph. The reason this case is lethal is not that it proves a murder. Murders are, bluntly, survivable for an institution — you produce a culprit, you hang him, you commission a memorial and you move on. This case proves **three separate, incompatible things at once**, and that is what makes it unmanageable:

1. A *criminal* fact: the Regency killed the monarch. Prosecutable, in theory. Everybody involved is eighty-five years dead.
2. A *jurisdictional* fact: the Mages' Guild was contracted for it. Not prosecutable in any Mushroom court, and the countersigning office still has a budget and a door you can knock on.
3. A *constitutional* fact: there is a living heir with a better claim than anybody currently fighting over the chair.

Fact one is history. Fact two is a war with an interdimensional institution. Fact three is a war *at home*. Waluigi will state the operational finding plainly, because it took Waluigi far too long to see it: the truth was never one object. It was three, wired together, and every faction that received it kept only the wire that pointed where they were already going.""")

# ============================================================ III ============
ch('the-decision', 'III. The Only Real Decision in This Filing', 'The Find', 'Disclosure', """
Here is where the branch actually splits, and Waluigi wants to be precise about it, because it is not the moment anybody expects.

The branch point is not the assassination. The branch point is not Bloomia surviving, or the case existing, or Waluigi finding the pension entry. All of that is canon. All of that already happened.

The branch point is a conversation at a kitchen table on the Sarasaland border, in which an old woman asked Waluigi a question and Waluigi answered it.

"You have three choices," she said, "and I've had eighty-five years to think about all of them, so don't waste my time being clever."

*WAH! 'Don't waste my time being clever.' Waluigi has been spoken to in that tone by exactly two people in his life and one of them was a Mages' Guild disciplinary tribunal. Waluigi put the tea down and sat up.*

"You can burn it," she said. "That's the first one. It ends with me and it ends with you. The war goes on, but it goes on the way it's been going, and nobody dies for a *new* reason."

"That is an appalling suggestion."

"It's the one I've been taking for eighty-five years," said Bloomia, "and I want you to notice that you called it appalling from a chair you've been sitting in for nine minutes."

*WAH! Waluigi had no answer to that and Waluigi would like the record to show that Waluigi did not attempt one.*

"Second, you can hand it to somebody. Pick a faction. Loyalists, Regency, the Guild, whoever pays best — I don't care, they're all the same door." She looked at Waluigi steadily. "Whoever you hand it to wins. Not the argument. The *war*."

"And the third."

"Publish all of it. Everywhere. To everyone. At the same time." She sat back. "No broker, no faction, no negotiation. Just the truth, in public, in full, all at once. That's the one you want. I can see it on your face — you've wanted it since you opened the case."

Waluigi did not answer immediately, and Waluigi has thought a great deal since about what was actually happening in that pause.

Waluigi has written — in the permanent record, in the Peach file, in words anyone can go and check — that Waluigi *hoped* somebody would eventually uncover the truth of the assassination. Not because justice matters. Waluigi is on the record as cynical about justice. But because maybe, MAYBE, the truth would give the Loyalists something to aim at besides atrocities. Maybe knowing who killed Peach would let them point their rage at something specific instead of spraying it across every settlement between here and the capital.

That is Waluigi's own sentence. Waluigi wrote it. And on that night, at that table, Waluigi got handed the chance to find out whether it was true.

"Publish," Waluigi said.

Bloomia nodded slowly, and did not look pleased, and did not look surprised.

"I thought so," she said. "I want it written down somewhere that I told you what would happen."

"You have not told Waluigi what will happen."

"No," she agreed. "Because you wouldn't have believed me, and then you'd have published anyway, and you'd have thought you were doing it with your eyes open." She started clearing the cold cups. "This way at least you'll learn it properly."
""",
"Waluigi's Note on the Branch Point",
"""Waluigi wants every reader to notice what the actual divergence is in this filing, because it is not a magic item and it is not a wish. **It is a man being handed exactly what he said he wanted.**

That is the entire experiment. The Wario filing asked what happens when a fool gets four wishes. This one asks something Waluigi finds considerably more uncomfortable: *what happens when the competent, cynical, careful one gets his single reasonable request granted in full.*

And note the structure of Bloomia's three options, because she had eighty-five years to get it right and she did. Burn it (the truth dies, the war continues at current intensity). Broker it (the truth becomes ammunition, one side wins). Publish it (the truth becomes public, and — Waluigi assumed — the shouting finally has somewhere to point).

Waluigi took door three in under nine minutes. Bloomia had been standing in front of all three doors since before Waluigi was born and had never once opened any of them. Waluigi assumed at the time that this was cowardice. Waluigi would like to formally withdraw that assumption.""")

# ============================================================= IV ============
ch('publication', 'IV. Publication', 'Disclosure', 'Disclosure', """
Waluigi did it properly. Waluigi wants that on the record too, because when this is discussed — and it is discussed — the accusation is always that it was done carelessly, and it was not.

Simultaneous release. Forty-one outlets across nine realms, timed to the same hour so no single jurisdiction could suppress ahead of the others. Full facsimiles, not summaries. Provenance chain published alongside, including the pension ledger, including Waluigi's own name and route to the source, so that nobody could claim laundering. Independent verification lodged in advance with three institutions that hate each other and would therefore never agree to a joint forgery: the Regal Archive, the Grand Latin Assembly registry, and the Chroniclers of the Liberated Toads.

*WAH! Waluigi did the PAPERWORK! Waluigi did more paperwork for this release than the Regency did for the actual murder! Every document sourced, every chain notarized, every claim cross-filed with parties who would have loved nothing better than to catch Waluigi inventing it! Waluigi built the most audit-proof disclosure in the history of the realm and Waluigi would like that remembered later in this file when the shouting starts.*

Bloomia gave testimony on the record, under her own name, in her own voice, at ninety-six years of age. She had prepared it. Of course she had prepared it. She had been preparing it since 955.

It broke at the eighth hour on a Thursday.

And for about four days — Waluigi will not pretend otherwise, and Waluigi has learned from the Wario file to be suspicious of exactly this feeling — it looked like the single greatest thing Waluigi had ever done.

The Regency's legitimacy collapsed within thirty-six hours. Not slowly. Not through a process. Three of the five founding claims of the Regency charter cite continuity from a lawful succession, and the minutes proved the succession was arranged by murder, and you cannot argue with initials. Two Regency ministers resigned inside a day. A third was arrested by his own guard, which Waluigi is told has no precedent whatsoever in Mushroom constitutional history.

The Mages' Guild issued a denial at hour six, a partial acknowledgement at hour thirty, and a statement of institutional regret at hour fifty-two, which for the Guild is roughly equivalent to a public collapse in the street.

Crowds in the capital. Genuine ones, not organized ones. People standing in the square outside the palace holding printed copies of a birth record over their heads.

And Captain Toadette — this is the moment, this is the one Waluigi replays — Captain Toadette stood in front of the assembled Peach Loyalists and read the letter aloud. Peach's own letter. In Peach's own words. And when she finished she was crying, and eleven thousand armed toads were silent, and Waluigi watched it on a scrying relay from four hundred miles away and thought, with his whole chest:

*It worked.*

*WAH! It worked! Waluigi thought it had WORKED! Waluigi sat in a rented room above a bakery watching the scariest woman in the Mushroom Kingdom weep over a piece of paper that Waluigi had put in her hands, and Waluigi thought: there it is. That is what the truth is for. Eighty-five years of aiming at everybody and now they know exactly where to aim.*

*Waluigi would like the reader to hold onto that feeling for one more chapter, because Waluigi did, and Waluigi is not going to be the only one who has to put it down.*
""",
"Waluigi's Note on the Four Good Days",
"""Waluigi has learned to be suspicious of the honeymoon. It was eleven minutes in the Wario file and it was four days here, and the length is the only difference. Both times the mechanism is identical: **the thing you asked for arrives, exactly as specified, before any of the consequences have finished loading.**

But Waluigi wants to defend those four days against the cynical reading, because the cynical reading is lazy and Waluigi despises lazy analysis even when it flatters him.

Real things happened. The Regency's legal claim genuinely died and has not recovered in any branch. Two ministers genuinely resigned. The Guild's countersigning office was genuinely dissolved. A false history that had governed a kingdom for eighty-five years was genuinely replaced with a true one, permanently, and *that part never reversed.*

The truth did everything Waluigi asked it to do. Every single thing. Waluigi's error was in the sentence he wrote years earlier without examining it — that giving the rage *a target* would reduce it. Waluigi had assumed rage was a quantity of energy looking for a direction. It is not. It is a direction looking for permission.""")

# ============================================================== V ============
ch('day-five', 'V. Day Five', 'Consequence', 'Disclosure', """
On day five the Peach Loyalists took the Chancery District.

Not a protest. Not an occupation. They took it the way an army takes a district, and by nightfall there were one hundred and forty people dead in a part of the capital that had not seen fighting in six years.

Waluigi did not understand it. Waluigi sat in the room above the bakery with the reports coming in and genuinely, sincerely did not understand it, because the men who killed Peach were **eighty-five years dead**. Every single one of them. There was nobody left to punish. That was supposed to be the *point*. Waluigi had handed eleven thousand armed toads a target that was already in the ground, on the theory that a satisfied grievance is a finished grievance.

Then Waluigi read Toadette's address to her own command and understood, and it was the worst professional moment of Waluigi's life.

She did not say *now we know who to punish*.

She said: **"We were right."**

*WAH! WAH! Waluigi had it exactly, precisely, one hundred percent backwards and Waluigi is going to write out the mechanism now so that nobody after Waluigi has to learn it the way Waluigi learned it.*

*Waluigi assumed the Loyalists were violent because they did not know who killed her. Uncertainty breeds indiscriminate rage — everyone is a suspect, so everyone is a target. Give them a name and the aperture narrows. That is what Waluigi wrote in the Peach file and it is a genuinely sensible theory and it is WRONG.*

*WAH! They were not violent because they did not know. They were violent because they suspected, and suspicion still carries doubt, and doubt is a **brake**. Every atrocity the Loyalists ever committed, they committed while carrying a small private worry that they might be wrong about the conspiracy. That worry was the only functioning restraint on the largest militia in the Mushroom Kingdom.*

*Waluigi removed it. Waluigi published a fully sourced, independently verified, notarized proof that they had been right about everything for eighty-five years — and in doing so Waluigi did not give their rage a target. Waluigi gave it **a licence.** WAAAH!*

The doctrine changed within a week, and it changed in public, and the language is what Waluigi cannot get out of his head. Before publication, the Loyalists justified their actions in the conditional: *those who may have been complicit.* After publication they dropped the conditional entirely. Complicity became a matter of established historical record, and the definition of complicity expanded — as it always does, as it has in every jurisdiction Waluigi has ever audited — from *the men who signed the minutes*, to *the institutions those men served*, to *the successors of those institutions*, to *anyone currently drawing a salary from them*, to *anyone who has ever accepted the legitimacy of the Regency*, which by the seventh week meant approximately four million people.

The clerks were the worst of it. Waluigi will not describe the clerks. They were nineteen and twenty years old and they had been born fifty years after every man named in the minutes was dead, and they were filing property transfers, and their names were on the door.
""",
"Waluigi's Correction — Filed Against His Own Prior Record",
"""Waluigi is required, by any honest standard of audit, to formally correct a finding published under his own name. So:

**PRIOR FINDING (Peach file, standing record):** *"Maybe knowing WHO killed Peach would let them direct their rage somewhere specific instead of spraying it at everyone."*

**CORRECTED FINDING:** Incorrect. The reverse. Uncertainty was not the *cause* of the Loyalists' violence — it was the only remaining *constraint* on it. Certainty did not narrow the target. Certainty **removed the last reason for restraint** and thereby widened it.

Waluigi is going to state the general principle, because it is bigger than one militia and Waluigi has since found it in four other conflicts in the archive:

> A movement that is *probably* right must move carefully, because being wrong would make it a monster. A movement that is *provably* right has been relieved of that obligation. Vindication is not a brake. Vindication is a **permission slip**, and it is issued retroactively, and it covers everything the movement has already done as well as everything it is about to do.

The Loyalists did not become worse people on day five. They became *the same people with documentation*. Waluigi handed the most dangerous faction in the kingdom a certificate stating that their worst instincts had been correct all along, and Waluigi did it deliberately, with excellent sourcing, in forty-one outlets simultaneously.""")

# ============================================================= VI ============
ch('the-heir', 'VI. The Fourth Document', 'Consequence', 'Disclosure', """
And then there was the child.

Not a child. That is the first thing Waluigi got wrong in his own head and kept getting wrong for weeks — everybody involved kept saying *the child* because the birth record says *child*, and the birth record is dated 955 BF. The heir was eighty-five years old. A grandparent. Living under a name that was not the birth name, in a town nobody in this filing will ever name, doing work that has nothing to do with any of this, and — this is documented, this is confirmed, Bloomia's annotations were explicit and Waluigi confirmed them independently before publication — **entirely unaware.**

Bloomia had done that on purpose. Peach had instructed it. Eleven days of arrangements, and the largest single arrangement was *the child must never be told*, because a claimant who does not know they are a claimant cannot be made into a banner.

Waluigi published the birth record.

Waluigi did not publish the name. Waluigi did not publish the location. Waluigi redacted both, thoroughly, professionally, and — Waluigi genuinely believed this at the time — sufficiently.

*WAH! 'Sufficiently.' Waluigi redacted a name and a town and considered the matter closed, and Waluigi would now like to explain to any reader who has never worked in intelligence exactly how stupid that was, because Waluigi has worked in intelligence and did it anyway.*

*A redaction protects you from the document. It does not protect you from the SEARCH. The instant that record was public, four million people knew that somewhere in the world there was a specific living individual, of a specific approximate age, of a specific and extremely rare parentage, and that whoever produced them first would hold the strongest legal claim to the Mushroom throne. Waluigi did not publish the heir's identity. Waluigi published the **existence of a prize** and then invited nine realms to go and look for it. The redaction was not a shield. It was a starting pistol.*

The hunt began within eleven hours. It has never stopped in any branch after this point.

The Regency wanted them dead, obviously — a living Toadstool-Rakasha heir is the last argument the Regency will ever lose. The Loyalists wanted them crowned, which sounds better and is not, because a person who is crowned against their will by an army that executes prisoners is not a monarch, they are a hostage with a hat. The Guild wanted them contained. Chief Thornpaw and the Rakasha, who had been given no warning whatsoever because Waluigi did not think to give it, discovered on a Thursday morning along with everybody else that a Rakasha claim to the Mushroom throne had existed for eighty-five years and had been suppressed by murder — and the Rakasha response to that news was not gratitude.

*WAH! Waluigi did not warn Thornpaw. Waluigi has run through the reasons and there is no good one. Waluigi was so completely occupied with the integrity of the disclosure — the sourcing! the notarization! the simultaneity! — that Waluigi never once stopped to consider that there were living people inside these documents who were going to find out about their own lives from a newspaper. Waluigi treated a family as a chain of custody. Waluigi is an auditor and Waluigi audited the wrong object.*

They were found in the fourth month. Waluigi is not going to write what happened. It is in the file if anybody genuinely needs it and Waluigi has never once reread that section.

Waluigi will write only this. In the branch where the case stayed under a floorboard, an eighty-five-year-old person in a town nobody names lived out an ordinary and completely unremarkable life and died of being old, and never knew, and it never cost them a single thing.
""",
"Waluigi's Failure of Imagination",
"""This is the finding Waluigi is least able to argue with and most wishes he could.

The disclosure was *technically* flawless. Waluigi stands by every element of the tradecraft — the sourcing was clean, the verification was independent, the redactions were correct, the simultaneity defeated suppression. If you graded this release as a piece of archival work it would score full marks, and Waluigi has been graded on archival work by people who enjoy failing him.

And it did not matter in the slightest, because Waluigi audited the **documents** and never once audited the **consequences of the documents existing in public**. Those are different objects. Waluigi did not know they were different objects. Waluigi does now.

The specific error has a shape that generalizes, so here it is for anybody who ever has to make this decision:

> Redacting an identity from a public record does not protect the person. It converts them from *a secret* into *a target with a search radius*. The only protection was the world not knowing they existed, and that was the one protection Waluigi personally destroyed.

Waluigi's second finding is smaller and worse. Peach spent eleven of her last days building exactly one safeguard around that child: **they must never be told.** She anticipated the Regency, the Guild, the succession crisis and her own murder, and she built a defence that held for eighty-five years against all of it. It did not fail. It was not defeated. It was *dismantled from the outside* by somebody who thought he was doing the right thing and had not read the instructions.""")

# ============================================================ VII ============
ch('the-reckoning', 'VII. What the Truth Actually Did', 'Assessment', 'Disclosure', """
Waluigi has spent a considerable amount of time since assembling an honest ledger, because the temptation from both directions is enormous and both directions are lying.

The comfortable lie is that publishing was straightforwardly good and the violence was somebody else's choice. The fashionable lie is that publishing was straightforwardly evil and the silence should have held forever. Waluigi has been offered both of these and has declined both, because Waluigi is an auditor and an auditor's entire value is the refusal to file a clean number when the real one is ugly.

So. What did the truth actually do.

**It ended a false history permanently.** This is real and it never reversed. The Regency's founding claim was a lie, everybody now knows it was a lie, and no future institution in that kingdom will ever again be able to build itself on that particular foundation. In every branch where the case burns, that lie is still standing today, still being taught, still being cited in charters.

**It destroyed the Regency's legitimacy in thirty-six hours.** Also real, also permanent.

**It dissolved the Guild's countersigning office** and forced the first external audit of Mages' Guild contract work in two hundred years. Waluigi is aware that this is the outcome Waluigi is most personally pleased about and Waluigi is aware of why, and has discounted it accordingly.

**It gave Bloomia her name back.** She was ninety-six. She had been a fugitive since she was eleven years old. She testified under her own name in public and she lived nineteen more months and she was, by every account Waluigi has collected, *content* — and Waluigi has thought about whether that belongs in a ledger of consequences and has decided that it does, because Waluigi refuses to run an accounting system in which an old woman getting her life back at ninety-six is worth nothing.

And against that:

**It removed the last restraint on the Peach Loyalists**, converting a brutal militia into a vindicated one, and vindicated is worse.

**It expanded the definition of complicity** from five dead men to four million living people, by the ordinary and entirely predictable mechanism by which every such definition has expanded in every conflict in the archive.

**It exposed a living person** who had been safe for eighty-five years, and who had been kept safe deliberately, by a woman who died to arrange it.

**It did not stop the war.** Waluigi wants this line to sit on its own. *It did not stop the war.* It did not even slow it. The war continued at higher intensity with better documentation, and both sides cited Waluigi's release in their recruitment.

*WAH! Both sides! BOTH sides cited it! The Loyalists cited it as proof the Regency were murderers and the Regency cited the heir clause as proof the Loyalists intended to install a foreign-blood claimant by force, and Waluigi's name is in the footnotes of both arguments, correctly attributed, with the sourcing Waluigi was so proud of. Waluigi built an audit-proof document and both armies used it as a recruiting poster. Waluigi has never been so thoroughly cited and so completely ignored at the same time.*

The Chroniclers of the Liberated Toads — who Waluigi selected as a verification institution specifically because they had no stake and Waluigi trusted their methods — published their own assessment in the ninth month. Waluigi has it pinned above the desk. It reads, in full:

> *"The disclosure was accurate. The disclosure was necessary. The disclosure was not survivable by the people it was about. All three of these are true and the Chroniclers decline to rank them."*

*WAH! 'The Chroniclers decline to rank them.' Cowards. Waluigi said that out loud when Waluigi first read it — 'cowards' — and then Waluigi sat with it for nine months and Waluigi has been trying to rank them ever since and Waluigi cannot do it either. Waluigi withdraws 'cowards'. Waluigi apologizes to the Chroniclers. It is the only honest sentence anybody wrote about this, including Waluigi, including this filing.*
""",
"Waluigi's Ledger",
"""Waluigi is not going to pretend to a verdict he does not have. But Waluigi will name the specific thing that makes this filing different from the Wario one, because they are opposite failures and the pairing is the whole reason both are in this archive.

**Wario's four wishes were all wrong on the facts.** He was mistaken about what gravity does, mistaken about what exchange is, mistaken about what time is, mistaken about what limits are. Every catastrophe in that file traces to a man who did not understand the object he was selling. That is a *comprehension* failure, and comprehension failures are correctable — you simply have to be less of an idiot, which is difficult but not mysterious.

**Waluigi was right on every fact and it did not help at all.** The documents were genuine. The analysis was sound. The tradecraft was clean. The Regency did murder her. The Guild was contracted. The heir did exist. Every claim Waluigi published survived nine months of hostile scrutiny from four institutions that wanted it dead, and *it changed nothing about the outcome*, because Waluigi had reasoned correctly about the evidence and never once reasoned about the **people who would receive it**.

That is not a comprehension failure. There is no fact Waluigi could have looked up. It is a failure of *imagination*, and Waluigi has no idea how to correct for it, and that is why this file is filed under open rather than closed.""")

# =========================================================== VIII ============
ch('the-other-doors', 'VIII. The Two Doors Waluigi Did Not Take', 'Assessment', 'Disclosure', """
Bloomia offered three doors. Waluigi took the third. Any honest filing has to walk the other two, so Waluigi has, exhaustively, and Waluigi hated all of it.

**Door One — burn it.**

The war continues at its existing intensity. The Regency governs on a lie for another generation at least. The clerks in the Chancery District are alive. The heir dies old, ordinary, and unaware, in a town nobody names.

And the lie is *still standing today*. Every future institution in that kingdom is built on a fraudulent succession that nobody can prove is fraudulent, which means it can be invoked again and probably will be. Bloomia dies a fugitive under a false name at ninety-eight, having spent her entire life — the whole of it, all ninety-eight years — as the sole custodian of something she was never permitted to put down.

*WAH! And people say this door is the 'safe' one. Waluigi wishes to point out what the safe door actually costs. It costs one woman her entire existence, quietly, off the books, in a cottage, so that four million people can be comfortably wrong. That is not a neutral outcome. That is simply an atrocity with better distribution — very small, very concentrated, and entirely borne by somebody who did not volunteer for it and never got asked twice.*

**Door Two — broker it.**

Hand the case to a single faction. Waluigi has modeled all four recipients and they converge with depressing speed.

Give it to the Loyalists and it never becomes public at all — it becomes a *warrant*. They do not need four million people to believe it. They need it to be true, and they already act as though it is. Outcome: everything from chapter five, minus the four good days, minus the Regency's legal collapse, minus Bloomia's testimony. Strictly worse in every column.

Give it to the Regency and it is destroyed within the hour, and Bloomia within the day, and Waluigi within the week.

Give it to the Guild and it is *filed* — which Waluigi finds the most sinister outcome of the four. Not destroyed. Filed. Retained as leverage over the Mushroom Kingdom in perpetuity, produced never, referenced occasionally, in a drawer forever.

Give it to the Rakasha, who arguably have the strongest moral claim, and it becomes a casus belli in a war they cannot win.

*WAH! Four recipients! Four! And in every single case the truth stops being a truth and becomes a **tool**, which is what a fact turns into the moment it has one owner instead of all of them. Waluigi ruled out door two in about ninety seconds and Waluigi remains satisfied with that ruling, which is more than Waluigi can say for the ruling that actually mattered.*

And there is a fourth door that Bloomia did not offer and Waluigi did not think of until eleven months later, at three in the morning, and which Waluigi believes was the correct one.

**Publish the first three documents. Destroy the fourth.**

The murder, the minutes, the Guild orders. All of it. Full disclosure, same forty-one outlets, same notarization. The Regency's legitimacy collapses identically. The Guild is audited identically. The false history dies identically. Bloomia testifies, gets her name back, is content.

And the birth record goes in a fire on the Sarasaland border, and the last person alive who knows there was ever a child is an old woman who has kept that particular secret successfully for eighty-five years and requires no assistance whatsoever in keeping it for a few more.

*WAH! Waluigi has run this branch more times than is healthy. It holds. Waluigi has attacked it from every direction — the succession chaos, the Rakasha question, the Loyalist doctrine — and the Loyalists still get their licence and the Chancery District still burns, because that consequence came from the minutes and not from the child. So it is not a clean branch. It is simply a branch in which one specific eighty-five-year-old person, who was never a party to any of this, dies of being old in a town nobody names.*

*Waluigi did not think of it. Waluigi had the case open on the table for nine minutes and Waluigi did not think of the obvious thing, which is that **a disclosure does not have to be total to be honest.** Waluigi believed in publishing everything because Waluigi is an auditor and auditors do not redact. Waluigi confused a professional habit with a principle and one person paid the entire bill for it.*
""",
"Waluigi's Structural Finding",
"""The important thing about the fourth door is not that it was better. It is *why Waluigi could not see it*.

Waluigi's whole identity is the person who publishes the full ledger. The one who will not let an institution bury a line item, who reads the outgoings nobody reads, who has been thrown out of three committees for reading the appendix aloud. Total disclosure is not a tactic Waluigi selected on that night. It is what Waluigi **is**, and so when the case opened, the decision was not actually made — it was *executed*, in nine minutes, by a man who experienced it as thinking.

Bloomia saw it. That is what she meant by "don't waste my time being clever" and it is what she meant by "I thought so." She was not asking Waluigi to choose. She had worked out decades earlier what Waluigi would do, and she made the tea an hour early, and she asked her question anyway so that at least one person would have said it out loud in the room before it happened.

The general finding, and Waluigi files it against himself:

> Every professional virtue is a blind spot wearing a uniform. The auditor cannot conceive of a justified redaction. The soldier cannot conceive of an unwinnable fight. The banker cannot conceive of a thing that should not have a price. You will not notice the one decision your character makes for you, because from the inside it does not feel like a decision at all. It feels like competence.""")

# ============================================================= IX ============
ch('the-cottage', 'IX. The Cottage', 'Coda', None, """
Waluigi went back once.

Nineteen months after publication, three weeks after Bloomia died. She left instructions that Waluigi was to be given the contents of the cottage, which turned out to be a joke at Waluigi's expense, because the contents of the cottage were a kettle, four cups, a floorboard with a hole in it, and one envelope.

Waluigi sat in the same chair. The tea situation was not addressed on this occasion.

The envelope was addressed, in an old woman's careful hand, to *THE ONE WHO FINALLY READ THE LEDGERS*, which Waluigi took as intended — as both a compliment and an indictment, delivered by somebody who had eighty-five years to work out how to do both in one line.

Inside was a single sheet.

> *You'll be blaming yourself by the time you read this, and I want to be unhelpful about it, because everyone else will be helpful and helpful is useless to you.*
>
> *I'm not going to tell you that you did the right thing. I don't think you did. I'm not going to tell you that you did the wrong thing either, because I don't think that's true and I've had longer to consider it than you have.*
>
> *Here's what I'll tell you instead. For eighty-five years I was the only person who knew, and I did nothing, and I called that protecting people. It wasn't. It was just quieter. The clerks in the Chancery are dead because of what you did. The people who died in the eighty-five years I sat on that case are dead because of what I didn't do, and nobody will ever count them, because nobody counts the ones that a silence kills. They don't make a sound. That's what a silence is for.*
>
> *You put your name on yours. That's the only real difference between us and it isn't a moral difference, it's just an administrative one.*
>
> *Don't burn the record of this. I know you'll want to. You'll want to file it somewhere it can't hurt anybody, and that instinct is the exact instinct I had in 955, and look what it cost. Write it down. Put your name on it. Let the next one read what it did.*
>
> *You were the first person in eighty-five years to knock on that door. I want you to understand what that hour was like for me. Not the years. The hour, after I heard the gate, while the tea was going cold. I'd been rehearsing that hour since before your parents were born and when it finally came I couldn't remember a single thing I'd planned to say.*
>
> *— B.*

Waluigi sat in the cottage for some time.

*WAH. Waluigi has been asked, more than once, whether he would do it again. Waluigi has a stock answer for this and Waluigi is not going to use it here.*

*The honest answer is that Waluigi does not know, and that the not-knowing is itself the finding. Waluigi is very good at being right. Waluigi has built an entire life on being the only competent person in the building, on reading the appendix, on finding the six-gold line item that everybody else skipped. And Waluigi was right about every single fact in that leather case, verified nine ways, and being right cost one hundred and forty people in the Chancery District and one person in a town nobody names, and the war went on regardless with Waluigi's footnotes in both recruitment briefings.*

*Being right is not the same as being useful. Waluigi did not know that. Waluigi thought they were the same thing and had thought so for a very long time, and Waluigi would rather have learned it some other way.*

Waluigi took the kettle. Waluigi does not know why and has stopped examining it.

The file stays open. Bloomia said to write it down, so it is written down, and Waluigi's name is on it, which is the only part of this entire affair Waluigi is still confident was correct.

WAAAAAAAH.
""",
"Waluigi's Closing Statement",
"""One more time, plainly, because this filing exists to be *used* and not admired:

Waluigi got exactly what Waluigi asked for. Not a twisted version — the real thing, in full, better sourced than Waluigi had any right to expect. The truth about Peach's assassination came out, comprehensively and permanently, and it did every single thing Waluigi predicted it would do.

It ended the lie. It broke the Regency. It audited the Guild. It gave an old woman her name back at ninety-six.

And it did not stop the war, because Waluigi had written years earlier that the rage needed a *target*, and the rage did not need a target. It needed **permission**, and Waluigi issued it, notarized, in forty-one outlets, simultaneously.

Waluigi is not filing this as a case against the truth. Waluigi wishes to be extremely clear, because that reading is available and Waluigi finds it contemptible: Bloomia's silence killed people too, invisibly, uncounted, for eighty-five years, and she knew it, and she said so in her own hand. There is no door in this filing that does not have a body behind it. The comfortable position — burn it, stay quiet, keep your hands clean — is not clean. It is merely *unaudited*.

What Waluigi is filing is this. If you are ever handed the truth about something enormous, and you find that the decision about what to do with it takes you less than nine minutes, then you did not make a decision. Your character made it for you while you watched, and you will not be able to tell the difference from the inside, and the bill will be paid entirely by somebody who was never in the room.

Waluigi took nine minutes.

Bloomia took eighty-five years and never chose at all, and Waluigi has stopped being certain which of those is the worse answer.""")

# ------------------------------------------------------------------ extras ---
LEDGER = [
 {'n':'01','concept':'The Murder','pitch':'"The Regency killed her. Prove it."',
  'reality':'Proven, in initialed minutes, from a session that officially never occurred. The Regency\u2019s legitimacy collapsed in thirty-six hours and never recovered.',
  'lesson':'This document did exactly what Waluigi wanted and Waluigi has no complaint about it in any branch.',
  'lifespan':'permanent \u2014 never reversed','verdict':'Disclosure justified'},
 {'n':'02','concept':'The Guild Contract','pitch':'"A local murder was actually an interdimensional one."',
  'reality':'Countersigning office dissolved; first external audit of Mages\u2019 Guild contract work in two hundred years.',
  'lesson':'Waluigi notes that this is the outcome Waluigi is most personally pleased by, and has discounted his own enthusiasm accordingly.',
  'lifespan':'permanent','verdict':'Disclosure justified'},
 {'n':'03','concept':'The Vindication','pitch':'"Give the Loyalists a target and the rage will narrow."',
  'reality':'The rage widened. Certainty removed the doubt that had been the militia\u2019s only functioning brake. Complicity expanded from five dead men to roughly four million living people within seven weeks.',
  'lesson':'Rage is not energy seeking a direction. It is a direction seeking permission. Waluigi issued the permission, notarized.',
  'lifespan':'ongoing','verdict':'Catastrophic \u2014 correction filed against Waluigi\u2019s own prior record'},
 {'n':'04','concept':'The Heir','pitch':'"Redact the name and the location. That is sufficient."',
  'reality':'It was not sufficient. Publishing the existence of a claimant converted a protected secret into a prize with a search radius, and nine realms went looking. Found in the fourth month.',
  'lesson':'A redaction protects you from the document. It does not protect anyone from the search. Peach built one safeguard in eleven days and it held for eighty-five years until Waluigi dismantled it from outside.',
  'lifespan':'four months','verdict':'Indefensible \u2014 no branch in which Waluigi defends this'},
]

FINDINGS = [
 {'t':'Vindication is a permission slip, not a brake.',
  'd':'A movement that is probably right must move carefully, because being wrong would make it a monster. A movement that is provably right has been relieved of that obligation \u2014 retroactively, covering everything it has already done.'},
 {'t':'A redaction converts a secret into a target with a search radius.',
  'd':'Waluigi withheld the heir\u2019s name and location and published their existence. The only real protection had been the world not knowing there was anyone to look for, and that was the protection Waluigi personally destroyed.'},
 {'t':'Being right is not the same as being useful.',
  'd':'Every fact in the case survived nine months of hostile scrutiny from four institutions that wanted it dead. It changed nothing about the outcome. Waluigi reasoned flawlessly about the evidence and never once reasoned about the people who would receive it.'},
 {'t':'Silence is not the clean option. It is the unaudited one.',
  'd':'Bloomia\u2019s eighty-five years of custody also killed people \u2014 invisibly, uncounted, because nobody tallies the deaths a silence causes. She said so herself, in her own hand. There is no door in this filing without a body behind it.'},
 {'t':'A disclosure does not have to be total to be honest.',
  'd':'Publishing three documents and burning the fourth achieves every institutional outcome Waluigi wanted and costs one fewer life. Waluigi could not see it, because total disclosure is not a tactic Waluigi selects \u2014 it is what Waluigi is.'},
 {'t':'You will not notice the decision your character makes for you.',
  'd':'From the inside it does not feel like a choice. It feels like competence. Waluigi took nine minutes and experienced it as deliberation.'},
]

def wc(s):
    return len(re.findall(r"[A-Za-z0-9'\u2019\u2014-]+", re.sub(r'[*_>#]', ' ', s or '')))

prose = sum(wc(c['body']) for c in CH)
analysis = sum(wc(c['analysis']['title'] + ' ' + c['analysis']['body']) for c in CH)

VERDICT = {'title': "Waluigi's Verdict",
 'body': """Waluigi declines to rank the outcomes, which Waluigi called cowardice when the Chroniclers did it and now understands to be the only defensible position available.

The truth came out. It was accurate, it was necessary, and it was not survivable by the people it was about. A false history died permanently. A militia was handed a licence. An old woman got her name back at ninety-six and used it. A person who had been safe for eighty-five years stopped being safe in an afternoon.

Waluigi's recommendation to the Board is not that the case should have stayed buried. Waluigi has watched what a silence costs and the bill is real and it is simply issued to people nobody counts.

Waluigi's recommendation is narrower and Waluigi believes it is the only transferable thing in this filing: **when the enormous thing lands in your hands, be suspicious of how quickly you know what to do with it.** Waluigi knew in nine minutes. Waluigi was the most qualified person in three realms to make that decision and Waluigi made it in nine minutes, and a woman who had thought about it for eighty-five years watched him do it and poured the tea.

WAH."""}

apparatus = (sum(wc(' '.join(str(v) for v in l.values())) for l in LEDGER)
             + sum(wc(f['t'] + ' ' + f['d']) for f in FINDINGS)
             + wc(VERDICT['body']))
total = prose + analysis + apparatus

inline = sum(len(re.findall(r'^\*(?:WAH|Waluigi)[^*]{20,}\*$', l))
             for c in CH for l in c['body'].split('\n'))

entry = {
 'id': 'peach_assassination_disclosed',
 'title': 'What If the Truth About Peach Came Out?',
 'subtitle': 'Waluigi finds Lady Bloomia, opens the leather case, and gets exactly what he asked for',
 'emoji': '\U0001f338',
 'accent': '#e05a8a',
 'kicker': 'What If \u00b7 Filing 002',
 'status': 'Non-canon hypothetical',
 'clearance': 'Open file \u2014 contains a correction filed by Waluigi against his own standing record',
 'subject': 'Waluigi',
 'narrator': 'Waluigi',
 'pov': 'First person \u2014 Waluigi, as the person who made the decision',
 'byline': 'Investigated, published, and permanently regretted by Waluigi',
 'divergence': 'Waluigi solves the Bloomia cipher by auditing a six-gold pension entry, eighty-five years after the assassination \u2014 and publishes the entire case.',
 'premise': "Canon record, Peach file, in Waluigi's own hand: he hopes someone eventually uncovers the truth of the assassination \u2014 not because justice matters, but because the truth might give the Loyalists something to aim at besides atrocities. This filing grants that wish in full and audits the result.",
 'summary': "Waluigi finds Lady Bloomia alive at ninety-six and opens the leather case: Peach's own letter, the Regency minutes, the Mages' Guild contract, and a birth record for a living half-Rakasha heir. He publishes everything across forty-one outlets. The Regency's legitimacy dies in thirty-six hours, the Guild is audited for the first time in two centuries, and for four days it looks like the best thing he has ever done. Then the Peach Loyalists \u2014 no longer merely suspicious but provably, documentably right \u2014 take the Chancery District.",
 'tags': ['Waluigi','Princess Peach','Lady Bloomia','Peach Loyalists','Mushroom Kingdom',
          'Mages Guild','Non-canon','Disclosure','Eyewitness Audit'],
 'wishes': [
   {'n':1,'concept':'The Murder','icon':'\U0001f5dd\ufe0f','result':'Regency legitimacy dies in 36 hours','color':'#e0b400'},
   {'n':2,'concept':'The Guild Contract','icon':'\U0001f9ff','result':'First external audit in 200 years','color':'#8a4bff'},
   {'n':3,'concept':'The Vindication','icon':'\u2696\ufe0f','result':'The last restraint is removed','color':'#e05a4a'},
   {'n':4,'concept':'The Heir','icon':'\U0001f338','result':'A safe person stops being safe','color':'#e05a8a'},
 ],
 'resetsUsed': 0,
 'resetsTotal': 0,
 'outcome': 'The truth held. Every fact survived nine months of hostile scrutiny. The war continued at higher intensity with better documentation, and both sides cited the release in their recruitment.',
 'epigraph': '\u201cThe disclosure was accurate. The disclosure was necessary. The disclosure was not survivable by the people it was about. All three of these are true and the Chroniclers decline to rank them.\u201d',
 'chapters': CH,
 'ledger': LEDGER,
 'findings': FINDINGS,
 'verdict': VERDICT,
 'related': [
   {'label':'Princess Peach','route':'#/article/princess_peach','emoji':'\U0001f451'},
   {'label':'Lady Bloomia','route':'#/article/lady_bloomia','emoji':'\U0001f338'},
   {'label':'Captain Toadette','route':'#/article/captain_toadette','emoji':'\u2694\ufe0f'},
   {'label':'Peach Loyalists','route':'#/article/peach_loyalists','emoji':'\U0001f3f3\ufe0f'},
   {'label':'Chief Thornpaw','route':'#/article/chief_thornpaw','emoji':'\U0001f43e'},
   {'label':'The Mushroom Kingdom','route':'#/article/mushroom_kingdom','emoji':'\U0001f344'},
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

print(f'chapters  : {len(CH)}')
print(f'asides    : {inline}')
print(f'prose {prose} + analysis {analysis} + apparatus {apparatus} = {total} words')
print(f'filings now: {len(doc["whatifs"])}')
