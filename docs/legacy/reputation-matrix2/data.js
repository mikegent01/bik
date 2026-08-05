// ===== GAME DATA =====
// Movement types and terrain are now in maps.js

const UNIT_ROLES = {
    infantry: { name: 'Infantry', baseHp: 60, baseAtk: 18, baseDef: 12, baseSpd: 5, baseRange: 1 },
    ranged: { name: 'Ranged', baseHp: 40, baseAtk: 22, baseDef: 6, baseSpd: 5, baseRange: 4 },
    cavalry: { name: 'Cavalry', baseHp: 70, baseAtk: 20, baseDef: 10, baseSpd: 8, baseRange: 1 },
    heavy: { name: 'Heavy', baseHp: 120, baseAtk: 25, baseDef: 25, baseSpd: 3, baseRange: 1 },
    healer: { name: 'Healer', baseHp: 35, baseAtk: 8, baseDef: 5, baseSpd: 5, baseRange: 3 },
    mage: { name: 'Mage', baseHp: 45, baseAtk: 30, baseDef: 5, baseSpd: 4, baseRange: 4 },
    scout: { name: 'Scout', baseHp: 35, baseAtk: 15, baseDef: 5, baseSpd: 9, baseRange: 2 },
    flying: { name: 'Flying', baseHp: 50, baseAtk: 18, baseDef: 8, baseSpd: 7, baseRange: 1 },
    siege: { name: 'Siege', baseHp: 150, baseAtk: 45, baseDef: 15, baseSpd: 2, baseRange: 5 },
    hero: { name: 'Hero', baseHp: 150, baseAtk: 35, baseDef: 20, baseSpd: 6, baseRange: 2 },
    // Naval units
    warship: { name: 'Warship', baseHp: 200, baseAtk: 40, baseDef: 20, baseSpd: 4, baseRange: 5 },
    transport: { name: 'Transport', baseHp: 100, baseAtk: 10, baseDef: 15, baseSpd: 5, baseRange: 1 },
    submarine: { name: 'Submarine', baseHp: 80, baseAtk: 35, baseDef: 10, baseSpd: 6, baseRange: 3 },
    carrier: { name: 'Carrier', baseHp: 250, baseAtk: 20, baseDef: 25, baseSpd: 3, baseRange: 6 },
    destroyer: { name: 'Destroyer', baseHp: 120, baseAtk: 30, baseDef: 15, baseSpd: 7, baseRange: 4 },
    // Amphibious
    amphibious: { name: 'Amphibious', baseHp: 70, baseAtk: 20, baseDef: 12, baseSpd: 5, baseRange: 1 },
    marine: { name: 'Marine', baseHp: 65, baseAtk: 22, baseDef: 14, baseSpd: 6, baseRange: 2 }
};

