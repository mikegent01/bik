# Run Report — Jack Miser expanded; the Miser family, the Order of Jack, Vellanet Rise, House Miser

**Date (table-side):** 3 September 2026
**Branch:** `arena/01a069d5-bik`
**Agent:** Arena.ai Agent Mode. Arena routes across several underlying models
(Claude, ChatGPT, Gemini, Grok, Qwen, Kimi among them); this run was executed by
Arena's agent, and per house style the model name is not written into canon.

---

## Purpose

**Out-of-world.** The previous commit (`9c0e652`) filed Jack Melvus Miser as a
single characters.json entry from supplied player lore. The user asked to expand
it and flagged two canon corrections:

1. **Scale down the land.** The prior draft read as "lord of his own land with
   his own military army," which the user did not want. Jack now holds a *minor*
   grant and the famous 20,000 is audited as a muster roll rather than an army.
2. **Keep the Misers obscure.** Archie Miser's family must not read as
   nationally famous. Every new record states the obscurity explicitly.
3. **Add a dynasty page**, per `docs/CROSS_SYSTEM_UPDATES.md` → Dynasties.

**In-world.** Waluipedia had linked `miser_family` from Archie's record for
months to a page that did not exist, and had no file at all on the brother who
paid for the manor. This run closes both gaps and audits the recruiting-poster
number nobody had checked.

---

## Files created or edited

```
CREATED
  Reputation-Matrix2/portraits/jack_melvus_miser.png   Jack's panel, cropped from the artist's sheet
  Reputation-Matrix2/portraits/miser_family.png        the full family sheet, trimmed to the page
  assets/backlog/miser-family/jack_melvus_miser-ai-render.png   AI render, backlog only, unreferenced
  assets/backlog/miser-family/miser_family-ai-render.png        AI render, backlog only, unreferenced
  docs/run-reports/2026-09-03-jack-miser-expansion.md  this report

EDITED
  Reputation-Matrix2/data/characters.json   ~ jack_melvus_miser rewritten (1 line → 9,171-char record)
                                            + miser_family (new record, 3,710 chars)
  Reputation-Matrix2/data/factions.json     + order_of_jack (new record)
  Reputation-Matrix2/data/locations.json    + vellanet_rise (new record)
  Reputation-Matrix2/data/wahwire/posts.json  + wahwire_the_miser_muster_roll (order 14)
  index.html                                ~ DYNASTY_SYSTEM + houseMiser (6 members, 2 branches)
                                            ~ dynastyPerks / dynastyUnlocks / dynastyLinks / intelTargetHref
                                            ~ SITE_UPDATES + one entry (position 2, behind the latest event)

GENERATED (do not hand-edit)
  none — no generator outputs were touched this run.
```

---

## Art provenance

The user supplied a pencil scan, `miser family.png` (Group: The Miser Family,
creation date 27 April 2026), labelling all five figures plus the mother.

**Canon art is cropped directly from that scan** — the artist's own drawing, not
a reinterpretation. `jack_melvus_miser.png` is Jack's column of the sheet;
`miser_family.png` is the trimmed page.

Two AI renders were produced earlier in the run (a painted portrait and a
redrawn group shot). At the user's instruction these are **kept as backlog
only**, in `assets/backlog/miser-family/`, referenced by nothing. Per
`docs/IMAGE_GENERATION_GUIDE.md` the rule that a known character is pulled from
existing reference rather than described from scratch is satisfied more strongly
here than usual: the reference *is* the canon image.

---

## Canon decisions made this run

| Decision | Reason |
|---|---|
| **Vellanet Rise is ~eleven miles** — manor, three villages, mill, quarry, road tolls | User: "I don't know he can control minor land." Jack is a landed knight, not a realm-holder. |
| **The 20,000 is a muster roll, not an army** | Kept because Jack's own people quote it, but audited in-voice: levies, unpaid volunteers, hired-out clients, and Legion personnel double-counted. Working figure = a garrison and a few hundred riders. |
| **The Misers are provincial, not famous** | User: "I don't want Archie Miser family to be that well known." Stated explicitly in the family file, the location file, and the dynasty note. Nationally the name means nothing. |
| **The two family accounts both stand** | Archie's file (25 years of rigidity, fled) and Jack's (a household he saved) contradict. Filed as sincere-and-unreconciled rather than adjudicated, so future filings stop re-litigating it. |
| **Nobody has told Jack about Archie** | New live thread. Deliberate: it is a letter nobody has written, not a war. |
| **Founded 1039 BF** | One year before the present (`currentDate.json` = 5 Aethel 1040 BF), consistent with Jack being 26 and the grant being new. Ages are given as `c.` because the parish roll is the only source. |

