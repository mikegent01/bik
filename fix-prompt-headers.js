const fs = require('fs');

const path = 'Reputation-Matrix2/tools/genkit/systems/desk.py';
let content = fs.readFileSync(path, 'utf8');

// The AI is outputting the title inside the section content because the prompt is a little ambiguous.
// We will explicitly tell it not to output the title, and just to output paragraphs.
content = content.replace(/Return ONLY the plaintext content for this section\. Do NOT include the section title itself, I will add it\./g, 'Return ONLY the plaintext paragraphs for this section. Do NOT output a markdown header or the section title itself, I will add it. DO NOT output a wall of text.');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed prompts in desk.py');
