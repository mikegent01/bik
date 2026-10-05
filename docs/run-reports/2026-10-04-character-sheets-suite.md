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

## 8. Addendum — the first world-scope Sync worked, loudly (same day, later still)

### What happened

`15 created, 133 updated, 3 replaced, 13 folders, 18 missing images` — the
right result, under a console full of noise. Each line traced to a cause:

| Console | Cause | Where it was fixed |
| --- | --- | --- |
| `Item "…" does not exist!` — dozens of uncaught promises from dnd5e `item.mjs:1151` | the module updated every actor as a whole document (`diff: false`); to dnd5e every item then looked like an activities change, so `onUpdateActivities` deleted and recreated the cached spells of every Cast item — and because dnd5e notes the ids to remove on the *shared* batch options, every other item in the same batch tried to delete them again | module 1.4: diff updates, one call per item whose activities change, cached spells of a deleted Cast item left to the system |
| `Invalid embedded document data … identifier may only contain …` on `VudZ3W313Y4FILs0` (Eager) and `IlzuThuR8upTtqtF` (Feyward Dan) | the *players'* own exports carry `toad-—-eager-variant`, `disaster-inc.-catastrophe-scout`, `dead-person's-shoes`; dnd5e 5.3's `IdentifierField` refuses them and the item becomes invisible | `foundry-bridge.py split` repairs (`slug_identifier`, recorded in `manifest.identifiersRepaired`), `check` fails on any that remain, `sanitize-foundry-actor.py` gained `rule_identifiers`, the module slugifies whatever still arrives and reports it. 7 repaired in the mirror; Eager's and Dan's import-ready files rewritten by the intake chain |
| `SceneNavigation.displayProgressBar is deprecated` | v12 API | `ui.notifications.info(…, {progress: true})` on v13+ |
| 404 `npc/MLSS%252BBM_Art_-_Fawful.png` | Foundry stores paths already encoded; the module encoded them again | encoded once; wildcard token paths skipped. The remaining 404s are real and the GM's: bare file names (`1709761629520545.jpg`, Markop's and Salam's portrait uploads) and `modules/house-divided/…` wildcards from another Data folder |
| 45 actors at the root, 13 folders | the packet mirrored the world as it was | **the organizer** (below) |

The request on top: *more aggressive folders — tags, sort them all like the
website, colour-code if needed*.

### What was done

| Piece | Commit | Detail |
| --- | --- | --- |
| Module 1.4.0 | `9015d7d` | `docDiff` updates (unchanged actors not written; `-=key` only for `flags`, `ownership`, `system.activities`, `system.tools`); identifier repair; v13 progress; encoding fixed; **tags as sidebar chips** (`flags["waluipedia-sheets"].tags`, tinted with the folder colour, client setting to hide); **folder colours** from `folders[].color` / `folderStyles` (new folders coloured, colourless ones painted, the GM's own colours kept); Sync summary gains *Repaired identifiers* and a *Folders* section. Test fake rewritten (dnd5e cascade, `Folder#update`, `decodeURIComponent`); 151 tests, +5 against the real export, +4 against the real packet |
| `actors/folders.json` + `tools/organize-actors.py` | this commit | the scheme (`waluipedia-folders/1`) and the pass: `Players` (kept) → website index (direct or alternate) → name rules → folder rules (`A House Divided / Characters of …` → Overgrown Manor) → a GM folder named like a group → `Bestiary / ⟨creature type⟩`. Files move with their actors, the manifest follows, empty GM directories go, placement remembered in `flags["waluipedia-sheets"].organized` so a later GM move is respected (`--force` overrides). 137 of 151 moved: 23 folders, nothing at the root |
| Tags + colours everywhere | this commit | organizer writes `tags` / `color` on the mirror; the builder writes them on the 156 generated sheets and the 3 era versions; `foundry-bridge.py combine` writes `folders[].color` / `description` / `folderStyles` (24 coloured folders in the cast packet, 22 in the world packet); `folders.json` in `SKIP_FILES` |
| Suite | this commit | `organize` step after changes, before check / build / combine; `--check` runs it read-only; `check-all` runs `organize-actors.py --check` and the new `tools/tests/test-organize-actors.py` (43) |
| Docs | this commit | module README 1.4 table, `actors/README.md` *Organize* section, `SHEETS_SYSTEM.md`, this addendum |

Verified: module tests 151 / 156 (`WMI_EXPORT`) / 160 (`WMI_PACKET`: the
real packet over the real world — 0 created, 148 changed, 3 replaced, 22
folders, 31 coloured, second import unchanged); bridge 51; suite 108;
organize 43; `check-sheets.py`; `check-all` (only the standing grove check
fails); the Peach's Castle 955 packet regenerated for the new `folderStyles`
field.

### What the GM does now

1. Run `start.py` (or `python3 tools/sheets-suite.py`) once — the suite
   organizes the mirror, publishes the packets and installs module **1.4.0**
   (`module : waluipedia-mass-import 1.3.0 -> 1.4.0 installed … reload Foundry (F5)`).
2. F5 in Foundry, **Actors → Sync** with *Sync: what* still on **world**
   (set last time). Expect roughly `0 created, ~148 changed, 22 new
   folders, 31 coloured`, no red lines; the summary lists the folders. A
   second click should say everything is unchanged.
3. 11 of the 13 old folders are now empty (`A House Divided` and its
   seven sub-folders, `Creatures`, `Flower`, `Important`; `Players` and
   `Iron Legion` stay in use) — left for the GM to delete, the module never
   deletes folders.
