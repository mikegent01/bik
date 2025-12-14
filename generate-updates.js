// generate-updates.js
const fs = require('fs');
const path = require('path');

// Configuration
const TARGET_FOLDER = './Reputation-Matrix2'; // Where your HTML files are
const OUTPUT_FILE = './Reputation-Matrix2/site-updates.json'; // Where the JSON goes

console.log('📝 Scanning for HTML updates...');

const updates = {};
const files = fs.readdirSync(TARGET_FOLDER);
fs.truncate('OUTPUT_FILE', 0, function(){console.log('done')})
files.forEach(file => {
    if (path.extname(file) === '.html') {
        const fullPath = path.join(TARGET_FOLDER, file);
        const stats = fs.statSync(fullPath);
        
        // Save the modification time (mtime)
        updates[file] = stats.mtime.toISOString();
        console.log(`   📄 ${file}: ${stats.mtime.toISOString()}`);
    }
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(updates, null, 2));
console.log(`✅ Wrote update manifest to ${OUTPUT_FILE}`);