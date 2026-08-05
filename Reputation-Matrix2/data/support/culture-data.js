

import { SPECIES_DATA } from './species-data.js';
import { LEGAL_DATA } from './legal_data.js';

export const CULTURE_DATA = {
    imperial_heartland: {
        id: 'imperial_heartland',
        name: "Imperial Heartland",
        adjectives: ["Hierarchical", "Industrial", "Disciplined"],
        description: "The dominant culture of the Regal Empire and its civilized neighbors. It values order, architecture, steel, and written law above all else. Magic is regulated, and the hierarchy is absolute.",
        color: "#FFD700", // Gold
        icon: "👑",
        art_style: "Brutalist Gothic & High Stone",
        primary_species: ['regal_midlander', 'dnd_human', 'dnd_dwarf_hill', 'dnd_dragonborn_metallic', 'faerun_human', 'faerun_dwarf', 'faerun_dragonborn', 'dnd_tiefling', 'hobbit', 'faerun_halfling', 'faerun_tiefling', 'teyvat_human', 'fontainian', 'block_folk'],
        traditions: ['respect_for_elders', 'hospitality', 'imperial_tithe_custom'] 
    },
    mushroom_kingdom_folk: {
        id: 'mushroom_kingdom_folk',
        name: "Fungal Folkway",
        adjectives: ["Cheery", "Resilient", "Communal"],
        description: "The surprisingly hardy culture of the Toads and their neighbors. Despite constant invasions, they maintain an optimistic, community-focused outlook centered on the monarchy and nature.",
        color: "#e91e63", // Pink
        icon: "🍄",
        art_style: "Rounded Organic & Bright Colors",
        primary_species: ['toad_citizen', 'goomba', 'yoshi', 'koopa', 'shy_guy', 'bob_omb'],
        traditions: ['hospitality', 'respect_for_elders', 'communal_festivals']
    },
    primal_wilds: {
        id: 'primal_wilds',
        name: "The Primal Wilds",
        adjectives: ["Tribal", "Naturalistic", "Fierce"],
        description: "Societies that reject stone cities for the rhythm of nature. Strength is the only currency, and leadership is earned through blood or wisdom, not inheritance.",
        color: "#228B22", // Forest Green
        icon: "🐾",
        art_style: "Bone Carving & Living Wood",
        primary_species: ['moonfang_werewolf', 'rakasha_hunter', 'forest_tribes', 'centaur_human_head', 'dnd_elf_wood', 'beastman', 'lizardman', 'faerun_firbolg', 'tortle', 'ent', 'dnd_goliath', 'faerun_goliath', 'vulcan', 'hilichurl', 'griffon'],
        traditions: ['trial_by_combat', 'ancient_pacts', 'the_great_hunt']
    },
    mystic_conclave: {
        id: 'mystic_conclave',
        name: "Mystic Conclave",
        adjectives: ["Esoteric", "Secluded", "Arcane"],
        description: "Cultures dedicated to the study and preservation of magic. They often live in isolation or in high towers, viewing non-magical concerns as trivial.",
        color: "#8A2BE2", // Purple
        icon: "🔮",
        art_style: "Floating Spires & Glowing Runes",
        primary_species: ['dnd_elf_high', 'faerun_elf', 'earth_land_mage', 'unicorn', 'kirin', 'faerun_aasimar', 'adeptus', 'dnd_genasi_fire', 'faerun_genasi', 'exceed', 'celestial_spirit', 'melusine', 'youkai_inazuma'],
        traditions: ['ancient_pacts', 'respect_for_the_departed', 'mana_reverence']
    },
    subterranean_deep: {
        id: 'subterranean_deep',
        name: "The Deep Dark",
        adjectives: ["Claustrophobic", "Resourceful", "Ruthless"],
        description: "Cultures forged in the dark places of the world. Whether dwarves guarding gold or skaven gnawing roots, they value survival, secrecy, and the hoarding of resources.",
        color: "#5d4037", // Brown
        icon: "⛏️",
        art_style: "Geometric Stone & Bioluminescence",
        primary_species: ['dnd_dwarf_mountain', 'skaven', 'monty_mole', 'dnd_elf_drow', 'faerun_drow', 'faerun_gnome', 'goblin', 'cave_troll'],
        traditions: ['trial_by_combat', 'ancestor_worship', 'oath_of_stone']
    },
    pocket_monster_society: {
        id: 'pocket_monster_society',
        name: "Pokémon Society",
        adjectives: ["Competitive", "Bonded", "Evolutionary"],
        description: "A society built around the symbiotic relationship between humans and magical creatures. Status is determined by the strength of one's team and the depth of their bonds.",
        color: "#FF0000", // Red
        icon: "🧢",
        art_style: "Modern Tech & Gym Stadiums",
        primary_species: ['pokemon_human', 'normal_pokemon', 'water_pokemon', 'grass_pokemon', 'fire_pokemon', 'ghost_pokemon', 'steel_pokemon', 'electric_pokemon', 'psychic_pokemon', 'dark_pokemon', 'fighting_pokemon'],
        traditions: ['gym_challenge', 'trainer_honor', 'fair_play']
    },
    academy_city: {
        id: 'academy_city',
        name: "Kivotos Academy Life",
        adjectives: ["Armed", "Scholastic", "Bureaucratic"],
        description: "A unique culture where daily life revolves around school clubs, student councils, and urban warfare. Every citizen carries a firearm, and political disputes are settled with bullets and paperwork.",
        color: "#4a86e8", // Blue
        icon: "🎓",
        art_style: "Clean Urban & Anime Militaria",
        primary_species: ['kivotos_human', 'kivotos_angel', 'kivotos_demon', 'kivotos_beastkin', 'kivotos_robot'],
        traditions: ['club_autonomy', 'gun_ownership', 'student_council_rule']
    },
    old_world_feudalism: {
        id: 'old_world_feudalism',
        name: "Old World Feudalism",
        adjectives: ["Grim", "Perilous", "Faithful"],
        description: "A hard life defined by steel, faith, and gunpowder. The people here are superstitious and hardy, constantly holding back the tide of Chaos with faith in their gods and their cannons.",
        color: "#c81d25", // Empire Red
        icon: "⚔️",
        art_style: "Gothic Timber & Skull Motifs",
        primary_species: ['warhammer_human', 'warhammer_dwarf', 'warhammer_elf', 'bretonnia_human', 'gondorian', 'rohirrim', 'middle_earth_dwarf'],
        traditions: ['trial_by_combat', 'witch_hunting', 'feudal_oaths']
    },
    cosmic_void: {
        id: 'cosmic_void',
        name: "The Void-Touched",
        adjectives: ["Nihilistic", "Abstract", "Infinite"],
        description: "Entities and cultures that exist on the fringe of reality. Their customs are incomprehensible to linear minds, often involving paradoxes, entropy, and silence.",
        color: "#000000", // Black
        icon: "🌀",
        art_style: "Non-Euclidean & Glitch Art",
        primary_species: ['void_entity', 'cosmic_entity', 'fractal_being', 'null_texture', 'time_echo', 'chaos_warrior', 'abyss_mage', 'centaur_horse_head', 'logic_crystal', 'wireframe_husk', 'creeper_kind', 'ender_kind'],
        traditions: [] // Intentionally empty
    },
    digital_frontier: {
        id: 'digital_frontier',
        name: "The Digital Frontier",
        adjectives: ["Connected", "Fast", "Information-Based"],
        description: "Societies existing within or adjacent to the datastream. Information is currency, and reputation is measured in bandwidth. Physical form is secondary to digital presence.",
        color: "#00FFFF", // Cyan
        icon: "🌐",
        art_style: "Neon Cyberpunk & Data Streams",
        primary_species: ['netizen', 'spam_bot', 'living_meme', 'virus_entity', 'moderator_construct', 'rebel_hackers'],
        traditions: ['trainer_honor', 'open_source', 'data_sanctity']
    },
    eternal_waaagh: {
        id: 'eternal_waaagh',
        name: "The Eternal WAAAGH!",
        adjectives: ["Violent", "Loud", "Simple"],
        description: "A culture based entirely on war. Leadership is determined by size and volume. There is no economy, only looting. There is no art, only crude graffiti and weaponsmithing.",
        color: "#33691e", // Orc Green
        icon: "👹",
        art_style: "Scrap Metal & War Paint",
        primary_species: ['dnd_orc', 'warhammer_orc', 'midlands_goblin', 'dnd_goblin', 'uruk_hai', 'mordor_orc', 'hobgoblin_khanates'],
        traditions: ['trial_by_combat', 'looting_rights', 'might_makes_right']
    },
    sweet_islands: {
        id: 'sweet_islands',
        name: "Confectionary Commonwealth",
        adjectives: ["Sugary", "Relaxed", "Delicious"],
        description: "A bizarre culture evolved on L'Eclaire Isle and surrounding sugar-based lands. Life revolves around baking, leisure, and the defense of their delicious bodies from predators.",
        color: "#f48c06", // Orange
        icon: "🍩",
        art_style: "Pastel Rococo & Edible Architecture",
        primary_species: ['dough_glazed', 'dough_cake', 'dough_jelly', 'dough_cruller', 'dough_croissant', 'frosting_slime', 'candy_construct'],
        traditions: ['hospitality', 'afternoon_tea', 'bakers_dozen']
    },
    undead_aristocracy: {
        id: 'undead_aristocracy',
        name: "Undead Aristocracy",
        adjectives: ["Eternal", "Decadent", "Predatory"],
        description: "Societies ruled by immortal beings where mortals are cattle. High culture, fine art, and rigid etiquette mask a brutal system of blood tithes and necromancy.",
        color: "#8B0000", // Dark Red
        icon: "🧛",
        art_style: "Victorian Gothic & Obsidian",
        primary_species: ['elder_vampire', 'skeleton_warrior', 'ghost_spirit', 'vampire_counts', 'tomb_kings', 'mordor_wraith'],
        traditions: ['blood_tithe', 'masquerade', 'ancestor_worship']
    },
    equestrian_harmony: {
        id: 'equestrian_harmony',
        name: "Equestrian Harmony",
        adjectives: ["Matriarchal", "Pastel", "Magical"],
        description: "A pony-centric society built on the ideals of friendship and harmony, enforced by a benevolent (mostly) autocracy. Magic is commonplace and integrated into weather and daily life.",
        color: "#e1bee7", // Lavender
        icon: "🦄",
        art_style: "High Fantasy & Crystal Spires",
        primary_species: ['earth_pony', 'pegasus', 'unicorn', 'crystal_pony', 'kirin', 'changeling_reformed', 'yak', 'bat_pony'],
        traditions: ['winter_wrap_up', 'hearths_warming', 'friendship_reports']
    },
    seafarers_code: {
        id: 'seafarers_code',
        name: "Seafarer's Code",
        adjectives: ["Nautical", "Free", "Superstitious"],
        description: "Communities living on the high seas, from the Grand Line to the Pianta Sea. They value freedom above all, respecting the power of the ocean and the Pirate King.",
        color: "#0077b6", // Ocean Blue
        icon: "⚓",
        art_style: "Naval Timber & Sailcloth",
        primary_species: ['pianta', 'noki', 'faerun_triton', 'water_pokemon'],
        traditions: ['parley', 'burial_at_sea', 'share_of_the_loot']
    }
};