4. Markop's and Salam's portraits: the players uploaded bare file names
   (`1709761629520545.jpg`, `ofmfwui4eg0jvc28-generated_image-removebg-preview.webp`);
   set the sheet image to a path under Data and the 404s stop.

### Not done

- Tags are flags + sidebar chips: Foundry has no native actor tags, so there
  is no filter box; the folder tree and the search field do that job.
- Generic statblocks are filed by creature type only. A statblock that is
  really faction-bound but named generically (`Guard`) stays in the GM
  folder it was in only if that folder is named like a website group;
  otherwise it is Bestiary / Humanoid until a name rule or an article says
  otherwise — add a line to `folders.json` and rerun.


## 9. Addendum — one packet, by itself, nothing FAILED (same day, later again)

### What the second Sync said

`0 created, 149 updated, 2 FAILED, 22 folders, 18 missing images`, and the
console: `Item "VfJl4waJI38BhqP4" does not exist!` (and two more ids, many
times over), `Only a single Species can be added to a Player Character.`,
`Only a single Background …`, `The _id [218ad632c6e149d9] already exists
within the parent collection: Actor [VudZ3W313Y4FILs0] items`, the same for
`e6cbf8b57a504da9` on `IlzuThuR8upTtqtF`. The GM's ask: *one that imports
everything by itself — no file selection, folder colours set, the bugs
ironed out, empty and one-creature folders gone, the toads and the past
stuff too, not several jsons at a time.*

| Symptom | Cause | Fix |
| --- | --- | --- |
| 2 FAILED (Eager, Feyward Dan) — `_id already exists` | Foundry keeps dnd5e-invalid embedded documents (the home-made Toad species, a background, a feat, two garments with bad identifiers) *out of* `actor.items`; they live only in `_source` / `invalidDocumentIds`. The diff did not see them, tried to create the repaired copies under the same ids, the server refused | the module reads the source, invalid documents included, and repairs them with **updates** (dnd5e has no singleton check on the update path); if the update is refused: delete, then create under the same id. Per actor `items.repaired`; `embeddedRepaired` overall. Against the real export + real packet: **7 repaired, 0 failed** |
| `Only a single Species / Background …` | creating a species while the sheet already holds the Grung / Slave stand-ins → dnd5e's `_preCreate` returns false (the create resolves without the document, a notification fires) | repairs are updates, so it stops; a genuinely refused create becomes a **note** (`report.notes`) and the summary lists sheets with two species / two backgrounds — *keep one, delete the stand-in*. Never a failure |
| `Item "X" does not exist!` × many | cached Cast-activity spells (`flags.dnd5e.cachedFor`): dnd5e deletes and recreates them while the sync was comparing (and sometimes writing) them | cached spells are excluded from both sides of the diff, never written; items whose activities change are still updated one call at a time |
| three packets, a scope setting, a file to pick | — | **one packet**: `combine` over mirror → cast → 955 court, dedupe by name + type (first wins, `omitted[]`), 329 actors / 32 coloured folders; `packets.json` v2 with a digest; the module's GitHub fallback merges manifest + cast + court the same way (`mergePackets`). `SYNC_SCOPES` and the scope setting are gone |
| you had to click | — | `autoSync()` from the `ready` hook (GM, setting *Sync by itself*): runs when the published packet's stamp differs from the last one synced, otherwise silent; the summary opens only when something changed / failed / was noted / tidied |
| 11 empty folders, folders with one creature | 1.3 created its own folders beside the GM's; 1.4 moved the actors out of the old ones | `folderKey` matching (trimmed, case-insensitive, fullest duplicate reused) + `tidyFolders` after every sync: same-parent duplicates merged into the fuller one (colour carried), empty folders removed bottom-up (settings to switch either off). The organizer already folds singletons into *Elsewhere* (`259a44c`) |
| the second sync behaved like 1.3 | module code loads at world launch; the suite installs while the world is open | `checkModuleVersion()` — the summary shows running vs on-disk versions and, when they differ, *Setup → relaunch the world (then Ctrl+F5)* in orange |

### What was done

| Piece | Commit | Detail |
| --- | --- | --- |
| Scheme / organizer / bridge / builder / suite | `259a44c` | `folders.json` minimum 2, fallback *Elsewhere*, eras block; cast and era actors file into the world's own folders; `fold_singletons`; `combine(dirs…)` with `omitted`; the suite writes **one** `import.json` (mirror → cast → eras), `packets.json` v2 (`everything` / `players` / `manifest`, digest, GitHub `manifest` + `cast` + `era`), removes the old `cast/` packet dir. Bridge 58, organize 57, suite 112 |
| Module 1.5.0 | this commit | `embeddedSources` / `syncEmbedded` repair path, `singletonNotes`, cached spells excluded, `mergePackets`, `syncStamp`, `autoSync`, `checkModuleVersion`, `tidyFolders` (+ `duplicateFolderGroups`, `emptyFolderIds`, `subtreeCounts`), `folderKey` matching in `ensureFolderPath`, settings `syncAuto` / `syncMergeFolders` / `syncPruneFolders` / `syncLastStamp` (scope dropped), summary sections *Notes for the GM*, *Folders tidied*, *module x.y.z (on disk a.b.c)*; macro `REVIEW` flag; zip rebuilt. Tests 179 / 188 (`WMI_EXPORT`) / 191 (`WMI_PACKET`: the real world seeded straight from the export — 7 invalid documents in — 178 created, 148 changed, 3 replaced (the promotions), 7 repaired, 3 notes, 0 failed, 11 empty GM folders removed, 32 folders left, second import unchanged) |
| Docs | this commit | module README 1.5 table + Sync section, `actors/worlds/README.md`, this addendum |

