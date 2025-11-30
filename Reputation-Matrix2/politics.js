

import { MAP_DATA } from './map-data.js';
import { LORE_DATA } from './lore.js';
import { REGIONAL_DEMOGRAPHICS, SPECIES_ESTATE_BIAS } from './species-data.js';

const ESTATES = {
    nobility: { name: "Nobility & Military", icon: "👑", color: '#e3b341', description: "The ruling class, land owners, knights, and military officers. Their power is derived from birthright, titles, and martial prowess." },
    clergy: { name: "Clergy & Mages", icon: "🔮", color: '#a371f7', description: "Spiritual leaders, priests, mages, and scholars. Their influence comes from faith, knowledge, and control over magical or divine forces." },
    burghers: { name: "Burghers & Merchants", icon: "💰", color: '#58a6ff', description: "The middle class of artisans, traders, and skilled professionals. Their power is in their wealth, guilds, and control of commerce." },
    commoners: { name: "Commoners & Peasantry", icon: "🧑‍🌾", color: '#7d8590', description: "The largest group, comprising free farmers, laborers, and the general populace. Their power lies in their sheer numbers." },
    indentured: { name: "Indentured & Serfs", icon: "🔗", color: '#a1887f', description: "Individuals bound to land or service by law or debt. They are not free, but possess some limited rights unlike chattel slaves." },
    slaves: { name: "Slaves & Outcasts", icon: "⛓️", color: '#f85149', description: "Chattel slaves, prisoners, and casteless individuals with no rights. They are considered property and form the lowest rung of society." },
};

const POWER_WEIGHTS = {
    nobility: 5.0,
    clergy: 4.5,
    burghers: 3.0,
    commoners: 1.0,
    indentured: 0.2,
    slaves: 0.1,
};


function calculateEstateDemographics() {
    const estateTotals = { nobility: 0, clergy: 0, burghers: 0, commoners: 0, indentured: 0, slaves: 0 };
    const powerTotals = { nobility: 0, clergy: 0, burghers: 0, commoners: 0, indentured: 0, slaves: 0 };
    const factionBreakdown = {};

    for (const estateKey in ESTATES) {
        factionBreakdown[estateKey] = {};
    }

    for (const mapKey in MAP_DATA) {
        const map = MAP_DATA[mapKey];
        if (map.pointsOfInterest) {
            const region = map.group || 'Other';
            const regionalSpecies = REGIONAL_DEMOGRAPHICS[region] || { 'dnd_human': 1.0 }; // Default to human if region is undefined

            map.pointsOfInterest.forEach(poi => {
                const pop = poi.population || 0;
                if (pop > 0) {
                    const factionId = poi.factionId || 'unaligned';
                    
                    // For each species supposed to be in this region...
                    for (const [speciesKey, percentage] of Object.entries(regionalSpecies)) {
                        const speciesPopInPoi = pop * percentage;
                        const speciesBias = SPECIES_ESTATE_BIAS[speciesKey] || SPECIES_ESTATE_BIAS.default;

                        // Distribute that species' population across the estates
                        for (const [estateKey, estatePercentage] of Object.entries(speciesBias)) {
                            const popForEstate = speciesPopInPoi * estatePercentage;
                            
                            // Add to global total for the estate
                            estateTotals[estateKey] += popForEstate;
                            
                            // Add to the controlling faction's total for that estate
                            if (!factionBreakdown[estateKey][factionId]) {
                                factionBreakdown[estateKey][factionId] = 0;
                            }
                            factionBreakdown[estateKey][factionId] += popForEstate;
                        }
                    }
                }
            });
        }
    }
    
    // Calculate power scores
    for (const estateKey in estateTotals) {
        powerTotals[estateKey] = estateTotals[estateKey] * POWER_WEIGHTS[estateKey];
    }
    
    // Sort and slice top 5 factions for each estate
    for (const estateKey in factionBreakdown) {
        const sortedFactions = Object.entries(factionBreakdown[estateKey])
            .sort(([,a],[,b]) => b - a)
            .slice(0, 5);
        factionBreakdown[estateKey] = Object.fromEntries(sortedFactions);
    }
    
    return { 
        estateTotals, 
        powerTotals,
        factionBreakdown, 
        grandTotalPop: Object.values(estateTotals).reduce((a,b) => a+b, 0),
        grandTotalPower: Object.values(powerTotals).reduce((a,b) => a+b, 0)
    };
}

