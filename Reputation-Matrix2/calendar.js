
import { CALENDAR_DATA, MAGICAL_WEATHER_EVENTS, CURRENT_GAME_DATE, MOON_PHASES } from './Reputation-Matrix2/calendar-data.js';
import { playSound } from './common.js';
import { RELIGION_DATA } from './religion-data.js';
import { state } from './Reputation-Matrix2/state.js'; // Needed to check research state
import { getTechTree, NATIONS, getAbsoluteDay, calculateGlobalCycle, getGlobalTechAverages } from './Reputation-Matrix2/research-data.js';
import { HISTORICAL_TIMELINE } from './timeline-data.js';
import { MAJOR_BATTLES } from './battlefield.js';
import { LORE_DATA } from './lore.js';
import { WAHBOOK_POSTS } from './Reputation-Matrix2/assembly-data.js';
import { PLAGUE_DATA } from './plagues-data.js';

// --- State ---
let viewDate = {
    year: CURRENT_GAME_DATE.year,
    monthIndex: CURRENT_GAME_DATE.monthIndex
};

let selectedDate = { ...CURRENT_GAME_DATE };
let currentView = 'monthly'; // 'monthly', 'weekly', 'yearly'

// --- Elements ---
const gridElement = document.getElementById('calendar-grid');
const dateDisplay = document.getElementById('current-date-display');
const dayDetailContent = document.getElementById('selected-day-content');
const selectedDateHeader = document.getElementById('selected-date-header');
const selectedDateWeather = document.getElementById('selected-date-weather');
const upcomingList = document.getElementById('upcoming-events-list');
const searchInput = document.getElementById('calendar-search-input');
const searchResults = document.getElementById('calendar-search-results');

// --- Optimization: Pre-calculate Research Completion Dates ---
let researchCompletionCache = new Map();

function calculateAllResearchCompletionDates() {
    researchCompletionCache.clear();
    if (!state || !state.researchState) return;

    const currentDay = getAbsoluteDay();
    const startYear = 1035;
    const daysPerYear = 365; 

    // Calculate the current global cycle to ensure research speeds match the UI
    const globalCycle = calculateGlobalCycle(WAHBOOK_POSTS);

    for (const nationKey in NATIONS) {
        const categories = ['WEAPONS', 'MAGIC', 'TECH', 'MEDICAL', 'ECONOMIC', 'POLITICAL'];
        
        categories.forEach(cat => {
            // Pass the globalCycle to getTechTree so modifiers are applied
            const tree = getTechTree(nationKey, cat, state.researchState, globalCycle);
            
            Object.values(tree).forEach(node => {
                if (node.status === 'researching') {
                    const progressRemaining = 100 - node.progress;
                    const daysLeft = Math.ceil((node.cost * progressRemaining) / 100);
                    
                    const completionAbsoluteDay = currentDay + daysLeft;
                    const yearsPassed = Math.floor(completionAbsoluteDay / daysPerYear);
                    const year = startYear + yearsPassed;
                    
                    let remainingDays = completionAbsoluteDay % daysPerYear;
                    let monthIndex = 0;
                    let day = 0;
                    
                    const months = CALENDAR_DATA.months.values;
                    for (let i = 0; i < months.length; i++) {
                        if (remainingDays < months[i].days) {
                            monthIndex = i;
                            day = remainingDays + 1;
                            break;
                        }
                        remainingDays -= months[i].days;
                    }

                    const dateKey = `${year}-${monthIndex}-${day}`;
                    
                    if (!researchCompletionCache.has(dateKey)) {
                        researchCompletionCache.set(dateKey, []);
                    }
                    
                    researchCompletionCache.get(dateKey).push({
                        type: 'tech',
                        name: `Research Complete: ${node.name}`,
                        description: `${NATIONS[nationKey].name} finishes ${cat} project.`,
                        icon: '🧪'
                    });
                }
            });
        });
    }
}

