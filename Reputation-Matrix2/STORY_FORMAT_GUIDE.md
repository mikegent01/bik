# Waluipedia Story Format Guide

How to write a filing so it reads like a **story with a commentator**,
not a report with scenes attached — and, when the form needs it, like an
**eyewitness audit with a ledger**, not an essay with jokes in it.

---

## The archive ranking (read this first)

Two filings set the standard. They are not interchangeable.

| Rank | Filing | Role | One-line verdict |
|---:|---|---|---|
| **1** | **Wario / Abstract Bank** — [`wario_abstract_bank`](data/whatifs.json) | Best complete *article* | Scene craft + voice + apparatus + transferable argument |
| **2** | **Imp Ambush** — [`the_imp_ambush_of_harvestide_29`](data/events.json) | Best pure *scene* / best teaching text | How a paragraph works when nothing abstract leaks in |
| — | Mount Ebott filings | Negative control | Long, clever, and thin — analysis wearing a story costume |

### The finding, stated cleanly

> **Imp is the better written scene. Wario is the better written article.**
> For the archive’s standards — story with a commentator that earns a ledger —
> **Wario is the high-water mark.** Imp is still the thing you hand someone
> first when their narration has gone abstract.
>
> **Imp for the scene. Wario for the filing. Both, or it isn’t finished.**

| | **Imp wins** | **Wario wins** |
|---|---|---|
| What | Pure scene craft | Complete object |
| Strength | Sensory density, short asides, part size, clean no-commentary units | Decision engine, dual-layer commentary, ledger / findings / verdict, callback close |
| Failure mode if you only copy it | Vivid session log with nothing to carry out of the room | Clever essay whose scenes are summaries with jokes attached |
| Hand it to a writer when | Their prose reports instead of shows | Their draft has scenes but no thesis, no machine, no close |

**Measured (story prose only):**

| | Imp | Wario Bank | Ebott IV |
|---|---:|---:|---:|
| Sensory / 1k | ~12–13 | ~13–15 | 1.5 |
| Abstract / 1k | ~0 | ~0.8 | 4.4 |
| Dialogue / 1k | ~12 | ~15 | low |
| Story : inline analysis | **83 / 17** | **76 / 24** | 39 / 61 |
| Body length | ~5.4k | ~13.2k | ~7k |
| Aside median | ~54w | ~59w | notes ran 175w |

Both references are *physical*. Ebott’s narration is itself analysis — it just
isn’t in italics. Strip the asides and what’s left still says *implies*,
*assessment*, *mechanism*. Nothing can be seen, heard, or touched.

> **Neither reference wins because Waluigi says less. They win because the
> story is made of physical detail, and commentary has something concrete to
> bounce off.**
>
> Analysis on vivid scene = commentary.
> Analysis on summary = an essay with jokes in it.
>
> **Fix the story prose first; the ratio follows.**

### How to use the two references

1. **Draft the scenes as if Imp is grading you.** Bodies, objects, quoted
   speech, one concrete anchor per paragraph. No analytical vocabulary in the
   narration.
2. **Frame and close the filing as if Wario is grading you.** Divergence →
   machine → iterations that each earn a ledger row → five findings that
   survive with the chapters hidden → one verdict with a recommendation → one
   physical callback object in the last beat.
3. **Never optimise the numbers.** They catch drift; they are not a score.
   If the prose reads well and the measurements disagree, **the prose wins** —
   fix this guide. Padding to hit a ratio is its own failure mode.

---

## 0. Which form am I writing?

| | **Session event** (Imp lineage) | **What-If** (Wario lineage) |
|---|---|---|
| File | `data/events.json` | `data/whatifs.json` |
| Canon | On the record | Explicitly non-canon — a branch that did not survive |
| Spine | Chronological scene parts | Divergence → consequences → close |
| Narration | Close third; Waluigi ringside | First person Waluigi when he was *in the room* |
| Unit | `## Part N` in `description`, or `sections[]` | `chapters[]` with `body` + `analysis` |
| Heavy findings live in | `aftermath`, `waluigiAssessment`, `notableFeatures` | `ledger`, `findings`, `verdict`, chapter `analysis` |
| Typical length | 4,500–6,500 | 7,000–15,000 (split by decision / phase, not panic) |

**§1–3 (prose) apply to both.** §9–11 (machine + apparatus) are What-If native;
the habits transfer to any long event.

---

## 1. What “detail” actually means

### Imp opening — the room does the work

