# Waluipedia Story Format Guide

How to write a session event so it reads like a **story with a commentator**,
not a report with scenes attached.

Every number here was measured from
[`the_imp_ambush_of_harvestide_29`](data/events.json) — the article the archive
agrees reads best — and checked against the Mount Ebott filings, which do not.

> **Read these as aim, not as gates.** The numbers exist to catch a draft that
> has drifted badly — a filing that is 60% commentary, or narration with nothing
> physical in it. They are not a score to optimise. A section that runs long
> because the scene needs it is fine. A chapter with no aside is fine. If the
> prose reads well and the measurements disagree, **the prose wins** — go and
> fix the guide instead.
>
> Chasing an exact ratio produces padding, which is its own failure mode.

---

## 1. The finding that matters most

The obvious diagnosis is that Ebott has too much Waluigi. That is true, but it
is the *smaller* problem. Here is the real one:

| Measured across story prose only | Imp | Ebott IV |
|---|---:|---:|
| Sensory words per 1,000 | **10.9** | 1.5 |
| Abstract words per 1,000 | **0.2** | 4.4 |
| **Sensory : abstract** | **49 : 1** | **0.3 : 1** |

The Ebott narration is *itself analysis* — it just isn't in italics. Strip the
asides and what's left still says *implies*, *assessment*, *mechanism*,
*classification*. Nothing in it can be seen, heard or touched.

> **The Imp article doesn't win because Waluigi says less. It wins because the
> story is made of physical detail, and Waluigi's commentary has something
> concrete to bounce off.**

Analysis on top of vivid scene = commentary.
Analysis on top of summary = an essay with jokes in it.

This is why the Ebott filings feel thin despite being longer. **Fix the story
prose first; the ratio follows.**

---

## 2. What "detail" actually means

The Imp article opens:

> Markop's large, dark equine eyes snapped open.
>
> The air inside the bedroom was chilly, but it held an uncharacteristic warmth
> and coziness that was completely missing from the rest of the Shadow Estate…
> its tall chimney gently released a spire of wispy gray smoke, but inside, the
> space was dominated by rich yellows and greens.
>
> Through his heavy, **dust-crusted eyelashes**, Markop realized what had
> severed his slumber. It was a tapping. A sharp, rhythmic, fingernail-on-glass
> ***tap, tap, tap*** echoing from the **leaded pane** of the bedroom window.

Note what's doing the work: *dust-crusted*, *leaded pane*, *wispy gray smoke*,
*tap, tap, tap*. A reader can picture every one. Then Waluigi lands on it and
the joke has a surface to hit.

Compare Ebott, same job:

> Koffin-K entered the Snowdin station the way he enters everything, fedora
> tilted, at volume… **Lanky pointed out, quietly, that nobody was there. Bulky
> nodded.** Their boss kept declaiming at the empty benches.

That's a *minutes entry*. Nobody speaks. Nothing is seen. Rewritten properly:

> The door banged off its frame. Koffin-K stopped three paces in, fedora
> tipped, and filled his lungs.
>
> **"I AM KOFFIN-K! FUTURE CONDUCTOR OF THIS TRAIN AND SAVIOR OF SNOWDIN!"**
>
> The words went up into the rafters and came back thinner. Somewhere a radiator
> ticked. The clerk turned a page.
>
> **"Boss,"** Lanky said. **"There's… nobody here."**
>
> Bulky nodded at the empty benches. Four rows, all of them, dusted with grit
> blown in under the door.

Same events, same length. One is a report; the other is a scene.

---

## 3. The five things that make prose physical

Use these instead of narrating conclusions:

| Technique | Instead of | Write |
|---|---|---|
| **Quote it** | "Lanky pointed out nobody was there" | **"Boss. There's… nobody here."** |
| **Name the object** | "the window" | "the leaded pane" |
| **Sound it** | "a tapping noise" | "*tap, tap, tap*" |
| **Body over mood** | "he was furious" | "his eye twitched; his fists closed" |
| **One concrete anchor per paragraph** | "the station was empty" | "grit blown in under the door" |

