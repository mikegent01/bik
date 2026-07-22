// Compatibility enhancement for the deployed bundled shop.html UI.
// It makes existing effect chips keyboard-accessible and gives them a readable rules panel.
(() => {
  // AI review writes this catalog beside the live data. It lets the bundled
  // React shop show the exact reviewed rules instead of a generic fallback.
  let reviewedCatalog = {};
  fetch('data/shop-effect-details.json', { cache: 'no-store' }).then(r => r.ok ? r.json() : {}).then(data => { reviewedCatalog = data || {}; document.querySelectorAll('.live-inline-rules').forEach(el => el.remove()); document.querySelectorAll('[data-inline-rules]').forEach(el => delete el.dataset.inlineRules); decorate(); }).catch(() => {});
  const rulesFor = effect => {
    const text = effect.replace(/_/g, ' ').trim();
    const dc = text.match(/DC\s*(\d+)/i)?.[1];
    if (/command spell/i.test(text)) return `As an action, speak a one-word command through the amplified voice. Choose one creature within 60 feet that can hear and understand you. It makes a Wisdom saving throw (DC ${dc || 'the listed DC'}). On a failure, it follows the command on its next turn if doing so does not directly harm it; on a success, it is unaffected. Deafened creatures and creatures that cannot understand you are immune.`;
    if (/performance\s*\+\s*(\d+)/i.test(text)) return `While the microphone is held or worn openly, add ${text.match(/\+\s*(\d+)/)?.[1] || 'the listed bonus'} to Charisma (Performance) checks made to sing, speak, rally a crowd, or deliver a rehearsed command. This is an item bonus and does not stack with another item that grants a named Performance bonus.`;
    if (/echoes? in large areas/i.test(text)) return `When its bearer speaks, sings, or uses this item’s command effect in a hall, cavern, arena, or other space at least 60 feet across, the sound carries clearly to 300 feet instead of its normal audible distance. The echo can reveal the speaker’s rough direction, but it does not transmit through a closed door, a silence effect, or an airtight barrier.`;
    if (/silence.*(\d+)\s*turn/i.test(text)) return `For ${text.match(/(\d+)\s*turn/i)?.[1] || 'the listed'} turns, the affected creature cannot provide verbal spell components and cannot be heard beyond normal nonmagical sound. The effect ends early if the creature leaves the item’s stated area or succeeds at any listed saving throw.`;
    if (/once per day.*(invincibility|resistance)/i.test(text)) return `As an action, you awaken the item’s protective surge. For 1 minute, you have resistance to all damage; this halves damage after other reductions, but does not make you immune to conditions, falling, or effects that do not deal damage. The surge ends early if you are incapacitated, the item is destroyed, or its 1/day use has already been spent.`;
    return `This is a homebrew shop effect: ${text}. Its activation, exact target, and limits are determined by the item’s reviewed rules. The effect ends when its stated duration expires, its charges are spent, or the item is destroyed; it is not automatically a generic consumable action.`;
  };
  const itemNameFor = group => {
    let node = group;
    for (let i = 0; node && i < 7; i++, node = node.parentElement) {
      const heading = node.querySelector?.('h1,h2,h3');
      if (heading?.textContent?.trim()) return heading.textContent.trim();
    }
    return '';
  };
  const reviewedFor = group => reviewedCatalog[`name:${itemNameFor(group).toLowerCase()}`] || null;
  const usageFor = group => {
    const cardText = (group.closest('[role="dialog"]') || group.parentElement?.parentElement || document.body).textContent.toLowerCase();
    if (cardText.includes('consumable')) return 'USAGE & INVENTORY: Activate as listed on the item. Unless its reviewed rules say it has charges, this is consumed and removed from inventory immediately after its effect resolves.';
    if (cardText.includes('material')) return 'USAGE & INVENTORY: This is a crafting material. It stays in inventory until a recipe, repair, or stated ability consumes it; remove the listed quantity only when that process completes.';
    if (cardText.includes('service')) return 'USAGE & INVENTORY: This is redeemed when its listed service is completed. Remove it from inventory after redemption; unused service tokens remain valid until their stated expiry.';
    return 'USAGE & INVENTORY: Equip or carry this item as its reviewed rules require. Normal use does not remove it from inventory; remove it only if a listed charge is spent, it is intentionally consumed, or it is destroyed by a stated effect.';
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
      const reviewed = reviewedFor(group);
      [...group.querySelectorAll('.effect-tag')].filter(chip => !/^\+\d+\s+more$/i.test(chip.textContent.trim())).forEach((chip, index) => {
        const row = document.createElement('div'); row.className = 'live-inline-rule';
        const label = document.createElement('strong'); label.textContent = chip.textContent.trim();
        const explanation = document.createElement('span');
        explanation.textContent = reviewed?.effectDetails?.[index]?.rules || rulesFor(chip.textContent.trim());
        row.append(label, explanation); rules.append(row);
      });
      const usage = document.createElement('div'); usage.className = 'live-inline-usage';
      usage.textContent = reviewed?.usage ? `USAGE & INVENTORY\nActivation: ${reviewed.usage.activation}\nDuration: ${reviewed.usage.duration}\nEnds / removed when: ${reviewed.usage.endsWhen}\nCharges: ${reviewed.usage.charges}` : usageFor(group);
      rules.append(usage);
      group.insertAdjacentElement('afterend', rules);
    });
  };
  new MutationObserver(decorate).observe(document.documentElement, { childList: true, subtree: true }); decorate();
})();
