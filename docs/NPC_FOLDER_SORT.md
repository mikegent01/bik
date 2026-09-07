# The npc/ folder sort

`npc/` was an unsorted drop box. 271 files, 245 MB, with names like
`sdfdsf-removebg-preview.png`, `1755371709037-f3fc61d8-4a2c-4a2b-af16-514786e1ee41-removebg-preview.png`
and `asdf-removebg-preview.png`. It is now empty and gone; every file was
either filed under a real name or removed for a stated reason.

The whole decision table lives in **`tools/sort-npc-folder.py`**, which is
idempotent and dry-run by default. That script *is* the record — if a naming
decision needs revisiting, it is one line there, not archaeology.

## Result

| | before | after |
|---|---|---|
| files in `npc/` | 271 | **0 (folder removed)** |
| folder size | 245 MB | — |
| `portraits/` | 310 | 462 |
| `Reputation-Matrix2/assets/props/` | 0 | 48 |
| `Reputation-Matrix2/assets/scenes/` | 0 | 2 |
| deleted | — | 69 |

202 files kept and renamed, 69 deleted. 271 accounted for exactly once, with
no file both moved and deleted and none left over.

## How the sprites were identified

The user's description was accurate: most of these were *new and updated
sprites of old ones*. Rather than guess from filenames — which were
meaningless — every `npc/` image was compared against the 310 already-named
files in `portraits/` using a **256-bit average hash** (16×16 greyscale, alpha
flattened onto white so a cut-out PNG hashes like its pre-cut-out original).

- distance **0** → byte-identical content already filed under a proper name.
  25 files were in this state, e.g. `god.png` was already `portraits/evil_toad_god.png`.
- distance **≤12** → same character, different render. Treated as a *candidate*
  only, then **confirmed by eye** on a contact sheet before being written down.

Nothing in the rename table was identified by filename alone. The perceptual
matcher produced false positives (it paired a spiked ball with a photograph of
a barrel), which is exactly why the visual confirmation step exists.

Updated renders are filed as `<name>_v2` / `_v3` next to the original rather
than overwriting it: `roger_v2.png`, `toad_lee_v2.png`, `dan_v2.png`,
`eager_v2.webp`. The old file stays valid, and nothing that referenced it breaks.

## What was deleted, and why

**Official Nintendo artwork and game sprite rips (41).** The archive's entire
visual identity is original art; shipping ripped first-party sprites undermines
that and is not ours to publish. Removed: Kamek's NSMBW artwork, Shigehisa
Nakaue's Koopa Troopa and Goomba, the Toadbert and Fawful M&L artwork, PMTTYD
and PM:TOK sprites, the SPM Paratroopa, Hammer Bro NSMBU art, Midbus, Luma,
Bowser Jr., an ice-Mumbus sprite sheet, official Wario/Luigi renders, plus one
iStock stock photograph.

**Audio (19 files, ~205 MB — 84% of the folder).** Soundtrack rips from
*Bowser's Inside Story* and *Super Paper Mario* (`28.-bowser's-stolen-castle.mp3`,
`29.-it's-fawful!.mp3`, `mr.-l,-green-thunder-super-paper-mario.mp3`) and
unreferenced voice/song takes. Verified first that **nothing** in the site or
the data files points at a local audio file — the two genuine audio references
in the data are external `files.catbox.moe` URLs. An earlier grep appeared to
show `events.json` referencing `ar.wav`; that was a substring false positive
(`…ar.wav…` inside a longer word) and was confirmed to be zero real matches.

**Junk (9).** `ai/napkin.jpg` was not an image at all — it was a saved Google
**"Error 403 (Forbidden)"** HTML page with a `.jpg` extension. The rest were
exact byte-for-byte duplicates: `vellumff.webp` == `vellumf.webp`,
`unnamed-removebg-preview.png` == `hammer.png`, `wa.png` == `image-removebg-preview.png`,
`ai/redbutton.webp` == `ai/button.webp`.

## Where things went

- **`portraits/`** — characters. The established convention, already referenced
  by `characters.json` as `portraits/<id>.png`.
- **`Reputation-Matrix2/assets/props/`** — the old `npc/ai/` folder, which was
  never characters: Bowser's letter to Peach, the Raventree wine bottle, the
  safe-recipe note, Wario's overdue ledger, the manor map, the Mages' Guild
  seal, ration packs, a compass, a pocket watch.
- **`Reputation-Matrix2/assets/scenes/`** — the two `npc/bg/` backgrounds.

## References that had to move with the files

Six `npc/` paths were live in Foundry actor exports and would have 404'd:

| old | new |
|---|---|
| `npc/lady_cron-removebg-preview.png` | `portraits/lady_aurelian_corvinarus.png` |
| `npc/danm.png` | `portraits/dan_v2.png` |
| `npc/cfleadtoad.webp` | `portraits/toad_lee_v3.webp` |
| `npc/ai/raventreewine.webp` | `…/assets/props/raventreewine.webp` |
| `npc/ai/screenshot-2026-02-06-190711.webp` | `…/assets/props/safe_recipe_note.webp` |
| `npc/ai/wario-bike.webp` | `…/assets/props/wario-bike.webp` |

15 files updated across `Reputation-Matrix2/actors/`. Verified afterwards that
**no `npc/` path remains** anywhere in the repo, every new target exists on
disk, all JSON still parses, and `tools/check-all.py` passes.

## Two name collisions, resolved by looking

The plan initially wanted to file two sprites over existing portraits. Both
turned out to be genuinely different images, so both were given their own name:

- `speakerrivers.png` → **`speaker_rivers_sprite.png`**. The existing
  `speaker_rivers.png` is a wide scene of a toad at a podium in a domed
  chamber; this is a character sprite of a green-capped toad.
- `1751843642222-…png` → **`elder_toad_druid.png`**. The existing
  `elder_mudcap.png` is a frog-like creature on a lily pad; this is a robed
  elder toad with a staff and a leaf crown.

## Re-running it

```
python3 tools/sort-npc-folder.py            # print the plan, change nothing
python3 tools/sort-npc-folder.py --apply    # do it
```

Files already sorted are reported as "listed but not found", so a second run is
a no-op rather than an error.
