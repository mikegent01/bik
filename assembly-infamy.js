/**
 * WAHbook Infamy Engine
 * Fame is attention. Infamy is heat: warrants, fear, hostile scrutiny,
 * faction grudges, and the social cost of being recognized for the wrong reasons.
 */

const INFAMY_KEYWORDS = [
  { tag: 'Violence', weight: 14, words: ['kill', 'killed', 'murder', 'execution', 'executed', 'assassination', 'slaughter', 'massacre', 'blood', 'war', 'siege', 'battle', 'ambush', 'stabbed', 'shot', 'fireball', 'death beam'] },
  { tag: 'Legal Heat', weight: 12, words: ['arrest', 'warrant', 'trial', 'court', 'evidence', 'crime', 'criminal', 'illegal', 'treason', 'riot', 'prison', 'escaped', 'custody', 'investigation'] },
  { tag: 'Theft / Fraud', weight: 10, words: ['stole', 'steal', 'theft', 'robbed', 'loot', 'looted', 'scam', 'debt', 'fraud', 'blackmail', 'smuggling', 'pirate'] },
  { tag: 'Political Scandal', weight: 11, words: ['coup', 'regency', 'succession', 'heir', 'emperor', 'throne', 'senate', 'assembly', 'treaty', 'collapse', 'invasion', 'occupation'] },
  { tag: 'Supernatural Alarm', weight: 9, words: ['vampire', 'ghost', 'shadowfell', 'portal', 'artifact', 'curse', 'necromancy', 'demon', 'oracle', 'fracture', 'petrified', 'mirror'] },
  { tag: 'Public Panic', weight: 8, words: ['panic', 'rumor', 'scandal', 'betrayal', 'hostile', 'dangerous', 'monster', 'threat', 'terror', 'fear'] },
  { tag: 'Wario-Class Greed', weight: 7, words: ['wario', 'money', 'gold', 'coins', 'profit', 'price', 'shop', 'enterprise', 'interest rate'] }
];

const BASELINE_INFAMY = {
  wario: { score: 54, tags: ['Greed Heat', 'Civil Complaint Magnet'], reasons: ['Wario-class profit behavior is a standing public hazard.'] },
  waluigi: { score: 33, tags: ['Nuisance Heat'], reasons: ['Known complaint-generator and self-appointed chronicler.'] },
  archie: { score: 58, tags: ['Arson Heat', 'Debt Heat'], reasons: ['Fire, debt, and entropy make polite rooms nervous.'] },
  bowser: { score: 64, tags: ['Royal Threat', 'Military Heat'], reasons: ['A king-sized Koopa threat profile follows him into every room.'] },
  fawful: { score: 82, tags: ['War Criminal Energy', 'Bean Panic'], reasons: ['Public memory treats Fawful as a catastrophe with grammar.'] },
  cackletta: { score: 86, tags: ['Legendary Villain Heat'], reasons: ['The name itself raises defensive posture.'] },
  king_boo: { score: 78, tags: ['Paranormal Menace'], reasons: ['Boo intelligence networks and ghost panic amplify his heat.'] },
  mysticmorel: { score: 47, tags: ['Portal Suspicion', 'Theatrical Theft Risk'], reasons: ['Songs, portals, stolen equipment, and prophecy cards are not calming.'] },
  mystic_morel: { score: 47, tags: ['Portal Suspicion', 'Theatrical Theft Risk'], reasons: ['Songs, portals, stolen equipment, and prophecy cards are not calming.'] },
  remi: { score: 26, tags: ['Artifact Attention'], reasons: ['Low legal heat, but artifact incidents and impossible repairs create attention.'] },
  markop: { score: 18, tags: ['Battlefield Recognition'], reasons: ['Recognized more as crisis responder than criminal threat.'] },
  greent: { score: 38, tags: ['Vampire Dinner Heat'], reasons: ['Shooting a vampire lord at dinner remains politically loud.'] },
  general_ironhand: { score: 68, tags: ['Military Fear', 'Legion Heat'], reasons: ['High-ranking Iron Legion command presence changes witness behavior.'] },
  emperor_elgabalus: { score: 42, tags: ['Imperial Scrutiny'], reasons: ['Imperial power is not automatically criminal, but it is never low-risk.'] },
  the_broker: { score: 61, tags: ['Information Underworld'], reasons: ['Secrets as currency create blackmail heat everywhere.'] },
  tanukiburt: { score: 46, tags: ['Impostor Heat', 'Portal Circle'], reasons: ['Identity confusion at the party exit is instant suspicion.'] },
  merric: { score: 9, tags: ['Armed Sheep'], reasons: ['Mostly harmless socially. Still an axe-wielding sheep.'] }
};

