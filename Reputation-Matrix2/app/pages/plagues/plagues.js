// plagues.js - COMPLETE PRODUCTION VERSION

import { getPlagueData, PLAGUE_LIFECYCLE, SPECIES_TAGS, getKnownDiseases, getCurrentSeason } from '../../../data/support/plagues-data.js';
import { calculateGlobalCycle, getGlobalTechAverages, NATIONS, getAbsoluteDay } from '../../../data/support/research-data.js';
import { WAHBOOK_POSTS } from '../../../assembly-data.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from '../../../data/world/calendar.js';
import { MAP_DATA } from '../../../map-data.js';
import { SPECIES_DATA } from '../../../data/support/species-data.js';
import { calculateGlobalVitalStats } from '../../../data/support/vital-stats-data.js';

// ============================================================================
// DOM ELEMENTS
// ============================================================================
const container = document.getElementById('plagues-grid');
const threatBar = document.querySelector('.threat-bar');
const threatValue = document.querySelector('.threat-value');
const cycleNote = document.getElementById('cycle-impact-note');

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getCalendarDateFromAbsolute(absDay) {
    absDay = Math.floor(absDay);
    const startYear = 1035;
    const yearsPassed = Math.floor(absDay / 365);
    const year = startYear + yearsPassed;
    const remainingDays = absDay % 365;
    let monthIndex = 0;
    let day = 0;
    let dayCount = 0;
    
    const months = CALENDAR_DATA.months?.values || [];
    for (let i = 0; i < months.length; i++) {
        const daysInMonth = months[i].days || 30;
        if (dayCount + daysInMonth > remainingDays) {
            monthIndex = i;
            day = remainingDays - dayCount + 1;
            break;
        }
        dayCount += daysInMonth;
    }
    const monthName = months[monthIndex]?.abbreviation || "Unk";
    return `${monthName} ${day}, ${year}`;
}

function formatKnowledge(value, level, threshold) {
    if (typeof value === 'string') {
        if (level >= threshold) return value;
        return `<span class="obfuscated">Unknown</span>`;
    }
    if (level >= threshold) return value.toLocaleString();
    return `<span class="obfuscated">???</span>`;
}

function getLocationName(poiId) {
    if (!poiId) return "Unknown";
    for (const mapKey in MAP_DATA) {
        const map = MAP_DATA[mapKey];
        const poi = map.pointsOfInterest?.find(p => p.id === poiId);
        if (poi) return poi.name;
    }
    if (poiId.includes('_origin')) return "Patient Zero Site";
    return poiId.replace(/_/g, ' ').replace(/poi|plague/gi, '').trim() || "Unknown Origin";
}

function getSpeciesName(speciesKey) {
    return SPECIES_DATA?.[speciesKey]?.name || speciesKey.replace(/_/g, ' ');
}

function getSpeciesIcon(speciesKey) {
    return SPECIES_DATA?.[speciesKey]?.icon || '❓';
}

function getStatusClass(status) {
    const { STATUSES } = PLAGUE_LIFECYCLE;
    switch (status) {
        case STATUSES.PEAK_OUTBREAK: return 'status-active';
        case STATUSES.RISING: return 'status-warning';
        case STATUSES.DECLINING: return 'status-declining';
        case STATUSES.CONTAINED: return 'status-contained';
        case STATUSES.DORMANT: return 'status-dormant';
        case STATUSES.ERADICATED: return 'status-eradicated';
        case STATUSES.INCUBATING: return 'status-incubating';
        default: return 'status-warning';
    }
}

