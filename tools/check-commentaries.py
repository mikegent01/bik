#!/usr/bin/env python3
"""Validate Waluigi's Cut commentary filings.

The commentary mode exists because the newer articles read like neutral
retellings with commentary spliced in, while the old ones (spider_grove_battle
is the exemplar) are Waluigi talking THROUGH the story the whole way.

The thresholds below are measured off that exemplar rather than invented:

    spider_grove_battle   Waluigi/1k = 22.8   CAPS/1k = 36.5

Structure checks:
  * sourceArticle resolves against events/battles
  * every section has id / icon / heading / body
  * no duplicate section ids
  * relatedArticles resolve

Voice checks (the point of the mode):
  * Waluigi named at least VOICE_MIN_WALUIGI times per 1k words
  * emphasis capitals at least VOICE_MIN_CAPS per 1k words
  * at least one WAH per filing
  * every section carries some first-person presence
  * no section is a silent stretch of pure retelling

Usage:
    python3 tools/check-commentaries.py
    python3 tools/check-commentaries.py --strict
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'Reputation-Matrix2', 'data')

VOICE_MIN_WALUIGI = 18.0    # per 1k words
VOICE_MIN_CAPS = 25.0       # per 1k words
SECTION_MAX_SILENT_WORDS = 220   # longest stretch with no Waluigi presence

# Length must be PROPORTIONAL to the source article, so a big session gets a big
# cut and a short clipping does not get padded to match it. Measured against the
# two filed cuts:
#     promo_mario  source 1111w -> cut 4055w  (3.7x)
#     belly        source 5319w -> cut 5850w  (1.1x)
# A flat multiplier is wrong: a 300-word clipping needs expansion, while an
# already-narrated session only needs the voice laid over it. What stays stable
# is the SECTION, so the rule is expressed per section with a generous band.
SECTION_MIN_WORDS = 260
SECTION_MAX_WORDS = 900
# and the whole cut must be at least this multiple of its source's story beats
TOTAL_MIN_RATIO = 0.9

CAPS_RE = re.compile(r'\b[A-Z]{2,}\b')
WALU_RE = re.compile(r'\bWaluigi\b')
FIRST_RE = re.compile(r"\bWaluigi\b|\bWAH\b|\bMY\b|\bI\b")


def load(name):
    p = os.path.join(DATA, name)
    if not os.path.exists(p):
        return []
    with open(p, encoding='utf-8') as fh:
        d = json.load(fh)
    if isinstance(d, dict):
        for k in ('events', 'battles', 'commentaries'):
            if k in d:
                return d[k]
        return []
    return d


def source_story_words(rec):
    """Words of actual story in the source filing: prose fields + sections."""
    n = 0
    for k in ('description', 'summary', 'outcome', 'aftermath', 'waluigiAssessment'):
        n += len(str(rec.get(k) or '').split())
    for s in rec.get('sections') or []:
        if isinstance(s, dict):
            n += len(str(s.get('overview') or '').split())
            n += len(str(s.get('waluigi_note') or '').split())
    return n


def main():
    strict = '--strict' in sys.argv
    path = os.path.join(DATA, 'commentaries.json')
    if not os.path.exists(path):
        print('PASS  commentaries (no file yet)')
        return 0
    with open(path, encoding='utf-8') as fh:
        doc = json.load(fh)
    items = doc.get('commentaries', [])

    ids = set()
    by_id = {}
    for rec in load('events.json') + load('battles.json'):
        if isinstance(rec, dict) and rec.get('id'):
            ids.add(rec['id'])
            by_id[rec['id']] = rec
    # characters etc. may be referenced in relatedArticles
    for extra in ('characters.json', 'locations.json'):
        for rec in load(extra):
            if isinstance(rec, dict) and rec.get('id'):
                ids.add(rec['id'])

    errs, warns = [], []
    for c in items:
        cid = c.get('id', '<no id>')
        if not c.get('sourceArticle'):
            errs.append(f'{cid}: no sourceArticle')
        elif c['sourceArticle'] not in ids:
            errs.append(f"{cid}: sourceArticle {c['sourceArticle']!r} does not resolve")

        secs = c.get('sections') or []
        if not secs:
            errs.append(f'{cid}: no sections')
            continue
        seen = set()
        for s in secs:
            sid = s.get('id')
            if not sid:
                errs.append(f'{cid}: a section has no id')
                continue
            if sid in seen:
                errs.append(f'{cid}/{sid}: duplicate section id')
            seen.add(sid)
            for field in ('icon', 'heading', 'body'):
                if not s.get(field):
                    errs.append(f'{cid}/{sid}: missing {field}')

        for rid in c.get('relatedArticles') or []:
            if rid not in ids:
                warns.append(f'{cid}: relatedArticles {rid!r} does not resolve')

        blob = ' '.join(s.get('body', '') for s in secs)
        w = max(1, len(blob.split()))
        wal = len(WALU_RE.findall(blob)) / w * 1000
        caps = len(CAPS_RE.findall(blob)) / w * 1000
        wah = len(re.findall(r'WAH', blob))

        tag = 'ERROR' if strict else 'warn'
        bucket = errs if strict else warns
        if wal < VOICE_MIN_WALUIGI:
            bucket.append(f'{cid}: Waluigi/1k {wal:.1f} < {VOICE_MIN_WALUIGI} '
                          f'— reads like a neutral retelling')
        if caps < VOICE_MIN_CAPS:
            bucket.append(f'{cid}: CAPS/1k {caps:.1f} < {VOICE_MIN_CAPS} '
                          f'— not enough emphasis')
        if wah < 1:
            bucket.append(f'{cid}: no WAH anywhere in the body')

        for s in secs:
            body = s.get('body', '')
            if not FIRST_RE.search(body):
                bucket.append(f"{cid}/{s.get('id')}: no Waluigi presence at all")
                continue
            # longest run of words with no Waluigi marker
            parts = FIRST_RE.split(body)
            longest = max((len(p.split()) for p in parts), default=0)
            if longest > SECTION_MAX_SILENT_WORDS:
                bucket.append(f"{cid}/{s.get('id')}: {longest} words of "
                              f'uninterrupted retelling (max {SECTION_MAX_SILENT_WORDS})')

        # ---- proportional length ----
        src_rec = by_id.get(c.get('sourceArticle'))
        src_w = source_story_words(src_rec) if src_rec else 0
        ratio = (w / src_w) if src_w else 0.0
        if src_w and ratio < TOTAL_MIN_RATIO:
            bucket.append(f'{cid}: {w}w against a {src_w}w source ({ratio:.2f}x) '
                          f'— too short for this article, min {TOTAL_MIN_RATIO}x')
        for s in secs:
            sw = len(s.get('body', '').split())
            if sw < SECTION_MIN_WORDS:
                bucket.append(f"{cid}/{s.get('id')}: {sw}w section "
                              f'(min {SECTION_MIN_WORDS}) — thin')
            elif sw > SECTION_MAX_WORDS:
                bucket.append(f"{cid}/{s.get('id')}: {sw}w section "
                              f'(max {SECTION_MAX_WORDS}) — split it')

        print(f'{cid}')
        print(f'  {len(secs)} sections · {w} words · Waluigi/1k {wal:.1f} '
              f'· CAPS/1k {caps:.1f} · WAH {wah}')
        if src_w:
            print(f'  source {src_w}w · commentary {ratio:.2f}x '
                  f'· sections {min(len(s.get("body","").split()) for s in secs)}'
                  f'-{max(len(s.get("body","").split()) for s in secs)}w')

    for e in errs:
        print(f'  ERROR  {e}')
    for w_ in warns:
        print(f'  warn   {w_}')
    if not errs:
        print(f'PASS  commentaries ({len(items)} filed)')
    return 1 if (errs and strict) else 0


if __name__ == '__main__':
    sys.exit(main())
