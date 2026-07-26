#!/usr/bin/env python3
"""Generate data/abilityPoints.json — the Ability Point (AP) budget per
character, derived from the XP levels already recorded in xp.html.

Nothing here invents progression. xp.html's PLAYERS block is the only place in
the repo that carries level/currentXP (data/characters.json has neither), so it
is the single source of truth. This script reads it and writes a small derived
file the shop can consume without parsing 1.3MB of HTML at runtime.

Re-run after the Python XP evaluator updates xp.html.
"""
import json, re, sys, os, datetime
from zoneinfo import ZoneInfo

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
XP   = os.path.join(ROOT, 'xp.html')
SHOP = os.path.join(ROOT, 'data', 'abilityShop.json')
OUT  = os.path.join(ROOT, 'data', 'abilityPoints.json')

# --- AP formula -------------------------------------------------------------
# 1 AP per level, plus 1 bonus AP every 5th level.
#
# Deliberately close to linear. Triangular/exponential curves (L*(L+1)/2) hit
# 210 AP by level 20 and 465 by level 30, which snowballs into "buy everything"
# — and this campaign is expected to run past 20, so the curve has to stay sane
# with no upper bound. This one yields 24 AP at Lv20 and 48 at Lv40: always
# scarce, never explosive.
def ap_for_level(level: int) -> int:
    L = max(0, int(level or 0))
    return L + L // 5

# --- AP cost per ability ----------------------------------------------------
# Tiered by the ability's required level, so a capstone stays expensive without
# needing a separate price column.
def ap_cost(level: int) -> int:
    L = int(level or 1)
    if L <= 3:  return 1
    if L <= 7:  return 2
    if L <= 11: return 3
    return 5

def load_players():
    src = open(XP, encoding='utf-8').read()
    i = src.find('const PLAYERS = {')
    if i < 0:
        sys.exit('FAILED: could not find `const PLAYERS = {` in xp.html')
    j = src.find('\n};', i)
    if j < 0:
        sys.exit('FAILED: could not find the end of the PLAYERS block')
    blob = src[i + len('const PLAYERS = '):j + 2]
    return json.loads(blob)

def norm(s):
    """xp.html uses `toadlee`/`greent`; wallets and abilityShop use
    `toad_lee`/`green_t`. Compare on a punctuation-free key."""
    return re.sub(r'[^a-z0-9]', '', str(s or '').lower())

def main():
    players = load_players()
    shop    = json.load(open(SHOP, encoding='utf-8'))
    abilities = shop.get('abilities', [])

    by_norm = {norm(k): (k, v) for k, v in players.items()}

    # Everyone who holds an ability, so we can report canon that predates AP.
    held = {}
    for ab in abilities:
        for k in ab.get('knownBy') or []:
            held.setdefault(k['id'], []).append(ab)

    out_players = {}
    # dict iteration intentionally preserves xp.html's curated roster order. The
    # Training Wing uses rosterOrder rather than inventing another sort.
    for roster_order, (key, p) in enumerate(players.items()):
        lvl = p.get('level')
        if lvl is None:
            continue
        earned = ap_for_level(lvl)
        mine = held.get(key) or []
        if not mine:                                  # try the normalised id
            for hid, abs_ in held.items():
                if norm(hid) == norm(key):
                    mine = abs_
                    break
        spent = sum(ap_cost(a['level']) for a in mine)
        out_players[key] = {
            'name': p.get('name', key),
            # Keep faction and source order beside the AP projection so clients
            # can enforce the XP roster's ally/member targeting policy without
            # parsing the very large xp.html document in the browser.
            'faction': p.get('faction', 'independent'),
            'rosterOrder': roster_order,
            'level': lvl,
            'currentXP': p.get('currentXP'),
            'nextXP': p.get('nextXP'),
            'apEarned': earned,
            'apSpent': spent,
            'apAvailable': earned - spent,
            'known': [{'id': a['id'], 'name': a['name'], 'level': a['level'],
                       'apCost': ap_cost(a['level'])} for a in mine],
            # Story-granted abilities above the holder's level. Real canon:
            # Speaker L is Lv3 but holds a Lv8 Emergency Decree. The shop must
            # show these as already-known rather than pretend they're illegal.
            'grantedAboveLevel': [
                {'id': a['id'], 'name': a['name'], 'requires': a['level']}
                for a in mine if a['level'] > lvl
            ],
        }

    doc = {
        'meta': {
            'generated': datetime.datetime.now(ZoneInfo('America/New_York')).date().isoformat(),
            'generator': 'tools/build_ability_points.py',
            'source': 'Reputation-Matrix2/xp.html -> const PLAYERS (faction / source order / level / currentXP)',
            'formula': 'apEarned = level + floor(level / 5)',
            'costRule': 'AP cost by required level: 1-3 -> 1, 5-7 -> 2, 8-11 -> 3, 14+ -> 5',
            'trainingTargetFactions': ['disaster_inc', 'disaster_inc_allies'],
            'note': ('Abilities are unlocked with Ability Points earned by levelling, '
                     'not with gold. Training targets are restricted to Disaster Inc. '
                     'members and allies from the sorted XP roster. Nothing here is '
                     'authoritative over the table: the shop only generates a receipt, '
                     'it never edits a character sheet.'),
        },
        'apByLevel': {str(L): ap_for_level(L) for L in range(1, 41)},
        'costTiers': [
            {'maxLevel': 3,  'ap': 1, 'label': 'Foundational'},
            {'maxLevel': 7,  'ap': 2, 'label': 'Practised'},
            {'maxLevel': 11, 'ap': 3, 'label': 'Advanced'},
            {'maxLevel': 99, 'ap': 5, 'label': 'Capstone'},
        ],
        'players': out_players,
    }
    json.dump(doc, open(OUT, 'w', encoding='utf-8'), indent=1, ensure_ascii=False)

    over = [(k, v) for k, v in out_players.items() if v['apAvailable'] < 0]
    print(f'wrote {OUT}')
    print(f'  players with a level: {len(out_players)}')
    print(f'  holders over budget (story-granted): {len(over)}')
    for k, v in over:
        print(f"    {k}: lv{v['level']} earned {v['apEarned']} spent {v['apSpent']}")

if __name__ == '__main__':
    main()
