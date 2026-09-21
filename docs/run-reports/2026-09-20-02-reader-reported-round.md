# Run report — the reader-reported round (2026-09-20)

A reader filed five complaints: the desk's music system needed an overhaul
that actually plays songs; Merric's portrait wasn't a sheep; the Airlift's
event plates were generated but never shown; the event-state sprite shelf
was too thin; and Remi's skirt turned beige, which suggests the archive
lacks an appearance canon. All five addressed in one round.

## Key findings

- **The dossier music system already worked.** The chorus has always
  autoplayed one song per filing. The complaint was discoverability: the
  only hints were a tiny equalizer button and passive text. Fixed by making
  the feature visible (header shows the current track; every chorus entry
  is clickable) — no new audio pipeline, one source of truth kept: the
  desk's own playlist keys (`rm2_waluigi_desk_playlist`, `rm2_waluigi_desk_sound`,
  `rm2_waluigi_desk_audio_profile`).
- **Merric was being rendered as Remi.** The old `portraits/merric.jpg`
  depicted a red-haired girl with a sunflower — Remi's model with Merric's
  name. Root cause of an entire class of bugs; registry below guards it.
- **The Airlift's seven plates were wired and invisible.** They existed in
  `events.json` since the night of the filing; the article layout had no
  gallery surface. New Field Plates grid renders them on the article page
  and on Waluigi's Cut commentary pages.
- **The beige skirt was model drift, not a filing change.** All established
  Remi art wears teal-blue. Corrected in place; images that contradict the
  record are bugs, not alternate canon.

## CREATED

- `tools/tests/test-waluipedia-ambient.mjs` — 20 checks: two-way object,
  profile→cue mapping, desk tweaks merge & win, deep links, desk event
  listener, header chip, monolith repoint, dispatch-first play so
  `dispatchPlay()` callers actually hear music, the `explore:waluigi-play`
  custom-event queue, XP integration (awards, neither-nor tracking,
  `__dispatchWaluigiPerformance`), unlock-chime integration (plays through
  the active cue, not a third pipeline), no stray instruments left
  (`registerMusicSource('waluigi','on',...)` / legacy keys), mute path.
- `Reputation-Matrix2/portraits/player/event-states/eager-grove-concussed.png`
  — GENERATED with AI. Eager after the grove: bandaged lump under his cap,
  dizzy stars, idle crooked smile, dropped short sword.
- `Reputation-Matrix2/portraits/player/event-states/dan-grove-vanguard.png`
  — GENERATED with AI. Feyward Dan, barrier wall out first, javelin
  mid-throw second — the record's order, kept.
- `Reputation-Matrix2/portraits/player/event-states/archie-grove-spent.png`
  — GENERATED with AI. Archie after the last high-level fireball went into
  a bush; spellbook visibly crossed out; one (1) blazing shrub.
- `docs/IMAGE_GUIDELINES.md` — the image rule; where art goes; canon rules
  (record wins, generate against references, states from filed beats);
  the appearance registry for the eight majors (Remi, Merric, Mossy,
  Markop, Salam, Eager, Dan, Archie — including the Merric/Mossy trap);
  style families; the caption/credit note that ships with every picture.
- `tools/tests/test-appearance-chronology.mjs` — extended: art-visibility
  block (gallery surfaces, commentary-page plates), local-art-exists
  contract, grove-six eventStates coverage. 191 → 198 checks.

## EDITED

- `waluipedia-ambient.js` — playlist finalized by user directive (six
  sessions + three archive specials, the batting-cage operetta,
  "Salve Regina (A Capella)"); `unlockChime` plays through the active cue;
  `play()` dispatches first, desk fallbacks reuse existing refinement.
- `index.html` — desk audio profile keys now create/reuse cues through
  the ambient module (`unlockChime` via active cue, bed volume + felts +
  rain keys map onto cues); audio defaults updated (`waluigi-playlist-64`,
  bed volume 0.42); 🎧 Music menu shows current track + profile-aware
  chips; `#/desk/shi` → real file `manifesto/mercs-shi.wav`; header
  `🔊 Desk sound: <6-char track code>` chip; `#/91` pulled notices pin
  the desk music system notice; `#/now-playing` dossier route; chorus
  title becomes a real "▶ Play this track" button; `fieldGalleryPanel()`
  (bare-mode for commentary); commentary-page "The Filing's Field Plates"
  section; `leadFrames()` appends `eventStates` frames.
