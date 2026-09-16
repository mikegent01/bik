/**
 * Build a compact browse index for the shop app.
 *
 * The catalogue is ~7,700 items across 84 ES modules totalling 20 MB. A
 * tablet app cannot load that just to draw a grid, and it does not need to:
 * browsing needs name, price, category, rarity, vendor and icon. The heavy
 * fields (full description, effectDetails, per-item CSS) stay where they are
 * and are fetched for a single item on demand.
 *
 * This IMPORTS the modules rather than regexing them. An earlier regex
 * version silently dropped 90 items whose object literals were indented
 * differently — parsing is not optional when the data is this uneven.
 *
 * Output: Reputation-Matrix2/data/commerce/shop-index.json
 * Run after editing anything under data/shop-items/.
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..');
const SRC  = path.join(ROOT, 'Reputation-Matrix2/data/shop-items');
const OUT  = path.join(ROOT, 'Reputation-Matrix2/data/commerce/shop-index.json');

const FIELDS = ['id','name','price','category','rarity','vendor','icon','stock','levelRequirement'];

const files = fs.readdirSync(SRC).filter(f => /^items_\d+\.js$/.test(f)).sort();

const items = [];
const seen = new Set();
let dupes = 0;

for (const f of files) {
  const mod = await import(url.pathToFileURL(path.join(SRC, f)).href);
  const rel = './data/shop-items/' + f;
  for (const bag of Object.values(mod)) {
    if (!bag || typeof bag !== 'object') continue;
    for (const raw of Object.values(bag)) {
      if (!raw || typeof raw !== 'object' || !raw.id || !raw.name) continue;
      if (seen.has(raw.id)) { dupes++; continue; }
      seen.add(raw.id);
      const rec = {};
      for (const k of FIELDS) if (raw[k] !== undefined) rec[k] = raw[k];
      rec.src = rel;
      items.push(rec);
    }
  }
}

let vendors = {};
try {
  const v = await import(url.pathToFileURL(path.join(SRC, 'vendors.js')).href);
  vendors = v.VENDORS || {};
} catch {}

/* Most items name a REGION ('midlands', 'rogueport') rather than one of the
   13 registered storefronts. That is the data as it stands, so the index
   records which vendor ids have a registry entry and lets the app fall back
   to showing the bare id instead of pretending the vendor is unknown. */
const vendorIds = [...new Set(items.map(i => i.vendor).filter(Boolean))];
const unregistered = vendorIds.filter(v => !vendors[v]);

const payload = {
  meta: {
    generatedBy: 'tools/build-shop-index.mjs',
    note: 'Browse index only. Heavy per-item fields stay in data/shop-items/; fetch the module named in "src" for full detail.',
    totalItems: items.length,
    registeredVendors: Object.keys(vendors).length,
    vendorIdsOnItems: vendorIds.length,
    unregisteredVendorIds: unregistered.length,
    itemsWithoutCategory: items.filter(i => !i.category).length,
  },
  vendors,
  items,
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(payload));
console.log(`wrote ${path.relative(ROOT, OUT)}`);
console.log(`  ${items.length} items (${dupes} duplicate ids skipped), ` +
            `${Object.keys(vendors).length} registered vendors, ` +
            `${unregistered.length} unregistered vendor ids, ` +
            `${(fs.statSync(OUT).size/1024).toFixed(0)} KB`);
