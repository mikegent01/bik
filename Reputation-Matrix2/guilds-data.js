

import { LORE_DATA } from './lore.js';

export const GUILD_DATA = {
    'stonecarvers_brethren': {
        name: "The Stonecarver's Brethren",
        description: "A stoic and secretive guild of Dwarven masons and architects. They possess the lost knowledge of how to shape and enchant stone, and are responsible for the construction of all major Dwarven holds.",
        leader: "Rune-Master Thrain",
        sponsoring_faction: "kingdoms_of_the_dwarves",
        headquarters: "The Heart-Forge, Middle Earth",
        member_count: 420,
        isPlayerMember: 'humpik', // Hjumpik is a member
        active_contracts: 12,
        resources: { stone: 85, gold: 60, magic: 30 },
        goals: [ "Build fortresses that will stand until the end of time.", "Preserve the secret arts of rune-carving.", "Uncover the lost secrets of the first Dwarven cities." ],
        duties: [
            { task: "Carve a Masterwork Rune", status: "Pending", reward: "Rank Up: Master Mason" },
            { task: "Inspect the Foundation of Raventree", status: "Active", reward: "50 Gold" },
            { task: "Tithes due", status: "Overdue", reward: "Avoid Expulsion" }
        ],
        ranks: [
            { title: "Rune-Master", description: "The guild leader, who knows the most powerful stone-runes." },
            { title: "Master Mason", description: "Oversees the construction of a major hold or fortress." },
            { title: "Stonecarver", description: "A skilled artisan and builder. (Hjumpik's Rank)" },
            { title: "Pebble-Polisher", description: "An apprentice who learns by doing the most menial tasks." }
        ],
        rules: [ "The mountain remembers.", "A straight line and a true heart.", "What is built in stone, endures." ],
        recruitment: "Dwarves born into the mason clans are automatically entered into the guild. Others must prove their dedication by single-handedly quarrying a perfect block of granite.",
        sub_guilds: [],
        research_bonus: { category: 'TECH', amount: 0.10 },
        primary_species: ['dnd_dwarf_mountain', 'dnd_dwarf_hill', 'middle_earth_dwarf'],
        poi_affinity: ['mine', 'quarry', 'forge']
    },
    'wayfinders_guild': {
        name: "The Wayfinders' Guild",
        description: "An independent organization dedicated to charting the unknown regions of the world. They sell maps and recovered artifacts to fund their expeditions.",
        leader: "High Cartographer Elara",
        sponsoring_faction: null, 
        headquarters: "The Horizon Spire, Port Anvil",
        member_count: 1500,
        active_contracts: 45,
        resources: { stone: 10, gold: 40, magic: 20 },
        goals: [ "Map the entire Doughnut World.", "Discover and catalogue new species.", "Uncover lost artifacts." ],
        duties: [],
        ranks: [
            { title: "High Cartographer", description: "The elected leader." },
            { title: "Master Wayfinder", description: "Leads major expeditions." },
            { title: "Journeyman", description: "Experienced explorer." },
            { title: "Apprentice", description: "New member." }
        ],
        rules: [ "The map must be true.", "Share knowledge.", "Leave no trace." ],
        recruitment: "Membership granted for significant discoveries.",
        sub_guilds: [],
        research_bonus: { category: 'ECONOMIC', amount: 0.15 },
        primary_species: ['dnd_human', 'regal_midlander', 'kivotos_human'],
        poi_affinity: ['trade_post', 'port', 'landmark']
    },
    'shadow_syndicate': {
        name: "The Shadow Syndicate",
        description: "The most powerful branch of the Freelancer Underworld. Controls smuggling, assassination, and espionage.",
        leader: "'The Broker'",
        sponsoring_faction: "freelancer_underworld",
        headquarters: "The Flophouse",
        member_count: "Unknown",
        active_contracts: 99,
        resources: { stone: 5, gold: 95, magic: 15 },
        goals: [ "Maintain control over the underworld.", "Accumulate wealth.", "Gather secrets." ],
        duties: [],
        ranks: [ { title: "Shadow Broker", description: "Unseen master." }, { title: "Whisper Lord", description: "Spy master." }, { title: "Silent Hand", description: "Assassin." }, { title: "Echo", description: "Informant." } ],
        rules: [ "Anonymity is life.", "The contract is absolute.", "Betrayal is death." ],
        recruitment: "Invitation only.",
        sub_guilds: [ { name: "The Cleaners", leader: "Mother Mop", description: "Disposal specialists." } ],
        research_bonus: { category: 'POLITICAL', amount: 0.20 },
        primary_species: ['dnd_goblin', 'dnd_tiefling', 'skaven'],
        poi_affinity: ['market', 'city', 'slum']
    },
    'aegis_magi': {
        name: "The Aegis Magi",
        description: "The military arm of the Mages' Guild. Battle-mages who enforce guild law.",
        leader: "Battle-Mage Kovar",
        sponsoring_faction: "mages_guild",
        headquarters: "The Argent Tower",
        member_count: 300,
        active_contracts: 5,
        resources: { stone: 20, gold: 50, magic: 90 },
        goals: [ "Defend the Guild.", "Enforce edicts.", "Neutralize rogue mages." ],
        duties: [],
        ranks: [ { title: "Grand Magus", description: "Supreme commander." }, { title: "Battle-Mage", description: "Officer." }, { title: "Adept", description: "Soldier." } ],
        rules: [ "The Guild is paramount.", "Control your power.", "Knowledge is a weapon." ],
        recruitment: "Apprentices with combat aptitude.",
        sub_guilds: [],
        research_bonus: { category: 'MAGIC', amount: 0.15 },
        primary_species: ['dnd_elf_high', 'kivotos_angel', 'unicorn'],
        poi_affinity: ['mages_tower', 'library', 'academy']
    },
    'alchemists_union': {
        name: "The Alchemists' Union",
        description: "A professional guild for potion-makers. They regulate trade and quality.",
        leader: "Grand Brewer Elara",
        sponsoring_faction: null,
        headquarters: "The Bubbling Cauldron",
        member_count: 600,
        active_contracts: 200,
        resources: { stone: 10, gold: 70, magic: 60 },
        goals: [ "Control reagent trade.", "Advance alchemy.", "Remain neutral." ],
        duties: [],
        ranks: [ { title: "Grand Brewer", description: "Head of the Union." }, { title: "Master Alchemist", description: "Expert creator." }, { title: "Journeyman", description: "Licensed shop owner." } ],
        rules: [ "Protect recipes.", "Ensure quality.", "No world-ending potions." ],
        recruitment: "Rigorous apprenticeship.",
        sub_guilds: [],
        research_bonus: { category: 'MEDICAL', amount: 0.15 },
        primary_species: ['dnd_gnome', 'mushroom_kingdom_toad', 'skaven'],
        poi_affinity: ['workshop', 'forest', 'swamp']
    }
};

