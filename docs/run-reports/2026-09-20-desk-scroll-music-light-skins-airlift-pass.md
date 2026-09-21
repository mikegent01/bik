# Run report — desk scroll, site-wide desk music, light-mode skins, and the Airlift writing pass

**Filed:** run dated 2026-09-20
**Branch:** `arena/01a0c168-bik` (carried by open PR #79)

---

## 1. What was asked, and the judgement calls

Four asks, in the user's words:

1. **"When you click on a skin it shouldn't push you to the top of the page."**
2. **"Make the music actually play throughout the website, or at least try to."**
3. **"These themes need to work in dark and light mode — right now light mode breaks them."**
4. **"Do a pass of *The Airlift That Never Came* with the reading guidelines … there might be other images for the file just not linked, if there is link them, but i think we need another writing pass on it."**

Judgement calls, from the repo's own records:

* **The desk's reader-local rules still hold** (run reports of 2026-09-19 / 2026-09-21):
  no XP, no writes into `DATA`, desk state in its own `localStorage` key only.
  None of the new code touches canon.
* **Ask 2's ceiling is honest: persistence across *navigation*, not across *reloads*.**
  The desk player is audio-context state and already survives the hash router
  (the app is one page); the change makes that visible and controllable from
  anywhere. Nothing autoplays after a reload — browsers block it and the desk
  promised "they never autoplay." That promise stands.
* **Ask 4's image suspicion resolved to a negative.** All seven
  `airlift-never-came/anc-01..07` renders are already referenced: `anc-01` is
  the event hero (`image`) and `anc-02..anc-07` sit in the event `gallery`
  with captions. No unlinked airlift art exists on disk (no other directories
  match; `tools/sheets/` is not a thing). House convention keeps event art in
  the hero + gallery slots rather than inline figures inside
  `description`/commentary prose, so no new links were added. The real gap was
  prose: the commentary's back half had drifted out of voice, and one section
  failed the commentary checker outright (164 words against a 260 floor).
* **The "reading guidelines"** are `docs/COMMENTARY_MODE_GUIDE.md` enforced by
  `tools/check-commentaries.py --strict` (Waluigi ≥18/1k, CAPS ≥25/1k, sections
  260–900 words, no 220-word silent stretch, total ≥0.9× source). The pass
  targeted exactly those metrics in the thin/flat sections; the front half of
  the filing was already in voice and was left alone.

## 2. Files created or edited

```
CREATED
  docs/run-reports/2026-09-20-desk-scroll-music-light-skins-airlift-pass.md   this report

EDITED
  index.html                                     +88/-8  (sections 3, 4 below)
  Reputation-Matrix2/app/styles/waluipedia.css   +40     light palettes for the
                                                 seven older skins + now-playing
                                                 chip styles + deskEq keyframes
  Reputation-Matrix2/data/commentaries.json      4 `body` fields rewritten/
                                                 expanded in the airlift cut
  tools/tests/test-appearance-chronology.mjs     +11 assertions (186 pass, was 175)

GENERATED (do not hand-edit — generator: tools/track-filing-updates.py --write)
  Reputation-Matrix2/data/filing-updates.json    pass 11: the_airlift_that_never_came
                                                 recorded changed by the prose pass
```

No deletions. No new images, no new audio files, no new data files.

## 3. What changed in `index.html`

**Scroll preservation (ask 1).** New `deskRerender()` sits between every
in-page desk action and `view_desk()`: it snapshots `window.scrollY`, renders,
and restores the position. Twelve call sites now route through it — deskEquip,
deskBuy, deskEquipSheet, deskShopFilter, the deskPull tail, deskImport,
deskReset, the four waluipediaDesk handlers (keys/tokens/unlockAll/reset) and
the toggleDebug desk branch. Route entry (`#/desk` from the router) still opens
the page at the top, and that is now the only place a top-scroll remains.

**Site-wide music (ask 2).**
* The desk player already survives navigation (single-page app, `DESK_AUDIO`
  lives outside `#content`); what was missing was any way to *see* or *stop* it
  away from the desk. New `deskNowPlaying()` pins a small chip bottom-left —
  animated equaliser, track name, **stop** — appended to `document.body`, so
  route renders never disturb it. Clicking the chip toggles the playing track.
  `deskAudioPlay`/`deskAudioStop` keep it in sync; “equipped” was updated to
  the truth: *keeps playing as you browse; the chip, bottom-left, stops it.*
* **The ambient truce.** Two players now share the page, so each must yield:
  `deskAudioPlay` pauses `WaluipediaAmbient` if it is running, and
  `deskAmbientBridge()` wraps the ambient widget's public `toggle` once (lazy —
  the module loads `defer`) so starting ambient audio stops the desk track.
  The widget's own internal ▶ path lives in a closure and cannot be wrapped
  from outside (see OPEN below), so a capture-phase click guard
  (`deskAmbientGuard`, registered from `boot()`, the file's sanctioned place to
  touch globals) watches clicks on every `[data-walu-music-*]` control and
  stops desk audio when the ambient UI is used.
