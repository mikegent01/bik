const fs = require('fs');
const path = 'Reputation-Matrix2/data/events.json';
let events = JSON.parse(fs.readFileSync(path, 'utf8'));

for (let ev of events) {
    if (ev.description && typeof ev.description === 'string') {
        // Fix weirdly concatenated headers from the previous bad script
        ev.description = ev.description.replace(/(\.)\s*(## .*?)\n/g, '$1\n\n$2\n\n');
        ev.description = ev.description.replace(/([a-z])\s*(## .*?)\n/g, '$1\n\n$2\n\n');
    }
}

fs.writeFileSync(path, JSON.stringify(events, null, 2), 'utf8');
console.log('Fixed formatting in events.json');
