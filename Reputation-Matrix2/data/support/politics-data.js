// politics-data.js
import { FACTION_COLORS } from '../../factions/faction-colors.js';

export const PROVINCE_POLITICS = {
    'mushroom_kingdom_full': {
        'central_plains': {
            name: 'Central Mushroom Plains', x: 52, y: 35,
            control: { 'fawfuls_furious_freaks': 40, 'peach_loyalists': 35, 'mushroom_regency': 15, 'koopa_troop': 10 }
        },
        'toad_town_region': {
            name: 'Toad Town Region', x: 55, y: 25,
            control: { 'mushroom_regency': 50, 'peach_loyalists': 25, 'toad_gang': 15, 'iron_legion': 10 }
        },
        'darklands_border': {
            name: "Darklands Border", x: 65, y: 55,
            control: { 'koopa_troop': 85, 'fawfuls_furious_freaks': 10, 'unaligned': 5 }
        },
        'dry_dry_desert': {
            name: "Dry Dry Desert", x: 40, y: 60,
            control: { 'freelancer_underworld': 40, 'koopa_troop': 20, 'iron_legion': 20, 'ratchet_raiders': 20 }
        },
        'yoshi_dk_isles': {
            name: "Yoshi & DK's Islands", x: 88, y: 10,
            control: { 'dk_crew': 45, 'kremling_krew': 35, 'yoshi_clans': 20 }
        },
        'beanbean_kingdom': {
            name: 'Beanbean Kingdom', x: 23, y: 53,
            control: { 'beanbean_kingdom': 80, 'mushroom_regency': 15, 'fawfuls_furious_freaks': 5 }
        },
        'wario_woods': {
            name: 'Wario Woods', x: 35, y: 48,
            control: { 'wario_land': 50, 'ratchet_raiders': 25, 'crimson_fleet': 15, 'iron_fists': 10 }
        },
        'pianta_sea': {
            name: 'The Pianta Sea', x: 20, y: 25,
            control: { 'mushroom_regency': 40, 'crimson_fleet': 30, 'freelancer_underworld': 30 }
        }
    },
    'midlands_full': {
        'capital_province': {
            name: 'Capital Province', x: 81, y: 8,
            control: { 'regal_empire': 70, 'iron_legion': 15, 'freelancer_underworld': 5, 'mages_guild': 5, 'onyx_hand': 5 }
        },
        'yal_belanor': {
            name: 'Yal Belanor', x: 55, y: 15,
            control: { 'regal_empire': 80, 'iron_legion': 20 }
        },
        'lockerwood': {
            name: 'Lockerwood Province', x: 36, y: 41,
            control: { 'moonfang_pack': 40, 'onyx_hand': 30, 'regal_empire': 20, 'silver_flame': 10 }
        },
        'ironwood': {
            name: 'Ironwood', x: 30, y: 20,
            control: { 'iron_legion': 55, 'rakasha_clans': 45 }
        },
        'autumnwood': {
            name: 'Autumnwood', x: 35, y: 65,
            control: { 'mages_guild': 85, 'silver_flame': 10, 'unaligned': 5 }
        },
        'theghdural': {
            name: 'Theghdural', x: 75, y: 85,
            control: { 'moonfang_pack': 85, 'silver_flame': 10, 'unaligned': 5 }
        },
        'jungle_of_thorns': {
            name: 'Jungle of Thorns', x: 18, y: 80,
            control: { 'onyx_hand': 90, 'silver_flame': 10 }
        },
        'dry_county': {
            name: 'Dry County', x: 70, y: 60,
            control: { 'unaligned': 60, 'cosmic_jesters': 30, 'oathbound_judges': 10 }
        },
        'lower_hills': {
            name: 'The Lower Hills', x: 48, y: 70,
            control: { 'iron_legion': 40, 'rebel_clans': 30, 'the_unchained': 20, 'unaligned': 10 }
        },
        'northern_lands': {
            name: 'The Northern Lands', x: 30, y: 8,
            control: { 'rebel_clans': 60, 'iron_legion': 40 }
        }
    },
    'internet_full': {
        'surface_web': {
            name: 'The Surface Web', x: 50, y: 50,
            control: { 'internet_federation': 70, 'data_merchant_guilds': 30 }
        },
        'big_tech_region': {
            name: 'Big Tech Region', x: 65, y: 20,
            control: { 'data_merchant_guilds': 60, 'internet_federation': 30, 'millennium_science_school': 10 }
        },
        'deep_web': {
            name: 'The Deep Web', x: 20, y: 70,
            control: { 'hacktivist_collectives': 50, 'freelancer_underworld': 30, 'cybernetic_collectives': 20 }
        },
        'criminal_web': {
            name: 'The Criminal Web', x: 30, y: 85,
            control: { 'freelancer_underworld': 80, 'hacktivist_collectives': 15, 'cosmic_jesters': 5 }
        }
    },
    'middle_earth_full': {
        'gondor': {
            name: 'Gondor', x: 48, y: 60,
            control: { 'kingdom_of_gondor': 90, 'mordor': 10 }
        },
        'rohan': {
            name: 'Rohan', x: 40, y: 48,
            control: { 'kingdom_of_rohan': 95, 'isengard': 5 }
        },
        'mordor': {
            name: 'Mordor', x: 65, y: 58,
            control: { 'mordor': 100 }
        },
        'eriador': {
            name: 'Eriador', x: 30, y: 30,
            control: { 'unaligned': 70, 'kingdom_of_gondor': 20, 'mordor': 10 }
        },
        'rhovanion': {
            name: 'Rhovanion', x: 55, y: 35,
            control: { 'lothlorien': 40, 'kingdom_of_gondor': 20, 'kingdoms_of_the_dwarves': 20, 'mordor': 20 }
        },
        'umbar': {
            name: 'Umbar & Harad', x: 50, y: 85,
            control: { 'freelancer_underworld': 60, 'mordor': 30, 'unaligned': 10 }
        }
    },
    'warhammer_full': {
        'the_empire': {
            name: 'The Empire', x: 45, y: 50,
            control: { 'the_empire': 80, 'vampire_counts': 15, 'greenskins': 5 }
        },
        'worlds_edge': {
            name: "World's Edge Mountains", x: 55, y: 55,
            control: { 'kingdoms_of_the_dwarves_wh': 70, 'greenskins': 20, 'skaven': 10 }
        },
        'badlands': {
            name: 'The Badlands', x: 50, y: 70,
            control: { 'greenskins': 90, 'kingdoms_of_the_dwarves_wh': 10 }
        },
        'lustria': {
            name: 'Lustria', x: 15, y: 70,
            control: { 'lizardmen': 70, 'dark_elves': 15, 'skaven': 15 }
        },
        'ulthuan': {
            name: 'Ulthuan', x: 30, y: 50,
            control: { 'high_elves': 95, 'dark_elves': 5 }
        },
        'grand_cathay': {
            name: 'Grand Cathay', x: 80, y: 50,
            control: { 'grand_cathay': 85, 'warriors_of_chaos': 10, 'hobgoblin_khanates': 5 }
        }
    },
    'kivotos_full': {
        'trinity_district': {
            name: 'Trinity District', x: 45, y: 45,
            control: { 'trinity_general_school': 90, 'gehenna_academy': 10 }
        },
        'gehenna_district': {
            name: 'Gehenna District', x: 35, y: 73,
            control: { 'gehenna_academy': 90, 'trinity_general_school': 10 }
        },
        'millennium_district': {
            name: 'Millennium District', x: 21, y: 25,
            control: { 'millennium_science_school': 95, 'unaligned': 5 }
        },
        'abydos_district': {
            name: 'Abydos Desert District', x: 70, y: 25,
            control: { 'freelancer_underworld': 70, 'abydos_high_school': 30 }
        },
        'red_winter_district': {
            name: 'Red Winter Federal District', x: 40, y: 8,
            control: { 'red_winter_federal_academy': 98, 'unaligned': 2 }
        }
    },
    'doughnut_hole_full': {
        'jesters_playground': {
            name: "Jester's Playground", x: 50, y: 50,
            control: { 'cosmic_jesters': 100 }
        },
        'causality_chain': {
            name: 'The Causality Chain', x: 60, y: 35,
            control: { 'custodians_of_causality': 95, 'cosmic_jesters': 5 }
        },
        'drifters_field': {
            name: "Drifter's Debris Field", x: 30, y: 60,
            control: { 'void_drifters': 80, 'freelancer_underworld': 20 }
        },
        'weavers_tapestry': {
            name: "The Weaver's Tapestry", x: 75, y: 65,
            control: { 'starlight_weavers': 100 }
        },
        'outer_anomaly': {
            name: 'The Outer Anomaly', x: 80, y: 80,
            control: { 'unaligned': 60, 'void_drifters': 20, 'freelancer_underworld': 20 }
        }
    },
    'pokemon_full': {
        'unova': {
            name: 'Unova Region', x: 60, y: 25,
            control: { 'pokemon_league': 60, 'team_plasma': 30, 'trainer_guild': 10 }
        },
        'kanto_johto': {
            name: 'Kanto & Johto Regions', x: 85, y: 38,
            control: { 'pokemon_league': 70, 'team_rocket': 25, 'trainer_guild': 5 }
        },
        'hoenn': {
            name: 'Hoenn Region', x: 45, y: 45,
            control: { 'pokemon_league': 50, 'team_aqua': 25, 'team_magma': 25 }
        },
        'kalos': {
            name: 'Kalos Region', x: 79, y: 35,
            control: { 'pokemon_league': 75, 'team_flare': 25 }
        },
        'oore': {
            name: 'Oore Region', x: 48, y: 30,
            control: { 'freelancer_underworld': 80, 'pokemon_league': 15, 'trainer_guild': 5 }
        }
    },
    'animatopia_full': {
        'tundratown': {
            name: 'Tundratown', x: 70, y: 25,
            control: { 'animatopia_predator_alliance': 85, 'freelancer_underworld': 15 }
        },
        'savanna_central': {
            name: 'Savanna Central', x: 48, y: 73,
            control: { 'animatopia_prey_congress': 60, 'earth_land_federation': 20, 'unaligned': 20 }
        },
        'rainforest_district': {
            name: 'Rainforest District', x: 40, y: 40,
            control: { 'animatopia_prey_congress': 80, 'freelancer_underworld': 20 }
        },
        'nocturnal_ranges': {
            name: 'Nocturnal Ranges', x: 15, y: 75,
            control: { 'freelancer_underworld': 70, 'unaligned': 30 }
        }
    },
    'almost_edge_full': {
        'the_land': {
            name: 'The Land', x: 40, y: 50,
            control: { 'unaligned': 80, 'cosmic_jesters': 20 }
        },
        'the_waterfall': {
            name: 'Waterfall into Space', x: 20, y: 75,
            control: { 'void_drifters': 60, 'unaligned': 40 }
        }
    },
    'the_edge_full': {
        'the_static': {
            name: 'The Sea of Static', x: 25, y: 75,
            control: { 'unaligned': 100 }
        },
        'the_unmaking': {
            name: 'The Great Unmaking', x: 50, y: 50,
            control: { 'unaligned': 100 }
        },
        'the_source_code': {
            name: 'The Source Code Wall', x: 75, y: 25,
            control: { 'custodians_of_causality': 50, 'cosmic_jesters': 50 }
        }
    }
};
