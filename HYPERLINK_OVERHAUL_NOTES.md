# Hyperlink System Overhaul — Diagnosis & Design

## How this was diagnosed

A Node harness (`/tmp/linkdiag`) extracted the *real* `safeAliases`, `buildLinkRegistry`
and `linkify` functions out of `index.html` and ran them against the real
`Reputation-Matrix2/data/*.json`, then linkified the actual Imp Ambush event article.

Result on `the_imp_ambush_of_harvestide_29` (a ~6,000 word event article):

| Entity   | Mentions in prose | Links produced |
|----------|-------------------|----------------|
| Markop   | 60                | 1              |
| Remi     | 27                | 1              |
| Tymnas   | 18                | 1              |
| Dan      | 15                | **0**          |
| Eager    | 15                | 1              |
| Toads    | 9                 | 1              |
| Archie   | (0 here, many elsewhere) | **0**   |

**13 links in a 6,000-word article.** That is the bug the user reported.

## Root causes

1. **No nickname / first-name aliases.**
   `safeAliases()` only emitted the full name, a `The `-stripped variant, an
   honorific-stripped variant and a `— suffix`-stripped variant.
   - `Archie Archbold Miser` → only `"Archie Archbold Miser"`. Prose always says
     "Archie" → **never matched**. (Three-part names were never collapsed.)
   - `Remi Akamatsu — Full Record` → `"Remi Akamatsu"`. Prose almost always says
     just "Remi" → **never matched**.

2. **`Dan` was hard-blocked.** `LINK_STOP` literally contained `'dan'`, so every
   Dan article was unlinkable. It was blocked because "Dan" is ambiguous
   (`dan`, `dan_the_toad`, `dedan`) — the old code had no way to disambiguate, so
   it gave up and banned the word.

3. **Ambiguity guard silently deleted links.** In `buildLinkRegistry`, if the top
   two claimants for an alias had equal priority and neither was an exact name
   match, the alias was dropped entirely — no attempt to resolve by context.

4. **"First mention per whole article" starves long articles.** `linkify` set
   `LINK_ONCE` per *page view*, so in a 6,000-word, 12-part event the reader gets
   one Markop link in Part One and then nothing for the remaining 11 parts.

5. **The density setting existed but was invisible.** `low/normal/aggressive`
   shipped inside `articleControlPanel`, which is rendered into a
   `railBox(..., {open:false})` — a collapsed `<details>` at the bottom of the
   right rail. Effectively nobody could find it.

6. **No singular/plural race handling.** `Toads` matched, `Toad` did not.

## Measured result (same article, after the overhaul)

| Density    | Inline links | Unique pages |
|------------|--------------|--------------|
| Light      | 14           | 13           |
| Normal     | 82           | 15           |
| Aggressive | 179          | 15           |

Was **13 links / 13 unique** with no way to change it. Markop now links 57×
in aggressive (was 1×), Remi 21× (was 1×), **Dan 13× (was 0)**, Toad/Toads 12×.
Possessives (`Markop’s`, `Archivist’s`) link correctly. Verified in a real DOM
via jsdom: 28/28 routes and 115/115 sampled articles render with **zero errors**,
and **no article is left with zero prose links**.

## The five features shipped

1. **Smart Alias & Nickname Engine** — first names, middle-name collapse,
   possessives, singular/plural species forms, honorifics, and `—`/`(` suffix
   trimming, with a generic-word guard.
2. **Context-Aware Disambiguation** — ambiguous names (Dan, Toad, …) resolve to
   whichever candidate is actually a participant / related article of the page
   being read, instead of being dropped.
3. **Density Tiers (Light / Normal / Aggressive) + section-scoped relinking**,
   exposed through an always-visible Link HUD instead of a buried panel.
4. **Rich hover cards** — portrait, kind badge, XP level, faction/status,
   summary and quick actions.
5. **Link Graph + Wanted Pages** — per-article outbound/inbound link map computed
   from real prose links, plus a site-wide registry of mentioned-but-missing
   entities ("redlinks") at `#/wanted` so gaps become a work queue.

### Bonus fix found while building Feature 5
Wanted Pages immediately exposed that **`remi` was referenced 48 times as a dead
grey chip** because the canonical id is `remi_akamatsu_full_backstory`. Same for
`archie` → `archie_miser`, `oracle` → `the_oracle`, `azure` → `azure_rakasha`,
`vaxillus` → `vaxillus_the_beastmaster`. Added `resolveArticleId()` (id-alias table
built from `the_` prefixes, unique character first-tokens, and the curated XP-key
map) and wired it into `openId()`, the related-article chips and the router, so
those references are now live links. Wanted count dropped 565 → 556 and the
remaining entries (`shadowfell`, `feywild`, …) are genuine missing pages.

