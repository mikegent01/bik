# Plan — Reputation on articles

**Status: PROPOSAL. Nothing in this plan has been implemented.**
Written after a full read of the readmes; the only code shipped alongside it is
the advisory audit `tools/audit-reputation-coverage.py`, which produces every
number quoted below.

Reproduce the numbers:

```bash
python3 tools/audit-reputation-coverage.py
python3 tools/audit-reputation-coverage.py --list-missing
```

---

## What the readmes already decided

Five documents own a piece of this, and they do not contradict each other. They
are worth stating up front because most of the obvious ideas are already ruled
out.

| Document | The ruling it makes |
|---|---|
| `Reputation-Matrix2/README.md` → *Relationship pages and reputation modifiers* | `reputationChanges` is the relationship modifier. It is **signed integers, operator-keyed, faction-valued**. It goes on the article that *caused* the change, not on every related page. The cause must be auditable from the prose. Never hand-edit calculated totals. |
| `docs/STORY_FORMAT_GUIDE.md` §9E | `FACTION_ASSESSMENTS` is not decoration — kill-order phrasing trips the hostility ceiling. A stale assessment scores wrong in both directions. Update only when the filing changes what a faction believes. |
| `docs/run-reports/2026-09-03-two-axis-reputation.md` | Standing (−100…+100) and Pressure (0…100) are separate axes. Notoriety is not approval. `reputationChanges` is per-operator and authoritative; `effects` is a record-level outcome applied at `EFFECTS_SHARED_WEIGHT = 0.25` and never overwrites an authored personal delta. |
| `docs/BATTLES_GUIDE.md` | Leave `{}` when hand-filing. **Never add a `_generatedReputation` marker for work the generator did not do** — that marker is provenance. |
| `Reputation-Matrix2/tools/GENERATOR_INVENTORY.md` | The `reputation` generator considers a record done when *either* operator `reputationChanges` *or* record-wide `effects` is non-empty. |

The root README adds the constraints that bound any change here: remaster don't
rewrite, never hand-edit a generated file, small diffs with matched
indentation, one purpose per PR, and unverified means unmerged.

---

## What is actually true today

### The engine is in good shape; its reach is not

`calculateOperatorStanding()` reads exactly four record types and eight
operators. Everything else in the archive is silent — not wrong, *silent*.

```
1. RECORD GAP — scored types carrying no deltas at all
   type            total  repChanges  effects  both  NONE
   events            120         108       90    86     8
   battles            69          65       62    61     3
   majorBattles       51          48       40    37     0
   trials              7           7        7     7     0
   -> 11 scored records move nothing.
```

Record coverage is **already 96%**. This is the important finding, and it kills
the most obvious version of "add reputations to articles": the events, battles
and trials are essentially done. Eleven records are missing deltas, and they
are the newest filings — the backlog is a filing-discipline gap of about a
fortnight, not a systemic hole.

The eight events:

```
the_dread_mansion_incursion            feyward_library_reclamation_and_the_kitchen
promo_mario_newspaper                  the_belly_of_the_beast
the_garden_above_the_fire              feyward_i_cant_afford_not_to_care
the_tape_and_the_wario_files           judgement_in_the_grove
```

The three battles:

```
battle_of_the_mistral_farmstead        the_skittering_grove_descent_battle
judgement_in_the_grove_battle
```

`promo_mario_newspaper` is a deliberate abstention candidate: it is an amended
unverified clipping, and the readmes explicitly permit "this filing moves
nobody's opinion". That is a *decision to record*, not a hole to fill.

### The real gap is surface, not data

```
2. SURFACE GAP — openable types the engine never reads
   characters          166 records, 0 carry reputation  (8 of them get an operator panel)
   locations            71 records, 0 carry reputation
   factions             22 records, 0 carry reputation  (16 render a party-standings panel)
   nations              31 records, 0 carry reputation
   races                51 records, 0 carry reputation
   cultures             15 records, 0 carry reputation
   whatifs               3 records, 0 carry reputation
   articleAnalyses      17 records, 0 carry reputation
```

Two findings sit inside that table.

**158 of 166 characters have no reputation surface at all.** The operator panel
is hard-coded to the eight-strong `REPUTATION_OPERATORS` roster. Green T,
Markop and Hjumpik get a standings sheet; Mystic Morel, Toad Lee, Eager, Salam
and every named NPC get nothing — despite appearing in the participant lists of
records that move the matrix. A reader on a character page cannot see who that
character has annoyed.

**Six filed factions render no standings panel.** `renderArticleFactionReputation()`
reads `LORE_FACTIONS` (embedded in `index.html`, with `factionsGenerated.json`
merged over it at boot). These are filed in `factions.json` but appear in
neither, so the panel silently returns `''`:

```
color_division  council_of_seven  dgk  midlands_diet  order_of_jack  undertale_monsters
```

`order_of_jack` and `midlands_diet` are especially bad: both are the subject of
recent filings, and `#/regal-diet` is a whole coded system whose faction page
shows no standings.

### Nine authored keys are silently discarded

```
3. RESOLUTION GAP
   faction keys referenced: 68  unresolved: 0
   operator keys referenced: 18  off-roster: 9
     daniel_gamma_command(1)  dracule_mihawk(3)  eager(1)  flowey(1)
     gamma_agent(3)  jamesly(1)  koffin_k(1)  sans(1)  wario(2)
```

