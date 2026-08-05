<<<<<<< HEAD
import { LORE_DATA, STORY_ARCS } from '../../../lore.js';
=======
import { LORE_DATA, STORY_ARCS } from '../../core/lore.js';
>>>>>>> 0357b6f (Move remaining shared modules into core)
import { CURRENT_GAME_DATE, CALENDAR_DATA } from '../../../data/world/calendar.js';
import { calculateRumorMetrics } from '../../../data/support/research-data.js';

function formatCharacterKey(key) {
  if (!key) return 'Unknown';
  return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function formatArcDate(dateObj) {
  if (!dateObj) return 'Unknown Date';
  const month = CALENDAR_DATA?.months?.values?.[dateObj.monthIndex];
  const monthName = month?.name || `Month ${dateObj.monthIndex + 1}`;
  return `${monthName} ${dateObj.day}, ${dateObj.year}`;
}

function countFactionMembers(factionKey, getCharacterData) {
  const characters = Object.keys(LORE_DATA?.characters || {});
  return characters.filter(key => getCharacterData(key)?.faction?.key === factionKey).length;
}

function renderHeadlineFactions(rumor) {
  const effects = Object.entries(rumor.effects || {});
  if (effects.length === 0) return '';
  return `
    <div class="headline-factions">
      ${effects.slice(0, 4).map(([factionKey, value]) => {
        const faction = LORE_DATA?.factions?.[factionKey];
        const name = faction?.name || formatCharacterKey(factionKey);
        const className = value > 0 ? 'positive' : 'negative';
        return `<span class="headline-faction ${className}">${name}: ${value > 0 ? '+' : ''}${value}</span>`;
      }).join('')}
    </div>
  `;
}

function renderNewsArticle(rumor) {
  const dateStr = rumor.time_ago || (rumor.date ? formatArcDate(rumor.date) : 'Recent');
  return `
    <article class="news-article" data-rumor-id="${rumor.id}">
      <span class="article-category">${rumor.isEvent ? 'EVENT' : 'RUMOR'}</span>
      <h4 class="article-title">${rumor.title}</h4>
      <p class="article-excerpt">${rumor.description.substring(0, 150)}${rumor.description.length > 150 ? '...' : ''}</p>
      <div class="article-footer">
        <span class="article-date">${dateStr}</span>
        <span class="article-reactions">💬 ${rumor.postCount}</span>
      </div>
    </article>
  `;
}

function renderNewsQuote(post, getCharacterData) {
  const author = getCharacterData(post.characterKey);
  const excerpt = (post.content || '').substring(0, 100);
  return `
    <div class="news-quote" data-post-id="${post.id}">
      <div class="quote-content">"${excerpt}${post.content?.length > 100 ? '...' : ''}"</div>
      <div class="quote-attribution">
        <img src="${author.portrait}" alt="${author.name}" class="quote-avatar" loading="lazy">
        <span class="quote-author">${author.name}</span>
        ${author.faction ? `<span class="quote-faction">${author.faction.name}</span>` : ''}
      </div>
    </div>
  `;
}

function renderOpinionCard(post, getCharacterData, getTrendingScore) {
  const author = getCharacterData(post.characterKey);
  const trendingScore = Math.round(getTrendingScore(post));
  return `
    <article class="opinion-card" data-post-id="${post.id}">
      <div class="opinion-header">
        <img src="${author.portrait}" alt="${author.name}" class="opinion-avatar" loading="lazy">
        <div>
          <div class="opinion-author">${author.name}</div>
          <div class="opinion-meta">🔥 ${trendingScore} score</div>
        </div>
      </div>
      <p class="opinion-text">${(post.content || '').substring(0, 140)}${(post.content || '').length > 140 ? '...' : ''}</p>
    </article>
  `;
}

function renderFactionWatch(getVisiblePosts, getCharacterData) {
  const counts = new Map();
  getVisiblePosts().forEach(post => {
    const author = getCharacterData(post.characterKey);
    const key = author.faction?.key;
    if (key) counts.set(key, (counts.get(key) || 0) + 1);
  });

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([factionKey, postCount]) => {
      const faction = LORE_DATA?.factions?.[factionKey];
      if (!faction) return '';
      return `
        <div class="faction-watch-item">
          <img src="${faction.logo}" alt="${faction.name}" class="faction-watch-logo" loading="lazy">
          <div class="faction-watch-info">
            <span class="faction-watch-name">${faction.name}</span>
            <span class="faction-watch-count">${postCount} posts</span>
          </div>
        </div>
      `;
    }).join('');
}

