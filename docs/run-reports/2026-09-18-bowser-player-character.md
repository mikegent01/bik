# Run report — Bowser as a player character

**Filed:** run dated 2026-09-18
**Branch:** `arena/01a0b2a2-bik`
**Purpose:** take Bowser into the party roster as a player character, through the
documented Players.json intake pipeline.

---

## 1. What was asked

> "the bowser character sheet make it a player character."

## 2. The thing that changed the answer

The obvious reading was: Bowser exists in
`Reputation-Matrix2/tools/item sheet examples/` as a `type: "npc"` CR-15
statblock, so convert it — mint a class, recompute HP, drop the Legendary
mechanics, exactly as `tools/build-aurelian-pc.py` does. That work was started.

Mid-run, a `git fetch` showed a new commit on the branch that had not been there
before: **`58150d3 Create bowser.json`**, pushed by the repo owner. It adds a
398 KB actor document at the repo root that is **already** `type: "character"`.

That file is not a reconstruction. Its `_stats.exportSource.worldId` is
`dnd-part-2` — the same live Foundry world every actor in `Players.json` was
exported from. It is the sheet being played at the table.

| | NPC statblock | `bowser.json` (live) |
|---|---|---|
| type | `npc` | `character` |
| level / CR | CR 15 | Fighter **8** |
| species | Koopa (dragon-king) | **Tortle** |
| HP | 230 (`20d12 + 100`) | **72** |
| AC | 21 natural | 17 |
| items | 14 | **122** |
| detail | Legendary Actions, Multiattack | 1 exhaustion, 121 gp, Rune Knight runes |

So the derived conversion was **deleted before commit**. Had it shipped it would
have produced a level 12 Barbarian — wrong class, wrong level, wrong species,
2.4× the hit points — a character nobody has ever played. The repo already
settled this exact question for Waluigi, and `actors/README.md` states the
ruling: *trust the game, not the reconstruction.*

This is an **intake**, not a conversion.

## 3. What was done

**`tools/add-bowser-to-players.py`** (new, idempotent, `--check`). Appends the
export to `Players.json` and sets exactly two fields a root-level Foundry export
omits:

* `_id` — read from the sheet's own `_stats.exportSource.uuid`
  (`Actor.kzNSSjAedvhKTfZC`). Never invented, so the link to the live world
  survives.
* `sort` — continues the file's existing sequence.

No stat, item, level or class decision is made anywhere in that script. Byte
style preserved (`indent=2`, literal UTF-8, no EOF newline). Then the normal
pipeline: `split-players.py` → `rebuild-actors.py`.

**Sanitizer bug found and fixed — two subclasses were being silently deleted.**
On the first sanitizer pass Bowser reported *4 import-blocking* faults, two of
them:

```
!! orphan-subclass (2)
     · Rune Knight (subclass) — no class matches 'fighter'; removed
     · Champion (subclass)    — no class matches 'fighter'; removed
```

Both are real and played. Rune Knight carries Cloud Rune, Frost Rune, Fire Rune
and Giant's Might; Champion grants his two Fighting Styles (Dueling, Unarmed
Fighting) via an advancement whose granted items are both present on the sheet.

Root cause: his Fighter class exports with `system.identifier: ""` — Foundry only
populates that field for compendium classes. `rule_orphan_subclass` built its set
of valid identifiers from that field, found nothing to match `"fighter"` against,
and removed both subclasses. This is **not** Bowser-specific: any live export
with a hand-made class hits it. Every class across the 26 shipped actors happens
to have a populated identifier, which is why it had never fired before.

Fix: the rule now falls back to the **slugified class name** when `identifier` is
empty. Bowser's sanitized file went 120 → **122 items**.

**Sheet viewer.** Registered him in `ACTOR_SHEETS` in `index.html`, cross-linked
to his existing `bowser` wiki article.

**Three brittle test assertions replaced.** Adding a twelfth player broke three
hardcoded counts (`len(players) == 11`, `len(fresh) == 10`,
`len(sheet_files) == 13`). Each was replaced with the invariant it was standing in
for — roster non-empty and well-formed, every non-skipped entry split, sheet files
unique and all present on disk — so the next player to join does not break the
suite.

## 4. Decisions and evidence

| Decision | Evidence |
|---|---|
| Intake, not conversion | `exportSource.worldId == dnd-part-2`, identical to all 11 existing Players.json actors. |
| Keep the NPC statblock untouched | He is still the CR-15 antagonist in the fiction. Two documents, two purposes. |
| No `build-bowser-pc.py` | Deleted before commit. A reconstruction would contradict the live sheet. |
| `_id` from the export's own uuid | The alternative is inventing an id and severing the link to the live world. |
| Fix the sanitizer rather than special-case Bowser | The bug deletes played features from any non-compendium class. |
| Portrait left as a placeholder | `player/bowser.png` is not in the asset manifest; same documented treatment as Wario's. Re-export rather than patch JSON. |

## 5. Verification

* `tools/check-all.py` — **55/57**. The two failures (`alliance cache`,
  `map lenses`) are the known environmental `jsdom` `ERR_MODULE_NOT_FOUND`, and
  fail identically on a clean checkout.
* `tools/tests/test-sanitize-foundry-actor.py` — **95 passed, 0 failed**
  (92 before; +3 new: blank class identifier keeps both subclasses, no
  `orphan-subclass` fired, multi-word class name slugifies).
* `tools/tests/test-players-split.py` — **67 passed, 0 failed**.
* `tools/tests/test-session-loot.py` — **38 passed, 0 failed**.
* `tools/rebuild-actors.py --check` — all actor exports clean, sanitizer exit 0.
* Idempotency: `add-bowser-to-players.py` → `split-players.py` →
  `rebuild-actors.py --check` re-run produces "already present, no change" and no
  diff on any other actor.
* Served over `python3 start.py`: both new actor files return HTTP 200 and parse
  as 122-item `character` documents.

## 6. What is left

* **His portrait.** `player/bowser.png` needs adding to the Foundry asset
  manifest (or the sheet re-exported) for the token and portrait to resolve.
* **`bowser.json` at the repo root** is left exactly where the owner put it. It is
  now the source for the intake script. If loose exports should live somewhere
  tidier, that is a separate call and a separate change.
* **The two `jsdom` suites** remain unrunnable in this sandbox.
* Standing gaps unchanged: `dateSort` three schemes; 7 duplicate character ids;
  Iron Legion dossier 40d stale; RNN 25 unaired vs pending-list 2.
