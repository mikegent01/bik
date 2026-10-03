# Discovered Technology — the ledger, the 3D models, and the tension board

**Route:** `#/technology` (also `#/tech`, and the old sub-app's `#/research`).
**Data:** `Reputation-Matrix2/data/technology.json`.
**Code:** `assets/technology/technology.js` (views + tension arithmetic),
`assets/technology/tech-models.js` (3D recipes), `assets/technology/technology.css`.
**Checks:** `python3 tools/check-technology.py` (in `check-all`),
`node tools/tests/test-technology-page.mjs`, and the live boot
`node tools/tests/technology-live-smoke.mjs` (needs `python3 -m http.server 8765`).

---

## What it replaced, and why

The site had a technology section once. It lived in the old sub-app at
`Reputation-Matrix2/app/pages/research/` and it was a **procedural tech tree**:
thirteen nations, six categories, fifty invented nodes per category
(`research-names.js`, 3,378 lines of generated names), progress read straight
off the calendar (`DAYS_PER_TIER = 600`), and a seven-phase "global cycle"
(Calm → Discovery → Expansion → Tension → Conflict → Crisis → Rebirth) nudged
by regex matches on rumour titles. That cycle is the **country-tension system**
the archive half-remembers. It had a wheel with Tension at the top, and it was
the only place the site tried to say *how strained the world is*.

None of it could be traced to an article. No node named a filing; the wheel
turned because a rumour title contained the word "siege". When the main site
was rebuilt around `index.html`, the section was left behind — no route, no
sidebar link, nothing in search. Readers of the Rot-Zone filing could not ask
the archive "what was that pistol, and where else has one turned up?"

This system answers that question with a **ledger** instead of a tree, and it
keeps the one good idea the old page had — the cycle vocabulary — by deriving
it from the ledger instead of from rumour titles.

---

## The ledger

Every entry is a piece of technology a filing actually describes. The shape:

```json
{
  "id": "tech_paulos_courier_pistol",
  "name": "A Courier's Cheap Pistol",
  "kind": "weapon",                  // meta.kinds: weapon siege vehicle communications device construct magitek medical infrastructure
  "tier": "industrial",              // meta.tiers: dawn iron discovery industrial cosmic
  "icon": "🔫",
  "territory": {
    "nation": "mushroom_kingdom",    // nations.json id, or null
    "region": null,                  // meta.regions key for named contested ground (eastern_midlands), or omit
    "plane": "material",             // material | shadow | fey | mirror | disputed
    "location": "dr_toads_star_hill_clinic",   // locations.json id, or null
    "label": "Star Hill - the clinic's main street and the storehouse stairwell"
  },
  "origin": { "faction": null, "maker": "Unknown - cheap, and it jams", "holder": "paulo" },
  "firstSeen": {
    "event": "the_rot_zone_at_star_hill",
    "date": "2 Aethel, 1035 BF",
    "year": 1035,
    "timeCode": "TC:1035-09-02/MAT",   // optional; must equal the article's own timeCode
    "confidence": "filed"              // filed | estimated | unverified
  },
  "sightings": [ { "event": "...", "year": 1035, "note": "..." } ],
  "status": "With Paulo - jammed twice on the record ...",
  "summary": "One sentence.",
  "record": "Two to five sentences in the archive's voice: what the filing shows the thing doing.",
  "quotes": [ { "event": "the_rot_zone_at_star_hill", "text": "The pistol clicked." } ],
  "pressure": 2,                      // -3 .. +3, see below
  "tension": [ { "between": ["wario_enterprise", "mushroom_regency"], "weight": 1, "why": "..." } ],
  "model": { "recipe": "pistol", "palette": { "metal": "#5b5b66", "grip": "#4a2f1e", "accent": "#e0b400" } },
  "tags": ["rot-zone", "star hill", "paulo", "sidearm"]
}
```

### The rules the check enforces

| Rule | Why |
|---|---|
| **Quotes are verbatim.** `check-technology.py` normalises markdown, links, curly quotes and whitespace on both sides and then demands the words appear in the source article. | The ledger is a reading of the filings, not a second canon. A quote the article does not contain is an invention. |
| **`firstSeen.year` must be a year on the source article's date** unless `confidence` is `estimated` or `unverified`. | The year is what the tension board sorts on. "Approximately Highsun 22, 955 BF" is `955`, confidence `estimated`. |
| **Territory ids resolve.** Nation in `nations.json`, location in `locations.json`, region in `meta.regions`. | A territory the atlas cannot find is a territory the board cannot show. |
| **Faction keys resolve** (`factions.json` ∪ `factionColors.json`); holders resolve in `characters.json`. | Strain between two factions nobody has filed is noise. |
| **`pressure` is an integer in [−3, 3]; tension weights 1..3 with a `why`.** | Keeps the arithmetic legible: a reader can recompute a territory by hand. |
| **`model.recipe` exists in `tech-models.js`.** | The viewer must have something to build. |
| **At least one quote per entry.** | No quote, no entry. |

### What counts as technology

A machine, weapon, instrument, vehicle, line, or device that a filing shows
**doing something** — or that a character describes with enough specificity
that the archive would be lying to leave it out (the kitchen portal device at
Raventree is on the ledger as `unverified` for exactly that reason). The
Legion's airlift that never came is on the ledger too: a piece of technology
that exists in the Legion's sentences and nowhere else on the record is a fact
about the Legion.

Not technology: magic that is only magic (Ice Storm), paperwork (file it as a
prop), terrain, animals.

### Pressure — the one authored number

`pressure` is the filer's reading of what the filing shows the thing **doing
to the ground it stands on**:

| Value | Reads as | Examples |
|---|---|---|
| **+3** | Arms the territory outright | Siege machinery against a residence; artillery carried onto contested ground; a device that could close every portal |
| **+2** | A weapon used, or a war asset positioned | A pistol fired in a clinic street; a military airship at a border keep; a transport flown into a crash |
| **+1** | Armed presence, surveillance, or a promise with force behind it | A musket given as a gift; a drone in a castle; an airlift promised and not delivered |
| **0** | Neutral | A telephone, a coffee machine, a syringe used as issued |
| **−1** | Settles or connects | A printing press; a warp pipe; a telescope; a maglev line |
| **−2 / −3** | Reserved for things that end a conflict on the record | (none filed yet) |

Pick it from the quotes. If you cannot point at the sentence that justifies
the number, lower it.

---

## The tension board (`#/technology/tension[/<year>]`)

Nothing on the board is authored. For a chosen year **Y** (default: the archive
clock, `currentDate.json`):

```
weight(appearance)   = 1.0  same year     0.7  one year back
                       0.4  within 5 yrs  0.15 older or undated
                       0    not yet filed (year > Y)

contribution(entry)  = Σ over dated appearances (firstSeen + sightings)
                         pressure × weight
                       capped at ±1.5 × |pressure|        -- seen four times ≠ four things

territory score      = Σ contribution(entry) for entries on that ground
```

A **territory** is the nation id when the entry names one, else the named
region (`region:eastern_midlands`), else the plane (`plane:shadow`). The
Shadowfell's strain is the Shadowfell's.

The score is **banded with the old wheel's vocabulary** so a reader of the
original research page recognises the readings:

| Band | Score | Reads as |
|---|---|---|
| Cycle of Calm | ≤ −1.5 | Tools and medicine outnumber weapons on the record |
| Cycle of Discovery | ≤ 1 | New things on the record and nobody shooting yet |
| Cycle of Tension | ≤ 3 | Arms are on the ground and the filings say who is pointing them |
| Cycle of Conflict | ≤ 6 | Weapons have been used in the territory this cycle |
| Cycle of Crisis | above | Siege machinery, artillery or planar hardware in play |
| Cycle of Rebirth | derived | Score fell by ≥ 3 since the previous filing year and sits ≤ 1 |

(The old wheel's *Expansion* phase had no honest source in a ledger of things
and is not used.)

**Faction strain** is the second output: each entry's `tension[]` edges are
summed across the ledger with the same recency weight, giving "who is strained
with whom" — every pair lists the entries and the `why` lines behind it.

Every number on the board links to the entry, and every entry links to the
filing. That is the whole improvement over the old system: **it can be argued
with.** If the Kingdom reads Crisis in 1035 BF, the page shows you the claw,
the helicopter and the pistol, and the three articles they came from.

### Reading the current board

As of the archive clock (1040 BF): the contested Eastern Midlands reads
Conflict (Bowser's Bullet Bill cannon, the Raventree portal device), the
Mushroom Kingdom reads Conflict (the Debt Siege arc at five years' distance),
the Regal Empire and the Shadowfell read Tension. Switch the strip to 1035 BF
and the Kingdom reads Crisis on the night of the Debt Siege. Switch to 955 BF
and the Kingdom sits below zero: a printing press and a maglev line, no guns
yet.

---

## The 3D models

Each entry names a **recipe** in `assets/technology/tech-models.js`. A recipe
is a list of primitive parts — box, cylinder, sphere, cone, torus — with a
size, a position, a rotation, a palette key, and optionally `e:true`
(emissive) or `spin:'y'` (animated: rotors, rings, brushes). `build(THREE,
recipe, palette)` turns the list into a `THREE.Group`, centres it on its
bounding box, and returns `{ group, radius, animate(dt) }`.

Three.js (`three@0.160.1`, ES module) is **lazy-loaded from jsDelivr** the
first time a viewer mounts — the same CDN the site already uses for Chart.js.
Set `window.THREE_MODULE_URL` before the page scripts to point at a vendored
copy. Without the network, or without WebGL (jsdom, file://, a locked-down
browser), the viewer shows the entry's icon and a one-line note; the ledger
still reads. One renderer is live at a time; `TECH.unmountViewers()` runs on
every technology route change and disposes the context.

The models are stand-ins, and the entry page says so. They exist so a reader
can turn the thing over — a yellow claw with a W plate, a pistol with a
hammer, a helicopter with its door on the side — not to be looked at closely.

### Adding a recipe

```js
T.my_thing = (P)=>[
  box(1.0, 0.4, 0.6, [0, 0.2, 0], 'body'),              // w,h,d, position, palette key
  cyl(0.05, 0.05, 1.2, [0, 0.9, 0], 'mast'),            // rTop,rBottom,h
  box(2.0, 0.04, 0.12, [0, 1.5, 0], 'blade', {spin:'y'}),
  sph(0.1, [0.4, 0.3, 0.3], 'lamp', {e:true}),
];
```

Palette keys are whatever the entry's `model.palette` supplies; unknown keys
fall back to grey. `tools/check-technology.py` parses recipe names with
`^\s*T\.(name)\s*=` so the recipe must be declared on its own line.

---

## Where it shows up

| Surface | What |
|---|---|
| Sidebar → World → **🔬 Discovered Technology** | count of entries |
| `#/technology` | the ledger: hero with a turning featured model, "where the pressure is", kind / era / territory filters, a tile per entry |
| `#/technology/<id>` | entry page: model viewer, the record, the verbatim quotes with source links, sightings, pressure and strain, nearby entries |
| `#/technology/tension[/<year>]` | the board, with a year strip for every year on record |
| `#/technology/territory/<key>` | one territory: every driver as a table (pressure × weight = contribution, source filing), the by-year strip, the entries |
| Event pages → *The file behind this record* → **🔬 Technology** tab | the entries first seen or seen again on that filing |
| Research Bureau (search) | kind `Technology`, routed to the entry page |
| Home → updates rail | the `kind:"route"` SITE_UPDATES card |

---

## Filing a new piece of technology (the step in the session pipeline)

After the event is written (Step 5) and the exhibits are filed (Step 6):

1. Read the event prose for machines, weapons, instruments, vehicles, lines.
   For each: is it **doing something** on the record, or described with
   specificity? If neither, skip it.
2. Is it already on the ledger? Search `technology.json` by name and tag. If
   yes, add a **sighting** `{event, year, note}` and, if the status changed
   (wrecked, confiscated, handed over), update `status`.
3. If new: copy the nearest entry, fill every field, pick the nearest recipe,
   write one to three **verbatim** quotes from the event text, choose
   `pressure` from the table above, add `tension[]` edges only between faction
   keys that exist, and tag it with the arc name.
4. `python3 tools/check-technology.py` — fix every line it prints.
5. `node tools/tests/test-technology-page.mjs`.
6. Mention the entries in the run report under cross-system updates.

The Rot-Zone filing's own pass added: `tech_paulos_courier_pistol` (new),
`tech_wario_transport_helicopter` (sighting: wrecked on the storehouse roof),
`tech_enterprise_field_radio` (sighting: the informant's "private wing" line).

---

## Decisions

- **Ledger, not tree.** A tree of invented nodes cannot be checked; a ledger of
  quoted sightings can. The check refuses what the archive cannot back.
- **Derived tension.** The one authored number is per-entry `pressure`, chosen
  from quotes. Everything above it is arithmetic shown on the page.
- **Old vocabulary kept.** Calm / Discovery / Tension / Conflict / Crisis /
  Rebirth are the old wheel's words, so the continuity is honest; *Expansion*
  is dropped because nothing on a ledger of things can source it.
- **Region buckets for contested ground.** Raventree is not the Kingdom and
  not the Empire; `meta.regions.eastern_midlands` gives it its own row rather
  than lumping it into "the material plane".
- **Lazy CDN Three.js with a plain fallback.** Matches the Chart.js precedent;
  nothing on the page depends on the model loading.
- **Script-scope globals.** `index.html` declares `esc`, `el`, `Router`, `DATA`
  and `CUR` with top-level `const`/`let`, which puts them in the global
  *script scope*, not on `window`. `technology.js` reaches them by name through
  an indirect `eval` and falls back to a stub `window` in tests. Don't "fix"
  this by reading `window.esc` — it is undefined in the real page.
- **The old research page stays where it is.** Nothing in
  `Reputation-Matrix2/app/pages/research/` was deleted; it is an unrouted
  prototype now, listed in `docs/ARCHITECTURE_AUDIT.md` as superseded.
