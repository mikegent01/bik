# Run report — Wanted Pages as a work queue, and one event for the GM

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`

---

## 1. The page already existed — it just wasn't usable

`#/wanted` was already there and already scanning. The problem was presentation:
**594 undifferentiated slugs in one flat table**, with no way to tell whether a
row wanted an event, a person, or a corrected spelling. That is why it never got
acted on.

Three changes:

**Grouped by what kind of record is missing.** The field a dangling id was found
in tells you what it wants — `keyEvents` wants an event, `participants` wants a
character, `allies` wants a faction. Now surfaced as sections:

| Kind | Count |
|---|---:|
| 📜 Events | 28 |
| ⚔️ Battles | 15 |
| 👤 People | 305 |
| 🏳️ Factions | 9 |
| 🗂️ Unclassified | 209 |

**Typos separated from real work.** 28 of the 594 aren't missing at all — they
resolve to a record that exists under a slightly different id (`the_scorncrow` →
`scorncrow`, `Markop` → `markop`, `peach_s_castle` → `peachs_castle`,
`lady_aurelian_corvinarus` → `lady_aurelian`). Those are five-second data edits,
not writing jobs, and mixing them in was half of why the list felt hopeless.
They now sit in their own "Probably just a typo" card with the record each one
almost certainly meant.

**566 genuinely need writing.** Request counts are heat-coded (≥4 warm, ≥10 hot)
and each row shows which articles are waiting.

Also added: a **🚧 Wanted Pages** link in the sidebar, since the page was only
reachable by typing the route or clicking through the link-graph footer.

## 2. Your event

**`snowdin_bone_line_registry` — 28 articles are waiting on it.** It is the most
requested missing record in the entire archive by a factor of two, and it has
nothing to do with the main party.

Brief is in the chat message. Everything needed is already filed: the
`sans_family` record, 28 individual skeleton dossiers, and the Snowdin locations.

## 3. Verification

* `test-appearance-chronology.mjs` **69 passed, 0 failed** — seven new
  assertions covering the classification, the near-miss detector, the grouped
  view, and sidebar reachability. One asserts every near-miss target resolves to
  a real record, so the typo card can never point at a ghost.
* `check-all.py` **59/61** — only the two known jsdom environment failures.
* Page and stylesheet both serve 200.

## 4. What is left

* **209 unclassified.** They're referenced only from `relatedArticles`, which
  doesn't imply a type. Could be narrowed by scanning prose `[[...]]` markers.
* **The 28 typos are a quick win** — one pass through the data would drop the
  wanted count by 5% without writing a word. Not done here because it edits 28
  records across several files and deserves its own commit.
