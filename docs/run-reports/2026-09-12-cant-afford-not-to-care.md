# Run report — I Can't Afford Not to Care Anymore (Feyward session filing)

Date: 2026-09-12
Branch: `arena/01a0967a-bik`

## 0. The question asked first: was this article ever added?

**No.** The session described in the transcript — the doorway fight, the Colour
Division retrieval, the sanctuary confrontation — had **never been filed**. The
previous session, `feyward_library_reclamation_and_the_kitchen`, ends in its
final section *"I Can't Afford Not to Care Anymore"* with Waluigi opening a door
mid-roar and the note *"next filing begins in that doorway, and it is mine."*
That next filing did not exist. The latest commit on the branch point
(`d8dcea3 Update feyward.txt`) contains no record of it, and the last-appended
event in `events.json` was `the_garden_above_the_fire` (a 1035 BF Mario-arc
filing, unrelated).

This run files it.

## 1. Art direction — base images, not generation from scratch

Per `docs/IMAGE_GENERATION_GUIDE.md` Rule 0 (and the standing instruction), the
three party portraits already in the repository were passed as **reference
images** to every generation. Nothing was described from scratch.

| Base image used | Used in |
|---|---|
| `portraits/waluigi.png` | plates 01, 02, 03 |
| `portraits/hjumpik.png` | plates 01, 02, 03, 04 |
| `portraits/toad_lee.png` | plates 01, 02 |
| `portraits/red_the_kitchen_commander.png` | plate 03 |

Each prompt instructed *"composite from the supplied images, do not redesign the
characters."* The characters came through on-model — Waluigi's cap and gauntlets,
Hjumpik's wolf-pelt hood (which is load-bearing plot in this session), Toad Lee's
cap spotting.

## 2. Files created or edited — every one

CREATED

- `Reputation-Matrix2/assets/images/events/ambush-in-the-doorway/amb-01-drag-him-out.jpg` — the doorway resolved; Hjumpik hauling Waluigi out by the sleeve, second treant budding. Lead image + section plate.
- `Reputation-Matrix2/assets/images/events/ambush-in-the-doorway/amb-02-color-division.jpg` — the landing; Toad Lee held, Waluigi cuffed, Hjumpik alone with the warhammer.
- `Reputation-Matrix2/assets/images/events/ambush-in-the-doorway/amb-03-red-unmasked.jpg` — the kitchen doorway; Red out of the bugbear-demon shape, reporting the trees.
- `Reputation-Matrix2/assets/images/events/ambush-in-the-doorway/amb-04-the-show-can-begin.jpg` — the sanctuary; the glamour finished, the floor splitting, the bell up.
- `docs/run-reports/2026-09-12-cant-afford-not-to-care.md` — this report.

EDITED (hand-written)

- `Reputation-Matrix2/data/characters.json` — **+3 entries**, appended without reformatting the file: `the_plant_lady` (the overgrowth wearing Aurelian, now with its stated plan and the name it answered to), `color_division_black` (the operative who made the identification), `the_hallway_reinforcement_guard` (the sword-slash witness).
- `Reputation-Matrix2/data/factions.json` — **+1 entry**: `color_division`, the four-operative Iron Legion special forces retrieval unit contracted through the Aegis Magi.
- `Reputation-Matrix2/data/events.json` — **+1 event**: `feyward_i_cant_afford_not_to_care`, 19 sections, 8 participants, 5 `xpAwards[]` rows, lead image, 3 section plates.
- `Reputation-Matrix2/data/props.json` — **+3 exhibits**: `prop_accords_900_20_containment` (the six Accords pages read to Hjumpik mid-siege), `prop_aegis_magi_recall_clause` (the *collateral that can walk away* clause that the Division actually came to enforce), `prop_revel_engagement_ledger` (the full three-round combat tally).
- `Reputation-Matrix2/data/investigations.json` — amended `shadeward_feyward_ruined`: +1 `sessions[]` row, **+3 exhibits** with analyses and inline `[[roll:…]]` layers, **+4 leads**, `relatedEvents` and `lastFiled` bumped.
- `Reputation-Matrix2/data/locations.json` — `overgrown_manor` gains 4 notable features (sealed sanctuary, the sword-slash finding, the name Carnivorous, Colour Division holding the landing).
- `Reputation-Matrix2/data/mainPage.json` — `featuredArticle` + `latestUpdate` set to the new event; new field-gallery entry prepended.
- `index.html` — new `SITE_UPDATES` entry prepended (newest first).
- `tools/rnn-scripts/pending-news-articles.json` — event appended; pending list now 2/10.
- `tools/tests/test-planar-map.mjs` — three snapshot counts updated for the new faction and event: factions 21→22, Disaster Inc. midlands stops 43→44, filtered party-event bucket 75→76.

GENERATED — none. No generated file was hand-edited.

## 3. The event

EVENT `feyward_i_cant_afford_not_to_care` — *"I Can't Afford Not to Care Anymore:
The Doorway, the Colour Division, and the Lady Who Answered to Carnivorous"*

| | |
|---|---|
| date | 2 Aethel, 922 BF (Feyward clock) — continuing without a break from the previous filing's final doorway |
| timeCode | `TC:0922-09-02/FEY` |
| location | The Overgrown Manor — Revel doorway, green corridor, hallway post, kitchen, lower locked room, upper landing, sealed sanctuary |
| sections | 19 |
| status | Filed |
| route | `#/article/feyward_i_cant_afford_not_to_care` |

