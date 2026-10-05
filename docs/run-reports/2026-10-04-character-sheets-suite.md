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
