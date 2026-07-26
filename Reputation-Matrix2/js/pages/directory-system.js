// directory-system.js - Player Relations Focused Directory System

import { state, loadState } from '../core/state.js';
import { FACTION_ASSESSMENTS } from './assessments.js';
import { getReputation, getGenericFactionAssessment } from '../core/reputation.js';
import { getIntelForFaction, getIntelBreakdown } from '../../systems/common.js';
import { playSound } from '../core/common.js';
import {AUXILIARY_PARTY} from './party-and-events.js'
import { getAllFactions, getFaction, getFactionStats, toSystemId } from '../../systems/faction-registry.js';
import { getRealTimeMapStats } from '../maps/global-map-analysis.js';
import { LORE_DATA, STORY_ARCS } from './lore.js';
import { WAHBOOK_POSTS } from '../data_modules/assembly-data.js';
import { calculateRumorMetrics } from '../data_modules/research-data.js'; 
import { calculateAssemblyInfamy, getCharacterInfamy, getFactionInfamy, renderInfamyBadge } from './assembly-infamy.js'; 
let _targetRelationsCache = new Map();

let currentView = 'grid';
let selectedPlayer = null;
let selectedTarget = null;
let hideMinorRelations = false;
let directoryInfamyState = null;
let currentFilters = {
    region: 'all',
    standing: 'all',
    sort: 'reputation',
    search: ''
};

// NEW: Cache to prevent infinite loops
let _unifiedFactionCache = null;
let _unifiedFactionCacheTime = 0;
const CACHE_DURATION = 5000; // 5 seconds

// ============================================
// UNIFIED FACTION DATA - With caching





// ============================================
// DIRECTORY INFAMY INTEGRATION
// Infamy is heat: warrants, fear, scandal, grudges, and hostile attention.
// Reputation is whether a faction likes you. Fame is whether they know you.
// Infamy is whether knowing you makes guards reach for paperwork or weapons.
// ============================================

function refreshDirectoryInfamy() {
    try {
        directoryInfamyState = calculateAssemblyInfamy(WAHBOOK_POSTS || [], LORE_DATA || {});
        window.DIRECTORY_INFAMY_STATE = directoryInfamyState;
    } catch (err) {
        console.warn('[Directory] Infamy calculation failed:', err.message);
        directoryInfamyState = null;
    }
    return directoryInfamyState;
}

function getDirectoryInfamyState() {
    return directoryInfamyState || refreshDirectoryInfamy();
}

function clampHeat(value) {
    return Math.max(0, Math.min(100, Math.round(Number(value) || 0)));
}

function getInfamyClass(score) {
    score = Number(score) || 0;
    if (score >= 75) return 'menace';
    if (score >= 60) return 'wanted';
    if (score >= 40) return 'hot';
    if (score >= 20) return 'watched';
    return 'quiet';
}

function getInfamyLabel(score) {
    score = Number(score) || 0;
    if (score >= 90) return 'Catastrophe';
    if (score >= 75) return 'Public Menace';
    if (score >= 60) return 'Wanted / Feared';
    if (score >= 40) return 'Hot File';
    if (score >= 20) return 'Watched';
    return 'Quiet';
}

function getFactionInfamyProfile(factionKey) {
    return getFactionInfamy(getDirectoryInfamyState(), factionKey);
}

function getCharacterInfamyProfile(characterKey) {
    return getCharacterInfamy(getDirectoryInfamyState(), characterKey);
}

function getRelationshipInfamy(playerKey, factionKey) {
    return getRelationshipInfamyBreakdown(playerKey, factionKey).total;
}

function getPartyFactionInfamy(factionKey) {
    const factionHeat = getFactionInfamyProfile(factionKey).score || 0;
    const partyHeat = state.party.reduce((sum, p) => sum + getRelationshipInfamy(p, factionKey), 0) / Math.max(1, state.party.length);
    return clampHeat(factionHeat * 0.55 + partyHeat * 0.45);
}

function renderDirectoryInfamyBadge(score, small = false) {
    const cls = getInfamyClass(score);
    return `<span class="dir-infamy-badge ${cls}" title="Infamy Heat: ${score} · ${getInfamyLabel(score)}">🚨 ${small ? score : `${getInfamyLabel(score)} ${score}`}</span>`;
}

function getInfamyAccessText(score, rep = 0) {
    if (score >= 75) return rep < 0 ? 'Hostile access: bounties, warrants, emergency councils, and fear-opened testimony.' : 'Dangerous access: war rooms listen, but polite doors lock behind you.';
    if (score >= 60) return 'Wanted-file access: guards, rivals, investigators, and underworld contacts recognize the heat immediately.';
    if (score >= 40) return 'Hot-file access: rumor brokers, legal clerks, and faction security know the name and ask sharper questions.';
    if (score >= 20) return 'Watched access: recognition adds scrutiny, but not automatic hostility.';
    return 'Quiet file: no major heat-based access yet.';
}

function addInfamyFactor(factors, source, text, value, channel = 'scandal', kind = value >= 0 ? 'heat' : 'cooling') {
    const rounded = Math.round(Number(value) || 0);
    if (rounded === 0) return;
    factors.push({ source, text, value: rounded, channel, kind });
}

function rumorMatchesFaction(rumor, factionKey) {
    if (!rumor) return false;
    if ((rumor.keyFactions || rumor.key_factions || []).includes(factionKey)) return true;
    if (rumor.effects && Object.prototype.hasOwnProperty.call(rumor.effects, factionKey)) return true;
    const search = String(factionKey || '').replace(/_/g, ' ').toLowerCase();
    return [rumor.title, rumor.description, rumor.summary].filter(Boolean).join(' ').toLowerCase().includes(search);
}

function postMentionsFaction(post, factionKey) {
    const faction = getUnifiedFaction(factionKey);
    const names = [factionKey, faction?.name, faction?.shortName].filter(Boolean).map(x => String(x).toLowerCase());
    const blob = [post?.content, post?.title, post?.summary, ...(post?.comments || []).map(c => c?.text)].filter(Boolean).join(' ').toLowerCase();
    return names.some(n => n && blob.includes(n.replace(/_/g, ' '))) || names.some(n => n && blob.includes(n));
}

function getRelationshipInfamyBreakdown(playerKey, factionKey) {
    const factors = [];
    const charProfile = getCharacterInfamyProfile(playerKey);
    const factionProfile = getFactionInfamyProfile(factionKey);
    const rep = getPlayerReputation(playerKey, factionKey);
    const notoriety = getPlayerNotoriety(playerKey, factionKey);
    const breakdown = state.calculationBreakdown?.[playerKey]?.[factionKey];

    addInfamyFactor(factors, 'Personal File', `${charProfile.name || playerKey} baseline heat: ${(charProfile.tags || []).slice(0, 3).join(', ') || charProfile.tier || 'quiet file'}`, (charProfile.score || 0) * 0.28, 'personal');
    addInfamyFactor(factors, 'Faction Climate', `${factionProfile.name || factionKey} ambient danger: ${(factionProfile.tags || []).slice(0, 3).join(', ') || factionProfile.tier || 'low heat'}`, (factionProfile.score || 0) * 0.36, 'faction');
    addInfamyFactor(factors, 'Local Notoriety', 'Existing local notoriety with this faction converts recognition into scrutiny.', notoriety * 0.32, 'notoriety');
    addInfamyFactor(factors, 'Standing Drag', 'Hostile reputation makes recognition more dangerous, not merely less friendly.', Math.max(0, -rep) * 0.35, 'legal');
    if (rep > 50 && (factionProfile.score || 0) > 55) {
        addInfamyFactor(factors, 'Volatile Ally', 'The faction likes you, but being close to a hot faction creates splash damage.', 8, 'scandal');
    }
    if (rep > 30 && (factionProfile.score || 0) < 35) {
        addInfamyFactor(factors, 'Goodwill Cushion', 'Positive standing with a relatively stable faction lowers practical heat.', -Math.min(10, rep * 0.12), 'cooling', 'cooling');
    }

    // Reputation calculation already tracks rumors/quests/propagation. Reuse that evidence instead of inventing a second ledger.
    if (breakdown?.rumors?.length) {
        breakdown.rumors.slice(-8).forEach(r => {
            const val = Number(r.value || 0);
            if (val < 0) addInfamyFactor(factors, 'Reputation Rumor', `${r.title || 'Negative rumor'} damaged standing; that damage becomes legal/social heat.`, Math.min(18, Math.abs(val) * 0.55), 'rumor');
            else if (val > 0) addInfamyFactor(factors, 'Protective Rumor', `${r.title || 'Positive rumor'} gives some witnesses a reason not to escalate.`, -Math.min(8, val * 0.18), 'cooling', 'cooling');
        });
    }
    if (breakdown?.quests?.length) {
        breakdown.quests.slice(-6).forEach(q => {
            const val = Number(q.value || 0);
            if (val < 0) addInfamyFactor(factors, 'Quest Fallout', `${q.questTitle || 'Quest'} hurt this relationship; faction officials remember it.`, Math.min(14, Math.abs(val) * 0.45), 'quest');
            else if (val > 0) addInfamyFactor(factors, 'Quest Goodwill', `${q.questTitle || 'Quest'} creates a small heat shield with this faction.`, -Math.min(7, val * 0.14), 'cooling', 'cooling');
        });
    }
    if (breakdown?.propagation?.length) {
        breakdown.propagation.slice(-5).forEach(p => {
            const val = Number(p.value || 0);
            if (val < 0) addInfamyFactor(factors, 'Network Spillover', `Bad relations propagated from ${getUnifiedFaction(p.source)?.name || p.source}.`, Math.min(10, Math.abs(val) * 0.25), 'network');
            else if (val > 0) addInfamyFactor(factors, 'Network Cover', `Friendly relations propagated from ${getUnifiedFaction(p.source)?.name || p.source}.`, -Math.min(5, val * 0.10), 'cooling', 'cooling');
        });
    }

    // Direct rumor effects from lore dossiers: negative effects heat up a faction even when no final reputation breakdown is present.
    (LORE_DATA.rumors || []).filter(r => rumorMatchesFaction(r, factionKey)).slice(-10).forEach(rumor => {
        const effect = Number(rumor.effects?.[factionKey] || 0);
        let spread = 0;
        try {
            const relatedPosts = (WAHBOOK_POSTS || []).filter(p => p.rumorId === rumor.id);
            spread = Math.min(8, Math.abs(calculateRumorMetrics(rumor, relatedPosts)?.finalScore || 0) / 18);
        } catch (e) {}
        if (effect < 0) addInfamyFactor(factors, 'Public Dossier', `${rumor.title || rumor.id} is negative public evidence against this relationship.`, Math.min(16, Math.abs(effect) * 0.45 + spread), 'dossier');
        else if (effect > 0) addInfamyFactor(factors, 'Public Dossier', `${rumor.title || rumor.id} creates public goodwill that dampens heat.`, -Math.min(8, effect * 0.12), 'cooling', 'cooling');
        else if (spread > 3) addInfamyFactor(factors, 'Public Chatter', `${rumor.title || rumor.id} keeps this faction in active conversation.`, spread, 'dossier');
    });

    // WAHbook chatter by this character about this faction can create fresh heat.
    const relatedPosts = (WAHBOOK_POSTS || []).filter(p => p.characterKey === playerKey && postMentionsFaction(p, factionKey));
    if (relatedPosts.length) {
        const postHeat = relatedPosts.reduce((sum, p) => sum + (getDirectoryInfamyState()?.posts?.[p.id]?.score || 0), 0) / relatedPosts.length;
        addInfamyFactor(factors, 'WAHbook Chatter', `${relatedPosts.length} post(s) by this character mention the faction; public posting converts private standing into visible heat.`, Math.min(15, postHeat * 0.18 + relatedPosts.length), 'media');
    }

    const rawTotal = factors.reduce((sum, f) => sum + f.value, 0);
    const total = clampHeat(rawTotal);
    const heat = factors.filter(f => f.value > 0).reduce((s, f) => s + f.value, 0);
    const cooling = Math.abs(factors.filter(f => f.value < 0).reduce((s, f) => s + f.value, 0));
    return { total, rawTotal, heat: Math.round(heat), cooling: Math.round(cooling), factors };
}

