"""Build WahSim abilities from the real ability shop.

`Reputation-Matrix2/data/abilityShop.json` already holds 895 canon abilities
with class, type, level, AP cost and a `rules` block (activation / range /
duration / uses / effect / drawback). Rather than inventing a parallel list,
this module *translates* those records into playable `Ability` objects.

    from wahsim.core.abilities import load_loadout
    abils = load_loadout(['Shadow Dodge', "Sharpshooter's Edge"], dice)

Also supports per-character purchase sheets (see `data/purchases.json`), so
"Archie bought Shadow Dodge from Smoking J" becomes a real loadout.
"""
from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Iterable

from .dice import Dice
from .entities import Ability
from .roster import DATA_DIRS, load

# --------------------------------------------------------------------------
# Canon ability type/class -> WahSim skill.
# The shop is combat-flavoured; WahSim is a social/procedural engine, so each
# ability is mapped onto the skill it would plausibly express at a table.
# --------------------------------------------------------------------------
TYPE_SKILL = {
    'stealth':    'deception',
    'social':     'oratory',
    'leadership': 'oratory',
    'utility':    'recall',
    'support':    'empathy',
    'passive':    'composure',
    'divine':     'oratory',
    'arcane':     'forensics',
    'magic':      'forensics',
    'combat':     'intimidate',
    'martial':    'intimidate',
}

CLASS_SKILL = {
    'rogue':      'deception',
    'spy':        'deception',
    'gunslinger': 'intimidate',
    'barbarian':  'intimidate',
    'fighter':    'intimidate',
    'militia':    'composure',
    'paladin':    'oratory',
    'leader':     'oratory',
    'wizard':     'forensics',
    'artisan':    'forensics',
    'commoner':   'empathy',
}

# Tags let modes react to the *kind* of move without knowing the ability.
TYPE_TAGS = {
    'stealth':    ['risky'],
    'combat':     ['aggressive'],
    'martial':    ['aggressive'],
    'support':    ['defensive'],
    'passive':    ['defensive'],
    'social':     ['mood', 'political'],
    'leadership': ['political'],
    'utility':    ['evidence'],
    'arcane':     ['evidence'],
    'magic':      ['evidence'],
    'divine':     ['mood'],
}

USES_MAP = {
    'at will': -1, 'passive': -1, 'always': -1, 'unlimited': -1,
    'once per turn': -1, 'per turn': -1,
    'once per round': -1, 'per round': -1,
    'once per short rest': 2, 'short rest': 2,
    'once per long rest': 1, 'long rest': 1,
    'once per day': 1, 'per day': 1, 'daily': 1,
    'once per encounter': 1, 'per encounter': 1, 'encounter': 1,
    'once': 1,
}

_INDEX: dict[str, dict] | None = None


def _shop() -> list[dict]:
    d = load('abilityShop', {})
    return d.get('abilities', []) if isinstance(d, dict) else []


def index() -> dict[str, dict]:
    """name.lower() and id -> record."""
    global _INDEX
    if _INDEX is None:
        _INDEX = {}
        for a in _shop():
            if not isinstance(a, dict):
                continue
            if a.get('name'):
                _INDEX[str(a['name']).lower()] = a
            if a.get('id'):
                _INDEX[str(a['id']).lower()] = a
    return _INDEX


def find(query: str) -> dict | None:
    """Exact, then substring. Tolerates 'Sharpshooter' for "Sharpshooter's Edge"."""
    q = str(query).strip().lower()
    if not q:
        return None
    idx = index()
    if q in idx:
        return idx[q]
    hits = [(k, r) for k, r in idx.items() if q in k]
    if hits:
        # Prefer a name that *starts with* the query, then the shortest.
        # Without this, 'Guardian' matches 'Toolguardian' (shorter id) instead
        # of "Guardian's Vigil", which is plainly what was meant.
        hits.sort(key=lambda kr: (not str(kr[1].get('name', '')).lower().startswith(q),
                                  len(str(kr[1].get('name', '')))))
        return hits[0][1]
    return None


def _uses_from(rules: dict) -> int:
    raw = str(rules.get('uses', '')).strip().lower()
    if not raw:
        return 2
    for key, val in USES_MAP.items():
        if key in raw:
            return val
    m = re.search(r'(\d+)', raw)
    if m:
        n = int(m.group(1))
        return max(1, min(5, n))
    return 2


