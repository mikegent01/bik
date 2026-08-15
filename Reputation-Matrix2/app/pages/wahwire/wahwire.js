/* WAHwire — the public feed.
 *
 * Built to stay smooth at 100,000+ posts, which rules out the obvious
 * approach. Three decisions carry that:
 *
 *   1. **The feed is virtualised.** A sizer div holds the full scroll height
 *      and only the ~30 rows crossing the viewport are ever in the DOM. A
 *      node per post means 100k nodes, which no browser lays out quickly.
 *
 *   2. **The charts are canvas.** 100k bars as elements is the same mistake
 *      wearing a different hat; the timeline aggregates into month buckets
 *      and paints once.
 *
 *   3. **Filtering works on a prepared index, not the objects.** Every post
 *      gets one lowercased haystack string built at load, so searching is a
 *      single `indexOf` per post rather than touching five fields.
 *
 * Sorting keeps an index array (Int32Array) rather than reordering records,
 * so a re-sort moves 4 bytes per post instead of a whole object.
 */

const STORE_URL = '../../../data/wahwire/posts.json';

/* The terminal is at the repo root, four levels up. Note that
 * Reputation-Matrix2/index.html is only a meta-refresh redirect and drops the
 * hash on the way through, so links must reach the real root index directly. */
const TERMINAL = '../../../../index.html';

const KIND_GLYPH = { event: '◆', battle: '⚔', mbattle: '🗡', trial: '⚖' };

function routeFor(kind, id) {
  // majorBattles have a dedicated view; everything else is indexed as an article.
  return kind === 'mbattle'
    ? '#/mbattle/' + encodeURIComponent(id)
    : '#/article/' + encodeURIComponent(id);
}

const AUTHORS = {
  lord_crimson:            { name: 'Lord Crimson',            handle: '@crimson',      glyph: '🩸', tone: '#c0392b' },
  general_marcus_ironhand: { name: 'General Marcus Ironhand', handle: '@ironhand',     glyph: '⚔️', tone: '#8e6b3a' },
  colonel_vera_steelstorm: { name: 'Col. Vera Steelstorm',    handle: '@steelstorm',   glyph: '🛡️', tone: '#5b7c99' },
  alpha_bloodmaw:          { name: 'Alpha Bloodmaw',          handle: '@bloodmaw',     glyph: '🐺', tone: '#7a4b2a' },
  wah_media_collective:    { name: 'WAH Media Collective',    handle: '@wahmedia',     glyph: '📡', tone: '#b8860b' },
  generic_toad:            { name: 'A Toad',                  handle: '@toad',         glyph: '🍄', tone: '#c0392b' },
  toadsworth:              { name: 'Toadsworth',              handle: '@toadsworth',   glyph: '🎩', tone: '#8b6f47' },
  toadette:                { name: 'Toadette',                handle: '@toadette',     glyph: '🌸', tone: '#c2185b' },
  waluigi:                 { name: 'Waluigi',                 handle: '@waluigi',      glyph: '🍆', tone: '#6a1b9a' },
  bowser:                  { name: 'Bowser',                  handle: '@kingkoopa',    glyph: '🐢', tone: '#2e7d32' },
  archie_miser:            { name: 'Archie Miser',            handle: '@archie',       glyph: '💰', tone: '#b8860b' },
  markop:                  { name: 'Markop',                  handle: '@markop',       glyph: '🔧', tone: '#546e7a' },
  hjumpik:                 { name: 'Hjumpik',                 handle: '@hjumpik',      glyph: '🎯', tone: '#00838f' }
};

const REACTIONS = {
  cheer:   { glyph: '🎉', label: 'Cheering',  tone: '#2e7d32' },
  rage:    { glyph: '🔥', label: 'Furious',   tone: '#c0392b' },
  grief:   { glyph: '🕯️', label: 'Grieving',  tone: '#5c6bc0' },
  smug:    { glyph: '😏', label: 'Smug',      tone: '#b8860b' },
  alarm:   { glyph: '⚠️', label: 'Alarmed',   tone: '#ef6c00' },
  deadpan: { glyph: '➖', label: 'Deadpan',   tone: '#78909c' }
};

