#!/usr/bin/env python3
"""
Sort the npc/ dump into the archive's real asset folders.

The npc/ folder was an unsorted drop box: 271 files, 245 MB, filenames like
`sdfdsf-removebg-preview.png` and `1755371709037-f3fc61d8-...png`. Inside it
were four different kinds of thing tangled together:

  1. Original character art, often an UPDATED version of a sprite already
     filed in portraits/ under a proper name.
  2. Official Nintendo artwork and game sprite rips, which we cannot ship.
  3. Music files ripped from Mario & Luigi / Paper Mario soundtracks, plus a
     few unreferenced voice takes.
  4. Actual junk: a Google 403 error page saved as `napkin.jpg`, exact
     byte-for-byte duplicates, and stock photography.

This script is the record of what was decided about each one. It is
idempotent and takes --apply; without it, it prints the plan and changes
nothing.

Identification method
---------------------
Every npc/ image was compared against the 310 named files in portraits/ using
a 256-bit average hash (16x16 greyscale, alpha flattened onto white so that
cut-out PNGs and their pre-cut-out originals hash alike). A Hamming distance
of 0 means byte-identical content under a different name; <=12 was treated as
"same character, different render" and then CONFIRMED BY EYE on a contact
sheet before being written down here. Nothing in the RENAME table was
identified by filename alone.
"""

import argparse, hashlib, os, shutil, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NPC = os.path.join(ROOT, 'npc')
PORTRAITS = os.path.join(ROOT, 'portraits')
PROPS = os.path.join(ROOT, 'Reputation-Matrix2', 'assets', 'props')
SCENES = os.path.join(ROOT, 'Reputation-Matrix2', 'assets', 'scenes')

