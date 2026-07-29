/* Waluipedia Hub front-end.
   Plain ES2020, no build step, no dependencies. */
'use strict';

const state = {
  overview: null,
  lore: null,
  selectedTool: null,
  selectedData: null,
};

/* ------------------------------------------------------------- helpers */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]
  ));
}

function bytes(size) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}

let toastTimer = null;
function toast(message, bad = false) {
  const node = $('#toast');
  node.textContent = message;
  node.classList.toggle('bad', Boolean(bad));
  node.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove('show'), 4200);
}

async function api(path, options = {}) {
  const response = await fetch(`/api/${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
    body: options.body ? JSON.stringify(options.body) : undefined,
    method: options.body ? 'POST' : (options.method || 'GET'),
  });
  const payload = await response.json().catch(() => ({ ok: false, error: 'Bad JSON from hub' }));
  if (!payload.ok) throw new Error(payload.error || `Request failed (${response.status})`);
  return payload.data;
}

function busy(button, on, label) {
  if (!button) return;
  button.disabled = on;
  if (on) {
    button.dataset.label = button.textContent;
    button.innerHTML = `<span class="spinner"></span>${label || 'Working…'}`;
  } else if (button.dataset.label) {
    button.textContent = button.dataset.label;
  }
}

/* ---------------------------------------------------------------- tabs */
function showTab(name) {
  $$('.tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.tab === name));
  $$('.panel').forEach((panel) => panel.classList.toggle('active', panel.id === `tab-${name}`));
  if (name === 'outputs') loadOutputs();
}

$('#tabs').addEventListener('click', (event) => {
  const tab = event.target.closest('.tab');
  if (tab) showTab(tab.dataset.tab);
});
document.addEventListener('click', (event) => {
  const goto = event.target.closest('[data-goto]');
  if (goto) showTab(goto.dataset.goto);
});

/* ----------------------------------------------------------- dashboard */
function renderDashboard() {
  const { counts, root, llm, outDir } = state.overview;
  $('#rootPath').textContent = root;
  $('#statGrid').innerHTML = [
    ['Python tools', counts.scripts],
    ['Functions', counts.functions],
    ['Data files', counts.dataFiles],
    ['Site pages', counts.pages],
  ].map(([label, value]) => `<div class="stat"><b>${value}</b><span>${label}</span></div>`).join('');

  const badge = $('#llmBadge');
  badge.textContent = llm.online
    ? `LM Studio: online${llm.models.length ? ` (${llm.models.length} model${llm.models.length > 1 ? 's' : ''})` : ''}`
    : 'LM Studio: offline';
  badge.className = `badge ${llm.online ? 'badge-on' : 'badge-off'}`;
  $('#modelHint').textContent = llm.online ? '' : '(offline — falls back to built-in writing)';
  $('#outDir').textContent = outDir;
}

async function loadCatalogHealth() {
  try {
    const data = await api('purchases');
    const { stats } = data;
    $('#catalogHealth').innerHTML = `
      <p class="muted">${stats.receipts} approved receipts across ${stats.players} player(s).
      ${stats.missingFromCatalog
        ? `<span class="tag tag-warn">${stats.missingFromCatalog} receipt line(s) reference items missing from the catalog — these are rebuilt from the receipt.</span>`
        : '<span class="tag tag-good">every receipt resolves to a catalog item</span>'}</p>`;
  } catch (error) {
    $('#catalogHealth').innerHTML = `<span class="tag tag-bad">${escapeHtml(error.message)}</span>`;
  }
}

/* --------------------------------------------------------------- tools */
function renderToolList(filter = '') {
  const needle = filter.trim().toLowerCase();
  const scripts = state.overview.scripts.filter((entry) => {
    if (!needle) return true;
    return entry.id.toLowerCase().includes(needle)
      || entry.summary.toLowerCase().includes(needle)
      || entry.functions.some((fn) => fn.name.toLowerCase().includes(needle));
  });
  $('#toolCount').textContent = `${scripts.length} of ${state.overview.scripts.length} tools`;
  $('#toolList').innerHTML = scripts.map((entry) => `
    <div class="item ${state.selectedTool === entry.id ? 'active' : ''}" data-tool="${escapeHtml(entry.id)}">
      <b>${escapeHtml(entry.id)}</b>
      <small>${escapeHtml(entry.summary)}</small>
      <small>${entry.functions.length} function(s) · ${bytes(entry.size)}${entry.longRunning ? ' · long-running' : ''}</small>
    </div>`).join('') || '<div class="item"><small>No matches.</small></div>';
}

async function openTool(id) {
  state.selectedTool = id;
  renderToolList($('#toolSearch').value);
  const entry = state.overview.scripts.find((script) => script.id === id);
  if (!entry) return;
  const detail = $('#toolDetail');
  detail.innerHTML = '<p class="muted"><span class="spinner"></span>Loading…</p>';

  let full;
  try {
    full = await api(`script?file=${encodeURIComponent(entry.file)}`);
  } catch (error) {
    detail.innerHTML = `<p class="tag tag-bad">${escapeHtml(error.message)}</p>`;
    return;
  }

  const flagRows = full.flags.length
    ? `<h3>Command-line options</h3><table><tbody>${full.flags.map((flag) => `
        <tr><td><code>${escapeHtml(flag.flags.join(', '))}</code></td>
        <td>${escapeHtml(flag.help || '')}</td></tr>`).join('')}</tbody></table>`
    : '';

  const functionRows = full.functions.length
    ? `<h3>Functions</h3>${full.functions.map((fn) => `
        <div class="fn"><code>${escapeHtml(fn.name)}(${escapeHtml(fn.args.join(', '))})</code>
        ${fn.doc ? `<small>${escapeHtml(fn.doc)}</small>` : ''}</div>`).join('')}`
    : '';

  detail.innerHTML = `
    <h2>${escapeHtml(full.id)}</h2>
    <p class="muted">${escapeHtml(full.relativeFile)} · ${bytes(full.size)}</p>
    ${full.interactive ? '<p><span class="tag tag-warn">Opens its own window — better started from a terminal.</span></p>' : ''}
    ${full.longRunning ? '<p><span class="tag tag-warn">Long-running; the hub stops capturing after the timeout.</span></p>' : ''}
    ${full.doc ? `<pre class="tight">${escapeHtml(full.doc)}</pre>` : ''}
    <div class="controls">
      <input id="runArgs" placeholder="extra CLI arguments (optional)" style="max-width:280px">
      <button class="btn btn-primary" id="runTool">Run</button>
      <button class="btn btn-sm" id="toggleSource">Show source</button>
    </div>
    <div id="runOutput"></div>
    ${flagRows}
    ${functionRows}
    <div id="sourceWrap" style="display:none"><h3>Source</h3><pre>${escapeHtml(full.source)}${full.truncated ? '\n… truncated …' : ''}</pre></div>`;

  $('#toggleSource').addEventListener('click', (event) => {
    const wrap = $('#sourceWrap');
    const open = wrap.style.display === 'none';
    wrap.style.display = open ? 'block' : 'none';
    event.target.textContent = open ? 'Hide source' : 'Show source';
  });

  $('#runTool').addEventListener('click', async (event) => {
    const button = event.target;
    const args = $('#runArgs').value.trim().split(/\s+/).filter(Boolean);
    busy(button, true, 'Running…');
    $('#runOutput').innerHTML = '';
    try {
      const result = await api('run', { body: { file: full.file, args, timeout: 180 } });
      const ok = result.exitCode === 0;
      $('#runOutput').innerHTML = `
        <p><span class="tag ${ok ? 'tag-good' : 'tag-bad'}">exit ${result.exitCode ?? 'timeout'}</span>
        <span class="tag">${result.duration}s</span></p>
        ${result.stdout ? `<pre class="tight">${escapeHtml(result.stdout)}</pre>` : ''}
        ${result.stderr ? `<h3>stderr</h3><pre class="tight">${escapeHtml(result.stderr)}</pre>` : ''}`;
      toast(ok ? 'Finished.' : 'Finished with errors — see output.', !ok);
    } catch (error) {
      toast(error.message, true);
      $('#runOutput').innerHTML = `<p class="tag tag-bad">${escapeHtml(error.message)}</p>`;
    } finally {
      busy(button, false);
    }
  });
}

$('#toolList').addEventListener('click', (event) => {
  const item = event.target.closest('[data-tool]');
  if (item) openTool(item.dataset.tool);
});
$('#toolSearch').addEventListener('input', (event) => renderToolList(event.target.value));

/* ---------------------------------------------------------- item piles */
function renderPilePreview(data) {
  if (!data.players.length) {
    $('#pileSummary').innerHTML = '<div class="card"><p class="muted">No purchases found.</p></div>';
    return;
  }
  $('#pileSummary').innerHTML = data.players.map((player) => `
    <div class="card">
      <h2>${escapeHtml(player.displayName)} <span class="tag">${escapeHtml(player.playerKey)}</span></h2>
      <p class="muted">${player.itemCount} item(s) · ${player.uniqueItems} unique · ${player.totalGold.toLocaleString()} gold
        ${player.missing ? `<span class="tag tag-warn">${player.missing} rebuilt from receipt</span>` : ''}</p>
      <table>
        <thead><tr><th>Item</th><th class="num">Qty</th><th class="num">Price</th><th>Rarity</th><th>Order</th></tr></thead>
        <tbody>${player.items.map((item) => `
          <tr>
            <td>${escapeHtml(item.name)}${item.missing ? ' <span class="tag tag-warn">not in catalog</span>' : ''}</td>
            <td class="num">${item.quantity}</td>
            <td class="num">${item.price ?? '—'}</td>
            <td>${escapeHtml(item.rarity || '—')}</td>
            <td><small>${escapeHtml((item.orderIds || []).join(', '))}</small></td>
          </tr>`).join('')}</tbody>
      </table>
    </div>`).join('');
}

$('#previewPiles').addEventListener('click', async (event) => {
  busy(event.target, true, 'Reading…');
  try {
    const faction = $('#includeFaction').checked ? '1' : '0';
    renderPilePreview(await api(`purchases?faction=${faction}`));
    $('#pileResult').innerHTML = '';
  } catch (error) {
    toast(error.message, true);
  } finally {
    busy(event.target, false);
  }
});

$('#buildPiles').addEventListener('click', async (event) => {
  busy(event.target, true, 'Building…');
  try {
    const manifest = await api('piles/build', {
      body: { includeFaction: $('#includeFaction').checked },
    });
    $('#pileResult').innerHTML = `
      <div class="card">
        <h2>Written</h2>
        <table>
          <thead><tr><th>Character</th><th class="num">Items</th><th class="num">Gold</th><th>File</th></tr></thead>
          <tbody>${manifest.piles.map((pile) => `
            <tr><td>${escapeHtml(pile.displayName)}</td>
            <td class="num">${pile.items}</td>
            <td class="num">${pile.totalGold.toLocaleString()}</td>
            <td><code>${escapeHtml(pile.relativeFile)}</code></td></tr>`).join('')}</tbody>
        </table>
        <p class="muted">Import each file in Foundry with <em>Create Actor → Import Data</em>. The item-piles module flags are already set.</p>
      </div>`;
    toast(`Built ${manifest.piles.length} item pile(s).`);
  } catch (error) {
    toast(error.message, true);
  } finally {
    busy(event.target, false);
  }
});

/* ---------------------------------------------------- character creator */
function fillLoreSelects() {
  const { characters, events, factions, classes } = state.lore;
  $('#charSelect').innerHTML = '<option value="">— none (blank slate) —</option>'
    + characters.map((person) => `<option value="${escapeHtml(person.id)}">${escapeHtml(person.name)}${person.race ? ` — ${escapeHtml(person.race)}` : ''}</option>`).join('');
  $('#charClass').innerHTML = '<option value="">auto from lore</option>'
    + classes.map((name) => `<option>${escapeHtml(name)}</option>`).join('');
  $('#charFaction').innerHTML = '<option value="">auto / none</option>'
    + factions.map((faction) => `<option value="${escapeHtml(faction.id)}">${escapeHtml(faction.name)}</option>`).join('');
  $('#charEvents').innerHTML = events.map((event) => `<option value="${escapeHtml(event.id)}">${escapeHtml(event.name)}</option>`).join('');
}

// Selecting a character pre-selects the events their lore already references.
$('#charSelect').addEventListener('change', (event) => {
  const person = state.lore.characters.find((entry) => entry.id === event.target.value);
  const keyEvents = new Set(person ? person.keyEvents : []);
  Array.from($('#charEvents').options).forEach((option) => {
    option.selected = keyEvents.has(option.value);
  });
});

function creatorPayload() {
  return {
    name: $('#charName').value,
    characterId: $('#charSelect').value,
    eventIds: Array.from($('#charEvents').selectedOptions).map((option) => option.value),
    factionId: $('#charFaction').value,
    className: $('#charClass').value,
    raceName: $('#charRace').value,
    level: Number($('#charLevel').value) || 1,
    includeGear: $('#charGear').checked,
    gearCount: Number($('#charGearCount').value) || 0,
    useModel: $('#charModel').checked,
  };
}

function renderCharReport(report, file) {
  const abilities = Object.entries(report.abilities)
    .map(([key, value]) => `<span class="tag">${key.toUpperCase()} ${value}</span>`).join('');
  $('#charResult').innerHTML = `
    <h2>${escapeHtml(report.name)}</h2>
    <p class="muted">Level ${report.level} ${escapeHtml(report.race)} ${escapeHtml(report.class)}
      · ${report.hp} HP · size ${escapeHtml(report.size)}
      ${report.alignment ? `· ${escapeHtml(report.alignment)}` : ''}</p>
    <p>${abilities}</p>
    <p><span class="tag">saves: ${report.saves.join(', ')}</span>
       <span class="tag">skills: ${report.skills.join(', ')}</span>
       <span class="tag">background: ${escapeHtml(report.background)}</span>
       <span class="tag ${report.modelUsed ? 'tag-good' : ''}">${report.modelUsed ? 'LM Studio flavor' : 'built-in flavor'}</span>
       ${report.modelRequested && !report.modelUsed ? '<span class="tag tag-warn">model unreachable — used built-in</span>' : ''}</p>
    ${report.events.length ? `<h3>Lore ties</h3><p>${report.events.map((e) => `<span class="tag">${escapeHtml(e.name)}</span>`).join('')}</p>` : ''}
    ${report.faction ? `<p class="muted">Faction: ${escapeHtml(report.faction)}</p>` : ''}
    ${report.gear.length ? `<h3>Starting gear</h3><table><tbody>${report.gear.map((item) => `
        <tr><td>${escapeHtml(item.name)}</td><td class="num">${item.price ?? '—'} gp</td></tr>`).join('')}</tbody></table>` : ''}
    ${file ? `<p class="muted">Saved to <code>${escapeHtml(file)}</code> — import with <em>Create Actor → Import Data</em>.</p>` : ''}`;
}

$('#previewChar').addEventListener('click', async (event) => {
  busy(event.target, true, 'Thinking…');
  try {
    renderCharReport(await api('character/preview', { body: creatorPayload() }));
  } catch (error) {
    toast(error.message, true);
  } finally {
    busy(event.target, false);
  }
});

$('#buildChar').addEventListener('click', async (event) => {
  busy(event.target, true, 'Creating…');
  try {
    const result = await api('character/build', { body: creatorPayload() });
    renderCharReport(result.report, result.relativeFile);
    toast('Actor JSON written.');
  } catch (error) {
    toast(error.message, true);
  } finally {
    busy(event.target, false);
  }
});

/* --------------------------------------------------------- data browser */
function renderDataList(filter = '') {
  const needle = filter.trim().toLowerCase();
  const files = state.overview.data.filter((entry) => (
    !needle || entry.name.toLowerCase().includes(needle) || entry.group.toLowerCase().includes(needle)
  ));
  $('#dataCount').textContent = `${files.length} of ${state.overview.data.length} files`;
  // Cap the DOM at 400 rows; the catalog alone is 400+ files.
  $('#dataList').innerHTML = files.slice(0, 400).map((entry) => `
    <div class="item ${state.selectedData === entry.file ? 'active' : ''}" data-file="${escapeHtml(entry.file)}">
      <b>${escapeHtml(entry.name)}</b>
      <small>${escapeHtml(entry.group)} · ${bytes(entry.size)}${entry.shape ? ` · ${escapeHtml(entry.shape)}` : ''}</small>
    </div>`).join('') || '<div class="item"><small>No matches.</small></div>';
}

async function openData(file) {
  state.selectedData = file;
  renderDataList($('#dataSearch').value);
  const detail = $('#dataDetail');
  detail.innerHTML = '<p class="muted"><span class="spinner"></span>Loading…</p>';
  try {
    const data = await api(`file?file=${encodeURIComponent(file)}`);
    detail.innerHTML = `
      <h2>${escapeHtml(data.name)}</h2>
      <p class="muted">${escapeHtml(data.path)} · ${bytes(data.size)}${data.truncated ? ' · preview truncated' : ''}</p>
      <pre>${escapeHtml(data.text)}</pre>`;
  } catch (error) {
    detail.innerHTML = `<p class="tag tag-bad">${escapeHtml(error.message)}</p>`;
  }
}

$('#dataList').addEventListener('click', (event) => {
  const item = event.target.closest('[data-file]');
  if (item) openData(item.dataset.file);
});
$('#dataSearch').addEventListener('input', (event) => renderDataList(event.target.value));

/* ------------------------------------------------------------- outputs */
async function loadOutputs() {
  try {
    const data = await api('outputs');
    $('#outDir').textContent = data.outDir;
    $('#outputList').innerHTML = data.files.length ? `
      <div class="card"><table>
        <thead><tr><th>File</th><th>Kind</th><th class="num">Size</th><th>Modified</th></tr></thead>
        <tbody>${data.files.map((file) => `
          <tr><td><code>${escapeHtml(file.name)}</code></td>
          <td>${escapeHtml(file.kind)}</td>
          <td class="num">${bytes(file.size)}</td>
          <td>${new Date(file.modified * 1000).toLocaleString()}</td></tr>`).join('')}</tbody>
      </table></div>`
      : '<div class="card"><p class="muted">Nothing generated yet.</p></div>';
  } catch (error) {
    toast(error.message, true);
  }
}
$('#reloadOutputs').addEventListener('click', loadOutputs);

$('#refreshBtn').addEventListener('click', async (event) => {
  busy(event.target, true, 'Refreshing…');
  try {
    await api('refresh', { body: {} });
    await boot();
    toast('Shop catalog re-exported.');
  } catch (error) {
    toast(error.message, true);
  } finally {
    busy(event.target, false);
  }
});

/* ---------------------------------------------------------------- boot */
async function boot() {
  try {
    state.overview = await api('overview');
    renderDashboard();
    renderToolList();
    renderDataList();
    loadCatalogHealth();
    state.lore = await api('lore');
    fillLoreSelects();
  } catch (error) {
    toast(`Could not load the hub: ${error.message}`, true);
  }
}

boot();