Rule zero observed: no `mike` anywhere. New in-world names invented this run —
Vellanet Rise, and the surnamed forms of Wanda/July/Spring/Hark — all drawn from
the supplied lore and the artist's labels, none from table names.

---

## Cross-system triggers (`docs/CROSS_SYSTEM_UPDATES.md`)

| Trigger | Status |
|---|---|
| **Dynasties** | **DONE** — `houseMiser` added to `DYNASTY_SYSTEM` with 6 members across 2 generations, 2 cadet branches (the Order of Jack; the Absent Line), intel-gated secrets, plus perks, unlocks, article links, and an intel href. |
| **WAHwire** | **DONE** — `wahwire_the_miser_muster_roll`, author `waluigi`, reaction `suspicion` (a legal tone in `reactions.json`), order 14, links to the character and the faction. |
| **Any new filing → home surface** | **DONE** — one `SITE_UPDATES` entry, placed second so the feed contract's "SITE_UPDATES[0] matches mainPage.latestUpdate" rule is not broken. |
| Regal Diet / Iron Legion politics | **NOT DONE** — no law, vote, mandate or Legion deployment changed. Jack's Legion link is inherited through the Regal Lion and is not a political act. |
| Map POIs / territory | **NOT DONE** — Vellanet Rise is a new peripheral holding, not territory changing hands. A POI can be added when a filing actually visits it. |
| Battles, Bros attacks, currencies, songs, books, Pond Patrol, XP | **NOT DONE** — none apply. No session was played; this is a character/lore filing, not an event. No XP is awarded for the same reason. |

---

## Events filed

**None.** Per `docs/INTAKE_DECISION_GUIDE.md`, supplied character lore with no
session at the table becomes character/faction/location records, not an event.
No `events.json` change, no `pending-news-articles.json` change, no RNN episode.

---

## Verification

```
python3 tools/check-references.py       PASS (403 legacy warnings — was 405; two fewer,
                                        because miser_family now resolves)
python3 tools/check-home-feed.py        OK   dynamic feed wired, no SITE_UPDATES warning
python3 tools/check-all.py              20/22 PASS
                                        FAIL injury table, FAIL investigations
                                        — both confirmed pre-existing by stashing this
                                          run's changes and re-running: identical failures
                                          on the untouched tree. Not caused here.
python3 -m json.tool …/characters.json  valid (also factions, locations, wahwire posts)
node --check  <main index.html script>  JS-OK  (1.65 MB block parses)
node  DYNASTY_SYSTEM round-trip         houseMiser parses; 6 members; gen 1 = Wanda,
                                        gen 2 = the five children; all four helper
                                        functions carry a houseMiser branch
http.server smoke test                  index.html 200; both portraits 200
```

Diff hygiene: `characters.json` is stored with `\uXXXX` escapes and
`factions.json` / `locations.json` are stored as raw UTF-8. The first write of
this run reformatted whole files; it was reverted and re-run per-file so the
final diffs are **+67 / +27 / +21 lines** — additions only, no reflow of
untouched records. `DYNASTY_SYSTEM` was re-emitted in its original single-line
minified form, so index.html's dynasty change is one line.

---

## Routes to check

```
#/article/jack_melvus_miser
#/article/miser_family
#/article/order_of_jack
#/article/vellanet_rise
#/dynasty/houseMiser
#/dynasties            (House Miser card)
```

---

## Open threads left for future filings

- **Nobody has told the Misers about Archie.** The letter is unwritten. Whoever
  writes it is a session.
- **Lunaria** is described but has no record of her own; she earns one when she
  appears in a filing rather than in a boyfriend's biography.
- **Hark's amulet** and **Spring's staff** are both flagged as unexplained in
  the dynasty secrets. Neither is resolved; neither should be resolved casually.
- **The oath wording.** The Order of Jack swears to the man before the crown. No
  Legion lawyer has read it yet.
