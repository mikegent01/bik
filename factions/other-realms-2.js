// This file contains faction data for various other realms and dimensions.

export const OTHER_REALMS_2 = {
    zootopia_republic: {
        name: "Democratic Republic of Zootopia",
        description: "A progressive nation where anthropomorphic beings from diverse backgrounds strive to create a truly inclusive society.",
        logo: 'faction_zootopia.png',
        relations: { 
            allies: ['pokemon_league', 'the_unchained', 'liberated_toads'], 
            enemies: ['regal_empire', 'iron_legion', 'equestrian_regime']
        },
        power_level: 6,
        category: "Regional Powers",
        region: "Zootopia",
        leader: "president_judy",
        notable_people: [
            { name: "President Judy", role: "First Rabbit President", description: "A groundbreaking leader working to dismantle systemic bias and promote interspecies cooperation." },
            { name: "Officer Wilde", role: "Head of ZPD", description: "The cunning and charismatic chief of police, responsible for maintaining law and order." }
        ],
        waluigi_tip: "They're all about 'trust' and 'friendship'. Just start a rumor that the predators are hoarding all the good snacks. Instant paranoia! WAH!"
    },
    forest_tribes: {
        name: "Tribal Confederacy of Forests",
        description: "An untamed land where indigenous tribes live in harmony with the wild, fiercely guarding their ancestral lands from outsiders.",
        logo: 'faction_forests.png',
        relations: { 
            allies: ['rakasha_clans', 'middle_earth_kingdoms'], 
            enemies: ['regal_empire', 'iron_legion', 'the_known_world']
        },
        power_level: 5,
        category: "Regional Powers",
        region: "Realm of Forests",
        leader: "chief_redwood",
        notable_people: [
            { name: "Chief Redwood", role: "Tribal Leader", description: "A wise and powerful leader who can commune with ancient forest spirits for guidance." },
            { name: "Kaelen Swift-Arrow", role: "Lead Pathfinder", description: "The Confederacy's greatest scout and warrior, responsible for border defense." }
        ],
        waluigi_tip: "They respect 'nature'. So just paint an Imperial logo on a sacred tree. They'll be so busy fighting the Empire, they won't see me stealing all their shiny rocks! WAH-HAH!"
    },
    leclaire_democracy: {
        name: "L'Eclaire Island Democracy",
        description: "A small island nation with a charismatic leader who champions democracy while secretly plotting to unify the Doughnut World under his rule.",
        logo: 'faction_leclaire.png',
        relations: { 
            allies: ['divided_realms_republic'], 
            enemies: ['regal_empire', 'mushroom_regency', 'grand_line_republic']
        },
        power_level: 4,
        category: "Regional Powers",
        region: "L'Eclaire Island",
        leader: "ruler_doug",
        notable_people: [
            { name: "Ruler Doug", role: "Island Leader", description: "A populist leader with a silver tongue and a hidden agenda for world conquest." },
            { name: "General Matisse", role: "Head of the Militia", description: "The loyal commander of L'Eclaire's surprisingly well-equipped military." }
        ],
        waluigi_tip: "He loves to give speeches about 'freedom'. Just replace his notes with a recipe for garlic bread. The crowd will be confused, his image will be ruined, and I'll be laughing! WAH!"
    },
    triple_moon_remnants: {
        name: "Anarchic Remnants of Triple Moon",
        description: "A dangerous, unstable region scarred by past wars that left gaping holes into outer space, now ruled by competing warlords and survivor enclaves.",
        logo: 'faction_triple_moon.png',
        relations: { 
            allies: ['cosmic_jesters'], 
            enemies: ['regal_empire', 'oathbound_judges', 'the_edge_outpost']
        },
        power_level: 3,
        category: "Underworld & Fringe",
        region: "Triple Moon World",
        leader: "warlord_luna",
        notable_people: [
            { name: "Warlord Luna", role: "De Facto Warlord", description: "A ruthless and powerful leader who seized control of the largest remnant faction through sheer force." },
            { name: "The Star-Gazer", role: "Survivor Prophet", description: "A mysterious figure who predicts stellar phenomena and guides nomadic groups through the treacherous landscape." }
        ],
        waluigi_tip: "Everyone here is paranoid! Just leave a crate of 'valuable salvage' that's actually full of angry space badgers. The warlords will fight over it, and I'll get a good show! WAH!"
    },
    divided_realms_republic: {
        name: "Fragmented Republic of the Divided Realms",
        description: "A region of opposing powers with independent island nations connected by ancient bridges, rife with internal conflict and suspicion.",
        logo: 'faction_divided_realms.png',
        relations: { 
            allies: ['leclaire_democracy', 'freelancer_underworld'], 
            enemies: ['regal_empire', 'grand_line_republic', 'the_known_world']
        },
        power_level: 7,
        category: "Regional Powers",
        region: "Divided Realms",
        leader: "president_varis",
        notable_people: [
            { name: "President Varis", role: "Elected Leader", description: "A shrewd politician trying to hold the fragile republic together through diplomacy and backroom deals." },
            { name: "Silas Kane", role: "Merchant Guildmaster", description: "The powerful leader of the Merchant Guilds Conglomerate, whose economic power rivals that of the government." }
        ],
        waluigi_tip: "They're all connected by bridges! So what happens if one of those bridges... has a little 'accident'? WAH! Instant chaos and a great opportunity to 'salvage' some toll booths!"
    }
};
