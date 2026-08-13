# Waluipedia What-If Format Guide

How to write a What-If so it reads like an **eyewitness audit with a ledger**,
not an essay with jokes in it.

**This guide covers non-canon What-If filings**
(`Reputation-Matrix2/data/whatifs.json`) — branches that did not survive, told
in first person by Waluigi, who was *in the room*. Canon session events are a
different form: see **[`STORY_FORMAT_GUIDE.md`](STORY_FORMAT_GUIDE.md)**.

**The prose standard is shared.** §1–3 of the event guide — physical detail,
the seven techniques, the banned-word rule, the 80/20 ratio — apply here
unchanged and are not repeated. Read them first. This document covers only what
is different about a What-If: the decision engine, first-person witness rules,
the apparatus, and the length bands.

---

## Contents

| § | Section | What it answers |
|---:|---|---|
| — | [Quick reference](#quick-reference) | The whole standard on one screen |
| — | [Event or What-If?](#event-or-what-if) | Which form you are in |
| 1 | [The decision engine](#1-the-decision-engine) | Build the machine before the chapters |
| 2 | [Chapter shape](#2-chapter-shape) | Hook → scene → asides → cost → landing → analysis |
| 3 | [Word count](#3-word-count) | Bands — aim, not target |
| 4 | [Voice — first person witness](#4-voice--first-person-witness) | The five rules that stop it becoming monologue |
| 5 | [Asides and the dual layer](#5-asides-and-the-dual-layer) | Inline colour vs. named findings |
| 6 | [Formatting that renders](#6-formatting-that-renders) | Markdown only — never raw `<div>` |
| 7 | [The required shell](#7-the-required-shell) | Every field, in order |
| 8 | [Pacing tells](#8-pacing-tells) | Nine things good filings do |
| 9 | [Pre-flight](#9-pre-flight) | Craft judgement + mechanical pass/fail |

**Audit script:** [`AUDIT_SCRIPTS.md` → What-If audit](AUDIT_SCRIPTS.md#what-if-audit).
**Why the standards are what they are:** [`ARCHIVE_RANKING.md`](ARCHIVE_RANKING.md).

---

## Quick reference

```
RANKING      Wario = best article in the archive — this form's ceiling
FIRST        make the story physical — show beats, don't report them
             (event guide §1–3; identical standard, no exceptions)
THEN         ~80% story / 20% inline analysis
VOICE        first person Waluigi in the room, arguing out loud
             "Waluigi" more often than "I" · wrong inline, precise in apparatus
FILING       ~7,000–14,000   CHAPTER  ~600–1,100, 9–15, setup→bill pairs
PARA         ~30–40w         ASIDE    ~40–70 (2–4 per chapter)
ANALYSIS     chapters[].analysis 60–120w, named finding, after the body
APPARATUS    ledger + findings + verdict — all three, always
HTML         markdown + blockquotes only — never raw <div>, no ## inside body

Build the decision machine before the chapters.
Write findings[].t as if they were all that survived.
Each iteration is smarter and fails worse — that IS the argument.
Leave one callback object in the close. Refuse the dream reading.
Numbers are aim, not target. If it reads well, it is well.
Table names are not character names — invent it, or leave them unnamed.
```

---

## Event or What-If?

| | **Session event** (Imp lineage) | **What-If** (Wario lineage) |
|---|---|---|
| File | `data/events.json` | `data/whatifs.json` |
| Canon | On the record | Explicitly non-canon — a branch that did not survive |
| Spine | Chronological scene parts | Divergence → consequences → close |
| Narration | Close third; Waluigi ringside | First person Waluigi when he was *in the room* |
| Unit | `## Part N` in `description`, or `sections[]` | `chapters[]` with `body` + `analysis` |
| Heavy findings live in | `aftermath`, `waluigiAssessment`, `notableFeatures` | `ledger`, `findings`, `verdict`, chapter `analysis` |
| Typical length | 4,500–6,500 | 7,000–15,000 (split by decision / phase, not panic) |

A What-If is not "an event that didn't happen." It is an **argument** with
scenes in it. If your premise does not produce a sequence of decisions that get
smarter and fail worse, you have an event in the wrong file.

---

## 1. The decision engine (What-If spine)

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

## 2. Chapter shape

### The chapter — ~700–1,000 words

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

---

## 3. Word count

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

**These are aim, not target.** Do not cut story-critical material to land inside
a band — if it cannot be trimmed without sounding worse, do not trim it. The
bands catch bloat; they do not authorise damage.

---

## 4. Voice — first person witness

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

---

## 5. Asides and the dual layer

### The inline aside

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

## 6. Formatting that renders

**Markdown only — `mdToHtml()` escapes raw HTML.**

> Raw `<div class="...">` renders as literal text. Fifteen shipped in Ebott
> before this was caught. Use blockquotes.

| Want | Write |
|---|---|
| Chapter (What-If) | `heading: "II. First Withdrawal — Gravity"` (renderer builds H2) |
| Callout | `> **Protocol 7**` then `> "quoted text"` |
| Emphasis | `**bold**` / `*italic*` |
| Inline finding | `***One line, bolded italic.***` |
| Aside | own paragraph, `*WAH! …*` or `*Waluigi …*` |
| Song / verse | blockquote, one line per line |

**Custom CSS:** only `.prose blockquote`, `.prose h2`, `.wiki-lead`, `.wnote`.
Never invent class names.

**What-Ifs:** `chapters[]` (`id`, `heading`, `phase`, `wish`, `body`,
`analysis`). Do not embed `##` inside `body`.

---

---

## 7. The required shell

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

## 8. Pacing tells (steal deliberately)

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

## 9. Pre-flight

**Craft — judgement, not gates:**

```
· Does the prose show beats, or report them?
· Dialogue where people are talking?
· Could a reader picture each scene?
· Does every aside earn its place?
· Is there a chapter that runs clean with no commentary?
· Does any unit want to be two — or two want to be one?
· pitch / reality / lesson / verdict for each iteration?
· Do findings[].t still work if chapters are hidden?
· Is Waluigi physically in the room, or only narrating?
· Callback object in the close?
· Imp-grade scenes AND Wario-grade frame — or only one?
```

**Mechanical — pass/fail (page breaks otherwise):**

```
□ No raw <div> — blockquotes only
□ participants[] / relatedArticles / related[] ids resolve
□ customCss brace-balanced, no invented class names
□ divergence, premise, chapters[], ledger[], findings[], verdict
□ every chapter has heading + body; analysis title/body if present
□ Asides are their own paragraph, start *WAH! / *Waluigi, end with *
□ No table names — GM/player/handle names never become character names
  (see the naming rule in the [event guide](STORY_FORMAT_GUIDE.md#naming-rule--table-names-are-not-character-names))
```

Run the numbers: [`AUDIT_SCRIPTS.md` → What-If audit](AUDIT_SCRIPTS.md#what-if-audit).
The script is advisory. It cannot tell whether an argument lands.

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

## Where the rest lives

| Document | Covers |
|---|---|
| [`STORY_FORMAT_GUIDE.md`](STORY_FORMAT_GUIDE.md) | Canon session events — **and the shared prose standard (§1–3)** |
| [`SESSION_FILING_PROCESS.md`](SESSION_FILING_PROCESS.md) | The ordered process before and after the prose |
| [`AUDIT_SCRIPTS.md`](AUDIT_SCRIPTS.md) | The two audit scripts |
| [`ARCHIVE_RANKING.md`](ARCHIVE_RANKING.md) | Which filings set the standard, and why |
| [`VERIFICATION_AND_ORGANIZATION.md`](VERIFICATION_AND_ORGANIZATION.md) | Checks, bloat control, where files go |
