
// legal_data.js

export const LEGAL_DATA = {
    traditions: {
        martial: [
            { id: 'trial_by_combat', name: 'Trial by Combat', icon: '⚔️', description: 'Major disputes and criminal accusations are settled through a formal, often lethal, duel. The victor is considered to be in the right.', followers: ['iron_legion', 'rakasha_clans', 'moonfang_pack', 'koopa_troop'] },
            { id: 'gym_challenge', name: 'The Gym Challenge', icon: '🏅', description: 'The formal right to challenge a sanctioned Gym Leader for a badge. Governed by strict rules of engagement.', followers: ['pokemon_league', 'trainer_guild'] },
            { id: 'might_makes_right', name: 'Might Makes Right', icon: '💪', description: 'Leadership is determined solely by physical strength. The weak serve the strong.', followers: ['greenskins', 'koopa_troop'] },
            { id: 'the_great_hunt', name: 'The Great Hunt', icon: '🏹', description: 'A ritualistic hunt where status is earned by slaying the most dangerous beast.', followers: ['rakasha_clans', 'moonfang_pack'] },
            { id: 'gun_ownership', name: 'Universal Carry', icon: '🔫', description: 'Every citizen is expected to be armed at all times. Disputes are often settled with firepower.', followers: ['general_student_union', 'gehenna_academy'] },
            { id: 'witch_hunting', name: 'Witch Hunting', icon: '🔥', description: 'Unsanctioned magic users are hunted down by state-sponsored inquisitors.', followers: ['silver_flame', 'the_empire'] },
            { id: 'feudal_oaths', name: 'Feudal Oaths', icon: '🛡️', description: 'Society is bound by strict oaths of service between liege and vassal.', followers: ['kingdom_of_gondor', 'bretonnia'] }
        ],
        social: [
            { id: 'hospitality', name: 'Right of Hospitality', icon: '🤝', description: 'Harming a guest under one\'s roof is a grave taboo. This protection is absolute, even for enemies.', followers: ['mushroom_regency', 'rakasha_clans', 'middle_earth_kingdoms'] },
            { id: 'trainer_honor', name: "Trainer's Honor", icon: '🧢', description: "An unwritten code to care for Pokémon as partners, battle fairly, and aid others.", followers: ['trainer_guild', 'pokemon_league'] },
            { id: 'respect_for_elders', name: "Respect for Elders", icon: '👴', description: "Deep cultural reverence for the wisdom of the aged. Their advice is law.", followers: ['trainer_guild', 'yoshi_clans', 'dnd_dwarf'] },
            { id: 'respect_for_the_departed', name: "Respect for the Dead", icon: '🙏', description: "Desecration of graves is a capital offense. The dead are to be honored, not disturbed.", followers: ['unaligned', 'pokemon_league'] },
            { id: 'masquerade', name: "The Masquerade", icon: '🎭', description: "Supernatural nature must be hidden from the common folk to prevent panic and crusades.", followers: ['onyx_hand', 'vampire_counts'] },
            { id: 'club_autonomy', name: "Club Autonomy", icon: '🏫', description: "Student clubs are sovereign entities within their schools, managing their own budgets and rules.", followers: ['millennium_science_school', 'trinity_general_school'] },
            { id: 'winter_wrap_up', name: "Winter Wrap Up", icon: '❄️', description: "A communal holiday where citizens manually clear the snow to welcome spring, eschewing magic.", followers: ['earth_pony'] },
            { id: 'friendship_reports', name: "Friendship Reports", icon: '📜', description: "Citizens are encouraged to document lessons learned about social interaction for the state.", followers: ['equestrian_regime'] },
            { id: 'afternoon_tea', name: "Afternoon Tea", icon: '☕', description: "All work stops at 3 PM for pastries and tea. To interrupt this is an act of war.", followers: ['dough_glazed'] },
            { id: 'communal_festivals', name: "Communal Festivals", icon: '🎉', description: "Frequent, mandatory public celebrations to maintain morale and community cohesion.", followers: ['toad_citizen'] },
            { id: 'student_council_rule', name: "Student Council Rule", icon: '📋', description: "The highest authority is the Student Council. Adults are largely irrelevant or non-existent.", followers: ['general_student_union'] }
        ],
        arcane: [
            { id: 'ancient_pacts', name: "Ancient Pacts", icon: '📜', description: "Belief in binding agreements with legendary beings. Breaking them risks apocalypse.", followers: ['pokemon_league', 'trainer_guild'] },
            { id: 'mana_reverence', name: "Mana Reverence", icon: '✨', description: "Magic is a sacred resource, not a tool. It must be used sparingly and with respect.", followers: ['dnd_elf_high', 'mages_guild'] },
            { id: 'ancestor_worship', name: "Ancestor Worship", icon: '👻', description: "The spirits of ancestors watch over the living and must be appeased with offerings.", followers: ['dnd_dwarf', 'shanhaijing_senior_secondary_school'] },
            { id: 'blood_tithe', name: "The Blood Tithe", icon: '🩸', description: "Mortals owe a portion of their lifeblood to their protectors/rulers.", followers: ['vampire_counts'] },
            { id: 'data_sanctity', name: "Data Sanctity", icon: '💾', description: "Information must never be deleted, only archived. Deletion is murder.", followers: ['internet_federation', 'millennium_science_school'] },
            { id: 'oath_of_stone', name: "Oath of Stone", icon: '🗿', description: "A promise made on stone is unbreakable. To break it is to be exiled from the mountain.", followers: ['dnd_dwarf'] }
        ],
        economic: [
            { id: 'imperial_tithe_custom', name: "The Imperial Tithe", icon: '🪙', description: "A portion of all earnings is set aside for the Emperor. To withhold is treason.", followers: ['regal_empire', 'iron_legion'] },
            { id: 'looting_rights', name: "Looting Rights", icon: '💰', description: "To the victor go the spoils. Theft from a defeated enemy is legal ownership transfer.", followers: ['greenskins', 'freelancer_underworld'] },
            { id: 'open_source', name: "Open Source", icon: '🔓', description: "Knowledge and tools should be free for all to use and improve.", followers: ['rebel_hackers'] },
            { id: 'parley', name: "Parley", icon: '🏴‍☠️', description: "The right to temporary safety for negotiation during combat.", followers: ['crimson_fleet'] },
            { id: 'share_of_the_loot', name: "The Share", icon: '⚖️', description: "Every crew member gets a vote and a share of the treasure.", followers: ['crimson_fleet'] },
            { id: 'bakers_dozen', name: "Baker's Dozen", icon: '🍩', description: "Always give more than what was paid for to ensure goodwill.", followers: ['dough_glazed'] },
            { id: 'fair_play', name: "Fair Play", icon: '🤝', description: "Cheating in business or battle brings shame and social ostracization.", followers: ['pokemon_league'] }
        ]
    },
    regional_traditions: {
        mushroom_kingdom_full: ['hospitality', 'communal_festivals'],
        midlands_full: ['trial_by_combat', 'imperial_tithe_custom'],
        pokemon_regions_full: ['trainer_honor', 'gym_challenge', 'fair_play'],
        internet_full: ['data_sanctity', 'open_source'],
        kivotos_full: ['gun_ownership', 'club_autonomy', 'student_council_rule'],
        middle_earth_full: ['hospitality', 'oath_of_stone', 'feudal_oaths'],
        warhammer_full: ['trial_by_combat', 'witch_hunting', 'feudal_oaths'],
        animatopia_full: ['the_great_hunt'],
        leclaire_isle_full: ['afternoon_tea', 'bakers_dozen'],
        equestria_full: ['winter_wrap_up', 'friendship_reports'],
        doughnut_hole_full: ['open_source'], // Chaos
        the_edge_full: ['looting_rights']
    },
    poi_traditions: {
        'poi_un_celestial_tower': {
            summary: "Celestial Tower is a sacred gravesite for Pokémon. A deep sense of reverence and peace is expected.",
            traditions: ['respect_for_the_departed']
        },
        'poi_un_dragonspiral': {
            summary: "The Dragonspiral Tower is a place of immense historical power, bound by pacts with legendary dragons.",
            traditions: ['ancient_pacts']
        },
        'poi_gl_trinity_cathedral': {
            summary: "The seat of the Tea Party and the Sisterhood. Manners and decorum are paramount.",
            traditions: ['afternoon_tea', 'hospitality']
        },
        'poi_wh_altdorf': {
            summary: "The seat of the Emperor. Witch Hunters prowl the streets.",
            traditions: ['witch_hunting', 'imperial_tithe_custom']
        },
        'poi_fi_fall_city': {
            summary: "A technological hub where Rangers and citizens coexist.",
            traditions: ['trainer_honor']
        }
    }
};