> Markop’s large, dark equine eyes snapped open.
>
> …Through his heavy, **dust-crusted eyelashes**, Markop realized what had
> severed his slumber. It was a tapping. A sharp, rhythmic, fingernail-on-glass
> ***tap, tap, tap*** echoing from the **leaded pane** of the bedroom window.

Still the single best opening paragraph in either filing. Cold open on a body.
Named objects. A sound you can hear. Then the aside has a surface to hit.

### Wario opening — the witness does the work, *then* the room

> The document arrived the way all catastrophic documents arrive: unremarkably,
> in a folder, on a Tuesday. Waluigi carried it in.
>
> Wario snatched the paper out of my hands… His beady little eyes went down the
> page in hard, greedy little jumps, **the way a rat reads a kitchen.** His
> mustache twitched. It twitched again.

Same physical standard, plus the **character tell rendered as physics**: greed
as eye-jumps, hesitation as mustache rhythm, delight as a launch into zero-G.
Mood is never named; the body announces it. Steal this even in third person.

### Ebott, same job — reject

> Koffin-K entered the Snowdin station… **Lanky pointed out, quietly, that
> nobody was there. Bulky nodded.** Their boss kept declaiming at the empty
> benches.

Minutes entry. Nobody speaks. Nothing is seen. Rewrite:

> The door banged off its frame. Koffin-K stopped three paces in, fedora tipped,
> and filled his lungs.
>
> **“I AM KOFFIN-K! FUTURE CONDUCTOR OF THIS TRAIN AND SAVIOR OF SNOWDIN!”**
>
> The words went up into the rafters and came back thinner. Somewhere a radiator
> ticked. The clerk turned a page.
>
> **“Boss,”** Lanky said. **“There’s… nobody here.”**
>
> Bulky nodded at the empty benches. Four rows, all of them, dusted with grit
> blown in under the door.

Same events, same length. One is a report; the other is a scene.

---

## 2. Seven techniques that make prose physical

| Technique | Instead of | Write |
|---|---|---|
| **Quote it** | “Lanky pointed out nobody was there” | **“Boss. There’s… nobody here.”** |
| **Name the object** | “the window” | “the leaded pane” |
| **Sound it** | “a tapping noise” | “*tap, tap, tap*” / “the first crack sounded like a rifle” |
| **Body over mood** | “he was furious” / “he was delighted” | “his eye twitched” / “arms spread, spinning in a rising cyclone of his own fortune” |
| **One concrete anchor per paragraph** | “the station was empty” | “grit blown in under the door” |
| **Simile that characterises** | “he read greedily” | “the way a rat reads a kitchen” |
| **Institution as physics** | “the bank processed the request” | “a very small pop, like a jar of pickles opening in the next room” |

**Target ≥ 8 sensory words per 1,000 story words.** Cold, dust, echo, creak,
steam, glint, hands, breath, gold, grit, plaster, mustache. The audit in §13
counts them.

**Ban from story prose** (commentary language, even when the narrator *is*
Waluigi mid-scene):
*implies, implication, assessment, structural, mechanism, classification,
procedural, institutional, doctrine, category, finding, capability,
jurisdiction.*

If a sentence would fit under `findings[]`, it does not belong in the paragraph
where the lamp floats off the table. Waluigi-as-narrator may be petty, specific,
and present. He may not smuggle the verdict into the middle of a scene.

---

## 3. The ratio

| Article | Body words | Story | Inline analysis |
|---|---:|---:|---:|
| **Imp Ambush** | ~5,400 | **83%** | **17%** |
| **Wario Bank** | ~13,200 | **76%** | **24%** |
| Ebott IV / V | ~6.5–7k | 39–45% | 55–61% |

### Aim around **80 / 20**. Past ~35% inline analysis, something has gone wrong.

Imp at 17% and Wario at 24% both read fine. First person earns a little more
colour; it does not earn a lecture.

**Free against the ratio** (apparatus, not inline): chapter `analysis`,
`ledger`, `findings`, `verdict`, `aftermath`, `waluigiAssessment`. Moving a
finding there *raises* your story ratio.

Order of operations: **§1–2 first.** Cut asides without fixing the prose and
you get a shorter report. Add commentary to hit a number and you get padding.

---

## 4. Word count

### Session events (Imp lineage)

| Scope | Typical | Second look past |
|---|---:|---|
| Whole event | **4,500–6,500** | 7,500 — split |
| Section / Part | **350–450** | <250 or >700 |
| Sections per event | **10–14** | 8–16 |
| Story paragraph | **30–40** | 3–6 sentences |
| Waluigi aside | **40–70** | 90 → promote to note |
| Analysis per section | **~120 total** | one aside, or two short |

