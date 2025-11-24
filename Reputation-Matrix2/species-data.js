
import { RESEARCH_CATEGORIES, RESEARCH_TO_ESTATE_MAPPING } from './research-constants.js';

export const SPECIES_ESTATE_BIAS = {
    // Nobility, Clergy, Burghers, Commoners, Indentured, Slaves
    dnd_human: { nobility: 0.10, clergy: 0.10, burghers: 0.30, commoners: 0.40, indentured: 0.10, slaves: 0.00 },
    regal_midlander: { nobility: 0.15, clergy: 0.15, burghers: 0.35, commoners: 0.30, indentured: 0.05, slaves: 0.00 },
    dnd_elf_high: { nobility: 0.30, clergy: 0.40, burghers: 0.20, commoners: 0.10, indentured: 0.00, slaves: 0.00 },
    dnd_elf_wood: { nobility: 0.10, clergy: 0.20, burghers: 0.10, commoners: 0.60, indentured: 0.00, slaves: 0.00 },
    dnd_elf_drow: { nobility: 0.25, clergy: 0.35, burghers: 0.10, commoners: 0.00, indentured: 0.00, slaves: 0.30 },
    dnd_dwarf_hill: { nobility: 0.05, clergy: 0.05, burghers: 0.50, commoners: 0.40, indentured: 0.00, slaves: 0.00 },
    dnd_dwarf_mountain: { nobility: 0.10, clergy: 0.05, burghers: 0.60, commoners: 0.25, indentured: 0.00, slaves: 0.00 },
    dnd_goblin: { nobility: 0.01, clergy: 0.01, burghers: 0.10, commoners: 0.48, indentured: 0.10, slaves: 0.30 },
    dnd_tiefling: { nobility: 0.05, clergy: 0.10, burghers: 0.40, commoners: 0.40, indentured: 0.05, slaves: 0.00 },
    dnd_orc: { nobility: 0.05, clergy: 0.00, burghers: 0.05, commoners: 0.70, indentured: 0.00, slaves: 0.20 },
    dnd_dragonborn_metallic: { nobility: 0.20, clergy: 0.10, burghers: 0.30, commoners: 0.40, indentured: 0.00, slaves: 0.00 },
    centaur_human_head: { nobility: 0.10, clergy: 0.05, burghers: 0.05, commoners: 0.80, indentured: 0.00, slaves: 0.00 },
    toad_citizen: { nobility: 0.02, clergy: 0.08, burghers: 0.40, commoners: 0.50, indentured: 0.00, slaves: 0.00 },
    koopa: { nobility: 0.20, clergy: 0.05, burghers: 0.10, commoners: 0.60, indentured: 0.00, slaves: 0.05 },
    goomba: { nobility: 0.01, clergy: 0.01, burghers: 0.03, commoners: 0.85, indentured: 0.00, slaves: 0.10 },
    yoshi: { nobility: 0.05, clergy: 0.10, burghers: 0.05, commoners: 0.80, indentured: 0.00, slaves: 0.00 },
    pianta: { nobility: 0.05, clergy: 0.05, burghers: 0.30, commoners: 0.60, indentured: 0.00, slaves: 0.00 },
    noki: { nobility: 0.02, clergy: 0.10, burghers: 0.40, commoners: 0.48, indentured: 0.00, slaves: 0.00 },
    shy_guy: { nobility: 0.01, clergy: 0.01, burghers: 0.03, commoners: 0.55, indentured: 0.10, slaves: 0.30 },
    bob_omb: { nobility: 0.01, clergy: 0.01, burghers: 0.03, commoners: 0.95, indentured: 0.00, slaves: 0.00 },
    monty_mole: { nobility: 0.01, clergy: 0.01, burghers: 0.10, commoners: 0.78, indentured: 0.10, slaves: 0.00 },
    moonfang_werewolf: { nobility: 0.15, clergy: 0.10, burghers: 0.05, commoners: 0.70, indentured: 0.00, slaves: 0.00 },
    elder_vampire: { nobility: 0.50, clergy: 0.20, burghers: 0.10, commoners: 0.00, indentured: 0.00, slaves: 0.20 },
    midlands_orc: { nobility: 0.05, clergy: 0.00, burghers: 0.05, commoners: 0.70, indentured: 0.00, slaves: 0.20 },
    rakasha_hunter: { nobility: 0.10, clergy: 0.15, burghers: 0.10, commoners: 0.65, indentured: 0.00, slaves: 0.00 },
    midlands_goblin: { nobility: 0.01, clergy: 0.01, burghers: 0.40, commoners: 0.48, indentured: 0.00, slaves: 0.10 },
    skeleton_warrior: { nobility: 0.00, clergy: 0.00, burghers: 0.00, commoners: 0.00, indentured: 0.00, slaves: 1.00 },
    ghost_spirit: { nobility: 0.10, clergy: 0.10, burghers: 0.10, commoners: 0.70, indentured: 0.00, slaves: 0.00 },
    warhammer_human: { nobility: 0.15, clergy: 0.10, burghers: 0.30, commoners: 0.40, indentured: 0.05, slaves: 0.00 },
    skaven: { nobility: 0.01, clergy: 0.05, burghers: 0.10, commoners: 0.14, indentured: 0.00, slaves: 0.70 },
    warhammer_dwarf: { nobility: 0.10, clergy: 0.05, burghers: 0.65, commoners: 0.20, indentured: 0.00, slaves: 0.00 },
    warhammer_orc: { nobility: 0.05, clergy: 0.01, burghers: 0.04, commoners: 0.80, indentured: 0.00, slaves: 0.10 },
    warhammer_elf: { nobility: 0.30, clergy: 0.40, burghers: 0.20, commoners: 0.10, indentured: 0.00, slaves: 0.00 },
    beastman: { nobility: 0.05, clergy: 0.05, burghers: 0.00, commoners: 0.90, indentured: 0.00, slaves: 0.00 },
    kivotos_human: { nobility: 0.05, clergy: 0.05, burghers: 0.60, commoners: 0.30, indentured: 0.00, slaves: 0.00 },
    kivotos_angel: { nobility: 0.10, clergy: 0.20, burghers: 0.50, commoners: 0.20, indentured: 0.00, slaves: 0.00 },
    kivotos_demon: { nobility: 0.10, clergy: 0.05, burghers: 0.40, commoners: 0.45, indentured: 0.00, slaves: 0.00 },
    kivotos_beastkin: { nobility: 0.05, clergy: 0.05, burghers: 0.30, commoners: 0.60, indentured: 0.00, slaves: 0.00 },
    kivotos_robot: { nobility: 0.00, clergy: 0.00, burghers: 0.20, commoners: 0.00, indentured: 0.80, slaves: 0.00 },
    pokemon_human: { nobility: 0.05, clergy: 0.05, burghers: 0.50, commoners: 0.40, indentured: 0.00, slaves: 0.00 },
    netizen: { nobility: 0.01, clergy: 0.01, burghers: 0.80, commoners: 0.18, indentured: 0.00, slaves: 0.00 },
    dough_glazed: { nobility: 0.10, clergy: 0.05, burghers: 0.40, commoners: 0.45, indentured: 0.00, slaves: 0.00 },
    earth_pony: { nobility: 0.05, clergy: 0.05, burghers: 0.20, commoners: 0.50, indentured: 0.00, slaves: 0.20 },
    pegasus: { nobility: 0.15, clergy: 0.05, burghers: 0.20, commoners: 0.40, indentured: 0.00, slaves: 0.20 },
    unicorn: { nobility: 0.20, clergy: 0.15, burghers: 0.30, commoners: 0.20, indentured: 0.00, slaves: 0.15 },
    default: { nobility: 0.05, clergy: 0.05, burghers: 0.20, commoners: 0.50, indentured: 0.10, slaves: 0.10 },
};

