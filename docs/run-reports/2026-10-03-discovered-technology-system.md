# Run report — Discovered Technology (ledger, 3D models, tension board)

Date: 2026-10-03
Branch: `arena/01a0feea-bik` (PR #89)

## Summary

The root site had no technology section — the only one ever built was the
procedural tech tree in the old sub-app (`Reputation-Matrix2/app/pages/research/`),
unrouted since the `index.html` rebuild, with its seven-phase "global cycle"
of country tension nudged by regex matches on rumour titles. This run replaces
it with a **ledger** of technology the filings actually show: 26 entries read
out of 20 events, every entry carrying verbatim quotes that a check verifies
against the article text, a turnable 3D model (first cut: Three.js from a CDN;
replaced the same day by the site's own renderer — see the addendum), and one
authored `pressure` number. The **tension board** derives
the old wheel's Calm → Discovery → Tension → Conflict → Crisis → Rebirth
readings per territory and the strain between factions from that ledger, for
any year on record, and every number links back to the entry and the filing.
Event pages gain a 🔬 Technology tab; the Research Bureau indexes the entries;
the sidebar carries the link.

## Files

CREATED
  `Reputation-Matrix2/data/technology.json`        26 entries · 46 verbatim quotes · 3 sightings · meta (kinds, tiers, regions, planes, recency weights, bands) — 1,711 lines
  `assets/technology/technology.js`                views (ledger, entry, tension board, territory), tension arithmetic, event-page panel, search docs, viewer mount/unmount — 577 lines
  `assets/technology/tech-models.js`               25 primitive-part recipes + `build(THREE, recipe, palette)` — 337 lines
  `assets/technology/technology.css`               scoped `.tech*` styles on the site's variables — 103 lines
  `tools/check-technology.py`                      the ledger check (ids, enums, territories, factions, holders, events, verbatim quotes, years vs article dates, recipes, index wiring) — 229 lines
  `tools/tests/test-technology-page.mjs`           57 checks against a stub window: data access, tension maths, every route's HTML, filters, event panel, search docs, viewer fallback
  `tools/tests/technology-live-smoke.mjs`          16 checks booting the real `index.html` in jsdom and walking `#/technology`, an entry, the Rot-Zone article's Technology tab, the board, a territory, `#/research`, search
  `docs/TECHNOLOGY_SYSTEM.md`                      the system guide: data shape, rules, pressure table, tension maths, bands, recipes, filing step, decisions
  `docs/run-reports/2026-10-03-discovered-technology-system.md`  this report

EDITED
  `index.html`                                     + stylesheet link; + two script tags after `rnn-broadcasts.js`; `DATA_FILES` + `technology`; Router `technology|tech|research`; sidebar link under World; apparatus band `tech` tab on event pages; SEARCH_DOCS push + label + click route; `SITE_UPDATES` route card after the Rot-Zone item
  `tools/check-all.py`                             + `technology ledger` (`tools/check-technology.py`) after investigations
  `docs/SESSION_FILING_PROCESS.md`                 Step 9 gains item 5 (technology ledger); later items renumbered; one-screen summary updated
  `docs/CROSS_SYSTEM_UPDATES.md`                   + trigger row for machines/weapons/vehicles/devices
  `docs/ARCHITECTURE_AUDIT.md`                     "Research and technology" marked superseded, pointer to the new guide
  `README.md`                                      + row for `docs/TECHNOLOGY_SYSTEM.md` in the how-the-work-is-done table

NOT TOUCHED
  `Reputation-Matrix2/app/pages/research/*`, `data/support/research-*.js` — the old prototype stays on disk, unrouted.

## Events filed

None. This run files no event; it reads twenty existing ones.

## XP awarded

None.

## The judgement calls

- **Ledger, not tree.** Every entry must be quotable; the check refuses entries whose quotes do not appear in the source article after normalisation. Nothing on the ledger is invented — including the models' labels ("stand-in").
- **One authored number.** `pressure` (−3..3) is read off the quotes per entry; the territory score, bands, Rebirth, and faction strain are arithmetic shown on the page. Recency weights 1.0 / 0.7 / 0.4 / 0.15; repeated sightings capped at 1.5× so a thing seen four times is not four things.
- **Old vocabulary kept, Expansion dropped.** The bands reuse the old wheel's phase names so the continuity is honest; *Expansion* had no source in a ledger of things.
- **Raventree is its own ground.** `meta.regions.eastern_midlands` gives the manor and its portal device a territory row instead of folding them into the Kingdom or "material plane".
- **Years and confidence.** `firstSeen.year` must sit on the article's date or timeCode unless `confidence` is `estimated`/`unverified` (the Shroob salvage is `estimated` at 963; the Star Sprite reactor is undated and counts 0.15).
- **Script-scope globals.** `index.html` declares `esc`/`el`/`Router`/`DATA`/`CUR` with top-level `const`/`let`; they are not `window` properties. The module resolves them by name (indirect eval) and falls back to a stub window in tests. The live smoke caught this; the stub-window suite alone could not.
- **Three.js from jsDelivr, same as Chart.js.** *Superseded the same day — see the addendum.* The CDN was unreachable from the sandbox, so the models could never be looked at, and a model nobody can see cannot be checked.

## Readings as of the clock (1040 BF)

| Territory | Score | Band | Top driver |
|---|---|---|---|
| Eastern Midlands (contested) | 6.0 | Conflict | Bowser's portable Bullet Bill cannon |
| Mushroom Kingdom | 4.1 | Conflict | Wario's transport helicopter (Debt Siege, 1035) |
| Regal Empire | 2.3 | Tension | Regal military airship |
| Shadowfell | 1.0 | Tension | The Legion's field syringe / promised airlift |

1035 BF: Mushroom Kingdom 9.2 — Crisis (the W-stamped claw first). 955 BF: Mushroom Kingdom −1.0 — Discovery (press, maglev, telescope).

## Verification

| Command | Result |
|---|---|
| `python3 tools/check-technology.py` | PASS — 26 entries, 46 verified quotes, 25 recipes, 0 problems, 0 warnings |
| `node tools/tests/test-technology-page.mjs` | PASS — 57 passed, 0 failed |
| `python3 -m http.server 8765 &` then `node tools/tests/technology-live-smoke.mjs` | PASS — 16 passed, 0 failed (real page in jsdom; no runtime errors on the routes) |
| `tech-models.js` built against real `three@0.160.1` in node | 26/26 recipes build, centred, finite radius *(first cut; replaced — see addendum)* |
| `node -e "new Function(src)"` on all three inline `index.html` scripts | parse |
| `python3 tools/check-all.py` | the three pre-existing failures only (judgement in the grove, alliance cache, map lenses) |

## What is left

- ~~The models are deliberately rough.~~ Done in the addendum below: real recipes, rendered and checked.
- Backfill: twenty events were read; the remaining hundred-odd have not been combed for machines. The filing step in `SESSION_FILING_PROCESS.md` keeps new sessions current; the backlog is a separate run.
- Pressure values are a first reading. Anyone who disagrees with a number can argue from the quotes on the entry page, which is the point.

---

## Addendum (same day) — real models, own renderer, no CDN

**Why.** The first cut lazy-loaded `three@0.160.1` from jsDelivr. The sandbox
cannot reach that CDN (curl exit 35), so not one model had ever been *seen*;
the recipes were twenty-odd grey boxes with a cylinder on top, and nothing in
the test suite could tell. A viewer that depends on a third-party host is also
a viewer an offline reader never gets.

**What changed.**

| File | Change |
|---|---|
| `assets/technology/tech-gl.js` *(new, ~550 lines)* | self-contained renderer: column-major `m4`, primitives (box, cylinder/cone, sphere, torus, lathe, prism — all watertight and orientation-proof), part-tree compile with explicit matrices / spin / bob / ghost / alpha / emissive, shared camera + Blinn-Phong-ish shading, **WebGL 1 path** (premultiplied alpha, two passes, `gl_FrontFacing` flip) and a **software rasteriser** writing RGBA pixels (used in-browser without WebGL and by node), `mount()` with drag / pinch / ctrl-wheel / double-click, ~24 fps throttle on the software path, self-teardown when the host leaves the DOM |
| `assets/technology/tech-models.js` *(rewritten)* | 26 recipes built from helpers (`lathe`, `prism`, `bar3`, `tube`, `helix`, `gear`, `letters`, `star4`, `grp`) that model what the articles describe — the W on the helicopter doors and its searchlight, the claw's hazard stripes and W plate, Paulo's pistol with hammer and trigger, the Bullet Bill emerging from Bowser's cannon, the garlic-bulb grenade, the EXIT coffee machine, the Clown Car's face, the Maglev on its rail, the cleaning golem's 7 and brush, the warp pipe on its Donut Plains mound, the Star Sprite reactor's star in its cage… each with a preferred opening angle |
| `assets/technology/technology.js` | `mountViewer` → `TECH_GL.mount(host, TECH_MODELS.build(recipe, palette))`; the help line names the path (WebGL / software renderer); `loadThree`, the CDN URL and `THREE_MODULE_URL` are gone |
| `index.html` | loads `tech-gl.js` before `tech-models.js`; `?v=tech2` |
| `assets/technology/technology.css` | canvas gets `touch-action:none` / `cursor:grab` |
| `tools/render-tech-models.mjs` *(new)* | renders every ledger entry (or `--only`, `--views` for four angles) to PNG with the software path; `--sheet` writes a contact sheet |
| `docs/images/technology-models.png` *(new)* | the contact sheet of all 26, so the models are on record as pictures |
| `tools/tests/test-tech-gl.mjs` *(new)* | 45 checks — see `docs/TECHNOLOGY_SYSTEM.md › What the renderer test proves` |
| `tools/tests/test-technology-page.mjs`, `technology-live-smoke.mjs`, `tools/check-technology.py` | no Three.js assumptions; the check now insists `tech-gl.js` loads first and that no Three.js reference remains in `index.html` |

**How the models were checked.** Rendered to PNG by the software path (the
same geometry, matrices and shading the browser uses) and looked at from
four angles each; the remote was found face-down (tilt sign), the radio
handset hidden on the far side (moved), the searchlight beam too hard-edged
(two faint cones) and the torus wound backwards against its normals (invisible
without culling, fixed anyway); the lathe and prism builders now fix their own
orientation so a future recipe cannot come out inside-out.

**Verification (this addendum).**

| Command | Result |
|---|---|
| `node tools/tests/test-tech-gl.mjs` | PASS — 45 passed, 0 failed |
| `node tools/tests/test-technology-page.mjs` | PASS — 58 passed, 0 failed |
| `node tools/tests/technology-live-smoke.mjs` (server on 8765) | PASS — 17 passed, 0 failed |
| `python3 tools/check-technology.py` | PASS — 26 entries, 46 verified quotes, 25 recipes, 0 problems |
| `node tools/render-tech-models.mjs --views` | 26 × 4 angles rendered; heaviest model 7 144 triangles |
| shaders through `@shaderfrog/glsl-parser` (ad hoc, not committed) | both parse as GLSL |
| `python3 tools/check-all.py` | technology ledger PASS; the three pre-existing failures only |

**Honest limit.** No GPU exists in this sandbox, so the WebGL path was
exercised against a recording stand-in (every uniform set, typed arguments,
buffers freed) and its shaders parsed, not run; the software path — which
shares every line above the draw call — produced every picture in this
report. The first real browser visit is the first real GPU frame.
