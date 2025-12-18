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

// ============================================
// STATE MANAGEMENT
// ============================================
const CalendarState = {
    viewDate: {
        year: CURRENT_GAME_DATE.year,
        monthIndex: CURRENT_GAME_DATE.monthIndex
    },
    selectedDate: { ...CURRENT_GAME_DATE },
    currentView: 'monthly',
    activeTab: 'events',
    filters: {
        holidays: true,
        quests: true,
        battles: true,
        research: true,
        plagues: true,
        rumors: true,
        rewards: true
    }
};

// ============================================
// CACHES
// ============================================
const Cache = {
    research: new Map(),
    rewards: null,
    events: new Map(),
    weather: new Map()
};

// ============================================
// EVENT TYPE CONFIGURATION
// ============================================
const EVENT_CONFIG = {
    holiday: { icon: '🎉', color: '#ef4444', label: 'Holiday', priority: 1 },
    guild_holiday: { icon: '⚔️', color: '#fbbf24', label: 'Guild', priority: 2 },
    birthday: { icon: '🎂', color: '#f472b6', label: 'Birthday', priority: 3 },
    tech: { icon: '🔬', color: '#3b82f6', label: 'Research', priority: 4 },
    history: { icon: '📜', color: '#f97316', label: 'History', priority: 5 },
    battle: { icon: '⚔️', color: '#dc2626', label: 'Battle', priority: 6 },
    battle_victory: { icon: '🏆', color: '#22c55e', label: 'Victory', priority: 6 },
    battle_defeat: { icon: '💀', color: '#7f1d1d', label: 'Defeat', priority: 6 },
    battle_ongoing: { icon: '🛡️', color: '#eab308', label: 'Ongoing', priority: 6 },
    rumor_start: { icon: '📣', color: '#ec4899', label: 'Rumor', priority: 7 },
    rumor_end: { icon: '📉', color: '#6b7280', label: 'Expired', priority: 8 },
    plague_outbreak: { icon: '☠️', color: '#84cc16', label: 'Plague', priority: 9 },
    plague_cure: { icon: '💊', color: '#22d3ee', label: 'Cure', priority: 10 },
    quest_start: { icon: '✨', color: '#fcd34d', label: 'New Quest', priority: 11 },
    quest_deadline: { icon: '⏰', color: '#f87171', label: 'Deadline', priority: 12 },
    quest_complete: { icon: '✅', color: '#4ade80', label: 'Complete', priority: 13 },
    quest_failed: { icon: '❌', color: '#991b1b', label: 'Failed', priority: 13 },
    reward_earned: { icon: '🎁', color: '#a855f7', label: 'Reward', priority: 14 },
    legislation: { icon: '📋', color: '#8b5cf6', label: 'Politics', priority: 15 },
    ritual: { icon: '🕯️', color: '#6366f1', label: 'Liturgy', priority: 16 }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================
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

function formatDate(year, monthIndex, day) {
    const month = CALENDAR_DATA.months.values[monthIndex];
    return `${month.name} ${day}, ${year}`;
}

function getDateKey(year, monthIndex, day) {
    return `${year}-${monthIndex}-${day}`;
}

function isToday(year, monthIndex, day) {
    return year === CURRENT_GAME_DATE.year && 
           monthIndex === CURRENT_GAME_DATE.monthIndex && 
           day === CURRENT_GAME_DATE.day;
}

function daysBetween(date1, date2) {
    const abs1 = date1.year * 365 + date1.monthIndex * 30 + date1.day;
    const abs2 = date2.year * 365 + date2.monthIndex * 30 + date2.day;
    return abs2 - abs1;
}

// ============================================
// WEATHER GENERATION
// ============================================
function generateWeatherForDay(year, monthIndex, day) {
    const cacheKey = getDateKey(year, monthIndex, day);
    if (Cache.weather.has(cacheKey)) return Cache.weather.get(cacheKey);

    const season = getSeason(monthIndex);
    const seed = year * 10000 + (monthIndex + 1) * 100 + day;
    const rand = getSeededRandom(seed);
    const tempRand = getSeededRandom(seed + 1);

    // Magical weather check
    if (getSeededRandom(seed + 2) < 0.08 && MAGICAL_WEATHER_EVENTS.length > 0) {
        const magicalIndex = Math.floor(getSeededRandom(seed + 3) * MAGICAL_WEATHER_EVENTS.length);
        const magicalEvent = MAGICAL_WEATHER_EVENTS[magicalIndex];
        const weather = { 
            temp: '??°C', 
            icon: magicalEvent.icon, 
            desc: magicalEvent.name, 
            isMagical: true,
            severity: 'extreme'
        };
        Cache.weather.set(cacheKey, weather);
        return weather;
    }

    const weatherProfiles = {
        'Golden Summer': {
            baseTemp: 24, variation: 10,
            options: [
                { icon: '☀️', desc: 'Clear and Sunny', chance: 0.6, severity: 'calm' },
                { icon: '🌤️', desc: 'Partly Cloudy', chance: 0.2, severity: 'calm' },
                { icon: '☁️', desc: 'Overcast', chance: 0.1, severity: 'mild' },
                { icon: '🌦️', desc: 'Scattered Showers', chance: 0.07, severity: 'moderate' },
                { icon: '⛈️', desc: 'Thunderstorm', chance: 0.03, severity: 'severe' }
            ]
        },
        'Hoarfrost Winter': {
            baseTemp: -5, variation: 8,
            options: [
                { icon: '❄️', desc: 'Light Snowfall', chance: 0.4, severity: 'moderate' },
                { icon: '🥶', desc: 'Bitterly Cold', chance: 0.3, severity: 'severe' },
                { icon: '☁️', desc: 'Grey Overcast', chance: 0.2, severity: 'mild' },
                { icon: '☀️', desc: 'Crisp and Clear', chance: 0.1, severity: 'calm' }
            ]
        },
        default: {
            baseTemp: 12, variation: 12,
            options: [
                { icon: '🌤️', desc: 'Mild and Pleasant', chance: 0.4, severity: 'calm' },
                { icon: '☁️', desc: 'Cloudy Skies', chance: 0.25, severity: 'mild' },
                { icon: '🌦️', desc: 'Light Showers', chance: 0.2, severity: 'moderate' },
                { icon: '💨', desc: 'Windy', chance: 0.15, severity: 'moderate' }
            ]
        }
    };

    const profile = weatherProfiles[season.name] || weatherProfiles.default;
    const temperature = Math.floor(profile.baseTemp + (tempRand * profile.variation) - (profile.variation / 2));
    
    let cumulative = 0;
    const chosen = profile.options.find(w => {
        cumulative += w.chance;
        return rand <= cumulative;
    }) || profile.options[0];

    const weather = {
        temp: `${temperature}°C`,
        icon: chosen.icon,
        desc: chosen.desc,
        severity: chosen.severity,
        isMagical: false
    };

    Cache.weather.set(cacheKey, weather);
    return weather;
}

function calculateMoonPhase(year, monthIndex, day) {
    const absDay = ((year - 1035) * 365) + (monthIndex * 30) + day;
    const phaseIndex = Math.floor((absDay % 28) / 28 * MOON_PHASES.length) % MOON_PHASES.length;
    return MOON_PHASES[phaseIndex];
}

function calculateOrbForecast(weather, moonPhase) {
    if (weather.severity === 'extreme' || weather.isMagical) {
        return { status: 'Turbulent', color: '#ef4444', icon: '🔮⚡', quality: 1 };
    }
    if (weather.severity === 'calm' && (moonPhase.name.includes('Full') || moonPhase.name.includes('Glazed'))) {
        return { status: 'Crystal Clear', color: '#22d3ee', icon: '🔮✨', quality: 5 };
    }
    if (weather.severity === 'calm') {
        return { status: 'Stable', color: '#3b82f6', icon: '🔮', quality: 4 };
    }
    if (weather.severity === 'severe') {
        return { status: 'Unstable', color: '#f97316', icon: '🔮💫', quality: 2 };
    }
    return { status: 'Fluctuating', color: '#eab308', icon: '🔮〰️', quality: 3 };
}

// ============================================
// EVENT GATHERING
// ============================================
function getEventsForDay(year, monthIndex, day) {
    const cacheKey = getDateKey(year, monthIndex, day);
    if (Cache.events.has(cacheKey)) return Cache.events.get(cacheKey);

    const events = [];

    // Holidays
    const holiday = CALENDAR_DATA.holidays.values.find(h => h.month === monthIndex + 1 && h.day === day);
    if (holiday) events.push({ type: 'holiday', ...holiday, outcome: 'neutral' });

    const guildHoliday = GUILD_HOLIDAYS.find(h => h.month === monthIndex + 1 && h.day === day);
    if (guildHoliday) events.push({ type: 'guild_holiday', ...guildHoliday, outcome: 'neutral' });

    // Birthdays
    const birthday = CALENDAR_DATA.birthdays?.find(b => b.month === monthIndex + 1 && b.day === day);
    if (birthday) events.push({ type: 'birthday', ...birthday, outcome: 'positive' });

    // Research completions
    const dateKey = `${year}-${monthIndex}-${day}`;
    if (Cache.research.has(dateKey)) {
        events.push(...Cache.research.get(dateKey));
    }

    // Historical events
    events.push(...getTimelineEventsForDay(year, monthIndex, day));

    // Battles
    events.push(...getBattleEventsForDay(year, monthIndex, day));

    // Rumors
    events.push(...getRumorEventsForDay(year, monthIndex, day));

    // Plagues
    events.push(...getPlagueEventsForDay(year, monthIndex, day));

    // Quests
    events.push(...getQuestEventsForDay(year, monthIndex, day));

    // Rewards
    events.push(...getRewardEventsForDay(year, monthIndex, day));

    // Religious observances
    const dayOfWeekIndex = (day - 1) % 7;
    const dayName = CALENDAR_DATA.days.values[dayOfWeekIndex].name;
    for (const key in RELIGION_DATA.denominations) {
        const denom = RELIGION_DATA.denominations[key];
        if (denom.weekly_observances) {
            const obs = denom.weekly_observances.find(o => o.day === dayName);
            if (obs) {
                events.push({
                    type: 'ritual',
                    name: `${denom.name} Liturgy`,
                    description: obs.text,
                    religion: denom.name,
                    outcome: 'neutral'
                });
            }
        }
    }

    // Sort by priority
    events.sort((a, b) => {
        const configA = EVENT_CONFIG[a.type] || { priority: 99 };
        const configB = EVENT_CONFIG[b.type] || { priority: 99 };
        return configA.priority - configB.priority;
    });

    Cache.events.set(cacheKey, events);
    return events;
}

function getTimelineEventsForDay(year, monthIndex, day) {
    const events = [];
    HISTORICAL_TIMELINE.forEach(entry => {
        if (entry.type === 'era_header') return;
        let isMatch = false;
        if (typeof entry.date === 'object') {
            isMatch = entry.date.year === year && 
                      entry.date.monthIndex === monthIndex && 
                      entry.date.day === day;
        }
        if (isMatch) {
            events.push({
                type: 'history',
                name: entry.title,
                description: entry.description,
                outcome: entry.outcome || 'neutral'
            });
        }
    });
    return events;
}

function getBattleEventsForDay(year, monthIndex, day) {
    const events = [];
    MAJOR_BATTLES.forEach(battle => {
        let isBattleDay = false;
        if (typeof battle.date === 'object') {
            isBattleDay = battle.date.year === year && 
                          battle.date.monthIndex === monthIndex && 
                          battle.date.day === day;
        }
        
        if (isBattleDay) {
            // Determine outcome type
            let outcomeType = 'battle';
            let outcome = 'neutral';
            
            if (battle.outcome.toLowerCase().includes('victory') || 
                battle.outcome.toLowerCase().includes('won')) {
                outcomeType = 'battle_victory';
                outcome = 'positive';
            } else if (battle.outcome.toLowerCase().includes('defeat') || 
                       battle.outcome.toLowerCase().includes('lost')) {
                outcomeType = 'battle_defeat';
                outcome = 'negative';
            } else if (battle.outcome.toLowerCase().includes('ongoing') || 
                       battle.outcome.toLowerCase().includes('stalemate')) {
                outcomeType = 'battle_ongoing';
                outcome = 'warning';
            }

            events.push({
                type: outcomeType,
                name: battle.name,
                description: `${battle.outcome} - ${battle.conflict}`,
                location: battle.location,
                casualties: battle.casualties,
                outcome: outcome
            });
        }
    });
    return events;
}

function getRumorEventsForDay(year, monthIndex, day) {
    const events = [];
    if (!LORE_DATA?.rumors) return events;
    
    LORE_DATA.rumors.forEach(rumor => {
        if (!rumor.date) return;
        
        if (year === rumor.date.year && 
            monthIndex === rumor.date.monthIndex && 
            day === rumor.date.day) {
            events.push({
                type: 'rumor_start',
                name: rumor.title,
                description: rumor.content || "New intel circulating.",
                credibility: rumor.credibility || 'unknown',
                outcome: 'neutral'
            });
        }

        // Check for rumor expiration (14 days after start)
        const startAbsolute = (rumor.date.year * 365) + (rumor.date.monthIndex * 30) + rumor.date.day;
        const currentAbsolute = (year * 365) + (monthIndex * 30) + day;
        if (currentAbsolute === startAbsolute + 14) {
            events.push({
                type: 'rumor_end',
                name: `Expired: ${rumor.title}`,
                description: "Public interest has faded.",
                outcome: 'neutral'
            });
        }
    });
    return events;
}

function getPlagueEventsForDay(year, monthIndex, day) {
    const events = [];
    if (!PLAGUE_DATA) return events;
    
    const season = getSeason(monthIndex);
    const seed = year * 10000 + (monthIndex + 1) * 100 + day;

    PLAGUE_DATA.forEach(plague => {
        const isActiveSeason = plague.active_seasons.includes(season.name) || 
                               plague.active_seasons.includes("All");
        
        // Random outbreak events
        if (isActiveSeason && getSeededRandom(seed + plague.name.length) < 0.03) {
            events.push({
                type: 'plague_outbreak',
                name: plague.name,
                description: `Outbreak reported in ${plague.region}`,
                severity: plague.severity || 'moderate',
                outcome: 'negative'
            });
        }

        // Projected cure completion
        if (plague.cure_progress < 100) {
            const techAverages = getGlobalTechAverages();
            const medicalTech = techAverages.MEDICAL || 1;
            const dailyCureRate = 0.5 + (medicalTech * 0.25);
            const currentDay = getAbsoluteDay();
            const daysToComplete = Math.ceil((100 - plague.cure_progress) / dailyCureRate);
            
            const cureAbsDay = currentDay + daysToComplete;
            const targetDate = absoluteDayToDate(cureAbsDay);
            
            if (year === targetDate.year && 
                monthIndex === targetDate.monthIndex && 
                day === targetDate.day) {
                events.push({
                    type: 'plague_cure',
                    name: `Cure: ${plague.name}`,
                    description: "Projected eradication based on current research.",
                    outcome: 'positive'
                });
            }
        }
    });
    return events;
}

function getQuestEventsForDay(year, monthIndex, day) {
    const events = [];
    if (!QUEST_DATA) return events;

    Object.values(QUEST_DATA).forEach(quest => {
        // Quest start
        if (quest.dates?.added) {
            const ad = quest.dates.added;
            if (ad.year === year && ad.monthIndex === monthIndex && ad.day === day) {
                
                // FIX: Check if difficulty is an object and grab .overall, otherwise use it as-is
                const difficultyLabel = (typeof quest.difficulty === 'object' && quest.difficulty !== null) 
                    ? quest.difficulty.overall 
                    : quest.difficulty;

                events.push({
                    type: 'quest_start',
                    name: quest.title,
                    description: quest.briefDescription || "New mission available.",
                    difficulty: difficultyLabel, // Now this is a string like "DEADLY"
                    outcome: 'neutral'
                });
            }
        }

        // Quest deadline
        if (quest.dates?.deadline) {
            const dl = quest.dates.deadline;
            if (dl.year === year && dl.monthIndex === monthIndex && dl.day === day) {
                events.push({
                    type: 'quest_deadline',
                    name: quest.title,
                    description: "Mission expires today.",
                    outcome: 'warning'
                });
            }
        }

        // Milestone completions
        if (quest.milestones) {
            quest.milestones.forEach(m => {
                if (m.completedDate) {
                    const cd = m.completedDate;
                    if (cd.year === year && cd.monthIndex === monthIndex && cd.day === day) {
                        events.push({
                            type: 'quest_complete',
                            name: m.title,
                            description: `Milestone in '${quest.title}' achieved.`,
                            outcome: 'positive'
                        });
                    }
                }
            });
        }

        // Quest completion/failure
        // Quest completion/failure
        if (quest.dates?.completed) {
            const comp = quest.dates.completed;
            if (comp.year === year && comp.monthIndex === monthIndex && comp.day === day) {
                const isSuccess = quest.status === QUEST_STATUS.COMPLETED;
                
                // NEW LOGIC: specific reward parsing
                let desc = isSuccess ? "Quest completed successfully!" : "Quest failed.";
                
                if (isSuccess && quest.rewards) {
                    const items = [];
                    if (quest.rewards.xp) items.push(`${quest.rewards.xp} XP`);
                    if (quest.rewards.guaranteed) {
                        items.push(...quest.rewards.guaranteed.map(r => r.name));
                    }
                    // Only add conditional rewards if you have a flag tracking them, 
                    // otherwise maybe just show guaranteed
                    if (items.length > 0) {
                        desc = `Rewards: ${items.join(', ')}`;
                    }
                }

                events.push({
                    type: isSuccess ? 'quest_complete' : 'quest_failed',
                    name: quest.title,
                    description: desc, // Now contains actual items like "Wraith Ectoplasm"
                    outcome: isSuccess ? 'positive' : 'negative'
                });
            }
        }
    });
    return events;
}

function getRewardEventsForDay(year, monthIndex, day) {
    if (!Cache.rewards) buildRewardsCache();
    const key = getDateKey(year, monthIndex, day);
    const dayData = Cache.rewards?.[key];
    if (!dayData) return [];

    return dayData.rewards
        // FILTER: Ignore rewards that are just long narrative text or lack a specific type
        .filter(r => r.type !== 'narrative' && r.name.length < 50) 
        .map(reward => ({
            type: 'reward_earned',
            name: reward.name,
            // If description is super long (lore), truncate it for the UI
            description: reward.description && reward.description.length > 100 
                ? "Click for details" 
                : reward.description,
            icon: reward.icon || '🎁', // Default icon if missing
            questTitle: reward.questTitle,
            rewardType: reward.type,
            amount: reward.amount,
            outcome: 'positive'
        }));
}

function absoluteDayToDate(absDay) {
    const startYear = 1035;
    const yearsPassed = Math.floor(absDay / 365);
    const year = startYear + yearsPassed;
    let remaining = absDay % 365;
    
    let monthIndex = 0;
    let day = 1;
    
    for (let i = 0; i < CALENDAR_DATA.months.values.length; i++) {
        const daysInMonth = CALENDAR_DATA.months.values[i].days;
        if (remaining < daysInMonth) {
            monthIndex = i;
            day = remaining + 1;
            break;
        }
        remaining -= daysInMonth;
    }
    
    return { year, monthIndex, day };
}

// ============================================
// CACHE BUILDERS
// ============================================
function buildRewardsCache() {
    if (REWARDS_DATA?.getByDate) {
        Cache.rewards = REWARDS_DATA.getByDate();
    } else {
        Cache.rewards = {};
    }
}

function buildResearchCache() {
    Cache.research.clear();
    if (!state?.researchState) return;

    const currentDay = getAbsoluteDay();
    const globalCycle = calculateGlobalCycle(WAHBOOK_POSTS);

    for (const nationKey in NATIONS) {
        const categories = ['WEAPONS', 'MAGIC', 'TECH', 'MEDICAL', 'ECONOMIC', 'POLITICAL'];
        
        categories.forEach(cat => {
            const tree = getTechTree(nationKey, cat, state.researchState, globalCycle);
            Object.values(tree).forEach(node => {
                if (node.status === 'researching') {
                    const progressRemaining = 100 - node.progress;
                    const daysLeft = Math.ceil((node.cost * progressRemaining) / 100);
                    const completionAbsDay = currentDay + daysLeft;
                    const targetDate = absoluteDayToDate(completionAbsDay);

                    const dateKey = `${targetDate.year}-${targetDate.monthIndex}-${targetDate.day}`;
                    if (!Cache.research.has(dateKey)) {
                        Cache.research.set(dateKey, []);
                    }
                    Cache.research.get(dateKey).push({
                        type: 'tech',
                        name: node.name,
                        description: `${NATIONS[nationKey].name} completes ${cat} research.`,
                        nation: nationKey,
                        category: cat,
                        outcome: 'positive'
                    });
                }
            });
        });
    }
}

function clearEventCache() {
    Cache.events.clear();
}

// ============================================
// NEWS TICKER
// ============================================
function generateNewsTicker() {
    const today = CURRENT_GAME_DATE;
    const events = getEventsForDay(today.year, today.monthIndex, today.day);
    const weather = generateWeatherForDay(today.year, today.monthIndex, today.day);
    
    const newsItems = [];
    
    // Weather headline
    if (weather.severity === 'severe' || weather.isMagical) {
        newsItems.push({
            priority: 1,
            text: `⚠️ WEATHER ALERT: ${weather.desc} expected today`,
            type: 'alert'
        });
    }

    // Today's events
    events.forEach(event => {
        const config = EVENT_CONFIG[event.type] || {};
        let prefix = '';
        let type = 'info';
        
        switch (event.outcome) {
            case 'positive':
                prefix = '✨ ';
                type = 'positive';
                break;
            case 'negative':
                prefix = '⚠️ ';
                type = 'negative';
                break;
            case 'warning':
                prefix = '📢 ';
                type = 'warning';
                break;
            default:
                prefix = '📌 ';
        }

        newsItems.push({
            priority: config.priority || 50,
            text: `${prefix}${event.name}${event.description ? ': ' + event.description.substring(0, 60) + '...' : ''}`,
            type: type
        });
    });

    // Sort by priority
    newsItems.sort((a, b) => a.priority - b.priority);
    
    return newsItems.slice(0, 10); // Max 10 items
}

// ============================================
// RENDER FUNCTIONS
// ============================================
function renderNewsTicker() {
    const ticker = document.getElementById('news-ticker');
    if (!ticker) return;

    const news = generateNewsTicker();
    
    if (news.length === 0) {
        ticker.innerHTML = `
            <div class="ticker-item info">
                <span class="ticker-text">📅 ${formatDate(CURRENT_GAME_DATE.year, CURRENT_GAME_DATE.monthIndex, CURRENT_GAME_DATE.day)} — No significant events today</span>
            </div>
        `;
        return;
    }

    ticker.innerHTML = news.map(item => `
        <div class="ticker-item ${item.type}">
            <span class="ticker-text">${item.text}</span>
        </div>
    `).join('<span class="ticker-separator">•</span>');
}

function renderCalendarGrid() {
    const grid = document.getElementById('calendar-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const monthData = CALENDAR_DATA.months.values[CalendarState.viewDate.monthIndex];
    
    // Update header
    const dateDisplay = document.getElementById('current-date-display');
    if (dateDisplay) {
        dateDisplay.textContent = `${monthData.name} ${CalendarState.viewDate.year}`;
    }

    // Calculate starting offset
    const monthStartOffset = (CalendarState.viewDate.year * 12 + CalendarState.viewDate.monthIndex) % 7;
    
    // Add filler cells
    for (let i = 0; i < monthStartOffset; i++) {
        const filler = document.createElement('div');
        filler.className = 'calendar-day filler';
        grid.appendChild(filler);
    }

    // Render days
    for (let day = 1; day <= monthData.days; day++) {
        const cell = createDayCell(CalendarState.viewDate.year, CalendarState.viewDate.monthIndex, day);
        grid.appendChild(cell);
    }
}

function createDayCell(year, monthIndex, day) {
    const cell = document.createElement('div');
    cell.className = 'calendar-day';
    
    const isTodayCell = isToday(year, monthIndex, day);
    const isSelected = year === CalendarState.selectedDate.year &&
                       monthIndex === CalendarState.selectedDate.monthIndex &&
                       day === CalendarState.selectedDate.day;

    if (isTodayCell) cell.classList.add('today');
    if (isSelected) cell.classList.add('selected');

    const weather = generateWeatherForDay(year, monthIndex, day);
    const moonPhase = calculateMoonPhase(year, monthIndex, day);
    const events = getEventsForDay(year, monthIndex, day);
    
    // Filter events based on active filters
    const filteredEvents = events.filter(e => shouldShowEvent(e));
    
    // Group events by outcome
    const positive = filteredEvents.filter(e => e.outcome === 'positive').length;
    const negative = filteredEvents.filter(e => e.outcome === 'negative').length;
    const neutral = filteredEvents.filter(e => e.outcome === 'neutral' || !e.outcome).length;
    const warnings = filteredEvents.filter(e => e.outcome === 'warning').length;

    cell.innerHTML = `
        <div class="day-header">
            <span class="day-number">${day}</span>
            <div class="day-icons">
                <span class="moon-icon" title="${moonPhase.name}">${moonPhase.icon}</span>
                <span class="weather-icon ${weather.severity}" title="${weather.desc} ${weather.temp}">${weather.icon}</span>
            </div>
        </div>
        <div class="day-events-summary">
            ${positive > 0 ? `<span class="event-pip positive" title="${positive} positive">${positive}</span>` : ''}
            ${negative > 0 ? `<span class="event-pip negative" title="${negative} negative">${negative}</span>` : ''}
            ${warnings > 0 ? `<span class="event-pip warning" title="${warnings} warnings">${warnings}</span>` : ''}
            ${neutral > 0 ? `<span class="event-pip neutral" title="${neutral} events">${neutral}</span>` : ''}
        </div>
        <div class="day-event-dots">
            ${renderEventDots(filteredEvents.slice(0, 6))}
            ${filteredEvents.length > 6 ? `<span class="more-events">+${filteredEvents.length - 6}</span>` : ''}
        </div>
    `;

    // Add hover preview
    cell.addEventListener('mouseenter', (e) => showDayPreview(year, monthIndex, day, e));
    cell.addEventListener('mouseleave', hideDayPreview);
    cell.addEventListener('click', () => selectDay(year, monthIndex, day));

    return cell;
}

function renderEventDots(events) {
    return events.map(event => {
        const config = EVENT_CONFIG[event.type] || {};
        return `<span class="event-dot ${event.type}" style="background-color: ${config.color}" title="${event.name}"></span>`;
    }).join('');
}

function shouldShowEvent(event) {
    const filterMap = {
        holiday: 'holidays',
        guild_holiday: 'holidays',
        birthday: 'holidays',
        tech: 'research',
        battle: 'battles',
        battle_victory: 'battles',
        battle_defeat: 'battles',
        battle_ongoing: 'battles',
        rumor_start: 'rumors',
        rumor_end: 'rumors',
        plague_outbreak: 'plagues',
        plague_cure: 'plagues',
        quest_start: 'quests',
        quest_deadline: 'quests',
        quest_complete: 'quests',
        quest_failed: 'quests',
        reward_earned: 'rewards',
        history: 'holidays',
        ritual: 'holidays',
        legislation: 'holidays'
    };
    
    const filterKey = filterMap[event.type] || 'holidays';
    return CalendarState.filters[filterKey];
}

function showDayPreview(year, monthIndex, day, event) {
    let preview = document.getElementById('day-preview');
    if (!preview) {
        preview = document.createElement('div');
        preview.id = 'day-preview';
        preview.className = 'day-preview-popup';
        document.body.appendChild(preview);
    }

    const events = getEventsForDay(year, monthIndex, day).filter(shouldShowEvent);
    const weather = generateWeatherForDay(year, monthIndex, day);
    const monthData = CALENDAR_DATA.months.values[monthIndex];

    preview.innerHTML = `
        <div class="preview-header">
            <strong>${monthData.name} ${day}</strong>
            <span>${weather.icon} ${weather.temp}</span>
        </div>
        <div class="preview-events">
            ${events.slice(0, 5).map(e => {
                const config = EVENT_CONFIG[e.type] || {};
                return `
                    <div class="preview-event ${e.outcome || 'neutral'}">
                        <span class="preview-icon" style="color: ${config.color}">${config.icon || '•'}</span>
                        <span class="preview-name">${e.name}</span>
                    </div>
                `;
            }).join('')}
            ${events.length > 5 ? `<div class="preview-more">+${events.length - 5} more events</div>` : ''}
            ${events.length === 0 ? '<div class="preview-empty">No events</div>' : ''}
        </div>
    `;

    // Position the preview
    const rect = event.target.getBoundingClientRect();
    preview.style.top = `${rect.bottom + 5}px`;
    preview.style.left = `${rect.left}px`;
    preview.classList.add('visible');
}

function hideDayPreview() {
    const preview = document.getElementById('day-preview');
    if (preview) preview.classList.remove('visible');
}

function selectDay(year, monthIndex, day) {
    CalendarState.selectedDate = { year, monthIndex, day };
    playSound('click.mp3');
    renderCalendarGrid();
    renderSidebar();
}

// ============================================
// SIDEBAR RENDERING
// ============================================
function renderSidebar() {
    renderSidebarHeader();
    renderSidebarTabs();
    renderSidebarContent();
    renderQuickStats();
}

function renderSidebarHeader() {
    const header = document.getElementById('sidebar-date-header');
    const weatherIcon = document.getElementById('sidebar-weather-icon');
    
    if (!header) return;

    const { year, monthIndex, day } = CalendarState.selectedDate;
    const weather = generateWeatherForDay(year, monthIndex, day);
    const moonPhase = calculateMoonPhase(year, monthIndex, day);

    header.textContent = formatDate(year, monthIndex, day);
    
    if (weatherIcon) {
        weatherIcon.innerHTML = `
            <span class="weather-large ${weather.severity}" title="${weather.desc}">${weather.icon}</span>
            <span class="moon-large" title="${moonPhase.name}">${moonPhase.icon}</span>
        `;
    }
}

function renderSidebarTabs() {
    const tabsContainer = document.getElementById('sidebar-tabs');
    if (!tabsContainer) return;

    const { year, monthIndex, day } = CalendarState.selectedDate;
    const events = getEventsForDay(year, monthIndex, day);
    const rituals = events.filter(e => e.type === 'ritual');
    const mainEvents = events.filter(e => e.type !== 'ritual');

    const tabs = [
        { id: 'events', label: 'Events', count: mainEvents.length },
        { id: 'weather', label: 'Forecast', count: null },
        { id: 'liturgy', label: 'Liturgy', count: rituals.length },
        { id: 'rewards', label: 'Rewards', count: null }
    ];

    tabsContainer.innerHTML = tabs.map(tab => `
        <button class="sidebar-tab ${CalendarState.activeTab === tab.id ? 'active' : ''}" 
                data-tab="${tab.id}">
            ${tab.label}
            ${tab.count !== null ? `<span class="tab-count">${tab.count}</span>` : ''}
        </button>
    `).join('');

    tabsContainer.querySelectorAll('.sidebar-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            CalendarState.activeTab = btn.dataset.tab;
            renderSidebarTabs();
            renderSidebarContent();
            playSound('click.mp3');
        });
    });
}

