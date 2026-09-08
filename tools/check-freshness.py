#!/usr/bin/env python3
"""System freshness: which living system is most stale, stalest-first.

Compares each registry entry in docs/system-freshness.json against the
archive clock (Reputation-Matrix2/data/currentDate.json) using the house
absDay calendar (year*365 + monthIndex*30 + day), and re-verifies entries
against their source files so the registry cannot silently drift.

Exit 1 only when: an enforced system exceeds its maxLagDays (DUE), a
registry date disagrees with its source (DRIFT), or a registry date is in
the future. Unenforced stale systems are reported, never failed.

Usage:
    python3 tools/check-freshness.py
"""
import glob
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def absday(d):
    return d['year'] * 365 + d['monthIndex'] * 30 + d['day']


def load(rel):
    with open(ROOT / rel, encoding='utf-8') as fh:
        return json.load(fh)


def month_index(name):
    months = load('Reputation-Matrix2/data/calendarMonths.json')
    items = months if isinstance(months, list) else months.get('months', [])
    for i, m in enumerate(items):
        nm = (m.get('name') if isinstance(m, dict) else m) or ''
        if str(nm).lower() == str(name).lower():
            return i
    return None


def verify_source(v):
    """Return the live date dict from the source, or None if unverifiable."""
    if 'pattern' in v:
        text = (ROOT / v['file']).read_text(encoding='utf-8')
        m = re.search(v['pattern'], text)
        if not m:
            return None
        return {'year': int(m.group(1)), 'monthIndex': int(m.group(2)),
                'day': int(m.group(3))}
    if 'latestScript' in v:
        cands = sorted(glob.glob(str(ROOT / v['latestScript'])))
        cands = [c for c in cands if 'pending' not in Path(c).name]
        if not cands:
            return None
        d = json.loads(Path(cands[-1]).read_text(encoding='utf-8'))
        m = re.match(r'(\w+)\s+(\d+),\s*(\d+)\s*BF',
                     str(d.get(v.get('field', 'huntDay'), '')), re.I)
        if not m:
            return None
        mi = month_index(m.group(1))
        if mi is None:
            return None
        return {'year': int(m.group(3)), 'monthIndex': mi,
                'day': int(m.group(2))}
    return 'n/a'


def main():
    reg = load('docs/system-freshness.json')
    now = load('Reputation-Matrix2/data/currentDate.json')
    now_d = {'year': now['year'], 'monthIndex': now['monthIndex'],
             'day': now['day']}
    now_abs = absday(now_d)
    print(f"archive now: day {now_d['day']}, month {now_d['monthIndex'] + 1}, "
          f"{now_d['year']} BF")
    rows, fails = [], []
    for key, s in reg['systems'].items():
        asof, label = s['asOf'], s.get('label', key)
        lag = now_abs - absday(asof)
        live = verify_source(s['verify']) if s.get('verify') else 'n/a'
        drift = isinstance(live, dict) and live != asof
        future = lag < 0
        enforced = s.get('enforced', False)
        maxlag = s.get('maxLagDays')
        breach = enforced and maxlag is not None and lag > maxlag
        if drift or future:
            status = 'DRIFT' if drift else 'FUTURE'
            fails.append(key)
        elif breach:
            status = 'DUE'
            fails.append(key)
        elif lag > 30:
            status = 'STALE'
        else:
            status = 'OK'
        rows.append((lag, key, label, asof, live, status, s))
    rows.sort(reverse=True)
    for lag, key, label, asof, live, status, s in rows:
        dat = f"day {asof['day']}, month {asof['monthIndex'] + 1}, {asof['year']}"
        extra = ''
        if isinstance(live, dict):
            extra = (f" (source: day {live['day']}, month "
                     f"{live['monthIndex'] + 1}, {live['year']})")
        elif live is None:
            extra = ' (source unreadable)'
        print(f'  [{status}] {label}: filed {dat} — lag {lag}d{extra}')
        if s.get('playbook'):
            print(f"         playbook: {s['playbook']}")
    try:
        p = load('tools/rnn-scripts/pending-news-articles.json')
        print(f"  RNN pending: {len(p.get('pending', []))} articles "
              f"(episode at ~{p.get('threshold', 10)})")
    except Exception:
        pass
    stalest = rows[0]
    print(f'stalest: {stalest[2]} ({stalest[1]}) at {stalest[0]}d lag')
    if fails:
        print(f"FAIL freshness: {', '.join(fails)}")
        return 1
    print(f'PASS freshness ({len(rows)} systems tracked)')
    return 0


if __name__ == '__main__':
    sys.exit(main())
