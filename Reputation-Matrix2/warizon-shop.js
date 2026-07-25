/* ==========================================================================
   WARIZON — Wario's Everything Warehouse
   Amazon-inspired, login-gated storefront (redesigned from scratch)

   PHASE 3: rich item intel (inline effectDetails/rules shown verbatim),
   per-item multi-currency (native currency detected from vendor/keywords),
   purchase-order RECEIPTS (wallet is never charged — the DM is handed JSON),
   real order ledger (shop-purchases.json), department JSON, Ability Shop
   ("Training Wing") with AP receipts.
   ========================================================================== */

import { SHOP_ITEMS, VENDORS, SHIPPING_METHODS } from './shop-data.js';
import { WALLETS, CURRENCIES } from './currency.js';

/* --------------------------------------------------------------------------
   Constants & helpers
   -------------------------------------------------------------------------- */

const SESSION_KEY = 'warizon.session';
const CUSTOM_WALLETS_KEY = 'warizon.customWallets';
const CART_KEY = id => `warizon.cart.${id}`;
const RECEIPTS_KEY = id => `warizon.receipts.${id}`;
const AP_RECEIPTS_KEY = id => `warizon.apReceipts.${id}`;
const PAGE_SIZE = 24;

/** Static department metadata — the JSON in data/shop-departments.json is
    fetched on boot and MERGED over this (counts are always computed live). */
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
  { label: 'Under 💰100', min: 0, max: 100 },
  { label: '💰100 to 💰500', min: 100, max: 500 },
  { label: '💰500 to 💰1,000', min: 500, max: 1000 },
  { label: '💰1,000 to 💰5,000', min: 1000, max: 5000 },
  { label: '💰5,000 & Above', min: 5000, max: Infinity }
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
function fmtDec(n, d = 1) { return Number(n || 0).toLocaleString('en-US', { maximumFractionDigits: d }); }

function sfx(name) {
  try { const a = new Audio(`${name}.mp3`); a.volume = 0.45; a.play().catch(() => {}); } catch (_) {}
}

function deliveryLabel(seed, minDays = 1, spread = 5) {
  const days = minDays + Math.floor(hash01(seed + '|dlv') * spread);
  const d = new Date(Date.now() + days * 864e5);
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function prettifyVendorId(vid) {
  const s = String(vid || '').trim();
  if (!s) return '';
  return s.replace(/[_-]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

/* --------------------------------------------------------------------------
   MULTI-CURRENCY — every item gets a NATIVE currency (detected from its
   vendor first, then keywords in its id/name) plus a list of ACCEPTED
   currencies it can actually be bought with. Gold is accepted everywhere
   (it is the universal reserve of the Waluipedia ledger).
   -------------------------------------------------------------------------- */

const GOLD_FEE = 0.10;   // conversion fee when a currency is NOT natively accepted for shipping/tax

/** vendor id (lowered, underscores) → {cur, extra[]} */
const VENDOR_CURRENCY_RULES = [
  [/^wario(_|$)/,                    'wario_coin',      ['wario_points']],
  [/^diamond_city/,                  'wario_coin',      ['wario_points']],
  [/koopa|bowser/,                   'bowser_bux',      ['shell_credit']],
  [/^kremling/,                      'kremling_koin',   []],
  [/^(the_)?dk(_|$)|dk_isles/,       'banana_medallion',['coconut_bar']],
  [/^mushroom|^toad_town|^mushroom_regency/, 'mushroom_coin', []],
  [/^the_toad|^toad_council|^yoshi/, 'mushroom_coin',   []],
  [/^peach/,                         'peach_crown',     []],
  [/^liberated_toads|^faction_quartermaster/, 'toad_bond', ['relief_stamp']],
  [/^beanbean/,                      'beanbean_bean',   []],
  [/^regal_empire|^midlands?/,       'midland_ducat',   ['decree_strip', 'imperial_crown']],
  [/^empire_/,                       'imperial_crown',  ['midland_ducat']],
  [/^hyrule/,                        'rupee',           []],
  [/^teyvat|^liyue|^mondstadt/,      'mora',            []],
  [/^pokemon|^pokemart|^league_store|^team_|^trainer_guild|^go_rock|^ranger_union|^safari/, 'poke_dollar', []],
  [/^mages_guild|^arcane_|^wizard_/, 'arcane_shard',    ['guild_seal']],
  [/^plane_walkers/,                 'transit_stamp',   []],
  [/^comet_observatory|^cosmic_|^astral_|^starlight|^csto_|^zero_g|^orbit|^space_dock|^star_base|^starforge|^lunar/, 'astral_pearl', []],
  [/^millennium/,                    'data_chit',       ['kivotos_credit']],
  [/^kivotos|^gehenna|^abydos|^trinity_general|^shanhaijing|^red_winter|^general_student|^minerva/, 'kivotos_credit', []],
  [/^internet|^hacktivist|^polybius|^connectopia|^mind_net|^save_state|^pixel_|^cyber|^tech_bazaar|^glarnia/, 'credstick', []],
  [/^shadeward/,                     'shadow_obol',     ['index_token']],
  [/^shadow|^shadowfell/,            'shadow_obol',     []],
  [/^true_names|^infinite_library|^forgotten_library|^cosmic_archive|^eternal_chronicle/, 'index_token', []],
  [/^the_onyx|^onyx/,                'blood_vial',      ['vampire_marker']],
  [/^vampire|^oracula|^undead|^necropolis|^tomb_/, 'blood_vial', []],
  [/^skaven/,                        'warpstone',       []],
  [/^broker|^political_fixer|^insurance|^legal_|^freelancer/, 'broker_mark', []],
  [/^tea_leaf/,                      'tea_chit',        []],
  [/^avalon/,                        'court_leaf',      ['fey_acorn']],
  [/^fey|^feywild|^dream_/,          'fey_acorn',       ['court_leaf']],
  [/^rakasha/,                       'spirit_bead',     []],
  [/^kingdoms_dwarves|^dwarf_realms|^dwarven|^halfling/, 'dwarf_oathgold', []],
  [/^hell|^infernal|^demon|^war_demon|^chaos_dealer/, 'soul_coin', []],
  [/^crimson_fleet|^black_sugar|^crimision|^pirate|^sea_|^mariner|^sirsirian|^shipyard|^scylla|^oceanic/, 'doubloon', ['cargo_share']],
  [/^autumnwood|^weldrhom|^pitatia|^orchard/, 'autumn_leaf', []],
];

/** keyword found in item id + name → currency id (checked AFTER vendor rules) */
const KEYWORD_CURRENCY_RULES = [
  ['wario_coin', 'wario_coin'], ['wario coin', 'wario_coin'], ['warizon', 'wario_coin'],
  ['koopa', 'bowser_bux'], ['bowser', 'bowser_bux'],
  ['kremling', 'kremling_koin'],
  ['donkey kong', 'banana_medallion'], ['dk isles', 'banana_medallion'],
  ['mushroom coin', 'mushroom_coin'], ['toad town', 'mushroom_coin'], ['mushroom kingdom', 'mushroom_coin'],
  ['peach crown', 'peach_crown'], ['princess peach', 'peach_crown'],
  ['beanbean', 'beanbean_bean'],
  ['hyrule', 'rupee'], ['rupee', 'rupee'], ['hylian', 'rupee'],
  ['pokédollar', 'poke_dollar'], ['pokemon leag', 'poke_dollar'], ['pokémon leag', 'poke_dollar'],
  ['teyvat', 'mora'], ['liyue', 'mora'], ['mondstadt', 'mora'],
  ['kivotos', 'kivotos_credit'], ['gehenna', 'kivotos_credit'],
  ['millennium', 'data_chit'], ['data chit', 'data_chit'],
  ['soul coin', 'soul_coin'],
  ['warpstone', 'warpstone'], ['skaven', 'warpstone'],
  ['feywild', 'fey_acorn'], ['archfey', 'fey_acorn'],
  ['doubloon', 'doubloon'],
  ['arcane shard', 'arcane_shard'],
  ['regal empire', 'midland_ducat'], ['midland ducat', 'midland_ducat'],
];

function currencyBase(id) { return Number(CURRENCIES?.[id]?.base_value) || 1; }
function coinIcon(id) { return id === 'gold' ? '💰' : (CURRENCIES?.[id]?.icon || '🪙'); }
function currencyName(id) { return CURRENCIES?.[id]?.name || (id === 'gold' ? 'Gold Piece' : prettifyVendorId(id)); }

/** Whole native units of `goldAmount` in currency `id` (Wario always rounds UP). */
function amtIn(goldAmount, id) {
  if (id === 'gold') return Math.ceil(Number(goldAmount || 0));
  return Math.max(0, Math.ceil(Number(goldAmount || 0) / currencyBase(id)));
}

/** "🍄 1,234 Mushroom Coins" style label */
function curLabel(id, withName = false) {
  return `${coinIcon(id)}${withName ? ' ' + currencyName(id) : ''}`;
}

function detectNativeCurrency(raw) {
  const vend = String(raw.vendor || '').toLowerCase().replace(/[\s-]+/g, '_');
  for (const [rx, cur, extra] of VENDOR_CURRENCY_RULES) {
    if (rx.test(vend)) return { native: cur, extra: extra.slice(0, 2), via: 'vendor' };
  }
  const hay = `${raw.id || ''} ${raw.name || ''}`.toLowerCase();
  for (const [kw, cur] of KEYWORD_CURRENCY_RULES) {
    if (hay.includes(kw)) return { native: cur, extra: [], via: 'keyword' };
  }
  return { native: 'gold', extra: [], via: 'default' };
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
  const vendorLabel = vendor?.name || prettifyVendorId(vendorId) || 'Wario\'s Warehouse Direct';

  /* multi-currency: native currency + accepted list (gold always accepted) */
  const detected = detectNativeCurrency(raw);
  const accepted = [];
  const pushCur = c => { if (c && CURRENCIES?.[c] && !accepted.includes(c)) accepted.push(c); };
  pushCur(detected.native);
  detected.extra.forEach(pushCur);
  if (!accepted.includes('gold')) accepted.push('gold');

  return {
    id, idx,
    name: String(raw.name || id),
    desc: String(raw.description || ''),
    cat, price, rarity,
    icon: String(raw.icon || '📦'),
    stock: Number.isFinite(Number(raw.stock)) ? Number(raw.stock) : 0,
    effects: Array.isArray(raw.effects) ? raw.effects.map(String) : [],
    level: Number(raw.levelRequirement || 0) || 0,
    levelReason: raw.levelRequirementReason ? String(raw.levelRequirementReason) : '',
    warning: raw.warning ? String(raw.warning) : '',
    shippedBy: raw.shippedBy ? String(raw.shippedBy) : '',
    shippingDetail: raw.shippingDetail ? String(raw.shippingDetail) : '',
    vendorReason: raw.vendorReason ? String(raw.vendorReason) : '',
    priceReason: raw.priceReason ? String(raw.priceReason) : '',
    factionBonus: raw.factionBonus && typeof raw.factionBonus === 'object'
      ? Object.fromEntries(Object.entries(raw.factionBonus).map(([k, v]) => [String(k), Number(v) || 0]))
      : null,
    effectDetailsRaw: (Array.isArray(raw.effectDetails) ? raw.effectDetails : [])
      .map(d => ({ title: String(d?.title || ''), rules: String(d?.rules || '') }))
      .filter(d => d.title || d.rules),
    usageRaw: raw.usage && typeof raw.usage === 'object'
      ? ['activation', 'duration', 'endsWhen', 'charges'].reduce((u, k) => raw.usage[k] ? (u[k] = String(raw.usage[k]), u) : u, {})
      : null,
    vendorId, vendor, vendorLabel,
    nativeCur: detected.native, nativeVia: detected.via, accepted,
    rating, reviews, cents, prime, deal,
    search: `${id} ${raw.name || ''} ${raw.description || ''} ${raw.category || ''} ${rarity} ${vendorLabel} ${(raw.effects || []).join(' ')}`.toLowerCase(),
    featured: hash01(id + '|f') + rating / 10 + (deal ? 0.25 : 0)
  };
}

const ITEMS = Object.values(SHOP_ITEMS || {}).map(normalizeItem);
const ITEM_BY_ID = new Map(ITEMS.map(it => [it.id, it]));

const deptCounts = ITEMS.reduce((m, it) => (m[it.cat] = (m[it.cat] || 0) + 1, m), {});
const vendorCounts = ITEMS.reduce((m, it) => { m[it.vendorLabel] = (m[it.vendorLabel] || 0) + 1; return m; }, {});
const TOP_VENDORS = Object.entries(vendorCounts).sort((a, b) => b[1] - a[1]).slice(0, 8);

/* rarity facet derived from the catalog itself (mythic etc. included) */
const RARITY_ORDER = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic', 'unique', 'cosmic', 'godly', 'forbidden', 'wario_tier'];
const RARITIES = RARITY_ORDER.filter(r => ITEMS.some(it => it.rarity === r));

/* currency facet: how many items ACCEPT each currency */
const currencyCounts = ITEMS.reduce((m, it) => { it.accepted.forEach(c => (m[c] = (m[c] || 0) + 1)); return m; }, {});
const TOP_CURRENCIES = Object.entries(currencyCounts)
  .sort((a, b) => (a[0] === 'gold' ? -1 : b[0] === 'gold' ? 1 : b[1] - a[1]))
  .slice(0, 9);

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

function currentAccount() { return accountById(getSession()?.id); }

function walletHeld(acc, cid) { return Number(acc?.currencies?.[cid] || 0); }

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
   Departments JSON (backs the sidebar facet + search scope).
   Fetched lazily; merged over the static DEPARTMENTS metadata.
   -------------------------------------------------------------------------- */

let deptMetaLoaded = false;
function ensureDeptMeta() {
  if (deptMetaLoaded || typeof fetch !== 'function') return;
  deptMetaLoaded = true;
  fetch('data/shop-departments.json')
    .then(r => (r.ok ? r.json() : null))
    .then(j => {
      (j?.departments || []).forEach(d => {
        if (DEPARTMENTS[d.id]) {
          if (d.label) DEPARTMENTS[d.id].label = d.label;
          if (d.icon) DEPARTMENTS[d.id].icon = d.icon;
          if (d.tagline) DEPARTMENTS[d.id].tagline = d.tagline;
        }
      });
      if (S.view === 'home' || S.view === 'results') render();
    })
    .catch(() => {});
}

/* --------------------------------------------------------------------------
   REVIEWED EFFECT RULES — the item files themselves carry inline
   `effectDetails: [{title, rules}]` written by the AI review pipeline, which
   is the authoritative text. The slim catalog (data/shop-effect-details-
   slim.json) only SUPPLEMENTS effects that have titles but no inline rules.
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
      /* catalog landed while a PDP is open → re-open it so rules upgrade */
      const openId = document.getElementById('wzModal')?._wzItemId;
      if (openId && ITEM_BY_ID.has(openId)) { closeModal(); openPdp(openId); }
    })
    .catch(() => { effectCatalog = {}; });
  return effectCatalog;
}

