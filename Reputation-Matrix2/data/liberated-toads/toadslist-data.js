// toadslist-data.js
// Canonical Liberated Toads roster + governance, taken directly from
// "Liberated Toads work/Toadslist.xlsx" (3 sheets: Sheet1 roster, Cohort List,
// Leadership Positions). This module is the single source of truth for the
// Liberated Toads Command page. Do not invent figures here — every entry
// traces back to the intake workbook or to a cited repo lore file.
//
// Portrait sources: every toad is a standalone PNG in assets/images/toads/roster/.
// User art: Liberated Toads work/ (danm, tpoadlee, six=Somkin J, lyio=Gearspore,
// sniop=Lilystalker aka Snipe T, reag=Regan, …) plus legacy toads/ fallbacks.
// Remaining portraits were cut from sheet_a.png / sheet_b.png (tools/cut-toad-sheets.py).
// Replaced after visual check: Transparen T, Inkspot, Quillback.

export const TOADSLIST_SOURCE = {
    file: 'Reputation-Matrix2/Liberated Toads work/Toadslist.xlsx',
    sheets: ['Sheet1 (roster of 75)', 'Cohort List (research notes)', 'Leadership Positions (structure + voting rules)'],
    intakeDate: '2026-08-19',
    rosterNote: '74 named toads + 1 unidentified spore (??? #69). The older 150+/generated-roster machinery on this page was replaced by this list; the 150-freed/158-escaped battle figures remain canon context in the timeline, not roster headcount.'
};

