/* ==========================================================================
   WARIZON — Wario's Everything Warehouse
   Amazon-inspired, login-gated storefront (redesigned from scratch)
   ========================================================================== */

import { SHOP_ITEMS, VENDORS, SHIPPING_METHODS } from './shop-data.js';
import { WALLETS, CURRENCIES } from './currency.js';

/* --------------------------------------------------------------------------
   Constants & helpers
   -------------------------------------------------------------------------- */

const SESSION_KEY = 'warizon.session';
const CUSTOM_WALLETS_KEY = 'warizon.customWallets';
const CART_KEY = id => `warizon.cart.${id}`;
const ORDERS_KEY = id => `warizon.orders.${id}`;
const PAGE_SIZE = 24;

const DEPARTMENTS = {
  consumables: { label: 'Garlic & Groceries', icon: '🧄' },
  equipment:   { label: 'Weapons & Equipment', icon: '⚔️' },
  curiosities: { label: 'Curiosities & Oddities', icon: '🔮' },
  services:    { label: 'Services & Favors', icon: '🤝' },
  faction:     { label: 'Faction Supply Depot', icon: '🚩' },
  forbidden:   { label: 'The Forbidden Aisle', icon: '☠️' },
  premium:     { label: 'WahPrime Exclusives', icon: '👑' }
};

const PRICE_BUCKETS = [
  { label: 'Under 🪙100', min: 0, max: 100 },
  { label: '🪙100 to 🪙500', min: 100, max: 500 },
  { label: '🪙500 to 🪙1,000', min: 500, max: 1000 },
  { label: '🪙1,000 to 🪙5,000', min: 1000, max: 5000 },
  { label: '🪙5,000 & Above', min: 5000, max: Infinity }
];

const FREE_ADDRESSES = [
  '1313 Garlic Lane, Diamond City', '1 Up Avenue, Mushroom Kingdom', '77 Waa Way, Wario Land',
  'Box 64, Rogueport Sewers', '9 Bob-omb Blvd, Koopa Kingdom', '202 Vine St, Beanbean Lands'
];

function esc(v) {
  return String(v ?? '').replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
}

/* deterministic hash → [0,1) for stable ratings/deals/etc. */
function hash01(str) {
  let h = 2166136261;
  const s = String(str);
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0) / 4294967295;
}

function fmt(n) { return Number(n || 0).toLocaleString('en-US', { maximumFractionDigits: 0 }); }

function sfx(name) {
  try { const a = new Audio(`${name}.mp3`); a.volume = 0.45; a.play().catch(() => {}); } catch (_) {}
}

function deliveryLabel(seed, minDays = 1, spread = 5) {
  const days = minDays + Math.floor(hash01(seed + '|dlv') * spread);
  const d = new Date(Date.now() + days * 864e5);
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

/* --------------------------------------------------------------------------
   Catalog normalization (computed once)
   -------------------------------------------------------------------------- */

function normalizeItem(raw, idx) {
  const id = String(raw.id ?? raw.name ?? `item_${idx}`);
  const cat = DEPARTMENTS[raw.category] ? raw.category : 'curiosities';
  const price = Math.max(0, Number(raw.price ?? 0));
  const rarity = String(raw.rarity || 'common').toLowerCase();
  const rating = Math.round((3.2 + hash01(id + '|r') * 1.7) * 10) / 10;           // 3.2 – 4.9
  const reviews = 3 + Math.floor(hash01(id + '|rc') * 2488);
  const cents = String(Math.floor(hash01(id + '|c') * 100)).padStart(2, '0');   // Amazon-style ".42"
  const premiumRarity = ['epic', 'legendary', 'godly', 'wario_tier'].includes(rarity);
  const prime = premiumRarity || hash01(id + '|p') < 0.35;

  let deal = null;
  if (raw.priceOriginal && Number(raw.priceOriginal) > price) {
    deal = { off: Math.round((1 - price / Number(raw.priceOriginal)) * 100), was: Number(raw.priceOriginal) };
  } else if (price > 0 && hash01(id + '|d') < 0.22) {
    const off = 10 + Math.floor(hash01(id + '|d2') * 30);
    deal = { off, was: Math.ceil(price / (1 - off / 100)) };
  }

  const vendorId = String(raw.vendor || '').trim();
  const vendor = VENDORS?.[vendorId] || null;

  return {
    id, idx,
    name: String(raw.name || id),
    desc: String(raw.description || ''),
    cat, price, rarity,
    icon: String(raw.icon || '📦'),
    stock: Number.isFinite(Number(raw.stock)) ? Number(raw.stock) : 0,
    effects: Array.isArray(raw.effects) ? raw.effects.map(String) : [],
    level: Number(raw.levelRequirement || 0) || 0,
    warning: raw.warning ? String(raw.warning) : '',
    shippedBy: raw.shippedBy ? String(raw.shippedBy) : '',
    effectDetailsRaw: (Array.isArray(raw.effectDetails) ? raw.effectDetails : [])
      .map(d => ({ title: String(d?.title || ''), rules: String(d?.rules || '') }))
      .filter(d => d.title || d.rules),
    usageRaw: raw.usage && typeof raw.usage === 'object'
      ? ['activation', 'duration', 'endsWhen', 'charges'].reduce((u, k) => raw.usage[k] ? (u[k] = String(raw.usage[k]), u) : u, {})
      : null,
    vendorId, vendor,
    rating, reviews, cents, prime, deal,
    search: `${id} ${raw.name || ''} ${raw.description || ''} ${raw.category || ''} ${rarity} ${vendor?.name || vendorId} ${(raw.effects || []).join(' ')}`.toLowerCase(),
    featured: hash01(id + '|f') + rating / 10 + (deal ? 0.25 : 0)
  };
}

const ITEMS = Object.values(SHOP_ITEMS || {}).map(normalizeItem);
const ITEM_BY_ID = new Map(ITEMS.map(it => [it.id, it]));

const deptCounts = ITEMS.reduce((m, it) => (m[it.cat] = (m[it.cat] || 0) + 1, m), {});
const vendorCounts = ITEMS.reduce((m, it) => {
  const label = it.vendor?.name || 'Wario\'s Warehouse Direct';
  m[label] = (m[label] || 0) + 1; return m;
}, {});
const TOP_VENDORS = Object.entries(vendorCounts).sort((a, b) => b[1] - a[1]).slice(0, 8);
const RARITIES = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'godly', 'wario_tier']
  .filter(r => ITEMS.some(it => it.rarity === r));

/* --------------------------------------------------------------------------
   Accounts — built from currency.js wallets, MERGED BY DISPLAY NAME so the
   duplicate "Archie Miser" (archie + archie_miser) wallets appear as ONE
   account with combined balances.
   -------------------------------------------------------------------------- */

function loadCustomWallets() {
  try { return JSON.parse(localStorage.getItem(CUSTOM_WALLETS_KEY) || '{}'); } catch (_) { return {}; }
}

function buildAccounts() {
  const byName = new Map();
  const absorb = (id, wallet, custom) => {
    if (!wallet) return;
    const name = String(wallet.name || id).trim();
    const key = name.toLowerCase();
    if (!byName.has(key)) byName.set(key, { id, name, currencies: {}, ids: [], custom: !!custom });
    const acc = byName.get(key);
    acc.ids.push(id);
    Object.entries(wallet.currencies || {}).forEach(([cid, amt]) => {
      acc.currencies[cid] = (acc.currencies[cid] || 0) + Number(amt || 0);
    });
  };
  Object.entries(WALLETS || {}).forEach(([id, w]) => absorb(id, w, false));
  Object.entries(loadCustomWallets()).forEach(([id, w]) => absorb(id, w, true));

  const preferred = ['archie', 'waluigi', 'wario', 'bowser', 'markop', 'remi', 'hjumpik', 'green_t', 'dan'];
  return [...byName.values()].sort((a, b) => {
    const ai = preferred.indexOf(a.id), bi = preferred.indexOf(b.id);
    if (ai !== -1 || bi !== -1) return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    return a.name.localeCompare(b.name);
  });
}

let ACCOUNTS = buildAccounts();
const accountById = id => ACCOUNTS.find(a => a.id === id) || null;

/* --------------------------------------------------------------------------
   Session (LOGIN GATE) — the storefront is unreachable until signed in
   -------------------------------------------------------------------------- */

function getSession() {
  try {
    const s = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    return s && accountById(s.id) ? s : null;
  } catch (_) { return null; }
}

function signIn(id) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ id, ts: Date.now() }));
  /* keep Waluipedia-wide identity keys in sync (old shop did this too) */
  localStorage.setItem('waluipediaUser', id);
  localStorage.setItem('currentUserId', id);
  sfx('wah');
}

function signOut() {
  localStorage.removeItem(SESSION_KEY);
  location.hash = '';
  location.reload();
}

/* --------------------------------------------------------------------------
   MULTI-CURRENCY (ported from shop-wallet-sync.js)
   - prices are GOLD-denominated; display converts into the operator's chosen
     payment currency using CURRENCIES[id].base_value (gold equivalents)
   - checkout supports split tender across the whole wallet, other currencies
     converting through gold at a 10% "Wario conversion fee"
   -------------------------------------------------------------------------- */

const PAY_KEY = 'warehousePaymentCurrency';       // same key the old shop used
const GOLD_FALLBACK_FEE = 0.10;
const MAX_CHANGE_GOLD = 5;
let payCurrency = localStorage.getItem(PAY_KEY) || 'gold';

function currentAccount() { return accountById(getSession()?.id); }

function currencyBase(id) { return Number(CURRENCIES[id]?.base_value) || 1; }
function coinIcon(id) { return id === 'gold' ? '🪙' : (CURRENCIES[id]?.icon || '🪙'); }
function currencyName(id) { return CURRENCIES[id]?.name || (id === 'gold' ? 'Gold Piece' : id); }

/** Currencies the connected operator actually holds (for the pay-with menu). */
function ownedCurrencyIds(acc = currentAccount()) {
  const ids = Object.keys(acc?.currencies || {})
    .filter(id => CURRENCIES[id] && Number(acc.currencies[id]) > 0);
  if (!ids.includes('gold')) ids.push('gold');
  return ids;
}

function ensurePayCurrency() {
  const owned = ownedCurrencyIds();
  if (!owned.includes(payCurrency)) {
    payCurrency = owned.includes('gold') ? 'gold' : owned[0];
    localStorage.setItem(PAY_KEY, payCurrency);
  }
  return payCurrency;
}

/** Whole-number amount of `goldAmount` expressed in `id` coins. */
function nativeAmt(goldAmount, id = ensurePayCurrency()) {
  return Math.max(0, Math.ceil(Number(goldAmount || 0) / currencyBase(id)));
}

/** "🪙1,234" display in the chosen payment currency (+ gold equivalent). */
function moneyStr(goldAmount, { withRef = true } = {}) {
  const id = ensurePayCurrency();
  return `${coinIcon(id)}${fmt(nativeAmt(goldAmount, id))}` +
    (withRef && id !== 'gold' ? ` <span class="gold-ref">≈ 🪙${fmt(goldAmount)} gold</span>` : '');
}

/** Amazon price widget driven by the current payment currency. */
function priceWidget(goldAmount, cents = '00', deal = null) {
  const id = ensurePayCurrency();
  return `<span class="p-price">
    <span class="sym">${coinIcon(id)}</span><span class="whole">${fmt(nativeAmt(goldAmount, id))}</span><span class="frac">${cents}</span>
    ${deal ? `<span class="off">-${deal.off}%</span>` : ''}
  </span>
  ${deal ? `<div class="p-was">List: <s>${coinIcon(id)}${fmt(nativeAmt(deal.was, id))}</s> <small style="font-weight:400">(${esc(currencyName(id))})</small></div>` : ''}
  ${id !== 'gold' ? `<div class="p-was">≈ 🪙${fmt(goldAmount)} gold</div>` : ''}`;
}

/* --------------------------------------------------------------------------
   REVIEWED EFFECT RULES catalog (lazy-loaded once, browser-cached)
   Built by tools/build_shop_effects_slim.py from the AI review JSON so PDP
   pages can show what each effect ACTUALLY does — activation, rules text,
   duration, charges — instead of a bare title.
   -------------------------------------------------------------------------- */

