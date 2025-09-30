
// This file contains faction data for powers primarily based in the Wilderlands and Darklands.

export const WILDERLANDS_FACTIONS = {
    rakasha_clans: {
        name: "Rakasha Clans",
        description: "Tribal beast-folk who value honor, strength, and the natural world. The Spirit-Walker shamans have recently taken on a 'missionary' role, attempting to guide other 'savage' races like Orcs toward a more balanced existence, often by renting out their territory for 'war training' that doubles as cultural exchange.",
        logo: 'faction_rakasha.png',
        relations: { 
            allies: ['moonfang_pack', 'liberated_toads'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 6,
        leader: "chief_thornpaw",
        category: "Regional Powers",
        region: "Wilderlands",
        notable_people: [
            { name: "Chief Thornpaw", role: "Spirit-Walker Leader", description: "The wise shaman who guides the clans and now teaches Dan magic." },
            { name: "Warchief Ironmane", role: "Beast-Rider Champion", description: "The strongest warrior among the Beast-Riders, known for his massive tiger mount." }
        ],
        waluigi_tip: "The Rakasha are all about 'honor'. The Spirit-Walkers are the real power. Befriend them, and you can get the hot-headed Beast-Riders to do anything you want!",
        internal_politics: {
            ruling_faction: "spirit_walkers",
            sub_factions: {
                spirit_walkers: {
                    name: "The Spirit-Walkers",
                    description: "The shamanistic leaders of the clans who commune with spirits and guide their people. They are wise and cautious.",
                    opinion: "Markop's quest for redemption is honorable. Dan the Toad's connection to the world is strong. We will guide them, but Archie's chaotic nature is a blight.",
                    influence: 40,
                    reputation_modifiers: { archie: -15, markop: 15, humpik: 5, bowser: 0 }
                },
                beast_riders: {
                    name: "The Beast-Riders",
                    description: "The warrior caste of the Rakasha, who form deep bonds with their animal mounts. They are proud and quick to anger.",
                    opinion: "Markop is a strong warrior, and Humpik's loyalty is respectable. Archie is an unpredictable madman. Bowser is a worthy challenger.",
                    influence: 35,
                    reputation_modifiers: { archie: -5, markop: 10, humpik: 10, bowser: 10 }
                },
                huntmasters: {
                    name: "The Huntmasters",
                    description: "Scouts and trackers who know the wilderness better than anyone. They are pragmatic and value survival above all.",
                    opinion: "The party is good at surviving, we'll give them that. They bring both trouble and opportunity. We watch from the shadows.",
                    influence: 25,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 5, bowser: 5 }
                }
            }
        }
    },
    koopa_troop: {
        name: "Koopa Troop",
        description: "Bowser's personal army, fiercely loyal to their warlord king.",
        logo: 'faction_koopa_troop.png',
        relations: { 
            allies: ['onyx_hand', 'moonfang_pack'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'fawfuls_furious_freaks']
        },
        power_level: 7,
        leader: "bowser",
        category: "Regional Powers",
        region: "Darklands",
        notable_people: [
            { name: "Bowser", role: "King", description: "The supreme ruler of the Koopa Kingdom and commander of the Troop." },
            { name: "Kamek", role: "Chief Advisor", description: "The wise Magikoopa who serves as Bowser's primary magical advisor." }
        ],
        waluigi_tip: "Loyalty is a weakness! The 'Kamek Cabal' are the only ones with any brains. Convince them that Bowser's plans are bad for them, and the whole troop will fall apart. WAH HAH!",
        internal_politics: {
            ruling_faction: "bowsers_elite",
            sub_factions: {
                bowsers_elite: {
                    name: "Bowser's Elite",
                    description: "The command structure of the Troop, including the Koopalings and other high-ranking officers. They are fanatically loyal to Bowser.",
                    opinion: "The King is testing his new allies. We trust his judgment. Humpik is a loyal servant. The others are tools to be used for the King's glory.",
                    influence: 50,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 25, bowser: 100 }
                },
                kamek_cabal: {
                    name: "The Kamek Cabal",
                    description: "The Magikoopa advisors who see the bigger picture. They are loyal, but prioritize the long-term stability and power of the Koopa Kingdom.",
                    opinion: "The King's current alliance is... risky. The three-eyed one is a liability, and the paladin is untrustworthy. This could endanger the Kingdom.",
                    influence: 30,
                    reputation_modifiers: { archie: -10, markop: -10, humpik: 10, bowser: 100 }
                },
                the_horde: {
                    name: "The Horde",
                    description: "The rank-and-file Goombas, Koopa Troopas, and Shy Guys. They follow orders and love their King.",
                    opinion: "King Bowser is great! He's hanging out with cool new friends! One of them makes big explosions!",
                    influence: 20,
                    reputation_modifiers: { archie: 10, markop: 5, humpik: 15, bowser: 100 }
                }
            }
        }
    },
    rebel_clans: {
        name: "The Rebel Clans",
        description: "A coalition of disparate clans united against the Regal Empire's expansion.",
        logo: 'faction_rebel_clans.png',
        relations: { 
            allies: ['the_unchained', 'liberated_toads'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 6,
        leader: "clan_chief_redmane",
        category: "Regional Powers",
        region: "Wilderlands",
        notable_people: [
            { name: "Clan Chief Redmane", role: "Old Clans Leader", description: "A traditionalist leader who fights to preserve ancient clan ways." },
            { name: "Young Wolf Kara", role: "New Wave Commander", description: "A fierce young warrior who embraces any method to defeat the Empire." }
        ],
        waluigi_tip: "A rebellion of convenience! The 'Old Clans' want their traditions back, but the 'New Wave' just wants to stick it to the Empire. Give the New Wave some Imperial tech to play with and watch the Old Clans get mad!",
        internal_politics: {
            ruling_faction: "old_clans",
            sub_factions: {
                old_clans: {
                    name: "The Old Clans",
                    description: "Clan leaders who fight to preserve their traditions and sovereignty from Imperial assimilation. They are wary of outsiders.",
                    opinion: "Bowser is a monarch, no better than the Emperor. The party are dangerous mercenaries. We do not trust them.",
                    influence: 45,
                    reputation_modifiers: { archie: -10, markop: -5, humpik: -5, bowser: -15 }
                },
                new_wave_rebels: {
                    name: "New Wave Rebels",
                    description: "Younger members who have grown up under Imperial rule and embrace any method or ally that can hurt the Empire.",
                    opinion: "Anyone who fights the Empire is a friend! The party's actions on the 'Vigilance' were legendary! They are heroes!",
                    influence: 35,
                    reputation_modifiers: { archie: 20, markop: 10, humpik: 10, bowser: 10 }
                },
                the_outlanders: {
                    name: "The Outlanders",
                    description: "Exiles and refugees from lands already conquered by the Empire. They are desperate and fight for survival.",
                    opinion: "The party represents chaos, and chaos is hope. Any disruption to the Empire gives us breathing room.",
                    influence: 20,
                    reputation_modifiers: { archie: 10, markop: 5, humpik: 5, bowser: 5 }
                }
            }
        }
    },
};