/** Heuristic plain-English rules for effects with no reviewed text at all. */
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
  return `Exact mechanics are set by the DM at the table; the effect ends when its duration expires, its charges are spent, or the item is destroyed — not automatically when the scene changes.`;
}

const normTitle = s => String(s || '').trim().toLowerCase();

/**
 * Resolved effect rows for an item: [{title, rules, source:'reviewed'|'heuristic'}]
 * INLINE effectDetails WIN — they were written for this exact item. The slim
 * catalog only supplies rules for effect titles the inline data left bare.
 */
function effectRowsFor(item) {
  const rows = [];
  const inline = item.effectDetailsRaw || [];
  const inlineByTitle = new Map(inline.map(d => [normTitle(d.title), d]));
  const cat = effectCatalog?.[item.id] || null;
  const catDet = cat?.effectDetails || [];

  const names = item.effects.length ? item.effects : inline.map(d => d.title).filter(Boolean);
  const used = new Set();

  names.forEach((title, i) => {
    /* 1) inline detail matching the effect title (or sitting at the same index) */
    let det = inlineByTitle.get(normTitle(title)) || null;
    if (!det && inline[i] && !used.has(inline[i]) && !item.effects.length) det = inline[i];
    if (!det && inline[i] && normTitle(inline[i].title) === normTitle(title)) det = inline[i];
    if (det && det.rules) {
      used.add(det);
      rows.push({ title: det.title || title, rules: det.rules, source: 'reviewed' });
      return;
    }
    /* 2) reviewed catalog supplement */
    const cd = catDet.find(d => normTitle(d.title) === normTitle(title)) || catDet[i] || null;
    if (cd?.rules) {
      rows.push({ title: cd.title || title, rules: cd.rules, source: 'reviewed' });
      return;
    }
    /* 3) heuristic fallback */
    rows.push({ title, rules: det?.rules || heuristicRules(title), source: det?.rules ? 'reviewed' : 'heuristic' });
    if (det) used.add(det);
  });

  /* leftover inline details not referenced by the effects list */
  inline.forEach(d => { if (!used.has(d) && d.rules) rows.push({ title: d.title, rules: d.rules, source: 'reviewed' }); });
  return rows;
}

