# Run report — the broken desk route, and unbloating the home page

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`

---

## 1. `#/desk` was dead, and it was my bug

`#/desk` rendered *"Article not found"*. The cause:

```js
else if(route==='hub'||route==='desk')view_hub(...)     // line 22323 — existed already
...
else if(route==='desk'||route==='reading-desk')view_desk();  // line 22349 — mine
```

**`desk` was already an alias for the hub view.** The first branch always wins, so
my route could never fire. I added a token that was taken and did not check.

Fixed by renaming mine to **`#/reading-desk`** rather than stealing the existing
alias — the hub keeps `#/desk`, nothing that worked before breaks, and all
internal links were repointed.

**Guarded by a new test.** It parses the `else if` dispatch chain and fails on
any duplicated route token, because a second branch for the same token is dead
code by definition. I verified it works by reintroducing the bug: it failed with
*"desk — a later branch can never fire"*, then passed again once reverted.

The first version of that test was too blunt — it flagged `maps`, `cartography`,
`investigation`, `legion` and `iron-legion`. I checked each: all five are CSS
class toggles and guards *outside* the router, not competing branches. A check
that cries wolf gets ignored, so it was narrowed to the dispatch chain only.

## 2. The home page had six full-width bands

Before any content: deadline countdown, reading desk, release note, colour
showcase, ticker, status band. Each was individually reasonable; together they
pushed the archive below the fold.

* The two that are **live state** — the countdown and today's reading — now sit
  **side by side in one rail** (`.hm-rail`), stacking on narrow screens. Two
  bands become one.
* The **colour showcase moved down** to sit with the other content sections. It
  is browsing material, not status, and it was competing with the hero.
* The release note, ticker and status band keep their places. The release note
  is already dismissible.

Net: **six stacked bands → three**, with nothing removed.

## 3. Your question about click-through

> should the conflict plates link to the fronts, or does that just add clicks?

**They already link straight to the conflict** — `#/conflict/<name>` on every
plate, plus an *All conflicts →* link in the header. Adding a Raventree → fronts
→ conflict hop would add a step without adding information.

So: don't. Your instinct was right, and the behaviour you wanted already exists.

## 4. Verification

* `test-appearance-chronology.mjs` **120 passed, 0 failed** — two new router
  assertions, one of which was proven against the real bug.
* `check-all.py` **59/61** — only the two known jsdom environment failures.
* Page and stylesheet both serve 200.

## 5. What is left

* If the home page still feels heavy, the next candidates are the **ticker** and
  the **status band**, which overlap in purpose. I left both because removing a
  surface is a judgement call rather than a bug fix.
