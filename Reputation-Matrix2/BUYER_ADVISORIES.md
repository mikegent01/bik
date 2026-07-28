# Buyer advisories — the scam-risk banner, generalized

## The starting point

The shop had exactly one keyword-driven banner: **critical scam risk**. It reads an item's
combined text, scores suspicious phrases, and prints a warning with the phrases it flagged.

It works well and it was doing that job alone. Nothing else in a 7,722-item catalog warned
a buyer about anything — curses, attunement, single-use consumables, and contraband all
looked identical to a plain hat.

## What was added

`ADVISORY_RULES` in `warizon-shop.js` reuses the scam-risk shape for seven more situations.
Each rule declares scored phrases, a tone, and a verdict sentence:

| Advisory | Tone | Fires on |
|---|---|---|
| ☠️ Cursed / binding item | danger | explicit curses, "cannot be removed", requires *remove curse* |
| 💥 Volatile — can hurt the user | danger | explodes, backfires, damages the wielder, mishap tables |
| ⚖️ Legal exposure | warn | stolen, contraband, unlicensed, prohibited |
| 🩹 Fragile — breaks with use | warn | brittle, breaks on use, cannot be repaired |
| 🏳️ Reputation consequences | warn | reputation/infamy clauses, hostility triggers |
| 🔗 Attunement required | notice | attunement clauses |
| 🥤 Single use | notice | consumed on use, limited charges |
| 🏦 Economy-guarded asset | notice | reuses the existing `economy.protected` flag |
| ✅ Clean listing | good | *nothing* fired, in stock, ≥4.6 stars, ≥800 ratings |

Rendering:
- **Product page** — full banners via `advisoryHtml()`, showing the verdict and the exact
  phrases that triggered it (same as the scam banner does).
- **Grid & list cards** — compact colour-coded pills via `advisoryPillsHtml()`, so a curse
  is visible *before* you click into the item.

Sorted danger → warn → notice → good, so the worst news is never buried.

## Calibration against the real catalog

Measured on all 7,722 live items:

| Advisory | Items | Share |
|---|---|---|
| cursed | 755 | 9.8% |
| clean listing | 735 | 9.5% |
| volatile | 630 | 8.2% |
| consumable | 488 | 6.3% |
| fragile | 268 | 3.5% |
| attunement | 259 | 3.4% |
| legal | 89 | 1.2% |
| faction | 73 | 0.9% |

**38.7% of the catalog carries at least one advisory**, 295 items carry two or more.

Two false-positive classes were found and fixed by running against the real data rather
than trusting the regexes:

1. **`worn` meant "worn on the head", not "worn out".** It was matching ~1,000 items and
   flagging ordinary clothing as damaged. Removed from the fragile rule entirely.
2. **A single soft keyword was enough to allege a crime.** `customs`/`inspection` alone
   flagged 211 items as legal exposure. Added a `minScore` gate so the *legal* and
   *faction* rules now need corroborating evidence — 211 → 89 and 252 → 73.

The "Clean listing" badge was also tightened (≥4.6 stars and ≥800 ratings, in stock, no
scam flag) after an early version awarded it to essentially everything. A badge everything
gets is not a badge.

## Extending it

Add an object to `ADVISORY_RULES`:

```js
{
  id: 'haunted', tone: 'warn', icon: '👻', title: 'Haunted',
  phrases: [{ rx: /\bhaunted\b|\bpoltergeist\b/, score: 3, label: 'haunting' }],
  minScore: 2,                    // optional: require corroboration
  verdict: score => 'Something lives in this. It does not pay rent.'
}
```

Rules with no `phrases` are gate-only and use `applies(item, others)` instead — that is how
the economy-guard and clean-listing advisories work.
