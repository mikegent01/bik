// This file contains faction data for powers that have a presence across multiple worlds or are otherwise 'widespread'.

export const WIDESPREAD_FACTIONS = {
    animatopia_predator_alliance: {
        name: "Animatopia Predator Alliance",
        description: "A militaristic coalition of predator species who believe their strength gives them the right to rule. They seek to overthrow the central government and establish a new hierarchy.",
        logo: 'assets/factions/faction_predator.png',
        relations: {}, power_level: 7, category: "Regional Powers", region: "Animatopia"
    },
    animatopia_prey_congress: {
        name: "Animatopia Prey Congress",
        description: "A defensive alliance of prey species fighting for equality and the preservation of the current government. They rely on guerilla tactics and their vast numbers.",
        logo: 'assets/factions/faction_prey.png',
        relations: {}, power_level: 6, category: "Regional Powers", region: "Animatopia"
    },
    earth_land_federation: {
        name: "Earth Land Federation",
        description: "A powerful, human-centric federation from a neighboring continent. They maintain a strong military and have significant economic interests in Animatopia, which they protect with a veneer of diplomacy.",
        logo: 'assets/factions/faction_earth.png',
        relations: {}, power_level: 8, category: "Major Powers", region: "Earth Land"
    },
    connectopia_pioneers_guild: {
        name: "Connectopia Pioneers' Guild",
        description: "A rugged, independent guild representing the interests of the pioneer factions on the frontier continent of Connectopia. They are resourceful, pragmatic, and focused on resource acquisition.",
        logo: 'assets/factions/faction_pioneer.png',
        relations: {}, power_level: 5, category: "Regional Powers", region: "Connectopia"
    },
    liminal_observers: {
        name: "Liminal Observers",
        description: "An enigmatic faction from the unstable reality of 'Almost at the Edge'. Their motives are incomprehensible. They do not engage in traditional diplomacy, but their presence can warp local reality.",
        logo: 'assets/factions/faction_liminal.png',
        relations: {}, power_level: '?', category: "Interdimensional Threats", region: "Almost at the Edge"
    }
};
