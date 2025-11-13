
import { LORE_DATA } from './lore.js';
import { SPECIES_DATA, REGIONAL_DEMOGRAPHICS } from './species-data.js';
import { MAP_DATA } from './map-data.js';

// Helper to aggregate populations
function calculateDemographics() {
    const totalByRegion = {};
    const totalBySpecies = {};
    let grandTotal = 0;

    // Initialize species counts
    for (const key in SPECIES_DATA) {
        totalBySpecies[key] = 0;
    }

    // Iterate over all maps
    for (const mapKey in MAP_DATA) {
        const map = MAP_DATA[mapKey];
        const group = map.group || 'Other';
        
        if (!totalByRegion[group]) totalByRegion[group] = 0;

        // Sum populations from POIs
        if (map.pointsOfInterest) {
            map.pointsOfInterest.forEach(poi => {
                const pop = poi.population || 0;
                if (pop > 0) {
                    totalByRegion[group] += pop;
                    grandTotal += pop;

                    // Distribute to species based on regional makeup
                    const demographics = REGIONAL_DEMOGRAPHICS[group] || { other: 1.0 };
                    for (const [speciesKey, percentage] of Object.entries(demographics)) {
                        if (totalBySpecies[speciesKey] !== undefined) {
                            totalBySpecies[speciesKey] += Math.round(pop * percentage);
                        } else {
                            // Fallback if a key is missing in SPECIES_DATA but present in demographics
                            if (!totalBySpecies['other']) totalBySpecies['other'] = 0;
                            totalBySpecies['other'] += Math.round(pop * percentage);
                        }
                    }
                }
            });
        }
    }

    return { totalByRegion, totalBySpecies, grandTotal };
}

function renderCharts(data) {
    // -- Global Species Pie Chart --
    // Show ALL species with population > 0, no grouping
    const chartDataEntries = [];

    Object.entries(data.totalBySpecies).forEach(([key, count]) => {
        if (count > 0) {
            chartDataEntries.push({
                label: SPECIES_DATA[key]?.name || key,
                count: count,
                color: SPECIES_DATA[key]?.color || '#888'
            });
        }
    });

    chartDataEntries.sort((a, b) => b.count - a.count);

    const speciesCtx = document.getElementById('global-species-chart');
    if (speciesCtx) {
        const existingChart = Chart.getChart(speciesCtx);
        if (existingChart) existingChart.destroy();

        new Chart(speciesCtx, {
            type: 'doughnut',
            data: {
                labels: chartDataEntries.map(d => d.label),
                datasets: [{
                    data: chartDataEntries.map(d => d.count),
                    backgroundColor: chartDataEntries.map(d => d.color),
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
                        labels: { 
                            color: '#e6edf3', 
                            font: { family: "'Roboto Mono', monospace" },
                            boxWidth: 12,
                            padding: 10
                        } 
                    }
                }
            }
        });
    }

    // -- Regional Population Bar Chart --
    const regionEntries = Object.entries(data.totalByRegion).sort((a, b) => b[1] - a[1]);
    const regionCtx = document.getElementById('regional-population-chart');
    if (regionCtx) {
        const existingChart = Chart.getChart(regionCtx);
        if (existingChart) existingChart.destroy();

        new Chart(regionCtx, {
            type: 'bar',
            data: {
                labels: regionEntries.map(([name]) => name),
                datasets: [{
                    label: 'Total Estimated Population',
                    data: regionEntries.map(([, count]) => count),
                    backgroundColor: '#58a6ff',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    y: { ticks: { color: '#7d8590' }, grid: { color: '#30363d' } },
                    x: { ticks: { color: '#e6edf3' }, grid: { display: false } }
                }
            }
        });
    }

    // -- Faction Strength (Estimated from Map Military Strength) --
    const factionStrength = {};
    for (const mapKey in MAP_DATA) {
        MAP_DATA[mapKey].pointsOfInterest?.forEach(poi => {
            if (poi.factionId && poi.military_strength) {
                factionStrength[poi.factionId] = (factionStrength[poi.factionId] || 0) + poi.military_strength;
            }
        });
    }
    
    const factionCtx = document.getElementById('faction-strength-chart');
    if (factionCtx) {
        const existingChart = Chart.getChart(factionCtx);
        if (existingChart) existingChart.destroy();

        const topFactions = Object.entries(factionStrength)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10); // Top 10

        new Chart(factionCtx, {
            type: 'bar',
            data: {
                labels: topFactions.map(([id]) => LORE_DATA.factions[id]?.name || id),
                datasets: [{
                    label: 'Military Projection Power',
                    data: topFactions.map(([, val]) => val),
                    backgroundColor: '#f85149',
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y', // Horizontal bar chart
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { ticks: { color: '#7d8590' }, grid: { color: '#30363d' } },
                    y: { ticks: { color: '#e6edf3' }, grid: { display: false } }
                }
            }
        });
    }
}

function renderSpeciesList(data) {
    const container = document.getElementById('species-grid-container');
    if (!container) return;

    // Sort by population count
    let sortedSpecies = Object.entries(data.totalBySpecies).sort((a, b) => b[1] - a[1]);
    
    // Filter out 0 population for display
    sortedSpecies = sortedSpecies.filter(([, count]) => count > 0);

    // SHOW ALL SPECIES, NO LIMIT
    const cardsHTML = sortedSpecies.map(([key, count]) => {
        const species = SPECIES_DATA[key];
        if (!species) return '';

        const percentage = data.grandTotal > 0 ? ((count / data.grandTotal) * 100).toFixed(1) : 0;

        return `
            <div class="species-card" style="border-left: 5px solid ${species.color};">
                <div class="species-header">
                    <span class="species-icon">${species.icon}</span>
                    <h3 style="color: ${species.color};">${species.name}</h3>
                </div>
                <p class="species-description">${species.description}</p>
                <div class="species-pop-stat">
                    <span>Est. Population:</span>
                    <strong>${count.toLocaleString()} (${percentage}%)</strong>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = cardsHTML;
}

function init() {
    const data = calculateDemographics();
    renderCharts(data);
    renderSpeciesList(data);
}

// Wait for DOM and Chart.js
document.addEventListener('DOMContentLoaded', init);
