// governance-voting.js
// The seven-position leadership structure and the voting system, exactly as
// recorded on the "Leadership Positions" sheet of Toadslist.xlsx:
//   1. Speaker (Rivers) — elected by tiers 6 and 7
//   2. Rival Speaker (Speaker L — OUTSED)
//   3. Leaders (High Command / Overseers / Leaders) — appointed by 1
//   4. High-ranking army groups (Deputies) — appointed by 1; 3 appoints 4
//   5. Armies (Pond Patrol; The Spore 5 — ROGUE) — formed by vote of 6+7,
//      leaders chosen by 4
//   6. Armed Groups (Archie's / Speaker L / Speaker River followers) — electorate
//   7. Groups / Unions (Student Union / Medics United / Lillypads) — electorate

import {
    TOADSLIST_ROSTER,
    AFFILIATION_META,
    LEADERSHIP_POSITIONS,
    VOTING_RULES,
    VOTE_RECORDS,
    ELECTORATE_SIZE
} from '../../../data/liberated-toads/toadslist-data.js';

const byAff = {};
TOADSLIST_ROSTER.forEach(t => {
    (byAff[t.affiliation] = byAff[t.affiliation] || []).push(t);
});

const TIER_OF_AFF = {};
Object.entries(AFFILIATION_META).forEach(([k, m]) => { TIER_OF_AFF[k] = m.tier; });

// ---- Governance tab -------------------------------------------------------

export function renderGovernanceSection() {
    const box = document.getElementById('governance-full-content');
    if (!box) return;
    box.innerHTML = `
        <div class="gov-intro">
            <p>Power in the cohort flows through <strong>seven positions</strong>, recorded on the
            Leadership Positions sheet of the intake workbook. The structure replaced the old
            Council-of-Seven machinery after Speaker L was ousted.</p>
        </div>
        <div class="position-ladder">
            ${LEADERSHIP_POSITIONS.map(pos => positionCard(pos)).join('')}
        </div>
        <div class="gov-notes">
            <div class="gov-note rogue"><strong>The Spore 5 is rogue.</strong> It holds army standing beside the
            Pond Patrol but was never chosen by the appointment chain — five powerful spore creatures, not toads.</div>
            <div class="gov-note ousted"><strong>Speaker L was ousted.</strong> His following persists as an armed
            group (tier 6, still part of the electorate) and his office survives only as the rival speakership.</div>
        </div>
    `;
}

function membersOf(affKey) {
    return (byAff[affKey] || []).map(t => t.name);
}

function positionCard(pos) {
    const isElectorate = pos.position === 6 || pos.position === 7;
    let body = '';
    if (pos.holder) {
        const t = TOADSLIST_ROSTER.find(x => x.num === pos.holderNum);
        const statusClass = pos.status.includes('OUSTED') ? 'ousted' : 'sitting';
        body = `
            <div class="pos-holder ${statusClass}">
                <span class="pos-holder-name">${pos.holder}</span>
                <span class="pos-holder-status">${pos.status}</span>
            </div>`;
    } else if (pos.groups) {
        body = pos.groups.map(g => {
            const key = g === 'The Spore 5' ? 'Spore 5' : g;
            const names = membersOf(key);
            const meta = AFFILIATION_META[key] || {};
            const rogue = g === 'The Spore 5';
            return `
                <div class="pos-group ${rogue ? 'rogue' : ''}" style="--aff-color:${meta.color || '#888'}">
                    <div class="pos-group-name">${g}${rogue ? ' <span class="rogue-tag">ROGUE</span>' : ''}</div>
                    <div class="pos-group-tier">${meta.tierLabel || ''} · ${names.length} members</div>
                    <div class="pos-group-members">${names.join(' · ')}</div>
                </div>`;
        }).join('');
    }

    const flows = [];
    if (pos.electedBy) flows.push(`Elected by ${pos.electedBy}`);
    if (pos.appointedBy) flows.push(`Appointed by ${pos.appointedBy}`);
    if (pos.formedBy) flows.push(`Formed by ${pos.formedBy}`);
    if (isElectorate) flows.push('Part of the electorate — votes for the Speaker and armies');
    if (pos.appoints && pos.appoints.length) flows.push(`Appoints position${pos.appoints.length > 1 ? 's' : ''} ${pos.appoints.join(' & ')}`);

    return `
        <div class="position-card ${isElectorate ? 'electorate' : ''} ${pos.status && pos.status.includes('OUSTED') ? 'ousted-card' : ''}">
            <div class="position-head">
                <span class="position-num">${pos.position}</span>
                <span class="position-title">${pos.title}</span>
            </div>
            ${body}
            ${flows.length ? `<div class="position-flows">${flows.map(f => `<span class="flow-tag">${f}</span>`).join('')}</div>` : ''}
            ${pos.note ? `<div class="position-note">${pos.note}</div>` : ''}
        </div>
    `;
}

// ---- Voting tab -----------------------------------------------------------

