// roster-menu.js
// The Cohort Menu: every named toad from Toadslist.xlsx as a selectable card,
// with portraits from the user's own art or sliced from the AI 6x6 sprite
// sheets. Rendered into the Roster tab of liberated-toads-system.html.

import {
    TOADSLIST_ROSTER,
    AFFILIATION_META,
    CORE_DETAIL,
    SHEET_LAYOUT,
    PORTRAIT_BASE
} from '../../../data/liberated-toads/toadslist-data.js';

// ---- portrait rendering ---------------------------------------------------

export function toadPortraitStyle(toad, size) {
    const p = toad.portrait;
    if (p.kind === 'file') {
        return `background-image:url('${PORTRAIT_BASE}${p.file}');background-size:contain;background-position:center;background-repeat:no-repeat`;
    }
    const cols = SHEET_LAYOUT.cols;
    const col = p.cell % cols;
    const row = Math.floor(p.cell / cols);
    const x = (100 / (cols - 1)) * col;
    const y = (100 / (SHEET_LAYOUT.rows - 1)) * row;
    return `background-image:url('${PORTRAIT_BASE}sheet_${p.sheet}.png');` +
           `background-size:${cols * 100}% ${SHEET_LAYOUT.rows * 100}%;` +
           `background-position:${x}% ${y}%`;
}

function portraitMarkup(toad) {
    return `<div class="toad-portrait ${toad.portrait.kind}" style="${toadPortraitStyle(toad)}" role="img" aria-label="${toad.name}"></div>`;
}

// ---- enrichment -----------------------------------------------------------

function enrich(toad) {
    const meta = AFFILIATION_META[toad.affiliation] || { tierLabel: 'Unaffiliated', note: '' };
    const detail = CORE_DETAIL[toad.id] || null;
    const isElectorate = meta.tier === 6 || meta.tier === 7;
    return { ...toad, meta, detail, isElectorate };
}

export function enrichRoster() {
    return TOADSLIST_ROSTER.map(enrich);
}

// ---- filters --------------------------------------------------------------

const state = {
    affiliation: 'all',
    seen: 'all',
    search: '',
    sort: 'num'
};

let enriched = [];

export function renderCohortMenu() {
    enriched = enrichRoster();
    renderAffiliationChips();
    renderCohortGrid();
    attachMenuListeners();
}

function renderAffiliationChips() {
    const chipBox = document.getElementById('affiliation-chips');
    if (!chipBox) return;
    const counts = {};
    enriched.forEach(t => { counts[t.affiliation] = (counts[t.affiliation] || 0) + 1; });
    const order = Object.entries(AFFILIATION_META)
        .filter(([key]) => counts[key])
        .sort((a, b) => {
            const ta = a[1].tier ?? 99, tb = b[1].tier ?? 99;
            if (ta !== tb) return ta - tb;
            return counts[b[0]] - counts[a[0]];
        });
    chipBox.innerHTML = `
        <button class="aff-chip ${state.affiliation === 'all' ? 'active' : ''}" data-aff="all">
            All <span class="aff-count">${enriched.length}</span>
        </button>
        ${order.map(([key, meta]) => `
            <button class="aff-chip ${state.affiliation === key ? 'active' : ''}" data-aff="${key.replace(/"/g, '&quot;')}"
                    style="--aff-color:${meta.color}" title="${meta.tierLabel} — ${meta.note}">
                ${key} <span class="aff-count">${counts[key]}</span>
            </button>
        `).join('')}
    `;
}

function applyFilters() {
    let list = [...enriched];
    if (state.affiliation !== 'all') list = list.filter(t => t.affiliation === state.affiliation);
    if (state.seen === 'seen') list = list.filter(t => t.seen);
    if (state.seen === 'unseen') list = list.filter(t => !t.seen);
    if (state.search) {
        const q = state.search.toLowerCase();
        list = list.filter(t =>
            t.name.toLowerCase().includes(q) ||
            t.affiliation.toLowerCase().includes(q) ||
            (t.weapon || '').toLowerCase().includes(q)
        );
    }
    list.sort((a, b) => {
        switch (state.sort) {
            case 'name': return a.name.localeCompare(b.name);
            case 'affiliation': return a.affiliation.localeCompare(b.affiliation) || a.num - b.num;
            case 'weapon': return (a.weapon || '').localeCompare(b.weapon || '') || a.num - b.num;
            case 'num':
            default: return a.num - b.num;
        }
    });
    return list;
}

