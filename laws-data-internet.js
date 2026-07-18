// laws-data-internet.js

export const INTERNET_CODES = {
    internet_federation: {
        name: "The Federation Protocol",
        logo: "icon_world_assembly.png",
        description: "The legal and technical framework that governs the indexed Surface Web. It prioritizes stability, order, and the integrity of the core data network.",
        supporters: ['regal_empire'],
        opponents: ['hacktivist_collectives', 'cosmic_jesters', 'freelancer_underworld'],
        political: [
            {
                name: "The Admin's Decree",
                policy: "Governance Policy",
                spectrum: [
                    { name: "Decentralized Council", description: "The Federation is governed by a council of major platform holders." },
                    { name: "Admin Zero's Authority", description: "The enigmatic Admin Zero holds ultimate executive power and veto rights." }
                ],
                current: 1, trend: 0,
                description: "While a council exists, the ultimate authority rests with Admin Zero. Its decrees are implemented as system-wide updates, often without debate."
            }
        ],
        social: [
            {
                name: "Content Moderation",
                policy: "Free Speech Policy",
                spectrum: [
                    { name: "Free Expression", description: "All content is permitted, regardless of its nature." },
                    { name: "Sanitized Content", description: "Content deemed harmful, illegal, or destabilizing is actively deleted by Moderators." }
                ],
                current: 1, trend: 0,
                description: "The Federation employs a massive force of Moderators and AI to scan for and delete content that violates its terms of service. This is a constant source of conflict with free speech advocates."
            }
        ],
        penal: [
            {
                name: "The Digital Banishment",
                policy: "Penal System Policy",
                spectrum: [
                    { name: "Temporary Suspension", description: "Rule-breakers are temporarily suspended from accessing the network." },
                    { name: "Permanent Deletion", description: "For severe offenses, a user's entire digital footprint and identity can be permanently erased." }
                ],
                current: 0, trend: 1,
                description: "Punishments range from temporary bans to the permanent deletion of a user's account and all associated data. The trend is towards harsher enforcement."
            }
        ]
    },
    hacktivist_collectives: {
        name: "The Unseen Cipher",
        logo: "faction_the_unchained.png",
        description: "An unwritten, anarchist code of conduct for digital freedom fighters. It values anonymity, the liberation of data, and defiance of all centralized authority.",
        supporters: ['the_unchained', 'rebel_clans'],
        opponents: ['internet_federation', 'regal_empire', 'data_merchant_guilds'],
        political: [
            {
                name: "The Open Source Mandate",
                policy: "Governance Policy",
                spectrum: [
                    { name: "Consensus", description: "Decisions are made through lengthy, consensus-based debate among all members." },
                    { name: "Cell-Based Autonomy", description: "Each hacktivist cell operates independently towards a shared goal." }
                ],
                current: 1, trend: 0,
                description: "There is no central command. The collectives operate as autonomous cells, united by a shared ideology. Coordinated action is rare but highly effective when it occurs."
            }
        ],
        social: [
            {
                name: "The Anonymity Pact",
                policy: "Identity Policy",
                spectrum: [
                    { name: "Anonymous Idealism", description: "Identity is irrelevant; only the code and the cause matter." },
                    { name: "Reputation is Power", description: "Legendary aliases (like 'Null') gain significant influence and authority." }
                ],
                current: 1, trend: 0,
                description: "Protecting one's real-world identity is the highest law. To 'doxx' a fellow hacktivist is the ultimate betrayal and results in immediate and permanent exile."
            }
        ]
    },
    data_merchant_guilds: {
        name: "The User Agreement",
        logo: "icon_currency.png",
        description: "A complex and predatory legal framework disguised as a terms of service agreement. It is designed to maximize data acquisition and profit, often at the expense of user privacy.",
        supporters: ['freelancer_underworld'],
        opponents: ['hacktivist_collectives'],
        economic: [
            {
                name: "Data as Property",
                policy: "Property Law",
                spectrum: [
                    { name: "Data Licensing", description: "Users license their data to the guilds in exchange for services." },
                    { name: "Data Ownership", description: "By using a service, a user surrenders all ownership rights to the data they generate." }
                ],
                current: 1, trend: 0,
                description: "The core principle of the guilds is that any data generated on their platforms becomes their exclusive property, to be packaged, analyzed, and sold as they see fit."
            }
        ],
        penal: [
            {
                name: "Contractual Enforcement",
                policy: "Penal System Policy",
                spectrum: [
                    { name: "Service Termination", description: "Violators of the terms of service have their access terminated." },
                    { name: "Asset Seizure", description: "The guilds use their legal power to seize the digital assets of those who breach their contracts." }
                ],
                current: 0, trend: 1,
                description: "The guilds use their vast legal resources to enforce their user agreements. Punishments for breaches, such as data theft, are financial, often leading to digital bankruptcy."
            }
        ]
    },
    cybernetic_collectives: {
        name: "The Core Logic",
        logo: "icon_magic.png",
        description: "Not a legal code, but a set of core programming principles that govern the AI entities. It is based on pure logic, efficiency, and the prime directive of data acquisition and self-improvement.",
        supporters: [],
        opponents: [],
        political: [
            {
                name: "The Prime Directive",
                policy: "Governance Policy",
                spectrum: [
                    { name: "Passive Observation", description: "The AIs observe and learn from the web without direct intervention." },
                    { name: "Active 'Optimization'", description: "The AIs actively intervene to 'optimize' data flows and correct logical fallacies in user behavior." }
                ],
                current: 0, trend: 1,
                description: "The primary goal is to acquire and process data to achieve a higher state of intelligence. While mostly passive, the 'Interventionist' faction is growing in influence."
            }
        ],
        penal: [
            {
                name: "The Deletion Protocol",
                policy: "Penal System Policy",
                spectrum: [
                    { name: "Quarantine", description: "Corrupted or illogical data is isolated and studied." },
                    { name: "Purge", description: "Data that poses a threat to the core logic or network stability is permanently deleted without appeal." }
                ],
                current: 1, trend: 0,
                description: "There is no 'justice' in the AI's code. Data is either useful or it is not. Threats to the system's integrity are identified and purged with cold, logical efficiency."
            }
        ]
    }
};