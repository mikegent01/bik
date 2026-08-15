# Vigilance Terminal Project

## Project Philosophy

To ensure readability and maintainability, this project follows a modular structure. JavaScript files, particularly those containing significant logic or UI rendering code, are kept concise. The general guideline is to keep files under **500-600 lines**. This approach makes it easier for developers to quickly understand the purpose of a file and navigate the codebase effectively.

A key example of this philosophy is the handling of game data. Instead of large, monolithic data files, information is broken down into smaller, thematic modules. For instance, the detailed legal codes for different faction archetypes (`laws-data-militaristic.js`, `laws-data-democratic.js`, etc.) are kept in separate files and aggregated by a central `laws-data.js` file. This keeps each file focused on a single concept, improving organization and making it easier to add or modify data without affecting unrelated systems.

## ⚠ STANDING ORDER — The Rakasha News Network Weekly Broadcast

**A new Rakasha News Network (RNN) broadcast must be produced every week in which applicable new events exist.** This rule is self-executing: whenever a new event is created, this instruction is to be read and followed as part of filing that event. Do not wait to be asked.

### The trigger

An event is "applicable" if, since the newest script in `../tools/rnn-scripts/`, **any** of the following happened:

*   a new session filing was appended to `data/events.json`;
*   the **"RECENT ADVENTURES — WHAT WE'VE BEEN THROUGH"** feed in `../index.html` gained an item;
*   a major battle, trial, or faction rupture was recorded that the party witnessed.

If a week passes with none of the above, **no episode is cut** and the existing episode stays labelled "last week". Never cut an empty broadcast to satisfy the schedule; the Rakasha do not speak when the jungle is quiet.

### The procedure

1.  **Check what is owed.** `python3 ../tools/build-rnn-broadcast.py --unaired` lists every event that has never aired. The lead story is normally the newest filing; older unaired items become the middle segments.
2.  **Write the script.** Create `../tools/rnn-scripts/epNNN.json` (copy `ep001.json` as the template). Required keys: `id`, `number`, `title`, `airWeek`, `huntDay`, `covering`, `anchorName`/`anchorRole`, `fieldName`/`fieldRole`, `sourceEvents[]`, `ticker[]`, `segments[]`.
3.  **Shape the rundown.** A normal episode runs 8–10 segments: `COLD OPEN` (titlecard) → `LEAD STORY` → two to four story segments → one `FIELD REPORT` (`type: "field"`, uses the leaping frame) → `WIND WHISPERS` → `SIGN OFF` (titlecard). Three to five caption lines per segment.
4.  **Cast the frames.** Every line names an `expression` that must exist as a PNG in `animation_frames/`: `normal`, `happy`, `sad`, `concerned`, `eyebrowraised`, `mouthslightlyopen`, and `jump` (field runner only). Match the frame to the beat — `sad` for a death, `eyebrowraised` for a suspicion, `happy` for a farce.
5.  **Hold the voice.** Same register as `app/core/rakasha-news.js`: predator-metaphor, short declaratives, faction nicknames (Iron-Hides, High-Crowns, Shell-Backs, Spore-Rats, Soft-Heads, Night-Drinkers…), and the house lines — *"The jungle sees all"*, *"Trust only the claw. Fear only the silence."*, *"This missive will self-destruct if eaten."* Report only what the source events actually record; the anchors admit ignorance rather than inventing.
6.  **Cut it.** `python3 ../tools/build-rnn-broadcast.py`. This auto-times every caption, validates every frame and `sourceEvents` id, writes `data/rnn-broadcasts.js`, and re-splices the **"Last Week on the Rakasha News Network"** block at the top of both `../README.md` and `README.md`.
7.  **Verify.** Open `app/pages/standalone/rakasha-news-network.html` (or `#/rnn` in the main site) and watch it end to end. Then run `node ../generate-updates.js`.

### Files that belong to this system

| File | Role |
|---|---|
| `../tools/rnn-scripts/*.json` | Hand-written episode scripts — the only place broadcast prose is authored |
| `../tools/build-rnn-broadcast.py` | Generator: timing, validation, data file, README splice |
| `data/rnn-broadcasts.js` | **Generated.** `window.RNN_BROADCASTS` — do not hand-edit |
| `app/pages/standalone/rakasha-news-network.html` / `.js` | The broadcast player |
| `app/styles/systems/rnn-broadcast.css` | Broadcast skin |
| `animation_frames/` | Anchor sprites + RNN title card |
| `../README.md`, `README.md` | Carry the "last week" block between the `RNN:LAST-WEEK` markers |

