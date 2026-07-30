# WahSim

A modular, turn-based, dice-driven simulation engine with a browser GUI.
You describe a situation; it casts roles, assigns skills and abilities, and
plays it out in turn order with a visible dice trail.

Runs fully offline out of the box, or connects to **LM Studio** for
in-character dialogue and bespoke scene planning.

Reads the real Waluipedia data (`Reputation-Matrix2/data/*.json`), so casts are
actual canon characters — Miles Edgeworth prosecutes, and the Grand Congress
delegations keep their real blocs, influence and reliability ratings.

```bash
python3 -m wahsim --gui            # browser GUI  → http://localhost:8765
python3 -m wahsim                  # terminal menu
python3 -m wahsim congress --auto  # watch the AI run a whole vote
python3 -m wahsim --check          # test the LM Studio connection
python3 -m wahsim.test_wahsim      # 63 tests
```

---

## Connecting LM Studio

1. Load any model in **LM Studio**
2. **Developer** tab → **Start Server** (defaults to port `1234`)
3. Run with `--live`, or tick *Use LM Studio* in the GUI

```bash
python3 -m wahsim --check          # confirms the endpoint and lists models
python3 -m wahsim trial --live
python3 -m wahsim --gui --live
```

No API key required, and **the loaded model is auto-detected** — WahSim asks
`/v1/models` and uses whatever is loaded. If the server isn't running, or a
call fails mid-session, it **silently falls back** to the offline brain rather
than dropping your game. Call and fallback counts are reported at the end.

Because LM Studio's API is OpenAI-compatible, the same code works with Ollama
(`--api-base http://localhost:11434/v1`), llama.cpp, Jan, or OpenAI itself.

---

## The GUI

Stdlib `http.server` + a single-page front end — no pip install, and no
`tkinter` (which is missing from many slim Python builds). It's also the right
shape for this: a local server you point a browser at, exactly like LM Studio.

```
┌ setup ────────┬ transcript ─────────────────┬ your move ──────┐
│ mode/seed/LM  │ [04] Miles Edgeworth cross  │ ▸ Speak         │
│               │   "Where were you?"         │ ▸ Lobby         │
│ ▰▰▰▰▱ CASE 6/8│   🎲 d20=17 +4 = 21 ★ CRIT  │ ▸ Amend         │
│ ▰▰▱▱▱ DOUBT   │   → 💥 BROKEN: the witness  │ ▸ OBJECTION!    │
│               │     was threatened…         │ [ say… ]        │
│ 🔒 Beanbean +63│                             │                 │
│    Mordor  -41│                             │ Run to my turn ⏩│
└───────────────┴─────────────────────────────┴─────────────────┘
```

Live clocks, a live lean chart for Congress, the full dice trail, cast sheets
with composure bars and ability charges, and **Run to my turn** to skip the AI
seats.

---

## The three modes

### ⚖️ Trial
**PROSECUTION CASE** vs **REASONABLE DOUBT** race each other; **JUDGE'S
PATIENCE** taxes everyone as it fills. Opening → evidence → testimony →
closing → verdict.

Witnesses carry a credibility track and a **secret**. Grind credibility to zero
on cross and the secret surfaces publicly — a 3-tick swing to whoever forced it.

### 🏛️ Congress
Table a motion. Every delegation holds a **lean** from −100 to +100. Debate
shifts leans; delegates **lock** past ±55 and cost 3× to move after, which
creates the endgame scramble. Blocs drag members toward the bloc mean each
round, so flipping a bloc *leader* is worth more than a backbencher. Then the
roll call resolves.

```
  AGAINST ←──────────┼──────────→ FOR
  🔒··········|······●··    +71  Beanbean Kingdom      Progressive Bloc
    ··········|·●·······    +24  Regal Empire          Iron Pact
    ········●·|·········    -13  Internet Federation   Non-Aligned
```

### 🎭 Scene
Describe anything; the **Director** casts it and invents objectives. It matches
named canon characters and infers roles from nouns it finds in your sentence
(`"a suspicious banker"` → an `expert` with a hostile stance).

---

## Dice

One d20 + named modifiers vs a DC, with five degrees of success:

| Outcome | Trigger |
|---|---|
| 💀 **BOTCH** | natural 1, or missed by 10+ |
| ✗ **FAIL** | under the DC |
| ◐ **PARTIAL** | within 2 — succeed at a cost |
| ✓ **SUCCESS** | met or beat |
| ★ **CRITICAL** | natural 20, or beat by 10+ |

Every modifier is **named**, so a roll explains itself:
`d20=7 +1 Cunning +4 Negotiate −2 unpredictable −3 chamber in uproar = 7`

All randomness flows through one seeded RNG. `--seed 21` replays a session
exactly; the seed prints at the end of every run.

## Actors

Five attributes (`logic, presence, insight, resolve, cunning`) feed twelve
skills. Stats are **inferred from wiki prose** — keyword matching on title,
affiliation and summary — so Edgeworth comes out strong in logic/advocacy with
no hand-authoring.

**Composure** is the pressure track: below 6 is `−1 shaken`, below 3 is
`−3 rattled`, applied automatically to every roll.

**Abilities** are generated per actor, weighted to their best skills, with
limited charges and tags (`aggressive` / `risky` / `political` / `defensive`)
so modes react to the *kind* of move.

---

## Layout

```
wahsim/
  __main__.py      python3 -m wahsim
  config.py        all tuning, env-overridable
  cli.py           terminal UI
  gui.py           http.server + single-page front end
  core/
    dice.py        Dice, Modifier, Outcome, DC ladder
    entities.py    Actor, Ability, attribute→skill mapping
    engine.py      Session, Phase, Clock, Action, Beat + protocols
    brain.py       ScriptedBrain + LMStudioBrain
    roster.py      canon loader, stat inference, ability granting
  modes/
    trial.py  congress.py  scene.py
  test_wahsim.py   63 tests
```

The engine owns turn order, transcript and clocks. Modes own the fiction.
That split is why a new mode is one file.

### Tuning

Every balance number lives in `config.py` and takes an env override:

```bash
WAHSIM_COMMIT=25 WAHSIM_BLOC_PULL=0.4 python3 -m wahsim congress --auto
```

(Dropping the commit threshold from 55 → 25 takes locked delegates from 13 to
64 across eight games — the knobs genuinely bite.)

### Adding a mode

Implement six methods, register in `cli.MODES` and `gui.MODES`:

```python
class HeistMode:
    key, title = 'heist', 'Heist'
    def phases(self):          return [Phase('casing', 'Casing the Vault', max_rounds=2)]
    def actors(self):          return self._actors
    def options(self, actor):  return [{'verb': 'scout', 'label': 'Scout',
                                        'skill': 'recall', 'dc': DC['tricky']}]
    def resolve(self, action): ...   # roll, mutate clocks, return a Beat
    def status(self):          ...   # one-line HUD
    def finished(self):        ...
    def epilogue(self):        ...
```

You inherit turn order, the player menu, dice narration, the transcript, replay
seeds, both AI backends **and the GUI** for free. Optional hooks:
`on_phase_start(phase)`, `on_round_end(round)`.

---

## Tests

`python3 -m wahsim.test_wahsim` — 63 assertions covering dice invariants
(nat-1 always botches, advantage keeps the high die), composure feedback,
ability exhaustion, canon lookup, clock bounds, replay determinism,
early-exit epilogues, LM Studio fallback behaviour, GUI state serialisation and
a full GUI playthrough — plus **balance sweeps**: 24 congress and 12 trial
sessions asserting outcomes stay competitive rather than fixed.
