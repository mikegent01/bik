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

---

## Follow-up: over-correction fix and standings-page signal-to-noise

User review of the shipped page caught two problems.

### 1. The cap over-fired (regression I introduced)

`_operatorFactions` substring-matched faction names out of free-text affiliation
strings. Archie's reads:

> `"Disaster Inc. / Mages' Guild (coerced employee, effective immediately, no severance package)"`

That is captivity, not allegiance — but it registered him as a Mages' Guild
member, so **every faction listing `mages_guild` as an enemy was flagged hostile
and capped to −20**. Factions that plainly like him were inverted: the Ratchet
Raiders (*"He's a job creator!"*) went +55 → −20, The Unchained
(*"That makes him one of us"*) +40 → −20, Servants of the Cosmic Jester +45 → −20.
65 of 1,024 pairs were capped. My earlier distribution check missed it because I
only spot-checked the two cells originally reported.

Fixes:
- Bloc rivalry is now `rivalry`, **not** `hostile`. It contributes +8 pressure and
  can never cap standing. Only *direct, personal* evidence caps: a warrant naming
  the operator, or a dossier that is a standing order.
- The kill-order regex dropped bare `bounty` (the Freelancer Underworld dossier
  just observes that bounty hunters are after him — gossip, not intent).
- `reasons` are sorted so the cap-causing reason is `reasons[0]`; the UI was
  citing a rivalry note beside a cap actually caused by a kill-order.

Capped pairs: **65 → 8**, all genuine warrants/kill-orders. Friendly factions restored.

### 2. The page was ~90% noise

For Archie the view rendered ~100 faction cards, ~60 of them identical
`+0 / "No dated event modifiers on file"` — each padded with the faction's full
article body (the Purple Legion's `description` is **12,595 characters**).

- Factions with no standing, no history, no pressure and no dossier line now
  collapse into one expandable roster ("87 factions have no recorded
  relationship"). 41 cards render instead of 128.
- Card descriptions truncate to 240 chars with a "read the dossier →" link.
  `faction.description` is an article body, not a summary.
- Fixed the same bug in the "Why this score →" modal, which was dumping whole
  essays into a `<blockquote>` labelled **"Motto / Doctrine"**.
- Removed the duplicated formula line (it printed in both chips and footer).
- Pressure heat-bleed now applies only where contact exists, so unrelated
  factions read `0 · None` instead of a meaningless floor of `12 · Light`.

Rendered page text: **265,659 → 26,924 characters.**

### Known data defect (NOT fixed — out of agreed scope)

**House Corvinarus → Archie remains +25 Warm.** Its two scored records are
`+20` (Belfry Floor / Corvinarus's Codex) and `+15` (*The Bullet That Broke the
Shadowfell* — Green T shooting their lord). This is root cause #1, notoriety
authored as approval, living in the **data**. Pressure correctly reports 70 ·
Heavy, but no honest engine rule can read `+20, +15` as hostility; making it
negative would require inventing a fiction. It needs an editorial re-score of
those records. Locked in as an explicit assertion in the test suite so it cannot
be silently "fixed" by a future rule.

Verification: `test-reputation-two-axis.mjs` **25/25**; faith 31/31; home-feed
11/11; `check-all.py` unchanged (two pre-existing failures).
