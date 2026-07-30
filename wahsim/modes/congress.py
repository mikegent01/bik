"""CONGRESS MODE — table a motion, let the realms debate, watch leans move,
then lock in a roll-call vote.

Model
-----
Every delegate holds a lean from -100 (hard against) to +100 (hard for).
Debate actions shift leans. Blocs drag their members toward the bloc mean, so
persuading a bloc leader is worth more than persuading a backbencher.

Delegates lock once their |lean| passes the commit threshold — after that they
cost far more to move, which creates the endgame scramble the player feels.
"""
from __future__ import annotations

from dataclasses import dataclass, field

from ..core.dice import DC, Dice, Modifier, Outcome
from ..core.engine import Action, Beat, Clock, Phase
from ..core.entities import Actor
from ..core.roster import generate_actor, grant_abilities, load

from .. import config

COMMIT = config.COMMIT_THRESHOLD   # |lean| at or above this locks a delegate
BLOC_PULL = config.BLOC_PULL       # how hard a bloc drags its members per round

RELIABILITY_FX = {
    'High': (2, 'votes its stated position'),
    'Principled': (2, 'will not trade on principle'),
    'Procedural': (1, 'cares about how, not what'),
    'Logical': (1, 'responds to evidence'),
    'Independent': (0, 'unpredictable but honest'),
    'Interest-driven': (-1, 'follows the money'),
    'Conflicted': (-1, 'pulled two ways'),
    'Unpredictable': (-2, 'genuinely could do anything'),
    'Mercenary': (-2, 'openly for sale'),
    'Coercive': (-2, 'leans on others'),
    'Hostile-aligned': (-3, 'aligned against the chamber'),
    'Isolated': (0, 'talks to nobody'),
}


@dataclass
class Delegate:
    actor: Actor
    bloc: str
    influence: int = 5
    lean: float = 0.0
    locked: bool = False
    reliability: str = 'Independent'
    disposition: float = 0.0   # stable: which way this delegation argues
    spoken: int = 0
    notes: list[str] = field(default_factory=list)

    @property
    def position(self) -> str:
        v = self.lean
        if v >= COMMIT:   return 'FOR (locked)' if self.locked else 'for'
        if v >= 20:       return 'leaning for'
        if v > -20:       return 'undecided'
        if v > -COMMIT:   return 'leaning against'
        return 'AGAINST (locked)' if self.locked else 'against'

    @property
    def bar(self) -> str:
        slot = int((self.lean + 100) / 200 * 20)
        slot = max(0, min(19, slot))
        row = ['·'] * 20
        row[10] = '|'
        row[slot] = '●'
        return ''.join(row)

    def nudge(self, amount: float) -> float:
        before = self.lean
        if self.locked:
            amount *= config.LOCKED_RESISTANCE   # stubborn, not immovable
        self.lean = max(-100, min(100, self.lean + amount))
        if abs(self.lean) >= COMMIT:
            self.locked = True
        return self.lean - before


