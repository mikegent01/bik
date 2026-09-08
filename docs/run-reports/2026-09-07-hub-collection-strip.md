# Filing-hub collection strip — run report

**Date:** 2026-09-07
**Branch:** `arena/01a07d38-bik`
**Model:** Arena.ai Agent Mode

## Purpose

The owner, browsing the filing hub ("The Mage's Embassy Ambush & The Luigi
Interrogation"), asked where a collection belongs on that page: not the
sidebar, not a full-page takeover. Answer: neither — a one-line strip.

## What changed

- `collectionsFor(id)` in index.html: reverse shelf lookup. A record counts
  as filed when its id is in a collection's `articles[]` or `members[]`
  roster (string or `{id}` entries). Related-links are not membership.
- `view_hub()` renders a slim `🗂️ Also filed in:` chip row between the
  summary and the "Pick how you want it" instruction — only when the record
  is actually shelved (zero-clutter otherwise). Chips route to the
  collection's article page, which renders since the search remake.
- Styling next to the other hub-head rules in
  `app/styles/systems/investigations.css` (flex row, wraps, muted).
- `tools/tests/test-hub-pages.mjs`: the old "collections stay pruned"
  contract dated from an owner vote that the owner has since reversed
  (reinstated as indexed shelves 2026-09-07, extended to the hub today).
  The guards now assert the shelves contract: still no dedicated route,
  view, search kind, or stats machinery — plus positives (indexed,
  `collectionsFor`, strip, roster shapes, mario roster resolves, CSS).

## Proof

Full-boot jsdom: `star_fountain_reunion` hub shows two chips (Mario
Brothers, Star Road) with 5 tiles intact; `the_arrangement` shows four;
the embassy record (no shelves) shows no strip. Suite: hub pages 33/33,
`check-all` green.
