#!/usr/bin/env python3
"""
build-rnn-broadcast.py — cut a Rakasha News Network episode.

WEEKLY CADENCE (read this before you skip it)
---------------------------------------------
A new RNN broadcast is produced EVERY WEEK in which applicable new events
exist. "Applicable new events" means: one or more session filings were added
to Reputation-Matrix2/data/events.json, or the "RECENT ADVENTURES — WHAT
WE'VE BEEN THROUGH" feed in index.html gained an item, since the last episode
in tools/rnn-scripts/. If nothing new was filed, no episode is cut and the
existing one stays labelled "last week".

WHAT THIS SCRIPT DOES
---------------------
1.  Reads every episode script in tools/rnn-scripts/*.json (hand-written
    Rakasha copy — this script does not invent prose).
2.  Auto-times every caption line from its word count so the player has a
    real runtime without anyone hand-tuning milliseconds.
3.  Validates that every referenced expression exists as a PNG in
    Reputation-Matrix2/animation_frames/ and every sourceEvent id resolves
    against data/events.json.
4.  Emits Reputation-Matrix2/data/rnn-broadcasts.js  (window.RNN_BROADCASTS).
5.  Splices the "LAST WEEK ON THE RAKASHA NEWS NETWORK" block into the top of
    README.md and Reputation-Matrix2/README.md between the marker comments.
6.  Reports which events aired and which are still unaired, so the next
    episode knows what it owes the audience.

USAGE
-----
    python3 tools/build-rnn-broadcast.py            # build + write
    python3 tools/build-rnn-broadcast.py --check    # report only, no writes
    python3 tools/build-rnn-broadcast.py --unaired  # list unaired events
"""

import json
import os
import sys
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCRIPTS_DIR = os.path.join(ROOT, 'tools', 'rnn-scripts')
FRAMES_DIR = os.path.join(ROOT, 'Reputation-Matrix2', 'animation_frames')
EVENTS_PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'events.json')
OUT_JS = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'rnn-broadcasts.js')
ROOT_README = os.path.join(ROOT, 'README.md')
PROJECT_README = os.path.join(ROOT, 'Reputation-Matrix2', 'README.md')

README_START = '<!-- RNN:LAST-WEEK:START -->'
README_END = '<!-- RNN:LAST-WEEK:END -->'

PLAYER_URL = 'Reputation-Matrix2/app/pages/standalone/rakasha-news-network.html'

# Timing model: reading pace for the caption typewriter, in ms.
MS_PER_WORD = 340
MIN_LINE_MS = 2600
MAX_LINE_MS = 11000
BEAT_AFTER_LINE = 700


# ----------------------------------------------------------------- helpers
def load_scripts():
    if not os.path.isdir(SCRIPTS_DIR):
        return []
    episodes = []
    for name in sorted(os.listdir(SCRIPTS_DIR)):
        if not name.endswith('.json'):
            continue
        with open(os.path.join(SCRIPTS_DIR, name), 'r', encoding='utf-8') as f:
            ep = json.load(f)
        ep['_file'] = 'tools/rnn-scripts/' + name
        episodes.append(ep)
    episodes.sort(key=lambda e: e.get('number', 0))
    return episodes


def available_expressions():
    if not os.path.isdir(FRAMES_DIR):
        return set()
    return {n[:-4] for n in os.listdir(FRAMES_DIR) if n.endswith('.png')}


def load_events():
    try:
        with open(EVENTS_PATH, 'r', encoding='utf-8') as f:
            return json.load(f)
    except (OSError, ValueError):
        return []


def time_line(text):
    words = len(str(text).split())
    return max(MIN_LINE_MS, min(MAX_LINE_MS, words * MS_PER_WORD + BEAT_AFTER_LINE))


def process(ep, frames, event_ids, problems):
    """Fill in durations and runtime; collect validation problems."""
    runtime = 0
    for seg in ep.get('segments', []):
        for line in seg.get('lines', []):
            expr = line.get('expression', 'normal')
            if frames and expr not in frames:
                problems.append('%s: unknown expression frame "%s"' % (ep['_file'], expr))
            line['duration'] = line.get('duration') or time_line(line.get('text', ''))
            runtime += line['duration']
    for eid in ep.get('sourceEvents', []):
        if event_ids and eid not in event_ids:
            problems.append('%s: sourceEvent "%s" not found in events.json' % (ep['_file'], eid))
    ep['runtimeMs'] = runtime
    ep.pop('_file', None)
    return ep


