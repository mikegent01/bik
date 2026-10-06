# Character Sheets — the Foundry sheet behind every character article

**Routes:** `#/sheets` (the list) · `#/sheets/<character id>` (one sheet)
**Panel:** every character article (`#/article/<id>`) carries a *Character
sheet* panel under its token/sheet band
**Data:** `Reputation-Matrix2/data/sheets.json` (the index) ·
`Reputation-Matrix2/actors/cast/` (the generated actors + one Mass Import
packet)
**Code:** `assets/sheets/sheets.js` (global `CAST_SHEETS`), `assets/sheets/sheets.css`
**Builder:** `tools/build-character-sheets.py` (`--check`, `--list`, or write)
**Checks:** `python3 tools/check-sheets.py` · `node tools/tests/test-sheets-page.mjs`
· `node tools/tests/sheets-live-smoke.mjs` (needs `:8765`)

> The one rule readers meet first: **only Disaster Inc. members' sheets are
> public.** Every other sheet exists, downloads and imports, but it shows on
> the site only while **Settings → Developer → Debug mode** is on — and then
> loudly, with a banner on the list and a ribbon on the panel. Debug mode is
> for the GM at the desk, not the players at the table.

---

## What the system is

The archive had 190 character articles and 32 of them had a Foundry actor
somewhere in the repo — the players' live-world export, the PC intake, the
955 BF era packet. The rest (Mario, Luigi, Daisy, Kamek, King Boo, Kirby,
the Bone-Line, the Trinity class, every guard and courtier) had words and no
numbers.

The Character Sheets system closes that gap in one deterministic pass:

| Source | Count | What it is |
|---|---|---|
| `live` | 30 | the GM's real world export (2026-10-04), mirrored in `actors/worlds/midlands/` with its folder tree — the twelve player characters in `Players/`, the 955 BF court the GM imported, the manors' casts |
| `intake` | 2 | the PC packet (`actors/fvtt-Actor-*.json`) — Azure, Orange T (Bowser's and Wario's intake sheets now ride as alternates under their live sheets) |
| `era` | 0 | the 955 BF court packet (`actors/peachs-castle-955/`) is in the live world now; its files remain alternates. The 1035 BF siege packet (`actors/bowsers-castle-1035/`) binds the same way: its seven named figures have articles, and the packet files ride as era alternates under them until the GM imports the packet |
| `generated` | 156 | built by `tools/build-character-sheets.py` from the article's own text — 122 NPC stat blocks, 34 main-cast player characters |
| skipped | 6 | deliberately not statted — the GM, the collectives, a cosmic entity |
| *past selves* | 3 | era versions under a character (`versions[]`): Mario, Luigi and Bowser in 955 BF — `actors/cast/eras/` |

