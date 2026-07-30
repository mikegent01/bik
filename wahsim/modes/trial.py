"""TRIAL MODE — adversarial courtroom with evidence, witnesses and a verdict.

Model
-----
Two clocks race each other: PROSECUTION CASE vs REASONABLE DOUBT. Every
successful action ticks one of them. The judge's PATIENCE clock is a third
pressure — fill it and you start eating penalties.

Witnesses have a credibility track and a secret. Break the credibility and the
secret surfaces, which is worth a big swing to whoever forced it out.
"""
from __future__ import annotations

from dataclasses import dataclass, field

from ..core.dice import DC, Dice, Modifier, Outcome
from ..core.engine import Action, Beat, Clock, Phase
from ..core.entities import Actor
from .. import config
from ..core.roster import (actor_from_record, find_character, generate_actor,
                           grant_abilities, load)


@dataclass
class Evidence:
    key: str
    name: str
    detail: str
    strength: int = 2          # ticks it delivers when landed
    admitted: bool = False
    contested: bool = False
    owner: str = 'prosecution'  # who benefits


@dataclass
class Witness:
    actor: Actor
    credibility: int = 6
    max_credibility: int = 6
    secret: str = ''
    revealed: bool = False
    called_by: str = 'prosecution'
    testified: bool = False


_SECRETS = [
    'was paid to be somewhere else that night',
    'is covering for a family member',
    'did not actually see the face, only a silhouette',
    'has given a contradictory statement to another party',
    'was breaking the law themselves at the time',
    'was threatened before agreeing to testify',
    'genuinely cannot remember and has been filling the gaps',
]

_EVIDENCE_SEED = [
    ('ledger', 'The Ledger Entry', 'A line item that should not balance and does.', 3),
    ('timeline', 'The Timeline Gap', 'Eleven minutes nobody can account for.', 2),
    ('witness_stmt', 'The Prior Statement', 'What they said before they had counsel.', 2),
    ('object', 'The Physical Item', 'Recovered, tagged, and awkward for someone.', 3),
    ('letter', 'The Unsent Letter', 'Written but never delivered. Motive in ink.', 2),
    ('record', 'The Duty Roster', 'Who was where, on paper, allegedly.', 2),
]


