# Quality Pass: making Cultural Spheres & Legal Traditions central

## Why nobody visits it

I audited how the page connects to the rest of the site. The finding is blunt:

**`#/cultures` is a dead-end leaf.** It is reachable from exactly one sidebar link, and
*nothing anywhere else in the encyclopedia points at it.*

Concrete measurements:

| Check | Result |
|---|---|
| Articles referencing a culture/law field | **0 of 262** (`nations`, `locations`, `factions`, `characters`, `races` have no culture field at all) |
| Traditions in the search index | **0 of 31** — searching "Trial by Combat" returns nothing |
| Traditions in the hyperlink registry | **0** — the phrase never links in prose |
| Traditions with their own page | **0** — they exist only as `title=` tooltips |
| Inbound links to `#/cultures` | **1** (the sidebar) |
| Tradition `followers` resolving to a real article | **14 of 54** |

So the loop is: read an event → the event never mentions applicable law → nothing links to
culture → you never go. And if you *do* go, you get a pie chart and 15 read-only cards with
no outbound path back into the story. It is a museum exhibit next to the actual game.

The data is genuinely good — 15 cultures, 31 traditions across 4 categories, 129 species,
12 regional legal profiles. It is just **orphaned**: `culture-data.js` / `legal_data.js` are
dynamically imported *inside `view_cultures()` only*, so the rest of the app literally cannot
see them.

## The fix: invert the direction

Rather than adding one more feature onto the culture page and hoping people visit, the
system is pushed **outward** to where players already are, and the culture page becomes the
hub that explains consequences.

1. **Traditions & cultures become first-class entities** — loaded at boot into a shared
   index, given real routes (`#/tradition/:id`), search entries, hyperlink-registry entries
   and hover cards. "Trial by Combat" now links from any prose that mentions it.
2. **"Law & Culture" panel on faction / nation / character / location articles** — reading
   the Iron Legion now shows the traditions it upholds and its cultural sphere.
3. **Legal friction detector** — events whose participants follow *contradictory* traditions
   (Masquerade vs Witch Hunting, Hospitality vs Looting Rights) get flagged. This turns the
   dataset into an analytical tool instead of decoration.
4. **Events surface the law that was in play** — derived from participants, so an event about
   a home invasion cites Right of Hospitality.
5. **The culture page becomes a hub** — each culture gets who follows it, which realms, which
   characters, and which events touched its laws, all cross-linked.

Everything is derived from relationships **already present in the data** (`primary_species`,
`traditions`, `followers`, `relatedArticles`), so no lore is invented.

## What shipped

### 1. Culture/legal data is now global
`culture-data.js`, `legal_data.js` and `species-data.js` load once in `boot()` into
`CULTURES` / `LEGAL` / `SPECIES`, then `buildCultureIndexes()` derives:
- `TRADITIONS` — 31 traditions flattened with their category and culture backlinks
- `CULTURE_OF_SPECIES` — species → sphere
- `CULTURE_BY_ARTICLE` — **299 articles** now resolve to a cultural sphere (was 0)

Article→culture is derived from five independent signals: culture `relatedArticles`
(merged from both `cultures.json` *and* the JS module, which disagreed), `primary_species`,
species **display-name** matching (`toad_citizen` → the `toads` article — the key
species-keys never matched article ids), tradition `followers`, and characters inheriting
from their faction / species / affiliations.

### 2. Traditions are first-class entities
Real route `#/tradition/:id`, search entries, hyperlink-registry entries and hover cards.
"Trial by Combat" now links from any prose that mentions it. Each page shows who follows
it, which spheres uphold it, what it collides with, and every recorded event involving a
follower.

### 3. Legal Friction detector
`LEGAL_CONFLICTS` declares 12 pairs of mutually-impossible traditions. `legalFrictionForEvent()`
reads an event's cast and reports which parties hold contradictory law. Sampling 40 events:
**37 show a "Law in Play" panel**, and scenes like `mount_ebott_survey_mission` surface
**5 legal collisions**. This is the bit that makes the dataset explain *why* a scene went wrong.

### 4. Law & Culture rail panel
On faction / nation / character / location / race articles, capped at 8 chips per section,
splitting laws the subject is *directly bound by* from ones merely *customary in its culture*.

### 5. The hub became a hub
`#/cultures` keeps its chart but gains **The Legal Codex** (all 31 traditions grouped by the
kind of power they claim, with follower counts) and **Where the Laws Collide** (a live table
of the most legally-contested scenes in the archive). Culture articles gained a reverse
roster — Imperial Heartland lists 50 records that live under it.

## Before / after

| | Before | After |
|---|---|---|
| Articles with a cultural sphere | 0 | **299** |
| Traditions searchable | 0 | **31** |
| Traditions linkable in prose | 0 | **37 registry entries** |
| Tradition pages | 0 | **31** |
| Events citing applicable law | 0 | **37 of 40 sampled** |
| Ways to reach the system | 1 (sidebar) | home tile, sidebar, per-article rail, connected-systems, event panels, prose links, search |

Verified in a real DOM: **30/30 routes and 97/97 articles clean, 0 failures**, and the
earlier `'Boss'` hyperlink fix still holds.