(`meta.counts` in `sheets.json` is the live tally; this table is the state
on 2026-10-04 and `tools/check-sheets.py` fails when the committed counts go
stale.) Every one of the 188 is a dnd5e actor file that imports through the
[Mass Import module](../Reputation-Matrix2/Foundry/mass_import/README.md), and
the 156 generated ones plus the past selves ship together as
`actors/cast/import.json` (folders: the website groups themselves, past
selves in the era folder *Peach's Castle 955 BF*) — and the sheets suite
merges that packet with the world mirror and the 955 BF packet into the one
`actors/worlds/<world>/import.json` the Mass Import module syncs.

## The visibility rule

```
visible(sheet)  =  sheet.party === true  ||  debugOn()
```

`party` is decided by the builder, not by hand, from three facts the archive
already keeps:

1. the **party roster** — `Reputation-Matrix2/actors/folders.json` →
   `players.roster`: one row per player character (live Foundry id, sheet
   name, website id, ledger key; Green T `offLedger`), plus
   `players.companions` (the motorbike, the Steel Defender). This is the one
   list every tool reads: `is_party`, `match_existing` (the row's live sheet
   is the article's primary sheet, matched by id — Feyward Dan is not the
   Liberated Toads' *Dan*), the organizer (roster → Players, tagged `pc`),
   `promote-player-sheets.py`, the bridge's `check` / `check-packet`;
2. the XP ledger's faction — `disaster_inc` or `disaster_inc_allies` in
   `index.html`'s `XP_SUMMARY` (the same table the Characters tab prints);
3. the article's `affiliation` field naming Disaster Inc.

Eighteen sheets pass: the twelve roster characters (Archie, Bowser, Dan the
Toad, Eager, Green T, Hjumpik, Markop, Remi, Salam, Toad Lee, Waluigi, Wario)
and the allies the ledger / affiliation admit (Bones, Mossy, Roger, Ryan,
Smoking J, Usk). They are grouped under *Disaster Inc.* and each entry
carries a `partyWhy` saying which fact admitted it. `tools/check-sheets.py`
fails if the committed flag disagrees with the rule, if a roster character is
not public or not resolved to its live sheet, or if anyone is party "by sheet
type" — so nobody can be made public by editing the JSON.

**What is not a fact: the dnd5e sheet type.** From the first Character Sheets
build until module 1.9 a fourth rule read "a live `character` sheet admits
its owner" (how Salam joined when his statblock was promoted). The GM builds
NPCs on character sheets too — Mario, Luigi, Kirby, Sans, Toriel, thirty-odd
of them — and the rule made every one of them a public party member, which
the organizer then filed into *Players* and tagged `pc`. The rule is gone;
the roster replaced it. (`kind: "pc"` in the index still means *rendered as a
character sheet*, which is a layout fact, not a party one.)

Debug mode is the site's existing toggle (`localStorage['waluipedia-debug-v1']`,
`debugOn()` / `toggleDebug()` in `index.html`). When it flips, `toggleDebug`
calls `CAST_SHEETS.refreshSearch()` so the Research Bureau's sheet records
appear and disappear with it. What debug mode changes:

| | public | debug |
|---|---|---|
| `#/sheets` list | the 18 party cards, one line saying how many more exist | every card, dashed borders on restricted ones, a striped **DEBUG MODE** banner |
| `#/sheets/<id>` | party sheets render; the rest show a *Restricted sheet* notice | every sheet renders; restricted ones under the banner |
| character article panel | party characters get the panel; the rest get **nothing** — no stub, no lock icon | every character gets the panel; restricted ones carry a ribbon; skipped characters get a one-line *No sheet on purpose* |
| Research Bureau | sheet records for party characters only | all of them |
| sidebar count | 18 | 188 |
| Settings → Developer | a *Character sheets* row stating the rule and the restricted count, with an *Open sheets* button | the same row, saying it is ON |

## The index (`sheets.json`)

```
meta      generator, note, visibility {public:'party', debug:'all'},
          folderScheme, castImport, counts {characters, sheets, generated,
          existing, party, skipped}, party[]
sheets[]  id, name, title, sheetName, source, file, alternates[],
          party, partyWhy, group, portrait, ledger {level, powerLevel},
          kind pc|npc, abilities {str..cha}, hp, speed, size, items, ac,
          acApprox, cr | level+classes+species, type,
          + for generated: role, bespoke, evidence[{feature, quote, source}]
          + for generated PCs: pc {level, class, subclass, cr, hitDie, formula}
skipped[] id, name, reason
```

`file` is relative to `Reputation-Matrix2/`; `versions[]` lists the
character's **past selves** (`{version, era, label, when, file, name, kind,
level, classes, species, hp, ac, evidence[], …}` — see *Past selves* below)
and `alternates[]` the other actor files that resolve to the same character
(Remi's PC intake copy next to her live export, Lady Aurelian's PC build next
to her NPC statblock, the GM's live Mario statblock under the hand-authored
Mario). The primary is chosen by rank *live > intake > era*, and within a
source a `character` sheet beats an `npc` one of the same name. One rule sits
above the rank: **a hand-authored main-cast member (`BESPOKE`) is never
displaced by an NPC statblock** — when the only existing files for Mario or
Luigi are the GM's live stat blocks, the generated PC sheet stays primary and
the stat blocks ride as alternates (the page folds them into the version
strip). Player characters in the live world are kept on `character` sheets
by `tools/promote-player-sheets.py` (see *The live-world loop* below), so no
pin is needed for Bowser or Wario any more. `-NO-SPECIES` variants are not
sheets of their own and are never indexed.

`portrait` is the article's own image (local file or external URL), never a
Foundry icon path — the actor's `img` lives in a different namespace.

## How a generated sheet is built

The builder reads the article (`summary`, `description`, `title`, `status`,
`affiliation`, `race`, `type`) and the XP ledger, and produces a dnd5e actor
the same way the 955 BF builder does (it imports that module for `attack()`,
`feat()`, `sid()` and the icon library check): an NPC stat block for the
templated cast, a **player-character sheet** for the hand-authored main cast.

**Level → CR.** The XP ledger is authoritative for how strong a character is.
A generated CR is derived from the ledger level and **never exceeds it**;
characters without a ledger row get an archetype default (CR ½–2). The checker
enforces `cr ≤ level` on every file.

**Archetype.** `classify()` reads the article for a role — soldier, officer,
rogue, caster, priest, healer, scholar, noble, civilian, student, brute,
monster, spirit, beast, hero — and the archetype sets the ability spread,
saves, skills, hit dice and the shape of the action block. `ROLE_OVERRIDES`
pins the ones the words get wrong; an article may also name its own with
`sheetRole` (data, not a code table — the roster micro-articles below do,
because two sentences of roster prose are not enough words to classify
from).

**Portrait and token.** The actor `img` is the article's `image` (a local
file; a hotlink or nothing → `icons/svg/mystery-man.svg`). The prototype
token's texture is the article's **`fullBody`** plate when it has one
(`token_of()`), else the same portrait — a token is the whole figure on the
map, a bust is the article's picture. Live player sheets keep the GM's art
either way (`docs/IMAGE_GUIDELINES.md` §4b, the 2026-10-05 portrait audit).

Transparent plates for the token come from `tools/make-token-plates.py`
(`plan` → render → `cut` → `apply`; `check` in your hand; `render` does the
whole loop against the ComfyUI inside Comfy Desktop — Qwen-Image-2.1 draws
the alpha itself, the chroma key is the fallback; `heal` repairs plates an
older keyer speckled) and, with eyes on every one, from the Token Plate
Studio (`tools/token-plate-studio.py`, the *Token plates* button in
`start.py`: preview, crop, background removal, accept = plate + `apply`);
`docs/IMAGE_GUIDELINES.md` §4b.

**Roster micro-articles.** `tools/file-roster-toads.py` files every
Liberated Toad on the Command page roster
(`data/liberated-toads/toadslist-data.js`) that has no article — one
micro-article per roster line (number, bloc and tier, weapon, cap, seen in
the field, the CORE_DETAIL lore where the page has it), `needsReview` +
`microArticleFlag`, the roster's full-body cut as `image` and `fullBody`,
`sheetRole` from the bloc + weapon table, `generatedBy` so a re-run refreshes
only what it wrote. Four roster spellings map to existing articles
(ALIASES); the unnamed #69 is filed as *Unidentified Spore*. 54 toads became
sheets in the *Liberated Toads* folder on 2026-10-05; `--check` runs in
`check-all`.

**Weapons and features from the words.** Weapons match on whole-word
regexes (a *lance* is not a *glance*, a *pike* is not a *spike*); features
match on specific phrases, never on words every article contains. Each match
records the sentence it fired on as **evidence**, and that sentence is stored
on the actor (`flags["waluipedia-sheets"].evidence`) and in the index. The
sheet page prints the evidence list under the stat block, and
`tools/check-sheets.py` re-finds every quote in the article (same
normalisation as the builder) — **a quote that stops matching fails the
build.**

**Bespoke sheets (34) are player characters.** The main cast is hand-authored
in `BESPOKE`: Mario, Luigi, Daisy, Kamek, King Boo, Kirby, Dedede, Meta
Knight, E. Gadd, Mr. L, Bryan, Mystic Morel, Chief Thornpaw, Captain
Toadette, Chancellor Toadsworth, Dan, Bones, Orangus Cornelius, Vivian
Corvinarus, Sans, Papyrus, Toriel, Asgore, Flowey, King K. Rool, Captain
Syrup, Speaker L, Evil Mario, Director Mario, Fawthful, Mimbus, Paulo, the
Archivist, Marcus Ashford. A player may sit down as any of them, so each is a
dnd5e `type:"character"` sheet, not an NPC stat block: `PC_BUILD` names the
class, subclass, hit die, spell progression, species and background;
`pc_doc()` writes the class / subclass / species / background items the
system needs (`details.race` / `background` / `originalClass` point at
them, like the live PC exports), a linked prototype token, weapon and armour
proficiencies by class, XP at the level threshold. **The class level is the
XP ledger level**; where the ledger is silent the authored CR stands in
(rounded up, never below 1 — `pc_level()`). Hit points come from the hit
die and Constitution (`pc_hit_points()`), proficiency and save DCs from the
level, and the authored kit stays: weapons are marked proficient,
*Multiattack* becomes *Extra Attack* (flagged *arrives early* under level
5), features read as class features. A subclass appears from level 3 (the
2024 rule). The authored CR is kept in `flags["waluipedia-sheets"].pc.cr`
and the old rule still holds for it: never above the ledger level. Their
features are written, but each one still names a quote (`q=[...]`) that
must exist in the article, so the evidence rule holds for them too. Mario:
Monk 5 (Warrior of the Open Hand), AC 15, 47 HP, speed 40 — Stomp
(knock-prone on a running approach), Prodigious Leap, Extra Attack, Wing Cap
1/day, *Diminished* (eighty-five years of silence as a level of
exhaustion), *Missing Since 1039 BF* (the sheet says it is a
reconstruction). Luigi: Ranger 5 (Monster Slayer) — Poltergust strobe &
suction, Fear as Method, Containment Procedure, Guild Contractor, *The
Shadow Called L*. No spells are invented: a caster's class item carries the
progression and ability so the slots compute in Foundry, and the player
picks the spells at the table.

**Actor rules** (from [`actors/README.md`](../Reputation-Matrix2/actors/README.md)):
one file per character, deterministic 16-character ids (`sid("cast", id)`),
no invented magic items, icons verified against the image library, portraits
linked from `Reputation-Matrix2/portraits/`. Templated sheets: `type:"npc"`,
unlinked prototype tokens, no race/class/subclass/background items.
Hand-authored sheets: `type:"character"`, linked token, exactly one class,
species and background item (a subclass from level 3), class level = ledger
level. The builder's `--check` must round-trip JSON-equal;
`tools/foundry-bridge.py check Reputation-Matrix2/actors/cast` and the
sanitizer both pass on the output, and `tools/check-sheets.py` enforces both
rule sets.

**Past selves (era versions).** `ERAS` holds the earlier selves a character
can carry — one entry per version with `version`, `era`, `label`, `when`
(one sentence placing it), an explicit `level`, the same spec fields as a
`BESPOKE` entry and its own `pc=` tuple. `build_eras()` builds each through
`build_generated(…, era=…)`: a player-character sheet named *Name (955 BF)*,
id `sid("cast", "<id>--<version>")`, file
`actors/cast/eras/fvtt-Actor-<id>--<version>.json`, folder *Peach's Castle
955 BF* (the scheme's era folder for the label; *<group> / <era>* when the
scheme has none), flag `waluipedia-sheets.era {version, era, label, when}`.
Rules: **an era level never exceeds the ledger level** (the builder and the
checker both refuse it — a past self cannot hold more experience than the
present one; a prime shows in the kit), every feature quotes the article,
evidence is re-checked like any generated sheet. Shipped: Mario (Monk 5 —
Fire Flower, Super Mushroom, Eight Worlds' Stamina, Always Near Peach, Hero of
the Mushroom Kingdom, Annoyingly Heroic), Luigi (Ranger 4 — Hammer, Green
Fireball, Scuttle Jump, The Second Brother, Afraid Often, Startles, Sports
Appearances), Bowser (Fighter 8 — Claws, Shell Bash, Fire Breath 5–6, The
Shell, Indestructible, Kidnapper of Princesses, King of the Koopas). Versions
apply to existing sheets too: Bowser's present self is his live character
sheet (the intake PC promoted into the world), with the 955 BF self beside it.

## Where it shows up

- **Sidebar** — *📜 Character Sheets* with the visible count.
- **Characters tab → any character** — the sheet panel (public rule above):
  AC / HP / speed / six abilities, *Open the sheet*, *Foundry JSON*
  download, *All sheets*; one line saying where the sheet came from and,
  for generated ones, the ledger level that capped the CR.
- **`#/sheets`** — hero with counts, search box, group chips, cards grouped
  by faction; a footer explaining the generated sheets and the import loop.