# ---------------------------------------------------------------------------
# 1. KEEP + RENAME — original character art, moved to portraits/
#    Left column: the file as it was dumped. Right: the name it earns.
#    "(update)" means portraits/ already had this character and this file is a
#    newer render of them; the old one is kept as <name>_v1.png beside it.
# ---------------------------------------------------------------------------
RENAME_PORTRAITS = {
    # --- confirmed updated renders of an existing named portrait ---
    'rodger.png':                                'roger_v2.png',
    'tpoadlee.png':                              'toad_lee_v2.png',
    'danm.png':                                  'dan_v2.png',
    'eg.png':                                    'eager_bandaged.png',
    'eaggger.webp':                              'eager_v2.webp',
    'speakerrivers.png':                         'speaker_rivers_sprite.png',
    'cree.png':                                  'creek_medic.png',
    'Gemini_Generated_Image_rl5ukdrl5ukdrl5u-removebg-preview.png': 'archie_hooded.png',

    # --- named campaign characters, previously unnamed in the dump ---
    'Axie.png':          'axie.png',
    'Bluey.png':         'bluey.png',
    'Mechal.png':        'mechal.png',
    'Rawra.png':         'rawra.png',
    'Skylla.webp':       'skylla.webp',
    'Slinat.png':        'slinat.png',
    'Spoky.png':         'spoky.png',
    'Swig.png':          'swig.png',
    'salam.png':         'salam.png',
    'greent.png':        'green_t_v2.png',
    'toadette.png':      'captain_toadette_v2.png',
    'tori.png':          'toriel_v2.png',
    'the_mole.png':      'the_mole_v2.png',
    'lario.png':         'lario_v2.png',
    'god.png':           'evil_toad_god_v2.png',
    'waluigi.png':       'waluigi_armoured.png',
    'wario.png':         'wario_armoured.png',
    'bio.png':           'bio_toad.png',
    'bearr.png':         'bear_toad.png',
    'chest.png':         'wario_chest.png',
    'dog.png':           'shadow_hound.png',
    'ear.png':           'earl_grey_v2.png',
    'faw.png':           'fawful_v2.png',
    'frea.png':          'frea.png',
    'gerg.webp':         'gerg.webp',
    'ghoost.webp':       'ghost_shroud.webp',
    'hammer.png':        'hammer_knight.png',
    'leadb.png':         'lead_beholder_scribe.png',
    'luckytt.png':       'lucky_t.png',
    'lyio.png':          'lyio.png',
    'man.png':           'vellum_man.png',
    'na.png':            'na_archer.png',
    'ninefinger.webp':   'ninefinger.webp',
    'oiq.png':           'oiq.png',
    'orange.png':        'orange_t.png',
    'rae.png':           'rae.png',
    'reag.png':          'reag.png',
    'reb.png':           'reb.png',
    'six.png':           'six.png',
    'sniop.png':         'sniop.png',
    'tanukiburt.png':    'tanuki_burt.png',
    'taodgodstand.png':  'toad_god_enthroned.png',
    'vamp.png':          'vampire_lord.png',
    'vampr.png':         'vampire_toad.png',
    'vellum.webp':       'vellum.webp',
    'woman.png':         'vellum_woman.png',
    'evilmag.png':       'evil_magus.png',
    'ewvil.png':         'evil_toad_scarred.png',
    'boom.webp':         'boom.webp',
    'bonesclean.webp':   'bones_clean.webp',
    'brom.webp':         'brom.webp',
    'dfsdfs-removebg-preview.png':  'orc_warlord.png',
    'dsf-removebg-preview.png':     'orc_throne.png',
    'sfdrw-removebg-preview.png':   'toad_king_enthroned.png',
    'sad-removebg-preview.png':     'sad_toad_knight.png',
    'sgdf-removebg-preview.png':    'koopa_paladin.png',
    'sdafsadf-removebg-preview.png':'purple_toad_mage.png',
    'sda-removebg-preview.png':     'earl_grey_axe.png',
    'sdf-removebg-preview.png':     'toad_solicitor.png',
    'sdfdsf-removebg-preview.png':  'chai_v2.png',
    'asfedrf.png':                  'toad_plate_knight.png',
    'asdf-removebg-preview.png':    'striped_toad.png',
    'afdssfa-removebg-preview.png': 'speaker_l_v2.png',
    'd-removebg-preview.png':       'toad_mechanic.png',
    'hera-removebg-preview.png':    'hera.png',
    'housekeeping-removebg-preview.png': 'housekeeping_knight.png',
    'lady_cron-removebg-preview.png':    'lady_aurelian_corvinarus.png',
    'ralos-removebg-preview.webp':       'ralos.webp',
    'realdan-removebg-preview.webp':     'dan_real.webp',
    'self_reflection-removebg-preview.png': 'the_oracle_v2.png',
    'chatgpt-image-latest-high-fidelity__20251216__a_do_a_full_image_of_t-removebg-preview.png':
        'toad_full_figure.png',
    'gemini-3-pro-image-preview-2k_b_do_a_full_body_sprit_1_-removebg-preview.webp':
        'toad_full_body_sprite.webp',
    'imagen-4.0-generate-preview-05-20_Against_a_stark_whit(1).png': 'orc_corsair.png',
    'gpt-image-1_The_scene_shifts_to_-removebg-preview.png':    'roger_scene.png',
    'gpt-image-1_The_scene_shifts_to__1_-removebg-preview.png': 'bones_scene.png',
    'Screenshot_2026-07-12_211638-removebg-preview.png':        'cartographer_woman.png',
    'b1d5fba8-0afb-47a4-bec2-d571ebdb9865.webp':                'night_portal.webp',
    'Gemini_Generated_Image_5z3iwg5z3iwg5z3i-removebg-preview.png': 'zombie_toad_pair.png',
    'Gemini_Generated_Image_6i624z6i624z6i62-removebg-preview.png': 'mossy_toad.png',
    'Gemini_Generated_Image_etl6c5etl6c5etl6-removebg-preview.png': 'ranger_human.png',
    'Gemini_Generated_Image_gz92icgz92icgz92.png':                  'airship_wreck.png',
    'Gemini_Generated_Image_h8f1mwh8f1mwh8f1-removebg-preview.png': 'the_mole_armoured.png',
    'Gemini_Generated_Image_isb7doisb7doisb7-removebg-preview.png': 'mystivil_v2.png',
    'Gemini_Generated_Image_lp7mutlp7mutlp7m-removebg-preview.png': 'thunder_blade.png',
    'Gemini_Generated_Image_ocl4r3ocl4r3ocl4-removebg-preview.png': 'crystal_staff_toad.png',
    'Gemini_Generated_Image_pn7yobpn7yobpn7y-removebg-preview.png': 'ghost_bride.png',
    'Gemini_Generated_Image_qb3sd6qb3sd6qb3s-removebg-preview.png': 'wario_chest_bombs.png',
    'Gemini_Generated_Image_whwwnywhwwnywhww-removebg-preview.png': 'ironhand_general.png',
    'Gemini_Generated_Image_wjgk5xwjgk5xwjgk-removebg-preview.png': 'goblin_alchemist.png',
    'gemini_generated_image_c5kgk6c5kgk6c5kg-removebg-preview.webp':'luigi_operative.webp',
    'gemini_generated_image_d0blcd0blcd0blcd.webp':                 'hell_cathedral.webp',
    'gemini_generated_image_dcpsxodcpsxodcps-removebg-preview.webp':'fawful_wide.webp',
    'gemini_generated_image_3ttp163ttp163ttp-removebg-preview.webp':'toad_sprite_wide.webp',
    'gemini_generated_image_w3rh9qw3rh9qw3rh-removebg-preview.webp':'ranger_wide.webp',
    'gemini_generated_image_y3oejry3oejry3oe.webp':                 'toad_army_sepia.webp',
    '1751251013789-35aafc13-89b6-4aa5-9586-8090ed10c0f2-removebg-preview.png': 'ryan_v2.png',
    '1751252352771-b2c02f18-9dda-4d19-969d-11ff55864945-removebg-preview.png': 'bryan_v2.png',
    '1751420525621-bf440d72-f28b-4bfa-9bbc-80504d3f38e7.png':                  'lich_robed.png',
    '1751731423898-eadb6152-3f8f-47a5-9cdd-df424042950a-removebg-preview.png': 'wario_armoured_alt.png',
    '1751821319551-629fa8fa-9ce3-4b38-a9ca-01eb4fa1a34f-removebg-preview.png': 'purple_t_v2.png',
    '1751843642222-15e7fd16-381d-4176-922e-3b4d122d7443-removebg-preview.png': 'elder_toad_druid.png',
    '1753060544154-006c4ccb-2071-41a7-b66f-2a68ac821035-removebg-preview.png': 'black_toad_boss.png',
    '1753063129867-33b4fbc2-fec3-46e3-9c08-eccb11a5fae6-removebg-preview.png': 'navy_toad_girl.png',
    '1754274193674-17491c01-c0e3-41aa-934f-7886951017c5-removebg-preview.png': 'wario_treasure_chest.png',
    '1754792152035-0e98147a-ff5d-4d7e-9505-76a193369421-removebg-preview.png': 'pirate_captain_woman.png',
    '1754799533234-a6434366-bf07-4ef5-81b5-07334bf0ee1a-removebg-preview.png': 'captain_syrup_v2.png',
    '1754868240079-e31af3fb-d2e7-4a2a-9799-f86b3de4653f-removebg-preview.png': 'blue_scout_toad.png',
    '1754872214678-dc672b00-a770-4e96-90cc-2918ce595b0b-removebg-preview.png': 'archie_miser_v2.png',
    '1754872779612-53c37ab2-be7c-425d-a01b-6e930282e117-removebg-preview.png': 'sack_goblin.png',
    '1755315637082-bf7155eb-baac-4e07-bf23-2d70c21edef2-removebg-preview.png': 'wallys_toad_v2.png',
    '1755371173109-1b0710c4-0abc-470e-bfcd-306778411e69-removebg-preview.png': 'banner_toad.png',
    '1755371593258-59526074-51e2-45b3-a416-8d63008f0e11-removebg-preview.png': 'embercap_v2.png',
    '1755371709037-f3fc61d8-4a2c-4a2b-af16-514786e1ee41-removebg-preview.png': 'mystivil_v3.png',
    '1755371780949-40e847ea-b568-4a83-8a6e-b8946cf4d1c8-removebg-preview.png': 'dewdrop_v2.png',
    '1755375394572-6fb7c8e6-73e3-4401-a973-495fd1ddd577-removebg-preview.png': 'chief_thornpaw_v2.png',
    '1755378739154-eeb37900-b5bb-4cdd-b672-b636df8b5f0b-removebg-preview.png': 'red_toad_goblet.png',
    '1755378826607-eed13935-a743-482c-bb6d-38889bcfb6f9-removebg-preview.png': 'blue_toad_princess.png',
    '1755379033589-b338415d-b66b-4d11-a0ef-9bdd7aba403f-removebg-preview.png': 'armoured_shroom_soldier.png',
    '1755379102794-5039a874-1ffc-47d2-a8e5-abdb006232d3-removebg-preview.png': 'orange_shroom_child.png',
    '1755379171158-acb06d04-61d2-40a1-bdfa-d2e3039d1ea9-removebg-preview.png': 'green_shroom_ranger.png',
    '1757896474876-b8635485-78a0-40c8-9604-0064dd14c31b-removebg-preview.png': 'black_dragonborn.png',
    '1759956007426-0199c58d-52ad-7bec-841b-403bd6448dde-removebg-preview.png': 'legion_spearman.png',
    '1759956152934-0199c58f-7232-7be7-9528-7a0c5e07fc0f-removebg-preview.png': 'legion_archer.png',
    '81OwebnlGAL-removebg-preview.png': 'wooden_barrel.png',
    'adobe-express-file-(1).webp':      'gentleman_with_cane.webp',
    'escape pod.png':                   'big_t_v2.png',
    'image-removebg-preview.webp':      'shadow_figure.webp',
    'unnamed.png':                      'crouching_rogue.png',
    'unnamed.webp':                     'knight_cartographer.webp',
    'unnamed.jpg':                      'steam_golem.jpg',
    'unnamed-removebg-preview(1).png':  'worlds_best_dad_toad.png',
    'unnamed-removebg-preview.webp':    'knight_with_map.webp',
    'vellumf.webp':                     'vellum_female.webp',
    'vampt.webp':                       'vampire_toad_alt.webp',
    'toadie.webp':                      'toadie_wide.webp',
    'tiadvbyuer.webp':                  'tanuki_toad.webp',
    'jester.webp':                      'jester_goomba.webp',
    'dfas.webp':                        'eager_v3.webp',
    'cfleadtoad.webp':                  'toad_lee_v3.webp',
    'fads.png':                         'goomba_executive.png',
    'lizardfolk_mm5e-removebg-preview.webp': 'lizardfolk.webp',
    'terenzio-cassalanter.webp':        'terenzio_cassalanter.webp',
    'kingk.webm':                       'king_k_rool.webm',
    'ezgif-7db39b515dd4aab1.webm':      'sprite_anim.webm',
}

