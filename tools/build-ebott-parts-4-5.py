#!/usr/bin/env python3
"""Builds Mount Ebott Survey Parts IV and V and appends them to events.json.

Continuity anchors already in the archive:
  * mount_ebott_survey_part_3 ends with Flowey caged beside the repaired survey
    machine in the abandoned Snowdin police station, and a Waluigi note warning
    that this is exactly what Flowey would have arranged.
  * characters.json/wing_gaster — 'The Missing Wing', a scientist who studied
    'darkness and the architecture between worlds before vanishing from ordinary
    history'. The lava encounter is that man, surfacing.
  * koffin_k exists; Lanky and Bulky were established as real in Part III.

Run:  python3 tools/build-ebott-parts-4-5.py
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'events.json')

CSS4 = (
    ".wiki-lead{background:linear-gradient(135deg,rgba(120,150,190,.14),"
    "rgba(40,44,60,.12),rgba(212,168,83,.06));padding:1.5rem;border-left:6px solid #6d8ab0;"
    "border-radius:1rem}"
    ".ebott-protocol{background:rgba(109,138,176,.09);border:2px solid #6d8ab0;"
    "border-radius:12px;padding:16px 20px;margin:22px 0;font-family:'JetBrains Mono',monospace}"
    ".ebott-protocol h4{color:#8fb2d8;margin-top:0;font-size:1.05em;letter-spacing:.08em;"
    "text-transform:uppercase;border-bottom:1px solid rgba(143,178,216,.3);padding-bottom:7px}"
    ".ebott-protocol p{font-size:.93em;line-height:1.6;margin:9px 0}"
    ".koffin-rage{background:linear-gradient(135deg,rgba(200,60,60,.10),transparent);"
    "border-left:4px solid #c83c3c;border-radius:0 10px 10px 0;padding:12px 18px;margin:18px 0}"
    ".koffin-rage b{color:#e07070}"
    ".ledger-row{border-top:1px solid rgba(255,255,255,.1);padding:11px 0}"
    ".ledger-row b{color:#d4a853}"
)

CSS5 = (
    ".wiki-lead{background:linear-gradient(135deg,rgba(220,90,40,.16),rgba(30,20,40,.16),"
    "rgba(140,60,200,.08));padding:1.5rem;border-left:6px solid #dc5a28;border-radius:1rem}"
    ".lava-box{background:linear-gradient(135deg,rgba(220,90,40,.10),transparent);"
    "border:2px solid rgba(220,90,40,.5);border-radius:12px;padding:16px 20px;margin:22px 0}"
    ".lava-box h4{color:#ff8c50;margin-top:0;text-transform:uppercase;letter-spacing:.09em;"
    "font-size:1.02em;border-bottom:1px solid rgba(255,140,80,.3);padding-bottom:7px}"
    ".shanty{background:rgba(20,14,30,.55);border:1px solid rgba(160,90,220,.45);"
    "border-left:5px solid #a05adc;border-radius:10px;padding:15px 22px;margin:20px 0;"
    "font-style:italic;letter-spacing:.03em;line-height:1.85;color:#d9c2f5}"
    ".shanty b{color:#c9a6ff;font-style:normal;display:block;margin-bottom:6px;"
    "font-size:.78em;letter-spacing:.16em;text-transform:uppercase}"
    ".void-note{background:linear-gradient(135deg,rgba(10,8,18,.85),rgba(40,20,70,.5));"
    "border:1px dashed rgba(180,140,255,.55);border-radius:10px;padding:14px 20px;"
    "margin:20px 0;color:#cbb6ea}"
    ".void-note b{color:#e0c9ff}"
    ".ebott-protocol{background:rgba(109,138,176,.09);border:2px solid #6d8ab0;"
    "border-radius:12px;padding:16px 20px;margin:22px 0;font-family:'JetBrains Mono',monospace}"
    ".ebott-protocol h4{color:#8fb2d8;margin-top:0;font-size:1.05em;letter-spacing:.08em;"
    "text-transform:uppercase;border-bottom:1px solid rgba(143,178,216,.3);padding-bottom:7px}"
    ".ebott-protocol p{font-size:.93em;line-height:1.6;margin:9px 0}"
    ".ledger-row{border-top:1px solid rgba(255,255,255,.1);padding:11px 0}"
    ".ledger-row b{color:#ff9a5c}"
)

# ============================================================== PART IV =====
D4 = r"""
# THE SNOWDIN LINE: AUDIT OF THE 8:40 TO HOTLAND
### Filed by Waluigi, Auditor-General, Who Was Not On The Train And Has Reconstructed It Anyway

Waluigi has been handed a session log that begins with the sentence *"for once, things are quiet"* and Waluigi would like to open this filing by observing that in eleven years of auditing this party, that sentence has never once been true for longer than a page. *WAH! It is not a statement of fact. It is a **stage direction**. The moment somebody in this group says the quiet part out loud, the universe files a counter-motion.*

The Mount Ebott survey resumes on the road out of Snowdin. Flowey is caged. The repaired Legion survey machine is caged with him, in an abandoned police station, behind a locked door, unsupervised — a decision Waluigi spent the entire back half of the Part III filing objecting to and will not relitigate here beyond noting that the objection stands and the door is still shut and nobody has gone back to check.

What follows is the transit leg. On paper it is the least eventful chapter of the entire arc: a walk, a ticket purchase, a train. In practice it produced a felony, a mutiny, a command-structure collapse, and the single most important document review in the history of the Iron Legion's Underground presence — and it did all of that before the locomotive reached its first bend.

## Departure — The Sentence That Should Never Be Spoken

Mihawk exhaled. That is in the log. The Warlord *exhaled*, with his hands in his coat pockets, and said **"For once... things are quiet."** Sans agreed with him. The Agent agreed with both of them and added, cheerfully, that it was a good thing they had left Flowey in that cage, in a locked house, with the machine, together.

*WAH! Read that inventory back slowly. A cage. A locked house. A machine. **Together.** The Agent listed the four components of the problem in the correct order, out loud, in sequence, and then concluded that this was **good**. Waluigi has audited confessions that were less complete. Waluigi has read indictments that were less thorough. The man assembled the entire case against himself, in one breath, on a snowy street, and then went to catch a train.*

Mihawk's counter-assessment was that the cage was secure and the flower had no tools. Sans added that the place was dead and nobody would find it.

*Waluigi wishes to correct both statements on the record, because they are the load-bearing errors of this entire arc and everybody involved will be much happier if they are corrected now rather than in eleven days when the police station door is open.*

*Mihawk's error: **Flowey has never once needed tools.** He repaired that machine the first time with no hands, no equipment, and no access anybody could document. Waluigi established this in the Part III filing and nobody argued with it then. Assessing his containment on the basis of tool availability is like assessing a fire on the basis of whether it owns matches.*

*Sans's error is subtler and worse. "Nobody will find it" is a statement about **visitors**. It is not a statement about the **occupant**. The threat model here was never that a stranger would wander into that police station. The threat model is that the thing already inside it is alone with the evidence. Sans defended the perimeter of a building whose danger is entirely interior. WAH.*

## The Walk — Koffin-K Invents a Career

The group set out for Hotland with Koffin-K marching ahead, Lanky and Bulky trailing him, and Mihawk scanning a horizon that did not require scanning.

The Agent asked whether the trip was direct. Sans's answer established the operational geography: the straight path is blocked by mountains, so the route runs by rail. This is the first confirmation in any Legion record that the Underground maintains a functioning intercity railway, and Waluigi wants that logged as intelligence rather than scenery. *A rail network implies scheduling. Scheduling implies a bureaucracy. A bureaucracy implies **records**, and records are the only thing in this world Waluigi has ever fully trusted. Somewhere under that mountain is a timetable, and a timetable is a map of what the Underground considers worth connecting.*

Koffin-K's response to the existence of public transportation was to complain about it, and then — the instant the Agent floated the idea, offhand, as a joke — to decide he would be the conductor.

*WAH! And Waluigi wants to flag the mechanism here, because it repeats twice more before this session ends. **Koffin-K did not want to be a conductor.** Ninety seconds earlier he did not know the train existed. He wanted a **title**. Somebody handed him a noun with authority attached and he seized it the way a drowning man seizes a rope, and then he spent the entire walk building a fantasy around it — the hat, the whistle, the uniform, the private car with drinks and, quote, "stuff."*

*Waluigi has audited four separate warlords and one entire parliament and he has never seen the pathology laid out this cleanly. This man's ambition has no content. It is a shape looking for a job description. Whatever noun is nearest, he becomes.*

The Agent then asked the single most competent question anybody has asked in the Underground to date: **the tunnels are enclosed, the train produces smoke, and smoke rises — why has the Underground not filled with smoke?**

Sans's answer was that the tunnels are vented, with filtration chimneys carrying the exhaust out before it can accumulate.

*Waluigi wishes to stop the filing here and say something sincere, and then he will go back to being unbearable.*

*That is not a small answer. A vent system that can clear the combustion output of a steam locomotive from a sealed cavern is not something you improvise. It is **civil engineering at civilizational scale** — surveyed, designed, built, and maintained across generations, in a hole, by a people the surface has spent that entire time pretending are a monster problem rather than a nation. The Iron Legion sent a survey team into Mount Ebott to determine whether there was anything down here worth the Empire's attention, and on the third day that team learned the locals solved industrial ventilation underground. WAH!*

*And the Agent found it by asking where the smoke goes. Not by scanning. Not by machine. By noticing that a room full of fire should have filled with smoke and did not. Waluigi has said before that this man's manual is the most valuable object in the party and Waluigi will now extend the claim: **the manual is not what makes him useful. The manual is what taught him to ask.***

## The Station — An Entrance With No Audience

Koffin-K entered the Snowdin station the way he enters everything, fedora tilted, at volume, announcing himself to a room containing one elderly ticket clerk and no one else.

**"I AM KOFFIN-K! FUTURE CONDUCTOR OF THIS TRAIN AND SAVIOR OF SNOWDIN!"**

