import { WALLETS, CURRENCIES } from '../pages/commerce/currency.js';

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
  // Only alias when the source id has no wallet of its own. `archie_miser`,
  // for example, is a REAL distinct wallet (43 gold / 173 wario_coin), so
  // blindly mapping it to `archie` (349 gold) loaded the wrong character's
  // money and made the picker look broken.
  if (wallets && Object.prototype.hasOwnProperty.call(wallets, id)) return id;
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

function walletConnected() { return !!currentWallet(); }

function currentWallet() {
  const uid = currentUserId();
  return uid ? wallets[uid] || wallets[normalizeUserId(uid.replace('_miser', ''))] || null : null;
}

function operatorOptions() {
  const active = currentUserId();
  const preferred = ['archie', 'waluigi', 'wario', 'bowser', 'markop', 'remi', 'hjumpik', 'green_t', 'dan'];
  const entries = Object.entries(wallets || {})
    .filter(([id, wallet]) => wallet && wallet.currencies && Object.keys(wallet.currencies).length)
    .sort(([aId, a], [bId, b]) => {
      const ai = preferred.indexOf(aId), bi = preferred.indexOf(bId);
      if (ai !== -1 || bi !== -1) return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      return String(a.name || aId).localeCompare(String(b.name || bId));
    });
  const nameCount = {};
  entries.forEach(([id, w]) => { const n = String(w.name || id); nameCount[n] = (nameCount[n] || 0) + 1; });
  return entries.map(([id, wallet]) => {
    const name = String(wallet.name || id);
    // Several characters share a display name across wallet ids; show the id so
    // the two "Archie Miser" / "Original Dan" rows are tellable apart.
    const label = nameCount[name] > 1 ? `${name} — ${id}` : name;
    const n = Object.keys(wallet.currencies || {}).length;
    return `<option value="${esc(id)}" ${id === active ? 'selected' : ''}>${esc(label)} (${n} ${n === 1 ? 'currency' : 'currencies'})</option>`;
  }).join('');
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
    const walletUrl = new URL('../../data/commerce/wallets.json', import.meta.url);
    walletUrl.searchParams.set('t', Date.now());
    const response = await fetch(walletUrl, { cache: 'no-cache' });
    if (response.ok) {
      const json = await response.json();
      wallets = { ...(WALLETS || {}), ...json };
    }
  } catch (error) {
    console.warn('[Shop Currency] Could not load data/commerce/wallets.json; using currency.js wallets.', error);
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

function shopTextBlob(item){
  return [
    item?.id,item?.name,item?.description,item?.category,item?.rarity,item?.vendor,item?.shippedBy,
    item?.levelRequirementReason,item?.priceReason,item?.vendorReason,item?.shippingDetail,item?.warning,
    item?.usage?.activation,item?.usage?.duration,item?.usage?.endsWhen,item?.usage?.charges,
    ...(Array.isArray(item?.effects)?item.effects:[]),
    ...(Array.isArray(item?.effectDetails)?item.effectDetails.flatMap(row=>[row?.title,row?.rules]):[])
  ].map(value=>String(value||'').toLowerCase()).join(' ');
}
function shopHash(item){let hash=2166136261,text=String(item?.id||item?.name||'');for(let i=0;i<text.length;i++)hash=(hash^text.charCodeAt(i))*16777619>>>0;return hash/4294967295}
function effectKeywordFee(item){const text=shopTextBlob(item);let fee=0;const add=(regex,amount)=>{if(regex.test(text))fee+=amount};add(/heal|heals|restore.*hp|restores.*hp|regenerate/,1200);add(/mana|mp|spell slot|spell slots|restore spell|restore mana/,4e3);add(/resist|resistance|reduce damage/,6e3);add(/immune|immunity|cannot be damaged|cannot be targeted|cannot be ignored|invulnerable|invulnerability/,4e4);add(/revive|resurrect|respawn|second life|second chance|cheats death|immortal|resurrection/,15e4);add(/time stop|time travel|rewind|chronal|temporal|stasis/,9e4);add(/teleport|portal|plane shift|dimensional|multiversal|across dimensions/,5e4);add(/wish|rewrite reality|reality control|alter reality|existence control|erase existence|create existence/,25e4);add(/summon|create creature|create life|control creature|dominate|command obedience|compelled to obey|demand obedience|mind control/,8e4);add(/stun|paraly|charm|fear|madness|curse|poison|blind|restrain|silence/,1e4);add(/permanent|indefinitely|always active|never ends/,2e4);if(/unlimited|at will|never empties/.test(text)&&/gold|coin|heal|revive|immune|wish|teleport|damage/.test(text))fee+=25e3;if(/infinite|inexhaustible|never empties|boundless|aleph/.test(text)&&/gold|coin|wealth|money|currency|spendable|economy/.test(text))fee+=5e6;if(/economic collapse|currency loses all value|prices.*triple|break any economy|economy collaps|inflation|central bank/.test(text))fee+=1e6;const dc=text.match(/dc\s*(\d+)/i);if(dc)fee+=Math.max(0,Number(dc[1])-12)*8e3;const dice=text.match(/(\d+)d(\d+)/);if(dice)fee+=Number(dice[1])*(Number(dice[2])+1)/2*800;if(/chance|may |might |10%|20%|30%/.test(text))fee*=.75;if(/mild|minor|slight|cosmetic|flavor/.test(text))fee*=.65;return fee}
function itemPowerFee(item){const rarity=String(item?.rarity||'common').toLowerCase(),band={common:{base:0,per:15,min:0,scale:.025},uncommon:{base:50,per:25,min:50,scale:.06},rare:{base:150,per:60,min:150,scale:.14},epic:{base:750,per:250,min:750,scale:.32},legendary:{base:5e3,per:2e3,min:5e3,scale:.7},godly:{base:1e5,per:3e4,min:1e5,scale:1},wario_tier:{base:5e5,per:1e5,min:5e5,scale:1.2}}[rarity]||{base:50,per:25,min:0,scale:.05},level=Math.max(1,Number(item?.levelRequirement||1)),count=Array.isArray(item?.effects)?item.effects.length:0,keyword=effectKeywordFee(item),variance=.85+shopHash(item)*.5,base=band.base+level*band.per+count*band.per*.25,total=base*variance+keyword*band.scale;return Math.round(Math.max(band.min,total)*100)/100}
function itemGoldValue(item, quantity = 1) {
  // `price` is the item's GOLD value. It used to be multiplied by the display
  // currency's base_value, which meant an item shown in bronze was worth 1/100th
  // of the same item shown in gold — pure luck of a hash. The native sticker is
  // now derived from this figure instead (see nativeStickerFor).
  const amount = Number(item?.price || 0);
  const discount = typeof item?.discount === 'number' && item.discount > 0 ? (1 - item.discount / 100) : 1;
  return (Math.floor(amount * discount) + itemPowerFee(item)) * quantity;
}

/** How many coins of the item's display currency that gold value costs. */
function nativeStickerFor(item, quantity = 1) {
  const c = currency(itemCurrencyKey(item));
  return itemGoldValue(item, quantity) / (Number(c.base_value) || 1);
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
    if (text === 'Your Gold') next = walletConnected()
      ? 'Spendable wallet value (after exchange fees)'
      : 'No operator connected — wallet is empty';
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

function splitNativeAuditFee(nativePrice, nativeCurrency, totalGold) {
  const baseValue = Number(currency(nativeCurrency).base_value) || 1;
  // nativePrice is already expressed in `nativeCurrency`; convert to gold to
  // compare against the total. (Previously this line and the price pipeline
  // disagreed about whether `price` was native or gold.)
  const nativeGold = nativePrice * baseValue;
  const feeGold = Math.max(0, totalGold - nativeGold);
  if (feeGold <= 0.01) return { nativeDisplay: nativePrice, feeDisplayGold: 0, foldedGold: 0 };
  const severity = feeGold / Math.max(1, nativeGold);
  let foldRatio = 0.35;
  if (severity > 500) foldRatio = 0.88;
  else if (severity > 100) foldRatio = 0.82;
  else if (severity > 25) foldRatio = 0.72;
  else if (severity > 5) foldRatio = 0.55;
  // Keep a visible audit/tariff line, but make the native sticker price carry most of the power cost.
  const foldedGold = feeGold * foldRatio;
  return {
    nativeDisplay: nativePrice + foldedGold / baseValue,
    feeDisplayGold: feeGold - foldedGold,
    foldedGold
  };
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
      const split = splitNativeAuditFee(nativePrice, nativeCurrency, gold);
      const feeText = split.feeDisplayGold > 0.01 ? ` + audit ${formatCurrency(split.feeDisplayGold, displayId)}` : '';
      text = `${formatNativeCurrency(split.nativeDisplay, nativeCurrency)}${feeText} · ≈ ${converted}`;
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

  // No operator connected => no money. Previously this returned early and left
  // the bundle's hardcoded 50,000 gold in place, which made every wallet
  // figure (and the "hide unaffordable" filter) silently fictional.
  if (!wallet) {
    if (Number(cart.playerGold) !== 0) { lastAppliedCartGold = 0; cart.setPlayerGold(0); }
    return;
  }

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
      <label class="bridge-payment">🧑 Switch operator
        <select id="warehouseOperatorSelect">${operatorOptions()}</select>
        <small>Changes the connected Waluipedia wallet used for affordability and checkout previews.</small>
      </label>
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
      <label class="bridge-payment">🧑 Pick operator
        <select id="warehouseOperatorSelect"><option value="">— not connected —</option>${operatorOptions()}</select>
      </label>
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
    const operatorSelect = box.querySelector('#warehouseOperatorSelect');
    if (operatorSelect) {
      operatorSelect.addEventListener('change', event => {
        const id = normalizeUserId(event.target.value);
        localStorage.setItem('waluipediaUser', id);
        localStorage.setItem('currentUserId', id);
        selected = 'gold';
        ensureSelectedCurrency();
        lastBridgeMarkup = '';
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
    scanAndLinkShopElements();
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

/* ============================================================
   SHOP HYPERLINK AUTO-LINKER & HOVER PREVIEW INTEGRATION
   ============================================================ */

let shopLinkEntries = [];
let shopLinkPreviews = {};
let shopAutoLinkerReady = false;

function kindEmoji(kind) {
  const m = {
    character: '👤', faction: '⚔️', nation: '🌍', location: '🏰', currency: '💱',
    vendor: '🏪', invitem: '🎒', artifact: '⭐', bearer: '✴️', dynasty: '👑', holiday: '🎉', system: '⚙️'
  };
  return m[kind] || '📄';
}

function safeShopAliases(name, kind, rawObj) {
  const out = new Set([name]);
  let n = String(name || '').trim();
  if (/^the\s+/i.test(n)) { const dropped = n.replace(/^the\s+/i, ''); if (dropped.length >= 4) out.add(dropped); }
  if (kind === 'character' || kind === 'bearer' || kind === 'article') {
    const TITLES = /^(princess|prince|king|queen|general|captain|commander|admiral|chancellor|chief|lord|lady|sir|dame|doctor|professor|master|elder|judge|emperor|archmage|patriarch)\s+/i;
    if (TITLES.test(n)) { const bare = n.replace(TITLES, '').trim(); if (bare.length >= 4) out.add(bare); }
  }
  out.add(n.replace(/\s*[—(].*$/, '').trim());

  if (kind === 'currency') {
    if (!n.endsWith('s')) out.add(n + 's');
    if (n.endsWith('Piece')) out.add(n.replace(/Piece$/, 'Pieces'));
    if (n.endsWith('Bit')) out.add(n.replace(/Bit$/, 'Bits'));
    if (n.endsWith('Coin')) out.add(n.replace(/Coin$/, 'Coins'));
    if (n.endsWith('Vial')) out.add(n.replace(/Vial$/, 'Vials'));
    if (n.endsWith('Obol')) out.add(n.replace(/Obol$/, 'Obols'));
    if (n.endsWith('Stamp')) out.add(n.replace(/Stamp$/, 'Stamps'));
    if (n.endsWith('Shard')) out.add(n.replace(/Shard$/, 'Shards'));
    if (n.endsWith('Seal')) out.add(n.replace(/Seal$/, 'Seals'));
    if (n.endsWith('Acorn')) out.add(n.replace(/Acorn$/, 'Acorns'));
    if (n.endsWith('Leaf')) out.add(n.replace(/Leaf$/, 'Leaves'));
    if (n.endsWith('Bead')) out.add(n.replace(/Bead$/, 'Beads'));
    if (n.endsWith('Chit')) out.add(n.replace(/Chit$/, 'Chits'));
    if (n.endsWith('Mark')) out.add(n.replace(/Mark$/, 'Marks'));
    if (n.endsWith('Token')) out.add(n.replace(/Token$/, 'Tokens'));
    if (n.endsWith('Rupee')) out.add(n.replace(/Rupee$/, 'Rupees'));
    if (n.endsWith('Ducat')) out.add(n.replace(/Ducat$/, 'Ducats'));
    if (n.endsWith('Doubloon')) out.add(n.replace(/Doubloon$/, 'Doubloons'));
    if (n.endsWith('Credstick')) out.add(n.replace(/Credstick$/, 'Credsticks'));

    const cid = (rawObj && (rawObj.id || rawObj.key)) || '';
    if (cid === 'mora' || n === 'Mora') { out.add('Mora'); }
    if (cid === 'rupee' || /rupee/i.test(n)) { out.add('Rupee'); out.add('Rupees'); out.add('Hyrulean Rupees'); }
    if (cid === 'poke_dollar' || /poké/i.test(n)) { out.add('PokéDollar'); out.add('PokéDollars'); out.add('PokeDollar'); out.add('PokeDollars'); }
    if (cid === 'midland_ducat' || /ducat/i.test(n)) { out.add('Midland Ducats'); out.add('Ducat'); out.add('Ducats'); }
    if (cid === 'doubloon' || /doubloon/i.test(n)) { out.add('Doubloon'); out.add('Doubloons'); }
    if (cid === 'shadow_obol' || /obol/i.test(n)) { out.add('Obol'); out.add('Obols'); out.add('Shadow Obols'); }
    if (cid === 'warpstone' || /warpstone/i.test(n)) { out.add('Warpstone'); out.add('Warpstone Tokens'); }
    if (cid === 'credstick' || /credstick/i.test(n)) { out.add('Credstick'); out.add('Credsticks'); }
    if (cid === 'bowser_bux' || /bux/i.test(n)) { out.add('Bowser Bux'); }
    if (cid === 'wario_coin' || /wario coin/i.test(n)) { out.add('Wario Coins'); }
    if (cid === 'soul_coin' || /soul coin/i.test(n)) { out.add('Soul Coins'); }
    if (cid === 'blood_vial' || /blood vial/i.test(n)) { out.add('Blood Vial'); out.add('Blood Vials'); }
    if (cid === 'arcane_shard' || /arcane shard/i.test(n)) { out.add('Arcane Shards'); }
    if (cid === 'guild_seal' || /guild seal/i.test(n)) { out.add('Guild Seals'); }
    if (cid === 'transit_stamp' || /transit stamp/i.test(n)) { out.add('Transit Stamps'); }
    if (cid === 'kivotos_credit' || /kivotos credit/i.test(n)) { out.add('Kivotos Credits'); }
  }

  const LINK_STOP = new Set(['the','a','an','and','of','dan','ryan','x.o.','students','gold','coin','coins','piece','pieces','item','items','bits','bit']);
  const SHORT_ALLOWED = new Set(['usk','mora','sans','remi','ryan','x.o.','obol','bux','mora','leo','baud','gems','leaf']);
  const SINGLE_GENERIC = new Set(['iron','shadow','star','dark','general','captain','commander','admiral','king','queen','prince','council','order','house','city','guild','legion','empire','crown','kingdom','land','people','battle','siege','manor','tower','tree','grove','estate','raventree']);

  return [...out].filter(a => {
    if (!a) return false;
    const low = a.toLowerCase();
    if (low.length < 5 && !SHORT_ALLOWED.has(low)) return false;
    if (LINK_STOP.has(low)) return false;
    if (!/\s/.test(a) && SINGLE_GENERIC.has(low)) return false;
    return true;
  });
}

function shopRouteForKind(kind, id) {
  switch(kind) {
    case 'nation': return 'battlefield.html#/atlas/' + encodeURIComponent(id);
    case 'currency': return 'currency.html#' + encodeURIComponent(id);
    case 'vendor': return 'shop.html#vendor=' + encodeURIComponent(id);
    case 'invitem': return 'battlefield.html#/item/' + encodeURIComponent(id);
    case 'artifact': return 'battlefield.html#/artifact/' + encodeURIComponent(id);
    case 'bearer': return 'battlefield.html#/bearer/' + encodeURIComponent(id);
    case 'dynasty': return 'battlefield.html#/dynasty/' + encodeURIComponent(id);
    case 'holiday': return 'battlefield.html#/holiday/' + encodeURIComponent(id);
    case 'system': return id;
    default: return 'battlefield.html#/article/' + encodeURIComponent(id);
  }
}

function buildShopLinkRegistry(DATA) {
  shopLinkEntries = []; shopLinkPreviews = {};
  const PRI = { character: 100, faction: 98, nation: 95, location: 92, artifact: 80, bearer: 78, invitem: 76, currency: 75, vendor: 74, dynasty: 72, holiday: 50, system: 20 };
  const claims = {};

  const add = (name, id, kind, summary, sub, rawObj) => {
    if (!name || !id) return;
    shopLinkPreviews[id] = { name, sub: sub || '', summary: (summary || '').slice(0, 220), emoji: kindEmoji(kind), route: shopRouteForKind(kind, id), kind };
    safeShopAliases(name, kind, rawObj).forEach(a => {
      const key = a.toLowerCase();
      (claims[key] = claims[key] || []).push({ id, kind, name: a, exact: (key === name.trim().toLowerCase()), pri: PRI[kind] || 10 });
    });
  };

  (DATA.characters || []).forEach(c => add(c.name, c.id, 'character', c.summary || c.description, c.title || c.affiliation, c));
  (DATA.factions || []).forEach(f => add(f.name, f.id, 'faction', f.summary || f.description, f.type || f.region, f));
  (DATA.nations || []).forEach(n => add(n.name, n.id, 'nation', n.summary || n.description, n.region || n.type, n));
  (DATA.locations || []).forEach(l => add(l.name, l.id, 'location', l.summary || l.description, l.region || l.type, l));

  const allCurrencies = Object.assign({}, CURRENCIES || {});
  if (DATA.currencies) {
    const list = Array.isArray(DATA.currencies) ? DATA.currencies : DATA.currencies.currencies || [];
    list.forEach(c => { if (c && c.id) allCurrencies[c.id] = Object.assign({}, allCurrencies[c.id] || {}, c); });
  }
  Object.entries(allCurrencies).forEach(([k, c]) => {
    if (!c) return;
    const cid = c.id || k;
    const desc = c.description || c.short || c.player_tip || (c.name + ' currency');
    const sub = `Currency · Base Value: ${c.base_value || 1}g Equiv (${c.type || c.category || 'Tender'})`;
    add(c.name, cid, 'currency', desc, sub, c);
  });

  if (typeof window !== 'undefined' && window.WIKI_VENDORS) {
    Object.entries(window.WIKI_VENDORS).forEach(([vid, v]) => {
      if (!v) return;
      add(v.name || vid, vid, 'vendor', v.description || 'Registered Merchant', `Market · ${v.location || 'Known Bazaar'}`, v);
    });
  }

  const entries = [];
  const LINK_STOP = new Set(['the','a','an','and','of','dan','ryan','x.o.','students','gold','coin','coins','piece','pieces','item','items','bits','bit']);
  Object.keys(claims).forEach(key => {
    if (LINK_STOP.has(key)) return;
    const cands = claims[key];
    cands.sort((a, b) => b.pri - a.pri || (b.exact ? 1 : 0) - (a.exact ? 1 : 0) || b.name.length - a.name.length);
    entries.push({ id: cands[0].id, kind: cands[0].kind, name: cands[0].name });
  });

  entries.sort((a, b) => b.name.length - a.name.length);
  entries.forEach(e => {
    const pat = '\\b' + e.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b';
    try { shopLinkEntries.push({ re: new RegExp(pat), id: e.id, route: shopRouteForKind(e.kind, e.id) }); } catch (_) {}
  });
}

async function initShopAutoLinker() {
  if (shopAutoLinkerReady) return;
  try {
    const DATA = {};
    const files = ['characters', 'factions', 'locations', 'nations', 'currencies', 'artifacts', 'calendarHolidays'];
    await Promise.all(files.map(async f => {
      try {
        const res = await fetch(new URL(`../../data/${f}.json`, import.meta.url), { cache: 'no-cache' });
        if (res.ok) DATA[f] = await res.json();
      } catch (e) {}
    }));
    buildShopLinkRegistry(DATA);
    shopAutoLinkerReady = true;
    initShopHoverPreview();
    scanAndLinkShopElements();
  } catch (e) {
    console.warn('[Shop AutoLinker] Initialize warning:', e);
  }
}

function linkifyTextNodeContent(text) {
  if (!text || text.length < 3) return text;
  let pieces = [esc(text)];
  for (const ent of shopLinkEntries) {
    const next = [];
    for (const piece of pieces) {
      if (piece.startsWith('<')) { next.push(piece); continue; }
      let last = 0, out = '', mm;
      const g = new RegExp(ent.re.source, ent.re.flags.includes('g') ? ent.re.flags : ent.re.flags + 'g');
      while ((mm = g.exec(piece)) !== null) {
        out += piece.slice(last, mm.index);
        out += `\u0001<a class="xlink" data-id="${esc(ent.id)}" href="${ent.route}">${mm[0]}</a>\u0001`;
        last = mm.index + mm[0].length;
      }
      out += piece.slice(last);
      out.split('\u0001').forEach(p => { if (p) next.push(p); });
    }
    pieces = next;
  }
  return pieces.join('');
}

function autoLinkElementProse(el) {
  if (!el || el.dataset.shopLinked === 'true') return;
  if (el.querySelector('a.xlink')) return;
  const text = el.textContent || '';
  if (!text.trim()) return;
  const linkedHtml = linkifyTextNodeContent(text);
  if (linkedHtml !== esc(text)) {
    el.innerHTML = linkedHtml;
    el.dataset.shopLinked = 'true';
  }
}

function scanAndLinkShopElements(root = document) {
  if (!shopAutoLinkerReady) return;
  const selectors = [
    '.item-description', '.upgrade-description', '.item-scam-warning',
    '.craze-desc', '.lore-box', '.wario-quote', '.wario-scam-warning',
    '.requirement-badge', '.warning-badge', '.shop-vendor-tag',
    '.item-effects span', '.upgrade-effects span',
    '.cur-card > div > div', '.cur-tip', '.bank-card p', '.wallet-card p',
    '.shop-item-tile div', '.book-description', '.book-excerpt', '.motion-card p',
    '.assembly-feed p'
  ];
  root.querySelectorAll(selectors.join(',')).forEach(autoLinkElementProse);
}

function initShopHoverPreview() {
  let pv = document.getElementById('linkPreview');
  if (!pv) {
    pv = document.createElement('div');
    pv.id = 'linkPreview';
    document.body.appendChild(pv);
  }
  let hideTimer = null;
  function positionPreview(x, y) {
    const pad = 14, w = pv.offsetWidth, h = pv.offsetHeight;
    let left = x + pad, top = y + pad;
    if (left + w > window.innerWidth - 8) left = x - w - pad;
    if (top + h > window.innerHeight - 8) top = y - h - pad;
    if (left < 8) left = 8; if (top < 8) top = 8;
    pv.style.left = left + 'px'; pv.style.top = top + 'px';
  }
  function showPreview(a, x, y) {
    const id = a.getAttribute('data-id');
    const p = shopLinkPreviews[id];
    if (!p) return;
    pv.innerHTML = `<div class="lp-head"><span class="lp-emoji">${p.emoji}</span><span class="lp-name">${esc(p.name)}</span></div>${p.sub ? `<div class="lp-sub">${esc(p.sub).slice(0, 80)}</div>` : ''}<div class="lp-sum">${esc(p.summary)}${p.summary && p.summary.length >= 200 ? '…' : ''}</div><div class="lp-go">Click to inspect →</div>`;
    pv.classList.add('show');
    positionPreview(x, y);
  }
  function hidePreview() { pv.classList.remove('show'); }

  document.addEventListener('mouseover', e => {
    const a = e.target.closest && e.target.closest('a.xlink');
    if (a) { clearTimeout(hideTimer); showPreview(a, e.clientX, e.clientY); }
  });
  document.addEventListener('mousemove', e => {
    if (pv.classList.contains('show')) {
      const a = e.target.closest && e.target.closest('a.xlink');
      if (a) positionPreview(e.clientX, e.clientY);
    }
  });
  document.addEventListener('mouseout', e => {
    const a = e.target.closest && e.target.closest('a.xlink');
    if (a) { hideTimer = setTimeout(hidePreview, 80); }
  });
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a.xlink');
    if (a) {
      const href = a.getAttribute('href');
      if (href) {
        e.preventDefault();
        hidePreview();
        window.location.href = href;
      }
    }
  });
}

if (typeof window !== 'undefined') {
  initShopAutoLinker();
}

