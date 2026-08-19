# Intake Decision Guide — What to Create From New Information

**Use this before `SESSION_FILING_PROCESS.md`.** This guide answers the first
question an agent faces when the user provides notes, a transcript, art, a
character list, shop ideas, or a rules change:

> **What kind of archive object does this data require?**

The filing process tells you the order for a session once you know you are
filing a session. This guide decides whether you need an event, battle, exhibit,
investigation update, shop item, XP award, character page, location page,
faction dossier, article analysis, annotation, asset, or no new record at all.

The governing rule is simple:

> **Create the smallest canonical object that makes the supplied fact findable,
> auditable, and linked. Do not create a second object just because a fact feels
> important.**

---

## The first five questions

Ask these in order before editing data.

| # | Question | If yes | If no |
|---:|---|---|---|
| 1 | **Did something happen in-world at a date/place?** | Usually create or update an **event article**. Continue to the event/battle gates. | It may be a character, item, shop, lore, rules, or tool change instead. |
| 2 | **Was there a discrete combat/operation with sides, stakes, outcome, and casualties/consequences?** | Create a **battle record** as well as the event if the battle is large enough to stand alone. | Keep combat inside the event prose only. |
| 3 | **Does the prose name paper or evidence the reader should open?** | Create **exhibits/props** after the event prose. | Do not create props for scenery paperwork. |
| 4 | **Does this advance an ongoing mystery/arc?** | Update the **investigation file** with session row, exhibits, analysis layers, and leads. | Do not start a quest-board-style duplicate. |
| 5 | **Does this alter durable state outside the event?** | Update the owning records: characters, locations, factions, shop, XP, RNN pending, annotations, etc. | Leave it in the event only. |

If none of these are true, you probably do **not** need a new archive object.
You may only need a note in a run report, a README update, or no change.

---

## Quick decision table

| Supplied data says… | Create / update | Source of truth | Do not create |
|---|---|---|---|
| “Here is what happened in a session.” | Event article, plus locations/characters/XP first | `data/events.json` | A battle page unless the combat passes the battle gate |
| “There was a major fight / operation.” | Battle record, and usually an event article too | `data/battles.json`, `data/majorBattles.json` | A battle for every skirmish or single attack roll |
| “The scene mentioned an invoice, order, map, letter, contract, passport, ledger, addendum.” | Prop/exhibit wired into prose | `data/props.json` | A prop for generic paper nobody needs to read |
| “This is another clue in an ongoing mystery.” | Investigation session/exhibit/lead update | `data/investigations.json` | A new investigation per session |
| “This deserves Waluigi’s later interpretation.” | Article analysis tied to an already-filed source | `data/articleAnalyses.json` | A second event pretending the same thing happened again |
| “A character changed status, gear, injuries, allegiance, or objective.” | Character record update | `data/characters.json` | A duplicate character under a new spelling |
| “A new named place matters.” | Location record or amendment | `data/locations.json` | A location for a one-off unnamed room unless it recurs |
| “A real organized group exists or changed.” | Faction dossier / generated-dossier review | `data/factions.json`, reviewed `data/factionsGenerated.json` | A faction for a person, species, crowd, or vague label |
| “A player earned progress.” | `xpAwards[]` on the event | `data/events.json` event record | Hand-editing player totals as the first step |
| “A purchasable object should exist in Wario’s shop.” | Shop item | `data/shop-items/*.js` | A shop item for every prop, clue, or temporary object |
| “A new cooperative technique happened.” | Bros Attack data and sync | `data/brosAttacks.json` | A technique just because two characters appeared together |
| “A physical kit teaches/helps a technique.” | Bros shop item | `data/shop-items/items_bros.js` | A kit referencing a missing Bros Attack ID |
| “A readable book/song/cultural text appeared.” | Book/song record, maybe library stock | Books/song data | A full event if nothing happened around it |
| “Someone in-world reacts publicly to an article.” | Annotation | `data/annotations.json` | A comment that adds facts the article failed to state |
| “A front-page/latest item changed.” | Index/home feed update | `index.html`, `mainPage.json` / generator | A manual generated diff without source updates |
| “About ten events are unaired.” | RNN episode | `tools/rnn-scripts/epNNN.json` → generated broadcast data | One broadcast per event |
| “This is only implementation/tool behavior.” | README/tool docs/tests | `docs/`, tool README, source files | Lore records that pretend code changes are canon |