### What-Ifs (Wario lineage)

| Scope | Typical | Second look past |
|---|---:|---|
| Whole filing | **7,000–14,000** | 16,000 — split or cut a wish |
| Chapter | **600–1,100** | <400 thin; >1,300 wants two |
| Chapters | **9–15** | shaped by the decision tree, not a quota |
| Inline aside | **40–70** | 90 → chapter `analysis` |
| Chapter `analysis` | **60–120** | 150 → `findings` / `verdict` |
| Asides per chapter | **2–4** | stacked with no story between = too many |
| `findings[]` | **5–6** theses | each with a short `d` |
| `ledger[]` | **one row per major decision** | pitch / reality / lesson / verdict |
| `verdict.body` | **120–250** | one recommendation, not a second essay |

Wario’s ~15 chapters / ~13k / ~51 asides (median 59) is the **high-water mark**,
not the floor. Peach and Mario land around 9 chapters / 8–9k and still read
complete.

> **Second biggest error.** Ebott’s section notes ran a **175-word median** —
> 3× Imp’s asides and past Wario’s `analysis` band. An aside that needs 175
> words is an essay in an aside’s clothes. Promote it.

---

## 5. Section / chapter shape

### Session part (Imp) — ~390 words

```
1. Scene-setter        1 short para — place + one physical detail
2. Action / dialogue   4–8 paras — quoted speech, bodies, objects
3. Turn                the beat that costs someone something
4. Waluigi aside       1 × 40–70w                    ← usually here
5. Landing             1–2 paras, consequence, next hook
```

**Aside near the end.** Imp lands most in the last third of the part. Waluigi
reacts; he never previews.

**~1 section in 6 carries no commentary.** Imp Part Four is pure cottage warmth
and it works because the parts around it pay. After two heavy units, let one run
clean.

### What-If chapter (Wario) — ~700–1,000 words

```
1. Hook                where we are, or the decision about to be made
2. Scene               4–10 paras — Imp physical rules still apply
3. Inline asides       2–4 × 40–70w, each welded to a specific beat
4. Turn / cost         the wish, choice, or disclosure exacts payment
5. Landing             into the next chapter’s problem
6. analysis {}         60–120w named finding — title + body — after the body
```

**Chapters are phases of a decision, not acts of a play.** Label with `phase`
(`Prelude` / `Wish One` / …) and optional `wish` / document / checkpoint. Peach
and Mario reuse the same slots with different nouns.

**Pair chapters when a decision has a setup and a bill:**

| Setup | Bill |
|---|---|
| II. First Withdrawal — Gravity | III. The Fountain |
| VI. Equivalent Exchange | VII. The Barter |
| VIII. Time | IX. The Still World |

Setup = the signing. Bill = the physics. Readers feel the joke twice and the
finding once — the correct ratio.

---

## 6. The Waluigi aside (inline)

Own paragraph. Single asterisks. Opens `*WAH!` or `*Waluigi`. The site’s
`isWaluigiAside()` styles these as purple `em.walu-aside` callouts.

```markdown
*WAH! Custodial extortion! The ultimate high-stakes chore list! 'Clean my
basement or I will murder your entire household!' Waluigi has used this exact
negotiation tactic on Wario several times, though usually over the clay courts.*
```

**40–70 words. ~1 per Imp section; 2–4 per Wario chapter. Ninety is the wall.**

| Type | Does | Source |
|---|---|---|
| **The joke** | Punctures the moment | Imp — custodial extortion |
| **The catch** | Names what the party missed, one sentence | Wario — believed removing gravity would keep rivals *down* |
| **The correction** | Flags a claim that doesn’t survive the record | Wario — “a scam has a ceiling” |
| **The tell** | Points at a detail that pays off later | Wario — ring in the dust |
| **The grievance** | First person only — manhandled, ignored, right | Wario — “Unhand Waluigi!” |

Bad asides: explain the scene back, run institutional theory, arrive before
their beat, or stack with no story between.

**Weld every aside to a quoted or physical beat immediately above it.** Anchor
first, commentary second. If you cannot point at the sentence it answers,
delete it.

### Dual-layer commentary (What-If default; optional on long events)

Inline asides are colour. They are not the thesis.

