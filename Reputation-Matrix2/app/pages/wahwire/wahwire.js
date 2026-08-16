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
const REACTIONS_URL = '../../../data/wahwire/reactions.json';

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
  chancellor_toadsworth:   { name: 'Toadsworth',              handle: '@toadsworth',   glyph: '🎩', tone: '#8b6f47' },
  captain_toadette:        { name: 'Toadette',                handle: '@toadette',     glyph: '🌸', tone: '#c2185b' },
  waluigi:                 { name: 'Waluigi',                 handle: '@waluigi',      glyph: '🍆', tone: '#6a1b9a' },
  bowser:                  { name: 'Bowser',                  handle: '@kingkoopa',    glyph: '🐢', tone: '#2e7d32' },
  archie_miser:            { name: 'Archie Miser',            handle: '@archie',       glyph: '💰', tone: '#b8860b' },
  markop:                  { name: 'Markop',                  handle: '@markop',       glyph: '🔧', tone: '#546e7a' },
  hjumpik:                 { name: 'Hjumpik',                 handle: '@hjumpik',      glyph: '🎯', tone: '#00838f' },
  /* The roster widened because thirteen accounts was too few to cover what
   * the archive records: Wario is a participant in twenty events and Luigi in
   * nineteen, and neither could post, which left Waluigi as the only voice
   * present at most of it. Everyone below is named in four or more events and
   * has a character page. */
  wario:                   { name: 'Wario',                   handle: '@wario',        glyph: '💰', tone: '#f9a825' },
  luigi:                   { name: 'Luigi',                   handle: '@luigi',        glyph: '👻', tone: '#2e7d32' },
  green_t:                 { name: 'Green T',                 handle: '@greent',       glyph: '🔬', tone: '#00695c' },
  eager:                   { name: 'Eager',                   handle: '@eager',        glyph: '⚡', tone: '#ef6c00' },
  mario:                   { name: 'Mario',                   handle: '@mario',        glyph: '🔨', tone: '#c62828' },
  bones:                   { name: 'Bones',                   handle: '@bones',        glyph: '💀', tone: '#78909c' },
  salam:                   { name: 'Salam',                   handle: '@salam',        glyph: '🦎', tone: '#5d4037' },
  mystic_morel:            { name: 'Mystic Morel',            handle: '@morel',        glyph: '🍄', tone: '#6d4c41' },
  toad_lee:                { name: 'Toad Lee',                handle: '@toadlee',      glyph: '🧢', tone: '#455a64' },
  fawful:                  { name: 'Fawful',                  handle: '@fawful',       glyph: '👓', tone: '#7cb342' },
  the_oracle:              { name: 'The Oracle',              handle: '@oracle',       glyph: '🔮', tone: '#5e35b1' },
  princess_peach:          { name: 'Princess Peach',          handle: '@peach',        glyph: '👑', tone: '#d81b60' },
  mossy:                   { name: 'Mossy',                   handle: '@mossy',        glyph: '🪨', tone: '#4e6e58' },
  orangus_cornelius:       { name: 'Orangus Cornelius',       handle: '@orangus',      glyph: '🎓', tone: '#8d6e63' },
  dracule_mihawk:          { name: 'Dracule Mihawk',          handle: '@mihawk',       glyph: '🗡️', tone: '#37474f' },
  sans:                    { name: 'sans',                    handle: '@sans',         glyph: '🦴', tone: '#546e7a' }
};

/* The feed's emotional palette, loaded from data/wahwire/reactions.json.
 *
 * This used to be a frozen literal here, duplicated in
 * tools/genkit/systems/wahwire.py — which meant the generator could only ever
 * use tones the front-end already knew, and adding one meant editing two
 * files in step or watching posts render blank. Now both sides read the same
 * file, so a reaction the generator invents shows up here with no code change.
 *
 * Seeded with the canon tones so the page still renders if the fetch fails. */
