# Run report — the Reading Desk learns to pay wages (dailies, tokens, field sheets)

**Filed:** run dated 2026-09-21
**Branch:** `arena/01a0c168-bik`

---

## 1. What was asked, and the two judgement calls

The ask: improve Home › The Reading Desk; dailies that pay "every day they come
in", not just themes; music and other stuff; things bought with tokens; and
"background sheets that scale well that are 9x9 — if not, we can improve it,
maybe, I am not sure."

Two calls were made from the repo's own records rather than guessed:

* **9x9 was already tried and rejected here.** `tools/slice-banner-sheet.py`
  and `docs/worklists/REMASTER_PLAN_2026_09.md` both record it: at a ~1024px
  canvas a 9x9 cell is ~113px and coherence collapses — motifs bleed into
  neighbours. So the desk ships **3x3 contact sheets of nine** sliced at
  512px and served `cover` + `fixed`. That is the reading of "9x9, if not we
  can improve it" that the documentation supports.
* **Tokens are desk-local, never canon.** The desk's standing rules (run
  reports of 2026-09-19) still hold: reader-local `localStorage`, no XP, no
  writes into `DATA`. The in-world bank and its currencies are canon and were
  not touched. If you want tokens that talk to the in-world economy, that is
  a bigger, separate PR.

## 2. Files created or edited

```
CREATED
  tools/slice-field-sheet.py                         new slicer, 3x3 sheets -> 512px JPEG cells
  docs/run-reports/2026-09-21-reading-desk-exchange.md  this report

EDITED
  index.html                         ~ desk system rebuilt (below, section 3)
  Reputation-Matrix2/app/styles/waluipedia.css   +89 lines: check-in strip,
                                     Exchange price rail, sheet wall, 27 sheet
                                     background rules + cover/light veils
  tools/tests/test-appearance-chronology.mjs     +31 assertions (175 pass, was 144)
  .gitignore                         + field-sheets _sheets/ rule (matches
                                     the location contact-sheet precedent)

GENERATED (do not hand-edit — generator: tools/slice-field-sheet.py)
  Reputation-Matrix2/assets/images/field-sheets/{vellum,ledger-stock,blueprint,
    linen,blotpaper,sepia-map,slate-dust,dustjacket,parchment,snowdin-dusk,
    feyward-floor,koopa-ember,shadowfell-moor,grove-webbing,planar-fracture,
    regency-damask,legion-rivet,wahwire-haze,oracle-marble,wahwire-frame,
    brass-deco,starfall-teal,oilslick,filigree-char,violet-rain,
    obsidian-scale,tracery-moon}.jpg            27 tiles, ~42 KB each

GENERATED AND IGNORED (intermediate art, house rule: source sheets are scratch)
  Reputation-Matrix2/assets/images/field-sheets/_sheets/sheet-archive.jpg  source 3x3, ★3
  Reputation-Matrix2/assets/images/field-sheets/_sheets/sheet-fields.jpg   source 3x3, ★4
  Reputation-Matrix2/assets/images/field-sheets/_sheets/sheet-vault.jpg    source 3x3, ★5

.gitignore gained the field-sheets `_sheets/` rule, matching the location
contact-sheet precedent directly above it.
```

## 3. What the desk does now

**The daily check-in.** Booting the site pays a wage once per local day:
a seven-day strip (`DESK_WEEK`) that escalates — tokens, keys, tokens-and-key,
up to a 20-token + key bounty on day seven — then loops. Chained on
consecutive days by the same rule the streak uses, reset by a gap the same
way. It fires at boot (`try{ deskCheckIn(); }`), lands as a toast, and lives
as a strip card on the desk page. *Players earn every day they come in* — that
was the headline request.

**Desk tokens (🪙).** The second currency next to keys. Earned by the wage
(55/week), by filing a reading day (+3, plus +6 on every 7th streak day),
spendable in one place:

**The Exchange.** A shop card on the desk page — "a price, not a
probability", filterable by shelf (skins / sheets / tracks), one-click buys
that equip on the spot. Prices are one-line tables:
`SHOP_PRICES.skin {★3 30, ★4 75, ★5 160}`, `SHOP_PRICES.sheet {25, 60, 140}`,
tracks 25–40. A short purse buys nothing and says what is missing; the
collection is never sold twice. Keys stay what they were — odds, pity,
duplicate refunds. Gambling with keys or saving tokens is now a real choice.

