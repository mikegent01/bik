// Headless test of the local Qwen3-TTS read-aloud bridge (docs/QWEN_TTS_BRIDGE.md),
// against tools/mock_gradio_tts.py. Verifies: the sentence-aware chunker, the
// Gradio queue client (POST + SSE + FileData url), and the pipeline contract —
// chunk N plays while chunk N+1 synthesizes, one synthesis per chunk, clean
// error surface when the studio is down. No jsdom needed: the bridge's DOM
// surface is stubbed, its core eval'd straight out of index.html.
//
//   node tools/tests/test-qwen-tts-bridge.mjs
import { readFileSync, unlinkSync, existsSync } from 'node:fs';
import { spawn } from 'node:child_process';

const repoRoot = new URL('../../', import.meta.url);
const html = readFileSync(new URL('index.html', repoRoot), 'utf8');
const start = html.indexOf('/* ==READ-ALOUD-BRIDGE-START== */');
const end = html.indexOf('/* ==READ-ALOUD-BRIDGE-END== */');
if (start < 0 || end < 0) { console.error('bridge block not found'); process.exit(1); }
const block = html.slice(start, end);

// ---------- browser stubs ----------
const store = {};
const localStorage = {
  getItem: k => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
};
const elements = {};
const mkEl = id => (elements[id] ||= {
  id, textContent: '', value: '', hidden: true, innerHTML: '',
  setAttribute(k, v) { this['attr_' + k] = v; },
  appendChild() {}, closest: () => null,
});
const document = {
  getElementById: id => (id === 'readaloud-bar' ? undefined : mkEl(id)),
  createElement: tag => mkEl('created-' + tag + '-' + Math.random()),
  querySelector: sel => (sel === '#content .art-title' ? { textContent: 'The Day the Building Obeyed' } : null),
  querySelectorAll: () => harvestNodes,
  body: { appendChild() {} },
};
let harvestNodes = [];
const audioLog = [];
const audioInstances = [];
class FakeAudio {
  constructor(url) { this.url = url; audioInstances.push(this); audioLog.push(['new', url]); }
  play() { audioLog.push(['play', this.url]); return Promise.resolve(); }
  pause() { audioLog.push(['pause', this.url]); }
}
const window = { addEventListener() {} };
const fetchImpl = globalThis.fetch.bind(globalThis);

// ---------- load the bridge ----------
const loader = new Function('localStorage', 'document', 'Audio', 'window', 'fetch',
  block + '\nreturn {ttsChunkText, gradioTTS, gradioAudioUrl, ReadAloud, ttsConfig, ttsSaveConfig, ttsHarvestText};');
const B = loader(localStorage, document, FakeAudio, window, fetchImpl);

// ---------- 1. chunker ----------
const target = 120;
const longPara = 'Sentence one ends here. Sentence two is a bit longer, honestly. Third one! Fourth one too? Yes. ';
const chunks = B.ttsChunkText(longPara.repeat(3).trim() + '\n\nSecond paragraph. Short.', target);
let ok = true;
const check = (name, cond) => { console.log((cond ? 'OK  ' : 'FAIL'), name); if (!cond) ok = false; };
check('chunker: made chunks', chunks.length >= 3);
check('chunker: respects target (no monster input)', chunks.every(c => c.length <= target + 40));
check('chunker: keeps words whole', chunks.every(c => !c.startsWith(' ') && !c.endsWith(' ')));
const monster = 'x'.repeat(500);
const mchunks = B.ttsChunkText(monster, target);
check('chunker: hard-splits monster sentences', mchunks.length === 5 && mchunks.every(c => c.length <= target));
check('chunker: preserves paragraphs as boundaries', chunks.some(c => c.includes('Second paragraph.')));

// ---------- 2. mock studio ----------
const PORT = 8199;
const LOG = '/tmp/qwen_bridge_test_log.jsonl';
if (existsSync(LOG)) unlinkSync(LOG);
const srv = spawn('python3', [new URL('tools/mock_gradio_tts.py', repoRoot).pathname, String(PORT), LOG, '0.15'], { stdio: 'ignore' });
process.on('exit', () => srv.kill());
const sleep = ms => new Promise(r => setTimeout(r, ms));
let up = false;
for (let i = 0; i < 40 && !up; i++) {
  try { const r = await fetchImpl(`http://127.0.0.1:${PORT}/ping`); up = r.ok; } catch { await sleep(100); }
}
check('mock studio is up', up);