def fmt_runtime(ms):
    s = round(ms / 1000)
    return '%d:%02d' % (s // 60, s % 60)


# ----------------------------------------------------------------- writers
def write_data_js(episodes, generated):
    payload = {
        'generated': generated,
        'latest': episodes[-1]['id'] if episodes else None,
        'cadence': 'A new broadcast is cut every week that applicable new events exist.',
        'episodes': episodes,
    }
    body = json.dumps(payload, indent=2, ensure_ascii=False)
    banner = (
        '/* GENERATED FILE — do not hand-edit.\n'
        '   Source scripts: tools/rnn-scripts/*.json\n'
        '   Rebuild:        python3 tools/build-rnn-broadcast.py\n'
        '   Cadence:        one new episode per week when new events exist. */\n'
    )
    with open(OUT_JS, 'w', encoding='utf-8') as f:
        f.write(banner + 'window.RNN_BROADCASTS = ' + body + ';\n')


def readme_block(ep, depth):
    """depth: '' for the repo root, '../' for Reputation-Matrix2/README.md."""
    player = depth + PLAYER_URL
    script = depth + 'tools/rnn-scripts/'
    segs = ep.get('segments', [])
    rows = []
    for seg in segs:
        first = seg.get('lines', [{}])[0].get('text', '')
        rows.append('| **%s** | %s | %s |' % (
            seg.get('slug', ''), seg.get('title', ''),
            (first[:96] + '…') if len(first) > 96 else first))

    lines = [
        README_START,
        '## 📺 Last Week on the Rakasha News Network',
        '',
        '> **EP %03d — %s**  ' % (ep.get('number', 0), ep.get('title', '')),
        '> Hunt Day %s · covering %s · runtime %s  ' % (
            ep.get('huntDay', ''), ep.get('covering', ''), fmt_runtime(ep.get('runtimeMs', 0))),
        '> Anchor: **%s**, %s · Field: **%s**, %s' % (
            ep.get('anchorName', ''), ep.get('anchorRole', ''),
            ep.get('fieldName', ''), ep.get('fieldRole', '')),
        '',
        '**▶ [Watch the broadcast](%s)** — the Rakasha desk reads back everything the party '
        'survived last week, composited live from `Reputation-Matrix2/animation_frames/`.' % player,
        '',
        '| Segment | Story | Cold open line |',
        '|---|---|---|',
    ] + rows + [
        '',
        '*Cadence: a new RNN broadcast is cut **every week that applicable new events exist**. '
        'File the session, then run `python3 tools/build-rnn-broadcast.py` and drop the new script '
        'in `%s`. The newest episode always sits here, labelled “last week”.*' % script,
        '',
        README_END,
    ]
    return '\n'.join(lines)


def splice_readme(path, block, create_title=None):
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            text = f.read()
    else:
        text = ('# %s\n\n' % create_title) if create_title else ''

    i, j = text.find(README_START), text.find(README_END)
    if i != -1 and j != -1:
        new = text[:i] + block + text[j + len(README_END):]
    else:
        # Insert directly beneath the first H1 so "last week" stays at the top.
        if text.startswith('# '):
            nl = text.find('\n')
            new = text[:nl + 1] + '\n' + block + '\n' + text[nl + 1:]
        else:
            new = block + '\n\n' + text
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new)


# ----------------------------------------------------------------- main
def main():
    args = set(sys.argv[1:])
    check_only = '--check' in args

    episodes = load_scripts()
    if not episodes:
        print('No episode scripts found in tools/rnn-scripts/. Nothing to cut.')
        return 1

    frames = available_expressions()
    events = load_events()
    event_ids = {e.get('id') for e in events}

    problems = []
    built = [process(ep, frames, event_ids, problems) for ep in episodes]

    aired = {eid for ep in built for eid in ep.get('sourceEvents', [])}
    unaired = [e.get('id') for e in events if e.get('id') not in aired]

    if '--unaired' in args:
        print('Events never aired on RNN (%d):' % len(unaired))
        for eid in unaired[-25:]:
            print('  -', eid)
        return 0

    for p in problems:
        print('⚠ ', p)

    latest = built[-1]
    generated = datetime.now(timezone.utc).strftime('%Y-%m-%d')

    print('RNN broadcast build')
    print('  episodes on file : %d' % len(built))
    print('  latest           : EP %03d — %s (%s)' % (
        latest.get('number', 0), latest.get('title', ''), fmt_runtime(latest['runtimeMs'])))
    print('  segments         : %d' % len(latest.get('segments', [])))
    print('  events aired     : %d / %d' % (len(aired), len(events)))

    if check_only:
        print('  --check: no files written.')
        return 1 if problems else 0

    write_data_js(built, generated)
    splice_readme(ROOT_README, readme_block(latest, ''), create_title='Waluipedia')
    splice_readme(PROJECT_README, readme_block(latest, '../'))

    print('  wrote            : Reputation-Matrix2/data/rnn-broadcasts.js')
    print('  wrote            : README.md, Reputation-Matrix2/README.md ("last week" block)')
    print('  next episode owes: %d unaired events (see --unaired)' % len(unaired))
    return 1 if problems else 0


if __name__ == '__main__':
    sys.exit(main())
