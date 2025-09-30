
import { CALENDAR_DATA, MAGICAL_WEATHER_EVENTS, CURRENT_GAME_DATE } from './calendar-data.js';
import { playSound } from './common.js';

let displayedDate = {
    year: CURRENT_GAME_DATE.year,
    monthIndex: CURRENT_GAME_DATE.monthIndex
};

let selectedDate = { ...CURRENT_GAME_DATE };
let currentView = 'monthly'; // 'monthly', 'weekly', 'yearly'

/**
 * Generates a pseudo-random number from a seed.
 * @param {number} seed - The seed value.
 * @returns {number} A random number between 0 and 1.
 */
function getSeededRandom(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
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


function setupEventListeners() {
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
                    // If clicking the currently active view, reset to the current game date.
                    displayedDate = { year: CURRENT_GAME_DATE.year, monthIndex: CURRENT_GAME_DATE.monthIndex };
                    selectedDate = { ...CURRENT_GAME_DATE };
                } else {
                    currentView = newView;
                }
                
                renderView();
            }
        });
    }
    
    const navActions = {
        'prev-year': () => { 
            displayedDate.year--;
            selectedDate.year = displayedDate.year;
        },
        'next-year': () => { 
            displayedDate.year++; 
            selectedDate.year = displayedDate.year;
        },
        'prev-month': () => {
            if (currentView === 'weekly') {
                const newDate = new Date(selectedDate.year, selectedDate.monthIndex, selectedDate.day - 7);
                selectedDate = { year: newDate.getFullYear(), monthIndex: newDate.getMonth(), day: newDate.getDate() };
                displayedDate = { year: selectedDate.year, monthIndex: selectedDate.monthIndex };
            } else {
                 displayedDate.monthIndex--;
                if (displayedDate.monthIndex < 0) {
                    displayedDate.monthIndex = 11;
                    displayedDate.year--;
                }
                selectedDate.year = displayedDate.year;
                selectedDate.monthIndex = displayedDate.monthIndex;
            }
        },
        'next-month': () => {
            if (currentView === 'weekly') {
                 const newDate = new Date(selectedDate.year, selectedDate.monthIndex, selectedDate.day + 7);
                 selectedDate = { year: newDate.getFullYear(), monthIndex: newDate.getMonth(), day: newDate.getDate() };
                 displayedDate = { year: selectedDate.year, monthIndex: selectedDate.monthIndex };
            } else {
                displayedDate.monthIndex++;
                if (displayedDate.monthIndex > 11) {
                    displayedDate.monthIndex = 0;
                    displayedDate.year++;
                }
                selectedDate.year = displayedDate.year;
                selectedDate.monthIndex = displayedDate.monthIndex;
            }
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
}

function init() {
    renderView();
    renderMoons(CURRENT_GAME_DATE.year, CURRENT_GAME_DATE.monthIndex, CURRENT_GAME_DATE.day);
    renderSidebar(displayedDate.year, displayedDate.monthIndex);
    setupEventListeners();
}

init();