function renderInfamyFactorList(playerKey, factionKey) {
    const detail = getRelationshipInfamyBreakdown(playerKey, factionKey);
    return `
        <div class="dir-infamy-factor-list">
            ${detail.factors.length ? detail.factors.map(f => `
                <div class="dir-infamy-factor ${f.value >= 0 ? 'heat' : 'cooling'}">
                    <div class="dir-infamy-factor-main">
                        <b>${f.source}</b>
                        <span>${f.text}</span>
                    </div>
                    <strong>${f.value >= 0 ? '+' : ''}${f.value}</strong>
                </div>
            `).join('') : '<p class="no-events">No infamy factors recorded for this relationship.</p>'}
        </div>
    `;
}

function renderInfamyWatchSidebar() {
    const container = document.getElementById('infamy-watch-list');
    if (!container) return;
    const infamy = getDirectoryInfamyState();
    const top = (infamy?.rankedCharacters || []).slice(0, 6);
    if (!top.length) {
        container.innerHTML = '<p class="no-events">No heat records calculated</p>';
        return;
    }
    container.innerHTML = top.map(p => `
        <button class="infamy-watch-item" data-infamy-target="${p.key}">
            <span>${p.name}</span>
            ${renderDirectoryInfamyBadge(Math.round(p.score), true)}
        </button>
    `).join('');
    container.querySelectorAll('[data-infamy-target]').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilters.search = btn.dataset.infamyTarget || '';
            const search = document.getElementById('search-filter');
            if (search) search.value = currentFilters.search;
            render();
            playSound('click.mp3', 0.3);
        });
    });
}

function renderInfamyReport() {
    const container = document.getElementById('view-container');
    if (!container) return;
    const infamy = getDirectoryInfamyState();
    const hotFactions = getUnifiedFactionList()
        .map(f => ({ ...f, heat: getPartyFactionInfamy(f.key), profile: getFactionInfamyProfile(f.key) }))
        .sort((a, b) => b.heat - a.heat)
        .slice(0, 12);
    const hotCharacters = (infamy?.rankedCharacters || []).slice(0, 12);
    container.innerHTML = `
        <div class="directory-infamy-report">
            <div class="dir-infamy-hero ${getInfamyClass(infamy?.global?.score || 0)}">
                <div>
                    <span class="dir-kicker">🚨 INFAMY MATRIX</span>
                    <h3>Heat, warrants, fear, scandal, and hostile attention</h3>
                    <p>Reputation says who likes the party. Fame says who recognizes them. Infamy says which rooms become dangerous because recognition carries legal, political, or violent consequences.</p>
                </div>
                ${renderDirectoryInfamyBadge(Math.round(infamy?.global?.score || 0))}
            </div>
            <div class="dir-infamy-grid">
                <section class="dir-infamy-panel">
                    <h4>Hottest faction relationships</h4>
                    ${hotFactions.map(f => {
                        const rep = selectedPlayer ? getPlayerReputation(selectedPlayer, f.key) : f.partyRep;
                        return `
                            <div class="dir-heat-row" data-faction="${f.key}">
                                <div class="dir-heat-title"><b>${f.faction.icon || ''} ${f.faction.name}</b><span class="${getReputationClass(rep)}">${rep >= 0 ? '+' : ''}${rep}</span></div>
                                <div class="dir-heat-meter"><i class="${getInfamyClass(f.heat)}" style="width:${f.heat}%"></i></div>
                                <p>${getInfamyAccessText(f.heat, rep)}</p>
                            </div>
                        `;
                    }).join('')}
                </section>
                <section class="dir-infamy-panel">
                    <h4>Hottest character files</h4>
                    ${hotCharacters.map(p => `
                        <div class="dir-character-heat-row">
                            <div><b>${p.name}</b><span>${(p.tags || []).slice(0, 3).join(' · ') || p.tier}</span></div>
                            ${renderDirectoryInfamyBadge(Math.round(p.score), true)}
                        </div>
                    `).join('')}
                </section>
            </div>

            <!-- Infamy Tab -->
            <div class="why-tab-content" id="why-tab-infamy">
                <div class="why-section-header">
                    <div class="why-section-title">
                        <h4>Infamy Breakdown</h4>
                        <span class="why-section-subtitle">Heat is hostile attention, not approval</span>
                    </div>
                    <div class="why-total-badge infamy ${getInfamyClass(getRelationshipInfamy(targetPlayer, factionKey))}">
                        ${getRelationshipInfamy(targetPlayer, factionKey)}
                    </div>
                </div>
                <div class="dir-infamy-modal-copy">
                    <p>${getInfamyAccessText(getRelationshipInfamy(targetPlayer, factionKey), totalRep)}</p>
                    <div class="dir-infamy-components">
                        <div><b>${Math.round(getCharacterInfamyProfile(targetPlayer).score)}</b><span>${playerData?.name || targetPlayer} personal heat</span></div>
                        <div><b>${Math.round(getFactionInfamyProfile(factionKey).score)}</b><span>${faction.name} faction heat</span></div>
                        <div><b>${getRelationshipInfamyBreakdown(targetPlayer, factionKey).heat}</b><span>Total heat pressure</span></div>
                        <div><b>${getRelationshipInfamyBreakdown(targetPlayer, factionKey).cooling}</b><span>Goodwill cooling</span></div>
                    </div>
                    ${renderInfamyFactorList(targetPlayer, factionKey)}
                    <p class="dir-infamy-note">A friendly faction can still be dangerous if its public heat is high. A hostile faction with high heat may open bounty boards, court files, interrogation rooms, and frightened witnesses instead of polite audiences.</p>
                </div>
            </div>
        </div>
    `;
    container.querySelectorAll('[data-faction]').forEach(el => {
        el.addEventListener('click', () => renderFactionDetailModal(el.dataset.faction));
    });
}

// ============================================
// SIDEBAR RENDERING
// ============================================

