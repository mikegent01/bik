
import { CALENDAR_DATA, MAGICAL_WEATHER_EVENTS, CURRENT_GAME_DATE } from './calendar-data.js';
import { RELIGION_DATA } from './religion-data.js';
import { playSound } from './common.js';

// --- State ---
let viewDate = {
    year: CURRENT_GAME_DATE.year,
    monthIndex: CURRENT_GAME_DATE.monthIndex
};

let selectedDate = { ...CURRENT_GAME_DATE };

// --- Elements ---
const gridElement = document.getElementById('calendar-grid');
const dateDisplay = document.getElementById('current-date-display');
const dayDetailContent = document.getElementById('selected-day-content');
const selectedDateHeader = document.getElementById('selected-date-header');
const selectedDateWeather = document.getElementById('selected-date-weather');
const upcomingList = document.getElementById('upcoming-events-list');

// --- Helpers ---
function getSeededRandom(seed) {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function generateWeather(year, monthIndex, day) {
    const monthData = CALENDAR_DATA.months.values[monthIndex];
    const season = CALENDAR_DATA.seasons.values.find(s => {
        const start = s.monthStart - 1;
        const end = s.monthEnd - 1;
        return (start <= end) ? (monthIndex >= start && monthIndex <= end) : (monthIndex >= start || monthIndex <= end);
    });

    const seed = year * 10000 + (monthIndex + 1) * 100 + day;
    const rand = getSeededRandom(seed);
    
    if (getSeededRandom(seed + 2) < 0.1 && MAGICAL_WEATHER_EVENTS.length > 0) {
        const magicalIndex = Math.floor(getSeededRandom(seed + 3) * MAGICAL_WEATHER_EVENTS.length);
        return { ...MAGICAL_WEATHER_EVENTS[magicalIndex], isMagical: true, temp: "??°" };
    }

    let icons = ['☀️', '🌤️', '☁️', '🌦️', '🌧️'];
    if (season.name.includes('Winter')) icons = ['❄️', '🌨️', '☁️', '🥶', '☀️'];
    if (season.name.includes('Summer')) icons = ['☀️', '☀️', '🌤️', '⛈️', '☁️'];
    
    const icon = icons[Math.floor(rand * icons.length)];
    const baseTemp = season.name.includes('Winter') ? -5 : (season.name.includes('Summer') ? 25 : 15);
    const temp = Math.floor(baseTemp + (getSeededRandom(seed+1) * 10) - 5);
    
    return { icon, temp: `${temp}°`, desc: "Normal", isMagical: false };
}

function getEventsForDay(monthIndex, day) {
    const events = [];
    
    // Holidays
    const holiday = CALENDAR_DATA.holidays.values.find(h => h.month === monthIndex + 1 && h.day === day);
    if (holiday) events.push({ type: 'holiday', ...holiday });

    // Birthdays
    const birthday = CALENDAR_DATA.birthdays?.find(b => b.month === monthIndex + 1 && b.day === day);
    if (birthday) events.push({ type: 'birthday', ...birthday });

    // Religious Observances
    // Determine day of week. Assuming year 0 started on day 0 (Soldas) for simplicity of calculation
    // Total days passed approx calculation or simplified modular arithmetic
    const dayOfWeekIndex = (day - 1) % 7; // Simple cyclical for this game world logic
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
    
    // Simple offset logic: Month 1 Day 1 is always index 0 for simplicity in this game world unless complicated math is desired.
    // Let's add a fake offset based on year/month to make it look dynamic
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
        const weather = generateWeather(viewDate.year, viewDate.monthIndex, day);
        const events = getEventsForDay(viewDate.monthIndex, day);

        cell.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="day-weather-icon" title="${weather.desc} ${weather.temp}">${weather.icon}</div>
            <div class="day-events-dots">
                ${events.map(e => `<span class="event-dot ${e.type}" title="${e.name}"></span>`).join('')}
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
    const events = getEventsForDay(selectedDate.monthIndex, selectedDate.day);
    const weather = generateWeather(selectedDate.year, selectedDate.monthIndex, selectedDate.day);

    selectedDateHeader.textContent = `${monthData.name} ${selectedDate.day}, ${selectedDate.year}`;
    selectedDateWeather.textContent = weather.icon;
    selectedDateWeather.title = weather.desc;

    let detailsHTML = `
        <div class="weather-details">
            <span class="temp-display">${weather.temp}</span>
            <span class="desc-display">${weather.desc}</span>
        </div>
    `;

    if (events.length === 0) {
        detailsHTML += `<p class="placeholder-text">No significant events recorded for this date.</p>`;
    } else {
        detailsHTML += events.map(e => `
            <div class="detail-item ${e.type}">
                <span class="detail-type">${e.type}</span>
                <span class="detail-title">${e.name}</span>
                <span class="detail-desc">${e.description}</span>
            </div>
        `).join('');
    }
    dayDetailContent.innerHTML = detailsHTML;

    // Upcoming Events (Next 30 days)
    renderUpcoming();
}

function renderUpcoming() {
    let html = '';
    let count = 0;
    
    // Scan forward from current game date (not selected date)
    let checkYear = CURRENT_GAME_DATE.year;
    let checkMonth = CURRENT_GAME_DATE.monthIndex;
    let checkDay = CURRENT_GAME_DATE.day + 1; // Start tomorrow

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

        const events = getEventsForDay(checkMonth, checkDay);
        // Filter out rituals for upcoming list to reduce noise, keep holidays/birthdays
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

    if (html === '') html = '<li class="event-list-item" style="justify-content:center; color:var(--text-secondary); font-style:italic;">No upcoming holidays or birthdays soon.</li>';
    upcomingList.innerHTML = html;
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
}

function init() {
    setupListeners();
    renderCalendar();
}

init();
