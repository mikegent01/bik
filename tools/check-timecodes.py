#!/usr/bin/env python3
"""Validate Waluipedia filing time codes.

A time code is a machine-checkable stamp on a filing:

    TC:1040-08-30T22:15/MAT

    year 1040 · month 08 (Harvestide, 1-indexed) · day 30
    T22:15 = in-world clock, 24h, optional
    /MAT   = which clock (MAT, SHD, FEY, SUBJ)

Codes live in the `timeCode` field of an event/battle record. The human `date`
string stays exactly as it is — the code is the sortable, checkable twin.

Checks:
  * the code parses
  * month/day exist in the Regal Empire Standard Calendar (Deepwinter has 35)
  * the clock suffix is one of the four canon clocks
  * the code agrees with the human `date` string when that string names a
    month and day (this catches the real bug: prose and code drifting apart)
  * Material-clock filings do not sit after currentDate.json unless the record
    is explicitly flagged `laterDated: true`

Usage:
    python3 tools/check-timecodes.py            # report
    python3 tools/check-timecodes.py --strict   # exit 1 on any error
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'Reputation-Matrix2', 'data')

MONTHS = ['Firstlight', 'Chillwind', 'Veridia', 'Bloom', 'Floria', 'Efferd',
          'Highsun', 'Harvestide', 'Aethel', 'Darkmoon', 'Frostfall', 'Deepwinter']
DAYS = [30] * 11 + [35]
CLOCKS = {
    'MAT': 'Material / Imperial',
    'SHD': 'Shadowfell drift',
    'FEY': 'Feyward clock',
    'SUBJ': 'Subjective / unverified duration',
}

CODE_RE = re.compile(
    r'^TC:(?P<y>\d{3,4})-(?P<m>\d{2})-(?P<d>\d{2})'
    r'(?:T(?P<hh>\d{2}):(?P<mm>\d{2}))?'
    r'/(?P<clock>MAT|SHD|FEY|SUBJ)$'
)


def load(name):
    p = os.path.join(DATA, name)
    if not os.path.exists(p):
        return []
    with open(p, encoding='utf-8') as fh:
        d = json.load(fh)
    if isinstance(d, dict):
        for k in ('events', 'battles', 'analyses', 'locations'):
            if k in d:
                return d[k]
        return []
    return d


def abs_day(y, m, d):
    """Sortable absolute day. m is 1-indexed."""
    return y * 365 + sum(DAYS[:m - 1]) + d


def parse(code):
    m = CODE_RE.match(str(code or '').strip())
    if not m:
        return None
    g = m.groupdict()
    return {
        'year': int(g['y']), 'month': int(g['m']), 'day': int(g['d']),
        'hh': int(g['hh']) if g['hh'] else None,
        'mm': int(g['mm']) if g['mm'] else None,
        'clock': g['clock'],
    }


def check_record(rec, now_abs):
    """Return (errors, warnings) for one record carrying a timeCode."""
    errs, warns = [], []
    rid = rec.get('id', '<no id>')
    code = rec.get('timeCode')
    p = parse(code)
    if not p:
        errs.append(f'{rid}: unparseable timeCode {code!r} '
                    f'(want TC:YYYY-MM-DDThh:mm/CLOCK)')
        return errs, warns

    if not 1 <= p['month'] <= 12:
        errs.append(f"{rid}: month {p['month']:02d} out of range")
        return errs, warns
    mname = MONTHS[p['month'] - 1]
    if not 1 <= p['day'] <= DAYS[p['month'] - 1]:
        errs.append(f"{rid}: {mname} has {DAYS[p['month'] - 1]} days, "
                    f"code says day {p['day']}")
    if p['hh'] is not None and not (0 <= p['hh'] <= 23 and 0 <= p['mm'] <= 59):
        errs.append(f"{rid}: bad clock time in {code}")

    # The code must agree with the prose date when the prose names a month+day.
    human = str(rec.get('date') or '')
    if mname.lower() not in human.lower():
        for other in MONTHS:
            if other.lower() in human.lower():
                errs.append(f'{rid}: code says {mname} but date string says '
                            f'{other} — "{human[:60]}"')
                break
    else:
        nums = re.findall(r'\b(\d{1,2})\b', human.split(mname)[0][-8:] +
                          ' ' + human.split(mname)[1][:8]) if mname in human else []
        if nums and str(p['day']) not in nums:
            warns.append(f"{rid}: code day {p['day']} not found near the month "
                         f'in "{human[:60]}"')
    if str(p['year']) not in human:
        warns.append(f"{rid}: code year {p['year']} does not appear in "
                     f'"{human[:60]}"')

    if p['clock'] == 'MAT' and not rec.get('laterDated'):
        a = abs_day(p['year'], p['month'], p['day'])
        if a > now_abs:
            errs.append(f'{rid}: Material filing dated after the world clock; '
                        f'set laterDated:true if intended')
    return errs, warns


def main():
    strict = '--strict' in sys.argv
    with open(os.path.join(DATA, 'currentDate.json'), encoding='utf-8') as fh:
        cd = json.load(fh)
    now_abs = abs_day(cd['year'], cd['monthIndex'] + 1, cd['day'])
    now_s = f"{cd['day']} {MONTHS[cd['monthIndex']]}, {cd['year']} BF"

    errs, warns, coded, total = [], [], 0, 0
    for fname in ('events.json', 'battles.json'):
        for rec in load(fname):
            if not isinstance(rec, dict) or not rec.get('id'):
                continue
            total += 1
            if rec.get('timeCode'):
                coded += 1
                e, w = check_record(rec, now_abs)
                errs += e
                warns += w

    print(f'World clock: {now_s}')
    print(f'Records with a timeCode: {coded}/{total}')
    for e in errs:
        print(f'  ERROR  {e}')
    for w in warns:
        print(f'  warn   {w}')
    if not errs:
        print('PASS  time codes' if coded else
              'PASS  time codes (none filed yet)')
    if errs and strict:
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
