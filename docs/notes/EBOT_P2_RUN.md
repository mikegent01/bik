## Run report — Mount Ebot Part II

**Date:** 2026-08-20 (table) / **in-world:** 18 Aethel, 1032 BF

**Input classified as:** session event (continuation of the One-T expedition). Not a battle. Not Pond Patrol.

### Files

CREATED
  Reputation-Matrix2/data — event `the_mount_ebot_expedition_part_2` (10 sections, ~3,050 story words)
  locations.json — `wariocopter`
  props — `prop_ebot_warioware_stencil`, `prop_ebot_vip_clearance`, `prop_ebot_p2_calendar`
  investigations.json — stub `mount_ebot_one_t_file` (2 exhibits, 1 lead)
  assets/images/events/mount-ebot/ebot-p2-01-hold.jpg, ebot-p2-02-stencil.jpg, ebot-p2-03-tank.jpg
  docs/notes/EBOT_P2_PROMPTS.md
  docs/notes/EBOT_P2_RUN.md

EDITED
  characters.json — jory_dobbs status / keyEvents / related
  events.json — Part I relatedArticles + Part II
  wahwire/posts.json — wahwire_ebot_part2_audit
  tools/rnn-scripts/pending-news-articles.json — +1 (pending 2)
  tools/update-index-home.py + index.html timeline + SITE_UPDATES

### Event

EVENT  the_mount_ebot_expedition_part_2 — Part II: The Corporate Audit
  date      18 Aethel, 1032 BF (calendar in the junk; not inferred)
  location  wariocopter
  parties   waluigi, wario, jory_dobbs (pilot unnamed)
  length    10 sections / ~3,050 story words (under the 4.5–6.5k aim; Part I already carried the mountain)
  route     #/article/the_mount_ebot_expedition_part_2

### XP (filed on event only — not ledger totals)

| Character | xpKey | Category | XP | For |
|---|---|---|---:|---|
| Jory Dobbs | jory_dobbs | discovery | 280 | Read the WarioWare stencil on the room |
| Jory Dobbs | jory_dobbs | technique | 220 | All Clear at 20% flux |
| Jory Dobbs | jory_dobbs | social | 160 | Packing question, jobs, key trade, rift |
| Waluigi | waluigi | discovery | 200 | Pointed the silver canister |
| Waluigi | waluigi | social | 140 | Named the mule system |
| Wario | wario | chaos | 180 | Audit of his own hold |
| **Total** | | | **1180** | preview only |

### Checks

check-exhibits.py 0/0 · check-investigations.py 0/0 · check-rolls.py 0/0 · check-references.py PASS (legacy only)

### XSYS

pond_patrol n/a — no docket names
regal_diet n/a
wahwire DONE — wahwire_ebot_part2_audit (waluigi, smug)
poi n/a — aircraft interior
bros n/a
RNN pending 2/10 — no episode

### Not done / open

- Story word count under Imp band; compressed crate-rummage loops on purpose (transcript-to-story).
- Charter pilot left unnamed; dump's "Grime" treated as RPG bleed / Wario nickname, not a new character.
- Heartstone and dimensional rift filed as speech, not survey.
- jory_dobbs still missing from XP_SUMMARY; awards are event preview.
- No article-analysis companion this run (short recovered leaf; One-T investigation holds the argument).
- mainPage.json featured left on the 1045 Ebott final log.
