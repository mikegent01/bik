// species.js - Updated to use population simulation

import { LORE_DATA } from './lore.js';
import { SPECIES_DATA, REGIONAL_DEMOGRAPHICS } from './species-data.js';
import { MAP_DATA } from './map-data.js';
import { renderWorkforceData, getBiasForSpecies, LABOR_CATEGORIES, calculateTechAccessByEstate } from './species-workforce.js';
import { RELIGION_DATA } from './religion-data.js';
import { getGlobalTechAverages, RESEARCH_CATEGORIES, calculateGlobalCycle } from './research-data.js';
import { getPlagueData, getCurrentSeason, PLAGUE_LIFECYCLE } from './plagues-data.js';
import { simulatePopulation, calculateGlobalVitalStats } from './population-state.js';
import { WAHBOOK_POSTS } from './assembly-data.js';
import { CALENDAR_DATA, CURRENT_GAME_DATE } from './calendar-data.js';

// Define Player Races for Relationship Context
const PLAYER_RACE_LABELS = {
    archie: "Human Variant",
    markop: "Centaur - Equine",
    hjumpik: "Dwarf",
    bowser: "Koopa",
    remi: "Student (Human)"
};

/**
 * Calculate demographics using the population simulation
 */
function calculateDemographics() {
    // Run the full population simulation
    const simulation = simulatePopulation();
    
    // Build the data structure expected by other functions
    const totalByRegion = simulation.adjusted.byRegion;
    const totalBySpecies = simulation.adjusted.bySpecies;
    const grandTotal = simulation.adjusted.total;
    
    // Calculate faction distribution (simplified)
    const speciesFactionDistribution = {};
    for (const key in SPECIES_DATA) {
        speciesFactionDistribution[key] = {};
    }
    
    // Aggregate faction data from map - FILTER FOR _FULL MAPS
    for (const mapKey in MAP_DATA) {
        // IMPORTANT: Only process _full maps to align with population simulation and prevent double counting
        if (!mapKey.endsWith('_full')) continue;

        const map = MAP_DATA[mapKey];
        const group = map.group || 'Other';
        
        if (map.pointsOfInterest) {
            map.pointsOfInterest.forEach(poi => {
                const pop = poi.population || 0;
                if (pop > 0) {
                    const factionId = poi.factionId || 'unaligned';
                    const demographics = REGIONAL_DEMOGRAPHICS[group] || { dnd_human: 1.0 };
                    
                    for (const [speciesKey, percentage] of Object.entries(demographics)) {
                        if (SPECIES_DATA[speciesKey]) {
                            // Use adjusted population proportion
                            const adjustedPop = (simulation.adjusted.bySpecies[speciesKey] || 0) * 
                                               (pop / (simulation.base.byRegion[group] || 1));
                            
                            if (!speciesFactionDistribution[speciesKey][factionId]) {
                                speciesFactionDistribution[speciesKey][factionId] = 0;
                            }
                            speciesFactionDistribution[speciesKey][factionId] += adjustedPop * percentage;
                        }
                    }
                }
            });
        }
    }
    
    return { 
        totalByRegion, 
        totalBySpecies, 
        grandTotal, 
        speciesFactionDistribution,
        simulation // Include full simulation data for detailed stats
    };
}

function renderTotalPopulation(grandTotal, simulation) {
    const display = document.getElementById('total-population-display');
    if (display) {
        display.innerHTML = `
            ${Math.round(grandTotal).toLocaleString()}
            <span style="font-size: 0.4em; color: var(--text-secondary); display: block;">
                Base: ${Math.round(simulation.base.total).toLocaleString()}
            </span>
        `;
    }
}

/**
 * Render vital statistics with plague impact
 */
