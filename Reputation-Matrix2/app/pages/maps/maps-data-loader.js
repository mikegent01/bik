
// maps-data-loader.js

import { QUEST_DATA } from '../../../data/quest-system/index.js';
import { MAP_DATA } from '../../../map-data.js';
import { REGIONAL_DEMOGRAPHICS, SPECIES_DATA } from '../../../data/support/species-data.js';

// Mapping between the `data-world` attribute in maps-1.html and the group keys in REGIONAL_DEMOGRAPHICS
const WORLD_TO_GROUP = {
    'warhammer': 'The Fated Place',
    'mushroom_kingdom': 'Mushroom Kingdom Regions',
    'midlands': 'The Midlands',
    'doughnut_hole': 'The Doughnut Hole',
    'internet': 'The Internet',
    'middle_earth': 'Middle-earth',
    'kivotos': 'Kivotos',
    'pokemon': 'Pokémon Regions',
    'animatopia': 'Animatopia',
    'almost_edge': 'The Edge Regions',
    'the_edge': 'The Edge Regions',
    'connectopia': 'Connectopia',
    'earth_land': 'Earth Land',
    'faerun': 'Faerûn',
    'leclaire_isle': 'L\'Eclaire Isle',
    'teyvat': 'Teyvat',
    'equestria': 'Equestria',
    'grand_country': 'The Grand Country'
};

// Inverse mapping for quest counting (Group Name -> World Key)
const MAP_GROUP_TO_WORLD = Object.fromEntries(
    Object.entries(WORLD_TO_GROUP).map(([key, value]) => [value, key])
);

function getQuestCounts() {
    const counts = {};
    for (const worldKey in WORLD_TO_GROUP) {
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
        
        // Dynamic Species List Generation
        const groupName = WORLD_TO_GROUP[worldKey];
        const demographics = REGIONAL_DEMOGRAPHICS[groupName] || {};
        
        // Get top 5 species by percentage
        const speciesList = Object.entries(demographics)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([key]) => SPECIES_DATA[key]?.name || key)
            .join(', ');

        const displaySpecies = speciesList || "Unknown / Varied";

        statsContainer.innerHTML = `
            <div class="stat-item requests">
                <span class="stat-value">${questCount}</span>
                <span class="stat-label">Available Requests</span>
            </div>
            <div class="stat-item species">
                <span class="stat-label">Inhabitants:</span>
                <span class="stat-value">${displaySpecies}</span>
            </div>
        `;

        // Append after the description paragraph
        const descriptionP = infoContainer.querySelector('p');
        if (descriptionP) {
            // Check if stats already exist to avoid duplication on re-runs
            const existingStats = infoContainer.querySelector('.gallery-item-stats');
            if (existingStats) existingStats.remove();
            
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