| Layer | Where | Job | Length |
|---|---|---|---:|
| **Inline aside** | Inside `body` / `description` | React to *this* beat | 40–70 |
| **Unit note** | `chapters[].analysis` or `sections[].waluigi_note` | Name the finding this unit earned | 60–120 |
| **Apparatus** | `findings`, `ledger`, `verdict` / `waluigiAssessment`, `aftermath` | Durable argument of the filing | §10–11 |

```json
"analysis": {
  "title": "Waluigi's Economic Note",
  "body": "Observe that the gold behaved *correctly*. It did not misfire…"
}
```

A unit note may be sharper than an aside because the scene is over. It may
**not** re-narrate the scene. If it works with the body deleted, it is doing
its job. If it only works as a recap, cut it.

| Field | Form | Use | Words |
|---|---|---|---:|
| `sections[].waluigi_note` | Event | Named finding closing a section | ≤ 120 |
| `chapters[].analysis` | What-If | `{title, body}` closing a chapter | 60–120 |
| `aftermath` | Event | Standing, personnel, exposure, materiel | 150–250 |
| `waluigiAssessment` | Event | Numbered findings + one recommendation | 300–500 |
| `ledger[]` | What-If | One row per major decision | ~40–80 / row |
| `findings[]` | What-If | 5–6 transferable theses (`t` + `d`) | ~30–50 / item |
| `verdict` | What-If | `{title, body}` Board recommendation | 120–250 |
| `notableFeatures` | Event | One-line hooks | 5–8 items |

---

## 7. Voice and point of view

### Events — close third + ringside Waluigi (Imp)

Camera in the room. Waluigi speaks through asides (and optional notes) only.
Characters talk in their own dialogue.

### What-Ifs — first person Waluigi, present as witness (Wario)

Establish presence on the first screen:

> Waluigi has been asked to file a hypothetical. Fine. WAH. But understand from
> the first line that this is not a story Waluigi heard secondhand — Waluigi was
> *standing in the room*, holding the folder…

Rules that keep first person from collapsing into monologue:

1. **In the scene, not above it.** Holds the folder, gets shaken, grabs a
   doorframe, photographs dust. If deleting him doesn’t change the blocking, he
   is narrating, not witnessing — rewrite until his body occupies space.
2. **Argues out loud.** Spoken lines in the room, not only italic asides. The
   Wario amend pass specifically added dialogue so he fights instead of only
   annotating. Steal that.
3. **Wrong in the moment, precise in the apparatus.** Inline can panic, score
   points, nurse grudges. `verdict` is where he is exact. Do not reverse the jobs.
4. **“Waluigi” more often than “I”.** Keeps voice in character; keeps
   `*Waluigi…*` asides continuous with narration.
5. **When he wasn’t there, say so and switch.** Reconstructed chapters are close
   third with asides, and admit the reconstruction. Never fake eyewitness standing.

### Free indirect is not a third mode

Do not drift between “Waluigi watched Wario sign” and “Wario felt a deep unease
about the metaphysical implications.” On Waluigi’s shoulder, or close third on
a subject. Pick per chapter; label it in `pov`.

---

## 8. The decision engine (What-If spine)

A What-If is not “and then more things happened.” It is a **machine that
applies one mistake to several surfaces** so the reader learns the mistake.

```
premise:     a bank sells abstract concepts for unlimited gold
divergence:  the account is assigned to Wario, unsupervised
loop:        withdraw a concept → physics collects → reset
escalation:  each wish is “smarter” and fails worse
terminal:    he sells the limit on the resets themselves
close:       world restored; only the witness keeps the ledger
```

Peach: one disclosure, four documents, each “justified,” the last catastrophic.
Mario: a checkpoint loop. **Build the machine before the chapters.**

### Every iteration earns four sentences → one `ledger[]` row

| Field | Question | Wario | Peach |
|---|---|---|---|
| `pitch` | What did they *think* they were buying? | “Who needs gravity anyway?” | “Give the Loyalists a target and the rage will narrow.” |
| `reality` | What did the universe sell? | Oceans, topsoil, gold reserve depart upward | Rage widened; complicity to ~four million |
| `lesson` | Transferable error? | Priced by annoyance, not load-bearing value | Rage is a direction seeking permission |
| `verdict` | Cost in the filing’s currency? | Reset (1/3) | Catastrophic — correction filed |

Cannot fill the four fields? The chapter is atmosphere. Atmosphere is allowed
in small doses (Imp Part Four). It is not allowed to be the whole filing.

### Findings — five sentences that outlive the plot

Wario’s durable shape: **a short sentence the reader can carry out of the room**,
then one clarifying beat.