- **`#/sheets/<id>/<version>`** — a past self: the same page with the
  version's header, a **version strip** (*Now — 1040 BF*, each era version,
  and the other real files the archive holds for the person), the era note
  (*an era version never exceeds the ledger level*), that version's evidence
  and download / raw / Mass Import links. The strip also appears on the
  present sheet whenever a character carries more than one.
- **`#/sheets/<id>`** — portrait, badges (PC/NPC, source, Disaster Inc. or
  Restricted, Hand-authored), download / raw / **Mass Import URL** (the
  `raw.githubusercontent.com` path the module's *Import by URL* accepts), then
  the fetched actor rendered as a classic stat block (NPC) or a PC summary
  (class line, saves, skills, attacks, features behind *Show all*, spells by
  level, inventory), then **Evidence** and **Other sheets for this
  character**.
- **Research Bureau** — kind `sheet`, label *Sheet*, opens the sheet page.
- **Settings → Developer** — the *Character sheets* row.
- **Front page** — one `SITE_UPDATES` card (`#/sheets`).

## Filing a new character (the step in the session pipeline)

```
1. file the article in characters.json (Step 3 of the filing process)
2. python3 tools/build-character-sheets.py          # writes the sheet + index
3. python3 tools/build-character-sheets.py --list   # read the role / weapon / CR line
   — wrong archetype? set `sheetRole` on the article (or ROLE_OVERRIDES); main cast? write a BESPOKE entry
4. python3 tools/check-sheets.py                    # quotes, CR ≤ level, wiring
```

If a session *changes* an article (status, affiliation, new paragraphs),
rerun step 2 — the evidence quotes are re-found and the party flag is
re-derived. If someone joins or leaves Disaster Inc. in `XP_SUMMARY` or
`affiliation`, their sheet's visibility follows on the next build; nothing
is toggled by hand.

Never run the builder *to replace* a live/intake/era sheet: it does not
write those files, it only indexes them. The live PC sheets are the players'
own; the two things the archive does write into them are below.

## The live-world loop (the sheet suite under `start.py`)

The GM's export is the input; the archive owns two facts about a player
sheet and nothing else:

1. **Player characters carry `character` sheets, never NPC statblocks.**
   `tools/promote-player-sheets.py` rewrites a player's statblock as a
   character sheet *under its live id* (so the Mass Import module's
   replace-on-type-change swaps it in with tokens, links and ownership
   intact). Three were promoted on 2026-10-04 — Bowser (the GM's warlord
   duplicate → the intake PC sheet), Wario (statblock → the intake PC sheet,
   Barbarian level from the ledger) and Salam (no PC sheet anywhere →
   Ranger 3 built from the statblock and the record, every assumption
   written into `flags.waluipedia-sheets.promoted` and the biography). The
   table in [`actors/README.md`](../Reputation-Matrix2/actors/README.md#player-characters-carry-character-sheets-toolspromote-player-sheetspy)
   has the detail. `--check` fails if anything under `Players/` is an NPC
   (companions excepted) and never touches levels — a sheet below its ledger
   level is a *level up in Foundry* warning.
2. **XP is the ledger's.** Every pass pins `system.details.xp.value` of
   every player sheet in `Players/` to `XP_SUMMARY`, so a session filing's
   `xpAwards` reach the sheets without anyone typing numbers. Green T is the
   listed exemption (the GM runs him at Tea Merchant 6 / Bard 6, 100000 XP).

Spoils of war travel as changes files in
`Reputation-Matrix2/actors/changes/` (`addItems` by id, scoped with
`appliesTo.exportedAtOrBefore` to the export they were written against, so a
later export — which already carries the table's version — is not
re-touched). Two kinds:

- **Generated — the registry's.** Filing an event registers what was kept
  in `Reputation-Matrix2/data/inventory.json` (Step 4b of the filing
  process: one `items` entry, one `inventories[<article id>]` row).
  `tools/spoils-to-changes.py` — run by the suite before the changes step —
  writes `changes/spoils-<world>.json` from the holdings the table's export
  lacks: type off the registry words (key/book/card → loot, ring/cloak →
  equipment, potion → consumable, kit → tool; `foundry: {type, subtype,
  img, system}` to override), icon off a keyword table (always in the image
  library), description from summary + features + obtained + status +
  Waluigi's line, `flags.waluipedia.inventoryItem` so the next export says
  the table has it. A sheet item under another name is matched by alias,
  possessive, leading *The*, trailing `(…)` or the flag and never doubled.
  An item the GM deleted after the packet was applied (the export back
  carries `lastSync.applied`, module 1.7.1) goes under `declined` and is not
  offered again until the row is removed. The first run (2026-10-05) put the
  Feyward spoils on the sheets — Hjumpik's OC Soul Ring, Raventree Signet
  Ring, Morel's key, Steely's fragments, the Book of Revised History, the
  Woodfellow library card and the wolf-pelt onesie; Waluigi's Colour
  Division handcuffs; Toad Lee's diary pages; Remi's Oracle's Deck; Markop's
  Black Crystal; Eager's Tea Book; Bowser's wand and badge — and found six
  already there under the GM's names (Pepper Spray, Dagger, the Dinner
  Party Revolver, the Mirror in custody, the Trowel, the 'Wally' kit).
- **Hand-written — dated.** For what the registry does not model: the Grove
  file adds Eager's *Electric Sphere* (trinket, flagged to
  `tech_grove_electric_sphere`, mechanics unestablished) and Feyward Dan's
  *Injury: Sprained Thumb* (row 59, one week, flagged to the Permanent
  Injury Table).