const FACTIONS = {
    liberated_toads: {
        name: "The Liberated Toads",
        color: "#4ade80",
        icon: "🍄",
        description: "Freedom fighters who escaped Iron Legion slavery",
        heroes: ["dan", "speaker_rivers", "creek", "embercap", "dewdrop", "bones", "smoking_j"],
        generics: {
            infantry: { name: "Toad Militia", sprite: "🍄", bonus: { def: 5 } },
            ranged: { name: "Toad Crossbowman", sprite: "🏹", bonus: { atk: 3 } },
            cavalry: { name: "Toad Rider", sprite: "🐎", bonus: { spd: 1 } },
            heavy: { name: "Toad Guardian", sprite: "🛡️", bonus: { hp: 20 } },
            healer: { name: "Toad Medic", sprite: "💚", bonus: { healPower: 10 } },
            mage: { name: "Toad Mycologist", sprite: "🔮", bonus: { atk: 5 } },
            scout: { name: "Toad Scout", sprite: "👁️", bonus: { spd: 2 } },
            flying: { name: "Toad Paratrooper", sprite: "🪂", bonus: { spd: 2 } },
            amphibious: { name: "Toad Marine", sprite: "🐸", bonus: { atk: 5 } },
            warship: { name: "Liberation Frigate", sprite: "⛵", bonus: { hp: 30 } },
            transport: { name: "Rescue Boat", sprite: "🚤", bonus: { spd: 2 } }
        }
    },
    iron_legion: {
        name: "The Iron Legion",
        color: "#6b7280",
        icon: "⚔️",
        description: "The Regal Empire's elite military force",
        heroes: ["colonel_steelstorm", "marcus_ironhand", "iron_fist_elite"],
        generics: {
            infantry: { name: "Legion Soldier", sprite: "⚔️", bonus: { def: 8 } },
            ranged: { name: "Legion Arbalist", sprite: "🎯", bonus: { range: 1 } },
            cavalry: { name: "Legion Lancer", sprite: "🐴", bonus: { atk: 5 } },
            heavy: { name: "Iron Fist", sprite: "🥊", bonus: { hp: 30, def: 10 } },
            healer: { name: "Legion Chirurgeon", sprite: "⚕️", bonus: { healPower: 5 } },
            mage: { name: "Legion Battlemage", sprite: "⚡", bonus: { atk: 8 } },
            scout: { name: "Legion Scout", sprite: "🔭", bonus: { spd: 2 } },
            siege: { name: "Iron Ballista", sprite: "🏹", bonus: { atk: 15 } },
            flying: { name: "Sky Brigade", sprite: "🦅", bonus: { atk: 5, spd: 2 } },
            warship: { name: "Iron Dreadnought", sprite: "🚢", bonus: { hp: 50, atk: 10 } },
            destroyer: { name: "Legion Destroyer", sprite: "⚓", bonus: { atk: 15 } },
            submarine: { name: "Shadow Sub", sprite: "🔱", bonus: { atk: 10, stealth: true } },
            marine: { name: "Legion Marine", sprite: "🎖️", bonus: { def: 10, atk: 5 } }
        }
    },
    vigilance_crew: {
        name: "Vigilance Crew",
        color: "#3b82f6",
        icon: "🚀",
        description: "The airship crew turned heroes",
        heroes: ["bowser", "archie", "markop", "oracle", "remi", "hjumpik", "waluigi", "rodger"],
        generics: {
            infantry: { name: "Crew Fighter", sprite: "⚓", bonus: { atk: 3, def: 3 } },
            ranged: { name: "Deck Gunner", sprite: "💥", bonus: { atk: 5 } },
            cavalry: { name: "Sky Raider", sprite: "🦅", bonus: { spd: 2 } },
            heavy: { name: "Ship Guard", sprite: "🛡️", bonus: { hp: 25 } },
            healer: { name: "Ship Doctor", sprite: "💊", bonus: { healPower: 15 } },
            mage: { name: "Crew Mage", sprite: "✨", bonus: { atk: 5, range: 1 } },
            flying: { name: "Sky Sailor", sprite: "🪂", bonus: { spd: 3 } }
        }
    },
    mages_guild: {
        name: "Mages' Guild",
        color: "#a855f7",
        icon: "🔮",
        description: "Arcane practitioners seeking power and knowledge",
        heroes: ["pernus_annmatar", "battle_mage", "summoner"],
        generics: {
            infantry: { name: "Guild Guard", sprite: "🗡️", bonus: { def: 5 } },
            ranged: { name: "Spell Archer", sprite: "🏹", bonus: { atk: 8, magicDamage: true } },
            mage: { name: "Apprentice", sprite: "📖", bonus: { atk: 10 } },
            heavy: { name: "Golem", sprite: "🗿", bonus: { hp: 50, def: 15 } },
            healer: { name: "Restoration Mage", sprite: "💚", bonus: { healPower: 20 } },
            flying: { name: "Levitating Mage", sprite: "🧙", bonus: { spd: 2, atk: 5 } },
            siege: { name: "War Mage", sprite: "🌋", bonus: { atk: 20, aoe: true } }
        }
    },
    raventree_curse: {
        name: "Raventree Curse",
        color: "#7c3aed",
        icon: "👻",
        description: "Supernatural horrors from Raventree Manor",
        heroes: ["fire_wraith", "arcane_wraith", "dancing_wraith", "shard_stalker", "arachnid_matriarch"],
        generics: {
            infantry: { name: "Shambling Horror", sprite: "🧟", bonus: { hp: 20 } },
            ranged: { name: "Specter", sprite: "👤", bonus: { atk: 5, phaseThrough: true } },
            mage: { name: "Lesser Wraith", sprite: "👻", bonus: { atk: 8 } },
            heavy: { name: "Bone Golem", sprite: "💀", bonus: { hp: 40, def: 10 } },
            healer: { name: "Soul Leech", sprite: "🩸", bonus: { lifesteal: 20 } },
            flying: { name: "Phantom", sprite: "👁️", bonus: { spd: 3 } },
            scout: { name: "Minispider", sprite: "🕷️", bonus: { spd: 4, poison: true } }
        }
    },
    dk_crew: {
        name: "The DK Crew",
        color: "#f59e0b",
        icon: "🦍",
        description: "The Kong family and their allies",
        heroes: ["donkey_kong", "funky_kong", "lanky_kong"],
        generics: {
            infantry: { name: "Kong Warrior", sprite: "🦍", bonus: { atk: 5, hp: 10 } },
            ranged: { name: "Barrel Thrower", sprite: "🛢️", bonus: { atk: 8 } },
            cavalry: { name: "Rambi Rider", sprite: "🦏", bonus: { hp: 30, atk: 10 } },
            heavy: { name: "Chunky Fighter", sprite: "💪", bonus: { hp: 50, def: 10 } },
            healer: { name: "Banana Healer", sprite: "🍌", bonus: { healPower: 15 } },
            scout: { name: "Diddy Scout", sprite: "🐒", bonus: { spd: 4 } },
            flying: { name: "Squawks Support", sprite: "🦜", bonus: { spd: 3, atk: 3 } }
        }
    },
    kremling_krew: {
        name: "Kremling Krew",
        color: "#22c55e",
        icon: "🐊",
        description: "King K. Rool's reptilian army",
        heroes: ["king_k_rool", "galypso", "kremling_soldier"],
        generics: {
            infantry: { name: "Kritter", sprite: "🐊", bonus: { atk: 3 } },
            ranged: { name: "Klump Gunner", sprite: "🔫", bonus: { atk: 6 } },
            cavalry: { name: "Krock Rider", sprite: "🐲", bonus: { spd: 2, atk: 5 } },
            heavy: { name: "Krusha", sprite: "🦎", bonus: { hp: 60, def: 15 } },
            healer: { name: "Kremling Shaman", sprite: "🐍", bonus: { healPower: 10, poison: true } },
            scout: { name: "Sneek", sprite: "🐀", bonus: { spd: 4, stealth: true } },
            swimming: { name: "Lockjaw", sprite: "🦈", bonus: { atk: 10, waterBonus: 20 } },
            warship: { name: "Gangplank Galleon", sprite: "🏴‍☠️", bonus: { hp: 60, atk: 15 } },
            submarine: { name: "Kremling Sub", sprite: "🐊", bonus: { atk: 15, stealth: true } },
            amphibious: { name: "Krock Trooper", sprite: "🐢", bonus: { def: 8, atk: 5 } }
        }
    },
    peach_loyalists: {
        name: "Peach Loyalists",
        color: "#ec4899",
        icon: "👑",
        description: "Zealous defenders of the Princess's memory",
        heroes: ["captain_toadette", "loyalist_soldier"],
        generics: {
            infantry: { name: "Loyalist Militia", sprite: "⚔️", bonus: { atk: 5, zealot: true } },
            ranged: { name: "Loyalist Archer", sprite: "🏹", bonus: { atk: 5 } },
            cavalry: { name: "Royal Cavalry", sprite: "🐎", bonus: { spd: 2, atk: 5 } },
            heavy: { name: "Royal Guard", sprite: "🛡️", bonus: { hp: 30, def: 15 } },
            healer: { name: "Sister of Mercy", sprite: "💗", bonus: { healPower: 25 } },
            mage: { name: "Court Wizard", sprite: "✨", bonus: { atk: 8 } },
            flying: { name: "Paratroopa Loyalist", sprite: "🪖", bonus: { spd: 2 } }
        }
    },
    fawful_forces: {
        name: "Fawful's Forces",
        color: "#ef4444",
        icon: "🤖",
        description: "High-tech mechanical army",
        heroes: ["fawful", "robot_trooper", "mecha_koopa"],
        generics: {
            infantry: { name: "Robot Soldier", sprite: "🤖", bonus: { def: 10 } },
            ranged: { name: "Laser Drone", sprite: "🔴", bonus: { atk: 10, range: 1 } },
            cavalry: { name: "Hover Bot", sprite: "🛸", bonus: { spd: 3 } },
            heavy: { name: "Tank Bot", sprite: "🔩", bonus: { hp: 80, def: 20 } },
            healer: { name: "Repair Drone", sprite: "🔧", bonus: { healPower: 15 } },
            mage: { name: "Shock Trooper", sprite: "⚡", bonus: { atk: 12, aoe: true } },
            siege: { name: "Doom Cannon", sprite: "💣", bonus: { atk: 30, range: 2 } }
        }
    },
    koopa_troop: {
        name: "Koopa Troop",
        color: "#eab308",
        icon: "🐢",
        description: "The remnants of Bowser's original army",
        heroes: ["kamek", "koopa_soldier", "goomba"],
        generics: {
            infantry: { name: "Koopa Troopa", sprite: "🐢", bonus: { def: 10 } },
            ranged: { name: "Hammer Bro", sprite: "🔨", bonus: { atk: 8 } },
            cavalry: { name: "Chargin' Chuck", sprite: "🏈", bonus: { spd: 2, atk: 5 } },
            heavy: { name: "Sledge Bro", sprite: "⚒️", bonus: { hp: 40, atk: 10 } },
            healer: { name: "Magikoopa", sprite: "🧹", bonus: { healPower: 20, atk: 5 } },
            flying: { name: "Paratroopa", sprite: "🪽", bonus: { spd: 3 } },
            scout: { name: "Goomba", sprite: "🍄", bonus: { cheap: true } }
        }
    },
    dragons: {
        name: "Dragons",
        color: "#dc2626",
        icon: "🐉",
        description: "Ancient and powerful wyrms",
        heroes: ["great_dragon", "ignis"],
        generics: {
            infantry: { name: "Dragonkin", sprite: "🦎", bonus: { atk: 8, fireResist: true } },
            ranged: { name: "Drake Spitter", sprite: "🔥", bonus: { atk: 10, fireDamage: true } },
            flying: { name: "Wyvern", sprite: "🐲", bonus: { spd: 3, atk: 8 } },
            heavy: { name: "Elder Drake", sprite: "🐉", bonus: { hp: 80, atk: 15, def: 15 } },
            mage: { name: "Dragon Mage", sprite: "🌋", bonus: { atk: 15, aoe: true } },
            healer: { name: "Life Wyrm", sprite: "💚", bonus: { healPower: 25 } }
        }
    },
    rakasha: {
        name: "Rakasha Clans",
        color: "#f97316",
        icon: "🐯",
        description: "Fierce feline warriors",
        heroes: ["spirit_tiger", "chief_thornpaw", "rakasha_warrior"],
        generics: {
            infantry: { name: "Rakasha Fighter", sprite: "🐱", bonus: { spd: 2, atk: 3 } },
            ranged: { name: "Rakasha Hunter", sprite: "🏹", bonus: { atk: 5, crit: 10 } },
            cavalry: { name: "Tiger Rider", sprite: "🐅", bonus: { spd: 3, atk: 8 } },
            heavy: { name: "Lion Guard", sprite: "🦁", bonus: { hp: 30, def: 10 } },
            healer: { name: "Spirit Caller", sprite: "✨", bonus: { healPower: 20, summon: true } },
            scout: { name: "Prowler", sprite: "🐈", bonus: { spd: 5, stealth: true } },
            mage: { name: "Shaman", sprite: "🔮", bonus: { atk: 8, spiritDamage: true } }
        }
    }
};

