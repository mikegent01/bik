## Run report

### Files created or edited

CREATED
  docs/3d-reference/peachs-castle-955/README.md — packet manifest: three character plates, 12 guard cutouts, 8 household cutouts, archive basis, reproduction commands

GENERATED (viewed before acceptance)
  docs/3d-reference/peachs-castle-955/toad-guards-sheet-a.png — 1408 × 768, came back as a 4 × 2 grid (8 guards; three poses doubled, kept as rank-and-file)
  docs/3d-reference/peachs-castle-955/toad-guards-sheet-b.png — 1408 × 768, 2 × 2 (night-watch, pike + tower shield, recruit with horn, scarred veteran with mace)
  docs/3d-reference/peachs-castle-955/castle-court-sheet.png — 1408 × 768, 4 × 2 (chambermaid, two cooks, herald, page, three hooded Mages' Guild mages)
  docs/3d-reference/peachs-castle-955/princess-peach-base.png — living Peach of her reign (the archive portrait is the dead Peach; deliberately not reused as a reference)
  docs/3d-reference/peachs-castle-955/toadsworth-elder-base.png — generated FROM `Reputation-Matrix2/portraits/toadsworth_sr.jpg` as the face reference (Rule 0: reuse before inventing)
  docs/3d-reference/peachs-castle-955/guard-captain-base.png — generic Captain of the Palace Guard in the sheet livery

CUT AND CROPPED (tools/splice-sheet-cutouts.py, deterministic)
  12 × guard-*.png, 8 × court-*.png — transparent, alpha-trimmed, square (330–375 px)
  peach / toadsworth-elder / guard-captain — `*-cutout.png` (transparent, 710–739 px) and `*-plate.png` (square, backdrop kept, 765–768 px)

EDITED
  tools/splice-sheet-cutouts.py — six new sheet configs (`pc-guards-a`, `pc-guards-b`, `pc-court`, `pc-peach`, `pc-toadsworth-elder`, `pc-guard-captain`) with boxes measured from the divider scan (4 × 2 dividers at x 350–356 / 701–706 / 1052–1057, y 382–386); a `_grid_tiles()` helper; `box=None` means "whole image" for single plates; a `plate=` output that writes a square crop keeping the studio backdrop (`plate_crop()`); `process_tile()` now returns the mask too. The two original sheets' pipeline is untouched (their outputs exist and are skipped without `--force`).

### How the request was read

"8 by 8 sheets of toad guards … generate 3 full body sheets for characters … cut and crop" — the clarifying questions were skipped, so: the era is the Toadstool court of 955 BF (the archive's only filed palace interior under Peach, and the night the guard witnesses matter); "8 by" became 8 guards per sheet (one sheet came out 4 × 2 = 8, the other 2 × 2, twelve guards in all); the three plates are Peach, Toadsworth the Elder and the Guard Captain (Mario / Luigi / Bowser / Fawful assumed on the user's side — Bowser and Fawful bases already exist in `beanbean-battle/`). All of it is stated in the packet README so it can be corrected.

### Events filed

No events filed or changed this run.

### XP awarded

No XP awarded this run.

### What is not done / open

- Thornpaw (the vampire mayor at the print shop and in the corridor) has no plate; the two hooded mages he conferred with are covered by the three generic mage cutouts.
- The sheets are production designs, not named characters; no `characters.json` records were added or changed.
- No meshes were generated here; the PNGs are inputs for the user's Hunyuan 3D session.
- `pip install pillow numpy opencv-python-headless onnxruntime` was needed in the sandbox to run the splice tool; nothing was vendored.
