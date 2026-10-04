# Run report — Character sheets: the live-world loop

**Filed:** run dated 2026-10-04
**Branch:** `arena/01a0feea-bik`
**Input:** the GM's module export `midlands-all-actors.json` (151 actors,
`exportedAt` 2026-10-04T17:21:43.770Z) committed in `2dcf95c`.

---

## 1. What was asked

The GM uploaded the live world. Three things were to follow from it: the
player characters' XP brought level with the ledger, the spoils of war the
party has actually earned added to the sheets, and — the standing rule —
**player characters carry character sheets, never NPC sheets**. And the
sheets were to join `start.py`, so the launcher starts the suite with the
rest of the site.

## 2. What was done

**The export became the mirror, folders and all.** `foundry-bridge.py split
--prune` rewrote `actors/worlds/midlands/` as the world's own tree — the
twelve player files in `Players/` (eleven characters and Wario's motorbike),
the manors' casts under *A House Divided*, the 955 BF court the GM had
imported. The builder, the checker and the bridge read the tree recursively
now; nothing else about them changed.

**Three player characters were on NPC statblocks. They are not any more.**
`tools/promote-player-sheets.py` writes a `character` sheet *under the live
id*, so the Mass Import module (1.2.0, *Replace on type change*) swaps the
statblock for the sheet in place — tokens, journal links, ownership, folder
all kept.

| Player | On the export | Now | How |
|---|---|---|---|
| Bowser | `npc` warlord statblock (the GM's own build) | Fighter 8 `character`, 35,292 XP | the intake PC sheet from `Reputation-Matrix2/actors/` dropped onto the live id; the statblock is kept as an alternate under the sheet |
| Wario | `npc` statblock | Barbarian 6 `character`, 18,370 XP | the intake PC sheet, class level from the ledger |
| Salam | `npc` statblock, no PC sheet anywhere | Ranger 3 `character`, 2,220 XP | *converted*: the statblock's attacks, array and HP kept, standard-array-and-kit for the rest; every assumption written into `flags.waluipedia-sheets.promoted` and the biography |

Nothing was promoted that did not need it: Archie, Eager, Feyward Dan,
Hjumpik, Markop, Remi, Toad Lee and Waluigi were already character sheets and
were left exactly as the players built them — except for one field.

**XP is the ledger's.** Every pass pins `system.details.xp.value` of every
player sheet in `Players/` to `XP_SUMMARY.currentXP`:

| Sheet | Export XP | Ledger XP | Sheet level | Ledger level |
|---|---:|---:|---:|---:|
| Archie Miser | 20,000 | **21,030** | Wizard 6 | 6 |
| Bowser | — (statblock) | **35,292** | Fighter 8 | 8 |
| Eager | 4,860 | 4,860 | Rogue 4 | 4 |
| Feyward Dan | 1,960 | 1,960 | Paladin 3 | 3 |
| Hjumpik Deldkur | 16,712 | **25,342** | Fighter 6 | **7 — level up in Foundry** |
| Markop Judi | 37,249 | **37,769** | Paladin 8 | 8 |
| Remi | 23,000 | **31,258** | Artificer 7 | 7 |
| Salam | — (statblock) | **2,220** | Ranger 3 | 3 |
| Toad Lee | 5,790 | **6,090** | Warden 4 | 4 |
| Waluigi | 11,911 | 11,911 | Wizard 5 | 5 |
| Wario | — (statblock) | **18,370** | Barbarian 6 | 6 |

Levels are never touched by the tool — a level is the player's to take at
the table, so Hjumpik is a *warning*, not an edit. Green T is the listed
exemption (`LEDGER_EXEMPT`): the GM runs him at Tea Merchant 6 / Bard 6 and
100,000 XP and the ledger's level 5 is not applied.

**Spoils of war travel as a changes file.**
`Reputation-Matrix2/actors/changes/2026-10-04-grove-spoils.json` adds, by
actor id, what *The Way I Started It* left in the party's hands and did not
yet reach the sheets:

- **Eager — *The Electric Sphere*** (trinket, 1 lb, flagged
  `tech_grove_electric_sphere`): the one thing taken off the grove floor; the
  description says plainly that its mechanics are unestablished and the
  technology record is the source of truth.
- **Feyward Dan — *Injury: Sprained Thumb (one week)*** (feat, flagged roll
  59 on `permanent_injury_d100`): no two-weapon fighting, no two-handed
  versatile attacks, for the man with one arm. Remove after a week of
  in-world time.

Both are scoped with `appliesTo.exportedAtOrBefore` to the export they were
written against, so once the GM exports again (with the sphere spent or the
thumb healed) the suite stops re-applying them. Wario's motorbike was
already on Markop's side of the export as its own NPC and is left alone; the
bow Salam carries is on his converted sheet.

**The suite, and `start.py`.** `tools/sheets-suite.py` runs the loop —
intake (`Players.json`) → split (newest export, `~/Downloads` or the repo
root) → promote → changes → check → build → combine → verify — once, as
`--check` (read-only, no packets; in `check-all`) or under `--watch`.
`start.py` grew a **Character sheets** tick (default on, `--no-sheets` to
skip), a status light, an *Open the sheets* button to `#/sheets`, and the
static server now answers with `Access-Control-Allow-Origin: *` so Foundry's
*Mass import → URL* can fetch the packets straight from the launcher:
`http://127.0.0.1:8765/Reputation-Matrix2/actors/worlds/midlands/players-import.json`
(the eleven player sheets + the motorbike) and `.../import.json` (all 151).
Both packets are git-ignored build artefacts.

Verified end-to-end: `start.py --no-gui` brought the site up, the suite ran
a full pass (6.2 s), the CORS header was on the packet URL, the 26 live
sheet smokes passed against it, touching the changes file triggered a watch
re-run (5.8 s), and stopping the launcher stopped the watcher.

## 3. Files

```
CREATED
  tools/sheets-suite.py                                      the loop: export discovery, --watch/--check/--once, packets
  tools/promote-player-sheets.py                             PROMOTIONS (Bowser/Wario replace, Salam convert), ledger XP pins, --check
  tools/tests/test-sheets-suite.py                           79 checks (export discovery, promotions, XP pins, spoils, start.py wiring, docs, both --check runs); in check-all
  Reputation-Matrix2/actors/changes/2026-10-04-grove-spoils.json   the two spoils, scoped to the 17:21 export
  Reputation-Matrix2/actors/worlds/midlands/<folders>/…      the mirror re-split as the world's tree (106 flat files moved into folders; Players/ has 12)
  docs/run-reports/2026-10-04-character-sheets-suite.md      this report
EDITED
  start.py                                                   sheets tick / light / button, --sheets|--no-sheets, launch_sheets_suite(), CORS header, terminal main starts+stops the watcher
  tools/build-character-sheets.py                            recursive world mirror, character-beats-npc within a source, statblock_alternates (Mario/Luigi live NPC builds ride under the hand-authored PC sheets)
  tools/foundry-bridge.py                                    players-import.json in SKIP_FILES
  tools/check-all.py                                         promote --check + test-sheets-suite.py after the cast packet check
  tools/tests/test-sheets-page.mjs                           76 (party count 18, Salam, recursive paths)
  tools/tests/test-mass-import-module.mjs                    100 (replace-on-type-change)
  Reputation-Matrix2/Foundry/mass_import/scripts/mass-import.js   replace branch: an existing actor of another type is replaced under the same id
  Reputation-Matrix2/Foundry/mass_import/module.json         1.2.0
  Reputation-Matrix2/Foundry/mass_import/README.md           the replace rule, "version 1.2"
  Reputation-Matrix2/Foundry/mass_import.zip                 rebuilt (build-foundry-module-zip.py --check OK)
  Reputation-Matrix2/data/sheets.json                        GENERATED — 188 sheets, 18 party (Salam), live 30 / intake 2 / generated 156
  Reputation-Matrix2/actors/README.md                        "The suite" + "Player characters carry character sheets" sections
  Reputation-Matrix2/actors/worlds/README.md                 midlands row (151, folders, promotions, changes/), packet URLs
  docs/SHEETS_SYSTEM.md                                      counts, eighteen party sheets, the ranking rule without the pins, "The live-world loop"
  README.md                                                  start.py section: the suite, --no-sheets
  .gitignore                                                 worlds/*/import.json, players-import.json
```

## 4. Events filed

None — systems work on the sheets. No `events.json`, `characters.json` or
ledger change.

## 5. XP awarded

None awarded. The ledger was *applied*, not changed — the table in §2 is the
whole of it (nine sheets pinned, two already matched).

## 6. What is not done

- **Hjumpik's level-up is the player's.** The sheet has 25,342 XP and
  Fighter 6; level 7 (and the subclass/feature choices) must be taken in
  Foundry. The tool warns on every pass until it is.
- **The GM imports.** Nothing reaches the live world until the GM presses
  **Sync** in Foundry (see the addendum — it replaced *Mass import → URL*;
  Bowser, Wario and Salam show as `replaced`); Bowser's player then needs
  *Owner* on the replaced actor's permissions if the GM's statblock had
  none.
- **Wario Barbarian 6 and Bowser's build are the intake sheets' guesses**,
  recorded as such in `actors/README.md`; if the players disagree, their
  edits in Foundry win on the next export — the promoter never overwrites a
  live `character` sheet, it only pins XP.
- **The Electric Sphere has no mechanics** by design; the trinket says so.
  Dan's injury feat is a one-week item — remove it after the week.
- **Green T** is off-ledger and stays that way until the GM says otherwise.
- `docs/legacy/reputation-matrix2/shadeward.txt` (uploaded alongside the
  export) was not used by this run.

## 7. Addendum — the first import on the GM's machine (same day, later)

### What happened

The GM pasted the URL of `data/sheets.json` into *Mass import → URL* and got
an uncaught promise (`Not an actor export…` thrown inside
`normalizeImport`); the files in the checkout "were not being edited" and
"the actual folder was untouched". Three things were true at once:

1. `sheets.json` is the site's sheet *index*, not a packet. The module was
   right to refuse it, wrong to do so with an uncaught error and no pointer
   to the right file (`players-import.json`).
2. The suite had only ever written the **repo**. Nothing it made was in
   `C:\Users\mikeg\AppData\Local\FoundryVTT\Data`, where Foundry reads
   `img` paths and where a packet can be read without a URL.
3. An earlier import with the 1.0.0 module put every NPC at the root —
   entries without `flags.waluipedia-mass-import.folderPath` go to the root,
   and that module did not read directories as folders.

Also found: the GM's own commit `e6d3cf2` had regenerated `data/sheets.json`
on Windows with backslash paths (`actors\worlds\midlands\…`) — the builder
used `os.path.relpath` without normalising, and `check-sheets.py` accepted
them.

### What was done

| Piece | Commit | Detail |
| --- | --- | --- |
| Windows paths | `faae437` | builder emits `/` always; `check-sheets.py` fails on a backslash; `data/sheets.json` regenerated; every ledgered player sheet carries `flags.waluipedia-sheets.ledger = {xpKey, xp, level}` so the module can show the level-up hint |
| Suite publishes into Foundry Data | `c858e75`, `0110a17` | `find_foundry_data()` (flag → `WALUIPEDIA_FOUNDRY_DATA` → `FOUNDRY_VTT_DATA_PATH` → `Config/options.json` → OS default); `step_publish` copies the packets to `npc/waluipedia/<world>/` (+ `packets.json` with the stamps), the cast packet to `npc/waluipedia/cast/`, the module to `modules/waluipedia-mass-import/` (identical to the checkout) and the 185 repo-held images the sheets reference to `portraits/` and `assets/…` (copies — symlinks need admin on Windows). `start.py --foundry-data`, a pref and a GUI entry. 20 tests |
| Module 1.3.0 — one-click **Sync** | `5b808ba` | Actors sidebar → *Sync*: Data folder → launcher → GitHub (manifest + `Players/*.json`), first that answers; folders from `folderPath`; create / update by id / replace on type change; summary dialog + GM whisper with per-actor XP, class line, ± items, folder moves, *Level up at the table*; help dialog with the three URLs when nothing answers; `sheets.json` / `manifest.json` refused with a message; import errors caught. 123 module tests |

### What the GM does now

1. `git pull` on the branch (or merge PR #89), then `python3 start.py` — the
   suite's pass prints `publish : C:\Users\mikeg\AppData\Local\FoundryVTT\Data (found) — …`,
   `module : waluipedia-mass-import 1.0.0 -> 1.3.0 installed … reload Foundry (F5)`
   and `images : install-images: 185 copied …`. If it prints `not found`,
   give the folder once: `python3 start.py --foundry-data "C:\Users\mikeg\AppData\Local\FoundryVTT\Data"`
   (remembered).
2. In Foundry: F5, **Game Settings → Manage Modules** → tick *Waluipedia
   Mass Import / Export* (once), then **Actors → Sync**. Read the summary.
3. Hjumpik's player takes level 7.

### Not done

- The gh-pages zip and the GitHub fallback serve the *merged* branch; until
  PR #89 merges, the module on the GM's machine comes from the suite's
  publish step, and Sync's third route (GitHub) finds the older sheets.
- The NPCs already sitting at the root of the GM's world are not moved by
  a `players` sync; a `world` sync (Module Settings → *Sync: what* → world)
  moves every actor the export knows into its folder.
