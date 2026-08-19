// roster-menu.js
// Cohort image visualizer — every named toad is a real <img> with its own file.

import {
    TOADSLIST_ROSTER,
    AFFILIATION_META,
    CORE_DETAIL,
    PORTRAIT_BASE
} from '../../../data/liberated-toads/toadslist-data.js';

export function portraitSrc(toad) {
    const file = (toad.portrait && toad.portrait.file) || `toad_${toad.id}.png`;
    return `${PORTRAIT_BASE}${file}`;
}

function escapeHtml(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
}

function portraitImg(toad, extraClass = '') {
    const name = toad.aka ? `${toad.name} (${toad.aka})` : toad.name;
    return `<img class="toad-img ${extraClass}" src="${portraitSrc(toad)}" alt="${escapeHtml(name)}" loading="lazy" width="512" height="512">`;
}

function enrich(toad) {
    const meta = AFFILIATION_META[toad.affiliation] || { tierLabel: 'Unaffiliated', note: '', color: '#8d99ae' };
    const detail = CORE_DETAIL[toad.id] || null;
    const isElectorate = meta.tier === 6 || meta.tier === 7;
    return { ...toad, meta, detail, isElectorate };
}

export function enrichRoster() {
    return TOADSLIST_ROSTER.map(enrich);
}

const state = {
    affiliation: 'all',
    seen: 'all',
    search: '',
    sort: 'num',
    view: 'gallery',
    viewerId: null
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
                    style="--aff-color:${meta.color}" title="${escapeHtml(meta.tierLabel)} — ${escapeHtml(meta.note)}">
                ${escapeHtml(key)} <span class="aff-count">${counts[key]}</span>
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
            (t.aka || '').toLowerCase().includes(q) ||
            t.affiliation.toLowerCase().includes(q) ||
            (t.weapon || '').toLowerCase().includes(q)
        );
    }
    list.sort((a, b) => {
        switch (state.sort) {
            case 'name': return a.name.localeCompare(b.name);
            case 'affiliation': return a.affiliation.localeCompare(b.affiliation) || a.num - b.num;
            case 'weapon': return (a.weapon || '').localeCompare(b.weapon || '') || a.num - b.num;
            default: return a.num - b.num;
        }
    });
    return list;
}

function tile(t) {
    const label = t.aka ? `${escapeHtml(t.name)} <em>${escapeHtml(t.aka)}</em>` : escapeHtml(t.name);
    return `
        <button type="button" class="viz-tile ${t.seen ? 'seen' : 'unseen'}" data-id="${t.id}" style="--aff-color:${t.meta.color}">
            ${portraitImg(t)}
            <span class="viz-caption">
                <span class="viz-num">#${String(t.num).padStart(2, '0')}</span>
                <span class="viz-name">${label}</span>
                <span class="viz-weapon">${escapeHtml(t.weapon)}</span>${t.cap?`<span class="viz-cap">${escapeHtml(t.cap)} cap</span>`:''}
            </span>
        </button>
    `;
}

function renderCohortGrid() {
    const grid = document.getElementById('crew-grid');
    if (!grid) return;
    const list = applyFilters();
    const countEl = document.getElementById('roster-count');
    if (countEl) countEl.textContent = `${list.length} of ${enriched.filter(x=>x.name!=='???').length} named toads`;

    grid.className = `crew-grid viz-grid view-${state.view}`;

    if (!list.length) {
        grid.innerHTML = `<div class="roster-empty">No toads match that filter.</div>`;
        return;
    }

    if (state.view === 'blocs') {
        const groups = new Map();
        list.forEach(t => {
            if (!groups.has(t.affiliation)) groups.set(t.affiliation, []);
            groups.get(t.affiliation).push(t);
        });
        grid.innerHTML = [...groups.entries()].map(([aff, members]) => {
            const meta = AFFILIATION_META[aff] || { color: '#8d99ae' };
            return `
                <section class="viz-bloc" style="--aff-color:${meta.color}">
                    <header class="viz-bloc-head">
                        <h3>${escapeHtml(aff)}</h3>
                        <span>${members.length}</span>
                    </header>
                    <div class="viz-bloc-strip">
                        ${members.map(tile).join('')}
                    </div>
                </section>
            `;
        }).join('');
        return;
    }

    grid.innerHTML = list.map(tile).join('');
}