// Hero units with special abilities
const HEROES = {
    // Vigilance Crew
    bowser: {
        name: "Bowser",
        sprite: "🐲",
        role: "hero",
        hp: 200,
        attack: 35,
        defense: 25,
        speed: 4,
        range: 1,
        movement: "heavy",
        abilities: [
            { name: "Fire Breath", damage: 45, type: "fire", cooldown: 3, range: 3, aoe: 2 },
            { name: "Shell Slam", damage: 60, type: "physical", cooldown: 5, range: 1, stun: true }
        ],
        passive: "Fear Overcome: Immune to fear effects",
        description: "Warlord and party tank. Overcame fear of ghosts."
    },
    archie: {
        name: "Archie Miser",
        sprite: "🧙",
        role: "hero",
        hp: 80,
        attack: 15,
        defense: 8,
        speed: 5,
        range: 4,
        movement: "foot",
        abilities: [
            { name: "Ice Blast", damage: 50, type: "ice", cooldown: 3, range: 4, counter: "fire" },
            { name: "Fireball", damage: 55, type: "fire", cooldown: 4, range: 4, aoe: 2 }
        ],
        passive: "Fire Immunity: Takes no fire damage",
        description: "Powerful mage with elemental mastery."
    },
    markop: {
        name: "Markop",
        sprite: "🐸",
        role: "hero",
        hp: 120,
        attack: 25,
        defense: 15,
        speed: 6,
        range: 1,
        movement: "foot",
        abilities: [
            { name: "Titan Form", buff: true, hpBonus: 100, attackBonus: 20, cooldown: 10, duration: 5 },
            { name: "Tongue Lash", damage: 30, type: "physical", cooldown: 2, range: 3 }
        ],
        passive: "Oracle's Blessing: Can grow to colossal size",
        description: "Can transform into colossal titan form."
    },
    oracle: {
        name: "The Oracle",
        sprite: "🔮",
        role: "hero",
        hp: 60,
        attack: 10,
        defense: 5,
        speed: 4,
        range: 3,
        movement: "foot",
        abilities: [
            { name: "Banishment Circle", damage: 999, type: "holy", cooldown: 15, range: 2, prepTime: 3, banish: true },
            { name: "Blessing", heal: 40, cooldown: 4, range: 4, aoe: 2 }
        ],
        passive: "Ritual Master: Banishment ignores all defenses",
        description: "Master of ritual magic. Can banish massive threats."
    },
    remi: {
        name: "Remi",
        sprite: "🧝",
        role: "hero",
        hp: 70,
        attack: 20,
        defense: 6,
        speed: 7,
        range: 3,
        movement: "foot",
        abilities: [
            { name: "Arcane Bolt", damage: 35, type: "arcane", cooldown: 2, range: 4 },
            { name: "Last Stand", damage: 80, type: "arcane", cooldown: 8, range: 3, selfDamage: 30, lowHpBonus: true }
        ],
        passive: "Defiant: Damage increases as HP decreases",
        description: "Fights to the last. Never gives up."
    },
    hjumpik: {
        name: "Hjumpik",
        sprite: "🎭",
        role: "hero",
        hp: 75,
        attack: 18,
        defense: 10,
        speed: 6,
        range: 2,
        movement: "foot",
        abilities: [
            { name: "Dispelling Ritual", damage: 40, type: "holy", cooldown: 4, range: 3, dispel: true },
            { name: "Quick Strike", damage: 25, type: "physical", cooldown: 1, range: 1 }
        ],
        passive: "Improviser: Can adapt rituals on the fly",
        description: "Master of improvised dispelling rituals."
    },
    waluigi: {
        name: "Waluigi",
        sprite: "💜",
        role: "hero",
        hp: 85,
        attack: 22,
        defense: 12,
        speed: 8,
        range: 2,
        movement: "foot",
        abilities: [
            { name: "Weakening Ray", debuff: true, attackDebuff: 15, cooldown: 3, range: 4, duration: 3 },
            { name: "Sneaky Strike", damage: 35, type: "physical", cooldown: 2, range: 1, backstab: true }
        ],
        passive: "Wah: Critical hits deal triple damage",
        description: "Uses arcane weakening rays in battle."
    },
    rodger: {
        name: "Rodger",
        sprite: "🛡️",
        role: "hero",
        hp: 110,
        attack: 20,
        defense: 20,
        speed: 5,
        range: 1,
        movement: "foot",
        abilities: [
            { name: "Defensive Position", buff: true, defenseBonus: 30, cooldown: 5, duration: 4 },
            { name: "Pressure Point", damage: 45, type: "physical", cooldown: 3, range: 1, armorPierce: true }
        ],
        passive: "Tactical Eye: Finds weak points in armor",
        description: "Tactical positioning expert."
    },
    
    // Liberated Toads
    dan: {
        name: "Dan the Toad",
        sprite: "🪓",
        role: "hero",
        hp: 90,
        attack: 30,
        defense: 10,
        speed: 7,
        range: 3,
        movement: "foot",
        abilities: [
            { name: "Throwing Axes", damage: 40, type: "physical", cooldown: 2, range: 5, multiHit: 3 },
            { name: "Deep Strike", damage: 55, type: "physical", cooldown: 4, range: 1, bleed: true }
        ],
        passive: "One-Armed Warrior: Extra accuracy with throws",
        description: "One-armed warrior. Lethal with throwing axes."
    },
    speaker_rivers: {
        name: "Speaker Rivers",
        sprite: "📢",
        role: "hero",
        hp: 50,
        attack: 10,
        defense: 5,
        speed: 6,
        range: 6,
        movement: "foot",
        abilities: [
            { name: "Rally", buff: true, attackBonus: 15, teamWide: true, cooldown: 8, duration: 4 },
            { name: "Coordinate", buff: true, speedBonus: 3, teamWide: true, cooldown: 6, duration: 3 }
        ],
        passive: "Mastermind: Allies in range get +10% accuracy",
        description: "Mastermind of the Aegis prison break."
    },
    creek: {
        name: "Creek",
        sprite: "🧪",
        role: "hero",
        hp: 65,
        attack: 25,
        defense: 8,
        speed: 6,
        range: 2,
        movement: "foot",
        abilities: [
            { name: "Acid Spray", damage: 50, type: "acid", cooldown: 3, range: 2, dot: 15, duration: 3 },
            { name: "Corrosive Touch", damage: 35, type: "acid", cooldown: 2, range: 1, armorShred: 10 }
        ],
        passive: "Medic Training: Can heal allies for 10 HP/turn",
        description: "Medic turned fighter. Acid specialist."
    },
    embercap: {
        name: "Embercap",
        sprite: "🔥",
        role: "hero",
        hp: 75,
        attack: 22,
        defense: 12,
        speed: 8,
        range: 2,
        movement: "foot",
        abilities: [
            { name: "Infiltrate", stealth: true, cooldown: 5, duration: 3 },
            { name: "Backstab", damage: 60, type: "physical", cooldown: 4, range: 1, stealthBonus: 2 }
        ],
        passive: "Infiltrator: Starts combat stealthed",
        description: "Loyalist infiltration specialist."
    },
    dewdrop: {
        name: "Dewdrop",
        sprite: "💧",
        role: "hero",
        hp: 70,
        attack: 18,
        defense: 10,
        speed: 7,
        range: 3,
        movement: "foot",
        abilities: [
            { name: "Summon Spirit Tiger", summon: "spirit_tiger_summon", cooldown: 12 },
            { name: "Water Jet", damage: 30, type: "water", cooldown: 2, range: 4, knockback: 1 }
        ],
        passive: "Summoner: Summoned creatures last longer",
        description: "Carries summoning scrolls from Rakasha."
    },
    bones: {
        name: "Bones",
        sprite: "💀",
        role: "hero",
        hp: 80,
        attack: 20,
        defense: 15,
        speed: 6,
        range: 1,
        movement: "foot",
        abilities: [
            { name: "Disguise", stealth: true, cooldown: 8, duration: 5 },
            { name: "Interrogate", debuff: true, defenseDebuff: 20, cooldown: 4, range: 1, duration: 4 }
        ],
        passive: "Survivor: Survives lethal blow once per battle",
        description: "Infiltrator. Survived being stabbed through chest."
    },
    smoking_j: {
        name: "Smoking J",
        sprite: "🚬",
        role: "hero",
        hp: 85,
        attack: 24,
        defense: 14,
        speed: 5,
        range: 2,
        movement: "foot",
        abilities: [
            { name: "Overcome Fear", buff: true, attackBonus: 20, selfOnly: true, cooldown: 6, duration: 4 },
            { name: "Rallying Cry", buff: true, defenseBonus: 10, teamWide: true, cooldown: 5, aoeRange: 3 }
        ],
        passive: "Courage: Immune to fear, grants allies +5 morale",
        description: "Despite venom-induced fear, rallied with comrades."
    },
    
    // Iron Legion
    colonel_steelstorm: {
        name: "Col. Steelstorm",
        sprite: "⚡",
        role: "hero",
        hp: 150,
        attack: 35,
        defense: 25,
        speed: 5,
        range: 1,
        movement: "heavy",
        abilities: [
            { name: "Tactical Strike", damage: 50, type: "physical", cooldown: 3, range: 2, aoe: 2 },
            { name: "Iron Command", buff: true, attackBonus: 20, teamWide: true, cooldown: 8, duration: 4 }
        ],
        passive: "Premier Tactician: Allies get +15% crit chance",
        description: "Premier tactical officer. Led the Vigilance capture."
    },
    marcus_ironhand: {
        name: "Marcus Ironhand",
        sprite: "✊",
        role: "hero",
        hp: 180,
        attack: 40,
        defense: 30,
        speed: 4,
        range: 1,
        movement: "heavy",
        abilities: [
            { name: "Execution Strike", damage: 80, type: "physical", cooldown: 5, range: 1, execute: true },
            { name: "Order 120", damage: 60, type: "physical", cooldown: 6, range: 1, terrify: true }
        ],
        passive: "See Through Lies: Detects stealthed enemies",
        description: "Issued the execution order. Ruthless commander."
    },
    iron_fist_elite: {
        name: "Iron Fist Elite",
        sprite: "🥊",
        role: "hero",
        hp: 120,
        attack: 30,
        defense: 25,
        speed: 4,
        range: 1,
        movement: "heavy",
        abilities: [
            { name: "Heavy Armor", buff: true, defenseBonus: 25, cooldown: 5, duration: 4 },
            { name: "Crushing Blow", damage: 45, type: "physical", cooldown: 3, range: 1, stun: true }
        ],
        passive: "Plate Armor: Reduces all damage by 5",
        description: "Elite assassination squad. Heavy plate armor."
    },
    
    // Mages Guild
    pernus_annmatar: {
        name: "Pernus Annmatar",
        sprite: "🎪",
        role: "hero",
        hp: 90,
        attack: 28,
        defense: 10,
        speed: 8,
        range: 4,
        movement: "flying",
        abilities: [
            { name: "Dancing Ghosts", summon: "dancing_ghost", cooldown: 6, count: 3 },
            { name: "Possession", control: true, cooldown: 10, range: 3, duration: 2 },
            { name: "Flight", buff: true, speedBonus: 4, selfOnly: true, cooldown: 4 }
        ],
        passive: "Showman: Enemies in range are distracted (-10% accuracy)",
        description: "Flew in to give the audience a show."
    },
    battle_mage: {
        name: "Battle Mage",
        sprite: "⚡",
        role: "hero",
        hp: 70,
        attack: 30,
        defense: 8,
        speed: 6,
        range: 4,
        movement: "foot",
        abilities: [
            { name: "Lightning Bolt", damage: 45, type: "lightning", cooldown: 3, range: 5, chain: 2 },
            { name: "Mana Shield", buff: true, defenseBonus: 20, cooldown: 5, duration: 3 }
        ],
        passive: "Arcane Focus: Spells have +1 range",
        description: "Guild combat specialist."
    },
    summoner: {
        name: "Summoner",
        sprite: "🌀",
        role: "hero",
        hp: 60,
        attack: 15,
        defense: 6,
        speed: 5,
        range: 3,
        movement: "foot",
        abilities: [
            { name: "Summon Elemental", summon: "fire_elemental", cooldown: 8 },
            { name: "Arcane Missile", damage: 25, type: "arcane", cooldown: 2, range: 5, homing: true }
        ],
        passive: "Master Summoner: Summons have +25% stats",
        description: "Specialist in creature summoning."
    },
    
    // Raventree Curse
    fire_wraith: {
        name: "Fire Wraith",
        sprite: "🔥",
        role: "hero",
        hp: 100,
        attack: 35,
        defense: 5,
        speed: 7,
        range: 2,
        movement: "ethereal",
        abilities: [
            { name: "Flame Burst", damage: 45, type: "fire", cooldown: 2, range: 3, aoe: 2 },
            { name: "Immolate", damage: 30, type: "fire", cooldown: 3, range: 1, dot: 20, duration: 3 }
        ],
        weakness: "ice",
        passive: "Burning Aura: Adjacent enemies take 5 fire damage",
        description: "Arcane entity. Vulnerable to ice attacks."
    },
    arcane_wraith: {
        name: "Arcane Wraith",
        sprite: "👻",
        role: "hero",
        hp: 120,
        attack: 30,
        defense: 8,
        speed: 6,
        range: 3,
        movement: "ethereal",
        abilities: [
            { name: "Soul Drain", damage: 35, type: "arcane", cooldown: 3, range: 2, lifesteal: 50 },
            { name: "Phase Shift", buff: true, defenseBonus: 50, cooldown: 6, duration: 2, phaseThrough: true }
        ],
        passive: "Ethereal: 25% chance to dodge physical attacks",
        description: "The entity confronted in Raventree Manor."
    },
    dancing_wraith: {
        name: "Dancing Wraith",
        sprite: "💃",
        role: "hero",
        hp: 80,
        attack: 20,
        defense: 5,
        speed: 9,
        range: 2,
        movement: "ethereal",
        abilities: [
            { name: "Compel Dance", debuff: true, speedDebuff: 5, aoe: 4, cooldown: 8, duration: 3 },
            { name: "Graceful Strike", damage: 30, type: "arcane", cooldown: 2, range: 1, dodge: true }
        ],
        passive: "Mesmerizing: Enemies have -20% accuracy",
        description: "Forces all parties to literally dance."
    },
    shard_stalker: {
        name: "Shard Stalker",
        sprite: "🪞",
        role: "hero",
        hp: 90,
        attack: 28,
        defense: 15,
        speed: 8,
        range: 2,
        movement: "ethereal",
        abilities: [
            { name: "Mirror Image", summon: "mirror_clone", cooldown: 6, count: 2 },
            { name: "Shatter", damage: 40, type: "physical", cooldown: 3, range: 2, aoe: 2 }
        ],
        passive: "Reflective: 20% chance to reflect spells",
        description: "Crystalline mirror entity."
    },
    arachnid_matriarch: {
        name: "Arachnid Matriarch",
        sprite: "🕷️",
        role: "hero",
        hp: 250,
        attack: 40,
        defense: 20,
        speed: 5,
        range: 2,
        movement: "foot",
        abilities: [
            { name: "Web Trap", debuff: true, speedDebuff: 6, cooldown: 3, range: 4, duration: 3 },
            { name: "Poison Breath", damage: 35, type: "poison", cooldown: 4, range: 3, aoe: 2, dot: 10 },
            { name: "Spawn Brood", summon: "minispider", cooldown: 5, count: 4 }
        ],
        passive: "Brood Mother: Spawns a minispider every 5 turns",
        description: "Queen of the web-choked grove."
    },
    
    // DK Crew
    donkey_kong: {
        name: "Donkey Kong",
        sprite: "🦍",
        role: "hero",
        hp: 180,
        attack: 45,
        defense: 20,
        speed: 6,
        range: 1,
        movement: "foot",
        abilities: [
            { name: "Ground Pound", damage: 55, type: "physical", cooldown: 3, range: 2, aoe: 2, stun: true },
            { name: "Barrel Throw", damage: 40, type: "physical", cooldown: 2, range: 5, knockback: 2 }
        ],
        passive: "Kong Strength: Deals +20% damage to structures",
        description: "Leader of the DK Crew."
    },
    funky_kong: {
        name: "Funky Kong",
        sprite: "🏄",
        role: "hero",
        hp: 100,
        attack: 25,
        defense: 12,
        speed: 9,
        range: 3,
        movement: "foot",
        abilities: [
            { name: "Tech Scan", reveal: true, cooldown: 5, range: 8, duration: 3 },
            { name: "Surfboard Strike", damage: 35, type: "physical", cooldown: 2, range: 2, dashThrough: true }
        ],
        passive: "Tech Genius: Detects traps and stealthed units",
        description: "Director of Intelligence. Found Kremling bug."
    },
    lanky_kong: {
        name: "Lanky Kong",
        sprite: "🤪",
        role: "hero",
        hp: 90,
        attack: 20,
        defense: 8,
        speed: 7,
        range: 3,
        movement: "foot",
        abilities: [
            { name: "Stretchy Arms", damage: 30, type: "physical", cooldown: 2, range: 5, grab: true },
            { name: "Bizarre Behavior", debuff: true, confuse: true, cooldown: 6, range: 4, duration: 3 }
        ],
        passive: "Unpredictable: 30% chance to avoid targeted attacks",
        description: "Never send to diplomatic functions."
    },
    
    // Kremling Krew
    king_k_rool: {
        name: "King K. Rool",
        sprite: "👑",
        role: "hero",
        hp: 200,
        attack: 38,
        defense: 25,
        speed: 4,
        range: 2,
        movement: "heavy",
        abilities: [
            { name: "Crown Throw", damage: 50, type: "physical", cooldown: 3, range: 5, boomerang: true },
            { name: "Belly Bounce", damage: 40, type: "physical", cooldown: 4, range: 1, knockback: 3, reflect: true }
        ],
        passive: "Royal Resilience: Regenerates 5 HP per turn",
        description: "Kremling King. Denies everything."
    },
    galypso: {
        name: "Galypso",
        sprite: "🗡️",
        role: "hero",
        hp: 70,
        attack: 35,
        defense: 8,
        speed: 10,
        range: 1,
        movement: "foot",
        abilities: [
            { name: "Poison Blade", damage: 40, type: "poison", cooldown: 2, range: 1, dot: 15, duration: 4 },
            { name: "Escape", stealth: true, dash: 5, cooldown: 5 }
        ],
        passive: "Assassin: First attack from stealth deals double damage",
        description: "Kremling assassin. Escaped after targeting Funky."
    },
    kremling_soldier: {
        name: "Kremling Captain",
        sprite: "🐊",
        role: "hero",
        hp: 95,
        attack: 25,
        defense: 18,
        speed: 5,
        range: 1,
        movement: "foot",
        abilities: [
            { name: "Snap Attack", damage: 35, type: "physical", cooldown: 2, range: 1, bleed: true },
            { name: "Thick Hide", buff: true, defenseBonus: 20, cooldown: 4, duration: 3 }
        ],
        passive: "Cold Blooded: Immune to poison",
        description: "Veteran Kremling infantry captain."
    },
    
    // Peach Loyalists
    captain_toadette: {
        name: "Cpt. Toadette",
        sprite: "👸",
        role: "hero",
        hp: 100,
        attack: 30,
        defense: 15,
        speed: 7,
        range: 2,
        movement: "foot",
        abilities: [
            { name: "Execute Traitors", damage: 70, type: "physical", cooldown: 4, range: 1, execute: true },
            { name: "Zealous Fury", buff: true, attackBonus: 25, teamWide: true, cooldown: 8, duration: 4 }
        ],
        passive: "No Mercy: +50% damage to fleeing enemies",
        description: "Loyalist leader. No mercy for traitors."
    },
    loyalist_soldier: {
        name: "Loyalist Champion",
        sprite: "⚔️",
        role: "hero",
        hp: 90,
        attack: 28,
        defense: 15,
        speed: 6,
        range: 1,
        movement: "foot",
        abilities: [
            { name: "For the Princess!", damage: 40, type: "physical", cooldown: 2, range: 1, zealot: true },
            { name: "Fanatic Charge", damage: 50, type: "physical", cooldown: 4, range: 3, selfDamage: 15, charge: true }
        ],
        passive: "Fanatic: Gains attack as HP decreases",
        description: "Fights with religious fervor."
    },
    
    // Fawful's Forces
    fawful: {
        name: "Fawful",
        sprite: "😈",
        role: "hero",
        hp: 120,
        attack: 32,
        defense: 18,
        speed: 6,
        range: 4,
        movement: "flying",
        abilities: [
            { name: "Laser Beam", damage: 45, type: "tech", cooldown: 2, range: 6, pierce: true },
            { name: "Deploy Robots", summon: "robot_minion", cooldown: 6, count: 3 },
            { name: "Fury Mode", buff: true, attackBonus: 30, speedBonus: 3, selfOnly: true, cooldown: 10, duration: 4 }
        ],
        passive: "FURY: All robots get +10% damage",
        description: "High-tech mastermind. Seized Peach's Castle."
    },
    robot_trooper: {
        name: "Robot Commander",
        sprite: "🤖",
        role: "hero",
        hp: 100,
        attack: 28,
        defense: 22,
        speed: 4,
        range: 3,
        movement: "mechanical",
        abilities: [
            { name: "Laser Barrage", damage: 35, type: "tech", cooldown: 2, range: 4, multiHit: 3 },
            { name: "Self-Destruct", damage: 80, type: "tech", cooldown: 1, range: 2, aoe: 2, selfDamage: 999 }
        ],
        passive: "Mechanical: Immune to poison and fear",
        description: "Advanced combat unit."
    },
    mecha_koopa: {
        name: "Mecha Koopa Prime",
        sprite: "🔧",
        role: "hero",
        hp: 80,
        attack: 25,
        defense: 18,
        speed: 7,
        range: 1,
        movement: "mechanical",
        abilities: [
            { name: "Wind-Up Charge", damage: 40, type: "physical", cooldown: 3, range: 3, charge: true },
            { name: "Explode", damage: 60, type: "tech", cooldown: 1, range: 2, aoe: 2, selfDamage: 999 }
        ],
        passive: "Wind-Up: Gains +5 attack each turn (max +25)",
        description: "Enhanced robotic Koopa leader."
    },
    
    // Koopa Troop
    kamek: {
        name: "Kamek",
        sprite: "🧹",
        role: "hero",
        hp: 80,
        attack: 28,
        defense: 10,
        speed: 7,
        range: 4,
        movement: "flying",
        abilities: [
            { name: "Weather Control", damage: 40, type: "arcane", cooldown: 5, range: 6, aoe: 3 },
            { name: "Enlarge", buff: true, hpBonus: 50, attackBonus: 15, targetAlly: true, cooldown: 8, duration: 4 },
            { name: "Magic Bolt", damage: 30, type: "arcane", cooldown: 2, range: 5 }
        ],
        passive: "Ancient Magic: Spells have 20% chance to cast twice",
        description: "Magical support keeps remnants fighting."
    },
    koopa_soldier: {
        name: "Koopa General",
        sprite: "🐢",
        role: "hero",
        hp: 85,
        attack: 22,
        defense: 25,
        speed: 4,
        range: 1,
        movement: "foot",
        abilities: [
            { name: "Shell Defense", buff: true, defenseBonus: 40, cooldown: 4, duration: 2, immobile: true },
            { name: "Shell Spin", damage: 30, type: "physical", cooldown: 2, range: 3, dashThrough: true }
        ],
        passive: "Shell Armor: Takes half damage from behind",
        description: "Veteran Koopa infantry general."
    },
    goomba: {
        name: "Goomba King",
        sprite: "👑",
        role: "hero",
        hp: 60,
        attack: 20,
        defense: 10,
        speed: 6,
        range: 1,
        movement: "foot",
        abilities: [
            { name: "Headbonk", damage: 25, type: "physical", cooldown: 1, range: 1 },
            { name: "Summon Goombas", summon: "goomba_swarm", cooldown: 5, count: 5 }
        ],
        passive: "Swarm Leader: Nearby Goombas deal +50% damage",
        description: "King of the Goombas."
    },
    
    // Dragons
    great_dragon: {
        name: "Great Dragon",
        sprite: "🐉",
        role: "hero",
        hp: 300,
        attack: 50,
        defense: 30,
        speed: 5,
        range: 3,
        movement: "flying",
        abilities: [
            { name: "Dragon Fire", damage: 70, type: "fire", cooldown: 3, range: 5, aoe: 3 },
            { name: "Tail Sweep", damage: 45, type: "physical", cooldown: 2, range: 2, aoe: 2, knockback: 2 }
        ],
        weakness: "sonic",
        passive: "Ancient Wyrm: Immune to control effects",
        description: "Revealed the fake war. Vulnerable to sonic."
    },
    ignis: {
        name: "Ignis the Red",
        sprite: "🔥",
        role: "hero",
        hp: 250,
        attack: 45,
        defense: 25,
        speed: 6,
        range: 3,
        movement: "flying",
        abilities: [
            { name: "Inferno", damage: 60, type: "fire", cooldown: 3, range: 5, aoe: 3, dot: 15 },
            { name: "Claw Rend", damage: 40, type: "physical", cooldown: 2, range: 1, bleed: true }
        ],
        passive: "Fire Incarnate: Heals from fire damage",
        description: "Dragon slain at Ignis Peak."
    },
    
    // Rakasha
    spirit_tiger: {
        name: "Spirit Tiger",
        sprite: "🐯",
        role: "hero",
        hp: 150,
        attack: 55,
        defense: 15,
        speed: 10,
        range: 1,
        movement: "ethereal",
        abilities: [
            { name: "Savage Maul", damage: 65, type: "spirit", cooldown: 2, range: 1, bleed: true },
            { name: "Spectral Pounce", damage: 50, type: "spirit", cooldown: 3, range: 4, dash: true }
        ],
        passive: "Summoned Fury: Deals +30% damage to Iron Legion",
        description: "Summoned entity. Decimated Iron Legion squad."
    },
    chief_thornpaw: {
        name: "Chief Thornpaw",
        sprite: "🦁",
        role: "hero",
        hp: 130,
        attack: 35,
        defense: 18,
        speed: 8,
        range: 1,
        movement: "foot",
        abilities: [
            { name: "Claw Fury", damage: 45, type: "physical", cooldown: 2, range: 1, multiHit: 3 },
            { name: "Rakasha Roar", buff: true, attackBonus: 20, teamWide: true, cooldown: 6, aoeRange: 4 }
        ],
        passive: "Clan Leader: Rakasha allies get +10% all stats",
        description: "Clan leader. Secret relationship with Princess Peach."
    },
    rakasha_warrior: {
        name: "Rakasha Champion",
        sprite: "🐱",
        role: "hero",
        hp: 100,
        attack: 32,
        defense: 14,
        speed: 9,
        range: 1,
        movement: "foot",
        abilities: [
            { name: "Swift Strike", damage: 38, type: "physical", cooldown: 2, range: 1, firstStrike: true },
            { name: "Predator Instinct", buff: true, speedBonus: 4, critBonus: 25, cooldown: 5, duration: 3 }
        ],
        passive: "Feline Grace: +20% dodge chance",
        description: "Elite clan warrior."
    }
};

