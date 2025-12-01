
import { HISTORICAL_TIMELINE as rawTimelineData } from './timeline-data.js';
import { MAJOR_BATTLES } from './battlefield.js';
import { playSound } from './common.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA, getDynamicTimestamp } from './calendar-data.js';

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






/**
 * Parses a date (string or object) into a numeric value for sorting.
 */
function parseDateToSortKey(event) {
    const dateVal = event.date;
    
    if (!dateVal) return -9999999999999; 
    if (dateVal === 'Ongoing') return 9999999999999; 

    // Case 1: Date Object
    if (typeof dateVal === 'object' && dateVal.year !== undefined) {
        const year = dateVal.year - 1041; // Normalize
        const day = dateVal.day || 0;
        const hour = dateVal.hour || 12;
        const minute = dateVal.minute || 0;

        const minutesInYear = 365 * 24 * 60;
        const minutesInDay = 24 * 60;
        
        return (year * minutesInYear) + (day * minutesInDay) + (hour * 60) + minute;
    }

    // Case 2: Legacy String (Fallback for manually entered timeline data strings)
    let year = 0;
    const dateStr = String(dateVal);
    const bfAfMatch = dateStr.match(/(\d+)\s*(BF|AF)/);
    const circaMatch = dateStr.match(/c\.\s*(\d+)\s*BF/);
    const ieMatch = dateStr.match(/(\d+)\s*IE/);

    if (bfAfMatch) {
        year = parseInt(bfAfMatch[1], 10);
        if (bfAfMatch[2] === 'BF') year = -year;
    } else if (circaMatch) {
        year = -parseInt(circaMatch[1], 10);
    } else if (ieMatch) {
        year = parseInt(ieMatch[1], 10) - 1041; 
    }

    const dayMatch = dateStr.match(/Day\s*(\d+)/);
    const day = dayMatch ? parseInt(dayMatch[1], 10) : 0;
    
    const hour = 12;
    const minute = 0;

    const minutesInYear = 365 * 24 * 60;
    const minutesInDay = 24 * 60;

    return (year * minutesInYear) + (day * minutesInDay) + (hour * 60) + minute;
}

/**
 * Calculates a human-readable "Time Ago" string.
 */
function calculateTimeAgo(event) {
    const dateVal = event.date;
    
    if (dateVal === 'Ongoing') return "HAPPENING NOW";

    // If it's an object, it's a structured event, use dynamic timestamp
    if (typeof dateVal === 'object' && dateVal.year !== undefined) {
        return getDynamicTimestamp(dateVal);
    }

    // Fallback for strings (Historical events)
    const dateStr = String(dateVal);

    let eventYear = 0;
    if (dateStr.includes("BF")) {
        const match = dateStr.match(/(\d+)\s*BF/);
        if (match) eventYear = -parseInt(match[1], 10);
    }

    const currentYear = 1040;
    // If year is very old (e.g., 995 BF vs 1040 is just 45 years, but 1000 BF is confusing.
    // Assuming BF means "Before Founding" or similar relative epoch.
    // If event year is negative, it's ancient.
    if (eventYear < 0) {
         // E.g. 1000 BF
         return "ANCIENT ERA";
    }
    
    const yearDiff = currentYear - eventYear;

    if (yearDiff > 1000) return `${Math.floor(yearDiff / 1000)}k+ YEARS AGO`;
    if (yearDiff > 0) return `${yearDiff} YEARS AGO`;
    
    return "";
}

function formatTime(hour, minute) {
    const h = hour.toString().padStart(2, '0');
    const m = minute.toString().padStart(2, '0');
    return `${h}:${m}`;
}

function formatDateForDisplay(dateVal) {
    if (typeof dateVal === 'object') {
        const monthName = CALENDAR_DATA.months.values[dateVal.monthIndex]?.name || "Unknown Month";
        const timeStr = formatTime(dateVal.hour, dateVal.minute);
        return `${monthName} ${dateVal.day}, ${dateVal.year} BF <span class="timeline-specific-time">@ ${timeStr}</span>`;
    }
    return String(dateVal);
}

function processTimelineData() {
    // 1. Get manual timeline events
    let combinedData = [...rawTimelineData];

    // 2. Generate and add Battle Events

    // 3. Process sort keys and display strings
    const processed = combinedData.map(event => {
        const newEvent = { ...event };
        if (newEvent.type !== 'era_header') {
            newEvent.sortKey = parseDateToSortKey(newEvent);
            newEvent.timeAgo = calculateTimeAgo(newEvent);
            newEvent.displayDate = formatDateForDisplay(newEvent.date);
        }
        return newEvent;
    });

    // 4. Assign sort keys to Era Headers
    for (let i = 0; i < processed.length; i++) {
        if (processed[i].type === 'era_header') {
            let nextEventKey = -Infinity; 
            for (let j = i + 1; j < processed.length; j++) {
                if (processed[j].type !== 'era_header' && processed[j].sortKey !== undefined) {
                    nextEventKey = processed[j].sortKey;
                    break;
                }
            }
            processed[i].sortKey = (nextEventKey === -Infinity) ? -99999999999999 : (nextEventKey - 0.1); 
        }
    }
    
    // 5. Sort
    return processed.sort((a, b) => (a.sortKey || 0) - (b.sortKey || 0));
}

const timelineData = processTimelineData();

function renderFilters() {
    if (!filterBar) return;
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
    
    const eventsToRender = [];
    let currentHeader = null;

    timelineData.forEach(event => {
        if (event.type === 'era_header') {
            currentHeader = event;
        } else {
            const isMatch = activeFilters.size === 0 || activeFilters.has(event.category);
            
            if (isMatch) {
                if (currentHeader) {
                    eventsToRender.push(currentHeader);
                    currentHeader = null; 
                }
                eventsToRender.push(event);
            }
        }
    });

    let side = 'left';
    eventsToRender.forEach(event => {
        const eventElement = document.createElement('div');
        
        if (event.type === 'era_header') {
            eventElement.className = 'timeline-era-header';
            eventElement.innerHTML = `<h2>${event.title}</h2>`;
        } else {
            const categoryClass = event.category ? `category-${event.category.toLowerCase().replace(/ & /g, '-').replace(/\s/g, '-')}` : '';
            
            let timeAgoClass = 'timeline-elapsed';
            if (event.timeAgo.includes('Just Now') || event.timeAgo.includes('minute') || event.timeAgo === 'Yesterday') {
                timeAgoClass += ' recent';
            }

            const actionBtn = event.link ? 
                `<a href="${event.link}" class="control-btn small" style="display:inline-block; margin-top:8px; font-size:0.8rem;">View Report</a>` : '';
            
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
                        <span class="timeline-date">${event.displayDate}</span>
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
