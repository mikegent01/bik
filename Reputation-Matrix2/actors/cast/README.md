# The cast — generated sheets for every character without a real export

152 dnd5e actors, one per character article that has no live-world
export, PC intake sheet or 955 BF era sheet — 118 NPC stat blocks from the
archetype templates and **34 player-character sheets** for the hand-authored
main cast (a player may sit down as any of them). **Generated, not exported:**
`tools/build-character-sheets.py` writes every file here from the article's
own words and the XP ledger, deterministically (`--check` must round-trip).
Do not hand-edit a file in this directory — change the article, a
`ROLE_OVERRIDES` line or a `BESPOKE` entry in the builder, and rebuild.

| File | What |
|---|---|
| `fvtt-Actor-<character id>.json` | one actor, id `sid("cast", <id>)` — templated: `type:"npc"`, unlinked token; hand-authored: `type:"character"`, linked token, class / species / background items |
| `import.json` | all 152 combined by `tools/foundry-bridge.py combine`, folders *Waluipedia Cast / <group>* |

Import the packet with the [Mass Import module](../../Foundry/mass_import/README.md)
(upload `import.json`, or *Import by URL* with
`https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/cast/import.json`),
or one actor at a time from its sheet page on the site (`#/sheets/<id>` →
*Download Foundry JSON* / *Mass Import URL*). Re-importing upserts by id, so a
rebuild after an article changes updates the actors in place.

## What is on a sheet

- **CR ≤ the XP ledger level** of the character (`XP_SUMMARY` in
  `index.html`). No ledger row → an archetype default (CR ½–2).
- **Archetype** read from the article (soldier, officer, rogue, caster,
  priest, healer, scholar, noble, civilian, student, brute, monster,
  spirit, beast, hero) — abilities, saves, skills, hit dice, action block.
- **Weapons and features matched from the text**, each recorded with the
  sentence it came from in `flags["waluipedia-sheets"].evidence` and shown
  on the site under *Evidence*. `tools/check-sheets.py` fails if a quote is
  no longer in the article.
- **34 hand-authored sheets** for the main cast (`bespoke: true` in the
  flag) are **player-character sheets**: Mario (Monk 5), Luigi (Ranger 5),
  Daisy (Paladin 3), Kamek (Wizard 2), King Boo (Warlock 2), Kirby
  (Barbarian 1), Dedede, Meta Knight, E. Gadd (Artificer 3), Mr. L, the
  Bone-Line, the Dark Shores court, and so on — still bound to quotes. The
  class level **is the XP ledger level**; with no ledger row the authored CR
  stands in (rounded up, never below 1). `PC_BUILD` in the builder names the
  class, subclass (from level 3), hit die, spell progression, species and
  background; hit points come from the hit die and Constitution; the
  authored kit stays (weapons marked proficient, *Multiattack* reads as
  *Extra Attack*, flagged *arrives early* under level 5). The authored CR
  is kept in `flags["waluipedia-sheets"].pc.cr` and still never exceeds the
  ledger level.
- Icons verified against the image library
  (`tools/item sheet examples/image paths.txt`); portraits linked from
  `Reputation-Matrix2/portraits/`; no race/class/subclass/background items
  on the NPC stat blocks, exactly one of each (plus an optional subclass) on
  the PC sheets, no invented magic items.

Six characters are skipped on purpose and listed in `data/sheets.json`
under `skipped[]`: the GM record (`mike`), the collectives (`miser_family`,
`sans_family`, `kremlings`, `rakasha`) and the Cosmic Jester.

## Visibility on the site

Only Disaster Inc. members' sheets are public at `#/sheets` and on the
Characters tab. Everything else in this directory is **restricted**: it
renders only while *Settings → Developer → Debug mode* is on, under a
debug banner. The files themselves are plain JSON in a public repository —
the restriction is a reading-room rule for the table, not a secret.

Checks: `python3 tools/check-sheets.py` ·
`python3 tools/foundry-bridge.py check Reputation-Matrix2/actors/cast` ·
`node tools/tests/test-sheets-page.mjs`.