function renderPartyMemberList() {
    const container = document.getElementById('party-member-list');
    if (!container) return;
    
    container.innerHTML = state.party.map(playerKey => {
        const player = LORE_DATA.characters[playerKey];
        const isSelected = selectedPlayer === playerKey && !selectedTarget;
        
        return `
            <div class="party-member-item ${isSelected ? 'selected' : ''}" data-player="${playerKey}">
                <img src="${player?.portrait || 'portraits/unknown.png'}" alt="${player?.name}" class="party-member-portrait">
                <div class="party-member-info">
                    <span class="party-member-name">${player?.name || playerKey}</span>
                    <span class="party-member-status">${isSelected ? 'Viewing' : ''}</span>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * NEW: Render the NPC/Notable Figures sidebar section
 */
function renderNotableFigures() {
    const container = document.getElementById('notable-figures-list');
    if (!container) return;
    
    const targets = getTargetsFromRumors();
    
    if (targets.length === 0) {
        container.innerHTML = '<p class="no-figures">No notable figures found in rumors</p>';
        return;
    }
    
    // Group by type
    const auxiliary = targets.filter(t => t.entity.type === 'auxiliary');
    const others = targets.filter(t => t.entity.type !== 'auxiliary');
    
    let html = '';
    
    if (auxiliary.length > 0) {
        html += `
            <div class="figures-group">
                <span class="figures-group-label">🐸 Auxiliary Toads</span>
                ${auxiliary.slice(0, 69).map(t => renderFigureItem(t)).join('')}
            </div>
        `;
    }
    
    if (others.length > 0) {
        html += `
            <div class="figures-group">
                <span class="figures-group-label">👤 Other Figures</span>
                ${others.slice(0, 80).map(t => renderFigureItem(t)).join('')}
            </div>
        `;
    }
    
    container.innerHTML = html;
}
/**
 * Render a single figure item in the sidebar
 *//**
 * Render a single figure item in the sidebar
 */
function renderFigureItem(target) {
    const { entity, rumors, roles } = target;
    const isSelected = selectedTarget === target.id;
    
    const roleIcons = [];
    if (roles.has('instigator')) roleIcons.push('⚡');
    if (roles.has('target')) roleIcons.push('🎯');
    if (roles.has('affected')) roleIcons.push('📊');
    
    // Normalize portrait path - ensure it starts with portraits/
    const portraitPath = entity.portrait.includes('/') 
        ? entity.portrait 
        : `portraits/${entity.portrait}`;
    
    return `
        <div class="figure-item ${isSelected ? 'selected' : ''}" data-target="${target.id}">
            <img src="${portraitPath}" alt="${entity.name}" class="figure-portrait" onerror="this.src='portraits/unknown.png'">
            <div class="figure-info">
                <span class="figure-name">${entity.name}</span>
                <span class="figure-meta">
                    <span class="figure-roles">${roleIcons.join('')}</span>
                    <span class="figure-rumor-count">${rumors.length} event${rumors.length !== 1 ? 's' : ''}</span>
                </span>
            </div>
        </div>
    `;
}
/**
 * NEW: Render the minor relations toggle
 */


// ============================================
// VIEW HEADER - Shows who's perspective we're viewing
// ============================================

/**
 * NEW: Render a header showing current perspective
 */function renderPerspectiveHeader() {
    let existingHeader = document.getElementById('perspective-header');
    
    if (!selectedTarget && !selectedPlayer) {
        if (existingHeader) existingHeader.remove();
        return;
    }
    
    const container = document.getElementById('view-container');
    if (!container) return;
    
    let entity, entityType;
    
    if (selectedTarget) {
        entity = resolveTargetEntity(selectedTarget);
        entityType = 'NPC';
    } else {
        entity = LORE_DATA.characters[selectedPlayer];
        entityType = 'Party Member';
    }
    
    const portraitSrc = entity?.portrait 
        ? `portraits/${entity.portrait.split('/').pop()}` 
        : 'portraits/unknown.png';
    
    const headerHTML = `
        <div id="perspective-header" class="perspective-header">
            <div class="perspective-info">
                <img src="${portraitSrc}" alt="${entity?.name}" class="perspective-portrait" onerror="this.src='portraits/unknown.png'">
                <div class="perspective-text">
                    <span class="perspective-label">Viewing as ${entityType}</span>
                    <span class="perspective-name">${entity?.name || selectedTarget || selectedPlayer}</span>
                    ${entity?.title ? `<span class="perspective-title">${entity.title}</span>` : ''}
                </div>
            </div>
            <button class="perspective-clear" id="clear-perspective-btn">✕ Clear</button>
        </div>
    `;
    
    if (existingHeader) {
        existingHeader.outerHTML = headerHTML;
    } else {
        container.insertAdjacentHTML('afterbegin', headerHTML);
    }
}
// ============================================
// UPDATED GRID VIEW - Shows target perspective
// ============================================
function renderGridView() {
    const container = document.getElementById('view-container');
    if (!container) return;
    
    const factions = getFilteredFactions();
    const isDebug = state.debugMode;
    
    // Render perspective header
    let headerHTML = '';
    if (selectedTarget || selectedPlayer) {
        let entity, entityType;
        
        if (selectedTarget) {
            entity = resolveTargetEntity(selectedTarget);
            entityType = 'NPC';
        } else {
            entity = LORE_DATA.characters[selectedPlayer];
            entityType = 'Party Member';
        }
        
        const portraitSrc = entity?.portrait 
            ? `portraits/${entity.portrait.split('/').pop()}` 
            : 'portraits/unknown.png';
        
        headerHTML = `
            <div class="perspective-header">
                <div class="perspective-info">
                    <img src="${portraitSrc}" alt="${entity?.name}" class="perspective-portrait" onerror="this.src='portraits/unknown.png'">
                    <div class="perspective-text">
                        <span class="perspective-label">Viewing as ${entityType}</span>
                        <span class="perspective-name">${entity?.name || selectedTarget || selectedPlayer}</span>
                    </div>
                </div>
                <button class="perspective-clear" id="clear-perspective-btn">✕ Clear Selection</button>
            </div>
        `;
    }
    
    if (factions.length === 0) {
        container.innerHTML = `
            ${headerHTML}
            <div class="no-factions">
                <p>No factions match your filters.</p>
                ${hideMinorRelations ? '<p class="hint">💡 "Hide Minor" is on - only showing factions with ±2 or more reputation.</p>' : ''}
                ${selectedTarget ? '<p class="hint">💡 This figure may have limited faction interactions from rumors.</p>' : ''}
            </div>
        `;
        return;
    }
    
    const predefined = factions.filter(f => !f.isAutoGenerated);
    const discovered = factions.filter(f => f.isAutoGenerated);
    
    // Show count of hidden factions
    const allFactions = getUnifiedFactionList();
    const hiddenCount = allFactions.length - factions.length;
    const hiddenNote = hideMinorRelations && hiddenCount > 0 
        ? `<span class="hidden-count">(${hiddenCount} minor relations hidden)</span>` 
        : '';
    
    container.innerHTML = `
        ${headerHTML}
        <div class="grid-header">
            <span class="grid-count">${factions.length} factions ${hiddenNote}</span>
        </div>
        <div class="faction-grid">
            ${predefined.map(faction => renderFactionCard(faction, isDebug)).join('')}
        </div>
        ${discovered.length > 0 ? `
            <div class="discovered-section">
                <h4 class="discovered-header">
                    <span class="discovered-icon">🔍</span>
                    Discovered Factions (${discovered.length})
                </h4>
                <div class="faction-grid discovered-grid">
                    ${discovered.map(faction => renderFactionCard(faction, isDebug)).join('')}
                </div>
            </div>
        ` : ''}
    `;
}
// ============================================
// UPDATED FACTION CARD - Shows target rep when applicable
// ============================================

function renderFactionCard(factionData, isDebug) {
    const { key, faction, partyRep, intel, playerReps, targetRep, source, isAutoGenerated } = factionData;
    
    // Determine which rep to display based on selection
    let displayRep;
    let repSource;
    
    if (selectedTarget) {
        displayRep = targetRep;
        repSource = 'target';
    } else if (selectedPlayer) {
        displayRep = playerReps[selectedPlayer];
        repSource = 'player';
    } else {
        displayRep = partyRep;
        repSource = 'party';
    }
    
    const repClass = getReputationClass(displayRep);
    const repLabel = getReputationLabel(displayRep);
    
    const notoriety = selectedPlayer 
        ? getPlayerNotoriety(selectedPlayer, key)
        : Math.round(state.party.reduce((sum, p) => sum + getPlayerNotoriety(p, key), 0) / state.party.length);
    const infamyHeat = selectedPlayer ? getRelationshipInfamy(selectedPlayer, key) : getPartyFactionInfamy(key);
    const infamyProfile = getFactionInfamyProfile(key);
    
    const assessmentPlayer = selectedPlayer || 'archie';
    const assessment = getFactionAssessment(key, assessmentPlayer);
    const assessmentSnippet = assessment 
        ? assessment.substring(0, 120) + (assessment.length > 120 ? '...' : '')
        : getGenericFactionAssessment(displayRep);
    
    // Party indicator dots (only show if not viewing specific target)
    const playerIndicators = !selectedTarget ? state.party.map(p => {
        const rep = playerReps[p];
        const cls = getReputationClass(rep);
        const char = LORE_DATA.characters[p];
        return `<span class="player-rep-dot ${cls}" title="${char?.name || p}: ${rep}"></span>`;
    }).join('') : '';

    const widthPct = Math.min(Math.abs(displayRep), 100) / 2;
    const barStyle = displayRep < 0 
        ? `width: ${widthPct}%; right: 50%; border-radius: 4px 0 0 4px;` 
        : `width: ${widthPct}%; left: 50%; border-radius: 0 4px 4px 0;`;
    
    const sourceBadge = isAutoGenerated ? '<span class="source-badge from-poi"></span>' : '';
    const arcBadge = factionData.faction.isFromStoryArc 
    ? `<span class="source-badge from-arc" title="From: ${factionData.faction.relatedArcs?.join(', ') || 'Story Arc'}">📖</span>` 
    : '';

    // Show "from rumors" indicator for target view
    const targetIndicator = selectedTarget && targetRep !== 0 
        ? `<span class="target-indicator" title="Impact from rumors involving this figure">📜</span>` 
        : '';
    const rumorBadge = (!factionData.faction.isFromStoryArc && factionData.faction.isFromRumors)
    ? `<span class="source-badge from-rumor" title="Discovered from ${factionData.faction.relatedRumorCount} rumor(s)">📜</span>`
    : '';

    return `
        <div class="faction-card ${repClass} ${isAutoGenerated ? 'auto-generated' : ''}" 
             data-faction="${key}"
             style="border-top-color: ${faction.color || 'var(--accent-color)'};">
            <div class="fc-header">
                <img src="${faction.logo || 'logos/default.png'}" alt="${faction.name}" class="fc-logo">
                <div class="fc-title-block">
<h4 class="fc-name">
    ${faction.icon || ''} ${faction.name}
    ${sourceBadge}${arcBadge}${rumorBadge}
    ${targetIndicator}
</h4>
                    <span class="fc-region">${faction.region || 'Unknown Region'}</span>
                </div>
                
                <div class="fc-rep-wrapper">
                    ${renderDirectoryInfamyBadge(infamyHeat, true)}
                    <div class="fc-rep-badge ${repClass}">
                        ${displayRep >= 0 ? '+' : ''}${displayRep}
                    </div>
                    <button class="fc-why-btn" data-why="${key}" title="View Breakdown">?</button>
                </div>
            </div>
            
            <div class="fc-rep-bar-container">
                <div class="fc-rep-bar">
                    <div class="fc-rep-fill ${repClass}" style="${barStyle}"></div>
                    <div class="fc-rep-center"></div>
                </div>
                <div class="fc-rep-labels">
                    <span>Hostile</span>
                    <span class="fc-rep-label">${repLabel}</span>
                    <span>Friendly</span>
                </div>
            </div>
            
            ${!selectedTarget ? `<p class="fc-assessment">"${assessmentSnippet}"</p>` : ''}
            
            <div class="fc-stats">
                <div class="fc-stat">
                    <span class="fc-stat-label">Intel</span>
                    <div class="fc-stat-bar">
                        <div class="fc-stat-fill intel" style="width: ${intel}%;"></div>
                    </div>
                    <span class="fc-stat-value">${intel}%</span>
                </div>
                ${!selectedTarget ? `
                    <div class="fc-stat">
                        <span class="fc-stat-label">Notoriety</span>
                        <div class="fc-stat-bar">
                            <div class="fc-stat-fill notoriety" style="width: ${notoriety}%;"></div>
                        </div>
                        <span class="fc-stat-value">${notoriety}%</span>
                    </div>
                    <div class="fc-stat">
                        <span class="fc-stat-label">Infamy Heat</span>
                        <div class="fc-stat-bar">
                            <div class="fc-stat-fill infamy ${getInfamyClass(infamyHeat)}" style="width: ${infamyHeat}%;"></div>
                        </div>
                        <span class="fc-stat-value">${infamyHeat}%</span>
                    </div>
                ` : ''}
            </div>
            <p class="fc-infamy-access">${getInfamyAccessText(infamyHeat, displayRep)}</p>
            
            <div class="fc-footer">
                ${playerIndicators ? `<div class="fc-party-reps">${playerIndicators}</div>` : '<div></div>'}
                <button class="fc-details-btn" data-faction="${key}">View Details →</button>
            </div>
        </div>
    `;
}

// ============================================
// UPDATED STANDING SUMMARY
// ============================================

function getStandingSummary() {
    const factions = getFilteredFactions();
    
    let friendly = 0, neutral = 0, hostile = 0;
    
    factions.forEach(f => {
        let rep;
        if (selectedTarget) {
            rep = f.targetRep;
        } else if (selectedPlayer) {
            rep = f.playerReps[selectedPlayer];
        } else {
            rep = f.partyRep;
        }
        
        if (rep >= 50) friendly++;
        else if (rep <= -50) hostile++;
        else neutral++;
    });
    
    return { friendly, neutral, hostile, total: factions.length };
}

// ============================================
// MAIN RENDER - Updated
// ============================================

// ============================================
// UPDATED EVENT LISTENERS
// ============================================

// ============================================
// STATE
// ============================================



/**
 * Extract the primary region for a faction based on where most of their POIs are located
 */
function extractRegionFromPOIs(factionId, mapStats) {
    if (!mapStats.regions) return null;
    
    let maxPois = 0;
    let primaryRegion = null;
    
    mapStats.regions.forEach(region => {
        const factionPois = (region.pois || []).filter(poi => 
            toSystemId(poi.factionId || poi.controller) === factionId
        ).length;
        
        if (factionPois > maxPois) {
            maxPois = factionPois;
            primaryRegion = region.name;
        }
    });
    
    return primaryRegion;
}

// ============================================
// DATA FUNCTIONS
// ============================================

function getPartyAverageReputation(factionKey) {
    let total = 0;
    state.party.forEach(playerKey => {
        total += getReputation(playerKey, factionKey);
    });
    return Math.round(total / state.party.length);
}

function getPlayerReputation(playerKey, factionKey) {
    if (state.finalReputations && state.finalReputations[playerKey]) {
        return state.finalReputations[playerKey].reputation[factionKey] || 0;
    }
    return getReputation(playerKey, factionKey);
}

function getPlayerNotoriety(playerKey, factionKey) {
    if (state.finalReputations && state.finalReputations[playerKey]) {
        return state.finalReputations[playerKey].notoriety[factionKey] || 0;
    }
    return 0;
}

function getFactionAssessment(factionKey, playerKey) {
    if (FACTION_ASSESSMENTS[factionKey] && FACTION_ASSESSMENTS[factionKey][playerKey]) {
        return FACTION_ASSESSMENTS[factionKey][playerKey];
    }
    return null;
}

function getReputationClass(rep) {
    if (rep >= 50) return 'friendly';
    if (rep >= 20) return 'warm';
    if (rep > -20) return 'neutral';
    if (rep > -50) return 'cold';
    return 'hostile';
}

function getReputationLabel(rep) {
    if (rep >= 75) return 'Allied';
    if (rep >= 50) return 'Friendly';
    if (rep >= 20) return 'Warm';
    if (rep > -20) return 'Neutral';
    if (rep > -50) return 'Cold';
    if (rep > -75) return 'Hostile';
    return 'Enemy';
}



function getUniqueRegions() {
    const allFactions = getUnifiedFactionList();
    const regions = new Set();
    allFactions.forEach(f => {
        if (f.region && f.region !== 'Unknown') regions.add(f.region);
    });
    return [...regions].sort();
}



function getRecentRumors(count = 5) {
    if (!LORE_DATA.rumors) return [];
    
    return [...LORE_DATA.rumors]
        .sort((a, b) => {
            const dateA = new Date(a.date.year, a.date.monthIndex, a.date.day);
            const dateB = new Date(b.date.year, b.date.monthIndex, b.date.day);
            return dateB - dateA;
        })
        .slice(0, count);
}

// ============================================
// CALCULATIONS FOR MODAL
// ============================================
function getReputationFactors(factionKey) {
    const targetPlayer = (selectedPlayer && selectedPlayer !== 'generic') 
        ? selectedPlayer 
        : state.party[0];

    const factors = [];
    const breakdown = state.calculationBreakdown?.[targetPlayer]?.[factionKey];

    if (breakdown) {
        const localNotoriety = getPlayerNotoriety(targetPlayer, factionKey);
        if (localNotoriety) {
            factors.push({
                source: 'Notoriety',
                text: 'Local name recognition changes how strongly this standing is felt. This is not approval; it is visibility.',
                impact: localNotoriety >= 50 ? 'negative' : 'positive',
                value: localNotoriety
            });
        }
        if (breakdown.base !== 0) {
            factors.push({
                source: 'History',
                text: 'Base Reputation',
                impact: breakdown.base >= 0 ? 'positive' : 'negative',
                value: breakdown.base
            });
        }

        if (breakdown.rumors && breakdown.rumors.length > 0) {
            breakdown.rumors.forEach(r => {
                factors.push({
                    source: 'Rumor',
                    text: r.title,
                    impact: r.value >= 0 ? 'positive' : 'negative',
                    value: r.value
                });
            });
        }

        // NEW: Quest reputation contributions
        if (breakdown.quests && breakdown.quests.length > 0) {
            breakdown.quests.forEach(q => {
                factors.push({
                    source: 'Quest',
                    text: `Quest Reward${q.questTitle ? ': ' + q.questTitle : ''} (scaled from ${q.rawTotal || '?'})`,
                    impact: q.value >= 0 ? 'positive' : 'negative',
                    value: q.value
                });
            });
        }

        if (breakdown.propagation && breakdown.propagation.length > 0) {
            breakdown.propagation.forEach(p => {
                const sourceFaction = getUnifiedFaction(p.source);
                const sourceName = sourceFaction?.name || p.source;
                factors.push({
                    source: 'Relations',
                    text: `Influence from ${sourceName}`,
                    impact: p.value >= 0 ? 'positive' : 'negative',
                    value: Math.round(p.value)
                });
            });
        }
    } else {
        const rep = getReputation(targetPlayer, factionKey);
        factors.push({
            source: 'Unknown',
            text: 'General diplomatic relations',
            impact: rep >= 0 ? 'positive' : 'negative',
            value: rep
        });
    }

    return factors;
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderPartyStatsBar() {
    const container = document.getElementById('party-stats-bar');
    if (!container) return;
    
    const summary = getStandingSummary();
    const factions = getFilteredFactions();
    
    const totalIntel = factions.reduce((sum, f) => sum + f.intel, 0);
    const avgIntel = factions.length > 0 ? Math.round(totalIntel / factions.length) : 0;
    
    // Count auto-generated vs predefined
    const autoCount = factions.filter(f => f.isAutoGenerated).length;
    const predefinedCount = factions.length - autoCount;
    
    container.innerHTML = `
        <div class="pstat-item">
            <span class="pstat-icon">🏴</span>
            <span class="pstat-value">${summary.total}</span>
            <span class="pstat-label">Known Factions</span>
        </div>
        <div class="pstat-item friendly">
            <span class="pstat-icon">💚</span>
            <span class="pstat-value">${summary.friendly}</span>
            <span class="pstat-label">Friendly</span>
        </div>
        <div class="pstat-item neutral">
            <span class="pstat-icon">💛</span>
            <span class="pstat-value">${summary.neutral}</span>
            <span class="pstat-label">Neutral</span>
        </div>
        <div class="pstat-item hostile">
            <span class="pstat-icon">❤️</span>
            <span class="pstat-value">${summary.hostile}</span>
            <span class="pstat-label">Hostile</span>
        </div>
        <div class="pstat-item">
            <span class="pstat-icon">🔍</span>
            <span class="pstat-value">${avgIntel}%</span>
            <span class="pstat-label">Avg Intel</span>
        </div>
        <div class="pstat-item infamy ${getInfamyClass(getDirectoryInfamyState()?.global?.score || 0)}">
            <span class="pstat-icon">🚨</span>
            <span class="pstat-value">${Math.round(getDirectoryInfamyState()?.global?.score || 0)}</span>
            <span class="pstat-label">Heat Index</span>
        </div>

    `;
}



function renderStandingSummary() {
    const container = document.getElementById('standing-summary-content');
    if (!container) return;
    
    const summary = getStandingSummary();
    const total = summary.total || 1;
    
    const friendlyPct = (summary.friendly / total) * 100;
    const neutralPct = (summary.neutral / total) * 100;
    const hostilePct = (summary.hostile / total) * 100;

    container.innerHTML = `
        <div class="standing-bar">
            <div class="standing-segment friendly" style="width: ${friendlyPct}%;" title="${summary.friendly} Friendly"></div>
            <div class="standing-segment neutral" style="width: ${neutralPct}%;" title="${summary.neutral} Neutral"></div>
            <div class="standing-segment hostile" style="width: ${hostilePct}%;" title="${summary.hostile} Hostile"></div>
        </div>
        <div class="standing-legend">
            <span class="legend-item"><span class="legend-dot friendly"></span> ${summary.friendly} Friendly (${Math.round(friendlyPct)}%)</span>
            <span class="legend-item"><span class="legend-dot neutral"></span> ${summary.neutral} Neutral (${Math.round(neutralPct)}%)</span>
            <span class="legend-item"><span class="legend-dot hostile"></span> ${summary.hostile} Hostile (${Math.round(hostilePct)}%)</span>
        </div>
    `;
}

function renderRecentEvents() {
    const container = document.getElementById('recent-events-list');
    if (!container) return;
    
    const rumors = getRecentRumors(5);
    
    if (rumors.length === 0) {
        container.innerHTML = '<p class="no-events">No recent events</p>';
        return;
    }
    
    container.innerHTML = rumors.map(rumor => `
        <div class="recent-event-item">
            <span class="event-date">${rumor.date.day}/${rumor.date.monthIndex + 1}</span>
            <span class="event-title">${rumor.title}</span>
        </div>
    `).join('');
}

function renderRegionFilter() {
    const select = document.getElementById('region-filter');
    if (!select) return;
    
    const regions = getUniqueRegions();
    select.innerHTML = `
        <option value="all">All Regions (${regions.length})</option>
        ${regions.map(r => `<option value="${r}" ${currentFilters.region === r ? 'selected' : ''}>${r}</option>`).join('')}
    `;
}


function renderWhyModal(factionKey) {
    const faction = getUnifiedFaction(factionKey);
    if (!faction) return;
    
    const factors = getReputationFactors(factionKey);
    const targetPlayer = (selectedPlayer && selectedPlayer !== 'generic') ? selectedPlayer : state.party[0];
    const totalRep = getReputation(targetPlayer, factionKey);
    const playerData = LORE_DATA.characters[targetPlayer];
    
    // Get intel breakdown
    const intelBreakdown = getIntelBreakdown(factionKey);
    
    let modal = document.getElementById('why-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'why-modal';
        modal.className = 'faction-modal-overlay';
        document.body.appendChild(modal);
    }

    const html = `
        <div class="faction-modal why-modal">
            <button class="modal-close" id="why-close-btn">✕</button>
            
            <!-- Header -->
            <div class="why-modal-header">
                <img src="${faction.logo || 'logos/default.png'}" class="why-modal-logo" alt="${faction.name}">
                <div class="why-modal-title">
                    <h3>${faction.icon || ''} ${faction.name}</h3>
                    <span class="why-modal-region">${faction.region || 'Unknown Region'}</span>
                </div>
            </div>
            
            <!-- Tab Navigation -->
            <div class="why-tabs">
                <button class="why-tab-btn active" data-tab="reputation">
                    <span class="why-tab-icon">💬</span>
                    Reputation
                </button>
                <button class="why-tab-btn" data-tab="intel">
                    <span class="why-tab-icon">🔍</span>
                    Intel
                </button>
                <button class="why-tab-btn" data-tab="infamy">
                    <span class="why-tab-icon">🚨</span>
                    Infamy
                </button>
            </div>
            
            <!-- Reputation Tab -->
            <div class="why-tab-content active" id="why-tab-reputation">
                <div class="why-section-header">
                    <div class="why-section-title">
                        <h4>Reputation Breakdown</h4>
                        <span class="why-section-subtitle">How ${playerData?.name || targetPlayer} is viewed</span>
                    </div>
                    <div class="why-total-badge ${getReputationClass(totalRep)}">
                        ${totalRep >= 0 ? '+' : ''}${totalRep}
                    </div>
                </div>
                
                <div class="why-list">
                    ${factors.map(f => `
                        <div class="why-item ${f.impact}">
                            <div class="why-icon">${f.impact === 'negative' ? '📉' : '📈'}</div>
                            <div class="why-content">
                                <span class="why-text">${f.text}</span>
                                <span class="why-source">${f.source}</span>
                            </div>
                            <span class="why-value ${f.value >= 0 ? 'positive' : 'negative'}">
                                ${f.value >= 0 ? '+' : ''}${f.value}
                            </span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="why-footer">
                    <div class="why-footer-label">Standing</div>
                    <div class="why-footer-value">
                        <span class="why-standing-label ${getReputationClass(totalRep)}">${getReputationLabel(totalRep)}</span>
                        <span class="why-standing-player">for ${playerData?.name || targetPlayer}</span>
                    </div>
                </div>
            </div>
            
            <!-- Intel Tab -->
            <div class="why-tab-content" id="why-tab-intel">
                <div class="why-section-header">
                    <div class="why-section-title">
                        <h4>Intel Breakdown</h4>
                        <span class="why-section-subtitle">What you know about this faction</span>
                    </div>
                    <div class="why-total-badge intel">
                        ${intelBreakdown.total}%
                    </div>
                </div>
                
                <div class="intel-visual-bar">
                    <div class="intel-bar-track">
                        <div class="intel-bar-fill" style="width: ${intelBreakdown.total}%;"></div>
                        <div class="intel-bar-markers">
                            <span class="intel-marker" style="left: 25%;" title="Basic Info">25%</span>
                            <span class="intel-marker" style="left: 50%;" title="Detailed Info">50%</span>
                            <span class="intel-marker" style="left: 75%;" title="Deep Intel">75%</span>
                        </div>
                    </div>
                    <div class="intel-bar-labels">
                        <span>Unknown</span>
                        <span>Full Intel</span>
                    </div>
                </div>
                
                <div class="why-list">
                    <!-- Base Intel -->
                    <div class="why-item ${intelBreakdown.base > 0 ? 'positive' : 'neutral'}">
                        <div class="why-icon">📚</div>
                        <div class="why-content">
                            <span class="why-text">Base Knowledge</span>
                            <span class="why-source">From encounters, POIs, and known information</span>
                        </div>
                        <span class="why-value ${intelBreakdown.base > 0 ? 'positive' : 'neutral'}">
                            ${intelBreakdown.base > 0 ? '+' : ''}${intelBreakdown.base}%
                        </span>
                    </div>
                    
                    <!-- History Modifier -->
                    <div class="why-item ${intelBreakdown.history > 0 ? 'positive' : intelBreakdown.history < 0 ? 'negative' : 'neutral'}">
                        <div class="why-icon">${intelBreakdown.history >= 0 ? '📈' : '📉'}</div>
                        <div class="why-content">
                            <span class="why-text">Relationship History</span>
                            <span class="why-source">${getHistoryDescription(intelBreakdown.history, factionKey)}</span>
                        </div>
                        <span class="why-value ${intelBreakdown.history >= 0 ? 'positive' : 'negative'}">
                            ${intelBreakdown.history >= 0 ? '+' : ''}${intelBreakdown.history}%
                        </span>
                    </div>
                    
                    <!-- Decay -->
                    ${intelBreakdown.decay !== 0 ? `
                        <div class="why-item negative">
                            <div class="why-icon">⏳</div>
                            <div class="why-content">
                                <span class="why-text">Information Decay</span>
                                <span class="why-source">${getDecayDescription(factionKey)}</span>
                            </div>
                            <span class="why-value negative">
                                ${intelBreakdown.decay}%
                            </span>
                        </div>
                    ` : ''}
                    
                    <!-- Active Chatter -->
                    <div class="why-item ${intelBreakdown.active > 0 ? 'positive' : 'neutral'}">
                        <div class="why-icon">${intelBreakdown.active > 0 ? '💬' : '🔇'}</div>
                        <div class="why-content">
                            <span class="why-text">Active Chatter</span>
                            <span class="why-source">${getActiveChatterDescription(intelBreakdown.active, factionKey)}</span>
                        </div>
                        <span class="why-value ${intelBreakdown.active > 0 ? 'positive' : 'neutral'}">
                            ${intelBreakdown.active > 0 ? '+' : ''}${intelBreakdown.active}%
                        </span>
                    </div>
                </div>
                
                <!-- Intel Unlocks -->
                <div class="intel-unlocks">
                    <h5 class="intel-unlocks-title">Intel Unlocks</h5>
                    <div class="intel-unlock-list">
                        ${renderIntelUnlocks(intelBreakdown.total)}
                    </div>
                </div>
                
                <div class="why-footer">
                    <div class="why-footer-label">Intel Status</div>
                    <div class="why-footer-value">
                        <span class="why-intel-status ${getIntelStatusClass(intelBreakdown.total)}">${getIntelStatusLabel(intelBreakdown.total)}</span>
                        <span class="why-intel-trend">${getIntelTrend(intelBreakdown)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.innerHTML = html;
    modal.classList.add('visible');

    // Tab switching
    const tabBtns = modal.querySelectorAll('.why-tab-btn');
    const tabContents = modal.querySelectorAll('.why-tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            playSound('click.mp3', 0.3);
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const tabId = btn.dataset.tab;
            tabContents.forEach(content => {
                content.classList.toggle('active', content.id === `why-tab-${tabId}`);
            });
        });
    });

    // Close handlers
    document.getElementById('why-close-btn').onclick = () => {
        playSound('click.mp3', 0.3);
        modal.classList.remove('visible');
    };
    
    modal.onclick = (e) => { 
        if (e.target === modal) {
            modal.classList.remove('visible');
        }
    };
}
function renderIntelUnlocks(intelLevel) {
    const unlocks = [
        { threshold: 10, label: 'Basic Info', icon: '📋', desc: 'Name and region' },
        { threshold: 25, label: 'Notable People', icon: '👤', desc: 'Key figures revealed' },
        { threshold: 40, label: 'Assessments', icon: '💭', desc: 'Personal opinions visible' },
        { threshold: 50, label: 'Relations', icon: '🤝', desc: 'Allies and enemies known' },
        { threshold: 60, label: 'Deep Intel', icon: '🔮', desc: 'Detailed descriptions' },
        { threshold: 75, label: 'Secrets', icon: '🗝️', desc: 'Hidden information' },
        { threshold: 90, label: 'Full Dossier', icon: '📖', desc: 'Complete knowledge' }
    ];
    
    return unlocks.map(unlock => {
        const isUnlocked = intelLevel >= unlock.threshold;
        const isNext = !isUnlocked && intelLevel >= unlock.threshold - 15;
        
        return `
            <div class="intel-unlock-item ${isUnlocked ? 'unlocked' : ''} ${isNext ? 'next' : ''}">
                <div class="intel-unlock-icon">${isUnlocked ? unlock.icon : '🔒'}</div>
                <div class="intel-unlock-info">
                    <span class="intel-unlock-label">${unlock.label}</span>
                    <span class="intel-unlock-threshold">${unlock.threshold}%</span>
                </div>
                ${isNext ? `<span class="intel-unlock-needed">Need ${unlock.threshold - intelLevel}% more</span>` : ''}
            </div>
        `;
    }).join('');
}
function getIntelStatusClass(intel) {
    if (intel >= 75) return 'excellent';
    if (intel >= 50) return 'good';
    if (intel >= 25) return 'moderate';
    return 'poor';
}

/**
 * Get intel status label
 */
function getIntelStatusLabel(intel) {
    if (intel >= 90) return 'Full Dossier';
    if (intel >= 75) return 'Well Informed';
    if (intel >= 50) return 'Moderate Intel';
    if (intel >= 25) return 'Basic Knowledge';
    if (intel >= 10) return 'Minimal Intel';
    return 'Unknown';
}

/**
 * Get intel trend indicator
 */
function getIntelTrend(breakdown) {
    const trend = breakdown.active + breakdown.decay;
    
    if (trend > 5) return '📈 Increasing';
    if (trend < -5) return '📉 Decreasing';
    return '➡️ Stable';
}
function getHistoryDescription(historyValue, factionKey) {
    const historyData = state.factionHistory?.[factionKey];
    
    if (!historyData || historyValue === 0) {
        return 'No established relationship history yet';
    }
    
    const days = historyData.consecutiveDays || 0;
    const direction = historyData.isPositive ? 'positive' : 'negative';
    
    if (days === 1) {
        return `1 day of ${direction} standing`;
    }
    
    return `${days} consecutive days of ${direction} standing`;
}
function getDecayDescription(factionKey) {
    const lastActive = state.factionChatterLastActive?.[factionKey];
    
    if (!lastActive) {
        return 'No recent information flow';
    }
    
    const daysSince = getDaysBetween(lastActive, CURRENT_GAME_DATE);
    
    if (daysSince === 1) {
        return 'Information going stale (1 day since last update)';
    }
    
    return `Information going stale (${daysSince} days since last update)`;
}
function getActiveChatterDescription(activeValue, factionKey) {
    if (activeValue === 0) {
        return 'No current rumors or news about this faction';
    }
    
    // Count active rumors involving this faction
    let activeRumorCount = 0;
    if (LORE_DATA && LORE_DATA.rumors) {
        LORE_DATA.rumors.forEach(rumor => {
            const isAffected = rumor.effects && rumor.effects[factionKey] !== undefined;
            const isTarget = rumor.targets && rumor.targets.includes(factionKey);
            
            if (isAffected || isTarget) {
                const relatedPosts = WAHBOOK_POSTS.filter(p => p.rumorId === rumor.id);
                const metrics = calculateRumorMetrics(rumor, relatedPosts);
                
                if (metrics.status !== 'Dead' && metrics.status !== 'Old News') {
                    activeRumorCount++;
                }
            }
        });
    }
    
    if (activeRumorCount === 1) {
        return '1 active rumor providing fresh intel';
    }
    
    return `${activeRumorCount} active rumors providing fresh intel`;
}


function renderPlayerView() {
    const container = document.getElementById('view-container');
    if (!container) return;
    
    const player = LORE_DATA.characters[selectedPlayer];
    const factions = getFilteredFactions();
    
    const friendly = factions.filter(f => f.playerReps[selectedPlayer] >= 50);
    const warm = factions.filter(f => f.playerReps[selectedPlayer] >= 20 && f.playerReps[selectedPlayer] < 50);
    const neutral = factions.filter(f => f.playerReps[selectedPlayer] > -20 && f.playerReps[selectedPlayer] < 20);
    const cold = factions.filter(f => f.playerReps[selectedPlayer] <= -20 && f.playerReps[selectedPlayer] > -50);
    const hostile = factions.filter(f => f.playerReps[selectedPlayer] <= -50);
    
    container.innerHTML = `
        <div class="player-view">
            <div class="pv-header">
                <img src="${player?.portrait || 'portraits/unknown.png'}" alt="${player?.name}" class="pv-portrait">
                <div class="pv-info">
                    <h3 class="pv-name">${player?.name || selectedPlayer}</h3>
                    <p class="pv-title">${player?.title || 'Party Member'}</p>
                </div>
                <div class="pv-summary">
                    <div class="pv-stat"><span class="pv-stat-value">${friendly.length}</span><span class="pv-stat-label">Allies</span></div>
                    <div class="pv-stat"><span class="pv-stat-value">${hostile.length}</span><span class="pv-stat-label">Enemies</span></div>
                    <div class="pv-stat"><span class="pv-stat-value">${neutral.length + warm.length + cold.length}</span><span class="pv-stat-label">Neutral</span></div>
                </div>
            </div>
            
            ${renderPlayerStandingSection('💚 Friendly Factions', friendly, selectedPlayer, 'friendly')}
            ${renderPlayerStandingSection('💛 Warm Relations', warm, selectedPlayer, 'warm')}
            ${renderPlayerStandingSection('⚪ Neutral', neutral, selectedPlayer, 'neutral')}
            ${renderPlayerStandingSection('🧊 Cold Relations', cold, selectedPlayer, 'cold')}
            ${renderPlayerStandingSection('❤️ Hostile Factions', hostile, selectedPlayer, 'hostile')}
        </div>
    `;
}

function renderPlayerStandingSection(title, factions, playerKey, className) {
    if (factions.length === 0) return '';
    
    return `
        <div class="pv-section ${className}">
            <h4 class="pv-section-title">${title} (${factions.length})</h4>
            <div class="pv-faction-list">
                ${factions.map(f => {
                    const rep = f.playerReps[playerKey];
                    const assessment = getFactionAssessment(f.key, playerKey);
                    
                    return `
                        <div class="pv-faction-item ${f.isAutoGenerated ? 'auto-generated' : ''}" data-faction="${f.key}">
                            <img src="${f.faction.logo || 'logos/default.png'}" alt="${f.faction.name}" class="pv-faction-logo">
                            <div class="pv-faction-info">
                                <span class="pv-faction-name">
                                    ${f.faction.icon || ''} ${f.faction.name}
                                    ${f.isAutoGenerated ? '<span class="source-badge-small">POI</span>' : ''}
                                </span>
                                <span class="pv-faction-region">${f.region}</span>
                            </div>
                            <div class="pv-faction-rep ${getReputationClass(rep)}">
                                ${rep >= 0 ? '+' : ''}${rep}
                            </div>
                            ${assessment ? `<p class="pv-faction-assessment">"${assessment.substring(0, 80)}..."</p>` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderStandingsMatrix() {
    const container = document.getElementById('view-container');
    if (!container) return;
    
    const factions = getFilteredFactions().slice(0, 25);
    
    container.innerHTML = `
        <div class="standings-matrix">
            <h3 class="matrix-title">📈 Party Standing Matrix</h3>
            <p class="matrix-desc">How each party member stands with each faction</p>
            
            <div class="matrix-container">
                <table class="matrix-table">
                    <thead>
                        <tr>
                            <th class="matrix-corner">Faction</th>
                            ${state.party.map(p => {
                                const char = LORE_DATA.characters[p];
                                return `<th class="matrix-player-header">
                                    <img src="${char?.portrait || 'portraits/unknown.png'}" alt="${char?.name}" class="matrix-portrait">
                                    <span>${char?.name?.split(' ')[0] || p}</span>
                                </th>`;
                            }).join('')}
                            <th class="matrix-player-header">
                                <span>👥 Party</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        ${factions.map(f => `
                            <tr class="matrix-row ${f.isAutoGenerated ? 'auto-row' : ''}" data-faction="${f.key}">
                                <td class="matrix-faction-cell">
                                    <img src="${f.faction.logo || 'logos/default.png'}" alt="${f.faction.name}" class="matrix-faction-logo">
                                    <span>${f.faction.icon || ''} ${f.faction.name}</span>
                                    ${f.isAutoGenerated ? '<span class="source-badge-tiny">POI</span>' : ''}
                                </td>
                                ${state.party.map(p => {
                                    const rep = f.playerReps[p];
                                    const cls = getReputationClass(rep);
                                    return `<td class="matrix-rep-cell ${cls}">${rep >= 0 ? '+' : ''}${rep}</td>`;
                                }).join('')}
                                <td class="matrix-rep-cell ${getReputationClass(f.partyRep)}">${f.partyRep >= 0 ? '+' : ''}${f.partyRep}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="matrix-legend">
                <span class="legend-item"><span class="legend-dot friendly"></span> 50+ Friendly</span>
                <span class="legend-item"><span class="legend-dot warm"></span> 20-49 Warm</span>
                <span class="legend-item"><span class="legend-dot neutral"></span> -19 to 19 Neutral</span>
                <span class="legend-item"><span class="legend-dot cold"></span> -20 to -49 Cold</span>
                <span class="legend-item"><span class="legend-dot hostile"></span> -50- Hostile</span>
            </div>
        </div>
    `;
}

function renderIntelReport() {
    const container = document.getElementById('view-container');
    if (!container) return;
    
    const factions = getFilteredFactions().sort((a, b) => b.intel - a.intel);
    
    container.innerHTML = `
        <div class="intel-report">
            <h3 class="intel-title">🔍 Intelligence Report</h3>
            <p class="intel-desc">Current intelligence levels on known factions</p>
            
            <div class="intel-list">
                ${factions.map(f => {
                    const breakdown = getIntelBreakdown(f.key);
                    
                    return `
                        <div class="intel-item ${f.isAutoGenerated ? 'auto-generated' : ''}" data-faction="${f.key}">
                            <div class="intel-item-header">
                                <img src="${f.faction.logo || 'logos/default.png'}" alt="${f.faction.name}" class="intel-logo">
                                <div class="intel-item-info">
                                    <span class="intel-item-name">
                                        ${f.faction.icon || ''} ${f.faction.name}
                                        ${f.isAutoGenerated ? '<span class="source-badge-small">Discovered</span>' : ''}
                                    </span>
                                    <span class="intel-item-region">${f.region}</span>
                                </div>
                                <div class="intel-level">
                                    <span class="intel-value">${f.intel}%</span>
                                </div>
                            </div>
                            <div class="intel-bar">
                                <div class="intel-bar-fill" style="width: ${f.intel}%;"></div>
                            </div>
                            <div class="intel-breakdown">
                                <span>Base: ${breakdown.base}</span>
                                <span>History: +${breakdown.history}</span>
                                <span class="intel-active">Active: +${breakdown.active}</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderFactionDetailModal(factionKey) {
    const faction = getUnifiedFaction(factionKey);
    if (!faction) return;
    
    const intel = getIntelForFaction(factionKey);
    const isDebug = state.debugMode;
    
    const content = document.getElementById('faction-modal-content');
    if (!content) return;
    
    // Build player assessments section
    const assessmentsHTML = state.party.map(playerKey => {
        const player = LORE_DATA.characters[playerKey];
        const rep = getPlayerReputation(playerKey, factionKey);
        const notoriety = getPlayerNotoriety(playerKey, factionKey);
        const assessment = getFactionAssessment(factionKey, playerKey);
        const repClass = getReputationClass(rep);
        
        return `
            <div class="modal-player-assessment">
                <div class="mpa-header">
                    <img src="${player?.portrait || 'portraits/unknown.png'}" alt="${player?.name}" class="mpa-portrait">
                    <div class="mpa-info">
                        <span class="mpa-name">${player?.name || playerKey}</span>
                        <div class="mpa-stats">
                            <span class="mpa-rep ${repClass}">Rep: ${rep >= 0 ? '+' : ''}${rep}</span>
                            <span class="mpa-notoriety">Notoriety: ${notoriety}</span>
                        </div>
                    </div>
                </div>
                ${assessment && (intel >= 40 || isDebug) ? `
                    <div class="mpa-assessment">
                        <p>"${assessment}"</p>
                    </div>
                ` : `
                    <div class="mpa-assessment locked">
                        <p>🔒 Requires ${40 - intel}% more intel to view assessment</p>
                    </div>
                `}
            </div>
        `;
    }).join('');
    
    // Notable people section
    let notablePeopleHTML = '';
    if ((intel >= 25 || isDebug) && faction.notable_people && faction.notable_people.length > 0) {
        notablePeopleHTML = `
            <div class="modal-section">
                <h4>Notable People</h4>
                <div class="modal-people-grid">
                    ${faction.notable_people.map(person => `
                        <div class="modal-person">
                            <strong>${person.name}</strong>
                            <span class="person-role">${person.role}</span>
                            ${intel >= 60 || isDebug ? `<p class="person-desc">${person.description}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Relations section
    let relationsHTML = '';
    if ((intel >= 50 || isDebug) && faction.relations) {
        const allies = faction.relations.allies || [];
        const enemies = faction.relations.enemies || [];
        
        if (allies.length > 0 || enemies.length > 0) {
            relationsHTML = `
                <div class="modal-section">
                    <h4>Known Relations</h4>
                    <div class="modal-relations">
                        ${allies.length > 0 ? `
                            <div class="modal-relation-group">
                                <span class="relation-label">🤝 Allies:</span>
                                ${allies.map(a => {
                                    const allyFaction = getUnifiedFaction(a);
                                    return allyFaction ? `<span class="relation-tag ally">${allyFaction.name}</span>` : '';
                                }).join('')}
                            </div>
                        ` : ''}
                        ${enemies.length > 0 ? `
                            <div class="modal-relation-group">
                                <span class="relation-label">⚔️ Enemies:</span>
                                ${enemies.map(e => {
                                    const enemyFaction = getUnifiedFaction(e);
                                    return enemyFaction ? `<span class="relation-tag enemy">${enemyFaction.name}</span>` : '';
                                }).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }
    }
    
    // POI presence section for factions with territorial data
    let poiPresenceHTML = '';
    if (faction.poiCount > 0 || faction.military > 0 || faction.economic > 0) {
        poiPresenceHTML = `
            <div class="modal-section">
                <h4>Territorial Presence</h4>
                <div class="modal-poi-stats">
                    <div class="poi-stat-card">
                        <span class="poi-stat-value">⚔️ ${faction.military}</span>
                        <span class="poi-stat-label">Military Strength</span>
                    </div>
                    <div class="poi-stat-card">
                        <span class="poi-stat-value">💰 ${faction.economic}</span>
                        <span class="poi-stat-label">Economic Value</span>
                    </div>
                    <div class="poi-stat-card">
                        <span class="poi-stat-value">🏛️ ${faction.political}</span>
                        <span class="poi-stat-label">Political Influence</span>
                    </div>
                    <div class="poi-stat-card">
                        <span class="poi-stat-value">📍 ${faction.poiCount}</span>
                        <span class="poi-stat-label">Controlled POIs</span>
                    </div>
                    <div class="poi-stat-card">
                        <span class="poi-stat-value">🌍 ${faction.activeRegions}</span>
                        <span class="poi-stat-label">Active Regions</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Source badge
    const sourceBadge = faction.isAutoGenerated 
        ? '<span class="source-badge from-poi"></span>'
        : '<span class="source-badge from-lore"></span>';
    
    content.innerHTML = `
        <div class="modal-header" style="border-color: ${faction.color || 'var(--accent-color)'};">
            <img src="${faction.logo || 'logos/default.png'}" alt="${faction.name}" class="modal-logo">
            <div class="modal-title-block">
                <h2>${faction.icon || ''} ${faction.name} ${sourceBadge}</h2>
                <span class="modal-region">${faction.region || 'Unknown Region'}</span>
            </div>
        </div>
        
        <div class="modal-intel-bar">
            <span class="modal-intel-label">Intel Level: ${intel}%</span>
            <div class="modal-intel-track">
                <div class="modal-intel-fill" style="width: ${intel}%;"></div>
            </div>
        </div>
        
        <div class="modal-section">
            <h4>Description</h4>
            <p class="modal-description">${faction.description || 'No description available.'}</p>
        </div>
        
        ${poiPresenceHTML}
        
        <div class="modal-section">
            <h4>Party Standings & Assessments</h4>
            <div class="modal-assessments">
                ${assessmentsHTML}
            </div>
        </div>
        
        ${notablePeopleHTML}
        ${relationsHTML}
    `;
    
    const modal = document.getElementById('faction-detail-modal');
    if (modal) {
        modal.classList.add('visible');
    }
}

// ============================================
// MAIN RENDER
// ============================================
function render() {
    refreshDirectoryInfamy();
    renderPartyStatsBar();
    renderPartyMemberList();
    renderNotableFigures(); // NEW
    renderStandingSummary();
    renderRecentEvents();
    renderInfamyWatchSidebar();
    renderRegionFilter();
    renderFiltersWithToggle(); // NEW
    
    switch (currentView) {
        case 'player':
            renderPlayerView();
            break;
        case 'standings':
            renderStandingsMatrix();
            break;
        case 'intel':
            renderIntelReport();
            break;
        case 'infamy':
            renderInfamyReport();
            break;
        default:
            renderGridView();
    }
}


// ============================================
// HASH ROUTING
// ============================================

function handleHashRoute() {
    const hash = window.location.hash;
    if (hash.startsWith('#faction/')) {
        const factionKey = hash.replace('#faction/', '');
        const faction = getUnifiedFaction(factionKey);
        if (faction) {
            renderFactionDetailModal(factionKey);
        }
    }
}

// ============================================
// EVENT LISTENERS
// ============================================


// ============================================
// INITIALIZATION
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

//
// ============================================
// STATE - Add cache
// ============================================


// ============================================

/**
 * Gets a unified list of factions - WITH CACHING to prevent infinite loops
 */
function getUnifiedFactionList() {
    const now = Date.now();
    
    if (_unifiedFactionCache && (now - _unifiedFactionCacheTime) < CACHE_DURATION) {
        return _unifiedFactionCache;
    }
    
    const predefinedFactions = LORE_DATA.factions || {};
    const registryFactions = getAllFactions();
    const mapStats = getRealTimeMapStats();
    
    const unifiedFactions = new Map();
    
    // Step 1: Add all predefined factions first
    Object.entries(predefinedFactions).forEach(([key, faction]) => {
        const registryId = toSystemId(key);
        const registryData = registryFactions[registryId] || {};
        const stats = mapStats.global?.[registryId] || {};
        
        unifiedFactions.set(key, {
            key,
            registryId,
            source: 'predefined',
            name: faction.name || registryData.name || key,
            description: faction.description || registryData.description || '',
            region: faction.region || 'Unknown',
            logo: faction.logo || 'logos/default.png',
            notable_people: faction.notable_people || [],
            relations: faction.relations || {},
            color: registryData.color || faction.color || '#888888',
            icon: registryData.icon || faction.icon || '🏴',
            shortName: registryData.shortName || faction.shortName || faction.name || key,
            leaderName: registryData.leaderName || faction.leaderName || 'Unknown',
            leaderTitle: registryData.leaderTitle || faction.leaderTitle || 'Leader',
            isAutoGenerated: false,
            military: stats.military || 0,
            economic: stats.economic || 0,
            political: stats.political || 0,
            population: stats.population || 0,
            poiCount: stats.poiCount || 0,
            activeRegions: stats.activeRegions || 0,
            controlledRegions: stats.controlledRegions || 0
        });
    });
    
    // Step 2: Add registry factions that don't have predefined templates
    Object.entries(registryFactions).forEach(([registryId, registryData]) => {
        if (registryId === 'unaligned') return;
        
        let alreadyExists = false;
        for (const [existingKey] of unifiedFactions) {
            if (existingKey === registryId || toSystemId(existingKey) === registryId) {
                alreadyExists = true;
                break;
            }
        }
        
        if (!alreadyExists) {
            const stats = mapStats.global?.[registryId] || {};
            
            const hasPresence = (stats.military || 0) > 0 || 
                               (stats.economic || 0) > 0 || 
                               (stats.poiCount || 0) > 0;
            
            if (hasPresence || registryData.isAutoGenerated === false) {
                unifiedFactions.set(registryId, {
                    key: registryId,
                    registryId,
                    source: registryData.isAutoGenerated ? 'poi-extracted' : 'registry',
                    name: registryData.name || registryId,
                    description: registryData.description || `A faction discovered through exploration.`,
                    region: registryData.region || extractRegionFromPOIs(registryId, mapStats) || 'Unknown',
                    logo: registryData.logo || 'logos/default.png',
                    notable_people: registryData.notable_people || [],
                    relations: registryData.relations || {},
                    color: registryData.color || '#888888',
                    icon: registryData.icon || '🏴',
                    shortName: registryData.shortName || registryData.name || registryId,
                    leaderName: registryData.leaderName || 'Unknown',
                    leaderTitle: registryData.leaderTitle || 'Leader',
                    isAutoGenerated: registryData.isAutoGenerated || false,
                    military: stats.military || 0,
                    economic: stats.economic || 0,
                    political: stats.political || 0,
                    population: stats.population || 0,
                    poiCount: stats.poiCount || 0,
                    activeRegions: stats.activeRegions || 0,
                    controlledRegions: stats.controlledRegions || 0
                });
            }
        }
    });
    
    // =============================================
    // Step 3: NEW — Add factions from STORY_ARCS keyFactions
    //         and from finalReputations that aren't yet listed
    // =============================================
    
    // 3a: Collect every faction key referenced by story arcs
    const arcReferencedFactions = new Set();
    if (STORY_ARCS) {
        for (const arcKey in STORY_ARCS) {
            const arc = STORY_ARCS[arcKey];
            if (arc.keyFactions) {
                arc.keyFactions.forEach(fk => arcReferencedFactions.add(fk));
            }
        }
    }
    
    // 3b: Collect factions referenced in rumor effects keys
    //     e.g. effects: { purple_legion: -10 } → purple_legion should exist
    if (LORE_DATA.rumors) {
        LORE_DATA.rumors.forEach(rumor => {
            if (rumor.effects) {
                Object.keys(rumor.effects).forEach(effectKey => {
                    // Skip known stat/modifier keys that aren't factions
                    if (isRumorStatKey(effectKey)) return;
                    arcReferencedFactions.add(effectKey);
                });
            }
            
            // Also check personal_impact keys for faction references
            if (rumor.personal_impact) {
                Object.values(rumor.personal_impact).forEach(playerEffects => {
                    if (playerEffects && typeof playerEffects === 'object') {
                        Object.keys(playerEffects).forEach(effectKey => {
                            if (isRumorStatKey(effectKey)) return;
                            arcReferencedFactions.add(effectKey);
                        });
                    }
                });
            }
        });
    }
    
    // 3c: Collect factions that appear in finalReputations
    //     (quest rewards may have injected new faction keys)
    if (state.finalReputations) {
        for (const playerKey in state.finalReputations) {
            const playerRep = state.finalReputations[playerKey]?.reputation;
            if (playerRep) {
                Object.keys(playerRep).forEach(fk => {
                    if (Math.abs(playerRep[fk]) >= 1) {
                        arcReferencedFactions.add(fk);
                    }
                });
            }
        }
    }
    
    // 3d: For each referenced faction, add it if it's not already in the unified list
    arcReferencedFactions.forEach(factionKey => {
        if (factionKey === 'unaligned') return;
        if (factionKey === 'party') return;
        
        const normalizedKey = toSystemId(factionKey);
        
        // Check if already present
        let alreadyExists = false;
        for (const [existingKey, existingData] of unifiedFactions) {
            if (existingKey === factionKey || 
                existingKey === normalizedKey || 
                existingData.registryId === factionKey ||
                existingData.registryId === normalizedKey) {
                alreadyExists = true;
                break;
            }
        }
        
        if (alreadyExists) return;
        
        // Try to get data from predefined factions, registry, or build a stub
        const predefined = predefinedFactions[factionKey] || predefinedFactions[normalizedKey];
        const registry = registryFactions[factionKey] || registryFactions[normalizedKey];
        const stats = mapStats.global?.[normalizedKey] || mapStats.global?.[factionKey] || {};
        
        // Determine which story arcs reference this faction
        const relatedArcs = [];
        if (STORY_ARCS) {
            for (const arcKey in STORY_ARCS) {
                const arc = STORY_ARCS[arcKey];
                if (arc.keyFactions && arc.keyFactions.includes(factionKey)) {
                    relatedArcs.push(arc);
                }
            }
        }
        
        // Determine which rumors reference this faction in their effects
        const relatedRumors = [];
        if (LORE_DATA.rumors) {
            LORE_DATA.rumors.forEach(rumor => {
                const inEffects = rumor.effects && rumor.effects[factionKey] !== undefined;
                const inPersonal = rumor.personal_impact && 
                    Object.values(rumor.personal_impact).some(pe => pe && pe[factionKey] !== undefined);
                
                if (inEffects || inPersonal) {
                    relatedRumors.push(rumor);
                }
            });
        }
        
        const arcNames = relatedArcs.map(a => a.name).join(', ');
        const rumorTitles = relatedRumors.slice(0, 3).map(r => r.title).join(', ');
        
        // Build description from available context
        let description = '';
        const source = predefined || registry || {};
        
        if (source.description) {
            description = source.description;
        } else if (relatedArcs.length > 0 && relatedRumors.length > 0) {
            description = `A faction encountered during: ${arcNames}. Referenced in ${relatedRumors.length} event(s): ${rumorTitles}.`;
        } else if (relatedArcs.length > 0) {
            description = `A faction encountered during: ${arcNames}.`;
        } else if (relatedRumors.length > 0) {
            description = `A faction referenced in ${relatedRumors.length} event(s): ${rumorTitles}.`;
        } else {
            description = 'A faction referenced in current events.';
        }
        
        // Determine the source type for the badge
        let entrySource = 'discovered';
        if (predefined) entrySource = 'predefined';
        else if (registry) entrySource = 'registry';
        else if (relatedArcs.length > 0) entrySource = 'story-arc';
        else if (relatedRumors.length > 0) entrySource = 'rumor-discovered';
        
        unifiedFactions.set(factionKey, {
            key: factionKey,
            registryId: normalizedKey,
            source: entrySource,
            name: source.name || formatFactionKeyToName(factionKey),
            description: description,
            region: source.region || extractRegionFromPOIs(normalizedKey, mapStats) || 'Unknown',
            logo: source.logo || 'logos/default.png',
            notable_people: source.notable_people || [],
            relations: source.relations || {},
            color: source.color || '#888888',
            icon: source.icon || '🏴',
            shortName: source.shortName || source.name || formatFactionKeyToName(factionKey),
            leaderName: source.leaderName || 'Unknown',
            leaderTitle: source.leaderTitle || 'Leader',
            isAutoGenerated: !predefined,
            isFromStoryArc: relatedArcs.length > 0,
            isFromRumors: relatedRumors.length > 0,
            relatedArcs: relatedArcs.map(a => a.name),
            relatedRumorCount: relatedRumors.length,
            military: stats.military || 0,
            economic: stats.economic || 0,
            political: stats.political || 0,
            population: stats.population || 0,
            poiCount: stats.poiCount || 0,
            activeRegions: stats.activeRegions || 0,
            controlledRegions: stats.controlledRegions || 0
        });
    });    
    // Cache the result
    _unifiedFactionCache = Array.from(unifiedFactions.values());
    _unifiedFactionCacheTime = now;
    
    return _unifiedFactionCache;
}

/**
 * Convert a faction_key into "Faction Key" for display when no name exists
 */
function formatFactionKeyToName(key) {
    return key
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
/**
 * Get a single faction's unified data by key - uses cache
 */
function getUnifiedFaction(factionKey) {
    const allFactions = getUnifiedFactionList();
    const normalizedKey = toSystemId(factionKey);
    
    return allFactions.find(f => 
        f.key === factionKey || 
        f.registryId === factionKey || 
        f.key === normalizedKey ||
        f.registryId === normalizedKey
    );
}

/**
 * Invalidate cache when needed (e.g., after state changes)
 */
function invalidateFactionCache() {
    _unifiedFactionCache = null;
    _unifiedFactionCacheTime = 0;
}

// ============================================
// NPC/TARGET EXTRACTION - Fixed to avoid recursion
// ============================================

/**
 * Check if a key is a stat modifier (not a faction/entity)
 */
function isStatKey(key) {
    const statPatterns = [
        'liberated_', 'speaker_network', 'vigilance_', 'third_eye_',
        '_allies', '_clans', '_pack', 'cycle_impact', 'noki_'
    ];
    return statPatterns.some(pattern => key.includes(pattern));
}
/**
 * Check if a rumor effects key is a stat/modifier rather than a faction
 * More comprehensive than isStatKey — catches cycle_impact, score fields, etc.
 */
function isRumorStatKey(key) {
    const nonFactionKeys = [
        'cycle_impact', 'score', 'label', 'type',
        'speaker_network', 'vigilance_morale', 'vigilance_resources',
        'third_eye_network', 'liberated_morale', 'liberated_resources',
        'party_cohesion', 'party_morale', 'world_tension',
        'noki_trust', 'pianta_trust'
    ];
    
    if (nonFactionKeys.includes(key)) return true;
    
    // Check if it's a known party member (not a faction)
    if (state.party && state.party.includes(key)) return true;
    
    // Check auxiliary party
    if (AUXILIARY_PARTY && AUXILIARY_PARTY[key]) return true;
    
    return false;
}
/**
 * Check if a key is likely a faction - SIMPLE CHECK without calling getUnifiedFaction
 */
function isFactionKey(key) {
    // Check predefined factions directly
    if (LORE_DATA.factions && LORE_DATA.factions[key]) {
        return true;
    }
    
    // Check registry directly without going through unified list
    const registryFactions = getAllFactions();
    const normalizedKey = toSystemId(key);
    
    if (registryFactions[key] || registryFactions[normalizedKey]) {
        return true;
    }
    
    // Common faction patterns
    const factionPatterns = [
        'iron_legion', 'regal_empire', 'moonfang', 'rakasha', 
        'toad_resistance', 'noki', 'pianta', 'koopa'
    ];
    
    return factionPatterns.some(pattern => key.includes(pattern));
}

/**
 * Get all unique NPC targets from rumors
 */
function getTargetsFromRumors() {
    const rumors = LORE_DATA.rumors || [];
    const targetMap = new Map();
    
    // Pre-fetch faction keys to avoid repeated lookups
    const knownFactionKeys = new Set();
    if (LORE_DATA.factions) {
        Object.keys(LORE_DATA.factions).forEach(k => knownFactionKeys.add(k));
    }
    const registryFactions = getAllFactions();
    Object.keys(registryFactions).forEach(k => knownFactionKeys.add(k));
    
    rumors.forEach(rumor => {
        // Process targets array
        (rumor.targets || []).forEach(targetId => {
            processTarget(targetId, rumor, targetMap, 'target', 0, knownFactionKeys);
        });
        
        // Process instigator
        if (rumor.instigator) {
            processTarget(rumor.instigator, rumor, targetMap, 'instigator', 0, knownFactionKeys);
        }
        
        // Process effects keys
        Object.entries(rumor.effects || {}).forEach(([entityId, value]) => {
            if (isStatKey(entityId)) return;
            processTarget(entityId, rumor, targetMap, 'affected', value, knownFactionKeys);
        });
    });
    
    // Filter out main party members
    const mainParty = new Set(state.party || []);
    const results = [];
    
    targetMap.forEach((data, id) => {
        if (mainParty.has(id)) return;
        
        const entity = resolveTargetEntity(id);
        
        if (entity.type === 'auxiliary' || entity.type === 'unknown' || entity.type === 'character') {
            results.push({
                id,
                entity,
                ...data
            });
        }
    });
    
    return results.sort((a, b) => b.rumors.length - a.rumors.length);
}

/**
 * Process a target and add to the map - with pre-fetched faction keys
 */
function processTarget(targetId, rumor, targetMap, role, effectValue = 0, knownFactionKeys) {
    if (!targetMap.has(targetId)) {
        targetMap.set(targetId, {
            rumors: [],
            roles: new Set(),
            totalImpact: 0,
            factionEffects: {}
        });
    }
    
    const entry = targetMap.get(targetId);
    
    // Avoid duplicate rumors
    if (!entry.rumors.find(r => r.id === rumor.id)) {
        entry.rumors.push({
            id: rumor.id,
            title: rumor.title,
            date: rumor.date,
            isEvent: rumor.isEvent,
            arc: rumor.arc
        });
    }
    
    entry.roles.add(role);
    
    if (role === 'affected' && effectValue !== 0) {
        entry.totalImpact += effectValue;
    }
    
    // Track faction effects using pre-fetched keys
    Object.entries(rumor.effects || {}).forEach(([key, value]) => {
        // Simple check using pre-fetched set
        const normalizedKey = toSystemId(key);
        if (knownFactionKeys.has(key) || knownFactionKeys.has(normalizedKey)) {
            entry.factionEffects[key] = (entry.factionEffects[key] || 0) + value;
        }
    });
}

/**
 * Resolve a target ID to displayable entity data
 */
/**
 * Resolve a target ID to displayable entity data
 */
/**
 * Resolve a target ID to displayable entity data
 */
function resolveTargetEntity(targetId) {
    // Check auxiliary party first
    if (AUXILIARY_PARTY && AUXILIARY_PARTY[targetId]) {
        const member = AUXILIARY_PARTY[targetId];
        return {
            type: 'auxiliary',
            id: targetId,
            name: member.name,
            portrait: member.portrait || 'portraits/unknown.png',
            status: member.status,
            weapon: member.weapon,
            level: member.level,
            description: member.description,
            abilities: member.abilities || [],
            log: member.log || []
        };
    }
    
    // Check main characters
    if (LORE_DATA.characters && LORE_DATA.characters[targetId]) {
        const char = LORE_DATA.characters[targetId];
        return {
            type: 'character',
            id: targetId,
            name: char.name,
            portrait: char.portrait || 'portraits/unknown.png',
            title: char.title,
            description: char.description
        };
    }
    
    // Check factions - use simple lookup
    if (LORE_DATA.factions && LORE_DATA.factions[targetId]) {
        const faction = LORE_DATA.factions[targetId];
        return {
            type: 'faction',
            id: targetId,
            name: faction.name,
            portrait: faction.logo || 'logos/default.png',
            icon: faction.icon,
            region: faction.region
        };
    }
    
    // Unknown target - create from ID
    return {
        type: 'unknown',
        id: targetId,
        name: formatTargetName(targetId),
        portrait: 'portraits/unknown.png'
    };
}
/**
 * Format a target ID into a readable name
 */
function formatTargetName(targetId) {
    return targetId
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Get reputation/relationship data from a target's perspective - CACHED
 */

function getTargetFactionRelations(targetId) {
    // Check cache first
    if (_targetRelationsCache.has(targetId)) {
        return _targetRelationsCache.get(targetId);
    }
    
    const rumors = LORE_DATA.rumors || [];
    const factionEffects = {};
    
    // Pre-fetch faction keys
    const knownFactionKeys = new Set();
    if (LORE_DATA.factions) {
        Object.keys(LORE_DATA.factions).forEach(k => knownFactionKeys.add(k));
    }
    const registryFactions = getAllFactions();
    Object.keys(registryFactions).forEach(k => knownFactionKeys.add(k));
    
    rumors.forEach(rumor => {
        // Check if this target is involved in the rumor
        const isTarget = (rumor.targets || []).includes(targetId);
        const isInstigator = rumor.instigator === targetId;
        const isAffected = rumor.effects && rumor.effects[targetId] !== undefined;
        
        if (isTarget || isInstigator || isAffected) {
            // Collect faction effects from this rumor
            Object.entries(rumor.effects || {}).forEach(([key, value]) => {
                if (isStatKey(key)) return;
                
                const normalizedKey = toSystemId(key);
                if (knownFactionKeys.has(key) || knownFactionKeys.has(normalizedKey)) {
                    factionEffects[key] = (factionEffects[key] || 0) + value;
                }
            });
        }
    });
    
    // Cache the result
    _targetRelationsCache.set(targetId, factionEffects);
    
    return factionEffects;
}

/**
 * Clear target relations cache
 */
function invalidateTargetCache() {
    _targetRelationsCache.clear();
}

// ============================================
// UPDATED FILTER FUNCTION
// ============================================
function getFilteredFactions() {
    const isDebug = state.debugMode;
    const allFactions = getUnifiedFactionList();
    
    // Pre-compute target relations if needed
    let targetRelations = {};
    if (selectedTarget) {
        targetRelations = getTargetFactionRelations(selectedTarget);
    }
    
    let factions = allFactions
.filter(faction => {
    const intel = getIntelForFaction(faction.key);
    if (!isDebug && intel <= 0) {
        // Always show story arc and rumor-discovered factions even with 0 intel
        if (faction.isFromStoryArc || faction.isFromRumors) return true;
        
        if (faction.poiCount === 0 && faction.military === 0 && faction.economic === 0) {
            return false;
        }
    }
    return true;
})
        .map(faction => {
            const partyRep = getPartyAverageReputation(faction.key);
            const intel = getIntelForFaction(faction.key);
            
            const playerReps = {};
            state.party.forEach(playerKey => {
                playerReps[playerKey] = getPlayerReputation(playerKey, faction.key);
            });
            
            const targetRep = selectedTarget 
                ? (targetRelations[faction.key] || targetRelations[faction.registryId] || 0)
                : 0;
            
            return {
                key: faction.key,
                faction: faction,
                partyRep,
                intel,
                playerReps,
                targetRep,
                region: faction.region || 'Unknown',
                source: faction.source,
                isAutoGenerated: faction.isAutoGenerated
            };
        });
    
    // NEW: Filter out minor/zero relations if toggle is on
    if (hideMinorRelations) {
        factions = factions.filter(f => {
            let rep;
            if (selectedTarget) {
                rep = f.targetRep;
            } else if (selectedPlayer) {
                rep = f.playerReps[selectedPlayer];
            } else {
                rep = f.partyRep;
            }
            // Hide if rep is -1, 0, or +1 (only show if |rep| >= 2)
            return Math.abs(rep) >= 2;
        });
    }
    
    // ... rest of filters unchanged
    if (currentFilters.region !== 'all') {
        factions = factions.filter(f => f.region === currentFilters.region);
    }
    
    if (currentFilters.standing !== 'all') {
        factions = factions.filter(f => {
            let rep;
            if (selectedTarget) {
                rep = f.targetRep;
            } else if (selectedPlayer) {
                rep = f.playerReps[selectedPlayer];
            } else {
                rep = f.partyRep;
            }
            
            switch (currentFilters.standing) {
                case 'friendly': return rep >= 50;
                case 'neutral': return rep > -50 && rep < 50;
                case 'hostile': return rep <= -50;
                default: return true;
            }
        });
    }
    
    if (currentFilters.search) {
        const search = currentFilters.search.toLowerCase();
        factions = factions.filter(f => 
            f.faction.name?.toLowerCase().includes(search) ||
            f.faction.description?.toLowerCase().includes(search) ||
            f.key.toLowerCase().includes(search)
        );
    }
    
    // Sort
    switch (currentFilters.sort) {
        case 'name':
            factions.sort((a, b) => (a.faction.name || a.key).localeCompare(b.faction.name || b.key));
            break;
        case 'intel':
            factions.sort((a, b) => b.intel - a.intel);
            break;
        case 'infamy':
        case 'notoriety':
            factions.sort((a, b) => getPartyFactionInfamy(b.key) - getPartyFactionInfamy(a.key));
            break;
        case 'reputation':
        default:
            factions.sort((a, b) => {
                let repA, repB;
                if (selectedTarget) {
                    repA = a.targetRep;
                    repB = b.targetRep;
                } else if (selectedPlayer) {
                    repA = a.playerReps[selectedPlayer];
                    repB = b.playerReps[selectedPlayer];
                } else {
                    repA = a.partyRep;
                    repB = b.partyRep;
                }
                return repB - repA;
            });
    }
    
    return factions;
}

// ============================================
// UPDATED TOGGLE RENDER - Clearer text
// ============================================

function renderFiltersWithToggle() {
    const filterContainer = document.querySelector('.directory-filters');
    if (!filterContainer) return;
    
    // Check if toggle already exists
    if (document.getElementById('hide-minor-toggle')) return;
    
    const toggleHTML = `
        <div class="filter-group toggle-group">
            <label class="toggle-label" title="Hide factions with -1, 0, or +1 reputation">
                <input type="checkbox" id="hide-minor-toggle" ${hideMinorRelations ? 'checked' : ''}>
                <span class="toggle-text">Hide Minor (≤±1)</span>
            </label>
        </div>
    `;
    
    filterContainer.insertAdjacentHTML('beforeend', toggleHTML);
}


// ============================================
// INITIALIZATION - Clear caches
// ============================================

function init() {
    console.log('[Directory] Initializing...');
    
    // Clear caches on init
    invalidateFactionCache();
    invalidateTargetCache();
    
    if (!state.finalReputations || Object.keys(state.finalReputations).length === 0) {
        loadState();
    }
    
    selectedPlayer = state.loggedInUser !== 'generic' ? state.loggedInUser : state.party[0];
    
    render();
    initEventListeners();
    handleHashRoute();
    
    const allFactions = getUnifiedFactionList();
    console.log('[Directory] Initialized with', allFactions.length, 'factions (predefined + POI-extracted)');
}

// ============================================
// EVENT LISTENERS - Clear cache on selection change
// ============================================

function initEventListeners() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    
    window.addEventListener('hashchange', handleHashRoute);
    
    // Why button
    document.addEventListener('click', (e) => {
        const whyBtn = e.target.closest('.fc-why-btn');
        if (whyBtn) {
            e.stopPropagation();
            const factionKey = whyBtn.dataset.why;
            playSound('click.mp3', 0.5);
            renderWhyModal(factionKey);
            return;
        }
        
        // Clear perspective button
        const clearBtn = e.target.closest('#clear-perspective-btn');
        if (clearBtn) {
            playSound('click.mp3', 0.3);
            selectedPlayer = null;
            selectedTarget = null;
            invalidateTargetCache(); // Clear cache
            render();
            return;
        }
    });

    mainContent.addEventListener('click', (e) => {
        // View mode buttons
        const viewBtn = e.target.closest('.view-mode-btn');
        if (viewBtn) {
            playSound('click.mp3', 0.5);
            document.querySelectorAll('.view-mode-btn').forEach(b => b.classList.remove('active'));
            viewBtn.classList.add('active');
            currentView = viewBtn.dataset.view;
            render();
            return;
        }
        
        // Party member selection
        const partyMember = e.target.closest('.party-member-item');
        if (partyMember) {
            playSound('click.mp3', 0.5);
            selectedPlayer = partyMember.dataset.player;
            selectedTarget = null;
            invalidateTargetCache();
            render();
            return;
        }
        
        // Notable figure/NPC selection
        const figureItem = e.target.closest('.figure-item');
        if (figureItem) {
            playSound('click.mp3', 0.5);
            const targetId = figureItem.dataset.target;
            
            if (selectedTarget === targetId) {
                selectedTarget = null;
            } else {
                selectedTarget = targetId;
                selectedPlayer = null;
            }
            invalidateTargetCache();
            render();
            return;
        }
        
        // Faction cards
        const factionCard = e.target.closest('.faction-card, .pv-faction-item, .matrix-row, .intel-item');
        if (factionCard && !e.target.closest('button')) {
            playSound('click.mp3', 0.5);
            const factionKey = factionCard.dataset.faction;
            window.location.hash = `faction/${factionKey}`;
            renderFactionDetailModal(factionKey);
            return;
        }
        
        const detailsBtn = e.target.closest('.fc-details-btn');
        if (detailsBtn) {
            playSound('click.mp3', 0.5);
            const factionKey = detailsBtn.dataset.faction;
            window.location.hash = `faction/${factionKey}`;
            renderFactionDetailModal(factionKey);
            return;
        }
    });
    
    // Modal close
    const modalClose = document.getElementById('modal-close-btn');
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            playSound('click.mp3', 0.5);
            document.getElementById('faction-detail-modal')?.classList.remove('visible');
            window.location.hash = '';
        });
    }
    
    const modal = document.getElementById('faction-detail-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('visible');
                window.location.hash = '';
            }
        });
    }
    
    // Filters
    document.getElementById('region-filter')?.addEventListener('change', (e) => {
        currentFilters.region = e.target.value;
        render();
    });
    
    document.getElementById('standing-filter')?.addEventListener('change', (e) => {
        currentFilters.standing = e.target.value;
        render();
    });
    
    document.getElementById('sort-filter')?.addEventListener('change', (e) => {
        currentFilters.sort = e.target.value;
        render();
    });
    
    document.getElementById('search-filter')?.addEventListener('input', (e) => {
        currentFilters.search = e.target.value;
        render();
    });
    
    // Hide minor relations toggle
    document.addEventListener('change', (e) => {
        if (e.target.id === 'hide-minor-toggle') {
            hideMinorRelations = e.target.checked;
            playSound('click.mp3', 0.3);
            render();
        }
    });
    
    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('faction-detail-modal')?.classList.remove('visible');
            document.getElementById('why-modal')?.classList.remove('visible');
            window.location.hash = '';
        }
    });
}

// Export cache invalidation for external use
export { 
    render, 
    getFilteredFactions, 
    getUnifiedFactionList, 
    getUnifiedFaction,
    invalidateFactionCache,
    invalidateTargetCache
};
/////