export function renderEventsTab({ container, getVisiblePosts, isContentVisible, isFutureEvent, getPostTimeValue, renderPost, attachPostEventListeners }) {
  const events = (LORE_DATA?.rumors || []).filter(r => r.isEvent && isContentVisible(r.date));
  events.sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));

  if (events.length === 0) {
    container.innerHTML = `<div class="empty-state"><h3>No Events</h3><p>No major events recorded.</p></div>`;
    return;
  }

  container.innerHTML = events.map(event => {
    const future = isFutureEvent(event.date);
    const relatedPosts = getVisiblePosts().filter(p => p.rumorId === event.id);
    const arc = event.arc && STORY_ARCS[event.arc] ? STORY_ARCS[event.arc] : null;
    const dateStr = event.date ? formatArcDate(event.date) : (event.time_ago || 'Unknown Date');
    return `
      <div class="event-card ${future ? 'debug-future' : ''}" id="event-${event.id}">
        ${future ? '<div class="debug-future-badge">🔮 FUTURE EVENT</div>' : ''}
        <div class="event-header">
          <div class="event-content-wrapper">
            <h4 class="event-title">${event.title}</h4>
            <p class="event-description">${event.description}</p>
            <div class="event-meta">
              <span>📅 ${dateStr}</span>
              <span>💬 ${relatedPosts.length} posts</span>
              ${arc ? `<span>${arc.icon} ${arc.name}</span>` : ''}
            </div>
          </div>
          <button class="event-toggle-btn">▼</button>
        </div>
        <div class="event-body hidden">
          <div class="event-effects">
            <h5>Faction Effects</h5>
            <div class="effects-list">
              ${Object.entries(event.effects || {}).map(([faction, value]) => {
                const factionData = LORE_DATA.factions?.[faction];
                const name = factionData?.name || formatCharacterKey(faction);
                const color = value > 0 ? 'var(--wahbook-positive)' : 'var(--wahbook-negative)';
                return `<span style="color:${color}">${name}: ${value > 0 ? '+' : ''}${value}</span>`;
              }).join('') || '<span style="color:#888">No reputation changes.</span>'}
            </div>
          </div>
          ${relatedPosts.length > 0 ? `
            <div class="event-posts">
              <h5>Related Chatter</h5>
              ${relatedPosts.slice(0, 12).map(p => renderPost(p)).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.event-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.event-card');
      const body = card.querySelector('.event-body');
      const btn = card.querySelector('.event-toggle-btn');
      const hidden = body.classList.contains('hidden');
      body.classList.toggle('hidden', !hidden);
      btn.style.transform = hidden ? 'rotate(180deg)' : 'rotate(0deg)';
      card.classList.toggle('expanded', hidden);
    });
  });

  attachPostEventListeners(container);
}