function renderVitalStatistics(data) {
    const container = document.getElementById('vital-stats-container');
    if (!container) return;
    
    const simulation = data.simulation;
    const stats = simulation.rates;
    const deaths = simulation.deaths;
    const plagues = simulation.plagues;
    
    // Calculate active plague count
    const activePlagues = plagues.filter(p => 
        p.status !== PLAGUE_LIFECYCLE.STATUSES.ERADICATED &&
        p.status !== PLAGUE_LIFECYCLE.STATUSES.DORMANT
    ).length;
    
    const growthColor = stats.netGrowthRate >= 0 ? 'var(--positive-color)' : 'var(--negative-color)';
    const currentSeason = simulation.currentSeason;
    const globalCycle = simulation.globalCycle;
    
    // Calculate plague impact percentage
    const plagueImpactPct = (deaths.plague / Math.max(1, simulation.adjusted.total)) * 365 * 100;
    
    container.innerHTML = `
        <div style="text-align:center;">
            <span style="display:block; color:var(--text-secondary); font-size:0.85rem;">Birth Rate</span>
            <span style="font-size:1.5rem; color:var(--positive-color); font-family:var(--font-display);">
                ${stats.annualBirthRate.toFixed(2)}%
            </span>
            <span style="display:block; font-size:0.65rem; color:var(--text-secondary);">
                +${Math.round(simulation.births).toLocaleString()}/day
            </span>
        </div>
        <div style="text-align:center;">
            <span style="display:block; color:var(--text-secondary); font-size:0.85rem;">Death Rate</span>
            <span style="font-size:1.5rem; color:var(--negative-color); font-family:var(--font-display);">
                ${stats.annualDeathRate.toFixed(2)}%
            </span>
            ${plagueImpactPct > 0.01 ? `
                <div style="font-size:0.65rem; color:var(--negative-color); margin-top:2px;">
                    +${plagueImpactPct.toFixed(2)}% from ${activePlagues} outbreak${activePlagues !== 1 ? 's' : ''}
                </div>
            ` : ''}
            <span style="display:block; font-size:0.65rem; color:var(--text-secondary);">
                -${Math.round(deaths.total).toLocaleString()}/day
            </span>
        </div>
        <div style="text-align:center;">
            <span style="display:block; color:var(--text-secondary); font-size:0.85rem;">Net Growth</span>
            <span style="font-size:1.5rem; color:${growthColor}; font-family:var(--font-display);">
                ${stats.netGrowthRate > 0 ? '+' : ''}${stats.netGrowthRate.toFixed(2)}%
            </span>
            <span style="display:block; font-size:0.65rem; color:var(--text-secondary);">
                Annual projection
            </span>
        </div>
        <div style="text-align:center; border-left:1px solid var(--border-color); padding-left:20px;">
            <span style="display:block; color:var(--text-secondary); font-size:0.85rem;">Season</span>
            <span style="color:var(--accent-color); font-weight:bold; font-size:0.9rem;">
                ${currentSeason}
            </span>
            <span style="display:block; color:${globalCycle?.phase?.color || '#fff'}; font-weight:bold; font-size:0.85rem; margin-top:4px;">
                ${globalCycle?.phase?.name || 'Unknown'}
            </span>
        </div>
    `;
}

