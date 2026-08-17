/*
 * Feyward War Room
 *
 * The supplied feyward.webp is the base map. This file adds only solid,
 * semi-transparent control zones and colored planning dots. The event record
 * remains canonical; all placements and counts below are planning assumptions.
 */
(function () {
  'use strict';

  const SOURCE_EVENT = {
    title: 'Chop Bros, the OC Soul Ring, and the Guard With No Name',
    href: '../../../../index.html#/article/feyward_chop_bros_soul_ring_and_the_guard_with_no_name'
  };
  const MAP_WIDTH = 8000;
  const MAP_HEIGHT = 8000;
  const STORAGE_KEY = 'waluipedia:feyward-war-room:orders:v4';

  const TEAMS = {
    party: { label: 'Player / party', code: 'GOLD', color: '#ffc90e' },
    plant: { label: 'Plant control', code: 'RED', color: '#ed1c24' },
    cutters: { label: 'Tree cutters', code: 'GREEN', color: '#22b14c' },
    friendly: { label: 'Friendly / aligned', code: 'BLUE', color: '#00a2e8' }
  };

  /* The user’s room corrections are applied here. The hit areas are deliberately
     broad planning sectors because the image is a battle map, not a blueprint. */
  const ROOMS = [
    { id: 'west-garden-court', name: 'West Garden / Fountain Court', x: 0, y: 0, w: 3150, h: 3650, control: 'plant', confidence: 'plant controlled', status: 'Plant controlled', detail: 'The west garden and fountain side are under plant control. This is where the visible roots and growth pressure begin.', source: 'Supplied map + Feyward garden / Maze-Pond records' },
    { id: 'north-central-hall', name: 'North Central Hall / Foyer', x: 2300, y: 700, w: 2900, h: 2650, control: 'plant', confidence: 'plant controlled', status: 'Plant controlled', detail: 'The broad north-central interior is treated as plant controlled. Seven friendly units are currently planned in the foyer, main room, and stairs.', source: 'Supplied map + latest session positioning' },
    { id: 'west-lower-archive', name: 'West Lower Archive / Library', x: 0, y: 3650, w: 2600, h: 2150, control: 'plant', confidence: 'plant controlled', status: 'Plant controlled', detail: 'The lower-west archive/library sector is controlled by the plant. The older filing describes Woodfellow, books, roots, and unstable flooring.', source: 'Supplied map + Overgrown Library record' },
    { id: 'contested', name: 'Contested', x: 2600, y: 2600, w: 2600, h: 3350, control: 'contested', confidence: 'contested', status: 'Contested ground', detail: 'The center is the meeting ground between plant-controlled west sectors and the friendly east. The central crossing, stairs, and broken routes make this the uncertain front.', source: 'Planning interpretation from the supplied map' },
    { id: 'main-hall-west', name: 'Main Hall West', x: 2150, y: 1500, w: 2500, h: 3000, control: 'plant', confidence: 'plant controlled', status: 'Plant controlled', detail: 'Renamed from the previous “Center Study / Lord’s Chamber” label. This is the west main hall sector, not a settled room title.', source: 'User correction + supplied map' },
    { id: 'south-gate', name: 'South Gate', x: 2200, y: 5750, w: 2800, h: 2250, control: 'plant', confidence: 'plant controlled', status: 'Plant controlled', detail: 'Renamed from the previous “South Gate / Midnight Gate Candidate” label. The gate and the route beyond it remain under plant pressure.', source: 'User correction + Midnight Gate carry-forward' },
    { id: 'east-defense-hall', name: 'East Defense Hall / Revel Side', x: 5000, y: 0, w: 3000, h: 3950, control: 'friendly', confidence: 'friendly / aligned', status: 'Player-aligned control', detail: 'The east/right hall is the main defense side. The Reveler area contains twenty-six friendly units and one Revel; most units are drunk but strong, and the wine is running thin.', source: 'User correction + supplied map + Revel record' },
    { id: 'right-hall-window', name: 'Right Hall Near Window', x: 5900, y: 450, w: 2100, h: 2050, control: 'friendly', confidence: 'friendly / aligned', status: 'Player-aligned control', detail: 'This is the current command position near the window: Hjumpik, the Guard With No Name, Waluigi, Toad Lee, and the Heir are represented as dots here.', source: 'User correction + latest Hjumpik filing' },
    { id: 'kitchen', name: 'Kitchen Area', x: 5000, y: 3650, w: 2500, h: 2050, control: 'friendly', confidence: 'friendly / aligned', status: 'Friendly kitchen garrison', detail: 'Nine friendly units occupy the kitchen. The kitchen door has been burst through by a vine; two friendly units defend outside it.', source: 'User correction + latest session details' },
    { id: 'south-east-defense', name: 'South-East Defense Rooms', x: 5000, y: 3950, w: 3000, h: 4050, control: 'friendly', confidence: 'friendly / aligned', status: 'Player-aligned control', detail: 'The lower-right rooms are a friendly/aligned defense cluster. Keep this fill solid and readable; individual room names can be corrected later.', source: 'User correction + supplied map' }
  ];

  const CORE = [
    { id: 'hjumpik', team: 'party', name: 'Hjumpik', role: 'Anvil / chief negotiator', state: 'ACTIVE · RIGHT HALL', x: 6710, y: 930, objective: 'Keep the OC soul ring and Morel’s key out of the plant’s reach while preserving the nonlethal advantage.', fact: 'Warhammer carrier; lifted Toad Lee for the successful twenty-five-foot Chop Bros corridor and climbed the exterior wall.' },
    { id: 'nameless-guard', team: 'friendly', name: 'The Guard With No Name', role: 'Defected house guard', state: 'COOPERATING · RIGHT HALL', x: 6890, y: 1030, objective: 'Guide the party toward the actual Lady and stop guarding fake things and fake people.', fact: 'The canonical latest filing does not give him a personal name. He lowered his swords and defected after Hjumpik negotiated instead of killing.' },
    { id: 'waluigi', team: 'party', name: 'Waluigi', role: 'Field archivist / escape cell', state: 'ACTIVE · RIGHT HALL', x: 7140, y: 1110, objective: 'Document custody and keep the retreat from becoming an avoidable casualty report.', fact: 'Used the Bob-omb to break the vine cage, caught the ring mid-skid, and transferred it to Hjumpik’s pocket.' },
    { id: 'toad-lee', team: 'party', name: 'Toad Lee', role: 'Diplomat / axe ace', state: 'ACTIVE · RIGHT HALL', x: 7010, y: 1270, objective: 'Keep an exit open and hold the garlic option for the moment it changes the negotiation.', fact: 'Carried the axe and volunteered the garlic grenade that made every vine in the parlor flinch.' },
    { id: 'orange-heir', team: 'friendly', name: 'The Heir', role: 'Local command / map owner', state: 'COMMANDING · RIGHT WINDOW', x: 7430, y: 820, objective: 'Translate the manor’s moving crisis into a map and direct the tree cutter divisions.', fact: 'The orange heir opened the window, brought the party to the map table, and commands the sixth and seventh Tree Cutter Divisions.' },
    { id: 'false-aurelian', team: 'plant', name: 'False Aurelian', role: 'Plant of the manor', state: 'UPSTAIRS · NOT RIGHT HALL', x: 7590, y: 250, objective: 'Protect the private sanctuary and recover what the party is carrying.', fact: 'Moved upstairs. The latest filing says she was last seen running toward a private sanctuary; she is not placed in the right hall near the window.' },
    { id: 'left-door-guard-a', team: 'friendly', name: 'Left-door guard A', role: 'Door guard', state: 'HOLDING LEFT DOOR', x: 5680, y: 1060, objective: 'Guard the door immediately left of the right hall.', fact: 'Part of the two-guard door detail supplied for this planning pass. The individual name is not established.' },
    { id: 'left-door-guard-b', team: 'friendly', name: 'Left-door guard B', role: 'Door guard', state: 'HOLDING LEFT DOOR', x: 5840, y: 1180, objective: 'Guard the door immediately left of the right hall.', fact: 'Part of the two-guard door detail supplied for this planning pass. The individual name is not established.' },
    { id: 'kitchen-sill-guard', team: 'friendly', name: 'The Kitchen-Sill Guard', role: 'House guard · name withheld', state: 'KITCHEN SIDE', x: 6120, y: 4660, objective: 'Hold the kitchen side after the vine breach and keep the window approach open.', fact: 'The latest event records this guard by role rather than a personal name. The Guard With No Name is a separate canonical entry.' }
  ];

  const GROUPS = [
    { id: 'revelers', team: 'friendly', name: 'Reveler area · 26 units', shortName: '26 Revelers', count: 26, x: 6870, y: 2450, spreadX: 650, spreadY: 850, role: 'Friendly area force', state: 'FRIENDLY · DRUNK / STRONG', objective: 'Hold the Reveler area while the wine supply runs thin.', fact: 'Twenty-six friendly units occupy the Reveler area. Most are drunk but strong; the wine is running thin.' },
    { id: 'the-revel', team: 'plant', name: 'The Revel', shortName: 'The Revel', count: 1, x: 6550, y: 3050, spreadX: 0, spreadY: 0, role: 'Supernatural occupant', state: 'OCCUPIES REVELER AREA', objective: 'Treat the Revel as a separate presence from the friendly units around it.', fact: 'One Revel occupies the area. Its relationship to the twenty-six friendly units is a tactical complication, not a normal unit count.' },
    { id: 'kitchen-units', team: 'friendly', name: 'Kitchen area · 9 units', shortName: '9 Kitchen Units', count: 9, x: 6550, y: 4700, spreadX: 600, spreadY: 500, role: 'Friendly kitchen garrison', state: 'FRIENDLY · DOOR BURST BY VINE', objective: 'Hold the kitchen after the vine burst through the door.', fact: 'Nine friendly units occupy the kitchen area. The door is burst through by a vine.' },
    { id: 'kitchen-outside', team: 'friendly', name: 'Kitchen exterior · 2 units', shortName: '2 Outside Kitchen', count: 2, x: 5480, y: 4600, spreadX: 220, spreadY: 180, role: 'Kitchen door defense', state: 'FRIENDLY · OUTSIDE KITCHEN', objective: 'Defend the kitchen from outside the burst door.', fact: 'A team of two friendly units is outside the kitchen defending the breached entrance.' },
    { id: 'foyer-seven', team: 'friendly', name: 'Foyer / main room / stairs · 7 units', shortName: '7 Foyer Units', count: 7, x: 3800, y: 2050, spreadX: 700, spreadY: 700, role: 'Friendly interior force', state: 'FRIENDLY · FOYER / STAIRS', objective: 'Hold the foyer, main room, and stairs against plant movement.', fact: 'Seven friendly units are planned in the foyer, main room, and stair area.' },
    { id: 'sixth-cutters', team: 'cutters', name: '6th Tree Cutter Division', shortName: '6th Tree Cutters', count: 6, x: 2750, y: 6700, spreadX: 700, spreadY: 500, role: 'Tree cutter pressure', state: 'ALIGNED · MOVING INWARD', objective: 'Push the plant line inward without closing the party’s exit.', fact: 'The Heir commands the sixth division; the window report says tree cutters are pushing the growth inward.' },
    { id: 'seventh-cutters', team: 'cutters', name: '7th Tree Cutter Division', shortName: '7th Tree Cutters', count: 7, x: 4050, y: 6900, spreadX: 750, spreadY: 500, role: 'Tree cutter pressure', state: 'ALIGNED · MOVING INWARD', objective: 'Maintain a pressure line and keep the central crossing usable.', fact: 'The Heir commands the sixth and seventh divisions; the filing does not settle their exact headcount beyond this planning allocation.' }
  ];

  const NODES = [
    { id: 'sitting-room', team: 'party', name: 'Sitting room / false Lady contact', role: 'Current session site', state: 'SOURCE SITE', x: 3500, y: 1550, objective: 'The contact opened here over cold tea.', fact: 'The latest session opened with the false Lady interviewing Hjumpik. This dot is a reference, not a new room label.' },
    { id: 'private-sanctuary', team: 'plant', name: 'Private sanctuary', role: 'Unresolved upstairs objective', state: 'UNKNOWN · UPSTAIRS', x: 7700, y: 260, objective: 'Find the sanctuary without treating its door or defenders as known.', fact: 'The Heir believed the false Aurelian was running toward a private sanctuary upstairs. The room and approach remain unknown.' },
    { id: 'heirs-window', team: 'friendly', name: 'Heir’s window', role: 'Current session endpoint', state: 'SOURCE SITE', x: 7660, y: 1120, objective: 'Hold the window approach and keep the party at the map table.', fact: 'The party climbed the exterior wall, reached the warm window, and entered the Heir’s command conversation.' }
  ];

  const byId = (id) => document.getElementById(id);
  const teamOf = (team) => TEAMS[team] || TEAMS.friendly;
  const coreOf = (id) => CORE.find((item) => item.id === id);
  const groupOf = (id) => GROUPS.find((item) => item.id === id);
  const roomOf = (id) => ROOMS.find((room) => room.id === id);
  const nodeOf = (id) => NODES.find((node) => node.id === id);
  const esc = (value) => String(value == null ? '' : value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  const labelize = (value) => String(value).replace(/(^|[-_])([a-z])/g, (_, start, letter) => start + letter.toUpperCase()).replace(/[-_]/g, ' ');

  function groupDots(group) {
    const cols = Math.ceil(Math.sqrt(group.count));
    const rows = Math.ceil(group.count / cols);
    const stepX = group.count === 1 ? 0 : group.spreadX / Math.max(cols - 1, 1);
    const stepY = group.count === 1 ? 0 : group.spreadY / Math.max(rows - 1, 1);
    return Array.from({ length: group.count }, (_, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      return { id: `${group.id}-${index + 1}`, type: 'group', groupId: group.id, team: group.team, x: group.x + (col - (cols - 1) / 2) * stepX, y: group.y + (row - (rows - 1) / 2) * stepY, radius: group.count === 1 ? 88 : 42 };
    });
  }

  const DOTS = [
    ...CORE.map((item) => ({ ...item, type: 'core', radius: 82 })),
    ...NODES.map((item) => ({ ...item, type: 'node', radius: 72 })),
    ...GROUPS.flatMap(groupDots)
  ];
  const orderables = [...CORE, ...GROUPS];
  const dotOf = (id) => DOTS.find((dot) => dot.id === id);
  const commandOf = (id) => orderables.find((item) => item.id === id);
  const state = { filter: 'all', placing: false, selected: { type: 'room', id: 'north-central-hall' }, orders: loadOrders() };

  function loadOrders() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(parsed) ? parsed.filter((order) => order && commandOf(order.unitId) && Number.isFinite(Number(order.x)) && Number.isFinite(Number(order.y))) : [];
    } catch (error) { return []; }
  }

  function saveOrders() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.orders)); } catch (error) { /* local-only enhancement */ } }

  function setMapAssetStatus(kind, text) {
    const status = byId('mapAssetStatus'); if (!status) return;
    status.className = `map-asset-status ${kind}`;
    status.innerHTML = `<span class="map-status-dot"></span>${esc(text)}`;
  }

  function renderRoomHits() {
    byId('roomHitLayer').innerHTML = ROOMS.map((room) => {
      const selected = state.selected.type === 'room' && state.selected.id === room.id;
      return `<button class="room-hit room-hit-${room.control}${selected ? ' selected' : ''}" style="left:${room.x / MAP_WIDTH * 100}%;top:${room.y / MAP_HEIGHT * 100}%;width:${room.w / MAP_WIDTH * 100}%;height:${room.h / MAP_HEIGHT * 100}%" data-room-id="${room.id}" type="button" aria-label="Open ${esc(room.name)} sector record"><span>${esc(room.name)}</span></button>`;
    }).join('');
    byId('roomCount').textContent = ROOMS.length;
    byId('roomHitLayer').querySelectorAll('.room-hit').forEach((button) => button.addEventListener('click', (event) => {
      if (state.placing) return;
      event.stopPropagation(); selectRoom(button.dataset.roomId);
    }));
  }

  function renderInventory() {
    byId('roomInventory').innerHTML = ROOMS.map((room) => `<button class="room-card room-card-${room.control}${state.selected.type === 'room' && state.selected.id === room.id ? ' selected' : ''}" data-room-id="${room.id}" type="button"><span class="room-card-top"><b>${esc(room.name)}</b><span class="confidence-badge">${esc(room.confidence)}</span></span><span class="room-card-status">${esc(room.status)}</span><span class="room-card-detail">${esc(room.detail)}</span></button>`).join('');
    byId('roomInventory').querySelectorAll('.room-card').forEach((button) => button.addEventListener('click', () => selectRoom(button.dataset.roomId)));
  }

  function zoneMarkup() {
    const plant = ROOMS.filter((room) => room.control === 'plant').map((room) => `<rect class="control-zone zone-plant" x="${room.x}" y="${room.y}" width="${room.w}" height="${room.h}"/>`).join('');
    const contested = ROOMS.filter((room) => room.control === 'contested').map((room) => `<rect class="control-zone zone-contested" x="${room.x}" y="${room.y}" width="${room.w}" height="${room.h}"/>`).join('');
    return `<rect class="control-zone zone-plant-base" x="0" y="0" width="8000" height="8000"/>${plant}${contested}`;
  }

  function friendlyMarkup() {
    const friendly = ROOMS.filter((room) => room.control === 'friendly').map((room) => `<rect class="control-zone zone-friendly" x="${room.x}" y="${room.y}" width="${room.w}" height="${room.h}"/>`).join('');
    return friendly;
  }

  function markerMarkup(dot, index) {
    const team = teamOf(dot.team);
    const hidden = state.filter !== 'all' && dot.team !== state.filter;
    const selected = (state.selected.type === 'dot' && state.selected.id === dot.id) || (dot.groupId && state.selected.type === 'group' && state.selected.id === dot.groupId);
    return `<g class="svg-dot${hidden ? ' is-hidden' : ''}${selected ? ' selected' : ''}" data-dot-id="${dot.id}" transform="translate(${dot.x} ${dot.y})" tabindex="0" role="button" aria-label="${esc(dot.name || (groupOf(dot.groupId) || {}).name || dot.id)} · ${esc(team.label)}" style="--dot-color:${team.color}"><title>${esc(dot.name || (groupOf(dot.groupId) || {}).name || dot.id)}</title><circle class="dot-halo" r="${dot.radius * 1.65}"/><circle class="dot-core" r="${dot.radius}" fill="${team.color}"/><circle class="dot-center" r="${Math.max(12, dot.radius * .22)}"/><text class="dot-label" y="-${dot.radius * 1.55}">${esc(dot.name || (groupOf(dot.groupId) || {}).shortName || dot.id)}</text>${dot.type === 'group' ? '' : `<text class="dot-index" y="${Math.max(12, dot.radius * .25)}">${index + 1}</text>`}</g>`;
  }

  function renderDots() {
    const visible = DOTS.filter((dot) => state.filter === 'all' || dot.team === state.filter);
    byId('markerLayer').innerHTML = visible.map(markerMarkup).join('');
    byId('markerCount').textContent = visible.length;
    byId('markerLayer').querySelectorAll('.svg-dot').forEach((element) => {
      const dot = dotOf(element.dataset.dotId);
      element.addEventListener('click', (event) => { event.stopPropagation(); if (state.placing) placeOrderAt(event, commandOf(dot.groupId || dot.id)); else selectDot(dot); });
      element.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); if (state.placing) placeOrderAt(event, commandOf(dot.groupId || dot.id)); else selectDot(dot); } });
    });
  }

  function renderOrderTargets() {
    byId('orderTargetLayer').innerHTML = state.orders.map((order, index) => `<g class="order-target" transform="translate(${Number(order.x).toFixed(2)} ${Number(order.y).toFixed(2)})"><circle r="105"/><text y="28">${index + 1}</text></g>`).join('');
  }

  function renderZones() {
    byId('growthLayer').innerHTML = zoneMarkup();
    byId('defenseLayer').innerHTML = friendlyMarkup();
    renderOrderTargets();
  }

  function rosterEntries() { return [...CORE, ...GROUPS]; }

  function renderRoster() {
    byId('roster').innerHTML = rosterEntries().map((item) => {
      const team = teamOf(item.team); const dim = state.filter !== 'all' && item.team !== state.filter;
      return `<article class="roster-card${dim ? ' is-filtered' : ''}" style="--team-color:${team.color}" data-command-id="${item.id}" tabindex="0" role="button" aria-label="Select ${esc(item.name)}"><span class="unit-state">${esc(item.state)}</span><span class="unit-role">${esc(team.code)} · ${esc(item.role)}</span><h3>${esc(item.name)}</h3><p>${esc(item.objective)}</p></article>`;
    }).join('');
    byId('roster').querySelectorAll('.roster-card').forEach((card) => {
      card.addEventListener('click', () => selectCommand(card.dataset.commandId));
      card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectCommand(card.dataset.commandId); } });
    });
  }

  function renderSelected() {
    const details = byId('selectedDetails'); const code = byId('selectedCode');
    if (state.selected.type === 'room') {
      const room = roomOf(state.selected.id); if (!room) return;
      code.textContent = `ZONE · ${room.id.toUpperCase()}`;
      details.innerHTML = `<h3>${esc(room.name)}</h3><span class="detail-role room-role">${esc(room.status)}</span><p>${esc(room.detail)}</p><div class="detail-facts"><div class="detail-fact"><b>Control</b><span>${esc(room.confidence)}</span></div><div class="detail-fact"><b>Source</b><span>${esc(room.source)}</span></div><div class="detail-fact"><b>Boundary</b><span>Solid color is a planning zone, not a settled floor-plan claim.</span></div></div>`;
    } else if (state.selected.type === 'dot') {
      const dot = dotOf(state.selected.id); if (!dot) return;
      const item = dot.groupId ? groupOf(dot.groupId) : dot; const team = teamOf(item.team);
      code.textContent = `${team.code} · DOT`;
      details.innerHTML = `<h3>${esc(item.name)}</h3><span class="detail-role" style="color:${team.color}">${esc(team.label)} · ${esc(item.role)}</span><p>${esc(item.fact)}</p><div class="detail-facts"><div class="detail-fact"><b>Status</b><span>${esc(item.state)}</span></div><div class="detail-fact"><b>Count</b><span>${dot.groupId ? item.count : 'Named position'}</span></div><div class="detail-fact"><b>Source</b><span><a href="${SOURCE_EVENT.href}">Open filing →</a></span></div></div>`;
    } else {
      const item = commandOf(state.selected.id); if (!item) return;
      const team = teamOf(item.team); code.textContent = `${team.code} · GROUP`;
      details.innerHTML = `<h3>${esc(item.name)}</h3><span class="detail-role" style="color:${team.color}">${esc(team.label)} · ${esc(item.role)}</span><p>${esc(item.fact)}</p><div class="detail-facts"><div class="detail-fact"><b>Status</b><span>${esc(item.state)}</span></div><div class="detail-fact"><b>Count</b><span>${item.count || 'Named position'}</span></div><div class="detail-fact"><b>Source</b><span><a href="${SOURCE_EVENT.href}">Open filing →</a></span></div></div>`;
    }
  }

  function selectRoom(id) { if (!roomOf(id)) return; state.selected = { type: 'room', id }; renderRoomHits(); renderInventory(); renderDots(); renderSelected(); }
  function selectDot(dot) { state.selected = { type: 'dot', id: dot.id }; renderRoomHits(); renderInventory(); renderDots(); renderSelected(); }
  function selectCommand(id) { if (!commandOf(id)) return; const core = coreOf(id); if (core) return selectDot(core); state.selected = { type: 'group', id }; renderRoomHits(); renderInventory(); renderDots(); renderSelected(); }

  function renderOrders() {
    const list = byId('ordersList'); byId('orderCount').textContent = state.orders.length;
    if (!state.orders.length) list.innerHTML = '<p class="empty-state">No proposed orders yet. Choose a unit, choose an order, then click the supplied map. Orders appear as numbered dots only.</p>';
    else list.innerHTML = state.orders.map((order, index) => {
      const item = commandOf(order.unitId); const team = teamOf(item.team);
      return `<div class="order-row"><span class="order-line" style="background:${team.color};box-shadow:0 0 10px ${team.color}"></span><div><b>${esc(item.name)} · ${esc(labelize(order.type))}</b><span class="order-meta">${esc(team.code)} · target ${Math.round(order.x)}, ${Math.round(order.y)} · proposed dot ${index + 1}</span>${order.note ? `<p>${esc(order.note)}</p>` : ''}</div><button class="remove-order" type="button" data-order-index="${index}" aria-label="Remove proposed order">×</button></div>`;
    }).join('');
    list.querySelectorAll('.remove-order').forEach((button) => button.addEventListener('click', () => { state.orders.splice(Number(button.dataset.orderIndex), 1); saveOrders(); renderOrders(); }));
    renderOrderTargets();
  }

  function togglePlacement() {
    state.placing = !state.placing; const stage = byId('mapStage'); const button = byId('placeOrder'); const hint = byId('mapPlacementHint');
    stage.classList.toggle('placing', state.placing); hint.hidden = !state.placing; button.textContent = state.placing ? 'Cancel placement' : '＋ Place a dot';
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
    renderDots(); renderRoster();
  }

  function copyBriefing() {
    const lines = [
      'FEYWARD WAR ROOM — 23–24 Harvestide, 1040 BF (Feyward-relative)',
      'Source: ' + SOURCE_EVENT.title,
      'Map: supplied feyward.webp with solid translucent control zones and planning dots.',
      'Control: plant holds the west/remaining map; friendly/aligned forces hold the east defense rooms; center is contested.',
      'Forces: 26 Revelers + 1 Revel; 9 kitchen units; 2 outside-kitchen defenders; 7 foyer/main-room/stairs; sixth and seventh tree cutters.',
      'Named positions: Hjumpik, Guard With No Name, Waluigi, Toad Lee, the Heir, and False Aurelian upstairs.',
      '',
      ...state.orders.map((order) => { const item = commandOf(order.unitId); return `PROPOSED — ${item.name}: ${labelize(order.type)}${order.note ? ` — ${order.note}` : ''} [map ${Math.round(order.x)}, ${Math.round(order.y)}]`; })
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
    stage.classList.add('show-threats', 'show-defenses');
    image.addEventListener('load', () => setMapAssetStatus('loaded', `WEBP VERIFIED · ${image.naturalWidth} × ${image.naturalHeight} · supplied Feyward map`));
    image.addEventListener('error', () => setMapAssetStatus('error', 'WEBP FAILED TO LOAD · check root feyward.webp'));
    if (image.complete) setMapAssetStatus(image.naturalWidth ? 'loaded' : 'error', image.naturalWidth ? `WEBP VERIFIED · ${image.naturalWidth} × ${image.naturalHeight} · supplied Feyward map` : 'WEBP FAILED TO LOAD · check root feyward.webp');

    byId('orderUnit').innerHTML = orderables.map((item) => `<option value="${item.id}">${esc(item.name)} · ${esc(teamOf(item.team).code)}</option>`).join('');
    renderRoomHits(); renderInventory(); renderZones(); renderDots(); renderRoster(); renderSelected(); renderOrders();

    document.querySelectorAll('.legend-item[data-filter]').forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
    document.querySelectorAll('.tool-button').forEach((button) => button.addEventListener('click', () => {
      const className = `show-${button.dataset.toggle}`; stage.classList.toggle(className); button.classList.toggle('active', stage.classList.contains(className)); button.setAttribute('aria-pressed', String(stage.classList.contains(className)));
    }));
    byId('placeOrder').addEventListener('click', togglePlacement);
    byId('mapStage').addEventListener('click', (event) => { if (state.placing && !event.target.closest('.svg-dot')) placeOrderAt(event); });
    byId('clearOrders').addEventListener('click', () => { if (!state.orders.length || window.confirm('Clear every proposed order from this browser?')) { state.orders = []; saveOrders(); renderOrders(); } });
    byId('copyBriefing').addEventListener('click', copyBriefing);
    byId('printPlan').addEventListener('click', () => window.print());
  }

  init();
})();
