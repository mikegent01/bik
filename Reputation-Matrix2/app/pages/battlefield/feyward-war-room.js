/*
 * Feyward War Room
 *
 * The supplied Feyward WebP is the verified base map. This file adds an SVG
 * planning layer over it: room/sector hit areas, west-side growth, east-side
 * defenses, source markers, routes, and non-canon local orders.
 */
(function () {
  'use strict';

  const SOURCE_EVENT = {
    title: 'Chop Bros, the OC Soul Ring, and the Guard With No Name',
    href: '../../../../index.html#/article/feyward_chop_bros_soul_ring_and_the_guard_with_no_name'
  };
  const MAP_WIDTH = 8000;
  const MAP_HEIGHT = 8000;
  const STORAGE_KEY = 'waluipedia:feyward-war-room:orders:v3';

  const TEAMS = {
    party: { label: 'Party / custody', code: 'GOLD', color: '#ffc90e' },
    plant: { label: 'Hostile growth', code: 'RED', color: '#ed1c24' },
    cutters: { label: 'Tree cutters', code: 'GREEN', color: '#22b14c' },
    manor: { label: 'Manor personnel / defenses', code: 'BLUE', color: '#00a2e8' }
  };

  /* These are planning sectors drawn over the supplied image. They are not
     claims that the source file gave us a surveyed architectural blueprint. */
  const ROOMS = [
    { id: 'west-garden-court', name: 'West Garden / Fountain Court', x: 600, y: 500, w: 2150, h: 3000, confidence: 'visual', status: 'Garden, waterline, growth access', detail: 'The fountain and dense planting make this the clearest west-side exterior/garden zone. Use it as the origin of the plant-growth pressure, not as a confirmed room name.', source: 'Supplied map + Maze/Pond and Greenhouse records' },
    { id: 'north-central-hall', name: 'North Central Hall / Foyer', x: 2200, y: 650, w: 2900, h: 3300, confidence: 'working', status: 'Main interior route / current contact side', detail: 'The broad stone and tiled spaces in the upper middle are the best working match for the foyer, sitting-room approach, and main circulation described in the filings.', source: 'Supplied map + latest session scenes' },
    { id: 'east-defense-hall', name: 'East Defense Hall / Revel Side', x: 5000, y: 300, w: 2900, h: 3900, confidence: 'working', status: 'Primary defenses / hostile pressure', detail: 'The right side has the strongest visible defensive architecture, barricade-like furniture, and concentrated room activity. The planner treats it as the main defense line and Revel-side approach.', source: 'Supplied map + Revel/Audience Hall records' },
    { id: 'west-lower-archive', name: 'West Lower Archive / Library', x: 450, y: 3950, w: 1950, h: 1900, confidence: 'working', status: 'Library candidate / unstable lower wing', detail: 'The lower-left room cluster visually reads as an archive or workroom and fits the filed Overgrown Library: books, roots, missing floor, and a tree-librarian.', source: 'Supplied map + Overgrown Library record' },
    { id: 'center-study', name: "Center Study / Lord's Chamber", x: 2450, y: 3950, w: 1800, h: 1900, confidence: 'partial', status: 'Interior room / identity pending', detail: 'A furniture-heavy central-left room is marked as a study or Lord’s Chamber candidate. Keep the identification provisional until the table names it.', source: 'Supplied map + earlier standalone survey' },
    { id: 'central-crossing', name: 'Central Crossing / Hidden Passages', x: 3800, y: 3600, w: 1700, h: 3500, confidence: 'partial', status: 'Vertical route / broken geometry', detail: 'The map’s central white-walled spine and the latest crawlspace, servant-stair, and exterior-wall movement make this the safest place to plan a route without pretending it is stable.', source: 'Supplied map + Hidden Passages record' },
    { id: 'west-growth-front', name: 'West Growth Front / Grove', x: 50, y: 5150, w: 3000, h: 2850, confidence: 'known', status: 'Plant growth is visibly present', detail: 'Roots and overgrowth visibly occupy the lower-left edge. This is the actual growth front used by the SVG overlay; it is not a decorative fog layer.', source: 'Supplied map + Grove and plant records' },
    { id: 'south-central-gate', name: 'South Gate / Midnight Gate Candidate', x: 3000, y: 6050, w: 2200, h: 1900, confidence: 'unresolved', status: 'Exit / gate relationship unknown', detail: 'The lower central room and stairs are a useful planning anchor for the unsecured Midnight Gate, but the filing never pins that gate to this exact image position.', source: 'Supplied map + Midnight Gate record' },
    { id: 'south-east-defense', name: 'South-East Defense Rooms', x: 5100, y: 4150, w: 2850, h: 3650, confidence: 'visual', status: 'Secondary defense line', detail: 'The lower-right rooms form a second defensible cluster. Treat the entrances and furniture as obstacles, not as confirmed military fortifications until the session supplies names.', source: 'Supplied map + planning interpretation' },
    { id: 'heir-command-side', name: "Heir's Command Side / Window Line", x: 6300, y: 550, w: 1550, h: 1450, confidence: 'source', status: 'Current map-table endpoint', detail: 'The latest filing ends at a warm window and the orange heir’s war-room map. This overlay marks the east/northeast command side without claiming the image identifies the room’s interior.', source: 'Latest Hjumpik filing' }
  ];

  const MARKERS = [
    { id: 'hjumpik', team: 'party', name: 'Hjumpik', role: 'Anvil / chief negotiator', state: 'ACTIVE · MAP TABLE', x: 6660, y: 760, objective: 'Keep the OC soul ring and Morel’s key out of the plant’s reach while preserving the nonlethal advantage.', fact: 'Warhammer carrier; lifted Toad Lee for the successful twenty-five-foot Chop Bros corridor and climbed the exterior wall.' },
    { id: 'toad-lee', team: 'party', name: 'Toad Lee', role: 'Diplomat / axe ace', state: 'ACTIVE · MAP TABLE', x: 7050, y: 1010, objective: 'Keep an exit open, support the cut, and hold the garlic option for the moment it changes the negotiation.', fact: 'Carried the axe and volunteered the garlic grenade that made every vine in the parlor flinch.' },
    { id: 'waluigi', team: 'party', name: 'Waluigi', role: 'Field archivist / escape cell', state: 'ACTIVE · MAP TABLE', x: 6310, y: 1040, objective: 'Maintain eyes on the false Lady, document custody, and do not turn a retreat into an avoidable casualty report.', fact: 'Used the Bob-omb to break the vine cage, caught the ring mid-skid, and transferred it to Hjumpik’s pocket.' },
    { id: 'oc-ring', team: 'party', name: 'OC soul ring', role: 'Critical custody object', state: 'HELD BY HJUMPIK', x: 6840, y: 1250, objective: 'Recover the real Lady without smashing, selling, polishing, or wearing the ring.', fact: 'The false Aurelian claimed the real Aurelian was trapped inside it. The filing treats that claim as important, not settled.' },
    { id: 'false-aurelian', team: 'plant', name: 'False Aurelian', role: 'Plant of the manor', state: 'LAST SEEN UPSTAIRS', x: 6400, y: 2580, objective: 'Protect the private sanctuary, retain leverage over the manor, and recover what the party is carrying.', fact: 'The thing wearing the Lady’s face admitted that it was the manor’s plant and that its growth breached walls everywhere.' },
    { id: 'west-growth', team: 'plant', name: 'West growth front', role: 'Visible plant pressure', state: 'ACTIVE · LEFT SIDE', x: 1220, y: 6240, objective: 'Treat the visible roots as terrain and a threat source; do not let the defense line become the only thing players watch.', fact: 'The supplied map visibly carries dense roots and plant growth from the west and southwest edges. The overlay traces that existing threat instead of inventing a new room.' },
    { id: 'sixth-cutters', team: 'cutters', name: '6th Tree Cutter Division', role: 'Pressure / route-clearing', state: 'IN THE GROUNDS', x: 2800, y: 6720, objective: 'Push the leaf growth inward and keep the party’s escape and reinforcement lanes from closing.', fact: 'The orange heir said he had been put in charge of the sixth division; the window guard reported the cutters were pushing inward.' },
    { id: 'seventh-cutters', team: 'cutters', name: '7th Tree Cutter Division', role: 'Pressure / route-clearing', state: 'IN THE GROUNDS', x: 4100, y: 6900, objective: 'Maintain the cleared corridor without sacrificing the Revel or cutting blind into a room the plant controls.', fact: 'The filing records the sixth and seventh divisions at the heir’s table, not a precise headcount or a confirmed room-by-room deployment.' },
    { id: 'east-defense', team: 'manor', name: 'East defense line', role: 'Main defense / right side', state: 'WORKING PLACEMENT', x: 7540, y: 2860, objective: 'Hold the right/east rooms and prevent a direct party push from becoming a second hostage crisis.', fact: 'The right side of the supplied map contains the most concentrated furniture, barriers, and room activity. This marker is a planning abstraction until defenders are named.' },
    { id: 'south-defense', team: 'manor', name: 'South-east defense rooms', role: 'Secondary defense', state: 'WORKING PLACEMENT', x: 7350, y: 5660, objective: 'Protect the lower-right room cluster and deny a route around the east defense line.', fact: 'The lower-right map cluster is visibly defensible. Exact personnel and room identities are intentionally left open for the next session.' },
    { id: 'nameless-guard', team: 'manor', name: 'The Guard With No Name', role: 'Defected house guard', state: 'COOPERATING', x: 7350, y: 2230, objective: 'Guide the party toward the actual Lady and stop guarding fake things and fake people.', fact: 'He lowered his swords, bought time for nothing that turned out true, and joined the pursuit after Hjumpik negotiated instead of killing.' },
    { id: 'orange-heir', team: 'manor', name: 'The orange heir', role: 'Local command / map owner', state: 'COMMANDING', x: 7240, y: 820, objective: 'Translate the manor’s moving crisis into a map and decide what the tree cutter divisions do next.', fact: 'He opened the war-room window, answered questions about Aurelian, and invited the party to discuss the tactical map.' }
  ];

  const NODES = [
    { id: 'sitting-room', name: 'Sitting room / false Lady contact', kind: 'Current session site', x: 3520, y: 1560, color: '#ffc90e', detail: 'The latest session opened over cold tea. This is the working contact site where the false Lady questioned Hjumpik and the Guard interrupted the name that could not be said.', confidence: 'source-locked event site / image room match provisional' },
    { id: 'second-hidden-room', name: 'Second hidden room / hostage phase', kind: 'Current session site', x: 4660, y: 4230, color: '#b995ff', detail: 'The party followed the false Lady through a seam and crawlspace. The image shows central broken circulation here, but the exact room is not settled.', confidence: 'location known / image geometry uncertain' },
    { id: 'heir-window', name: 'Exterior wall / heir’s window', kind: 'Current session endpoint', x: 7660, y: 1160, color: '#00a2e8', detail: 'The party climbed the exterior wall, reached a warm window, and spoke with a kitchen guard before the orange heir opened the route to the war room.', confidence: 'source-locked event site' },
    { id: 'private-sanctuary', name: 'Private sanctuary approach', kind: 'Unresolved objective', x: 6350, y: 2180, color: '#ed1c24', detail: 'The orange heir believed the false Aurelian was running toward a private sanctuary upstairs. The room, door, approach, and defenders are unknown.', confidence: 'lead only / do not treat as a mapped room' },
    { id: 'war-room', name: 'Heir’s war room / map table', kind: 'Current command site', x: 6810, y: 520, color: '#00a2e8', detail: 'The map table is the next objective from the filing’s closing line. It is marked on the east command side as a source node, not as a claim about the image’s exact room label.', confidence: 'source-locked event site / image match provisional' }
  ];

  const byId = (id) => document.getElementById(id);
  const teamOf = (team) => TEAMS[team] || { label: 'Operational node', code: 'NODE', color: '#b995ff' };
  const markerOf = (id) => MARKERS.find((marker) => marker.id === id);
  const roomOf = (id) => ROOMS.find((room) => room.id === id);
  const nodeOf = (id) => NODES.find((node) => node.id === id);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  const labelize = (value) => String(value).replace(/(^|[-_])([a-z])/g, (_, start, letter) => start + letter.toUpperCase()).replace(/[-_]/g, ' ');

  const state = { filter: 'all', placing: false, selected: { type: 'room', id: 'north-central-hall' }, orders: loadOrders() };

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
      return `<button class="room-hit room-hit-${room.confidence}${selected ? ' selected' : ''}" style="left:${room.x / MAP_WIDTH * 100}%;top:${room.y / MAP_HEIGHT * 100}%;width:${room.w / MAP_WIDTH * 100}%;height:${room.h / MAP_HEIGHT * 100}%" data-room-id="${room.id}" type="button" aria-label="Open ${esc(room.name)} map sector"><span>${esc(room.name)}</span></button>`;
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

  function growthMarkup() {
    return `
      <g class="growth-vines" aria-label="Plant growth entering from west and southwest">
        <path d="M40 5400 C620 5000 820 5350 1280 4900 S2040 4700 2320 4200"/>
        <path d="M60 5850 C720 5600 980 5950 1480 5520 S2300 5200 2780 4800"/>
        <path d="M20 6400 C500 6080 920 6500 1420 6200 S2180 6000 3010 5660"/>
        <path d="M100 7150 C670 6800 980 7140 1540 6780 S2360 6640 3180 6200"/>
        <path d="M900 7980 C1160 7400 1560 7440 1920 7040 S2680 6880 3400 6400"/>
        <path d="M2020 7900 C2420 7500 2600 7160 2880 6820 S3420 6500 3820 6200"/>
        <path class="growth-thin" d="M390 5200 C980 5200 1080 4750 1760 4820M260 6900 C820 6600 1260 6900 1820 6500M1480 7900 C1760 7380 2160 7400 2520 7000"/>
        <g class="growth-bloom"><circle cx="1240" cy="4940" r="44"/><circle cx="1740" cy="5480" r="36"/><circle cx="1450" cy="6240" r="48"/><circle cx="2330" cy="6800" r="42"/><circle cx="3210" cy="6210" r="32"/></g>
        <text class="growth-label" x="280" y="4700">WEST GROWTH FRONT · VISIBLE ON SUPPLIED MAP</text>
        <text class="growth-label growth-label-small" x="280" y="4840">roots / vines / terrain pressure</text>
      </g>`;
  }

  function defenseMarkup() {
    const posts = [560, 1450, 2470, 3440, 4550, 5660, 6780, 7500];
    return `
      <g class="defense-structure" aria-label="Main defenses on east and southeast side">
        <path class="defense-line" d="M7600 250 C7420 700 7660 1120 7480 1580 S7720 2450 7500 2940 S7700 3820 7480 4300 S7700 5350 7480 5900 S7700 6950 7480 7750"/>
        <path class="defense-secondary" d="M7040 360 C6860 850 7180 1280 6960 1730 S7200 2600 7000 3200M7060 4450 C6870 5000 7160 5550 6960 6100 S7200 7000 7040 7600"/>
        ${posts.map((y) => `<g class="defense-post" transform="translate(7600 ${y})"><rect x="-48" y="-48" width="96" height="96" rx="12"/><path d="M-26 0H26M0-26V26"/></g>`).join('')}
        <path class="defense-brace" d="M7210 420 L7580 420M7180 3890 L7560 3890M7100 4480 L7520 4480M7100 7440 L7520 7440"/>
        <text class="defense-label" x="7800" y="3400" transform="rotate(90 7800 3400)">MAIN DEFENSE LINE · EAST SIDE</text>
        <text class="defense-label defense-label-small" x="7040" y="3970">RIGHT-SIDE ROOMS / BARRICADE ZONE</text>
        <text class="defense-label defense-label-small" x="6760" y="7380">SECONDARY DEFENSE CLUSTER</text>
      </g>`;
  }

  function routeMarkup() {
    const known = [
      '<path class="route-known" d="M3520 1560 C4000 2250 4380 3400 4660 4230"/>',
      '<path class="route-known" d="M4660 4230 C5600 3900 6500 2750 7660 1160"/>',
      '<path class="route-known" d="M4660 4230 C4100 5100 3950 6000 4100 6900"/>',
      '<path class="route-threat" d="M500 5400 C1800 4800 2820 4500 3800 4300"/>',
      '<path class="route-threat" d="M150 6900 C1450 6400 2500 6000 3600 5500"/>',
      '<path class="route-defense" d="M7600 250 V7750"/>'
    ];
    const orders = state.orders.map((order) => {
      const unit = markerOf(order.unitId);
      if (!unit) return '';
      return `<path class="route-order" d="M${unit.x} ${unit.y} L${Number(order.x).toFixed(2)} ${Number(order.y).toFixed(2)}"/>`;
    });
    byId('routeLayer').innerHTML = known.concat(orders).join('');
  }

  function markerMarkup(marker, index) {
    const team = teamOf(marker.team);
    const hidden = state.filter !== 'all' && marker.team !== state.filter;
    const selected = state.selected.type === 'marker' && state.selected.id === marker.id;
    return `<g class="svg-marker${hidden ? ' is-hidden' : ''}${selected ? ' selected' : ''}" data-marker-id="${marker.id}" transform="translate(${marker.x} ${marker.y})" tabindex="0" role="button" aria-label="${esc(marker.name)} · ${esc(team.label)}" style="--marker-color:${team.color}"><title>${esc(marker.name)} · ${esc(marker.state)}</title><circle class="marker-halo" r="105"/><circle class="marker-core" r="55" fill="${team.color}"/><circle class="marker-center" r="17"/><text class="marker-label" y="-105">${esc(marker.name)}</text><text class="marker-index" y="18">${index + 1}</text></g>`;
  }

  function nodeMarkup(node) {
    const selected = state.selected.type === 'node' && state.selected.id === node.id;
    return `<g class="svg-node${selected ? ' selected' : ''}" data-node-id="${node.id}" transform="translate(${node.x} ${node.y})" tabindex="0" role="button" aria-label="${esc(node.name)}" style="--node-color:${node.color}"><title>${esc(node.name)} · ${esc(node.kind)}</title><path class="node-diamond" d="M0-100L100 0L0 100L-100 0Z"/><circle class="node-center" r="28"/><text class="node-label" y="-130">${esc(node.name)}</text></g>`;
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
    byId('orderTargetLayer').innerHTML = state.orders.map((order, index) => `<g class="order-target" transform="translate(${Number(order.x).toFixed(2)} ${Number(order.y).toFixed(2)})"><circle r="105"/><path d="M-145 0H145M0-145V145"/><text y="26">${index + 1}</text></g>`).join('');
  }

  function renderRoutes() { routeMarkup(); renderOrderTargets(); }

  function renderOverlays() {
    byId('growthLayer').innerHTML = growthMarkup();
    byId('defenseLayer').innerHTML = defenseMarkup();
    renderRoutes();
  }

  function renderRoster() {
    byId('roster').innerHTML = MARKERS.map((marker) => {
      const team = teamOf(marker.team); const dim = state.filter !== 'all' && marker.team !== state.filter;
      return `<article class="roster-card${dim ? ' is-filtered' : ''}" style="--team-color:${team.color}" data-marker-id="${marker.id}" tabindex="0" role="button" aria-label="Select ${esc(marker.name)}"><span class="unit-state">${esc(marker.state)}</span><span class="unit-role">${esc(team.code)} · ${esc(marker.role)}</span><h3>${esc(marker.name)}</h3><p>${esc(marker.objective)}</p></article>`;
    }).join('');
    byId('roster').querySelectorAll('.roster-card').forEach((card) => {
      card.addEventListener('click', () => selectMarker(card.dataset.markerId));
      card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectMarker(card.dataset.markerId); } });
    });
  }

  function renderSelected() {
    const details = byId('selectedDetails'); const code = byId('selectedCode');
    if (state.selected.type === 'room') {
      const room = roomOf(state.selected.id); if (!room) return;
      code.textContent = `ZONE · ${room.id.toUpperCase()}`;
      details.innerHTML = `<h3>${esc(room.name)}</h3><span class="detail-role room-role">${esc(room.status)}</span><p>${esc(room.detail)}</p><div class="detail-facts"><div class="detail-fact"><b>Confidence</b><span>${esc(room.confidence)}</span></div><div class="detail-fact"><b>Source</b><span>${esc(room.source)}</span></div><div class="detail-fact"><b>Boundary</b><span>Planning zone only; exact room identity can be corrected after the next session.</span></div></div>`;
    } else if (state.selected.type === 'marker') {
      const marker = markerOf(state.selected.id); if (!marker) return;
      const team = teamOf(marker.team); code.textContent = `${team.code} · ${marker.id.toUpperCase()}`;
      details.innerHTML = `<h3>${esc(marker.name)}</h3><span class="detail-role" style="color:${team.color}">${esc(team.label)} · ${esc(marker.role)}</span><p>${esc(marker.fact)}</p><div class="detail-facts"><div class="detail-fact"><b>Status</b><span>${esc(marker.state)}</span></div><div class="detail-fact"><b>Objective</b><span>${esc(marker.objective)}</span></div><div class="detail-fact"><b>Source</b><span><a href="${SOURCE_EVENT.href}">Open filing →</a></span></div></div>`;
    } else {
      const node = nodeOf(state.selected.id); if (!node) return;
      code.textContent = `NODE · ${node.id.toUpperCase()}`;
      details.innerHTML = `<h3>${esc(node.name)}</h3><span class="detail-role" style="color:${node.color}">${esc(node.kind)}</span><p>${esc(node.detail)}</p><div class="detail-facts"><div class="detail-fact"><b>Confidence</b><span>${esc(node.confidence)}</span></div><div class="detail-fact"><b>Use</b><span>Planning reference only; do not promote this node to a canon room without a later filing.</span></div></div>`;
    }
  }

  function selectRoom(id) { if (!roomOf(id)) return; state.selected = { type: 'room', id }; renderRoomHits(); renderInventory(); renderMarkers(); renderSelected(); }
  function selectMarker(id) { if (!markerOf(id)) return; state.selected = { type: 'marker', id }; renderRoomHits(); renderInventory(); renderMarkers(); renderSelected(); }
  function selectNode(id) { if (!nodeOf(id)) return; state.selected = { type: 'node', id }; renderRoomHits(); renderInventory(); renderMarkers(); renderSelected(); }

  function renderOrders() {
    const list = byId('ordersList'); byId('orderCount').textContent = state.orders.length;
    if (!state.orders.length) list.innerHTML = '<p class="empty-state">No proposed orders yet. Choose a unit, choose an order, then click the supplied map.</p>';
    else list.innerHTML = state.orders.map((order, index) => {
      const marker = markerOf(order.unitId); const team = teamOf(marker);
      return `<div class="order-row"><span class="order-line" style="background:${team.color};box-shadow:0 0 10px ${team.color}"></span><div><b>${esc(marker.name)} · ${esc(labelize(order.type))}</b><span class="order-meta">${esc(team.code)} · target ${Math.round(order.x)}, ${Math.round(order.y)} · proposed</span>${order.note ? `<p>${esc(order.note)}</p>` : ''}</div><button class="remove-order" type="button" data-order-index="${index}" aria-label="Remove proposed order">×</button></div>`;
    }).join('');
    list.querySelectorAll('.remove-order').forEach((button) => button.addEventListener('click', () => { state.orders.splice(Number(button.dataset.orderIndex), 1); saveOrders(); renderOrders(); }));
    renderRoutes();
  }

  function togglePlacement() {
    state.placing = !state.placing; const stage = byId('mapStage'); const button = byId('placeOrder'); const hint = byId('mapPlacementHint');
    stage.classList.toggle('placing', state.placing); hint.hidden = !state.placing; button.textContent = state.placing ? 'Cancel placement' : '＋ Plot an order';
    button.classList.toggle('button-danger', state.placing); button.classList.toggle('button-accent', !state.placing);
  }

  function placeOrderAt(event, anchor) {
    if (!state.placing) return;
    const rect = byId('mapViewport').getBoundingClientRect();
    const x = anchor ? anchor.x : Math.max(0, Math.min(MAP_WIDTH, ((event.clientX - rect.left) / rect.width) * MAP_WIDTH));
    const y = anchor ? anchor.y : Math.max(0, Math.min(MAP_HEIGHT, ((event.clientY - rect.top) / rect.height) * MAP_HEIGHT));
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
      'Map: supplied Feyward WebP with SVG west-growth and east-defense planning overlays.',
      'Status: false Aurelian exposed as the plant of the manor; OC ring in Hjumpik’s custody; no confirmed deaths; orange heir has the tactical map.',
      'Next objective: plan the sanctuary push without losing the ring, Morel’s key, the exit, or the nonlethal advantage.',
      '',
      ...state.orders.map((order) => { const marker = markerOf(order.unitId); return `PROPOSED — ${marker.name}: ${labelize(order.type)}${order.note ? ` — ${order.note}` : ''} [map ${Math.round(order.x)}, ${Math.round(order.y)}]`; })
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
    stage.classList.add('show-grid', 'show-routes', 'show-threats', 'show-defenses');
    image.addEventListener('load', () => setMapAssetStatus('loaded', `WEBP VERIFIED · ${image.naturalWidth} × ${image.naturalHeight} · supplied Feyward map`));
    image.addEventListener('error', () => setMapAssetStatus('error', 'WEBP FAILED TO LOAD · check root feyward.webp'));
    if (image.complete) setMapAssetStatus(image.naturalWidth ? 'loaded' : 'error', image.naturalWidth ? `WEBP VERIFIED · ${image.naturalWidth} × ${image.naturalHeight} · supplied Feyward map` : 'WEBP FAILED TO LOAD · check root feyward.webp');

    byId('orderUnit').innerHTML = MARKERS.map((marker) => `<option value="${marker.id}">${esc(marker.name)} · ${esc(teamOf(marker.team).code)}</option>`).join('');
    renderRoomHits(); renderInventory(); renderOverlays(); renderMarkers(); renderRoster(); renderSelected(); renderOrders();

    document.querySelectorAll('.legend-item[data-filter]').forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
    document.querySelectorAll('.tool-button').forEach((button) => button.addEventListener('click', () => {
      const mode = button.dataset.toggle; const className = `show-${mode}`; stage.classList.toggle(className); button.classList.toggle('active', stage.classList.contains(className)); button.setAttribute('aria-pressed', String(stage.classList.contains(className)));
    }));
    byId('placeOrder').addEventListener('click', togglePlacement);
    byId('mapStage').addEventListener('click', (event) => { if (state.placing && !event.target.closest('.svg-marker')) placeOrderAt(event); });
    byId('clearOrders').addEventListener('click', () => { if (!state.orders.length || window.confirm('Clear every proposed order from this browser?')) { state.orders = []; saveOrders(); renderOrders(); } });
    byId('copyBriefing').addEventListener('click', copyBriefing);
    byId('printPlan').addEventListener('click', () => window.print());
  }

  init();
})();
