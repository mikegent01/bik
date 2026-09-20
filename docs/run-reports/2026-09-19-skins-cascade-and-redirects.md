# Run report — skins did nothing (a CSS cascade bug), and 21 redirects

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`

---

## 1. You were right: the skins did nothing

Not a wiring problem — a **CSS cascade** problem, and it was my bug.

```css
html[data-skin="ember"] body { background: …ember…  !important; }   /* line 66  */
html[data-theme="dark"] body { background: …purple… !important; }   /* line 129 */
```

Both selectors are specificity **(0,2,1)**. Both use `!important`. When two
declarations tie on both, **source order decides** — and the theme rule came
later. Since every page loads with `data-theme="dark"` set, the theme repainted
the background over the skin on every single load. The skin's *variables*
applied, but the page background — the thing you actually see — did not.

**Two fixes, belt and braces:**

1. The whole skin block moved **below** the theme rules, which settles the tie.
2. Selectors became `html[data-skin][data-skin="ember"]`, raising specificity to
   (0,3,1) so skins still win if anybody reorders the file later.

**Guarded by a test.** It asserts the skin backgrounds are declared after both
theme blocks. I proved it works by putting the skins back above the theme rules:
it failed with *"skin@2276 vs dark@5921"*, then passed again once reverted.

## 2. You were right about redirects too — 21 of them

Reading the wanted list, many entries are not missing pages at all. `steely` is
filed as `rescue_of_steely`. `rakasha_azure` is `azure_rakasha` with the words
swapped. `thornpaw` is `chief_thornpaw`.

**21 redirects added**, dropping the wanted list **565 → 544**.

**Curated by hand, not generated — and that mattered.** A token-overlap pass
suggested 200 candidates; most were wrong. Sixteen were rejected after checking
the actual records:

| Suggested | Why it was rejected |
|---|---|
| `toadette_sr` → `captain_toadette` | Toadette **Sr.** is the print-shop mother from 955 BF — a different person |
| `agent_l`, `agent_t` → `gamma_agent` | distinct named agents, not the Gamma Division one |
| `dr_mario` → `mario` | the surgeon identity is deliberately unresolved in canon |
| `the_void` → `cosmic_void` | one is a culture, the other a place/concept |
| `god_toad` → `toad_lee` | scored 0.5 and is simply wrong |

I also corrected one of my own: `feyward_manor` first pointed at
`feyward_manor_basement`. The manor is `overgrown_manor`; the basement is a room
inside it.

**How they work:** the site already had an alias layer, so redirects slot in as a
curated table that resolves at render time. **The source data is never
rewritten** — a filing that says `spider_grove` still says `spider_grove`, it
just resolves. Curated entries are applied before the generic guesses and cannot
be overridden by one.

The Wanted board now shows an **↪️ Already redirected** card, so the same ids do
not get "fixed" again next month.

## 3. Verification

* `test-appearance-chronology.mjs` **139 passed, 0 failed** — ten new
  assertions. One older assertion needed updating because the skin selector
  changed shape; that was the change, not a break.
* `check-all.py` **59/61** — only the two known jsdom environment failures.
* Cascade order verified by parsing the stylesheet, not by eye.

## 4. What is left

* **544 genuine gaps** remain on the Wanted board. Those are real writing work.
* Roughly 180 more token-overlap candidates exist but are too weak to trust
  without reading each record. If you spot more while reading, they are a
  one-line addition to `ID_REDIRECTS` each.
