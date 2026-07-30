"""GLAZED CONGRESS — the full chamber, at scale.

The design problem
------------------
`congress.py` renders one row per delegation. That is fine for 9 seats and
unusable at 100: ~2,200px of chart, no way to find who matters, and lobbying
delegations one at a time would take 100 turns to move the room once.

So this mode changes both the *display* and the *verbs*:

1. **Blocs are the unit, not delegates.** The default view is ~7 bloc bars with
   whip counts (FOR / AGAINST / UNDECIDED). One screen, any chamber size.
2. **Drill down on demand.** `focus <bloc>` expands only that bloc's members.
3. **A swing list.** The only delegations that actually decide the vote are the
   undecided and the soft leans — the mode surfaces those and hides the rest.
4. **Actions scale.** You whip a bloc, not a seat. Individual lobbying still
   exists but is reserved for named power players (influence >= 8), who are few.

The result: a 100-seat chamber reads in one screen and plays in ~20 turns.
"""
from __future__ import annotations

from dataclasses import dataclass, field

from .. import config
from ..core.dice import DC, Dice, Modifier, Outcome
from ..core.engine import Action, Beat, Clock, Phase
from ..core.entities import Actor
from ..core.roster import generate_actor, grant_abilities, load

COMMIT = config.COMMIT_THRESHOLD

# The founding chamber, as described in congress.json: the First Glazed
# Congress of 1026, convened after the Chaos Heart Crisis.
BLOCS = {
    'Progressive Bloc':  ('institution-builders; expand the Congress mandate', +14),
    'Sovereignty Bloc':  ('jealous of national prerogative; narrow every clause', -14),
    'Iron Pact':         ('military powers; security first, rights later', -8),
    'Non-Aligned':       ('unwhipped; the actual battleground', 0),
    'Mercantile League': ('votes follow trade access', 0),
    'Frontier Caucus':   ('small realms; fear being governed by large ones', -5),
    'Arcane Concord':    ('magical polities; wary of mundane oversight', +6),
}

REGIONS = ['Mushroom', 'Midlands', 'Old World', 'Eastern Reach', 'The Verge',
           'Doughnut Rim', 'Grand Line', 'Northern Pole', 'Southern Pole',
           'Inner Sea', 'Glass Coast', 'Underworld']

SUFFIX = ['Kingdom', 'Republic', 'Holds', 'Compact', 'Dominion', 'Isles',
          'League', 'Protectorate', 'Free Cities', 'Territories', 'Sovereignty',
          'Assembly', 'Reach', 'Enclave']

PREFIX = ['Vell', 'Osmar', 'Kirren', 'Thal', 'Brume', 'Sarn', 'Quill', 'Ferro',
          'Ashen', 'Marrow', 'Corve', 'Pell', 'Drossal', 'Ombra', 'Yarrow',
          'Tessin', 'Halden', 'Vireo', 'Calder', 'Mirren', 'Stoat', 'Belfry']


@dataclass
class Seat:
    key: str
    name: str
    bloc: str
    influence: int
    lean: float = 0.0
    disposition: float = 0.0
    locked: bool = False
    named: bool = False          # a real actor exists for this seat
    actor: Actor | None = None

    @property
    def position(self) -> str:
        v = self.lean
        if v >= COMMIT:  return 'FOR'
        if v >= 15:      return 'lean for'
        if v > -15:      return 'undecided'
        if v > -COMMIT:  return 'lean against'
        return 'AGAINST'

    def nudge(self, amount: float) -> float:
        before = self.lean
        if self.locked:
            amount *= config.LOCKED_RESISTANCE
        self.lean = max(-100, min(100, self.lean + amount))
        if abs(self.lean) >= COMMIT:
            self.locked = True
        return self.lean - before


@dataclass
class Bloc:
    name: str
    creed: str
    seats: list[Seat] = field(default_factory=list)
    whipped: bool = False

    @property
    def mean(self) -> float:
        return sum(s.lean for s in self.seats) / len(self.seats) if self.seats else 0.0

    def count(self) -> tuple[int, int, int]:
        fo = sum(1 for s in self.seats if s.lean >= 15)
        ag = sum(1 for s in self.seats if s.lean <= -15)
        return fo, ag, len(self.seats) - fo - ag

    @property
    def leader(self) -> Seat | None:
        return max(self.seats, key=lambda s: s.influence) if self.seats else None

    def bar(self, width: int = 24) -> str:
        """FOR / undecided / AGAINST as one proportional bar."""
        fo, ag, un = self.count()
        n = max(1, len(self.seats))
        f = round(fo / n * width)
        a = round(ag / n * width)
        u = max(0, width - f - a)
        return '█' * f + '░' * u + '▓' * a


