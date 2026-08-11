const fs = require('fs');
const path = require('path');

// ====================== CONFIG ======================
const TARGET_FOLDER = './Reputation-Matrix2';
const OUTPUT_FILE = path.join(TARGET_FOLDER, 'site-updates.json');

// ====================== MANUAL DEPENDENCIES ======================
const JS_DEPENDENCIES = {
    'alliances.html': ['alliances-page.js'],
    'assembly.html': ['assembly.js', 'assembly-data.js', 'assembly-events-data.js', 'assembly-intel-system.js', 'assembly-viral-data.js'],
    'battlefield.html': ['battlefield.js', 'map-battle-data-base.js', 'map-battle-data-battlefields.js', 'calendar-data.js', 'data/calendarMonths.json', 'data/calendarWeekdays.json', 'data/calendarSeasons.json', 'data/calendarMeta.json'],
    // calendar.html merged into battlefield.html#/calendar — single page
    'civil-war.html': ['civil-war.js'],
    'directory.html': ['directory-system.js'],
    'focus.html': ['focus.js', 'focus-tree.js'],
    'guilds.html': ['guilds.js', 'guilds-data.js', 'guilds-data-new.js'],
    'login.html': ['login.js'],
    'newspaper.html': ['newspaper.js', 'rakasha-news.js'],
    'politics.html': ['politics.js', 'politics-data.js', 'parliament-members.js'],
    // Rakasha News Network — weekly broadcast player (see tools/build-rnn-broadcast.py)
    'rakasha-news-network.html': ['rakasha-news-network.js', 'rnn-audio.js', 'data/rnn-broadcasts.js'],
    'profile.html': ['profile.js', 'profile-themes.js'],
    'relations.html': ['relations.js', 'character-relations.js'],
    'religion.html': ['religion.js', 'religion-data.js'],
    'research.html': ['research.js', 'research-data.js', 'research-names.js', 'research-constants.js'],
    'rumors.html': ['rumors.js', 'rumor-chatter-data.js'],
    'societal-values.html': ['societal-values.js'],
    'species.html': ['species.js', 'species-data.js', 'species-workforce.js'],
    // timeline.html merged into battlefield.html#/calendar/timeline — single page
    'treaty.html': ['treaty.js'],
    
    // Factions
    'faw.html': ['faction-fawful.js'],
    'fawfuls-party.html': ['fawfuls-party.js'],
    'iron-legion.html': ['iron-legion.js', 'iron-legion-data.js', 'iron-legion-details.js'],
    'liberated-toads-event.html': ['liberated-toads-system.js'],
    'mushroom-regency.html': ['mushroom-regency.js'],
    'onyx-hand.html': ['onyx-hand.js', 'onyx-hand-details.js', 'onyx-hand-system.js'],
    'peach-loyalists.html': ['peach-loyalists.js'],
    'plagues.html': ['plagues.js', 'plagues-data.js'],
    'rakasha-system.html': ['rakasha-clans-system.js'],
    'regal-empire-system.html': ['regal-empire-system.js'],
    'toads-event.html': ['toads_event.js'],
    
    // Legal
    'legal_systems.html': ['legal_systems.js', 'legal_data.js'],
    'laws.html': [
        'laws.js', 'laws-data.js',
        'laws-data-democratic.js', 'laws-data-internet.js', 
        'laws-data-kivotos.js', 'laws-data-middle-earth.js', 
        'laws-data-militaristic.js', 'laws-data-mystical.js', 
        'laws-data-pokemon.js', 'laws-data-space.js', 
        'laws-data-underworld.js', 'laws-data-warhammer.js'
    ],
    
    // Quests
    'quests.html': [
        'quests.js', 'quests-data.js', 'quests-data-1.js', 
        'data/quest-system/constants.js', 'app/pages/quests/quests-helpers.js', 'bounty-quests-data.js'
    ],
    
    // Maps
    'maps.html': [
        'maps.js', 'map-data.js', 'map-ui.js', 
        'map-renderer.js', 'map-transform.js', 'map-tactical.js', 
        'maps-selection.js', 'maps-data-loader.js'
    ],
    'doughnut-hole-maps.html': ['doughnut-hole.js', 'requests-doughnut-hole.js'],
    'internet-maps.html': ['internet.js'],
    'kivotos-maps.html': ['Kivotos.js', 'requests-kivotos.js', 'traditions-data-kivotos.js'],
    'middle-earth-maps.html': ['requests-middle-earth.js', 'map-battle-data-middle-earth.js'],
    'midlands-maps.html': ['midlands.js', 'map-battle-data-midlands.js'],
    'mushroom-kingdom-maps.html': ['map-battle-data-mushroom-kingdom.js'],
    'pokemon-maps.html': ['requests-pokemon.js', 'map-battle-data-pokemon.js'],
    'the-edge-maps.html': ['requests-the-edge.js'],
    'warhammer-maps.html': ['warhammer.js', 'requests-warhammer.js', 'map-battle-data-warhammer.js'],
    
    // Misc
    'global-war.html': ['app/systems/global-war.js'],
    'family-tree.html': ['family-tree.js']
};

const IGNORED_FILES = ['navigation.js', 'common.js', 'ui.js'];

// ====================== MAIN SCRIPT ======================
console.log('📝 Generating site-updates.json...');

const updates = {};

try {
    const files = fs.readdirSync(TARGET_FOLDER);

    files.forEach(file => {
        if (path.extname(file) !== '.html') return;

        const htmlPath = path.join(TARGET_FOLDER, file);
        const htmlStats = fs.statSync(htmlPath);
        
        let newestTime = htmlStats.mtime;
        let source = 'HTML';

        // Build list of JS files to check
        let linkedJs = [];

        // 1. Auto-link (same name)
        linkedJs.push(file.replace('.html', '.js'));

        // 2. Manual dependencies
        if (JS_DEPENDENCIES[file]) {
            linkedJs = linkedJs.concat(JS_DEPENDENCIES[file]);
        }

        // Check all linked JS files
        linkedJs.forEach(jsFile => {
            if (IGNORED_FILES.includes(path.basename(jsFile))) return;

            const jsPath = path.join(TARGET_FOLDER, jsFile);
            
            if (fs.existsSync(jsPath)) {
                const jsStats = fs.statSync(jsPath);
                
                if (jsStats.mtime > newestTime) {
                    newestTime = jsStats.mtime;
                    source = jsFile;
                }
            }
        });

        updates[file] = newestTime.toISOString();

        if (source !== 'HTML') {
            console.log(`🔄 ${file} → updated via ${source}`);
        }
    });

    // Sort newest first
    const sorted = Object.fromEntries(
        Object.entries(updates).sort((a, b) => b[1].localeCompare(a[1]))
    );

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(sorted, null, 2));
    console.log(`✅ site-updates.json generated with ${Object.keys(sorted).length} entries`);

} catch (err) {
    console.error('❌ Error:', err);
}