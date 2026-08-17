/*
 * Feyward War Room
 *
 * Authored planning companion, not generated campaign data. The external SVG is a
 * composite survey built from the room inventory already filed in the Feyward
 * campaign. The source event remains canonical; local orders stay in the browser.
 */
(function () {
  'use strict';

  const SOURCE_EVENT = {
    title: 'Chop Bros, the OC Soul Ring, and the Guard With No Name',
    href: '../../../../index.html#/article/feyward_chop_bros_soul_ring_and_the_guard_with_no_name'
  };
  const SVG_WIDTH = 1200;
  const SVG_HEIGHT = 820;
  const STORAGE_KEY = 'waluipedia:feyward-war-room:orders:v2';

  const TEAMS = {
    party: { label: 'Party / custody', code: 'GOLD', color: '#ffc90e' },
    plant: { label: 'Hostile growth', code: 'RED', color: '#ed1c24' },
    cutters: { label: 'Tree cutters', code: 'GREEN', color: '#22b14c' },
    manor: { label: 'Manor personnel', code: 'BLUE', color: '#00a2e8' }
  };

  /* Room coordinates match feyward-manor-plan.svg. They are hit areas, not a
     second drawing: the SVG remains the visual source of truth. */
  const ROOMS = [
    { id: 'foyer', name: 'Foyer', x: 100, y: 108, w: 230, h: 122, confidence: 'known', status: 'Recently cleared / contested', detail: 'The latest filing calls the foyer cleared, with zero vines as a deliberately suspicious measurement. Earlier survey notes place the rooted winged-toad statue here.', source: 'Latest Hjumpik filing' },
    { id: 'gallery', name: 'Gallery', x: 370, y: 108, w: 180, h: 122, confidence: 'known', status: 'Explored / symbolic', detail: 'A private gallery held a mirror that reflected the room as night and three small green, red, and blue figures. Dyanos introduced Toad Lee to it.', source: 'Earlier Feyward campaign record' },
    { id: 'audience-hall', name: 'Audience Hall', x: 590, y: 108, w: 260, h: 122, confidence: 'known', status: 'Satyr zone / Revel pressure', detail: 'The satyrs’ party and the Revel’s social machinery occupy this side of the manor. Tree-cutting operations changed the room’s morale and its supply of barrels.', source: 'Feyward campaign record' },
    { id: 'master-bedroom', name: 'Master Bedroom', x: 890, y: 108, w: 210, h: 122, confidence: 'known', status: 'Command organ / ritual record', detail: 'A flower bed, glowing flowers, a marble bath, a diary, and ritual instructions under the rug were recorded here. This is the older bedroom command site, not a claim that it is the new war room.', source: 'Earlier Feyward campaign record' },
    { id: 'library', name: 'Library', x: 100, y: 302, w: 230, h: 106, confidence: 'known', status: 'Active archive / unstable floor', detail: 'The Overgrown Library is propped up by roots. Woodfellow, a giant tree-librarian, grows books like fruit; the original floor is missing in places.', source: 'Overgrown Library location record' },
    { id: 'greenhouse', name: 'Greenhouse', x: 370, y: 302, w: 180, h: 106, confidence: 'partial', status: 'Growth organ / plan uncertain', detail: 'Azure’s plan to shear the greenhouse remained uncertain. The older survey calls it an aggressively alive growth organ, so treat it as a source of pressure rather than a secured room.', source: 'Amnesia Vines filing' },
    { id: 'vine-room', name: 'Vine Room', x: 590, y: 302, w: 180, h: 106, confidence: 'known', status: 'Burned / authority keyed', detail: 'Waluigi burned the room after vines reacted to intention. Its internal mechanism recognized Corvinarus, Oracle, and Cornelius; that authority system is more important than the fire.', source: 'Earlier Feyward campaign record' },
    { id: 'revel-chamber', name: 'Revel Chamber', x: 810, y: 302, w: 290, h: 106, confidence: 'known', status: 'Red haze / active threat', detail: 'A red haze of grasping mouths and limbs sat on a makeshift throne. The Revel is described as a corpse-powered continuity engine, not merely a party room.', source: 'Feyward campaign record' },
    { id: 'bathhouse', name: 'Bathhouse', x: 100, y: 482, w: 180, h: 96, confidence: 'known', status: 'Plant breach history', detail: 'Toad Lee was attacked here by a plant abomination hiding in arranged foliage. It is a confirmed reminder that ordinary domestic rooms are not safe in this manor.', source: 'Overgrown Manor campaign record' },
    { id: 'lords-chamber', name: "Lord's Chamber", x: 320, y: 482, w: 240, h: 96, confidence: 'partial', status: 'Appetite organ / not trusted', detail: 'The older map calls this an appetite organ of the manor. The survey preserves the room because the description is a warning, not because its mechanism is understood.', source: 'Earlier standalone manor survey' },
    { id: 'solarium', name: 'Solarium', x: 600, y: 482, w: 180, h: 96, confidence: 'known', status: 'Floor destroyed / lower access', detail: 'Wario’s Bramblefly incident destroyed the floor. Treasure and lower access remain part of the room’s tactical meaning; crossing it is not ordinary movement.', source: 'Earlier Feyward campaign record' },
    { id: 'hidden-passages', name: 'Hidden Passages', x: 820, y: 482, w: 280, h: 96, confidence: 'partial', status: 'Mapped 30% / shifting', detail: 'This circulation system connects rooms in ways the architecture should not allow. The latest session used a secret seam, crawlspace, servant stair, and exterior wall; the route is not a reliable line yet.', source: 'Amnesia Vines and latest Hjumpik filings' },
    { id: 'maze-pond', name: 'Maze / Pond', x: 100, y: 640, w: 180, h: 80, confidence: 'known', status: 'Courtroom waterline', detail: 'Herniva and Stuckina’s dispute, a quartz skull, an orange crystal, and Hjumpik’s inexplicable cowbell all belong to this grounds-side zone.', source: 'Earlier Feyward campaign record' },
    { id: 'grove', name: 'Grove', x: 320, y: 640, w: 240, h: 80, confidence: 'known', status: 'Shambly displaced here', detail: 'Steely’s screech drove Shambly out of the manor and into the grove. The problem was relocated, not solved.', source: 'Overgrown Manor campaign record' },
    { id: 'midnight-gate', name: 'Midnight Gate', x: 600, y: 640, w: 180, h: 80, confidence: 'known', status: 'Located / unsecured', detail: 'An Oracle-independent exit route. It was found but not secured; it remains a carry-forward objective rather than a guaranteed retreat.', source: 'Overgrown Manor campaign record' },
    { id: 'coldbrook-room', name: "Coldbrook's Room", x: 820, y: 640, w: 280, h: 80, confidence: 'unresolved', status: 'Dead squad / one survivor', detail: 'Sergeant Varn Coldbrook was found alive in a room full of dead bodies while his squad was not. The scene was too clean and remains suspicious.', source: 'Earlier Feyward campaign record' }
  ];

  const MARKERS = [
    { id: 'hjumpik', team: 'party', name: 'Hjumpik', role: 'Anvil / chief negotiator', state: 'ACTIVE · MAP TABLE', x: 1030, y: 78, objective: 'Keep the OC soul ring and Morel’s key out of the plant’s reach while preserving the nonlethal advantage.', fact: 'Warhammer carrier; lifted Toad Lee for the successful twenty-five-foot Chop Bros corridor and climbed the exterior wall.' },
    { id: 'toad-lee', team: 'party', name: 'Toad Lee', role: 'Diplomat / axe ace', state: 'ACTIVE · MAP TABLE', x: 1080, y: 104, objective: 'Keep an exit open, support the cut, and hold the garlic option for the moment it changes the negotiation.', fact: 'Carried the axe and volunteered the garlic grenade that made every vine in the parlor flinch.' },
    { id: 'waluigi', team: 'party', name: 'Waluigi', role: 'Field archivist / escape cell', state: 'ACTIVE · MAP TABLE', x: 980, y: 105, objective: 'Maintain eyes on the false Lady, document custody, and do not turn a retreat into an avoidable casualty report.', fact: 'Used the Bob-omb to break the vine cage, caught the ring mid-skid, and transferred it to Hjumpik’s pocket.' },
    { id: 'oc-ring', team: 'party', name: 'OC soul ring', role: 'Critical custody object', state: 'HELD BY HJUMPIK', x: 1050, y: 126, objective: 'Recover the real Lady without smashing, selling, polishing, or wearing the ring.', fact: 'The false Aurelian claimed the real Aurelian was trapped inside it. The filing treats that claim as important, not settled.' },
    { id: 'false-aurelian', team: 'plant', name: 'False Aurelian', role: 'Plant of the manor', state: 'LAST SEEN UPSTAIRS', x: 1030, y: 265, objective: 'Protect the private sanctuary, retain leverage over the manor, and recover what the party is carrying.', fact: 'The thing wearing the Lady’s face admitted that it was the manor’s plant and that its growth breached walls everywhere.' },
    { id: 'sixth-cutters', team: 'cutters', name: '6th Tree Cutter Division', role: 'Pressure / route-clearing', state: 'IN THE GROUNDS', x: 420, y: 680, objective: 'Push the leaf growth inward and keep the party’s escape and reinforcement lanes from closing.', fact: 'The orange heir said he had been put in charge of the sixth division; the window guard reported the cutters were pushing inward.' },
    { id: 'seventh-cutters', team: 'cutters', name: '7th Tree Cutter Division', role: 'Pressure / route-clearing', state: 'IN THE GROUNDS', x: 510, y: 680, objective: 'Maintain the cleared corridor without sacrificing the Revel or cutting blind into a room the plant controls.', fact: 'The filing records the sixth and seventh divisions at the heir’s table, not a precise headcount or a confirmed room-by-room deployment.' },
    { id: 'nameless-guard', team: 'manor', name: 'The Guard With No Name', role: 'Defected house guard', state: 'COOPERATING', x: 1090, y: 270, objective: 'Guide the party toward the actual Lady and stop guarding fake things and fake people.', fact: 'He lowered his swords, bought time for nothing that turned out true, and joined the pursuit after Hjumpik negotiated instead of killing.' },
    { id: 'orange-heir', team: 'manor', name: 'The orange heir', role: 'Local command / map owner', state: 'COMMANDING', x: 1118, y: 92, objective: 'Translate the manor’s moving crisis into a map and decide what the tree cutter divisions do next.', fact: 'He opened the war-room window, answered questions about Aurelian, and invited the party to discuss the tactical map.' }
  ];

  const NODES = [
    { id: 'sitting-room', name: 'Sitting room / false Lady contact', kind: 'Current session site', x: 500, y: 267, color: '#ffc90e', detail: 'The latest session opened over cold tea. This is the contact site where the false Lady questioned Hjumpik and the Guard interrupted the name that could not be said.', confidence: 'source-locked event site' },
    { id: 'second-hidden-room', name: 'Second hidden room / hostage phase', kind: 'Current session site', x: 875, y: 447, color: '#b995ff', detail: 'The party followed the false Lady through a seam and crawlspace. The room’s exact relationship to the composite survey is not settled, so this node is intentionally not drawn as a normal room.', confidence: 'location known / geometry uncertain' },
    { id: 'heir-window', name: 'Exterior wall / heir’s window', kind: 'Current session endpoint', x: 1138, y: 160, color: '#00a2e8', detail: 'The party climbed the exterior wall, reached a warm window, and spoke with a kitchen guard before the orange heir opened the route to the war room.', confidence: 'source-locked event site' },
    { id: 'private-sanctuary', name: 'Private sanctuary approach', kind: 'Unresolved objective', x: 1035, y: 235, color: '#ed1c24', detail: 'The orange heir believes the false Aurelian was running toward a private sanctuary upstairs. The room, door, approach, and defenders are unknown.', confidence: 'lead only / do not treat as a room' },
    { id: 'war-room', name: 'Heir’s war room / map table', kind: 'Current command site', x: 1060, y: 65, color: '#00a2e8', detail: 'The map table is the next objective from the filing’s closing line. The planner places it outside the old room survey as a command overlay rather than pretending the source gave a blueprint.', confidence: 'source-locked event site' }
  ];

  const byId = (id) => document.getElementById(id);
  const teamOf = (team) => TEAMS[team] || { label: 'Operational node', code: 'NODE', color: '#b995ff' };
  const markerOf = (id) => MARKERS.find((marker) => marker.id === id);
  const roomOf = (id) => ROOMS.find((room) => room.id === id);
  const nodeOf = (id) => NODES.find((node) => node.id === id);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  const labelize = (value) => String(value).replace(/(^|[-_])([a-z])/g, (_, start, letter) => start + letter.toUpperCase()).replace(/[-_]/g, ' ');

  const state = { filter: 'all', placing: false, selected: { type: 'room', id: 'foyer' }, orders: loadOrders() };

  function loadOrders() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(parsed) ? parsed.filter((order) => order && markerOf(order.unitId) && Number.isFinite(Number(order.x)) && Number.isFinite(Number(order.y))) : [];
    } catch (error) { return []; }
  }

  function saveOrders() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.orders)); } catch (error) { /* local-only enhancement */ }
  }

  function setMapAssetStatus(kind, text) {
    const status = byId('mapAssetStatus');
    if (!status) return;
    status.className = `map-asset-status ${kind}`;
    status.innerHTML = `<span class="map-status-dot"></span>${esc(text)}`;
  }

  function renderRoomHits() {
    byId('roomHitLayer').innerHTML = ROOMS.map((room) => {
      const selected = state.selected.type === 'room' && state.selected.id === room.id;
      return `<button class="room-hit room-hit-${room.confidence}${selected ? ' selected' : ''}" style="left:${room.x / SVG_WIDTH * 100}%;top:${room.y / SVG_HEIGHT * 100}%;width:${room.w / SVG_WIDTH * 100}%;height:${room.h / SVG_HEIGHT * 100}%" data-room-id="${room.id}" type="button" aria-label="Open ${esc(room.name)} room record"><span>${esc(room.name)}</span></button>`;
    }).join('');
    byId('roomCount').textContent = ROOMS.length;
    byId('roomHitLayer').querySelectorAll('.room-hit').forEach((button) => button.addEventListener('click', (event) => {
      if (state.placing) return;
      event.stopPropagation();
      selectRoom(button.dataset.roomId);
    }));
  }

  function renderInventory() {
    byId('roomInventory').innerHTML = ROOMS.map((room) => `<button class="room-card room-card-${room.confidence}${state.selected.type === 'room' && state.selected.id === room.id ? ' selected' : ''}" data-room-id="${room.id}" type="button"><span class="room-card-top"><b>${esc(room.name)}</b><span class="confidence-badge">${esc(room.confidence)}</span></span><span class="room-card-status">${esc(room.status)}</span><span class="room-card-detail">${esc(room.detail)}</span></button>`).join('');
    byId('roomInventory').querySelectorAll('.room-card').forEach((button) => button.addEventListener('click', () => selectRoom(button.dataset.roomId)));
  }

  function routeMarkup() {
    const known = [
      '<path class="route-known" d="M214 230 C300 260 410 260 500 267"/>',
      '<path class="route-known" d="M500 267 C650 250 820 250 1035 235"/>',
      '<path class="route-known" d="M500 267 C610 370 770 410 875 447"/>',
      '<path class="route-known" d="M875 447 C1000 390 1110 280 1138 160"/>',
      '<path class="route-known" d="M420 680 C540 590 680 520 820 450"/>',
      '<path class="route-known" d="M510 680 C660 600 820 500 1035 235"/>'
    ];
    const threat = [
      '<path class="route-threat" d="M430 355 C570 330 660 355 680 355"/>',
      '<path class="route-threat" d="M680 355 C790 365 900 360 955 355"/>',
      '<path class="route-threat" d="M955 355 C1030 390 1050 440 1035 520"/>'
    ];
    const orders = state.orders.map((order) => {
      const unit = markerOf(order.unitId);
      if (!unit) return '';
      return `<path class="route-order" d="M${unit.x} ${unit.y} L${Number(order.x).toFixed(2)} ${Number(order.y).toFixed(2)}"/>`;
    });
    byId('routeLayer').innerHTML = known.concat(threat, orders).join('');
    byId('threatLayer').innerHTML = '<path class="threat-zone" d="M360 288H780V420H360Z"/><path class="threat-zone threat-zone-strong" d="M805 288H1105V430H805Z"/><path class="threat-zone" d="M805 465H1105V590H805Z"/>';
  }

  function markerMarkup(marker, index) {
    const team = teamOf(marker.team);
    const hidden = state.filter !== 'all' && marker.team !== state.filter;
    const selected = state.selected.type === 'marker' && state.selected.id === marker.id;
    return `<g class="svg-marker${hidden ? ' is-hidden' : ''}${selected ? ' selected' : ''}" data-marker-id="${marker.id}" transform="translate(${marker.x} ${marker.y})" tabindex="0" role="button" aria-label="${esc(marker.name)} · ${esc(team.label)}" style="--marker-color:${team.color}"><title>${esc(marker.name)} · ${esc(marker.state)}</title><circle class="marker-halo" r="16"/><circle class="marker-core" r="8" fill="${team.color}"/><circle class="marker-center" r="2.5"/><text class="marker-label" y="-14">${esc(marker.name)}</text><text class="marker-index" y="3">${index + 1}</text></g>`;
  }

  function nodeMarkup(node) {
    const selected = state.selected.type === 'node' && state.selected.id === node.id;
    return `<g class="svg-node${selected ? ' selected' : ''}" data-node-id="${node.id}" transform="translate(${node.x} ${node.y})" tabindex="0" role="button" aria-label="${esc(node.name)}" style="--node-color:${node.color}"><title>${esc(node.name)} · ${esc(node.kind)}</title><path class="node-diamond" d="M0-11L11 0L0 11L-11 0Z"/><circle class="node-center" r="3"/><text class="node-label" y="-16">${esc(node.name)}</text></g>`;
  }

  function renderMarkers() {
    const visible = MARKERS.filter((marker) => state.filter === 'all' || marker.team === state.filter);
    byId('markerLayer').innerHTML = visible.map(markerMarkup).join('') + NODES.map(nodeMarkup).join('');
    byId('markerCount').textContent = visible.length + NODES.length;
    byId('markerLayer').querySelectorAll('.svg-marker').forEach((element) => {
      element.addEventListener('click', (event) => { event.stopPropagation(); if (state.placing) placeOrderAt(event, markerOf(element.dataset.markerId)); else selectMarker(element.dataset.markerId); });
      element.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); if (state.placing) placeOrderAt(event, markerOf(element.dataset.markerId)); else selectMarker(element.dataset.markerId); } });
    });
    byId('markerLayer').querySelectorAll('.svg-node').forEach((element) => {
      element.addEventListener('click', (event) => { event.stopPropagation(); if (!state.placing) selectNode(element.dataset.nodeId); });
      element.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); if (!state.placing) selectNode(element.dataset.nodeId); } });
    });
  }

  function renderOrderTargets() {
    byId('orderTargetLayer').innerHTML = state.orders.map((order, index) => `<g class="order-target" transform="translate(${Number(order.x).toFixed(2)} ${Number(order.y).toFixed(2)})"><circle r="14"/><path d="M-20 0H20M0-20V20"/><text y="4">${index + 1}</text></g>`).join('');
  }

  function renderRoutes() { routeMarkup(); renderOrderTargets(); }

  function renderRoster() {
    byId('roster').innerHTML = MARKERS.map((marker) => {
      const team = teamOf(marker.team);
      const dim = state.filter !== 'all' && marker.team !== state.filter;
      return `<article class="roster-card${dim ? ' is-filtered' : ''}" style="--team-color:${team.color}" data-marker-id="${marker.id}" tabindex="0" role="button" aria-label="Select ${esc(marker.name)}"><span class="unit-state">${esc(marker.state)}</span><span class="unit-role">${esc(team.code)} · ${esc(marker.role)}</span><h3>${esc(marker.name)}</h3><p>${esc(marker.objective)}</p></article>`;
    }).join('');
    byId('roster').querySelectorAll('.roster-card').forEach((card) => {
      card.addEventListener('click', () => selectMarker(card.dataset.markerId));
      card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectMarker(card.dataset.markerId); } });
    });
  }

  function renderSelected() {
    const details = byId('selectedDetails');
    const code = byId('selectedCode');
    if (state.selected.type === 'room') {
      const room = roomOf(state.selected.id);
      if (!room) return;
      code.textContent = `ROOM · ${room.id.toUpperCase()}`;
      details.innerHTML = `<h3>${esc(room.name)}</h3><span class="detail-role room-role">${esc(room.status)}</span><p>${esc(room.detail)}</p><div class="detail-facts"><div class="detail-fact"><b>Survey</b><span>${esc(room.confidence)} confidence</span></div><div class="detail-fact"><b>Source</b><span>${esc(room.source)}</span></div><div class="detail-fact"><b>Boundary</b><span>Room exists in the archive; exact connections remain subject to the map notes.</span></div></div>`;
    } else if (state.selected.type === 'marker') {
      const marker = markerOf(state.selected.id);
      if (!marker) return;
      const team = teamOf(marker.team);
      code.textContent = `${team.code} · ${marker.id.toUpperCase()}`;
      details.innerHTML = `<h3>${esc(marker.name)}</h3><span class="detail-role" style="color:${team.color}">${esc(team.label)} · ${esc(marker.role)}</span><p>${esc(marker.fact)}</p><div class="detail-facts"><div class="detail-fact"><b>Status</b><span>${esc(marker.state)}</span></div><div class="detail-fact"><b>Objective</b><span>${esc(marker.objective)}</span></div><div class="detail-fact"><b>Source</b><span><a href="${SOURCE_EVENT.href}">Open filing →</a></span></div></div>`;
    } else {
      const node = nodeOf(state.selected.id);
      if (!node) return;
      code.textContent = `NODE · ${node.id.toUpperCase()}`;
      details.innerHTML = `<h3>${esc(node.name)}</h3><span class="detail-role" style="color:${node.color}">${esc(node.kind)}</span><p>${esc(node.detail)}</p><div class="detail-facts"><div class="detail-fact"><b>Confidence</b><span>${esc(node.confidence)}</span></div><div class="detail-fact"><b>Use</b><span>Planning reference only; do not promote this node to a canon room without a later filing.</span></div></div>`;
    }
  }

  function selectRoom(id) { if (!roomOf(id)) return; state.selected = { type: 'room', id }; renderRoomHits(); renderInventory(); renderMarkers(); renderSelected(); }
  function selectMarker(id) { if (!markerOf(id)) return; state.selected = { type: 'marker', id }; renderRoomHits(); renderInventory(); renderMarkers(); renderSelected(); }
  function selectNode(id) { if (!nodeOf(id)) return; state.selected = { type: 'node', id }; renderRoomHits(); renderInventory(); renderMarkers(); renderSelected(); }

  function renderOrders() {
    const list = byId('ordersList');
    byId('orderCount').textContent = state.orders.length;
    if (!state.orders.length) list.innerHTML = '<p class="empty-state">No proposed orders yet. Choose a unit, choose an order, then click the SVG plan.</p>';
    else list.innerHTML = state.orders.map((order, index) => {
      const marker = markerOf(order.unitId); const team = teamOf(marker.team);
      return `<div class="order-row"><span class="order-line" style="background:${team.color};box-shadow:0 0 10px ${team.color}"></span><div><b>${esc(marker.name)} · ${esc(labelize(order.type))}</b><span class="order-meta">${esc(team.code)} · target ${Math.round(order.x)}, ${Math.round(order.y)} · proposed</span>${order.note ? `<p>${esc(order.note)}</p>` : ''}</div><button class="remove-order" type="button" data-order-index="${index}" aria-label="Remove proposed order">×</button></div>`;
    }).join('');
    list.querySelectorAll('.remove-order').forEach((button) => button.addEventListener('click', () => { state.orders.splice(Number(button.dataset.orderIndex), 1); saveOrders(); renderOrders(); renderRoutes(); }));
    renderRoutes();
  }

  function togglePlacement() {
    state.placing = !state.placing;
    const stage = byId('mapStage'); const button = byId('placeOrder'); const hint = byId('mapPlacementHint');
    stage.classList.toggle('placing', state.placing); hint.hidden = !state.placing;
    button.textContent = state.placing ? 'Cancel placement' : '＋ Plot an order';
    button.classList.toggle('button-danger', state.placing); button.classList.toggle('button-accent', !state.placing);
  }

  function placeOrderAt(event, anchor) {
    if (!state.placing) return;
    const rect = byId('mapViewport').getBoundingClientRect();
    const x = anchor ? anchor.x : Math.max(0, Math.min(SVG_WIDTH, ((event.clientX - rect.left) / rect.width) * SVG_WIDTH));
    const y = anchor ? anchor.y : Math.max(0, Math.min(SVG_HEIGHT, ((event.clientY - rect.top) / rect.height) * SVG_HEIGHT));
    state.orders.push({ id: Date.now(), unitId: byId('orderUnit').value, type: byId('orderType').value, note: byId('orderNote').value.trim(), x, y });
    byId('orderNote').value = ''; saveOrders(); togglePlacement(); renderOrders();
  }

  function applyFilter(team) {
    state.filter = team;
    document.querySelectorAll('.legend-item[data-filter]').forEach((button) => button.classList.toggle('active', button.dataset.filter === team));
    renderMarkers(); renderRoster(); renderRoutes();
  }

  function copyBriefing() {
    const lines = [
      'FEYWARD WAR ROOM — 23–24 Harvestide, 1040 BF (Feyward-relative)',
      'Source: ' + SOURCE_EVENT.title,
      'Map: composite SVG survey; room connections vary in confidence.',
      'Status: false Aurelian exposed as the plant of the manor; OC ring in Hjumpik’s custody; no confirmed deaths; orange heir has the tactical map.',
      'Next objective: plan the sanctuary push without losing the ring, Morel’s key, the exit, or the nonlethal advantage.',
      '',
      ...state.orders.map((order) => { const marker = markerOf(order.unitId); return `PROPOSED — ${marker.name}: ${labelize(order.type)}${order.note ? ` — ${order.note}` : ''} [SVG ${Math.round(order.x)}, ${Math.round(order.y)}]`; })
    ];
    const text = lines.join('\n'); const done = () => { const button = byId('copyBriefing'); const old = button.textContent; button.textContent = 'Copied'; setTimeout(() => { button.textContent = old; }, 1400); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done)); else fallbackCopy(text, done);
  }

  function fallbackCopy(text, done) {
    const area = document.createElement('textarea'); area.value = text; area.setAttribute('readonly', ''); area.style.position = 'fixed'; area.style.opacity = '0'; document.body.appendChild(area); area.select();
    try { document.execCommand('copy'); done(); } catch (error) { /* clipboard unavailable */ } area.remove();
  }

  function init() {
    const stage = byId('mapStage'); const image = byId('floorplanImage');
    stage.classList.add('show-grid', 'show-routes', 'show-threats');
    image.addEventListener('load', () => setMapAssetStatus('loaded', 'SVG VERIFIED · 1200 × 820 · loaded from assets/maps'));
    image.addEventListener('error', () => setMapAssetStatus('error', 'SVG FAILED TO LOAD · check assets/maps/feyward-manor-plan.svg'));
    if (image.complete) setMapAssetStatus(image.naturalWidth ? 'loaded' : 'error', image.naturalWidth ? 'SVG VERIFIED · 1200 × 820 · loaded from assets/maps' : 'SVG FAILED TO LOAD · check assets/maps/feyward-manor-plan.svg');

    byId('orderUnit').innerHTML = MARKERS.map((marker) => `<option value="${marker.id}">${esc(marker.name)} · ${esc(teamOf(marker.team).code)}</option>`).join('');
    renderRoomHits(); renderInventory(); renderMarkers(); renderRoster(); renderSelected(); renderOrders();

    document.querySelectorAll('.legend-item[data-filter]').forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
    document.querySelectorAll('.tool-button').forEach((button) => button.addEventListener('click', () => {
      const className = `show-${button.dataset.toggle}`; stage.classList.toggle(className); button.classList.toggle('active', stage.classList.contains(className)); button.setAttribute('aria-pressed', String(stage.classList.contains(className)));
    }));
    byId('placeOrder').addEventListener('click', togglePlacement);
    byId('mapStage').addEventListener('click', (event) => { if (state.placing && !event.target.closest('.svg-marker')) placeOrderAt(event); });
    byId('clearOrders').addEventListener('click', () => { if (!state.orders.length || window.confirm('Clear every proposed order from this browser?')) { state.orders = []; saveOrders(); renderOrders(); } });
    byId('copyBriefing').addEventListener('click', copyBriefing);
    byId('printPlan').addEventListener('click', () => window.print());
  }

  init();
})();
