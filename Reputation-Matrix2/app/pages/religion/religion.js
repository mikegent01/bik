

import { CALENDAR_DATA, MAGICAL_WEATHER_EVENTS, CURRENT_GAME_DATE } from '../../../data/world/calendar.js';
import { playSound } from '../../../common.js';
import { RELIGION_DATA } from '../../../data/support/religion-data.js';
import { state } from '../../../state.js'; // Import state to get logged-in user

// DOM Elements
const chartCanvas = document.getElementById('religion-chart');
const edictsContainer = document.getElementById('active-edicts-container');
const ritualsContainer = document.getElementById('daily-rituals-container');
const treeContainer = document.querySelector('.religion-tree-container');
const religionModal = document.getElementById('religion-modal');
const religionModalBody = document.getElementById('religion-modal-body');
const religionModalClose = document.getElementById('religion-modal-close');

let displayedDate = {
    year: CURRENT_GAME_DATE.year,
    monthIndex: CURRENT_GAME_DATE.monthIndex
};

let selectedDate = { ...CURRENT_GAME_DATE };
let currentView = 'monthly'; // 'monthly', 'weekly', 'yearly'
let globalReligiousCounts = {};
let grandTotalPop = 0;

// --- DATA AUGMENTATION (Simulating data update) ---
if (RELIGION_DATA.denominations.star_spirits) {
    RELIGION_DATA.denominations.star_spirits.weekly_observances = [
        { day: "Soldas", text: "Stand beneath the open sky at midnight and offer a Star Bit." },
        { day: "Mercurias", text: "Sketch the position of the North Star upon waking." },
        { day: "Venerias", text: "Share a wish with a stranger." }
    ];
}

/**
 * Generates a pseudo-random number from a seed using a simple LCG.
 * @param {number} seed - The seed value.
 * @returns {number} A random number between 0 and 1.
 */
function getSeededRandom(seed) {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

/**
 * Generates a thematic weather forecast for a given day.
 * @param {number} year - The current year.
 * @param {number} monthIndex - The 0-indexed month.
 * @param {number} day - The day of the month.
 * @returns {object} An object containing weather details.
 */
function generateWeatherForDay(year, monthIndex, day) {
    const monthData = CALENDAR_DATA.months.values[monthIndex];
    const season = CALENDAR_DATA.seasons.values.find(s => {
        const startMonth = s.monthStart - 1;
        const endMonth = s.monthEnd - 1;
        if (startMonth <= endMonth) {
            return monthIndex >= startMonth && monthIndex <= endMonth;
        } else { // Handle winter wrapping around the year
            return monthIndex >= startMonth || monthIndex <= endMonth;
        }
    });

    const seed = year * 10000 + (monthIndex + 1) * 100 + day;
    const rand = getSeededRandom(seed);
    const tempRand = getSeededRandom(seed + 1);
    
    // Magical weather check (e.g., 8% chance)
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
            baseTemp = 24;
            tempVariation = 10;
            weatherOptions = [
                { icon: '☀️', desc: 'Clear and Sunny', chance: 0.6 },
                { icon: '🌤️', desc: 'Partly Cloudy', chance: 0.2 },
                { icon: '☁️', desc: 'Overcast', chance: 0.1 },
                { icon: '🌦️', desc: 'Scattered Showers', chance: 0.07 },
                { icon: '⛈️', desc: 'Afternoon Thunderstorm', chance: 0.03 }
            ];
            break;
        case 'Hoarfrost Winter':
            baseTemp = -5;
            tempVariation = 8;
             weatherOptions = [
                { icon: '❄️', desc: 'Light Snowfall', chance: 0.4 },
                { icon: '🥶', desc: 'Bitterly Cold', chance: 0.3 },
                { icon: '☁️', desc: 'Grey and Overcast', chance: 0.2 },
                { icon: '☀️', desc: 'Crisp and Clear', chance: 0.1 }
            ];
            break;
        default: // Spring & Fall
            baseTemp = 12;
            tempVariation = 12;
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

    return {
        temp: `${temperature}°C`,
        ...chosenWeather
    };
}


function renderView() {
    updateHeader();
    updateNavButtons();
    
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.view-btn[data-view="${currentView}"]`)?.classList.add('active');

    document.querySelectorAll('.calendar-view').forEach(v => v.classList.remove('active'));

    switch(currentView) {
        case 'yearly':
            document.getElementById('calendar-grid-yearly').classList.add('active');
            renderYearlyView(displayedDate.year);
            break;
        case 'weekly':
            document.getElementById('calendar-grid-weekly').classList.add('active');
            renderWeeklyView(selectedDate.year, selectedDate.monthIndex, selectedDate.day);
            break;
        case 'monthly':
        default:
            document.getElementById('calendar-grid-monthly').classList.add('active');
            renderMonthlyView(displayedDate.year, displayedDate.monthIndex);
            break;
    }

    const detailPanel = document.getElementById('day-detail-panel');
    if (detailPanel) {
        if (currentView === 'monthly') {
            renderDayDetails();
            detailPanel.style.display = 'block';
        } else {
            detailPanel.style.display = 'none';
        }
    }
}

function renderMonthlyView(year, monthIndex) {
    const grid = document.getElementById('calendar-grid-monthly');
    if (!grid) return;

    grid.innerHTML = '';
    
    CALENDAR_DATA.days.values.forEach(day => {
        grid.innerHTML += `<div class="calendar-header">${day.abbreviation}</div>`;
    });
    
    const firstOfMonth = new Date(year, monthIndex, 1);
    let firstDayOfWeek = firstOfMonth.getDay() - (CALENDAR_DATA.days.values[0].ordinal - 1);
    if (firstDayOfWeek < 0) firstDayOfWeek += 7;

    const daysInMonth = CALENDAR_DATA.months.values[monthIndex].days;
    for (let i = 0; i < firstDayOfWeek; i++) {
        grid.innerHTML += `<div class="calendar-day other-month"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.dataset.day = day;

        if (day === CURRENT_GAME_DATE.day && monthIndex === CURRENT_GAME_DATE.monthIndex && year === CURRENT_GAME_DATE.year) dayElement.classList.add('current-day');
        if (day === selectedDate.day && monthIndex === selectedDate.monthIndex && year === selectedDate.year) dayElement.classList.add('selected');

        const holiday = CALENDAR_DATA.holidays.values.find(h => h.month === monthIndex + 1 && h.day === day);
        dayElement.innerHTML = `<div class="day-number">${day}</div> ${holiday ? `<div class="day-holiday" title="${holiday.description}">${holiday.name}</div>` : ''}`;
        grid.appendChild(dayElement);
    }
}

