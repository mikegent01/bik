"""Scene graph, turn order, clocks and the mode contract.

A Mode is anything that can describe its phases and resolve an action. The
engine owns turn order, the transcript and the progress clocks; the mode owns
the fiction. That split is what makes new modes cheap to write.
"""
from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Protocol

from .dice import Dice, Modifier, Outcome, RollResult
from .entities import Actor


@dataclass
class Clock:
    """A segmented progress track. The workhorse of every mode's pacing."""
    key: str
    name: str
    size: int
    filled: int = 0
    note: str = ''

    def tick(self, n: int = 1) -> bool:
        """Advance. Returns True if it completed on this tick."""
        was = self.complete
        self.filled = max(0, min(self.size, self.filled + n))
        return self.complete and not was

    @property
    def complete(self) -> bool:
        return self.filled >= self.size

    @property
    def pct(self) -> float:
        return self.filled / self.size if self.size else 0.0

    def bar(self, width: int = 12) -> str:
        f = round(self.pct * width)
        return '▰' * f + '▱' * (width - f)

    def __str__(self) -> str:
        return f'{self.name} {self.bar()} {self.filled}/{self.size}'


@dataclass
class Action:
    """One declared intent, before resolution."""
    actor: Actor
    verb: str                       # mode-defined: 'press', 'object', 'speak'...
    text: str = ''                  # what the player/AI actually said
    target: str = ''                # actor key or evidence key
    skill: str = ''
    ability: str = ''
    dc: int | None = None
    extra_mods: list[Modifier] = field(default_factory=list)
    advantage: int = 0
    meta: dict[str, Any] = field(default_factory=dict)


@dataclass
class Beat:
    """One resolved action — the atom of the transcript."""
    n: int
    phase: str
    actor_name: str
    verb: str
    text: str
    roll: RollResult | None
    narration: str
    effects: list[str] = field(default_factory=list)
    # Turn-order context, so a transcript can always answer 'whose turn was
    # this, and where are we?' without the reader having to infer it.
    phase_name: str = ''
    round_no: int = 0
    seat: str = ''          # e.g. '2/3' — second of three actors this round
    role: str = ''

    def render(self, show_dice: bool = True) -> str:
        out = []
        # Turn-order context up front: which phase, which round, which seat.
        ctx = ''
        if self.phase_name:
            ctx = f'  ({self.phase_name}'
            if self.round_no:
                ctx += f' · r{self.round_no}'
            if self.seat:
                ctx += f' · turn {self.seat}'
            ctx += ')'
        role = f' [{self.role}]' if self.role else ''
        out.append(f'[{self.n:02d}] {self.actor_name}{role} — {self.verb}{ctx}')
        if self.text:
            out.append(f'    "{self.text}"')
        if self.roll and show_dice:
            out.append(f'    🎲 {self.roll.explain()}')
        if self.narration:
            for para in self.narration.split('\n'):
                out.append(f'    {para}')
        for e in self.effects:
            out.append(f'    → {e}')
        return '\n'.join(out)


class Brain(Protocol):
    """Pluggable AI. Modes call this; the CLI decides what backend fills it.

    Implementations: ScriptedBrain (offline, deterministic) and LMArenaBrain
    (live model). Both return the same shape so modes never branch on backend.
    """

    def speak(self, actor: Actor, context: dict) -> str: ...
    def choose(self, actor: Actor, options: list[dict], context: dict) -> int: ...
    def invent(self, spec: dict) -> dict: ...


@dataclass
class Phase:
    key: str
    name: str
    description: str = ''
    max_rounds: int = 0             # 0 = until the mode says otherwise
    order: list[str] = field(default_factory=list)   # actor keys, empty = all
    # Some phases have a legally fixed sequence (opening and closing statements
    # go prosecution-then-defence by rule). Those opt out of initiative.
    rolled: bool = True


class Mode(Protocol):
    """The contract every game mode implements."""
    key: str
    title: str

    def phases(self) -> list[Phase]: ...
    def actors(self) -> list[Actor]: ...
    def options(self, actor: Actor) -> list[dict]: ...
    def resolve(self, action: Action) -> Beat: ...
    def status(self) -> str: ...
    def finished(self) -> bool: ...
    def epilogue(self) -> str: ...


