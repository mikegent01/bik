# Peach's Castle, 955 BF — Hunyuan 3D reference packet

Image inputs for a session set **inside Peach's Castle while Princess Peach
still reigned** — the Toadstool court of 955 BF, the year of the assassination
(`highsun_1_955_bf_the_day_of`). Everything here is a **production design** on
a plain studio backdrop for mesh generation; nothing is event-state art and
nothing claims a named archive character except the two plates that say so.

Every sheet has already been **cut and cropped** by
[`tools/splice-sheet-cutouts.py`](../../../tools/splice-sheet-cutouts.py)
(per-cell crop + U²-Net background removal → centred, alpha-trimmed,
square PNG). Feed Hunyuan one cutout (or one plate) at a time; never the sheet.

## Full-body plates (the three characters)

Each character comes as a square backdrop-kept **plate** (the form the Bowser /
Fawful / Cackletta bases used) and a transparent **cutout**. Use whichever your
Hunyuan session takes better; they are the same picture.

| Character | Plate | Cutout | Construction points to preserve |
|---|---|---|---|
| **Princess Peach** — alive, reigning | [peach-plate.png](peach-plate.png) | [peach-cutout.png](peach-cutout.png) | Golden-blonde hair with side bangs, small gold crown, classic pink gown with deeper-pink hip panels and hem, sapphire brooch, long white gloves, blue earrings, pink heels, folded pink parasol. **Not** the archive portrait's apparition (`portraits/princess_peach.jpg` is the dead Peach of Floor 3B) — no decay, no torn fabric. |
| **Toadsworth the Elder** — Royal Chamberlain | [toadsworth-elder-plate.png](toadsworth-elder-plate.png) | [toadsworth-elder-cutout.png](toadsworth-elder-cutout.png) | Built from the archive portrait `Reputation-Matrix2/portraits/toadsworth_sr.jpg`: pale beige-grey cap with cream spots, round spectacles, large white moustache, charcoal cloak with a round brooch. Added below the portrait: purple waistcoat with gold buttons, brown bow tie, white gloves, mushroom-handled cane, pocket watch. In 955 he is the Chamberlain, not yet Regent. |
| **Captain of the Palace Guard** — generic officer | [guard-captain-plate.png](guard-captain-plate.png) | [guard-captain-cutout.png](guard-captain-cutout.png) | Same livery as the guard sheets in officer grade: plumed silver kettle helm over the red-spotted cap, breastplate and pauldrons, crimson sash, sabre, sealed order. Grey moustache, stern. An unnamed role, not a filed character. |

Source plates as generated (1408 × 768, landscape): `princess-peach-base.png`,
`toadsworth-elder-base.png`, `guard-captain-base.png`.

## Toad palace guards (12 cutouts from two sheets)

One livery for the whole guard so they read as one force: white cap with red
spots under a silver kettle-helm brim ring, royal-blue tabard with gold trim, a
pink mushroom-crown crest on the chest, white gloves, brown belt, silver
pauldrons, round brown shoes. Roles differ by kit.

**Sheet A — [toad-guards-sheet-a.png](toad-guards-sheet-a.png)** (generated as
a 4 × 2 grid; the generator doubled three poses, which is useful — rank and file
look alike):

| Cutout | Kit |
|---|---|
| [guard-gate-halberd.png](guard-gate-halberd.png) | Gate guard — halberd and blue kite shield with the crest |
| [guard-door-spear-a.png](guard-door-spear-a.png) · [guard-door-spear-b.png](guard-door-spear-b.png) | Door guards — long spear held upright |
| [guard-attention-a.png](guard-attention-a.png) · [guard-attention-b.png](guard-attention-b.png) | Unarmed guards at attention / hands on hips |
| [guard-sergeant.png](guard-sergeant.png) | Sergeant — red sash, short sword at the hip |
| [guard-crossbow-a.png](guard-crossbow-a.png) · [guard-crossbow-b.png](guard-crossbow-b.png) | Wall guards — crossbow across the chest; **b** carries the bolt quiver |

