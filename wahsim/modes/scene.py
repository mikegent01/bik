"""SCENE MODE — freeform reenactment driven by a plain-English description.

You describe a situation ("Wario tries to sell gravity to a suspicious banker
while Waluigi objects"). The Director parses/invents a cast, objectives and
stakes, then the scene runs on the same turn/dice spine as the other modes.

Objectives are the win condition: each is a clock. Fill your side's objectives
before the SCENE TENSION clock runs out.
"""
from __future__ import annotations

import re
from dataclasses import dataclass, field

from ..core.dice import DC, Dice, Modifier, Outcome
from ..core.engine import Action, Beat, Clock, Phase
from ..core.entities import Actor
from ..core.roster import (actor_from_record, character_records, find_character,
                           generate_actor, grant_abilities)

STOP = {'the', 'a', 'an', 'and', 'but', 'to', 'of', 'in', 'on', 'at', 'with',
        'while', 'as', 'is', 'are', 'was', 'were', 'tries', 'try', 'trying',
        'his', 'her', 'their', 'its', 'who', 'that', 'this', 'from', 'for',
        'over', 'about', 'into', 'then', 'they', 'them', 'he', 'she', 'it'}

VERB_KIT = {
    'persuade':  ('oratory', 'Talk them around.'),
    'pressure':  ('intimidate', 'Lean on them hard.'),
    'deceive':   ('deception', 'Sell them something untrue.'),
    'appeal':    ('empathy', 'Reach them as a person.'),
    'reason':    ('advocacy', 'Lay out the logic.'),
    'observe':   ('recall', 'Read the room and find the crack.'),
    'act':       ('perform', 'Do something physical and decisive.'),
}


@dataclass
class Objective:
    key: str
    text: str
    owner: str
    clock: Clock
    done: bool = False


