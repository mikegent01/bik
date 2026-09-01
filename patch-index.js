const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Update headings function
html = html.replace(
  /function headings\(md\)\{if\(\!md\)return\[\]; md = md\.replace\(\/\(\[\^\\n\]\)\\s\*\(\#\{2,3\}\)\\s\/g, "\$1\\n\\n\$2 "\);const out=\[\];md\.split\('\\n'\)\.forEach\(l=>\{let m;if\(\(m=l\.match\(\/\^\#\#\\s\+\(\.\+\)\/\)\)\)out\.push\(\{level:2,text:m\[1\]\.trim\(\)\}\);else if\(\(m=l\.match\(\/\^\#\#\#\\s\+\(\.\+\)\/\)\)\)out\.push\(\{level:3,text:m\[1\]\.trim\(\)\}\);\}\);return out;\}/g,
  `function headings(md){if(!md)return[]; md = md.replace(/\\\\#/g, '#'); md = md.replace(/([^\\n])\\s*(#{2,3})\\s/g, "$1\\n\\n$2 ");const out=[];md.split('\\n').forEach(l=>{let m;if((m=l.trim().match(/^##\\s+(.+)/)))out.push({level:2,text:m[1].trim()});else if((m=l.trim().match(/^###\\s+(.+)/)))out.push({level:3,text:m[1].trim()});});return out;}`
);

// Update mdToHtml function
html = html.replace(
  /md = md\.replace\(\/\(\[\^\\n\]\)\\s\*\(\#\{2,3\}\)\\s\/g, "\$1\\n\\n\$2 "\);\s*const lines=md\.replace\(\/\\r\/g,''\)\.split\('\\n'\);/g,
  `md = md.replace(/\\\\#/g, '#');\n  md = md.replace(/([^\\n])\\s*(#{2,3})\\s/g, "$1\\n\\n$2 ");\n  \n  const lines=md.replace(/\\r/g,'').split('\\n');`
);

// Update heading checks inside mdToHtml
html = html.replace(
  /if\(\/\^###\\s\+\/\.test\(line\)\)\{fp\(\);fq\(\);newSection\(\);const t=line\.replace\(\/\^###\\s\+\/,''\);html\+='<h3 id="'\+slug\(t\)\+'">'\+inlineMd\(t\)\+'<\/h3>';continue;\}\s*if\(\/\^##\\s\+\/\.test\(line\)\)\{fp\(\);fq\(\);newSection\(\);const t=line\.replace\(\/\^##\\s\+\/,''\);html\+='<h2 id="'\+slug\(t\)\+'">'\+inlineMd\(t\)\+'<\/h2>';continue;\}/g,
  `if(/^\\s*###\\s+/.test(line)){fp();fq();newSection();const t=line.replace(/^\\s*###\\s+/,'');html+='<h3 id="'+slug(t)+'">'+inlineMd(t)+'</h3>';continue;}\n    if(/^\\s*##\\s+/.test(line)){fp();fq();newSection();const t=line.replace(/^\\s*##\\s+/,'');html+='<h2 id="'+slug(t)+'">'+inlineMd(t)+'</h2>';continue;}`
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Patched index.html');