function visibleList() {
    return applyFilters();
}

function openViewer(id) {
    const list = visibleList();
    const idx = list.findIndex(t => t.id === id);
    const t = idx >= 0 ? list[idx] : enriched.find(x => x.id === id);
    if (!t) return;
    state.viewerId = t.id;

    const viewer = document.getElementById('toad-viewer');
    if (!viewer) return;
    const label = t.aka ? `${t.name} (${t.aka})` : t.name;
    viewer.innerHTML = `
        <div class="viz-viewer-frame" style="--aff-color:${t.meta.color}">
            <button type="button" class="viz-nav prev" data-nav="-1" aria-label="Previous toad">‹</button>
            <figure class="viz-hero">
                ${portraitImg(t, 'toad-img-hero')}
                <figcaption>
                    <div class="viz-hero-name">${escapeHtml(label)}</div>
                    <div class="viz-hero-meta">
                        <span>#${String(t.num).padStart(2, '0')} of 75</span>
                        <span>${escapeHtml(t.affiliation)}</span>
                        <span>${escapeHtml(t.weapon)}</span>
                        <span>${t.seen ? 'Seen' : 'Not yet met'}</span>
                    </div>
                    ${t.detail ? `<p class="viz-hero-lore">${escapeHtml(t.detail.roleNote)}</p>` : ''}
                </figcaption>
            </figure>
            <button type="button" class="viz-nav next" data-nav="1" aria-label="Next toad">›</button>
            <button type="button" class="viz-close" data-close="1" aria-label="Close">✕</button>
        </div>
    `;
    viewer.classList.remove('hidden');
    viewer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('viewer-open');

    const panel = document.getElementById('member-detail-panel');
    if (panel) {
        document.getElementById('detail-portrait').innerHTML = portraitImg(t);
        document.getElementById('detail-name').textContent = label;
        document.getElementById('detail-title').textContent = t.affiliation;
        document.getElementById('detail-level').textContent = `#${String(t.num).padStart(2, '0')} of 75`;
        document.getElementById('detail-weapon').textContent = t.weapon;
        const badge = document.getElementById('detail-status-badge');
        badge.textContent = t.seen ? 'Seen by players' : 'Not yet met';
        badge.className = `detail-status-badge ${t.seen ? 'active' : 'pending'}`;
        document.getElementById('detail-tab-stats').innerHTML = detailFacts(t);
        document.getElementById('detail-tab-skills').innerHTML = detailLore(t);
        document.getElementById('detail-tab-log').innerHTML = detailStructure(t);
        panel.classList.remove('hidden');
    }
}

function stepViewer(dir) {
    const list = visibleList();
    if (!list.length) return;
    let idx = list.findIndex(t => t.id === state.viewerId);
    if (idx < 0) idx = 0;
    idx = (idx + dir + list.length) % list.length;
    openViewer(list[idx].id);
}

function closeViewer() {
    const viewer = document.getElementById('toad-viewer');
    if (viewer) {
        viewer.classList.add('hidden');
        viewer.setAttribute('aria-hidden', 'true');
        viewer.innerHTML = '';
    }
    document.body.classList.remove('viewer-open');
    state.viewerId = null;
}

function detailFacts(t) {
    const rows = [
        ['Roster number', `#${String(t.num).padStart(2, '0')}`],
        ['Name', t.aka ? `${t.name} (${t.aka})` : t.name],
        ['Affiliation', t.affiliation],
        ['Structure tier', t.meta.tier ? `Tier ${t.meta.tier} — ${t.meta.tierLabel}` : 'Outside the seven-position structure'],
        ['Weapon', t.weapon],
        ['Portrait file', (t.portrait && t.portrait.file) || `toad_${t.id}.png`],
        ['Seen by players', t.seen ? 'Yes' : 'Not yet'],
        ['Votes in the electorate', t.isElectorate
            ? 'Yes — tiers 6+7 elect the Speaker and vote armies into being'
            : 'No']
    ];
    if (t.meta.research && t.meta.research !== 'n/a') rows.push(['Research thread', t.meta.research]);
    return `
        <div class="detail-facts">
            ${rows.map(([k, v]) => `<div class="fact-row"><span class="fact-key">${escapeHtml(k)}</span><span class="fact-val">${escapeHtml(v)}</span></div>`).join('')}
        </div>
        <p class="aff-note">${escapeHtml(t.meta.note)}</p>
    `;
}

