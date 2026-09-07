# Run report — Promo Mario newspaper review

> **Amended — same day.** This report documents the *morning* filing: the
> abridged press review. That same evening the full account reached the
> archive and the filing was amended in place as Revision 2 of the same
> record — see **`docs/run-reports/2026-09-06-promo-mario-amendment.md`**.
> The morning report is retained as the historical record of what was
> filed at that time; the amendment report supersedes its open-items
> section, including the "no expanded retelling" line below.

## Intake and purpose

The supplied account becomes **one deliberately short press-review article**, not a confirmed Hollywood expedition. Waluigi has read a newspaper; he has not witnessed the trip or identified its host as the missing Mario. The duplicated paste is filed once.

**Article:** `#/article/promo_mario_newspaper` — **Promo Mario — A Sighting or a Sales Pitch?**

**Review:** [PR #67](https://github.com/mikegent01/bik/pull/67), on the existing session branch. This follow-up has its own commit; the earlier map-preview and Regal Diet work is not reworked here.

## 1. Files created or edited

### Created

- `docs/run-reports/2026-09-06-promo-mario-newspaper.md` — this report.

### Edited — authored data

- `Reputation-Matrix2/data/events.json` — appended `promo_mario_newspaper` (31 lines): two body sections, a short lead and Waluigi verdict, one participant, seven related articles, an unverified status and explicitly provisional filing date.
- `Reputation-Matrix2/data/props.json` — added `prop_promo_mario_newspaper_clipping` (15 lines): openable, abridged newspaper reading copy, source limitations, article backlink and evidence stamp. No invented publisher or byline.
- `Reputation-Matrix2/data/investigations.json` — extended **The Farm Was Not the End** (`mario_charred_note_file`): one session, one exhibit, one lead, one thread, one plain-summary point, a brief continuation and updated `lastFiled`. The exhibit has a classless illustrative newspaper graphic, one DC-4 examination and one optional DC-4 insight. Existing evidence and saved roll identifiers remain unchanged.
- `Reputation-Matrix2/data/characters.json` — added one `relatedArticles` link to Mario. His biography and missing status, and every other character record, are unchanged.
- `Reputation-Matrix2/data/mainPage.json` — rotated `featuredArticle` and `latestUpdate` to the new press review, explicitly labelled **Unverified**. The Scorncrow article is preserved.
- `Reputation-Matrix2/data/wahwire/posts.json` — appended `wahwire_promo_mario_newspaper`, Waluigi, order 17, reaction `suspicion`, linked to the article.
- `tools/rnn-scripts/pending-news-articles.json` — appended the filing with an instruction to report it as a disputed clipping, not “MARIO FOUND.” Curated queue is now 8/10.

### Edited — reader discovery

- `index.html` — prepended one `SITE_UPDATES` entry. No new renderer, CSS or manually pasted home-feed card.

**Generated:** none. No generated outputs, media or dependencies are committed. Temporary test files and dependencies were used only for verification.

**Deletions:** no articles, evidence or historical prose removed. The two home feature pointers were replaced, not the previous featured article.

## 2. Article filed

| Field | Value |
|---|---|
| ID | `promo_mario_newspaper` |
| Name / title | Promo Mario / Promo Mario — A Sighting or a Sales Pitch? |
| Form | Press Review / Contested Sighting |
| Length | 2 body sections; 391 whitespace-delimited words across lead, body and verdict (47 + 302 + 42) |
| Filing date | 5 Aethel, 1040 BF — **provisional**, inferred after the 4 Aethel charred-note filing |
| Encounter date | Undated; the clipping's foreign “1996” is retained only as quoted provenance, not converted into BF |
| Place | Waluigi's reading location unrecorded; Hollywood / Los Angeles is the newspaper's claim |
| Participant | `waluigi` — reader, explicitly not an encounter witness |
| Outcome | Clipping filed; Mario remains missing and Peach's recorded death is unchanged |
| Existing case | `#/investigation/mario_charred_note_file` |

The argument stays accessible without dice: the host learns his supposed history from Waluigi's own article; the clipping confuses the 955 BF assassination year with disappearance despite the 1039 BF fountain meeting; Peach is only said to be alive offstage; and the portal returns **Darian and Alistair, not Mario**. Counterpart, performance and propaganda remain possibilities, not findings of fact.

## 3. XP and durable state

**No XP awarded this run.** No XP ledger, reputation, faction, dynasty, inventory, map, calendar or character-status changes. No new character records for the unverified host or named visitors, and no Hollywood location or invented coordinates.

## Verification

- `python3 tools/check-all.py` — **25/25 checks pass**. References retain 413 legacy warnings; investigations retain four pre-existing active-without-exhibits warnings. No warning identifies the new filing or exhibit.
- `python3 tools/check-readability.py --event promo_mario_newspaper` — **no flags**; 341 normalized body/verdict words, reading-ease 60.6. Short length is intentional, not an unfinished long-session filing.
- `node tools/tests/test-home-feed-render.mjs` — **11/11 pass**, using the live static server on port 8765. The new article appears on the home feed and as the latest filing.
- One-off jsdom article/exhibit smoke test — **14/14 pass**: direct article hash, visible provenance and verdict, clickable clipping, modal content/backlink, Escape close, Mario backlink/missing status, existing investigation's new session/exhibit/lead, preservation of old evidence, and no runtime errors in these flows.
- One-off data-integrity assertions — pass: existing events and props unchanged; only Mario's related-link list changes among characters; other investigations unchanged; existing case arrays only extended; all new IDs and article links resolve; no raw HTML or table-name speaker in article prose; no XP/reputation awards.
- `node --check` on all nonempty inline `index.html` scripts — pass.
- `git diff --check` — pass.
- `python3 tools/build-rnn-broadcast.py --unaired` — **97 never-aired events** including the new review. This broad historical backlog differs from the curated 8-item pending queue.

The home-render test initially needed the absent `jsdom` dependency; it passed after installing jsdom 26.1.0 temporarily. The one-off article harness also needed jsdom's missing `IntersectionObserver` stub and an assertion matching the site's abbreviated status pill. Those were harness corrections, not production changes.

### Content QA and cross-system sweep

- **QA 1, 2, 3, 5, 6: PASS** — tablet/phone/charms carry the story; Darian wants home, Alistair seeks proof, the host grieves, and Waluigi wants evidence; the clipping opens; the lead orients newcomers; Waluigi owns his doubts.
- **QA 4: qualified** — dated as a provisional archive placement, checked against the 4 Aethel case opening and the 5 Aethel Material clock. No authenticated reading-day or travel date was supplied.
- **WAHwire:** posted. **Investigation:** existing case extended, not duplicated. **Home:** data-driven feed, feature and update entry verified.
- **Pond Patrol / Diet / dynasties / POIs / Bros attacks / currencies / songs / library:** no confirmed state-changing trigger. An unverified noble title or souvenir does not establish a province, faction, currency or map pin. The clipping lives as a prop, not a duplicate library book.

## 4. Not done / open

- **Truth is unresolved.** No publisher, issue, byline, independent witness interview, original photograph or authenticated souvenir was supplied. No author or sponsor is accused as fact.
- **Date is inferred.** Placement after the charred-note filing is editorial, not a claim that the transcript establishes that order. Waluigi's reading location is deliberately left unrecorded.
- **The account is abridged on purpose.** Repeated host patter, game instructions, food stops and duplicated dialogue are condensed. No separate full transcript or expanded session retelling is created.
- **No separate companion analysis or generated scene art.** The short article already contains its interpretation; the optional case examination supplies further source criticism. The readable clipping and labelled illustrative exhibit avoid inventing a photograph that could be mistaken for corroboration.
- **No RNN episode cut.** The curated queue is 8/10; the 97-event historical unaired backlog remains a separate editorial job. This run does not claim that the backlog is cleared or fully queued.
- **No graphical browser screenshot pass.** jsdom verifies DOM and interaction, not visual layout. The existing live preview remains available at port 8765; the new article is featured on its home page.
