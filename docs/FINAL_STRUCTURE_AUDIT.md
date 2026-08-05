# Final Structure Pass

**Date:** 2026-08-05

## Result

The project has completed the active organization pass. The repository root and `Reputation-Matrix2` root now contain only a small number of intentional entrypoints, compatibility pages, configuration files, and legacy application boundaries.

## Canonical active boundaries

```text
Reputation-Matrix2/
├── app/
│   ├── components/       reusable UI components
│   ├── core/             shared runtime, shell, audio, and Wario infrastructure
│   ├── pages/            page-level UI and page-local assets
│   ├── styles/           shared and system styles
│   └── systems/          cross-page gameplay systems
├── assets/               categorized media
├── data/                 categorized authored data
├── tools/                authoring and build tools
└── README.md             application-specific documentation
```

## Compatibility boundaries intentionally retained

These are not accidental leftovers:

- `index.html` — active application shell
- `currency.html` — public compatibility redirect
- `quests.html` — public compatibility redirect
- `package.json`, Vite/TypeScript configuration — tooling boundary
- `README.md`, `.gitignore`, `.gitattributes` — repository metadata

## Existing historical domains retained

The following directories predate the new `app/data/assets` model and remain because they contain broad, interconnected content collections:

```text
books/
events/
files/
game/
map-data/
new-operator/
posts/
quests/
shop-items/
systems/
toads/
tools/
```

They should not be renamed or flattened without an import-graph migration. Their active aggregators now have canonical homes under `data/`, while these directories hold thematic content and compatibility modules.

## Final-pass checks

- Active UI files are grouped under `app/pages/`.
- Shared runtime files are grouped under `app/core/`.
- Cross-page systems are grouped under `app/systems/`.
- Shared styles are grouped under `app/styles/`.
- Game data is grouped under `data/`.
- Images and audio are grouped under `assets/`.
- Legacy notes and backups are under `docs/legacy/`.
- Campaign art is under `assets/campaign-art/`.
- Faction, map, icon, portrait, audio, and illustration assets have dedicated locations.
- Root compatibility pages remain available.
- Moved JavaScript modules have been syntax-checked throughout the migration.
- The working tree is clean after the organization pass.

## What should happen next

The project should now move from relocation to stabilization:

1. Add a path/reference audit to CI.
2. Test the top-level routes and compatibility redirects.
3. Deduplicate the root and `Reputation-Matrix2/portraits/` mirrors by hash.
4. Classify remaining historical directories as active, legacy, or generated.
5. Extract more of the monolithic root application shell only when there is a test for the route being extracted.

Further blind file movement is not recommended. The structure is now coherent; stability and dependency consolidation are the next priorities.