The clerk went back to her paperwork.

*WAH! WAHAHAHA! Waluigi has read this passage six times and it improves every time. The man declared himself Savior of Snowdin — a title he held, by the archive's own accounting in Part III, for approximately fifteen minutes and largely by accident — to a woman who was mid-invoice. She did not argue. She did not look up. She **filed**. Waluigi has never felt closer to another living person.*

Lanky pointed out, quietly, that nobody was there. Bulky nodded. Their boss kept declaiming at the empty benches.

The Agent and Sans went to the counter and bought tickets. Fifty gold each. When the Agent asked what "G" stood for, the clerk explained: Gold. Gold Pieces.

*Waluigi is going to be brief and technical, because this is the second piece of hard intelligence the transit leg produced and it is worth more than the first.*

*The Underground runs on **gold**. Not scrip, not barter, not a monster-specific tender — gold, priced in discrete pieces, accepted over a counter by a clerk with a lockbox. That is a **convertible** currency. The Agent's instinct was to reach for Legion writ, and he decided against it on the grounds that writ is worth more, and Waluigi wants to praise that instinct and then complicate it. He was right not to spend writ. He was right that writ is worth more. But he has not yet worked out the thing that matters, so Waluigi will work it out for him:*

*If the Underground uses gold, then the Underground and the surface **share a settlement medium**. There is no exchange problem. There is no conversion friction. The economic barrier to trade between the Mushroom economies and this sealed civilization is, and has always been, exactly zero. The only thing separating these two markets is the barrier and eighty-five years of policy. WAH! Every merchant house in three realms would liquidate a bloodline for that sentence and it was obtained, for free, by a soldier who did not know what a G was.*

Sans paid without comment, in coins, from his hoodie — which tells Waluigi that Sans carries surface-compatible currency as a matter of routine, and Waluigi has written that down and drawn a box around it.

## The Tantrum — Twenty Minutes to Departure

Koffin-K approached the counter with his questions rehearsed. When did the train leave. When did his shift begin. Was his uniform ready.

The clerk answered in the order asked. Twenty minutes. **You're not the conductor.**

*WAH! She did not soften it. She did not hedge. She delivered the correction with the flat finality of a woman who has issued that exact sentence to that exact species of man for thirty years and has learned that any decoration on it only extends the conversation. Waluigi would hire her tomorrow.*

Koffin-K's response escalated across four documented stages, and Waluigi is going to itemize them because the escalation pattern is the most useful behavioural intelligence this session produced:

<div class="koffin-rage">
<b>Stage one — appeal to title.</b> "BUT I'M THE SAVIOR OF SNOWDIN! I DESERVE TO BE CONDUCTOR!" He cited a credential. The credential was real, technically, and utterly irrelevant to railway employment.
</div>

<div class="koffin-rage">
<b>Stage two — appeal to reputation.</b> "I AM A LEGENDARY CRIMINAL MASTERMIND!" Note the direction of travel. Having failed with the heroic title, he reached instantly for the villainous one. <i>These are opposite claims. He made both, to the same woman, inside two minutes, and detected no contradiction — because to him they are not moral positions, they are both simply <b>standing</b>.</i>
</div>

<div class="koffin-rage">
<b>Stage three — threat.</b> The clerk warned him that continued disruption would summon security. He took this as a challenge rather than a warning.
</div>

<div class="koffin-rage">
<b>Stage four — assault.</b> He lunged the counter. She ducked. His hands came down where her head had been. Papers went everywhere. He kicked over a chair and began shrieking that he would destroy the station.
</div>

The clerk reached the emergency button. Two security officers arrived at a run.

The Agent's instinct at this point was to ask whether the party should intervene on behalf of a teammate. Mihawk's answer was immediate and total: **"We are not getting involved."** Sans concurred.

*Waluigi is going to defend that ruling, because it is going to look cold in the record and it was correct.*

*The party had a choice between two liabilities. Liability one: their nominal ally is arrested for assault in a foreign jurisdiction. Liability two: **the entire Legion survey team is arrested for assault in a foreign jurisdiction.** Mihawk chose in under a second, and he chose right, and Waluigi wants it noted that the Warlord's stated reason was not tactical — it was that the situation was beneath him. Waluigi does not care about the reasoning. The output was correct and the output is what gets filed.*

The officers wrestled Koffin-K down and produced handcuffs. And then Koffin-K used his special attack.

## The Blast — A Felony With Witnesses

He broke the officers' grip with a twist of unnatural strength, raised one arm, gathered crackling purple energy at his fingertips, screamed **"TASTE MY POWER!"**, and discharged a concentrated blast of dark force directly into a pair of municipal security personnel who were, at that moment, performing a lawful arrest.

The station shook. The ticket counter was destroyed. Both officers went down in the debris, groaning. Koffin-K stood in the wreckage, breathing hard, and demanded to know who the boss was now.

*WAH! Waluigi is obliged to make several findings here and none of them are funny, so he will make them quickly and then return to enjoying himself.*

*Waluigi continues: one. **That was not a villain's flourish. That was a violent felony against uniformed officers, committed in front of a civilian witness, in a jurisdiction where the Legion has no standing, no treaty, and no extradition arrangement.** The Empire's entire legal position in Mount Ebott currently rests on the fiction that the survey team is a neutral scientific mission. Koffin-K has now attached that mission to an assault charge.*

*Two, and this is the one that concerns Waluigi as an intelligence matter rather than a legal one: **where did that power come from?** Part III filed Koffin-K as a failed businessman with a fedora and a comic-book self-image — a delusion with minions. A delusion cannot vaporise a ticket counter. Somewhere between the Snowdin hideout and this platform, that man produced a discharge of dark energy strong enough to flatten two trained officers, and nobody in the party has asked him where he got it. Waluigi is asking. Waluigi has flagged the file. **A clown with a real weapon is not a clown; he is a delivery mechanism, and somebody built him.***

*Three. Note the two minions during the blast. Lanky ducked behind Bulky. **Bulky raised his arms to shield Lanky.** Waluigi wants that in the permanent record, because eleven minutes later everybody in this session will be asking whether those two are loyal, and the answer was already written on the platform in the way one of them moved. Their loyalty was never in question. It was simply never pointed at Koffin-K.*

Then the train whistle sounded, and Koffin-K forgot the entire incident and sprinted for the platform.

*WAH! He committed a felony and then boarded a train, because the train was newer. Waluigi does not think this man is evil. Waluigi thinks his attention span is a public safety hazard with a hat on it.*

## Boarding — The Question That Got No Answer

The Agent, watching the minions hesitate over their unconscious-guard problem before following their boss anyway, laughed and asked whether they were really so loyal.

They flinched. Lanky said "we are" with a hesitation that had not been in his voice before. Bulky said "yeah, totally" too fast.

So the Agent asked again, and sharpened it: **not what you are — who you are. Tell the truth.**

Neither answered. They boarded the train.

*WAH! And Waluigi wants to be precise about what happened in that exchange, because the Agent asked a genuinely excellent question and then misread the silence he got back.*

*"Who are you" is an identity question. Both minions declined it, in front of their boss, on a public platform, at a moment when answering honestly would have been immediately dangerous. **That is not the behaviour of a coward. That is the behaviour of somebody operating under a cover they have not been released from.** Waluigi has held covers. You do not break one because a stranger asked nicely; you break it when the operational reason for holding it expires. Theirs expired about forty minutes later, in a moving train car, and when it did they moved instantly, in coordination, with equipment they had been carrying the whole time.*

Mihawk, watching them go, delivered his assessment: **"They don't act like loyal followers."** Sans agreed something was off. The Agent supplied the hypothesis that would turn out to be correct: **fear or spying.**

Mihawk's reaction to the word "spies" was to tense his hands into fists behind his back.

*Waluigi notes the tell and moves on, but files it: the Warlord's contempt for disloyalty is a genuine blind spot and an exploitable one. He assessed these two by **conduct** — do they behave like followers — rather than by **function** — what are they for. Conduct told him they were weak. Function would have told him they were handlers. WAH.*

## The Mutiny — Chloroform on the 8:40

The doors sealed. Koffin-K took a seat at the front of the car and stretched out like he owned it. Lanky whispered something to Bulky. Bulky nodded.

Then the two of them crossed the carriage behind their boss without making a sound.

*WAH! **Without making a sound.** In a moving train, on a crowded car, behind a man who was actively watching for slights. Waluigi wants everybody who spent this session calling these two bumbling henchmen to sit quietly with that sentence. The archive has been describing them as comic relief since Part III. Comic relief does not move like that.*

They lunged in unison. One hand each over the mouth, a cloth soaked in something pungent pressed to the face. Koffin-K's eyes flew open. He thrashed for half a second. His movements went sluggish.

*The party has now recovered enough of the picture that Waluigi can state the finding plainly: **Lanky and Bulky boarded that train carrying a prepared chemical restraint.** You do not have chloroform in your pocket by accident. They had it in Snowdin. They had it during the tantrum. They had it while their boss was flattening two officers, and they did not use it then — they waited until he was seated, contained, in a location he could not flee, with the doors locked.*

*That is not panic. That is **a plan with a trigger condition**, and the trigger was not the assault. Waluigi has been trying for a week to work out what the actual trigger was and his current best answer is the one nobody in the car considered: they moved when the train sealed, because a sealed train is the only place in the Underground where Koffin-K cannot run and cannot be reinforced. They were not reacting to his tantrum. **They were waiting for the doors.***

## The Song — Count Koffin-K Does Not Go Quietly

He broke the cloth's effect before it took. The log records thunder, and a song starting, and the villain rising with the specific fury of a man who has just discovered that his own staff have a contingency plan for him.

**"YOU DARE BETRAY ME?!"**

What followed was a full theatrical number, delivered by the Agent and Koffin-K in alternating verses over a train car full of screaming civilians, and Waluigi has decided to reproduce the key lines because a filing that omitted them would be dishonest about what this session actually was.