export function renderIntelTab({ container, getVisiblePosts, isContentVisible, isFutureEvent, openDossierModal }) {
  const rumors = (LORE_DATA?.rumors || []).filter(r => isContentVisible(r.date));
  const rumorData = rumors.map(rumor => {
    const relatedPosts = getVisiblePosts().filter(p => p.rumorId === rumor.id);
    const metrics = calculateRumorMetrics(rumor, relatedPosts);
    return { ...rumor, metrics, postCount: relatedPosts.length };
  }).sort((a, b) => Math.abs(b.metrics.finalScore) - Math.abs(a.metrics.finalScore));

  container.innerHTML = `
    <div class="intel-grid">
      ${rumorData.slice(0, 12).map(rumor => {
        const future = isFutureEvent(rumor.date);
        const typeBadge = rumor.isEvent ? 'event' : 'rumor';
        const dateStr = rumor.date ? formatArcDate(rumor.date) : (rumor.time_ago || '');
        return `
          <div class="intel-card ${future ? 'debug-future' : ''}" data-rumor-id="${rumor.id}" ${future ? 'style="border:2px dashed #ff4444;"' : ''}>
            <div class="intel-card-header">
              <span class="intel-title">${rumor.title}</span>
              <span class="intel-type-badge ${typeBadge}">${typeBadge}</span>
            </div>
            <p class="intel-description">${rumor.description.substring(0, 120)}${rumor.description.length > 120 ? '...' : ''}</p>
            ${dateStr ? `<div class="intel-date">📅 ${dateStr}</div>` : ''}
            <div class="intel-effects">
              ${Object.entries(rumor.effects || {}).slice(0, 3).map(([faction, value]) => `<span class="intel-effect ${value > 0 ? 'positive' : 'negative'}">${value > 0 ? '+' : ''}${value}</span>`).join('')}
            </div>
            <div class="intel-footer">${rumor.metrics.status} · ${rumor.postCount} posts</div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  container.querySelectorAll('.intel-card').forEach(card => {
    card.addEventListener('click', () => openDossierModal(card.dataset.rumorId));
  });
}

export function renderExploreTab({ container, getVisiblePosts, getCharacterData }) {
  const posterCounts = new Map();
  getVisiblePosts().forEach(post => posterCounts.set(post.characterKey, (posterCounts.get(post.characterKey) || 0) + 1));

  const topPeople = Array.from(posterCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([key]) => getCharacterData(key));

  const topics = (LORE_DATA?.rumors || [])
    .filter(r => r.cycle_impact?.label)
    .map(r => r.cycle_impact.label)
    .filter((v, i, a) => a.indexOf(v) === i)
    .slice(0, 12);

  const factionsWithActivity = Object.entries(LORE_DATA?.factions || {})
    .map(([key, faction]) => {
      const postCount = getVisiblePosts().filter(p => getCharacterData(p.characterKey).faction?.key === key).length;
      return { key, faction, postCount, memberCount: countFactionMembers(key, getCharacterData) };
    })
    .filter(f => f.postCount > 0)
    .sort((a, b) => b.postCount - a.postCount);

  container.innerHTML = `
    <div class="explore-grid">
      <div class="explore-section">
        <h4>🌟 Active People</h4>
        <div class="explore-people-grid">
          ${topPeople.map(person => `
            <a class="explore-person-card" href="profile.html?user=${person.characterKey}">
              <img src="${person.portrait}" alt="${person.name}" class="explore-person-avatar" loading="lazy">
              <div class="explore-person-name">${person.name}</div>
              <div class="explore-person-faction">${person.faction?.name || 'Independent'}</div>
            </a>
          `).join('')}
        </div>
      </div>
      <div class="explore-section">
        <h4>🔥 Hot Topics</h4>
        <div class="explore-topics-list">
          ${topics.length > 0 ? topics.map(topic => `<span class="explore-topic-tag">${topic}</span>`).join('') : '<p class="empty-text">No trending topics right now.</p>'}
        </div>
      </div>
      <div class="explore-section">
        <h4>🏛️ Active Factions</h4>
        ${factionsWithActivity.length > 0 ? `
          <div class="explore-factions-grid">
            ${factionsWithActivity.map(({ key, faction, postCount, memberCount }) => `
              <div class="explore-faction-card" data-faction="${key}">
                <img src="${faction.logo}" alt="${faction.name}" class="explore-faction-logo" loading="lazy">
                <div class="explore-faction-info">
                  <div class="explore-faction-name">${faction.name}</div>
                  <div class="explore-faction-stats"><span>${memberCount} members</span><span>•</span><span>${postCount} posts</span></div>
                </div>
                <span class="explore-faction-arrow">→</span>
              </div>
            `).join('')}
          </div>
        ` : '<p class="empty-text">No active factions right now.</p>'}
      </div>
    </div>
  `;
}

