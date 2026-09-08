# Players.json intake — Dan's background, Wario for real (2026-09-08)

## What the DM asked

`Players.json` — one file, eleven actors — needed splitting into
Foundry-importable singles, plus an intake-guide README. Two cast problems
inside it: Feyward Dan had no background, and Wario was still an NPC
statblock. A Foundry bridge that auto-updates was a "might be good".

## What shipped

**Split + bridge.** `tools/split-players.py` slices Players.json into ten
untouched `original-fvtt-Actor-<slug>-<_id>.json` files (JSON-equal to the
live entries — the regression corpus stays honest) and feeds the existing
`rebuild-actors.py` pipeline. `--watch` polls Players.json and re-splits +
rebuilds on change; verified live (`changed → re-split → rebuild OK`).
Honest limit, stated in the README: the bridge refreshes files on disk —
nothing can push into a live world, the DM still imports by hand.

**Dan: background restored, not added.** The Dimensional Escapee item was
already on his sheet with full text — only the `details.background` pointer
was free text instead of the item id (`d7b8ef0d38ae40d2`), the exact
phantom-pointer state the sanitizer flags. `tools/fix-players-intake.py`
points it at the item. One line, no invention.

**Wario: NPC → Barbarian 7.** Converted in code (idempotent, re-runnable),
not by hand-edit: type `character`, `actorLink: true`, Human / Criminal /
Barbarian 7 (Berserker), XP 23,000. Kept everything played — all 29 items,
HP 136, flat AC 16, biography, token art. The four new items carry emptied
advancement shells; the DM completes hit dice/ASIs in Foundry after import.
NPC-only keys stripped, PC blocks added, details.race upgraded from the
free text `Human (Mushroom Kingdom)` to a real item.

**Supersede.** The live versions retire the stale singles for Dan, Hjumpik,
Toad Lee and the generated Waluigi-PC (git history keeps them). Aurelian and
Azure have no live export, so they stand. The motorbike stays generated —
verified item-identical to the live entry — with a drift test that fails
loudly if they ever diverge. (The rebuild also caught the motorbike file up
to its builder: token art is now the Foundry-relative `npc/ai/wario-bike.webp`
the README already documented.)

**Judgement calls, both flagged in the README:** Dan and Eager each carry
two species; `--keep-species last` keeps Grung for both (Eager's own details
pointers agree: Grung + Slave, no relink needed). If the Toad variants or
Eager's Disaster Inc. background are the intended ones, flip the flag.

**Sheet viewer:** roster grows 7 → 13 — the whole party plus Salam, Aurelian,
Azure and the bike, each cross-linked to its wiki article.

## Evidence

- `test-players-split.py` 62/62 (coverage, JSON-equality, idempotency, Dan
  pointer, Wario conversion, bike drift, sanitized-file roster)
- `test-session-loot.py` 37/37, `test-sheet-live.mjs` 13/13 (incl. 2 new
  Wario conversion checks), full `check-all.py` green
- Sanitizer second pass clean on all 24 rebuilt files; `--check` verifies
- Four portraits missing from the asset manifest become typed placeholders
  (listed in the README); no other content touched
