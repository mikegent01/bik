import { WALLETS, CURRENCIES } from './currency.js';

const SELECT_KEY = 'warehousePaymentCurrency';
const MODE_KEY = 'warehouseCurrencyDisplayMode';
const PRICE_TEXT = new WeakMap();
const aliases = {
  archie_miser: 'archie',
  markop_judi: 'markop',
  fng_remi: 'remi',
  waluigi_miser: 'waluigi'
};

let wallets = WALLETS || {};
let selected = localStorage.getItem(SELECT_KEY) || 'gold';
let displayMode = localStorage.getItem(MODE_KEY) || 'native';
let renderQueued = false;
let lastBridgeMarkup = '';
let lastAppliedCartGold = null;
let observer = null;
let tenderDraft = {};
let tenderSignature = '';
const GOLD_FALLBACK_FEE = 0.10;
const MAX_CHANGE_GOLD = 5;

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

function effectKeywordFee(item){let total=0;(Array.isArray(item?.effects)?item.effects:[]).forEach(effect=>{const text=String(effect||'').toLowerCase();let fee=0,match=text.match(/(?:heal|heals|restore|restores)\s*(\d+)\s*hp|(\d+)\s*hp/);if(match){const hp=Number(match[1]||match[2]||0);fee+=Math.max(5,hp*2)}match=text.match(/luck\D*(\d+)/);if(match)fee+=Number(match[1])*4;if(/mana|mp|spell slot|spell slots|restore spell|restore mana/.test(text))fee+=18;if(/resist|resistance|reduce damage/.test(text))fee+=8;if(/immune|immunity|cannot be damaged|cannot be targeted|cannot be ignored|invulnerable/.test(text))fee+=60;if(/revive|resurrect|respawn|second life|cheats death|immortal/.test(text))fee+=500;if(/summon|create|control|time|reality|wish|teleport|portal/.test(text))fee+=25;if(/stun|paraly|charm|fear|madness|curse|poison|blind|restrain/.test(text))fee+=10;match=text.match(/(\d+)d(\d+)/);if(match)fee+=Number(match[1])*(Number(match[2])+1)/2*.5;if(/chance|may |might |10%|20%|30%/.test(text))fee*=.55;if(/mild|minor|slight|temporary/.test(text))fee*=.65;if(/permanent|indefinitely|always/.test(text))fee*=2;total+=fee});return total}
function itemPowerFee(item){const rarity=String(item?.rarity||'common').toLowerCase(),base={common:.5,uncommon:2,rare:5,epic:12,legendary:35,godly:100,wario_tier:150}[rarity]??1,level=Math.max(0,Number(item?.levelRequirement||1)-1),count=Array.isArray(item?.effects)?item.effects.length:0,extra=Math.max(0,count-1);return Math.round((level*base+extra*base*1.5+effectKeywordFee(item))*100)/100}
function itemGoldValue(item, quantity = 1) {
  const amount = Number(item?.price || 0);
  const c = currency(itemCurrencyKey(item));
  const discount = typeof item?.discount === 'number' && item.discount > 0 ? (1 - item.discount / 100) : 1;
  return (Math.floor(amount * discount) * (Number(c.base_value) || 1) + itemPowerFee(item)) * quantity;
}

function checkoutCurrencyGroups() {
  const rows = cartRows();
  const totals = new Map();
  let itemGold = 0;
  for (const row of rows) {
    const key = itemCurrencyKey(row.item);
    const value = itemGoldValue(row.item, row.quantity || 1);
    itemGold += value;
    totals.set(key, (totals.get(key) || 0) + value);
  }
  const grand = checkoutTotalGold();
  const extra = Math.max(0, grand - itemGold);
  const groups = [...totals.entries()].map(([id, total]) => {
    const share = itemGold > 0 ? total / itemGold : 0;
    const withFees = total + extra * share;
    return { id, itemGold: total, totalGold: withFees, nativeAmount: withFees / (Number(currency(id).base_value) || 1) };
  }).sort((a, b) => (a.id === 'gold') - (b.id === 'gold') || b.totalGold - a.totalGold);
  return groups.length ? groups : [{ id: selected, itemGold: 0, totalGold: grand, nativeAmount: grand / (Number(currency(selected).base_value) || 1) }];
}