> *"Here's a little lesson in villain double-crossing — they're fun when they're not on me!"*
> *"To even stand to my tyranny is the highest form of tyranny!"*
> *"Say what you mean, mean what you say, say there's no one meaner than Count Koffin-K!"*
> *"You served me well, you could have excelled — but now you will be slung up like the cloth I left you to dry."*
> *"After being treated as your pawn, the question at my feet is why go on."*

*WAH! Waluigi is required by the terms of an honest audit to report that the villain's material was **better than it had any right to be**, and that the Agent was matching him line for line, and that both of them were doing this while a locomotive full of terrified commuters pressed themselves into the upholstery. Waluigi has attended three coronations with worse staging.*

*And then Waluigi read it a fourth time and stopped enjoying himself, because of one line.*

*"After being treated as your pawn, the question at my feet is why go on."*

***That is not Koffin-K's line. That is the minions' line, sung by somebody else.*** *In the middle of a villain's rage number, the Agent handed the betrayers their motive — out loud, in verse, in front of the man they had just tried to sedate. Waluigi does not believe that was calculated. Waluigi believes the Agent got carried away by the metre. But it was, functionally, the most effective thing anybody said in that carriage, and eleven minutes later Lanky changed sides on a single word of command from the man who sang it. WAH!*

Koffin-K's rage escalated on schedule. He seized Lanky by the collar, dropped his voice to a whisper — **"You had everything. Loyalty. Power. My trust."** — and then hurled him bodily backwards into a row of seats.

Bulky rushed him. The Agent tackled Bulky.

*WAH! The Agent tackled **the wrong man**. Waluigi has run this three times and it is unambiguous: the minion charging was the one trying to stop the assault, and the Agent took him down. Waluigi is not mocking. In a shaking carriage with two people fighting and no time, the Agent identified a body moving toward violence and interdicted it, which is what the manual says to do. **The manual does not say how to tell the difference between an attacker and an intervener, because nobody has ever written that page.** Waluigi intends to write it.*

Pinned on the floor, Bulky finally answered the question from the platform:

**"I-I didn't want to betray him! He was going crazy! We were scared of what he'd do next! We had to stop him before someone got hurt worse!"**

Koffin-K came for both of them, fist crackling. The Agent got a knife up. And Koffin-K, told that his own minion had just betrayed him, said the sentence that Waluigi considers the single most revealing thing in this entire filing:

**"I don't CARE about betrayal! You touched what's MINE!"**

*Waluigi wants that framed. **The man was not angry about the mutiny.** He was angry about the property claim. His own staff drugged him and his objection was that somebody else laid hands on his staff first. That is not a leader defending his people and it is not even a tyrant defending his authority — it is a **collector** objecting to interference with the collection. Every loyalty question the party asked this session was aimed at the wrong end of the relationship. Nobody was ever loyal to Koffin-K. Koffin-K was loyal to **owning them**, which is a different thing that produces none of the same obligations. WAH.*

## The Intervention — Mihawk Rules From the Aisle

**"Enough."**

The Warlord crossed the carriage in one motion and the car went silent. What he said next is the closest thing to a doctrine statement Mihawk has produced in any record the archive holds:

> **"You are pathetic. A tyrant who cannot even control his own followers without violence? If you cannot earn loyalty without resorting to brutality, then you don't deserve it. A good captain commands respect, not fear. Your empire is built on nothing but fear and violence. No better than a common tyrant."**

Koffin-K's counter was to gesture at a carriage full of hostages and call them his loyal followers.

*WAH! He pointed at people who were hiding from him and called it a following. Waluigi has audited eleven governments and he has heard that exact argument from four of them.*

*But Waluigi has a note on Mihawk here, and it is not a flattering one, and honesty requires it. **The Warlord's rule is not universal — it is a rule about captains.** "A good captain commands respect, not fear." Mihawk assessed Koffin-K by the standards of a ship's command and found him wanting, which is correct as far as it goes. What Mihawk did not do — has still not done — is ask whether Koffin-K is a captain at all. Waluigi's position, filed in Part III and unchanged, is that this man is not a commander of anything. He is a **franchise**, operating a villain persona he assembled out of comic books after a business failure. You cannot audit a franchise with a naval standard. WAH.*

## The Manual — The Actual Event

The Agent stood while Koffin-K was distracted, drew the one weapon he has consistently used across this entire arc, and hit him in the temple with it.

**The Iron Legion Protocols manual.**

**"We're a team here, did you forget? You said the book is the leader earlier, so it remains that way."**

*WAH! WAHAHAHA! Waluigi has been the loudest voice in this archive insisting that the Legion protocols manual is the single most underrated object in the Underground and he would like everybody to note that it has now been formally reclassified as a **blunt instrument** and performed excellently in that role. The villain's own words from Part III — that the book was the leader — were used to justify the book leading, physically, into the side of his head. That is not a joke. That is a **jurisdictional argument** delivered at speed.*

Koffin-K, holding his face, could only ask: **"Did you just HIT me with... a manual?!"**

Then the Agent called **"Lanky, now!"** — and Lanky, dazed and terrified, moved without hesitating. Bulky followed. The three of them took Koffin-K down and Lanky locked him in a bear hug that lifted him off his feet.

*Waluigi wants the mechanism recorded, because it is the actual turning point of the session and it took about one second.*

*Waluigi continues: those two minions had spent this entire journey unable to answer a direct question about who they were. They had attempted a covert sedation and failed. They had been thrown into furniture and pinned to the floor. And then somebody used one of their names as a **command** — not "help" or "stop him," just a name and a moment — and both of them moved instantly and in coordination.*

***People do not respond to their name like that unless somebody has trained them to.*** *Waluigi's assessment, filed and standing: Lanky and Bulky are not henchmen who got cold feet. They are placed personnel, and on that train they took an order from a man who was not their principal and executed it cleanly, and they did it because the order was well-formed. Waluigi would like to know who taught them that and Waluigi does not currently have a candidate. **The file is open.***

## The Reading — Protocol as Psychological Warfare

With the villain pinned and screaming, the Agent sat down beside Sans, opened the manual, and began reading aloud.

<div class="ebott-protocol">
<h4>Protocol 7 — De-escalation of High-Rank Targets</h4>
<p>"Upon capture or temporary restraint of a high-profile villain, secure them with reinforced bindings before transport. Do not engage verbally beyond necessary commands to prevent psychological escalation."</p>
</div>

<div class="ebott-protocol">
<h4>Protocol 12 — Neutralization of Resistant High-Rank Targets</h4>
<p>"If subject continues aggressive behavior despite restraint, administer approved sedative via intramuscular injection. Dosage determined by weight and aggression level."</p>
</div>

Koffin-K's reaction to hearing himself described in clinical procedural language was total. **"WHAT KIND OF MONSTERS ARE YOU PEOPLE?!"** He thrashed hardest at the mention of sedation.

*WAH! And here is where Waluigi must file a formal irony, because the situation has produced one whether anybody intended it or not.*

***The Agent read Protocol 7 out loud while violating it.*** *Protocol 7 says: do not engage verbally beyond necessary commands, to prevent psychological escalation. The Agent engaged verbally — extensively, at volume, for several minutes — and the engagement consisted of reading Protocol 7. He escalated the subject psychologically **by reciting the rule against escalating the subject psychologically.** Waluigi has read a great deal of procedural literature and he has never encountered a cleaner self-swallowing document. WAH!*

*And Waluigi will now admit the second thing, which is that **it worked.** Koffin-K had resisted physical restraint by three people. He was subdued by **paperwork** — specifically, by hearing himself reclassified from a person with grievances into a package with a weight class. That is the most effective psychological operation conducted by the Legion in the Underground to date and it was performed accidentally by a man who was, by his own account, just reading.*

## The Page Nobody Recorded

The Agent then offered the manual to Sans and invited him to pick a page at random. Sans put a finger down. The Agent began to read — and the log records only that **it was not about capturing people. It was something totally different. Something very, very interesting.**

The Agent stopped mid-sentence and moved to close the book.

A hand caught it. Mihawk took the manual and began to read.

The Warlord read in silence. Koffin-K stopped struggling. Sans stopped talking. A train car that had spent twenty minutes screaming went completely quiet while a man in a coat turned pages.

*WAH! Waluigi has now filed three requests for the contents of that page and received nothing, and Waluigi wants his frustration entered into the permanent record in the strongest available language.*

***The most important document in this arc is a page whose contents nobody wrote down.*** *Waluigi knows what it did. It stopped the Agent mid-recital. It made a Warlord take a book out of a soldier's hands without asking. It silenced a carriage. Waluigi does not know what it said, and Waluigi has been reduced to the position he despises above all others: **inferring a document from its effects.***

*Waluigi continues: here is what the effects support. It was not procedural — the Agent had been reading procedure happily for five minutes. It was not embarrassing to the Agent, or he would have closed the book quietly rather than announcing it was interesting first. And it held the attention of Dracule Mihawk, a man who has expressed sincere interest in exactly two subjects in the entire archive, both of which are swords.*

*Waluigi's working hypothesis, filed as hypothesis and not as finding: **the manual contains material that is not protocol.** Something the Legion embedded in a standard-issue field document distributed to every soldier — and distributed, Waluigi notes, so unevenly that only four of fifteen embassy personnel actually carry one. Waluigi previously filed that distribution gap as incompetence. Waluigi is now revising it to **open question**. WAH.*

## The Interrogation — "Who Wrote It?"

Mihawk closed the book and delivered the highest praise in his recorded vocabulary: **"This document is well-organized. Detailed. Useful."**

Then: **"Who wrote it?"**

The Agent did not know.

*WAH! And Waluigi felt the Warlord's frustration through the transcript, because it is Waluigi's own frustration, and it is the correct frustration.*

*Waluigi continues: the Agent relies on this book absolutely. He has used it as a tactical doctrine, a legal authority, a decision procedure, a source of comfort during a nap, and — on this specific train — a **club**. He described it as the only thing he had to fight with. He cannot conceive of operating without it.*

