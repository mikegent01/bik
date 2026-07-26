/* ==========================================================================
   WARIZON — Wario's Everything Warehouse
   Amazon-inspired, login-gated storefront (redesigned from scratch)

   PHASE 3: rich item intel (inline effectDetails/rules shown verbatim),
   per-item multi-currency (native currency detected from vendor/keywords),
   purchase-order RECEIPTS (wallet is never charged — the DM is handed JSON),
   real order ledger (shop-purchases.json), department JSON, Ability Shop
   ("Training Wing") with AP receipts.
   ========================================================================== */

import { SHOP_ITEMS, VENDORS, SHIPPING_METHODS, BASE_MEMBERSHIP_TIERS, generateTier, getNextTier } from './shop-data.js';
import { WALLETS, CURRENCIES } from './currency.js';

/* --------------------------------------------------------------------------
   Constants & helpers
   -------------------------------------------------------------------------- */

const SESSION_KEY = 'warizon.session';
const CUSTOM_WALLETS_KEY = 'warizon.customWallets';
const CART_KEY = id => `warizon.cart.${id}`;
const RECEIPTS_KEY = id => `warizon.receipts.${id}`;
const AP_RECEIPTS_KEY = id => `warizon.apReceipts.${id}`;
const PRIME_RECEIPTS_KEY = id => `warizon.wahprimeReceipts.${id}`;
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
   vendor first, then keywords in its id/name) plus a dynamic list of ACCEPTED
   currencies. Popular goods accept broad everyday tender; scarce goods settle
   only in currencies valuable enough for their rarity tier.
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

/*
 * Phase 7 tender policy. Everyday, popular products are deliberately easy to
 * buy with a broad range of low/mid-tier ledger currencies. Scarce products
 * move up the settlement ladder and accept fewer, more valuable tenders. This
 * is deterministic per item, so a product does not change currencies between
 * renders, while still avoiding a hand-maintained accepted-currency list for
 * thousands of listings.
 */
const RARITY_PAYMENT_POLICY = {
  common:    { min: 0,   max: 1.6, count: 5, popularBonus: 2, label: 'Open market' },
  uncommon:  { min: .5,  max: 3.5, count: 4, popularBonus: 2, label: 'Broad market' },
  rare:      { min: 1,   max: 7,   count: 3, popularBonus: 1, label: 'Select tender' },
  very_rare: { min: 3.2, max: 10,  count: 3, popularBonus: 1, label: 'High-tier tender' },
  epic:      { min: 2.2, max: 10,  count: 3, popularBonus: 1, label: 'High-tier tender' },
  legendary: { min: 5,   max: Infinity, count: 2, popularBonus: 1, label: 'Prestige tender' },
  mythic:    { min: 7,   max: Infinity, count: 2, popularBonus: 1, label: 'Mythic tender' },
  unique:    { min: 7,   max: Infinity, count: 2, popularBonus: 1, label: 'Collector tender' },
  cosmic:    { min: 8.5, max: Infinity, count: 2, popularBonus: 0, label: 'Cosmic tender' },
  godly:     { min: 10,  max: Infinity, count: 2, popularBonus: 0, label: 'Ascendant tender' },
  forbidden: { min: 10,  max: Infinity, count: 2, popularBonus: 0, label: 'Restricted tender' },
  wario_tier:{ min: 10,  max: Infinity, count: 2, popularBonus: 0, label: 'Vault tender' }
};

function acceptedCurrenciesFor(raw, detected, rarity, rating, reviews) {
  const policy = RARITY_PAYMENT_POLICY[rarity] || RARITY_PAYMENT_POLICY.common;
  const popularity = Math.max(0, Math.min(1,
    (Number(reviews || 0) / 2500) * .68 + ((Number(rating || 3.2) - 3.2) / 1.7) * .32));
  const desired = policy.count + (popularity >= .58 ? policy.popularBonus : 0);
  const accepted = [];
  const qualifies = id => {
    const base = currencyBase(id);
    return CURRENCIES?.[id] && base >= policy.min && base <= policy.max;
  };
  const push = id => { if (qualifies(id) && !accepted.includes(id)) accepted.push(id); };

  // Keep a vendor's own coin for accessible tiers. Premium goods reject a
  // low-value local coin and settle in a qualifying high-tier currency instead.
  push(detected.native);
  detected.extra.forEach(push);
  push('gold');

  Object.keys(CURRENCIES || {})
    .filter(qualifies)
    .sort((a, b) => hash01(`${raw.id}|tender|${a}`) - hash01(`${raw.id}|tender|${b}`))
    .forEach(id => { if (accepted.length < desired) push(id); });

  // Defensive fallback for unusual future rarity/currency data.
  if (!accepted.length) {
    Object.keys(CURRENCIES || {})
      .sort((a, b) => Math.abs(currencyBase(a) - policy.min) - Math.abs(currencyBase(b) - policy.min))
      .slice(0, 2).forEach(id => { if (!accepted.includes(id)) accepted.push(id); });
  }

  return {
    accepted,
    primary: accepted.includes(detected.native) ? detected.native : accepted[0],
    vendorCurrency: detected.native,
    tierLabel: policy.label,
    tierMin: policy.min,
    popularity
  };
}

/* --------------------------------------------------------------------------
   ECONOMY GUARD + SCAM SIGNALS
   -------------------------------------------------------------------------- */

function balanceText(raw) {
  return [
    raw.name, raw.description,
    ...(Array.isArray(raw.effects) ? raw.effects : []),
    ...(Array.isArray(raw.effectDetails) ? raw.effectDetails.flatMap(d => [d?.title, d?.rules]) : []),
    ...Object.values(raw.usage || {})
  ].filter(Boolean).join(' ').toLowerCase();
}

/** Detect permanent wealth engines and impossible commerce claims. Explicit
    item metadata wins; heuristics protect future generated catalog entries. */
function assessEconomyImpact(raw) {
  const text = balanceText(raw);
  const declared = raw.economyImpact && typeof raw.economyImpact === 'object' ? raw.economyImpact : {};
  let floor = Math.max(0, Number(declared.priceFloor || 0));
  let dailyGold = Math.max(0, Number(declared.dailyGold || 0));
  const reasons = [];

  if (/daily|each day|at dawn/.test(text)) {
    for (const match of text.matchAll(/([\d,]+)\s+gold(?:\s+coins?)?/g)) {
      dailyGold = Math.max(dailyGold, Number(match[1].replace(/,/g, '')) || 0);
    }
  }
  if (dailyGold > 0) {
    floor = Math.max(floor, dailyGold * 365 * 100); // 100-year income buy-in
    reasons.push(`${fmt(dailyGold)} gold/day passive income`);
  }
  if (/all shops?.{0,45}(?:free|no cost)|all shop items?.{0,30}free|wares? for free/.test(text)) {
    floor = Math.max(floor, 50_000_000_000);
    reasons.push('free regional commerce');
  }
  if (/majority share|become the owner|ownership of (?:wario|the company)|buy wario'?s company/.test(text)) {
    floor = Math.max(floor, 1_000_000_000);
    reasons.push('corporate control');
  }
  if (/exponential.{0,30}(?:coin|gold|wealth)|(?:infinite|unlimited|bottomless).{0,24}(?:gold|money|wealth)/.test(text)) {
    floor = Math.max(floor, 10_000_000_000);
    reasons.push('uncapped wealth generation');
  }

  return {
    tier: String(declared.tier || (floor ? 'economy_guarded' : 'standard')),
    floor: Math.round(floor),
    dailyGold,
    protected: floor > 0,
    dealEligible: declared.dealEligible !== false && floor === 0,
    reason: String(declared.reason || reasons.join(' · '))
  };
}