const MONTHS = ['Deepwinter', 'Thawmarch', 'Seedfall', 'Rainwake', 'Brightleaf',
  'Longlight', 'Highsun', 'Harvestide', 'Aethel', 'Emberfade', 'Frostgate', 'Nightreach'];

const ROW_HEIGHT = 168;   // fixed row height is what makes O(1) scroll maths possible
const OVERSCAN   = 6;     // rows rendered beyond the viewport, to hide fast scrolling

const state = {
  posts: [],
  order: new Int32Array(0),   // indices into posts[], in display order
  view:  new Int32Array(0),   // indices surviving the current filter+search
  filter: 'all',
  query: '',
  sort: 'chrono',
  targets: {},
  tl: null,                   // timeline geometry, for the hover readout
  firstRendered: -1,
  lastRendered: -1
};

const el = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

/* ------------------------------------------------------------------ load */

/* Turn one stored post into the shape the hot paths need.
 *
 * Single source of truth, used by both the real loader and the load-test
 * ingest hook. These were two near-identical copies and they had already
 * drifted apart in how they computed `linked` — the kind of divergence that
 * makes a test agree with a bug. */
let _prepareIndex = 0;
function prepare(p) {
  const who = AUTHORS[p.author] || {
    name: (p.author || 'Unknown').replace(/_/g, ' '),
    handle: '@' + (p.author || 'unknown'),
    glyph: '\u{1F464}', tone: '#78909c'
  };
  const d = p.date || {};
  const links = Array.isArray(p.links) ? p.links : [];
  return {
    i: _prepareIndex++,
    id: p.id,
    author: p.author,
    who,
    content: p.content || '',
    likes: Number(p.likes) || 0,
    status: p.status || 'legacy',
    reaction: p.reaction || '',
    tags: Array.isArray(p.tags) ? p.tags : [],
    links,
    // `linked` is filled in by resolveLinks() once the record files are
    // loaded. Deliberately NOT `links.length > 0 || !!legacyEventId`: a post
    // carrying a pointer that resolves to nothing is not wired to anything,
    // and counting it as wired hides exactly the debt this page should show.
    linked: false,
    resolved: [],
    dangling: [],
    legacyEventId: p.legacyEventId || '',
    generated: !!p._generated,
    when: p.timestamp || fmtDate(d),
    year: d.year || 0,
    monthIndex: d.monthIndex || 0,
    bucket: (d.year || 0) * 12 + (d.monthIndex || 0),
    sortKey: (d.year || 0) * 10000 + (d.monthIndex || 0) * 100 + (d.day || 0),
    order: Number(p.order) || 0,
    // one lowercased haystack: search is a single indexOf per post
    hay: `${p.content || ''} ${who.name} ${who.handle} ${(p.tags || []).join(' ')} ${p.id}`.toLowerCase()
  };
}