### What the GM does now

1. Run `start.py` (or `python3 tools/sheets-suite.py`) once — the suite
   builds the one packet, publishes it and installs module **1.5.0**.
2. In Foundry: **Setup → relaunch the world**, then **Ctrl+F5**. Sync runs
   by itself a few seconds after the world loads (or click **Sync**).
   Expect `178 created, ~148 changed, 3 replaced, 7 broken items repaired,
   3 notes`, folders coloured, *Folders tidied: 11 removed*, no red lines.
   A second load does nothing (same packet).
3. Eager and Feyward Dan: the Toad species / background / feats are repaired
   in place; the Grung and Slave stand-ins are still on the sheets and the
   summary says so — delete them by hand once the Toads look right.
4. Markop's and Salam's bare-file-name portraits are still the GM's to fix
   (set the sheet image to a path under Data).

### Not done

- The GM's own folder that happens to hold one actor is left alone — the
  tidy only merges duplicates and removes *empty* folders; the organizer's
  *Elsewhere* rule applies to what the packet files, not to folders the GM
  made.
- A refused singleton create (two species in a packet for one sheet) stays a
  note; the module does not pick which one to keep.

## 10. Addendum — the world was running module 1.2.0 the whole time (same day, once more)

### What the third run said

The GM pulled `65dfe0f`, ran the suite (the 329-actor packet exists on his
machine — *Mass import → file* took it), and the console read as before:
`178 created, 149 updated, 2 FAILED, 15 folders, 18 missing images`, the
`_id already exists` / `Only a single Species` / `Item "…" does not exist!`
lines, the `%252B` Fawful path, the `SceneNavigation.displayProgressBar`
deprecation. No Sync button was ever clicked because there was none to
click: *Mass import: Choose a file, pick a Data path, or give a URL*.

What settled it is the stack: `mass-import.js:949 [waluipedia-mass-import]
ready` (no version in the line), `progress (mass-import.js:615/616)`,
`importPayload (mass-import.js:635/696/724)`, `openImportDialog
(mass-import.js:857)`. Checked against every tagged script in the history,
only **1.2.0** (`f3f2c0d`) has `ready` on line 949 and `displayProgressBar`
on 616. The browser has been executing the 1.2.0 script through the installs
of 1.3, 1.4 and 1.5 — so none of §8's or §9's module fixes have run on the
GM's machine yet, and the 1.5 *running vs on disk* notice could not help:
it lives in the code that was not running.

Why it can happen: Foundry gives the page
`modules/waluipedia-mass-import/scripts/mass-import.js?v=<version from the
manifest it read at world launch>`; the browser caches it; a plain F5
revalidates the document, not fresh subresources; the `?v=` only moves when
the world is relaunched from Setup **and** the manifest on disk is newer.
(The other possibility — the suite writing to a Data folder Foundry does
not read — is not excluded by the log; the suite now checks it, below.)

### What was done

| Piece | Commit | Detail |
| --- | --- | --- |
| Module 1.6.0 — loader + core | this commit | `scripts/mass-import.js` is now a 20-line loader that registers `init` / `ready` / `renderActorDirectory` synchronously and `import()`s `scripts/mass-import-core.js?v=<Date.now()>` — fresh on every load, immune to the `?v=` and to the cache. The former script is the core, with `onInit` / `onReady` / `onRenderActorDirectory` exported (`register()` kept for tests). `onReady` logs `1.6.0 ready`, says when Foundry's manifest is older than the code, links a cache-busted stylesheet in that case, and warns in orange when `module.json` on disk is newer than the code running. `checkModuleVersion()` adds `loaded` (the manifest version Foundry has). Tests 187 / 199 (`WMI_EXPORT` + `WMI_PACKET`); zip 11 files |
| Suite — ask the server | this commit | `foundry_options()` (Config/options.json), `foundry_server_url()` (`--foundry-url`, `WALUIPEDIA_FOUNDRY_URL`, the options port, 30000), `probe_served_module()` and `served_module_verdict()`: after the install the suite fetches `modules/waluipedia-mass-import/module.json` from the running Foundry and prints a `foundry :` line — same version → relaunch instructions; another version or a 404 → *Foundry reads a different Data folder*, with the `--foundry-data` hint; nothing listening → says so. Suite tests 122 |
| Docs | this commit | module README 1.6 section, `actors/README.md` module row, this addendum |

### What the GM does now

1. Pull, run `start.py` (or `python3 tools/sheets-suite.py`). Read the
   `foundry :` line it prints after `module : … 1.6.0 installed`.
   * *serves module 1.6.0* → go to step 2.
   * *serves module 1.2.0, NOT the 1.6.0 just written to …* or *has NO
     modules/waluipedia-mass-import* → Foundry → **Setup → Configuration**
     → *User Data Path*; put `<that path>\Data` in start.py's *Foundry Data
     folder* box (or `--foundry-data`) and run again.
   * *no Foundry server answered* → start Foundry first.