// --- Sheet 1: the roster -------------------------------------------------
export const TOADSLIST_ROSTER = [
    { num: 1, id: '01_dan', name: "Dan", affiliation: "Archie's Followers", weapon: "Sword", seen: true, portrait: { kind: 'file', file: 'toad_01_dan.png' }, cap: 'Red-Spot', artStatus: 'filed' },
    { num: 2, id: '02_eager', name: "Eager", affiliation: "Archie's Followers", weapon: "Whip", seen: true, portrait: { kind: 'file', file: 'toad_02_eager.png' }, cap: 'Red-Spot', artStatus: 'unknown' },
    { num: 3, id: '03_rodger', name: "Rodger", affiliation: "Archie's Followers", weapon: "Sniper", seen: true, portrait: { kind: 'file', file: 'toad_03_rodger.png' }, cap: 'Forest', artStatus: 'unknown' },
    { num: 4, id: '04_ryan', name: "Ryan", affiliation: "Archie's Followers", weapon: "Spell Caster", seen: true, portrait: { kind: 'file', file: 'toad_04_ryan.png' }, cap: 'Purple', artStatus: 'unknown' },
    { num: 5, id: '05_toad_lee', name: "Toad Lee", affiliation: "Archie's Followers", weapon: "Axe", seen: true, portrait: { kind: 'file', file: 'toad_05_toad_lee.png' }, cap: 'Red-Spot', artStatus: 'filed' },
    { num: 6, id: '06_bones', name: "Bones", affiliation: "Archie's Followers", weapon: "Fist", seen: true, portrait: { kind: 'file', file: 'toad_06_bones.png' }, cap: 'Red-Spot', artStatus: 'unknown' },
    { num: 7, id: '07_perot', name: "Perot", affiliation: "Speaker L Followers", weapon: "Crossbow", seen: true, portrait: { kind: 'file', file: 'toad_07_perot.png' }, cap: 'Red-Spot', artStatus: 'unknown' },
    { num: 8, id: '08_salam', name: "Salam", affiliation: "Speaker L Followers", weapon: "Heavy Crossbow", seen: true, portrait: { kind: 'file', file: 'toad_08_salam.png' }, cap: 'Blue', artStatus: 'filed' },
    { num: 9, id: '09_somkin_j', name: "Somkin J", affiliation: "Speaker L Followers", weapon: "Gun", seen: true, portrait: { kind: 'file', file: 'toad_09_somkin_j.png' }, cap: 'Forest', artStatus: 'filed' },
    { num: 10, id: '10_toadburt', name: "Toadburt", affiliation: "Unaffiliated", weapon: "Unarmed", seen: true, portrait: { kind: 'file', file: 'toad_10_toadburt.png' }, cap: 'Cream', artStatus: 'unknown' },
    { num: 11, id: '11_lucky_t', name: "Lucky T", affiliation: "Pond Patrol", weapon: "Sword and Shield", seen: true, portrait: { kind: 'file', file: 'toad_11_lucky_t.png' }, cap: 'Yellow', artStatus: 'filed' },
    { num: 12, id: '12_creek', name: "Creek", affiliation: "Medics United", weapon: "Potions", seen: true, portrait: { kind: 'file', file: 'toad_12_creek.png' }, cap: 'Green', artStatus: 'filed' },
    { num: 13, id: '13_speaker_l', name: "Speaker L", affiliation: "Leaders", weapon: "Megaphone", seen: true, portrait: { kind: 'file', file: 'toad_13_speaker_l.png' }, cap: 'Yellow', artStatus: 'unknown' },
    { num: 14, id: '14_elder_mudcap', name: "Elder Mudcap", affiliation: "Leaders", weapon: "Unarmed", seen: false, portrait: { kind: 'file', file: 'toad_14_elder_mudcap.png' }, cap: 'Earth', artStatus: 'unknown' },
    { num: 15, id: '15_bearr', name: "Bearr", affiliation: "Pond Patrol", weapon: "Spear", seen: true, portrait: { kind: 'file', file: 'toad_15_bearr.png' }, cap: 'Forest', artStatus: 'filed' },
    { num: 16, id: '16_spoky', name: "Spoky", affiliation: "Pond Patrol", weapon: "Rock Stick", seen: true, portrait: { kind: 'file', file: 'toad_16_spoky.png' }, cap: 'Purple', artStatus: 'filed' },
    { num: 17, id: '17_bion', name: "Bion", affiliation: "Pond Patrol", weapon: "Two axes", seen: true, portrait: { kind: 'file', file: 'toad_17_bion.png' }, cap: 'Red-Spot', artStatus: 'filed' },
    { num: 18, id: '18_axie', name: "Axie", affiliation: "Pond Patrol", weapon: "Long axe", seen: true, portrait: { kind: 'file', file: 'toad_18_axie.png' }, cap: 'Red-Spot', artStatus: 'filed' },
    { num: 19, id: '19_freaza', name: "Freaza", affiliation: "Pond Patrol", weapon: "Scoped Pistol", seen: true, portrait: { kind: 'file', file: 'toad_19_freaza.png' }, cap: 'Forest', artStatus: 'filed' },
    { num: 20, id: '20_speaker_rivers', name: "Speaker Rivers", affiliation: "Leaders", weapon: "Paper/Pen", seen: true, portrait: { kind: 'file', file: 'toad_20_speaker_rivers.png' }, cap: 'Blue', artStatus: 'filed' },
    { num: 21, id: '21_kyo', name: "Kyo", affiliation: "Pond Patrol", weapon: "Fishing Spear", seen: true, portrait: { kind: 'file', file: 'toad_21_kyo.png' }, cap: 'Blue', artStatus: 'unknown' },
    { num: 22, id: '22_naners', name: "Naners", affiliation: "Pond Patrol", weapon: "Crossbow", seen: true, portrait: { kind: 'file', file: 'toad_22_naners.png' }, cap: 'Yellow', artStatus: 'filed' },
    { num: 23, id: '23_oiqie', name: "Oiqie", affiliation: "Pond Patrol", weapon: "Ball and Chain", seen: true, portrait: { kind: 'file', file: 'toad_23_oiqie.png' }, cap: 'Purple', artStatus: 'unknown' },
    { num: 24, id: '24_rawra', name: "Rawra", affiliation: "Pond Patrol", weapon: "Ship Anchor", seen: true, portrait: { kind: 'file', file: 'toad_24_rawra.png' }, cap: 'Blue', artStatus: 'filed' },
    { num: 25, id: '25_regan', name: "Regan", affiliation: "Pond Patrol", weapon: "Winged Spear", seen: true, portrait: { kind: 'file', file: 'toad_25_regan.png' }, cap: 'Forest', artStatus: 'filed' },
    { num: 26, id: '26_mechal', name: "Mechal", affiliation: "Pond Patrol", weapon: "Huge Improvised Rock sword", seen: true, portrait: { kind: 'file', file: 'toad_26_mechal.png' }, cap: 'Stone', artStatus: 'unknown' },
    { num: 27, id: '27_bluey', name: "Bluey", affiliation: "Pond Patrol", weapon: "Sling shot", seen: true, portrait: { kind: 'file', file: 'toad_27_bluey.png' }, cap: 'Blue', artStatus: 'filed' },
    { num: 28, id: '28_slinat', name: "Slinat", affiliation: "Pond Patrol", weapon: "Yo-Yo Slingshot", seen: true, portrait: { kind: 'file', file: 'toad_28_slinat.png' }, cap: 'Green', artStatus: 'filed' },
    { num: 29, id: '29_swig', name: "Swig", affiliation: "Pond Patrol", weapon: "Yo-Yo Ship Anchor", seen: true, portrait: { kind: 'file', file: 'toad_29_swig.png' }, cap: 'Blue', artStatus: 'filed' },
    { num: 30, id: '30_captain_fernback', name: "Captain Fernback", affiliation: "Pond Patrol", weapon: "Gavel", seen: false, portrait: { kind: 'file', file: 'toad_30_captain_fernback.png' }, cap: 'Navy', artStatus: 'unknown' },
    { num: 31, id: '31_dewdrop', name: "Dewdrop", affiliation: "Speaker River Follower", weapon: "Pen", seen: false, portrait: { kind: 'file', file: 'toad_31_dewdrop.png' }, cap: 'Blue', artStatus: 'unknown' },
    { num: 32, id: '32_ironspore', name: "Ironspore", affiliation: "Speaker River Follower", weapon: "Spores/Gas", seen: false, portrait: { kind: 'file', file: 'toad_32_ironspore.png' }, cap: 'Forest', artStatus: 'unknown' },
    { num: 33, id: '33_metpetal', name: "Metpetal", affiliation: "Speaker River Follower", weapon: "Pointy Flower Blades", seen: false, portrait: { kind: 'file', file: 'toad_33_metpetal.png' }, cap: 'Pink', artStatus: 'unknown' },
    { num: 34, id: '34_teacher_t', name: "Teacher T", affiliation: "Teachers", weapon: "Abjuration", seen: false, portrait: { kind: 'file', file: 'toad_34_teacher_t.png' }, cap: 'Earth', artStatus: 'unknown' },
    { num: 35, id: '35_bully_t', name: "Bully T", affiliation: "Student Union", weapon: "Evocation", seen: false, portrait: { kind: 'file', file: 'toad_35_bully_t.png' }, cap: 'Crimson', artStatus: 'unknown' },
    { num: 36, id: '36_nerd_t', name: "Nerd T", affiliation: "Student Union", weapon: "Divination", seen: false, portrait: { kind: 'file', file: 'toad_36_nerd_t.png' }, cap: 'Sky', artStatus: 'unknown' },
    { num: 37, id: '37_geek_t', name: "Geek T", affiliation: "Student Union", weapon: "Conjuration", seen: false, portrait: { kind: 'file', file: 'toad_37_geek_t.png' }, cap: 'Orange', artStatus: 'unknown' },
    { num: 38, id: '38_transparen_t', name: "Transparen T", affiliation: "Student Union", weapon: "Illusion", seen: false, portrait: { kind: 'file', file: 'toad_38_transparen_t.png' }, cap: 'Star', artStatus: 'unknown' },
    { num: 39, id: '39_necro', name: "Necro", affiliation: "Student Union", weapon: "Necromancy", seen: false, portrait: { kind: 'file', file: 'toad_39_necro.png' }, cap: 'Black', artStatus: 'unknown' },
    { num: 40, id: '40_tally', name: "Tally", affiliation: "Student Union", weapon: "Transmutation", seen: false, portrait: { kind: 'file', file: 'toad_40_tally.png' }, cap: 'Yellow', artStatus: 'unknown' },
    { num: 41, id: '41_ratie', name: "Ratie", affiliation: "Speaker River Follower", weapon: "Bricks", seen: false, portrait: { kind: 'file', file: 'toad_41_ratie.png' }, cap: 'Brick', artStatus: 'unknown' },
    { num: 42, id: '42_kit_t', name: "Kit T", affiliation: "Medics United", weapon: "Breath/Healing breath", seen: false, portrait: { kind: 'file', file: 'toad_42_kit_t.png' }, cap: 'Mint', artStatus: 'unknown' },
    { num: 43, id: '43_pondscum', name: "Pondscum", affiliation: "High Command", weapon: "Rifle Ranged Weapon", seen: false, portrait: { kind: 'file', file: 'toad_43_pondscum.png' }, cap: 'Swamp', artStatus: 'unknown' },
    { num: 44, id: '44_lilystalker', name: "Lilystalker", aka: "Snipe T", affiliation: "Pond Patrol", weapon: "Scoped Sniper", seen: false, portrait: { kind: 'file', file: 'toad_44_lilystalker.png' }, cap: 'Forest', artStatus: 'filed' },
    { num: 45, id: '45_inkspot', name: "Inkspot", affiliation: "High Command", weapon: "Ink/ Squid", seen: false, portrait: { kind: 'file', file: 'toad_45_inkspot.png' }, cap: 'Ink', artStatus: 'unknown' },
    { num: 46, id: '46_quillback', name: "Quillback", affiliation: "High Command", weapon: "Feathers", seen: false, portrait: { kind: 'file', file: 'toad_46_quillback.png' }, cap: 'Quill', artStatus: 'unknown' },
    { num: 47, id: '47_gearspore', name: "Gearspore", affiliation: "High Command", weapon: "Spinning Gears", seen: false, portrait: { kind: 'file', file: 'toad_47_gearspore.png' }, cap: 'Stone', artStatus: 'filed' },
    { num: 48, id: '48_hammerling', name: "Hammerling", affiliation: "Overseers", weapon: "Hammer", seen: false, portrait: { kind: 'file', file: 'toad_48_hammerling.png' }, cap: 'Copper', artStatus: 'unknown' },
    { num: 49, id: '49_spearwort', name: "Spearwort", affiliation: "Overseers", weapon: "Vines/ Pointy vine spears", seen: false, portrait: { kind: 'file', file: 'toad_49_spearwort.png' }, cap: 'Forest', artStatus: 'unknown' },
    { num: 50, id: '50_shieldback', name: "Shieldback", affiliation: "Speaker L Followers", weapon: "Riot Shield", seen: false, portrait: { kind: 'file', file: 'toad_50_shieldback.png' }, cap: 'Steel', artStatus: 'unknown' },
    { num: 51, id: '51_soothing_moss', name: "Soothing Moss", affiliation: "Deputies", weapon: "Aroma", seen: false, portrait: { kind: 'file', file: 'toad_51_soothing_moss.png' }, cap: 'Moss', artStatus: 'unknown' },
    { num: 52, id: '52_gentlepad', name: "Gentlepad", affiliation: "Medics United", weapon: "Long Healing Tounge", seen: false, portrait: { kind: 'file', file: 'toad_52_gentlepad.png' }, cap: 'Rose', artStatus: 'unknown' },
    { num: 53, id: '53_shadowleap', name: "Shadowleap", affiliation: "Speaker River Follower", weapon: "Smoke Grenade", seen: false, portrait: { kind: 'file', file: 'toad_53_shadowleap.png' }, cap: 'Charcoal', artStatus: 'unknown' },
    { num: 54, id: '54_whispertail', name: "Whispertail", affiliation: "Deputies", weapon: "Spiky Tail", seen: false, portrait: { kind: 'file', file: 'toad_54_whispertail.png' }, cap: 'Taupe', artStatus: 'unknown' },
    { num: 55, id: '55_spork', name: "Spork", affiliation: "Spore 5", weapon: "Spore Breath", seen: false, portrait: { kind: 'file', file: 'toad_55_spork.png' }, cap: 'Spore', artStatus: 'unknown' },
    { num: 56, id: '56_spik', name: "Spik", affiliation: "Spore 5", weapon: "Spore Touch", seen: false, portrait: { kind: 'file', file: 'toad_56_spik.png' }, cap: 'Spore', artStatus: 'unknown' },
    { num: 57, id: '57_speki', name: "Speki", affiliation: "Spore 5", weapon: "Spore sight", seen: false, portrait: { kind: 'file', file: 'toad_57_speki.png' }, cap: 'Spore', artStatus: 'unknown' },
    { num: 58, id: '58_spoolo', name: "Spoolo", affiliation: "Spore 5", weapon: "Spore Hearing", seen: false, portrait: { kind: 'file', file: 'toad_58_spoolo.png' }, cap: 'Spore', artStatus: 'unknown' },
    { num: 59, id: '59_crai_yellow', name: "Crai Yellow", affiliation: "Lillypads", weapon: "Lightning", seen: false, portrait: { kind: 'file', file: 'toad_59_crai_yellow.png' }, cap: 'Yellow', artStatus: 'unknown' },
    { num: 60, id: '60_lualu_green', name: "Lualu Green", affiliation: "Lillypads", weapon: "Grass overgrowth", seen: false, portrait: { kind: 'file', file: 'toad_60_lualu_green.png' }, cap: 'Green', artStatus: 'unknown' },
    { num: 61, id: '61_zahue_t_black', name: "Zahue T Black", affiliation: "Lillypads", weapon: "Darkness", seen: false, portrait: { kind: 'file', file: 'toad_61_zahue_t_black.png' }, cap: 'Black', artStatus: 'unknown' },
    { num: 62, id: '62_oliver_p', name: "Oliver P", affiliation: "Lillypads", weapon: "Pink gas", seen: false, portrait: { kind: 'file', file: 'toad_62_oliver_p.png' }, cap: 'Pink', artStatus: 'unknown' },
    { num: 63, id: '63_poe_white', name: "Poe White", affiliation: "Lillypads", weapon: "Brightness", seen: false, portrait: { kind: 'file', file: 'toad_63_poe_white.png' }, cap: 'White', artStatus: 'unknown' },
    { num: 64, id: '64_hustion_gold', name: "Hustion Gold", affiliation: "Lillypads", weapon: "Midas Touch", seen: false, portrait: { kind: 'file', file: 'toad_64_hustion_gold.png' }, cap: 'Gold', artStatus: 'unknown' },
    { num: 65, id: '65_sally_silver', name: "Sally Silver", affiliation: "Lillypads", weapon: "Lead weapons", seen: false, portrait: { kind: 'file', file: 'toad_65_sally_silver.png' }, cap: 'Silver', artStatus: 'unknown' },
    { num: 66, id: '66_rchie_iser', name: "Rchie Iser", affiliation: "Speaker L Followers", weapon: "Eye beams", seen: false, portrait: { kind: 'file', file: 'toad_66_rchie_iser.png' }, cap: 'Star', artStatus: 'unknown' },
    { num: 67, id: '67_kila_t', name: "Kila T", affiliation: "Speaker L Followers", weapon: "knifes", seen: false, portrait: { kind: 'file', file: 'toad_67_kila_t.png' }, cap: 'Crimson', artStatus: 'unknown' },
    { num: 68, id: '68_wavey', name: "Wavey", affiliation: "Speaker L Followers", weapon: "Can Control Water", seen: false, portrait: { kind: 'file', file: 'toad_68_wavey.png' }, cap: 'Cyan', artStatus: 'unknown' },
    { num: 69, id: '69_unknown', name: "???", affiliation: "Spore 5", weapon: "???", seen: false, portrait: { kind: 'file', file: 'toad_69_unknown.png' }, cap: 'Unknown', artStatus: 'unknown' },
    { num: 70, id: '70_barie', name: "Barie", affiliation: "Speaker River Follower", weapon: "Bite", seen: false, portrait: { kind: 'file', file: 'toad_70_barie.png' }, cap: 'Ivory', artStatus: 'unknown' },
    { num: 71, id: '71_caerk', name: "Caerk", affiliation: "Speaker L Followers", weapon: "Baking tools", seen: false, portrait: { kind: 'file', file: 'toad_71_caerk.png' }, cap: 'White', artStatus: 'unknown' },
    { num: 72, id: '72_nat', name: "Nat", affiliation: "Speaker L Followers", weapon: "Bug Spray", seen: false, portrait: { kind: 'file', file: 'toad_72_nat.png' }, cap: 'Olive', artStatus: 'unknown' },
    { num: 73, id: '73_toad_ie_foxx', name: "Toad ie Foxx", affiliation: "Speaker River Follower", weapon: "Fox Tail", seen: false, portrait: { kind: 'file', file: 'toad_73_toad_ie_foxx.png' }, cap: 'Forest', artStatus: 'unknown' },
    { num: 74, id: '74_anne_ari_t', name: "Anne Ari T", affiliation: "Speaker L Followers", weapon: "Bug  Jar", seen: false, portrait: { kind: 'file', file: 'toad_74_anne_ari_t.png' }, cap: 'Yellow', artStatus: 'unknown' },
    { num: 75, id: '75_4331_t', name: "4331 T", affiliation: "Speaker River Follower", weapon: "Calculator", seen: false, portrait: { kind: 'file', file: 'toad_75_4331_t.png' }, cap: 'Star', artStatus: 'unknown' },
];

