# Run report — 2026-08-31 · Scorncrow Skirmish elapsed time + generator/repair pass

## Purpose

Determine how much time the Scorncrow Skirmish spanned and confirm the archive
still sits in 1040 BF, then run the deterministic repairs behind the pending
generator systems that do not require LM Studio. The LLM-backed generators
(events, battles, locations, shop stock, training-wing deficits, crafting,
faction dossiers, WAHwire posts, Mages Guild Codex/forms, and Bros Attacks)
could not be run in this environment because no local LM Studio endpoint is
available (`http://127.0.0.1:1234` is not serving).

## Time finding

**The Scorncrow Skirmish is a single storm-night engagement. It is still 1040
BF; no year rollover happened.**

* The event/battle records already date it **30 Harvestide, 1040 BF**, and the
  transcript places the engagement inside the same night as the threshold
  storm and Wario's shop session (`docs/legacy/reputation-matrix2/shadeward.txt`,
  end of the file).
* There is no table-side timestamp for the engagement itself. The only
  clock-adjacent evidence is the prior event chain (`28 Harvestide — night of`,
  `30 Harvestide, 1040 BF`, `Aethel 1–5, 1040 BF`), which keeps the skirmish on
  one night and never crosses a month boundary.
* The Material clock is `Aethel 5, 1040 BF`; the Shadowfell filing is
  `30 Harvestide, 1040 BF`. The gap is a few calendar days and no year change.
  The Shadowfell drift is canon and predates this engagement.
* Estimated in-world duration: **roughly 1–2 hours** from the Toads' march to
  the Scorncrow's smoke-and-feather vanish (Markop rallying a plan, the march,
  the swing/decline, the vanish). This is inferred, not stated in source.

## Files created or edited

**CREATED**
* `docs/run-reports/2026-08-31-scorncrow-time-and-generator-repairs.md` — this
  report.

**EDITED (data)**
* `Reputation-Matrix2/data/events.json` — added `timeWindow` to
  `the_scorncrow_skirmish` and
  `green_t_at_the_door_and_the_scorncrow_underfoot` (same-night, 1–2 hours,
  still 1040 BF).
* `Reputation-Matrix2/data/battles.json` — added `timeWindow` to
  `the_scorncrow_skirmish_battle` and `green_t_and_archie_vs_the_scorncrow` and
  appended the same estimate to each `engagement.ledgerWindow`.
* `Reputation-Matrix2/data/injuries.json` — sorted the 169 temporary injury
  entries by `d100` and renumbered them consecutively `1..169` so
  `generate-injury-table.py --check` passes (prior state had out-of-order/
  duplicate-gapped row numbers from the overnight generator).
* `Reputation-Matrix2/data/locations.json` — removed the event-shaped
  `overgrown_manor_campaign` row from the location catalog (it is already filed
  as an event in `events.json`); added `notableFeatures` to the four
  `needsReview` cards (`the_ruins_mount_ebott`, `hotland_portals`,
  `the_core_underground`, `snowdin_police_station`) so
  `generate_locations.py --check` passes.
* `Reputation-Matrix2/data/abilityShop.json` — `fix_ability_types.py`: backfilled
  `accent` on 422 abilities (no type-label changes; no new type ids needed).
* `Reputation-Matrix2/data/wahwire/posts.json` — WAHwire history repair:
  `space_wahwire_authors.py` re-slotted same-date posts (cooldown breaches
  `4 → 0` after rebalance), then `rebalance_wahwire_authors.py` reassigned two
  Waluigi-authored posts to named participants of their linked records
  (`wahwire_battalion_of_six → hjumpik`,
  `wahwire_charred_note_at_door → mario`), without editing prose or likes.

## Events filed

No new event was filed. The existing Scorncrow records were amended only:

```
EVENT  the_scorncrow_skirmish
  date      30 Harvestide, 1040 BF — night of the threshold storm
  time      roughly 1–2 hours, same night (inferred)
  status    ongoing — Scorncrow vanished; anti-fey elixir spent; bike stalled
```

## XP

**No XP awarded this run.** This pass changed existing records only.

## Verification

* `python3 tools/generate-injury-table.py --check` — OK: 169 temporary injury
  entries; roll sequence intact.
* `python3 Reputation-Matrix2/tools/generate_locations.py --check` — 42
  records; 0 validation errors.
* `python3 tools/check-all.py` — **All requested checks passed** (local paths,
  injury table, duplicate records, references, exhibits, investigations, roll
  registry, battles, background blurbs, home feed contract, RNN broadcast
  data, Bros Attack sync, Bros discovery test).
* `python3 Reputation-Matrix2/tools/space_wahwire_authors.py` — 11 posts,
  cooldown breaches 4 → 0.
* `python3 Reputation-Matrix2/tools/rebalance_wahwire_authors.py` — 2
  reassignments; final `waluigi` share still 27.3% (over the 18% cap); see open
  items.
* `python3 Reputation-Matrix2/tools/generate_bros_items.py --verify` — OK.
* `python3 Reputation-Matrix2/tools/prune_bros_attacks.py --check` — 6 kept;
  `repair_bros_attacks.py --check` — already clean; `sync_bros_attacks.py --check`
  — up to date.
* `python3 tools/gen-mages-guild-code.py --check-emoji` — 0 flagged pages.
* `python3 tools/gen-mages-forms.py --list --dry-run` — 6 forms, all fields
  present.
* `python3 Reputation-Matrix2/tools/validate_shop_data.py` — 7,722 items checked;
  **1,890 invalid** (all `missing category`); 0 duplicate groups. Not green —
  see open items.
* `python3 tools/gen-mages-guild-code.py --validate` — 99 sections with
  unresolved cites, 380 total unresolved; 20 duplicate titles; 20 placeholder
  briefs. Not green — see open items.

## Not done / open

* **LLM generators could not be run** — LM Studio is not serving
  `http://127.0.0.1:1234`. `generate_all.py --inventory` reports 11,842 pending
  records across the enabled systems; `generate_all.py --only ...`,
  `gen-mages-guild-code.py --overnight`, and
  `gen-mages-forms.py --overnight` were **not** executed in this sandbox because
  they would back off with no model.
* **Warizon / shop stock** — 1,890 items lack `category`. These are mostly
  legacy enriched records; fixing them needs a category pass, not the
  rarity-deficit generator. `validate_shop_data.py` remains non-zero.
* **Mages Guild Codex** — 99 sections unresolved cites, 380 total unresolved,
  20 duplicate titles, 20 placeholder briefs. Needs the Codex generator/LLM
  pass; `--check-emoji` is clean.
* **Mages Guild Forms** — no files changed; all 6 registered forms already
  present, but `--overnight` was not run.
* **Training Wing ability deficits** — `fix_ability_types.py` fixed rendering
  metadata, but the genkit `abilities` system still reports 0 pending after
  this repair; no new deficit records were generated.
* **WAHwire author cap** — after the deterministic reassignment, `waluigi`
  still holds 3/11 (27.3%) against the 18% cap. The script could not move the
  remaining candidate posts without editing prose or inventing relationships.
* **The 1–2 hour estimate is inferred.** No table clock is present in the
  source transcript; treat it as a narrative convenience until the GM confirms.
