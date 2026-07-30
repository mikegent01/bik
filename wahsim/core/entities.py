"""Actors, skills, abilities and stances.

An Actor is any participant — PC, AI-driven NPC, judge, delegate. Roles are
data, not subclasses, so a mode can invent new ones at runtime.
"""
from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any

from .dice import Dice, Modifier

# Core attributes. Deliberately abstract so they serve courtroom, senate and scene.
ATTRS = ('logic', 'presence', 'insight', 'resolve', 'cunning')

ATTR_BLURB = {
    'logic': 'building arguments, spotting contradictions, procedure',
    'presence': 'commanding a room, oratory, intimidation',
    'insight': 'reading people, detecting lies, sensing mood',
    'resolve': 'withstanding pressure, composure under attack',
    'cunning': 'leverage, misdirection, backroom dealing',
}

# Skills map onto an attribute and are what actions actually roll.
SKILLS = {
    'advocacy':      'logic',
    'cross_examine': 'insight',
    'procedure':     'logic',
    'oratory':       'presence',
    'intimidate':    'presence',
    'empathy':       'insight',
    'composure':     'resolve',
    'deception':     'cunning',
    'negotiate':     'cunning',
    'forensics':     'logic',
    'perform':       'presence',
    'recall':        'logic',
}


def mod_for(score: int) -> int:
    """Attribute score 1-10 → modifier. 5 is average (+0)."""
    return (score - 5) // 2 + (1 if score >= 9 else 0)


@dataclass
class Ability:
    """A named special move. Modes generate these from character concepts."""
    key: str
    name: str
    description: str
    skill: str = ''
    bonus: int = 0
    uses: int = 1                 # -1 = at will
    used: int = 0
    tags: list[str] = field(default_factory=list)
    effect: str = ''              # freeform hook the mode interprets

    @property
    def available(self) -> bool:
        return self.uses < 0 or self.used < self.uses

    @property
    def charges(self) -> str:
        return '∞' if self.uses < 0 else f'{self.uses - self.used}/{self.uses}'

    def spend(self) -> bool:
        if not self.available:
            return False
        if self.uses > 0:
            self.used += 1
        return True


@dataclass
class Actor:
    key: str
    name: str
    role: str                       # 'judge', 'defense', 'delegate', ...
    faction: str = ''
    blurb: str = ''
    attrs: dict[str, int] = field(default_factory=dict)
    skills: dict[str, int] = field(default_factory=dict)
    abilities: list[Ability] = field(default_factory=list)
    is_player: bool = False
    # Volatile state
    composure: int = 10
    max_composure: int = 10
    # Initiative economy. `energy` is how much drive this actor has left to
    # take turns; `essential` actors (judge, chair, the player) can never be
    # skipped no matter how tired they are.
    energy: int = 6
    max_energy: int = 6
    essential: bool = False
    initiative: int = 0          # last rolled initiative, for display
    skipped: int = 0             # consecutive rounds sat out
    conditions: list[str] = field(default_factory=list)
    memory: list[str] = field(default_factory=list)   # what this actor has seen
    stance: str = 'neutral'
    meta: dict[str, Any] = field(default_factory=dict)

    def __post_init__(self):
        for a in ATTRS:
            self.attrs.setdefault(a, 5)

    # -- derived ------------------------------------------------------------
    def attr_mod(self, attr: str) -> int:
        return mod_for(self.attrs.get(attr, 5))

    def skill_mod(self, skill: str) -> int:
        attr = SKILLS.get(skill, 'logic')
        return self.attr_mod(attr) + self.skills.get(skill, 0)

    def modifiers_for(self, skill: str) -> list[Modifier]:
        attr = SKILLS.get(skill, 'logic')
        mods = [Modifier(attr.title(), self.attr_mod(attr))]
        if self.skills.get(skill):
            mods.append(Modifier(skill.replace('_', ' ').title(), self.skills[skill]))
        # Composure penalty: rattled actors argue worse.
        if self.composure <= 3:
            mods.append(Modifier('rattled', -3))
        elif self.composure <= 6:
            mods.append(Modifier('shaken', -1))
        for c in self.conditions:
            mods.append(Modifier(c, -2))
        return mods

    def ability(self, key: str) -> Ability | None:
        for a in self.abilities:
            if a.key == key:
                return a
        return None

    # -- initiative economy -------------------------------------------------
    def spend_energy(self, n: int = 1) -> None:
        self.energy = max(0, self.energy - n)

    def recover_energy(self, n: int = 1) -> None:
        self.energy = min(self.max_energy, self.energy + n)

    @property
    def energy_bar(self) -> str:
        f = round(self.energy / max(1, self.max_energy) * 6)
        return '◆' * f + '◇' * (6 - f)

    def bruise(self, amount: int) -> int:
        """Lose composure. Returns actual amount lost."""
        before = self.composure
        self.composure = max(0, self.composure - amount)
        return before - self.composure

    def steady(self, amount: int) -> int:
        before = self.composure
        self.composure = min(self.max_composure, self.composure + amount)
        return self.composure - before

    def remember(self, line: str, cap: int = 24):
        self.memory.append(line)
        if len(self.memory) > cap:
            self.memory = self.memory[-cap:]

    @property
    def composure_bar(self) -> str:
        filled = round(self.composure / max(1, self.max_composure) * 10)
        return '█' * filled + '░' * (10 - filled)

    def sheet(self) -> str:
        lines = [f'{self.name}  ({self.role}{", " + self.faction if self.faction else ""})']
        if self.blurb:
            lines.append(f'  {self.blurb}')
        lines.append('  ' + '  '.join(
            f'{a[:3].upper()} {self.attrs[a]}({self.attr_mod(a):+d})' for a in ATTRS))
        if self.skills:
            top = sorted(self.skills.items(), key=lambda kv: -kv[1])[:5]
            lines.append('  skills: ' + ', '.join(
                f'{k.replace("_", " ")} {v:+d}' for k, v in top))
        lines.append(f'  composure {self.composure_bar} {self.composure}/{self.max_composure}'
                     f'   energy {self.energy_bar} {self.energy}/{self.max_energy}'
                     + ('  ★essential' if self.essential else ''))
        for ab in self.abilities:
            lines.append(f'   • [{ab.charges}] {ab.name} — {ab.description}')
        return '\n'.join(lines)


def build_actor(
    key: str,
    name: str,
    role: str,
    dice: Dice,
    *,
    faction: str = '',
    blurb: str = '',
    strong: tuple[str, ...] = (),
    weak: tuple[str, ...] = (),
    skills: dict[str, int] | None = None,
    power: int = 0,
    is_player: bool = False,
) -> Actor:
    """Generate a statted actor. `power` nudges the whole spread up or down."""
    attrs = {}
    for a in ATTRS:
        base = 5 + power
        if a in strong:
            base += dice.rng.randint(2, 3)
        if a in weak:
            base -= dice.rng.randint(1, 3)
        attrs[a] = max(1, min(10, base + dice.rng.randint(-1, 1)))
    comp = 8 + attrs['resolve'] // 2
    nrg = 2 + (attrs['resolve'] + attrs['presence']) // 5
    return Actor(
        key=key, name=name, role=role, faction=faction, blurb=blurb,
        attrs=attrs, skills=dict(skills or {}), is_player=is_player,
        composure=comp, max_composure=comp,
        energy=nrg, max_energy=nrg,
    )
