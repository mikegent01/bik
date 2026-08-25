#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Repairs the five pre-existing check failures:

  check-exhibits.py      prop_remi_stormwatch_receipt was referenced by
                         events.json and by investigation exhibit
                         ex_stormwatch_receipt, but never filed.
  check-investigations   prop_green_t_threshold_parley was referenced by
                         exhibit ex_green_t_parley, but never filed.
  check-background.py    two investigation `background` blurbs quoted nothing
                         verbatim from the article they link to.

Both props are reconstructed from the record that already cites them — the
event prose in green_t_at_the_door_and_the_scorncrow_underfoot and the two
investigation exhibits — and invent no figure or fact those sources lack.

    python3 tools/repair-missing-exhibits-and-blurbs.py
"""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'Reputation-Matrix2', 'data')
EVENT_ID = 'green_t_at_the_door_and_the_scorncrow_underfoot'

NEW_PROPS = {
    "prop_remi_stormwatch_receipt": {
        "kind": "invoice",
        "icon": "\U0001f9fe",
        "title": "Storm-Watch Receipt — Three Items, One Storm",
        "subtitle": "Wario's table · Tymnas's cottage · 30 Harvestide, 1040 BF · no counterfoil",
        "items": [],
        "articles": [EVENT_ID],
        "note": ("Three lines, completed while the weather argued with the walls. No amount on any of "
                 "them, and no line at all for the decoy crystal — which is the only part Wario "
                 "expects to be remembered."),
        "body": (
            '<div class="pd-head">'
            '<div class="pd-org">WARIO &mdash; GOODS, WARES, AND TIMELY ADVICE</div>'
            '<div class="pd-sub">Table copy &middot; Tymnas&rsquo;s cottage &middot; storm watch, 30 Harvestide 1040 BF</div>'
            '</div>'
            '<div class="pd-meta">Sold to: Remi &middot; Sold during: the storm &middot; Counterfoil: none kept</div>'
            '<table class="pd-table"><thead><tr><th>Item</th><th>Condition</th><th>Amount</th></tr></thead><tbody>'
            '<tr><td>Skullsplitter Warhammer</td><td>used, honest</td><td>&mdash;</td></tr>'
            '<tr><td>Peach&rsquo;s Castle Brick</td><td>architectural</td><td>&mdash;</td></tr>'
            '<tr><td>The Rotting Skull Piercer</td><td>do not ask</td><td>&mdash;</td></tr>'
            '</tbody></table>'
            '<div class="pd-total">Balance &mdash; settled at the table. The figure does not appear on this copy.</div>'
            '<div class="pd-clause">Goods sold as seen. No returns during structural failure, before '
            'structural failure, or on account of structural failure. The window is not covered.</div>'
            '<div class="pd-clause">No line is raised for the decoy crystal handed over at the same '
            'table. The seller records that it was given freely. The seller has never given anything '
            'freely and both parties know what that means.</div>'
            '<div class="pd-margin">Three items bought by a girl who expected to need to hit something '
            'back before morning. Not rope, not nails, not blankets. And one free item with no line on '
            'it, which is how Wario writes down a debt he intends to collect in a worse year. '
            '&mdash; W.</div>'
            '<div class="pd-sign"><div><div class="pd-sigline"><i>(a thumbprint, in something that is not ink)</i></div>'
            '<div class="pd-sigcap">For the seller</div></div></div>'
        ),
        "stamps": ["paid"],
    },
    "prop_green_t_threshold_parley": {
        "kind": "note",
        "icon": "\U0001f6aa",
        "title": "Threshold Note — Green T, After the Storm Line",
        "subtitle": "Compiled from overlapping witness accounts · Tymnas's cottage doorway · 30 Harvestide, 1040 BF",
        "items": [],
        "articles": [EVENT_ID],
        "note": ("The cottage asked a man whether he was real, he answered with a gunshot through a "
                 "window they had just paid to fix, and the spell that was supposed to settle it lit "
                 "one square inch of his forehead. Filed from four witnesses who agree on the yawn and "
                 "on nothing after it."),
        "body": (
            '<div class="pd-head">'
            '<div class="pd-org">Archive of the Waluipedia &mdash; Threshold Note</div>'
            '<div class="pd-sub">Subject: Green T &middot; Place: the doorway of Tymnas&rsquo;s cottage &middot; 30 Harvestide 1040 BF</div>'
            '</div>'
            '<div class="pd-meta">Witnesses: Markop, Feyward Dan, Salam, Remi &middot; Compiled by the archivist &middot; Not a deposition</div>'
            '<div class="pd-label">OBSERVED, IN ORDER</div>'
            '<div class="pd-clause">1. The subject arrived from the storm line in the rain and was asked, '
            'in the doorway, whether he was real.</div>'
            '<div class="pd-clause">2. The questioning party yawned. All four witnesses volunteered this '
            'detail unprompted and none could explain why it was the part they kept.</div>'
            '<div class="pd-clause">3. The subject answered the question by discharging a pistol through '
            'the cottage window. The pane had been repaired within the hour. The repair did not survive '
            'the answer.</div>'
            '<div class="pd-quote">&ldquo;Would a fake do that?&rdquo;</div>'
            '<div class="pd-clause">4. A second test was offered and a third was cast: a reading for '
            'non-humanoid blood in the area. The subject did not glow throughout. The reading lit the '
            'forehead only, and nowhere else.</div>'
            '<div class="pd-clause">5. Asked what the residue on his face was, the subject answered: '
            '<i>&ldquo;Fairy? This is Mazebound. I got what I needed.&rdquo;</i> The answer was accepted by '
            'the subject and by no one else present.</div>'
            '<div class="pd-clause">6. Asked whether he would be let in, the subject was refused on the '
            'grounds that it sounded like a terrible idea. He was admitted afterwards, by a different '
            'party, once the refusal had stopped being the most dangerous option in the doorway.</div>'
            '<div class="pd-margin--red">A mark is not a replacement. Marks are acquired. The archive '
            'has no record of what touched that forehead, and the man it belongs to has no record of it '
            'either, and those two absences are not the same thing. &mdash; W.</div>'
            '<div class="pd-wah">Four witnesses, one agreed detail, and a spell that stopped early. '
            'Keep the door on the chain. &mdash; WAH.</div>'
            '<div class="pd-sign"><div><div class="pd-sigline"><i>(compiled, unsigned by the witnesses)</i></div>'
            '<div class="pd-sigcap">Archive copy</div></div></div>'
        ),
        "stamps": ["evidence"],
    },
}

# Blurb repairs: check-background.py requires at least one 2-4 word phrase from
# the blurb to appear verbatim in the linked article, and >=60% of its content
# words to occur there. Both blurbs were rewritten to quote the source.
BLURB_FIXES = {
    ('mount_ebot_one_t_file', 'the_mount_ebot_expedition'): {
        "kicker": "Prior filing",
        "why": ("Part I is the crash, the stencilled produce sack, and a summit plank reading Mount Ebot — "
                "one T. This leaf is the morning after, in the air."),
    },
    ('mario_charred_note_file', 'the_embassy_ambush_and_luigi_interrogation'): {
        "kicker": "the first confession that the farm existed at all",
        "why": ("An emotional backseat confession from Luigi is where the farm entered the archive — the "
                "truth about Mario's disappearance on the farm, Harvestide 1035 BF. This new paper now "
                "tries to dictate what the farm meant."),
    },
}


def load(p):
    with open(p, encoding='utf-8') as f:
        return json.load(f)


def save(p, o):
    with open(p, 'w', encoding='utf-8') as f:
        json.dump(o, f, indent=2, ensure_ascii=False)
        f.write('\n')


def main():
    props_path = os.path.join(DATA, 'props.json')
    doc = load(props_path)
    added = [k for k in NEW_PROPS if k not in doc['props']]
    doc['props'].update(NEW_PROPS)
    save(props_path, doc)
    print('props filed  :', added or '(already present, overwritten)')

    inv_path = os.path.join(DATA, 'investigations.json')
    inv = load(inv_path)
    files = inv if isinstance(inv, list) else inv.get('investigations', inv)
    changed = []
    for f in files:
        for b in f.get('background', []):
            fix = BLURB_FIXES.get((f['id'], b.get('id')))
            if fix and (b.get('why') != fix['why'] or b.get('kicker') != fix['kicker']):
                b['kicker'], b['why'] = fix['kicker'], fix['why']
                changed.append(f"{f['id']}/{b['id']}")
    save(inv_path, inv)
    print('blurbs fixed :', changed or '(none)')


if __name__ == '__main__':
    main()
