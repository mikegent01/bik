# Actor exports (in use)

Live Foundry VTT actor exports for the campaign. **Import the plain
`fvtt-Actor-*.json` files here** — they have been repaired by
`tools/sanitize-foundry-actor.py` (deterministic, no AI).

| File | Use |
|---|---|
| `fvtt-Actor-*.json` | Repaired, import-ready. Use these. |
| `fvtt-Actor-*-NO-SPECIES.json` | Same, with the species removed — import these when you intend to add a species through Plutonium. |
| `original-fvtt-Actor-*.json` | Untouched exports, kept as the regression corpus. Do not import. |
| `fvtt-Actor-lady-aurelian-corvinarus-PC.json` | Aurelian as a playable character — see below. |
| `fvtt-Actor-waluigi-PC.json` | Waluigi as a playable character — see below. |

Every character now ships both variants:

| Character | Normal | Species-free |
|---|---|---|
| Hjumpik Deldkur | 101 items, Mountain Dwarf | 98 items |
| Feyward Dan | 62 items, Grung | 57 items |
| Toad Lee | 44 items, Toad — Liberated Survivor | 43 items |
| Lady Aurelian (PC) | 53 items, Fey (Corvinarus Bloodline) | 52 items |
| Waluigi (PC) | 40 items, Human (Fey-Altered) | 39 items |

Azure and the Aurelian NPC statblock are NPCs, which dnd5e does not restrict
to one species, so they have no variant.

## Rebuilding

One command regenerates the whole folder from the untouched originals:

```bash
python3 tools/rebuild-actors.py           # rebuild everything
python3 tools/rebuild-actors.py --check   # verify, write nothing
```

Per-actor decisions (such as Dan keeping the second species) live in
`OVERRIDES` in that script, so nothing here is a hand-edited artefact. The
`--check` mode runs in `check-all.py` as **actor exports**.

Regenerate any of them:

```bash
cd Reputation-Matrix2/actors
python3 ../../tools/sanitize-foundry-actor.py original-fvtt-Actor-NAME.json \
  --write fvtt-Actor-NAME.json
```

## What was repaired

| Actor | Repairs |
|---|---|
| Azure (Feywild Theater State) | 2 unresolvable icons → typed placeholders |
| Feyward Dan | duplicate species (kept **Grung**, see below) |
| Hjumpik Deldkur | 10 dangling advancement grants, 11 orphan container refs, 3 foreign effect origins, 4 dead icons |
| Lady Aurelian Corvinarus | already clean, copied unchanged |
| Toad Lee | 1 orphan container ref |

Item counts preserved, `system` stat blocks byte-identical, second pass clean.

## If the species error persists after importing

Two things cause this, and the first one is not a bug in the file:

**1. You are importing an old copy.** The `tools/item sheet examples/sanitized/`
folder no longer exists — these files moved here. Pull the branch before
importing, and check the file you pick is from `Reputation-Matrix2/actors/`.

**2. A phantom species pointer.** dnd5e stores `system.details.race` next to
the race item. If that pointer names an item id that is not in `items[]`, the
sheet believes a species exists that you cannot see or delete on the sheet,
and `Race._preCreate` refuses the new one. **All five original exports had a
dangling or mislabelled pointer of this kind**, so this was almost certainly the real blocker.
The sanitizer now relinks or clears them (`dangling-detail-pointer`,
`detail-pointer-relinked`), and `--clear-species` clears the pointer along with
the item.

Free-text values such as `race: "Archfey-Touched"` are legal on **NPCs** and
are left alone. On a **character** the same field is a document pointer, so a
label there (Toad Lee carried `race: "Toad"` while owning a real species item)
is the same phantom-species state and gets relinked to the actual item.

If it still fails, delete the species on the sheet by hand, save, and re-run
the Plutonium import.

## "Only a single Species can be added to a Player Character"

**This is not a defect in the file and no amount of sanitizing fixes it.**

