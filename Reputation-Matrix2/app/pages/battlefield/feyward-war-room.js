/*
 * Feyward War Room
 *
 * This is an authored planning companion, not generated campaign data. The source
 * event remains canonical; local orders are deliberately stored only in the browser.
 */
(function () {
  'use strict';

  const SOURCE_EVENT = {
    id: 'feyward_chop_bros_soul_ring_and_the_guard_with_no_name',
    title: 'Chop Bros, the OC Soul Ring, and the Guard With No Name',
    href: '../../../../index.html#/article/feyward_chop_bros_soul_ring_and_the_guard_with_no_name'
  };

  const TEAMS = {
    party: { label: 'Party / custody', code: 'GOLD', color: '#ffc90e' },
    plant: { label: 'Hostile growth', code: 'RED', color: '#ed1c24' },
    cutters: { label: 'Tree cutters', code: 'GREEN', color: '#22b14c' },
    manor: { label: 'Manor personnel', code: 'BLUE', color: '#00a2e8' }
  };

  const UNITS = [
    {
      id: 'hjumpik', team: 'party', name: 'Hjumpik', role: 'Anvil / chief negotiator', state: 'ACTIVE',
      x: 62.56, y: 38.17,
      objective: 'Keep the OC soul ring and Morel’s key out of the plant’s reach while preserving the nonlethal advantage.',
      fact: 'Warhammer carrier; lifted Toad Lee for the successful twenty-five-foot Chop Bros corridor and climbed the exterior wall.'
    },
    {
      id: 'toad-lee', team: 'party', name: 'Toad Lee', role: 'Diplomat / axe ace', state: 'ACTIVE',
      x: 74.62, y: 44.98,
      objective: 'Keep an exit open, support the cut, and hold the garlic option for the moment it changes the negotiation.',
      fact: 'Carried the axe and volunteered the garlic grenade that made every vine in the parlor flinch.'
    },
    {
      id: 'waluigi', team: 'party', name: 'Waluigi', role: 'Field archivist / escape cell', state: 'ACTIVE',
      x: 38.71, y: 50.20,
      objective: 'Maintain eyes on the false Lady, document custody, and do not turn a retreat into an avoidable casualty report.',
      fact: 'Used the Bob-omb to break the vine cage, caught the ring mid-skid, and transferred it to Hjumpik’s pocket.'
    },
    {
      id: 'oc-ring', team: 'party', name: 'OC soul ring', role: 'Critical custody object', state: 'HELD BY HJUMPIK',
      x: 65.24, y: 43.49,
      objective: 'Recover the real Lady without smashing, selling, polishing, or wearing the ring.',
      fact: 'The false Aurelian claimed the real Aurelian was trapped inside it. The filing treats that claim as important, not settled.'
    },
    {
      id: 'false-aurelian', team: 'plant', name: 'False Aurelian', role: 'Plant of the manor', state: 'LAST SEEN UPSTAIRS',
      x: 70.22, y: 55.58,
      objective: 'Protect the private sanctuary, retain leverage over the manor, and recover what the party is carrying.',
      fact: 'The thing wearing the Lady’s face admitted that it was the manor’s plant and that its growth breached walls everywhere.'
    },
    {
      id: 'sanctuary', team: 'plant', name: 'Private sanctuary approach', role: 'Unconfirmed hostile position', state: 'UNKNOWN',
      x: 79.15, y: 67.46,
      objective: 'Treat the upstairs sanctuary as the next hostile objective without pretending its entrance is known.',
      fact: 'The orange heir said the false Lady was running toward a private sanctuary. No room, route, or guard count is confirmed.'
    },
    {
      id: 'sixth-cutters', team: 'cutters', name: '6th Tree Cutter Division', role: 'Pressure / route-clearing', state: 'IN THE MANOR',
      x: 40.36, y: 63.29,
      objective: 'Push the leaf growth inward and keep the party’s escape and reinforcement lanes from closing.',
      fact: 'The orange heir said he had been put in charge of the sixth division; the window guard reported the cutters were pushing inward.'
    },
    {
      id: 'seventh-cutters', team: 'cutters', name: '7th Tree Cutter Division', role: 'Pressure / route-clearing', state: 'IN THE MANOR',
      x: 51.08, y: 68.91,
      objective: 'Maintain the cleared corridor without sacrificing the Revel or cutting blind into a room the plant controls.',
      fact: 'The filing records the sixth and seventh divisions at the heir’s table, not a precise headcount or a confirmed room-by-room deployment.'
    },
    {
      id: 'guard', team: 'manor', name: 'The Guard With No Name', role: 'Defected house guard', state: 'COOPERATING',
      x: 41.52, y: 20.83,
      objective: 'Guide the party toward the actual Lady and stop guarding fake things and fake people.',
      fact: 'He lowered his swords, bought time for nothing that turned out true, and joined the pursuit after Hjumpik negotiated instead of killing.'
    },
    {
      id: 'orange-heir', team: 'manor', name: 'The orange heir', role: 'Local command / map owner', state: 'COMMANDING',
      x: 37.49, y: 22.72,
      objective: 'Translate the manor’s moving crisis into a map and decide what the tree cutter divisions do next.',
      fact: 'He opened the war-room window, answered questions about Aurelian, and invited the party to discuss the tactical map.'
    }
  ];

  const PIP_GROUPS = [
    {
      team: 'party', zone: 'upper chamber / movement trace', note: 'Gold-green pips in the upper chamber are retained as the party’s working movement and contact trace.',
      points: [[82.74, 9.99], [78.53, 6.50], [78.03, 8.70], [73.29, 8.99], [87.87, 9.31], [76.80, 11.23], [84.48, 18.79], [80.56, 15.47], [72.73, 7.13], [84.33, 25.35], [85.99, 15.78], [85.74, 21.69]]
    },
    {
      team: 'party', zone: 'central hall / extraction trace', note: 'Yellow pips in the stone rooms are treated as the active party and custody route for planning purposes.',
      points: [[85.42, 30.18], [78.97, 34.91], [74.62, 44.98], [88.87, 40.73], [75.14, 32.07], [62.56, 38.17], [85.03, 44.37], [78.81, 30.16], [73.18, 40.04], [71.43, 42.86], [65.24, 43.49], [74.80, 39.19]]
    },
    {
      team: 'party', zone: 'outer wall / ring transfer', note: 'The bright yellow marks at the wall are read as the transfer and escape point where the ring reached Hjumpik’s pocket.',
      points: [[38.71, 50.20], [35.06, 50.04], [38.67, 47.05]]
    },
    {
      team: 'plant', zone: 'hostile growth cluster', note: 'Red pips mark the working hostile-growth front; they do not establish a confirmed unit count.',
      points: [[70.22, 55.58], [63.21, 56.19], [71.18, 67.78], [63.73, 60.67], [79.15, 67.46], [65.03, 67.06], [79.95, 55.29], [77.35, 58.56]]
    },
    {
      team: 'cutters', zone: 'tree-cutter pressure', note: 'Green pips mark the pressure line of the sixth and seventh Tree Cutter Divisions.',
      points: [[40.36, 63.29], [51.08, 68.91], [48.15, 73.64], [30.96, 66.27], [47.38, 68.99]]
    },
    {
      team: 'manor', zone: 'manor-side watch', note: 'Blue pips are a working manor-personnel / command cluster; the source filing does not give a headcount here.',
      points: [[41.52, 20.83], [38.04, 21.05], [37.49, 22.72]]
    }
  ];

  const STORAGE_KEY = 'waluipedia:feyward-war-room:orders:v1';
  const byId = (id) => document.getElementById(id);
  const teamOf = (team) => TEAMS[team] || TEAMS.party;
  const unitOf = (id) => UNITS.find((unit) => unit.id === id);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  const slugLabel = (value) => String(value).replace(/(^|[-_])([a-z])/g, (_, start, letter) => start + letter.toUpperCase()).replace(/[-_]/g, ' ');

  const state = {
    filter: 'all',
    selected: null,
    placing: false,
    orders: loadOrders()
  };

  function loadOrders() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(parsed) ? parsed.filter((order) => order && order.unitId && Number.isFinite(Number(order.x)) && Number.isFinite(Number(order.y))) : [];
    } catch (error) {
      return [];
    }
  }

  function saveOrders() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.orders)); } catch (error) { /* local-only enhancement */ }
  }

  function buildPips() {
    let index = 0;
    return PIP_GROUPS.flatMap((group) => group.points.map((point) => {
      index += 1;
      const unit = UNITS.find((candidate) => Math.abs(candidate.x - point[0]) < 0.02 && Math.abs(candidate.y - point[1]) < 0.02);
      return {
        id: `pip-${index}`,
        team: group.team,
        zone: group.zone,
        note: group.note,
        x: point[0],
        y: point[1],
        unitId: unit ? unit.id : null,
        label: unit ? unit.name : `${teamOf(group.team).code} pip ${String(index).padStart(2, '0')}`
      };
    }));
  }

  const PIPS = buildPips();

  function mapRoutes() {
    const known = [
      '<path class="route-known" d="M62.56 38.17 C57 40, 48 45, 38.71 50.20" />',
      '<path class="route-known" d="M74.62 44.98 C68 44, 63 42, 62.56 38.17" />',
      '<path class="route-threat" d="M70.22 55.58 C74 50, 76 44, 78.97 34.91" />',
      '<path class="route-threat" d="M70.22 55.58 C73 60, 77 64, 79.15 67.46" />',
      '<path class="route-known" d="M40.36 63.29 C45 58, 54 52, 62.56 38.17" />'
    ];
    const plotted = state.orders.map((order) => {
      const unit = unitOf(order.unitId);
      if (!unit) return '';
      return `<path class="route-order" d="M${unit.x} ${unit.y} L${Number(order.x).toFixed(2)} ${Number(order.y).toFixed(2)}" />`;
    });
    byId('routeLayer').innerHTML = known.concat(plotted).join('');
  }

  function renderMarkers() {
    const visible = PIPS.filter((pip) => state.filter === 'all' || pip.team === state.filter);
    byId('markerLayer').innerHTML = PIPS.map((pip) => {
      const team = teamOf(pip.team);
      const hidden = state.filter !== 'all' && pip.team !== state.filter;
      const selected = state.selected && state.selected.pipId === pip.id;
      return `<button class="marker${hidden ? ' is-hidden' : ''}${selected ? ' selected' : ''}" style="left:${pip.x}%;top:${pip.y}%;--marker-color:${team.color}" data-pip-id="${pip.id}" aria-label="${esc(pip.label)} · ${esc(team.label)}" type="button"><span class="marker-label">${esc(pip.label)}</span></button>`;
    }).join('');
    byId('markerCount').textContent = visible.length;
    byId('markerLayer').querySelectorAll('.marker').forEach((marker) => marker.addEventListener('click', () => selectPip(marker.dataset.pipId)));
  }

  function renderRoster() {
    byId('roster').innerHTML = UNITS.map((unit) => {
      const team = teamOf(unit.team);
      const dim = state.filter !== 'all' && unit.team !== state.filter;
      return `<article class="roster-card${dim ? ' is-filtered' : ''}" style="--team-color:${team.color}" data-unit-id="${unit.id}" tabindex="0" role="button" aria-label="Select ${esc(unit.name)}"><span class="unit-state">${esc(unit.state)}</span><span class="unit-role">${esc(team.code)} · ${esc(unit.role)}</span><h3>${esc(unit.name)}</h3><p>${esc(unit.objective)}</p></article>`;
    }).join('');
    byId('roster').querySelectorAll('.roster-card').forEach((card) => {
      card.addEventListener('click', () => selectUnit(card.dataset.unitId));
      card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectUnit(card.dataset.unitId); } });
    });
  }

  function renderSelected() {
    const details = byId('selectedDetails');
    const code = byId('selectedCode');
    if (!state.selected) {
      code.textContent = '—';
      details.innerHTML = '<p class="empty-state">The map is crowded with facts. Click a coloured pip or a unit below to make one speak.</p>';
      return;
    }
    const pip = PIPS.find((candidate) => candidate.id === state.selected.pipId);
    const unit = state.selected.unitId ? unitOf(state.selected.unitId) : null;
    const team = teamOf((unit || pip).team);
    code.textContent = unit ? `${team.code} · ${unit.id.toUpperCase()}` : `${team.code} · MAP PIP`;
    if (unit) {
      details.innerHTML = `<h3>${esc(unit.name)}</h3><span class="detail-role" style="color:${team.color}">${esc(team.label)} · ${esc(unit.role)}</span><p>${esc(unit.fact)}</p><div class="detail-facts"><div class="detail-fact"><b>Status</b><span>${esc(unit.state)}</span></div><div class="detail-fact"><b>Objective</b><span>${esc(unit.objective)}</span></div><div class="detail-fact"><b>Source</b><span><a href="${SOURCE_EVENT.href}">Open filing →</a></span></div></div>`;
    } else {
      details.innerHTML = `<h3>${esc(pip.label)}</h3><span class="detail-role" style="color:${team.color}">${esc(team.label)} · working marker</span><p>${esc(pip.note)}</p><div class="detail-facts"><div class="detail-fact"><b>Map zone</b><span>${esc(pip.zone)}</span></div><div class="detail-fact"><b>Canon status</b><span>Position retained from the supplied image; assignment is a planning interpretation.</span></div></div>`;
    }
  }

  function selectPip(pipId) {
    const pip = PIPS.find((candidate) => candidate.id === pipId);
    if (!pip) return;
    state.selected = { pipId: pip.id, unitId: pip.unitId };
    renderMarkers();
    renderSelected();
  }

  function selectUnit(unitId) {
    const pip = PIPS.find((candidate) => candidate.unitId === unitId);
    if (pip) return selectPip(pip.id);
    const unit = unitOf(unitId);
    if (!unit) return;
    state.selected = { pipId: null, unitId: unit.id };
    renderSelected();
  }

  function renderOrders() {
    const list = byId('ordersList');
    byId('orderCount').textContent = state.orders.length;
    if (!state.orders.length) {
      list.innerHTML = '<p class="empty-state">No proposed orders yet. Choose a unit, choose an order, then click the map.</p>';
      mapRoutes();
      return;
    }
    list.innerHTML = state.orders.map((order, index) => {
      const unit = unitOf(order.unitId) || { name: 'Unknown unit', team: 'party' };
      const team = teamOf(unit.team);
      return `<div class="order-row"><span class="order-line" style="background:${team.color};box-shadow:0 0 10px ${team.color}"></span><div><b>${esc(unit.name)} · ${esc(slugLabel(order.type))}</b><span class="order-meta">${esc(team.code)} · target ${Number(order.x).toFixed(1)}, ${Number(order.y).toFixed(1)} · proposed</span>${order.note ? `<p>${esc(order.note)}</p>` : ''}</div><button class="remove-order" type="button" data-order-index="${index}" aria-label="Remove proposed order">×</button></div>`;
    }).join('');
    list.querySelectorAll('.remove-order').forEach((button) => button.addEventListener('click', () => {
      state.orders.splice(Number(button.dataset.orderIndex), 1);
      saveOrders();
      renderOrders();
    }));
    mapRoutes();
  }

  function togglePlacement() {
    state.placing = !state.placing;
    const stage = byId('mapStage');
    const button = byId('placeOrder');
    const hint = byId('mapPlacementHint');
    stage.classList.toggle('placing', state.placing);
    hint.hidden = !state.placing;
    button.textContent = state.placing ? 'Cancel placement' : '＋ Plot an order';
    button.classList.toggle('button-danger', state.placing);
    button.classList.toggle('button-accent', !state.placing);
  }

  function placeOrderAt(event) {
    if (!state.placing || event.target.closest('.marker')) return;
    const rect = byId('mapStage').getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
    state.orders.push({
      id: Date.now(),
      unitId: byId('orderUnit').value,
      type: byId('orderType').value,
      note: byId('orderNote').value.trim(),
      x,
      y
    });
    byId('orderNote').value = '';
    saveOrders();
    togglePlacement();
    renderOrders();
  }

  function applyFilter(team) {
    state.filter = team;
    document.querySelectorAll('.legend-item').forEach((button) => button.classList.toggle('active', button.dataset.filter === team));
    renderMarkers();
    renderRoster();
  }

  function copyBriefing() {
    const lines = [
      'FEYWARD WAR ROOM — 23–24 Harvestide, 1040 BF (Feyward-relative)',
      'Source: ' + SOURCE_EVENT.title,
      'Status: false Aurelian exposed as the plant of the manor; OC ring in Hjumpik’s custody; no confirmed deaths; orange heir has the tactical map.',
      'Next objective: plan the sanctuary push without losing the ring, Morel’s key, the exit, or the nonlethal advantage.',
      '',
      ...state.orders.map((order) => {
        const unit = unitOf(order.unitId);
        return `PROPOSED — ${unit ? unit.name : order.unitId}: ${slugLabel(order.type)}${order.note ? ` — ${order.note}` : ''} [map ${Number(order.x).toFixed(1)}, ${Number(order.y).toFixed(1)}]`;
      })
    ];
    const text = lines.join('\n');
    const done = () => {
      const button = byId('copyBriefing');
      const old = button.textContent;
      button.textContent = 'Copied';
      setTimeout(() => { button.textContent = old; }, 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    else fallbackCopy(text, done);
  }

  function fallbackCopy(text, done) {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed'; area.style.opacity = '0';
    document.body.appendChild(area); area.select();
    try { document.execCommand('copy'); done(); } catch (error) { /* clipboard unavailable */ }
    area.remove();
  }

  function init() {
    const stage = byId('mapStage');
    stage.classList.add('show-grid', 'show-routes');
    byId('orderUnit').innerHTML = UNITS.map((unit) => `<option value="${unit.id}">${esc(unit.name)} · ${esc(teamOf(unit.team).code)}</option>`).join('');
    renderMarkers();
    renderRoster();
    renderSelected();
    renderOrders();

    document.querySelectorAll('.legend-item').forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
    document.querySelectorAll('.tool-button').forEach((button) => button.addEventListener('click', () => {
      const mode = button.dataset.toggle;
      const className = `show-${mode}`;
      stage.classList.toggle(className);
      button.classList.toggle('active', stage.classList.contains(className));
      button.setAttribute('aria-pressed', String(stage.classList.contains(className)));
    }));
    byId('placeOrder').addEventListener('click', togglePlacement);
    stage.addEventListener('click', placeOrderAt);
    byId('clearOrders').addEventListener('click', () => {
      if (!state.orders.length || window.confirm('Clear every proposed order from this browser?')) {
        state.orders = [];
        saveOrders();
        renderOrders();
      }
    });
    byId('copyBriefing').addEventListener('click', copyBriefing);
    byId('printPlan').addEventListener('click', () => window.print());
  }

  init();
})();
