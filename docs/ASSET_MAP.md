# Asset Map and Duplicate Audit

**Phase 1 — inventory only**  
**Updated:** 2026-08-05

## Asset roots

| Location | Role | Phase 2 guidance |
|---|---|---|
| `assets/` | Root-generated campaign artwork | Keep campaign art together; do not mix with runtime icons |
| `portraits/` | Root portrait mirror | Compare against `Reputation-Matrix2/portraits/` before consolidating |
| `Reputation-Matrix2/portraits/` | Main character portrait store | Likely canonical, but verify references first |
| `Reputation-Matrix2/icons/` | Navigation/system icons | Move only with reference updates |
| `Reputation-Matrix2/banners/` | Faction/region banners | Candidate for `assets/banners/` |
| `Reputation-Matrix2/images/` | Mixed page and system imagery | Requires a file-level classification pass |
| `Reputation-Matrix2/textures/` | Background/material imagery | Candidate for `assets/textures/` |
| `Reputation-Matrix2/assets/images/` | Feature-specific assets | Preserve feature grouping until audited |
| `Reputation-Matrix2/tools/.hub-out/` | Generated Hub output/cache | Do not reorganize as authored assets |

## Root media currently present

```text
favicon.ico
click.mp3
click_subtle.mp3
confirm.mp3
wah.mp3
```

These are candidates for:

```text
Reputation-Matrix2/assets/audio/ui/
```

However, references must be updated before moving them because some pages use root-relative paths.

## Campaign artwork

Current committed campaign art:

```text
assets/campaign-cover.png
assets/campaign-cover-variant-1.png
assets/campaign-cover-variant-2.png
assets/campaign-cover-storyswap-1.png
assets/campaign-cover-storyswap-2.png
```

Recommended eventual location:

```text
assets/campaign-art/
```

Recommended naming convention:

```text
campaign-cover.png
campaign-cover-variant-01.png
campaign-cover-variant-02.png
campaign-cover-storyswap-01.png
campaign-cover-storyswap-02.png
```

This rename should wait until a reference scan confirms whether any page links to the current names.

## Duplicate portrait audit

There are **309 shared basenames** between:

```text
portraits/
Reputation-Matrix2/portraits/
```

Shared names do not prove identical content. Before consolidation, compare:

- byte size
- image dimensions
- file hash
- alpha channel
- references from JS, HTML, JSON, and CSS

The safe process is:

1. Generate a CSV/hash report.
2. Identify exact duplicates.
3. Identify same-name/different-content files.
4. Choose a canonical root based on live references.
5. Update references.
6. Keep compatibility copies until route testing passes.

## Large-file and generated-file risks

The repository contains very large media and generated files, including:

- character portraits over 20 MB
- map images several MB each
- shop catalog caches under `tools/hub/.hub-out/`
- shop backup and slim/generated JSON files

These need separate treatment from normal source cleanup. Do not move or delete generated output until the generating tool and ignore policy are documented.

## Asset classification rules for Phase 2

- `portraits/`: character/entity art only
- `icons/`: small UI/navigation symbols
- `banners/`: faction, region, or page headers
- `maps/`: map images and map overlays
- `quest-art/`: quest-specific backgrounds and illustrations
- `campaign-art/`: campaign covers and promotional compositions
- `audio/ui/`: interface sounds
- `audio/ambient/`: ambient loops and atmosphere
- `generated/`: model output or build output not used as source data

Do not create a generic catch-all `images/` destination for new work.
