# Run report — the Airlift plates reshoot (2026-09-20)

A reader opened the Airlift gallery and found random people standing where
the party should be. Regeneration order: the four flagged plates reshot
against the repository's own portrait folder (models first, scene second),
in fields of four; the full-body portrait shelf surfaces as alternate art
on the character pages.

## Key findings

- **What was wrong, plate by plate.** `anc-02` was a long-haired
  mushroom-hatted elf with **a shield** — the record's shield is looked at
  and left behind; `anc-03` was a red-haired girl wearing a Toad cap as a
  hat (Salam and Eager are small toads, a third of knight height);
  `anc-04` showed a gaunt wizard, a **human-headed centaur** and a literal
  frog in armour where Archie / Markop / a toad paladin belong; `anc-05`
  was a yellow-raincoat hunter, a mushroom child and an R2 robot where
  Wario, Remi and Mossy belong.
- **Two record contradictions beyond the four flags.** `anc-06`'s caption
  and composition gave Markop the javelin and Dan the shielding; the
  record has Dan point one finger for the barrier **and** throw the
  javelin in the same motion. `anc-07` gave Remi waist-length hair and
  full pauldrons and omitted the goblin dealer the caption names. Both
  corrected (art reshot edit-mode; alt/caption corrected — the record
  wins).
- **A second trap file.** `portraits/iron_legion_guard.jpg` is a bruised
  **Toad prisoner in orange stripes** — not Legion armour. It leaked the
  orange prison shirt into the hero plate (anc-01) once already; the
  registry now warns against using it as knight reference.
- **anc-01 hero kept.** Reviewed and retained: its cast matches the
  record (rescued Legion prisoner in the striped shirt, Salam carried by
  the second knight, Remi armed out front, an archer covering), only the
  amber cast is stylistic. No reshoot needed.

## CREATED

- None (this round replaces files in place; every reshoot keeps its
  existing filename and references — diff stays one line per record).

## EDITED

- `Reputation-Matrix2/data/events.json`
  (the_airlift_that_never_came.gallery): `anc-05` alt/caption rewritten
  for the depicted den-boundary scene ("the spiders stop, and the asking
  begins"); `anc-06` alt/caption corrected to the record (Dan casts the
  barrier around Markop, then the javelin leaves).
- `index.html` — `leadFrames()` now appends the record's `fullBody` plate
  as the second rotator frame ("Full-body plate."), so the four full-body
  renders (Hjumpik, Remi, Markop, Archie) appear as alternative images on
  their character pages.
- `docs/IMAGE_GUIDELINES.md` — §2 fullbody now notes the rotator surface;
  §3.4 gains the `iron_legion_guard.jpg` trap warning beside the
  Merric/Mossy one.
- `tools/tests/test-appearance-chronology.mjs` — new contracts: full-body
  plates join leadFrames; **every local event art reference** (hero +
  gallery) resolves to a file on disk. 198 → 200 checks.

## GENERATED (assets, all replaced in place, all AI-generated)

| File | Mode | References used | Fix |
|---|---|---|---|
| `anc-02-remi-armors.jpg` | regenerate | `player/remi.png` + `event-states/remi-airlift-chainmail.png` | on-model Remi: chin-length hair, sunflower, chain shirt over torn teal, axe in hand, **shield left face-down** |
| `anc-03-legion-extraction.jpg` | regenerate | `event-states/salam-grove-scarred.png` + `eager.png` | tiny toads, not humans: Salam carried (crossbow/quiver on him), bandaged Eager guided behind |
| `anc-04-fireball-grove.jpg` | regenerate | `archie.jpg` + `event-states/archie-grove-spent.png` | heavyset black-cloak Archie, spellbook of crossings-out, fireball into the bush, spiders untouched; centaur and frog removed |
| `anc-05-anamatar-den.jpg` | regenerate | `player/remi.png` + `player/wario.png` + `mossy.png` + `pierce_anamatar.jpg` | on-model Wario/Mossy/Remi with the ID card out, Pierce's ghost in the doorway, spiders held at the boundary |
| `anc-06-markop-rescue.jpg` | edit | old plate + `dan.png` + `event-states/markop-grove-wounded.png` | Dan **standing**, red cap **white** spots, barrier sweep **and** javelin throw; Markop inside the ring with horse's head |
| `anc-07-den-passage.jpg` | edit | old plate + `player/remi.png` | Remi's hair chin-length, chain shirt over torn teal, goblin dealer added at the table |

First attempt on `anc-02` was refused by the generator's content screen
(kneeling + "shredded dress" phrasing); re-shot standing and armor-first,
same coverage.

## GENERATED (regenerated)

- None. `tools/track-filing-updates.py --write`: nothing changed since
  the last pass.

## Tests

- Inline scripts parse OK.
- `node tools/tests/test-appearance-chronology.mjs` — 200 ok / 0 fail.
- `node tools/tests/test-waluipedia-ambient.mjs` — 20 ok / 0 fail.
- `python3 tools/check-all.py` — 75 PASS, all requested checks passed.
  (Incident: an earlier `git stash -u`/pop cycle removed the `npm
  --no-save` jsdom tree; one check-all pass book showed `alliance cache`
  and `map lenses` failing with `ERR_MODULE_NOT_FOUND`. jsdom reinstalled;
  suite green again; nothing in the diff implicated.)

## Events filed

None this round (the Airlift filing itself stands; this round fixes its
field plates).

## XP awarded

None filed this round.

## MP cost

0.

## Worked example

`tabletop-reference.html` GM TOOLS — unchanged this round.

## Known leftovers / next session

- anc-01 hero plate: keep an eye; if the reader finds the carried
  prisoner's orange shirt confusing against Eager, reshoot with
  `iron_legion_guard.jpg` explicitly named as the prisoner and Eager's
  olive tunic restored.
- Wario / Mossy / Pierce / Iron Legion grove event-states still unfiled
  (states need filed beats).
- `/dev/girl-boss-fights` theatre — still awaiting seats.
- Chapter 9 filing + DPS screenshot.
