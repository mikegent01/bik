# Legacy and Compatibility Inventory

**Phase 1 — no files moved**  
**Updated:** 2026-08-05

## Root entrypoints

| File | Current status | Recommendation |
|---|---|---|
| `index.html` | Active application shell/router host | Keep at root; refactor gradually |
| `bank.html` | Root banking entrypoint | Audit links, then retain as redirect or move behind compatibility path |
| `currency.html` | Root currency entrypoint | Same as banking |
| `shop.html` | Root shop entrypoint | Same as banking; commerce has several generations |
| `xp.html` | Root XP entrypoint | Same as banking |

The root URLs should not be removed until route references and deployment behavior are verified.

## Likely legacy or compatibility areas

| Area | Evidence | Action before moving |
|---|---|---|
| `Reputation-Matrix2/` top-level HTML | 83 HTML files at one level, many likely redirects/pages | Classify active page vs redirect vs historical page |
| `shop-data_backup.js` | Explicit backup suffix and very large file | Preserve outside active imports; document whether recoverable |
| `tools/hub/.hub-out/` | Generated Hub output/cache | Add/verify ignore policy; never hand-edit |
| `timeline/.vite/` | Vite-generated cache | Verify ignore policy; exclude from authored source map |
| `quests-data-1.js` and similar suffixed files | Multiple data generations | Identify import graph before consolidation |
| root portrait mirror | 309 shared basenames | Hash and reference audit before deleting/moving |

## Files that should not be casually classified as legacy

The following may look old because they are large or irregular, but need verification:

- `index.html`
- `Reputation-Matrix2/data/*`
- `Reputation-Matrix2/quests/*`
- `Reputation-Matrix2/map-data/*`
- `Reputation-Matrix2/tools/item sheet examples/*`
- `Reputation-Matrix2/events/*`

The README establishes active conventions for quests, maps, events, items, and books. Those systems should be reorganized according to their existing schemas, not moved into an undifferentiated archive.

## Compatibility policy

Until Phase 2 is complete:

1. Keep existing public URLs working.
2. Prefer redirect stubs over deletion.
3. Make path moves and reference updates in one commit.
4. Keep each migration narrow enough to test independently.
5. Record every moved file in the migration notes.
6. Do not mix asset deduplication with router or data refactoring.

## Proposed legacy destination

```text
legacy/
├── root-pages/
├── retired-pages/
├── old-data-generations/
└── compatibility-assets/
```

This is a destination proposal only. No file belongs there until its imports and URL role are documented.
