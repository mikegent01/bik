import { WALLETS, CURRENCIES } from './currency.js';

const SELECT_KEY = 'warehousePaymentCurrency';
const PRICE_TEXT = new WeakMap();
const aliases = {
  archie_miser: 'archie',
  markop_judi: 'markop',
  fng_remi: 'remi',
  waluigi_miser: 'waluigi'
};

let wallets = WALLETS || {};
let selected = localStorage.getItem(SELECT_KEY) || 'gold';
let renderQueued = false;
let lastBridgeMarkup = '';
let lastAppliedCartGold = null;
let observer = null;

function esc(value) {
  return String(value ?? '').replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
}

function normalizeUserId(raw) {
  const id = String(raw || '').trim().toLowerCase();
  return aliases[id] || id;
}

function currentUserId() {
  return normalizeUserId(
    localStorage.getItem('waluipediaUser') ||
    localStorage.getItem('currentUserId') ||
    localStorage.getItem('loggedInUser') ||
    ''
  );
}

function currentWallet() {
  const uid = currentUserId();
  return uid ? wallets[uid] || wallets[normalizeUserId(uid.replace('_miser', ''))] || null : null;
}

function walletCurrencyIds(wallet = currentWallet()) {
  const ids = Object.keys(wallet?.currencies || {}).filter(id => CURRENCIES[id]);
  return ids.length ? ids : Object.keys(CURRENCIES || {});
}

function ensureSelectedCurrency() {
  const wallet = currentWallet();
  const allowed = walletCurrencyIds(wallet);
  if (!allowed.includes(selected)) {
    selected = allowed.includes('gold') ? 'gold' : allowed[0] || 'gold';
    localStorage.setItem(SELECT_KEY, selected);
  }
}

async function loadWallets() {
  try {
    const response = await fetch('./wallets.json', { cache: 'no-cache' });
    if (response.ok) {
      const json = await response.json();
      wallets = { ...(WALLETS || {}), ...json };
    }
  } catch (error) {
    console.warn('[Shop Currency] Could not load wallets.json; using currency.js wallets.', error);
  }
  ensureSelectedCurrency();
}

function currency(id = selected) {
  return CURRENCIES[id] || CURRENCIES.gold || { id: 'gold', name: 'Gold Piece', icon: '🪙', base_value: 1 };
}

function selectedHolding() {
  const wallet = currentWallet();
  return Number(wallet?.currencies?.[selected] || 0);
}

function selectedHoldingGoldValue() {
  const c = currency(selected);
  return selectedHolding() * (Number(c.base_value) || 1);
}

function formatCurrency(goldAmount, id = selected) {
  const c = currency(id);
  const amount = Number(goldAmount) / (Number(c.base_value) || 1);
  return `${c.icon || '🪙'} ${amount.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${c.name || id}`;
}

function parseNumber(text) {
  return Number(String(text).replace(/,/g, ''));
}

function convertCurrencyString(text) {
  return String(text).replace(/🪙\s*([+-]?\s*[0-9][0-9,]*(?:\.\d+)?)/g, (match, raw) => {
    const gold = parseNumber(raw.replace(/\s+/g, ''));
    return Number.isFinite(gold) ? formatCurrency(gold) : match;
  });
}

function convertTextNode(node) {
  if (!node?.nodeValue || node.parentElement?.closest('#playerWalletBridge')) return;
  const original = PRICE_TEXT.get(node) || node.nodeValue;
  if (!/🪙\s*[+-]?\s*[0-9]/.test(original)) return;
  PRICE_TEXT.set(node, original);
  const converted = convertCurrencyString(original);
  if (converted !== node.nodeValue) node.nodeValue = converted;
}

function convertSimpleCurrencyElement(el) {
  if (!el || el.closest('#playerWalletBridge')) return;
  if (el.children.length > 0) return;
  const text = el.textContent || '';
  const original = el.dataset.currencyOriginal || text;
  const c = currency();
  const needMatch = original.match(/^You need\s+([0-9][0-9,]*(?:\.\d+)?)\s+more\s+(?:coins|.+)!$/);
  if (needMatch) {
    el.dataset.currencyOriginal = `You need ${needMatch[1]} more coins!`;
    const convertedNeed = `You need ${formatCurrency(parseNumber(needMatch[1]))} more ${c.name || selected}!`;
    if (convertedNeed !== text) el.textContent = convertedNeed;
    return;
  }
  if (!/🪙\s*[+-]?\s*[0-9]/.test(original)) return;
  el.dataset.currencyOriginal = original;
  const converted = convertCurrencyString(original);
  if (converted !== text) el.textContent = converted;
}

function relabelGoldTextNodes() {
  const c = currency();
  const label = c.name || selected;
  const replacements = [
    [/\bYour Gold\b/g, `Your ${label}`],
    [/\bRemaining Gold\b/g, `Remaining ${label}`],
    [/\bNOT ENOUGH GOLD\b/g, `NOT ENOUGH ${label.toUpperCase()}`],
    [/\bmore coins!\b/g, `more ${label}!`],
    [/\bonly have ([0-9,]+)!/g, (_, n) => `only have ${formatCurrency(parseNumber(n))}!`],
    [/\bcoins but only have\b/g, `${label} but only have`]
  ];
  const root = document.getElementById('root');
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (node.parentElement?.closest('#playerWalletBridge')) return;
    let text = node.nodeValue;
    for (const [pattern, replacement] of replacements) text = text.replace(pattern, replacement);
    if (text !== node.nodeValue) node.nodeValue = text;
  });
}