---

## Event article gate

Create an **event article** when the data contains a canonical occurrence with:

- an in-world time or date, even if approximate;
- a place or route;
- actors who made choices;
- consequences, new knowledge, changed custody, or changed relationships;
- enough beats to tell as a filed occurrence rather than a glossary note.

Then follow `docs/SESSION_FILING_PROCESS.md`:

```text
beat list → locations → characters → XP → event prose → exhibits → investigation → index → artifacts
```

### Do not create a new event article when…

- the data is only an interpretation of an already-filed event;
- the user is correcting a detail inside an existing article;
- the information is a stable object/person/place with no scene attached;
- the same occurrence is already filed under another title;
- the data is table-side process rather than in-world action.

Use an amendment, article analysis, character/location/faction update, or run
report instead.

---

## Battle article gate

A combat scene inside an event earns a **battle record** only if it has enough
independent shape to be found later as a military/combat record.

Create a battle record when most of these are true:

```text
□ named sides or forces
□ clear objective or stakes
□ distinct battlefield / engagement site
□ tactical turning point or named maneuver
□ outcome that changes later options
□ casualties, captures, injuries, retreat, resource loss, or territory change
□ participants/readers will want the fight separately from the session article
```

If the battle is the major set-piece of the session, create **both**:

1. the event article for the full session context; and
2. the battle record for the combat ledger, sides, outcome, and tactical truth.

Use:

- `docs/BATTLES_GUIDE.md` for data rules;
- `docs/BATTLE_STORY_FORMAT_GUIDE.md` for prose craft.

### Do not create a battle record for…

- one attack roll;
- a chase with no real engagement;
- a tavern scuffle that changes no state;
- a trap triggering once;
- a fight that is only background color in a larger filing.

Those stay inside the event article.

---

## Exhibit / prop gate

Create a prop when the prose names a document, physical filing, or readable
object that a reader would reasonably expect to inspect:

```text
invoice · order · ledger · letter · telegram · contract · note · map · passport · addendum
```

Good prop candidates:

- contain facts the prose only summarizes;
- are evidence for an investigation;
- reveal an institution’s voice;
- are funny, damning, cold, bureaucratic, or incriminating as an object;
- will be referenced by future filings.

Do **not** create props for every paper-like noun. “A pile of forms sat on the
desk” is scenery unless one form matters.

Rules:

- props live in `data/props.json`;
- important documents may use custom `.pd-*` CSS classes so their form feels distinct, but add those classes to `exhibits.css` first;
- prose uses `[[prop:prop_id|visible text]]`;
- run `python3 tools/check-exhibits.py`;
- every `## Addendum:` heading gets an `addendum` prop.

---

## Investigation gate

Update an investigation when the new data advances an ongoing question, not
merely because the session was interesting.

Use an existing investigation when:

- the session belongs to an already-open arc;
- the event produced evidence, contradictions, suspects, theories, documents,
  or leads;
- a reader should be able to follow the mystery across sessions.

Start a new investigation only when:

- the arc has no existing case file;
- the question will accrete across multiple filings;
- there is at least one concrete session/evidence item to anchor it.

Do **not** create a new investigation for every event. The investigation system
replaced quest-board thinking. One arc gets one accreting case file.

Rules:

- data lives in `data/investigations.json`;
- cite real props created in `props.json`;
- use d6+1 analysis layers;
- run `python3 tools/check-investigations.py` and `python3 tools/check-rolls.py`.

---

