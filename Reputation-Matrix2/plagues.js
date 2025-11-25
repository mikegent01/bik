
import { PLAGUE_DATA } from './plagues-data.js';
import { calculateGlobalCycle, getGlobalTechAverages, NATIONS, getAbsoluteDay } from './research-data.js';
import { WAHBOOK_POSTS } from './assembly-data.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from './calendar-data.js';
import { MAP_DATA } from './map-data.js';

const container = document.getElementById('plagues-grid');
const threatBar = document.querySelector('.threat-bar');
const threatValue = document.querySelector('.threat-value');
const cycleNote = document.getElementById('cycle-impact-note');

function getCurrentSeason() {
    const monthIndex = CURRENT_GAME_DATE.monthIndex;
    return CALENDAR_DATA.seasons.values.find(s => {
        const start = s.monthStart - 1;
        const end = s.monthEnd - 1;
        if (start <= end) return monthIndex >= start && monthIndex <= end;
        return monthIndex >= start || monthIndex <= end;
    })?.name || "Unknown";
}

function getCalendarDateFromAbsolute(absDay) {
    absDay = Math.floor(absDay);
    const startYear = 1035;
    const yearsPassed = Math.floor(absDay / 365);
    const year = startYear + yearsPassed;
    const remainingDays = absDay % 365;
    let monthIndex = 0;
    let day = 0;
    let dayCount = 0;
    
    for (let i = 0; i < CALENDAR_DATA.months.values.length; i++) {
        const daysInMonth = CALENDAR_DATA.months.values[i].days;
        if (dayCount + daysInMonth > remainingDays) {
            monthIndex = i;
            day = remainingDays - dayCount + 1;
            break;
        }
        dayCount += daysInMonth;
    }
    const monthName = CALENDAR_DATA.months.values[monthIndex]?.abbreviation || "Unk";
    return `${monthName} ${day}, ${year}`;
}

function calculateSimulation(plague) {
    const currentDay = getAbsoluteDay();
    const daysActive = currentDay - plague.start_day;
    const globalCycle = calculateGlobalCycle(WAHBOOK_POSTS);
    const currentSeason = getCurrentSeason();
    const techAverages = getGlobalTechAverages();
    
    // 1. Infection Curve (Sine Wave)
    const period = 100; 
    const phase = (daysActive % period) / period; 
    
    // Season Multiplier
    const isSeason = plague.active_seasons.includes(currentSeason) || plague.active_seasons.includes("All");
    const seasonMod = isSeason ? 1.5 : 0.6;

    // Cycle Multiplier
    const cycleMod = plague.cycle_modifier[globalCycle.phase.id] || 1.0;

    let infectionFactor = Math.sin((daysActive / period) * Math.PI);
    if (infectionFactor < 0) infectionFactor = 0; 

    let currentInfected = Math.floor(plague.peak_population * infectionFactor * seasonMod * cycleMod);
    
    // 2. Cure Progress & Tech
    const medicalTech = techAverages.MEDICAL || 1;
    // Higher tech = faster cure
    const dailyCureRate = 0.5 + (medicalTech * 0.25); 
    
    // Projected Cure Date
    // Use Math.floor to ensure integer days
    let projectedDaysToCure = 0;
    if (plague.cure_progress < 100) {
        projectedDaysToCure = Math.floor((100 - plague.cure_progress) / dailyCureRate);
    }
    const projectedCureDate = getCalendarDateFromAbsolute(currentDay + projectedDaysToCure);

    // 3. Population Impact
    // Dampen impact with high medical tech
    const techDampener = Math.max(0.1, 1.0 - (medicalTech * 0.08)); 
    const projectedDecline = Math.floor(currentInfected * plague.mortality_rate * techDampener);
    
    let status = "Dormant";
    if (plague.cure_progress >= 100) status = "Eradicated";
    else if (infectionFactor > 0.8) status = "Peak Outbreak";
    else if (infectionFactor > 0.2 && phase < 0.5) status = "Rising";
    else if (infectionFactor > 0.2 && phase >= 0.5) status = "Declining";
    else status = "Contained";

    return {
        currentInfected,
        projectedDecline,
        dailyCureRate,
        projectedCureDate,
        status,
        cycleMod,
        isSeason,
        medicalTech
    };
}

function formatKnowledge(value, level, threshold) {
    if (level >= threshold) return value.toLocaleString();
    return `<span class="obfuscated">Unknown</span>`;
}

function getLocationName(poiId) {
    if (!poiId) return "Unknown";
    // Search all maps for the POI
    for (const mapKey in MAP_DATA) {
        const map = MAP_DATA[mapKey];
        const poi = map.pointsOfInterest?.find(p => p.id === poiId);
        if (poi) return poi.name;
    }
    return poiId; // Fallback to ID if name not found
}

