// crafting-data.js - Centralized Crafting Data & Configuration

// ============================================
// === CRAFTING CATEGORIES ===
// ============================================

export const CRAFTING_CATEGORIES = {
    SCROLLS: 'scrolls',
    POTIONS: 'potions',
    ENCHANTING: 'enchanting',
    SMITHING: 'smithing',
    ALCHEMY: 'alchemy',
    RUNECARVING: 'runecarving'
};

// ============================================
// === SPELL SCHOOLS ===
// ============================================

export const SPELL_SCHOOLS = {
    ABJURATION: { 
        id: 'abjuration',
        name: 'Abjuration', 
        icon: '🛡️', 
        color: '#60a5fa',
        description: 'Protective magic that creates barriers and negates harmful effects.'
    },
    CONJURATION: { 
        id: 'conjuration',
        name: 'Conjuration', 
        icon: '🌀', 
        color: '#a855f7',
        description: 'Magic that transports objects and creatures.'
    },
    DIVINATION: { 
        id: 'divination',
        name: 'Divination', 
        icon: '👁️', 
        color: '#38bdf8',
        description: 'Magic that reveals information and secrets.'
    },
    ENCHANTMENT: { 
        id: 'enchantment',
        name: 'Enchantment', 
        icon: '💫', 
        color: '#f472b6',
        description: 'Magic that affects the minds of others.'
    },
    EVOCATION: { 
        id: 'evocation',
        name: 'Evocation', 
        icon: '🔥', 
        color: '#ef4444',
        description: 'Magic that manipulates energy to produce effects.'
    },
    ILLUSION: { 
        id: 'illusion',
        name: 'Illusion', 
        icon: '🎭', 
        color: '#c084fc',
        description: 'Magic that deceives the senses.'
    },
    NECROMANCY: { 
        id: 'necromancy',
        name: 'Necromancy', 
        icon: '💀', 
        color: '#6b7280',
        description: 'Magic that manipulates life and death energy.'
    },
    TRANSMUTATION: { 
        id: 'transmutation',
        name: 'Transmutation', 
        icon: '⚗️', 
        color: '#22c55e',
        description: 'Magic that changes properties of creatures or objects.'
    }
};

// ============================================
// === XP CONVERSION ===
// ============================================

export const GOLD_TO_XP_RATIO = 10; // 1 gold = 10 XP

// ============================================
// === CRAFTING CONFIGURATION ===
// ============================================
export const ENCHANTING_RECIPES = {
    minor_striking: {
        id: 'minor_striking',
        name: 'Enchantment: Minor Striking',
        type: 'enchanting',
        icon: '✨',
        description: 'Imbues a weapon with +1 magical damage.',
        levelRequirement: 3,
        craftTime: 4, // hours
        wildcard: true, 

        successChance: 85,
        materials: [
            { id: 'arcane_dust', quantity: 5 },
            { id: 'runestone', quantity: 1 }
        ]
    },
        major_striking: {
        id: 'major_striking',
        name: 'Enchantment: Major Striking',
        type: 'enchanting',
        icon: '⚔️',
        description: 'Imbues a weapon with +2 magical damage.',
        levelRequirement: 7,
        craftTime: 8, // hours
        wildcard: true,
        successChance: 75,
        materials: [
            { id: 'arcane_dust', quantity: 10 },
            { id: 'runestone', quantity: 2 },
            { id: 'gemstone_ruby', quantity: 1 }
        ]
    },

    flaming_weapon: {
        id: 'flaming_weapon',
        name: 'Enchantment: Flaming',
        type: 'enchanting',
        icon: '🔥',
        description: 'Weapon deals an extra 1d4 fire damage on hit.',
        levelRequirement: 5,
        craftTime: 6,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'arcane_dust', quantity: 6 },
            { id: 'fire_essence', quantity: 2 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    frost_weapon: {
        id: 'frost_weapon',
        name: 'Enchantment: Frost',
        type: 'enchanting',
        icon: '❄️',
        description: 'Weapon deals an extra 1d4 cold damage on hit.',
        levelRequirement: 5,
        craftTime: 6,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'arcane_dust', quantity: 6 },
            { id: 'frost_essence', quantity: 2 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    shocking_weapon: {
        id: 'shocking_weapon',
        name: 'Enchantment: Shocking',
        type: 'enchanting',
        icon: '⚡',
        description: 'Weapon deals an extra 1d4 lightning damage on hit.',
        levelRequirement: 6,
        craftTime: 6,
        wildcard: true,
        successChance: 78,
        materials: [
            { id: 'arcane_dust', quantity: 7 },
            { id: 'storm_essence', quantity: 2 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    venomous_edge: {
        id: 'venomous_edge',
        name: 'Enchantment: Venomous Edge',
        type: 'enchanting',
        icon: '☠️',
        description: 'Once per short rest, weapon hit forces a poison save or deals extra poison damage.',
        levelRequirement: 6,
        craftTime: 6,
        wildcard: true,
        successChance: 72,
        materials: [
            { id: 'venom_sac', quantity: 3 },
            { id: 'arcane_dust', quantity: 5 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    ghost_touched: {
        id: 'ghost_touched',
        name: 'Enchantment: Ghost-Touched',
        type: 'enchanting',
        icon: '👻',
        description: 'Weapon can strike incorporeal and ethereal creatures as if they were solid.',
        levelRequirement: 8,
        craftTime: 10,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'ectoplasm', quantity: 4 },
            { id: 'arcane_dust', quantity: 8 },
            { id: 'runestone', quantity: 2 }
        ]
    },

    lifedrinker: {
        id: 'lifedrinker',
        name: 'Enchantment: Lifedrinker',
        type: 'enchanting',
        icon: '🩸',
        description: 'On a critical hit, the wielder regains 1d4 HP.',
        levelRequirement: 9,
        craftTime: 10,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'bloodstone', quantity: 2 },
            { id: 'arcane_dust', quantity: 10 },
            { id: 'runestone', quantity: 2 }
        ]
    },

    banishing_weapon: {
        id: 'banishing_weapon',
        name: 'Enchantment: Banishing',
        type: 'enchanting',
        icon: '🌌',
        description: 'On a critical hit vs extraplanar creatures, forces a banishment save.',
        levelRequirement: 11,
        craftTime: 14,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'astral_essence', quantity: 3 },
            { id: 'void_crystal', quantity: 1 },
            { id: 'arcane_dust', quantity: 12 }
        ]
    },

    returning_weapon: {
        id: 'returning_weapon',
        name: 'Enchantment: Returning',
        type: 'enchanting',
        icon: '🪃',
        description: 'Thrown weapon returns to the wielder’s hand after each throw.',
        levelRequirement: 4,
        craftTime: 5,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'magnetite_chunk', quantity: 2 },
            { id: 'arcane_dust', quantity: 4 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    keen_edge: {
        id: 'keen_edge',
        name: 'Enchantment: Keen Edge',
        type: 'enchanting',
        icon: '🗡️',
        description: 'Weapon’s critical hit range is increased by 1 (e.g., 20 → 19–20).',
        levelRequirement: 8,
        craftTime: 8,
        wildcard: true,
        successChance: 68,
        materials: [
            { id: 'diamond_powder', quantity: 2 },
            { id: 'arcane_dust', quantity: 8 },
            { id: 'runestone', quantity: 2 }
        ]
    },

    fortification_armor: {
        id: 'fortification_armor',
        name: 'Enchantment: Fortification',
        type: 'enchanting',
        icon: '🛡️',
        description: 'Armor grants a chance to treat incoming critical hits as normal hits.',
        levelRequirement: 9,
        craftTime: 10,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'adamantine_shard', quantity: 2 },
            { id: 'arcane_dust', quantity: 10 },
            { id: 'runestone', quantity: 2 }
        ]
    },

    fireward_armor: {
        id: 'fireward_armor',
        name: 'Enchantment: Fire Ward',
        type: 'enchanting',
        icon: '🔥',
        description: 'Armor grants resistance to fire damage.',
        levelRequirement: 7,
        craftTime: 8,
        wildcard: true,
        successChance: 72,
        materials: [
            { id: 'fire_essence', quantity: 3 },
            { id: 'arcane_dust', quantity: 7 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    frostward_armor: {
        id: 'frostward_armor',
        name: 'Enchantment: Frost Ward',
        type: 'enchanting',
        icon: '❄️',
        description: 'Armor grants resistance to cold damage.',
        levelRequirement: 7,
        craftTime: 8,
        wildcard: true,
        successChance: 72,
        materials: [
            { id: 'frost_essence', quantity: 3 },
            { id: 'arcane_dust', quantity: 7 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    spellguard_shield: {
        id: 'spellguard_shield',
        name: 'Enchantment: Spellguard',
        type: 'enchanting',
        icon: '🛡️',
        description: 'Shield grants advantage on saving throws against spells.',
        levelRequirement: 10,
        craftTime: 12,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'arcane_dust', quantity: 12 },
            { id: 'gemstone_sapphire', quantity: 1 },
            { id: 'runestone', quantity: 2 }
        ]
    },

    featherfall_cloak: {
        id: 'featherfall_cloak',
        name: 'Enchantment: Featherfall',
        type: 'enchanting',
        icon: '🪶',
        description: 'Cloak allows the wearer to fall safely as if under feather fall.',
        levelRequirement: 3,
        craftTime: 4,
        wildcard: true,
        successChance: 88,
        materials: [
            { id: 'feather_fall_rune', quantity: 1 },
            { id: 'harpy_feather', quantity: 3 },
            { id: 'arcane_dust', quantity: 3 }
        ]
    },

    waterwalking_boots: {
        id: 'waterwalking_boots',
        name: 'Enchantment: Waterwalking',
        type: 'enchanting',
        icon: '🌊',
        description: 'Boots allow the wearer to walk on the surface of water.',
        levelRequirement: 4,
        craftTime: 4,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'water_orb', quantity: 1 },
            { id: 'arcane_dust', quantity: 4 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    silent_steps_boots: {
        id: 'silent_steps_boots',
        name: 'Enchantment: Silent Steps',
        type: 'enchanting',
        icon: '👣',
        description: 'Boots grant advantage on Stealth checks made to move silently.',
        levelRequirement: 5,
        craftTime: 5,
        wildcard: true,
        successChance: 82,
        materials: [
            { id: 'silence_moss', quantity: 3 },
            { id: 'arcane_dust', quantity: 4 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    steadfast_helm: {
        id: 'steadfast_helm',
        name: 'Enchantment: Steadfast',
        type: 'enchanting',
        icon: '🪖',
        description: 'Helm grants advantage on saving throws vs fear and charm.',
        levelRequirement: 6,
        craftTime: 6,
        wildcard: true,
        successChance: 78,
        materials: [
            { id: 'iron_will_shard', quantity: 2 },
            { id: 'arcane_dust', quantity: 5 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    glamered_armor: {
        id: 'glamered_armor',
        name: 'Enchantment: Glamered',
        type: 'enchanting',
        icon: '🎭',
        description: 'Armor can appear as everyday clothing or other outfits at will.',
        levelRequirement: 5,
        craftTime: 6,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'illusion_dust', quantity: 3 },
            { id: 'arcane_dust', quantity: 5 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    thorns_armor: {
        id: 'thorns_armor',
        name: 'Enchantment: Thorns',
        type: 'enchanting',
        icon: '🌵',
        description: 'Armor deals 1d4 piercing damage to creatures that hit the wearer in melee.',
        levelRequirement: 7,
        craftTime: 7,
        wildcard: true,
        successChance: 73,
        materials: [
            { id: 'thorn_vine', quantity: 4 },
            { id: 'arcane_dust', quantity: 6 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    ring_of_focus: {
        id: 'ring_of_focus',
        name: 'Enchantment: Ring of Focus',
        type: 'enchanting',
        icon: '💍',
        description: 'Ring grants +1 to spell attack rolls or spell save DC (choose on creation).',
        levelRequirement: 8,
        craftTime: 8,
        wildcard: true,
        successChance: 68,
        materials: [
            { id: 'gemstone_emerald', quantity: 1 },
            { id: 'arcane_dust', quantity: 8 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    amulet_of_vigor: {
        id: 'amulet_of_vigor',
        name: 'Enchantment: Amulet of Vigor',
        type: 'enchanting',
        icon: '📿',
        description: 'Amulet grants +5 maximum HP.',
        levelRequirement: 4,
        craftTime: 5,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'healing_herbs', quantity: 5 },
            { id: 'arcane_dust', quantity: 4 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    ring_of_featherweight: {
        id: 'ring_of_featherweight',
        name: 'Enchantment: Featherweight',
        type: 'enchanting',
        icon: '🪙',
        description: 'Reduces carried equipment weight by half for encumbrance purposes.',
        levelRequirement: 5,
        craftTime: 6,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'lightweight_thread', quantity: 3 },
            { id: 'arcane_dust', quantity: 5 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    bag_of_sorting: {
        id: 'bag_of_sorting',
        name: 'Enchantment: Bag of Sorting',
        type: 'enchanting',
        icon: '🧳',
        description: 'Container automatically arranges contents by type and value.',
        levelRequirement: 3,
        craftTime: 4,
        wildcard: true,
        successChance: 90,
        materials: [
            { id: 'clockwork_core', quantity: 1 },
            { id: 'arcane_dust', quantity: 3 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    quiver_of_plenty: {
        id: 'quiver_of_plenty',
        name: 'Enchantment: Quiver of Plenty',
        type: 'enchanting',
        icon: '🏹',
        description: 'Quiver replenishes mundane arrows/bolts each dawn up to 20.',
        levelRequirement: 4,
        craftTime: 5,
        wildcard: true,
        successChance: 86,
        materials: [
            { id: 'woodland_sap', quantity: 2 },
            { id: 'arcane_dust', quantity: 4 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    everlight_lantern: {
        id: 'everlight_lantern',
        name: 'Enchantment: Everlight',
        type: 'enchanting',
        icon: '🏮',
        description: 'Lantern sheds bright light without fuel and cannot be extinguished by wind or rain.',
        levelRequirement: 2,
        craftTime: 3,
        wildcard: true,
        successChance: 95,
        materials: [
            { id: 'luminescent_moss', quantity: 4 },
            { id: 'arcane_dust', quantity: 2 }
        ]
    },

    boots_of_burst_speed: {
        id: 'boots_of_burst_speed',
        name: 'Enchantment: Burst Speed',
        type: 'enchanting',
        icon: '🥾',
        description: 'Boots allow the wearer to double movement speed for 1 turn, 3/day.',
        levelRequirement: 7,
        craftTime: 8,
        wildcard: true,
        successChance: 72,
        materials: [
            { id: 'quicksilver', quantity: 3 },
            { id: 'arcane_dust', quantity: 6 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    cloak_of_misdirection: {
        id: 'cloak_of_misdirection',
        name: 'Enchantment: Misdirection',
        type: 'enchanting',
        icon: '🧥',
        description: 'Cloak imposes disadvantage on ranged attacks against the wearer once per round.',
        levelRequirement: 8,
        craftTime: 9,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'illusion_dust', quantity: 4 },
            { id: 'arcane_dust', quantity: 7 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    goggles_of_starlight: {
        id: 'goggles_of_starlight',
        name: 'Enchantment: Starlight Vision',
        type: 'enchanting',
        icon: '🕶️',
        description: 'Grants darkvision 60 ft or extends existing darkvision by 30 ft.',
        levelRequirement: 4,
        craftTime: 5,
        wildcard: true,
        successChance: 88,
        materials: [
            { id: 'night_eye_gem', quantity: 2 },
            { id: 'arcane_dust', quantity: 4 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    charm_of_tongues: {
        id: 'charm_of_tongues',
        name: 'Enchantment: Charm of Tongues',
        type: 'enchanting',
        icon: '🗣️',
        description: 'Wearer can understand and be understood in any spoken language.',
        levelRequirement: 6,
        craftTime: 7,
        wildcard: true,
        successChance: 78,
        materials: [
            { id: 'eldritch_ink', quantity: 2 },
            { id: 'arcane_dust', quantity: 5 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    talking_weapon: {
        id: 'talking_weapon',
        name: 'Enchantment: Minor Sentience',
        type: 'enchanting',
        icon: '🗡️',
        description: 'Weapon gains a quirky voice and simple personality. Offers advice, often unhelpful.',
        levelRequirement: 9,
        craftTime: 12,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'echo_crystal', quantity: 2 },
            { id: 'arcane_dust', quantity: 10 },
            { id: 'runestone', quantity: 2 }
        ]
    },

    dancing_weapon: {
        id: 'dancing_weapon',
        name: 'Enchantment: Dancing',
        type: 'enchanting',
        icon: '💃',
        description: 'Once per day, weapon can fight on its own for 1 minute, hovering near the wielder.',
        levelRequirement: 11,
        craftTime: 14,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'levitation_crystal', quantity: 2 },
            { id: 'arcane_dust', quantity: 12 },
            { id: 'runestone', quantity: 2 }
        ]
    },

    melodious_armor: {
        id: 'melodious_armor',
        name: 'Enchantment: Melodious',
        type: 'enchanting',
        icon: '🎶',
        description: 'Armor plays faint background music as the wearer moves. Volume cannot be adjusted.',
        levelRequirement: 2,
        craftTime: 3,
        wildcard: true,
        successChance: 95,
        materials: [
            { id: 'music_box_gear', quantity: 1 },
            { id: 'arcane_dust', quantity: 2 }
        ]
    },

    magnetic_curse: {
        id: 'magnetic_curse',
        name: 'Enchantment: Mild Magnetism',
        type: 'enchanting',
        icon: '🧲',
        description: 'Armor subtly attracts small metal objects. Mildly annoying, rarely useful.',
        levelRequirement: 1,
        craftTime: 2,
        wildcard: true,
        successChance: 92,
        materials: [
            { id: 'magnetite_chunk', quantity: 2 },
            { id: 'arcane_dust', quantity: 1 }
        ]
    },

    squeaky_boots: {
        id: 'squeaky_boots',
        name: 'Enchantment: Squeaky Steps',
        type: 'enchanting',
        icon: '🦆',
        description: 'Boots emit a loud squeak with every step. Disadvantage on Stealth checks involving movement.',
        levelRequirement: 1,
        craftTime: 1,
        wildcard: true,
        successChance: 98,
        materials: [
            { id: 'squeaky_resin', quantity: 2 },
            { id: 'arcane_dust', quantity: 1 }
        ]
    },

    misprinted_nameplate: {
        id: 'misprinted_nameplate',
        name: 'Enchantment: Misprinted Nameplate',
        type: 'enchanting',
        icon: '🏷️',
        description: 'Item’s engraved name constantly shifts to mildly embarrassing typos.',
        levelRequirement: 1,
        craftTime: 1,
        wildcard: true,
        successChance: 95,
        materials: [
            { id: 'chaos_ink', quantity: 1 },
            { id: 'arcane_dust', quantity: 1 }
        ]
    },

    mirage_cloak: {
        id: 'mirage_cloak',
        name: 'Enchantment: Mirage',
        type: 'enchanting',
        icon: '🌫️',
        description: 'Cloak creates faint illusory duplicates, granting slight advantage to hide in crowds.',
        levelRequirement: 7,
        craftTime: 8,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'illusion_dust', quantity: 4 },
            { id: 'arcane_dust', quantity: 6 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    phase_blade: {
        id: 'phase_blade',
        name: 'Enchantment: Phase Blade',
        type: 'enchanting',
        icon: '🌌',
        description: 'Blade can pass through non-magical metal and wood once per short rest.',
        levelRequirement: 12,
        craftTime: 16,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'void_crystal', quantity: 2 },
            { id: 'adamantine_shard', quantity: 2 },
            { id: 'arcane_dust', quantity: 14 }
        ]
    },

    echoing_helm: {
        id: 'echoing_helm',
        name: 'Enchantment: Echoing Voice',
        type: 'enchanting',
        icon: '📢',
        description: 'Helm amplifies the wearer’s voice dramatically. Great for speeches, terrible for stealth.',
        levelRequirement: 2,
        craftTime: 2,
        wildcard: true,
        successChance: 94,
        materials: [
            { id: 'echo_crystal', quantity: 1 },
            { id: 'arcane_dust', quantity: 2 }
        ]
    },

    lucky_token: {
        id: 'lucky_token',
        name: 'Enchantment: Token of Luck',
        type: 'enchanting',
        icon: '🍀',
        description: 'Once per day, the wearer may reroll a failed ability check, attack roll, or saving throw.',
        levelRequirement: 9,
        craftTime: 10,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'lucky_clover', quantity: 3 },
            { id: 'fate_thread', quantity: 1 },
            { id: 'arcane_dust', quantity: 8 }
        ]
    },
    
    glowing_armor: {
        id: 'glowing_armor',
        name: 'Enchantment: Glowing',
        type: 'enchanting',
        icon: '🛡️',
        description: 'Armor sheds dim light in a 10ft radius.',
        levelRequirement: 1,
        craftTime: 2,
        wildcard: true, 
        successChance: 95,
        materials: [
            { id: 'luminescent_moss', quantity: 3 },
            { id: 'arcane_dust', quantity: 2 }
        ]
    },
  paper_cut: {
    id: 'paper_cut',
    name: 'Enchantment: Paper Cut',
    type: 'enchanting',
    icon: '📄',
    description: 'Weapon deals +1 slashing damage to creatures with 0 HP (over-kill only).',
    levelRequirement: 1,
    craftTime: 1,
    wildcard: true,
    successChance: 95,
    materials: [{ id: 'paper_shard', quantity: 5 }, { id: 'arcane_dust', quantity: 1 }]
  },
  lint_magnets: {
    id: 'lint_magnets',
    name: 'Enchantment: Lint Magnets',
    icon: '🧦',
    description: 'Socks attract pocket lint; disadvantage on Sleight of Hand to hide items.',
    levelRequirement: 1,
    craftTime: 1,
    wildcard: true,
    successChance: 90,
    materials: [{ id: 'wool_clump', quantity: 3 }, { id: 'arcane_dust', quantity: 1 }]
  },
  minor_ear_wiggle: {
    id: 'minor_ear_wiggle',
    name: 'Enchantment: Minor Ear-Wiggle',
    icon: '👂',
    description: 'Helmet allows voluntary ear wiggling. Impress children.',
    levelRequirement: 1,
    craftTime: 1,
    wildcard: true,
    successChance: 95,
    materials: [{ id: 'rubber_band', quantity: 2 }, { id: 'arcane_dust', quantity: 1 }]
  },
  always_damp: {
    id: 'always_damp',
    name: 'Enchantment: Always Damp',
    icon: '💧',
    description: 'Towel is permanently moist. Mildew smell included.',
    levelRequirement: 1,
    craftTime: 1,
    wildcard: true,
    successChance: 90,
    materials: [{ id: 'wet_sponge', quantity: 2 }, { id: 'arcane_dust', quantity: 1 }]
  },
  glitter_burst: {
    id: 'glitter_burst',
    name: 'Enchantment: Glitter Burst',
    icon: '✨',
    description: 'On hit weapon explodes glitter (5-ft radius); targets have disadvantage on next Stealth.',
    levelRequirement: 2,
    craftTime: 2,
    wildcard: true,
    successChance: 85,
    materials: [{ id: 'glitter_crystal', quantity: 3 }, { id: 'arcane_dust', quantity: 2 }]
  },

  // 6-10  MID-GRADE WEIRD
  reverse_handle: {
    id: 'reverse_handle',
    name: 'Enchantment: Reverse Handle',
    icon: '🔪',
    description: 'Weapon grip faces backward; attack rolls at disadvantage unless user succeeds DC 15 DEX check each round.',
    levelRequirement: 3,
    craftTime: 3,
    wildcard: true,
    successChance: 70,
    materials: [{ id: 'mirror_metal', quantity: 2 }, { id: 'runestone', quantity: 1 }]
  },
    auto_lace: {
      id: 'auto_lace',
      name: 'Enchantment: Auto-Lace',
      icon: '👟',
      description: 'Boots tie themselves. Takes 1 round; interrupts stealth if rushed.',
      levelRequirement: 2,
      craftTime: 2,
      wildcard: true,
      successChance: 80,
      materials: [{ id: 'cord_sprite', quantity: 2 }, { id: 'arcane_dust', quantity: 2 }]
    },
    mood_armor: {
      id: 'mood_armor',
      name: 'Enchantment: Mood Armor',
      icon: '🌈',
      description: 'Armor changes color with wearer’s emotions. Allies gain advantage on Insight vs. wearer.',
      levelRequirement: 3,
      craftTime: 3,
      wildcard: true,
      successChance: 75,
      materials: [{ id: 'chameleon_skin', quantity: 3 }, { id: 'empathy_crystal', quantity: 1 }]
    },
    burp_shield: {
      id: 'burp_shield',
      name: 'Enchantment: Burp Shield',
      icon: '🛡️',
      description: 'Shield emits loud belch when struck; foes within 5 ft make DC 12 CON save or be deafened 1 round.',
      levelRequirement: 3,
      craftTime: 3,
      wildcard: true,
      successChance: 80,
      materials: [{ id: 'yeast_spore', quantity: 4 }, { id: 'arcane_dust', quantity: 3 }]
    },
    recursive_mirror: {
      id: 'recursive_mirror',
      name: 'Enchantment: Recursive Mirror',
      icon: '🪞',
      description: 'Shield reflects user’s own image infinitely; user has disadvantage on saves vs. gaze attacks.',
      levelRequirement: 4,
      craftTime: 4,
      wildcard: true,
      successChance: 65,
      materials: [{ id: 'mirror_metal', quantity: 3 }, { id: 'void_crystal', quantity: 1 }]
    },

  // 11-15  CURSED / HIGH-RISK
  blood_pact_blade: {
    id: 'blood_pact_blade',
    name: 'Enchantment: Blood Pact Blade',
    icon: '🩸',
    description: 'Weapon deals +2d6 damage but user takes half that much recoil.',
    levelRequirement: 6,
    craftTime: 6,
    wildcard: true,
    successChance: 55,
    materials: [{ id: 'vampire_ichor', quantity: 2 }, { id: 'soul_gem', quantity: 1 }]
  },
  entropy_plate: {
    id: 'entropy_plate',
    name: 'Enchantment: Entropy Plate',
    icon: '♠️',
    description: 'Armor grants +2 AC but halves all healing received.',
    levelRequirement: 7,
    craftTime: 7,
    wildcard: true,
    successChance: 50,
    materials: [{ id: 'chaos_essence', quantity: 3 }, { id: 'runestone', quantity: 2 }]
  },
  gamble_greaves: {
    id: 'gamble_greaves',
    name: 'Enchantment: Gamble Greaves',
    icon: '🎲',
    description: 'Each stride: 50 % speed bonus or 50 % fall prone. Roll 1d2.',
    levelRequirement: 5,
    craftTime: 5,
    wildcard: true,
    successChance: 45,
    materials: [{ id: 'chaos_essence', quantity: 2 }, { id: 'hare_fur', quantity: 2 }]
  },
  rust_lover: {
    id: 'rust_lover',
    name: 'Enchantment: Rust Lover',
    icon: '🪓',
    description: 'Weapon gains +1d6 vs. metal foes but itself rusts: −1 to hit cumulatively each hit (permanent).',
    levelRequirement: 6,
    craftTime: 6,
    wildcard: true,
    successChance: 50,
    materials: [{ id: 'salt_water', quantity: 5 }, { id: 'iron_shavings', quantity: 2 }]
  },
  soul_snare_ring: {
    id: 'soul_snare_ring',
    name: 'Enchantment: Soul Snare Ring',
    icon: '💍',
    description: 'Killing blow traps soul in gem (DM control). Each dawn DC 18 CHA save or alignment shifts one step toward evil.',
    levelRequirement: 9,
    craftTime: 9,
    wildcard: true,
    successChance: 35,
    materials: [{ id: 'soul_gem', quantity: 3 }, { id: 'black_onyx_powder', quantity: 2 }]
  },

  // 16-20  ELEMENTAL TWISTS
  steam_step_boots: {
    id: 'steam_step_boots',
    name: 'Enchantment: Steam Step',
    icon: '💨',
    description: 'Leave 5-ft steam cloud (lightly obscured) each move; disperses after 1 round.',
    levelRequirement: 4,
    craftTime: 4,
    wildcard: true,
    successChance: 75,
    materials: [{ id: 'boiling_stone', quantity: 2 }, { id: 'spring_water', quantity: 2 }]
  },
  obsidian_edge: {
    id: 'obsidian_edge',
    name: 'Enchantment: Obsidian Edge',
    icon: '🌋',
    description: 'Weapon crits on 19-20 vs. creatures with shield or armor, but shatters on nat 1 (destroyed).',
    levelRequirement: 5,
    craftTime: 5,
    wildcard: true,
    successChance: 60,
    materials: [{ id: 'obsidian_dust', quantity: 4 }, { id: 'runestone', quantity: 1 }]
  },
  magnet_pulse_gauntlets: {
    id: 'magnet_pulse_gauntlets',
    name: 'Enchantment: Magnet Pulse',
    icon: '🧲',
    description: 'Once per short rest pull metal weapon 10 ft (STR contest). User drops own metal items on fail.',
    levelRequirement: 5,
    craftTime: 5,
    wildcard: true,
    successChance: 65,
    materials: [{ id: 'lodestone', quantity: 3 }, { id: 'copper_coil', quantity: 2 }]
  },
  crystal_echo_staff: {
    id: 'crystal_echo_staff',
    name: 'Enchantment: Crystal Echo',
    icon: '🔮',
    description: 'Spells cast through staff repeat at 50 % power next round (targets same area). Uncontrolled.',
    levelRequirement: 7,
    craftTime: 7,
    wildcard: true,
    successChance: 55,
    materials: [{ id: 'echo_crystal', quantity: 2 }, { id: 'arcane_crystal', quantity: 2 }]
  },
  mud_shell_armor: {
    id: 'mud_shell_armor',
    name: 'Enchantment: Mud Shell',
    icon: '🟫',
    description: 'Armor grants +2 AC while stationary; halves speed while moving. Washes off in rain.',
    levelRequirement: 3,
    craftTime: 3,
    wildcard: true,
    successChance: 80,
    materials: [{ id: 'earth_essence', quantity: 3 }, { id: 'wet_sponge', quantity: 2 }]
  },

  // 21-25  SUMMON / PET
  squeaky_minion: {
    id: 'squeaky_minion',
    name: 'Enchantment: Squeaky Minion',
    icon: '🐁',
    description: 'Toy mouse animates (tiny construct, 1 HP). Squeaks when enemies near. Dies in one hit.',
    levelRequirement: 2,
    craftTime: 2,
    wildcard: true,
    successChance: 85,
    materials: [{ id: 'clockwork_gear', quantity: 2 }, { id: 'mouse_fur', quantity: 1 }]
  },
  pocket_spider: {
    id: 'pocket_spider',
    name: 'Enchantment: Pocket Spider',
    icon: '🕷️',
    description: 'Produces harmless spider once per day. Spider obeys simple commands (no combat).',
    levelRequirement: 3,
    craftTime: 3,
    wildcard: true,
    successChance: 80,
    materials: [{ id: 'spider_silk', quantity: 3 }, { id: 'miniature_cage', quantity: 1 }]
  },
  parrot_perch_helm: {
    id: 'parrot_perch_helm',
    name: 'Enchantment: Parrot Perch Helm',
    icon: '🦜',
    description: 'Helmet sprouts perch; spectral parrot repeats last phrase spoken. Vanishes if insulted.',
    levelRequirement: 4,
    craftTime: 4,
    wildcard: true,
    successChance: 75,
    materials: [{ id: 'feather', quantity: 4 }, { id: 'echo_crystal', quantity: 1 }]
  },
  fetch_disc: {
    id: 'fetch_disc',
    name: 'Enchantment: Fetch Disc',
    icon: '🥏',
    description: 'Throwing disc returns automatically; 50 % chance to hit thrower instead.',
    levelRequirement: 3,
    craftTime: 3,
    wildcard: true,
    successChance: 65,
    materials: [{ id: 'rubber_band', quantity: 2 }, { id: 'boomerang_wood', quantity: 1 }]
  },
  emotional_support_slime: {
    id: 'emotional_support_slime',
    name: 'Enchantment: Emotional-Support Slime',
    icon: '🟢',
    description: 'Small slime lives in jar. Grants +1 to saves vs. fear while held. Cries when lonely.',
    levelRequirement: 3,
    craftTime: 3,
    wildcard: true,
    successChance: 80,
    materials: [{ id: 'slime_goo', quantity: 3 }, { id: 'comfort_blanket', quantity: 1 }]
  },

  // 26-30  ULTRA-HIGH-COST / OP (low success)
  time_slice_blade: {
    id: 'time_slice_blade',
    name: 'Enchantment: Time Slice',
    icon: '⏳',
    description: 'Once per long rest weapon deletes target from timeline for 1 round (CHA save DC 20). On fail user ages 1d10 years.',
    levelRequirement: 15,
    craftTime: 12,
    wildcard: true,
    successChance: 25,
    materials: [{ id: 'chronal_crystal', quantity: 3 }, { id: 'soul_gem', quantity: 2 }, { id: 'void_crystal', quantity: 1 }]
  },
  divine_petition_plate: {
    id: 'divine_petition_plate',
    name: 'Enchantment: Divine Petition',
    icon: '🙏',
    description: 'Armor allows 1 wish/year. Each use: 10 % chance deity claims user’s soul (no save).',
    levelRequirement: 17,
    craftTime: 14,
    wildcard: true,
    successChance: 20,
    materials: [{ id: 'angelic_feather', quantity: 3 }, { id: 'star_metal', quantity: 5 }, { id: 'soul_gem', quantity: 3 }]
  },
  blackhole_quiver: {
    id: 'blackhole_quiver',
    name: 'Enchantment: Blackhole Quiver',
    icon: '🕳️',
    description: 'Arrows create 5-ft-radius micro-singularity (pull 15 ft, 4d6 force, DC 18). Destroys arrows. 1/day.',
    levelRequirement: 14,
    craftTime: 11,
    wildcard: true,
    successChance: 30,
    materials: [{ id: 'void_crystal', quantity: 3 }, { id: 'gravity_stone', quantity: 2 }, { id: 'soul_gem', quantity: 1 }]
  },
  infinity_pouch: {
    id: 'infinity_pouch',
    name: 'Enchantment: Infinity Pouch',
    icon: '🌌',
    description: 'Holds 1000 lbs, 500 cu ft. 1 % chance per use to lose item in astral void forever.',
    levelRequirement: 13,
    craftTime: 10,
    wildcard: true,
    successChance: 35,
    materials: [{ id: 'astral_silk', quantity: 4 }, { id: 'pocket_dimension_seed', quantity: 1 }, { id: 'void_crystal', quantity: 2 }]
  },
  phoenix_core_staff: {
    id: 'phoenix_core_staff',
    name: 'Enchantment: Phoenix Core',
    icon: '🔥',
    description: 'Spells deal +2d6 fire and caster auto-resurrects 1/day at 1 HP (staff destroyed).',
    levelRequirement: 16,
    craftTime: 13,
    wildcard: true,
    successChance: 30,
    materials: [{ id: 'phoenix_feather', quantity: 3 }, { id: 'star_metal', quantity: 3 }, { id: 'soul_gem', quantity: 2 }]
  },

  // 31-35  CURSED / TRICK
  bait_helm: {
    id: 'bait_helm',
    name: 'Enchantment: Bait Helm',
    icon: '🎣',
    description: 'Helmet smells delicious; predators have advantage on attacks vs. wearer.',
    levelRequirement: 2,
    craftTime: 2,
    wildcard: true,
    successChance: 85,
    materials: [{ id: 'fish_oil', quantity: 4 }, { id: 'arcane_dust', quantity: 2 }]
  },
  klepto_gloves: {
    id: 'klepto_gloves',
    name: 'Enchantment: Klepto Gloves',
    icon: '🖐️',
    description: 'Advantage on Sleight of Hand, but must steal something valuable each dawn or gloves steal from owner.',
    levelRequirement: 5,
    craftTime: 5,
    wildcard: true,
    successChance: 60,
    materials: [{ id: 'magpie_feather', quantity: 3 }, { id: 'greed_gem', quantity: 1 }]
  },
  loud_snore_mail: {
    id: 'loud_snore_mail',
    name: 'Enchantment: Loud Snore Mail',
    icon: '😴',
    description: 'Armor produces 90 dB snores when wearer sleeps. Party surprise impossible.',
    levelRequirement: 3,
    craftTime: 3,
    wildcard: true,
    successChance: 80,
    materials: [{ id: 'snore_cone', quantity: 2 }, { id: 'arcane_dust', quantity: 3 }]
  },
  procrastination_quill: {
    id: 'procrastination_quill',
    name: 'Enchantment: Procrastination Quill',
    icon: '🪶',
    description: 'Writing takes 10× time; user must succeed DC 15 WIS save to finish any written task.',
    levelRequirement: 2,
    craftTime: 2,
    wildcard: true,
    successChance: 75,
    materials: [{ id: 'slow_ink', quantity: 2 }, { id: 'arcane_dust', quantity: 2 }]
  },
  inversion_cape: {
    id: 'inversion_cape',
    name: 'Enchantment: Inversion Cape',
    icon: '🧥',
    description: 'Cape inverts cardinal directions for wearer; Navigation checks at disadvantage.',
    levelRequirement: 3,
    craftTime: 3,
    wildcard: true,
    successChance: 70,
    materials: [{ id: 'mirror_metal', quantity: 2 }, { id: 'compass_needle', quantity: 1 }]
  },

  // 36-40  SILLY / HOLIDAY / META
  holiday_jingles: {
    id: 'holiday_jingles',
    name: 'Enchantment: Holiday Jingles',
    icon: '🔔',
    description: 'Boots play random carols each step. Volume increases in stealth.',
    levelRequirement: 1,
    craftTime: 1,
    wildcard: true,
    successChance: 90,
    materials: [{ id: 'silver_bell', quantity: 6 }, { id: 'arcane_dust', quantity: 1 }]
  },
  loading_screen_bracers: {
    id: 'loading_screen_bracers',
    name: 'Enchantment: Loading Screen',
    icon: '⏳',
    description: 'Once per day user freezes in T-pose for 3 rounds (stunned) while “loading” buff: +5 to next attack roll.',
    levelRequirement: 4,
    craftTime: 4,
    wildcard: true,
    successChance: 65,
    materials: [{ id: 'hourglass_sand', quantity: 2 }, { id: 'pixel_dust', quantity: 2 }]
  },
  fourth_wall_hammer: {
    id: 'fourth_wall_hammer',
    name: 'Enchantment: Fourth-Wall Hammer',
    icon: '🎬',
    description: 'On nat 20 user addresses camera, granting inspiration to allies (DM gives token). On nat 1 user insults DM and suffers −2 to all rolls until apology.',
    levelRequirement: 6,
    craftTime: 6,
    wildcard: true,
    successChance: 55,
    materials: [{ id: 'script_shard', quantity: 3 }, { id: 'chaos_essence', quantity: 2 }]
  },
  unsubscribe_cloak: {
    id: 'unsubscribe_cloak',
    name: 'Enchantment: Unsubscribe Cloak',
    icon: '📬',
    description: 'Once per long rest wearer may “unsubscribe” from one spell effect (automatically ends on them). Cloak then spams magical junk mail for 1 minute (minor illusions).',
    levelRequirement: 7,
    craftTime: 7,
    wildcard: true,
    successChance: 60,
    materials: [{ id: 'spam_scroll', quantity: 4 }, { id: 'illusion_powder', quantity: 2 }]
  },
  potion_slot_belt: {
    id: 'potion_slot_belt',
    name: 'Enchantment: Potion-Slot Belt',
    icon: '🎰',
    description: 'Belt holds 3 potions. Drinking randomly selects one (DM chooses). 5 % chance belt eats potion and burps.',
    levelRequirement: 5,
    craftTime: 5,
    wildcard: true,
    successChance: 70,
    materials: [{ id: 'slot_machine_gear', quantity: 2 }, { id: 'goblin_cog', quantity: 2 }]
  },
    unstable_grenade: {
        id: 'unstable_grenade',
        name: 'Unstable Frag Grenade',
        type: 'bomb',
        icon: '💣',
        description: '30-ft radius explosion (4d6 fire/piercing, DEX save DC 14 half). 20% backfire chance on throw.',
        levelRequirement: 3,
        craftTime: 2,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'volatile_crystal', quantity: 1 },
            { id: 'iron_shrapnel', quantity: 5 },
            { id: 'fire_essence', quantity: 2 }
        ]
    },
    hellfire_bomb: {
        id: 'hellfire_bomb',
        name: 'Hellfire Bomb',
        type: 'bomb',
        icon: '🔥💥',
        description: '20-ft cone fire blast (6d6 fire, ignites for 1d6/turn). 30% chance to ignite crafter on failure.',
        levelRequirement: 6,
        craftTime: 4,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'infernal_coal', quantity: 3 },
            { id: 'dragon_scale', quantity: 1 },
            { id: 'volatile_crystal', quantity: 2 }
        ]
    },
    chain_reaction_mine: {
        id: 'chain_reaction_mine',
        name: 'Chain Reaction Mine',
        type: 'bomb',
        icon: '🧨',
        description: 'Triggers chain explosions in 15-ft radius (3d8 force x number of enemies). 50% chain to allies on fail.',
        levelRequirement: 8,
        craftTime: 5,
        wildcard: true,
        successChance: 40,
        materials: [
            { id: 'echo_crystal', quantity: 2 },
            { id: 'volatile_crystal', quantity: 3 },
            { id: 'runestone', quantity: 1 }
        ]
    },
    void_implosion_orb: {
        id: 'void_implosion_orb',
        name: 'Void Implosion Orb',
        type: 'bomb',
        icon: '🌌💥',
        description: 'Pulls creatures 20 ft into center (5d10 force, STR save). Failure summons void wisp (hostile).',
        levelRequirement: 12,
        craftTime: 8,
        wildcard: true,
        successChance: 30,
        materials: [
            { id: 'void_crystal', quantity: 4 },
            { id: 'soul_gem', quantity: 2 },
            { id: 'chaos_essence', quantity: 1 }
        ]
    },
    alchemists_folly: {
        id: 'alchemists_folly',
        name: "Alchemist's Folly",
        type: 'bomb',
        icon: '🧪💥',
        description: 'Random explosion: acid, fire, or poison (roll d6 for type, 4d6 dmg). 40% random on crafter.',
        levelRequirement: 4,
        craftTime: 3,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'mixed_essence', quantity: 3 },
            { id: 'volatile_crystal', quantity: 1 }
        ]
    },

    // ☠️ Cursed Gear (Power at a Price)
    bloodthirst_dagger: {
        id: 'bloodthirst_dagger',
        name: 'Bloodthirst Dagger',
        type: 'cursed_weapon',
        icon: '🗡️🩸',
        description: '+2d4 necrotic dmg, heals user. After 3 uses: cursed (vampirism, sunlight vulnerability).',
        levelRequirement: 5,
        craftTime: 6,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'vampire_ichor', quantity: 3 },
            { id: 'cursed_bone', quantity: 2 },
            { id: 'nightshade', quantity: 4 }
        ]
    },
    doom_shield: {
        id: 'doom_shield',
        name: 'Doom Shield',
        type: 'cursed_armor',
        icon: '🛡️☠️',
        description: '+2 AC, absorbs 10 dmg/turn. Curse: attracts undead (1d4 skeletons/day).',
        levelRequirement: 7,
        craftTime: 7,
        wildcard: true,
        successChance: 45,
        materials: [
            { id: 'cursed_bone', quantity: 5 },
            { id: 'black_onyx_powder', quantity: 3 },
            { id: 'soul_gem', quantity: 1 }
        ]
    },
    madness_ring: {
        id: 'madness_ring',
        name: 'Ring of Madness',
        type: 'cursed_ring',
        icon: '💍🌀',
        description: 'Advantage on INS checks. Curse: random insanity (short-term madness 1/hour).',
        levelRequirement: 9,
        craftTime: 5,
        wildcard: true,
        successChance: 40,
        materials: [
            { id: 'madcap_mushroom', quantity: 4 },
            { id: 'chaos_essence', quantity: 2 },
            { id: 'onyx_shard', quantity: 3 }
        ]
    },
    plague_bracers: {
        id: 'plague_bracers',
        name: 'Plague Bracers',
        type: 'cursed_armor',
        icon: '🧤☣️',
        description: 'Melee hits apply disease (DC 15 CON or poisoned 1 min). Curse: carrier (spread to allies).',
        levelRequirement: 10,
        craftTime: 8,
        wildcard: true,
        successChance: 35,
        materials: [
            { id: 'plague_vial', quantity: 2 },
            { id: 'rotten_flesh', quantity: 5 },
            { id: 'soul_gem', quantity: 1 }
        ]
    },
    betrayal_amulet: {
        id: 'betrayal_amulet',
        name: 'Amulet of Betrayal',
        type: 'cursed_amulet',
        icon: '📿🔪',
        description: '+3 CHA (Persuasion/Deception). Curse: 10% chance ally attacks you instead.',
        levelRequirement: 6,
        craftTime: 4,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'liars_tongue', quantity: 1 },
            { id: 'shadow_essence', quantity: 3 },
            { id: 'cursed_bone', quantity: 2 }
        ]
    },

    // 👻 Summoning Traps (Call Forth... Trouble?)
    demon_trap: {
        id: 'demon_trap',
        name: 'Demon Summoning Trap',
        type: 'trap',
        icon: '🔺',
        description: 'Trap summons quasit (hostile to all but caster). DC 16 INT (Arcana) to control.',
        levelRequirement: 8,
        craftTime: 6,
        wildcard: true,
        successChance: 45,
        materials: [
            { id: 'infernal_sigil', quantity: 2 },
            { id: 'soul_gem', quantity: 3 },
            { id: 'blood_ink', quantity: 1 }
        ]
    },
    spirit_bomb: {
        id: 'spirit_bomb',
        name: 'Spirit Bomb',
        type: 'bomb',
        icon: '👻💥',
        description: 'Releases 2d4 specters (50% friendly, 50% hostile). 8d6 necrotic in 20 ft.',
        levelRequirement: 11,
        craftTime: 9,
        wildcard: true,
        successChance: 35,
        materials: [
            { id: 'phylactery_shard', quantity: 4 },
            { id: 'void_crystal', quantity: 2 },
            { id: 'volatile_crystal', quantity: 1 }
        ]
    },
    elemental_cage: {
        id: 'elemental_cage',
        name: 'Elemental Cage Trap',
        type: 'trap',
        icon: '🔥🧊',
        description: 'Traps victim in elemental cage (random: fire/air/etc., 4d8 dmg/turn). 30% breaks free early.',
        levelRequirement: 7,
        craftTime: 5,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'mixed_essence', quantity: 5 },
            { id: 'runestone', quantity: 2 }
        ]
    },
    beast_caller_horn: {
        id: 'beast_caller_horn',
        name: 'Beast Caller Horn',
        type: 'summoner',
        icon: '📯🐺',
        description: 'Summons 1d6 beasts (CR 1/4). 40% berserk (attack nearest).',
        levelRequirement: 5,
        craftTime: 4,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'beast_horn', quantity: 1 },
            { id: 'wild_ember', quantity: 3 },
            { id: 'chaos_essence', quantity: 1 }
        ]
    },
        unstable_arcane_bomb: {
        id: 'unstable_arcane_bomb',
        name: 'Unstable Arcane Bomb',
        type: 'crafting',
        icon: '💣',
        description: 'A volatile explosive that deals 6d6 force damage in 20-ft radius. On crafting failure, explodes immediately.',
        levelRequirement: 8,
        craftTime: 4,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'volatile_crystal', quantity: 3 },
            { id: 'arcane_dust', quantity: 8 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        onFailure: "Explodes for 6d6 force damage centered on crafter. Save DC 15 DEX for half."
    },

    soulbound_curse_idol: {
        id: 'soulbound_curse_idol',
        name: 'Soulbound Curse Idol',
        type: 'crafting',
        icon: '🗿',
        description: 'Place this idol to curse an area: all within 30 ft suffer -2 to saves vs magic. If crafting fails, YOU become cursed instead.',
        levelRequirement: 10,
        craftTime: 6,
        wildcard: true,
        successChance: 40,
        materials: [
            { id: 'black_onyx_powder', quantity: 5 },
            { id: 'soul_gem', quantity: 1 },
            { id: 'cursed_bone', quantity: 3 }
        ],
        onFailure: "Crafter is permanently cursed: disadvantage on all saving throws until Remove Curse is cast."
    },

    chaos_grenade: {
        id: 'chaos_grenade',
        name: 'Chaos Grenade',
        type: 'crafting',
        icon: '🌀',
        description: 'On detonation, roll on Wild Magic Surge table. On crafting failure, surge affects the crafter immediately.',
        levelRequirement: 9,
        craftTime: 5,
        wildcard: true,
        successChance: 45,
        materials: [
            { id: 'chaos_essence', quantity: 4 },
            { id: 'wild_ember', quantity: 2 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        onFailure: "Crafter must roll on Wild Magic Surge table immediately. Effects last as normal."
    },

    // 🌀 Reality-Breaking / Unpredictable
    rift_key: {
        id: 'rift_key',
        name: 'Rift Key',
        type: 'crafting',
        icon: '🗝️🌌',
        description: 'Opens a 10-ft portal to a random plane for 1 minute. On failure, opens a permanent unstable rift nearby.',
        levelRequirement: 15,
        craftTime: 10,
        wildcard: true,
        successChance: 30,
        materials: [
            { id: 'void_crystal', quantity: 3 },
            { id: 'astral_essence', quantity: 2 },
            { id: 'chronal_crystal', quantity: 1 }
        ],
        onFailure: "A 5-ft rift to a random plane opens within 30 ft of crafter. It remains open and unstable (DM controls consequences)."
    },

    probability_dice: {
        id: 'probability_dice',
        name: 'Probability Dice',
        type: 'crafting',
        icon: '🎲',
        description: 'Once per day, replace any d20 roll with this die — but the universe balances it by cursing your next roll with disadvantage for a week.',
        levelRequirement: 12,
        craftTime: 8,
        wildcard: true,
        successChance: 35,
        materials: [
            { id: 'quantum_shard', quantity: 2 },
            { id: 'soul_gem', quantity: 2 },
            { id: 'arcane_dust', quantity: 10 }
        ],
        onFailure: "Dice fuse to crafter’s hand. They must roll with disadvantage on ALL rolls until Remove Curse or Wish is used."
    },

    echo_mirror: {
        id: 'echo_mirror',
        name: 'Echo Mirror',
        type: 'crafting',
        icon: '🪞🔁',
        description: 'Gaze into mirror to create a temporary duplicate of yourself (lasts 1 min, follows basic commands). On failure, it becomes autonomous… and hostile.',
        levelRequirement: 11,
        craftTime: 7,
        wildcard: true,
        successChance: 40,
        materials: [
            { id: 'mirror_shard', quantity: 4 },
            { id: 'soul_gem', quantity: 1 },
            { id: 'shadow_essence', quantity: 3 }
        ],
        onFailure: "Mirror spawns a hostile doppelgänger of the crafter with same stats. It seeks to replace them."
    },

    // 😈 Summoning Risks / Deals with Dark Forces
    minor_demon_pact_seal: {
        id: 'minor_demon_pact_seal',
        name: 'Minor Demon Pact Seal',
        type: 'crafting',
        icon: '👿📜',
        description: 'Grants +2 to STR and resistance to fire for 24 hours. On failure, a Quasit appears and claims your next meal… or finger.',
        levelRequirement: 7,
        craftTime: 5,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'infernal_contract', quantity: 1 },
            { id: 'blood_ink', quantity: 2 },
            { id: 'hellfire_ash', quantity: 3 }
        ],
        onFailure: "A Quasit appears, steals one non-magical item from crafter, and vanishes — but leaves a mark. Demons now sense their scent."
    },

    void_totem: {
        id: 'void_totem',
        name: 'Void Totem',
        type: 'crafting',
        icon: '🕳️',
        description: 'Place totem to gain darkvision 60 ft and resistance to psychic damage for 1 hour. On failure, attract a Void Entity that stalks you for 1d4 days.',
        levelRequirement: 10,
        craftTime: 6,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'void_crystal', quantity: 2 },
            { id: 'eldritch_bone', quantity: 3 },
            { id: 'shadow_essence', quantity: 4 }
        ],
        onFailure: "A semi-corporeal Void Entity begins stalking the crafter. Each night, it whispers madness (CON save or gain short-term madness)."
    },

    necrotic_anchor: {
        id: 'necrotic_anchor',
        name: 'Necrotic Anchor',
        type: 'crafting',
        icon: '⚓💀',
        description: 'Prevents death once: when reduced to 0 HP, stabilize at 1 HP. On failure, your soul is tethered — you rise as a Specter under DM control in 1d4 hours.',
        levelRequirement: 13,
        craftTime: 9,
        wildcard: true,
        successChance: 35,
        materials: [
            { id: 'phylactery_dust', quantity: 3 },
            { id: 'black_onyx_powder', quantity: 4 },
            { id: 'soul_gem', quantity: 2 }
        ],
        onFailure: "Upon next death, crafter rises as a Specter under DM control. Only True Resurrection or Divine Intervention can restore them."
    },

    // 🧬 Mutation / Body Horror Risks
    fleshweaver_serum: {
        id: 'fleshweaver_serum',
        name: 'Fleshweaver Serum',
        type: 'crafting',
        icon: '🧪🧬',
        description: 'Gain +2 CON and regeneration 1 HP/round for 1 hour. On failure, roll on Mutation Table (permanent unless cured).',
        levelRequirement: 9,
        craftTime: 5,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'troll_fat', quantity: 2 },
            { id: 'mutagen_vial', quantity: 1 },
            { id: 'healing_herbs', quantity: 4 }
        ],
        onFailure: "Crafter gains a random mutation (extra eye, chitinous skin, tentacle arm, etc.) — permanent without Greater Restoration or Wish."
    },

    chimeric_elixir: {
        id: 'chimeric_elixir',
        name: 'Chimeric Elixir',
        type: 'crafting',
        icon: '🦄🐍🦇',
        description: 'Gain flight (30 ft), blindsight 10 ft, and +1d6 poison damage on unarmed strikes for 10 minutes. On failure, grow mismatched limbs or features for 1d4 days.',
        levelRequirement: 11,
        craftTime: 7,
        wildcard: true,
        successChance: 45,
        materials: [
            { id: 'griffon_feather', quantity: 2 },
            { id: 'basilisk_scale', quantity: 1 },
            { id: 'vampire_ichor', quantity: 1 }
        ],
        onFailure: "Crafter grows random animal parts (wings, tail, claws, gills) for 1d4 days. Disadvantage on social checks. May have minor abilities (DM discretion)."
    },

    mindspike_implant: {
        id: 'mindspike_implant',
        name: 'Mindspike Implant',
        type: 'crafting',
        icon: '🧠⚡',
        description: 'Implant grants +2 INT and telepathy 30 ft for 24 hours. On failure, suffer psychic feedback: 3d6 damage and confusion for 1 minute.',
        levelRequirement: 10,
        craftTime: 6,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'psionic_crystal', quantity: 3 },
            { id: 'quicksilver', quantity: 2 },
            { id: 'silverleaf', quantity: 2 }
        ],
        onFailure: "Crafter takes 3d6 psychic damage and is confused (as Confusion spell) for 1 minute. 10% chance permanent reduction of 1 INT (until Greater Restoration)."
    },

    // 💣 Explosive / Area Denial Risks
    plague_smoke_bomb: {
        id: 'plague_smoke_bomb',
        name: 'Plague Smoke Bomb',
        type: 'crafting',
        icon: '☁️🤢',
        description: 'Creates a 20-ft cloud of disease-ridden fog. Creatures inside must save or gain poisoned condition. On failure, cloud centers on YOU.',
        levelRequirement: 8,
        craftTime: 4,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'plague_fungus', quantity: 4 },
            { id: 'toxic_spore', quantity: 2 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        onFailure: "Bomb detonates prematurely. Crafter and all within 20 ft must make CON save or become poisoned for 1 hour."
    },

    gravity_well_grenade: {
        id: 'gravity_well_grenade',
        name: 'Gravity Well Grenade',
        type: 'crafting',
        icon: '⚫🌀',
        description: 'Creates a 10-ft sphere of crushing gravity. All inside take 4d10 bludgeoning and are restrained. On failure, well forms around crafter.',
        levelRequirement: 12,
        craftTime: 8,
        wildcard: true,
        successChance: 40,
        materials: [
            { id: 'lodestone', quantity: 5 },
            { id: 'adamantine_shard', quantity: 2 },
            { id: 'runestone', quantity: 1 }
        ],
        onFailure: "Gravity well forms centered on crafter. They take 4d10 bludgeoning, are restrained, and must save each round to escape."
    },

    silence_burst_charge: {
        id: 'silence_burst_charge',
        name: 'Silence Burst Charge',
        type: 'crafting',
        icon: '🔇💥',
        description: 'Detonates in 15-ft radius: all creatures are silenced (can’t cast spells with verbal components) for 1 minute. On failure, only YOU are affected.',
        levelRequirement: 7,
        craftTime: 4,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'mute_stone', quantity: 3 },
            { id: 'arcane_dust', quantity: 6 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        onFailure: "Crafter is silenced for 1 hour. Cannot speak, cast spells with verbal components, or activate voice-based magic items."
    },

    // 🎲 Gambling / High Variance Items
    gamblers_token: {
        id: 'gamblers_token',
        name: 'Gambler’s Token',
        type: 'crafting',
        icon: '🎰',
        description: 'Once per day, force a reroll of any die — yours or an enemy’s. On failure, the token curses you: all rolls are replaced with 1s for 24 hours.',
        levelRequirement: 9,
        craftTime: 5,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'cursed_dice', quantity: 2 },
            { id: 'gold_dust', quantity: 5 },
            { id: 'soul_gem', quantity: 1 }
        ],
        onFailure: "Token fuses to crafter’s palm. For next 24 hours, every d20 they roll is replaced with a 1. Cannot be removed except by Remove Curse or Wish."
    },

    fate_coin: {
        id: 'fate_coin',
        name: 'Fate Coin',
        type: 'crafting',
        icon: '🪙✨',
        description: 'Flip to invoke good OR bad luck for next hour (your choice). On failure, the coin chooses FOR you — and it’s always bad.',
        levelRequirement: 8,
        craftTime: 4,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'four_leaf_clover', quantity: 3 },
            { id: 'cursed_dice', quantity: 1 },
            { id: 'silverleaf', quantity: 2 }
        ],
        onFailure: "Coin flips itself — result is ALWAYS ‘bad luck’: disadvantage on all rolls, crit fails on 1–2, random item breaks each hour."
    },

    // 👻 Haunted / Sentient Risks
    whispering_mask: {
        id: 'whispering_mask',
        name: 'Whispering Mask',
        type: 'crafting',
        icon: '🎭👻',
        description: 'Wearer gains advantage on Deception and Intimidation. On failure, mask bonds to face and whispers paranoid secrets day and night.',
        levelRequirement: 10,
        craftTime: 6,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'ghost_silk', quantity: 3 },
            { id: 'madcap_mushroom', quantity: 2 },
            { id: 'shadow_essence', quantity: 2 }
        ],
        onFailure: "Mask fuses to crafter’s face. They hear constant whispers (disadvantage on WIS saves). Mask can only be removed by Exorcism or Wish."
    },

    blood_quill: {
        id: 'blood_quill',
        name: 'Blood Quill',
        type: 'crafting',
        icon: '🪶💉',
        description: 'Writes with your own blood — no ink needed. Grants advantage on Forgery. On failure, quill becomes parasitic and drains 1 HP per page written.',
        levelRequirement: 6,
        craftTime: 3,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'raven_feather', quantity: 2 },
            { id: 'vampire_ichor', quantity: 1 },
            { id: 'bone_needle', quantity: 1 }
        ],
        onFailure: "Quill embeds in crafter’s hand. Drains 1 HP per page written. Can only be removed by Lesser Restoration or cutting it out (2d4 damage)."
    },

    // 🌑 Cosmic / Eldritch Horror Risks
    eye_of_the_void: {
        id: 'eye_of_the_void',
        name: 'Eye of the Void',
        type: 'crafting',
        icon: '👁️‍🗨️🕳️',
        description: 'Grants truesight 30 ft for 1 minute once per day. On failure, you glimpse the Void — gain indefinite madness and attract a Star Spawn in 1d4 days.',
        levelRequirement: 16,
        craftTime: 12,
        wildcard: true,
        successChance: 25,
        materials: [
            { id: 'void_heart', quantity: 1 },
            { id: 'eldritch_bone', quantity: 4 },
            { id: 'soul_gem', quantity: 3 }
        ],
        onFailure: "Crafter gains indefinite madness (DM chooses effect). A Star Spawn or Void Entity begins hunting them — arrival in 1d4 days unless protected by powerful wards."
    },

    black_star_amulet: {
        id: 'black_star_amulet',
        name: 'Black Star Amulet',
        type: 'crafting',
        icon: '⭐🌑',
        description: 'Absorbs one spell targeting you per day. On failure, amulet backfires — you must cast the absorbed spell on yourself or nearest ally.',
        levelRequirement: 14,
        craftTime: 10,
        wildcard: true,
        successChance: 35,
        materials: [
            { id: 'void_crystal', quantity: 4 },
            { id: 'star_metal', quantity: 3 },
            { id: 'soul_gem', quantity: 2 }
        ],
        onFailure: "Amulet activates uncontrollably. The next spell targeting crafter is reflected onto THEM or nearest ally (no save)."
    },

    // 🤖 Cybernetic / Tech-Gone-Wrong Risks
    overclock_core: {
        id: 'overclock_core',
        name: 'Overclock Core',
        type: 'crafting',
        icon: '⚙️🔥',
        description: 'Install to gain +10 speed and +2 INT for 1 hour. On failure, system crashes: stunned for 1d4 rounds and 2 levels of exhaustion.',
        levelRequirement: 10,
        craftTime: 6,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'battery_core', quantity: 2 },
            { id: 'data_crystal', quantity: 3 },
            { id: 'quicksilver', quantity: 2 }
        ],
        onFailure: "Core overheats. Crafter is stunned for 1d4 rounds and gains 2 levels of exhaustion. Requires 8 hours rest to recover levels."
    },

    neural_jammer: {
        id: 'neural_jammer',
        name: 'Neural Jammer',
        type: 'crafting',
        icon: '🧠📡',
        description: 'Disrupts one creature’s concentration within 30 ft (no save). On failure, jammer backfires — YOU lose concentration and take 2d6 psychic damage.',
        levelRequirement: 9,
        craftTime: 5,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'psionic_crystal', quantity: 2 },
            { id: 'battery_core', quantity: 1 },
            { id: 'copper_wire', quantity: 5 }
        ],
        onFailure: "Jammer explodes in crafter’s hand. They take 2d6 psychic damage and automatically fail next concentration check."
    },

    // 🐉 Legendary / Campaign-Threatening Risks
    dragon_soul_engine: {
        id: 'dragon_soul_engine',
        name: 'Dragon Soul Engine',
        type: 'crafting',
        icon: '🐉⚙️',
        description: 'Powers a vehicle or golem with draconic fury. Grants flight and fire breath weapon. On failure, awakens as sentient Dragon Golem that considers you its parent… or prey.',
        levelRequirement: 20,
        craftTime: 24,
        wildcard: true,
        successChance: 20,
        materials: [
            { id: 'ancient_dragon_heart', quantity: 1 },
            { id: 'adamantine_shard', quantity: 10 },
            { id: 'soul_gem', quantity: 5 },
            { id: 'void_crystal', quantity: 3 }
        ],
        onFailure: "Engine awakens as CR 15 Dragon Golem. It is confused, regards crafter as creator — but may turn violent if disrespected. Ignores all commands 50% of the time."
    },

    apocalypse_trigger: {
        id: 'apocalypse_trigger',
        name: 'Apocalypse Trigger',
        type: 'crafting',
        icon: '🌍💥',
        description: 'When activated, causes localized natural disaster (earthquake, storm, eruption). On failure, disaster triggers immediately upon crafting completion.',
        levelRequirement: 25, // Yes, over max — meant for epic campaigns
        craftTime: 48,
        wildcard: true,
        successChance: 10,
        materials: [
            { id: 'worldshard', quantity: 1 },
            { id: 'divine_shard', quantity: 3 },
            { id: 'void_heart', quantity: 2 },
            { id: 'chronal_crystal', quantity: 5 }
        ],
        onFailure: "Cataclysm occurs immediately in nearest populated area. DM chooses disaster scale. Gods may take notice. Crafting this may be considered an act of war against reality."
    },
    undead_reviver: {
        id: 'undead_reviver',
        name: 'Undead Reviver',
        type: 'summoner',
        icon: '💀🧟',
        description: 'Animates 1 corpse as zombie. 50% chance its *your* loyal zombie... or not.',
        levelRequirement: 4,
        craftTime: 3,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'rotten_flesh', quantity: 4 },
            { id: 'necromantic_ash', quantity: 2 }
        ]
    },

    // ⚙️ Unstable Gadgets & Devices (Tech Gone Wrong)
    overcharge_battery: {
        id: 'overcharge_battery',
        name: 'Overcharge Battery',
        type: 'gadget',
        icon: '🔋',
        description: 'Powers spell 2x (double dmg/range). 25% overload (2d10 lightning to user).',
        levelRequirement: 6,
        craftTime: 5,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'battery_core', quantity: 2 },
            { id: 'storm_essence', quantity: 3 },
            { id: 'volatile_crystal', quantity: 1 }
        ]
    },
    teleporter_misfire: {
        id: 'teleporter_misfire',
        name: 'Portable Teleporter (Misfire Risk)',
        type: 'gadget',
        icon: '🌀',
        description: 'Teleport 100 ft. 30% misfire (random location, 3d6 fall dmg possible).',
        levelRequirement: 9,
        craftTime: 7,
        wildcard: true,
        successChance: 40,
        materials: [
            { id: 'quicksilver', quantity: 4 },
            { id: 'void_crystal', quantity: 2 },
            { id: 'arcane_dust', quantity: 8 }
        ]
    },
    shrink_ray: {
        id: 'shrink_ray',
        name: 'Experimental Shrink Ray',
        type: 'gadget',
        icon: '🔬',
        description: 'Reduce target size (Tiny, 1 min). 20% rebounds on user.',
        levelRequirement: 7,
        craftTime: 6,
        wildcard: true,
        successChance: 45,
        materials: [
            { id: 'pixie_dust', quantity: 5 },
            { id: 'lens_crystal', quantity: 2 },
            { id: 'chaos_essence', quantity: 1 }
        ]
    },
    force_field_generator: {
        id: 'force_field_generator',
        name: 'Force Field Generator',
        type: 'gadget',
        icon: '🛡️⚡',
        description: '10-ft force dome (blocks attacks 3 rounds). 40% collapses inward (2d8 force).',
        levelRequirement: 10,
        craftTime: 8,
        wildcard: true,
        successChance: 35,
        materials: [
            { id: 'force_gem', quantity: 3 },
            { id: 'star_metal', quantity: 2 }
        ]
    },
    mind_probe: {
        id: 'mind_probe',
        name: 'Mind Probe Helmet',
        type: 'gadget',
        icon: '🧠',
        description: 'Read surface thoughts (DC 15 WIS save). 25% feedback (short-term madness).',
        levelRequirement: 8,
        craftTime: 6,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'mind_flayer_ichor', quantity: 2 },
            { id: 'crystal_lens', quantity: 3 },
            { id: 'shadow_essence', quantity: 2 }
        ]
    },

    // 🧪 Volatile Mixtures & Artifacts (Alchemical Nightmares)
    mutation_serum: {
        id: 'mutation_serum',
        name: 'Mutation Serum',
        type: 'potion_risky',
        icon: '🧪🧬',
        description: 'Gain random mutation (+2 STR *or* tentacles *or* extra eye). Roll table; 50% harmful.',
        levelRequirement: 5,
        craftTime: 4,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'warpstone_shard', quantity: 2 },
            { id: 'shapeshifter_essence', quantity: 3 },
            { id: 'moonwell_water', quantity: 1 }
        ]
    },
    time_bomb_potion: {
        id: 'time_bomb_potion',
        name: 'Time Bomb Potion',
        type: 'potion_risky',
        icon: '🧪⏳',
        description: 'Drink: age 1d10 years *or* de-age. 30% paradox (swap age with target).',
        levelRequirement: 12,
        craftTime: 10,
        wildcard: true,
        successChance: 25,
        materials: [
            { id: 'chronal_crystal', quantity: 3 },
            { id: 'soul_gem', quantity: 2 },
            { id: 'volatile_crystal', quantity: 1 }
        ]
    },
    curse_jar: {
        id: 'curse_jar',
        name: 'Curse Jar',
        type: 'artifact',
        icon: '⚱️',
        description: 'Traps curse from target. 40% curse transfers to opener.',
        levelRequirement: 9,
        craftTime: 7,
        wildcard: true,
        successChance: 40,
        materials: [
            { id: 'cursed_bone', quantity: 4 },
            { id: 'black_onyx_powder', quantity: 5 },
            { id: 'phylactery_shard', quantity: 1 }
        ]
    },
    rage_elixir: {
        id: 'rage_elixir',
        name: 'Rage Elixir',
        type: 'potion_risky',
        icon: '🧪😡',
        description: '+4 STR, frenzy attack. Ends: exhaustion lvl 3. 20% permanent rage.',
        levelRequirement: 4,
        craftTime: 3,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'rage_gem', quantity: 2 },
            { id: 'troll_fat', quantity: 3 }
        ]
    },
    soul_stealer: {
        id: 'soul_stealer',
        name: 'Soul Stealer Vial',
        type: 'artifact',
        icon: '🧪💀',
        description: 'Steals soul on kill (for necromancy). Break: releases all as ghosts.',
        levelRequirement: 13,
        craftTime: 12,
        wildcard: true,
        successChance: 20,
        materials: [
            { id: 'soul_gem', quantity: 5 },
            { id: 'phylactery_shard', quantity: 3 },
            { id: 'void_crystal', quantity: 2 }
        ]
    },

    // 🪤 Traps & Pranks Gone Wrong
    laughing_gas_trap: {
        id: 'laughing_gas_trap',
        name: 'Laughing Gas Trap',
        type: 'trap',
        icon: '😂💨',
        description: '20-ft cloud: incapacitated laughing (1 min, CON save). 25% affects whole room.',
        levelRequirement: 2,
        craftTime: 2,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'laughing_mushroom', quantity: 4 },
            { id: 'pressure_plate', quantity: 1 }
        ]
    },
    spike_pit_acid: {
        id: 'spike_pit_acid',
        name: 'Acid Spike Pit',
        type: 'trap',
        icon: '🕳️🧪',
        description: 'Fall: 3d6 piercing + 4d6 acid. 30% acid sprays back.',
        levelRequirement: 3,
        craftTime: 3,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'acid_essence', quantity: 3 },
            { id: 'iron_spike', quantity: 10 }
        ]
    },
    illusion_maze_generator: {
        id: 'illusion_maze_generator',
        name: 'Illusion Maze Generator',
        type: 'trap',
        icon: '🌀',
        description: 'Creates endless maze illusion (lost 1 hour). 40% real teleport.',
        levelRequirement: 7,
        craftTime: 5,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'illusion_powder', quantity: 5 },
            { id: 'mirror_shard', quantity: 4 }
        ]
    },
    panic_button: {
        id: 'panic_button',
        name: 'Panic Button',
        type: 'gadget',
        icon: '🚨',
        description: 'Emergency: teleport 60 ft away. 50% swaps with random enemy.',
        levelRequirement: 5,
        craftTime: 4,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'quicksilver', quantity: 3 },
            { id: 'alarm_bell', quantity: 1 },
            { id: 'void_crystal', quantity: 1 }
        ]
    },
    fake_treasure_chest: {
        id: 'fake_treasure_chest',
        name: 'Fake Treasure Chest Trap',
        type: 'trap',
        icon: '📦💀',
        description: 'Opens to mimic mouth (4d8 bite + swallow). Gold illusion.',
        levelRequirement: 4,
        craftTime: 3,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'mimic_tooth', quantity: 2 },
            { id: 'gold_foil', quantity: 5 },
            { id: 'wood_essence', quantity: 3 }
        ]
    },  
    godslayer_edge: {
        id: 'godslayer_edge',
        name: 'Enchantment: Godslayer Edge',
        type: 'enchanting',
        icon: '⚔️⚡',
        description: 'Weapon bypasses divine resistance and deals +3d10 radiant on hit to celestials/fey/undead. Once per week.',
        levelRequirement: 20,
        craftTime: 24,
        wildcard: true,
        successChance: 25, // High risk of backfire!
        materials: [
            { id: 'divine_shard', quantity: 3 },
            { id: 'void_crystal', quantity: 2 },
            { id: 'soul_gem', quantity: 5 }
        ]
    },
    chronos_belt: {
        id: 'chronos_belt',
        name: 'Enchantment: Chronos Belt',
        type: 'enchanting',
        icon: '⏳',
        description: 'Once per long rest, rewind time 6 seconds (undo one action or damage).',
        levelRequirement: 18,
        craftTime: 20,
        wildcard: true,
        successChance: 30,
        materials: [
            { id: 'chronal_crystal', quantity: 3 },
            { id: 'star_metal', quantity: 4 },
            { id: 'soul_gem', quantity: 3 }
        ]
    },
    omniscient_lens: {
        id: 'omniscient_lens',
        name: 'Enchantment: Omniscient Lens',
        type: 'enchanting',
        icon: '👁️‍🗨️',
        description: 'Glasses reveal creature stats, weaknesses, and hidden items in line of sight (3/day).',
        levelRequirement: 15,
        craftTime: 12,
        wildcard: true,
        successChance: 40,
        materials: [
            { id: 'seer_orb_shard', quantity: 4 },
            { id: 'arcane_dust', quantity: 10 },
            { id: 'soul_gem', quantity: 2 }
        ]
    },
    dragonheart_pauldrons: {
        id: 'dragonheart_pauldrons',
        name: 'Enchantment: Dragonheart Pauldrons',
        type: 'enchanting',
        icon: '🐲',
        description: 'On death, explode in 20-ft fire burst (8d6) and resurrect with 1 HP after 1 min (once ever).',
        levelRequirement: 17,
        craftTime: 18,
        wildcard: true,
        successChance: 35,
        materials: [
            { id: 'ancient_dragon_heart', quantity: 1 },
            { id: 'adamantine_shard', quantity: 5 },
            { id: 'soul_gem', quantity: 4 }
        ]
    },
    infinite_quiver: {
        id: 'infinite_quiver',
        name: 'Enchantment: Infinite Quiver',
        type: 'enchanting',
        icon: '🏹♾️',
        description: 'Never runs out of arrows. Arrows return after 1 minute if not destroyed.',
        levelRequirement: 16,
        craftTime: 15,
        wildcard: true,
        successChance: 45,
        materials: [
            { id: 'echo_crystal', quantity: 3 },
            { id: 'wood_essence', quantity: 5 },
            { id: 'soul_gem', quantity: 2 }
        ]
    },

    // 🌀 Weird Utility / Situational Magic
    anti_gravity_boots: {
        id: 'anti_gravity_boots',
        name: 'Enchantment: Anti-Gravity Boots',
        type: 'enchanting',
        icon: '🥿',
        description: 'Walk on walls/ceilings for 1 min/day. Must concentrate or fall.',
        levelRequirement: 7,
        craftTime: 6,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'levitation_powder', quantity: 3 },
            { id: 'zephyr_feather', quantity: 2 },
            { id: 'arcane_dust', quantity: 5 }
        ]
    },
    truth_mirror: {
        id: 'truth_mirror',
        name: 'Enchantment: Truth Mirror',
        type: 'enchanting',
        icon: '🪞',
        description: 'Mirror reveals true form of shapeshifters, illusions, or possessed beings when gazed into.',
        levelRequirement: 8,
        craftTime: 5,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'mirror_shard', quantity: 3 },
            { id: 'truth_serum', quantity: 2 },
            { id: 'arcane_dust', quantity: 6 }
        ]
    },
    pocket_dimension_bag: {
        id: 'pocket_dimension_bag',
        name: 'Enchantment: Pocket Dimension Bag',
        type: 'enchanting',
        icon: '🎒',
        description: 'Bag holds 10x normal capacity. Retrieving item requires DC 12 DEX check or take 1 round.',
        levelRequirement: 6,
        craftTime: 5,
        wildcard: true,
        successChance: 75,
        materials: [
            { id: 'void_crystal', quantity: 1 },
            { id: 'spider_silk', quantity: 4 },
            { id: 'arcane_dust', quantity: 5 }
        ]
    },
    language_locket: {
        id: 'language_locket',
        name: 'Enchantment: Language Locket',
        type: 'enchanting',
        icon: '🗣️',
        description: 'Grants fluency in one random language for 1 hour/day. Changes daily.',
        levelRequirement: 4,
        craftTime: 3,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'babel_stone', quantity: 1 },
            { id: 'silverleaf', quantity: 2 },
            { id: 'arcane_dust', quantity: 3 }
        ]
    },
    alarm_ward: {
        id: 'alarm_ward',
        name: 'Enchantment: Alarm Ward',
        type: 'enchanting',
        icon: '🔔',
        description: 'Item emits loud chime if touched by unauthorized creature (you define “authorized”).',
        levelRequirement: 3,
        craftTime: 2,
        wildcard: true,
        successChance: 90,
        materials: [
            { id: 'brass_bell', quantity: 2 },
            { id: 'arcane_dust', quantity: 2 }
        ]
    },

    // 😈 Cursed / Backfiring Enchantments
    vampiric_curse: {
        id: 'vampiric_curse',
        name: 'Enchantment: Vampiric Curse',
        type: 'enchanting',
        icon: '🩸',
        description: 'Heals you for damage dealt... but you must drink blood within 1 hour or suffer 2d10 necrotic.',
        levelRequirement: 9,
        craftTime: 7,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'vampire_ichor', quantity: 2 },
            { id: 'black_onyx_powder', quantity: 3 },
            { id: 'runestone', quantity: 1 }
        ]
    },
    berserker_rage: {
        id: 'berserker_rage',
        name: 'Enchantment: Berserker Rage',
        type: 'enchanting',
        icon: '😡',
        description: 'On hit, gain +2d6 damage next attack — but must attack nearest creature (friend or foe).',
        levelRequirement: 6,
        craftTime: 5,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'madcap_mushroom', quantity: 3 },
            { id: 'rage_gem', quantity: 1 },
            { id: 'arcane_dust', quantity: 5 }
        ]
    },
    gravity_flip: {
        id: 'gravity_flip',
        name: 'Enchantment: Gravity Flip',
        type: 'enchanting',
        icon: '🔄',
        description: 'On command, flip gravity in 30-ft radius for 1 round. Everyone falls upward. Save DC 15 or take 2d6.',
        levelRequirement: 10,
        craftTime: 8,
        wildcard: true,
        successChance: 45,
        materials: [
            { id: 'chaos_essence', quantity: 2 },
            { id: 'lodestone', quantity: 3 },
            { id: 'soul_gem', quantity: 1 }
        ]
    },
    mimic_touch: {
        id: 'mimic_touch',
        name: 'Enchantment: Mimic Touch',
        type: 'enchanting',
        icon: '🎭',
        description: 'Weapon transforms into random object (chair, fish, boot) on critical miss. Lasts 1 hour.',
        levelRequirement: 5,
        craftTime: 4,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'changeling_tear', quantity: 2 },
            { id: 'illusion_powder', quantity: 3 }
        ]
    },
    luck_drain: {
        id: 'luck_drain',
        name: 'Enchantment: Luck Drain',
        type: 'enchanting',
        icon: '🎲',
        description: 'Reroll any die once/day — but roll with disadvantage for next 24 hours.',
        levelRequirement: 7,
        craftTime: 6,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'cursed_dice', quantity: 1 },
            { id: 'soul_gem', quantity: 1 },
            { id: 'arcane_dust', quantity: 6 }
        ]
    },

    // 🤡 Pure Comedy / Useless / Absurd
    chicken_caller: {
        id: 'chicken_caller',
        name: 'Enchantment: Chicken Caller',
        type: 'enchanting',
        icon: '🐔',
        description: 'Blows a whistle that summons 1d4 non-hostile chickens. They follow you for 1 hour.',
        levelRequirement: 1,
        craftTime: 1,
        wildcard: true,
        successChance: 95,
        materials: [
            { id: 'chicken_feather', quantity: 5 },
            { id: 'empty_vial', quantity: 1 }
        ]
    },
    dramatic_cape: {
        id: 'dramatic_cape',
        name: 'Enchantment: Dramatic Cape',
        type: 'enchanting',
        icon: '🧥',
        description: 'Cape billows dramatically even indoors. Grants advantage on Performance checks involving flair.',
        levelRequirement: 2,
        craftTime: 2,
        wildcard: true,
        successChance: 90,
        materials: [
            { id: 'velvet_cloth', quantity: 3 },
            { id: 'wind_crystal', quantity: 1 }
        ]
    },
    sneeze_arrow: {
        id: 'sneeze_arrow',
        name: 'Enchantment: Sneeze Arrow',
        type: 'enchanting',
        icon: '🤧',
        description: 'On hit, target must sneeze loudly (no mechanical effect, but breaks stealth).',
        levelRequirement: 1,
        craftTime: 1,
        wildcard: true,
        successChance: 95,
        materials: [
            { id: 'pepper_pod', quantity: 2 },
            { id: 'arrowhead', quantity: 1 }
        ]
    },
    musical_armor: {
        id: 'musical_armor',
        name: 'Enchantment: Musical Armor',
        type: 'enchanting',
        icon: '🎵',
        description: 'Armor plays elevator music when moving. Can be turned off… but it misses you.',
        levelRequirement: 3,
        craftTime: 3,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'music_box_gear', quantity: 2 },
            { id: 'arcane_dust', quantity: 3 }
        ]
    },
    self_compliment_ring: {
        id: 'self_compliment_ring',
        name: 'Enchantment: Self-Compliment Ring',
        type: 'enchanting',
        icon: '💍✨',
        description: 'Whispers compliments to wearer every 10 minutes. “You look amazing today!”',
        levelRequirement: 1,
        craftTime: 1,
        wildcard: true,
        successChance: 95,
        materials: [
            { id: 'rose_quartz', quantity: 1 },
            { id: 'silverleaf', quantity: 1 }
        ]
    },

    // 🔮 Thematic / Faction-Inspired
    void_walker_boots: {
        id: 'void_walker_boots',
        name: 'Enchantment: Void Walker Boots',
        type: 'enchanting',
        icon: '🌌',
        description: 'Step through shadows: teleport 30 ft as bonus action if starting/ending in dim light (3/day).',
        levelRequirement: 11,
        craftTime: 9,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'void_crystal', quantity: 3 },
            { id: 'shadow_essence', quantity: 4 },
            { id: 'soul_gem', quantity: 1 }
        ]
    },
    royal_decree_amulet: {
        id: 'royal_decree_amulet',
        name: 'Enchantment: Royal Decree Amulet',
        type: 'enchanting',
        icon: '👑',
        description: 'Grants +2 to Persuasion with nobles. Commoners find you insufferably pompous (-2 CHA with them).',
        levelRequirement: 6,
        craftTime: 5,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'gold_dust', quantity: 3 },
            { id: 'silk_thread', quantity: 2 },
            { id: 'runestone', quantity: 1 }
        ]
    },
    glitch_core: {
        id: 'glitch_core',
        name: 'Enchantment: Glitch Core',
        type: 'enchanting',
        icon: '💾',
        description: 'Embedded in weapon/tool: 1/day, target’s magic item fails for 1 round (save negates).',
        levelRequirement: 10,
        craftTime: 8,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'corrupted_data', quantity: 3 },
            { id: 'battery_core', quantity: 1 },
            { id: 'soul_gem', quantity: 1 }
        ]
    },
    jungle_camouflage: {
        id: 'jungle_camouflage',
        name: 'Enchantment: Jungle Camouflage',
        type: 'enchanting',
        icon: '🌿',
        description: 'In forest/jungle, gain +5 to Stealth. In cities, glow neon green.',
        levelRequirement: 5,
        craftTime: 4,
        wildcard: true,
        successChance: 75,
        materials: [
            { id: 'chameleon_skin', quantity: 4 },
            { id: 'vine_wrapping', quantity: 2 }
        ]
    },
    pirate_curse_eye: {
        id: 'pirate_curse_eye',
        name: 'Enchantment: Pirate’s Cursed Eye',
        type: 'enchanting',
        icon: '☠️',
        description: 'See through 10 ft of solid wood/water. Also, parrots are compelled to perch on you.',
        levelRequirement: 7,
        craftTime: 6,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'parrot_feather', quantity: 3 },
            { id: 'sea_salt', quantity: 2 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    // ⚠️ Dangerous / Chaotic / High-Failure
    explosive_trigger: {
        id: 'explosive_trigger',
        name: 'Enchantment: Explosive Trigger',
        type: 'enchanting',
        icon: '💣',
        description: 'On crit fail, weapon explodes (3d6 fire in 10-ft radius). Save for half.',
        levelRequirement: 8,
        craftTime: 7,
        wildcard: true,
        successChance: 40,
        materials: [
            { id: 'volatile_crystal', quantity: 2 },
            { id: 'fire_essence', quantity: 3 },
            { id: 'runestone', quantity: 1 }
        ]
    },
    soul_swap: {
        id: 'soul_swap',
        name: 'Enchantment: Soul Swap',
        type: 'enchanting',
        icon: '🔁',
        description: 'On death, swap HP/stats with nearest willing creature. If none, explode (5d10 force).',
        levelRequirement: 14,
        craftTime: 12,
        wildcard: true,
        successChance: 30,
        materials: [
            { id: 'soul_gem', quantity: 4 },
            { id: 'void_crystal', quantity: 2 },
            { id: 'chaos_essence', quantity: 1 }
        ]
    },
    probability_distorter: {
        id: 'probability_distorter',
        name: 'Enchantment: Probability Distorter',
        type: 'enchanting',
        icon: '🌀',
        description: 'Reroll any die — but DM replaces your next roll with a random result from table (1–20).',
        levelRequirement: 12,
        craftTime: 10,
        wildcard: true,
        successChance: 35,
        materials: [
            { id: 'quantum_shard', quantity: 1 },
            { id: 'soul_gem', quantity: 3 },
            { id: 'arcane_dust', quantity: 10 }
        ]
    },
    reverse_effect: {
        id: 'reverse_effect',
        name: 'Enchantment: Reverse Effect',
        type: 'enchanting',
        icon: '↩️',
        description: 'All healing becomes damage, damage becomes healing. Lasts until next long rest.',
        levelRequirement: 9,
        craftTime: 8,
        wildcard: true,
        successChance: 45,
        materials: [
            { id: 'mirror_shard', quantity: 3 },
            { id: 'chaos_essence', quantity: 2 },
            { id: 'runestone', quantity: 1 }
        ]
    },
    wild_magic_focus: {
        id: 'wild_magic_focus',
        name: 'Enchantment: Wild Magic Focus',
        type: 'enchanting',
        icon: '🌈',
        description: 'Spells cast through this staff trigger wild magic surge on roll of 1–3 (instead of 1).',
        levelRequirement: 6,
        craftTime: 6,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'wild_ember', quantity: 4 },
            { id: 'arcane_dust', quantity: 8 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    // 🛠️ Tool / Non-Combat Specialists
    architect_brush: {
        id: 'architect_brush',
        name: 'Enchantment: Architect’s Brush',
        type: 'enchanting',
        icon: '🖌️',
        description: 'Draw blueprints that animate into 3D holograms. Perfect for planning heists or castles.',
        levelRequirement: 5,
        craftTime: 4,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'inkroot', quantity: 3 },
            { id: 'crystal_lens', quantity: 1 },
            { id: 'arcane_dust', quantity: 4 }
        ]
    },
    gardener_glove: {
        id: 'gardener_glove',
        name: 'Enchantment: Gardener’s Glove',
        type: 'enchanting',
        icon: '🌱',
        description: 'Plants grow 10x faster when touched. Flowers bloom instantly. Trees still take weeks.',
        levelRequirement: 3,
        craftTime: 3,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'ancient_bark', quantity: 2 },
            { id: 'spring_water', quantity: 1 },
            { id: 'healing_herbs', quantity: 2 }
        ]
    },
    chef_knife: {
        id: 'chef_knife',
        name: 'Enchantment: Chef’s Knife',
        type: 'enchanting',
        icon: '🔪',
        description: 'Food prepared with this knife is magically delicious (+1 to CON save vs poison, advantage on morale checks for allies who eat it).',
        levelRequirement: 4,
        craftTime: 3,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'golden_spice', quantity: 2 },
            { id: 'silverleaf', quantity: 1 },
            { id: 'arcane_dust', quantity: 3 }
        ]
    },
    diplomat_seal: {
        id: 'diplomat_seal',
        name: 'Enchantment: Diplomat’s Seal',
        type: 'enchanting',
        icon: '📜',
        description: 'Documents stamped with this seal are considered legally binding across most kingdoms (fraud may still be punished).',
        levelRequirement: 7,
        craftTime: 5,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'royal_wax', quantity: 3 },
            { id: 'quill_feather', quantity: 1 },
            { id: 'runestone', quantity: 1 }
        ]
    },
    librarian_lens: {
        id: 'librarian_lens',
        name: 'Enchantment: Librarian’s Lens',
        type: 'enchanting',
        icon: '👓',
        description: 'Read any written language. Scrolls auto-translate. Handwriting remains terrible.',
        levelRequirement: 5,
        craftTime: 4,
        wildcard: true,
        successChance: 75,
        materials: [
            { id: 'babel_stone', quantity: 2 },
            { id: 'crystal_lens', quantity: 1 },
            { id: 'arcane_dust', quantity: 5 }
        ]
    },
    keen_edge: {
        id: 'keen_edge',
        name: 'Enchantment: Keen Edge',
        type: 'enchanting',
        icon: '⚔️',
        description: 'Weapon gains +1 to attack rolls.',
        levelRequirement: 2,
        craftTime: 3,
        wildcard: true,
        successChance: 90,
        materials: [
            { id: 'sharpening_stone', quantity: 2 },
            { id: 'arcane_dust', quantity: 3 }
        ]
    },
    resilient_hide: {
        id: 'resilient_hide',
        name: 'Enchantment: Resilient Hide',
        type: 'enchanting',
        icon: '🛡️',
        description: 'Armor gains +1 AC against bludgeoning damage.',
        levelRequirement: 1,
        craftTime: 2,
        wildcard: true,
        successChance: 95,
        materials: [
            { id: 'tough_leather', quantity: 4 },
            { id: 'arcane_dust', quantity: 1 }
        ]
    },
    swift_step: {
        id: 'swift_step',
        name: 'Enchantment: Swift Step',
        type: 'enchanting',
        icon: '👟',
        description: 'Boots increase speed by 5 ft.',
        levelRequirement: 2,
        craftTime: 2,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'hare_fur', quantity: 2 },
            { id: 'arcane_dust', quantity: 2 }
        ]
    },
    whisper_silent: {
        id: 'whisper_silent',
        name: 'Enchantment: Whisper Silent',
        type: 'enchanting',
        icon: '🔇',
        description: 'Cloak grants advantage on Stealth checks in dim light.',
        levelRequirement: 3,
        craftTime: 3,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'shadow_silk', quantity: 3 },
            { id: 'arcane_dust', quantity: 4 }
        ]
    },
    flame_tip: {
        id: 'flame_tip',
        name: 'Enchantment: Flame Tip',
        type: 'enchanting',
        icon: '🔥',
        description: 'Weapon deals +1d4 fire damage on hit.',
        levelRequirement: 3,
        craftTime: 4,
        wildcard: true,
        successChance: 75,
        materials: [
            { id: 'ember_crystal', quantity: 1 },
            { id: 'arcane_dust', quantity: 5 }
        ]
    },

    // Mid-Tier Balanced (Moderate Level & Materials)
    frostbite_blade: {
        id: 'frostbite_blade',
        name: 'Enchantment: Frostbite Blade',
        type: 'enchanting',
        icon: '❄️',
        description: 'Weapon deals +1d6 cold damage and slows target by 10 ft on hit (save ends).',
        levelRequirement: 5,
        craftTime: 5,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'ice_shard', quantity: 2 },
            { id: 'runestone', quantity: 1 },
            { id: 'arcane_dust', quantity: 6 }
        ]
    },
    thornmail: {
        id: 'thornmail',
        name: 'Enchantment: Thornmail',
        type: 'enchanting',
        icon: '🌿',
        description: 'Armor reflects 1d4 piercing damage to melee attackers.',
        levelRequirement: 4,
        craftTime: 4,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'barbed_vine', quantity: 4 },
            { id: 'runestone', quantity: 1 }
        ]
    },
    eagle_eye: {
        id: 'eagle_eye',
        name: 'Enchantment: Eagle Eye',
        type: 'enchanting',
        icon: '👁️',
        description: 'Bow or crossbow ignores half cover.',
        levelRequirement: 4,
        craftTime: 3,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'eagle_feather', quantity: 3 },
            { id: 'arcane_dust', quantity: 4 }
        ]
    },
    mending_thread: {
        id: 'mending_thread',
        name: 'Enchantment: Mending Thread',
        type: 'enchanting',
        icon: '🧵',
        description: 'Clothing or bag repairs minor tears automatically once per day.',
        levelRequirement: 2,
        craftTime: 2,
        wildcard: true,
        successChance: 90,
        materials: [
            { id: 'spider_silk', quantity: 2 },
            { id: 'arcane_dust', quantity: 2 }
        ]
    },
    echo_voice: {
        id: 'echo_voice',
        name: 'Enchantment: Echo Voice',
        type: 'enchanting',
        icon: '📢',
        description: 'Amulet amplifies voice, granting advantage on Intimidation checks.',
        levelRequirement: 3,
        craftTime: 3,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'brass_bell', quantity: 1 },
            { id: 'arcane_dust', quantity: 3 }
        ]
    },

    // Expensive & Powerful (High Level, Rare Materials)
    dragonfire_infusion: {
        id: 'dragonfire_infusion',
        name: 'Enchantment: Dragonfire Infusion',
        type: 'enchanting',
        icon: '🐉',
        description: 'Weapon deals +2d6 fire damage and ignites target (1d6 fire/turn for 1 min).',
        levelRequirement: 10,
        craftTime: 8,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'dragon_scale', quantity: 3 },
            { id: 'soul_gem', quantity: 1 },
            { id: 'arcane_dust', quantity: 10 }
        ]
    },
    adamant_fortress: {
        id: 'adamant_fortress',
        name: 'Enchantment: Adamant Fortress',
        type: 'enchanting',
        icon: '🏰',
        description: 'Armor grants resistance to bludgeoning, piercing, and slashing from nonmagical attacks.',
        levelRequirement: 12,
        craftTime: 10,
        wildcard: true,
        successChance: 45,
        materials: [
            { id: 'adamantine_shard', quantity: 5 },
            { id: 'runestone', quantity: 2 },
            { id: 'soul_gem', quantity: 1 }
        ]
    },
    void_whisper: {
        id: 'void_whisper',
        name: 'Enchantment: Void Whisper',
        type: 'enchanting',
        icon: '🌌',
        description: 'Ring allows teleport 30 ft as bonus action (3/day).',
        levelRequirement: 9,
        craftTime: 7,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'void_crystal', quantity: 2 },
            { id: 'soul_gem', quantity: 1 },
            { id: 'arcane_dust', quantity: 8 }
        ]
    },
    eternal_vigil: {
        id: 'eternal_vigil',
        name: 'Enchantment: Eternal Vigil',
        type: 'enchanting',
        icon: '🛡️',
        description: 'Shield grants advantage on saves vs. spells and magical effects.',
        levelRequirement: 11,
        craftTime: 9,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'star_metal', quantity: 4 },
            { id: 'runestone', quantity: 2 },
            { id: 'soul_gem', quantity: 1 }
        ]
    },
    soulbound: {
        id: 'soulbound',
        name: 'Enchantment: Soulbound',
        type: 'enchanting',
        icon: '💎',
        description: 'Weapon returns to hand after thrown and deals +1d8 necrotic on crit.',
        levelRequirement: 8,
        craftTime: 6,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'soul_gem', quantity: 2 },
            { id: 'echo_crystal', quantity: 1 },
            { id: 'arcane_dust', quantity: 7 }
        ]
    },

    // Weird & Useless (Fun, Risky, or Absurd Effects – Some Low Success Chance)
    polka_dot_glow: {
        id: 'polka_dot_glow',
        name: 'Enchantment: Polka Dot Glow',
        type: 'enchanting',
        icon: '🎀',
        description: 'Armor glows with polka dots in the dark. No mechanical benefit, but great for parties.',
        levelRequirement: 1,
        craftTime: 1,
        wildcard: true,
        successChance: 95,
        materials: [
            { id: 'glowshroom', quantity: 1 },
            { id: 'dyed_cloth', quantity: 2 }
        ]
    },
    squeaky_shoes: {
        id: 'squeaky_shoes',
        name: 'Enchantment: Squeaky Tread',
        type: 'enchanting',
        icon: '👟',
        description: 'Boots squeak loudly with every step. Disadvantage on Stealth checks.',
        levelRequirement: 1,
        craftTime: 1,
        wildcard: true,
        successChance: 90,
        materials: [
            { id: 'rubber_sap', quantity: 3 },
            { id: 'arcane_dust', quantity: 1 }
        ]
    },
    itchy_finger: {
        id: 'itchy_finger',
        name: 'Enchantment: Itchy Trigger',
        type: 'enchanting',
        icon: '🧤',
        description: 'Gloves cause uncontrollable itching after 1 hour of use. Must succeed DC 10 CON save or drop items.',
        levelRequirement: 2,
        craftTime: 2,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'itchweed', quantity: 4 },
            { id: 'arcane_dust', quantity: 2 }
        ]
    },
    talking_sword: {
        id: 'talking_sword',
        name: 'Enchantment: Chatty Blade',
        type: 'enchanting',
        icon: '🗣️',
        description: 'Weapon insults foes on hit, granting disadvantage on their next Intimidation check against you.',
        levelRequirement: 3,
        craftTime: 3,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'gossip_tongue', quantity: 1 },
            { id: 'runestone', quantity: 1 }
        ]
    },
    rainbow_trail: {
        id: 'rainbow_trail',
        name: 'Enchantment: Rainbow Trail',
        type: 'enchanting',
        icon: '🌈',
        description: 'Cloak leaves a colorful trail that fades after 1 minute. Reveals your path to trackers.',
        levelRequirement: 2,
        craftTime: 2,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'prism_crystal', quantity: 2 },
            { id: 'arcane_dust', quantity: 3 }
        ]
    },

    // Utility & Tool-Focused
    lockbreaker: {
        id: 'lockbreaker',
        name: 'Enchantment: Lockbreaker',
        type: 'enchanting',
        icon: '🔑',
        description: 'Tool grants advantage on checks to pick locks or disarm traps.',
        levelRequirement: 3,
        craftTime: 3,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'skeleton_key_shard', quantity: 2 },
            { id: 'arcane_dust', quantity: 4 }
        ]
    },
    everfull_quiver: {
        id: 'everfull_quiver',
        name: 'Enchantment: Everfull Quiver',
        type: 'enchanting',
        icon: '🏹',
        description: 'Quiver produces 1d4 arrows per short rest.',
        levelRequirement: 5,
        craftTime: 4,
        wildcard: true,
        successChance: 75,
        materials: [
            { id: 'wood_essence', quantity: 3 },
            { id: 'runestone', quantity: 1 }
        ]
    },
    scribe_Quill: {
        id: 'scribe_quill',
        name: 'Enchantment: Scribe\'s Quill',
        type: 'enchanting',
        icon: '🪶',
        description: 'Pen writes twice as fast and never runs out of ink.',
        levelRequirement: 1,
        craftTime: 1,
        wildcard: true,
        successChance: 95,
        materials: [
            { id: 'inkroot', quantity: 2 },
            { id: 'arcane_dust', quantity: 1 }
        ]
    },
    compass_true: {
        id: 'compass_true',
        name: 'Enchantment: True Compass',
        type: 'enchanting',
        icon: '🧭',
        description: 'Compass always points to true north, even in magical confusion.',
        levelRequirement: 4,
        craftTime: 3,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'lodestone', quantity: 1 },
            { id: 'arcane_dust', quantity: 5 }
        ]
    },
    healers_touch: {
        id: 'healers_touch',
        name: 'Enchantment: Healer\'s Touch',
        type: 'enchanting',
        icon: '👐',
        description: 'Gloves allow Medicine checks to stabilize at advantage.',
        levelRequirement: 3,
        craftTime: 3,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'healing_herbs', quantity: 4 },
            { id: 'arcane_dust', quantity: 3 }
        ]
    },

    // Accessory & Jewelry
    charm_ward: {
        id: 'charm_ward',
        name: 'Enchantment: Charm Ward',
        type: 'enchanting',
        icon: '📿',
        description: 'Necklace grants advantage on saves vs. charm effects.',
        levelRequirement: 4,
        craftTime: 4,
        wildcard: true,
        successChance: 75,
        materials: [
            { id: 'ward_gem', quantity: 1 },
            { id: 'arcane_dust', quantity: 5 }
        ]
    },
    luck_coin: {
        id: 'luck_coin',
        name: 'Enchantment: Luck Coin',
        type: 'enchanting',
        icon: '🪙',
        description: 'Coin allows reroll of one d20 per day (lowest result).',
        levelRequirement: 6,
        craftTime: 5,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'four_leaf_clover', quantity: 2 },
            { id: 'gold_dust', quantity: 3 },
            { id: 'runestone', quantity: 1 }
        ]
    },
    shadow_ring: {
        id: 'shadow_ring',
        name: 'Enchantment: Shadow Ring',
        type: 'enchanting',
        icon: '💍',
        description: 'Ring grants darkvision 30 ft in dim light.',
        levelRequirement: 5,
        craftTime: 4,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'onyx_shard', quantity: 2 },
            { id: 'shadow_essence', quantity: 1 }
        ]
    },
    vitality_amulet: {
        id: 'vitality_amulet',
        name: 'Enchantment: Vitality Amulet',
        type: 'enchanting',
        icon: '❤️',
        description: 'Amulet increases max HP by 5 (permanent).',
        levelRequirement: 7,
        craftTime: 6,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'life_crystal', quantity: 1 },
            { id: 'soul_gem', quantity: 1 },
            { id: 'arcane_dust', quantity: 6 }
        ]
    },
    tongue_tie: {
        id: 'tongue_tie',
        name: 'Enchantment: Tongue Tie',
        type: 'enchanting',
        icon: '🗣️',
        description: 'Ring prevents speaking lies (detectable by Detect Thoughts).',
        levelRequirement: 3,
        craftTime: 3,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'truth_serum', quantity: 1 },
            { id: 'arcane_dust', quantity: 4 }
        ]
    },

    // Elemental & Thematic Variety
    lightning_rod: {
        id: 'lightning_rod',
        name: 'Enchantment: Lightning Rod',
        type: 'enchanting',
        icon: '⚡',
        description: 'Staff channels lightning: +1d8 lightning on next spell (1/day).',
        levelRequirement: 6,
        craftTime: 5,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'storm_rod', quantity: 1 },
            { id: 'arcane_dust', quantity: 7 }
        ]
    },
    earth_anchor: {
        id: 'earth_anchor',
        name: 'Enchantment: Earth Anchor',
        type: 'enchanting',
        icon: '🪨',
        description: 'Boots prevent being knocked prone or pushed.',
        levelRequirement: 5,
        craftTime: 4,
        wildcard: true,
        successChance: 75,
        materials: [
            { id: 'granite_dust', quantity: 4 },
            { id: 'runestone', quantity: 1 }
        ]
    },
    wind_glide: {
        id: 'wind_glide',
        name: 'Enchantment: Wind Glide',
        type: 'enchanting',
        icon: '💨',
        description: 'Cloak reduces falling damage by 20 ft.',
        levelRequirement: 4,
        craftTime: 3,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'zephyr_feather', quantity: 3 },
            { id: 'arcane_dust', quantity: 4 }
        ]
    },
    poison_fang: {
        id: 'poison_fang',
        name: 'Enchantment: Poison Fang',
        type: 'enchanting',
        icon: '🐍',
        description: 'Dagger applies poison: 1d4 poison damage/turn for 1 min (CON save ends).',
        levelRequirement: 5,
        craftTime: 5,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'venom_sac', quantity: 2 },
            { id: 'nightshade', quantity: 3 }
        ]
    },
    radiant_aura: {
        id: 'radiant_aura',
        name: 'Enchantment: Radiant Aura',
        type: 'enchanting',
        icon: '☀️',
        description: 'Armor emits bright light 10 ft radius, harming undead (1d4 radiant on approach).',
        levelRequirement: 7,
        craftTime: 6,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'sun_crystal', quantity: 2 },
            { id: 'holy_water', quantity: 1 },
            { id: 'arcane_dust', quantity: 5 }
        ]
    },

    // More Weird/High-Risk
    burping_blade: {
        id: 'burping_blade',
        name: 'Enchantment: Burping Blade',
        type: 'enchanting',
        icon: '🍺',
        description: 'Weapon causes wielder to burp loudly on hit. Reveals position.',
        levelRequirement: 1,
        craftTime: 1,
        wildcard: true,
        successChance: 90,
        materials: [
            { id: 'yeast_spore', quantity: 2 },
            { id: 'arcane_dust', quantity: 1 }
        ]
    },
    color_shifting: {
        id: 'color_shifting',
        name: 'Enchantment: Color Shifting',
        type: 'enchanting',
        icon: '🎨',
        description: 'Armor changes color randomly every hour. No mechanical effect.',
        levelRequirement: 2,
        craftTime: 2,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'chameleon_skin', quantity: 3 },
            { id: 'arcane_dust', quantity: 2 }
        ]
    },
    echo_chamber: {
        id: 'echo_chamber',
        name: 'Enchantment: Echo Chamber',
        type: 'enchanting',
        icon: '🗣️',
        description: 'Helm repeats everything said within 10 ft. Annoying in groups.',
        levelRequirement: 3,
        craftTime: 3,
        wildcard: true,
        successChance: 75,
        materials: [
            { id: 'echo_crystal', quantity: 1 },
            { id: 'arcane_dust', quantity: 4 }
        ]
    },
    ticklish_touch: {
        id: 'ticklish_touch',
        name: 'Enchantment: Ticklish Touch',
        type: 'enchanting',
        icon: '😄',
        description: 'Gloves make wearer giggle on successful touch attack. Disadvantage on next action.',
        levelRequirement: 2,
        craftTime: 2,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'feather_dust', quantity: 5 },
            { id: 'arcane_dust', quantity: 2 }
        ]
    },
    upside_down: {
        id: 'upside_down',
        name: 'Enchantment: Upside Down',
        type: 'enchanting',
        icon: '🔄',
        description: 'Weapon inverts damage dice (max becomes min) 50% of the time.',
        levelRequirement: 4,
        craftTime: 4,
        wildcard: true,
        successChance: 50, // High risk!
        materials: [
            { id: 'chaos_essence', quantity: 1 },
            { id: 'runestone', quantity: 1 }
        ]
    }    
};

export const SMITHING_RECIPES = {
    iron_dagger: {
        id: 'iron_dagger',
        name: 'Iron Dagger',
        type: 'smithing',
        icon: '🗡️',
        description: 'A simple but reliable iron dagger.',
        levelRequirement: 1,
        craftTime: 3,
        wildcard: true, 

        successChance: 90,
        materials: [
            { id: 'iron_ingot', quantity: 2 },
            { id: 'leather_strip', quantity: 1 }
        ]
    },
    steel_sword: {
        id: 'steel_sword',
        name: 'Steel Longsword',
        type: 'smithing',
        icon: '⚔️',
        description: 'A sharp steel sword, well balanced.',
        levelRequirement: 3,
        wildcard: true, 

        craftTime: 8,
        successChance: 80,
        materials: [
            { id: 'steel_ingot', quantity: 4 },
            { id: 'leather_strip', quantity: 2 },
            { id: 'whetstone', quantity: 1 }
            
        ]
    },
    
    iron_shortsword: {
        id: 'iron_shortsword',
        name: 'Iron Shortsword',
        type: 'smithing',
        icon: '🗡️',
        description: 'A standard iron shortsword favored by novice adventurers.',
        levelRequirement: 1,
        craftTime: 4,
        wildcard: true,
        successChance: 88,
        materials: [
            { id: 'iron_ingot', quantity: 3 },
            { id: 'leather_strip', quantity: 1 }
        ]
    },

    steel_broadsword: {
        id: 'steel_broadsword',
        name: 'Steel Broadsword',
        type: 'smithing',
        icon: '⚔️',
        description: 'A heavy steel blade designed for powerful strikes.',
        levelRequirement: 4,
        craftTime: 10,
        wildcard: true,
        successChance: 78,
        materials: [
            { id: 'steel_ingot', quantity: 5 },
            { id: 'leather_strip', quantity: 2 },
            { id: 'whetstone', quantity: 1 }
        ]
    },

    iron_warhammer: {
        id: 'iron_warhammer',
        name: 'Iron Warhammer',
        type: 'smithing',
        icon: '🔨',
        description: 'A brutal iron warhammer, excellent against armored foes.',
        levelRequirement: 2,
        craftTime: 6,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'iron_ingot', quantity: 4 },
            { id: 'oak_wood', quantity: 1 },
            { id: 'leather_strip', quantity: 1 }
        ]
    },

    steel_battleaxe: {
        id: 'steel_battleaxe',
        name: 'Steel Battleaxe',
        type: 'smithing',
        icon: '🪓',
        description: 'A heavy steel battleaxe capable of cleaving through shields.',
        levelRequirement: 3,
        craftTime: 7,
        wildcard: true,
        successChance: 82,
        materials: [
            { id: 'steel_ingot', quantity: 4 },
            { id: 'oak_wood', quantity: 1 },
            { id: 'leather_strip', quantity: 1 }
        ]
    },

    iron_spear: {
        id: 'iron_spear',
        name: 'Iron Spear',
        type: 'smithing',
        icon: '📏',
        description: 'An iron-tipped spear favored by militias and hunters.',
        levelRequirement: 1,
        craftTime: 3,
        wildcard: true,
        successChance: 90,
        materials: [
            { id: 'iron_ingot', quantity: 2 },
            { id: 'ash_wood', quantity: 1 }
        ]
    },

    // Bows & Crossbows (Smith + Wood)

    reinforced_shortbow: {
        id: 'reinforced_shortbow',
        name: 'Reinforced Shortbow',
        type: 'smithing',
        icon: '🏹',
        description: 'A shortbow reinforced with metal fittings for durability.',
        levelRequirement: 2,
        craftTime: 5,
        wildcard: true,
        successChance: 87,
        materials: [
            { id: 'yew_wood', quantity: 2 },
            { id: 'iron_ingot', quantity: 1 },
            { id: 'bowstring', quantity: 1 }
        ]
    },

    steel_crossbow: {
        id: 'steel_crossbow',
        name: 'Steel Crossbow',
        type: 'smithing',
        icon: '🎯',
        description: 'A powerful crossbow with steel limbs for increased bolt velocity.',
        levelRequirement: 4,
        craftTime: 8,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'steel_ingot', quantity: 3 },
            { id: 'oak_wood', quantity: 2 },
            { id: 'bowstring', quantity: 1 }
        ]
    },

    heavy_arbalest: {
        id: 'heavy_arbalest',
        name: 'Heavy Arbalest',
        type: 'smithing',
        icon: '🎯',
        description: 'A massive siege crossbow that deals devastating damage at range.',
        levelRequirement: 6,
        craftTime: 12,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'steel_ingot', quantity: 6 },
            { id: 'oak_wood', quantity: 3 },
            { id: 'gear_mechanism', quantity: 1 }
        ]
    },

    // Armor Sets

    iron_helmet: {
        id: 'iron_helmet',
        name: 'Iron Helmet',
        type: 'smithing',
        icon: '🪖',
        description: 'A simple iron helmet offering basic protection for the head.',
        levelRequirement: 1,
        craftTime: 3,
        wildcard: true,
        successChance: 92,
        materials: [
            { id: 'iron_ingot', quantity: 2 },
            { id: 'leather_strip', quantity: 1 }
        ]
    },

    iron_chainmail: {
        id: 'iron_chainmail',
        name: 'Iron Chainmail',
        type: 'smithing',
        icon: '⛓️',
        description: 'Interlocking iron rings forming a flexible protective shirt.',
        levelRequirement: 2,
        craftTime: 10,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'iron_ingot', quantity: 8 },
            { id: 'leather_strip', quantity: 3 }
        ]
    },

    steel_breastplate: {
        id: 'steel_breastplate',
        name: 'Steel Breastplate',
        type: 'smithing',
        icon: '🛡️',
        description: 'A solid steel breastplate providing excellent torso protection.',
        levelRequirement: 4,
        craftTime: 12,
        wildcard: true,
        successChance: 78,
        materials: [
            { id: 'steel_ingot', quantity: 8 },
            { id: 'leather_strip', quantity: 4 }
        ]
    },

    full_plate_armor: {
        id: 'full_plate_armor',
        name: 'Full Plate Armor',
        type: 'smithing',
        icon: '🤺',
        description: 'A complete suit of interlocking steel plates. Heavy but nearly impenetrable.',
        levelRequirement: 8,
        craftTime: 24,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'steel_ingot', quantity: 16 },
            { id: 'leather_strip', quantity: 6 },
            { id: 'padding_cloth', quantity: 4 }
        ]
    },

    tower_shield: {
        id: 'tower_shield',
        name: 'Steel Tower Shield',
        type: 'smithing',
        icon: '🛡️',
        description: 'An enormous shield providing exceptional cover.',
        levelRequirement: 5,
        craftTime: 10,
        wildcard: true,
        successChance: 75,
        materials: [
            { id: 'steel_ingot', quantity: 7 },
            { id: 'oak_wood', quantity: 2 },
            { id: 'leather_strip', quantity: 2 }
        ]
    },

    // Exotic Materials (Mid/High Level)

    mithril_dagger: {
        id: 'mithril_dagger',
        name: 'Mithril Dagger',
        type: 'smithing',
        icon: '🗡️',
        description: 'A feather-light mithril dagger that cuts like a razor.',
        levelRequirement: 6,
        craftTime: 8,
        wildcard: true,
        successChance: 72,
        materials: [
            { id: 'mithril_ingot', quantity: 2 },
            { id: 'leather_strip', quantity: 1 },
            { id: 'whetstone', quantity: 1 }
        ]
    },

    mithril_rapier: {
        id: 'mithril_rapier',
        name: 'Mithril Rapier',
        type: 'smithing',
        icon: '🤺',
        description: 'A finely balanced mithril rapier excelling in precision thrusts.',
        levelRequirement: 7,
        craftTime: 10,
        wildcard: true,
        successChance: 68,
        materials: [
            { id: 'mithril_ingot', quantity: 3 },
            { id: 'silver_wire', quantity: 1 },
            { id: 'leather_strip', quantity: 1 }
        ]
    },

    mithril_chainmail: {
        id: 'mithril_chainmail',
        name: 'Mithril Chainmail',
        type: 'smithing',
        icon: '⛓️',
        description: 'Lightweight yet incredibly durable mithril chainmail.',
        levelRequirement: 8,
        craftTime: 16,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'mithril_ingot', quantity: 8 },
            { id: 'silver_wire', quantity: 2 }
        ]
    },

    obsidian_greatsword: {
        id: 'obsidian_greatsword',
        name: 'Obsidian Greatsword',
        type: 'smithing',
        icon: '⚔️',
        description: 'A jagged obsidian blade that deals devastating wounds but is prone to chipping.',
        levelRequirement: 9,
        craftTime: 14,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'obsidian_shard', quantity: 6 },
            { id: 'steel_ingot', quantity: 3 },
            { id: 'leather_strip', quantity: 2 }
        ]
    },

    dragonscale_shield: {
        id: 'dragonscale_shield',
        name: 'Dragonscale Shield',
        type: 'smithing',
        icon: '🐉🛡️',
        description: 'A shield plated with dragon scales, resistant to elemental forces.',
        levelRequirement: 10,
        craftTime: 18,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'dragon_scale', quantity: 5 },
            { id: 'steel_ingot', quantity: 4 },
            { id: 'leather_strip', quantity: 3 }
        ]
    },

    // Cultural / Style Pieces

    elven_longspear: {
        id: 'elven_longspear',
        name: 'Elven Longspear',
        type: 'smithing',
        icon: '🪙',
        description: 'A gracefully etched spear, lighter than it appears.',
        levelRequirement: 4,
        craftTime: 7,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'steel_ingot', quantity: 2 },
            { id: 'yew_wood', quantity: 2 },
            { id: 'silverleaf', quantity: 1 }
        ]
    },

    dwarven_waraxe: {
        id: 'dwarven_waraxe',
        name: 'Dwarven Waraxe',
        type: 'smithing',
        icon: '🪓',
        description: 'A compact but brutally efficient waraxe of dwarven make.',
        levelRequirement: 5,
        craftTime: 9,
        wildcard: true,
        successChance: 78,
        materials: [
            { id: 'steel_ingot', quantity: 5 },
            { id: 'oak_wood', quantity: 1 },
            { id: 'rune_etched_plate', quantity: 1 }
        ]
    },

    nomad_sabre: {
        id: 'nomad_sabre',
        name: 'Nomad Sabre',
        type: 'smithing',
        icon: '⚔️',
        description: 'A curved blade optimized for mounted combat and quick slashes.',
        levelRequirement: 3,
        craftTime: 6,
        wildcard: true,
        successChance: 82,
        materials: [
            { id: 'steel_ingot', quantity: 3 },
            { id: 'leather_strip', quantity: 1 },
            { id: 'horsehair_tassel', quantity: 1 }
        ]
    },

    gladiator_trident: {
        id: 'gladiator_trident',
        name: 'Gladiator Trident',
        type: 'smithing',
        icon: '🔱',
        description: 'A three-pronged trident designed for arena spectacle and control.',
        levelRequirement: 4,
        craftTime: 8,
        wildcard: true,
        successChance: 78,
        materials: [
            { id: 'steel_ingot', quantity: 4 },
            { id: 'ash_wood', quantity: 2 },
            { id: 'leather_strip', quantity: 1 }
        ]
    },

    // Utility Smithing (Tools, Kits, Etc.)

    blacksmith_hammer: {
        id: 'blacksmith_hammer',
        name: 'Blacksmith’s Hammer',
        type: 'smithing',
        icon: '🔨',
        description: 'A well-balanced hammer granting advantage on smithing checks.',
        levelRequirement: 2,
        craftTime: 4,
        wildcard: true,
        successChance: 90,
        materials: [
            { id: 'iron_ingot', quantity: 3 },
            { id: 'oak_wood', quantity: 1 }
        ]
    },

    miner_pickaxe: {
        id: 'miner_pickaxe',
        name: 'Reinforced Pickaxe',
        type: 'smithing',
        icon: '⛏️',
        description: 'A sturdy pickaxe that increases ore yield when mining.',
        levelRequirement: 2,
        craftTime: 5,
        wildcard: true,
        successChance: 88,
        materials: [
            { id: 'iron_ingot', quantity: 3 },
            { id: 'ash_wood', quantity: 1 },
            { id: 'leather_strip', quantity: 1 }
        ]
    },

    hunting_knife: {
        id: 'hunting_knife',
        name: 'Hunting Knife',
        type: 'smithing',
        icon: '🔪',
        description: 'A simple but sharp knife ideal for skinning and field work.',
        levelRequirement: 1,
        craftTime: 2,
        wildcard: true,
        successChance: 94,
        materials: [
            { id: 'iron_ingot', quantity: 1 },
            { id: 'leather_strip', quantity: 1 }
        ]
    },

    artisan_chisel_set: {
        id: 'artisan_chisel_set',
        name: 'Artisan Chisel Set',
        type: 'smithing',
        icon: '🪚',
        description: 'Finely made chisels used for engraving armor and weapons.',
        levelRequirement: 3,
        craftTime: 5,
        wildcard: true,
        successChance: 90,
        materials: [
            { id: 'steel_ingot', quantity: 2 },
            { id: 'oak_wood', quantity: 1 }
        ]
    },

    armored_toolbelt: {
        id: 'armored_toolbelt',
        name: 'Armored Toolbelt',
        type: 'smithing',
        icon: '🧰',
        description: 'A reinforced belt that securely holds tools and protects the waist.',
        levelRequirement: 2,
        craftTime: 4,
        wildcard: true,
        successChance: 92,
        materials: [
            { id: 'leather_strip', quantity: 4 },
            { id: 'iron_ingot', quantity: 1 }
        ]
    },

    // High-End / Prestige Pieces

    royal_guard_halberd: {
        id: 'royal_guard_halberd',
        name: 'Royal Guard Halberd',
        type: 'smithing',
        icon: '🪓',
        description: 'A ceremonial yet deadly halberd bearing the crest of a royal house.',
        levelRequirement: 7,
        craftTime: 14,
        wildcard: true,
        successChance: 68,
        materials: [
            { id: 'steel_ingot', quantity: 6 },
            { id: 'ash_wood', quantity: 2 },
            { id: 'gold_inlay', quantity: 1 }
        ]
    },

    runed_warhammer: {
        id: 'runed_warhammer',
        name: 'Runed Warhammer',
        type: 'smithing',
        icon: '🔨',
        description: 'A massive hammer etched with runes, ideal for later enchanting.',
        levelRequirement: 6,
        craftTime: 12,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'steel_ingot', quantity: 7 },
            { id: 'runestone', quantity: 2 },
            { id: 'leather_strip', quantity: 2 }
        ]
    },

    dragonsbane_spear: {
        id: 'dragonsbane_spear',
        name: 'Dragonsbane Spear',
        type: 'smithing',
        icon: '🐉',
        description: 'A reinforced spear designed specifically to pierce dragon scales.',
        levelRequirement: 9,
        craftTime: 16,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'steel_ingot', quantity: 6 },
            { id: 'dragon_bone', quantity: 2 },
            { id: 'leather_strip', quantity: 2 }
        ]
    },

    ceremonial_katana: {
        id: 'ceremonial_katana',
        name: 'Ceremonial Katana',
        type: 'smithing',
        icon: '⚔️',
        description: 'A beautifully folded blade prized by nobles and swordmasters.',
        levelRequirement: 8,
        craftTime: 18,
        wildcard: true,
        successChance: 62,
        materials: [
            { id: 'folded_steel_ingot', quantity: 4 },
            { id: 'silk_wrapping', quantity: 2 },
            { id: 'whetstone', quantity: 1 }
        ]
    },

    obsidian_plate_armor: {
        id: 'obsidian_plate_armor',
        name: 'Obsidian Plate Armor',
        type: 'smithing',
        icon: '🛡️',
        description: 'Dark plate armor reinforced with obsidian plates, intimidating and powerful.',
        levelRequirement: 11,
        craftTime: 28,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'obsidian_shard', quantity: 10 },
            { id: 'steel_ingot', quantity: 10 },
            { id: 'leather_strip', quantity: 6 }
        ]
    },
    bronze_spear: {
        id: 'bronze_spear',
        name: 'Bronze Spear',
        type: 'smithing',
        icon: '🔱',
        description: 'A sturdy spear tipped with bronze. Reach weapon.',
        levelRequirement: 1,
        craftTime: 4,
        wildcard: true,
        successChance: 92,
        materials: [
            { id: 'bronze_ingot', quantity: 2 },
            { id: 'wooden_shaft', quantity: 1 },
            { id: 'leather_strip', quantity: 1 }
        ]
    },
    hunter_bow: {
        id: 'hunter_bow',
        name: 'Hunter’s Longbow',
        type: 'smithing',
        icon: '🏹',
        description: 'Crafted from yew wood and sinew. Reliable at range.',
        levelRequirement: 2,
        craftTime: 6,
        wildcard: true,
        successChance: 88,
        materials: [
            { id: 'yew_wood', quantity: 3 },
            { id: 'beast_sinew', quantity: 2 },
            { id: 'leather_strip', quantity: 1 }
        ]
    },
    throwing_axe_set: {
        id: 'throwing_axe_set',
        name: 'Throwing Axe Set (x3)',
        type: 'smithing',
        icon: '🪓',
        description: 'Three balanced axes for hurling at foes.',
        levelRequirement: 2,
        craftTime: 5,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'iron_ingot', quantity: 3 },
            { id: 'wooden_handle', quantity: 3 }
        ]
    },
    reinforced_shield: {
        id: 'reinforced_shield',
        name: 'Reinforced Kite Shield',
        type: 'smithing',
        icon: '🛡️',
        description: '+2 AC. Can be used to shove with advantage.',
        levelRequirement: 3,
        craftTime: 7,
        wildcard: true,
        successChance: 82,
        materials: [
            { id: 'steel_ingot', quantity: 2 },
            { id: 'hardwood_plank', quantity: 4 },
            { id: 'leather_strip', quantity: 3 }
        ]
    },
    warhammer: {
        id: 'warhammer',
        name: 'Dwarven Warhammer',
        type: 'smithing',
        icon: '🔨',
        description: 'Heavy head for smashing armor. Deals +1d6 bludgeoning vs. constructs.',
        levelRequirement: 4,
        craftTime: 8,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'steel_ingot', quantity: 5 },
            { id: 'oak_handle', quantity: 1 },
            { id: 'leather_grip', quantity: 1 }
        ]
    },

    // 🛡️ Armor Sets (From Light to Heavy)
    ranger_leathers: {
        id: 'ranger_leathers',
        name: 'Studded Ranger Leathers',
        type: 'smithing',
        icon: '🧥',
        description: 'Light armor with hidden pockets and silent movement.',
        levelRequirement: 2,
        craftTime: 6,
        wildcard: true,
        successChance: 87,
        materials: [
            { id: 'tough_leather', quantity: 6 },
            { id: 'iron_rivet', quantity: 10 },
            { id: 'dyed_cloth', quantity: 2 }
        ]
    },
    scale_mail: {
        id: 'scale_mail',
        name: 'Iron Scale Mail',
        type: 'smithing',
        icon: '⛓️',
        description: 'Flexible yet protective. Resists slashing.',
        levelRequirement: 3,
        craftTime: 10,
        wildcard: true,
        successChance: 78,
        materials: [
            { id: 'iron_ingot', quantity: 8 },
            { id: 'leather_backing', quantity: 1 },
            { id: 'iron_rivet', quantity: 50 }
        ]
    },
    full_plate: {
        id: 'full_plate',
        name: 'Knight’s Full Plate',
        type: 'smithing',
        icon: '🦺',
        description: 'Masterwork heavy armor. +2 AC, disadvantage on Stealth.',
        levelRequirement: 7,
        craftTime: 24,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'steel_ingot', quantity: 20 },
            { id: 'leather_lining', quantity: 5 },
            { id: 'whetstone', quantity: 2 }
        ]
    },
    desert_robes_armor: {
        id: 'desert_robes_armor',
        name: 'Desert Woven Robes',
        type: 'smithing',
        icon: '🧕',
        description: 'Light fabric armor woven with sand-resistant fibers. +1 AC, immune to heat exhaustion.',
        levelRequirement: 3,
        craftTime: 5,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'desert_silk', quantity: 4 },
            { id: 'cactus_fiber', quantity: 3 },
            { id: 'leather_strip', quantity: 1 }
        ]
    },
    void_chain: {
        id: 'void_chain',
        name: 'Void-Touched Chainmail',
        type: 'smithing',
        icon: '⛓️🌌',
        description: 'Blackened chain that hums with void energy. Grants resistance to psychic damage.',
        levelRequirement: 9,
        craftTime: 18,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'void_crystal', quantity: 2 },
            { id: 'adamantine_shard', quantity: 3 },
            { id: 'steel_ingot', quantity: 10 }
        ]
    },

    // 🔥 Faction-Themed Gear
    mordor_black_blade: {
        id: 'mordor_black_blade',
        name: 'Mordor Black Blade',
        type: 'smithing',
        icon: '⚔️🌋',
        description: 'Forged in volcanic ash. Glows red when enemies are near. Deals +1d6 fire on crit.',
        levelRequirement: 6,
        craftTime: 12,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'volcanic_ash', quantity: 5 },
            { id: 'black_iron', quantity: 6 },
            { id: 'fire_essence', quantity: 2 }
        ]
    },
    gondor_tower_shield: {
        id: 'gondor_tower_shield',
        name: 'Gondorian Tower Shield',
        type: 'smithing',
        icon: '🛡️🏰',
        description: 'Tall shield bearing the White Tree. Can be planted to grant half-cover to allies.',
        levelRequirement: 5,
        craftTime: 14,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'white_tree_wood', quantity: 2 },
            { id: 'steel_ingot', quantity: 8 },
            { id: 'silver_inlay', quantity: 1 }
        ]
    },
    koopa_shell_hammer: {
        id: 'koopa_shell_hammer',
        name: 'Koopa Shell Hammer',
        type: 'smithing',
        icon: '🐢🔨',
        description: 'Hammer tipped with enchanted turtle shell. On hit, target is knocked prone (STR save).',
        levelRequirement: 4,
        craftTime: 8,
        wildcard: true,
        successChance: 75,
        materials: [
            { id: 'magic_shell', quantity: 1 },
            { id: 'iron_ingot', quantity: 4 },
            { id: 'wooden_handle', quantity: 1 }
        ]
    },
    equestrian_saddle_armor: {
        id: 'equestrian_saddle_armor',
        name: 'Equestrian Barding',
        type: 'smithing',
        icon: '🐴🛡️',
        description: 'Lightweight armor for mounts. +1 AC, no speed penalty.',
        levelRequirement: 3,
        craftTime: 10,
        wildcard: true,
        successChance: 80,
        materials: [
            { id: 'tough_leather', quantity: 10 },
            { id: 'brass_stud', quantity: 20 },
            { id: 'dyed_cloth', quantity: 3 }
        ]
    },
    cybernetic_gauntlet: {
        id: 'cybernetic_gauntlet',
        name: 'Cybernetic Gauntlet',
        type: 'smithing',
        icon: '⚙️🦾',
        description: 'Mechanical fist with shock plating. Unarmed strikes deal 1d6 lightning.',
        levelRequirement: 8,
        craftTime: 16,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'battery_core', quantity: 2 },
            { id: 'steel_ingot', quantity: 5 },
            { id: 'copper_wire', quantity: 10 }
        ]
    },

    // ⚙️ Tools & Utility Items
    lockpick_set: {
        id: 'lockpick_set',
        name: 'Master Lockpick Set',
        type: 'smithing',
        icon: '🔑',
        description: 'Delicate tools for picking locks. Advantage on Thieves’ Tools checks.',
        levelRequirement: 2,
        craftTime: 4,
        wildcard: true,
        successChance: 90,
        materials: [
            { id: 'steel_ingot', quantity: 1 },
            { id: 'spring_wire', quantity: 5 }
        ]
    },
    climbing_kit: {
        id: 'climbing_kit',
        name: 'Adventurer’s Climbing Kit',
        type: 'smithing',
        icon: '🧗',
        description: 'Includes pitons, rope, and harness. Advantage on Athletics (climbing).',
        levelRequirement: 1,
        craftTime: 3,
        wildcard: true,
        successChance: 95,
        materials: [
            { id: 'iron_ingot', quantity: 2 },
            { id: 'hemp_rope', quantity: 1 },
            { id: 'leather_strip', quantity: 2 }
        ]
    },
    alchemy_station: {
        id: 'alchemy_station',
        name: 'Portable Alchemy Station',
        type: 'smithing',
        icon: '⚗️',
        description: 'Foldable table with burners and vials. +2 to Alchemy crafting checks.',
        levelRequirement: 4,
        craftTime: 10,
        wildcard: true,
        successChance: 75,
        materials: [
            { id: 'brass_pipe', quantity: 4 },
            { id: 'glass_vial', quantity: 6 },
            { id: 'wooden_base', quantity: 2 }
        ]
    },
    signal_flare: {
        id: 'signal_flare',
        name: 'Signal Flare Launcher',
        type: 'smithing',
        icon: '🎆',
        description: 'Shoots bright flare 300 ft high. Visible for miles. 3 shots.',
        levelRequirement: 3,
        craftTime: 5,
        wildcard: true,
        successChance: 85,
        materials: [
            { id: 'iron_tube', quantity: 1 },
            { id: 'fire_essence', quantity: 1 },
            { id: 'gunpowder_pouch', quantity: 3 }
        ]
    },
    folding_boat: {
        id: 'folding_boat',
        name: 'Folding Rowboat',
        type: 'smithing',
        icon: '⛵',
        description: 'Collapses to 1 ft cube. Expands to 10-ft rowboat (holds 4).',
        levelRequirement: 5,
        craftTime: 12,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'waterproof_wood', quantity: 8 },
            { id: 'brass_hinge', quantity: 12 },
            { id: 'sealant_resin', quantity: 3 }
        ]
    },

    // 💀 Cursed / Risky Forges (Low Success Chance!)
    berserker_axe: {
        id: 'berserker_axe',
        name: 'Berserker’s Greataxe',
        type: 'smithing',
        icon: '🪓😡',
        description: '+3 damage, but must attack nearest creature each round (friend or foe).',
        levelRequirement: 6,
        craftTime: 14,
        wildcard: true,
        successChance: 45,
        materials: [
            { id: 'rage_gem', quantity: 1 },
            { id: 'black_iron', quantity: 8 },
            { id: 'madcap_mushroom', quantity: 2 }
        ]
    },
    soul_forge_blade: {
        id: 'soul_forge_blade',
        name: 'Soul-Forge Longsword',
        type: 'smithing',
        icon: '⚔️💀',
        description: 'Drains life on hit. Curse: wielder ages 1 year per kill.',
        levelRequirement: 10,
        craftTime: 20,
        wildcard: true,
        successChance: 35,
        materials: [
            { id: 'soul_gem', quantity: 3 },
            { id: 'cursed_bone', quantity: 5 },
            { id: 'adamantine_shard', quantity: 4 }
        ]
    },
    unstable_gauntlets: {
        id: 'unstable_gauntlets',
        name: 'Unstable Arc Gauntlets',
        type: 'smithing',
        icon: '🧤⚡',
        description: 'Melee hits arc lightning to 2 nearby foes. 30% chance to shock wearer.',
        levelRequirement: 7,
        craftTime: 15,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'storm_rod', quantity: 2 },
            { id: 'copper_wire', quantity: 15 },
            { id: 'leather_lining', quantity: 2 }
        ]
    },
    mimic_chest: {
        id: 'mimic_chest',
        name: 'Mimic Chest (Trained)',
        type: 'smithing',
        icon: '📦👹',
        description: 'Looks like treasure chest. Can be commanded to bite intruders.',
        levelRequirement: 8,
        craftTime: 18,
        wildcard: true,
        successChance: 40,
        materials: [
            { id: 'mimic_tooth', quantity: 4 },
            { id: 'wooden_base', quantity: 6 },
            { id: 'gold_foil', quantity: 10 }
        ]
    },
    plague_doctor_mask: {
        id: 'plague_doctor_mask',
        name: 'Plague Doctor Mask',
        type: 'smithing',
        icon: '😷',
        description: 'Filters air (immune to inhaled poisons). But attracts disease spirits.',
        levelRequirement: 5,
        craftTime: 8,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'leather_sheet', quantity: 3 },
            { id: 'glass_lens', quantity: 2 },
            { id: 'herbal_filter', quantity: 5 }
        ]
    },

    // ✨ Magical But Smithed (No Enchanting Required)
    echo_blade: {
        id: 'echo_blade',
        name: 'Echo Blade',
        type: 'smithing',
        icon: '🗡️🌀',
        description: 'Forged with echo crystals. Attacks leave afterimages—advantage on next attack vs same target.',
        levelRequirement: 7,
        craftTime: 16,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'echo_crystal', quantity: 3 },
            { id: 'star_metal', quantity: 4 },
            { id: 'leather_grip', quantity: 1 }
        ]
    },
    frostforged_armor: {
        id: 'frostforged_armor',
        name: 'Frostforged Plate',
        type: 'smithing',
        icon: '❄️🦺',
        description: 'Tempered in glacial ice. Grants cold resistance and leaves frost trail.',
        levelRequirement: 9,
        craftTime: 22,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'ice_shard', quantity: 6 },
            { id: 'adamantine_shard', quantity: 5 },
            { id: 'steel_ingot', quantity: 15 }
        ]
    },
    thunderous_greaves: {
        id: 'thunderous_greaves',
        name: 'Thunderous Greaves',
        type: 'smithing',
        icon: '👢⚡',
        description: 'Stomp to create thunderclap (15-ft radius, 2d6 thunder, CON save). 1/day.',
        levelRequirement: 8,
        craftTime: 18,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'storm_rod', quantity: 3 },
            { id: 'steel_ingot', quantity: 8 },
            { id: 'leather_lining', quantity: 3 }
        ]
    },
    // Freelancer 4.2%
freelancer_multitool: {
id: 'freelancer_multitool',
name: 'Freelancer Multitool',
type: 'smithing',
icon: '🔧',
description: 'Modular tool that becomes dagger, lockpick, or mini-prybar at a twist.',
levelRequirement: 5,
craftTime: 12,
wildcard: true,
successChance: 55,
materials: [
{ id: 'steel_ingot', quantity: 4 },
{ id: 'spring_mechanism', quantity: 3 },
{ id: 'runestone', quantity: 1 }
]
},

// Land Mordor 3.2%
mordor_ashblade: {
id: 'mordor_ashblade',
name: 'Mordor Ashblade',
type: 'smithing',
icon: '🔥',
description: 'Forged in volcanic ash; deals +1 fire on hit and smoulders when drawn.',
levelRequirement: 7,
craftTime: 16,
wildcard: true,
successChance: 50,
materials: [
{ id: 'volcanic_iron', quantity: 6 },
{ id: 'obsidian_shard', quantity: 4 },
{ id: 'infernal_coal', quantity: 2 }
]
},

// Asgard 1.8%
asgardian_stormaxe: {
id: 'asgardian_stormaxe',
name: 'Asgardian Stormaxe',
type: 'smithing',
icon: '⚡',
description: 'Lightning-welded axe; once per day call a 3d6 thunder boom on hit.',
levelRequirement: 12,
craftTime: 24,
wildcard: true,
successChance: 40,
materials: [
{ id: 'star_metal', quantity: 5 },
{ id: 'storm_essence', quantity: 3 },
{ id: 'raven_feather', quantity: 2 }
]
},

// Kingdom Gondor 1.6%
gondorian_tower_shield: {
id: 'gondorian_tower_shield',
name: 'Gondorian Tower Shield',
type: 'smithing',
icon: '🛡️',
description: 'White-tree etched shield; grants +2 AC vs ranged while planted.',
levelRequirement: 9,
craftTime: 20,
wildcard: true,
successChance: 45,
materials: [
{ id: 'steel_ingot', quantity: 10 },
{ id: 'white_tree_wood', quantity: 2 },
{ id: 'silverleaf', quantity: 3 }
]
},

// Regal Empire 1.3%
imperial_gold_rapier: {
id: 'imperial_gold_rapier',
name: 'Imperial Gold Rapier',
type: 'smithing',
icon: '🤺',
description: 'Gold-inlaid rapier; +1d4 radiant vs chaotic foes, but needs daily polish.',
levelRequirement: 10,
craftTime: 22,
wildcard: true,
successChance: 42,
materials: [
{ id: 'folded_steel_ingot', quantity: 4 },
{ id: 'gold_inlay', quantity: 3 },
{ id: 'royal_wax', quantity: 2 }
]
},

// Koopa Troop 1.5%
koopa_shell_hammer: {
id: 'koopa_shell_hammer',
name: 'Koopa Shell Hammer',
type: 'smithing',
icon: '🐢',
description: 'Spiked shell head; crits knock targets prone (save DC 15).',
levelRequirement: 6,
craftTime: 14,
wildcard: true,
successChance: 58,
materials: [
{ id: 'koopa_shell', quantity: 4 },
{ id: 'iron_ingot', quantity: 3 },
{ id: 'spring_mechanism', quantity: 1 }
]
},

// Equestrian 1.3%
equestrian_hoofblade: {
id: 'equestrian_hoofblade',
name: 'Equestrian Hoofblade',
type: 'smithing',
icon: '🦄',
description: 'Curved sabre forged on anvil of clouds; +5 ft speed while sheathed.',
levelRequirement: 7,
craftTime: 16,
wildcard: true,
successChance: 52,
materials: [
{ id: 'cloud_iron', quantity: 4 },
{ id: 'silverleaf', quantity: 3 },
{ id: 'rainbow_petal', quantity: 2 }
]
},

// Iron Legion 1.0%
iron_legion_phalanx_spear: {
id: 'iron_legion_phalanx_spear',
name: 'Iron Legion Phalanx Spear',
type: 'smithing',
icon: '🔱',
description: 'Eight-foot spear; when braced, attacker takes 1d8 piercing on miss.',
levelRequirement: 8,
craftTime: 18,
wildcard: true,
successChance: 48,
materials: [
{ id: 'steel_ingot', quantity: 6 },
{ id: 'iron_ingot', quantity: 4 },
{ id: 'rune_etched_plate', quantity: 1 }
]
},

// Formosa Ultima 1.1%
formosan_jade_halberd: {
id: 'formosan_jade_halberd',
name: 'Formosan Jade Halberd',
type: 'smithing',
icon: '🐉',
description: 'Jade-inlaid halberd; +1d4 force on first strike each combat.',
levelRequirement: 9,
craftTime: 20,
wildcard: true,
successChance: 46,
materials: [
{ id: 'jade_dust', quantity: 5 },
{ id: 'folded_steel_ingot', quantity: 5 },
{ id: 'lotus_petal', quantity: 2 }
]
},

// Weldrhom 1.1%
weldrhom_steam_gauntlets: {
id: 'weldrhom_steam_gauntlets',
name: 'Weldrhom Steam Gauntlets',
type: 'smithing',
icon: '🤖',
description: 'Pressurized gauntlets; bonus action 1d6 fire push 5 ft (3/day).',
levelRequirement: 10,
craftTime: 22,
wildcard: true,
successChance: 43,
materials: [
{ id: 'steel_ingot', quantity: 6 },
{ id: 'gear_mechanism', quantity: 4 },
{ id: 'fire_essence', quantity: 3 }
]
},

// Skycaverns 1.1%
skycaverns_harpoon_gun: {
id: 'skycaverns_harpoon_gun',
name: 'Skycaverns Harpoon Gun',
type: 'smithing',
icon: '🪝',
description: 'Shoulder-mounted; fires 60-ft grappling harpoon, can reel 300 lb.',
levelRequirement: 11,
craftTime: 24,
wildcard: true,
successChance: 40,
materials: [
{ id: 'light_steel_alloy', quantity: 8 },
{ id: 'zephyr_feather', quantity: 4 },
{ id: 'spring_mechanism', quantity: 3 }
]
},

// Garden Isles 1.1%
garden_bloom_blade: {
id: 'garden_bloom_blade',
name: 'Garden Bloom Blade',
type: 'smithing',
icon: '🌸',
description: 'Petals inside fuller; once per day release 15-ft perfume burst (Charm DC 14).',
levelRequirement: 6,
craftTime: 14,
wildcard: true,
successChance: 57,
materials: [
{ id: 'steel_ingot', quantity: 4 },
{ id: 'blossom_pollen', quantity: 6 },
{ id: 'silverleaf', quantity: 2 }
]
},

// Glarnia 1.1%
glarnian_crystal_axe: {
id: 'glarnian_crystal_axe',
name: 'Glarnian Crystal Axe',
type: 'smithing',
icon: '💎',
description: 'Edge of living crystal; regrows 1 hp per hour, shatters on nat 1 (re-forgeable).',
levelRequirement: 8,
craftTime: 16,
wildcard: true,
successChance: 50,
materials: [
{ id: 'living_crystal', quantity: 5 },
{ id: 'mithril_ingot', quantity: 2 },
{ id: 'life_crystal', quantity: 1 }
]
},

// Polybius 1.1%
polybius_arcade_staff: {
id: 'polybius_arcade_staff',
name: 'Polybius Arcade Staff',
type: 'smithing',
icon: '🕹️',
description: 'Metal staff with CRT head; flash-bang on crit (blind 1 round).',
levelRequirement: 9,
craftTime: 18,
wildcard: true,
successChance: 47,
materials: [
{ id: 'corrupted_data', quantity: 4 },
{ id: 'steel_ingot', quantity: 5 },
{ id: 'battery_core', quantity: 2 }
]
},

// Internet 0.6%
internet_cable_whip: {
id: 'internet_cable_whip',
name: 'Internet Cable Whip',
type: 'smithing',
icon: '🌐',
description: 'Fiber-optic whip; reach 15 ft, on hit target DC 13 CON or stunned 1 round (lag).',
levelRequirement: 5,
craftTime: 10,
wildcard: true,
successChance: 62,
materials: [
{ id: 'fiber_optic_strand', quantity: 6 },
{ id: 'quicksilver', quantity: 2 },
{ id: 'data_crystal', quantity: 1 }
]
},

// Pokémon League 1.8%
pokeball_forged_gauntlet: {
id: 'pokeball_forged_gauntlet',
name: 'Pokéball-Forged Gauntlet',
type: 'smithing',
icon: '🥊',
description: 'Can “throw” touch spells 30 ft; 1/day auto-crit vs beast-type.',
levelRequirement: 7,
craftTime: 15,
wildcard: true,
successChance: 53,
materials: [
{ id: 'pokeball_metal', quantity: 4 },
{ id: 'beast_essence', quantity: 3 },
{ id: 'spring_mechanism', quantity: 2 }
]
},

// Xenonesia 1.1%
xenonesian_sky_iron_glaive: {
id: 'xenonesian_sky_iron_glaive',
name: 'Xenonesian Sky-Iron Glaive',
type: 'smithing',
icon: '☁️',
description: 'Weightless polearm; wielder may levitate 10 ft for 1 minute (1/day).',
levelRequirement: 10,
craftTime: 20,
wildcard: true,
successChance: 44,
materials: [
{ id: 'sky_iron_ore', quantity: 6 },
{ id: 'cloud_iron', quantity: 2 },
{ id: 'zephyr_feather', quantity: 3 }
]
},

// Mushroom Regency 0.8%
mushroom_cap_helm: {
id: 'mushroom_cap_helm',
name: 'Mushroom Cap Helm',
type: 'smithing',
icon: '🍄',
description: 'Spore-launch visor; 1/day 10-ft cloud (poison DC 13, 1 min).',
levelRequirement: 6,
craftTime: 12,
wildcard: true,
successChance: 59,
materials: [
{ id: 'magic_mushroom', quantity: 5 },
{ id: 'iron_ingot', quantity: 3 },
{ id: 'spore_sac', quantity: 2 }
]
},

// Geminia 1.1%
geminian_twin_blades: {
id: 'geminian_twin_blades',
name: 'Geminian Twin Blades',
type: 'smithing',
icon: '♊',
description: 'Matched daggers; when both drawn, wielder may split move before/after attack.',
levelRequirement: 8,
craftTime: 16,
wildcard: true,
successChance: 51,
materials: [
{ id: 'mirror_steel', quantity: 4 },
{ id: 'quicksilver', quantity: 3 },
{ id: 'soul_gem', quantity: 1 }
]
},

// Servants Cosmic 1.8%
cosmic_observer_scope: {
id: 'cosmic_observer_scope',
name: 'Cosmic Observer Scope',
type: 'smithing',
icon: '🔭',
description: 'Telescopic rifle-bow; ignore half cover, double range increment.',
levelRequirement: 11,
craftTime: 22,
wildcard: true,
successChance: 41,
materials: [
{ id: 'star_metal', quantity: 5 },
{ id: 'crystal_lens', quantity: 3 },
{ id: 'stardust', quantity: 2 }
]
},

// Asclepia 1.1%
asclepian_serpent_rod: {
id: 'asclepian_serpent_rod',
name: 'Asclepian Serpent Rod',
type: 'smithing',
icon: '🐍',
description: 'Rod-staff hybrid; touch heals 1d4, but reversed on undead (1d4 radiant).',
levelRequirement: 6,
craftTime: 14,
wildcard: true,
successChance: 56,
materials: [
{ id: 'bronze_ingot', quantity: 4 },
{ id: 'life_crystal', quantity: 2 },
{ id: 'serpent_scale', quantity: 3 }
]
},

// Pony Nobility 0.8%
noble_silver_horseshoe_blade: {
id: 'noble_silver_horseshoe_blade',
name: 'Noble Silver Horseshoe Blade',
type: 'smithing',
icon: '🐎',
description: 'Curved sabre forged from royal horseshoes; +2 CHA with nobles while worn.',
levelRequirement: 5,
craftTime: 12,
wildcard: true,
successChance: 61,
materials: [
{ id: 'silver_ingot', quantity: 4 },
{ id: 'royal_wax', quantity: 2 },
{ id: 'silk_thread', quantity: 1 }
]
},

// King of Tombs 5.6%
tomb_king_khopesh: {
id: 'tomb_king_khopesh',
name: 'Tomb-King Khopesh',
type: 'smithing',
icon: '⚱️',
description: 'Curved bronze khopesh; on kill, target corpse animated 1 round (no control).',
levelRequirement: 9,
craftTime: 20,
wildcard: true,
successChance: 46,
materials: [
{ id: 'bronze_ingot', quantity: 5 },
{ id: 'pharaoh_ash', quantity: 3 },
{ id: 'black_onyx_powder', quantity: 2 }
]
},

// Lemuria Conclave 0.6%
lemurian_echo_trident: {
id: 'lemurian_echo_trident',
name: 'Lemurian Echo Trident',
type: 'smithing',
icon: '🔱',
description: 'Sea-bronze trident; strikes echo 1d6 thunder 1 round later.',
levelRequirement: 8,
craftTime: 18,
wildcard: true,
successChance: 49,
materials: [
{ id: 'sea_bronze', quantity: 6 },
{ id: 'echo_crystal', quantity: 2 },
{ id: 'pearl_dust', quantity: 2 }
]
},

// Empire Man 0.5%
empire_man_trench_blade: {
id: 'empire_man_trench_blade',
name: 'Empire-Man Trench Blade',
type: 'smithing',
icon: '🪖',
description: 'Short sword-bayonet; +1d4 piercing vs prone or restrained targets.',
levelRequirement: 4,
craftTime: 10,
wildcard: true,
successChance: 63,
materials: [
{ id: 'steel_ingot', quantity: 4 },
{ id: 'gun_oil', quantity: 2 },
{ id: 'leather_strip', quantity: 1 }
]
},

// Grand Cathay 0.4%
cathayan_dragon_scale_mail: {
id: 'cathayan_dragon_scale_mail',
name: 'Cathayan Dragon-Scale Mail',
type: 'smithing',
icon: '🐉',
description: 'Mail of jade-steel scales; resistance to fire, vulnerability to cold.',
levelRequirement: 12,
craftTime: 26,
wildcard: true,
successChance: 38,
materials: [
{ id: 'jade_steel_ingot', quantity: 10 },
{ id: 'dragon_scale', quantity: 6 },
{ id: 'silk_thread', quantity: 4 }
]
},

// Mu Empire 0.5%
muan_serpent_chain: {
id: 'muan_serpent_chain',
name: 'Muan Serpent Chain',
type: 'smithing',
icon: '🐍',
description: 'Flexible chain-whip; reach 15 ft, can disarm (contested STR).',
levelRequirement: 7,
craftTime: 16,
wildcard: true,
successChance: 53,
materials: [
{ id: 'bronze_ingot', quantity: 5 },
{ id: 'serpent_scale', quantity: 4 },
{ id: 'spring_mechanism', quantity: 2 }
]
},

// Mages' Guild 0.4%
guild_spell_focus_rod: {
id: 'guild_spell_focus_rod',
name: 'Guild Spell-Focus Rod',
type: 'smithing',
icon: '🪄',
description: 'Hollow rod; slot crystal to gain +1 spell hit (consumes crystal).',
levelRequirement: 6,
craftTime: 14,
wildcard: true,
successChance: 57,
materials: [
{ id: 'silver_ingot', quantity: 3 },
{ id: 'arcane_crystal', quantity: 2 },
{ id: 'runestone', quantity: 1 }
]
},

// Data Merchant 0.3%
data_merchant_qubit_blade: {
id: 'data_merchant_qubit_blade',
name: 'Data-Merchant Qubit Blade',
type: 'smithing',
icon: '💾',
description: 'Edge phases 1% per hit; after 100 hits becomes ethereal for 1 hour.',
levelRequirement: 8,
craftTime: 18,
wildcard: true,
successChance: 48,
materials: [
{ id: 'quantum_shard', quantity: 3 },
{ id: 'light_steel_alloy', quantity: 4 },
{ id: 'data_crystal', quantity: 2 }
]
},

// Changeling Hive 0.6%
hive_morph_blade: {
id: 'hive_morph_blade',
name: 'Hive-Morph Blade',
type: 'smithing',
icon: '🧬',
description: 'Changes shape (dagger/shortsword/whip) as bonus action; 5% chance to stick mid-shift.',
levelRequirement: 7,
craftTime: 16,
wildcard: true,
successChance: 52,
materials: [
{ id: 'changeling_tear', quantity: 4 },
{ id: 'living_crystal', quantity: 3 },
{ id: 'silver_ingot', quantity: 2 }
]
},

// Cybernetic 0.3%
cybernetic_arm_blade: {
id: 'cybernetic_arm_blade',
name: 'Cybernetic Arm-Blade',
type: 'smithing',
icon: '🦾',
description: 'Replaces forearm; retractable +2 hit, but critical fail deals 1d8 to self.',
levelRequirement: 9,
craftTime: 20,
wildcard: true,
successChance: 45,
materials: [
{ id: 'light_steel_alloy', quantity: 5 },
{ id: 'battery_core', quantity: 3 },
{ id: 'gear_mechanism', quantity: 4 }
]
},

// The Onyx Hand 0.5%
onyx_hand_claw: {
id: 'onyx_hand_claw',
name: 'Onyx Hand Claw',
type: 'smithing',
icon: '🖤',
description: 'Black-iron claw; advantage on grapple, 1/day cast Darkness centered on self.',
levelRequirement: 8,
craftTime: 17,
wildcard: true,
successChance: 49,
materials: [
{ id: 'black_iron_ingot', quantity: 4 },
{ id: 'shadow_essence', quantity: 3 },
{ id: 'onyx_shard', quantity: 4 }
]
},

// Kingdoms Dwarves 0.6%
dwarven_ironbreaker_hammer: {
id: 'dwarven_ironbreaker_hammer',
name: 'Dwarven Ironbreaker Hammer',
type: 'smithing',
icon: '🔨',
description: 'Massive hammer; ignores object AC, deals double dmg to constructs/structures.',
levelRequirement: 10,
craftTime: 22,
wildcard: true,
successChance: 44,
materials: [
{ id: 'adamantine_shard', quantity: 6 },
{ id: 'runestone', quantity: 2 },
{ id: 'dwarven_ale', quantity: 1 }
]
},

// Greenskins 0.4%
greenskin_waaagh_cleaver: {
id: 'greenskin_waaagh_cleaver',
name: 'Greenskin WAAAGH! Cleaver',
type: 'smithing',
icon: '💚',
description: 'Orkish cleaver; +1d6 dmg while shouting, breaks on nat 1 (can be re-forged).',
levelRequirement: 5,
craftTime: 10,
wildcard: true,
successChance: 62,
materials: [
{ id: 'scrap_iron', quantity: 8 },
{ id: 'fungus_spore', quantity: 3 },
{ id: 'rage_gem', quantity: 1 }
]
},

// Jotunheimr 0.4%
jotun_frost_greatclub: {
id: 'jotun_frost_greatclub',
name: 'Jotun Frost Greatclub',
type: 'smithing',
icon: '❄️',
description: 'Frost-giant sized club; deals 2d8 cold on crit, wielder needs STR 17.',
levelRequirement: 11,
craftTime: 24,
wildcard: true,
successChance: 41,
materials: [
{ id: 'frost_essence', quantity: 5 },
{ id: 'giant_bone', quantity: 4 },
{ id: 'runestone', quantity: 2 }
]
},

// High Elves 0.3%
high_elven_starblade: {
id: 'high_elven_starblade',
name: 'High Elven Starblade',
type: 'smithing',
icon: '✨',
description: 'Star-metal longsword; sheds dim starlight, +1 to hit at night.',
levelRequirement: 12,
craftTime: 26,
wildcard: true,
successChance: 39,
materials: [
{ id: 'star_metal', quantity: 5 },
{ id: 'mithril_ingot', quantity: 2 },
{ id: 'silverleaf', quantity: 3 }
]
},

// Dark Elves 0.3%
dark_elven_shadow_falchion: {
id: 'dark_elven_shadow_falchion',
name: 'Dark Elven Shadow Falchion',
type: 'smithing',
icon: '🌑',
description: 'Curved blade; grants +10 ft move in dim light, disadvantage in sunlight.',
levelRequirement: 10,
craftTime: 22,
wildcard: true,
successChance: 42,
materials: [
{ id: 'shadow_steel', quantity: 4 },
{ id: 'shadow_essence', quantity: 4 },
{ id: 'onyx_shard', quantity: 3 }
]
},

// Trainer Guild 0.6%
trainer_whistle_blade: {
id: 'trainer_whistle_blade',
name: 'Trainer Whistle Blade',
type: 'smithing',
icon: '🐾',
description: 'Shortsword with hollow fuller; whistle as bonus action to command beasts (DC 15).',
levelRequirement: 4,
craftTime: 10,
wildcard: true,
successChance: 64,
materials: [
{ id: 'steel_ingot', quantity: 3 },
{ id: 'beast_essence', quantity: 2 },
{ id: 'wind_crystal', quantity: 1 }
]
},

// Crimision Isle 0.4%
crimison_blood_saber: {
id: 'crimison_blood_saber',
name: 'Crimison Blood Saber',
type: 'smithing',
icon: '🩸',
description: 'Crimson steel; user may spend 5 HP to add +1d6 necrotic to hit.',
levelRequirement: 7,
craftTime: 16,
wildcard: true,
successChance: 54,
materials: [
{ id: 'crimson_steel', quantity: 4 },
{ id: 'blood_ink', quantity: 3 },
{ id: 'cursed_bone', quantity: 2 }
]
},

// Blessed Order 0.3%
blessed_sun_flail: {
id: 'blessed_sun_flail',
name: 'Blessed Sun Flail',
type: 'smithing',
icon: '☀️',
description: 'Radiant-head flail; undead hit glow (disadvantage on stealth) 1 minute.',
levelRequirement: 8,
craftTime: 17,
wildcard: true,
successChance: 51,
materials: [
{ id: 'sun_crystal', quantity: 3 },
{ id: 'steel_ingot', quantity: 4 },
{ id: 'holy_water', quantity: 2 }
]
},

// Sirsirian Ocean 0.4%
sirsirian_coral_trident: {
id: 'sirsirian_coral_trident',
name: 'Sirsirian Coral Trident',
type: 'smithing',
icon: '🌊',
description: 'Living coral prongs; regrow if broken, advantage underwater.',
levelRequirement: 6,
craftTime: 14,
wildcard: true,
successChance: 58,
materials: [
{ id: 'living_coral', quantity: 5 },
{ id: 'sea_bronze', quantity: 3 },
{ id: 'kelp_sac', quantity: 2 }
]
},

// Saddle Arabia 0.3%
saddle_arabian_scimitar: {
id: 'saddle_arabian_scimitar',
name: 'Saddle Arabian Scimitar',
type: 'smithing',
icon: '🐪',
description: 'Curved desert blade; +1d4 slashing while mounted or charging.',
levelRequirement: 5,
craftTime: 12,
wildcard: true,
successChance: 61,
materials: [
{ id: 'steel_ingot', quantity: 4 },
{ id: 'horsehair_tassel', quantity: 2 },
{ id: 'desert_salt', quantity: 3 }
]
},

// Ratchet Raiders 0.3%
ratchet_junklauncher: {
id: 'ratchet_junk_launcher',
name: 'Ratchet Junk Launcher',
type: 'smithing',
icon: '🔧',
description: 'Shoulder mortar; fires random scrap (1d10 bludgeoning/piercing/slashing).',
levelRequirement: 6,
craftTime: 15,
wildcard: true,
successChance: 56,
materials: [
{ id: 'scrap_iron', quantity: 8 },
{ id: 'gear_mechanism', quantity: 3 },
{ id: 'volatile_crystal', quantity: 1 }
]
},

// Wario Land 0.3%
wario_goldpiledriver_glove: {
id: 'wario_gold_piledriver_glove',
name: 'Wario Gold-Piledriver Glove',
type: 'smithing',
icon: '💰',
description: 'Oversized glove; coins picked up add +1 dmg next hit (max +10, resets on miss).',
levelRequirement: 7,
craftTime: 16,
wildcard: true,
successChance: 54,
materials: [
{ id: 'gold_ingot', quantity: 5 },
{ id: 'lead_ingot', quantity: 2 },
{ id: 'spring_mechanism', quantity: 3 }
]
},

// Millennium 0.3%
millennium_clockwork_blade: {
id: 'millennium_clockwork_blade',
name: 'Millennium Clockwork Blade',
type: 'smithing',
icon: '⏰',
description: 'Ticks louder each hour; at 12th hour deals +2d12 radiant, then resets.',
levelRequirement: 9,
craftTime: 20,
wildcard: true,
successChance: 47,
materials: [
{ id: 'clockwork_gear', quantity: 6 },
{ id: 'star_metal', quantity: 3 },
{ id: 'sun_crystal', quantity: 2 }
]
},

// Apis Kingdom 0.3%
apis_bee_sting_rapier: {
id: 'apis_bee_sting_rapier',
name: 'Apis Bee-Sting Rapier',
type: 'smithing',
icon: '🐝',
description: 'Needle-thin blade; injects poison (DC 13, 1d6 poison/round 3 rounds).',
levelRequirement: 5,
craftTime: 12,
wildcard: true,
successChance: 62,
materials: [
{ id: 'silver_ingot', quantity: 3 },
{ id: 'venom_sac', quantity: 3 },
{ id: 'bee_wax', quantity: 2 }
]
},

// Lizardmen 0.3%
lizardmen_obsidian_club: {
id: 'lizardmen_obsidian_club',
name: 'Lizardmen Obsidian Club',
type: 'smithing',
icon: '🦎',
description: 'Volcanic-glass edge; crits deal extra 1d8 slashing, shatters on nat 1.',
levelRequirement: 4,
craftTime: 10,
wildcard: true,
successChance: 65,
materials: [
{ id: 'obsidian_shard', quantity: 4 },
{ id: 'iron_ingot', quantity: 2 },
{ id: 'vine_wrapping', quantity: 2 }
]
},

// Kingdom 0.3%
kingdom_crown_sword: {
id: 'kingdom_crown_sword',
name: 'Kingdom Crown Sword',
type: 'smithing',
icon: '👑',
description: 'Longsword with crown-guard; advantage on social checks vs subjects.',
levelRequirement: 8,
craftTime: 18,
wildcard: true,
successChance: 52,
materials: [
{ id: 'gold_inlay', quantity: 3 },
{ id: 'folded_steel_ingot', quantity: 4 },
{ id: 'royal_wax', quantity: 2 }
]
},

// Trinity General 0.3%
trinity_generals_tactician_blade: {
id: 'trinity_generals_tactician_blade',
name: 'Trinity General’s Tactician Blade',
type: 'smithing',
icon: '📜',
description: 'Short sword + hidden compass; +1 Initiative, advantage on Battle-craft checks.',
levelRequirement: 6,
craftTime: 14,
wildcard: true,
successChance: 58,
materials: [
{ id: 'steel_ingot', quantity: 3 },
{ id: 'compass_needle', quantity: 1 },
{ id: 'inkroot', quantity: 2 }
]
},

// Pitatia 0.4%
pitatian_sunfire_cutlass: {
id: 'pitatian_sunfire_cutlass',
name: 'Pitatian Sunfire Cutlass',
type: 'smithing',
icon: '☀️',
description: 'Mirror-bright blade; focus sunlight (bonus action) for +1d6 fire next hit.',
levelRequirement: 7,
craftTime: 16,
wildcard: true,
successChance: 55,
materials: [
{ id: 'mirror_steel', quantity: 4 },
{ id: 'sun_crystal', quantity: 2 },
{ id: 'golden_spice', quantity: 2 }
]
},

// Crimson Fleet 0.3%
crimson_fleet_boarding_axe: {
id: 'crimson_fleet_boarding_axe',
name: 'Crimson Fleet Boarding Axe',
type: 'smithing',
icon: '🪓',
description: 'Hook-backed axe; advantage on climbing, +1d4 dmg when swinging onto decks.',
levelRequirement: 5,
craftTime: 12,
wildcard: true,
successChance: 62,
materials: [
{ id: 'steel_ingot', quantity: 4 },
{ id: 'iron_hook', quantity: 2 },
{ id: 'sea_salt', quantity: 3 }
]
},

// Scylla Charybdis 0.4%
scylla_charybdis_twin_hook: {
id: 'scylla_charybdis_twin_hook',
name: 'Scylla & Charybdis Twin Hook',
type: 'smithing',
icon: '🌀',
description: 'Matched hooks; whirlwind attack (5-ft radius) once per short rest.',
levelRequirement: 10,
craftTime: 20,
wildcard: true,
successChance: 45,
materials: [
{ id: 'sea_bronze', quantity: 5 },
{ id: 'whale_bone', quantity: 2 },
{ id: 'storm_essence', quantity: 3 }
]
},
    freelancer_adaptive_blade: {
        id: 'freelancer_adaptive_blade',
        name: 'Freelancer Adaptive Blade',
        type: 'smithing',
        icon: '🗡️',
        description: 'A modular longsword favored by Freelancers, balanced for any fighting style.',
        levelRequirement: 8,
        craftTime: 18,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'steel_ingot', quantity: 8 },
            { id: 'mithril_ingot', quantity: 2 },
            { id: 'leather_strip', quantity: 3 },
            { id: 'runestone', quantity: 1 }
        ]
    },

    mordor_spike_mail: {
        id: 'mordor_spike_mail',
        name: 'Mordor Spikemail',
        type: 'smithing',
        icon: '⛓️',
        description: 'Cruel black chain with hooked spikes, favored in the Land of Mordor.',
        levelRequirement: 9,
        craftTime: 20,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'obsidian_shard', quantity: 6 },
            { id: 'steel_ingot', quantity: 8 },
            { id: 'black_onyx_powder', quantity: 2 },
            { id: 'leather_strip', quantity: 4 }
        ]
    },

    asgardian_storm_hammer: {
        id: 'asgardian_storm_hammer',
        name: 'Asgardian Storm Hammer',
        type: 'smithing',
        icon: '⚡',
        description: 'A thunder-forged warhammer said to echo with the storms of Asgard.',
        levelRequirement: 11,
        craftTime: 24,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'star_metal', quantity: 3 },
            { id: 'steel_ingot', quantity: 10 },
            { id: 'storm_essence', quantity: 3 },
            { id: 'leather_strip', quantity: 3 }
        ]
    },

    gondor_white_tower_shield: {
        id: 'gondor_white_tower_shield',
        name: 'White Tower Shield of Gondor',
        type: 'smithing',
        icon: '🛡️',
        description: 'A pristine tower shield bearing the White Tree, emblem of Kingdom Gondor.',
        levelRequirement: 10,
        craftTime: 22,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'steel_ingot', quantity: 12 },
            { id: 'silver_ingot', quantity: 2 },
            { id: 'gondor_emblem', quantity: 1 },
            { id: 'leather_strip', quantity: 4 }
        ]
    },

    regal_empire_cavalry_lance: {
        id: 'regal_empire_cavalry_lance',
        name: 'Regal Empire Cavalry Lance',
        type: 'smithing',
        icon: '📏',
        description: 'A long, ornate lance used by heavy cavalry of the Regal Empire.',
        levelRequirement: 7,
        craftTime: 14,
        wildcard: true,
        successChance: 68,
        materials: [
            { id: 'steel_ingot', quantity: 6 },
            { id: 'ash_wood', quantity: 3 },
            { id: 'gold_inlay', quantity: 1 },
            { id: 'leather_strip', quantity: 2 }
        ]
    },

    koopa_shell_shield: {
        id: 'koopa_shell_shield',
        name: 'Koopa Troop Shell Shield',
        type: 'smithing',
        icon: '🐢',
        description: 'A sturdy shield fashioned around a hardened Koopa shell.',
        levelRequirement: 6,
        craftTime: 12,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'koopa_shell', quantity: 1 },
            { id: 'steel_ingot', quantity: 4 },
            { id: 'leather_strip', quantity: 3 }
        ]
    },

    equestrian_sky_lance: {
        id: 'equestrian_sky_lance',
        name: 'Equestrian Sky Lance',
        type: 'smithing',
        icon: '🦄',
        description: 'A lightweight lance used by Equestrian knights from the back of flying mounts.',
        levelRequirement: 8,
        craftTime: 16,
        wildcard: true,
        successChance: 65,
        materials: [
            { id: 'sky_silver_ingot', quantity: 3 },
            { id: 'yew_wood', quantity: 3 },
            { id: 'rainbow_petal', quantity: 2 },
            { id: 'leather_strip', quantity: 2 }
        ]
    },

    iron_legion_power_gauntlet: {
        id: 'iron_legion_power_gauntlet',
        name: 'Iron Legion Power Gauntlet',
        type: 'smithing',
        icon: '🧤',
        description: 'Reinforced gauntlets used by the Iron Legion to deliver crushing blows.',
        levelRequirement: 9,
        craftTime: 18,
        wildcard: true,
        successChance: 58,
        materials: [
            { id: 'steel_ingot', quantity: 8 },
            { id: 'adamantine_shard', quantity: 2 },
            { id: 'leather_strip', quantity: 4 }
        ]
    },

    skycaverns_windforged_blade: {
        id: 'skycaverns_windforged_blade',
        name: 'Skycaverns Windforged Blade',
        type: 'smithing',
        icon: '🌬️',
        description: 'A curved blade forged in the high aeries of Skycaverns, as light as air.',
        levelRequirement: 9,
        craftTime: 18,
        wildcard: true,
        successChance: 60,
        materials: [
            { id: 'sky_silver_ingot', quantity: 4 },
            { id: 'mithril_ingot', quantity: 2 },
            { id: 'zephyr_feather', quantity: 3 },
            { id: 'leather_strip', quantity: 2 }
        ]
    },

    garden_isles_bloomscythe: {
        id: 'garden_isles_bloomscythe',
        name: 'Garden Isles Bloomscythe',
        type: 'smithing',
        icon: '🌸',
        description: 'A graceful scythe whose edge is intertwined with living vines from the Garden Isles.',
        levelRequirement: 8,
        craftTime: 16,
        wildcard: true,
        successChance: 63,
        materials: [
            { id: 'steel_ingot', quantity: 5 },
            { id: 'ancient_bark', quantity: 3 },
            { id: 'blossom_pollen', quantity: 3 },
            { id: 'leather_strip', quantity: 2 }
        ]
    },

    polybius_glitch_blade: {
        id: 'polybius_glitch_blade',
        name: 'Polybius Glitch Blade',
        type: 'smithing',
        icon: '🌀',
        description: 'An unstable sword from Polybius, its edge flickers as if out of sync with reality.',
        levelRequirement: 12,
        craftTime: 24,
        wildcard: true,
        successChance: 45,
        materials: [
            { id: 'void_crystal', quantity: 3 },
            { id: 'corrupted_data', quantity: 4 },
            { id: 'mithril_ingot', quantity: 3 },
            { id: 'runestone', quantity: 2 }
        ]
    },

    servants_cosmic_starmace: {
        id: 'servants_cosmic_starmace',
        name: 'Servants Cosmic Star Mace',
        type: 'smithing',
        icon: '☄️',
        description: 'A heavy mace inlaid with starmetal, wielded by the Servants Cosmic.',
        levelRequirement: 11,
        craftTime: 22,
        wildcard: true,
        successChance: 52,
        materials: [
            { id: 'star_metal', quantity: 3 },
            { id: 'steel_ingot', quantity: 7 },
            { id: 'stardust', quantity: 3 },
            { id: 'leather_strip', quantity: 3 }
        ]
    },

    king_of_tombs_sandscythe: {
        id: 'king_of_tombs_sandscythe',
        name: 'King of Tombs Sandscythe',
        type: 'smithing',
        icon: '⚱️',
        description: 'A wicked scythe associated with the King of Tombs, its blade etched with funerary glyphs.',
        levelRequirement: 12,
        craftTime: 26,
        wildcard: true,
        successChance: 48,
        materials: [
            { id: 'obsidian_shard', quantity: 8 },
            { id: 'ancient_pharaoh_gold', quantity: 2 },
            { id: 'cursed_bone', quantity: 4 },
            { id: 'leather_strip', quantity: 3 }
        ]
    },

    grand_cathay_dragon_halberd: {
        id: 'grand_cathay_dragon_halberd',
        name: 'Grand Cathay Dragon Halberd',
        type: 'smithing',
        icon: '🐉',
        description: 'An ornate halberd from Grand Cathay, its blade shaped like a dragon’s fang.',
        levelRequirement: 10,
        craftTime: 20,
        wildcard: true,
        successChance: 58,
        materials: [
            { id: 'steel_ingot', quantity: 8 },
            { id: 'jade_ingot', quantity: 3 },
            { id: 'dragon_bone', quantity: 1 },
            { id: 'silk_wrapping', quantity: 2 }
        ]
    },

    chaos_dwarf_hellforge_plate: {
        id: 'chaos_dwarf_hellforge_plate',
        name: 'Chaos Dwarfs Hellforge Plate',
        type: 'smithing',
        icon: '🔥',
        description: 'Twisted black plate armor from the Chaos Dwarfs, warm to the touch.',
        levelRequirement: 13,
        craftTime: 30,
        wildcard: true,
        successChance: 42,
        materials: [
            { id: 'obsidian_shard', quantity: 10 },
            { id: 'chaos_coal', quantity: 4 },
            { id: 'steel_ingot', quantity: 10 },
            { id: 'leather_strip', quantity: 6 }
        ]
    },

    spark_rebellion_arc_saber: {
        id: 'spark_rebellion_arc_saber',
        name: 'Spark Rebellion Arc Saber',
        type: 'smithing',
        icon: '⚡️',
        description: 'A high-energy blade fielded by the Spark Rebellion, crackling with stored power.',
        levelRequirement: 11,
        craftTime: 24,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'steel_ingot', quantity: 6 },
            { id: 'battery_core', quantity: 2 },
            { id: 'storm_essence', quantity: 3 },
            { id: 'mithril_ingot', quantity: 2 }
        ]
    },

    void_drifters_phase_spear: {
        id: 'void_drifters_phase_spear',
        name: 'Void Drifters Phase Spear',
        type: 'smithing',
        icon: '🌌',
        description: 'A spear of the Void Drifters that seems half present, half elsewhere.',
        levelRequirement: 12,
        craftTime: 26,
        wildcard: true,
        successChance: 47,
        materials: [
            { id: 'void_crystal', quantity: 4 },
            { id: 'mithril_ingot', quantity: 3 },
            { id: 'ash_wood', quantity: 2 },
            { id: 'runestone', quantity: 2 }
        ]
    },

    knights_gilded_parade_plate: {
        id: 'knights_gilded_parade_plate',
        name: 'Knights Gilded Parade Plate',
        type: 'smithing',
        icon: '🥇',
        description: 'Resplendent golden armor worn by the Knights Gilded during ceremonies and war alike.',
        levelRequirement: 10,
        craftTime: 24,
        wildcard: true,
        successChance: 55,
        materials: [
            { id: 'steel_ingot', quantity: 12 },
            { id: 'gold_ingot', quantity: 4 },
            { id: 'silk_wrapping', quantity: 4 },
            { id: 'leather_strip', quantity: 4 }
        ]
    },

    vampire_covenant_crimson_rapier: {
        id: 'vampire_covenant_crimson_rapier',
        name: 'Vampire Covenant Crimson Rapier',
        type: 'smithing',
        icon: '🩸',
        description: 'A blood-channeling rapier used by the Vampire Covenant.',
        levelRequirement: 11,
        craftTime: 22,
        wildcard: true,
        successChance: 52,
        materials: [
            { id: 'mithril_ingot', quantity: 3 },
            { id: 'silver_ingot', quantity: 2 },
            { id: 'vampire_ichor', quantity: 3 },
            { id: 'leather_strip', quantity: 2 }
        ]
    },

    crimson_fleet_corsair_cutlass: {
        id: 'crimson_fleet_corsair_cutlass',
        name: 'Crimson Fleet Corsair Cutlass',
        type: 'smithing',
        icon: '🏴‍☠️',
        description: 'A rugged cutlass favored by captains of the Crimson Fleet.',
        levelRequirement: 7,
        craftTime: 14,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'steel_ingot', quantity: 5 },
            { id: 'sea_salt', quantity: 3 },
            { id: 'oak_wood', quantity: 1 },
            { id: 'leather_strip', quantity: 2 }
        ]
    },

    shadow_weave_cloak: {
        id: 'shadow_weave_cloak',
        name: 'Shadow-Weave Cloak',
        type: 'smithing',
        icon: '🧥🌑',
        description: 'Woven with shadow silk. Advantage on Stealth in dim light.',
        levelRequirement: 6,
        craftTime: 12,
        wildcard: true,
        successChance: 70,
        materials: [
            { id: 'shadow_silk', quantity: 6 },
            { id: 'spider_silk', quantity: 4 },
            { id: 'dyed_cloth', quantity: 2 }
        ]
    },
    phoenix_gauntlets: {
        id: 'phoenix_gauntlets',
        name: 'Phoenix Gauntlets',
        type: 'smithing',
        icon: '🧤🔥',
        description: 'Ignite on command (1d6 fire/round for 1 min). Cannot be disarmed by fire.',
        levelRequirement: 10,
        craftTime: 20,
        wildcard: true,
        successChance: 50,
        materials: [
            { id: 'phoenix_feather', quantity: 2 },
            { id: 'fire_essence', quantity: 4 },
            { id: 'adamantine_shard', quantity: 3 }
        ]
    },
};
export const CRAFTING_CONFIG = {
    maxQueueSlots: 3,
    partyLevel: 6,
    
    timeModifiers: {
        dawn: { crafting: 1.0, enchanting: 0.9, alchemy: 1.1 },
        day: { crafting: 1.0, enchanting: 1.0, alchemy: 1.0 },
        dusk: { crafting: 1.0, enchanting: 1.1, alchemy: 0.95 },
        night: { crafting: 1.2, enchanting: 0.8, alchemy: 1.0, scrolls: 0.9 }
    },
    
    scrollBaseTime: {
        0: 2, 1: 4, 2: 8, 3: 16, 4: 32, 5: 64, 6: 128, 7: 256, 8: 512, 9: 1024
    },
    
    scrollBaseCost: {
        0: 15, 1: 25, 2: 75, 3: 150, 4: 300, 5: 750, 6: 1500, 7: 3000, 8: 6000, 9: 12500
    },
    
    successBase: 85,
    successPerProficiencyLevel: 5,
    successPenaltyPerSpellLevelAboveHalf: 5,
    
    craftingXP: {
        0: 5, 1: 10, 2: 25, 3: 50, 4: 100, 5: 200, 6: 400, 7: 800, 8: 1600, 9: 3200
    }
};

// ============================================
// === MATERIALS DATABASE ===
// ============================================

export const MATERIALS = {
    // Scroll Materials
    blank_parchment: {
        id: 'blank_parchment',
        name: 'Blank Parchment',
        icon: '📜',
        category: 'scroll',
        rarity: 'common',
        cost: 5,
        description: 'High-quality vellum for magical inscription.'
    },
    fine_parchment: {
        id: 'fine_parchment',
        name: 'Fine Parchment',
        icon: '📜',
        category: 'scroll',
        rarity: 'uncommon',
        cost: 25,
        description: 'Premium vellum for complex magical workings.'
    },
    enchanted_vellum: {
        id: 'enchanted_vellum',
        name: 'Enchanted Vellum',
        icon: '📜',
        category: 'scroll',
        rarity: 'rare',
        cost: 100,
        description: 'Magically prepared vellum for powerful enchantments.'
    },
    enchanted_ink: {
        id: 'enchanted_ink',
        name: 'Enchanted Ink',
        icon: '🖋️',
        category: 'scroll',
        rarity: 'uncommon',
        cost: 25,
        description: 'Ink infused with magical essence.'
    },
    arcane_ink: {
        id: 'arcane_ink',
        name: 'Arcane Ink',
        icon: '🖋️',
        category: 'scroll',
        rarity: 'rare',
        cost: 75,
        description: 'Powerful magical ink for complex inscriptions.'
    },
    arcane_quill: {
        id: 'arcane_quill',
        name: 'Arcane Quill',
        icon: '🪶',
        category: 'scroll',
        rarity: 'rare',
        cost: 100,
        description: 'A magical quill that channels arcane energy. Reusable.'
    },
    spell_focus_dust: {
        id: 'spell_focus_dust',
        name: 'Spell Focus Dust',
        icon: '✨',
        category: 'scroll',
        rarity: 'uncommon',
        cost: 15,
        description: 'Powdered crystals that stabilize magical inscriptions.'
    },
    arcane_powder: {
        id: 'arcane_powder',
        name: 'Arcane Powder',
        icon: '💫',
        category: 'scroll',
        rarity: 'rare',
        cost: 50,
        description: 'Highly refined magical dust for powerful scrolls.'
    },
    
    // Potion Materials
    empty_vial: {
        id: 'empty_vial',
        name: 'Empty Vial',
        icon: '🧪',
        category: 'potion',
        rarity: 'common',
        cost: 2,
        description: 'A sturdy glass vial for holding potions.'
    },
    reinforced_flask: {
        id: 'reinforced_flask',
        name: 'Reinforced Flask',
        icon: '⚗️',
        category: 'potion',
        rarity: 'uncommon',
        cost: 10,
        description: 'A thick glass flask for volatile mixtures.'
    },
    crystal_phial: {
        id: 'crystal_phial',
        name: 'Crystal Phial',
        icon: '💎',
        category: 'potion',
        rarity: 'rare',
        cost: 50,
        description: 'A perfectly clear crystal container for rare potions.'
    },
    spring_water: {
        id: 'spring_water',
        name: 'Pure Spring Water',
        icon: '💧',
        category: 'potion',
        rarity: 'common',
        cost: 1,
        description: 'Clean water from a natural spring.'
    },
    moonwell_water: {
        id: 'moonwell_water',
        name: 'Moonwell Water',
        icon: '💧',
        category: 'potion',
        rarity: 'uncommon',
        cost: 20,
        description: 'Pure water blessed by moonlight.'
    },
    // --- Smithing & Enchanting Materials ---
    arcane_dust: {
        id: 'arcane_dust',
        name: 'Arcane Dust',
        icon: '✨',
        category: 'enchanting',
        rarity: 'common',
        cost: 15,
        description: 'Residue from disenchanted magical items.'
    },
    iron_ingot: {
        id: 'iron_ingot',
        name: 'Iron Ingot',
        icon: '🧱',
        category: 'smithing',
        rarity: 'common',
        cost: 10,
        description: 'A standard bar of smelted iron.'
    },
    steel_ingot: {
        id: 'steel_ingot',
        name: 'Steel Ingot',
        icon: '🥈',
        category: 'smithing',
        rarity: 'uncommon',
        cost: 35,
        description: 'Refined iron treated with carbon for strength.'
    },
    leather_strip: {
        id: 'leather_strip',
        name: 'Leather Strip',
        icon: '🧵',
        category: 'smithing',
        rarity: 'common',
        cost: 5,
        description: 'Tough leather bindings for hilts and armor.'
    },
    whetstone: {
        id: 'whetstone',
        name: 'Whetstone',
        icon: '🌑',
        category: 'smithing',
        rarity: 'common',
        cost: 2,
        description: 'A stone used for sharpening blades.'
    },    
    healing_herbs: {
        id: 'healing_herbs',
        name: 'Healing Herbs',
        icon: '🌿',
        category: 'potion',
        rarity: 'common',
        cost: 10,
        description: 'A bundle of medicinal herbs.'
    },
    silverleaf: {
        id: 'silverleaf',
        name: 'Silverleaf',
        icon: '🍃',
        category: 'potion',
        rarity: 'uncommon',
        cost: 30,
        description: 'A rare herb with silvery leaves.'
    },
    bloodmoss: {
        id: 'bloodmoss',
        name: 'Bloodmoss',
        icon: '🩸',
        category: 'potion',
        rarity: 'rare',
        cost: 75,
        description: 'Red moss from places of violence.'
    },
    nightshade: {
        id: 'nightshade',
        name: 'Nightshade',
        icon: '🌑',
        category: 'potion',
        rarity: 'uncommon',
        cost: 25,
        description: 'A deadly plant with many alchemical uses.'
    },
    mandrake_root: {
        id: 'mandrake_root',
        name: 'Mandrake Root',
        icon: '🫚',
        category: 'potion',
        rarity: 'rare',
        cost: 100,
        description: 'A screaming root with powerful magical properties.'
    },
    
    // Essences
    fire_essence: {
        id: 'fire_essence',
        name: 'Fire Essence',
        icon: '🔥',
        category: 'essence',
        rarity: 'rare',
        cost: 75,
        description: 'Captured elemental fire energy.'
    },
    frost_essence: {
        id: 'frost_essence',
        name: 'Frost Essence',
        icon: '❄️',
        category: 'essence',
        rarity: 'rare',
        cost: 75,
        description: 'Captured elemental cold energy.'
    },
    lightning_essence: {
        id: 'lightning_essence',
        name: 'Lightning Essence',
        icon: '⚡',
        category: 'essence',
        rarity: 'rare',
        cost: 75,
        description: 'Captured elemental lightning energy.'
    },
    shadow_essence: {
        id: 'shadow_essence',
        name: 'Shadow Essence',
        icon: '🌑',
        category: 'essence',
        rarity: 'rare',
        cost: 100,
        description: 'Distilled darkness from the Shadowfell.'
    },
    radiant_essence: {
        id: 'radiant_essence',
        name: 'Radiant Essence',
        icon: '☀️',
        category: 'essence',
        rarity: 'rare',
        cost: 100,
        description: 'Crystallized divine light.'
    },
    
    // Enchanting Materials
    arcane_crystal: {
        id: 'arcane_crystal',
        name: 'Arcane Crystal',
        icon: '💎',
        category: 'enchanting',
        rarity: 'rare',
        cost: 150,
        description: 'A crystal pulsing with raw magical energy.'
    },
    soul_shard: {
        id: 'soul_shard',
        name: 'Soul Shard',
        icon: '👻',
        category: 'enchanting',
        rarity: 'rare',
        cost: 200,
        description: 'A fragment of spiritual energy.'
    },
    runestone: {
        id: 'runestone',
        name: 'Runestone',
        icon: '🪨',
        category: 'enchanting',
        rarity: 'uncommon',
        cost: 50,
        description: 'A stone naturally marked with ancient runes.'
    },
// ========== BASIC CRAFTING SUPPLIES ==========
'wax_seal': {
    id: 'wax_seal',
    name: 'Wax Seal',
    icon: '🔴',
    category: 'general',
    rarity: 'common',
    cost: 1,
    description: 'A small stick of red sealing wax for documents.'
},

'parchment_scrap': {
    id: 'parchment_scrap',
    name: 'Parchment Scrap',
    icon: '📄',
    category: 'general',
    rarity: 'common',
    cost: 2,
    description: 'Small pieces of parchment useful for notes or patching.'
},

'chalk_piece': {
    id: 'chalk_piece',
    name: 'Chalk Piece',
    icon: '⚪',
    category: 'general',
    rarity: 'common',
    cost: 1,
    description: 'A small piece of white chalk for marking surfaces.'
},

'charcoal_stick': {
    id: 'charcoal_stick',
    name: 'Charcoal Stick',
    icon: '⚫',
    category: 'general',
    rarity: 'common',
    cost: 2,
    description: 'A stick of charcoal for drawing or writing.'
},

'string_ball': {
    id: 'string_ball',
    name: 'String Ball',
    icon: '🧶',
    category: 'general',
    rarity: 'common',
    cost: 3,
    description: 'A small ball of sturdy string, about 10 feet long.'
},

'needle_set': {
    id: 'needle_set',
    name: 'Needle Set',
    icon: '🪡',
    category: 'general',
    rarity: 'common',
    cost: 5,
    description: 'A set of 5 steel needles for sewing or mending.'
},

'thread_spool': {
    id: 'thread_spool',
    name: 'Thread Spool',
    icon: '🧵',
    category: 'general',
    rarity: 'common',
    cost: 2,
    description: 'A spool of sturdy thread, about 50 feet long.'
},

'leather_scrap': {
    id: 'leather_scrap',
    name: 'Leather Scrap',
    icon: '🐄',
    category: 'general',
    rarity: 'common',
    cost: 5,
    description: 'Small pieces of leather useful for patching or small projects.'
},

'cloth_scrap': {
    id: 'cloth_scrap',
    name: 'Cloth Scrap',
    icon: '👕',
    category: 'general',
    rarity: 'common',
    cost: 3,
    description: 'Small pieces of cloth in various colors for patching or crafting.'
},

'wood_shavings': {
    id: 'wood_shavings',
    name: 'Wood Shavings',
    icon: '🪵',
    category: 'general',
    rarity: 'common',
    cost: 1,
    description: 'A small bag of wood shavings, useful for kindling or stuffing.'
},

// ========== ALCHEMICAL BASES ==========
'empty_flask': {
    id: 'empty_flask',
    name: 'Empty Flask',
    icon: '🧪',
    category: 'alchemical',
    rarity: 'common',
    cost: 3,
    description: 'A small glass flask for holding liquids.'
},

'cork_stopper': {
    id: 'cork_stopper',
    name: 'Cork Stopper',
    icon: '🍾',
    category: 'alchemical',
    rarity: 'common',
    cost: 1,
    description: 'A cork stopper for sealing bottles or flasks.'
},

'glass_vial': {
    id: 'glass_vial',
    name: 'Glass Vial',
    icon: '💊',
    category: 'alchemical',
    rarity: 'common',
    cost: 2,
    description: 'A small glass vial for holding potions or samples.'
},

'clay_pot': {
    id: 'clay_pot',
    name: 'Clay Pot',
    icon: '🏺',
    category: 'alchemical',
    rarity: 'common',
    cost: 4,
    description: 'A small clay pot for mixing or storing ingredients.'
},

'mortar_pestle': {
    id: 'mortar_pestle',
    name: 'Mortar and Pestle',
    icon: '🧴',
    category: 'alchemical',
    rarity: 'common',
    cost: 10,
    description: 'A small mortar and pestle for grinding ingredients.'
},

'filter_cloth': {
    id: 'filter_cloth',
    name: 'Filter Cloth',
    icon: '🧻',
    category: 'alchemical',
    rarity: 'common',
    cost: 3,
    description: 'A piece of fine cloth for filtering liquids.'
},

'wax_paper': {
    id: 'wax_paper',
    name: 'Wax Paper',
    icon: '📄',
    category: 'alchemical',
    rarity: 'common',
    cost: 2,
    description: 'Sheets of waxed paper for wrapping or preserving ingredients.'
},

'herb_pouch': {
    id: 'herb_pouch',
    name: 'Herb Pouch',
    icon: '🌿',
    category: 'alchemical',
    rarity: 'common',
    cost: 5,
    description: 'A small pouch for storing herbs or other small ingredients.'
},

'glass_tube': {
    id: 'glass_tube',
    name: 'Glass Tube',
    icon: '🧪',
    category: 'alchemical',
    rarity: 'common',
    cost: 4,
    description: 'A small glass tube for conducting experiments.'
},

'measuring_spoon': {
    id: 'measuring_spoon',
    name: 'Measuring Spoon',
    icon: '🥄',
    category: 'alchemical',
    rarity: 'common',
    cost: 3,
    description: 'A small spoon for measuring ingredients.'
},

// ========== COMMON HERBS & PLANTS ==========
'common_sage': {
    id: 'common_sage',
    name: 'Common Sage',
    icon: '🌿',
    category: 'herb',
    rarity: 'common',
    cost: 2,
    description: 'A common herb used in cooking and minor healing remedies.'
},

'wild_mint': {
    id: 'wild_mint',
    name: 'Wild Mint',
    icon: '🌱',
    category: 'herb',
    rarity: 'common',
    cost: 3,
    description: 'A refreshing herb used in teas and digestive remedies.'
},

'chamomile': {
    id: 'chamomile',
    name: 'Chamomile',
    icon: '🌼',
    category: 'herb',
    rarity: 'common',
    cost: 4,
    description: 'A calming herb used in teas and sleep remedies.'
},

'lavender': {
    id: 'lavender',
    name: 'Lavender',
    icon: '🌸',
    category: 'herb',
    rarity: 'common',
    cost: 5,
    description: 'A fragrant herb used in perfumes and relaxation remedies.'
},

'thyme': {
    id: 'thyme',
    name: 'Thyme',
    icon: '🌿',
    category: 'herb',
    rarity: 'common',
    cost: 3,
    description: 'A common herb used in cooking and minor antiseptic remedies.'
},

'rosemary': {
    id: 'rosemary',
    name: 'Rosemary',
    icon: '🌿',
    category: 'herb',
    rarity: 'common',
    cost: 4,
    description: 'A fragrant herb used in cooking and memory-enhancing remedies.'
},

'dandelion': {
    id: 'dandelion',
    name: 'Dandelion',
    icon: '🌼',
    category: 'herb',
    rarity: 'common',
    cost: 2,
    description: 'A common weed with mild diuretic properties.'
},

'nettle': {
    id: 'nettle',
    name: 'Nettle',
    icon: '🌿',
    category: 'herb',
    rarity: 'common',
    cost: 3,
    description: 'A stinging plant used in tonics and hair growth remedies.'
},

'plantain': {
    id: 'plantain',
    name: 'Plantain',
    icon: '🌱',
    category: 'herb',
    rarity: 'common',
    cost: 2,
    description: 'A common weed with mild healing properties.'
},

'yarrow': {
    id: 'yarrow',
    name: 'Yarrow',
    icon: '🌼',
    category: 'herb',
    rarity: 'common',
    cost: 4,
    description: 'A flowering plant used in wound healing and fever remedies.'
},

// ========== BASIC METALS & MINERALS ==========
'iron_nail': {
    id: 'iron_nail',
    name: 'Iron Nail',
    icon: '🔨',
    category: 'metal',
    rarity: 'common',
    cost: 1,
    description: 'A small iron nail for construction or repairs.'
},

'copper_wire': {
    id: 'copper_wire',
    name: 'Copper Wire',
    icon: '🧵',
    category: 'metal',
    rarity: 'common',
    cost: 3,
    description: 'A length of copper wire, about 5 feet long.'
},

'tin_sheet': {
    id: 'tin_sheet',
    name: 'Tin Sheet',
    icon: '📄',
    category: 'metal',
    rarity: 'common',
    cost: 5,
    description: 'A small sheet of tin, about 6 inches square.'
},

'lead_weight': {
    id: 'lead_weight',
    name: 'Lead Weight',
    icon: '⚖️',
    category: 'metal',
    rarity: 'common',
    cost: 4,
    description: 'A small lead weight, about 1 pound.'
},

'brass_fitting': {
    id: 'brass_fitting',
    name: 'Brass Fitting',
    icon: '🔩',
    category: 'metal',
    rarity: 'common',
    cost: 6,
    description: 'A small brass fitting for pipes or machinery.'
},

'steel_ring': {
    id: 'steel_ring',
    name: 'Steel Ring',
    icon: '💍',
    category: 'metal',
    rarity: 'common',
    cost: 8,
    description: 'A small steel ring, about 1 inch in diameter.'
},

'iron_filings': {
    id: 'iron_filings',
    name: 'Iron Filings',
    icon: '⚫',
    category: 'metal',
    rarity: 'common',
    cost: 2,
    description: 'A small bag of iron filings, useful for experiments.'
},

'copper_penny': {
    id: 'copper_penny',
    name: 'Copper Penny',
    icon: '💰',
    category: 'metal',
    rarity: 'common',
    cost: 1,
    description: 'A copper coin, often used in small transactions.'
},

'charcoal_lump': {
    id: 'charcoal_lump',
    name: 'Charcoal Lump',
    icon: '⚫',
    category: 'mineral',
    rarity: 'common',
    cost: 2,
    description: 'A lump of charcoal for fuel or drawing.'
},

'chalk_lump': {
    id: 'chalk_lump',
    name: 'Chalk Lump',
    icon: '⚪',
    category: 'mineral',
    rarity: 'common',
    cost: 1,
    description: 'A lump of chalk for writing or marking.'
},

// ========== COMMON ANIMAL PARTS ==========
'chicken_feather': {
    id: 'chicken_feather',
    name: 'Chicken Feather',
    icon: '🪶',
    category: 'animal',
    rarity: 'common',
    cost: 1,
    description: 'A feather from a chicken, useful for writing or crafting.'
},

'rabbit_foot': {
    id: 'rabbit_foot',
    name: 'Rabbit Foot',
    icon: '🐇',
    category: 'animal',
    rarity: 'common',
    cost: 5,
    description: 'A rabbits foot, often carried as a good luck charm.'
},

'fish_scale': {
    id: 'fish_scale',
    name: 'Fish Scale',
    icon: '🐟',
    category: 'animal',
    rarity: 'common',
    cost: 2,
    description: 'A scale from a fish, sometimes used in potions.'
},

'beeswax': {
    id: 'beeswax',
    name: 'Beeswax',
    icon: '🐝',
    category: 'animal',
    rarity: 'common',
    cost: 4,
    description: 'A small block of beeswax for candles or sealing.'
},

'goose_feather': {
    id: 'goose_feather',
    name: 'Goose Feather',
    icon: '🪶',
    category: 'animal',
    rarity: 'common',
    cost: 3,
    description: 'A feather from a goose, often used for writing.'
},

'pig_bristle': {
    id: 'pig_bristle',
    name: 'Pig Bristle',
    icon: '🐖',
    category: 'animal',
    rarity: 'common',
    cost: 2,
    description: 'Bristles from a pig, used in brushes or brooms.'
},

'cow_hide': {
    id: 'cow_hide',
    name: 'Cow Hide Scrap',
    icon: '🐄',
    category: 'animal',
    rarity: 'common',
    cost: 10,
    description: 'A small piece of cow hide for patching or crafting.'
},

'sheep_wool': {
    id: 'sheep_wool',
    name: 'Sheep Wool',
    icon: '🐑',
    category: 'animal',
    rarity: 'common',
    cost: 5,
    description: 'A small bundle of sheep wool for spinning or crafting.'
},

'chicken_bone': {
    id: 'chicken_bone',
    name: 'Chicken Bone',
    icon: '🍗',
    category: 'animal',
    rarity: 'common',
    cost: 1,
    description: 'A small chicken bone, sometimes used in rituals.'
},

'fish_bone': {
    id: 'fish_bone',
    name: 'Fish Bone',
    icon: '🐟',
    category: 'animal',
    rarity: 'common',
    cost: 1,
    description: 'A small fish bone, sometimes used in potions.'
},

// ========== COMMON MAGICAL COMPONENTS ==========
'candle_stub': {
    id: 'candle_stub',
    name: 'Candle Stub',
    icon: '🕯️',
    category: 'magical',
    rarity: 'common',
    cost: 2,
    description: 'A small stub of candle, useful for minor rituals.'
},

'incense_stick': {
    id: 'incense_stick',
    name: 'Incense Stick',
    icon: '🕯️',
    category: 'magical',
    rarity: 'common',
    cost: 3,
    description: 'A stick of incense for rituals or meditation.'
},

'salt_pinch': {
    id: 'salt_pinch',
    name: 'Pinch of Salt',
    icon: '🧂',
    category: 'magical',
    rarity: 'common',
    cost: 1,
    description: 'A small pinch of salt for purification rituals.'
},

'holy_water_drop': {
    id: 'holy_water_drop',
    name: 'Drop of Holy Water',
    icon: '💧',
    category: 'magical',
    rarity: 'common',
    cost: 5,
    description: 'A single drop of holy water for minor blessings.'
},

'unholy_water_drop': {
    id: 'unholy_water_drop',
    name: 'Drop of Unholy Water',
    icon: '💧',
    category: 'magical',
    rarity: 'common',
    cost: 5,
    description: 'A single drop of unholy water for minor curses.'
},

'quartz_pebble': {
    id: 'quartz_pebble',
    name: 'Quartz Pebble',
    icon: '💎',
    category: 'magical',
    rarity: 'common',
    cost: 3,
    description: 'A small pebble of clear quartz, useful in divination.'
},

'hematite_stone': {
    id: 'hematite_stone',
    name: 'Hematite Stone',
    icon: '🪨',
    category: 'magical',
    rarity: 'common',
    cost: 4,
    description: 'A small stone of hematite, useful in grounding rituals.'
},

'moonstone_pebble': {
    id: 'moonstone_pebble',
    name: 'Moonstone Pebble',
    icon: '🌙',
    category: 'magical',
    rarity: 'common',
    cost: 5,
    description: 'A small pebble of moonstone, useful in lunar rituals.'
},

'sunstone_pebble': {
    id: 'sunstone_pebble',
    name: 'Sunstone Pebble',
    icon: '☀️',
    category: 'magical',
    rarity: 'common',
    cost: 5,
    description: 'A small pebble of sunstone, useful in solar rituals.'
},

'crystal_shard': {
    id: 'crystal_shard',
    name: 'Crystal Shard',
    icon: '💎',
    category: 'magical',
    rarity: 'common',
    cost: 6,
    description: 'A small shard of clear crystal, useful in scrying.'
},

// ========== COMMON FOODSTUFFS ==========
'flour_bag': {
    id: 'flour_bag',
    name: 'Bag of Flour',
    icon: '🥖',
    category: 'food',
    rarity: 'common',
    cost: 3,
    description: 'A small bag of flour for baking or cooking.'
},

'sugar_lump': {
    id: 'sugar_lump',
    name: 'Lump of Sugar',
    icon: '🍬',
    category: 'food',
    rarity: 'common',
    cost: 2,
    description: 'A small lump of sugar for sweetening.'
},

'salt_pouch': {
    id: 'salt_pouch',
    name: 'Pouch of Salt',
    icon: '🧂',
    category: 'food',
    rarity: 'common',
    cost: 5,
    description: 'A small pouch of salt for seasoning or preservation.'
},

'pepper_pouch': {
    id: 'pepper_pouch',
    name: 'Pouch of Pepper',
    icon: '🌶️',
    category: 'food',
    rarity: 'common',
    cost: 5,
    description: 'A small pouch of black pepper for seasoning.'
},

'honey_jar': {
    id: 'honey_jar',
    name: 'Jar of Honey',
    icon: '🍯',
    category: 'food',
    rarity: 'common',
    cost: 8,
    description: 'A small jar of honey for sweetening or healing.'
},

'olive_oil': {
    id: 'olive_oil',
    name: 'Bottle of Olive Oil',
    icon: '🫒',
    category: 'food',
    rarity: 'common',
    cost: 10,
    description: 'A small bottle of olive oil for cooking or lighting.'
},

'vinegar_bottle': {
    id: 'vinegar_bottle',
    name: 'Bottle of Vinegar',
    icon: '🍶',
    category: 'food',
    rarity: 'common',
    cost: 4,
    description: 'A small bottle of vinegar for cooking or cleaning.'
},

'butter_pot': {
    id: 'butter_pot',
    name: 'Pot of Butter',
    icon: '🧈',
    category: 'food',
    rarity: 'common',
    cost: 6,
    description: 'A small pot of butter for cooking or baking.'
},

'egg_carton': {
    id: 'egg_carton',
    name: 'Carton of Eggs',
    icon: '🥚',
    category: 'food',
    rarity: 'common',
    cost: 5,
    description: 'A small carton containing a dozen eggs.'
},

'milk_jug': {
    id: 'milk_jug',
    name: 'Jug of Milk',
    icon: '🥛',
    category: 'food',
    rarity: 'common',
    cost: 4,
    description: 'A small jug of fresh milk.'
},

// ========== COMMON WOOD & FIBER ==========
'pine_plank': {
    id: 'pine_plank',
    name: 'Pine Plank',
    icon: '🪵',
    category: 'wood',
    rarity: 'common',
    cost: 3,
    description: 'A small plank of pine wood, about 2 feet long.'
},

'oak_plank': {
    id: 'oak_plank',
    name: 'Oak Plank',
    icon: '🪵',
    category: 'wood',
    rarity: 'common',
    cost: 5,
    description: 'A small plank of oak wood, about 2 feet long.'
},

'maple_plank': {
    id: 'maple_plank',
    name: 'Maple Plank',
    icon: '🪵',
    category: 'wood',
    rarity: 'common',
    cost: 4,
    description: 'A small plank of maple wood, about 2 feet long.'
},

'birch_plank': {
    id: 'birch_plank',
    name: 'Birch Plank',
    icon: '🪵',
    category: 'wood',
    rarity: 'common',
    cost: 3,
    description: 'A small plank of birch wood, about 2 feet long.'
},

'willow_plank': {
    id: 'willow_plank',
    name: 'Willow Plank',
    icon: '🪵',
    category: 'wood',
    rarity: 'common',
    cost: 4,
    description: 'A small plank of willow wood, about 2 feet long.'
},

'hemp_rope': {
    id: 'hemp_rope',
    name: 'Hemp Rope',
    icon: '🧶',
    category: 'fiber',
    rarity: 'common',
    cost: 5,
    description: 'A length of hemp rope, about 10 feet long.'
},

'flax_thread': {
    id: 'flax_thread',
    name: 'Flax Thread',
    icon: '🧵',
    category: 'fiber',
    rarity: 'common',
    cost: 3,
    description: 'A spool of flax thread, about 50 feet long.'
},

'cotton_cloth': {
    id: 'cotton_cloth',
    name: 'Cotton Cloth',
    icon: '👕',
    category: 'fiber',
    rarity: 'common',
    cost: 4,
    description: 'A small piece of cotton cloth, about 1 foot square.'
},

'linen_cloth': {
    id: 'linen_cloth',
    name: 'Linen Cloth',
    icon: '👕',
    category: 'fiber',
    rarity: 'common',
    cost: 5,
    description: 'A small piece of linen cloth, about 1 foot square.'
},

'wool_cloth': {
    id: 'wool_cloth',
    name: 'Wool Cloth',
    icon: '👕',
    category: 'fiber',
    rarity: 'common',
    cost: 6,
    description: 'A small piece of wool cloth, about 1 foot square.'
},

// ========== COMMON TOOLS & UTENSILS ==========
'hammer_small': {
    id: 'hammer_small',
    name: 'Small Hammer',
    icon: '🔨',
    category: 'tool',
    rarity: 'common',
    cost: 8,
    description: 'A small hammer for light construction or repairs.'
},

'saw_small': {
    id: 'saw_small',
    name: 'Small Saw',
    icon: '🪚',
    category: 'tool',
    rarity: 'common',
    cost: 10,
    description: 'A small saw for cutting wood or metal.'
},

'chisel_set': {
    id: 'chisel_set',
    name: 'Chisel Set',
    icon: '🔪',
    category: 'tool',
    rarity: 'common',
    cost: 12,
    description: 'A set of 3 small chisels for carving or shaping.'
},

'pliers_small': {
    id: 'pliers_small',
    name: 'Small Pliers',
    icon: '🔧',
    category: 'tool',
    rarity: 'common',
    cost: 7,
    description: 'A small pair of pliers for gripping or bending.'
},

'screwdriver_set': {
    id: 'screwdriver_set',
    name: 'Screwdriver Set',
    icon: '🔧',
    category: 'tool',
    rarity: 'common',
    cost: 10,
    description: 'A set of 3 small screwdrivers for tightening or loosening screws.'
},

'awl_small': {
    id: 'awl_small',
    name: 'Small Awl',
    icon: '🪡',
    category: 'tool',
    rarity: 'common',
    cost: 4,
    description: 'A small awl for piercing holes in leather or wood.'
},

'file_small': {
    id: 'file_small',
    name: 'Small File',
    icon: '🔪',
    category: 'tool',
    rarity: 'common',
    cost: 6,
    description: 'A small file for smoothing or shaping metal or wood.'
},

'clamp_small': {
    id: 'clamp_small',
    name: 'Small Clamp',
    icon: '🔩',
    category: 'tool',
    rarity: 'common',
    cost: 8,
    description: 'A small clamp for holding materials together.'
},

'tongs_small': {
    id: 'tongs_small',
    name: 'Small Tongs',
    icon: '🔥',
    category: 'tool',
    rarity: 'common',
    cost: 5,
    description: 'A small pair of tongs for handling hot objects.'
},

'brush_small': {
    id: 'brush_small',
    name: 'Small Brush',
    icon: '🖌️',
    category: 'tool',
    rarity: 'common',
    cost: 3,
    description: 'A small brush for cleaning or painting.'
},

// ========== COMMON CONTAINERS ==========
'wooden_box': {
    id: 'wooden_box',
    name: 'Wooden Box',
    icon: '📦',
    category: 'container',
    rarity: 'common',
    cost: 5,
    description: 'A small wooden box for storing items.'
},

'leather_pouch': {
    id: 'leather_pouch',
    name: 'Leather Pouch',
    icon: '👛',
    category: 'container',
    rarity: 'common',
    cost: 4,
    description: 'A small leather pouch for carrying small items.'
},

'cloth_bag': {
    id: 'cloth_bag',
    name: 'Cloth Bag',
    icon: '🛍️',
    category: 'container',
    rarity: 'common',
    cost: 3,
    description: 'A small cloth bag for carrying items.'
},

'wicker_basket': {
    id: 'wicker_basket',
    name: 'Wicker Basket',
    icon: '🧺',
    category: 'container',
    rarity: 'common',
    cost: 6,
    description: 'A small wicker basket for carrying items.'
},

'glass_jar': {
    id: 'glass_jar',
    name: 'Glass Jar',
    icon: '🏺',
    category: 'container',
    rarity: 'common',
    cost: 4,
    description: 'A small glass jar for storing liquids or small items.'
},

'tin_can': {
    id: 'tin_can',
    name: 'Tin Can',
    icon: '🥫',
    category: 'container',
    rarity: 'common',
    cost: 2,
    description: 'A small tin can for storing food or small items.'
},

'wooden_barrel': {
    id: 'wooden_barrel',
    name: 'Wooden Barrel',
    icon: '🛢️',
    category: 'container',
    rarity: 'common',
    cost: 15,
    description: 'A small wooden barrel for storing liquids or bulk items.'
},

'clay_pot': {
    id: 'clay_pot',
    name: 'Clay Pot',
    icon: '🍲',
    category: 'container',
    rarity: 'common',
    cost: 5,
    description: 'A small clay pot for cooking or storing items.'
},

'leather_bottle': {
    id: 'leather_bottle',
    name: 'Leather Bottle',
    icon: '🍼',
    category: 'container',
    rarity: 'common',
    cost: 6,
    description: 'A small leather bottle for carrying liquids.'
},

'wooden_crate': {
    id: 'wooden_crate',
    name: 'Wooden Crate',
    icon: '📦',
    category: 'container',
    rarity: 'common',
    cost: 10,
    description: 'A small wooden crate for storing or shipping items.'
},

// ========== COMMON LIGHT SOURCES ==========
'oil_lamp': {
    id: 'oil_lamp',
    name: 'Oil Lamp',
    icon: '🏮',
    category: 'light',
    rarity: 'common',
    cost: 5,
    description: 'A small oil lamp that burns for 6 hours on a pint of oil.'
},

'lantern_small': {
    id: 'lantern_small',
    name: 'Small Lantern',
    icon: '🏮',
    category: 'light',
    rarity: 'common',
    cost: 10,
    description: 'A small lantern that burns for 6 hours on a pint of oil.'
},

'torch_bundle': {
    id: 'torch_bundle',
    name: 'Bundle of Torches',
    icon: '🔥',
    category: 'light',
    rarity: 'common',
    cost: 1,
    description: 'A bundle of 5 torches that each burn for 1 hour.'
},

'candle_bundle': {
    id: 'candle_bundle',
    name: 'Bundle of Candles',
    icon: '🕯️',
    category: 'light',
    rarity: 'common',
    cost: 1,
    description: 'A bundle of 5 candles that each burn for 1 hour.'
},

'lamp_oil': {
    id: 'lamp_oil',
    name: 'Lamp Oil',
    icon: '🛢️',
    category: 'light',
    rarity: 'common',
    cost: 2,
    description: 'A pint of lamp oil that burns for 6 hours in a lamp or lantern.'
},

// ========== COMMON WRITING SUPPLIES ==========
'ink_bottle': {
    id: 'ink_bottle',
    name: 'Bottle of Ink',
    icon: '🖋️',
    category: 'writing',
    rarity: 'common',
    cost: 10,
    description: 'A small bottle of black ink for writing.'
},

'quill_pen': {
    id: 'quill_pen',
    name: 'Quill Pen',
    icon: '🪶',
    category: 'writing',
    rarity: 'common',
    cost: 2,
    description: 'A feather quill for writing.'
},

'writing_paper': {
    id: 'writing_paper',
    name: 'Writing Paper',
    icon: '📄',
    category: 'writing',
    rarity: 'common',
    cost: 2,
    description: 'A sheet of writing paper, about 8.5 x 11 inches.'
},

'wax_tablet': {
    id: 'wax_tablet',
    name: 'Wax Tablet',
    icon: '📱',
    category: 'writing',
    rarity: 'common',
    cost: 5,
    description: 'A small wooden tablet with a wax surface for writing.'
},

'sealing_wax': {
    id: 'sealing_wax',
    name: 'Sealing Wax',
    icon: '🔴',
    category: 'writing',
    rarity: 'common',
    cost: 3,
    description: 'A stick of red sealing wax for documents.'
},

'charcoal_pencil': {
    id: 'charcoal_pencil',
    name: 'Charcoal Pencil',
    icon: '✏️',
    category: 'writing',
    rarity: 'common',
    cost: 1,
    description: 'A pencil made of charcoal for drawing or writing.'
},

'chalk_piece': {
    id: 'chalk_piece',
    name: 'Piece of Chalk',
    icon: '⚪',
    category: 'writing',
    rarity: 'common',
    cost: 1,
    description: 'A small piece of white chalk for writing on surfaces.'
},

'ink_pen': {
    id: 'ink_pen',
    name: 'Ink Pen',
    icon: '🖋️',
    category: 'writing',
    rarity: 'common',
    cost: 5,
    description: 'A metal pen for writing with ink.'
},

'parchment_roll': {
    id: 'parchment_roll',
    name: 'Parchment Roll',
    icon: '📜',
    category: 'writing',
    rarity: 'common',
    cost: 10,
    description: 'A roll of parchment, about 10 feet long.'
},
    
// ============================================
// === 35 EXOTIC INGREDIENTS ===
// ============================================

// ========== PLANAR EXOTICS ==========
'river_styx_water': {
    id: 'river_styx_water',
    name: "River Styx Water (Distilled)",
    icon: '💀',
    category: 'exotic',
    rarity: 'legendary',
    cost: 2200,
    description: "A single vial of water from the River Styx, distilled to remove memory-erasing properties while retaining necromantic power. It smells of forgotten promises.",
    properties: [
        "Can resurrect undead with full memories intact",
        "Grants temporary immunity to psychic damage for 1 hour",
        "Used to create unbreakable death oaths",
        "Can dissolve non-magical bonds and contracts"
    ],
    source: "Collected by psychopomps or daring devils",
    uses: ["Intelligent Undead Creation", "Oathbinding", "Psychic Resistance Potions"]
},

'positive_energy_plasm': {
    id: 'positive_energy_plasm',
    name: "Positive Energy Plasm",
    icon: '☀️',
    category: 'exotic',
    rarity: 'mythic',
    cost: 4500,
    description: "Concentrated life force from the Positive Energy Plane. It glows blindingly bright and causes living cells to regenerate at unnatural rates.",
    properties: [
        "Heals 10d10 HP when applied, but may cause cancerous growths (DC 18 CON save)",
        "Can resurrect dead tissue, potentially creating undead abominations",
        "Used in true resurrection rituals",
        "Explodes when mixed with negative energy (10d10 radiant damage)"
    ],
    source: "Harvested by solar angels or stolen from healing springs",
    uses: ["True Resurrection", "Regeneration Potions", "Life Bomb Creation"]
},

'shadowfell_mist_essence': {
    id: 'shadowfell_mist_essence',
    name: "Shadowfell Mist Essence",
    icon: '👻',
    category: 'exotic',
    rarity: 'legendary',
    cost: 1800,
    description: "Liquid shadow extracted from the Shadowfell's perpetual gloom. It moves against light and whispers forgotten secrets.",
    properties: [
        "Creates areas of magical darkness that even darkvision can't penetrate",
        "Can trap souls temporarily (up to 1 day)",
        "Grants etherealness for 1 minute when inhaled",
        "Used to create shadow clones of living beings"
    ],
    source: "Condensed from Shadowfell fog by shadar-kai",
    uses: ["Superior Darkness Items", "Soul Traps", "Shadow Clone Potions"]
},

'limbo_reality_clay': {
    id: 'limbo_reality_clay',
    name: "Limo Reality Clay",
    icon: '🎨',
    category: 'exotic',
    rarity: 'legendary',
    cost: 3200,
    description: "Shapeable raw matter from Limbo. It constantly shifts texture and color based on the holder's thoughts.",
    properties: [
        "Can be shaped into any non-magical object (lasts 24 hours)",
        "Used to create artifacts of chaos and change",
        "Grants advantage on saves vs. transmutation magic",
        "Can absorb and replicate any material it touches"
    ],
    source: "Harvested by githzerai anarchs during reality storms",
    uses: ["Reality Shaping Items", "Adaptive Armor", "Chaos Artifacts"]
},

'elysium_bounty_harvest': {
    id: 'elysium_bounty_harvest',
    name: "Elysium Bounty Harvest",
    icon: '🌾',
    category: 'exotic',
    rarity: 'mythic',
    cost: 5000,
    description: "A single grain of wheat from Elysium's fields. It contains the essence of perfect goodness and nourishment.",
    properties: [
        "One grain feeds a person for a year",
        "Can cure any curse or alignment shift",
        "Used to create artifacts of ultimate good",
        "Grants advantage on saves vs. evil magic permanently"
    ],
    source: "Gifted by celestial beings or harvested by planewalkers",
    uses: ["Infinite Food Supplies", "Curse Removal", "Good Artifacts"]
},

// ========== MONSTROUS EXOTICS ==========
'beholder_stalk_extract': {
    id: 'beholder_stalk_extract',
    name: "Beholder Stalk Extract",
    icon: '👁️',
    category: 'exotic',
    rarity: 'legendary',
    cost: 2800,
    description: "Distilled fluid from a beholder's eyestalks. It bubbles with pure disintegration energy.",
    properties: [
        "Can disintegrate up to 10 cubic feet of non-living matter",
        "Used to create anti-magic eye gems",
        "Grants 1 random eye ray ability (1/day, DM's choice)",
        "Can nullify any one spell effect instantly"
    ],
    source: "Extracted from beholder corpses before rigor mortis sets in",
    uses: ["Disintegration Items", "Eye Ray Gems", "Spell Nullification"]
},

'illithid_brain_matter': {
    id: 'illithid_brain_matter',
    name: "Illithid Brain Matter",
    icon: '🧠',
    category: 'exotic',
    rarity: 'legendary',
    cost: 3500,
    description: "Preserved brain tissue from a mind flayer elder. It pulses with psionic energy.",
    properties: [
        "Can extract a single memory from a living brain (DC 20 INT save)",
        "Used to create psionic amplifiers",
        "Grants telepathy 120ft for 1 hour when consumed",
        "Can convert spells to psionic powers (and vice versa)"
    ],
    source: "Harvested from elder brains or ancient illithid ruins",
    uses: ["Memory Extraction", "Psionic Items", "Telepathy Potions"]
},

'aboleth_mucus_vintage': {
    id: 'aboleth_mucus_vintage',
    name: "Aboleth Mucus Vintage (Aged)",
    icon: '💧',
    category: 'exotic',
    rarity: 'legendary',
    cost: 2400,
    description: "Centuries-old aboleth slime fermented into a potent mind-altering substance. It smells of ancient seas and forgotten empires.",
    properties: [
        "Can grant perfect memory of any event from the last 1000 years",
        "Used to create perfect mind control potions (no save)",
        "Grants water breathing and amphibious traits permanently",
        "Can enslave one creature permanently (DC 25 WIS save)"
    ],
    source: "Collected and aged by aboleth cultists in deep sea trenches",
    uses: ["Historical Recall", "Mind Control", "Amphibious Transformation"]
},

'kraken_ink_concentrate': {
    id: 'kraken_ink_concentrate',
    name: "Kraken Ink Concentrate",
    icon: '🦑',
    category: 'exotic',
    rarity: 'legendary',
    cost: 2600,
    description: "Ink from a kraken's primary ink sac, reduced to a thick tar. It can blot out the sun.",
    properties: [
        "Creates a 1-mile radius of magical darkness",
        "Used to create superior camouflage (even from truesight)",
        "Can be used to write contracts that are invisible to gods",
        "Grants the ability to squirt ink as a defensive mechanism"
    ],
    source: "Milked from living krakens or extracted from dead ones",
    uses: ["Superior Darkness", "God-Proof Contracts", "Ink Defense"]
},

'purple_worm_venom_sac': {
    id: 'purple_worm_venom_sac',
    name: "Purple Worm Venom Sac (Full)",
    icon: '🐛',
    category: 'exotic',
    rarity: 'legendary',
    cost: 3000,
    description: "An intact venom sac from a purple worm. It contains enough poison to kill a small city.",
    properties: [
        "Venom deals 12d10 poison damage (DC 20 CON save)",
        "Can be refined into a contact poison that affects constructs",
        "Used to create artifacts of burrowing and tunneling",
        "Grants tremorsense 60ft when applied to skin (painful)"
    ],
    source: "Harvested from purple worms before the venom dries",
    uses: ["Mass Poison", "Construct Poison", "Tremorsense Items"]
},

// ========== DIVINE/INFERNAL EXOTICS ==========
'hand_of_glory_premium': {
    id: 'hand_of_glory_premium',
    name: "Hand of Glory (Masterwork)",
    icon: '🖐️',
    category: 'exotic',
    rarity: 'legendary',
    cost: 4200,
    description: "A pickled hand of a hanged murderer, turned into a candle. The flame reveals hidden things.",
    properties: [
        "When lit, reveals all invisible creatures and objects within 60ft",
        "Can open any lock (magical or mundane) by touch",
        "Grants the ability to speak with the dead hand's owner",
        "Can be used to paralyze anyone who meets the hand's original gaze"
    ],
    source: "Crafted by necromancers from executed criminals",
    uses: ["Revealing Candle", "Universal Key", "Paralysis Gaze"]
},

'holy_nail_relic': {
    id: 'holy_nail_relic',
    name: "Holy Nail Relic",
    icon: '✝️',
    category: 'exotic',
    rarity: 'mythic',
    cost: 8000,
    description: "A nail from a true saint's crucifixion, sanctified by divine blood. It cannot be defiled.",
    properties: [
        "Can pierce any material, including divine flesh",
        "Used to create artifacts of martyrdom",
        "Grants advantage on all saves vs. evil magic",
        "Can be used to seal away demonic princes"
    ],
    source: "Collected from actual saint relics (extremely rare)",
    uses: ["God-Piercing Weapons", "Demonic Seals", "Evil Resistance"]
},

'crown_of_thorns_fragment': {
    id: 'crown_of_thorns_fragment',
    name: "Crown of Thorns Fragment",
    icon: '👑',
    category: 'exotic',
    rarity: 'mythic',
    cost: 12000,
    description: "A thorn from the Crown of Thorns. It draws blood that heals instead of harms.",
    properties: [
        "Blood drawn by this thorn heals instead of damages",
        "Can create potions of true resurrection",
        "Grants immunity to all pain and torture",
        "Can be used to convert suffering into power"
    ],
    source: "Only obtainable from the actual Crown (heavily guarded)",
    uses: ["Healing Weapons", "True Resurrection", "Pain Immunity"]
},

'satanic_bible_page': {
    id: 'satanic_bible_page',
    name: "Satanic Bible Page (Original)",
    icon: '📖',
    category: 'exotic',
    rarity: 'mythic',
    cost: 9000,
    description: "A page from the original Satanic Bible. Reading it corrupts the soul.",
    properties: [
        "Can damn a soul to Hell with a signature (no save)",
        "Used to create artifacts of ultimate evil",
        "Grants the ability to speak fluent Infernal and Abyssal",
        "Can be used to summon the Devil (once, then page burns)"
    ],
    source: "Only exists in one copy, pages rarely torn out",
    uses: ["Soul Damnation", "Devil Summoning", "Evil Artifacts"]
},

'handwriting_of_god': {
    id: 'handwriting_of_god',
    name: "Handwriting of God",
    icon: '✍️',
    category: 'exotic',
    rarity: 'mythic',
    cost: 25000,
    description: "A single word written by the Creator. It contains absolute truth and power.",
    properties: [
        "Whatever is written becomes reality (DM's discretion, 1 word only)",
        "Cannot be erased or altered by any means",
        "Reading it grants perfect understanding of one cosmic truth",
        "Can be used to create a new plane of existence"
    ],
    source: "Only obtainable by meeting God and asking for a signature",
    uses: ["Reality Writing", "Cosmic Understanding", "Plane Creation"]
},

// ========== TEMPORAL/SPATIAL EXOTICS ==========
'grandfather_paradox_echo': {
    id: 'grandfather_paradox_echo',
    name: "Grandfather Paradox Echo",
    icon: '👴',
    category: 'exotic',
    rarity: 'mythic',
    cost: 15000,
    description: "An echo from a timeline that never existed. It hurts to look at.",
    properties: [
        "Can erase a person from history (DC 30 WIS save)",
        "Used to create artifacts of time manipulation",
        "Grants immunity to paradox effects",
        "Can be used to duplicate any object (the duplicate is from an alternate timeline)"
    ],
    source: "Created by time travel paradoxes",
    uses: ["History Erasure", "Paradox Immunity", "Timeline Duplication"]
},

'big_crunch_ember': {
    id: 'big_crunch_ember',
    name: "Big Crunch Ember",
    icon: '💥',
    category: 'exotic',
    rarity: 'mythic',
    cost: 20000,
    description: "An ember from the end of the universe. It contains all the heat death of everything.",
    properties: [
        "Can destroy any object instantly (no save)",
        "Used to create artifacts of entropy",
        "Grants immunity to heat and cold (you are at the temperature of the void)",
        "Can be used to accelerate time to the end of the universe"
    ],
    source: "Only obtainable by surviving to the end of time and coming back",
    uses: ["Instant Destruction", "Entropy Artifacts", "Time Acceleration"]
},

'schrodingers_cat_alive': {
    id: 'schrodingers_cat_alive',
    name: "Schrödinger's Cat (Alive)",
    icon: '🐱',
    category: 'exotic',
    rarity: 'legendary',
    cost: 5000,
    description: "A cat that is both alive and dead until observed. Opening the box collapses the waveform.",
    properties: [
        "Cat exists in superposition - can be in two places at once",
        "Can be used to duplicate any action (the cat does it too)",
        "Grants advantage on all quantum uncertainty checks",
        "If the cat dies, it releases a paradox wave (DC 25 WIS save or go mad)"
    ],
    source: "Created by quantum mages or found in paradox zones",
    uses: ["Action Duplication", "Quantum Items", "Paradox Weapons"]
},

'mandelbrot_set_fruit': {
    id: 'mandelbrot_set_fruit',
    name: "Mandelbrot Set Fruit",
    icon: '🍎',
    category: 'exotic',
    rarity: 'legendary',
    cost: 4000,
    description: "A fruit that contains infinite complexity. Each seed is a smaller version of the whole fruit.",
    properties: [
        "Eating it grants infinite knowledge of fractals (useless but impressive)",
        "Can be used to create infinite storage spaces",
        "Grants the ability to understand any pattern",
        "Can be used to create recursive spells (spells that cast themselves)"
    ],
    source: "Grown in the Gardens of Infinity",
    uses: ["Infinite Storage", "Pattern Recognition", "Recursive Magic"]
},

'dark_matter_ore': {
    id: 'dark_matter_ore',
    name: "Dark Matter Ore",
    icon: '⚫',
    category: 'exotic',
    rarity: 'mythic',
    cost: 15000,
    description: "Ore that doesn't interact with light. It is invisible but incredibly massive.",
    properties: [
        "Cannot be seen by any means (even truesight)",
        "Can be forged into invisible weapons and armor",
        "Grants immunity to light-based magic",
        "Can be used to create gravitational weapons"
    ],
    source: "Mined from the spaces between galaxies",
    uses: ["Invisible Weapons", "Light Immunity", "Gravity Weapons"]
},

// ========== ELDRITCH WEIRDNESS ==========
'color_out_of_space_sample': {
    id: 'color_out_of_space_sample',
    name: "Color Out of Space Sample",
    icon: '🌈',
    category: 'exotic',
    rarity: 'mythic',
    cost: 12000,
    description: "A sample of a color that doesn't exist. It slowly drains life from everything nearby.",
    properties: [
        "Drains 1d4 HP from all living things within 10ft per minute",
        "Can be used to create life-draining artifacts",
        "Grants immunity to radiation and weird science",
        "Can be used to mutate creatures (DM's choice of mutation)"
    ],
    source: "Collected from meteorites that carry the Colour",
    uses: ["Life Drain Items", "Mutation Induction", "Weird Science Immunity"]
},

'non_euclidean_geometry': {
    id: 'non_euclidean_geometry',
    name: "Non-Euclidean Geometry",
    icon: '⬛',
    category: 'exotic',
    rarity: 'mythic',
    cost: 18000,
    description: "A shape that cannot exist in normal space. Looking at it causes headaches.",
    properties: [
        "Can create spaces that are bigger on the inside",
        "Used to create artifacts of spatial manipulation",
        "Grants immunity to maze spells and spatial traps",
        "Can be used to teleport without error"
    ],
    source: "Only obtainable by non-euclidean beings",
    uses: ["Bigger-on-Inside Items", "Spatial Artifacts", "Teleportation"]
},

'unknown_language_dictionary': {
    id: 'unknown_language_dictionary',
    name: "Unknown Language Dictionary",
    icon: '📚',
    category: 'exotic',
    rarity: 'legendary',
    cost: 6000,
    description: "A book that contains a language that has never been spoken. Reading it teaches you nothing but everything.",
    properties: [
        "Can be used to communicate with the concept of language itself",
        "Grants the ability to invent new languages (which become real)",
        "Used to create artifacts of communication",
        "Can be used to confuse any creature that relies on language"
    ],
    source: "Written by the Scribes of the Unknown",
    uses: ["Concept Communication", "Language Creation", "Confusion Effects"]
},

'impossible_sound_wave': {
    id: 'impossible_sound_wave',
    name: "Impossible Sound Wave",
    icon: '🔇',
    category: 'exotic',
    rarity: 'mythic',
    cost: 14000,
    description: "A sound that cannot be heard but is deafeningly loud. It is stored in a special container that is empty but full.",
    properties: [
        "Can deafen any creature that can hear (even those immune)",
        "Used to create artifacts of silence and sound",
        "Grants immunity to all sound-based effects",
        "Can be used to shatter any object (even artifacts)"
    ],
    source: "Recorded by the Deaf Bards of the Impossible",
    uses: ["Deafening Items", "Sound Immunity", "Object Shattering"]
},

'abstract_concept_essence': {
    id: 'abstract_concept_essence',
    name: "Abstract Concept Essence",
    icon: '💭',
    category: 'exotic',
    rarity: 'mythic',
    cost: 25000,
    description: "The physical embodiment of an abstract concept (like 'Justice' or 'Entropy'). It looks different to everyone.",
    properties: [
        "Can weaponize concepts (e.g., hitting someone with Justice)",
        "Used to create artifacts of pure philosophy",
        "Grants perfect understanding of that concept",
        "Can be used to change the concept's meaning in reality"
    ],
    source: "Only obtainable by philosophers who achieve enlightenment",
    uses: ["Concept Weapons", "Philosophical Artifacts", "Reality Editing"]
},

// ========== NATURAL SUPERNATURAL EXOTICS ==========
'bloody_mary_mirror_shard': {
    id: 'bloody_mary_mirror_shard',
    name: "Bloody Mary Mirror Shard",
    icon: '🪞',
    category: 'exotic',
    rarity: 'legendary',
    cost: 3500,
    description: "A shard from the mirror used to summon Bloody Mary. It shows reflections of the dead.",
    properties: [
        "Can communicate with any dead person who has died in front of a mirror",
        "Used to create artifacts of reflection and death",
        "Grants the ability to see ghosts in mirrors",
        "Can trap souls in mirror dimensions"
    ],
    source: "Broken from the original summoning mirror",
    uses: ["Death Communication", "Mirror Dimension Traps", "Ghost Sight"]
},

'wendigo_heart': {
    id: 'wendigo_heart',
    name: "Wendigo Heart (Frozen)",
    icon: '❤️',
    category: 'exotic',
    rarity: 'legendary',
    cost: 4200,
    description: "The frozen heart of a wendigo. It still beats, but with hunger instead of blood.",
    properties: [
        "Can induce insatiable hunger in any creature (DC 20 WIS save)",
        "Used to create artifacts of cannibalism and winter",
        "Grants immunity to cold and starvation",
        "Can be used to transform into a wendigo (permanent)"
    ],
    source: "Harvested from wendigos in the coldest winters",
    uses: ["Hunger Induction", "Wendigo Transformation", "Winter Artifacts"]
},

'bigfoot_fur_clump': {
    id: 'bigfoot_fur_clump',
    name: "Bigfoot Fur Clump",
    icon: '🦶',
    category: 'exotic',
    rarity: 'legendary',
    cost: 2800,
    description: "A clump of fur from a sasquatch. It smells of forest and mystery.",
    properties: [
        "Grants perfect stealth in forests (cannot be tracked by any means)",
        "Used to create artifacts of hiding and nature",
        "Grants the ability to speak with all forest creatures",
        "Can be used to summon a bigfoot (1/week, CR 12)"
    ],
    source: "Collected from bigfoot nests (extremely rare)",
    uses: ["Forest Stealth", "Nature Communication", "Bigfoot Summoning"]
},

'mothman_wing_dust': {
    id: 'mothman_wing_dust',
    name: "Mothman Wing Dust",
    icon: '🦋',
    category: 'exotic',
    rarity: 'legendary',
    cost: 3800,
    description: "Luminous dust from a mothman's wings. It smells of ozone and prophecy.",
    properties: [
        "Can grant visions of future disasters (always accurate but unavoidable)",
        "Used to create artifacts of prophecy and doom",
        "Grants the ability to see invisible creatures",
        "Can be used to cause disasters (1/month)"
    ],
    source: "Collected from mothman sightings (usually before disasters)",
    uses: ["Disaster Visions", "Prophecy Items", "Invisibility Sight"]
},

'lovecraftian_fishfolk_scale': {
    id: 'lovecraftian_fishfolk_scale',
    name: "Deep One Scale",
    icon: '🐟',
    category: 'exotic',
    rarity: 'legendary',
    cost: 3200,
    description: "A scale from a Deep One. It smells of the ocean and ancient rites.",
    properties: [
        "Grants water breathing and deep sea survival",
        "Used to create artifacts of oceanic worship",
        "Grants the ability to communicate with deep sea horrors",
        "Can be used to transform into a Deep One (gradual)"
    ],
    source: "Collected from Deep One temples or sacrifices",
    uses: ["Deep Sea Survival", "Oceanic Artifacts", "Deep One Transformation"]
},

// ========== MISCELLANEOUS EXOTICS ==========
'unicorn_horn_powder': {
    id: 'unicorn_horn_powder',
    name: "Unicorn Horn Powder (Pure)",
    icon: '🦄',
    category: 'exotic',
    rarity: 'legendary',
    cost: 8000,
    description: "Powder from a unicorn's horn, freely given. It can cure any ailment.",
    properties: [
        "Can cure any disease, poison, or curse instantly",
        "Used to create artifacts of purity",
        "Grants immunity to all toxins and diseases permanently",
        "Can be used to purify water on a continental scale"
    ],
    source: "Only from unicorns that willingly give their horn (extremely rare)",
    uses: ["Universal Cure", "Purity Artifacts", "Water Purification"]
},

'phoenix_tear_crystal': {
    id: 'phoenix_tear_crystal',
    name: "Phoenix Tear Crystal",
    icon: '💎',
    category: 'exotic',
    rarity: 'mythic',
    cost: 12000,
    description: "A crystal formed from a phoenix's tear. It contains the power of rebirth.",
    properties: [
        "Can resurrect any creature (no time limit)",
        "Used to create artifacts of rebirth",
        "Grants the user the phoenix's rebirth ability (1/year)",
        "Can be used to enchant items that resurrect their owner"
    ],
    source: "Only obtainable by making a phoenix cry (which requires great sacrifice)",
    uses: ["True Resurrection", "Phoenix Rebirth Items", "Self-Resurrecting Gear"]
},

'true_silver_moonbeam': {
    id: 'true_silver_moonbeam',
    name: "True Silver Moonbeam",
    icon: '🌙',
    category: 'exotic',
    rarity: 'legendary',
    cost: 5000,
    description: "A moonbeam solidified into liquid silver. It is the essence of moonlight.",
    properties: [
        "Can create permanent moonlight (even during the day)",
        "Used to create artifacts of lunar power",
        "Grants immunity to lycanthropy and can cure it",
        "Can be used to forge silver weapons that never tarnish"
    ],
    source: "Collected during a lunar eclipse by lunar elves",
    uses: ["Permanent Moonlight", "Lycanthrope Cure", "Eternal Silver Weapons"]
},

'vorpal_rabbit_foot': {
    id: 'vorpal_rabbit_foot',
    name: "Vorpal Rabbit Foot",
    icon: '🐰',
    category: 'exotic',
    rarity: 'legendary',
    cost: 4500,
    description: "The foot of a rabbit with a taste for blood. It is incredibly lucky for the owner.",
    properties: [
        "Grants +5 luck bonus to all saves and attacks",
        "Can be used to create artifacts of luck",
        "Grants the ability to reroll any roll (3/day)",
        "Can be used to curse enemies with bad luck"
    ],
    source: "Taken from the Killer Rabbit of Caerbannog",
    uses: ["Luck Items", "Reroll Abilities", "Curse Enemies"]
},

'jackalope_antler_powder': {
    id: 'jackalope_antler_powder',
    name: "Jackalope Antler Powder",
    icon: '🦌',
    category: 'exotic',
    rarity: 'legendary',
    cost: 2800,
    description: "Powdered antlers from a jackalope. It can grant speed and cunning.",
    properties: [
        "Grants +20ft movement speed permanently",
        "Used to create artifacts of speed",
        "Grants advantage on initiative rolls",
        "Can be used to create teleportation hops (10ft, at-will)"
    ],
    source: "Collected from jackalopes in the American West",
    uses: ["Speed Items", "Initiative Boost", "Teleportation"]
},

// ========== COSMIC EXOTICS ==========
'neutron_star_fragment': {
    id: 'neutron_star_fragment',
    name: "Neutron Star Fragment",
    icon: '⭐',
    category: 'exotic',
    rarity: 'mythic',
    cost: 20000,
    description: "A fragment of a neutron star. It is the size of a grain of sand but weighs a ton.",
    properties: [
        "Weighs 2000 lbs despite being tiny (requires STR 25 to lift)",
        "Can be used to create artifacts of immense density",
        "Grants immunity to piercing damage (nothing can pierce it)",
        "Can be used to create gravitational singularities"
    ],
    source: "Only obtainable from dead stars",
    uses: ["Dense Weapons", "Gravitational Artifacts", "Piercing Immunity"]
},

'black_hole_pearl': {
    id: 'black_hole_pearl',
    name: "Black Hole Pearl",
    icon: '⚫',
    category: 'exotic',
    rarity: 'mythic',
    cost: 25000,
    description: "A pearl formed around a microscopic black hole. It devours light and magic.",
    properties: [
        "Absorbs all light and magic within 5ft",
        "Can be used to create artifacts of void",
        "Grants immunity to magic (including beneficial)",
        "Can be used to destroy magical items permanently"
    ],
    source: "Only formed in the accretion disks of black holes",
    uses: ["Magic Absorption", "Void Artifacts", "Magic Immunity"]
},

'supernova_echo': {
    id: 'supernova_echo',
    name: "Supernova Echo",
    icon: '💥',
    category: 'exotic',
    rarity: 'mythic',
    cost: 18000,
    description: "The sound of a supernova, captured in a bottle. It is silent but deafening.",
    properties: [
        "Can deafen any creature permanently (DC 30 CON save)",
        "Used to create artifacts of destruction",
        "Grants immunity to sound-based effects",
        "Can be used to amplify any spell by 100x (1 use only)"
    ],
    source: "Captured by cosmic bards during stellar collapse",
    uses: ["Permanent Deafening", "Spell Amplification", "Destruction Artifacts"]
},

'cosmic_microwave_background': {
    id: 'cosmic_microwave_background',
    name: "Cosmic Microwave Background",
    icon: '🌌',
    category: 'exotic',
    rarity: 'legendary',
    cost: 8000,
    description: "The echo of the Big Bang, captured in a crystal. It is the oldest thing in existence.",
    properties: [
        "Can age any object to the end of time instantly",
        "Used to create artifacts of time and space",
        "Grants immunity to aging effects",
        "Can be used to see the beginning of the universe"
    ],
    source: "Collected from the edge of the observable universe",
    uses: ["Time Aging", "Time Artifacts", "Universe Viewing"]
},

'quantum_entanglement_string': {
    id: 'quantum_entanglement_string',
    name: "Quantum Entanglement String",
    icon: '🧵',
    category: 'exotic',
    rarity: 'mythic',
    cost: 12000,
    description: "A string that is entangled with every other string in existence. Pulling it affects everything.",
    properties: [
        "Can affect any object anywhere (no range limit)",
        "Used to create artifacts of omnipresence",
        "Grants the ability to be in two places at once",
        "Can be used to teleport anywhere instantly"
    ],
    source: "Only obtainable by quantum entangling with the universe",
    uses: ["Omnipresence Items", "Unlimited Teleportation", "Universal Connection"]
},
    // ============================================
// === 50 EXOTIC INGREDIENTS ===
// ============================================

// ========== TEMPORAL & CHRONAL ==========
'frozen_moment_tea': {
    id: 'frozen_moment_tea',
    name: "Frozen Moment Tea Leaves",
    icon: '🍵',
    category: 'alchemical',
    rarity: 'very_rare',
    cost: 850,
    description: "Tea leaves that were harvested in a moment frozen in time. They never age and brew instantly.",
    properties: [
        "Brews instantly when placed in any liquid",
        "Drinker gains advantage on initiative for 1 hour",
        "Can be used to create potions of haste",
        "Leaves remain fresh for eternity"
    ],
    source: "Harvested from the Garden of Stopped Time",
    uses: ["Haste Potions", "Initiative Boosters", "Instant Brews"]
},

'echo_blossom': {
    id: 'echo_blossom',
    name: "Echo Blossom",
    icon: '🌸',
    category: 'potion',
    rarity: 'rare',
    cost: 450,
    description: "A flower that blooms in reverse, from wilted to bud. It repeats the last sound it heard.",
    properties: [
        "Repeats the last spoken phrase when touched",
        "Used in potions of message sending",
        "Can store up to 1 minute of sound",
        "Blooms backward every dawn"
    ],
    source: "Found in valleys where time flows strangely",
    uses: ["Message Potions", "Sound Storage", "Temporal Studies"]
},

'yesterday_berries': {
    id: 'yesterday_berries',
    name: "Yesterday Berries",
    icon: '🫐',
    category: 'consumable',
    rarity: 'uncommon',
    cost: 200,
    description: "Berries that taste like your favorite childhood memory. They're always slightly out of reach.",
    properties: [
        "Eater recalls a happy memory vividly",
        "Grants advantage on saves vs. fear for 1 hour",
        "Can be used to create potions of calm emotions",
        "Always feel like they were picked 'just yesterday'"
    ],
    source: "Grown in the Garden of Nostalgia",
    uses: ["Calm Emotions Potions", "Memory Enhancement", "Fear Resistance"]
},

'tomorrow_root': {
    id: 'tomorrow_root',
    name: "Tomorrow Root",
    icon: '🌱',
    category: 'alchemical',
    rarity: 'rare',
    cost: 600,
    description: "A root that hasn't grown yet. It exists in a state of potential.",
    properties: [
        "Can be 'planted' to grow into any herb (takes 24 hours)",
        "Used in divination potions",
        "Gives a vague sense of future events when chewed",
        "Always feels slightly unreal"
    ],
    source: "Dug up from soil that hasn't been tilled yet",
    uses: ["Divination Potions", "Herb Transformation", "Future Sensing"]
},

// ========== EMOTIONAL & PSYCHIC ==========
'crystallized_laughter': {
    id: 'crystallized_laughter',
    name: "Crystallized Laughter",
    icon: '💎',
    category: 'enchanting',
    rarity: 'rare',
    cost: 550,
    description: "Tiny crystals that form when genuine laughter echoes in a cave for centuries.",
    properties: [
        "When crushed, releases infectious laughter (DC 15 WIS save or laugh for 1 minute)",
        "Used in potions of charm",
        "Can be used to create joyful illusions",
        "Glows faintly when someone nearby is happy"
    ],
    source: "Mined from the Laughter Caverns of the Feywild",
    uses: ["Charm Potions", "Joyful Illusions", "Mood Detection"]
},

'solidified_grief': {
    id: 'solidified_grief',
    name: "Solidified Grief",
    icon: '💧',
    category: 'alchemical',
    rarity: 'rare',
    cost: 500,
    description: "Tears that have fallen so long they've turned to glass. They're always cold to the touch.",
    properties: [
        "Can induce sadness in creatures (DC 15 CHA save)",
        "Used in potions of sorrow (causes disadvantage on attacks)",
        "Can be used to create mirrors that show sad memories",
        "Never warms up, even in fire"
    ],
    source: "Collected from the Weeping Falls",
    uses: ["Sorrow Potions", "Memory Mirrors", "Emotional Manipulation"]
},

'rage_petal': {
    id: 'rage_petal',
    name: "Rage Petal",
    icon: '🌺',
    category: 'potion',
    rarity: 'uncommon',
    cost: 300,
    description: "A flower petal that turns red when angry thoughts are directed at it.",
    properties: [
        "Turns bright red when exposed to anger",
        "Used in potions of berserker rage",
        "Can be used to detect hostile intent",
        "Wilts instantly when exposed to genuine kindness"
    ],
    source: "Grown in battlefields where anger lingers",
    uses: ["Rage Potions", "Hostility Detection", "Emotional Sensors"]
},

'hope_seed': {
    id: 'hope_seed',
    name: "Hope Seed",
    icon: '🌱',
    category: 'plant',
    rarity: 'very_rare',
    cost: 1200,
    description: "A seed that only germinates when planted by someone with genuine hope.",
    properties: [
        "Grows into a plant that glows in darkness",
        "Used in potions of inspiration",
        "Can be used to create light in hopeless situations",
        "Withers if the planter loses hope"
    ],
    source: "Found in the pockets of saints and heroes",
    uses: ["Inspiration Potions", "Hope-based Lighting", "Moral Compasses"]
},

// ========== DREAM & NIGHTMARE ==========
'dream_cotton': {
    id: 'dream_cotton',
    name: "Dream Cotton",
    icon: '☁️',
    category: 'enchanting',
    rarity: 'uncommon',
    cost: 350,
    description: "Cotton harvested from dream-sheep that graze in the Dreamlands. It's impossibly soft.",
    properties: [
        "Sleeping on it guarantees pleasant dreams",
        "Used in potions of sleep",
        "Can be woven into cloaks that protect from nightmares",
        "Always feels warm and comforting"
    ],
    source: "Harvested from dream-sheep in the Dreamlands",
    uses: ["Sleep Potions", "Nightmare Protection", "Comfort Items"]
},

'nightmare_thorn': {
    id: 'nightmare_thorn',
    name: "Nightmare Thorn",
    icon: '🌵',
    category: 'alchemical',
    rarity: 'rare',
    cost: 600,
    description: "A thorn from a bush that grows in the worst nightmares. It's always slightly blurry.",
    properties: [
        "Causes vivid nightmares if it pierces skin (DC 15 CON save)",
        "Used in potions of fear",
        "Can be used to create weapons that cause terror",
        "Can't be seen clearly in bright light"
    ],
    source: "Harvested from the Nightmare Brambles",
    uses: ["Fear Potions", "Terror Weapons", "Nightmare Induction"]
},

'lucid_leaf': {
    id: 'lucid_leaf',
    name: "Lucid Leaf",
    icon: '🍃',
    category: 'potion',
    rarity: 'rare',
    cost: 700,
    description: "A leaf that helps you realize you're dreaming while you're dreaming.",
    properties: [
        "Chewing it grants lucid dreaming for one night",
        "Used in potions of awareness",
        "Can be used to enter others' dreams",
        "Glows faintly when the holder is asleep"
    ],
    source: "Grown in the Lucid Grove of the Dreamlands",
    uses: ["Awareness Potions", "Dream Walking", "Lucid Dreaming"]
},

'daymare_blossom': {
    id: 'daymare_blossom',
    name: "Daymare Blossom",
    icon: '🌼',
    category: 'alchemical',
    rarity: 'very_rare',
    cost: 900,
    description: "A flower that blooms only during waking nightmares. It's unsettlingly beautiful.",
    properties: [
        "Causes waking hallucinations (DC 16 WIS save)",
        "Used in potions of confusion",
        "Can be used to create art that moves when not watched",
        "Only visible to those experiencing anxiety"
    ],
    source: "Found in places of existential dread",
    uses: ["Confusion Potions", "Anxiety Art", "Hallucination Induction"]
},

// ========== MUSICAL & SONIC ==========
'chord_moss': {
    id: 'chord_moss',
    name: "Chord Moss",
    icon: '🎵',
    category: 'enchanting',
    rarity: 'uncommon',
    cost: 400,
    description: "Moss that grows in perfect musical harmony. It hums when touched.",
    properties: [
        "Produces a perfect chord when squeezed",
        "Used in potions of charm person",
        "Can be used to tune magical instruments perfectly",
        "Grows in patterns that match musical scores"
    ],
    source: "Found in echo caves and concert halls",
    uses: ["Charm Potions", "Instrument Tuning", "Musical Magic"]
},

'resonance_crystal': {
    id: 'resonance_crystal',
    name: "Resonance Crystal",
    icon: '💎',
    category: 'enchanting',
    rarity: 'rare',
    cost: 650,
    description: "A crystal that vibrates at the same frequency as the universe. It sings constantly.",
    properties: [
        "Can shatter glass with its vibration",
        "Used in potions of thunderwave",
        "Can be used to detect invisible creatures (they disrupt its song)",
        "Always emits a faint, beautiful hum"
    ],
    source: "Mined from the Singing Mountains",
    uses: ["Thunderwave Potions", "Invisibility Detection", "Sonic Weapons"]
},

'silence_lichen': {
    id: 'silence_lichen',
    name: "Silence Lichen",
    icon: '🍄',
    category: 'alchemical',
    rarity: 'rare',
    cost: 550,
    description: "Lichen that absorbs all sound around it. It feels unnaturally quiet to touch.",
    properties: [
        "Creates a 5ft radius of silence when activated",
        "Used in potions of silence",
        "Can be used to muffle footsteps",
        "Feels like touching absolute quiet"
    ],
    source: "Grows in the Silent Forest where no sound exists",
    uses: ["Silence Potions", "Stealth Enhancement", "Sound Absorption"]
},

'echo_fruit': {
    id: 'echo_fruit',
    name: "Echo Fruit",
    icon: '🍎',
    category: 'consumable',
    rarity: 'uncommon',
    cost: 250,
    description: "A fruit that repeats the last thing you said when you bite into it.",
    properties: [
        "Repeats the eater's last spoken words",
        "Used in potions of message",
        "Can be used to create recording devices",
        "Tastes like whatever the eater last ate"
    ],
    source: "Grown in canyons with strong echoes",
    uses: ["Message Potions", "Sound Recording", "Memory Taste"]
},

// ========== GRAVITY & SPACE ==========
'weightless_petal': {
    id: 'weightless_petal',
    name: "Weightless Petal",
    icon: '🌸',
    category: 'enchanting',
    rarity: 'very_rare',
    cost: 1100,
    description: "A flower petal that defies gravity. It floats gently unless held down.",
    properties: [
        "Floats indefinitely unless weighted",
        "Used in potions of levitation",
        "Can be used to create anti-gravity devices",
        "Always moves upward at 1ft per round"
    ],
    source: "Grown in zero-gravity gardens on floating islands",
    uses: ["Levitation Potions", "Anti-Gravity Devices", "Floating Items"]
},

'heavy_dew': {
    id: 'heavy_dew',
    name: "Heavy Dew",
    icon: '💧',
    category: 'alchemical',
    rarity: 'rare',
    cost: 700,
    description: "Morning dew that's unnaturally heavy. A single drop weighs a pound.",
    properties: [
        "Extremely dense and heavy",
        "Used in potions of enlarge/reduce",
        "Can be used to anchor floating objects",
        "Sinks through most containers"
    ],
    source: "Collected from leaves under intense gravitational fields",
    uses: ["Enlarge/Reduce Potions", "Anchors", "Weight Enhancement"]
},

'warped_seed': {
    id: 'warped_seed',
    name: "Warped Seed",
    icon: '🌰',
    category: 'enchanting',
    rarity: 'very_rare',
    cost: 1300,
    description: "A seed that grows in non-Euclidean patterns. It hurts to look at for too long.",
    properties: [
        "Grows in impossible geometric shapes",
        "Used in potions of dimension door",
        "Can be used to create bags of holding",
        "Causes mild nausea when examined closely"
    ],
    source: "Found in areas where space is warped",
    uses: ["Dimension Door Potions", "Spatial Magic", "Non-Euclidean Art"]
},

'void_blossom': {
    id: 'void_blossom',
    name: "Void Blossom",
    icon: '🌺',
    category: 'alchemical',
    rarity: 'legendary',
    cost: 2000,
    description: "A flower that blooms in perfect vacuum. It absorbs light around it.",
    properties: [
        "Creates a small area of darkness around it",
        "Used in potions of darkness",
        "Can be used to create portals to the void",
        "Doesn't require air, water, or light to survive"
    ],
    source: "Grown in sealed chambers with all air removed",
    uses: ["Darkness Potions", "Void Magic", "Light Absorption"]
},

// ========== MIRROR & REFLECTION ==========
'mirror_berry': {
    id: 'mirror_berry',
    name: "Mirror Berry",
    icon: '🫐',
    category: 'consumable',
    rarity: 'uncommon',
    cost: 300,
    description: "A berry with a perfectly reflective surface. It shows a distorted version of your face.",
    properties: [
        "Acts as a perfect mirror when polished",
        "Used in potions of disguise self",
        "Can be used to create scrying mirrors",
        "Shows the eater's true self, not their reflection"
    ],
    source: "Grown on Mirror Bushes in the Feywild",
    uses: ["Disguise Potions", "Scrying Devices", "Truth Revealing"]
},

'echo_glass_shard': {
    id: 'echo_glass_shard',
    name: "Echo Glass Shard",
    icon: '🔮',
    category: 'enchanting',
    rarity: 'rare',
    cost: 600,
    description: "A piece of glass that shows what happened in that location yesterday.",
    properties: [
        "Shows past events when looked through",
        "Used in potions of clairvoyance",
        "Can be used to create windows to the past",
        "Shatters if shown the future"
    ],
    source: "Collected from windows in ancient ruins",
    uses: ["Clairvoyance Potions", "Past Viewing", "Historical Research"]
},

'refraction_crystal': {
    id: 'refraction_crystal',
    name: "Refraction Crystal",
    icon: '💎',
    category: 'enchanting',
    rarity: 'uncommon',
    cost: 450,
    description: "A crystal that bends light in impossible ways. Looking through it shows multiple realities.",
    properties: [
        "Shows possible alternate realities",
        "Used in potions of true seeing",
        "Can be used to create illusion-dispelling lenses",
        "Causes mild disorientation when used"
    ],
    source: "Mined from the Prism Caves",
    uses: ["True Seeing Potions", "Illusion Dispelling", "Reality Viewing"]
},

'shadow_ink': {
    id: 'shadow_ink',
    name: "Shadow Ink",
    icon: '🖋️',
    category: 'scroll',
    rarity: 'rare',
    cost: 550,
    description: "Ink made from solidified shadows. It writes in darkness that absorbs light.",
    properties: [
        "Only visible in darkness or with darkvision",
        "Used for illusion and shadow magic scrolls",
        "Can be used to write secret messages",
        "The writing moves slightly when not watched"
    ],
    source: "Extracted from the Shadowfell or deep caves",
    uses: ["Shadow Scrolls", "Secret Messages", "Darkness Writing"]
},

// ========== ELEMENTAL PARADOXES ==========
'cold_fire_ember': {
    id: 'cold_fire_ember',
    name: "Cold Fire Ember",
    icon: '❄️',
    category: 'alchemical',
    rarity: 'very_rare',
    cost: 950,
    description: "An ember that burns with intense cold instead of heat. It freezes what it touches.",
    properties: [
        "Deals cold damage instead of fire",
        "Used in potions of fire resistance (paradoxically)",
        "Can be used to create cold flames",
        "Extinguishes in warm environments"
    ],
    source: "Found in places where fire and ice magic collided",
    uses: ["Cold Flame Creation", "Fire Resistance", "Paradox Magic"]
},

'dry_water': {
    id: 'dry_water',
    name: "Dry Water",
    icon: '💧',
    category: 'alchemical',
    rarity: 'rare',
    cost: 650,
    description: "Water that isn't wet. It flows and reflects like water but doesn't moisten anything.",
    properties: [
        "Doesn't make things wet",
        "Used in potions of water breathing (without getting wet)",
        "Can be used to create waterproof coatings",
        "Feels like touching air that flows"
    ],
    source: "Collected from the Dry Sea (a desert that was once an ocean)",
    uses: ["Water Breathing Potions", "Waterproofing", "Paradox Studies"]
},

'soft_stone': {
    id: 'soft_stone',
    name: "Soft Stone",
    icon: '🪨',
    category: 'smithing',
    rarity: 'uncommon',
    cost: 350,
    description: "Stone that's as soft as clay but hardens when struck. It remembers impacts.",
    properties: [
        "Soft until struck, then becomes hard",
        "Used in adaptive armor crafting",
        "Can be used to create memory metal",
        "Shows imprints of everything that hit it"
    ],
    source: "Mined from the Memory Mountains",
    uses: ["Adaptive Armor", "Memory Metal", "Impact Recording"]
},

'loud_silence': {
    id: 'loud_silence',
    name: "Loud Silence",
    icon: '🔇',
    category: 'enchanting',
    rarity: 'rare',
    cost: 700,
    description: "A jar containing absolute silence that's somehow deafeningly loud.",
    properties: [
        "Creates silence so complete it's painful",
        "Used in potions of deafness",
        "Can be used to disrupt sonic attacks",
        "The jar feels like it's vibrating intensely"
    ],
    source: "Captured in the Quietest Valley (where silence has weight)",
    uses: ["Deafness Potions", "Sonic Disruption", "Silence Magic"]
},

// ========== LIVING CONCEPTS ==========
'growing_idea': {
    id: 'growing_idea',
    name: "Growing Idea",
    icon: '💡',
    category: 'enchanting',
    rarity: 'very_rare',
    cost: 1500,
    description: "A thought made physical. It changes form as you think about it.",
    properties: [
        "Changes shape based on nearby thoughts",
        "Used in potions of intellect",
        "Can be used to create thought-responsive items",
        "Grows when people have good ideas near it"
    ],
    source: "Harvested from the Idea Gardens of the Astral Plane",
    uses: ["Intellect Potions", "Thought-Responsive Items", "Idea Cultivation"]
},

'forgotten_memory_moss': {
    id: 'forgotten_memory_moss',
    name: "Forgotten Memory Moss",
    icon: '🍄',
    category: 'alchemical',
    rarity: 'rare',
    cost: 800,
    description: "Moss that grows on things no one remembers. It tastes like nostalgia for something unknown.",
    properties: [
        "Causes mild amnesia when ingested (DC 14 WIS save)",
        "Used in potions of modify memory",
        "Can be used to erase minor memories",
        "Glows faintly when near forgotten things"
    ],
    source: "Grows on abandoned places and lost objects",
    uses: ["Modify Memory Potions", "Memory Erasure", "Lost Item Finding"]
},

'living_metaphor': {
    id: 'living_metaphor',
    name: "Living Metaphor",
    icon: '🌀',
    category: 'enchanting',
    rarity: 'legendary',
    cost: 2200,
    description: "A metaphor that became real. Currently appears as 'a heart of gold' that beats warmly.",
    properties: [
        "Changes form based on how it's described",
        "Used in potions of polymorph",
        "Can be used to create metaphor-based magic",
        "Communicates through symbolic actions"
    ],
    source: "Found where stories become real",
    uses: ["Polymorph Potions", "Metaphor Magic", "Conceptual Artifacts"]
},

'solidified_whisper': {
    id: 'solidified_whisper',
    name: "Solidified Whisper",
    icon: '💎',
    category: 'enchanting',
    rarity: 'very_rare',
    cost: 1300,
    description: "A secret so powerful it turned to crystal. It hums with untold knowledge.",
    properties: [
        "Contains a random secret when shattered",
        "Used in potions of comprehend languages",
        "Can be used to create truth-revealing items",
        "Whispers to those nearby but can't be understood"
    ],
    source: "Found in libraries where secrets are kept too long",
    uses: ["Comprehend Languages Potions", "Truth Revelation", "Secret Storage"]
},

// ========== BIOLOGICAL CURIOSITIES ==========
'photosynthetic_fungus': {
    id: 'photosynthetic_fungus',
    name: "Photosynthetic Fungus",
    icon: '🍄',
    category: 'alchemical',
    rarity: 'uncommon',
    cost: 400,
    description: "A mushroom that acts like a plant, converting sunlight to energy. It glows in the dark.",
    properties: [
        "Glows with stored sunlight at night",
        "Used in potions of daylight",
        "Can be used as a light source",
        "Tastes like sunlight and earth"
    ],
    source: "Grows in clearings where magic and biology mix",
    uses: ["Daylight Potions", "Bioluminescent Light", "Hybrid Studies"]
},

'breathing_stone': {
    id: 'breathing_stone',
    name: "Breathing Stone",
    icon: '🪨',
    category: 'enchanting',
    rarity: 'rare',
    cost: 600,
    description: "A rock that expands and contracts slowly, as if breathing. It's warm to the touch.",
    properties: [
        "Expands and contracts rhythmically",
        "Used in potions of stone skin",
        "Can be used to create living stone constructs",
        "Pulses with a slow, steady rhythm"
    ],
    source: "Found in mountains that are said to sleep",
    uses: ["Stone Skin Potions", "Living Stone", "Earth Magic"]
},

'singing_coral': {
    id: 'singing_coral',
    name: "Singing Coral",
    icon: '🎵',
    category: 'alchemical',
    rarity: 'uncommon',
    cost: 350,
    description: "Coral that produces beautiful harmonies when underwater currents pass through it.",
    properties: [
        "Produces music in moving water",
        "Used in potions of water breathing",
        "Can be used to create aquatic communication devices",
        "Changes pitch with water temperature"
    ],
    source: "Harvested from the Singing Reefs",
    uses: ["Water Breathing Potions", "Aquatic Communication", "Musical Magic"]
},

'blinking_moss': {
    id: 'blinking_moss',
    name: "Blinking Moss",
    icon: '🍄',
    category: 'enchanting',
    rarity: 'rare',
    cost: 700,
    description: "Moss that teleports short distances when observed. It's always just out of reach.",
    properties: [
        "Teleports 5ft when someone looks directly at it",
        "Used in potions of misty step",
        "Can be used to create teleportation anchors",
        "Feels like it's vibrating at high frequency"
    ],
    source: "Grows in areas with unstable spacetime",
    uses: ["Misty Step Potions", "Teleportation Magic", "Quantum Studies"]
},

// ========== WEATHER & SEASONAL ==========
'captured_thunder': {
    id: 'captured_thunder',
    name: "Captured Thunder",
    icon: '⚡',
    category: 'alchemical',
    rarity: 'rare',
    cost: 750,
    description: "A glass bottle containing the sound of thunder from a perfect storm. It rumbles when shaken.",
    properties: [
        "Releases thunderous boom when opened",
        "Used in potions of thunderwave",
        "Can be used to create storm-calling devices",
        "The bottle feels like it's vibrating"
    ],
    source: "Collected during once-in-a-century storms",
    uses: ["Thunderwave Potions", "Storm Calling", "Sonic Weapons"]
},

'frozen_lightning': {
    id: 'frozen_lightning',
    name: "Frozen Lightning",
    icon: '❄️',
    category: 'enchanting',
    rarity: 'very_rare',
    cost: 1200,
    description: "Lightning bolt frozen in mid-air. It crackles with cold energy.",
    properties: [
        "Deals both lightning and cold damage",
        "Used in potions of shocking grasp (cold version)",
        "Can be used to create hybrid elemental weapons",
        "Hovers in place unless moved"
    ],
    source: "Found at the poles during electrical storms",
    uses: ["Elemental Hybrid Potions", "Lightning/Cold Weapons", "Storm Magic"]
},

'season_essence': {
    id: 'season_essence',
    name: "Season Essence",
    icon: '🍂',
    category: 'alchemical',
    rarity: 'rare',
    cost: 800,
    description: "Four vials containing spring, summer, autumn, and winter in concentrated form.",
    properties: [
        "Each vial changes local weather to its season",
        "Used in potions of plant growth (spring) or control weather",
        "Can be used to create seasonal magic items",
        "The vials change temperature with their season"
    ],
    source: "Distilled from the first day of each season",
    uses: ["Control Weather Potions", "Seasonal Magic", "Climate Control"]
},

'rainbow_sap': {
    id: 'rainbow_sap',
    name: "Rainbow Sap",
    icon: '🌈',
    category: 'alchemical',
    rarity: 'uncommon',
    cost: 450,
    description: "Sap that refracts light into rainbows. It's sticky and shifts colors constantly.",
    properties: [
        "Creates rainbows in sunlight",
        "Used in potions of color spray",
        "Can be used to create prismatic items",
        "Changes color based on viewer's mood"
    ],
    source: "Tapped from Rainbow Trees after storms",
    uses: ["Color Spray Potions", "Prismatic Magic", "Mood Detection"]
},

// ========== CULINARY MAGIC ==========
'neverending_salt': {
    id: 'neverending_salt',
    name: "Neverending Salt",
    icon: '🧂',
    category: 'consumable',
    rarity: 'uncommon',
    cost: 300,
    description: "Salt that replenishes itself overnight. A single grain can season a feast.",
    properties: [
        "Replenishes to full overnight",
        "Used in preservation potions",
        "Can be used to create infinite food supplies",
        "Enhances the flavor of any food"
    ],
    source: "Mined from the Salt Caves of Plenty",
    uses: ["Preservation Potions", "Infinite Seasoning", "Culinary Magic"]
},

'hunger_pepper': {
    id: 'hunger_pepper',
    name: "Hunger Pepper",
    icon: '🌶️',
    category: 'consumable',
    rarity: 'rare',
    cost: 550,
    description: "A pepper that makes you hungrier the more you eat. It's addictively spicy.",
    properties: [
        "Increases hunger instead of satisfying it",
        "Used in potions of heroism (by increasing desire)",
        "Can be used to create craving-inducing items",
        "The spiciness increases exponentially"
    ],
    source: "Grown in the Hunger Gardens",
    uses: ["Heroism Potions", "Craving Induction", "Spice Magic"]
},

'feast_fungus': {
    id: 'feast_fungus',
    name: "Feast Fungus",
    icon: '🍄',
    category: 'consumable',
    rarity: 'uncommon',
    cost: 400,
    description: "A mushroom that tastes like whatever food you're thinking of. It's always satisfying.",
    properties: [
        "Tastes like the eater's favorite food",
        "Used in potions of goodberry",
        "Can be used to create illusionary feasts",
        "Provides complete nutrition"
    ],
    source: "Grows in banquet halls and places of celebration",
    uses: ["Goodberry Potions", "Illusionary Feasts", "Nutrition Magic"]
},

'forgotten_spice': {
    id: 'forgotten_spice',
    name: "Forgotten Spice",
    icon: '🌿',
    category: 'alchemical',
    rarity: 'very_rare',
    cost: 1100,
    description: "A spice from a recipe lost to time. It tastes like nostalgia and memory.",
    properties: [
        "Causes vivid food memories when tasted",
        "Used in potions of modify memory (food-related)",
        "Can be used to recreate lost recipes",
        "The flavor changes based on who tastes it"
    ],
    source: "Found in ancient kitchens and lost cookbooks",
    uses: ["Memory Potions", "Recipe Recreation", "Nostalgia Magic"]
},

// ========== MISCELLANEOUS WONDERS ==========
'luck_root': {
    id: 'luck_root',
    name: "Luck Root",
    icon: '🍀',
    category: 'alchemical',
    rarity: 'rare',
    cost: 900,
    description: "A root that grows in the shape of four-leaf clovers. It feels fortunate to hold.",
    properties: [
        "Grants advantage on one luck-based roll",
        "Used in potions of luck",
        "Can be used to create lucky charms",
        "Wilts when its luck is used"
    ],
    source: "Dug up from fields where many four-leaf clovers grow",
    uses: ["Luck Potions", "Lucky Charms", "Fortune Magic"]
},

'fate_thread': {
    id: 'fate_thread',
    name: "Fate Thread",
    icon: '🧵',
    category: 'enchanting',
    rarity: 'very_rare',
    cost: 1400,
    description: "A thread from the tapestry of fate. It glows with potential futures.",
    properties: [
        "Can be tied to alter small probabilities",
        "Used in potions of foresight",
        "Can be used to create destiny-altering items",
        "Changes color based on nearby fate events"
    ],
    source: "Found where fate weavers work",
    uses: ["Foresight Potions", "Destiny Items", "Probability Manipulation"]
},

'echo_of_a_wish': {
    id: 'echo_of_a_wish',
    name: "Echo of a Wish",
    icon: '🌟',
    category: 'enchanting',
    rarity: 'legendary',
    cost: 2500,
    description: "The lingering energy of a powerful wish. It hums with unrealized potential.",
    properties: [
        "Can grant a minor wish (DM's discretion)",
        "Used in potions of wish (diluted)",
        "Can be used to power wish-like magic items",
        "Fades after one use"
    ],
    source: "Collected from places where powerful wishes were made",
    uses: ["Wish Potions", "Wish-like Items", "Reality Manipulation"]
},

'perfect_symmetry_leaf': {
    id: 'perfect_symmetry_leaf',
    name: "Perfect Symmetry Leaf",
    icon: '🍃',
    category: 'enchanting',
    rarity: 'very_rare',
    cost: 1300,
    description: "A leaf that's perfectly symmetrical down to the molecular level. It's unnaturally beautiful.",
    properties: [
        "Creates perfect reflections when used as a mirror",
        "Used in potions of balance",
        "Can be used to create perfectly balanced items",
        "Wilts if its symmetry is broken"
    ],
    source: "Grown in the Garden of Perfect Forms",
    uses: ["Balance Potions", "Perfect Crafting", "Symmetry Magic"]
},
// ============================================
// === 50 NEW CRAFTING MATERIALS ===
// ============================================
// ============================================
// === 40 NEW PREMIUM & LEGENDARY MATERIALS ===
// ============================================

// ========== PRIMORDIAL ESSENCES ==========
'primordial_chaos_mote': {
    id: 'primordial_chaos_mote',
    name: "Primordial Chaos Mote",
    icon: '🌀',
    category: 'essence',
    rarity: 'mythic',
    cost: 5000,
    description: "A swirling mote of pure chaos from before creation. It defies containment.",
    properties: [
        "Can rewrite minor laws of reality within a 5ft radius",
        "Used in artifacts of cosmic power",
        "Grants +3 to random ability score (changes daily)",
        "Renders the user immune to order-based magic"
    ],
    source: "Harvested from the edges of reality or dying gods",
    uses: ["Cosmic Artifacts", "Reality-Warping Items", "Chaos Weapons"]
},

'pure_order_crystal': {
    id: 'pure_order_crystal',
    name: "Pure Order Crystal",
    icon: '💠',
    category: 'essence',
    rarity: 'mythic',
    cost: 5000,
    description: "A perfectly geometric crystal that enforces absolute law. It humms with mathematical precision.",
    properties: [
        "Nullifies wild magic within 30ft",
        "Used in law-bringer artifacts",
        "Grants advantage on all saves vs. chaos effects",
        "Can stabilize failing magical constructs permanently"
    ],
    source: "Mined from the heart of Mechanus or crafted by Inevitables",
    uses: ["Lawgiver Weapons", "Anti-Magic Fields", "Stabilization Devices"]
},

'time_weave_thread': {
    id: 'time_weave_thread',
    name: "Time Weave Thread",
    icon: '🧵',
    category: 'essence',
    rarity: 'legendary',
    cost: 2500,
    description: "A thread pulled from the fabric of time itself. It flickers with past and future moments.",
    properties: [
        "Can be woven into items to grant limited time manipulation",
        "Used in chronomancy items",
        "Allows wearer to see 1 second into the future (advantage on initiative)",
        "Can anchor a moment in time (1/day, 6 second rewind)"
    ],
    source: "Spun by chronomancers or harvested from time elementals",
    uses: ["Time Manipulation Items", "Precognition Gear", "Temporal Anchors"]
},

'soul_of_a_saint': {
    id: 'soul_of_a_saint',
    name: "Soul of a Saint",
    icon: '👼',
    category: 'essence',
    rarity: 'mythic',
    cost: 10000,
    description: "A purified soul that自愿 offered itself. It radiates overwhelming goodness.",
    properties: [
        "Can cleanse any corruption or curse instantly",
        "Used in holy relics of divine power",
        "Grants immunity to all diseases and poisons",
        "Can resurrect the recently dead without cost"
    ],
    source: "Only from saints who willingly transcended",
    uses: ["Holy Relics", "Purification Artifacts", "Resurrection Items"]
},

'condemned_soul_gem': {
    id: 'condemned_soul_gem',
    name: "Condemned Soul Gem",
    icon: '💀',
    category: 'essence',
    rarity: 'mythic',
    cost: 8000,
    description: "A gem containing the soul of a damned being. It screams when touched.",
    properties: [
        "Can fuel the most powerful necromantic rituals",
        "Used in cursed artifacts",
        "Grants +5 levels when casting death spells",
        "Can animate a small army of undead (50 skeletons)"
    ],
    source: "Crafted by archfiends or harvested from soul prisons",
    uses: ["Demonic Artifacts", "Mass Undead Animation", "Death Magic Amplifiers"]
},

// ========== CELESTIAL MATERIALS ==========
'angelic_feather_quill': {
    id: 'angelic_feather_quill',
    name: "Angelic Feather Quill",
    icon: '🪶',
    category: 'scroll',
    rarity: 'legendary',
    cost: 1500,
    description: "A quill made from the pinion feather of a Solar. It writes in golden light.",
    properties: [
        "Scrolls written with this quill cannot be counterspelled",
        "Grants +2 to spell save DC for divine magic",
        "Can create permanent holy symbols",
        "Ink never runs dry when writing prayers"
    ],
    source: "Gifted by angels or taken from fallen celestials",
    uses: ["Divine Scrolls", "Holy Symbol Creation", "Prayer Books"]
},

'heavenly_metal_foil': {
    id: 'heavenly_metal_foil',
    name: "Heavenly Metal Foil",
    icon: '🥇',
    category: 'smithing',
    rarity: 'legendary',
    cost: 2000,
    description: "Paper-thin metal from celestial forges that never tarnishes.",
    properties: [
        "Wrapping a weapon in this foil makes it count as holy",
        "Can be eaten to cure any disease instantly",
        "Shields made with it grant advantage vs. fiends",
        "Can seal demonic portals when applied correctly"
    ],
    source: "Forged in the Heavenly Smithies of Mount Celestia",
    uses: ["Holy Weapon Wrapping", "Disease Cure", "Portal Sealing"]
},

'divine_nectar': {
    id: 'divine_nectar',
    name: "Divine Nectar",
    icon: '🍯',
    category: 'alchemical',
    rarity: 'mythic',
    cost: 3000,
    description: "The literal nectar of the gods. A single drop can sustain life indefinitely.",
    properties: [
        "One drop sustains a creature without food/water forever",
        "Can purify any poison or toxin instantly",
        "Grants true sight for 24 hours when drunk",
        "Used as currency in celestial markets"
    ],
    source: "Collected from divine gardens or gifted by deities",
    uses: ["Immortality Elixirs", "Purification", "True Sight Potions"]
},

'archangel_wing_fragment': {
    id: 'archangel_wing_fragment',
    name: "Archangel Wing Fragment",
    icon: '⚔️',
    category: 'enchanting',
    rarity: 'legendary',
    cost: 1800,
    description: "A crystallized fragment of an archangel's battle wing. It still hums with war-songs.",
    properties: [
        "Can forge weapons that smite evil automatically",
        "Grants flight speed 60ft when attached to armor",
        "Provides immunity to fear effects",
        "Can call a celestial ally (1/week, CR 10)"
    ],
    source: "Recovered from ancient battlefields of the Blood War",
    uses: ["Holy Weapons", "Flight Armor", "Celestial Summoning"]
},

'pantheon_shard': {
    id: 'pantheon_shard',
    name: "Pantheon Shard",
    icon: '🏛️',
    category: 'enchanting',
    rarity: 'mythic',
    cost: 7500,
    description: "A fragment of a dead god's divine throne. It still echoes with their authority.",
    properties: [
        "Grants a divine rank (0) to the bearer",
        "Can command worshippers of that deity",
        "Used to forge god-killing weapons",
        "Provides immunity to that god's domain magic"
    ],
    source: "Salvaged from the ruins of dead gods' domains",
    uses: ["Divine Rank Items", "God-Killer Weapons", "Domain Immunity"]
},

// ========== INFERNAL MATERIALS ==========
'pit_fiend_horn': {
    id: 'pit_fiend_horn',
    name: "Pit Fiend Horn",
    icon: '🐂',
    category: 'monster',
    rarity: 'legendary',
    cost: 2200,
    description: "A horn from a pit fiend, still dripping with infernal ichor.",
    properties: [
        "Can command lesser devils (up to CR 5)",
        "Used to forge unholy weapons (+2d6 fire damage)",
        "Grants immunity to fire and poison",
        "Can open gates to the Nine Hells (1/month)"
    ],
    source: "Taken from slain pit fiends or gifted by archdevils",
    uses: ["Devil Command Items", "Unholy Weapons", "Hell Gate Opening"]
},

'abyssal_sludge': {
    id: 'abyssal_sludge',
    name: "Abyssal Sludge",
    icon: '🟣',
    category: 'alchemical',
    rarity: 'legendary',
    cost: 1200,
    description: "Concentrated chaos from the Abyss. It mutates anything it touches.",
    properties: [
        "Can corrupt holy items",
        "Used to create demon-breeding pits",
        "Grants random mutations (DM's choice)",
        "Can dissolve lawful-aligned magic"
    ],
    source: "Harvested from the deepest layers of the Abyss",
    uses: ["Corruption Agents", "Demon Pits", "Mutation Induction"]
},

'archdevil_contract_skin': {
    id: 'archdevil_contract_skin',
    name: "Archdevil Contract Skin",
    icon: '📜',
    category: 'scroll',
    rarity: 'mythic',
    cost: 5000,
    description: "Parchment made from the skin of an archdevil's contract victims. Inks itself with your desires.",
    properties: [
        "Any contract written on it is legally binding across all planes",
        "Cannot be torn, burned, or destroyed by non-divine means",
        "Automatically translates into the reader's native language",
        "Can store up to 10 souls as collateral"
    ],
    source: "Crafted in the Iron City of Dis",
    uses: ["Unbreakable Contracts", "Soul Storage", "Multiversal Law"]
},

'infernal_iron_ingot': {
    id: 'infernal_iron_ingot',
    name: "Infernal Iron Ingot",
    icon: '🧱',
    category: 'smithing',
    rarity: 'legendary',
    cost: 1800,
    description: "Iron quenched in the River Styx and hammered by devil smiths. It remembers betrayal.",
    properties: [
        "Forged into weapons that always deal max damage to betrayers",
        "Armor made from it grants immunity to psychic damage",
        "Can bind fiends to service (DC 20 CHA check)",
        "Never rusts, even in the Abyss"
    ],
    source: "Forged in the Hellfire Forges of Malbolge",
    uses: ["Betrayer Weapons", "Psychic Armor", "Fiend Binding"]
},

'soul_coin_blank': {
    id: 'soul_coin_blank',
    name: "Soul Coin Blank",
    icon: '🪙',
    category: 'enchanting',
    rarity: 'mythic',
    cost: 10000,
    description: "A blank soul coin ready to be minted with a trapped soul. It whispers promises of power.",
    properties: [
        "Can trap any soul (DC 25 WIS save to resist)",
        "Once filled, grants the trapped soul's highest ability modifier to the owner",
        "Can be used as currency in the Nine Hells",
        "Destroys the soul permanently if broken"
    ],
    source: "Minted in the Vault of Mammon",
    uses: ["Soul Trapping", "Ability Boosting", "Infernal Currency"]
},

// ========== ELEMENTAL PRIMORDIALS ==========
'primal_fire_heart': {
    id: 'primal_fire_heart',
    name: "Primal Fire Heart",
    icon: '🔥',
    category: 'essence',
    rarity: 'mythic',
    cost: 4000,
    description: "The still-beating heart of an Elder Fire Elemental. It burns eternally without fuel.",
    properties: [
        "Can ignite anything, even in vacuum",
        "Used to create artifacts of pure fire",
        "Grants immunity to all fire damage",
        "Can be used as an infinite power source for forges"
    ],
    source: "Taken from the heart of a dying volcano or primordial fire",
    uses: ["Infinite Fire Source", "Fire Immunity Items", "Forge Artifacts"]
},

'core_of_the_world': {
    id: 'core_of_the_world',
    name: "Core of the World",
    icon: '🌍',
    category: 'essence',
    rarity: 'mythic',
    cost: 10000,
    description: "A marble-sized sphere of the planet's core. It is impossibly heavy and hot.",
    properties: [
        "Weighs 1000 lbs despite its size (requires STR 20 to lift)",
        "Can manipulate gravity within 30ft",
        "Used to create artifacts of earth and stone",
        "Grants immunity to petrification and earth magic"
    ],
    source: "Only obtainable by reaching the center of a planet",
    uses: ["Gravity Manipulation Items", "Earth Artifacts", "Immunity Gear"]
},

'breath_of_the_first_storm': {
    id: 'breath_of_the_first_storm',
    name: "Breath of the First Storm",
    icon: '⛈️',
    category: 'essence',
    rarity: 'legendary',
    cost: 2500,
    description: "The literal first breath of the primordial storm. It contains all weather that ever was or will be.",
    properties: [
        "Can control weather patterns in a 10-mile radius",
        "Used to create artifacts of storms",
        "Grants immunity to lightning and thunder damage",
        "Can be 'exhaled' to create a permanent storm"
    ],
    source: "Captured by ancient storm gods or found in the Elemental Chaos",
    uses: ["Weather Control Items", "Storm Artifacts", "Lightning Immunity Gear"]
},

'frozen_moment': {
    id: 'frozen_moment',
    name: "Frozen Moment",
    icon: '❄️',
    category: 'essence',
    rarity: 'legendary',
    cost: 3000,
    description: "A single moment in time, frozen solid. It looks like an ice sculpture of a clock.",
    properties: [
        "Can pause time for 6 seconds (1 use only)",
        "Used to create time-stopping artifacts",
        "Grants immunity to aging effects",
        "Can be used to preserve a dying creature indefinitely"
    ],
    source: "Created by chronomancers or found in frozen timelines",
    uses: ["Time Stop Items", "Preservation Artifacts", "Age Immunity Gear"]
},

'tears_of_the_world_serpent': {
    id: 'tears_of_the_world_serpent',
    name: "Tears of the World Serpent",
    icon: '🐍',
    category: 'alchemical',
    rarity: 'mythic',
    cost: 6000,
    description: "The tears of Jormungandr or similar world-serpents. Each drop contains a lifetime of wisdom.",
    properties: [
        "Drinking a drop grants proficiency in any skill permanently",
        "Used to create artifacts of knowledge",
        "Grants immunity to poison and acid",
        "Can be used to see the past, present, and future of any location"
    ],
    source: "Only obtainable by communing with world-serpents",
    uses: ["Skill Potions", "Knowledge Artifacts", "Poison Immunity Items"]
},

// ========== ABYSSAL & ELDRITCH ==========
'blood_of_the_old_one': {
    id: 'blood_of_the_old_one',
    name: "Blood of the Old One",
    icon: '🩸',
    category: 'alchemical',
    rarity: 'mythic',
    cost: 8000,
    description: "The blood of an Elder God. It is not blood, but the concept of blood made liquid. Merely seeing it causes madness.",
    properties: [
        "Can warp reality within a 100ft radius (DM's discretion)",
        "Used to create artifacts of madness",
        "Grants immunity to psychic damage but causes permanent insanity (DC 30 WIS save)",
        "Can be used to commune with the Far Realm"
    ],
    source: "Only obtainable by foolishly contacting Elder Gods",
    uses: ["Reality Warping Items", "Madness Artifacts", "Far Realm Communion"]
},

'cthulhu_dream_fragment': {
    id: 'cthulhu_dream_fragment',
    name: "Cthulhu's Dream Fragment",
    icon: '🐙',
    category: 'essence',
    rarity: 'mythic',
    cost: 12000,
    description: "A piece of an Elder God's dream. It exists and doesn't exist simultaneously.",
    properties: [
        "Can make the user incorporeal for 1 hour (1 use only)",
        "Used to create artifacts of dreams and nightmares",
        "Grants immunity to reality-altering effects",
        "Can be used to enter dreams of any sleeping creature"
    ],
    source: "Found in the spaces between dreams",
    uses: ["Incorporeal Items", "Dream Artifacts", "Reality Immunity Gear"]
},

'yog_sothoth_knot': {
    id: 'yog_sothoth_knot',
    name: "Yog-Sothoth's Knot",
    icon: '🌀',
    category: 'enchanting',
    rarity: 'mythic',
    cost: 15000,
    description: "A piece of space-time twisted into a knot by the Outer God. It contains all times and places.",
    properties: [
        "Can teleport to any time or place (1 use only, extremely dangerous)",
        "Used to create artifacts of space-time",
        "Grants immunity to temporal magic",
        "Can be used to see all possible futures simultaneously"
    ],
    source: "Only obtainable by navigating Yog-Sothoth's realm",
    uses: ["Time Travel Items", "Space-Time Artifacts", "Temporal Immunity"]
},

'azathoth_dream': {
    id: 'azathoth_dream',
    name: "Azathoth's Dream",
    icon: '💤',
    category: 'essence',
    rarity: 'mythic',
    cost: 20000,
    description: "The dream of the Blind Idiot God. It is the source of all magic and madness.",
    properties: [
        "Can create a new magic school (DM's approval required)",
        "Used to create artifacts of ultimate power",
        "Grants immunity to all magic and anti-magic",
        "Can be used to end the universe (DM's discretion)"
    ],
    source: "Only obtainable by entering Azathoth's dreams (which is impossible)",
    uses: ["Ultimate Power Artifacts", "Magic Immunity", "Universe Ending"]
},

'elder_sign_fragment': {
    id: 'elder_sign_fragment',
    name: "Elder Sign Fragment",
    icon: '⭐',
    category: 'enchanting',
    rarity: 'legendary',
    cost: 3000,
    description: "A piece of the Elder Sign. It protects against the Outer Gods.",
    properties: [
        "Can seal a portal to the Far Realm permanently",
        "Used to create wards against eldritch beings",
        "Grants immunity to madness effects",
        "Can be used to banish any one eldritch entity"
    ],
    source: "Carved from the original Elder Signs",
    uses: ["Far Realm Seals", "Eldritch Wards", "Madness Immunity"]
},

// ========== DRACONIC MATERIALS ==========
'tiamat_breath_crystal': {
    id: 'tiamat_breath_crystal',
    name: "Tiamat's Breath Crystal",
    icon: '🐉',
    category: 'monster',
    rarity: 'mythic',
    cost: 8000,
    description: "A crystal that contains all five of Tiamat's breath weapons. It seethes with draconic fury.",
    properties: [
        "Can unleash all five breath weapons simultaneously (1 use only)",
        "Used to create artifacts of dragonkind",
        "Grants immunity to all dragon breath weapons",
        "Can command chromatic dragons (DC 25 CHA check)"
    ],
    source: "Only obtainable by defeating Tiamat or her direct offspring",
    uses: ["Dragon Artifacts", "Breath Weapon Items", "Dragon Command"]
},

'bahamut_scale_fragment': {
    id: 'bahamut_scale_fragment',
    name: "Bahamut Scale Fragment",
    icon: '🐲',
    category: 'monster',
    rarity: 'legendary',
    cost: 4000,
    description: "A piece of Bahamut's own scale. It radiates pure platinum light and justice.",
    properties: [
        "Can smite evil with radiant damage (2d10, at-will)",
        "Used to create artifacts of justice",
        "Grants immunity to fear and charm from evil creatures",
        "Can call a platinum dragon (1/year, CR 20)"
    ],
    source: "Gifted by Bahamut or taken from his slain enemies",
    uses: ["Justice Artifacts", "Radiant Smite Items", "Dragon Summoning"]
},

'dragon_god_heartstring': {
    id: 'dragon_god_heartstring',
    name: "Dragon God Heartstring",
    icon: '❤️',
    category: 'monster',
    rarity: 'mythic',
    cost: 12000,
    description: "A heartstring from a draconic deity. It thrums with the power of all dragonkind.",
    properties: [
        "Can transform the user into an ancient dragon (1/day, 1 hour)",
        "Used to create artifacts of draconic apotheosis",
        "Grants all dragon senses and abilities",
        "Can command all dragons (automatically)"
    ],
    source: "Only obtainable by slaying a draconic deity (good luck)",
    uses: ["Dragon Transformation Items", "Draconic Apotheosis", "Dragon Command"]
},

'wyrm_time_essence': {
    id: 'wyrm_time_essence',
    name: "Wyrm of Time Essence",
    icon: '🐉',
    category: 'essence',
    rarity: 'legendary',
    cost: 5000,
    description: "Essence from a dragon that lives outside of time. It exists in all moments simultaneously.",
    properties: [
        "Can see all possible timelines",
        "Used to create artifacts of temporal magic",
        "Grants immunity to time-based magic",
        "Can be used to age or de-age objects/creatures"
    ],
    source: "Only obtainable by time-traveling dragons",
    uses: ["Temporal Artifacts", "Timeline Viewing", "Age Manipulation"]
},

'dragon_overlord_crown_fragment': {
    id: 'dragon_overlord_crown_fragment',
    name: "Dragon Overlord Crown Fragment",
    icon: '👑',
    category: 'enchanting',
    rarity: 'mythic',
    cost: 15000,
    description: "A piece of the crown worn by the first Dragon Overlord. It commands all dragonkind.",
    properties: [
        "Can command all dragons (chromatic and metallic) automatically",
        "Used to create artifacts of dragon kingship",
        "Grants the user draconic traits (wings, breath weapon, scales)",
        "Can awaken the dragon within any creature"
    ],
    source: "Only obtainable by claiming the Dragon Overlord's throne",
    uses: ["Dragon King Artifacts", "Draconic Transformation", "Dragon Awakening"]
},

// ========== PLANAR MATERIALS ==========
'sigil_street_dust': {
    id: 'sigil_street_dust',
    name: "Sigil Street Dust",
    icon: '🏙️',
    category: 'enchanting',
    rarity: 'legendary',
    cost: 2500,
    description: "Dust collected from the streets of Sigil. It contains traces of every plane.",
    properties: [
        "Can create portals to any plane (DC 20 Arcana check)",
        "Used to create artifacts of planar travel",
        "Grants immunity to planar hazards",
        "Can understand any planar language"
    ],
    source: "Collected from the City of Doors",
    uses: ["Planar Portals", "Planar Artifacts", "Hazard Immunity"]
},

'outlands_spire_fragment': {
    id: 'outlands_spire_fragment',
    name: "Outlands Spire Fragment",
    icon: '🗼',
    category: 'enchanting',
    rarity: 'legendary',
    cost: 3000,
    description: "A piece of one of the Spire fragments from the Outlands. It nullifies magic.",
    properties: [
        "Creates an anti-magic field (10ft radius)",
        "Used to create artifacts of nullification",
        "Grants immunity to all magic (including beneficial)",
        "Can dispel any spell automatically (1/day)"
    ],
    source: "Taken from the Spire in the Outlands",
    uses: ["Anti-Magic Fields", "Nullification Artifacts", "Auto-Dispel"]
},

'limbo_chaos_stuff': {
    id: 'limbo_chaos_stuff',
    name: "Limbo Chaos Stuff",
    icon: '🌀',
    category: 'essence',
    rarity: 'legendary',
    cost: 2000,
    description: "Raw chaos matter from Limbo. It changes form constantly.",
    properties: [
        "Can shape reality within 5ft (DM's discretion)",
        "Used to create artifacts of chaos",
        "Grants immunity to law-based magic",
        "Can be used to create anything (1 use only)"
    ],
    source: "Harvested from Limbo by githzerai monks",
    uses: ["Reality Shaping", "Chaos Artifacts", "Creation"]
},

'mechanus_gear': {
    id: 'mechanus_gear',
    name: "Mechanus Gear",
    icon: '⚙️',
    category: 'enchanting',
    rarity: 'legendary',
    cost: 2500,
    description: "A gear from the Mechanus machinery. It is perfectly precise.",
    properties: [
        "Can create constructs with perfect obedience",
        "Used to create artifacts of law",
        "Grants immunity to chaos effects",
        "Can be used to predict the future with 100% accuracy (1 question)"
    ],
    source: "Taken from the Mechanus machinery",
    uses: ["Construct Creation", "Law Artifacts", "Future Prediction"]
},

'beastlands_heart_blood': {
    id: 'beastlands_heart_blood',
    name: "Beastlands Heart Blood",
    icon: '🩸',
    category: 'alchemical',
    rarity: 'legendary',
    cost: 3500,
    description: "Blood from the heart of the Beastlands. It is pure primal essence.",
    properties: [
        "Can awaken the beast within any creature",
        "Used to create artifacts of primal power",
        "Grants all beast abilities (scent, tracking, etc.)",
        "Can be used to shapeshift into any beast (1/day)"
    ],
    source: "Collected from the Beastlands' heart",
    uses: ["Primal Awakening", "Beast Shapeshifting", "Primal Artifacts"]
},

// ========== MAGIC METALS ==========
'orichalcum_ingot': {
    id: 'orichalcum_ingot',
    name: "Orichalcum Ingot",
    icon: '🥇',
    category: 'smithing',
    rarity: 'legendary',
    cost: 4000,
    description: "The legendary metal of Atlantis. It is lighter than air but stronger than adamantine.",
    properties: [
        "Forged items weigh 1/10th normal weight",
        "Can be used to create flying vessels",
        "Grants +3 to AC if used in armor",
        "Can store massive amounts of magical energy"
    ],
    source: "Only found in the ruins of Atlantis or Lemuria",
    uses: ["Flying Vessels", "Lightweight Armor", "Energy Storage"]
},

'moon_silver_ingot': {
    id: 'moon_silver_ingot',
    name: "Moon Silver Ingot",
    icon: '🥈',
    category: 'smithing',
    rarity: 'legendary',
    cost: 3000,
    description: "Silver forged in moonlight. It is deadly to lycanthropes and fey.",
    properties: [
        "Weapons deal double damage to lycanthropes and fey",
        "Can be used to create artifacts of lunar power",
        "Grants immunity to lycanthropy",
        "Can be used to control tides"
    ],
    source: "Forged under a full moon by lunar smiths",
    uses: ["Lunar Weapons", "Lycanthrope Hunters", "Tide Control"]
},

'sun_gold_ingot': {
    id: 'sun_gold_ingot',
    name: "Sun Gold Ingot",
    icon: '🌞',
    category: 'smithing',
    rarity: 'legendary',
    cost: 3500,
    description: "Gold infused with solar energy. It burns undead and demons.",
    properties: [
        "Weapons deal radiant damage to undead and fiends",
        "Can be used to create artifacts of solar power",
        "Grants immunity to sunlight sensitivity",
        "Can be used to create permanent daylight"
    ],
    source: "Forged in the heart of the sun or by solar angels",
    uses: ["Solar Weapons", "Daylight Creation", "Undead Destruction"]
},

'starmetal_ore': {
    id: 'starmetal_ore',
    name: "Starmetal Ore",
    icon: '⭐',
    category: 'smithing',
    rarity: 'mythic',
    cost: 6000,
    description: "Ore from the heart of a neutron star. It is impossibly dense and sharp.",
    properties: [
        "Weapons ignore all armor (including magical)",
        "Can be used to create artifacts of cosmic power",
        "Grants immunity to gravity-based magic",
        "Can be used to cut through dimensions"
    ],
    source: "Only found in the heart of dead stars",
    uses: ["Armor-Piercing Weapons", "Cosmic Artifacts", "Dimensional Cutting"]
},

'quicksilver_mercury': {
    id: 'quicksilver_mercury',
    name: "Quicksilver Mercury",
    icon: '💧',
    category: 'smithing',
    rarity: 'legendary',
    cost: 2500,
    description: "Living mercury that can change shape at will. It is the blood of shapeshifters.",
    properties: [
        "Can create shapeshifting items",
        "Can be used to create artifacts of transformation",
        "Grants the ability to change shape (1/day)",
        "Can be used to repair any metal object"
    ],
    source: "Collected from the veins of shapeshifter gods",
    uses: ["Shapeshifting Items", "Transformation Artifacts", "Metal Repair"]
},

// ========== MISCELLANEOUS ==========
'philosophers_stone_fragment': {
    id: 'philosophers_stone_fragment',
    name: "Philosopher's Stone Fragment",
    icon: '💎',
    category: 'alchemical',
    rarity: 'mythic',
    cost: 15000,
    description: "A fragment of the true Philosopher's Stone. It can transmute base metals to gold.",
    properties: [
        "Can transmute 1000 lbs of iron to gold (1 use only)",
        "Can create the Elixir of Life",
        "Grants immortality if the whole stone is assembled",
        "Can be used to resurrect the dead without cost"
    ],
    source: "Only found by completing the Magnum Opus",
    uses: ["Transmutation", "Elixir of Life", "Resurrection"]
},

'true_name_fragment': {
    id: 'true_name_fragment',
    name: "True Name Fragment",
    icon: '📜',
    category: 'enchanting',
    rarity: 'mythic',
    cost: 20000,
    description: "A piece of paper containing part of a True Name. Saying it gives power over that being.",
    properties: [
        "Can command the being whose name is written (DC 30 CHA save)",
        "Used to create artifacts of true naming",
        "Grants advantage on all checks against that being",
        "Can be used to kill that being instantly (if whole name is known)"
    ],
    source: "Only obtainable by learning a being's True Name",
    uses: ["True Naming Artifacts", "Command Items", "Instant Death"]
},

'first_spell_echo': {
    id: 'first_spell_echo',
    name: "First Spell Echo",
    icon: '🔊',
    category: 'enchanting',
    rarity: 'mythic',
    cost: 25000,
    description: "The echo of the first spell ever cast. It contains the blueprint for all magic.",
    properties: [
        "Can create a new spell (DM's approval required)",
        "Used to create artifacts of pure magic",
        "Grants the ability to cast any spell (1 use only)",
        "Can be used to dispel any magic automatically"
    ],
    source: "Only found at the dawn of time or by reversing time",
    uses: ["Spell Creation", "Pure Magic Artifacts", "Auto-Dispel"]
},

'perfect_paradox': {
    id: 'perfect_paradox',
    name: "Perfect Paradox",
    icon: '♾️',
    category: 'essence',
    rarity: 'mythic',
    cost: 30000,
    description: "A paradox that is perfectly stable. It is a square circle, a truthful lie.",
    properties: [
        "Can break any logical constraint",
        "Used to create artifacts of impossibility",
        "Grants immunity to logic-based magic",
        "Can be used to wish for anything (no limits)"
    ],
    source: "Only obtainable by breaking reality and putting it back together",
    uses: ["Wish Items", "Impossible Artifacts", "Logic Immunity"]
},
// ============================================
// === 50 MORE EXOTIC CRAFTING MATERIALS ===
// ============================================

// ========== COSMIC & CELESTIAL MATERIALS ==========
'quasar_fragment': {
    id: 'quasar_fragment',
    name: "Quasar Fragment",
    icon: '🌌',
    category: 'cosmic',
    rarity: 'mythic',
    cost: 10000,
    description: "A shard of a dying star, containing the concentrated energy of a galaxy's core.",
    properties: [
        "Can power entire cities for centuries",
        "Creates localized gravity wells when activated",
        "Allows travel between planes without portals",
        "Temporarily grants god-like cosmic awareness"
    ],
    source: "Harvested from the heart of collapsing stars",
    uses: ["Planar Travel Devices", "Reality-Warping Artifacts", "Cosmic Power Sources"]
},

'void_heart': {
    id: 'void_heart',
    name: "Void Heart",
    icon: '🖤',
    category: 'cosmic',
    rarity: 'mythic',
    cost: 8000,
    description: "A pulsating crystal that contains a miniature black hole, absorbing all light and sound around it.",
    properties: [
        "Creates anti-magic fields in a 100ft radius",
        "Can erase matter from existence",
        "Stores infinite negative energy",
        "Grants immunity to all forms of scrying"
    ],
    source: "Found at the center of collapsed dimensions",
    uses: ["Reality Erasure Weapons", "Anti-Magic Fortresses", "Dimensional Anchors"]
},

'chronos_crystal': {
    id: 'chronos_crystal',
    name: "Chronos Crystal",
    icon: '⏳',
    category: 'cosmic',
    rarity: 'mythic',
    cost: 12000,
    description: "A crystal that exists simultaneously in past, present, and future, shimmering with temporal energy.",
    properties: [
        "Allows time travel within a 24-hour window",
        "Can create time loops in small areas",
        "Grants perfect precognition for 1 minute",
        "Can age or de-age creatures by decades"
    ],
    source: "Formed at the moment of a time paradox",
    uses: ["Time Travel Devices", "Precognition Potions", "Age Manipulation Rituals"]
},

'primordial_stardust': {
    id: 'primordial_stardust',
    name: "Primordial Stardust",
    icon: '✨',
    category: 'cosmic',
    rarity: 'legendary',
    cost: 5000,
    description: "Dust from the first stars in the universe, containing the essence of creation itself.",
    properties: [
        "Can create new life forms from nothing",
        "Grants temporary divinity (1 hour)",
        "Can rewrite reality within a 50ft radius",
        "Makes any enchantment permanent"
    ],
    source: "Collected from the oldest nebulae",
    uses: ["Creation Magic", "Divinity Potions", "Reality-Warping Scrolls"]
},

'celestial_marrow': {
    id: 'celestial_marrow',
    name: "Celestial Marrow",
    icon: '🦴',
    category: 'cosmic',
    rarity: 'legendary',
    cost: 4000,
    description: "Bone marrow from a dead god, still pulsing with divine power.",
    properties: [
        "Can resurrect any creature regardless of time of death",
        "Grants immunity to all mortal diseases and curses",
        "Allows communication with any deity",
        "Can create minor miracles"
    ],
    source: "Harvested from divine corpses in the Astral Sea",
    uses: ["True Resurrection Rituals", "Divine Communication", "Miracle Creation"]
},

// ========== ELEMENTAL ESSENCES ==========
'primordial_flame': {
    id: 'primordial_flame',
    name: "Primordial Flame",
    icon: '🔥',
    category: 'elemental',
    rarity: 'mythic',
    cost: 7500,
    description: "The first fire ever created, burning with the heat of a newborn sun.",
    properties: [
        "Can melt any material including adamantine",
        "Burns forever without fuel",
        "Can ignite entire planes of existence",
        "Grants immunity to all fire damage"
    ],
    source: "Stolen from the Elemental Plane of Fire's core",
    uses: ["Eternal Flame Weapons", "Plane-Ignition Rituals", "Absolute Fire Immunity"]
},

'abyssal_ice': {
    id: 'abyssal_ice',
    name: "Abyssal Ice",
    icon: '🧊',
    category: 'elemental',
    rarity: 'mythic',
    cost: 7000,
    description: "Ice so cold it freezes time itself, harvested from the deepest layers of the Elemental Plane of Water.",
    properties: [
        "Can freeze creatures in time for centuries",
        "Creates absolute zero temperatures",
        "Can freeze magical energy and spells",
        "Grants immunity to all cold damage"
    ],
    source: "Mined from the heart of glacial titans",
    uses: ["Time-Freezing Weapons", "Magic-Nullification", "Absolute Cold Immunity"]
},

'storm_heart': {
    id: 'storm_heart',
    name: "Storm Heart",
    icon: '⚡',
    category: 'elemental',
    rarity: 'mythic',
    cost: 6500,
    description: "The beating heart of a storm elemental lord, crackling with infinite lightning.",
    properties: [
        "Can summon continent-sized storms",
        "Creates permanent lightning storms",
        "Can power entire civilizations with electricity",
        "Grants immunity to all lightning damage"
    ],
    source: "Taken from defeated storm lords",
    uses: ["Weather Control Artifacts", "Infinite Power Sources", "Lightning Immunity"]
},

'earthmother_seed': {
    id: 'earthmother_seed',
    name: "Earthmother Seed",
    icon: '🌱',
    category: 'elemental',
    rarity: 'legendary',
    cost: 4500,
    description: "A seed from the World Tree's first acorn, containing the essence of all plant life.",
    properties: [
        "Can grow entire forests in minutes",
        "Creates sentient plant creatures",
        "Can terraform barren planets",
        "Grants control over all plant life"
    ],
    source: "Found in the deepest roots of the World Tree",
    uses: ["Terraforming Devices", "Plant Animation", "Forest Creation"]
},

'voidstone': {
    id: 'voidstone',
    name: "Voidstone",
    icon: '🌑',
    category: 'elemental',
    rarity: 'legendary',
    cost: 5000,
    description: "A stone that contains a pocket dimension within it, constantly consuming matter.",
    properties: [
        "Can store infinite items in extradimensional space",
        "Creates black holes when shattered",
        "Can erase matter from existence",
        "Grants resistance to all damage types"
    ],
    source: "Formed in the spaces between dimensions",
    uses: ["Infinite Storage", "Matter Erasure", "Dimensional Weapons"]
},

// ========== DRACONIC & MYTHICAL CREATURE PARTS ==========
'elder_dragon_heart': {
    id: 'elder_dragon_heart',
    name: "Elder Dragon Heart",
    icon: '🐉',
    category: 'monster',
    rarity: 'mythic',
    cost: 15000,
    description: "The still-beating heart of a dragon older than civilization, containing millennia of magical energy.",
    properties: [
        "Grants immortality when consumed",
        "Can power magical cities for centuries",
        "Allows transformation into a dragon",
        "Contains all knowledge of the dragon's lifetime"
    ],
    source: "Harvested from dragons over 5000 years old",
    uses: ["Immortality Elixirs", "Dragon Transformation", "Ancient Knowledge Extraction"]
},

'kraken_ink_sac': {
    id: 'kraken_ink_sac',
    name: "Kraken Ink Sac",
    icon: '🦑',
    category: 'monster',
    rarity: 'legendary',
    cost: 6000,
    description: "An ink sac from a kraken that can darken entire oceans with a single release.",
    properties: [
        "Can create permanent darkness in mile-wide areas",
        "Makes water poisonous to all non-aquatic life",
        "Can summon tidal waves and whirlpools",
        "Grants control over sea creatures"
    ],
    source: "Harvested from legendary krakens",
    uses: ["Ocean Control", "Mass Darkness Creation", "Water Manipulation"]
},

'phoenix_feather': {
    id: 'phoenix_feather',
    name: "Phoenix Feather",
    icon: '🔥',
    category: 'monster',
    rarity: 'legendary',
    cost: 5500,
    description: "A single feather from a phoenix, burning with eternal flame and rebirth energy.",
    properties: [
        "Can resurrect any creature instantly",
        "Grants immunity to death effects",
        "Can create fire that never extinguishes",
        "Allows rebirth upon death"
    ],
    source: "Plucked during a phoenix's rebirth cycle",
    uses: ["Instant Resurrection", "Death Immunity", "Eternal Flame Creation"]
},

'unicorn_horn_core': {
    id: 'unicorn_horn_core',
    name: "Unicorn Horn Core",
    icon: '🦄',
    category: 'monster',
    rarity: 'legendary',
    cost: 5000,
    description: "The magical core of a unicorn's horn, containing pure life energy.",
    properties: [
        "Can purify any poison or disease",
        "Creates healing springs that never run dry",
        "Can detect and banish evil creatures",
        "Grants perfect truth detection"
    ],
    source: "Only obtained from unicorns who willingly give it",
    uses: ["Absolute Purification", "Eternal Healing", "Evil Detection"]
},

'basilisk_gaze_gem': {
    id: 'basilisk_gaze_gem',
    name: "Basilisk Gaze Gem",
    icon: '👁️',
    category: 'monster',
    rarity: 'very_rare',
    cost: 3000,
    description: "A gem that contains the petrifying gaze of a basilisk, frozen in time.",
    properties: [
        "Can petrify creatures permanently",
        "Creates stone golems from statues",
        "Can reverse petrification effects",
        "Grants immunity to petrification"
    ],
    source: "Formed in the eye socket of an ancient basilisk",
    uses: ["Petrification Weapons", "Golem Creation", "Petrification Cure"]
},

// ========== DIVINE & DEMONIC MATERIALS ==========
'angel_wing_feather': {
    id: 'angel_wing_feather',
    name: "Angel Wing Feather",
    icon: '👼',
    category: 'divine',
    rarity: 'legendary',
    cost: 7000,
    description: "A single feather from an archangel's wing, glowing with celestial light.",
    properties: [
        "Can banish demons and devils permanently",
        "Creates holy ground that heals allies",
        "Can purify any corruption or curse",
        "Grants temporary angelic powers"
    ],
    source: "Given only by angels to worthy mortals",
    uses: ["Demon Banishment", "Holy Ground Creation", "Absolute Purification"]
},

'demon_lord_horn': {
    id: 'demon_lord_horn',
    name: "Demon Lord Horn",
    icon: '😈',
    category: 'demonic',
    rarity: 'legendary',
    cost: 6500,
    description: "A horn from a demon lord, dripping with infernal energy and corruption.",
    properties: [
        "Can summon legions of demons",
        "Creates permanent portals to the Abyss",
        "Can corrupt any creature or object",
        "Grants temporary demonic powers"
    ],
    source: "Taken from defeated demon lords",
    uses: ["Mass Demon Summoning", "Abyssal Portal Creation", "Corruption Rituals"]
},

'godblood': {
    id: 'godblood',
    name: "Godblood",
    icon: '🩸',
    category: 'divine',
    rarity: 'mythic',
    cost: 20000,
    description: "A single drop of blood from a living god, containing infinite divine power.",
    properties: [
        "Can create new gods",
        "Grants temporary divinity (24 hours)",
        "Can rewrite cosmic laws",
        "Makes any wish come true"
    ],
    source: "Only obtained when a god willingly bleeds",
    uses: ["God Creation", "Divinity Granting", "Reality Rewriting"]
},

'hellfire_coal': {
    id: 'hellfire_coal',
    name: "Hellfire Coal",
    icon: '🔥',
    category: 'demonic',
    rarity: 'very_rare',
    cost: 3500,
    description: "Coal that burns with the fires of Hell, never consuming itself.",
    properties: [
        "Burns forever without fuel",
        "Can melt any material including divine metals",
        "Creates permanent hellfire",
        "Grants resistance to all fire damage"
    ],
    source: "Mined from the deepest pits of Hell",
    uses: ["Eternal Hellfire", "Divine Metal Melting", "Fire Resistance"]
},

'celestial_steel': {
    id: 'celestial_steel',
    name: "Celestial Steel",
    icon: '⚔️',
    category: 'divine',
    rarity: 'legendary',
    cost: 8000,
    description: "Metal forged in the heart of a star and blessed by every god in the pantheon.",
    properties: [
        "Can cut through any material including magic",
        "Deals extra damage to evil creatures",
        "Can purify corruption on touch",
        "Never dulls or breaks"
    ],
    source: "Forged by celestial smiths in the heavens",
    uses: ["Absolute Cutting Weapons", "Evil Slaying", "Corruption Purification"]
},

// ========== ARCANE & MYSTICAL MATERIALS ==========
'arcanum_crystal': {
    id: 'arcanum_crystal',
    name: "Arcanum Crystal",
    icon: '💎',
    category: 'arcane',
    rarity: 'mythic',
    cost: 12000,
    description: "A crystal that contains the fundamental laws of magic within it.",
    properties: [
        "Can rewrite magical laws in an area",
        "Creates anti-magic fields that can't be dispelled",
        "Can store infinite spell energy",
        "Grants knowledge of all spells"
    ],
    source: "Formed at the center of magical nexuses",
    uses: ["Magic Law Rewriting", "Permanent Anti-Magic", "Infinite Spell Storage"]
},

'ley_line_node': {
    id: 'ley_line_node',
    name: "Ley Line Node",
    icon: '🌀',
    category: 'arcane',
    rarity: 'legendary',
    cost: 9000,
    description: "A concentrated point where multiple ley lines intersect, pulsing with raw magical energy.",
    properties: [
        "Can power magical cities indefinitely",
        "Creates permanent magical effects",
        "Can amplify any spell to epic proportions",
        "Grants unlimited spell slots temporarily"
    ],
    source: "Harvested from major ley line intersections",
    uses: ["Infinite Magic Power", "Spell Amplification", "Permanent Enchantments"]
},

'soulforge_ember': {
    id: 'soulforge_ember',
    name: "Soulforge Ember",
    icon: '🔥',
    category: 'arcane',
    rarity: 'legendary',
    cost: 7500,
    description: "An ember from the forge where souls are created, containing the essence of consciousness.",
    properties: [
        "Can create new souls from nothing",
        "Can repair damaged or fragmented souls",
        "Can transfer souls between bodies",
        "Grants immortality of the soul"
    ],
    source: "Stolen from the Soulforge in the afterlife",
    uses: ["Soul Creation", "Soul Repair", "Soul Transfer"]
},

'mana_titan_heartstone': {
    id: 'mana_titan_heartstone',
    name: "Mana Titan Heartstone",
    icon: '💎',
    category: 'arcane',
    rarity: 'mythic',
    cost: 15000,
    description: "The crystallized heart of a mana titan, containing enough magical energy to power a continent.",
    properties: [
        "Can create permanent magical weather",
        "Can power magical constructs indefinitely",
        "Can create mana-rich environments",
        "Grants unlimited magical power temporarily"
    ],
    source: "Taken from the corpses of mana titans",
    uses: ["Permanent Magic Weather", "Infinite Construct Power", "Mana Environment Creation"]
},

'void_weave': {
    id: 'void_weave',
    name: "Void Weave",
    icon: '🕸️',
    category: 'arcane',
    rarity: 'very_rare',
    cost: 4000,
    description: "Fabric woven from the fabric of reality itself, existing between dimensions.",
    properties: [
        "Can create bags of holding with infinite capacity",
        "Can make objects phase through matter",
        "Can create portals to any location",
        "Grants resistance to all damage types"
    ],
    source: "Woven by void spiders in the spaces between dimensions",
    uses: ["Infinite Storage", "Phasing Items", "Portal Creation"]
},

// ========== BOTANICAL WONDERS ==========
'world_tree_sapling': {
    id: 'world_tree_sapling',
    name: "World Tree Sapling",
    icon: '🌳',
    category: 'botanical',
    rarity: 'mythic',
    cost: 20000,
    description: "A living sapling from the World Tree, containing the potential to grow into a new reality.",
    properties: [
        "Can grow into a new World Tree",
        "Creates life-sustaining environments anywhere",
        "Can connect to other planes of existence",
        "Grants control over all plant life"
    ],
    source: "Only given by the World Tree itself",
    uses: ["New World Tree Creation", "Life Environment Creation", "Planar Connection"]
},

'elder_treant_bark': {
    id: 'elder_treant_bark',
    name: "Elder Treant Bark",
    icon: '🌲',
    category: 'botanical',
    rarity: 'legendary',
    cost: 6000,
    description: "Bark from a treant older than recorded history, containing ancient wisdom and power.",
    properties: [
        "Can animate any plant into a guardian",
        "Creates sentient forests",
        "Can communicate with all plant life",
        "Grants ancient knowledge of nature"
    ],
    source: "Given willingly by elder treants",
    uses: ["Plant Animation", "Sentient Forest Creation", "Nature Communication"]
},

'moonblossom': {
    id: 'moonblossom',
    name: "Moonblossom",
    icon: '🌙',
    category: 'botanical',
    rarity: 'very_rare',
    cost: 3500,
    description: "A flower that only blooms under a full moon, glowing with lunar energy.",
    properties: [
        "Can create permanent moonlight",
        "Can cure lycanthropy",
        "Can enhance divination magic",
        "Grants night vision and lunar powers"
    ],
    source: "Grows only in moonlight-drenched groves",
    uses: ["Permanent Moonlight", "Lycanthropy Cure", "Divination Enhancement"]
},

'sunfruit': {
    id: 'sunfruit',
    name: "Sunfruit",
    icon: '☀️',
    category: 'botanical',
    rarity: 'very_rare',
    cost: 3200,
    description: "A fruit that contains concentrated sunlight, warm to the touch even at night.",
    properties: [
        "Can create permanent sunlight",
        "Can cure vampirism",
        "Can enhance healing magic",
        "Grants solar powers and light creation"
    ],
    source: "Grows only on mountains that touch the sun",
    uses: ["Permanent Sunlight", "Vampirism Cure", "Healing Enhancement"]
},

'whispering_willow_wood': {
    id: 'whispering_willow_wood',
    name: "Whispering Willow Wood",
    icon: '🌿',
    category: 'botanical',
    rarity: 'rare',
    cost: 2000,
    description: "Wood from a willow tree that whispers secrets of the future to those who listen.",
    properties: [
        "Can create prophetic items",
        "Can enhance divination spells",
        "Can communicate with spirits",
        "Grants glimpses of possible futures"
    ],
    source: "Harvested from ancient whispering willows",
    uses: ["Prophetic Items", "Divination Enhancement", "Spirit Communication"]
},

// ========== ARTIFACT COMPONENTS ==========
'time_lost_relic_fragment': {
    id: 'time_lost_relic_fragment',
    name: "Time-Lost Relic Fragment",
    icon: '⏳',
    category: 'artifact',
    rarity: 'mythic',
    cost: 18000,
    description: "A fragment of an artifact from a forgotten age, containing lost knowledge and power.",
    properties: [
        "Can restore lost technologies",
        "Contains knowledge of forgotten magic",
        "Can create temporal anomalies",
        "Grants memories of past civilizations"
    ],
    source: "Found in ruins older than recorded history",
    uses: ["Lost Technology Restoration", "Forgotten Magic Recovery", "Temporal Anomaly Creation"]
},

'reality_shard': {
    id: 'reality_shard',
    name: "Reality Shard",
    icon: '💎',
    category: 'artifact',
    rarity: 'mythic',
    cost: 25000,
    description: "A shard of reality itself, containing the fundamental laws of the universe.",
    properties: [
        "Can rewrite reality within a mile radius",
        "Can create new physical laws",
        "Can erase things from existence permanently",
        "Grants understanding of universal truths"
    ],
    source: "Formed during reality-shattering events",
    uses: ["Reality Rewriting", "New Law Creation", "Absolute Erasure"]
},

'fate_thread': {
    id: 'fate_thread',
    name: "Fate Thread",
    icon: '🧵',
    category: 'artifact',
    rarity: 'legendary',
    cost: 10000,
    description: "A single thread from the tapestry of fate, glowing with potential futures.",
    properties: [
        "Can alter destinies and prophecies",
        "Can see all possible futures",
        "Can create fate-binding contracts",
        "Grants control over probability"
    ],
    source: "Woven from the Loom of Fate",
    uses: ["Destiny Alteration", "Future Sight", "Fate Binding"]
},

'creation_spark': {
    id: 'creation_spark',
    name: "Creation Spark",
    icon: '✨',
    category: 'artifact',
    rarity: 'mythic',
    cost: 30000,
    description: "The first spark of creation that began the universe, containing infinite creative potential.",
    properties: [
        "Can create new universes",
        "Can bring any idea into reality",
        "Can create life from nothing",
        "Grants god-like creative powers"
    ],
    source: "The original spark from the Big Bang",
    uses: ["Universe Creation", "Reality Manifestation", "Life Creation"]
},

'void_anchor': {
    id: 'void_anchor',
    name: "Void Anchor",
    icon: '⚓',
    category: 'artifact',
    rarity: 'legendary',
    cost: 12000,
    description: "An anchor that can hold reality in place, preventing dimensional shifts and planar travel.",
    properties: [
        "Can stabilize unstable dimensions",
        "Can prevent all planar travel in an area",
        "Can anchor objects in reality permanently",
        "Grants immunity to dimensional effects"
    ],
    source: "Forged in the spaces between dimensions",
    uses: ["Dimensional Stabilization", "Planar Travel Prevention", "Reality Anchoring"]
},

// ========== PSYCHIC & MENTAL MATERIALS ==========
'dreamstone': {
    id: 'dreamstone',
    name: "Dreamstone",
    icon: '💤',
    category: 'psychic',
    rarity: 'legendary',
    cost: 8000,
    description: "A stone that contains the collective dreams of all living beings, shimmering with psychic energy.",
    properties: [
        "Can enter and manipulate dreams",
        "Can create permanent dream realms",
        "Can extract knowledge from subconscious minds",
        "Grants lucid dreaming and dream control"
    ],
    source: "Formed in the deepest layers of the Dream Realm",
    uses: ["Dream Manipulation", "Dream Realm Creation", "Subconscious Knowledge Extraction"]
},

'mind_crystal': {
    id: 'mind_crystal',
    name: "Mind Crystal",
    icon: '💎',
    category: 'psychic',
    rarity: 'very_rare',
    cost: 4500,
    description: "A crystal that amplifies psychic energy, allowing mental communication across vast distances.",
    properties: [
        "Can create telepathic networks",
        "Can amplify psychic powers 100-fold",
        "Can store memories and personalities",
        "Grants telepathy and mind reading"
    ],
    source: "Grown in areas of high psychic activity",
    uses: ["Telepathic Networks", "Psychic Amplification", "Memory Storage"]
},

'nightmare_essence': {
    id: 'nightmare_essence',
    name: "Nightmare Essence",
    icon: '😱',
    category: 'psychic',
    rarity: 'rare',
    cost: 2500,
    description: "Concentrated fear and terror harvested from nightmares, dark and swirling.",
    properties: [
        "Can induce permanent nightmares",
        "Can create fear-based illusions",
        "Can weaken mental defenses",
        "Grants control over fear and terror"
    ],
    source: "Harvested from the Nightmare Realm",
    uses: ["Nightmare Induction", "Fear Illusions", "Mental Defense Weakening"]
},

'collective_unconscious_tapestry': {
    id: 'collective_unconscious_tapestry',
    name: "Collective Unconscious Tapestry",
    icon: '🧵',
    category: 'psychic',
    rarity: 'mythic',
    cost: 15000,
    description: "A tapestry woven from the thoughts and memories of all sentient beings throughout history.",
    properties: [
        "Contains all knowledge ever known",
        "Can predict future events with 100% accuracy",
        "Can communicate with any mind across time",
        "Grants omniscience temporarily"
    ],
    source: "Woven by psychic weavers over millennia",
    uses: ["Omniscience", "Perfect Prediction", "Temporal Communication"]
},

'psychic_resonance_crystal': {
    id: 'psychic_resonance_crystal',
    name: "Psychic Resonance Crystal",
    icon: '💎',
    category: 'psychic',
    rarity: 'rare',
    cost: 1800,
    description: "A crystal that vibrates in harmony with psychic energy, amplifying mental powers.",
    properties: [
        "Can amplify psychic abilities 10-fold",
        "Can create psychic shields",
        "Can detect psychic activity",
        "Grants enhanced mental abilities"
    ],
    source: "Found in areas of psychic resonance",
    uses: ["Psychic Amplification", "Psychic Shield Creation", "Psychic Detection"]
},

// ========== ALIEN & EXTRADIMENSIONAL MATERIALS ==========
'xenomorph_chitin': {
    id: 'xenomorph_chitin',
    name: "Xenomorph Chitin",
    icon: '👽',
    category: 'alien',
    rarity: 'very_rare',
    cost: 5000,
    description: "The armored plating of an alien creature from another dimension, impervious to most damage.",
    properties: [
        "Can create armor that adapts to any damage type",
        "Can regenerate damaged tissue",
        "Can absorb and redirect energy attacks",
        "Grants resistance to all exotic damage types"
    ],
    source: "Harvested from extradimensional aliens",
    uses: ["Adaptive Armor", "Tissue Regeneration", "Energy Absorption"]
},

'non_euclidean_crystal': {
    id: 'non_euclidean_crystal',
    name: "Non-Euclidean Crystal",
    icon: '💎',
    category: 'alien',
    rarity: 'legendary',
    cost: 9000,
    description: "A crystal that exists in more than three dimensions, causing spatial distortions around it.",
    properties: [
        "Can create spatial anomalies",
        "Can allow travel through higher dimensions",
        "Can store objects in extradimensional space",
        "Grants understanding of higher mathematics"
    ],
    source: "Formed in dimensions with different physical laws",
    uses: ["Spatial Anomaly Creation", "Higher Dimensional Travel", "Extradimensional Storage"]
},

'eldritch_flesh': {
    id: 'eldritch_flesh',
    name: "Eldritch Flesh",
    icon: '🦑',
    category: 'alien',
    rarity: 'mythic',
    cost: 12000,
    description: "Flesh from an elder god, constantly shifting and reforming in impossible ways.",
    properties: [
        "Can grant immortality through body horror",
        "Can warp reality through sheer presence",
        "Can drive creatures insane by proximity",
        "Grants eldritch knowledge and powers"
    ],
    source: "Harvested from sleeping elder gods",
    uses: ["Eldritch Immortality", "Reality Warping", "Insanity Induction"]
},

'quantum_foam': {
    id: 'quantum_foam',
    name: "Quantum Foam",
    icon: '🌀',
    category: 'alien',
    rarity: 'legendary',
    cost: 11000,
    description: "The fabric of spacetime at the quantum level, constantly bubbling with potential realities.",
    properties: [
        "Can create temporary alternate realities",
        "Can allow quantum superposition of objects",
        "Can manipulate probability at the quantum level",
        "Grants understanding of quantum mechanics"
    ],
    source: "Harvested from the edges of black holes",
    uses: ["Alternate Reality Creation", "Quantum Superposition", "Probability Manipulation"]
},

'hyperdimensional_weave': {
    id: 'hyperdimensional_weave',
    name: "Hyperdimensional Weave",
    icon: '🧵',
    category: 'alien',
    rarity: 'very_rare',
    cost: 6000,
    description: "Fabric woven from threads that exist in multiple dimensions simultaneously.",
    properties: [
        "Can create items that exist in multiple places at once",
        "Can allow phase shifting through matter",
        "Can store infinite information in minimal space",
        "Grants perception of multiple dimensions"
    ],
    source: "Woven by hyperdimensional beings",
    uses: ["Multilocation Items", "Phase Shifting", "Infinite Information Storage"]
},
'conceptual_blade': {
    id: 'conceptual_blade',
    name: "Conceptual Blade",
    icon: '🗡️',
    category: 'enchanting',
    rarity: 'mythic',
    cost: 50000,
    description: "A blade made from the concept of 'sharpness.' It can cut anything, even ideas.",
    properties: [
        "Can cut through any material, even magic",
        "Used to create artifacts of cutting",
        "Grants the ability to sever metaphysical concepts (like love or memory)",
        "Can be used to kill gods (if you can reach them)"
    ],
    source: "Only forged by conceptual blacksmiths in the realm of ideas",
    uses: ["God-Killing Weapons", "Concept Severing", "Ultimate Cutting"]
},
// ========== ALCHEMICAL REAGENTS ==========
'phoenix_ash': {
    id: 'phoenix_ash',
    name: "Phoenix Ash",
    icon: '🔥',
    category: 'alchemical',
    rarity: 'legendary',
    cost: 500,
    description: "Ash collected from a phoenix's rebirth. Glows faintly and is warm to the touch.",
    properties: [
        "Used in resurrection potions",
        "Grants fire resistance when consumed",
        "Can be used to create permanent flame effects"
    ],
    source: "Collected from phoenix nesting grounds",
    uses: ["Potions of Rebirth", "Fire Resistance Elixirs", "Eternal Flame enchantments"]
},

'dragon_scale_dust': {
    id: 'dragon_scale_dust',
    name: "Dragon Scale Dust",
    icon: '🐉',
    category: 'alchemical',
    rarity: 'rare',
    cost: 120,
    description: "Powdered dragon scales that shimmer with iridescent colors.",
    properties: [
        "Enhances armor durability",
        "Used in dragon-themed enchantments",
        "Can be used to detect dragon presence"
    ],
    source: "Ground from shed dragon scales",
    uses: ["Dragonhide Armor", "Dragon Detection Potions", "Scale Polishing"]
},

'mermaid_tears': {
    id: 'mermaid_tears',
    name: "Mermaid Tears",
    icon: '💧',
    category: 'alchemical',
    rarity: 'very_rare',
    cost: 250,
    description: "Crystallized tears from a mermaid, containing powerful emotional magic.",
    properties: [
        "Used in love potions",
        "Can charm creatures when dissolved in water",
        "Enhances water magic"
    ],
    source: "Collected from mermaid grottos",
    uses: ["Love Potions", "Charm Elixirs", "Water Magic Enhancement"]
},

'vampire_dust': {
    id: 'vampire_dust',
    name: "Vampire Dust",
    icon: '🧛',
    category: 'alchemical',
    rarity: 'rare',
    cost: 150,
    description: "Dust from a vampire's coffin, carrying necrotic energy.",
    properties: [
        "Used in necromantic rituals",
        "Can animate small undead creatures",
        "Enhances blood magic"
    ],
    source: "Collected from vampire crypts",
    uses: ["Necromancy Potions", "Undead Animation", "Blood Magic Enhancement"]
},

'fairy_wing_powder': {
    id: 'fairy_wing_powder',
    name: "Fairy Wing Powder",
    icon: '🧚',
    category: 'alchemical',
    rarity: 'uncommon',
    cost: 80,
    description: "Ground wings from fairies, shimmering with magical dust.",
    properties: [
        "Used in flight potions",
        "Enhances illusion magic",
        "Can make objects glow faintly"
    ],
    source: "Collected from fairy rings",
    uses: ["Flight Potions", "Illusion Enhancement", "Glowing Paint"]
},

// ========== ENCHANTING COMPONENTS ==========
'star_metal_ingot': {
    id: 'star_metal_ingot',
    name: "Star Metal Ingot",
    icon: '⭐',
    category: 'enchanting',
    rarity: 'legendary',
    cost: 1000,
    description: "A metal ingot forged from a fallen star, humming with cosmic energy.",
    properties: [
        "Used in celestial weapon crafting",
        "Grants resistance to radiant damage",
        "Can be used to create anti-magic fields"
    ],
    source: "Forged from meteorites",
    uses: ["Celestial Weapons", "Radiant Resistance Armor", "Anti-Magic Devices"]
},

'void_crystal': {
    id: 'void_crystal',
    name: "Void Crystal",
    icon: '⚫',
    category: 'enchanting',
    rarity: 'very_rare',
    cost: 300,
    description: "A crystal that absorbs light, filled with dark energy.",
    properties: [
        "Used in shadow magic items",
        "Can store negative energy",
        "Enhances necromantic spells"
    ],
    source: "Mined from the Shadowfell",
    uses: ["Shadow Magic Items", "Negative Energy Storage", "Necromancy Enhancement"]
},

'storm_glass': {
    id: 'storm_glass',
    name: "Storm Glass",
    icon: '⚡',
    category: 'enchanting',
    rarity: 'rare',
    cost: 180,
    description: "Glass that crackles with captured lightning energy.",
    properties: [
        "Used in lightning-based enchantments",
        "Can store electrical energy",
        "Enhances storm magic"
    ],
    source: "Forged during thunderstorms",
    uses: ["Lightning Weapons", "Energy Storage", "Storm Magic Enhancement"]
},

'frostbloom': {
    id: 'frostbloom',
    name: "Frostbloom",
    icon: '❄️',
    category: 'enchanting',
    rarity: 'uncommon',
    cost: 90,
    description: "A flower that never wilts, covered in frost.",
    properties: [
        "Used in cold resistance items",
        "Can create temporary ice surfaces",
        "Enhances frost magic"
    ],
    source: "Grown in glacial caves",
    uses: ["Cold Resistance Items", "Ice Creation", "Frost Magic Enhancement"]
},

'emberstone': {
    id: 'emberstone',
    name: "Emberstone",
    icon: '🔥',
    category: 'enchanting',
    rarity: 'uncommon',
    cost: 75,
    description: "A stone that remains warm to the touch, containing trapped fire.",
    properties: [
        "Used in fire magic items",
        "Can ignite flammable materials",
        "Enhances flame spells"
    ],
    source: "Found in volcanic regions",
    uses: ["Fire Magic Items", "Ignition Devices", "Flame Spell Enhancement"]
},

// ========== POTION INGREDIENTS ==========
'golden_lotus': {
    id: 'golden_lotus',
    name: "Golden Lotus",
    icon: '🌺',
    category: 'potion',
    rarity: 'very_rare',
    cost: 200,
    description: "A radiant flower that blooms once every century.",
    properties: [
        "Used in healing potions",
        "Can restore youth temporarily",
        "Enhances life magic"
    ],
    source: "Found in hidden jungle temples",
    uses: ["Healing Potions", "Youth Restoration", "Life Magic Enhancement"]
},

'blackroot': {
    id: 'blackroot',
    name: "Blackroot",
    icon: '🌱',
    category: 'potion',
    rarity: 'rare',
    cost: 120,
    description: "A root that absorbs all light around it.",
    properties: [
        "Used in invisibility potions",
        "Can create darkness effects",
        "Enhances shadow magic"
    ],
    source: "Grown in lightless caves",
    uses: ["Invisibility Potions", "Darkness Effects", "Shadow Magic Enhancement"]
},

'whispering_leaf': {
    id: 'whispering_leaf',
    name: "Whispering Leaf",
    icon: '🍃',
    category: 'potion',
    rarity: 'uncommon',
    cost: 60,
    description: "A leaf that murmurs secrets when the wind blows.",
    properties: [
        "Used in truth potions",
        "Can reveal hidden messages",
        "Enhances divination magic"
    ],
    source: "Found in enchanted forests",
    uses: ["Truth Potions", "Message Revelation", "Divination Enhancement"]
},

'blazewort': {
    id: 'blazewort',
    name: "Blazewort",
    icon: '🌿',
    category: 'potion',
    rarity: 'uncommon',
    cost: 50,
    description: "A plant that bursts into flame when crushed.",
    properties: [
        "Used in fire resistance potions",
        "Can create small fireballs",
        "Enhances fire magic"
    ],
    source: "Grown near volcanic vents",
    uses: ["Fire Resistance Potions", "Fireball Creation", "Fire Magic Enhancement"]
},

'starlight_moss': {
    id: 'starlight_moss',
    name: "Starlight Moss",
    icon: '🌟',
    category: 'potion',
    rarity: 'rare',
    cost: 150,
    description: "Moss that glows with captured starlight.",
    properties: [
        "Used in light potions",
        "Can create glowing effects",
        "Enhances celestial magic"
    ],
    source: "Found in high mountain caves",
    uses: ["Light Potions", "Glowing Effects", "Celestial Magic Enhancement"]
},

// ========== SCROLL COMPONENTS ==========
'celestial_parchment': {
    id: 'celestial_parchment',
    name: "Celestial Parchment",
    icon: '📜',
    category: 'scroll',
    rarity: 'legendary',
    cost: 500,
    description: "Parchment made from the skin of celestial beings.",
    properties: [
        "Used for divine spell scrolls",
        "Grants +1 to spell save DCs",
        "Can store celestial energy"
    ],
    source: "Harvested from angelic beings",
    uses: ["Divine Spell Scrolls", "Spell DC Enhancement", "Celestial Energy Storage"]
},

'void_ink': {
    id: 'void_ink',
    name: "Void Ink",
    icon: '⚫',
    category: 'scroll',
    rarity: 'very_rare',
    cost: 250,
    description: "Ink that absorbs light, perfect for dark magic scrolls.",
    properties: [
        "Used for necromancy scrolls",
        "Can create darkness effects",
        "Enhances shadow magic spells"
    ],
    source: "Extracted from the Shadowfell",
    uses: ["Necromancy Scrolls", "Darkness Effects", "Shadow Magic Enhancement"]
},

'storm_quill': {
    id: 'storm_quill',
    name: "Storm Quill",
    icon: '⚡',
    category: 'scroll',
    rarity: 'rare',
    cost: 150,
    description: "A quill that crackles with lightning energy.",
    properties: [
        "Used for evocation scrolls",
        "Can store electrical energy",
        "Enhances storm magic"
    ],
    source: "Forged during thunderstorms",
    uses: ["Evocation Scrolls", "Energy Storage", "Storm Magic Enhancement"]
},

'frost_quill': {
    id: 'frost_quill',
    name: "Frost Quill",
    icon: '❄️',
    category: 'scroll',
    rarity: 'uncommon',
    cost: 80,
    description: "A quill that leaves frost in its wake.",
    properties: [
        "Used for cold magic scrolls",
        "Can create ice effects",
        "Enhances frost spells"
    ],
    source: "Carved from glacial ice",
    uses: ["Cold Magic Scrolls", "Ice Effects", "Frost Spell Enhancement"]
},

'ember_quill': {
    id: 'ember_quill',
    name: "Ember Quill",
    icon: '🔥',
    category: 'scroll',
    rarity: 'uncommon',
    cost: 70,
    description: "A quill that smolders with trapped fire.",
    properties: [
        "Used for fire magic scrolls",
        "Can ignite flammable materials",
        "Enhances flame spells"
    ],
    source: "Forged in volcanic fires",
    uses: ["Fire Magic Scrolls", "Ignition", "Flame Spell Enhancement"]
},

// ========== SMITHING MATERIALS ==========
'adamantine_ore': {
    id: 'adamantine_ore',
    name: "Adamantine Ore",
    icon: '🪨',
    category: 'smithing',
    rarity: 'legendary',
    cost: 1000,
    description: "An ultra-hard metal ore that can cut through most materials.",
    properties: [
        "Used in unbreakable weapons",
        "Can cut through magical barriers",
        "Enhances weapon durability"
    ],
    source: "Mined from deep underground veins",
    uses: ["Unbreakable Weapons", "Barrier Cutting", "Weapon Durability Enhancement"]
},

'mithril_ingot': {
    id: 'mithril_ingot',
    name: "Mithril Ingot",
    icon: '🥈',
    category: 'smithing',
    rarity: 'very_rare',
    cost: 500,
    description: "A silvery metal lighter than steel but just as strong.",
    properties: [
        "Used in lightweight armor",
        "Can create magical resonance",
        "Enhances spellcasting"
    ],
    source: "Smelted from rare silver veins",
    uses: ["Lightweight Armor", "Magical Resonance", "Spellcasting Enhancement"]
},

'starfall_iron': {
    id: 'starfall_iron',
    name: "Starfall Iron",
    icon: '⭐',
    category: 'smithing',
    rarity: 'rare',
    cost: 200,
    description: "Iron infused with cosmic energy from meteorites.",
    properties: [
        "Used in celestial weapons",
        "Can store radiant energy",
        "Enhances divine magic"
    ],
    source: "Forged from meteorites",
    uses: ["Celestial Weapons", "Radiant Energy Storage", "Divine Magic Enhancement"]
},

'void_steel': {
    id: 'void_steel',
    name: "Void Steel",
    icon: '⚫',
    category: 'smithing',
    rarity: 'rare',
    cost: 250,
    description: "Steel that absorbs light, perfect for shadow weapons.",
    properties: [
        "Used in shadow weapons",
        "Can store negative energy",
        "Enhances necromantic magic"
    ],
    source: "Forged in the Shadowfell",
    uses: ["Shadow Weapons", "Negative Energy Storage", "Necromantic Magic Enhancement"]
},

'frostforged_steel': {
    id: 'frostforged_steel',
    name: "Frostforged Steel",
    icon: '❄️',
    category: 'smithing',
    rarity: 'uncommon',
    cost: 100,
    description: "Steel quenched in glacial waters, always cold to the touch.",
    properties: [
        "Used in cold weapons",
        "Can create frost effects",
        "Enhances ice magic"
    ],
    source: "Forged in glacial waters",
    uses: ["Cold Weapons", "Frost Effects", "Ice Magic Enhancement"]
},

// ========== GEMSTONES ==========
'star_sapphire': {
    id: 'star_sapphire',
    name: "Star Sapphire",
    icon: '💎',
    category: 'gemstone',
    rarity: 'legendary',
    cost: 1000,
    description: "A sapphire that contains a moving star pattern within.",
    properties: [
        "Used in celestial magic items",
        "Can store radiant energy",
        "Enhances divination magic"
    ],
    source: "Found in celestial realms",
    uses: ["Celestial Magic Items", "Radiant Energy Storage", "Divination Enhancement"]
},

'void_opal': {
    id: 'void_opal',
    name: "Void Opal",
    icon: '⚫',
    category: 'gemstone',
    rarity: 'very_rare',
    cost: 500,
    description: "An opal that absorbs all light, filled with dark energy.",
    properties: [
        "Used in shadow magic items",
        "Can store negative energy",
        "Enhances necromantic spells"
    ],
    source: "Mined from the Shadowfell",
    uses: ["Shadow Magic Items", "Negative Energy Storage", "Necromancy Enhancement"]
},

'storm_diamond': {
    id: 'storm_diamond',
    name: "Storm Diamond",
    icon: '⚡',
    category: 'gemstone',
    rarity: 'rare',
    cost: 300,
    description: "A diamond that crackles with trapped lightning energy.",
    properties: [
        "Used in lightning magic items",
        "Can store electrical energy",
        "Enhances storm magic"
    ],
    source: "Found in storm clouds",
    uses: ["Lightning Magic Items", "Electrical Energy Storage", "Storm Magic Enhancement"]
},

'frost_emerald': {
    id: 'frost_emerald',
    name: "Frost Emerald",
    icon: '❄️',
    category: 'gemstone',
    rarity: 'uncommon',
    cost: 150,
    description: "An emerald that remains cold to the touch, filled with frost.",
    properties: [
        "Used in ice magic items",
        "Can create cold effects",
        "Enhances frost spells"
    ],
    source: "Found in glacial caves",
    uses: ["Ice Magic Items", "Cold Effects", "Frost Spell Enhancement"]
},

'ember_ruby': {
    id: 'ember_ruby',
    name: "Ember Ruby",
    icon: '🔥',
    category: 'gemstone',
    rarity: 'uncommon',
    cost: 120,
    description: "A ruby that glows with trapped fire energy.",
    properties: [
        "Used in fire magic items",
        "Can store heat energy",
        "Enhances flame spells"
    ],
    source: "Found in volcanic regions",
    uses: ["Fire Magic Items", "Heat Energy Storage", "Flame Spell Enhancement"]
},

// ========== MONSTER PARTS ==========
'beholder_eye': {
    id: 'beholder_eye',
    name: "Beholder Eye",
    icon: '👁️',
    category: 'monster',
    rarity: 'legendary',
    cost: 1000,
    description: "The preserved eye of a beholder, still pulsing with magic.",
    properties: [
        "Used in anti-magic items",
        "Can create disintegration effects",
        "Enhances abjuration magic"
    ],
    source: "Harvested from defeated beholders",
    uses: ["Anti-Magic Items", "Disintegration Effects", "Abjuration Enhancement"]
},

'lich_phylactery_shard': {
    id: 'lich_phylactery_shard',
    name: "Lich Phylactery Shard",
    icon: '💀',
    category: 'monster',
    rarity: 'very_rare',
    cost: 500,
    description: "A fragment from a lich's phylactery, filled with necrotic energy.",
    properties: [
        "Used in necromantic items",
        "Can store negative energy",
        "Enhances undead magic"
    ],
    source: "Collected from destroyed phylacteries",
    uses: ["Necromantic Items", "Negative Energy Storage", "Undead Magic Enhancement"]
},

'red_dragon_scale': {
    id: 'red_dragon_scale',
    name: "Red Dragon Scale",
    icon: '🐉',
    category: 'monster',
    rarity: 'rare',
    cost: 200,
    description: "A scale from a red dragon, resistant to fire.",
    properties: [
        "Used in fire resistance items",
        "Can create flame effects",
        "Enhances fire magic"
    ],
    source: "Collected from red dragons",
    uses: ["Fire Resistance Items", "Flame Effects", "Fire Magic Enhancement"]
},

'frost_giant_tooth': {
    id: 'frost_giant_tooth',
    name: "Frost Giant Tooth",
    icon: '❄️',
    category: 'monster',
    rarity: 'uncommon',
    cost: 100,
    description: "A tooth from a frost giant, always cold to the touch.",
    properties: [
        "Used in cold resistance items",
        "Can create ice effects",
        "Enhances frost magic"
    ],
    source: "Collected from frost giants",
    uses: ["Cold Resistance Items", "Ice Effects", "Frost Magic Enhancement"]
},

'fire_elemental_core': {
    id: 'fire_elemental_core',
    name: "Fire Elemental Core",
    icon: '🔥',
    category: 'monster',
    rarity: 'uncommon',
    cost: 80,
    description: "The core of a fire elemental, still smoldering.",
    properties: [
        "Used in fire magic items",
        "Can create flame effects",
        "Enhances evocation magic"
    ],
    source: "Harvested from defeated fire elementals",
    uses: ["Fire Magic Items", "Flame Effects", "Evocation Enhancement"]
},

// ========== PLANT MATERIALS ==========
'world_tree_sap': {
    id: 'world_tree_sap',
    name: "World Tree Sap",
    icon: '🌳',
    category: 'plant',
    rarity: 'legendary',
    cost: 1000,
    description: "Sap from the World Tree, pulsing with life energy.",
    properties: [
        "Used in resurrection potions",
        "Can restore youth temporarily",
        "Enhances life magic"
    ],
    source: "Collected from the World Tree",
    uses: ["Resurrection Potions", "Youth Restoration", "Life Magic Enhancement"]
},

'faerie_ring_mushroom': {
    id: 'faerie_ring_mushroom',
    name: "Faerie Ring Mushroom",
    icon: '🍄',
    category: 'plant',
    rarity: 'very_rare',
    cost: 300,
    description: "A mushroom that grows in faerie rings, glowing faintly.",
    properties: [
        "Used in illusion potions",
        "Can create glowing effects",
        "Enhances enchantment magic"
    ],
    source: "Found in faerie rings",
    uses: ["Illusion Potions", "Glowing Effects", "Enchantment Enhancement"]
},

'stormbloom': {
    id: 'stormbloom',
    name: "Stormbloom",
    icon: '⚡',
    category: 'plant',
    rarity: 'rare',
    cost: 150,
    description: "A flower that crackles with lightning energy.",
    properties: [
        "Used in lightning potions",
        "Can create electrical effects",
        "Enhances storm magic"
    ],
    source: "Grown in stormy regions",
    uses: ["Lightning Potions", "Electrical Effects", "Storm Magic Enhancement"]
},

'frost_lotus': {
    id: 'frost_lotus',
    name: "Frost Lotus",
    icon: '❄️',
    category: 'plant',
    rarity: 'uncommon',
    cost: 80,
    description: "A flower that remains frozen, covered in ice crystals.",
    properties: [
        "Used in cold resistance potions",
        "Can create ice effects",
        "Enhances frost magic"
    ],
    source: "Found in glacial regions",
    uses: ["Cold Resistance Potions", "Ice Effects", "Frost Magic Enhancement"]
},

'embercap_mushroom': {
    id: 'embercap_mushroom',
    name: "Embercap Mushroom",
    icon: '🔥',
    category: 'plant',
    rarity: 'uncommon',
    cost: 60,
    description: "A mushroom that glows with trapped fire energy.",
    properties: [
        "Used in fire resistance potions",
        "Can create flame effects",
        "Enhances fire magic"
    ],
    source: "Grown near volcanic vents",
    uses: ["Fire Resistance Potions", "Flame Effects", "Fire Magic Enhancement"]
},    
    enchanting_dust: {
        id: 'enchanting_dust',
        name: 'Enchanting Dust',
        icon: '✨',
        category: 'enchanting',
        rarity: 'uncommon',
        cost: 35,
        description: 'Powdered magical residue for binding enchantments.'
    },
    mana_gem: {
        id: 'mana_gem',
        name: 'Mana Gem',
        icon: '💠',
        category: 'enchanting',
        rarity: 'rare',
        cost: 175,
        description: 'A gem saturated with pure magical energy.'
    },
    
    // Gems
    ruby: {
        id: 'ruby',
        name: 'Ruby',
        icon: '♦️',
        category: 'gem',
        rarity: 'rare',
        cost: 100,
        description: 'A brilliant red gemstone associated with fire magic.'
    },
    sapphire: {
        id: 'sapphire',
        name: 'Sapphire',
        icon: '💙',
        category: 'gem',
        rarity: 'rare',
        cost: 100,
        description: 'A deep blue gemstone associated with water.'
    },
    emerald: {
        id: 'emerald',
        name: 'Emerald',
        icon: '💚',
        category: 'gem',
        rarity: 'rare',
        cost: 100,
        description: 'A vivid green gemstone associated with nature.'
    },
    diamond: {
        id: 'diamond',
        name: 'Diamond',
        icon: '💎',
        category: 'gem',
        rarity: 'legendary',
        cost: 500,
        description: 'Required for resurrection magic.'
    },
    pearl: {
        id: 'pearl',
        name: 'Pearl',
        icon: '⚪',
        category: 'gem',
        rarity: 'uncommon',
        cost: 50,
        description: 'Used in identification and divination.'
    },
    
    // Monster Parts
    troll_blood: {
        id: 'troll_blood',
        name: 'Troll Blood',
        icon: '🩸',
        category: 'monster',
        rarity: 'rare',
        cost: 125,
        description: 'Regenerative blood from a troll.'
    },
    basilisk_eye: {
        id: 'basilisk_eye',
        name: 'Basilisk Eye',
        icon: '👁️',
        category: 'monster',
        rarity: 'rare',
        cost: 200,
        description: 'The petrifying eye of a basilisk.'
    },
    unicorn_hair: {
        id: 'unicorn_hair',
        name: 'Unicorn Hair',
        icon: '🦄',
        category: 'monster',
        rarity: 'rare',
        cost: 150,
        description: 'Freely given hair from a unicorn.'
    },
    demon_ichor: {
        id: 'demon_ichor',
        name: 'Demon Ichor',
        icon: '🩸',
        category: 'monster',
        rarity: 'rare',
        cost: 175,
        description: 'The vile blood of a demon.'
    }
};

// ============================================
// === MATERIAL SHOP CONFIGURATION ===
// ============================================

export const MATERIAL_SHOP_CONFIG = {
    bulkDiscounts: [
        { minQty: 1, discount: 0, label: 'Standard' },
        { minQty: 5, discount: 0.05, label: '5% Off' },
        { minQty: 10, discount: 0.10, label: '10% Off' },
        { minQty: 25, discount: 0.15, label: '15% Off' },
        { minQty: 50, discount: 0.20, label: '20% Off' }
    ],
    
    categories: [
        { id: 'all', name: 'All Materials', icon: '📦' },
        { id: 'scroll', name: 'Scroll Supplies', icon: '📜' },
        { id: 'potion', name: 'Potion Ingredients', icon: '🧪' },
        { id: 'essence', name: 'Essences', icon: '✨' },
        { id: 'enchanting', name: 'Enchanting', icon: '💎' },
        { id: 'gem', name: 'Gems', icon: '💠' },
        { id: 'monster', name: 'Monster Parts', icon: '🐉' }
    ],
    
    vendors: {
        general: { id: 'general', name: "Mystic Emporium", icon: '🏪', markup: 1.0 },
        rare: { id: 'rare', name: "The Gilded Crucible", icon: '⚗️', markup: 1.15 },
        blackMarket: { id: 'blackMarket', name: "Shadow Broker", icon: '🦝', markup: 1.25 }
    }
};

// ============================================
// === MATERIAL SHOP STOCK ===
// ============================================
const MARKET_CONFIG = {
    restockInterval: 60 * 1000, // Check for restock every 1 minute
    scarcityMultiplier: 2.5,    // Max price increase (2.5x) when stock is near 0
    surplusMultiplier: 0.8,     // Min price decrease (0.8x) when overstocked
    
    // Default behaviors based on rarity if not specified
    defaults: {
        common: { baseStock: 100, restockRate: 10, volatility: 0.1 },
        uncommon: { baseStock: 40, restockRate: 4, volatility: 0.2 },
        rare: { baseStock: 10, restockRate: 1, volatility: 0.3 },
        exotic: { baseStock: 3, restockRate: 0.2, volatility: 0.5 },
        legendary: { baseStock: 1, restockRate: 0.05, volatility: 0.8 }
    }
};

// 2. The Live Market State (stored in memory, should be saved to localStorage)
let liveMarketState = {};

// 3. Initialize or Load Market
export function initMarket(savedState = null) {
    if (savedState) {
        liveMarketState = savedState;
    }
}

// 4. Get Current Market Data for an Item
export function getMarketData(materialId) {
    // Ensure the item exists in our tracking
    if (!liveMarketState[materialId]) {
        // Get material info (using your dynamic fallback helper)
        const mat = getMaterialData(materialId);
        const defaults = MARKET_CONFIG.defaults[mat.rarity] || MARKET_CONFIG.defaults.common;
        
        liveMarketState[materialId] = {
            currentStock: defaults.baseStock,
            baseStock: defaults.baseStock,
            restockRate: defaults.restockRate,
            lastRestock: Date.now(),
            trend: (Math.random() * 0.4) + 0.8 // Random multiplier between 0.8x and 1.2x
        };
    }
    
    const data = liveMarketState[materialId];
    
    // Calculate Passive Restock (Regenerate stock over time)
    const now = Date.now();
    const msPassed = now - data.lastRestock;
    const hoursPassed = msPassed / (1000 * 60 * 60); // Convert ms to hours
    
    if (hoursPassed > 0.1) { // Only update if enough time passed
        const amountRestocked = Math.floor(data.restockRate * hoursPassed);
        if (amountRestocked > 0) {
            // Cap stock at 1.5x base (Market Surplus)
            data.currentStock = Math.min(data.currentStock + amountRestocked, Math.floor(data.baseStock * 1.5));
            data.lastRestock = now;
        }
    }
    
    return data;
}

// 5. Calculate Dynamic Price
export function getMaterialXPPrice(materialId, quantity = 1) {
    const mat = getMaterialData(materialId);
    const market = getMarketData(materialId);
    
    let basePrice = mat.cost * 10; // 1 Gold = 10 XP
    
    // Supply & Demand Logic
    const stockRatio = market.currentStock / market.baseStock;
    let priceMultiplier = 1.0;
    
    if (stockRatio < 0.2) priceMultiplier = MARKET_CONFIG.scarcityMultiplier; // Very Low Stock (High Price)
    else if (stockRatio < 0.5) priceMultiplier = 1.5; // Low Stock
    else if (stockRatio > 1.2) priceMultiplier = MARKET_CONFIG.surplusMultiplier; // Surplus (Sale)
    
    // Apply Random Market Trend (Fluctuation)
    priceMultiplier *= market.trend;
    
    const finalPricePerUnit = Math.ceil(basePrice * priceMultiplier);
    
    return finalPricePerUnit * quantity;
}

// 6. Check Availability
export function getMaterialAvailability(materialId) {
    const market = getMarketData(materialId);
    return {
        available: market.currentStock > 0,
        stock: market.currentStock,
        trend: market.trend
    };
}

// 7. Purchase Function (Reduces Stock)
export function reduceMarketStock(materialId, amount) {
    const market = getMarketData(materialId);
    market.currentStock = Math.max(0, market.currentStock - amount);
    // Buying creates demand, slightly increasing the trend for next time
    market.trend = Math.min(1.5, market.trend + 0.05); 
    return liveMarketState; // Return state to save it
}

// 8. Export the state getter for saving
export function getMarketState() {
    return liveMarketState;
}
export const MATERIAL_SHOP_STOCK = {
    blank_parchment: { available: true, stock: 50, restockRate: 10 },
    fine_parchment: { available: true, stock: 25, restockRate: 5 },
    enchanted_vellum: { available: true, stock: 10, restockRate: 2 },
    enchanted_ink: { available: true, stock: 30, restockRate: 8 },
    arcane_ink: { available: true, stock: 15, restockRate: 3 },
    arcane_quill: { available: true, stock: 5, restockRate: 1 },
    spell_focus_dust: { available: true, stock: 40, restockRate: 10 },
    arcane_powder: { available: true, stock: 20, restockRate: 4 },
    empty_vial: { available: true, stock: 100, restockRate: 25 },
    reinforced_flask: { available: true, stock: 40, restockRate: 10 },
    crystal_phial: { available: true, stock: 10, restockRate: 2 },
    spring_water: { available: true, stock: 100, restockRate: 50 },
    moonwell_water: { available: true, stock: 20, restockRate: 5 },
    healing_herbs: { available: true, stock: 60, restockRate: 15 },
    silverleaf: { available: true, stock: 20, restockRate: 4 },
    bloodmoss: { available: true, stock: 8, restockRate: 1, vendor: 'rare' },
    nightshade: { available: true, stock: 25, restockRate: 5 },
    mandrake_root: { available: true, stock: 5, restockRate: 1, vendor: 'rare' },
    fire_essence: { available: true, stock: 8, restockRate: 2 },
    frost_essence: { available: true, stock: 8, restockRate: 2 },
    lightning_essence: { available: true, stock: 6, restockRate: 1 },
    shadow_essence: { available: true, stock: 4, restockRate: 0.5, vendor: 'rare' },
    radiant_essence: { available: true, stock: 4, restockRate: 0.5, vendor: 'rare' },
    arcane_crystal: { available: true, stock: 6, restockRate: 1 },
    soul_shard: { available: true, stock: 4, restockRate: 0.5, vendor: 'blackMarket' },
    runestone: { available: true, stock: 15, restockRate: 3 },
    enchanting_dust: { available: true, stock: 25, restockRate: 5 },
    mana_gem: { available: true, stock: 4, restockRate: 1, vendor: 'rare' },
    ruby: { available: true, stock: 6, restockRate: 1 },
    sapphire: { available: true, stock: 6, restockRate: 1 },
    emerald: { available: true, stock: 6, restockRate: 1 },
    diamond: { available: true, stock: 2, restockRate: 0.3, vendor: 'rare' },
    pearl: { available: true, stock: 15, restockRate: 3 },
    troll_blood: { available: true, stock: 4, restockRate: 0.5, vendor: 'blackMarket' },
    basilisk_eye: { available: true, stock: 2, restockRate: 0.2, vendor: 'blackMarket' },
    unicorn_hair: { available: false, stock: 1, restockRate: 0, questOnly: true },
    demon_ichor: { available: true, stock: 3, restockRate: 0.3, vendor: 'blackMarket' }
};

// ============================================
// === MATERIAL BUNDLES ===
// ============================================

export const MATERIAL_BUNDLES = {
    scroll_starter_kit: {
        id: 'scroll_starter_kit',
        name: 'Scroll Scriber Starter Kit',
        description: 'Everything for basic scrolls',
        icon: '📦',
        contents: [
            { id: 'blank_parchment', quantity: 10 },
            { id: 'enchanted_ink', quantity: 5 },
            { id: 'spell_focus_dust', quantity: 5 }
        ],
        regularPrice: 200,
        bundlePrice: 165,
        savings: 35,
        rarity: 'common'
    },
    scroll_advanced_kit: {
        id: 'scroll_advanced_kit',
        name: 'Advanced Scriber Kit',
        description: 'Materials for 2nd-3rd level scrolls',
        icon: '📦',
        contents: [
            { id: 'fine_parchment', quantity: 5 },
            { id: 'arcane_ink', quantity: 3 },
            { id: 'arcane_powder', quantity: 3 },
            { id: 'arcane_quill', quantity: 1 }
        ],
        regularPrice: 475,
        bundlePrice: 399,
        savings: 76,
        rarity: 'uncommon'
    },
    potion_brewer_kit: {
        id: 'potion_brewer_kit',
        name: 'Potion Brewer Starter Kit',
        description: 'Basic supplies for healing potions',
        icon: '📦',
        contents: [
            { id: 'empty_vial', quantity: 10 },
            { id: 'spring_water', quantity: 10 },
            { id: 'healing_herbs', quantity: 10 },
            { id: 'moonwell_water', quantity: 3 }
        ],
        regularPrice: 180,
        bundlePrice: 145,
        savings: 35,
        rarity: 'common'
    },
    elemental_essence_pack: {
        id: 'elemental_essence_pack',
        name: 'Elemental Essence Pack',
        description: 'One of each elemental essence',
        icon: '📦',
        contents: [
            { id: 'fire_essence', quantity: 1 },
            { id: 'frost_essence', quantity: 1 },
            { id: 'lightning_essence', quantity: 1 }
        ],
        regularPrice: 225,
        bundlePrice: 189,
        savings: 36,
        rarity: 'rare'
    }
};

// ============================================
// === SCROLL RECIPES ===
// ============================================

export const SCROLL_RECIPES = {
    // Cantrips
    scroll_fire_bolt: {
        id: 'scroll_fire_bolt',
        name: 'Scroll of Fire Bolt',
        spellName: 'Fire Bolt',
        
        wildcard: true, 

        spellLevel: 0,
        school: 'EVOCATION',
        description: 'Hurl a mote of fire at a creature. 1d10 fire damage.',
        icon: '📜',
        materials: [
            { id: 'blank_parchment', quantity: 1 },
            { id: 'enchanted_ink', quantity: 1 }
        ],
        goldCost: 15,
        craftTime: 2,
        successChance: 95,
        levelRequirement: 1
    },
    scroll_mage_hand: {
        id: 'scroll_mage_hand',
        name: 'Scroll of Mage Hand',
        spellName: 'Mage Hand',
        spellLevel: 0,
        school: 'CONJURATION',
        description: 'A spectral floating hand appears and can manipulate objects.',
        icon: '📜',
        
        wildcard: true, 

        materials: [
            { id: 'blank_parchment', quantity: 1 },
            { id: 'enchanted_ink', quantity: 1 }
        ],
        goldCost: 15,
        craftTime: 2,
        successChance: 95,
        levelRequirement: 1
    },
    scroll_light: {
        id: 'scroll_light',
        name: 'Scroll of Light',
        spellName: 'Light',
        spellLevel: 0,
        school: 'EVOCATION',
        description: 'Touch an object to make it shed bright light in a 20-foot radius.',
        icon: '📜',
        materials: [
            { id: 'blank_parchment', quantity: 1 },
            { id: 'enchanted_ink', quantity: 1 }
        ],
        
        wildcard: true, 

        goldCost: 15,
        craftTime: 2,
        successChance: 95,
        levelRequirement: 1
    },
    
    // 1st Level
    scroll_magic_missile: {
        id: 'scroll_magic_missile',
        name: 'Scroll of Magic Missile',
        spellName: 'Magic Missile',
        
        wildcard: true, 

        spellLevel: 1,
        school: 'EVOCATION',
        description: 'Three darts of magical force. Each deals 1d4+1 force damage.',
        icon: '📜',
        materials: [
            { id: 'blank_parchment', quantity: 1 },
            { id: 'enchanted_ink', quantity: 2 },
            { id: 'spell_focus_dust', quantity: 1 }
        ],
        goldCost: 25,
        craftTime: 4,
        successChance: 90,
        levelRequirement: 1
    },
    scroll_cure_wounds: {
        id: 'scroll_cure_wounds',
        name: 'Scroll of Cure Wounds',
        
        wildcard: true, 

        spellName: 'Cure Wounds',
        spellLevel: 1,
        school: 'EVOCATION',
        description: 'A creature you touch regains 1d8 + spellcasting modifier HP.',
        icon: '📜',
        materials: [
            { id: 'blank_parchment', quantity: 1 },
            { id: 'enchanted_ink', quantity: 2 },
            { id: 'healing_herbs', quantity: 1 }
        ],
        goldCost: 25,
        craftTime: 4,
        successChance: 90,
        levelRequirement: 1
    },
    scroll_shield: {
        id: 'scroll_shield',
        
        wildcard: true, 

        name: 'Scroll of Shield',
        spellName: 'Shield',
        spellLevel: 1,
        school: 'ABJURATION',
        description: 'Reaction: +5 AC until start of next turn.',
        icon: '📜',
        materials: [
            { id: 'blank_parchment', quantity: 1 },
            { id: 'enchanted_ink', quantity: 2 },
            { id: 'spell_focus_dust', quantity: 1 }
        ],
        goldCost: 30,
        craftTime: 4,
        successChance: 88,
        levelRequirement: 1
    },
    scroll_detect_magic: {
        id: 'scroll_detect_magic',
        name: 'Scroll of Detect Magic',
        spellName: 'Detect Magic',
        spellLevel: 1,
        school: 'DIVINATION',
        description: 'Sense presence of magic within 30 feet for 10 minutes.',
        icon: '📜',
        
        wildcard: true, 

        materials: [
            { id: 'blank_parchment', quantity: 1 },
            { id: 'enchanted_ink', quantity: 2 }
        ],
        goldCost: 25,
        craftTime: 4,
        successChance: 92,
        levelRequirement: 1,
        ritual: true
    },
    scroll_sleep: {
        id: 'scroll_sleep',
        name: 'Scroll of Sleep',
        spellName: 'Sleep',
        
        wildcard: true, 

        spellLevel: 1,
        school: 'ENCHANTMENT',
        description: 'Roll 5d8; creatures with HP totaling that amount fall asleep.',
        icon: '📜',
        materials: [
            { id: 'blank_parchment', quantity: 1 },
            { id: 'enchanted_ink', quantity: 2 },
            { id: 'nightshade', quantity: 1 }
        ],
        goldCost: 25,
        craftTime: 4,
        successChance: 88,
        levelRequirement: 1
    },
    
    // 2nd Level
    scroll_invisibility: {
        id: 'scroll_invisibility',
        name: 'Scroll of Invisibility',
        spellName: 'Invisibility',
        spellLevel: 2,
        
        wildcard: true, 

        school: 'ILLUSION',
        description: 'A creature becomes invisible for 1 hour.',
        icon: '📜',
        materials: [
            { id: 'fine_parchment', quantity: 1 },
            { id: 'enchanted_ink', quantity: 3 },
            { id: 'spell_focus_dust', quantity: 2 }
        ],
        goldCost: 75,
        craftTime: 8,
        successChance: 85,
        levelRequirement: 3
    },
    scroll_hold_person: {
        id: 'scroll_hold_person',
        name: 'Scroll of Hold Person',
        
        wildcard: true, 

        spellName: 'Hold Person',
        spellLevel: 2,
        school: 'ENCHANTMENT',
        description: 'Paralyze a humanoid on failed Wisdom save.',
        icon: '📜',
        materials: [
            { id: 'fine_parchment', quantity: 1 },
            { id: 'enchanted_ink', quantity: 3 },
            { id: 'spell_focus_dust', quantity: 2 }
        ],
        goldCost: 80,
        craftTime: 8,
        successChance: 82,
        levelRequirement: 3
    },
    scroll_misty_step: {
        id: 'scroll_misty_step',
        name: 'Scroll of Misty Step',
        spellName: 'Misty Step',
        spellLevel: 2,
        
        wildcard: true, 

        school: 'CONJURATION',
        description: 'Teleport up to 30 feet as a bonus action.',
        icon: '📜',
        materials: [
            { id: 'fine_parchment', quantity: 1 },
            { id: 'enchanted_ink', quantity: 3 },
            { id: 'spell_focus_dust', quantity: 1 }
        ],
        goldCost: 75,
        craftTime: 8,
        successChance: 85,
        levelRequirement: 3
    },
    
    // 3rd Level
    scroll_fireball: {
        id: 'scroll_fireball',
        name: 'Scroll of Fireball',
        spellName: 'Fireball',
        
        wildcard: true, 

        spellLevel: 3,
        school: 'EVOCATION',
        description: '8d6 fire damage in a 20-foot radius. Dex save for half.',
        icon: '📜',
        materials: [
            { id: 'fine_parchment', quantity: 2 },
            { id: 'arcane_ink', quantity: 2 },
            { id: 'fire_essence', quantity: 1 },
            { id: 'arcane_powder', quantity: 1 }
        ],
        goldCost: 150,
        craftTime: 16,
        successChance: 75,
        levelRequirement: 5
    },
    scroll_counterspell: {
        id: 'scroll_counterspell',
        name: 'Scroll of Counterspell',
        spellName: 'Counterspell',
        
        wildcard: true, 

        spellLevel: 3,
        school: 'ABJURATION',
        description: 'Interrupt a spell being cast. Auto-success for 3rd level or lower.',
        icon: '📜',
        materials: [
            { id: 'fine_parchment', quantity: 2 },
            { id: 'arcane_ink', quantity: 2 },
            { id: 'arcane_crystal', quantity: 1 },
            { id: 'arcane_powder', quantity: 1 }
        ],
        goldCost: 175,
        craftTime: 16,
        successChance: 72,
        levelRequirement: 5
    },
    scroll_revivify: {
        id: 'scroll_revivify',
        name: 'Scroll of Revivify',
        spellName: 'Revivify',
        spellLevel: 3,
        
        wildcard: true, 

        school: 'NECROMANCY',
        description: 'Return a creature dead for less than 1 minute to life with 1 HP.',
        icon: '📜',
        materials: [
            { id: 'enchanted_vellum', quantity: 1 },
            { id: 'arcane_ink', quantity: 3 },
            { id: 'soul_shard', quantity: 1 },
            { id: 'arcane_powder', quantity: 2 }
        ],
        goldCost: 300,
        craftTime: 24,
        successChance: 70,
        levelRequirement: 5,
        additionalCost: { diamonds: 300 }
    },
    scroll_haste: {
        id: 'scroll_haste',
        name: 'Scroll of Haste',
        
        wildcard: true, 

        spellName: 'Haste',
        spellLevel: 3,
        school: 'TRANSMUTATION',
        description: 'Double speed, +2 AC, advantage on Dex saves, extra action.',
        icon: '📜',
        materials: [
            { id: 'fine_parchment', quantity: 2 },
            { id: 'arcane_ink', quantity: 2 },
            { id: 'lightning_essence', quantity: 1 },
            { id: 'arcane_powder', quantity: 1 }
        ],
        goldCost: 175,
        craftTime: 16,
        successChance: 72,
        levelRequirement: 5
    },
    
// ============================================
// === ADDITIONAL SCROLLS (Wildcard Enabled) ===
// ============================================

// ——— Cantrips (Level 0) ———
scroll_spark_jolt: {
    id: 'scroll_spark_jolt',
    name: 'Scroll of Spark Jolt',
    spellName: 'Spark Jolt',
    spellLevel: 0,
    school: 'EVOCATION',
    description: 'Snap a crackling spark that leaps to a target. Ranged spell attack; 1d8 lightning damage; ignites tinder.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 1 }
    ],
    goldCost: 15,
    craftTime: 2,
    successChance: 95,
    levelRequirement: 1
},
scroll_minor_repair: {
    id: 'scroll_minor_repair',
    name: 'Scroll of Minor Repair',
    spellName: 'Minor Repair',
    spellLevel: 0,
    school: 'TRANSMUTATION',
    description: 'Mends a break/tear up to 1 ft in any dimension. Restores simple mechanical function.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 1 }
    ],
    goldCost: 15,
    craftTime: 2,
    successChance: 95,
    levelRequirement: 1
},
scroll_gust_push: {
    id: 'scroll_gust_push',
    name: 'Scroll of Gust Push',
    spellName: 'Gust Push',
    spellLevel: 0,
    school: 'TRANSMUTATION',
    description: 'A burst of wind shoves a creature/object 5 ft (STR save negates). Extinguishes small flames.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 1 }
    ],
    goldCost: 15,
    craftTime: 2,
    successChance: 95,
    levelRequirement: 1
},
scroll_digital_ping: {
    id: 'scroll_digital_ping',
    name: 'Scroll of Digital Ping',
    spellName: 'Digital Ping',
    spellLevel: 0,
    school: 'DIVINATION',
    description: 'Detects active constructs and powered devices within 30 ft through thin walls.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 1 }
    ],
    goldCost: 15,
    craftTime: 2,
    successChance: 95,
    levelRequirement: 1
},
scroll_shadow_veil: {
    id: 'scroll_shadow_veil',
    name: 'Scroll of Shadow Veil',
    spellName: 'Shadow Veil',
    spellLevel: 0,
    school: 'ILLUSION',
    description: 'Shroud yourself in flickering shade for 1 minute. Lightly obscured; advantage on Stealth checks in dim light.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 1 }
    ],
    goldCost: 15,
    craftTime: 2,
    successChance: 95,
    levelRequirement: 1
},

// ——— 1st Level ———
scroll_barrier_ward: {
    id: 'scroll_barrier_ward',
    name: 'Scroll of Barrier Ward',
    spellName: 'Barrier Ward',
    spellLevel: 1,
    school: 'ABJURATION',
    description: 'Protective field grants +2 AC for 10 minutes (concentration).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 2 },
        { id: 'spell_focus_dust', quantity: 1 }
    ],
    goldCost: 30,
    craftTime: 4,
    successChance: 90,
    levelRequirement: 1
},
scroll_feather_step: {
    id: 'scroll_feather_step',
    name: 'Scroll of Feather Step',
    spellName: 'Feather Step',
    spellLevel: 1,
    school: 'TRANSMUTATION',
    description: 'Reduce fall speed; negate fall damage up to 60 ft for 1 minute (reaction on fall).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 2 }
    ],
    goldCost: 25,
    craftTime: 4,
    successChance: 92,
    levelRequirement: 1
},
scroll_seekers_mark: {
    id: 'scroll_seekers_mark',
    name: "Scroll of Seeker's Mark",
    spellName: "Seeker's Mark",
    spellLevel: 1,
    school: 'DIVINATION',
    description: 'Mark a target you can see; know direction and rough distance for 1 hour (no plane crossing).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 2 },
        { id: 'spell_focus_dust', quantity: 1 }
    ],
    goldCost: 30,
    craftTime: 4,
    successChance: 90,
    levelRequirement: 1
},
scroll_vine_snare: {
    id: 'scroll_vine_snare',
    name: 'Scroll of Vine Snare',
    spellName: 'Vine Snare',
    spellLevel: 1,
    school: 'CONJURATION',
    description: 'Conjure grasping roots in a 10-ft square. STR save or be restrained for up to 1 minute.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 2 },
        { id: 'silverleaf', quantity: 1 }
    ],
    goldCost: 25,
    craftTime: 4,
    successChance: 88,
    levelRequirement: 1
},
scroll_data_scrub: {
    id: 'scroll_data_scrub',
    name: 'Scroll of Data Scrub',
    spellName: 'Data Scrub',
    spellLevel: 1,
    school: 'ABJURATION',
    description: 'For 10 minutes, you cannot be tracked by mundane sensors or low-tier scrying in a 10-ft aura.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 2 },
        { id: 'spell_focus_dust', quantity: 1 }
    ],
    goldCost: 30,
    craftTime: 4,
    successChance: 90,
    levelRequirement: 1
},
scroll_radiant_dart: {
    id: 'scroll_radiant_dart',
    name: 'Scroll of Radiant Dart',
    spellName: 'Radiant Dart',
    spellLevel: 1,
    school: 'EVOCATION',
    description: 'Launch a radiant mote; 2d6 radiant damage (undead/disguised fiends have disadvantage on save).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 2 },
        { id: 'radiant_essence', quantity: 1 }
    ],
    goldCost: 30,
    craftTime: 4,
    successChance: 88,
    levelRequirement: 1
},
scroll_hologram_decoy: {
    id: 'scroll_hologram_decoy',
    name: 'Scroll of Hologram Decoy',
    spellName: 'Hologram Decoy',
    spellLevel: 1,
    school: 'ILLUSION',
    description: 'Create a moving visual-only decoy of yourself (no sound) for 1 minute, controlled as a bonus action.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 2 }
    ],
    goldCost: 25,
    craftTime: 4,
    successChance: 92,
    levelRequirement: 1
},
scroll_ice_shards: {
    id: 'scroll_ice_shards',
    name: 'Scroll of Ice Shards',
    spellName: 'Ice Shards',
    spellLevel: 1,
    school: 'EVOCATION',
    description: 'Cone (15 ft) of razor ice; 2d6 cold damage and speed -10 ft until start of your next turn (CON save half).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 2 },
        { id: 'frost_essence', quantity: 1 }
    ],
    goldCost: 30,
    craftTime: 4,
    successChance: 88,
    levelRequirement: 1
},

// ——— 2nd Level ———
scroll_silence_field: {
    id: 'scroll_silence_field',
    name: 'Scroll of Silence Field',
    spellName: 'Silence Field',
    spellLevel: 2,
    school: 'ABJURATION',
    description: 'Create a 20-ft radius zone of magical silence for up to 10 minutes (ritual).',
    icon: '📜',
    ritual: true,
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'spell_focus_dust', quantity: 2 }
    ],
    goldCost: 80,
    craftTime: 8,
    successChance: 82,
    levelRequirement: 3
},
scroll_shadow_step: {
    id: 'scroll_shadow_step',
    name: 'Scroll of Shadow Step',
    spellName: 'Shadow Step',
    spellLevel: 2,
    school: 'CONJURATION',
    description: 'Teleport up to 30 ft between two dim-light or darker spaces you can see.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'shadow_essence', quantity: 1 }
    ],
    goldCost: 80,
    craftTime: 8,
    successChance: 85,
    levelRequirement: 3
},
scroll_grav_sling: {
    id: 'scroll_grav_sling',
    name: 'Scroll of Grav Sling',
    spellName: 'Grav Sling',
    spellLevel: 2,
    school: 'TRANSMUTATION',
    description: 'Hurl a Large or smaller creature 20 ft; 2d6 bludgeoning if it hits a wall; STR save negates.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'spell_focus_dust', quantity: 2 }
    ],
    goldCost: 75,
    craftTime: 8,
    successChance: 85,
    levelRequirement: 3
},
scroll_mirror_veil: {
    id: 'scroll_mirror_veil',
    name: 'Scroll of Mirror Veil',
    spellName: 'Mirror Veil',
    spellLevel: 2,
    school: 'ILLUSION',
    description: 'Create 2–3 illusory duplicates that confuse attackers (attacks may target duplicates).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 }
    ],
    goldCost: 80,
    craftTime: 8,
    successChance: 82,
    levelRequirement: 3
},
scroll_healing_surge: {
    id: 'scroll_healing_surge',
    name: 'Scroll of Healing Surge',
    spellName: 'Healing Surge',
    spellLevel: 2,
    school: 'EVOCATION',
    description: 'Touch restores 2d8 + spellcasting mod HP. Additional creature within 5 ft heals 1d8 (optional).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'silverleaf', quantity: 1 }
    ],
    goldCost: 80,
    craftTime: 8,
    successChance: 85,
    levelRequirement: 3
},
scroll_acid_burst: {
    id: 'scroll_acid_burst',
    name: 'Scroll of Acid Burst',
    spellName: 'Acid Burst',
    spellLevel: 2,
    school: 'EVOCATION',
    description: '10-ft radius splash; 3d6 acid; objects in area take damage unless protected (DEX save half).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 }
    ],
    goldCost: 75,
    craftTime: 8,
    successChance: 85,
    levelRequirement: 3
},
scroll_detect_thoughts: {
    id: 'scroll_detect_thoughts',
    name: 'Scroll of Detect Thoughts',
    spellName: 'Detect Thoughts',
    spellLevel: 2,
    school: 'DIVINATION',
    description: 'Read surface thoughts; probe deeper with save. Lasts up to 1 minute (concentration).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 }
    ],
    goldCost: 80,
    craftTime: 8,
    successChance: 82,
    levelRequirement: 3
},
scroll_lesser_glyph: {
    id: 'scroll_lesser_glyph',
    name: 'Scroll of Lesser Glyph',
    spellName: 'Lesser Glyph',
    spellLevel: 2,
    school: 'ABJURATION',
    description: 'Inscribe a minor triggered sigil (5-ft area): 2d8 force or 2d6 elemental (of your choice). 24h duration.',
    icon: '📜',
    ritual: true,
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'spell_focus_dust', quantity: 2 }
    ],
    goldCost: 85,
    craftTime: 8,
    successChance: 82,
    levelRequirement: 3
},

// ——— 3rd Level ———
scroll_gravity_well: {
    id: 'scroll_gravity_well',
    name: 'Scroll of Gravity Well',
    spellName: 'Gravity Well',
    spellLevel: 3,
    school: 'TRANSMUTATION',
    description: 'Create a 20-ft radius zone for 1 minute. Creatures are pulled 10 ft toward center; 3d6 bludgeoning on fail.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'arcane_powder', quantity: 1 }
    ],
    goldCost: 160,
    craftTime: 16,
    successChance: 74,
    levelRequirement: 5
},
scroll_aurora_lance: {
    id: 'scroll_aurora_lance',
    name: 'Scroll of Aurora Lance',
    spellName: 'Aurora Lance',
    spellLevel: 3,
    school: 'EVOCATION',
    description: 'Beam of prismatic light; 5d8 radiant, and target sheds bright light (disadvantage on Stealth) for 1 minute (CON save half).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'radiant_essence', quantity: 1 }
    ],
    goldCost: 170,
    craftTime: 16,
    successChance: 72,
    levelRequirement: 5
},
scroll_spirit_anchor: {
    id: 'scroll_spirit_anchor',
    name: 'Scroll of Spirit Anchor',
    spellName: 'Spirit Anchor',
    spellLevel: 3,
    school: 'NECROMANCY',
    description: 'Target fails CHA save: can’t teleport, phase, or be banished for 1 minute; also prevents death saves advantage.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'soul_shard', quantity: 1 }
    ],
    goldCost: 190,
    craftTime: 16,
    successChance: 70,
    levelRequirement: 5
},
scroll_phase_shift: {
    id: 'scroll_phase_shift',
    name: 'Scroll of Phase Shift',
    spellName: 'Phase Shift',
    spellLevel: 3,
    school: 'CONJURATION',
    description: 'Become briefly intangible; move through creatures/objects until end of your turn; attacks pass through (no damage).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'shadow_essence', quantity: 1 }
    ],
    goldCost: 175,
    craftTime: 16,
    successChance: 72,
    levelRequirement: 5
},
scroll_storm_burst: {
    id: 'scroll_storm_burst',
    name: 'Scroll of Storm Burst',
    spellName: 'Storm Burst',
    spellLevel: 3,
    school: 'EVOCATION',
    description: '10-ft radius burst: 4d6 lightning + 2d6 thunder; creatures made of metal have disadvantage on save.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'lightning_essence', quantity: 1 }
    ],
    goldCost: 160,
    craftTime: 16,
    successChance: 75,
    levelRequirement: 5
},
scroll_mass_illusion: {
    id: 'scroll_mass_illusion',
    name: 'Scroll of Mass Illusion',
    spellName: 'Mass Illusion',
    spellLevel: 3,
    school: 'ILLUSION',
    description: 'Populate a 30-ft cube with moving, sound-capable illusions of a small squad (no touch). 10 minutes (concentration).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 }
    ],
    goldCost: 150,
    craftTime: 16,
    successChance: 75,
    levelRequirement: 5
},
scroll_recall_object: {
    id: 'scroll_recall_object',
    name: 'Scroll of Recall Object',
    spellName: 'Recall Object',
    spellLevel: 3,
    school: 'CONJURATION',
    description: 'Teleport a known, unattended object (≤5 lb) from within 1 mile into your hand (fails across planar boundaries).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'arcane_powder', quantity: 1 }
    ],
    goldCost: 160,
    craftTime: 16,
    successChance: 74,
    levelRequirement: 5
},
scroll_warded_hideout: {
    id: 'scroll_warded_hideout',
    name: 'Scroll of Warded Hideout',
    spellName: 'Warded Hideout',
    spellLevel: 3,
    school: 'ABJURATION',
    description: 'Sanctify a 20-ft cube for 8 hours: blocks low-tier scrying/teleport; alarms on intrusion (ritual).',
    icon: '📜',
    ritual: true,
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'arcane_powder', quantity: 1 }
    ],
    goldCost: 175,
    craftTime: 16,
    successChance: 72,
    levelRequirement: 5
},

// ——— 4th Level ———
scroll_dimensional_door: {
    id: 'scroll_dimensional_door',
    name: 'Scroll of Dimensional Door',
    spellName: 'Dimensional Door',
    spellLevel: 4,
    school: 'CONJURATION',
    description: 'Teleport yourself and one willing creature up to 500 ft to a space you can visualize.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'arcane_crystal', quantity: 1 }
    ],
    goldCost: 300,
    craftTime: 32,
    successChance: 68,
    levelRequirement: 7
},
scroll_time_dilation: {
    id: 'scroll_time_dilation',
    name: 'Scroll of Time Dilation',
    spellName: 'Time Dilation',
    spellLevel: 4,
    school: 'TRANSMUTATION',
    description: 'A 20-ft radius bubble slows enemies (Slow effect) for up to 1 minute (WIS save negates per creature).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'arcane_powder', quantity: 2 }
    ],
    goldCost: 320,
    craftTime: 32,
    successChance: 66,
    levelRequirement: 7
},
scroll_bone_armor: {
    id: 'scroll_bone_armor',
    name: 'Scroll of Bone Armor',
    spellName: 'Bone Armor',
    spellLevel: 4,
    school: 'NECROMANCY',
    description: 'Protective necrotic shell grants AC 16 if lower and 20 temp HP for 1 hour (no stealth penalty).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'soul_shard', quantity: 1 }
    ],
    goldCost: 300,
    craftTime: 32,
    successChance: 68,
    levelRequirement: 7
},
scroll_wall_of_light: {
    id: 'scroll_wall_of_light',
    name: 'Scroll of Wall of Light',
    spellName: 'Wall of Light',
    spellLevel: 4,
    school: 'EVOCATION',
    description: 'Create a 30-ft long, 10-ft high radiant wall. Passing through deals 4d8 radiant; blinds on failed CON save.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'radiant_essence', quantity: 1 },
        { id: 'arcane_powder', quantity: 2 }
    ],
    goldCost: 320,
    craftTime: 32,
    successChance: 66,
    levelRequirement: 7
},

// ——— 5th Level ———
scroll_null_field: {
    id: 'scroll_null_field',
    name: 'Scroll of Null Field',
    spellName: 'Null Field',
    spellLevel: 5,
    school: 'ABJURATION',
    description: '30-ft radius zone suppresses spells of 3rd level or lower and dampens higher magic checks (DM discretion), 1 minute.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 4 },
        { id: 'arcane_crystal', quantity: 1 },
        { id: 'arcane_powder', quantity: 2 }
    ],
    goldCost: 750,
    craftTime: 64,
    successChance: 62,
    levelRequirement: 9
},
scroll_mass_healing_array: {
    id: 'scroll_mass_healing_array',
    name: 'Scroll of Mass Healing Array',
    spellName: 'Mass Healing Array',
    spellLevel: 5,
    school: 'EVOCATION',
    description: 'Up to 6 creatures in 30 ft heal 3d8 + spellcasting mod. Radiant pulse cleanses minor disease/poison.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 4 },
        { id: 'radiant_essence', quantity: 1 },
        { id: 'mana_gem', quantity: 1 }
    ],
    goldCost: 780,
    craftTime: 64,
    successChance: 60,
    levelRequirement: 9
},
scroll_teleport_beacon: {
    id: 'scroll_teleport_beacon',
    name: 'Scroll of Teleport Beacon',
    spellName: 'Teleport Beacon',
    spellLevel: 5,
    school: 'CONJURATION',
    description: 'Establish a 24-hour beacon. Teleport effects that know the beacon can arrive without error.',
    icon: '📜',
    ritual: true,
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 4 },
        { id: 'arcane_crystal', quantity: 1 },
        { id: 'mana_gem', quantity: 1 }
    ],
    goldCost: 800,
    craftTime: 64,
    successChance: 60,
    levelRequirement: 9
},

// ——— 6th Level ———
scroll_chain_storm: {
    id: 'scroll_chain_storm',
    name: 'Scroll of Chain Storm',
    spellName: 'Chain Storm',
    spellLevel: 6,
    school: 'EVOCATION',
    description: 'Forking lightning leaps to up to 4 targets within 30 ft; 8d8 lightning (DEX save half).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 2 },
        { id: 'arcane_ink', quantity: 4 },
        { id: 'lightning_essence', quantity: 2 },
        { id: 'mana_gem', quantity: 1 }
    ],
    goldCost: 1500,
    craftTime: 128,
    successChance: 58,
    levelRequirement: 11
},
scroll_flesh_to_stone: {
    id: 'scroll_flesh_to_stone',
    name: 'Scroll of Flesh to Stone',
    spellName: 'Flesh to Stone',
    spellLevel: 6,
    school: 'TRANSMUTATION',
    description: 'Con save; target becomes restrained, then petrified if it fails multiple saves over duration.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 2 },
        { id: 'arcane_ink', quantity: 4 },
        { id: 'emerald', quantity: 1 },
        { id: 'arcane_powder', quantity: 3 }
    ],
    goldCost: 1500,
    craftTime: 128,
    successChance: 56,
    levelRequirement: 11
},
scroll_soul_lock: {
    id: 'scroll_soul_lock',
    name: 'Scroll of Soul Lock',
    spellName: 'Soul Lock',
    spellLevel: 6,
    school: 'NECROMANCY',
    description: 'Capture a dying soul in a gem, binding it for later bargaining or release (see DM adjudication).',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 2 },
        { id: 'arcane_ink', quantity: 4 },
        { id: 'soul_shard', quantity: 2 },
        { id: 'arcane_powder', quantity: 3 }
    ],
    additionalCost: { diamond: 1000 },
    goldCost: 1600,
    craftTime: 128,
    successChance: 55,
    levelRequirement: 11
},

// ——— 7th Level ———
scroll_planar_seal: {
    id: 'scroll_planar_seal',
    name: 'Scroll of Planar Seal',
    spellName: 'Planar Seal',
    spellLevel: 7,
    school: 'ABJURATION',
    description: 'Seal an active portal or rift for 1 year and 1 day. Powerful beings may contest the seal.',
    icon: '📜',
    ritual: true,
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 2 },
        { id: 'arcane_ink', quantity: 5 },
        { id: 'arcane_crystal', quantity: 2 },
        { id: 'radiant_essence', quantity: 1 }
    ],
    goldCost: 3000,
    craftTime: 256,
    successChance: 52,
    levelRequirement: 13
},
scroll_temporal_stasis: {
    id: 'scroll_temporal_stasis',
    name: 'Scroll of Temporal Stasis',
    spellName: 'Temporal Stasis',
    spellLevel: 7,
    school: 'TRANSMUTATION',
    description: 'Freeze a creature in time indefinitely (until dispelled). Target is immune to damage; cannot act.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 2 },
        { id: 'arcane_ink', quantity: 5 },
        { id: 'mana_gem', quantity: 2 },
        { id: 'arcane_powder', quantity: 3 }
    ],
    goldCost: 3000,
    craftTime: 256,
    successChance: 50,
    levelRequirement: 13
},

// ——— Bonus cross-genre picks ———
scroll_quantum_blink: {
    id: 'scroll_quantum_blink',
    name: 'Scroll of Quantum Blink',
    spellName: 'Quantum Blink',
    spellLevel: 3,
    school: 'CONJURATION',
    description: 'Rapidly flicker between adjacent spaces; until your next turn, attacks against you have disadvantage and you ignore difficult terrain.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'arcane_powder', quantity: 1 }
    ],
    goldCost: 160,
    craftTime: 16,
    successChance: 74,
    levelRequirement: 5
},
scroll_holo_maze: {
    id: 'scroll_holo_maze',
    name: 'Scroll of Holo-Maze',
    spellName: 'Holo-Maze',
    spellLevel: 4,
    school: 'ILLUSION',
    description: 'Create a shifting 40-ft cube labyrinth of light; creatures inside treat terrain as heavily obscured; WIS save to navigate.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 }
    ],
    goldCost: 300,
    craftTime: 32,
    successChance: 68,
    levelRequirement: 7
},
scroll_nanite_repair_surge: {
    id: 'scroll_nanite_repair_surge',
    name: 'Scroll of Nanite Repair Surge',
    spellName: 'Nanite Repair Surge',
    spellLevel: 2,
    school: 'TRANSMUTATION',
    description: 'Construct/vehicle regains 3d8 HP and mends fractures; organic creatures regain 1d8 HP.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'spell_focus_dust', quantity: 2 }
    ],
    goldCost: 85,
    craftTime: 8,
    successChance: 82,
    levelRequirement: 3
},
scroll_digital_muffle: {
    id: 'scroll_digital_muffle',
    name: 'Scroll of Digital Muffle',
    spellName: 'Digital Muffle',
    spellLevel: 1,
    school: 'ABJURATION',
    description: 'For 1 hour, your voice and steps are filtered to ambient noise; advantage on Stealth; microphones pick silence.',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Focus Component',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 2 }
    ],
    goldCost: 25,
    craftTime: 4,
    successChance: 92,
    levelRequirement: 1
},
// ========== MARIO-INSPIRED SCROLLS ==========
scroll_super_mushroom_growth: {
    id: 'scroll_super_mushroom_growth',
    name: 'Scroll of Super Mushroom Growth',
    spellName: 'Super Mushroom Growth',
    spellLevel: 1,
    school: 'TRANSMUTATION',
    description: 'Target creature grows to double size for 1 minute, gaining +2 to STR and +1 AC. If used on a mushroom, it grows into a massive platform.',
    icon: '🍄',
    wildcard: true,
    wildcardLabel: 'Mushroom Focus',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 2 },
        { id: 'mushroom_regency_spore', quantity: 1 }
    ],
    goldCost: 50,
    craftTime: 4,
    successChance: 85,
    levelRequirement: 1
},

scroll_fire_flower_blast: {
    id: 'scroll_fire_flower_blast',
    name: 'Scroll of Fire Flower Blast',
    spellName: 'Fire Flower Blast',
    spellLevel: 2,
    school: 'EVOCATION',
    description: 'Shoot a stream of fire in a 15-foot cone. Each creature takes 3d6 fire damage (DEX save for half). Can be used to melt ice blocks.',
    icon: '🔥',
    wildcard: true,
    wildcardLabel: 'Fire Focus',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'fire_essence', quantity: 1 }
    ],
    goldCost: 80,
    craftTime: 8,
    successChance: 80,
    levelRequirement: 3
},

scroll_star_man_invincibility: {
    id: 'scroll_star_man_invincibility',
    name: 'Scroll of Star Man Invincibility',
    spellName: 'Star Man Invincibility',
    spellLevel: 3,
    school: 'ABJURATION',
    description: 'Target becomes invulnerable to all damage for 30 seconds. During this time, they glow brightly and move at double speed.',
    icon: '⭐',
    wildcard: true,
    wildcardLabel: 'Star Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'star_metal_ingot', quantity: 1 }
    ],
    goldCost: 200,
    craftTime: 16,
    successChance: 70,
    levelRequirement: 5
},

scroll_1up_resurrection: {
    id: 'scroll_1up_resurrection',
    name: 'Scroll of 1-Up Resurrection',
    spellName: '1-Up Resurrection',
    spellLevel: 4,
    school: 'NECROMANCY',
    description: 'Bring a creature back to life with 1 HP if used within 1 minute of death. The resurrected creature gains temporary hit points equal to their level.',
    icon: '🍄',
    wildcard: true,
    wildcardLabel: 'Life Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'phoenix_ash', quantity: 1 }
    ],
    goldCost: 400,
    craftTime: 32,
    successChance: 65,
    levelRequirement: 7
},

scroll_boo_haunt: {
    id: 'scroll_boo_haunt',
    name: 'Scroll of Boo Haunt',
    spellName: 'Boo Haunt',
    spellLevel: 2,
    school: 'ILLUSION',
    description: 'Summon a spectral Boo that follows you for 1 minute. The Boo can turn invisible at will and can pass through walls. It can also scare one creature (WIS save or frightened for 1 round).',
    icon: '👻',
    wildcard: true,
    wildcardLabel: 'Ghost Focus',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'shadow_essence', quantity: 1 }
    ],
    goldCost: 90,
    craftTime: 8,
    successChance: 78,
    levelRequirement: 3
},

scroll_koopa_shell_defense: {
    id: 'scroll_koopa_shell_defense',
    name: 'Scroll of Koopa Shell Defense',
    spellName: 'Koopa Shell Defense',
    spellLevel: 1,
    school: 'ABJURATION',
    description: 'Target gains +4 AC for 1 minute as they are encased in a magical Koopa shell. While in the shell, they cant move or attack but are resistant to all damage.',
    icon: '🐢',
    wildcard: true,
    wildcardLabel: 'Shell Focus',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 2 },
        { id: 'dragon_scale_dust', quantity: 1 }
    ],
    goldCost: 40,
    craftTime: 4,
    successChance: 88,
    levelRequirement: 1
},

scroll_piranha_plant_bite: {
    id: 'scroll_piranha_plant_bite',
    name: 'Scroll of Piranha Plant Bite',
    spellName: 'Piranha Plant Bite',
    spellLevel: 2,
    school: 'CONJURATION',
    description: 'Conjure a magical Piranha Plant that bites one target within 10 feet. The bite deals 2d8 piercing damage and the target must make a STR save or be grappled.',
    icon: '🌿',
    wildcard: true,
    wildcardLabel: 'Plant Focus',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'bloodmoss', quantity: 1 }
    ],
    goldCost: 85,
    craftTime: 8,
    successChance: 78,
    levelRequirement: 3
},

scroll_thwomp_crush: {
    id: 'scroll_thwomp_crush',
    name: 'Scroll of Thwomp Crush',
    spellName: 'Thwomp Crush',
    spellLevel: 3,
    school: 'EVOCATION',
    description: 'Drop a magical Thwomp on a 10-foot square. Each creature in the area takes 6d6 bludgeoning damage (DEX save for half) and is knocked prone.',
    icon: '🪨',
    wildcard: true,
    wildcardLabel: 'Stone Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'iron_ingot', quantity: 1 }
    ],
    goldCost: 180,
    craftTime: 16,
    successChance: 72,
    levelRequirement: 5
},

scroll_bowser_breath: {
    id: 'scroll_bowser_breath',
    name: 'Scroll of Bowser Breath',
    spellName: 'Bowser Breath',
    spellLevel: 4,
    school: 'EVOCATION',
    description: 'Exhale a 30-foot cone of fire that deals 8d6 fire damage (DEX save for half). The fire lingers, creating difficult terrain for 1 minute.',
    icon: '🐉',
    wildcard: true,
    wildcardLabel: 'Dragon Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'fire_essence', quantity: 2 }
    ],
    goldCost: 350,
    craftTime: 32,
    successChance: 65,
    levelRequirement: 7
},

// ========== FACTION-SPECIFIC SCROLLS ==========
scroll_iron_legion_march: {
    id: 'scroll_iron_legion_march',
    name: 'Scroll of Iron Legion March',
    spellName: 'Iron Legion March',
    spellLevel: 3,
    school: 'ENCHANTMENT',
    description: 'Target up to 6 creatures within 30 feet. They gain +10 movement speed and advantage on saves against being frightened for 1 minute.',
    icon: '⚔️',
    wildcard: true,
    wildcardLabel: 'Legion Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'steel_ingot', quantity: 1 }
    ],
    goldCost: 170,
    craftTime: 16,
    successChance: 72,
    levelRequirement: 5
},

scroll_peach_loyalist_light: {
    id: 'scroll_peach_loyalist_light',
    name: 'Scroll of Peach Loyalist Light',
    spellName: 'Peach Loyalist Light',
    spellLevel: 2,
    school: 'EVOCATION',
    description: 'Create a radiant aura in a 20-foot radius that lasts for 1 minute. Allies in the aura gain +1 to attack rolls and saves against fear.',
    icon: '👑',
    wildcard: true,
    wildcardLabel: 'Royal Focus',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'radiant_essence', quantity: 1 }
    ],
    goldCost: 90,
    craftTime: 8,
    successChance: 80,
    levelRequirement: 3
},

scroll_fawful_chaos_beam: {
    id: 'scroll_fawful_chaos_beam',
    name: 'Scroll of Fawful Chaos Beam',
    spellName: 'Fawful Chaos Beam',
    spellLevel: 4,
    school: 'EVOCATION',
    description: 'Fire a beam of chaotic energy in a 60-foot line. Each creature takes 6d6 force damage (DEX save for half) and must make a WIS save or be confused for 1 round.',
    icon: '👹',
    wildcard: true,
    wildcardLabel: 'Chaos Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'primordial_chaos_mote', quantity: 1 }
    ],
    goldCost: 380,
    craftTime: 32,
    successChance: 62,
    levelRequirement: 7
},

scroll_onyx_hand_shadow_cloak: {
    id: 'scroll_onyx_hand_shadow_cloak',
    name: 'Scroll of Onyx Hand Shadow Cloak',
    spellName: 'Onyx Hand Shadow Cloak',
    spellLevel: 3,
    school: 'ILLUSION',
    description: 'Cloak yourself in shadows for 1 minute. You gain advantage on Stealth checks and can move through shadows as if they were difficult terrain.',
    icon: '🖤',
    wildcard: true,
    wildcardLabel: 'Shadow Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'shadow_essence', quantity: 1 }
    ],
    goldCost: 180,
    craftTime: 16,
    successChance: 70,
    levelRequirement: 5
},

scroll_dk_crew_ground_pound: {
    id: 'scroll_dk_crew_ground_pound',
    name: 'Scroll of DK Crew Ground Pound',
    spellName: 'DK Crew Ground Pound',
    spellLevel: 2,
    school: 'EVOCATION',
    description: 'Jump up to 20 feet in the air and slam down, dealing 3d6 bludgeoning damage in a 10-foot radius (DEX save for half) and knocking creatures prone.',
    icon: '🦍',
    wildcard: true,
    wildcardLabel: 'Ape Focus',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'iron_ingot', quantity: 1 }
    ],
    goldCost: 85,
    craftTime: 8,
    successChance: 78,
    levelRequirement: 3
},

scroll_liberated_toads_unity: {
    id: 'scroll_liberated_toads_unity',
    name: 'Scroll of Liberated Toads Unity',
    spellName: 'Liberated Toads Unity',
    spellLevel: 3,
    school: 'ENCHANTMENT',
    description: 'Target up to 6 allies within 30 feet. They gain advantage on saving throws and ability checks for 1 minute as they work together seamlessly.',
    icon: '🍄',
    wildcard: true,
    wildcardLabel: 'Unity Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'mushroom_regency_spore', quantity: 1 }
    ],
    goldCost: 170,
    craftTime: 16,
    successChance: 72,
    levelRequirement: 5
},

scroll_crimson_fleet_cannonade: {
    id: 'scroll_crimson_fleet_cannonade',
    name: 'Scroll of Crimson Fleet Cannonade',
    spellName: 'Crimson Fleet Cannonade',
    spellLevel: 4,
    school: 'EVOCATION',
    description: 'Call down a barrage of magical cannon fire on a 20-foot radius. Each creature takes 8d6 fire damage (DEX save for half). The area becomes difficult terrain for 1 minute.',
    icon: '🏴‍☠️',
    wildcard: true,
    wildcardLabel: 'Pirate Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'fire_essence', quantity: 1 }
    ],
    goldCost: 350,
    craftTime: 32,
    successChance: 65,
    levelRequirement: 7
},

scroll_rakasha_spirit_walk: {
    id: 'scroll_rakasha_spirit_walk',
    name: 'Scroll of Rakasha Spirit Walk',
    spellName: 'Rakasha Spirit Walk',
    spellLevel: 3,
    school: 'NECROMANCY',
    description: 'Enter a trance for 1 minute. During this time, your spirit leaves your body and can move up to 100 feet away. Your body is unconscious but cant be harmed. If your spirit is destroyed, you die.',
    icon: '🐯',
    wildcard: true,
    wildcardLabel: 'Spirit Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'soul_shard', quantity: 1 }
    ],
    goldCost: 190,
    craftTime: 16,
    successChance: 70,
    levelRequirement: 5
},

scroll_wario_land_greed_grab: {
    id: 'scroll_wario_land_greed_grab',
    name: 'Scroll of Wario Land Greed Grab',
    spellName: 'Wario Land Greed Grab',
    spellLevel: 2,
    school: 'TRANSMUTATION',
    description: 'Your arms grow comically long for 1 minute. You can reach objects up to 30 feet away and can carry an additional 200 pounds. You also gain advantage on grapple checks.',
    icon: '💰',
    wildcard: true,
    wildcardLabel: 'Greed Focus',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'gold_coin', quantity: 5 }
    ],
    goldCost: 90,
    craftTime: 8,
    successChance: 78,
    levelRequirement: 3
},

// ========== UNIQUE LORE-INSPIRED SCROLLS ==========
scroll_time_war_echo: {
    id: 'scroll_time_war_echo',
    name: 'Scroll of Time War Echo',
    spellName: 'Time War Echo',
    spellLevel: 5,
    school: 'DIVINATION',
    description: 'See a 6-second echo of a past event that occurred in your current location. You can choose to view any time within the last 100 years.',
    icon: '⏳',
    wildcard: true,
    wildcardLabel: 'Time Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 4 },
        { id: 'time_weave_thread', quantity: 1 }
    ],
    goldCost: 800,
    craftTime: 64,
    successChance: 60,
    levelRequirement: 9
},

scroll_oracle_vision: {
    id: 'scroll_oracle_vision',
    name: 'Scroll of Oracle Vision',
    spellName: 'Oracle Vision',
    spellLevel: 4,
    school: 'DIVINATION',
    description: 'Gain a cryptic vision of a future event. The DM provides a vague but useful clue about an upcoming challenge or opportunity.',
    icon: '🔮',
    wildcard: true,
    wildcardLabel: 'Oracle Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'pearl', quantity: 1 }
    ],
    goldCost: 350,
    craftTime: 32,
    successChance: 65,
    levelRequirement: 7
},

scroll_raventree_haunting: {
    id: 'scroll_raventree_haunting',
    name: 'Scroll of Raventree Haunting',
    spellName: 'Raventree Haunting',
    spellLevel: 3,
    school: 'NECROMANCY',
    description: 'Summon a spectral version of a creature that died in Raventree Manor. The spirit can answer questions about the manor or its history for 1 minute.',
    icon: '👻',
    wildcard: true,
    wildcardLabel: 'Haunting Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'shadow_essence', quantity: 1 }
    ],
    goldCost: 180,
    craftTime: 16,
    successChance: 70,
    levelRequirement: 5
},

scroll_supernatural_sovereignty: {
    id: 'scroll_supernatural_sovereignty',
    name: 'Scroll of Supernatural Sovereignty',
    spellName: 'Supernatural Sovereignty',
    spellLevel: 5,
    school: 'ABJURATION',
    description: 'Create a 30-foot radius zone where supernatural creatures (vampires, werewolves, etc.) have disadvantage on attack rolls and ability checks for 1 minute.',
    icon: '🛡️',
    wildcard: true,
    wildcardLabel: 'Sovereignty Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 4 },
        { id: 'radiant_essence', quantity: 1 }
    ],
    goldCost: 800,
    craftTime: 64,
    successChance: 60,
    levelRequirement: 9
},

scroll_iron_mandate: {
    id: 'scroll_iron_mandate',
    name: 'Scroll of Iron Mandate',
    spellName: 'Iron Mandate',
    spellLevel: 4,
    school: 'ENCHANTMENT',
    description: 'Target creature must make a WIS save or be compelled to follow a single command for 1 minute. The command must be something they could normally do (e.g., "drop your weapon" or "flee").',
    icon: '📜',
    wildcard: true,
    wildcardLabel: 'Authority Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'steel_ingot', quantity: 1 }
    ],
    goldCost: 380,
    craftTime: 32,
    successChance: 62,
    levelRequirement: 7
},

scroll_tea_leaf_illusion: {
    id: 'scroll_tea_leaf_illusion',
    name: 'Scroll of Tea Leaf Illusion',
    spellName: 'Tea Leaf Illusion',
    spellLevel: 2,
    school: 'ILLUSION',
    description: 'Create an illusory duplicate of yourself that lasts for 1 minute. The duplicate mimics your actions and can speak, but cant attack or cast spells.',
    icon: '🍵',
    wildcard: true,
    wildcardLabel: 'Tea Focus',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'tea_leaves', quantity: 1 }
    ],
    goldCost: 85,
    craftTime: 8,
    successChance: 78,
    levelRequirement: 3
},

scroll_dragon_conspiracy: {
    id: 'scroll_dragon_conspiracy',
    name: 'Scroll of Dragon Conspiracy',
    spellName: 'Dragon Conspiracy',
    spellLevel: 3,
    school: 'DIVINATION',
    description: 'Detect the presence of sonic control devices within 100 feet. If found, you can attempt to disable one device as an action (INT check).',
    icon: '🐉',
    wildcard: true,
    wildcardLabel: 'Conspiracy Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'dragon_scale_dust', quantity: 1 }
    ],
    goldCost: 170,
    craftTime: 16,
    successChance: 72,
    levelRequirement: 5
},

scroll_glass_monster_summon: {
    id: 'scroll_glass_monster_summon',
    name: 'Scroll of Glass Monster Summon',
    spellName: 'Glass Monster Summon',
    spellLevel: 4,
    school: 'CONJURATION',
    description: 'Summon a Glass Monster that lasts for 1 minute. The monster has AC 15, 50 HP, and can make two slam attacks (2d6+3 bludgeoning). It obeys your commands and can move through glass as if it were difficult terrain.',
    icon: '🪞',
    wildcard: true,
    wildcardLabel: 'Glass Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'glass_shard', quantity: 3 }
    ],
    goldCost: 350,
    craftTime: 32,
    successChance: 65,
    levelRequirement: 7
},

scroll_archies_third_eye: {
    id: 'scroll_archies_third_eye',
    name: "Scroll of Archie's Third Eye",
    spellName: "Archie's Third Eye",
    spellLevel: 5,
    school: 'DIVINATION',
    description: 'Gain the ability to see through illusions and detect hidden creatures or objects within 60 feet for 1 minute. You also gain advantage on saves against being charmed or frightened.',
    icon: '👁️',
    wildcard: true,
    wildcardLabel: 'Eye Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 4 },
        { id: 'emerald', quantity: 1 }
    ],
    goldCost: 800,
    craftTime: 64,
    successChance: 60,
    levelRequirement: 9
},

scroll_waluigi_time: {
    id: 'scroll_waluigi_time',
    name: "Scroll of Waluigi Time",
    spellName: "Waluigi Time",
    spellLevel: 4,
    school: 'TRANSMUTATION',
    description: 'For 1 minute, time flows strangely around you. At the start of each of your turns, roll a d6. On a 1-2, time rewinds 6 seconds. On a 5-6, time fast-forwards 6 seconds. On a 3-4, nothing happens.',
    icon: '⏳',
    wildcard: true,
    wildcardLabel: 'Waluigi Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'time_weave_thread', quantity: 1 }
    ],
    goldCost: 400,
    craftTime: 32,
    successChance: 62,
    levelRequirement: 7
},

scroll_kamek_magic: {
    id: 'scroll_kamek_magic',
    name: "Scroll of Kamek's Magic",
    spellName: "Kamek's Magic",
    spellLevel: 5,
    school: 'TRANSMUTATION',
    description: 'Transform a creature or object into a random, harmless form for 1 minute. The target must make a WIS save or be transformed into something like a frog, a chair, or a pile of coins.',
    icon: '🧙',
    wildcard: true,
    wildcardLabel: 'Kamek Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 4 },
        { id: 'mandrake_root', quantity: 1 }
    ],
    goldCost: 800,
    craftTime: 64,
    successChance: 60,
    levelRequirement: 9
},

scroll_humpik_mushroom_madness: {
    id: 'scroll_humpik_mushroom_madness',
    name: "Scroll of Humpik's Mushroom Madness",
    spellName: "Humpik's Mushroom Madness",
    spellLevel: 3,
    school: 'ILLUSION',
    description: 'Target creature must make a WIS save or be affected by hallucinogenic spores for 1 minute. They see random illusions and have disadvantage on attack rolls and ability checks.',
    icon: '🍄',
    wildcard: true,
    wildcardLabel: 'Mushroom Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'mushroom_regency_spore', quantity: 1 }
    ],
    goldCost: 170,
    craftTime: 16,
    successChance: 72,
    levelRequirement: 5
},

scroll_big_t_rage: {
    id: 'scroll_big_t_rage',
    name: "Scroll of Big T's Rage",
    spellName: "Big T's Rage",
    spellLevel: 2,
    school: 'TRANSMUTATION',
    description: 'Target creature enters a rage for 1 minute. They gain +2 to melee damage rolls and resistance to bludgeoning, piercing, and slashing damage. However, they have disadvantage on INT, WIS, and CHA checks and can only make melee attacks.',
    icon: '😡',
    wildcard: true,
    wildcardLabel: 'Rage Focus',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'troll_blood', quantity: 1 }
    ],
    goldCost: 90,
    craftTime: 8,
    successChance: 78,
    levelRequirement: 3
},

scroll_dan_the_toad_healing: {
    id: 'scroll_dan_the_toad_healing',
    name: "Scroll of Dan the Toad's Healing",
    spellName: "Dan the Toad's Healing",
    spellLevel: 2,
    school: 'EVOCATION',
    description: 'Touch a creature to heal 2d8 + spellcasting modifier HP. If the target is a toad or amphibian, they heal an additional 1d8 HP.',
    icon: '🐸',
    wildcard: true,
    wildcardLabel: 'Toad Focus',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'healing_herbs', quantity: 1 }
    ],
    goldCost: 80,
    craftTime: 8,
    successChance: 80,
    levelRequirement: 3
},

scroll_eager_pepper_spray: {
    id: 'scroll_eager_pepper_spray',
    name: "Scroll of Eager's Pepper Spray",
    spellName: "Eager's Pepper Spray",
    spellLevel: 1,
    school: 'CONJURATION',
    description: 'Spray a 15-foot cone of irritating mist. Each creature in the area must make a CON save or be blinded and take 1d6 poison damage for 1 round.',
    icon: '🌶️',
    wildcard: true,
    wildcardLabel: 'Spray Focus',
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 2 },
        { id: 'pepper', quantity: 1 }
    ],
    goldCost: 30,
    craftTime: 4,
    successChance: 88,
    levelRequirement: 1
},

scroll_remi_repair: {
    id: 'scroll_remi_repair',
    name: "Scroll of Remi's Repair",
    spellName: "Remi's Repair",
    spellLevel: 2,
    school: 'TRANSMUTATION',
    description: 'Repair a broken object or construct, restoring 2d8 + spellcasting modifier HP. If used on a mechanical device, it also regains one use of its primary function.',
    icon: '🔧',
    wildcard: true,
    wildcardLabel: 'Repair Focus',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'iron_ingot', quantity: 1 }
    ],
    goldCost: 85,
    craftTime: 8,
    successChance: 78,
    levelRequirement: 3
},

scroll_markop_shadow_clone: {
    id: 'scroll_markop_shadow_clone',
    name: "Scroll of Markop's Shadow Clone",
    spellName: "Markop's Shadow Clone",
    spellLevel: 3,
    school: 'ILLUSION',
    description: 'Create 1d4 illusory duplicates of yourself that last for 1 minute. The duplicates mimic your actions and can take one hit before disappearing.',
    icon: '👥',
    wildcard: true,
    wildcardLabel: 'Shadow Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'shadow_essence', quantity: 1 }
    ],
    goldCost: 170,
    craftTime: 16,
    successChance: 72,
    levelRequirement: 5
},

scroll_ryan_stealth: {
    id: 'scroll_ryan_stealth',
    name: "Scroll of Ryan's Stealth",
    spellName: "Ryan's Stealth",
    spellLevel: 2,
    school: 'ILLUSION',
    description: 'Become invisible for 1 minute or until you attack or cast a spell. While invisible, you have advantage on Stealth checks and can move silently.',
    icon: '👤',
    wildcard: true,
    wildcardLabel: 'Stealth Focus',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'shadow_essence', quantity: 1 }
    ],
    goldCost: 90,
    craftTime: 8,
    successChance: 78,
    levelRequirement: 3
},

scroll_bones_undead_command: {
    id: 'scroll_bones_undead_command',
    name: "Scroll of Bones' Undead Command",
    spellName: "Bones' Undead Command",
    spellLevel: 3,
    school: 'NECROMANCY',
    description: 'Command up to 3 undead creatures within 60 feet for 1 minute. The undead must make a WIS save or obey your commands to the best of their ability.',
    icon: '💀',
    wildcard: true,
    wildcardLabel: 'Undead Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'soul_shard', quantity: 1 }
    ],
    goldCost: 180,
    craftTime: 16,
    successChance: 70,
    levelRequirement: 5
},

scroll_green_t_venom: {
    id: 'scroll_green_t_venom',
    name: "Scroll of Green T's Venom",
    spellName: "Green T's Venom",
    spellLevel: 2,
    school: 'NECROMANCY',
    description: 'Coat a weapon with magical venom. The next hit deals an additional 2d6 poison damage and the target must make a CON save or be poisoned for 1 minute.',
    icon: '☠️',
    wildcard: true,
    wildcardLabel: 'Venom Focus',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'nightshade', quantity: 1 }
    ],
    goldCost: 85,
    craftTime: 8,
    successChance: 78,
    levelRequirement: 3
},

scroll_embercap_flame_dance: {
    id: 'scroll_embercap_flame_dance',
    name: "Scroll of Embercap's Flame Dance",
    spellName: "Embercap's Flame Dance",
    spellLevel: 3,
    school: 'EVOCATION',
    description: 'Surround yourself with magical flames for 1 minute. You shed bright light in a 20-foot radius and dim light for an additional 20 feet. Any creature that hits you with a melee attack takes 1d6 fire damage.',
    icon: '🔥',
    wildcard: true,
    wildcardLabel: 'Flame Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'fire_essence', quantity: 1 }
    ],
    goldCost: 170,
    craftTime: 16,
    successChance: 72,
    levelRequirement: 5
},

scroll_mistveil_illusion: {
    id: 'scroll_mistveil_illusion',
    name: "Scroll of Mistveil's Illusion",
    spellName: "Mistveil's Illusion",
    spellLevel: 4,
    school: 'ILLUSION',
    description: 'Create an illusory duplicate of any creature or object you can see within 60 feet. The illusion lasts for 1 minute and can move and act as if it were real (though it cant attack or cast spells).',
    icon: '👻',
    wildcard: true,
    wildcardLabel: 'Illusion Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'shadow_essence', quantity: 1 }
    ],
    goldCost: 350,
    craftTime: 32,
    successChance: 65,
    levelRequirement: 7
},

scroll_thornpaw_spirit_walk: {
    id: 'scroll_thornpaw_spirit_walk',
    name: "Scroll of Thornpaw's Spirit Walk",
    spellName: "Thornpaw's Spirit Walk",
    spellLevel: 3,
    school: 'NECROMANCY',
    description: 'Your spirit leaves your body for 1 minute. Your body is unconscious but cant be harmed. Your spirit can move up to 100 feet away and is invisible to most creatures.',
    icon: '🐺',
    wildcard: true,
    wildcardLabel: 'Spirit Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'soul_shard', quantity: 1 }
    ],
    goldCost: 180,
    craftTime: 16,
    successChance: 70,
    levelRequirement: 5
},
// ============================================
// === ULTRA-RARE / SUPER HARD TO CRAFT SCROLLS (Levels 0–5) ===
// ============================================

scroll_peach_whisper: {
    id: 'scroll_peach_whisper',
    name: "Scroll of Peach’s Whisper",
    spellName: "Peach’s Whisper",
    spellLevel: 0,
    school: 'ENCHANTMENT',
    description: "Whisper a single word that compels obedience in one creature for 6 seconds. Only works on those who once loved Princess Peach.",
    icon: '👑',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Royal Blood",
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'tear_of_peach', quantity: 1 }, // Mythic material (see below)
        { id: 'heartstring_of_thornpaw', quantity: 1 } // Must be harvested from living Rakasha
    ],
    goldCost: 5000,
    craftTime: 48, // hours
    successChance: 30, // Brutal
    levelRequirement: 10,
    loreLocked: true, // Requires Peach Loyalist Rank 3+ or Rakasha approval
    risk: "On failure: crafter becomes permanently charmed by the next person who speaks their name."
},

scroll_bowser_rage_echo: {
    id: 'scroll_bowser_rage_echo',
    name: "Scroll of Bowser’s Rage Echo",
    spellName: "Bowser’s Rage Echo",
    spellLevel: 1,
    school: 'EVOCATION',
    description: "Unleash a cone of fire infused with Bowser’s fury. Deals 3d6 fire + 1d6 psychic to creatures who’ve betrayed you. Lasting fear effect on failure.",
    icon: '🔥',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Tyrant’s Ash",
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'bowser_scale_fragment', quantity: 1 }, // Harvested during rage state
        { id: 'ash_of_betrayal', quantity: 3 } // Burnt contract signed in bad faith
    ],
    goldCost: 8000,
    craftTime: 72,
    successChance: 25,
    levelRequirement: 8,
    risk: "On failure: user is consumed by uncontrollable rage for 1 hour (attacks nearest ally)."
},

scroll_fawful_mind_screw: {
    id: 'scroll_fawful_mind_screw',
    name: "Scroll of Fawful’s Mind Screw",
    spellName: "Fawful’s Mind Screw",
    spellLevel: 2,
    school: 'ENCHANTMENT',
    description: "Target must make WIS save or believe their greatest fear is real for 1 minute. Save with disadvantage if they’ve ever worn purple.",
    icon: '🌀',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Screaming Brain Matter",
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'fawful_brain_tissue', quantity: 1 }, // Harvested post-mortem; decays in 1 hour
        { id: 'laughing_gas_essence', quantity: 1 }
    ],
    goldCost: 12000,
    craftTime: 96,
    successChance: 20,
    levelRequirement: 10,
    risk: "On failure: crafter gains permanent insanity (random phobia or delusion)."
},

scroll_wario_greed_pulse: {
    id: 'scroll_wario_greed_pulse',
    name: "Scroll of Wario’s Greed Pulse",
    spellName: "Wario’s Greed Pulse",
    spellLevel: 1,
    school: 'TRANSMUTATION',
    description: "Pulse emits from user — all coins within 30ft fly toward you. Creatures carrying coins take 1d4 force damage per coin (max 10).",
    icon: '💰',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Stolen Gold",
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'wario_stained_coin', quantity: 1 }, // Must be stolen from Wario himself
        { id: 'greed_essence', quantity: 1 } // Distilled from a miser’s final breath
    ],
    goldCost: 6000,
    craftTime: 60,
    successChance: 35,
    levelRequirement: 7,
    risk: "On failure: user becomes obsessed with hoarding — disadvantage on all non-gold-related rolls for 1 week."
},

scroll_kamek_temporal_glitch: {
    id: 'scroll_kamek_temporal_glitch',
    name: "Scroll of Kamek’s Temporal Glitch",
    spellName: "Kamek’s Temporal Glitch",
    spellLevel: 3,
    school: 'TRANSMUTATION',
    description: "Target creature repeats their last action. If it was an attack, they attack again. If movement, they move again. Duration: 1 round.",
    icon: '⏳',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Broken Hourglass Sand",
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'kamek_staff_shard', quantity: 1 }, // Shattered during temporal event
        { id: 'grandfather_paradox_echo', quantity: 1 }
    ],
    goldCost: 25000,
    craftTime: 168, // 7 days
    successChance: 15,
    levelRequirement: 12,
    risk: "On failure: crafter skips forward in time 1d4 hours, losing all actions during that period."
},

scroll_archies_third_eye_reveal: {
    id: 'scroll_archies_third_eye_reveal',
    name: "Scroll of Archie’s Third Eye Reveal",
    spellName: "Third Eye Reveal",
    spellLevel: 4,
    school: 'DIVINATION',
    description: "See through all lies, illusions, and disguises for 1 minute. Reveals hidden doors, traitors, and magical deceptions in 60ft radius.",
    icon: '👁️',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Eye of Truth",
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'archie_third_eye_fluid', quantity: 1 }, // Extracted while conscious — extremely dangerous
        { id: 'truth_serum_of_oracula', quantity: 1 }
    ],
    goldCost: 40000,
    craftTime: 240, // 10 days
    successChance: 10,
    levelRequirement: 14,
    risk: "On failure: user permanently loses an eye (no magic can restore it)."
},

scroll_humpik_spore_nova: {
    id: 'scroll_humpik_spore_nova',
    name: "Scroll of Humpik’s Spore Nova",
    spellName: "Spore Nova",
    spellLevel: 2,
    school: 'CONJURATION',
    description: "Explode in a 20ft radius cloud of hallucinogenic spores. Creatures must make CON save or suffer vivid, combat-incapacitating visions for 1 min.",
    icon: '🍄',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Mutated Mushroom Core",
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'humpik_mutated_spore_core', quantity: 1 }, // Harvested from his back — he hates this
        { id: 'madness_dust', quantity: 2 }
    ],
    goldCost: 15000,
    craftTime: 80,
    successChance: 25,
    levelRequirement: 9,
    risk: "On failure: user suffers permanent madness (DM chooses delusion)."
},

scroll_eagers_pepper_purge: {
    id: 'scroll_eagers_pepper_purge',
    name: "Scroll of Eager’s Pepper Purge",
    spellName: "Pepper Purge",
    spellLevel: 1,
    school: 'EVOCATION',
    description: "Blast a 30ft cone of ghost pepper mist. Creatures take 2d6 fire + 2d6 poison, blinded for 1 round on failed CON save. Undead/fiends have disadvantage.",
    icon: '🌶️',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Eager’s Sweat",
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'eager_blood_sweat', quantity: 1 }, // Collected during panic attack
        { id: 'ghost_pepper_extract', quantity: 3 }
    ],
    goldCost: 7000,
    craftTime: 48,
    successChance: 30,
    levelRequirement: 6,
    risk: "On failure: user is blinded for 1d4 hours and permanently sensitive to spicy food."
},

scroll_dans_last_heal: {
    id: 'scroll_dans_last_heal',
    name: "Scroll of Dan’s Last Heal",
    spellName: "Last Heal",
    spellLevel: 3,
    school: 'EVOCATION',
    description: "Heal target for 4d8 + spellcasting mod HP. If target is at 0 HP, they return with max HP. Usable only when crafter is near death (≤ 5 HP).",
    icon: '❤️',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Blood of Sacrifice",
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'dan_blood_vial', quantity: 1 }, // Must be drawn while he’s unconscious
        { id: 'phoenix_tear_crystal', quantity: 1 }
    ],
    goldCost: 30000,
    craftTime: 120,
    successChance: 20,
    levelRequirement: 11,
    risk: "On failure: user dies instantly. No resurrection possible for 24 hours."
},

scroll_remi_deephold_forge_call: {
    id: 'scroll_remi_deephold_forge_call',
    name: "Scroll of Remi’s Deephold Forge Call",
    spellName: "Forge Call",
    spellLevel: 2,
    school: 'TRANSMUTATION',
    description: "Summon spectral smithing tools. For 10 minutes, you can repair or enchant any item as if you had proficiency +10. Cannot create new items.",
    icon: '⚒️',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Anvil Shard",
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'remi_signature', quantity: 1 }, // Must be signed in her own blood
        { id: 'deephold_anvil_shard', quantity: 1 } // Stolen from guild forge
    ],
    goldCost: 18000,
    craftTime: 96,
    successChance: 25,
    levelRequirement: 8,
    risk: "On failure: user’s hands become permanently scarred — disadvantage on all DEX checks involving fine manipulation."
},

scroll_markops_shadow_clone_army: {
    id: 'scroll_markops_shadow_clone_army',
    name: "Scroll of Markop’s Shadow Clone Army",
    spellName: "Shadow Clone Army",
    spellLevel: 4,
    school: 'ILLUSION',
    description: "Create 1d4 illusory duplicates that each act independently on your turn. Each has 1 HP and vanishes when hit. Lasts 1 minute.",
    icon: '👥',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Mirror Shard of Raventree",
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'markop_mirror_fragment', quantity: 1 }, // Taken from Raventree Manor mirror dimension
        { id: 'shadow_essence', quantity: 3 }
    ],
    goldCost: 35000,
    craftTime: 192, // 8 days
    successChance: 15,
    levelRequirement: 13,
    risk: "On failure: user is pulled into mirror dimension for 1d4 days."
},

scroll_green_ts_venomous_wrath: {
    id: 'scroll_green_ts_venomous_wrath',
    name: "Scroll of Green T’s Venomous Wrath",
    spellName: "Venomous Wrath",
    spellLevel: 3,
    school: 'NECROMANCY',
    description: "Your next melee attack injects paralytic venom. Target must make CON save or be paralyzed for 1 min. On crit, also takes 3d6 poison.",
    icon: '☠️',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Green T’s Fang",
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'green_t_fang', quantity: 1 }, // Extracted while he’s in giant form
        { id: 'basilisk_venom', quantity: 1 }
    ],
    goldCost: 22000,
    craftTime: 120,
    successChance: 20,
    levelRequirement: 10,
    risk: "On failure: user is poisoned for 1d4 days (disadvantage on attacks and saves)."
},

scroll_ignis_dragons_truth: {
    id: 'scroll_ignis_dragons_truth',
    name: "Scroll of Ignis’ Dragon’s Truth",
    spellName: "Dragon’s Truth",
    spellLevel: 5,
    school: 'DIVINATION',
    description: "Ask one question — dragon spirit answers with perfect, brutal truth. Cannot lie. May refuse to answer if question threatens dragonkind.",
    icon: '🐉',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Dragon Heart Ash",
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'ignis_heart_ash', quantity: 1 }, // From the slain dragon — morally heavy
        { id: 'true_name_fragment', quantity: 1 } // Of any dragon
    ],
    goldCost: 50000,
    craftTime: 336, // 14 days
    successChance: 10,
    levelRequirement: 15,
    risk: "On failure: dragon curse — user takes -5 to all rolls vs dragons permanently."
},

scroll_onyx_hand_soul_bind: {
    id: 'scroll_onyx_hand_soul_bind',
    name: "Scroll of Onyx Hand Soul Bind",
    spellName: "Soul Bind",
    spellLevel: 4,
    school: 'NECROMANCY',
    description: "Trap the soul of a dying creature in a gem. Soul can be interrogated, used as power source, or resurrected later. Works only on willing or helpless targets.",
    icon: '🖤',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Condemned Soul Gem",
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'condemned_soul_gem', quantity: 1 },
        { id: 'onyx_hand_seal', quantity: 1 } // Must be stolen or earned through dark service
    ],
    goldCost: 45000,
    craftTime: 240,
    successChance: 15,
    levelRequirement: 14,
    risk: "On failure: user’s soul is partially trapped — permanent -2 to CHA and cannot be resurrected."
},

scroll_iron_legion_mind_lock: {
    id: 'scroll_iron_legion_mind_lock',
    name: "Scroll of Iron Legion Mind Lock",
    spellName: "Mind Lock",
    spellLevel: 3,
    school: 'ABJURATION',
    description: "Target creature cannot be charmed, frightened, or magically influenced for 1 hour. Also immune to telepathy and scrying.",
    icon: '⚙️',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Legion Neural Implant",
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'legion_neural_chip', quantity: 1 }, // Salvaged from dead cyber-soldier
        { id: 'pure_order_crystal', quantity: 1 }
    ],
    goldCost: 28000,
    craftTime: 168,
    successChance: 20,
    levelRequirement: 12,
    risk: "On failure: user’s mind is locked — cannot cast spells or use magic items for 1 week."
},

scroll_raventree_mirror_step: {
    id: 'scroll_raventree_mirror_step',
    name: "Scroll of Raventree Mirror Step",
    spellName: "Mirror Step",
    spellLevel: 2,
    school: 'CONJURATION',
    description: "Step into any mirror within 30ft and emerge from another within 500ft. Mirrors must be at least 3ft tall. Does not work across planes.",
    icon: '🪞',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Oracle’s Glass Dust",
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'oracle_glass_dust', quantity: 1 }, // Collected during mansion events
        { id: 'silverleaf', quantity: 3 }
    ],
    goldCost: 20000,
    craftTime: 120,
    successChance: 25,
    levelRequirement: 9,
    risk: "On failure: user is trapped between mirrors until freed by Remove Curse or similar magic."
},

scroll_time_war_fracture: {
    id: 'scroll_time_war_fracture',
    name: "Scroll of Time War Fracture",
    spellName: "Time War Fracture",
    spellLevel: 5,
    school: 'TRANSMUTATION',
    description: "Rip a 10ft tear in time. All creatures inside repeat their last turn. Items may duplicate or vanish. Lasts 6 seconds. Unpredictable side effects.",
    icon: '🌀',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Chrono Shrapnel",
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'chrono_shrapnel', quantity: 1 }, // Salvaged from time-war battlefield
        { id: 'grandfather_paradox_echo', quantity: 1 }
    ],
    goldCost: 60000,
    craftTime: 480, // 20 days
    successChance: 5, // Extremely dangerous
    levelRequirement: 16,
    risk: "On failure: user is erased from timeline. Only powerful wish or divine intervention can restore them."
},

scroll_supernatural_sovereignty_null: {
    id: 'scroll_supernatural_sovereignty_null',
    name: "Scroll of Supernatural Sovereignty Null",
    spellName: "Sovereignty Null",
    spellLevel: 4,
    school: 'ABJURATION',
    description: "For 1 minute, negate all effects of the Supernatural Sovereignty Act in a 100ft radius. Vampires, werewolves, etc. regain full power.",
    icon: '⚖️',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Rebel Blood",
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'rebel_leader_blood', quantity: 1 }, // Must be from active resistance leader
        { id: 'void_crystal', quantity: 1 }
    ],
    goldCost: 40000,
    craftTime: 200,
    successChance: 15,
    levelRequirement: 13,
    risk: "On failure: user is branded a supernatural sympathizer — hunted by Regal Empire and Iron Legion."
},

scroll_waluigi_chaos_luck: {
    id: 'scroll_waluigi_chaos_luck',
    name: "Scroll of Waluigi’s Chaos Luck",
    spellName: "Chaos Luck",
    spellLevel: 1,
    school: 'TRANSMUTATION',
    description: "For 1 minute, all d20 rolls made by you or within 10ft of you are rolled twice. You choose whether to take highest or lowest after seeing both.",
    icon: '🎲',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: Waluigi’s Laugh",
    materials: [
        { id: 'blank_parchment', quantity: 1 },
        { id: 'waluigi_laugh_echo', quantity: 1 }, // Captured in bottle during maniacal fit
        { id: 'primordial_chaos_mote', quantity: 1 }
    ],
    goldCost: 10000,
    craftTime: 72,
    successChance: 30,
    levelRequirement: 7,
    risk: "On failure: user is cursed with bad luck — disadvantage on all rolls for 24 hours."
},

scroll_xo_digital_overwrite: {
    id: 'scroll_xo_digital_overwrite',
    name: "Scroll of X.O.’s Digital Overwrite",
    spellName: "Digital Overwrite",
    spellLevel: 3,
    school: 'ENCHANTMENT',
    description: "Overwrite the personality of one construct or AI. New personality obeys you. Lasts 1 day. Only works on machines with emotional capacity.",
    icon: '🤖',
    wildcard: true,
    wildcardLabel: "Forbidden Focus: X.O.’s Memory Core",
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'xo_memory_fragment', quantity: 1 }, // Salvaged post-betrayal
        { id: 'soul_of_a_saint', quantity: 1 } // To “purify” the overwrite — ironic
    ],
    goldCost: 32000,
    craftTime: 180,
    successChance: 20,
    levelRequirement: 11,
    risk: "On failure: user’s memories are partially overwritten — lose 1 skill proficiency permanently."
},
scroll_eldritch_whisper: {
    id: 'scroll_eldritch_whisper',
    name: 'Scroll of Eldritch Whisper',
    spellName: 'Eldritch Whisper',
    spellLevel: 0,
    school: 'ENCHANTMENT',
    description: 'Whisper a single word that only your target hears, no matter the distance. The word lingers in their mind for 1 hour, granting advantage on the next check related to that word (e.g., "bravery" for a fear save).',
    icon: '👂',
    wildcard: true,
    wildcardLabel: 'Eldritch Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'void_ink', quantity: 1 },
        { id: 'abyssal_sludge', quantity: 1 },
        { id: 'soul_shard', quantity: 1 }
    ],
    goldCost: 500,
    craftTime: 24,
    successChance: 50,
    levelRequirement: 5
},

scroll_quantum_spark: {
    id: 'scroll_quantum_spark',
    name: 'Scroll of Quantum Spark',
    spellName: 'Quantum Spark',
    spellLevel: 0,
    school: 'EVOCATION',
    description: 'Create a tiny spark that exists in two places at once. When you cast this spell, roll a d20. On an even number, the spark deals 1d4 fire damage. On an odd number, it heals 1d4 HP instead.',
    icon: '⚡',
    wildcard: true,
    wildcardLabel: 'Quantum Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 1 },
        { id: 'quantum_entanglement_string', quantity: 1 }
    ],
    goldCost: 400,
    craftTime: 24,
    successChance: 45,
    levelRequirement: 5
},

scroll_echo_of_nothing: {
    id: 'scroll_echo_of_nothing',
    name: 'Scroll of Echo of Nothing',
    spellName: 'Echo of Nothing',
    spellLevel: 0,
    school: 'ILLUSION',
    description: 'Create a perfect silence in a 5-foot radius for 1 minute. All sound within this area is absorbed, including magical effects like Thunderwave or Shatter.',
    icon: '🔇',
    wildcard: true,
    wildcardLabel: 'Void Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'void_ink', quantity: 1 },
        { id: 'impossible_sound_wave', quantity: 1 }
    ],
    goldCost: 600,
    craftTime: 24,
    successChance: 40,
    levelRequirement: 5
},

scroll_phoenix_touch: {
    id: 'scroll_phoenix_touch',
    name: 'Scroll of Phoenix Touch',
    spellName: 'Phoenix Touch',
    spellLevel: 0,
    school: 'EVOCATION',
    description: 'Touch a creature to heal 1 HP. If the target is at 0 HP, they stabilize and gain 1 temporary HP. Once used, the scroll crumbles to ash.',
    icon: '🔥',
    wildcard: true,
    wildcardLabel: 'Phoenix Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 1 },
        { id: 'phoenix_ash', quantity: 1 }
    ],
    goldCost: 300,
    craftTime: 24,
    successChance: 55,
    levelRequirement: 5
},

scroll_true_name_glimpse: {
    id: 'scroll_true_name_glimpse',
    name: 'Scroll of True Name Glimpse',
    spellName: 'True Name Glimpse',
    spellLevel: 0,
    school: 'DIVINATION',
    description: 'For 1 round, you see the true name of one creature you can see. This name fades from your memory after 1 minute unless you succeed on an INT save (DC 15).',
    icon: '👁️',
    wildcard: true,
    wildcardLabel: 'Name Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 1 },
        { id: 'true_name_fragment', quantity: 1 }
    ],
    goldCost: 700,
    craftTime: 24,
    successChance: 35,
    levelRequirement: 5
},
scroll_lario_illusionary_double: {
    id: 'scroll_lario_illusionary_double',
    name: "Scroll of Lario's Illusionary Double",
    spellName: "Lario's Illusionary Double",
    spellLevel: 2,
    school: 'ILLUSION',
    description: 'Create an illusory double of yourself that lasts for 1 minute. The double mimics your actions and can take one hit before disappearing.',
    icon: '👥',
    wildcard: true,
    wildcardLabel: 'Illusion Focus',
    materials: [
        { id: 'fine_parchment', quantity: 1 },
        { id: 'enchanted_ink', quantity: 3 },
        { id: 'shadow_essence', quantity: 1 }
    ],
    goldCost: 90,
    craftTime: 8,
    successChance: 78,
    levelRequirement: 3
},

scroll_creek_surgical_precision: {
    id: 'scroll_creek_surgical_precision',
    name: "Scroll of Creek's Surgical Precision",
    spellName: "Creek's Surgical Precision",
    spellLevel: 4,
    school: 'TRANSMUTATION',
    description: 'Your next attack with a finesse weapon within the next minute scores a critical hit on a roll of 19-20. If the attack hits, you can choose to deal maximum damage.',
    icon: '🔪',
    wildcard: true,
    wildcardLabel: 'Precision Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 3 },
        { id: 'steel_ingot', quantity: 1 }
    ],
    goldCost: 350,
    craftTime: 32,
    successChance: 65,
    levelRequirement: 7
},

scroll_galypso_assassin_mark: {
    id: 'scroll_galypso_assassin_mark',
    name: "Scroll of Galypso's Assassin Mark",
    spellName: "Galypso's Assassin Mark",
    spellLevel: 3,
    school: 'DIVINATION',
    description: 'Mark a creature within 60 feet. For 1 minute, you know the targets exact location and have advantage on attack rolls against them.',
    icon: '🎯',
    wildcard: true,
    wildcardLabel: 'Assassin Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'bloodmoss', quantity: 1 }
    ],
    goldCost: 170,
    craftTime: 16,
    successChance: 72,
    levelRequirement: 5
},

scroll_robinson_dragon_speak: {
    id: 'scroll_robinson_dragon_speak',
    name: "Scroll of Robinson's Dragon Speak",
    spellName: "Robinson's Dragon Speak",
    spellLevel: 3,
    school: 'DIVINATION',
    description: 'You can understand and speak Draconic for 1 hour. Additionally, you can communicate simple concepts with dragons and dragon-like creatures.',
    icon: '🐉',
    wildcard: true,
    wildcardLabel: 'Dragon Focus',
    materials: [
        { id: 'fine_parchment', quantity: 2 },
        { id: 'arcane_ink', quantity: 2 },
        { id: 'dragon_scale_dust', quantity: 1 }
    ],
    goldCost: 170,
    craftTime: 16,
    successChance: 72,
    levelRequirement: 5
},

scroll_ironhand_execution_order: {
    id: 'scroll_ironhand_execution_order',
    name: "Scroll of Ironhand's Execution Order",
    spellName: "Ironhand's Execution Order",
    spellLevel: 5,
    school: 'ENCHANTMENT',
    description: 'Target creature must make a WIS save or be compelled to carry out a single violent command (e.g., "kill that prisoner" or "destroy that building") for 1 minute. The target has disadvantage on the save if they are part of a military hierarchy.',
    icon: '⚔️',
    wildcard: true,
    wildcardLabel: 'Order Focus',
    materials: [
        { id: 'enchanted_vellum', quantity: 1 },
        { id: 'arcane_ink', quantity: 4 },
        { id: 'steel_ingot', quantity: 2 }
    ],
    goldCost: 800,
    craftTime: 64,
    successChance: 60,
    levelRequirement: 9
},
    
};

// ============================================
// === POTION RECIPES ===
// ============================================

export const POTION_RECIPES = {
    potion_healing: {
        id: 'potion_healing',
        name: 'Potion of Healing',
        effect: 'Restore 2d4+2 HP',
        potionType: 'healing',
        rarity: 'common',
        icon: '🧪',

        wildcard: true, 

        materials: [
            { id: 'empty_vial', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'healing_herbs', quantity: 2 }
        ],
        goldCost: 25,
        craftTime: 2,
        successChance: 95,
        levelRequirement: 1
    },
    potion_greater_healing: {
        id: 'potion_greater_healing',
        name: 'Potion of Greater Healing',
        effect: 'Restore 4d4+4 HP',
        potionType: 'healing',
        rarity: 'uncommon',
        
        wildcard: true, 

        icon: '🧪',
        materials: [
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 },
            { id: 'healing_herbs', quantity: 4 },
            { id: 'silverleaf', quantity: 1 }
        ],
        goldCost: 100,
        craftTime: 4,
        successChance: 85,
        levelRequirement: 3
    },
    potion_fire_resistance: {
        id: 'potion_fire_resistance',
        name: 'Potion of Fire Resistance',
        effect: 'Resistance to fire damage for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🧪',
        materials: [
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'fire_essence', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        
        wildcard: true, 

        goldCost: 150,
        craftTime: 4,
        successChance: 80,
        levelRequirement: 4
    },
    potion_cold_resistance: {
        id: 'potion_cold_resistance',
        name: 'Potion of Cold Resistance',
        effect: 'Resistance to cold damage for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        
        wildcard: true, 

        icon: '🧪',
        materials: [
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'frost_essence', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 150,
        craftTime: 4,
        successChance: 80,
        levelRequirement: 4
    },
    antitoxin: {
        id: 'antitoxin',
        name: 'Antitoxin',
        effect: 'Advantage on saves vs poison for 1 hour',
        potionType: 'utility',
        rarity: 'common',
        
        wildcard: true, 

        icon: '🧪',
        materials: [
            { id: 'empty_vial', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'nightshade', quantity: 1 },
            { id: 'healing_herbs', quantity: 1 }
        ],
        goldCost: 50,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 1
    },
      potion_superior_healing: {
    id: 'potion_superior_healing',
    name: 'Potion of Superior Healing',
    effect: 'Restore 8d4+8 HP',
    potionType: 'healing',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'starlight_dew', quantity: 1 },
      { id: 'life_root', quantity: 3 },
      { id: 'gold_clover', quantity: 1 }
    ],
    goldCost: 400,
    craftTime: 8,
    successChance: 75,
    levelRequirement: 7
  },
    // Freelancer (4.2%) – Independent, versatile, adaptable
    potion_freelancer_fortune: {
        id: 'potion_freelancer_fortune',
        name: 'Freelancer’s Fortune',
        effect: 'Reroll one d20 within 1 hour (once)',
        potionType: 'utility',
        rarity: 'uncommon',
        icon: '💼',
        wildcard: true,
        materials: [
            { id: 'silver_coin', quantity: 3 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 130,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 2
    },

    // King of Tombs (5.6%) – Death, relics, ancient power
    potion_tomb_king_essence: {
        id: 'potion_tomb_king_essence',
        name: 'Essence of the Tomb King',
        effect: 'Gain resistance to necrotic damage & speak with dead for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '⚱️',
        wildcard: true,
        materials: [
            { id: 'pharaoh_ash', quantity: 1 },
            { id: 'black_onyx_powder', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 400,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 6
    },

    // Land Mordor (3.2%) – Shadow, domination, fire
    potion_mordor_wrath: {
        id: 'potion_mordor_wrath',
        name: 'Wrath of Mordor',
        effect: 'Deal +2d6 fire damage on next attack; gain vulnerability to radiant',
        potionType: 'offensive',
        rarity: 'rare',
        icon: '🌋',
        wildcard: true,
        materials: [
            { id: 'volcanic_ash', quantity: 2 },
            { id: 'fire_essence', quantity: 2 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 320,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6
    },

    // Void Drifters (1.2%) – Cosmic, void-touched, unstable
    potion_void_drift: {
        id: 'potion_void_drift',
        name: 'Void Drift Elixir',
        effect: 'Teleport 60 ft once within 10 minutes; risk 1d4 psychic damage',
        potionType: 'utility',
        rarity: 'very_rare',
        icon: '🌌',
        wildcard: true,
        materials: [
            { id: 'void_crystal', quantity: 1 },
            { id: 'astral_essence', quantity: 1 },
            { id: 'dragon_glass_vial', quantity: 1 }
        ],
        goldCost: 850,
        craftTime: 6,
        successChance: 65,
        levelRequirement: 8
    },

    // Servants Cosmic / Pokémon League / Asclepia (all ~1.8%) – Healing, cosmic order, vitality
    potion_cosmic_healing: {
        id: 'potion_cosmic_healing',
        name: 'Cosmic Vitality Draught',
        effect: 'Restore 3d6+5 HP & remove one condition (not cursed/diseased)',
        potionType: 'healing',
        rarity: 'rare',
        icon: '✨',
        wildcard: true,
        materials: [
            { id: 'stardust', quantity: 2 },
            { id: 'golden_sunleaf', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 380,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6
    },

    // Asgard (1.8%) – Thunder, valor, divine might
    potion_odins_blessing: {
        id: 'potion_odins_blessing',
        name: "Odin's Blessing",
        effect: 'Gain advantage on death saves & +2 to all saves for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '⚡',
        wildcard: true,
        materials: [
            { id: 'storm_essence', quantity: 2 },
            { id: 'raven_feather', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 360,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6
    },

    // Kingdom Gondor (1.6%) – Honor, resilience, light
    potion_gondor_resolve: {
        id: 'potion_gondor_resolve',
        name: 'Gondorian Resolve',
        effect: 'Gain 15 temp HP & immunity to fear for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🛡️',
        wildcard: true,
        materials: [
            { id: 'white_tree_blossom', quantity: 1 },
            { id: 'holy_water', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 200,
        craftTime: 4,
        successChance: 80,
        levelRequirement: 4
    },

    // Koopa Troop / Mushroom Regency / Peach Loyalists (Mario-inspired)
    potion_super_mushroom: {
        id: 'potion_super_mushroom',
        name: 'Super Mushroom Elixir',
        effect: 'Grow to Large size (Enlarge) & gain +2 STR for 10 minutes',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🍄',
        wildcard: true,
        materials: [
            { id: 'magic_mushroom', quantity: 3 },
            { id: 'spring_water', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 140,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    // Equestrian / Pony Nobility / Starlight (MLP-inspired)
    potion_harmony_brew: {
        id: 'potion_harmony_brew',
        name: 'Harmony Brew',
        effect: 'Cast Calm Emotions & gain +1d4 to next social check',
        potionType: 'utility',
        rarity: 'uncommon',
        icon: '🦄',
        wildcard: true,
        materials: [
            { id: 'rainbow_petal', quantity: 2 },
            { id: 'moonwell_water', quantity: 1 },
            { id: 'silverleaf', quantity: 1 }
        ],
        goldCost: 160,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    // Iron Legion / The Iron Fists / Dwarf Realms
    potion_iron_constitution: {
        id: 'potion_iron_constitution',
        name: 'Iron Constitution Tonic',
        effect: 'CON score +2 (max 20) for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '⚙️',
        wildcard: true,
        materials: [
            { id: 'iron_shavings', quantity: 3 },
            { id: 'dwarven_ale', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 300,
        craftTime: 4,
        successChance: 80,
        levelRequirement: 5
    },

    // Formosa Ultima / Glarnia / Garden Isles (lush, natural realms)
    potion_verdant_renewal: {
        id: 'potion_verdant_renewal',
        name: 'Verdant Renewal',
        effect: 'Regain 2d8 HP & remove poison or disease',
        potionType: 'healing',
        rarity: 'rare',
        icon: '🌿',
        wildcard: true,
        materials: [
            { id: 'ancient_bark', quantity: 1 },
            { id: 'healing_herbs', quantity: 5 },
            { id: 'spring_water', quantity: 1 }
        ],
        goldCost: 340,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6
    },

    // Weldrhom / Cybernetic / Data Merchant / Hacktivist
    potion_neural_overclock: {
        id: 'potion_neural_overclock',
        name: 'Neural Overclock Serum',
        effect: 'Gain +5 to INT-based checks & cast Detect Thoughts for 10 min',
        potionType: 'utility',
        rarity: 'rare',
        icon: '💾',
        wildcard: true,
        materials: [
            { id: 'data_crystal', quantity: 1 },
            { id: 'quicksilver', quantity: 1 },
            { id: 'arcane_crystal', quantity: 1 }
        ],
        goldCost: 420,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 7
    },

    // Skycaverns / Griffonstone
    potion_skycaller: {
        id: 'potion_skycaller',
        name: 'Skycaller Draft',
        effect: 'Summon a spectral griffon mount (fly speed 60 ft) for 10 minutes',
        potionType: 'utility',
        rarity: 'very_rare',
        icon: '🦅',
        wildcard: true,
        materials: [
            { id: 'griffon_feather', quantity: 3 },
            { id: 'storm_essence', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 900,
        craftTime: 7,
        successChance: 60,
        levelRequirement: 9
    },

    // Polybius / Internet / Void Entities (digital, surreal)
    potion_polybius_glitch: {
        id: 'potion_polybius_glitch',
        name: 'Polybius Glitch Tonic',
        effect: 'Cast Confusion (DC 16) in 15-ft radius OR gain +10 to initiative',
        potionType: 'offensive',
        rarity: 'very_rare',
        icon: '🌀',
        wildcard: true,
        materials: [
            { id: 'corrupted_data', quantity: 2 },
            { id: 'void_crystal', quantity: 1 },
            { id: 'dragon_glass_vial', quantity: 1 }
        ],
        goldCost: 880,
        craftTime: 7,
        successChance: 55,
        levelRequirement: 10
    },

    // Lemuria Conclave / Mu Empire / Shanhaijing (ancient lost civilizations)
    potion_lemurian_wisdom: {
        id: 'potion_lemurian_wisdom',
        name: 'Lemurian Wisdom Elixir',
        effect: 'Cast Legend Lore once within 1 hour',
        potionType: 'utility',
        rarity: 'very_rare',
        icon: '🧭',
        wildcard: true,
        materials: [
            { id: 'sunken_scroll', quantity: 1 },
            { id: 'pearl_dust', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 1100,
        craftTime: 8,
        successChance: 60,
        levelRequirement: 9
    },

    // Greenskins / Hobgoblin / Bandits
    potion_waaagh_brew: {
        id: 'potion_waaagh_brew',
        name: 'WAAAGH! Brew',
        effect: 'Gain +2d6 damage on next melee attack; take 1d6 damage after',
        potionType: 'offensive',
        rarity: 'uncommon',
        icon: '💚',
        wildcard: true,
        materials: [
            { id: 'fungus_spore', quantity: 3 },
            { id: 'rotgut_ale', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 90,
        craftTime: 2,
        successChance: 85,
        levelRequirement: 2
    },

    // High Elves / Dark Elves / Lothlórien / Elves Lindon
    potion_elven_grace: {
        id: 'potion_elven_grace',
        name: 'Elven Grace',
        effect: 'DEX score +2 (max 20) & advantage on Acrobatics for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🌲',
        wildcard: true,
        materials: [
            { id: 'mithril_dust', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 },
            { id: 'silverleaf', quantity: 2 }
        ],
        goldCost: 350,
        craftTime: 5,
        successChance: 80,
        levelRequirement: 6
    },

    // Vampire Counts / Vampire Covenant / Abyssal Court
    potion_crimson_thirst: {
        id: 'potion_crimson_thirst',
        name: 'Crimson Thirst',
        effect: 'Next successful melee attack heals you for half damage dealt',
        potionType: 'offensive',
        rarity: 'rare',
        icon: '🩸',
        wildcard: true,
        materials: [
            { id: 'vampire_ichor', quantity: 1 },
            { id: 'nightshade', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 320,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6
    },

    // Kingdoms Dwarves / Dwarf Realms / Chaos Dwarfs
    potion_stonebrew: {
        id: 'potion_stonebrew',
        name: 'Stonebrew Stout',
        effect: 'Resistance to bludgeoning & ignore difficult terrain for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🍺',
        wildcard: true,
        materials: [
            { id: 'dwarven_ale', quantity: 2 },
            { id: 'earth_essence', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 180,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 4
    },

    // Trainer Guild / Pokémon League / Ranger Union
    potion_poke_heal: {
        id: 'potion_poke_heal',
        name: 'Poké-Heal Tonic',
        effect: 'Restore 4d4+4 HP & cure one status condition (paralysis, burn, etc.)',
        potionType: 'healing',
        rarity: 'uncommon',
        icon: '🔴',
        wildcard: true,
        materials: [
            { id: 'berry_juice', quantity: 3 },
            { id: 'spring_water', quantity: 1 },
            { id: 'healing_herbs', quantity: 2 }
        ],
        goldCost: 150,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    // Jotunheimr / Warriors Chaos / Red Winter
    potion_frost_giant_rage: {
        id: 'potion_frost_giant_rage',
        name: 'Frost Giant’s Rage',
        effect: 'STR +2, resistance to cold, but vulnerable to fire for 10 minutes',
        potionType: 'buff',
        rarity: 'rare',
        icon: '❄️',
        wildcard: true,
        materials: [
            { id: 'frost_essence', quantity: 2 },
            { id: 'giant_bone_powder', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 330,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 6
    },

    // Custodians / Blessed Order / Monks Order
    potion_sacred_oath: {
        id: 'potion_sacred_oath',
        name: 'Sacred Oath Elixir',
        effect: 'Gain 10 temp HP & deal +1d6 radiant damage on next attack',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🕊️',
        wildcard: true,
        materials: [
            { id: 'holy_water', quantity: 1 },
            { id: 'white_sage', quantity: 2 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 170,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 4
    },

    // The Onyx Hand / Cult of Min / Mnevis Order (shadowy cults)
    potion_onyx_whisper: {
        id: 'potion_onyx_whisper',
        name: 'Onyx Whisper',
        effect: 'Become invisible for 1 minute OR read surface thoughts of one target',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🖤',
        wildcard: true,
        materials: [
            { id: 'onyx_shard', quantity: 2 },
            { id: 'shadow_essence', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 360,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 6
    },

    // Druid Circle / Flower Kingdom / Garden Isles
    potion_bloomburst: {
        id: 'potion_bloomburst',
        name: 'Bloomburst Nectar',
        effect: 'Cast Entangle & heal 1d8 HP per creature restrained',
        potionType: 'utility',
        rarity: 'uncommon',
        icon: '🌸',
        wildcard: true,
        materials: [
            { id: 'blossom_pollen', quantity: 3 },
            { id: 'spring_water', quantity: 1 },
            { id: 'healing_herbs', quantity: 1 }
        ],
        goldCost: 140,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    // Spark Rebellion / Ratchet Raiders / Cybernetic
    potion_overcharge: {
        id: 'potion_overcharge',
        name: 'Overcharge Serum',
        effect: 'Gain +10 speed & +1d8 lightning damage on attacks for 3 rounds',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🔋',
        wildcard: true,
        materials: [
            { id: 'battery_core', quantity: 1 },
            { id: 'storm_essence', quantity: 1 },
            { id: 'quicksilver', quantity: 1 }
        ],
        goldCost: 380,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 7
    },

    // Avalon Court / Pony Nobility / Kingdom Fiore
    potion_royal_charm: {
        id: 'potion_royal_charm',
        name: 'Royal Charm Elixir',
        effect: 'Advantage on CHA checks & cast Suggestion (DC 14) once',
        potionType: 'utility',
        rarity: 'rare',
        icon: '👑',
        wildcard: true,
        materials: [
            { id: 'rose_quartz', quantity: 2 },
            { id: 'moonwell_water', quantity: 1 },
            { id: 'golden_sunleaf', quantity: 1 }
        ],
        goldCost: 340,
        craftTime: 4,
        successChance: 75,
        levelRequirement: 6
    },

    // Gehenna Academy / Trinity General / General Student
    potion_exam_focus: {
        id: 'potion_exam_focus',
        name: 'Exam Focus Brew',
        effect: 'Gain +1d6 to INT/WIS/CHA checks for 1 hour',
        potionType: 'utility',
        rarity: 'common',
        icon: '📚',
        wildcard: true,
        materials: [
            { id: 'inkroot', quantity: 2 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 70,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 1
    },

    // Moonfang Pack / Lycan Pack
    potion_lunar_fury: {
        id: 'potion_lunar_fury',
        name: 'Lunar Fury Draught',
        effect: 'Transform partially: +2 STR, darkvision 60 ft, but disadvantage in sunlight',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🌕',
        wildcard: true,
        materials: [
            { id: 'werewolf_claw', quantity: 1 },
            { id: 'moonpetal', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 320,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 6
    },

    // Team Rocket / Team Plasma / Team Flare
    potion_shadow_scheme: {
        id: 'potion_shadow_scheme',
        name: 'Shadow Scheme Tonic',
        effect: 'Cast Invisibility & Disguise Self simultaneously for 10 minutes',
        potionType: 'utility',
        rarity: 'rare',
        icon: '👤',
        wildcard: true,
        materials: [
            { id: 'smoke_bomb_residue', quantity: 2 },
            { id: 'shadow_essence', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 300,
        craftTime: 4,
        successChance: 75,
        levelRequirement: 5
    },

    // Desert Sultanate / Sultanates Araby / Farasi
    potion_sandstorm_elixir: {
        id: 'potion_sandstorm_elixir',
        name: 'Sandstorm Elixir',
        effect: 'Create blinding sand cloud (20-ft radius) OR gain desert survival insight',
        potionType: 'utility',
        rarity: 'uncommon',
        icon: '🏜️',
        wildcard: true,
        materials: [
            { id: 'desert_salt', quantity: 2 },
            { id: 'cactus_bloom', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 160,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 4
    },

    // Grand Cathay / Shanhaijing / Apis Kingdom
    potion_jade_harmony: {
        id: 'potion_jade_harmony',
        name: 'Jade Harmony Draught',
        effect: 'Balance body & mind: advantage on CON & WIS saves for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🐉',
        wildcard: true,
        materials: [
            { id: 'jade_dust', quantity: 2 },
            { id: 'lotus_petal', quantity: 2 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 350,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6
    },

    // Goodstyle / Zebrabwe / Centaur Khanate
    potion_savanna_stride: {
        id: 'potion_savanna_stride',
        name: 'Savanna Stride',
        effect: '+15 ft movement & advantage on Survival checks for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🦓',
        wildcard: true,
        materials: [
            { id: 'zebra_hair', quantity: 2 },
            { id: 'savanna_grass', quantity: 3 },
            { id: 'spring_water', quantity: 1 }
        ],
        goldCost: 130,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    // Beanbean Kingdom / Yoshi Clans / Wario Land
    potion_beansprout_boost: {
        id: 'potion_beansprout_boost',
        name: 'Beansprout Boost',
        effect: 'Jump distance x2 & gain +1d6 damage on thrown object attacks',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🌱',
        wildcard: true,
        materials: [
            { id: 'magic_bean', quantity: 2 },
            { id: 'yoshi_eggshell', quantity: 1 },
            { id: 'spring_water', quantity: 1 }
        ],
        goldCost: 120,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    // Minerva / Oracula / Eiwass (wisdom, prophecy)
    potion_third_eye: {
        id: 'potion_third_eye',
        name: 'Third Eye Tincture',
        effect: 'Cast Augury once & gain +1d4 to next Perception check',
        potionType: 'utility',
        rarity: 'rare',
        icon: '👁️‍🗨️',
        wildcard: true,
        materials: [
            { id: 'owl_eye_extract', quantity: 2 },
            { id: 'seer_orb_shard', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 340,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6
    },

    // Changeling Hive / Animatopia Prey
    potion_mimicry: {
        id: 'potion_mimicry',
        name: 'Mimicry Serum',
        effect: 'Copy appearance & voice of one humanoid for 1 hour',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🎭',
        wildcard: true,
        materials: [
            { id: 'changeling_tear', quantity: 1 },
            { id: 'illusion_powder', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 360,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 6
    },

    // The DK Crew / Kremling Krew / Fawful's Furious
    potion_banana_blast: {
        id: 'potion_banana_blast',
        name: 'Banana Blast Smoothie',
        effect: 'Throw to create slippery zone (DEX save DC 14 or fall prone)',
        potionType: 'offensive',
        rarity: 'common',
        icon: '🍌',
        wildcard: true,
        materials: [
            { id: 'banana_peel', quantity: 3 },
            { id: 'slime_goo', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 50,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 1
    },

    // Millennium / Diamond City / North American (modern/post-apoc)
    potion_radaway: {
        id: 'potion_radaway',
        name: 'Rad-Away Tonic',
        effect: 'Remove radiation sickness or poison; heal 1d6 HP',
        potionType: 'healing',
        rarity: 'uncommon',
        icon: '☢️',
        wildcard: true,
        materials: [
            { id: 'purified_water', quantity: 1 },
            { id: 'mutfruit', quantity: 2 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 100,
        craftTime: 2,
        successChance: 85,
        levelRequirement: 2
    },

    // Undead / Tomb Kings / Vampire Counts
    potion_undying_essence: {
        id: 'potion_undying_essence',
        name: 'Undying Essence',
        effect: 'Ignore first 10 HP of damage in next minute; immune to exhaustion',
        potionType: 'buff',
        rarity: 'very_rare',
        icon: '💀',
        wildcard: true,
        materials: [
            { id: 'phylactery_dust', quantity: 1 },
            { id: 'black_onyx_powder', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 950,
        craftTime: 7,
        successChance: 60,
        levelRequirement: 9
    },

    // Skaven (0.0% but iconic)
    potion_warpstone_infusion: {
        id: 'potion_warpstone_infusion',
        name: 'Warpstone Infusion',
        effect: 'Roll on mutation table OR gain +2d6 damage (50/50 chance)',
        potionType: 'offensive',
        rarity: 'very_rare',
        icon: '🐀',
        wildcard: true,
        materials: [
            { id: 'warpstone_shard', quantity: 1 },
            { id: 'rat_tail', quantity: 3 },
            { id: 'dragon_glass_vial', quantity: 1 }
        ],
        goldCost: 1000,
        craftTime: 8,
        successChance: 50,
        levelRequirement: 10
    },

    // Team Aqua / Team Magma (elemental extremism)
    potion_primal_element: {
        id: 'potion_primal_element',
        name: 'Primal Element Draught',
        effect: 'Choose fire OR water: gain resistance & elemental attack boost for 10 min',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🌊',
        wildcard: true,
        materials: [
            { id: 'fire_essence', quantity: 1 },
            { id: 'frost_essence', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 320,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6
    },

    // Liminal / Connectopia / U (abstract/meta realms)
    potion_boundary_crossing: {
        id: 'potion_boundary_crossing',
        name: 'Boundary-Crossing Brew',
        effect: 'Phase through one non-magical wall OR see into Ethereal Plane for 1 min',
        potionType: 'utility',
        rarity: 'very_rare',
        icon: '🚪',
        wildcard: true,
        materials: [
            { id: 'liminal_dust', quantity: 2 },
            { id: 'void_crystal', quantity: 1 },
            { id: 'dragon_glass_vial', quantity: 1 }
        ],
        goldCost: 920,
        craftTime: 7,
        successChance: 60,
        levelRequirement: 9
    },

    // African Union / Sirsirian Ocean / Refijia (pan-African & oceanic)
    potion_ancestral_call: {
        id: 'potion_ancestral_call',
        name: 'Ancestral Call',
        effect: 'Summon spirit guide: advantage on one skill check & +1d6 damage',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🐚',
        wildcard: true,
        materials: [
            { id: 'ancestor_bone', quantity: 1 },
            { id: 'ocean_salt', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 340,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6
    },

    // Go-Rock Squad / Ranger Union / Monsters
    potion_monster_bait: {
        id: 'potion_monster_bait',
        name: 'Monster Bait Tonic',
        effect: 'Attract or repel beasts/monsters within 300 ft for 10 minutes',
        potionType: 'utility',
        rarity: 'uncommon',
        icon: '🐾',
        wildcard: true,
        materials: [
            { id: 'monster_gland', quantity: 1 },
            { id: 'beast_essence', quantity: 2 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 140,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    // Halfling / Merchant Guild / Tea Leaf
    potion_comfort_brew: {
        id: 'potion_comfort_brew',
        name: 'Comfort Brew',
        effect: 'Heal 2d6 HP & gain advantage on next saving throw vs fear or charm',
        potionType: 'healing',
        rarity: 'common',
        icon: '☕',
        wildcard: true,
        materials: [
            { id: 'herbal_tea_leaf', quantity: 3 },
            { id: 'honey', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 60,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 1
    },

    // Oathbound Judges / Custodians / The Unchained
    potion_justice_serum: {
        id: 'potion_justice_serum',
        name: 'Justice Serum',
        effect: 'Next attack against evil creature deals +2d8 radiant damage',
        potionType: 'offensive',
        rarity: 'rare',
        icon: '⚖️',
        wildcard: true,
        materials: [
            { id: 'lawful_iron', quantity: 2 },
            { id: 'holy_water', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 330,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6
    },

    // Desert Traders / Merchant Guild / Data Merchant
    potion_bargain_blessing: {
        id: 'potion_bargain_blessing',
        name: 'Bargain Blessing',
        effect: 'Next purchase costs 20% less OR sell item for 20% more',
        potionType: 'utility',
        rarity: 'common',
        icon: '💰',
        wildcard: true,
        materials: [
            { id: 'gold_foil', quantity: 1 },
            { id: 'silk_thread', quantity: 2 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 80,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 1
    },

    // Knights Gilded / Regal Empire / Kingdom
    potion_gilded_armor: {
        id: 'potion_gilded_armor',
        name: 'Gilded Armor Draught',
        effect: 'AC increases by 2 for 10 minutes',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🛡️',
        wildcard: true,
        materials: [
            { id: 'gold_dust', quantity: 2 },
            { id: 'steel_filing', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 180,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 4
    },

    // Robensonia / Pitatia / Crimision Isle (exotic islands)
    potion_isle_breeze: {
        id: 'potion_isle_breeze',
        name: 'Isle Breeze Elixir',
        effect: 'Gain water breathing & resistance to heat for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🏝️',
        wildcard: true,
        materials: [
            { id: 'coconut_milk', quantity: 2 },
            { id: 'kelp_sac', quantity: 1 },
            { id: 'spring_water', quantity: 1 }
        ],
        goldCost: 150,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    // Crimson Fleet / Scylla Charybdis (pirates & sea monsters)
    potion_siren_song: {
        id: 'potion_siren_song',
        name: 'Siren Song Tonic',
        effect: 'Cast Suggestion (DC 15) on one creature that can hear you',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🧜',
        wildcard: true,
        materials: [
            { id: 'siren_scale', quantity: 1 },
            { id: 'sea_salt', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 320,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6
    },

    // Gehenna Academy / Mages' Guild / Druid Circle
    potion_arcane_nature: {
        id: 'potion_arcane_nature',
        name: 'Arcane Nature Blend',
        effect: 'Cast either Entangle or Magic Missile (your choice) within 10 minutes',
        potionType: 'utility',
        rarity: 'uncommon',
        icon: '🌀',
        wildcard: true,
        materials: [
            { id: 'arcane_crystal', quantity: 1 },
            { id: 'healing_herbs', quantity: 2 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 160,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    // Final: Void Cult / Void Entities / U
    potion_eventide_void: {
        id: 'potion_eventide_void',
        name: 'Eventide Void Draught',
        effect: 'Become incorporeal for 1 round OR teleport 120 ft (once)',
        potionType: 'utility',
        rarity: 'legendary',
        icon: '🕳️',
        wildcard: true,
        materials: [
            { id: 'void_heart', quantity: 1 },
            { id: 'chronal_crystal', quantity: 1 },
            { id: 'dragon_glass_vial', quantity: 1 }
        ],
        goldCost: 5000,
        craftTime: 12,
        successChance: 40,
        levelRequirement: 15
    },
        // Land Mordor - Dark, fiery, corrupting potions
    potion_mordor_fire: {
        id: 'potion_mordor_fire',
        name: 'Mordor Fire Draught',
        effect: 'Deal 4d6 fire damage in 15-ft cone (DC 15 Dex save)',
        potionType: 'offensive',
        rarity: 'rare',
        icon: '🔥',
        wildcard: true,
        materials: [
            { id: 'volcanic_ash', quantity: 2 },
            { id: 'dark_iron_filings', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 300,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6,
        faction: 'Land Mordor'
    },

    potion_eye_of_sauron: {
        id: 'potion_eye_of_sauron',
        name: 'Eye of Sauron Elixir',
        effect: 'See through illusions and detect lies for 10 minutes',
        potionType: 'utility',
        rarity: 'very_rare',
        icon: '👁️',
        wildcard: true,
        materials: [
            { id: 'palantir_shard', quantity: 1 },
            { id: 'shadow_essence', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 800,
        craftTime: 7,
        successChance: 65,
        levelRequirement: 9,
        faction: 'Land Mordor'
    },

    // Asgard - Divine, stormy, heroic potions
    potion_asgardian_might: {
        id: 'potion_asgardian_might',
        name: 'Asgardian Might Mead',
        effect: '+2 to Strength and Constitution for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '⚡',
        wildcard: true,
        materials: [
            { id: 'storm_essence', quantity: 2 },
            { id: 'golden_apple_nectar', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 450,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 7,
        faction: 'Asgard'
    },

    potion_bifrost_essence: {
        id: 'potion_bifrost_essence',
        name: 'Bifrost Essence',
        effect: 'Teleport up to 500 ft to a visible location',
        potionType: 'utility',
        rarity: 'very_rare',
        icon: '🌈',
        wildcard: true,
        materials: [
            { id: 'rainbow_crystal', quantity: 1 },
            { id: 'storm_essence', quantity: 2 },
            { id: 'dragon_glass_vial', quantity: 1 }
        ],
        goldCost: 1200,
        craftTime: 8,
        successChance: 60,
        levelRequirement: 10,
        faction: 'Asgard'
    },

    // Kingdom Gondor - Noble, protective, healing
    potion_gondor_white_tree: {
        id: 'potion_gondor_white_tree',
        name: 'White Tree Healing Salve',
        effect: 'Heal 5d8+10 HP and cure one disease',
        potionType: 'healing',
        rarity: 'rare',
        icon: '🌳',
        wildcard: true,
        materials: [
            { id: 'white_tree_sap', quantity: 2 },
            { id: 'kingsfoil', quantity: 3 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 600,
        craftTime: 6,
        successChance: 70,
        levelRequirement: 8,
        faction: 'Kingdom Gondor'
    },

    potion_citadel_ward: {
        id: 'potion_citadel_ward',
        name: 'Citadel Ward Elixir',
        effect: '+2 AC and advantage on saves vs fear for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🛡️',
        wildcard: true,
        materials: [
            { id: 'mithril_dust', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 250,
        craftTime: 4,
        successChance: 80,
        levelRequirement: 5,
        faction: 'Kingdom Gondor'
    },

    // Regal Empire - Royal, commanding, luxurious
    potion_imperial_command: {
        id: 'potion_imperial_command',
        effect: 'Cast Command spell (DC 15) on up to 3 creatures',
        potionType: 'offensive',
        rarity: 'rare',
        icon: '👑',
        wildcard: true,
        name: 'Imperial Command Draught',
        materials: [
            { id: 'gold_dust', quantity: 2 },
            { id: 'lion_heart_essence', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 400,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6,
        faction: 'Regal Empire'
    },

    potion_golden_splendor: {
        id: 'potion_golden_splendor',
        name: 'Golden Splendor Tonic',
        effect: 'Gain advantage on Persuasion and Intimidation for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '💰',
        wildcard: true,
        materials: [
            { id: 'gold_dust', quantity: 1 },
            { id: 'saffron', quantity: 2 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 200,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 4,
        faction: 'Regal Empire'
    },

    // Koopa Troop - Turtle-themed, fire, spiky
    potion_koopa_shell: {
        id: 'potion_koopa_shell',
        name: 'Koopa Shell Brew',
        effect: 'Gain +3 AC and resistance to bludgeoning for 10 minutes',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🐢',
        wildcard: true,
        materials: [
            { id: 'koopa_shell_fragment', quantity: 2 },
            { id: 'fire_flower_petal', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 180,
        craftTime: 4,
        successChance: 80,
        levelRequirement: 4,
        faction: 'Koopa Troop'
    },

    potion_fire_flower_essence: {
        id: 'potion_fire_flower_essence',
        name: 'Fire Flower Essence',
        effect: 'Shoot fireballs (2d6 damage) as bonus action for 1 minute',
        potionType: 'offensive',
        rarity: 'rare',
        icon: '🔥',
        wildcard: true,
        materials: [
            { id: 'fire_flower_petal', quantity: 3 },
            { id: 'fire_essence', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 350,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6,
        faction: 'Koopa Troop'
    },

    // Equestrian - Friendship, rainbows, harmony
    potion_friendship_harmony: {
        id: 'potion_friendship_harmony',
        name: 'Friendship Harmony Tonic',
        effect: 'Cast Calm Emotions (DC 14) in 20-ft radius',
        potionType: 'utility',
        rarity: 'uncommon',
        icon: '🌈',
        wildcard: true,
        materials: [
            { id: 'rainbow_crystal', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 150,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3,
        faction: 'Equestrian'
    },

    potion_rainbow_power: {
        id: 'potion_rainbow_power',
        name: 'Rainbow Power Elixir',
        effect: 'Gain resistance to two damage types of choice for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '✨',
        wildcard: true,
        materials: [
            { id: 'rainbow_crystal', quantity: 2 },
            { id: 'unicorn_tears', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 500,
        craftTime: 6,
        successChance: 70,
        levelRequirement: 7,
        faction: 'Equestrian'
    },

    // Iron Legion - Mechanical, durable, industrial
    potion_iron_skin: {
        id: 'potion_iron_skin',
        name: 'Iron Legion Skin Oil',
        effect: 'AC becomes 18 (ignoring Dex) for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '⚙️',
        wildcard: true,
        materials: [
            { id: 'liquid_iron', quantity: 2 },
            { id: 'clockwork_gear', quantity: 3 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 400,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6,
        faction: 'Iron Legion'
    },

    potion_steam_power: {
        id: 'potion_steam_power',
        name: 'Steam Power Draught',
        effect: '+10 ft movement and advantage on Strength checks for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '💨',
        wildcard: true,
        materials: [
            { id: 'steam_essence', quantity: 1 },
            { id: 'coal_dust', quantity: 2 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 180,
        craftTime: 4,
        successChance: 80,
        levelRequirement: 4,
        faction: 'Iron Legion'
    },

    // Formosa Ultima - Mystical, island, tropical
    potion_formosan_blessing: {
        id: 'potion_formosan_blessing',
        name: 'Formosan Blessing Water',
        effect: 'Cure all diseases and gain advantage on saves vs poison for 24h',
        potionType: 'healing',
        rarity: 'rare',
        icon: '🏝️',
        wildcard: true,
        materials: [
            { id: 'tropical_blossom', quantity: 3 },
            { id: 'coral_dust', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 450,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6,
        faction: 'Formosa Ultima'
    },

    // Weldrhom - Mountain, dwarven, sturdy
    potion_weldrhom_stout: {
        id: 'potion_weldrhom_stout',
        name: 'Weldrhom Mountain Stout',
        effect: 'Resistance to poison and advantage on Con saves for 8 hours',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '⛰️',
        wildcard: true,
        materials: [
            { id: 'mountain_root', quantity: 2 },
            { id: 'iron_filings', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 160,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3,
        faction: 'Weldrhom'
    },

    // Skycaverns - Aerial, wind, cloud
    potion_skycavern_zephyr: {
        id: 'potion_skycavern_zephyr',
        name: 'Skycavern Zephyr Essence',
        effect: 'Gain 30-ft fly speed and ignore difficult terrain for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '☁️',
        wildcard: true,
        materials: [
            { id: 'cloud_essence', quantity: 2 },
            { id: 'griffon_feather', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 380,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6,
        faction: 'Skycaverns'
    },

    // Garden Isles - Floral, growth, nature
    potion_garden_bloom: {
        id: 'potion_garden_bloom',
        name: 'Garden Isles Bloom Tonic',
        effect: 'Create difficult terrain of vines in 20-ft radius for 10 minutes',
        potionType: 'utility',
        rarity: 'uncommon',
        icon: '🌸',
        wildcard: true,
        materials: [
            { id: 'exotic_blossom', quantity: 3 },
            { id: 'spring_water', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 140,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3,
        faction: 'Garden Isles'
    },

    // Glarnia - Glittering, magical, radiant
    potion_glarnian_glitter: {
        id: 'potion_glarnian_glitter',
        name: 'Glarnian Glitter Dust',
        effect: 'Blind enemies in 15-ft cone for 1 round (DC 14 Con save)',
        potionType: 'offensive',
        rarity: 'uncommon',
        icon: '✨',
        wildcard: true,
        materials: [
            { id: 'glitter_dust', quantity: 3 },
            { id: 'sunstone_powder', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 120,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 2,
        faction: 'Glarnia'
    },

    // Polybius - Digital, glitchy, abstract
    potion_polybius_glitch: {
        id: 'potion_polybius_glitch',
        name: 'Polybius Glitch Serum',
        effect: 'Target must succeed DC 15 Int save or be Confused for 1 minute',
        potionType: 'offensive',
        rarity: 'rare',
        icon: '📺',
        wildcard: true,
        materials: [
            { id: 'glitch_essence', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 },
            { id: 'arcane_crystal', quantity: 1 }
        ],
        goldCost: 320,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 6,
        faction: 'Polybius'
    },

    // Internet - Connection, data, virtual
    potion_internet_connection: {
        id: 'potion_internet_connection',
        name: 'Internet Connection Elixir',
        effect: 'Cast Sending spell once within 1 hour',
        potionType: 'utility',
        rarity: 'uncommon',
        icon: '🌐',
        wildcard: true,
        materials: [
            { id: 'data_crystal', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 180,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 4,
        faction: 'Internet'
    },

    // Pokémon League - Elemental, creature-based
    potion_pokemon_revive: {
        id: 'potion_pokemon_revive',
        name: 'Pokémon Revive',
        effect: 'Restore unconscious creature to 1 HP',
        potionType: 'healing',
        rarity: 'rare',
        icon: '⚡',
        wildcard: true,
        materials: [
            { id: 'revive_herb', quantity: 2 },
            { id: 'electric_essence', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 500,
        craftTime: 6,
        successChance: 70,
        levelRequirement: 7,
        faction: 'Pokémon League'
    },

    potion_elemental_essence: {
        id: 'potion_elemental_essence',
        name: 'Elemental Essence Tonic',
        effect: 'Gain resistance to one elemental damage type for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🌊',
        wildcard: true,
        materials: [
            { id: 'elemental_shard', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 160,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3,
        faction: 'Pokémon League'
    },

    // Xenonesia - Alien, exotic, strange
    potion_xenonesian_ooze: {
        id: 'potion_xenonesian_ooze',
        name: 'Xenonesian Ooze',
        effect: 'Deal 3d6 acid damage and restrain target (DC 14 Dex save)',
        potionType: 'offensive',
        rarity: 'rare',
        icon: '👽',
        wildcard: true,
        materials: [
            { id: 'alien_ooze', quantity: 2 },
            { id: 'strange_crystal', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 280,
        craftTime: 4,
        successChance: 75,
        levelRequirement: 5,
        faction: 'Xenonesia'
    },

    // Mushroom Regency - Fungal, spore-based
    potion_mushroom_spores: {
        id: 'potion_mushroom_spores',
        name: 'Mushroom Spore Cloud',
        effect: 'Create 20-ft radius cloud of spores that poisons (DC 13 Con)',
        potionType: 'offensive',
        rarity: 'uncommon',
        icon: '🍄',
        wildcard: true,
        materials: [
            { id: 'glowing_spores', quantity: 3 },
            { id: 'empty_vial', quantity: 1 },
            { id: 'spring_water', quantity: 1 }
        ],
        goldCost: 100,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 2,
        faction: 'Mushroom Regency'
    },

    // Geminia - Twin-themed, duality, balance
    potion_geminian_twin: {
        id: 'potion_geminian_twin',
        name: 'Geminian Twin Draught',
        effect: 'Create a mirror image duplicate that lasts 1 minute',
        potionType: 'buff',
        rarity: 'rare',
        icon: '👯',
        wildcard: true,
        materials: [
            { id: 'twin_crystal', quantity: 2 },
            { id: 'silverleaf', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 350,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6,
        faction: 'Geminia'
    },

    // Servants Cosmic - Celestial, cosmic, starry
    potion_cosmic_essence: {
        id: 'potion_cosmic_essence',
        name: 'Cosmic Essence',
        effect: 'Gain resistance to radiant and necrotic damage for 1 hour',
        potionType: 'buff',
        rarity: 'very_rare',
        icon: '🌌',
        wildcard: true,
        materials: [
            { id: 'star_dust', quantity: 3 },
            { id: 'void_essence', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 700,
        craftTime: 7,
        successChance: 65,
        levelRequirement: 9,
        faction: 'Servants Cosmic'
    },

    // Asclepia - Medical, healing, surgical
    potion_asclepian_salve: {
        id: 'potion_asclepian_salve',
        name: 'Asclepian Healing Salve',
        effect: 'Heal 4d8+8 HP and stabilize dying creatures automatically',
        potionType: 'healing',
        rarity: 'rare',
        icon: '⚕️',
        wildcard: true,
        materials: [
            { id: 'medical_herbs', quantity: 4 },
            { id: 'silverleaf', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 400,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6,
        faction: 'Asclepia'
    },

    // Pony Nobility - Aristocratic, elegant, magical
    potion_pony_grace: {
        id: 'potion_pony_grace',
        name: 'Pony Grace Elixir',
        effect: '+10 ft movement and advantage on Dexterity saves for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🐎',
        wildcard: true,
        materials: [
            { id: 'mane_hair', quantity: 2 },
            { id: 'spring_water', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 140,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3,
        faction: 'Pony Nobility'
    },

    // King of Tombs - Undead, necromantic, tomb-themed
    potion_tomb_dust: {
        id: 'potion_tomb_dust',
        name: 'Tomb King\'s Dust',
        effect: 'Animate 1d4 skeletons for 1 hour (requires corpses)',
        potionType: 'utility',
        rarity: 'very_rare',
        icon: '⚰️',
        wildcard: true,
        materials: [
            { id: 'pharaoh_dust', quantity: 2 },
            { id: 'black_onyx_powder', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 850,
        craftTime: 8,
        successChance: 60,
        levelRequirement: 9,
        faction: 'King of Tombs'
    },

    potion_mummy_curse: {
        id: 'potion_mummy_curse',
        name: 'Mummy Curse Elixir',
        effect: 'Target must succeed DC 15 Con save or be cursed (disadvantage on attacks)',
        potionType: 'offensive',
        rarity: 'rare',
        icon: '🧟',
        wildcard: true,
        materials: [
            { id: 'mummy_wrapping', quantity: 2 },
            { id: 'cursed_sand', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 320,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 6,
        faction: 'King of Tombs'
    },

    // Lemuria Conclave - Lost civilization, aquatic
    potion_lemurian_tide: {
        id: 'potion_lemurian_tide',
        name: 'Lemurian Tide Potion',
        effect: 'Breathe water and swim speed 60 ft for 8 hours',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🌊',
        wildcard: true,
        materials: [
            { id: 'ancient_coral', quantity: 2 },
            { id: 'sea_pearl', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 380,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6,
        faction: 'Lemuria Conclave'
    },

    // Empire Man - Human-centric, imperial, disciplined
    potion_imperial_discipline: {
        id: 'potion_imperial_discipline',
        name: 'Imperial Discipline Tonic',
        effect: 'Advantage on Wisdom saves and immunity to charm for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '👤',
        wildcard: true,
        materials: [
            { id: 'iron_will_shard', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 160,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 4,
        faction: 'Empire Man'
    },

    // Grand Cathay - Eastern, dragon-themed, mystical
    potion_cathay_dragon_breath: {
        id: 'potion_cathay_dragon_breath',
        name: 'Cathay Dragon Breath',
        effect: 'Exhale elemental breath (4d6 damage, choose type) in 30-ft line',
        potionType: 'offensive',
        rarity: 'very_rare',
        icon: '🐉',
        wildcard: true,
        materials: [
            { id: 'dragon_scale', quantity: 2 },
            { id: 'elemental_shard', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 900,
        craftTime: 7,
        successChance: 65,
        levelRequirement: 9,
        faction: 'Grand Cathay'
    },

    // Mu Empire - Ancient, psionic, lost knowledge
    potion_mu_psionics: {
        id: 'potion_mu_psionics',
        name: 'Mu Psionic Amplifier',
        effect: 'Cast Detect Thoughts (DC 14) and gain +2 to Int checks for 1 hour',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🧠',
        wildcard: true,
        materials: [
            { id: 'psionic_crystal', quantity: 2 },
            { id: 'ancient_tablet_dust', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 420,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 7,
        faction: 'Mu Empire'
    },

    // Mages' Guild - Arcane, scholarly, magical
    potion_mages_insight: {
        id: 'potion_mages_insight',
        name: 'Mage\'s Insight Draught',
        effect: 'Advantage on Arcana checks and learn one spell property',
        potionType: 'utility',
        rarity: 'uncommon',
        icon: '📚',
        wildcard: true,
        materials: [
            { id: 'arcane_crystal', quantity: 1 },
            { id: 'sage_leaf', quantity: 2 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 180,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 4,
        faction: 'Mages\' Guild'
    },

    // Data Merchant - Information, trade, secrets
    potion_data_extract: {
        id: 'potion_data_extract',
        name: 'Data Extract Serum',
        effect: 'Learn one secret or hidden property of target object',
        potionType: 'utility',
        rarity: 'rare',
        icon: '💾',
        wildcard: true,
        materials: [
            { id: 'data_crystal', quantity: 2 },
            { id: 'truth_herb', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 300,
        craftTime: 4,
        successChance: 75,
        levelRequirement: 5,
        faction: 'Data Merchant'
    },

    // Changeling Hive - Shapeshifting, deceptive
    potion_changeling_shift: {
        id: 'potion_changeling_shift',
        name: 'Changeling Shift Elixir',
        effect: 'Disguise Self spell for 8 hours (cannot change during)',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🦋',
        wildcard: true,
        materials: [
            { id: 'chameleon_skin', quantity: 2 },
            { id: 'illusion_dust', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 350,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6,
        faction: 'Changeling Hive'
    },

    // Cybernetic - Mechanical, enhancement, tech
    potion_cybernetic_enhancement: {
        id: 'potion_cybernetic_enhancement',
        name: 'Cybernetic Enhancement Serum',
        effect: '+2 to one ability score of choice for 1 hour',
        potionType: 'buff',
        rarity: 'very_rare',
        icon: '🔧',
        wildcard: true,
        materials: [
            { id: 'nanite_solution', quantity: 2 },
            { id: 'liquid_iron', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 750,
        craftTime: 7,
        successChance: 65,
        levelRequirement: 9,
        faction: 'Cybernetic'
    },

    // The Onyx Hand - Assassin, shadow, stealth
    potion_onyx_shadow: {
        id: 'potion_onyx_shadow',
        name: 'Onyx Shadow Draught',
        effect: 'Become invisible in darkness for 10 minutes',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🗡️',
        wildcard: true,
        materials: [
            { id: 'shadow_essence', quantity: 3 },
            { id: 'obsidian_dust', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 400,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 7,
        faction: 'The Onyx Hand'
    },

    // Kingdoms Dwarves - Dwarven, mountain, crafting
    potion_dwarven_stamina: {
        id: 'potion_dwarven_stamina',
        name: 'Dwarven Stamina Ale',
        effect: 'Advantage on Con saves and resistance to poison for 8 hours',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '⛏️',
        wildcard: true,
        materials: [
            { id: 'mountain_root', quantity: 2 },
            { id: 'iron_filings', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 140,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3,
        faction: 'Kingdoms Dwarves'
    },

    // Greenskins - Orcish, brutal, warlike
    potion_greenskin_rage: {
        id: 'potion_greenskin_rage',
        name: 'Greenskin Battle Rage',
        effect: 'Gain +2 to attack/damage but -2 AC for 1 minute',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '👹',
        wildcard: true,
        materials: [
            { id: 'war_paint', quantity: 2 },
            { id: 'troll_blood', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 120,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 2,
        faction: 'Greenskins'
    },

    // Jotunheimr - Giant, frost, massive
    potion_jotun_growth: {
        id: 'potion_jotun_growth',
        name: 'Jotun Growth Elixir',
        effect: 'Become Large size and +1d4 damage for 10 minutes',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🧊',
        wildcard: true,
        materials: [
            { id: 'frost_giant_hair', quantity: 2 },
            { id: 'frost_essence', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 380,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6,
        faction: 'Jotunheimr'
    },
    // 1. Potion of Yodeling
    potion_yodeling: {
        id: 'potion_yodeling',
        name: 'Potion of Yodeling',
        effect: 'You must yodel loudly for 1 minute. If interrupted, take 1d4 psychic damage.',
        potionType: 'curse',
        rarity: 'common',
        icon: '🎤',
        wildcard: true,
        materials: [
            { id: 'goat_horn', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 10,
        craftTime: 1,
        successChance: 95, // High success, but who wants this?
        levelRequirement: 1
    },

    // 2. Potion of Temporary Baldness
    potion_temporary_baldness: {
        id: 'potion_temporary_baldness',
        name: 'Potion of Temporary Baldness',
        effect: 'All hair falls out for 1 hour. Regrows normally afterward.',
        potionType: 'cosmetic',
        rarity: 'common',
        icon: '🧔',
        wildcard: true,
        materials: [
            { id: 'rat_tail', quantity: 3 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 5,
        craftTime: 1,
        successChance: 90,
        levelRequirement: 1
    },

    // 3. Potion of Uncontrollable Laughter
    potion_uncontrollable_laughter: {
        id: 'potion_uncontrollable_laughter',
        effect: 'You laugh uncontrollably for 1d4 minutes. Disadvantage on all actions.',
        potionType: 'curse',
        rarity: 'uncommon',
        icon: '😂',
        wildcard: true,
        materials: [
            { id: 'laughing_mushroom', quantity: 2 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 20,
        craftTime: 2,
        successChance: 85,
        levelRequirement: 1
    },

    // 4. Potion of Reverse Gravity (But Only for Your Hair)
    potion_reverse_hair_gravity: {
        id: 'potion_reverse_hair_gravity',
        name: 'Potion of Reverse Hair Gravity',
        effect: 'Your hair floats upward for 1 hour. No other effects.',
        potionType: 'cosmetic',
        rarity: 'common',
        icon: '💇',
        wildcard: true,
        materials: [
            { id: 'feather', quantity: 2 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 15,
        craftTime: 1,
        successChance: 90,
        levelRequirement: 1
    },

    // 5. Potion of Mild Discomfort
    potion_mild_discomfort: {
        id: 'potion_mild_discomfort',
        name: 'Potion of Mild Discomfort',
        effect: 'You feel slightly uncomfortable for 1 hour. No mechanical effect.',
        potionType: 'useless',
        rarity: 'common',
        icon: '😕',
        wildcard: true,
        materials: [
            { id: 'itchweed', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 5,
        craftTime: 1,
        successChance: 95,
        levelRequirement: 1
    },

    // 6. Potion of Temporary Invisibility (But Only to Cats)
    potion_invisible_to_cats: {
        id: 'potion_invisible_to_cats',
        name: 'Potion of Feline Invisibility',
        effect: 'Cats cannot see or hear you for 1 hour. Other creatures are unaffected.',
        potionType: 'useless',
        rarity: 'uncommon',
        icon: '🐱',
        wildcard: true,
        materials: [
            { id: 'catnip', quantity: 3 },
            { id: 'shadow_essence', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 50,
        craftTime: 2,
        successChance: 80,
        levelRequirement: 2
    },

    // 7. Potion of Random Sneeze
    potion_random_sneeze: {
        id: 'potion_random_sneeze',
        name: 'Potion of Random Sneeze',
        effect: 'You sneeze violently at the worst possible moment (DM’s discretion).',
        potionType: 'curse',
        rarity: 'common',
        icon: '🤧',
        wildcard: true,
        materials: [
            { id: 'pepper', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 10,
        craftTime: 1,
        successChance: 90,
        levelRequirement: 1
    },

    // 8. Potion of Temporary Colorblindness
    potion_temporary_colorblindness: {
        id: 'potion_temporary_colorblindness',
        name: 'Potion of Temporary Colorblindness',
        effect: 'You see in grayscale for 1 hour. No mechanical effect.',
        potionType: 'cosmetic',
        rarity: 'common',
        icon: '🎨',
        wildcard: true,
        materials: [
            { id: 'charcoal', quantity: 2 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 20,
        craftTime: 1,
        successChance: 90,
        levelRequirement: 1
    },

    // 9. Potion of Uncontrollable Dancing
    potion_uncontrollable_dancing: {
        id: 'potion_uncontrollable_dancing',
        name: 'Potion of Uncontrollable Dancing',
        effect: 'You must dance for 1d4 minutes. Disadvantage on all actions.',
        potionType: 'curse',
        rarity: 'uncommon',
        icon: '💃',
        wildcard: true,
        materials: [
            { id: 'dance_pepper', quantity: 2 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 30,
        craftTime: 2,
        successChance: 80,
        levelRequirement: 1
    },

    // 10. Potion of Temporary Glow-in-the-Dark Skin
    potion_glow_in_the_dark_skin: {
        id: 'potion_glow_in_the_dark_skin',
        name: 'Potion of Glow-in-the-Dark Skin',
        effect: 'Your skin glows faintly for 1 hour. No mechanical effect.',
        potionType: 'cosmetic',
        rarity: 'common',
        icon: '🔦',
        wildcard: true,
        materials: [
            { id: 'glowshroom', quantity: 2 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 25,
        craftTime: 1,
        successChance: 90,
        levelRequirement: 1
    },

    // 11. Potion of Random Animal Noise
    potion_random_animal_noise: {
        id: 'potion_random_animal_noise',
        name: 'Potion of Random Animal Noise',
        effect: 'You make a random animal noise every 1d4 minutes for 1 hour.',
        potionType: 'curse',
        rarity: 'common',
        icon: '🐓',
        wildcard: true,
        materials: [
            { id: 'animal_feather', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 15,
        craftTime: 1,
        successChance: 90,
        levelRequirement: 1
    },

    // 12. Potion of Temporary Gigantism (But Only for Your Nose)
    potion_gigantic_nose: {
        id: 'potion_gigantic_nose',
        name: 'Potion of Gigantic Nose',
        effect: 'Your nose grows to comical size for 1 hour. Disadvantage on Perception checks involving smell.',
        potionType: 'curse',
        rarity: 'uncommon',
        icon: '👃',
        wildcard: true,
        materials: [
            { id: 'giant_bone_powder', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 40,
        craftTime: 2,
        successChance: 85,
        levelRequirement: 2
    },

    // 13. Potion of Temporary Amnesia (Last 5 Minutes)
    potion_temporary_amnesia: {
        id: 'potion_temporary_amnesia',
        name: 'Potion of Temporary Amnesia',
        effect: 'You forget the last 5 minutes of your life. No mechanical effect (but chaos ensues).',
        potionType: 'curse',
        rarity: 'rare',
        icon: '🤯',
        wildcard: true,
        materials: [
            { id: 'forget_me_not_petal', quantity: 3 },
            { id: 'moonwell_water', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 100,
        craftTime: 3,
        successChance: 70,
        levelRequirement: 3
    },

    // 14. Potion of Uncontrollable Hiccups
    potion_uncontrollable_hiccups: {
        id: 'potion_uncontrollable_hiccups',
        name: 'Potion of Uncontrollable Hiccups',
        effect: 'You hiccup uncontrollably for 1d4 minutes. Disadvantage on Stealth checks.',
        potionType: 'curse',
        rarity: 'common',
        icon: '🤢',
        wildcard: true,
        materials: [
            { id: 'vinegar', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 10,
        craftTime: 1,
        successChance: 90,
        levelRequirement: 1
    },

    // 15. Potion of Temporary Voice Change (Squeaky or Deep)
    potion_voice_change: {
        id: 'potion_voice_change',
        name: 'Potion of Voice Change',
        effect: 'Your voice becomes either squeaky or deep for 1 hour. No mechanical effect.',
        potionType: 'cosmetic',
        rarity: 'common',
        icon: '🎤',
        wildcard: true,
        materials: [
            { id: 'frog_tongue', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 20,
        craftTime: 1,
        successChance: 90,
        levelRequirement: 1
    },

    // 16. Potion of Random Teleport (1d100 Feet in Random Direction)
    potion_random_teleport: {
        id: 'potion_random_teleport',
        name: 'Potion of Random Teleportation',
        effect: 'Teleport 1d100 feet in a random direction. May land in dangerous terrain.',
        potionType: 'dangerous',
        rarity: 'rare',
        icon: '🌀',
        wildcard: true,
        materials: [
            { id: 'chaos_essence', quantity: 1 },
            { id: 'quicksilver', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 200,
        craftTime: 4,
        successChance: 50, // High failure rate!
        levelRequirement: 5
    },

    // 17. Potion of Temporary Invisibility (But Only to Yourself)
    potion_invisible_to_self: {
        id: 'potion_invisible_to_self',
        name: 'Potion of Self-Invisibility',
        effect: 'You cannot see yourself for 1 hour. Disadvantage on attacks and Perception checks.',
        potionType: 'curse',
        rarity: 'uncommon',
        icon: '👻',
        wildcard: true,
        materials: [
            { id: 'shadow_essence', quantity: 1 },
            { id: 'mirror_shard', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 60,
        craftTime: 2,
        successChance: 75,
        levelRequirement: 2
    },

    // 18. Potion of Temporary Weight Gain (50 lbs)
    potion_temporary_weight_gain: {
        id: 'potion_temporary_weight_gain',
        name: 'Potion of Temporary Weight Gain',
        effect: 'You gain 50 lbs for 1 hour. Speed reduced by 10 ft.',
        potionType: 'curse',
        rarity: 'uncommon',
        icon: '🏋️',
        wildcard: true,
        materials: [
            { id: 'lead_ingot', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 40,
        craftTime: 2,
        successChance: 80,
        levelRequirement: 2
    },

    // 19. Potion of Random Polymorph (Into a Random Tiny Creature)
    potion_random_polymorph: {
        id: 'potion_random_polymorph',
        name: 'Potion of Random Polymorph',
        effect: 'You turn into a random tiny creature (mouse, frog, etc.) for 1d4 hours. Retain INT, WIS, CHA.',
        potionType: 'dangerous',
        rarity: 'rare',
        icon: '🐭',
        wildcard: true,
        materials: [
            { id: 'shapeshifter_essence', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 300,
        craftTime: 5,
        successChance: 40, // Very high failure rate!
        levelRequirement: 6
    },

    // 20. Potion of Ultimate Uselessness
    potion_ultimate_uselessness: {
        id: 'potion_ultimate_uselessness',
        name: 'Potion of Ultimate Uselessness',
        effect: 'Absolutely nothing happens. No effect. Ever.',
        potionType: 'useless',
        rarity: 'legendary',
        icon: '❓',
        wildcard: true,
        materials: [
            { id: 'nothingness_essence', quantity: 1 },
            { id: 'void_crystal', quantity: 1 },
            { id: 'dragon_glass_vial', quantity: 1 }
        ],
        goldCost: 1000,
        craftTime: 10,
        successChance: 10, // Almost guaranteed to fail!
        levelRequirement: 10
    },
    potion_slight_levitation: {
        id: 'potion_slight_levitation',
        name: 'Potion of Slight Levitation',
        effect: 'You float 1 inch off the ground. Uncontrollable.',
        potionType: 'useless',
        rarity: 'common',
        icon: '🪶',
        wildcard: true,
        failChance: 0.10, // 10% chance to just fizzle
        failEffect: 'You feel slightly heavier for an hour.',
        materials: [{ id: 'feather', quantity: 1 }, { id: 'spring_water', quantity: 1 }],
        goldCost: 10,
        craftTime: 1,
        successChance: 95,
        levelRequirement: 1
    },

    potion_unseen_scribe: {
        id: 'potion_unseen_scribe',
        name: 'Potion of the Unseen Scribe',
        effect: 'A ghostly hand appears and writes down the next sentence you speak. It then vanishes.',
        potionType: 'useless',
        rarity: 'common',
        icon: '✍️',
        wildcard: true,
        failChance: 0.25,
        failEffect: 'The hand appears, writes "I AM A FRAUD", and points at you before vanishing.',
        materials: [{ id: 'inkroot', quantity: 1 }, { id: 'empty_vial', quantity: 1 }],
        goldCost: 25,
        craftTime: 1,
        successChance: 90,
        levelRequirement: 1
    },

    potion_dramatic_hair: {
        id: 'potion_dramatic_hair',
        name: 'Potion of Dramatic Hair',
        effect: 'Your hair grows 3 feet longer instantly, flowing as if in a wind that only affects you. Lasts 10 minutes.',
        potionType: 'useless',
        rarity: 'common',
        icon: '💇',
        wildcard: true,
        failChance: 0.20,
        failEffect: 'Your hair falls out completely. It grows back in 1d4 hours.',
        materials: [{ id: 'healing_herbs', quantity: 1 }, { id: 'spring_water', quantity: 1 }],
        goldCost: 30,
        craftTime: 2,
        successChance: 85,
        levelRequirement: 1
    },

    // --- Weird and Disorienting ---
    potion_synesthesia: {
        id: 'potion_synesthesia',
        name: 'Potion of Synesthesia',
        effect: 'For 1 hour, you can see sounds as colored waves and hear colors as faint chimes. Disadvantage on Perception checks.',
        potionType: 'weird',
        rarity: 'uncommon',
        icon: '🌈',
        wildcard: true,
        failChance: 0.50, // VERY high fail rate
        failEffect: 'Your senses are overwhelmed. You are Stunned for 1 round and take 1d4 psychic damage.',
        materials: [{ id: 'seer_orb_shard', quantity: 1 }, { id: 'shadow_essence', quantity: 1 }],
        goldCost: 150,
        craftTime: 4,
        successChance: 60,
        levelRequirement: 4
    },

    potion_liquid_courage: {
        id: 'potion_liquid_courage',
        name: 'Potion of Liquid Courage',
        effect: 'You feel incredibly brave and are immune to the Frightened condition for 10 minutes.',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🦁',
        wildcard: true,
        failChance: 0.35,
        failEffect: 'You gain the opposite effect: you become convinced you are a small, helpless mouse. You are Frightened of everything for 1 hour.',
        materials: [{ id: 'lion_heart_essence', quantity: 1 }, { id: 'empty_vial', quantity: 1 }],
        goldCost: 200,
        craftTime: 3,
        successChance: 75,
        levelRequirement: 3
    },

    potion_polymorph_self_sabotage: {
        id: 'potion_polymorph_self_sabotage',
        name: 'Potion of Polymorph: Self-Sabotage',
        effect: 'You turn into a sheep. You can only bleat. Lasts 1 minute.',
        potionType: 'weird',
        rarity: 'rare',
        icon: '🐑',
        wildcard: true,
        failChance: 0.60,
        failEffect: 'You turn into a sheep, but you retain your full intelligence and can speak. You are just a sheep. Lasts 1 hour.',
        materials: [{ id: 'sheep_wool', quantity: 3 }, { id: 'moonwell_water', quantity: 1 }],
        goldCost: 400,
        craftTime: 5,
        successChance: 50,
        levelRequirement: 7
    },

    // --- Actively Annoying & Useless ---
    potion_sticky_fingers: {
        id: 'potion_sticky_fingers',
        name: 'Potion of Sticky Fingers',
        effect: 'Anything you try to pick up sticks to your hand for 1 minute. Dropping it requires an action.',
        potionType: 'curse',
        rarity: 'uncommon',
        icon: '🖐️',
        wildcard: true,
        failChance: 0.15,
        failEffect: 'The effect targets the person closest to you instead.',
        materials: [{ id: 'honey', quantity: 2 }, { id: 'sap', quantity: 1 }],
        goldCost: 50,
        craftTime: 2,
        successChance: 80,
        levelRequirement: 2
    },

    potion_vocal_dissonance: {
        id: 'potion_vocal_dissonance',
        name: 'Potion of Vocal Dissonance',
        effect: 'For 1 hour, you speak in a completely different, random accent (e.g., pirate, noble, goblin) every time you talk.',
        potionType: 'useless',
        rarity: 'common',
        icon: '🎭',
        wildcard: true,
        failChance: 0.25,
        failEffect: 'You can only speak in rhyming couplets for 1 hour.',
        materials: [{ id: 'faerie_dust', quantity: 1 }, { id: 'spring_water', quantity: 1 }],
        goldCost: 40,
        craftTime: 2,
        successChance: 85,
        levelRequirement: 2
    },

    potion_gluttony: {
        id: 'potion_gluttony',
        name: 'Potion of Gluttony',
        effect: 'You are filled with an insatiable hunger. You must eat the equivalent of a full ration immediately or take 1d4 psychic damage per hour until you do.',
        potionType: 'curse',
        rarity: 'common',
        icon: '🍔',
        wildcard: true,
        failChance: 0.10,
        failEffect: 'You feel nauseous and can\'t eat anything for 8 hours.',
        materials: [{ id: 'mushroom', quantity: 3 }, { id: 'cheese', quantity: 1 }],
        goldCost: 15,
        craftTime: 1,
        successChance: 90,
        levelRequirement: 1
    },

    // --- Dangerously Unreliable ---
    potion_random_teleport_sickness: {
        id: 'potion_random_teleport_sickness',
        name: 'Potion of Random Teleportation Sickness',
        effect: 'Teleport 30 ft in a random direction. You arrive nauseated (-2 to attack rolls) for 1 hour.',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🤢',
        wildcard: true,
        failChance: 0.75, // Mostly fails
        failEffect: 'You teleport 30 ft in a random direction and arrive nauseated AND poisoned for 1 hour.',
        materials: [{ id: 'quicksilver', quantity: 1 }, { id: 'void_crystal', quantity: 1 }],
        goldCost: 500,
        craftTime: 6,
        successChance: 40,
        levelRequirement: 8
    },

    potion_heroic_failure: {
        id: 'potion_heroic_failure',
        name: 'Potion of Heroic Failure',
        effect: 'Your next attack or spell automatically fails in the most dramatic way possible (e.g., sword flies out of your hand, spell fizzles in your face).',
        potionType: 'curse',
        rarity: 'uncommon',
        icon: '💥',
        wildcard: true,
        failChance: 0.50,
        failEffect: 'The potion works perfectly. Your next attack is a critical hit.',
        materials: [{ id: 'jester_mushroom', quantity: 1 }, { id: 'empty_vial', quantity: 1 }],
        goldCost: 100,
        craftTime: 3,
        successChance: 65,
        levelRequirement: 3
    },

    potion_chaotic_mutation: {
        id: 'potion_chaotic_mutation',
        name: 'Potion of Chaotic Mutation',
        effect: 'Roll on the Wild Magic Surge table. You are the source.',
        potionType: 'weird',
        rarity: 'very_rare',
        icon: '🎲',
        wildcard: true,
        failChance: 0.80,
        failEffect: 'You roll on the Wild Magic Surge table TWICE.',
        materials: [{ id: 'warpstone_shard', quantity: 1 }, { id: 'madcap_mushroom', quantity: 3 }],
        goldCost: 1500,
        craftTime: 8,
        successChance: 30,
        levelRequirement: 12
    },

    potion_the_stubborn_goat: {
        id: 'potion_the_stubborn_goat',
        name: 'Potion of the Stubborn Goat',
        effect: 'You gain advantage on saving throws against being moved or forced to do something you don\'t want to. Lasts 1 minute.',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🐐',
        wildcard: true,
        failChance: 0.65,
        failEffect: 'You become extremely stubborn. You must succeed a DC 15 WIS save to follow any instruction, even from yourself.',
        materials: [{ id: 'goat_cheese', quantity: 1 }, { id: 'troll_fat', quantity: 1 }],
        goldCost: 350,
        craftTime: 5,
        successChance: 55,
        levelRequirement: 6
    },

    potion_temporary_allergy: {
        id: 'potion_temporary_allergy',
        name: 'Potion of Temporary Allergy',
        effect: 'You gain a random, minor allergy (e.g., to metal, sunlight, vowels) for 1 hour. Touching/being near it causes a harmless but intense itch.',
        potionType: 'curse',
        rarity: 'common',
        icon: '🤧',
        wildcard: true,
        failChance: 0.30,
        failEffect: 'The allergy is not minor. It\'s to air. You begin suffocating.',
        materials: [{ id: 'nightshade', quantity: 1 }, { id: 'pollen', quantity: 2 }],
        goldCost: 75,
        craftTime: 2,
        successChance: 80,
        levelRequirement: 2
    },

    potion_reverse_gravity_boots: {
        id: 'potion_reverse_gravity_boots',
        name: 'Potion of Reverse-Gravity Boots (Liquid Form)',
        effect: 'Drink to gain the effect of Reverse Gravity, but only for your feet. You must make a DC 13 DEX save each round or fall on your head.',
        potionType: 'weird',
        rarity: 'very_rare',
        icon: '🦶',
        wildcard: true,
        failChance: 0.90,
        failEffect: 'The effect is permanent.',
        materials: [{ id: 'quills_of_the_sky_eel', quantity: 2 }, { id: 'storm_essence', quantity: 2 }],
        goldCost: 2000,
        craftTime: 10,
        successChance: 25,
        levelRequirement: 14
    },

    potion_empathic_link_to_slug: {
        id: 'potion_empathic_link_to_slug',
        name: 'Potion of Empathic Link to a Slug',
        effect: 'You are mentally linked to a random slug within 100 ft. You experience its simple, slimy existence. Lasts 1 hour.',
        potionType: 'useless',
        rarity: 'common',
        icon: '🐌',
        wildcard: true,
        failChance: 0.40,
        failEffect: 'The link is permanent. You now have the INT of a slug (3). A Wish spell can fix this.',
        materials: [{ id: 'slime_goo', quantity: 2 }, { id: 'spring_water', quantity: 1 }],
        goldCost: 60,
        craftTime: 2,
        successChance: 70,
        levelRequirement: 1
    },

    potion_inconvenient_invisibility: {
        id: 'potion_inconvenient_invisibility',
        name: 'Potion of Inconvenient Invisibility',
        effect: 'You become invisible, but you cannot hold or wear anything. It all becomes visible and clatters to the ground.',
        potionType: 'curse',
        rarity: 'rare',
        icon: '👻',
        wildcard: true,
        failChance: 0.50,
        failEffect: 'You become invisible, and so does all your gear. You are now naked and invisible.',
        materials: [{ id: 'shadow_essence', quantity: 2 }, { id: 'chittering_chitin', quantity: 1 }],
        goldCost: 450,
        craftTime: 6,
        successChance: 50,
        levelRequirement: 7
    },

    potion_babble: {
        id: 'potion_babble',
        name: 'Potion of Babble',
        effect: 'You can speak and understand any language fluently for 1 hour.',
        potionType: 'utility',
        rarity: 'uncommon',
        icon: '🗣️',
        wildcard: true,
        failChance: 0.45,
        failEffect: 'You can only speak in a dead language (e.g., Abyssal, Celestial, Draconic) that no one else understands.',
        materials: [{ id: 'sage_leaf', quantity: 3 }, { id: 'moonwell_water', quantity: 1 }],
        goldCost: 180,
        craftTime: 3,
        successChance: 70,
        levelRequirement: 4
    },

    potion_phantasmal_itch: {
        id: 'potion_phantasmal_itch',
        name: 'Potion of Phantasmal Itch',
        effect: 'You feel an intense, maddening itch on your back that you can never quite scratch. You have disadvantage on all concentration checks for 10 minutes.',
        potionType: 'curse',
        rarity: 'uncommon',
        icon: '🤬',
        wildcard: true,
        failChance: 0.20,
        failEffect: 'The itch is real, and scratching it deals 1d4 slashing damage to yourself.',
        materials: [{ id: 'spirit_nettle', quantity: 2 }, { id: 'empty_vial', quantity: 1 }],
        goldCost: 120,
        craftTime: 3,
        successChance: 80,
        levelRequirement: 3
    },

    potion_compulsive_honesty: {
        id: 'potion_compulsive_honesty',
        name: 'Potion of Compulsive Honesty',
        effect: 'For 1 hour, you must answer any question asked of you truthfully.',
        potionType: 'useless',
        rarity: 'uncommon',
        icon: '🤥',
        wildcard: true,
        failChance: 0.30,
        failEffect: 'You are compelled to volunteer the most embarrassing or incriminating truth you know.',
        materials: [{ id: 'truth_serum_flower', quantity: 1 }, { id: 'spring_water', quantity: 1 }],
        goldCost: 220,
        craftTime: 4,
        successChance: 75,
        levelRequirement: 4
    },

    potion_slow_fall_feather: {
        id: 'potion_slow_fall_feather',
        name: 'Potion of Slow Fall (Feather)',
        effect: 'You become as light as a feather. You take no falling damage, but you are blown around by even the slightest breeze.',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🪶',
        wildcard: true,
        failChance: 0.55,
        failEffect: 'You become as heavy as a boulder. You take double falling damage.',
        materials: [{ id: 'griffon_feather', quantity: 1 }, { id: 'lead_dust', quantity: 1 }],
        goldCost: 380,
        craftTime: 5,
        successChance: 60,
        levelRequirement: 6
    },

    potion_scent_of_fear: {
        id: 'potion_scent_of_fear',
        name: 'Potion of Scent of Fear',
        effect: 'You smell faintly of cheese. All mice and rats within 30 ft are friendly to you for 1 hour.',
        potionType: 'useless',
        rarity: 'common',
        icon: '🧀',
        wildcard: true,
        failChance: 0.25,
        failEffect: 'You smell like rot. All creatures within 30 ft have disadvantage on Perception checks due to the stench.',
        materials: [{ id: 'stinky_cheese', quantity: 1 }, { id: 'spring_water', quantity: 1 }],
        goldCost: 35,
        craftTime: 1,
        successChance: 85,
        levelRequirement: 1
    },

    potion_dramatic_pause: {
        id: 'potion_dramatic_pause',
        name: 'Potion of the Dramatic Pause',
        effect: 'Time seems to slow for you. You gain +5 to initiative. Lasts 1 minute.',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '#',
        wildcard: true,
        failChance: 0.40,
        failEffect: 'Time speeds up for you. You have -5 to initiative and can only take one action per round.',
        materials: [{ id: 'sand_from_the_hourglass_of_time', quantity: 1 }, { id: 'quicksilver', quantity: 1 }],
        goldCost: 250,
        craftTime: 4,
        successChance: 70,
        levelRequirement: 5
    },

    potion_uncontrollable_laughter: {
        id: 'potion_uncontrollable_laughter',
        name: 'Potion of Uncontrollable Laughter',
        effect: 'You are overcome with laughter for 1 minute. You are Incapacitated and Prone.',
        potionType: 'curse',
        rarity: 'uncommon',
        icon: '😂',
        wildcard: true,
        failChance: 0.35,
        failEffect: 'The laughter is so infectious. All creatures within 10 ft who can see/hear you must make a DC 13 WIS save or join you.',
        materials: [{ id: 'jester_mushroom', quantity: 2 }, { id: 'honey', quantity: 1 }],
        goldCost: 150,
        craftTime: 3,
        successChance: 75,
        levelRequirement: 3
    },

    potion_somatic_shuffle: {
        id: 'potion_somatic_shuffle',
        name: 'Potion of Somatic Shuffle',
        effect: 'You can only communicate through interpretive dance for 1 hour.',
        potionType: 'useless',
        rarity: 'common',
        icon: '🕺',
        wildcard: true,
        failChance: 0.20,
        failEffect: 'The dance is so compelling. All who watch must make a DC 10 WIS save or join in.',
        materials: [{ id: 'faerie_dust', quantity: 1 }, { id: 'music_box_part', quantity: 1 }],
        goldCost: 50,
        craftTime: 2,
        successChance: 85,
        levelRequirement: 2
    },

    potion_petrification_lite: {
        id: 'potion_petrification_lite',
        name: 'Potion of Petrification (Lite)',
        effect: 'One of your limbs (roll randomly) turns to stone for 1 hour. You have disadvantage on all physical actions.',
        potionType: 'curse',
        rarity: 'rare',
        icon: '🗿',
        wildcard: true,
        failChance: 0.60,
        failEffect: 'Your whole body turns to stone. You need a Greater Restoration spell or similar magic.',
        materials: [{ id: 'basilisk_scale', quantity: 1 }, { id: 'earth_essence', quantity: 2 }],
        goldCost: 600,
        craftTime: 7,
        successChance: 45,
        levelRequirement: 9
    },

    potion_voice_of_the_ancients: {
        id: 'potion_voice_of_the_ancients',
        name: 'Potion of the Voice of the Ancients',
        effect: 'Your voice sounds incredibly wise and authoritative. You gain +5 to Persuasion checks for 10 minutes.',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '📜',
        wildcard: true,
        failChance: 0.50,
        failEffect: 'Your voice sounds like a squeaky cartoon character. You have disadvantage on all Charisma-based checks.',
        materials: [{ id: 'scroll_fragment', quantity: 1 }, { id: 'owl_eye_extract', quantity: 1 }],
        goldCost: 200,
        craftTime: 4,
        successChance: 65,
        levelRequirement: 4
    },

    potion_berserker_rage_lite: {
        id: 'potion_berserker_rage_lite',
        name: 'Potion of Berserker Rage (Lite)',
        effect: 'You enter a rage. You have advantage on melee attacks, but you must attack the nearest creature each turn. Lasts 1 minute.',
        potionType: 'buff',
        rarity: 'rare',
        icon: '😤',
        wildcard: true,
        failChance: 0.45,
        failEffect: 'You enter a rage, but you are confused for the duration.',
        materials: [{ id: 'giant_bone_powder', quantity: 2 }, { id: 'troll_blood', quantity: 1 }],
        goldCost: 400,
        craftTime: 5,
        successChance: 60,
        levelRequirement: 7
    },    
  potion_supreme_healing: {
    id: 'potion_supreme_healing',
    name: 'Potion of Supreme Healing',
    effect: 'Restore 10d4+20 HP',
    potionType: 'healing',
    rarity: 'very_rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'diamond_vial', quantity: 1 },
      { id: 'elven_tears', quantity: 1 },
      { id: 'ancient_life_root', quantity: 2 },
      { id: 'phoenix_feather', quantity: 1 }
    ],
    goldCost: 2000,
    craftTime: 24,
    successChance: 60,
    levelRequirement: 13
  },

  potion_invisibility: {
    id: 'potion_invisibility',
    name: 'Potion of Invisibility',
    effect: 'Become invisible for 1 hour',
    potionType: 'utility',
    rarity: 'uncommon',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'ghost_mushroom', quantity: 2 },
      { id: 'shadow_essence', quantity: 1 }
    ],
    goldCost: 180,
    craftTime: 6,
    successChance: 80,
    levelRequirement: 5
  },

  potion_gaseous_form: {
    id: 'potion_gaseous_form',
    name: 'Potion of Gaseous Form',
    effect: 'Turn into mist for 1 hour',
    potionType: 'utility',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'air_elemental_dust', quantity: 2 },
      { id: 'smoke_crystal', quantity: 1 }
    ],
    goldCost: 500,
    craftTime: 10,
    successChance: 70,
    levelRequirement: 9
  },

  potion_flying: {
    id: 'potion_flying',
    name: 'Potion of Flying',
    effect: 'Gain fly speed 60 ft for 1 hour',
    potionType: 'buff',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'roc_feather', quantity: 3 },
      { id: 'cloud_essence', quantity: 1 }
    ],
    goldCost: 600,
    craftTime: 12,
    successChance: 70,
    levelRequirement: 10
  },

  potion_water_breathing: {
    id: 'potion_water_breathing',
    name: 'Potion of Water Breathing',
    effect: 'Breathe underwater for 8 hours',
    potionType: 'utility',
    rarity: 'uncommon',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'coral_extract', quantity: 2 },
      { id: 'mermaid_scale', quantity: 1 }
    ],
    goldCost: 120,
    craftTime: 4,
    successChance: 85,
    levelRequirement: 3
  },

  potion_climbing: {
    id: 'potion_climbing',
    name: 'Potion of Climbing',
    effect: 'Climb speed = walk speed + advantage on climb checks for 1 hour',
    potionType: 'buff',
    rarity: 'common',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'empty_vial', quantity: 1 },
      { id: 'spider_silk', quantity: 2 },
      { id: 'mountain_goat_hoof', quantity: 1 }
    ],
    goldCost: 60,
    craftTime: 3,
    successChance: 90,
    levelRequirement: 2
  },

  potion_giant_strength: {
    id: 'potion_giant_strength',
    name: 'Potion of Hill Giant Strength',
    effect: 'Strength 21 for 1 hour',
    potionType: 'buff',
    rarity: 'uncommon',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'giant_toenail', quantity: 1 },
      { id: 'troll_blood', quantity: 1 }
    ],
    goldCost: 200,
    craftTime: 6,
    successChance: 80,
    levelRequirement: 5
  },

  potion_storm_giant_strength: {
    id: 'potion_storm_giant_strength',
    name: 'Potion of Storm Giant Strength',
    effect: 'Strength 29 for 1 hour',
    potionType: 'buff',
    rarity: 'legendary',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'diamond_vial', quantity: 1 },
      { id: 'storm_giant_heart', quantity: 1 },
      { id: 'thunder_essence', quantity: 2 }
    ],
    goldCost: 10000,
    craftTime: 48,
    successChance: 40,
    levelRequirement: 17
  },

  potion_speed: {
    id: 'potion_speed',
    name: 'Potion of Speed',
    effect: 'Haste effect for 1 minute',
    potionType: 'buff',
    rarity: 'very_rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'cheetah_blood', quantity: 2 },
      { id: 'wind_essence', quantity: 1 }
    ],
    goldCost: 1500,
    craftTime: 16,
    successChance: 65,
    levelRequirement: 11
  },

  potion_mind_reading: {
    id: 'potion_mind_reading',
    name: 'Potion of Mind Reading',
    effect: 'Detect thoughts for 10 minutes',
    potionType: 'utility',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'psionic_crystal', quantity: 1 },
      { id: 'silverleaf', quantity: 3 }
    ],
    goldCost: 400,
    craftTime: 8,
    successChance: 75,
    levelRequirement: 8
  },

  potion_animal_friendship: {
    id: 'potion_animal_friendship',
    name: 'Potion of Animal Friendship',
    effect: 'Charm beasts for 24 hours',
    potionType: 'utility',
    rarity: 'common',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'empty_vial', quantity: 1 },
      { id: 'honey', quantity: 2 },
      { id: 'peacebloom', quantity: 2 }
    ],
    goldCost: 50,
    craftTime: 2,
    successChance: 95,
    levelRequirement: 1
  },

  potion_heroism: {
    id: 'potion_heroism',
    name: 'Potion of Heroism',
    effect: 'Bless + 10 temp HP for 1 hour',
    potionType: 'buff',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'lion_heart', quantity: 1 },
      { id: 'gold_clover', quantity: 2 }
    ],
    goldCost: 450,
    craftTime: 8,
    successChance: 75,
    levelRequirement: 7
  },

  potion_invulnerability: {
    id: 'potion_invulnerability',
    name: 'Potion of Invulnerability',
    effect: 'Resistance to all damage for 1 minute',
    potionType: 'buff',
    rarity: 'legendary',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'diamond_vial', quantity: 1 },
      { id: 'adamantite_powder', quantity: 2 },
      { id: 'dragon_scale', quantity: 1 }
    ],
    goldCost: 15000,
    craftTime: 72,
    successChance: 35,
    levelRequirement: 18
  },

  potion_longevity: {
    id: 'potion_longevity',
    name: 'Potion of Longevity',
    effect: 'Reduce apparent age by 1d10 years (max 13)',
    potionType: 'utility',
    rarity: 'very_rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'ancient_treant_sap', quantity: 1 },
      { id: 'phoenix_feather', quantity: 1 }
    ],
    goldCost: 8000,
    craftTime: 48,
    successChance: 50,
    levelRequirement: 15
  },

  potion_poison: {
    id: 'potion_poison',
    name: 'Potion of Poison',
    effect: '6d6 poison damage (CON save for half)',
    potionType: 'debuff',
    rarity: 'uncommon',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'death_cap', quantity: 3 },
      { id: 'viper_venom', quantity: 1 }
    ],
    goldCost: 200,
    craftTime: 4,
    successChance: 80,
    levelRequirement: 4
  },

  potion_paralysis: {
    id: 'potion_paralysis',
    name: 'Potion of Paralysis',
    effect: 'Paralyzed for 1 minute (CON save each turn)',
    potionType: 'debuff',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'ghoul_saliva', quantity: 2 },
      { id: 'nightshade', quantity: 3 }
    ],
    goldCost: 600,
    craftTime: 10,
    successChance: 70,
    levelRequirement: 9
  },

  potion_growth: {
    id: 'potion_growth',
    name: 'Potion of Growth',
    effect: 'Become Large size for 8 hours',
    potionType: 'buff',
    rarity: 'uncommon',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'giant_mushroom', quantity: 3 },
      { id: 'earth_elemental_core', quantity: 1 }
    ],
    goldCost: 250,
    craftTime: 6,
    successChance: 80,
    levelRequirement: 5
  },

  potion_diminition: {
    id: 'potion_diminition',
    name: 'Potion of Diminution',
    effect: 'Become Tiny size for 8 hours',
    potionType: 'utility',
    rarity: 'uncommon',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'pixie_dust', quantity: 2 },
      { id: 'shrinkroot', quantity: 2 }
    ],
    goldCost: 200,
    craftTime: 6,
    successChance: 85,
    levelRequirement: 4
  },

  potion_stone_skin: {
    id: 'potion_stone_skin',
    name: 'Potion of Stone Skin',
    effect: 'Resistance to non-magical physical damage for 1 hour',
    potionType: 'buff',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'gorgon_blood', quantity: 1 },
      { id: 'basilisk_scale', quantity: 1 }
    ],
    goldCost: 800,
    craftTime: 12,
    successChance: 70,
    levelRequirement: 10
  },

  potion_thunder_resistance: {
    id: 'potion_thunder_resistance',
    name: 'Potion of Thunder Resistance',
    effect: 'Resistance to thunder damage for 1 hour',
    potionType: 'buff',
    rarity: 'uncommon',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'thunder_essence', quantity: 1 },
      { id: 'moonwell_water', quantity: 1 }
    ],
    goldCost: 150,
    craftTime: 4,
    successChance: 80,
    levelRequirement: 4
  },

  potion_acid_resistance: {
    id: 'potion_acid_resistance',
    name: 'Potion of Acid Resistance',
    effect: 'Resistance to acid damage for 1 hour',
    potionType: 'buff',
    rarity: 'uncommon',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'black_dragon_blood', quantity: 1 },
      { id: 'moonwell_water', quantity: 1 }
    ],
    goldCost: 180,
    craftTime: 5,
    successChance: 78,
    levelRequirement: 5
  },

  potion_necrotic_resistance: {
    id: 'potion_necrotic_resistance',
    name: 'Potion of Necrotic Resistance',
    effect: 'Resistance to necrotic damage for 1 hour',
    potionType: 'buff',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'lich_dust', quantity: 1 },
      { id: 'holy_water', quantity: 1 }
    ],
    goldCost: 500,
    craftTime: 10,
    successChance: 70,
    levelRequirement: 9
  },

  potion_radiant_resistance: {
    id: 'potion_radiant_resistance',
    name: 'Potion of Radiant Resistance',
    effect: 'Resistance to radiant damage for 1 hour',
    potionType: 'buff',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'angel_feather', quantity: 1 },
      { id: 'sunlight_extract', quantity: 1 }
    ],
    goldCost: 600,
    craftTime: 10,
    successChance: 70,
    levelRequirement: 10
  },

  potion_psychic_resistance: {
    id: 'potion_psychic_resistance',
    name: 'Potion of Psychic Resistance',
    effect: 'Resistance to psychic damage for 1 hour',
    potionType: 'buff',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'mind_flayer_tentacle', quantity: 1 },
      { id: 'psionic_shard', quantity: 1 }
    ],
    goldCost: 700,
    craftTime: 12,
    successChance: 68,
    levelRequirement: 11
  },

  potion_force_resistance: {
    id: 'potion_force_resistance',
    name: 'Potion of Force Resistance',
    effect: 'Resistance to force damage for 1 hour',
    potionType: 'buff',
    rarity: 'very_rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'ethereal_essence', quantity: 2 },
      { id: 'spellweaver_silk', quantity: 1 }
    ],
    goldCost: 1200,
    craftTime: 16,
    successChance: 60,
    levelRequirement: 13
  },

  potion_glibness: {
    id: 'potion_glibness',
    name: 'Potion of Glibness',
    effect: 'Auto-succeed Deception checks for 1 hour',
    potionType: 'utility',
    rarity: 'very_rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'silver_tongue', quantity: 1 },
      { id: 'feywine', quantity: 1 }
    ],
    goldCost: 2000,
    craftTime: 24,
    successChance: 55,
    levelRequirement: 14
  },

  potion_comprehend_languages: {
    id: 'potion_comprehend_languages',
    name: 'Potion of Comprehend Languages',
    effect: 'Understand all languages for 1 hour',
    potionType: 'utility',
    rarity: 'uncommon',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'babel_fish', quantity: 1 },
      { id: 'silverleaf', quantity: 2 }
    ],
    goldCost: 150,
    craftTime: 4,
    successChance: 85,
    levelRequirement: 3
  },

  potion_tongues: {
    id: 'potion_tongues',
    name: 'Potion of Tongues',
    effect: 'Speak and understand all languages for 1 hour',
    potionType: 'utility',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'ancient_scroll_dust', quantity: 2 },
      { id: 'silver_tongue', quantity: 1 }
    ],
    goldCost: 400,
    craftTime: 8,
    successChance: 75,
    levelRequirement: 8
  },

  potion_treasure_finding: {
    id: 'potion_treasure_finding',
    name: 'Potion of Treasure Finding',
    effect: 'Detect magic & hidden objects within 60 ft for 1 hour',
    potionType: 'utility',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'gold_nugget', quantity: 1 },
      { id: 'divination_crystal', quantity: 1 }
    ],
    goldCost: 500,
    craftTime: 10,
    successChance: 70,
    levelRequirement: 9
  },

  potion_dragon_breath_fire: {
    id: 'potion_dragon_breath_fire',
    name: 'Potion of Fire Breath',
    effect: 'Exhale 4d6 fire damage 3 times (15-ft cone)',
    potionType: 'offensive',
    rarity: 'uncommon',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'red_dragon_scale', quantity: 1 },
      { id: 'fire_essence', quantity: 2 }
    ],
    goldCost: 300,
    craftTime: 6,
    successChance: 80,
    levelRequirement: 6
  },

  potion_dragon_breath_cold: {
    id: 'potion_dragon_breath_cold',
    name: 'Potion of Cold Breath',
    effect: 'Exhale 4d6 cold damage 3 times (15-ft cone)',
    potionType: 'offensive',
    rarity: 'uncommon',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'white_dragon_scale', quantity: 1 },
      { id: 'frost_essence', quantity: 2 }
    ],
    goldCost: 300,
    craftTime: 6,
    successChance: 80,
    levelRequirement: 6
  },

  potion_dragon_breath_acid: {
    id: 'potion_dragon_breath_acid',
    name: 'Potion of Acid Breath',
    effect: 'Exhale 4d6 acid damage 3 times (30-ft line)',
    potionType: 'offensive',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'black_dragon_scale', quantity: 1 },
      { id: 'acid_gland', quantity: 1 }
    ],
    goldCost: 500,
    craftTime: 10,
    successChance: 70,
    levelRequirement: 9
  },

  potion_love: {
    id: 'potion_love',
    name: 'Philter of Love',
    effect: 'Target becomes charmed by you for 1 hour',
    potionType: 'debuff',
    rarity: 'uncommon',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'rose_petals', quantity: 10 },
      { id: 'succubus_essence', quantity: 1 }
    ],
    goldCost: 300,
    craftTime: 8,
    successChance: 75,
    levelRequirement: 7
  },

  potion_clairvoyance: {
    id: 'potion_clairvoyance',
    name: 'Potion of Clairvoyance',
    effect: 'Place invisible sensor and see/hear through it for 10 min',
    potionType: 'utility',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'third_eye_gem', quantity: 1 },
      { id: 'owl_feather', quantity: 2 }
    ],
    goldCost: 800,
    craftTime: 12,
    successChance: 65,
    levelRequirement: 11
  },

  potion_undead_repulsion: {
    id: 'potion_undead_repulsion',
    name: 'Potion of Undead Repulsion',
    effect: 'Turn undead as a 5th-level cleric for 1 minute',
    potionType: 'utility',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'holy_water', quantity: 3 },
      { id: 'sunlight_extract', quantity: 1 }
    ],
    goldCost: 600,
    craftTime: 10,
    successChance: 70,
    levelRequirement: 9
  },

  potion_elemental_immunity: {
    id: 'potion_elemental_immunity',
    name: 'Potion of Elemental Immunity',
    effect: 'Immunity to one elemental damage type (chosen on brewing) for 1 hour',
    potionType: 'buff',
    rarity: 'very_rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'elemental_core', quantity: 1 },
      { id: 'dragon_heartblood', quantity: 1 }
    ],
    goldCost: 2500,
    craftTime: 24,
    successChance: 55,
    levelRequirement: 15
  },

  potion_true_seeing: {
    id: 'potion_true_seeing',
    name: 'Oil of True Seeing',
    effect: 'Truesight 120 ft for 1 hour',
    potionType: 'utility',
    rarity: 'legendary',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'diamond_vial', quantity: 1 },
      { id: 'beholder_eye', quantity: 1 },
      { id: 'fairy_dust', quantity: 2 }
    ],
    goldCost: 12000,
    craftTime: 72,
    successChance: 40,
    levelRequirement: 17
  },

  potion_experience: {
    id: 'potion_experience',
    name: 'Potion of Experience',
    effect: 'Gain 500 XP immediately',
    potionType: 'utility',
    rarity: 'very_rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'ancient_knowledge', quantity: 1 },
      { id: 'genius_mushroom', quantity: 3 }
    ],
    goldCost: 3000,
    craftTime: 48,
    successChance: 50,
    levelRequirement: 13
  },

  potion_youth: {
    id: 'potion_youth',
    name: 'Elixir of Youth',
    effect: 'Revert to youngest adult age permanently (once per person)',
    potionType: 'utility',
    rarity: 'legendary',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'diamond_vial', quantity: 1 },
      { id: 'fountain_of_youth_water', quantity: 1 },
      { id: 'unicorn_horn_powder', quantity: 1 }
    ],
    goldCost: 50000,
    craftTime: 168,
    successChance: 25,
    levelRequirement: 20
  },

  // ... and 10 more fun ones to hit exactly 50 new potions

  potion_luck: {
    id: 'potion_luck',
    name: 'Potion of Luck',
    effect: 'Advantage on all d20 rolls for 10 minutes',
    potionType: 'buff',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'four_leaf_clover', quantity: 7 },
      { id: 'leprechaun_coin', quantity: 1 }
    ],
    goldCost: 800,
    craftTime: 12,
    successChance: 65,
    levelRequirement: 10
  },

  potion_berserker_rage: {
    id: 'potion_berserker_rage',
    name: 'Potion of Berserker Rage',
    effect: '+2 damage, resistance to physical, reckless attacks for 1 minute',
    potionType: 'buff',
    rarity: 'uncommon',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'bear_heart', quantity: 1 },
      { id: 'troll_blood', quantity: 2 }
    ],
    goldCost: 250,
    craftTime: 6,
    successChance: 80,
    levelRequirement: 5
  },

  potion_arcane_power: {
    id: 'potion_arcane_power',
    name: 'Potion of Arcane Power',
    effect: 'Spells deal +50% damage for 1 minute',
    potionType: 'buff',
    rarity: 'very_rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'crystal_phial', quantity: 1 },
      { id: 'wizard_staff_splinter', quantity: 1 },
      { id: 'mana_gem', quantity: 2 }
    ],
    goldCost: 2000,
    craftTime: 24,
    successChance: 55,
    levelRequirement: 14
  },

  potion_sneaking: {
    id: 'potion_sneaking',
    name: 'Potion of Master Thievery',
    effect: 'Advantage on Stealth & Sleight of Hand for 1 hour',
    potionType: 'utility',
    rarity: 'common',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'empty_vial', quantity: 1 },
      { id: 'cat_paw', quantity: 2 },
      { id: 'shadow_essence', quantity: 1 }
    ],
    goldCost: 100,
    craftTime: 3,
    successChance: 90,
    levelRequirement: 2
  },

  potion_explosion: {
    id: 'potion_explosion',
    name: 'Alchemist’s Firebomb',
    effect: 'Throwable: 4d6 fire + 2d6 ongoing (20-ft radius)',
    potionType: 'offensive',
    rarity: 'rare',
    icon: '🧪',
    wildcard: true,
    materials: [
      { id: 'reinforced_flask', quantity: 1 },
      { id: 'fire_essence', quantity: 3 },
      { id: 'alchemical_powder', quantity: 2 }
    ],
    goldCost: 400,
    craftTime: 8,
    successChance: 75,
    levelRequirement: 7
  },
      potion_superior_healing: {
        id: 'potion_superior_healing',
        name: 'Potion of Superior Healing',
        effect: 'Restore 8d4+8 HP',
        potionType: 'healing',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'crystal_phial', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 },
            { id: 'healing_herbs', quantity: 8 },
            { id: 'golden_sunleaf', quantity: 1 }
        ],
        goldCost: 500,
        craftTime: 6,
        successChance: 75,
        levelRequirement: 7
    },

    potion_supreme_healing: {
        id: 'potion_supreme_healing',
        name: 'Potion of Supreme Healing',
        effect: 'Restore 10d4+20 HP',
        potionType: 'healing',
        rarity: 'very_rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'dragon_glass_vial', quantity: 1 },
            { id: 'holy_water', quantity: 1 },
            { id: 'healing_herbs', quantity: 12 },
            { id: 'unicorn_tears', quantity: 1 }
        ],
        goldCost: 1500,
        craftTime: 8,
        successChance: 65,
        levelRequirement: 9
    },

    potion_mana: {
        id: 'potion_mana',
        name: 'Potion of Mana',
        effect: 'Regain 3d6 spell slots worth of levels (DM’s discretion)',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'arcane_crystal', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'silverleaf', quantity: 3 }
        ],
        goldCost: 400,
        craftTime: 4,
        successChance: 70,
        levelRequirement: 6
    },

    potion_arcane_recovery: {
        id: 'potion_arcane_recovery',
        name: 'Potion of Arcane Recovery',
        effect: 'Recover expended spell slots up to a combined level of 4',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'arcane_crystal', quantity: 2 },
            { id: 'elven_sage_dust', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 450,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 7
    },

    potion_speed: {
        id: 'potion_speed',
        name: 'Potion of Speed',
        effect: 'Gain the effects of the Haste spell for 1 minute',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'quicksilver', quantity: 2 },
            { id: 'storm_essence', quantity: 1 }
        ],
        goldCost: 300,
        craftTime: 4,
        successChance: 80,
        levelRequirement: 5
    },

    potion_swiftness: {
        id: 'potion_swiftness',
        name: 'Potion of Swiftness',
        effect: '+10 ft movement speed for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'quicksilver', quantity: 1 },
            { id: 'spring_water', quantity: 1 }
        ],
        goldCost: 120,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    potion_invisibility: {
        id: 'potion_invisibility',
        name: 'Potion of Invisibility',
        effect: 'Turn invisible for up to 1 hour (ends on attack/cast)',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'crystal_phial', quantity: 1 },
            { id: 'shadow_essence', quantity: 2 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 350,
        craftTime: 5,
        successChance: 75,
        levelRequirement: 6
    },

    potion_darkvision: {
        id: 'potion_darkvision',
        name: 'Potion of Darkvision',
        effect: 'Gain 60 ft darkvision for 8 hours',
        potionType: 'utility',
        rarity: 'uncommon',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'empty_vial', quantity: 1 },
            { id: 'nightshade', quantity: 1 },
            { id: 'owl_eye_extract', quantity: 1 }
        ],
        goldCost: 150,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 4
    },

    potion_water_breathing: {
        id: 'potion_water_breathing',
        name: 'Potion of Water Breathing',
        effect: 'Breathe underwater for 1 hour',
        potionType: 'utility',
        rarity: 'uncommon',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'kelp_sac', quantity: 2 },
            { id: 'spring_water', quantity: 1 }
        ],
        goldCost: 180,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 4
    },

    potion_giant_strength: {
        id: 'potion_giant_strength',
        name: 'Potion of Giant Strength',
        effect: 'Strength score becomes 21 for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'giant_bone_powder', quantity: 1 },
            { id: 'troll_fat', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 500,
        craftTime: 6,
        successChance: 70,
        levelRequirement: 7
    },

    potion_clairvoyance: {
        id: 'potion_clairvoyance',
        name: 'Potion of Clairvoyance',
        effect: 'Cast Clairvoyance spell once within 10 minutes',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'seer_orb_shard', quantity: 1 },
            { id: 'eye_of_newt', quantity: 2 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 350,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 6
    },

    potion_heroism: {
        id: 'potion_heroism',
        name: 'Potion of Heroism',
        effect: 'Gain 10 temp HP & Bless spell for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'lion_heart_essence', quantity: 1 },
            { id: 'holy_water', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 300,
        craftTime: 4,
        successChance: 80,
        levelRequirement: 5
    },

    potion_mind_shielding: {
        id: 'potion_mind_shielding',
        name: 'Potion of Mind Shielding',
        effect: 'Immune to mind-reading & telepathy for 8 hours',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'iron_will_shard', quantity: 1 },
            { id: 'silverleaf', quantity: 2 },
            { id: 'spring_water', quantity: 1 }
        ],
        goldCost: 320,
        craftTime: 4,
        successChance: 75,
        levelRequirement: 6
    },

    potion_flying: {
        id: 'potion_flying',
        name: 'Potion of Flying',
        effect: 'Gain 60-ft fly speed for 1 hour',
        potionType: 'buff',
        rarity: 'very_rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'griffon_feather', quantity: 2 },
            { id: 'storm_essence', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 800,
        craftTime: 6,
        successChance: 65,
        levelRequirement: 8
    },

    potion_growth: {
        id: 'potion_growth',
        name: 'Potion of Growth',
        effect: 'Enlarge spell effect for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'giant_bone_powder', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'healing_herbs', quantity: 1 }
        ],
        goldCost: 160,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 4
    },

    potion_reduce: {
        id: 'potion_reduce',
        name: 'Potion of Diminution',
        effect: 'Reduce spell effect for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'pixie_dust', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 160,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 4
    },

    potion_spider_climb: {
        id: 'potion_spider_climb',
        name: 'Potion of Spider Climb',
        effect: 'Gain Spider Climb for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'spider_silk', quantity: 2 },
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 150,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    potion_animal_friendship: {
        id: 'potion_animal_friendship',
        name: 'Potion of Animal Friendship',
        effect: 'Cast Animal Friendship spell (save DC 13) once',
        potionType: 'utility',
        rarity: 'common',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'beast_essence', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'healing_herbs', quantity: 1 }
        ],
        goldCost: 60,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 2
    },

    potion_feather_fall: {
        id: 'potion_feather_fall',
        name: 'Potion of Feather Fall',
        effect: 'Cast Feather Fall as reaction within 1 hour',
        potionType: 'utility',
        rarity: 'common',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'harpy_feather', quantity: 3 },
            { id: 'empty_vial', quantity: 1 },
            { id: 'spring_water', quantity: 1 }
        ],
        goldCost: 50,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 1
    },

    potion_magic_resistance: {
        id: 'potion_magic_resistance',
        name: 'Potion of Magic Resistance',
        effect: 'Advantage on saves vs spells for 1 hour',
        potionType: 'buff',
        rarity: 'very_rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'magebane_root', quantity: 2 },
            { id: 'arcane_crystal', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 900,
        craftTime: 7,
        successChance: 60,
        levelRequirement: 9
    },

    potion_thunder_resistance: {
        id: 'potion_thunder_resistance',
        name: 'Potion of Thunder Resistance',
        effect: 'Resistance to thunder damage for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'thunder_essence', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 150,
        craftTime: 4,
        successChance: 80,
        levelRequirement: 4
    },

    potion_lightning_resistance: {
        id: 'potion_lightning_resistance',
        name: 'Potion of Lightning Resistance',
        effect: 'Resistance to lightning damage for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'storm_essence', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 150,
        craftTime: 4,
        successChance: 80,
        levelRequirement: 4
    },

    potion_acid_resistance: {
        id: 'potion_acid_resistance',
        name: 'Potion of Acid Resistance',
        effect: 'Resistance to acid damage for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'acid_essence', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 150,
        craftTime: 4,
        successChance: 80,
        levelRequirement: 4
    },

    potion_psychic_resistance: {
        id: 'potion_psychic_resistance',
        name: 'Potion of Psychic Resistance',
        effect: 'Resistance to psychic damage for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'iron_will_shard', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 },
            { id: 'shadow_essence', quantity: 1 }
        ],
        goldCost: 250,
        craftTime: 4,
        successChance: 75,
        levelRequirement: 5
    },

    potion_necrotic_resistance: {
        id: 'potion_necrotic_resistance',
        name: 'Potion of Necrotic Resistance',
        effect: 'Resistance to necrotic damage for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'black_onyx_powder', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 250,
        craftTime: 4,
        successChance: 75,
        levelRequirement: 5
    },

    potion_radiant_resistance: {
        id: 'potion_radiant_resistance',
        name: 'Potion of Radiant Resistance',
        effect: 'Resistance to radiant damage for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'angelic_feather', quantity: 1 },
            { id: 'holy_water', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 250,
        craftTime: 4,
        successChance: 75,
        levelRequirement: 5
    },

    potion_vitality: {
        id: 'potion_vitality',
        name: 'Potion of Vitality',
        effect: 'Remove exhaustion & max healing for 24h',
        potionType: 'buff',
        rarity: 'very_rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'phoenix_feather', quantity: 1 },
            { id: 'golden_sunleaf', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 1200,
        craftTime: 7,
        successChance: 60,
        levelRequirement: 9
    },

    potion_fire_breath: {
        id: 'potion_fire_breath',
        name: 'Potion of Fire Breath',
        effect: 'Exhale fire (3d6 damage, 30-ft cone) 3 times within 1 hour',
        potionType: 'offensive',
        rarity: 'uncommon',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'fire_essence', quantity: 2 },
            { id: 'reinforced_flask', quantity: 1 },
            { id: 'dragon_scale', quantity: 1 }
        ],
        goldCost: 200,
        craftTime: 4,
        successChance: 80,
        levelRequirement: 4
    },

    potion_stone_skin: {
        id: 'potion_stone_skin',
        name: 'Potion of Stoneskin',
        effect: 'Gain resistance to non-magical bludgeoning, piercing, slashing for 1 hour',
        potionType: 'buff',
        rarity: 'very_rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'gargoyle_dust', quantity: 2 },
            { id: 'earth_essence', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 900,
        craftTime: 7,
        successChance: 65,
        levelRequirement: 8
    },

    potion_telepathy: {
        id: 'potion_telepathy',
        name: 'Potion of Telepathy',
        effect: 'Gain 60-ft telepathy for 1 hour',
        potionType: 'utility',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'mind_flayer_ichor', quantity: 1 },
            { id: 'shadow_essence', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 400,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 6
    },

    potion_comprehend_languages: {
        id: 'potion_comprehend_languages',
        name: 'Potion of Comprehension',
        effect: 'Cast Comprehend Languages for 1 hour',
        potionType: 'utility',
        rarity: 'common',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'sage_leaf', quantity: 2 },
            { id: 'empty_vial', quantity: 1 },
            { id: 'spring_water', quantity: 1 }
        ],
        goldCost: 60,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 1
    },

    potion_diminished_presence: {
        id: 'potion_diminished_presence',
        name: 'Potion of Diminished Presence',
        effect: 'Advantage on Stealth checks for 1 hour',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'shadow_essence', quantity: 1 },
            { id: 'nightshade', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 140,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    potion_blur: {
        id: 'potion_blur',
        name: 'Potion of Blur',
        effect: 'Gain Blur spell effect for 1 minute',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'distortion_crystal', quantity: 1 },
            { id: 'shadow_essence', quantity: 1 },
            { id: 'moonwell_water', quantity: 1 }
        ],
        goldCost: 280,
        craftTime: 4,
        successChance: 75,
        levelRequirement: 5
    },

    potion_confusion: {
        id: 'potion_confusion',
        name: 'Potion of Confusion',
        effect: 'Throw to cast Confusion (DC 15) in 10-ft radius',
        potionType: 'offensive',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'madcap_mushroom', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 },
            { id: 'shadow_essence', quantity: 1 }
        ],
        goldCost: 300,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 6
    },

    potion_true_strike: {
        id: 'potion_true_strike',
        name: 'Potion of True Strike',
        effect: 'Gain advantage on next attack within 1 minute',
        potionType: 'buff',
        rarity: 'common',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'seer_orb_shard', quantity: 1 },
            { id: 'empty_vial', quantity: 1 },
            { id: 'spring_water', quantity: 1 }
        ],
        goldCost: 75,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 2
    },

    potion_luck: {
        id: 'potion_luck',
        name: 'Potion of Luck',
        effect: 'Gain 1 luck point (as Lucky feat) for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'rabbit_foot_charm', quantity: 1 },
            { id: 'golden_sunleaf', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 350,
        craftTime: 4,
        successChance: 75,
        levelRequirement: 6
    },

    potion_regeneration: {
        id: 'potion_regeneration',
        name: 'Potion of Regeneration',
        effect: 'Regain 1 HP every round for 1 hour',
        potionType: 'healing',
        rarity: 'very_rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'troll_fat', quantity: 3 },
            { id: 'phoenix_feather', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 1200,
        craftTime: 8,
        successChance: 60,
        levelRequirement: 9
    },

    potion_mage_armor: {
        id: 'potion_mage_armor',
        name: 'Potion of Mage Armor',
        effect: 'Gain Mage Armor (AC 13 + Dex) for 8 hours',
        potionType: 'buff',
        rarity: 'common',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'arcane_crystal', quantity: 1 },
            { id: 'spring_water', quantity: 1 },
            { id: 'empty_vial', quantity: 1 }
        ],
        goldCost: 80,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 1
    },

    potion_spell_storing: {
        id: 'potion_spell_storing',
        name: 'Potion of Spell Storing',
        effect: 'Store one spell of up to 3rd level for later use',
        potionType: 'utility',
        rarity: 'very_rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'arcane_crystal', quantity: 3 },
            { id: 'diamond_dust', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 1400,
        craftTime: 8,
        successChance: 55,
        levelRequirement: 10
    },

    potion_poison: {
        id: 'potion_poison',
        name: 'Basic Poison',
        effect: 'Injury poison: 1d4 damage & DC 12 Con vs poison',
        potionType: 'offensive',
        rarity: 'common',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'nightshade', quantity: 2 },
            { id: 'empty_vial', quantity: 1 },
            { id: 'spring_water', quantity: 1 }
        ],
        goldCost: 40,
        craftTime: 2,
        successChance: 90,
        levelRequirement: 1
    },

    potion_sleeping: {
        id: 'potion_sleeping',
        name: 'Potion of Dreamless Sleep',
        effect: 'Drink to fall into deep sleep for 8 hours (DC 15 Con to resist if forced)',
        potionType: 'offensive',
        rarity: 'uncommon',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'dream_powder', quantity: 2 },
            { id: 'spring_water', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 120,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    potion_swarm: {
        id: 'potion_swarm',
        name: 'Potion of Summon Swarm',
        effect: 'Throw to summon swarm of insects (lasts 1 minute)',
        potionType: 'offensive',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'chittering_chitin', quantity: 3 },
            { id: 'shadow_essence', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 260,
        craftTime: 5,
        successChance: 70,
        levelRequirement: 5
    },

    potion_earth_glide: {
        id: 'potion_earth_glide',
        name: 'Potion of Earth Glide',
        effect: 'Move through unworked earth/stone as Earth Elemental for 10 minutes',
        potionType: 'buff',
        rarity: 'very_rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'earth_essence', quantity: 2 },
            { id: 'gargoyle_dust', quantity: 2 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 1000,
        craftTime: 7,
        successChance: 60,
        levelRequirement: 9
    },

    potion_air_walk: {
        id: 'potion_air_walk',
        name: 'Potion of Air Walk',
        effect: 'Walk on air as solid ground for 1 hour',
        potionType: 'buff',
        rarity: 'very_rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'storm_essence', quantity: 2 },
            { id: 'griffon_feather', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 950,
        craftTime: 7,
        successChance: 60,
        levelRequirement: 8
    },

    potion_sea_stride: {
        id: 'potion_sea_stride',
        name: 'Potion of Sea Stride',
        effect: 'Walk on water & swim speed 60 ft for 1 hour',
        potionType: 'buff',
        rarity: 'rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'kelp_sac', quantity: 2 },
            { id: 'spring_water', quantity: 1 },
            { id: 'reinforced_flask', quantity: 1 }
        ],
        goldCost: 300,
        craftTime: 4,
        successChance: 75,
        levelRequirement: 5
    },

    potion_shadow_step: {
        id: 'potion_shadow_step',
        name: 'Potion of Shadow Step',
        effect: 'Bonus action teleport 30 ft in dim light/shadow for 1 hour',
        potionType: 'buff',
        rarity: 'very_rare',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'shadow_essence', quantity: 3 },
            { id: 'obsidian_dust', quantity: 1 },
            { id: 'crystal_phial', quantity: 1 }
        ],
        goldCost: 1000,
        craftTime: 7,
        successChance: 60,
        levelRequirement: 9
    },

    potion_light_step: {
        id: 'potion_light_step',
        name: 'Potion of Light Step',
        effect: 'Ignore difficult terrain & leave no tracks for 8 hours',
        potionType: 'buff',
        rarity: 'uncommon',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'pixie_dust', quantity: 1 },
            { id: 'harpy_feather', quantity: 1 },
            { id: 'spring_water', quantity: 1 }
        ],
        goldCost: 140,
        craftTime: 3,
        successChance: 85,
        levelRequirement: 3
    },

    potion_time_dilation: {
        id: 'potion_time_dilation',
        name: 'Potion of Time Dilation',
        effect: 'Take two turns each round for 3 rounds (level of exhaustion afterward)',
        potionType: 'buff',
        rarity: 'legendary',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'chronal_crystal', quantity: 1 },
            { id: 'quicksilver', quantity: 3 },
            { id: 'dragon_glass_vial', quantity: 1 }
        ],
        goldCost: 5000,
        craftTime: 12,
        successChance: 40,
        levelRequirement: 15
    },

    potion_planar_shift: {
        id: 'potion_planar_shift',
        name: 'Potion of Planar Shift',
        effect: 'Cast Plane Shift (self only) within 10 minutes',
        potionType: 'utility',
        rarity: 'legendary',
        icon: '🧪',
        wildcard: true,
        materials: [
            { id: 'astral_essence', quantity: 2 },
            { id: 'chronal_crystal', quantity: 1 },
            { id: 'dragon_glass_vial', quantity: 1 }
        ],
        goldCost: 6000,
        craftTime: 12,
        successChance: 35,
        levelRequirement: 15
    },
};

// ============================================
// === HELPER FUNCTIONS ===
// ============================================

export function getBulkDiscount(quantity) {
    const discounts = MATERIAL_SHOP_CONFIG.bulkDiscounts;
    let discount = 0;
    for (const tier of discounts) {
        if (quantity >= tier.minQty) {
            discount = tier.discount;
        }
    }
    return discount;
}

export function getBulkDiscountLabel(quantity) {
    const discounts = MATERIAL_SHOP_CONFIG.bulkDiscounts;
    let label = 'Standard';
    for (const tier of discounts) {
        if (quantity >= tier.minQty) {
            label = tier.label;
        }
    }
    return label;
}





export function getShopMaterialsByCategory(category) {
    return Object.entries(MATERIALS)
        .filter(([id, mat]) => {
            if (category === 'all') return true;
            return mat.category === category;
        })
        .map(([id, mat]) => ({
            ...mat,
            id,
            shopInfo: MATERIAL_SHOP_STOCK[id] || { available: false, stock: 0 }
        }))
        .sort((a, b) => {
            const rarityOrder = { common: 0, uncommon: 1, rare: 2, legendary: 3 };
            const rarityDiff = (rarityOrder[a.rarity] || 0) - (rarityOrder[b.rarity] || 0);
            if (rarityDiff !== 0) return rarityDiff;
            return a.cost - b.cost;
        });
}

export function getBundleXPPrices(bundleId) {
    const bundle = MATERIAL_BUNDLES[bundleId];
    if (!bundle) return { price: 0, regular: 0, savings: 0 };
    
    return {
        price: Math.ceil(bundle.bundlePrice * GOLD_TO_XP_RATIO),
        regular: Math.ceil(bundle.regularPrice * GOLD_TO_XP_RATIO),
        savings: Math.ceil(bundle.savings * GOLD_TO_XP_RATIO)
    };
}

export function getRecipesByCategory(category) {
    switch (category) {
        case CRAFTING_CATEGORIES.SCROLLS:
            return Object.values(SCROLL_RECIPES);
        case CRAFTING_CATEGORIES.POTIONS:
            return Object.values(POTION_RECIPES);
        default:
            return [];
    }
}
// Add to crafting-data.js

export function getMaterialData(id) {
    // 1. Return existing data if we have it
    if (MATERIALS[id]) {
        return MATERIALS[id];
    }

    // 2. Generate and store it so it's consistent
    const generatedMaterial = generateMaterialFromId(id);
    MATERIALS[id] = generatedMaterial;
    
    console.log(`🔧 Auto-generated material on-demand: ${generatedMaterial.name}`);
    
    return generatedMaterial;
}
export function getSpellSchool(schoolId) {
    return SPELL_SCHOOLS[schoolId] || null;
}
// ============================================
// === AUTO-GENERATE MISSING SHOP ITEMS ===
// ============================================

let shopItemsGenerated = false;

export function ensureAllRecipeMaterialsInShop() {
    // Only run once
    if (shopItemsGenerated) return;
    shopItemsGenerated = true;
    
    console.log('🔍 Scanning recipes for missing shop materials...');
    
    // Collect all material IDs from all recipes
    const allRecipes = [
        ...Object.values(SCROLL_RECIPES || {}),
        ...Object.values(POTION_RECIPES || {}),
        ...Object.values(ENCHANTING_RECIPES || {}),
        ...Object.values(SMITHING_RECIPES || {})
    ];
    
    const requiredMaterials = new Set();
    
    allRecipes.forEach(recipe => {
        if (recipe.materials && Array.isArray(recipe.materials)) {
            recipe.materials.forEach(mat => {
                requiredMaterials.add(mat.id);
            });
        }
    });
    
    let addedCount = 0;
    
    // Check each required material
    requiredMaterials.forEach(materialId => {
        // Check if it exists in MATERIALS
        if (!MATERIALS[materialId]) {
            // Generate a new material entry
            const generatedMaterial = generateMaterialFromId(materialId);
            MATERIALS[materialId] = generatedMaterial;
            addedCount++;
            console.log(`  ➕ Generated material: ${generatedMaterial.name} (${materialId})`);
        }
    });
    
    if (addedCount > 0) {
        console.log(`✅ Auto-generated ${addedCount} missing materials for the shop.`);
    } else {
        console.log('✅ All recipe materials already exist in shop.');
    }
}

function generateMaterialFromId(id) {
    // Create a stable hash from the ID
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);
    
    // Generate Name: "luminescent_moss" -> "Luminescent Moss"
    const name = id
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
    
    // Determine rarity based on keywords
    let rarity = 'common';
    const rarityKeywords = {
        legendary: ['legendary', 'divine', 'mythic', 'ancient', 'primordial'],
        rare: ['rare', 'enchanted', 'arcane', 'mystic', 'dragon', 'demon', 'phoenix', 'crystal', 'ethereal'],
        uncommon: ['fine', 'quality', 'refined', 'pure', 'blessed', 'moon', 'star', 'silver', 'gold']
    };
    
    for (const [rarityLevel, keywords] of Object.entries(rarityKeywords)) {
        if (keywords.some(kw => id.toLowerCase().includes(kw))) {
            rarity = rarityLevel;
            break;
        }
    }
    
    // Determine category based on keywords
    let category = 'misc';
    const categoryKeywords = {
        scroll: ['parchment', 'ink', 'quill', 'vellum', 'paper'],
        potion: ['herb', 'leaf', 'root', 'flower', 'water', 'vial', 'flask', 'moss', 'fungus', 'mushroom'],
        essence: ['essence', 'energy', 'spirit', 'soul'],
        enchanting: ['crystal', 'gem', 'rune', 'dust', 'powder', 'shard'],
        smithing: ['ingot', 'ore', 'metal', 'steel', 'iron', 'copper', 'leather', 'hide', 'scale', 'bone', 'stone'],
        gem: ['ruby', 'sapphire', 'emerald', 'diamond', 'pearl', 'opal', 'amethyst'],
        monster: ['blood', 'fang', 'claw', 'eye', 'horn', 'scale', 'feather', 'ichor', 'tooth']
    };
    
    for (const [cat, keywords] of Object.entries(categoryKeywords)) {
        if (keywords.some(kw => id.toLowerCase().includes(kw))) {
            category = cat;
            break;
        }
    }
    
    // Generate icon based on category and keywords
    let icon = '📦'; // Default
    const iconMap = {
        // Category defaults
        scroll: '📜',
        potion: '🧪',
        essence: '✨',
        enchanting: '💎',
        smithing: '⚒️',
        gem: '💠',
        monster: '🦴',
        misc: '📦',
        // Specific keywords
        dust: '✨',
        powder: '💫',
        ingot: '🧱',
        ore: '🪨',
        leather: '🧵',
        herb: '🌿',
        leaf: '🍃',
        root: '🫚',
        flower: '🌸',
        water: '💧',
        moss: '🌿',
        crystal: '💎',
        gem: '💠',
        rune: '🔮',
        blood: '🩸',
        eye: '👁️',
        bone: '🦴',
        fang: '🦷',
        claw: '🦴',
        scale: '🐉',
        feather: '🪶',
        fire: '🔥',
        frost: '❄️',
        ice: '🧊',
        lightning: '⚡',
        shadow: '🌑',
        light: '☀️',
        radiant: '✨',
        iron: '⚙️',
        steel: '🗡️',
        gold: '🥇',
        silver: '🥈',
        copper: '🥉',
        stone: '🪨',
        oil: '🛢️',
        wax: '🕯️',
        thread: '🧵',
        cloth: '🧶',
        wood: '🪵',
        bark: '🌳'
    };
    
    // Check for specific keyword matches first
    for (const [keyword, iconChar] of Object.entries(iconMap)) {
        if (id.toLowerCase().includes(keyword)) {
            icon = iconChar;
            break;
        }
    }
    
    // If no keyword match, use category default
    if (icon === '📦' && iconMap[category]) {
        icon = iconMap[category];
    }
    
    // Generate cost based on rarity
    const baseCosts = {
        common: 5 + (hash % 15),      // 5-20
        uncommon: 20 + (hash % 30),   // 20-50
        rare: 50 + (hash % 75),       // 50-125
        legendary: 150 + (hash % 150) // 150-300
    };
    const cost = baseCosts[rarity] || 15;
    
    // Generate description
    const descriptions = {
        common: [
            'A basic crafting component.',
            'Commonly found material.',
            'Standard quality ingredient.',
            'A reliable crafting supply.'
        ],
        uncommon: [
            'A quality crafting material.',
            'Sought after by skilled crafters.',
            'Above average quality component.',
            'Useful for intermediate recipes.'
        ],
        rare: [
            'A rare and valuable material.',
            'Prized by master craftsmen.',
            'Difficult to obtain, highly useful.',
            'Contains latent magical properties.'
        ],
        legendary: [
            'An extraordinarily rare material.',
            'Legendary crafting component.',
            'Said to contain immense power.',
            'Only the finest recipes require this.'
        ]
    };
    
    const descArray = descriptions[rarity] || descriptions.common;
    const description = descArray[hash % descArray.length];
    
    return {
        id: id,
        name: name,
        icon: icon,
        category: category,
        rarity: rarity,
        cost: cost,
        description: description,
        generated: true // Flag to indicate this was auto-generated
    };
}