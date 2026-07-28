# Atlas map embedding — diagnosis

## What is actually wrong

The embed mechanism already exists and works. `maps-view.html` supports `?embed=1`, which
adds a `.map-embed` body class stripping the header/chrome, and `view_atlasNation()` already
renders it in an `<iframe>`. Mushroom Kingdom looks right because it is one of the few
nations wired correctly.

The problems are **coverage and correctness**, not the embed itself:

| Check | Finding |
|---|---|
| Maps defined in `MAP_DATA` | **182** |
| Maps reachable from the atlas | **19** |
| Maps never surfaced anywhere in the atlas | **165** |
| Atlas embeds pointing at a non-existent map id | **2** (`beanbean_kingdom_full`, `sunshine_isles_full`) |
| Nations with no map config at all | 3 (`sarasaland`, `kongo_bongo`, `dreamland`) |
| Standalone `*-maps.html` files | 19, each an 18-line redirect shim to `maps-view.html?map=<id>` |

So the atlas exposes only the `*_full` overview of each realm. Every sub-region —
`dry_dry_desert`, `mordor`, `internet_deep_web`, all 29 Equestria provinces, all 17
Warhammer theatres — is defined, has POIs, and is completely unreachable from the atlas.

`beanbean_kingdom` and `isle_delfino` are worse than missing: they embed map ids that do
not exist in `MAP_DATA`, so `maps.js` silently falls back to `mushroom_kingdom_full`
(see `getMapIdForPage()`), showing the **wrong map** with no error.

## Why sub-regions were unreachable

`NATION_ATLAS_CONFIG` hard-codes one `mapFile` string per nation. There was no relationship
between a nation and the *group* its maps belong to, even though every `MAP_DATA` record
already carries a `group` field (`"Mushroom Kingdom Regions"`, `"Equestria"`, …) and
`map-ui.js` already groups by it for its own tab strip.

## The fix

1. **Derive the map set from `MAP_DATA` at runtime** instead of trusting hard-coded strings.
   A new `atlasMapsFor(nationId)` resolves a nation to its map group and returns every map
   in it, ordered by the existing `order` field.
2. **Region switcher inside the embed.** The atlas applet gains a chip row of every map in
   the realm's group; clicking one re-points the same iframe. No page navigation, no new
   HTML files.
3. **Validate before embedding.** If a configured map id is not in `MAP_DATA`, fall back to
   a real map from the same group rather than letting `maps.js` silently load Mushroom
   Kingdom. Fixes the two broken embeds.
4. **Fill the 3 missing nations** where a sensible group exists.
5. **Lazy-load the iframe** so the atlas page does not boot a D3 map applet before the
   reader scrolls to it.

## Result

| | Before | After |
|---|---|---|
| Maps reachable from the atlas | 19 | **182** (every map in each realm's group) |
| Atlas embeds pointing at a dead map id | 2 | **0** |
| Nations with a working map applet | 26 of 31 | **31 of 31** |
| Iframe boots before you scroll to it | yes | no (lazy, 320px margin) |

Region counts per realm now: Equestria 29, Warhammer/Karaz Ankor/Under-Empire 17, Midlands
and Monster Underground 16, Mushroom Kingdom / Koopa / Beanbean / Sarasaland 13, Internet 12,
Kivotos 10, Isle Delfino / Kongo Bongo / Dreamland / Animatopia 9, Middle-earth / Gondor /
Mordor / Rohan 8, Pokémon 7, Doughnut Hole 6.

The two broken ids were real bugs with a silent failure mode: `maps.js`'s
`getMapIdForPage()` defaults to `mushroom_kingdom_full` when a map id is unknown, so
Beanbean Kingdom and Isle Delfino were showing the **Mushroom Kingdom map** with no error.
The correct ids were `beanbean_kingdom` and `sunshine_isles` — the `_full` variants never
existed.

Verified in a real DOM: 28/28 routes, **31/31 atlas nations**, 97/97 articles, 0 failures.
Region switching swaps the iframe in place and updates the POI count and full-screen link.
