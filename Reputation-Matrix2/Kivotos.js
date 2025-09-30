// factions/kivotos.js
export const KIVOTOS_FACTIONS = {
    general_student_union: {
        name: "General Student Union",
        description: "The supreme student council that governs the massive Academy City of Kivotos. They wield immense administrative power, but struggle to maintain control over the various, often conflicting, academies.",
        logo: 'factions/kivotos_gsu.png',
        relations: {
            allies: [],
            enemies: ['gehenna_academy']
        },
        power_level: 9,
        category: "Major Powers",
        region: "Kivotos"
    },
    millennium_science_school: {
        name: "Millennium Science School",
        description: "A technologically advanced academy focused on science and engineering. They are known for their high-tech weaponry, androids, and a powerful hacker collective known as 'Veritas'.",
        logo: 'factions/kivotos_millennium.png',
        relations: {
            allies: [],
            enemies: []
        },
        power_level: 8,
        category: "Regional Powers",
        region: "Kivotos"
    },
    trinity_general_school: {
        name: "Trinity General School",
        description: "An elegant and traditionalist academy with a strong sense of justice and order. They often act as peacekeepers, but their methods can be rigid and uncompromising.",
        logo: 'factions/kivotos_trinity.png',
        relations: {
            allies: [],
            enemies: ['gehenna_academy']
        },
        power_level: 8,
        category: "Regional Powers",
        region: "Kivotos"
    },
    gehenna_academy: {
        name: "Gehenna Academy",
        description: "A chaotic and unruly academy known for its delinquent students and constant trouble-making. They openly defy the General Student Union and value freedom above all else.",
        logo: 'factions/kivotos_gehenna.png',
        relations: {
            allies: [],
            enemies: ['general_student_union', 'trinity_general_school']
        },
        power_level: 7,
        category: "Underworld & Fringe",
        region: "Kivotos"
    },
    shanhaijing_senior_secondary_school: {
        name: "Shanhaijing Senior Secondary School",
        description: "An academy modeled after ancient Chinese schools, rich in tradition and mysticism. It is known for its focus on alchemy, martial arts, and its delicious, often suspiciously potent, medicinal cuisine.",
        logo: 'factions/kivotos_shanhaijing.png',
        relations: {
            allies: [],
            enemies: []
        },
        power_level: 7,
        category: "Regional Powers",
        region: "Kivotos"
    },
    abydos_high_school: {
        name: "Abydos High School",
        description: "A once-prestigious academy now buried in debt and sand. Its few remaining students form the 'Foreclosure Task Force', fighting desperately to save their school from being shut down.",
        logo: 'factions/kivotos_abydos.png',
        relations: {
            allies: [],
            enemies: ['freelancer_underworld'] // Kaiser Corporation
        },
        power_level: 3,
        category: "Regional Powers",
        region: "Kivotos"
    },
    red_winter_federal_academy: {
        name: "Red Winter Federal Academy",
        description: "A highly secretive and isolationist academy located in a freezing northern region. Known for its strict discipline, powerful student council (the Spec Bureau), and frequent, brutal purges of 'impure elements'.",
        logo: 'factions/kivotos_red_winter.png',
        relations: {
            allies: [],
            enemies: []
        },
        power_level: 7,
        category: "Regional Powers",
        region: "Kivotos"
    }
};