function renderSidebarContent() {
    const content = document.getElementById('sidebar-content');
    if (!content) return;

    switch (CalendarState.activeTab) {
        case 'events':
            content.innerHTML = renderEventsTab();
            break;
        case 'weather':
            content.innerHTML = renderWeatherTab();
            break;
        case 'liturgy':
            content.innerHTML = renderLiturgyTab();
            break;
        case 'rewards':
            content.innerHTML = renderRewardsTab();
            break;
        default:
            content.innerHTML = renderEventsTab();
    }
}

function renderEventsTab() {
    const { year, monthIndex, day } = CalendarState.selectedDate;
    const events = getEventsForDay(year, monthIndex, day)
        .filter(e => e.type !== 'ritual')
        .filter(shouldShowEvent);

    if (events.length === 0) {
        return `<div class="empty-state">
            <span class="empty-icon">📅</span>
            <p>No events for this date</p>
        </div>`;
    }

    // Group events by outcome
    const grouped = {
        positive: events.filter(e => e.outcome === 'positive'),
        warning: events.filter(e => e.outcome === 'warning'),
        negative: events.filter(e => e.outcome === 'negative'),
        neutral: events.filter(e => !e.outcome || e.outcome === 'neutral')
    };

    let html = '';
    
    for (const [outcome, group] of Object.entries(grouped)) {
        if (group.length === 0) continue;
        
        html += `<div class="event-group ${outcome}">`;
        
        group.forEach(event => {
            const config = EVENT_CONFIG[event.type] || {};
            html += `
                <div class="event-card ${outcome}">
                    <div class="event-card-header">
                        <span class="event-icon" style="color: ${config.color}">${config.icon || '•'}</span>
                        <span class="event-type-label">${config.label || event.type}</span>
                    </div>
                    <div class="event-card-title">${event.name}</div>
                    ${event.description ? `<div class="event-card-desc">${event.description}</div>` : ''}
                    ${renderEventMeta(event)}
                </div>
            `;
        });
        
        html += '</div>';
    }

    return html;
}

