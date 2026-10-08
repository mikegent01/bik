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
import difflib, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'Reputation-Matrix2', 'data')

VOICE_MIN_WALUIGI = 12.0    # per 1k words (loosened from 18.0 to eliminate padding pressure)
VOICE_MIN_CAPS = 20.0       # per 1k words (loosened from 25.0)
SECTION_MAX_SILENT_WORDS = 350   # longest stretch with no Waluigi presence (relaxed from 220)

# Length must be PROPORTIONAL to the source article, so a big session gets a big
# cut and a short clipping does not get padded to match it. Measured against the
# two filed cuts:
#     promo_mario  source 1111w -> cut 4055w  (3.7x)
#     belly        source 5319w -> cut 5850w  (1.1x)
# A flat multiplier is wrong: a 300-word clipping needs expansion, while an
# already-narrated session only needs the voice laid over it. What stays stable
# is the SECTION, so the rule is expressed per section with a generous band.
SECTION_MIN_WORDS = 240
SECTION_MAX_WORDS = 950
# and the whole cut must be at least this multiple of its source's story beats
TOTAL_MIN_RATIO = 0.80

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
        for k in ('events', 'battles', 'commentaries',
                  'characters', 'locations', 'factions', 'analyses'):
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
    # characters etc. may be referenced in relatedArticles. factions belong in
    # this list too - a cut that links the Iron Legion is linking a real article.
    for extra in ('characters.json', 'locations.json', 'factions.json'):
        for rec in load(extra):
            if isinstance(rec, dict) and rec.get('id'):
                ids.add(rec['id'])

    analyses_by_src = {a.get('sourceArticle'): a for a in load('articleAnalyses.json') if isinstance(a, dict) and a.get('sourceArticle')}

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

        # ---- style separation: no ledger words, quote density, stock tics ----
        ledger_hits = re.findall(r'\b(thesis|verdict|custody reading|audit register)\b', blob, re.IGNORECASE)
        if ledger_hits:
            warns.append(f'{cid}: contains ledger/analysis vocabulary {set(h.lower() for h in ledger_hits)} '
                         f'— commentary must use comedy/performance register, not audit jargon')

        for tic in (r'\bi am filing\b', r'\bi would like it noted\b'):
            tic_count = len(re.findall(tic, blob, re.IGNORECASE))
            if tic_count > 2:
                warns.append(f'{cid}: repetitive administrative tic {tic!r} occurs {tic_count} times '
                             f'— rotate or remove stock phrases')

        quotes = re.findall(r'["“][^"”]{3,}["”]|’[^’]{3,}’|\*[“"][^"”]{3,}[”"]\*', blob)
        if len(quotes) < max(2, len(secs) // 2):
            warns.append(f'{cid}: low quote density ({len(quotes)} quotes across {len(secs)} sections) '
                         f'— commentary should quote verbatim dialogue from the record')

        # ---- dialogue quote fidelity check (fuzzy matching against source) ----
        if src_rec:
            src_full_text = ' '.join(
                str(src_rec.get(k) or '') for k in ('description', 'summary', 'outcome', 'aftermath', 'waluigiAssessment')
            ) + ' ' + ' '.join(
                str(s.get('overview') or '') + ' ' + str(s.get('waluigi_note') or '')
                for s in (src_rec.get('sections') or [])
            )
            clean_src = ' '.join(re.sub(r'[^a-z0-9\s]', ' ', src_full_text.lower()).split())
            clean_src_words = clean_src.split()
            src_word_set = set(clean_src_words)

            def quote_matches_source(q_str):
                q_strip = re.sub(r'^\*+|\*+$', '', q_str).strip()
                q_clean = ' '.join(re.sub(r'[^a-z0-9\s]', ' ', q_strip.lower()).split())
                q_words = q_clean.split()
                if len(q_words) < 4:
                    return True
                if q_clean in clean_src:
                    return True
                # Check clause by clause if multiple sentences
                clauses = [re.sub(r'[^a-z0-9\s]', ' ', s).strip() for s in re.split(r'[.!?—\n]+', q_strip) if len(s.split()) >= 3]
                if len(clauses) > 1:
                    all_clauses = True
                    for clause in clauses:
                        c_clean = ' '.join(clause.split())
                        if c_clean in clean_src:
                            continue
                        c_words = c_clean.split()
                        c_common = [w for w in c_words if w in src_word_set]
                        if len(c_common) / len(c_words) < 0.5:
                            all_clauses = False
                            break
                        clause_ok = False
                        for anchor in c_common[:3]:
                            indices = [i for i, w in enumerate(clean_src_words) if w == anchor]
                            n = len(c_words)
                            for idx in indices[:10]:
                                start = max(0, idx - 2)
                                end = min(len(clean_src_words), idx + n + 3)
                                win = ' '.join(clean_src_words[start:end])
                                if difflib.SequenceMatcher(None, c_clean, win).ratio() >= 0.70:
                                    clause_ok = True
                                    break
                            if clause_ok:
                                break
                        if not clause_ok:
                            all_clauses = False
                            break
                    if all_clauses:
                        return True

                # Direct fuzzy match
                common = [word for word in q_words if word in src_word_set]
                if len(common) / len(q_words) < 0.5:
                    return False
                for anchor in common[:3]:
                    indices = [i for i, w in enumerate(clean_src_words) if w == anchor]
                    n = len(q_words)
                    for idx in indices[:15]:
                        start = max(0, idx - 2)
                        end = min(len(clean_src_words), idx + n + 3)
                        win = ' '.join(clean_src_words[start:end])
                        if difflib.SequenceMatcher(None, q_clean, win).ratio() >= 0.70:
                            return True
                return False

            dialogue_quotes = [m.group(1) or m.group(2) for m in re.finditer(r'\"([^\"\n]+)\"|“([^”\n]+)”', blob)]
            unmatched_quotes = []
            for q in dialogue_quotes:
                if not quote_matches_source(q):
                    unmatched_quotes.append(q.strip())

            if len(unmatched_quotes) > 3:
                warns.append(f'{cid}: {len(unmatched_quotes)} quoted dialogue lines deviate from source record '
                             f'(e.g. {unmatched_quotes[0]!r}) — quote verbatim from transcript/event')

        # ---- cross-form duplicate check (6-word phrases) ----
        src_art = c.get('sourceArticle')
        if src_art and src_art in analyses_by_src:
            ana = analyses_by_src[src_art]
            ana_text = str(ana.get('thesis', '')) + ' ' + ' '.join(str(s.get('body', '')) for s in (ana.get('sections') or []))
            comm_words = re.findall(r'\b[a-z0-9]+\b', blob.lower())
            ana_words = re.findall(r'\b[a-z0-9]+\b', ana_text.lower())
            comm_ngrams = set(' '.join(comm_words[i:i+6]) for i in range(len(comm_words)-5))
            ana_ngrams = set(' '.join(ana_words[i:i+6]) for i in range(len(ana_words)-5))
            shared_ngrams = comm_ngrams & ana_ngrams
            if len(shared_ngrams) > 10:
                warns.append(f"{cid}: {len(shared_ngrams)} shared 6-word phrases with companion analysis {ana.get('id')} "
                             f"— cross-form prose must be independently authored")

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