function renderPoliticsPage() {
    const container = document.getElementById('politics-container');
    if (!container) return;

    container.innerHTML = `
        <div class="charts-container">
            <div class="chart-panel">
                <h3>Global Estate Distribution (Population)</h3>
                <div class="canvas-wrapper">
                    <canvas id="estates-chart-pop"></canvas>
                </div>
            </div>
            <div class="chart-panel">
                <h3>Global Power Distribution (Influence)</h3>
                <div class="canvas-wrapper">
                    <canvas id="estates-chart-power"></canvas>
                </div>
            </div>
        </div>
        <div class="estates-panel">
            <h3>The Estates of the Realm</h3>
            <div id="estates-grid" class="estates-grid"></div>
        </div>
    `;

    const data = calculateEstateDemographics();
    
    // Render Population Chart
    const popChartCanvas = document.getElementById('estates-chart-pop');
    if (popChartCanvas) {
        new Chart(popChartCanvas, {
            type: 'doughnut',
            data: {
                labels: Object.values(ESTATES).map(e => e.name),
                datasets: [{
                    data: Object.values(data.estateTotals),
                    backgroundColor: Object.values(ESTATES).map(e => e.color),
                    borderWidth: 1,
                    borderColor: '#161b22'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
    
    // Render Power Chart
    const powerChartCanvas = document.getElementById('estates-chart-power');
    if (powerChartCanvas) {
        new Chart(powerChartCanvas, {
            type: 'doughnut',
            data: {
                labels: Object.values(ESTATES).map(e => e.name),
                datasets: [{
                    data: Object.values(data.powerTotals),
                    backgroundColor: Object.values(ESTATES).map(e => e.color),
                    borderWidth: 1,
                    borderColor: '#161b22'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // Render Estate Cards
    const grid = document.getElementById('estates-grid');
    for (const [key, estate] of Object.entries(ESTATES)) {
        const popTotal = data.estateTotals[key];
        const popPercentage = data.grandTotalPop > 0 ? ((popTotal / data.grandTotalPop) * 100).toFixed(1) : 0;
        const powerTotal = data.powerTotals[key];
        const powerPercentage = data.grandTotalPower > 0 ? ((powerTotal / data.grandTotalPower) * 100).toFixed(1) : 0;
        
        const topFactionsHTML = Object.entries(data.factionBreakdown[key]).map(([factionId, count]) => `
            <li>
                <img src="${LORE_DATA.factions[factionId]?.logo || 'faction_unaligned.png'}" alt="${LORE_DATA.factions[factionId]?.name}">
                <span>${LORE_DATA.factions[factionId]?.name || 'Unaligned'}</span>
            </li>
        `).join('');

        grid.innerHTML += `
            <div class="estate-card">
                <div class="estate-header">
                    <span class="estate-icon" style="color: ${estate.color};">${estate.icon}</span>
                    <div class="estate-title">
                        <h4 style="color: ${estate.color};">${estate.name}</h4>
                        <div class="estate-stats">
                            <span class="estate-pop">Pop: ${Math.round(popTotal).toLocaleString()} (${popPercentage}%)</span>
                            <span class="estate-power">Power: ${Math.round(powerTotal).toLocaleString()} (${powerPercentage}%)</span>
                        </div>
                    </div>
                </div>
                <p class="estate-description">${estate.description}</p>
                <div class="estate-factions">
                    <h5>Dominant Factions</h5>
                    <ul class="faction-influence-list">${topFactionsHTML || '<li>No significant presence.</li>'}</ul>
                </div>
            </div>
        `;
    }
}

function init() {
    const container = document.getElementById('politics-container');
    if (!container) return;

    renderPoliticsPage();
    initBoP();
}

init();