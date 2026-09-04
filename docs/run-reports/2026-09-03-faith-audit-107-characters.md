# Run report — faith audit: bespoke religion notes across the character roster

**Date filed:** 3 September 2026 · **Branch:** `arena/01a069d5-bik` · **PR:** #66

**Brief.** Religion descriptions on articles were "quite short" — because almost
nothing declared a faith, so the panel fell back to the denomination's one-line
register blurb. Audit ~50 characters and give them custom religion descriptions,
excluding the Disaster Inc. principals.

---

## 1. Files created or edited

```
CREATED
  tools/add-faith-notes.py                      new, 340 lines (one-shot writer + validator)
  docs/run-reports/2026-09-03-faith-audit-107-characters.md   this report

EDITED
  Reputation-Matrix2/data/characters.json       ~ 107 records gain faiths[] (113 declarations)
  tools/tests/test-faith-render.mjs             + 9 assertions (31 -> 40 checks)
```

Nothing was deleted. No record lost a field: a round-trip diff against
`HEAD` confirms the only key added anywhere is `faiths`, and the two records
that already had one (`jack_melvus_miser`, `miser_family`) are byte-identical.

---

## 2. What changed, and why it was needed

`faithPanel()` renders `note` **in preference to** the denomination's generic
`description`. Before this run only **4 records repo-wide** carried `faiths[]`
(2 characters, 1 faction, 1 location), so every other article that mentioned
religion showed either nothing or register boilerplate.

| | before | after |
|---|---:|---:|
| characters declaring a faith | 2 | **109** |
| total declarations | 2 | 117 |
| distinct denominations in use | 2 / 50 | **38 / 50** |
| records with two faiths (friction computed) | 2 | 8 |

Spread across the four cosmological groups is deliberately even, so the
compatibility matrix gets exercised rather than one group dominating:
celestial_order 32 · cosmic_void 29 · machine_orthodoxy 26 · primal_forces 26.

**Excluded as instructed:** `archie_miser`, `markop`, `hjumpik`,
`remi_akamatsu_full_backstory`. The writer refuses to run if any of these
appears in its assignment table, and the test asserts all four stay clean.
(The request said "those three" but named four — I excluded all four.)

### House style followed

Each note is 2–4 sentences in the archive's voice, written from that
character's own lore, and opinionated about *how* the faith is held — default,
chosen, enforced, lapsing, or refused — rather than restating what the
denomination is. Average note length 265 characters; all 117 unique.

Six new records declare two faiths so the friction engine has something to
compute:

| record | faiths | friction |
|---|---|---:|
| `bryan` | Cosmic Punchline × Veneration of the Stars | 100 — Heretical Status |
| `hargram_fidger` | Gospel of the Cog × Blood for the Blood God | 80 — Open Hostility |
| `luigi` | Veneration of the Stars × E. Gadd's Method | 50 — Spiritual Dissonance |
| `speaker_l` | Veneration of the Stars × Blood for the Blood God | 25 — Minor Friction |
| `captain_toadette` | Veneration of the Stars × Lady of the Lake | 0 — Harmonious |
| `rakasha` | Pact of Yggdrasil × The Wild Hunt | 0 — Harmonious |

Every score is computed from the group matrix by the app; none is asserted in
the data. `speaker_l`'s pairing is the load-bearing one — it puts his drift
from procedural politician toward war-anthem violence on the record as
doctrinal friction rather than as narration.

---

## 3. XP awarded

**No XP awarded this run.** No event was filed; this is a data-quality pass.

---

## 4. Verification

```
tools/tests/test-faith-render.mjs      40 passed, 0 failed   (was 31)
tools/tests/test-reputation-two-axis.mjs   25 passed, 0 failed
tools/tests/test-home-feed-render.mjs      11 passed, 0 failed
tools/check-all.py                     12 of 14 pass
tools/check-references.py              PASS (403 legacy warnings, unchanged)
```

`check-all.py`'s two failures — `injury table` and `investigations` — are
pre-existing and untouched by this run.

New assertions in `test-faith-render.mjs`: ≥50 characters declare a faith; the
four excluded ids stay clean; every id resolves in `RELIGION_DATA.denominations`;
every declaration has a role and a note over 120 characters; no note equals its
denomination's boilerplate; all notes unique; and three records
(`thornbury`, `general_ironhand`, `quantity`) are spot-rendered through the real
app to prove the custom prose reaches the DOM.

**Negative-tested.** Injecting boilerplate into `thornbury` and a bogus faith id
into `quantity` produced exactly four targeted failures; the file was then
restored and re-verified green. The checks bite.

**Encoding.** `characters.json` is stored `indent=2`, ASCII-escaped, no trailing
newline. Confirmed byte-identical on a no-op round trip *before* writing, so the
875-line diff is content only. The 48 apparent deletions in `git diff --stat`
are trailing-comma churn on lines that gained a following key, not removals.

---

## 5. Not done / open

- **43 characters still have no faith.** Mostly one-line stubs
  (`boss_knuckles`, `skullcap_murphy`, `crossbones`) and records where an
  invented faith would be worse than silence. Left deliberately blank.
- **12 denominations remain unused**, including `sigmarite_cult`,
  `triforce_devotion`, `arceus_mythos`, `great_plan` and
  `team_plasma_liberation`. These belong to peoples the archive has not yet
  given characters to; forcing them onto existing cast would be filler.
- **`factions.json` and `locations.json` were not audited.** Only
  `order_of_jack` and `vellanet_rise` declare faiths. A faction-level pass is
  the obvious next run — an Iron Legion or Liberated Toads record carrying its
  own doctrine would give the faith pages congregations as well as members.
- **Some assignments are readings, not statements.** `orvinder_danos`
  (tzeentch_schemes) and `darno_spriggon` (dark_moon_clan) are filed
  provisionally on thin evidence; both notes say so in-world rather than
  pretending to certainty.
- **`hjumpik` is excluded but `piktor_deldkur_the_third`, his grandfather, is
  not.** The exclusion was read as covering the four named principals only.
- The still-open item from earlier runs is unchanged: `houseMiser` portrait ids
  are not yet in the `boneLineIds` arrays in `visualDynastyMap` and
  `view_dynasty`.
