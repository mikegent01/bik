# Run report — finishing the discussion merge

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`

Five follow-ups from the screenshot.

---

## 1. Chatter Hub folded into the wire

`#/annotations` and `#/chatter` now redirect to `#/wahwire`. Old links keep
working; they just land on the one feed instead of a rival showing a subset of
the same content. The sidebar entry is gone and the quick-nav entry points at
WAHwire.

**Three surfaces became two:** the passage drawer (anchored to a quote) and the
wire (everything else). That is a real distinction, unlike the one we removed.

## 2. Discussion drawer now shows faces

It was rendering a coloured letter while the wire rendered the real portrait —
so the same speaker looked like two different accounts depending on which
surface you were reading.

The drawer now calls `wwAvatar(wwAuthor(id))`, the exact resolver the wire uses,
which pulls the character's `image` from their record. **One resolver, so the
two can never drift apart.** Initials remain the fallback and the `onerror`
target.

## 3. "Filed with the registry" replaced with real dates

Five comments I wrote last session carried filing notes where an in-world
timestamp belongs. Dated properly: `Harvestide 30, 1045 BF` for the registry
thread, `3 Aethel, 922 BF (Feyward clock)` for the Shepherd's Garden thread.

## 4. The wire's Recent feed was blank — my bug

The feed sorts on `Number(a.order || 999)`. **Every one of the 103 posts I
mirrored last commit had no `order`**, so all of them collapsed to 999 and sank
below the 77 native posts. They were in the store and unreachable in Recent.

The mirror builder now derives an order from the in-world timestamp on each
comment, newest first, starting at 100 so native posts keep 1–77. All 103 are
ordered and mirrored posts now appear in the first page of Recent.

## 5. Native wire posts for the two newest filings

Both recent filings had only mirrored margin comments and no post of their own:

* **The Shepherd's Garden** — Bowser on negotiating three weeks out of one;
  Captain Toadette on the nine caged Goombas ("Later is a word people use when
  they have already decided"); the Oracle in his own register, with Waluigi
  noticing he said *a room I was asked about* rather than *a room I was in*.
* **The Bone-Line Registry** — Sans on signing something that caught fire;
  Times New Roman stating that the index is not altered by objections, with
  Waluigi lying down; Mihawk noting the authorisation specified a duration, a
  monitor and a revocation condition but never a recipient.

Six posts, each with replies, all voiced from existing profiles.

## 6. Two integrity bugs the audit caught

* **Illegal reaction tone.** My mirror used `reaction: "note"`, which is not one
  of the 27 registered tones. Changed to `deadpan` — the correct register for a
  margin remark anyway.
* **"Dangling" links investigated and cleared.** The audit flagged four ids
  (`assassination_conspiracy_collection`, `house_toadstool_dynasty`, and two
  more). All four are real records in `collections.json` and the dynasty system;
  the audit simply does not scan those files. Left alone — the data is correct
  and the audit is advisory.

## 7. Routed notes now say what they are

`wahnotes.json` holds 52 "routed" remarks matched to an article by theme rather
than written about it. They are not duplicates, so the merge kept them — but
they now carry a **standing remark** tag so they stop reading as though the
speaker had commented on this specific filing.

## Verification

* `check-all.py` **59/61** — only the two known jsdom environment failures.
* `test-appearance-chronology.mjs` **92 passed, 0 failed** — nine new
  assertions covering the portrait resolver, the redirect, the sidebar removal,
  mirrored ordering, Recent reachability, placeholder timestamps, and native
  posts on the newest filings.
* `audit-wahwire.py`: illegal tones **none**; store at 186 posts (83 native,
  103 mirrored).
* `merge-discussion-systems.py --check` current; `check-wahnotes.py` and
  `check-annotation-variety.py` pass.

## What is left

* 186 filings still owe a native wire post. The audit lists them.
* `majorBattles` has 0% wire coverage — 57 filings, none posted.