const REACTIONS = {
  cheer:     { glyph: '🎉', label: 'Cheering',   tone: '#2e7d32' },
  rage:      { glyph: '🔥', label: 'Furious',    tone: '#c0392b' },
  grief:     { glyph: '🕯️', label: 'Grieving',   tone: '#5c6bc0' },
  smug:      { glyph: '😏', label: 'Smug',       tone: '#b8860b' },
  alarm:     { glyph: '⚠️', label: 'Alarmed',    tone: '#ef6c00' },
  deadpan:   { glyph: '➖', label: 'Deadpan',    tone: '#78909c' },
  mourning:  { glyph: '🖤', label: 'Mourning',   tone: '#4a4a5a' },
  defiant:   { glyph: '✊', label: 'Defiant',    tone: '#00838f' },
  gloating:  { glyph: '🃏', label: 'Gloating',   tone: '#8e24aa' },
  fear:      { glyph: '😰', label: 'Afraid',     tone: '#5d4037' },
  awe:       { glyph: '✨', label: 'Awed',       tone: '#7e57c2' },
  disgust:   { glyph: '🤢', label: 'Disgusted',  tone: '#558b2f' },
  relief:    { glyph: '😮‍💨', label: 'Relieved',  tone: '#26a69a' },
  suspicion: { glyph: '🧐', label: 'Suspicious', tone: '#6d4c41' },
  resolve:   { glyph: '🛡️', label: 'Resolute',   tone: '#37474f' },
  mockery:   { glyph: '🤡', label: 'Mocking',    tone: '#d81b60' },
  pride:     { glyph: '🦁', label: 'Proud',      tone: '#f9a825' },
  despair:   { glyph: '💧', label: 'Despairing', tone: '#455a64' }
};

/* Fold the palette file over the seed. Unknown-but-present tones are kept
 * rather than replaced, so a generated reaction never blanks a post. */
async function loadReactions() {
  try {
    const res = await fetch(REACTIONS_URL);
    if (!res.ok) return;
    const doc = await res.json();
    const table = (doc && doc.reactions) || {};
    for (const [id, def] of Object.entries(table)) {
      if (!def || typeof def !== 'object') continue;
      REACTIONS[id] = {
        glyph: def.glyph || '·',
        label: def.label || (id.charAt(0).toUpperCase() + id.slice(1)),
        tone:  def.tone  || '#78909c'
      };
    }
  } catch (err) {
    console.warn('[wahwire] reaction palette unavailable, using built-ins', err);
  }
}

/* Account profiles, written by the wahwire-profile generator pass.
 *
 * Kept separate from the post store on purpose: a profile changes when the
 * account changes, not when it posts, and the feed must still render if this
 * file is missing entirely — every lookup below falls back to AUTHORS. */
const PROFILES_URL = '../../../data/wahwire/profiles.json';
const PROFILES = Object.create(null);

async function loadProfiles() {
  try {
    const res = await fetch(PROFILES_URL);
    if (!res.ok) return;
    const doc = await res.json();
    for (const [id, def] of Object.entries((doc && doc.profiles) || {})) {
      if (def && typeof def === 'object') PROFILES[id] = def;
    }
  } catch (err) {
    console.warn('[wahwire] profiles unavailable', err);
  }
}

/* Who follows whom, inverted once so a profile can show BOTH directions.
 * The generator only records outgoing edges; followers are derived. */
function followersOf(id) {
  const out = [];
  for (const [who, def] of Object.entries(PROFILES)) {
    if (who !== id && (def.follows || []).includes(id)) out.push(who);
  }
  return out;
}

function whoIs(id) {
  return AUTHORS[id] || {
    name: (id || 'Unknown').replace(/_/g, ' '),
    handle: '@' + (id || 'unknown'),
    glyph: '\u{1F464}', tone: '#78909c'
  };
}

const MONTHS = ['Deepwinter', 'Thawmarch', 'Seedfall', 'Rainwake', 'Brightleaf',
  'Longlight', 'Highsun', 'Harvestide', 'Aethel', 'Emberfade', 'Frostgate', 'Nightreach'];

const ROW_HEIGHT = 168;   // fixed row height is what makes O(1) scroll maths possible
const OVERSCAN   = 6;     // rows rendered beyond the viewport, to hide fast scrolling

