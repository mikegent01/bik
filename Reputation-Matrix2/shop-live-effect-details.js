// Compatibility enhancement for the deployed bundled shop.html UI.
// It makes existing effect chips keyboard-accessible and gives them a readable rules panel.
(() => {
  const rulesFor = effect => {
    const text = effect.replace(/_/g, ' ').trim();
    const dc = text.match(/DC\s*(\d+)/i)?.[1];
    if (/command spell/i.test(text)) return `When you use this item, choose one creature that can hear you within 60 feet. It must succeed on a Wisdom saving throw (DC ${dc || 'the listed DC'}) or follow a one-word command on its next turn, as adjudicated by the DM. This effect fails if the creature cannot hear or understand you.`;
    if (/performance\s*\+\s*(\d+)/i.test(text)) return `While this item is carried or used as described, add ${text.match(/\+\s*(\d+)/)?.[1] || 'the listed bonus'} to Charisma (Performance) checks. The bonus does not stack with another item that grants the same named bonus.`;
    if (/silence.*(\d+)\s*turn/i.test(text)) return `For ${text.match(/(\d+)\s*turn/i)?.[1] || 'the listed'} turns, the affected creature cannot provide verbal spell components and cannot be heard beyond normal nonmagical sound. The effect ends early if the creature leaves the item’s stated area or succeeds at any listed saving throw.`;
    if (/once per day.*(invincibility|resistance)/i.test(text)) return `As an action, you awaken the item’s protective surge. For 1 minute, you have resistance to all damage; this halves damage after other reductions, but does not make you immune to conditions, falling, or effects that do not deal damage. The surge ends early if you are incapacitated, the item is destroyed, or its 1/day use has already been spent.`;
    return `This is a homebrew shop effect: ${text}. Its activation, exact target, and limits are determined by the item’s reviewed rules. The effect ends when its stated duration expires, its charges are spent, or the item is destroyed; it is not automatically a generic consumable action.`;
  };
  const open = (effect, itemName) => {
    document.querySelector('.live-effect-dialog')?.remove();
    const overlay = document.createElement('div'); overlay.className = 'live-effect-dialog';
    const panel = document.createElement('section'); panel.className = 'live-effect-panel'; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-modal', 'true');
    const close = document.createElement('button'); close.className = 'live-effect-close'; close.textContent = '×'; close.setAttribute('aria-label', 'Close effect details');
    const heading = document.createElement('h3'); heading.textContent = `⚡ ${effect}`;
    const item = document.createElement('p'); item.className = 'live-effect-item'; item.textContent = itemName || '';
    const rules = document.createElement('p'); rules.textContent = rulesFor(effect);
    const usage = document.createElement('p'); usage.className = 'live-effect-usage';
    usage.textContent = /once per day/i.test(effect) ? 'USAGE: Activation — Action. Duration — 1 minute. Ends when — duration expires, you are incapacitated, or the item is destroyed. Charges — 1 use; refreshes at the next dawn.' : 'USAGE: This entry needs its item-specific reviewed usage record; it is not treated as a generic one-use consumable.';
    panel.append(close, heading); if (itemName) panel.append(item); panel.append(rules, usage); overlay.append(panel); document.body.append(overlay);
    close.focus(); overlay.addEventListener('click', e => { if (e.target === overlay || e.target === close) overlay.remove(); });
  };
  const decorate = () => {
    document.querySelectorAll('.effect-tag:not([data-live-effect])').forEach(tag => {
      tag.dataset.liveEffect = 'true'; tag.tabIndex = 0; tag.setAttribute('role', 'button'); tag.setAttribute('title', 'Click for a focused rules view');
      const show = () => open(tag.textContent.trim(), tag.closest('[role="dialog"]')?.querySelector('h2')?.textContent);
      tag.addEventListener('click', show); tag.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(); } });
    });
    // The bundled page originally hid all rules behind chips. Show a readable
    // explanation directly beneath every current item’s effects as well.
    document.querySelectorAll('.effect-tag[data-live-effect]').forEach(tag => {
      const group = tag.parentElement;
      if (!group || group.dataset.inlineRules) return;
      group.dataset.inlineRules = 'true';
      const rules = document.createElement('div'); rules.className = 'live-inline-rules';
      const title = document.createElement('div'); title.className = 'live-inline-heading'; title.textContent = '📖 WHAT THESE EFFECTS DO'; rules.append(title);
      [...group.querySelectorAll('.effect-tag')].forEach(chip => {
        const row = document.createElement('div'); row.className = 'live-inline-rule';
        const label = document.createElement('strong'); label.textContent = chip.textContent.trim();
        const explanation = document.createElement('span'); explanation.textContent = rulesFor(chip.textContent.trim());
        row.append(label, explanation); rules.append(row);
      });
      group.insertAdjacentElement('afterend', rules);
    });
  };
  new MutationObserver(decorate).observe(document.documentElement, { childList: true, subtree: true }); decorate();
})();