## Article-analysis gate

Create an article analysis / opinion filing when the source article is already
complete but Waluigi needs a separate signed reading of what it means.

**Default for new substantial articles:** attach an opinion filing, or state in
the run report why this article does not need one yet. A new article without an
opinion filing is allowed only when it is a small data stub, a purely technical
record, or a filing whose interpretive stakes are already fully handled by the
source text.

Good candidates:

- a recent major article with unresolved implications;
- a filing where Waluigi has a clear thesis, not just extra summary;
- a source with enough anchors to support five to nine sections;
- a case where analysis inside `waluigiAssessment` would be too cramped.

Do **not** create an analysis to add missing facts. Missing facts belong in the
source event. Analysis owns interpretation only.

Rules:

- data lives in `data/articleAnalyses.json`;
- route is `#/article-analysis/<id>`;
- source page discovers it automatically;
- optional research checks are supplemental and never canon-changing;
- use `docs/ARTICLE_ANALYSES.md` and `docs/article-analyses/README.md`.

---

## Character / location / faction gates

### Character

Create or update a character when the person is named, recurring, materially
affected, or needed for participant links.

Create a new record only after checking for alternate spellings/ids. If the
transcript contains a table name, apply the naming rule first. `mike` is the GM,
not a character.

Update an existing record when status, location, inventory, injury,
relationship, allegiance, objective, or current hook changed.

### Location

Create or update a location when a place is named, revisitable, strategic,
investigative, or required by the event `location` field.

Do not create a location for every room. A room becomes a location when later
navigation, evidence, combat, map data, or politics need it.

### Faction

Create or update a faction when the group is organized enough to have agency:
leadership, membership, interests, rules, territory, assets, reputation, or
policy.

Do not create factions for:

- one person;
- a species as a whole unless organized politically;
- “all witnesses,” “the public,” or other aggregate labels;
- a generated reputation key that turned out not to be a group.

Generated faction stubs are review work, not reader-facing prose.

## Image / article art gate

A new substantial article should ship with images, not necessarily only one.
Long narrative filings usually need a lead image plus selected section images
where a place, object, document, or turning point becomes clearer when seen.

Use image fields in data, not custom CSS:

```json
"image": "assets/images/events/<event-slug>/<file>.jpg",
"imageCaption": "Archive-voice caption explaining what the image proves."
```

Section images use the same keys on the section object. Generate from a prompt
sheet based on the prose, inspect the result, and compress before committing.
Full procedure: `docs/IMAGE_GENERATION_GUIDE.md`. CSS rules for displaying
article imagery should follow `docs/CSS_STYLE_GUIDE.md`.

Do not create images for tiny stubs, purely technical docs, or planning data
that has not become canon yet. Do not leave a major session article imageless,
or with only one image when several visual beats clearly matter, without saying
why in the run report.

## Pond Patrol / Liberated Toads docket gate

If any Toad who belongs to the Pond Patrol or Liberated Toads roster appears in
a filing, check the docket. The article does not have to be "about" the Pond
Patrol for the docket to need an update.

Update the docket/system when the Toad's status, cohort, assignment, injury,
custody, trust, testimony, standing order, or accountability record changes. If
the Toad is only mentioned and nothing changes, record that no docket update was
needed in the run report. See `docs/CROSS_SYSTEM_UPDATES.md`.

## Reputation-impact gate

Reputation impact is not a prose flourish. If a filing changes how a faction,
operator, state, or public body regards someone, add a machine-readable impact
where the renderer can show it.

Use reputation data when the source includes one of these causes:

```text
□ a faction witnessed help, betrayal, theft, restraint, mercy, or violence
□ an operation delivered useful intelligence or exposed secrets
□ a party member endangered a faction's people, laws, border, or cover story
□ a public document, verdict, broadcast, or annotation changes standing
□ the event changes strategic trust between an operator and a faction
```

Where it goes:

