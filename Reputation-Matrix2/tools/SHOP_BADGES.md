# Badges & Commendations — the `badges` shop department

A shop department for things a character *wears to show what they were part of*,
rather than things that make them stronger.

## The design rule

**Badges are records, not stat sticks.**

Every effect in this department is social, cosmetic, or informational. Nothing
grants a bonus to a roll, adds a resource, or changes a number on a character
sheet. That is deliberate: a player can collect the entire department and be
exactly as powerful as when they started, so badges can be handed out for
*story reasons* without a balance conversation.

Where a badge has teeth, the teeth are narrative — the Order 120 Witness Token
establishes standing to testify, and reads as an accusation in Legion
territory. That is a GM prompt, not a modifier.

## Every badge is backed by the archive

Each entry carries a `marks` field naming, in one line, the recorded event it
commemorates. No badge invents history:

| Badge | Marks |
| --- | --- |
| Barrel Survivor's Mark | The 150+ Toads found sealed in barrels aboard the *Vigilance* |
| Order 120 Witness Token | Order 120 and its four clauses |
| Returned Service Medal | The Aegis boiler-house valves jammed with Imperial service medals |
| Fractured Heart Pin | Speaker L's "mending of the fractured heart", 18th Highsun |
| Baker's Variance Chit | The Aegis kitchen requisition drawn above establishment |
| Noki Carrier's Tag | The consignment of moss, sheeting and line delivered before it was needed |
| The Seventh Seat | The Scouts' council seat, vacant since the Mole was exposed |
| Two Returns Clasp | The two irreconcilable casualty returns for the same half hour |
| Throughput | The Sonic Grid node schedule and the word it uses for people |
| WahPrime Founding Subscriber | The WahPrime subscription programme |

The Barrel Survivor's Mark is priced at 0 and stocked at 0 on purpose: the
Liberated Toads issue it and refuse coin for it. It is in the catalog so it can
be *awarded*, not bought.

## Adding a category to the shop — the four places

A new category must be registered in **four** places or it will not appear.
This is the part that is easy to get wrong: `normalizeItem()` in
`warizon-shop.js` silently reassigns any unknown category to `curiosities`, so
a missed step shows up as items vanishing into the wrong department rather than
as an error.

1. `data/shop-items/categories.js` — add to `SHOP_CATEGORIES`.
2. `app/pages/commerce/warizon-shop.js` — add to the static `DEPARTMENTS` map.
   **This is the gate.** `normalizeItem()` checks `DEPARTMENTS[raw.category]`.
3. `app/pages/shop/shop.html` — add a `data-search-scope="<id>"` button. The
   search-scope dropdown is hand-written HTML and does not read `DEPARTMENTS`.
4. `tools/build_shop_departments.py` — add display metadata, then re-run it so
   `data/shop-departments.json` carries the new department and its live count.

Item files also need wiring into `data/commerce/index.js` (import + spread into
`SHOP_ITEMS`) or `getAllShopItems()` will never see them.

## Verifying

```bash
python3 tools/build_shop_departments.py   # regenerates counts
```

Then confirm the department reports a non-zero count:

```bash
python3 -c "import json;d=json.load(open('data/shop-departments.json'));\
print([(x['id'],x['count']) for x in d['departments']])"
```

Because `shop.html` loads `warizon-shop.js` as an ES module, jsdom cannot run
the storefront directly. To test the real UI, bundle it first:

```bash
npx esbuild app/pages/commerce/warizon-shop.js --bundle --format=iife \
  --outfile=/tmp/warizon.bundle.js
```

then inject that bundle into the page **before parsing** (so it registers its
`DOMContentLoaded` handler in time) and drive the real sign-in gate. Injecting
after load, or reading `document.body.textContent` with the bundle still in the
DOM, both produce misleading results — the second one silently "passes" because
the item names appear inside the script source.