**Music, more of it.** The track shelf grew 4 → 9. The first four keep their
filed-days unlock (0/2/5/8 days); five are Exchange stock (Snowfall on the
Wire, Ember Hearth, Regency Minuet, The Oracle's Interval, WAHwire Static).
The engine got a second voice — a pad a fifth below every fourth step, so cues
move like progressions — and per-track waveforms. Still procedural, still
never autoplays, still no audio files to ship.

**Field sheets — the "background sheets" themselves.** Twenty-seven
full-bleed backgrounds from three 3x3 contact sheets (archive paper /
campaign fields / vault stock), sliced by the new tool. A sheet equips via
`data-sheet` exactly the way a skin uses `data-skin`: the skin keeps
repainting the CSS variables, the sheet owns the canvas under it, and neither
touches `data-theme`. In light mode the veil inverts instead of the picture
(the pattern your four campaign-skin backgrounds already proved). Sliced at
512px and served `cover` + `fixed` — any viewport gets the same composition,
which is what "scales well" means on the web. The desk page shows owned
sheets on a hangable/take-down wall.

**Everything else bends around the money.** Home band shows `🔑 · 🪙`. The
filing toast names the pay. Save codes carry tokens, chain, sheet and track
unlocks (payload v2) and import still merges, never overwrites — tokens take
max, unlock lists union, claim date takes the later. Debug console gains
`tokens(n)`, `sheets()`, `equipSheet(id)`; `unlockAll()` and debug mode now
cover all three shelves, and debug pauses the check-in for the same reason it
pauses the rota.

## 4. Events filed

None. This is a reader-local system; no canon content was created. The hard
constraint from the earlier desk runs still holds and is now asserted for the
new money paths too: `deskCheckIn`, `deskBuy`, `deskEquipSheet` never touch
`DATA`.

## 5. XP awarded

None, deliberately. XP is canon and comes from the ledger; a reader's browser
must not mint it. Settings and the desk footer both still say so.

## 6. Verification

* `node tools/tests/test-appearance-chronology.mjs` — **175 passed, 0
  failed** (was 144). New assertions: a filed day pays 1 key + 3 tokens; the
  wage pays once a day, walks the whole week across simulated mornings, wraps
  on day eight, resets on a gap, and stops entirely under debug; buys charge
  the exact rarity price, never sell twice, never debit a short purse;
  day-unlock and Exchange tracks gate correctly; all 27 sheets exist on disk
  **and** have CSS backgrounds; the sheet layer covers/fixes and inverts in
  light mode; neither skins nor sheets clobber `data-theme`; the purse merges
  on import; the new money paths write nothing to canon.
* A runtime smoke executed the real `view_desk` against a stub DOM: fresh
  render contains all sections, empty-collection copy shows; with owned
  sheets the wall renders tiles with take-down; the Exchange filter switches
  shelves; all 27 thumbnails resolve on disk.
* `python3 tools/check-all.py` — **57/61**, the same four pre-existing
  failures as before this run (commentaries thin section; filing-updates
  ledger behind data; alliance cache and map lenses, the two known jsdom
  environment gaps). No new failures.
* `check-css-coverage.py` — PASS, 166 watched classes all styled.
* HTTP smoke: `/`, the stylesheet, two sliced sheets, and
  `Reputation-Matrix2/data/events.json` all serve 200.
* 1000-roll pity check still green; skin gacha untouched by the Exchange.

## 7. One bug found while testing, fixed before it shipped

The test harness lifts the Exchange block out of `index.html` by slicing
between two markers. The first marker I picked sat one line below
`let DESK_SHOP_CAT='all';` — so any lifted render crashed on an undefined
constant, exactly the class of bug the slice approach exists to catch. The
slice anchor moved to the `DESK_SHOP_CAT` declaration itself, and the source
now carries a comment saying the tests lift from that marker. It failed
loudly in the harness and passed once moved.

## 8. What is left

* **Tunables, all one-liners:** `DESK_WEEK` (the strip), `SHOP_PRICES`
  (the whole Exchange), token pay in `readingDeskRecord` (+3/+6).
* The four older campaign-skin backgrounds use root-absolute URLs
  (`/Reputation-Matrix2/...`) which only resolve at a domain root; the field
  sheets use stylesheet-relative paths and work under sub-path hosting too.
  Migrating the old four is a one-purpose follow-up.
* True cross-origin sync still needs a tiny backend; the save code remains
  the honest answer a browser can give.
* Desk tracks drive their own little player. Sharing them with the site-wide
  `WaluipediaAmbient` loops is a natural follow-up but touches another
  module's track model, so it stayed out of this PR.
* 9x9 stays rejected per the documented finding. If the canvas ever grows to
  2048px, 5x5 becomes arguable.