---

# Round 2 — precision pass

Reported: on `mount_ebott_survey_part_3`, the sentence
«addressed **Koffin-K** as **'Boss'**» hyperlinked *Boss* → **Boss Knuckles**.

This was a false positive introduced by Feature 1: `Boss Knuckles` is a character, so the
first-name rule generated the alias **"Boss"** — an everyday noun.

## Root cause

Two hard-coded lists had drifted apart: `TITLES` (used to *strip* honorifics) and
`GENERIC_FIRST` (used to *refuse* them as aliases). `boss`, `forgemaster`, `sage`,
`legionary`, `shadowmaster` were in neither. Audit of derived one-word aliases found 7
such title-derived collisions.

## Four safeguards added

1. **One shared honorific list.** `TITLE_WORDS` (~110 rank/role words) now drives both
   stripping and refusal, and stripping is iterative, so `Lord High Admiral X` → `X` and
   `Sage Morel the Learned` → `Morel`. `Boss Knuckles` now yields only `Knuckles`.
2. **Form-of-address suppression.** Even a valid alias is skipped when the prose is using
   it as a mode of address — `as 'Boss'`, `called him "Chief"`, `known as X`, `answers to X`.
3. **Corpus-learned homograph detection.** Rather than hand-maintaining a blocklist,
   `buildHomographs()` scans the corpus for each derived alias spelled **lower-case** as a
   standalone word. If the archive itself uses it as a common noun (`wing`, `core`, `times`,
   `root`, `toad`, `knuckles` → 45 words), it only links mid-sentence where a capital really
   means a name. Words never lower-cased (`Peach`, `Daisy`, `Archie`, `Remi`, `Morel`) stay
   trusted everywhere. Markdown link targets, snake_case ids, inline code and URLs are
   stripped first, so `[Archie Miser](archie_miser)` is not mistaken for prose.
4. **Reader-side muting.** Hover any link and press **M** to stop auto-linking that entity
   site-wide; muted entities are listed and reversible in Reader Controls. Any future bad
   match is now fixable from the UI without a code change. The controls panel also reports
   how many weak matches were auto-skipped on the page.

## Verified

- `'Boss'` no longer links; Koffin-K still links 34× on that page; sentence text unchanged
- Link volume held steady (imp ambush 14 / 79 / 175) — only genuine false positives removed
- 27/27 routes and 97/97 articles clean, **0 failures**, no zero-link articles
- Mute/unmute, the M shortcut and the exceptions UI all verified in a real DOM

## Content fix

The Imp Ambush article contained an out-of-character authorial aside that quoted
the raw session script and admitted confusion:

> *Wait, she stole his gun last night on Tymnas's suggestion, but wait—Markop's
> bags still had no gun missing? … The script says: 'markop checks his bags
> notices the items remi stole no gun or artifact missing'. …*

Per the user: the script was wrong, **Remi did steal the gun** (established in
`the_midnight_audit_of_harvestide_28`, Part Eleven: "The Gun"). The passage is
rewritten so Markop finds the gun genuinely missing, which is now consistent with
the previous night's event.

---

# Round 3 — context-aware resolution

The first pass treated context as a flat `Set`: an entity was either "in this article" or
not. That is enough to stop `Dan` being unlinkable, but too blunt once several candidates
are all present — the tie was broken by registry priority, not by the article.

## Weighted relevance

`LINK_CONTEXT_W` now scores every entity by *how* it relates to the page:

| Role | Weight |
|---|---|
| named participant | 100 |
| XP recipient | 90 |
| related article / key event | 60 |
| member / notable member | 55 |
| ally / enemy | 40 |
| backlink | 30 |
| same cultural sphere | 15 |

An entity cited in several roles scores higher, with diminishing returns, so a named
participant who is also an XP recipient outranks a passing mention. On the Imp Ambush the
seven cast members score 123–145 while a merely-related article sits at 60.

## Proximity memory

`LINK_RECENT` records the character offset where each entity was last linked.
`resolveAmbiguous()` prefers a candidate linked within the previous ~240 characters, which
is how a human reader disambiguates a bare repeat of a name. Context still dominates
(weighted ×10), but strong recency breaks a context tie.

Verified: link volume unchanged (14 / 79 / 175 across the tiers), `Dan` still resolves to
`dan_the_toad`, and the `'Boss'` suppression from round 2 still holds.