const state = {
  posts: [],
  recordScope: '',            // set by a #record/<id> deep link from an article
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
  // Two shapes in the wild: the legacy set stored bare id strings, the
  // generator writes {id, type} objects. Normalise to ids here, once, rather
  // than teaching every consumer both shapes — rendering an object as a
  // string is what produced "[object Object]" on screen.
  const links = (Array.isArray(p.links) ? p.links : [])
    .map(l => (l && typeof l === 'object') ? l.id : l)
    .filter(l => typeof l === 'string' && l);
  return {
    i: _prepareIndex++,
    id: p.id,
    author: p.author,
    who,
    content: p.content || '',
    likes: Number(p.likes) || 0,
    status: p.status || 'legacy',
    reaction: p.reaction || '',
    // Comment threads are kept off the fixed-height row (the virtualiser needs
    // every row to be exactly ROW_HEIGHT) and shown in the reader instead.
    comments: (Array.isArray(p.comments) ? p.comments : []).filter(
      c => c && typeof c === 'object' && typeof c.content === 'string'
    ),
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
    // Every record this post points at, so a #record/<id> deep link from an
    // article can filter by pointer rather than by text.
    pointsAt: new Set([
      ...(p.links || []).map(l => (typeof l === 'string' ? l : (l && (l.id || l.target)))),
      p.legacyEventId
    ].filter(Boolean)),
    // one lowercased haystack: search is a single indexOf per post
    hay: `${p.content || ''} ${who.name} ${who.handle} ${(p.tags || []).join(' ')} ${p.id}`.toLowerCase()
  };
}