`tools/sheets-suite.py` runs the whole loop — intake, split, promote,
spoils, changes, organize, check, build, combine, publish, verify — once, under `--watch`
(what `start.py`'s **Character sheets** tick starts; it re-runs when an
export, `Players.json`, `data/inventory.json` or a changes file changes) or as `--check`
(read-only, run by `tools/check-all.py`). The packets it combines
(`worlds/<world>/import.json`, `worlds/<world>/players-import.json`) are
git-ignored and served by `start.py` with `Access-Control-Allow-Origin: *`
for **Mass import → URL**. `tools/tests/test-sheets-suite.py` is the proof.

**Publish** is the step that reaches Foundry without a URL. The suite finds
the Foundry Data folder (`--foundry-data`, `WALUIPEDIA_FOUNDRY_DATA`,
`FOUNDRY_VTT_DATA_PATH`, `Config/options.json`'s `dataPath`, the OS default
— `%LOCALAPPDATA%\FoundryVTT\Data` on Windows) and writes three things
there: the packets (`npc/waluipedia/<world>/players-import.json`,
`import.json`, `manifest.json`, `packets.json` with the stamps; the cast
packet under `npc/waluipedia/cast/`), the Mass Import module itself
(`modules/waluipedia-mass-import/`, kept identical to the checkout — the
gh-pages zip lags until the branch merges), and every repo-held image the
sheets reference, copied to the same relative paths (`portraits/…`,
`assets/images/…`; `foundry-bridge.py install-images`, only files that are
missing or differ). Nothing in the repo moves. **Publish runs last and only
when every check passed** — the mirror's `check`, the combined packets'
`check-packet` (ids, dnd5e identifiers, ownership maps, art paths, the roster
rules), `check-sheets.py`, `promote-player-sheets.py --check`; a failed step
ends the pass `FAILED`, nothing is copied into Data, and `--git-sync` commits
and pushes nothing.

