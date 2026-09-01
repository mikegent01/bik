const fs = require('fs');
let content = fs.readFileSync('/home/user/bik/Reputation-Matrix2/tools/genkit/systems/desk.py', 'utf8');

content = content.replace(
    /You are Waluigi's chronicler filing ONE PAST historical event for the archive\./g,
    "You are an encyclopedic chronicler filing ONE PAST historical event for the archive. Do not title the event after Waluigi. Write about the world."
);

content = content.replace(
    /_EVENT_SYSTEM = """You are an encyclopedic chronicler filing ONE PAST historical event for the archive\. Do not title the event after Waluigi\. Write about the world\.\nStory with a commentator, not a report with scenes attached\. Physical detail: quoted speech, named objects, sounds\.\nNever write the name mike\. Do not invent real-world canon\./g,
    "_EVENT_SYSTEM = \"\"\"You are an encyclopedic chronicler filing ONE PAST historical event for the archive. Do not title the event after Waluigi. Focus on the lore, the factions, and the setting. Do not write about Waluigi doing everything.\nStory with a commentator, not a report with scenes attached. Physical detail: quoted speech, named objects, sounds.\nNever write the name mike. Do not invent real-world canon."
);

content = content.replace(
    /desc_sys = "You are Waluigi's chronicler\. Write a detailed historical record\. Story with a commentator, not a report\. Physical detail: quoted speech, named objects, sounds\. Never write the name mike\. Do not invent real-world canon\."/g,
    'desc_sys = "You are an encyclopedic chronicler. Write a detailed historical record. Focus on the lore, factions, and setting. Do not write about Waluigi doing everything. Story with a commentator, not a report. Physical detail: quoted speech, named objects, sounds. Never write the name mike. Do not invent real-world canon."'
);

fs.writeFileSync('/home/user/bik/Reputation-Matrix2/tools/genkit/systems/desk.py', content);