export function renderNewsTab({ container, getVisiblePosts, isContentVisible, getTrendingScore, getCharacterData, renderNavTabs, renderCurrentFeed, openDossierModal }) {
  const visiblePosts = getVisiblePosts();
  const rumors = (LORE_DATA?.rumors || []).filter(r => isContentVisible(r.date));
  const scoredPosts = visiblePosts.map(post => ({ ...post, trendingScore: getTrendingScore(post) })).sort((a, b) => b.trendingScore - a.trendingScore);
  const scoredRumors = rumors.map(rumor => {
    const relatedPosts = visiblePosts.filter(p => p.rumorId === rumor.id);
    const metrics = calculateRumorMetrics(rumor, relatedPosts);
    return { ...rumor, metrics, postCount: relatedPosts.length, score: Math.abs(metrics.finalScore) };
  }).sort((a, b) => b.score - a.score);

  const topStory = scoredRumors[0] || null;
  const secondaryRumors = scoredRumors.slice(1, 4);
  const trendingPosts = scoredPosts.slice(0, 6);
  const currentMonth = CALENDAR_DATA?.months?.values?.[CURRENT_GAME_DATE.monthIndex];
  const currentDateStr = `${currentMonth?.name || 'Unknown'} ${CURRENT_GAME_DATE.day}, ${CURRENT_GAME_DATE.year}`;

  container.innerHTML = `
    <div class="newspaper">
      <header class="newspaper-masthead">
        <div class="masthead-date">${currentDateStr}</div>
        <h1 class="masthead-title">📜 The Daily Paradox</h1>
        <div class="masthead-tagline">"All the News That's Fit to Fabricate"</div>
      </header>
      <div class="newspaper-breaking">
        <span class="breaking-label">🔴 TRENDING NOW</span>
        <div class="breaking-ticker">${scoredRumors.slice(0, 5).map(r => `<span class="ticker-item">${r.title}</span>`).join(' • ')}</div>
      </div>
      ${topStory ? `
        <article class="newspaper-headline" data-rumor-id="${topStory.id}">
          <div class="headline-category">${topStory.isEvent ? '📅 MAJOR EVENT' : '📰 TOP STORY'}</div>
          <h2 class="headline-title">${topStory.title}</h2>
          <p class="headline-lede">${topStory.description}</p>
          <div class="headline-meta">
            <span class="headline-impact ${topStory.metrics.finalScore > 0 ? 'positive' : 'negative'}">Impact: ${topStory.metrics.status}</span>
            <span class="headline-engagement">💬 ${topStory.postCount} reactions</span>
            <span class="headline-time">${topStory.time_ago || formatArcDate(topStory.date)}</span>
          </div>
          ${renderHeadlineFactions(topStory)}
        </article>
      ` : ''}
      <div class="newspaper-columns">
        <section class="newspaper-column main-column">
          <h3 class="column-header">📋 Developing Stories</h3>
          ${secondaryRumors.map(rumor => renderNewsArticle(rumor)).join('')}
        </section>
        <aside class="newspaper-column side-column">
          <h3 class="column-header">🗣️ Public Discourse</h3>
          <div class="discourse-feed">${trendingPosts.map(post => renderNewsQuote(post, getCharacterData)).join('')}</div>
          <h3 class="column-header" style="margin-top: 24px;">🏛️ Faction Watch</h3>
          <div class="faction-watch">${renderFactionWatch(getVisiblePosts, getCharacterData)}</div>
        </aside>
      </div>
      <section class="newspaper-opinions">
        <h3 class="column-header">💭 Latest Commentary</h3>
        <div class="opinions-grid">${scoredPosts.slice(6, 12).map(post => renderOpinionCard(post, getCharacterData, getTrendingScore)).join('')}</div>
      </section>
    </div>
  `;

  container.querySelectorAll('[data-rumor-id]').forEach(el => el.addEventListener('click', () => openDossierModal(el.dataset.rumorId)));
  container.querySelectorAll('[data-post-id]').forEach(el => {
    el.addEventListener('click', () => {
      const postId = el.dataset.postId;
      renderNavTabs();
      renderCurrentFeed();
      setTimeout(() => {
        const postEl = document.querySelector(`[data-post-id="${postId}"]`);
        if (postEl) postEl.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  });
}
