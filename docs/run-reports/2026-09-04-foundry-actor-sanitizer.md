# Run report — Foundry VTT actor-export sanitizer

**Date:** 2026-09-04
**Branch:** `arena/01a069d5-bik` · **Commit:** `24f7551` · **PR:** #66
**Model:** Arena.ai Agent Mode

## Purpose

Three reported Foundry/Plutonium failures, to be fixed by a file that uses
**no AI** — deterministic logic only.

1. `Only a single Species can be added to a Player Character.`
2. `Plutonium | Task "Dwarf (PHB'24)" failed! Error: Number of returned items
   did not match number of input items!` (`UtilDocuments.pCreateEmbeddedDocuments`,
   via `ImporterRace._pImportEntry_pFillItems`)
3. Console 404s: `1709761629520545.jpg`, `image(2).webp`, `321.webp`, `mana-icon.webp`

## Note on the input

The attached `fvtt-Actor-hjumpik-deldkur-6eBoDhCt0i3e3qZ4.json` never arrived in
the workspace. The same actor was already committed at
`Reputation-Matrix2/tools/item sheet examples/hjumpik.json`, and the 18 other
exports beside it became the test corpus. If the attachment differs from the
committed copy, re-run the tool against it — nothing here is hard-coded to one file.

## Diagnosis

Reading `hjumpik.json` rather than guessing:

- **Failure 1** is real and structural — the sheet already carries a `race` item
  (`Mountain Dwarf`), so a second species is refused by the system, not by Plutonium.
- **Failure 2** is *not* a network or compendium problem. Ten `ItemGrant`
  advancement entries on the Fighter class list ids in `value.added` that do not
  exist in `items[]`. Plutonium asks the server for N documents, N−10 come back,
  and the count assertion throws. `archie.json` has 3 more of the same.
- **Failure 3** reproduces across the corpus: 22 of 319 asset references do not
  resolve against the 16,029-path manifest. Most are near-misses from Foundry
  renames — `intimidation-impersonate.webp` vs the real `intimidation-impressing.webp`.

Two further faults surfaced that would have broken the sheet later: 5 effect
`origin`s pointing at a foreign actor, and 11 items filed into two container ids
that do not exist.

## What changed

- `tools/sanitize-foundry-actor.py` (new, 661 lines, stdlib only, offline)
- `tools/tests/test-sanitize-foundry-actor.py` (new, 61 assertions)
- `tools/check-all.py` — registered as **Foundry sanitizer**
- `docs/AUDIT_SCRIPTS.md` — usage, rule table, and stated limits

Ten import-blocking rules and four cosmetic ones. Broken images are repaired to
the nearest real file in the same folder (deterministic `difflib`) before falling
back to a typed `icons/svg/*` placeholder, so the sheet keeps the art it meant.

## Verification

- **Unit tests:** 61/61 pass.
- **`check-all.py`:** 14/16 — new check passes; `injury table` and
  `investigations` fail identically on a clean tree (pre-existing).
- **Repair of `hjumpik.json`:** 101 items in, 101 out; dangling grants 10 → 0;
  orphan container refs 11 → 0; unresolved images 15 → 0; `system` block, item
  names and quantities byte-identical.
- **Idempotent:** a second pass reports nothing and changes nothing.
- **Deterministic:** two runs produce byte-identical output.
- **Non-destructive:** the input document is never mutated in memory; `--in-place`
  writes a `.bak`.

Two findings were corrected during review rather than shipped: the tool was
clearing valid `Compendium.*` effect origins, and it was flattening renamed
icons to a generic placeholder instead of finding the renamed file.

## Limits

Duplicate item *names* are left alone — two torches are legal. The manifest is a
snapshot of one install; a path absent from it but present in the user's Foundry
will be reported as unresolved. `--no-images` skips that class of check entirely.
