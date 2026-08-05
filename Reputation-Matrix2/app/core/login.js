
import { LORE_DATA } from './lore.js';
import { WALUIGI_INTRO_TEXT, WALUIGI_REGION_TIPS } from './new-operator/new-operator-data.js';
import { playSound } from './app/core/common.js';
import { WAHBOOK_POSTS } from './data/assembly/assembly-data.js';
import { QUEST_DATA } from './data/quest-system/index.js';
import { CALENDAR_DATA, MAGICAL_WEATHER_EVENTS, CURRENT_GAME_DATE } from './data/world/calendar.js';
import { PARTY_LOCATIONS } from './data/support/party-data.js';
import { getActiveAge, NATIONS, getTechTree, calculateRumorMetrics } from './data/support/research-data.js';
import { state, loadState } from './app/core/state.js'; // Import state

const pathPrefix = (window.location.pathname.includes('/Reputation-Matrix2/') ? '' : 'Reputation-Matrix2/');

// --- Element Cache ---
const startupScreen = document.getElementById('startup-screen');
const enterAppBtn = document.getElementById('enter-app-btn');
const newOperatorBtn = document.getElementById('new-operator-btn');
const playGameBtn = document.getElementById('play-game-btn');
const playGameTimer = document.getElementById('play-game-timer');

const loginScreen = document.getElementById('character-login-screen');
const grid = document.getElementById('character-select-grid');
const genericBtn = document.getElementById('generic-login-btn');
const skipBtn = document.getElementById('skip-intro-btn');

const introOverlay = document.getElementById('intro-sequence-overlay');
const introTextElement = document.getElementById('intro-text');
const clickPrompt = document.getElementById('click-prompt');

const MAIN_CHARACTERS = ['archie', 'markop', 'hjumpik', 'bowser', 'remi'];

// --- Intro Sequence State ---
let fullMonologue = [];
let monologueIndex = -1;
let typingInterval;


// --- Functions ---

function selectProfile(profileKey) {
    localStorage.setItem('vigilanceTerminalUser', profileKey);
    // Fade out login screen before redirecting for a smoother experience
    if (loginScreen) {
        loginScreen.style.opacity = '0';
    }
    setTimeout(() => {
        window.location.href = pathPrefix + 'directory.html';
    }, 500); // Match CSS transition, gives time for fade
}
window.debugReset = function() {
    console.warn("⚠️ FORCING SESSION RESET");
    localStorage.removeItem('vigilanceTerminalUser');
    window.location.reload();
};
function setupLoginScreen() {
    if (!grid) return;

    // Create character cards
    grid.innerHTML = ''; // Clear any existing cards
    MAIN_CHARACTERS.forEach(charKey => {
        const character = LORE_DATA.characters[charKey];
        const card = document.createElement('div');
        card.className = 'char-card';
        card.dataset.charKey = charKey;
        const imageName = pathPrefix + `portraits/${charKey}.png`; 
        card.innerHTML = `
            <img src="${imageName}" alt="${character.name}">
            <h3>${character.name}</h3>
        `;
        grid.appendChild(card);
    });

    // Add event listeners for login screen elements
    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.char-card');
        if (card) {
            selectProfile(card.dataset.charKey);
        }
    });
    
    if (genericBtn) genericBtn.addEventListener('click', () => selectProfile('generic'));
    if (skipBtn) skipBtn.addEventListener('click', () => selectProfile('generic'));
}

function buildFullMonologue() {
    fullMonologue = [];
    fullMonologue.push(...WALUIGI_INTRO_TEXT);
    fullMonologue.push('---');
    fullMonologue.push("First, you need to know the lay of the land. It's a real mess out there! WAH-HA-HA! Let me tell you about the big places...");
    
    const regions = [
        'Mushroom Kingdom', 'The Midlands', 'The Internet', 'Middle-earth', 
        'The Fated Place', 'Kivotos', 'The Doughnut Hole'
    ];
    
    regions.forEach(regionName => {
        fullMonologue.push(`Next up is... ${regionName}!`);
        fullMonologue.push(WALUIGI_REGION_TIPS[regionName]);
    });
    
    fullMonologue.push('---');
    fullMonologue.push("Enough talk! Let's see what pathetic excuse for an operator you can come up with! Don't disappoint me!");
}