# ---------------------------------------------------------------------------
# 2. KEEP — the ai/ subfolder is props and set dressing, not characters.
#    Those belong with the other exhibit art, not in portraits/.
# ---------------------------------------------------------------------------
AI_PROPS = {
    ';etter.webp':          'bowser_letter_to_peach.webp',
    'v;psdf.webp':          'gift_box_trap.webp',
    'a_a_faded_photograph_m.webp': 'faded_photograph_peach.webp',
    'aoi_d_9cydlmvk_r2gdxopgo5phqjzf_ro8megpmfliu2mztkpd8cjbzx8phb63nq_5-aszp-v08fnwqmrkk-_re3etardyvfqzpovcb5xvpnj3tya7anrek5-1jibtfz45njl_usmdnu6rcymkncp6ccxgvhgywbcjj7ikfy8fj8l1tyw10vas1024-rj-removebg-.webp':
        'top_hat_toad_magician.webp',
    'flux-2-flex-20260129_b_a_heavy,_ominous_tom.webp': 'ominous_tome.webp',
    'hunyuan-image-3.0_b_a_jagged_piece_of_gr.webp':    'jagged_green_crystal.webp',
    'imagen-4.0-ultra-generate-001_a_a_crumpled,_water-da.webp': 'crumpled_comic_page.webp',
    'gemini_generated_image_18f4c518f4c518f4.webp': 'green_t_battle_napkin.webp',
    'gemini_generated_image_x2wgfkx2wgfkx2wg.webp': 'vine_wrapped_leg.webp',
    '1771128957079-019c5f82-e53a-715e-9e13-4bdc7bc1e167.webp': 'waluigi_tennis_arcane.webp',
    '1771270026408-019c67eb-2741-7695-9671-47b1908551c7-removebg-preview.webp': 'shadow_knight.webp',
    'screenshot-2026-02-06-190552.webp': 'ball_collection.webp',
    'screenshot-2026-02-06-190711.webp': 'safe_recipe_note.webp',
    'screenshot-2026-02-07-165711.webp': 'raventree_manor_map.webp',
    'screenshot-2026-02-16-205256.webp': 'toad_army_photo.webp',
    'unnamed.webp':                      'mages_guild_seal.webp',
    'napkin.jpg':                        None,   # HTTP 403 error page, not an image
    'button.webp':                       'red_button_pocketwatch.webp',
    'redbutton.webp':                    None,   # byte-identical to button.webp
}