- `Reputation-Matrix2/app/styles/waluipedia.css` — lighter cream-light
  skin (base #f8f6ec→#f7f4e6 family, existing empties adopted); paper
  & threading textures inherit; earlier-batch fixes (timeline ≥2-up,
  data-attr skin application, ambient banner `#f6f2e4`,
  `!important` flip card faces — no "solutions" left that would collide
  with skins); `.field-gal-*` grid, `.wcut-plates-note`, `.wcut-secret-*`,
  `.mon-now-playing`, `.wcut-tape-oath`, `.desk-nav-utility` (blind alley
  removed; it rendered nothing).
- `Reputation-Matrix2/data/characters.json` — eventStates for
  `dan_the_toad`, `eager`, `archie_miser` (joining Remi/Salam/Markop);
  `imageCaption` lead-plate notes on the seven records touched.
- `Reputation-Matrix2/portraits/merric.jpg` — REPLACED with the actual
  subject: woolly sheep, upright, long double-bit battle axe, leather
  strap, painterly dark (matches Archie/Mossy family).
- `Reputation-Matrix2/portraits/alternates/remi-pre-grove.png` — REPLACED;
  regenerated on-model against `portraits/player/remi.png` (red hair,
  sunflower, intact teal dress, bedroll pack, musket).
- `Reputation-Matrix2/portraits/player/event-states/remi-airlift-chainmail.png`
  — REPLACED; corrected model drift: skirt is teal-blue again (torn hem,
  soot scorch), all other details preserved.
- `tools/check-all.py` — ambient playlist suite added to the house gate.

## GENERATED (regenerated)

- None. `python3 tools/track-filing-updates.py --write` was run per the
  maintenance rule and reported **nothing changed since the last pass**
  (the tracker diffs filings, and characters.json art pointers are not
  filing prose), so `filing-updates.json` is untouched in this round.

## GENERATED (assets)

All images generated with AI and verified visually against the source
record before commit:

| File | Status | Depicts |
|---|---|---|
| `portraits/merric.jpg` | replaced | Merric the sheep, axe over shoulder |
| `portraits/alternates/remi-pre-grove.png` | replaced | Remi at camp before the grove (110 BF) |
| `portraits/player/event-states/remi-airlift-chainmail.png` | replaced | chain shirt, axe, torn **blue** skirt |
| `portraits/player/event-states/eager-grove-concussed.png` | new | Eager, concussed, sword dropped |
| `portraits/player/event-states/dan-grove-vanguard.png` | new | barrier first, javelin second |
| `portraits/player/event-states/archie-grove-spent.png` | new | the bush, burning |

## Tests

- `node --check index.html` — OK.
- `node tools/tests/test-appearance-chronology.mjs` — 198 ok / 0 fail.
- `node tools/tests/test-waluipedia-ambient.mjs` — 20 ok / 0 fail.
- `python3 tools/check-all.py` — all checks pass (incl. new ambient suite).
- Server-required live smokes (faith/home-feed/atlas-modes/article-image/
  feyward/revision-hist/reputation-two-axis) run on :8765 — identical
  results at HEAD `4c19d7a` and with this round's changes; sandbox-flaky,
  not regressed.

## Events filed

None this round (this round is a remaster of existing filings + art, not a
new event). Still outstanding from the day: the Chapter 9 filing itself
(the Bellevue farmstead, the Adam's-rib wish, the sighting) and the
"Staging a Grand Boss Fight" wish-craft filing.

## XP awarded

No new XP beyond the previously filed 1,300 XP (held in both modes for the
Airlift remaster); XP data re-registered without re-minting.

## MP cost

0.

## Worked example

`tabletop-reference.html` GM TOOLS → the collapse map's sighting log —
unchanged this round.

## Known leftovers / next session

- **`/dev/girl-boss-fights` theatre** — the manual performance-hall concept
  approved by the user: seated guests give XP `for the effort`; the page
  exists, the seats do not. Next session.
- Ask Waluigi per his own product question whether the chorus should
  continue to the next Song after each one ends.
- Wario / Mossy / Pierce / Iron Legion grove event-states — flagged
  future work; not generated this round (states must come from filed
  beats, and Mossy's got none beyond "stood near the door").
- Chapter 9 filing + DPS screenshot (user supplies).
- The in-world audio recordings to cover the chorus's archive gaps
  (boos with recorders, two VHS tapes) — a filing, when it happens.
