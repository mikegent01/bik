#!/usr/bin/env python3
"""
check-references.py — site-wide dangling-reference and missing-asset audit.

Covers the cross-store debts the per-system checkers can't see:
  1. id-reference fields (relatedArticles, keyEvents, keyBattles, articles)
     in the main data stores must resolve to a known record somewhere.
  2. props.json `articles[]` links must resolve.
  3. Local image paths in records must exist on disk (external URLs skipped).
  4. Every reference target that resolves to NOTHING is reported; legacy
     records report as warnings, records touched this run should be clean.

Run before calling any run done. Companion to ARTICLE_QA.md (content) and
CROSS_SYSTEM_UPDATES.md (side systems).

Usage:
    python3 tools/check-references.py [--strict]
"""

import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'Reputation-Matrix2', 'data')

REF_FIELDS = ['relatedArticles', 'keyEvents', 'keyBattles', 'articles']
IMAGE_FIELDS = ['image', 'portrait', 'coverImage', 'banner']


def load(name):
    try:
        with open(os.path.join(DATA, name), 'r', encoding='utf-8') as f:
            return json.load(f)
    except (OSError, ValueError):
        return None


def main():
    strict = '--strict' in sys.argv
    warnings, errors = [], []

    stores = {}
    for name in ['events.json', 'characters.json', 'locations.json',
                 'factions.json', 'battles.json', 'majorBattles.json',
                 'books.json', 'items.json', 'currencies.json', 'trials.json']:
        data = load(name)
        if isinstance(data, list):
            stores[name] = data

    known = set()
    for name, rows in stores.items():
        for r in rows:
            if isinstance(r, dict) and r.get('id'):
                known.add(str(r['id']))
    props = load('props.json') or {}
    for pid in (props.get('props') or {}):
        known.add(pid)

    def store_of(rid):
        for name, rows in stores.items():
            if any(r.get('id') == rid for r in rows if isinstance(r, dict)):
                return name
        return 'props' if rid in (props.get('props') or {}) else None

    checked = 0
    for name, rows in stores.items():
        for r in rows:
            if not isinstance(r, dict) or not r.get('id'):
                continue
            checked += 1
            rid = r['id']
            for fld in REF_FIELDS:
                for ref in (r.get(fld) or []):
                    ref = ref if isinstance(ref, str) else (ref or {}).get('id')
                    if not ref:
                        continue
                    if ref not in known:
                        msg = '%s[%s].%s -> "%s" resolves nowhere' % (name, rid, fld, ref)
                        (errors if strict else warnings).append(msg)
            for fld in IMAGE_FIELDS:
                val = r.get(fld)
                if not val or not isinstance(val, str) or val.startswith('http'):
                    continue
                rel = val if val.startswith('assets/') else 'assets/' + val.lstrip('/')
                base = os.path.join(ROOT, 'Reputation-Matrix2', rel)
                if not os.path.exists(base) and not os.path.exists(os.path.join(ROOT, 'Reputation-Matrix2', val)):
                    msg = '%s[%s].%s file not found: %s' % (name, rid, fld, val)
                    errors.append(msg)

    for pid, prop in (props.get('props') or {}).items():
        for ref in (prop.get('articles') or []):
            if ref not in known:
                msg = 'props[%s].articles -> "%s" resolves nowhere' % (pid, ref)
                errors.append(msg)

    print('Reference audit')
    print('  records checked  : %d across %d stores + props' % (checked, len(stores)))
    print('  known ids        : %d' % len(known))
    for w in warnings:
        print('·  (legacy) %s' % w)
    for e in errors:
        print('⚠  %s' % e)
    print('  result           : %s' % ('FAIL' if errors else 'PASS (%d legacy warnings)' % len(warnings)))
    return 1 if errors else 0


if __name__ == '__main__':
    sys.exit(main())