class CongressMode:
    key = 'congress'
    title = 'Grand Congress'

    def __init__(self, dice: Dice, brain, spec: dict):
        self.dice = dice
        self.brain = brain
        self.motion = spec.get('motion', 'A motion of the chamber')
        self.detail = spec.get('detail', '')
        self.threshold = spec.get('threshold', 'simple')   # simple | super
        self.delegates: list[Delegate] = []
        self._actors: list[Actor] = []
        self.log_effects: list[str] = []
        self.result = ''
        self.tally: dict[str, int] = {}
        self.amendments: list[str] = []

        self.debate = Clock('debate', 'DEBATE PROGRESS', 10)
        self.chaos = Clock('chaos', 'PROCEDURAL CHAOS', 6)
        self.clocks = [self.debate, self.chaos]

        self._build(spec)

    # ------------------------------------------------------------------ setup
    def _build(self, spec: dict):
        d = self.dice
        members = load('congress', {}).get('members', [])
        want = spec.get('delegate_count', 9)

        picks = list(members)[:want] if members else []
        for m in picks:
            a = generate_actor('delegate', d, name=str(m.get('name', 'Delegation')),
                               faction=str(m.get('bloc', '')),
                               blurb=str(m.get('delegate', ''))[:110],
                               power=1 if int(m.get('influence', 5)) >= 8 else 0)
            grant_abilities(a, d, 2, pool_tags=('political', 'mood'))
            self._actors.append(a)
            rel = str(m.get('reliability', 'Independent'))
            dg = Delegate(actor=a, bloc=str(m.get('bloc', 'Non-Aligned')),
                          influence=int(m.get('influence', 5)), reliability=rel)
            dg.lean = d.rng.uniform(-28, 28)
            dg.disposition = dg.lean if abs(dg.lean) > 6 else d.rng.choice([-1.0, 1.0]) * 10
            self.delegates.append(dg)

        while len(self.delegates) < want:
            a = generate_actor('delegate', d, faction='Non-Aligned')
            grant_abilities(a, d, 2, pool_tags=('political',))
            self._actors.append(a)
            ln = d.rng.uniform(-25, 25)
            self.delegates.append(Delegate(actor=a, bloc='Non-Aligned',
                                           influence=d.rng.randint(3, 8),
                                           lean=ln, disposition=ln or 1.0))

        # The player is the sponsor and speaks for the motion.
        self.sponsor = generate_actor('delegate', d,
                                      name=spec.get('sponsor', 'The Sponsor'),
                                      faction='Sponsor', power=1, is_player=True)
        grant_abilities(self.sponsor, d, 3, pool_tags=('political', 'mood'))
        self._actors.insert(0, self.sponsor)

        self.chair = generate_actor('judge', d, name=spec.get('chair', 'The Chair'),
                                    faction='Chamber', power=2)
        self.chair.role = 'chair'
        self.chair.essential = True
        self.sponsor.essential = True
        self._actors.append(self.chair)

    # ----------------------------------------------------------------- config
    def phases(self) -> list[Phase]:
        floor = [self.sponsor.key] + [d.actor.key for d in self.delegates]
        return [
            Phase('tabling', 'Tabling the Motion',
                  'The sponsor puts the question. First impressions set the leans.',
                  max_rounds=1, rolled=False, order=[self.sponsor.key]),
            Phase('debate', 'General Debate',
                  'Delegations speak. Leans move. Blocs drag their members.',
                  max_rounds=3, order=floor),
            Phase('lobby', 'Lobbying & Amendments',
                  'Caucus, concede, and buy the undecided before the bell.',
                  max_rounds=2, order=[self.sponsor.key] + [
                      d.actor.key for d in self.delegates if not d.locked][:5]),
            Phase('rollcall', 'Roll Call', 'Positions lock. The chamber votes.',
                  max_rounds=1, rolled=False, order=[self.chair.key]),
        ]

    def actors(self) -> list[Actor]:
        return self._actors

    def delegate_of(self, actor: Actor) -> Delegate | None:
        return next((d for d in self.delegates if d.actor.key == actor.key), None)

    # ---------------------------------------------------------------- options
    def options(self, actor: Actor) -> list[dict]:
        if actor.role == 'chair':
            return [{'verb': 'gavel', 'label': 'Call the chamber to order',
                     'hint': 'Clears procedural chaos.', 'skill': 'procedure',
                     'dc': DC['routine'], 'weight': 2}]

        opts = [
            {'verb': 'speak', 'label': 'Speak to the motion',
             'hint': 'Move the room. Shifts undecided leans toward you.',
             'skill': 'oratory', 'dc': DC['routine'], 'weight': 3},
            {'verb': 'lobby', 'label': 'Lobby a specific delegation',
             'hint': 'Targeted pressure. Bigger swing, one target.',
             'skill': 'negotiate', 'dc': DC['tricky'], 'weight': 2},
            {'verb': 'amend', 'label': 'Propose an amendment',
             'hint': 'Trade text for votes. Moves the near-undecided.',
             'skill': 'procedure', 'dc': DC['tricky'], 'weight': 1.5},
            {'verb': 'attack', 'label': 'Attack the motion / its sponsor',
             'hint': 'Push leans negative and rattle the sponsor.',
             'skill': 'intimidate', 'dc': DC['tricky'], 'weight': 1.5},
        ]
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
        skill = action.skill or 'oratory'
        mods = list(a.modifiers_for(skill)) + list(action.extra_mods)

        dg = self.delegate_of(a)
        if dg:
            rel_mod, _ = RELIABILITY_FX.get(dg.reliability, (0, ''))
            if rel_mod:
                mods.append(Modifier(dg.reliability.lower(), rel_mod))
            if dg.influence >= 8:
                mods.append(Modifier('great power', 2))

        if self.chaos.filled >= self.chaos.size - 1:
            mods.append(Modifier('chamber in uproar', -3))

        ab = a.ability(action.ability) if action.ability else None
        if ab:
            if not ab.spend():
                return Beat(0, '', a.name, 'ability', action.text, None,
                            f'{ab.name} is spent.', [])
            mods.append(Modifier(ab.name, ab.bonus))

        dc = action.dc if action.dc is not None else DC['routine']
        roll = self.dice.check(dc, mods, action.advantage, label=action.verb)
        shown = ab.name if ab else action.verb
        narration = self._apply(action, roll, dg, ab)
        return Beat(0, '', a.name, shown, action.text, roll,
                    narration, list(self.log_effects), role=a.role)

    def _fx(self, s):
        self.log_effects.append(s)

    def _direction(self, actor: Actor) -> float:
        """+1 if this actor argues for the motion, -1 against."""
        if actor.key == self.sponsor.key:
            return 1.0
        dg = self.delegate_of(actor)
        if not dg:
            return 1.0
        return 1.0 if dg.disposition >= 0 else -1.0

    def _apply(self, action: Action, roll, dg, ab) -> str:
        a = action.actor
        o = roll.outcome
        sign = self._direction(a)
        power = 1.0 + (dg.influence / 10 if dg else 0.8)

        if action.verb == 'gavel':
            if o.is_good:
                self.chaos.filled = max(0, self.chaos.filled - 3)
                self._fx('The chair restores order.')
            else:
                self.chaos.tick(1)
                self._fx('The chair is ignored.')
            return 'The chair calls the chamber to order.'

        if action.verb == 'speak':
            self.debate.tick(1)
            if dg:
                dg.spoken += 1
            if o.is_good:
                base = 7 * power * (1.6 if o == Outcome.CRIT else 1.0)
                moved = 0
                for t in self.delegates:
                    if t is dg:
                        continue
                    if t.locked:
                        continue                       # locked seats ignore speeches
                    w = 1.6 if abs(t.lean) < 20 else 0.5   # the middle is what moves
                    # A delegation resists being pushed against its own disposition.
                    if (t.disposition >= 0) != (sign > 0):
                        w *= 0.45
                    delta = t.nudge(sign * base * w / max(2.5, len(self.delegates) * 0.5))
                    if abs(delta) >= 1:
                        moved += 1
                self._fx(f'The floor shifts — {moved} delegations moved '
                         f'{"toward" if sign > 0 else "away from"} the motion.')
            else:
                self._fx('The speech lands flat.')
                if o == Outcome.BOTCH:
                    self.chaos.tick(1)
                    a.bruise(2)
                    for t in self.delegates:
                        t.nudge(-sign * 3)
                    self._fx('It actively costs them support.')
            return f'{a.name} addresses the chamber.'

        if action.verb == 'lobby':
            tgt = self._target(action.target, exclude=a)
            if not tgt:
                return 'No delegation available.'
            if o.is_good:
                amt = sign * (22 if o == Outcome.CRIT else 14) * power / 1.4
                d = tgt.nudge(amt)
                self._fx(f'{tgt.actor.name} moves {d:+.0f} → {tgt.position}')
                if tgt.locked:
                    self._fx(f'🔒 {tgt.actor.name} has COMMITTED.')
            else:
                d = tgt.nudge(-sign * 5)
                self._fx(f'{tgt.actor.name} resents the approach ({d:+.0f}).')
            return f'{a.name} works {tgt.actor.name} in the corridor.'

        if action.verb == 'amend':
            if o.is_good:
                txt = action.text or 'a narrowing clause'
                self.amendments.append(txt)
                self.debate.tick(1)
                for t in self.delegates:
                    if abs(t.lean) < COMMIT:
                        t.nudge(sign * 8)
                self._fx(f'Amendment accepted: “{txt[:70]}”. The middle moves.')
            else:
                self.chaos.tick(1)
                self._fx('The amendment is ruled out of order.')
            return f'{a.name} proposes an amendment.'

        if action.verb == 'attack':
            if o.is_good:
                self.sponsor.bruise(2)
                for t in self.delegates:
                    if abs(t.lean) < 30:
                        t.nudge(-sign * 9)
                self._fx('The attack sticks. The undecided drift.')
            else:
                self.chaos.tick(1)
                for t in self.delegates:
                    t.nudge(sign * 4)
                self._fx('The attack is seen as a cheap shot and backfires.')
            return f'{a.name} goes after the motion directly.'

        # generic ability
        if ab and 'defensive' in ab.tags:
            a.steady(3)
            self._fx(f'{a.name} regains composure.')
            return f'{a.name} takes a breath.'
        if o.is_good:
            for t in self.delegates:
                if abs(t.lean) < 25:
                    t.nudge(sign * 6)
            self._fx('The manoeuvre moves the middle.')
        else:
            self.chaos.tick(1)
        return f'{a.name} manoeuvres.'

    def _target(self, key, exclude=None) -> Delegate | None:
        if key:
            t = next((d for d in self.delegates
                      if d.actor.key == key or d.actor.name == key), None)
            if t:
                return t
        pool = [d for d in self.delegates
                if (not exclude or d.actor.key != exclude.key) and not d.locked]
        pool = pool or [d for d in self.delegates if not exclude or d.actor.key != exclude.key]
        if not pool:
            return None
        return min(pool, key=lambda d: abs(d.lean))

    # ------------------------------------------------------------------ hooks
    def on_round_end(self, rnd: int):
        """Blocs drag their members toward the bloc mean; the room cools a little."""
        if self.chaos.filled:
            self.chaos.filled -= 1
        by_bloc: dict[str, list[Delegate]] = {}
        for d in self.delegates:
            by_bloc.setdefault(d.bloc, []).append(d)
        for bloc, members in by_bloc.items():
            if len(members) < 2:
                continue
            mean = sum(m.lean for m in members) / len(members)
            for m in members:
                if not m.locked:
                    m.lean += (mean - m.lean) * BLOC_PULL

    def on_phase_start(self, phase: Phase):
        if phase.key == 'rollcall':
            self._vote()

    def _vote(self):
        fo = ag = ab = 0
        lines = []
        for d in self.delegates:
            r = self.dice.check(modifiers=[Modifier('lean', int(d.lean / 12))])
            score = d.lean + (r.kept - 10) * (1.5 if not d.locked else 0.4)
            if score > 12:
                v, fo = 'FOR', fo + 1
            elif score < -12:
                v, ag = 'AGAINST', ag + 1
            else:
                v, ab = 'ABSTAIN', ab + 1
            lines.append(f'  {v:<8} {d.actor.name}  ({d.bloc}, lean {d.lean:+.0f})')
        self.tally = {'for': fo, 'against': ag, 'abstain': ab, 'lines': lines}
        need = (fo + ag) * (2 / 3) if self.threshold == 'super' else (fo + ag) / 2
        self.result = 'CARRIED' if fo > need and fo > ag else 'FAILED'

    # ----------------------------------------------------------------- status
    def status(self) -> str:
        fo = sum(1 for d in self.delegates if d.lean >= 20)
        ag = sum(1 for d in self.delegates if d.lean <= -20)
        un = len(self.delegates) - fo - ag
        lk = sum(1 for d in self.delegates if d.locked)
        return (f'for {fo} / against {ag} / undecided {un} | locked {lk} | '
                f'{self.debate} | {self.chaos}')

    def floor_chart(self) -> str:
        rows = ['  AGAINST ←──────────┼──────────→ FOR']
        for d in sorted(self.delegates, key=lambda x: -x.lean):
            lock = '🔒' if d.locked else '  '
            rows.append(f'  {lock}{d.bar} {d.lean:+6.0f}  {d.actor.name[:26]:<26} {d.bloc}')
        return '\n'.join(rows)

    def finished(self) -> bool:
        return bool(self.result)

    def epilogue(self) -> str:
        if not self.tally:
            # Abandoned before the roll call — report the floor as it stood.
            return '\n'.join(['', '═' * 62,
                              f'  THE MOTION: {self.motion}',
                              '  RESULT: no vote taken (session ended early)',
                              '═' * 62, '', self.floor_chart()])
        t = self.tally
        out = ['', '═' * 62, f'  THE MOTION: {self.motion}',
               f'  RESULT: {self.result}', '═' * 62,
               f'  FOR {t["for"]}   AGAINST {t["against"]}   ABSTAIN {t["abstain"]}', '']
        out += t['lines']
        if self.amendments:
            out += ['', '  Amendments adopted:']
            out += [f'   • {a}' for a in self.amendments]
        return '\n'.join(out)