class GlazedCongressMode:
    key = 'glazed'
    title = 'The Glazed Congress'

    def __init__(self, dice: Dice, brain, spec: dict):
        self.dice = dice
        self.brain = brain
        self.motion = spec.get('motion', 'A motion before the full chamber')
        self.threshold = spec.get('threshold', 'simple')
        self.size = max(20, min(120, int(spec.get('size', 60))))
        self.blocs: dict[str, Bloc] = {}
        self.seats: list[Seat] = []
        self._actors: list[Actor] = []
        self.log_effects: list[str] = []
        self.result = ''
        self.tally: dict = {}
        self.amendments: list[str] = []
        self.focus_bloc: str = ''

        self.debate = Clock('debate', 'DEBATE PROGRESS', 12)
        self.chaos = Clock('chaos', 'PROCEDURAL CHAOS', 8)
        self.clocks = [self.debate, self.chaos]
        self._build(spec)

    # ------------------------------------------------------------------ setup
    def _build(self, spec: dict):
        d = self.dice
        for name, (creed, tilt) in BLOCS.items():
            self.blocs[name] = Bloc(name=name, creed=creed)

        # Seed with the real Congress members so canon delegations appear.
        real = load('congress', {}).get('members', [])
        used = set()
        for m in real:
            bloc = str(m.get('bloc', 'Non-Aligned'))
            if bloc not in self.blocs:
                bloc = 'Non-Aligned'
            tilt = BLOCS[bloc][1]
            s = Seat(key=str(m.get('id', m.get('name'))),
                     name=str(m.get('name', 'Delegation')),
                     bloc=bloc, influence=int(m.get('influence', 5)),
                     named=True)
            s.lean = tilt + d.rng.uniform(-18, 18)
            s.disposition = s.lean if abs(s.lean) > 5 else d.rng.choice([-1.0, 1.0]) * 8
            self.blocs[bloc].seats.append(s)
            self.seats.append(s)
            used.add(s.name)

        # Fill the chamber out to `size` with generated polities.
        names = list(self.blocs)
        while len(self.seats) < self.size:
            bloc = d.pick(names)
            tilt = BLOCS[bloc][1]
            nm = f'{d.pick(PREFIX)} {d.pick(SUFFIX)}'
            if nm in used:
                nm = f'{nm} of {d.pick(REGIONS)}'
            used.add(nm)
            infl = d.rng.randint(2, 9)
            s = Seat(key=nm.lower().replace(' ', '_'), name=nm, bloc=bloc,
                     influence=infl)
            s.lean = tilt + d.rng.uniform(-22, 22)
            s.disposition = s.lean if abs(s.lean) > 5 else d.rng.choice([-1.0, 1.0]) * 8
            self.blocs[bloc].seats.append(s)
            self.seats.append(s)

        # Only the power players get full Actor objects and a speaking turn.
        # This is the second half of the scale fix: 100 seats, ~8 speakers.
        power = sorted(self.seats, key=lambda s: -s.influence)[:8]
        for s in power:
            a = generate_actor('delegate', d, name=s.name, faction=s.bloc,
                               blurb=f'Speaks for the {s.bloc}.',
                               power=1 if s.influence >= 8 else 0)
            grant_abilities(a, d, 2, pool_tags=('political', 'mood'))
            s.actor = a
            s.named = True
            self._actors.append(a)

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
        # The single most powerful delegation always gets the floor.
        _lead = max((x for x in self.seats if x.actor),
                    key=lambda x: x.influence, default=None)
        if _lead and _lead.actor:
            _lead.actor.essential = True
        self._actors.append(self.chair)

    # ----------------------------------------------------------------- config
    def phases(self) -> list[Phase]:
        floor = [self.sponsor.key] + [s.actor.key for s in self.seats
                                      if s.actor and not s.actor.is_player][:8]
        return [
            Phase('tabling', 'Tabling the Motion',
                  f'The sponsor puts the question to {len(self.seats)} delegations.',
                  max_rounds=1, rolled=False, order=[self.sponsor.key]),
            Phase('debate', 'General Debate',
                  'Bloc leaders speak. Whole blocs move at once.',
                  max_rounds=3, order=floor),
            Phase('whip', 'The Whip Room',
                  'Work the blocs and the swing seats before the bell.',
                  max_rounds=3, order=[self.sponsor.key] + floor[1:4]),
            Phase('rollcall', 'Roll Call',
                  f'All {len(self.seats)} delegations vote.', max_rounds=1, rolled=False,
                  order=[self.chair.key]),
        ]

    def actors(self) -> list[Actor]:
        return self._actors

    def seat_of(self, actor: Actor) -> Seat | None:
        return next((s for s in self.seats if s.actor and s.actor.key == actor.key), None)

    # ---------------------------------------------------------------- options
    def options(self, actor: Actor) -> list[dict]:
        if actor.role == 'chair':
            return [{'verb': 'gavel', 'label': 'Call the chamber to order',
                     'hint': 'Clears procedural chaos.', 'skill': 'procedure',
                     'dc': DC['routine'], 'weight': 2}]

        opts = [
            {'verb': 'address', 'label': 'Address the full chamber',
             'hint': 'Moves every undecided seat a little. The broad instrument.',
             'skill': 'oratory', 'dc': DC['routine'], 'weight': 3},
            {'verb': 'whip', 'label': 'Whip a bloc',
             'hint': 'Lean on a whole bloc at once — the only way to move 100 seats.',
             'skill': 'negotiate', 'dc': DC['tricky'], 'weight': 3},
            {'verb': 'swing', 'label': 'Work the swing seats',
             'hint': 'Target only the undecided. Narrow but efficient.',
             'skill': 'negotiate', 'dc': DC['tricky'], 'weight': 2.5},
            {'verb': 'court', 'label': 'Court a power delegation',
             'hint': 'One high-influence seat. Its bloc follows its lead.',
             'skill': 'oratory', 'dc': DC['hard'], 'weight': 2},
            {'verb': 'amend', 'label': 'Propose an amendment',
             'hint': 'Trade text for votes across the whole middle.',
             'skill': 'procedure', 'dc': DC['tricky'], 'weight': 1.5},
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
        seat = self.seat_of(a)
        if seat and seat.influence >= 8:
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
        narration = self._apply(action, roll, seat, ab)
        return Beat(0, '', a.name, shown, action.text, roll,
                    narration, list(self.log_effects), role=a.role)

    def _fx(self, s):
        self.log_effects.append(s)

    def _sign(self, actor: Actor) -> float:
        if actor.key == self.sponsor.key:
            return 1.0
        s = self.seat_of(actor)
        return 1.0 if (s and s.disposition >= 0) else -1.0

    def _pick_bloc(self, hint: str) -> Bloc:
        if hint:
            for name, b in self.blocs.items():
                if hint.lower() in name.lower():
                    return b
        # Default: the bloc with the most undecided seats — where the votes are.
        return max(self.blocs.values(), key=lambda b: b.count()[2] or 0)

    def _apply(self, action: Action, roll, seat, ab) -> str:
        a = action.actor
        o = roll.outcome
        sign = self._sign(a)

        if action.verb == 'gavel':
            if o.is_good:
                self.chaos.filled = max(0, self.chaos.filled - 3)
                self._fx('The chair restores order.')
            else:
                self.chaos.tick(1)
            return 'The chair calls the chamber to order.'

        if action.verb == 'address':
            self.debate.tick(1)
            if o.is_good:
                base = 6 * (1.6 if o == Outcome.CRIT else 1.0)
                moved = 0
                for s in self.seats:
                    if s.locked:
                        continue
                    w = 1.5 if abs(s.lean) < 15 else 0.5
                    if (s.disposition >= 0) != (sign > 0):
                        w *= 0.45
                    if abs(s.nudge(sign * base * w / 3.2)) >= 1:
                        moved += 1
                self._fx(f'The chamber shifts — {moved} of {len(self.seats)} '
                         f'delegations moved.')
            else:
                self._fx('The speech does not carry the room.')
                if o == Outcome.BOTCH:
                    self.chaos.tick(1)
                    for s in self.seats:
                        if not s.locked:
                            s.nudge(-sign * 2)
            return f'{a.name} addresses the full chamber.'

        if action.verb == 'whip':
            b = self._pick_bloc(action.target)
            self.debate.tick(1)
            if o.is_good:
                amt = sign * (16 if o == Outcome.CRIT else 10)
                n = 0
                for s in b.seats:
                    if abs(s.nudge(amt)) >= 1:
                        n += 1
                b.whipped = True
                fo, ag, un = b.count()
                self._fx(f'{b.name} whipped — {n} seats moved. '
                         f'Now FOR {fo} / AGAINST {ag} / undecided {un}.')
            else:
                for s in b.seats:
                    s.nudge(-sign * 4)
                self._fx(f'{b.name} resents the pressure and hardens.')
            return f'{a.name} whips the {b.name}.'

        if action.verb == 'swing':
            movers = [s for s in self.seats if not s.locked and abs(s.lean) < 20]
            if not movers:
                self._fx('There are no undecided seats left to work.')
                return f'{a.name} finds the middle already gone.'
            if o.is_good:
                amt = sign * (18 if o == Outcome.CRIT else 12)
                for s in movers[:12]:
                    s.nudge(amt)
                self._fx(f'{min(12, len(movers))} swing delegations worked directly.')
            else:
                self._fx('The swing seats will not commit.')
            return f'{a.name} works the swing seats.'

        if action.verb == 'court':
            pool = [s for s in self.seats if s.influence >= 7 and not s.locked]
            if action.target:
                pool = [s for s in self.seats
                        if action.target.lower() in s.name.lower()] or pool
            if not pool:
                pool = [s for s in self.seats if not s.locked]
            if not pool:
                return 'Every delegation has committed.'
            tgt = max(pool, key=lambda s: s.influence)
            if o.is_good:
                d = tgt.nudge(sign * 26)
                self._fx(f'{tgt.name} moves {d:+.0f} → {tgt.position}')
                # A courted power player drags its bloc.
                b = self.blocs[tgt.bloc]
                for s in b.seats:
                    if s is not tgt and not s.locked:
                        s.nudge(sign * 6)
                self._fx(f'The {b.name} follows its lead.')
            else:
                tgt.nudge(-sign * 8)
                self._fx(f'{tgt.name} is insulted by the approach.')
            return f'{a.name} courts {tgt.name}.'

        if action.verb == 'amend':
            if o.is_good:
                txt = action.text or 'a narrowing clause'
                self.amendments.append(txt)
                self.debate.tick(1)
                for s in self.seats:
                    if abs(s.lean) < COMMIT and not s.locked:
                        s.nudge(sign * 7)
                self._fx(f'Amendment carried: "{txt[:60]}". The middle moves.')
            else:
                self.chaos.tick(1)
                self._fx('Ruled out of order.')
            return f'{a.name} proposes an amendment.'

        if ab and 'defensive' in ab.tags:
            a.steady(3)
            return f'{a.name} takes a breath.'
        if o.is_good:
            for s in self.seats:
                if abs(s.lean) < 20 and not s.locked:
                    s.nudge(sign * 5)
            self._fx('The manoeuvre moves the middle.')
        else:
            self.chaos.tick(1)
        return f'{a.name} manoeuvres.'

    # ------------------------------------------------------------------ hooks
    def on_round_end(self, rnd: int):
        if self.chaos.filled:
            self.chaos.filled -= 1
        # Bloc discipline: members drift toward their bloc's mean.
        for b in self.blocs.values():
            if len(b.seats) < 2:
                continue
            mean = b.mean
            pull = config.BLOC_PULL * (1.6 if b.whipped else 1.0)
            for s in b.seats:
                if not s.locked:
                    s.lean += (mean - s.lean) * pull

    def on_phase_start(self, phase: Phase):
        if phase.key == 'rollcall':
            self._vote()

    def _vote(self):
        fo = ag = ab_ = 0
        per_bloc: dict[str, list[int]] = {}
        for s in self.seats:
            r = self.dice.check(modifiers=[Modifier('lean', int(s.lean / 12))])
            score = s.lean + (r.kept - 10) * (1.4 if not s.locked else 0.4)
            row = per_bloc.setdefault(s.bloc, [0, 0, 0])
            if score > 12:
                fo += 1; row[0] += 1
            elif score < -12:
                ag += 1; row[1] += 1
            else:
                ab_ += 1; row[2] += 1
        need = (fo + ag) * (2 / 3) if self.threshold == 'super' else (fo + ag) / 2
        self.result = 'CARRIED' if fo > need and fo > ag else 'FAILED'
        self.tally = {'for': fo, 'against': ag, 'abstain': ab_, 'blocs': per_bloc}

    # ----------------------------------------------------------------- status
    def status(self) -> str:
        fo = sum(1 for s in self.seats if s.lean >= 15)
        ag = sum(1 for s in self.seats if s.lean <= -15)
        un = len(self.seats) - fo - ag
        lk = sum(1 for s in self.seats if s.locked)
        return (f'{len(self.seats)} seats · for {fo} / against {ag} / '
                f'undecided {un} · locked {lk} | {self.debate} | {self.chaos}')

    def floor_chart(self) -> str:
        """Bloc-level whip board. One screen at any chamber size."""
        rows = [f'  THE CHAMBER — {len(self.seats)} delegations, '
                f'{len(self.blocs)} blocs',
                '  ' + '─' * 58,
                f'  {"BLOC":<20}{"FOR/UND/AGN":<14}{"WHIP BOARD":<26}']
        for b in sorted(self.blocs.values(), key=lambda x: -x.mean):
            if not b.seats:
                continue
            fo, ag, un = b.count()
            lock = '🔒' if all(s.locked for s in b.seats) else '  '
            rows.append(f'  {b.name[:19]:<20}{f"{fo}/{un}/{ag}":<14}'
                        f'{b.bar()} {b.mean:+.0f} {lock}')
        rows.append('  ' + '─' * 58)
        rows.append('  █ for   ░ undecided   ▓ against')
        swing = self.swing_list()
        if swing:
            rows.append('')
            rows.append(f'  SWING SEATS ({len(swing)} still moveable, top 8):')
            for s in swing[:8]:
                rows.append(f'    {s.lean:+6.0f}  {s.name[:28]:<28} {s.bloc}')
        return '\n'.join(rows)

    def swing_list(self) -> list[Seat]:
        """Only the seats that can still decide the vote."""
        return sorted((s for s in self.seats if not s.locked and abs(s.lean) < 30),
                      key=lambda s: (abs(s.lean), -s.influence))

    def bloc_detail(self, name: str) -> str:
        b = self._pick_bloc(name)
        rows = [f'  {b.name} — {b.creed}',
                f'  {len(b.seats)} seats, mean lean {b.mean:+.0f}', '']
        for s in sorted(b.seats, key=lambda x: -x.lean):
            lock = '🔒' if s.locked else '  '
            rows.append(f'  {lock}{s.lean:+6.0f}  {s.name[:30]:<30} '
                        f'infl {s.influence}  {s.position}')
        return '\n'.join(rows)

    def finished(self) -> bool:
        return bool(self.result)

    def epilogue(self) -> str:
        if not self.tally:
            return '\n'.join(['', '═' * 62, f'  MOTION: {self.motion}',
                              '  RESULT: no vote taken (session ended early)',
                              '═' * 62, '', self.floor_chart()])
        t = self.tally
        out = ['', '═' * 62, f'  THE MOTION: {self.motion}',
               f'  RESULT: {self.result}', '═' * 62,
               f'  FOR {t["for"]}   AGAINST {t["against"]}   ABSTAIN {t["abstain"]}',
               f'  ({len(self.seats)} delegations voting)', '',
               f'  {"BLOC":<22}{"FOR":>5}{"AGN":>6}{"ABS":>6}']
        for bloc, (f, a, ab_) in sorted(t['blocs'].items(),
                                        key=lambda kv: -kv[1][0]):
            out.append(f'  {bloc[:21]:<22}{f:>5}{a:>6}{ab_:>6}')
        if self.amendments:
            out += ['', '  Amendments adopted:']
            out += [f'   • {x[:70]}' for x in self.amendments]
        return '\n'.join(out)