function calculateLifecyclePosition(plague) {
    const { INCUBATION_DAYS, GROWTH_DAYS, PEAK_DAYS, DECLINE_DAYS, STATUSES } = PLAGUE_LIFECYCLE;
    
    if (plague.status === STATUSES.ERADICATED || plague.status === STATUSES.DORMANT) {
        return 100;
    }
    
    const daysActive = plague.daysActive || 0;
    
    if (daysActive < INCUBATION_DAYS) {
        return (daysActive / INCUBATION_DAYS) * 15;
    } else if (daysActive < INCUBATION_DAYS + GROWTH_DAYS) {
        const progress = (daysActive - INCUBATION_DAYS) / GROWTH_DAYS;
        return 15 + (progress * 25);
    } else if (daysActive < INCUBATION_DAYS + GROWTH_DAYS + PEAK_DAYS) {
        const progress = (daysActive - INCUBATION_DAYS - GROWTH_DAYS) / PEAK_DAYS;
        return 40 + (progress * 15);
    } else if (daysActive < INCUBATION_DAYS + GROWTH_DAYS + PEAK_DAYS + DECLINE_DAYS) {
        const progress = (daysActive - INCUBATION_DAYS - GROWTH_DAYS - PEAK_DAYS) / DECLINE_DAYS;
        return 55 + (progress * 35);
    } else {
        return 95;
    }
}

// ============================================================================
// RENDER FUNCTIONS
// ============================================================================