class Session:
    """Runs a mode. Owns turn order, transcript and clocks."""

    def __init__(self, mode, dice: Dice, brain: Brain):
        self.mode = mode
        self.dice = dice
        self.brain = brain
        self.beats: list[Beat] = []
        self.phase_idx = 0
        self.round = 1
        self.turn_idx = 0
        self._phases = mode.phases()
        self._order: list[Actor] | None = None
        self.sat_out: list[Actor] = []

    # -- phase / turn plumbing ---------------------------------------------
    @property
    def phase(self) -> Phase:
        return self._phases[min(self.phase_idx, len(self._phases) - 1)]

    def eligible(self) -> list[Actor]:
        """Everyone the phase allows to act, before initiative is rolled."""
        keys = self.phase.order
        actors = self.mode.actors()
        if not keys:
            return [a for a in actors if a.composure > 0 or a.is_player]
        by_key = {a.key: a for a in actors}
        return [by_key[k] for k in keys if k in by_key]

    def roll_initiative(self) -> list[Actor]:
        """Roll turn order for the round, weighted by energy.

        d6 + energy. A natural 1 on an exhausted actor means they sit the
        round out — which keeps the spotlight on whoever still has drive
        instead of marching through a cast of seven every round.

        Essential actors (judge, chair, the player, anyone the mode marks)
        can never be skipped: they always act, and they floor at initiative 1.
        """
        self.sat_out = []
        if not self.phase.rolled:
            # Fixed-sequence phase: keep the declared order, roll nothing.
            self._order = self.eligible()
            for a in self._order:
                a.initiative = 0
            return self._order

        rolled: list[tuple[int, int, Actor]] = []
        for a in self.eligible():
            protected = a.essential or a.is_player
            face = self.dice.d(6)[0]
            score = face + a.energy

            if not protected and (face == 1 or a.energy <= 0):
                a.initiative = 0
                a.skipped += 1
                self.sat_out.append(a)
                continue

            if protected:
                score = max(1, score)
            a.initiative = score
            a.skipped = 0
            # Tie-break on presence so the commanding voice speaks first.
            rolled.append((score, a.attr_mod('presence'), a))

        rolled.sort(key=lambda t: (-t[0], -t[1]))
        self._order = [a for _, _, a in rolled]
        # A round with nobody in it would deadlock; fall back to the essentials.
        if not self._order:
            self._order = [a for a in self.eligible() if a.essential or a.is_player] \
                          or self.eligible()[:1]
        return self._order

    def turn_order(self) -> list[Actor]:
        if self._order is None:
            self.roll_initiative()
        return self._order

    def initiative_table(self) -> str:
        """Readable roll-off, so the order is never mysterious."""
        rows = []
        fixed = not self.phase.rolled
        for i, a in enumerate(self.turn_order(), 1):
            star = ' ★' if (a.essential or a.is_player) else ''
            init = 'fixed order' if fixed else f'init {a.initiative}'
            rows.append(f'    {i}. {a.name} ({a.role}) — {init}'
                        f'  {a.energy_bar}{star}')
        for a in getattr(self, 'sat_out', []):
            rows.append(f'    –  {a.name} ({a.role}) sits out — no energy')
        return '\n'.join(rows)

    @property
    def current(self) -> Actor | None:
        order = self.turn_order()
        if not order:
            return None
        return order[self.turn_idx % len(order)]

    def advance(self):
        """Move to the next actor, rolling over rounds and phases."""
        order = self.turn_order()
        # Acting costs energy; sitting out restores it.
        cur = order[self.turn_idx % len(order)] if order else None
        if cur is not None:
            # Acting costs 2; the per-round refresh gives back 1, so a
            # delegate who speaks every round drains and eventually yields
            # the floor. Sitting out is worth +3, so nobody is gone for long.
            cur.spend_energy(2)
        self.turn_idx += 1
        if order and self.turn_idx % len(order) == 0:
            self.round += 1
            for a in self.mode.actors():
                a.recover_energy(1)
            for a in getattr(self, 'sat_out', []):
                a.recover_energy(3)
            hook = getattr(self.mode, 'on_round_end', None)
            if hook:
                hook(self.round)
            if self.phase.max_rounds and self.round > self.phase.max_rounds:
                self.next_phase()
            else:
                self.turn_idx = 0
                self.roll_initiative()

    def next_phase(self):
        if self.phase_idx < len(self._phases) - 1:
            # Who just finished? If the incoming phase opens with the same
            # actor, skip them so nobody acts twice across a phase boundary
            # (the judge closes 'evidence' and opens 'testimony').
            prev_order = self.turn_order()
            last_actor = None
            if prev_order:
                last_actor = prev_order[(self.turn_idx - 1) % len(prev_order)]

            self.phase_idx += 1
            self.round = 1
            self.turn_idx = 0
            self._order = None
            new_order = self.roll_initiative()
            if (last_actor is not None and len(new_order) > 1
                    and new_order[0].key == last_actor.key):
                self.turn_idx = 1
            hook = getattr(self.mode, 'on_phase_start', None)
            if hook:
                hook(self.phase)

    # -- recording ----------------------------------------------------------
    def record(self, beat: Beat) -> Beat:
        beat.n = len(self.beats) + 1
        order = self.turn_order()
        beat.phase_name = self.phase.name
        beat.round_no = self.round
        if order:
            beat.seat = f'{(self.turn_idx % len(order)) + 1}/{len(order)}'
        self.beats.append(beat)
        # Everyone present remembers what happened.
        line = f'{beat.actor_name}: {beat.text or beat.narration[:90]}'
        for a in self.mode.actors():
            a.remember(line)
        return beat

    def transcript(self, show_dice: bool = True) -> str:
        return '\n\n'.join(b.render(show_dice) for b in self.beats)

    def context(self) -> dict:
        """What the AI brain sees."""
        return {
            'mode': self.mode.key,
            'title': self.mode.title,
            'phase': self.phase.name,
            'phase_desc': self.phase.description,
            'round': self.round,
            'status': self.mode.status(),
            'recent': [b.render(False) for b in self.beats[-6:]],
        }
