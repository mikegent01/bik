# Waluipedia Story Format Guide — Session Events

How to write a session event so it reads like a **story with a commentator**,
not a report with scenes attached.

**This guide covers canon session events** (`Reputation-Matrix2/data/events.json`).
Non-canon What-If filings are a different form with different rules and a
different narrator stance — see **[`WHATIF_FORMAT_GUIDE.md`](WHATIF_FORMAT_GUIDE.md)**.

> **Before you write anything, read
> [`SESSION_FILING_PROCESS.md`](SESSION_FILING_PROCESS.md).** Locations,
> characters, and XP are settled *before* the prose. This guide is craft; that
> one is sequence, and the sequence comes first.

---

## Contents

| § | Section | What it answers |
|---:|---|---|
| — | [Quick reference](#quick-reference) | The whole standard on one screen |
| — | [Which form am I writing?](#which-form-am-i-writing) | Event or What-If |
| 1 | [What "detail" actually means](#1-what-detail-actually-means) | Why one paragraph is a scene and another is minutes |
| 2 | [Seven techniques that make prose physical](#2-seven-techniques-that-make-prose-physical) | The concrete moves |
| 2A | [The banned-word rule](#2a-the-banned-word-rule) | Commentary language never enters story prose |
| 3 | [The ratio](#3-the-ratio) | ~80% story / 20% analysis |
| 4 | [Word count](#4-word-count) | Bands — aim, not target |
| 5 | [Section shape](#5-section-shape) | How a part is built |
| 6 | [Asides and notes](#6-asides-and-notes) | The dual commentary layer |
| 7 | [Voice and point of view](#7-voice-and-point-of-view) | Close third + ringside Waluigi |
| 8 | [Formatting that renders](#8-formatting-that-renders) | Markdown only — never raw `<div>` |
| 9 | [Event apparatus](#9-event-apparatus) | The wrapper fields |
| 9A | [Naming rule](#naming-rule--table-names-are-not-character-names) | Table names are not character names |
| 9B | [Exhibits](#9b-exhibits--the-documents-the-story-names) | The documents the story names — file the paper |
| 10 | [Battle and campaign pages](#10-battle-and-campaign-pages) | The tactical variant |
| 11 | [Pacing tells](#11-pacing-tells) | Nine things good filings do — steal deliberately |
| 12 | [Pre-flight](#12-pre-flight) | Craft judgement + mechanical pass/fail |
| — | [Worked miniature](#worked-miniature--same-beat-three-grades) | The same beat at three grades |

**Audit script:** [`AUDIT_SCRIPTS.md` → Event audit](AUDIT_SCRIPTS.md#event-audit).
**Why the standards are what they are:** [`ARCHIVE_RANKING.md`](ARCHIVE_RANKING.md).

---

## Quick reference

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
EXHIBITS     the prose names paper → props.json files it → [[prop:id|text]]
             written as the ISSUER · Waluigi only in the margin
             every ## Addendum: → an addendum slip: what / who / why late
HTML         markdown + blockquotes only — never raw <div>

Quote it. Name the object. Sound it. Body over mood.
Simile that characterises. Institution as physics.
Build the decision machine before the chapters.
Write findings[].t as if they were all that survived.
Leave one callback object in the close.

Imp for the scene. Wario for the filing. Both, or it isn’t finished.
If the prose says a document exists, the reader must be able to open it.
Numbers are aim, not target. If it reads well, it is well.
Table names are not character names — invent it, or leave them unnamed.
```

---

## Which form am I writing?

| | **Session event** (Imp lineage) | **What-If** (Wario lineage) |
|---|---|---|
| File | `data/events.json` | `data/whatifs.json` |
| Canon | On the record | Explicitly non-canon — a branch that did not survive |
| Spine | Chronological scene parts | Divergence → consequences → close |
| Narration | Close third; Waluigi ringside | First person Waluigi when he was *in the room* |
| Unit | `## Part N` in `description`, or `sections[]` | `chapters[]` with `body` + `analysis` |
| Heavy findings live in | `aftermath`, `waluigiAssessment`, `notableFeatures` | `ledger`, `findings`, `verdict`, chapter `analysis` |
| Typical length | 4,500–6,500 | 7,000–15,000 (split by decision / phase, not panic) |

**The prose standard (§1–3) is identical for both forms.** Everything below it
in this guide is the event form. The What-If machine — decision engine,
ledger, findings, verdict — lives in
[`WHATIF_FORMAT_GUIDE.md`](WHATIF_FORMAT_GUIDE.md); its habits transfer to any
long event.

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
steam, glint, hands, breath, gold, grit, plaster, mustache. The audit script
counts them.

---

## 2A. The banned-word rule

**Commentary language never appears in story prose** — not even when the
narrator is Waluigi, mid-scene.

Banned words:
*implies, implication, assessment, structural, mechanism, classification,
procedural, institutional, doctrine, category, finding, capability,
jurisdiction.*

If a sentence would fit under `findings[]`, it does not belong in the paragraph
where the lamp floats off the table. Waluigi-as-narrator may be petty, specific,
and present. He may not smuggle the verdict into the middle of a scene.

## 3. The ratio

| Article | Body words | Story | Inline analysis |
|---|---:|---:|---:|
| **Imp Ambush** | ~5,400 | **83%** | **17%** |
| **Wario Bank** | ~13,200 | **76%** | **24%** |
| Ebott IV / V | ~6.5–7k | 39–45% | 55–61% |

### Aim around **80 / 20**.

**Past ~30% inline analysis the filing is in trouble; past ~35% it has stopped
being a story.** Ebott IV/V sit at 55–61% — that is the failure this whole
guide exists to prevent, and it did not feel like a failure while it was being
written. Check the number; do not trust the feeling.

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

**These are aim, not target.** A session that ran long makes a filing that runs
long. Never cut story-critical material to land inside a band — if it cannot be
trimmed without sounding worse, do not trim it. Improve it instead.

---

## 5. Section shape

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

---

## 6. Asides and notes

### The Waluigi aside (inline)

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

### Dual-layer commentary

Inline asides are colour. They are not the thesis. Long events should run both
layers; short ones can stop at the inline aside.

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

Camera stays with the scene. If the narration starts explaining what a moment
*means* while the moment is still happening, that sentence belongs to Waluigi —
put it in an aside or a note.

### Free indirect is not a third mode

Do not drift between "Markop watched the window" and "Markop felt a deep unease
about the tactical implications." Close third on a subject, or ringside. Pick
per section.

---

## 8. Formatting that renders

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

---

## 9. Event apparatus

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
| `xpAwards[]` | the awards decided in step 4 of the filing process |
| exhibits (`data/props.json`) | the documents the prose names — filed in step 6, wired back by `articles[]` (§9B) |

Imp ships without a formal assessment because the asides carry the colour and
the outcome is mid-siege. If your event *resolves*, write the assessment. If it
doesn’t, strong `outcome` + `notableFeatures` is enough.

**Long events should steal Wario’s habits even without his schema:** name the
finding, put the thesis at the end, leave a callback object, give the skimmer
something that isn’t a plot summary.

> **The checklist is a menu, not a gate.** Not every event needs every field.
> A short, sharp filing with `summary`, `sections[]`, `participants[]` and
> `outcome` is finished. Adding empty apparatus to satisfy a table makes the
> page longer and worse.

---

### Naming rule — table names are not character names

Session transcripts are full of **table names**: the GM, the players, the
Discord handles they answer to. Those are the people at the table, not the
people in the world. When a transcript says a name, ask which one it is before
you write it into `characters.json`.

```
□ Is this name the person in the fiction, or the person rolling dice?
□ Would it read as an out-of-world intrusion to someone who wasn’t at the table?
□ Does it collide with a real handle, username, or the repo owner’s name?
```

If it is a table name, give the character an in-world name, or leave them
unnamed and refer to them by role — *the hire*, *the charter pilot*, *the boy*.
Unnamed is always safe: it invents no canon and can be named later without a
retcon. A plain first name that happens to also be somebody's table name is
tolerable if it reads naturally in-world; a handle or a full account name is
not, ever.

**Precedent — and the correction.** `mike` came out of the Mount Ebot
transcript as a **GM name** and was briefly kept as a character. That was the
wrong call, and it has been reversed: `mike` no longer appears in the Mount
Ebot narrative. The `characters.json` entry survives as a historical artifact
only. See the rule in the [entry README](../README.md) — **`mike` is a GM name;
ignore it wherever it appears.** Do not repeat the pattern. Invent the name, or
leave the character unnamed.

---

## 9B. Exhibits — the documents the story names

**If the prose says a document exists, file it.** The reader should be able to
open the invoice, read the wire, and see the clerk's initials on the demand.
An archive that only *describes* its paper is a summary of an archive.

**Exhibits are not events-only.** The same `props.json` system serves
**battle records** — set a prop's `articles[]` to the battle id and the
battle article grows a "🗂️ Documents behind this record" section
(`prop_cutting_lane_tally` on the Woodfellow-vs-the-Treant record is the
worked example; see [`BATTLES_GUIDE.md`](BATTLES_GUIDE.md#exhibits--documents-behind-the-record)).

Where this sits in the process: exhibits are **step 6**, immediately after the
prose and before the index —
[`SESSION_FILING_PROCESS.md` → Step 6](SESSION_FILING_PROCESS.md#step-6--exhibits-file-the-paper-the-story-mentions).
Field reference and the full `.pd-*` class list:
[`Reputation-Matrix2/README.md`](../Reputation-Matrix2/README.md#attaching-exhibits-clickable-in-world-documents).
This section is the **craft** standard: what makes the paper good.

### What earns a prop

| File it | Leave it in the prose |
|---|---|
| The paper holds a fact the prose only summarises | It is scenery — a desk with papers on it |
| A later filing will need to point at it as evidence | It is a category, not an object ("some contracts") |
| Institutional voice makes it colder or funnier than narration | It would duplicate the scene beat for beat |
| It is an `## Addendum:` heading — **always** | — |

Three to six exhibits on a long filing is the working band, same as images.
A prop nobody opens is bloat; a filing that promises a document and hides it is
worse.

### Write it as the organisation, not as the archive

The document's job is to be **in character for whoever typed it**. This is the
single most common failure: props written in Waluigi's voice all the way down,
which turns evidence into another aside.

> **Reject** — the archive talking on the bank's letterhead:
> *"This ridiculous invoice demands 4,070 gold for a service Wario never
> actually performed."*
>
> **File** — the bank talking, and the reader drawing the conclusion:
> | Item | Amount |
> |---|---|
> | Consultation, initial | 400 |
> | Consultation, follow-up (unrequested) | 400 |
> | Discretion | 3,000 |
> | **Balance due** | **4,070** |
>
> …and in the margin, small: *"Discretion is not a service. It is a threat with
> a price on it. — W."*

Match the register to the issuer. A quartermaster's wire is clipped and repeats
its own warning. A bank is polite and ruinous. A memorial plank is four names
and no adjectives. A ministry never uses one word where a clause will do.

### The three voices on a page

| Layer | Class | Carries |
|---|---|---|
| The document | `pd-head` `pd-meta` `pd-table` `pd-clause` `pd-total` | What the issuer wrote. Neutral, institutional, complete |
| The margin | `pd-margin` (`--red` for alarm) | Waluigi, in pencil, disagreeing with the page he is showing you |
| The docket | the `note` field | The archive's one-line summary on the tile |

Waluigi appears in the margin and the docket. **Nowhere else.** If his voice is
in the body copy, the exhibit has stopped being evidence.

### Addendums

An addendum is the archive going back to a **closed** file and adding one more
thing, so it is filed as its own slip (`kind: "addendum"`), not buried
mid-article. Every one must answer three questions on the paper itself:

```
□ What was noticed?          the detail, verbatim where possible (pd-quote)
□ Who noticed it?            name them — "Dobbs spotted that, not Wario"
□ Why was it not in the      the honest reason: nobody asked, the company
  original filing?           had dissolved, the placement was challenged
```

Use `pd-late` for the "attached eight years after the ascent" line, `pd-quote`
for verbatim speech, `pd-wah` for the sign-off. The late line is the whole
point of the form: an addendum's meaning is *how long it took to arrive*.

### Prose triggers

The tile grid at the foot of the article is the floor. Put the trigger on the
sentence that makes the promise, so the reader opens the paper at the moment
they want it:

```
the demand was [[prop:prop_sheet41_correction_demand|filed and never answered]]
```

Do not label triggers "click here" or "see exhibit". The link text is part of
the sentence and should read as prose with or without the link.

### Pre-flight

```
□ Every document the prose names is filed, or deliberately skipped
□ Each prop reads as its issuer, not as the archive
□ Waluigi is in the margin and the note only
□ Every ## Addendum: heading has an addendum prop: what / who / why-late
□ At least one inline [[prop:…]] trigger per document, welded to its sentence
□ Body uses only documented .pd-* classes — no inline styles, no new names
□ python3 tools/check-exhibits.py is clean
```

---

## 10. Battle and campaign pages

A session event tells the story. A battle page explains **how the fight moved**.
Use the battle page when a scene has a meaningful tactical question: who held the
line, who was flanked, what objective changed hands, why the retreat or capture
happened, and what the battlefield looked like after the last blow.

### Required battle shell

```text
id
name
date
location
type
result
belligerents: {attackers, defenders}
casualties: {attackers, defenders}
summary
description
participants[]
notableFeatures[]
relatedArticles[]
image / imageCaption (optional)
```

### The tactical sequence

A full battle record should normally move through these beats:

1. **Operational clock** — date, phase, and any exact time available. If the
   plane's clock is unreliable, say so; never manufacture a minute.
2. **Objectives** — what each side wanted, and what each side believed the other
   wanted. A retrieval mission, a rescue, and a surrender are not interchangeable.
3. **Force composition** — who was actually fighting, who was supporting, who was
   wounded, and who was not present. Do not turn every participant into a
   commander.
4. **Terrain and sightlines** — doors, windows, rooms, elevation, fog, webs,
   force fields, invisible enemies, or any object that changed movement.
5. **First tactical failure** — friendly fire, a breached flank, lost visibility,
   a failed spell, or a wrong assumption. Name the cost without flattening the
   character into the mistake.
6. **Adaptation** — identify the response: healing, callouts, shield work,
   casualty evacuation, a smite, a door, a decoy, or a change in formation.
7. **Turning point** — the exact action that changed the balance. Kills are not
   automatically turning points; preserving an objective or opening an exit may
   matter more.
8. **Result by objective** — list each objective separately. One side can lose a
   person, retain a book, lose two artifacts, and still win the immediate room.
9. **Carry-forward** — what the next battle inherits: wounds, stolen objects,
   open routes, surviving prisoners, new intelligence, or a changed relationship.

### Battle truth rules

- **Do not call an individual capture a whole-party surrender.** State who was
  captured and who kept fighting.
- **Track objects by custody.** “The imps took the Black Crystal and Mirror” is
  not the same as “the imps took the book.” Name the holder of every important
  object at the end of the page.
- **Separate tactical victory from strategic victory.** Markop retaining the
  book and disbursing the imps can be a tactical victory even while the party
  loses two portal artifacts and Remi is captured.
- **Put XP in the native field.** If an event or battle awards XP, use
  `xpAwards[]` rows with `xpKey`, `articleId`, `name`, `cat`, `xp`, `title`,
  `desc`, `date`, and `dateSort`. A prose XP table is useful for readers, but
  the renderer reads `xpAwards[]`.
- **Do not silently mutate the ledger.** Mark preview awards as pending until
  the table confirms them, then file them in the authoritative XP ledger.
- **Link the battle both ways.** Add the battle id to the event's `keyBattles`
  and add the event id to the battle's `relatedArticles`.
- **Use a non-graphic image when it clarifies terrain or aftermath.** An image
  should show the room, formation, object, or atmosphere—not invent a new
  character or contradict custody.

### Worked tactical distinction

```text
Event: The party is attacked by invisible imps and Remi is captured.

Battle page result:
  Markop retains the Archivist's book and disburses the remaining imps.
  The Toads do not surrender as a whole. The imps take the Black Crystal and
  Mirror of True Reflection. Remi is captured, then escapes Kyrn's facility
  with Mossy.

Bad shorthand: “The party surrendered and the imps took the book.”
Why it fails: it erases Markop's objective, the Toads' continued resistance,
and the difference between the book and the two artifacts.
```

A battle page is finished when a reader can answer **who moved, where they
moved, what they wanted, what they lost, what they retained, and why the next
scene has a different tactical shape**.

---

## 11. Pacing tells

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

## 12. Pre-flight

**Craft — judgement, not gates:**

```
· Does the prose show beats, or report them?
· Dialogue where people are talking?
· Could a reader picture each scene?
· Does every aside earn its place?
· Is there a unit that runs clean with no commentary?
· Does any unit want to be two — or two want to be one?
· Callback object in the close?
· Imp-grade scenes AND Wario-grade frame — or only one?
```

**Mechanical — pass/fail (page breaks otherwise):**

```
□ No raw <div> — blockquotes only
□ participants[] / relatedArticles / related[] ids resolve
□ customCss brace-balanced, no invented class names
□ Events (resolved): aftermath + waluigiAssessment present
□ Asides are their own paragraph, start *WAH! / *Waluigi, end with *
□ No table names — GM/player/handle names never become character names (§9A)
□ xpAwards[] present if XP was earned; every xpKey verified against XP_SUMMARY
□ Every document the prose names is filed in props.json, or skipped on purpose (§9B)
□ Every ## Addendum: heading has an addendum prop; tools/check-exhibits.py clean
□ Event added to the home feed, SITE_UPDATES, and the RNN pending list
```

Run the numbers: [`AUDIT_SCRIPTS.md` → Event audit](AUDIT_SCRIPTS.md#event-audit).
The script is advisory. It cannot tell whether a scene is good.

---

## Worked miniature — same beat, three grades

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

## Where the rest lives

| Document | Covers |
|---|---|
| [`SESSION_FILING_PROCESS.md`](SESSION_FILING_PROCESS.md) | The ordered process before and after the prose |
| [`WHATIF_FORMAT_GUIDE.md`](WHATIF_FORMAT_GUIDE.md) | Non-canon What-If filings — decision engine, ledger, findings, verdict |
| [`AUDIT_SCRIPTS.md`](AUDIT_SCRIPTS.md) | The two audit scripts |
| [`ARCHIVE_RANKING.md`](ARCHIVE_RANKING.md) | Which filings set the standard, and why |
| [`RNN_BROADCAST_GUIDE.md`](RNN_BROADCAST_GUIDE.md) | Turning filed events into broadcasts |
| [`VERIFICATION_AND_ORGANIZATION.md`](VERIFICATION_AND_ORGANIZATION.md) | Checks, bloat control, where files go |