function renderPlagues() {
    if (!container) {
        console.error('[Plagues] Container element not found');
        return;
    }
    
    try {
        const globalCycle = calculateGlobalCycle(WAHBOOK_POSTS);
        const techAverages = getGlobalTechAverages();
        const medicalTech = techAverages.MEDICAL || 1;
        const currentDay = getAbsoluteDay();
        const currentSeason = getCurrentSeason();
        
        const plagues = getPlagueData(globalCycle, medicalTech);
        
        if (!plagues || plagues.length === 0) {
            container.innerHTML = '<p class="no-plagues">No active pathogen threats detected.</p>';
            if (threatValue) threatValue.textContent = '0% BIO-THREAT LEVEL';
            if (threatBar) threatBar.style.width = '0%';
            return;
        }
        
        let vitalStats = { plagueDeaths: 0 };
        try {
            vitalStats = calculateGlobalVitalStats(0, globalCycle, plagues);
        } catch (e) {
            console.warn('[Plagues] Could not calculate vital stats:', e);
        }
        
        let totalActiveThreat = 0;
        const { STATUSES } = PLAGUE_LIFECYCLE;
        
        const activePlagues = plagues.filter(p => 
            p.status !== STATUSES.ERADICATED && 
            p.status !== STATUSES.DORMANT
        );
        
        const archivedPlagues = plagues.filter(p => 
            p.status === STATUSES.ERADICATED || 
            p.status === STATUSES.DORMANT
        );
        
        activePlagues.forEach(plague => {
            totalActiveThreat += ((plague.currentInfected || 0) / 10000);
        });
        
        const cardsHTML = activePlagues.map(plague => {
            const activeClass = (plague.status === STATUSES.PEAK_OUTBREAK || plague.status === STATUSES.RISING) 
                ? 'active-outbreak' : '';
            const statusClass = getStatusClass(plague.status);
            const locationName = getLocationName(plague.starting_location);

            const nationsHTML = (plague.affected_nations || []).map(nationKey => {
                const nationConfig = NATIONS[nationKey];
                const name = nationConfig ? nationConfig.name : nationKey;
                const icon = nationConfig ? nationConfig.icon : '🏳️';
                return `<span class="nation-tag" title="${name}">${icon} ${name}</span>`;
            }).join('');

            const speciesHTML = (plague.affected_species || []).slice(0, 6).map(speciesKey => {
                const name = getSpeciesName(speciesKey);
                const icon = getSpeciesIcon(speciesKey);
                const tags = SPECIES_TAGS?.[speciesKey] || ['organic'];
                const tagClass = tags.includes('digital') ? 'digital' : 
                               tags.includes('undead') ? 'undead' : 
                               tags.includes('magical') ? 'magical' : 'organic';
                return `<span class="species-tag ${tagClass}" title="${name}">${icon}</span>`;
            }).join('');
            
            const moreSpecies = (plague.affected_species?.length || 0) > 6 
                ? `<span class="species-tag more">+${plague.affected_species.length - 6}</span>` 
                : '';

            let estateHTML = '';
            if (plague.estate_impact && Object.keys(plague.estate_impact).length > 0) {
                const estateEntries = Object.entries(plague.estate_impact)
                    .filter(([_, pct]) => pct > 0)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 3);
                
                if (estateEntries.length > 0) {
                    estateHTML = estateEntries.map(([estate, pct]) => {
                        const estateName = estate.charAt(0).toUpperCase() + estate.slice(1);
                        return `<div class="estate-bar">
                            <span class="estate-label">${estateName}</span>
                            <div class="estate-bar-container">
                                <div class="estate-bar-fill" style="width: ${pct}%"></div>
                            </div>
                            <span class="estate-pct">${pct}%</span>
                        </div>`;
                    }).join('');
                }
            }

            const lethalityColor = (plague.lethality_class || '').match(/high|extreme|severe/i) ? 'negative' : 'neutral';
            const mutationStyle = `width:${plague.mutation_risk || 0}%; background-color: ${(plague.mutation_risk || 0) > 50 ? 'var(--negative-color)' : 'var(--neutral-color)'}`;
            
            const dailyCureRate = (plague.base_cure_rate || 0.3) + (medicalTech * 0.1);
            const daysToComplete = plague.cure_progress < 100 
                ? Math.ceil((100 - plague.cure_progress) / dailyCureRate) 
                : 0;
            const projectedCureDate = getCalendarDateFromAbsolute(currentDay + daysToComplete);
            
            const daysActiveDisplay = plague.daysActive > 0 
                ? `Day ${plague.daysActive} of outbreak` 
                : 'Incubating';

            const isSeasonActive = plague.isSeasonActive ?? plague.active_seasons?.includes(currentSeason);
            const seasonBadge = isSeasonActive
                ? `<span class="season-badge active" title="Active in ${currentSeason}">🌡️ Active</span>`
                : `<span class="season-badge dormant" title="Less virulent outside preferred seasons">❄️ Off-Season</span>`;

            const canonicalBadge = plague.canonical 
                ? `<span class="canonical-badge" title="Well-documented historical disease">📚 Documented</span>` 
                : '';

            const mutationBadge = plague.is_mutation
                ? `<span class="mutation-badge" title="Novel pathogen mutation">🧬 Mutation</span>`
                : '';
            
            return `
                <div class="plague-card ${activeClass} ${plague.status === STATUSES.ERADICATED ? 'eradicated' : ''}">
                    <div class="plague-header">
                        <div style="display:flex; align-items:center;">
                            <span class="plague-icon">${plague.icon || '🦠'}</span>
                            <div>
                                <h4 class="plague-name">${plague.name}</h4>
                                <span class="plague-region">${plague.region}</span>
                            </div>
                        </div>
                        <div class="plague-status-container">
                            <span class="plague-status ${statusClass}">${(plague.status || 'UNKNOWN').toUpperCase()}</span>
                            <span class="plague-days">${daysActiveDisplay}</span>
                            <div class="plague-badges">
                                ${seasonBadge}
                                ${canonicalBadge}
                                ${mutationBadge}
                            </div>
                        </div>
                    </div>
                    
                    <div class="plague-systems-grid">
                        <div class="system-item">
                            <span class="system-label">Lethality</span>
                            <span class="system-value ${lethalityColor}">${plague.lethality_class || 'Unknown'}</span>
                        </div>
                        <div class="system-item">
                            <span class="system-label">Vector</span>
                            <span class="system-value">${plague.transmission_vector || 'Unknown'}</span>
                        </div>
                        <div class="system-item">
                            <span class="system-label">Containment</span>
                            <span class="system-value">${plague.containment_status || 'Unknown'}</span>
                        </div>
                    </div>

                    <div class="plague-metrics">
                        <div class="metric-row">
                            <span class="metric-label">Active Cases</span>
                            <span class="metric-value negative">${formatKnowledge(plague.currentInfected || 0, plague.knowledge_level || 0, 30)}</span>
                        </div>
                        <div class="metric-row">
                            <span class="metric-label">Daily Deaths</span>
                            <span class="metric-value negative">-${formatKnowledge(plague.projectedDecline || 0, plague.knowledge_level || 0, 60)}</span>
                        </div>
                        <div class="metric-row">
                            <span class="metric-label">Intel Level</span>
                            <span class="metric-value neutral">${Math.round(plague.knowledge_level || 0)}%</span>
                        </div>
                    </div>

                    <div class="lifecycle-section">
                        <div class="bar-label-group">
                            <span>Outbreak Lifecycle</span>
                            <span>${Math.round((plague.phase || 0) * 100)}%</span>
                        </div>
                        <div class="lifecycle-bar-container">
                            <div class="lifecycle-phase incubation" style="width: 15%;" title="Incubation"></div>
                            <div class="lifecycle-phase growth" style="width: 25%;" title="Growth"></div>
                            <div class="lifecycle-phase peak" style="width: 15%;" title="Peak"></div>
                            <div class="lifecycle-phase decline" style="width: 35%;" title="Decline"></div>
                            <div class="lifecycle-phase contained" style="width: 10%;" title="Contained"></div>
                            <div class="lifecycle-marker" style="left: ${calculateLifecyclePosition(plague)}%;"></div>
                        </div>
                        <div class="lifecycle-labels">
                            <span>Incubation</span>
                            <span>Growth</span>
                            <span>Peak</span>
                            <span>Decline</span>
                            <span>End</span>
                        </div>
                    </div>

                    <div class="mutation-risk-container" title="Risk of pathogen evolution">
                        <div class="bar-label-group">
                            <span>Mutation Risk</span>
                            <span>${plague.mutation_risk || 0}%</span>
                        </div>
                        <div class="progress-bar-container">
                            <div class="progress-fill" style="${mutationStyle}"></div>
                        </div>
                    </div>

                    <div class="progress-section">
                        <div class="bar-label-group">
                            <span>Cure Progress</span>
                            <span>${Math.round(plague.cure_progress || 0)}% ${(plague.cure_progress || 0) < 100 ? `(Est: ${projectedCureDate})` : '✓ Complete'}</span>
                        </div>
                        <div class="progress-bar-container">
                            <div class="progress-fill cure" style="width: ${plague.cure_progress || 0}%"></div>
                        </div>
                        <div class="tech-boost-note">
                            ✚ Medical Tech (Tier ${Math.round(medicalTech)}) +${(medicalTech * 0.1).toFixed(1)}%/day
                        </div>
                    </div>

                    <div class="plague-details">
                        <p><strong>Origin:</strong> ${locationName}</p>
                        <p>${plague.description || 'No description available.'}</p>
                        
                        <div class="details-grid">
                            <div class="detail-box">
                                <strong>Symptoms</strong>
                                <p>${formatKnowledge(plague.symptoms || 'Unknown', plague.knowledge_level || 0, 20)}</p>
                            </div>
                            <div class="detail-box">
                                <strong>Prognosis</strong>
                                <p>${plague.lethality_desc || 'Unknown prognosis.'}</p>
                            </div>
                        </div>

                        <div class="affected-section">
                            <strong>🦠 Susceptible Species (${plague.affected_species?.length || 0}):</strong>
                            <div class="species-list">${speciesHTML}${moreSpecies}</div>
                        </div>

                        ${estateHTML ? `
                        <div class="estate-impact-section">
                            <strong>📊 Estate Vulnerability:</strong>
                            <div class="estate-bars">${estateHTML}</div>
                        </div>
                        ` : ''}

                        <div class="impact-box">
                            <strong>Economic Strain:</strong> <span class="negative">${plague.economic_strain || 'Unknown'}</span>
                        </div>
                        
                        <div class="affected-section">
                            <strong>🌍 Affected Nations (${plague.affected_nations?.length || 0}):</strong>
                            <div class="nations-list">${nationsHTML}</div>
                        </div>
                        
                        <div class="plague-footer">
                            <span><strong>Cycle Effect (${globalCycle?.phase?.name || 'Unknown'}):</strong> ×${(plague.cycleMod || 1).toFixed(2)}</span>
                            <span class="plague-seed">🎲 ${plague._seed || plague.id}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        const archiveHTML = archivedPlagues.length > 0 ? `
            <div class="archived-plagues-section">
                <h3 class="archive-header">📁 Recently Resolved Outbreaks</h3>
                <div class="archived-plagues-grid">
                    ${archivedPlagues.map(plague => `
                        <div class="archived-plague-card">
                            <span class="archived-icon">${plague.icon}</span>
                            <div class="archived-info">
                                <strong>${plague.name}</strong>
                                <span>${plague.region} • ${plague.status}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '';
        
        const knownDiseases = getKnownDiseases();
        const knownDiseasesHTML = knownDiseases.length > 0 ? `
            <div class="known-diseases-section">
                <h3>📚 Known Diseases Archive</h3>
                <p class="archive-desc">Pathogens that have been successfully eradicated and documented.</p>
                <div class="known-diseases-grid">
                    ${knownDiseases.map(disease => `
                        <div class="known-disease-item">
                            <span class="disease-icon">${disease.icon}</span>
                            <div class="disease-info">
                                <strong>${disease.name}</strong>
                                <span class="disease-region">${disease.region}</span>
                            </div>
                            <span class="disease-status">Eradicated</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '';
        
        container.innerHTML = cardsHTML + archiveHTML + knownDiseasesHTML;

        const threatPercent = Math.min(100, Math.round(totalActiveThreat));
        
        if (threatBar) {
            threatBar.style.width = `${threatPercent}%`;
            
            if (threatPercent > 70) {
                threatBar.style.background = 'linear-gradient(90deg, #f44336, #ff1744)';
            } else if (threatPercent > 40) {
                threatBar.style.background = 'linear-gradient(90deg, #ff9800, #f44336)';
            } else {
                threatBar.style.background = 'linear-gradient(90deg, #4caf50, #ff9800)';
            }
        }
        
        if (threatValue) {
            threatValue.textContent = `${threatPercent}% BIO-THREAT LEVEL`;
        }
        
        if (cycleNote) {
            const cycleEffect = globalCycle?.phase?.bias > 0 ? 'amplifying' : 'reducing';
            cycleNote.innerHTML = `
                <div class="cycle-info">
                    <span style="color: ${globalCycle?.phase?.color || '#fff'}">● ${globalCycle?.phase?.name || 'Unknown'}</span> 
                    is ${cycleEffect} contagion vectors. 
                    Current Season: <strong>${currentSeason}</strong>
                </div>
                <div class="plague-summary">
                    Active Outbreaks: <strong>${activePlagues.length}</strong> | 
                    Resolved: <strong>${archivedPlagues.length}</strong> | 
                    Est. Daily Deaths: <strong class="negative">${vitalStats.plagueDeaths.toLocaleString()}</strong>
                </div>
                <div class="date-info">
                    Current Date: <strong>${getCalendarDateFromAbsolute(currentDay)}</strong> (Day ${currentDay})
                </div>
            `;
        }
        
        console.log(`[Plagues] Rendered ${activePlagues.length} active, ${archivedPlagues.length} archived plagues for day ${currentDay}`);
        
    } catch (error) {
        console.error('[Plagues] Error rendering plagues:', error);
        container.innerHTML = `<p class="error-message">Error loading pathogen data: ${error.message}</p>`;
        
        if (threatValue) threatValue.textContent = 'ERROR';
    }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

function init() {
    console.log('[Plagues] Initializing...');
    console.log(`[Plagues] Game Date: Year ${CURRENT_GAME_DATE.year}, Month ${CURRENT_GAME_DATE.monthIndex}, Day ${CURRENT_GAME_DATE.day}`);
    console.log(`[Plagues] Absolute Day: ${getAbsoluteDay()}`);
    
    renderPlagues();
    
    setInterval(renderPlagues, 60000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}