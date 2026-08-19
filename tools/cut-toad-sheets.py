#!/usr/bin/env python3
"""Cut the two 6x6 Liberated Toads sprite sheets into individual PNGs."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ROSTER = ROOT / 'Reputation-Matrix2' / 'assets' / 'images' / 'toads' / 'roster'
OUT = ROSTER / 'cells'
OUT.mkdir(parents=True, exist_ok=True)

# Sheet A cells 0-35 → roster nums (None = unused)
SHEET_A = [
    7, 9, 10, 13, 14, 21,
    23, 26, 30, 32, 33, 34,
    35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46,
    47, 48, 49, 50, 51, 52,
    53, 54, 55, 56, 57, 58,
]
# Sheet B cells 0-16 mapped; 17-35 extras
SHEET_B = [
    59, 60, 61, 62, 63, 64,
    65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, None,
] + [None] * 18

SLUG = {
    7: 'perot', 9: 'somkin_j', 10: 'toadburt', 13: 'speaker_l',
    14: 'elder_mudcap', 21: 'kyo', 23: 'oiqie', 26: 'mechal',
    30: 'captain_fernback', 32: 'ironspore', 33: 'metpetal',
    34: 'teacher_t', 35: 'bully_t', 36: 'nerd_t', 37: 'geek_t',
    38: 'transparen_t', 39: 'necro', 40: 'tally', 41: 'ratie',
    42: 'kit_t', 43: 'pondscum', 44: 'lilystalker', 45: 'inkspot',
    46: 'quillback', 47: 'gearspore', 48: 'hammerling', 49: 'spearwort',
    50: 'shieldback', 51: 'soothing_moss', 52: 'gentlepad',
    53: 'shadowleap', 54: 'whispertail', 55: 'spork', 56: 'spik',
    57: 'speki', 58: 'spoolo', 59: 'crai_yellow', 60: 'lualu_green',
    61: 'zahue_t_black', 62: 'oliver_p', 63: 'poe_white',
    64: 'hustion_gold', 65: 'sally_silver', 66: 'rchie_iser',
    67: 'kila_t', 68: 'wavey', 69: 'unknown', 70: 'barie',
    71: 'caerk', 72: 'nat', 73: 'toad_ie_foxx', 74: 'anne_ari_t',
    75: '4331_t',
}


def cut(sheet_path, mapping, tag):
    im = Image.open(sheet_path).convert('RGBA')
    w, h = im.size
    cols = rows = 6
    cw, ch = w / cols, h / rows
    inset_x, inset_y = cw * 0.025, ch * 0.025
    written = []
    for i, num in enumerate(mapping):
        col, row = i % cols, i // cols
        left = int(round(col * cw + inset_x))
        top = int(round(row * ch + inset_y))
        right = int(round((col + 1) * cw - inset_x))
        bottom = int(round((row + 1) * ch - inset_y))
        cell = im.crop((left, top, right, bottom))
        if num is None:
            extras = {
                17: 'field_patrol_spear.png',
                18: 'field_cook_ladle.png',
                19: 'field_librarian_books.png',
                20: 'field_engineer_wrench.png',
                21: 'field_farmer_hoe.png',
                22: 'field_miner_pickaxe.png',
                23: 'field_bard_lute.png',
                24: 'field_scout_spyglass.png',
                25: 'field_medic_satchel.png',
                26: 'field_blacksmith_tongs.png',
                27: 'field_fisher_rod.png',
                28: 'field_archer_bow.png',
                29: 'field_knight_sword.png',
                30: 'field_alchemist_potions.png',
                31: 'field_messenger_letter.png',
                32: 'field_guard_pike.png',
                33: 'field_mason_trowel.png',
                34: 'field_brewer_barrel.png',
                35: 'field_young_slingshot.png',
            }
            name = extras.get(i, f'field_extra_{i:02d}.png')
        else:
            name = f'toad_{num:02d}_{SLUG[num]}.png'
        dest = ROSTER / name
        cell.save(dest, 'PNG')
        written.append(dest.name)
    print(f'{tag}: {len(written)} cells from {w}x{h}')
    return written


def main():
    cut(ROSTER / 'sheet_a.png', SHEET_A, 'a')
    cut(ROSTER / 'sheet_b.png', SHEET_B, 'b')


if __name__ == '__main__':
    main()