function checkoutQuoteCurrency() {
  return checkoutCurrencyGroups()[0]?.id || selected;
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
  const groups = checkoutCurrencyGroups();
  const quote = groups[0]?.id || selected;
  const totalGold = checkoutTotalGold();
  const wallet = currentWallet();
  if (!wallet) return { mode: 'wallet', quote, payment: selected, groups, effectiveGold: selectedHoldingGoldValue(), totalGold, feeGold: 0 };

  let nativeCovered = 0;
  let nativeDue = 0;
  for (const g of groups) {
    if (g.id === 'gold') continue;
    nativeDue += g.totalGold;
    nativeCovered += Math.min(walletGoldValue(g.id), g.totalGold);
  }
  const goldDue = groups.filter(g => g.id === 'gold').reduce((sum, g) => sum + g.totalGold, 0);
  const goldAvailable = walletGoldValue('gold');
  const missingNative = Math.max(0, nativeDue - nativeCovered);
  const feeGold = missingNative > 0 ? missingNative * GOLD_FALLBACK_FEE : 0;
  const effectiveGold = nativeCovered + goldAvailable / (1 + (missingNative > 0 ? GOLD_FALLBACK_FEE : 0));
  const allNative = nativeCovered >= nativeDue && goldAvailable >= goldDue;
  const mode = allNative ? 'native_multi' : (goldAvailable > 0 ? 'mixed_gold_fallback' : 'wallet');
  return { mode, quote, payment: mode === 'mixed_gold_fallback' ? 'gold' : quote, groups, nativeCovered, nativeDue, goldDue, effectiveGold, totalGold, feeGold };
}


function cartSignature() {
  return cartRows().map(row => `${row.item?.id || '?'}:${row.quantity || 1}:${itemCurrencyKey(row.item)}:${row.item?.price || 0}`).join('|') + `:${checkoutTotalGold()}`;
}

function initTenderDraft(plan = checkoutPaymentPlan()) {
  const sig = cartSignature();
  if (sig === tenderSignature) return;
  tenderSignature = sig;
  tenderDraft = {};
  let nativeCovered = 0;
  for (const g of plan.groups || []) {
    const base = Number(currency(g.id).base_value) || 1;
    const heldNative = Number(currentWallet()?.currencies?.[g.id] || 0);
    const dueNative = wholeAmount(g.totalGold / base);
    const offer = Math.min(heldNative, dueNative);
    if (offer > 0) {
      tenderDraft[g.id] = Number(offer.toFixed(4));
      nativeCovered += offer * base;
    }
  }
  const remainingGold = Math.max(0, plan.totalGold - nativeCovered);
  const goldHeld = Number(currentWallet()?.currencies?.gold || 0);
  if (remainingGold > 0 && goldHeld > 0) tenderDraft.gold = Math.min(goldHeld, wholeAmount(remainingGold * (1 + GOLD_FALLBACK_FEE)));
}

function tenderCurrencyIds(plan = checkoutPaymentPlan()) {
  const set = new Set([...(plan.groups || []).map(g => g.id), ...Object.keys(currentWallet()?.currencies || {})]);
  return [...set].filter(id => CURRENCIES[id]).sort((a, b) => {
    const ag = (plan.groups || []).findIndex(g => g.id === a);
    const bg = (plan.groups || []).findIndex(g => g.id === b);
    return (ag < 0 ? 99 : ag) - (bg < 0 ? 99 : bg) || (currency(b).base_value || 0) - (currency(a).base_value || 0);
  });
}

function tenderResult(plan = checkoutPaymentPlan()) {
  const dueMap = new Map((plan.groups || []).map(g => [g.id, g.totalGold]));
  let nativeCovered = 0;
  let conversionPool = 0;
  const lines = [];
  for (const id of tenderCurrencyIds(plan)) {
    const amount = Number(tenderDraft[id] || 0);
    if (amount <= 0) continue;
    const base = Number(currency(id).base_value) || 1;
    const inputGold = amount * base;
    const due = dueMap.get(id) || 0;
    const nativeUse = Math.min(inputGold, due);
    nativeCovered += nativeUse;
    conversionPool += Math.max(0, inputGold - nativeUse);
    if (!due) conversionPool += inputGold;
    lines.push(`${formatNativeCurrency(amount, id)} offered`);
  }
  const remainingBeforeConversion = Math.max(0, plan.totalGold - nativeCovered);
  const conversionEffective = conversionPool / (1 + GOLD_FALLBACK_FEE);
  const remainingGold = remainingBeforeConversion - conversionEffective;
  if (remainingGold > 0.00001) {
    return `<div class="tender-result warn">Still due: ${esc(formatCurrency(remainingGold, plan.quote))} = ${esc(formatCurrency(remainingGold, 'gold'))}</div>`;
  }
  const changeGold = Math.max(0, -remainingGold);
  if (changeGold > 0.00001) {
    const maxChange = Math.min(MAX_CHANGE_GOLD, Math.max(0.1, plan.totalGold * 0.05));
    const returned = Math.min(changeGold, maxChange);
    const kept = Math.max(0, changeGold - returned);
    return `<div class="tender-result ok">Covered. Estimated change: ${esc(formatCurrency(returned, plan.quote))}${kept > 0 ? ` · Wario keeps ${esc(formatCurrency(kept, 'gold'))} over max-change rule` : ''}</div>`;
  }
  return `<div class="tender-result ok">Exact enough. No change owed. ${lines.length ? esc(lines.join(' · ')) : ''}</div>`;
}