async function load() {
  // Wire the controls FIRST and unconditionally. They used to be attached at
  // the end of a successful load, which meant any fetch hiccup left a page
  // full of buttons that silently did nothing.
  wire();

  // Palette first: rowHTML() reads REACTIONS while rendering, so a tone that
  // arrives late would render as a blank badge on the first paint.
  // Palette and profiles are independent fetches; run them together rather
  // than paying two round trips in series before the first paint.
  await Promise.all([loadReactions(), loadProfiles()]);

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

  const posts = (Array.isArray(raw) ? raw : (raw.posts || [])).filter(post =>
    post && (post.status === 'canon' || post._quality?.validator === 'wahwire-v2')
  );
  _prepareIndex = 0;
  state.posts = posts.map(prepare);

  await loadTargets();
  resolveLinks();
  buildOrder();
  applyFilter();   // applyFilter() redraws every panel
  applyHashRoute();
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

/* Drive the search box from code and re-run the filter.
 * Used by the profile panel's "show only this account" button, so the state
 * the user sees in the box always matches the state the filter is using. */
function searchFor(query) {
  const box = el('wwSearch');
  box.value = query;
  state.query = query;
  el('wwViewport').scrollTop = 0;
  applyFilter();
  box.focus();
}

function applyFilter() {
  const raw = state.query.trim().toLowerCase();
  const f = state.filter;

  // `from:<account>` searches BY PROFILE rather than by text — the difference
  // matters for an account like @toad whose handle appears inside other
  // people's posts. Anything after the operator still matches as free text,
  // so `from:bowser docks` works.
  const scope = state.recordScope;
  let author = '';
  let q = raw;
  const op = raw.match(/^from:\s*(@?[a-z0-9_]+)\s*/);
  if (op) {
    author = op[1].replace(/^@/, '');
    q = raw.slice(op[0].length).trim();
    // Accept either the id (`bowser`) or the handle (`@kingkoopa`).
    if (!AUTHORS[author]) {
      const byHandle = Object.keys(AUTHORS).find(
        id => AUTHORS[id].handle.toLowerCase() === '@' + author);
      if (byHandle) author = byHandle;
    }
  }
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
    if (author && post.author !== author)              continue;
    if (scope && !post.pointsAt.has(scope))            continue;
    if (q && post.hay.indexOf(q) === -1)               continue;
    out[n++] = src[k];
  }
  state.view = out.subarray(0, n);

  el('wwCount').textContent = n === state.posts.length
    ? `${n.toLocaleString()} posts on the wire`
    : author
      ? `${n.toLocaleString()} post${n === 1 ? '' : 's'} by ${whoIs(author).handle}`
      : `${n.toLocaleString()} of ${state.posts.length.toLocaleString()} posts`;

  // A scope arriving from an article is invisible otherwise: the reader would
  // see a short feed with an empty search box and no way to understand why.
  const scopeBar = el('wwScope');
  if (scopeBar) {
    scopeBar.hidden = !scope;
    if (scope) {
      const label = (state.targets[scope] && state.targets[scope].name) || scope.replace(/_/g, ' ');
      el('wwScopeLabel').textContent = label;
    }
  }

  el('wwEmpty').hidden = n > 0;
  // An account can have a profile and no posts — several of the cast are
  // followed far more than they speak. "Nothing matches that" reads like a
  // broken filter; say which account is quiet instead.
  if (!n) {
    el('wwEmptyText').textContent = author
      ? `${whoIs(author).name} has a profile but has not posted on the wire.`
      : 'Nothing on the wire matches that.';
  }
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
  // `generated` is deliberately NOT badged. It stays on the record and stays
  // filterable (#wwFilters 'generated'), but an in-world feed that labels its
  // own posts as machine-written breaks the fiction for the reader.

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
        <button type="button" class="ww-who" data-profile="${esc(post.author)}"
                title="Open ${esc(who.name)}'s profile">
          <b class="ww-name" style="color:${who.tone}">${esc(who.name)}</b>
          <span class="ww-handle">${esc(who.handle)}</span>
        </button>
        <span class="ww-dot">·</span>
        <span class="ww-when">${esc(post.when)}</span>
        ${badges.join('')}
      </div>
      <p class="ww-content">${body}</p>
      ${wire}
      <div class="ww-meta">
        <span class="ww-likes" title="likes">❤ ${post.likes.toLocaleString()}</span>
        ${post.comments.length
          ? `<button type="button" class="ww-replies" data-post="${esc(post.id)}"
               title="Read the replies">💬 ${post.comments.length}</button>`
          : ''}
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

/* ------------------------------------------------------------ replies */

function openThread(postId) {
  const post = state.posts.find(p => p.id === postId);
  if (!post || !post.comments.length) return;

  const react = REACTIONS[post.reaction];
  const rows = post.comments.map(c => {
    const who = AUTHORS[c.author] || { name: c.author, handle: '@' + c.author,
                                       glyph: '\u{1F464}', tone: '#78909c' };
    const cr = REACTIONS[c.reaction];
    const answering = c.replyTo && AUTHORS[c.replyTo]
      ? `<span class="ww-reply-to">replying to ${esc(AUTHORS[c.replyTo].handle)}</span>`
      : '';
    return `<article class="ww-comment${c.replyTo ? ' is-reply' : ''}">
      <div class="ww-avatar ww-avatar--sm" style="background:${who.tone}22;border-color:${who.tone}">${who.glyph}</div>
      <div class="ww-comment-body">
        <div class="ww-post-head">
          <button type="button" class="ww-who" data-profile="${esc(c.author)}"
                  title="Open ${esc(who.name)}'s profile">
            <b class="ww-name" style="color:${who.tone}">${esc(who.name)}</b>
            <span class="ww-handle">${esc(who.handle)}</span>
          </button>
          ${answering}
          ${cr ? `<span class="ww-badge ww-badge--react" style="color:${cr.tone};border-color:${cr.tone}66">${cr.glyph} ${esc(cr.label)}</span>` : ''}
        </div>
        <p class="ww-content">${esc(c.content)}</p>
        <div class="ww-meta"><span class="ww-likes">❤ ${(Number(c.likes) || 0).toLocaleString()}</span></div>
      </div>
    </article>`;
  }).join('');

  el('wwThreadBody').innerHTML = `
    <article class="ww-comment ww-comment--op">
      <div class="ww-avatar ww-avatar--sm" style="background:${post.who.tone}22;border-color:${post.who.tone}">${post.who.glyph}</div>
      <div class="ww-comment-body">
        <div class="ww-post-head">
          <button type="button" class="ww-who" data-profile="${esc(post.author)}"
                  title="Open ${esc(post.who.name)}'s profile">
            <b class="ww-name" style="color:${post.who.tone}">${esc(post.who.name)}</b>
            <span class="ww-handle">${esc(post.who.handle)}</span>
          </button>
          ${react ? `<span class="ww-badge ww-badge--react" style="color:${react.tone};border-color:${react.tone}66">${react.glyph} ${esc(react.label)}</span>` : ''}
        </div>
        <p class="ww-content">${esc(post.content)}</p>
        <div class="ww-meta"><span class="ww-likes">❤ ${post.likes.toLocaleString()}</span></div>
      </div>
    </article>
    <div class="ww-thread-rule"><span>${post.comments.length} repl${post.comments.length === 1 ? 'y' : 'ies'}</span></div>
    ${rows}`;

  // Shared modal: the profile view rewrites this heading, so set it back.
  el('wwThreadTitle').textContent = 'Replies';
  const box = el('wwThread');
  box.hidden = false;
  el('wwThreadClose').focus();
}

function closeThread() {
  el('wwThread').hidden = true;
}

/* ------------------------------------------------------------ profiles */

/* A person, not a byline. Opening a profile shows who they are, everything
 * they have said on the wire, and — the part that makes the feed feel like a
 * network rather than a list — who they follow and who follows them.
 *
 * Rendered into the same modal as threads: one dialog, one focus trap, one
 * Escape handler. Two overlapping modals is how a page ends up with a close
 * button that closes the wrong thing. */
function openProfile(accountId) {
  const who = whoIs(accountId);
  const profile = PROFILES[accountId] || {};

  // Their posts, newest first — a profile is a record of what they said.
  const mine = state.posts
    .filter(p => p.author === accountId)
    .sort((a, b) => (b.order || 0) - (a.order || 0));

  const likes = mine.reduce((n, p) => n + p.likes, 0);
  const replies = state.posts.reduce(
    (n, p) => n + p.comments.filter(c => c.author === accountId).length, 0);

  const chip = id => {
    const w = whoIs(id);
    const why = (profile.followReasons || {})[id];
    return `<button type="button" class="ww-follow" data-profile="${esc(id)}"
              ${why ? `title="${esc(why)}"` : ''}>
        <span class="ww-follow-glyph" style="border-color:${w.tone}">${w.glyph}</span>
        <span class="ww-follow-name" style="color:${w.tone}">${esc(w.name)}</span>
        <span class="ww-follow-handle">${esc(w.handle)}</span>
      </button>`;
  };

  const following = (profile.follows || []).filter(id => id !== accountId);
  const followers = followersOf(accountId);

  const postRows = mine.length
    ? mine.map(p => `<article class="ww-profile-post">
        <div class="ww-profile-post-head">
          <span class="ww-when">${esc(p.when)}</span>
          ${p.comments.length
            ? `<button type="button" class="ww-replies" data-post="${esc(p.id)}"
                 title="Read the replies">💬 ${p.comments.length}</button>`
            : ''}
          <span class="ww-likes">❤ ${p.likes.toLocaleString()}</span>
        </div>
        <p class="ww-content">${esc(p.content)}</p>
      </article>`).join('')
    : '<p class="ww-profile-none">This account has not posted on the wire.</p>';

  el('wwThreadTitle').textContent = who.name;
  el('wwThreadBody').innerHTML = `
    <header class="ww-profile-head">
      <div class="ww-avatar ww-avatar--lg"
           style="background:${who.tone}22;border-color:${who.tone}">${who.glyph}</div>
      <div class="ww-profile-id">
        <b class="ww-profile-name" style="color:${who.tone}">${esc(who.name)}</b>
        <span class="ww-handle">${esc(who.handle)}</span>
        ${profile.bio ? `<p class="ww-profile-bio">${esc(profile.bio)}</p>` : ''}
        <div class="ww-profile-facts">
          ${profile.location ? `<span>📍 ${esc(profile.location)}</span>` : ''}
          ${profile.joined ? `<span>🕰 ${esc(profile.joined)}</span>` : ''}
        </div>
      </div>
    </header>

    <div class="ww-profile-tally">
      <div><b>${mine.length.toLocaleString()}</b><span>posts</span></div>
      <div><b>${likes.toLocaleString()}</b><span>likes</span></div>
      <div><b>${replies.toLocaleString()}</b><span>replies</span></div>
      <div><b>${following.length}</b><span>following</span></div>
      <div><b>${followers.length}</b><span>followers</span></div>
    </div>

    ${following.length ? `<div class="ww-thread-rule"><span>following</span></div>
      <div class="ww-follows">${following.map(chip).join('')}</div>` : ''}
    ${followers.length ? `<div class="ww-thread-rule"><span>followed by</span></div>
      <div class="ww-follows">${followers.map(chip).join('')}</div>` : ''}

    <div class="ww-thread-rule">
      <span>${mine.length} post${mine.length === 1 ? '' : 's'} on the wire</span>
    </div>
    ${postRows}

    ${mine.length ? `<div class="ww-profile-actions">
      <button type="button" class="ww-profile-filter" data-scope="${esc(accountId)}">
        Show only ${esc(who.handle)} in the feed
      </button>
    </div>` : ''}`;

  el('wwThread').hidden = false;
  el('wwThreadClose').focus();
}

function wire() {
  const vp = el('wwViewport');
  wireTimelineHover();

  // Delegated: rows are recycled by the virtualiser, so per-row listeners
  // would be attached and dropped on every scroll frame.
  el('wwWindow').addEventListener('click', e => {
    const face = e.target.closest('[data-profile]');
    if (face) { openProfile(face.dataset.profile); return; }
    const btn = e.target.closest('[data-post]');
    if (btn) openThread(btn.dataset.post);
  });

  // Inside the modal: a name in a thread opens that person, a follow chip
  // walks the graph, and the scope button turns the profile into a filter.
  el('wwThreadBody').addEventListener('click', e => {
    const face = e.target.closest('[data-profile]');
    if (face) { openProfile(face.dataset.profile); return; }
    const scope = e.target.closest('[data-scope]');
    if (scope) {
      closeThread();
      searchFor('from:' + scope.dataset.scope);
      return;
    }
    const btn = e.target.closest('[data-post]');
    if (btn) openThread(btn.dataset.post);
  });
  const clearScope = el('wwScopeClear');
  if (clearScope) {
    clearScope.addEventListener('click', () => {
      state.recordScope = '';
      history.replaceState(null, '', location.pathname + location.search);
      el('wwViewport').scrollTop = 0;
      applyFilter();
    });
  }

  // Back/forward between deep links from articles should actually navigate.
  window.addEventListener('hashchange', applyHashRoute);

  el('wwThreadClose').addEventListener('click', closeThread);
  el('wwThread').addEventListener('click', e => {
    if (e.target === el('wwThread')) closeThread();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !el('wwThread').hidden) closeThread();
  });

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
// Exposed so a test can assert every author in the data is renderable here.
// A missing entry is not a crash, it is a nameless row, which is the kind of
// defect that survives a page load and only shows up to a reader.
window.__wahwireAuthors = AUTHORS;
window.__wahwireIngest = function (posts) {
  // Exactly the path load() takes, minus the fetch — same prepare(), same
  // resolveLinks() — so the load test exercises the real code, not a copy.
  _prepareIndex = 0;
  state.posts = posts.map(prepare);
  resolveLinks();
  buildOrder();
  applyFilter();   // applyFilter() redraws every panel
  applyHashRoute();
};

/* Guarded: both of these can fire depending on how fast the module resolves,
 * and load() now binds listeners, so running it twice would double every
 * handler (one keystroke, two filter passes). */
let _booted = false;
/* Deep links from the rest of the site.
 *
 *   #profile/<account>  the article panel's bylines
 *   #post/<postId>      "+N more replies"
 *   #record/<recordId>  "read all N posts on the wire"
 *
 * A link that arrives from an article must land on the thing it named, not on
 * the top of an unfiltered feed — otherwise the panel is a dead end and the
 * reader has to re-find the post they were already looking at. */
function applyHashRoute() {
  const raw = decodeURIComponent((location.hash || '').replace(/^#/, ''));
  if (!raw) return;
  const [kind, ...rest] = raw.split('/');
  const arg = rest.join('/');
  if (!arg) return;

  if (kind === 'profile') {
    if (AUTHORS[arg] || PROFILES[arg]) openProfile(arg);
    return;
  }
  if (kind === 'post') {
    const post = state.posts.find(p => p.id === arg);
    if (post) {
      // Scroll the feed to it as well, so closing the thread leaves the
      // reader in the right place rather than back at the top.
      const at = [...state.view].findIndex(i => state.posts[i].id === arg);
      if (at >= 0) el('wwViewport').scrollTop = at * ROW_HEIGHT;
      openThread(arg);
    }
    return;
  }
  if (kind === 'record') {
    // Records are addressed through links[] / legacyEventId, not the text, so
    // this is a real filter rather than a search for the id string.
    state.recordScope = arg;
    applyFilter();
  }
}

function boot() { if (_booted) return; _booted = true; load(); }
document.addEventListener('DOMContentLoaded', boot);
if (document.readyState !== 'loading') boot();