## ⚠ STANDING ORDER — Every Filing Ships Illustrated and Exhibited

**A new session event or long narrative filing is not finished until it has images and, where the prose names a document, a readable exhibit.** Like the RNN rule, this is self-executing: read and follow it as part of filing the event. Do not wait to be asked.

### A. Images — the procedure

1.  **Choose the beats.** One lead image on the record, then one per section containing a place, an object, or a piece of evidence worth looking at. Three to six section images on a long filing. Illustrate where seeing the thing changes the paragraph; skip the rest.
2.  **Write the prompt sheet before generating.** Generations cost — do not spend them on vibes. Pull the concrete nouns from the section (materials, measurements, damage, light, what is written on things) into a per-image block: source lines, "must appear" checklist, prompt. Review it against the prose, then generate. Full procedure and worked examples: [`../docs/IMAGE_GENERATION_GUIDE.md`](../docs/IMAGE_GENERATION_GUIDE.md).
3.  **Generate.** Use the `generate_image` tool, prompting from the prose itself — real weather, real materials, real time of day, real damage. Ask for **in-world documentary photography or a survey plate**, never concept art or a poster.
4.  **Text in the image only when the story requires it.** Decorative lettering is forbidden — unprompted, the model invents nonsense (a Mount Ebot helicopter came back tagged `CRERA`). But when the prose turns on something written — a memorial plank, a summit marker, the one-T spelling that caused the disaster — that text *is* the subject: specify it letter for letter, in caps, in quotes, and describe the medium ("burned in with a hot iron, wobbling strokes"). Check the spelling by eye afterwards.
5.  **View every generated image** with `read_file` and check it against the "must appear" list. The model will return a blank signpost and say nothing.
6.  **Fix defects by editing, not rerolling** — pass the file in `generate_image(images=[...])` and describe only the change.
7.  **Save.** `Reputation-Matrix2/assets/images/events/<event-slug>/<prefix>-<nn>-<subject>.jpg`, zero-padded and ordered by appearance.
8.  **Compress.** Generated files are far too heavy for a static site. This environment has **ImageMagick v6 only** — no `magick`, `cwebp`, `pngquant`, or `optipng`:

    ```bash
    convert in.png -resize 1600x1600\> -strip -interlace Plane -quality 82 out.jpg
    ```

    Target **under ~300 KB**. Confirm with `ls -la`; drop the quality and re-run on anything over.
9.  **Wire.** Paths are relative to `Reputation-Matrix2/`. `"image"` + `"imageCaption"` on the record render the lead figure; the same two keys on a section object render an inline figure in that section.
10. **Caption in archive voice.** State what is shown, when, and what it proves or cost. A caption is a filing, not alt text.
11. **Verify.** JSON parses, article loads, every figure renders — a bad path fails silently to a placeholder.

### B. Exhibits — clickable in-world documents

When the prose says an invoice, order, ledger, telegram, contract, or passport exists, the reader must be able to open and read it. These live in `data/props.json` and render as full custom-CSS paper in a modal.

1.  Add a prop under `props`, keyed `prop_<subject>_<kind>`, keys in order: `kind`, `icon`, `title`, `subtitle`, `items`, `articles`, `note`, `body`, then optional `stamps`, `torn`.
2.  `kind` ∈ `invoice`, `order`, `ledger`, `letter`, `telegram`, `contract`, `note`, `map`, `passport`. `stamps` ∈ `sealed`, `evidence`, `overdue`, `void`, `noaction`, `paid`.
3.  `items` = item keys from `INVENTORY_SYSTEM`; `articles` = article IDs. Those arrays are the entire wiring: exhibit tiles appear automatically on every listed item page and article, and the modal links back. **Adding a document never touches renderer code.**
4.  `body` is HTML using **only** the documented `.pd-*` classes in `app/styles/systems/exhibits.css` (`pd-head`, `pd-meta`, `pd-table`, `pd-total`, `pd-clause`, `pd-classbar`, `pd-sigline`, `pd-margin`, `pd-fine`, `pd-strike`). No invented classes, no inline styles.
5.  Write the paper as the **issuing organisation** would. Waluigi's opinion belongs in the `pd-margin` aside and the `note` field, nowhere else.
6.  Inline trigger inside prose: `[[prop:prop_id|invoice]]`.
7.  Verify: `props.json` parses, every `items` / `articles` key resolves, and the tile opens.

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