**Target ≥ 8 sensory words per 1,000 story words.** Cold, dust, echo, creak,
steam, glint, hands, breath. The audit in §9 counts them for you.

**Ban these from story prose** (they belong to Waluigi, not the narrator):
*implies, implication, assessment, structural, mechanism, classification,
procedural, institutional, doctrine, category, finding, capability,
jurisdiction.*

---

## 4. The ratio

| Article | Words | Story | Analysis |
|---|---:|---:|---:|
| **Imp Ambush** | 5,583 | **83%** | **17%** |
| Ebott Part IV | 7,014 | 39% | 61% |
| Ebott Part V | 6,430 | 45% | 55% |

### Aim around **80 / 20**. Past roughly 35% analysis, something has gone wrong.

Between those, use judgement. The Imp article sits at 17% and one of the Ebott
rewrites landed at 25%; both read fine.

Note the order of operations: **§1–3 first.** If you cut asides without making
the story physical you get a shorter report, not a better story — and if you
*add* commentary to hit a number you get padding.

---

## 5. Word count

| Scope | Typical | Worth a second look past |
|---|---:|---|
| **Whole event** | **4,500–6,500** | 7,500 — consider splitting |
| Section | **350–450** | under 250 or over 700 |
| Sections per event | **10–14** | 8–16 |
| Story paragraph | **30–40** | 3–6 sentences |
| Waluigi aside | **40–70** | 90 — probably wants to be a note |
| Analysis per section | **~120 total** | one aside, or two short |

**Past 7,500 words, think about splitting.** The Ebott material probably
wanted to be three parts rather than two.

> **Second biggest error.** Ebott's section-closing notes ran a **175-word
> median, 242 max** — over 3× the Imp's 54-word asides. An aside needing 175
> words is an essay in an aside's clothes. Move it to §7.

---

## 6. Section shape

Aim ~390 words:

```
1. Scene-setter        1 short para — place, and one physical detail
2. Action / dialogue   4–8 paras — quoted speech, bodies, objects
3. Turn                the beat that costs someone something
4. Waluigi aside       1 aside, 40–70 words          ← usually here
5. Landing             1–2 paras, consequence, next hook
```

**Put the aside near the end.** In the Imp article most land in the last third
(`7/8`, `8/11`, `10/11`, `11/12`, `15/16`). Waluigi reacts to a beat; he never
previews it.

**Some sections get no aside at all.** Imp Part Four has zero. Let action and
dialogue run clean — **roughly 1 section in 6 should carry no commentary.**

---

## 7. The Waluigi aside

Own paragraph, single asterisks, opening `*WAH!` or `*Waluigi`. The site's
`isWaluigiAside()` detector styles these as purple `em.walu-aside` callouts
automatically.

```markdown
*WAH! Custodial extortion! The ultimate high-stakes chore list! 'Clean my
basement or I will murder your entire household!' Waluigi has used this exact
negotiation tactic on Wario several times, though usually over the clay courts.*
```

**40–70 words. One per section. Ninety is the wall.**

Each aside does exactly one job:

| Type | Does |
|---|---|
| **The joke** | Punctures the moment |
| **The catch** | Names what the party missed, in one sentence |
| **The correction** | Flags a claim that doesn't survive the record |
| **The tell** | Points at a detail that pays off later |

Bad asides explain the scene back to the reader, run three paragraphs of
institutional theory, arrive before their beat, or stack with no story between.

**Long analysis is welcome — just not mid-scene:**

| Field | Use | Words |
|---|---|---:|
| `sections[].waluigi_note` | One named finding closing a section. Optional. | ≤ 120 |
| `aftermath` | Standing, personnel, exposure, materiel | 150–250 |
| `waluigiAssessment` | The verdict. Numbered findings, one recommendation. | 300–500 |
| `notableFeatures` | One line each | 8–12 items |

Moving a finding here *raises* your story ratio — these count as apparatus, not
inline commentary.

---

## 8. Formatting that renders

**Markdown only — `mdToHtml()` escapes raw HTML.**

> Raw `<div class="...">` renders as literal `&lt;div class=…` text. Fifteen
> shipped in the Ebott events before this was caught. Use blockquotes.