function renderWeeklyView(year, monthIndex, day) {
    const grid = document.getElementById('calendar-grid-weekly');
    if (!grid) return;
    grid.innerHTML = '';

    const baseDate = new Date(year, monthIndex, day);
    const dayOfWeek = baseDate.getDay() - (CALENDAR_DATA.days.values[0].ordinal - 1);
    if (dayOfWeek < 0) dayOfWeek += 7;
    baseDate.setDate(baseDate.getDate() - dayOfWeek);

    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(baseDate);
        currentDate.setDate(baseDate.getDate() + i);
        
        const cYear = currentDate.getFullYear();
        const cMonth = currentDate.getMonth();
        const cDay = currentDate.getDate();

        const dayName = CALENDAR_DATA.days.values[currentDate.getDay()].name;
        const weather = generateWeatherForDay(cYear, cMonth, cDay);
        const holiday = CALENDAR_DATA.holidays.values.find(h => h.month === cMonth + 1 && h.day === cDay);

        const card = document.createElement('div');
        card.className = 'weekly-day-card';
        if (cDay === CURRENT_GAME_DATE.day && cMonth === CURRENT_GAME_DATE.monthIndex && cYear === CURRENT_GAME_DATE.year) {
            card.classList.add('current-day');
        }

        const weatherClass = weather.isMagical ? 'magical-weather' : '';
        
        card.innerHTML = `
            <div class="day-header">
                <div class="day-name">${dayName}</div>
                <div class="day-date">${CALENDAR_DATA.months.values[cMonth].abbreviation} ${cDay}</div>
            </div>
            <div class="weather-forecast ${weatherClass}">
                <div class="weather-icon">${weather.icon}</div>
                <div class="weather-details">
                    <p class="weather-temp">${weather.temp}</p>
                    <p>${weather.desc}</p>
                </div>
            </div>
            <ul class="day-events-list">
                ${holiday ? `<li><strong>Holiday:</strong> ${holiday.name}</li>` : '<li>No scheduled events.</li>'}
            </ul>
        `;
        grid.appendChild(card);
    }
}


function renderYearlyView(year) {
    const grid = document.getElementById('calendar-grid-yearly');
    if (!grid) return;
    grid.innerHTML = '';

    CALENDAR_DATA.months.values.forEach((month, monthIndex) => {
        const monthContainer = document.createElement('div');
        monthContainer.className = 'mini-month-container';
        monthContainer.dataset.monthIndex = monthIndex;

        let monthHTML = `<div class="mini-month-header">${month.name}</div><div class="mini-month-grid">`;
        CALENDAR_DATA.days.values.forEach(d => monthHTML += `<div class="mini-day-cell header">${d.abbreviation.charAt(0)}</div>`);
        
        const firstOfMonth = new Date(year, monthIndex, 1);
        let firstDayOfWeek = firstOfMonth.getDay() - (CALENDAR_DATA.days.values[0].ordinal - 1);
        if (firstDayOfWeek < 0) firstDayOfWeek += 7;

        for (let i = 0; i < firstDayOfWeek; i++) {
            monthHTML += `<div class="mini-day-cell"></div>`;
        }

        for (let day = 1; day <= month.days; day++) {
            let classes = 'mini-day-cell';
            if (day === CURRENT_GAME_DATE.day && monthIndex === CURRENT_GAME_DATE.monthIndex && year === CURRENT_GAME_DATE.year) classes += ' current-day';
            if (CALENDAR_DATA.holidays.values.some(h => h.month === monthIndex + 1 && h.day === day)) classes += ' holiday';
            monthHTML += `<div class="${classes}">${day}</div>`;
        }
        monthHTML += '</div>';
        monthContainer.innerHTML = monthHTML;
        grid.appendChild(monthContainer);
    });
}

