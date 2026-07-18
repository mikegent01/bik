const grid = document.getElementById('projection-grid');
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function projectionScore(nation) {
  const population = Number.parseInt(String(nation.population || '').replace(/[^0-9]/g, ''), 10) || 0;
  const populationWeight = clamp(Math.log10(Math.max(population, 10)) * 12, 8, 32);
  const statusWeight = /active|kingdom|empire|republic|dominion/i.test(`${nation.status} ${nation.type}`) ? 28 : 16;
  const factionWeight = nation.controllingFaction ? 18 : 8;
  const regionalWeight = nation.region ? 12 : 4;
  return Math.round(clamp(populationWeight + statusWeight + factionWeight + regionalWeight, 1, 100));
}

function escapeHtml(value) { return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

async function init() {
  try {
    const response = await fetch('./data/nations.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const nations = await response.json();
    grid.innerHTML = nations.slice(0, 24).map(nation => {
      const score = projectionScore(nation);
      return `<article class="projection-card"><h3>${escapeHtml(nation.name)}</h3><div class="projection-meta"><span>${escapeHtml(nation.region || 'Unmapped')}</span><strong>${score}/100</strong></div><div class="power-meter" aria-label="Projected power ${score} out of 100"><span style="width:${score}%"></span></div><p>${escapeHtml(nation.summary || nation.description || 'No Waluigi-approved assessment filed yet.').slice(0, 280)}</p><a href="laws.html">View cultural and legal context →</a></article>`;
    }).join('');
  } catch (error) {
    grid.innerHTML = '<p class="page-subtitle">The projection desk is offline. Waluigi blames the filing cabinet. Try the <a href="directory.html">faction directory</a> instead.</p>';
    console.error('Could not load national projections', error);
  }
}
init();