Hjumpik already has a species (`Mountain Dwarf`). dnd5e's `Race._preCreate`
refuses to create a second one, Plutonium's task still expects every requested
document back, and the shortfall surfaces as
`Number of returned items did not match number of input items!` — a misleading
message for a plain refusal.

To import a new species onto any character, the existing one has to be gone
**first**. Either delete it on the sheet and re-run the Plutonium import, or
import that character's `-NO-SPECIES.json`, which has the species, its racial
features and the `details.race` pointer already removed:

```bash
python3 ../../tools/sanitize-foundry-actor.py \
  original-fvtt-Actor-hjumpik-deldkur-6eBoDhCt0i3e3qZ4.json \
  --clear-species \
  --write fvtt-Actor-hjumpik-deldkur-6eBoDhCt0i3e3qZ4-NO-SPECIES.json
```

That file drops `Mountain Dwarf` plus the `type: race` copies of
`Dwarven Resilience` and `Stonecunning` (101 → 98 items). It leaves the
**untyped** duplicates of `Stonecunning`, `Dwarven Resilience` and `Darkvision`
in place: an untyped feat can just as easily be a class ability, so deleting by
name would risk real content. The PHB'24 Dwarf import will re-add its own
copies — delete the untyped leftovers by hand if they stack.

## Feyward Dan — a judgement call

Dan carried two `race` items: `Toad — Feyward Variant` (0 advancements,
136-char description) and `Grung` (3 advancements, climb speed, 766 chars).
Default keep-first would have kept the near-empty one, so this file is built
with `--keep-species last`. **If Toad is the intended species, regenerate
without that flag and re-add the traits by hand.**

## Known remaining 404s (not fixable here)

`hjumpik` referenced four assets that exist in no install:
`1709761629520545.jpg`, `321.webp`,
`modules/plutonium/media/icon/image(2).webp`,
`modules/dnd5e-spellpoints/img/mana-icon.webp` — now typed `icons/svg/*`
placeholders. The spell-points icon returns if that module is reinstalled;
re-export rather than patching the JSON.

## Lady Aurelian as a player character

`fvtt-Actor-lady-aurelian-corvinarus-PC.json` is generated by
`tools/build-aurelian-pc.py` (deterministic, no AI). The NPC statblock is kept
beside it and is still the version to use when she is run as an antagonist.

```bash
python3 ../../tools/build-aurelian-pc.py            # write the PC export
python3 ../../tools/build-aurelian-pc.py --check    # verify, write nothing
python3 ../../tools/build-aurelian-pc.py --keep-boss-abilities
```

**Level 9 Bard, College of Glamour.** Every choice comes from her own data
rather than invention:

| Decision | Evidence |
|---|---|
| Level 9 | Her `attributes.spell.level` is already 9 and her slots are exactly 4/3/3/3/1 — the level 9 full-caster row. |
| Bard | **25 of her 28 spells are on the Bard list** — next best is Wizard at 19. `attributes.spellcasting` is already `cha`; CHA 20 is her best stat. See `tools/analyze-aurelian-class.py`. |
| College of Glamour | Mantle of Inspiration and Enthralling Performance are mechanically the "delicate hostess" mask her biography describes. |
| HP 66, not 97 | 97 was `15d8+30`, a CR-8 monster budget. A level 9 d8 Bard gets 8 + (8 × 5) + (9 × CON 2) = 66. |
| AC via the gown | Player characters cannot use `calc: "natural"`, so Gown of Autumn's Last Light carries the AC. |

**Dropped as monster-only:** Legendary Resistance (2/Day), Multiattack, Innate
Spellcasting, and the NPC `Spellcasting` feat (replaced by the real class
feature). Pass `--keep-boss-abilities` to retain them.

