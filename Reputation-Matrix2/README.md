# Vigilance Terminal Project

<!-- RNN:LAST-WEEK:START -->
## 📺 Last Week on the Rakasha News Network

> **EP 001 — The Box That Danced and the Boy Who Died Twice**  
> Hunt Day HARVESTIDE 30, 1040 BF · covering Harvestide 18 – Harvestnoon 1, 1040 BF · runtime 5:28  
> Anchor: **Whisper-in-Wind**, Death Speaker, Spirit-Walker Clan · Field: **Acolyte Dan**, Runner of the Cold Roads

**▶ [Watch the broadcast](../Reputation-Matrix2/app/pages/standalone/rakasha-news-network.html)** — the Rakasha desk reads back everything the party survived last week, composited live from `Reputation-Matrix2/animation_frames/`.

| Segment | Story | Cold open line |
|---|---|---|
| **COLD OPEN** | Rakasha News Network | Iron rusts. Flesh rots. Only the Hunt remains — and the Hunt has been busy. |
| **LEAD STORY** | The Box That Danced | We open in the dark woods below the Shadow Estate, where a blood trail was followed by two hunte… |
| **THE CELLS** | The Book, the Cells, and the Dog Who Came Back | Before the box, the cottage. The imps of the dead Archivist came for their book and took everyth… |
| **THE RAIL LINE** | A Boss Undone by His Own Hands | North, on the Shell-Backs' underground rail line, a small man wanted a conductor's hat and could… |
| **UNDER THE MOUNTAIN** | The Tea Promise and the Throne Room Oath | Beneath Mount Ebott the false sun still burns over a meadow that is not a meadow, and the tall b… |
| **THE GREEN HOUSE** | The Manor Wore Its Owner's Face | In Feyward, the overgrowth stopped pretending to be a plant problem. The Lady pouring cold tea f… |
| **FIELD REPORT** | The Cold Roads of Arunedeal | Whisper-in-Wind, I am ON the snow road and the snow road is TRYING TO KILL ME. Bones came throug… |
| **WIND WHISPERS** | Whispers on the Breeze | Heard in the canopy: a letter from the Archie-watch names four suspects — the one-armed shadow, … |
| **SIGN OFF** | Sign Off | That is the week. Trust only the claw. Fear only the silence. |

*Cadence: a new RNN broadcast is cut **every week that applicable new events exist**. File the session, then run `python3 tools/build-rnn-broadcast.py` and drop the new script in `../tools/rnn-scripts/`. The newest episode always sits here, labelled “last week”.*

<!-- RNN:LAST-WEEK:END -->

## Project Philosophy

To ensure readability and maintainability, this project follows a modular structure. JavaScript files, particularly those containing significant logic or UI rendering code, are kept concise. The general guideline is to keep files under **500-600 lines**. This approach makes it easier for developers to quickly understand the purpose of a file and navigate the codebase effectively.

A key example of this philosophy is the handling of game data. Instead of large, monolithic data files, information is broken down into smaller, thematic modules. For instance, the detailed legal codes for different faction archetypes (`laws-data-militaristic.js`, `laws-data-democratic.js`, etc.) are kept in separate files and aggregated by a central `laws-data.js` file. This keeps each file focused on a single concept, improving organization and making it easier to add or modify data without affecting unrelated systems.

## The RNN Weekly Broadcast Rule

**Every week in which applicable new events exist, a new Rakasha News Network broadcast must be cut.** Filing an event is not finished until you have checked whether the week now owes a broadcast. The full procedure — trigger conditions, script schema, frame casting, voice rules and the build command — is the **STANDING ORDER** at the top of [`gemini.md`](gemini.md).

Short version:

```bash
python3 ../tools/build-rnn-broadcast.py --unaired   # what the desk still owes
#  ...write ../tools/rnn-scripts/epNNN.json...
python3 ../tools/build-rnn-broadcast.py             # cut it; READMEs re-splice themselves
```

If nothing new was filed that week, cut nothing: the existing episode simply remains "last week".

## Writing Stories, Events & What-Ifs

Narrative filings (session events in `data/events.json`, What-Ifs in `data/whatifs.json`) follow a dedicated craft standard:

**→ [../docs/STORY_FORMAT_GUIDE.md](../docs/STORY_FORMAT_GUIDE.md)** — Waluipedia Story Format Guide

### Archive ranking (the short version)