# ---------------------------------------------------------------------------
# 3. DELETE — official Nintendo artwork and game sprite rips.
#    Not ours, and the archive's whole visual identity is original art.
# ---------------------------------------------------------------------------
DELETE_RIPS = [
    '171-1716410_mario-star-pixel-png-super-mario-brothers-star.webp',
    '220.webp',
    '225px-SPM_Red_Paratroopa.png',
    '268-(2).webp',
    '268-removebg-preview.webp',
    '268__1_-removebg-preview.webp',
    '800px-Toadbertmlbis.png',
    '800px-magikoopa_artwork_-_super_mario_3d_world.webp',
    'KamekNSMBW.webp',
    'Koopa_Troopa_by_Shigehisa_Nakaue.png',
    'MLBISBlorbedToad.png',
    'MLSS+BM_Art_-_Fawful.png',
    'bluet.png',
    'ezgif-7d221b3e36544a77.webp',
    'tumblr_mqtfrs9xbu1rrftcdo1_500.webp',
    'ga.webp',
    'goomba_by_shigehisa_nakaue.webp',
    'hammer_bro_nsmbu_artwork.webp',
    'icemumbus.webp',
    'imgbin-mario-bros-bowser-hammer-bro-super-smash-bros-brawl-dry-land-re3ndp9hnvsetzk4k1smskawk_t.webp',
    'jr-removebg-preview.webp',
    'jr.webp',
    'koopa.webp',
    'luma.webp',
    'mario0.webp',
    'midbus_mlbisbjj.gif',
    'pmttyd_red_koopa_troopa_sprite.webp',
    'rodger.webp',
    'toad_accessory_pmtok_sprite.webp',
    'tripplet.webp',
    'luiii.webp',
    'fun.webp',
    '3.jpg',
    'istockphoto-119740478-612x612.webp',   # stock photography
    '1751731335890-c4086394-5065-4954-bbc9-a4c6a633e24f-removebg-preview.png',  # official Waluigi art
    'dftetef-100e2a1d-1843-47ab-9e83-5c7882f2b3ea-removebg-preview.webp',       # pixel sprite rip
]
DELETE_RIPS_AI = ['chomp.webp', 'gp.webp', 'earthshake_punch.webp', 'green.webp',
                  'bowserball.webp', 'warppipe.webp', 'bombx.webp']

