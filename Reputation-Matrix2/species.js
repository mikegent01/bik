
import { LORE_DATA } from './lore.js';
import { SPECIES_DATA, REGIONAL_DEMOGRAPHICS } from './species-data.js';
import { MAP_DATA } from './map-data.js';
import { renderWorkforceData, getBiasForSpecies, LABOR_CATEGORIES } from './species-workforce.js';
import { RELIGION_DATA } from './religion-data.js';

// Define Player Races for Relationship Context
const PLAYER_RACE_LABELS = {
    archie: "Human Variant",
    markop: "Centaur - Equine",
    humpik: "Dwarf",
    bowser: "Koopa",
    remi: "Student (Human)"
};

// Helper to aggregate populations
function calculateDemographics() {
    const totalByRegion = {};
    const totalBySpecies = {};
    const speciesFactionDistribution = {}; // New data structure
    let grandTotal = 0;

    // Initialize species counts and faction distributions
    for (const key in SPECIES_DATA) {
        totalBySpecies[key] = 0;
        speciesFactionDistribution[key] = {}; // Initialize inner object
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

                    const factionId = poi.factionId || 'unaligned'; // Get faction for this POI

                    // Distribute to species based on regional makeup
                    const demographics = REGIONAL_DEMOGRAPHICS[group] || { 'dnd_human': 1.0 }; 
                    
                    for (const [speciesKey, percentage] of Object.entries(demographics)) {
                        if (SPECIES_DATA[speciesKey]) {
                            const speciesPopInPoi = pop * percentage;
                            totalBySpecies[speciesKey] += speciesPopInPoi;

                            // NEW: Add to the faction distribution
                            if (!speciesFactionDistribution[speciesKey][factionId]) {
                                speciesFactionDistribution[speciesKey][factionId] = 0;
                            }
                            speciesFactionDistribution[speciesKey][factionId] += speciesPopInPoi;
                        }
                    }
                }
            });
        }
    }

    return { totalByRegion, totalBySpecies, grandTotal, speciesFactionDistribution }; // Return new data
}

function renderTotalPopulation(grandTotal) {
    const display = document.getElementById('total-population-display');
    if (display) {
        display.innerText = grandTotal.toLocaleString();
    }
}