class SceneMode:
    key = 'scene'
    title = 'Scene'

    def __init__(self, dice: Dice, brain, spec: dict):
        self.dice = dice
        self.brain = brain
        self.premise = spec.get('premise', 'An argument in a small room.')
        self.setting = spec.get('setting', '')
        self._actors: list[Actor] = []
        self.objectives: list[Objective] = []
        self.log_effects: list[str] = []
        self.ended = ''

        self.tension = Clock('tension', 'SCENE TENSION', spec.get('length', 10))
        self.clocks = [self.tension]
        self._build(spec)

    # ------------------------------------------------------------------ setup
    def _build(self, spec: dict):
        d = self.dice
        plan = spec.get('plan') or direct_scene(self.premise, d, self.brain)
        self.setting = self.setting or plan.get('setting', '')

        for i, c in enumerate(plan.get('cast', [])):
            rec = find_character(c.get('match', '') or c.get('name', ''))
            role = c.get('role', 'witness')
            if rec:
                a = actor_from_record(rec, role, d, is_player=(i == 0 and spec.get('play', True)))
            else:
                a = generate_actor(role, d, name=c.get('name', ''),
                                   faction=c.get('faction', ''),
                                   blurb=c.get('blurb', ''),
                                   is_player=(i == 0 and spec.get('play', True)))
            a.stance = c.get('stance', 'neutral')
            grant_abilities(a, d, 3)
            self._actors.append(a)

        for i, o in enumerate(plan.get('objectives', [])):
            owner = o.get('owner') or (self._actors[0].key if self._actors else 'all')
            self.objectives.append(Objective(
                key=f'obj{i}', text=o.get('text', 'Get what you came for'),
                owner=owner, clock=Clock(f'obj{i}', o.get('text', 'Objective')[:28],
                                         int(o.get('size', 4)))))

    # ----------------------------------------------------------------- config
    def phases(self) -> list[Phase]:
        return [
            Phase('open', 'Opening', f'{self.setting}', max_rounds=1),
            Phase('play', 'The Scene', self.premise, max_rounds=6),
            Phase('close', 'Resolution', 'However it lands, it lands here.', max_rounds=1),
        ]

    def actors(self) -> list[Actor]:
        return self._actors

    def options(self, actor: Actor) -> list[dict]:
        opts = []
        for verb, (skill, hint) in VERB_KIT.items():
            opts.append({'verb': verb, 'label': verb.title(), 'hint': hint,
                         'skill': skill, 'dc': DC['routine'], 'weight': 1.5})
        for ab in actor.abilities:
            if ab.available:
                opts.append({'verb': 'ability', 'ability': ab.key,
                             'label': f'{ab.name} [{ab.charges}]',
                             'hint': ab.description, 'skill': ab.skill,
                             'dc': DC['tricky'], 'weight': 1.2})
        return opts

    # --------------------------------------------------------------- resolving
    def resolve(self, action: Action) -> Beat:
        a = action.actor
        self.log_effects = []
        skill = action.skill or VERB_KIT.get(action.verb, ('perform',))[0]
        mods = list(a.modifiers_for(skill)) + list(action.extra_mods)

        ab = a.ability(action.ability) if action.ability else None
        if ab:
            if not ab.spend():
                return Beat(0, '', a.name, 'ability', action.text, None,
                            f'{ab.name} is spent.', [])
            mods.append(Modifier(ab.name, ab.bonus))

        # Opposition: the most hostile other actor resists.
        foes = [x for x in self._actors if x.key != a.key and x.stance == 'hostile']
        adv = action.advantage
        if foes:
            mods.append(Modifier(f'{foes[0].name} resists', -2))

        dc = action.dc if action.dc is not None else DC['routine']
        roll = self.dice.check(dc, mods, adv, label=action.verb)
        shown = ab.name if ab else action.verb
        narration = self._apply(action, roll, ab)
        return Beat(0, '', a.name, shown, action.text, roll,
                    narration, list(self.log_effects), role=a.role)

    def _apply(self, action: Action, roll, ab) -> str:
        a = action.actor
        o = roll.outcome
        self.tension.tick(1)

        mine = [x for x in self.objectives
                if not x.done and x.owner in (a.key, 'all')]
        if o.is_good and mine:
            tgt = mine[0]
            n = 2 if o == Outcome.CRIT else 1
            if tgt.clock.tick(n):
                tgt.done = True
                self._fx(f'✔ OBJECTIVE MET — {tgt.text}')
            else:
                self._fx(f'{tgt.clock}')
        elif o.is_good:
            self._fx('It lands, but there is nothing left to win here.')
        else:
            if o == Outcome.BOTCH:
                a.bruise(2)
                self.tension.tick(1)
                self._fx(f'{a.name} makes it worse.')
            else:
                self._fx('No traction.')

        if ab:
            self._verb_phrase = f'{a.name} uses {ab.name}.'
        if action.verb == 'pressure' and o.is_good:
            for x in self._actors:
                if x.key != a.key:
                    x.bruise(1)
            self._fx('The room tightens.')

        if self.tension.complete and not self.ended:
            self.ended = 'timeout'
        if all(x.done for x in self.objectives) and self.objectives:
            self.ended = 'objectives'
        if ab:
            return f'{a.name} uses {ab.name}.'
        verb = action.verb
        phrase = {'persuade': 'makes the case', 'pressure': 'applies pressure',
                  'deceive': 'spins it', 'appeal': 'appeals to them',
                  'reason': 'reasons it through', 'observe': 'reads the room',
                  'act': 'acts'}.get(verb, f'{verb}s')
        return f'{a.name} {phrase}.'

    def _fx(self, s):
        self.log_effects.append(s)

    def on_phase_start(self, phase):
        if phase.key == 'close' and not self.ended:
            self.ended = 'curtain'

    # ----------------------------------------------------------------- status
    def status(self) -> str:
        bits = [str(self.tension)]
        for o in self.objectives:
            bits.append(f'{"✔" if o.done else "▸"} {o.clock}')
        return ' | '.join(bits)

    def finished(self) -> bool:
        return bool(self.ended)

    def epilogue(self) -> str:
        met = [o for o in self.objectives if o.done]
        out = ['', '═' * 62, '  SCENE ENDS', '═' * 62,
               f'  {len(met)}/{len(self.objectives)} objectives met '
               f'({self.ended})', '']
        for o in self.objectives:
            out.append(f'  {"✔" if o.done else "✗"} {o.text}  [{o.clock.bar()}]')
        out.append('')
        for a in self._actors:
            out.append(f'  {a.name:<26} composure {a.composure_bar} {a.composure}/{a.max_composure}')
        return '\n'.join(out)