| Want | Write |
|---|---|
| Section | `## Part Three: The Nine-Man Army` |
| Callout box | `> **Protocol 7**` then `> "quoted text"` |
| Emphasis | `**bold**` / `*italic*` |
| Waluigi finding | `***One line, bolded italic.***` |
| Song / verse | blockquote, one line per line |

**Custom CSS:** target `.prose blockquote`, `.prose h2`, `.wiki-lead`, `.wnote`.
Never invent class names — nothing can apply them.

**Use `sections[]`** (`name`, `icon`, `overview`, optional `waluigi_note`) — the
renderer generates H2 anchors and a sidebar TOC for free.

---

## 9. What-if articles: build the branch before you build the spectacle

The strongest what-if pieces combine two complementary strengths:

- **The Imp article's scene craft:** a small, legible physical problem, rendered through bodies, objects, sound and specific places.
- **The Wario article's counterfactual architecture:** a clear premise, numbered turns, escalating consequences, resets or decision points that change the shape of the next chapter, and a final ledger that lets the reader see what the branch actually proved.

Do not make the story choose between those strengths. The spectacle only matters when the reader can follow the physical chain that produced it; the chain only matters when each turn changes what is possible next.

### Start with one divergence

State the branch point in one sentence before drafting:

```text
Canon fact: what happened in the archive.
Divergence: the one fact that changes.
Constraint: what remains unchanged.
Question: what the branch is testing.
```

A good hypothetical changes one decision, presence, object, order, or disclosure. It does not quietly change the whole world to make the ending happen. If the divergence is large, identify the smaller hinge inside it—the door that opens, the form that is signed, the person who arrives thirty seconds earlier.

### Give every turn a visible consequence

For each chapter or section, track four beats:

1. **Intent:** what the character thinks they are doing.
2. **Action:** what they physically do or say.
3. **Immediate result:** what changes in the room, body, institution or relationship.
4. **Deferred cost:** what this result makes possible or impossible later.

The Wario pattern is useful here: each withdrawal is attractive on its own terms, works briefly, then exposes a larger cost. The reset button is not just a joke; it changes behaviour by making failure cheap, and later becomes part of the failure. That is escalation with causality, not a sequence of random disasters.

Use a branch ledger while drafting:

| Turn | Character's pitch | What actually changes | Cost / new constraint | Reversible? |
|---|---|---|---|---|
| 01 | What they believe they are asking for | The concrete effect | The next problem created | yes/no |

If two turns have the same consequence, combine them or make the second alter the rules. If a consequence appears without a preceding choice, add the missing scene.

### Keep the scale climbing, not just the volume

A reliable escalation moves through different scales:

```text
object / body → room → street or community → institution → meaning / memory
```

The Imp article makes a single room vivid before the commentary widens it. The Wario article earns cosmology by showing a lamp float, a river leave, a worker stop, and paperwork multiply. Follow that order. Do not open with the thesis, explain the apocalypse, and call the reader back for scenery.

At every escalation, return to a witness and an object. A ringing phone, a cracked cup, a hand on a doorframe, a form that will not end: the concrete anchor keeps a large counterfactual emotionally legible.

### Use the narrator as a participant, not a second essay

Waluigi's voice should have a job in the scene. Let him notice, interrupt, misjudge, take notes, make a joke, withhold a name, or admit that he is afraid. His aside can interpret the beat, but it should also reveal what the beat costs him. The best Wario asides are funny because Waluigi is physically present and professionally offended; the best Imp passages work because the aside lands on a detail the reader has just seen.

For serious turns, let the voice change rather than making every aside louder. A joke can fail. A correction can be filed against Waluigi himself. One quiet aside after a body, a silence or an empty room can carry more weight than three paragraphs of shouting.

### Design the ending before the middle

A what-if ending should answer three separate questions:

- **What changed permanently?**
- **What did the protagonist misunderstand or fail to control?**
- **Who pays the cost, especially if they were not in the room?**

The ending does not need to restore canon, and it should not use a twist to erase consequences. A reset may restore memory or paperwork, but the article still needs a residue: a ring in dust, a changed habit, a surviving institution, a witness who knows, or a choice that cannot be unmade. End on a specific image or action, then put the general finding in the verdict/ledger.

