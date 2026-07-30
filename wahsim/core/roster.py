"""Load real Waluipedia records as playable actors, or invent new ones.

Reads Reputation-Matrix2/data/*.json when available. Everything degrades to
generated content so the game runs standalone outside the repo.
"""
from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

from .dice import Dice
from .entities import Actor, Ability, build_actor

DATA_DIRS = [
    Path(__file__).resolve().parents[2] / 'Reputation-Matrix2' / 'data',
    Path.cwd() / 'Reputation-Matrix2' / 'data',
]

_CACHE: dict[str, Any] = {}


def load(name: str, default=None):
    if name in _CACHE:
        return _CACHE[name]
    for d in DATA_DIRS:
        p = d / f'{name}.json'
        if p.exists():
            try:
                _CACHE[name] = json.loads(p.read_text(encoding='utf-8'))
                return _CACHE[name]
            except Exception:                          # noqa: BLE001
                break
    _CACHE[name] = default if default is not None else []
    return _CACHE[name]


def has_data() -> bool:
    return bool(load('characters'))


# --------------------------------------------------------------------------
# Keyword → aptitude inference. Turns wiki prose into stats.
# --------------------------------------------------------------------------
_HINTS = {
    'logic':    ('scholar', 'archiv', 'research', 'engineer', 'lawyer', 'prosecut',
                 'judge', 'magus', 'analy', 'strateg', 'account', 'audit'),
    'presence': ('king', 'queen', 'captain', 'commander', 'general', 'lord', 'lady',
                 'leader', 'chief', 'speaker', 'princess', 'emperor', 'hero'),
    'insight':  ('oracle', 'seer', 'spy', 'scout', 'detective', 'investigat',
                 'diviner', 'empath', 'medic', 'doctor'),
    'resolve':  ('warrior', 'knight', 'soldier', 'guard', 'legion', 'survivor',
                 'veteran', 'monk', 'templar'),
    'cunning':  ('thief', 'rogue', 'smuggl', 'pirate', 'merchant', 'broker',
                 'crimin', 'bandit', 'gambl', 'con', 'trick', 'wario'),
}

_SKILL_HINTS = {
    'advocacy':      ('lawyer', 'prosecut', 'advoc', 'counsel', 'judge'),
    'procedure':     ('judge', 'clerk', 'magistrate', 'bureaucr', 'legion', 'audit'),
    'cross_examine': ('detective', 'investigat', 'prosecut', 'interrog'),
    'oratory':       ('speaker', 'king', 'queen', 'delegate', 'preacher', 'herald'),
    'intimidate':    ('warlord', 'bowser', 'general', 'enforcer', 'bandit'),
    'empathy':       ('healer', 'medic', 'handmaiden', 'priest', 'druid'),
    'deception':     ('spy', 'thief', 'trick', 'infiltrat', 'smuggl'),
    'negotiate':     ('merchant', 'diplomat', 'broker', 'delegate', 'trader'),
    'forensics':     ('archiv', 'scholar', 'scientist', 'coroner', 'engineer'),
}


def _profile(text: str) -> tuple[tuple[str, ...], dict[str, int]]:
    t = text.lower()
    strong = tuple(a for a, keys in _HINTS.items() if any(k in t for k in keys))
    skills = {}
    for s, keys in _SKILL_HINTS.items():
        hits = sum(1 for k in keys if k in t)
        if hits:
            skills[s] = min(5, 2 + hits)
    return strong[:2], skills


def _clean(s: str, n: int = 150) -> str:
    s = re.sub(r'\s+', ' ', str(s or '')).strip()
    return (s[:n].rsplit(' ', 1)[0] + '…') if len(s) > n else s


def character_records() -> list[dict]:
    return [c for c in load('characters') if isinstance(c, dict) and c.get('id')]


def find_character(query: str) -> dict | None:
    q = query.lower().strip()
    recs = character_records()
    for c in recs:
        if c['id'] == q or str(c.get('name', '')).lower() == q:
            return c
    for c in recs:
        if q in c['id'] or q in str(c.get('name', '')).lower():
            return c
    return None


def actor_from_record(rec: dict, role: str, dice: Dice, *, is_player: bool = False,
                      power: int = 0) -> Actor:
    text = ' '.join(str(rec.get(k, '')) for k in
                    ('name', 'title', 'affiliation', 'race', 'summary'))
    strong, skills = _profile(text)
    lvl = rec.get('level') or 0
    a = build_actor(
        key=rec['id'],
        name=rec.get('name', rec['id']),
        role=role,
        dice=dice,
        faction=_clean(rec.get('affiliation', ''), 40),
        blurb=_clean(rec.get('title') or rec.get('summary', ''), 130),
        strong=strong or ('presence',),
        skills=skills,
        power=power + (1 if lvl and int(lvl) >= 5 else 0),
        is_player=is_player,
    )
    a.meta['source'] = 'canon'
    a.meta['article'] = rec['id']
    return a


# --------------------------------------------------------------------------
# Generated cast (used when no data, or when the player wants fresh faces)
# --------------------------------------------------------------------------
_FIRST = ['Corvin', 'Mabel', 'Tarquin', 'Odile', 'Bram', 'Vesper', 'Ludo', 'Wren',
          'Ostrel', 'Fenna', 'Garrick', 'Sable', 'Pim', 'Thessaly', 'Roon', 'Ilka']
_LAST = ['Ashgrove', 'Pellamy', 'Vondar', 'Quill', 'Marrow', 'Stellworth', 'Bex',
         'Underleaf', 'Crane', 'Hollowell', 'Sarn', 'Whitlock', 'Dray', 'Ferrow']
