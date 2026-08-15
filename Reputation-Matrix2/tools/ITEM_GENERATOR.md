# Draft item generator

`tools/generate_bros_items.py` produces **starting points** for bros items and
badges. It exists so you do not have to hold the Bros Energy rules, the shop
schema and the Foundry converter's expectations in your head while drafting.

It does not produce canon and cannot become canon by accident.

## Use it

```bash
python3 tools/generate_bros_items.py --count 3                  # bros items
python3 tools/generate_bros_items.py --count 2 --kind badge     # badges
python3 tools/generate_bros_items.py --technique chop_bros_attack
python3 tools/generate_bros_items.py --count 2 --ai             # LM Studio, if running
python3 tools/generate_bros_items.py --verify                   # leak check
```

Output lands in `tools/.generated/draft-<kind>-<timestamp>.json`, which is
git-ignored.

## The four guardrails

**1. Output is quarantined.** Drafts are written to `tools/.generated/`, which
no file in `data/commerce/index.js` imports and which git ignores. Nothing the
generator writes can reach the storefront unless a person moves it by hand.

**2. Every record is stamped.** Each carries `_unverified: true`, a
`_generatedAt`, and a plain-language `_reviewNotice`. IDs are prefixed
`draft_`. `--verify` scans `data/` for either marker and exits non-zero if one
is found, so a leak is caught rather than shipped.

**3. It cannot invent a Bros Attack.** Techniques are read from
`data/brosAttacks.json`. Asking for one that is not recorded there is refused
outright:

```
$ python3 tools/generate_bros_items.py --technique super_mega_ultra_bros_attack
Refused: 'super_mega_ultra_bros_attack' is not a confirmed technique.
Confirmed techniques are: chop_bros_attack, support_fire_bros_attack
Add it to data/brosAttacks.json from a real session first.
```

This mirrors the standing README rule: Foundry never receives an attack the
archive has not confirmed.

**4. It states no history.** Generated prose contains no dates, casualty
figures, named events or outcomes. It leaves bracketed placeholders —
`[WHAT THIS COMMEMORATES - name a real recorded event, do not invent one]` —
for you to fill from a source. With `--ai`, model output is additionally
scrubbed: any field containing a year, a clock time, a casualty count or a
bare multi-digit figure is rejected and the placeholder kept.

## Finishing a draft

1. Replace every `[BRACKETED]` placeholder from a real source file.
2. Delete `_unverified`, `_generatedAt` and `_reviewNotice`.
3. Rename the id off the `draft_` prefix.
4. Move the record into the right `data/shop-items/items_*.js` file.
5. Run `python3 tools/generate_bros_items.py --verify` — it must print OK.

## Rules the generator bakes in

- **Bros items spend the item, not energy.** A one-shot costs its holder
  nothing from the pool; once the technique is learned it reverts to the normal
  economy (1 per participant, max 2, refreshed on a very short rest). A second
  copy grants another free use and nothing else. This is the anti-OP mechanism.
- **Badges are records, not stat sticks.** Every generated badge effect is
  social, cosmetic or informational. A badge must never grant a roll bonus, add
  a resource, or change a number on a sheet — so the whole set stays
  collectable without power creep.
- **`foundryType` is set explicitly** (`consumable` for bros items,
  `equipment` for badges) because the converter's keyword hints otherwise read
  descriptive prose and misclassify. See `SHOP_BADGES.md`.
