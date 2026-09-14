# Plan — Fleshing out WAHwire

**Status: PROPOSAL. Nothing in this plan has been implemented.**
Written after a full read of the readmes; the only code shipped alongside it is
the advisory audit `tools/audit-wahwire.py`, which produces every number below.

Reproduce the numbers:

```bash
python3 tools/audit-wahwire.py
python3 tools/audit-wahwire.py --list-uncovered --limit 200
```

---

## The finding that reframes the whole task

**WAHwire has no reader.** The store is write-only.

```
2. RENDERER — can a reader see any of it?
   app/pages/wahwire/wahwire.html exists: False
   read by: NOTHING in the shipped runtime.
```

`data/wahwire/{posts,profiles,reactions}.json` are fetched by no page, no
module, and no route. `index.html` contains the epitaph at line 10178:

> `/* =============== WAH NOTES — margin scribbles on the archive ===============`
> `Wahwire's replacement. Instead of a separate feed nobody feeds, remarks live`
> `ON the records: annotation passage comments + pinned notes + routed notes ... */`

and at line 11042 a loader is described as having been "swept up by mistake"
during "the wahwire prune". WAHwire was **removed from the runtime and replaced
by Wah Notes**, which is live, wired into the article rail, and carries 52
routed remarks, 4 pinned sets and 2 guest counter-filings.

This is not recorded in any readme. Four documents still describe WAHwire as
live and mandatory:

| Document | What it still says |
|---|---|
| `docs/CROSS_SYSTEM_UPDATES.md` | *"The wire is live and it is under-posted. Every event, battle, and major article earns at least one post"* — and gives the post schema. |
| `docs/STORY_FORMAT_GUIDE.md` §9D | *"WAHwire — every filing posts. The wire is live and in-character."* |
| `Reputation-Matrix2/README.md` | Source-of-truth table lists WAHwire → *"rendered feeds and reaction panels · WAHwire pages and side panels"*. |
| `docs/INTAKE_DECISION_GUIDE.md` | Routes *"in-world public/social reaction should be visible as feed posts"* to WAHwire. |

`docs/ARTICLE_QA.md` also asks reviewers to check for a WAHwire post on every
article. The generator (`tools/genkit/systems/wahwire.py`, ~2,000 lines with
four `SystemSpec`s) is fully operational and will keep writing posts into a
file nothing renders. A browser test
(`tools/browser-tests/wahwire-voices.test.cjs`) points at a page that does not
exist.

**So "flesh out WAHwire" is first a decision, not a task.** Writing 229 posts
into an unrendered file would be the single largest piece of wasted work
available in this repository.

---

## The rest of the measurements

### Coverage against its own standing rule

```
1. COVERAGE — the standing rule is one post per filing
   events              16/120  covered ( 13.3%)   104 owed
   battles              2/69   covered (  2.9%)   67 owed
   majorBattles         0/51   covered (  0.0%)   51 owed
   trials               0/7    covered (  0.0%)   7 owed
   TOTAL               18/247  covered (  7.3%)  -> 229 filings owe a post
```

`CROSS_SYSTEM_UPDATES.md` calls the wire "under-posted". It is at 7.3% of its
own mandate.

### The store: 23 posts, 2 of them vetted

```
Store: 23 posts, 2 vetted as wahwire-v2, 31 profiles, 25 reaction tones
Status: {'posted': 17, 'generated': 6}
```

The generator's own two-stage gate — prune every legacy post, *then* author new
ones — has completed for 2 of 23. 21 posts are still stage-0 work by the
system's own definition.

### The voice imbalance the generator was rebuilt to fix is still there

```
   waluigi   12 posts (52.2%)     wario     2 (8.7%)
   dracule_mihawk  2 (8.7%)       generic_toad  2 (8.7%)
   chancellor_toadsworth, remi, markop, hjumpik, mario — 1 each
```

The generator source documents this at length: 13 accounts was itself the
imbalance, Waluigi held 77% of the feed, so the roster was widened to 28
`KNOWN_AUTHORS`. The widening worked (77% → 52%) and then stopped. **18 of 31
profiles have never posted once** — including Archie Miser, Green T, Luigi,
Bones, General Ironhand, Fawful and Princess Peach, all of whom have character
pages and strong opinions.

### Integrity defects