export const CHARTER_DATA = {
    'gilded_gryphon': {
        name: "The Gilded Gryphon",
        description: "A highly disciplined mercenary company. They value contracts and coin above all.",
        leader: "Commander Valerius",
        sponsoring_faction: "iron_legion",
        headquarters: "The Gryphon's Roost",
        member_count: 500,
        active_contracts: 3,
        resources: { stone: 40, gold: 60, magic: 5 },
        goals: [ "Secure high-value contracts.", "Rebuild treasury.", "Recruit warriors." ],
        duties: [],
        ranks: [ { title: "Commander", description: "Leader." }, { title: "Captain", description: "Wing leader." }, { title: "Mercenary", description: "Soldier." } ],
        rules: [ "Contract is bond.", "Payment is paramount.", "Discipline is shield." ],
        recruitment: "Open to skilled warriors.",
        sub_guilds: [ { name: "The Siegebreakers", leader: "Engineer Tiber", description: "Siege specialists." } ],
        research_bonus: { category: 'WEAPONS', amount: 0.15 },
        primary_species: ['dnd_human', 'dnd_orc', 'warhammer_human'],
        poi_affinity: ['fortress', 'city', 'outpost']
    },
    'wario_wrecking_crew': {
        name: "Wario Wrecking Crew",
        description: "Demolition and 'asset acquisition' specialists.",
        leader: "Foreman Bob",
        sponsoring_faction: "wario_land",
        headquarters: "Bob-omb Factory",
        member_count: 80,
        active_contracts: 15,
        resources: { stone: 10, gold: 80, magic: 10 },
        goals: [ "Demolish for profit.", "Acquire salvage.", "Test explosives." ],
        duties: [],
        ranks: [ { title: "Foreman", description: "Leader." }, { title: "Blaster", description: "Explosives expert." }, { title: "Gofer", description: "Grunt." } ],
        rules: [ "Use more dynamite.", "Finders keepers.", "Safety third." ],
        recruitment: "Must love explosions.",
        sub_guilds: [],
        research_bonus: { category: 'TECH', amount: 0.10 },
        primary_species: ['bob_omb', 'dnd_goblin', 'wario'],
        poi_affinity: ['ruins', 'mine', 'construction_site']
    }
};
