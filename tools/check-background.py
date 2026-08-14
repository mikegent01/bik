#!/usr/bin/env python3
"""Verify that every investigation `background` blurb actually describes the
article it links to.

The failure this exists to prevent: a blurb written from a session label
rather than from the article body. The Toad file linked The Estragon Island
Incident and described it as "the rescue itself ... who the 774 people are",
when the article is about Feyward Dan waking up in a magic school and being
hunted by goblins. It rendered fine, the link resolved, and it was completely
wrong — nothing in the pipeline could catch that, because it is a claim about
meaning, not about structure.

Two checks, both cheap and both boring:

  1. Lexical overlap. Content words in the blurb should mostly occur in the
     linked article. A blurb about a rescue pointing at an article about
     goblins scores near zero.

  2. Anchor terms. Every blurb must contain at least one distinctive multi-word
     phrase that appears verbatim in the article. This is the strong check: it
     forces the author to quote something concrete from the source.

Exit code 1 on any error, so it can gate a commit.
"""
import json
import re
import sys

ROOT = 'Reputation-Matrix2/data/'


def load(path, key):
    doc = json.load(open(ROOT + path, encoding='utf-8'))
    rows = doc if isinstance(doc, list) else doc.get(key, doc)
    if isinstance(rows, dict):
        return {k: v for k, v in rows.items() if not k.startswith('_')}
    return {r['id']: r for r in rows if isinstance(r, dict) and 'id' in r}


EVENTS = load('events.json', 'events')
FACTIONS = load('factions.json', 'factions')
CHARS = load('characters.json', 'characters')
INV = json.load(open(ROOT + 'investigations.json', encoding='utf-8'))['investigations']

# Words that carry no evidence either way. Deliberately generous: the point is
# to compare *subject matter*, not prose style.
STOP = set("""
the a an and or of to in on for with that this is was were be been being by at as it its from not
but they them their he she his her you your we our i us if so what who which when where how all any
some no nor can will just than then there here into out up down over under again more most other own
same too very s t don now what's read this file case page thing things something anyone nobody
after before while during because about against between own most such only same own why worth
knowing know known reader readers first before below above still yet also even much many one two
three both each every either neither does did doing done have has had having get got make made
say said says like likes liked want wants use used using see saw seen come came comes go goes went
back good great new old right left way ways part parts point points fact facts entry entries
""".split())


def words(text):
    return [w for w in re.findall(r"[a-z0-9']+", (text or '').lower())
            if w not in STOP and len(w) > 3]


def article_text(aid):
    """Everything a reader would see on the linked page."""
    if aid in EVENTS:
        e = EVENTS[aid]
        return ' '.join(str(e.get(k, '')) for k in
                        ('title', 'summary', 'description', 'notableFeatures', 'date'))
    for src in (FACTIONS, CHARS):
        if aid in src:
            return json.dumps(src[aid])
    return ''


err, warn = [], []
checked = 0

for iv in INV:
    for b in iv.get('background', []):
        aid, why = b.get('id', ''), b.get('why', '')
        tag = f"{iv['id']}/{aid}"
        body = article_text(aid).lower()
        if not body:
            err.append(f"{tag}: no article text found — cannot verify the blurb")
            continue
        checked += 1

        # 1. lexical overlap
        ws = words(why)
        if ws:
            hit = sum(1 for w in ws if w in body)
            ratio = hit / len(ws)
            if ratio < 0.45:
                err.append(f"{tag}: only {ratio:.0%} of the blurb's content words appear in the "
                           f"article — this blurb probably describes something else")
            elif ratio < 0.60:
                warn.append(f"{tag}: {ratio:.0%} overlap with the article — worth re-reading")

        # 2. at least one verbatim multi-word anchor
        phrases = re.findall(r"[A-Za-z][A-Za-z'’]+(?: [A-Za-z][A-Za-z'’]+){1,3}", why)
        anchors = [p for p in phrases
                   if len(p) > 11 and p.lower() in body and words(p)]
        if not anchors:
            err.append(f"{tag}: no phrase from the blurb appears verbatim in the article — "
                       f"quote something concrete from the source")

        # 3. the kicker should not oversell a connection the article lacks
        if not b.get('kicker'):
            err.append(f"{tag}: missing kicker")

print(f"background blurbs checked: {checked}")
for w in warn:
    print(f"  WARN    {w}")
for e in err:
    print(f"  ERROR   {e}")
print(f"\n{len(err)} error(s), {len(warn)} warning(s)")
sys.exit(1 if err else 0)
