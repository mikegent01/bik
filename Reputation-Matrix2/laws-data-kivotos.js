// laws-data-kivotos.js

export const KIVOTOS_CODES = {
    general_student_union: {
        name: "The Kivotos Basic Act",
        logo: "factions/kivotos_gsu.png",
        description: "The overarching legal framework intended to govern all of Kivotos. In practice, its enforcement is weak, and it serves more as a set of guidelines that academies frequently ignore.",
        supporters: ['trinity_general_school'],
        opponents: ['gehenna_academy', 'freelancer_underworld'],
        political: [
            {
                name: "Academy Sovereignty",
                spectrum: [
                    { name: "Total Autonomy", description: "Each academy is a sovereign entity with its own laws." },
                    { name: "Federal Authority", description: "The GSU has ultimate authority over all academy districts." }
                ],
                current: 0, trend: 1,
                description: "While the GSU is the de jure authority, the de facto reality is one of academy autonomy, a constant source of frustration for the central government."
            }
        ],
        military: [
            {
                name: "Firearm Regulation",
                spectrum: [
                    { name: "Total Deregulation", description: "Firearms are completely legal for all students." },
                    { name: "Strict Licensing", description: "Only authorized students and clubs may possess heavy weaponry." }
                ],
                current: 0, trend: 0,
                description: "The GSU has all but given up on firearm control. The right of students to bear arms is an unshakeable, if chaotic, reality of Kivotos."
            }
        ]
    },
    trinity_general_school: {
        name: "The Trinity Conventions",
        logo: "factions/kivotos_trinity.png",
        description: "A code of conduct based on justice, faith, and tradition. The Conventions govern student life at Trinity with a firm but righteous hand.",
        supporters: ['general_student_union'],
        opponents: ['gehenna_academy'],
        penal: [
            {
                name: "The Path of Justice",
                spectrum: [
                    { name: "Restorative Justice", description: "Rule-breakers are given a chance to atone through remedial lessons and service." },
                    { name: "Punitive Justice", description: "Violations are met with swift and harsh punishment by the Justice Task Force." }
                ],
                current: 1, trend: 0,
                description: "Justice at Trinity is swift and uncompromising. The Justice Task Force is empowered to deal with any threat to the academy's peace and order."
            }
        ]
    },
    millennium_science_school: {
        name: "The Millennium School By-Laws",
        logo: "factions/kivotos_millennium.png",
        description: "A legal framework based on pure logic and scientific ethics. The by-laws are constantly updated to account for new technologies and discoveries.",
        supporters: [],
        opponents: [],
        economic: [
            {
                name: "Intellectual Property",
                spectrum: [
                    { name: "Open Source", description: "All research and technology is shared freely for the advancement of science." },
                    { name: "Proprietary Secrecy", description: "Discoveries are patented and fiercely guarded as the property of the inventor or club." }
                ],
                current: 1, trend: 0,
                description: "Millennium operates on a strict patent system. Technological secrets are a valuable currency, leading to intense competition and corporate espionage between clubs."
            }
        ]
    },
    abydos_high_school: {
        name: "The Foreclosure Task Force Directives",
        logo: "factions/kivotos_abydos.png",
        description: "Less a legal code and more a desperate set of survival rules. The directives are focused on one thing: earning enough money to pay off the school's crippling debt.",
        supporters: [],
        opponents: ['freelancer_underworld'],
        economic: [
            {
                name: "The Bottom Line",
                spectrum: [
                    { name: "Ethical Survival", description: "We will earn money, but we will not compromise our principles." },
                    { name: "Desperate Measures", description: "The survival of the school is the only principle that matters. Any job is on the table." }
                ],
                current: 0, trend: 1,
                description: "The students of Abydos are good-hearted, but their desperation is pushing them towards taking on increasingly morally ambiguous jobs to make ends meet."
            }
        ]
    },
    red_winter_federal_academy: {
        name: "The Red Winter Revolutionary Decrees",
        logo: "factions/kivotos_red_winter.png",
        description: "An authoritarian legal code based on absolute loyalty to the Spec Bureau and the principles of the 'Revolution'. Dissent is not tolerated.",
        supporters: [],
        opponents: [],
        political: [
            {
                name: "Information Control",
                spectrum: [
                    { name: "Strict Censorship", description: "All outgoing and incoming information is monitored and censored by the state." },
                    { name: "Total Isolation", description: "Red Winter is completely cut off from the outside world's information networks." }
                ],
                current: 0, trend: 1,
                description: "The Spec Bureau maintains absolute control over all information. Unauthorized communication with the outside world is considered treason."
            }
        ]
    },
    shanhaijing_senior_secondary_school: {
        name: "The Xuanlong Tenets",
        logo: "factions/kivotos_shanhaijing.png",
        description: "A code of conduct based on ancient traditions, emphasizing respect for elders, the balance of Yin and Yang, and the pursuit of internal harmony.",
        supporters: [],
        opponents: [],
        social: [
            {
                name: "The Alchemical Arts",
                spectrum: [
                    { name: "Strict Tradition", description: "Alchemy must follow ancient, proven recipes." },
                    { name: "Experimental Concoctions", description: "Students are encouraged to innovate and create new potions." }
                ],
                current: 1, trend: 0,
                description: "While tradition is valued, Shanhaijing's alchemists are known for their experimental and often dangerously potent creations."
            }
        ]
    }
};

export const KIVOTOS_UNRECOGNIZED = {
    gehenna_academy: {
        name: "The Rule of Freedom",
        logo: "factions/kivotos_gehenna.png",
        description: "The 'law' in Gehenna is simple: there are no laws. Personal freedom is the only principle, leading to a state of constant, joyous anarchy.",
        supporters: [],
        opponents: ['trinity_general_school', 'general_student_union'],
        political: [
            {
                name: "The Prefect Team's Struggle",
                spectrum: [
                    { name: "Total Anarchy", description: "The students run wild, and the Prefect Team can only react to the worst excesses." },
                    { name: "Loose Order", description: "The Prefect Team manages to enforce a few basic rules, like 'no tanks in the cafeteria'." }
                ],
                current: 0, trend: 0,
                description: "The Prefect Team's attempts to impose order are met with universal resistance. Gehenna exists in a state of carefully maintained anarchy."
            }
        ]
    }
};
