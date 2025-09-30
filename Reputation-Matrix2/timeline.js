
import { HISTORICAL_TIMELINE as rawTimelineData } from './timeline-data.js';
import { playSound } from './common.js';

const timelineContainer = document.getElementById('timeline-container');
const filterBar = document.getElementById('timeline-filter-bar');

let activeFilters = new Set();
let observer;

/**
 * Parses a date string (e.g., "1040 IE (1 BF), Day 5", "c. 8000 BF", "50 AF")
 * into a single, sortable numeric value.
 * More recent events have a higher value. BF years are negative.
 * @param {string} dateStr - The date string from the data.
 * @returns {number} A numeric key for sorting.
 */
function parseDateToSortKey(dateStr) {
    if (!dateStr) return 0;

    let year;
    
    // Regex priority:
    // 1. Explicit BF/AF tag (e.g., "1040 IE (1 BF)")
    const bfAfMatch = dateStr.match(/(\d+)\s*(BF|AF)/);
    // 2. Circa BF tag (e.g., "c. 8000 BF")
    const circaMatch = dateStr.match(/c\.\s*(\d+)\s*BF/);
    // 3. Standalone IE tag (e.g., "c. 880 IE")
    const ieMatch = dateStr.match(/(\d+)\s*IE/);

    if (bfAfMatch) {
        year = parseInt(bfAfMatch[1], 10);
        if (bfAfMatch[2] === 'BF') {
            year = -year;
        }
    } else if (circaMatch) {
        year = -parseInt(circaMatch[1], 10);
    } else if (ieMatch) {
        // Convert IE to a year value on the BF/AF timeline.
        // 1040 IE is 1 BF, which is year -1.
        // Formula: IE Year - 1041
        year = parseInt(ieMatch[1], 10) - 1041;
    } else {
        // Fallback for dates without a clear era marker
        return 0;
    }

    const dayMatch = dateStr.match(/Day\s*(\d+)/);
    const day = dayMatch ? parseInt(dayMatch[1], 10) : 0;
    
    // Add day as a small fraction to sort within the same year.
    const dayFraction = day / 1000;

    return year + dayFraction;
}


/**
 * Processes the raw timeline data into a sorted, structured format.
 * @returns {Array} The sorted and processed timeline events.
 */
function processTimelineData() {
    const processed = rawTimelineData.map(event => {
        const newEvent = { ...event };
        if (newEvent.type !== 'era_header') {
            newEvent.sortKey = parseDateToSortKey(newEvent.date);
        }
        return newEvent;
    });

    // This loop assumes that in the raw data, a header is immediately followed by events from that era.
    for (let i = 0; i < processed.length; i++) {
        if (processed[i].type === 'era_header') {
            let nextEventKey = Infinity;
            // Find the next actual event to anchor the header's position
            for (let j = i + 1; j < processed.length; j++) {
                if (processed[j].type !== 'era_header' && processed[j].sortKey !== undefined) {
                    nextEventKey = processed[j].sortKey;
                    break;
                }
            }
            // Place the header just before the first event of its group.
            processed[i].sortKey = nextEventKey - 0.0001; 
        }
    }
    
    // Sort chronologically (past to present) using the generated numeric key
    return processed.sort((a, b) => (a.sortKey || 0) - (b.sortKey || 0));
}

const timelineData = processTimelineData();

function renderFilters() {
    if (!filterBar) return;

    const categories = [...new Set(timelineData.filter(e => e.category).map(e => e.category))];
    
    let filterHTML = '<button class="filter-btn active" data-category="all">All</button>';
    // Use &nbsp; to prevent text wrapping on smaller screens
    filterHTML += categories.sort().map(cat => 
        `<button class="filter-btn" data-category="${cat}">${cat.replace(/ /g, '&nbsp;')}</button>`
    ).join('');

    filterBar.innerHTML = filterHTML;
}

function renderTimeline() {
    if (!timelineContainer) return;

    if (observer) observer.disconnect();
    
    timelineContainer.innerHTML = '';

    const filteredEvents = activeFilters.size === 0 
        ? timelineData 
        : timelineData.filter(event => event.type === 'era_header' || activeFilters.has(event.category));
    
    let side = 'left'; // Start on the left
    filteredEvents.forEach(event => {
        const eventElement = document.createElement('div');
        
        if (event.type === 'era_header') {
            eventElement.className = 'timeline-era-header';
            eventElement.innerHTML = `<h2>${event.title}</h2>`;
            // Do not flip side for headers, so the pattern continues logically
        } else {
            const categoryClass = event.category ? `category-${event.category.toLowerCase().replace(/ & /g, '-').replace(/\s/g, '-')}` : '';
            eventElement.className = `timeline-event ${side} ${categoryClass}`;
            eventElement.innerHTML = `
                <div class="timeline-content">
                    <div class="timeline-header">
                         <img src="${event.icon}" alt="${event.category} Icon" class="timeline-icon">
                         <div class="timeline-title-group">
                            <h4>${event.title}</h4>
                            <span class="timeline-date">${event.date}</span>
                         </div>
                    </div>
                    <p>${event.description}</p>
                </div>
            `;
            // Alternate sides for the next event card
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
        if (activeFilters.has(category)) {
            activeFilters.delete(category);
        } else {
            activeFilters.add(category);
        }
    }
    
    // Update button UI
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
    if (filterBar) {
        filterBar.addEventListener('click', handleFilterClick);
    }
}

function init() {
    if (!timelineContainer) return;
    renderFilters();
    renderTimeline();
    setupEventListeners();
}

init();
