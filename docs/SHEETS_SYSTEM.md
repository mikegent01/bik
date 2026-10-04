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
| `live` | 26 | the user's real world export, mirrored in `actors/worlds/midlands/` |
| `intake` | 4 | the PC packet (`actors/fvtt-Actor-*.json`) — Bowser, Wario, Azure, Orange T |
| `era` | 2 | the 955 BF court (`actors/peachs-castle-955/`) — Peach, Toadsworth the Elder |
| `generated` | 152 | built by `tools/build-character-sheets.py` from the article's own text — 118 NPC stat blocks, 34 main-cast player characters |
| skipped | 6 | deliberately not statted — the GM, the collectives, a cosmic entity |
| *past selves* | 3 | era versions under a character (`versions[]`): Mario, Luigi and Bowser in 955 BF — `actors/cast/eras/` |

Every one of the 184 is a dnd5e actor file that imports through the
[Mass Import module](../Reputation-Matrix2/Foundry/mass_import/README.md), and
the 152 generated ones plus the past selves ship together as
`actors/cast/import.json` (folders: *Waluipedia Cast / <group>*, past selves
under *<group> / 955 BF*).

## The visibility rule

```
visible(sheet)  =  sheet.party === true  ||  debugOn()
```

`party` is decided by the builder, not by hand, from two facts the archive
already keeps:

1. the XP ledger's faction — `disaster_inc` or `disaster_inc_allies` in
   `index.html`'s `XP_SUMMARY` (the same table the Characters tab prints);
2. the article's `affiliation` field naming Disaster Inc.

Seventeen sheets pass: Archie, Bones, Bowser, Dan (the Toad), Eager, Green T,
Hjumpik, Markop, Mossy, Remi, Roger, Ryan, Smoking J, Toad Lee, Usk, Waluigi,
Wario. They are grouped under *Disaster Inc.* and each entry carries a
`partyWhy` saying which fact admitted it. `tools/check-sheets.py` fails if
the committed flag disagrees with the rule, so nobody can be made public by
editing the JSON.

Debug mode is the site's existing toggle (`localStorage['waluipedia-debug-v1']`,
`debugOn()` / `toggleDebug()` in `index.html`). When it flips, `toggleDebug`
calls `CAST_SHEETS.refreshSearch()` so the Research Bureau's sheet records
appear and disappear with it. What debug mode changes:

| | public | debug |
|---|---|---|
| `#/sheets` list | the 17 party cards, one line saying how many more exist | every card, dashed borders on restricted ones, a striped **DEBUG MODE** banner |
| `#/sheets/<id>` | party sheets render; the rest show a *Restricted sheet* notice | every sheet renders; restricted ones under the banner |
| character article panel | party characters get the panel; the rest get **nothing** — no stub, no lock icon | every character gets the panel; restricted ones carry a ribbon; skipped characters get a one-line *No sheet on purpose* |
| Research Bureau | sheet records for party characters only | all of them |
| sidebar count | 17 | 184 |
| Settings → Developer | a *Character sheets* row stating the rule and the restricted count, with an *Open sheets* button | the same row, saying it is ON |

## The index (`sheets.json`)

```
meta      generator, note, visibility {public:'party', debug:'all'},
          folderRoot, castImport, counts {characters, sheets, generated,
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
to her NPC statblock). The
primary is chosen by rank *live > intake > era*, with two pinned exceptions
the comments explain (Bowser's and Wario's PC intake sheets stay primary
because the live world only holds their NPC versions). `-NO-SPECIES` variants
are not sheets of their own and are never indexed.

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
pins the ones the words get wrong.

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
`actors/cast/eras/fvtt-Actor-<id>--<version>.json`, folder *Waluipedia Cast /
<group> / <era>*, flag `waluipedia-sheets.era {version, era, label, when}`.
Rules: **an era level never exceeds the ledger level** (the builder and the
checker both refuse it — a past self cannot hold more experience than the
present one; a prime shows in the kit), every feature quotes the article,
evidence is re-checked like any generated sheet. Shipped: Mario (Monk 5 —
Fire Flower, Super Mushroom, Eight Worlds' Stamina, Always Near Peach, Hero of
the Mushroom Kingdom, Annoyingly Heroic), Luigi (Ranger 4 — Hammer, Green
Fireball, Scuttle Jump, The Second Brother, Afraid Often, Startles, Sports
Appearances), Bowser (Fighter 8 — Claws, Shell Bash, Fire Breath 5–6, The
Shell, Indestructible, Kidnapper of Princesses, King of the Koopas). Versions
apply to existing sheets too: Bowser's present self is still his PC intake
export, with the 955 BF self beside it.

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
   — wrong archetype? add to ROLE_OVERRIDES; main cast? write a BESPOKE entry
4. python3 tools/check-sheets.py                    # quotes, CR ≤ level, wiring
```

If a session *changes* an article (status, affiliation, new paragraphs),
rerun step 2 — the evidence quotes are re-found and the party flag is
re-derived. If someone joins or leaves Disaster Inc. in `XP_SUMMARY` or
`affiliation`, their sheet's visibility follows on the next build; nothing
is toggled by hand.

Never run the builder *to replace* a live/intake/era sheet: it does not
write those files, it only indexes them. The Bowser PC sheet and the live PC
sheets are the players' own.

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