// --- Sheet 2 + 3: affiliations, tiers, voting ----------------------------
export const AFFILIATION_META = {
    "Leaders": { tier: 3, tierLabel: "Leaders", research: "n/a", note: "One of the three Leader groups (with High Command and Overseers) appointed by the Speaker.", color: "#d4af37" },
    "High Command": { tier: 3, tierLabel: "Leaders", research: "n/a", note: "Leader group appointed by the Speaker.", color: "#8ea1c1" },
    "Overseers": { tier: 3, tierLabel: "Leaders", research: "n/a", note: "Leader group appointed by the Speaker.", color: "#9b7fb8" },
    "Deputies": { tier: 4, tierLabel: "High Command (army leadership)", research: "n/a", note: "High-ranking army group. Appointed by the Speaker; Tier 3 appoints Tier 4, who chooses the leaders of the armies.", color: "#c98a4b" },
    "Pond Patrol": { tier: 5, tierLabel: "Army", research: "Siege of Raventree", note: "Formed through vote. The cohort\u2019s standing army; its leaders are chosen by the Deputies.", color: "#4f9d69" },
    "Spore 5": { tier: 5, tierLabel: "Army (ROGUE)", research: "n/a", note: "A group of 5 powerful spore creatures \u2014 not toads. Rogue: never chosen by the appointment chain.", color: "#7d6bb5" },
    "Archie's Followers": { tier: 6, tierLabel: "Armed Group", research: "Barrel Toads", note: "The original liberators and their loyalists. Part of the electorate that elects the Speaker and votes armies into being.", color: "#e07a5f" },
    "Speaker L Followers": { tier: 6, tierLabel: "Armed Group", research: "Vigilance", note: "Loyalists of the ousted Speaker. Still part of the electorate.", color: "#5fa8d3" },
    "Speaker River Follower": { tier: 6, tierLabel: "Armed Group", research: "Aegis Prison Break", note: "Followers of the sitting Speaker, Rivers. Part of the electorate.", color: "#3a86ff" },
    "Student Union": { tier: 7, tierLabel: "Group / Union", research: "n/a", note: "The Class of T \u2014 one student per school of magic. Part of the electorate.", color: "#f4a261" },
    "Medics United": { tier: 7, tierLabel: "Group / Union", research: "n/a", note: "Healers and medics. Part of the electorate.", color: "#e76f51" },
    "Lillypads": { tier: 7, tierLabel: "Group / Union", research: "n/a", note: "Like Power Rangers, but vigilantes. Seven color-coded toads. Part of the electorate.", color: "#83c5be" },
    "Teachers": { tier: 7, tierLabel: "Group / Union", research: "n/a", note: "Sits in tier 7 (Groups/Unions) above the Student Union. Part of the electorate.", color: "#b0a08c" },
    "Unaffiliated": { tier: null, tierLabel: "Unaffiliated", research: "n/a", note: "No bloc. Toadburt answers to nobody.", color: "#8d99ae" },
};