**Sheet B — [toad-guards-sheet-b.png](toad-guards-sheet-b.png)** (2 × 2):

| Cutout | Kit |
|---|---|
| [guard-nightwatch-lantern.png](guard-nightwatch-lantern.png) | Night-watch — brass lantern on a pole, short sword, dark cloak |
| [guard-pike-towershield.png](guard-pike-towershield.png) | Heavy — pike and tall tower shield with the crest |
| [guard-recruit-horn.png](guard-recruit-horn.png) | Recruit — alarm horn raised, dagger, oversized tabard |
| [guard-veteran-mace.png](guard-veteran-mace.png) | Corridor veteran — flanged mace, buckler, cheek scar |

## The household (8 cutouts) — [castle-court-sheet.png](castle-court-sheet.png)

The people a night inside the palace actually meets, 4 × 2:

| Cutout | Who |
|---|---|
| [court-chambermaid.png](court-chambermaid.png) | Toad chambermaid — pink-spotted cap, black dress, white apron, ring of keys, lit candle |
| [court-cook-toque.png](court-cook-toque.png) · [court-cook-kerchief.png](court-cook-kerchief.png) | Two royal cooks — blue-spotted caps, whites, striped aprons, copper pot |
| [court-herald-trumpet.png](court-herald-trumpet.png) | Herald — blue-and-gold quartered tunic, trumpet with the pink banner |
| [court-page-scroll.png](court-page-scroll.png) | Page — same tunic, carrying scrolls |
| [court-mage-a.png](court-mage-a.png) · [court-mage-b.png](court-mage-b.png) · [court-mage-c.png](court-mage-c.png) | Three hooded Mages' Guild mages — violet robes, silver sigils, crystal staff, scroll satchel; faces in shadow |

## Archive basis / scene caution

- `highsun_1_955_bf_the_day_of` — *What Actually Happened in the Hours After
  the Murder* — puts these people in the palace chambers on Highsun 1, 955 BF:
  Luigi on guard at the Royal Suite under the Princess's direct orders, Fawful
  in the chimney with the Princess's hair as a vault key, Bowser "dragged across
  the corridor floor" by guards, Thornpaw conferring with **two hooded mages**,
  and the guard witnesses who, within the month (`first_month_incidents`),
  "were already dying". The guard sheets exist so those witnesses have faces.
- Toadsworth the Elder (`toadsworth_sr`) was Royal Chamberlain that night and
  became Acting Regent after it; his later journals are the archive's most
  disputed documents. The plate shows the Chamberlain, nothing more.
- Princess Peach (`princess_peach`) is **Deceased — assassinated** in the
  present clock (1040 BF). This plate is the living Princess of her reign and
  is only correct for sessions set before Highsun 1, 955 BF.
- `peachs_castle` in the present is Fawful's, with its twenty-nine lobbies and
  dimensional basement; a 955 session is the "cheerful pink palace" the
  location entry calls a façade. None of that architecture is in this packet.

## The interloper's force — Bowser's incursion (8 new units + 5 reused bases)

Scene kit for **"an interloper interrupts a crucial meeting"**: Bowser and the
force he brings when he kicks in the doors of a palace council. Same production
style as the court sheets (plain studio backdrop, game proportions, all original
art). This is a **GM scene kit, not a filed event** — the canon anchor is still
`highsun_1_955_bf_the_day_of`, which puts Bowser in the castle that night and
has the guards drag him across a corridor.

**Sheet A — [bowser-incursion-sheet-a.png](bowser-incursion-sheet-a.png)**
(true 2 × 2, 1024 × 1024):