const FACTION_BASELINE = {
  iron_legion: { score: 46, tags: ['State Force', 'Occupation Scrutiny'] },
  onyx_hand: { score: 62, tags: ['Vampire Court', 'Blood Politics'] },
  fawful_forces: { score: 70, tags: ['Hostile Power'] },
  koopa_troop: { score: 44, tags: ['Military Monarchy'] },
  wario_enterprise: { score: 38, tags: ['Debt / Fraud Risk'] },
  black_sugar_pirates: { score: 45, tags: ['Pirate Heat'] },
  freelancer_underworld: { score: 55, tags: ['Secret Market'] },
  peach_loyalists: { score: 31, tags: ['Militarized Loyalism'] },
  disaster_inc: { score: 35, tags: ['Reality Accident History'] },
  corvinarus: { score: 64, tags: ['Succession Crisis', 'Vampire Estate'] },
  enemy_wildcards: { score: 58, tags: ['Hostile Wildcard'] }
};

export function normalizeInfamyKey(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

export function classifyInfamy(score = 0) {
  const n = Math.max(0, Math.round(Number(score) || 0));
  if (n >= 90) return { tier: 'Catastrophe', icon: '☢️', tone: 'catastrophe', label: 'Catastrophe Heat', access: 'Opens war rooms and sealed panic files; closes almost every polite door.' };
  if (n >= 75) return { tier: 'Public Menace', icon: '🚨', tone: 'menace', label: 'Menace Heat', access: 'Opens hostile briefings, bounty boards, frightened witnesses, and emergency councils.' };
  if (n >= 60) return { tier: 'Wanted / Feared', icon: '⚠️', tone: 'wanted', label: 'Wanted Heat', access: 'Opens criminal files and rival attention; guards react before asking questions.' };
  if (n >= 40) return { tier: 'Hot File', icon: '🔥', tone: 'hot', label: 'Hot File', access: 'Opens rumor channels and suspicious clerks; legal rooms ask for proof.' };
  if (n >= 20) return { tier: 'Watched', icon: '👁️', tone: 'watched', label: 'Watched', access: 'Recognition creates mild scrutiny; useful in rumor rooms, awkward at checkpoints.' };
  return { tier: 'Clean / Quiet', icon: '✅', tone: 'clean', label: 'Quiet', access: 'No major heat; infamy rarely opens doors by itself.' };
}

function clamp(n, lo = 0, hi = 100) { return Math.max(lo, Math.min(hi, Number(n) || 0)); }
function uniq(arr) { return [...new Set((arr || []).filter(Boolean))]; }
function textOfPost(post) {
  return [post?.content, post?.title, post?.summary, ...(post?.comments || []).map(c => c?.text)].filter(Boolean).join(' ').toLowerCase();
}

export function analyzePostInfamy(post = {}) {
  const text = textOfPost(post);
  const tags = [];
  const reasons = [];
  let score = 0;

  for (const rule of INFAMY_KEYWORDS) {
    const hits = rule.words.filter(w => text.includes(w));
    if (hits.length) {
      const add = Math.min(rule.weight + (hits.length - 1) * 2, rule.weight + 10);
      score += add;
      tags.push(rule.tag);
      reasons.push(`${rule.tag}: ${hits.slice(0, 3).join(', ')}`);
    }
  }

  const likes = Number(post.likes || 0);
  const comments = Array.isArray(post.comments) ? post.comments.length : 0;
  score += Math.min(18, Math.sqrt(Math.max(0, likes)) * 1.4 + comments * 1.8);

  if (post.eventId || post.rumorId) score += 5;
  if (/breaking|urgent|leaked|classified|exclusive/i.test(String(post.content || post.title || ''))) {
    score += 8;
    tags.push('Media Spike');
    reasons.push('Media Spike: phrasing increases spread and scrutiny');
  }

  return { score: clamp(score), tags: uniq(tags), reasons: uniq(reasons) };
}

function getLoreCharacter(loreData, key) {
  return loreData?.characters?.[key] || loreData?.auxiliary_party?.[key] || null;
}

function getFactionForCharacter(loreData, key) {
  const ch = getLoreCharacter(loreData, key);
  const direct = normalizeInfamyKey(ch?.faction || ch?.affiliation || ch?.group || '');
  if (direct && loreData?.factions?.[direct]) return direct;
  for (const fKey in loreData?.factions || {}) {
    const fac = loreData.factions[fKey];
    if (fac.leader === key) return fKey;
    if (fac.notable_people?.some(p => normalizeInfamyKey(p?.id || p?.key || p?.name) === key || p?.name === ch?.name)) return fKey;
  }
  return direct || null;
}

function blankProfile(key, name) {
  const base = BASELINE_INFAMY[key] || { score: 0, tags: [], reasons: [] };
  return {
    key,
    name: name || key,
    score: Number(base.score || 0),
    tags: [...(base.tags || [])],
    reasons: [...(base.reasons || [])],
    posts: 0,
    comments: 0,
    factions: [],
    legalRisk: 0,
    fearRisk: 0,
    scandalRisk: 0
  };
}

function addHeat(profile, amount, tags = [], reasons = [], channel = 'scandal') {
  profile.score += Number(amount || 0);
  profile.tags.push(...tags);
  profile.reasons.push(...reasons);
  if (channel === 'legal') profile.legalRisk += amount;
  else if (channel === 'fear') profile.fearRisk += amount;
  else profile.scandalRisk += amount;
}

function finalizeProfile(profile) {
  profile.score = clamp(profile.score);
  profile.legalRisk = clamp(profile.legalRisk);
  profile.fearRisk = clamp(profile.fearRisk);
  profile.scandalRisk = clamp(profile.scandalRisk);
  profile.tags = uniq(profile.tags).slice(0, 10);
  profile.reasons = uniq(profile.reasons).slice(0, 8);
  profile.classification = classifyInfamy(profile.score);
  profile.tier = profile.classification.tier;
  profile.tone = profile.classification.tone;
  profile.icon = profile.classification.icon;
  profile.factions = uniq(profile.factions);
  return profile;
}

export function calculateAssemblyInfamy(posts = [], loreData = {}) {
  const characters = {};
  const factions = {};
  const postHeat = {};

  function charProfile(key) {
    key = normalizeInfamyKey(key || 'unknown');
    if (!characters[key]) {
      const ch = getLoreCharacter(loreData, key);
      characters[key] = blankProfile(key, ch?.name || key.replace(/_/g, ' '));
      const f = getFactionForCharacter(loreData, key);
      if (f) characters[key].factions.push(f);
    }
    return characters[key];
  }
  function factionProfile(key) {
    key = normalizeInfamyKey(key || 'unknown');
    if (!factions[key]) {
      const fac = loreData?.factions?.[key];
      const base = FACTION_BASELINE[key] || { score: 0, tags: [] };
      factions[key] = {
        key,
        name: fac?.name || key.replace(/_/g, ' '),
        score: Number(base.score || 0),
        tags: [...(base.tags || [])],
        reasons: [],
        posts: 0,
        legalRisk: 0,
        fearRisk: 0,
        scandalRisk: 0
      };
    }
    return factions[key];
  }

  for (const post of posts || []) {
    if (!post) continue;
    const authorKey = normalizeInfamyKey(post.characterKey || 'unknown');
    const heat = analyzePostInfamy(post);
    postHeat[post.id || `${authorKey}_${Math.random()}`] = heat;

    const author = charProfile(authorKey);
    author.posts += 1;
    addHeat(author, heat.score * 0.38, heat.tags, heat.reasons, heat.tags.includes('Legal Heat') ? 'legal' : heat.tags.includes('Violence') ? 'fear' : 'scandal');

    const fKey = getFactionForCharacter(loreData, authorKey);
    if (fKey) {
      const fac = factionProfile(fKey);
      fac.posts += 1;
      addHeat(fac, heat.score * 0.18, heat.tags, [`${author.name || authorKey}: ${heat.tags.slice(0, 2).join(', ') || 'public chatter'}`], 'scandal');
    }

    for (const c of post.comments || []) {
      const cKey = normalizeInfamyKey(c.characterKey || 'unknown');
      const commenter = charProfile(cKey);
      const cHeat = analyzePostInfamy({ content: c.text || '', likes: 0, comments: [] });
      commenter.comments += 1;
      addHeat(commenter, Math.max(1, cHeat.score * 0.22), cHeat.tags, cHeat.reasons, cHeat.tags.includes('Legal Heat') ? 'legal' : 'scandal');
    }
  }

  for (const rumor of loreData?.rumors || []) {
    const effects = rumor.effects || {};
    const keyFactions = rumor.keyFactions || rumor.key_factions || [];
    for (const [fKeyRaw, valueRaw] of Object.entries(effects)) {
      const value = Number(valueRaw || 0);
      if (value < 0) {
        const fp = factionProfile(fKeyRaw);
        addHeat(fp, Math.min(24, Math.abs(value) * 2.2), ['Hostile Reputation Effect'], [`${rumor.title || rumor.id}: ${value}`], 'legal');
      }
    }
    for (const fKey of keyFactions) {
      const fp = factionProfile(fKey);
      addHeat(fp, 3, ['Named In Dossier'], [`Key faction in ${rumor.title || rumor.id}`], 'scandal');
    }
  }

  Object.values(BASELINE_INFAMY).forEach(() => {});
  for (const key of Object.keys(BASELINE_INFAMY)) charProfile(key);
  for (const key of Object.keys(FACTION_BASELINE)) factionProfile(key);

  Object.values(characters).forEach(finalizeProfile);
  Object.values(factions).forEach(finalizeProfile);

  const rankedCharacters = Object.values(characters).sort((a, b) => b.score - a.score);
  const rankedFactions = Object.values(factions).sort((a, b) => b.score - a.score);
  const globalScore = clamp((rankedCharacters.slice(0, 8).reduce((s, x) => s + x.score, 0) / Math.max(1, Math.min(8, rankedCharacters.length))) * 0.62 + (rankedFactions.slice(0, 5).reduce((s, x) => s + x.score, 0) / Math.max(1, Math.min(5, rankedFactions.length))) * 0.38);

  return {
    characters,
    factions,
    posts: postHeat,
    rankedCharacters,
    rankedFactions,
    global: { score: globalScore, ...classifyInfamy(globalScore) }
  };
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
}

export function getCharacterInfamy(state, key) {
  return state?.characters?.[normalizeInfamyKey(key)] || finalizeProfile(blankProfile(normalizeInfamyKey(key), key));
}

export function getFactionInfamy(state, key) {
  return state?.factions?.[normalizeInfamyKey(key)] || finalizeProfile({ key, name: key, score: 0, tags: [], reasons: [], posts: 0, legalRisk: 0, fearRisk: 0, scandalRisk: 0 });
}

export function getPostInfamy(state, post) {
  return state?.posts?.[post?.id] || analyzePostInfamy(post);
}

export function renderInfamyBadge(profileOrScore, compact = false) {
  const score = typeof profileOrScore === 'number' ? profileOrScore : profileOrScore?.score;
  const c = typeof profileOrScore === 'object' && profileOrScore?.classification ? profileOrScore.classification : classifyInfamy(score);
  const n = Math.round(Number(score || 0));
  return `<span class="infamy-badge infamy-${esc(c.tone)}" title="Infamy: ${n} · ${esc(c.tier)}">${c.icon} ${compact ? n : `${esc(c.tier)} ${n}`}</span>`;
}

export function renderInfamyWatch(state) {
  if (!state) return '<p class="infamy-empty">Heat index not calculated.</p>';
  const top = state.rankedCharacters.slice(0, 5);
  return `
    <div class="infamy-watch-summary infamy-${esc(state.global.tone)}">
      <div class="infamy-global-score"><b>${Math.round(state.global.score)}</b><span>${esc(state.global.tier)}</span></div>
      <p>${esc(state.global.access)}</p>
    </div>
    <div class="infamy-watch-list">
      ${top.map(p => `
        <button class="infamy-watch-row" data-infamy-character="${esc(p.key)}">
          <span class="infamy-watch-name">${esc(p.name)}</span>
          ${renderInfamyBadge(p, true)}
        </button>
      `).join('')}
    </div>
  `;
}

export function renderInfamyMatrix(state) {
  if (!state) return '';
  const chars = state.rankedCharacters.slice(0, 8);
  const facs = state.rankedFactions.slice(0, 6);
  return `
    <section class="infamy-matrix-panel">
      <div class="infamy-matrix-head">
        <div><span>🚨 INFAMY MATRIX</span><h3>Heat, warrants, fear, and hostile attention</h3></div>
        ${renderInfamyBadge(state.global)}
      </div>
      <div class="infamy-matrix-grid">
        <div>
          <h4>Hot Character Files</h4>
          ${chars.map(p => renderInfamyLine(p)).join('')}
        </div>
        <div>
          <h4>Faction Heat</h4>
          ${facs.map(p => renderInfamyLine(p)).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderInfamyLine(p) {
  const pct = Math.round(clamp(p.score));
  return `
    <div class="infamy-line infamy-${esc(p.tone)}">
      <div class="infamy-line-top"><b>${esc(p.name)}</b><span>${pct}</span></div>
      <div class="infamy-meter"><i style="width:${pct}%"></i></div>
      <p>${esc((p.tags || []).slice(0, 3).join(' · ') || p.tier)}</p>
    </div>
  `;
}

export function renderDossierInfamy(rumor, relatedPosts = [], state) {
  const localHeat = relatedPosts.map(p => getPostInfamy(state, p).score).reduce((a, b) => a + b, 0) / Math.max(1, relatedPosts.length || 1);
  const factionImpacts = Object.entries(rumor?.effects || {})
    .map(([key, val]) => ({ key, value: Number(val || 0), profile: getFactionInfamy(state, key) }))
    .sort((a, b) => Math.abs(b.value) - Math.abs(a.value));
  const local = classifyInfamy(localHeat);
  return `
    <div class="dossier-section dossier-infamy-section">
      <h4>🚨 Infamy Consequences</h4>
      <div class="dossier-infamy-summary infamy-${esc(local.tone)}">
        <b>${Math.round(localHeat)}</b>
        <span>${esc(local.tier)}</span>
        <p>${esc(local.access)}</p>
      </div>
      ${factionImpacts.length ? `<div class="dossier-infamy-factions">
        ${factionImpacts.slice(0, 5).map(x => `
          <div class="dossier-infamy-faction">
            <span>${esc(x.profile.name)}</span>
            ${renderInfamyBadge(x.profile, true)}
            <small>${x.value > 0 ? 'goodwill cushions heat' : 'negative effect raises scrutiny'}</small>
          </div>
        `).join('')}
      </div>` : '<p class="dossier-no-effects">No faction-specific infamy consequence recorded.</p>'}
    </div>
  `;
}
