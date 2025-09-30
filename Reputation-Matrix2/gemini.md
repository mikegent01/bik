# Vigilance Terminal Project

## Project Philosophy

To ensure readability and maintainability, this project follows a modular structure. JavaScript files, particularly those containing significant logic or UI rendering code, are kept concise. The general guideline is to keep files under **500-600 lines**. This approach makes it easier for developers to quickly understand the purpose of a file and navigate the codebase effectively.

A key example of this philosophy is the handling of game data. Instead of large, monolithic data files, information is broken down into smaller, thematic modules. For instance, the detailed legal codes for different faction archetypes (`laws-data-militaristic.js`, `laws-data-democratic.js`, etc.) are kept in separate files and aggregated by a central `laws-data.js` file. This keeps each file focused on a single concept, improving organization and making it easier to add or modify data without affecting unrelated systems.

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

1.  **`calendar-data.js`**: Increment the `day` value in the `CURRENT_GAME_DATE` constant. This is the master clock for the world.
2.  **`events/scheduled-posts.js`**: This file contains the scripted WAHbook posts for the ongoing world war. To add new events, create new post objects with a future `scheduledDate`.
3.  **`quests/*.js`**: Advance the status of any ongoing personal, main, or world quests. Change a step's status from `'active'` to `'completed'` and the next from `'locked'` to `'active'`.
4.  **`map-battle-data-*.js`**: Update the `x` and `y` coordinates of tactical units on the map to reflect a day's movement or the outcome of a battle.
5.  **`assembly-data.js` / `assembly-intel-data.js`**: Add new, non-scheduled WAHbook posts from various characters reacting to the day's events to make the world feel alive.
6.  **`timeline-data.js`**: For major, world-shaking events, add a new entry to the historical timeline.
7.  **`character-relations.js`**: If an event would logically change how two characters feel about each other, update their personal opinion text.
8.  **`party-and-events.js`**: Update the active `RUMORS` list to reflect new world events.
9.  **`state.js`**: Add new rumor IDs to the `activeRumors` array to ensure they are calculated in the reputation system.
10. **`focus-tree.js`**: Update the descriptions of ongoing `TOAD_TIMELINE` events to reflect the day's progress.

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