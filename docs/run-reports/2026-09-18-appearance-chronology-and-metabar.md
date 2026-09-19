# Run report — First seen / last seen, and the metabar stops spamming

**Filed:** run dated 2026-09-18
**Branch:** `arena/01a0b2a2-bik`
**Purpose:** give characters a first/last appearance, and make the article
header bar carry information instead of repeating everything as pills.

---

## 1. What was asked

> "can we have for charcers a last seen in article and first seen in article
> that would be good also i feel like we can do more with these tags at the top
> besides just spamming the tags"

Two requests, one screenshot of an event header where the pill row had become a
wall of text.

## 2. First seen / last seen

New `appearancePanel()` on character and faction pages: two cards, the earliest
and latest filed record that names them, each linking to the article.

**Where the list comes from.** Two sources unioned: the entity's own
`keyEvents`/`keyBattles`, *and* any event or battle whose `participants[]` names
them. The second half matters — an entity can be in a scene without its own
article having been updated, and 319 distinct participant ids are filed across
events. Coverage: **163 of 177 characters** get a panel.

**Where the order comes from.** The archive has no single sort key (standing gap:
three `dateSort` schemes), so ordering is derived at render time, in priority
order: `timeCode` → `"2 Aethel, 922 BF"` → `"Harvestide 24, 1045 BF"` → bare
`"1040 BF"`. **116 of 121** events yield a key.

Three honesty rules, each driven by something real in the data:

* **Clocks are never mixed.** The Feyward keeps its own year — 922 BF by its own
  count, over a century behind the Material and not catching up. Sorting that
  against a Material 1040 would file this year's Feyward session as ancient
  history. Records are ordered *within* a clock; other clocks are reported
  beside the main run, not merged into it.
* **Undated records are named as undated.** Five events genuinely say
  "Unknown"/"Undetermined". They are listed as unplaceable rather than given a
  fabricated slot.
* **Records dated past the world clock are held out and flagged.** See below.

## 3. A data contradiction the feature exposed

`collapse_of_blackfen_pass` is dated **2374 BF** while its era reads **"The Old
World — Era of Sunlight Aftermath"**. Under the archive's own rule that *BF
counts UP*, 2374 is thirteen centuries in the **future**, not the deep past. The
date and the era disagree.

Left alone it hijacked the "last seen in" of **six characters** — Wario, Markop,
Green T, Remi, Mossy and Vaxillus all ended their story in 2374 BF. Wario's real
last Material appearance is *The Toad God Interview and the Star Shard*.

I did not silently re-date the record: that is a canon decision. The panel holds
future-dated records out of the sequence and surfaces them in an amber note
asking the archive to settle which of the two fields is right.

## 4. The metabar

The header rendered **every** infobox field as a pill of unbounded length. An
event `outcome` runs to **1,935 characters** in the current data, so it became a
paragraph wearing a pill's border while the genuinely scannable facts were
buried mid-row. That is the "spamming" in the screenshot.

Now split by what the value actually is:

* **short scalars** stay pills
* **long prose** drops to a definition row under the bar, where a paragraph is
  allowed to be a paragraph
* **lead fields** (date, era, location, type, result, jurisdiction) get *both* —
  a short scannable lead in the pill and the full text in the row, because their
  front is the useful part: a date reads "2 Aethel, 922 BF" and then explains
  itself for another hundred characters
* **title** is never a pill; it is the headline directly above the bar

Nothing is hidden or truncated away — it moves to where it reads. The screenshot
event now shows `Date 2 Aethel, 922 BF` · `Era Raventree Crisis` ·
`Location The Overgrown Manor` in the bar, with all six full values below.

Extracted as one `splitMetaFields()` used by both the article and trials views,
which had duplicated the old logic.

## 5. A bug found on the way

**`KIV` was missing from `index.html`.** The Kivotos clock was registered in
`tools/check-timecodes.py` and `build-campaign-fronts.py` when that campaign was
filed, but not in the renderer's `TC_CLOCKS` map or its parse regex — so
`TC:1040-09-05T09:00/KIV` failed to parse and the Trinity filing's timecode pill
**silently rendered nothing**. Fixed, and the new test asserts every `timeCode`
in `events.json` parses, so a fourth clock cannot be half-registered again.

## 6. Verification

* New `tools/tests/test-appearance-chronology.mjs` — **38 passed, 0 failed**,
  registered in `check-all.py` as *appearance chronology*. It lifts the real
  functions out of `index.html` rather than copying them, so it cannot drift
  from shipped code. Covers: KIV parsing, every timeCode in the archive, clock
  separation, the 2374 BF flag for each of the six affected characters,
  ascending order, undated handling, and a sweep asserting **no event in the
  archive produces an oversized pill**.
* That sweep caught a real off-by-one during the run: the naive truncation cut
  at exactly the budget and then appended an ellipsis, one character over.
* `check-all.py` **56/58** — the two failures are the known environmental jsdom
  `ERR_MODULE_NOT_FOUND`, unchanged.
* `check-timecodes.py` passes.

## 7. What is left

* **The 2374 BF record needs a canon ruling** — is Blackfen Pass ancient (era is
  right, date is a typo) or genuinely far-future (date is right, era is wrong)?
  The panel flags it until someone decides.
* **Five events have no usable date.** They are reported honestly but cannot be
  sequenced.
* I could not render a browser screenshot — no headless browser in the sandbox —
  so the visual result is verified by test and by HTTP, not by eye. Worth a look.
* Standing gaps unchanged: `dateSort` three schemes; 7 duplicate character ids;
  Iron Legion dossier 40d stale; RNN 25 unaired vs pending-list 2.
