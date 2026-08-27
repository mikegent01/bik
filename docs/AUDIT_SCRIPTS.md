# Audit Scripts

Six scripts that count what a filing is actually made of. Run them from the
repo root.

They come in three flavours:

- **Throwaway and advisory** — the event and what-if audits. Paste, change the
  id, run. They count sensory words, dialogue, and the story / analysis ratio.
  They cannot tell whether a scene is good, whether a joke lands, or whether
  the argument holds. A filing that flags nothing can still be dull; a filing
  that flags three things can be finished. Read the output, re-read the prose,
  then decide.
- **Committed and advisory** — the readability audit,
  `tools/check-readability.py`. It lives in `tools/` because every new filing
  should pass through it on the way in, but its flags stay judgement calls,
  and the same warning applies: it cannot tell whether the prose is good —
  only what its rhythm is made of.
- **Committed and strict** — `tools/check-exhibits.py`,
  `tools/check-investigations.py` and `tools/check-rolls.py` ask questions with
  right answers — does this class exist, does this id resolve, can a reader
  actually reach this DC — so their failures are bugs, not opinions.

None of them **measures length as a fault**. Nothing here says "too long."
If a number looks high, ask whether the prose is padded — not whether it can be
shortened to hit a band.

| Script | Reads | Use with | Verdict |
|---|---|---|---|
| [Event audit](#event-audit) | `Reputation-Matrix2/data/events.json` | [`STORY_FORMAT_GUIDE.md`](STORY_FORMAT_GUIDE.md) | Advisory |
| [What-If audit](#what-if-audit) | `Reputation-Matrix2/data/whatifs.json` (`doc['whatifs']`) | [`WHATIF_FORMAT_GUIDE.md`](WHATIF_FORMAT_GUIDE.md) | Advisory |
| [Readability audit](#readability-audit) | filings in `events.json`, `whatifs.json`, `articleAnalyses.json`; any draft file | Every craft guide | Advisory (`--strict` optional) |
| [Exhibit audit](#exhibit-audit) | `props.json`, `exhibits.css`, `index.html` | [`SESSION_FILING_PROCESS.md`](SESSION_FILING_PROCESS.md#step-6--exhibits-file-the-paper-the-story-mentions) | **Pass/fail** |
| [Investigation audit](#investigation-audit) | `investigations.json`, `props.json`, `investigations.css`, `index.html` | [`INVESTIGATIONS.md`](INVESTIGATIONS.md) | **Pass/fail** |
| [Roll registry audit](#roll-registry-audit) | `rolls.json`, `props.json`, `investigations.json`, `index.html` | [`INVESTIGATIONS.md`](INVESTIGATIONS.md#rolls-inside-the-document--datarollsjson) | **Pass/fail** |

---

## Event audit

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

---

## What-If audit

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

## Readability audit

The third committed script, and the first you should reach for when a draft
**sounds wrong and you cannot say why**. It answers the question the two
paste-in audits do not: *what does this filing feel like to read out loud?*

```bash
python3 tools/check-readability.py --analysis <id|all>   # article analyses
python3 tools/check-readability.py --event <id|all>      # session events
python3 tools/check-readability.py --whatif <id|all>     # what-ifs
python3 tools/check-readability.py --file draft.md       # any draft, before it is data
```

`--summary` prints a one-line-per-record table for `all` targets. `--strict`
exits 1 if anything is flagged, for authors who want a pre-commit gate. The
default exit is always 0 — flags are advice, and the script is deliberately
**not** part of `tools/check-all.py`'s pass/fail set.

**Why a grade-level formula alone is not enough.** The classic scores reward
the archive's most common failure mode. Flesch Reading Ease loves short
sentences, so a filing made of nothing but four-word verdicts scores "very
easy" while reading like a drumroll that never lands. Canonical case:
`warp_pipe_junction_waluigi_analysis` scores FRE 91.8 — the "easiest" analysis
in the archive — while 48% of its sentences are fragments, its sentence-length
spread is 5.4 words against the reference filings' 7–9, and a third of what it
says arrives as a ≤12-word "X is Y" verdict. Whether that cadence lands as a
drumbeat or as the Auditor-General's deliberate procedure is an editorial
call; the script's job is to surface the rhythm, not to rule on it. It
therefore measures **rhythm as well as difficulty**: sentence-length spread,
the short / mid / long mix, drumbeat runs of consecutive fragments, and
aphorism density, alongside Flesch Reading Ease, Flesch–Kincaid, Gunning Fog,
SMOG, Coleman–Liau and ARI.

**Flags (advisory — re-read and decide):**

| Flag | Fires when | What it means |
|---|---|---|
| machine-gun rhythm | 25+ sentences, length stdev < 6.0, ≥40% fragments (≤6 words) | Monotone staccato. Punches need long sentences to punch against. |
| aphorism machine | >25 short copula verdicts per 1k words | Every sentence a verdict; verdicts stop landing. |
| drumbeat | ≥8 consecutive fragments | A three-sentence burst is an effect; by eight it is a tic. |
| concrete-wall prose | FK > 11.5 or Fog > 13 | The Ebott failure. Split; trade abstract words for physical ones. |
| hard read | Flesch Reading Ease < 45 | Dense, whichever score you prefer. |

Sentences over 45 words are listed verbatim with their lengths — read them
aloud. The per-unit table marks which section (event overview, analysis
section, what-if chapter) trips which check, so the fix is findable without
re-reading the whole filing. Bands are calibrated so the reference filings in
[`ARCHIVE_RANKING.md`](ARCHIVE_RANKING.md) — the Imp Ambush, the Wario Bank,
the Hanging-Tree analysis — pass without a flag. If a future exemplar trips
one, recalibrate the band in the script; do not mangle the exemplar to fit.

Run it once the prose draft exists, and again before the PR. A filing has not
been read until its rhythm report has.

**A flag can be closed as intentional voice.** The Auditor-General cadence is
deliberately procedural — short sentences that present the fact and trust the
reader to feel its weight. On review, the owner ruled that
`warp_pipe_junction_waluigi_analysis` and `battalion_of_six_waluigi_analysis`
keep their staccato: a rhythm flag starts the argument, it does not win it.
If a filing is kept as-is after review, record the ruling in the PR and move
on. The checker makes rhythm a conscious choice; it does not flatten it.

---

## Exhibit audit

Unlike the two above, this one is **committed, not pasted** — and it is **not
advisory**. It checks facts, not taste: whether a prop is well-formed, whether
its `kind` and stamps have styling behind them, whether every class its body
uses exists, whether the ids it links to resolve, and whether it can be reached
at all. Those questions have right answers, so a failure is a bug. Fix it
rather than reading past it.

```bash
python3 tools/check-exhibits.py
```

No id argument — it reads the whole layer at once: `Reputation-Matrix2/data/props.json`,
the `.pd-*` rules in `Reputation-Matrix2/app/styles/systems/exhibits.css`, the
`INVENTORY_SYSTEM` object and `[[prop:…]]` markers in `index.html`, and the id
arrays of every data file an article can live in.

**Errors — exit 1, must be fixed:**

| Check | Why it matters |
|---|---|
| Missing `kind`, `title` or `body` | The card renders empty or untitled. |
| `kind` with no `.pd--<kind>` rule | Falls back to unstyled — a document with no paper. |
| Unknown entry in `stamps[]` | Renders as an invisible or unstyled stamp. |
| `body` uses a `pd-*` class the CSS never defines | A typo that silently does nothing. |
| `body` contains an inline `style=` | Styling belongs in `exhibits.css` where the print and light-mode rules can reach it. |
| `items[]` key not in `INVENTORY_SYSTEM` | Tile grid never appears on the item page. |
| `articles[]` id resolves to no record | Exhibits card never appears on the article. |
| Prop linked to nothing | It exists in the data and can never be opened. |
| `[[prop:<id>]]` with no prop behind it | Reader clicks a link into nothing. |

**Warnings — exit 0, read and judge:**

| Check | What to do |
|---|---|
| `## Addendum:` heading with no addendum prop covering it | Usually means a late correction is described in prose but has no slip to open. File one, or decide the heading is not a document. |

Run it before you commit any filing that names paperwork, and after any edit to
`props.json` or `exhibits.css`. The process step is
[Step 6 of the filing process](SESSION_FILING_PROCESS.md#step-6--exhibits-file-the-paper-the-story-mentions);
the craft standard is
[§9B of the story format guide](STORY_FORMAT_GUIDE.md#9b-exhibits--the-documents-the-story-names).

---

## Investigation audit

The fourth script, and the second committed one. Where the exhibit audit checks
that a *document* is well-formed, this one checks that a **case file** is
well-formed: that its sessions point at real events, that its exhibits point at
real props, that its rolls can actually be passed, and that its leads are
leads rather than quests that snuck back in.

```bash
python3 tools/check-investigations.py
```

No arguments — it reads `Reputation-Matrix2/data/investigations.json` against
`props.json`, `events.json`, `characters.json`, `quests.json`,
`app/styles/systems/investigations.css` and `index.html`.

**Errors — exit 1, must be fixed:**

| Check | Why it matters |
|---|---|
| `sessions[].event` or `relatedEvents[]` names no real event | The "open the session record" link goes nowhere. |
| Exhibit `propId` not in `props.json` | The document area of the reader renders empty. |
| Exhibit `session` with no `sessions[]` row | The exhibit falls into an untitled group at the bottom of the page. |
| Exhibit with no `onRecord` | There is nothing to read before rolling, so the reader is asked to gamble on a blank. |
| Exhibit still carrying `layers[]` | The ladder was replaced by one examination; the data is from the old schema and will not render. |
| Exhibit with no `analysis` | The examination succeeds and reveals nothing. |
| Exhibit with no integer `dc` | There is nothing to roll against. |
| An examination DC above 7 | **Unreachable.** Examination is `d6 + 1`, which caps at 7. There is no study bonus any more — failure is permanent, so an impossible DC is a door with no key. |
| An insight DC outside 2–6 | Insight is a plain `d6`. Above 6 it can never pass; below 2 it can never fail. |
| An inline roll missing its success or failure line | A third of readers land on the empty branch, permanently. |
| Malformed `[[roll:…]]` — not exactly four `\|`-separated fields | Renders as literal brackets in the middle of the prose. Usually a `]` inside the text. |
| A `visual` containing `class=` | Specimen art must be inline styles only, so it travels with the data instead of leaking into a shared stylesheet. |
| `links.events` / `links.characters` id that resolves to nothing | The chip silently vanishes from the reader's footer. |
| A lead with no `why` | It is a quest again. The `why` is the entire difference. |
| A lead citing an exhibit that exists in no file | Dead chip. |
| Duplicate exhibit id inside one file | The second one is unreachable. |
| An exhibit still carrying `docRolls[]` | Document rolls moved to `rolls.json`. Inline ones render nothing. |

**Warnings — exit 0, read and judge:**

| Check | What to do |
|---|---|
| An exhibit with no inline insight rolls | Nothing in its prose can be investigated. Salt three or four through it. |

| An exhibit with no `visual` | The reader gets a filing number instead of an object. Draw it. |
| An examination DC below 2 | It cannot fail, so it is not a roll. |
| `fromQuest` naming no quest in `quests.json` | The "promoted from the board" pill is claiming a provenance that no longer exists. Fix the id or drop the field. |
| A lead citing an exhibit filed in another investigation | Legal, and rendered as a cross-file chip that navigates then opens. Confirm the cross-reference is intentional. |
| `status: active` with no exhibits | Should probably be a stub until the first session is filed. |
| A rule in `investigations.css` that sets padding, radius, grid, flex or a gradient | **Presentation drift.** The site already has a component for that. See [`INVESTIGATIONS.md` § Presentation](INVESTIGATIONS.md#presentation). |
| A `.inv-*` selector `index.html` never uses | Dead CSS from a removed component. Delete it. |

That last pair is the unusual one, and it is the reason this script exists
rather than being folded into the exhibit audit. The investigations system was
rebuilt twice — once because it had grown its own parallel design language, and
once because it had put a single case file behind four tabs. These two checks
are a tripwire on the first regression: the moment someone starts rebuilding
`.card` under a new name, the audit says so.

The second one the script cannot see, so it is written down instead: **a case
file is one continuous document.** See
[`INVESTIGATIONS.md` § Presentation](INVESTIGATIONS.md#presentation).

Run it after any edit to `investigations.json`, and after any edit to the
investigations engine or its stylesheet. The process step is
[Step 7 of the filing process](SESSION_FILING_PROCESS.md#step-7--file-the-session-into-its-investigation);
the authoring standard is [`INVESTIGATIONS.md`](INVESTIGATIONS.md).

---

## Roll registry audit

```bash
python3 tools/check-rolls.py
```

No arguments — it reads `Reputation-Matrix2/data/rolls.json` against
`props.json`, `investigations.json` and `index.html`.

It validates all three target buckets. `props` matches against the prop body;
`items` matches against the item's `description` — and because the item
catalogue is a JS object literal (`const INVENTORY_SYSTEM=…`) inside
`index.html` rather than a data file, the audit parses it out of the page. If
that literal is ever moved into `Reputation-Matrix2/data/`, `_load_items()` is
the only thing that needs changing.

Rolls live apart from the documents they annotate, keyed by target id. That is
what makes them scale, and it is also what makes them quiet when they break:
nothing in `props.json` knows a roll is pointing at it, so a mistyped `match`
renders nothing at all and looks exactly like an exhibit that simply has no
rolls. Everything here exists to make that failure loud.

**Errors — exit 1, must be fixed:**

| Check | Why it matters |
|---|---|
| `match` is not verbatim text in the target's body | The roll never renders. The audit says whether the phrase is absent entirely or present but split by a tag, because those are different mistakes. |
| A target id that is in no `props.json` | The whole entry annotates nothing. |
| A target id that is in no `INVENTORY_SYSTEM.items` | Same, for the items bucket. |
| An item target with no `description` | There is no body to splice rolls into. |
| `items` has entries but `invItemRollHtml` is gone from `index.html` | The bucket renders nowhere. |
| `dc` outside 2–6 | A plain `d6` cannot pass a 7 or fail a 1. |
| Missing `success` or `failure` | A third of readers land on the empty branch, permanently. |
| Missing `id` | The id is the save key. Without one, verdicts cannot persist. |
| Duplicate `id` on one target | Two rolls collide in storage and answer for each other. |
| Two entries sharing a `match` | Only the first occurrence is ever replaced, so the second can never render. |
| `docRolls[]` still present in `investigations.json` | Stale schema; the engine reads the registry. |
| `'rolls'` missing from `DATA_FILES`, or `invRollsFor()` gone | The registry never loads and every document roll silently disappears. |

**Warnings — exit 0, read and judge:**

| Check | What to do |
|---|---|
| A prop with rolls that no exhibit references | Authored work nobody can reach. Wire the prop to an exhibit or drop the rolls. |
| A `match` that occurs more than once | Only the first is used. Lengthen the phrase. |
| A `match` under 12 characters | It will become ambiguous the moment the body is edited. |
| A `success` naming no person, number or date | The rule is that a success pays in case material, not characterisation. Re-read it and decide whether it is a finding or a mood. |
| An entry under `articles` | Reserved and deliberately unused — see [`INVESTIGATIONS.md`](INVESTIGATIONS.md#why-articles-is-empty). Confirm the renderer supports it. |
| An `id` that is not `lower_snake_case` | Cosmetic, but ids are permanent. |
