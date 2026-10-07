# Players = the roster, who may open which sheet, and the image pass (2026-10-06)

**Asked:** *"also bad news liberated toads has all white backgrounds we need to
remove them and verify them. the players folder is a mess too full of characters
that are just not players. the main players should be Bowser, Hjumpik, Markop,
Archie Miser — the control only. Disaster Inc toads should go to Keaneu and
observer Martir. Oscar gets Remi and the Steel Defender. There — that should be
all permissions. I need you to audit the images too while bug fixing. Also auto
importing at startup is probably a bad idea since there can be bugs."* (The
Bros-system × Omega Bowser action-command idea was raised in the same breath and
parked for a later round by the same message: *"focus on the main issues first."*)

**Where it landed:** `713772c` / `9bed075` (the Disaster Inc. errors), `d929944`
(the Liberated Toads plates), `5695ea8` (the roster), `e140e45` (module 1.9.4,
sheet permissions), `82bf8c4` (the image audit) and this pass, which took
`check-all` from seven red checks to green. Module version **1.9.4**.

---

## 1. The `system.identifier` errors were three broken items, not thirty

The world's load-time errors named `system.identifier` on Toad species and a
Toad background sitting on sheets that already apply a different one: Eager
carried *Toad — Eager Variant* (race) and *Disaster Inc. Catastrophe Scout*
(background) beside the **Grung** and **Slave** the sheet actually applies, and
Feyward Dan carried *Toad — Feyward Variant* beside his Grung. Three invalid
**singleton** shells — a second `race` / `background` on a `character` is a
document dnd5e refuses, and every embedded item on that actor goes with it,
which is why an identifier that looks fine in the JSON reports as invalid.

They were never repairable in place: fixing the identifier would leave two
species on one sheet, and the swap the module offered ("replace the stand-in
with the real one") could not remove the Grung the player chose. So the
treatment changed on both sides of the bridge:

* **The bridge knows a *leftover*.** `singleton_shells()` pairs a broken
  `race` / `background` with the one the sheet applies (`details.race` /
  `.background` naming a live item of the same type); `split` drops them from
  the mirror and `heal` drops them from a mirror already split, so the packet
  stops carrying them and the module deletes the world's copies instead of
  refusing the actor. `manifest.json` records what went
  (`leftoversDropped`: actor, item, type, the applied one) — three rows today.
* **Module 1.9.3** deletes a leftover with no swap button, leaves a packet copy
  of one out rather than refusing the actor, refiles a *kept* actor by the
  packet's folder and the suite's tags (organisation, not sheet content), and
  remembers its own write stamps per actor in a world setting
  (`syncWritten`) — so an actor the sync wrote is not "newer than the packet"
  forever after.
* **The sync on load is OFF** (`SYNC_DEFAULTS.auto = false`). A sync that runs
  by itself at startup runs its bugs by itself too; the Sync button in the
  Actors sidebar is the whole trigger now, and a world that had it on is
  switched off once.

## 2. Liberated Toads: 75 plates off the cream field

The website's roster cells (`assets/images/toads/roster/toad_NN_<slug>.png`,
the art the micro-articles and the cast packet use) are drawn on a cream or
white **field**. On the website that is the page; on a Foundry map it is a
cream rectangle around every Toad.

`tools/cut-roster-toads.py` keys each cell with the flat-field cutter of
`tools/make-token-plates.py` — only the field touching the border goes, so a
white cap on a cream field stays — into
`portraits/liberated-toads/roster/<same file name>`, and **verifies every
plate**: border transparent, no leftover rectangle of field, no half-keyed
field, no key-coloured halo, something left on the plate. The cut is
deterministic, so `--check` can tell a stale plate (the cell changed) from a
current one by re-cutting into memory.

```
75 roster cells: 0 cut, 75 current, 0 stale/missing,
47 small (the website's 180 px cells — usable tokens, soft portraits), 0 problem(s)
```