// The seven leadership positions (Sheet 3, verbatim structure).
// 'electedBy' / 'appointedBy' encode the voting rules that follow.
export const LEADERSHIP_POSITIONS = [
    {
        position: 1,
        title: 'Speaker',
        holder: 'Rivers',
        holderNum: 20,
        status: 'Elected — sitting Speaker',
        electedBy: 'Tiers 6 and 7 (Armed Groups + Groups/Unions)',
        appoints: [3, 4],
        note: 'Position 1 is elected by 6 and 7.'
    },
    {
        position: 2,
        title: 'Rival Speaker',
        holder: 'Speaker L',
        holderNum: 13,
        status: 'OUSTED',
        electedBy: null,
        appoints: [],
        note: 'Speaker L was ousted. The office of rival speaker is what his following rallies around.'
    },
    {
        position: 3,
        title: 'Leaders',
        groups: ['High Command', 'Overseers', 'Leaders'],
        status: 'Appointed by the Speaker',
        appointedBy: 'Position 1 (Speaker)',
        appoints: [4],
        note: 'Position 1 appoints 3. Tier 3 then appoints Tier 4.'
    },
    {
        position: 4,
        title: 'High Ranking Army Groups',
        groups: ['Deputies'],
        status: 'Appointed (Speaker + Tier 3)',
        appointedBy: 'Position 1 and Position 3',
        appoints: [],
        note: 'Position 1 appoints 4; 3 appoints 4, who chooses the leaders of 5.'
    },
    {
        position: 5,
        title: 'Armies',
        groups: ['Pond Patrol', 'The Spore 5'],
        status: 'Formed by vote of Tiers 6+7; leaders chosen by Tier 4',
        formedBy: 'Vote from Tiers 6 and 7',
        note: 'Armies are formed by vote from 6 and 7. The Spore 5 is rogue, so not chosen.'
    },
    {
        position: 6,
        title: 'Armed Groups',
        groups: ["Archie's Followers", 'Speaker L Followers', 'Speaker River Follower'],
        status: 'Electorate',
        note: 'Votes for the Speaker and votes armies into being.'
    },
    {
        position: 7,
        title: 'Groups / Unions',
        groups: ['Teachers', 'Student Union', 'Medics United', 'Lillypads'],
        status: 'Electorate',
        note: 'Votes for the Speaker and votes armies into being. Teachers sit above the Student Union.'
    }
];

