# Project Structure Inventory

**Phase 1 — non-breaking inventory**  
**Updated:** 2026-08-05

## Executive summary

This repository has one active application shell (`/index.html`) and a large, mostly self-contained application tree in `Reputation-Matrix2/`. The root is not currently a clean source boundary: it contains public entrypoints, legacy pages, commerce scripts, media, notes, and generated/compatibility files.

No files are being moved as part of this inventory. This document records what exists and the dependency risks to resolve before Phase 2.

## Current high-level tree

```text
/
├── index.html                         Active application shell and router host
├── bank.html / currency.html         Root compatibility/legacy entrypoints
├── shop.html / xp.html               Root compatibility/legacy entrypoints
├── shop-data.js                      Root commerce data dependency
├── shop-wallet-sync.js/.css          Root commerce compatibility layer
├── generate-updates.js               Build/content utility
├── *.md                              Working notes and project documentation
├── *.mp3 / favicon.ico               Root media and site identity
├── portraits/                        Root portrait mirror (309 shared names)
├── assets/                           Root campaign artwork and generated media
├── Reputation-Matrix2/               Main application and historical source tree
├── timeline/                          Separate Vite timeline application
├── wahsim/                            Separate simulation/system application
└── tools/                             Repository-level utilities
```

## `Reputation-Matrix2` responsibilities

| Area | Current location | Notes |
|---|---|---|
| Application shell dependencies | top level | 243 JS, 90 CSS, 83 HTML files at this level; needs later decomposition |
| Shared data | `data/` | Characters, shop data, books, events, quests, vendors, and JSON records |
| Quest data | `quests/`, `data/quest-system/`, `quests-data-1.js` | Canonical aggregator/constants now live in `data/quest-system/`; legacy generations still require audit |
| Event/story data | `events/`, `data/events*`, event JS files | Narrative and rendering responsibilities are mixed in places |
| Maps | `map-data/`, map pages, `*map*.js` | Follow existing map grouping rules in README before moving |
| Images | `portraits/`, `banners/`, `icons/`, `images/`, `textures/`, `assets/` | Several overlapping image roots |
| Commerce | `shop*.js`, `shop-items/`, `data/shop-items/` | Includes generated caches and backup files |
| Tools | `tools/` | Build scripts, Hub app, Foundry examples, and generated output |
| Separate apps | `timeline/`, `wahsim/` | Should not be flattened into the main app |

## Important dependency boundaries

1. `/index.html` is the current runtime entrypoint. It contains a substantial router and inline view implementations. Treat it as a protected file during moves.
2. Root compatibility pages may be externally bookmarked. Preserve URLs with redirect stubs until references are audited.
3. `Reputation-Matrix2/` contains relative-path assumptions. Any asset move needs a reference scan and route smoke test.
4. `timeline/` and `wahsim/` have their own application conventions and should be reorganized independently.
5. `tools/hub/.hub-out/` contains generated output/cache and should not be treated as authored source.

## Proposed target boundaries (not yet applied)

```text
app/          Runtime boot, router, shared state, page renderers
components/   Reusable UI systems
 data/         Thematic data modules and aggregators
styles/       Base, components, pages, and legacy compatibility styles
assets/       Audio, portraits, maps, icons, campaign art, generated art
pages/        Redirect/compatibility pages
legacy/       Retired systems kept only for historical or URL compatibility
tools/        Build and authoring utilities
 docs/        Documentation and migration records
```

The target is deliberately conceptual for now. Phase 2 should move only low-risk files and update references in the same commit.

## Phase 1 acceptance criteria

- Root files categorized: complete
- Major application boundaries recorded: complete
- Duplicate asset risk recorded: complete
- Generated output risk recorded: complete
- No runtime behavior changed: complete