The cast builder prefers a plate over its cell for the actor's portrait **and**
token when one exists; `characters.json` is not touched, so the website keeps
showing the cells it was laid out against. The 47 small ones are the site's
180 px cells: fine as tokens, soft as portraits — reported, not failed.

## 3. Players = the roster, and who may open which sheet

`Players/` held thirty-odd actors, most of them NPCs the GM built on a
`character` sheet (Mario, Kirby, Sans) plus five sheets nobody plays any more.
A dnd5e sheet type was being read as "player character". It is not: the
**roster** decides, and the roster is one list every tool reads —
`actors/folders.json` → `players.roster` (live Foundry `actor` id, sheet
`name`, website `character` id, `ledger` key):

| | |
|---|---|
| **Roster (7)** | Archie Miser, Bowser, Eager, Feyward Dan, Hjumpik Deldkur, Markop Judi, Remi |
| **Companion (1)** | Steel Defender — an NPC-typed actor *allowed* in `Players/`, not required to be there; the organizer files him with Disaster Inc. |
| **Retired (5)** | Green T, Salam, Toad Lee, Waluigi, Wario → `players.retired`, filed under *Disaster Inc* with the company, as is Wario's Motorbike (a name rule). For the record and for the website, which still shows their sheets with the party's; no tool reads them as players — no ledger promotion, no `pc` tag, no sheet permissions |

`build-character-sheets.py` (`is_party`), `organize-actors.py`,
`promote-player-sheets.py` and the bridge's `check` / `check-packet` all read
that list, so "who is a player" has one answer everywhere. Eighteen sheets stay
public on `#/sheets`: the seven, the five retired ones (each with a `partyWhy`
of *"former player character (actors/folders.json players.retired)"*) and the
six allies the ledger's faction or the article's affiliation admits (Bones,
Mossy, Roger, Ryan, Smoking J, Usk).

**Permissions** are data too — `players.permissions`, by Foundry **user name**
(never a user id: ids differ per world), naming roster / companion actors by
**name**:

| user | owner | observer |
|---|---|---|
| Hjumpik | Bowser, Hjumpik Deldkur | — |
| Keaneu | Archie Miser, Eager, Feyward Dan | — |
| Martir | Markop Judi | Eager, Feyward Dan |
| Oscar | Remi, Steel Defender | — |

Read as *these grants and nothing else*: `default` none, a player grant not
listed here removed (a former player, a user the world no longer has), GM users
never touched, actors outside `Players/` listed but never changed. The bridge
resolves the names to actor ids (`load_permissions()`; an unknown actor name,
an unknown level or a user listed twice is a `check` error) and the result
travels as `payload.players`.

