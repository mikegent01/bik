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
PROPS= set(json.load(open('Reputation-Matrix2/data/props.json'))['props'])
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
        L = ex.get('layers', [])
        if not L: err.append(f"{tag}/{ex['id']}: no layers")
        dcs = [l['dc'] for l in L]
        if dcs != sorted(dcs): err.append(f"{tag}/{ex['id']}: DCs not ascending {dcs}")
        if max(dcs or [0]) > 10:
            err.append(f"{tag}/{ex['id']}: DC {max(dcs)} unreachable (d6+1 caps at 7, +3 study = 10)")
        xps = [l.get('xp', 0) for l in L]
        if xps != sorted(xps): warn.append(f"{tag}/{ex['id']}: XP not ascending {xps}")
        for i, l in enumerate(L):
            if not l.get('title'): err.append(f"{tag}/{ex['id']}[{i}]: layer has no title")
            for m in re.findall(r'\[\[roll:([^\]]*)\]\]', l.get('text','')):
                if len(m.split('|')) != 4:
                    err.append(f"{tag}/{ex['id']}[{i}]: malformed inline roll [[roll:{m}]]")
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
    # equivalent: the examination accordion, the dice, the pip strip, the
    # inline rolls, the overlay host, the evidence-locker session divider and
    # the lead block. Everything else must reuse a site class.
    if root in ('.inv-layer','.inv-layer-head','.inv-layer-body','.inv-layer-n',
                '.inv-layer-title','.inv-roll-out','.inv-die','.inv-pips',
                '.inv-inline-roll','.inv-inline-out','.inv-overlay',
                '.inv-session-head','.inv-lead'): continue
    if any(k in body.replace(' ','') for k in LAYOUT):
        warn.append(f"investigations.css: `{sel.strip()}` sets layout — use a site class instead")
used = set(re.findall(r'inv-[a-z0-9-]+', HTML))
for cls in sorted(set(re.findall(r'\.(inv-[a-z0-9-]+)', CSS))):
    if cls not in used and not cls.startswith('inv-status--') and not cls.startswith('inv-pri--'):
        warn.append(f"investigations.css: `.{cls}` is never used by index.html")

n_ex = sum(len(i.get('exhibits',[])) for i in INV)
n_l  = sum(len(l.get('layers',[])) for i in INV for l in i.get('exhibits',[]))
xp   = sum(l.get('xp',0) for i in INV for e in i.get('exhibits',[]) for l in e.get('layers',[]))
print(f"files: {len(INV)}  exhibits: {n_ex}  layers: {n_l}  XP: {xp}")
for e in err:  print('  ERROR  ', e)
for w in warn: print('  warn   ', w)
print(f"\n{len(err)} error(s), {len(warn)} warning(s)")
raise SystemExit(1 if err else 0)
