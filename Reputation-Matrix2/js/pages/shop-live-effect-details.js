// Compatibility enhancement for the deployed bundled shop.html UI.
// It makes existing effect chips keyboard-accessible and gives them a readable rules panel.
(() => {
  // AI review writes this catalog beside the live data. It lets the bundled
  // React shop show the exact reviewed rules instead of a generic fallback.
  let reviewedCatalog = {};
  const normalizeKey = value => String(value || '').toLowerCase().trim();
  const parseItemsModule = source => {
    const match = source.match(/export\s+const\s+(ITEMS_\d+)\s*=/);
    if (!match) return {};
    const code = source
      .replace(/^\s*import\s+.*$/gm, '')
      .replace(/export\s+const\s+(ITEMS_\d+)\s*=/, 'const $1 =');
    const categories = "const SHOP_CATEGORIES = new Proxy({}, { get: (_, key) => String(key).toLowerCase() });\n";
    return new Function(`${categories}${code}\nreturn ${match[1]};`)() || {};
  };
  const mergeReviewedItems = items => {
    Object.values(items || {}).forEach(item => {
      if (!item) return;
      if (item.id) reviewedCatalog[item.id] = item;
      if (item.name) reviewedCatalog[`name:${normalizeKey(item.name)}`] = item;
    });
  };
  const loadReviewedCatalog = async () => {
    try {
      const response = await fetch('data/shop-effect-details.json', { cache: 'no-store' });
      if (response.ok) reviewedCatalog = await response.json() || {};
    } catch {}

    // Prefer the live shop-items folder because that is the canonical item data
    // users edit. It includes effectDetails and usage on records like 1_up_deluxe.
    for (const base of ['../../data/shop-items/', './shop-items/']) {
      let loadedAny = false;
      let misses = 0;
      for (let fileNo = 1; fileNo <= 105; fileNo++) {
        const path = `${base}items_${String(fileNo).padStart(3, '0')}.js`;
        try {
          const response = await fetch(path, { cache: 'no-store' });
          if (!response.ok) {
            if (loadedAny && ++misses >= 5) break;
            continue;
          }
          const text = await response.text();
          if (!/export\s+const\s+ITEMS_\d+/.test(text)) continue;
          mergeReviewedItems(parseItemsModule(text));
          loadedAny = true;
          misses = 0;
        } catch {
          if (loadedAny && ++misses >= 5) break;
        }
      }
      if (loadedAny) break;
    }

    document.querySelectorAll('.live-inline-rules').forEach(el => el.remove());
    document.querySelectorAll('[data-inline-rules]').forEach(el => delete el.dataset.inlineRules);
    decorate();
  };
  // Deferred: loadReviewedCatalog() calls decorate(), which is declared further
  // down as a const. Kicking it off here only worked because fetch() happened to
  // suspend first — under file:// (or any sync-throwing fetch) it hit the TDZ and
  // killed the whole module. Started at the bottom instead, after decorate exists.
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
  const reviewedForName = itemName => reviewedCatalog[`name:${normalizeKey(itemName)}`] || null;
  const reviewedFor = group => reviewedForName(itemNameFor(group));
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
    const reviewed = reviewedForName(itemName);
    const effectIndex = (reviewed?.effects || []).findIndex(name => normalizeKey(name) === normalizeKey(effect));
    const reviewedDetail = effectIndex >= 0 ? reviewed?.effectDetails?.[effectIndex] : null;
    const rules = document.createElement('p'); rules.textContent = reviewedDetail?.rules || rulesFor(effect);
    const usage = document.createElement('p'); usage.className = 'live-effect-usage';
    usage.textContent = reviewed?.usage ? `USAGE: Activation — ${reviewed.usage.activation}. Duration — ${reviewed.usage.duration}. Ends when — ${reviewed.usage.endsWhen}. Charges — ${reviewed.usage.charges}.` : (/once per day/i.test(effect) ? 'USAGE: Activation — Action. Duration — 1 minute. Ends when — duration expires, you are incapacitated, or the item is destroyed. Charges — 1 use; refreshes at the next dawn.' : 'USAGE: This entry needs its item-specific reviewed usage record; it is not treated as a generic one-use consumable.');
    panel.append(close, heading); if (itemName) panel.append(item); panel.append(rules, usage); overlay.append(panel); document.body.append(overlay);
    close.focus(); overlay.addEventListener('click', e => { if (e.target === overlay || e.target === close) overlay.remove(); });
  };
  const ensureShopLinkStyle = () => {
    if (document.getElementById('shop-wiki-link-style')) return;
    const style = document.createElement('style');
    style.id = 'shop-wiki-link-style';
    style.textContent = `.shop-wiki-link{color:#facc15;text-decoration:none;border-bottom:1px dotted rgba(250,204,21,.6);font-weight:700}.shop-wiki-link:hover{color:#fff3a3;border-bottom-style:solid}`;
    document.head.appendChild(style);
  };
  const SHOP_WIKI_LINKS = [
    ['Iron Legion', '../index.html#/reputation/faction/iron_legion'],
    ['Regal Empire', '../index.html#/reputation/faction/regal_empire'],
    ['Mushroom Kingdom', '../index.html#/atlas/mushroom_kingdom'],
    ['Toad Town', '../index.html#/atlas/mushroom_kingdom'],
    ['Bowser', '../index.html#/article/bowser'],
    ['Wario', '../index.html#/article/wario'],
    ['Waluigi', '../index.html#/article/waluigi'],
    ['Fawful', '../index.html#/article/fawful'],
    ['Koopa Troop', '../index.html#/reputation/faction/koopa_troop'],
    ['Onyx Hand', '../index.html#/reputation/faction/onyx_hand'],
    ['Mages\' Guild', '../index.html#/reputation/faction/mages_guild'],
    ['Peach Loyalists', '../index.html#/reputation/faction/peach_loyalists'],
    ['Rakasha', '../index.html#/reputation/faction/rakasha_clans'],
    ['Star Road', '../index.html#/artifacts'],
    ['Shadow Estate', '../index.html#/article/shadow_estate_spotlight_cookie_cottage'],
    ['Vigilance', '../index.html#/article/the_vigilance'],
    ['Legionlance', '../index.html#/imperial-network']
  ];
  const linkShopLore = root => {
    ensureShopLinkStyle();
    const scope = root || document;
    scope.querySelectorAll('.wario-card p,.checkout-item-card p,.live-inline-rule span,.live-effect-panel p').forEach(node => {
      if (node.dataset.shopWikiLinked || node.closest('a,button')) return;
      let html = node.innerHTML;
      for (const [label, href] of SHOP_WIKI_LINKS) {
        const safe = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp(`(^|[^>\\w])(${safe})(?![^<]*>|[\\w])`, 'i');
        if (re.test(html)) {
          html = html.replace(re, `$1<a class="shop-wiki-link" href="${href}" title="Open Waluipedia: ${label}">$2</a>`);
          break;
        }
      }
      node.innerHTML = html;
      node.dataset.shopWikiLinked = 'true';
    });
  };

  const decorate = () => {
    linkShopLore(document);
    document.querySelectorAll('.effect-tag:not([data-live-effect])').forEach(tag => {
      tag.dataset.liveEffect = 'true'; tag.tabIndex = 0; tag.setAttribute('role', 'button'); tag.setAttribute('title', 'Click for a focused rules view');
      const show = () => open(tag.textContent.trim(), tag.closest('[role="dialog"]')?.querySelector('h2')?.textContent || itemNameFor(tag.parentElement));
      tag.addEventListener('click', show); tag.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(); } });
    });
    // The bundled page originally hid all rules behind chips. Show a readable
    // explanation directly beneath every current item’s effects as well.
    document.querySelectorAll('.effect-tag[data-live-effect]').forEach(tag => {
      const group = tag.parentElement;
      // Keep catalog cards compact. Full rules stay in the focused effect dialog / item modal.
      if (!group || group.dataset.inlineRules || !group.closest('[role="dialog"]')) return;
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
  loadReviewedCatalog();
})();