- `reputationChanges` on the event/battle/article for operator-specific impact;
- `effects` for broad faction-level pressure when the whole event helps or hurts
  a faction;
- `reputationNotes` when the number needs a one-sentence cause on the record.

Keep values modest and auditable from the story. Do not add reputation impact
just because an important faction is mentioned. Mention is not standing.

## “Investigate this further” gate

The article page's **Investigate this further** panel is generated. Do not write
a fake heading into prose to imitate it. Create the data that makes the panel
appear.

The panel appears when either of these exists:

1. an investigation file in `data/investigations.json` has a `sessions[]` row
   whose `event` is this article id, or exhibits whose `links.events[]` include
   this article id;
2. an article-analysis record in `data/articleAnalyses.json` has
   `sourceArticle` equal to this article id.

Use an investigation when there is evidence, paper, leads, contradictions, or
roll-gated analysis to pursue. Use an article analysis when Waluigi has a
signed interpretive thesis about an already-complete source article. Many major
filings can have both.

Do not create either system just to decorate a page. If there is no evidence to
examine and no argument to make, no panel is better than an empty panel.

---

## XP gate

XP is not a separate article and not a shop item. It is an award attached to the
event that caused it.

Add `xpAwards[]` when a player character earned progress through:

- combat survival or victory;
- discovery;
- social leverage;
- stealth;
- faith/magic/technique;
- loyalty, sabotage, chaos, or other recognized XP categories.

Decide XP before writing event prose, while the session is still a beat list.
Use `xpAwards[]`; do not add new `xpRewards[]`, `xpTotal`, or hand-edited player
total hacks.

Every award needs:

- `xpKey` that matches the XP ledger player key;
- `articleId` that links to the character/article;
- category, number, title, description, date, and `dateSort`.

---

## Shop item gate

Create a shop item when the data describes something that should be purchasable,
stocked, shipped, priced, and converted into Foundry/item-pile output.

A real shop item needs:

```text
price · vendor · stock · rarity · category · effects · effectDetails
priceReason · vendorReason · levelRequirementReason · shippingDetail
```

Create a shop item for:

- durable gear the party can buy;
- a consumable with a repeatable rules effect;
- a kit, badge, crafting material, book, tool, or training purchase;
- an object whose availability matters economically.

Do **not** create a shop item for:

- every object seen in a scene;
- unique evidence that belongs as a prop;
- an artifact whose custody is story-specific;
- a one-time improvised object unless Wario can plausibly stock it;
- a power whose only justification is “it would be cool.”

If it is a Bros kit, the `brosAttack` ID must exist in `data/brosAttacks.json`.

---

## Bros Attack gate

Create a Bros Attack when one source beat establishes a real cooperative
technique between named partners.

Required:

- both partners named together in the source;
- a repeatable cooperative action, not just being in the same room;
- a source event;
- risks and result;
- drill steps if it should be playable in Foundry;
- Waluigi note.

Then run:

```bash
cd Reputation-Matrix2
python3 tools/sync_bros_attacks.py --check
node tools/tests/test_bros_discovery.mjs
```

Do not add a Foundry-only technique. The archive is the source.

---

## Book, song, currency, law, map, and POI gates

Create these only when the supplied data changes that system specifically.

| System | Create when | Read |
|---|---|---|
| Books | the text is meant to be readable or stocked in a library | `Reputation-Matrix2/README.md` → Adding Books / Libraries |
| Songs | the campaign gained a performed or archived song | `docs/CROSS_SYSTEM_UPDATES.md` |
| Currencies | the world gained a tender, wallet, debt, exchange, or settlement rule | `Reputation-Matrix2/README.md`, currency data nearby |
| Laws/customs | a faction/region has enforceable law or social tradition | `Reputation-Matrix2/README.md` → Adding Laws & Customs |
| Maps/POIs | a place needs map navigation, strategic values, or requests | `Reputation-Matrix2/README.md` → Contributing Map Data |
| WAHwire | in-world public/social reaction should be visible as feed posts | `docs/CROSS_SYSTEM_UPDATES.md` |