*Waluigi continues: he does not know who wrote it. He has never asked. It was issued.*

*Waluigi wants to be careful here because it would be easy and cheap to mock a soldier for trusting his own service, and Waluigi is not going to do that. The relevant finding is structural, and it is this: **an unsigned document that a man obeys without question is not a manual. It is an author with no name attached, giving orders at a distance, indefinitely.** The Agent thinks he is following procedure. He is following **somebody**. He does not know who. WAAAH!*

Mihawk pressed on distribution and got the number: fifteen embassy personnel, four confirmed copies.

**"Only four out of fifteen soldiers have this manual? That's unacceptable. How does anything get done properly if only some follow protocols?"**

*Waluigi filed that as an efficiency complaint at the time. Waluigi has since reconsidered and would like to substitute a darker reading.*

*A document distributed to four of fifteen is not a **failed** universal issue. It is a **successful selective** one. Waluigi does not yet know which of those two things happened in that embassy. But he notes that the four confirmed holders include the one soldier who was subsequently assigned to a deniable long-range survey of a sealed civilization, and Waluigi has stopped believing in coincidences of that shape.*

## Rapprochement — Two Men Who Believe in Structure

What followed was the most genuine exchange in the session, and Waluigi will report it without undercutting it.

Mihawk observed that the Agent relied on the manual heavily. The Agent agreed. And Mihawk said:

> **"That's smart. A soldier without structure is just chaos with weapons."**

The Agent noted, accurately, that the Warlord's attitude had changed. Mihawk did not deny it:

> **"I may have misjudged your manual. It is thorough, practical, and clearly well thought-out. I respect that. And you, by extension. You understand the value of structure. Good soldiers rely on a strong foundation — rules, protocols, standards. It keeps order in chaos."**

*WAH! Waluigi is going to say the quiet part, since nobody else will. **Dracule Mihawk did not respect that soldier this morning.** He tolerated him. What changed was not the Agent's competence, which has been constant — it was that Mihawk read the man's paperwork and recognised a fellow believer. The world's greatest swordsman was won over by **a well-structured document**, and Waluigi wishes to state, without any irony whatsoever, that this is the most relatable thing the Warlord has ever done and Waluigi feels a kinship he intends to deny publicly.*

Asked to assess Koffin-K by the same standard, Mihawk was brief: **"That egotistical fool? Hardly. Koffin-K is a self-centered idiot who values his own glory above all else. That isn't discipline — it's insanity."**

Asked about Sans, he was more careful: **"Sans is different. Not a soldier in any traditional sense. But disciplined? Yes."** And on the question of the skeleton's combat ability, the Warlord admitted he had never fought him, and then said the thing that Waluigi has underlined twice:

> **"But from what I've observed... he's fast. Unpredictable."**

*Waluigi wants everybody to understand what that sentence costs. Dracule Mihawk does not qualify his assessments. He has looked at emperors and been bored. He looked at a short skeleton in a hoodie who has spent this entire arc napping and telling jokes, and he declined to estimate him. **The Warlord is being careful about Sans.** Nobody else in that carriage noticed. Waluigi noticed. WAH.*

## Transit — Two Hours of Nothing, Which Is Also Intelligence

The Agent slept. Mihawk kept watch. Sans watched the scenery.

Waking, the Agent asked how long it had been. Two hours. He then advised both of them to rest as well, on the grounds that they would not get another window like this for some time.

*Waluigi notes the Agent giving rest instructions to a Warlord and a skeleton older than the treaty, and both of them complying. Command in this party is not held by rank. It is held by **whoever last said something sensible**, and on that train it kept being him.*

He washed his face. He surveyed the carriage. And then he made the observation that closes this filing:

**"No humans...."**

*WAH! And there it is. Waluigi wants this given the weight it deserves, because it was delivered as an aside and it is the single most consequential line the transit leg produced.*

*Waluigi continues: the Agent conducted a passenger census on a functioning intercity train — an elderly woman knitting, a businessman with a laptop, teenagers sharing snacks, a family with a sleeping child — and found **not one human being**. Every ordinary domestic scene, reproduced exactly, with nobody of his own kind in it.*

*Waluigi continues: the Iron Legion's operating assumption about Mount Ebott, inherited from eighty-five years of surface policy, is that the Underground is a containment problem. What that carriage documents is a **society**: commuters, employment, childcare, a ticket bureaucracy, a rail schedule, an industrial ventilation grid, and a convertible currency — sealed away, complete, and demographically closed.*

*Waluigi continues: the Agent did not file that as intelligence. He noticed it, said four words, and went back on guard.*

*Waluigi is filing it. Waluigi is filing it in the strongest terms available to him, and he would like the Board to understand that everything else in this document — the tantrum, the felony, the mutiny, the singing, the manual — is **procedural detail**, and this is the actual finding of the Snowdin Line:*

***There is a nation under that mountain. It has a timetable.*** *WAAAAAAAH!*

## Arrival — The Company Dissolves

The train reached Hotland. The Agent asked the minions whether they were coming or staying.

**"We're staying,"** said Bulky. Lanky nodded.

Koffin-K's face darkened. He straightened his suit, glared at everyone, and stomped off into another part of the station alone.

*WAH! And Waluigi wants the last word on this man to be an accurate one rather than a cruel one, because the accurate one is worse.*

*Waluigi continues: count Koffin-K arrived at that station with a title, a following, and a plan to command a train. He left it with none of the three, and the thing that took them was not Mihawk's contempt or the Agent's manual — **it was that his own two people were offered a choice and did not need to think about it.** Bulky answered in three words. Lanky just nodded.*

Asked whether they would see him again, Mihawk was dismissive: **"That fool? Probably. He's the type to hold grudges and come back for petty revenge."**

*Waluigi concurs and adds one correction to the Warlord's assessment, which Waluigi believes will matter later and does not expect to be listened to now.*

*Mihawk classified Koffin-K as a nuisance. Waluigi classifies him as a **nuisance with an unexplained weapon and a fresh humiliation**, which is a different and considerably more expensive category. Nobody has established where the dark energy came from. Nobody has established who trained his minions. And that man has now been publicly stripped of a title, an audience, and a staff, in that order, in one afternoon.*

*Waluigi has audited enough grudges to know the arithmetic. **A humiliated man with a power he cannot account for is not a loose end. He is a scheduled appointment.** WAH.*

Three of them walked out toward the gate. The file closes with the Agent asking Sans how they were getting out of the Underground, and Sans answering that the Royal Guard would need to be avoided — which is the first line of the next filing and not this one.

*Waluigi is going back to his tennis racket. Documentation is exhausting when the subjects insist on singing through the evidence.*

*WAAAAAAAH!*
"""

# =============================================================== PART V =====
D5 = r"""
# THE LAVA LINE: AUDIT OF THE CHIPS AHOY ENCOUNTER
### Filed by Waluigi, Auditor-General, Who Would Like It Known That He Warned Everyone About The Door

Waluigi has spent three days on this filing and he is going to open it by stating the conclusion, because the conclusion is the only part anybody will remember and Waluigi would rather they remember it correctly.

***The survey team did not escape the Underground. They were moved within it, by a party unknown, and they have not yet worked out that those are different events.***

Everything else in this document is the road to that sentence.

## Egress Planning — Sans Rules Out The Front Door

The party cleared the Hotland station gate three strong: the Agent, Dracule Mihawk, and Sans. Koffin-K had removed himself. Lanky and Bulky had stayed behind, a decision Waluigi filed in the Snowdin Line audit and will not revisit except to note that neither of them has been seen since and Waluigi does not consider that closed.

The Agent asked how they were getting out of the Underground. Sans's answer established the operational problem:

> **"That'll take a bit more effort. First we gotta find a spot that isn't crawling with Royal Guards. We can't risk a straight shot to King Asgore's castle and getting captured along the way. That's too much attention."**

The Agent asked whether they could simply fight. Sans preferred stealth. Mihawk, consulted, gave the assessment that decided it:

> **"Fighting is an option… but a messy one. Royal Guards are trained soldiers. They fight in formations and coordinate attacks efficiently."**

*WAH! Waluigi wants that on its own line and in bold, because it is the third piece of hard intelligence this arc has produced and it came out of the Warlord's mouth as a throwaway tactical note.*

***The Underground fields trained infantry that fights in coordinated formation.*** *Not guards. Not watchmen. **Formations** — which means drill, which means doctrine, which means a standing military tradition maintained across generations by a population that has had no external enemy to fight for eighty-five years.*

*Waluigi wishes to spell out the implication for whichever Legion clerk eventually reads this. The Empire's Mount Ebott file classifies the monster population as a contained anomaly. Two documents into this arc, that file is dead. The Snowdin Line established a currency, a rail network, an industrial ventilation grid and a civilian bureaucracy. This session opens by establishing **an army**. Dracule Mihawk — who has personally assessed the militaries of four realms and been unimpressed by most of them — declined to fight the Royal Guard in open ground and gave professional reasons.*

*That is not caution. **That is a peer assessment**, and it is the single most alarming line in the Legion's entire Underground casefile. WAH.*

They chose stealth. Sans led them off the main concourse into the service corridors.

## The Shortcut — A Wall That Was Not A Wall

Deep in the maintenance tunnels, Sans stopped, pressed a hand against what appeared to be solid brickwork, and pushed. The wall slid open silently onto a passage barely wide enough for Mihawk to fit through.

**"Yeah. Been using this shortcut for years."**

*Waluigi has a note and it is not a small one. **Sans possesses a private route through the Hotland infrastructure that he has maintained for years and that does not appear on any layout the party has seen.** He operated it without hesitation, in the dark, from memory, in front of two foreign agents.*

*The archive has spent three sessions filing this skeleton as a laconic local guide who naps a great deal. Waluigi would like to formally propose an alternative classification: **a man with unlogged access to the physical substructure of a sealed nation, who volunteered to escort an imperial survey team through it.** Waluigi does not allege bad faith. Waluigi alleges that nobody has asked, and that the failure to ask is now three sessions old. WAH.*