// Summon unit templates
const SUMMONS = {
    spirit_tiger_summon: { name: "Spirit Tiger", sprite: "🐯", hp: 80, attack: 35, defense: 8, speed: 9, range: 1, movement: "ethereal", duration: 6 },
    dancing_ghost: { name: "Dancing Ghost", sprite: "👻", hp: 30, attack: 15, defense: 3, speed: 7, range: 1, movement: "ethereal", duration: 4 },
    fire_elemental: { name: "Fire Elemental", sprite: "🔥", hp: 50, attack: 25, defense: 5, speed: 6, range: 2, movement: "ethereal", duration: 5 },
    mirror_clone: { name: "Mirror Clone", sprite: "🪞", hp: 40, attack: 20, defense: 10, speed: 8, range: 1, movement: "ethereal", duration: 4 },
    minispider: { name: "Minispider", sprite: "🕸️", hp: 20, attack: 12, defense: 2, speed: 8, range: 1, movement: "foot", duration: 8 },
    robot_minion: { name: "Robot Minion", sprite: "🤖", hp: 40, attack: 18, defense: 12, speed: 5, range: 2, movement: "mechanical", duration: 6 },
    goomba_swarm: { name: "Goomba", sprite: "🍄", hp: 15, attack: 8, defense: 2, speed: 5, range: 1, movement: "foot", duration: 10 }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FACTIONS, HEROES, SUMMONS, UNIT_ROLES };
}
