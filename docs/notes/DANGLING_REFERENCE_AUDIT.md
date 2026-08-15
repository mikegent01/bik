# Dangling Reference Audit

**Method.** The site builds wiki articles from exactly ten `TYPES` in `index.html` (L4302):
`characters, factions, events, battles, locations, races, nations, cultures, collections, trials`.
Everything else registered in `buildIndexes()` (artifacts, vendors, dynasties, docket files,
traditions…) is *search-only* — it can appear in search results and still have no page.

That distinction is *part* of the audit, but on its own it is too narrow — see the
correction below.

### Correction: there are two systems, not one

The first version of this audit checked only the ten article `TYPES` and therefore
understated what the site can already link. `buildLinkRegistry()` is a **separate system**
from page resolution. It auto-links prose **by name** (via `safeAliases`) across articles
*and* ~18 non-article kinds, with this priority order:

`article 100, nation 95, artifact 80, bearer 78, invitem 76, craftingrecipe 75,`
`currency 75, vendor 74, craftingmaterial 74, dynasty 72, conflict 70, majorbattle 68,`
`holiday 50, member 40, session 38, crisis 36, vote 30, system 20`

So there are **three** distinct failure modes, and they need different fixes:

| Failure | Symptom | Fix |
|---|---|---|
| **Wrong id** | reference points at an id that does not exist | correct the id |
| **No page** | the entity exists nowhere | author a page |
| **Not aliased** | a record exists and has a route, but prose uses a name the registry never learned | add an `aliases` entry |

The third mode is the one that made this problem hard to see from the outside, and it is
why the user could not name the gap precisely: the entities were *not interlinked*, so
nothing in the UI pointed at the hole.

Worked example: `aegis_command_riot` exists as a majorbattle and is reachable — but only
under the name **"The Aegis Command Uprising"**. Every piece of prose that writes
"Aegis Command Riot" silently failed to link. That needed an **alias, not a page**.

- Built the live page set from the ten type files: **454 articles**
  (characters 132, events 93, battles 56, races 51, locations 38, nations 31,
  collections 19, factions 17, cultures 15, trials 7).
- Re-implemented `buildIdAliases()` + `resolveArticleId()` in the checker so that
  `the_oracle`→`oracle` and single-token character names are **not** reported as missing.
  Without this the report is full of false positives.
- Walked every `.json` under `data/` and collected every id used in a reference field
  (`relatedArticles`, `participatingCharacters`, `relatedEvents`, `articles`, `participants`…).
- Separately counted **prose mentions** of named entities that are never linked at all.

## Result

**346 distinct dangling ids** after alias resolution. They are not all the same problem.

### Class A — broken references (18). A page exists; the id is wrong.

These must be **fixed, not authored**. Writing a page here would create a duplicate.

| Bad id | Real page |
|---|---|
| `the_planar_fracture` ×8 | `planar_fracture` |
| `black_crystal` ×4 | `black_crystal_item` |
| `the_shadeward_arc` ×2 | `shadeward_arc` |
| `the_overgrown_manor_campaign` ×2 | `overgrown_manor_campaign` |
| `the_hag_of_ferngrove` ×2 | `the_hag_of_ferngrove_manor` |
| `kivotos_millennium_science_school` ×2 | `millennium_science_school` |
| `mazebound` ×2 | `mazebounds` |
| `the_mushroom_kingdom`, `the_mushroom_regency`, `the_rescue_of_steely`, `greenskins`, `fawthful_forces`, `toadsworth_elder`, `professor_egadd`, `arunedeal_goblins`, `the_ruined_manor_convergence` | drop `the_` / spelling |
| `star_road` | `star_rod` — **verify**, may be a real distinct concept |
| `captain_toad` | `captain_toadette` — **verify**, likely a different character |

### Class B — genuinely missing, and load-bearing in the Toad arc

Ranked by how hard the corpus leans on them.