function renderPlagues() {
    if (!container) return;
    
    let totalActiveThreat = 0;
    const globalCycle = calculateGlobalCycle(WAHBOOK_POSTS);

    const cardsHTML = PLAGUE_DATA.map(plague => {
        const sim = calculateSimulation(plague);
        
        if (sim.status !== 'Eradicated' && sim.status !== 'Dormant') {
            totalActiveThreat += (sim.currentInfected / 1000); 
        }
        
        const activeClass = (sim.status === 'Peak Outbreak' || sim.status === 'Rising') ? 'active-outbreak' : '';
        const statusClass = sim.status === 'Peak Outbreak' ? 'status-active' : (sim.status === 'Dormant' ? 'status-dormant' : 'status-warning');
        
        const locationName = getLocationName(plague.starting_location);

        const nationsHTML = plague.affected_nations.map(nationKey => {
            const nationConfig = NATIONS[nationKey];
            const name = nationConfig ? nationConfig.name : nationKey;
            return `<span class="nation-tag">${name}</span>`;
        }).join('');

        // New Systems Render Logic
        const lethalityColor = plague.lethality_class.includes('High') || plague.lethality_class.includes('Extreme') ? 'negative' : 'neutral';
        const mutationStyle = `width:${plague.mutation_risk}%; background-color: ${plague.mutation_risk > 50 ? 'var(--negative-color)' : 'var(--neutral-color)'}`;
        
        return `
            <div class="plague-card ${activeClass}">
                <div class="plague-header">
                    <div style="display:flex; align-items:center;">
                        <span class="plague-icon">${plague.icon}</span>
                        <div>
                            <h4 class="plague-name">${plague.name}</h4>
                            <span class="plague-region">${plague.region}</span>
                        </div>
                    </div>
                    <span class="plague-status ${statusClass}">${sim.status.toUpperCase()}</span>
                </div>
                
                <div class="plague-systems-grid">
                    <div class="system-item">
                        <span class="system-label">Lethality</span>
                        <span class="system-value ${lethalityColor}">${plague.lethality_class}</span>
                    </div>
                    <div class="system-item">
                        <span class="system-label">Vector</span>
                        <span class="system-value">${plague.transmission_vector}</span>
                    </div>
                     <div class="system-item">
                        <span class="system-label">Containment</span>
                        <span class="system-value">${plague.containment_status}</span>
                    </div>
                </div>

                <div class="plague-metrics">
                    <div class="metric-row">
                        <span class="metric-label">Active Cases</span>
                        <span class="metric-value negative">${formatKnowledge(sim.currentInfected, plague.knowledge_level, 30)}</span>
                    </div>
                     <div class="metric-row">
                        <span class="metric-label">Proj. Deaths</span>
                        <span class="metric-value negative">-${formatKnowledge(sim.projectedDecline, plague.knowledge_level, 60)}</span>
                    </div>
                     <div class="metric-row">
                        <span class="metric-label">Intel Level</span>
                        <span class="metric-value neutral">${plague.knowledge_level}%</span>
                    </div>
                </div>

                <div class="mutation-risk-container" title="Risk of pathogen evolution">
                     <div class="bar-label-group">
                        <span>Mutation Risk</span>
                        <span>${plague.mutation_risk}%</span>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-fill" style="${mutationStyle}"></div>
                    </div>
                </div>

                <div class="progress-section">
                    <div class="bar-label-group">
                        <span>Cure Progress</span>
                        <span>${Math.round(plague.cure_progress)}% (Est. Completion: ${sim.projectedCureDate})</span>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-fill cure" style="width: ${plague.cure_progress}%"></div>
                    </div>
                     <div class="tech-boost-note">
                        <span class="boost-icon">✚</span> Medical Tech Boost (Tier ${Math.round(sim.medicalTech)})
                    </div>
                </div>

                <div class="plague-details">
                    <p><strong>Origin:</strong> ${locationName}</p>
                    <p>${plague.description}</p>
                    
                    <div class="details-grid">
                        <div class="detail-box">
                            <strong>Symptoms</strong>
                            <p>${formatKnowledge(plague.symptoms, plague.knowledge_level, 20)}</p>
                        </div>
                         <div class="detail-box">
                            <strong>Impact Assessment</strong>
                            <p>${plague.lethality_desc}</p>
                        </div>
                    </div>

                    <div class="impact-box">
                        <strong>Economic Strain:</strong> <span class="negative">${plague.economic_strain}</span>
                    </div>
                    
                    <div class="affected-section">
                        <strong>Affected Nations:</strong>
                        <div class="nations-list">${nationsHTML}</div>
                    </div>
                    
                    <p style="margin-top:10px; font-size:0.8em; color:var(--text-secondary);"><strong>Cycle Impact (${globalCycle.phase.name}):</strong> Infection x${sim.cycleMod.toFixed(2)}</p>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = cardsHTML;

    const threatPercent = Math.min(100, Math.round(totalActiveThreat));
    threatBar.style.width = `${threatPercent}%`;
    threatValue.textContent = `${threatPercent}% BIO-THREAT LEVEL`;
    cycleNote.textContent = `Global Cycle (${globalCycle.phase.name}) is ${globalCycle.phase.bias > 0 ? 'amplifying' : 'reducing'} contagion vectors.`;
}

function init() {
    renderPlagues();
}

init();