function tenderControlsHtml(plan = checkoutPaymentPlan()) {
  initTenderDraft(plan);
  const rows = tenderCurrencyIds(plan).map(id => {
    const c = currency(id);
    const held = Number(currentWallet()?.currencies?.[id] || 0);
    const due = (plan.groups || []).find(g => g.id === id)?.totalGold || 0;
    return `<label class="tender-row"><span>${esc(c.icon || '🪙')} ${esc(c.name || id)}<small>held ${esc(held.toLocaleString())}${due ? ` · due ${esc(formatCurrency(due, id))}` : ''}</small></span><input class="shopTenderInput" data-currency="${esc(id)}" type="number" min="0" step="any" value="${esc(tenderDraft[id] ?? '')}" placeholder="0"></label>`;
  }).join('');
  return `<div class="tender-planner"><b>🧾 Split Tender Preview</b><small>Type how much of each currency you hand Wario. Nothing is saved; this is planning only. Green = covered/good; red = still owed.</small>${rows}<button type="button" class="tender-reset" id="shopTenderReset">Reset suggested split</button><div id="shopTenderResult">${tenderResult(plan)}</div></div>`;
}

function updateTenderResult() {
  const result = document.getElementById('shopTenderResult');
  if (!result) return;
  result.innerHTML = tenderResult(checkoutPaymentPlan());
}

function wholeAmount(value) {
  const n = Number(value) || 0;
  if (!Number.isFinite(n)) return 0;
  return n > 0 ? Math.ceil(n) : Math.floor(n);
}

function formatCurrency(goldAmount, id = selected) {
  const c = currency(id);
  const amount = wholeAmount(Number(goldAmount) / (Number(c.base_value) || 1));
  return `${c.icon || '🪙'} ${amount.toLocaleString(undefined, { maximumFractionDigits: 0 })} ${c.name || id}`;
}

function formatNativeCurrency(amount, id) {
  const c = currency(id);
  const rounded = wholeAmount(amount);
  return `${c.icon || '🪙'} ${rounded.toLocaleString(undefined, { maximumFractionDigits: 0 })} ${c.name || id}`;
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
    if (text === 'Your Gold') next = 'Spendable wallet value (after exchange fees)';
    else if (text === 'Remaining Gold') next = 'Remaining Buying Power';
    else if (text === '❌ NOT ENOUGH GOLD!') next = `❌ NOT ENOUGH ${label.toUpperCase()}!`;
    else if (text === 'NOT ENOUGH GOLD!') next = `NOT ENOUGH ${label.toUpperCase()}!`;
    else if (text.startsWith('Remaining after purchase:')) next = text.replace('Remaining after purchase:', 'After purchase estimate (green = covered):');
    else next = next.replace(/\bcoins but only have\b/g, `${label} but only have`);
    if (next !== text) node.nodeValue = next;
  });
}

function priceDisplayCurrencyFor(el) {
  if (displayMode === 'gold') return 'gold';
  if (el.closest('.wario-summary-card,.checkout-item-card,.cart-float-btn,#shopCartModal,.receipt-paper')) return checkoutQuoteCurrency();
  return selected;
}

function convertMarkedPrices(root) {
  root.querySelectorAll('[data-gold-price]').forEach(el => {
    if (el.closest('#playerWalletBridge,#shopExchangeQuote')) return;
    const gold = Number(el.getAttribute('data-gold-price'));
    if (!Number.isFinite(gold)) return;

    const nativeCurrency = (el.getAttribute('data-native-currency') || '').trim().toLowerCase();
    const nativePrice = Number(el.getAttribute('data-native-price'));
    const nativeKnown = nativeCurrency && Number.isFinite(nativePrice);
    const displayId = priceDisplayCurrencyFor(el);
    const converted = formatCurrency(gold, displayId);

    let text = converted;
    if (displayMode !== 'gold' && nativeKnown && nativeCurrency !== displayId) {
      const nativeGold = nativePrice * (Number(currency(nativeCurrency).base_value) || 1);
      const feeGold = Math.max(0, gold - nativeGold);
      const feeText = feeGold > 0.01 ? ` + fee ${formatCurrency(feeGold, displayId)}` : '';
      text = `${formatNativeCurrency(nativePrice, nativeCurrency)}${feeText} · ≈ ${converted}`;
    }
    if (el.textContent !== text) el.textContent = text;
  });
}

