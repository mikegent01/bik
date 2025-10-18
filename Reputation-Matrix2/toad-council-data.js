export const AUXILIARY_PARTY = {
    dan: {
        name: "Dan",
        weapon: "Longsword & Magic",
        status: "Weakened & Diminished",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    toad_lee: {
        name: "Toad Lee",
        description: "A hardy toad warrior who fights with a surprisingly large axe.",
        weapon: "Axe",
        status: "Active",
        level: 2,
        xp: 150,
        xp_to_next: 300,
        log: ["Survived the horrifying dinner and subsequent Iron Legion raid at Shadeward Mansion."],
        abilities: ["Reckless Attack"]
    },
    eager: {
        name: "Eager",
        weapon: "Whip",
        status: "Active",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    ryan: {
        name: "Ryan",
        weapon: "Spellcaster",
        status: "Active",
        description: "A quiet, studious toad with a natural but untrained affinity for magic. He is intensely curious about arcane matters and spends most of his time studying.",
        level: 2,
        xp: 150,
        xp_to_next: 300,
        log: ["Faced the Oracle at Shadeward Mansion and used a powerful darkness spell to aid the group's escape from a robot and a clone."],
        abilities: ["Magic Missile"]
    },
    roger: {
        name: "Roger",
        weapon: "Gun",
        status: "Active",
        level: 2,
        xp: 150,
        xp_to_next: 300,
        log: ["Stood up to the Oracle at Shadeward Mansion and dropped an Iron Legionnaire with his crossbow during the raid."],
        abilities: ["Deadeye Shot"]
    },
    bones: {
        name: "Bones",
        weapon: "Grotesque",
        status: "Active",
        level: 2,
        xp: 150,
        xp_to_next: 300,
        log: ["Captured and interrogated by the Iron Legion during the chaotic raid on Shadeward Mansion."],
        abilities: ["Rage"]
    },
    the_mole: {
        name: "The Mole",
        weapon: "Deceit",
        status: "Active",
        description: "A toad of unknown origin who has been traveling with the others. Revealed as an agent for the Iron Legion.",
        level: 2,
        xp: 150,
        xp_to_next: 300,
        log: ["Revealed his allegiance by helping the Iron Legion capture Bones during the raid on Shadeward Mansion."],
        abilities: ["Feint"]
    }
};

export const RUMORS = [
    {
        id: 'peach_death_fallout',
        title: "The Princess is Dead",
        time_ago: "45 Years Ago",
        description: "Princess Peach was killed, sparking a long and brutal civil war in the Mushroom Kingdom. While the exact circumstances are unclear, many blame Bowser's relentless aggression for creating the initial instability.",
        targets: ['bowser'],
        effects: {
            mushroom_regency: -50,
            regal_empire: -15,
            silver_flame: -15,
            oathbound_judges: -15
        }
    },
    // ... other rumors remain the same ...
    {
        id: 'waluigis_wyvern_exit',
        title: "Waluigi's Grand Exit",
        time_ago: "Tonight",
        description: "In a characteristically dramatic fashion, Waluigi and his associate Green T were seen escaping the grounds of the haunted mansion by leaping onto the back of a summoned wyvern, disappearing into the foggy night. Eyewitnesses claim Waluigi was whispering about 'time-traveling properties' and a fifty-fifty profit split just before their departure.",
        targets: ['waluigi', 'green_t'],
        effects: {
            cosmic_jesters: 15,
            freelancer_underworld: 10,
            regal_empire: -5,
            mages_guild: -5
        }
    },
    {
        id: 'shadeward_mansion_raid',
        title: "The Dinner That Broke Time",
        time_ago: "Tonight",
        description: "A group of toads seeking Archie were trapped in the Shadeward Mansion by the time-looping Oracle. The bizarre dinner was crashed by an Archie clone, a robot double, and an Iron Legion raid team led by Mr. Wario. The raid was revealed to be a setup, facilitated by a traitor toad who helped capture Bones. After a chaotic battle and negotiation, the toads escaped with their wounded, their trust shattered.",
        targets: ['liberated_toads', 'bones', 'wario'],
        effects: {
            liberated_toads: -30,
            iron_legion: -25,
            regal_empire: -15,
            freelancer_underworld: 10,
            mages_guild: 5
        }
    },
    {
        id: 'fall_of_bramblehaven',
        title: "The Bramblehaven Massacre",
        time_ago: "Today",
        description: "The Peach Loyalists brutally conquered the Fawful bastion of Bramblehaven, showing no mercy to surrendering troops. Their victory was costly but secured valuable intel. The act has solidified their reputation as ruthless fanatics.",
        targets: ['captain_toadette', 'embercap'],
        effects: {
            peach_loyalists: 10,
            mushroom_regency: -20,
            fawfuls_furious_freaks: -30,
            koopa_troop: 5,
            iron_legion: 5,
            silver_flame: -10
        }
    },
    {
        id: 'shadow_war',
        title: "Shadow War Escalation",
        time_ago: "Ongoing",
        description: "The conflict between the Onyx Hand and Moonfang Pack is escalating, and the party seems to be fanning the flames.",
        targets: ['party'],
        effects: { onyx_hand: 5, moonfang_pack: 5, silver_flame: -10 }
    },
    {
        id: 'dan_training',
        title: "Dan's Training",
        time_ago: "Ongoing",
        description: "The heroic toad, Dan, is being trained in magic by the Rakasha, under Markop's supervision.",
        targets: ['markop', 'dan'],
        effects: { rakasha_clans: 15, mages_guild: 5, mushroom_regency: 10, liberated_toads: 15 }
    },
    {
        id: 'cosmic_static',
        title: "Cosmic Static",
        time_ago: "Ongoing",
        description: "Archie's chaotic energies are reportedly causing 'cosmic static' detectable by strange entities.",
        targets: ['archie'],
        effects: { cosmic_jesters: 15, mages_guild: -5 }
    },
    {
        id: 'paladin_dilemma',
        title: "Paladin's Dilemma",
        time_ago: "Ongoing",
        description: "Markop's association with known criminals has not gone unnoticed by holy orders, tarnishing his reputation.",
        targets: ['markop'],
        effects: { silver_flame: -15, oathbound_judges: -10 }
    },
    {
        id: 'rebel_sympathies',
        title: "Rebel Sympathies",
        time_ago: "Ongoing",
        description: "The party's anti-authoritarian actions have made them popular with various rebel and revolutionary groups.",
        targets: ['party'],
        effects: { rebel_clans: 10, the_unchained: 5 }
    },
    {
        id: 'scrap_trail',
        title: "A Trail of Scrap",
        time_ago: "Ongoing",
        description: "The frequent destruction of magitek leaves a trail of valuable salvage, which has not gone unnoticed by goblin crews.",
        targets: ['party'],
        effects: { ratchet_raiders: 10, regal_empire: -5 }
    }
];