**Art by URL (module 1.8, suite `--art-base`) — an opt-in since 1.9.** The
copies are the same bytes twice (36 MB of them on the GM's disk, and once
more per machine that imports). Foundry's `img` and
`prototypeToken.texture.src` accept absolute URLs, and `start.py` already
answers with `Access-Control-Allow-Origin: *` (the canvas needs it for token
textures), so 1.8 made the combine step write the repo's art as URLs on the
archive's own server — and at the table that did not work: with `start.py`
down every portrait and token was blank, players elsewhere could not reach
`127.0.0.1`, and the console filled with `HEAD …/favicon.ico` refusals. The
default is the copy again; with `--art-base` the combine step writes:
`http://<host>:8765/Reputation-Matrix2/portraits/player/fullbody/remi.png`
(`foundry-bridge.py art_url`; 464 image fields in the midlands packet, the
live players' own uploads under `npc/…` and `player/…` untouched). The host
comes from `--art-base URL` / `WALUIPEDIA_ART_BASE` (`start.py --art-base
auto` picks the Tailscale address when the launcher is *reachable from other
machines* — a node's `100.x` does not churn, so the packets do not either —
else the LAN one, else `127.0.0.1`); blank / `copy` is the default copy.
Three things keep it honest: the module re-points **placed tokens** when an
actor's prototype token moves (they copied the Data path when dropped), every
**export back lists `imagesInUse`** (scene backgrounds, placed tokens, tiles,
journal images, world items, macros, actors), and `split` turns the URLs back
into repo paths so the committed mirror never names a host. The publish step
then runs `foundry-bridge.py prune-images --write`: a Data copy under
`portraits/` or `assets/` is deleted only when the repo has the identical
bytes, the server returns those very bytes for its URL, the newest export
back does not reference the Data path, and no packet does — anything else is
kept and the reason printed (an export back from before 1.8 vouches for
nothing: nothing is deleted until the module exports once more). The cost:
**`start.py` must run whenever Foundry is open**, and players elsewhere need
the exposed address; `packets.json` carries `artBase` + `artProbe`, which the
module HEADs at load — the GM and each player get one yellow toast when the
server is not answering (with the fix: start `start.bat`; tick *reachable from
other machines*; ask the GM). A GM who syncs from GitHub without the suite
gets Data paths as before. With the default (copy) `packets.json` says
`artBase: null`, the module probes nothing, and `check-packet` treats a
repo-art or loopback URL in a packet as an error (`--allow-art-url` lifts
that for the opt-in).

The GM's side, in Foundry, is now **one click: Actors sidebar → Sync**
(module 1.3). It looks in the Data folder first, then the launcher URL
(`http://127.0.0.1:8765/Reputation-Matrix2/actors/worlds/midlands/players-import.json`),
then GitHub (the committed `manifest.json` + `Players/*.json` on
`gh-pages`), takes the first that answers, rebuilds the folders from each
actor's `folderPath`, creates / updates in place (a type change is reported
as skipped unless *replace on type change* is ticked — Bowser / Wario /
Salam's `npc → character` promotions went through that way, same id,
ownership kept) and
ends with a summary — replaced, changed, new, unchanged; per actor the XP
change, class line, `+ The Electric Sphere`, folder moves; a *Level up at
the table* line when the ledger is ahead (Hjumpik 6 → 7 is the players'
to take) — whispered to the GMs in chat as well. Shift-click = review table
first. A wrong file given to *Mass import* (the site's `sheets.json`, a
`manifest.json`) is refused with a message naming the right one.