async function load() {
  // Wire the controls FIRST and unconditionally. They used to be attached at
  // the end of a successful load, which meant any fetch hiccup left a page
  // full of buttons that silently did nothing.
  wire();

  let raw;
  try {
    const res = await fetch(STORE_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    raw = await res.json();
  } catch (err) {
    el('wwCount').textContent = 'Could not reach the wire.';
    console.error('[wahwire] load failed', err);
    return;
  }

  const posts = Array.isArray(raw) ? raw : (raw.posts || []);
  _prepareIndex = 0;
  state.posts = posts.map(prepare);

  await loadTargets();
  resolveLinks();
  buildOrder();
  applyFilter();   // applyFilter() redraws every panel
}

/* Resolve link ids to real record names so a post can point at the event that
 * caused it. Best-effort: a missing file must not take the feed down.
 *
 * The `kind` also decides the route. events/battles/trials are all in the
 * terminal's INDEX and open as #/article/<id>; majorBattles are NOT — they
 * have their own view and must go to #/mbattle/<id>. Getting this wrong
 * silently lands the reader on the home page. */
async function loadTargets() {
  const files = [
    ['event',  '../../../data/events.json'],
    ['battle', '../../../data/battles.json'],
    ['mbattle', '../../../data/majorBattles.json'],
    ['trial',  '../../../data/trials.json']
  ];
  await Promise.all(files.map(async ([kind, url]) => {
    try {
      const res = await fetch(url);
      if (!res.ok) return;
      const data = await res.json();
      const list = Array.isArray(data) ? data : (Object.values(data).find(Array.isArray) || []);
      for (const r of list) {
        if (r && r.id) state.targets[r.id] = { kind, name: r.name || r.title || r.id };
      }
    } catch { /* a feed that renders without link names beats no feed */ }
  }));
}

/* Split every post's pointers into ones that actually land on a record and
 * ones that don't.
 *
 * The 19 migrated posts are a worked example of why this matters: none of them
 * carry `links` at all, and both distinct `legacyEventId` values in the set
 * (`regency_fall`, `vampire_war`) match no record in any of the four files.
 * The honest reading is that the legacy set is 0% wired, and the page says so
 * rather than flattering the number. The authoring pass writes real `links`. */
function resolveLinks() {
  let wired = 0, dangling = 0;
  for (const p of state.posts) {
    const candidates = p.links.slice();
    if (p.legacyEventId) candidates.push(p.legacyEventId);
    for (const id of candidates) {
      if (state.targets[id]) p.resolved.push(id);
      else p.dangling.push(id);
    }
    p.linked = p.resolved.length > 0;
    if (p.linked) wired++;
    dangling += p.dangling.length;
  }
  state.wired = wired;
  state.dangling = dangling;
}

function fmtDate(d) {
  if (!d || !d.year) return '';
  const m = MONTHS[d.monthIndex] || '';
  return `${m} ${d.day || ''}, ${d.year} BF`.replace(/\s+/g, ' ').trim();
}

/* --------------------------------------------------------------- ordering */

function buildOrder() {
  const n = state.posts.length;
  const idx = new Int32Array(n);
  for (let i = 0; i < n; i++) idx[i] = i;
  const p = state.posts;

  // Sorting an index array beats sorting records: 4 bytes moved per post.
  const arr = Array.from(idx);
  if (state.sort === 'likes') {
    arr.sort((a, b) => p[b].likes - p[a].likes);
  } else if (state.sort === 'recent') {
    arr.sort((a, b) => (p[b].sortKey - p[a].sortKey) || (p[b].order - p[a].order));
  } else {
    arr.sort((a, b) => (p[a].sortKey - p[b].sortKey) || (p[a].order - p[b].order));
  }
  state.order = Int32Array.from(arr);
}

function applyFilter() {
  const q = state.query.trim().toLowerCase();
  const f = state.filter;
  const p = state.posts;
  const src = state.order;
  const out = new Int32Array(src.length);
  let n = 0;

  for (let k = 0; k < src.length; k++) {
    const post = p[src[k]];
    if (f === 'canon'     && post.status !== 'canon')  continue;
    if (f === 'legacy'    && post.status !== 'legacy') continue;
    if (f === 'generated' && !post.generated)          continue;
    if (f === 'linked'    && !post.linked)             continue;
    if (q && post.hay.indexOf(q) === -1)               continue;
    out[n++] = src[k];
  }
  state.view = out.subarray(0, n);

  el('wwCount').textContent = n === state.posts.length
    ? `${n.toLocaleString()} posts on the wire`
    : `${n.toLocaleString()} of ${state.posts.length.toLocaleString()} posts`;

  el('wwEmpty').hidden = n > 0;
  el('wwSizer').style.height = `${n * ROW_HEIGHT}px`;
  state.firstRendered = -1;   // force a repaint
  renderWindow();

  // The panels summarise the VIEW, so they are stale the moment it changes.
  // Redrawing here is the only place that cannot be forgotten by a caller.
  drawStats();
  drawTimeline();
  drawVoices();
  drawMood();
}

/* ------------------------------------------------------------ the feed */

function renderWindow() {
  const vp = el('wwViewport');
  const total = state.view.length;
  const top = vp.scrollTop;
  const height = vp.clientHeight || 600;

  let first = Math.max(0, Math.floor(top / ROW_HEIGHT) - OVERSCAN);
  let last = Math.min(total, Math.ceil((top + height) / ROW_HEIGHT) + OVERSCAN);

  // Scrolling within the already-rendered slice needs no DOM work at all.
  if (first === state.firstRendered && last === state.lastRendered) return;
  state.firstRendered = first;
  state.lastRendered = last;

  const parts = [];
  for (let k = first; k < last; k++) parts.push(rowHTML(state.posts[state.view[k]], k));

  const win = el('wwWindow');
  win.style.transform = `translateY(${first * ROW_HEIGHT}px)`;
  win.innerHTML = parts.join('');

  el('wwRenderNote').textContent = total > 0
    ? `showing rows ${(first + 1).toLocaleString()}–${last.toLocaleString()} · ${last - first} nodes in the DOM`
    : '';
}

function rowHTML(post, k) {
  const who = post.who;
  const react = REACTIONS[post.reaction];

  const badges = [];
  if (post.status === 'canon')  badges.push('<span class="ww-badge ww-badge--canon">canon</span>');
  if (post.status === 'legacy') badges.push('<span class="ww-badge ww-badge--legacy">legacy</span>');
  if (post.generated)           badges.push('<span class="ww-badge ww-badge--gen">generated</span>');
  if (react) badges.push(
    `<span class="ww-badge ww-badge--react" style="color:${react.tone};border-color:${react.tone}66">` +
    `${react.glyph} ${esc(react.label)}</span>`);

  const links = post.resolved.map(id => {
    const t = state.targets[id];
    if (!t) return '';
    return `<a class="ww-link" href="${TERMINAL}${routeFor(t.kind, id)}" title="${esc(t.kind)}">` +
           `<span class="ww-link-kind">${KIND_GLYPH[t.kind] || '◆'}</span>` +
           `${esc(t.name)}</a>`;
  }).filter(Boolean).join('');

  // A broken pointer is shown, not hidden — it is a repair job, not decoration.
  const broken = post.dangling.length
    ? `<span class="ww-dangling" title="This post points at ${esc(post.dangling.join(', '))}, which matches no record in the archive.">⚠ unresolved: ${esc(post.dangling.join(', '))}</span>`
    : '';

  const wire = (links || broken)
    ? `<div class="ww-wired">${links ? '<span class="ww-wired-label">wired to</span>' : ''}${links}${broken}</div>`
    : '';

  const body = esc(post.content);

  return `<article class="ww-post" style="height:${ROW_HEIGHT}px">
    <div class="ww-avatar" style="background:${who.tone}22;border-color:${who.tone}">${who.glyph}</div>
    <div class="ww-post-body">
      <div class="ww-post-head">
        <b class="ww-name" style="color:${who.tone}">${esc(who.name)}</b>
        <span class="ww-handle">${esc(who.handle)}</span>
        <span class="ww-dot">·</span>
        <span class="ww-when">${esc(post.when)}</span>
        ${badges.join('')}
      </div>
      <p class="ww-content">${body}</p>
      ${wire}
      <div class="ww-meta">
        <span class="ww-likes" title="likes">❤ ${post.likes.toLocaleString()}</span>
        ${post.tags.map(t => `<span class="ww-tag">#${esc(t)}</span>`).join('')}
      </div>
    </div>
  </article>`;
}

/* ----------------------------------------------------------- statistics */

function drawStats() {
  // Everything below aggregates the CURRENT VIEW, not the whole corpus, so the
  // panels answer "what am I looking at" rather than repeating a constant.
  // Single pass over an Int32Array of indices: no intermediate arrays, no
  // spread, nothing that grows a temporary proportional to the corpus.
  const p = state.posts, v = state.view;
  let likes = 0, linked = 0, broken = 0;
  const voices = new Set();
  for (let k = 0; k < v.length; k++) {
    const x = p[v[k]];
    likes += x.likes;
    voices.add(x.author);
    if (x.linked) linked++;
    broken += x.dangling.length;
  }

  const filtered = v.length !== p.length;
  el('statPosts').textContent  = v.length.toLocaleString();
  el('statLikes').textContent  = fmtCount(likes);
  el('statVoices').textContent = voices.size.toLocaleString();
  el('statLinked').textContent = linked.toLocaleString();

  // When a filter is active, say what the number is a subset OF.
  const pn = el('statPostsNote');
  if (pn) pn.textContent = filtered ? `of ${p.length.toLocaleString()} on the wire` : 'on the wire';

  // Two different failures, reported separately because they need different
  // fixes: a BROKEN pointer is a data defect to repair, while a post with no
  // pointer at all is just unwired and waiting on the authoring pass.
  const note = el('statLinkedNote');
  if (note) {
    const unwired = v.length - linked;
    const bits = [];
    if (broken)  bits.push(`${broken.toLocaleString()} unresolved pointer${broken === 1 ? '' : 's'}`);
    if (unwired) bits.push(`${unwired.toLocaleString()} post${unwired === 1 ? '' : 's'} unwired`);
    note.textContent = bits.length ? bits.join(' · ') : 'all pointers resolve';
    note.classList.toggle('is-warn', broken > 0 || unwired > 0);
  }
}

function fmtCount(n) {
  return n >= 1e9 ? (n / 1e9).toFixed(1) + 'B'
       : n >= 1e6 ? (n / 1e6).toFixed(1) + 'M'
       : n >= 1e3 ? (n / 1e3).toFixed(1) + 'k'
       : n.toLocaleString();
}

/* Canvas, deliberately: at 100k posts a bar-per-post DOM chart is the same
 * mistake as a node-per-post feed. Aggregate into buckets, paint once. */
function drawTimeline() {
  const cv = el('tlCanvas');
  const wrap = cv.parentElement;
  const cssW = Math.max(320, wrap.clientWidth - 32);
  const dpr = window.devicePixelRatio || 1;
  cv.style.width = cssW + 'px';
  cv.width = cssW * dpr;
  cv.height = 150 * dpr;
  const g = cv.getContext('2d');
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  const W = cssW, H = 150;
  g.clearRect(0, 0, W, H);

  const p = state.posts, v = state.view;
  state.tl = null;
  if (!v.length) {
    el('tlAxis').innerHTML = '';
    el('tlNote').textContent = 'nothing in view';
    return;
  }

  // Bucket by month across the VIEW. Map + single pass; peak is tracked in the
  // loop rather than Math.max(...counts.values()), which spreads every bucket
  // onto the call stack and throws once a corpus spans enough months.
  const counts = new Map();
  let lo = Infinity, hi = -Infinity, peak = 0, dated = 0;
  for (let k = 0; k < v.length; k++) {
    const post = p[v[k]];
    if (!post.year) continue;
    const c = (counts.get(post.bucket) || 0) + 1;
    counts.set(post.bucket, c);
    if (c > peak) peak = c;
    if (post.bucket < lo) lo = post.bucket;
    if (post.bucket > hi) hi = post.bucket;
    dated++;
  }
  if (!counts.size) {
    el('tlAxis').innerHTML = '';
    el('tlNote').textContent = 'no dated posts in view';
    return;
  }

  const span = Math.max(1, hi - lo + 1);
  const plotH = H - 26;

  // More months than pixels: fold buckets into columns so a wide span stays
  // readable and the paint cost is bounded by width, not by corpus size.
  const cols = Math.min(span, Math.floor(W));
  const colW = W / cols;
  const colMax = new Float64Array(cols);
  for (const [b, c] of counts) {
    const ci = Math.min(cols - 1, Math.floor(((b - lo) / span) * cols));
    if (c > colMax[ci]) colMax[ci] = c;
  }

  const grad = g.createLinearGradient(0, 0, 0, H - 18);
  grad.addColorStop(0, '#f0c419');
  grad.addColorStop(1, '#8a6d00');
  g.fillStyle = grad;
  for (let ci = 0; ci < cols; ci++) {
    const c = colMax[ci];
    if (!c) continue;
    const h = Math.max(2, (c / peak) * plotH);
    g.fillRect(ci * colW, H - h - 18, Math.max(1, colW - (colW > 3 ? 1 : 0)), h);
  }

  g.strokeStyle = '#3a322c';
  g.lineWidth = 1;
  g.beginPath(); g.moveTo(0, H - 17.5); g.lineTo(W, H - 17.5); g.stroke();

  // Keep the geometry so the hover readout can map a pixel back to a month.
  state.tl = { lo, hi, span, cols, colW, peak, W, counts };

  const yLo = Math.floor(lo / 12), yHi = Math.floor(hi / 12);
  el('tlAxis').innerHTML =
    `<span>${yLo} BF</span><span>peak ${peak.toLocaleString()} in one month</span><span>${yHi} BF</span>`;
  el('tlNote').textContent =
    `${counts.size.toLocaleString()} active month${counts.size === 1 ? '' : 's'} · ${dated.toLocaleString()} dated`;
}

/* Hover readout: the timeline is aggregate, so let the reader interrogate a
 * specific month instead of guessing at a bar. */
function wireTimelineHover() {
  const cv = el('tlCanvas');
  const out = el('tlHover');
  if (!cv || !out) return;

  cv.addEventListener('mousemove', e => {
    const tl = state.tl;
    if (!tl) return;
    const rect = cv.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < 0 || x > tl.W) { out.textContent = ''; return; }
    const bucket = tl.lo + Math.min(tl.span - 1, Math.floor((x / tl.W) * tl.span));
    const n = tl.counts.get(bucket) || 0;
    const year = Math.floor(bucket / 12);
    const month = MONTHS[bucket % 12] || '';
    out.textContent = `${month} ${year} BF — ${n.toLocaleString()} post${n === 1 ? '' : 's'}`;
  }, { passive: true });

  cv.addEventListener('mouseleave', () => { out.textContent = ''; }, { passive: true });
}

function drawVoices() {
  const p = state.posts, v = state.view;
  const tally = new Map();
  for (let k = 0; k < v.length; k++) {
    const post = p[v[k]];
    let cur = tally.get(post.author);
    if (!cur) { cur = { likes: 0, posts: 0, who: post.who }; tally.set(post.author, cur); }
    cur.likes += post.likes;
    cur.posts++;
  }

  // Partial selection: only the top 7 are ever shown, so a full sort of every
  // author is wasted work on a wide corpus.
  const top = topN([...tally.values()], 7, (a, b) => b.likes - a.likes);
  const peak = top.length ? (top[0].likes || 1) : 1;

  el('voiceBars').innerHTML = top.map(vv => `
    <div class="ww-bar-row" title="${esc(vv.who.name)} — ${vv.posts.toLocaleString()} post${vv.posts === 1 ? '' : 's'}">
      <span class="ww-bar-label" style="color:${vv.who.tone}">${vv.who.glyph} ${esc(vv.who.name)}</span>
      <div class="ww-bar-track">
        <div class="ww-bar-fill" style="width:${Math.max(2, (vv.likes / peak) * 100)}%;background:${vv.who.tone}"></div>
      </div>
      <span class="ww-bar-val">${fmtCount(vv.likes)}</span>
    </div>`).join('') || '<p class="ww-none">No voices in view.</p>';
}

/* Top-n by partial selection. Sorting 100k authors to show 7 is the kind of
 * cost that only shows up once the data is real. */
function topN(arr, n, cmp) {
  if (arr.length <= n) return arr.sort(cmp);
  const best = [];
  for (const x of arr) {
    if (best.length < n) {
      best.push(x);
      if (best.length === n) best.sort(cmp);
    } else if (cmp(x, best[n - 1]) < 0) {
      let i = n - 1;
      while (i > 0 && cmp(x, best[i - 1]) < 0) { best[i] = best[i - 1]; i--; }
      best[i] = x;
    }
  }
  return best;
}

function drawMood() {
  const p = state.posts, v = state.view;
  const tally = new Map();
  let withReaction = 0;
  for (let k = 0; k < v.length; k++) {
    const r = p[v[k]].reaction;
    if (!r) continue;
    tally.set(r, (tally.get(r) || 0) + 1);
    withReaction++;
  }

  if (!withReaction) {
    el('moodChart').innerHTML =
      '<p class="ww-none">No reactions recorded in view — the authoring pass adds these.</p>';
    return;
  }

  const rows = [...tally.entries()].sort((a, b) => b[1] - a[1]);
  // Percentages are of posts that HAVE a reaction, not of all posts, so the
  // column sums to 100 instead of quietly shrinking as unreacted posts arrive.
  el('moodChart').innerHTML = rows.map(([k, n]) => {
    const r = REACTIONS[k] || { glyph: '·', label: k, tone: '#78909c' };
    const pct = ((n / withReaction) * 100).toFixed(1);
    return `<div class="ww-mood-row" title="${n.toLocaleString()} post${n === 1 ? '' : 's'}">
      <span class="ww-mood-glyph" style="background:${r.tone}22;border-color:${r.tone}">${r.glyph}</span>
      <span class="ww-mood-label">${esc(r.label)}</span>
      <div class="ww-bar-track"><div class="ww-bar-fill" style="width:${pct}%;background:${r.tone}"></div></div>
      <span class="ww-bar-val">${pct}%</span>
    </div>`;
  }).join('');

  const note = el('moodNote');
  if (note) {
    const un = v.length - withReaction;
    note.textContent = un ? `${un.toLocaleString()} without a reaction` : 'reaction mix';
  }
}

/* -------------------------------------------------------------- controls */

function wire() {
  const vp = el('wwViewport');
  wireTimelineHover();

  // rAF-coalesced: scroll fires far faster than the screen refreshes, and
  // doing DOM work per event is how a virtualised list still ends up janky.
  let ticking = false;
  vp.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { renderWindow(); ticking = false; });
  }, { passive: true });

  let debounce;
  el('wwSearch').addEventListener('input', e => {
    clearTimeout(debounce);
    const v = e.target.value;
    debounce = setTimeout(() => {
      state.query = v;
      vp.scrollTop = 0;
      applyFilter();
    }, 90);
  });

  el('wwFilters').addEventListener('click', e => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    [...el('wwFilters').children].forEach(b => b.classList.toggle('is-on', b === btn));
    state.filter = btn.dataset.filter;
    vp.scrollTop = 0;
    applyFilter();
  });

  el('wwSort').addEventListener('change', e => {
    state.sort = e.target.value;
    buildOrder();
    vp.scrollTop = 0;
    applyFilter();
  });

  let rz;
  window.addEventListener('resize', () => {
    clearTimeout(rz);
    rz = setTimeout(() => { drawTimeline(); state.firstRendered = -1; renderWindow(); }, 120);
  });
}

/* A hook for the load test: build a synthetic corpus without touching disk. */
window.__wahwireLoadTest = function (n) {
  const authors = Object.keys(AUTHORS);
  const reacts = Object.keys(REACTIONS);
  const posts = [];
  for (let i = 0; i < n; i++) {
    posts.push({
      id: `synthetic_${i}`,
      author: authors[i % authors.length],
      order: i,
      date: { year: 900 + (i % 140), monthIndex: i % 12, day: (i % 30) + 1 },
      timestamp: '',
      content: `Synthetic post ${i} for load testing the wire. ` +
               'It carries enough text to make the row realistic in height and layout.',
      likes: (i * 37) % 5000,
      links: [], tags: ['loadtest'], status: i % 3 === 0 ? 'canon' : 'legacy',
      reaction: reacts[i % reacts.length]
    });
  }
  return posts;
};

window.__wahwireState = state;
window.__wahwireIngest = function (posts) {
  // Exactly the path load() takes, minus the fetch — same prepare(), same
  // resolveLinks() — so the load test exercises the real code, not a copy.
  _prepareIndex = 0;
  state.posts = posts.map(prepare);
  resolveLinks();
  buildOrder();
  applyFilter();   // applyFilter() redraws every panel
};

/* Guarded: both of these can fire depending on how fast the module resolves,
 * and load() now binds listeners, so running it twice would double every
 * handler (one keystroke, two filter passes). */
let _booted = false;
function boot() { if (_booted) return; _booted = true; load(); }
document.addEventListener('DOMContentLoaded', boot);
if (document.readyState !== 'loading') boot();
