# Run report — WAHwire becomes a platform, and attaches to articles

**Date:** 14 Sep 2026
**Branch:** `arena/01a09e47-bik`
**Purpose:** the user's remaining two asks — flesh WAHwire out into a real
social platform, integrate it into the site and connect it to articles, with
somewhere people can post. No canon data was written in this run.

---

## 1. Files created or edited

```
CREATED
  Reputation-Matrix2/app/styles/wahwire.css          new, 128 lines
  docs/notes/WAHWIRE_INTEGRATION_DESIGN.md           new — the design argument
  docs/run-reports/2026-09-14-wahwire-platform.md    this file

EDITED
  index.html                                         + 285 lines, pure insertion
    · loadWahwire()                                    lazy fetch of the 3 stores
    · wwAuthor / wwReaction / wwLinkChips              resolvers
    · wwPostCard()                                     the post card
    · view_wahwire()                                   the #/wahwire feed
    · wwSubmitDraft / wwDeleteDraft / wwExportDrafts   the composer
    · wahwireRailSlot / hydrateWahwireRail             the article strip
    · Router._render()                                 + #/wahwire, #/wire
    · renderSidebar()                                  + nav link
    · articleRail()                                    + wire slot below Wah Notes
    · view_article()                                   + hydrate call
    · <head>                                           + wahwire.css

DELETED
  nothing
```

**No data file was touched.** `posts.json`, `profiles.json` and
`reactions.json` are read-only to this code. No generator was run.

---

## 2. The three decisions that shaped it

Recorded in full in `docs/notes/WAHWIRE_INTEGRATION_DESIGN.md`. In short:

**WAHwire is canon, so a reader's post cannot enter the canon store.**
`docs/CROSS_SYSTEM_UPDATES.md#wahwire--every-post-now` makes the wire a filing
obligation written by `tools/genkit`. If the page could write `posts.json`, the
next generator run would either clobber reader posts or treat them as filings
that were never made. So the surface is split by provenance: **the wire**
(canon, generated) and **the desk** (`localStorage`, yours, this browser only).
Drafts sit in the feed, clearly marked, and **export** in `posts.json` shape so
a human with commit rights can file them deliberately. Promotion is a filing
decision, not a UI action.

**WAH NOTES keeps its slot.** It is current, it works, and the root README says
remaster don't rewrite. The wire strip renders *below* it, because they are
different objects — a note is the archivist's private margin remark, the wire
is the public reaction in many voices. They are not merged.

**The reader is a route in `index.html`, not a restored `app/pages/wahwire/`.**
That path is named by four documents, does not exist, and is unrecoverable
(single-commit history). Building it inside `index.html` is what lets a post
link into the article router via `openId()` and `INDEX` without duplicating
them. It is lazily fetched, so it costs nothing until opened.

---

## 3. What shipped

**`#/wahwire` — the feed.** 23 canon posts, 31 profiles, 25 reaction tones.
Post cards with avatar, handle, in-world timestamp, reaction tone chip coloured
from `reactions.json`, like counts, expandable reply threads, record links and
tags. Filter by account, by tone, by record; free-text search across body,
author and tags; sort newest or most-liked.

**The article rail strip.** Any record with wire coverage gets up to 3 linked
posts below Wah Notes, with a *see all N* route into the filtered feed. Records
with no coverage render nothing — the slot removes itself.

**The composer.** Pick an account, pick a tone, write, optionally attach the
record you were reading. Saved to `localStorage`. Renders in the feed with a
dashed border and a `DRAFT — this browser only` badge. Deletable. Exportable.

---

## 4. XP awarded

**No XP awarded this run.** No ledger touched.

---

## 5. Verification

```
node --check on all 3 inline <script> blocks    OK (1.74 MB block parses)
CSS brace balance                               78/78
python3 tools/check-all.py                      fails only alliance cache, map lenses
                                                — identical to the baseline on 141550b
curl wahwire.css / posts.json                   200 / 200
pathPrefix resolves to ./Reputation-Matrix2/    fetch path confirmed correct
```

**Rendered the real functions over real data.** `wwPostCard`, `wwAuthor`,
`wwReaction` and `wwLinkChips` were extracted into a Node `vm` with a real
`INDEX` built from `events`, `battles`, `characters`, `factions` and
`locations`:

- **23 of 23 posts render**; **0 dead link chips** — all 27 `links[]` ids
  resolve to real records
- **8 of 9 authors resolve to a real character record**; `generic_toad` is
  correctly treated as a wire-only account and still renders
- coverage measured: **16 of 120 events (13%)** have wire coverage; 22 records
  total will show a rail strip

A local preview of the feed was rendered and reviewed, then deleted rather than
committed.

---

## 6. What is not done / open

· **Coverage is 13%, and the standing order says every filing posts.** The
  reader now exists to show the results, so a `genkit` run is the obvious next
  step — but generating ~100 posts is a content decision with a quality bar
  (`QUALITY_MARK = "wahwire-v2"`), not a renderer change, and it should be a
  separate PR that can be reviewed post by post.

· **No server, so no shared posting.** The site is static on GitHub Pages.
  Reader posts are per-browser by necessity, not by preference. A real
  multi-user wire needs a backend, which is a much larger decision.

· **Reader likes and replies on canon posts are not implemented.** Like counts
  are canon data the generator also writes; letting a reader increment them
  would corrupt the store's meaning. Reader reactions apply to drafts only.

· **The composer does not validate the attached record id.** A typo produces a
  chip marked as unresolved rather than an error. Acceptable for a local draft;
  worth tightening if export is ever automated.

· **No headless browser in the sandbox**, so verification is function-level and
  markup-level. The feed was previewed as static HTML with the real CSS; the
  live route was confirmed to serve (`200`) but not screenshotted in-app.

· **`tools/browser-tests/wahwire-voices.test.cjs` still points at the dead
  `app/pages/wahwire/` path** and was not updated — it tests a page that never
  came back. Worth repointing at the new route, separately.

· **The assembly page keeps its own bundled copy** of WAHwire posts and its own
  `--wahwire-*` CSS variables. Deliberately not unified: it is a standalone
  surface, and merging the two is a different purpose.
