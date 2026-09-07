# Run report — Sidebar sections minimizable + tactical map full screen

**Date of run:** 2026-09-07 · **Branch:** `arena/01a07d38-bik` (stacked on PR #70, still open)
**Purpose:** two reader complaints from screenshots — (1) the sidebar
drawers (World Systems, …) could not actually be minimized; (2) the tactical
map sits in a small card column and is hard to read with everything around it.
**Process:** README PR rules.

---

## 1. Files created or edited

```
CREATED — hand-written
  tools/tests/test-nav-collapse.mjs               23 assertions, pure node (registered in check-all)
  tools/tests/atlas-fullscreen-smoke.mjs           16 assertions, jsdom manual-run (repo smoke convention)
  docs/run-reports/2026-09-07-sidebar-collapse-and-map-fullscreen.md  this file

EDITED — hand-written
  index.html                                       navSection: links wrapped in ONE .navbody child
                                                     (the actual collapse fix) + map-asset versions
                                                     unified to ?v=map6 on both mount sites
  Reputation-Matrix2/app/pages/maps/atlas-map-v2.js  ⛶ Full screen button, setExpanded, reframe()
                                                     shared with Reset view, once-guarded Escape +
                                                     route-change cleanup listeners
  Reputation-Matrix2/app/pages/maps/atlas-map-v2.css  .atlas-v2-full overlay rules (+ dvh overrides)
  tools/check-all.py                               + "sidebar collapse" check
```

No files deleted. No narrative prose touched.

## 2. Events filed

No events filed this run (UI fix, not a session filing).

## 3. XP awarded

No XP awarded this run.

## 4. What is not done / open

```
NOT DONE / OPEN
  · No browser in the sandbox: verified via node extraction tests (23/23),
    a jsdom mount-and-click smoke test (16/16), inline-JS syntax checks, and
    the full check-all suite. A human should click a sidebar header and the ⛶
    button once in a real browser.
  · Full screen covers the whole viewport including the #/maps journey
    stepper (it lives outside the renderer) — deliberate: full screen means
    just the map; Exit returns to the stepper. Stop banners still show in the
    renderer's own sidebar while expanded.
  · This commit stacks onto the still-open PR #70 rather than a fresh PR
    (session branch constraint); the PR body notes the follow-up.
```

## Root causes (for the record)

1. Collapse: `.navsec .navbody` uses the `grid-template-rows: 1fr → 0fr`
   collapse trick, which requires exactly one grid child — but `navSection`
   emitted every link as a direct child, so only the first row ever
   collapsed. The chevron rotated; the drawer stayed open.
2. Map size: the renderer viewport is a fixed 520 px inside a card column.
   The ⛶ button turns the mount host into a fixed overlay (z-index 3000,
   scroll-locked page, reframed pins) on both the atlas page and the
   `#/maps` desk, since both mount through `mountAtlasMapV2`.

## Verification log

```
node tools/tests/test-nav-collapse.mjs               23 passed, 0 failed
node tools/tests/atlas-fullscreen-smoke.mjs           16 passed, 0 failed (temp jsdom install, removed after)
python3 tools/check-all.py                           all 32 checks PASS (incl. new sidebar collapse)
node --check atlas-map-v2.js + index.html inline JS  OK
```
