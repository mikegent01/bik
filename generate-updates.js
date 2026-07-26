const fs = require('fs');
const path = require('path');

// ====================== CONFIG ======================
const TARGET_FOLDER = './Reputation-Matrix2';
const OUTPUT_FILE = path.join(TARGET_FOLDER, 'site-updates.json');

// ====================== MANUAL DEPENDENCIES ======================
const JS_DEPENDENCIES = {
    'alliances.html': ['js/pages/alliances-page.js'],
    'assembly.html': ['js/pages/assembly.js', 'js/data_modules/assembly-data.js', 'js/data_modules/assembly-events-data.js', 'js/pages/assembly-intel-system.js', 'js/data_modules/assembly-viral-data.js'],
    'battlefield.html': ['js/pages/battlefield.js', 'js/maps/map-battle-data-base.js', 'js/maps/map-battle-data-battlefields.js', 'js/pages/calendar-data.js', 'data/calendarMonths.json', 'data/calendarWeekdays.json', 'data/calendarSeasons.json', 'data/calendarMeta.json'],
    // calendar.html merged into battlefield.html#/calendar — single page
    'civil-war.html': ['js/pages/civil-war.js'],
    'directory.html': ['js/pages/directory-system.js'],
    'focus.html': ['js/pages/focus.js', 'js/pages/focus-tree.js'],
    'guilds.html': ['js/pages/guilds.js', 'js/data_modules/guilds-data.js', 'js/data_modules/guilds-data-new.js'],
    'login.html': ['js/pages/login.js'],
    'newspaper.html': ['js/pages/newspaper.js', 'js/pages/rakasha-news.js'],
    'politics.html': ['js/pages/politics.js', 'js/data_modules/politics-data.js', 'js/pages/parliament-members.js'],
    'profile.html': ['js/pages/profile.js', 'js/pages/profile-themes.js'],
    'relations.html': ['js/pages/relations.js', 'js/pages/character-relations.js'],
    'religion.html': ['js/pages/religion.js', 'js/data_modules/religion-data.js'],
    'research.html': ['js/pages/research.js', 'js/data_modules/research-data.js', 'js/pages/research-names.js', 'js/pages/research-constants.js'],
    'rumors.html': ['js/pages/rumors.js', 'js/data_modules/rumor-chatter-data.js'],
    'societal-values.html': ['js/pages/societal-values.js'],
    'species.html': ['js/pages/species.js', 'js/data_modules/species-data.js', 'js/pages/species-workforce.js'],
    // timeline.html merged into battlefield.html#/calendar/timeline — single page
    'treaty.html': ['treaty.js'],
    
    // Factions
    'faw.html': ['js/pages/faction-fawful.js'],
    'fawfuls-party.html': ['js/pages/fawfuls-party.js'],
    'iron-legion.html': ['js/pages/iron-legion.js', 'js/data_modules/iron-legion-data.js', 'js/data_modules/iron-legion-details.js'],
    'liberated-toads-event.html': ['js/pages/liberated-toads-system.js'],
    'mushroom-regency.html': ['js/pages/mushroom-regency.js'],
    'onyx-hand.html': ['js/pages/onyx-hand.js', 'js/data_modules/onyx-hand-details.js', 'onyx-hand-system.js'],
    'peach-loyalists.html': ['js/pages/peach-loyalists.js'],
    'plagues.html': ['js/pages/plagues.js', 'js/data_modules/plagues-data.js'],
    'rakasha-system.html': ['js/pages/rakasha-clans-system.js'],
    'regal-empire-system.html': ['js/pages/regal-empire-system.js'],
    'toads-event.html': ['js/pages/toads_event.js'],
    
    // Legal
    'legal_systems.html': ['js/pages/legal_systems.js', 'js/pages/legal_data.js'],
    'laws.html': [
        'js/pages/laws.js', 'js/data_modules/laws-data.js',
        'js/data_modules/laws-data-democratic.js', 'js/data_modules/laws-data-internet.js', 
        'js/data_modules/laws-data-kivotos.js', 'js/data_modules/laws-data-middle-earth.js', 
        'js/data_modules/laws-data-militaristic.js', 'js/data_modules/laws-data-mystical.js', 
        'js/data_modules/laws-data-pokemon.js', 'js/data_modules/laws-data-space.js', 
        'js/data_modules/laws-data-underworld.js', 'js/data_modules/laws-data-warhammer.js'
    ],
    
    // Quests
    'quests.html': [
        'js/pages/quests.js', 'js/data_modules/quests-data.js', 'js/data_modules/quests-data-1.js', 
        'js/pages/quests-constants.js', 'js/pages/quests-helpers.js', 'js/data_modules/bounty-quests-data.js'
    ],
    
    // Maps
    'maps.html': [
        'js/pages/maps.js', 'js/maps/map-data.js', 'js/maps/map-ui.js', 
        'js/maps/map-renderer.js', 'js/maps/map-transform.js', 'js/maps/map-tactical.js', 
        'js/maps/maps-selection.js', 'js/maps/maps-data-loader.js'
    ],
    'doughnut-hole-maps.html': ['js/pages/doughnut-hole.js', 'js/maps/requests-doughnut-hole.js'],
    'internet-maps.html': ['js/pages/internet.js'],
    'kivotos-maps.html': ['js/core/Kivotos.js', 'js/maps/requests-kivotos.js', 'js/pages/traditions-data-kivotos.js'],
    'middle-earth-maps.html': ['js/maps/requests-middle-earth.js', 'js/maps/map-battle-data-middle-earth.js'],
    'midlands-maps.html': ['js/pages/midlands.js', 'js/maps/map-battle-data-midlands.js'],
    'mushroom-kingdom-maps.html': ['js/maps/map-battle-data-mushroom-kingdom.js'],
    'pokemon-maps.html': ['js/maps/requests-pokemon.js', 'js/maps/map-battle-data-pokemon.js'],
    'the-edge-maps.html': ['requests-the-edge.js'],
    'warhammer-maps.html': ['js/pages/warhammer.js', 'js/maps/requests-warhammer.js', 'js/maps/map-battle-data-warhammer.js'],
    
    // Misc
    'global-war.html': ['GlobeHead/global-war.js'],
    'family-tree.html': ['js/pages/family-tree.js']
};

const IGNORED_FILES = ['js/core/navigation.js', 'js/core/common.js', 'js/core/ui.js'];

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
        const baseName = file.replace('.html', '.js');
        const categories = ['core', 'data_modules', 'maps', 'pages'];
        let foundCat = 'pages';
        for (const cat of categories) {
            if (fs.existsSync(path.join(TARGET_FOLDER, 'js', cat, baseName))) {
                foundCat = cat;
                break;
            }
        }
        linkedJs.push('js/' + foundCat + '/' + baseName);

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