**Folders, tags, colours** (module 1.4, `tools/organize-actors.py`). The
world's Actors sidebar is sorted the way this page is: `Players`, one
folder per website group (`Disaster Inc`, `Iron Legion`, `Koopa Troop`,
`Mushroom Regency & Kingdom`, `Mages' Guild`, `Shadow Estate & House
Corvinarus`, `Fawful's Furious Freaks`, `Overgrown Manor`, `Elsewhere`, …)
in the site's faction colours, and `Bestiary / ⟨creature type⟩` for the
generic statblocks. The organizer's rules live in
[`actors/folders.json`](../Reputation-Matrix2/actors/folders.json) and are
explained in [`actors/README.md`](../Reputation-Matrix2/actors/README.md#organize-folders-like-the-website-tags-colours-toolsorganize-actorspy);
every actor carries `flags["waluipedia-sheets"].tags` (group, pc/npc, role,
creature type, origin folder) and `.color`, which the module draws as chips
in the sidebar. A folder the GM made and coloured, or an actor the GM moved
after the organizer filed it, is left alone. The same pass also made the
Sync quiet: updates are diffs (an unchanged actor is not written), the
players' broken item identifiers are repaired before import, and the
deprecated progress bar is gone — see the module README's *1.4* table.

**Both ways, with a question first** (module 1.7, `--git-sync`). The loop
closes: *GitHub → suite (pull) → packet → Foundry asks → Apply → the table
plays → export back → suite → GitHub.*

* **Sync asks.** Every sync — the automatic one at world load or the button
  — is computed as a dry run against the live world first. Nothing pending:
  silent, the packet's stamp remembered. Differences: the summary opens as
  the question, *Apply / Not now / Skip this packet*. An actor whose world
  `_stats.modifiedTime` is newer than the packet's copy is **kept** (listed
  under *Kept — the world is newer than the packet*, no write, no question)
  — a session's edits are never overwritten by a packet built before them;
  once the export flows back and the packet is rebuilt, the stamps agree.
