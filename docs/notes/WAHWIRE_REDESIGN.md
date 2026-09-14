# WAHwire — the grand reopening

**Status: SPEC + IMPLEMENTED.** This is the redesign brief and the record of
what shipped against it.

The first pass gave the store a reader. That was necessary and it is not
enough: 23 posts, half of them one-liners, is a soft launch. This is the
reopening — a redesign of *what a post is*, not just how it looks.

---

## What is actually wrong — measured, not felt

Reading all 23 posts end to end, four problems, in order of how much they hurt.

### 1. Every post is the same object

There is no `type` field. Twenty-three identical text cards. A real platform has
shape variety, and shape variety is what makes a feed scannable and re-readable.
Nothing quotes anything. Nothing threads. There are no polls, no exhibits, no
images, no receipts, no running bits. The wire has no *formats*.

**This is the big one.** Everything else is a symptom.

### 2. Eight of the newest posts have zero likes

```
posts with 0 likes: 8 / 23 — and they are the 8 most recent hand-authored ones
```

A feed where the newest content has no engagement reads as abandoned. In-world
this is nonsense too: the Scorncrow correction is the biggest story of the arc
and it has fewer likes than a Toad complaining about rent.

### 3. Waluigi is 52% of the feed

The generator's own comment says it fought this and got it down from 77%. It is
still every other post. Worse, the *funny* posts are almost all his, so the
other voices read as filler.

### 4. Replies are flat and toothless

20 replies across 11 posts, never nested, and no reply ever lands harder than
its parent. On a real wire the reply is often the best part. `generic_toad`'s
*"you can just SAY an invitation out loud and it works?? asking for a friend who
owns a house"* is the funniest line in the store and it is buried as a child
node.

### What is already good, and must survive

- **The voice is right.** Waluigi's *"The library is FINE. The library is
  ANGRY. These are different conditions."* is exactly the register.
- **27/27 links resolve.** The connective tissue is sound.
- **25 reaction tones** with real colours, and 31 profiles with `followReasons`.
- **Evidence discipline** — `evidenceQuote` already exists on some posts.

**So this is a remaster, not a rewrite.** Nothing is deleted. Every existing
post stays canon; it gains a type and, where it is dead, a plausible like count.

---

## The redesign: posts become formats

A `type` field, defaulting to `text` so every existing post is valid unchanged.

| Type | What it is | Why it earns its place |
|---|---|---|
| `text` | what exists today | the baseline |
| `quote` | a post quoting another post, with commentary | the single biggest driver of feed life — makes the wire *converse* |
| `exhibit` | a post carrying a prop from `props.json` | 148 in-world documents exist and the wire never shows one |
| `image` | a post carrying a record's image with a caption | 120/120 events have art; the wire is all text |
| `poll` | an in-world poll with vote shares | funny, opinionated, and readable at a glance |
| `thread` | numbered multi-part post from one author | lets a long argument stay one object |
| `correction` | a formal amendment to an earlier post | Waluigi already does this; it deserves a shape |
| `ledger` | a short stat block — a tally, a muster, a receipt | the archive's house style, as a post |

**Why these eight and not more:** each maps onto something the archive already
has data for. None of them requires inventing a new data source, and none is
decoration — `quote` and `correction` create genuine post-to-post structure,
`exhibit` and `image` surface assets that already exist and are currently
invisible on the wire.

### Engagement gets a model instead of a guess

Likes are canon data, so they cannot be invented arbitrarily. But zero is also a
claim, and it is the wrong one. The rule adopted:

> **A post's like count is a function of who posted it, how much of the archive
> cares about the subject, and how hard the line lands.** Never zero for a
> filed post — silence is itself a number, and the number is not nought.

Applied as a documented, reproducible heuristic in the backfill script rather
than by hand, so it can be re-run and argued with.

### Replies become first-class

Nested one level, with their own like counts, and a `topReply` flag that pulls
the best one up next to the post where people will actually read it.

---

## What shipped

1. **`tools/wahwire-reopening.py`** — the content pass. Types the existing 23,
   fixes the dead like counts, and writes **31 new posts** across the new
   formats, all hand-authored, all linked to real records.
2. **Renderer support** for all eight types in `index.html`.
3. **Feed furniture**: trending tags, a "who to follow" rail from
   `profiles.json` follow edges, format filters.

## What is deliberately NOT done

- **No `genkit` run.** The generator writes `text` posts only and has no concept
  of the new types. Teaching it the formats is a separate, larger piece of work
  and it should learn from hand-written exemplars — which is what this pass
  produces. `QUALITY_MARK` is untouched.
- **No backfill to all 120 events.** Coverage goes from 13% to ~35%. Filling the
  rest is a content decision that should be reviewable in batches, not dumped in
  one PR.
- **No reader-facing likes on canon posts.** Unchanged from the previous
  decision: canon engagement is canon data.