// --- Helpers ---
function getSeededRandom(seed) {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function getSeason(monthIndex) {
    return CALENDAR_DATA.seasons.values.find(s => {
        const startMonth = s.monthStart - 1;
        const endMonth = s.monthEnd - 1;
        if (startMonth <= endMonth) {
            return monthIndex >= startMonth && monthIndex <= endMonth;
        } else {
            return monthIndex >= startMonth || monthIndex <= endMonth;
        }
    });
}

function generateWeatherForDay(year, monthIndex, day) {
    const season = getSeason(monthIndex);

    const seed = year * 10000 + (monthIndex + 1) * 100 + day;
    const rand = getSeededRandom(seed);
    const tempRand = getSeededRandom(seed + 1);
    
    if (getSeededRandom(seed + 2) < 0.08 && MAGICAL_WEATHER_EVENTS.length > 0) {
        const magicalIndex = Math.floor(getSeededRandom(seed + 3) * MAGICAL_WEATHER_EVENTS.length);
        const magicalEvent = MAGICAL_WEATHER_EVENTS[magicalIndex];
        return {
            temp: `??°C`,
            icon: magicalEvent.icon,
            desc: magicalEvent.name,
            isMagical: true
        };
    }

    let baseTemp, tempVariation, weatherOptions;

    switch (season.name) {
        case 'Golden Summer':
            baseTemp = 24; tempVariation = 10;
            weatherOptions = [
                { icon: '☀️', desc: 'Clear and Sunny', chance: 0.6 },
                { icon: '🌤️', desc: 'Partly Cloudy', chance: 0.2 },
                { icon: '☁️', desc: 'Overcast', chance: 0.1 },
                { icon: '🌦️', desc: 'Scattered Showers', chance: 0.07 },
                { icon: '⛈️', desc: 'Afternoon Thunderstorm', chance: 0.03 }
            ];
            break;
        case 'Hoarfrost Winter':
            baseTemp = -5; tempVariation = 8;
             weatherOptions = [
                { icon: '❄️', desc: 'Light Snowfall', chance: 0.4 },
                { icon: '🥶', desc: 'Bitterly Cold', chance: 0.3 },
                { icon: '☁️', desc: 'Grey and Overcast', chance: 0.2 },
                { icon: '☀️', desc: 'Crisp and Clear', chance: 0.1 }
            ];
            break;
        default:
            baseTemp = 12; tempVariation = 12;
             weatherOptions = [
                { icon: '🌤️', desc: 'Mild and Pleasant', chance: 0.4 },
                { icon: '☁️', desc: 'Cloudy Skies', chance: 0.25 },
                { icon: '🌦️', desc: 'Light Showers', chance: 0.2 },
                { icon: '💨', desc: 'Windy', chance: 0.15 }
            ];
            break;
    }

    const temperature = Math.floor(baseTemp + (tempRand * tempVariation) - (tempVariation / 2));
    let cumulativeChance = 0;
    const chosenWeather = weatherOptions.find(w => {
        cumulativeChance += w.chance;
        return rand <= cumulativeChance;
    }) || weatherOptions[0];

    return { temp: `${temperature}°C`, ...chosenWeather };
}
function getPlagueEventsForDay(year, monthIndex, day) {
    const events = [];
    const season = getSeason(monthIndex);
    const techAverages = getGlobalTechAverages();
    
    PLAGUE_DATA.forEach(plague => {
        // Random Outbreak Logic
        if (plague.active_seasons.includes(season.name) || plague.active_seasons.includes("All")) {
            const seed = year * 10000 + (monthIndex + 1) * 100 + day + plague.name.length;
            if (getSeededRandom(seed) < 0.05) { // 5% chance
                 events.push({
                    type: 'plague_outbreak',
                    name: `Outbreak: ${plague.name}`,
                    description: `Reports of ${plague.name} clusters in ${plague.region}.`,
                    icon: plague.icon
                });
            }
        }

        // Projected Cure Date Logic
        if (plague.cure_progress < 100) {
             const medicalTech = techAverages.MEDICAL || 1;
             const dailyCureRate = 0.5 + (medicalTech * 0.25);
             const currentDay = getAbsoluteDay();
             const projectedDaysToCure = Math.floor((100 - plague.cure_progress) / dailyCureRate);
             
             const cureAbsDay = currentDay + projectedDaysToCure;
             const startYear = 1035;
             const yearsPassed = Math.floor(cureAbsDay / 365);
             const targetYear = startYear + yearsPassed;
             const remainingDays = cureAbsDay % 365;
             let dayCount = 0;
             let targetMonthIndex = 0;
             let targetDay = 0;
             
             for (let i = 0; i < CALENDAR_DATA.months.values.length; i++) {
                const daysInMonth = CALENDAR_DATA.months.values[i].days;
                if (dayCount + daysInMonth > remainingDays) {
                    targetMonthIndex = i;
                    targetDay = remainingDays - dayCount + 1;
                    break;
                }
                dayCount += daysInMonth;
            }

            if (year === targetYear && monthIndex === targetMonthIndex && day === targetDay) {
                 events.push({
                    type: 'tech', 
                    name: `Est. Cure: ${plague.name}`,
                    description: `Projected eradication of ${plague.name} based on current medical progress.`,
                    icon: '💊'
                });
            }
        }
    });
    return events;
}

function getTimelineEventsForDay(year, monthIndex, day) {
    const events = [];
    HISTORICAL_TIMELINE.forEach(entry => {
        if (entry.type === 'era_header') return;

        let isMatch = false;

        // Check if date is object
        if (typeof entry.date === 'object') {
             if (entry.date.year === year && entry.date.monthIndex === monthIndex && entry.date.day === day) {
                 isMatch = true;
             }
        } else if (typeof entry.date === 'string') {
            // Check if date is string
            const match = entry.date.match(/Day\s+(\d+)/);
            if (match) {
                const eventDay = parseInt(match[1], 10);
                if (year === CURRENT_GAME_DATE.year && monthIndex === CURRENT_GAME_DATE.monthIndex && day === eventDay) {
                    isMatch = true;
                }
            }
        }

        if (isMatch) {
             events.push({
                type: 'history',
                name: entry.title,
                description: entry.description,
                icon: '📜'
            });
        }
    });
    return events;
}

function getBattleEventsForDay(year, monthIndex, day) {
    const events = [];
    MAJOR_BATTLES.forEach(battle => {
        let isBattleDay = false;

        // Handle Object Date (New Standard)
        if (typeof battle.date === 'object') {
            if (battle.date.year === year && battle.date.monthIndex === monthIndex && battle.date.day === day) {
                isBattleDay = true;
            }
        } 
        // Handle String Date (Legacy / "Day X" format)
        else if (typeof battle.date === 'string') {
            const match = battle.date.match(/Day\s+(\d+)/);
            if (match) {
                const battleDay = parseInt(match[1], 10);
                if (year === CURRENT_GAME_DATE.year && monthIndex === CURRENT_GAME_DATE.monthIndex && day === battleDay) {
                   isBattleDay = true;
                }
            }
        }

        if (isBattleDay) {
            events.push({
                type: 'battle',
                name: `Battle: ${battle.name}`,
                description: `${battle.outcome} - ${battle.conflict}`,
                icon: '⚔️'
            });
        }

        // Handle Ongoing Battles (Display on Current Day)
        // Check outcome string for "Ongoing" flag or legacy string
        const isOngoing = battle.outcome.includes('Ongoing') || (typeof battle.date === 'string' && battle.date === 'Ongoing');
        
        if (isOngoing) {
            // Show ongoing battles on the *current* day of the simulation
            if (year === CURRENT_GAME_DATE.year && monthIndex === CURRENT_GAME_DATE.monthIndex && day === CURRENT_GAME_DATE.day) {
                 events.push({
                    type: 'battle_ongoing',
                    name: `Ongoing Conflict: ${battle.name}`,
                    description: "Active combat operations reported.",
                    icon: '🛡️'
                });
            }
        }
    });
    return events;
}

function getRumorEventsForDay(year, monthIndex, day) {
    const events = [];
    LORE_DATA.rumors.forEach(rumor => {
        if (!rumor.date) return;
        if (year === rumor.date.year && monthIndex === rumor.date.monthIndex && day === rumor.date.day) {
            events.push({
                type: 'rumor_start',
                name: `Rumor: ${rumor.title}`,
                description: "New intel circulating on the network.",
                icon: '📣'
            });
        }
        
        // Calculate Expiration Date (Start Date + 14 Days)
        // We need to handle month rollover.
        // Converting to absolute days for calculation.
        const startAbsolute = (rumor.date.year * 365) + (rumor.date.monthIndex * 30) + rumor.date.day;
        const currentCheckAbsolute = (year * 365) + (monthIndex * 30) + day;
        
        if (currentCheckAbsolute === startAbsolute + 14) {
             events.push({
                type: 'rumor_end',
                name: `Trend Expiry: ${rumor.title}`,
                description: "Public interest in this rumor has faded. Impact on intel is diminished.",
                icon: '📉'
            });
        }
    });
    return events;
}

function getPlagueEventsForDay(year, monthIndex, day) {
    const events = [];
    const season = getSeason(monthIndex);
    
    // 1. Random Outbreaks
    PLAGUE_DATA.forEach(plague => {
        if (plague.active_seasons.includes(season.name) || plague.active_seasons.includes("All")) {
            const seed = year * 10000 + (monthIndex + 1) * 100 + day + plague.name.length;
            if (getSeededRandom(seed) < 0.05) { // 5% chance per day in season
                 events.push({
                    type: 'plague_outbreak',
                    name: `Outbreak: ${plague.name}`,
                    description: `Reports of ${plague.name} in ${plague.region}.`,
                    icon: plague.icon
                });
            }
        }
        
        // 2. Projected Cure Dates
        if (plague.cure_progress < 100) {
             const techAverages = getGlobalTechAverages();
             const medicalTech = techAverages.MEDICAL || 1;
             const dailyCureRate = 0.5 + (medicalTech * 0.2);
             const currentDay = getAbsoluteDay();
             // Use Math.floor here to get a whole integer for days remaining
             const projectedDaysToCure = Math.floor((100 - plague.cure_progress) / dailyCureRate);
             
             // Calculate absolute day of cure
             const cureAbsDay = currentDay + projectedDaysToCure;
             
             // Convert target day back to calendar components for comparison
             const startYear = 1035;
             const yearsPassed = Math.floor(cureAbsDay / 365);
             const targetYear = startYear + yearsPassed;
             const remainingDays = cureAbsDay % 365;
             
             let dayCount = 0;
             let targetMonthIndex = 0;
             let targetDay = 0;
             
             for (let i = 0; i < CALENDAR_DATA.months.values.length; i++) {
                const daysInMonth = CALENDAR_DATA.months.values[i].days;
                if (dayCount + daysInMonth > remainingDays) {
                    targetMonthIndex = i;
                    targetDay = remainingDays - dayCount + 1;
                    break;
                }
                dayCount += daysInMonth;
            }

            if (year === targetYear && monthIndex === targetMonthIndex && day === targetDay) {
                 events.push({
                    type: 'tech', // Reusing tech style for positive outcome
                    name: `Proj. Cure: ${plague.name}`,
                    description: `Estimated eradication of ${plague.name} based on current medical tech.`,
                    icon: '💊'
                });
            }
        }
    });
    return events;
}

function getEventsForDay(year, monthIndex, day) {
    const events = [];
    
    const holiday = CALENDAR_DATA.holidays.values.find(h => h.month === monthIndex + 1 && h.day === day);
    if (holiday) events.push({ type: 'holiday', ...holiday });

    const birthday = CALENDAR_DATA.birthdays?.find(b => b.month === monthIndex + 1 && b.day === day);
    if (birthday) events.push({ type: 'birthday', ...birthday });

    const dateKey = `${year}-${monthIndex}-${day}`;
    if (researchCompletionCache.has(dateKey)) {
        events.push(...researchCompletionCache.get(dateKey));
    }

    events.push(...getTimelineEventsForDay(year, monthIndex, day));
    events.push(...getBattleEventsForDay(year, monthIndex, day));
    events.push(...getRumorEventsForDay(year, monthIndex, day));
    events.push(...getPlagueEventsForDay(year, monthIndex, day));

    const dayOfWeekIndex = (day - 1) % 7;
    const dayName = CALENDAR_DATA.days.values[dayOfWeekIndex].name;
    
    for (const key in RELIGION_DATA.denominations) {
        const denom = RELIGION_DATA.denominations[key];
        if (denom.weekly_observances) {
            const obs = denom.weekly_observances.find(o => o.day === dayName);
            if (obs) events.push({ type: 'ritual', name: `${denom.name} Liturgy`, description: obs.text, religion: denom.name });
        }
    }

    return events;
}

function calculateMoonPhase(year, monthIndex, day) {
    // Simplified absolute day calculation for moon phase
    // Matches logic in moonfang-pack-details.js via calendar-data.js logic
    const absDay = ((year - 1035) * 365) + (monthIndex * 30) + day;
    const phaseIndex = Math.floor((absDay % 28) / 28 * MOON_PHASES.length) % MOON_PHASES.length;
    return MOON_PHASES[phaseIndex];
}

// --- Rendering ---
function renderCalendar() {
    if (!gridElement) return;
    gridElement.innerHTML = '';
    
    const monthData = CALENDAR_DATA.months.values[viewDate.monthIndex];
    dateDisplay.textContent = `${monthData.name} ${viewDate.year}`;
    
    const monthStartOffset = (viewDate.year * 12 + viewDate.monthIndex) % 7;

    for (let i = 0; i < monthStartOffset; i++) {
        const filler = document.createElement('div');
        filler.className = 'calendar-day other-month';
        gridElement.appendChild(filler);
    }

    for (let day = 1; day <= monthData.days; day++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-day';
        
        const isToday = (viewDate.year === CURRENT_GAME_DATE.year && viewDate.monthIndex === CURRENT_GAME_DATE.monthIndex && day === CURRENT_GAME_DATE.day);
        const isSelected = (viewDate.year === selectedDate.year && viewDate.monthIndex === selectedDate.monthIndex && day === selectedDate.day);
        
        if (isToday) cell.classList.add('current-day');
        if (isSelected) cell.classList.add('selected');

        const weather = generateWeatherForDay(viewDate.year, viewDate.monthIndex, day);
        const moonPhase = calculateMoonPhase(viewDate.year, viewDate.monthIndex, day);
        const events = getEventsForDay(viewDate.year, viewDate.monthIndex, day);

        const hasTech = events.some(e => e.type === 'tech');
        const techDot = hasTech ? `<span class="event-dot tech" title="Tech Breakthrough/Cure"></span>` : '';
        const hasHistory = events.some(e => e.type === 'history');
        const historyDot = hasHistory ? `<span class="event-dot history" title="Historical Event"></span>` : '';
        const hasBattle = events.some(e => e.type === 'battle');
        const battleDot = hasBattle ? `<span class="event-dot battle" title="Battle"></span>` : '';
        const hasRumorStart = events.some(e => e.type === 'rumor_start');
        const rumorStartDot = hasRumorStart ? `<span class="event-dot rumor-start" title="New Rumor"></span>` : '';
        const hasRumorEnd = events.some(e => e.type === 'rumor_end');
        const rumorEndDot = hasRumorEnd ? `<span class="event-dot rumor-end" title="Rumor Expiry"></span>` : '';
        const hasPlague = events.some(e => e.type === 'plague_outbreak');
        const plagueDot = hasPlague ? `<span class="event-dot plague_outbreak" title="Plague Outbreak"></span>` : '';

        cell.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="day-weather-icon" title="${weather.desc} ${weather.temp}">${weather.icon}</div>
            <div class="day-moon-icon" title="${moonPhase.name}">${moonPhase.icon}</div>
            <div class="day-events-dots">
                ${events.filter(e => !['tech', 'history', 'ritual', 'battle', 'battle_ongoing', 'rumor_start', 'rumor_end', 'plague_outbreak'].includes(e.type)).map(e => `<span class="event-dot ${e.type}" title="${e.name}"></span>`).join('')}
                ${techDot} ${historyDot} ${battleDot} ${rumorStartDot} ${rumorEndDot} ${plagueDot}
            </div>
        `;

        cell.addEventListener('click', () => selectDay(day));
        gridElement.appendChild(cell);
    }

    renderSidebar();
}

function selectDay(day) {
    selectedDate = { year: viewDate.year, monthIndex: viewDate.monthIndex, day };
    playSound('click.mp3');
    renderCalendar();
}

function renderSidebar() {
    const monthData = CALENDAR_DATA.months.values[selectedDate.monthIndex];
    const events = getEventsForDay(selectedDate.year, selectedDate.monthIndex, selectedDate.day);
    const weather = generateWeatherForDay(selectedDate.year, selectedDate.monthIndex, selectedDate.day);
    const moonPhase = calculateMoonPhase(selectedDate.year, selectedDate.monthIndex, selectedDate.day);

    selectedDateHeader.textContent = `${monthData.name} ${selectedDate.day}, ${selectedDate.year}`;
    selectedDateWeather.textContent = weather.icon;
    selectedDateWeather.title = weather.desc;

    let detailsHTML = `
        <div class="weather-details">
            <span class="temp-display">${weather.temp}</span>
            <span class="desc-display">${weather.desc}</span>
        </div>
        <div class="weather-details" style="margin-top:8px; border-top:1px dashed var(--border-color); padding-top:8px;">
            <span class="desc-display">Moon Phase: <strong>${moonPhase.icon} ${moonPhase.name}</strong></span>
        </div>
    `;

    const displayEvents = events.filter(e => e.type !== 'ritual' && e.type !== 'battle_ongoing');
    const ritualEvents = events.filter(e => e.type === 'ritual');
    const trendingEvents = events.filter(e => e.type === 'rumor_start' || e.type === 'battle' || e.type === 'battle_ongoing');

    if (displayEvents.length === 0 && ritualEvents.length === 0 && trendingEvents.length === 0) {
        detailsHTML += `<p class="placeholder-text">No significant events recorded for this date.</p>`;
    } else {
        // Main Events
        detailsHTML += displayEvents.map(e => `
            <div class="detail-item ${e.type}">
                <span class="detail-type">${e.type.toUpperCase().replace('_', ' ')}</span>
                <span class="detail-title">${e.name}</span>
                <span class="detail-desc">${e.description}</span>
            </div>
        `).join('');
        
        // Expandable Rituals
        if (ritualEvents.length > 0) {
             detailsHTML += `
                <details class="liturgy-details">
                    <summary>Liturgical Observances (${ritualEvents.length})</summary>
                    <ul>
                        ${ritualEvents.map(r => `<li><strong>${r.religion}:</strong> ${r.description}</li>`).join('')}
                    </ul>
                </details>
             `;
        }

        // Trending Topics Section (derived from today's events)
        if (trendingEvents.length > 0) {
            detailsHTML += `
                <div class="trending-topics-container">
                    <h5>Trending Topics</h5>
                    ${trendingEvents.map(t => `
                        <div class="trending-topic-item">
                            <span class="topic-icon">${t.icon}</span>
                            <span><strong>${t.name.replace(/Rumor: |Battle: /, '')}</strong></span>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }
    dayDetailContent.innerHTML = detailsHTML;

    renderUpcoming();
}

function renderUpcoming() {
    let html = '';
    let count = 0;
    
    let checkYear = CURRENT_GAME_DATE.year;
    let checkMonth = CURRENT_GAME_DATE.monthIndex;
    let checkDay = CURRENT_GAME_DATE.day + 1; 

    for (let i = 0; i < 45; i++) {
        const monthData = CALENDAR_DATA.months.values[checkMonth];
        if (checkDay > monthData.days) {
            checkDay = 1;
            checkMonth++;
            if (checkMonth > 11) {
                checkMonth = 0;
                checkYear++;
            }
        }

        const events = getEventsForDay(checkYear, checkMonth, checkDay);
        const notableEvents = events.filter(e => e.type !== 'ritual' && e.type !== 'battle_ongoing');

        if (notableEvents.length > 0) {
            notableEvents.forEach(e => {
                if (count < 5) {
                    html += `
                        <li class="event-list-item">
                            <div class="event-date-badge">
                                <span class="badge-day">${checkDay}</span>
                                <span class="badge-month">${CALENDAR_DATA.months.values[checkMonth].abbreviation}</span>
                            </div>
                            <div class="event-info-brief">
                                <strong>${e.name}</strong>
                                <span class="dot ${e.type}" style="margin-left:6px; vertical-align:middle;"></span>
                            </div>
                        </li>
                    `;
                    count++;
                }
            });
        }
        if (count >= 5) break;
        checkDay++;
    }

    if (html === '') html = '<li class="event-list-item" style="justify-content:center; color:var(--text-secondary); font-style:italic;">No significant events upcoming.</li>';
    upcomingList.innerHTML = html;
}

function setupSearchListener() {
    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const matches = [];

        CALENDAR_DATA.holidays.values.forEach(h => {
            if (h.name.toLowerCase().includes(query)) matches.push({ ...h, type: 'holiday' });
        });
        CALENDAR_DATA.birthdays.forEach(b => {
            if (b.name.toLowerCase().includes(query)) matches.push({ ...b, type: 'birthday' });
        });
        
        for (const [dateStr, events] of researchCompletionCache) {
            events.forEach(e => {
                if (e.name.toLowerCase().includes(query)) {
                    const [y, m, d] = dateStr.split('-').map(Number);
                     matches.push({ name: e.name, day: d, month: m + 1, year: y, type: 'tech' });
                }
            });
        }

        if (matches.length > 0) {
            matches.forEach(match => {
                const li = document.createElement('li');
                li.className = 'event-list-item';
                li.style.cursor = 'pointer';
                const monthAbbr = CALENDAR_DATA.months.values[match.month - 1]?.abbreviation || '???';
                li.innerHTML = `
                    <div class="event-date-badge">
                        <span class="badge-day">${match.day}</span>
                        <span class="badge-month">${monthAbbr}</span>
                    </div>
                    <div class="event-info-brief">
                        <strong>${match.name}</strong>
                        <span class="dot ${match.type}" style="margin-left:6px; vertical-align:middle;"></span>
                    </div>
                `;
                li.addEventListener('click', () => {
                    viewDate.monthIndex = match.month - 1;
                    viewDate.year = match.year || CURRENT_GAME_DATE.year; 
                    selectedDate = { year: viewDate.year, monthIndex: viewDate.monthIndex, day: match.day };
                    renderCalendar();
                    searchResults.style.display = 'none';
                    searchInput.value = '';
                    playSound('click.mp3');
                });
                searchResults.appendChild(li);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<li style="padding:8px; color:var(--text-secondary);">No results found.</li>';
            searchResults.style.display = 'block';
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

function setupListeners() {
    document.getElementById('prev-month').addEventListener('click', () => {
        viewDate.monthIndex--;
        if (viewDate.monthIndex < 0) { viewDate.monthIndex = 11; viewDate.year--; }
        renderCalendar(); playSound('click.mp3');
    });
    document.getElementById('next-month').addEventListener('click', () => {
        viewDate.monthIndex++;
        if (viewDate.monthIndex > 11) { viewDate.monthIndex = 0; viewDate.year++; }
        renderCalendar(); playSound('click.mp3');
    });
    document.getElementById('prev-year').addEventListener('click', () => {
        viewDate.year--; renderCalendar(); playSound('click.mp3');
    });
    document.getElementById('next-year').addEventListener('click', () => {
        viewDate.year++; renderCalendar(); playSound('click.mp3');
    });
    document.getElementById('today-btn').addEventListener('click', () => {
        viewDate = { year: CURRENT_GAME_DATE.year, monthIndex: CURRENT_GAME_DATE.monthIndex };
        selectDay(CURRENT_GAME_DATE.day);
        playSound('confirm.mp3');
    });
    setupSearchListener();
}

function init() {
    calculateAllResearchCompletionDates();
    setupListeners();
    renderCalendar();
}

init();
