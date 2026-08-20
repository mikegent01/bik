#!/usr/bin/env python3
"""Copy verified pending sheet cells onto named roster files and pad legs."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ROSTER = ROOT / 'Reputation-Matrix2' / 'assets' / 'images' / 'toads' / 'roster'
CELLS = ROSTER / 'pending' / 'cells'

# Sheet A row-major (docs/notes/TOAD_SHEET_PROMPTS.md + visual check 2026-08-19)
SHEET_A = {
    0: 'toad_07_perot.png',
    1: 'toad_10_toadburt.png',
    2: 'toad_13_speaker_l.png',
    3: 'toad_14_elder_mudcap.png',
    4: 'toad_21_kyo.png',
    5: 'toad_23_oiqie.png',
    6: 'toad_26_mechal.png',
    7: 'toad_30_captain_fernback.png',
    8: 'toad_32_ironspore.png',
    9: 'toad_33_metpetal.png',
    10: 'toad_34_teacher_t.png',
    11: 'toad_35_bully_t.png',
    12: 'toad_36_nerd_t.png',
    13: 'toad_37_geek_t.png',
    14: 'toad_39_necro.png',
    15: 'toad_40_tally.png',
    16: 'toad_41_ratie.png',
    17: 'toad_42_kit_t.png',
    18: 'toad_43_pondscum.png',
    19: 'toad_44_lilystalker.png',  # already have user Snipe T — skip overwrite
    20: 'toad_45_inkspot.png',
    21: 'toad_46_quillback.png',
    22: None,  # Gearspore already filed (lyio)
    23: 'toad_48_hammerling.png',
    24: 'toad_49_spearwort.png',
    25: 'toad_50_shieldback.png',
    26: 'toad_51_soothing_moss.png',
    27: 'toad_52_gentlepad.png',
    28: 'toad_53_shadowleap.png',
    29: 'toad_54_whispertail.png',
    30: 'toad_55_spork.png',
    31: 'toad_56_spik.png',
    32: 'toad_57_speki.png',
    33: 'toad_58_spoolo.png',
}

SHEET_B = {
    0: 'toad_59_crai_yellow.png',
    1: 'toad_60_lualu_green.png',
    2: 'toad_61_zahue_t_black.png',
    3: 'toad_62_oliver_p.png',
    4: 'toad_63_poe_white.png',
    5: 'toad_64_hustion_gold.png',
    6: 'toad_65_sally_silver.png',
    7: 'toad_66_rchie_iser.png',
    8: 'toad_67_kila_t.png',
    9: 'toad_68_wavey.png',
    10: 'toad_69_unknown.png',
    11: 'toad_70_barie.png',
    12: 'toad_71_caerk.png',
    13: 'toad_72_nat.png',
    14: 'toad_73_toad_ie_foxx.png',
    15: 'toad_74_anne_ari_t.png',
    16: 'toad_75_4331_t.png',
}

# User-filed art — never overwrite
PROTECT = {
    'toad_01_dan.png', 'toad_05_toad_lee.png', 'toad_08_salam.png',
    'toad_09_somkin_j.png', 'toad_11_lucky_t.png', 'toad_12_creek.png',
    'toad_15_bearr.png', 'toad_16_spoky.png', 'toad_17_bion.png',
    'toad_18_axie.png', 'toad_19_freaza.png', 'toad_20_speaker_rivers.png',
    'toad_22_naners.png', 'toad_24_rawra.png', 'toad_25_regan.png',
    'toad_27_bluey.png', 'toad_28_slinat.png', 'toad_29_swig.png',
    'toad_44_lilystalker.png', 'toad_47_gearspore.png',
}

# 2026-08-19 image pass: previous-commit portraits beat sheet A/B crops
# (3D / tighter 2D, no BUG-SPRAY text). Do not re-apply cells onto these.
PROTECT.update({
    'toad_07_perot.png', 'toad_10_toadburt.png', 'toad_13_speaker_l.png',
    'toad_14_elder_mudcap.png', 'toad_21_kyo.png', 'toad_23_oiqie.png',
    'toad_26_mechal.png', 'toad_30_captain_fernback.png',
    'toad_32_ironspore.png', 'toad_33_metpetal.png', 'toad_34_teacher_t.png',
    'toad_35_bully_t.png', 'toad_36_nerd_t.png', 'toad_37_geek_t.png',
    'toad_39_necro.png', 'toad_40_tally.png', 'toad_41_ratie.png',
    'toad_42_kit_t.png', 'toad_43_pondscum.png', 'toad_45_inkspot.png',
    'toad_46_quillback.png', 'toad_48_hammerling.png', 'toad_49_spearwort.png',
    'toad_50_shieldback.png', 'toad_51_soothing_moss.png',
    'toad_52_gentlepad.png', 'toad_53_shadowleap.png',
    'toad_54_whispertail.png', 'toad_55_spork.png', 'toad_56_spik.png',
    'toad_57_speki.png', 'toad_58_spoolo.png', 'toad_59_crai_yellow.png',
    'toad_60_lualu_green.png', 'toad_61_zahue_t_black.png',
    'toad_62_oliver_p.png', 'toad_63_poe_white.png',
    'toad_64_hustion_gold.png', 'toad_65_sally_silver.png',
    'toad_66_rchie_iser.png', 'toad_67_kila_t.png', 'toad_68_wavey.png',
    'toad_69_unknown.png', 'toad_70_barie.png', 'toad_71_caerk.png',
    'toad_72_nat.png', 'toad_73_toad_ie_foxx.png', 'toad_74_anne_ari_t.png',
    'toad_75_4331_t.png',
})


def pad_legs(im, bottom_frac=0.18, side_frac=0.06):
    """Add canvas so feet sit above the card crop."""
    im = im.convert('RGBA')
    w, h = im.size
    pad_b = int(h * bottom_frac)
    pad_s = int(w * side_frac)
    pad_t = int(h * 0.04)
    canvas = Image.new('RGBA', (w + pad_s * 2, h + pad_t + pad_b), (247, 244, 234, 255))
    canvas.paste(im, (pad_s, pad_t), im)
    return canvas


def apply_map(prefix, mapping, skip_protect=True):
    n = 0
    for i, dest_name in mapping.items():
        if not dest_name:
            continue
        if skip_protect and dest_name in PROTECT:
            print('protect', dest_name)
            continue
        src = CELLS / f'{prefix}_{i:02d}.png'
        if not src.exists():
            print('missing', src)
            continue
        im = Image.open(src)
        pad_legs(im).save(ROSTER / dest_name, 'PNG')
        n += 1
    return n


def pad_existing():
    """Pad already-filed user art in place so legs are not cropped."""
    n = 0
    for name in PROTECT:
        path = ROSTER / name
        if not path.exists():
            continue
        im = Image.open(path)
        # skip if already very tall
        if im.height > im.width * 1.15:
            continue
        pad_legs(im, bottom_frac=0.14, side_frac=0.05).save(path, 'PNG')
        n += 1
    return n


def main():
    a = apply_map('a', SHEET_A)
    b = apply_map('b', SHEET_B)
    p = pad_existing()
    print(f'wrote A={a} B={b} padded_filed={p}')


if __name__ == '__main__':
    main()
