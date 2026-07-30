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
# From the repo root (bik/):
python -m wahsim --gui             # browser GUI  → http://localhost:8765
python -m wahsim                   # terminal menu
python -m wahsim congress --auto   # 9-seat chamber
python -m wahsim glazed --auto     # the full 100-seat Glazed Congress
python -m wahsim --check           # test the LM Studio connection
python -m wahsim.test_wahsim       # 69 tests

# Or from INSIDE the wahsim folder — these work too:
python run_gui.py                  # simplest way to start the GUI
python gui.py
python cli.py --check
python test_wahsim.py
```

> **Windows note:** every runnable file works both ways. If you `cd wahsim` and
> run `python gui.py`, it bootstraps its own import path — you don't need to
> know about `-m` or packages. There's a regression test for exactly this.

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

### 🍩 Glazed Congress — the full chamber

The founding session of 1026, at scale: **100 delegations across 7 blocs.**

This one exists because of a display problem worth naming. One row per
delegation is fine at 9 seats and unusable at 100 — that's ~2,200px of chart
(2.4 screens), no way to find who matters, and lobbying seats one at a time
would take 100 turns to move the room once.

So the mode changes the **unit of play**:

| | Congress (9) | Glazed (100) |
|---|---|---|
| Display | one row per seat | one bar per **bloc** |
| Verbs | lobby a delegation | **whip a bloc**, work the **swing list** |
| Speakers | everyone | the 8 highest-influence seats |
| Chart height | 9 rows | ~20 rows *at any chamber size* |

```
  THE CHAMBER — 100 delegations, 7 blocs
  BLOC                FOR/UND/AGN   WHIP BOARD
  Progressive Bloc    8/8/0         ████████████░░░░░░░░░░░░ +16
  Mercantile League   4/10/3        ██████░░░░░░░░░░░░░░▓▓▓▓  +5
  Sovereignty Bloc    0/10/6        ░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓ -15
  █ for   ░ undecided   ▓ against

  SWING SEATS (93 still moveable, top 8):
        +1  Halden Holds                 Arcane Concord
        -2  Tessin Sovereignty           Mercantile League
```

Only the **swing seats** can still decide the vote, so those are surfaced and
the settled ones are hidden. `bloc_detail('Sovereignty')` drills into any bloc
on demand. Result: a 100-seat chamber reads in one screen and resolves in ~40
turns, with a per-bloc breakdown at the end.

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

**Abilities** come from the real ability shop. `core/abilities.py` translates
the 895 canon records in `abilityShop.json` into playable moves — the shop's own
`type`, `class`, `apCost`, `level` and `rules.uses` decide the skill, bonus,
charges and tags, so nothing is hand-tuned twice.

Purchases live in `wahsim/data/purchases.json` and are granted automatically
whenever that character appears:

```json
{"archie": {"bought": [
  {"vendor": "Smokin' J", "abilities": ["Shadow Dodge", "Hidden Potential"]},
  {"vendor": "Salem",     "abilities": ["Sharpshooter's Edge", "Guardian's Vigil"]},
  {"vendor": "Roger",     "abilities": ["Bullet Speed", "Bullet Swift"]}]}}
```

```
$ python -c "from wahsim.core.abilities import describe; print(describe('archie'))"
Archie Archbold Miser — 5 AP spent
  from Smokin' J:
    • Shadow Dodge (spy, stealth, 1 AP) → deception +2
    • Hidden Potential (commoner, utility) → recall +3
  from Salem:
    • Sharpshooter's Edge (fighter, combat, 1 AP) → intimidate +2
```

Only the name and vendor need recording — everything else is read from canon.
Actors without a sheet still get generated abilities weighted to their skills.

---

## Layout

```
wahsim/
  __main__.py      python -m wahsim
  run_gui.py       plain `python run_gui.py` launcher (no -m needed)
  config.py        all tuning, env-overridable
  cli.py           terminal UI
  gui.py           http.server + single-page front end
  core/
    dice.py        Dice, Modifier, Outcome, DC ladder
    entities.py    Actor, Ability, attribute→skill mapping
    engine.py      Session, Phase, Clock, Action, Beat + protocols
    brain.py       ScriptedBrain + LMStudioBrain
    roster.py      canon loader, stat inference, ability granting
  data/
    purchases.json   who bought which abilities, from whom
  core/
    abilities.py     translates abilityShop.json into playable moves
  modes/
    trial.py  congress.py  glazed.py  scene.py
  test_wahsim.py   98 tests
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

`python -m wahsim.test_wahsim` — 98 assertions covering dice invariants
(nat-1 always botches, advantage keeps the high die), composure feedback,
ability exhaustion, canon lookup, clock bounds, replay determinism,
early-exit epilogues, LM Studio fallback behaviour, GUI state serialisation and
ability translation from canon (including that Archie's six real purchases all
resolve exactly), **Glazed scale guards** (100 seats must still chart in under
24 lines and resolve in under 60 turns), a full GUI playthrough,
**entry-point guards** (every runnable file must import
cleanly both as `python file.py` and as `python -m ...`) — plus **balance
sweeps**: 24 congress and 12 trial sessions asserting outcomes stay competitive
rather than fixed.
