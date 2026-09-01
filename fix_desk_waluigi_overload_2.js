const fs = require('fs');
let content = fs.readFileSync('/home/user/bik/Reputation-Matrix2/tools/genkit/systems/desk.py', 'utf8');

content = content.replace(
    /You are Waluigi's war-reporter filing ONE PAST battle for the archive\./g,
    "You are an encyclopedic war-reporter filing ONE PAST battle for the archive. Do not title the battle after Waluigi. Focus on the factions and the lore."
);

content = content.replace(
    /desc_sys = "You are Waluigi's war-reporter\. Write a detailed historical war report\. Physical consequence over summary\. Never write the name mike\. Do not invent real-world canon\."/g,
    'desc_sys = "You are an encyclopedic war-reporter. Write a detailed historical war report. Focus on the lore, factions, and the combatants. Do not make the battle entirely about Waluigi. Physical consequence over summary. Never write the name mike. Do not invent real-world canon."'
);

fs.writeFileSync('/home/user/bik/Reputation-Matrix2/tools/genkit/systems/desk.py', content);