function updateHeader() {
    const headerDisplay = document.getElementById('calendar-header-display');
    if (!headerDisplay) return;

    switch(currentView) {
        case 'yearly':
            headerDisplay.textContent = `Year ${displayedDate.year} BF`;
            break;
        case 'weekly':
            const baseDate = new Date(selectedDate.year, selectedDate.monthIndex, selectedDate.day);
            let dayOfWeek = baseDate.getDay() - (CALENDAR_DATA.days.values[0].ordinal - 1);
            if (dayOfWeek < 0) dayOfWeek += 7;

            const startOfWeek = new Date(baseDate);
            startOfWeek.setDate(baseDate.getDate() - dayOfWeek);
            
            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 6);

            const startMonthName = CALENDAR_DATA.months.values[startOfWeek.getMonth()].name;
            const endMonthName = CALENDAR_DATA.months.values[endOfWeek.getMonth()].name;

            if (startOfWeek.getFullYear() !== endOfWeek.getFullYear()) {
                headerDisplay.textContent = `${startMonthName} ${startOfWeek.getDate()}, ${startOfWeek.getFullYear()} - ${endMonthName} ${endOfWeek.getDate()}, ${endOfWeek.getFullYear()}`;
            } else if (startMonthName !== endMonthName) {
                 headerDisplay.textContent = `${startMonthName} ${startOfWeek.getDate()} - ${endMonthName} ${endOfWeek.getDate()}`;
            } else {
                 headerDisplay.textContent = `${startMonthName} ${startOfWeek.getDate()} - ${endOfWeek.getDate()}`;
            }
            break;
        case 'monthly':
        default:
            headerDisplay.textContent = `${CALENDAR_DATA.months.values[displayedDate.monthIndex].name}, ${displayedDate.year} BF`;
            break;
    }
}

