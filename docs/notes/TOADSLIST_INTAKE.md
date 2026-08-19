# Intake Note — `Toadslist.xlsx` → Liberated Toads Command

**Date:** 2026-08-19
**Source:** `Reputation-Matrix2/Liberated Toads work/Toadslist.xlsx` (3 sheets)
**Scope:** the Liberated Toads Command page and `data/liberatedToadsSystem.json`.

## What shipped

1. **Roster of 75** from Sheet1 — no generated 150+ names.
2. **Voting** from Leadership Positions: Speaker elected by tiers 6+7; Speaker appoints 3 and 4; armies formed by vote of 6+7; 3 appoints 4 who leads 5; Spore 5 rogue; Speaker L ousted.
3. **Teachers** sit in tier 7 above the Student Union. Electorate is **41**.
4. **Portraits are individual PNGs** (`assets/images/toads/roster/toad_NN_slug.png`).
   - User art: work-folder files + legacy `toads/` fallbacks.
   - `six.png` → Somkin J (#9).
   - `reag.png` → Regan (#25) (winged spear).
   - `lyio.png` → Gearspore (#47) (gear-studded staff; visual match — if this was meant as Regan, swap one line).
   - `sniop.png` → Lilystalker (#44), aka **Snipe T**.
   - Remaining cells cut from `sheet_a.png` / `sheet_b.png` by `tools/cut-toad-sheets.py`.
   - Replaced after looking at the sheets: Transparen T (ghost blob → translucent toad), Inkspot (squid monster → toad with ink bottle), Quillback (pufferfish → toad with quill halo).
5. Sheet B cells 17–35 remain generic extras (`sheet_b_extra_NN.png`).

## File map

| File | Role |
|---|---|
| `data/liberated-toads/toadslist-data.js` | Roster, affiliations, positions, rules, portraits |
| `tools/cut-toad-sheets.py` | 6×6 sheet cutter |
| `assets/images/toads/roster/` | 75 portraits + source sheets + extras |
