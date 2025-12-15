
import { CALENDAR_DATA, MAGICAL_WEATHER_EVENTS, CURRENT_GAME_DATE, MOON_PHASES, GUILD_HOLIDAYS } from './calendar-data.js';
import { playSound } from './common.js';
import { RELIGION_DATA } from './religion-data.js';
import { state } from './state.js';
import { getTechTree, NATIONS, getAbsoluteDay, calculateGlobalCycle, getGlobalTechAverages } from './research-data.js';
import { HISTORICAL_TIMELINE } from './timeline-data.js';
import { MAJOR_BATTLES } from './battlefield.js';
import { LORE_DATA } from './lore.js';  
import { WAHBOOK_POSTS } from './assembly-data.js'; 
import { REWARDS_DATA } from './quests/quests-main.js';  
import { PLAGUE_DATA } from './plagues-data.js'; 
import { QUEST_DATA, QUEST_STATUS } from './quests-data.js';
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
let rewardsCache = null;

function buildRewardsCache() {
    rewardsCache = REWARDS_DATA.getByDate();
}

function getRewardEventsForDay(year, monthIndex, day) {
    if (!rewardsCache) buildRewardsCache();
    
    const key = `${year}-${monthIndex}-${day}`;
    const dayData = rewardsCache[key];
    
    if (!dayData) return [];
    
    return dayData.rewards.map(reward => ({
        type: 'reward_earned',
        name: reward.name,
        description: reward.description,
        icon: reward.icon,
        questTitle: reward.questTitle,
        rewardType: reward.type,
        category: reward.category,
        condition: reward.condition
    }));
}

