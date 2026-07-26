
import { LEGAL_DATA } from './legal_data.js';
import { LORE_DATA } from './lore.js';
import { CULTURE_DATA } from './culture-data.js';
import { SPECIES_DATA, REGIONAL_DEMOGRAPHICS } from '../data_modules/species-data.js';
import { MAP_DATA } from '../maps/map-data.js';
import { playSound } from '../core/common.js';

const codexContainer = document.getElementById('codex-container');
const statsContainer = document.getElementById('cultural-stats-container');
const chartCanvas = document.getElementById('culture-chart');

// --- Data Processing ---

function calculateCulturalDemographics() {
    // Initialize counters
    const cultureCounts = {};
    let grandTotalPop = 0;

    Object.keys(CULTURE_DATA).forEach(key => cultureCounts[key] = 0);
    cultureCounts['unaligned'] = 0;

    // Iterate Maps
    for (const mapKey in MAP_DATA) {
        const map = MAP_DATA[mapKey];
        const group = map.group || 'Other';
        
        // Get Species breakdown for this region
        const regionalSpecies = REGIONAL_DEMOGRAPHICS[group] || { other: 1.0 };

        if (map.pointsOfInterest) {
            map.pointsOfInterest.forEach(poi => {
                const poiPop = poi.population || 0;
                if (poiPop > 0) {
                    grandTotalPop += poiPop;

                    // Distribute POI population to species
                    for (const [speciesKey, speciesPct] of Object.entries(regionalSpecies)) {
                        const speciesPop = poiPop * speciesPct;
                        
                        // Find which Culture this species belongs to
                        let assignedCulture = 'unaligned';
                        
                        // Check every culture to see if this species is a primary member
                        for (const [cultKey, cultData] of Object.entries(CULTURE_DATA)) {
                            if (cultData.primary_species.includes(speciesKey)) {
                                assignedCulture = cultKey;
                                break;
                            }
                        }

                        cultureCounts[assignedCulture] += speciesPop;
                    }
                }
            });
        }
    }
    return { counts: cultureCounts, total: grandTotalPop };
}

// --- Rendering ---

function renderCultureChart(data) {
    if (!chartCanvas) return;

    const labels = [];
    const values = [];
    const colors = [];

    Object.entries(data.counts).sort((a,b) => b[1] - a[1]).forEach(([key, count]) => {
        if (count > 0 && key !== 'unaligned') {
            const culture = CULTURE_DATA[key];
            labels.push(culture.name);
            values.push(count);
            colors.push(culture.color);
        }
    });

    new Chart(chartCanvas, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: colors,
                borderWidth: 1,
                borderColor: '#161b22'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { color: '#e6edf3', font: { family: "'Roboto Mono', monospace" } }
                }
            }
        }
    });
}

function renderCultureCards(data) {
    if (!codexContainer) return;

    let html = '';

    // Sort cultures by population count
    const sortedCultures = Object.entries(CULTURE_DATA).sort((a, b) => {
        return (data.counts[b[0]] || 0) - (data.counts[a[0]] || 0);
    });

    sortedCultures.forEach(([key, culture]) => {
        const population = data.counts[key] || 0;
        const popPercentage = ((population / data.total) * 100).toFixed(1);
        
        // Get Traditions
        const traditionsHTML = culture.traditions.map(tradId => {
            // Search both martial, social, arcane arrays in LEGAL_DATA
            let tradition = null;
            for(const cat in LEGAL_DATA.traditions) {
                const found = LEGAL_DATA.traditions[cat].find(t => t.id === tradId);
                if(found) { tradition = found; break; }
            }
            if(!tradition) return '';
            return `<li class="tradition-tag" title="${tradition.description}">${tradition.icon} ${tradition.name}</li>`;
        }).join('');

        // Get Top Species
        const topSpecies = culture.primary_species.slice(0, 4).map(sKey => {
            const species = SPECIES_DATA[sKey];
            return species ? `<span class="species-pill" style="border-color:${species.color}">${species.icon} ${species.name}</span>` : '';
        }).join('');

        html += `
            <div class="culture-card" style="border-left: 4px solid ${culture.color}">
                <div class="culture-header">
                    <div class="culture-icon">${culture.icon}</div>
                    <div class="culture-title-block">
                        <h3>${culture.name}</h3>
                        <span class="culture-pop">Pop: ${population.toLocaleString()} (${popPercentage}%)</span>
                    </div>
                </div>
                <div class="culture-body">
                    <p class="culture-desc">${culture.description}</p>
                    <div class="culture-adjectives">
                        ${culture.adjectives.map(adj => `<span>${adj}</span>`).join(' • ')}
                    </div>
                    <div class="culture-section">
                        <h5>Primary Species</h5>
                        <div class="species-list">${topSpecies}</div>
                    </div>
                    <div class="culture-section">
                        <h5>Legal & Social Traditions</h5>
                        <ul class="traditions-list">${traditionsHTML || '<li class="tradition-tag">None/Unknown</li>'}</ul>
                    </div>
                    <div class="culture-section">
                        <h5>Art & Architecture</h5>
                        <p class="art-style">${culture.art_style}</p>
                    </div>
                </div>
            </div>
        `;
    });

    codexContainer.innerHTML = html;
}

function init() {
    if (!codexContainer) return;
    const demographicData = calculateCulturalDemographics();
    renderCultureChart(demographicData);
    renderCultureCards(demographicData);
    
    // Quick Stats
    statsContainer.innerHTML = `
        <div class="stat-item">
            <span class="label">Dominant Culture</span>
            <span class="value" style="color:#FFD700">Imperial Heartland</span>
        </div>
        <div class="stat-item">
            <span class="label">Most Diverse</span>
            <span class="value" style="color:#8A2BE2">Mystic Conclave</span>
        </div>
    `;
}

init();