let effectCatalog = null;
let effectCatalogLoading = false;
function ensureEffectCatalog() {
  if (effectCatalog || effectCatalogLoading || typeof fetch !== 'function') return effectCatalog;
  effectCatalogLoading = true;
  fetch('data/shop-effect-details-slim.json')
    .then(r => (r.ok ? r.json() : null))
    .then(j => {
      effectCatalog = j || {};
      /* catalog landed while a PDP is open → re-open it with reviewed rules */
      const openId = document.getElementById('wzModal')?._wzItemId;
      if (openId && ITEM_BY_ID.has(openId)) { closeModal(); openPdp(openId); }
    })
    .catch(() => { effectCatalog = {}; });
  return effectCatalog;
}

/** Heuristic plain-English rules for effects with no reviewed text. */
function heuristicRules(title) {
  const text = String(title || '').replace(/_/g, ' ');
  const dc = text.match(/DC\s*(\d+)/i)?.[1];
  const plus = text.match(/\+\s*(\d+)/)?.[1];
  const turns = text.match(/(\d+)\s*turn/i)?.[1];
  if (/command spell/i.test(text)) return `As an action, speak a one-word command at one creature within 60 feet that can hear you. It makes a Wisdom saving throw (DC ${dc || 'listed'}); on a failure it follows the command on its next turn, if the command does not directly harm it.`;
  if (/performance/i.test(text) && plus) return `While the item is held or worn openly, add +${plus} to Charisma (Performance) checks to sing, speak, rally a crowd, or deliver a rehearsed command. This is an item bonus.`;
  if (/silence/i.test(text) && turns) return `For ${turns} turns, the affected creature cannot provide verbal spell components and cannot be heard beyond normal non-magical sound. The effect ends early on any listed saving throw.`;
  if (/once per day/i.test(text) || text.match(/\b1\s*\/\s*day/i)) return `This effect recharges at dawn. Once used, it cannot be used again until the next day, even if the item changes hands.`;
  if (/heal|healing|restore/i.test(text)) return `Restores hit points as described. Magical healing from an item does not stack with itself; spending a use consumes the stated charge or cooldown.`;
  if (/teleport|portal|warp/i.test(text)) return `Moves the user (and any listed passengers) as described. Teleportation fails if the destination is blocked, warded, or beyond the item's stated range.`;
  if (/resist|resistance/i.test(text)) return `While active, damage of the listed type is halved (rounded down) after other reductions. This does not grant immunity to conditions or non-damage effects.`;
  if (/curse|cursed/i.test(text)) return `The curse follows its stated trigger. Until removed (usually by Remove Curse or a listed condition), the penalty persists through rest and cannot be ignored by swapping equipment slots.`;
  return `Homebrew shop effect. Its activation, targets, and limits follow the item's reviewed rules; the effect ends when its duration expires, its charges are spent, or the item is destroyed — not automatically when the scene changes.`;
}

/**
 * Resolved effect rows for an item: [{title, rules, source:'reviewed'|'heuristic'}]
 * Prefers the AI-reviewed catalog (loaded lazily), then inline item data,
 * then the heuristic fallback so every effect shows WHAT IT DOES.
 */
function effectRowsFor(item) {
  const norm = s => String(s || '').trim().toLowerCase();
  const reviewed = ensureEffectCatalog()?.[item.id] || null;

  /* 1) AI-reviewed catalog: its own effects[] and effectDetails[] are parallel
        arrays (item authors often write effect titles that differ from the
        reviewed titles), so fall back to index matching when titles differ. */
  if (reviewed) {
    const detList = reviewed.effectDetails || [];
    const names = (reviewed.effects?.length ? reviewed.effects : detList.map(d => d.title).filter(Boolean));
    if (names.length) {
      return names.map((title, i) => {
        const found = detList.find(d => norm(d.title) === norm(title)) || detList[i] || null;
        return { title, rules: found?.rules || heuristicRules(title), source: found?.rules ? 'reviewed' : 'heuristic' };
      });
    }
  }

  /* 2) inline effectDetails embedded in the item file itself */
  const detList = item.effectDetailsRaw?.length ? item.effectDetailsRaw : null;
  const names = item.effects.length ? item.effects : (detList ? detList.map(d => d.title).filter(Boolean) : []);
  return names.map(title => {
    const found = detList?.find(d => norm(d.title) === norm(title));
    return { title, rules: found?.rules || heuristicRules(title), source: found ? 'reviewed' : 'heuristic' };
  });
}

function usageFor(item) {
  const reviewed = ensureEffectCatalog()?.[item.id] || null;
  return reviewed?.usage || item.usageRaw || null;
}

/* --------------------------------------------------------------------------
   CRAFTING FORGE (recipes / materials / schools from data/crafting.json)
   -------------------------------------------------------------------------- */

let craftData = null;
let craftLoading = false;
function ensureCrafting() {
  if (craftData || craftLoading || typeof fetch !== 'function') return;
  craftLoading = true;
  fetch('data/crafting.json')
    .then(r => (r.ok ? r.json() : { recipes: [], materials: [], schools: {} }))
    .then(j => { craftData = j; craftLoading = false; if (S.view === 'crafting') render(); })
    .catch(() => { craftData = { recipes: [], materials: [], schools: {} }; craftLoading = false; if (S.view === 'crafting') render(); });
}

const CRAFT_STATE = { tab: 'recipes', q: '', school: '', cat: '', shown: 60 };

const CRAFT_RARITY_COLORS = {
  junk: '#6b7280', common: '#767676', uncommon: '#1e8e3e', rare: '#1a73e8',
  very_rare: '#60a5fa', epic: '#9334e6', legendary: '#f9ab00', mythic: '#e2492f',
  unique: '#e8618c', forbidden: '#b12704', cosmic: '#0891b2', godly: '#d600aa', wario_tier: '#b8860b'
};
function craftColor(r) { return CRAFT_RARITY_COLORS[String(r || 'common').toLowerCase()] || CRAFT_RARITY_COLORS.common; }

/** Scored search so "fire scroll" narrows instead of returning everything. */
function craftScore(row, terms) {
  if (!terms.length) return 1;
  const nm = String(row.name || '').toLowerCase();
  const ds = String(row.description || '').toLowerCase();
  const ef = String(row.effect || '').toLowerCase();
  const ct = String(row.category || row.type || '').toLowerCase();
  let s = 0;
  for (const t of terms) {
    let hit = 0;
    if (nm === t) hit = 120;
    else if (nm.startsWith(t)) hit = 80;
    else if (nm.includes(t)) hit = 45;
    else if (ef.includes(t)) hit = 20;
    else if (ds.includes(t)) hit = 12;
    else if (ct.includes(t)) hit = 8;
    if (!hit) return 0;
    s += hit;
  }
  return s;
}

function craftRecipes() { return craftData?.recipes || []; }
function craftMaterials() { return craftData?.materials || []; }
function craftSchools() { return craftData?.schools || {}; }
function craftMatById(id) { return craftMaterials().find(m => m.id === id); }

/* --------------------------------------------------------------------------
   Cart & orders (per-account, localStorage)
   -------------------------------------------------------------------------- */

function getCart() {
  const s = getSession(); if (!s) return [];
  try {
    return (JSON.parse(localStorage.getItem(CART_KEY(s.id)) || '[]') || [])
      .filter(r => ITEM_BY_ID.has(r.id));
  } catch (_) { return []; }
}

function saveCart(rows) {
  const s = getSession(); if (!s) return;
  localStorage.setItem(CART_KEY(s.id), JSON.stringify(rows));
  updateCartBadge();
}

function cartCount() { return getCart().reduce((n, r) => n + r.qty, 0); }

function updateCartBadge() {
  const el = document.getElementById('cartCount');
  if (el) el.textContent = cartCount();
}

function addToCart(id, qty = 1, silent = false) {
  const item = ITEM_BY_ID.get(id);
  if (!item) return false;
  const rows = getCart();
  const row = rows.find(r => r.id === id);
  const inCart = row ? row.qty : 0;
  const max = Math.max(0, Math.min(item.stock, 999));
  if (inCart + qty > max) {
    toast(`Only <b>${fmt(max)}</b> in stock — Wario hoards the rest.`);
    return false;
  }
  if (row) row.qty += qty; else rows.push({ id, qty });
  saveCart(rows);
  sfx('click_subtle');
  if (!silent) toast(`<b>${esc(item.name)}</b> added to Cart`);
  return true;
}

function getOrders() {
  const s = getSession(); if (!s) return [];
  try { return JSON.parse(localStorage.getItem(ORDERS_KEY(s.id)) || '[]'); } catch (_) { return []; }
}

function saveOrders(list) {
  const s = getSession(); if (!s) return;
  localStorage.setItem(ORDERS_KEY(s.id), JSON.stringify(list));
}

/* --------------------------------------------------------------------------
   Toast
   -------------------------------------------------------------------------- */

let toastTimer = null;
function toast(html) {
  let el = document.getElementById('wzToast');
  if (!el) { el = document.createElement('div'); el.id = 'wzToast'; document.body.appendChild(el); }
  el.innerHTML = html;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

/* --------------------------------------------------------------------------
   Price / stars renderers
   -------------------------------------------------------------------------- */

function priceHtml(item, big = false) {
  return priceWidget(item.price, item.cents, item.deal);
}

function starsHtml(rating, extraClass = '') {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  const full = '★★★★★';
  return `<span class="stars outline ${extraClass}"><span class="stars-bg">${full}</span><span class="stars-fg" style="width:${pct}%">${full}</span></span>`;
}

function stockLine(item) {
  if (item.stock <= 0) return `<div class="p-stock-out">Currently unavailable — Wario sold them all</div>`;
  if (item.stock <= 3) return `<div class="p-stock-low">Only ${item.stock} left in stock - order soon.</div>`;
  return '';
}

function shipLine(item) {
  if (item.prime) {
    return `<div class="p-ship"><span class="wahprime">wahprime</span> FREE delivery <span class="getby">${deliveryLabel(item.id)}</span></div>`;
  }
  return `<div class="p-ship">Delivery <span class="getby">${deliveryLabel(item.id, 3, 8)}</span> <span class="c-slow">(Dumpster Roll — free)</span></div>`;
}

/* --------------------------------------------------------------------------
   View state & filtering
   -------------------------------------------------------------------------- */

const S = {
  view: 'home',            // 'home' | 'results' | 'orders'
  q: '', dept: 'all', page: 1, sort: 'featured',
  bucket: -1, minStars: 0, rarities: new Set(), vendors: new Set(), inStockOnly: false
};

function resetFilters() {
  S.page = 1; S.bucket = -1; S.minStars = 0;
  S.rarities = new Set(); S.vendors = new Set(); S.inStockOnly = false;
}

function filteredItems() {
  const q = S.q.trim().toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);
  let list = ITEMS;
  if (S.dept !== 'all') list = list.filter(it => it.cat === S.dept);
  if (terms.length) list = list.filter(it => terms.every(t => it.search.includes(t)));
  if (S.bucket >= 0) {
    const b = PRICE_BUCKETS[S.bucket];
    list = list.filter(it => it.price >= b.min && it.price < b.max);
  }
  if (S.minStars > 0) list = list.filter(it => it.rating >= S.minStars);
  if (S.rarities.size) list = list.filter(it => S.rarities.has(it.rarity));
  if (S.vendors.size) list = list.filter(it => S.vendors.has(it.vendor?.name || 'Wario\'s Warehouse Direct'));
  if (S.inStockOnly) list = list.filter(it => it.stock > 0);
  return sortItems(list);
}

function sortItems(list) {
  const arr = [...list];
  switch (S.sort) {
    case 'price-asc': arr.sort((a, b) => a.price - b.price); break;
    case 'price-desc': arr.sort((a, b) => b.price - a.price); break;
    case 'rating': arr.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews); break;
    case 'newest': arr.sort((a, b) => b.idx - a.idx); break;
    default: arr.sort((a, b) => b.featured - a.featured);
  }
  return arr;
}