Beats preserved from the transcript, in order: the doorway and the full-height
treant · Hjumpik unable to read the damage · the drag-out · *it's not an ambush
if it's right here* · the glory/strategy argument and the mutual refusal of
command · the bomb placed in Toad Lee's hand, the miss, the veteran picking it
up · the deserter accusation and *attack the tree* · two treants, then more ·
*are these guys weak to fire damage* · *put your own theatrics into it* · the
hallway guard, the sword slashes, the soup-bomb proposal, Wario named as the
specialist · the coin-shake, the shadow, the violet fungus killed by the satyr ·
Red changing shape behind the closed door · the Colour Division sequence and the
onesie identification · the stair chase and the guard post argued past · the
empty room where the freezing spell was used · the full theory session (*a house
divided against itself*) and Toad Lee's *maybe an ambush* · the guards' account
and three months becoming five · the ambush, the apprehension, *leverage*, the
Accords reading, the handcuffs-not-cages line · the sealed sanctuary and the
monster's full statement of intent · the foflower question, *that's… my name* ·
the thrown dinner, the glamour ending, the bell, the locked bathroom door · and
a closing section translating the full 3-round / 44-turn / 24-attack / 13-spell
combat log.

## 4. XP awarded (filed on the event only — ledger totals not mutated)

| Character | `xpKey` | Category | XP | For |
|---|---|---|---:|---|
| Hjumpik | `hjumpik` | exploration | 320 | Refused an unreadable fight, dragged Waluigi out, converted the argument into a compromise. |
| Hjumpik | `hjumpik` | social | 300 | Bought a window under arrest, refused mage cages, broke the false lady's composure and landed the poison. |
| Waluigi | `waluigi` | chaos | 260 | Opened the door, owned it in the active voice, filed the standstill as a diagnosis. |
| Waluigi | `waluigi` | discovery | 220 | Caught the sword-slash testimony and the Carnivorous slip and filed both as leads. |
| Toad Lee | `toadlee` | technique | 180 | Threw the bomb, missed, then supplied the correct theory in three words. |
| **Total** | | | **1,280** | across 3 characters |

`xpKey` values checked against `XP_SUMMARY` in `index.html` (note `toad_lee` → `toadlee`).

## 5. Investigation — `shadeward_feyward_ruined`

Session row `s_a02_cant_afford_not_to_care`. Three exhibits, each with a DC, an
argued analysis, and inline insight rolls written with real failure branches:

- `ex_sword_slashes` (DC 3) — the edged-weapon wounds on the manor's dead, and the argument that nobody has examined a body in three sessions.
- `ex_carnivorous_name` (DC 4) — the name slip, weighed honestly against the reading that it was a flat fey joke.
- `ex_revel_friendly_fire` (DC 3) — the 44-turn ledger, with BOLD morale readings used to rule out simple panic and the absence of any observed compulsion used to rule *against* the conspiracy reading.

Four leads opened, each with the `why` written first:
`lead_sword_slashes_second_killer`, `lead_carnivorous_binding`,
`lead_soup_bomb`, `lead_hjumpik_missing_months`.

## 6. Verification

```
python3 tools/check-exhibits.py          0 errors, 1 pre-existing warning
python3 tools/check-investigations.py    0 errors, 4 pre-existing stub warnings
python3 tools/check-rolls.py             0 errors
python3 tools/check-timecodes.py         PASS
python3 tools/check-references.py        PASS (408 pre-existing legacy warnings)
python3 tools/check-home-feed.py         OK — latestUpdate == last-appended == the new event
python3 tools/check-covers.py            OK — 3 covers, 15 field images, all paths resolve
python3 tools/build-rnn-broadcast.py --check   OK — pending 2/10, no episode owed
node  tools/tests/test-planar-map.mjs    50 passed, 0 failed (after snapshot bump)
python3 tools/check-all.py               1 failure: "map lenses"
```

**The one failure is pre-existing and unrelated.** `tools/tests/test-map-lenses.mjs`
and `test-home-feed-render.mjs` both fail with `ERR_MODULE_NOT_FOUND: jsdom` —
the package is not installed in this environment. Confirmed by stashing all of
this run's changes and re-running `check-all.py`, which fails identically on
`map lenses` at the clean branch point.

Served the archive with `python3 start.py --no-browser --host 0.0.0.0 --port 8765`
and confirmed the event loads from the live JSON, has 19 sections, and that the
lead image and all three section plates resolve on disk.

## 7. Cross-system pass

- Home feed: DONE — last-appended event, rendered by `homeRecentAdventuresHtml()`; no card pasted into HTML.
- `mainPage.json`: DONE — latest + featured, plus a field-gallery entry.
- `SITE_UPDATES`: DONE — prepended.
- RNN pending: DONE — 2/10, cadence says no episode owed.
- Locations: DONE — manor amended, no new location needed (every room is interior to `overgrown_manor`).
- Factions: DONE — Colour Division filed; Iron Legion and Mages' Guild linked as parent/client.
- Battles: NOT FILED — deliberately. The Revel engagement produced no decision, no casualties among the party and no ground taken; per `docs/BATTLES_GUIDE.md` it does not earn a `battles.json` record. The full tally is filed instead as an exhibit (`prop_revel_engagement_ledger`) and as the event's closing section.
- XP ledger: NOT MUTATED — awards filed on the event as a preview, per the filing process.