class TrialMode:
    key = 'trial'
    title = 'Trial'

    def __init__(self, dice: Dice, brain, spec: dict):
        self.dice = dice
        self.brain = brain
        self.spec = spec
        self.case_name: str = spec.get('case_name', 'The People v. The Accused')
        self.charge: str = spec.get('charge', 'Conspiracy against the Crown')
        self._actors: list[Actor] = []
        self.witnesses: list[Witness] = []
        self.evidence: list[Evidence] = []
        self.log_effects: list[str] = []
        self.player_side = spec.get('player_side', 'prosecution')
        self.active_witness: Witness | None = None
        self.verdict: str = ''

        self.case = Clock('case', 'PROSECUTION CASE', config.CASE_CLOCK)
        self.doubt = Clock('doubt', 'REASONABLE DOUBT', config.DOUBT_CLOCK)
        self.patience = Clock('patience', "JUDGE'S PATIENCE", config.PATIENCE_CLOCK)
        self.clocks = [self.case, self.doubt, self.patience]

        self._build(spec)

    # ------------------------------------------------------------------ setup
    def _build(self, spec: dict):
        d = self.dice

        def cast(role, want, power=0, player=False):
            rec = find_character(want) if want else None
            if rec:
                a = actor_from_record(rec, role, d, is_player=player, power=power)
            else:
                a = generate_actor(role, d, name=want or '', power=power, is_player=player)
            grant_abilities(a, d, 3, venue='court')
            self._actors.append(a)
            return a

        self.judge = cast('judge', spec.get('judge', ''), power=2)
        self.prosecutor = cast('prosecutor', spec.get('prosecutor', ''), power=1,
                               player=(self.player_side == 'prosecution'))
        self.defense = cast('defense', spec.get('defense', ''), power=1,
                            player=(self.player_side == 'defense'))
        self.defendant = cast('witness', spec.get('defendant', ''), power=0)
        self.defendant.role = 'defendant'

        # The court cannot proceed without these three, so initiative may
        # never skip them however tired they get.
        for _a in (self.judge, self.prosecutor, self.defense):
            _a.essential = True
        self.judge.max_energy += 4
        self.judge.energy = self.judge.max_energy

        # Witnesses
        names = spec.get('witnesses') or []
        count = max(2, min(4, spec.get('witness_count', 3)))
        for i in range(count):
            want = names[i] if i < len(names) else ''
            a = cast('witness', want)
            side = 'prosecution' if i % 2 == 0 else 'defense'
            self.witnesses.append(Witness(
                actor=a,
                credibility=4 + d.rng.randint(0, 3),
                max_credibility=7,
                secret=d.pick(_SECRETS),
                called_by=side,
            ))
        for w in self.witnesses:
            w.max_credibility = max(w.credibility, w.max_credibility)

        # Evidence
        pool = list(_EVIDENCE_SEED)
        d.shuffle(pool)
        for i, (k, n, det, s) in enumerate(pool[:4]):
            self.evidence.append(Evidence(
                key=k, name=n, detail=det, strength=s,
                owner='prosecution' if i % 2 == 0 else 'defense'))

    # ----------------------------------------------------------------- config
    def phases(self) -> list[Phase]:
        return [
            Phase('opening', 'Opening Statements',
                  'Each side frames the case. Sets the room before a single fact lands.',
                  max_rounds=1, rolled=False,
                  order=[self.prosecutor.key, self.defense.key]),
            Phase('evidence', 'Presentation of Evidence',
                  'Admit, contest and interpret the exhibits.',
                  max_rounds=3,
                  order=[self.prosecutor.key, self.defense.key, self.judge.key]),
            Phase('testimony', 'Witness Testimony',
                  'Direct and cross. Break a witness and their secret surfaces.',
                  max_rounds=4),
            Phase('closing', 'Closing Arguments',
                  'Last word. Whatever the clocks say now is what the verdict weighs.',
                  max_rounds=1, rolled=False,
                  order=[self.prosecutor.key, self.defense.key]),
            Phase('verdict', 'Verdict', 'The bench rules.', max_rounds=1,
                  rolled=False, order=[self.judge.key]),
        ]

    def actors(self) -> list[Actor]:
        return self._actors

    def side_of(self, actor: Actor) -> str:
        if actor.role == 'prosecutor':
            return 'prosecution'
        if actor.role in ('defense', 'defendant'):
            return 'defense'
        return 'neutral'

    # ---------------------------------------------------------------- options
    def options(self, actor: Actor) -> list[dict]:
        side = self.side_of(actor)
        opts: list[dict] = []

        if actor.role == 'judge':
            opts.append({'verb': 'rule', 'label': 'Rule from the bench',
                         'hint': 'Impose order. Reduces your own patience clock.',
                         'skill': 'procedure', 'dc': DC['routine'], 'weight': 2})
            opts.append({'verb': 'question', 'label': 'Question a party directly',
                         'hint': 'The bench asks. Answering badly hurts.',
                         'skill': 'insight', 'dc': DC['tricky'], 'weight': 1})
            return opts

        opts.append({'verb': 'argue', 'label': 'Make an argument',
                     'hint': f'Advance {"the case" if side=="prosecution" else "reasonable doubt"}.',
                     'skill': 'advocacy', 'dc': DC['routine'], 'weight': 3})

        live = [e for e in self.evidence if not e.admitted]
        if live:
            opts.append({'verb': 'present', 'label': f'Present evidence ({len(live)} unadmitted)',
                         'hint': 'Admit an exhibit. Strength decides the swing.',
                         'skill': 'forensics', 'dc': DC['tricky'], 'weight': 2})
        admitted_other = [e for e in self.evidence
                          if e.admitted and e.owner != side and not e.contested]
        if admitted_other:
            opts.append({'verb': 'contest', 'label': 'Contest admitted evidence',
                         'hint': 'Attack an exhibit the other side landed.',
                         'skill': 'procedure', 'dc': DC['hard'], 'weight': 2})

        if self.active_witness:
            w = self.active_witness
            hostile = w.called_by != side
            opts.append({
                'verb': 'cross' if hostile else 'direct',
                'label': f'{"Cross-examine" if hostile else "Question"} {w.actor.name}',
                'hint': f'credibility {w.credibility}/{w.max_credibility}'
                        + (' — pressure reveals secrets' if hostile else ''),
                'skill': 'cross_examine' if hostile else 'empathy',
                'dc': DC['tricky'] if hostile else DC['routine'], 'weight': 3})

        for ab in actor.abilities:
            if not ab.available:
                continue
            opts.append({'verb': 'ability', 'ability': ab.key,
                         'label': f'{ab.name} [{ab.charges}]', 'hint': ab.description,
                         'skill': ab.skill, 'dc': DC['tricky'],
                         'weight': 1.5 if 'risky' not in ab.tags else 0.8})
        return opts

    # --------------------------------------------------------------- resolving
    def resolve(self, action: Action) -> Beat:
        a = action.actor
        self.log_effects = []
        skill = action.skill or 'advocacy'
        mods = list(a.modifiers_for(skill)) + list(action.extra_mods)
        dc = action.dc if action.dc is not None else DC['routine']

        ab = a.ability(action.ability) if action.ability else None
        if ab:
            if not ab.spend():
                return Beat(0, self.phases()[0].key, a.name, 'ability',
                            action.text, None, f'{ab.name} is spent.', [])
            mods.append(Modifier(ab.name, ab.bonus))

        # Judge patience taxes everyone.
        if self.patience.filled >= self.patience.size - 1:
            mods.append(Modifier('bench is furious', -3))
        elif self.patience.filled >= self.patience.size // 2:
            mods.append(Modifier('bench is impatient', -1))

        roll = self.dice.check(dc, mods, action.advantage, label=action.verb)
        shown = ab.name if ab else action.verb
        narration = self._apply(action, roll, ab)
        return Beat(0, '', a.name, shown, action.text, roll,
                    narration, list(self.log_effects), role=a.role)

    def _fx(self, s: str):
        self.log_effects.append(s)

    def _tick_side(self, side: str, n: int):
        if side == 'prosecution':
            if self.case.tick(n):
                self._fx('⚖ The prosecution case is COMPLETE.')
            self._fx(f'{self.case}')
        elif side == 'defense':
            if self.doubt.tick(n):
                self._fx('⚖ REASONABLE DOUBT is established.')
            self._fx(f'{self.doubt}')

    def _apply(self, action: Action, roll, ab) -> str:
        a = action.actor
        side = self.side_of(a)
        o = roll.outcome

        if action.verb == 'rule':
            if o.is_good:
                self.patience.filled = max(0, self.patience.filled - 2)
                self._fx('The bench restores order. Patience recovers.')
            else:
                self.patience.tick(1)
                self._fx('The gallery does not settle.')
            return 'The judge rules from the bench.'

        if action.verb == 'question':
            tgt = self._find(action.target) or self.defendant
            if o.is_good:
                tgt.bruise(2)
                self._fx(f'{tgt.name} loses composure under direct questioning.')
            return f'The bench questions {tgt.name} directly.'

        if action.verb == 'present':
            ev = next((e for e in self.evidence
                       if e.key == action.target and not e.admitted), None)
            ev = ev or next((e for e in self.evidence if not e.admitted), None)
            if not ev:
                return 'Nothing left to admit.'
            if o.is_good:
                ev.admitted = True
                n = ev.strength + (1 if o == Outcome.CRIT else 0)
                self._fx(f'“{ev.name}” is ADMITTED. {ev.detail}')
                self._tick_side(side, n)
            else:
                self.patience.tick(1)
                self._fx(f'“{ev.name}” is excluded. The bench is unimpressed.')
            return f'{a.name} moves to admit {ev.name}.'

        if action.verb == 'contest':
            ev = next((e for e in self.evidence
                       if e.admitted and e.owner != side and not e.contested), None)
            if not ev:
                return 'Nothing to contest.'
            if o.is_good:
                ev.contested = True
                self._fx(f'“{ev.name}” is discredited.')
                self._tick_side(side, 2)
            else:
                self.patience.tick(1)
                self._fx('The objection is overruled.')
            return f'{a.name} attacks the weight of {ev.name}.'

        if action.verb in ('cross', 'direct'):
            w = self.active_witness
            if not w:
                return 'No witness is on the stand.'
            if action.verb == 'cross':
                if o.is_good:
                    dmg = 2 if o != Outcome.CRIT else 3
                    w.credibility = max(0, w.credibility - dmg)
                    w.actor.bruise(dmg)
                    self._fx(f'{w.actor.name} credibility → {w.credibility}/{w.max_credibility}')
                    if w.credibility <= 0 and not w.revealed:
                        w.revealed = True
                        self._fx(f'💥 BROKEN: {w.actor.name} {w.secret}.')
                        self._tick_side(side, 3)
                    else:
                        self._tick_side(side, 1)
                else:
                    w.actor.steady(1)
                    self._fx(f'{w.actor.name} holds firm.')
                    if o == Outcome.BOTCH:
                        self.patience.tick(1)
                        self._tick_side('defense' if side == 'prosecution' else 'prosecution', 1)
                        self._fx('The badgering backfires.')
                return f'{a.name} presses {w.actor.name}.'
            if o.is_good:
                w.actor.steady(1)
                self._tick_side(side, 2 if o == Outcome.CRIT else 1)
                self._fx(f'{w.actor.name} gives clean, helpful testimony.')
            else:
                self._fx(f'{w.actor.name} muddles the answer.')
                if o == Outcome.BOTCH:
                    self._tick_side('defense' if side == 'prosecution' else 'prosecution', 1)
                    self._fx('Their own witness has hurt them.')
            return f'{a.name} leads {w.actor.name} through their account.'

        # generic argue / ability
        if ab and 'defensive' in ab.tags:
            got = a.steady(3 if o.is_good else 1)
            if got:
                self._fx(f'{a.name} recovers {got} composure.')
                return f'{a.name} steadies.'
            # Already composed: convert the turn into pressure instead of
            # burning it, so 'recovers 0 composure' never appears again.
            if o.is_good:
                self._tick_side(side, 1)
                self._fx(f'{a.name} is already composed, and presses the advantage.')
            else:
                self._fx(f'{a.name} holds steady; nothing gained.')
            return f'{a.name} holds the floor.'

        if o.is_good:
            n = 2 if o == Outcome.CRIT else 1
            self._tick_side(side, n)
            if ab and 'aggressive' in ab.tags:
                opp = self.defense if side == 'prosecution' else self.prosecutor
                opp.bruise(2)
                self._fx(f'{opp.name} is put on the back foot.')
        else:
            if o == Outcome.BOTCH:
                a.bruise(2)
                self.patience.tick(1)
                self._fx(f'{a.name} loses the room.')
            if ab and 'risky' in ab.tags:
                self.patience.tick(1)
        return f'{a.name} argues the point.'

    def _find(self, key: str) -> Actor | None:
        return next((x for x in self._actors if x.key == key or x.name == key), None)

    # ------------------------------------------------------------------ hooks
    def on_phase_start(self, phase: Phase):
        if phase.key == 'testimony':
            self.next_witness()
        if phase.key == 'verdict':
            self._decide()

    def on_round_end(self, rnd: int):
        if self.active_witness and self.active_witness.testified:
            self.next_witness()

    def next_witness(self):
        if self.active_witness:
            self.active_witness.testified = True
        nxt = next((w for w in self.witnesses if not w.testified), None)
        self.active_witness = nxt
        if nxt:
            self.log_effects.append(f'📣 {nxt.actor.name} takes the stand.')

    def _decide(self):
        c, d = self.case.filled, self.doubt.filled
        if c > d + 2:
            self.verdict = 'GUILTY'
        elif d > c + 2:
            self.verdict = 'NOT GUILTY'
        elif c > d:
            self.verdict = 'GUILTY on the lesser count'
        elif d > c:
            self.verdict = 'NOT GUILTY — the case did not carry'
        else:
            self.verdict = 'HUNG — the bench cannot resolve it'

    # ----------------------------------------------------------------- status
    def status(self) -> str:
        bits = [f'{self.case}', f'{self.doubt}', f'{self.patience}']
        if self.active_witness:
            w = self.active_witness
            bits.append(f'stand: {w.actor.name} (cred {w.credibility}/{w.max_credibility})')
        adm = [e.name for e in self.evidence if e.admitted]
        if adm:
            bits.append('admitted: ' + ', '.join(adm))
        return ' | '.join(bits)

    def finished(self) -> bool:
        return bool(self.verdict)

    def epilogue(self) -> str:
        head = self.verdict or 'no verdict (session ended early)'
        lines = ['', '═' * 62, f'  VERDICT: {head}', '═' * 62,
                 f'  {self.case}', f'  {self.doubt}', f'  {self.patience}', '']
        for w in self.witnesses:
            if w.revealed:
                lines.append(f'  • Broken on the stand: {w.actor.name} — {w.secret}.')
        for e in self.evidence:
            if e.admitted:
                lines.append(f'  • {e.name}: admitted'
                             + (' then discredited' if e.contested else ''))
        return '\n'.join(lines)
