# Waluigi Article-Analysis Section

This directory documents the **implemented article-analysis feature** in Waluipedia: how a companion analysis is discovered, loaded, rendered, styled, persisted, and safely extended.

The feature is a signed, opinionated reading by Waluigi of an already-filed article. It is not another event and it does not replace the source record. The current live analysis is:

- **Source:** `The Hanging-Tree Apple, the Mirror Theft, and the Invited Vampire`
- **Analysis ID:** `hanging_tree_apple_waluigi_analysis`
- **Direct hash route:** `#/article-analysis/hanging_tree_apple_waluigi_analysis`
- **Source hash route:** `#/article/the_hanging_tree_apple_mirror_theft_and_invited_vampire`

> **Editorial source of truth:** [`../ARTICLE_ANALYSES.md`](../ARTICLE_ANALYSES.md) defines voice, the 20/80 source-to-analysis balance, schema rules, canon boundaries, and authoring checks. This README is the implementation and maintenance companion. If editorial advice differs, follow the canonical guide.

---

## Why this feature exists

The latest article-analysis PR solved a specific archive problem: some events
are already complete as events, but Waluigi still needs room to argue about
what the filed facts mean. Expanding the original event would blur chronology,
custody, XP, and witness statements with later interpretation. Creating a new
event would falsely duplicate the occurrence in the archive. The analysis route
is the middle path: one source-scoped, signed reading that is clearly secondary
to the canonical filing.

The first live analysis deliberately proves the full shape:

- the canonical event remains the place to learn what happened;
- the analysis page owns the thesis, source anchors, argumentative sections,
  verdict, related links, and optional research desk;
- the source page can advertise the companion essay without turning every event
  into an analysis placeholder;
- chance-based research happens only after the verdict, so the core reading is
  deterministic;
- local persistence stores a reader's optional checks without changing archive
  state.

That division is the feature. Do not collapse it by copying the source event
into the analysis, or by pushing Waluigi's later interpretation back into the
factual record as if it were contemporaneous.

---

## Maintainer quick start

To add a second analysis without touching the renderer:

```bash
python3 -m json.tool Reputation-Matrix2/data/articleAnalyses.json >/dev/null
# edit one object in data/articleAnalyses.json
python3 -m json.tool Reputation-Matrix2/data/articleAnalyses.json >/dev/null
cd Reputation-Matrix2 && npm run build
```

Then manually check:

1. the source article route loads;
2. its **Investigate this further** panel contains exactly the intended analysis
   link;
3. `#/article-analysis/<analysis-id>` survives reload;
4. the source-return links work;
5. every section anchor in the table of contents scrolls to the right heading;
6. each optional research check rolls once and persists after reload;
7. dark mode, light mode, and a narrow viewport remain readable.

A normal new analysis is a data change. Renderer, CSS, or route edits are only
needed when the product shape itself changes.

---

## What the reader gets

The feature gives a filed event a second, clearly labeled reading path:

1. A reader opens the canonical event.
2. Its **Investigate this further** panel detects a matching analysis record.
3. A **Waluigi's Article Analysis** block links to the companion route.
4. The companion page presents:
   - a canonical-event return link;
   - Waluigi's summary and full thesis;
   - a table of contents;
   - source anchors separated from commentary;
   - five to nine sustained argument sections;
   - a signed verdict;
   - optional one-shot research checks after the verdict;
   - related-article links and a final return to the source.

The event remains the record of what happened. The analysis explains what Waluigi thinks it means, what personally irritates him, where he may be biased, and what he recommends doing next.

### Deliberate non-features

An analysis does **not**:

- become a second event in the global article index;
- change chronology, participants, custody, XP, reputation, or outcomes;
- award a gameplay benefit;
- gate core prose behind a die roll;
- let research results rewrite the thesis or verdict;
- create an empty analysis panel on unrelated articles;
- require a separate HTML page per analysis;
- contain authored raw HTML.

---

## Ownership map