## The Door That Should Not Have Been There

Partway down the passage, they came upon a single wooden door.

Sans stopped. His grin — the one constant of this entire arc — was gone.

> **"That's… not supposed to be here."**

The wood was old and weathered. Sans, who had walked this route for years, had never seen it.

The Agent's response was to consult the manual, and Waluigi wants to state before quoting it that this is the moment the Iron Legion Protocols justified their entire existence:

<div class="ebott-protocol">
<h4>Protocol 47 — Unidentified Doors</h4>
<p>"When encountering a door that should not logically exist in the current environment, treat it with extreme caution. It may lead to unknown areas or be booby-trapped."</p>
<p>"Approach slowly and listen for sounds from the other side before opening. Do not force entry unless absolutely necessary — doors like these often serve as warnings about danger ahead."</p>
</div>

*WAH! Sans's reaction was to ask, with genuine amusement, whether the manual really had a whole section on doors that should not be there.*

***It does.*** *Waluigi wants that fact to land properly on anybody who has been treating this book as bureaucratic padding. Somewhere in the Iron Legion's institutional history, a door appeared where no door belonged, and it happened often enough, and the outcome was bad enough, that the incident was written up, generalised, numbered, and issued to the rank and file as **Protocol 47**.*

*You do not get a protocol from a hypothetical. **You get a protocol from a body.** WAH.*

The Agent followed the procedure exactly. He did not force entry. He put his ear to the wood.

And he heard breathing.

## "Cows Go" — The Interrogation That Wasn't

The Agent knocked and said **"knock knock."**

Slow, deliberate footsteps approached from the other side. A low voice: **"Who is it?"**

The Agent answered: **"Cows go."**

A pause. **"Cows go... what?"**

**"Cows go moo, not what."**

Silence. Then, after several seconds, from a voice now audibly bewildered: **"…What?"**

Whoever was behind the door declined to open it. The party moved on. Sans called it weird. Mihawk called it pointless. The Agent admitted he had thought it would be funnier.

*Waluigi is going to defend this exchange, and he is aware of how that is going to look.*

*Waluigi continues: sans and Mihawk both filed it as a waste of time. **It was the most information-dense ninety seconds of the session.** Consider what it established, none of which the party has entered into their own notes:*

*Waluigi continues: the entity behind that door is **corporeal** — it breathes, audibly, at rest. It is **cautious**: footsteps described as deliberate and measured, not rushed. It is **verbal**, in the party's own language, unprompted. It **initiates screening** — "who is it" is a challenge, which means the door has been knocked on before and the occupant has a procedure. And critically, it **engaged with the joke**: "cows go... what?" is a participation. That is not a guard. A guard does not play along. **That is somebody who has been alone long enough to take the bait.***

*And then it heard the punchline and stopped talking. Waluigi wants that noted too, because it is the only part that worries him: it did not laugh, and it did not threaten. **It withdrew.** WAH.*

*Sans has walked that corridor for years and the door was not there. The Agent knocked on it, and something on the other side had already prepared a challenge phrase. Waluigi's assessment is filed and unambiguous: **that door was not discovered. It was placed, and it was placed on a route that Sans uses.** Waluigi does not know by whom. Waluigi has a candidate, and the candidate appears eleven pages later on a burning ship, and Waluigi is getting ahead of himself.*

## The Harbour — The Agent Invents Lava Piracy

Sans confirmed the region: Hotland, lava, hot springs.

The Agent then asked whether there were lava boats — and, when Sans admitted he had never heard of anyone riding one, proposed hitching a ride upriver to reach Asgore.

Sans considered it and conceded it was not a bad idea. They followed the heat gradient down into a rocky cavern harbour: bubbling rivers of molten rock, several small vessels with heat-reinforced hulls, workers tending them at a distance.

One boat sat unattended.

The Agent, to his credit, consulted Mihawk before taking it. The Warlord's ruling:

> **"Stealing is… not ideal. But if we take one without causing a scene or alerting guards… I suppose that would suffice."**

*WAH! Waluigi wishes to formally record that Dracule Mihawk — a man who spent the Snowdin Line lecturing a villain about honour, respect, and what a good captain deserves — authorised a maritime theft roughly four hours later on the grounds that it would probably be quiet. Waluigi is not accusing him of hypocrisy. Waluigi is observing that **the Warlord's ethics are a code about conduct between people, and they contain no chapter on property**, which is a gap Waluigi intends to exploit conversationally at the earliest opportunity.*

The Agent untied the rope himself and pushed off. The log records his nerves plainly — watching the shore recede, murmuring that if the boat tilted and took on lava this would prove to have been a bad idea.

Sans's reassurance was that the boats are designed for it, delivered with an edge in his voice that suggests he was not certain.

## Contact — "CHIPS AHOY"

They were well out into the molten harbour when a shape resolved ahead.

A man. All white. An eyepatch. An enormous smile. A face the log describes as deformed. He hailed them across the lava from the deck of a larger vessel crewed by grey and white figures.

**"CHIPS AHOY!"**

*Waluigi is going to slow down, because this is the moment the entire Mount Ebott arc changes category and Waluigi does not want anybody skimming it.*

*Waluigi continues: sans's entire body went rigid. His eyelights shrank to pinpricks. **His grin vanished** — the first time in the recorded history of this archive that it has done so. He did not speak. He did not move.*

*Waluigi has spent three sessions establishing that this skeleton is unflappable to the point of narrative inconvenience. He watched a villain vaporise a ticket counter and made a joke. He was assessed by the world's greatest swordsman as fast and unpredictable and responded by taking a nap.*

***He saw the man on that ship and he stopped working.***

*And Mihawk — who did not know the figure, had no context, and was reading the room rather than the threat — **put his hand on Yoru.** The Warlord did not react to Gaster. He reacted to **Sans reacting to Gaster**, which is the most damning available assessment of what that skeleton's face was doing. WAH.*

<div class="void-note">
<b>Waluigi's identification, filed with confidence:</b> The archive already holds a record for <b>Wing Gaster</b> — "The Missing Wing" — a scientist of the Underground Science Remnant who studied <i>darkness and the architecture between worlds</i> before vanishing from ordinary history. The family registry notes that Sans knows more than he shares, and that Grandpa Semi keeps a sealed folder marked with a wing-shaped sigil.
<br><br>
Waluigi's finding: <b>the figure on that ship is that man.</b> The party did not encounter a random hazard on the lava. They encountered the single most significant unresolved entry in the Snowdin household registry, and the only person present who could have told them that went silent for the duration.
</div>

## The Shanty — A Threat Delivered In Four-Four Time

The crew began to sing. Waluigi is reproducing the verses in full, because he has now read them nine times and he is no longer willing to treat them as scenery.

<div class="shanty">
<b>First verse</b>
Hoist the roaring anchor, we be sailin' to Abyss<br>
On me soul, ye hearties, in for bounties full o' bliss<br>
So grab ye maties and yer lassies, we've a shanty we should sing<br>
Make sail for the land that's ought to be a tad interestin'!
</div>

<div class="shanty">
<b>Second verse</b>
Speedin' through the darkness in the bubblin' depths below<br>
Our vessel bears the bravest heart, its favourite food is cold!<br>
The cook is in the crow's nest with the cat o' pointed tail<br>
And though we be no salesmen we be hoistin' up our sails!
</div>

<div class="shanty">
<b>The chorus — and the confession</b>
YO HO HO! A goner ye shall be!<br>
How long we wait, our founts our bait,<br>
My DELTARUNE's at sea
</div>

At that line Gaster winked and snapped his fingers, and darkness began forming out of the ground — a **triangle**, spreading, flooding upward until it swallowed the light above the party's boat.

<div class="shanty">
<b>Third verse</b>
They plunder my crystals! The shadowy weight<br>
They reaching for freedom, end up shark bait<br>
All hands on deck! Me galleon, sentry<br>
We sailin' the winds of me seventeenth entry
</div>

<div class="shanty">
<b>Fourth verse</b>
Me crew run on values, the rest for the rafters<br>
We sailing seas of all seven of me chapters<br>
If ye be here lookin' for Davy Jones' locker<br>
Only booty you'll find is the STAR WALKER!
</div>

*WAH! Everybody in that boat heard a pirate song. Waluigi heard **a man reading out his own inventory** and he is going to itemise it, line by line, because not one person present wrote any of this down.*

*Waluigi continues: "**A goner ye shall be**" — the Underground's own term for the erased. Not a threat. A **classification**.*

*Waluigi continues: "**My Deltarune's at sea**" — possessive. He is not describing a place he visits. He is describing a holding.*

*Waluigi continues: "**They plunder my crystals**" — a grievance, in the present tense, against a party unnamed. Somebody is taking something from him **right now**, and he sang it at strangers on a stolen boat rather than at whoever is doing it.*

*"**The winds of me seventeenth entry**" and "**all seven of me chapters**" — Waluigi has stared at these two for a long time. They are not nautical. They are **archival**. Entries and chapters are units of a **document**. That man measures his own territory in filing terms, which is either the most sinister thing in this session or a coincidence, and Waluigi has never once been rewarded for assuming coincidence.*

*"**Only booty you'll find is the Star Walker**" — a proper noun, capitalised in delivery, that appears nowhere else in the archive. Waluigi has opened a file. It is empty. He hates that.*

*Waluigi continues: and then, in the middle of the battle, the second verse of the second shanty:*

> *"Come join our vessel instead, we call it the Friendship now — raise a glass to freedom as the light is running low — dish out Excalibur and **Papyrus** turns to dough."*

***That is the line that ended the fight.*** *Waluigi will come to it.*

## The Anchor — A Weapon Made of Absence

The shanty returned to the first verse and a **dark anchor** was hoisted from Gaster's deck. The lava beneath it churned and rose into a wave that came at the party's stolen boat with enough force to nearly capsize it.