2. In Foundry, once: **Game Settings → Return to Setup → Launch World**,
   then **Ctrl+F5** on the game page (Foundry app: F12 → Network → tick
   *Disable cache* → F5). The console must open with
   `[waluipedia-mass-import] 1.6.0 ready`. (Also visible without the
   suite: `http://localhost:30000/modules/waluipedia-mass-import/module.json`
   in a tab shows what the server serves.)
3. Sync runs by itself a few seconds later. The 178 actors the 1.2.0 import
   created are kept (same ids) and moved into the coloured layout; Eager and
   Feyward Dan are repaired; the 15 bare folders from that import and the
   empty ones from before are merged / removed. Expect `0 created, ~329
   updated, 7 broken items repaired, 3 notes`, nothing FAILED.
4. From then on a plain F5 runs whatever the suite installed last.

### Not done

- The cause is pinned to the browser/`?v=` cache only as far as the log
  allows; the wrong-folder case is reported by the suite, not fixed by it.
- The 18 *missing images* are the GM's bare file names and the
  `house-divided` wildcard tokens (§8) — unchanged.

## 11. Addendum — 1.6.0 ran; every line of its console, and Hjumpik's XP (same day, the last one)

### What the fourth run said

The first line was the right one at last — `mass-import-core.js?v=… 1.6.0
ready` — and the result was `0 created, 329 updated, 31 coloured, 18 empty
folders removed, 4 broken items repaired, 3 notes, 14 missing images (5
unchanged)`. Line by line:

| Console | Cause | Fix (module 1.7.0 unless said) |
| --- | --- | --- |
| `TypeError: Cannot read properties of undefined (reading '_source')` from `updateEmbeddedDocuments`, then `Only a single Species can be added to a character`, then **Eager's Toad species, his Catastrophe Scout background and Feyward Dan's Toad species gone** — reported as "repaired" | Foundry v14 cannot `updateEmbeddedDocuments` an item it holds as invalid (`items.get(id)` is undefined, so the backend reads `_source` of nothing). The 1.5/1.6 fallback was delete + recreate; dnd5e's `Race._preCreate` / `Background._preCreate` refuse a second singleton when a stand-in (the Grung race, the Slave background the packet also carries) is already on the sheet — the delete had happened, the create was refused, the item was lost | `repairInvalid` goes **through the parent** like dnd5e's own migration (`actor.update({items:[{_id,…}]}, {render:false})`). If that still throws: a singleton with a stand-in on the sheet is **left alone** and the summary offers a one-click **swap** (*Use Toad — Eager Variant instead of Grung*); a singleton alone is recreated under a fresh id before the broken one is removed; other types keep delete + recreate under the same id. The client may keep the id in `invalidDocumentIds` until reload — the summary then says *repaired in the database — reload (F5)* instead of retrying. The two species and the background come back from the packet (it has them) on the next Apply |
| `Waluipedia Mass Import 1.5.0 is installed but this world still runs 1.6.0` | `checkModuleVersion` only knew "disk ≠ running" and printed the stale-cache sentence for the opposite case (`module.json` 1.5.0 on the server, code 1.6.0 — the manifest the suite wrote had not been re-read) | `versionVerdict`: disk **ahead** → *installed but this world still runs … — Setup → Launch World*; disk **behind** → *the install is half-updated, or Foundry reads another Data folder — run the suite once more*; manifest loaded older than the code → a console note only |
| 10 × `GET …/icons/…webp 404` (`projectile-ice-blue`, `shield-barrier-ice-blue`, `barrier-ice-crystal-wall-blue`, `strike-body-collision-red`, `intimidation-impersonate` ×2, `shield-barrier-glowing-gold`, `skull-humanoid-crown-white-red`, `helm-barbute-leather-grey`, `turtle-shell-green`, `wagon-wheel`) | Core icons renamed or dropped between Foundry versions; the items (Midbus, Fawful, the Hammer Bro, the Koopa Troopa, Archie's Watcher's Eye) still point at the old names | `actors/folders.json` → `iconFixes`: the organizer renames item / actor / token art by the table, only to paths present in `tools/item sheet examples/image paths.txt` (the GM's library); 11 item icons renamed in the mirror, the packet carries them, the export brings them back, the rule becomes a no-op (`b8b0aae`) |
| 4 more *missing images*: `1709761629520545.jpg`, `ofmfwui4eg0jvc28-….webp`, `npc/shadowtoad.png`, `modules/house-divided/…/*.webp` | Bare file names the GM uploaded somewhere the server does not serve from `/`, and wildcard token paths that cannot be HEAD-checked | Left alone, listed. Point them at files that exist in Foundry (or drop the images) and the next export carries the fix back |
| `Item validation errors` / `Actor validation errors` blocks at load | Printed by Foundry for the invalid embedded documents above, once per load | Gone once those items are repaired or swapped; nothing to do in the module |
| `329 updated` | `report.updated` counted every matched actor, written or not; the writes were 148, all overlay: `flags.waluipedia-sheets.tags/color` 148, `organized` 139, `folderPath` + `folder` 137, `ledger` 8, `system.details.xp` 5, items 2 | `N changed (M unchanged)` counts actors a write went to; each changed row explains itself (`XP 16712 → 25342`, `HP 31 → 30`, `+ The Electric Sphere [loot]`, `− Dagger [weapon]`, `moved to Players`, `fields: …` for anything else). The second pass over the GM's world is `0 changed (329 unchanged)` in the test over his export |
| nothing in the console — the packet was applied without a question | By design in 1.5/1.6 (the automatic sync wrote whatever the packet said) — dangerous after a session, as the GM said | **Ask first.** Every sync is a dry run against the live world first; identical → silent, stamp remembered; differences → the summary is the question (*Apply / Not now / Skip this packet*). **The table wins:** an actor whose `_stats.modifiedTime` in the world is newer than the packet's copy is **kept**, its diff shown under *Kept — the world is newer than the packet*, no write, no question — until the export flows back and the packet catches up |

### What was done

| Piece | Commit | Detail |
| --- | --- | --- |
| Module 1.7.0 | `c13a3bb` | the table above; plus **export back** — the active GM's client writes the whole world to `<Data>/npc/waluipedia/<world>/export/<world>-all-actors.json` 120 quiet seconds after the last change to any world actor / item / effect (settings *Export back*, *Export delay*); `checkGitHubVersion` says when the branch has a newer module than the one running. Tests 210 (222 over the GM's export + the real packet); zip 11 files |
| Suite — the other direction | `c13a3bb` | `find_exports` reads the module's export-back folder like Downloads (newest stamp wins); `--git-sync`: `git pull --ff-only` before a pass when clean and behind (the suite's own earlier commits are rebased with `--autostash`; anything else uncommitted refuses the pull and says so), after a successful pass `git add` of the suite's own paths only (`actors/worlds/<world>`, `actors/cast`, `data/sheets.json`, the root export) → `sheets-suite: <world> mirror from export <stamp> — N file(s)` → `git push` to the tracked branch; `--watch` polls GitHub every `--git-interval` (300 s) and runs a pass when it pulled something. `start.py`: *Two-way with GitHub* tick / `--git-sync`. Suite tests 135 (a throwaway origin with two clones) |
| Icons | `b8b0aae` | `iconFixes` (above); organizer tests 61 |
| Docs | this commit | module README 1.7 section, `SHEETS_SYSTEM.md`, this addendum |

