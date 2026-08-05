
import { LORE_DATA } from './lore.js';
import { WAHBOOK_POSTS } from './assembly-data.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA, generateWeatherForDay, MOON_PHASES } from './data/world/calendar.js';
import { calculateGlobalCycle, getAbsoluteDay, calculateRumorMetrics } from './research-data.js';

/**
 * Renders the HTML for the Rakasha Daily Roundup
 */
export function renderRakashaNews() {
    const container = document.getElementById('rakasha-news-container');
    if (!container) return;

    // --- GATHER DATA ---
    const day = CURRENT_GAME_DATE.day;
    const monthIndex = CURRENT_GAME_DATE.monthIndex;
    const year = CURRENT_GAME_DATE.year;
    const absDay = getAbsoluteDay();
    
    const weather = generateWeatherForDay(year, monthIndex, day);
    const moonPhaseIndex = Math.floor((absDay % 28) / 28 * MOON_PHASES.length) % MOON_PHASES.length;
    const moonPhase = MOON_PHASES[moonPhaseIndex];
    
    const globalCycle = calculateGlobalCycle(WAHBOOK_POSTS);
    const topRumor = getTopRumor();
    const gossip = getRakashaWhispers(absDay, globalCycle);
    const factionHeat = calculateRakashaHeat(absDay);

    // --- RAKASHA FLAVOR TEXT ---
    const paperTitle = "THE BLOOD-ECHO";
    const subTitle = "SCRAWLED ON BONE & BARK";
    
    // Translate Cycle to Rakasha Speak
    const rakashaCycle = getRakashaCycleName(globalCycle.phase);

    // --- TEMPLATE ---
    const html = `
        <div class="rakasha-paper">
            <header class="paper-header">
                <div class="paper-masthead">
                    <span class="claw-mark">///</span>
                    <div class="paper-title">${paperTitle}</div>
                    <span class="claw-mark">\\\\\\</span>
                </div>
                <div class="paper-meta">
                    <span>HUNT DAY ${absDay}</span>
                    <span>${subTitle}</span>
                    <span>THE JUNGLE SEES ALL</span>
                </div>
                <div class="paper-greeting">
                    "Iron rusts. Flesh rots. Only the Hunt remains."
                </div>
            </header>

            <div class="paper-body">
                
                <!-- TOP SECTION: THE BIG HUNT (Main Story) -->
                <div class="main-headline">
                    <span class="section-label">FRESH SCENT</span>
                    <h1 class="headline-title">${topRumor.headline}</h1>
                    <div class="headline-flavor">"${topRumor.flavor_intro}"</div>
                    <div class="headline-body">
                        ${topRumor.body}
                    </div>
                    <div class="headline-analysis">
                        <div class="analysis-item">
                            <span class="analysis-label">THE PREY</span>
                            <span class="analysis-value">${topRumor.target}</span>
                        </div>
                        <div class="analysis-item">
                            <span class="analysis-label">THREAT SCENT</span>
                            <span class="analysis-value ${getThreatColorClass(topRumor.impactVal)}">${topRumor.impact}</span>
                        </div>
                    </div>
                </div>

                <div class="paper-columns">
                    <!-- LEFT COL: ENVIRONMENT & SPIRITS -->
                    <div class="paper-col-left">
                        
                        <div class="cycle-box">
                            <div class="cycle-header">
                                <span class="section-label">THE GREAT WHEEL</span>
                            </div>
                            <span class="cycle-phase" style="color: ${globalCycle.phase.color}">${rakashaCycle.name}</span>
                            <p class="cycle-interpretation">
                                <span class="interp-main">${rakashaCycle.desc}</span><br>
                                <span class="interp-desc">The winds shift. Momentum: ${globalCycle.momentum.toFixed(1)}</span>
                            </p>
                            <div class="meter-track">
                                <div class="meter-fill" style="width: ${Math.min(100, Math.abs(globalCycle.momentum) * 5)}%; background: ${globalCycle.phase.color}"></div>
                            </div>
                        </div>

                        <div class="weather-box">
                            <div class="weather-main">
                                <span class="weather-icon">${weather.icon}</span>
                                <div>
                                    <div class="weather-title">${getRakashaWeatherName(weather)}</div>
                                    <div class="weather-temp">${weather.temp}</div>
                                </div>
                            </div>
                            <div class="weather-hunt">
                                <em>${getRakashaWeatherAdvice(weather)}</em>
                            </div>
                        </div>

                        <div class="moon-box">
                            <div class="moon-main">
                                <span class="moon-icon">${moonPhase.icon}</span>
                                <div>
                                    <div class="moon-phase">${moonPhase.name.toUpperCase()}</div>
                                    <div class="moon-lore">${moonPhase.lore}</div>
                                </div>
                            </div>
                            <div class="moon-advice">
                                ${getRakashaMoonAdvice(moonPhase)}
                            </div>
                        </div>

                    </div>

                    <!-- RIGHT COL: FACTIONS & WHISPERS -->
                    <div class="paper-col-right">
                        
                        <div class="faction-watch-box paper-section">
                            <span class="section-label">WATCHING THE HERDS</span>
                            <ul class="faction-list">
                                ${factionHeat.length > 0 ? factionHeat.map(f => `
                                    <li class="faction-item">
                                        <span class="faction-status">${f.icon}</span>
                                        <div class="faction-info">
                                            <strong>${f.name}</strong>
                                            <span class="faction-activity">${f.activity}</span>
                                        </div>
                                    </li>
                                `).join('') : '<li><span class="faction-activity">The jungle holds its breath...</span></li>'}
                            </ul>
                        </div>

                        <div class="whispers-box paper-section">
                            <span class="section-label">WIND WHISPERS</span>
                            ${gossip.map(g => `
                                <div class="whisper-item">
                                    <div class="whisper-intro">${g.intro}</div>
                                    <p class="whisper-content">"${g.content}"</p>
                                    <div class="whisper-source">— ${g.author}</div>
                                </div>
                            `).join('')}
                        </div>

                    </div>
                </div>
                
                <!-- FOOTER -->
                <div class="paper-footer">
                    <div class="footer-decoration">𓄂 𓃬 𓄂</div>
                    <p class="footer-closing">TRUST ONLY THE CLAW. FEAR ONLY THE SILENCE.</p>
                    <p class="footer-small">This missive will self-destruct if eaten.</p>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// --- RAKASHA TRANSLATION LAYERS ---

const RAKASHA_FACTIONS = {
    'iron_legion': "The Iron-Hides",
    'regal_empire': "The High-Crowns",
    'mushroom_regency': "The Soft-Heads",
    'koopa_troop': "The Shell-Backs",
    'toad_gang': "The Spore-Rats",
    'mages_guild': "The Spark-Weavers",
    'onyx_hand': "The Night-Drinkers",
    'moonfang_pack': "The False-Kin", // Werewolves are 'false' kin to Rakasha
    'freelancer_underworld': "The Web-Spinners",
    'liberated_toads': "The Broken-Chains",
    'fawfuls_furious_freaks': "The Green-Manics",
    'cosmic_jesters': "The Laughing-Madness",
    'dk_crew': "The Great Apes",
    'kremling_krew': "The Scale-Bellies"
};

function getRakashaName(key) {
    if (RAKASHA_FACTIONS[key]) return RAKASHA_FACTIONS[key];
    const fac = LORE_DATA.factions[key];
    if (fac) return `The ${fac.name}`;
    return "The Unknown Herd";
}

function getThreatColorClass(val) {
    const v = parseFloat(val);
    if (v > 10) return 'threat-high';
    if (v > 5) return 'threat-medium';
    return 'threat-low';
}

function getRakashaCycleName(phase) {
    const map = {
        'calm': { name: "The Sleeping River", desc: "The water is still. The prey grows fat. We wait." },
        'research': { name: "The Seeing Eye", desc: "New paths are found. The spark-weavers are busy." },
        'expansion': { name: "The Stretched Claw", desc: "Territories grow. Boundaries bleed." },
        'tension': { name: "The Low Growl", desc: "Fur hackles rise. Teeth are bared, but not biting." },
        'conflict': { name: "The Red Tooth", desc: "Blood waters the roots. The hunt is open." },
        'crisis': { name: "The Broken Sky", desc: "The world shakes. Survival is the only law." },
        'rebirth': { name: "The Green Sprout", desc: "From the ash, new life. The cycle turns." }
    };
    return map[phase.id] || { name: "The Fog", desc: "The path is hidden." };
}

function getRakashaWeatherName(weather) {
    const w = weather.desc.toLowerCase();
    if (w.includes('storm') || w.includes('thunder')) return "SKY-WRATH";
    if (w.includes('rain') || w.includes('shower')) return "WEEPING SKIES";
    if (w.includes('cloud') || w.includes('overcast')) return "GREY BLANKET";
    if (w.includes('snow') || w.includes('cold')) return "FROST-BITE";
    if (w.includes('sun') || w.includes('clear')) return "BURNING EYE";
    return "UNCERTAIN WINDS";
}

function getRakashaWeatherAdvice(weather) {
    const w = weather.desc.toLowerCase();
    if (w.includes('storm')) return "Seek shelter deep. The thunder hunts today.";
    if (w.includes('rain')) return "Scent is lost in the water. Hunt by sight.";
    if (w.includes('cloud')) return "Shadows are long. Good for stalking.";
    if (w.includes('cold')) return "Fur thickens. Blood slows. Strike hard.";
    if (w.includes('sun')) return "The open ground is dangerous. Stick to the shade.";
    return "Watch the leaves. They tell the true path.";
}

function getRakashaMoonAdvice(phase) {
    if (phase.name.includes("Hole") || phase.name.includes("New")) return "Darkness is our ally. Move unseen.";
    if (phase.name.includes("Full") || phase.name.includes("Glazed")) return "The False-Kin (Werewolves) will be frenzied. Guard the perimeter.";
    if (phase.name.includes("Waxing")) return "Power grows. Sharpen your claws.";
    return "The light fades. Patience is key.";
}

// --- DATA LOGIC ---

function getTopRumor() {
    const rumors = LORE_DATA.rumors || [];
    let bestRumor = null;
    let maxScore = -1;

    // Find most impactful active rumor
    rumors.forEach(r => {
        const posts = WAHBOOK_POSTS.filter(p => p.rumorId === r.id);
        const metrics = calculateRumorMetrics(r, posts);
        if (Math.abs(metrics.finalScore) > maxScore) {
            maxScore = Math.abs(metrics.finalScore);
            bestRumor = r;
        }
    });

    if (!bestRumor) {
        return {
            headline: "THE JUNGLE SLEEPS",
            flavor_intro: "No great beasts stir.",
            body: "The lands are quiet. Too quiet. The Rakasha hunters sharpen their spears and wait for the inevitable noise.",
            target: "The Silence",
            impact: "None",
            impactVal: 0
        };
    }

    // Rakasha-fy the text
    let headline = bestRumor.title.toUpperCase();
    headline = headline.replace("THE", "THE GREAT"); // Add emphasis
    
    let flavor = "The wind carries the copper scent of blood.";
    const type = bestRumor.cycle_impact?.type || 'general';
    
    if (type === 'military') flavor = "Iron clashes. Flesh tears. The herds are at war.";
    if (type === 'magic') flavor = "The air tastes of ozone and old ghosts.";
    if (type === 'political') flavor = "The crowned ones speak soft words with sharp teeth.";
    if (type === 'crisis') flavor = "The earth trembles. The spirits scream.";

    // Generate body text - keep original but frame it
    const body = bestRumor.description;
    
    let target = "Unknown Prey";
    if (bestRumor.targets && bestRumor.targets.length > 0) {
        target = bestRumor.targets.map(t => {
            if (RAKASHA_FACTIONS[t]) return RAKASHA_FACTIONS[t];
            const char = LORE_DATA.characters[t];
            return char ? char.name : t;
        }).join(', ');
    }

    return {
        headline,
        flavor_intro: flavor,
        body,
        target: target,
        impact: maxScore > 10 ? "DEAFENING" : (maxScore > 5 ? "STRONG" : "FAINT"),
        impactVal: maxScore
    };
}

/**
 * Generate evocative whispers based on recent events
 */
function getRakashaWhispers(currentAbsDay, globalCycle) {
    const oneWeekAgo = currentAbsDay - 7;
    
    // 1. Find actual recent short posts
    const recentPosts = WAHBOOK_POSTS.filter(p => {
        if (!p.date) return false;
        const postAbsDay = ((p.date.year - 1035) * 365) + (p.date.monthIndex * 30) + p.date.day;
        return postAbsDay >= oneWeekAgo && postAbsDay <= currentAbsDay && p.content.length < 120;
    });

    // Mix with procedural Rakasha gossip
    const proceduralGossip = [
        { 
            intro: "SEEN AT THE RIVER", 
            content: "The water runs dark today. Someone is washing armor upstream.", 
            author: "River-Watcher" 
        },
        { 
            intro: "SMELT ON THE BREEZE", 
            content: "Sulfur and machine-oil. The Iron-Hides are moving engines.", 
            author: "Night-Nose" 
        },
        {
            intro: "HEARD IN THE CANOPY",
            content: "The birds are silent in the West. A predator walks there.",
            author: "Tree-Climber"
        }
    ];

    // Select 1 real post and 2 procedural
    const selected = [];
    
    // Add relevant cycle gossip
    if (globalCycle.phase.id === 'conflict') {
        selected.push({ intro: "WAR DRUMS", content: "The ground shakes. The herds are thinning themselves.", author: "Old One" });
    } else if (globalCycle.phase.id === 'magic') {
        selected.push({ intro: "SKY FIRE", content: "The stars moved wrong last night. The Spark-Weavers are playing.", author: "Star-Gazer" });
    }

    if (recentPosts.length > 0) {
        const p = recentPosts[Math.floor(Math.random() * recentPosts.length)];
        let authorName = p.characterKey.replace(/_/g, ' ').toUpperCase();
        if (RAKASHA_FACTIONS[p.characterKey]) authorName = RAKASHA_FACTIONS[p.characterKey].toUpperCase();
        
        selected.push({
            intro: "INTERCEPTED CRIES",
            content: p.content,
            author: `A ${authorName}`
        });
    }

    // Fill rest with procedural
    while (selected.length < 3) {
        const g = proceduralGossip.pop();
        if(g) selected.push(g);
        else break;
    }

    return selected;
}

/**
 * Calculate faction activity and convert to Rakasha metaphors
 */
function calculateRakashaHeat(currentAbsDay) {
    const heatMap = {};
    const oneWeekAgo = currentAbsDay - 7;

    WAHBOOK_POSTS.forEach(post => {
        if (!post.date) return;
        const postAbsDay = ((post.date.year - 1035) * 365) + (post.date.monthIndex * 30) + post.date.day;
        
        if (postAbsDay >= oneWeekAgo) {
            let factionId = null;
            if (LORE_DATA.factions[post.characterKey]) factionId = post.characterKey;
            if (!factionId) {
                for (const fKey in LORE_DATA.factions) {
                    const f = LORE_DATA.factions[fKey];
                    if (f.leader === post.characterKey) { factionId = fKey; break; }
                }
            }
            if (factionId) heatMap[factionId] = (heatMap[factionId] || 0) + 1;
        }
    });

    const topFactions = Object.entries(heatMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4);

    return topFactions.map(([fKey, count]) => {
        const name = getRakashaName(fKey);
        let activity = "Prowling the edges.";
        let icon = "👀";
        
        if (count > 8) { activity = "SWARMING LIKE LOCUSTS."; icon = "🔥"; }
        else if (count > 5) { activity = "Making much noise."; icon = "🔊"; }
        else if (count > 2) { activity = "Restless. Moving."; icon = "👣"; }

        return { name, activity, icon };
    });
}
