# Article Revision History — amending a record without duplicating it

A record that gets corrected, expanded, or contradicted later used to put the
archive in a bind: either the original was edited in place (and the mistake
disappeared with it), or a second event was filed (and the same occurrence
showed up twice). This feature is the third path — **one record, many
revisions, all of them readable.**

The first live use is `promo_mario_newspaper`: Revision 1 is the original
abridged press review; Revision 2 is the same-day amendment containing the
full account.

---

## When to use `revisions[]`

Use it when:

- the same occurrence is being **expanded** (a short filing gains the long
  account it was abridged from);
- a later source **contradicts** part of the filing and the contradiction
  belongs in the record rather than in a separate article;
- Waluigi (or the archive) is **correcting his own filing** and the original
  must stay visible as history;
- a reader needs to see *what changed* without leaving the page.

Do **not** use it when:

- the new material is a *different occurrence* — file a new event;
- the new material is purely interpretation of a complete filing — write an
  article analysis (`articleAnalyses.json`);
- the change is a small typo or metadata fix — edit the field in place;
- you want to replace history wholesale — the original stays; a revision
  becomes the default instead.

## Data shape

Any object in the article collections (events, characters, factions, …) may
carry:

```jsonc
"revisions": [
  {
    "id": "rev-1",              // stable selector id
    "version": 1,               // number shown in the bar
    "label": "Original filing", // short bar label
    "date": "5 Aethel, 1040 BF",
    "status": "Superseded",     // pill text
    "summary": "optional one-liner shown under the bar",
    "note": "the editorial note shown under the bar",
    "body": null                // null = use the record's description
  },
  {
    "id": "rev-2",
    "version": 2,
    "label": "Amended filing",
    "date": "5 Aethel, 1040 BF — evening",
    "status": "Current",
    "note": "what changed and why",
    "body": "the full markdown body of this revision"
  }
]
```

Rules:

- Revision 1 has `"body": null`; the renderer falls back to the record's
  existing `description`, so the original is never copied.
- The body is **markdown**, the same format as `description`. No raw HTML,
  no `<div>`.
- The active revision defaults to the entry with `"isCurrent": true`, or the
  last entry in the array if none is marked.
- `id` is the only stable key; renaming it loses a reader's in-session choice.

## Renderer

`view_article()` in `index.html`:

1. resolves `revisions[]` and the active revision;
2. uses the active revision's body (or `description`) for headings, reading
   time, word count and the rendered prose;
3. renders a `.vhistory` version bar with one button per revision;
4. `pickRevision(articleId, revId)` re-renders the same article with the chosen
   revision — the choice lives only in `window.__revPick` and is never written
   back to the data.

## CSS

`Reputation-Matrix2/app/styles/systems/version-history.css`, linked in
`index.html`. All selectors are scoped under `.vhistory`; nothing global is
added. The bar uses the site's existing vocabulary (`.pill`, theme variables)
so it matches dark/light mode and narrow viewports without new components.

## Verification

```bash
python3 -m json.tool Reputation-Matrix2/data/events.json
python3 tools/check-all.py
python3 tools/check-readability.py --event <id>
node --check <the index.html script block, if touched>
```

In the browser:

- the record opens on the current revision;
- the bar lists every revision and switches without leaving the page;
- the original revision shows the original text verbatim;
- TOC headings, reading time, and related panels track the active revision;
- no revision duplicates the record in the global index or the home feed.

A revision is **not** a new event: it never enters `events.json` as a second
record, never hits the RNN pending list twice, and does not move
`mainPage.latestUpdate` on its own.