| Path | Responsibility |
|---|---|
| `Reputation-Matrix2/data/articleAnalyses.json` | Authored analysis records and optional research-desk definitions |
| `index.html` | Data loading, source-page discovery, hash routing, renderer, d6 interaction, local persistence |
| `Reputation-Matrix2/app/styles/systems/investigations.css` | Analysis-page and research-desk presentation, scoped to analysis classes |
| `docs/ARTICLE_ANALYSES.md` | Canonical editorial guide and schema contract |
| `docs/article-analyses/README.md` | This implementation and maintenance README |
| `Reputation-Matrix2/data/events.json` | Canonical source event used for identity, title, artwork, and story facts |
| Other data collections | Related records resolved by IDs in `relatedArticles[]` |

The implementation is intentionally part of the existing Waluipedia single-page archive. There is no parallel app, page-specific CSS bundle, or duplicate source-event payload.

---

## Runtime architecture

### 1. Data load

`index.html` includes `articleAnalyses` in `DATA_FILES`. On startup, the standard loader requests:

```text
./data/articleAnalyses.json
```

The loaded value becomes `DATA.articleAnalyses`. The normal embedded-data fallback still applies if fetching is unavailable, just as it does for the archive's other data collections.

The JSON accepts its documented object shape:

```json
{
  "_README": { "what": "..." },
  "analyses": []
}
```

The compatibility helper also accepts a top-level array, but new authored data should retain the object shape and `_README` note.

### 2. Lookup helpers

The renderer uses three small helpers in `index.html`:

- `articleAnalysesAll()` normalizes the loaded collection.
- `articleAnalysisGet(id)` resolves a route ID.
- `articleAnalysesForSource(sourceId)` finds companion records for one source event.

Analyses deliberately do not join the global `INDEX`. This prevents the same filed occurrence from appearing as though it were two canonical events.

### 3. Source-page discovery

`renderConnectedInvestigationsPanel(id, typeKey)` asks `articleAnalysesForSource(id)` for matching records.

If a record matches:

- the existing **Investigate this further** panel gains a Waluigi analysis subsection;
- the link uses the source article's displayed title;
- the summary is shown as a preview;
- a pill reports the number of optional after-hours checks, when present.

If neither an investigation file nor an article analysis exists, the connected panel is omitted. If only an analysis exists, the panel explains that reading is deterministic and changes no canon.

### 4. Hash route

The route parser dispatches:

```text
#/article-analysis/<analysis-id>
```

to `view_article_analysis(id)`.

That renderer resolves both:

1. the analysis record by `id`; and
2. its canonical source through `sourceArticle`.

A missing analysis produces the normal not-found state. A broken `sourceArticle` prevents the page from fulfilling its identity/media contract and should be treated as a pre-flight failure, not patched by copying event data into the analysis record.

### 5. Render pipeline

The page is generated from data rather than hard-coded prose. The renderer:

1. computes source identity and artwork from the canonical event;
2. builds stable heading anchors for thesis, sections, and verdict;
3. creates the table of contents and reading-time display;
4. passes authored prose through the existing markdown renderer;
5. visibly wraps every `sourceAnchor` apart from Waluigi's commentary;
6. renders the verdict before any optional chance-based interaction;
7. builds the research desk if valid rolls exist;
8. resolves related-article chips through existing archive IDs;
9. initializes the ordinary table-of-contents scroll behavior.

Authored `thesis`, `sections[].body`, and `verdict` values are markdown strings. Titles, prompts, source anchors, and metadata are escaped before insertion. Do not add raw markup to the JSON to bypass the renderer.

---

## Data contract at a glance

A minimal substantial analysis looks like this:

```jsonc
{
  "id": "stable_snake_case_id",
  "sourceArticle": "existing_source_event_id",
  "title": "Exact source-event title",
  "kicker": "Waluigi's Article Analysis",
  "subtitle": "The interpretive angle",
  "archivist": "Waluigi, Auditor-General",
  "filed": "An honest in-world or relative filing date",
  "summary": "A compact thesis preview.",
  "thesis": "Waluigi's opening argument in markdown.",
  "sections": [
    {
      "id": "unique-kebab-case-anchor",
      "icon": "🖋️",
      "heading": "An argumentative claim, not a plot beat",
      "sourceAnchor": "A concise, filed fact from the source event.",
      "body": "Interpretation, competing readings, gripe, stake, and recommendation."
    }
  ],
  "verdict": "A signed judgement with a concrete recommendation.",
  "relatedArticles": ["existing_record_id"]
}
```

