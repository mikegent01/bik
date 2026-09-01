const fs = require('fs');
let content = fs.readFileSync('/home/user/bik/index.html', 'utf8');

// Also handle the toc parser
content = content.replace(/function mdToHtml\(md,linkCtx\)\{\n  if\(\!md\)return'';\n  \/\/ AI generators sometimes forget newlines before\/after headers in long single-line outputs\n  md = md\.replace\(\/\(\[\^\\n\]\)\\s\*\(\#\{2,3\}\)\\s\/g, "\$1\\n\\n\$2 "\);\n  \n  const lines=md\.replace\(\/\\r\/g,''\)\.split\('\\n'\);let html='',para=\[\],quote=\[\];/g,
`function mdToHtml(md,linkCtx){
  if(!md)return'';
  // AI generators sometimes forget newlines before/after headers in long single-line outputs
  md = md.replace(/([^\\n])\\s*(#{2,3})\\s/g, "$1\\n\\n$2 ");
  
  const lines=md.replace(/\\r/g,'').split('\\n');let html='',para=[],quote=[];`);

fs.writeFileSync('/home/user/bik/index.html', content);