function renderCharts(data) {
    // -- Global Species Pie Chart --
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

    // -- Faction Strength --
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

    // Convert SPECIES_DATA to array
    const allSpecies = Object.entries(SPECIES_DATA);

    // Sort by population count (descending)
    allSpecies.sort((a, b) => {
        const countA = data.totalBySpecies[a[0]] || 0;
        const countB = data.totalBySpecies[b[0]] || 0;
        if (countB !== countA) return countB - countA;
        return a[1].name.localeCompare(b[1].name);
    });

    const cardsHTML = allSpecies.map(([key, species]) => {
        let count = data.totalBySpecies[key] || 0;
        let percentageString = "";
        let countString = "";
        
        // Handle 0/Low population display logic
        if (count > 0) {
            const percentage = data.grandTotal > 0 ? ((count / data.grandTotal) * 100).toFixed(1) : 0;
            countString = Math.round(count).toLocaleString();
            percentageString = `(${percentage}%)`;
        } else {
            // Generate realistic "Lore Estimates" for species not appearing on current maps
            // or those that are statistically rare.
            
            if (species.name.includes("Legendary") || species.social_status === "Unique") {
                countString = "1 - 5";
                percentageString = "(Unique)";
            } else if (species.social_status === "Cursed Anomaly" || species.name.includes("Equine")) {
                countString = "~15 - 50";
                percentageString = "(Rare Anomaly)";
            } else if (species.social_status === "Endangered" || species.name.includes("Void")) {
                countString = "~100";
                percentageString = "(Endangered)";
            } else {
                // General scattered population
                const randomEst = Math.floor(Math.random() * 400) + 50;
                countString = `~${randomEst}`;
                percentageString = "(Scattered)";
            }
        }

        // --- RELIGION CALCULATION ---
        let dominantFaith = "Secular / Unaligned";
        let dominantFaithColor = "var(--text-secondary)";
        
        if (species.religion_breakdown) {
            // Convert object to array and sort by value descending
            const sortedFaiths = Object.entries(species.religion_breakdown).sort((a, b) => b[1] - a[1]);
            
            if (sortedFaiths.length > 0) {
                const topKey = sortedFaiths[0][0];
                
                if (topKey === 'unaligned') {
                    dominantFaith = "Secular / Unaligned";
                } else if (RELIGION_DATA.denominations[topKey]) {
                    dominantFaith = RELIGION_DATA.denominations[topKey].name;
                    // Get color from parent group
                    const groupKey = RELIGION_DATA.denominations[topKey].group;
                    if (RELIGION_DATA.groups[groupKey]) {
                        dominantFaithColor = RELIGION_DATA.groups[groupKey].color;
                    }
                }
            }
        }

        const religionHTML = `
            <div class="species-religion-mini">
                <strong style="color:var(--neutral-color);">Dominant Faith:</strong> 
                <span style="color:${dominantFaithColor}; font-weight:bold;">${dominantFaith}</span>
            </div>
        `;

        // --- WORKFORCE CALCULATION (Mini) ---
        const bias = getBiasForSpecies(key);
        const sortedWorkforce = LABOR_CATEGORIES.map(cat => ({
            ...cat,
            value: bias[cat.id]
        })).sort((a, b) => b.value - a.value);
        
        // Take top 2 roles
        const topRoles = sortedWorkforce.slice(0, 2);
        const workforceHTML = `
            <div class="species-workforce-mini">
                <strong style="color:var(--neutral-color);">Primary Roles:</strong> 
                ${topRoles.map(r => `<span style="color:${r.color}; margin-left:4px;">${r.name}</span>`).join(', ')}
            </div>
        `;
        
        // --- FACTION LEANING CALCULATION ---
        const factionDistribution = data.speciesFactionDistribution[key] || {};
        const speciesTotalPop = data.totalBySpecies[key] || 0;
        const topFactions = Object.entries(factionDistribution)
            .sort((a, b) => b[1] - a[1]) // Sort descending by population
            .slice(0, 5); // Get top 5

        const factionsHTML = topFactions.length > 0 && topFactions[0][1] > 0 ? `
            <div class="species-factions">
                <h6>Top Factions</h6>
                <ul>
                    ${topFactions.map(([factionKey, count]) => {
                        const faction = LORE_DATA.factions[factionKey];
                        if (!faction) return '';
                        const percentageOfTotal = speciesTotalPop > 0 ? ((count / speciesTotalPop) * 100).toFixed(1) : 0;
                        if (parseFloat(percentageOfTotal) < 1) return ''; // Don't show negligible percentages
                        return `
                            <li>
                                <img src="${faction.logo}" alt="${faction.name}" title="${faction.name}">
                                <span>${faction.name}</span>
                                <span class="faction-percentage">${percentageOfTotal}%</span>
                            </li>
                        `;
                    }).join('')}
                </ul>
            </div>
        ` : '<div class="species-factions"><p style="font-style:italic; color:var(--text-secondary);">No significant factional alignment.</p></div>';


        // --- RELATIONS CALCULATION ---
        let relationsHTML = '';
        if (species.player_relations) {
            relationsHTML = `
                <div class="species-relations">
                    <h6>Racial Relations</h6>
                    <ul>
                        ${Object.entries(species.player_relations).map(([player, text]) => {
                            const playerName = player.charAt(0).toUpperCase() + player.slice(1);
                            const raceLabel = PLAYER_RACE_LABELS[player] || 'Unknown';
                            return `<li><strong>${playerName} (${raceLabel}):</strong> ${text}</li>`;
                        }).join('')}
                    </ul>
                </div>
            `;
        } else {
            relationsHTML = `<div class="species-relations"><p style="font-style:italic; color:var(--text-secondary);">No known bias.</p></div>`;
        }

        // --- SOCIAL STATUS BADGE ---
        const statusBadge = species.social_status ? 
            `<div class="species-status-badge status-${species.social_status.toLowerCase().split(' ')[0]}">${species.social_status}</div>` 
            : '';

        return `
            <div class="species-card" style="border-left: 5px solid ${species.color};">
                <div class="species-header">
                    <span class="species-icon">${species.icon}</span>
                    <div style="flex-grow:1;">
                        <h3 style="color: ${species.color};">${species.name}</h3>
                        ${statusBadge}
                    </div>
                </div>
                <p class="species-description">${species.description}</p>
                <div class="species-pop-stat">
                    <span>Est. Population:</span>
                    <strong>${countString} <span style="font-weight:normal; font-size:0.8em; color:var(--text-secondary);">${percentageString}</span></strong>
                </div>
                ${religionHTML}
                ${workforceHTML}
                ${factionsHTML}
                ${relationsHTML}
            </div>
        `;
    }).join('');

    container.innerHTML = cardsHTML;
}

function init() {
    if (!document.getElementById('species-grid-container')) return;
    const data = calculateDemographics();
    renderTotalPopulation(data.grandTotal);
    renderCharts(data);
    renderSpeciesList(data);
    
    // New: Render Workforce Analysis
    renderWorkforceData(data);
}

// Wait for DOM and Chart.js
document.addEventListener('DOMContentLoaded', init);