So the loop is now: **GitHub → suite (pull) → packet → Foundry asks → Apply → the table plays → export back (2 min) → suite splits, rebuilds, commits, pushes → GitHub.** The module updates itself through the same loop: the pull brings the new `mass_import/`, the pass installs it into `Data/modules/`, the 1.6 loader runs it after a plain F5; when GitHub is ahead of the install the module says so at `ready` and in the summary.

### Hjumpik's XP, award by award

The question was whether he really has 25,342 XP and has been under-levelled.
The ledger behind `XP_SUMMARY` is the standalone page's `PLAYERS` table
(`Reputation-Matrix2/app/pages/standalone/xp.html`); his entry there:

| # | XP | cat | kind | date | title |
| --- | ---: | --- | --- | --- | --- |
| 1 | 200 | discovery | prior | Prior Ledger | Passive Intel — Shadeward Manor |
| 2 | 400 | survival | prior | Prior Ledger | Ol Burley Eviction — Kiting Operation |
| 3 | 250 | social | prior | Prior Ledger | Wario Blackmail — Asset Recovery |
| 4 | 500 | discovery | prior | Prior Ledger | Rakshasa Lore — The Midnight Gate |
| 5 | 350 | social | prior | Prior Ledger | Pond Mediation — Hag vs. Mermaid |
| 6 | 600 | discovery | prior | Prior Ledger | Underwater Chest — Orange Teleportation Crystal |
| 7 | 1200 | combat | prior | Prior Ledger | Spider Grove Battle — The Maze Walker Fights |
| 8 | 800 | combat | prior | Prior Ledger | Mazebound Skirmish — Singing Predators |
| 9 | 600 | combat | prior | Prior Ledger | Shadowfell Encounters — Fighting Without Daylight |
| 10 | 500 | combat | prior | Prior Ledger | Vigilance Defense — Airship Combat |
| 11 | 1500 | exploration | prior | Prior Ledger | The Maze of Time — Navigating Temporal Corridors |
| 12 | 900 | exploration | prior | Prior Ledger | Shadowfell Pathfinding — Tracking in the Grey |
| 13 | 700 | exploration | prior | Prior Ledger | Shadow Estate Grounds — Mapping the Unknown |
| 14 | 500 | exploration | prior | Prior Ledger | Deep Mirror Transit — Impossible Geometry |
| 15 | 1200 | survival | prior | Prior Ledger | Dimensional Transit Survival — The Fracture |
| 16 | 800 | survival | prior | Prior Ledger | Extended Shadowfell Endurance — Weeks in Grey |
| 17 | 500 | survival | prior | Prior Ledger | Resource Management — Living Off Dead Land |
| 18 | 1000 | discovery | prior | Prior Ledger | Temporal Anomaly Documentation |
| 19 | 600 | discovery | prior | Prior Ledger | Shadow Estate Lore — Corvinarus History |
| 20 | 400 | discovery | prior | Prior Ledger | Planar Boundary Analysis |
| 21 | 700 | social | prior | Prior Ledger | Party Coordination — The Quiet Anchor |
| 22 | 400 | social | prior | Prior Ledger | Shadowfell Negotiations |
| 23 | 800 | stealth | prior | Prior Ledger | Reconnaissance Operations |
| 24 | 500 | stealth | prior | Prior Ledger | Shadow Estate Infiltration |
| 25 | 700 | loyalty | prior | Prior Ledger | Party Bonds — Standing With Disaster Inc. |
| 26 | 400 | loyalty | prior | Prior Ledger | Archie's Artifacts — Preserving a Friend's Legacy |
| 27 | 250 | combat | prior | Prior Ledger | Brawl Stabilization |
| 28 | 200 | social | prior | Prior Ledger | Negotiation and Confrontation |
| 29 | 200 | stealth | prior | Prior Ledger | Document Recovery |
| 30 | 230 | chaos | meta | Dossier | Dossier Filed — Hjumpik Deldkur |
| 31 | 320 | exploration | event | 2-26 Efferd, 1040 BF | Event — The Ravencreek Transition — Shadows, Steam, and the God Toad's Wrath |
| 32 | 360 | combat | event | 1 Efferd, 1040 BF | Event — Dragon Mountain — The Night Everything Started |
| 33 | 480 | stealth | event | ~17 Harvestside, 1040 BF (relative timing unstable) | Event — The Feyward Revel and the Book of Many Things |
| 34 | 430 | stealth | event | ~18 Harvestside, 1040 BF (relative timing unstable) | Event — The Feyward Revel Crisis: Poison, Plants, and Frozen Diplomacy |
| 35 | 220 | survival | event | ~19 Harvestide, 1040 BF (Feyward time — unreliable as always | Event — The Dark Rooms and the Balcony Plan |
| 36 | 450 | stealth | event | 8–10 Harvestside, 1040 BF | Event — The Hag of Ferngrove Manor |
| 37 | 360 | combat | event | 24th Highsun through 29th Highsun, looping to 5th-8th Harves | Event — The Overgrown Manor Campaign |
| 38 | 390 | survival | event | 19 Harvestside, 1040 BF — 5:00 AM | Event — The Lounge Incident and the Paper War |
| 39 | 310 | social | dupe | 21st-29th Highsun through 5th-8th Harvestide, 1040 BF (Tempo | Location/Campaign — The Overgrown Manor Campaign |
| 40 | 190 | discovery | battle | 19 Harvestide, 1040 BF — 05:00 | Battle Record — The Lounge Brawl |
| 41 | 380 | combat | battle | Faystyl 24, Year 722 | Battle Record — The Solarium Detonation |
| 42 | 190 | discovery | battle | Faystyl 24, Year 722 | Battle Record — The Duel of Thistle |
| 43 | 330 | combat | battle | Faystyl 24, Year 722 | Battle Record — The Rescue of Steely |
| 44 | 330 | combat | battle | Day 18-19, 1040 BF | Battle Record — The Siege of Raventree |
| 45 | 150 | discovery | battle | Day 30, 1040 BF | Battle Record — The Behir Ambush |
| 46 | 330 | combat | battle | Day 30, 1040 BF | Battle Record — The Thunderdome Incident |
| 47 | 330 | combat | battle | Day 30, 1040 BF (Evening) | Battle Record — The First Night at Raventree Manor |
| 48 | 330 | combat | battle | 1-2 Harvestide, 1040 BF | Battle Record — The Petrification of Remi |
| 49 | 150 | discovery | battle | Unknown — Feywild temporal displacement | Battle Record — The Orange Alignment |
| 50 | 150 | discovery | battle | Highsun 21, 1040 BF | Battle Record — Battle of the Mirror Room |
| 51 | 420 | combat | battle | Faystyl 24, Year 722 | Battle Record — The Escape from the Hag's Hut |
| 52 | 70 | loyalty | meta | Collection | Collection Membership — Core Disaster Inc. Members |
| 53 | 220 | exploration | dupe | 1 Efferd, 1040 BF | Campaign Origin — Dragon Mountain, Day One |
| 54 | 180 | combat | dupe | 2–26 Efferd, 1040 BF | Early Campaign — Ravencreek to Swiftsoul |
| 55 | 360 | exploration | event | 23 Harvestide, 1040 BF — Feyward Vine / Morel / Steely Sessi | Event — Toad Lee’s Missing Time, Morel’s Key, and Steely’s Last Warning |

Sums: **Prior Ledger 17,650** (29 undated entries, 70 %) · session events
3,370 (9) · battle records 3,280 (12) · campaign-label duplicates 710 (3: the
Dragon Mountain, Ravencreek and Overgrown Manor sessions awarded a second time
under another label) · meta 300 (*Dossier filed*, *Collection membership*) =
**25,310**. Three figures for the same ledger live in the repo and none is the
entry sum: the standalone header says **25,022**, `index.html`'s `XP_SUMMARY`
says **25,342** with `entryCount` 56 (one entry more than the table). Every
one of them is Level 7 (23,000–33,999), so the drift does not change the
answer, but it is bookkeeping drift and is left for the GM — the filing rules
forbid touching the ledger from a run.

Findings:

1. **The ledger reconciles.** 55 entries, every one named, the sum is what
   it says; the 26 dated ones (9 session events, 12 battle records, 3
   campaign labels, 2 meta) all point at records the archive has, with
   Hjumpik among the participants — the 9 event rows are the same nine
   `XP_EVENT_AWARDS` rows `index.html` renders.
2. **70 % of it is the Prior Ledger block** — 29 undated, round-number
   entries (200–1,500) written up after the fact for the Shadowfell / Shadow
   Estate / Vigilance / Maze of Time era. None of them carries an event id or
   a date. By theme they sit in arcs the archive has him in (47 records name
   him), but six have no filed counterpart by name at all: *The Maze of Time*
   1,500, *Temporal Anomaly Documentation* 1,000, *Party Coordination — The
   Quiet Anchor* 700, *Party Bonds* 700, *Underwater Chest — Orange
   Teleportation Crystal* 600, *Wario Blackmail — Asset Recovery* 250 =
   4,750. The rest (*Spider Grove Battle*, *Vigilance Defense*, *Shadow
   Estate Infiltration*, *The Fracture*, *Ol Burley Eviction*, *Pond
   Mediation*, …) name things the archive has, without saying which session.
3. **He is not inflated relative to the party.** The same recipe built every
   core member's ledger: Markop 73 % prior (36,219), Remi 71 % (31,158),
   Bowser 69 % (35,592), Archie 56 % (22,680), Hjumpik 70 %. His dated XP
   (6,650 clean) is the lowest of the five, consistent with fewer filed
   sessions (55 entries against 61–73). The Foundry sheets of the others follow
   their ledgers (Markop 37,249 Paladin 8, Remi 23,000 Artificer 7, Archie
   20,000 Wizard 6, Waluigi 11,911, Eager 4,860, Toad Lee 5,790 — the last
   three are exact ledger values of 12 Sept, when the GM pinned them).
4. **The sheet is the outlier, not the ledger.** Hjumpik's sheet reads 16,712
   XP, Fighter 6 (Samurai), last touched 12 Sept 02:40 — the same night as
   Toad Lee and Waluigi — and 16,712 is no ledger value in the repo's history.
   Under the campaign's own convention (ledger authoritative, the rule that
   levelled Markop and Remi) he has been Level 7 since the ledger passed
   23,000: running the dated entries in order with the Prior Ledger in front,
   the crossing is the **Lounge Incident / Lounge Brawl, 19 Harvestide 1040
   BF** (22,380 → 23,180); the Amnesia-vines session, the Orange Alignment and
   the four 722-clock battles came after — about nine sessions at Level 6
   that the ledger paid as 7.
5. **The soft spots, if the GM wants the ledger strict:** the 710 of
   campaign-label duplicates and the 300 of meta awards. Without them he is at
   24,332 — still Level 7 by 1,332. Striking the six Prior Ledger entries with
   no filed counterpart too (4,750) leaves 19,582 — Level 6, 3,418 short.
   That is the only reading on which the sheet is right, and it would re-open
   every core member's level the same way (Markop's and Remi's blocks are
   built alike).