| Rank | Filing | Role |
|---:|---|---|
| **1** | **Wario / Abstract Bank** (`wario_abstract_bank`) | Best complete *article* — scene craft + decision engine + ledger / findings / verdict |
| **2** | **Imp Ambush** (`the_imp_ambush_of_harvestide_29`) | Best pure *scene* / best teaching text when narration goes abstract |
| — | Mount Ebott filings | Negative control — analysis wearing a story costume |

> **Imp is the better written scene. Wario is the better written article.**
> Imp for the scene. Wario for the filing. **Both, or it isn’t finished.**

| If you are writing… | Ceiling | Floor you must clear |
|---|---|---|
| A **session event** | Imp | Physical prose, short asides, ~80/20 story/analysis |
| A **What-If** | Wario | Imp-grade scenes *before* any apparatus counts |
| Anything long | Imp scenes + Wario frame | A thesis, a machine, a callback object in the close |

The guide covers: physical prose techniques, voice/POV rules, section vs chapter shape, dual-layer commentary, the What-If decision engine (`ledger` / `findings` / `verdict`), event apparatus, pacing tells stolen from both references, relationship and reputation modifiers, and pre-flight audit scripts for each form.

### Waluigi as an eyewitness narrator

When Waluigi is present in a scene, he may—and for a personal filing should—write in **first person**. Let him record what he saw, what his body did, and what he thought or felt in the moment: fear, pride, irritation, embarrassment, suspicion, relief, or a grievance he will carry into the apparatus. This is the model for **all story filings**, not only one Waluigi section: when the archivist is in the room, the story should feel like he is describing what he does, says, notices, misunderstands, and survives. Other characters should also receive physical reactions and spoken opinions rather than being summarized from above.

For a Waluigi-led session filing, aim for roughly **35% spoken Waluigi dialogue** and **65% detailed scene prose**. This is a craft aim, not a quota: his lines should argue, boast, panic, negotiate, correct the record, or reveal what he wants, while the surrounding prose supplies bodies, objects, sounds, movement, and consequences. Do not pad the scene with chatter. First person is not permission to turn every paragraph into a monologue. Keep the room physical and let the feeling arrive through action, sensation, spoken argument, and a specific opinion. For scenes Waluigi did not witness, switch honestly to close third or attributed reconstruction; never give him impossible knowledge.

Use close third person only for beats Waluigi did not witness, and mark the change honestly (for example, reconstructing a corridor scene from Hjumpik and Toad Lee). Do not give Waluigi knowledge he could not have had. In a first-person event filing, establish his presence early, use “I” for his witnessed actions and thoughts, and reserve the italic `*WAH!` / `*Waluigi` asides for short jokes, corrections, grudges, and observations welded to the beat immediately above. The durable conclusion still belongs in `waluigiAssessment`, not hidden inside the scene.

Example:

> The ring came loose and struck my palm. I wanted to boast that I had planned the escape. I had not. My hands were shaking, and I was relieved enough to feel angry about it.
>
> *WAH! Waluigi prefers a tactical retreat when it is described as a tactical retreat. “Falling out a window while clutching a haunted ring” is less flattering, but more accurate.*

### Relationship pages and reputation modifiers

The site’s relationship matrix is event-driven. A character, faction, battle, trial, or other article can change how an operator is regarded by a faction by adding a signed `reputationChanges` object to the record. This is the relationship modifier for the article; it is not a prose-only claim. The renderer indexes these changes, applies time decay, shows the contributing article in the faction standing trace, and combines the result with base standings, internal politics, and faction-to-faction propagation.

Use the short operator keys already recognized by the matrix (`waluigi`, `hjumpik`, `archie`, `markop`, `bowser`, `remi`, `dan`, `greent`, etc.) and existing faction IDs from `factions.json` / the loaded faction registry. Values are signed integers: positive means the operator’s standing improves; negative means it worsens. Keep changes modest and earned by the record. Do not invent a new character or faction key just to make a modifier render.

```json
"reputationChanges": {
  "waluigi": {
    "corvinarus_family": -4,
    "mages_guild": 2
  },
  "hjumpik": {
    "corvinarus_family": 3
  }
}
```

