#!/usr/bin/env python3
"""Audit Reputation-Matrix2/data/rolls.json — the insight-roll registry.

Rolls are stored apart from the documents they annotate, keyed by target id.
That is what makes them scalable and it is also what makes them easy to break:
nothing in props.json or investigations.json knows a roll is pointing at it, so
a typo'd `match` fails silently and invisibly. Everything here exists to make
that failure loud.

    python3 tools/check-rolls.py
"""
import json, re, sys, collections

ROLLS = json.load(open('Reputation-Matrix2/data/rolls.json'))
PROPS = json.load(open('Reputation-Matrix2/data/props.json'))['props']
INV   = json.load(open('Reputation-Matrix2/data/investigations.json'))['investigations']

err, warn = [], []

# Which props are actually reachable — a roll on an unreferenced prop renders
# nowhere, so it is authored work nobody will ever see.
EXHIBIT_PROPS = {ex.get('propId') for iv in INV for ex in iv.get('exhibits', [])}


def text_runs(body):
    """The body with every tag removed, as the list of literal text spans.
    A match has to live inside one of these; spanning a tag means the phrase
    is not contiguous in the source and the splicer will never find it."""
    return [p for p in re.split(r'(<[^>]+>)', body or '') if not p.startswith('<')]


n_rolls = 0
for kind in ('props', 'articles'):
    bucket = ROLLS.get(kind) or {}
    if not isinstance(bucket, dict):
        err.append(f"{kind}: must be an object keyed by target id")
        continue
    for target, entries in bucket.items():
        tag = f"{kind}/{target}"
        if not isinstance(entries, list):
            err.append(f"{tag}: must be a list of roll entries")
            continue

        if kind == 'props':
            if target not in PROPS:
                err.append(f"{tag}: no such prop in props.json — these rolls render nowhere")
                continue
            body = PROPS[target].get('body', '') or ''
            runs = text_runs(body)
            if target not in EXHIBIT_PROPS:
                warn.append(f"{tag}: prop is not used by any exhibit, so these rolls are unreachable today")
        else:
            # articles are reserved; validate shape but there is no body to check
            body, runs = None, None
            warn.append(f"{tag}: article rolls are reserved — confirm the renderer supports this target")

        ids = collections.Counter()
        matches = collections.Counter()
        for i, r in enumerate(entries):
            n_rolls += 1
            where = f"{tag}[{i}]"
            if not isinstance(r, dict):
                err.append(f"{where}: not an object")
                continue

            rid = r.get('id')
            if not rid:
                err.append(f"{where}: no id — the id is the save key, it cannot be positional")
            else:
                ids[rid] += 1
                if not re.fullmatch(r'[a-z0-9_]+', str(rid)):
                    warn.append(f"{where}: id {rid!r} is not lower_snake_case")

            dc = r.get('dc')
            if not isinstance(dc, int) or not 2 <= dc <= 6:
                err.append(f"{where}: dc {dc!r} out of range — this is a plain d6, so 2-6 or it cannot fail/pass")

            for field in ('success', 'failure'):
                if not (r.get(field) or '').strip():
                    err.append(f"{where}: no {field} text — a third of readers land on that branch permanently")

            m = r.get('match') or ''
            if not m:
                err.append(f"{where}: no match phrase")
            elif runs is not None:
                matches[m] += 1
                hits = sum(run.count(m) for run in runs)
                if hits == 0:
                    inside = m in re.sub(r'\s+', ' ', body or '')
                    hint = ' (it appears in the body but is split by a tag)' if inside else ''
                    err.append(f"{where}: match {m[:44]!r} is not verbatim text in {target}{hint}")
                elif hits > 1:
                    warn.append(f"{where}: match {m[:44]!r} occurs {hits}× — only the first is used; lengthen it")
                elif len(m) < 12:
                    warn.append(f"{where}: match {m[:44]!r} is very short and may become ambiguous if the body is edited")

            # A success that only characterises somebody is the thing this
            # system was rebuilt to stop shipping.
            s_txt = r.get('success') or ''
            if s_txt and not re.search(r'\d|[A-Z][a-z]{2,}', s_txt):
                warn.append(f"{where}: success names no person, number or date — is it a finding or a mood?")

        for rid, n in ids.items():
            if n > 1:
                err.append(f"{tag}: duplicate roll id {rid!r} ×{n} — verdicts would collide in storage")
        for m, n in matches.items():
            if n > 1:
                err.append(f"{tag}: two entries share match {m[:40]!r} — the second can never render")

# The engine reads DATA.rolls; make sure the file is actually wired in.
idx = open('index.html', encoding='utf-8').read()
if "'rolls'" not in idx:
    err.append("index.html: 'rolls' is missing from DATA_FILES — the registry never loads")
if 'invRollsFor' not in idx:
    err.append("index.html: invRollsFor() is gone — nothing reads the registry")
if re.search(r'docRolls', json.dumps(INV)):
    err.append("investigations.json: still carries docRolls[] — rolls live in rolls.json now")

for e in err:
    print(f"  ERROR   {e}")
for w in warn:
    print(f"  warn    {w}")
targets = sum(len(ROLLS.get(k) or {}) for k in ('props', 'articles'))
print(f"\nregistry: {n_rolls} rolls across {targets} targets")
print(f"{len(err)} error(s), {len(warn)} warning(s)")
sys.exit(1 if err else 0)