function renderRewardsPanel() {
    const container = document.getElementById('rewards-panel');
    if (!container) return;
    
    const rewardsByDate = REWARDS_DATA.getByDate();
    const dates = Object.keys(rewardsByDate).sort((a, b) => {
        const [yA, mA, dA] = a.split('-').map(Number);
        const [yB, mB, dB] = b.split('-').map(Number);
        return (yB * 10000 + mB * 100 + dB) - (yA * 10000 + mA * 100 + dA);
    });
    
    if (dates.length === 0) {
        container.innerHTML = `
            <div class="rewards-empty">
                <span class="empty-icon">🎁</span>
                <p>No rewards earned yet!</p>
                <p class="subtext">Complete quests to earn rewards.</p>
            </div>
        `;
        return;
    }
    
    let html = `<div class="rewards-scroll-container">`;
    
    dates.forEach(dateKey => {
        const dayData = rewardsByDate[dateKey];
        const monthData = CALENDAR_DATA.months.values[dayData.date.monthIndex];
        const dateLabel = `${monthData.name} ${dayData.date.day}, ${dayData.date.year}`;
        
        html += `
            <div class="rewards-date-group" data-date="${dateKey}">
                <div class="rewards-date-header">
                    <span class="date-badge">
                        <span class="badge-day">${dayData.date.day}</span>
                        <span class="badge-month">${monthData.abbreviation}</span>
                    </span>
                    <span class="date-label">${dateLabel}</span>
                    <span class="reward-count">${dayData.rewards.length} reward${dayData.rewards.length > 1 ? 's' : ''}</span>
                </div>
                <div class="rewards-list">
        `;
        
        dayData.rewards.forEach(reward => {
            const earnedClass = reward.earned ? 'earned' : 'pending';
            const conditionalBadge = reward.category === 'conditional' 
                ? `<span class="conditional-badge" title="${reward.condition}">⚡ Conditional</span>` 
                : '';
            
            html += `
                <div class="reward-item ${earnedClass} ${reward.type}">
                    <span class="reward-icon">${reward.icon}</span>
                    <div class="reward-info">
                        <span class="reward-name">${reward.name}</span>
                        ${conditionalBadge}
                        <span class="reward-desc">${reward.description}</span>
                        <span class="reward-source">From: ${reward.questTitle}</span>
                    </div>
                    <span class="reward-type-badge ${reward.type}">${reward.type.toUpperCase()}</span>
                </div>
            `;
        });
        
        html += `</div></div>`;
    });
    
    html += `</div>`;
    
    // Add summary stats
    const allRewards = REWARDS_DATA.extractAll();
    const earned = allRewards.filter(r => r.earned);
    const pending = allRewards.filter(r => !r.earned);
    const totalXP = earned.filter(r => r.type === 'xp').reduce((sum, r) => sum + (r.amount || 0), 0);
    
    html = `
        <div class="rewards-summary">
            <div class="summary-stat earned">
                <span class="stat-value">${earned.length}</span>
                <span class="stat-label">Earned</span>
            </div>
            <div class="summary-stat pending">
                <span class="stat-value">${pending.length}</span>
                <span class="stat-label">Pending</span>
            </div>
            <div class="summary-stat xp">
                <span class="stat-value">${totalXP.toLocaleString()}</span>
                <span class="stat-label">Total XP</span>
            </div>
        </div>
    ` + html;
    
    container.innerHTML = html;
    
    // Add click listeners to navigate to dates
    container.querySelectorAll('.rewards-date-group').forEach(group => {
        group.querySelector('.rewards-date-header').addEventListener('click', () => {
            const [year, monthIndex, day] = group.dataset.date.split('-').map(Number);
            viewDate = { year, monthIndex };
            selectedDate = { year, monthIndex, day };
            renderCalendar();
            playSound('click.mp3');
        });
    });
}
function calculateAllResearchCompletionDates() {
    researchCompletionCache.clear();
    if (!state || !state.researchState) return;

    const currentDay = getAbsoluteDay();
    const startYear = 1035;
    const daysPerYear = 365; 

    const globalCycle = calculateGlobalCycle(WAHBOOK_POSTS);

    for (const nationKey in NATIONS) {
        const categories = ['WEAPONS', 'MAGIC', 'TECH', 'MEDICAL', 'ECONOMIC', 'POLITICAL'];
        
        categories.forEach(cat => {
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
        if (startMonth <= endMonth) return monthIndex >= startMonth && monthIndex <= endMonth;
        return monthIndex >= startMonth || monthIndex <= endMonth;
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
        return { temp: `??°C`, icon: magicalEvent.icon, desc: magicalEvent.name, isMagical: true };
    }

    let baseTemp, tempVariation, weatherOptions;
    switch (season.name) {
        case 'Golden Summer': baseTemp = 24; tempVariation = 10; weatherOptions = [{ icon: '☀️', desc: 'Clear and Sunny', chance: 0.6 }, { icon: '🌤️', desc: 'Partly Cloudy', chance: 0.2 }, { icon: '☁️', desc: 'Overcast', chance: 0.1 }, { icon: '🌦️', desc: 'Scattered Showers', chance: 0.07 }, { icon: '⛈️', desc: 'Afternoon Thunderstorm', chance: 0.03 }]; break;
        case 'Hoarfrost Winter': baseTemp = -5; tempVariation = 8; weatherOptions = [{ icon: '❄️', desc: 'Light Snowfall', chance: 0.4 }, { icon: '🥶', desc: 'Bitterly Cold', chance: 0.3 }, { icon: '☁️', desc: 'Grey and Overcast', chance: 0.2 }, { icon: '☀️', desc: 'Crisp and Clear', chance: 0.1 }]; break;
        default: baseTemp = 12; tempVariation = 12; weatherOptions = [{ icon: '🌤️', desc: 'Mild and Pleasant', chance: 0.4 }, { icon: '☁️', desc: 'Cloudy Skies', chance: 0.25 }, { icon: '🌦️', desc: 'Light Showers', chance: 0.2 }, { icon: '💨', desc: 'Windy', chance: 0.15 }]; break;
    }
    const temperature = Math.floor(baseTemp + (tempRand * tempVariation) - (tempVariation / 2));
    let cumulativeChance = 0;
    const chosenWeather = weatherOptions.find(w => { cumulativeChance += w.chance; return rand <= cumulativeChance; }) || weatherOptions[0];
    return { temp: `${temperature}°C`, ...chosenWeather };
}

function getTimelineEventsForDay(year, monthIndex, day) {
    const events = [];
    HISTORICAL_TIMELINE.forEach(entry => {
        if (entry.type === 'era_header') return;
        let isMatch = false;
        if (typeof entry.date === 'object') {
             if (entry.date.year === year && entry.date.monthIndex === monthIndex && entry.date.day === day) isMatch = true;
        } else if (typeof entry.date === 'string') {
            const match = entry.date.match(/Day\s+(\d+)/);
            if (match) {
                const eventDay = parseInt(match[1], 10);
                if (year === CURRENT_GAME_DATE.year && monthIndex === CURRENT_GAME_DATE.monthIndex && day === eventDay) isMatch = true;
            }
        }
        if (isMatch) events.push({ type: 'history', name: entry.title, description: entry.description, icon: '📜' });
    });
    return events;
}

function getBattleEventsForDay(year, monthIndex, day) {
    const events = [];
    MAJOR_BATTLES.forEach(battle => {
        let isBattleDay = false;
        if (typeof battle.date === 'object') {
            if (battle.date.year === year && battle.date.monthIndex === monthIndex && battle.date.day === day) isBattleDay = true;
        } else if (typeof battle.date === 'string') {
            const match = battle.date.match(/Day\s+(\d+)/);
            if (match) {
                const battleDay = parseInt(match[1], 10);
                if (year === CURRENT_GAME_DATE.year && monthIndex === CURRENT_GAME_DATE.monthIndex && day === battleDay) isBattleDay = true;
            }
        }
        if (isBattleDay) events.push({ type: 'battle', name: `Battle: ${battle.name}`, description: `${battle.outcome} - ${battle.conflict}`, icon: '⚔️' });
        
        const isOngoing = battle.outcome.includes('Ongoing') || (typeof battle.date === 'string' && battle.date === 'Ongoing');
        if (isOngoing && year === CURRENT_GAME_DATE.year && monthIndex === CURRENT_GAME_DATE.monthIndex && day === CURRENT_GAME_DATE.day) {
             events.push({ type: 'battle_ongoing', name: `Ongoing Conflict: ${battle.name}`, description: "Active combat operations reported.", icon: '🛡️' });
        }
    });
    return events;
}

function getRumorEventsForDay(year, monthIndex, day) {
    const events = [];
    LORE_DATA.rumors.forEach(rumor => {
        if (!rumor.date) return;
        if (year === rumor.date.year && monthIndex === rumor.date.monthIndex && day === rumor.date.day) {
            events.push({ type: 'rumor_start', name: `Rumor: ${rumor.title}`, description: "New intel circulating on the network.", icon: '📣' });
        }
        const startAbsolute = (rumor.date.year * 365) + (rumor.date.monthIndex * 30) + rumor.date.day;
        const currentCheckAbsolute = (year * 365) + (monthIndex * 30) + day;
        if (currentCheckAbsolute === startAbsolute + 14) {
             events.push({ type: 'rumor_end', name: `Trend Expiry: ${rumor.title}`, description: "Public interest in this rumor has faded.", icon: '📉' });
        }
    });
    return events;
}

function getQuestEventsForDay(year, monthIndex, day) {
    const events = [];
    Object.values(QUEST_DATA).forEach(quest => {
        if (quest.dates?.added) {
             if (quest.dates.added.year === year && quest.dates.added.monthIndex === monthIndex && quest.dates.added.day === day) {
                events.push({ type: 'quest_start', name: `Quest: ${quest.title}`, description: "New mission available.", icon: '✨' });
             }
        }
        if (quest.dates?.deadline) {
             if (quest.dates.deadline.year === year && quest.dates.deadline.monthIndex === monthIndex && quest.dates.deadline.day === day) {
                events.push({ type: 'quest_deadline', name: `Deadline: ${quest.title}`, description: "Mission expiry or critical event.", icon: '⏰' });
             }
        }
        if (quest.milestones) {
            quest.milestones.forEach(m => {
                if (m.completedDate) {
                    if (m.completedDate.year === year && m.completedDate.monthIndex === monthIndex && m.completedDate.day === day) {
                         events.push({ type: 'quest_complete', name: `Completed: ${m.title}`, description: `Milestone in '${quest.title}' achieved.`, icon: '✅' });
                    }
                }
            });
        }
    });
    return events;
}


function getPlagueEventsForDay(year, monthIndex, day) {
    const events = [];
    const season = getSeason(monthIndex);
    const techAverages = getGlobalTechAverages();
    
    PLAGUE_DATA.forEach(plague => {
        if (plague.active_seasons.includes(season.name) || plague.active_seasons.includes("All")) {
            const seed = year * 10000 + (monthIndex + 1) * 100 + day + plague.name.length;
            if (getSeededRandom(seed) < 0.05) { 
                 events.push({
                    type: 'plague_outbreak',
                    name: `Outbreak: ${plague.name}`,
                    description: `Reports of ${plague.name} clusters in ${plague.region}.`,
                    icon: plague.icon
                });
            }
        }

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

function getEventsForDay(year, monthIndex, day) {
    const events = [];
    const holiday = CALENDAR_DATA.holidays.values.find(h => h.month === monthIndex + 1 && h.day === day);
    if (holiday) events.push({ type: 'holiday', ...holiday });
    
    const guildHoliday = GUILD_HOLIDAYS.find(h => h.month === monthIndex + 1 && h.day === day);
    if (guildHoliday) events.push({ type: 'guild_holiday', ...guildHoliday });

    const birthday = CALENDAR_DATA.birthdays?.find(b => b.month === monthIndex + 1 && b.day === day);
    if (birthday) events.push({ type: 'birthday', ...birthday });
    const dateKey = `${year}-${monthIndex}-${day}`;
    if (researchCompletionCache.has(dateKey)) events.push(...researchCompletionCache.get(dateKey));

    events.push(...getTimelineEventsForDay(year, monthIndex, day));
    events.push(...getBattleEventsForDay(year, monthIndex, day));
    events.push(...getRumorEventsForDay(year, monthIndex, day));
    events.push(...getPlagueEventsForDay(year, monthIndex, day));
    events.push(...getQuestEventsForDay(year, monthIndex, day));
    events.push(...getRewardEventsForDay(year, monthIndex, day));
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
    const absDay = ((year - 1035) * 365) + (monthIndex * 30) + day;
    const phaseIndex = Math.floor((absDay % 28) / 28 * MOON_PHASES.length) % MOON_PHASES.length;
    return MOON_PHASES[phaseIndex];
}

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
const hasReward = events.some(e => e.type === 'reward_earned');
const rewardDot = hasReward ? `<span class="event-dot reward-earned" title="Rewards Earned"></span>` : '';
        // Dot Generators
        const hasTech = events.some(e => e.type === 'tech');
        const techDot = hasTech ? `<span class="event-dot tech" title="Tech/Cure"></span>` : '';
        const hasHistory = events.some(e => e.type === 'history');
        const historyDot = hasHistory ? `<span class="event-dot history" title="History"></span>` : '';
        const hasBattle = events.some(e => e.type === 'battle');
        const battleDot = hasBattle ? `<span class="event-dot battle" title="Battle"></span>` : '';
        const hasRumorStart = events.some(e => e.type === 'rumor_start');
        const rumorStartDot = hasRumorStart ? `<span class="event-dot rumor-start" title="Rumor"></span>` : '';
        const hasRumorEnd = events.some(e => e.type === 'rumor_end');
        const rumorEndDot = hasRumorEnd ? `<span class="event-dot rumor-end" title="Expiry"></span>` : '';
        const hasPlague = events.some(e => e.type === 'plague_outbreak');
        const plagueDot = hasPlague ? `<span class="event-dot plague_outbreak" title="Plague"></span>` : '';
        const hasGuild = events.some(e => e.type === 'guild_holiday');
        const guildDot = hasGuild ? `<span class="event-dot guild_holiday" title="Guild Event"></span>` : '';
        
        // Quest Dots
        const hasQuestStart = events.some(e => e.type === 'quest_start');
        const questStartDot = hasQuestStart ? `<span class="event-dot quest-start" title="Quest Available"></span>` : '';
        const hasQuestDeadline = events.some(e => e.type === 'quest_deadline');
        const questDeadlineDot = hasQuestDeadline ? `<span class="event-dot quest-deadline" title="Deadline"></span>` : '';
        const hasQuestComplete = events.some(e => e.type === 'quest_complete');
        const questCompleteDot = hasQuestComplete ? `<span class="event-dot quest-complete" title="Milestone Complete"></span>` : '';

        // Legislation Dot
        const hasLegislation = events.some(e => e.type === 'legislation');
        const legislationDot = hasLegislation ? `<span class="event-dot legislation" title="Legislation"></span>` : '';

        cell.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="day-weather-icon" title="${weather.desc} ${weather.temp}">${weather.icon}</div>
            <div class="day-moon-icon" title="${moonPhase.name}">${moonPhase.icon}</div>
            <div class="day-events-dots">
                ${events.filter(e => !['tech', 'history', 'ritual', 'battle', 'battle_ongoing', 'rumor_start', 'rumor_end', 'plague_outbreak', 'guild_holiday', 'quest_start', 'quest_deadline', 'quest_complete', 'legislation'].includes(e.type)).map(e => `<span class="event-dot ${e.type}" title="${e.name}"></span>`).join('')}
                ${techDot} ${historyDot} ${battleDot} ${rumorStartDot} ${rumorEndDot} ${plagueDot} ${guildDot}
                ${questStartDot} ${questDeadlineDot} ${questCompleteDot}
                ${legislationDot} ${rewardDot}
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

function calculateOrbForecast(weather, moonPhase) {
    if (weather.desc.includes('Storm') || weather.desc.includes('Rain') || weather.isMagical) {
        return { status: 'Turbulent', color: '#f85149', icon: '🔮⚡' };
    } else if (weather.desc.includes('Clear') && (moonPhase.name.includes('Full') || moonPhase.name.includes('Glazed'))) {
        return { status: 'Crystal Clear', color: '#00ffff', icon: '🔮✨' };
    } else if (weather.desc.includes('Clear')) {
        return { status: 'Stable', color: '#58a6ff', icon: '🔮' };
    } else {
        return { status: 'Fluctuating', color: '#e3b341', icon: '🔮〰️' };
    }
}

function renderSidebar() {
    const monthData = CALENDAR_DATA.months.values[selectedDate.monthIndex];
    const events = getEventsForDay(selectedDate.year, selectedDate.monthIndex, selectedDate.day);
    const weather = generateWeatherForDay(selectedDate.year, selectedDate.monthIndex, selectedDate.day);
    const moonPhase = calculateMoonPhase(selectedDate.year, selectedDate.monthIndex, selectedDate.day);
    const orbForecast = calculateOrbForecast(weather, moonPhase); 

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
        <div class="weather-details" style="margin-top:8px; border-top:1px dashed var(--border-color); padding-top:8px; background: rgba(138, 43, 226, 0.05);">
            <span class="desc-display" style="width:100%; display:flex; justify-content:space-between;">
                <span>${orbForecast.icon} Scrying Forecast:</span>
                <strong style="color:${orbForecast.color}">${orbForecast.status}</strong>
            </span>
        </div>
    `;
    const displayEvents = events.filter(e => e.type !== 'ritual' && e.type !== 'battle_ongoing');
    const ritualEvents = events.filter(e => e.type === 'ritual');
    const trendingEvents = events.filter(e => e.type === 'rumor_start' || e.type === 'battle' || e.type === 'battle_ongoing' || e.type === 'legislation');
    const dayRewards = REWARDS_DATA.getForDay(selectedDate.year, selectedDate.monthIndex, selectedDate.day);
    
    if (dayRewards.length > 0) {
        detailsHTML += `
            <div class="day-rewards-section">
                <h5>🎁 Rewards Earned</h5>
                <div class="day-rewards-list">
                    ${dayRewards.map(reward => `
                        <div class="reward-item compact ${reward.type}">
                            <span class="reward-icon">${reward.icon}</span>
                            <div class="reward-info">
                                <span class="reward-name">${reward.name}</span>
                                <span class="reward-desc">${reward.description}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    if (displayEvents.length === 0 && ritualEvents.length === 0 && trendingEvents.length === 0) {
        detailsHTML += `<p class="placeholder-text">No significant events recorded for this date.</p>`;
    } else {
        detailsHTML += displayEvents.map(e => `
            <div class="detail-item ${e.type}">
                <span class="detail-type">${e.type.toUpperCase().replace('_', ' ')}</span>
                <span class="detail-title">${e.name}</span>
                <span class="detail-desc">${e.description}</span>
            </div>
        `).join('');
        if (ritualEvents.length > 0) {
             detailsHTML += `<details class="liturgy-details"><summary>Liturgical Observances (${ritualEvents.length})</summary><ul>${ritualEvents.map(r => `<li><strong>${r.religion}:</strong> ${r.description}</li>`).join('')}</ul></details>`;
        }
        if (trendingEvents.length > 0) {
            detailsHTML += `<div class="trending-topics-container"><h5>Trending Topics</h5>${trendingEvents.map(t => `<div class="trending-topic-item"><span class="topic-icon">${t.icon}</span><span><strong>${t.name.replace(/Rumor: |Battle: /, '')}</strong></span></div>`).join('')}</div>`;
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
            if (checkMonth > 11) { checkMonth = 0; checkYear++; }
        }
        const events = getEventsForDay(checkYear, checkMonth, checkDay);
        const notableEvents = events.filter(e => e.type !== 'ritual' && e.type !== 'battle_ongoing');
        if (notableEvents.length > 0) {
            notableEvents.forEach(e => {
                if (count < 5) {
                    html += `<li class="event-list-item"><div class="event-date-badge"><span class="badge-day">${checkDay}</span><span class="badge-month">${CALENDAR_DATA.months.values[checkMonth].abbreviation}</span></div><div class="event-info-brief"><strong>${e.name}</strong><span class="dot ${e.type}" style="margin-left:6px; vertical-align:middle;"></span></div></li>`;
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
        if (query.length < 2) { searchResults.style.display = 'none'; return; }
        const matches = [];
        CALENDAR_DATA.holidays.values.forEach(h => { if (h.name.toLowerCase().includes(query)) matches.push({ ...h, type: 'holiday' }); });
        GUILD_HOLIDAYS.forEach(h => { if (h.name.toLowerCase().includes(query)) matches.push({ ...h, type: 'guild_holiday' }); });
        CALENDAR_DATA.birthdays.forEach(b => { if (b.name.toLowerCase().includes(query)) matches.push({ ...b, type: 'birthday' }); });
        for (const [dateStr, events] of researchCompletionCache) {
            events.forEach(e => { if (e.name.toLowerCase().includes(query)) { const [y, m, d] = dateStr.split('-').map(Number); matches.push({ name: e.name, day: d, month: m + 1, year: y, type: 'tech' }); } });
        }
        if (matches.length > 0) {
            matches.forEach(match => {
                const li = document.createElement('li');
                li.className = 'event-list-item';
                li.style.cursor = 'pointer';
                const monthAbbr = CALENDAR_DATA.months.values[match.month - 1]?.abbreviation || '???';
                li.innerHTML = `<div class="event-date-badge"><span class="badge-day">${match.day}</span><span class="badge-month">${monthAbbr}</span></div><div class="event-info-brief"><strong>${match.name}</strong><span class="dot ${match.type}" style="margin-left:6px; vertical-align:middle;"></span></div>`;
                li.addEventListener('click', () => {
                    viewDate.monthIndex = match.month - 1; viewDate.year = match.year || CURRENT_GAME_DATE.year; selectedDate = { year: viewDate.year, monthIndex: viewDate.monthIndex, day: match.day };
                    renderCalendar(); searchResults.style.display = 'none'; searchInput.value = ''; playSound('click.mp3');
                });
                searchResults.appendChild(li);
            });
            searchResults.style.display = 'block';
        } else { searchResults.innerHTML = '<li style="padding:8px; color:var(--text-secondary);">No results found.</li>'; searchResults.style.display = 'block'; }
    });
    document.addEventListener('click', (e) => { if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) { searchResults.style.display = 'none'; } });
}

function setupListeners() {
    document.getElementById('prev-month').addEventListener('click', () => { viewDate.monthIndex--; if (viewDate.monthIndex < 0) { viewDate.monthIndex = 11; viewDate.year--; } renderCalendar(); playSound('click.mp3'); });
    document.getElementById('next-month').addEventListener('click', () => { viewDate.monthIndex++; if (viewDate.monthIndex > 11) { viewDate.monthIndex = 0; viewDate.year++; } renderCalendar(); playSound('click.mp3'); });
    document.getElementById('prev-year').addEventListener('click', () => { viewDate.year--; renderCalendar(); playSound('click.mp3'); });
    document.getElementById('next-year').addEventListener('click', () => { viewDate.year++; renderCalendar(); playSound('click.mp3'); });
    document.getElementById('today-btn').addEventListener('click', () => { viewDate = { year: CURRENT_GAME_DATE.year, monthIndex: CURRENT_GAME_DATE.monthIndex }; selectDay(CURRENT_GAME_DATE.day); playSound('confirm.mp3'); });
    setupSearchListener();
}

function init() {
    calculateAllResearchCompletionDates();
    buildRewardsCache(); // Add this line
    setupListeners();
    renderCalendar();
    renderRewardsPanel(); // Add this line
}

init();