6. **Pending, not in any ledger** (filed on the events as previews, per the
   process): 2,060 XP from the four Feyward 722-clock sessions — *The Guard
   With No Name* 320, *The Battalion of Six* 580, *The Reclamation of the
   Library* 540, *I Can't Afford Not to Care* 620. Confirmed, he is at 27,402
   (or 27,370 off the entry sum): Level 7, 6,598 to Level 8.

What the sync does with it: the packet puts the ledger's 25,342 on the sheet
(`XP 16712 → 25342`) and shows the **⬆ Level up at the table** banner; the
class stays Fighter 6, nothing is converted, no question is asked for it; the
player takes level 7 in dnd5e's own level-up, and the next export carries it
back.

### What the GM does now

1. Pull, run `start.py` with *Two-way with GitHub* ticked (or
   `python3 tools/sheets-suite.py --watch --git-sync`). Read its `git :` and
   `foundry :` lines.
2. In Foundry, F5. The console opens with `[waluipedia-mass-import] 1.7.0
   ready`; a few seconds later the question: *Sync — N changed: apply?* with
   the full diff. Read the *Kept* section if there is one (what the table
   changed since the export), the *Notes*, then **Apply**.
3. Eager's and Dan's sheets: the summary offers *Use Toad — Eager Variant
   instead of Grung* (and the Catastrophe Scout background) — one click each,
   or leave the Grung if that is what the table wants.
