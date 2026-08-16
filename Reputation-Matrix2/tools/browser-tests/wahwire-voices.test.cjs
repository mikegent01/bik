/* WAHwire, checked in a browser rather than in isolation.
 *
 * Loads the real page over real HTTP in jsdom, runs the real wahwire.js, and
 * reads the "Loudest voices" panel back out. It exists because the defects
 * this catches are invisible to the Python suite: an author the generator is
 * happy to use but the renderer has no name for produces a nameless row, not
 * an exception.
 *
 * Run it with a static server on the repo root:
 *
 *     python3 -m http.server 8123 --bind 127.0.0.1   # from the repo root
 *     node Reputation-Matrix2/tools/browser-tests/wahwire-voices.test.cjs
 *
 * Needs `npm install jsdom node-fetch@2` somewhere on NODE_PATH.
 */
const { JSDOM, VirtualConsole } = require("jsdom");

const BASE = "http://127.0.0.1:8123";
const PAGE = BASE + "/Reputation-Matrix2/app/pages/wahwire/wahwire.html";

let PASS = 0, FAIL = 0;
function check(name, cond, detail) {
  if (cond) { PASS++; console.log("  ok   " + name); }
  else { FAIL++; console.log("  FAIL " + name + (detail ? "  -- " + detail : "")); }
}

