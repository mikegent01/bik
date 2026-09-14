# Run report — WAHwire: the reopening announcement, coverage pass, and the wire badge

**Date:** 14 Sep 2026
**Branch:** `arena/01a09e47-bik` → `gh-pages` (PR #75)
**Kind:** hand-written. No genkit stage ran. `QUALITY_MARK` untouched; no
`_generated` markers added.

## Purpose

Three things the previous pass left open:

1. The wire reopened and never said so. There was no in-world announcement —
   the feed simply had more posts in it one morning.
2. Coverage was 20/120 events. A hundred filings owed a post.
3. The events list gave the reader no way to know a filing had wire coverage
   until they opened it, which meant most of it went unread.

## What changed

### 1. Product — the events list now shows wire coverage

`index.html`

- `attachmentIndex()` gained a `wire` join: it walks `WAHWIRE.posts[].links[]`,
  resolves both the `{id,type}` and bare-string link shapes, and counts one per
  linked **event**. Wrapped in try/catch like the other five joins.
- `ATTACH_META.wire` (`📡 On the wire`, `.att-wire`) and `ATTACH_ORDER` gained
  the key. Without both the join is inert — the count exists and nothing
  renders.
- `attachmentTags()` makes the wire tag the one **clickable** attachment: it
  routes to `#/wahwire/<recordId>`, the feed already filtered to that filing,
  with `event.stopPropagation()` so it does not also open the article. The
  other five tags remain labels, because there is nowhere for them to go that
  the card click does not already go.
- `boot()` kicks off a **non-awaited** `loadWahwire()` after the first render,
  nulls `ATTACH_INDEX`, and repaints only when the current hash is a view that
  shows badges. `posts.json` is 65 KB against a 4 MB `events.json`, so this is
  cheap; it is out of band because `DATA_FILES` assumes a flat
  `data/{key}.json` and the wire store is a directory.
- Before the wire lands the badge is **absent rather than wrong** — verified,
  not assumed.
- Sidebar nav count fell back to a hardcoded `23` if the wire had not loaded.
  Now `null`, because a stale number is worse than no number.

`Reputation-Matrix2/app/styles/waluipedia.css`

- `.att-wire` + `:hover`, violet, `cursor:pointer` — the hover state is the
  affordance that tells the reader this one tag is a link.

### 2. Content — the reopening (3 posts)

- `ww_reopen_announcement` — a six-part house thread stating what the wire is
  (the public side of the archive), what it is not (the record), and the one
  rule: **link the record, or it is a rumour**.
- `ww_reopen_waluigi_editorial` — the archivist on why a third account matters,
  and on filing his own corrections.
- `ww_reopen_poll` — "what did you actually miss", 25,055 votes.

### 3. Content — coverage pass (19 posts)

Chosen for reader traffic, not for satisfying the audit:

| Cluster | Posts |
|---|---|
| Iron Mandate / Order 120 | the 28-8-3 division as a `ledger`; Bones on the order that ran out of time; Lord Crimson on the Sovereignty Act as the machinery the Mandate later drove; the fractured-heart line; the Docket's five names |
| Mount Ebott survey | Mihawk on Gaster and the Protocols manual; Sans on the oath sworn and the logging machine shipped |
| Harvestide cottage | Green T shot through a window to prove he was himself; Remi and the cardboard box; Salam on Eager's friendly fire as arithmetic |
| Other filings | Warp Pipe Junction ("the rat was the warning and we went anyway"); the embassy ambush; the 62-year-old Snowflake Village cold case, plus the frost-stiffened report as an `exhibit` |
| Wire talking to itself | Speaker L quoting Bones back at him; Wario advertising nine hours in; Toad Lee on posts that have no outcome yet; a worst-night poll; a day-one `ledger` |

Format mix used deliberately, not decoratively: the Diet division is a table,
so it is a `ledger`; the correction to "they were faster" is a `quote` so both
halves stay on screen; the frost report is an `exhibit` because the point is
the receipt stamp, not the prose.

### 4. Data hygiene

- **7 profiles filed** — `dan`, `mona`, `remi_akamatsu_full_backstory`,
  `scribe_dewdrop`, `speaker_l`, `dr_toad`, `liam`. Five had been posting into
  a blank sidebar since before the wire went dark; `wwAuthor()` falls back to
  the character record so it never crashed, it just looked unfinished. Marked
  `status: "filed"`, no `_generated` block.
- **`correction` reaction tone added** to `reactions.json`. A pre-existing bug
  from the previous pass: the two correction posts referenced a tone that did
  not exist, so `wwReaction()` silently fell through to the grey `💬` default.
  The audit's `illegal reaction tones` line now reads `none`.

### 5. Tooling

`tools/wahwire-coverage.py` — idempotent, `--check` mode, aborts before writing
if any link, exhibit or quote target fails to resolve. Loads the engagement
model and validator **from `wahwire-reopening.py` by path** rather than
duplicating them, so like counts stay comparable across both passes.

## Verification

| Check | Result |
|---|---|
| `python3 tools/wahwire-coverage.py --check` | validates, writes nothing |
| `node --check`, all 3 inline `<script>` blocks | OK (largest 1,749,419 chars) |
| `/tmp/ww2.cjs` — all 76 posts through the real `wwPostCard` | **76 rendered, 0 problems** |
| `/tmp/badge.cjs` — `attachmentTags` through the real join | pre-wire `📡` absent ✔; post-wire 33/120 events ✔; count, route and `stopPropagation` all present ✔ |
| `tools/audit-wahwire.py` | dangling links **none**; illegal tones **none**; authors without a profile **0** |
| `tools/check-all.py` | `alliance cache`, `map lenses` — **both fail identically before these edits** (pre-existing) |

## Numbers

|  | before | after |
|---|---|---|
| Posts | 54 | **76** |
| Events covered | 20/120 (17%) | **33/120 (27.5%)** |
| Total filings covered | 24/247 | **37/247 (15.0%)** |
| Distinct voices | 33 | **35** |
| Profiles | 31 | **38** |
| Waluigi's share | 31.5% | **26.3%** |
| Authors with no profile | 5 | **0** |
| Events showing a wire badge | 0 | **33** |

Type mix: `text 53 · exhibit 5 · quote 4 · poll 4 · ledger 4 · thread 3 ·
correction 2 · image 1`.

## Open

1. **87 events, 65 battles, 51 majorBattles, 7 trials still owe a post.**
   Coverage should keep moving in reviewed batches, not one backfill.
2. `tools/genkit/systems/wahwire.py` still writes `text` only. The 25 formatted
   posts across the two passes are the exemplars it should learn from; teaching
   it the formats is separate work and needs its own `QUALITY_MARK` bump.
3. Only 2 of 76 posts are vetted `wahwire-v2`.
4. 3 profiles never post (`general_marcus_ironhand`, `toadette`, `toadsworth`)
   — `toadette`/`toadsworth` are probably duplicates of the canonical
   `captain_toadette`/`chancellor_toadsworth` and should be merged or removed.
5. Five voices have no character page and so cannot link back:
   `alpha_bloodmaw`, `colonel_vera_steelstorm`, `generic_toad`,
   `lord_crimson`, `wah_media_collective`.
6. `tools/browser-tests/wahwire-voices.test.cjs` still points at the dead
   `app/pages/wahwire/` path.
7. Battles and majorBattles get no badge — the join is events-only. Worth
   extending once those lists have coverage worth advertising.