function playNextMonologueLine() {
    if (typingInterval) { // If a line is still typing, finish it instantly
        clearInterval(typingInterval);
        introTextElement.textContent = fullMonologue[monologueIndex];
        clickPrompt.classList.remove('hidden');
        typingInterval = null;
        return;
    }

    monologueIndex++;

    if (monologueIndex >= fullMonologue.length) {
        introOverlay.removeEventListener('click', playNextMonologueLine);
        window.location.href = pathPrefix + 'new-operator/new-operator.html';
        return;
    }

    playSound('../../assets/audio/ui/click.mp3', 0.4);
    const line = fullMonologue[monologueIndex];
    introTextElement.textContent = '';
    clickPrompt.classList.add('hidden');

    if (line === '---') {
        introTextElement.innerHTML = '<hr>';
        clickPrompt.classList.remove('hidden');
        return;
    }

    let charIndex = 0;
    typingInterval = setInterval(() => {
        if (charIndex < line.length) {
            introTextElement.textContent += line.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typingInterval);
            typingInterval = null;
            clickPrompt.classList.remove('hidden');
        }
    }, 25); // Typing speed
}


function startIntroSequence() {
    if (startupScreen) {
        startupScreen.style.opacity = '0';
        setTimeout(() => startupScreen.style.display = 'none', 500);
    }

    if (introOverlay && introTextElement) {
        buildFullMonologue();
        monologueIndex = -1;
        introOverlay.classList.remove('hidden');
        introOverlay.addEventListener('click', playNextMonologueLine);
        playNextMonologueLine(); // Start the first line
    }
}


function setupPlayGameButton() {
    if (!playGameBtn || !playGameTimer) return;

    const gameUrl = "http://introduction-proceed.gl.at.ply.gg:62000/join";

    function updateTimerAndButton() {
        const now = new Date();
        const dayOfWeek = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat

        // Enable button only on Sunday
        playGameBtn.disabled = (dayOfWeek !== 0);

        // Calculate time to next Sunday
        let nextSunday = new Date(now);
        nextSunday.setHours(0, 0, 0, 0); // Set to midnight

        let daysToAdd = (0 - dayOfWeek + 7) % 7;
        if (daysToAdd === 0) { // If it's Sunday, we want next week's Sunday for the countdown
            daysToAdd = 7;
        }

        nextSunday.setDate(now.getDate() + daysToAdd);

        const diff = nextSunday - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const timerString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        playGameTimer.textContent = dayOfWeek === 0
            ? `Game is available! Next session in: ${timerString}`
            : `Next session in: ${timerString}`;
    }

    playGameBtn.addEventListener('click', () => window.open(gameUrl, '_blank'));

    updateTimerAndButton(); // Initial call
    setInterval(updateTimerAndButton, 1000); // Update every second
}

function showLoginOrApp() {
    // This function is triggered when the user clicks "Main Website" on the startup screen.
    if (startupScreen) {
       startupScreen.style.opacity = '0';
       setTimeout(() => {
           startupScreen.style.display = 'none';
           
           const savedUser = localStorage.getItem('vigilanceTerminalUser');
            if (savedUser) {
                // If already logged in, go straight to the directory.
                window.location.href = pathPrefix + 'directory.html';
            } else {
                // Otherwise, show the character login screen.
                if (loginScreen) {
                    loginScreen.style.display = 'flex'; 
                    setTimeout(() => loginScreen.style.opacity = '1', 10); // Fade in after a tick
                    setupLoginScreen();
                }
            }
       }, 500); // Match CSS transition
    }
}

