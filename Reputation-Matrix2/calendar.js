
import { CALENDAR_DATA, MAGICAL_WEATHER_EVENTS, CURRENT_GAME_DATE } from './calendar-data.js';
import { playSound } from './common.js';
import { RELIGION_DATA } from './religion-data.js';
import { state } from './state.js'; // Needed to check research state
import { getTechTree, NATIONS, getAbsoluteDay } from './research-data.js';
import { HISTORICAL_TIMELINE } from './timeline-data.js';

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

    for (const nationKey in NATIONS) {
        const categories = ['WEAPONS', 'MAGIC', 'TECH', 'MEDICAL', 'ECONOMIC', 'POLITICAL'];
        
        categories.forEach(cat => {
            const tree = getTechTree(nationKey, cat, state.researchState, null);
            
            Object.values(tree).forEach(node => {
                if (node.status === 'researching') {
                    // Calculate days remaining based on current progress
                    const progressRemaining = 100 - node.progress;
                    const daysLeft = Math.ceil((node.cost * progressRemaining) / 100);
                    
                    const completionAbsoluteDay = currentDay + daysLeft;
                    
                    // Convert absolute day back to calendar date (Correctly handling 365 day year)
                    const yearsPassed = Math.floor(completionAbsoluteDay / daysPerYear);
                    const year = startYear + yearsPassed;
                    
                    let remainingDays = completionAbsoluteDay % daysPerYear;
                    let monthIndex = 0;
                    let day = 0;
                    
                    // Iterate through months to find correct date
                    const months = CALENDAR_DATA.months.values;
                    for (let i = 0; i < months.length; i++) {
                        if (remainingDays < months[i].days) {
                            monthIndex = i;
                            day = remainingDays + 1; // 1-indexed
                            break;
                        }
                        remainingDays -= months[i].days;
                    }

                    // Create a key for easy lookup: "Year-MonthIndex-Day"
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
        } else { // Handle winter wrapping around the year
            return monthIndex >= startMonth || monthIndex <= endMonth;
        }
    });
}

function generateWeatherForDay(year, monthIndex, day) {
    const season = getSeason(monthIndex);

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

function getTimelineEventsForDay(year, monthIndex, day) {
    const events = [];
    
    // We map the "Day X" from the timeline to the Current Month (6) for demo purposes
    if (year !== 1040 || monthIndex !== 6) return events;

    HISTORICAL_TIMELINE.forEach(entry => {
        if (entry.type === 'era_header') return;

        // Regex to find "Day X"
        const match = entry.date.match(/Day\s+(\d+)/);
        if (match) {
            const eventDay = parseInt(match[1], 10);
            if (eventDay === day) {
                 events.push({
                    type: 'history',
                    name: entry.title,
                    description: entry.description,
                    icon: '📜'
                });
            }
        }
    });

    return events;
}


function getEventsForDay(year, monthIndex, day) {
    const events = [];
    
    // Holidays
    const holiday = CALENDAR_DATA.holidays.values.find(h => h.month === monthIndex + 1 && h.day === day);
    if (holiday) events.push({ type: 'holiday', ...holiday });

    // Birthdays
    const birthday = CALENDAR_DATA.birthdays?.find(b => b.month === monthIndex + 1 && b.day === day);
    if (birthday) events.push({ type: 'birthday', ...birthday });

    // Tech Events (Using Cache)
    const dateKey = `${year}-${monthIndex}-${day}`;
    if (researchCompletionCache.has(dateKey)) {
        events.push(...researchCompletionCache.get(dateKey));
    }

    // Timeline Events
    const timelineEvents = getTimelineEventsForDay(year, monthIndex, day);
    events.push(...timelineEvents);

    // Religious Observances
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

// --- Rendering ---
function renderCalendar() {
    if (!gridElement) return;
    gridElement.innerHTML = '';
    
    const monthData = CALENDAR_DATA.months.values[viewDate.monthIndex];
    dateDisplay.textContent = `${monthData.name} ${viewDate.year}`;
    
    const monthStartOffset = (viewDate.year * 12 + viewDate.monthIndex) % 7;

    // Previous month fillers
    for (let i = 0; i < monthStartOffset; i++) {
        const filler = document.createElement('div');
        filler.className = 'calendar-day other-month';
        gridElement.appendChild(filler);
    }

    for (let day = 1; day <= monthData.days; day++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-day';
        
        // State Classes
        const isToday = (viewDate.year === CURRENT_GAME_DATE.year && viewDate.monthIndex === CURRENT_GAME_DATE.monthIndex && day === CURRENT_GAME_DATE.day);
        const isSelected = (viewDate.year === selectedDate.year && viewDate.monthIndex === selectedDate.monthIndex && day === selectedDate.day);
        
        if (isToday) cell.classList.add('current-day');
        if (isSelected) cell.classList.add('selected');

        // Data
        const weather = generateWeatherForDay(viewDate.year, viewDate.monthIndex, day);
        const events = getEventsForDay(viewDate.year, viewDate.monthIndex, day);

        // Special Dots logic
        const hasTech = events.some(e => e.type === 'tech');
        const techDot = hasTech ? `<span class="event-dot tech" title="Tech Breakthrough"></span>` : '';
        
        const hasHistory = events.some(e => e.type === 'history');
        const historyDot = hasHistory ? `<span class="event-dot history" title="Historical Event"></span>` : '';

        cell.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="day-weather-icon" title="${weather.desc} ${weather.temp}">${weather.icon}</div>
            <div class="day-events-dots">
                ${events.filter(e => e.type !== 'tech' && e.type !== 'history' && e.type !== 'ritual').map(e => `<span class="event-dot ${e.type}" title="${e.name}"></span>`).join('')}
                ${techDot}
                ${historyDot}
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
    renderCalendar(); // Re-render to update selected class
}

function renderSidebar() {
    const monthData = CALENDAR_DATA.months.values[selectedDate.monthIndex];
    const events = getEventsForDay(selectedDate.year, selectedDate.monthIndex, selectedDate.day);
    const weather = generateWeatherForDay(selectedDate.year, selectedDate.monthIndex, selectedDate.day);

    selectedDateHeader.textContent = `${monthData.name} ${selectedDate.day}, ${selectedDate.year}`;
    selectedDateWeather.textContent = weather.icon;
    selectedDateWeather.title = weather.desc;

    let detailsHTML = `
        <div class="weather-details">
            <span class="temp-display">${weather.temp}</span>
            <span class="desc-display">${weather.desc}</span>
        </div>
    `;

    // Filter out rituals from the main detail list to avoid clutter, unless it's the only thing
    const displayEvents = events.filter(e => e.type !== 'ritual');
    
    if (displayEvents.length === 0 && events.length === 0) {
        detailsHTML += `<p class="placeholder-text">No significant events recorded for this date.</p>`;
    } else {
        // Show non-ritual events
        detailsHTML += displayEvents.map(e => `
            <div class="detail-item ${e.type}">
                <span class="detail-type">${e.type === 'tech' ? '🔬 Research' : (e.type === 'history' ? '📜 Timeline' : e.type)}</span>
                <span class="detail-title">${e.name}</span>
                <span class="detail-desc">${e.description}</span>
            </div>
        `).join('');
        
        // Summarize rituals
        const ritualCount = events.length - displayEvents.length;
        if (ritualCount > 0) {
             detailsHTML += `<div class="detail-item ritual"><span class="detail-title">${ritualCount} Liturgical Observances</span><span class="detail-desc">Various religious rites are observed today.</span></div>`;
        }
    }
    dayDetailContent.innerHTML = detailsHTML;

    // Upcoming Events (Next 45 days)
    renderUpcoming();
}

function renderUpcoming() {
    let html = '';
    let count = 0;
    
    // Scan forward from current game date
    let checkYear = CURRENT_GAME_DATE.year;
    let checkMonth = CURRENT_GAME_DATE.monthIndex;
    let checkDay = CURRENT_GAME_DATE.day + 1; 

    // Loop for next 45 days
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
        // Filter out rituals for upcoming to avoid clutter, prioritize history/holidays/tech
        const notableEvents = events.filter(e => e.type !== 'ritual');

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

// --- Search Functionality ---
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

        // Search Holidays
        CALENDAR_DATA.holidays.values.forEach(h => {
            if (h.name.toLowerCase().includes(query)) {
                matches.push({ ...h, type: 'holiday' });
            }
        });

        // Search Birthdays
        CALENDAR_DATA.birthdays.forEach(b => {
            if (b.name.toLowerCase().includes(query)) {
                matches.push({ ...b, type: 'birthday' });
            }
        });
        
        // Search Research (from cache)
        for (const [dateStr, events] of researchCompletionCache) {
            events.forEach(e => {
                if (e.name.toLowerCase().includes(query)) {
                    const [y, m, d] = dateStr.split('-').map(Number);
                     matches.push({
                         name: e.name,
                         day: d,
                         month: m + 1,
                         year: y,
                         type: 'tech'
                     });
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
                    // Jump to date
                    viewDate.monthIndex = match.month - 1;
                    viewDate.year = match.year || CURRENT_GAME_DATE.year; 
                    selectedDate = { year: viewDate.year, monthIndex: viewDate.monthIndex, day: match.day };
                    
                    renderCalendar();
                    renderSidebar();
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

    // Hide results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}


// --- Interaction ---
function setupListeners() {
    document.getElementById('prev-month').addEventListener('click', () => {
        viewDate.monthIndex--;
        if (viewDate.monthIndex < 0) {
            viewDate.monthIndex = 11;
            viewDate.year--;
        }
        renderCalendar();
        playSound('click.mp3');
    });

    document.getElementById('next-month').addEventListener('click', () => {
        viewDate.monthIndex++;
        if (viewDate.monthIndex > 11) {
            viewDate.monthIndex = 0;
            viewDate.year++;
        }
        renderCalendar();
        playSound('click.mp3');
    });

    document.getElementById('prev-year').addEventListener('click', () => {
        viewDate.year--;
        renderCalendar();
        playSound('click.mp3');
    });

    document.getElementById('next-year').addEventListener('click', () => {
        viewDate.year++;
        renderCalendar();
        playSound('click.mp3');
    });

    document.getElementById('today-btn').addEventListener('click', () => {
        viewDate = { year: CURRENT_GAME_DATE.year, monthIndex: CURRENT_GAME_DATE.monthIndex };
        selectDay(CURRENT_GAME_DATE.day);
        playSound('confirm.mp3');
    });
    
    setupSearchListener();
}

function init() {
    // Pre-calculate research events
    calculateAllResearchCompletionDates();
    
    setupListeners();
    renderCalendar();
}

init();