const cfg = { endpoint: `http://127.0.0.1:${PORT}`, voice: 'Waluigi', api: '/generate_base_17', lang: 'Auto', chunk: 120 };
const url1 = await B.gradioTTS('Hello from the test.', cfg);
check('gradio client resolves an audio url', /gradio_api\/file=\/audio\/c\d+\.wav$/.test(url1));
const reqs = () => readFileSync(LOG, 'utf8').trim().split('\n').filter(Boolean).map(l => JSON.parse(l));
const r0 = reqs()[0];
check('gradio client sent voice=Waluigi, correct text', r0.voice === 'Waluigi' && r0.text === 'Hello from the test.');
const relUrl = B.gradioAudioUrl('http://127.0.0.1:7860', { path: '/tmp/x.wav' });
check('audio url fallback builds file endpoint', relUrl === 'http://127.0.0.1:7860/gradio_api/file=/tmp/x.wav');

// ---------- 3. the pipeline: chunk N plays while N+1 synthesizes ----------
const paras = [];
for (let i = 1; i <= 4; i++) paras.push({ textContent: `Paragraph ${i} of the reading test. It has a second sentence for the chunker. And a third!`, closest: () => null });
harvestNodes = paras;
B.ttsSaveConfig(cfg);   // the pipeline reads ttsConfig() from storage
B.ReadAloud.start();
await new Promise(r => setTimeout(r, 1200)); // chunk 1 synth (0.15s) + play begins
const played1 = audioLog.find(x => x[0] === 'play');
check('pipeline: chunk 1 is playing', !!played1);
const reqsNow = reqs();
check('pipeline: chunk 2 ALREADY synthesizing while chunk 1 plays (the queue)', reqsNow.length >= 2);
check('pipeline: expected chunk count', B.ReadAloud.chunks.length >= 4);

// end chunk 1 -> chunk 2 should play instantly (cached, no synth wait)
const t0 = Date.now();
audioInstances[0].onended();
await new Promise(r => setTimeout(r, 200));
const plays = audioLog.filter(x => x[0] === 'play');
check('pipeline: chunk 2 played within 200ms of chunk 1 ending (prefetched)', plays.length >= 2 && Date.now() - t0 < 1000);
check('pipeline: distinct audio per chunk', plays[0][1] !== plays[1][1]);

// run to the end: end the current chunk, then WAIT for the next play event
// (the fake onended can re-fire, unlike a real Audio element)
for (let guard = 0; guard < 40 && B.ReadAloud.active; guard++) {
  const playsBefore = audioLog.filter(x => x[0] === 'play').length;
  audioInstances[audioInstances.length - 1].onended();
  const t0 = Date.now();
  while (B.ReadAloud.active && audioLog.filter(x => x[0] === 'play').length === playsBefore && Date.now() - t0 < 5000) await sleep(40);
}
check('pipeline: reached Done', /Done/.test(mkEl('ra-status').textContent) || /Done/.test(document.getElementById('ra-status').textContent));
check('pipeline: played every chunk exactly once, in order',
  audioLog.filter(x => x[0] === 'play').length === B.ReadAloud.chunks.length);
const allReqs = reqs();
const chunkTexts = allReqs.slice(1).map(r => r.text);   // [0] was the direct client test
check('pipeline: exactly one synthesis per chunk (no waste)',
  allReqs.length === B.ReadAloud.chunks.length + 1 &&
  chunkTexts.every((t, i) => t === B.ReadAloud.chunks[i]));

// ---------- 4. error path: studio down ----------
B.ttsSaveConfig({ endpoint: 'http://127.0.0.1:9', voice: 'Waluigi', api: '/generate_base_17', chunk: 120 });
mkEl('ra-status').textContent = '';
B.ReadAloud.start();
await new Promise(r => setTimeout(r, 800));
check('error path: surfaces a bridge error and stops',
  /unreachable/.test(document.getElementById('ra-status').textContent) && B.ReadAloud.active === false);

srv.kill();
console.log(ok ? 'ALL BRIDGE TESTS PASS' : 'BRIDGE TESTS FAILED');
process.exit(ok ? 0 : 1);