Sans shouted the only warning he managed that entire encounter — **"BRACE YOURSELVES!"** — and the party held on while molten rock came over the rail in splashes.

Gaster's own vessel was unaffected. The anchor held the wave in place.

*Waluigi's technical note, filed for the Legion's magical-interference desk: **that anchor does not move the ship. It moves the medium.** It generated a directional wave in molten rock and then **held it**, statically, against gravity, while its own hull sat unmoved. That is not propulsion and it is not an attack — it is **environmental authorship**, and it is the same category of capability as the triangle that swallowed the sky. The man does not fight the terrain. He edits it. WAH.*

## The Glitch — Sans Is Not Entirely Here

Mid-wave, the Agent reached for Sans to steady him.

**His hand passed through.**

Sans's eyelights flickered in alarm. Gaster's grin widened impossibly across the lava. The triangle pulsed like a heartbeat.

Mihawk — who had said nothing for the entire encounter — spoke one word: **"What?"**

*WAH! WAH! Waluigi needs everybody to stop and look at this, because the party did not. They logged it, they were alarmed for four seconds, and then they charged a ship.*

***A member of the party became non-corporeal in the presence of Wing Gaster and nobody has followed up.***

*Waluigi's readings, in descending order of how much he likes them:*

*One — proximity effect. Gaster's void-triangle destabilises matter in its radius and Sans was simply the one who got touched. **Waluigi rejects this**: the Agent and Mihawk were in the same radius and remained solid.*

*Waluigi continues: two — targeted. Gaster did it to Sans deliberately, as a demonstration, and the grin timing supports it.*

*Three, and Waluigi's actual position: **it was not done to Sans at all.** The archive's own Gaster entry describes a man who "vanished from ordinary history" — not who died. Waluigi's finding is that Gaster's presence does not attack reality; **it reveals a pre-existing instability**, and the instability it revealed was Sans's. The skeleton did not become unstable on that boat. **He has been unstable the entire time, and Gaster's proximity made it visible.***

*The log's own phrasing is "like reality itself is rejecting his presence here." Waluigi did not write that line and Waluigi cannot improve on it. WAH.*

## The Boarding — Twelve Against Three

The Agent turned the boat toward Gaster's larger vessel and charged. A second white-and-black figure emerged — the source of the "Chips Ahoy" hail — announcing they were setting course for **the CORE**.

The Agent's counter-declaration, sung rather than spoken:

> *"I've come to make my entrance, so you don't forget, that you'll be sleeping with the fishes down within the depth."*

Gaster's answer supplied his own history:

> **"Since the CORE I was left stranded, but I have accrued a cryptid gang, a motley band — so come and meet the crew."**

*Waluigi has the timeline now and he wants it in the file. **"Since the CORE I was left stranded."** That is a confession of origin: whatever happened to Wing Gaster happened at the CORE, it stranded him, and it is the reason he is not in ordinary history. He then assembled a crew of what he calls cryptids — the grey-and-white figures — and he has been out here since. Sans has known this the whole time. Sans said nothing, before or after. WAH.*

The vessels collided. Gaster's crew came across with swords, staffs, guns and dark magic. Sans engaged first, blue magic flaring, and put an attacker over the rail. Mihawk drew Yoru fully and began cutting down boarders with what the log describes as ruthless precision.

The Agent, meanwhile, opened his manual and waited.

## Protocol One — The Courtesy Doctrine

> **"Protocol one: be courteous and allow your opponent the first."**

He read it aloud, standing on a burning deck, while two of the deadliest entities in the region fought around him.

Several of Gaster's crew stopped, visibly unsure how to attack a man who was not attacking.

A crossbow bolt was loosed at him. It missed entirely.

The Agent's response:

> *"Aww, you missed! That's not fair! You could've had this great attack and — ZOOM! Just goes right by without even leaving a mark. Tell ya what, I'll give you a chance to try again! Take your best shot!"*

The archer stared at their own weapon. Sans, mid-fight, actually snorted. Mihawk registered something close to approval.

The Agent then clarified, apparently sincerely, that he had not meant it as a taunt — he just felt bad.

*WAH! WAHAHAHA! Waluigi has audited a great many battlefield psychological operations and he has never encountered one conducted **by accident, out of pity**, against an enemy archer, by a man reading a rulebook.*

*And Waluigi wants to be precise about why it worked, because it did work and the mechanism is worth doctrine. **A combatant knows how to process hostility. A combatant does not know how to process encouragement.** That archer's entire training assumed an opponent who wanted him dead. He got one who wanted him to feel better about his aim, and it dismantled him more thoroughly than Mihawk's sword dismantled the man next to him.*

*Waluigi continues: the archer missed twice more. On the third the Agent offered him more time, apologised for possibly breaking protocol, and admitted he was on thin ice as it was.*

*Waluigi continues: one of the crewmates finally hissed at the archer: **"Quiet, idiot. Stop trying to think."***

***That is a field commander recognising a psychological operation in progress and issuing a countermeasure.*** *Gaster's crew had to be ordered to stop listening. WAH!*

## "Papyrus" — The Word That Stopped The Battle

Then the crew's second shanty reached the line about Excalibur, and **Papyrus**.

Sans froze completely.

His eyelights vanished — not dimmed, **gone**, leaving two empty sockets. The battle noise went to static around him. He did not move for a long stretch of the engagement, and the log is explicit: it was like reality had paused him.

Mihawk stopped fighting.

*Waluigi is going to be careful here, and brief, because this is the one part of the session that is not his to be clever about.*

*Waluigi continues: the archive holds a record for **Papyrus**. Sans has not mentioned him once across four sessions of this arc — not in Snowdin, which is where they lived, not to Mihawk, not to the Agent, not while walking past his own town.*

*Waluigi continues: gaster's crew knew the name. They put it in a **song**. They sang it as a taunt in the middle of a boarding action, and it took the most dangerous unknown quantity on that deck out of the fight without a blade touching him.*

*Waluigi's finding: **that was not a lyric. That was aimed ordnance, and Gaster knew exactly what it would do.** You do not deploy a name like that speculatively. He had it ready, he had it scanned to metre, and he used it at the moment Sans became a threat. WAH.*

What brought Sans back is, in Waluigi's assessment, the most important thing the Agent has ever done and he did not know he was doing it.

He kept talking to the archer.

He kept being ridiculous, out loud, in a steady and unthreatening voice, about crossbow accuracy and protocol and taking your time. The log tracks the recovery precisely: first the fingers twitched. Then he was *listening*. Then he blinked, and the eyelights came back, dim and then bright, and he exhaled like he had been holding his breath the whole time.

*Waluigi is not going to make a joke about this one.*

***A man was pulled out of whatever that was by the sound of somebody nearby being harmlessly, persistently silly at an archer.*** *Not by being shaken. Not by being shouted at. By ordinary noise from an ordinary person who was not treating the moment as a crisis. Mihawk, who has commanded men for longer than the barrier has stood, could only watch and assess. The Agent fixed it by accident, by continuing to be himself at volume.*

*Waluigi has written a great deal in this archive about the value of structure and he stands by all of it. He would like to add one line to the ledger: **structure did not do that.** WAH.*

## The Chain — And the Ship That Rose

Recovering the initiative, the Agent declared the manual's second protocol — *Iron legionaries are to proceed to the next step without hesitation* — and, in a moment Waluigi treasures, immediately worried aloud that his own hesitation over whether that counted as hesitation might itself count as hesitation.

Then he charged, boarded Gaster's vessel, and climbed for the **shadow anchor**.

He got a hand on it. The power thrummed through him "like a second heartbeat." The ship trembled. He assessed — correctly — that the anchor itself was beyond him, and switched to the chain, slashing at the links with his knife, again and again, sparks flying.

Gaster's crew watched in genuine horror. Sans leapt across to back him up.

Gaster himself was unbothered: **"You'll have to do better than that to break this ship."**

And then the vessel **rose out of the lava entirely**, hanging above the molten surface, the anchor fully de-attuned, Gaster guiding it from the helm with his hands resting easy.

<div class="lava-box">
<h4>Waluigi's correction to the party's after-action assumption</h4>
<p>Everyone aboard read the ascent as Gaster countering the sabotage. <b>Waluigi believes the sabotage worked.</b></p>
<p>The Agent attacked the chain, not the anchor. The chain is what binds the anchor to the vessel. He cut the ship free of its own mooring — and a ship freed from an anchor that was holding it <i>down</i> into a medium does exactly what that ship did. It went up.</p>
<p>Gaster then took the helm and steered, which everybody present interpreted as mastery. Waluigi's reading is that <b>the Agent involuntarily upgraded the enemy vessel from a lava boat to an airship, and Gaster — who is nothing if not quick — took credit for it in real time.</b> WAH.</p>
</div>

The crew sang again — *"Rise high, our vessel so bold! No chains to hold us down!"* — and Waluigi notes bitterly that the lyric is **literally accurate** and that they were celebrating the Agent's own handiwork.

The Agent threw a knife at Gaster. Gaster caught it between two fingers without moving anything else.

The Agent counted the deck: at least a dozen crew visible, more likely below. **Twelve against three.**

> **"A fair battle? Oh no... this isn't a battle at all. This is just entertainment for me."**

## The Withdrawal — Protocol as Permission

The Agent looked at Sans, then at the manual, and read:

> **"There's no shame in a tactical retreat."**

Sans agreed it was one of the rare times to heed his own book. Mihawk, weighing a floating ship, twelve-plus hostiles, and an opponent who caught thrown steel casually, did not argue.

*WAH! Waluigi wants to praise this properly. **That is the correct decision and it was reached by the correct method.** The party was outnumbered four to one, on the enemy's deck, on a vessel that was now airborne and under the enemy's control, with one member who had been non-corporeal ten minutes earlier and catatonic five minutes after that.*