For the full field table and working length bands, use [`../ARTICLE_ANALYSES.md`](../ARTICLE_ANALYSES.md).

### Identity rules

- `id` is the permanent public route key.
- `sourceArticle` is the permanent connection back to the event.
- `title` matches the source title exactly.
- Every analysis `id` is unique.
- There should normally be only one record for a given `sourceArticle` unless the product intentionally introduces multiple signed readings.
- Every section `id` is unique within its analysis and becomes a page anchor.

Changing a published `id` breaks direct links. Changing a research-roll `id` loses the reader's saved one-shot result. Treat both as migrations, not copy edits.

### Content ownership

Keep these fields in the source event, not in `articleAnalyses.json`:

- participant lists;
- chronology and event dates;
- outcomes and injuries;
- XP and reputation changes;
- canonical quotations not selected as brief anchors;
- media ownership;
- investigation progress;
- item custody.

The analysis record owns only the signed interpretation, its navigation metadata, and optional supplemental research outcomes.

---

## Editorial model

The form reverses the ordinary event balance:

- approximately **20% source reference**;
- approximately **80% Waluigi analysis**.

Every section starts with a source anchor so the opinion remains auditable. The body should then do work the event should not do: weigh competing explanations, identify recurring habits, connect files, reveal Waluigi's emotional stake, admit where he is not neutral, and recommend what changes.

### Voice requirements

Waluigi should be:

- opinionated enough to choose a reading;
- accountable enough to label that choice as his;
- personal enough to expose fear, pride, guilt, resentment, or recognition;
- fair enough to preserve a credible competing reading;
- grounded enough that the source article remains necessary.

A gripe belongs when it reveals the case. Volume is not evidence, and a `WAH` does not convert suspicion into canon.

### Structural test

A section is usually working when it contains:

1. a claim;
2. a source anchor;
3. Waluigi's immediate reaction;
4. at least two plausible readings where uncertainty exists;
5. a cross-file or practical consequence;
6. a personal admission;
7. a recommendation or honestly unresolved question.

If the analysis can stand alone after the source event is removed, it contains too much retelling. If it could be attached unchanged to another article, it is not anchored enough.

---

## Optional after-hours research desk

The research desk supplies a small interactive appendix without making the article itself random.

```jsonc
{
  "researchDesk": {
    "title": "Waluigi's After-Hours Research Desk",
    "intro": "Why these checks are worth making.",
    "rolls": [
      {
        "id": "stable-roll-id",
        "icon": "🎲",
        "title": "Question under review",
        "dc": 4,
        "prompt": "A comparison grounded in already-filed details.",
        "success": "A stronger supplemental inference, not new canon.",
        "failure": "A useful limit or preserved competing reading."
      }
    ]
  }
}
```

### Runtime behavior

- Each check rolls one unmodified d6.
- Valid DCs are 2 through 6.
- A roll equal to or above the DC succeeds.
- Each `analysis-id` / `roll-id` pair can be rolled once in a browser profile.
- The result appears through the existing investigation-result presentation.
- The button becomes a filed state after rolling.
- Reloading the page restores the result.
- The progress indicator counts filed checks.
- A storage failure does not prevent the article from being read.

### Persistence

Results are stored in browser `localStorage` under:

```text
waluipedia-analysis-research-v1
```

The stored object is keyed first by analysis ID and then by roll ID. Each entry records:

- verdict (`success` or `failure`);
- raw d6 roll;
- total (currently the same as the raw roll);
- DC used at the time of filing.

This is intentionally local and anonymous. Results do not sync to a server, update JSON, or change canonical archive state.

### Editorial safety

The research desk appears **after** the complete verdict. Therefore every reader receives the same core argument before dice appear.

A success can sharpen an inference between facts already on file. A failure must identify a useful evidentiary limit. Neither outcome may:

- decide an uncertainty left open by the event;
- establish hidden intent;
- modify the verdict;
- award XP or reputation;
- change investigation completion;
- reveal a new off-screen fact.

