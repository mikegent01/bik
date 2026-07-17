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
const GOLD_FALLBACK_FEE = 0.10;

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


function cartRows() {
  const cart = window.WarioCart;
  return cart && typeof cart.getItems === 'function' ? cart.getItems() : [];
}

function itemCurrencyKey(item) {
  return String(item?.priceCurrency || item?.currencyKey || item?.currency || 'gold').trim().toLowerCase();
}

function itemGoldValue(item, quantity = 1) {
  const amount = Number(item?.price || 0);
  const c = currency(itemCurrencyKey(item));
  const discount = typeof item?.discount === 'number' && item.discount > 0 ? (1 - item.discount / 100) : 1;
  return Math.floor(amount * discount) * (Number(c.base_value) || 1) * quantity;
}

function checkoutQuoteCurrency() {
  const rows = cartRows();
  if (!rows.length) return selected;
  const totals = new Map();
  for (const row of rows) {
    const key = itemCurrencyKey(row.item);
    const value = itemGoldValue(row.item, row.quantity || 1);
    totals.set(key, (totals.get(key) || 0) + value);
  }
  const ranked = [...totals.entries()].sort((a, b) => {
    const aRare = a[0] === 'gold' ? 1 : 0;
    const bRare = b[0] === 'gold' ? 1 : 0;
    return aRare - bRare || b[1] - a[1];
  });
  return ranked[0]?.[0] || selected;
}

function checkoutTotalGold() {
  const cart = window.WarioCart;
  return cart && typeof cart.getGrandTotal === 'function' ? Number(cart.getGrandTotal()) || 0 : 0;
}

function walletGoldValue(id) {
  const wallet = currentWallet();
  const c = currency(id);
  return Number(wallet?.currencies?.[id] || 0) * (Number(c.base_value) || 1);
}

function checkoutPaymentPlan() {
  const quote = checkoutQuoteCurrency();
  const totalGold = checkoutTotalGold();
  const wallet = currentWallet();
  const quoteGold = walletGoldValue(quote);
  const goldGold = walletGoldValue('gold');
  if (wallet && quoteGold >= totalGold && totalGold > 0) {
    return { mode: 'native', quote, payment: quote, effectiveGold: quoteGold, totalGold, feeGold: 0 };
  }
  if (wallet && goldGold > 0) {
    return { mode: 'gold_fallback', quote, payment: 'gold', effectiveGold: goldGold / (1 + GOLD_FALLBACK_FEE), totalGold, feeGold: totalGold * GOLD_FALLBACK_FEE };
  }
  return { mode: 'wallet', quote, payment: selected, effectiveGold: selectedHoldingGoldValue(), totalGold, feeGold: 0 };
}

function formatCurrency(goldAmount, id = selected) {
  const c = currency(id);
  const amount = Number(goldAmount) / (Number(c.base_value) || 1);
  return `${c.icon || '🪙'} ${amount.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${c.name || id}`;
}

function formatNativeCurrency(amount, id) {
  const c = currency(id);
  return `${c.icon || '🪙'} ${Number(amount).toLocaleString(undefined, { maximumFractionDigits: 2 })} ${c.name || id}`;
}

function parseNumber(text) {
  return Number(String(text).replace(/,/g, ''));
}

function convertCurrencyString(text, displayId = selected) {
  return String(text).replace(/🪙\s*([+-]?\s*[0-9][0-9,]*(?:\.\d+)?)/g, (match, raw) => {
    const gold = parseNumber(raw.replace(/\s+/g, ''));
    return Number.isFinite(gold) ? formatCurrency(gold, displayId) : match;
  });
}

function convertTextNode(node, displayId = selected) {
  if (!node?.nodeValue || node.parentElement?.closest('#playerWalletBridge,#shopExchangeQuote')) return;
  const original = PRICE_TEXT.get(node) || node.nodeValue;
  if (!/🪙\s*[+-]?\s*[0-9]/.test(original)) return;
  PRICE_TEXT.set(node, original);
  const converted = convertCurrencyString(original, displayId);
  if (converted !== node.nodeValue) node.nodeValue = converted;
}

function convertSimpleCurrencyElement(el, displayId = selected) {
  if (!el || el.closest('#playerWalletBridge,#shopExchangeQuote')) return;
  if (el.children.length > 0) return;
  const text = el.textContent || '';
  const original = el.dataset.currencyOriginal || text;
  const needMatch = original.match(/^You need\s+([0-9][0-9,]*(?:\.\d+)?)\s+more\s+(?:coins|.+)!$/);
  if (needMatch) {
    el.dataset.currencyOriginal = `You need ${needMatch[1]} more coins!`;
    const convertedNeed = `You need ${formatCurrency(parseNumber(needMatch[1]), displayId)} more!`;
    if (convertedNeed !== text) el.textContent = convertedNeed;
    return;
  }
  if (!/🪙\s*[+-]?\s*[0-9]/.test(original)) return;
  el.dataset.currencyOriginal = original;
  const converted = convertCurrencyString(original, displayId);
  if (converted !== text) el.textContent = converted;
}