| Entity | Prose mentions | Status |
|---|---|---|
| **Order 120** | 169, in 18 files | no page; `order_120` linked from battles/characters/collections |
| **Iron Mandate** | 92, in 19 files | no page |
| **Third Eye** | 69, in 17 files | no page; battles say "formation of the Cells of the Third Eye" |
| **Supernatural Sovereignty Act** | 56, in 20 files | no page |
| **Sonic Grid** | 34 | no page; a named feature of Aegis Command |
| **Legionlance** | 30 | *partly covered* — `vigilance` is titled "The Vigilance (later 'Legionlance')"; the id `the_vigilance` is dangling ×3 |
| **Mini-Mushroom** | 30 | no page; the mechanism of the riot |
| **Fractured Heart** | 22 | no page; the movement's philosophy |
| **Council of Seven** | 10, in 4 files | **no page** — the user's example, confirmed |
| **Midlands Diet** | 9 | no page; the body that passed the Iron Mandate 28-8-3 |
| **Accountability Docket** | 6 | no page |
| **Whispering Caves** | 4 | no page; underrail link out of Aegis Command |

### Class C — dangling *characters* in the Toad arc

`majorBattles.json → aegis_command_riot` lists `participatingCharacters`:
`speaker_rivers`, `creek_medic`, `general_ironhand`. Only the last one resolves.

- **`speaker_rivers`** — commander of the riot, "Trojan Speaker" who let himself be captured
  to plant a virus; resigned from the Midlands Diet in protest at the Iron Mandate. No page.
- **`creek_medic`** / **Creek** — hospital medic who stabilised Dan after his arm was taken,
  melted a Legion soldier with acid at the courtyard. Named in `factions.json` roster. No page.
- **`the_mole`** — has a *role entry* in `battles.json` (`id: the_mole`) and a whole
  "**The Mole's Involvement**" prose section, plus seven Waluigi observations in
  `characters.json`. Referenced as a character id and does not resolve. No page.
- **`robinson`** — taken to Aegis with the dragon on Day 21. No page.

### Resolved: Speaker L and Speaker Rivers are two people, in sequence

Not a contradiction. **Speaker L led, then fled.** Rivers took over and is considerably more
extreme — the reading being that Speaker L "didn't go far enough". The cohort's own song
(`songs-data.js:157`, *Reborn (Iron Remnant Remix)*) is the source:

> Speaker L once led us bold, / But now the stories twist and fold— / The Legion comes with iron creed

with the context field citing "Speaker L's twisted stories" and the lines "our trusted hand
now nearly taken", "hurt, betrayed".

**`liberatedToadsSystem.json` is stale on this point.** Its 09:00-Rivers-resigns /
10:00-Speaker-L-convenes timeline was never updated for the handover, and its `speaker`
block still names Speaker L with an `asOf` frozen at Highsun 21. Where it disagrees with
the songs, prefer the songs. It does partly know: elsewhere the same file says
*"Speaker L missing"* and *"Speaker L revealed as a decoy/missing"*, and the `structure`
block records Captain Fernback assuming temporary command.

### Council of Seven vs the Toad council

