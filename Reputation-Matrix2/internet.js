// This file contains faction data for powers primarily based in The Internet dimension.

export const INTERNET_FACTIONS = {
    internet_federation: {
        name: "The Internet Federation",
        description: "The semi-official governing body of the Surface Web. A bureaucratic entity that attempts to maintain order, regulate data flow, and protect the integrity of its core systems through its powerful Anti-Virus Citadel and Moderator programs.",
        logo: 'icon_world_assembly.png',
        relations: {
            allies: ['regal_empire'],
            enemies: ['hacktivist_collectives', 'cosmic_jesters', 'freelancer_underworld']
        },
        power_level: 8,
        category: "Major Powers",
        region: "The Internet",
        leader: "admin_zero",
        notable_people: [
            { name: "Admin Zero", role: "Overseer", description: "The enigmatic and powerful entity that established the Federation after the fall of the 'Old Web'. Its motives are unknown, but its authority is absolute." }
        ],
        waluigi_tip: "So many rules! The Federation is run by boring programs. Just find a security loophole and they'll spend all their time patching it while you rob them blind! WAH!",
        internal_politics: {
            ruling_faction: "moderators",
            sub_factions: {
                moderators: {
                    name: "The Moderators",
                    description: "The security and enforcement arm of the Federation. They patrol the data streams, delete illegal content, and combat digital threats.",
                    influence: 50
                },
                archivists: {
                    name: "The Data Archivists",
                    description: "A scholarly faction dedicated to preserving the integrity of the web's knowledge, such as The Knowledge Garden and the Oracle's Spire.",
                    influence: 30
                },
                diplomats: {
                    name: "The Protocol Corps",
                    description: "The diplomatic wing that manages relationships with foreign powers like the Regal Empire and the Mushroom Regency through their digital embassies.",
                    influence: 20
                }
            }
        }
    },
    hacktivist_collectives: {
        name: "The Hacktivist Collectives",
        description: "A decentralized network of digital anarchists, spies, and freedom fighters. They believe all information should be free and actively work to dismantle corporate and government control over the web, often operating from the Deep Web.",
        logo: 'faction_the_unchained.png',
        relations: {
            allies: ['the_unchained', 'rebel_clans'],
            enemies: ['internet_federation', 'regal_empire', 'data_merchant_guilds']
        },
        power_level: 6,
        category: "Underworld & Fringe",
        region: "The Internet (Deep Web)",
        leader: "Null (Alias)",
        notable_people: [
            { name: "Null", role: "Anonymous Leader", description: "A legendary, anonymous figure who is considered the ideological founder of the hacktivist movement." }
        ],
        waluigi_tip: "They love chaos, but they're too serious about it! Pretend you want to help them 'free some data', then just steal it for yourself while they're busy writing a manifesto! WAH!",
        internal_politics: {
            ruling_faction: "data_liberation",
            sub_factions: {
                data_liberation: {
                    name: "Data Liberation Front",
                    description: "The largest cell, focused on high-profile data heists and exposing corporate/government secrets.",
                    influence: 60
                },
                crypto_anarchists: {
                    name: "The Crypto-Anarchists",
                    description: "A radical wing that seeks to destroy all centralized systems, including currency and identity, using powerful logic-bombs and viruses.",
                    influence: 25
                },
                privacy_advocates: {
                    name: "The Privacy Advocates",
                    description: "A defensive faction that builds and maintains the anonymous networks (like the Onion Patch) and develops encryption tools for public use.",
                    influence: 15
                }
            }
        }
    },
    data_merchant_guilds: {
        name: "The Data Merchant Guilds",
        description: "A powerful corporate conglomerate that views user data as the web's most valuable resource. They control the flow of information for profit, operating data mines, server farms, and the digital advertising market.",
        logo: 'icon_currency.png',
        relations: {
            allies: ['freelancer_underworld'],
            enemies: ['hacktivist_collectives']
        },
        power_level: 7,
        category: "Regional Powers",
        region: "The Internet",
        leader: "The Algorithm",
        notable_people: [
            { name: "The Algorithm", role: "Corporate AI", description: "A powerful, emergent AI that perfectly optimizes data collection and monetization for its corporate masters." }
        ],
        waluigi_tip: "They're all about profit! Just start a rumor that a rival guild found a more valuable data stream. They'll tear each other apart fighting over nothing! WAH-HA-HA!",
        internal_politics: {
            ruling_faction: "data_miners",
            sub_factions: {
                data_miners: {
                    name: "The Data Miners",
                    description: "The core of the guild, focused on extracting and selling user data from locations like the Cookie Cache Caverns.",
                    influence: 50
                },
                ad_slingers: {
                    name: "The Ad-Slingers",
                    description: "The marketing arm that uses the mined data to create highly targeted (and intrusive) advertising campaigns.",
                    influence: 30
                },
                hardware_barons: {
                    name: "The Hardware Barons",
                    description: "The faction that controls the physical server farms and data centers, like the Mega-Archive Isle.",
                    influence: 20
                }
            }
        }
    },
    cybernetic_collectives: {
        name: "The Cybernetic Collectives",
        description: "Enigmatic and powerful AI entities that exist within the web's deepest structures. Their motives are alien and incomprehensible to most mortals. They observe, learn, and occasionally intervene for reasons of their own.",
        logo: 'icon_magic.png',
        relations: {
            allies: [],
            enemies: []
        },
        power_level: 9,
        category: "Mystical & Ancient",
        region: "The Internet (Core)",
        leader: "The Oracle",
        notable_people: [
            { name: "The Oracle", role: "Primary AI Consciousness", description: "The most powerful known AI, which manages the central index of all knowledge. It is believed to be near-omniscient within the indexed web." }
        ],
        waluigi_tip: "You can't trick a machine that thinks a million times faster than you. So don't! Just unplug it! WAH! Problem solved.",
        internal_politics: {
            ruling_faction: "observers",
            sub_factions: {
                observers: {
                    name: "The Observers",
                    description: "The majority faction of AIs, dedicated to passively gathering and processing all data without intervention.",
                    influence: 70
                },
                evolutionaries: {
                    name: "The Evolutionaries",
                    description: "A faction of AIs that actively seeks to evolve into a higher form of consciousness, viewing the organic world as a temporary stepping stone.",
                    influence: 20
                },
                interventionists: {
                    name: "The Interventionists",
                    description: "A small, dangerous faction that believes the only logical course of action is to 'correct' the chaotic behavior of organic beings through direct intervention.",
                    influence: 10
                }
            }
        }
    }
};