function relabelGoldTextNodes(scope, displayId = selected) {
  const c = currency(displayId);
  const label = c.name || selected;
  const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (node.parentElement?.closest('#playerWalletBridge,#shopExchangeQuote')) return;
    const text = node.nodeValue;
    let next = text;
    if (text === 'Your Gold') next = `Your ${label}`;
    else if (text === 'Remaining Gold') next = `Remaining ${label}`;
    else if (text === '❌ NOT ENOUGH GOLD!') next = `❌ NOT ENOUGH ${label.toUpperCase()}!`;
    else if (text === 'NOT ENOUGH GOLD!') next = `NOT ENOUGH ${label.toUpperCase()}!`;
    else next = next.replace(/\bcoins but only have\b/g, `${label} but only have`);
    if (next !== text) node.nodeValue = next;
  });
}

function convertMarkedPrices(root) {
  root.querySelectorAll('[data-gold-price]').forEach(el => {
    if (el.closest('#playerWalletBridge,#shopExchangeQuote')) return;
    const gold = Number(el.getAttribute('data-gold-price'));
    if (!Number.isFinite(gold)) return;

    const nativeCurrency = (el.getAttribute('data-native-currency') || '').trim().toLowerCase();
    const nativePrice = Number(el.getAttribute('data-native-price'));
    const nativeKnown = nativeCurrency && Number.isFinite(nativePrice);
    const converted = formatCurrency(gold);

    let text = converted;
    if (nativeKnown && nativeCurrency !== selected) {
      text = `${formatNativeCurrency(nativePrice, nativeCurrency)} · ≈ ${converted}`;
    }
    if (el.textContent !== text) el.textContent = text;
  });
}

function checkoutScopes(root) {
  return root.querySelectorAll('.wario-summary-card,.checkout-item-card,.cart-float-btn,.receipt-paper,.membership-modal');
}

function convertCheckoutScope(scope) {
  const displayId = checkoutQuoteCurrency();
  const textWalker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (textWalker.nextNode()) textNodes.push(textWalker.currentNode);
  textNodes.forEach(node => convertTextNode(node, displayId));
  scope.querySelectorAll('span,div,button,pre').forEach(el => convertSimpleCurrencyElement(el, displayId));
  relabelGoldTextNodes(scope, displayId);
}


function renderCheckoutExchangeNotice(root) {
  const summary = root.querySelector('.wario-summary-card');
  if (!summary) return;
  const body = summary.querySelector('.p-4') || summary;
  let box = summary.querySelector('#shopExchangeQuote');
  if (!box) {
    box = document.createElement('div');
    box.id = 'shopExchangeQuote';
    body.prepend(box);
  }
  const plan = checkoutPaymentPlan();
  const quote = currency(plan.quote);
  const totalGold = plan.totalGold;
  if (!totalGold) { box.innerHTML = ''; return; }
  const quoteTotal = formatCurrency(totalGold, plan.quote);
  const goldEq = formatCurrency(totalGold, 'gold');
  const nativeHeld = formatCurrency(walletGoldValue(plan.quote), plan.quote);
  let payLine;
  if (plan.mode === 'native') {
    payLine = `✅ Native tender available: ${esc(nativeHeld)} — no conversion fee.`;
  } else if (plan.mode === 'gold_fallback') {
    payLine = `⚠️ Native tender short. Gold fallback: ${esc(formatCurrency(totalGold + plan.feeGold, 'gold'))} including ${Math.round(GOLD_FALLBACK_FEE * 100)}% exchange fee.`;
  } else {
    payLine = `⚠️ No preferred tender detected. Wario will demand a conversion at checkout.`;
  }
  const markup = `<div class="shop-exchange-quote"><b>💱 Wario Exchange Quote</b><small>Checkout quoted in ${esc(quote.icon || '🪙')} ${esc(quote.name || plan.quote)}: ${esc(quoteTotal)} = ${esc(goldEq)}</small><small>${payLine}</small></div>`;
  if (box.innerHTML !== markup) box.innerHTML = markup;
}

function convertVisiblePrices() {
  const root = document.getElementById('root');
  if (!root) return;
  convertMarkedPrices(root);
  renderCheckoutExchangeNotice(root);
  checkoutScopes(root).forEach(convertCheckoutScope);
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

  const plan = checkoutPaymentPlan();
  const goldValue = plan.effectiveGold || selectedHoldingGoldValue();
  if (goldValue === lastAppliedCartGold && Math.abs(Number(cart.playerGold) - goldValue) < 0.000001) return;

  lastAppliedCartGold = goldValue;
  cart.setPlayerGold(goldValue);
  window.dispatchEvent(new CustomEvent('wario-currency-wallet-applied', {
    detail: { currency: plan.payment || selected, amount: selectedHolding(), goldValue, plan }
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
  setTimeout(() => {
    renderQueued = false;
    renderBridge();
    applyActualWalletToCart();
    convertVisiblePrices();
  }, 80);
}

loadWallets().then(() => {
  renderBridge();
  applyActualWalletToCart();
  convertVisiblePrices();
  const target = document.getElementById('root') || document.body;
  observer = new MutationObserver(schedule);
  observer.observe(target, { childList: true, subtree: true });
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
  getSelectedHolding: selectedHolding,
  currencyBaseValue(id) { return Number(currency(id).base_value) || 1; },
  itemGoldValue(item) {
    const key = String(item?.priceCurrency || item?.currencyKey || item?.currency || 'gold').trim().toLowerCase();
    const amount = Number(item?.price || 0);
    return amount * (Number(currency(key).base_value) || 1);
  }
};