function renderEventMeta(event) {
    const metas = [];
    
    if (event.location) metas.push(`📍 ${event.location}`);
    if (event.casualties) metas.push(`💀 ${event.casualties}`);
    
    // FIX: Handle object vs string for difficulty
    if (event.difficulty) {
        const diffText = typeof event.difficulty === 'object' 
            ? (event.difficulty.overall || 'Unknown') 
            : event.difficulty;
        metas.push(`⭐ ${diffText}`);
    }

    if (event.amount) metas.push(`💰 ${event.amount}`);
    if (event.nation) metas.push(`🏛️ ${NATIONS[event.nation]?.name || event.nation}`);
    
    if (metas.length === 0) return '';
    
    return `<div class="event-meta">${metas.join(' • ')}</div>`;
}
function renderWeatherTab() {
    const { year, monthIndex, day } = CalendarState.selectedDate;
    const weather = generateWeatherForDay(year, monthIndex, day);
    const moonPhase = calculateMoonPhase(year, monthIndex, day);
    const orbForecast = calculateOrbForecast(weather, moonPhase);
    const season = getSeason(monthIndex);

    // Generate 5-day forecast
    const forecast = [];
    for (let i = 0; i < 5; i++) {
        let fDay = day + i;
        let fMonth = monthIndex;
        let fYear = year;
        
        // Handle month overflow (simplified)
        const monthDays = CALENDAR_DATA.months.values[fMonth].days;
        if (fDay > monthDays) {
            fDay -= monthDays;
            fMonth++;
            if (fMonth > 11) {
                fMonth = 0;
                fYear++;
            }
        }
        
        forecast.push({
            day: fDay,
            weather: generateWeatherForDay(fYear, fMonth, fDay)
        });
    }

    return `
        <div class="weather-panel">
            <div class="weather-current">
                <div class="weather-main">
                    <span class="weather-icon-xl ${weather.severity}">${weather.icon}</span>
                    <div class="weather-details">
                        <span class="weather-temp">${weather.temp}</span>
                        <span class="weather-desc">${weather.desc}</span>
                    </div>
                </div>
                <div class="weather-info-grid">
                    <div class="weather-info-item">
                        <span class="label">Season</span>
                        <span class="value">${season.name}</span>
                    </div>
                    <div class="weather-info-item">
                        <span class="label">Moon</span>
                        <span class="value">${moonPhase.icon} ${moonPhase.name}</span>
                    </div>
                    <div class="weather-info-item">
                        <span class="label">Scrying</span>
                        <span class="value" style="color: ${orbForecast.color}">${orbForecast.icon} ${orbForecast.status}</span>
                    </div>
                </div>
            </div>
            
            <div class="forecast-section">
                <h5>5-Day Forecast</h5>
                <div class="forecast-row">
                    ${forecast.map((f, i) => `
                        <div class="forecast-day ${i === 0 ? 'today' : ''}">
                            <span class="forecast-label">${i === 0 ? 'Today' : 'Day ' + (day + i)}</span>
                            <span class="forecast-icon">${f.weather.icon}</span>
                            <span class="forecast-temp">${f.weather.temp}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderLiturgyTab() {
    const { year, monthIndex, day } = CalendarState.selectedDate;
    const events = getEventsForDay(year, monthIndex, day);
    const rituals = events.filter(e => e.type === 'ritual');

    if (rituals.length === 0) {
        return `<div class="empty-state">
            <span class="empty-icon">🕯️</span>
            <p>No liturgical observances today</p>
        </div>`;
    }

    return `
        <div class="liturgy-list">
            ${rituals.map(r => `
                <div class="liturgy-card">
                    <div class="liturgy-header">
                        <span class="liturgy-icon">🕯️</span>
                        <span class="liturgy-religion">${r.religion}</span>
                    </div>
                    <div class="liturgy-text">${r.description}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderRewardsTab() {
    const allRewards = REWARDS_DATA?.extractAll?.() || [];
    const earned = allRewards.filter(r => r.earned);
    const pending = allRewards.filter(r => !r.earned);

    // Group by type
    const byType = {};
    earned.forEach(r => {
        if (!byType[r.type]) byType[r.type] = [];
        byType[r.type].push(r);
    });

    const typeColors = {
        xp: '#a855f7',       // Purple
        gold: '#eab308',     // Yellow
        item: '#3b82f6',     // Blue
        artifact: '#f59e0b', // Orange (Legendary feel)
        ally: '#22c55e',     // Green
        favor: '#ec4899',    // Pink
        reputation: '#6366f1' // Indigo
    };

    return `
        <div class="rewards-panel">
            <div class="rewards-summary-bar">
                <div class="summary-item">
                    <span class="summary-value positive">${earned.length}</span>
                    <span class="summary-label">Earned</span>
                </div>
                <div class="summary-item">
                    <span class="summary-value warning">${pending.length}</span>
                    <span class="summary-label">Pending</span>
                </div>
            </div>
            
            <div class="rewards-by-type">
                ${Object.entries(byType).map(([type, rewards]) => `
                    <div class="reward-type-group">
                        <div class="reward-type-header" style="border-color: ${typeColors[type] || '#666'}">
                            <span class="reward-type-name">${type.toUpperCase()}</span>
                            <span class="reward-type-count">${rewards.length}</span>
                        </div>
                        <div class="reward-items-mini">
                            ${rewards.slice(0, 3).map(r => `
                                <span class="reward-mini" title="${r.name}">${r.icon}</span>
                            `).join('')}
                            ${rewards.length > 3 ? `<span class="reward-more">+${rewards.length - 3}</span>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderQuickStats() {
    const statsContainer = document.getElementById('quick-stats');
    if (!statsContainer) return;

    const today = CURRENT_GAME_DATE;
    const todayEvents = getEventsForDay(today.year, today.monthIndex, today.day);
    
    // Count upcoming events (next 7 days)
    let upcomingCount = 0;
    for (let i = 1; i <= 7; i++) {
        let checkDay = today.day + i;
        let checkMonth = today.monthIndex;
        let checkYear = today.year;
        
        const monthDays = CALENDAR_DATA.months.values[checkMonth].days;
        if (checkDay > monthDays) {
            checkDay -= monthDays;
            checkMonth++;
            if (checkMonth > 11) {
                checkMonth = 0;
                checkYear++;
            }
        }
        
        upcomingCount += getEventsForDay(checkYear, checkMonth, checkDay).length;
    }

    const weather = generateWeatherForDay(today.year, today.monthIndex, today.day);

    statsContainer.innerHTML = `
        <div class="stat-pill">
            <span class="stat-icon">${weather.icon}</span>
            <span class="stat-value">${weather.temp}</span>
        </div>
        <div class="stat-pill">
            <span class="stat-icon">📅</span>
            <span class="stat-value">${todayEvents.length} today</span>
        </div>
        <div class="stat-pill">
            <span class="stat-icon">📆</span>
            <span class="stat-value">${upcomingCount} this week</span>
        </div>
    `;
}

// ============================================
// FILTERS
// ============================================
function renderFilters() {
    const container = document.getElementById('filter-toggles');
    if (!container) return;

    const filterConfig = [
        { key: 'holidays', label: 'Holidays', icon: '🎉' },
        { key: 'quests', label: 'Quests', icon: '✨' },
        { key: 'battles', label: 'Battles', icon: '⚔️' },
        { key: 'research', label: 'Research', icon: '🔬' },
        { key: 'plagues', label: 'Plagues', icon: '☠️' },
        { key: 'rumors', label: 'Rumors', icon: '📣' },
        { key: 'rewards', label: 'Rewards', icon: '🎁' }
    ];

    container.innerHTML = filterConfig.map(f => `
        <button class="filter-toggle ${CalendarState.filters[f.key] ? 'active' : ''}" 
                data-filter="${f.key}" 
                title="${f.label}">
            <span class="filter-icon">${f.icon}</span>
        </button>
    `).join('');

    container.querySelectorAll('.filter-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.filter;
            CalendarState.filters[key] = !CalendarState.filters[key];
            btn.classList.toggle('active');
            clearEventCache();
            renderCalendarGrid();
            playSound('click.mp3');
        });
    });
}

// ============================================
// SEARCH
// ============================================
function setupSearch() {
    const input = document.getElementById('calendar-search');
    const results = document.getElementById('search-results');
    if (!input || !results) return;

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        
        if (query.length < 2) {
            results.classList.remove('visible');
            return;
        }

        const matches = searchCalendar(query);
        
        if (matches.length === 0) {
            results.innerHTML = '<div class="search-empty">No results found</div>';
        } else {
            results.innerHTML = matches.slice(0, 8).map(m => `
                <div class="search-result" data-year="${m.year}" data-month="${m.monthIndex}" data-day="${m.day}">
                    <span class="search-result-icon" style="color: ${EVENT_CONFIG[m.type]?.color || '#666'}">${EVENT_CONFIG[m.type]?.icon || '•'}</span>
                    <div class="search-result-info">
                        <span class="search-result-name">${m.name}</span>
                        <span class="search-result-date">${CALENDAR_DATA.months.values[m.monthIndex]?.abbreviation || ''} ${m.day}, ${m.year}</span>
                    </div>
                </div>
            `).join('');
        }

        results.classList.add('visible');

        results.querySelectorAll('.search-result').forEach(el => {
            el.addEventListener('click', () => {
                CalendarState.viewDate.year = parseInt(el.dataset.year);
                CalendarState.viewDate.monthIndex = parseInt(el.dataset.month);
                selectDay(
                    parseInt(el.dataset.year),
                    parseInt(el.dataset.month),
                    parseInt(el.dataset.day)
                );
                input.value = '';
                results.classList.remove('visible');
            });
        });
    });

    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !results.contains(e.target)) {
            results.classList.remove('visible');
        }
    });
}

function searchCalendar(query) {
    const matches = [];
    const currentYear = CURRENT_GAME_DATE.year;

    // Search holidays
    CALENDAR_DATA.holidays.values.forEach(h => {
        if (h.name.toLowerCase().includes(query)) {
            matches.push({
                ...h,
                type: 'holiday',
                year: currentYear,
                monthIndex: h.month - 1
            });
        }
    });

    // Search guild holidays
    GUILD_HOLIDAYS.forEach(h => {
        if (h.name.toLowerCase().includes(query)) {
            matches.push({
                ...h,
                type: 'guild_holiday',
                year: currentYear,
                monthIndex: h.month - 1
            });
        }
    });

    // Search birthdays
    if (CALENDAR_DATA.birthdays) {
        CALENDAR_DATA.birthdays.forEach(b => {
            if (b.name.toLowerCase().includes(query)) {
                matches.push({
                    ...b,
                    type: 'birthday',
                    year: currentYear,
                    monthIndex: b.month - 1
                });
            }
        });
    }

    // Search research cache
    for (const [dateStr, events] of Cache.research) {
        events.forEach(e => {
            if (e.name.toLowerCase().includes(query)) {
                const [y, m, d] = dateStr.split('-').map(Number);
                matches.push({
                    ...e,
                    year: y,
                    monthIndex: m,
                    day: d
                });
            }
        });
    }

    return matches;
}

// ============================================
// UPCOMING EVENTS
// ============================================
function renderUpcoming() {
    const container = document.getElementById('upcoming-list');
    if (!container) return;

    const upcoming = [];
    let checkDate = { ...CURRENT_GAME_DATE };
    checkDate.day++;

    for (let i = 0; i < 30 && upcoming.length < 8; i++) {
        // Normalize date
        const monthDays = CALENDAR_DATA.months.values[checkDate.monthIndex].days;
        if (checkDate.day > monthDays) {
            checkDate.day = 1;
            checkDate.monthIndex++;
            if (checkDate.monthIndex > 11) {
                checkDate.monthIndex = 0;
                checkDate.year++;
            }
        }

        const events = getEventsForDay(checkDate.year, checkDate.monthIndex, checkDate.day)
            .filter(e => e.type !== 'ritual')
            .filter(shouldShowEvent);

        events.forEach(e => {
            if (upcoming.length < 8) {
                upcoming.push({
                    ...e,
                    date: { ...checkDate }
                });
            }
        });

        checkDate.day++;
    }

    if (upcoming.length === 0) {
        container.innerHTML = '<div class="empty-state small">No upcoming events</div>';
        return;
    }

    container.innerHTML = upcoming.map(u => {
        const config = EVENT_CONFIG[u.type] || {};
        return `
            <div class="upcoming-item ${u.outcome || 'neutral'}" 
                 data-year="${u.date.year}" 
                 data-month="${u.date.monthIndex}" 
                 data-day="${u.date.day}">
                <div class="upcoming-date">
                    <span class="upcoming-day">${u.date.day}</span>
                    <span class="upcoming-month">${CALENDAR_DATA.months.values[u.date.monthIndex].abbreviation}</span>
                </div>
                <div class="upcoming-info">
                    <span class="upcoming-icon" style="color: ${config.color}">${config.icon || '•'}</span>
                    <span class="upcoming-name">${u.name}</span>
                </div>
            </div>
        `;
    }).join('');

    container.querySelectorAll('.upcoming-item').forEach(el => {
        el.addEventListener('click', () => {
            CalendarState.viewDate.year = parseInt(el.dataset.year);
            CalendarState.viewDate.monthIndex = parseInt(el.dataset.month);
            selectDay(
                parseInt(el.dataset.year),
                parseInt(el.dataset.month),
                parseInt(el.dataset.day)
            );
        });
    });
}

// ============================================
// NAVIGATION
// ============================================
function setupNavigation() {
    document.getElementById('prev-month')?.addEventListener('click', () => {
        CalendarState.viewDate.monthIndex--;
        if (CalendarState.viewDate.monthIndex < 0) {
            CalendarState.viewDate.monthIndex = 11;
            CalendarState.viewDate.year--;
        }
        renderCalendarGrid();
        playSound('click.mp3');
    });

    document.getElementById('next-month')?.addEventListener('click', () => {
        CalendarState.viewDate.monthIndex++;
        if (CalendarState.viewDate.monthIndex > 11) {
            CalendarState.viewDate.monthIndex = 0;
            CalendarState.viewDate.year++;
        }
        renderCalendarGrid();
        playSound('click.mp3');
    });

    document.getElementById('prev-year')?.addEventListener('click', () => {
        CalendarState.viewDate.year--;
        renderCalendarGrid();
        playSound('click.mp3');
    });

    document.getElementById('next-year')?.addEventListener('click', () => {
        CalendarState.viewDate.year++;
        renderCalendarGrid();
        playSound('click.mp3');
    });

    document.getElementById('today-btn')?.addEventListener('click', () => {
        CalendarState.viewDate = {
            year: CURRENT_GAME_DATE.year,
            monthIndex: CURRENT_GAME_DATE.monthIndex
        };
        selectDay(CURRENT_GAME_DATE.year, CURRENT_GAME_DATE.monthIndex, CURRENT_GAME_DATE.day);
        playSound('confirm.mp3');
    });
}

// ============================================
// LEGEND
// ============================================
function renderLegend() {
    const container = document.getElementById('calendar-legend');
    if (!container) return;

    const legendItems = [
        { type: 'positive', label: 'Positive', color: '#22c55e' },
        { type: 'warning', label: 'Warning', color: '#eab308' },
        { type: 'negative', label: 'Negative', color: '#ef4444' },
        { type: 'neutral', label: 'Neutral', color: '#6b7280' }
    ];

    container.innerHTML = `
        <div class="legend-row">
            ${legendItems.map(l => `
                <div class="legend-item">
                    <span class="legend-dot" style="background: ${l.color}"></span>
                    <span class="legend-label">${l.label}</span>
                </div>
            `).join('')}
        </div>
    `;
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
    console.log('🗓️ Calendar initializing...');
    
    // Build caches
    buildResearchCache();
    buildRewardsCache();
    
    // Setup UI
    setupNavigation();
    setupSearch();
    renderFilters();
    renderLegend();
    
    // Render components
    renderNewsTicker();
    renderCalendarGrid();
    renderSidebar();
    renderUpcoming();
    
    // Auto-refresh news ticker
    setInterval(renderNewsTicker, 60000);
    
    console.log('✅ Calendar initialized');
}

// Start
init();

// Export for external use
export { CalendarState, renderCalendarGrid, selectDay };