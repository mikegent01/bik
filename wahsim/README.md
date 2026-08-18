# WahSim

A modular, turn-based, dice-driven simulation engine with a browser GUI.
You describe a situation; it casts roles, assigns skills and abilities, and
plays it out in turn order with a visible dice trail.

Runs fully offline out of the box, or connects to **LM Studio** for
in-character dialogue and bespoke scene planning.

Reads the real Waluipedia data (`Reputation-Matrix2/data/*.json`), so casts are
actual canon characters — Miles Edgeworth prosecutes, and the Grand Congress
delegations keep their real blocs, influence and reliability ratings.

---

## What this README owns

WahSim is a separate simulator inside the repository. It does **not** file canon
by itself, mutate `events.json`, award XP, or update the reputation matrix. It
borrows canon data to cast scenes and produce repeatable transcripts for play,
experimentation, debugging, and table prompts.

This README should be updated whenever a PR changes:

- a run entry point (`python -m wahsim`, `run_gui.py`, `gui.py`, `cli.py`);
- a mode contract or a new mode under `wahsim/modes/`;
- dice outcomes, initiative, energy, composure, or clock rules;
- canon loading from `Reputation-Matrix2/data/`;
- LM Studio / OpenAI-compatible fallback behavior;
- GUI state shape or the local HTTP API;
- the balance sweeps or test count.

The guiding promise: a reader should be able to run one seeded simulation,
understand why every roll happened, and replay the same result without knowing
any internals.

---

## Quick start

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

## Runtime contract

Every mode plugs into the same engine contract:

1. **Cast** actors from canonical data or scenario text.
2. **Create phases** with clocks, maximum rounds, and optional fixed order.
3. **Offer actions** for the active actor.
4. **Resolve one action** into a `Beat`: roll trail, narration, clock changes,
   consequences, and optional dialogue.
5. **Report status** so the CLI/GUI can draw the HUD without knowing the mode's
   internal state.
6. **End with an epilogue** that explains why the scene resolved.

The engine owns replayable randomness, initiative, composure penalties, ability
charges, transcript storage, and the player/AI turn loop. A mode should not
roll its own global RNG, write directly to the GUI, or mutate canon files. If a
mode needs persistent scenario data, put it under `wahsim/data/` and document
how it is loaded.

### Canon loading rules

`core/roster.py` is allowed to read Waluipedia data; simulation output is not
allowed to write it back. Stats are inferred from prose keywords, affiliations,
and titles. That makes the simulator useful for quickly staging a scene, but it
also means the simulator's class/attribute guess is a **play aid**, not a canon
statement. If the output suggests a good idea for the archive, file it through
the normal Waluipedia process afterward.

### Determinism rules

- All randomness must flow through the session RNG.
- The seed prints at the end of every run.
- A test that asserts replay determinism should fail if a mode reaches out to
  unseeded randomness.
- LM Studio text may vary; the mechanical skeleton must still be deterministic
  and must fall back when the model is unavailable.

---

## The modes

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

## Initiative & energy

Turn order is **rolled every round**, not fixed:

```
  🎲 INITIATIVE — Presentation of Evidence, round 1
    1. Ostrel Whitlock (judge) — init 12  ◆◆◆◆◆◆ ★
    2. Ludo Vondar (defense)   — init 5   ◆◆◆◆◇◇ ★
    3. Miles Edgeworth (pros.) — init 4   ◆◆◆◆◇◇ ★
    –  Sable Ferrow (witness) sits out — no energy
```

`d6 + energy`, sorted high to low, presence breaks ties. **Whoever has the most
energy speaks first.**

- **Energy** is a turn economy. Acting costs 2; every actor recovers 1 per
  round, and anyone who sat out recovers 3. So a character who dominates the
  floor gradually runs down and yields it, then comes back.
- **Rolling a natural 1** (or hitting zero energy) means you sit the round out.
  This is the point: instead of marching through seven speakers every round,
  the spotlight narrows to whoever still has drive.
- **★ Essential actors can never be skipped.** The judge, both counsel, the
  chair, the sponsor, the top bloc leader and *always the player* have a
  guaranteed seat and floor at initiative 1, however exhausted they are.

**Fixed-order phases opt out.** Opening and closing statements go
prosecution-then-defence by law, and the roll call is the chair's alone — those
are marked `rolled=False` and print `📋 FIXED ORDER` instead.

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
  test_wahsim.py   130 tests
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

### GUI API surface

The browser GUI is intentionally small: a stdlib HTTP server serves one page and
accepts JSON POSTs. Browser code should use these routes rather than reaching
into Python state by any other path.

| Route | Purpose |
|---|---|
| `POST /api/start` | Create a new session from mode, seed, LM toggle, and scenario text |
| `POST /api/step` | Advance one action, optionally with the player's selected choice/text |
| `POST /api/auto` | Run AI turns until the player is active or the scene ends |
| `POST /api/state` | Return the current serialized session state |
| `POST /api/check` | Check the LM Studio/OpenAI-compatible endpoint |

The serialized state must remain UI-friendly: plain JSON values, no Python
objects, no methods, no unserializable dice classes. If a GUI feature needs new
data, add it to the session/mode serialization and cover it with a test.

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

`python -m wahsim.test_wahsim` — 130 assertions covering dice invariants
(nat-1 always botches, advantage keeps the high die), composure feedback,
ability exhaustion, canon lookup, clock bounds, replay determinism,
early-exit epilogues, LM Studio fallback behaviour, GUI state serialisation and
**turn-order guards** (no individual acts twice in a row, including across
phase boundaries), **initiative guards** (essentials are never skipped across
10 full games, exhausted actors do sit out, round sizes genuinely vary, and
fixed-order phases keep their legal sequence), ability translation
from canon (including that Archie's six real purchases all
resolve exactly), **Glazed scale guards** (100 seats must still chart in under
24 lines and resolve in under 60 turns), a full GUI playthrough,
**entry-point guards** (every runnable file must import
cleanly both as `python file.py` and as `python -m ...`) — plus **balance
sweeps**: 24 congress and 12 trial sessions asserting outcomes stay competitive
rather than fixed.

### PR verification checklist

For a WahSim change, include at least one command from each affected layer:

```bash
python -m wahsim.test_wahsim
python -m wahsim trial --seed 21 --auto
python -m wahsim congress --seed 21 --auto
python -m wahsim glazed --seed 21 --auto
python -m wahsim scene --seed 21 --auto --premise "Waluigi negotiates with a suspicious banker"
python -m wahsim --check
```

If a PR changes entry points, also run safe file-form commands from inside
`wahsim/`:

```bash
python cli.py --check
python test_wahsim.py
```

If a PR changes GUI serialization, start the GUI, create one session, run to the
player turn, submit one player action, and confirm reload/state retrieval still
works. If a PR changes canon loading, name the source Waluipedia files it reads
and confirm the simulator did not write to them.
