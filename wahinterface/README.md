# The Wahinterface — prototype

**Status: working prototype. THREE apps live (Carry, Shop, Atlas); four
locked on purpose.** Design reasoning lives in `docs/worklists/WAHINTERFACE_NOTES.md`;
read that first, this file only covers what was built and how to run it.

## Run it

Serve the repo and open `/wahinterface/`:

```
python3 start.py          # then browse to /wahinterface/
```

Opening the file directly from disk also works, but the browser blocks its
`fetch` of the canon JSON, so it falls back to a small embedded sample and the
status bar says `sample data` instead of `canon data`. That is deliberate — a
prototype that silently shows invented numbers is worse than one that fails
loudly.

## What it is testing

The notes argued that a tablet is only worth building if it is a **context**
(apps that know about each other) rather than a **container** (a launcher that
adds one click in front of pages you already had).

Round one shipped the shell and one app to test that cheaply. The finding was
that the element which actually sells the idea is the **dock badge** — the only
thing that is right about something while you are looking elsewhere.

Round two acts on that finding, which is why the Shop exists in the form it
does. The point is not "the shop, in a tablet". The point is that adding
something to the basket immediately changes the 🛒 badge, the affordability of
every other item in the grid, and a "pending in the shop" panel over in **Carry**
— with no navigation and no save. Strip that interaction out and the shop is
just a page again.

Things worth doing in this order:

1. Open **Carry** as Archie. Purse is **−33 gold**, 5 items, 4 creditors — three
   facts from three different files that no existing page shows together.
2. Switch to **Bowser**. Watch the 🎒 badge change from a red debt count to a
   green tick as the purse goes positive.
3. Go to **Shop** as Archie. Everything is greyed: he can afford *nothing* out of
   7,722 items. Switch to Remi and 5,998 become buyable.
4. Add something to the basket, then go back to **Carry**. The projected
   post-purchase purse is already there.

## Data

Reads real canon JSON from `../Reputation-Matrix2/data/` — `commerce/wallets.json`,
`commerce/items.json`, `currencies.json`, `banking.json`. Nothing is duplicated.

**The joins are now ids, not names.** The first prototype had to guess that
`archie` was "Archie Miser", and that guessing was unsafe: two different
wallets carry that display name, and a fuzzy match on "Agent L (Luigi)"
resolved to `agent_t`, a different character. `items.json` now carries
`ownerId` and `banking.json` carries `debtorId`/`creditorId`/`ownerId`, all
hand-checked, and `tools/check-commerce-joins.py` fails the build if any of
them dangles.

Current joins: archie 5 items / 4 debts / −33g, markop 3 / 1 / 23g,
hjumpik 2 / 0 / 551g, remi 2 / 1 / 8,710g, bowser 0 / 3 / 54,869g. Every UI
state — negative balance, solvent, debts, no debts, items, no items, affords
nothing, affords nearly everything — is reachable from the five party buttons.

## The three live apps

**Carry** — wallet, debts and owned items for the selected character.

**Shop** — the full 7,722-item catalogue with search, category and price
filters, plus an "only what they can afford" option. It reads
`commerce/shop-index.json`, a 1.7 MB browse index built by
`tools/build-shop-index.mjs`; the full catalogue is 20 MB across 84 ES modules
and must never be loaded to draw a grid. Only the first 60 matches render.

**Atlas** — all 31 nations by crest. Every nation now has one.

## Deliberately not done

- **Four apps** (Standing, Intel, Party, Dice) are locked icons. Roadmap made
  visible, not stubs pretending to work.
- **No writes, and the basket is not a purchase.** Buying in this archive is
  DM-approved — `shop-purchases.json` records `approvedBy` and `approvedAt`. A
  prototype that wrote to a wallet would be forging that approval, so the
  basket proposes and never commits. Nothing here mutates canon JSON or
  localStorage.

## Routing

Every live app is addressable: `#/carry`, `#/shop`, `#/atlas`. The hash is read
on load and written on every app change, and `hashchange` is handled, so deep
links and the back button both work. The notes were firm that this had to be
designed in rather than retrofitted.

## Mobile

The bezel is a desktop luxury. Below 820px the chrome dissolves entirely, the
dock becomes a bottom bar, and the content is a plain full-screen column — the
notes flagged "a tablet UI inside a phone is a tablet inside a tablet" as a
thing to answer up front rather than afterwards.
