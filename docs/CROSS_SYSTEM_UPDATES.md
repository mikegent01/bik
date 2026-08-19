# Cross-System Updates — what a filing triggers besides itself

A filing is never just its article. Events, battles, and major articles
ripple into half a dozen standing systems, and the failure mode of every
one of them is the same: **it works, so nobody updates it.** This page is
the trigger table. Run it after every filing, alongside `ARTICLE_QA.md`.

---

## The trigger table

| If the filing involves… | You must update | Where it lives |
|---|---|---|
| **Anyone in the Pond Patrol docket** | the Pond Patrol / Liberated Toads system page — docket rows, actions, cohorts | `app/pages/liberated-toads-system/` (its JS holds the docket data) |
| **A succession-relevant death, marriage, birth, or claim** | the Dynasty system — houses, members, succession order, marriages | `DYNASTY_SYSTEM` object in `index.html` (search `DYNASTY_SYSTEM=`) |
| **A major battle, or territory changing hands** | the map: POI entries and unit positions | `Reputation-Matrix2/data/maps/map-data.js` (POIs) + `map-battle-data-*.js` (unit x/y per theater) |
| **A new cooperative technique performed at the table** | a Bros attack | `Reputation-Matrix2/data/brosAttacks.json` + `Foundry/bros_attacks/bros-attacks.js` (`BROS_DEFINITIONS`) — see that module's README; **the two must match exactly** |
| **Money minted, renamed, debased, exchanged at scale, or discovered** | the currency system | `Reputation-Matrix2/data/currencies.json` + the exchange page (`currency.html`); a currency's `value`/`status` changes with events, not vibes |
| **Any new filing at all** | a **WAHwire post** — the wire is live and every post is in-voice | `Reputation-Matrix2/data/wahwire/posts.json` (shape below) |
| **A song, anthem, shanty, or hymn performed or quoted** | the songs archive | `Reputation-Matrix2/data/songs-data.js` — full lyrics, `sourceId` links back to the filing |
| **A book, codex, pamphlet, or manuscript that matters** | the library | `Reputation-Matrix2/data/books.json` (+ `books-data.js`) — the book links to its article and its owner |

The rule under all of them: **if the trigger fires, the update ships with
the filing, in the same PR.** A trigger acknowledged and deferred goes in
the run report's NOT DONE block with a reason — silently skipped is the
only failure.

---

## System notes

### WAHwire — every post now
The wire (`app/pages/wahwire/`) is the campaign's live social feed; it has
an audience and it is **under-posted**. Every event, battle, and major
article earns at least one post, in an in-world voice, linking the filing:

```json
{
  "id": "wahwire_<filing_or_topic>",
  "author": "waluigi",              // a character id — poster must exist
  "order": <next integer>,          // posts sort by this
  "timestamp": "1 Aethel, 922 BF (Feyward clock)",
  "content": "in-voice, short, one link, no spoilers the filing lacks",
  "likes": <reasonable>,
  "links": ["<article id>"],
  "tags": ["battles", "feyward"],
  "reaction": "smug",               // from reactions.json tones
  "comments": [...], "status": "posted"
}
```
Match the shape of the existing posts exactly; check
`data/wahwire/reactions.json` for legal reaction tones. **Voice rule:** the
post is not a summary — it is a character reacting (Waluigi smug, Wario
transactional, the desk cold).

### Pond Patrol / Liberated Toads
The docket page has actions, cohorts, directives and roster states; filings that
involve its personnel must update the relevant docket rows in the page's data.
This trigger applies when **any Toad who is part of the Pond Patrol / Liberated
Toads roster is mentioned**, even if the article is not mainly about the docket.

Checklist:

```text
□ Is the Toad named in the Liberated Toads / Pond Patrol roster?
□ Did their status, cohort, assignment, injury, custody, trust, or standing change?
□ Did they witness something that should become docket evidence?
□ Did the event create a new action item, directive, hearing, or accountability note?
```

If yes, update the relevant row/section in the Liberated Toads system. Under-
utilized is a state, not a fate: every touching filing adds a row until the
docket is current again. If no update is needed, say why in the run report.

### Dynasties
`DYNASTY_SYSTEM` is embedded in `index.html` — houses, members (with
`secrets`/`achievements`), `successionOrder`, `marriages`. Succession
events at the table change `successionOrder.status`/`strength` and member
`status` (ACTIVE / deceased / MISSING). Keep `lastUpdate` in `meta` moving
with the campaign date.

### POIs and territory
`map-data.js` holds POIs (MK_POIS and friends); `map-battle-data-*.js`
holds unit positions per theater. A major battle: update unit x/y to the
battle's outcome **and** add or amend the POI (a razed bridge, a fallen
treant across a lane, a taken checkpoint). Territory changing hands flips
the controlling entry on both the POI and the location's
`controllingFaction` in `locations.json`.

### Bros attacks
A technique performed and named at the table (Chop Bros, Support Fire) gets
an entry — but the JSON and the Foundry `BROS_DEFINITIONS` must stay
identical, and `sourceEvents` must resolve. See
`Foundry/bros_attacks/README.md`.

### Currencies
New denominations, debasements, and exchange-rate shocks are filings, not
housekeeping — the `currencies.json` entry should cite the event id that
changed it, and the exchange page picks up the data.

### Songs and books
Songs: full lyrics in-voice (see the Iron Dominion anthem for register),
`sourceId` must resolve. Books: title, author, owner, `relatedArticles`;
if the book is central to an arc, it earns a library cover (see
`docs/IMAGE_GENERATION_GUIDE.md`).

---

## Verification

There is no checker for this page — **the run report is the checker.** The
cross-system sweep appears in every run report as a line per trigger:

```
XSYS  pond_patrol      n/a — no docket names in filing
XSYS  wahwire          DONE — wahwire_<id> posted (waluigi, smug)
XSYS  poi              DEFERRED — territory unresolved until next session (reason)
```
