# Audit Scripts

Two throwaway scripts that count what a filing is actually made of. Paste,
change the id, run from the repo root.

**They are advisory.** They count sensory words, dialogue, and the story /
analysis ratio. They cannot tell whether a scene is good, whether a joke lands,
or whether the argument holds. A filing that flags nothing can still be dull; a
filing that flags three things can be finished. Read the output, re-read the
prose, then decide.

They also **do not measure length as a fault**. Nothing here says "too long."
If a number looks high, ask whether the prose is padded — not whether it can be
shortened to hit a band.

| Script | Reads | Use with |
|---|---|---|
| [Event audit](#event-audit) | `Reputation-Matrix2/data/events.json` | [`STORY_FORMAT_GUIDE.md`](STORY_FORMAT_GUIDE.md) |
| [What-If audit](#what-if-audit) | `Reputation-Matrix2/data/whatifs.json` (`doc['whatifs']`) | [`WHATIF_FORMAT_GUIDE.md`](WHATIF_FORMAT_GUIDE.md) |

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