// Voting rules exactly as recorded on the Leadership Positions sheet.
export const VOTING_RULES = [
    { rule: 'Position 1 is elected by 6 and 7.', source: 'Toadslist.xlsx — Leadership Positions' },
    { rule: 'Position 1 appoints 3 and 4.', source: 'Toadslist.xlsx — Leadership Positions' },
    { rule: 'Armies are formed by vote from 6 and 7.', source: 'Toadslist.xlsx — Leadership Positions' },
    { rule: '3 appoints 4, who chooses the leaders of 5.', source: 'Toadslist.xlsx — Leadership Positions' },
    { rule: 'The Spore 5 is rogue, so not chosen.', source: 'Toadslist.xlsx — Leadership Positions' },
    { rule: 'Speaker L was ousted.', source: 'Toadslist.xlsx — Leadership Positions' }
];

// Recorded votes. Tallies are reproduced only where a repo source carries them;
// outcomes with no recorded tally say so instead of inventing numbers.
export const VOTE_RECORDS = [
    {
        id: 'FOUNDING',
        title: 'Founding of the Liberated Toads',
        kind: 'Full cohort',
        tally: { yes: 78, no: 59, abstain: null, turnout: 137 },
        result: 'Carried',
        summary: 'The founding vote of the cohort. 78 yes against 59 no of 137 cast.',
        source: 'data/factions.json → liberated_toads'
    },
    {
        id: 'V-2016-001',
        title: 'Scavenging Doctrine',
        kind: 'Council',
        tally: { yes: 5, no: 1, abstain: 0, turnout: null },
        result: 'Carried',
        summary: "Dan's cautious-expedition doctrine beat Archie's small-team plan, 5–1–0.",
        source: 'data/liberatedToadsSystem.json → recentVotes'
    },
    {
        id: 'V-2018-001',
        title: 'Emergency Resolution 17-A',
        kind: 'Council',
        tally: { yes: 6, no: 0, abstain: 0, turnout: null },
        result: 'Carried unanimously',
        summary: 'Granted Speaker L emergency powers and created the Accountability Docket.',
        source: 'data/liberatedToadsSystem.json → recentVotes'
    },
    {
        id: 'V-2018-002',
        title: 'Medical Priority Protocol',
        kind: 'Council',
        tally: { yes: 6, no: 0, abstain: 0, turnout: null },
        result: 'Carried unanimously',
        summary: 'Triage rules under which core party members do not get priority over other toads.',
        source: 'data/liberatedToadsSystem.json → recentVotes'
    },
    {
        id: 'V-2019-001',
        title: 'Raventree Containment',
        kind: 'Council',
        tally: { yes: 5, no: 1, abstain: 0, turnout: null },
        result: 'Carried',
        summary: 'Pond Patrol establishes the containment perimeter at Raventree. Dissent recorded from Healer Mistpetal.',
        source: 'data/liberatedToadsSystem.json → recentVotes'
    },
    {
        id: 'V-2021-001',
        title: 'Response to the Iron Mandate',
        kind: 'Council (emergency)',
        tally: { yes: null, no: null, abstain: null, turnout: null },
        result: 'SUSPENDED — never resumed',
        summary: 'Tabled with a one-hour deadline as the shooting started. Standing count at suspension: Strategic Withdrawal 3, Diplomatic Outreach 2, Armed Resistance 1, Evacuation 0. Speaker Rivers had already resigned from the Midlands Diet that morning in protest at the Mandate (28–8–3).',
        source: 'data/liberatedToadsSystem.json → activeVotes'
    },
    {
        id: 'V-2021-002',
        title: 'Order 120 Crisis Response',
        kind: 'Council (emergency)',
        tally: { yes: null, no: null, abstain: null, turnout: null },
        result: 'No majority — superseded by events',
        summary: 'Assault 2 / hjumpik Bargain 1 / Distraction Strike 1 with a 60-minute deadline and the Speaker absent. Overtaken by the Reclamation of the Vigilance and the Aegis uprising before a majority formed.',
        source: 'data/liberatedToadsSystem.json → activeVotes'
    },
    {
        id: 'SPEAKER-SUCCESSION',
        title: 'Election of the Speaker / Ouster of Speaker L',
        kind: 'Electorate (Tiers 6+7)',
        tally: { yes: null, no: null, abstain: null, turnout: null },
        result: 'Rivers elected Speaker; Speaker L ousted',
        summary: 'Under the current structure the Speaker is elected by the Armed Groups and the Groups/Unions. Rivers holds the office; Speaker L was ousted and stands as rival speaker. No tally was recorded in the intake workbook.',
        source: 'Toadslist.xlsx — Leadership Positions'
    },
    {
        id: 'ARMY-POND-PATROL',
        title: 'Formation of the Pond Patrol',
        kind: 'Electorate (Tiers 6+7)',
        tally: { yes: null, no: null, abstain: null, turnout: null },
        result: 'Army formed',
        summary: "Armies are formed by vote from Tiers 6 and 7; the Pond Patrol is the army that exists because of one. The Spore 5 holds equal standing as an army but was never chosen — it is rogue.",
        source: 'Toadslist.xlsx — Cohort List (Pond Patrol: "Formed through vote")'
    }
];

