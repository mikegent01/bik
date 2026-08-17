# Battles — the war record of the campaign

Some fights are a paragraph inside a session filing. Some fights are the
reason the session exists. A **battle article** is for the second kind — the
melees big enough, weird enough, or consequential enough to own their own
documentation instead of a summary inside someone else's.

The first filing below was cut from a raw combat ledger with no RP log at
all. That is the point of this folder: the dice record *what happened*; the
article makes it worth reading about.

---

## What earns a battle article

| Condition | File a battle article? |
|---|---|
| 15+ combatants on the field, or an arc-pivotal fight | **Yes** |
| A named duel between two principals (see the battles index) | **Yes** |
| A regular encounter inside a session | No — it lives in the session's event filing |
| A fight whose session event already covers it end to end | No — link the event instead |

**A battle article supplements the event system; it does not replace it.**
If the battle belongs to a filed session, the event comes first (per
[`docs/SESSION_FILING_PROCESS.md`](../docs/SESSION_FILING_PROCESS.md)) and the
battle article links to it by event id. If — like the first filing below —
only the combat ledger exists, the article says so plainly in its header and
the event can be filed later without rewriting anything.

---

## Format of a battle article

File name: `battles/<slug>.md`. Structure, in order:

1. **Header block** — battle name, arc, when (Feyward-relative is allowed and
   its unreliability is part of the record), where (a location id if one is
   registered; otherwise a hedge, never an invented id), and the **result**.
2. **Belligerents table** — every side, every named combatant, numbers from
   the ledger. When the ledger cannot tell you whose side somebody was on,
   say so — that is a finding, not an omission.
3. **The narrative, in phases** — physical detail first, commentary second
   (philosophy #2 of the main README applies to wars too). House style:
   `## Part N:` headers, italic `*WAH!*` asides allowed per the encyclopedia's
   authorial conventions.
4. **Aftermath** — what the field looked like when it ended, what is still
   owed (cleanup, pursuit, reparations), links to the follow-up filing.
5. **Waluigi's assessment** — the opinionated closer. He was probably not
   there. He has definitely read the ledger twice.
6. **Appendix: From the combat record** — the rolls and numbers the prose
   quotes, verbatim from the log. **Numbers in the prose must be traceable
   to this appendix.** Never round, never invent, never extrapolate.

## Rules

- **The ledger is ground truth.** A battle article may dramatize; it may not
  fabricate. If the article says a book hit for 55, the appendix shows the
  `8d10 + 6 = 55` line it came from.
- **Rule zero applies** (`README.md`): table names and GM names never become
  people in the prose. The ledger's bookkeeping entries are not characters.
- **No XP in a battle article.** XP is awarded through the event/ledger
  process only. A battle article filed without an event states
  "no XP recorded here."
- **Unnamed is safe.** Combatants the ledger names only by role
  (*House Guard*, *Goblin Staff*) stay unnamed unless a character filing
  exists to promote them.
- **Art** follows [`docs/IMAGE_GENERATION_GUIDE.md`](../docs/IMAGE_GENERATION_GUIDE.md)
  exactly: prompt sheet from the prose first, one call per slot, saved to
  `Reputation-Matrix2/assets/images/battles/<slug>/<prefix>-<nn>-<subject>.jpg`,
  `Text in image: NONE` unless the story names an inscription.

## Index of battles

| Battle | Arc | Filed | Result |
|---|---|---|---|
| [Woodfellow vs. the Treant](woodfellow-vs-the-treant.md) | The Feyward (the plants took over) | from combat ledger, 17 Aug 2026 | Expedition victory — treant destroyed, mound withdrew; cleanup owed |
| *The Cleanup* (pending) | The Feyward | — | awaiting the follow-up record |