*And note what the manual did. It did not tell him to run. **It gave him permission to.** The Agent has spent this entire arc using that book as an authority, and on a burning airship it functioned as the thing a frightened man needed most: a written statement, from someone he trusts, that leaving was allowed. Waluigi has audited many command failures and a startling number of them are men who could not find that sentence anywhere. WAH.*

Sans crouched at the edge, blue magic gathering, and the air began to distort — space folding into a vortex. Gaster and his entire crew fell silent to watch. Even Mihawk raised an eyebrow.

A sound like a blimp. Everything went black, "almost like a blink."

They were standing on solid ground. No ship. No lava. Trees, grass, and a clear sky.

## The Cost — A Book Left Behind

Sans checked himself over, tired but unharmed, and observed that it had worked better than expected. Mihawk asked where they were.

And the Agent said: **"my-my book .... MY BOOK where is it did it not teleport."**

Sans froze. **"Oh no... I didn't account for objects when I teleported us. The magic only grabbed living beings."**

Mihawk began searching immediately — bushes, grass, under rocks — methodically and then faster.

The Agent went down on his knees and did not speak.

*Waluigi is going to put the jokes down for this section.*

*Waluigi continues: that man carried the Iron Legion Protocols through every hour of this arc. He fought with it. He led with it. He used it to justify mercy to an archer, to authorise a theft, to identify an impossible door, to sedate a rampaging villain by reading his own classification aloud, and — on the 8:40 to Hotland — as a physical weapon in defence of a teammate. When Mihawk asked what he would do without it, his answer was that he did not know.*

*Waluigi continues: he described it, in his own words, as the only thing he used to fight.*

***It is now on the deck of a floating ship crewed by cryptids, in the possession of Wing Gaster.***

*Waluigi wants that stated as an intelligence loss rather than a personal one, because the personal one is obvious and the intelligence one is worse. **A standard-issue Iron Legion field document — including the unrecorded page that silenced a train car and made Dracule Mihawk take a book out of a soldier's hands — is now held by a hostile entity who measures his own territory in entries and chapters.***

*Waluigi has spent this filing being amusing about a man who reads a rulebook in combat. Waluigi would like to close that thread honestly. **The book was not a crutch and it was never a joke.** It was the only structure that soldier had in a sealed nation with no allies, no extraction, and no orders, and he used it well, and it is gone, and he knelt down in the grass and could not speak.*

*Waluigi continues: sans put a hand on his shoulder and apologised sincerely, twice. Mihawk kept searching without being asked, and did not stop when it was clearly hopeless.*

*Waluigi has audited that Warlord for a long time and has never once seen him look for something on somebody else's behalf. WAH.*

## The False Sun — The Finding

The Agent got up shaking and asked the three questions that matter: who was that, where are we, what happened.

Sans's answer to the first was **"That guy? That was Gaster. Never met him personally before today, but... yeah, he's bad news."**

*WAH! Waluigi is obliged to flag this and does so without pleasure. **"Never met him personally before today."** That statement is difficult to reconcile with the record: Sans's grin vanished on sight, before a word was spoken, before the shanty, before the anchor. The archive's own household registry says Sans knows more than he shares about Wing Gaster and that a sealed folder exists. Waluigi is not calling the skeleton a liar. Waluigi is filing a **discrepancy**, dated and sourced, and moving on.*

On location, Sans admitted his teleportation is imprecise — it gets you away from danger, not to a destination. The terrain gave nothing: rolling hills, scattered trees, no landmarks. Mihawk noted only that the air was different and they were not underground.

The Agent asked whether they had reached the surface.

Mihawk: **"We're definitely not underground anymore."**

And for a moment they had done it. The Agent said so — *we are free, we did it Mihawk* — and the Warlord's expression softened, which the archive records perhaps twice, and he said **"We are free."** Sans grinned properly for the first time since the harbour.

Then the Agent looked up at the sun again.

**".... no we are not."**

<div class="void-note">
<b>The finding.</b> Sans confirmed it — <i>"That's not our actual sun."</i> Mihawk confirmed the physics — <i>"The colour and intensity are different. This is artificial sunlight."</i>
<br><br>
They had not escaped. They had been moved from one part of the Underground to another part of the Underground <b>that maintains a working artificial sky</b>, convincing enough that a Warlord, a native skeleton, and a trained surveyor all believed they were on the surface until somebody looked twice.
</div>

*WAH! And now Waluigi will explain why this filing opened the way it did.*

*Waluigi continues: consider what that false sun **is**, as infrastructure. The Snowdin Line established that the Underground has rail, currency, ventilation and a civilian bureaucracy. This session added trained formation infantry. And now: **a synthetic sky, maintained, over open terrain, sufficient to deceive three trained observers.***

*Waluigi continues: that is not survival engineering. Ventilation is survival. A false sun is **grief management**. Somebody down there built a fake sky, at enormous cost, and has kept it running for generations, for a population that has never seen the real one — so that the children would have something to look up at.*

*Waluigi has audited a great many public works and he has never once encountered a line item like that. WAH.*

*And then the second thing, which is the reason Waluigi cannot sleep.*

***Sans said his teleportation is imprecise. It moves you away from danger, not to a place.*** *So the party's own explanation for their arrival is: random. Chance. They landed here because the magic had to land them somewhere.*

*Waluigi does not accept that, and here is the arithmetic. Of all the terrain in the Underground — tunnels, harbours, ruins, industrial districts, the CORE, the sealed town they came from — the escape deposited three people in **the one location built to look like freedom**, at the precise moment they were fleeing a man who edits environments for a living, whose signature capability across this entire session was authoring what other people perceive.*

*Waluigi continues: he raised a triangle that swallowed the sky. He held a wave of molten rock stationary in the air. He put a door in a corridor Sans has used for years. And when the party finally escaped him, they escaped **into a false sky** and spent ninety seconds believing they had won.*

***Waluigi does not believe Sans teleported them here. Waluigi believes Sans teleported, and something decided where they landed.***

*Waluigi cannot prove it. Waluigi has no mechanism, no witness, and no document — his document is on Gaster's ship. What Waluigi has is a pattern, and the pattern is that everybody who has underestimated that man in this session has been given exactly what they asked for in a shape they did not want.*

*Waluigi continues: the party asked to get out. They are out. They are standing in the sunshine.*

*Waluigi continues: the last exchange in the log is the Agent asking how far they are from Asgore, and Sans admitting he cannot tell — could be hours, could be days.*

***They do not know where they are. They have no map. They have lost the book. And the sky is a lie.***

*Waluigi is going back to his tennis racket, and he is taking the sealed folder question with him, and he would like it noted that he asked about that door.*

