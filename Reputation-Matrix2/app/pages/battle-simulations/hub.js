(() => {
  const storageKey = 'waluipedia:battle-sim:archie-vs-scorncrow:last-result:v1';
  const notice = document.querySelector('[data-copy-notice]');

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    return copied ? Promise.resolve() : Promise.reject(new Error('Copy unavailable'));
  }

  function copy(url, label) {
    copyText(url).then(() => {
      if (notice) notice.textContent = `${label} copied.`;
    }).catch(() => {
      if (notice) notice.textContent = 'Copy unavailable. Copy the URL from your browser.';
    });
  }

  document.querySelector('[data-copy-hub]')?.addEventListener('click', () => {
    copy(location.href.split('#')[0], 'Simulation hub link');
  });

  document.querySelector('[data-copy-battle]')?.addEventListener('click', () => {
    copy(new URL('archie-vs-scorncrow.html', location.href).href, 'Direct player link');
  });

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (!saved || saved.encounterId !== 'archie-vs-scorncrow') return;
    const panel = document.querySelector('[data-last-result]');
    if (!panel) return;
    panel.hidden = false;
    panel.querySelector('[data-last-title]').textContent = saved.title;
    panel.querySelector('[data-last-detail]').textContent = `Archie ${saved.archieDamage} dmg · Scorncrow ${saved.scorncrowDamage} dmg · Nimbus ${saved.nimbus}%`;
  } catch {
    // Local storage is optional; the encounter remains fully playable without it.
  }
})();
