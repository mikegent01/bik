// legal_data.js

export const LEGAL_DATA = {
    traditions: {
        martial: [
            { id: 'trial_by_combat', name: 'Trial by Combat', icon: '⚔️', description: 'Major disputes and criminal accusations are settled through a formal, often lethal, duel. The victor is considered to be in the right, either by divine judgment or sheer might.', followers: ['iron_legion', 'rakasha_clans', 'moonfang_pack', 'koopa_troop'] },
            { id: 'gym_challenge', name: 'The Gym Challenge', icon: '🏅', description: 'The formal right to challenge a sanctioned Gym Leader for a badge. The challenge is governed by strict rules of engagement, including limits on the number of Pokémon used and a prohibition on targeting trainers directly.', followers: ['pokemon_league', 'trainer_guild'] },
        ],
        social: [
            { id: 'hospitality', name: 'Sacred Right of Hospitality', icon: '🤝', description: 'Offering food and shelter to a traveler is a sacred duty. Harming a guest under one\'s roof is a grave taboo, as is a guest harming their host. This protection is absolute, even if the guest is an enemy.', followers: ['mushroom_regency', 'rakasha_clans'] },
            { id: 'trainer_honor', name: "Trainer's Honor", icon: '🤝', description: "An unwritten code among Pokémon trainers to care for their Pokémon as partners, to battle fairly, and to offer aid to other trainers and Pokémon in distress.", followers: ['trainer_guild', 'pokemon_league', 'ranger_union'] },
            { id: 'respect_for_elders', name: "Respect for Elders", icon: '👴', description: "A deep cultural reverence for the wisdom and experience of elderly trainers and community leaders. Their advice is sought after and their challenges are considered a great honor.", followers: ['trainer_guild', 'yoshi_clans'] },
            { id: 'respect_for_the_departed', name: "Respect for the Departed", icon: '🙏', description: "In graveyards, tombs, and other sacred resting places, one must act with solemn respect. Loud noises, battles, and any form of desecration are grave taboos, believed to anger the spirits of the dead.", followers: ['unaligned', 'pokemon_league'] },
        ],
        arcane: [
            { id: 'pokemon_liberation', name: "Pokémon Liberation", icon: '⛓️', description: "The core ideological belief that Pokémon are oppressed by human trainers and must be liberated to live in a separate, 'natural' state, by force if necessary.", followers: ['team_plasma'] },
            { id: 'ancient_pacts', name: "Ancient Pacts", icon: '📜', description: "A belief in ancient, binding pacts between humanity and legendary Pokémon. To break these pacts by angering or attempting to control these beings can have catastrophic, world-altering consequences.", followers: ['pokemon_league', 'trainer_guild'] },
        ],
        underworld: [],
        internet: [],
        cosmic: []
    },
    regional_traditions: {
        mushroom_kingdom_full: ['hospitality'],
        midlands_full: ['trial_by_combat'],
        pokemon_regions_full: ['trainer_honor'],
    },
    poi_traditions: {
        'poi_un_celestial_tower': {
            summary: "Celestial Tower is a sacred gravesite for Pokémon. A deep sense of reverence and peace is expected from all visitors. Pokémon battles within the tower are strictly forbidden by ancient custom.",
            traditions: ['respect_for_the_departed']
        },
        'poi_un_dragonspiral': {
            summary: "The Dragonspiral Tower is a place of immense historical power, bound by pacts made between ancient peoples and legendary Dragon Pokémon. To disturb the tower is to risk their wrath.",
            traditions: ['ancient_pacts']
        }
    }
};