Do not use these systems as decoration. A map point, law, currency, or song
should be useful to a reader/player outside the paragraph where it first
appeared.

---

## Annotation gate

Create an annotation when a character or public voice reacts to an already-filed
article.

Rules:

- data lives in `data/annotations.json`;
- quote text that actually appears in the article;
- the speaker needs a plausible voice and faction/position;
- likes/replies are in-world public behavior;
- annotations may argue, misread, accuse, joke, or grieve.

Do **not** use annotations to reveal facts the article forgot to state. Fix the
article instead.

---

## RNN gate

Every event goes into `tools/rnn-scripts/pending-news-articles.json`, but a
broadcast is cut only when the desk owes one.

Default cadence:

```text
one RNN episode per about ten filed events
```

Create a new RNN script when:

- the pending list is near ten;
- the pending stories form a strong episode;
- or the table explicitly wants a special broadcast.

Do not create one broadcast per event. The README `RNN:LAST-WEEK` blocks and
`data/rnn-broadcasts.js` are generated by `tools/build-rnn-broadcast.py`.

---

## What to do with “just data” packets

When the user gives a list, spreadsheet, or short descriptions without a full
session transcript, classify the packet first.

| Packet type | Best home |
|---|---|
| List of Liberated Toad names, looks, cohorts | character records if canon-ready; otherwise a planning/export tool or draft file |
| Sprite prompt descriptions | prompt sheet / asset planning, not lore data until images are accepted |
| Shop ideas | draft shop records only if price/vendor/effect can be justified |
| NPC personality blurbs | character records only if they will be referenced; otherwise keep as intake notes |
| Combat stat ideas | Foundry actor/item docs or WahSim rules, not event prose |
| Timeline summary | event(s) only if each item has date/place/actors/consequences |
| Corrections to known lore | amend the existing record; do not create a new one |

Draft/planning artifacts should be clearly temporary and either ignored or
removed when promoted. Do not let a planning sheet become canon by accident.

---

## The “both” cases

Sometimes one packet creates multiple things. Use this list to avoid missing
paired updates.

| If you create… | Also consider… |
|---|---|
| Event article | locations, characters, XP, props, investigation, index, RNN pending, images |
| Battle record | event article, participant XP, related factions, battle image, home feed |
| Prop/exhibit | investigation exhibit, article trigger, related item page tile |
| Character | XP ledger mapping, portrait, key events, related articles, lifecycle status |
| Faction | reputation changes, laws/customs, map POIs, generated-dossier tombstone/redirect |
| Shop item | category registration, department data, Foundry conversion, wallet/currency behavior |
| Bros Attack | Foundry sync, Bros item if purchasable, source event links |
| Book | description, bookshelf/library registration, inventory/stock placement |
| Article analysis | source page link is automatic, but related IDs and research checks need validation |
| Annotation | exact quote anchoring and Chatter Hub leaderboards |

---

## Anti-duplication rules

Before creating anything, search for it by:

```text
name · likely slug · alternate spelling · old title · related person/place
```

Then apply:

1. **Amend before duplicating.** If a record exists, update it.
2. **One occurrence, one event.** Do not file the same session twice under a
   cleaner name.
3. **One arc, one investigation.** Add sessions to the existing case file.
4. **One paper, one prop.** Link the same prop wherever needed.
5. **One source, generated outputs many.** Edit data/generator, not generated
   consumers.
6. **Planning is not canon.** Draft lists, prompt sheets, and scratch JSON must
   be labeled as temporary until promoted.

---

## Minimum run report claims

At the end, state what the data packet became:

```text
Input classified as: session event / battle / shop item / planning data / etc.
Created: ...
Updated: ...
Not created: ... and why
Verification: commands and results
Open questions: canon decisions still needed
```

“Not created” is important. It tells the next agent that the omission was a
decision, not forgetfulness.