Three focused checks are the normal ceiling. More checks turn close reading into button hunting.

---

## Presentation and CSS

Article analyses use the archive's existing page vocabulary and a scoped visual layer in:

```text
Reputation-Matrix2/app/styles/systems/investigations.css
```

The main scope is `.article-analysis-layout`, with component scopes including:

- `.article-analysis`
- `.analysis-masthead`
- `.analysis-reading`
- `.article-analysis-thesis`
- `.article-analysis-section`
- `.analysis-source-anchor`
- `.article-analysis-verdict`
- `.analysis-research`
- `.analysis-rail`

The stylesheet provides:

- dark and light theme tokens;
- a signed editorial masthead and seal;
- a constrained reading measure;
- distinct source-anchor callouts;
- thesis and verdict treatments;
- a sticky navigation/metadata rail where space permits;
- responsive research cards;
- mobile layout adjustments;
- existing focus and interaction behavior inherited from Waluipedia.

Do not create a parallel `article-analyses.css` or inline a new card system into the data renderer. New presentation rules belong in `investigations.css` and must stay under an analysis-specific scope so investigation files and ordinary articles are unaffected.

### Media

The analysis may display the source event's existing lead image as a reference. The renderer obtains that media from the source record. Do not duplicate or rename the image merely for the companion page. Its caption must identify it as source-filing imagery, not new evidence.

---

## Adding another analysis

### Before writing

1. Confirm the source event is filed and its ID is stable.
2. Read the full source event.
3. Extract eight to twelve exact facts, short quotations, decisions, or explicit uncertainties.
4. Write one sentence explaining Waluigi's argument.
5. Check that the argument needs a full companion page rather than a stronger `waluigiAssessment` paragraph.

### Authoring

1. Add one object to `articleAnalyses.json`.
2. Copy the source title exactly.
3. Choose five to nine anchors that test different parts of the thesis.
4. Write section headings as claims, not a chronology.
5. Keep source recap brief and interpretation dominant.
6. Let Waluigi name his personal gripe and where it affects his judgement.
7. Preserve competing readings where evidence is incomplete.
8. End the verdict with an actionable recommendation.
9. Add a research desk only if chance produces useful supplemental readings.
10. Add only related IDs that already resolve in the archive.

No renderer edit is normally required. A new valid data record automatically gains:

- its route;
- its source-page entry;
- its table of contents;
- source-anchor presentation;
- verdict treatment;
- optional research cards;
- related links.

### Do not copy the current record mechanically

The first analysis argues that the party promotes partial conditions into larger nouns: custody into rescue, exclusion into security, and shelter into home. That thesis belongs to that source. A new analysis needs its own argumentative pressure, emotional stake, and recommendation.

---

## Validation

Run structural checks from the repository root.

### Parse JSON

```bash
python3 -m json.tool Reputation-Matrix2/data/articleAnalyses.json >/dev/null
```

### Check record identity and section uniqueness

```bash
python3 - <<'PY'
import json
from pathlib import Path

path = Path('Reputation-Matrix2/data/articleAnalyses.json')
data = json.loads(path.read_text())
rows = data.get('analyses', [])
ids = [row['id'] for row in rows]
assert len(ids) == len(set(ids)), 'duplicate analysis id'
for row in rows:
    section_ids = [section['id'] for section in row.get('sections', [])]
    assert len(section_ids) == len(set(section_ids)), f"duplicate section id in {row['id']}"
print(f'{len(rows)} article analysis record(s) passed identity checks')
PY
```

### Build the site

```bash
cd Reputation-Matrix2
npm run build
```

### Manual route checks

Open the canonical event first, then its analysis.

Verify:

- the source page shows one analysis entry;
- the displayed analysis link uses the source title;
- the direct hash route survives reload;
- the source return links work;
- the title and source identity agree;
- the table of contents reaches every section;
- source anchors remain visibly separate from commentary;
- markdown renders without raw tags;
- the verdict appears before research;
- each research roll files once and survives reload;
- related chips resolve;
- dark and light themes remain readable;
- narrow layouts do not overflow;
- no console error occurs.

### Canon and prose checks