export const SPECIES_DATA = {
    // ========================================================================
    // D&D / FANTASY BASE
    // ========================================================================
    dnd_human: { 
        name: 'Human (Variant/Mutated)', 
        color: '#d4a373', 
        icon: '🧑', 
        description: 'Versatile and ambitious humans found across all realms.',
        favored_guild_tag: 'industrial', // Jack of all trades, usually industry/political
        religion_breakdown: { silver_flame_faith: 0.40, star_spirits: 0.20, cog_gospel: 0.15, unaligned: 0.25 }
    },
    dnd_elf_high: { 
        name: 'Elf (High)', 
        color: '#ffd700', 
        icon: '🧝‍♂️', 
        description: 'Graceful masters of arcane magic and high culture.',
        favored_guild_tag: 'arcane',
        religion_breakdown: { asuryan_faithful: 0.60, sanctum_of_light: 0.20, star_spirits: 0.10, unaligned: 0.10 }
    },
    dnd_elf_wood: { 
        name: 'Elf (Wood)', 
        color: '#558b2f', 
        icon: '🏹', 
        description: 'Swift and stealthy guardians of the deep forests.',
        favored_guild_tag: 'nature',
        religion_breakdown: { yggdrasil_pact: 0.50, wild_hunt: 0.30, star_spirits: 0.20 }
    },
    dnd_elf_drow: { 
        name: 'Elf (Drow)', 
        color: '#424242', 
        icon: '🕷️', 
        description: 'Subterranean elves adapted to the dark dangers of the Underdark.',
        favored_guild_tag: 'covert', // Underworld/Political
        religion_breakdown: { void_nihilism: 0.60, sanguine_path: 0.30, unaligned: 0.10 }
    },
    dnd_dwarf_hill: { 
        name: 'Dwarf (Hill)', 
        color: '#8d6e63', 
        icon: '🍺', 
        description: 'Tough and intuitive dwarves with a love for craftsmanship.',
        favored_guild_tag: 'industrial',
        religion_breakdown: { cog_gospel: 0.50, star_spirits: 0.20, unaligned: 0.30 }
    },
    dnd_dwarf_mountain: { 
        name: 'Dwarf (Mountain)', 
        color: '#5d4037', 
        icon: '🛡️', 
        description: 'Strong and rugged dwarves from high peaks and deep mines.',
        favored_guild_tag: 'mining',
        religion_breakdown: { cog_gospel: 0.70, silver_flame_faith: 0.10, unaligned: 0.20 }
    },
    dnd_goblin: { 
        name: 'Goblin', 
        color: '#4caf50', 
        icon: '👺', 
        description: 'Scrappy and numerous, thriving in the margins of society.',
        favored_guild_tag: 'scavenger',
        social_status: "Pest / Nuisance",
        religion_breakdown: { great_waaagh: 0.50, jester_cult: 0.30, scrappers_code: 0.10, unaligned: 0.10 }
    },
    dnd_tiefling: { 
        name: 'Tiefling', 
        color: '#7b1fa2', 
        icon: '😈', 
        description: 'Individuals with an infernal heritage and innate magic.',
        favored_guild_tag: 'arcane',
        social_status: "Mistrusted",
        religion_breakdown: { jester_cult: 0.40, silver_flame_faith: 0.10, void_nihilism: 0.20, unaligned: 0.30 }
    },
    dnd_orc: { 
        name: 'Orc', 
        color: '#33691e', 
        icon: '👹', 
        description: 'Strong, tribal warriors who value physical might.',
        favored_guild_tag: 'military',
        religion_breakdown: { great_waaagh: 0.90, unaligned: 0.10 }
    },
    dnd_dragonborn_metallic: { 
        name: 'Dragonborn (Metallic)', 
        color: '#fbc02d', 
        icon: '⚡', 
        description: 'Noble dragonkin claiming ancestry from metallic dragons.',
        favored_guild_tag: 'military',
        religion_breakdown: { arceus_mythos: 0.60, silver_flame_faith: 0.30, unaligned: 0.10 }
    },
    dnd_goliath: { 
        name: 'Goliath', 
        color: '#90a4ae', 
        icon: '🏔️', 
        description: 'Mountain-dwelling giants.', 
        favored_guild_tag: 'mining',
        religion_breakdown: { lunar_cycle: 0.50, cog_gospel: 0.20, unaligned: 0.30 } 
    },
    dnd_genasi_fire: { 
        name: 'Genasi (Fire)', 
        color: '#ff5722', 
        icon: '🔥', 
        description: 'Fire elementals.', 
        favored_guild_tag: 'arcane',
        religion_breakdown: { lunar_cycle: 0.40, cog_gospel: 0.20, unaligned: 0.40 } 
    },
    
    // ========================================================================
    // SPECIAL REQUESTS
    // ========================================================================
    centaur_human_head: { 
        name: 'Centaur (Classic)', 
        color: '#8d6e63', 
        icon: '🐎', 
        description: 'The classic centaur: human torso and head on a horse body.',
        favored_guild_tag: 'nature',
        religion_breakdown: { lunar_cycle: 0.50, yggdrasil_pact: 0.30, unaligned: 0.20 }
    },
    centaur_horse_head: { 
        name: 'Centaur (Equine)', 
        color: '#5d4037', 
        icon: '🐴', 
        description: "An anthropomorphic horse-person with the four-legged lower body of a centaur.",
        favored_guild_tag: 'military',
        social_status: "Cursed Anomaly",
        religion_breakdown: { void_nihilism: 0.80, unaligned: 0.20 }
    },

    // ========================================================================
    // MARIO WORLD
    // ========================================================================
    toad_citizen: { 
        name: 'Toad', 
        color: '#ff6b6b', 
        icon: '🍄', 
        description: 'The peaceful, fungal-capped citizens of the Mushroom Kingdom.',
        favored_guild_tag: 'bureaucratic', // Good at admin/service
        social_status: "Under Occupation / Enslaved",
        religion_breakdown: { star_spirits: 0.85, jester_cult: 0.05, unaligned: 0.10 }
    },
    koopa: { 
        name: 'Koopa Troopa', 
        color: '#ffd93d', 
        icon: '🐢', 
        description: 'Turtle-like creatures that form the backbone of Bowser\'s army.',
        favored_guild_tag: 'military',
        religion_breakdown: { great_waaagh: 0.40, cog_gospel: 0.20, unaligned: 0.40 }
    },
    goomba: { 
        name: 'Goomba', 
        color: '#8d6e63', 
        icon: '😠', 
        description: 'Small, mushroom-like creatures with a grumpy disposition.',
        favored_guild_tag: 'scavenger',
        social_status: "Disposable Minion",
        religion_breakdown: { great_waaagh: 0.70, unaligned: 0.30 }
    },
    yoshi: { 
        name: 'Yoshi', 
        color: '#76ff03', 
        icon: '🦖', 
        description: 'Friendly, dinosaur-like omnivores from Yoshi\'s Island.',
        favored_guild_tag: 'nature',
        religion_breakdown: { star_spirits: 0.60, lunar_cycle: 0.30, unaligned: 0.10 }
    },
    pianta: { 
        name: 'Pianta', 
        color: '#f48c06', 
        icon: '🌴', 
        description: 'Strong, tree-loving islanders from the Sunshine Isles.',
        favored_guild_tag: 'agricultural',
        religion_breakdown: { shine_sprite_cult: 0.70, star_spirits: 0.20, unaligned: 0.10 }
    },
    noki: { 
        name: 'Noki', 
        color: '#4fc3f7', 
        icon: '🐚', 
        description: 'Shell-dwelling islanders often found near coral reefs.',
        favored_guild_tag: 'maritime',
        religion_breakdown: { shine_sprite_cult: 0.60, star_spirits: 0.30, unaligned: 0.10 }
    },
    shy_guy: { 
        name: 'Shy Guy', 
        color: '#ef5350', 
        icon: '🎭', 
        description: 'Masked, mysterious minions who serve various masters.',
        favored_guild_tag: 'covert',
        religion_breakdown: { void_nihilism: 0.50, jester_cult: 0.30, unaligned: 0.20 }
    },
    bob_omb: { 
        name: 'Bob-omb', 
        color: '#212121', 
        icon: '💣', 
        description: 'Living explosives with a short fuse and shorter temper.',
        favored_guild_tag: 'industrial',
        religion_breakdown: { great_waaagh: 0.80, jester_cult: 0.20 }
    },
    monty_mole: { 
        name: 'Monty Mole', 
        color: '#795548', 
        icon: '👓', 
        description: 'Subterranean pests that ambush travelers.',
        favored_guild_tag: 'mining',
        religion_breakdown: { unaligned: 1.0 }
    },

    // ========================================================================
    // THE MIDLANDS
    // ========================================================================
    regal_midlander: { 
        name: 'Regal Midlander', 
        color: '#ffadad', 
        icon: '🧑', 
        description: 'The dominant human culture of the Midlands.',
        favored_guild_tag: 'bureaucratic',
        religion_breakdown: { silver_flame_faith: 0.60, cog_gospel: 0.20, star_spirits: 0.10, unaligned: 0.10 }
    },
    moonfang_werewolf: { 
        name: 'Werewolf', 
        color: '#ffd6a5', 
        icon: '🐺', 
        description: 'Lycanthropes bound to the lunar cycle and pack hierarchy.',
        favored_guild_tag: 'military',
        religion_breakdown: { lunar_cycle: 0.95, unaligned: 0.05 }
    },
    elder_vampire: { 
        name: 'Vampire', 
        color: '#e4c1f9', 
        icon: '🧛', 
        description: 'Ancient, powerful undead aristocrats.',
        favored_guild_tag: 'political',
        religion_breakdown: { sanguine_path: 0.90, void_nihilism: 0.10 }
    },
    midlands_orc: { 
        name: 'Orc (Midlands)', 
        color: '#2d6a4f', 
        icon: '👹', 
        description: 'Brutish warriors of the Wilderlands.',
        favored_guild_tag: 'military',
        religion_breakdown: { great_waaagh: 0.85, lunar_cycle: 0.10, unaligned: 0.05 }
    },
    rakasha_hunter: { 
        name: 'Rakasha', 
        color: '#f0c69d', 
        icon: '🐅', 
        description: 'Proud, cat-like beastfolk who value honor and nature.',
        favored_guild_tag: 'nature',
        religion_breakdown: { lunar_cycle: 0.60, star_spirits: 0.20, arceus_mythos: 0.10, unaligned: 0.10 }
    },
    midlands_goblin: { 
        name: 'Goblin (Scrapper)', 
        color: '#aed581', 
        icon: '👺', 
        description: 'Scrappy scavengers and mechanics.',
        favored_guild_tag: 'scavenger',
        religion_breakdown: { scrappers_code: 0.40, cog_gospel: 0.30, jester_cult: 0.20, unaligned: 0.10 }
    },
    skeleton_warrior: { 
        name: 'Skeleton', 
        color: '#cfd8dc', 
        icon: '💀', 
        description: 'Animated remains serving necromancers.',
        favored_guild_tag: 'military', // Mindless
        religion_breakdown: { sanguine_path: 0.80, void_nihilism: 0.20 }
    },
    ghost_spirit: { 
        name: 'Spirit', 
        color: '#b3e5fc', 
        icon: '👻', 
        description: 'Restless souls bound to the mortal plane.',
        favored_guild_tag: 'arcane',
        religion_breakdown: { dark_moon_clan: 0.50, void_nihilism: 0.30, unaligned: 0.20 }
    },

    // ========================================================================
    // WARHAMMER
    // ========================================================================
    warhammer_human: { name: 'Empire Human', color: '#c81d25', icon: '⚔️', description: 'Hardy humans of the Old World.', favored_guild_tag: 'military', religion_breakdown: { sigmarite_cult: 0.70, cog_gospel: 0.20, unaligned: 0.10 } },
    skaven: { name: 'Skaven', color: '#70e000', icon: '🐀', description: 'Insidious rat-men.', favored_guild_tag: 'industrial', religion_breakdown: { great_horned_rat: 0.90, void_nihilism: 0.10 } },
    warhammer_dwarf: { name: 'Dwarf (Old World)', color: '#0077b6', icon: '🛡️', description: 'Grudge-bearing mountain dwellers.', favored_guild_tag: 'mining', religion_breakdown: { cog_gospel: 0.50, sigmarite_cult: 0.10, unaligned: 0.40 } },
    warhammer_orc: { name: 'Greenskin', color: '#38b000', icon: '🤮', description: 'Savage orcs.', favored_guild_tag: 'military', religion_breakdown: { great_waaagh: 1.0 } },
    warhammer_elf: { name: 'High Elf', color: '#caf0f8', icon: '✨', description: 'Arrogant masters of magic.', favored_guild_tag: 'arcane', religion_breakdown: { asuryan_faithful: 0.80, star_spirits: 0.10, unaligned: 0.10 } },
    beastman: { name: 'Beastman', color: '#5d4037', icon: '🐐', description: 'Twisted children of Chaos.', favored_guild_tag: 'nature', religion_breakdown: { wild_hunt: 0.40, great_waaagh: 0.30, void_nihilism: 0.30 } },
    chaos_warrior: { name: 'Chaos Warrior', color: '#263238', icon: '🛡️', description: 'Humans sworn to Dark Gods.', favored_guild_tag: 'military', religion_breakdown: { khornate_blood_cult: 0.40, nurgle_rot: 0.30, tzeentch_schemes: 0.20, slaanesh_excess: 0.10 } },
    lizardman: { name: 'Lizardman', color: '#00bcd4', icon: '🦎', description: 'Cold-blooded guardians.', favored_guild_tag: 'arcane', religion_breakdown: { great_plan: 1.0 } },

    // ========================================================================
    // MIDDLE-EARTH
    // ========================================================================
    gondorian: { name: 'Man of Gondor', color: '#e0e0e0', icon: '🏰', description: 'Noble descendants of Numenor.', favored_guild_tag: 'military', religion_breakdown: { star_spirits: 0.60, sanctum_of_light: 0.30, unaligned: 0.10 } },
    rohirrim: { name: 'Rohirrim', color: '#81c784', icon: '🐎', description: 'Horse-lords.', favored_guild_tag: 'military', religion_breakdown: { lunar_cycle: 0.40, star_spirits: 0.40, unaligned: 0.20 } },
    middle_earth_elf: { name: 'Elf (Middle-earth)', color: '#ffd700', icon: '🧝', description: 'Immortal beings of starlight.', favored_guild_tag: 'arcane', religion_breakdown: { star_spirits: 0.90, unaligned: 0.10 } },
    middle_earth_dwarf: { name: 'Dwarf (Durin\'s Folk)', color: '#a9a9a9', icon: '⛏️', description: 'Miners and smiths.', favored_guild_tag: 'mining', religion_breakdown: { cog_gospel: 0.85, unaligned: 0.15 } },
    uruk_hai: { name: 'Uruk-hai', color: '#3e2723', icon: '🤚', description: 'Superior breed of Orc.', favored_guild_tag: 'military', religion_breakdown: { great_waaagh: 0.50, cult_of_the_engine: 0.50 } },
    mordor_orc: { name: 'Orc (Mordor)', color: '#5c4d3c', icon: '👺', description: 'Corrupted servants of Sauron.', favored_guild_tag: 'military', religion_breakdown: { the_one_ring_cult: 0.90, great_waaagh: 0.10 } },
    hobbit: { name: 'Hobbit', color: '#8ab17d', icon: '🦶', description: 'Comfort-loving folk.', favored_guild_tag: 'agricultural', religion_breakdown: { star_spirits: 0.30, yggdrasil_pact: 0.20, unaligned: 0.50 } },
    ent: { name: 'Ent', color: '#33691e', icon: '🌳', description: 'Tree-shepherds.', favored_guild_tag: 'nature', religion_breakdown: { yggdrasil_pact: 1.0 } },
    cave_troll: { name: 'Troll', color: '#616161', icon: '🧌', description: 'Huge, dim-witted creatures.', favored_guild_tag: 'military', religion_breakdown: { great_waaagh: 0.50, unaligned: 0.50 } },

    // ========================================================================
    // KIVOTOS
    // ========================================================================
    kivotos_human: { name: 'Student (Human)', color: '#4a86e8', icon: '👩‍🎓', description: 'Students wielding firepower.', favored_guild_tag: 'military_tech', religion_breakdown: { digital_ascension: 0.40, millennium_logic: 0.30, jester_cult: 0.10, unaligned: 0.20 } },
    kivotos_angel: { name: 'Student (Angel)', color: '#fff9c4', icon: '😇', description: 'Halo-bearing students.', favored_guild_tag: 'political', religion_breakdown: { sanctum_of_light: 0.60, silver_flame_faith: 0.20, unaligned: 0.20 } },
    kivotos_demon: { name: 'Student (Demon)', color: '#ef9a9a', icon: '😈', description: 'Horned and tailed students.', favored_guild_tag: 'military', religion_breakdown: { jester_cult: 0.50, slaanesh_excess: 0.20, great_waaagh: 0.10, unaligned: 0.20 } },
    kivotos_beastkin: { name: 'Student (Beastkin)', color: '#ffcc80', icon: '🦊', description: 'Students with animal traits.', favored_guild_tag: 'military', religion_breakdown: { lunar_cycle: 0.40, digital_ascension: 0.30, unaligned: 0.30 } },
    kivotos_robot: { name: 'Automata', color: '#999999', icon: '🤖', description: 'Robotic citizens.', favored_guild_tag: 'industrial', religion_breakdown: { digital_ascension: 0.60, cog_gospel: 0.20, millennium_logic: 0.20 } },

    // ========================================================================
    // POKEMON REGIONS
    // ========================================================================
    pokemon_human: { name: 'Human (Trainer)', color: '#ff0000', icon: '🧢', description: 'Humans who battle alongside Pokémon.', favored_guild_tag: 'nature', religion_breakdown: { arceus_mythos: 0.80, star_spirits: 0.10, unaligned: 0.10 } },
    normal_pokemon: { name: 'Pokémon (Normal)', color: '#a8a878', icon: '⚪', description: 'Versatile Pokémon.', favored_guild_tag: 'nature', religion_breakdown: { arceus_mythos: 1.0 } },
    water_pokemon: { name: 'Pokémon (Water)', color: '#6890f0', icon: '💧', description: 'Aquatic Pokémon.', favored_guild_tag: 'maritime', religion_breakdown: { arceus_mythos: 1.0 } },
    grass_pokemon: { name: 'Pokémon (Grass)', color: '#78c850', icon: '🌿', description: 'Nature Pokémon.', favored_guild_tag: 'agricultural', religion_breakdown: { arceus_mythos: 0.8, yggdrasil_pact: 0.2 } },
    fire_pokemon: { name: 'Pokémon (Fire)', color: '#f08030', icon: '🔥', description: 'Flame Pokémon.', favored_guild_tag: 'military', religion_breakdown: { arceus_mythos: 1.0 } },
    ghost_pokemon: { name: 'Pokémon (Ghost)', color: '#705898', icon: '👻', description: 'Spiritual Pokémon.', favored_guild_tag: 'arcane', religion_breakdown: { arceus_mythos: 0.6, dark_moon_clan: 0.4 } },
    steel_pokemon: { name: 'Pokémon (Steel)', color: '#b8b8d0', icon: '🔩', description: 'Metal Pokémon.', favored_guild_tag: 'industrial', religion_breakdown: { arceus_mythos: 0.7, cog_gospel: 0.3 } },
    electric_pokemon: { name: 'Pokémon (Electric)', color: '#f8d030', icon: '⚡', description: 'Electric Pokémon.', favored_guild_tag: 'industrial', religion_breakdown: { arceus_mythos: 0.8, cult_of_the_engine: 0.2 } },
    psychic_pokemon: { name: 'Pokémon (Psychic)', color: '#f85888', icon: '🔮', description: 'Mental Pokémon.', favored_guild_tag: 'arcane', religion_breakdown: { arceus_mythos: 0.7, star_spirits: 0.3 } },
    dark_pokemon: { name: 'Pokémon (Dark)', color: '#705848', icon: '🌑', description: 'Shadow Pokémon.', favored_guild_tag: 'covert', religion_breakdown: { arceus_mythos: 0.6, void_nihilism: 0.4 } },
    fighting_pokemon: { name: 'Pokémon (Fighting)', color: '#c03028', icon: '🥊', description: 'Martial Pokémon.', favored_guild_tag: 'military', religion_breakdown: { arceus_mythos: 0.8, great_waaagh: 0.2 } },
    
    // ========================================================================
    // THE INTERNET
    // ========================================================================
    netizen: { name: 'Netizen', color: '#00ffff', icon: '🌐', description: 'Digital avatars.', favored_guild_tag: 'digital', religion_breakdown: { digital_ascension: 0.70, jester_cult: 0.20, unaligned: 0.10 } },
    spam_bot: { name: 'Spam Bot', color: '#ffc107', icon: '📧', description: 'Annoying constructs.', favored_guild_tag: 'digital', religion_breakdown: { digital_ascension: 1.0 } },
    living_meme: { name: 'Living Meme', color: '#00e676', icon: '🐸', description: 'Viral entities.', favored_guild_tag: 'digital', religion_breakdown: { jester_cult: 0.90, void_nihilism: 0.10 } },
    virus_entity: { name: 'Virus', color: '#d500f9', icon: '🦠', description: 'Malicious code.', favored_guild_tag: 'digital', religion_breakdown: { void_nihilism: 0.70, missingno_glitch: 0.30 } },
    moderator_construct: { name: 'Moderator', color: '#304ffe', icon: '🛡️', description: 'Enforcers of TOS.', favored_guild_tag: 'digital', religion_breakdown: { digital_ascension: 1.0 } },

    // ========================================================================
    // THE DOUGHNUT HOLE
    // ========================================================================
    void_entity: { name: 'Void Entity', color: '#000000', icon: '🌑', description: 'Beings of emptiness.', favored_guild_tag: 'arcane', religion_breakdown: { void_nihilism: 1.0 } },
    cosmic_entity: { name: 'Cosmic Entity', color: '#9d4edd', icon: '🌌', description: 'Beings of starlight.', favored_guild_tag: 'arcane', religion_breakdown: { star_spirits: 0.50, luma_caretakers: 0.30, void_nihilism: 0.20 } },
    fractal_being: { name: 'Fractal Being', color: '#6200ea', icon: '💠', description: 'Mathematical lifeforms.', favored_guild_tag: 'industrial', religion_breakdown: { gematria_gnosis: 0.60, digital_ascension: 0.40 } },
    time_echo: { name: 'Time Echo', color: '#bdbdbd', icon: '⏳', description: 'Residual images.', favored_guild_tag: 'arcane', religion_breakdown: { void_nihilism: 1.0 } },
    logic_crystal: { name: 'Logic Crystal', color: '#00e5ff', icon: '💎', description: 'Sentient minerals.', favored_guild_tag: 'industrial', religion_breakdown: { cog_gospel: 1.0 } },
    
    // ========================================================================
    // ANIMATOPIA
    // ========================================================================
    rabbit_folk: { name: 'Rabbit', color: '#bdbdbd', icon: '🐰', description: 'Peaceful lagomorphs.', favored_guild_tag: 'agricultural', religion_breakdown: { star_spirits: 0.60, unaligned: 0.40 } },
    sheep_folk: { name: 'Sheep', color: '#f5f5f5', icon: '🐑', description: 'Community herbivores.', favored_guild_tag: 'agricultural', religion_breakdown: { star_spirits: 0.70, unaligned: 0.30 } },
    fox_folk: { name: 'Fox', color: '#e65100', icon: '🦊', description: 'Cunning canids.', favored_guild_tag: 'covert', religion_breakdown: { jester_cult: 0.40, unaligned: 0.60 } },
    lion_folk: { name: 'Lion', color: '#fbc02d', icon: '🦁', description: 'Proud felines.', favored_guild_tag: 'political', religion_breakdown: { lunar_cycle: 0.60, unaligned: 0.40 } },
    sloth_folk: { name: 'Sloth', color: '#8d6e63', icon: '🦥', description: 'Slow thinkers.', favored_guild_tag: 'bureaucratic', religion_breakdown: { unaligned: 1.0 } },
    bear_folk: { name: 'Bear', color: '#3e2723', icon: '🐻', description: 'Strong omnivores.', favored_guild_tag: 'military', religion_breakdown: { lunar_cycle: 0.70, great_waaagh: 0.10, unaligned: 0.20 } },

    // ========================================================================
    // THE EDGE REGIONS
    // ========================================================================
    null_texture: { name: 'Null Texture', color: '#ff00ff', icon: '🔲', description: 'Missing visual data.', favored_guild_tag: 'digital', religion_breakdown: { void_nihilism: 1.0 } },
    wireframe_husk: { name: 'Wireframe', color: '#00ff00', icon: '🕸️', description: 'Geometry creatures.', favored_guild_tag: 'industrial', religion_breakdown: { digital_ascension: 1.0 } },
    
    // ========================================================================
    // CONNECTOPIA
    // ========================================================================
    block_folk: { name: 'Block Folk', color: '#795548', icon: '🟦', description: 'Pixelated humanoids.', favored_guild_tag: 'industrial', religion_breakdown: { cog_gospel: 0.50, unaligned: 0.50 } },
    creeper_kind: { name: 'Exploder', color: '#43a047', icon: '🟩', description: 'Exploding creatures.', favored_guild_tag: 'military', religion_breakdown: { jester_cult: 0.80, void_nihilism: 0.20 } },
    ender_kind: { name: 'Void Walker', color: '#311b92', icon: '👁️', description: 'Teleporting figures.', favored_guild_tag: 'arcane', religion_breakdown: { void_nihilism: 0.90, unaligned: 0.10 } },

    // ========================================================================
    // EARTH LAND
    // ========================================================================
    earth_land_mage: { name: 'Mage', color: '#f4a261', icon: '🔥', description: 'Magic wielding humans.', favored_guild_tag: 'arcane', religion_breakdown: { star_spirits: 0.40, lunar_cycle: 0.20, jester_cult: 0.10, unaligned: 0.30 } },
    exceed: { name: 'Exceed', color: '#90caf9', icon: '😺', description: 'Winged cats.', favored_guild_tag: 'maritime', religion_breakdown: { star_spirits: 0.80, unaligned: 0.20 } },
    celestial_spirit: { name: 'Celestial Spirit', color: '#ffd700', icon: '🔑', description: 'Summoned beings.', favored_guild_tag: 'arcane', religion_breakdown: { celestial_spirit_cult: 1.0 } }, 
    vulcan: { name: 'Vulcan', color: '#f44336', icon: '🦍', description: 'Monstrous apes.', favored_guild_tag: 'military', religion_breakdown: { great_waaagh: 0.70, unaligned: 0.30 } },
    
    // ========================================================================
    // FAERUN
    // ========================================================================
    faerun_human: { name: 'Human (Realms)', color: '#cdb4db', icon: '🧑‍🤝‍🧑', description: 'Adaptable humans.', favored_guild_tag: 'political', religion_breakdown: { sanctum_of_light: 0.40, star_spirits: 0.30, unaligned: 0.30 } },
    faerun_elf: { name: 'Elf (Realms)', color: '#bde0fe', icon: '🧝‍♀️', description: 'Magical beings.', favored_guild_tag: 'arcane', religion_breakdown: { star_spirits: 0.70, lunar_cycle: 0.20, unaligned: 0.10 } },
    faerun_dwarf: { name: 'Dwarf (Realms)', color: '#607d8b', icon: '⛏️', description: 'Stout warriors.', favored_guild_tag: 'mining', religion_breakdown: { cog_gospel: 0.80, silver_flame_faith: 0.10, unaligned: 0.10 } },
    faerun_halfling: { name: 'Halfling (Realms)', color: '#ffcc80', icon: '🍞', description: 'Lucky folk.', favored_guild_tag: 'agricultural', religion_breakdown: { star_spirits: 0.60, unaligned: 0.40 } },
    faerun_gnome: { name: 'Gnome (Realms)', color: '#ba68c8', icon: '⚙️', description: 'Inventive folk.', favored_guild_tag: 'industrial', religion_breakdown: { cog_gospel: 0.50, jester_cult: 0.30, unaligned: 0.20 } },
    faerun_tiefling: { name: 'Tiefling (Realms)', color: '#ff5252', icon: '😈', description: 'Infernal blood.', favored_guild_tag: 'arcane', religion_breakdown: { void_nihilism: 0.40, jester_cult: 0.30, unaligned: 0.30 } },
    faerun_dragonborn: { name: 'Dragonborn (Realms)', color: '#d4af37', icon: '🐲', description: 'Draconic warriors.', favored_guild_tag: 'military', religion_breakdown: { arceus_mythos: 0.50, silver_flame_faith: 0.30, unaligned: 0.20 } },
    faerun_drow: { name: 'Drow (Realms)', color: '#212121', icon: '🕷️', description: 'Dark elves.', favored_guild_tag: 'covert', religion_breakdown: { sanguine_path: 0.50, void_nihilism: 0.40, unaligned: 0.10 } },
    faerun_genasi: { name: 'Genasi', color: '#00bcd4', icon: '🔥', description: 'Elemental blood.', favored_guild_tag: 'arcane', religion_breakdown: { lunar_cycle: 0.40, star_spirits: 0.30, unaligned: 0.30 } },
    faerun_aasimar: { name: 'Aasimar', color: '#e0f7fa', icon: '👼', description: 'Celestial blood.', favored_guild_tag: 'political', religion_breakdown: { silver_flame_faith: 0.80, star_spirits: 0.20 } },
    faerun_tortle: { name: 'Tortle', color: '#558b2f', icon: '🐢', description: 'Tortoise folk.', favored_guild_tag: 'maritime', religion_breakdown: { star_spirits: 0.50, unaligned: 0.50 } },
    faerun_firbolg: { name: 'Firbolg', color: '#a1887f', icon: '🌲', description: 'Forest giants.', favored_guild_tag: 'nature', religion_breakdown: { lunar_cycle: 0.70, unaligned: 0.30 } },
    faerun_goliath: { name: 'Goliath', color: '#90a4ae', icon: '🏔️', description: 'Mountain folk.', favored_guild_tag: 'mining', religion_breakdown: { great_waaagh: 0.40, lunar_cycle: 0.30, unaligned: 0.30 } },

    // ========================================================================
    // L'ECLAIRE ISLE
    // ========================================================================
    dough_glazed: { name: 'Dough Folk (Glazed)', color: '#f4d35e', icon: '🍩', description: 'The ruling class of sweet, shiny inhabitants.', favored_guild_tag: 'bureaucratic', religion_breakdown: { jester_cult: 0.50, star_spirits: 0.20, unaligned: 0.30 } },
    dough_cake: { name: 'Dough Folk (Cake)', color: '#8d6e63', icon: '🍰', description: 'Dense, hardy folk.', favored_guild_tag: 'industrial', religion_breakdown: { cog_gospel: 0.40, jester_cult: 0.30, unaligned: 0.30 } },
    dough_jelly: { name: 'Dough Folk (Jelly)', color: '#e91e63', icon: '🍓', description: 'Volatile and energetic.', favored_guild_tag: 'medical', religion_breakdown: { jester_cult: 0.60, unaligned: 0.40 } },
    dough_cruller: { name: 'Dough Folk (Cruller)', color: '#d7ccc8', icon: '🥨', description: 'Twisted, complex thinkers.', favored_guild_tag: 'political', religion_breakdown: { star_spirits: 0.40, void_nihilism: 0.20, unaligned: 0.40 } },
    dough_croissant: { name: 'Pastry-Kin (Croissant)', color: '#ffecb3', icon: '🥐', description: 'Flaky aristocrats.', favored_guild_tag: 'political', religion_breakdown: { star_spirits: 0.50, jester_cult: 0.20, unaligned: 0.30 } },
    frosting_slime: { name: 'Frosting Slime', color: '#f06292', icon: '🧁', description: 'Sugar blobs.', favored_guild_tag: 'medical', religion_breakdown: { jester_cult: 0.80, unaligned: 0.20 } },
    candy_construct: { name: 'Candy Golem', color: '#e91e63', icon: '🍭', description: 'Hard candy guards.', favored_guild_tag: 'military', religion_breakdown: { cog_gospel: 0.90, unaligned: 0.10 } },

    // ========================================================================
    // TEYVAT (Additional)
    // ========================================================================
    teyvat_human: { name: 'Human (Teyvat)', color: '#ffca3a', icon: '⚖️', description: 'The primary populace of the seven nations.', favored_guild_tag: 'political', religion_breakdown: { arceus_mythos: 0.70, star_spirits: 0.20, unaligned: 0.10 } },
    hilichurl: { name: 'Hilichurl', color: '#5d4037', icon: '🎭', description: 'Tribal monsters.', favored_guild_tag: 'scavenger', religion_breakdown: { great_waaagh: 0.50, void_nihilism: 0.30, unaligned: 0.20 } },
    adeptus: { name: 'Adeptus', color: '#00bfa5', icon: '🐉', description: 'Illuminated beasts.', favored_guild_tag: 'arcane', religion_breakdown: { arceus_mythos: 0.80, lunar_cycle: 0.20 } },
    fontainian: { name: 'Fontainian', color: '#42a5f5', icon: '💧', description: 'Water-born humans.', favored_guild_tag: 'bureaucratic', religion_breakdown: { arceus_mythos: 0.60, star_spirits: 0.30, unaligned: 0.10 } },
    melusine: { name: 'Melusine', color: '#f48fb1', icon: '🐌', description: 'Small aquatic beings.', favored_guild_tag: 'medical', religion_breakdown: { star_spirits: 0.70, arceus_mythos: 0.20, unaligned: 0.10 } },
    youkai_inazuma: { name: 'Youkai', color: '#ab47bc', icon: '👺', description: 'Supernatural beings.', favored_guild_tag: 'arcane', religion_breakdown: { lunar_cycle: 0.50, arceus_mythos: 0.30, unaligned: 0.20 } },
    abyss_mage: { name: 'Abyss Mage', color: '#6200ea', icon: '🧙‍♂️', description: 'Corrupted beings.', favored_guild_tag: 'arcane', religion_breakdown: { void_nihilism: 0.90, jester_cult: 0.10 } },
    
    // ========================================================================
    // EQUESTRIA (Additional)
    // ========================================================================
    earth_pony: { name: 'Earth Pony', color: '#8d6e63', icon: '🐴', description: 'Strong, dependable ponies.', favored_guild_tag: 'agricultural', religion_breakdown: { celestia_divinity: 0.80, lunar_cycle: 0.10, unaligned: 0.10 } },
    pegasus: { name: 'Pegasus', color: '#4fc3f7', icon: '🪽', description: 'Winged ponies.', favored_guild_tag: 'military', religion_breakdown: { celestia_divinity: 0.70, star_spirits: 0.20, unaligned: 0.10 } },
    unicorn: { name: 'Unicorn', color: '#e1bee7', icon: '🦄', description: 'Magic-wielding ponies.', favored_guild_tag: 'arcane', religion_breakdown: { celestia_divinity: 0.85, arceus_mythos: 0.05, unaligned: 0.10 } },
    crystal_pony: { name: 'Crystal Pony', color: '#e0f7fa', icon: '💎', description: 'Crystal empire ponies.', favored_guild_tag: 'political', religion_breakdown: { arceus_mythos: 0.70, star_spirits: 0.30 } },
    bat_pony: { name: 'Thestral', color: '#424242', icon: '🦇', description: 'Bat-winged ponies.', favored_guild_tag: 'covert', religion_breakdown: { lunar_cycle: 0.70, sanguine_path: 0.10, unaligned: 0.20 } },
    changeling_reformed: { name: 'Changeling (Reformed)', color: '#81c784', icon: '🦟', description: 'Metamorphosing creatures.', favored_guild_tag: 'covert', religion_breakdown: { star_spirits: 0.90, unaligned: 0.10 } },
    kirin: { name: 'Kirin', color: '#ffcc80', icon: '🔥', description: 'Draconic ponies.', favored_guild_tag: 'arcane', religion_breakdown: { arceus_mythos: 0.50, lunar_cycle: 0.40, unaligned: 0.10 } },
    griffon: { name: 'Griffon', color: '#ffca28', icon: '🦅', description: 'Eagle-lion hybrids.', favored_guild_tag: 'military', religion_breakdown: { great_waaagh: 0.40, unaligned: 0.60 } },
    yak: { name: 'Yak', color: '#5d4037', icon: '🐂', description: 'Powerful bovines.', favored_guild_tag: 'military', religion_breakdown: { great_waaagh: 0.60, lunar_cycle: 0.30, unaligned: 0.10 } },
};

