const fs = require('fs');
const path = require('path');

// Configuration
const TARGET_FOLDER = './Reputation-Matrix2'; 
const OUTPUT_FILE = path.join(TARGET_FOLDER, 'site-updates.json');

// ---------------------------------------------------------
// MANUAL LINKS: Map HTML files to specific JS files
// ---------------------------------------------------------
const JS_DEPENDENCIES = {
    // --- MAIN SYSTEMS ---
    'alliances.html':   ['alliances-page.js'],
    'assembly.html':    ['assembly.js', 'assembly-data.js', 'assembly-events-data.js', 'assembly-intel-system.js', 'assembly-viral-data.js'],
    'battlefield.html': ['battlefield.js', 'map-battle-data-base.js', 'map-battle-data-battlefields.js'],
    'calendar.html':    ['calendar.js', 'calendar-data.js'],
    'civil-war.html':   ['civil-war.js'],
    'directory.html':   ['directory-system.js'],
    'focus.html':       ['focus.js', 'focus-tree.js'],
    'guilds.html':      ['guilds.js', 'guilds-data.js', 'guilds-data-new.js'],
    'login.html':       ['login.js'],
    'newspaper.html':   ['newspaper.js', 'rakasha-news.js'],
    'politics.html':    ['politics.js', 'politics-data.js', 'parliament-members.js'],
    'profile.html':     ['profile.js', 'profile-themes.js'],
    'relations.html':   ['relations.js', 'character-relations.js'],
    'religion.html':    ['religion.js', 'religion-data.js'],
    'research.html':    ['research.js', 'research-data.js', 'research-names.js', 'research-constants.js'],
    'rumors.html':      ['rumors.js', 'rumor-chatter-data.js'],
    'societal-values.html': ['societal-values.js'],
    'species.html':     ['species.js', 'species-data.js', 'species-workforce.js'],
    'timeline.html':    ['timeline.js', 'timeline-data.js'],
    'treaty.html':      ['treaty.html'], // Self reference or specific treaty JS if exists

    // --- FACTIONS & GROUPS ---
    'faw.html':                 ['faction-fawful.js'],
    'fawfuls-party.html':       ['fawfuls-party.js'],
    'iron-legion.html':         ['iron-legion.js', 'iron-legion-data.js', 'iron-legion-details.js'],
    'liberated-toads-event.html': ['liberated-toads-system.js'], // System often updates the event page
    'mushroom-regency.html':    ['mushroom-regency.js'],
    'onyx-hand.html':           ['onyx-hand.js', 'onyx-hand-details.js', 'onyx-hand-system.js'],
    'peach-loyalists.html':     ['peach-loyalists.js'],
    'plagues.html':             ['plagues.js', 'plagues-data.js'],
    'rakasha-system.html':      ['rakasha-clans-system.js'],
    'regal-empire-system.html': ['regal-empire-system.js'],
    'toads-event.html':         ['toads_event.js'], // Note underscore in JS filename in your list

    // --- LEGAL & LAWS ---
    'legal_systems.html': ['legal_systems.js', 'legal_data.js'],
    'laws.html': [
        'laws.js', 'laws-data.js',
        'laws-data-democratic.js', 'laws-data-internet.js', 
        'laws-data-kivotos.js', 'laws-data-middle-earth.js', 
        'laws-data-militaristic.js', 'laws-data-mystical.js', 
        'laws-data-pokemon.js', 'laws-data-space.js', 
        'laws-data-underworld.js', 'laws-data-warhammer.js'
    ],

    // --- QUESTS ---
    'quests.html': [
        'quests.js', 'quests-data.js', 'quests-data-1.js', 
        'quests-constants.js', 'quests-helpers.js', 'bounty-quests-data.js'
    ],

    // --- MAPS (CORE) ---
    'maps.html': [
        'maps.js', 'map-data.js', 'map-ui.js', 
        'map-renderer.js', 'map-transform.js', 'map-tactical.js', 
        'maps-selection.js', 'maps-data-loader.js'
    ],
    
    // --- MAPS (REGIONAL / REQUESTS) ---
    // These link the map HTML to the specific JS request handlers or data files
    'doughnut-hole-maps.html':      ['doughnut-hole.js', 'requests-doughnut-hole.js'],
    'internet-maps.html':           ['internet.js'],
    'kivotos-maps.html':            ['Kivotos.js', 'requests-kivotos.js', 'traditions-data-kivotos.js'],
    'middle-earth-maps.html':       ['requests-middle-earth.js', 'map-battle-data-middle-earth.js'],
    'midlands-maps.html':           ['midlands.js', 'map-battle-data-midlands.js'],
    'mushroom-kingdom-maps.html':   ['map-battle-data-mushroom-kingdom.js'],
    'pokemon-maps.html':            ['requests-pokemon.js', 'map-battle-data-pokemon.js'],
    'the-edge-maps.html':           ['requests-the-edge.js'],
    'warhammer-maps.html':          ['warhammer.js', 'requests-warhammer.js', 'map-battle-data-warhammer.js'],
    
    // --- GLOBAL/MISC ---
    'global-war.html': ['GlobeHead/global-war.js'], // Handling sub-directory
    'family-tree.html': ['family-tree.js']
};

// Files to explicitly ignore 
const IGNORED_FILES = ['navigation.js', 'common.js', 'ui.js'];

console.log('📝 Scanning for HTML and linked JS updates...');

const updates = {};

try {
    const files = fs.readdirSync(TARGET_FOLDER);

    files.forEach(file => {
        if (path.extname(file) === '.html') {
            const fullHtmlPath = path.join(TARGET_FOLDER, file);
            
            // 1. Get the base HTML time
            const htmlStats = fs.statSync(fullHtmlPath);
            let newestTime = htmlStats.mtime;
            let sourceOfUpdate = 'HTML'; 

            // List of JS files to check for this specific HTML file
            let linkedJsFiles = [];

            // A. Auto-Link: Check if a .js file with the same name exists
            const sameNameJs = file.replace('.html', '.js');
            linkedJsFiles.push(sameNameJs);

            // B. Manual Link: Add files from configuration above
            if (JS_DEPENDENCIES[file]) {
                linkedJsFiles = linkedJsFiles.concat(JS_DEPENDENCIES[file]);
            }

            // 2. Process all linked JS files
            linkedJsFiles.forEach(jsFile => {
                // Skip if this file is in the ignore list
                // Check just the filename part to allow path matching (e.g. GlobeHead/global-war.js)
                if (IGNORED_FILES.includes(path.basename(jsFile))) return;

                const fullJsPath = path.join(TARGET_FOLDER, jsFile);

                if (fs.existsSync(fullJsPath)) {
                    const jsStats = fs.statSync(fullJsPath);

                    // If the JS file is newer than the current newest time found
                    if (jsStats.mtime > newestTime) {
                        newestTime = jsStats.mtime;
                        sourceOfUpdate = jsFile; 
                    }
                }
            });

            // Save the latest timestamp found
            updates[file] = newestTime.toISOString();
            
            // Console feedback
            if (sourceOfUpdate !== 'HTML') {
                console.log(`   🔄 ${file}: Date updated via linked ${sourceOfUpdate}`);
            }
        }
    });

    // Write the JSON file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(updates, null, 2));
    console.log(`✅ Wrote update manifest to ${OUTPUT_FILE}`);

} catch (err) {
    console.error('❌ Error generating updates:', err);
}