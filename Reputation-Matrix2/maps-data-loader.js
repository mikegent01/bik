// maps-data-loader.js

import { QUEST_DATA } from './quests-data.js';
import { MAP_DATA } from './map-data.js';

const WORLD_SPECIES = {
    warhammer: ['Humans', 'Dwarfs', 'Orcs & Goblins', 'Undead', 'Elves', 'Skaven'],
    mushroom_kingdom: ['Toads', 'Koopas', 'Goombas', 'Kongs', 'Yoshis', 'Boos'],
    midlands: ['Humans', 'Vampires', 'Werewolves', 'Rakasha', 'Goblins', 'Mages'],
    doughnut_hole: ['Cosmic Entities', 'Void Scavengers', 'Starlight Beings', 'Paradoxes'],
    internet: ['Digital Avatars', 'AI', 'Data-Golems', 'Viruses', 'Memes'],
    middle_earth: ['Men', 'Elves', 'Dwarves', 'Hobbits', 'Orcs', 'Uruk-hai'],
    kivotos: ['Students (with Halos)', 'Robots', 'Delinquents', 'Mysterious Beings'],
    pokemon: ['Humans', 'Pokémon (Various)', 'Delinquents', 'Champs']
};

const MAP_GROUP_TO_WORLD = {
    'The Fated Place': 'warhammer',
    'Mushroom Kingdom Regions': 'mushroom_kingdom',
    'Islands & Outer Realms': 'mushroom_kingdom',
    'The Midlands': 'midlands',
    'The Doughnut Hole': 'doughnut_hole',
    'The Internet': 'internet',
    'Middle-earth': 'middle_earth',
    'Kivotos': 'kivotos',
    'Pokémon Regions': 'pokemon'
};

function getQuestCounts() {
    const counts = {};
    for (const worldKey in WORLD_SPECIES) {
        counts[worldKey] = 0;
    }

    const availableRequests = Object.values(QUEST_DATA).filter(q => q.type === 'request' && q.status === 'available');

    for (const request of availableRequests) {
        const locationId = request.locationId;
        if (!locationId) continue;

        // Find which map this POI belongs to
        let foundMapGroup = null;
        for (const mapKey in MAP_DATA) {
            if (MAP_DATA[mapKey].pointsOfInterest.some(poi => poi.id === locationId)) {
                foundMapGroup = MAP_DATA[mapKey].group;
                break;
            }
        }

        if (foundMapGroup) {
            const worldKey = MAP_GROUP_TO_WORLD[foundMapGroup];
            if (worldKey && counts.hasOwnProperty(worldKey)) {
                counts[worldKey]++;
            }
        }
    }
    return counts;
}

function updateGalleryItems() {
    const questCounts = getQuestCounts();
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const worldKey = item.dataset.world;
        if (!worldKey) return;

        const infoContainer = item.querySelector('.gallery-item-info');
        if (!infoContainer) return;

        // Create new elements for the data
        const statsContainer = document.createElement('div');
        statsContainer.className = 'gallery-item-stats';

        const questCount = questCounts[worldKey] || 0;
        const species = WORLD_SPECIES[worldKey] || [];

        statsContainer.innerHTML = `
            <div class="stat-item requests">
                <span class="stat-value">${questCount}</span>
                <span class="stat-label">Available Requests</span>
            </div>
            <div class="stat-item species">
                <span class="stat-label">Inhabitants:</span>
                <span class="stat-value">${species.join(', ')}</span>
            </div>
        `;

        // Append after the description paragraph
        const descriptionP = infoContainer.querySelector('p');
        if (descriptionP) {
            descriptionP.insertAdjacentElement('afterend', statsContainer);
        }
    });
}

// Since this is a module, the execution should be handled by the importer.
// We'll run it when the DOM is ready.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateGalleryItems);
} else {
    updateGalleryItems();
}