*WAAAAAAAH!*
"""

# ------------------------------------------------------------------ build ---
def wc(s):
    return len(re.findall(r"[A-Za-z0-9'\u2019-]+", re.sub(r'<[^>]+>|[*_>#]', ' ', s or '')))


EV4 = {
    'id': 'mount_ebott_survey_part_4',
    'name': 'The Mount Ebott Survey: Part IV',
    'title': "The Snowdin Line — Koffin-K's Felony, the Chloroform Mutiny, and the Manual That Won a Warlord",
    'date': 'Mid-10XX BF — Day 4 (transit leg, Snowdin to Hotland)',
    'era': 'The Old World Crisis — Subterranean Contact Arc',
    'location': 'Snowdin Town / Snowdin Rail Station / The 8:40 Service to Hotland, Mount Ebott',
    'type': 'Transit Incident / Assault on Municipal Officers / Command Mutiny / Document Review',
    'status': 'Filed as its own Ebott session. Two open questions referred for review: the origin of '
              "Koffin-K's dark-energy discharge, and the unrecorded page of the Legion manual.",
    'customCss': CSS4,
    'summary': (
        "Day Four is the transit leg, and on paper it is the quietest chapter of the survey: a walk, a ticket "
        "purchase, a train. In practice Koffin-K invents a conductor career out of a passing joke, escalates a "
        "clerk's refusal into a violent felony against two municipal officers, and is then sedated mid-journey by "
        "his own minions with prepared chloroform. The Agent breaks the mutiny by hitting his commander with the "
        "Iron Legion Protocols manual, subdues him by reading his own classification aloud, and wins Dracule "
        "Mihawk's genuine respect when the Warlord reads the book and asks who wrote it — a question the Agent "
        "cannot answer. Beneath the farce, the leg yields the arc's hardest intelligence: the Underground runs on "
        "convertible gold, maintains an industrial ventilation grid and an intercity railway, and its commuter "
        "carriages contain no humans at all."),
    'description': D4.strip(),
    'participants': [
        {'id': 'gamma_agent', 'name': 'Gamma Agent',
         'role': 'Legion surveyor / manual-bearer — asked where the smoke goes and got a civil-engineering answer, '
                 'bought passage in gold, tackled the wrong minion, broke the mutiny with a bound manual, and '
                 'subdued Koffin-K by reading Protocol 7 aloud while violating it.'},
        {'id': 'dracule_mihawk', 'name': 'Dracule Mihawk',
         'role': 'Tactical enforcer / ruling authority — refused to intervene in the station assault on liability '
                 'grounds, ended the carriage mutiny with one word, delivered his doctrine on earned loyalty, and '
                 'then read the manual and publicly revised his assessment of the Agent.'},
        {'id': 'sans', 'name': 'Sans',
         'role': 'Underground guide — disclosed the vent-and-chimney system, paid in surface-compatible gold from '
                 'his own pocket, and was assessed by Mihawk as "fast, unpredictable" without ever being fought.'},
        {'id': 'koffin_k', 'name': 'Count Koffin-K',
         'role': 'Self-appointed conductor — escalated a clerical refusal across four documented stages into a '
                 'dark-energy assault on two officers, was chloroformed by his own staff, and lost his title, '
                 'audience and minions in a single afternoon.'},
        {'id': 'flowey', 'name': 'Flowey',
         'role': 'Absent but load-bearing — left caged with the repaired survey machine in the abandoned Snowdin '
                 'police station, unsupervised, in a decision the party discussed twice and did not revisit.'},
    ],
    'outcome': (
        "Koffin-K is subdued, publicly stripped of authority, and abandoned by Lanky and Bulky at Hotland station; "
        "he departs alone and unaccounted for, still carrying an unexplained dark-energy capability. The Agent's "
        "standing with Mihawk is formally revised upward on the strength of his documentation. Two municipal "
        "security officers are hospitalised and the Legion's neutral-scientific-mission cover is now attached to an "
        "assault charge in a jurisdiction where the Empire has no standing. Intelligence obtained: the Underground "
        "uses convertible gold, operates an intercity railway with filtered ventilation, and its commuter "
        "population contains no humans."),
    'notableFeatures': [
        "The Smoke Question — the Agent asked why a sealed cavern running steam locomotives has not filled with "
        "smoke, and uncovered a generational industrial ventilation grid nobody had thought to survey.",
        "Convertible Gold — the Underground prices passage in Gold Pieces, meaning it shares a settlement medium "
        "with the surface economies and the barrier to trade has always been policy rather than currency.",
        "The Four-Stage Escalation — Koffin-K appealed to a heroic title, then a villainous one, inside two "
        "minutes, detecting no contradiction, because both are standing rather than moral positions.",
        "Bulky's Reflex — during the dark-energy blast, Bulky shielded Lanky. The loyalty question everybody spent "
        "the session asking was answered on the platform before it was raised.",
        "The Prepared Cloth — Lanky and Bulky boarded carrying a chemical restraint and did not deploy it during "
        "the assault, waiting instead until the doors sealed. They were not reacting; they were waiting.",
        "The Manual as Weapon — the Iron Legion Protocols were used as a blunt instrument, justified by Koffin-K's "
        "own Part III statement that the book was the leader.",
        "Protocol 7 Recursion — the Agent psychologically escalated a restrained subject by reading aloud the "
        "protocol forbidding psychological escalation, and it was more effective than the physical restraint.",
        "The Unrecorded Page — Sans chose a page at random; the Agent read it, stopped, and moved to close the "
        "book. Mihawk took it from his hands. The carriage went silent. The contents were never written down.",
        "The Unsigned Author — the Agent obeys the manual absolutely and does not know who wrote it. Only four of "
        "fifteen embassy personnel carry a copy, which may be a failed universal issue or a successful selective one.",
        "No Humans — a full passenger census of a functioning commuter train found knitting, laptops, snacks and a "
        "sleeping child, and not one human being.",
    ],
    'relatedArticles': ['mount_ebott_survey_part_3', 'mount_ebott_survey_part_2',
                        'mount_ebott_survey_mission', 'koffin_k', 'sans', 'dracule_mihawk',
                        'flowey', 'monster_underground', 'iron_legion'],
}

EV5 = {
    'id': 'mount_ebott_survey_part_5',
    'name': 'The Mount Ebott Survey: Part V',
    'title': 'The Lava Line — Chips Ahoy, the Shanty of the Seventeenth Entry, and the Sun That Was Not One',
    'date': 'Mid-10XX BF — Day 4 (Hotland approach and lava-harbour engagement)',
    'era': 'The Old World Crisis — Subterranean Contact Arc',
    'location': 'Hotland Station service tunnels / The Lava Harbour / Unidentified terrain beneath an artificial sky',
    'type': 'Hostile Contact / Naval Engagement / Anomalous Entity Encounter / Materiel Loss',
    'status': 'OPEN — party location unknown to itself. Legion field manual lost to hostile custody. '
              'Identification of the entity filed with confidence; Sans discrepancy noted and unresolved.',
    'customCss': CSS5,
    'summary': (
        "The survey team attempts to leave the Underground and instead meets the single most significant unresolved "
        "entry in the Snowdin household registry. Ruling out the Royal Guard — whom Mihawk assesses as trained "
        "formation infantry — Sans leads them through a private service route, where they find a wooden door that "
        "should not exist and something breathing behind it. They steal a lava boat and are intercepted mid-harbour "
        "by Wing Gaster: white, one-eyed, grinning, crewed by cryptids, singing a shanty that is functionally an "
        "inventory of his own holdings. Sans's grin vanishes for the first time in the archive, the Agent's hand "
        "passes through him mid-engagement, and the word 'Papyrus' in a lyric removes him from the fight entirely. "
        "The party escapes by teleport, loses the Iron Legion manual to hostile custody, and lands under a sky they "
        "all believe is the surface until somebody looks up twice."),
    'description': D5.strip(),
    'participants': [
        {'id': 'gamma_agent', 'name': 'Gamma Agent',
         'role': 'Legion surveyor — executed Protocol 47 correctly on the impossible door, proposed the lava-boat '
                 'transit, dismantled an enemy archer by accident through sincere encouragement, cut the shadow '
                 "anchor's chain, called the retreat by the book, and lost that book in the escape."},
        {'id': 'wing_gaster', 'name': 'Wing Gaster',
         'role': 'Hostile anomalous entity — hailed the party as "Chips Ahoy", raised a void-triangle over the '
                 'harbour, held a wave of molten rock stationary, caught a thrown knife between two fingers, and '
                 'deployed the name "Papyrus" as aimed ordnance against Sans. Now holds the Legion manual.'},
        {'id': 'sans', 'name': 'Sans',
         'role': 'Underground guide — revealed a private service route years old and unlogged, lost his grin on '
                 'sight of Gaster, became briefly non-corporeal, was rendered catatonic by one word in a lyric, and '
                 'extracted the party by teleport while stating he had never met Gaster personally.'},
        {'id': 'dracule_mihawk', 'name': 'Dracule Mihawk',
         'role': 'Tactical enforcer — assessed the Royal Guard as coordinated trained infantry and declined open '
                 'battle, authorised the theft on grounds of quietness, drew Yoru in response to Sans\'s reaction '
                 'rather than to Gaster, and searched the grass for a lost book without being asked.'},
        {'id': 'papyrus', 'name': 'Papyrus',
         'role': 'Named in absentia — unmentioned by Sans across four sessions including in his own town, and '
                 "known to Gaster's crew well enough to be set to metre and used as a weapon."},
        {'id': 'asgore', 'name': 'Asgore',
         'role': 'Objective — the intended destination the party is now an unknown distance from, with no map.'},
    ],
    'outcome': (
        "The party escapes the engagement alive and uninjured, and loses the Iron Legion Protocols manual to Wing "
        "Gaster's custody — including the unrecorded page from the Snowdin Line. Sans's non-corporeality and "
        "catatonia are logged and not followed up. The team believes for roughly ninety seconds that it has reached "
        "the surface before identifying the sunlight as artificial. Final position: unknown terrain, no landmarks, "
        "no map, distance to Asgore unestimable — anywhere from hours to days. Intelligence obtained: the "
        "Underground fields formation-trained infantry, maintains a synthetic sky over open ground, and contains at "
        "least one hostile entity capable of environmental authorship who was stranded at the CORE."),
    'notableFeatures': [
        "Peer Assessment — Mihawk declined open battle with the Royal Guard and gave professional reasons, which "
        "kills the Empire's standing classification of the monster population as a contained anomaly.",
        "Protocol 47 — the Legion manual contains a numbered procedure for doors that should not logically exist. "
        "You do not get a protocol from a hypothetical; you get one from a body.",
        "The Breathing Door — placed on a route Sans has used for years and had never seen. The occupant was "
        "corporeal, cautious, verbal, ran a screening challenge, engaged with the joke, and then withdrew.",
        "The Shanty as Inventory — 'a goner ye shall be', 'my DELTARUNE's at sea', 'they plunder my crystals', "
        "'me seventeenth entry', 'all seven of me chapters', 'the STAR WALKER'. Territory measured in filing units.",
        "The Shadow Anchor — moved the medium rather than the vessel, generating and then statically holding a "
        "lava wave against gravity. Environmental authorship, not propulsion.",
        "The Glitch — the Agent's hand passed through Sans. Nobody else in the same radius was affected, which "
        "argues the instability was revealed rather than inflicted.",
        "Weaponised Courtesy — the Agent's sincere encouragement of an enemy archer worked so well that a crewmate "
        "had to issue the countermeasure 'Quiet, idiot. Stop trying to think.'",
        "The Papyrus Line — a name Sans has never spoken in four sessions, set to metre by the enemy crew and "
        "deployed at the moment he became a threat. Aimed ordnance, not a lyric.",
        "Recovery by Ordinary Noise — Sans was brought back not by force but by the sound of the Agent being "
        "harmlessly persistent at an archer in a steady, unalarmed voice.",
        "The Accidental Airship — the Agent cut the chain, not the anchor, freeing the vessel from its mooring. "
        "The ship rose because he cut it loose, and Gaster took credit in real time.",
        "The False Sun — a maintained artificial sky over open terrain, convincing enough to deceive a Warlord, a "
        "native, and a trained surveyor. Ventilation is survival engineering; a fake sky is grief management.",
    ],
    'relatedArticles': ['mount_ebott_survey_part_4', 'mount_ebott_survey_part_3',
                        'mount_ebott_survey_part_2', 'mount_ebott_survey_mission',
                        'wing_gaster', 'sans', 'papyrus', 'dracule_mihawk', 'asgore',
                        'monster_underground', 'iron_legion'],
}

with open(PATH, encoding='utf-8') as f:
    events = json.load(f)

by_id = {e['id']: i for i, e in enumerate(events) if isinstance(e, dict) and e.get('id')}
for ev in (EV4, EV5):
    if ev['id'] in by_id:
        events[by_id[ev['id']]] = ev
    else:
        events.append(ev)

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(events, f, ensure_ascii=False, indent=1)
    f.write('\n')

for ev in (EV4, EV5):
    body = wc(ev['description'])
    extra = wc(ev['summary']) + wc(ev['outcome']) + sum(wc(x) for x in ev['notableFeatures']) \
            + sum(wc(p['role']) for p in ev['participants'])
    print(f"{ev['id']}: body {body} + apparatus {extra} = {body + extra} words")
print('events now:', len(events))