**Council of Seven vs the Toad council.** `liberatedToadsSystem.json` has a seven-seat council
with one VACANT seat (the Mole's). `props.json` has `prop_council_seven_division` — a division
list, "four to three, with one abstention recorded twice", seven members and eight votes
counted. `quests.json` puts the Council of Seven in the *decoy's* mouth under interrogation,
alongside the "Fractured Heart" philosophy. So the Council of Seven is most likely the
Liberated Toads' own council as described *to the enemy* — which means the right fix may be
one page that reconciles both, not a new unrelated body.

### Class D — exists, has a route, but the name is not aliased

Confirmed by building the 163-name non-article registry and probing it. These link today:
`the aegis command uprising` → majorbattle, `the aegis uprising` → conflict.

These did **not** link under any kind, article or otherwise, at audit time:
`aegis command riot`, `order 120`, `iron mandate`, `council of seven`, `third eye`,
`sonic grid`, `supernatural sovereignty act`, `fractured heart`, `mini-mushroom`,
`midlands diet`, `accountability docket`, `legionlance`, `whispering caves`.

## Recommended order

1. Fix Class A (18 one-line id corrections). Zero authoring risk, immediate link recovery.
2. Author Class C characters — `speaker_rivers`, `creek_medic`, `the_mole`, `robinson` —
   because existing records already point at those exact ids.
3. Author Class B concepts, heaviest first: Order 120, Iron Mandate, Third Eye,
   Supernatural Sovereignty Act, Council of Seven.
4. Add Class D aliases so existing records answer to the names prose actually uses.

## Done in this pass

- **Class A:** 16 ids corrected across 7 files (54 reference sites). Two were caught as
  over-reach and reverted — `vendor: "greenskins"` and the inventory item `black_crystal`
  live in **different namespaces** from article ids and were correctly spelled already.
  Lesson: an id string is only wrong *relative to the namespace of the field it sits in*.
- **Pages authored (5):** `order_120`, `iron_mandate` (events); `council_of_seven`
  (factions); `speaker_rivers`, `creek_medic` (characters). Page count **454 → 459**.
- **Class D alias:** `aegis_command_riot` now answers to "Aegis Command Riot",
  "The Aegis Command Riot", "the Riot at Aegis Command".
- **Interlinked:** `aegis_command_riot.relatedArticles` now carries all five new ids.
- **Verified in a real browser** (jsdom), not just by grep: all five pages render, and
  "Order 120", "Iron Mandate", "Council of Seven", "Speaker Rivers" and "Creek" auto-link
  from other pages' prose in both directions. All four checkers 0 errors / 0 warnings.

## Round 2 — the Class B/C batch

Seven outstanding entities were resolved with the user's direct answers. **Every answer was
checked against the data before anything was written, and three of the seven needed
correcting** — the answer was a memory of the story, the files are the story.

| Entity | User's answer | What the data said |
|---|---|---|
| Third Eye | Archie Miser's third eye | Correct — *and* there is a second referent, the **Cells of the Third Eye** alliance named after it |
| Fractured Heart | "not on this website" | **Wrong** — present in 6 files; it is Speaker L's Day 18 docket line |
| Accountability Docket | Speaker L's warrant | Correct, and pinned to **ED-001**, Day 18, under ER-17-A (6-0-0) |
| Robinson | Markop's father's *middle name* | **Wrong** — Robinson **is** Markop's father, a separate person in 4 files |
| The Mole | a mole who sold them out on the Vigilance | Council seat 7 confirmed; the **Vigilance framing is not in the data** |
| Sonic Grid | needs a page | Already covered — `aegis_command` is titled "Aegis Command & The Sonic Grid" |
| Whispering Caves | needs a page | Only 4 passing mentions, no defining detail — a page would be invention |

### Pages authored (4)

`robinson`, `the_mole` (characters); `accountability_docket`, `fractured_heart` (events).
Page count **459 → 463**.

- **Robinson** — Markop's father. Day 21, 10:00, Dragon Mountain: the Great Dragon reveals
  the Dragon–Empire war is manufactured by sonic control; Robinson and the dragon are
  taken to Aegis Command **4.5 hours before Order 120**. Fate unrecorded.
- **The Mole** — Cohort Council seat 7 (Scouts), Iron Legion spy, defected Day 16, seat
  left **VACANT**. The page does **not** assert identity with the Brobot-arc "the Mole";
  two entities, one name, no evidence connecting them.
- **Accountability Docket** — ED-001. Names Archie, Bowser, Waluigi, Dan, Eager. Links to
  the live `#/pond-docket` route rather than duplicating it.
- **Fractured Heart** — traced to its origin line and to the interrogation where the Legion
  filed it as "cult-like rhetoric" immediately before Order 120.

### Class D aliases (no new pages)

`aegis_command` ← "Sonic Grid" / "The Sonic Grid"; `vigilance` ← "The Vigilance" /
"Legionlance"; `ruined_manor_convergence` ← "Cells of the Third Eye"; `archie_miser` ←
"Archie". Three `"the_vigilance"` id references corrected to `vigilance`.

### Interlinking

21 backlinks added across `factions/events/characters/locations` so every new page is
reachable **in both directions**. Verified in jsdom: inbound refs are now
robinson 5, the_mole 6, accountability_docket 6, fractured_heart 6, and each new page
renders with 22–36 outbound links. All four checkers 0 errors / 0 warnings.

## Round 3 — the last three (Class B closed)

| Entity | User's answer | What the data added |
|---|---|---|
| Supernatural Sovereignty Act | "act outlawing vampires" | True as a summary, but `props.json` holds the **posted five-clause text**, and the operative clauses never say *vampire* — they outlaw a kind of promise |
| Midlands Diet | "regal empires diet political body" | Confirmed; the Legion's own asset register sizes it at **28 of 39 seats aligned** |
| Mini-Mushroom | "an item from mario" | True, but in this archive it is the item that **broke Aegis Command** |

### Pages authored (2) + 1 item

- **`supernatural_sovereignty_act`** (events) — passed 13:00, 18th Highsun 1040 BF. Built on
  the real statute text recovered from `prop_sovereignty_act_notice`. Clause 3 completes the
  offence on the giving; clause 5 convicts everyone present who did not dissent aloud. The
  page's argument is that this Act is the loaded chamber and the Iron Mandate is the trigger.
- **`midlands_diet`** (factions) — 39 seats. The Legion's register says 28 aligned; the Iron
  Mandate passed **28**-8-3. The Mandate persuaded nobody who was not already counted.
- **`mini_mushroom`** — added to `INVENTORY_SYSTEM` in `index.html`, *not* as an article. It
  already existed in the bulk shop catalogue (`items_030.js`), but that catalogue is **not
  indexed by the link registry**, so the name was unlinkable everywhere it mattered.

### The Mini-Mushroom lesson (new failure mode)

This is a **fifth** failure mode beyond the four in the original audit: *the entity exists,
in a data file, with a good description — but in a namespace the link registry never reads.*
`buildLinkRegistry` aliases `INVENTORY_SYSTEM.items`, not `shop-items/*.js`. Anything
story-critical living only in the shop catalogue is invisible to autolinking. Check the
namespace, not just the existence.

### Interlinking

13 further backlinks. `midlands_diet` and `supernatural_sovereignty_act` were **restored to
`iron_mandate.relatedArticles`**, closing the deliberate omission left in Round 1.

Verified in jsdom: "Mini Mushroom", "Midlands Diet", "Supernatural Sovereignty Act",
"Sonic Grid", "The Vigilance" and "Council of Seven" all resolve from bare prose. Both new
pages render (h1 correct, 33 outbound links each). All four checkers 0/0. **465 articles.**

## Still open

Nothing from the original dangling-reference sweep. Remaining known gap: `Mini Mushroom Dust`
does not autolink (it is a separate shop-catalogue item, same namespace problem — left alone
because nothing references it in prose). `midlands_diet` and `supernatural_sovereignty_act` were deliberately **removed**
from the new Iron Mandate page's `relatedArticles` rather than shipped as broken links —
restore them when those pages exist.

**The betrayal article has not been found.** Searching ids for `betray` yields only
`archie_dinner_betrayal`, `ash_of_betrayal`, `betrayal_amulet`, `delfino_gelato_betrayal`,
all unrelated. The closest hit by title is
`shadow_estate_session_Harvestside_8` — *"The Portal Betrayal and the Gardner's Vote"* —
which is a different arc. Needs a prose search, not an id search.

Every figure in those pages must be scraped from the source files. Known contradictions
(12 KIA/17 recaptured vs 3 MIA/67 Legion KIA for the same 14:30 battle) get recorded as
contradictions, not silently reconciled.
