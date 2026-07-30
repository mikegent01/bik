# Waluipedia Story Format Guide

How to write a session event so it reads like a **story with a commentator**,
not a report with scenes attached.

Every number here was measured from
[`the_imp_ambush_of_harvestide_29`](data/events.json) — the article the archive
agrees reads best — and checked against the Mount Ebott filings, which do not.

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

### Target: **80 / 20.** Hard ceiling 25% analysis.

But note the order of operations: **§1–3 first.** If you cut asides without
making the story physical, you get a shorter report, not a better story.

---

## 5. Word count

| Scope | Target | Hard limits |
|---|---:|---|
| **Whole event** | **4,500–6,500** | never past 7,500 |
| Section | **350–450** | 250 floor, 700 ceiling |
| Sections per event | **10–14** | 8–16 |
| Story paragraph | **30–40** | 3–6 sentences |
| Waluigi aside | **40–70** | **90 absolute max** |
| Analysis per section | **≤ 120 total** | one aside, or two short |

**Past 7,500 words, split it.** The Ebott material should have been three
parts, not two.

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

## 9. Pre-flight checklist

```
□ Sensory ≥ 8 per 1k story words      ← the one that matters
□ Sensory:abstract at least 3:1
□ Dialogue ~1 quote per 110 words
□ Story ≥ 75%, analysis ≤ 25%
□ Total 4,500–6,500 words (split past 7,500)
□ Sections 350–450 words
□ No aside over 90 words
□ ≥ 1 section with no analysis at all
□ Most asides in the back half of their section
□ No raw <div> — blockquotes only
□ aftermath + waluigiAssessment present
□ participants[] / relatedArticles ids all resolve
□ customCss brace-balanced, no invented classes
```

**Run before shipping:**

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
ok = True
if analysis / tot > 0.25:
    print('FAIL  too much analysis — move findings to waluigiAssessment'); ok = False
if sense / sw * 1000 < 8:
    print('FAIL  prose too abstract — add sensory detail, quote the dialogue'); ok = False
if sense < abst * 3:
    print('FAIL  narrating conclusions instead of scenes'); ok = False
print('PASS' if ok else '')
PY
```

---

## 10. Quick reference

```
FIRST      make the story physical — sensory ≥ 8/1k, sensory:abstract ≥ 3:1
THEN       ratio 80% story / 20% analysis      ceiling 25%
EVENT      4,500–6,500 words                   split past 7,500
SECTION    350–450 words                       10–14 per event
PARA       30–40 words, one concrete anchor each
ASIDE      40–70 words, 1 per section          90 max
DIALOGUE   ~1 quote per 110 words
LONG-FORM  waluigiAssessment (300–500) + aftermath (150–250)
HTML       markdown + blockquotes only, never raw <div>

Quote it. Name the object. Sound it. Body over mood.
```
