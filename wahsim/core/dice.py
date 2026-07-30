"""Dice, modifiers and degrees of success.

Everything random in WahSim funnels through Roll.resolve() so that a single
seeded RNG reproduces an entire session. Modes never call random directly.
"""
from __future__ import annotations

import random
import re
from dataclasses import dataclass, field
from enum import IntEnum
from typing import Iterable

DICE_RE = re.compile(r'^\s*(\d*)d(\d+)\s*(?:([+-])\s*(\d+))?\s*$', re.I)


class Outcome(IntEnum):
    """Degrees of success. Ordered so comparisons work: BOTCH < ... < CRIT."""
    BOTCH = 0        # natural 1, or missed by 10+
    FAIL = 1         # under the DC
    PARTIAL = 2      # within 2 of the DC — succeed at a cost
    SUCCESS = 3      # met or beat the DC
    CRIT = 4         # natural 20, or beat by 10+

    @property
    def label(self) -> str:
        return {
            Outcome.BOTCH: 'BOTCH',
            Outcome.FAIL: 'FAIL',
            Outcome.PARTIAL: 'PARTIAL',
            Outcome.SUCCESS: 'SUCCESS',
            Outcome.CRIT: 'CRITICAL',
        }[self]

    @property
    def glyph(self) -> str:
        return {
            Outcome.BOTCH: '💀',
            Outcome.FAIL: '✗',
            Outcome.PARTIAL: '◐',
            Outcome.SUCCESS: '✓',
            Outcome.CRIT: '★',
        }[self]

    @property
    def is_good(self) -> bool:
        return self >= Outcome.PARTIAL


@dataclass(frozen=True)
class Modifier:
    """A named, signed adjustment. Named so the transcript can explain itself."""
    source: str
    value: int
    note: str = ''

    def __str__(self) -> str:
        return f'{self.value:+d} {self.source}'


@dataclass
class RollResult:
    faces: list[int]
    kept: int
    modifiers: list[Modifier]
    dc: int | None
    total: int
    outcome: Outcome | None
    advantage: int = 0
    label: str = ''

    @property
    def mod_total(self) -> int:
        return sum(m.value for m in self.modifiers)

    @property
    def natural(self) -> int:
        return self.kept

    def explain(self) -> str:
        """One-line audit trail. This is what gets printed at the table."""
        adv = ''
        if self.advantage > 0:
            adv = f' (adv {self.faces}→{self.kept})'
        elif self.advantage < 0:
            adv = f' (dis {self.faces}→{self.kept})'
        mods = ''.join(f' {m.value:+d}' for m in self.modifiers)
        detail = ''
        if self.modifiers:
            detail = '  [' + ', '.join(str(m) for m in self.modifiers) + ']'
        head = f'd20={self.kept}{adv}{mods} = {self.total}'
        if self.dc is not None:
            head += f' vs DC {self.dc} → {self.outcome.glyph} {self.outcome.label}'
        return head + detail


class Dice:
    """Seeded RNG. One per session; pass it everywhere."""

    def __init__(self, seed: int | None = None):
        self.seed = seed if seed is not None else random.randrange(1 << 30)
        self.rng = random.Random(self.seed)
        self.history: list[RollResult] = []

    # -- primitives ---------------------------------------------------------
    def d(self, faces: int, n: int = 1) -> list[int]:
        return [self.rng.randint(1, faces) for _ in range(n)]

    def notation(self, spec: str) -> int:
        """Roll '2d6+1' style strings (used for damage/impact style values)."""
        m = DICE_RE.match(spec)
        if not m:
            raise ValueError(f'bad dice notation: {spec!r}')
        n = int(m.group(1) or 1)
        faces = int(m.group(2))
        total = sum(self.d(faces, n))
        if m.group(3):
            total += int(m.group(4)) * (1 if m.group(3) == '+' else -1)
        return total

    def pick(self, seq):
        return self.rng.choice(list(seq))

    def shuffle(self, seq: list):
        self.rng.shuffle(seq)
        return seq

    def chance(self, pct: float) -> bool:
        return self.rng.random() * 100 < pct

    # -- the main event -----------------------------------------------------
    def check(
        self,
        dc: int | None = None,
        modifiers: Iterable[Modifier] = (),
        advantage: int = 0,
        label: str = '',
    ) -> RollResult:
        """A d20 check. advantage>0 rolls 2 keep high, <0 rolls 2 keep low."""
        mods = [m for m in modifiers if m.value]
        n = 2 if advantage else 1
        faces = self.d(20, n)
        kept = max(faces) if advantage > 0 else (min(faces) if advantage < 0 else faces[0])
        total = kept + sum(m.value for m in mods)

        outcome = None
        if dc is not None:
            margin = total - dc
            if kept == 1:
                outcome = Outcome.BOTCH
            elif kept == 20:
                outcome = Outcome.CRIT
            elif margin >= 10:
                outcome = Outcome.CRIT
            elif margin >= 0:
                outcome = Outcome.SUCCESS
            elif margin >= -2:
                outcome = Outcome.PARTIAL
            elif margin <= -10:
                outcome = Outcome.BOTCH
            else:
                outcome = Outcome.FAIL

        res = RollResult(faces, kept, mods, dc, total, outcome, advantage, label)
        self.history.append(res)
        return res

    def opposed(
        self,
        a_mods: Iterable[Modifier],
        b_mods: Iterable[Modifier],
        a_adv: int = 0,
        b_adv: int = 0,
    ) -> tuple[RollResult, RollResult, int]:
        """Contested check. Returns (a, b, margin) — margin>0 means A wins."""
        a = self.check(modifiers=a_mods, advantage=a_adv, label='contest-A')
        b = self.check(modifiers=b_mods, advantage=b_adv, label='contest-B')
        return a, b, a.total - b.total


# Difficulty ladder — modes reference these by name so tuning is central.
DC = {
    'trivial': 5,
    'easy': 8,
    'routine': 11,
    'tricky': 14,
    'hard': 17,
    'severe': 20,
    'heroic': 24,
    'absurd': 28,
}


def dc_label(value: int) -> str:
    best = min(DC.items(), key=lambda kv: abs(kv[1] - value))
    return best[0]