4. Fix or drop the four bare / wildcard images in Foundry when convenient.
5. Decide Hjumpik: Level 7 under the ledger (take it at the table); or tell
   me which reading of the Prior Ledger block to apply, and the ledger, the
   sheet and the packet move together.

### Not done

- The ledger drift (25,022 / 25,310 / 25,342) and the campaign-label
  duplicates are reported, not corrected — the filing rules say the ledger is
  the GM's to change.
- `--git-sync` commits only the suite's own paths; a hand edit elsewhere in
  the checkout is left uncommitted and blocks the pull until it is dealt
  with, on purpose.
- The export back needs a GM client open for two quiet minutes after the
  last change; closing Foundry at once leaves the export for the next load.

## 12. Addendum — testing it: the Feyward spoils, the filing step, a new NPC, a Foundry-only GM (2026-10-05)

**Asked.** Put the items the party picked up in the Feyward on their sheets;
make sheet changes a step of filing an event; make sure a new NPC in an
event flows to a sheet and to Foundry without breaking anything; say what
happens when the GM never runs `start.py` and only runs Foundry; audit the
portraits (§ separate report) and add the Liberated Toads.

### What was found

The archive already had a registry of what characters hold —
`Reputation-Matrix2/data/inventory.json`, the Inventory tiles on the site —
and the only sheet-side path was a hand-written dated changes file
(`changes/2026-10-04-grove-spoils.json`). Nineteen registry holdings were on
no sheet at all, Hjumpik's OC Soul Ring and Morel's key among them; the
Feyward sessions had added five more objects nobody had registered. Six
others were already on the GM's sheets under his own names (Pepper Spray,
Dagger, the Dinner Party Revolver, the Mirror in custody, the Trowel, the
'Wally' kit) — a tool that did not know that would have doubled them.

### What was done