function renderCohortGrid() {
    const grid = document.getElementById('crew-grid');
    if (!grid) return;
    const list = applyFilters();
    const countEl = document.getElementById('roster-count');
    if (countEl) countEl.textContent = `${list.length} of ${enriched.length} toads`;

    if (!list.length) {
        grid.innerHTML = `<div class="roster-empty">No toads match that filter.</div>`;
        return;
    }

    grid.innerHTML = list.map(t => `
        <div class="toad-card ${t.seen ? '' : 'unseen'}" data-id="${t.id}" style="--aff-color:${t.meta.color}">
            ${portraitMarkup(t)}
            <div class="toad-card-body">
                <div class="toad-card-top">
                    <span class="toad-num">#${String(t.num).padStart(2, '0')}</span>
                    ${t.seen
                        ? '<span class="seen-badge seen" title="Met by the players">SEEN</span>'
                        : '<span class="seen-badge unseen" title="Not yet met by the players">UNSEEN</span>'}
                </div>
                <div class="toad-name">${t.name}</div>
                <div class="toad-aff">${t.affiliation}</div>
                <div class="toad-weapon" title="Weapon">⚔ ${t.weapon}</div>
                ${t.isElectorate ? '<div class="toad-electorate" title="Tiers 6+7 elect the Speaker and vote armies into being">🗳 Electorate</div>' : ''}
            </div>
        </div>
    `).join('');
}

// ---- detail drawer --------------------------------------------------------

