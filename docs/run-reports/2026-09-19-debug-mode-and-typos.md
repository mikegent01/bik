# Run report — debug mode, and the 28 typo references

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`

---

## 1. Debug mode

A switch in **Settings → 🛠️ Developer**. When on:

* **every skin unlocks** — the point is to see the palettes, not to play faster
* **pulls are free**
* **the daily rota is paused** — reads still show in today's list but do not
  advance the streak or mint keys, so a long working session cannot inflate a
  streak nobody earned
* the desk band carries a **DEBUG** marker and the settings card turns amber

That last part is deliberate. A silent debug mode is how somebody files a bug
against a feature that was switched off.

The same controls stay on `waluipediaDesk` (`unlockAll`, `keys`, `equip`,
`skins`, `state`, `reset`) for console use.

**A bug my own test caught.** With free pulls enabled, a duplicate still
refunded its key — so "paused" debug mode was *minting currency*, and keys
climbed 1 → 6 during the check. The refund is now conditional on a key actually
having been spent.

Unlocks persist after debug is switched off. That is intentional: you have seen
the skins, and taking them back would be theatre.

## 2. The 28 typos

Fixed, via `tools/fix-dangling-refs.py` — **28 ids, 35 references**. Examples:
`the_scorncrow` → `scorncrow`, `Markop` → `markop`, `peach_s_castle` →
`peachs_castle`, `ruinsof_shadow_pass` → `ruins_of_shadow_pass`.

**Two needed a judgement call.** `the_onyx_hand` and `the_mages_guild` both
matched a *collection* whose display name is "The Onyx Hand" / "The Mages'
Guild" — but one sits in a `relatedArticles` list beside characters, and the
other sits in `disaster_inc.enemies` next to `onyx_hand`. Field context beats
name similarity, so both were repointed to the **faction**, not the collection.

**Two failed attempts before the right one**, both caught by reading the diff:

1. Replacing `"Markop"` globally also rewrote `"name": "Markop"` — **24 display
   names lowercased**. Reverted.
2. Replacing inside a `participants: [...]` regex slice did the same, because
   those arrays hold objects with their own `name` fields. Reverted.

The working version parses the JSON and rewrites only values that are an id — a
bare string in a reference array, or the `id` key of an entry in one. Final diff:
**35 insertions, 35 deletions**, zero collateral.

Registered in `check-all.py` as **dangling refs** so new typos are caught.

## 3. Verification

* `test-appearance-chronology.mjs` **129 passed, 0 failed** — nine new debug
  assertions plus one inverted: the archive must now hold **no** reference that
  merely misspells a record that exists.
* `check-all.py` **59/61** — only the two known jsdom environment failures.

## 4. What is left

* The Wanted Pages board drops from 594 to ~566 genuine gaps now the typos are
  gone. Those 566 are real writing work.
