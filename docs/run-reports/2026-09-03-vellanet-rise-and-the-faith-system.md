# Run report — Vellanet Rise art, alternating lead images, and the faith system

**Date:** 3 September 2026
**Branch:** `arena/01a069d5-bik`
**World clock:** 5 Aethel, 1040 BF
**Follows:** `2026-09-03-jack-miser-expansion.md` (same branch, same PR)

---

## Purpose

Three things the owner asked for, in their words:

1. Generate an image for the Vellanet Rise page, and use the AI-generated people
   for alternating images.
2. Make religion a factor — "we have a lot of religion systems not integrated."
3. Add the page and integrate it into the hyperlink system, article system, and
   character system.

The first two were reported against a real defect: the Vellanet Rise summary card
was leading with the family group portrait. That is the wrong art for a location —
a place page showing six people.

---

## The problem, stated

### Wrong lead art
`vellanet_rise.image` pointed at `portraits/miser_family.png` because it was the
only Miser art that existed. A location page was illustrated with a family portrait.

### An entire system nobody had read
`Reputation-Matrix2/data/support/religion-data.js` is 998 lines. It exports
`RELIGION_DATA`: four cosmological groups, a group-versus-group compatibility
matrix scored 0–100, five named consequence bands, and **fifty denominations**,
each with a leader, a seat, a blessing, a standing edict, an entry rite, a daily
liturgy, weekly observances, saints and heresies.

`index.html` contained **three** occurrences of the string "religion", all of them
incidental `religion_breakdown` fields inside species census data. Fifty faiths, a
working tension model, and a standalone Chart.js dashboard at
`app/pages/religion/`, and the main archive never once read any of it. It was not
under-used. It was unreferenced.

---

## What changed

### 1. Vellanet Rise has its own plate

Prompt sheet written first per `docs/IMAGE_GENERATION_GUIDE.md`
(scratch at `/tmp/vellanet-prompts.md`), art direction taken verbatim from the
article's own prose rather than from vibes. Every required noun came off the page:

> "a fortified manor on a shoulder of high ground, three tenant villages below it,
> a mill on the river, a quarry cut into the ridge, and the toll rights on the road
> that ties them together"
> "a curtain wall a good siege engineer would call optimistic"
> "Cold uplands; long wet springs, short harvests, a road that closes twice a winter"

`Reputation-Matrix2/assets/illustrations/vellanet_rise.png` — wide establishing view
containing, and verified against, all seven checklist items: modest fortified manor,
three villages, watermill, quarry cut, toll road with post, paved muster yard with
forge smoke, cold upland weather. Deliberately **no people, no readable heraldry,
no grandeur** — the whole editorial point of the article is that the holding is small.

### 2. Alternating lead art — the backlog renders are now used

New `imageAlternates[]` field on any article record, and a lead-image rotator in
`articleLead()`:

```json
"image": "portraits/jack_melvus_miser.png",
"imageAlternates": [
  { "src": "portraits/alternates/jack_melvus_miser-alt.png",
    "caption": "Alternate: a painted commission of the same likeness in Order colours.",
    "credit": "Non-canon study — machine-rendered from the pencil sheet." }
]
```

**Frame 0 is always `image`.** A reader who never touches the control sees exactly
the canon hand-drawn plate; the alternates sit behind an arrow-and-dots control and
each carries a `credit` line saying what it is. This honours both standing
instructions at once — the hand-drawn art stays canon, and the AI renders stop
being dead weight on disk.

The two backlog renders were promoted out of `assets/backlog/miser-family/` to
`Reputation-Matrix2/portraits/alternates/` and are now surfaced as frame 2 on
`jack_melvus_miser`, `miser_family` and `vellanet_rise`. `assets/backlog/README.md`
was rewritten to document the promotion rule (alternates yes, canon no).

### 3. The faith system is online

`loadReligionSystem()` runs at boot beside `loadCultureSystem()`, failing soft.
A faith is now a first-class archive entity:

| Integration | What it means |
|---|---|
| **Hyperlink system** | All 50 denominations are in `buildLinkRegistry()` at priority 71. "The Silver Flame" in any prose auto-links to its faith page, with hover preview. |
| **Article system** | `faiths:[{id,role,note}]` on any record renders a Faith & Observance panel above the prose, group-coloured, with roles and per-record notes. |
| **Search** | 50 faith docs in `SEARCH_DOCS`, matching on name, leader, seat, organisation, blessing, edict, saints and followers. |
| **Routes** | `#/faiths` (index + live compatibility matrix), `#/faith/<id>` (full faith page). `#/religion` and `#/religions` alias to the index. |
| **Navigation** | "✧ Faiths & Doctrine" in the World section of the sidebar, counted. |
| **Dashboard** | The index links out to the existing standalone `app/pages/religion/religion.html`, which was previously reachable from nowhere. |

**The friction is computed, not asserted.** When a record declares two faiths the
panel reads their groups out of `compatibility_matrix`, resolves the score against
`tension_consequences`, and prints the band name, its description and its mechanical
effects. Nothing in the prose states a number the data does not produce.

### 4. Religion made a factor for the Misers