function usageFor(item) {
  const cat = effectCatalog?.[item.id] || null;
  return item.usageRaw || cat?.usage || null;
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
   ABILITY SHOP ("Training Wing") — data/abilityShop.json + abilityPoints.json
   Abilities unlock with Ability Points; the shop issues a RECEIPT, it never
   edits a character sheet (per data/abilityPoints.json meta).
   -------------------------------------------------------------------------- */

let AB = null;         // { shop, points }
let abLoading = false;
function ensureAbilities() {
  if (AB || abLoading || typeof fetch !== 'function') return;
  abLoading = true;
  Promise.all([
    fetch('data/abilityShop.json').then(r => (r.ok ? r.json() : null)).catch(() => null),
    fetch('data/abilityPoints.json').then(r => (r.ok ? r.json() : null)).catch(() => null)
  ]).then(([shop, points]) => {
    AB = { shop: shop || { abilities: [], types: {}, classes: {} }, points: points || { players: {}, costTiers: [] } };
    abLoading = false;
    if (S.view === 'abilities') render();
  });
}

const AB_STATE = { q: '', type: '', cls: '', onlyUnlock: false, shown: 60 };

function apCostFor(level) {
  const tiers = AB?.points?.costTiers?.length ? AB.points.costTiers
    : [{ maxLevel: 3, ap: 1 }, { maxLevel: 7, ap: 2 }, { maxLevel: 11, ap: 3 }, { maxLevel: 99, ap: 5 }];
  const t = tiers.find(x => Number(level) <= Number(x.maxLevel));
  return t ? Number(t.ap) : 5;
}

function apPlayerFor(acc = currentAccount()) {
  const players = AB?.points?.players || {};
  for (const id of acc?.ids || []) if (players[id]) return { key: id, ...players[id] };
  return null;
}

function getApReceipts() {
  const s = getSession(); if (!s) return [];
  try { return JSON.parse(localStorage.getItem(AP_RECEIPTS_KEY(s.id)) || '[]'); } catch (_) { return []; }
}
function saveApReceipts(list) {
  const s = getSession(); if (!s) return;
  localStorage.setItem(AP_RECEIPTS_KEY(s.id), JSON.stringify(list));
}
function apReserved() { return getApReceipts().reduce((n, r) => n + Number(r.apCost || 0), 0); }

/* --------------------------------------------------------------------------
   ORDER LEDGER (shop-purchases.json — paid/approved purchases) +
   PENDING RECEIPTS (localStorage — generated by checkout, paid to the DM)
   -------------------------------------------------------------------------- */

let LEDGER = null;     // raw shop-purchases.json array
let ledgerLoading = false;
function ensureLedger() {
  if (LEDGER || ledgerLoading || typeof fetch !== 'function') return;
  ledgerLoading = true;
  fetch('shop-purchases.json')
    .then(r => (r.ok ? r.json() : []))
    .then(j => { LEDGER = Array.isArray(j) ? j : []; ledgerLoading = false; if (S.view === 'orders') render(); })
    .catch(() => { LEDGER = []; ledgerLoading = false; if (S.view === 'orders') render(); });
}

/** Ledger orders owned by the signed-in account (matched on wallet ids). */
function ledgerOrdersFor(acc = currentAccount()) {
  const owned = new Set(acc?.ids || []);
  return (LEDGER || []).filter(o => owned.has(String(o.playerKey || '')));
}

function getReceipts() {
  const s = getSession(); if (!s) return [];
  try {
    return (JSON.parse(localStorage.getItem(RECEIPTS_KEY(s.id)) || '[]') || [])
      .filter(r => r && r.no);
  } catch (_) { return []; }
}
function saveReceipts(list) {
  const s = getSession(); if (!s) return;
  localStorage.setItem(RECEIPTS_KEY(s.id), JSON.stringify(list));
}

/* --------------------------------------------------------------------------
   Cart (per-account, localStorage)
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
   Price / stars / glance renderers
   -------------------------------------------------------------------------- */

function starsHtml(rating, extraClass = '') {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  const full = '★★★★★';
  return `<span class="stars outline ${extraClass}"><span class="stars-bg">${full}</span><span class="stars-fg" style="width:${pct}%">${full}</span></span>`;
}

/** Amazon-style price widget in the item's NATIVE currency. */
function priceWidget(it, cur = null, { compact = false } = {}) {
  const c = cur || it.nativeCur;
  const gold = it.price;
  return `<span class="p-price">
    <span class="sym">${coinIcon(c)}</span><span class="whole">${fmt(amtIn(gold, c))}</span><span class="frac">${c === 'gold' ? '' : `<small class="p-curname">${esc(currencyName(c))}</small>`}</span>
    ${it.deal ? `<span class="off">-${it.deal.off}%</span>` : ''}
  </span>
  ${it.deal ? `<div class="p-was">List: <s>${coinIcon(c)}${fmt(amtIn(it.deal.was, c))}</s></div>` : ''}
  ${c !== 'gold' && !compact ? `<div class="p-gold-eq">≈ 💰${fmt(gold)} gold</div>` : ''}`;
}

/** "Also accepts 💰 🟡 🍄" line shown under prices. */
function acceptsHtml(it, active = null) {
  if (it.accepted.length <= 1) return '';
  const coins = it.accepted.map(c =>
    `<span class="acc-coin ${c === (active || it.nativeCur) ? 'on' : ''}" title="${esc(currencyName(c))} — 1 ${esc(c)} = ${currencyBase(c)} gold">${coinIcon(c)}</span>`).join('');
  return `<span class="p-accepts" title="This vendor accepts ${it.accepted.map(currencyName).join(', ')}">accepts ${coins}</span>`;
}

/* shorten usage strings for at-a-glance chips */
function shortUse(v, max = 26) {
  const s = String(v || '').replace(/\.$/, '');
  return s.length > max ? s.slice(0, max - 1).trimEnd() + '…' : s;
}

/** at-a-glance chips: ⚡ activation · ⏳ duration · 🔢 charges · Lv · faction */
function glanceChips(it, { max = 3 } = {}) {
  const u = usageFor(it);
  const chips = [];
  if (u?.activation) chips.push(`<span class="gl-chip" title="Activation: ${esc(u.activation)}">⚡ ${esc(shortUse(u.activation, 20))}</span>`);
  if (u?.duration) chips.push(`<span class="gl-chip" title="Duration: ${esc(u.duration)}">⏳ ${esc(shortUse(u.duration, 18))}</span>`);
  if (u?.charges) chips.push(`<span class="gl-chip" title="Charges: ${esc(u.charges)}">🔢 ${esc(shortUse(u.charges, 18))}</span>`);
  if (it.level) chips.push(`<span class="gl-chip gl-lv" title="${esc(it.levelReason || 'Minimum character level')}">🎖 Lv ${it.level}+</span>`);
  if (it.factionBonus) {
    const txt = Object.entries(it.factionBonus).map(([k, v]) => `+${v} ${k}`).join(', ');
    chips.push(`<span class="gl-chip gl-fac" title="Faction bonus: ${esc(txt)}">🚩 ${esc(shortUse(txt, 18))}</span>`);
  }
  if (!chips.length) return '';
  return `<div class="p-glance">${chips.slice(0, max).join('')}</div>`;
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
  view: 'home',            // 'home' | 'results' | 'orders' | 'crafting' | 'abilities'
  q: '', dept: 'all', page: 1, sort: 'featured',
  bucket: -1, minStars: 0, rarities: new Set(), vendors: new Set(), currencies: new Set(),
  inStockOnly: false
};

function resetFilters() {
  S.page = 1; S.bucket = -1; S.minStars = 0;
  S.rarities = new Set(); S.vendors = new Set(); S.currencies = new Set(); S.inStockOnly = false;
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
  if (S.vendors.size) list = list.filter(it => S.vendors.has(it.vendorLabel));
  if (S.currencies.size) list = list.filter(it => it.accepted.some(c => S.currencies.has(c)));
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
  const nameEl = document.getElementById('acctName');
  if (nameEl) nameEl.textContent = acc ? acc.name.split(' ')[0] : 'sign in';
  const deliver = document.getElementById('deliverTo');
  if (deliver && acc) deliver.textContent = `Deliver to ${acc.name.split(' ')[0]}`;
  const addr = document.getElementById('deliverAddr');
  if (addr && acc) addr.textContent = FREE_ADDRESSES[Math.floor(hash01(acc.name) * FREE_ADDRESSES.length)];

  /* account flyout wallet — live Waluipedia ledger balances, every currency */
  const w = document.getElementById('acctWallet');
  if (w && acc) {
    const coins = Object.entries(acc.currencies)
      .filter(([, v]) => v > 0)
      .sort((a, b) => currencyBase(b[0]) * b[1] - currencyBase(a[0]) * a[1])
      .slice(0, 10)
      .map(([cid, v]) => {
        const gold = Number(v) * currencyBase(cid);
        return `<span class="acct-coin" title="≈ ${fmtDec(gold, 2)} gold value">${esc(coinIcon(cid))} ${fmt(v)} ${esc(currencyName(cid))}</span>`;
      }).join('');
    w.innerHTML = coins || '<span class="acct-coin">💰 0 — empty pockets</span>';
  }

  /* total buying power */
  const paySlot = document.getElementById('acctPaySlot');
  if (paySlot && acc) {
    const totalGold = Object.entries(acc.currencies)
      .reduce((s, [cid, v]) => s + currencyBase(cid) * Number(v || 0), 0);
    paySlot.innerHTML = `<div class="pay-label">💳 Total buying power ≈ <b>💰${fmtDec(totalGold, 1)} gold</b>
      <small>Prices are set by each vendor — many items accept local coins, not just gold. The store never charges this wallet directly: checkout issues a purchase order you settle with the DM.</small></div>`;
  }

  const flyName = document.getElementById('flyHello');
  if (flyName && acc) flyName.textContent = `Hello, ${acc.name.split(' ')[0]}`;
  updateCartBadge();
}

/* --------------------------------------------------------------------------
   RENDER: HOME
   -------------------------------------------------------------------------- */

function miniCard(it) {
  const c = it.nativeCur;
  return `<div class="mini-card" data-open="${esc(it.id)}">
    ${it.deal ? `<span class="deal-flag">${it.deal.off}% off</span>` : ''}
    <div class="mc-img">${esc(it.icon)}</div>
    <div class="mc-title">${esc(it.name)}</div>
    <div>${starsHtml(it.rating)} <span style="font-size:11px;color:var(--wz-link)">${fmt(it.reviews)}</span></div>
    <div class="mc-price">${coinIcon(c)}${fmt(amtIn(it.price, c))}<span class="cents">${it.cents}</span></div>
    ${it.deal ? `<div class="mc-was">Was <s>${coinIcon(c)}${fmt(amtIn(it.deal.was, c))}</s> · Limited-time deal</div>` : ''}
    ${c !== 'gold' ? `<div class="mc-was">≈ 💰${fmt(it.price)} gold</div>` : ''}
    ${it.prime ? '<div><span class="wahprime">wahprime</span></div>' : ''}
  </div>`;
}

function renderHome() {
  const deals = ITEMS.filter(it => it.deal).sort((a, b) => (b.deal.off - a.deal.off) || (b.featured - a.featured)).slice(0, 20);
  const bestEquip = ITEMS.filter(it => it.cat === 'equipment').sort((a, b) => b.reviews - a.reviews).slice(0, 18);
  const acc = getSession();
  const seed = acc ? acc.id : 'guest';
  const recs = [...ITEMS].sort((a, b) => hash01(seed + b.id) - hash01(seed + a.id)).slice(0, 18);
  const treasures = ITEMS.filter(it => ['legendary', 'mythic', 'godly', 'wario_tier'].includes(it.rarity)).sort((a, b) => b.price - a.price).slice(0, 16);
  const exotics = ITEMS.filter(it => it.nativeCur !== 'gold').sort((a, b) => b.featured - a.featured).slice(0, 18);

  return `
  <section class="hero">
    <div class="hero-inner">
      <h1>The Everything Warehouse.<br><span class="gold">Low prices. No refunds. WAH!</span></h1>
      <p>${fmt(ITEMS.length)} priceless treasures, questionable relics, and garlic-infused bargains — priced in <b>${TOP_CURRENCIES.length - 1}+ currencies</b>, all hoarded by Wario himself. Sign-in customers only. Window shoppers get NOTHING.</p>
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
      <a class="row-more" data-go-currency="1">Shop multi-currency treasures</a>
      <h2>💱 Priced in Exotic Coin</h2>
      <div class="row-sub">Kremling Koins, Beanbean Beans, Bowser Bux — vendors take more than gold here</div>
      <div class="carousel">${exotics.map(miniCard).join('')}</div>
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

    <section class="row-card cf-teaser" id="abilityTeaser">
      <a class="row-more" data-go-abilities="1">Enter the Training Wing →</a>
      <h2>⚡ Wario's Training Wing — Ability Shop</h2>
      <div class="row-sub">Unlock abilities with Ability Points earned by levelling — Wario is FURIOUS they are not priced in gold</div>
      <div class="cf-teaser-body"><span class="cf-teaser-stat">⚡ <b>84</b> abilities</span><span class="cf-teaser-stat">🎓 <b>11</b> classes</span><span class="cf-teaser-stat">🪙 <b>0</b> gold accepted (AP only)</span><button class="btn-add" data-go-abilities="1" style="max-width:220px">Browse abilities</button></div>
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

  const currencyChecks = TOP_CURRENCIES.map(([cid, cnt]) =>
    `<label class="f-check"><input type="checkbox" data-currency="${esc(cid)}" ${S.currencies.has(cid) ? 'checked' : ''}> ${coinIcon(cid)} ${esc(currencyName(cid))} <span class="cnt" style="color:var(--wz-muted)">(${fmt(cnt)})</span></label>`).join('<br>');

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
    <h3>Payable With</h3><div>${currencyChecks}</div>
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
  /* effect titles straight from the item's own reviewed data */
  const fx = effectRowsFor(it).map(r => r.title);
  const fxLine = fx.length
    ? `<div class="p-fx" data-open="${esc(it.id)}" title="Effects: ${esc(fx.join(' · '))}">✨ <b>${fx.length}</b> effect${fx.length === 1 ? '' : 's'}: ${esc(shortUse(fx.slice(0, 2).join(', '), 74))}${fx.length > 2 ? ` +${fx.length - 2} more` : ''} <span class="p-fx-more">see rules</span></div>`
    : '';
  return `<article class="p-card">
    ${it.deal ? `<span class="deal-flag">Limited-time deal</span>` : ''}
    <div class="p-img" data-open="${esc(it.id)}" title="${esc(it.name)}">${esc(it.icon)}</div>
    <div class="p-title" data-open="${esc(it.id)}">${esc(it.name)}</div>
    <div class="p-rating">${starsHtml(it.rating)} <span style="color:#de7921" aria-hidden="true">▾</span> <span class="r-count">${fmt(it.reviews)}</span></div>
    ${priceWidget(it)}
    <div class="p-accepts-row">${acceptsHtml(it)}</div>
    ${shipLine(it)}
    ${stockLine(it)}
    ${glanceChips(it)}
    ${fxLine}
    <div class="p-vendor">Sold by <a data-vendor-link="1">${esc(it.vendorLabel)}</a> · <span class="rarity-chip rarity-${esc(it.rarity)}" style="font-size:9px">${esc(it.rarity.replace('_', ' '))}</span></div>
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
   RENDER: ORDERS — pending receipts (yours) + paid ledger (shop-purchases.json)
   -------------------------------------------------------------------------- */

function receiptJsonText(r) {
  return JSON.stringify(r.entries, null, 2);
}

function pendingReceiptCard(r) {
  const tenderLines = Object.entries(r.tender || {})
    .map(([cid, amt]) => `${coinIcon(cid)} <b>${fmt(amt)}</b> ${esc(currencyName(cid))}`).join(' &nbsp;+&nbsp; ');
  return `<div class="order-card oc-pending">
    <div class="oc-head">
      <div>ORDER PLACED <b>${esc(new Date(r.ts).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }))}</b></div>
      <div>TOTAL <b>💰${fmt(r.totalGold)}</b></div>
      <div>SHIP TO <b>${esc(r.shipTo)}</b></div>
      <div class="oc-status">STATUS <b class="badge-pending">⏳ AWAITING PAYMENT</b></div>
      <div style="margin-left:auto">ORDER # <b>${esc(r.no)}</b></div>
    </div>
    <div class="oc-body">
      <div class="oc-banner">🧾 <b>This is a purchase order, not a charge.</b> Nothing left your wallet. Pay the DM the amounts below; the DM pastes the JSON into <code>shop-purchases.json</code> and marks it approved.</div>
      ${r.items.map(row => {
        const it = ITEM_BY_ID.get(row.id); if (!it) return '';
        return `<div class="oc-item">
          <div class="ci-img">${esc(it.icon)}</div>
          <div>
            <a data-open="${esc(it.id)}" style="font-size:14px">${esc(it.name)}</a>
            <div style="color:var(--wz-muted);font-size:12px">Qty: ${row.qty} · ${coinIcon(row.cur)}${fmt(amtIn(it.price, row.cur))} each (${esc(currencyName(row.cur))}) · ≈ 💰${fmt(it.price)} gold</div>
          </div>
          <div class="oc-actions">
            <button class="btn-plain" data-buy-again="${esc(it.id)}">Buy it again</button>
            <button class="btn-plain" data-no-refund="1">Return items</button>
          </div>
        </div>`;
      }).join('')}
      <div class="oc-tender"><b>You owe the DM:</b> ${tenderLines || '—'}
        <span style="color:var(--wz-muted)">(${esc(r.ship)} — arriving ${esc(r.eta)})</span></div>
      <details class="oc-json"><summary>📋 Receipt JSON for the DM (${r.entries.length} entr${r.entries.length === 1 ? 'y' : 'ies'})</summary>
        <textarea readonly rows="${Math.min(14, 3 + r.entries.length * 9)}">${esc(receiptJsonText(r))}</textarea>
        <button class="btn-plain" data-copy-receipt="${esc(r.no)}">Copy JSON</button>
        <button class="btn-plain" data-cancel-receipt="${esc(r.no)}">Cancel purchase order</button>
      </details>
    </div>
  </div>`;
}

function ledgerOrderCard(o) {
  const it = ITEM_BY_ID.get(o.itemId);
  const when = o.approvedAt ? new Date(o.approvedAt) : null;
  return `<div class="order-card oc-paid">
    <div class="oc-head">
      <div>ORDER PLACED <b>${when ? esc(when.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })) : '—'}</b></div>
      <div>TOTAL <b>💰${fmt(o.price)}</b></div>
      <div>SHIP TO <b>${esc(currentAccount()?.name?.split(' ')[0] || o.playerKey)}</b></div>
      <div class="oc-status">STATUS <b class="badge-paid">✔ PAID${o.approvedBy ? ' · ' + esc(o.approvedBy) : ''}</b></div>
      <div style="margin-left:auto">ORDER # <b>${esc(o.orderId)}</b></div>
    </div>
    <div class="oc-body">
      <div style="font-weight:700;color:#007600;margin-bottom:6px">✔ Approved by the DM and on the ledger. Enjoy the loot.</div>
      <div class="oc-item">
        <div class="ci-img">${esc(it?.icon || '📦')}</div>
        <div>
          ${it ? `<a data-open="${esc(it.id)}" style="font-size:14px">${esc(it.name)}</a>` : `<b>${esc(o.itemName || o.itemId)}</b>`}
          <div style="color:var(--wz-muted);font-size:12px">${esc(o.itemId)}${o.isFaction ? ' · 🚩 faction order' : ''} · 💰${fmt(o.price)} gold</div>
        </div>
        ${it ? `<div class="oc-actions"><button class="btn-plain" data-buy-again="${esc(it.id)}">Buy it again</button></div>` : '<div></div>'}
      </div>
    </div>
  </div>`;
}

function renderOrders() {
  ensureLedger();
  const acc = currentAccount();
  const receipts = getReceipts().slice().reverse();
  const ledger = ledgerOrdersFor(acc).slice().sort((a, b) => String(b.approvedAt || '').localeCompare(String(a.approvedAt || '')));
  const totalCount = receipts.length + ledger.length;

  return `
  <div class="wz-container" style="max-width:1080px">
    <h1 class="page-title">Your Orders</h1>
    <div style="color:var(--wz-muted);margin-bottom:10px">${totalCount ? `${receipts.length} awaiting payment · ${ledger.length} on the ledger` : ''}</div>
    <div class="orders-list">
      ${receipts.map(pendingReceiptCard).join('')}
      ${LEDGER === null ? `<div class="oc-banner" style="margin:12px 0">📜 Loading the purchase ledger…</div>` : ''}
      ${ledger.map(ledgerOrderCard).join('')}
      ${totalCount === 0 && LEDGER !== null ? `<div class="empty-results"><div class="big">📦</div><h2>No orders yet</h2><p>Nothing on the ledger for this account, and no pending receipts. Wario is waiting. His vault is not going to fill itself.</p><a data-go-shop="1">Start shopping →</a></div>` : ''}
    </div>
  </div>`;
}

/* --------------------------------------------------------------------------
   RENDER: ability shop ("Training Wing")
   -------------------------------------------------------------------------- */

function abilityCard(a, ctx) {
  const t = AB.shop?.types?.[a.type] || {};
  const cost = apCostFor(a.level);
  const known = ctx.knownSet.has(a.id);
  const pending = ctx.pendingSet.has(a.id);
  let btn;
  if (!ctx.player) {
    btn = `<button class="btn-add" disabled title="This account has no entry in data/abilityPoints.json">No AP ledger</button>`;
  } else if (known) {
    btn = `<button class="btn-add" disabled>✓ Known</button>`;
  } else if (pending) {
    btn = `<button class="btn-add" disabled>⏳ Requested</button>`;
  } else {
    const canLevel = ctx.player.level >= a.level;
    const canAp = ctx.apLeft >= cost;
    btn = `<button class="btn-add" data-ap-unlock="${esc(a.id)}" ${canLevel && canAp ? '' : 'disabled'}>
      Unlock — ${cost} AP${!canLevel ? ` (needs Lv ${a.level})` : !canAp ? ' (not enough AP)' : ''}</button>`;
  }
  const knownBy = (a.knownBy || []).slice(0, 3).map(k => esc(k.name)).join(', ');
  return `<article class="ab-card" style="--ab-c:${esc(a.accent || t.accent || '#7a8a99')}">
    <div class="ab-top">
      <span class="ab-ic">${esc(a.icon || t.icon || '⚡')}</span>
      <div class="ab-id">
        <h4>${esc(a.name)}</h4>
        <div class="ab-meta">
          <span class="ab-type">${esc(t.icon || '')} ${esc(a.typeLabel || t.label || a.type)}</span>
          <span class="ab-class">${esc(a.className || a.class)}</span>
          ${a.exclusivity === 'sole' ? '<span class="ab-excl">signature</span>' : ''}
        </div>
      </div>
      <div class="ab-cost"><b>${cost}</b><span>AP</span><small>Lv ${a.level}+</small></div>
    </div>
    <p class="ab-desc">${esc(a.description || '')}</p>
    ${knownBy ? `<div class="ab-known">📖 Known by: ${knownBy}${(a.knownBy || []).length > 3 ? ` +${a.knownBy.length - 3}` : ''}</div>` : '<div class="ab-known" style="opacity:.55">Nobody knows this yet. Be the first.</div>'}
    <div class="ab-actions">${btn}</div>
  </article>`;
}

function renderAbilities() {
  ensureAbilities();
  if (!AB) {
    return `<div class="wz-container"><div class="empty-results" style="margin-top:20px">
      <div class="big">⚡</div><h2>Opening the Training Wing…</h2><p>Wario is oiling the training dummies. One moment.</p></div></div>`;
  }
  const acc = currentAccount();
  const player = apPlayerFor(acc);
  const receipts = getApReceipts();
  const pendingSet = new Set(receipts.map(r => r.abilityId));
  const knownSet = new Set(player?.known || []);
  const apLeft = player ? Math.max(0, Number(player.apAvailable || 0) - apReserved()) : 0;
  const ctx = { player, pendingSet, knownSet, apLeft };

  const abilities = AB.shop?.abilities || [];
  const types = AB.shop?.types || {};
  const classes = AB.shop?.classes || {};

  const terms = AB_STATE.q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  let rows = abilities;
  if (AB_STATE.type) rows = rows.filter(a => a.type === AB_STATE.type);
  if (AB_STATE.cls) rows = rows.filter(a => a.class === AB_STATE.cls);
  if (terms.length) rows = rows.filter(a => terms.every(t =>
    `${a.name} ${a.description} ${a.className} ${a.typeLabel}`.toLowerCase().includes(t)));
  if (AB_STATE.onlyUnlock && player) rows = rows.filter(a =>
    !knownSet.has(a.id) && !pendingSet.has(a.id) && player.level >= a.level && apLeft >= apCostFor(a.level));
  rows = rows.slice().sort((a, b) => a.level - b.level || apCostFor(a.level) - apCostFor(b.level) || String(a.name).localeCompare(b.name));

  const apPanel = player
    ? `<div class="ab-wallet">
        <div class="abw-row"><span>🎓 ${esc(player.name)}</span><b>Level ${player.level}</b></div>
        <div class="abw-row"><span>⚡ AP available</span><b>${apLeft} <small style="color:var(--wz-muted)">(${apReserved()} reserved by receipts)</small></b></div>
        <div class="abw-row"><span>📖 Abilities known</span><b>${knownSet.size}</b></div>
        <div class="abw-row"><span>🧾 Pending receipts</span><b>${receipts.length}</b></div>
      </div>`
    : `<div class="ab-wallet"><div class="abw-row"><span>⚠</span><span style="font-size:13px">This account has no Ability Points ledger entry (<code>data/abilityPoints.json</code>). Ask the DM to add one — browsing is free.</span></div></div>`;

  const pendingHtml = receipts.length ? `
    <div class="ab-pending">
      <h3>🧾 Your AP receipts (${receipts.length})</h3>
      ${receipts.map(r => {
        const a = abilities.find(x => x.id === r.abilityId);
        return `<div class="abp-row">
          <span>${esc(a?.icon || '⚡')} <b>${esc(r.abilityName)}</b> — ${r.apCost} AP <span class="badge-pending">⏳ awaiting DM</span></span>
          <span>
            <button class="btn-plain" data-ap-copy="${esc(r.receiptId)}">Copy JSON</button>
            <button class="btn-plain" data-ap-cancel="${esc(r.receiptId)}">Cancel</button>
          </span>
        </div>
        <details class="oc-json"><summary>Receipt ${esc(r.receiptId)}</summary>
          <textarea readonly rows="9">${esc(JSON.stringify(r, null, 2))}</textarea>
        </details>`;
      }).join('')}
    </div>` : '';

  const typeOpts = ['<option value="">All types</option>']
    .concat(Object.entries(types).map(([k, t]) => `<option value="${esc(k)}" ${AB_STATE.type === k ? 'selected' : ''}>${esc(t.icon || '')} ${esc(t.label || k)}</option>`)).join('');
  const classOpts = ['<option value="">All classes</option>']
    .concat(Object.entries(classes).map(([k, c]) => `<option value="${esc(k)}" ${AB_STATE.cls === k ? 'selected' : ''}>${esc(c.icon || '')} ${esc(c.name || k)}</option>`)).join('');

  return `
  <div class="wz-container" style="margin-top:14px">
    <div class="results-bar" style="align-items:flex-start;gap:14px;flex-wrap:wrap">
      <div style="flex:1;min-width:280px">
        <h1 class="page-title" style="margin:0">⚡ Training Wing — Ability Shop</h1>
        <div style="color:var(--wz-muted);font-size:13px;margin-top:4px">${abilities.length} abilities · ${Object.keys(classes).length} classes · paid in Ability Points earned by levelling.
        Unlocking issues a <b>receipt</b> — the shop never edits a character sheet. Hand the JSON to the DM.</div>
      </div>
      ${apPanel}
    </div>
    ${pendingHtml}
    <div class="ab-toolbar">
      <select id="abType" class="sort-select">${typeOpts}</select>
      <select id="abClass" class="sort-select">${classOpts}</select>
      ${player ? `<label class="f-check" style="white-space:nowrap"><input type="checkbox" id="abUnlockable" ${AB_STATE.onlyUnlock ? 'checked' : ''}> Unlockable now</label>` : ''}
      <form id="abSearchForm" style="display:flex;gap:6px;flex:1;max-width:420px;margin-left:auto">
        <input class="gate-input" id="abSearch" value="${esc(AB_STATE.q)}" placeholder="Search abilities (try: fire, stealth, paladin)">
        <button class="search-go" type="submit" style="border-radius:4px;width:42px">🔍</button>
      </form>
    </div>
    <div class="ab-grid">${rows.slice(0, AB_STATE.shown).map(a => abilityCard(a, ctx)).join('')}</div>
    ${rows.length > AB_STATE.shown ? `<button class="btn-plain" id="abMore" style="display:block;margin:16px auto;padding:10px 26px">Show more (${fmt(rows.length - AB_STATE.shown)} left)</button>` : ''}
    ${rows.length === 0 ? `<div class="empty-results"><div class="big">⚡</div><h2>No abilities match</h2><p>Even Wario cannot sell what does not exist. And he has TRIED.</p></div>` : ''}
  </div>`;
}

/* --------------------------------------------------------------------------
   RENDER: CRAFTING FORGE
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
      <div class="cf-cost">${fmt(r.goldCost || 0)}<span>g</span></div>
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
  else if (S.view === 'abilities') view.innerHTML = renderAbilities();
  else view.innerHTML = renderHome();
  renderHeader();
}

/* --------------------------------------------------------------------------
   PRODUCT DETAIL MODAL (PDP)
   -------------------------------------------------------------------------- */

/**
 * PDP "Item effects & rules" — numbered effect rows with the item's own
 * reviewed rules text (inline effectDetails), heuristic standard rules only
 * when the item shipped without review text.
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

/** The "know what you're buying at a glance" panel: level, faction, usage. */
function glancePanelHtml(it) {
  const u = usageFor(it);
  const cells = [];
  if (u?.activation) cells.push(['⚡ Activation', u.activation]);
  if (u?.duration) cells.push(['⏳ Duration', u.duration]);
  if (u?.charges) cells.push(['🔢 Charges', u.charges]);
  if (u?.endsWhen) cells.push(['🔚 Ends when', u.endsWhen]);
  cells.push(['🎖 Level required', it.level ? `Level ${it.level}+` : 'None (any scrub can use it)']);
  cells.push(['📦 Stock in warehouse', it.stock > 0 ? `${it.stock} left` : 'SOLD OUT']);
  if (it.factionBonus) cells.push(['🚩 Faction bonus', Object.entries(it.factionBonus).map(([k, v]) => `+${v} ${k}`).join(' · ')]);
  if (it.shippedBy) cells.push(['🚚 Fulfilled by', it.shippedBy]);
  return `<div class="pdp-glance">
    <h2>At a glance</h2>
    <div class="pdp-glance-grid">
      ${cells.map(([k, v]) => `<div class="pg-cell"><span class="pg-k">${k}</span><span class="pg-v">${esc(v)}</span></div>`).join('')}
    </div>
  </div><hr class="pdp-hr">`;
}

function openPdp(id, useCur = null) {
  const it = ITEM_BY_ID.get(id);
  if (!it) return;
  ensureEffectCatalog();   // warm the supplement catalog
  const cur = (useCur && it.accepted.includes(useCur)) ? useCur : it.nativeCur;
  const vendorName = it.vendorLabel;
  const out = it.stock <= 0;
  const maxQty = Math.min(Math.max(it.stock, 0), 10);
  const qtyOpts = Array.from({ length: maxQty }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('');

  closeModal();
  const scrim = document.createElement('div');
  scrim.className = 'modal-scrim';
  scrim.id = 'wzModal';
  scrim._wzItemId = id;

  const curOptions = it.accepted.map(c =>
    `<option value="${esc(c)}" ${c === cur ? 'selected' : ''}>${coinIcon(c)} ${esc(currencyName(c))}${c === it.nativeCur ? ' (vendor’s own)' : ''}</option>`).join('');

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
        <div class="pdp-store">Visit the <a data-vendor-search="${esc(vendorName)}">${esc(vendorName)} Store</a>${it.nativeVia !== 'default' ? ` · prices set in <b>${esc(currencyName(it.nativeCur))}</b>` : ''}</div>
        <div class="p-rating">${starsHtml(it.rating)} <span style="color:#de7921">▾</span> <a class="r-count">${it.rating} · ${fmt(it.reviews)} ratings</a></div>
        <hr class="pdp-hr">
        <div class="pdp-price-block">
          <div class="pdp-cur-row">
            ${priceWidget(it, cur)}
            <label class="pdp-cur-pick" title="This vendor accepts multiple currencies">
              💱 Pay with
              <select id="pdpCurrency" class="sort-select">${curOptions}</select>
            </label>
          </div>
          ${cur !== 'gold' ? `<div class="p-was">≈ 💰${fmt(it.price)} gold at Waluipedia exchange rates (1 ${esc(it.nativeCur)} = ${currencyBase(it.nativeCur)} gold)</div>` : ''}
          ${it.accepted.length > 1 ? `<div class="p-accepts-row">This vendor also accepts: ${it.accepted.filter(c => c !== cur).map(c => `${coinIcon(c)} ${esc(currencyName(c))}`).join(' · ')}</div>` : ''}
        </div>
        ${shipLine(it)}
        <hr class="pdp-hr">
        ${glancePanelHtml(it)}
        ${effectsSectionHtml(it)}
        <div class="pdp-about">
          <h2>About this item</h2>
          <ul>
            ${it.level ? `<li>Requires character level ${it.level} to operate safely.${it.levelReason ? ` <span style="color:var(--wz-muted)">${esc(it.levelReason)}</span>` : ''}</li>` : ''}
            ${it.warning ? `<li style="color:#b12704">⚠ ${esc(it.warning)}</li>` : ''}
            ${it.stock <= 3 && it.stock > 0 ? `<li style="color:#b12704"><b>Hurry</b> — only ${it.stock} left in the warehouse.</li>` : ''}
            ${!it.level && !it.warning && it.stock > 3 ? '<li>A genuine Wario-grade product. Quality guaranteed-ish.</li>' : ''}
          </ul>
          <div class="pdp-desc">${esc(it.desc)}</div>
          <table class="pdp-table">
            <tr><td>Department</td><td>${esc(DEPARTMENTS[it.cat].label)}</td></tr>
            <tr><td>Rarity</td><td>${esc(it.rarity.replace('_', ' '))}</td></tr>
            <tr><td>Sold by</td><td>${esc(vendorName)}${it.vendor?.location ? ' — ' + esc(it.vendor.location) : ''}</td></tr>
            ${it.vendorReason ? `<tr><td>Why this vendor</td><td>${esc(it.vendorReason)}</td></tr>` : ''}
            <tr><td>Accepted payment</td><td>${it.accepted.map(c => `${coinIcon(c)} ${esc(currencyName(c))}`).join(' · ')}</td></tr>
            ${it.priceReason ? `<tr><td>Why this price</td><td>${esc(it.priceReason)}</td></tr>` : ''}
            ${it.shippedBy ? `<tr><td>Fulfilled by</td><td>${esc(it.shippedBy)}</td></tr>` : ''}
            ${it.shippingDetail ? `<tr><td>Shipping note</td><td>${esc(it.shippingDetail)}</td></tr>` : ''}
            <tr><td>Item model</td><td>${esc(it.id)}</td></tr>
            <tr><td>Return policy</td><td><b>No returns. No refunds.</b> All sales benefit the Wario Retirement &amp; Garlic Fund.</td></tr>
          </table>
        </div>
      </div>

      <aside class="pdp-buybox">
        <div class="bb-price"><span class="sym">${coinIcon(cur)}</span><span class="whole">${fmt(amtIn(it.price, cur))}</span><span class="frac">${cur === 'gold' ? '' : esc(currencyName(cur))}</span></div>
        ${cur !== 'gold' ? `<div class="p-was">≈ 💰${fmt(it.price)} gold</div>` : ''}
        ${it.deal ? `<div class="p-was">List: <s>${coinIcon(cur)}${fmt(amtIn(it.deal.was, cur))}</s> <span style="color:var(--wz-deal-red);font-weight:700">-${it.deal.off}%</span></div>` : ''}
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
          <div class="bb-meta"><span class="k">Payment</span><span class="v" style="color:var(--wz-muted)">Checkout issues a purchase order — you pay the DM, never this page.</span></div>
        </div>
      </aside>
    </div>
  </div>`;
  document.body.appendChild(scrim);
  scrim.addEventListener('click', e => {
    if (e.target === scrim || e.target.closest('[data-close]')) closeModal();
  });
  scrim.addEventListener('change', e => {
    if (e.target.id === 'pdpCurrency') openPdp(id, e.target.value);
  });
}

function closeModal() {
  document.getElementById('wzModal')?.remove();
}

/* --------------------------------------------------------------------------
   CART DRAWER
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
  drawer.innerHTML = `
    <div class="cart-head">Shopping Cart <button class="modal-x" style="position:static" data-cart-close="1">✕</button></div>
    <div class="cart-body">
      ${rows.length === 0 ? `<div class="cart-empty"><div class="big">🛒</div><h3>Your Warizon Cart is empty</h3><p>Wario weeps for your wallet.</p></div>` : ''}
      ${rows.map(r => {
        const it = ITEM_BY_ID.get(r.id); if (!it) return '';
        const c = it.nativeCur;
        return `<div class="cart-row">
          <div class="cr-img" data-open="${esc(it.id)}">${esc(it.icon)}</div>
          <div>
            <div class="cr-title" data-open="${esc(it.id)}">${esc(it.name)}</div>
            <div class="cr-price">${coinIcon(c)}${fmt(amtIn(it.price * r.qty, c))} <small style="color:var(--wz-muted);font-weight:400">(${fmt(amtIn(it.price, c))} ea${c !== 'gold' ? ` · ≈ 💰${fmt(it.price * r.qty)}` : ''})</small></div>
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
      <div class="subtotal">Subtotal (${cartCount()} item${cartCount() === 1 ? '' : 's'}): <b>💰${fmt(subtotal)} gold</b> <small class="gold-ref">payable in vendor coins at checkout</small></div>
      <button class="btn-buy" data-goto-checkout="1" ${rows.length === 0 ? 'disabled' : ''}>Proceed to checkout</button>
    </div>`;
}

/* --------------------------------------------------------------------------
   CHECKOUT — per-line multi-currency payment + RECEIPT generation.
   The wallet is NEVER charged on this page. The buyer picks a currency per
   line item (from the currencies each vendor actually accepts); if any pool
   comes up short, the purchase order is blocked. On success a receipt JSON
   is produced for the DM to file in shop-purchases.json.
   -------------------------------------------------------------------------- */

const SHIP_METHODS_LIST = [
  () => SHIPPING_METHODS?.DUMPSTER_ROLL || { name: 'Dumpster Roll', deliveryTime: '7-30 days', cost: 0, icon: '🗑️', description: '' },
  () => SHIPPING_METHODS?.PARAKARRY_POST || { name: 'Standard Parakarry', deliveryTime: '3-5 days', cost: 1500, icon: '✉️', description: '' },
  () => SHIPPING_METHODS?.BULLET_BILL || { name: 'Bullet Bill Ride', deliveryTime: '12 hours', cost: 10000, icon: '⚫', description: '' }
];

/**
 * Compute the payment plan for checkout rows.
 * Returns { rowPlans:[{it,qty,cur,native,lineGold}], needs:{cur:amt}, shortfalls:{cur:amt},
 *           itemGold, shipTaxGold, shipTaxCur, shipTaxAmt, totalGold, covered }
 */
function computePaymentPlan(rows, rowCur, shipTax, acc) {
  const needs = {};
  const rowPlans = [];
  let itemGold = 0;
  rows.forEach((r, i) => {
    const it = ITEM_BY_ID.get(r.id);
    if (!it) return;
    const cur = it.accepted.includes(rowCur[i]) ? rowCur[i] : it.nativeCur;
    const unit = amtIn(it.price, cur);
    const native = unit * r.qty;
    const lineGold = it.price * r.qty;
    itemGold += lineGold;
    needs[cur] = (needs[cur] || 0) + native;
    rowPlans.push({ it, qty: r.qty, cur, unit, native, lineGold });
  });
  const shipTaxGold = shipTax.gold;
  if (shipTaxGold > 0) {
    const stc = shipTax.cur;
    const amt = stc === 'gold' ? Math.ceil(shipTaxGold)
      : stc === 'wario_coin' ? amtIn(shipTaxGold, stc)              // Wario takes his own coin at face. Of course.
      : Math.ceil(shipTaxGold * (1 + GOLD_FEE) / currencyBase(stc)); // everything else: 10% conversion fee
    needs[stc] = (needs[stc] || 0) + amt;
  }
  const shortfalls = {};
  Object.entries(needs).forEach(([cid, amt]) => {
    const short = amt - walletHeld(acc, cid);
    if (short > 0.0001) shortfalls[cid] = short;
  });
  return {
    rowPlans, needs, shortfalls,
    itemGold, shipTaxGold, totalGold: itemGold + shipTaxGold,
    covered: Object.keys(shortfalls).length === 0
  };
}

function openCheckout(buyNowRows = null) {
  closeCart();
  const acc = currentAccount();
  const rows = buyNowRows || getCart();
  if (!rows.length) { toast('Your cart is empty — Wario cannot sell you nothing. (He tried.)'); return; }

  const shipOpts = SHIP_METHODS_LIST.map(f => f());
  const ownedCurs = Object.keys(acc?.currencies || {}).filter(cid => CURRENCIES?.[cid] && walletHeld(acc, cid) > 0);
  if (!ownedCurs.includes('gold')) ownedCurs.unshift('gold');

  const scrim = document.createElement('div');
  scrim.className = 'modal-scrim';
  scrim.id = 'wzModal';

  /* per-open checkout state */
  const coState = {
    shipIdx: 0,
    rowCur: {},               // row index → chosen currency
    shipTaxCur: ownedCurs.includes('gold') && walletHeld(acc, 'gold') > 0 ? 'gold'
      : (ownedCurs.includes('wario_coin') ? 'wario_coin' : ownedCurs[0] || 'gold')
  };
  /* default each line to its native currency when the buyer holds some */
  rows.forEach((r, i) => {
    const it = ITEM_BY_ID.get(r.id);
    if (!it) return;
    const native = it.nativeCur;
    coState.rowCur[i] = (native !== 'gold' && walletHeld(acc, native) > 0) ? native : 'gold';
  });

  const renderCo = () => {
    const ship = shipOpts[coState.shipIdx] || shipOpts[0];
    const subtotal = rows.reduce((s, r) => s + (ITEM_BY_ID.get(r.id)?.price || 0) * r.qty, 0);
    const shipCost = Number(ship.cost || 0);
    const tax = Math.round(subtotal * 0.05); // the Wario Tax
    const plan = computePaymentPlan(rows, coState.rowCur, { gold: shipCost + tax, cur: coState.shipTaxCur }, acc);
    const addr = FREE_ADDRESSES[Math.floor(hash01(acc?.name || 'wario') * FREE_ADDRESSES.length)];

    const shortfallHtml = Object.entries(plan.shortfalls).length
      ? `<div class="co-insufficient">❌ <b>Not enough coin to file this purchase order.</b><br>
         ${Object.entries(plan.shortfalls).map(([cid, amt]) =>
           `Missing ${coinIcon(cid)} <b>${fmt(amt)}</b> ${esc(currencyName(cid))}`).join(' &nbsp;·&nbsp; ')}<br>
         <small>Switch a line to a currency you actually hold, or take items out of the cart. Wario does not do credit. WAH!</small></div>`
      : '';

    const tenderLines = Object.entries(plan.needs)
      .map(([cid, amt]) => `<div class="line"><span>${coinIcon(cid)} ${esc(currencyName(cid))} <small style="color:var(--wz-muted)">(held ${fmt(walletHeld(acc, cid))})</small></span><span><b>${fmt(amt)}</b></span></div>`).join('');

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
            <h3>2 &nbsp;Payment — pick a currency per item</h3>
            <div class="co-line"><span>Waluipedia Wallet — ${esc(acc?.name || '?')}</span>
              <b>≈💰${fmtDec(Object.entries(acc?.currencies || {}).reduce((s, [cid, v]) => s + currencyBase(cid) * Number(v || 0), 0), 1)} gold value</b></div>
            <div class="co-banner-lite">🧾 Warizon never charges your wallet. This checkout files a <b>purchase order</b>; you settle up with the DM, who files the receipt on the ledger.</div>
            ${plan.rowPlans.map((rp, i) => {
              const it = rp.it;
              const opts = it.accepted.map(c => {
                const held = walletHeld(acc, c);
                return `<option value="${esc(c)}" ${c === rp.cur ? 'selected' : ''}>${coinIcon(c)} ${esc(currencyName(c))} (held ${fmt(held)})</option>`;
              }).join('');
              return `<div class="co-item co-pay-row">
                <div class="ci-img">${esc(it.icon)}</div>
                <div class="co-pay-mid">
                  <span class="co-pay-name">${esc(it.name)} <span class="ci-qty">×${rp.qty}</span></span>
                  <small class="co-pay-note">${it.accepted.length > 1 ? `vendor accepts ${it.accepted.map(c => coinIcon(c)).join(' ')}` : 'gold only'}</small>
                </div>
                <label class="co-pay-cur"><select class="sort-select" data-row-cur="${i}">${opts}</select></label>
                <span class="co-pay-amt">${coinIcon(rp.cur)} <b>${fmt(rp.native)}</b>${rp.cur !== 'gold' ? `<small> ≈ 💰${fmt(rp.lineGold)}</small>` : ''}</span>
              </div>`;
            }).join('')}
          </div>
          <div class="co-sec">
            <h3>3 &nbsp;Shipping &amp; the Wario Tax</h3>
            <div class="co-ship-opts">
              ${shipOpts.map((s, i) => `<label><input type="radio" name="wzShip" value="${i}" ${i === coState.shipIdx ? 'checked' : ''}>
                <span>${s.icon || '📦'} <b>${esc(s.name)}</b> — ${esc(s.deliveryTime)}${s.description ? ' · ' + esc(s.description) : ''}</span>
                <span class="ship-cost">${s.cost ? '💰' + fmt(s.cost) : 'FREE'}</span></label>`).join('')}
            </div>
            <div class="co-shiptax">
              Pay shipping + 5% Wario Tax (💰${fmt(shipCost + tax)}) with
              <select class="sort-select" id="shipTaxCur">
                ${ownedCurs.map(cid => `<option value="${esc(cid)}" ${cid === coState.shipTaxCur ? 'selected' : ''}>${coinIcon(cid)} ${esc(currencyName(cid))} (held ${fmt(walletHeld(acc, cid))})${cid === 'wario_coin' ? ' — no fee' : cid !== 'gold' ? ' — 10% fee' : ''}</option>`).join('')}
              </select>
            </div>
          </div>
        </div>
        <div class="co-summary">
          <button class="btn-buy" id="placeOrderBtn" ${plan.covered ? '' : 'disabled'}>Generate purchase order</button>
          ${shortfallHtml}
          <div class="line"><span>Items (${rows.reduce((n, r) => n + r.qty, 0)}):</span><span>💰${fmt(subtotal)}</span></div>
          <div class="line"><span>Shipping &amp; handling:</span><span>${shipCost ? '💰' + fmt(shipCost) : 'FREE'}</span></div>
          <div class="line"><span>Estimated Wario Tax (5%):</span><span>💰${fmt(tax)}</span></div>
          <div class="total"><span>Order total:</span><span>💰${fmt(plan.totalGold)} gold</span></div>
          <hr class="pdp-hr">
          <div class="co-tender-head">You will owe the DM:</div>
          ${tenderLines}
          <div class="co-warning">By generating this purchase order you agree to Warizon's <a>conditions of use</a>: no refunds, no exchanges, no eye contact with Wario. ${coState.shipTaxCur !== 'gold' && coState.shipTaxCur !== 'wario_coin' ? 'Shipping/tax conversion fee: 10%.' : ''}</div>
        </div>
      </div>
    </div>`;
  };

  scrim.innerHTML = renderCo();
  document.body.appendChild(scrim);

  scrim.addEventListener('change', e => {
    if (e.target.name === 'wzShip') { coState.shipIdx = Number(e.target.value); scrim.innerHTML = renderCo(); }
    else if (e.target.matches('[data-row-cur]')) { coState.rowCur[Number(e.target.dataset.rowCur)] = e.target.value; scrim.innerHTML = renderCo(); }
    else if (e.target.id === 'shipTaxCur') { coState.shipTaxCur = e.target.value; scrim.innerHTML = renderCo(); }
  });
  scrim.addEventListener('click', e => {
    if (e.target === scrim || e.target.closest('[data-close]')) closeModal();
    if (e.target.closest('#placeOrderBtn')) {
      placeOrder(rows, shipOpts[coState.shipIdx], coState, !!buyNowRows);
    }
  });
}

/* --------------------------------------------------------------------------
   RECEIPT — the whole point of checkout. Build purchase-order entries that
   mirror shop-purchases.json; nothing is deducted anywhere.
   -------------------------------------------------------------------------- */

function placeOrder(rows, ship, coState, isBuyNow = false) {
  const acc = currentAccount();
  const subtotal = rows.reduce((s, r) => s + (ITEM_BY_ID.get(r.id)?.price || 0) * r.qty, 0);
  const tax = Math.round(subtotal * 0.05);
  const shipCost = Number(ship.cost || 0);
  const plan = computePaymentPlan(rows, coState.rowCur, { gold: shipCost + tax, cur: coState.shipTaxCur }, acc);
  if (!plan.covered) { sfx('click'); return; }   // gatekeeper: unaffordable orders never become receipts

  const code = hash01(String(Date.now()) + plan.totalGold + (acc?.id || ''))
    .toString(16).slice(2).toUpperCase().padStart(8, 'WAH0').slice(0, 8);
  const no = `WW-${code}`;
  const eta = deliveryLabel(no, /hour|Instant/i.test(ship.deliveryTime || '') ? 0 : 2, 4);
  const nowIso = new Date().toISOString();

  /* one ledger entry per line item — mirrors shop-purchases.json shape */
  const entries = plan.rowPlans.map((rp, i) => ({
    orderId: `${no}-${String(i + 1).padStart(2, '0')}`,
    itemId: rp.it.id,
    itemName: rp.it.name,
    price: rp.it.price,                       // gold unit price (ledger standard)
    qty: rp.qty,
    currency: rp.cur,                         // what the player will hand the DM
    nativeTotal: rp.native,                   // amount of that currency owed
    isFaction: rp.it.cat === 'faction',
    playerKey: acc?.id || 'unknown',
    orderedAt: nowIso,
    approvedAt: null,
    approvedBy: null,
    status: 'PENDING_PAYMENT'
  }));

  const tender = { ...plan.needs };

  const receipts = getReceipts();
  receipts.push({
    no, ts: Date.now(), playerKey: acc?.id || 'unknown',
    shipTo: acc?.name?.split(' ')[0] || 'You',
    ship: ship.name, shipCost, tax,
    shipTaxCur: coState.shipTaxCur,
    totalGold: plan.totalGold,
    items: rows.map((r, i) => ({ id: r.id, qty: r.qty, cur: plan.rowPlans[i]?.cur || 'gold' })),
    tender, eta, entries
  });
  saveReceipts(receipts);

  if (!isBuyNow) saveCart([]);   // cart checkout clears the cart
  sfx('wah');
  closeModal();
  openReceiptModal(no, entries, tender, eta, ship);
}

/** Confirmation = the receipt itself, JSON ready to hand to the DM. */
function openReceiptModal(no, entries, tender, eta, ship) {
  const scrim = document.createElement('div');
  scrim.className = 'modal-scrim';
  scrim.id = 'wzModal';
  const tenderLines = Object.entries(tender)
    .map(([cid, amt]) => `<div class="rc-tender-line">${coinIcon(cid)} <b>${fmt(amt)}</b> ${esc(currencyName(cid))}</div>`).join('');
  const jsonText = JSON.stringify(entries, null, 2);
  scrim.innerHTML = `
    <div class="modal" style="max-width:680px">
      <button class="modal-x" data-close="1">✕</button>
      <div class="order-done receipt-done">
        <div class="big">🧾</div>
        <h1>Purchase order filed!</h1>
        <p>Order <span class="order-no">${esc(no)}</span> · ${esc(ship.icon || '📦')} ${esc(ship.name)} — arriving <b>${esc(eta)}</b>.<br>
        <b>Nothing was charged.</b> Pay the DM the amounts below, and the DM files this JSON on the ledger.</p>
        <div class="rc-tender"><div class="rc-tender-head">PAY THE DM:</div>${tenderLines}</div>
        <div class="rc-json-wrap">
          <textarea id="receiptJson" readonly rows="${Math.min(16, 4 + entries.length * 11)}">${esc(jsonText)}</textarea>
        </div>
        <div class="rc-btns">
          <button class="btn-add" id="copyReceiptBtn" style="max-width:280px">📋 Copy receipt JSON</button>
          <button class="btn-buy" id="doneOrdersBtn" style="max-width:280px">View your orders</button>
        </div>
        <p style="color:var(--wz-muted);font-size:12px">The DM pastes these into <code>Reputation-Matrix2/shop-purchases.json</code> when paid, fills in <code>approvedAt</code>/<code>approvedBy</code>, and the order flips to ✔ PAID on your Orders page. Until then it sits there as ⏳ AWAITING PAYMENT — a permanent reminder. Wario loves those.</p>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  scrim.addEventListener('click', e => {
    if (e.target === scrim || e.target.closest('[data-close]')) closeModal();
    if (e.target.closest('#doneOrdersBtn')) { closeModal(); goTo('orders'); }
    if (e.target.closest('#copyReceiptBtn')) {
      copyToClipboard(jsonText);
    }
  });
}

function copyToClipboard(text) {
  const done = ok => toast(ok ? '📋 <b>Receipt JSON copied.</b> Hand it to the DM — Wario salutes your paperwork.' : 'Copy failed — select the text manually. Wario blames the browser.');
  try {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => done(true), () => done(false));
      return;
    }
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand?.('copy');
    ta.remove();
    done(!!ok);
  } catch (_) { done(false); }
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
        <button data-drawer-abilities="1">⚡ Training Wing (Ability Shop) <span>›</span></button>
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
   Ability unlock → AP receipt modal
   -------------------------------------------------------------------------- */

function openAbilityUnlock(abilityId) {
  const a = AB?.shop?.abilities?.find(x => x.id === abilityId);
  const acc = currentAccount();
  const player = apPlayerFor(acc);
  if (!a || !player) return;
  const cost = apCostFor(a.level);
  const left = Math.max(0, player.apAvailable - apReserved());
  if (left < cost || player.level < a.level) { toast('WAH! Not enough Ability Points. Go level up, cheapskate.'); return; }

  closeModal();
  const scrim = document.createElement('div');
  scrim.className = 'modal-scrim';
  scrim.id = 'wzModal';
  scrim.innerHTML = `
    <div class="modal" style="max-width:520px">
      <button class="modal-x" data-close="1">✕</button>
      <div style="padding:26px">
        <h1 style="font-size:22px;font-weight:700;margin:0 0 10px">${esc(a.icon || '⚡')} ${esc(a.name)}</h1>
        <p style="font-size:14px;margin:0 0 12px">${esc(a.description || '')}</p>
        <table class="pdp-table" style="margin-bottom:14px">
          <tr><td>Class</td><td>${esc(a.className || a.class)}</td></tr>
          <tr><td>Type</td><td>${esc(a.typeLabel || a.type)}</td></tr>
          <tr><td>Required level</td><td>${a.level}+ (you are ${player.level})</td></tr>
          <tr><td>AP cost</td><td><b>${cost} AP</b> (you have ${left} available)</td></tr>
        </table>
        <button class="btn-buy" id="apConfirmBtn" style="width:100%">Generate AP receipt</button>
        <div class="co-warning" style="margin-top:10px">The receipt reserves ${cost} AP and goes to the DM for approval. The shop never edits a character sheet — per <code>data/abilityPoints.json</code>.</div>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  scrim.addEventListener('click', e => {
    if (e.target === scrim || e.target.closest('[data-close]')) closeModal();
    if (e.target.closest('#apConfirmBtn')) {
      const receipt = {
        receiptId: 'AP-' + hash01(Date.now() + abilityId).toString(16).slice(2).toUpperCase().padStart(8, 'AP0000').slice(0, 8),
        playerKey: acc?.id || 'unknown',
        playerName: player.name,
        playerLevel: player.level,
        abilityId: a.id,
        abilityName: a.name,
        class: a.class,
        requiredLevel: a.level,
        apCost: cost,
        requestedAt: new Date().toISOString(),
        approvedAt: null,
        approvedBy: null,
        status: 'PENDING_DM_APPROVAL'
      };
      const list = getApReceipts();
      list.push(receipt);
      saveApReceipts(list);
      sfx('confirm');
      closeModal();
      render();      // refresh the wing (button now shows ⏳ Requested)
      toast(`🧾 <b>${esc(a.name)}</b> receipt generated — ${cost} AP reserved pending DM approval.`);
    }
  });
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
        <div class="gate-legal">New accounts receive a generous 💰100 gold welcome bonus, courtesy of Wario's Couch Cushions (terms: it was in the couch).</div>
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
  /* warm lazy catalogs in the background */
  ensureDeptMeta();
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
    if (!match) S.q = m[1].replace(/_/g, ' ');
    S.view = 'results';
  } else {
    S.view = 'home';
  }
}

function buyNow(id, qty = 1) {
  const it = ITEM_BY_ID.get(id);
  if (!it) return;
  if (it.stock <= 0) { toast('<b>Out of stock.</b> Wario already sold it. To himself.'); return; }
  qty = Math.max(1, Math.min(qty, Math.min(it.stock, 10)));
  openCheckout([{ id, qty }]);
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
      S.view = 'results'; render(); return;
    }
    const godept = t.closest('[data-go-dept]');
    if (godept) { resetFilters(); S.q = ''; S.dept = godept.dataset.goDept; S.view = 'results'; render(); return; }
    if (t.closest('[data-go-currency]')) {
      /* "Priced in Exotic Coin" rail → everything payable with native coinage */
      resetFilters(); S.q = ''; S.dept = 'all'; S.sort = 'featured';
      S.currencies = new Set(TOP_CURRENCIES.filter(([cid]) => cid !== 'gold').map(([cid]) => cid));
      S.view = 'results'; render(); return;
    }
    if (t.closest('[data-go-shop]')) { goTo('home'); return; }
    if (t.closest('[data-go-craft]')) { CRAFT_STATE.shown = 60; goTo('crafting'); return; }
    if (t.closest('[data-go-abilities]')) { AB_STATE.shown = 60; goTo('abilities'); return; }

    const buyAgain = t.closest('[data-buy-again]');
    if (buyAgain) { addToCart(buyAgain.dataset.buyAgain); openCart(); return; }
    if (t.closest('[data-no-refund]')) { sfx('wah'); toast('WAH HA HA! <b>No refunds!</b> Warizon return policy, page 1 of 1.'); return; }
    if (t.closest('[data-no-review]')) { toast('Your five stars are appreciated in advance. Wario accepts praise and gold only.'); return; }

    /* receipts on the orders page */
    const copyR = t.closest('[data-copy-receipt]');
    if (copyR) {
      const r = getReceipts().find(x => x.no === copyR.dataset.copyReceipt);
      if (r) copyToClipboard(JSON.stringify(r.entries, null, 2));
      return;
    }
    const cancelR = t.closest('[data-cancel-receipt]');
    if (cancelR) {
      saveReceipts(getReceipts().filter(x => x.no !== cancelR.dataset.cancelReceipt));
      render();
      toast('Purchase order cancelled. The DM was not notified. Wario was, and he is FURIOUS.');
      return;
    }
    const copyAp = t.closest('[data-ap-copy]');
    if (copyAp) {
      const r = getApReceipts().find(x => x.receiptId === copyAp.dataset.apCopy);
      if (r) copyToClipboard(JSON.stringify(r, null, 2));
      return;
    }
    const cancelAp = t.closest('[data-ap-cancel]');
    if (cancelAp) {
      saveApReceipts(getApReceipts().filter(x => x.receiptId !== cancelAp.dataset.apCancel));
      render();
      toast('AP receipt cancelled — the reserved points are yours again. Spend them on something flashier.');
      return;
    }
    const apUnlock = t.closest('[data-ap-unlock]');
    if (apUnlock) { openAbilityUnlock(apUnlock.dataset.apUnlock); return; }

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
      buyNow(id, qty);
      return;
    }

    const crumbDept = t.closest('[data-crumb-dept]');
    if (crumbDept) { closeModal(); resetFilters(); S.dept = crumbDept.dataset.crumbDept; S.q = ''; goTo('results'); return; }
    if (t.closest('[data-crumb-goto]')) { closeModal(); goTo('home'); return; }
    const vendSearch = t.closest('[data-vendor-search]');
    if (vendSearch) {
      closeModal(); resetFilters(); S.q = ''; S.dept = 'all';
      const name = vendSearch.dataset.vendorSearch;
      if (vendorCounts[name]) S.vendors = new Set([name]); else S.q = name;
      goTo('results'); return;
    }
    const vendLink = t.closest('[data-vendor-link]');
    if (vendLink) {
      const name = vendLink.textContent.trim();
      if (vendorCounts[name]) { resetFilters(); S.vendors = new Set([name]); goTo('results'); }
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

    /* abilities wing */
    if (t.closest('#subAbilities')) { AB_STATE.shown = 60; goTo('abilities'); return; }
    if (t.closest('#abMore')) { AB_STATE.shown += 60; render(); return; }

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
    if (t.closest('[data-drawer-abilities]')) { closeDrawer(); AB_STATE.shown = 60; goTo('abilities'); return; }
    if (t.closest('[data-drawer-crafting]')) { closeDrawer(); goTo('crafting'); return; }
    if (t.closest('[data-drawer-orders]')) { closeDrawer(); goTo('orders'); return; }
    if (t.closest('[data-drawer-cart]')) { closeDrawer(); openCart(); return; }
    if (t.closest('[data-drawer-account]')) { closeDrawer(); document.querySelector('.nav-acct-wrap')?.classList.toggle('open'); window.scrollTo({ top: 0 }); return; }
    if (t.closest('[data-drawer-nofaq]')) { closeDrawer(); toast('Customer service is closed. It has always been closed. Try the complaints box (it is a real box).'); return; }
    if (t.closest('[data-drawer-signout]')) { closeDrawer(); signOut(); return; }

    if (t.closest('#flyOrdersLink')) { goTo('orders'); return; }
    if (t.closest('#flySignOut')) { signOut(); return; }
    if (t.closest('#flyMembership')) { toast('<b>WahPrime: ACTIVE-ish.</b> Benefits include free delivery, priority hoarding, and one (1) yearly compliment from Wario.'); return; }
    if (t.closest('#navDeliver')) { toast('Your delivery address is set to <b>' + esc(document.getElementById('deliverAddr')?.textContent || 'Wario Land') + '</b>. Changing it costs 💰5. Everything costs Wario 💰5.'); return; }
    if (t.closest('[data-foot]')) { toast('That page is on Wario\'s desk. It has been there since 2019. WAH!'); return; }
    if (t.closest('#flySwitch')) {
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
    if (t.matches('[data-currency]')) {
      t.checked ? S.currencies.add(t.dataset.currency) : S.currencies.delete(t.dataset.currency);
      S.page = 1; render(); return;
    }
    if (t.matches('#fInStock')) { S.inStockOnly = t.checked; S.page = 1; render(); return; }
    if (t.matches('#sortSelect')) { S.sort = t.value; S.page = 1; render(); return; }
    if (t.matches('#craftSchool')) { CRAFT_STATE.school = t.value; CRAFT_STATE.shown = 60; render(); return; }
    if (t.matches('#craftCat')) { CRAFT_STATE.cat = t.value; CRAFT_STATE.shown = 60; render(); return; }
    if (t.matches('#abType')) { AB_STATE.type = t.value; AB_STATE.shown = 60; render(); return; }
    if (t.matches('#abClass')) { AB_STATE.cls = t.value; AB_STATE.shown = 60; render(); return; }
    if (t.matches('#abUnlockable')) { AB_STATE.onlyUnlock = t.checked; AB_STATE.shown = 60; render(); return; }
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
      CRAFT_STATE.school = '';
      CRAFT_STATE.cat = '';
      CRAFT_STATE.shown = 60;
      render();
    }
    if (e.target.id === 'abSearchForm') {
      e.preventDefault();
      AB_STATE.q = document.getElementById('abSearch').value;
      AB_STATE.shown = 60;
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
    ensureDeptMeta();
    ensureEffectCatalog();
  } else {
    store.hidden = true;       // storefront stays locked until sign-in
    gate.hidden = false;
    renderGate();
  }
});
