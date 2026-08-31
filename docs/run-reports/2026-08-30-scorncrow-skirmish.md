# Run report — 2026-08-30 · The Scorncrow Skirmish

Completed the `the_scorncrow_skirmish` stub per `docs/SESSION_FILING_PROCESS.md`
(intake → locations → characters → XP → event → exhibits → investigation →
index → RNN → cross-system → run report).

## Files created or edited

**CREATED**
- `Reputation-Matrix2/assets/images/events/scorncrow-skirmish/` — 4 JPEGs
  (`scorncrow-01-battlefield.jpg` lead, `-02-swing-bats.jpg`,
  `-03-eager-pin.jpg`, `-04-dan-guard.jpg`), each generated with a canon
  portrait from `portraits/` as the reference, compressed to 178–256 KB
- `docs/run-reports/2026-08-30-scorncrow-skirmish.md` — this report

**EDITED**
- `Reputation-Matrix2/data/events.json` — stub → full event (6 sections,
  ~2,250 words), last object in array, ids resolve
- `Reputation-Matrix2/data/battles.json` — + `the_scorncrow_skirmish_battle`
  (61 records)
- `Reputation-Matrix2/data/props.json` — + `prop_wario_elixir_warning_label`
  (127 props), wired inline via `[[prop:…]]`
- `Reputation-Matrix2/data/investigations.json` — `shadeward_feyward_ruined`:
  + `s_h30_scorncrow_skirmish` session row, + related event
- `Reputation-Matrix2/data/wahwire/posts.json` — + `wahwire_scorncrow_skirmish`
  (order 11, author wario, status posted)
- `Reputation-Matrix2/data/mainPage.json` — `latestUpdate` +
  `featuredArticle` → `the_scorncrow_skirmish`
- `index.html` — prepended `SITE_UPDATES` entry
- `tools/rnn-scripts/pending-news-articles.json` — appended event id (7/10)
- `README.md` + `docs/IMAGE_GENERATION_GUIDE.md` — added the portrait-reference
  rule (a known character in a generation MUST be pulled from `portraits/` as
  a reference, never described from scratch)

## Events filed

```
EVENT  the_scorncrow_skirmish — "The Scorncrow Skirmish: Deforestation,
       Garlic Weapons, and Wario's Stalled Motorbike"
  date      30 Harvestide, 1040 BF — the overgrown grove, the night of the
            threshold storm (date chain walked from the prior event; not the
            world clock)
  location  The overgrown grove battlefield, Shadow Estate (Shadowfell)
  parties   markop, green_t, remi_akamatsu_full_backstory, wario,
            archie_miser, dan, eager, mossy, rattles, liberated_toads,
            scorncrow  (all ids resolve; 11 participants)
  length    6 sections / ~2,250 words · lead image + 3 section figures
  status    ongoing · aftermath + waluigiAssessment + reputationNotes present
  route     #/article/the_scorncrow_skirmish
```

## XP

**No XP awarded this run.** The transcript supplied no XP amounts and no
`xpAwards` values were invented. If XP is owed for this session, it needs a
separate XP pass (flagged under Not done).

## Index / RNN / cross-system

- **Index:** `latestUpdate` + `featuredArticle` ✓ · `SITE_UPDATES` prepended ✓
- **RNN:** pending list now 7/10 — no episode owed yet ✓
- **XSYS wahwire** — Wario post `wahwire_scorncrow_skirmish` (order 11),
  in-voice reaction, not a summary ✓
- **XSYS songs** — n/a — "We Are the Toads" already archived
  (`song_we_are_the_toads`, single `sourceId` preserved to its original event);
  the on-march lyric this session was a variation, no new entry
- **XSYS pond_patrol** — n/a — no docket-named Toad changed status/witness;
  Dan guarded Archie, the Toads marched and sang, no docket evidence or
  accountability event. Roster untouched
- **XSYS territory / POIs / currencies / books / bros / dynasties** — n/a —
  the grove remained contested (no lasting territory change); no currency,
  book, or dynasty involved

## Verification

- `python3 tools/check-all.py` — all checks that apply to this filing PASS
  (references, exhibits, investigations, rolls, battles, background, home
  feed, RNN, Bros sync/test). **Two pre-existing failures are unrelated to
  this run and were present before it:** `local paths`
  (`tools/genkit/webui_template.html` → `/overnight/*` routes) and `injury
  table` (ordering 1–132). Neither file was touched by this filing.
- `python3 tools/check-exhibits.py` — 0 errors / 0 warnings
- `python3 tools/check-investigations.py` — 0 errors / 0 warnings
- Preview served and assets return HTTP 200.

## Not done / open

- **XP** — not specified in the transcript; needs a separate XP pass.
- **Four generated images** could not be visually verified in this
  environment (no vision). They were built from the prompt sheet at
  `docs/IMAGE_GENERATION_GUIDE.md` process with a canon portrait per figure
  and are compressed, but the user should eyeball `scorncrow-01…04` on the
  live preview before considering the art final. Defects are to be fixed by
  **editing** the existing files (pass `images:[...]`), not rerolling.
- **Date** — resolved by walking the chain to the prior event (30 Harvestide
  night, same night as the threshold storm). The world clock is Aethel 5,
  1040 BF, which was deliberately not used verbatim.
- **RNN episode** — not owed (7/10 pending).