> **The concept he resents is never the concept he is selling.**
> Gravity meant “stairs are annoying.” Time meant “I hate my calendar.” …

> **You cannot buy an exception from an institution that only sells the whole idea.**
> **Wealth is a ratio, not a pile.**
> **The reset is the most dangerous object in the story.**
> **Nothing outside the room remembers.**

Write `findings[].t` first, as if they were all that survived. Then write the
chapters that force those lines to be true. A chapter that pressures no finding
is a candidate for cutting.

**Aim for five.** Six is fine. Eight means two are chapter notes wearing a
findings badge — demote them.

---

## 9. Formatting that renders

**Markdown only — `mdToHtml()` escapes raw HTML.**

> Raw `<div class="...">` renders as literal text. Fifteen shipped in Ebott
> before this was caught. Use blockquotes.

| Want | Write |
|---|---|
| Section (event) | `## Part Three: The Nine-Man Army` |
| Chapter (What-If) | `heading: "II. First Withdrawal — Gravity"` (renderer builds H2) |
| Callout | `> **Protocol 7**` then `> "quoted text"` |
| Emphasis | `**bold**` / `*italic*` |
| Inline finding | `***One line, bolded italic.***` |
| Aside | own paragraph, `*WAH! …*` or `*Waluigi …*` |
| Song / verse | blockquote, one line per line |

**Custom CSS:** only `.prose blockquote`, `.prose h2`, `.wiki-lead`, `.wnote`.
Never invent class names.

**Events:** prefer `sections[]` (`name`, `icon`, `overview`, optional
`waluigi_note`) for free H2 anchors + TOC. A single `description` with `##`
headings (Imp style) still works — keep part lengths in band either way.

**What-Ifs:** `chapters[]` (`id`, `heading`, `phase`, `wish`, `body`,
`analysis`). Do not embed `##` inside `body`.

---

## 10. What-If apparatus (Wario checklist)

A What-If is not done when the last chapter lands. Apparatus is half of why
Wario feels finished and weaker drafts feel like long posts.

### Required shell

```text
id, title, subtitle, emoji, accent, kicker
status, clearance
subject, subjectImage
divergence          ← one or two sentences: the single changed fact
premise             ← what the machine is
summary             ← ~80 words, whole arc
tags[]
epigraph            ← one line already in the body that contains the joke
pov, byline, narrator, author, filed
chapters[]
ledger[]
findings[]
verdict             ← {title, body}
outcome             ← one cold line
related[]
wishes[]            ← optional UI chips; one per major iteration
resetsUsed / resetsTotal   ← only if the machine has resets
readingTime, wordCount, asideCount  ← computed; don’t invent them
```

### `ledger[]` — the page skimmers remember

```json
{
  "n": "01",
  "concept": "Gravity",
  "pitch": "\"Who needs gravity anyway?\"",
  "reality": "Everything that was ever held down stops being held down…",
  "lesson": "He priced the concept by how annoying it was, not by how much it was holding up.",
  "verdict": "Reset (1/3)"
}
```

`pitch` = words the subject said or would say. `reality` = physical.
`lesson` = transferable. `verdict` = cost (resets, lives, legitimacy, hours).

### `verdict` — one recommendation

Not a recap. Not a second findings list. Board-facing close:

> Four withdrawals. Three resets. One afternoon. … What he was trying to buy,
> every single time, was the removal of a *no*.
>
> …the Abstract Bank should not be regulated, audited, or shut down. It should
> be given, in full, to somebody boring. WAH.

Peach earns its keep by *refusing* a clean ranking and recommending a narrower
transferable rule. Both valid. A verdict that only restates the plot is not.

### Trailer fields — write last

- `divergence` — single changed fact, one breath
- `premise` — the machine, including its cruel rule
- `epigraph` — a line already in the body
  (*“It’s not a scam. Waluigi checked. That’s the problem — a scam has a ceiling.”*)

---

## 11. Event apparatus (Imp checklist)

| Field | Job |
|---|---|
| `summary` | ~40–80 words, no asides |
| `description` or `sections[]` | the story |
| `participants[]` | ids that resolve |
| `outcome` | where things stand — may be unresolved |
| `notableFeatures[]` | 5–8 one-line hooks |
| `relatedArticles[]` | ids that resolve |
| `aftermath` (recommended) | standing / materiel / exposure |
| `waluigiAssessment` (recommended when resolved) | numbered findings + one recommendation |

Imp ships without a formal assessment because the asides carry the colour and
the outcome is mid-siege. If your event *resolves*, write the assessment. If it
doesn’t, strong `outcome` + `notableFeatures` is enough.