function renderCharts(data) {
    // -- Global Species Pie Chart --
    const chartDataEntries = [];
    
    // Minimum thresholds to show on chart
    const CHART_THRESHOLD = 500;
    const CHART_PERCENTAGE_THRESHOLD = 0.05; // 0.05%

    Object.entries(data.totalBySpecies).forEach(([key, count]) => {
        const percentage = data.grandTotal > 0 ? (count / data.grandTotal) * 100 : 0;
        
        // Include if meets either threshold
        if (count >= CHART_THRESHOLD || percentage >= CHART_PERCENTAGE_THRESHOLD) {
            chartDataEntries.push({
                key: key,
                label: SPECIES_DATA[key]?.name || key,
                count: Math.round(count),
                percentage: percentage,
                color: SPECIES_DATA[key]?.color || '#888'
            });
        }
    });

    // Sort by population (descending)
    chartDataEntries.sort((a, b) => b.count - a.count);
    
    // Limit to top 20 entries (no "Other" grouping)
    const displayEntries = chartDataEntries.slice(0, 20);

    const speciesCtx = document.getElementById('global-species-chart');
    if (speciesCtx) {
        const existingChart = Chart.getChart(speciesCtx);
        if (existingChart) existingChart.destroy();

        new Chart(speciesCtx, {
            type: 'doughnut',
            data: {
                labels: displayEntries.map(d => d.label),
                datasets: [{
                    data: displayEntries.map(d => d.count),
                    backgroundColor: displayEntries.map(d => d.color),
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
                            font: { family: "'Roboto Mono', monospace", size: 10 },
                            boxWidth: 12,
                            padding: 8
                        } 
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.raw.toLocaleString();
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const pct = ((context.raw / total) * 100).toFixed(2);
                                return `${context.label}: ${value} (${pct}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    // -- Regional Population Bar Chart --
    const regionEntries = Object.entries(data.totalByRegion)
        .map(([name, count]) => [name, Math.round(count)])
        .sort((a, b) => b[1] - a[1]);
    
    const regionCtx = document.getElementById('regional-population-chart');
    if (regionCtx) {
        const existingChart = Chart.getChart(regionCtx);
        if (existingChart) existingChart.destroy();

        new Chart(regionCtx, {
            type: 'bar',
            data: {
                labels: regionEntries.map(([name]) => name),
                datasets: [{
                    label: 'Adjusted Population',
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
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Population: ${context.raw.toLocaleString()}`;
                            }
                        }
                    }
                },
                scales: {
                    y: { 
                        ticks: { 
                            color: '#7d8590',
                            callback: function(value) {
                                return value >= 1000000 ? (value/1000000).toFixed(1) + 'M' :
                                       value >= 1000 ? (value/1000).toFixed(0) + 'K' : value;
                            }
                        }, 
                        grid: { color: '#30363d' } 
                    },
                    x: { ticks: { color: '#e6edf3' }, grid: { display: false } }
                }
            }
        });
    }

    // -- Faction Strength --
    const factionStrength = {};
    for (const mapKey in MAP_DATA) {
        // Also only process _full here to avoid double counting power
        if (!mapKey.endsWith('_full')) continue;

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
            .slice(0, 10);

        new Chart(factionCtx, {
            type: 'bar',
            data: {
                labels: topFactions.map(([id]) => LORE_DATA.factions?.[id]?.name || id),
                datasets: [{
                    label: 'Military Projection Power',
                    data: topFactions.map(([, val]) => val),
                    backgroundColor: '#f85149',
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
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

// -- Tech Access by Social Class (Radar Chart) --
function renderTechAccessChart(category = 'aggregate') {
    const techAccessCtx = document.getElementById('tech-access-chart');
    if (!techAccessCtx) return;

    const existingChart = Chart.getChart(techAccessCtx);
    if (existingChart) existingChart.destroy();

    const globalTech = getGlobalTechAverages();
    const estateAccess = calculateTechAccessByEstate(globalTech, category);
    
    const labels = Object.keys(estateAccess).map(k => k.charAt(0).toUpperCase() + k.slice(1));
    const dataValues = Object.values(estateAccess);

    let color = '#58a6ff';
    if (category === 'WEAPONS') color = '#f85149';
    if (category === 'MAGIC') color = '#a371f7';
    if (category === 'ECONOMIC') color = '#e3b341';

    new Chart(techAccessCtx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: `${category === 'aggregate' ? 'Overall' : category} Access Score`,
                data: dataValues,
                backgroundColor: color + '33',
                borderColor: color,
                pointBackgroundColor: color,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: color
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: '#30363d' },
                    grid: { color: '#30363d' },
                    pointLabels: { color: '#e6edf3', font: { size: 12, family: "'Orbitron', sans-serif" } },
                    ticks: { display: false, backdropColor: 'transparent' }, 
                    min: 0,
                }
            },
            plugins: {
                legend: { display: true, labels: { color: '#e6edf3' } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Access Score: ${context.raw.toFixed(1)}`;
                        }
                    }
                }
            }
        }
    });
}

function setupTechSelector() {
    const selector = document.getElementById('tech-access-filter');
    if (!selector) return;

    selector.innerHTML = '<option value="aggregate">Aggregate (All Tech)</option>';

    RESEARCH_CATEGORIES.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat.charAt(0) + cat.slice(1).toLowerCase();
        selector.appendChild(option);
    });

    selector.addEventListener('change', (e) => {
        renderTechAccessChart(e.target.value);
        
        const desc = document.getElementById('tech-access-desc');
        if(desc) {
            if(e.target.value === 'aggregate') {
                desc.textContent = "Analysis of how advanced technology permeates different strata of society overall.";
            } else {
                desc.textContent = `Breakdown of access to ${e.target.value} technology specifically.`;
            }
        }
    });
}

function renderSpeciesList(data) {
    const container = document.getElementById('species-grid-container');
    if (!container) return;

    const allSpecies = Object.entries(SPECIES_DATA);
    const simulation = data.simulation;

    allSpecies.sort((a, b) => {
        const countA = data.totalBySpecies[a[0]] || 0;
        const countB = data.totalBySpecies[b[0]] || 0;
        if (countB !== countA) return countB - countA;
        return a[1].name.localeCompare(b[1].name);
    });

    const cardsHTML = allSpecies.map(([key, species]) => {
        const adjustedCount = data.totalBySpecies[key] || 0;
        const speciesDetail = simulation?.speciesDetails?.[key];
        
        let countString = "";
        let percentageString = "";
        let trendIndicator = "";
        
        // Threshold to show actual numbers vs "Scattered"
        const VISIBILITY_THRESHOLD = 500;
        const PERCENTAGE_THRESHOLD = 0.01; // 0.01%
        
        const percentage = data.grandTotal > 0 ? (adjustedCount / data.grandTotal) * 100 : 0;
        
        if (adjustedCount >= VISIBILITY_THRESHOLD || percentage >= PERCENTAGE_THRESHOLD) {
            // Show actual population
            countString = Math.round(adjustedCount).toLocaleString();
            percentageString = `(${percentage.toFixed(2)}%)`;
            
            // Show population trend
            if (speciesDetail) {
                const dailyChange = speciesDetail.netChange || 0;
                if (dailyChange > 10) {
                    trendIndicator = `<span style="color:var(--positive-color);">↑ +${Math.round(dailyChange).toLocaleString()}/day</span>`;
                } else if (dailyChange < -10) {
                    trendIndicator = `<span style="color:var(--negative-color);">↓ ${Math.round(dailyChange).toLocaleString()}/day</span>`;
                } else {
                    trendIndicator = `<span style="color:var(--text-secondary);">→ Stable</span>`;
                }
                
                // Plague deaths warning
                if (speciesDetail.plagueDeaths > 0) {
                    trendIndicator += `<br><span style="color:var(--negative-color); font-size:0.7rem;">☠️ ${Math.round(speciesDetail.plagueDeaths).toLocaleString()}/day from disease</span>`;
                }
                
                // Growth indicator for small populations
                if (adjustedCount < 1000 && speciesDetail.netChange > 0) {
                    const daysToThousand = Math.ceil((1000 - adjustedCount) / speciesDetail.netChange);
                    if (daysToThousand < 365) {
                        trendIndicator += `<br><span style="color:var(--accent-color); font-size:0.7rem;">📈 Est. ${daysToThousand} days to 1,000</span>`;
                    }
                }
            }
        } else if (adjustedCount > 0) {
            // Small but tracked population
            
            if (species.social_status?.includes('Unique') || species.social_status?.includes('Legendary')) {
                countString = `${Math.round(adjustedCount)} known`;
                percentageString = "(Unique)";
            } else if (species.social_status?.includes('Endangered')) {
                countString = `~${Math.round(adjustedCount)}`;
                percentageString = "(Endangered)";
            } else if (species.social_status?.includes('Anomaly')) {
                countString = `~${Math.round(adjustedCount)}`;
                percentageString = "(Rare Anomaly)";
            } else {
                countString = `~${Math.round(adjustedCount)}`;
                percentageString = "(Scattered)";
            }
            
            // Still show trend for scattered populations
            if (speciesDetail && speciesDetail.netChange !== 0) {
                const dailyChange = speciesDetail.netChange;
                if (dailyChange > 0.5) {
                    trendIndicator = `<span style="color:var(--positive-color); font-size:0.8rem;">↑ Growing</span>`;
                } else if (dailyChange < -0.5) {
                    trendIndicator = `<span style="color:var(--negative-color); font-size:0.8rem;">↓ Declining</span>`;
                }
            }
        } else {
            // Truly zero population
            countString = "Extinct?";
            percentageString = "";
            trendIndicator = `<span style="color:var(--negative-color);">☠️ No known population</span>`;
        }

        // Religion
        let dominantFaith = "Secular / Unaligned";
        let dominantFaithColor = "var(--text-secondary)";
        
        if (species.religion_breakdown) {
            const sortedFaiths = Object.entries(species.religion_breakdown).sort((a, b) => b[1] - a[1]);
            
            if (sortedFaiths.length > 0) {
                const topKey = sortedFaiths[0][0];
                
                if (topKey === 'unaligned') {
                    dominantFaith = "Secular / Unaligned";
                } else if (RELIGION_DATA.denominations?.[topKey]) {
                    dominantFaith = RELIGION_DATA.denominations[topKey].name;
                    const groupKey = RELIGION_DATA.denominations[topKey].group;
                    if (RELIGION_DATA.groups?.[groupKey]) {
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

        // Workforce
        const bias = getBiasForSpecies(key);
        const sortedWorkforce = LABOR_CATEGORIES.map(cat => ({
            ...cat,
            value: bias[cat.id]
        })).sort((a, b) => b.value - a.value);
        
        const topRoles = sortedWorkforce.slice(0, 2);
        const workforceHTML = `
            <div class="species-workforce-mini">
                <strong style="color:var(--neutral-color);">Primary Roles:</strong> 
                ${topRoles.map(r => `<span style="color:${r.color}; margin-left:4px;">${r.name}</span>`).join(', ')}
            </div>
        `;
        
        // Factions
        const factionDistribution = data.speciesFactionDistribution[key] || {};
        const speciesTotalPop = data.totalBySpecies[key] || 0;
        const topFactions = Object.entries(factionDistribution)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);

        const factionsHTML = topFactions.length > 0 && topFactions[0][1] > 0 ? `
            <div class="species-factions">
                <h6>Top Factions</h6>
                <ul>
                    ${topFactions.map(([factionKey, count]) => {
                        const faction = LORE_DATA.factions?.[factionKey];
                        if (!faction) return '';
                        const percentageOfTotal = speciesTotalPop > 0 ? ((count / speciesTotalPop) * 100).toFixed(1) : 0;
                        if (parseFloat(percentageOfTotal) < 1) return '';
                        return `
                            <li>
                                <img src="${faction.logo}" alt="${faction.name}" title="${faction.name}" onerror="this.style.display='none'">
                                <span>${faction.name}</span>
                                <span class="faction-percentage">${percentageOfTotal}%</span>
                            </li>
                        `;
                    }).join('')}
                </ul>
            </div>
        ` : '<div class="species-factions"><p style="font-style:italic; color:var(--text-secondary);">No significant factional alignment.</p></div>';

        // Relations
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
            relationsHTML = `<div class="species-relations"><p style="font-style:italic; color:var(--text-secondary);"> </p></div>`;
        }

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
                ${species.gallery?.length ? `
                    <div class="species-gallery" aria-label="${species.name} portraits">
                        ${species.gallery.map(image => `
                            <figure class="species-gallery-item">
                                <img src="${image.src}" alt="${image.alt}" loading="lazy" onerror="this.closest('figure').remove()">
                                <figcaption>${image.alt}</figcaption>
                            </figure>
                        `).join('')}
                    </div>
                ` : ''}
                <p class="species-description">${species.description}</p>
                <div class="species-context-links" style="display:flex;gap:6px;flex-wrap:wrap;margin:10px 0;">
                    <a class="chip" href="battlefield.html#/home">📚 Archive records</a>
                    <a class="chip" href="battlefield.html#/timeline">🕰️ Historical impact</a>
                </div>
                <div class="species-pop-stat">
                    <span>Est. Population:</span>
                    <strong>${countString} <span style="font-weight:normal; font-size:0.8em; color:var(--text-secondary);">${percentageString}</span></strong>
                    ${trendIndicator ? `<div style="font-size:0.75rem; margin-top:4px;">${trendIndicator}</div>` : ''}
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
    
    console.log('[Demographics] Initializing population simulation...');
    
    const data = calculateDemographics();
    
    console.log(`[Demographics] Base population: ${data.simulation.base.total.toLocaleString()}`);
    console.log(`[Demographics] Adjusted population: ${data.grandTotal.toLocaleString()}`);
    console.log(`[Demographics] Active plagues: ${data.simulation.plagues.filter(p => p.status !== 'Eradicated').length}`);
    
    renderTotalPopulation(data.grandTotal, data.simulation);
    renderVitalStatistics(data);
    renderCharts(data);
    renderSpeciesList(data);
    
    renderWorkforceData(data);
    
    setupTechSelector();
    renderTechAccessChart('aggregate');
}

document.addEventListener('DOMContentLoaded', init);
