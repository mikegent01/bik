/**
 * The Wahbabel: cipher + lexicon translation, and the SVG glyph sets.
 *
 * Design under test:
 *   - a LEXICON word always beats the cipher, so vocabulary is real and
 *     learnable;
 *   - anything not in the lexicon still transforms, so coverage is total from
 *     day one instead of leaving English on the page;
 *   - output is deterministic, because a language that changes its mind is a
 *     random text generator wearing a hat;
 *   - every language has 26 distinct SVG letterforms. Styled Latin text was
 *     rejected during design: it reads as a keyboard mash, not a script.
 *
 * Pure data + extracted functions. No server needed.
 * Run: node tools/tests/test-wahbabel.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');

let pass = 0, fail = 0;
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name} ${extra}`); }
};

const data = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'Reputation-Matrix2/data/wahbabel.json'), 'utf8'));
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const main = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)]
  .map(m => m[1]).sort((a, b) => b.length - a.length)[0];

function extract(sig) {
  const i = main.indexOf(sig);
  if (i < 0) throw new Error(`not found: ${sig}`);
  let depth = 0, started = false;
  for (let j = i; j < main.length; j++) {
    const c = main[j];
    if (c === '{') { depth++; started = true; }
    else if (c === '}') { depth--; if (started && depth === 0) return main.slice(i, j + 1); }
  }
  throw new Error(`unbalanced: ${sig}`);
}

// Match the exact signature: searching for "function wbTranslate" alone finds
// wbTranslateWord first, since it is declared above.
const sandbox = {};
new Function(`${extract('function wbTranslateWord(w,L){')}
${extract('function wbTranslate(text,L){')};
  this.wbTranslateWord=wbTranslateWord; this.wbTranslate=wbTranslate;`).call(sandbox);
const { wbTranslate } = sandbox;

const langs = data.languages;
const byId = Object.fromEntries(langs.map(L => [L.id, L]));

console.log(`\n${langs.length} languages\n`);

// ------------------------------------------------------------- structure
console.log('-- structure');

check('languages exist', langs.length >= 4, `${langs.length}`);
check('every language has an id, name and colour',
  langs.every(L => L.id && L.name && /^#[0-9a-f]{6}$/i.test(L.colour)));
check('every language has cipher rules', langs.every(L => (L.rules || []).length > 0));
check('every language has a lexicon', langs.every(L => Object.keys(L.lexicon || {}).length > 0));
check('every language cites its canon', langs.every(L => L.canon && L.canon.length > 20));
check('no duplicate language ids', new Set(langs.map(L => L.id)).size === langs.length);

// The four with real archive evidence must be present.
for (const id of ['sylvan', 'goblin', 'draconic', 'orcish']) {
  check(`${id} ships (it appears in filed material)`, !!byId[id]);
}

// ---------------------------------------------------------------- glyphs
console.log('\n-- glyphs are a writing system, not styled Latin');

check('every language has 26 glyphs',
  langs.every(L => Object.keys(L.glyphs || {}).length === 26),
  langs.filter(L => Object.keys(L.glyphs || {}).length !== 26).map(L => L.id).join(', '));
check('every glyph is an SVG path starting with a move',
  langs.every(L => Object.values(L.glyphs).every(d => typeof d === 'string' && d.startsWith('M'))));

let identical = 0;
for (let i = 0; i < langs.length; i++) {
  for (let j = i + 1; j < langs.length; j++) {
    if (JSON.stringify(langs[i].glyphs) === JSON.stringify(langs[j].glyphs)) identical++;
  }
}
check('no two languages share a glyph set', identical === 0, `${identical} collisions`);

// Within a language the letters must differ from each other too, or the
// "alphabet" is one shape repeated.
for (const L of langs) {
  const distinct = new Set(Object.values(L.glyphs)).size;
  check(`${L.id}: letters are distinct from one another`, distinct >= 24, `${distinct}/26`);
}

// Absolute coordinates must fit the 24x24 viewBox or the glyph is clipped.
let clipped = 0;
for (const L of langs) {
  for (const d of Object.values(L.glyphs)) {
    for (const seg of d.match(/[MLQ][^MLQaAzZ]*/g) || []) {
      for (const num of seg.slice(1).match(/-?\d+\.?\d*/g) || []) {
        const v = parseFloat(num);
        if (v < -0.5 || v > 24.5) clipped++;
      }
    }
  }
}
check('no glyph coordinate escapes the viewBox', clipped === 0, `${clipped}`);

// The scripts should not all be built the same way.
const styles = new Set(langs.map(L => L.script));
check('several distinct stroke grammars are used', styles.size >= 4,
  [...styles].join(', '));

// ----------------------------------------------------------- translation
console.log('\n-- lexicon beats cipher');

for (const L of langs) {
  const word = Object.keys(L.lexicon)[0];
  const expected = L.lexicon[word];
  const got = wbTranslate(word, L);
  check(`${L.id}: "${word}" -> "${expected}" from the dictionary`,
    got.text === expected, got.text);
  check(`${L.id}: a dictionary hit is reported as known`, got.known === 1, `${got.known}`);
}

console.log('\n-- the cipher covers everything else');

for (const L of langs) {
  const r = wbTranslate('zzqqxx', L);
  check(`${L.id}: an unknown word still transforms or passes through`,
    typeof r.text === 'string' && r.text.length > 0);
  check(`${L.id}: an unknown word is NOT counted as vocabulary`, r.known === 0);
}

console.log('\n-- determinism');

for (const L of langs.slice(0, 4)) {
  const a = wbTranslate('the manor is dying tonight', L).text;
  const b = wbTranslate('the manor is dying tonight', L).text;
  check(`${L.id}: same input gives the same output`, a === b);
}

console.log('\n-- coverage is reported honestly');
{
  const L = byId.draconic;
  const known = Object.keys(L.lexicon).slice(0, 3);
  const r = wbTranslate(known.join(' ') + ' qqq', L);
  check('coverage counts only real dictionary hits', r.known === 3 && r.words === 4,
    `known ${r.known} of ${r.words}`);
  check('coverage percentage is computed', r.coverage === 75, `${r.coverage}%`);
}
{
  // A language must not silently claim 100% by having an empty cipher.
  const L = byId.sylvan;
  const r = wbTranslate('completely unknown phrasing here', L);
  check('an all-unknown phrase reports 0% vocabulary', r.coverage === 0, `${r.coverage}%`);
  check('...but still produces foreign text',
    r.text !== 'completely unknown phrasing here', r.text);
}

console.log('\n-- wiring');

check('the Wahbabel has a route', /route==='wahbabel'/.test(main));
check('it is in the sidebar', /label:'The Wahbabel'/.test(main));
check('inline [[lang:]] markup is parsed', /\\\[\\\[lang:/.test(main));
check('inline renderer exists', /function wbInlineHtml/.test(main));
check('the data is generated, not hand-written', data.generated === true);
check('the build tool is recorded', /build-wahbabel/.test(JSON.stringify(data._README)));

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
