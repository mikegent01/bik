# Run report — Two-axis reputation rework

**Date:** 3 September 2026
**Branch:** `arena/01a069d5-bik` → PR #66
**Scope:** `index.html` (scoring engine + standings UI), `Reputation-Matrix2/app/styles/waluipedia.css`, `tools/tests/test-reputation-two-axis.mjs`

## Purpose

The reputation matrix was reporting relationships that contradicted its own
prose. The Iron Fists showed **+35 · Warm** toward Archie Miser while their
dossier line read *"Price on his head just doubled. Dead or alive."* House
Corvinarus showed **+30 · Warm** while actively hunting party members through
corridors. This fixes the model, not the symptoms — no static overrides, and no
lore records were edited.

## The problem

Three separate defects compounded:

1. **Notoriety was stored as approval.** With one scalar, "large" and
   "positive" are indistinguishable. `crown_v_miser_4739` records
   `archie_miser:{iron_fists:+15}` and the burning-vigilance dream duel adds
   +30. The writer meant *the bounty went up*. The engine had nowhere to put
   hostile attention, so it landed on the like/dislike axis.
2. **Silent source collision.** `_buildRepEventCache` preferred
   `reputationChanges` and **discarded `effects` entirely** when both were
   present. Audit of the corpus: **226 records with `reputationChanges`, 190
   with both, 109 disagreeing in sign.**
3. **Per-participant spray.** `effects` is a *faction-level* outcome but was
   copied onto every operator returned by `_recordOperators(rec)`. "This trial
   hurt the Iron Fists" became "all seven participants took −15 with the Iron
   Fists."

## What changed

### Two axes instead of one

| Axis | Range | Question it answers |
|---|---|---|
| **Standing** | −100…+100 | Do they like you? |
| **Pressure** | 0…100 | How hard are they leaning on you? |

Pressure is derived from the *magnitude* of shared history (hostile history
weighted double), declared enmity via `relations.enemies`, warrants on the heat
board, and a damped bleed from the personal infamy score. It is never negative
and is never "good". The combination is what carries meaning:
`relationSummary()` renders high-pressure/negative as **"Actively hunting
them"** and high-pressure/positive as **"Deeply invested ally"** — a distinction
the single scalar could not express.

### Hostility ceiling

`calculateOperatorStanding` now applies a final cap: a faction that has declared
you an enemy, holds a warrant, or whose dossier reads as a kill-order cannot
score above −20 regardless of accumulated involvement. The cap is **always
disclosed** — `cappedFrom` is surfaced in the formula line
(`Total −20 = min( −20, … = +33 ) — hostility ceiling`) and as a chip, so the
displayed math never silently differs from the executed math.

### Both data sources now used, with distinct meanings

`_recordDeltaSources(rec)` replaces the either/or branch. `reputationChanges`
keyed by operator stays per-person and authoritative; `effects` (and legacy
faction-keyed `reputationChanges`) becomes a record-level outcome applied to
participants at `EFFECTS_SHARED_WEIGHT = 0.25` and **never** overwriting an
authored personal delta. The 109 sign conflicts stop being coin flips.

### UI

Standing badge and a new pressure badge stack in the faction card header; the
"Why this score →" breakdown gains a pressure chip, a cap chip, and a plain
one-line relationship read.

## Verification

`tools/tests/test-reputation-two-axis.mjs` — **18/18 pass** (jsdom; requires a
static server: `python3 -m http.server 8765` then `node tools/tests/test-reputation-two-axis.mjs`).
Covers the two reported cells, the axis invariants across all 1,024
operator/faction pairs, the delta-source split, and the rendered UI.

Distribution across all 1,024 pairs after the change — the fix is targeted, not
a blanket hostility sweep:

```
standing {Allied:4, Friendly:6, Warm:20, Neutral:883, Cold:103, Hostile:5, Enemy:3}
pressure {None:0, Light:837, Active:96, Heavy:38, Consuming:53}
capped 65 of 1024
```

Reported cells, before → after:

| Pair | Before | After |
|---|---|---|
| Iron Fists → Archie | +35 · Warm | **−20 · Cold**, Pressure 90 Consuming, "Actively hunting them" |
| House Corvinarus → Archie | +30 · Warm | **−20 · Cold** |
| Liberated Toads → Archie | +24 · Warm | +24 · Warm, Pressure 100, "Deeply invested ally" |

No regressions: `test-faith-render.mjs` 31/31, `test-home-feed-render.mjs`
11/11, `tools/check-all.py` unchanged (the `injury table` and `investigations`
failures are pre-existing, confirmed previously via `git stash`).

## Not done

- **Zero data records were edited**, per the agreed scope. The 109 sign
  conflicts are now handled deterministically by precedence rather than
  reconciled by hand; reconciling them is a separate editorial pass.
- The **Heat / Infamy board** is untouched — `INFAMY_PROFILES` remains a
  hand-written table.
- `OPERATOR_BASE_STANDINGS` is still `{}`, so `base` and ally/enemy `propagation`
  (gated on `> 20`) remain 0 for every pair. Pressure's `declared` term now
  covers the hostility case that gap was hiding, but seeding base standings
  would still add signal.
- `houseMiser` portrait ids are still absent from the hardcoded `boneLineIds`
  arrays in `visualDynastyMap` and `view_dynasty` (carried over, unrelated).