function detailLore(t) {
    if (t.detail) {
        return `
            <div class="lore-block">
                <div class="lore-role">${escapeHtml(t.detail.roleNote)}</div>
                <p>${escapeHtml(t.detail.lore)}</p>
            </div>
        `;
    }
    const sameBloc = enriched.filter(x => x.affiliation === t.affiliation && x.id !== t.id).map(x => x.name);
    return `
        <div class="lore-block">
            <p><strong>${escapeHtml(t.name)}</strong> carries ${/^(a|e|i|o|u)/i.test(t.weapon) ? 'an' : 'a'} <strong>${escapeHtml(t.weapon.toLowerCase())}</strong> in the ${escapeHtml(t.affiliation)} bloc.</p>
            ${sameBloc.length ? `<p>Bloc mates: ${escapeHtml(sameBloc.join(', '))}.</p>` : '<p>This toad stands alone in the bloc.</p>'}
        </div>
    `;
}

function detailStructure(t) {
    const lines = [];
    if (t.meta.tier) {
        lines.push(`<div class="struct-row">Serves in <strong>Tier ${t.meta.tier} — ${escapeHtml(t.meta.tierLabel)}</strong>.</div>`);
    } else {
        lines.push(`<div class="struct-row">Sits <strong>outside</strong> the seven-position leadership structure.</div>`);
    }
    if (t.id === '20_speaker_rivers') {
        lines.push(`<div class="struct-row">Speaker Rivers sits in Position 1 — elected by tiers 6 and 7.</div>`);
    }
    if (t.id === '13_speaker_l') {
        lines.push(`<div class="struct-row">Speaker L holds Position 2 — the ousted rival speaker.</div>`);
    }
    if (t.id === '30_captain_fernback') {
        lines.push(`<div class="struct-row">Commands the Pond Patrol — the army voted into being by tiers 6 and 7.</div>`);
    }
    if (t.affiliation === 'Spore 5') {
        lines.push(`<div class="struct-row">The Spore 5 stands apart: army standing, never chosen — <strong>rogue</strong>.</div>`);
    }
    return `<div class="struct-block">${lines.join('')}</div>`;
}

function attachMenuListeners() {
    const grid = document.getElementById('crew-grid');
    const search = document.getElementById('roster-search');
    const sortSel = document.getElementById('sort-select');
    const chipBox = document.getElementById('affiliation-chips');
    const seenBox = document.getElementById('seen-filter');
    const viewBox = document.getElementById('view-mode');
    const viewer = document.getElementById('toad-viewer');

    if (grid && !grid.dataset.wired) {
        grid.dataset.wired = '1';
        grid.addEventListener('click', (e) => {
            const card = e.target.closest('.viz-tile');
            if (!card) return;
            openViewer(card.dataset.id);
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
    if (viewBox && !viewBox.dataset.wired) {
        viewBox.dataset.wired = '1';
        viewBox.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-view]');
            if (!btn) return;
            state.view = btn.dataset.view;
            viewBox.querySelectorAll('[data-view]').forEach(b => b.classList.toggle('active', b === btn));
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
    if (viewer && !viewer.dataset.wired) {
        viewer.dataset.wired = '1';
        viewer.addEventListener('click', (e) => {
            if (e.target.closest('[data-close]') || e.target === viewer) closeViewer();
            const nav = e.target.closest('[data-nav]');
            if (nav) stepViewer(Number(nav.dataset.nav));
        });
    }
    if (!document.body.dataset.vizKeys) {
        document.body.dataset.vizKeys = '1';
        document.addEventListener('keydown', (e) => {
            if (!state.viewerId) return;
            if (e.key === 'Escape') closeViewer();
            if (e.key === 'ArrowRight') stepViewer(1);
            if (e.key === 'ArrowLeft') stepViewer(-1);
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
            document.querySelectorAll('.detail-tab').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.detail-tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const target = document.getElementById(`tab-${tab.dataset.tab}`);
            if (target) target.classList.add('active');
        });
    });
}

// Keep old name for any leftover callers.
export function toadPortraitStyle(toad) {
    return `background-image:url('${portraitSrc(toad)}');background-size:contain;background-position:center;background-repeat:no-repeat`;
}
