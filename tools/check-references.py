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

from __future__ import annotations

import json
import os
import sys
from typing import Any

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'Reputation-Matrix2', 'data')

REF_FIELDS = ['relatedArticles', 'keyEvents', 'keyBattles', 'articles']
SCALAR_REF_FIELDS = ['sourceArticle']
IMAGE_FIELDS = ['image', 'portrait', 'coverImage', 'banner']
SKIP_DATA_FILES = {
    # These are bulk shop/detail payloads. Their inner objects have many local
    # item ids and effect ids that are not article records; using them as an
    # audit surface produces noise. Their ids are still available through the
    # store files that own them.
    'shop-effect-details.json',
    'shop-effect-details-slim.json',
}


def load_path(path: str) -> Any:
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except (OSError, ValueError):
        return None


def load(name: str) -> Any:
    return load_path(os.path.join(DATA, name))


def walk_records(value: Any) -> list[dict[str, Any]]:
    """Return every dict that looks like a data record, even under wrappers.

    Older checker logic only accepted top-level JSON arrays. That missed valid
    ids in object-shaped stores such as nations.json, artifacts.json,
    articleAnalyses.json, quests.json, calendars.json and several generated
    registries. The result was hundreds of false legacy warnings for records
    that were actually present, just not in an array-shaped file.
    """
    out: list[dict[str, Any]] = []

    def rec(x: Any) -> None:
        if isinstance(x, dict):
            if x.get('id') or x.get('sourceArticle'):
                out.append(x)
            for child in x.values():
                if isinstance(child, (dict, list)):
                    rec(child)
        elif isinstance(x, list):
            for child in x:
                rec(child)

    rec(value)
    return out


def data_files() -> list[str]:
    try:
        names = sorted(n for n in os.listdir(DATA) if n.endswith('.json'))
    except OSError:
        return []
    return [n for n in names if n not in SKIP_DATA_FILES]


def ref_values(record: dict[str, Any], field: str) -> list[str]:
    raw = record.get(field)
    if raw is None:
        return []
    if isinstance(raw, str):
        return [raw]
    vals: list[str] = []
    if isinstance(raw, list):
        for ref in raw:
            if isinstance(ref, str):
                vals.append(ref)
            elif isinstance(ref, dict) and ref.get('id'):
                vals.append(str(ref['id']))
    return vals


def main() -> int:
    strict = '--strict' in sys.argv
    warnings: list[str] = []
    errors: list[str] = []

    stores: dict[str, list[dict[str, Any]]] = {}
    for name in data_files():
        rows = walk_records(load(name))
        if rows:
            stores[name] = rows

    known: set[str] = set()
    for rows in stores.values():
        for r in rows:
            if isinstance(r, dict) and r.get('id'):
                known.add(str(r['id']))

    props = load('props.json') or {}
    for pid in (props.get('props') or {}):
        known.add(pid)

    checked = 0
    for name, rows in stores.items():
        for r in rows:
            if not isinstance(r, dict):
                continue
            rid = r.get('id') or r.get('sourceArticle') or '<anonymous>'
            checked += 1
            for fld in REF_FIELDS + SCALAR_REF_FIELDS:
                for ref in ref_values(r, fld):
                    if ref not in known:
                        msg = '%s[%s].%s -> "%s" resolves nowhere' % (name, rid, fld, ref)
                        (errors if strict else warnings).append(msg)
            for fld in IMAGE_FIELDS:
                val = r.get(fld)
                if not val or not isinstance(val, str) or val.startswith('http'):
                    continue
                # Several system stores use the field name `portrait` for an
                # emoji/avatar token rather than an image path (for example
                # 🐸⚔️). Only audit strings that look like local paths.
                if '/' not in val and '\\' not in val and '.' not in val:
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
