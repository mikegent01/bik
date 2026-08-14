#!/usr/bin/env python3
"""Investigation audit — run before calling a session filing finished.

Checks the investigations layer end to end:

  1. Every session's `event`, and every `relatedEvents` id, resolves in
     events.json.
  2. Every exhibit's `propId` exists in props.json, its `session` has a
     matching sessions[] row, and it has an `onRecord` line to read before
     anybody rolls.
  3. Layer DCs ascend, and none exceeds 10 — d6+1 caps at 7, and the study
     bonus adds at most +3, so DC 11 is a layer no reader can ever open.
  4. Every layer has a title; every [[roll:...]] span has all four fields.
  5. Every links.events / links.characters id resolves.
  6. Every lead has a `why` — a lead without one is a quest wearing a hat —
     and every exhibit it cites exists somewhere.
  7. Presentation drift: investigations.css must not grow layout rules or
     dead selectors. An investigation page is built from site components
     (see docs/INVESTIGATIONS.md § Presentation); the only CSS that belongs
     here is the examination accordion, the dice, the pips and the inline
     rolls. This is the check that stops the system from quietly becoming a
     separate website again.

Usage:  python3 tools/check-investigations.py
Exit 0 = clean, 1 = at least one error.
"""

import json, re, collections

INV  = json.load(open('Reputation-Matrix2/data/investigations.json'))['investigations']
PROPDATA = json.load(open('Reputation-Matrix2/data/props.json'))['props']
PROPS= set(PROPDATA)
HTML = open('index.html', encoding='utf-8').read()
CSS  = open('Reputation-Matrix2/app/styles/systems/investigations.css', encoding='utf-8').read()

def ids(path, key):
    """Data files are inconsistent: some are a bare list, some {key: [...]},
    some {key: {id: {...}}}. Accept all three."""
    try: doc = json.load(open(path))
    except Exception: return set()
    rows = doc if isinstance(doc, list) else doc.get(key, doc)
    if isinstance(rows, dict): return {k for k in rows if not k.startswith('_')}
    return {r['id'] for r in rows if isinstance(r, dict) and 'id' in r}

EVENTS = ids('Reputation-Matrix2/data/events.json','events')
CHARS  = ids('Reputation-Matrix2/data/characters.json','characters')
QUESTS = ids('Reputation-Matrix2/data/quests.json','quests')

ALL_EX = {ex['id']: iv['id'] for iv in INV for ex in iv.get('exhibits', [])}

err, warn = [], []
for iv in INV:
    tag = iv['id']
    sess = {s['id'] for s in iv.get('sessions', [])}
    for s in iv.get('sessions', []):
        if s.get('event') and s['event'] not in EVENTS:
            err.append(f"{tag}: session {s['id']} → unknown event {s['event']}")
    for e in iv.get('relatedEvents', []):
        if e not in EVENTS: err.append(f"{tag}: relatedEvents → unknown event {e}")
    seen = collections.Counter()
    for ex in iv.get('exhibits', []):
        seen[ex['id']] += 1
        if ex.get('propId') and ex['propId'] not in PROPS:
            err.append(f"{tag}/{ex['id']}: propId {ex['propId']} not in props.json")
        if ex.get('session') and ex['session'] not in sess:
            err.append(f"{tag}/{ex['id']}: session {ex['session']} has no sessions[] row")
        if not ex.get('onRecord'):
            err.append(f"{tag}/{ex['id']}: no onRecord — nothing to read before rolling")
        if 'layers' in ex:
            err.append(f"{tag}/{ex['id']}: still has layers[] — the ladder was replaced by one examination")
        if not ex.get('analysis'):
            err.append(f"{tag}/{ex['id']}: no analysis — nothing for the examination to reveal")
        dc = ex.get('dc')
        if not isinstance(dc, int):
            err.append(f"{tag}/{ex['id']}: no integer dc for the examination")
        elif dc > 7:
            err.append(f"{tag}/{ex['id']}: DC {dc} unreachable — the examination is d6+1, which caps at 7")
        elif dc < 2:
            warn.append(f"{tag}/{ex['id']}: DC {dc} cannot fail — an automatic roll is not a roll")
        if 'xp' in ex or any('xp' in str(k) for k in ()):
            err.append(f"{tag}/{ex['id']}: exhibits do not award XP — rolling buys information, not levels")
        rolls = 0
        for field in ('onRecord', 'analysis'):
            for m in re.findall(r'\[\[roll:([^\]]*)\]\]', ex.get(field, '') or ''):
                rolls += 1
                parts = m.split('|')
                if len(parts) != 4:
                    err.append(f"{tag}/{ex['id']}/{field}: malformed inline roll [[roll:{m}]]")
                    continue
                try: rdc = int(parts[0])
                except ValueError:
                    err.append(f"{tag}/{ex['id']}/{field}: inline roll DC {parts[0]!r} is not a number")
                    continue
                if not 2 <= rdc <= 6:
                    err.append(f"{tag}/{ex['id']}/{field}: inline roll DC {rdc} out of range — insight is a plain d6")
                if not parts[2].strip() or not parts[3].strip():
                    err.append(f"{tag}/{ex['id']}/{field}: inline roll needs both a success and a failure line")
        if not rolls:
            warn.append(f"{tag}/{ex['id']}: no inline insight rolls — nothing in the prose to investigate")

        # Bold markers must pair up. invRichInline() closes `**` on the nearest
        # following `**`, so bold is allowed to span a [[roll:...]] token — but
        # an odd count means one marker never closes and prints literally.
        for field in ('onRecord','analysis'):
            body = ex.get(field) or ''
            if body.count('**') % 2:
                err.append(f"{tag}/{ex['id']}/{field}: odd number of `**` markers — an unclosed bold prints literally")

        # docRolls moved out to rolls.json — see tools/check-rolls.py. An
        # exhibit carrying them inline is stale data the engine ignores.
        if ex.get('docRolls'):
            err.append(f"{tag}/{ex['id']}: docRolls[] belongs in rolls.json now — the engine reads the registry, so these render nothing")

        if not ex.get('visual'):
            warn.append(f"{tag}/{ex['id']}: no visual — the exhibit has no specimen art")
        elif 'class=' in ex['visual']:
            err.append(f"{tag}/{ex['id']}: visual uses a class — specimen art must be inline styles only")
        for k, pool in (('events',EVENTS), ('characters',CHARS)):
            for v in (ex.get('links') or {}).get(k, []):
                if v not in pool: err.append(f"{tag}/{ex['id']}: links.{k} → unknown id {v}")
    for exid, n in seen.items():
        if n > 1: err.append(f"{tag}: duplicate exhibit id {exid} ×{n}")
    for l in iv.get('leads', []):
        if not l.get('why'): err.append(f"{tag}/{l['id']}: lead has no `why` — that makes it a quest")
        if l.get('fromQuest') and l['fromQuest'] not in QUESTS:
            warn.append(f"{tag}/{l['id']}: fromQuest {l['fromQuest']} not in quests.json")
        for exid in l.get('exhibits', []):
            if exid not in ALL_EX:
                err.append(f"{tag}/{l['id']}: cites exhibit {exid}, which exists in no file")
            elif ALL_EX[exid] != tag:
                warn.append(f"{tag}/{l['id']}: cites {exid} from {ALL_EX[exid]} — renders as a cross-file chip")
    if iv.get('status') == 'active' and not iv.get('exhibits'):
        warn.append(f"{tag}: marked active with no exhibits — should it be a stub?")