**Long events should steal Wario’s habits even without his schema:** name the
finding, put the thesis at the end, leave a callback object, give the skimmer
something that isn’t a plot summary.

---

## 12. Pacing tells (steal deliberately)

| Tell | Imp | Wario | When |
|---|---|---|---|
| Cold open on a body | Eyes snap open | Mustache twitches down a page | First paragraph of any unit |
| Sound-effect beat | `*tap, tap, tap*`, `*BAM*`, `*SLASH*` | “The first crack sounded like a rifle.” | Impact — sparingly |
| Clean section | Part Four, zero asides | — | After two heavy commentary units |
| Setup → bill pair | — | Gravity→Fountain; Time→Still World | Any wish / disclosure / plan |
| Spoken Waluigi | rare (ringside) | argues in-scene | First-person filings |
| Petty specific grievance | tax-bill simile | shaken by the shoulders | Keeps the commentator human |
| Callback object | phantom door knock | ring in the dust on the desk | Final beat — proof the branch was real |
| Verdict chip | — | `wishes[].result` (“Everything leaves”) | UI + skimmers |
| Refuses a dream reading | — | closing chapter kills the exit | Any reset / timeline story |

**The callback object is the Wario close most events underuse.** Leave one
physical residual that survives the reset, the fade-out, or the morning after —
dust ring, cold teacup, window still unlatched — and let the last aside point
at it without explaining it. Readers finish the filing themselves.

---

## 13. Pre-flight

**Craft — judgement, not gates:**

```
· Does the prose show beats, or report them?
· Dialogue where people are talking?
· Could a reader picture each scene?
· Does every aside earn its place?
· Is there a unit that runs clean with no commentary?
· Does any unit want to be two — or two want to be one?
· (What-If) pitch / reality / lesson / verdict for each iteration?
· (What-If) Do findings[].t still work if chapters are hidden?
· (What-If) Is Waluigi physically in the room, or only narrating?
· Callback object in the close?
· Imp-grade scenes AND Wario-grade frame — or only one?
```

**Mechanical — pass/fail (page breaks otherwise):**

```
□ No raw <div> — blockquotes only
□ participants[] / relatedArticles / related[] ids resolve
□ customCss brace-balanced, no invented class names
□ Events (resolved): aftermath + waluigiAssessment present
□ What-Ifs: divergence, premise, chapters[], ledger[], findings[], verdict
□ What-Ifs: every chapter has heading + body; analysis title/body if present
□ Asides are their own paragraph, start *WAH! / *Waluigi, end with *
```

### Event audit

```bash
python3 - <<'PY'
import json, re
EVENT_ID = 'your_event_id'
d = json.load(open('Reputation-Matrix2/data/events.json'))
e = [x for x in d if x['id'] == EVENT_ID][0]

def is_aside(b):
    b = b.strip()
    return b.startswith('*') and b.endswith('*') and not b.startswith('**') and len(b) > 40

story_blocks, analysis = [], 0
analysis += sum(len(s.get('waluigi_note', '').split()) for s in e.get('sections', []))
analysis += len(e.get('waluigiAssessment', '').split())
extra = len(e.get('aftermath', '').split())
for t in [e.get('description', '')] + [s.get('overview', '') for s in e.get('sections', [])]:
    for b in (x.strip() for x in t.split('\n\n') if x.strip()):
        if b.startswith('#'):
            continue
        if is_aside(b):
            analysis += len(b.split())
        elif not b.startswith('>'):
            story_blocks.append(b)

s = ' '.join(story_blocks)
sw = len(s.split()) or 1
story = sw + extra
tot = story + analysis or 1

SENSE = r'\b(cold|chill|warm|heat|damp|dust|smell|smelled|reek|echo|hiss|creak|clack|thud|rattle|scrape|glint|flicker|gray|grey|snow|steam|breath|hand|hands|eyes|fingers|boots|air|grit|rust|gold|plaster|mustache)\b'
ABSTRACT = r'\b(implies|implication|assessment|structural|mechanism|classification|procedural|institution\w*|doctrine|category|finding|capability|jurisdiction)\b'
sense = len(re.findall(SENSE, s, re.I))
abst = len(re.findall(ABSTRACT, s, re.I))
dlg = len(re.findall(r'"[^"]{10,}"', s))

print(f'{tot} words — {story/tot*100:.0f}% story / {analysis/tot*100:.0f}% analysis')
print(f'sensory {sense/sw*1000:.1f}/1k   abstract {abst/sw*1000:.1f}/1k   ratio {sense/max(1,abst):.1f}:1')
print(f'dialogue {dlg/sw*1000:.1f}/1k')
print('(reference — Imp: 17% analysis, ~12 sensory/1k, ~12 dialogue/1k)')

notes = []
if analysis / tot > 0.35:
    notes.append('analysis heavy — move a finding to waluigiAssessment')
if sense / sw * 1000 < 6:
    notes.append('prose may be abstract — beats reported rather than shown?')
if abst and sense < abst * 2:
    notes.append('narration using analytical vocabulary — that language is Waluigi’s')
print()
if notes:
    for n in notes:
        print('  ·', n)
    print('\n  Advisory only. Re-read and decide.')
else:
    print('  Nothing flagged.')
PY
```

