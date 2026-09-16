# The Wahinterface — prototype

**Status: working prototype of the shell plus ONE app. Five apps are locked on
purpose.** Design reasoning lives in `docs/worklists/WAHINTERFACE_NOTES.md`;
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
adds one click in front of pages you already had). So this does not ship six
app icons. It ships the shell and Inventory & Wallet, which is the cheapest
honest test: if money and things don't feel better together than apart, the
premise is wrong and we found out in one file instead of in a refactor.

The test to look at: switch characters and watch the 🎒 badge in the dock. It
counts that character's outstanding debts and turns green when they are
solvent, recomputed from shared state on every render — correct without
navigating anywhere. Archie is carrying eight recovered items, is worth
**−33 gold**, and owes four creditors; those three facts live in three
different files and no existing page shows them together.

## Data

Reads real canon JSON from `../Reputation-Matrix2/data/` — `commerce/wallets.json`,
`commerce/items.json`, `currencies.json`, `banking.json`. Nothing is duplicated.

Two joins are fuzzy and worth knowing about:

- **Wallets ↔ banking.** Wallet keys are ids (`archie`); `banking.json` names
  debtors as display strings (`Archie Miser`). Matched on id, full name, or
  first name.
- **Wallets ↔ items.** `items.json` has no owner field, only `obtainedBy`, so
  items are matched on that. Anything filed to `Party (Collective)` therefore
  shows under nobody, and the empty state says so rather than pretending the
  character owns nothing.

Current joins: archie 8 items / 4 debts, markop 5 / 1, hjumpik 2 / 0,
remi 3 / 1, bowser 0 / 3. Every UI state — negative balance, solvent, has
debts, no debts, has items, no items — is reachable from the five party
buttons.

## Deliberately not done

- **The other five apps** (Shop, Standing, Intel, Party, Dice) are locked
  icons. They are the roadmap made visible, not stubs pretending to work.
- **No routing yet.** The notes are firm that every app needs its own deep
  link from the first commit of the *real* build, and that a launcher which
  breaks `#/shop` is a regression. This standalone file has one app, so there
  is nothing to route between; routing is a requirement for integration, not
  for the prototype.
- **No writes.** Read-only. Nothing here mutates canon JSON or localStorage.

## Mobile

The bezel is a desktop luxury. Below 820px the chrome dissolves entirely, the
dock becomes a bottom bar, and the content is a plain full-screen column — the
notes flagged "a tablet UI inside a phone is a tablet inside a tablet" as a
thing to answer up front rather than afterwards.
