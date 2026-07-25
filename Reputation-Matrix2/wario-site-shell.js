// Wario Site Shell
// shop.html previously had NO site navigation at all — no header, no way back to
// Waluipedia, nothing tying it to the rest of the archive. This injects the real
// site chrome at the TOP of the page (matching index.html's topbar) so the shop
// reads as part of the website instead of a standalone app.
//
// It deliberately does not duplicate the shop's own UI: the React storefront keeps
// its search, filters and cart. This only adds what was missing — site identity,
// cross-links, the shared music control, and the loot/lore panel.
(() => {
  if (window.WarioSiteShell?.__v1) return;

  const LINKS = [
    { href: '../index.html#/home',              icon: '🏠', label: 'Waluipedia' },
    { href: '../index.html#/items',             icon: '🎒', label: 'Item Index' },
    { href: '../index.html#/crafting',          icon: '⚒️', label: 'Crafting' },
    { href: 'currency.html',                    icon: '🏦', label: 'Bank' },
    { href: '../index.html#/pond-docket',       icon: '⚖️', label: 'Pond Docket' },
    { href: 'xp.html',                          icon: '✦',  label: 'XP' }
  ];

  function build() {
    if (document.getElementById('warioShell')) return;

    const bar = document.createElement('header');
    bar.id = 'warioShell';
    bar.innerHTML = `
      <a class="ws-brand" href="../index.html#/home" title="Back to Waluipedia">
        <span class="ws-logo">W</span>
        <span class="ws-brandtxt"><b>Waluipedia</b><em>Wario's Warehouse</em></span>
      </a>
      <nav class="ws-nav">${LINKS.map(l =>
        `<a class="ws-link" href="${l.href}"><span>${l.icon}</span><em>${l.label}</em></a>`).join('')}</nav>
      <div class="ws-right">
        <button class="ws-btn" id="wsLoot" title="Your loot — what you own and where it appears in the story">
          🎒 <em>Loot</em> <i id="wsLootN"></i>
        </button>
        <button class="ws-btn" id="wsMusic" title="Music — shared with the rest of the site">🔇</button>
      </div>`;
    document.body.insertBefore(bar, document.body.firstChild);
    document.documentElement.classList.add('has-wario-shell');

    document.getElementById('wsMusic').addEventListener('click', () => {
      const on = window.WarioAudioBridge ? window.WarioAudioBridge.toggleMusic() : false;
      paintMusic(on);
    });
    document.getElementById('wsLoot').addEventListener('click', () => window.WarioLoot?.open());
    paintMusic(!!window.WarioAudioBridge?.musicOn);
    document.addEventListener('wario-music-changed', e => paintMusic(e.detail.on));
    document.addEventListener('wario-loot-changed', paintLoot);
    paintLoot();
  }

  function paintMusic(on) {
    const b = document.getElementById('wsMusic');
    if (b) { b.textContent = on ? '🔊' : '🔇'; b.classList.toggle('on', !!on); }
  }
  function paintLoot() {
    const n = document.getElementById('wsLootN');
    if (!n || !window.WarioLoot) return;
    // count() needs the DM ledger; make sure it's fetched before we badge.
    Promise.resolve(window.WarioLoot.ready?.()).then(() => {
      const c = window.WarioLoot.count();
      n.textContent = c || '';
      n.style.display = c ? '' : 'none';
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();

  window.WarioSiteShell = { __v1: true, paintLoot };
})();