function updateNavButtons() {
    const prevYearBtn = document.getElementById('prev-year');
    const nextYearBtn = document.getElementById('next-year');
    const prevBtn = document.getElementById('prev-month');
    const nextBtn = document.getElementById('next-month');
    if (!prevYearBtn) return;

    prevYearBtn.style.display = 'block';
    nextYearBtn.style.display = 'block';
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';

    if (currentView === 'yearly') {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else if (currentView === 'weekly') {
        prevYearBtn.style.display = 'none';
        nextYearBtn.style.display = 'none';
        prevBtn.textContent = '‹ Week';
        nextBtn.textContent = 'Week ›';
    } else { // monthly
        prevBtn.textContent = '‹ Month';
        nextBtn.textContent = 'Month ›';
    }
}

function renderDayDetails() {
    let detailPanel = document.getElementById('day-detail-panel');
    const sidebar = document.getElementById('calendar-sidebar');
    if (!sidebar) return;

    if (!detailPanel) {
        detailPanel = document.createElement('div');
        detailPanel.id = 'day-detail-panel';
        sidebar.prepend(detailPanel);
    }

    const monthData = CALENDAR_DATA.months.values[selectedDate.monthIndex];
    const daySuffix = (d => (d % 10 === 1 && d !== 11) ? "st" : (d % 10 === 2 && d !== 12) ? "nd" : (d % 10 === 3 && d !== 13) ? "rd" : "th")(selectedDate.day);

    const holiday = CALENDAR_DATA.holidays.values.find(h => h.month === monthData.ordinal && h.day === selectedDate.day);
    const weather = generateWeatherForDay(selectedDate.year, selectedDate.monthIndex, selectedDate.day);

    let eventsHTML = holiday ? `<li><strong>Holiday:</strong> ${holiday.name}</li>` : '<li>No scheduled events.</li>';

    const weatherClass = weather.isMagical ? 'magical-weather' : '';

    detailPanel.innerHTML = `
        <h3>${selectedDate.day}${daySuffix} of ${monthData.name}</h3>
        <div class="weather-forecast ${weatherClass}">
            <div class="weather-icon">${weather.icon}</div>
            <div class="weather-details">
                <p class="weather-temp">${weather.temp}</p>
                <p>${weather.desc}</p>
            </div>
        </div>
        <ul class="day-events-list">
            ${eventsHTML}
        </ul>
    `;
}


function renderMoons(year, monthIndex, day) {
    const container = document.getElementById('moons-display');
    if (!container) return;
    
    let daysPassed = 0;
    for (let i = 0; i < monthIndex; i++) {
        daysPassed += CALENDAR_DATA.months.values[i].days;
    }
    daysPassed += day;

    container.innerHTML = CALENDAR_DATA.moons.values.map(moon => {
        const daysIntoCycle = (daysPassed + moon.offset) % moon.cycleLength;
        const phaseIndex = Math.floor((daysIntoCycle / moon.cycleLength) * moon.phaseNames.length);
        const phaseName = moon.phaseNames[phaseIndex];

        return `<div class="moon-info">
                    <h4 style="color: ${moon.color};">${moon.name}</h4>
                    <p class="moon-phase">${phaseName}</p>
                </div>`;
    }).join('');
}

function renderSidebar(year, monthIndex) {
    const holidaysContainer = document.getElementById('holidays-list');
    
    if (holidaysContainer) {
        const header = holidaysContainer.parentElement.querySelector('h3');
        const monthName = CALENDAR_DATA.months.values[monthIndex].name;
        if (header) {
             header.textContent = `Holidays in ${monthName}`;
        }
       
        const monthHolidays = CALENDAR_DATA.holidays.values
            .filter(h => h.month === monthIndex + 1)
            .sort((a,b) => a.day - b.day);
            
        holidaysContainer.innerHTML = monthHolidays.map(h => `
             <li class="holiday-item">
                <div class="holiday-header">
                    <strong>Day ${h.day}: ${h.name}</strong>
                </div>
                <p class="holiday-description">${h.description}</p>
                <p class="holiday-traditions"><em>Traditions:</em> ${h.traditions}</p>
            </li>
        `).join('') || '<li>No holidays this month.</li>';
    }
}

// --- DATA IMPORT FUNCTIONS ---
import { MAP_DATA } from '../../../data/maps/map-data.js';
import { SPECIES_DATA, REGIONAL_DEMOGRAPHICS } from '../../../data/support/species-data.js';

function getPlayerSpeciesKey() {
    const user = state.loggedInUser || 'generic';
    
    const charMap = {
        'archie': 'kivotos_human',
        'markop': 'centaur_horse_head',
        'hjumpik': 'dnd_dwarf_mountain',
        'bowser': 'koopa',
        'remi': 'kivotos_human'
    };

    return charMap[user] || 'dnd_human'; // Default to human if unknown
}

function calculateTension(targetDenomId) {
    const playerSpeciesKey = getPlayerSpeciesKey();
    const speciesInfo = SPECIES_DATA[playerSpeciesKey];
    
    // Find dominant religion for species
    let dominantDenomId = 'unaligned';
    if (speciesInfo && speciesInfo.religion_breakdown) {
        const sorted = Object.entries(speciesInfo.religion_breakdown).sort((a, b) => b[1] - a[1]);
        if (sorted.length > 0) {
            dominantDenomId = sorted[0][0];
        }
    }

    // If unaligned or same religion, no tension
    if (dominantDenomId === 'unaligned' || dominantDenomId === targetDenomId) {
        return { level: 0, label: 'Harmonious', color: 'var(--positive-color)', sameFaith: true };
    }

    const playerDenom = RELIGION_DATA.denominations[dominantDenomId];
    const targetDenom = RELIGION_DATA.denominations[targetDenomId];

    if (!playerDenom || !targetDenom) {
        return { level: 10, label: 'Neutral', color: 'var(--neutral-color)' };
    }

    const playerGroup = playerDenom.group;
    const targetGroup = targetDenom.group;

    // Check matrix
    let tensionValue = 50; // Default
    if (RELIGION_DATA.compatibility_matrix[playerGroup] && RELIGION_DATA.compatibility_matrix[playerGroup][targetGroup] !== undefined) {
        tensionValue = RELIGION_DATA.compatibility_matrix[playerGroup][targetGroup];
    }

    let label = 'Neutral';
    let color = 'var(--neutral-color)';

    if (tensionValue <= 10) { label = 'Peaceful'; color = 'var(--positive-color)'; }
    else if (tensionValue <= 30) { label = 'Uneasy'; color = '#FFD700'; } // Gold
    else if (tensionValue <= 60) { label = 'Tense'; color = 'var(--accent-color)'; } // Orange-ish via CSS vars usually
    else if (tensionValue <= 80) { label = 'Hostile'; color = 'var(--negative-color)'; }
    else { label = 'Heretical'; color = '#8B0000'; } // Dark Red

    return { level: tensionValue, label, color, sameFaith: false };
}

function calculateReligiousDemographics() {
    const counts = {};
    let totalPop = 0;

    Object.keys(RELIGION_DATA.denominations).forEach(key => counts[key] = 0);
    counts['unaligned'] = 0;

    for (const mapKey in MAP_DATA) {
        const map = MAP_DATA[mapKey];
        const group = map.group || 'Other';
        
        const regionalSpecies = REGIONAL_DEMOGRAPHICS[group] || { other: 1.0 };

        if (map.pointsOfInterest) {
            map.pointsOfInterest.forEach(poi => {
                const poiPop = poi.population || 0;
                if (poiPop > 0) {
                    totalPop += poiPop;

                    for (const [speciesKey, speciesPct] of Object.entries(regionalSpecies)) {
                        const speciesPop = poiPop * speciesPct;
                        const speciesInfo = SPECIES_DATA[speciesKey];

                        if (speciesInfo && speciesInfo.religion_breakdown) {
                            for (const [religionKey, religionPct] of Object.entries(speciesInfo.religion_breakdown)) {
                                let followers = speciesPop * religionPct;
                                
                                if (counts[religionKey] !== undefined) {
                                    counts[religionKey] += followers;
                                } else {
                                    distributeToMinorFaiths(counts, followers, religionKey);
                                }
                            }
                        } else {
                            distributeToMinorFaiths(counts, speciesPop, 'unaligned');
                        }
                    }
                }
            });
        }
    }
    
    grandTotalPop = totalPop;
    globalReligiousCounts = counts;
    return counts;
}

function distributeToMinorFaiths(counts, amount, key) {
    if (key === 'unaligned') {
        counts['unaligned'] += amount * 0.5;
        amount = amount * 0.5;
    }
    const allKeys = Object.keys(RELIGION_DATA.denominations);
    const randomKey = allKeys[Math.floor(Math.random() * allKeys.length)];
    if(counts[randomKey] !== undefined) {
        counts[randomKey] += amount;
    }
}

function renderChart(counts) {
    if (!chartCanvas) return;

    const groupCounts = {};
    Object.keys(RELIGION_DATA.groups).forEach(k => groupCounts[k] = 0);
    groupCounts['unaligned'] = counts['unaligned'];

    Object.entries(counts).forEach(([denomKey, count]) => {
        if (denomKey === 'unaligned') return;
        const denom = RELIGION_DATA.denominations[denomKey];
        if (denom) {
            groupCounts[denom.group] += count;
        }
    });

    const labels = [];
    const data = [];
    const colors = [];

    Object.entries(groupCounts).forEach(([key, count]) => {
        if (count > 0) {
            const groupName = RELIGION_DATA.groups[key]?.name || "Secular / Unaligned";
            const color = RELIGION_DATA.groups[key]?.color || "#6c757d";
            labels.push(groupName);
            data.push(count);
            colors.push(color);
        }
    });

    new Chart(chartCanvas, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
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
                    labels: {
                        color: '#e6edf3',
                        font: { family: "'Roboto Mono', monospace" }
                    }
                }
            }
        }
    });
}