### What-If audit

```bash
python3 - <<'PY'
import json, re
WHATIF_ID = 'your_whatif_id'
doc = json.load(open('Reputation-Matrix2/data/whatifs.json'))
e = [x for x in doc['whatifs'] if x['id'] == WHATIF_ID][0]

def is_aside(b):
    b = b.strip()
    return b.startswith('*') and b.endswith('*') and not b.startswith('**') and len(b) > 40

story_blocks, inline_a, notes = [], 0, 0
aside_lens = []
for c in e.get('chapters', []):
    a = c.get('analysis') or {}
    if isinstance(a, dict):
        notes += len((a.get('body') or '').split())
    for b in (x.strip() for x in (c.get('body') or '').split('\n\n') if x.strip()):
        if is_aside(b):
            inline_a += len(b.split())
            aside_lens.append(len(b.split()))
        elif not b.startswith('>'):
            story_blocks.append(b)

s = ' '.join(story_blocks)
sw = len(s.split()) or 1
tot = sw + inline_a or 1
SENSE = r'\b(cold|chill|warm|heat|damp|dust|smell|smelled|reek|echo|hiss|creak|clack|thud|rattle|scrape|glint|flicker|gray|grey|snow|steam|breath|hand|hands|eyes|fingers|boots|air|grit|rust|gold|plaster|mustache|coin|folder|ceiling|floor)\b'
ABSTRACT = r'\b(implies|implication|assessment|structural|mechanism|classification|procedural|institution\w*|doctrine|category|finding|capability|jurisdiction)\b'
sense = len(re.findall(SENSE, s, re.I))
abst = len(re.findall(ABSTRACT, s, re.I))
dlg = len(re.findall(r'"[^"]{10,}"', s))

print(f'body {sw+inline_a}w — {sw/tot*100:.0f}% story / {inline_a/tot*100:.0f}% inline analysis')
print(f'chapter notes {notes}w (free) · findings {len(e.get("findings") or [])} · ledger {len(e.get("ledger") or [])}')
print(f'sensory {sense/sw*1000:.1f}/1k  abstract {abst/sw*1000:.1f}/1k  dialogue {dlg/sw*1000:.1f}/1k')
if aside_lens:
    aside_lens.sort()
    print(f'asides {len(aside_lens)}  median {aside_lens[len(aside_lens)//2]}w  max {aside_lens[-1]}w')
print('(reference — Wario: ~24% inline, ~15 sensory/1k, ~15 dialogue/1k, aside median ~59)')

flags = []
if inline_a / tot > 0.35:
    flags.append('inline analysis heavy — promote asides to analysis/findings')
if sense / sw * 1000 < 6:
    flags.append('prose may be abstract — show the wish landing')
if abst and sense < abst * 2:
    flags.append('narration using analytical vocabulary — save it for apparatus')
if not e.get('ledger'):
    flags.append('no ledger[] — skimmers have nothing to hold')
if not e.get('findings'):
    flags.append('no findings[] — write the five sentences first next time')
if not (e.get('verdict') or {}).get('body'):
    flags.append('no verdict.body — how does this close?')
if aside_lens and aside_lens[-1] > 100:
    flags.append(f'an aside ran to {aside_lens[-1]}w — promote it')
print()
if flags:
    for f in flags:
        print('  ·', f)
    print('\n  Advisory only. Re-read and decide.')
else:
    print('  Nothing flagged.')
PY
```

---

## 14. Quick reference

