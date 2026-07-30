# WahSim

A modular, turn-based, dice-driven simulation engine. You describe a situation;
it casts roles, assigns skills and abilities, and plays it out in turn order
with a visible dice trail. Runs fully offline, or connects to a real model for
in-character dialogue and bespoke scene planning.

Reads the real Waluipedia data (`Reputation-Matrix2/data/*.json`) so casts are
actual characters — Miles Edgeworth prosecutes, the Grand Congress delegations
keep their real blocs, influence and reliability ratings.

```bash
python3 -m wahsim.cli                 # menu
python3 -m wahsim.cli trial           # play a trial
python3 -m wahsim.cli congress --auto # watch the AI run a whole vote
python3 -m wahsim.cli scene --premise "Wario sells gravity to a suspicious banker"
python3 -m wahsim.test_wahsim         # 41 tests
```

---

## The three modes

### ⚖️ Trial
Two clocks race: **PROSECUTION CASE** vs **REASONABLE DOUBT**. A third,
**JUDGE'S PATIENCE**, taxes everyone as it fills. Phases run opening → evidence
→ testimony → closing → verdict.

Witnesses have a credibility track and a **secret**. Grind credibility to zero
on cross and the secret surfaces publicly — worth a 3-tick swing to whoever
forced it out. Evidence can be admitted, then later discredited.

```
[06] Miles Edgeworth — cross
    "Where were you when the door opened?"
    🎲 d20=17 +1 +3 = 21 vs DC 14 → ★ CRITICAL  [+1 Logic, +3 Cross Examine]
    → Fenna Underleaf credibility → 0/7
    → 💥 BROKEN: Fenna Underleaf was threatened before agreeing to testify.
    → PROSECUTION CASE ▰▰▰▰▰▰▰▰▰▱▱▱ 6/8
```

### 🏛️ Congress
Exactly the loop you described. Table a motion, every delegation holds a **lean**
from −100 to +100, debate shifts leans, and delegates **lock** once past ±55 —
after which they cost far more to move, creating an endgame scramble.

Blocs drag their members toward the bloc mean each round, so flipping a bloc
leader is worth more than flipping a backbencher. Then the roll call resolves.

```
  AGAINST ←──────────┼──────────→ FOR
  🔒··········|······●··    +71  Beanbean Kingdom       Progressive Bloc
    ··········|·●·······    +24  Regal Empire           Iron Pact
    ········●·|·········    -13  Internet Federation    Non-Aligned
```

### 🎭 Scene
Describe anything. The **Director** parses it, casts it, and invents objectives:

```
$ python3 -m wahsim.cli scene --premise "Wario sells gravity to a banker while Waluigi objects"
  setting: A back office with a very good lock and a very bad smell.
   · Wario        witness    (matched to canon)
   · Waluigi      witness    (matched to canon)
   · The Banker   expert     (invented from the premise)
```

Objectives are clocks. Fill yours before **SCENE TENSION** runs out.

---

## Dice

Single d20 + named modifiers vs a DC, with five degrees of success:

| Outcome | Trigger |
|---|---|
| 💀 **BOTCH** | natural 1, or missed by 10+ |
| ✗ **FAIL** | under the DC |
| ◐ **PARTIAL** | within 2 — succeed at a cost |
| ✓ **SUCCESS** | met or beat |
| ★ **CRITICAL** | natural 20, or beat by 10+ |

Every modifier is **named**, so the roll explains itself:
`d20=7 +1 Cunning +4 Negotiate -2 unpredictable -3 chamber in uproar = 7`

All randomness flows through one seeded RNG. `--seed 21` replays a session
exactly — the seed is printed at the end of every run.

## Actors

Five attributes (`logic, presence, insight, resolve, cunning`) feed twelve
skills. Stats are **inferred from wiki prose** — keyword matching on a
character's title, affiliation and summary decides their aptitudes, so
Edgeworth comes out strong in logic/advocacy without hand-authoring.

**Composure** is the pressure track. Drop below 6 and you take `-1 shaken`;
below 3 it's `-3 rattled` on every roll. It feeds back automatically.

**Abilities** are generated per actor, weighted toward their best skills —
`OBJECTION!`, `Press the Point`, `Procedural Gambit`, `Call a Caucus`. Limited
charges, tagged `aggressive` / `risky` / `political` / `defensive` so modes can
react to the *kind* of move rather than the specific one.

## AI brains

Both satisfy one protocol, so modes never branch on backend:

- **ScriptedBrain** — offline, seeded, zero dependencies. Always available.
- **LMArenaBrain** — any OpenAI-compatible `/chat/completions` endpoint. Used
  for in-character dialogue, option selection, and structured scene planning.

```bash
export WAHSIM_API_BASE=https://api.openai.com/v1   # or an LMArena proxy,
                                                    # http://localhost:11434/v1 (Ollama),
                                                    # http://localhost:1234/v1 (LM Studio)
export WAHSIM_API_KEY=sk-...
export WAHSIM_MODEL=gpt-4o-mini
python3 -m wahsim.cli trial --live
```

If a live call fails for any reason it **silently degrades** to the scripted
brain rather than dropping a session mid-trial. Call/fallback counts print at
the end.

---

## Architecture

```
wahsim/
  core/
    dice.py      Dice, Modifier, Outcome, DC ladder
    entities.py  Actor, Ability, attribute→skill mapping
    engine.py    Session, Phase, Clock, Action, Beat, Mode/Brain protocols
    brain.py     ScriptedBrain + LMArenaBrain
    roster.py    canon loader, stat inference, ability granting
  modes/
    trial.py     congress.py     scene.py
  cli.py         test_wahsim.py
```

The engine owns turn order, transcript and clocks. The mode owns the fiction.
That split is the whole point — a new mode is one file.

### Adding a mode

Implement six methods:

```python
class HeistMode:
    key, title = 'heist', 'Heist'

    def phases(self):  return [Phase('casing', 'Casing the Vault', max_rounds=2), ...]
    def actors(self):  return self._actors
    def options(self, actor):  return [{'verb':'scout','label':'Scout',
                                        'skill':'recall','dc':DC['tricky']}]
    def resolve(self, action) -> Beat:  ...   # roll, mutate clocks, return a Beat
    def status(self) -> str:  ...             # one-line HUD
    def finished(self) -> bool: ...
    def epilogue(self) -> str: ...
```

Register it in `cli.MODES` and it inherits turn order, the player menu, dice
narration, transcript, replay seeds and both AI backends for free.

Optional hooks: `on_phase_start(phase)`, `on_round_end(round)`.

---

## Tests

`python3 -m wahsim.test_wahsim` — 41 assertions covering dice invariants
(nat-1 always botches, advantage keeps the high die), composure feedback,
ability exhaustion, canon lookup, clock bounds, replay determinism, and
**balance**: it plays 24 full congress sessions and asserts the outcome is
competitive rather than fixed, and 12 trials asserting verdicts vary by seed.