function openDetail(t) {
    const panel = document.getElementById('member-detail-panel');
    if (!panel) return;
    document.getElementById('detail-portrait').innerHTML = portraitMarkup(t);
    document.getElementById('detail-name').textContent = t.name;
    document.getElementById('detail-title').innerHTML = t.detail
        ? t.detail.title
        : `<span class="aff-dot" style="background:${t.meta.color}"></span>${t.affiliation}`;

    document.getElementById('detail-level').textContent = `#${String(t.num).padStart(2, '0')} of 75`;
    document.getElementById('detail-weapon').textContent = t.weapon;
    const badge = document.getElementById('detail-status-badge');
    badge.textContent = t.seen ? 'Seen by players' : 'Not yet met';
    badge.className = `detail-status-badge ${t.seen ? 'active' : 'pending'}`;

    document.getElementById('detail-tab-stats').innerHTML = detailFacts(t);
    document.getElementById('detail-tab-skills').innerHTML = detailLore(t);
    document.getElementById('detail-tab-log').innerHTML = detailStructure(t);

    panel.classList.remove('hidden');
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function detailFacts(t) {
    const rows = [
        ['Roster number', `#${String(t.num).padStart(2, '0')}`],
        ['Affiliation', `${t.affiliation}`],
        ['Structure tier', t.meta.tier
            ? `Tier ${t.meta.tier} — ${t.meta.tierLabel}`
            : 'Outside the seven-position structure'],
        ['Weapon', t.weapon],
        ['Seen by players', t.seen ? 'Yes' : 'Not yet'],
        ['Votes in the electorate', t.isElectorate
            ? 'Yes — tiers 6+7 elect the Speaker and vote armies into being'
            : 'No']
    ];
    if (t.meta.research && t.meta.research !== 'n/a') rows.push(['Research thread', t.meta.research]);
    return `
        <div class="detail-facts">
            ${rows.map(([k, v]) => `<div class="fact-row"><span class="fact-key">${k}</span><span class="fact-val">${v}</span></div>`).join('')}
        </div>
        <p class="aff-note">${t.meta.note}</p>
    `;
}

function detailLore(t) {
    if (t.detail) {
        return `
            <div class="lore-block">
                <div class="lore-role">${t.detail.roleNote}</div>
                <p>${t.detail.lore}</p>
            </div>
        `;
    }
    const sameBloc = enriched.filter(x => x.affiliation === t.affiliation && x.id !== t.id).map(x => x.name);
    return `
        <div class="lore-block">
            <p><strong>${t.name}</strong> carries ${/^(a|e|i|o|u)/i.test(t.weapon) ? 'an' : 'a'} <strong>${t.weapon.toLowerCase()}</strong> in the ${t.affiliation} bloc.</p>
            ${sameBloc.length ? `<p>Bloc mates: ${sameBloc.join(', ')}.</p>` : '<p>This toad stands alone in the bloc.</p>'}
            <p class="muted">No deep-dive record exists for this toad yet — the roster intake lists name, bloc, weapon and whether the players have met them.</p>
        </div>
    `;
}

function detailStructure(t) {
    const holderFor = {
        1: ['20_speaker_rivers', 'Speaker Rivers sits in Position 1 — elected by tiers 6 and 7.'],
        2: ['13_speaker_l', 'Speaker L holds Position 2 — the ousted rival speaker.']
    };
    const lines = [];
    if (t.meta.tier) {
        lines.push(`<div class="struct-row">Serves in <strong>Tier ${t.meta.tier} — ${t.meta.tierLabel}</strong>.</div>`);
    } else {
        lines.push(`<div class="struct-row">Sits <strong>outside</strong> the seven-position leadership structure.</div>`);
    }
    Object.entries(holderFor).forEach(([pos, [id, note]]) => {
        if (t.id === id) lines.push(`<div class="struct-row">${note}</div>`);
    });
    if (t.id === '30_captain_fernback') {
        lines.push(`<div class="struct-row">Commands the Pond Patrol — the army voted into being by tiers 6 and 7; its leaders are chosen by the Deputies (Tier 4).</div>`);
    }
    if (t.affiliation === 'Spore 5') {
        lines.push(`<div class="struct-row">The Spore 5 stands apart: it holds army standing but was never chosen — <strong>rogue</strong>.</div>`);
    }
    lines.push(`<div class="struct-row muted">Voting flow: tiers 6+7 elect the Speaker (1) and vote armies (5) into being · the Speaker appoints 3 and 4 · 3 appoints 4, who chooses the leaders of 5.</div>`);
    return `<div class="struct-block">${lines.join('')}</div>`;
}

// ---- listeners ------------------------------------------------------------

function attachMenuListeners() {
    const grid = document.getElementById('crew-grid');
    const search = document.getElementById('roster-search');
    const sortSel = document.getElementById('sort-select');
    const chipBox = document.getElementById('affiliation-chips');
    const seenBox = document.getElementById('seen-filter');

    if (grid && !grid.dataset.wired) {
        grid.dataset.wired = '1';
        grid.addEventListener('click', (e) => {
            const card = e.target.closest('.toad-card');
            if (!card) return;
            grid.querySelectorAll('.toad-card.selected').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            const toad = enriched.find(t => t.id === card.dataset.id);
            if (toad) openDetail(toad);
        });
    }
    if (chipBox && !chipBox.dataset.wired) {
        chipBox.dataset.wired = '1';
        chipBox.addEventListener('click', (e) => {
            const chip = e.target.closest('.aff-chip');
            if (!chip) return;
            state.affiliation = chip.dataset.aff;
            renderAffiliationChips();
            renderCohortGrid();
        });
    }
    if (seenBox && !seenBox.dataset.wired) {
        seenBox.dataset.wired = '1';
        seenBox.addEventListener('click', (e) => {
            const btn = e.target.closest('.seen-filter-btn');
            if (!btn) return;
            state.seen = btn.dataset.seen;
            seenBox.querySelectorAll('.seen-filter-btn').forEach(b => b.classList.toggle('active', b === btn));
            renderCohortGrid();
        });
    }
    if (search && !search.dataset.wired) {
        search.dataset.wired = '1';
        search.addEventListener('input', () => {
            state.search = search.value.trim();
            renderCohortGrid();
        });
    }
    if (sortSel && !sortSel.dataset.wired) {
        sortSel.dataset.wired = '1';
        sortSel.addEventListener('change', () => {
            state.sort = sortSel.value;
            renderCohortGrid();
        });
    }

    const closeBtn = document.querySelector('.close-detail-btn');
    if (closeBtn && !closeBtn.dataset.wired) {
        closeBtn.dataset.wired = '1';
        closeBtn.addEventListener('click', () => {
            document.getElementById('member-detail-panel').classList.add('hidden');
        });
    }
    document.querySelectorAll('.detail-tab').forEach(tab => {
        if (tab.dataset.wired) return;
        tab.dataset.wired = '1';
        tab.addEventListener('click', () => {
            document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.detail-tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const target = document.getElementById(`tab-${tab.dataset.tab}`);
            if (target) target.classList.add('active');
        });
    });
}
