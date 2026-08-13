# Audit Scripts

Four scripts that count what a filing is actually made of. Run them from the
repo root.

The first two are **throwaway and advisory** — paste, change the id, run. They
count sensory words, dialogue, and the story / analysis ratio. They cannot tell
whether a scene is good, whether a joke lands, or whether the argument holds. A
filing that flags nothing can still be dull; a filing that flags three things
can be finished. Read the output, re-read the prose, then decide.

They also **do not measure length as a fault**. Nothing here says "too long."
If a number looks high, ask whether the prose is padded — not whether it can be
shortened to hit a band.

The last two are **committed and strict**. `tools/check-exhibits.py` and
`tools/check-investigations.py` ask questions with right answers — does this
class exist, does this id resolve, can a reader actually reach this DC — so
their failures are bugs, not opinions.

| Script | Reads | Use with | Verdict |
|---|---|---|---|
| [Event audit](#event-audit) | `Reputation-Matrix2/data/events.json` | [`STORY_FORMAT_GUIDE.md`](STORY_FORMAT_GUIDE.md) | Advisory |
| [What-If audit](#what-if-audit) | `Reputation-Matrix2/data/whatifs.json` (`doc['whatifs']`) | [`WHATIF_FORMAT_GUIDE.md`](WHATIF_FORMAT_GUIDE.md) | Advisory |
| [Exhibit audit](#exhibit-audit) | `props.json`, `exhibits.css`, `index.html` | [`SESSION_FILING_PROCESS.md`](SESSION_FILING_PROCESS.md#step-6--exhibits-file-the-paper-the-story-mentions) | **Pass/fail** |
| [Investigation audit](#investigation-audit) | `investigations.json`, `props.json`, `investigations.css`, `index.html` | [`INVESTIGATIONS.md`](INVESTIGATIONS.md) | **Pass/fail** |

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
real props, that its ladders can actually be climbed, and that its leads are
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
| Exhibit with no layers, or layer with no title | Nothing to examine, or an unlocked layer with a blank heading. |
| DCs not ascending | The reader hits the hardest wall first and stops. |
| A DC above 10 | **Unreachable.** `d6 + 1` caps at 7 and the study bonus adds at most +3. A DC 11 layer is a door with no key. |
| Malformed `[[roll:…]]` — not exactly four `\|`-separated fields | Renders as literal brackets in the middle of the prose. |
| `links.events` / `links.characters` id that resolves to nothing | The chip silently vanishes from the reader's footer. |
| A lead with no `why` | It is a quest again. The `why` is the entire difference. |
| A lead citing an exhibit that exists in no file | Dead chip. |
| Duplicate exhibit id inside one file | The second one is unreachable. |

**Warnings — exit 0, read and judge:**

| Check | What to do |
|---|---|
| XP not ascending with DC | Usually a typo, occasionally deliberate — a cheap layer that happens to be hard. Confirm you meant it. |
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
