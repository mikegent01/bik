// Factions/space.js

export const SPACE_FACTIONS = {
    custodians_of_causality: {
        name: "The Custodians of Causality",
        description: "A paradoxical order dedicated to enforcing the laws of physics and linear time within the Doughnut Hole. An impossible, thankless task that they pursue with grim determination.",
        logo: 'icon_focus.png',
        relations: {
            allies: ['oathbound_judges', 'regal_empire', 'mages_guild'],
            enemies: ['cosmic_jesters', 'hacktivist_collectives', 'the_unchained']
        },
        power_level: 6,
        category: "Mystical & Ancient",
        region: "The Doughnut Hole",
        leader: "The Prime Inevitability",
    },
    void_drifters: {
        name: "The Void Drifters",
        description: "Nomadic scavengers who sail the cosmic currents in ships cobbled together from stellar debris. They trade in lost technology, strange artifacts, and whispers from the void.",
        logo: 'icon_focus.png',
        relations: {
            allies: ['ratchet_raiders', 'freelancer_underworld'],
            enemies: ['iron_legion', 'internet_federation']
        },
        power_level: 5,
        category: "Underworld & Fringe",
        region: "The Doughnut Hole",
        leader: "Captain Star-Scrap",
    },
    starlight_weavers: {
        name: "The Starlight Weavers",
        description: "Enigmatic, energy-based beings who weave the light of distant stars into tangible forms. They are ancient, aloof, and their motives are as mysterious as the cosmos itself.",
        logo: 'icon_magic.png',
        relations: {
            allies: ['mages_guild', 'elves_of_lindon', 'lothlorien'],
            enemies: ['onyx_hand', 'warriors_of_chaos']
        },
        power_level: 7,
        category: "Mystical & Ancient",
        region: "The Doughnut Hole",
        leader: "The Loom-Mother",
    }
};