* **Export back.** The active GM's client writes the whole world to
  `<Data>/npc/waluipedia/<world>/export/<world>-all-actors.json` two quiet
  minutes after the last change to any actor, item or effect (settings
  *Export back*, *Export delay*). The suite reads that folder like
  Downloads — newest stamp wins — so the mirror, the player sheets at ledger
  XP, `data/sheets.json` and the next packet follow the table by themselves.
* **GitHub.** `tools/sheets-suite.py --git-sync` (start.py: *Two-way with
  GitHub*) pulls fast-forward before a pass when the checkout is clean and
  behind (a hand edit outside the suite's files blocks the pull and says so),
  commits what the pass wrote — `actors/worlds/<world>`, `actors/cast`,
  `data/sheets.json`, the root export — as `sheets-suite: <world> mirror from
  export <stamp> — N file(s)`, pushes to the tracked branch, and under
  `--watch` polls GitHub every `--git-interval` seconds (300). The module
  updates itself through the same pull: the pass installs the new
  `mass_import/` into `Data/modules/`, the 1.6 loader runs it after a plain
  F5, and the module says at `ready` when GitHub is ahead of the install.
* **Levels stay the table's.** The packet carries the ledger XP; the class
  level is never converted. *⬆ Level up at the table* is a banner, not a
  write; the player levels in dnd5e, the export carries it back.
* **Dead icons.** `actors/folders.json` → `iconFixes` renames core icon paths
  the GM's Foundry no longer has (checked against
  `tools/item sheet examples/image paths.txt`); the organizer applies it, the
  import carries it, the export confirms it.