1. **Feyward spoils registered** (`inventory.json`): the Raventree Signet
   Ring and the Book of Revised History (dark rooms and balcony planning),
   the Woodfellow library card (the revel crisis), the wolf-pelt onesie
   (I can't afford not to care) → Hjumpik; the Colour Division handcuffs
   → Waluigi. Not registered on purpose: the Book of Many Things (not
   kept), the heir's map (stayed on the table), Red's key, the papers
   (returned to Saedia), the Umbral Signet. `foundry.aliases` on the five
   items the GM keeps under other names.
2. **`tools/spoils-to-changes.py`** — the registry's holdings minus what the
   table's export already carries → the generated
   `changes/spoils-midlands.json`. Presence is judged against the **export**
   (`manifest.source`), never against the mirror the tool itself wrote, so
   the file is stable across passes; a renamed item keeps its
   `flags.waluipedia.inventoryItem`; an item the GM deletes after a packet
   was applied goes under `declined` and is not offered again (the module's
   export back now says which packet was applied — `lastSync.applied`,
   1.7.1). Type from the registry words (`foundry.type` to override; a
   weapon without a `foundry.system` is filed as described loot and
   reported), icon from a keyword table checked against the image library,
   description from summary + features + obtained + status + Waluigi's
   line. First run: **14 items on 7 sheets** — Hjumpik ×7, Bowser ×2, Eager,
   Markop, Remi, Toad Lee, Waluigi — 6 matched by alias, 7 hidden slots
   left private.
3. **Filing process Step 4b** (`docs/SESSION_FILING_PROCESS.md`): walk the
   beat list for *found / pocketed / kept*; one `items` entry + one
   `inventories[<article id>]` row; what not to register; aliases; then
   nothing — the suite's `spoils` step (before `changes`) writes the file,
   applies it, the packet carries it, the Sync asks. `--check` in
   `check-all`.
4. **A new NPC in an event** — proven with a throwaway *Test Fairy* article
   (no image, Feywild affiliation): `build-character-sheets.py` → an npc
   sheet (CR 0, a club and an *As Filed* feature, `mystery-man.svg`, folder
   *Rakasha & the Feywild* read off the affiliation) → `sheets.json` row
   with an empty portrait → packet 330 → the Sync's row read **new**.
   Nothing broke; `check-sheets` passed; the article's removal took it out
   again on the next build. Written into `docs/SHEETS_SYSTEM.md`.
5. **The Foundry-only GM.** Into Foundry nothing is lost: the Sync falls
   back from Data to the launcher to GitHub, still asks, still keeps actors
   the table changed after the packet was built. Out of Foundry the world
   keeps exporting itself, but nothing reads it — the mirror, the ledger
   pins, the spoils check all stop at the last export the archive saw. From
   **module 1.7.1** the module notices at world load (`syncLastApplied`
   against the packet's `exportedAt`): an export back unread for more than
   a day is a yellow toast naming what to run; younger ones a console line.
   Documented in `docs/SHEETS_SYSTEM.md` and the module README.
6. **Liberated Toads** — the Command page had a full-body cut for all 75
   roster toads and 54 had no article: `tools/file-roster-toads.py` files
   them as micro-articles from the roster (nothing beyond the roster line,
   `needsReview`), the builder gives each a sheet (`sheetRole` from the
   bloc + weapon table; rifle and sling added as weapons) with the roster
   cut on the token, the packet grows to 383 actors in a *Liberated Toads*
   folder. Four roster spellings map to existing toads (Somkin J = Smoking
   J, Dewdrop, Ironspore, Metpetal).
7. **Portraits** — `docs/run-reports/2026-10-05-portrait-audit.md`: every
   lead classified; a shelf of 339 unreferenced files found under
   `portraits/`, and finished plates from it wired for Captain Syrup
   (token; a lead painted from it), Captain Toadette (the last hotlink
   gone), Creek (no longer a river) and Speaker Rivers (token); Smoking J
   and Usk full-body plates made; the builder now puts `fullBody` on the
   token of a generated sheet; the 9×9 grid idea answered with the
   arithmetic (one plate per placed character, 3×3 at most for background
   NPCs).

### Numbers after the run

`check-all` green but for the pre-existing grove check; spoils tests 20,
sheets suite 139, bridge 58, module 215 (230 with the real packet — 232
created, 148 updated, 3 replaced), studio 44, sheets page 76; `check-sheets`
242 sheets / 210 generated / 18 public; the generated spoils file current
under `--check`.

### What the GM does now

1. Pull; `start.py` with *Character sheets* (and *Two-way with GitHub*)
   ticked. The pass prints `spoils : 14 item(s) to add on 7 sheet(s)…` and
   publishes the packet.
2. In Foundry, F5 → `[waluipedia-mass-import] 1.7.1 ready` → the Sync
   question lists `Hjumpik Deldkur — + The Raventree Signet Ring, The Book
   of Revised History, …` and 54 **new** rows under *Liberated Toads*. Apply,
   or *Not now*.
3. Delete at the table whatever is wrong; the next export back marks it
   declined and the archive stops offering it.
4. When the next event is filed: Step 4b — register what was kept, run the
   suite, done.

### Not done

- Items are added, never removed by the archive: a `status` of *consumed* in
  the registry does not take the item off the sheet (the table owns
  consumption).
- Only `data/inventory.json` holdings travel; equipment the article prose
  mentions without a registry line stays prose.
- The 45 small leads, the seven scene leads and the four non-portraits are
  listed, not re-rendered; ~320 orphaned files under `portraits/` are listed,
  not triaged.