| Defect | Detail |
|---|---|
| Illegal reaction tone | One comment uses `correction`, which is not in `reactions.json`. Either mint it (the file's own note permits the generator to mint tones) or re-tone it. |
| Voices with no character page | `alpha_bloodmaw`, `colonel_vera_steelstorm`, `generic_toad` post but cannot link back to anybody. `generic_toad` is a deliberate everyman and is fine; the other two are named officers who should have pages or be retired. |
| Voice with no profile | `remi_akamatsu_full_backstory` posts but has no profile entry. |
| Thread depth | 12 of 23 posts have zero comments. The `wahwire-discuss` generator stage exists to fix exactly this. |
| Duplicate store | `data/assembly/assembly-data.js` still exports `WAHWIRE_POSTS = []` and `loadEventPosts()` returning `[]`. Two modules import it (`app/core/state.js`, `app/pages/navigation/navigation.js`) and filter on a `characterKey` field that appears nowhere in the file. Dead code referencing an empty second store. |

No link is dangling: four posts link characters, locations and factions
(`jack_melvus_miser`, `order_of_jack`, `skittering_grove`, `vellanet_rise`),
which is broader than the generator's own `link_targets()` allows but perfectly
valid for hand-written posts.

---

## Three ways forward

They are mutually exclusive. **The owner picks one before any content is
written.** Recommendation is Option 2, with reasoning.

### Option 1 — Retire WAHwire; make Wah Notes the documented truth

Accept the decision that was already made in code. Amend the four readmes so
the cross-system trigger points at Wah Notes, tombstone the store per
`docs/LEGACY_FILES.md`, delete or retire the dead `WAHWIRE_POSTS` export and
the browser test pointing at a missing page, and mark the four generator
`SystemSpec`s disabled.

- **For:** honest. Documentation stops lying within one PR. No wasted writing.
- **Against:** throws away a working 2,000-line generator, 23 posts, 31
  profiles and 25 reaction tones. Wah Notes is a margin-scribble system — it
  cannot do threads, likes, follows, or a chronological public feed, so the
  "public reacting in real time" register is genuinely lost.
- **Cost:** small. Mostly documentation.

### Option 2 — Restore the reader, then feed the wire *(recommended)*

Build the missing surface, then let the generator do what it was built to do.

**Phase 1 — the reader (code).** A `#/wahwire` route in `index.html` rendering
from `data/wahwire/posts.json`, plus `wahwire` in `DATA_FILES` so the loader
fetches it. Feed view, per-post threads, reaction glyphs from `reactions.json`,
profile cards from `profiles.json`, and a **per-article side panel** showing
the posts linking that record — which is what makes the wire pay for itself,
because it turns every post into an inbound route to a filing.

The browser test already specifies the contract it must satisfy (a "Loudest
voices" panel, authors the renderer has names for). Either restore
`app/pages/wahwire/wahwire.html` as a standalone page to match that test, or
retarget the test at the new route — but do not leave a test aimed at a file
that does not exist.

**Phase 2 — integrity (data).** Fix the `correction` tone, give Remi a profile,
resolve or retire `alpha_bloodmaw` and `colonel_vera_steelstorm`, and delete
the dead `WAHWIRE_POSTS` export and its two dead importers.

**Phase 3 — the prune gate (generator).** 21 legacy posts are unvetted. The
generator refuses to author while stage-0 work remains, and that gate is
correct — honour it rather than routing around it.

**Phase 4 — coverage (content).** 229 filings owe a post. Do **not** attempt
them in one pass. Suggested order, highest reader value first: the 7 trials
(courtroom drama is the wire's best register), then the ~20 recent events, then
the major battles. Enforce the balance the generator already knows how to
enforce — the 18 silent profiles are the casting list.

- **For:** keeps everything already built; restores a register Wah Notes cannot
  cover; makes the four readmes true again without deleting a system.
- **Against:** real engineering work before any content lands.
- **Cost:** Phase 1 is the bulk. Phases 2–3 are small. Phase 4 is open-ended
  and should be a standing background job, not one PR.

### Option 3 — Merge the wire into Wah Notes

Migrate the 23 posts into `wahnotes.json` as routed remarks and keep one
commentary system.

- **For:** one system instead of two.
- **Against:** lossy in a way the philosophy forbids. Threads, likes, follows,
  reaction tones and chronology have no representation in Wah Notes, so this is
  a rewrite that destroys accumulated context — explicitly rule 3, "remaster,
  don't rewrite". Not recommended.

---

## Whatever is chosen, these ship with it

1. **Amend the four readmes in the same PR.** `CROSS_SYSTEM_UPDATES.md`,
   `STORY_FORMAT_GUIDE.md` §9D, `Reputation-Matrix2/README.md` and
   `INTAKE_DECISION_GUIDE.md` currently describe a live system that is not
   rendered. Leaving that inconsistency is how the next agent writes 229 posts
   into a void.
2. **Record the prune in `docs/LEGACY_FILES.md`.** That file owns "what is dead
   and why it has not been deleted", and this is the largest undocumented
   removal in the repository.
3. **Wire `tools/audit-wahwire.py` into `check-all.py` only if it can pass.**
   It is advisory today by design. Making coverage a hard check at 7.3% would
   fail the suite on day one, which teaches everyone to ignore it.
4. **Update `docs/system-freshness.json`.** If the wire is live again it is a
   living system with a clock and belongs in the stalest-first registry, per
   the standing order in `gemini.md`.

---

## Open questions for the owner

1. **Which option?** Nothing else can start until this is answered.
2. **Was the prune deliberate or accidental?** Line 11042 of `index.html` says a
   loader was "swept up by mistake" during the prune, which implies the prune
   itself was intentional but imprecise. If WAHwire was meant to survive, this
   is a bug report rather than a design decision, and Option 2 is the only
   honest answer.
3. **Standalone page or in-shell route?** The browser test assumes a standalone
   page at `app/pages/wahwire/wahwire.html`; the rest of the archive has moved
   to hash routes in `index.html`. Picking the route means retargeting the test.
4. **Is 100% coverage actually wanted?** 247 filings each earning a post is a
   lot of prose, and a wire where every post is dutiful is worse than a wire
   with 60 good ones. Consider softening the standing rule to "every session
   filing and every trial", and say so in `CROSS_SYSTEM_UPDATES.md`.