```
RANKING      Wario = best article · Imp = best scene · need both
FIRST        make the story physical — show beats, don’t report them
THEN         ~80% story / 20% inline analysis
VOICE        events: close third + ringside asides
             what-ifs: first person Waluigi in the room, arguing out loud
EVENT        ~4,500–6,500     PART     ~350–450, 10–14
WHAT-IF      ~7,000–14,000    CHAPTER  ~600–1,100, 9–15, setup→bill pairs
PARA         ~30–40w          ASIDE    ~40–70 (1/section, 2–4/chapter)
NOTE         analysis / waluigi_note   60–120w
APPARATUS    ledger + findings + verdict          (what-if)
             aftermath + waluigiAssessment        (event, when resolved)
HTML         markdown + blockquotes only — never raw <div>

Quote it. Name the object. Sound it. Body over mood.
Simile that characterises. Institution as physics.
Build the decision machine before the chapters.
Write findings[].t as if they were all that survived.
Leave one callback object in the close.

Imp for the scene. Wario for the filing. Both, or it isn’t finished.
Numbers are aim, not target. If it reads well, it is well.
```

---

## 15. Worked miniature — same beat, three grades

**Report (reject):**
> Wario sold gravity. Things started floating. Waluigi noted this was unwise.

**Imp craft (accept for events — best scene):**
> Wario signed. The pen scratched. A lamp lifted off the side table with the
> mild indignation of a cat being picked up. Coins drifted past at eye level.
>
> *WAH! No thunderclap. The universe lost a fundamental force and it went
> ‘pop.’ Catastrophes should have the decency to announce themselves.*

**Wario craft (accept for What-Ifs — best article):**
> He signed. The pen scratched. There was no thunder — just a very small pop,
> like a jar of pickles opening in the next room, and then the sensation of the
> world becoming slightly less serious about itself.
>
> The lamp went first. It floated up off the side table with the mild
> indignation of a cat being lifted. Waluigi was already holding a doorframe.
>
> *WAH! Note who was holding the doorframe and who was not. One of us
> understood what had just been sold. One of us was doing a little dance in
> the air.*
>
> `analysis`: He did not sell gravity. He sold the floor, the roof, the
> reservoir, the topsoil and the atmosphere, and he received a receipt that
> said GRAVITY on it.
>
> `ledger`: pitch “Who needs gravity anyway?” / reality “everything held down
> stops being held down” / lesson “priced by annoyance, not load-bearing value”
> / verdict “Reset (1/3)”
>
> `findings.t`: The concept he resents is never the concept he is selling.

The third is longer because it does three jobs the first two split across a
whole archive. Inside a single chapter, that is the target.

---

## 16. Why Wario ranks above Imp (full rationale)

Keep this section when arguing standards; skip it when drafting.

| Dimension | Imp | Wario | Edge |
|---|---|---|---|
| Scene prose | Cleanest in the archive | Matches Imp; slightly denser sensory | Tie → Imp on purity |
| Aside discipline | Tighter (median ~54, ~1/part) | Good; a few creep past 100w | **Imp** |
| Part / chapter size | Right-sized throughout | A couple of middle chapters could lose blood | **Imp** |
| Voice difficulty | Ringside (easier) | First-person witness who occupies space | **Wario** (harder, pulled off) |
| Structure | Excellent chronology | Decision engine with setup→bill pairs | **Wario** |
| Re-read value | Re-read for the fight | Re-read for the *theses* | **Wario** |
| Close | Honest mid-siege | Ring in the dust; refuses the dream exit | **Wario** |
| Apparatus | Light (correct for form) | Full ledger / findings / verdict | **Wario** |
| Transferable argument | Colour and jokes | Five sentences you carry out of the room | **Wario** |
| Teaching value | **Hand this first** when prose goes abstract | Hand this second, when scenes exist but the filing doesn’t | both |

**Wario’s three things Imp never attempts — and why they decide the ranking:**

1. **A thesis you can carry out of the room.** Imp has colour. Wario has findings.
2. **A machine, not a sequence.** Each wish is “smarter” and fails worse. The
   structure *is* the argument.
3. **A close that hurts.** Physical residual + refused dream reading. Most
   event endings in the archive underuse this.

**Wario’s real weaknesses (do not copy these):** length without enough cuts;
asides past 100w; 24% inline sitting closer to the danger line; slips into
cleverness when tired. Imp almost never slips.

**Practical rule for new work:**

- Writing a **session event** → Imp is the ceiling. Steal Wario’s callback
  object and, if the event resolves, a real assessment.
- Writing a **What-If** → Wario is the ceiling. Imp is the floor you must clear
  before any apparatus counts.
- Writing **anything else long** → Imp scenes, Wario frame. If you only have
  one, you are not done.