// Electorate: every toad in tiers 6+7 votes for Speaker and army formation.
export const NAMED_TOAD_COUNT = 74;
export const ROSTER_RECORDS = 75; // includes unidentified ???
export const ELECTORATE_SIZE = 41;

// Enrichment for toads the repo already carries deep lore for. Optional;
// merged into roster entries by id at render time.
export const CORE_DETAIL = {
    '01_dan': {
        title: 'The Faithful — Hero of the Liberation',
        roleNote: "Former leader of the freed toads; rallied from catatonia to fight the Wraith one-handed. Missing right arm. Archie's Followers.",
        lore: "Dan led the freed toads before Speaker L's faction took the cohort. He voted with the cautious-expedition doctrine (V-2016-001) and fought at Aegis."
    },
    '02_eager': {
        title: 'The Swift',
        roleNote: 'First successful recon; saved by magical healing after the Cone of Cold. Archie’s Followers.',
        lore: 'Recovered from a magically induced coma. Consistently the fastest set of feet in the cohort.'
    },
    '03_rodger': {
        title: 'The Sharpshooter',
        roleNote: 'Earl Grey kill; perimeter defense of the Vigilance. Archie’s Followers. (Older records spell him Roger.)',
        lore: 'The cohort’s designated marksman — listed in the intake with a Sniper.'
    },
    '04_ryan': {
        title: 'The Arcane',
        roleNote: 'Jumped from the Vigilance during the Iron Sky Breach and was taken in by a Rakasha spirit-walker. Archie’s Followers.',
        lore: 'The cohort’s spellcaster, now returned from the Rakasha lands.'
    },
    '05_toad_lee': {
        title: 'Co-Leader — civilian continuity',
        roleNote: 'Co-leader of the Liberated Toads alongside Rodger (per faction record). Archie’s Followers.',
        lore: 'Carries the axe and the civilian continuity of the cohort.'
    },
    '06_bones': {
        title: 'Intelligence Operative',
        roleNote: 'Captured at Aegis, stabbed by General Ironhand when his guard disguise failed. Survived. Archie’s Followers.',
        lore: 'The cohort’s spy. His capture is what triggered Order 120.'
    },
    '13_speaker_l': {
        title: 'Voice of the Pond — OUSTED',
        roleNote: 'Rival Speaker. Led the movement through the founding, the Docket and Raventree; granted emergency powers 6–0–0; later ousted.',
        lore: 'The Legion held a decoy in his place. The cohort anthem sings: “Speaker L once ruled too soft / We seized the throne and cast him off.”'
    },
    '14_elder_mudcap': {
        title: 'Elder — Leaders (Tier 3)',
        roleNote: 'Elder of the barrel survivors, now sitting in the Leaders tier appointed under Speaker Rivers.',
        lore: 'Voted for Strategic Withdrawal in the suspended Iron Mandate vote.'
    },
    '20_speaker_rivers': {
        title: 'SPEAKER — elected by Tiers 6+7',
        roleNote: 'Resigned from the Midlands Diet in protest at the Iron Mandate; commander (remote) at the Aegis uprising; now holds the Speaker’s office.',
        lore: 'The harder man: resigned from a chamber rather than sit in it, then used his own capture as a delivery mechanism for a weapon.'
    },
    '30_captain_fernback': {
        title: 'Captain — Pond Patrol (Tier 5)',
        roleNote: 'Commands the army voted into being by Tiers 6+7; keeps the Patrol from becoming a private army.',
        lore: 'Assumed temporary command of the whole cohort during Order 120 when the Speaker was absent.'
    },
    '34_teacher_t': {
        title: 'Teacher — Class of T',
        roleNote: 'Teaches the Student Union their schools of magic; sits in tier 7 above the Student Union.',
        lore: 'One teacher, six students, one school each: Abjuration to Transmutation.'
    }
};

// Sprite sheet geometry (6x6). Slicing is done with CSS percentages so any
// source resolution works.
export const SHEET_LAYOUT = { cols: 6, rows: 6 };
export const PORTRAIT_BASE = '../../../assets/images/toads/roster/';


// Standing Speaker preference by affiliation. Individual ballots are only
// named when artStatus is 'filed'. Everyone else appears as unknown.
export const STANDING_SPEAKER_BALLOT = {
    "Archie's Followers": 'Rivers',
    'Speaker River Follower': 'Rivers',
    'Speaker L Followers': 'Speaker L'
};