| Cutout | Unit | Job in the scene |
|---|---|---|
| [foe-koopatrol.png](foe-koopatrol.png) | Koopatrol — dark plate, spiked helm, spiked shell, black halberd | Walks in behind Bowser, holds the doors so nobody leaves |
| [foe-bob-omb-sapper.png](foe-bob-omb-sapper.png) | Bob-omb sapper — lit fuse, wind-up key, tool belt and plunger | Why the council doors are no longer doors |
| [foe-paratroopa-spear.png](foe-paratroopa-spear.png) | Koopa Paratroopa — red shell, white wings, short spear | Comes in through the windows |
| [foe-sledge-bro.png](foe-sledge-bro.png) | Sledge Bro — green spiked shell, black cuffs, iron sledgehammer | Furniture, shield walls and doors |

**Sheet B — [bowser-incursion-sheet-b.png](bowser-incursion-sheet-b.png)**
(the generator returned an irregular 4-over-2 layout with a duplicate Boo and a
duplicate Lakitu; the four distinct units were spliced, taking the larger
bottom-row Lakitu):

| Cutout | Unit | Job in the scene |
|---|---|---|
| [foe-dry-bones.png](foe-dry-bones.png) | Dry Bones — bleached bones, grey shell, bone club | Holds corridors; does not mind being knocked apart |
| [foe-boo.png](foe-boo.png) | Boo — grin, tongue, hovering over its shadow | Already inside the walls; finds the right room |
| [foe-chargin-chuck.png](foe-chargin-chuck.png) | Chargin' Chuck — black helmet, red pads, number 17 | The battering ram |
| [foe-lakitu.png](foe-lakitu.png) | Lakitu — spectacles, smiling cloud, spiny egg (the hair-thin fishing line did not survive the matte; the egg did) | Spotter under the vaulting |

**Reused bases (Rule 0)** — transparent cutouts of the already-committed
Hunyuan plates, so the whole force has tokens: [foe-bowser.png](foe-bowser.png)
(from `../beanbean-battle/bowser-base.png`), [foe-koopa-troopa.png](foe-koopa-troopa.png),
[foe-goomba.png](foe-goomba.png), [foe-hammer-bro.png](foe-hammer-bro.png),
[foe-magikoopa.png](foe-magikoopa.png) (from `../bowser-troops/`). The source
plates stay where they were.

## Foundry VTT sheets

Every figure in this packet has a dnd5e NPC actor in
[`Reputation-Matrix2/actors/peachs-castle-955/`](../../../Reputation-Matrix2/actors/peachs-castle-955/README.md)
(30 files, generated by `tools/build-peachs-castle-955-actors.py`). Token
images are 512-px copies of these cutouts under
`Reputation-Matrix2/portraits/peachs-castle-955/`; copy that folder into your
Foundry `Data/portraits/` before importing.

## Not generated here (already have models or bases)

Mario and Luigi are assumed to exist on your side; the classic Bowser base and
the assistant-era Fawful base are in
[`../beanbean-battle/`](../beanbean-battle/README.md). Thornpaw has no plate yet —
say the word if the session needs the vampire mayor.

## Reproducing the cutouts

```
python3 tools/splice-sheet-cutouts.py --sheet pc-guards-a
python3 tools/splice-sheet-cutouts.py --sheet pc-guards-b
python3 tools/splice-sheet-cutouts.py --sheet pc-court
python3 tools/splice-sheet-cutouts.py --sheet pc-peach           # also writes the square plate
python3 tools/splice-sheet-cutouts.py --sheet pc-toadsworth-elder
python3 tools/splice-sheet-cutouts.py --sheet pc-guard-captain
python3 tools/splice-sheet-cutouts.py --sheet pc-bowser-a        # incursion sheet A
python3 tools/splice-sheet-cutouts.py --sheet pc-bowser-b        # incursion sheet B
for k in koopa-troopa goomba hammer-bro magikoopa bowser; do
  python3 tools/splice-sheet-cutouts.py --sheet pc-foe-$k         # reused bases
done
```

Deterministic; `--force` to overwrite, `--qa-dir /tmp/cutout-qa` for
checkerboard renders.