// --- NEW Dashboard Rendering Logic ---
function formatCharacterKey(key) {
    if (!key) return '';
    return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function getCharacterData(characterKey) {
    if (!characterKey) return { name: 'Unknown', portrait: pathPrefix + 'portraits/unknown.png', faction: null };
    const char = LORE_DATA.characters[characterKey] || LORE_DATA.auxiliary_party[characterKey];
    if (char && char.portrait) {
        let faction = null;
        for (const fKey in LORE_DATA.factions) {
            const fac = LORE_DATA.factions[fKey];
            if (fac.leader === characterKey || fac.notable_people?.some(p => p.name === char.name)) {
                faction = { name: fac.name, logo: pathPrefix + fac.logo };
                break;
            }
        }
        return { name: char.name, portrait: pathPrefix + char.portrait, faction };
    }
    if (LORE_DATA.factions[characterKey]) {
        const fac = LORE_DATA.factions[characterKey];
        return { name: fac.name, portrait: pathPrefix + fac.logo, faction: { name: fac.name, logo: pathPrefix + fac.logo } };
    }
    const specialCases = {
        'wah_media_collective': { name: "WAH Media Collective", portrait: pathPrefix + 'assets/icons/navigation/newspaper', faction: { name: "The Daily Paradox", logo: pathPrefix + 'assets/icons/navigation/newspaper' } },
    };
    if (specialCases[characterKey]) return { ...specialCases[characterKey] };
    return { name: formatCharacterKey(characterKey), portrait: pathPrefix + 'portraits/unknown.png', faction: null };
}

function getSeededRandom(seed) {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function generateWeatherForDay(year, monthIndex, day) {
    const season = CALENDAR_DATA.seasons.values.find(s => {
        const startMonth = s.monthStart - 1;
        const endMonth = s.monthEnd - 1;
        if (startMonth <= endMonth) { return monthIndex >= startMonth && monthIndex <= endMonth; } 
        else { return monthIndex >= startMonth || monthIndex <= endMonth; }
    });

    const seed = year * 10000 + (monthIndex + 1) * 100 + day;
    if (getSeededRandom(seed + 2) < 0.08 && MAGICAL_WEATHER_EVENTS.length > 0) {
        const magicalEvent = MAGICAL_WEATHER_EVENTS[Math.floor(getSeededRandom(seed + 3) * MAGICAL_WEATHER_EVENTS.length)];
        return { temp: `??°C`, icon: magicalEvent.icon, desc: magicalEvent.name, isMagical: true };
    }

    let baseTemp, tempVariation, weatherOptions;
    switch (season.name) {
        case 'Golden Summer': baseTemp = 24; tempVariation = 10; weatherOptions = [{ icon: '☀️', desc: 'Clear and Sunny', chance: 0.6 }, { icon: '🌤️', desc: 'Partly Cloudy', chance: 0.2 }, { icon: '☁️', desc: 'Overcast', chance: 0.1 }, { icon: '🌦️', desc: 'Scattered Showers', chance: 0.07 }, { icon: '⛈️', desc: 'Afternoon Thunderstorm', chance: 0.03 }]; break;
        case 'Hoarfrost Winter': baseTemp = -5; tempVariation = 8; weatherOptions = [{ icon: '❄️', desc: 'Light Snowfall', chance: 0.4 }, { icon: '🥶', desc: 'Bitterly Cold', chance: 0.3 }, { icon: '☁️', desc: 'Grey and Overcast', chance: 0.2 }, { icon: '☀️', desc: 'Crisp and Clear', chance: 0.1 }]; break;
        default: baseTemp = 12; tempVariation = 12; weatherOptions = [{ icon: '🌤️', desc: 'Mild and Pleasant', chance: 0.4 }, { icon: '☁️', desc: 'Cloudy Skies', chance: 0.25 }, { icon: '🌦️', desc: 'Light Showers', chance: 0.2 }, { icon: '💨', desc: 'Windy', chance: 0.15 }]; break;
    }

    const temperature = Math.floor(baseTemp + (getSeededRandom(seed + 1) * tempVariation) - (tempVariation / 2));
    let cumulativeChance = 0;
    const chosenWeather = weatherOptions.find(w => { cumulativeChance += w.chance; return getSeededRandom(seed) <= cumulativeChance; }) || weatherOptions[0];
    return { temp: `${temperature}°C`, ...chosenWeather };
}

function renderWeatherWidget() {
    const { year, monthIndex, day } = CURRENT_GAME_DATE;
    const weather = generateWeatherForDay(year, monthIndex, day);
    const magicalClass = weather.isMagical ? 'magical-weather' : '';
    return `
        <div id="weather-widget" class="dashboard-widget">
            <div class="widget-header">
                <span class="widget-icon">🌦️</span>
                <h3 class="widget-title">Midlands Forecast</h3>
            </div>
            <div class="widget-content ${magicalClass}">
                <div class="weather-icon">${weather.icon}</div>
                <div class="weather-temp">${weather.temp}</div>
                <p class="weather-desc">${weather.desc}</p>
            </div>
        </div>
    `;
}

function renderMissionWidget() {
    const quests = Object.values(QUEST_DATA);
    let latestQuest = quests.find(q => q.is_updated);
    if (!latestQuest) {
        latestQuest = quests.find(q => q.status === 'active');
    }
    if (!latestQuest) return '';

    return `
        <div id="mission-widget" class="dashboard-widget">
            <div class="widget-header">
                <span class="widget-icon">🎯</span>
                <h3 class="widget-title">Priority Mission</h3>
            </div>
            <div class="widget-content">
                <h4 class="mission-title">${latestQuest.title}</h4>
                <p class="mission-objective">${latestQuest.objective}</p>
                <div class="mission-details">
                    <span><strong>Assignee:</strong> ${latestQuest.assignee}</span>
                    <span><strong>Status:</strong> ${latestQuest.status.toUpperCase()}</span>
                </div>
            </div>
        </div>
    `;
}

function renderChatterWidget() {
    const latestPost = [...WAHBOOK_POSTS].sort((a, b) => (b.order || 0) - (a.order || 0))[0];
    if (!latestPost) return '';

    const author = getCharacterData(latestPost.characterKey);
    return `
        <div id="chatter-widget" class="dashboard-widget">
            <div class="widget-header">
                <span class="widget-icon">💬</span>
                <h3 class="widget-title">Latest Network Chatter</h3>
            </div>
            <div class="widget-content">
                <div class="post-header">
                    <img src="${author.portrait}" alt="${author.name}" class="post-pfp">
                    <div>
                        <div class="post-author-name">${author.name}</div>
                        <div class="post-meta">${latestPost.timestamp}</div>
                    </div>
                </div>
                <p class="post-content">${latestPost.content}</p>
            </div>
        </div>
    `;
}

function renderResearchWidget() {
    loadState(); // Ensure state is loaded
    const nationKey = 'midlands'; // Default view
    const age = getActiveAge(nationKey);
    const tree = getTechTree(nationKey, 'WEAPONS', state.researchState); // Pass state here
    const researching = Object.values(tree).find(n => n.status === 'researching');
    const researchingName = researching ? researching.name : "No active weapon projects.";

    return `
         <div id="research-widget" class="dashboard-widget">
            <div class="widget-header">
                <span class="widget-icon">🔬</span>
                <h3 class="widget-title">Research & Dev</h3>
            </div>
            <div class="widget-content">
                <p style="color:var(--accent-color); font-weight:bold; font-family:var(--font-display)">${NATIONS[nationKey].name}</p>
                <p style="margin:5px 0;">Current Age: <strong>${age.name}</strong></p>
                <hr style="border-color:var(--border-color); opacity:0.5;">
                <p style="margin-top:10px; font-size:0.9rem;"><strong>Latest Priority:</strong><br>${researchingName}</p>
                <a href="${pathPrefix}research.html" class="intel-link-btn">Open Research Lab</a>
            </div>
        </div>
    `;
}

function renderAnalysisWidget() {
    const analysisText = "WAH-HA-HA! The haunted house has turned into a theater! 'Just Desserts'? I love a good show, especially when ghosts get punched in the face! Bowser is smashing spirits, the Dwarf is headbutting them, and the three-eyed bandit came back with a ticket! A TICKET! Magnificent absurdity! But the best part? The little toads are fighting each other! Delicious chaos!";
    return `
         <div id="analysis-widget" class="dashboard-widget">
            <div class="widget-header">
                <span class="widget-icon">🧐</span>
                <h3 class="widget-title">Waluigi's Analysis</h3>
            </div>
            <div class="widget-content">
                <p>${analysisText}</p>
            </div>
        </div>
    `;
}

function renderPartyStatusWidget() {
    const allPartyMembers = Object.values(PARTY_LOCATIONS).flat();
    const mainPartyKeys = ['archie', 'markop', 'hjumpik', 'bowser', 'remi'];

    const partyListHTML = mainPartyKeys.map(charKey => {
        const charInfo = LORE_DATA.characters[charKey];
        const locationInfo = allPartyMembers.find(p => p.charKey === charKey);
        
        if (!charInfo || !locationInfo) {
            return '';
        }
        
        const status = locationInfo.status || 'Unknown';
        const statusClass = status.toLowerCase().replace(/\s+/g, '-');

        return `
            <li class="party-member-item">
                <img src="${charInfo.portrait}" alt="${charInfo.name}" class="party-member-pfp">
                <div class="party-member-info">
                    <span class="party-member-name">${charInfo.name}</span>
                    <span class="party-member-status status-${statusClass}">${status}</span>
                </div>
            </li>
        `;
    }).join('');

    return `
        <div id="party-status-widget" class="dashboard-widget">
            <div class="widget-header">
                <span class="widget-icon">👥</span>
                <h3 class="widget-title">Party Status</h3>
            </div>
            <div class="widget-content">
                <ul class="party-status-list">
                    ${partyListHTML}
                </ul>
            </div>
        </div>
    `;
}

function renderIntelWidget() {
    // Calculate impact for all rumors and find the highest
    let topRumor = null;
    let maxScore = -999;

    LORE_DATA.rumors.forEach(rumor => {
         const relatedPosts = WAHBOOK_POSTS.filter(post => post.rumorId === rumor.id);
         const metrics = calculateRumorMetrics(rumor, relatedPosts);
         
         if (Math.abs(metrics.finalScore) > maxScore) {
             maxScore = Math.abs(metrics.finalScore);
             topRumor = rumor;
         }
    });

    if (!topRumor) return '';

    return `
        <div id="intel-widget" class="dashboard-widget">
            <div class="widget-header">
                <span class="widget-icon">📰</span>
                <h3 class="widget-title">Top Trending Intel</h3>
            </div>
            <div class="widget-content">
                <h4 class="intel-title">${topRumor.title}</h4>
                <p class="intel-summary">${topRumor.description}</p>
                <a href="${pathPrefix}assembly.html#intel" class="intel-link-btn">View Full Intel Dossier</a>
            </div>
        </div>
    `;
}

function renderWaluipediaWidget() {
    return `
        <div id="waluipedia-widget" class="dashboard-widget">
            <div class="widget-header">
                <span class="widget-icon">🎭</span>
                <h3 class="widget-title">Waluipedia Audit Desk</h3>
            </div>
            <div class="widget-content">
                <h4 class="intel-title" style="color:var(--accent-color,#ffd700);font-weight:bold;margin-bottom:4px">The Midnight Audit of Harvestide 28</h4>
                <p class="intel-summary" style="font-size:12px;color:var(--text-color-muted,#bbb);line-height:1.4">Midnight Estate intrusions, firearm recovery by Remi Akamatsu, Black Crystal lie testing, and a closet-bound spy. 100 polities & 48 currencies tracked.</p>
                <a href="${pathPrefix}battlefield.html#/article/the_midnight_audit_of_harvestide_28" class="intel-link-btn" style="display:inline-block;margin-top:8px;padding:4px 10px;background:rgba(255,215,0,0.15);border:1px solid rgba(255,215,0,0.4);border-radius:6px;color:#ffd700;text-decoration:none;font-size:11px">Access Waluipedia Terminal →</a>
            </div>
        </div>
    `;
}

function renderInkwellLibraryWidget() {
    return `
        <div id="inkwell-library-widget" class="dashboard-widget">
            <div class="widget-header">
                <span class="widget-icon">📜</span>
                <h3 class="widget-title">Inkwell's Scriptorium</h3>
            </div>
            <div class="widget-content">
                <h4 class="intel-title" style="color:#a78bfa;font-weight:bold;margin-bottom:4px">Master Scribe Inkwell's Royal Archives</h4>
                <p class="intel-summary" style="font-size:12px;color:var(--text-color-muted,#bbb);line-height:1.4">50 authenticated codices, military treatises, bloodline genealogies, and secret diaries across 14 realms. Curated by House Toadstool's Chief Genealogist.</p>
                <a href="${pathPrefix}bookshelf.html" class="intel-link-btn" style="display:inline-block;margin-top:8px;padding:4px 10px;background:rgba(167,139,250,0.15);border:1px solid rgba(167,139,250,0.4);border-radius:6px;color:#c4b5fd;text-decoration:none;font-size:11px">Open Royal Scriptorium →</a>
            </div>
        </div>
    `;
}

function renderCurrencyWidget() {
    return `
        <div id="currency-widget" class="dashboard-widget">
            <div class="widget-header">
                <span class="widget-icon">💱</span>
                <h3 class="widget-title">Bank & Multi-Currency</h3>
            </div>
            <div class="widget-content">
                <h4 class="intel-title" style="color:#4ade80;font-weight:bold;margin-bottom:4px">48 International Tenders</h4>
                <p class="intel-summary" style="font-size:12px;color:var(--text-color-muted,#bbb);line-height:1.4">Gold, Mora, Wario Coins, Soul Coins, Bowser Bux, Ducats, and 42 other tenders. Bank vault balances, loans, and Wario checkout integration.</p>
                <a href="${pathPrefix}currency.html" class="intel-link-btn" style="display:inline-block;margin-top:8px;padding:4px 10px;background:rgba(74,222,128,0.15);border:1px solid rgba(74,222,128,0.4);border-radius:6px;color:#86efac;text-decoration:none;font-size:11px">Open Currency Bank →</a>
            </div>
        </div>
    `;
}

function renderDashboard() {
    const dashboard = document.getElementById('session-dashboard');
    if (!dashboard) return;
    dashboard.innerHTML = `
        ${renderWaluipediaWidget()}
        ${renderInkwellLibraryWidget()}
        ${renderCurrencyWidget()}
        ${renderWeatherWidget()}
        ${renderMissionWidget()}
        ${renderPartyStatusWidget()}
        ${renderChatterWidget()}
        ${renderIntelWidget()}
    `;
}
function main() {
    // --- START DEBUG CHECK ---
    // Check if the URL contains ?reset=true
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('reset') === 'true') {
        console.log("Reset flag detected. Clearing session.");
        localStorage.removeItem('vigilanceTerminalUser');
        // Clean the URL so we don't reset every time we refresh
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    // --- END DEBUG CHECK ---

    // Hide login screen initially
    if (loginScreen) {
        loginScreen.style.display = 'none';
        loginScreen.style.opacity = '0'; // For fade-in transition
    }

    // Setup startup screen event listeners
    if (startupScreen && enterAppBtn) {
        renderDashboard();
        enterAppBtn.addEventListener('click', showLoginOrApp);
        
        // ... [Rest of your existing main logic] ...
        
        if (newOperatorBtn) {
            newOperatorBtn.addEventListener('click', startIntroSequence);
        }
        
        // ... 
    } else {
        // Fallback if there is no startup screen for some reason.
        const savedUser = localStorage.getItem('vigilanceTerminalUser');
        if (savedUser) {
            window.location.href = pathPrefix + 'directory.html';
        } else {
            if (loginScreen) {
                loginScreen.style.display = 'flex';
                loginScreen.style.opacity = '1';
                setupLoginScreen();
            }
        }
    }
}

main();
