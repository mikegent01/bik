import { PLAGUE_DATA } from './plagues-data.js';
import { calculateGlobalCycle } from './research-data.js';
import { WAHBOOK_POSTS } from './assembly-data.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from './calendar-data.js';

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

function calculatePlagueStatus(plague) {
    const currentSeason = getCurrentSeason();
    const globalCycle = calculateGlobalCycle(WAHBOOK_POSTS);
    
    // 1. Base Severity
    let severity = plague.base_severity;

    // 2. Seasonal Modifier
    const isSeason = plague.active_seasons.includes(currentSeason) || plague.active_seasons.includes("All");
    if (isSeason) {
        severity *= 1.5;
    } else {
        severity *= 0.5;
    }

    // 3. Cycle Modifier
    const cycleMod = plague.cycle_modifier[globalCycle.phase.id] || 1.0;
    severity *= cycleMod;

    // 4. Determine Status
    let status = "Dormant";
    if (severity > 70) status = "Outbreak";
    else if (severity > 40) status = "Rising";
    else if (severity > 20) status = "Contained";

    return { severity: Math.min(100, Math.round(severity)), status, cycleMod, isSeason };
}

function renderPlagues() {
    if (!container) return;
    
    let totalThreat = 0;
    const globalCycle = calculateGlobalCycle(WAHBOOK_POSTS);

    const cardsHTML = PLAGUE_DATA.map(plague => {
        const stats = calculatePlagueStatus(plague);
        totalThreat += stats.severity;
        
        const activeClass = stats.status === 'Outbreak' ? 'active-outbreak' : '';
        const statusClass = stats.status === 'Outbreak' ? 'status-active' : (stats.status === 'Dormant' ? 'status-dormant' : 'status-warning');

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
                    <span class="plague-status ${statusClass}">${stats.status.toUpperCase()}</span>
                </div>
                <div class="plague-details">
                    <p>${plague.description}</p>
                    <p><strong>Symptoms:</strong> ${plague.symptoms}</p>
                    <p><strong>Cure:</strong> ${plague.cure}</p>
                </div>
                <div class="plague-stats">
                    <div>
                        <span class="stat-label">Infection Rate</span>
                        <div class="stat-data">${stats.severity}%</div>
                    </div>
                    <div>
                        <span class="stat-label">Seasonal Factor</span>
                        <div class="stat-data" style="color:${stats.isSeason ? 'var(--negative-color)' : 'var(--positive-color)'}">${stats.isSeason ? 'Active' : 'Inactive'}</div>
                    </div>
                    <div style="grid-column: span 2;">
                        <span class="stat-label">Cycle Impact (${globalCycle.phase.name})</span>
                        <div class="stat-data">x${stats.cycleMod.toFixed(2)} Multiplier</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = cardsHTML;

    // Update Global Threat Meter
    const avgThreat = Math.round(totalThreat / PLAGUE_DATA.length);
    threatBar.style.width = `${avgThreat}%`;
    threatValue.textContent = `${avgThreat}% THREAT LEVEL`;
    cycleNote.textContent = `Global Cycle (${globalCycle.phase.name}) is ${globalCycle.phase.bias > 0 ? 'amplifying' : 'reducing'} biological threats.`;
}

function init() {
    renderPlagues();
}

init();