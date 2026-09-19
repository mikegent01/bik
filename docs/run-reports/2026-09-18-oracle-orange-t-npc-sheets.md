# Run report — The Oracle and Orange T, one NPC sheet each

**Filed:** run dated 2026-09-18
**Branch:** `arena/01a0b2a2-bik`
**Purpose:** build character sheets for The Oracle and Orange T as NPCs — exactly
one file per character.

---

## 1. What was asked

> "The Oriacle orange t or whatever needs a charcaer sheet please only generate 1
> sheet per charcaer we dont need three they can be a npc"

Two things in that: a sheet for the character(s), and a complaint that the
previous intake produced three files.

## 2. The name was ambiguous, so I asked

"Oracle / Orange T" reads as one name but the archive holds **three**
similarly-named characters who are different people:

| id | who | article? |
|---|---|---|
| `the_oracle` | The Oracle (Orantha Cornelius — suspected), custodian of Raventree Manor | yes |
| `orange_t` | Orange T, the orange Toad treating Bones in the collapsing library | **no** |
| `orangus_cornelius` | Orangus Cornelius, the defenestrated vampire lord | yes |

Guessing risked building the wrong character, so I asked. Answer: **both, one
sheet each, NPC.** Orangus Cornelius was not built — he is a separate article.

## 3. The "three sheets" complaint was legitimate

It came from the Bowser intake, which produced three files: `original-…`
(untouched split), the sanitized import-ready file, and `…-NO-SPECIES.json`.
That is by design for *player characters* — the NO-SPECIES variant exists
because Foundry rejects a second species on a PC.

**NPCs do not get that treatment.** `rebuild-actors.py` only generates the
NO-SPECIES variant for `type: "character"`, and these are built rather than
split, so there is no `original-`. Filing them as NPCs gives exactly one file
each, which is what was asked for and is also correct.

## 4. What shipped

`tools/build-sanctum-npcs.py` — one builder, two sheets, deterministic, stdlib
only, `--check`able, registered in `rebuild-actors.py` `GENERATED`.

**Levels come from the XP ledger** (`data/abilityPoints.json`), the documented
authority for level/XP — not invented here.

**The Oracle — CR 8, 127 HP, AC 16, 7 items.** Level 8 / 39,250 XP on the
ledger. INT 20 / WIS 18 / CHA 18 and STR 10: the record is knowledge, timing
and negotiation, never force. Every feature traces to his article's
`notableFeatures` — *Checkpoint Reality* (survived Green T's bullet by
checkpointing, "not healing, not dodging"), *Titan Growth* (Markop, Spider
Grove), *Scheduled Disclosure*, *Custodian of the Vats*, *Ritual Custodian*,
*Identity Unresolved*. Alignment left `unaligned` on purpose: the archive holds
his motives open and a statblock should not resolve in mechanics what the prose
deliberately refuses to settle.

**Orange T — CR 2, 22 HP, AC 13, 7 items.** Level 2 / 320 XP on the ledger.
Deliberately weak: the character works because he sits where powerful people do
not look. *Already There*, *Banishment* (both Dans, on a technicality of
consent, then "oh oops" — Waluigi does not believe the oops), *Field Medicine*,
*Sees What You Cannot*, *Practiced Deflection*.

**The God Toad was kept off Orange T's sheet.** His Star Fragment ascension is a
separate entity with its own XP entry (`godtoad`, level 3) and its own
`artifacts.json` record. Putting divine power on a level 2 sheet would collapse
two eras into one file. The feature *A Future Nobody Has Audited* records the
hook without granting the power.

Both registered in `ACTOR_SHEETS` in `index.html`. Orange T's entry has no wiki
link because he has no `characters.json` article.

## 5. Verification

* `build-sanctum-npcs.py --check` — clean; regenerates byte-identically.
* **Sanitizer: zero findings on both** — no import-blocking faults *and* no
  cosmetic image rewrites. Six icon paths in the first draft did not exist in
  the asset manifest; each was replaced with the real path the sanitizer
  identified, so nothing is silently repointed at import.
* `rebuild-actors.py` — 28 files, all clean. Confirmed **one file per
  character**: `the-oracle.json` and `orange-t.json`, no NO-SPECIES twins, no
  `original-`.
* `check-all.py` **55/57** — the two failures are the known environmental jsdom
  `ERR_MODULE_NOT_FOUND`.
* `test-sanitize-foundry-actor.py` 95/95 · `test-players-split.py` 67/67 ·
  `test-session-loot.py` 38/38.
* Served over `python3 start.py`: both sheets and both portraits return 200.

## 6. What is left

* **Orange T has no `characters.json` article** despite 32 event mentions, an XP
  entry, a wallet, quest hooks and an investigation exhibit. The sheet exists;
  the wiki page does not. Worth filing — say the word.
* **Orangus Cornelius** has no sheet. Not built because it was not asked for.
* Standing gaps unchanged: `dateSort` three schemes; 7 duplicate character ids;
  Iron Legion dossier 40d stale; RNN 25 unaired vs pending-list 2.