_TRAITS = ['nervous but precise', 'openly contemptuous', 'exhaustively polite',
           'grieving and angry', 'transparently lying', 'genuinely confused',
           'rehearsed to the syllable', 'hostile to the whole proceeding',
           'trying very hard to be helpful', 'protecting somebody else']

ROLE_KIT = {
    'judge':      (('logic', 'resolve'), {'procedure': 5, 'composure': 4, 'recall': 3}),
    'prosecutor': (('logic', 'presence'), {'advocacy': 4, 'cross_examine': 4, 'procedure': 3}),
    'defense':    (('cunning', 'insight'), {'advocacy': 4, 'empathy': 3, 'procedure': 2}),
    'witness':    (('resolve',), {'composure': 2, 'recall': 2}),
    'delegate':   (('presence', 'cunning'), {'oratory': 3, 'negotiate': 4}),
    'bailiff':    (('resolve',), {'intimidate': 3}),
    'expert':     (('logic', 'insight'), {'forensics': 5, 'recall': 4}),
}


def generate_actor(role: str, dice: Dice, *, name: str = '', faction: str = '',
                   blurb: str = '', power: int = 0, is_player: bool = False) -> Actor:
    strong, skills = ROLE_KIT.get(role, (('presence',), {}))
    nm = name or f'{dice.pick(_FIRST)} {dice.pick(_LAST)}'
    a = build_actor(
        key=re.sub(r'[^a-z0-9]+', '_', nm.lower()).strip('_') or role,
        name=nm, role=role, dice=dice, faction=faction,
        blurb=blurb or dice.pick(_TRAITS),
        strong=strong, skills=dict(skills), power=power, is_player=is_player,
    )
    a.meta['source'] = 'generated'
    return a


# --------------------------------------------------------------------------
# Abilities — derived from what an actor is actually good at
# --------------------------------------------------------------------------
_ABILITY_POOL = [
    ('objection',   'OBJECTION!',        'Interrupt and challenge the current line. Contest to erase a gain.',
     'procedure', 3, 3, ['interrupt']),
    ('press',       'Press the Point',   'Hammer one contradiction. +3 but costs your composure if it misses.',
     'cross_examine', 3, -1, ['aggressive']),
    ('appeal',      'Appeal to the Room','Play to the gallery. Shifts mood rather than facts.',
     'oratory', 3, 2, ['mood']),
    ('recall',      'Total Recall',      'Produce an exact citation from the record.',
     'recall', 4, 2, ['evidence']),
    ('rattle',      'Rattle the Witness', 'Direct pressure. Target loses composure on a hit.',
     'intimidate', 3, 2, ['aggressive']),
    ('disarm',      'Disarming Candour', 'Concede something small to gain trust.',
     'empathy', 3, 2, ['mood']),
    ('sleight',     'Sleight of Record', 'Reframe a fact without technically lying.',
     'deception', 4, 1, ['risky']),
    ('gambit',      'Procedural Gambit', 'Exploit a rule. High risk, high reward.',
     'procedure', 4, 1, ['risky']),
    ('sustain',     'Sustain',           'Steady yourself. Recover composure.',
     'composure', 2, 2, ['defensive']),
    ('caucus',      'Call a Caucus',     'Pull a bloc aside and lean on them privately.',
     'negotiate', 3, 2, ['political']),
    ('concession',  'Offer a Concession','Trade text for votes. Moves a delegate toward you.',
     'negotiate', 3, 2, ['political']),
    ('grandstand',  'Grandstand',        'A speech for the record. Big swing, annoys the chair.',
     'oratory', 4, 1, ['risky', 'political']),
]


def grant_abilities(actor: Actor, dice: Dice, n: int = 3, pool_tags: tuple = ()) -> None:
    """Give an actor abilities weighted toward their best skills.

    Canon purchases win: if this character has a purchase sheet in
    wahsim/data/purchases.json, those real abilities are granted first and the
    generic pool only tops up whatever slots remain.
    """
    try:
        from .abilities import loadout_for
        bought = loadout_for(actor.meta.get('article') or actor.key, dice)
    except Exception:                                  # noqa: BLE001
        bought = []
    for ab in bought:
        if not actor.ability(ab.key):
            actor.abilities.append(ab)
    if bought:
        actor.meta['purchased'] = [a.name for a in bought]
        n = max(0, n - len(bought))
        if n == 0:
            if not actor.ability('sustain'):
                actor.abilities.append(Ability(
                    'sustain', 'Sustain', 'Steady yourself. Recover composure.',
                    skill='composure', bonus=2, uses=-1, tags=['defensive']))
            return
    cands = []
    for key, name, desc, skill, bonus, uses, tags in _ABILITY_POOL:
        if pool_tags and not (set(tags) & set(pool_tags)) and skill not in actor.skills:
            continue
        score = actor.skill_mod(skill) + dice.rng.random() * 3
        cands.append((score, key, name, desc, skill, bonus, uses, tags))
    cands.sort(key=lambda c: -c[0])
    for _, key, name, desc, skill, bonus, uses, tags in cands[:n]:
        if actor.ability(key):
            continue
        actor.abilities.append(Ability(
            key=key, name=name, description=desc, skill=skill,
            bonus=bonus, uses=uses, tags=list(tags)))
    # Everyone can always steady themselves.
    if not actor.ability('sustain'):
        actor.abilities.append(Ability(
            'sustain', 'Sustain', 'Steady yourself. Recover composure.',
            skill='composure', bonus=2, uses=-1, tags=['defensive']))