Add modifiers only when the article contains a believable cause: a faction witnessed the party rescue one of its people, the party stole from it, a battle changed its military view, or an investigation exposed useful intelligence. Explain the cause in `summary`, `aftermath`, `waluigiAssessment`, or a relevant section; the number should be auditable from the story. A modifier belongs on the article that caused the change, not on every related page. Link the related character, faction, event, and battle IDs so readers can inspect both sides of the relationship.

For a new relationship-focused article, use a normal resolvable article record and include: the two parties, the dated change, the specific witnessed action, the signed `reputationChanges`, and the resulting status or unresolved tension. “They like each other more” is not enough: state who changed their view, by how much, why, and what future scene would test it. After editing, validate the JSON, confirm every operator and faction key resolves, and verify the article appears in the standing trace. Never manually edit calculated totals in the UI; those are derived from the modifier ledger.

### Updating applicable character profiles

A major session event is not complete when the event record alone is changed. Review every named character whose status, inventory, relationship, injury, reputation, or current objective changed. Update the canonical record in `data/characters.json` with a concise dated or clearly labeled “Latest Filing” paragraph, append the event ID to `keyEvents`, and add the event, important item, faction, or location IDs to `relatedArticles` when they resolve. Update only characters materially affected; do not copy the whole plot into every profile. Keep the event as the detailed narrative source and the character page as the durable state change. Validate that every new ID resolves and that the profile update does not overwrite existing lore.

**Do not optimise the numbers.** They catch drift. If the prose reads well and the measurements disagree, the prose wins.

## Characters, Items & Foundry Actor JSON

Character lore records (`data/characters.json`), shop items
(`data/shop-items/*.js`), and the play-ready Foundry VTT actor exports
(`tools/item sheet examples/*.json`) follow a shared schema standard:

**→ [tools/item sheet examples/README.md](tools/item%20sheet%20examples/README.md)** — Character & Item JSON Guide

The guide covers: the `characters.json` schema field-by-field (id rules, XP-ledger
linking via `MANUAL_CHARACTER_LINKS`, status/summary/description writing
standards, `keyEvents` validation), the Foundry actor envelope
(`system` / `items[]` / `prototypeToken` / `_stats` / `flags`), the per-item-type
field requirements (weapon, equipment, consumable, tool, container, loot,
class, race, background, feat, spell), item-pile construction, the Hub
Character Creator + Item Piles workflow, naming conventions, and validation
scripts.

## Adding New Map Pages

To maintain application stability and a consistent user experience, all new tactical map pages **must** adhere to the standardized map grouping system. Creating custom, one-off UI or filtering logic for a single map page can conflict with the global data loaders for POIs and tactical units, causing them to fail to render.

The system works as follows:
-   The `map-ui.js` file is responsible for rendering the map selection tabs.
-   It detects which HTML page the user is on (e.g., `mushroom-kingdom-maps.html`, `midlands-maps.html`).
-   Based on the page, it identifies a `group` name (e.g., 'Mushroom Kingdom Regions').
-   It then finds all map entries in `map-data.js` that have a matching `group` property.
-   Finally, it renders a tab button for each of these maps.

To add a new map page correctly:
1.  **Create the HTML File:** Build your new map page (e.g., `new-world-maps.html`), using an existing one as a template.
2.  **Define a Map Group:** In `map-data.js`, create your new map data objects. Crucially, assign a consistent `group` property to all maps that should appear on your new page (e.g., `group: 'New World Regions'`).
3.  **Update the UI Logic:** In `map-ui.js`, add an `else if` condition to the `renderTabs` function to recognize your new HTML file and associate it with the `group` name you defined in `map-data.js`.
4.  **Add to Gallery:** In `maps.html`, add a new `.gallery-item` div that links to your new map page.

By following this structure, any new map page will automatically inherit the correct UI, functionality, and data-loading capabilities of the existing system.

## Advancing the In-Game Day and Scripted Events

Simulating the passage of one in-game day requires updating several interconnected systems. This process ensures all changes are cohesive and reflected across the application, including the new scripted WAHbook posts that trigger on specific dates.

To advance the world state by one day, edit the following files:

1.  **`calendar.js`**: Increment the `day` value in the `CURRENT_GAME_DATE` constant. This is the master clock for the world.
2.  **`events/scheduled-posts.js`**: This file contains the scripted WAHbook posts for the ongoing world war. To add new events, create new post objects with a future `scheduledDate`.
3.  **`quests/*.js`**: Advance the status of any ongoing personal, main, or world quests. Change a step's status from `'active'` to `'completed'` and the next from `'locked'` to `'active'`.
4.  **`map-battle-data-*.js`**: Update the `x` and `y` coordinates of tactical units on the map to reflect a day's movement or the outcome of a battle.
5.  **`assembly-data.js` / `assembly-intel-data.js`**: Add new, non-scheduled WAHbook posts from various characters reacting to the day's events to make the world feel alive.
6.  **`timeline-data.js`**: For major, world-shaking events, add a new entry to the historical timeline.
7.  **`character-relations.js`**: If an event would logically change how two characters feel about each other, update their personal opinion text.

By updating these key files, you ensure the world state remains consistent and the narrative continues to evolve.

## Contributing Map Data

### Drawing Points of Interest (POIs)

When adding new points of interest to the map data files, please adhere to the following guidelines to maintain quality and consistency:

1.  **Lore-Relevance:** POIs should fit the theme of the region and the broader game world. A location should feel like it belongs.
2.  **Strategic Value:** Each POI should have a clear purpose. Consider its role from different perspectives:
    *   **Political:** Does it influence a faction's control or serve as a seat of power?
    *   **Economic:** Is it a source of resources, a trade hub, or a financial center?
    *   **Military:** Is it a fortress, a chokepoint, or a strategic observation post?
    *   **Narrative:** Does it serve as a key location for a quest or a piece of world-building?
3.  **Clarity and Conciseness:** Descriptions should be evocative but not overly long. A few sentences are usually sufficient to convey the essence of a location.
4.  **Data Completeness:** Ensure all required fields are filled out. This includes coordinates (`x`, `y`), `type`, `name`, `factionId`, `intelReq`, and the values for the map modes: `political_influence`, `economic_value`, and `military_strength`.
5.  **Placement:** Place POIs logically within their designated region. Avoid overcrowding areas. The best way to get accurate coordinates is to use the in-app **Edit Map** feature (available in Debug Mode) and then use the **Generate Code** function to get the correct format and values.
6.  **POI Count:** The number of POIs should be appropriate for the size of the region to ensure it feels populated and interesting. Use the following as a guideline:
    *   **Small Area (e.g., a single city, a small island):** Aim for 20-30 POIs.
    *   **Medium Area (e.g., a province, a large forest):** Aim for 40-60 POIs.
    *   **Large Area (e.g., a kingdom, a vast desert):** Aim for 75-100+ POIs.
7.  **Fog of War:** The `points` string provided in the prompt defines the region's fog of war polygon. This polygon serves two purposes:
    *   **Boundary Reference:** Use these coordinates as a strict boundary. All POIs you create for the region **must** be placed inside this polygon.
    *   **Data Entry:** This `points` string **must** be included in the `fogOfWar` array within the new map data file you create (e.g., in `map-data/middle-earth/Gondor.js`). This allows the map system to render the fog correctly.
8.  **Requests:** To keep the world feeling alive and interactive, aim to add at least one location-based "Request" quest (in `quests/quests-requests.js`) for every 50 POIs created in a region. This provides players with clear, discoverable objectives as they explore new areas.

### Adding Laws & Customs

Laws and customs enrich the world by defining how different societies function. There are two main types: codified **Laws** that are formally enforced by a ruling body, and unwritten **Traditions** that are socially enforced customs.

#### Traditions & Customs

To add a new tradition or associate one with a POI, edit `legal_data.js`.

*   **To add a new tradition:** Add it to the `traditions` object under the appropriate category (e.g., `martial`, `social`). Give it a unique `id`, `name`, `icon`, `description`, and list the `followers` (faction keys) who primarily adhere to it.
*   **To add a region's baseline traditions:** In the `regional_traditions` object, add an entry where the key is the landmass ID (e.g., `middle_earth_full`) and the value is an array of tradition IDs. These traditions will apply to any unaligned POI in that region.
*   **To add a POI-specific custom:** In the `poi_traditions` object, add an entry with the POI's full `id` as the key. The value should be an object with a `summary` and an array of `traditions` (IDs from the master list).

#### Codified Laws

To give a faction a formal legal code that appears in the "Laws & Customs" pop-up on the map, follow these steps:

1.  **Create/Update a Law Data File:** In the `laws-data` directory, find a thematic file (e.g., `laws-data-mystical.js`) or create a new one.
2.  **Define the Codex:** Inside this file, add an object for your faction. This object should contain the `name` of the codex, its `description`, and the laws broken down by category.
3.  **Register the Codex:** Open `laws-data.js` and ensure your new law data file is imported and included in the `ALL_LEGAL_CODES` export. This makes the system aware of your new laws.

### Adding Libraries

Libraries are key locations for discovering new information and books. To add a new one:

1.  **Create the POI:** In the appropriate POI data file, create a POI with `type: 'library'`.
2.  **Add Library Data to POI:** In the new POI's data object, add two keys: `library_summary` and `libraryStockKey`.
3.  **Create the Book Stock File:** In `books/`, create a new file (e.g., `new_library_stock.js`) and export an array of book titles.
4.  **Register the Stock:** Open `books/library_stocks.js`, import your new stock file, and add it to the `LIBRARY_STOCKS` object using the `libraryStockKey`.

### Adding Books

Adding a new readable book to the game world involves several steps to ensure it appears correctly in both the party's inventory and public libraries.

1.  **Create the Content File:** In `books/`, create a new file (e.g., `new_book.js`) exporting a `BOOK_DATA` object with the `title` and `pages`.
2.  **Add Book Description:** In `books/book_descriptions.js`, add an entry to `BOOK_DESCRIPTIONS` with the book's title as the key.
3.  **Register in `bookshelf.js` (Party Inventory):** Import the content file and add it to the `bookDataMap`. Assign a cover in `getBookCoverUrl`.
4.  **Register in `library.js` (Public Terminal):** Repeat the registration steps from `bookshelf.js`.
5.  **Add to Inventory/Stock:** Add the book's title to a character's inventory in `state.js` or to a library's stock file.
### Canonical event data file

The live Waluipedia loader fetches `Reputation-Matrix2/data/events.json` through the `events` data key. That is the single canonical event registry. Do not maintain a second hand-edited mirror under `data/events/events.json`; duplicate registries drift and create false validation results. Other pages and documentation should link or refer to `data/events.json`. If a legacy export mentions the old path, update the reference rather than creating another copy.

### Bros Attacks and static Foundry content

Cooperative combat techniques belong in `data/brosAttacks.json`. Add one definition per confirmed technique with a stable `id`, name, participants, source event, steps, risks, result, and a Waluigi note. The reader-facing archive is `bros-attacks.html`; it is intentionally static and has no editor. The Foundry export lives in `tools/foundry/bros-attacks/`: one valid dnd5e feat JSON per technique plus `manifest.json`. It is intentionally static and contains only the defined techniques as importable feat items. Each feat has two uses, spends one use per participant, and refreshes on a Foundry short rest (the rules text calls this a very short rest). Update the source definitions and regenerate the static item files together. Do not add a live in-page editor or let Foundry become a second source of truth.

#### Bros Attack resource design

Bros Attacks use a small shared-feeling resource rather than unlimited button presses. Each named participant spends **1 Bros Energy** from a personal maximum of **2** when the technique is used. The participating characters regain their spent Bros Energy after a very short rest. This keeps the technique available for a dramatic second attempt without making cooperation free or turning it into a long-rest-only super move. The archive page should show the cost, maximum, refresh rule, steps, risk, result, and source filing for every defined attack. Foundry also runs a short motion drill before the rolls: mouse and touch gestures support tap, swipe up, swipe right, and hold. Team mode alternates the displayed turn between the two partners and says “wait” through the status line; Solo mode lets one player complete the entire sequence. The drill must be readable, forgiving enough to retry, and never replace the actual dnd5e rolls or damage rules. Motions should express the fiction of the technique: Chop Bros uses an upward lift, repeated vertical axe strokes, and a rightward advance; Support Fire uses aim alignment, a timing call, a tap to fire, and a safe reset. Movement gestures do not require holding the mouse button; only an explicitly labeled tap uses a click. Animated arrows, target zones, and partner labels should tell players what their hands are doing before the next turn arrives. Every step has a visible 10-second countdown with a warning at three seconds. A timeout counts as one mistake; three mistakes fail the drill, spend no energy, make no rolls, and close the overlay automatically so players never have to hunt for a quit control after a failed attempt. A successful drill closes automatically and returns to the Bros Attack window before the normal rules resolve. Foundry items should represent the same rule with two uses and short-rest recovery; never add an attack to Foundry that is not present in `data/brosAttacks.json`.