# --------------------------------------------------------------------------
# THE DIRECTOR — turns a sentence into a playable scene plan
# --------------------------------------------------------------------------
def direct_scene(premise: str, dice: Dice, brain=None) -> dict:
    """Build {setting, cast[], objectives[]} from a description.

    Tries the AI brain first (rich, bespoke). Falls back to keyword extraction
    against the real character index, so it still works fully offline.
    """
    if brain is not None and hasattr(brain, 'invent'):
        got = brain.invent({
            'instruction':
                'Plan a short dramatic scene for a turn-based game. Return JSON: '
                '{"setting": str, "cast": [{"name": str, "role": '
                '"judge|prosecutor|defense|witness|delegate|expert", "faction": str, '
                '"blurb": str, "stance": "hostile|neutral|friendly", "match": '
                '"lowercase name to match an existing character, or empty"}], '
                '"objectives": [{"text": str, "owner": "", "size": 3}]}. '
                '2-5 cast members. 2-3 objectives. First cast member is the player.',
            'premise': premise,
        })
        if got.get('cast'):
            return got

    # ---- offline director -------------------------------------------------
    words = re.findall(r"[A-Za-z][A-Za-z'\-]+", premise)
    matched, seen = [], set()
    for w in words:
        if w.lower() in STOP or len(w) < 3:
            continue
        rec = find_character(w)
        if rec and rec['id'] not in seen:
            seen.add(rec['id'])
            matched.append(rec)
    low = premise.lower()

    def guess_role(rec):
        t = (str(rec.get('title', '')) + ' ' + str(rec.get('affiliation', ''))).lower()
        if 'judge' in t or 'judicial' in t: return 'judge'
        if 'prosecut' in t: return 'prosecutor'
        if 'lawyer' in t or 'counsel' in t or 'advoc' in t: return 'defense'
        if 'delegate' in t or 'speaker' in t: return 'delegate'
        return 'witness'

    cast = []
    for i, rec in enumerate(matched[:5]):
        cast.append({'name': rec['name'], 'match': rec['id'],
                     'role': guess_role(rec),
                     'faction': str(rec.get('affiliation', ''))[:40],
                     'blurb': str(rec.get('title', ''))[:110],
                     'stance': 'hostile' if i == 1 else 'neutral'})
    # Pick up role-nouns the premise names but the index doesn't know.
    ROLE_NOUNS = {'banker': ('expert', 'a banker who has read the fine print'),
                  'judge': ('judge', 'presiding, and unimpressed'),
                  'witness': ('witness', 'called, and reluctant'),
                  'guard': ('bailiff', 'posted, and bored'),
                  'clerk': ('expert', 'keeper of the actual records'),
                  'merchant': ('expert', 'here strictly for the margin'),
                  'delegate': ('delegate', 'instructed by their government'),
                  'doctor': ('expert', 'medical opinion, for hire'),
                  'priest': ('expert', 'moral authority, self-appointed')}
    have = {c['role'] for c in cast}
    for noun, (role, blurb) in ROLE_NOUNS.items():
        if noun in low and role not in have and len(cast) < 5:
            cast.append({'name': f'The {noun.title()}', 'match': '', 'role': role,
                         'faction': '', 'blurb': blurb, 'stance': 'hostile'})
            have.add(role)
    while len(cast) < 2:
        cast.append({'name': '', 'match': '', 'role': 'witness',
                     'faction': '', 'blurb': '', 'stance':
                     'hostile' if len(cast) == 1 else 'neutral'})

    if any(k in low for k in ('trial', 'court', 'charge', 'testify', 'judge')):
        objs = [{'text': 'Establish your version of events', 'size': 4},
                {'text': 'Discredit the opposing account', 'size': 3}]
        setting = 'A cramped courtroom that smells of wax and old paper.'
    elif any(k in low for k in ('vote', 'motion', 'congress', 'council', 'debate')):
        objs = [{'text': 'Win the room to your position', 'size': 4},
                {'text': 'Neutralise the loudest opponent', 'size': 3}]
        setting = 'A council chamber with too many chairs and not enough agreement.'
    elif any(k in low for k in ('sell', 'buy', 'deal', 'gold', 'price', 'trade')):
        objs = [{'text': 'Close the deal on your terms', 'size': 4},
                {'text': 'Conceal what it actually costs', 'size': 3}]
        setting = 'A back office with a very good lock and a very bad smell.'
    else:
        objs = [{'text': 'Get what you came for', 'size': 4},
                {'text': 'Leave without making it worse', 'size': 3}]
        setting = 'A room where this conversation was always going to happen.'

    return {'setting': setting, 'cast': cast, 'objectives': objs}