**When the GM only ever runs Foundry** (never `start.py`, never the suite).
Half the loop still works and the other half says so:

* *Into Foundry* — nothing is lost. With no packet in `Data` the module's
  Sync falls back to the launcher, then to **GitHub** (the branch's
  `manifest.json` + cast + era packets, merged in the client). It still runs
  as a dry run first and asks *Apply / Not now / Skip*; actors the table
  changed after the packet was built are **kept** (`_stats.modifiedTime`
  newer than the packet copy), so a packet from last week cannot roll back
  last night's session. What the GitHub packet lacks is only what the table
  did since the archive last read an export — which is the other half.
* *Out of Foundry* — the world still exports itself back into
  `Data/npc/waluipedia/<world>/export/` two quiet minutes after a change,
  but nothing reads it: the mirror, the player sheets, the spoils check and
  the ledger pins all stop at the last export the archive saw. From module
  1.7.1 the module notices: at world load it compares its last export back
  with the export the packet in front of it was built from (`exportedAt` in
  `packets.json` / `manifest.json`). An unread export older than a day is
  a yellow toast — *N day(s) of table changes unread by Waluipedia — run
  start.py (or tools/sheets-suite.py) on the archive side* — younger ones a
  console line. Running `start.py` once with **Character sheets** ticked
  reads the waiting export, rebuilds the packet and (with *Two-way with
  GitHub*) commits it; the next Sync then has only the archive's real
  changes to ask about.
* *A new NPC the archive filed meanwhile* arrives the same way: the article
  in `characters.json` → `build-character-sheets.py` → a cast sheet (CR 0
  with a club and an *As Filed* feature when the article says nothing
  more, `icons/svg/mystery-man.svg` until a portrait exists, the folder read
  off the affiliation) → the packet → a **new** row in the Sync question.
  Verified 2026-10-05 with a throwaway *Test Fairy* article: 157 sheets
  built, the packet grew to 330, the row read `new · Rakasha & the Feywild`
  and the article's removal took it out again on the next build.

## Decisions

- **Visibility is a build output, not an authored flag.** The rule is
  stated once in the builder, mirrored once in `sheets.js`, and policed by the
  checker. "Only Disaster Inc. members" is exactly what the user asked for;
  allies who carry the ledger faction (Usk, Bones, Mossy) count as members
  because the ledger says so.
- **Restricted sheets leave no trace on public character pages.** A lock
  icon would advertise that a stat block exists for the enemy the party has
  not met. The list page does say how many sheets exist in total — the
  system should be discoverable, the numbers should not.
- **Generated sheets are honest about being generated.** The badge, the
  evidence list and the panel line all say so, and the CR cap means a
  templated sheet can never outrank the ledger.
- **`CAST_SHEETS`, not `SHEETS`.** `index.html` already owns a global
  `SHEETS` (the reading desk's field sheets at `#/sheet/<id>`, singular).
  The new route is `#/sheets`, plural; the old one is untouched.
- **Keyword matching is whole-word and phrase-based.** The first draft
  matched substrings and gave half the cast canes (*hurricane*) and clubs
  (*Sisterhood Club*). The per-character weapon/feature table printed by
  `--list` is the review surface after any change to the keys.