* The desk track-card copy now says the track never autoplays but keeps
  playing across the whole site once started.

## 4. What changed in `waluipedia.css`

**Light-mode palettes (ask 3).** In dark mode every skin's `body` rule sets a
moody background with `!important`; the light-mode cascade never overrode
moody, so equip + light = pages the global light rules couldn't reach. Each of
the seven older skins now ships a light pair beside its dark rules:

```
html[data-theme="light"][data-skin="<id>"]{ --bg/--surface/--panel/--text/--muted/--accent }
html[data-theme="light"][data-skin="<id>"] body{ background:…; color:…; !important }
```

snowdin, regency, feyward, ember, shadowfell, wahwire, oracle. The four
campaign skins (inkarchive, grovefire, planarglass, legionbrass) already had
light handling through the generic `[data-skin] body` rule via
`--campaign-skin-image` and were untouched. Specificity: the new rules tie the
dark skin rules and win by source order, and the field-sheet light/dark washes
still sit later in the file. The default skin needs nothing — light is its
natural state.

**Chip styles.** `.desk-np` pill (fixed, bottom-left, z 451 — the ambient
widget owns bottom-right), `.desk-np-eq` three-bar equaliser with a `deskEq`
keyframes pulse, `.desk-np-stop` stop label, small-screen nudge.

## 5. The Airlift writing pass (ask 4)

Target: `the_airlift_that_never_came_commentary` — the checker reported one
hard error and the closing sections read flat.

| Section | Before | After | What happened |
|---|---|---|---|
| `the-last-view-of-the-grove` | **164w — ERROR** | 381w | rewritten from two paragraphs into the full closing section it was meant to be: the unshared exits itemised, the sincere beat kept and extended, the record-silence handled in voice ("the paper does not say…"), final line lands on the missing helicopter |
| `the-grove-was-not-one-fight` | 353w, 1 caps-line | 383w | "FIVE EMERGENCIES. ONE ADDRESS."; succession-meeting beat; helicopter caps |
| `separate-exits` | 365w | 379w | Remi's sequence capped (ASSESS. RE-ARMOUR. TREAT. RE-ARM. LEAVE.); the coupon rejection voiced; "THE WORD WAS AN AIRLIFT. THE EVENT WAS A COLLECTION OF PRICES." |
| `what-the-file-can-prove` | 333w | 358w | "STATEMENTS FLOAT. ACTIONS LAND."; the paper-refuses refrain capped |

The other six sections (the-shoulder 634w … verdict 298w incl.) were already in
voice and are byte-identical. No new facts were introduced — jokes are
Waluigi's, events are not; every record-silent spot is labelled in voice.

**Checker, before → after:** ERROR (one thin section) → **PASS, strict**. Whole
cut: 3,870 → 4,156 words; 0.91x → **0.98x** of source (4,248 w); Waluigi 19.4
→ 19.5 /1k; CAPS 31.8 → **43.3** /1k; sections now 298–634 words.

No XP awarded this run. The filing-ledger regenerated itself around the prose
change (pass 11); nothing else in `filing-updates.json` moved.

## 6. Verification

* `python3 tools/check-all.py` → **All requested checks passed** (commentaries
  strict, event art, commerce joins, boot refs, page assets, the mjs suites…).
* `node tools/tests/*.mjs` — 31/31 suites green; appearance/chronology 186
  assertions, including new contracts: route entry scrolls to top while every
  in-page desk action goes through `deskRerender()`; the chip lives on
  `document.body` and is styled; `deskAudioPlay` pauses the ambient playlist;
  the ambient controls stop the desk in return; no autoplay after reload; and
  every non-default skin owns both a light palette rule and a reachable
  light body background.
* `python3 tools/track-filing-updates.py --write` → pass 11 written, one entry.
* The two DOM suites (alliance cache, map lenses) needed `jsdom`, which the
  sandbox lacked; installed `npm install --no-save jsdom` for the run —
  nothing committed. With jsdom present both pass (11 and 81 assertions).

## 7. NOT DONE / OPEN

* **The ambient widget's own ▶/enable path is a closure and cannot be wrapped
  from outside** (`waluipedia-ambient.js` internal `start()`). All DOM routes
  into ambient audio are covered by the capture-phase click guard, but a
  future programmatic `WaluipediaAmbient.enable()` call would start ambient
  audio without stopping a desk track. Fix belongs inside the ambient module
  itself (publish a hook or let the desk own the interop); filed here rather
  than hacked around a deferred script twice removed.
* **Persistence across reloads was deliberately not built** (no autoplay:
  browser policy + the desk's own promise). A "resume last track" prompt would
  be a separate, consent-first feature.
* **Inline figures inside the event description were NOT added** — house
  convention is hero + gallery, and all 7 `anc-*` renders were already
  reachable there. If you want figures mid-description, that's a convention
  change worth doing deliberately, for every event, not just this one.
* The events/battles prose of the airlift filing itself (`description`,
  `waluigiAssessment`) was left byte-for-byte as canon; the pass stayed in the
  commentary where the guidelines live.