function convertMarkedPrices(root) {
  root.querySelectorAll('[data-gold-price]').forEach(el => {
    if (el.closest('#playerWalletBridge')) return;
    const gold = Number(el.getAttribute('data-gold-price'));
    if (!Number.isFinite(gold)) return;
    const converted = formatCurrency(gold);
    if (el.textContent !== converted) el.textContent = converted;
  });
}

function convertVisiblePrices() {
  const root = document.getElementById('root');
  if (!root) return;

  convertMarkedPrices(root);

  const textWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (textWalker.nextNode()) textNodes.push(textWalker.currentNode);
  textNodes.forEach(convertTextNode);

  root.querySelectorAll('span,div,button,pre').forEach(convertSimpleCurrencyElement);
  relabelGoldTextNodes();
}

function currencyOptions() {
  return walletCurrencyIds().map(id => {
    const c = CURRENCIES[id];
    return `<option value="${esc(id)}" ${id === selected ? 'selected' : ''}>${esc(c.icon || '🪙')} ${esc(c.name || id)}</option>`;
  }).join('');
}

function walletHoldingsMarkup(wallet) {
  const entries = Object.entries(wallet?.currencies || {}).filter(([id]) => CURRENCIES[id]);
  if (!entries.length) return '<span>No recorded currency holdings</span>';
  return entries.map(([id, amount]) => {
    const c = currency(id);
    const goldValue = Number(amount) * (Number(c.base_value) || 1);
    return `<span title="≈ ${esc(goldValue.toLocaleString(undefined, { maximumFractionDigits: 2 }))} gold value">${esc(c.icon || '🪙')} ${esc(Number(amount).toLocaleString())} ${esc(c.name || id)}</span>`;
  }).join('');
}

function applyActualWalletToCart() {
  const cart = window.WarioCart;
  if (!cart || typeof cart.setPlayerGold !== 'function') return;
  const wallet = currentWallet();
  if (!wallet) return;

  const goldValue = selectedHoldingGoldValue();
  if (goldValue === lastAppliedCartGold && Math.abs(Number(cart.playerGold) - goldValue) < 0.000001) return;

  lastAppliedCartGold = goldValue;
  cart.setPlayerGold(goldValue);
  window.dispatchEvent(new CustomEvent('wario-currency-wallet-applied', {
    detail: { currency: selected, amount: selectedHolding(), goldValue }
  }));
}

function renderBridge() {
  ensureSelectedCurrency();
  const root = document.getElementById('root');
  if (!root) return;

  let box = document.getElementById('playerWalletBridge');
  if (!box) {
    box = document.createElement('section');
    box.id = 'playerWalletBridge';
    root.prepend(box);
  }

  const uid = currentUserId();
  const wallet = currentWallet();
  const c = currency();
  const rate = (1 / (Number(c.base_value) || 1)).toLocaleString(undefined, { maximumFractionDigits: 4 });
  const allowed = walletCurrencyIds(wallet);

  const markup = wallet ? `
    <div class="bridge-wallet currency-integrated">
      <div>
        <b>Connected operator:</b> ${esc(wallet.name || uid)}
        <small>Actual wallet payment mode · dropdown limited to this character's currencies (${allowed.length})</small>
      </div>
      <div class="bridge-coins">${walletHoldingsMarkup(wallet)}</div>
      <label class="bridge-payment">💳 Pay with
        <select id="warehousePaymentCurrency">${currencyOptions()}</select>
        <small>Available: ${esc(c.icon || '🪙')} ${esc(selectedHolding().toLocaleString())} ${esc(c.name || selected)} · 1 Gold = ${esc(rate)} ${esc(c.name || selected)}. Affordability now uses this actual holding.</small>
      </label>
      <a href="currency.html">Currency rates →</a>
    </div>` : `
    <div class="bridge-warning currency-integrated">
      🔐 <b>No operator wallet connected</b>
      <span>Connect a character first; then this dropdown will only show that character's currencies.</span>
      <label class="bridge-payment">💳 Display prices in
        <select id="warehousePaymentCurrency">${currencyOptions()}</select>
      </label>
      <a href="battlefield.html#/login">Open Waluipedia Login →</a>
    </div>`;

  if (markup !== lastBridgeMarkup) {
    box.innerHTML = markup;
    lastBridgeMarkup = markup;
    const select = box.querySelector('#warehousePaymentCurrency');
    if (select) {
      select.addEventListener('change', event => {
        selected = event.target.value;
        localStorage.setItem(SELECT_KEY, selected);
        lastAppliedCartGold = null;
        renderBridge();
        applyActualWalletToCart();
        convertVisiblePrices();
      });
    }
  }
}

function schedule() {
  if (renderQueued) return;
  renderQueued = true;
  requestAnimationFrame(() => {
    renderQueued = false;
    renderBridge();
    applyActualWalletToCart();
    convertVisiblePrices();
  });
}

loadWallets().then(() => {
  renderBridge();
  applyActualWalletToCart();
  convertVisiblePrices();
  const target = document.getElementById('root') || document.body;
  observer = new MutationObserver(schedule);
  observer.observe(target, { childList: true, subtree: true, characterData: true });
  setTimeout(schedule, 250);
  setTimeout(schedule, 1000);
});

window.addEventListener('storage', event => {
  if (event.key === SELECT_KEY) selected = event.newValue || selected;
  lastAppliedCartGold = null;
  schedule();
});
window.addEventListener('wario-item-added', schedule);
window.WarioShopCurrency = {
  setCurrency(id) {
    selected = id;
    localStorage.setItem(SELECT_KEY, id);
    lastAppliedCartGold = null;
    schedule();
  },
  refresh: schedule,
  getSelectedCurrency: () => selected,
  getSelectedHolding: selectedHolding
};