function renderEdicts() {
    if (!edictsContainer) return;
    
    let html = '';
    const activeDenoms = Object.values(RELIGION_DATA.denominations).filter(d => d.active_law && Math.random() > 0.7).slice(0, 6);

    activeDenoms.forEach(denom => {
        const groupColor = RELIGION_DATA.groups[denom.group].color;
        html += `
            <div class="edict-card" style="border-left-color: ${groupColor}">
                <div class="edict-header">
                    <span class="edict-religion">${denom.name}</span>
                    <span class="edict-leader">${denom.leader}</span>
                </div>
                <div class="edict-text">"${denom.active_law}"</div>
            </div>
        `;
    });
    edictsContainer.innerHTML = html;
}

function getGameDayName() {
    const date = new Date(CURRENT_GAME_DATE.year, CURRENT_GAME_DATE.monthIndex, CURRENT_GAME_DATE.day);
    const dayIndex = (CURRENT_GAME_DATE.day - 1) % 7;
    return CALENDAR_DATA.days.values[dayIndex]?.name || "Unknown Day";
}

function renderDailyRituals() {
    if (!ritualsContainer) return;

    // 1. Update Header with Date
    const monthName = CALENDAR_DATA.months.values[CURRENT_GAME_DATE.monthIndex].name;
    const dayName = getGameDayName();
    const dateString = `${dayName}, ${monthName} ${CURRENT_GAME_DATE.day}, ${CURRENT_GAME_DATE.year} BF`;
    
    const panelHeader = ritualsContainer.closest('.ritual-panel').querySelector('h3');
    if (panelHeader) {
        panelHeader.innerHTML = `Today's Liturgy <span class="header-date">${dateString}</span>`;
    }

    // 2. Find denominations with specific observances for TODAY
    const denoms = Object.values(RELIGION_DATA.denominations);
    const specificMatches = [];
    const generalPool = [];

    denoms.forEach(denom => {
        let addedSpecific = false;
        if (denom.weekly_observances) {
            const obs = denom.weekly_observances.find(o => o.day === dayName);
            if (obs) {
                specificMatches.push({ denom, text: obs.text, isSpecial: true });
                addedSpecific = true;
            }
        }
        if (!addedSpecific) {
            generalPool.push({ denom, text: denom.daily_liturgy || "Daily prayer." });
        }
    });

    // 3. Fill the 4 slots
    // Prioritize specific matches, then fill remaining with random general ones
    const finalSelection = [...specificMatches];
    
    // Shuffle general pool for variety
    const seed = CURRENT_GAME_DATE.year * 10000 + CURRENT_GAME_DATE.monthIndex * 100 + CURRENT_GAME_DATE.day;
    for (let i = generalPool.length - 1; i > 0; i--) {
        const r = getSeededRandom(seed + i);
        const j = Math.floor(r * (i + 1));
        [generalPool[i], generalPool[j]] = [generalPool[j], generalPool[i]];
    }

    while (finalSelection.length < 4 && generalPool.length > 0) {
        finalSelection.push(generalPool.pop());
    }
    
    // 4. Build HTML
    let html = `
        <div class="ritual-subtitle">
            Observances for <strong>${dayName}</strong>. Adherents are expected to perform relevant rites.
        </div>
        <div class="rituals-grid">
    `;
    
    finalSelection.slice(0, 4).forEach(item => {
        const group = RELIGION_DATA.groups[item.denom.group];
        const specialStyle = item.isSpecial ? `border: 2px solid var(--accent-color); box-shadow: 0 0 10px ${group.color}40;` : `border-left: 3px solid ${group.color};`;
        const titleStyle = item.isSpecial ? `color: var(--accent-color);` : `color: var(--text-color);`;

        html += `
            <div class="ritual-card" style="${specialStyle}">
                <div class="ritual-header">
                    <span>${group.icon}</span>
                    <strong style="${titleStyle}">${item.denom.name}</strong>
                </div>
                <div class="ritual-content">
                    ${item.isSpecial ? `<span style="font-size:0.8em; text-transform:uppercase; color:var(--accent-color); display:block; margin-bottom:4px;">${dayName} Liturgy</span>` : ''}
                    "${item.text}"
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    
    ritualsContainer.innerHTML = html;
}

function renderTree() {
    if (!treeContainer) return;

    let html = '';
    
    Object.entries(RELIGION_DATA.groups).forEach(([groupKey, group]) => {
        const denoms = Object.values(RELIGION_DATA.denominations).filter(d => d.group === groupKey);
        
        const denomsHTML = denoms.map(d => {
            const demographicCount = Math.round(globalReligiousCounts[d.id] || 0);
            const explicitFollowers = d.followers || [];
            const totalCount = demographicCount + explicitFollowers.length;
            
            return `
                <div class="denomination-card" data-id="${d.id}">
                    <div class="denom-stripe" style="background-color: ${group.color}"></div>
                    <div class="denom-content">
                        <div class="denom-name">${d.name}</div>
                        <div class="denom-followers">${totalCount.toLocaleString()} believers</div>
                        <div class="denom-bonus">${d.bonus}</div>
                    </div>
                </div>
            `;
        }).join('');

        if (denomsHTML) {
            html += `
                <div class="religion-group-section">
                    <div class="group-header">
                        <span class="group-icon">${group.icon}</span>
                        <div class="group-info">
                            <h3 style="color: ${group.color}">${group.name}</h3>
                            <p class="group-desc">${group.description}</p>
                        </div>
                    </div>
                    <div class="denomination-grid">
                        ${denomsHTML}
                    </div>
                </div>
            `;
        }
    });

    treeContainer.innerHTML = html;
}

// --- NEW MODAL DETAIL LOGIC ---

function showDetailModal(denomId) {
    const denom = RELIGION_DATA.denominations[denomId];
    if (!denom) return;
    
    const group = RELIGION_DATA.groups[denom.group];
    const followerList = denom.followers || [];
    const demographicCount = Math.round(globalReligiousCounts[denomId] || 0);
    const totalCount = demographicCount + followerList.length;
    
    const traditionsList = denom.traditions ? denom.traditions.map(t => `<li>${t}</li>`).join('') : '<li>Unknown customs.</li>';
    const saintsList = denom.saints ? denom.saints.map(s => `<li>${s}</li>`).join('') : '<li>No recorded saints.</li>';
    const ritualText = denom.activation_ritual || "No specific ritual data available.";
    const dailyText = denom.daily_liturgy || "No daily observance recorded.";
    const heresyText = denom.heresies || "None currently recorded.";
    const followersListHTML = followerList.length > 0 ? followerList.map(f => `<li>${f}</li>`).join('') : '<li>No specific notable followers recorded.</li>';

    // Mechanics List
    let mechanicsList = '';
    if (denom.mechanics && denom.mechanics.length > 0) {
        mechanicsList = `
            <div class="mechanics-box" style="border-left-color: ${group.color};">
                <h4>⚙️ Tenets & Mechanics</h4>
                <ul class="mechanics-list">
                    ${denom.mechanics.map(m => `<li><strong>${m.name}:</strong> ${m.effect}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Build Weekly Schedule HTML
    let weeklyScheduleHTML = '';
    if (denom.weekly_observances && denom.weekly_observances.length > 0) {
        weeklyScheduleHTML = `<div class="weekly-schedule-box"><h5 style="color:${group.color}">Weekly Observances</h5><ul class="weekly-list">`;
        denom.weekly_observances.forEach(obs => {
            weeklyScheduleHTML += `<li><strong>${obs.day}:</strong> ${obs.text}</li>`;
        });
        weeklyScheduleHTML += `</ul></div>`;
    }

    // Tension Calculation & Effects
    const tensionData = calculateTension(denomId);
    const tensionHTML = `
        <div class="tension-meter-container" style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; margin-top: 10px; text-align: center;">
            <div class="tension-header" style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 5px;">
                Spiritual Alignment vs. Your Faith
            </div>
            <div class="tension-bar-bg" style="width: 100%; height: 10px; background: #333; border-radius: 5px; overflow: hidden;">
                <div class="tension-bar-fill" style="width: ${tensionData.level}%; height: 100%; background-color: ${tensionData.color}; transition: width 0.5s;"></div>
            </div>
            <div class="tension-label" style="color: ${tensionData.color}; font-weight: bold; margin-top: 5px;">
                ${tensionData.label} (${tensionData.level}% Tension)
            </div>
            ${tensionData.sameFaith ? '<div style="font-size:0.8rem; font-style:italic; color:var(--positive-color); margin-top:2px;">(This is your faith)</div>' : ''}
        </div>
    `;

    // Find the specific consequence based on the tension level
    let consequenceHTML = '';
    const consequence = RELIGION_DATA.tension_consequences.find(c => tensionData.level >= c.min && tensionData.level <= c.max);
    
    if (consequence) {
        const effectsList = consequence.effects.map(e => `<li>${e}</li>`).join('');
        consequenceHTML = `
            <div class="tension-outcome-box" style="border-color: ${tensionData.color};">
                <h5 style="color: ${tensionData.color};">${consequence.title}</h5>
                <p class="outcome-desc">${consequence.description}</p>
                <ul class="outcome-list">
                    ${effectsList}
                </ul>
            </div>
        `;
    }

    religionModalBody.innerHTML = `
        <div class="holy-grid-layout">
            <div class="holy-header-section">
                <div class="holy-icon-large" style="text-shadow: 0 0 20px ${group.color};">${group.icon}</div>
                <h2 class="holy-title" style="color: ${group.color};">${denom.name}</h2>
                <p class="holy-leader">High Priest: ${denom.leader}</p>
                <div class="holy-stats">
                    <div class="stat-box"><span class="stat-label">Seat</span><span class="stat-val">${denom.seat}</span></div>
                    <div class="stat-box"><span class="stat-label">Followers</span><span class="stat-val">${totalCount.toLocaleString()}</span></div>
                </div>
                ${tensionHTML}
                ${consequenceHTML}
            </div>

            <div class="holy-left-col">
                <div class="doctrine-box">
                    <h5 style="color:${group.color}; margin-top:0;">Doctrine & Dogma</h5>
                    "${denom.description}"
                </div>

                <div class="ritual-box" style="border-color: ${group.color}">
                    <h4>🔮 Rituals & Observances</h4>
                    <p><strong>Activation:</strong> <span class="ritual-text">${ritualText}</span></p>
                    <div class="daily-liturgy-text">
                        <strong>Daily Liturgy:</strong> "${dailyText}"
                    </div>
                    ${weeklyScheduleHTML}
                </div>

                <div class="heresy-box">
                    <h4>⚠️ Known Heresies</h4>
                    <p class="heresy-text">${heresyText}</p>
                </div>
            </div>

            <div class="holy-right-col">
                <div class="edict-scroll">
                    <h4>📜 Active Edict</h4>
                    <p class="edict-content">${denom.active_law}</p>
                </div>

                <div class="favor-box" style="border-color: ${group.color}; background: linear-gradient(135deg, rgba(0,0,0,0), ${group.color}11);">
                    <h4>✨ Divine Favor</h4>
                    <p class="favor-text">${denom.bonus}</p>
                    <small style="color:var(--text-secondary)">Effect active for allied forces.</small>
                </div>

                ${mechanicsList}

                <div class="list-group">
                    <h5>Notable Followers</h5>
                    <ul class="holy-list">${followersListHTML}</ul>
                </div>

                <div class="list-group">
                    <h5>Saints & Figures</h5>
                    <ul class="holy-list">${saintsList}</ul>
                </div>

                <div class="list-group">
                    <h5>Traditions</h5>
                    <ul class="holy-list">${traditionsList}</ul>
                </div>
            </div>
        </div>
    `;

    religionModal.style.display = 'flex';
}

function hideDetailModal() {
    religionModal.style.display = 'none';
}

function renderEdictsModal() {
    const edictsList = document.getElementById('edicts-modal-list');
    if (!edictsList) return;

    // Filter for denominations that have an active_law
    const activeDenoms = Object.values(RELIGION_DATA.denominations).filter(d => d.active_law);
    
    edictsList.innerHTML = activeDenoms.map(denom => {
        const groupColor = RELIGION_DATA.groups[denom.group].color;
        return `
            <div class="edict-card" style="border-left-color: ${groupColor}">
                <div class="edict-header">
                    <span class="edict-religion">${denom.name}</span>
                    <span class="edict-leader">${denom.leader}</span>
                </div>
                <div class="edict-text">"${denom.active_law}"</div>
            </div>
        `;
    }).join('');
}

function setupEventListeners() {
    // 1. Calendar Navigation & Grid Listeners
    const gridMonthly = document.getElementById('calendar-grid-monthly');
    const gridYearly = document.getElementById('calendar-grid-yearly');
    const viewSwitcher = document.getElementById('view-switcher');

    if (gridMonthly) {
        gridMonthly.addEventListener('click', (e) => {
            const dayCell = e.target.closest('.calendar-day:not(.other-month)');
            if (dayCell && dayCell.dataset.day) {
                selectedDate = { ...displayedDate, day: parseInt(dayCell.dataset.day, 10) };
                renderView();
            }
        });
    }
    
    if (gridYearly) {
        gridYearly.addEventListener('click', e => {
            const monthCell = e.target.closest('.mini-month-container');
            if (monthCell) {
                playSound('confirm.mp3');
                const monthIndex = parseInt(monthCell.dataset.monthIndex, 10);
                displayedDate.monthIndex = monthIndex;
                selectedDate = { year: displayedDate.year, monthIndex: monthIndex, day: 1};
                currentView = 'monthly';
                renderView();
                renderSidebar(displayedDate.year, displayedDate.monthIndex);
            }
        });
    }

    if (viewSwitcher) {
        viewSwitcher.addEventListener('click', e => {
            const btn = e.target.closest('.view-btn');
            if (btn) {
                playSound('click.mp3');
                const newView = btn.dataset.view;

                if (currentView === newView) {
                    displayedDate = { year: CURRENT_GAME_DATE.year, monthIndex: CURRENT_GAME_DATE.monthIndex };
                    selectedDate = { ...CURRENT_GAME_DATE };
                } else {
                    currentView = newView;
                }
                
                renderView();
            }
        });
    }
    
    // Navigation buttons logic (simplified for brevity)
    const navActions = {
        'prev-year': () => { displayedDate.year--; selectedDate.year = displayedDate.year; },
        'next-year': () => { displayedDate.year++; selectedDate.year = displayedDate.year; },
        'prev-month': () => {
            displayedDate.monthIndex--;
            if (displayedDate.monthIndex < 0) { displayedDate.monthIndex = 11; displayedDate.year--; }
            selectedDate.year = displayedDate.year; selectedDate.monthIndex = displayedDate.monthIndex;
        },
        'next-month': () => {
            displayedDate.monthIndex++;
            if (displayedDate.monthIndex > 11) { displayedDate.monthIndex = 0; displayedDate.year++; }
            selectedDate.year = displayedDate.year; selectedDate.monthIndex = displayedDate.monthIndex;
        }
    };

    for (const [id, action] of Object.entries(navActions)) {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', () => {
                action();
                renderView();
                if (currentView === 'monthly') {
                    renderSidebar(displayedDate.year, displayedDate.monthIndex);
                }
            });
        }
    }

    // 2. Religion Tree & Modal Listeners
    if (treeContainer) {
        treeContainer.addEventListener('click', e => {
            const card = e.target.closest('.denomination-card');
            if (card) {
                playSound('click.mp3');
                showDetailModal(card.dataset.id);
            }
        });
    }

    if (religionModalClose) {
        religionModalClose.addEventListener('click', hideDetailModal);
    }
    
    if (religionModal) {
        window.addEventListener('click', (e) => {
            if (e.target === religionModal) {
                hideDetailModal();
            }
        });
    }

    // 3. Edict Modal Listeners
    const edictsBtn = document.getElementById('view-edicts-btn');
    const edictsModal = document.getElementById('edicts-modal');
    const edictsClose = edictsModal ? edictsModal.querySelector('.modal-close') : null;

    if (edictsBtn && edictsModal) {
        edictsBtn.addEventListener('click', () => {
            renderEdictsModal();
            edictsModal.style.display = 'flex';
            playSound('click.mp3');
        });
        
        if (edictsClose) {
            edictsClose.addEventListener('click', () => {
                edictsModal.style.display = 'none';
            });
        }
        
        edictsModal.addEventListener('click', (e) => {
            if(e.target === edictsModal) edictsModal.style.display = 'none';
        });
    }
}

function init() {
    if (treeContainer) {
        const counts = calculateReligiousDemographics();
        renderChart(counts);
        renderEdicts();
        renderDailyRituals();
        renderTree();
    }
    
    // Always run setupEventListeners as it handles both calendar and religion page elements
    // depending on what is present in the DOM.
    setupEventListeners();
    
    // If we are on the calendar page, trigger initial render
    if (document.getElementById('calendar-grid-monthly')) {
        renderView();
        renderSidebar(displayedDate.year, displayedDate.monthIndex);
    }
}

init();