const SCAM_PHRASES = [
  { rx: /all shops?.{0,45}(?:free|no cost)|all shop items?.{0,30}free|wares? for free/, score: 3, label: 'free-everything claim' },
  { rx: /daily income|at dawn.{0,60}(?:receive|produce|generate).{0,40}gold|generate.{0,40}gold.{0,20}(?:daily|each day)/, score: 2, label: 'passive-income promise' },
  { rx: /majority share|become the owner|buy wario'?s company|wario becomes your employee/, score: 2, label: 'ownership-transfer claim' },
  { rx: /(?:infinite|unlimited|bottomless|never empties).{0,25}(?:gold|money|wealth|coins?)/, score: 2, label: 'unlimited-wealth language' },
  { rx: /guaranteed|100% chance|no risk|no drawbacks|cannot fail/, score: 1, label: 'guaranteed outcome' },
  { rx: /definitely not a scam|allegedly|probably|rumou?rs? say|trust wario/, score: 1, label: 'suspicious fine print' },
  { rx: /grants? (?:any|unlimited) wishes?|rewrite reality/, score: 3, label: 'reality-breaking promise' }
];

function assessScamRisk(raw) {
  const text = balanceText(raw);
  const hits = SCAM_PHRASES.filter(rule => rule.rx.test(text));
  let score = hits.reduce((sum, hit) => sum + hit.score, 0);
  if (score && /wario/.test(String(raw.vendor || '').toLowerCase())) score += 1;
  if (!score) return null;
  const level = score >= 5 ? 'critical' : score >= 3 ? 'high' : 'caution';
  return {
    level, score,
    reasons: hits.map(hit => hit.label),
    message: level === 'critical'
      ? 'Wario may take the payment without honoring these extraordinary claims. DM verification is required before any benefit applies.'
      : 'This listing uses suspicious or unusually generous language. Payment is not proof that the advertised benefit works.'
  };
}

/* --------------------------------------------------------------------------
   Catalog normalization (computed once)
   -------------------------------------------------------------------------- */

function normalizeItem(raw, idx) {
  const id = String(raw.id ?? raw.name ?? `item_${idx}`);
  const cat = DEPARTMENTS[raw.category] ? raw.category : 'curiosities';
  const listedPrice = Math.max(0, Number(raw.price ?? 0));
  const economy = assessEconomyImpact(raw);
  const price = Math.max(listedPrice, economy.floor);
  const rarity = String(raw.rarity || 'common').toLowerCase();
  const rating = Math.round((3.2 + hash01(id + '|r') * 1.7) * 10) / 10;           // 3.2 – 4.9
  const reviews = 3 + Math.floor(hash01(id + '|rc') * 2488);
  const cents = String(Math.floor(hash01(id + '|c') * 100)).padStart(2, '0');   // Amazon-style ".42"
  const premiumRarity = ['epic', 'legendary', 'godly', 'wario_tier'].includes(rarity);
  const prime = premiumRarity || hash01(id + '|p') < 0.35;

  // Deals are assigned by the daily rotation after the complete catalog has
  // been normalized. priceOriginal is review history, not a permanent sale.
  const deal = null;

  const vendorId = String(raw.vendor || '').trim();
  const vendor = VENDORS?.[vendorId] || null;
  const vendorLabel = vendor?.name || prettifyVendorId(vendorId) || 'Wario\'s Warehouse Direct';

  /* popularity + rarity decide how broad and how valuable accepted tender is */
  const detected = detectNativeCurrency(raw);
  const payment = acceptedCurrenciesFor(raw, detected, rarity, rating, reviews);

  return {
    id, idx,
    name: String(raw.name || id),
    desc: String(raw.description || ''),
    cat, price, listedPrice, basePrice: price, rarity,
    economy, scam: assessScamRisk(raw),
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
    nativeCur: payment.primary, vendorCur: payment.vendorCurrency, nativeVia: detected.via,
    accepted: payment.accepted, paymentTier: payment.tierLabel,
    paymentTierMin: payment.tierMin, popularity: payment.popularity,
    rating, reviews, cents, prime, deal,
    search: `${id} ${raw.name || ''} ${raw.description || ''} ${raw.category || ''} ${rarity} ${vendorLabel} ${(raw.effects || []).join(' ')}`.toLowerCase(),
    featured: hash01(id + '|f') + rating / 10
  };
}

const ITEMS = Object.values(SHOP_ITEMS || {}).map(normalizeItem);

/* --------------------------------------------------------------------------
   DAILY DEAL ENGINE — a local-calendar rotation, not permanent source flags.
   Eight crowd favourites, eight lower-rated discovery picks, and eight wild
   cards change every day. Prices and checkout use the same normalized value.
   -------------------------------------------------------------------------- */

const DAILY_DEAL_COUNT = 24;
const DAILY_DEAL_MAX_GOLD = 1_000_000;
const DAILY_DEAL_RARITIES = new Set(['junk', 'common', 'uncommon', 'rare']);
let ACTIVE_DEAL_DAY = '';
function localDayKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function dailyRank(list, day, lane) {
  return list.slice().sort((a, b) =>
    hash01(`${day}|${lane}|${a.id}`) - hash01(`${day}|${lane}|${b.id}`));
}

function applyDailyDeals(day = localDayKey()) {
  ACTIVE_DEAL_DAY = day;
  ITEMS.forEach(it => {
    it.price = it.basePrice;
    it.deal = null;
    it.dealKind = '';
    it.featured = hash01(it.id + '|f') + it.rating / 10;
  });

  // Deals are for ordinary stocked goods, never scarce endgame assets. Keeping
  // premium/economy-breaking listings out also prevents misleading "-100%"
  // labels when a historical pre-review price differs wildly from today's list.
  const eligible = ITEMS.filter(it =>
    it.stock > 1 && it.basePrice >= 5 && it.basePrice <= DAILY_DEAL_MAX_GOLD &&
    DAILY_DEAL_RARITIES.has(it.rarity) && it.economy.dealEligible);
  const picked = [];
  const ids = new Set();
  const take = (rows, count, kind) => {
    for (const it of rows) {
      if (picked.length >= DAILY_DEAL_COUNT || count <= 0) break;
      if (ids.has(it.id)) continue;
      ids.add(it.id); picked.push({ it, kind }); count--;
    }
  };
  take(dailyRank(eligible.filter(it => it.popularity >= .64), day, 'popular'), 8, 'Crowd favourite');
  take(dailyRank(eligible.filter(it => it.rating <= 3.8), day, 'discovery'), 8, 'Discovery deal');
  take(dailyRank(eligible, day, 'rotation'), DAILY_DEAL_COUNT - picked.length, 'Daily rotation');

  picked.forEach(({ it, kind }) => {
    const range = kind === 'Discovery deal' ? [15, 25] : kind === 'Crowd favourite' ? [8, 15] : [10, 20];
    const requestedOff = range[0] + Math.floor(hash01(`${day}|discount|${it.id}`) * (range[1] - range[0] + 1));
    const off = Math.max(1, Math.min(25, requestedOff));
    // A deal may never reduce an item by more than 25%, even if future lane
    // settings are accidentally made more aggressive.
    it.price = Math.min(it.basePrice - 1,
      Math.max(Math.ceil(it.basePrice * .75), Math.floor(it.basePrice * (1 - off / 100))));
    const actualOff = Math.max(1, Math.round((1 - it.price / it.basePrice) * 100));
    it.deal = { off: actualOff, was: it.basePrice, day, daily: true };
    it.dealKind = kind;
    it.featured += .35 + actualOff / 100;
  });
}

function dealTimeLeft() {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const mins = Math.max(0, Math.floor((end - now) / 60000));
  return `${Math.floor(mins / 60)}h ${mins % 60}m left`;
}

applyDailyDeals();
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

function canAffordItem(item, acc = currentAccount()) {
  if (!item || item.stock <= 0 || !acc) return false;
  return (item.accepted || ['gold']).some(cid => walletHeld(acc, cid) >= amtIn(item.price, cid));
}

function affordLine(item, acc = currentAccount()) {
  if (!acc) return 'Sign in to compare wallet balances.';
  const ok = (item.accepted || ['gold']).filter(cid => walletHeld(acc, cid) >= amtIn(item.price, cid));
  if (ok.length) return `Affordable with ${ok.slice(0, 3).map(cid => coinIcon(cid) + ' ' + currencyName(cid)).join(', ')}`;
  const cheapest = (item.accepted || ['gold']).map(cid => ({ cid, need: amtIn(item.price, cid), have: walletHeld(acc, cid) }))
    .sort((a, b) => (a.need - a.have) - (b.need - b.have))[0];
  return cheapest ? `Short ${fmt(Math.max(0, cheapest.need - cheapest.have))} ${currencyName(cheapest.cid)}` : 'Not affordable from this wallet.';
}

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
   WALUIPEDIA LINKS — lightweight auto-linking + item lore references
   -------------------------------------------------------------------------- */

let LORE = { entries: [], itemRefs: {} };
let loreLoading = false;
function wikiRoute(kind, id) {
  if (kind === 'currency') return `currency.html#${encodeURIComponent(id)}`;
  if (kind === 'nation') return `battlefield.html#/atlas/${encodeURIComponent(id)}`;
  if (kind === 'location') return `battlefield.html#/article/${encodeURIComponent(id)}`;
  return `battlefield.html#/article/${encodeURIComponent(id)}`;
}
function pushLoreEntry(entries, name, id, kind, summary = '', sub = '') {
  const n = String(name || '').trim(); if (!n || !id || n.length < 5) return;
  const low = n.toLowerCase();
  if (['gold piece','gold pieces','the','wario','item','items'].includes(low)) return;
  entries.push({ name: n, id: String(id), kind, summary: String(summary || '').slice(0, 220), sub: String(sub || ''), route: wikiRoute(kind, id) });
}
function ensureLoreData() {
  if (loreLoading || LORE.entries.length || typeof fetch !== 'function') return;
  loreLoading = true;
  const get = f => fetch(`data/${f}.json`, { cache: 'no-cache' }).then(r => r.ok ? r.json() : null).catch(() => null);
  Promise.all([get('characters'), get('factions'), get('locations'), get('nations'), get('currencies'), get('itemLoreLinks')])
    .then(([characters, factions, locations, nations, currencies, itemRefs]) => {
      const entries = [];
      (Array.isArray(characters) ? characters : []).forEach(c => pushLoreEntry(entries, c.name, c.id, 'character', c.summary || c.description, c.title || c.affiliation));
      (Array.isArray(factions) ? factions : []).forEach(f => pushLoreEntry(entries, f.name, f.id, 'faction', f.summary || f.description, f.type || f.region));
      (Array.isArray(locations) ? locations : []).forEach(l => pushLoreEntry(entries, l.name, l.id, 'location', l.summary || l.description, l.region || l.type));
      (Array.isArray(nations) ? nations : []).forEach(n => pushLoreEntry(entries, n.name, n.id, 'nation', n.summary || n.description, n.region || n.type));
      Object.entries(CURRENCIES || {}).forEach(([id, c]) => pushLoreEntry(entries, c.name, id, 'currency', c.description || c.player_tip || 'Currency tender', `Currency · ${c.base_value || 1}g base`));
      entries.sort((a, b) => b.name.length - a.name.length);
      LORE = { entries: entries.slice(0, 800), itemRefs: itemRefs || {} };
      loreLoading = false;
      const openId = document.getElementById('wzModal')?._wzItemId;
      if (openId && ITEM_BY_ID.has(openId)) { closeModal(); openPdp(openId); }
      else if (['results', 'home', 'wahprime'].includes(S.view)) render();
    })
    .catch(() => { loreLoading = false; });
}
function loreLinkText(text, limit = 4) {
  let html = esc(text);
  if (!LORE.entries.length || !text) return html;
  let count = 0;
  for (const ent of LORE.entries) {
    if (count >= limit) break;
    const safe = ent.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`\\b${safe}\\b`);
    if (re.test(html) && !html.includes(`>${ent.name}</a>`)) {
      html = html.replace(re, `<a class="xlink" data-wiki-id="${esc(ent.id)}" title="${esc(ent.sub || ent.kind)} — ${esc(ent.summary)}" href="${esc(ent.route)}">${esc(ent.name)}</a>`);
      count++;
    }
  }
  return html;
}
function itemLoreHtml(it) {
  ensureLoreData();
  const refs = LORE.itemRefs?.[it.id]?.refs || [];
  if (!refs.length) return '';
  return `<div class="pdp-lore"><h2>Waluipedia cross-links</h2><div class="lore-pills">${refs.slice(0, 10).map(r => `<a class="xlink lore-pill" href="${esc(r.route && r.route.startsWith('#') ? 'battlefield.html' + r.route : (r.route || wikiRoute(r.kind, r.id)))}" title="${esc(r.kind || 'article')}">${esc(r.name || r.id)}</a>`).join('')}</div></div><hr class="pdp-hr">`;
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

/** Expand common rules shorthand so reviewed and legacy titles can be matched. */
function effectTitleTokens(value) {
  return new Set(String(value || '')
    .toLowerCase()
    .replace(/\bac\b/g, 'armor class')
    .replace(/\bhp\b/g, 'hit points')
    .replace(/\bdmg\b/g, 'damage')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim().split(/\s+/)
    .filter(word => word.length > 2 && !['the', 'while', 'with', 'from', 'can', 'for'].includes(word)));
}

function effectTitlesOverlap(a, b) {
  const left = effectTitleTokens(a);
  const right = effectTitleTokens(b);
  if (!left.size || !right.size) return false;
  let shared = 0;
  left.forEach(token => { if (right.has(token)) shared++; });
  return shared >= 2 || shared / Math.min(left.size, right.size) >= .6;
}

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
    /* 1) Match reviewed inline detail by exact title, semantic title, or aligned
       index when the enrichment pipeline supplied one detail per legacy effect. */
    let det = inlineByTitle.get(normTitle(title)) || null;
    if (!det) det = inline.find(d => !used.has(d) && effectTitlesOverlap(title, d.title)) || null;
    if (!det && inline[i] && !used.has(inline[i]) &&
        (!item.effects.length || inline.length === names.length)) det = inline[i];
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

  /* Keep genuinely additional reviewed details, but never append a semantic
     duplicate of a row already resolved from the legacy effects list. */
  inline.forEach(d => {
    const duplicate = rows.some(row => normTitle(row.rules) === normTitle(d.rules) || effectTitlesOverlap(row.title, d.title));
    if (!used.has(d) && d.rules && !duplicate) rows.push({ title: d.title, rules: d.rules, source: 'reviewed' });
  });
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
    .then(j => {
      craftData = j; craftLoading = false; registerCraftCommerce();
      if (S.view === 'crafting' || S.view === 'orders') render();
      if (document.getElementById('wzCart')) renderCartDrawer();
      else updateCartBadge();
    })
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

const CRAFT_RARITY_MULTIPLIER = {
  junk: 1, common: 1, uncommon: 1.15, rare: 1.35, very_rare: 1.6,
  epic: 2, legendary: 2.6, mythic: 3.2, unique: 3.5, cosmic: 4,
  godly: 5, forbidden: 5, wario_tier: 6
};
const forgeMaterialId = id => `forge_material_${String(id || '').replace(/[^a-z0-9_]+/gi, '_')}`;
const forgeRecipeId = id => `forge_recipe_${String(id || '').replace(/[^a-z0-9_]+/gi, '_')}`;

function craftMaterialPrice(material) {
  const base = Math.max(1, Number(material?.cost || 1));
  const multiplier = CRAFT_RARITY_MULTIPLIER[String(material?.rarity || 'common').toLowerCase()] || 1;
  return Math.max(1, Math.ceil(base * multiplier));
}

/** Retail forge quote = ingredients + labor/time + required-level skill + risk. */
function craftRecipeQuote(recipe) {
  const ingredients = (recipe?.materials || []).map(row => {
    const material = craftMatById(row.id);
    const quantity = Math.max(1, Number(row.quantity || 1));
    const unit = craftMaterialPrice(material || { cost: 5, rarity: 'common' });
    return { id: row.id, name: material?.name || row.id, quantity, unit, total: unit * quantity };
  });
  const ingredientTotal = ingredients.reduce((sum, row) => sum + row.total, 0);
  const hours = Math.max(0, Number(recipe?.craftTime || 0));
  const level = Math.max(0, Number(recipe?.levelRequirement || 0));
  const spellLevel = Math.max(0, Number(recipe?.spellLevel || 0));
  const failure = Math.max(0, 100 - Number(recipe?.successChance ?? 100));
  const labor = Math.ceil(hours * 10);
  const skill = Math.ceil(level * level * 4 + spellLevel * 20);
  const risk = Math.ceil(ingredientTotal * failure / 100);
  const forgeFee = Math.max(Math.max(0, Number(recipe?.goldCost || 0)), labor + skill + risk);
  return { ingredients, ingredientTotal, labor, skill, risk, forgeFee, total: Math.max(1, ingredientTotal + forgeFee) };
}

function registerCraftCommerce() {
  if (!craftData) return;
  craftMaterials().forEach((material, index) => {
    const raw = {
      id: forgeMaterialId(material.id), name: material.name, description: material.description,
      category: 'curiosities', price: craftMaterialPrice(material), icon: material.icon || '🧪',
      stock: 999, rarity: material.rarity || 'common',
      effects: [...(material.properties || []), ...(material.effects || [])],
      vendor: 'wario_direct', shippedBy: 'Wario Crafting Forge', levelRequirement: 0,
      shippingDetail: `Forge reagent counter · source: ${material.source || 'warehouse stock'}`
    };
    const item = normalizeItem(raw, ITEMS.length + index);
    item.forgeKind = 'material'; item.forgeSourceId = material.id;
    ITEM_BY_ID.set(item.id, item);
  });
  craftRecipes().forEach((recipe, index) => {
    const quote = craftRecipeQuote(recipe);
    const raw = {
      id: forgeRecipeId(recipe.id), name: recipe.name, description: recipe.description || recipe.effect,
      category: 'services', price: quote.total, icon: recipe.icon || '⚒️', stock: 99,
      rarity: recipe.rarity || 'common', effects: recipe.effect ? [recipe.effect] : [],
      vendor: 'wario_direct', shippedBy: 'Wario Crafting Forge',
      levelRequirement: Number(recipe.levelRequirement || 0),
      shippingDetail: `Made to order in ${recipe.craftTime || '?'} hours. Quote includes ingredients, labor, skill, and failure risk.`
    };
    const item = normalizeItem(raw, ITEMS.length + craftMaterials().length + index);
    item.forgeKind = 'recipe'; item.forgeSourceId = recipe.id; item.forgeQuote = quote;
    ITEM_BY_ID.set(item.id, item);
  });
}

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

const TRAINING_TARGET_FACTIONS = new Set(['disaster_inc', 'disaster_inc_allies']);
const AB_STATE = { q: '', type: '', cls: '', onlyUnlock: false, shown: 60, target: '' };

function apCostFor(level) {
  const tiers = AB?.points?.costTiers?.length ? AB.points.costTiers
    : [{ maxLevel: 3, ap: 1 }, { maxLevel: 7, ap: 2 }, { maxLevel: 11, ap: 3 }, { maxLevel: 99, ap: 5 }];
  const t = tiers.find(x => Number(level) <= Number(x.maxLevel));
  return t ? Number(t.ap) : 5;
}

function apPlayerFor(acc = currentAccount()) {
  const players = AB?.points?.players || {};
  for (const id of acc?.ids || []) if (players[id]) {
    return { key: id, eligibleTarget: TRAINING_TARGET_FACTIONS.has(players[id].faction), ...players[id] };
  }
  return null;
}

function trainableApRoster() {
  const players = AB?.points?.players || {};
  return Object.entries(players)
    .filter(([, p]) => TRAINING_TARGET_FACTIONS.has(p.faction))
    .map(([key, p]) => ({ key, ...p, apAvailable: Math.max(0, Number(p.apAvailable || 0)) }))
    // Preserve the ordering curated in xp.html; this field is emitted by the
    // AP generator specifically so the shop never creates a competing roster.
    .sort((a, b) => Number(a.rosterOrder ?? 99999) - Number(b.rosterOrder ?? 99999));
}

function selectedTrainingTarget() {
  const roster = trainableApRoster();
  if (!roster.length) return null;
  if (!AB_STATE.target || !roster.some(p => p.key === AB_STATE.target)) AB_STATE.target = roster[0].key;
  return roster.find(p => p.key === AB_STATE.target) || roster[0];
}

function getApReceipts() {
  const s = getSession(); if (!s) return [];
  try { return JSON.parse(localStorage.getItem(AP_RECEIPTS_KEY(s.id)) || '[]'); } catch (_) { return []; }
}
function saveApReceipts(list) {
  const s = getSession(); if (!s) return;
  localStorage.setItem(AP_RECEIPTS_KEY(s.id), JSON.stringify(list));
}
function apReservedFor(targetKey = '') { return getApReceipts().filter(r => !targetKey || (r.targetKey || r.playerKey) === targetKey).reduce((n, r) => n + Number(r.apCost || 0), 0); }
function apReserved() { return apReservedFor(); }

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
    .then(j => { LEDGER = Array.isArray(j) ? j : []; ledgerLoading = false; if (S.view === 'orders' || S.view === 'wahprime') render(); renderHeader(); })
    .catch(() => { LEDGER = []; ledgerLoading = false; if (S.view === 'orders' || S.view === 'wahprime') render(); renderHeader(); });
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
   WAHPRIME — subscription status JSON + lifetime tier from paid orders
   -------------------------------------------------------------------------- */

let PRIME_DATA = null;
let primeLoading = false;
function ensurePrimeData() {
  if (PRIME_DATA || primeLoading || typeof fetch !== 'function') return;
  primeLoading = true;
  fetch('data/wahprime-memberships.json')
    .then(r => (r.ok ? r.json() : null))
    .then(j => { PRIME_DATA = j || { plans: {}, memberships: {} }; primeLoading = false; if (S.view === 'wahprime') render(); renderHeader(); })
    .catch(() => { PRIME_DATA = { plans: {}, memberships: {} }; primeLoading = false; if (S.view === 'wahprime') render(); });
}

function primeReceipts() {
  const s = getSession(); if (!s) return [];
  try { return JSON.parse(localStorage.getItem(PRIME_RECEIPTS_KEY(s.id)) || '[]') || []; } catch (_) { return []; }
}
function savePrimeReceipts(list) {
  const s = getSession(); if (!s) return;
  localStorage.setItem(PRIME_RECEIPTS_KEY(s.id), JSON.stringify(list));
}

function primeMembershipFor(acc = currentAccount()) {
  ensurePrimeData();
  const ids = new Set(acc?.ids || []);
  const memberships = PRIME_DATA?.memberships || {};
  for (const [key, m] of Object.entries(memberships)) {
    if ((m.accountIds || [key]).some(id => ids.has(String(id)))) return { key, ...m };
  }
  return acc ? { key: acc.id, accountIds: acc.ids || [acc.id], displayName: acc.name, status: 'inactive', plan: 'standard' } : null;
}

function lifetimeSpendFor(acc = currentAccount()) {
  const paid = ledgerOrdersFor(acc);
  const receiptSpend = getReceipts().reduce((sum, r) => sum + (r.entries || []).reduce((n, e) => n + Number(e.price || 0) * Number(e.qty || 1), 0), 0);
  return {
    paidCount: paid.length,
    paidGold: paid.reduce((n, o) => n + Number(o.price || 0), 0),
    pendingGold: receiptSpend
  };
}

function primeTierFor(acc = currentAccount()) {
  const spend = lifetimeSpendFor(acc);
  const tier = generateTier ? generateTier(0) : (BASE_MEMBERSHIP_TIERS?.[0] || { name: 'Pocket Lint Licker', icon: '🧶', threshold: 0, discount: 0, index: 0 });
  let idx = 0;
  while (idx < 80) {
    const nxt = generateTier(idx + 1);
    if (!nxt || spend.paidGold < Number(nxt.threshold || 0)) break;
    idx++;
  }
  const cur = generateTier(idx) || tier;
  const next = getNextTier ? getNextTier(idx) : generateTier(idx + 1);
  return { tier: cur, next, ...spend };
}

function isPrimeActive(acc = currentAccount()) {
  const m = primeMembershipFor(acc);
  if (!m || String(m.status || '').toLowerCase() !== 'active') return false;
  if (m.paidThrough && new Date(m.paidThrough).getTime() < Date.now()) return false;
  return true;
}

function primePlan(planId = 'standard') {
  return PRIME_DATA?.plans?.[planId] || PRIME_DATA?.plans?.standard || { name: 'WahPrime Standard', monthlyPrice: 99, currency: 'gold', billingCycleDays: 30, benefits: [] };
}

function primeDiscountFor(acc = currentAccount()) {
  if (!isPrimeActive(acc)) return 0;
  const { tier } = primeTierFor(acc);
  return Math.min(25, Number(tier.discount || 0));
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

/** Modern button-popover replacement for native select boxes. */
function choiceMenu(id, value, options, { action = 'data-choice', className = '', aria = 'Choose an option' } = {}) {
  const selected = options.find(o => String(o.value) === String(value)) || options[0] || { value: '', label: 'Choose' };
  return `<details class="choice-menu ${esc(className)}" id="${esc(id)}" data-value="${esc(value)}">
    <summary aria-label="${esc(aria)}"><span class="choice-current">${selected.label}</span><span aria-hidden="true">⌄</span></summary>
    <div class="choice-popover" role="listbox" aria-label="${esc(aria)}">
      ${options.map(o => `<button type="button" role="option" aria-selected="${String(o.value) === String(value)}" ${action}="${esc(o.value)}">${o.label}${o.meta ? `<small>${o.meta}</small>` : ''}</button>`).join('')}
    </div>
  </details>`;
}

function chooseInMenu(menu, value, labelHtml = '') {
  if (!menu) return;
  menu.dataset.value = String(value);
  const button = [...menu.querySelectorAll('[role="option"]')].find(b =>
    Object.values(b.dataset).some(v => String(v) === String(value)));
  menu.querySelectorAll('[role="option"]').forEach(b => b.setAttribute('aria-selected', String(b === button)));
  const current = menu.querySelector('.choice-current');
  if (current) current.innerHTML = labelHtml || button?.innerHTML || esc(value);
  menu.removeAttribute('open');
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

/** Tier-aware accepted-tender line shown once under each card price. */
function acceptsHtml(it, active = null) {
  const coins = it.accepted.map(c => {
    const note = c === it.vendorCur ? 'vendor currency'
      : c === it.nativeCur ? 'primary settlement currency'
      : `accepted ${it.paymentTier.toLowerCase()} tender`;
    return `<span class="acc-coin ${c === (active || it.nativeCur) ? 'on' : ''}" title="${esc(currencyName(c))} — ${esc(note)} — 1 unit = ${currencyBase(c)} gold">${coinIcon(c)}</span>`;
  }).join('');
  return `<span class="p-accepts" title="${esc(it.paymentTier)}: popularity widens tender choice; rarity raises the minimum currency tier."><b>${esc(it.paymentTier)}</b> · ${it.accepted.length} currencies ${coins}</span>`;
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
  view: 'home',            // 'home' | 'results' | 'orders' | 'crafting' | 'abilities' | 'wahprime' | 'info'
  infoSlug: 'about-warizon',
  q: '', dept: 'all', page: 1, sort: 'featured',
  bucket: -1, minStars: 0, rarities: new Set(), vendors: new Set(), currencies: new Set(),
  inStockOnly: false, affordableOnly: false, dealsOnly: false
};

function resetFilters() {
  S.page = 1; S.bucket = -1; S.minStars = 0;
  S.rarities = new Set(); S.vendors = new Set(); S.currencies = new Set();
  S.inStockOnly = false; S.affordableOnly = false; S.dealsOnly = false;
}

function filteredItems() {
  const q = S.q.trim().toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);
  let list = ITEMS;
  if (S.dealsOnly) list = list.filter(it => it.deal?.day === ACTIVE_DEAL_DAY);
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
  if (S.affordableOnly) list = list.filter(it => canAffordItem(it));
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

function showTodaysDeals() {
  resetFilters();
  S.q = ''; S.dept = 'all'; S.sort = 'featured'; S.dealsOnly = true;
  goTo('results');
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

  /* total buying power + WahPrime rank */
  const paySlot = document.getElementById('acctPaySlot');
  if (paySlot && acc) {
    ensureLedger(); ensurePrimeData();
    const totalGold = Object.entries(acc.currencies)
      .reduce((s, [cid, v]) => s + currencyBase(cid) * Number(v || 0), 0);
    const pm = primeMembershipFor(acc);
    const pr = primeTierFor(acc);
    const active = isPrimeActive(acc);
    paySlot.innerHTML = `<div class="pay-label">💳 Total buying power ≈ <b>💰${fmtDec(totalGold, 1)} gold</b>
      <small>Prices are set by each vendor — many items accept local coins, not just gold. The store never charges this wallet directly: checkout issues a purchase order you settle with the DM.</small></div>
      <div class="prime-mini ${active ? 'active' : 'inactive'}">
        <span>${esc(pr.tier.icon || '👑')} <b>${esc(pr.tier.name || 'WahPrime')}</b></span>
        <small>${active ? 'WahPrime benefits active' : `WahPrime ${esc(pm?.status || 'inactive')} — tier progress still tracked`} · ${fmt(pr.paidCount)} paid orders</small>
      </div>`;
  }

  const flyName = document.getElementById('flyHello');
  if (flyName && acc) flyName.textContent = `Hello, ${acc.name.split(' ')[0]}`;
  const flyMember = document.getElementById('flyMembership');
  if (flyMember && acc) { const p = primeTierFor(acc); flyMember.innerHTML = `👑 WahPrime: <b>${isPrimeActive(acc) ? 'ACTIVE' : 'INACTIVE'}</b> · ${esc(p.tier.icon || '')} ${esc(p.tier.name || 'rank')}`; }
  updateCartBadge();
}

/* --------------------------------------------------------------------------
   RENDER: HOME
   -------------------------------------------------------------------------- */

function scamWarningHtml(it, { compact = false } = {}) {
  if (!it.scam) return '';
  const title = it.scam.level === 'critical' ? '🚨 Critical scam risk' : it.scam.level === 'high' ? '⚠ High scam risk' : '⚠ Buyer caution';
  return `<div class="scam-warning ${esc(it.scam.level)} ${compact ? 'compact' : ''}">
    <b>${title}</b>${compact ? '' : `<span>${esc(it.scam.message)}</span><small>Flagged phrases: ${it.scam.reasons.map(esc).join(' · ')}</small>`}
  </div>`;
}

function cardIntelHtml(it, { mini = false } = {}) {
  const rows = effectRowsFor(it);
  const primary = rows.find(r => r.rules) || null;
  const u = usageFor(it);
  const cls = mini ? 'mc' : 'p';
  const descMax = mini ? 118 : 164;
  const ruleMax = mini ? 132 : 188;
  const fallback = rows.length
    ? `${rows.length} listed effect${rows.length === 1 ? '' : 's'} — open for complete table rules.`
    : 'No written rules text found yet; ask the DM before Wario accepts your coins.';
  const ruleText = primary?.rules || fallback;
  const useBits = [];
  if (u?.activation) useBits.push(`⚡ ${shortUse(u.activation, mini ? 18 : 28)}`);
  if (u?.duration) useBits.push(`⏳ ${shortUse(u.duration, mini ? 18 : 28)}`);
  if (u?.charges) useBits.push(`🔢 ${shortUse(u.charges, mini ? 18 : 28)}`);
  if (it.factionBonus) useBits.push(`🚩 ${Object.entries(it.factionBonus).map(([k, v]) => `+${v} ${k}`).join(', ')}`);
  return `<div class="${cls}-intel" data-open="${esc(it.id)}" title="Open ${esc(it.name)} for the full rules card">
    ${it.desc ? `<p class="${cls}-desc">${esc(shortUse(it.desc, descMax))}</p>` : ''}
    <div class="${cls}-rule"><span class="intel-label">${primary ? 'What it does' : 'Rules status'}</span><b>${esc(primary?.title || rows[0]?.title || 'DM note')}</b><em>${esc(shortUse(ruleText, ruleMax))}</em></div>
    ${useBits.length ? `<div class="${cls}-usebits">${useBits.slice(0, mini ? 2 : 3).map(bit => `<span>${esc(bit)}</span>`).join('')}</div>` : ''}
  </div>`;
}

function miniCard(it) {
  const c = it.nativeCur;
  return `<div class="mini-card" data-open="${esc(it.id)}">
    ${it.deal ? `<span class="deal-flag">${it.deal.off}% off · ${esc(it.dealKind)}</span>` : ''}
    <div class="mc-img">${esc(it.icon)}</div>
    <div class="mc-title">${esc(it.name)}</div>
    ${cardIntelHtml(it, { mini: true })}
    ${scamWarningHtml(it, { compact: true })}
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
      <a class="hero-cta hero-cta-secondary" data-go-affordable="1">Show only what I can afford →</a>
    </div>
    <div class="hero-wm">W</div>
    <div class="hero-fade"></div>
  </section>

  <div class="wz-container home-rows">
    <section class="row-card">
      <a class="row-more" data-go-deals="1">See all deals</a>
      <h2>🔥 Today's Deals <span class="deal-clock" data-deal-countdown>${esc(dealTimeLeft())}</span></h2>
      <div class="row-sub">Fresh ${esc(ACTIVE_DEAL_DAY)} rotation: 8–25% off ordinary stocked goods only. Scarce, premium, and economy-guarded assets never enter the sale pool. Changes at local midnight.</div>
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
    <label class="f-check"><input type="checkbox" id="fInStock" ${S.inStockOnly ? 'checked' : ''}> Hide out-of-stock junk</label>
    <label class="f-check"><input type="checkbox" id="fAffordable" ${S.affordableOnly ? 'checked' : ''}> Affordable items only</label>
    <div class="f-help">Checks your signed-in wallet against each item's accepted currencies. No coins are spent until the DM approves a receipt.</div>`;
}

function productCard(it) {
  const out = it.stock <= 0;
  const affordable = canAffordItem(it);
  return `<article class="p-card">
    ${it.deal ? `<span class="deal-flag">${it.deal.off}% off · ${esc(it.dealKind)}</span>` : ''}
    <div class="p-img" data-open="${esc(it.id)}" title="${esc(it.name)}">${esc(it.icon)}</div>
    <div class="p-title" data-open="${esc(it.id)}">${esc(it.name)}</div>
    ${cardIntelHtml(it)}
    ${scamWarningHtml(it, { compact: true })}
    <div class="p-rating">${starsHtml(it.rating)} <span class="r-count">${it.rating} · ${fmt(it.reviews)} ratings</span></div>
    ${priceWidget(it)}
    <div class="p-afford ${affordable ? 'ok' : 'no'}" title="${esc(affordLine(it))}">${affordable ? '✅ Affordable from your wallet' : '🔒 Not affordable right now'}</div>
    <div class="p-accepts-row">${acceptsHtml(it)}</div>
    ${shipLine(it)}
    ${stockLine(it)}
    <div class="p-vendor">Sold by <a data-vendor-link="1">${esc(it.vendorLabel)}</a> · <span class="rarity-chip rarity-${esc(it.rarity)}" style="font-size:9px">${esc(it.rarity.replace('_', ' '))}</span>${it.level ? ` · 🎖 Lv ${it.level}+` : ''}</div>
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
          <div class="rb-count">${S.dealsOnly ? `<b>🔥 Today's ${fmt(total)} rotating deals</b> · <span data-deal-countdown>${esc(dealTimeLeft())}</span><br>` : ''}${fmt(from)}-${fmt(to)} of ${fmt(total)} results${termPart}${deptPart}</div>
          <div class="sort-wrap">Sort by:
            ${choiceMenu('sortMenu', S.sort, [
              { value: 'featured', label: '✨ Featured' },
              { value: 'price-asc', label: '↑ Price: Low to High' },
              { value: 'price-desc', label: '↓ Price: High to Low' },
              { value: 'rating', label: '★ Customer Review' },
              { value: 'newest', label: '🆕 Newest Arrivals' }
            ], { action: 'data-set-sort', className: 'sort-choice', aria: 'Sort results' })}
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
  const img = receiptImageSrc(r.no, r.entries || [], r.tender || {}, r.eta || 'pending', { name: r.ship || 'Warizon Delivery', icon: '📦' });
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
      <div class="oc-receipt-preview"><img alt="Visual receipt ${esc(r.no)}" src="${img}"></div>
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
        <button class="btn-plain" data-copy-receipt="${esc(r.no)}">Copy actual JSON</button>
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
  if (!ctx.target) {
    btn = `<button class="btn-add" disabled>No training target</button>`;
  } else if (known) {
    btn = `<button class="btn-add" disabled>✓ ${esc(ctx.target.name)} knows this</button>`;
  } else if (pending) {
    btn = `<button class="btn-add" disabled>⏳ Requested for ${esc(ctx.target.name)}</button>`;
  } else {
    const canLevel = ctx.target.level >= a.level;
    const canAp = ctx.apLeft >= cost;
    btn = `<button class="btn-add" data-ap-unlock="${esc(a.id)}" ${canLevel && canAp ? '' : 'disabled'}>
      Train target — ${cost} AP${!canLevel ? ` (target needs Lv ${a.level})` : !canAp ? ' (target lacks AP)' : ''}</button>`;
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
    ${knownBy ? `<div class="ab-known">📖 Known by: ${knownBy}${(a.knownBy || []).length > 3 ? ` +${a.knownBy.length - 3}` : ''}</div>` : '<div class="ab-known" style="opacity:.55">Nobody in the public ledger knows this yet.</div>'}
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
  const requester = apPlayerFor(acc);
  const target = selectedTrainingTarget();
  const receiptsAll = getApReceipts();
  const receipts = target ? receiptsAll.filter(r => (r.targetKey || r.playerKey) === target.key) : [];
  const pendingSet = new Set(receipts.map(r => r.abilityId));
  const knownSet = new Set((target?.known || []).map(k => typeof k === 'string' ? k : k.id));
  const apLeft = target ? Math.max(0, Number(target.apAvailable || 0) - apReservedFor(target.key)) : 0;
  const ctx = { requester, target, pendingSet, knownSet, apLeft };

  const abilities = AB.shop?.abilities || [];
  const types = AB.shop?.types || {};
  const classes = AB.shop?.classes || {};
  const roster = trainableApRoster();

  const terms = AB_STATE.q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  let rows = abilities;
  if (AB_STATE.type) rows = rows.filter(a => a.type === AB_STATE.type);
  if (AB_STATE.cls) rows = rows.filter(a => a.class === AB_STATE.cls);
  if (terms.length) rows = rows.filter(a => terms.every(t =>
    `${a.name} ${a.description} ${a.className} ${a.typeLabel}`.toLowerCase().includes(t)));
  if (AB_STATE.onlyUnlock && target) rows = rows.filter(a =>
    !knownSet.has(a.id) && !pendingSet.has(a.id) && target.level >= a.level && apLeft >= apCostFor(a.level));
  rows = rows.slice().sort((a, b) => a.level - b.level || apCostFor(a.level) - apCostFor(b.level) || String(a.name).localeCompare(b.name));

  const targetOptions = roster.map(p => ({
    value: p.key,
    label: `${p.faction === 'disaster_inc' ? '🎲' : '🤝'} ${esc(p.name)}`,
    meta: `Level ${p.level} · ${Math.max(0, Number(p.apAvailable || 0) - apReservedFor(p.key))} AP`
  }));
  const requesterText = requester
    ? `${esc(requester.name)} · ${requester.eligibleTarget ? 'verified Disaster Inc. roster entry' : 'requester only (not an eligible target)'}`
    : `${esc(acc?.name || 'This account')} · no personal AP ledger`;

  const apPanel = target
    ? `<div class="ab-wallet ab-wallet-wide">
        <div class="abw-row"><span>🧑‍🏫 Requester</span><b>${requesterText}</b></div>
        <div class="abw-row"><span>🎯 Training target</span>${choiceMenu('abTargetMenu', target.key, targetOptions, { action: 'data-ab-target', className: 'target-choice', aria: 'Choose a Disaster Inc. member or ally' })}</div>
        <div class="abw-row"><span>⚡ Target AP available</span><b>${apLeft} <small style="color:var(--wz-muted)">(${apReservedFor(target.key)} reserved)</small></b></div>
        <div class="abw-row"><span>📖 Target abilities known</span><b>${knownSet.size}</b></div>
        <div class="abw-row"><span>🛡️ Target policy</span><b>Disaster Inc. members &amp; allies only</b></div>
      </div>`
    : `<div class="ab-wallet"><div class="abw-row"><span>⚠</span><span style="font-size:13px">No eligible Disaster Inc. member/allied entries found in the XP-derived <code>data/abilityPoints.json</code> roster.</span></div></div>`;

  const pendingHtml = receipts.length ? `
    <div class="ab-pending">
      <h3>🧾 Your AP receipts — pending for ${esc(target?.name || 'target')} (${receipts.length})</h3>
      ${receipts.map(r => {
        const a = abilities.find(x => x.id === r.abilityId);
        return `<div class="abp-row">
          <span>${esc(a?.icon || '⚡')} <b>${esc(r.abilityName)}</b> for <b>${esc(r.targetName || r.playerName)}</b> — ${r.apCost} AP <span class="badge-pending">⏳ awaiting DM</span></span>
          <span>
            <button class="btn-plain" data-ap-copy="${esc(r.receiptId)}">Copy JSON</button>
            <button class="btn-plain" data-ap-cancel="${esc(r.receiptId)}">Cancel</button>
          </span>
        </div>
        <details class="oc-json"><summary>Receipt ${esc(r.receiptId)}</summary>
          <textarea readonly rows="11">${esc(JSON.stringify(r, null, 2))}</textarea>
        </details>`;
      }).join('')}
    </div>` : '';

  const typeOpts = [{ value: '', label: '⚡ All types' }]
    .concat(Object.entries(types).map(([k, t]) => ({ value: k, label: `${esc(t.icon || '')} ${esc(t.label || k)}` })));
  const classOpts = [{ value: '', label: '🎓 All classes' }]
    .concat(Object.entries(classes).map(([k, c]) => ({ value: k, label: `${esc(c.icon || '')} ${esc(c.name || k)}` })));

  return `
  <div class="wz-container ab-page" style="margin-top:14px">
    <div class="results-bar ab-hero" style="align-items:flex-start;gap:14px;flex-wrap:wrap">
      <div style="flex:1;min-width:280px">
        <h1 class="page-title" style="margin:0">⚡ Training Wing — Party Upgrade Desk</h1>
        <div style="color:var(--wz-muted);font-size:13px;margin-top:4px">Targets come only from the XP roster's <b>Disaster Inc. — Core</b> and <b>Allies &amp; Attachés</b> groups, in that roster's curated order. Unaffiliated, hostile, and merely nearby characters cannot be selected. Every request generates a DM receipt and never edits a sheet automatically.</div>
      </div>
      ${apPanel}
    </div>
    <div class="ab-suggestion-panel">
      <b>Suggested next upgrade types:</b>
      <span>❤️ Health bump receipt</span><span>💪 Stat training receipt</span><span>🛡️ Defensive reaction</span><span>🗣️ Leader aura</span>
      <small>Health/stat training needs a character-sheet schema pass from the Toad docket before it should write real numbers; for now this desk safely handles ability receipts only.</small>
    </div>
    ${pendingHtml}
    <div class="ab-toolbar">
      ${choiceMenu('abTypeMenu', AB_STATE.type, typeOpts, { action: 'data-ab-type', aria: 'Filter ability type' })}
      ${choiceMenu('abClassMenu', AB_STATE.cls, classOpts, { action: 'data-ab-class', aria: 'Filter ability class' })}
      ${target ? `<label class="f-check" style="white-space:nowrap"><input type="checkbox" id="abUnlockable" ${AB_STATE.onlyUnlock ? 'checked' : ''}> Trainable now</label>` : ''}
      <form id="abSearchForm" style="display:flex;gap:6px;flex:1;max-width:420px;margin-left:auto">
        <input class="gate-input" id="abSearch" value="${esc(AB_STATE.q)}" placeholder="Search abilities (try: fire, stealth, paladin)">
        <button class="search-go" type="submit" style="border-radius:4px;width:42px">🔍</button>
      </form>
    </div>
    <div class="ab-grid">${rows.slice(0, AB_STATE.shown).map(a => abilityCard(a, ctx)).join('')}</div>
    ${rows.length > AB_STATE.shown ? `<button class="btn-plain" id="abMore" style="display:block;margin:16px auto;padding:10px 26px">Show more (${fmt(rows.length - AB_STATE.shown)} left)</button>` : ''}
    ${rows.length === 0 ? `<div class="empty-results"><div class="big">⚡</div><h2>No abilities match</h2><p>Try a different target or fewer filters. Wario cannot teach a rock to backstab. He tried.</p></div>` : ''}
  </div>`;
}


/* --------------------------------------------------------------------------
   FOOTER SUBPAGES — small Warizon help/legal/info pages inside shop.html
   -------------------------------------------------------------------------- */

const INFO_PAGES = {
  'about-warizon': {
    group: 'Get to Know Us', icon: '🏬', title: 'About Warizon', kicker: 'Wario’s Everything Warehouse',
    body: ['Warizon is Wario’s totally legitimate marketplace for adventuring gear, cursed trinkets, faction supplies, groceries, garlic, and things Wario found in a barrel but refuses to call stolen.', 'Every checkout creates a receipt for the DM. The website never subtracts coins by itself, because Wario prefers a paper trail he can deny later.'],
    cards: [['📦 Huge catalog', `${fmt(ITEMS.length)} active listings with item rules, currencies, and stock.`], ['💱 Dynamic tender', 'Accepted currencies are generated from vendor region, item keywords, and the universal Warizon gold reserve.'], ['🧾 Receipts first', 'DM approval turns pending receipts into paid ledger orders.']]
  },
  'careers-unpaid': { group: 'Get to Know Us', icon: '🧹', title: 'Careers (unpaid)', kicker: 'Exposure, garlic fumes, and danger', body: ['Open roles include Warehouse Gremlin, Receipt Goblin, Coin Counter, Return Denial Specialist, and Bullet Bill Logistics Intern.', 'Compensation is currently “Wario might remember your name.” Benefits include free cardboard dust.'], cards: [['Required', 'Ability to lift 50 lb crates while Wario shouts.'], ['Pay', 'Unpaid, but spiritually expensive.'], ['Apply', 'Shout WAH into a mailbox.']] },
  'warios-blog': { group: 'Get to Know Us', icon: '✍️', title: "Wario's Blog", kicker: 'Thought leadership, greed leadership', body: ['Latest post: “Why refunds are a moral hazard.”', 'Previous posts include “Ten ways to monetize garlic breath,” “Gold is better when it is mine,” and “I invented shipping.”'], cards: [['Featured', 'Gold: You are holding it wrong. Give it to Wario.'], ['Opinion', 'Subscription revenue is beautiful.'], ['Breaking', 'Waluigi fact-checkers banned from comments.']] },
  'investor-relations': { group: 'Get to Know Us', icon: '📈', title: 'Investor Relations (give Wario money)', kicker: 'Forward-looking greed statements', body: ['Warizon seeks investors willing to contribute capital while receiving no control, no refunds, and possibly a commemorative garlic sticker.', 'Investor gold is used for “growth,” “logistics,” and “a larger chair for Wario.”'], cards: [['Quarterly metric', 'Receipts up. Regret also up.'], ['Risk factor', 'Wario.'], ['Dividend', 'A confident thumbs-up.']] },
  'sell-loot': { group: 'Make Money with Us', icon: '🎒', title: 'Sell your loot on Warizon', kicker: 'Third-party marketplace desk', body: ['Players can propose loot listings by generating a seller intake receipt. The DM decides whether the item becomes catalog stock.', 'Wario takes a listing fee, a success fee, a breathing fee, and a fee for explaining the fees.'], cards: [['Step 1', 'Bring item, story, rules, and desired currency.'], ['Step 2', 'DM approves listing JSON.'], ['Step 3', 'Wario takes credit.']] },
  'affiliate-goon': { group: 'Make Money with Us', icon: '🕴️', title: 'Become an Affiliate Goon', kicker: 'Links, kickbacks, plausible deniability', body: ['Affiliate Goons receive a tracking phrase and a tiny commission paid in Wario Points unless Wario forgets.', 'Recommended for barkers, town criers, shady bards, and anyone comfortable yelling “limited-time deal.”'], cards: [['Commission', 'Negotiated by yelling.'], ['Tools', 'Banner, coupon phrase, garlic stamp.'], ['Warning', 'Do not outshine Wario.']] },
  'advertise-garlic': { group: 'Make Money with Us', icon: '🧄', title: 'Advertise Your Garlic', kicker: 'Sponsored stench placements', body: ['Buy sponsored slots on Warizon rails. Your garlic appears beside cursed swords, emergency rations, and things that should not be eaten.', 'Ads are interest-based because Wario is interested in money.'], cards: [['Formats', 'Hero shout, rail tile, cart guilt message.'], ['Targeting', 'Everyone with a nose.'], ['Billing', 'Receipt generated; DM approves.']] },
  'popup-vault': { group: 'Make Money with Us', icon: '🏦', title: 'Host a Wario Pop-up Vault', kicker: 'A temporary shop that may become permanent if profitable', body: ['A pop-up vault lets a faction, settlement, or ship host a temporary Warizon kiosk.', 'Wario provides crates, signs, and a contract that grows when nobody is looking.'], cards: [['Good for', 'Festivals, sieges, trials, airships.'], ['Requires', 'Space, guards, exit routes.'], ['Cut', 'Wario gets the loudest percentage.']] },
  'wario-coin': { group: 'Wario Payment Products', icon: '🟡', title: 'Wario Coin', kicker: 'Definitely not a scam', body: ['Wario Coin is accepted by qualifying Wario-aligned listings and can pay Warizon shipping/tax without the extra non-gold conversion fee.', 'Phase 7 tender is dynamic: popular everyday goods accept a broad low/mid-tier mix, while rare goods require fewer, more valuable settlement currencies. Gold appears only when it qualifies for that item tier.'], cards: [['Policy', 'Popularity widens choice; rarity raises the minimum tender value.'], ['Fee', 'Wario Coin pays shipping/tax at face value. Other non-gold tender may pay a 10% conversion fee.'], ['Risk', 'Wario says risk is for customers.']] },
  'reload-stash': { group: 'Wario Payment Products', icon: '💰', title: 'Reload Your Stash', kicker: 'A wallet top-up desk for DM bookkeeping', body: ['This page does not create money. It explains how to ask the DM to update wallet JSON after rewards, banking withdrawals, or approved exchanges.', 'Future version can generate wallet-change receipts, but it should still never edit the ledger automatically.'], cards: [['Source', 'Quest reward, bank withdrawal, currency exchange.'], ['Proof', 'Receipt or DM ruling.'], ['Update', 'DM edits wallet JSON.']] },
  'gift-cards': { group: 'Wario Payment Products', icon: '🎁', title: 'Gift Cards (non-refundable)', kicker: 'The gift of limited liability', body: ['Warizon gift cards are promises to maybe accept value later. They cannot be refunded, divided, appealed, or used to pay Wario’s legal fees unless Wario says so.', 'Gift cards should be represented as DM-approved receipt entries before they affect wallets.'], cards: [['Denominations', 'Tiny, greedy, absurd.'], ['Expiration', 'Whenever Wario “misplaces” it.'], ['Refunds', 'No.']] },
  'your-account': { group: 'Let Us Help You', icon: '👤', title: 'Your Account', kicker: 'Wallet, orders, WahPrime, receipts', body: ['Your account merges matching wallet identities, shows buying power, tracks pending receipts, and filters paid orders from shop-purchases.json.', 'If something is wrong, the DM JSON is the source of truth. Wario is the source of noise.'], cards: [['Orders', 'Paid ledger + pending local receipts.'], ['Wallet', 'Read-only display; no auto-charge.'], ['WahPrime', 'Subscription receipt + membership JSON.']] },
  'shipping-policies': { group: 'Let Us Help You', icon: '🚚', title: 'Shipping Rates & Policies', kicker: 'Fast, slow, unsafe, and suspicious', body: ['Shipping options are selected at checkout. Active WahPrime can unlock free Warp Saver shipping.', 'Shipping and Wario Tax can be paid in an owned currency; Wario Coin is favored, other non-gold tender may include a conversion fee.'], cards: [['Dumpster Roll', 'Cheap, slow, raccoon-adjacent.'], ['Parakarry Post', 'Standard delivery. Usually lands upright.'], ['Bullet Bill', 'Fast. Define “safe.”']] },
  'returns-none': { group: 'Let Us Help You', icon: '🚫', title: 'Returns (there are none)', kicker: 'The policy is the title', body: ['All sales final. If the item curses you, that means the item is working.', 'The DM may reverse a mistaken ledger entry, but Warizon itself offers no refunds, exchanges, apologies, or emotional closure.'], cards: [['Refunds', 'No.'], ['Exchanges', 'Also no.'], ['Cursed item?', 'Premium feature.']] },
  'help-good-luck': { group: 'Let Us Help You', icon: '🆘', title: 'Help (good luck)', kicker: 'A help center-shaped maze', body: ['Try search, filters, affordable mode, Orders, WahPrime, or Training Wing. If the problem involves actual money, the DM ledger wins.', 'If the problem involves Wario, there is no known cure.'], cards: [['Need item rules?', 'Open product page and read Quick Read + Item effects.'], ['Need proof of purchase?', 'Copy receipt JSON from the receipt modal or Orders page.'], ['Need currency?', 'Open Waluipedia Currency Exchange.']] },
  'conditions-of-use': { group: 'Legal', icon: '📜', title: 'Conditions of Use', kicker: 'By browsing you have already lost', body: ['Use of Warizon constitutes acceptance of Wario’s right to brag, upsell, and shout. The site is a static shop interface; the DM ledger is authoritative.', 'Do not treat pending receipts as paid orders until the DM records approval.'], cards: [['Receipts', 'Proof request, not automatic fulfillment.'], ['Wallets', 'Never edited by checkout.'], ['Disputes', 'Settled by DM, not Wario.']] },
  'greed-notice': { group: 'Legal', icon: '🪙', title: 'Greed Notice', kicker: 'Your data is less valuable than your coins, but Wario wants both', body: ['Warizon stores carts and pending receipts in browser localStorage so players can copy JSON for the DM.', 'No server checkout exists here. If Wario claims otherwise, ask him to produce a receipt.'], cards: [['LocalStorage', 'Session, cart, pending receipts.'], ['JSON files', 'DM-maintained source of truth.'], ['Gold', 'Emotionally collected by Wario.']] },
  'interest-based-ads': { group: 'Legal', icon: '📣', title: 'Interest-Based Ads', kicker: 'Wario is interested in selling you things', body: ['Recommendations use deterministic catalog flavor, not real surveillance. Wario calls this “guessing with confidence.”', 'Sponsored garlic placements may appear in future. They will still smell.'], cards: [['Signals', 'Search, category, item metadata.'], ['Privacy', 'Static site; mostly local.'], ['Opt out', 'Close your eyes.']] }
};

function renderInfoPage() {
  const p = INFO_PAGES[S.infoSlug] || INFO_PAGES['about-warizon'];
  const related = Object.entries(INFO_PAGES).filter(([, x]) => x.group === p.group && x.title !== p.title).slice(0, 4);
  return `<div class="wz-container info-page">
    <section class="info-hero">
      <div class="info-icon">${esc(p.icon)}</div>
      <div><div class="pdp-kicker">${esc(p.group)}</div><h1>${esc(p.title)}</h1><p>${esc(p.kicker)}</p></div>
    </section>
    <section class="info-panel">
      ${p.body.map(x => `<p>${loreLinkText(x, 4)}</p>`).join('')}
      <div class="info-cards">${(p.cards || []).map(([h, b]) => `<div><b>${esc(h)}</b><span>${loreLinkText(b, 3)}</span></div>`).join('')}</div>
    </section>
    <section class="info-panel">
      <h2>What can you do here?</h2>
      <div class="info-actions">
        <button class="btn-add" data-go-shop="1">Return to Warizon</button>
        <button class="btn-add" data-go-affordable="1">Shop affordable items</button>
        <button class="btn-buy" data-go-prime="1">Open WahPrime</button>
        <a class="btn-plain info-a" href="currency.html">💱 Waluipedia Currency Exchange</a>
      </div>
    </section>
    ${related.length ? `<section class="info-panel"><h2>More in ${esc(p.group)}</h2><div class="info-related">${related.map(([slug, r]) => `<button data-foot="${esc(slug)}"><span>${esc(r.icon)}</span><b>${esc(r.title)}</b><small>${esc(r.kicker)}</small></button>`).join('')}</div></section>` : ''}
  </div>`;
}

/* --------------------------------------------------------------------------
   RENDER: WahPrime membership dashboard
   -------------------------------------------------------------------------- */

function renderWahPrime() {
  ensureLedger(); ensurePrimeData();
  const acc = currentAccount();
  const membership = primeMembershipFor(acc);
  const plan = primePlan(membership?.plan || 'standard');
  const prog = primeTierFor(acc);
  const active = isPrimeActive(acc);
  const nextNeed = prog.next ? Math.max(0, Number(prog.next.threshold || 0) - prog.paidGold) : 0;
  const pct = prog.next ? Math.max(2, Math.min(100, (prog.paidGold / Math.max(1, Number(prog.next.threshold || 1))) * 100)) : 100;
  const receipts = primeReceipts();
  const vault = ITEMS.filter(it => it.prime || it.cat === 'premium' || ['legendary', 'mythic', 'godly', 'wario_tier'].includes(it.rarity))
    .sort((a, b) => b.price - a.price).slice(0, 8);
  const planOptions = Object.entries(PRIME_DATA?.plans || { standard: plan }).map(([id, p]) =>
    `<button class="prime-plan ${id === (membership?.plan || 'standard') ? 'pick' : ''}" data-prime-plan="${esc(id)}">
      <b>${esc(p.name || id)}</b><span>${coinIcon(p.currency || 'gold')} ${fmt(p.monthlyPrice || 0)} / ${fmt(p.billingCycleDays || 30)} days</span>
      <small>${(p.benefits || []).slice(0, 3).map(esc).join(' · ')}</small>
    </button>`).join('');
  const ladderStart = Math.max(0, Number(prog.tier.index || 0) - 1);
  const tierLadder = Array.from({ length: 7 }, (_, i) => generateTier(ladderStart + i)).filter(Boolean);
  const benefitRows = [
    ['Free Warp Saver shipping', active ? 'Active now' : 'Needs active membership', 'Appears as a checkout shipping option.'],
    ['Tier discount display', `${fmt(primeDiscountFor(acc))}%`, 'Based on lifetime approved spend and active status.'],
    ['Vault previews', 'Always visible', 'Premium rails show what Wario wants you to crave.'],
    ['Payment receipts', 'JSON-backed', 'Subscription payments are receipts until DM approval.'],
    ['Late payment handling', 'Suspends benefits', 'Lifetime rank remains; benefits pause if paidThrough expires.']
  ];
  const pendingHtml = receipts.length ? `
    <section class="prime-panel">
      <h2>🧾 Pending WahPrime subscription receipts</h2>
      ${receipts.map(r => `<div class="prime-receipt-row">
        <span><b>${esc(r.receiptId)}</b> · ${esc(r.planName)} · ${coinIcon(r.currency)} ${fmt(r.amount)} <span class="badge-pending">awaiting DM payment approval</span></span>
        <span><button class="btn-plain" data-prime-copy="${esc(r.receiptId)}">Copy JSON</button><button class="btn-plain" data-prime-cancel="${esc(r.receiptId)}">Cancel</button></span>
        <details class="oc-json"><summary>Receipt JSON</summary><textarea readonly rows="10">${esc(JSON.stringify(r, null, 2))}</textarea></details>
      </div>`).join('')}
    </section>` : '';

  return `<div class="wz-container prime-page">
    <section class="prime-hero">
      <div>
        <div class="pdp-kicker">WahPrime subscription office</div>
        <h1>👑 WahPrime is real now. Wario has paperwork.</h1>
        <p>Subscription status comes from <code>data/wahprime-memberships.json</code>. Buying more approved Warizon orders raises your lifetime tier; active subscription status unlocks live site benefits.</p>
        <div class="prime-actions"><button class="btn-buy" data-prime-subscribe="${esc(membership?.plan || 'standard')}">${active ? 'Renew / extend WahPrime' : 'Generate WahPrime payment receipt'}</button><button class="btn-add" data-go-affordable="1">Shop affordable items</button></div>
      </div>
      <div class="prime-card-big ${active ? 'active' : 'inactive'}">
        <span class="pcrown">${esc(prog.tier.icon || '👑')}</span>
        <b>${esc(prog.tier.name || 'WahPrime Rank')}</b>
        <small>${active ? 'Benefits ACTIVE' : 'Benefits INACTIVE until DM records payment'}</small>
      </div>
    </section>

    <section class="prime-grid-top">
      <div class="prime-panel prime-status">
        <h2>Membership status</h2>
        <div class="prime-status-line"><span>Account</span><b>${esc(acc?.name || 'Unknown')}</b></div>
        <div class="prime-status-line"><span>Plan</span><b>${esc(plan.name || 'WahPrime Standard')}</b></div>
        <div class="prime-status-line"><span>Status</span><b class="${active ? 'good' : 'bad'}">${active ? 'ACTIVE' : esc(membership?.status || 'inactive').toUpperCase()}</b></div>
        <div class="prime-status-line"><span>Paid through</span><b>${esc(membership?.paidThrough || 'not paid')}</b></div>
        <div class="prime-status-line"><span>Collector</span><b>${esc(membership?.collector || 'Wario')}</b></div>
        <p>${esc(membership?.collectionMethod || 'Generate a receipt here, pay the DM, then the DM updates the JSON.')}</p>
      </div>
      <div class="prime-panel prime-progress">
        <h2>Lifetime buyer tier</h2>
        <div class="tier-badge" style="--tier-c:${esc(prog.tier.color || '#6b3fa0')}"><span>${esc(prog.tier.icon || '👑')}</span><b>${esc(prog.tier.name || 'Tier')}</b><em>${fmt(prog.paidCount)} paid orders · 💰${fmt(prog.paidGold)} lifetime approved spend</em></div>
        <div class="prime-meter"><span style="width:${pct}%"></span></div>
        <p>${prog.next ? `Next rank: <b>${esc(prog.next.icon || '')} ${esc(prog.next.name)}</b> after 💰${fmt(nextNeed)} more approved purchases.` : 'Top tier reached. Wario is both impressed and afraid.'}</p>
        <p class="prime-note">Pending receipts add 💰${fmt(prog.pendingGold)} potential spend, but tier only increases after DM approval in <code>shop-purchases.json</code>.</p>
      </div>
      <div class="prime-panel prime-benefits">
        <h2>Live website effects</h2>
        <ul>
          <li>${active ? '✅' : '🔒'} Free <b>WahPrime Warp Saver</b> shipping option appears at checkout for active members.</li>
          <li>${active ? '✅' : '🔒'} Member discount display: <b>${fmt(primeDiscountFor(acc))}%</b> tier rebate shown on eligible premium cards.</li>
          <li>✅ Lifetime tier and progress are visible even while inactive.</li>
          <li>✅ Affordable-only mode can be combined with WahPrime/premium browsing.</li>
        </ul>
      </div>
    </section>

    <section class="prime-panel prime-plans">
      <h2>Choose how Wario collects</h2>
      <p>These buttons do not charge a wallet. They create a subscription receipt for the DM to approve, just like item checkout.</p>
      <div class="prime-plan-grid">${planOptions}</div>
    </section>

    <section class="prime-panel">
      <h2>WahPrime benefits matrix</h2>
      <div class="prime-benefit-table">${benefitRows.map(([name, state, detail]) => `<div><b>${esc(name)}</b><span>${esc(state)}</span><small>${esc(detail)}</small></div>`).join('')}</div>
    </section>

    <section class="prime-panel">
      <h2>Lifetime tier ladder</h2>
      <p class="prime-note">Tier is generated dynamically from approved paid spend. This is separate from subscription status: a rich inactive customer still has rank, just no live benefits.</p>
      <div class="prime-tier-ladder">${tierLadder.map(t => `<div class="${t.id === prog.tier.id ? 'cur' : ''}" style="--tier-c:${esc(t.color || '#6b3fa0')}"><span>${esc(t.icon || '👑')}</span><b>${esc(t.name)}</b><small>Requires 💰${fmt(t.threshold || 0)} · ${fmt(t.discount || 0)}% · max item ${t.maxPrice === Infinity ? '∞' : '💰' + fmt(t.maxPrice || 0)}</small></div>`).join('')}</div>
    </section>

    <section class="prime-panel">
      <h2>How Wario collects WahPrime payments</h2>
      <div class="prime-flow"><div><b>1</b><span>Player generates subscription receipt.</span></div><div><b>2</b><span>Player pays the DM in listed tender.</span></div><div><b>3</b><span>DM updates <code>wahprime-memberships.json</code>.</span></div><div><b>4</b><span>Website shows benefits active next load.</span></div></div>
    </section>

    ${pendingHtml}

    <section class="prime-panel">
      <h2>👑 WahPrime Vault previews</h2>
      <div class="prime-vault-grid">${vault.map(it => productCard(it)).join('')}</div>
    </section>
  </div>`;
}

function generatePrimeReceipt(planId = 'standard') {
  const acc = currentAccount(); if (!acc) return;
  ensurePrimeData();
  const p = primePlan(planId);
  const amount = Number(p.monthlyPrice || 0);
  const cid = p.currency || 'gold';
  if (amount > 0 && walletHeld(acc, cid) < amount) {
    toast(`WahPrime requires ${coinIcon(cid)} <b>${fmt(amount)}</b> ${esc(currencyName(cid))}; your wallet only shows ${fmt(walletHeld(acc, cid))}. Wario refuses imaginary money.`);
    return;
  }
  const receipt = {
    receiptId: 'WP-' + hash01(Date.now() + acc.id + planId).toString(16).slice(2).toUpperCase().padStart(8, '0').slice(0, 8),
    type: 'WAHPRIME_SUBSCRIPTION',
    accountId: acc.id,
    accountIds: acc.ids || [acc.id],
    accountName: acc.name,
    planId,
    planName: p.name || planId,
    amount,
    currency: cid,
    nativeTotal: amount,
    billingCycleDays: Number(p.billingCycleDays || 30),
    requestedAt: new Date().toISOString(),
    paidThroughAfterApproval: new Date(Date.now() + Number(p.billingCycleDays || 30) * 864e5).toISOString().slice(0, 10),
    approvedAt: null,
    approvedBy: null,
    status: 'PENDING_PAYMENT',
    instructions: 'Player pays the DM. DM updates data/wahprime-memberships.json status/paidThrough manually. The website never subtracts coins.'
  };
  const list = primeReceipts();
  list.push(receipt); savePrimeReceipts(list);
  sfx('confirm'); render();
  toast(`👑 WahPrime receipt <b>${esc(receipt.receiptId)}</b> generated. Pay the DM; Wario will not forget.`);
}

/* --------------------------------------------------------------------------
   RENDER: CRAFTING FORGE
   -------------------------------------------------------------------------- */

function craftRecipeCard(r) {
  const sc = craftSchools()[String(r.school || '').toUpperCase()];
  const col = sc?.color || craftColor(r.rarity);
  const quote = craftRecipeQuote(r);
  const mats = (r.materials || []).map(m => {
    const meta = craftMatById(m.id);
    const unit = craftMaterialPrice(meta || { cost: 5 });
    return `<button class="cf-mat" data-forge-buy-material="${esc(m.id)}" data-forge-qty="${Math.max(1, Number(m.quantity || 1))}" title="Buy ${esc(meta?.name || m.id)} directly from the Forge">
      <span>${esc(meta?.icon || '•')}</span>
      <span class="cf-mat-n">${esc(meta?.name || m.id)}</span>
      <span class="cf-mat-q">×${m.quantity || 1} · 💰${fmt(unit * Math.max(1, Number(m.quantity || 1)))}</span>
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
      <div class="cf-cost">${fmt(quote.total)}<span>g retail</span></div>
    </div>
    ${r.description ? `<p class="cf-desc">${esc(r.description)}</p>` : ''}
    ${r.effect ? `<div class="cf-effect">✨ ${esc(r.effect)}</div>` : ''}
    <div class="cf-stats">
      ${r.craftTime ? `<span>⏱ ${esc(String(r.craftTime))}h</span>` : ''}
      ${success ? `<span class="${success >= 80 ? 'good' : success >= 50 ? 'mid' : 'bad'}">✓ ${success}% success</span>` : ''}
      <span class="cf-type">${esc(r.category || r.type || 'recipe')}</span>
    </div>
    ${mats ? `<div class="cf-mats"><small>Ingredients — tap one to buy it now:</small>${mats}</div>` : ''}
    <div class="cf-quote"><span>Ingredients <b>💰${fmt(quote.ingredientTotal)}</b></span><span>Forge fee <b>💰${fmt(quote.forgeFee)}</b></span><small>Fee = labor (${fmt(quote.labor)}) + level/spell skill (${fmt(quote.skill)}) + failure risk (${fmt(quote.risk)}), with the recipe's listed fee as minimum.</small></div>
    <div class="cf-buy-actions"><button class="btn-buy" data-forge-buy-recipe="${esc(r.id)}">Buy crafted item · 💰${fmt(quote.total)}</button><button class="btn-add" data-forge-add-recipe="${esc(r.id)}">Add to Cart</button></div>
  </article>`;
}

function craftMaterialCard(m) {
  const price = craftMaterialPrice(m);
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
      <div class="cf-cost">${fmt(price)}<span>g each</span></div>
    </div>
    ${m.description ? `<p class="cf-desc">${esc(m.description)}</p>` : ''}
    ${(m.effects || []).length ? `<div class="cf-effect">✨ ${esc(m.effects.join(' · '))}</div>` : ''}
    ${m.source ? `<div class="cf-src">🗺 ${esc(m.source)}</div>` : ''}
    <div class="cf-buy-actions"><button class="btn-buy" data-forge-buy-material="${esc(m.id)}">Buy Now · 💰${fmt(price)}</button><button class="btn-add" data-forge-add-material="${esc(m.id)}">Add to Cart</button></div>
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
        ${choiceMenu('craftSchoolMenu', C.school, [
          { value: '', label: '🔮 All schools' },
          ...Object.entries(craftSchools()).map(([key, sc]) => ({ value: key, label: `${esc(sc.icon || '')} ${esc(sc.name)}` }))
        ], { action: 'data-craft-school-filter', aria: 'Filter by crafting school' })}
        ${choiceMenu('craftCategoryMenu', C.cat, [
          { value: '', label: '📜 All recipe types' },
          ...cats.map(c => ({ value: c, label: esc(c) }))
        ], { action: 'data-craft-category-filter', aria: 'Filter by recipe type' })}
        <span style="color:var(--wz-muted);font-size:12px">${fmt(rows.length)} of ${fmt(craftRecipes().length)} recipes</span>
      </div>
      <div class="cf-grid">${rows.slice(0, C.shown).map(craftRecipeCard).join('')}</div>
      ${rows.length > C.shown ? `<button class="btn-plain" id="craftMore" style="display:block;margin:16px auto;padding:10px 26px">Show more recipes (${fmt(rows.length - C.shown)} left)</button>` : ''}
      ${rows.length === 0 ? `<div class="empty-results"><div class="big">⚗️</div><h2>No recipes match</h2><p>Try fewer words — "fire", "scroll", "healing". Wario suggests "gold".</p></div>` : ''}`;
  } else if (C.tab === 'materials') {
    const rows = filterScore(craftMaterials());
    body = `<div class="cf-toolbar"><span style="color:var(--wz-muted);font-size:12px">${fmt(rows.length)} of ${fmt(craftMaterials().length)} reagents — all ingredients are sold directly by the Forge, including Blank Parchment.</span></div>
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
  else if (S.view === 'wahprime') view.innerHTML = renderWahPrime();
  else if (S.view === 'info') view.innerHTML = renderInfoPage();
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
          <p>${loreLinkText(r.rules, 3)}</p>
        </div>
      </div>`).join('')}
    </div>
    ${usageRows ? `<div class="fx-usage">${usageRows}</div>` : ''}
  </div><hr class="pdp-hr">`;
}

function openPdp(id, useCur = null) {
  const it = ITEM_BY_ID.get(id);
  if (!it) return;
  ensureEffectCatalog();   // warm the supplement catalog
  ensureLoreData();        // warm Waluipedia cross-links
  const cur = (useCur && it.accepted.includes(useCur)) ? useCur : it.nativeCur;
  const vendorName = it.vendorLabel;
  const out = it.stock <= 0;
  const maxQty = Math.min(Math.max(it.stock, 0), 10);

  closeModal();
  const scrim = document.createElement('div');
  scrim.className = 'modal-scrim';
  scrim.id = 'wzModal';
  scrim._wzItemId = id;

  const currencyButtons = it.accepted.map(c =>
    `<button type="button" class="tender-chip ${c === cur ? 'active' : ''}" data-pdp-currency="${esc(c)}" aria-pressed="${c === cur}">
      <span>${coinIcon(c)}</span><b>${esc(currencyName(c))}</b><small>${fmt(amtIn(it.price, c))}${c === it.vendorCur ? ' · vendor coin' : c === it.nativeCur ? ' · primary' : ''}</small>
    </button>`).join('');

  scrim.innerHTML = `
  <div class="modal pdp-modal" role="dialog" aria-modal="true">
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
        <div class="pdp-requirements">
          <span title="${esc(it.levelReason || 'Minimum safe character level')}">🎖 ${it.level ? `Level ${it.level}+ required` : 'No level requirement'}</span>
          ${it.warning ? `<span class="warn">⚠ ${esc(it.warning)}</span>` : ''}
        </div>
        <div class="pdp-quick-read">
          <div class="qr-head"><span>✨ Quick read</span><b>${esc(DEPARTMENTS[it.cat].label)}</b></div>
          ${it.desc ? `<p>${loreLinkText(it.desc, 6)}</p>` : '<p>Wario forgot to write a description, which is legally distinct from suspicious.</p>'}
        </div>
        ${scamWarningHtml(it)}
        ${it.economy.protected ? `<div class="economy-guard"><b>🏦 Economy-guarded price</b><span>This listing is excluded from daily deals and cannot fall below 💰${fmt(it.economy.floor)} gold.</span>${it.economy.reason ? `<small>${esc(it.economy.reason)}</small>` : ''}</div>` : ''}
        <hr class="pdp-hr">
        ${itemLoreHtml(it)}
        ${effectsSectionHtml(it)}
      </div>

      <aside class="pdp-buybox">
        <div class="bb-price"><span class="sym">${coinIcon(cur)}</span><span class="whole">${fmt(amtIn(it.price, cur))}</span><span class="frac">${cur === 'gold' ? '' : esc(currencyName(cur))}</span></div>
        ${cur !== 'gold' ? `<div class="p-was">≈ 💰${fmt(it.price)} gold</div>` : ''}
        ${it.deal ? `<div class="p-was">Daily list: <s>${coinIcon(cur)}${fmt(amtIn(it.deal.was, cur))}</s> <span style="color:var(--wz-deal-red);font-weight:700">-${it.deal.off}%</span> · <span data-deal-countdown>${esc(dealTimeLeft())}</span></div>` : ''}
        <div class="tender-picker">
          <div class="tender-picker-head"><b>💱 Choose tender</b><span>${esc(it.paymentTier)} · ${it.accepted.length} options</span></div>
          <div class="tender-chip-grid">${currencyButtons}</div>
          <small>Rarity requires currencies worth at least ${it.paymentTierMin || 0} gold each. Popular everyday items accept more options.</small>
        </div>
        <div class="pdp-delivery"><b>${it.prime ? '<span class="wahprime">wahprime</span> FREE delivery' : 'Economy delivery'} · ${deliveryLabel(it.id)}</b>${it.shippedBy ? `<span>🚚 Fulfilled by ${esc(it.shippedBy)}</span>` : ''}${it.shippingDetail ? `<small>${esc(it.shippingDetail)}</small>` : ''}</div>
        ${out ? '<div class="bb-stock low">Currently unavailable</div>' : it.stock <= 3 ? `<div class="bb-stock low">Only ${it.stock} left in stock - order soon.</div>` : `<div class="bb-stock">In Stock · ${it.stock} available</div>`}
        ${!out ? `<div class="qty-stepper" id="pdpQty" data-value="1" data-max="${maxQty}" aria-label="Quantity"><button type="button" data-pdp-qty-dec aria-label="Decrease quantity">−</button><b data-pdp-qty-value>1</b><button type="button" data-pdp-qty-inc aria-label="Increase quantity">+</button></div>` : ''}
        <div class="bb-btns">
          <button class="btn-add" data-pdp-add="${esc(it.id)}" ${out ? 'disabled' : ''}>Add to Cart</button>
          <button class="btn-buy" data-pdp-buy="${esc(it.id)}" ${out ? 'disabled' : ''}>Buy Now</button>
        </div>
        <div class="secure-note">🔒 Secure purchase order · you pay the DM, never this page.</div>
        <div class="pdp-return-note">↩ No returns or refunds.</div>
      </aside>
    </div>
  </div>`;
  document.body.appendChild(scrim);
  scrim.addEventListener('click', e => {
    if (e.target === scrim || e.target.closest('[data-close]')) closeModal();
    const currency = e.target.closest('[data-pdp-currency]');
    if (currency) openPdp(id, currency.dataset.pdpCurrency);
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
  if (isPrimeActive(acc)) {
    shipOpts.unshift({ name: 'WahPrime Warp Saver', deliveryTime: '1-2 days', cost: 0, icon: '👑', description: 'Active WahPrime benefit — free member shipping on this receipt' });
  }
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
  /* Default each line to the primary tender, or the first accepted currency
     the buyer actually holds. Never fall back to an unaccepted gold option. */
  rows.forEach((r, i) => {
    const it = ITEM_BY_ID.get(r.id);
    if (!it) return;
    const heldAccepted = it.accepted.find(cid => walletHeld(acc, cid) > 0);
    coState.rowCur[i] = walletHeld(acc, it.nativeCur) > 0 ? it.nativeCur : (heldAccepted || it.nativeCur);
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
              const tender = it.accepted.map(c => {
                const held = walletHeld(acc, c);
                return `<button type="button" class="co-tender-chip ${c === rp.cur ? 'active' : ''}" data-row-cur="${i}" data-currency="${esc(c)}" aria-pressed="${c === rp.cur}" title="Held: ${fmt(held)} ${esc(currencyName(c))}">${coinIcon(c)} <b>${fmt(amtIn(it.price, c) * rp.qty)}</b><small>held ${fmt(held)}</small></button>`;
              }).join('');
              return `<div class="co-item co-pay-row">
                <div class="ci-img">${esc(it.icon)}</div>
                <div class="co-pay-mid">
                  <span class="co-pay-name">${esc(it.name)} <span class="ci-qty">×${rp.qty}</span></span>
                  <small class="co-pay-note">${esc(it.paymentTier)} · choose one of ${it.accepted.length} accepted currencies</small>
                  ${it.scam ? `<small class="co-scam-note">⚠ ${esc(it.scam.level.toUpperCase())} SCAM RISK — DM verification required</small>` : ''}
                  <div class="co-tender-grid">${tender}</div>
                </div>
                <span class="co-pay-amt">Owed: ${coinIcon(rp.cur)} <b>${fmt(rp.native)}</b>${rp.cur !== 'gold' ? `<small> ≈ 💰${fmt(rp.lineGold)}</small>` : ''}</span>
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
              <span>Pay shipping + 5% Wario Tax (💰${fmt(shipCost + tax)}) with</span>
              ${choiceMenu('shipTaxMenu', coState.shipTaxCur, ownedCurs.map(cid => ({
                value: cid,
                label: `${coinIcon(cid)} ${esc(currencyName(cid))}`,
                meta: `Held ${fmt(walletHeld(acc, cid))}${cid === 'wario_coin' ? ' · no fee' : cid !== 'gold' ? ' · 10% fee' : ''}`
              })), { action: 'data-ship-tax-cur', aria: 'Choose tax and shipping currency' })}
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
  });
  scrim.addEventListener('click', e => {
    if (e.target === scrim || e.target.closest('[data-close]')) closeModal();
    const rowTender = e.target.closest('[data-row-cur]');
    if (rowTender) {
      coState.rowCur[Number(rowTender.dataset.rowCur)] = rowTender.dataset.currency;
      scrim.innerHTML = renderCo(); return;
    }
    const taxTender = e.target.closest('[data-ship-tax-cur]');
    if (taxTender) {
      coState.shipTaxCur = taxTender.dataset.shipTaxCur;
      scrim.innerHTML = renderCo(); return;
    }
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
    scamRisk: rp.it.scam ? { level: rp.it.scam.level, reasons: rp.it.scam.reasons, dmVerificationRequired: true } : null,
    economyGuardFloor: rp.it.economy.protected ? rp.it.economy.floor : null,
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


function receiptImageSrc(no, entries, tender, eta, ship) {
  const lines = entries.slice(0, 5).map((e, i) => {
    const y = 182 + i * 24;
    const name = String(e.itemName || e.itemId || 'Item').slice(0, 34);
    return `<text x="42" y="${y}" class="item">${esc(name)} x${e.qty || 1}</text><text x="488" y="${y}" text-anchor="end" class="amt">${fmt(Number(e.price || 0) * Number(e.qty || 1))}g</text>`;
  }).join('');
  const tenderText = Object.entries(tender || {}).map(([cid, amt]) => `${fmt(amt)} ${currencyName(cid)}`).join(' + ').slice(0, 54);
  const bars = String(no).split('').map((ch, i) => `<rect x="${42 + i * 9}" y="335" width="${3 + (ch.charCodeAt(0) % 4)}" height="38" fill="#221431" opacity=".85"/>`).join('');
  const total = entries.reduce((n, e) => n + Number(e.price || 0) * Number(e.qty || 1), 0);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="540" height="410" viewBox="0 0 540 410">
    <style>.h{font:800 28px Arial;fill:#221431}.s{font:12px Arial;fill:#565959}.k{font:700 11px Arial;fill:#6b3fa0;text-transform:uppercase}.item{font:13px Arial;fill:#111}.amt{font:700 13px Arial;fill:#b12704}.big{font:800 20px Arial;fill:#0f1111}</style>
    <rect width="540" height="410" rx="26" fill="#fff8e6"/><rect x="18" y="18" width="504" height="374" rx="18" fill="#fff" stroke="#ff9900" stroke-width="3"/>
    <text x="42" y="62" class="h">warizon<tspan fill="#ff9900">.wah</tspan></text><text x="42" y="86" class="s">OFFICIAL PURCHASE ORDER — NOT PAID UNTIL DM APPROVES</text>
    <rect x="42" y="108" width="456" height="46" rx="10" fill="#3b1f6b"/><text x="60" y="137" fill="#ffd86b" font-family="Arial" font-size="18" font-weight="800">${esc(no)}</text><text x="488" y="137" text-anchor="end" fill="#fff" font-family="Arial" font-size="13">${esc(ship?.icon || '📦')} ${esc(eta)}</text>
    <text x="42" y="174" class="k">Items</text>${lines}${entries.length > 5 ? `<text x="42" y="${182 + 5 * 24}" class="s">+ ${entries.length - 5} more line(s) in JSON</text>` : ''}
    <line x1="42" y1="298" x2="498" y2="298" stroke="#ead9a0"/><text x="42" y="322" class="big">Subtotal ledger value</text><text x="488" y="322" text-anchor="end" class="big">${fmt(total)}g</text>
    ${bars}<text x="42" y="392" class="s">Pay DM: ${esc(tenderText || 'see JSON')}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/** Confirmation = the receipt itself, JSON ready to hand to the DM. */
function openReceiptModal(no, entries, tender, eta, ship) {
  const scrim = document.createElement('div');
  scrim.className = 'modal-scrim';
  scrim.id = 'wzModal';
  const tenderLines = Object.entries(tender)
    .map(([cid, amt]) => `<div class="rc-tender-line">${coinIcon(cid)} <b>${fmt(amt)}</b> ${esc(currencyName(cid))}</div>`).join('');
  const jsonText = JSON.stringify(entries, null, 2);
  const receiptImg = receiptImageSrc(no, entries, tender, eta, ship);
  scrim.innerHTML = `
    <div class="modal" style="max-width:680px">
      <button class="modal-x" data-close="1">✕</button>
      <div class="order-done receipt-done">
        <div class="big">🧾</div>
        <h1>Purchase order filed!</h1>
        <p>Order <span class="order-no">${esc(no)}</span> · ${esc(ship.icon || '📦')} ${esc(ship.name)} — arriving <b>${esc(eta)}</b>.<br>
        <b>Nothing was charged.</b> Pay the DM the amounts below, and the DM files this JSON on the ledger.</p>
        <div class="rc-visual-wrap"><img class="rc-visual-img" alt="Visual Warizon receipt ${esc(no)}" src="${receiptImg}"></div>
        <div class="rc-tender"><div class="rc-tender-head">PAY THE DM:</div>${tenderLines}</div>
        <details class="rc-json-wrap" open>
          <summary>Actual JSON data copied by the button below</summary>
          <textarea id="receiptJson" readonly rows="${Math.min(16, 4 + entries.length * 11)}">${esc(jsonText)}</textarea>
        </details>
        <div class="rc-btns">
          <button class="btn-add" id="copyReceiptBtn" style="max-width:280px">📋 Copy actual JSON receipt</button>
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
  const requester = apPlayerFor(acc);
  const target = selectedTrainingTarget();
  if (!a || !target) return;
  const cost = apCostFor(a.level);
  const left = Math.max(0, Number(target.apAvailable || 0) - apReservedFor(target.key));
  if (left < cost || target.level < a.level) { toast('WAH! The selected training target lacks the level or AP for this upgrade.'); return; }

  closeModal();
  const scrim = document.createElement('div');
  scrim.className = 'modal-scrim';
  scrim.id = 'wzModal';
  scrim.innerHTML = `
    <div class="modal" style="max-width:560px">
      <button class="modal-x" data-close="1">✕</button>
      <div style="padding:26px">
        <h1 style="font-size:22px;font-weight:700;margin:0 0 10px">${esc(a.icon || '⚡')} Train ${esc(target.name)}: ${esc(a.name)}</h1>
        <p style="font-size:14px;margin:0 0 12px">${esc(a.description || '')}</p>
        <div class="co-banner-lite"><b>${esc(target.name)}</b> is verified against the XP roster as a Disaster Inc. member or ally. <b>${esc(acc?.name || 'Requester')}</b> is filing the request; the target's AP is reserved pending DM approval.</div>
        <table class="pdp-table" style="margin-bottom:14px">
          <tr><td>Requester</td><td>${esc(requester?.name || acc?.name || 'Unknown')}</td></tr>
          <tr><td>Training target</td><td>${esc(target.name)} — Level ${target.level}</td></tr>
          <tr><td>Class</td><td>${esc(a.className || a.class)}</td></tr>
          <tr><td>Type</td><td>${esc(a.typeLabel || a.type)}</td></tr>
          <tr><td>Required level</td><td>${a.level}+ (target is ${target.level})</td></tr>
          <tr><td>AP cost</td><td><b>${cost} AP</b> (target has ${left} available)</td></tr>
        </table>
        <button class="btn-buy" id="apConfirmBtn" style="width:100%">Generate training receipt</button>
        <div class="co-warning" style="margin-top:10px">The receipt reserves ${cost} of <b>${esc(target.name)}</b>'s AP and goes to the DM for approval. The shop never edits a character sheet.</div>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  scrim.addEventListener('click', e => {
    if (e.target === scrim || e.target.closest('[data-close]')) closeModal();
    if (e.target.closest('#apConfirmBtn')) {
      const receipt = {
        receiptId: 'AP-' + hash01(Date.now() + abilityId + target.key).toString(16).slice(2).toUpperCase().padStart(8, 'AP0000').slice(0, 8),
        requesterKey: acc?.id || 'unknown',
        requesterName: acc?.name || 'Unknown requester',
        playerKey: target.key,
        playerName: target.name,
        targetKey: target.key,
        targetName: target.name,
        targetLevel: target.level,
        abilityId: a.id,
        abilityName: a.name,
        class: a.class,
        requiredLevel: a.level,
        apCost: cost,
        requestedAt: new Date().toISOString(),
        approvedAt: null,
        approvedBy: null,
        status: 'PENDING_DM_APPROVAL',
        targetFaction: target.faction,
        targetRosterOrder: target.rosterOrder,
        rule: 'Target verified against the XP roster: Disaster Inc. core members and Allies & Attachés only.'
      };
      const list = getApReceipts();
      list.push(receipt);
      saveApReceipts(list);
      sfx('confirm');
      closeModal();
      render();
      toast(`🧾 <b>${esc(a.name)}</b> training receipt generated for <b>${esc(target.name)}</b>.`);
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
  const accountOptions = accounts.map(a => ({
    value: a.id,
    label: `👤 ${esc(a.name)}`,
    meta: `${Object.values(a.currencies || {}).filter(v => Number(v) > 0).length} funded currencies`
  }));

  gate.innerHTML = `
    <div class="gate-logo">warizon<span style="color:var(--wz-orange);font-size:14px;vertical-align:super">.wah</span>
      <span class="wz-arrow"></span>
    </div>

    <div class="gate-card">
      <h1>Sign in</h1>
      <div id="gateStep1">
        <label class="gate-label">Who's shopping today?</label>
        ${choiceMenu('gateAccount', '', [
          { value: '', label: 'Choose your Waluipedia account…' },
          ...accountOptions
        ], { action: 'data-gate-account', className: 'gate-account-choice', aria: 'Choose your Waluipedia account' })}
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
  gate.querySelector('#gateAccount').addEventListener('click', e => {
    const pick = e.target.closest('[data-gate-account]');
    if (!pick) return;
    chosenId = pick.dataset.gateAccount;
    chooseInMenu(gate.querySelector('#gateAccount'), chosenId, pick.innerHTML);
    err1.classList.remove('show');
  });

  gate.querySelector('#gateContinue').addEventListener('click', () => {
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
  const maxPerOrder = it.forgeKind ? 99 : 10;
  qty = Math.max(1, Math.min(qty, Math.min(it.stock, maxPerOrder)));
  openCheckout([{ id, qty }]);
}

document.addEventListener('DOMContentLoaded', () => {
  ensureLoreData();
  ensurePrimeData();
  ensureCrafting(); // registers made-to-order recipes and every reagent as purchasable items

  // Keep countdown text live and rotate without requiring a hard refresh when
  // a storefront tab remains open across local midnight.
  const refreshDealClocks = () => document.querySelectorAll('[data-deal-countdown]').forEach(el => { el.textContent = dealTimeLeft(); });
  window.setInterval(refreshDealClocks, 60000);
  const scheduleMidnightRotation = () => {
    const now = new Date();
    const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
    window.setTimeout(() => {
      applyDailyDeals(localDayKey());
      render();
      toast('🔥 <b>Today’s Deals just rotated.</b> New crowd favourites and discovery picks are live.');
      scheduleMidnightRotation();
    }, Math.max(1000, next - now));
  };
  scheduleMidnightRotation();

  const gate = document.getElementById('gate');
  const store = document.getElementById('store');

  /* --- GLOBAL CLICK DELEGATION (store) --- */
  document.body.addEventListener('click', e => {
    const t = e.target;

    /* button-popover choices (Phase 7 replaces native dropdown boxes) */
    const searchScope = t.closest('[data-search-scope]');
    if (searchScope) {
      chooseInMenu(document.getElementById('searchScope'), searchScope.dataset.searchScope,
        searchScope.dataset.searchScope === 'all' ? 'All' : searchScope.textContent.trim());
      return;
    }
    const sort = t.closest('[data-set-sort]');
    if (sort) { S.sort = sort.dataset.setSort; S.page = 1; render(); return; }
    const craftSchoolFilter = t.closest('[data-craft-school-filter]');
    if (craftSchoolFilter) { CRAFT_STATE.school = craftSchoolFilter.dataset.craftSchoolFilter; CRAFT_STATE.shown = 60; render(); return; }
    const craftCategoryFilter = t.closest('[data-craft-category-filter]');
    if (craftCategoryFilter) { CRAFT_STATE.cat = craftCategoryFilter.dataset.craftCategoryFilter; CRAFT_STATE.shown = 60; render(); return; }
    const abType = t.closest('[data-ab-type]');
    if (abType) { AB_STATE.type = abType.dataset.abType; AB_STATE.shown = 60; render(); return; }
    const abClass = t.closest('[data-ab-class]');
    if (abClass) { AB_STATE.cls = abClass.dataset.abClass; AB_STATE.shown = 60; render(); return; }
    const abTarget = t.closest('[data-ab-target]');
    if (abTarget) { AB_STATE.target = abTarget.dataset.abTarget; AB_STATE.shown = 60; render(); return; }

    const open = t.closest('[data-open]');
    if (open) { openPdp(open.dataset.open); return; }
    const add = t.closest('[data-add]');
    if (add) { addToCart(add.dataset.add); return; }

    if (t.closest('[data-go-deals]')) { showTodaysDeals(); return; }
    const godept = t.closest('[data-go-dept]');
    if (godept) { resetFilters(); S.q = ''; S.dept = godept.dataset.goDept; S.view = 'results'; render(); return; }
    if (t.closest('[data-go-currency]')) {
      /* "Priced in Exotic Coin" rail → everything payable with native coinage */
      resetFilters(); S.q = ''; S.dept = 'all'; S.sort = 'featured';
      S.currencies = new Set(TOP_CURRENCIES.filter(([cid]) => cid !== 'gold').map(([cid]) => cid));
      S.view = 'results'; render(); return;
    }
    if (t.closest('[data-go-affordable]')) {
      resetFilters(); S.q = ''; S.dept = 'all'; S.sort = 'price-asc'; S.inStockOnly = true; S.affordableOnly = true;
      S.view = 'results'; render(); return;
    }
    if (t.closest('[data-go-shop]')) { goTo('home'); return; }
    if (t.closest('[data-go-prime]')) { goTo('wahprime'); return; }
    if (t.closest('[data-go-craft]')) { CRAFT_STATE.shown = 60; goTo('crafting'); return; }
    if (t.closest('[data-go-abilities]')) { AB_STATE.shown = 60; goTo('abilities'); return; }

    const buyAgain = t.closest('[data-buy-again]');
    if (buyAgain) { addToCart(buyAgain.dataset.buyAgain); openCart(); return; }
    if (t.closest('[data-no-refund]')) { sfx('wah'); toast('WAH HA HA! <b>No refunds!</b> Warizon return policy, page 1 of 1.'); return; }
    if (t.closest('[data-no-review]')) { toast('Your five stars are appreciated in advance. Wario accepts praise and gold only.'); return; }

    const primeSub = t.closest('[data-prime-subscribe]');
    if (primeSub) { generatePrimeReceipt(primeSub.dataset.primeSubscribe || 'standard'); return; }
    const primePlanBtn = t.closest('[data-prime-plan]');
    if (primePlanBtn) { generatePrimeReceipt(primePlanBtn.dataset.primePlan || 'standard'); return; }
    const primeCopy = t.closest('[data-prime-copy]');
    if (primeCopy) { const r = primeReceipts().find(x => x.receiptId === primeCopy.dataset.primeCopy); if (r) copyToClipboard(JSON.stringify(r, null, 2)); return; }
    const primeCancel = t.closest('[data-prime-cancel]');
    if (primeCancel) { savePrimeReceipts(primeReceipts().filter(x => x.receiptId !== primeCancel.dataset.primeCancel)); render(); toast('WahPrime receipt cancelled. Wario added your name to a list.'); return; }

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
    const pdpQtyStep = document.getElementById('pdpQty');
    if (t.closest('[data-pdp-qty-dec]') && pdpQtyStep) {
      pdpQtyStep.dataset.value = String(Math.max(1, Number(pdpQtyStep.dataset.value || 1) - 1));
      pdpQtyStep.querySelector('[data-pdp-qty-value]').textContent = pdpQtyStep.dataset.value; return;
    }
    if (t.closest('[data-pdp-qty-inc]') && pdpQtyStep) {
      pdpQtyStep.dataset.value = String(Math.min(Number(pdpQtyStep.dataset.max || 1), Number(pdpQtyStep.dataset.value || 1) + 1));
      pdpQtyStep.querySelector('[data-pdp-qty-value]').textContent = pdpQtyStep.dataset.value; return;
    }
    const pdpAdd = t.closest('[data-pdp-add]');
    if (pdpAdd) {
      const qty = Number(document.getElementById('pdpQty')?.dataset.value || 1);
      if (addToCart(pdpAdd.dataset.pdpAdd, qty)) { closeModal(); openCart(); }
      return;
    }
    const pdpBuy = t.closest('[data-pdp-buy]');
    if (pdpBuy) {
      const qty = Number(document.getElementById('pdpQty')?.dataset.value || 1);
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
    const forgeBuyMaterial = t.closest('[data-forge-buy-material]');
    if (forgeBuyMaterial) {
      const material = craftMatById(forgeBuyMaterial.dataset.forgeBuyMaterial);
      const id = forgeMaterialId(forgeBuyMaterial.dataset.forgeBuyMaterial);
      const qty = Math.max(1, Number(forgeBuyMaterial.dataset.forgeQty || 1));
      if (!material || !ITEM_BY_ID.has(id)) { toast('That reagent is not registered at the Forge counter.'); return; }
      buyNow(id, qty); return;
    }
    const forgeAddMaterial = t.closest('[data-forge-add-material]');
    if (forgeAddMaterial) {
      const id = forgeMaterialId(forgeAddMaterial.dataset.forgeAddMaterial);
      if (addToCart(id, 1)) openCart(); return;
    }
    const forgeBuyRecipe = t.closest('[data-forge-buy-recipe]');
    if (forgeBuyRecipe) {
      const id = forgeRecipeId(forgeBuyRecipe.dataset.forgeBuyRecipe);
      if (!ITEM_BY_ID.has(id)) { toast('That made-to-order recipe is not registered yet.'); return; }
      buyNow(id, 1); return;
    }
    const forgeAddRecipe = t.closest('[data-forge-add-recipe]');
    if (forgeAddRecipe) {
      const id = forgeRecipeId(forgeAddRecipe.dataset.forgeAddRecipe);
      if (addToCart(id, 1)) openCart(); return;
    }

    /* abilities wing */
    if (t.closest('#subAbilities')) { AB_STATE.shown = 60; goTo('abilities'); return; }
    if (t.closest('#abMore')) { AB_STATE.shown += 60; render(); return; }

    /* header */
    if (t.closest('#navLogo') || t.closest('#subHome')) { goTo('home'); return; }
    if (t.closest('#navOrders')) { goTo('orders'); return; }
    if (t.closest('#flyMembership')) { goTo('wahprime'); document.querySelector('.nav-acct-wrap')?.classList.remove('open'); return; }
    if (t.closest('#subDeals')) { showTodaysDeals(); return; }
    const subDept = t.closest('[data-sub-dept]');
    if (subDept) { if (subDept.dataset.subDept === 'premium') { goTo('wahprime'); return; } resetFilters(); S.q = ''; S.dept = subDept.dataset.subDept; goTo('results'); return; }
    if (t.closest('#allDepartmentsBtn')) { openDrawer(); return; }
    if (t.closest('#backToTop')) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }

    /* drawer */
    const dDept = t.closest('[data-drawer-dept]');
    if (dDept) { closeDrawer(); resetFilters(); S.q = ''; S.dept = dDept.dataset.drawerDept; goTo('results'); return; }
    if (t.closest('[data-drawer-deals]')) { closeDrawer(); showTodaysDeals(); return; }
    if (t.closest('[data-drawer-prime]')) { closeDrawer(); goTo('wahprime'); return; }
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
    const foot = t.closest('[data-foot]');
    if (foot) { S.infoSlug = foot.dataset.foot || 'about-warizon'; goTo('info'); return; }
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
    if (t.matches('#fAffordable')) { S.affordableOnly = t.checked; S.inStockOnly = S.inStockOnly || t.checked; S.page = 1; render(); return; }
    if (t.matches('#abUnlockable')) { AB_STATE.onlyUnlock = t.checked; AB_STATE.shown = 60; render(); return; }
  });

  /* --- search submit --- */
  document.body.addEventListener('submit', e => {
    if (e.target.id === 'searchForm') {
      e.preventDefault();
      const q = document.getElementById('searchInput').value;
      const scope = document.getElementById('searchScope')?.dataset.value || 'all';
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