export function renderVotingSection() {
    const box = document.getElementById('voting-content');
    if (!box) return;

    const electorateBlocs = Object.entries(AFFILIATION_META)
        .filter(([, m]) => m.tier === 6 || m.tier === 7)
        .map(([key, m]) => ({ key, meta: m, count: (byAff[key] || []).length }))
        .sort((a, b) => b.count - a.count);

    box.innerHTML = `
        <div class="rules-section">
            <h4>📜 How Voting Works</h4>
            <p class="rules-source">As recorded on the Leadership Positions sheet of Toadslist.xlsx:</p>
            <div class="rules-grid">
                ${VOTING_RULES.map((r, i) => `
                    <div class="rule-card">
                        <span class="rule-num">${i + 1}</span>
                        <span class="rule-text">${r.rule}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="electorate-section">
            <h4>🗳️ The Electorate — Tiers 6 + 7</h4>
            <p>The armed groups and the unions together elect the Speaker and vote armies into being.
               <strong>${ELECTORATE_SIZE} of ${TOADSLIST_ROSTER.length} toads</strong> hold the vote.</p>
            <div class="bloc-table">
                ${electorateBlocs.map(b => `
                    <div class="bloc-row" data-bloc="${b.key}">
                        <span class="bloc-name" style="--aff-color:${b.meta.color}">${b.key}</span>
                        <span class="bloc-tier">${b.meta.tierLabel}</span>
                        <div class="bloc-bar-track"><div class="bloc-bar" style="width:${(b.count / ELECTORATE_SIZE) * 100}%;background:${b.meta.color}"></div></div>
                        <span class="bloc-count">${b.count}</span>
                    </div>
                `).join('')}
                <div class="bloc-total">Electorate total: <strong>${ELECTORATE_SIZE}</strong> · Simple majority: <strong>${Math.floor(ELECTORATE_SIZE / 2) + 1}</strong></div>
            </div>
        </div>

        <div class="simulator-section">
            <h4>🧮 Convene a Vote (table exercise)</h4>
            <p>Assign each bloc's stance, then read the tally. This is a planning tool for the table —
               it records nothing and changes no state.</p>
            <div class="sim-controls">
                <div class="sim-stance-legend">
                    <button class="sim-stance-btn active" data-stance="for">For</button>
                    <button class="sim-stance-btn" data-stance="against">Against</button>
                    <button class="sim-stance-btn" data-stance="abstain">Abstain</button>
                    <span class="sim-hint">pick a stance, then click blocs</span>
                </div>
                <button class="sim-reset" id="sim-reset">Reset</button>
            </div>
            <div class="sim-blocs" id="sim-blocs"></div>
            <div class="sim-tally" id="sim-tally"></div>
        </div>

        <div class="records-section">
            <h4>📚 Record of Votes</h4>
            <p class="muted">Tallies appear only where a repo source carries them. Where the record is
               silent, the card says so — no invented numbers.</p>
            <div class="vote-records-list">
                ${VOTE_RECORDS.map(v => voteRecordCard(v)).join('')}
            </div>
        </div>
    `;

    initSimulator(electorateBlocs);
}

function voteRecordCard(v) {
    const tally = v.tally && (v.tally.yes !== null || v.tally.no !== null)
        ? `For ${v.tally.yes ?? '—'} · Against ${v.tally.no ?? '—'}${v.tally.abstain !== null ? ` · Abstain ${v.tally.abstain}` : ''}${v.tally.turnout ? ` · of ${v.tally.turnout} cast` : ''}`
        : 'No tally recorded in the sources.';
    return `
        <div class="vote-record-card">
            <div class="vrc-head">
                <span class="vrc-id">${v.id}</span>
                <span class="vrc-kind">${v.kind}</span>
            </div>
            <div class="vrc-title">${v.title}</div>
            <div class="vrc-result">${v.result}</div>
            <div class="vrc-tally">${tally}</div>
            <div class="vrc-summary">${v.summary}</div>
            <div class="vrc-source">source: ${v.source}</div>
        </div>
    `;
}

// ---- simulator ------------------------------------------------------------

function initSimulator(blocs) {
    const stance = { current: 'for' };
    const positions = {}; // bloc -> 'for' | 'against' | 'abstain' | undefined
    const blocsBox = document.getElementById('sim-blocs');
    const tallyBox = document.getElementById('sim-tally');

    function draw() {
        blocsBox.innerHTML = blocs.map(b => {
            const p = positions[b.key];
            return `
                <button class="sim-bloc ${p || ''}" data-bloc="${b.key.replace(/"/g, '&quot;')}" style="--aff-color:${b.meta.color}">
                    <span class="sim-bloc-name">${b.key}</span>
                    <span class="sim-bloc-count">${b.count}</span>
                    <span class="sim-bloc-stance">${p ? p.toUpperCase() : '—'}</span>
                </button>
            `;
        }).join('');

        let f = 0, a = 0, ab = 0, undecided = 0;
        blocs.forEach(b => {
            const p = positions[b.key];
            if (p === 'for') f += b.count;
            else if (p === 'against') a += b.count;
            else if (p === 'abstain') ab += b.count;
            else undecided += b.count;
        });
        const majority = Math.floor(ELECTORATE_SIZE / 2) + 1;
        const outcome = f >= majority ? 'CARRIES'
            : a >= majority ? 'FAILS'
            : undecided === 0 ? 'NO MAJORITY — DEADLOCK'
            : 'PENDING';
        const outcomeClass = outcome.startsWith('CARRIES') ? 'carries' : outcome.startsWith('FAILS') ? 'fails' : outcome.startsWith('NO') ? 'deadlock' : 'pending';
        tallyBox.innerHTML = `
            <div class="sim-bar-row"><span>For</span><div class="sim-bar-track"><div class="sim-bar for" style="width:${(f / ELECTORATE_SIZE) * 100}%"></div></div><strong>${f}</strong></div>
            <div class="sim-bar-row"><span>Against</span><div class="sim-bar-track"><div class="sim-bar against" style="width:${(a / ELECTORATE_SIZE) * 100}%"></div></div><strong>${a}</strong></div>
            <div class="sim-bar-row"><span>Abstain</span><div class="sim-bar-track"><div class="sim-bar abstain" style="width:${(ab / ELECTORATE_SIZE) * 100}%"></div></div><strong>${ab}</strong></div>
            <div class="sim-bar-row"><span>Undecided</span><div class="sim-bar-track"><div class="sim-bar undecided" style="width:${(undecided / ELECTORATE_SIZE) * 100}%"></div></div><strong>${undecided}</strong></div>
            <div class="sim-outcome ${outcomeClass}">${outcome} ${f >= majority || a >= majority ? `— majority (${majority}) reached` : `— needs ${majority} to carry`}</div>
        `;
    }

    blocsBox.addEventListener('click', (e) => {
        const btn = e.target.closest('.sim-bloc');
        if (!btn) return;
        const key = btn.dataset.bloc;
        positions[key] = positions[key] === stance.current ? undefined : stance.current;
        draw();
    });
    document.querySelectorAll('.sim-stance-btn').forEach(b => {
        b.addEventListener('click', () => {
            stance.current = b.dataset.stance;
            document.querySelectorAll('.sim-stance-btn').forEach(x => x.classList.toggle('active', x === b));
        });
    });
    const reset = document.getElementById('sim-reset');
    if (reset) reset.addEventListener('click', () => {
        Object.keys(positions).forEach(k => delete positions[k]);
        draw();
    });

    draw();
}

// ---- Overview tab fragments ----------------------------------------------

export function renderGovernanceGlance() {
    const box = document.getElementById('governance-content');
    if (!box) return;
    box.innerHTML = `
        <div class="glance-grid">
            <div class="glance-card speaker">
                <span class="glance-label">Position 1 — Speaker</span>
                <strong>Rivers</strong>
                <span>Elected by tiers 6 + 7 (the armed groups and the unions)</span>
            </div>
            <div class="glance-card ousted">
                <span class="glance-label">Position 2 — Rival Speaker</span>
                <strong>Speaker L</strong>
                <span>Ousted. His following remains an armed group in the electorate.</span>
            </div>
            <div class="glance-card army">
                <span class="glance-label">Position 5 — Armies</span>
                <strong>Pond Patrol</strong>
                <span>Formed by vote of 6 + 7 · leaders chosen by the Deputies (tier 4)</span>
            </div>
            <div class="glance-card rogue">
                <span class="glance-label">Rogue army</span>
                <strong>The Spore 5</strong>
                <span>Five powerful spore creatures — not toads, never chosen.</span>
            </div>
        </div>
        <p class="glance-footnote">Full structure and the voting rules in the Governance and Voting tabs.</p>
    `;
}

export function renderActiveVotePreview() {
    const box = document.getElementById('vote-preview');
    if (!box) return;
    box.innerHTML = `
        <div class="vote-card suspended">
            <div class="vote-header">
                <div class="vote-id">STATE OF THE VOTE</div>
                <div class="vote-meta"><span class="vote-type-badge">STRUCTURAL</span></div>
            </div>
            <h4 class="vote-title">No active council ballot</h4>
            <p class="vote-description">The last council ballots died with the Speaker's ouster:
               V-2021-001 (Iron Mandate response) was suspended and never resumed; V-2021-002
               (Order 120) closed with no majority, overtaken by the Reclamation and the Aegis
               uprising. Decisions now flow through the seven-position structure — the Speaker is
               elected by tiers 6+7, armies are formed by their vote, and leaders are appointed
               down the chain.</p>
            <div class="vote-footer">
                <div class="quorum-status met">Electorate: ${ELECTORATE_SIZE} of ${TOADSLIST_ROSTER.length}</div>
                <p style="font-size:0.85rem;color:var(--text-muted);margin-top:10px;">Voting rules and the full record live in the Voting tab.</p>
            </div>
        </div>
    `;
}
