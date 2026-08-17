#!/usr/bin/env python3
"""
check-battles.py — structural audit of Reputation-Matrix2/data/battles.json.

Pass/fail checks (see docs/BATTLES_GUIDE.md for the rules this enforces):
  1. File parses as JSON and is a list of records.
  2. Every record has the six core fields: id, name, date, location,
     summary, description, relatedArticles.
  3. ids are unique and slug-shaped.
  4. Every relatedArticles id resolves against the other data stores:
     battles, majorBattles, events, characters, locations, factions.
  5. Every local image path exists on disk (relative to Reputation-Matrix2/).
  6. Belligerents are either a flat id list or the structured
     attackers/defenders shape — never free prose.

USAGE
-----
    python3 tools/check-battles.py
"""

import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'Reputation-Matrix2', 'data')
BATTLES_PATH = os.path.join(DATA, 'battles.json')

CORE = ['id', 'name', 'date', 'location', 'summary', 'description', 'relatedArticles']


def load(name):
    try:
        with open(os.path.join(DATA, name), 'r', encoding='utf-8') as f:
            return json.load(f)
    except (OSError, ValueError):
        return []


def main():
    problems = []
    warnings = []
    battles = load('battles.json')
    if not isinstance(battles, list) or not battles:
        print('⚠  battles.json missing, empty, or not a list')
        return 1

    # Pool every id the site can resolve: all id-bearing lists under data/,
    # plus dict-shaped stores (factions). Legacy records also link ids that
    # only exist inside index.html embeds (dynasties etc.) — those show up
    # as warnings, not failures, unless --strict.
    resolvable = set()
    if os.path.isdir(DATA):
        for name in sorted(os.listdir(DATA)):
            if not name.endswith('.json'):
                continue
            data = load(name)
            if isinstance(data, list):
                resolvable |= {str(r.get('id')) for r in data if isinstance(r, dict) and r.get('id')}
            elif isinstance(data, dict):
                resolvable |= {str(k) for k in data.keys() if isinstance(k, str)}
    # index.html embeds (dynasty houses and similar) — scrape their ids so
    # known-good embedded links do not warn
    try:
        with open(os.path.join(ROOT, 'index.html'), 'r', encoding='utf-8') as f:
            idx = f.read()
        resolvable |= set(re.findall(r'"(house_[a-z_]+)"', idx))
        resolvable |= set(re.findall(r'"id":"([a-z0-9_]+)"', idx))
    except OSError:
        pass

    strict = '--strict' in sys.argv
    seen = set()
    with_image = 0
    for b in battles:
        bid = b.get('id', '?')
        for field in CORE:
            if field not in b or b[field] in (None, ''):
                problems.append('%s: missing core field "%s"' % (bid, field))
        if bid in seen:
            problems.append('duplicate id "%s"' % bid)
        seen.add(bid)
        if not re.fullmatch(r'[a-z0-9_]+', str(bid)):
            problems.append('%s: id is not slug-shaped (lowercase/underscore)' % bid)

        for rid in b.get('relatedArticles', []):
            if rid not in resolvable:
                (problems if strict else warnings).append(
                    '%s: relatedArticles "%s" resolves nowhere' % (bid, rid))

        img = b.get('image')
        if img:
            if img.startswith('http'):
                pass  # external host — not our problem until it rots
            elif not os.path.exists(os.path.join(ROOT, 'Reputation-Matrix2', img)):
                problems.append('%s: image not found "%s"' % (bid, img))
            else:
                with_image += 1
            if not b.get('imageCaption'):
                problems.append('%s: image without imageCaption' % bid)

        bel = b.get('belligerents')
        if bel is not None:
            ok_list = isinstance(bel, list) and all(isinstance(x, str) for x in bel)
            ok_obj = isinstance(bel, dict) and 'attackers' in bel and 'defenders' in bel
            if not (ok_list or ok_obj):
                problems.append('%s: belligerents must be an id list or {attackers, defenders}' % bid)
            if ok_obj:
                for skey, s in bel.items():
                    if not isinstance(s, dict) or not s.get('name'):
                        problems.append('%s: belligerents.%s needs a name' % (bid, skey))
                    for c in (s.get('combatants') or []):
                        if not (isinstance(c, str) or (isinstance(c, dict) and c.get('name'))):
                            problems.append('%s: belligerents.%s combatant without a name' % (bid, skey))

        # dossier fields — shape-check when present
        if b.get('keyMoments') is not None:
            ok = isinstance(b['keyMoments'], list) and all(
                isinstance(m, dict) and m.get('time') and m.get('who') for m in b['keyMoments'])
            if not ok:
                problems.append('%s: keyMoments rows must be {time, who, ...}' % bid)
        if b.get('casualtySheet') is not None and not (
                isinstance(b['casualtySheet'], dict) and
                (b['casualtySheet'].get('attackers') or b['casualtySheet'].get('defenders'))):
            problems.append('%s: casualtySheet must be {attackers, defenders}' % bid)
        if b.get('engagement') is not None and not isinstance(b['engagement'], dict):
            problems.append('%s: engagement must be an object' % bid)

    print('Battles check')
    print('  records          : %d' % len(battles))
    print('  unique ids       : %d' % len(seen))
    print('  with local image : %d' % with_image)
    print('  resolvable pool  : %d ids across data stores' % len(resolvable))
    for w in warnings:
        print('·  (legacy link) %s' % w)
    for p in problems:
        print('⚠ ', p)
    print('  result           : %s' % ('FAIL' if problems else 'PASS'))
    return 1 if problems else 0


if __name__ == '__main__':
    sys.exit(main())
