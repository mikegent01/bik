// factions/pokemon.js
export const POKEMON_FACTIONS = {
    pokemon_league: {
        name: "The Pokémon League",
        description: "The official governing body of the various Pokémon regions. They sanction gyms, host championship tournaments, and act as the primary force of order. They oppose any organization that threatens the bond between humans and Pokémon.",
        logo: 'factions/pokemon_league.png',
        relations: {
            allies: ['trainer_guild', 'ranger_union'],
            enemies: ['team_plasma', 'team_aqua', 'team_magma', 'team_flare', 'team_rocket', 'team_star', 'go_rock_squad']
        },
        power_level: 8,
        category: "Major Powers",
        region: "Pokémon Regions",
        leader: "Champion Alder",
        notable_people: [
            { name: "Champion Alder", role: "Unova League Champion", description: "The wise and powerful champion of the Unova region, known for his deep connection with his Pokémon." },
            { name: "Cynthia", role: "Sinnoh League Champion (Visitor)", description: "A renowned and powerful champion from another region, currently observing the situation in Unova." },
            { name: "The Elite Four", role: "Unova's Elite Trainers", description: "A council of four of the most powerful trainers (Shauntal, Grimsley, Caitlin, Marshal) who serve as the final challenge before the Champion." }
        ]
    },
    team_plasma: {
        name: "Team Plasma",
        description: "An organization from Unova advocating for the 'liberation' of Pokémon from humans. Their methods are extreme, and their true goals, orchestrated by the enigmatic Ghetsis and the pure-hearted king N, are a subject of intense debate and suspicion.",
        logo: 'factions/team_plasma.png',
        relations: {
            allies: [],
            enemies: ['pokemon_league', 'trainer_guild', 'ranger_union']
        },
        power_level: 6,
        category: "Underworld & Fringe",
        region: "Pokémon Regions (Unova)",
        leader: "N",
        notable_people: [
            { name: "N", role: "King of Team Plasma", description: "A mysterious young man with the ability to understand Pokémon. He genuinely seeks a world where humans and Pokémon are separate and equal." },
            { name: "Ghetsis", role: "Shadowy Benefactor", description: "One of the Seven Sages and the true, manipulative mastermind behind Team Plasma, seeking to use the organization for his own selfish ambitions." },
            { name: "The Seven Sages", role: "Leadership Council", description: "The council that guides Team Plasma's public operations, each overseeing a different aspect of their plan." }
        ]
    },
    trainer_guild: {
        name: "The Trainer Guild",
        description: "An unofficial, widespread collective of Pokémon trainers. They are not a formal organization but a community bound by a love for battling, trading, and exploring. They are wary of any group that would harm Pokémon or trainers.",
        logo: 'factions/trainer_guild.png',
        relations: {
            allies: ['pokemon_league', 'ranger_union'],
            enemies: ['team_plasma', 'team_aqua', 'team_magma', 'team_flare', 'team_rocket', 'team_star', 'go_rock_squad']
        },
        power_level: 5,
        category: "Regional Powers",
        region: "Pokémon Regions",
        leader: "None (Decentralized)",
        notable_people: [
            { name: "Veteran Trainers", role: "Informal Leaders", description: "Experienced trainers who act as mentors and community leaders within the Guild." },
            { name: "Battle Enthusiasts", role: "Core Membership", description: "The vast majority of the guild, always looking for a new challenge." }
        ]
    },
    team_aqua: {
        name: "Team Aqua",
        description: "An eco-terrorist organization from the Hoenn region with the goal of expanding the world's oceans by awakening the legendary Pokémon Kyogre. They believe this will restore balance to the world for the benefit of water Pokémon.",
        logo: 'factions/team_aqua.png',
        relations: {
            allies: [],
            enemies: ['pokemon_league', 'trainer_guild', 'team_magma']
        },
        power_level: 5,
        category: "Underworld & Fringe",
        region: "Pokémon Regions (Hoenn)",
        leader: "Archie",
        notable_people: [
            { name: "Archie", role: "Leader", description: "The passionate and charismatic leader of Team Aqua, who genuinely believes expanding the sea is for the greater good." },
            { name: "Matt & Shelly", role: "Administrators", description: "Archie's loyal and powerful second-in-commands." }
        ]
    },
    team_magma: {
        name: "Team Magma",
        description: "An eco-terrorist organization from the Hoenn region with the goal of expanding the world's landmasses by awakening the legendary Pokémon Groudon. They believe this will accelerate human progress and development.",
        logo: 'factions/team_magma.png',
        relations: {
            allies: [],
            enemies: ['pokemon_league', 'trainer_guild', 'team_aqua']
        },
        power_level: 5,
        category: "Underworld & Fringe",
        region: "Pokémon Regions (Hoenn)",
        leader: "Maxie",
        notable_people: [
            { name: "Maxie", role: "Leader", description: "The intelligent and calculating leader of Team Magma, who sees land expansion as a logical step for humanity's future." },
            { name: "Tabitha & Courtney", role: "Administrators", description: "Maxie's fiercely loyal and powerful lieutenants." }
        ]
    },
    team_flare: {
        name: "Team Flare",
        description: "A stylish and well-funded secret society from the Kalos region. Obsessed with beauty and profit, their ultimate goal is to use the 'ultimate weapon' to wipe out all life except for themselves, creating a new, 'beautiful' world.",
        logo: 'factions/team_flare.png',
        relations: {
            allies: [],
            enemies: ['pokemon_league', 'trainer_guild']
        },
        power_level: 7,
        category: "Major Powers",
        region: "Pokémon Regions (Kalos)",
        leader: "Lysandre",
        notable_people: [
            { name: "Lysandre", role: "Leader", description: "A charismatic inventor and the public face of Lysandre Labs, who secretly leads Team Flare with the goal of creating a 'beautiful' world through mass destruction." },
            { name: "Xerosic", role: "Head Scientist", description: "The lead scientist behind the ultimate weapon, a man of brilliant but twisted intellect." }
        ]
    },
    team_rocket: {
        name: "Team Rocket",
        description: "A powerful and ruthless criminal syndicate originating in the Kanto and Johto regions. Their primary goal is to steal or capture powerful Pokémon to be sold for profit or used to achieve world domination through military and technological might.",
        logo: 'factions/team_rocket.png',
        relations: {
            allies: [],
            enemies: ['pokemon_league', 'trainer_guild']
        },
        power_level: 7,
        category: "Underworld & Fringe",
        region: "Pokémon Regions (Kanto/Johto)",
        leader: "Giovanni",
        notable_people: [
            { name: "Giovanni", role: "Boss", description: "The enigmatic and powerful leader of Team Rocket, and secretly the Viridian City Gym Leader. His ultimate goal is world domination." },
            { name: "The Four Executives", role: "Command Staff", description: "A council of four powerful executives (Archer, Ariana, Petrel, Proton) who manage Team Rocket's day-to-day operations." }
        ]
    },
    team_star: {
        name: "Team Star",
        description: "A group of delinquent students from Paldea's Naranja/Uva Academy. Organized into several squads, they are not truly evil, but rather a group of bullied outcasts who have banded together to fight back against the school's system. They operate out of fortified bases on campus.",
        logo: 'factions/team_star.png',
        relations: {
            allies: [],
            enemies: ['pokemon_league']
        },
        power_level: 3,
        category: "Underworld & Fringe",
        region: "Pokémon Regions (Paldea)",
        leader: "Cassiopeia (Alias)",
        notable_people: [
            { name: "Cassiopeia", role: "The 'Big Boss'", description: "The mysterious, unseen leader who coordinates all of Team Star's operations via phone." },
            { name: "The Squad Bosses", role: "Field Commanders", description: "The five charismatic leaders (Giacomo, Mela, Atticus, Ortega, Eri) who command Team Star's various squads." }
        ]
    },
    ranger_union: {
        name: "Ranger Union",
        description: "An organization of Pokémon Rangers dedicated to protecting nature, preserving peace, and helping people and Pokémon in need. They operate primarily in the Fiore and Almia regions, using Capture Stylers instead of Poké Balls.",
        logo: 'factions/ranger_union.png',
        relations: {
            allies: ['pokemon_league', 'trainer_guild'],
            enemies: ['go_rock_squad', 'team_plasma']
        },
        power_level: 6,
        category: "Regional Powers",
        region: "Pokémon Regions (Fiore/Almia)",
        leader: "Chairperson Erma",
        notable_people: [
            { name: "Chairperson Erma", role: "Leader of the Union", description: "The head of the Ranger Union, who oversees all Ranger operations from the headquarters in Fall City." },
            { name: "The Top Rangers", role: "Elite Agents", description: "A group of the most skilled and experienced Rangers who are sent on the most dangerous missions." }
        ]
    },
    go_rock_squad: {
        name: "Go-Rock Squad",
        description: "A villainous team from the Fiore region. Led by the wealthy Gordor, their goal is to capture legendary Pokémon using their own modified Super Stylers to cause chaos and establish their dominance.",
        logo: 'factions/go_rock_squad.png',
        relations: {
            allies: [],
            enemies: ['ranger_union', 'pokemon_league', 'trainer_guild']
        },
        power_level: 5,
        category: "Underworld & Fringe",
        region: "Pokémon Regions (Fiore)",
        leader: "Gordor",
        notable_people: [
            { name: "Gordor", role: "Leader", description: "The founder and leader of the squad, a man who believes power is everything." },
            { name: "The Go-Rock Quads", role: "Elite Admins", description: "Gordor's four children, a musical quartet who act as his powerful and eccentric administrators." }
        ]
    }
};