Faction keys are perfect — all 68 resolve. But nine operator keys are not on
the roster. Somebody wrote `wario: { ... }` onto two records and
`dracule_mihawk` onto three; `renderReputationImpactPanel()` will render those
rows under a `prettyId()` fallback name, but `calculateOperatorStanding()` will
never sum them, because nothing ever asks for a standing for an operator that
is not in `REPUTATION_OPERATORS`. **That authoring work is currently thrown
away.** Note `eager` — a real, named, recurring party member.

This is the same class of defect as the two-axis run report's "silent source
collision": data that looks authored and scores nothing.

---

## What to build, in priority order

Each item states its own verification, because unverified is unmerged. **Each
is a separate PR** — the root README forbids bundling them.

### A. Close the 11-record backlog *(data only, no code)*

Author `reputationChanges` on the eight events and three battles, or record a
reasoned abstention. Every delta must be traceable to a named action in the
prose, per the README's "the number should be auditable from the story".

Scope caution: `judgement_in_the_grove` contains an Iron Legion arrest attempt
*and* a temporary alliance, which is exactly the kind of record where notoriety
gets mis-authored as approval. Author the hostile side as negative standing and
let Pressure carry the intensity; do not write a positive number because the
Legion "engaged heavily".

- **Do not** add `_generatedReputation` — this is hand work (`BATTLES_GUIDE.md`).
- **Do not** reformat the files; match existing indentation.
- Verify: `python3 tools/audit-reputation-coverage.py` shows `NONE` at 0 (or
  documents each abstention), `python3 tools/check-all.py` unchanged,
  and the Reputation Impact panel renders on each touched record.

### B. Resolve or retire the nine off-roster operator keys *(data + one decision)*

Three outcomes are available per key, and the choice is editorial:

1. **Promote to the roster** — if they are a real recurring operator. `eager`
   is the strongest candidate; `wario` is arguably one too. Cost: a
   `REPUTATION_OPERATORS` entry plus an `INFAMY_PROFILES` entry, and they then
   appear on every faction page's standings list, which is a real UI cost for
   a marginal character.
2. **Re-key to an existing operator** — if the delta really belongs to a party
   member who was present.
3. **Convert to record-level `effects`** — if the outcome was factional rather
   than personal. This is what `effects` is *for*, and it is the right answer
   for `gamma_agent` / `daniel_gamma_command`, which read as unit labels.

Verify: the audit's off-roster list empties; the two-axis test suite still
passes; spot-check that no faction page grew an unwanted operator column.

### C. Make `factions.json` and `LORE_FACTIONS` agree *(the highest-value fix)*

Six filed factions cannot render standings. Fix the *cause*, not the six:
`renderArticleFactionReputation()` should fall back to the `factions.json`
record when `LORE_FACTIONS` has no entry, rather than returning `''`. That is
one small change that also protects every faction filed in future.

This is a remaster, not a rewrite: the panel keeps its shape, it just stops
requiring a registry that new filings do not write to.

Verify: open all six routes and confirm a panel renders; confirm the 16
existing ones are byte-identical to before (the fallback must not change the
happy path); `check-references.py` clean.

### D. A reputation surface for non-operator characters *(the biggest win)*

158 characters are silent. The proposal is **not** to make them operators —
eight operators × ~100 factions is already the page-size problem the two-axis
follow-up had to fix, and 166 × 100 would be unreadable.

Instead, add a **"Who has an opinion"** panel to character pages that are not
on the roster, derived from data that already exists:

- records where the character is a `participants[]` entry **and** the record
  carries `reputationChanges`;
- the factions those records moved, and in which direction;
- any `FACTION_ASSESSMENTS` line naming them.

This is a read-only projection — it authors no new numbers and invents no
canon. It answers "who noticed this person" using deltas already filed against
the operators who stood next to them. It must be honest about that: the panel
should say it reports *the room's* reputation movement, not a personal
standing, or it will be read as a score the engine never computed.

Verify: a jsdom render test in `tools/tests/` in the style of
`test-reputation-two-axis.mjs`; assert the panel is absent for the eight
operators (they already have a better one) and present for a named NPC with
participant history; assert it never claims a numeric personal standing.

### E. Do *not* do these

- **Do not** add `reputationChanges` to locations, nations, races or cultures.
  The engine has no concept of a place holding an opinion, and the README is
  explicit that a modifier belongs on the article that *caused* the change. A
  location is a setting, not an actor.
- **Do not** seed `OPERATOR_BASE_STANDINGS`. The two-axis report flags it as
  empty and notes it "would still add signal" — but every number in there is a
  number nobody can point at a source for, which is precisely what the current
  engine was built to stop.
- **Do not** reconcile the 109 sign-conflicting records in this work. That is a
  known, deliberately deferred editorial pass, and it is not "adding reputation
  to articles".

---

## Open questions for the owner

1. **`eager` and `wario` — operators or not?** This is a canon call, not a
   technical one. Promoting them is cheap; un-promoting them later is not.
2. **Should the abstention be explicit in data?** `promo_mario_newspaper`
   arguably wants `"reputationChanges": {}` with a `reputationNotes` line
   saying why, so the next agent does not "fix" it. The generator inventory
   treats empty as pending, so this needs a convention before it is used.
3. **Item D's panel name.** "Who has an opinion" is a placeholder. It must not
   read as a standings score.
