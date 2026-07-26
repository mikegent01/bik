// laws-data-pokemon.js

export const POKEMON_CODES = {
    pokemon_league: {
        name: "The Pokémon League Rules & Regulations",
        logo: "factions/pokemon_league.png",
        description: "The official set of rules governing all sanctioned Pokémon battles, trainer conduct, and Gym Challenges. It is a comprehensive legal framework designed to ensure fairness and safety.",
        political: [
            { name: "The Gym Circuit Protocol", icon: "🏅", description: "A trainer must challenge the eight sanctioned Gym Leaders of a region in a specific order. Each victory earns a badge, and all eight badges are required to challenge the Elite Four. There are no exceptions." },
            { name: "Champion's Prerogative", icon: "👑", description: "The regional Pokémon League Champion holds ultimate authority. They can overrule the Elite Four, issue emergency directives, and act as the final arbiter in all League-related disputes." }
        ],
        military: [ { name: "Battle Regulations", icon: "⚔️", description: "Sanctioned battles are strictly regulated. Trainers may only use a set number of Pokémon (typically six), and attacks aimed at the opposing trainer are strictly forbidden and result in immediate disqualification." } ],
        social: [ { name: "Pokémon Care and Welfare Act", icon: "❤️‍🩹", description: "Trainers are legally required to provide adequate care for their Pokémon. Neglect or abuse is a serious crime, punishable by fines, license revocation, and seizure of all Pokémon." } ],
        penal: [ { name: "License Revocation", icon: "⚖️", description: "For severe violations of League rules (e.g., using banned items, cheating, endangering Pokémon), a trainer's official license can be permanently revoked, barring them from all official competitions." } ]
    },
    team_plasma: {
        name: "The Plasma Proclamations",
        logo: "factions/team_plasma.png",
        description: "The ideological doctrine of Team Plasma, based on the teachings of their king, N. It calls for the total separation of humans and Pokémon, a 'liberation' that they are willing to achieve through force.",
        political: [
            { name: "The Liberation Mandate", icon: "⛓️", description: "The core tenet: all Pokémon must be liberated from their human trainers. Team Plasma agents are required to 'persuade' trainers to release their Pokémon, using intimidation and theft if necessary." },
            { name: "The Two Heroes", icon: "📜", description: "Team Plasma's political strategy revolves around the legend of the two heroes of Unova and their dragons, seeking to recreate the legend with their king, N, as the new hero." }
        ],
        social: [ { name: "Anti-Trainer Doctrine", icon: "🗣️", description: "Public speeches and propaganda are used to paint Pokémon training as a cruel and selfish act. Any form of human-Pokémon partnership is condemned as a form of slavery." } ]
    },
    team_rocket: {
        name: "The Rocket Code",
        logo: "factions/team_rocket.png",
        description: "A ruthless criminal code where the only goal is profit and power for the organization. Loyalty to the boss, Giovanni, is absolute, and failure is not tolerated.",
        economic: [ { name: "Profit Above All", icon: "💰", description: "All operations, from stealing rare Pokémon to corporate espionage at Silph Co., are undertaken for the sole purpose of generating profit and resources for Team Rocket." } ],
        political: [ { name: "Absolute Secrecy", icon: "🤫", description: "Team Rocket's operations are clandestine. All members wear uniforms to obscure their identity, and the location of their hideouts is a closely guarded secret." } ],
        penal: [ { name: "Punishment for Failure", icon: "⚖️", description: "Failure to complete a mission or allowing a target to escape is met with severe punishment, from demotion to being exiled from the organization." } ]
    },
    ranger_union: {
        name: "The Ranger's Creed",
        logo: "factions/ranger_union.png",
        description: "The code of conduct for all Pokémon Rangers. It emphasizes the protection of nature, cooperation with Pokémon, and the preservation of peace.",
        political: [ { name: "The Styler Protocol", icon: "🌀", description: "Rangers do not use Poké Balls. They use the Capture Styler to temporarily convey their feelings of friendship to a Pokémon, asking for its help. The Pokémon is always released after the mission is complete." } ],
        social: [ { name: "Serve and Protect", icon: "🛡️", description: "A Ranger's primary duty is to protect both people and Pokémon from harm and to help those in need, regardless of the danger to themselves." } ],
        penal: [ { name: "Misuse of Power", icon: "⚖️", description: "Using the friendship of a Pokémon for personal gain or selfish purposes is the gravest offense a Ranger can commit, resulting in immediate expulsion from the Union." } ]
    },
    trainer_guild: {
        name: "The Unwritten Codex of Trainers",
        logo: "factions/trainer_guild.png",
        description: "An informal but widely respected code of conduct among Pokémon trainers, emphasizing fair play, respect for Pokémon, and mutual assistance. While not legally binding, violating the Codex results in social ostracism.",
        social: [
            { name: "The Bond of Partnership", icon: "❤️‍🩹", description: "A trainer's primary duty is the health, happiness, and well-being of their Pokémon. They are partners, not tools. Neglect and cruelty are the highest offenses." },
            { name: "The Challenge Etiquette", icon: "🤝", description: "When a trainer's eyes meet another's, a battle must commence. However, battles must be fair, with an equal number of Pokémon on each side. A trainer must always accept a loss gracefully." }
        ],
        economic: [ { name: "Honesty in Trade", icon: "🔄", description: "All Pokémon trades must be conducted honestly, with both parties fully aware of the Pokémon's condition and abilities. Deception in a trade is a grave violation of trust." } ],
        penal: [ { name: "Community Ostracism", icon: "⚖️", description: "Trainers who repeatedly violate the Codex are shunned by the community. Other trainers will refuse to battle, trade, or associate with them, effectively exiling them from the Guild." } ]
    },
    team_aqua: {
        name: "The Aqua Decree",
        logo: "factions/team_aqua.png",
        description: "The ideological manifesto of Team Aqua, which declares the primacy of the sea and the necessity of expanding it for the good of Water-type Pokémon and the world.",
        political: [ { name: "The Primacy of the Sea", icon: "🌊", description: "The ocean is the cradle of all life. Team Aqua's ultimate goal is to expand the sea by awakening Kyogre, believing this will create a paradise for water Pokémon and restore a natural balance." } ],
        military: [ { name: "Liberation of Water Pokémon", icon: "💧", description: "Team Aqua agents are tasked with 'liberating' water Pokémon from trainers and terrestrial habitats, believing they are returning them to their rightful home." } ]
    },
    team_magma: {
        name: "The Magma Testament",
        logo: "factions/team_magma.png",
        description: "The guiding principles of Team Magma, which advocate for the expansion of landmass to create more living space and accelerate human progress through logic and reason.",
        political: [ { name: "The Primacy of the Land", icon: "🌋", description: "The land is the foundation of human civilization and progress. Team Magma's goal is to expand the world's landmasses by awakening Groudon, creating an ideal world for humanity." } ],
        military: [ { name: "The Pursuit of Power", icon: "🔥", description: "Team Magma seeks to acquire ancient knowledge and powerful energy sources to control the legendary Pokémon Groudon and achieve their goals through scientific means." } ]
    },
    team_flare: {
        name: "The Flare Aesthetic",
        logo: "factions/team_flare.png",
        description: "A code based on style, beauty, and exclusivity. Team Flare believes only a select, beautiful few are worthy of existence, and all others must be eliminated for a perfect new world.",
        social: [ { name: "Beauty is Law", icon: "✨", description: "Only that which is beautiful, stylish, and exclusive is permitted. Ugliness, in all its forms, is seen as a blight to be purged. Membership is exclusive to those who fit their aesthetic and financial standards." } ],
        economic: [ { name: "The Price of Perfection", icon: "💰", description: "All operations must be both profitable and fashionable. Team Flare uses its vast wealth, generated through Lysandre Labs, to fund its secret project: the reactivation of the ultimate weapon." } ]
    },
    team_star: {
        name: "Starfall Street Code",
        logo: "factions/team_star.png",
        description: "The code of conduct for the delinquent students of Team Star. It is based on loyalty, defiance of the academy, and resolving disputes through Pokémon battles.",
        social: [
            { name: "Squad Solidarity ('Hasta la vistar!')", icon: "⭐", description: "An insult to one member is an insult to the entire squad. Members must always back each other up, no matter the odds. Betrayal of the squad is unforgivable." },
            { name: "Anti-Bullying Mandate", icon: "🛡️", description: "The primary rule is to stand up for the bullied and outcast against the oppressors. Team Star was formed to fight back against the academy's culture of bullying." }
        ],
        military: [ { name: "Operation Starfall", icon: "💥", description: "All actions are geared towards defeating the academy's strongest trainers and forcing the resignation of those responsible for their past suffering." } ]
    },
    go_rock_squad: {
        name: "The Go-Rock Rhythm",
        logo: "factions/go_rock_squad.png",
        description: "The corporate and familial hierarchy of the Go-Rock Squad. It is based on absolute loyalty to the Gordor family and the use of superior technology to achieve their goals.",
        political: [ { name: "The Family Business", icon: "💼", description: "The Go-Rock Squad is run like a family business, with Gordor as the CEO and his children, the Quads, as his top executives. Their authority is absolute." } ],
        military: [ { name: "Styler Superiority", icon: "🌀", description: "The Go-Rock Squad believes their modified Super Stylers are superior to the Ranger Union's technology, allowing them to control even legendary Pokémon. Technological dominance is key to their strategy." } ]
    }
};