def _skill_for(rec: dict) -> str:
    return (TYPE_SKILL.get(str(rec.get('type', '')).lower())
            or CLASS_SKILL.get(str(rec.get('class', '')).lower())
            or 'advocacy')


def _bonus_for(rec: dict) -> int:
    """AP cost and level are the shop's own power signal — reuse them."""
    ap = rec.get('apCost') or 1
    lvl = rec.get('level') or 1
    try:
        ap, lvl = int(ap), int(lvl)
    except (TypeError, ValueError):
        ap, lvl = 1, 1
    return max(2, min(6, 1 + ap + lvl // 3))


def to_ability(rec: dict) -> Ability:
    """Translate one shop record into a playable Ability."""
    rules = rec.get('rules') or {}
    name = str(rec.get('name', 'Unnamed'))
    key = re.sub(r'[^a-z0-9]+', '_', name.lower()).strip('_')
    desc = str(rec.get('description') or rules.get('effect') or '').strip()
    if len(desc) > 150:
        desc = desc[:147].rsplit(' ', 1)[0] + '…'
    tags = list(TYPE_TAGS.get(str(rec.get('type', '')).lower(), []))
    if rules.get('drawback') and 'risky' not in tags:
        tags.append('risky')
    return Ability(
        key=key,
        name=(str(rec.get('icon', '')) + ' ' + name).strip(),
        description=desc or 'A trained technique.',
        skill=_skill_for(rec),
        bonus=_bonus_for(rec),
        uses=_uses_from(rules),
        tags=tags,
        effect=str(rules.get('effect', '')),
    )


def load_loadout(names: Iterable[str], dice: Dice | None = None,
                 quiet: bool = True) -> list[Ability]:
    """Resolve a list of ability names into Abilities. Unknown names are skipped."""
    out, seen = [], set()
    for n in names:
        rec = find(n)
        if not rec:
            if not quiet:
                print(f'  [ability not found: {n}]')
            continue
        ab = to_ability(rec)
        if ab.key in seen:
            continue
        seen.add(ab.key)
        out.append(ab)
    return out


# --------------------------------------------------------------------------
# Purchase sheets — who bought what, from whom
# --------------------------------------------------------------------------
def purchases() -> dict:
    """Read wahsim/data/purchases.json if present."""
    for d in (Path(__file__).resolve().parents[1] / 'data',):
        p = d / 'purchases.json'
        if p.exists():
            try:
                return json.loads(p.read_text(encoding='utf-8'))
            except json.JSONDecodeError:
                return {}
    return {}


def _sheet(character: str) -> dict | None:
    """Match a purchase sheet by key, articleId, name, or partial id.

    Canon ids and shorthand disagree (`archie_miser` vs `archie`), so this
    resolves either direction rather than requiring the sheet to guess.
    """
    q = str(character or '').strip().lower()
    if not q:
        return None
    data = purchases().get('characters', {})
    if q in data:
        return data[q]
    for key, rec in data.items():
        cands = {key, str(rec.get('articleId', '')).lower(),
                 str(rec.get('name', '')).lower()}
        if q in cands:
            return rec
        if any(c and (q.startswith(c) or c.startswith(q)) for c in cands if c):
            return rec
    return None


def loadout_for(character: str, dice: Dice | None = None) -> list[Ability]:
    """Every ability a character has purchased, across all vendors."""
    rec = _sheet(character)
    if not rec:
        return []
    names = []
    for entry in rec.get('bought', []):
        names.extend(entry.get('abilities', []))
    return load_loadout(names, dice)


def ap_spent(character: str) -> int:
    rec = _sheet(character)
    if not rec:
        return 0
    total = 0
    for entry in rec.get('bought', []):
        for n in entry.get('abilities', []):
            r = find(n)
            total += int((r or {}).get('apCost') or 0)
    return total


def describe(character: str) -> str:
    """Human-readable purchase sheet."""
    rec = _sheet(character)
    if not rec:
        return f'No purchase record for {character}.'
    lines = [f"{rec.get('name', character)} — {ap_spent(character)} AP spent"]
    for entry in rec.get('bought', []):
        lines.append(f"  from {entry.get('vendor', '?')}:")
        for n in entry.get('abilities', []):
            r = find(n)
            if r:
                lines.append(f"    • {r['name']} ({r.get('class')}, "
                             f"{r.get('type')}, {r.get('apCost')} AP) "
                             f"→ {_skill_for(r)} +{_bonus_for(r)}")
            else:
                lines.append(f'    • {n}  [NOT FOUND IN SHOP]')
    return '\n'.join(lines)
