# Run report — the Reading Desk becomes a skin gacha

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`

---

## 1. What was built

The desk now pays **keys**, and keys pull **skins** — site-wide palettes.

**Eight skins, three rarities.** ★3 Archive Standard (free), Snowdin Frost,
Regency Gold · ★4 Feyward Bloom, Koopa Ember, Shadowfell Drift · ★5 WAHwire
Neon, Oracle Monochrome. Each is drawn from a real campaign palette rather than
invented colour.

**Why palettes are cheap here:** every skin only re-declares the same CSS custom
properties `:root` already sets. There are 130 usages of those variables across
the stylesheet, so a skin repaints the entire site without touching one
component rule — and it layers on `data-skin`, leaving `data-theme` (dark/light)
untouched. There is a test asserting a skin never clobbers the mode.

**Earning.** A filed day (3 filings read) pays 1 key; every 7th consecutive day
pays 2 more. **Pity:** every 10th pull is guaranteed ★4 or better. **Duplicates
refund their key**, so a pull is never worth nothing.

Verified against 20,000 simulated rolls: **6.1% ★5, 24.8% ★4**, matching the
declared odds, and the full set is reachable in ~51 pulls.

## 2. The sync question — and the honest answer

You asked for localhost and the GitHub Pages site to be synced. **Browsers
cannot do that.** `localhost:8765` and `mikegent01.github.io` are different
origins; localStorage and cookies are partitioned between them by the same-origin
policy, and no client-side trick crosses that line without a server.

So rather than pretend, the desk exports a **save code** — a ~320-character
base64 blob, copied to the clipboard, pasted on the other site.

**Import merges; it never overwrites.** Owned skins union, counters take the
max, plates union by id. Tested explicitly with a local save that was *ahead* on
some fields and *behind* on others: nothing from either side was destroyed. That
matters, because a naive import would let someone lose a streak by syncing in the
wrong direction.

The page says the reason in plain language rather than hiding it.

## 3. Debug console

```js
waluipediaDesk.unlockAll()   // every skin + 20 keys
waluipediaDesk.keys(50)      // grant keys
waluipediaDesk.equip('wahwire')
waluipediaDesk.skins()       // console.table of the shelf
waluipediaDesk.state()       // dump the save
waluipediaDesk.reset()       // wipe the desk and the skin
```

Exposed on `window`, so it works from devtools on either origin.

## 4. Constraints kept

Both limits from last pass still hold, and there are tests for them:

* **No XP.** XP is canon and comes from the ledger; a browser must not mint it.
* **No canon writes.** The desk touches one localStorage key and nothing in
  `DATA`. Asserted by a test that greps the pull and import paths for `DATA.`.

## 5. Verification

* `test-appearance-chronology.mjs` **118 passed, 0 failed** — twelve new
  assertions: every skin has a CSS palette *and* a preview swatch behind it
  (a reward that does nothing when equipped is worse than no reward), pity
  holds over 1,000 rolls, every skin is reachable, skins do not clobber the
  theme, duplicates refund, import merges, nothing writes to canon.
* Gacha odds and the save-code round trip verified against real data before
  shipping.
* `check-all.py` **59/61** — only the two known jsdom environment failures.

## 6. What is left

* **Tunables** are one-line constants: `DESK_DAILY_TARGET` (3), `PULL_PITY`
  (10), `RARITY_ODDS`, `DESK_MAX_PLATES` (60).
* Skins only repaint variables. A skin that changed *fonts* or added a texture
  would need a little more CSS, but the hook is already there.
* If you ever want true cross-origin sync, it needs a tiny backend — a Gist with
  a token would work but should not ship on a public page.