function checkoutScopes(root) {
  return root.querySelectorAll('.wario-summary-card,.checkout-item-card,.cart-float-btn,.receipt-paper,.membership-modal,.fixed.inset-0');
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
  const totalGold = plan.totalGold;
  if (!totalGold) { box.innerHTML = ''; return; }
  const groupsHtml = (plan.groups || checkoutCurrencyGroups()).map(g => {
    const c = currency(g.id);
    const heldGold = walletGoldValue(g.id);
    const enough = heldGold >= g.totalGold;
    return `<small>${enough ? '✅' : '⚠️'} ${esc(c.icon || '🪙')} ${esc(c.name || g.id)} due: ${esc(formatCurrency(g.totalGold, g.id))} = ${esc(formatCurrency(g.totalGold, 'gold'))}${enough ? '' : ` · held ${esc(formatCurrency(heldGold, g.id))}`}</small>`;
  }).join('');
  let payLine;
  if (plan.mode === 'native_multi') {
    payLine = `✅ Split tender covered — no conversion fee. Wallet balances are preview-only; this page does not save coin deductions.`;
  } else if (plan.mode === 'mixed_gold_fallback') {
    payLine = `⚠️ Split tender uses native coins first; shortages convert through gold at ${Math.round(GOLD_FALLBACK_FEE * 100)}% fee. Gold buying power: ${esc(formatCurrency(plan.effectiveGold, 'gold'))}. Wallet balances are not saved/modified.`;
  } else {
    payLine = `⚠️ Wario will demand a conversion at checkout. Wallet balances are not saved/modified.`;
  }
  const quote = currency(plan.quote);
  const markup = `<div class="shop-exchange-quote"><b>💱 Multi-Currency Wario Quote</b><small>Summary quoted in ${esc(quote.icon || '🪙')} ${esc(quote.name || plan.quote)} · grand total ${esc(formatCurrency(totalGold, plan.quote))} = ${esc(formatCurrency(totalGold, 'gold'))}</small>${groupsHtml}<small>${payLine}</small>${tenderControlsHtml(plan)}</div>`;
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
  const modeLabel = displayMode === 'gold' ? 'Show native currencies' : 'Gold-only estimates';

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
      <button type="button" id="shopCurrencyDisplayMode" class="bridge-mode-toggle">${esc(modeLabel)}</button>
      <a href="currency.html">Currency rates →</a>
    </div>` : `
    <div class="bridge-warning currency-integrated">
      🔐 <b>No operator wallet connected</b>
      <span>Connect a character first; then this dropdown will only show that character's currencies.</span>
      <label class="bridge-payment">💳 Display prices in
        <select id="warehousePaymentCurrency">${currencyOptions()}</select>
      </label>
      <button type="button" id="shopCurrencyDisplayMode" class="bridge-mode-toggle">${esc(modeLabel)}</button>
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
    const modeBtn = box.querySelector('#shopCurrencyDisplayMode');
    if (modeBtn) {
      modeBtn.addEventListener('click', () => {
        displayMode = displayMode === 'gold' ? 'native' : 'gold';
        localStorage.setItem(MODE_KEY, displayMode);
        renderBridge();
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
  if (event.key === MODE_KEY) displayMode = event.newValue || displayMode;
  lastAppliedCartGold = null;
  schedule();
});
window.addEventListener('wario-item-added', schedule);
document.addEventListener('input', event => {
  const input = event.target.closest && event.target.closest('.shopTenderInput');
  if (!input) return;
  tenderDraft[input.dataset.currency] = Number(input.value || 0);
  updateTenderResult();
});
document.addEventListener('click', event => {
  const reset = event.target.closest && event.target.closest('#shopTenderReset');
  if (!reset) return;
  tenderSignature = '';
  renderCheckoutExchangeNotice(document.getElementById('root'));
});
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
  getDisplayMode: () => displayMode,
  currencyBaseValue(id) { return Number(currency(id).base_value) || 1; },
  itemGoldValue(item) {
    const key = String(item?.priceCurrency || item?.currencyKey || item?.currency || 'gold').trim().toLowerCase();
    const amount = Number(item?.price || 0);
    const discount = typeof item?.discount === 'number' && item.discount > 0 ? (1 - item.discount / 100) : 1;
    return Math.floor(amount * discount) * (Number(currency(key).base_value) || 1) + itemPowerFee(item);
  }
};