**Kept:** all 28 spells, her three signature items, all three loot pieces, and
the flavour features Delicate Hostess, Draconic Heritage, Dimensional Anchor
and Wither and Bloom. `Druidcraft`, `Thaumaturgy` and `Wall of Fire` are the
only three spells off the Bard list, so they are tagged **Magical Secrets**
rather than removed. (`Plant Growth` and `Speak with Plants` *are* Bard
spells — an earlier build tagged them by mistake.) Her fey species (flight 50 ft, hover, darkvision 120 ft,
charm/fright immunity) is preserved as a proper `race` item.

She keeps 5 hit dice worth of nothing else: 53 items total, and the file passes
the sanitizer clean.

### Why Bard, in numbers

`tools/analyze-aurelian-class.py` scores every full-caster list against the
28 spells she already had. It is pure counting — the only judgement is the
hand-entered spell/class table, and spells whose 2014 and 2024 lists differ
are reported separately so an edition disagreement cannot change the answer
silently.

| Class | Coverage (2024 PHB) |
|---|---|
| **Bard** | **25 / 28 — 89%** |
| Wizard | 19 / 28 — 68% |
| Sorcerer | 18 / 28 — 64% |
| Warlock | 12 / 28 — 43% |
| Druid | 12 / 28 — 43% |
| Cleric | 6 / 28 — 21% |

A six-spell gap to the runner-up is not close. Her school profile is
**57% enchantment and illusion** (10 enchantment, 6 illusion), which is the
Bard's core identity, and the three misses are trivially covered by Magical
Secrets.

Warlock deserves a mention because Archfey patron matches her fiction well,
but it covers only 12 of her spells and pact magic gives 2 slots where her
sheet already specifies 4/3/3/3/1. It would mean rewriting her spellcasting
from scratch rather than expressing what is already there.

## Waluigi as a player character

`fvtt-Actor-waluigi-PC.json`, generated by `tools/build-waluigi-pc.py`.

```bash
python3 ../../tools/build-waluigi-pc.py            # write the PC export
python3 ../../tools/build-waluigi-pc.py --check    # verify, write nothing
python3 ../../tools/build-waluigi-pc.py --keep-boss-abilities
```

**Level 5 Wizard, School of Evocation.**

| Decision | Evidence |
|---|---|
| Level 5 | `index.html` `XP_SUMMARY` records him at level 5 / 11,911 XP. The site ledger wins over the statblock. |
| Wizard | All 8 of his spells are on the Wizard list; Sorcerer covers 7, Druid 3, Bard 1. `characters.json` calls him "a master of ice magic and arcane rays". |
| Evocation | 6 of 8 spells deal damage, 4 of those cold. Sculpt Spells is the "everyone else eats it, Waluigi doesn't" flavour. |
| HP 37, not 112 | 112 was `15d8+45`, a monster budget. A level 5 d6 Wizard gets 6 + (4 × 4) + (5 × CON 3) = 37. |
| AC from the Cape | PCs cannot use `calc: "natural"`, and his old formula keyed AC to Charisma, which no PC rule supports. |

### Two consequences worth knowing

**His spell DC drops from 17 to 12.** Wizard casts on Intelligence and his INT
is 13 (+1), where the NPC block used Charisma 20. This is the honest cost of
the Wizard choice rather than something quietly patched — Sorcerer would have
kept CHA 20 at the price of losing Wall of Ice from the list. If the low DC is
not wanted, either raise INT or rebuild him as a Sorcerer.

**Three spells are above his level.** Ice Storm (4th), Cone of Cold (5th) and
Wall of Ice (6th) cannot be cast at level 5. They are **kept in the spellbook**
and each carries a note saying it is not yet castable, so nothing is lost and
the XP ledger stays true.

**Dropped:** Multiattack, as monster-only (`--keep-boss-abilities` retains it).
**Kept:** all 8 spells, all 20 pieces of gear, and his signature features
The Stomp, Cheater's Gambit and Fey-Touched Step. His fey-altered movement
(40 ft walk, 30 ft climb), darkvision and "Sense Gold & Debts" are preserved
on a proper species item.