function goTo(view, patch = {}) {
  Object.assign(S, patch);
  S.view = view;
  if (!patch.keepPage) S.page = patch.page ?? 1;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* --------------------------------------------------------------------------
   RENDER: header refresh (account-dependent bits)
   -------------------------------------------------------------------------- */

function renderHeader() {
  const session = getSession();
  const acc = session && accountById(session.id);
  ensurePayCurrency();
  const nameEl = document.getElementById('acctName');
  if (nameEl) nameEl.textContent = acc ? acc.name.split(' ')[0] : 'sign in';
  const deliver = document.getElementById('deliverTo');
  if (deliver && acc) deliver.textContent = `Deliver to ${acc.name.split(' ')[0]}`;
  const addr = document.getElementById('deliverAddr');
  if (addr && acc) addr.textContent = FREE_ADDRESSES[Math.floor(hash01(acc.name) * FREE_ADDRESSES.length)];

  /* account flyout wallet */
  const w = document.getElementById('acctWallet');
  if (w && acc) {
    const coins = Object.entries(acc.currencies)
      .filter(([, v]) => v > 0)
      .sort((a, b) => (CURRENCIES[b[0]]?.base_value || 1) * b[1] - (CURRENCIES[a[0]]?.base_value || 1) * a[1])
      .slice(0, 8)
      .map(([cid, v]) => {
        const c = CURRENCIES[cid];
        const gold = Number(v) * currencyBase(cid);
        return `<span class="acct-coin" title="≈ ${gold.toLocaleString(undefined, { maximumFractionDigits: 2 })} gold value">${esc(c?.icon || '🪙')} ${fmt(v)} ${esc(c?.name || cid)}</span>`;
      }).join('');
    w.innerHTML = coins || '<span class="acct-coin">🪙 0 — empty pockets</span>';
  }

  /* pay-with currency selector (limited to this operator's currencies) */
  const paySlot = document.getElementById('acctPaySlot');
  if (paySlot && acc) {
    const owned = ownedCurrencyIds(acc);
    const cur = ensurePayCurrency();
    paySlot.innerHTML = `<label class="pay-label">💳 Pay / display with
      <select id="payCurrencySelect">${owned.map(id =>
        `<option value="${esc(id)}" ${id === cur ? 'selected' : ''}>${esc(coinIcon(id))} ${esc(currencyName(id))}${id !== 'gold' ? ` (held ${fmt(acc.currencies[id])})` : ''}</option>`).join('')}
      </select>
      <small>Prices convert at Waluipedia exchange rates (1 gold = ${(1 / currencyBase(cur)).toLocaleString(undefined, { maximumFractionDigits: 4 })} ${esc(currencyName(cur))}).</small>
    </label>`;
  }

  const flyName = document.getElementById('flyHello');
  if (flyName && acc) flyName.textContent = `Hello, ${acc.name.split(' ')[0]}`;
  updateCartBadge();
}

/* --------------------------------------------------------------------------
   RENDER: HOME
   -------------------------------------------------------------------------- */

function miniCard(it) {
  const cid = ensurePayCurrency();
  return `<div class="mini-card" data-open="${esc(it.id)}">
    ${it.deal ? `<span class="deal-flag">${it.deal.off}% off</span>` : ''}
    <div class="mc-img">${esc(it.icon)}</div>
    <div class="mc-title">${esc(it.name)}</div>
    <div>${starsHtml(it.rating)} <span style="font-size:11px;color:var(--wz-link)">${fmt(it.reviews)}</span></div>
    <div class="mc-price">${coinIcon(cid)}${fmt(nativeAmt(it.price, cid))}<span class="cents">${it.cents}</span></div>
    ${it.deal ? `<div class="mc-was">Was <s>${coinIcon(cid)}${fmt(nativeAmt(it.deal.was, cid))}</s> · Limited-time deal</div>` : ''}
    ${it.prime ? '<div><span class="wahprime">wahprime</span></div>' : ''}
  </div>`;
}

function renderHome() {
  const deals = ITEMS.filter(it => it.deal).sort((a, b) => (b.deal.off - a.deal.off) || (b.featured - a.featured)).slice(0, 20);
  const bestEquip = ITEMS.filter(it => it.cat === 'equipment').sort((a, b) => b.reviews - a.reviews).slice(0, 18);
  const acc = getSession();
  const seed = acc ? acc.id : 'guest';
  const recs = [...ITEMS].sort((a, b) => hash01(seed + b.id) - hash01(seed + a.id)).slice(0, 18);
  const treasures = ITEMS.filter(it => ['legendary', 'godly', 'wario_tier'].includes(it.rarity)).sort((a, b) => b.price - a.price).slice(0, 16);

  return `
  <section class="hero">
    <div class="hero-inner">
      <h1>The Everything Warehouse.<br><span class="gold">Low prices. No refunds. WAH!</span></h1>
      <p>${fmt(ITEMS.length)} priceless treasures, questionable relics, and garlic-infused bargains — all hoarded by Wario himself. Sign-in customers only. Window shoppers get NOTHING.</p>
      <a class="hero-cta" data-go-deals="1">Shop today's deals →</a>
    </div>
    <div class="hero-wm">W</div>
    <div class="hero-fade"></div>
  </section>

  <div class="wz-container home-rows">
    <section class="row-card">
      <a class="row-more" data-go-deals="1">See all deals</a>
      <h2>🔥 Today's Deals</h2>
      <div class="row-sub">Discounted by Wario personally (he regrets it already)</div>
      <div class="carousel">${deals.map(miniCard).join('')}</div>
    </section>

    <section class="row-card">
      <a class="row-more" data-go-dept="equipment">Shop Weapons &amp; Equipment</a>
      <h2>⚔️ Best Sellers in Weapons &amp; Equipment</h2>
      <div class="row-sub">Rated by adventurers who survived (mostly)</div>
      <div class="carousel">${bestEquip.map(miniCard).join('')}</div>
    </section>

    <section class="row-card">
      <h2>👑 WahPrime Vault — Premium Treasures</h2>
      <div class="row-sub">Legendary goods for customers whose pockets jingle loudly</div>
      <div class="carousel">${treasures.map(miniCard).join('')}</div>
    </section>

    <section class="row-card">
      <h2>🎯 Recommended for you</h2>
      <div class="row-sub">Based on absolutely no privacy-respecting data, just Wario's gut feeling</div>
      <div class="carousel">${recs.map(miniCard).join('')}</div>
    </section>

    <section class="row-card cf-teaser" id="craftTeaser">
      <a class="row-more" data-go-craft="1">Open the Crafting Forge →</a>
      <h2>🔨 Wario's Crafting Forge</h2>
      <div class="row-sub">Potions, scrolls &amp; smithing — buy the reagents here, Wario charges extra for the anvil rental</div>
      <div class="cf-teaser-body"><span class="cf-teaser-stat">📜 <b>1,038</b> recipes</span><span class="cf-teaser-stat">🧪 <b>372</b> materials</span><span class="cf-teaser-stat">🔮 <b>8</b> schools of craft</span><button class="btn-add" data-go-craft="1" style="max-width:220px">Start crafting</button></div>
    </section>
  </div>`;
}

/* --------------------------------------------------------------------------
   RENDER: RESULTS
   -------------------------------------------------------------------------- */

function filterSidebar() {
  const deptLinks = Object.entries(DEPARTMENTS).map(([key, d]) =>
    `<li><button class="f-link ${S.dept === key ? 'active' : ''}" data-dept="${key}">
      ${d.icon} ${d.label} <span class="cnt">${fmt(deptCounts[key] || 0)}</span>
    </button></li>`).join('');

  const priceLinks = PRICE_BUCKETS.map((b, i) =>
    `<li><button class="f-link ${S.bucket === i ? 'active' : ''}" data-bucket="${i}">${b.label}</button></li>`).join('');

  const starLinks = [4, 3].map(min =>
    `<li><button class="f-link ${S.minStars === min ? 'active' : ''}" data-stars="${min}">
      ${starsHtml(min)} <span style="color:var(--wz-muted)">&amp; Up</span></button></li>`).join('');

  const rarityChecks = RARITIES.map(r =>
    `<label class="f-check"><input type="checkbox" data-rarity="${r}" ${S.rarities.has(r) ? 'checked' : ''}> <span class="rarity-chip rarity-${esc(r)}" style="text-transform:capitalize">${esc(r.replace('_', ' '))}</span></label>`).join('<br>');

  const vendorChecks = TOP_VENDORS.map(([name, cnt]) =>
    `<label class="f-check"><input type="checkbox" data-vendor="${esc(name)}" ${S.vendors.has(name) ? 'checked' : ''}> ${esc(name)} <span class="cnt" style="color:var(--wz-muted)">(${fmt(cnt)})</span></label>`).join('<br>');

  return `
    <h3>Department</h3>
    <ul>
      <li><button class="f-link ${S.dept === 'all' ? 'active' : ''}" data-dept="all">🏬 Everything <span class="cnt">${fmt(ITEMS.length)}</span></button></li>
      ${deptLinks}
    </ul>
    <h3>Avg. Customer Review</h3>
    <ul>${starLinks}
      <li><button class="f-link ${S.minStars === 0 ? 'active' : ''}" data-stars="0">All ratings</button></li>
    </ul>
    <h3>Rarity</h3><div>${rarityChecks}</div>
    <h3>Price</h3>
    <ul>${priceLinks}
      <li><button class="f-link ${S.bucket === -1 ? 'active' : ''}" data-bucket="-1">Any price</button></li>
    </ul>
    <h3>Sold By</h3><div>${vendorChecks}</div>
    <h3>Availability</h3>
    <label class="f-check"><input type="checkbox" id="fInStock" ${S.inStockOnly ? 'checked' : ''}> Hide out-of-stock junk</label>`;
}

function productCard(it) {
  const out = it.stock <= 0;
  /* use the same (reviewed) effect titles the PDP shows, so cards and the
     detail page agree on what each effect is called */
  const fx = effectRowsFor(it).map(r => r.title);
  if (!fx.length && it.effects.length) fx.push(...it.effects);
  const fxLine = fx.length
    ? `<div class="p-fx" data-open="${esc(it.id)}" title="Effects: ${esc(fx.join(' · '))}">✨ <b>${fx.length}</b> effect${fx.length === 1 ? '' : 's'}: ${esc(fx.slice(0, 2).join(', '))}${fx.length > 2 ? ` +${fx.length - 2} more` : ''} <span class="p-fx-more">see rules</span></div>`
    : '';
  return `<article class="p-card">
    ${it.deal ? `<span class="deal-flag">Limited-time deal</span>` : ''}
    <div class="p-img" data-open="${esc(it.id)}" title="${esc(it.name)}">${esc(it.icon)}</div>
    <div class="p-title" data-open="${esc(it.id)}">${esc(it.name)}</div>
    <div class="p-rating">${starsHtml(it.rating)} <span style="color:#de7921" aria-hidden="true">▾</span> <span class="r-count">${fmt(it.reviews)}</span></div>
    ${priceHtml(it)}
    ${shipLine(it)}
    ${stockLine(it)}
    ${fxLine}
    <div class="p-vendor">Sold by <a data-vendor-link="1">${esc(it.vendor?.name || 'Wario\'s Warehouse Direct')}</a> · <span class="rarity-chip rarity-${esc(it.rarity)}" style="font-size:9px">${esc(it.rarity.replace('_', ' '))}</span></div>
    <div class="p-actions">
      <button class="btn-add" data-add="${esc(it.id)}" ${out ? 'disabled' : ''}>${out ? 'Out of Stock' : 'Add to Cart'}</button>
    </div>
  </article>`;
}

function pagerHtml(total) {
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  if (pages <= 1) return '';
  const cur = S.page;
  const btn = (p, label, opts = {}) =>
    `<button data-page="${p}" ${opts.cur ? 'class="cur"' : ''} ${opts.disabled ? 'disabled' : ''}>${label}</button>`;
  const out = [btn(cur - 1, '← Previous', { disabled: cur <= 1 })];
  const set = new Set([1, 2, pages - 1, pages, cur - 1, cur, cur + 1].filter(p => p >= 1 && p <= pages));
  let last = 0;
  [...set].sort((a, b) => a - b).forEach(p => {
    if (p - last > 1) out.push('<button disabled>…</button>');
    out.push(btn(p, p, { cur: p === cur }));
    last = p;
  });
  out.push(btn(cur + 1, 'Next →', { disabled: cur >= pages }));
  return `<div class="pager">${out.join('')}</div>`;
}

function renderResults() {
  const all = filteredItems();
  const total = all.length;
  const start = (S.page - 1) * PAGE_SIZE;
  const pageItems = all.slice(start, start + PAGE_SIZE);
  const from = total === 0 ? 0 : start + 1;
  const to = Math.min(total, start + PAGE_SIZE);

  const termPart = S.q.trim() ? ` for <span class="rb-term">"${esc(S.q.trim())}"</span>` : '';
  const deptPart = S.dept !== 'all' ? ` in <b>${esc(DEPARTMENTS[S.dept].label)}</b>` : '';

  return `
  <div class="wz-container">
    <button class="filters-toggle" id="filtersToggle">☰ Filters</button>
    <div class="results-layout">
      <aside class="side-filters" id="sideFilters">${filterSidebar()}</aside>
      <div class="results-main">
        <div class="results-bar">
          <div class="rb-count">${fmt(from)}-${fmt(to)} of ${fmt(total)} results${termPart}${deptPart}</div>
          <div class="sort-wrap">Sort by:
            <select class="sort-select" id="sortSelect">
              <option value="featured" ${S.sort === 'featured' ? 'selected' : ''}>Featured</option>
              <option value="price-asc" ${S.sort === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-desc" ${S.sort === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating" ${S.sort === 'rating' ? 'selected' : ''}>Avg. Customer Review</option>
              <option value="newest" ${S.sort === 'newest' ? 'selected' : ''}>Newest Arrivals</option>
            </select>
          </div>
        </div>
        ${total === 0
          ? `<div class="empty-results"><div class="big">🧄</div><h2>No results${termPart}</h2>
             <p>Wario checked the whole warehouse. Twice. Try different keywords, or check your spelling, cheapskate.</p></div>`
          : `<div class="grid">${pageItems.map(productCard).join('')}</div>`}
        ${pagerHtml(total)}
      </div>
    </div>
  </div>`;
}

/* --------------------------------------------------------------------------
   RENDER: ORDERS ("Returns & Orders")
   -------------------------------------------------------------------------- */

function renderOrders() {
  const orders = getOrders().slice().reverse();
  const cards = orders.map(o => `
    <div class="order-card">
      <div class="oc-head">
        <div>ORDER PLACED <b>${esc(new Date(o.ts).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }))}</b></div>
        <div>TOTAL <b>🪙${fmt(o.total)}</b></div>
        <div>SHIP TO <b>${esc(o.shipTo)}</b></div>
        <div style="margin-left:auto">ORDER # <b>${esc(o.no)}</b></div>
      </div>
      <div class="oc-body">
        <div style="font-weight:700;color:#007600;margin-bottom:6px">✔ Wario has your money. Arriving ${esc(o.eta)}.</div>
        ${o.items.map(r => {
          const it = ITEM_BY_ID.get(r.id); if (!it) return '';
          return `<div class="oc-item">
            <div class="ci-img">${esc(it.icon)}</div>
            <div>
              <a data-open="${esc(it.id)}" style="font-size:14px">${esc(it.name)}</a>
              <div style="color:var(--wz-muted);font-size:12px">Qty: ${r.qty} · 🪙${fmt(it.price)} each</div>
            </div>
            <div class="oc-actions">
              <button class="btn-plain" data-buy-again="${esc(it.id)}">Buy it again</button>
              <button class="btn-plain" data-no-refund="1">Return items</button>
              <button class="btn-plain" data-no-review="1">Write a review</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`).join('');

  return `
  <div class="wz-container" style="max-width:1080px">
    <h1 class="page-title">Your Orders</h1>
    <div style="color:var(--wz-muted);margin-bottom:10px">${orders.length ? `${orders.length} order${orders.length === 1 ? '' : 's'} placed` : ''}</div>
    <div class="orders-list">
      ${orders.length ? cards : `<div class="empty-results"><div class="big">📦</div><h2>No orders yet</h2><p>Wario is waiting. His vault is not going to fill itself.</p><a data-go-shop="1">Start shopping →</a></div>`}
    </div>
  </div>`;
}

/* --------------------------------------------------------------------------
   RENDER: CRAFTING FORGE — recipes, reagents you can actually buy, schools
   -------------------------------------------------------------------------- */

function craftRecipeCard(r) {
  const sc = craftSchools()[String(r.school || '').toUpperCase()];
  const col = sc?.color || craftColor(r.rarity);
  const mats = (r.materials || []).map(m => {
    const meta = craftMatById(m.id);
    return `<button class="cf-mat" data-craft-buy="${esc(meta?.name || m.id)}" title="Find '${esc(meta?.name || m.id)}' in the warehouse">
      <span>${esc(meta?.icon || '•')}</span>
      <span class="cf-mat-n">${esc(meta?.name || m.id)}</span>
      <span class="cf-mat-q">×${m.quantity || 1}</span>
    </button>`;
  }).join('');
  const success = Number(r.successChance || 0);
  return `<article class="cf-card" style="--cf-c:${col}">
    <div class="cf-top">
      <span class="cf-ic">${esc(r.icon || '⚗️')}</span>
      <div class="cf-id">
        <h4>${esc(r.name)}</h4>
        <div class="cf-meta">
          ${sc ? `<span class="cf-school">${esc(sc.icon || '')} ${esc(sc.name)}</span>` : ''}
          ${r.spellLevel != null ? `<span>Spell Lv ${r.spellLevel}</span>` : ''}
          ${r.levelRequirement ? `<span>Req Lv ${r.levelRequirement}</span>` : ''}
        </div>
      </div>
      <div class="cf-cost">${fmt(r.goldCost || 0)}<span>g</span><small>≈ ${moneyStr(r.goldCost || 0, { withRef: false })} ${esc(currencyName(ensurePayCurrency()))}</small></div>
    </div>
    ${r.description ? `<p class="cf-desc">${esc(r.description)}</p>` : ''}
    ${r.effect ? `<div class="cf-effect">✨ ${esc(r.effect)}</div>` : ''}
    <div class="cf-stats">
      ${r.craftTime ? `<span>⏱ ${esc(String(r.craftTime))}h</span>` : ''}
      ${success ? `<span class="${success >= 80 ? 'good' : success >= 50 ? 'mid' : 'bad'}">✓ ${success}% success</span>` : ''}
      <span class="cf-type">${esc(r.category || r.type || 'recipe')}</span>
    </div>
    ${mats ? `<div class="cf-mats"><small>Materials — tap to shop:</small>${mats}</div>` : ''}
  </article>`;
}

function craftMaterialCard(m) {
  return `<article class="cf-card" style="--cf-c:${craftColor(m.rarity)}">
    <div class="cf-top">
      <span class="cf-ic">${esc(m.icon || '⚗️')}</span>
      <div class="cf-id">
        <h4>${esc(m.name)}</h4>
        <div class="cf-meta">
          <span class="cf-type">${esc(m.category || 'material')}</span>
          ${m.rarity ? `<span style="color:${craftColor(m.rarity)};font-weight:700">${esc(m.rarity)}</span>` : ''}
        </div>
      </div>
      <div class="cf-cost">${fmt(m.cost || 0)}<span>g</span></div>
    </div>
    ${m.description ? `<p class="cf-desc">${esc(m.description)}</p>` : ''}
    ${(m.effects || []).length ? `<div class="cf-effect">✨ ${esc(m.effects.join(' · '))}</div>` : ''}
    ${m.source ? `<div class="cf-src">🗺 ${esc(m.source)}</div>` : ''}
    <div class="cf-mats"><button class="btn-add" data-craft-buy="${esc(m.name)}" style="max-width:240px">🛒 Find in Warehouse</button></div>
  </article>`;
}

function craftSchoolCard([key, sc]) {
  const count = craftRecipes().filter(r => String(r.school || '').toUpperCase() === key).length;
  return `<button class="cf-school-card" data-craft-school="${esc(key)}" style="--cf-c:${esc(sc.color || '#888')}">
    <span class="cf-ic">${esc(sc.icon || '🔮')}</span>
    <b>${esc(sc.name)}</b>
    <small>${esc(sc.description || '')}</small>
    <span class="cf-count">${count} recipes</span>
  </button>`;
}

function renderCrafting() {
  ensureCrafting();
  const C = CRAFT_STATE;
  if (!craftData) {
    return `<div class="wz-container"><div class="empty-results" style="margin-top:20px">
      <div class="big">🔨</div><h2>Stoking the forge…</h2><p>Wario is counting his recipes. This takes a moment because there are 1,038 of them.</p></div></div>`;
  }
  const terms = C.q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const filterScore = list => {
    let rows = list;
    if (C.school) rows = rows.filter(r => String(r.school || '').toUpperCase() === C.school);
    if (C.cat) rows = rows.filter(r => String(r.category || r.type || '') === C.cat);
    if (terms.length) rows = rows.map(r => ({ r, s: craftScore(r, terms) })).filter(x => x.s > 0).sort((a, b) => b.s - a.s).map(x => x.r);
    return rows;
  };

  let body = '';
  if (C.tab === 'recipes') {
    const rows = filterScore(craftRecipes());
    const cats = [...new Set(craftRecipes().map(r => String(r.category || r.type || '')))].filter(Boolean).sort();
    body = `
      <div class="cf-toolbar">
        <select id="craftSchool" class="sort-select" title="School">
          <option value="">All schools</option>
          ${Object.entries(craftSchools()).map(([key, sc]) => `<option value="${esc(key)}" ${C.school === key ? 'selected' : ''}>${esc(sc.icon || '')} ${esc(sc.name)}</option>`).join('')}
        </select>
        <select id="craftCat" class="sort-select" title="Recipe type">
          <option value="">All recipe types</option>
          ${cats.map(c => `<option value="${esc(c)}" ${C.cat === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}
        </select>
        <span style="color:var(--wz-muted);font-size:12px">${fmt(rows.length)} of ${fmt(craftRecipes().length)} recipes</span>
      </div>
      <div class="cf-grid">${rows.slice(0, C.shown).map(craftRecipeCard).join('')}</div>
      ${rows.length > C.shown ? `<button class="btn-plain" id="craftMore" style="display:block;margin:16px auto;padding:10px 26px">Show more recipes (${fmt(rows.length - C.shown)} left)</button>` : ''}
      ${rows.length === 0 ? `<div class="empty-results"><div class="big">⚗️</div><h2>No recipes match</h2><p>Try fewer words — "fire", "scroll", "healing". Wario suggests "gold".</p></div>` : ''}`;
  } else if (C.tab === 'materials') {
    const rows = filterScore(craftMaterials());
    body = `<div class="cf-toolbar"><span style="color:var(--wz-muted);font-size:12px">${fmt(rows.length)} of ${fmt(craftMaterials().length)} reagents — every "🛒 Find in Warehouse" button searches the shop for you</span></div>
      <div class="cf-grid">${rows.slice(0, C.shown).map(craftMaterialCard).join('')}</div>
      ${rows.length > C.shown ? `<button class="btn-plain" id="craftMore" style="display:block;margin:16px auto;padding:10px 26px">Show more (${fmt(rows.length - C.shown)} left)</button>` : ''}
      ${rows.length === 0 ? `<div class="empty-results"><div class="big">🧪</div><h2>No materials match</h2><p>Wario ate the entry you're looking for. Try another.</p></div>` : ''}`;
  } else {
    body = `<div class="cf-schools">${Object.entries(craftSchools()).map(craftSchoolCard).join('')}</div>`;
  }

  return `
  <div class="wz-container" style="margin-top:14px">
    <div class="results-bar" style="align-items:center">
      <div>
        <h1 class="page-title" style="margin:0">🔨 Wario's Crafting Forge</h1>
        <div style="color:var(--wz-muted);font-size:13px">${fmt(craftRecipes().length)} recipes · ${fmt(craftMaterials().length)} materials · ${Object.keys(craftSchools()).length} schools — buy the reagents here, craft at your own risk.</div>
      </div>
      <div class="cf-tabs">
        <button class="cf-tab ${C.tab === 'recipes' ? 'active' : ''}" data-craft-tab="recipes">📜 Recipes</button>
        <button class="cf-tab ${C.tab === 'materials' ? 'active' : ''}" data-craft-tab="materials">🧪 Materials</button>
        <button class="cf-tab ${C.tab === 'schools' ? 'active' : ''}" data-craft-tab="schools">🔮 Schools</button>
      </div>
      <form id="craftSearchForm" style="display:flex;gap:6px;flex:1;max-width:420px;margin-left:auto">
        <input class="gate-input" id="craftSearch" value="${esc(C.q)}" placeholder="Search recipes &amp; materials (try: fire scroll)">
        <button class="search-go" type="submit" style="border-radius:4px;width:42px">🔍</button>
      </form>
    </div>
    ${body}
  </div>`;
}

/* --------------------------------------------------------------------------
   RENDER root dispatcher
   -------------------------------------------------------------------------- */

function render() {
  const view = document.getElementById('view');
  if (!view) return;
  if (S.view === 'results') view.innerHTML = renderResults();
  else if (S.view === 'orders') view.innerHTML = renderOrders();
  else if (S.view === 'crafting') view.innerHTML = renderCrafting();
  else view.innerHTML = renderHome();
  renderHeader();
}

/* --------------------------------------------------------------------------
   PRODUCT DETAIL MODAL (PDP)
   -------------------------------------------------------------------------- */

/**
 * PDP "Item effects & rules" — the part that tells shoppers what a thing
 * ACTUALLY does: numbered effect rows with full rules text (AI-reviewed when
 * available, standard rules otherwise), plus an activation/usage grid.
 */
function effectsSectionHtml(it) {
  const rows = effectRowsFor(it);
  const usage = usageFor(it);
  if (!rows.length && !usage) return '';
  const usageLabels = [['⚡ Activation', 'activation'], ['⏳ Duration', 'duration'], ['🔚 Ends when', 'endsWhen'], ['🔢 Charges', 'charges']];
  const usageRows = usage ? usageLabels
    .filter(([, k]) => usage[k])
    .map(([label, k]) => `<div class="fx-usage-cell"><span>${label}</span><span>${esc(usage[k])}</span></div>`)
    .join('') : '';
  return `<div class="pdp-effects" id="pdpEffects">
    <h2>Item effects &amp; rules <span class="fx-count">${rows.length} effect${rows.length === 1 ? '' : 's'}</span></h2>
    <div class="effects-list">
      ${rows.map((r, i) => `
      <div class="effect-row">
        <span class="fx-n">${i + 1}</span>
        <div class="fx-body">
          <div class="fx-head"><b>${esc(r.title)}</b><span class="fx-src ${r.source}">${r.source === 'reviewed' ? '✓ reviewed rules' : 'standard rules'}</span></div>
          <p>${esc(r.rules)}</p>
        </div>
      </div>`).join('')}
    </div>
    ${usageRows ? `<div class="fx-usage">${usageRows}</div>` : ''}
  </div><hr class="pdp-hr">`;
}

function openPdp(id) {
  const it = ITEM_BY_ID.get(id);
  if (!it) return;
  ensureEffectCatalog();   // trigger lazy load so reviewed rules arrive
  const scrim = document.createElement('div');
  scrim.className = 'modal-scrim';
  scrim.id = 'wzModal';
  scrim._wzItemId = id;
  const vendorName = it.vendor?.name || 'Wario\'s Warehouse Direct';
  const out = it.stock <= 0;
  const maxQty = Math.min(Math.max(it.stock, 0), 10);
  const qtyOpts = Array.from({ length: maxQty }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('');

  scrim.innerHTML = `
  <div class="modal" role="dialog" aria-modal="true">
    <button class="modal-x" data-close="1" aria-label="Close">✕</button>
    <div class="pdp">
      <div class="pdp-crumb">
        <a data-crumb-goto="1">Everything</a> ›
        <a data-crumb-dept="${esc(it.cat)}">${esc(DEPARTMENTS[it.cat].icon)} ${esc(DEPARTMENTS[it.cat].label)}</a> ›
        <span>${esc(it.name)}</span>
      </div>

      <div class="pdp-img"><span class="rarity-chip rarity-${esc(it.rarity)}">${esc(it.rarity.replace('_', ' '))}</span>${esc(it.icon)}</div>

      <div class="pdp-mid">
        <h1>${esc(it.name)}</h1>
        <div class="pdp-store">Visit the <a data-vendor-search="${esc(vendorName)}">${esc(vendorName)} Store</a></div>
        <div class="p-rating">${starsHtml(it.rating)} <span style="color:#de7921">▾</span> <a class="r-count">${it.rating} · ${fmt(it.reviews)} ratings</a></div>
        <hr class="pdp-hr">
        <div class="pdp-price-block">
          ${priceHtml(it, true)}
        </div>
        ${shipLine(it)}
        <hr class="pdp-hr">
        ${effectsSectionHtml(it)}
        <div class="pdp-about">
          <h2>About this item</h2>
          <ul>
            ${it.level ? `<li>Requires character level ${it.level} to operate safely.</li>` : ''}
            ${it.warning ? `<li style="color:#b12704">⚠ ${esc(it.warning)}</li>` : ''}
            ${it.stock <= 3 && it.stock > 0 ? `<li style="color:#b12704"><b>Hurry</b> — only ${it.stock} left in the warehouse.</li>` : ''}
            ${!it.level && !it.warning && it.stock > 3 ? '<li>A genuine Wario-grade product. Quality guaranteed-ish.</li>' : ''}
          </ul>
          <div class="pdp-desc">${esc(it.desc)}</div>
          <table class="pdp-table">
            <tr><td>Department</td><td>${esc(DEPARTMENTS[it.cat].label)}</td></tr>
            <tr><td>Rarity</td><td>${esc(it.rarity.replace('_', ' '))}</td></tr>
            <tr><td>Sold by</td><td>${esc(vendorName)}${it.vendor?.location ? ' — ' + esc(it.vendor.location) : ''}</td></tr>
            ${it.shippedBy ? `<tr><td>Fulfilled by</td><td>${esc(it.shippedBy)}</td></tr>` : ''}
            <tr><td>Item model</td><td>${esc(it.id)}</td></tr>
            <tr><td>Return policy</td><td><b>No returns. No refunds.</b> All sales benefit the Wario Retirement &amp; Garlic Fund.</td></tr>
          </table>
        </div>
      </div>

      <aside class="pdp-buybox">
        <div class="bb-price"><span class="sym">${coinIcon(ensurePayCurrency())}</span><span class="whole">${fmt(nativeAmt(it.price))}</span><span class="frac">${it.cents}</span></div>
        ${ensurePayCurrency() !== 'gold' ? `<div class="p-was">≈ 🪙${fmt(it.price)} gold · paying in ${esc(currencyName(ensurePayCurrency()))}</div>` : ''}
        ${it.deal ? `<div class="p-was">List: <s>${coinIcon(ensurePayCurrency())}${fmt(nativeAmt(it.deal.was))}</s> <span style="color:var(--wz-deal-red);font-weight:700">-${it.deal.off}%</span></div>` : ''}
        <div style="margin-top:6px">${it.prime ? '<span class="wahprime">wahprime</span> FREE delivery' : 'Economy delivery'} <b>${deliveryLabel(it.id)}</b></div>
        ${out ? '<div class="bb-stock low">Currently unavailable</div>' : it.stock <= 3 ? `<div class="bb-stock low">Only ${it.stock} left in stock - order soon.</div>` : '<div class="bb-stock">In Stock</div>'}
        ${!out ? `<select class="qty-select" id="pdpQty">${qtyOpts}</select>` : ''}
        <div class="bb-btns">
          <button class="btn-add" data-pdp-add="${esc(it.id)}" ${out ? 'disabled' : ''}>Add to Cart</button>
          <button class="btn-buy" data-pdp-buy="${esc(it.id)}" ${out ? 'disabled' : ''}>Buy Now</button>
        </div>
        <div class="secure-note">🔒 <span style="color:var(--wz-link)">Secure transaction</span></div>
        <div style="margin-top:10px">
          <div class="bb-meta"><span class="k">Ships from</span><span class="v">${esc(vendorName)}</span></div>
          <div class="bb-meta"><span class="k">Sold by</span><span class="v">Wario's Warehouse, W. LLC</span></div>
          <div class="bb-meta"><span class="k">Returns</span><span class="v" style="color:#b12704;font-weight:700">None. Ever. WAH!</span></div>
          <div class="bb-meta"><span class="k">Payment</span><span class="v" style="color:var(--wz-muted)">Preview only — your Waluipedia wallet is never charged on this page.</span></div>
        </div>
      </aside>
    </div>
  </div>`;
  document.body.appendChild(scrim);
  scrim.addEventListener('click', e => {
    if (e.target === scrim || e.target.closest('[data-close]')) closeModal();
  });
}

function closeModal() {
  document.getElementById('wzModal')?.remove();
}

/* --------------------------------------------------------------------------
   CART DRAWER + CHECKOUT
   -------------------------------------------------------------------------- */

function openCart() {
  closeCart();
  const scrim = document.createElement('div');
  scrim.className = 'cart-scrim';
  scrim.id = 'wzCartScrim';
  const drawer = document.createElement('div');
  drawer.className = 'cart-drawer open';
  drawer.id = 'wzCart';
  document.body.append(scrim, drawer);
  scrim.addEventListener('click', closeCart);
  renderCartDrawer();
}

function closeCart() {
  document.getElementById('wzCartScrim')?.remove();
  document.getElementById('wzCart')?.remove();
}

function renderCartDrawer() {
  const drawer = document.getElementById('wzCart');
  if (!drawer) return;
  const rows = getCart();
  const subtotal = rows.reduce((s, r) => s + (ITEM_BY_ID.get(r.id)?.price || 0) * r.qty, 0);
  const cid = ensurePayCurrency();
  drawer.innerHTML = `
    <div class="cart-head">Shopping Cart <button class="modal-x" style="position:static" data-cart-close="1">✕</button></div>
    <div class="cart-body">
      ${rows.length === 0 ? `<div class="cart-empty"><div class="big">🛒</div><h3>Your Warizon Cart is empty</h3><p>Wario weeps for your wallet.</p></div>` : ''}
      ${rows.map(r => {
        const it = ITEM_BY_ID.get(r.id); if (!it) return '';
        return `<div class="cart-row">
          <div class="cr-img" data-open="${esc(it.id)}">${esc(it.icon)}</div>
          <div>
            <div class="cr-title" data-open="${esc(it.id)}">${esc(it.name)}</div>
            <div class="cr-price">${coinIcon(cid)}${fmt(nativeAmt(it.price * r.qty, cid))} <small style="color:var(--wz-muted);font-weight:400">(${fmt(nativeAmt(it.price, cid))} ea)</small></div>
            ${it.prime ? '<div class="cr-prime"><span class="wahprime">wahprime</span></div>' : ''}
            <div class="cr-controls">
              <span class="qty-pill">
                <button data-qty-dec="${esc(it.id)}">−</button><b>${r.qty}</b><button data-qty-inc="${esc(it.id)}">+</button>
              </span>
              <a class="cr-del" data-cart-del="${esc(it.id)}">Delete</a>
            </div>
          </div>
          <div></div>
        </div>`;
      }).join('')}
    </div>
    <div class="cart-foot">
      <div class="subtotal">Subtotal (${cartCount()} item${cartCount() === 1 ? '' : 's'}): <b>${coinIcon(cid)}${fmt(nativeAmt(subtotal, cid))}</b>${cid !== 'gold' ? ` <small class="gold-ref">≈ 🪙${fmt(subtotal)} gold</small>` : ''}</div>
      <button class="btn-buy" data-goto-checkout="1" ${rows.length === 0 ? 'disabled' : ''}>Proceed to checkout</button>
    </div>`;
}

/* --------------------------------------------------------------------------
   SPLIT-TENDER PAYMENT PLANNER (multi-currency checkout)
   Ported from shop-wallet-sync.js: offer coins of any currency in the
   wallet; gold pays at face value, other currencies convert through gold at
   a 10% Wario fee. Overpayment change is capped (Wario pockets the rest).
   -------------------------------------------------------------------------- */

function walletEntries(acc = currentAccount()) {
  return Object.entries(acc?.currencies || {})
    .filter(([cid, amt]) => CURRENCIES[cid] && Number(amt) > 0)
    .map(([cid, amt]) => ({ id: cid, held: Number(amt), base: currencyBase(cid) }))
    .sort((a, b) => (a.id === 'gold') - (b.id === 'gold') || (b.held * b.base) - (a.held * a.base));
}

/** Suggested offer per currency for a gold total: gold first, others convert. */
function suggestTender(totalGold, acc = currentAccount()) {
  const offers = {};
  let remaining = totalGold;
  for (const e of walletEntries(acc)) {
    if (remaining <= 0) break;
    if (e.id === 'gold') {
      const offer = Math.min(e.held, remaining);
      if (offer > 0) offers.gold = offer;
      remaining -= offer;
    }
  }
  for (const e of walletEntries(acc)) {
    if (remaining <= 0 || e.id === 'gold') continue;
    // convert: offers worth remaining*(1+fee) in native units, capped by held
    const neededNative = (remaining * (1 + GOLD_FALLBACK_FEE)) / e.base;
    const offer = Math.min(e.held, Math.ceil(neededNative * 100) / 100);
    if (offer > 0) {
      offers[e.id] = offer;
      remaining -= (offer * e.base) / (1 + GOLD_FALLBACK_FEE);
    }
  }
  return offers;
}

/** Evaluate an offer draft against a total. */
function evaluateTender(totalGold, offers, acc = currentAccount()) {
  const wallet = walletEntries(acc);
  let coverage = 0;      // gold-equivalent buying power actually applied
  let goldCoinSpent = 0; // gold-value handed over before fee discount
  let convertSpent = 0;
  const lines = [];
  for (const e of wallet) {
    let offer = Math.max(0, Number(offers[e.id] || 0));
    offer = Math.min(offer, e.held);
    if (offer <= 0) continue;
    const goldValue = offer * e.base;
    if (e.id === 'gold') {
      coverage += offer;
      goldCoinSpent += offer;
      lines.push(`🪙 ${fmt(offer)} ${esc(currencyName('gold'))}`);
    } else {
      coverage += goldValue / (1 + GOLD_FALLBACK_FEE);
      convertSpent += goldValue;
      lines.push(`${coinIcon(e.id)} ${offer.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${esc(currencyName(e.id))} (≈${goldValue.toLocaleString(undefined, { maximumFractionDigits: 1 })}g → ${(goldValue / (1 + GOLD_FALLBACK_FEE)).toLocaleString(undefined, { maximumFractionDigits: 1 })}g after fee)`);
    }
  }
  const remaining = totalGold - coverage;
  const fees = convertSpent - convertSpent / (1 + GOLD_FALLBACK_FEE);
  // change policy: Wario returns at most MAX_CHANGE_GOLD, keeps the rest
  const changeGold = Math.max(0, -remaining);
  const changeReturned = Math.min(changeGold, Math.min(MAX_CHANGE_GOLD, Math.max(0.1, totalGold * 0.05)));
  return { coverage, remaining, covered: remaining <= 0.001, fees, changeGold, changeReturned, lines };
}

function tenderQuoteHtml(totalGold, offers, acc = currentAccount()) {
  const ev = evaluateTender(totalGold, offers, acc);
  const cid = ensurePayCurrency();
  let result;
  if (ev.covered) {
    result = `<div class="tender-result ok">✅ <b>Split tender covers the order.</b>
      ${ev.lines.join(' · ') || ''}
      ${ev.fees > 0.01 ? `<br>Wario conversion fee included: ≈🪙${ev.fees.toLocaleString(undefined, { maximumFractionDigits: 1 })} gold (${Math.round(GOLD_FALLBACK_FEE * 100)}%).` : ''}
      ${ev.changeGold > 0.001 ? `<br>Change owed ≈🪙${ev.changeGold.toLocaleString(undefined, { maximumFractionDigits: 1 })} → returned ≤🪙${ev.changeReturned.toLocaleString(undefined, { maximumFractionDigits: 1 })}; Wario keeps the rest. Obviously.` : ''}
    </div>`;
  } else {
    result = `<div class="tender-result warn">⚠️ <b>Still due: 🪙${ev.remaining.toLocaleString(undefined, { maximumFractionDigits: 1 })} gold
      (${coinIcon(cid)}${fmt(nativeAmt(ev.remaining, cid))} ${esc(currencyName(cid))})</b> —
      offer more coins, or come back when your pockets are heavier. WAH!</div>`;
  }
  const feeNote = Object.keys(offers).some(k => k !== 'gold' && Number(offers[k]) > 0)
    ? `<small>Non-gold coins convert through gold at a ${Math.round(GOLD_FALLBACK_FEE * 100)}% fee. Balances are preview-only — nothing is deducted on this page.</small>`
    : `<small>Paying face-value in gold. Wallet balances are preview-only — nothing is deducted on this page.</small>`;
  return `<div class="tender-quote">
    <div class="tq-total">Grand total due: <b>🪙${fmt(totalGold)} gold</b> <span class="gold-ref">(${moneyStr(totalGold, { withRef: false })} ${esc(currencyName(cid))})</span></div>
    ${result}${feeNote}
  </div>`;
}

function openCheckout(buyNowRows = null) {
  closeCart();
  const acc = currentAccount();
  const rows = buyNowRows || getCart();
  if (!rows.length) { toast('Your cart is empty — Wario cannot sell you nothing. (He tried.)'); return; }

  const shipOpts = [
    { m: SHIPPING_METHODS?.DUMPSTER_ROLL || { name: 'Dumpster Roll', deliveryTime: '7-30 days', cost: 0, icon: '🗑️', description: '' } },
    { m: SHIPPING_METHODS?.PARAKARRY_POST || { name: 'Standard Parakarry', deliveryTime: '3-5 days', cost: 1500, icon: '✉️', description: '' } },
    { m: SHIPPING_METHODS?.BULLET_BILL || { name: 'Bullet Bill Ride', deliveryTime: '12 hours', cost: 10000, icon: '⚫', description: '' } }
  ];

  const scrim = document.createElement('div');
  scrim.className = 'modal-scrim';
  scrim.id = 'wzModal';

  /* per-open checkout state (kept across shipping re-renders) */
  const coState = { shipIdx: 0, offers: null };

  const totals = shipIdx => {
    const subtotal = rows.reduce((s, r) => s + (ITEM_BY_ID.get(r.id)?.price || 0) * r.qty, 0);
    const shipCost = Number(shipOpts[shipIdx].m.cost || 0);
    const tax = Math.round(subtotal * 0.05); // the Wario Tax
    return { subtotal, shipCost, tax, total: subtotal + shipCost + tax };
  };

  const renderCo = (shipIdx = 0) => {
    const { subtotal, shipCost, tax, total } = totals(shipIdx);
    if (!coState.offers) coState.offers = suggestTender(total, acc);
    const ev = evaluateTender(total, coState.offers, acc);
    const addr = FREE_ADDRESSES[Math.floor(hash01(acc?.name || 'wario') * FREE_ADDRESSES.length)];
    const cid = ensurePayCurrency();
    const ship = shipOpts[shipIdx].m;

    return `
    <div class="modal" role="dialog" aria-modal="true">
      <button class="modal-x" data-close="1">✕</button>
      <div class="co-grid">
        <div>
          <div class="co-sec">
            <h3>1 &nbsp;Shipping address</h3>
            <div style="font-size:13px"><b>${esc(acc?.name || 'Unknown Customer')}</b><br>${esc(addr)}<br>WAH-zon Prime Address (verified by Wario, allegedly)</div>
          </div>
          <div class="co-sec">
            <h3>2 &nbsp;Payment — multi-currency split tender</h3>
            <div class="co-line"><span>Waluipedia Wallet — ${esc(acc?.name || '?')}</span>
              <b>≈🪙${walletEntries(acc).reduce((s, e) => s + e.held * e.base, 0).toLocaleString(undefined, { maximumFractionDigits: 1 })} gold value</b></div>
            <div class="tender-planner">
              ${walletEntries(acc).map(e => {
                const offered = Number(coState.offers[e.id] || 0);
                return `<label class="tender-row">
                  <span class="t-cur">${coinIcon(e.id)} <b>${esc(currencyName(e.id))}</b><small>held ${fmt(e.held)} · 1 = ${e.base}g</small></span>
                  <span class="t-offer">offer <input class="tender-input" data-tender="${esc(e.id)}" type="number" min="0" max="${e.held}" step="any" value="${offered || ''}" placeholder="0"></span>
                  <span class="t-eq">${offered > 0 ? (e.id === 'gold' ? `= 🪙${fmt(offered)}` : `≈ 🪙${(offered * e.base).toLocaleString(undefined, { maximumFractionDigits: 1 })} face → 🪙${(offered * e.base / (1 + GOLD_FALLBACK_FEE)).toLocaleString(undefined, { maximumFractionDigits: 1 })} effective`) : ''}</span>
                </label>`;
              }).join('')}
              <button type="button" class="tender-reset" id="tenderReset">↺ Reset suggested split</button>
            </div>
            <div id="tenderQuote">${tenderQuoteHtml(total, coState.offers, acc)}</div>
          </div>
          <div class="co-sec">
            <h3>3 &nbsp;Review items &amp; shipping</h3>
            <div class="co-ship-opts">
              ${shipOpts.map((s, i) => `<label><input type="radio" name="wzShip" value="${i}" ${i === shipIdx ? 'checked' : ''}>
                <span>${s.m.icon || '📦'} <b>${esc(s.m.name)}</b> — ${esc(s.m.deliveryTime)}${s.m.description ? ' · ' + esc(s.m.description) : ''}</span>
                <span class="ship-cost">${s.m.cost ? '🪙' + fmt(s.m.cost) : 'FREE'}</span></label>`).join('')}
            </div>
            <hr class="pdp-hr">
            ${rows.map(r => {
              const it = ITEM_BY_ID.get(r.id); if (!it) return '';
              return `<div class="co-item"><div class="ci-img">${esc(it.icon)}</div>
                <span>${esc(it.name)}</span><span class="ci-qty">×${r.qty} · ${coinIcon(cid)}${fmt(nativeAmt(it.price * r.qty, cid))}</span></div>`;
            }).join('')}
          </div>
        </div>
        <div class="co-summary">
          <button class="btn-buy" id="placeOrderBtn" ${ev.covered ? '' : 'disabled'}>Place your order</button>
          ${ev.covered ? '' : '<div class="co-insufficient">❌ Split tender does not cover this yet. Wario laughs at your pockets. WAH!</div>'}
          <div class="line"><span>Items (${rows.reduce((n, r) => n + r.qty, 0)}):</span><span>${moneyStr(subtotal)}</span></div>
          <div class="line"><span>Shipping &amp; handling:</span><span>${shipCost ? moneyStr(shipCost) : 'FREE'}</span></div>
          <div class="line"><span>Total before tax:</span><span>${moneyStr(subtotal + shipCost)}</span></div>
          <div class="line"><span>Estimated Wario Tax (5%):</span><span>${moneyStr(tax)}</span></div>
          <div class="total"><span>Order total:</span><span>${moneyStr(total)}</span></div>
          <div class="co-warning">By placing your order, you agree to Warizon's <a>conditions of use</a>: no refunds, no exchanges, no eye contact with Wario. ${ev.fees > 0.01 ? `Includes ≈🪙${ev.fees.toLocaleString(undefined, { maximumFractionDigits: 1 })} gold in conversion fees.` : ''}</div>
        </div>
      </div>
    </div>`;
  };

  scrim.innerHTML = renderCo(0);
  document.body.appendChild(scrim);

  scrim.addEventListener('change', e => {
    if (e.target.name === 'wzShip') {
      coState.shipIdx = Number(e.target.value);
      coState.offers = null;   // new total → fresh suggested split
      scrim.innerHTML = renderCo(coState.shipIdx);
    }
  });
  scrim.addEventListener('input', e => {
    const input = e.target.closest?.('[data-tender]');
    if (!input) return;
    coState.offers[input.dataset.tender] = Number(input.value || 0);
    const quote = scrim.querySelector('#tenderQuote');
    if (quote) {
      const { total } = totals(coState.shipIdx);
      quote.innerHTML = tenderQuoteHtml(total, coState.offers, acc);
      const btn = scrim.querySelector('#placeOrderBtn');
      if (btn) btn.disabled = !evaluateTender(total, coState.offers, acc).covered;
    }
  });
  scrim.addEventListener('click', e => {
    if (e.target === scrim || e.target.closest('[data-close]')) closeModal();
    if (e.target.closest('#tenderReset')) {
      coState.offers = null;
      scrim.innerHTML = renderCo(coState.shipIdx);
      return;
    }
    if (e.target.closest('#placeOrderBtn')) {
      placeOrder(rows, shipOpts[coState.shipIdx].m, !!buyNowRows, coState.offers);
    }
  });
}

function placeOrder(rows, ship, isBuyNow = false, offers = null) {
  const acc = currentAccount();
  const subtotal = rows.reduce((s, r) => s + (ITEM_BY_ID.get(r.id)?.price || 0) * r.qty, 0);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + Number(ship.cost || 0) + tax;
  const no = 'WAH-' + Math.floor(hash01(String(Date.now()) + total) * 9e13).toString(16).toUpperCase().padStart(11, '0').slice(0, 11);
  const eta = deliveryLabel(no, /hour|Instant/i.test(ship.deliveryTime || '') ? 0 : 2, 4);
  const tender = offers ? evaluateTender(total, offers, acc) : null;

  const orders = getOrders();
  orders.push({ no, ts: Date.now(), shipTo: acc?.name?.split(' ')[0] || 'You', total, eta, ship: ship.name, items: rows });
  saveOrders(orders);

  if (!isBuyNow) saveCart([]);   // cart checkout clears the cart
  sfx('wah');
  closeModal();

  const scrim = document.createElement('div');
  scrim.className = 'modal-scrim';
  scrim.id = 'wzModal';
  scrim.innerHTML = `
    <div class="modal" style="max-width:640px">
      <button class="modal-x" data-close="1">✕</button>
      <div class="order-done">
        <div class="big">✅</div>
        <h1>Order placed, thanks!</h1>
        <p>Confirmation will be sent to nobody — Wario does not do email.<br>
        Order number: <span class="order-no">${esc(no)}</span></p>
        <p><b>${esc(ship.icon || '📦')} ${esc(ship.name)}</b> — arriving <b>${esc(eta)}</b> (${esc(ship.deliveryTime)})</p>
        ${tender && tender.lines.length ? `<p style="font-size:13px">Paid with: ${tender.lines.join(' · ')}</p>` : ''}
        <p style="color:#b12704;font-weight:700">Wario is already spending your 🪙${fmt(total)} gold${tender && tender.fees > 0.01 ? ` (≈🪙${tender.fees.toLocaleString(undefined, { maximumFractionDigits: 1 })} went to conversion fees)` : ''}. No refunds!</p>
        <button class="btn-add" id="doneOrdersBtn" style="max-width:260px">View your orders</button>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  scrim.addEventListener('click', e => {
    if (e.target === scrim || e.target.closest('[data-close]')) closeModal();
    if (e.target.closest('#doneOrdersBtn')) { closeModal(); goTo('orders'); }
  });
}

/* --------------------------------------------------------------------------
   "ALL" DRAWER
   -------------------------------------------------------------------------- */

function openDrawer() {
  closeDrawer();
  const scrim = document.createElement('div');
  scrim.className = 'drawer-scrim open';
  scrim.id = 'wzDrawerScrim';
  const drawer = document.createElement('div');
  drawer.className = 'drawer open';
  drawer.id = 'wzDrawer';
  const acc = accountById(getSession()?.id);
  drawer.innerHTML = `
    <div class="drawer-head"><span style="font-size:22px">👤</span> Hello, ${esc(acc ? acc.name : 'sign in')}</div>
    <div class="drawer-body">
      <div class="drawer-sec">
        <h3>Shop by Department</h3>
        <button data-drawer-dept="all">Everything — the whole hoard <span>›</span></button>
        ${Object.entries(DEPARTMENTS).map(([key, d]) =>
          `<button data-drawer-dept="${key}">${d.icon} ${esc(d.label)} <span>›</span></button>`).join('')}
        <hr>
        <h3>Programs &amp; Features</h3>
        <button data-drawer-deals="1">🔥 Today's Deals <span>›</span></button>
        <button data-drawer-prime="1">👑 WahPrime Exclusives <span>›</span></button>
        <button data-drawer-crafting="1">🔨 Crafting Forge <span>›</span></button>
        <button data-drawer-orders="1">📦 Your Orders <span>›</span></button>
        <button data-drawer-cart="1">🛒 Your Cart <span>›</span></button>
        <hr>
        <h3>Help &amp; Settings</h3>
        <button data-drawer-account="1">Your Account <span>›</span></button>
        <button data-drawer-nofaq="1">Customer Service <span>›</span></button>
        <button data-drawer-signout="1">Sign Out <span>›</span></button>
      </div>
    </div>`;
  document.body.append(scrim, drawer);
  scrim.addEventListener('click', closeDrawer);
}

function closeDrawer() {
  document.getElementById('wzDrawerScrim')?.remove();
  document.getElementById('wzDrawer')?.remove();
}

/* --------------------------------------------------------------------------
   LOGIN GATE (Amazon-style sign-in, forces login before browsing)
   -------------------------------------------------------------------------- */

function renderGate() {
  const gate = document.getElementById('gate');
  if (!gate) return;
  const accounts = ACCOUNTS;
  const options = accounts.map(a =>
    `<option value="${esc(a.id)}">${esc(a.name)}</option>`).join('');

  gate.innerHTML = `
    <div class="gate-logo">warizon<span style="color:var(--wz-orange);font-size:14px;vertical-align:super">.wah</span>
      <span class="wz-arrow"></span>
    </div>

    <div class="gate-card">
      <h1>Sign in</h1>
      <div id="gateStep1">
        <label class="gate-label" for="gateAccount">Who's shopping today?</label>
        <select class="gate-select" id="gateAccount">
          <option value="" selected disabled>Choose your Waluipedia account…</option>
          ${options}
        </select>
        <div class="gate-hint">One identity per legend — duplicate ledger wallets (looking at you, <i>Archie&nbsp;Miser</i>) are merged automatically at sign-in.</div>
        <button class="gate-btn" id="gateContinue">Continue</button>
        <div class="gate-legal">By continuing, you agree to Warizon's <a>Conditions of Use</a> and Wario's <a>Greed Notice</a>. All prices final. All sales final. All final, final.</div>
        <div class="gate-error" id="gateErr1">⚠ <b>Pick an account first.</b><br>Wario does not serve anonymous window-shoppers.</div>
      </div>

      <div id="gateStep2" hidden>
        <div class="gate-account-info">
          <span class="gai-icon" id="gateAccIcon">🧑</span>
          <span><b id="gateAccName"></b><small>Waluipedia Ledger Wallet — verified-ish</small></span>
          <a id="gateChange" style="margin-left:auto">Change</a>
        </div>
        <label class="gate-label" for="gatePin">Stash PIN</label>
        <input class="gate-input" id="gatePin" type="password" inputmode="numeric" maxlength="12" placeholder="4+ digits">
        <div class="gate-hint">Wario accepts any PIN of 4+ characters. He just enjoys watching you do math.</div>
        <button class="gate-btn" id="gateSignIn">Sign in</button>
        <div class="gate-error" id="gateErr2">⚠ <b>PIN too short.</b><br>Even Wario's security has standards. Low ones, but standards.</div>
        <div class="gate-legal"><a id="gateForgot">Forgot your PIN?</a> It doesn't matter. Neither does the PIN.</div>
      </div>
    </div>

    <div class="gate-divider"><span>New to the Warehouse?</span></div>
    <button class="gate-create" id="gateCreateBtn">Create your Warizon account</button>

    <div class="gate-foot">
      <div class="links">
        <a data-gate-nolink="1">Conditions of Use</a>
        <a data-gate-nolink="1">Greed Notice</a>
        <a data-gate-nolink="1">Help</a>
      </div>
      <div class="copy">© 2024–2026, Warizon.wah, Inc. — a proud subsidiary of Wario's Couch Cushions. ${fmt(ITEMS.length)} items in stock and zero customer service representatives on payroll.</div>
    </div>`;

  /* --- step logic --- */
  const step1 = gate.querySelector('#gateStep1');
  const step2 = gate.querySelector('#gateStep2');
  const err1 = gate.querySelector('#gateErr1');
  const err2 = gate.querySelector('#gateErr2');
  let chosenId = '';

  gate.querySelector('#gateContinue').addEventListener('click', () => {
    chosenId = gate.querySelector('#gateAccount').value;
    const acc = accountById(chosenId);
    if (!acc) { err1.classList.add('show'); sfx('click'); return; }
    err1.classList.remove('show');
    gate.querySelector('#gateAccName').textContent = acc.name;
    gate.querySelector('#gateAccIcon').textContent = ['🧑‍🚀','🧙','🦸','👑','🧝','🧛','🐢','🍄'][Math.floor(hash01(acc.id) * 8)];
    step1.hidden = true;
    step2.hidden = false;
    gate.querySelector('#gatePin').focus();
  });

  gate.querySelector('#gateChange').addEventListener('click', () => {
    step2.hidden = true; step1.hidden = false; err2.classList.remove('show');
  });

  gate.querySelector('#gateForgot').addEventListener('click', () => {
    toast('Wario forgot it too. Also his keys. Just type anything, 4+ characters.');
  });

  const doSignIn = () => {
    const pin = gate.querySelector('#gatePin').value;
    if (pin.trim().length < 4) { err2.classList.add('show'); sfx('click'); return; }
    signIn(chosenId);
    enterStore();
  };
  gate.querySelector('#gateSignIn').addEventListener('click', doSignIn);
  gate.querySelector('#gatePin').addEventListener('keydown', e => { if (e.key === 'Enter') doSignIn(); });

  gate.querySelector('#gateCreateBtn').addEventListener('click', openCreateAccount);
  gate.addEventListener('click', e => {
    if (e.target.closest('[data-gate-nolink]')) toast('That page is on Wario\'s desk. It has been there since 2019. WAH!');
  });
}

function openCreateAccount() {
  closeModal();
  const scrim = document.createElement('div');
  scrim.className = 'modal-scrim';
  scrim.id = 'wzModal';
  scrim.innerHTML = `
    <div class="modal" style="max-width:420px">
      <button class="modal-x" data-close="1">✕</button>
      <div style="padding:26px">
        <h1 style="font-size:26px;font-weight:600;margin:0 0 14px">Create account</h1>
        <label class="gate-label" for="newName">Your name</label>
        <input class="gate-input" id="newName" maxlength="40" placeholder="First and last name (or legend title)">
        <label class="gate-label" for="newPin">Stash PIN</label>
        <input class="gate-input" id="newPin" type="password" maxlength="12" placeholder="4+ characters">
        <button class="gate-btn" id="createGo">Claim your stash</button>
        <div class="gate-error" id="createErr" style="display:none"></div>
        <div class="gate-legal">New accounts receive a generous 🪙100 gold welcome bonus, courtesy of Wario's Couch Cushions (terms: it was in the couch).</div>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  scrim.addEventListener('click', e => { if (e.target === scrim || e.target.closest('[data-close]')) closeModal(); });

  scrim.querySelector('#createGo').addEventListener('click', () => {
    const name = scrim.querySelector('#newName').value.trim();
    const pin = scrim.querySelector('#newPin').value.trim();
    const err = scrim.querySelector('#createErr');
    if (name.length < 2) { err.style.display = 'block'; err.innerHTML = '⚠ Give Wario a name. Any name. Even "Cheapskate" works.'; return; }
    if (pin.length < 4) { err.style.display = 'block'; err.innerHTML = '⚠ PIN needs 4+ characters.'; return; }
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') || 'customer_' + Date.now();
    const custom = loadCustomWallets();
    if (!custom[id]) {
      custom[id] = { name, currencies: { gold: 100 }, created: Date.now() };
      localStorage.setItem(CUSTOM_WALLETS_KEY, JSON.stringify(custom));
    }
    ACCOUNTS = buildAccounts();
    signIn(id);
    closeModal();
    enterStore();
  });
}

/* --------------------------------------------------------------------------
   BOOT
   -------------------------------------------------------------------------- */

function enterStore() {
  document.getElementById('gate').hidden = true;
  document.getElementById('store').hidden = false;
  applyDeepLink();
  render();
  /* warm the reviewed-rules catalog in the background so PDP pages show
     full effect rules instead of heuristic text once it lands */
  ensureEffectCatalog();
  toast('Welcome back to <b>Warizon</b> — everything must go (into Wario\'s vault).');
}

function applyDeepLink() {
  const hash = decodeURIComponent(location.hash || '');
  const m = hash.match(/vendor=([^&]+)/i);
  if (m) {
    const wanted = m[1].replace(/_/g, ' ').toLowerCase();
    const match = TOP_VENDORS.find(([n]) => n.toLowerCase() === wanted) ||
                  Object.keys(vendorCounts).find(n => n.toLowerCase() === wanted);
    resetFilters();
    S.q = ''; S.dept = 'all';
    S.vendors = new Set(match ? [match[0] || match] : []);
    if (!match) S.q = m[1].replace(/_/g, ' ');   // unknown vendor id → fall back to text search
    S.view = 'results';
  } else {
    S.view = 'home';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const gate = document.getElementById('gate');
  const store = document.getElementById('store');

  /* --- GLOBAL CLICK DELEGATION (store) --- */
  document.body.addEventListener('click', e => {
    const t = e.target;
    const open = t.closest('[data-open]');
    if (open) { openPdp(open.dataset.open); return; }
    const add = t.closest('[data-add]');
    if (add) { addToCart(add.dataset.add); return; }

    if (t.closest('[data-go-deals]')) {
      resetFilters(); S.q = ''; S.dept = 'all'; S.sort = 'featured';
      /* deals = anything with a deal flag → emulate via sorted search */
      S.view = 'results'; render(); return;
    }
    const godept = t.closest('[data-go-dept]');
    if (godept) { resetFilters(); S.q = ''; S.dept = godept.dataset.goDept; S.view = 'results'; render(); return; }
    if (t.closest('[data-go-shop]')) { goTo('home'); return; }
    if (t.closest('[data-go-craft]')) { CRAFT_STATE.shown = 60; goTo('crafting'); return; }

    const buyAgain = t.closest('[data-buy-again]');
    if (buyAgain) { addToCart(buyAgain.dataset.buyAgain); openCart(); return; }
    if (t.closest('[data-no-refund]')) { sfx('wah'); toast('WAH HA HA! <b>No refunds!</b> Warizon return policy, page 1 of 1.'); return; }
    if (t.closest('[data-no-review]')) { toast('Your five stars are appreciated in advance. Wario accepts praise and gold only.'); return; }

    /* filters */
    const deptBtn = t.closest('[data-dept]');
    if (deptBtn) { S.dept = deptBtn.dataset.dept; S.page = 1; render(); return; }
    const bucketBtn = t.closest('[data-bucket]');
    if (bucketBtn) { S.bucket = Number(bucketBtn.dataset.bucket); S.page = 1; render(); return; }
    const starsBtn = t.closest('[data-stars]');
    if (starsBtn) { S.minStars = S.minStars === Number(starsBtn.dataset.stars) ? 0 : Number(starsBtn.dataset.stars); S.page = 1; render(); return; }
    const pageBtn = t.closest('[data-page]');
    if (pageBtn && !pageBtn.disabled) {
      S.page = Number(pageBtn.dataset.page); render();
      document.getElementById('view')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    /* filters mobile toggle */
    if (t.closest('#filtersToggle')) {
      document.getElementById('sideFilters')?.classList.toggle('mobile-open'); return;
    }

    /* cart */
    if (t.closest('#navCart')) { openCart(); return; }
    if (t.closest('[data-cart-close]')) { closeCart(); return; }
    const qd = t.closest('[data-qty-dec]');
    if (qd) {
      const rows = getCart();
      const row = rows.find(r => r.id === qd.dataset.qtyDec);
      if (row) { row.qty -= 1; if (row.qty <= 0) rows.splice(rows.indexOf(row), 1); saveCart(rows); renderCartDrawer(); }
      return;
    }
    const qi = t.closest('[data-qty-inc]');
    if (qi) {
      const rows = getCart();
      const row = rows.find(r => r.id === qi.dataset.qtyInc);
      const it = ITEM_BY_ID.get(qi.dataset.qtyInc);
      if (row && it && row.qty < Math.min(it.stock, 999)) { row.qty += 1; saveCart(rows); renderCartDrawer(); }
      else if (it) toast(`Only <b>${fmt(it.stock)}</b> in stock — Wario keeps the rest for himself.`);
      return;
    }
    const del = t.closest('[data-cart-del]');
    if (del) { saveCart(getCart().filter(r => r.id !== del.dataset.cartDel)); renderCartDrawer(); return; }
    if (t.closest('[data-goto-checkout]')) { openCheckout(); return; }

    /* pdp buttons */
    const pdpAdd = t.closest('[data-pdp-add]');
    if (pdpAdd) {
      const qty = Number(document.getElementById('pdpQty')?.value || 1);
      if (addToCart(pdpAdd.dataset.pdpAdd, qty)) { closeModal(); openCart(); }
      return;
    }
    const pdpBuy = t.closest('[data-pdp-buy]');
    if (pdpBuy) {
      const qty = Number(document.getElementById('pdpQty')?.value || 1);
      const id = pdpBuy.dataset.pdpBuy;
      closeModal();
      /* Buy Now = dedicated checkout that doesn't touch the cart */
      buyNow(id, qty);
      return;
    }

    /* crumb / vendor links inside pdp */
    const crumbDept = t.closest('[data-crumb-dept]');
    if (crumbDept) { closeModal(); resetFilters(); S.dept = crumbDept.dataset.crumbDept; S.q = ''; goTo('results'); return; }
    if (t.closest('[data-crumb-goto]')) { closeModal(); goTo('home'); return; }
    const vendSearch = t.closest('[data-vendor-search]');
    if (vendSearch) {
      closeModal(); resetFilters(); S.q = ''; S.dept = 'all';
      const name = vendSearch.dataset.vendorSearch;
      if (TOP_VENDORS.some(([n]) => n === name)) S.vendors = new Set([name]); else S.q = name;
      goTo('results'); return;
    }
    const vendLink = t.closest('[data-vendor-link]');
    if (vendLink) {
      const name = vendLink.textContent.trim();
      if (TOP_VENDORS.some(([n]) => n === name)) { resetFilters(); S.vendors = new Set([name]); goTo('results'); }
      return;
    }

    /* crafting forge */
    if (t.closest('#subCrafting')) { CRAFT_STATE.q = ''; CRAFT_STATE.shown = 60; goTo('crafting'); return; }
    const ctab = t.closest('[data-craft-tab]');
    if (ctab) { CRAFT_STATE.tab = ctab.dataset.craftTab; CRAFT_STATE.shown = 60; render(); return; }
    if (t.closest('#craftMore')) { CRAFT_STATE.shown += 60; render(); return; }
    const cschool = t.closest('[data-craft-school]');
    if (cschool) { CRAFT_STATE.tab = 'recipes'; CRAFT_STATE.school = cschool.dataset.craftSchool; CRAFT_STATE.q = ''; CRAFT_STATE.shown = 60; render(); return; }
    const cbuy = t.closest('[data-craft-buy]');
    if (cbuy) { resetFilters(); S.q = cbuy.dataset.craftBuy; S.dept = 'all'; goTo('results'); toast(`Searching the warehouse for <b>${esc(cbuy.dataset.craftBuy)}</b>…`); return; }

    /* header */
    if (t.closest('#navLogo') || t.closest('#subHome')) { goTo('home'); return; }
    if (t.closest('#navOrders')) { goTo('orders'); return; }
    if (t.closest('#subDeals')) { resetFilters(); S.q = ''; S.dept = 'all'; S.sort = 'featured'; goTo('results', { keepPage: true }); return; }
    const subDept = t.closest('[data-sub-dept]');
    if (subDept) { resetFilters(); S.q = ''; S.dept = subDept.dataset.subDept; goTo('results'); return; }
    if (t.closest('#allDepartmentsBtn')) { openDrawer(); return; }
    if (t.closest('#backToTop')) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }

    /* drawer */
    const dDept = t.closest('[data-drawer-dept]');
    if (dDept) { closeDrawer(); resetFilters(); S.q = ''; S.dept = dDept.dataset.drawerDept; goTo('results'); return; }
    if (t.closest('[data-drawer-deals]')) { closeDrawer(); resetFilters(); S.q = ''; S.dept = 'all'; goTo('results'); return; }
    if (t.closest('[data-drawer-prime]')) { closeDrawer(); resetFilters(); S.q = ''; S.dept = 'premium'; goTo('results'); return; }
    if (t.closest('[data-drawer-crafting]')) { closeDrawer(); goTo('crafting'); return; }
    if (t.closest('[data-drawer-orders]')) { closeDrawer(); goTo('orders'); return; }
    if (t.closest('[data-drawer-cart]')) { closeDrawer(); openCart(); return; }
    if (t.closest('[data-drawer-account]')) { closeDrawer(); document.querySelector('.nav-acct-wrap')?.classList.toggle('open'); window.scrollTo({ top: 0 }); return; }
    if (t.closest('[data-drawer-nofaq]')) { closeDrawer(); toast('Customer service is closed. It has always been closed. Try the complaints box (it is a real box).'); return; }
    if (t.closest('[data-drawer-signout]')) { closeDrawer(); signOut(); return; }

    if (t.closest('#flyOrdersLink')) { goTo('orders'); return; }
    if (t.closest('#flySignOut')) { signOut(); return; }
    if (t.closest('#flyMembership')) { toast('<b>WahPrime: ACTIVE-ish.</b> Benefits include free delivery, priority hoarding, and one (1) yearly compliment from Wario.'); return; }
    if (t.closest('#navDeliver')) { toast('Your delivery address is set to <b>' + esc(document.getElementById('deliverAddr')?.textContent || 'Wario Land') + '</b>. Changing it costs 🪙5. Everything costs Wario 🪙5.'); return; }
    if (t.closest('[data-foot]')) { toast('That page is on Wario\'s desk. It has been there since 2019. WAH!'); return; }
    if (t.closest('#flySwitch')) {
      /* "switch account" = close session, back to gate */
      localStorage.removeItem(SESSION_KEY);
      document.getElementById('store').hidden = true;
      renderGate();
      document.getElementById('gate').hidden = false;
      window.scrollTo(0, 0);
      return;
    }
  });

  /* --- filter checkbox changes --- */
  document.body.addEventListener('change', e => {
    const t = e.target;
    if (t.matches('[data-rarity]')) {
      t.checked ? S.rarities.add(t.dataset.rarity) : S.rarities.delete(t.dataset.rarity);
      S.page = 1; render(); return;
    }
    if (t.matches('[data-vendor]')) {
      t.checked ? S.vendors.add(t.dataset.vendor) : S.vendors.delete(t.dataset.vendor);
      S.page = 1; render(); return;
    }
    if (t.matches('#fInStock')) { S.inStockOnly = t.checked; S.page = 1; render(); return; }
    if (t.matches('#sortSelect')) { S.sort = t.value; S.page = 1; render(); return; }
    if (t.matches('#payCurrencySelect')) {
      payCurrency = t.value;
      localStorage.setItem(PAY_KEY, payCurrency);
      render();
      toast(`Prices now shown in <b>${esc(coinIcon(payCurrency))} ${esc(currencyName(payCurrency))}</b> — converted at Waluipedia exchange rates.`);
      return;
    }
    if (t.matches('#craftSchool')) { CRAFT_STATE.school = t.value; CRAFT_STATE.shown = 60; render(); return; }
    if (t.matches('#craftCat')) { CRAFT_STATE.cat = t.value; CRAFT_STATE.shown = 60; render(); return; }
    if (t.matches('#searchScope')) return;
  });

  /* --- search submit --- */
  document.body.addEventListener('submit', e => {
    if (e.target.id === 'searchForm') {
      e.preventDefault();
      const q = document.getElementById('searchInput').value;
      const scope = document.getElementById('searchScope').value;
      resetFilters();
      S.q = q; S.dept = scope;
      goTo('results');
    }
    if (e.target.id === 'craftSearchForm') {
      e.preventDefault();
      CRAFT_STATE.q = document.getElementById('craftSearch').value;
      CRAFT_STATE.school = '';   // a search means "everywhere" — clear facet filters
      CRAFT_STATE.cat = '';
      CRAFT_STATE.shown = 60;
      render();
    }
  });

  /* --- Esc closes modals/drawers --- */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeCart(); closeDrawer(); }
  });

  /* --- LOGIN GATE: session required --- */
  if (getSession()) {
    gate.hidden = true;
    store.hidden = false;
    applyDeepLink();
    render();
    ensureEffectCatalog();   // warm reviewed rules in the background
  } else {
    store.hidden = true;       // storefront stays locked until sign-in
    gate.hidden = false;
    renderGate();
  }
});

/* --------------------------------------------------------------------------
   Buy Now helper — checkout a single item without touching the cart
   -------------------------------------------------------------------------- */
function buyNow(id, qty = 1) {
  const it = ITEM_BY_ID.get(id);
  if (!it) return;
  if (it.stock <= 0) { toast('<b>Out of stock.</b> Wario already sold it. To himself.'); return; }
  qty = Math.max(1, Math.min(qty, Math.min(it.stock, 10)));
  openCheckout([{ id, qty }]);
}
