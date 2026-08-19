# CSS Style Guide — Matching Waluipedia Without Breaking It

Use this guide before changing site CSS. The site is a static archive with many
older pages, so CSS must be additive, scoped, and boring unless a feature truly
needs a new visual language.

---

## Core rule

> **Reuse the site's existing vocabulary first. Add a new class only when the
> existing vocabulary cannot express the layout or state.**

Preferred building blocks:

```text
.card · .prose · .wnote · .chip · .pill · .metabar · .breadcrumb
.infobox · .kv-list · .kv-row · .rel-chip · .article-layout
```

If a design can be built from those, do that. New CSS should make them more
comfortable in a specific context, not replace them with a parallel mini-site.

---

## Where CSS belongs

| Change | Put it here |
|---|---|
| Global typography/layout tokens | `Reputation-Matrix2/app/styles/waluipedia.css` only with extreme care |
| Event/article-specific compatibility fixes | `Reputation-Matrix2/app/styles/commerce-event-fixes.css` or a clearly named existing fix file |
| Investigation and article-analysis UI | `Reputation-Matrix2/app/styles/systems/investigations.css` under scoped selectors |
| Exhibits/props paper styling | `Reputation-Matrix2/app/styles/systems/exhibits.css` using documented `.pd-*` classes |
| Standalone app/page styling | that page's own folder, scoped to the page root |
| One event's art/prose layout | prefer data fields and existing `.prose`; avoid custom CSS unless absolutely necessary |

Do not add CSS to JSON prose. Raw `<div>` in prose is escaped; inline styles in
props are audited; event prose should not be a stylesheet.

---

## Scoping rules

Good:

```css
.article-analysis-layout .analysis-research { ... }
.event-reputation-panel .rep-effect-row { ... }
.wnote.wassessment { ... }
```

Bad:

```css
a { ... }
div p span { ... }
.card { margin: 40px !important; }
.prose em { color: red; }
```

A selector should answer: **which feature owns this?** If the answer is “the
whole site,” pause and prove it will not damage older pages.

---

## Fluid layout rules

Use fluid layouts so pages do not become crowded on narrow screens.

Prefer:

```css
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
max-width: 82ch;
flex-wrap: wrap;
minmax(0, 1fr);
overflow-wrap: anywhere;
```

Avoid:

```css
width: 700px;
height: 420px;
left: 313px;
white-space: nowrap;   /* except for small badges */
```

If a panel has rows with text and numbers, make the row responsive:

```css
.my-row { display:grid; grid-template-columns:minmax(0,1fr) auto; }
@media (max-width:680px){ .my-row { grid-template-columns:1fr; } }
```

---

## Waluigi assessment / note blocks

Short asides use `.wnote`; long assessments should use a modifier so they read
like prose, not a cramped margin joke:

```html
<div class="wnote wassessment">...</div>
```

Rules for long assessment CSS:

```text
□ do not italicize the entire block
□ keep paragraph spacing
□ keep max-width around 75–85ch
□ emphasize bold claims with accent color
□ preserve link readability
```

---

## Reputation Impact panel rules

The reputation panel is a ledger. It must remain scannable.

```text
□ operator blocks are visually separated
□ each faction delta is a boxed row
□ positive and negative values have distinct colors
□ raw and decayed values remain visible
□ mobile layout stacks instead of squeezing
```

Do not style it as loose inline links. If the panel becomes a wall of blue text,
the CSS has failed.

---

## Images and article CSS

A new substantial article should ship with images. Use data fields first:

```json
"image": "assets/images/events/<slug>/<file>.jpg",
"imageCaption": "Archive-voice caption."
```

Section images use the same fields on the section object. Do not use CSS
background images for story art unless a renderer explicitly supports that
pattern. Compress generated images before committing; see
`IMAGE_GENERATION_GUIDE.md`.

---

## Anti-patterns

Do not:

- globally restyle links, cards, prose, or headings to fix one panel;
- add `!important` unless overriding legacy inline styles is the only option;
- make one feature a separate visual website inside the archive;
- hide data to make layout easier;
- use decorative text inside generated images unless the story requires exact
  lettering;
- rely on fixed pixel dimensions for content panels;
- invent new exhibit `.pd-*` classes without adding and documenting them in
  `exhibits.css`.

---

## CSS verification checklist

Before finishing a CSS change:

```text
□ Check the changed page in dark and light themes
□ Narrow the viewport below 700px
□ Confirm links remain readable
□ Confirm the panel still works with long names and long titles
□ Run python3 tools/check-all.py
□ If changing investigations/exhibits, run their specific checkers
□ Mention exactly which CSS file changed in the run report
```

For major styling changes, open the page with a static server and inspect the
actual rendered panel. A checker can tell you a file exists; it cannot tell you
that a paragraph looks crushed.
