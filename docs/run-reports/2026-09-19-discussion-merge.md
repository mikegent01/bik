# Run report — three discussion systems merged onto one store

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`

---

## 1. What the three systems actually were

You were right that it was out of hand. What I found on inspection is worse
than three systems — it was **two systems and a duplicate**:

| Surface | Reads | Verdict |
|---|---|---|
| **"Discussion"** (inline drawer) | `annotations.json` | real — anchored to a specific quote |
| **"FROM THE MARGINS"** (body box) | `annotations.json` + `wahnotes.json` | **duplicate** — replayed the same comments the drawer already showed |
| **WAHwire** (public feed) | `wahwire/posts.json` | real — 77 standalone in-world posts |

The margins box called `wahNotesFor()`, which pulled every annotation comment
for the article. So on the Bone-Line Registry page, Papyrus's `#TNR-02`
complaint rendered **twice** — once in the drawer, once in the margins — in two
different visual languages, which is exactly what your screenshots show.

## 2. What was done

**One store, three views.** `tools/merge-discussion-systems.py` mirrors every
annotated passage into `wahwire/posts.json` as a first-class post carrying a
`quote` anchor and `anchorArticle`. 103 passages / 416 comments migrated; the
lead comment becomes the post, the rest become replies, and likes and
timestamps are preserved.

The three surfaces are now three **filters** of that one store:

* **drawer** → posts anchored to the clicked passage
* **margins** → posts about this article that are **not** passage-anchored
* **the wire** → everything

`wahNotesFor()` no longer reads `annotations.json` at all. It reads the wire and
filters `!p.quote`, which is the line that removes the duplication.

**Nothing was deleted.** `annotations.json` remains the authored source and is
still validated by `check-annotation-variety.py`. The migration is idempotent —
re-running updates the mirror in place rather than duplicating, and
`--check` fails if the mirror drifts. Registered in `check-all.py` as
**discussion mirror**.

**Relabelled so they read as different things:** the rail box is now
*"📡 On the wire"* rather than *"Wah Notes"*, the hub strip says plainly that
passage-level comments live in the article's own Discussion, and the drawer foot
links onward to the full wire instead of dead-ending.

## 3. Verified against real data

* **Overlap across all 95 annotated articles: zero.** Measured by comparing
  every margins entry's text against that article's drawer texts.
* On the article from your screenshots: 7 passage comments in the drawer, 0 in
  the margins, 0 overlap.
* Wire coverage went **14.8% → 27.3%** (38 → 70 filings) purely as a side
  effect. Those posts always existed; they were filed in the wrong store.

## 4. Verification

* `check-all.py` **59/61** — only the two known jsdom environment failures.
* `test-appearance-chronology.mjs` **83 passed, 0 failed**, including seven new
  assertions: every passage mirrors, every mirror carries an anchor, ids are
  unique, **no passage comment is replayed in the margins**, and the renderer
  sources the wire rather than annotations.
* `check-wahnotes.py` passes (52 routed, 191/192 records covered).
* `check-annotation-variety.py` passes at 103 passages.
* All three data files serve 200.

## 5. What is left

* **`wahnotes.json` routing still exists** — 52 "routed" guesses that place a
  character's generic remark on a thematically related article. They are not
  duplicates of anything, so they survive the merge, but they are the weakest
  content on the page and could be retired separately.
* **The Chatter Hub route (`#/annotations`) still exists** and now shows a
  subset of what the wire shows. It could be folded into `#/wahwire` as a
  filter, which would take the count from three surfaces to two.
* 186 filings still owe a wire post.
