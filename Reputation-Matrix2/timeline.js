
import { HISTORICAL_TIMELINE as rawTimelineData } from './timeline-data.js';
import { MAJOR_BATTLES } from './battlefield.js';
import { playSound } from './common.js';
import { CURRENT_GAME_DATE } from './calendar-data.js';

const timelineContainer = document.getElementById('timeline-container');
const filterBar = document.getElementById('timeline-filter-bar');

let activeFilters = new Set();
let observer;

// --- Seeded Random for Daily Events ---
function getSeededRandom(seed) {
    var t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

const BATTLE_UPDATE_TEMPLATES = [
    "Scouts report minor skirmishes along the perimeter.",
    "Heavy fighting reported in the early hours, settling into a stalemate.",
    "Logistics convoys intercepted; supplies running low.",
    "Quiet on the front today, tensions remain high.",
    "Sudden artillery barrage exchanged, minimal casualties.",
    "Troop movements detected suggesting a flanking maneuver.",
    "Morale holds despite worsening weather conditions.",
    "Local militia clashes with patrol units.",
    "Rumors of a new enemy commander arriving at the front.",
    "Night raid repelled with moderate losses."
];

/**
 * Generates timeline events from battlefield data.
 * Includes main battle entries and daily updates for ongoing conflicts.
 */
function generateBattleTimelineEvents() {
    const events = [];
    const currentDay = CURRENT_GAME_DATE.day; // Assuming current month/year context for simplicity in this view
    
    MAJOR_BATTLES.forEach(battle => {
        // 1. Add the Main Battle Event
        // We try to parse the date string "Day X" to sort it correctly
        events.push({
            date: battle.date,
            title: battle.name,
            description: battle.description.replace(/<[^>]*>?/gm, '').substring(0, 200) + (battle.description.length > 200 ? "..." : ""), // Plain text summary
            icon: "icon_war.png",
            category: "Military",
            link: `battlefield.html#${battle.id}`,
            originalDate: battle.date 
        });

        // 2. Generate Daily Updates for Ongoing Battles
        // Check if it's ongoing based on outcome text or date "Ongoing"
        const isOngoing = battle.outcome.includes("Ongoing") || battle.outcome.includes("Hostilities Resumed") || battle.date === 'Ongoing';
        
        if (isOngoing) {
            // Try to parse start day. If "Ongoing" with no start date, maybe assume recent past (e.g. last 5 days)
            let startDay = 1;
            const dateMatch = battle.date.match(/Day (\d+)/);
            
            if (dateMatch) {
                startDay = parseInt(dateMatch[1]);
            } else {
                // If no specific start day found (e.g. "Ongoing"), just generate a few recent ones
                startDay = Math.max(1, currentDay - 3); 
            }

            // Generate an event for each day from start+1 to today
            for (let d = startDay + 1; d <= currentDay; d++) {
                // Deterministic seed: Battle ID characters + Day
                let seed = d * 1337;
                for (let i=0; i<battle.id.length; i++) seed += battle.id.charCodeAt(i);
                
                const randIndex = Math.floor(getSeededRandom(seed) * BATTLE_UPDATE_TEMPLATES.length);
                const updateText = BATTLE_UPDATE_TEMPLATES[randIndex];
                
                events.push({
                    date: `1040 IE (1040 BF), Day ${d}`,
                    title: `Update: ${battle.name}`,
                    description: updateText,
                    icon: "icon_report.png", 
                    category: "Military",
                    isDailyRoll: true,
                    link: `battlefield.html#${battle.id}`
                });
            }
        }
    });
    return events;
}


/**
 * Parses a date string (e.g., "1040 IE (1 BF), Day 5", "c. 8000 BF", "50 AF")
 * into a single, sortable numeric value.
 */
function parseDateToSortKey(dateStr) {
    if (!dateStr) return -99999; // Fallback for "Ongoing" or unknown

    if (dateStr === 'Ongoing') return 999999; // Push to top if desired, or handle specifically

    let year = 0;
    const bfAfMatch = dateStr.match(/(\d+)\s*(BF|AF)/);
    const circaMatch = dateStr.match(/c\.\s*(\d+)\s*BF/);
    const ieMatch = dateStr.match(/(\d+)\s*IE/);

    if (bfAfMatch) {
        year = parseInt(bfAfMatch[1], 10);
        if (bfAfMatch[2] === 'BF') year = -year;
    } else if (circaMatch) {
        year = -parseInt(circaMatch[1], 10);
    } else if (ieMatch) {
        // 1040 IE is roughly year 0/1 in this context logic
        year = parseInt(ieMatch[1], 10) - 1041;
    }

    const dayMatch = dateStr.match(/Day\s*(\d+)/);
    const day = dayMatch ? parseInt(dayMatch[1], 10) : 0;
    
    // Weight year heavily, add fractional day
    return year * 1000 + day;
}

/**
 * Calculates a human-readable string representing how long ago the event happened.
 */
function calculateTimeAgo(dateStr) {
    if (!dateStr) return "";
    if (dateStr === 'Ongoing') return "HAPPENING NOW";

    // 1. Check for specific "Day X" format in the current year (1040 IE)
    if (dateStr.includes("1040 IE") && dateStr.includes("Day")) {
        const dayMatch = dateStr.match(/Day\s+(\d+)/);
        if (dayMatch) {
            const eventDay = parseInt(dayMatch[1], 10);
            const currentDay = CURRENT_GAME_DATE.day;
            const diff = currentDay - eventDay;

            if (diff === 0) return "HAPPENING NOW";
            if (diff === 1) return "YESTERDAY";
            if (diff > 0) return `${diff} DAYS AGO`;
            if (diff < 0) return `IN ${Math.abs(diff)} DAYS`;
        }
    }

    // 2. Handle historical years
    let eventYear = 0;
    if (dateStr.includes("BF")) {
        const match = dateStr.match(/(\d+)\s*BF/);
        if (match) eventYear = -parseInt(match[1], 10);
    } else if (dateStr.includes("IE")) {
        const match = dateStr.match(/(\d+)\s*IE/);
        if (match) eventYear = parseInt(match[1], 10);
    }

    // Current year is roughly 1040 IE
    const currentYear = 1040;
    const yearDiff = currentYear - eventYear;

    if (yearDiff > 1000) return `${Math.floor(yearDiff / 1000)}k+ YEARS AGO`;
    if (yearDiff > 0) return `${yearDiff} YEARS AGO`;
    
    return "";
}

function processTimelineData() {
    // 1. Get manual timeline events
    let combinedData = [...rawTimelineData];

    // 2. Generate and add Battle Events
    const battleEvents = generateBattleTimelineEvents();
    combinedData = combinedData.concat(battleEvents);

    // 3. Process sort keys and time-ago strings
    const processed = combinedData.map(event => {
        const newEvent = { ...event };
        if (newEvent.type !== 'era_header') {
            newEvent.sortKey = parseDateToSortKey(newEvent.date);
            newEvent.timeAgo = calculateTimeAgo(newEvent.date);
        }
        return newEvent;
    });

    // 4. Assign sort keys to Era Headers based on following event
    for (let i = 0; i < processed.length; i++) {
        if (processed[i].type === 'era_header') {
            let nextEventKey = -Infinity; 
            // Search forward for the first non-header event to determine this header's time
            for (let j = i + 1; j < processed.length; j++) {
                if (processed[j].type !== 'era_header' && processed[j].sortKey !== undefined) {
                    nextEventKey = processed[j].sortKey;
                    break;
                }
            }
            // If found, place header just before it. If not found (end of list), keep low.
            processed[i].sortKey = (nextEventKey === -Infinity) ? -999999 : (nextEventKey - 0.001); 
        }
    }
    
    // 5. Sort
    return processed.sort((a, b) => (a.sortKey || 0) - (b.sortKey || 0));
}

const timelineData = processTimelineData();

function renderFilters() {
    if (!filterBar) return;
    // Extract unique categories, ignoring headers
    const categories = [...new Set(timelineData.filter(e => e.category).map(e => e.category))];
    let filterHTML = '<button class="filter-btn active" data-category="all">All</button>';
    filterHTML += categories.sort().map(cat => 
        `<button class="filter-btn" data-category="${cat}">${cat.replace(/ /g, '&nbsp;')}</button>`
    ).join('');
    filterBar.innerHTML = filterHTML;
}

function renderTimeline() {
    if (!timelineContainer) return;
    if (observer) observer.disconnect();
    
    timelineContainer.innerHTML = '';

    // 1. Identify which events match the filter
    //    Also mark headers as 'visible' only if they have children that match the filter.
    
    const eventsToRender = [];
    let currentHeader = null;
    let headerHasChildren = false;

    timelineData.forEach(event => {
        if (event.type === 'era_header') {
            // If we had a previous header with valid children, push it and its children
            // (Logic handled by pushing children immediately; we just need to decide on the header)
            // Actually, better approach: Push header to a temp buffer. If a child matches, push header then child.
            currentHeader = event;
            headerHasChildren = false;
        } else {
            // Check if event matches filter
            const isMatch = activeFilters.size === 0 || activeFilters.has(event.category);
            
            if (isMatch) {
                // If we have a pending header that hasn't been added yet, add it now
                if (currentHeader) {
                    eventsToRender.push(currentHeader);
                    currentHeader = null; // Only add it once
                    headerHasChildren = true;
                }
                eventsToRender.push(event);
            }
        }
    });

    // 2. Render the list
    let side = 'left';
    eventsToRender.forEach(event => {
        const eventElement = document.createElement('div');
        
        if (event.type === 'era_header') {
            eventElement.className = 'timeline-era-header';
            eventElement.innerHTML = `<h2>${event.title}</h2>`;
            // Reset side for new era? Optional, but looks nice.
            // side = 'left'; 
        } else {
            const categoryClass = event.category ? `category-${event.category.toLowerCase().replace(/ & /g, '-').replace(/\s/g, '-')}` : '';
            
            // Specific styling for very recent events
            let timeAgoClass = 'timeline-elapsed';
            if (event.timeAgo === 'HAPPENING NOW' || event.timeAgo === 'YESTERDAY') {
                timeAgoClass += ' recent';
            }

            // Action Button (if link exists)
            const actionBtn = event.link ? 
                `<a href="${event.link}" class="control-btn small" style="display:inline-block; margin-top:8px; font-size:0.8rem;">View Report</a>` : '';
            
            // Icon handling (fallback)
            const iconSrc = event.icon || "icon_focus.png";

            eventElement.className = `timeline-event ${side} ${categoryClass}`;
            eventElement.innerHTML = `
                <div class="timeline-content">
                    <div class="timeline-header">
                         <img src="${iconSrc}" alt="${event.category} Icon" class="timeline-icon">
                         <div class="timeline-title-group">
                            <span class="${timeAgoClass}">${event.timeAgo}</span>
                            <h4>${event.title}</h4>
                         </div>
                    </div>
                    <p>${event.description}</p>
                    ${actionBtn}
                    <div class="timeline-footer">
                        <span class="timeline-date">${event.date}</span>
                    </div>
                </div>
            `;
            side = side === 'left' ? 'right' : 'left';
        }
        timelineContainer.appendChild(eventElement);
    });
    
    initAnimations();
}

function handleFilterClick(e) {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    playSound('click.mp3');
    const category = btn.dataset.category;

    if (category === 'all') {
        activeFilters.clear();
    } else {
        if (activeFilters.has(category)) activeFilters.delete(category);
        else activeFilters.add(category);
    }
    
    // Update UI classes
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (activeFilters.size === 0) {
        filterBar.querySelector('[data-category="all"]').classList.add('active');
    } else {
        activeFilters.forEach(cat => {
            const activeBtn = filterBar.querySelector(`[data-category="${cat}"]`);
            if(activeBtn) activeBtn.classList.add('active');
        });
    }
    renderTimeline();
}

function initAnimations() {
    const elements = document.querySelectorAll('.timeline-event, .timeline-era-header');
    if (elements.length === 0) return;
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    elements.forEach(el => observer.observe(el));
}

function setupEventListeners() {
    if (filterBar) filterBar.addEventListener('click', handleFilterClick);
}

function init() {
    if (!timelineContainer) return;
    renderFilters();
    renderTimeline();
    setupEventListeners();
}

init();