Use the pre-flight list in [`../ARTICLE_ANALYSES.md`](../ARTICLE_ANALYSES.md). In particular, confirm:

- no roll token appears in the thesis, body sections, or verdict;
- every source anchor can be located in the source record;
- assertions beyond the record are attributed to Waluigi;
- no new chronology, intent, custody, XP, or reputation is manufactured;
- success and failure research notes are both worth reading.

---

## PR review checklist

Use this list when reviewing an analysis PR. It catches the failures that are
hard to see from a JSON diff alone.

### Source relationship

- `sourceArticle` resolves to exactly one canonical record.
- `title` matches the source event title exactly.
- The source event already contains the facts the analysis uses as anchors.
- The analysis does not introduce new dates, participants, custody changes,
  injuries, XP, reputation, or hidden intent.
- Related article IDs resolve and are genuinely related to the argument, not
  merely mentioned in passing.

### Argument quality

- The thesis is an interpretation, not a summary.
- Each section heading makes a claim.
- Each `sourceAnchor` is short enough to audit quickly.
- Commentary outweighs recap; the source event is still necessary after reading.
- Waluigi names his stake or bias where it matters.
- A competing reading is preserved where the evidence is incomplete.
- The verdict ends with a concrete recommendation or refusal to recommend.

### Research desk safety

- Research appears after the verdict.
- Roll IDs are stable and unique.
- DC values are integers from 2 through 6.
- Success and failure text are both useful.
- Neither branch reveals a new off-screen fact or rewrites the verdict.
- A failed browser storage write would not make the core article unreadable.

### Implementation

- No raw HTML was added to authored markdown.
- New CSS, if any, is scoped under analysis-specific classes.
- No direct link was hard-coded into the source event; discovery is data-driven.
- `articleAnalyses.json` parses.
- `npm run build` passes if renderer/style code changed.

---

## Troubleshooting

### The source article has no analysis link

Check, in order:

1. `articleAnalyses.json` parses.
2. `sourceArticle` exactly matches the canonical event ID.
3. `articleAnalyses` loaded into `DATA`.
4. The source page calls the ordinary connected-investigations panel.
5. There is no duplicate/stale embedded fallback masking a failed fetch in the current environment.

Do not hard-code a link into the source event. Fix the data connection.

### The analysis route says the record is missing

The route argument must match `id`, not `sourceArticle`:

```text
#/article-analysis/hanging_tree_apple_waluigi_analysis
```

Hash IDs are encoded by the link renderer and decoded by the route system. Avoid punctuation and spaces by following stable lowercase `snake_case` IDs.

### The page has no source image or identity

Confirm `sourceArticle` resolves. Media is owned by the source event. Do not patch the analysis record with copied image paths as a substitute for fixing the relationship.

### A research button is already filed

That is expected after a one-shot result is stored. For local development only, remove the specific analysis/roll entry from `localStorage` key `waluipedia-analysis-research-v1`, or clear that key to reset all analysis research on that browser profile.

Do not rename a published roll merely to make its button available again; that silently invalidates reader history.

### Research disappears after reload

Browser storage may be blocked or unavailable. The renderer catches storage failures so reading still works. Test in a normal same-origin context before treating private browsing or `file://` behavior as a product defect.

### Styling leaks into investigation pages

Inspect the selector. Analysis-specific additions must begin under `.article-analysis-layout`, `.article-analysis`, `.analysis-research`, or another uniquely analysis-scoped ancestor. Do not widen shared investigation selectors to solve one analysis-page detail.

### The analysis feels like another event article

Reduce chronology and recap. Keep the minimum source anchor needed to audit each claim, then spend the section on Waluigi's preference, competing readings, emotional stake, consequence, and recommendation.

---

## Current implementation checklist

The first record currently demonstrates the full system:

- one canonical source connection;
- a dedicated direct route;
- reverse 20/80 analysis balance;
- sustained first-person Waluigi voice;
- source anchors for every section;
- custom scoped analysis presentation;
- thesis, long-form sections, and signed verdict;
- three optional one-shot d6 research checks;
- local result persistence;
- related-article resolution;
- return navigation to the canonical event.

Future records should reuse this system through data, not duplicate its renderer.