Faiths were assigned from the existing register — **no new denominations were
invented**. The assignment is demographically consistent: `silver_flame_faith` is
seated at "Flamekeep (Midlands)" and its own description says it is *"Popular among
Humans in the Midlands"*, which is exactly where the Misers are from.

| Record | Faiths | Computed friction |
|---|---|---|
| `jack_melvus_miser` | Silver Flame (Sworn) + Order of Maat (Advised, via Lunaria) | 0 — Harmonious Integration |
| `miser_family` | Silver Flame (Nominal) + Lunar Cycle (Neighbours) | 25 — Minor Friction |
| `vellanet_rise` | Silver Flame (Manor chapel) + Lunar Cycle (Two of three villages) | 25 — Minor Friction |
| `order_of_jack` | Silver Flame (Chaplaincy of record) | — |

The lore this produces is a real, load-bearing tension rather than a label:

- Jack did not choose his faith. The Regal Lion swears knights in a Flamekeep rite;
  he was fifteen and it was the door. Eleven years of daily liturgy, no doctrinal
  conviction on record.
- His grant contains **two Lunar Cycle villages** that predate the manor. The Silver
  Flame's standing edict gives inquisitors free rein in allied territory. The tenure
  roll records the upper villages as tenants and does not record what they believe,
  and that omission is now the most deliberate piece of paperwork on the estate.
- The Order's Flamekeep-ordained chaplains carry one unwritten standing instruction:
  do not raise the Edict against a tenant of the Rise. Confirmed from three serving
  chaplains, none of whom would write it down. That is a commander directing ordained
  clergy to disregard their own church's edict — not currently a crime only because
  nobody has filed it as one.
- Lunaria's Order of Maat is the counterweight. Both faiths are Celestial Order, so
  there is no crisis and the archive does not invent one; the difference is method.
  The Silver Flame asks *is this pure*. Maat asks *is this true*. The person who
  finally audited the Order's famous twenty-thousand figure was the one whose faith
  requires her to.

New prose: two sections on Jack, one on the family, two on Vellanet Rise, one on the
Order. All of it opens threads rather than closing them, per the archive's house style.

---

## Cross-system updates (per `docs/CROSS_SYSTEM_UPDATES.md`)

- **WAHwire** (every-filing rule): post `wahwire_the_rise_upper_villages`, order 15,
  Waluigi in voice, suspicion tone, linking `vellanet_rise` and `order_of_jack`.
- **SITE_UPDATES**: new entry for the faith system, inserted at position 2 — never
  index 0, which `tools/check-home-feed.py` reserves for `mainPage.latestUpdate`.
- **Asset conventions**: backlog README rewritten; promotion path documented.
- Not triggered: songs, books, Pond Patrol, Diet, POIs, dynasties (House Miser
  unchanged this pass).

---

## Verification

A jsdom render harness was written because no headless browser is available in this
environment: **`tools/tests/test-faith-render.mjs`** (run a static server on 8765,
then `node tools/tests/test-faith-render.mjs`). It boots the real `index.html`,
substitutes for the one dynamic import jsdom cannot resolve, and asserts against
the live DOM.

```
ALL PASS (31 passed, 0 failed)
```

Covering: register loads (50 denominations) · faiths in search (50) · faiths in the
auto-link registry (50) · `#/faiths` renders with 50 cards and a 5-row matrix ·
`#/faith/silver_flame_faith` renders with its edict and its back-references · all
four Miser records render with the right card count · every friction string matches
what `compatibility_matrix` actually says · rotator frame 0 is the canon plate ·
next frame is the alternate · caption follows the frame · rotator wraps · Jack still
leads with the hand-drawn crop.

Also run:

| Check | Result |
|---|---|
| `node --check` on the 1.67 MB inline script | JS-OK |
| `python3 -m json.tool` on every touched store | valid |
| `tools/check-references.py` | PASS (403 legacy warnings, unchanged) |
| `tools/check-home-feed.py` | OK |
| `tools/check-all.py` | 20/22 — `injury table` and `investigations` fail on the untouched tree too (verified by `git stash`) |
| `tools/tests/test-home-feed-render.mjs` | ALL PASS (11/11) — no regression |
| `curl` on every new asset path | 200 |

`node_modules/` is gitignored; jsdom was installed with `npm i --no-save jsdom`.

---

## NOT DONE

- **Faith attached to only four records.** Fifty denominations are now live and
  addressable, but only the Miser cluster declares one. The mechanism is general and
  cheap to apply; populating the rest of the archive is a separate, larger pass and
  should not be smuggled into this one.
- **`religion_breakdown` in the species data is still not linked to the faith pages.**
  Those census maps use the same denomination ids, so a species card could link
  straight through to `#/faith/<id>`. Left alone deliberately — it touches the species
  renderer, which is out of scope here.
- **Miser dynasty members still render as emoji, not portraits.** They are absent from
  the hardcoded `boneLineIds` arrays in `visualDynastyMap` and `view_dynasty`. Carried
  over from the previous run report; still open.
- **Lunaria has no record of her own.** She is now cited on Jack's page as an Order of
  Maat cleric and is still a person the archive describes only through someone else.
