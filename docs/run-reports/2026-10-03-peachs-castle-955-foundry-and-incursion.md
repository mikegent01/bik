## Run report

### Files created or edited

CREATED
  tools/build-peachs-castle-955-actors.py — deterministic dnd5e 5.3.3 / core 14 NPC generator for the whole 955 BF packet (30 actors), modelled on `tools/build-sanctum-npcs.py`; `--check` round-trips the files on disk; validates type npc, 16-char ids, no species/class/background items, unlinked tokens, every `icons/…` path against `image paths.txt`, every token against the installed cutouts, and that each biography anchors the era
  Reputation-Matrix2/actors/peachs-castle-955/README.md — install steps, two tables (court / incursion) with CRs and hooks, a drop-in encounter, design notes
  Reputation-Matrix2/actors/peachs-castle-955/fvtt-Actor-pc955-*.json — 30 import-ready NPC exports (17 court, 13 incursion); sanitizer `--check` reports all clean
  Reputation-Matrix2/portraits/peachs-castle-955/*.png — 36 token/portrait PNGs: every packet cutout down-scaled to ≤ 512 px with transparency (Foundry path `portraits/peachs-castle-955/<file>.png`)
  docs/run-reports/2026-10-03-peachs-castle-955-foundry-and-incursion.md — this report

GENERATED (viewed before acceptance)
  docs/3d-reference/peachs-castle-955/bowser-incursion-sheet-a.png — true 2 × 2, 1024 × 1024 (Koopatrol, Bob-omb sapper, Paratroopa with spear, Sledge Bro)
  docs/3d-reference/peachs-castle-955/bowser-incursion-sheet-b.png — 1408 × 768, irregular 4-over-2 with a duplicate Boo and a duplicate Lakitu (Dry Bones, Boo, Chargin' Chuck, Lakitu kept)

CUT AND CROPPED (tools/splice-sheet-cutouts.py, deterministic)
  8 × foe-*.png from the two new sheets (268–486 px); the Lakitu's hair-thin fishing line did not survive the matte, the spiny egg did — noted in the README
  5 × foe-*.png from already-committed Hunyuan plates (koopa-troopa, goomba, hammer-bro, magikoopa from `bowser-troops/`; bowser from `beanbean-battle/`) so the whole force has tokens — source plates untouched (Rule 0)

EDITED
  tools/splice-sheet-cutouts.py — `pc-bowser-a` (2 × 2 boxes from the divider scan at x/y 509–514), `pc-bowser-b` (four explicit boxes; the bottom-band dark run at x 299–323 is Chuck's helmet, not a divider), and a `pc-foe-<name>` loop of single-plate cutout entries for the five reused bases
  tools/check-all.py — registered `peachs castle 955 actors` (`build-peachs-castle-955-actors.py --check`) next to the other generated-actor checks
  docs/3d-reference/peachs-castle-955/README.md — new "interloper's force" section (both sheets, reused bases), a "Foundry VTT sheets" pointer, reproduce commands for the new sheet keys; "Not generated here" no longer lists Bowser
  Reputation-Matrix2/actors/README.md — pointer section for the subfolder and the PC-Bowser / era-Bowser rule

### How the request was read

"Foundry VTT character sheets for them all" → one dnd5e NPC actor per figure in the 955 packet. Duplicated poses (door-spear a/b, attention a/b, crossbow a/b, the two cooks, the three mages) share one sheet each and ship the alternates as token files, so 23 court cutouts become 17 actors. Levels are taken from the XP ledger: Princess Peach and Toadsworth the Elder are level 4 there, so they sit at CR 2 and CR 1 — a sovereign and a chamberlain, not duelists.

"Generate more sheets for the enemy — an interloper Bowser interrupts a crucial meeting — generate some units" → a scene kit, not a filed event. Two new unit sheets (eight units chosen for what a palace break-in needs: a sapper for the doors, a battering ram, a window entry, a spotter, an infiltrator, a corridor-holder, an elite door-guard and a heavy), plus tokens and sheets for the four Troop regulars and Bowser whose Hunyuan bases already existed. Bowser is CR 7 and Large; the canon record (`highsun_1_955_bf_the_day_of`) has the guards drag him across a corridor that night, so he is built to be beatable by a hall full of guards plus a hero or two. The present-day Bowser is a player character (level 8, `fvtt-Actor-bowser-kzNSSjAedvhKTfZC.json`); the era sheet says so in its own biography and both READMEs say never to import one over the other.

### Events filed

No events filed or changed this run. The council scene is a GM kit; `events.json`, `characters.json`, `locations.json` and the XP ledger are untouched.

### XP awarded

No XP awarded this run.

### Checks

- `python3 tools/build-peachs-castle-955-actors.py --check` → OK, 30 files current
- `python3 tools/sanitize-foundry-actor.py "Reputation-Matrix2/actors/peachs-castle-955/fvtt-Actor-pc955-*.json" --check` → exit 0, every file "clean — nothing to repair"
- `python3 tools/rebuild-actors.py --check` → still clean (the subfolder is outside its flat glob by design)
- `python3 tools/check-all.py` → the new check passes; the same three pre-existing failures as before this branch (judgement in the grove, alliance cache, map lenses)

### What is not done / open

- Spellcasters (the Mages' Guild adept, the Magikoopa) carry text spell lists, not spell items — drop the SRD spells on if you want them rollable.
- Features are text with `uses` for X/day and recharge; they have no automation activities (same convention as the Oracle / Orange T sheets).
- Thornpaw still has no plate or sheet.
- The weapon attack activities follow the schema of the repo's own dnd5e 5.3.3 exports (`dnd5eactivity000`); not re-imported into a live Foundry here — if an import complains, the generator is the single place to fix it.
- `pip install pillow numpy opencv-python-headless onnxruntime` was needed in the sandbox for the splice tool; nothing vendored.