### Make the apparatus earn its place

Use the Wario-style extras when they clarify the branch rather than duplicate it:

- `epigraph`: the filing's contradiction or emotional promise, not a synopsis.
- `ledger`: one row per major turn; record pitch, reality, lesson, lifespan and verdict.
- `findings`: 4–7 transferable claims, each stated in one sharp sentence and supported by a concrete detail.
- `verdict`: acknowledge both the real gain and the real harm; do not force a clean moral if the branch does not supply one.
- `related`: link only to entities or articles that the story actually changes or invokes.

The apparatus should let a reader audit the story after reading it. It must not replace the story. If a ledger row contains the best scene, move that scene back into `chapters[].body`.

---

## 10. Pre-flight

Two lists. The first is judgement — read the draft and ask. The second is
mechanical, and those ones really are pass/fail because the page breaks
otherwise.

**Craft — worth checking, not worth forcing:**

```
· Does the prose show beats, or report them?
· Is there dialogue where people are talking?
· Could a reader picture each scene?
· Does every aside earn its place, or is one explaining the scene back?
· Is there a section that could run clean with no commentary at all?
· Does any section feel like it should be two, or two like one?
```

**Mechanical — these must hold:**

```
□ No raw <div> — blockquotes only (they render as literal text otherwise)
□ participants[] / relatedArticles ids all resolve
□ customCss brace-balanced, no invented class names
□ aftermath + waluigiAssessment present
□ What-if: divergence is explicit and chapters have a visible causal order
□ What-if: ledger / findings agree with the story; no apparatus-only consequences
```

**Then run the audit for a second opinion:**

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
sw = len(s.split())
story = sw + extra
tot = story + analysis

SENSE = r'\b(cold|chill|warm|heat|damp|dust|smell|smelled|reek|echo|hiss|creak|clack|thud|rattle|scrape|glint|flicker|gray|grey|snow|steam|breath|hand|hands|eyes|fingers|boots|air|grit|rust)\b'
ABSTRACT = r'\b(implies|implication|assessment|structural|mechanism|classification|procedural|institution\w*|doctrine|category|finding|capability|jurisdiction)\b'
sense = len(re.findall(SENSE, s, re.I))
abst = len(re.findall(ABSTRACT, s, re.I))
dlg = len(re.findall(r'"[^"]{10,}"', s))

print(f'{tot} words — {story/tot*100:.0f}% story / {analysis/tot*100:.0f}% analysis')
print(f'sensory {sense/sw*1000:.1f}/1k   abstract {abst/sw*1000:.1f}/1k   ratio {sense/max(1,abst):.1f}:1')
print(f'dialogue {dlg/sw*1000:.1f}/1k')
print(f'(reference — Imp: 17% analysis, 11.6 sensory/1k, 52:1, 11.6 dialogue/1k)')

# Advisory only. These are prompts to re-read a section, not failures.
notes = []
if analysis / tot > 0.35:
    notes.append('analysis is running heavy — consider moving a finding to waluigiAssessment')
if sense / sw * 1000 < 6:
    notes.append('prose may be abstract — check whether beats are reported rather than shown')
if abst and sense < abst * 2:
    notes.append('narration is using analytical vocabulary — that language belongs to Waluigi')
if notes:
    print()
    for n in notes:
        print('  ·', n)
    print('\n  None of these are errors. Re-read the flagged sections and decide.')
else:
    print('\n  Nothing flagged.')
PY
```

---

## 11. Quick reference

```
FIRST      make the story physical — show beats, don't report them
THEN       roughly 80% story / 20% analysis
EVENT      ~4,500–6,500 words        SECTION   ~350–450, 10–14 per event
PARA       ~30–40 words              ASIDE     ~40–70, about one per section
LONG-FORM  waluigiAssessment + aftermath carry the heavy findings
HTML       markdown + blockquotes only, never raw <div>   ← this one is hard

Quote it. Name the object. Sound it. Body over mood.
Numbers are aim, not target. If it reads well, it is well.
```
