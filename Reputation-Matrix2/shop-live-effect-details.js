// Compatibility enhancement for the deployed bundled shop.html UI.
// It makes existing effect chips keyboard-accessible and gives them a readable rules panel.
(() => {
  const rulesFor = effect => {
    const text = effect.replace(/_/g, ' ').trim();
    const dc = text.match(/DC\s*(\d+)/i)?.[1];
    if (/command spell/i.test(text)) return `When you use this item, choose one creature that can hear you within 60 feet. It must succeed on a Wisdom saving throw (DC ${dc || 'the listed DC'}) or follow a one-word command on its next turn, as adjudicated by the DM. This effect fails if the creature cannot hear or understand you.`;
    if (/performance\s*\+\s*(\d+)/i.test(text)) return `While this item is carried or used as described, add ${text.match(/\+\s*(\d+)/)?.[1] || 'the listed bonus'} to Charisma (Performance) checks. The bonus does not stack with another item that grants the same named bonus.`;
    if (/silence.*(\d+)\s*turn/i.test(text)) return `For ${text.match(/(\d+)\s*turn/i)?.[1] || 'the listed'} turns, the affected creature cannot provide verbal spell components and cannot be heard beyond normal nonmagical sound. The effect ends early if the creature leaves the item’s stated area or succeeds at any listed saving throw.`;
    return `${text}. Use the item exactly as its card states. Unless a card provides a different activation, using a consumable takes an action. Its listed effect ends when its duration expires, its listed uses are spent, or the item is destroyed.`;
  };
  const open = (effect, itemName) => {
    document.querySelector('.live-effect-dialog')?.remove();
    const overlay = document.createElement('div'); overlay.className = 'live-effect-dialog';
    const panel = document.createElement('section'); panel.className = 'live-effect-panel'; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-modal', 'true');
    const close = document.createElement('button'); close.className = 'live-effect-close'; close.textContent = '×'; close.setAttribute('aria-label', 'Close effect details');
    const heading = document.createElement('h3'); heading.textContent = `⚡ ${effect}`;
    const item = document.createElement('p'); item.className = 'live-effect-item'; item.textContent = itemName || 'Shop item';
    const rules = document.createElement('p'); rules.textContent = rulesFor(effect);
    const usage = document.createElement('p'); usage.className = 'live-effect-usage'; usage.textContent = 'USAGE: Check the item’s full reviewed rules for activation, duration, charges, and what ends the effect.';
    panel.append(close, heading, item, rules, usage); overlay.append(panel); document.body.append(overlay);
    close.focus(); overlay.addEventListener('click', e => { if (e.target === overlay || e.target === close) overlay.remove(); });
  };
  const decorate = () => document.querySelectorAll('.effect-tag:not([data-live-effect])').forEach(tag => {
    tag.dataset.liveEffect = 'true'; tag.tabIndex = 0; tag.setAttribute('role', 'button'); tag.setAttribute('title', 'Click for rule details');
    const show = () => open(tag.textContent.trim(), tag.closest('[role="dialog"]')?.querySelector('h2')?.textContent);
    tag.addEventListener('click', show); tag.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(); } });
  });
  new MutationObserver(decorate).observe(document.documentElement, { childList: true, subtree: true }); decorate();
})();