export const REGIONAL_DEMOGRAPHICS = {
    "Mushroom Kingdom Regions": { toad_citizen: 0.7, goomba: 0.1, koopa: 0.1, shy_guy: 0.05, yoshi: 0.05 },
    "Islands & Outer Realms": { pianta: 0.4, noki: 0.3, toad_citizen: 0.1, koopa: 0.1, yoshi: 0.1 },
    "The Midlands": { regal_midlander: 0.6, moonfang_werewolf: 0.1, elder_vampire: 0.05, midlands_orc: 0.1, midlands_goblin: 0.1, rakasha_hunter: 0.05 },
    "The Internet": { netizen: 0.7, spam_bot: 0.1, living_meme: 0.1, virus_entity: 0.05, moderator_construct: 0.05 },
    "Middle-earth": { gondorian: 0.3, rohirrim: 0.2, middle_earth_elf: 0.1, middle_earth_dwarf: 0.1, mordor_orc: 0.2, hobbit: 0.1 },
    "The Fated Place": { warhammer_human: 0.4, warhammer_orc: 0.2, warhammer_dwarf: 0.1, skaven: 0.1, beastman: 0.1, warhammer_elf: 0.1 },
    "Kivotos": { kivotos_human: 0.6, kivotos_angel: 0.1, kivotos_demon: 0.1, kivotos_beastkin: 0.1, kivotos_robot: 0.1 },
    "The Doughnut Hole": { void_entity: 0.2, cosmic_entity: 0.2, fractal_being: 0.2, time_echo: 0.2, logic_crystal: 0.2 },
    "Pokémon Regions": { pokemon_human: 0.9, normal_pokemon: 0.01, water_pokemon: 0.01, fire_pokemon: 0.01, grass_pokemon: 0.01, electric_pokemon: 0.01, psychic_pokemon: 0.01, dark_pokemon: 0.01, fighting_pokemon: 0.01, steel_pokemon: 0.01 },
    "The Edge Regions": { void_entity: 0.5, null_texture: 0.3, wireframe_husk: 0.2 },
    "Animatopia": { rabbit_folk: 0.2, sheep_folk: 0.2, fox_folk: 0.1, lion_folk: 0.1, sloth_folk: 0.1, bear_folk: 0.1, rakasha_hunter: 0.1, dnd_human: 0.1 },
    "Connectopia": { block_folk: 0.5, creeper_kind: 0.3, ender_kind: 0.2 },
    "Earth Land": { earth_land_mage: 0.6, exceed: 0.2, celestial_spirit: 0.1, vulcan: 0.1 },
    "Faerûn": { faerun_human: 0.4, faerun_elf: 0.2, faerun_dwarf: 0.2, faerun_halfling: 0.1, faerun_gnome: 0.1 },
    "L'Eclaire Isle": { dough_glazed: 0.3, dough_cake: 0.2, dough_jelly: 0.2, dough_cruller: 0.1, dough_croissant: 0.1, frosting_slime: 0.1 },
    "Teyvat": { teyvat_human: 0.7, hilichurl: 0.1, adeptus: 0.05, fontainian: 0.05, melusine: 0.05, youkai_inazuma: 0.05 },
    "Equestria": { earth_pony: 0.3, pegasus: 0.3, unicorn: 0.3, changeling_reformed: 0.05, griffon: 0.05 },
    "The Grand Country": { dnd_human: 0.4, dnd_dwarf_mountain: 0.3, dnd_orc: 0.1, dnd_goblin: 0.1, dnd_goliath: 0.1 }
};
