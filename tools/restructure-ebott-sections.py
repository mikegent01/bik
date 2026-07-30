#!/usr/bin/env python3
"""Restructure Ebott Parts IV/V to match the What If reader's prose format.

The What If filings read better because they separate two things the Ebott
events had blended into one markdown blob:

    narrative  ->  what happened, in scene
    analysis   ->  Waluigi's finding, in a titled callout at the end

This converts each `## Section` of the description into a `sections[]` entry:

    {name, icon, subtitle, overview, waluigi_note}

The event renderer already supports exactly this shape (same as trials), so the
sections gain automatic <h2> anchors, a sidebar table of contents, and the
`.wnote` callout styling — with no changes to index.html.

The trailing Waluigi block of each section becomes `waluigi_note`. Everything
before it stays as `overview`. Inline mid-scene asides are left where they are;
only the closing analysis is promoted.

Run:  python3 tools/restructure-ebott-sections.py
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'events.json')

TARGETS = ('mount_ebott_survey_part_4', 'mount_ebott_survey_part_5')

# Per-section icon + the title its analysis callout should carry, mirroring the
# What If chapters' named analyses ("Waluigi's Structural Analysis" etc).
META = {
    # ---- Part IV ----
    'Departure':      ('\u2744\ufe0f', 'Waluigi\u2019s Opening Audit'),
    'The Walk':       ('\U0001f6a9', 'Waluigi\u2019s Note on the Ventilation Finding'),
    'The Station':    ('\U0001f39f\ufe0f', 'Waluigi\u2019s Economic Note'),
    'The Tantrum':    ('\u23f1\ufe0f', 'Waluigi\u2019s Escalation Ladder'),
    'The Blast':      ('\U0001f4a5', 'Waluigi\u2019s Findings on the Discharge'),
    'Boarding':       ('\U0001f6aa', 'Waluigi\u2019s Note on the Silence'),
    'The Mutiny':     ('\U0001f9ea', 'Waluigi\u2019s Note on the Trigger Condition'),
    'The Song':       ('\U0001f3b5', 'Waluigi\u2019s Note on the Verse That Wasn\u2019t His'),
    'The Intervention': ('\u2694\ufe0f', 'Waluigi\u2019s Correction to the Warlord'),
    'The Manual':     ('\U0001f4d5', 'Waluigi\u2019s Note on the Command'),
    'The Reading':    ('\U0001f4dc', 'Waluigi\u2019s Recursion Finding'),
    'The Page':       ('\u2753', 'Waluigi\u2019s Hypothesis on the Unrecorded Page'),
    'The Interrogation': ('\u270d\ufe0f', 'Waluigi\u2019s Structural Finding'),
    'Rapprochement':  ('\U0001f91d', 'Waluigi\u2019s Note on Mihawk'),
    'Transit':        ('\U0001f6e4\ufe0f', 'Waluigi\u2019s Census Finding'),
    'Arrival':        ('\U0001f6e2\ufe0f', 'Waluigi\u2019s Closing Assessment'),
    # ---- Part V ----
    'Egress Planning': ('\U0001f5fa\ufe0f', 'Waluigi\u2019s Peer-Assessment Finding'),
    'The Shortcut':   ('\U0001f9f1', 'Waluigi\u2019s Note on Unlogged Access'),
    'The Door That Should Not Have Been There': ('\U0001f6aa', 'Waluigi\u2019s Note on Protocol 47'),
    '"Cows Go"':      ('\U0001f42e', 'Waluigi\u2019s Defence of the Knock-Knock Joke'),
    'The Harbour':    ('\U0001f6a2', 'Waluigi\u2019s Note on the Warlord\u2019s Ethics Gap'),
    'Contact':        ('\U0001f441\ufe0f', 'Waluigi\u2019s Identification'),
    'The Shanty':     ('\U0001f3b6', 'Waluigi\u2019s Line-by-Line Inventory'),
    'The Anchor':     ('\u2693', 'Waluigi\u2019s Technical Note'),
    'The Glitch':     ('\U0001f300', 'Waluigi\u2019s Readings, Ranked'),
    'The Boarding':   ('\u2694\ufe0f', 'Waluigi\u2019s Note on the Confession of Origin'),
    'Protocol One':   ('\U0001f91a', 'Waluigi\u2019s Note on Weaponised Courtesy'),
    '"Papyrus"':      ('\U0001f4a2', 'Waluigi\u2019s Finding on Aimed Ordnance'),
    'The Chain':      ('\u26d3\ufe0f', 'Waluigi\u2019s Correction to the After-Action'),
    'The Withdrawal': ('\U0001f3c3', 'Waluigi\u2019s Note on Permission'),
    'The Cost':       ('\U0001f4d6', 'Waluigi\u2019s Note on the Materiel Loss'),
    'The False Sun':  ('\u2600\ufe0f', 'Waluigi\u2019s Finding'),
}


def meta_for(name: str):
    for key, val in META.items():
        if name.startswith(key):
            return val
    return ('\u25c8', 'Waluigi\u2019s Note')


def is_aside(line: str) -> bool:
    """A Waluigi analysis paragraph.

    Covers plain *italic* asides and the ***bold-italic*** emphasis lines that
    Waluigi uses for his key findings — those sit inside an analysis run and
    would otherwise break the backward walk that detects it.
    """
    s = line.strip()
    if not (s.startswith('*') and s.endswith('*')):
        return False
    # The WAH sign-off closes an analysis run and must not break the walk.
    if re.fullmatch(r'\*WA+H+!*\*', s, re.I):
        return True
    if len(s) <= 12:
        return False
    if s.startswith('***'):          # ***finding*** emphasis line
        return True
    if s.startswith('**'):           # **bold** prose, not an aside
        return False
    return len(s) > 40


def split_section(body: str):
    """Return (overview, waluigi_note).

    The note is the trailing run of consecutive Waluigi aside paragraphs at the
    end of the section. Anything before that — including mid-scene asides —
    stays in the narrative where it belongs.
    """
    blocks = [b for b in body.split('\n\n')]
    # Walk backwards to the last non-blank block.
    i = len(blocks) - 1
    while i >= 0 and not blocks[i].strip():
        i -= 1
    end = i + 1

    # A trailing <div> callout (protocol box, lava box, void note) is a
    # deliberate visual element and must stay in the narrative. Step back over
    # it so the analysis run behind it is still found.
    while end - 1 >= 0:
        t = blocks[end - 1].strip()
        if t.startswith('<div') or t.endswith('</div>'):
            end -= 1
            continue
        break

    start = end
    while start - 1 >= 0:
        cand = blocks[start - 1].strip()
        if not cand:
            start -= 1
            continue
        if is_aside(cand):
            start -= 1
            continue
        break
    if start >= end:
        return body.strip(), ''
    note_blocks = [b.strip() for b in blocks[start:end] if b.strip()]
    note = '\n\n'.join(note_blocks)
    # Require a real analysis block, not a one-line quip.
    if len(note.split()) < 25:
        return body.strip(), ''
    overview = '\n\n'.join(blocks[:start] + blocks[end:]).strip()
    if not overview:
        return body.strip(), ''
    # Strip the wrapping asterisks so it reads as a titled note, not italics.
    cleaned = []
    for b in note_blocks:
        t = b.strip()
        if t.startswith('*') and t.endswith('*') and not t.startswith('**'):
            t = t[1:-1].strip()
        t = re.sub(r'^WAH!\s*', '', t)
        t = re.sub(r'^Waluigi continues:\s*', '', t)
        if t:
            cleaned.append(t[0].upper() + t[1:] if t[:1].islower() else t)
    return overview, '\n\n'.join(cleaned)


def restructure(ev: dict) -> dict:
    desc = ev['description']
    # Preserve the masthead (title block) before the first ## section.
    head, *rest = re.split(r'\n## ', desc)
    sections = []
    for chunk in rest:
        nl = chunk.index('\n') if '\n' in chunk else len(chunk)
        name = chunk[:nl].strip()
        body = chunk[nl:].strip()
        icon, note_title = meta_for(name)
        overview, note = split_section(body)
        sec = {'name': name, 'icon': icon, 'overview': overview}
        if note:
            sec['waluigi_note'] = f'**{note_title}** \u2014 {note}'
        sections.append(sec)
    ev['description'] = head.strip()
    ev['sections'] = sections
    return ev


with open(PATH, encoding='utf-8') as f:
    events = json.load(f)

for ev in events:
    if isinstance(ev, dict) and ev.get('id') in TARGETS:
        before = len(ev['description'].split())
        restructure(ev)
        secs = ev['sections']
        noted = sum(1 for s in secs if s.get('waluigi_note'))
        words = sum(len(s['overview'].split()) + len(s.get('waluigi_note', '').split())
                    for s in secs) + len(ev['description'].split())
        print(f"{ev['id']}: {len(secs)} sections, {noted} with analysis callouts, "
              f"{words} words (was {before})")

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(events, f, ensure_ascii=False, indent=1)
    f.write('\n')
print('written')