**Module 1.9.4** applies it at Sync: `applyPermissions()` resolves the user
names against `game.users` case-insensitively and writes exactly those grants.
It is counted in the question like any other write (*"N sheet permission(s) to
set"*), listed in the summary under **Who may open which sheet**, and a name
the world does not have is reported **with the names it does have** — nothing is
guessed. The mirror files keep the world's `ownership` as exported (ids), so a
change here is a `folders.json` edit, a suite pass and one Sync.

### The party block rides with the live world's packet only

`_combine_payload()` used to put `players` in **every** combine — including the
four era packets, whose `import.json` is committed and checked byte-for-byte by
`check-all`. One roster edit therefore made four historical packets stale. Now
`folders.json` → `players.world` (`midlands`; the bridge's `LIVE_WORLD` is the
fallback, and it matches the module's `SYNC_DEFAULTS.world`) names the world the
party is played in, and `combine` carries the block for that world's packet — or
for a combine that names no world — and for nothing else. `split` still writes
it into the world manifest, which is what the module's GitHub merge starts from
(`mergePackets` takes the first packet that has one), so every Sync path still
reaches it: Data folder → the live `import.json`; launcher → the same; GitHub →
manifest + cast + eras. `cast/import.json` was regenerated without the block
(76 lines) and the four era packets are unchanged and current.

## 4. The image audit

`tools/audit-actor-images.py` (new) walks every `img` and token `texture.src`
of every actor in the world packet (world + cast + eras) and the Players
packet, says where each distinct path lives (repo | Foundry server | a GM
upload the repo cannot see | placeholder | missing under a repo root) and, for
the repo's own files, what the picture is like — `opaque`, `field` (a
transparent file whose figure still carries its background), `cream` (a flat
light border over a good part of the picture: the cut-out that was never cut),
`key` (a render that was never keyed), `framed`, `small`, `clean`. It rewrites
nothing; `--strict` (what `check-all` runs) fails only on a file the repo
manages as actor art — under `portraits/`.

```
audit-actor-images: 474 distinct path(s) over 1036 actor reference(s)
  clean 113 · small 64 · opaque 109 · framed 2 · cream 1 · placeholder 1
  server 138 · unknown 44 · external 2
background problems in the repo's files (1, 0 under portraits/):
  cream  assets/icons/actions/icon_traps.png — Kyrn (flat light border
         rgb(255, 254, 255) over 92% of the picture) — not actor art the
         repo manages; the GM's pick
OK audit-actor-images: no field / cream / key under portraits/
```

So: **no plate the packets point at still carries a field**, and the 177
transparent plates (113 clean + 64 small) are all clean cut-outs. The one
flat-white file in the whole set is the stock "TRAPS" icon Kyrn's sheet uses —
an item icon from `assets/icons/`, not actor art, reported and left to the GM
(§ *Not a portrait at all* of the 2026-10-05 audit already named it).

## 5. The seven red checks

The roster change moved five actors out of `Players/` and rewrote who is
public; the site and the Foundry packets were unaffected, but seven checks had
been written against the old shape. (Three more labels were red in the sandbox
for want of `jsdom` / `Pillow` — environment, not drift.)

| check | what was stale | fix |
|---|---|---|
| `combine --check` × 4 (955, 1035, Liberated Toads, Fawful's Forces) | the party block landed in every packet | `players.world` + `LIVE_WORLD`; the block only for the live world (§3); `cast/import.json` regenerated |
| `test-sheets-suite.py` | `by_id` was built from `Players/` alone, so Salam and Wario (now `Disaster Inc/`) raised `KeyError`; the Motorbike and the Steel Defender were asserted *in* `Players/`; Green T was asserted in `LEDGER_EXEMPT`; the party was roster + 6 allies | `by_id` spans the whole mirror with `in_players` for the folder-specific claims; Players/ is asserted to be exactly the seven; the retired five + the Motorbike + the Steel Defender are asserted under Disaster Inc.; a promotion row is expected in `Players/` only while its actor is on the roster; Green T is asserted retired and off-ledger with `LEDGER_EXEMPT` empty; party = roster ∪ retired ∪ the six allies (18) — **150 ok** |
| `test-sheets-page.mjs` | the public set beyond the roster was the six allies | roster, retired (with their `partyWhy`) and allies are three separate claims — **79 passed** |
| `dedupe-images.py --check` | 8 duplicate groups, 4 files to delete | the four were the new plates — see below |

`promote-player-sheets.py` also stopped warning that *"Wario sits outside
Players/"* and *"Salam sits outside Players/"*: a promotion row is a record of
what was done, and it outlives the actor's retirement. Only a promotion of an
actor still on the roster is expected under `Players/`. Two permanent warnings
gone; Hjumpik's pending level-up (Fighter 6 on the sheet, 7 on the ledger) is
the one that stays, and it is a real one.

### The four duplicates were the new plates

`dedupe-images --check` reported *8 duplicate group(s); 4 file(s) to delete
(0.7 MB), 0 reference(s) to repoint*. The list the previous pass never got to
see:

| keeper (referenced by `characters.json` `fullBody`) | the copy proposed for deletion |
|---|---|
| `portraits/player/fullbody/toad_axie.png` | `portraits/liberated-toads/roster/toad_18_axie.png` |
| `portraits/player/fullbody/toad_freaza.png` | `portraits/liberated-toads/roster/toad_19_freaza.png` |
| `portraits/player/fullbody/toad_regan.png` | `portraits/liberated-toads/roster/toad_25_regan.png` |
| `portraits/player/fullbody/toad_transparen_t.png` | `portraits/liberated-toads/roster/toad_38_transparen_t.png` |

Four of the 75 plates came out **byte-identical** to the full-body plate the
same toad already had (cut from a keyed render on 2026-10-05). Deleting the
plates was the wrong answer three times over:

1. `tools/cut-roster-toads.py --check` **fails on a missing plate** — the two
   tools would fight forever;
2. with no plate, `build-character-sheets.py` falls back to the *cell*, i.e.
   the cream field this whole pass exists to remove, on four actors' portraits;
3. the plates' only references live in generated cast actors, which
   `dedupe-images.py` deliberately does not count — so a plate always looks
   unreferenced and always loses the keeper vote.

So `PROTECTED_DIRS` gained `portraits/liberated-toads/roster` (a directory
another tool generates and verifies, one file per cell) beside the cells' own
`assets/images/toads/roster`, and `choose_keeper()` learned the mixed case: a
copy in a directory another tool owns is never deleted **and never the keeper
of a group that also has a copy nobody owns**. Repointing `characters.json` at
a generator's output directory would couple the site to that generator (and
`file-roster-toads.py` repoints `fullBody` straight back), so both copies stay
and the report says why. An id-named copy still wins over a plate — its *name*
is what the site looks up.

```
dedupe-images: 8 duplicate group(s); 0 file(s) to delete (0.0 MB),
0 reference(s) to repoint, 8 protected copy(ies) kept
OK dedupe-images: no deletable duplicate images
```

The eight: the four pairs above, the two roster twins the 2026-10-05 duplicate
pass already kept on purpose (`scene_shift_1/2.png` = `toad_03_rodger` /
`toad_06_bones`, both inside the cells' own directory) and the two id-named
pairs kept the same day (`the_oracle` / `oracle`, `purple_t` /
`skull_cap_murphy` — both names are ids the site looks up dynamically).

## 6. In Foundry

Update the module (**1.9.4**), reload, click **Sync**. It checks first and
asks; the question counts the permission writes with everything else. Expect:

* the three leftovers gone (no swap buttons — they are deleted, and the summary
  says which item went and which one the sheet applies);
* `Players/` refiled to the seven, the five retired sheets + the Motorbike under
  *Disaster Inc.*, the folders in the packet's colours;
* **8 actors, 4 users** of sheet permissions to set.

If the world's user names are not literally *Hjumpik / Keaneu / Martir / Oscar*,
the summary lists the names the world **does** have and sets nothing for the
missing one — fix the name in `actors/folders.json` → `players.permissions`
(they match case-insensitively) and Sync again. Nothing is guessed.

## 7. Verification

`python3 tools/check-all.py` — **all 108 checks passed**, from seven red at
`82bf8c4`. The ones this pass touched, with their own counts: foundry bridge
**98 ok**, sheets suite **150 ok**, sheets page **79 passed**, dedupe images
**15 ok**, roster toad plates **113 passed**, token plates **73**, token plate
studio **44**, actor image audit **11 ok**, and `audit-actor-images.py
--strict` clean. `cut-roster-toads.py --check`: 75 cells, 75 current, 0
problems. `mass_import.zip` was rebuilt (the module README changed; the zip is
committed because `module.json`'s `download` URL points at it on gh-pages).

Three more labels were red in the sandbox before any of this and are
environment, not drift: `npc forge` wants `Pillow` + `numpy` + `scipy`, and
`alliance cache` / `map lenses` want `jsdom` (`npm i --no-save jsdom` in the
repo root, as `.gitignore` says). With them installed those three pass too, and
the image checks they gate — `token plates`, `token plate studio`, `roster toad
plates`, `actor image audit`, `actor images` — run for the first time.

## 8. Left, and parked

* **Two lieutenant renders** for Fawful's Forces still await art — the forge
  roster builds them with a placeholder token and a biography that says so.
* **Bros × Omega Bowser** — the idea of driving Bowser's ultimate attacks
  through the Bros system's action commands is parked for a later round, by the
  same message that raised it.
* **Hjumpik's level-up** (Fighter 6 on the sheet, 7 on the ledger) is the
  table's to make in Foundry; the XP is already on the sheet.
* **47 small plates** — the website's 180 px roster cells are usable tokens and
  soft portraits; a bigger cell would want a re-render, not a re-cut.

## 9. Addendum (same day): the cream halo — the "white outline" in Foundry

**Report from the table:** many Liberated Toads still show a white outline in Foundry —
sidebar thumbnails and map/ATB tokens alike (two screenshots attached to the request).

**What it actually was.** The fields were keyed away, but a flat-field cut only despilled
*chroma* keys: the anti-aliased blend band between the cream field (rgb 247,244,234) and the
figure kept the field's colour at partial alpha. On magenta that band is invisible; on
Foundry's dark chrome and maps it is a cream halo hugging every silhouette. Measured with the
new `fringe_count()` (semi-transparent pixels within 30 of the field colour, within 2 px of
transparency): 73 of 75 roster plates carried it, median 161 px, worst 1411 px; 18 of the 19
toad full-body token plates too — and those full-body plates are exactly what the merged
packet puts in `prototypeToken.texture.src`, which is why the map tokens glowed as well.

**The fix.**
- `tools/make-token-plates.py` — a flat-field cut now un-mattes its blend band (the field's
  colour is divided out of the band's RGB) and lets coverage fall to zero at the field, so
  the edge keeps the figure's colour only. New verb `defringe PATH…` repairs plates that were
  cut before this existed, touching only the ring next to transparency (a ghost's or a glow's
  interior translucency is art and stays). New `fringe_count()` measures the halo.
- `tools/cut-roster-toads.py` — `--check` now fails a plate whose halo exceeds `HALO_PX`
  (400: clean cuts score 0, a white cap's own anti-aliasing stays under 300, the pre-un-matte
  plates scored up to 1411), so this cannot regress quietly.
- All 75 roster plates re-cut (`--force`); the four twin full-body plates
  (`toad_axie/freaza/regan/transparen_t`) overwritten in place with the new cuts, keeping the
  byte-identical pairs dedupe protects; the other 15 toad full-body plates defringed in place
  (worst band 2737 px → halo 0).

**Verification.** `cut-roster-toads --check`: 75 current, 0 problems. Halos now 0 on most
plates, worst 297 (Eager — his cap is genuinely that white; neutral colour, checked by eye on
Foundry-dark next to the old plate). `test-make-token-plates` 73 passed, `test-cut-roster-toads`
113 passed, `dedupe-images --check` still keeps the 8 protected copies, `audit-actor-images
--strict` unchanged (the one stock action icon, not actor art). Side-by-side composites on
Foundry-dark: old plates show the cream rim on caps, ghillie fuzz and weapon edges; the new
cuts are neutral and tight.

**In Foundry.** Art ships by copy: publish/install again (or Sync + reload after the suite has
copied the new files into the world's Data folder) and both the sidebar thumbnails (`img`) and
the tokens (`prototypeToken.texture.src`) pick the repaired plates up. The website's 180 px
cells keep their cream field by design — the site shows cards, not tokens.

## 10. Addendum (same day, round 2): the white rectangles were the cells themselves

The world export committed to the branch between rounds (`a7aa172 "files"`) showed the second
half of the problem: the live world's Liberated Toad actors carry `img =
assets/images/toads/roster/toad_*.png` — the website's cream **cells**, not the plates. A cell
is a Toad on a cream rectangle; as a sidebar thumbnail that rectangle is exactly the white
rounded chip in the screenshot, and clipped round on the battle card it is the white disc.
The merged packet took the mirror's paths verbatim, so even a re-Sync would have kept
shipping cells.

**The fix.**
- `tools/foundry-bridge.py` — `combine()` now runs every actor portrait and token texture
  through a new `roster_plate()`: a roster cell becomes its transparent plate in the packet
  (the website keeps the cell). 54 toad portraits and 36 tokens in the merged packet moved
  from cell to plate; `players-import.json` inherits the fix.
- The mirror record itself was repointed in place (54 actor files), so the site's live sheets
  and the audit read plates; `audit-actor-images --strict` is back to its single stock-icon
  note, and the rebuilt `data/sheets.json` index carries plate portraits.
- Tests: `test-foundry-bridge.py` gained a combine check (a world export pointing at a cell
  comes out pointing at the plate, portrait and token); `test-sheets-suite.py`'s export-back
  fixture now outranks the committed repo-root export instead of a fixed date (the live
  export's stamp had overtaken it); `test-sheets-page.mjs` follows 4331 T into the live world
  — its generated sheet retired when the toad was imported, so the evidence-quote check moved
  to Mario's 955 BF version, which still renders them.

**State after both rounds:** 75 roster plates and 19 toad token plates cut clean (halo gate
in `--check`), packets and mirror carry plates everywhere, 150 + 80 + 67 + 99 checks green in
the touched suites. **In Foundry:** Sync once more (the packet now says plate) and the white
chips and discs go with the halo; nothing else in the world changes.

## 11. Addendum (round 3): one full-body portrait per toad, and the studio full run

**Toad ie Foxx (`toad_73`).** His "cut up face" was not a bad cut of a good source: the
cell's inner field and the cap's white are the *same tone*, so any distance key's border
flood walks from the field across the anti-aliased silhouette into the cap and eats a
crescent out of it (11.8k of 26k figure pixels survived the default key). No tolerance
separates them — the render itself is ambiguous. Fix: a magenta-background render of the
same sticker (image edit, character untouched) now lives at
`assets/images/toads/renders/toad_73_toad_ie_foxx.png`; `cut-roster-toads` keys that render
for this one cell (`CUT_FROM_RENDER`), and his cream cell is derived from the plate (Toad on
cream), never the other way round. New plate: 947 px, border 100% clear, no holes, halo 0.

**The single-plate refactor.** `portraits/player/fullbody/toad_*.png` was a second cut of
the same stickers: tokens linked it while portraits linked the roster plate, so the two
could disagree and the wrong one could win (the white chips and the halo rode both paths).
Now the numbered roster plate — already a full-body cut — is the one portrait a Liberated
Toad has: 18 duplicate files deleted (`toad_lee` keeps his, a retired PC with no roster
twin), `characters.json` `fullBody` and the mirror's token textures repointed at the plate,
`combine()` remaps any old world export still pointing at the deleted twin
(`fullbody_twin`), and the site index was rebuilt. `dedupe-images` keeps protecting the
cells and the plates; nothing links the deleted paths (0 refs left).

**The GUI / full run.** The GUI you remembered is `tools/token-plate-studio.py`
(`python tools/token-plate-studio.py`, opens http://127.0.0.1:8766) — three panes
(reference / render / plate), tolerance sliders for the flat key, Accept writes the plate
through the same code path as the batch. It talks to your Comfy Desktop render server, so a
full re-render run happens on your machine: queue the toads, Accept each plate. For cuts
that need no new render (every cell-derived toad), the headless full run is
`python3 tools/cut-roster-toads.py --force` — it re-cuts all 75 from their sources and
`--check` then verifies every plate on disk. After either run: the suite publishes, Foundry
Sync picks the plates up.
