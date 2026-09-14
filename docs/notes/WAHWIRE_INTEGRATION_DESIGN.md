# Design — WAHwire as a platform, and how it attaches to articles

**Status: IMPLEMENTED in part.** This doc is the argument; the feed, the
article rail and the composer shipped alongside it. The parts marked
**deferred** are not built and are not pretended to be.

Written because the user asked for WAHwire to become "a fully fledged social
media platform", to be "integrated into the website", "connected to articles",
with somewhere "people can post or do stuff" — and said explicitly they were
not sure how, and to plan it.

---

## The three questions that actually needed answering

Everything else follows from these.

1. **Is WAHwire canon, or is it commentary?**
2. **If a reader posts, does that post become part of the archive?**
3. **What happens to WAH NOTES**, which replaced WAHwire on article pages and
   is currently the thing that works?

The readmes answer the first one and constrain the other two.

### 1. WAHwire is canon, and that is a hard limit on the posting surface

`docs/CROSS_SYSTEM_UPDATES.md#wahwire--every-post-now` makes WAHwire a
**standing obligation**: every filing posts. The store is written by
`tools/genkit/systems/wahwire.py`, validated against real record ids, and
voiced from `characters.json`. It is not a comment box — it is an in-world
publication with a filing discipline.

That settles the hardest question. **A reader's post cannot silently enter the
canon store.** If it did, the next generator run would either overwrite it or
treat it as a filing obligation that was never met, and `posts.json` would stop
being a record of what the archive published.

So the posting surface is real, but it is **separated by provenance**, not
faked and not merged:

| Layer | Where it lives | Who writes it | Canon? |
|---|---|---|---|
| **The wire** | `data/wahwire/posts.json` | `genkit` + hand-authoring | **Yes** — filing obligation |
| **The desk** | `localStorage` | the reader, in-character | **No** — yours, this browser |

Drafts sit visually alongside canon posts, marked, and can be exported as JSON
for promotion into the store by someone with commit rights. That keeps the
"people can post" requirement honest without letting the archive be edited by
anyone who opens the page. **Promotion is a filing decision, not a UI action.**

### 2. WAH NOTES stays; WAHwire does not take its slot back

`wahnotes.json` is loaded by `DATA_FILES` and rendered into the article rail
today. It works, it is current, and the root README says remaster don't
rewrite. Taking its slot back would be a regression dressed as a feature.

The two are **different objects and now read as such**:

- **WAH NOTES** = the archivist's margin remark. One voice, private, an aside.
- **WAHwire** = the public reaction. Many voices, in-world, quotable, with
  likes and replies.

They coexist. The article rail gets a compact wire strip *below* the notes,
showing only posts that link to that record, capped, with a route into the
full thread. An article with no wire coverage shows nothing rather than an
empty shell.

### 3. `app/pages/wahwire/` is gone and is not coming back

Four documents reference that path. It does not exist, and single-commit
history means it is not recoverable. The assembly page proves the pattern
works — it renders `WAHWIRE_POSTS` from its own bundled copy — but it is a
separate standalone page with its own CSS variables.

**Decision: build the reader inside `index.html`**, as a route, like
`#/wahbabel`. Reasons:

- it needs `INDEX`, `openId()`, `displayName()` and the article router to link
  posts to records — a standalone page would have to duplicate all of it;
- the article rail integration is *required* by the task, and that lives in
  `index.html` regardless;
- `#/wahbabel` is the proven template for a lazily-fetched subsystem: the data
  is not in `DATA_FILES`, so it costs nothing until the route is opened.

---

## What shipped

### A. `#/wahwire` — the feed

A real feed, not a list. Post cards with author avatar, handle, timestamp,
in-world body, reaction tone, like count, expandable replies, and chips linking
to every record the post cites.

- **Filters**: All / by author / by reaction tone / posts about a given record.
- **Search** across body, author and tags.
- **Profiles**: 31 accounts with bio, location, join date and follow edges —
  `followReasons` explains each edge in one line, which is the detail that
  makes the network read as in-world rather than as a graph.
- **Sort**: newest first by `order`, or most-liked.

### B. The article rail strip

On any record with wire coverage: up to 3 linked posts, compact, below WAH
NOTES, with a *see all N* route into the filtered feed.

### C. The composer — "somewhere people can post"

Pick an account, choose a reaction tone, write, optionally attach the record
you are reading. Saved to `localStorage` under a versioned key.

- Drafts render in the feed, visually distinct, tagged **DRAFT — this browser
  only**.
- Never written to `posts.json`; never sent anywhere.
- **Export** emits a `posts.json`-shaped JSON object, ready to paste into the
  store as a filing decision.
- Delete and edit are local.

This satisfies "where people can post or do stuff" without lying about what a
post is.

---

## Deferred, deliberately

Named so they are decisions rather than omissions.

- **Server-side posting.** The site is static, served from GitHub Pages. There
  is no backend, and adding one is a much larger decision than this task.
- **Reader accounts.** The composer reuses the existing
  `getCurrentUserId()` identity where one is set, and otherwise lets you pick
  an in-world account per post. A separate WAHwire account system would
  duplicate the login the site already has.
- **Likes on canon posts.** Like counts are canon data. Letting a reader
  increment them would put fictional engagement numbers into a store the
  generator also writes. Reader reactions apply to reader drafts only.
- **`wahwire-prune` / regeneration.** Out of scope. The reader does not write
  the store, so no generator stage changes.
- **Merging WAH NOTES into WAHwire.** Explicitly rejected above.
- **Backfilling coverage to every filing.** The standing order says every
  filing posts; 23 posts do not cover 120 events. That is a `genkit` run and a
  content decision, not a renderer change — and it should be run once the
  reader exists to show the results, which is now.

---

## Verification

- every `links[]` id in the store resolves against a real record — 27/27;
- the route renders with the store absent (graceful empty state), because the
  fetch is lazy and may fail on `file://`;
- WAH NOTES output is unchanged on every article;
- `tools/check-all.py` unchanged from baseline;
- drafts survive reload, never appear in `posts.json`, and export round-trips.
