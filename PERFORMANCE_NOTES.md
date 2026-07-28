# Performance pass — what is actually slow

## Measured, not guessed

Profiled in a real DOM against the live data.

### 1. The auto-linker dominates article render time

| | |
|---|---|
| Imp Ambush article length | 33,967 chars, 185 paragraphs |
| Markdown → HTML alone | **2 ms** |
| Markdown + linkify | **660 ms** |
| **Linkify overhead** | **659 ms** |

`linkify()` loops all **2,738** alias regexes for **every** paragraph:

```
185 paragraphs × 2,738 entries = 506,530 regex executions per article
```

Almost all of them fail. `\bMushroom Kingdom\b` is tested against paragraphs that
contain no "M". This is the single biggest cost on the site, and it grows linearly as
the wiki adds entities — exactly the "gets laggier as the site grows" symptom.

**Fix — first-character prefilter.** Before running a regex, check whether its first
literal character even occurs in the paragraph. Building a `Map<char, entries[]>` at
registry-build time and unioning only the buckets whose characters appear reduces the
candidate set by ~95% on typical prose, with byte-identical output because it only skips
regexes that provably cannot match.

### 2. List views build 2,000–4,000 DOM nodes in one string

| View | Nodes | Render |
|---|---|---|
| list: events | 4,052 | 524 ms |
| list: characters | 2,703 | 389 ms |
| reputation | 2,303 | 438 ms |
| wanted | 2,303 | 271 ms |
| crafting | 2,048 | 260 ms |

Every row is rendered up-front even though only ~10 are visible. Capped rendering with a
"show more" control keeps the DOM small without hiding data.

### 3. Atlas nation page: 1,090 ms for 327 nodes

Not DOM — it is the map applet plus dossier linkify. The iframe is already lazy; the
remaining cost is the same linkify problem as (1).

### 4. What is *not* the problem

- **Search** — 5 full scans of 2,686 docs = 15 ms. Fine.
- **Total baseline DOM** — 685 nodes at rest. Fine.
- **index.html size (1.39 MB)** — a one-time parse, not per-interaction lag. Worth
  splitting eventually, but it is not what makes navigation feel slow.

## Iframe duplication (from the screenshot)

The Equestria applet showed the region list **twice**: once as the atlas chips added in
the last commit, and again as `maps.js`'s own tab strip inside the iframe. `map-ui.js`
renders a group tab strip whenever `?map=` is present, so the embed always had one.

Fix: pass `&chrome=0`, and have the embed CSS hide the in-iframe group tabs and the
duplicate search box, leaving the atlas chips as the single control surface.