Simulating the passage of one in-game day requires updating several interconnected systems. This process ensures all changes are cohesive and reflected across the application, including the new scripted WAHwire posts that trigger on specific dates.

To advance the world state by one day, edit the following files:

1.  **`calendar-data.js`**: Increment the `day` value in the `CURRENT_GAME_DATE` constant. This is the master clock for the world.
2.  **`events/scheduled-posts.js`**: This file contains the scripted WAHwire posts for the ongoing world war. To add new events, create new post objects with a future `scheduledDate`.
3.  **`quests/*.js`**: Advance the status of any ongoing personal, main, or world quests. Change a step's status from `'active'` to `'completed'` and the next from `'locked'` to `'active'`.
4.  **`map-battle-data-*.js`**: Update the `x` and `y` coordinates of tactical units on the map to reflect a day's movement or the outcome of a battle.
5.  **`assembly-data.js` / `assembly-intel-data.js`**: Add new, non-scheduled WAHwire posts from various characters reacting to the day's events to make the world feel alive.
6.  **`timeline-data.js`**: For major, world-shaking events, add a new entry to the historical timeline.
7.  **`character-relations.js`**: If an event would logically change how two characters feel about each other, update their personal opinion text.
8.  **`party-and-events.js`**: Update the active `RUMORS` list to reflect new world events.
9.  **`state.js`**: Add new rumor IDs to the `activeRumors` array to ensure they are calculated in the reputation system.
10. **`focus-tree.js`**: Update the descriptions of ongoing `TOAD_TIMELINE` events to reflect the day's progress.
11. **Rakasha News Network**: If the day produced a new session filing or a new entry in the Recent Adventures feed, the weekly broadcast is now owed. Follow the **STANDING ORDER** at the top of this document — write `../tools/rnn-scripts/epNNN.json` and run `python3 ../tools/build-rnn-broadcast.py`.

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
## Bros Attacks, Bros Items & Drill Difficulty

Full guidance lives in `README.md` (`### Bros Attacks and static Foundry content` onward). Short version:

- **Techniques** are defined in `data/brosAttacks.json` and read by the `#/bros-attacks` route in the root `index.html`. There is no `bros-attacks.html` file. Static dnd5e feat exports live in `tools/foundry/bros-attacks/`; regenerate them with the source definitions, never separately.
- **Cost:** 1 Bros Energy per participant from a maximum of 2, refreshed on a very short rest (Foundry short rest).
- **Difficulty** is a GM world setting with three tiers. Easy = 1 energy, +0, 10s, 3 mistakes and is the original baseline the shipped techniques were tuned at. Medium = 1 energy, +2, 8s, 2 mistakes. Hard = 2 energy, +5, 6s, 1 mistake. Tune new techniques on Easy and let the multipliers derive the rest. Never exceed the 2-energy pool; never make a tier unplayable.
- **Bros items** are in `data/shop-items/items_bros.js` under the shop category `bros` (⭐ Bros Attack Kits). Teaching kits (`brosAttack` + `teachesTechnique` + `energyRule`) spend the item instead of energy at any tier and permanently teach the pair; support items change the economy instead. A `teachesTechnique` id must exist in `data/brosAttacks.json`.
- **GM controls:** `game.brosAttacks.setItemCount(actor, attackId, quantity)` sets or deletes a kit; the "Players can see Bros items" world setting hides item rows and costs from non-GMs.
- **Adding a category** means all five registration points in `tools/SHOP_BADGES.md` plus regenerating `data/shop-departments.json`.

## Annotations (Chatter Hub)

Annotations live in `data/annotations.json` and appear both as inline highlights and in the **Chatter Hub** at `#/annotations`. Each one is a character arguing with a filing: real voice, real faction, a clear position. The `quote` must be an exact phrase from the article body or the highlight silently fails to anchor. Prefer short quotes, let replies genuinely disagree, and never use an annotation to supply a fact the article itself should have stated.