# presentation drift: layout classes creeping back into investigations.css
LAYOUT = ('padding','border-radius','display:grid','display:flex','linear-gradient')
for sel, body in re.findall(r'(\.inv-[a-z0-9-]+[^{]*)\{([^}]*)\}', CSS):
    root = re.match(r'\.inv-[a-z0-9-]+', sel.strip()).group(0)
    # The components this system legitimately owns, because the site has no
    # equivalent: the examination block, the dice, the inline rolls, the
    # overlay host, the evidence-locker session divider and the lead block.
    # Everything else must reuse a site class.
    if root in ('.inv-exam','.inv-overlay','.inv-session-head','.inv-lead',
                # the dice widget: a pip face, its arithmetic, its pass/fail
                # badge and the result card they sit in. No site component
                # renders a die, so this system draws its own.
                '.inv-result','.inv-result-head','.inv-result-body',
                '.inv-face','.inv-sum','.inv-vs','.inv-badge','.inv-label',
                '.inv-inline-roll',
                # thin spacing shims that exist only to keep style="" out of
                # index.html; they set padding and nothing else.
                '.inv-doc-head','.inv-visual-card','.inv-ex-icon',
                '.inv-exam-idle','.inv-exam-note'): continue
    if any(k in body.replace(' ','') for k in LAYOUT):
        warn.append(f"investigations.css: `{sel.strip()}` sets layout — use a site class instead")
used = set(re.findall(r'inv-[a-z0-9-]+', HTML))
for cls in sorted(set(re.findall(r'\.(inv-[a-z0-9-]+)', CSS))):
    if cls not in used and not cls.startswith('inv-status--') and not cls.startswith('inv-pri--'):
        warn.append(f"investigations.css: `.{cls}` is never used by index.html")

n_ex = sum(len(i.get('exhibits',[])) for i in INV)
n_roll = sum(len(re.findall(r'\[\[roll:', (e.get('onRecord','') or '') + (e.get('analysis','') or '')))
             for i in INV for e in i.get('exhibits',[]))
n_vis = sum(1 for i in INV for e in i.get('exhibits',[]) if e.get('visual'))
print(f"files: {len(INV)}  exhibits: {n_ex}  examinations: {n_ex}  insight rolls: {n_roll}  visuals: {n_vis}")
for e in err:  print('  ERROR  ', e)
for w in warn: print('  warn   ', w)
print(f"\n{len(err)} error(s), {len(warn)} warning(s)")
raise SystemExit(1 if err else 0)