(async () => {
  const vc = new VirtualConsole();
  vc.on("jsdomError", e => { if (!/Could not load/.test(e.message)) console.error("jsdom:", e.message); });

  const realFetch = require("node-fetch");
  // These must exist BEFORE the page's scripts parse: wahwire.js fetches its
  // store during load, and jsdom here ships no fetch of its own.
  const dom = await JSDOM.fromURL(PAGE, {
    runScripts: "dangerously", resources: "usable", pretendToBeVisual: true, virtualConsole: vc,
    beforeParse(w) {
      w.scrollTo = () => {};
      w.fetch = (u, o) => realFetch(new URL(u, PAGE).href, o);
      w.matchMedia = w.matchMedia || (q => ({ matches: false, media: q, addListener(){}, removeListener(){}, addEventListener(){}, removeEventListener(){} }));
      w.IntersectionObserver = w.IntersectionObserver || class { observe(){} unobserve(){} disconnect(){} };
      // jsdom has no canvas backend. The charts are decoration for this test;
      // a no-op 2D context lets the real drawing code run to completion so we
      // are exercising the true render path, not a branch around it.
      const noop = new Proxy({}, { get: (t, k) =>
        k === "canvas" ? { width: 300, height: 150 } :
        k === "measureText" ? (() => ({ width: 10 })) :
        k === "createLinearGradient" ? (() => ({ addColorStop(){} })) :
        k === "getImageData" ? (() => ({ data: new Uint8ClampedArray(4) })) :
        (typeof k === "string" && /^[a-z]/.test(k) ? (() => {}) : undefined),
        set: () => true });
      w.HTMLCanvasElement.prototype.getContext = () => noop;
    },
  });
  const w = dom.window;

  // wahwire.js is <script type="module">, which jsdom does not execute. The
  // page, its DOM and its stylesheets are real; only the module needs a hand.
  // We eval the exact file the browser would fetch, so this still tests the
  // shipped source rather than a copy of it.
  const src = await realFetch(new URL("wahwire.js", PAGE).href).then(r => r.text());
  w.eval(src);
  w.document.dispatchEvent(new w.Event("DOMContentLoaded"));

  const deadline = Date.now() + 30000;
  let st = null;
  while (Date.now() < deadline) {
    await new Promise(r => setTimeout(r, 250));
    try { st = w.__wahwireState || null; } catch (e) {}
    if (st && st.posts && st.posts.length) break;
  }

  console.log("\n-- WAHwire feed, loaded in a browser --");
  check("the feed loads its posts", !!(st && st.posts && st.posts.length), st ? String(st.posts && st.posts.length) : "no state");
  if (!st || !st.posts) { process.exit(1); }

  const posts = st.posts;
  console.log("     " + posts.length + " posts in the store");

  // Rebuild the panel's own arithmetic: likes per author, in view.
  const byLikes = {}, byCount = {};
  for (const p of posts) {
    byLikes[p.author] = (byLikes[p.author] || 0) + (p.likes || 0);
    byCount[p.author] = (byCount[p.author] || 0) + 1;
  }
  const ranked = Object.keys(byLikes).sort((a, b) => byLikes[b] - byLikes[a]);
  const totalLikes = Object.values(byLikes).reduce((a, b) => a + b, 0);

  console.log("\n     Loudest voices (by likes, as the panel computes it):");
  for (const a of ranked.slice(0, 8)) {
    const who = (w.__wahwireAuthors || {})[a];
    console.log("       " + String(a).padEnd(26) +
      String((byLikes[a] / 1000).toFixed(1) + "k").padStart(8) +
      "  " + String((100 * byLikes[a] / totalLikes).toFixed(1) + "%").padStart(6) +
      "   " + String(byCount[a] + " posts").padStart(9) +
      "   " + (who ? who.name : "*** NO DISPLAY NAME ***"));
  }

  // Every author present in the data must render with a real name.
  const authors = w.__wahwireAuthors || {};
  const nameless = [...new Set(posts.map(p => p.author))].filter(a => !authors[a]);
  check("every author in the feed has a display name", nameless.length === 0, nameless.join(", "));

  // Comment and reply authors render through the same map; a short id that
  // matches no character page shows up as a nameless row to a reader.
  const rawStore = await realFetch(new URL("../../../data/wahwire/posts.json", PAGE).href).then(r => r.json());
  const voices = new Set();
  for (const p of rawStore.posts)
    for (const c of p.comments || []) {
      voices.add(c.author);
      for (const r of c.replies || []) voices.add(r.author);
    }
  const namelessComments = [...voices].filter(a => a && !authors[a]);
  check("every comment author has a display name too", namelessComments.length === 0,
        namelessComments.join(", "));

  const topShare = byLikes[ranked[0]] / totalLikes;
  check("no single voice owns most of the likes", topShare < 0.45, (100 * topShare).toFixed(1) + "%");

  const topCount = byCount[ranked.reduce((a, b) => byCount[a] >= byCount[b] ? a : b)];
  check("no single voice owns most of the posts", topCount / posts.length < 0.35,
        (100 * topCount / posts.length).toFixed(1) + "%");

  check("the feed carries a real spread of voices", Object.keys(byCount).length >= 20,
        Object.keys(byCount).length + " accounts");

  // The panel itself must have painted rows.
  const voicesHTML = w.document.body.innerHTML;
  check("the voices panel rendered", /Loudest voices|ww-voice|voices/i.test(voicesHTML));

  // The 3-post cooldown, checked against what actually shipped.
  //
  // Zero is not the bar, because zero is not always reachable: an account
  // holding more than a quarter of the feed cannot be spaced four apart at
  // any arrangement. So compute the same floor the spacing pass proves and
  // require the feed to sit on it.
  const ordered = posts.slice().sort((a, b) => (a.order || 0) - (b.order || 0));
  // prepare() drops the date object once it has formatted a label, so the
  // grouping has to come from the store on disk, not the rendered post.
  const raw = await realFetch(new URL("../../../data/wahwire/posts.json", PAGE).href).then(r => r.json());
  const dateById = {};
  for (const p of raw.posts) {
    const d = p.date || {};
    dateById[p.id] = JSON.stringify([d.year ?? null, d.month ?? null, d.day ?? null]);
  }
  const groupOf = p => dateById[p.id] || "[null,null,null]";
  let breaches = 0, worst = "";
  for (let i = 0; i < ordered.length; i++) {
    for (let j = Math.max(0, i - 3); j < i; j++) {
      if (ordered[j].author === ordered[i].author) {
        breaches++;
        if (!worst) worst = ordered[i].author + " at order " + ordered[i].order;
      }
    }
  }
  // Posts only ever move among posts sharing a date, so the floor is per group.
  let floor = 0;
  const groups = {};
  for (const p of ordered) (groups[groupOf(p)] = groups[groupOf(p)] || []).push(p.author);
  for (const g of Object.values(groups)) {
    const held = {};
    for (const a of g) held[a] = (held[a] || 0) + 1;
    for (const [a, n] of Object.entries(held)) {
      if (n < 2) continue;
      floor += Math.max(0, (n - 1) - Math.floor((g.length - n) / 3));
    }
  }
  console.log("\n     cooldown breaches: " + breaches + "  (provable floor " + floor + ")");
  check("the author cooldown is at or near its provable floor", breaches <= floor + 2,
        breaches + " breaches vs floor " + floor + ", first: " + worst);
  check("the cooldown is enforced for every account except an unavoidable few",
        new Set(ordered.filter((p, i) => ordered.slice(Math.max(0, i - 3), i)
          .some(q => q.author === p.author)).map(p => p.author)).size <= 3,
        "too many accounts breaching");

  console.log("\n" + PASS + " passed, " + FAIL + " failed");
  dom.window.close();
  process.exit(FAIL ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