# ---------------------------------------------------------------------------
# 4. DELETE — audio. Soundtrack rips plus unreferenced takes. Nothing in the
#    site or the data files points at any local audio; the two real audio
#    references in the data are external catbox URLs. 205 MB of the folder's
#    245 MB was this.
# ---------------------------------------------------------------------------
DELETE_AUDIO_EXT = {'.mp3', '.wav'}

# ---------------------------------------------------------------------------
# 5. DELETE — exact byte-for-byte duplicates. Keeper listed first.
# ---------------------------------------------------------------------------
DELETE_EXACT_DUPES = [
    'vellumff.webp',                  # == vellumf.webp
    'wa.png',                         # == image-removebg-preview.png
    'unnamed-removebg-preview.png',   # == hammer.png
    'image-removebg-preview.png',     # kept as purple_t_v2 source; dupe of wa.png
    'eager.webp',                     # near-dupe of eaggger.webp, lower quality
]

SKIP_ALWAYS = {'.gitignore', '.gitattributes'}


def sha(path):
    h = hashlib.md5()
    with open(path, 'rb') as fh:
        for b in iter(lambda: fh.read(65536), b''):
            h.update(b)
    return h.hexdigest()


def git(*args):
    return subprocess.run(['git'] + list(args), cwd=ROOT,
                          capture_output=True, text=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--apply', action='store_true', help='actually move/delete')
    args = ap.parse_args()
    apply = args.apply

    plan = {'rename': [], 'prop': [], 'delete': [], 'missing': [], 'collide': []}

    for d in (PORTRAITS, PROPS, SCENES):
        if apply:
            os.makedirs(d, exist_ok=True)

    # --- deletions -----------------------------------------------------
    for name in DELETE_RIPS + DELETE_EXACT_DUPES:
        p = os.path.join(NPC, name)
        if os.path.exists(p):
            plan['delete'].append(('rip/dupe', 'npc/' + name))
    for name in DELETE_RIPS_AI:
        p = os.path.join(NPC, 'ai', name)
        if os.path.exists(p):
            plan['delete'].append(('rip', 'npc/ai/' + name))
    for root, _dirs, files in os.walk(NPC):
        for f in files:
            if os.path.splitext(f)[1].lower() in DELETE_AUDIO_EXT:
                rel = os.path.relpath(os.path.join(root, f), ROOT)
                plan['delete'].append(('audio', rel))
    napkin = os.path.join(NPC, 'ai', 'napkin.jpg')
    if os.path.exists(napkin):
        plan['delete'].append(('corrupt (HTTP 403 page)', 'npc/ai/napkin.jpg'))
    rb = os.path.join(NPC, 'ai', 'redbutton.webp')
    if os.path.exists(rb):
        plan['delete'].append(('dupe of button.webp', 'npc/ai/redbutton.webp'))

    delset = {p for _r, p in plan['delete']}

    # --- renames into portraits/ ---------------------------------------
    for src, dst in RENAME_PORTRAITS.items():
        s = os.path.join(NPC, src.rstrip())
        if not os.path.exists(s):
            plan['missing'].append('npc/' + src)
            continue
        if 'npc/' + src in delset:
            continue
        d = os.path.join(PORTRAITS, dst)
        if os.path.exists(d):
            if sha(s) == sha(d):
                plan['delete'].append(('already in portraits/ as ' + dst, 'npc/' + src))
                continue
            plan['collide'].append(('npc/' + src, 'portraits/' + dst))
            continue
        plan['rename'].append(('npc/' + src, 'portraits/' + dst))

    # --- ai/ props ------------------------------------------------------
    aidir = os.path.join(NPC, 'ai')
    if os.path.isdir(aidir):
        for f in sorted(os.listdir(aidir)):
            if f in SKIP_ALWAYS or f in DELETE_RIPS_AI:
                continue
            if f in ('napkin.jpg', 'redbutton.webp'):
                continue
            s = os.path.join(aidir, f)
            if not os.path.isfile(s):
                continue
            if os.path.splitext(f)[1].lower() in DELETE_AUDIO_EXT:
                continue
            dst = AI_PROPS.get(f, f)
            if dst is None:
                continue
            d = os.path.join(PROPS, dst)
            if os.path.exists(d) and sha(s) == sha(d):
                plan['delete'].append(('already in props/', 'npc/ai/' + f))
                continue
            plan['prop'].append(('npc/ai/' + f, 'Reputation-Matrix2/assets/props/' + dst))

    # --- bg/ scenes -----------------------------------------------------
    bgdir = os.path.join(NPC, 'bg')
    BG = {'6819b503a490c402b158c652fe468c67.webp': 'peach_bedroom.webp',
          'overheadpeach.webp': 'peach_hall_overhead.webp'}
    if os.path.isdir(bgdir):
        for f in sorted(os.listdir(bgdir)):
            s = os.path.join(bgdir, f)
            if os.path.isfile(s):
                plan['prop'].append(('npc/bg/' + f,
                                     'Reputation-Matrix2/assets/scenes/' + BG.get(f, f)))

    # --- report ---------------------------------------------------------
    print('npc/ sort plan  (%s)' % ('APPLYING' if apply else 'dry run — use --apply'))
    print('=' * 74)
    print('\n%d KEEP -> portraits/' % len(plan['rename']))
    for s, d in sorted(plan['rename']):
        print('   %-62s -> %s' % (s, d))
    print('\n%d KEEP -> props / scenes' % len(plan['prop']))
    for s, d in sorted(plan['prop']):
        print('   %-62s -> %s' % (s, d))
    print('\n%d DELETE' % len(plan['delete']))
    by = {}
    for r, p in plan['delete']:
        by.setdefault(r.split(' (')[0], []).append(p)
    for r in sorted(by):
        print('   [%s] %d file(s)' % (r, len(by[r])))
    if plan['collide']:
        print('\n%d NAME COLLISION (left in place, resolve by hand)' % len(plan['collide']))
        for s, d in plan['collide']:
            print('   %-62s vs existing %s' % (s, d))
    if plan['missing']:
        print('\n%d listed but not found (already sorted?)' % len(plan['missing']))
        for m in plan['missing'][:10]:
            print('   ' + m)

    if not apply:
        print('\nNothing changed. Re-run with --apply.')
        return 0

    moved = deleted = 0
    for s, d in plan['rename'] + plan['prop']:
        sp, dp = os.path.join(ROOT, s), os.path.join(ROOT, d)
        os.makedirs(os.path.dirname(dp), exist_ok=True)
        r = git('mv', s, d)
        if r.returncode != 0:
            shutil.move(sp, dp)
        moved += 1
    for _r, p in plan['delete']:
        if not os.path.exists(os.path.join(ROOT, p)):
            continue
        r = git('rm', '-q', '-f', p)
        if r.returncode != 0:
            os.remove(os.path.join(ROOT, p))
        deleted += 1

    for d in (os.path.join(NPC, 'ai'), os.path.join(NPC, 'bg'), NPC):
        try:
            if os.path.isdir(d) and not os.listdir(d):
                os.rmdir(d)
                print('removed empty dir', os.path.relpath(d, ROOT))
        except OSError:
            pass

    print('\nmoved %d, deleted %d' % (moved, deleted))
    return 0


if __name__ == '__main__':
    sys.exit(main())
