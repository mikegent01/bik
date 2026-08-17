# Vigilance Terminal Project

<!-- RNN:LAST-WEEK:START -->
## 📺 Last Week on the Rakasha News Network

> **EP 002 — The File From Eight Years Ago and the God Who Runs the Place**  
> Hunt Day AETHEL 18, 1040 BF · covering Aethel 1 – 17, 1040 BF — plus one recovered file dated 17 Aethel, 1032 BF · runtime 7:37  
> Anchor: **Whisper-in-Wind**, Death Speaker, Spirit-Walker Clan · Field: **Acolyte Dan**, Runner of the Cold Roads

**▶ [Watch the broadcast](../Reputation-Matrix2/app/pages/standalone/rakasha-news-network.html)** — the Rakasha desk reads back everything the party survived last week, composited live from `Reputation-Matrix2/animation_frames/`.

| Segment | Story | Cold open line |
|---|---|---|
| **COLD OPEN** | Rakasha News Network | Iron rusts. Flesh rots. Maps lie. Only the Hunt remains. |
| **LEAD STORY** | The File That Sat in a Crate for Eight Years | Our first story is not from this week. It is from eight years ago, and it was released three day… |
| **THE INTERVIEW** | The Host With the Crown | To this week, then. Six nights ago the same two brothers walked into an office because a strange… |
| **THE MANOR** | Ghosts, a Warrant, and an Alliance Nobody Trusts | Aethel opened at the ruined manor. The green plumber found a broken travelling circle and took t… |
| **THE HEALER'S DEBT** | The Medicine Came Back Out | A Spark-Weaver calling himself Parson Pellinost healed the one called Archie without being asked… |
| **THE VATS** | What Is Under the Star-Lit Library | Fleeing the Iron-Hides, the Oracle moved Archie and the comatose Bones to the place he calls the… |
| **THE ANCHOR** | He Stood in the Candles and Said No to a God | Archie Miser then demanded to be sent to Shadeward for his friends. He was told a month had alre… |
| **FIELD REPORT** | The Slope With the Seams, Eight Years Later | Whisper-in-Wind, I read that old file and I went and stood on it! I am on the wrong mountain and… |
| **WIND WHISPERS** | Whispers on the Breeze | Heard in a waiting room: the green plumber went under the knife near death, and a surgeon he cal… |
| **SIGN OFF** | Sign Off | That is the week, and eight years ago as well. Check your map before you climb. Check who drew i… |

*Cadence: **one episode per ~10 filed events, not one per event.** File the session, add the event id to `../tools/rnn-scripts/pending-news-articles.json`, and when the list reaches ten write the next script in `../tools/rnn-scripts/` and run `python3 tools/build-rnn-broadcast.py`. Full rules: [`docs/RNN_BROADCAST_GUIDE.md`](../docs/RNN_BROADCAST_GUIDE.md). The newest episode always sits here.*

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

#### Generated faction dossiers

When the reputation generator encounters a real organised group that has no faction record, it first writes an explicit stub to `data/factionsGenerated.json`; the score is preserved immediately rather than thrown away. A stub saying “No dossier has been written yet” is **unfinished work**, not acceptable reader-facing prose. The `faction-dossiers` pass in `tools/generate_all.py` must reopen the named source record, follow its `relatedArticles`, and either write a **roughly 500–1,000 word** in-world dossier or determine that the label is not a faction. Because this local model often stops below 175 words even when asked for more, a real dossier is written as four separately generated and validated 125–250 word sections, then assembled; never retry one oversized completion and hope its limit changes. Section drafts are resumable under `tools/.genkit/draft-faction-dossiers/`, and the GUI reports each sub-call; the pending record count decreases only after the complete assembled dossier passes.

Dossiers must be evidence-bound: name the actions, objects, places, relationships, and uncertainties present in the linked records; use Waluigi’s archival voice; and never manufacture an organisation around a person, location, event, species, generic public, or aggregate label such as “all factions.” Every dossier must carry three short verbatim excerpts from its supplied articles and explain them in the prose. Misfiled labels become minimal non-rendering tombstones at their original JSON keys—never paragraphs saying they are not factions—so Git shows a review decision instead of falsely aligning the next surviving faction as a rename. Their generated reputation keys are redirected to a canonical faction only when the source justifies that redirect. Faction dossiers are a normal stage-1 `generate_all` system and interleave with the other enabled, reviewed adapters; `--only faction-dossiers` is an optional diagnostic scope, not the required way to run them.

### Updating applicable character profiles

A major session event is not complete when the event record alone is changed. Review every named character whose status, inventory, relationship, injury, reputation, or current objective changed. Update the canonical record in `data/characters.json` with a concise dated or clearly labeled “Latest Filing” paragraph, append the event ID to `keyEvents`, and add the event, important item, faction, or location IDs to `relatedArticles` when they resolve. Update only characters materially affected; do not copy the whole plot into every profile. Keep the event as the detailed narrative source and the character page as the durable state change. Validate that every new ID resolves and that the profile update does not overwrite existing lore.

#### Character lifecycle after an arc

Characters are canon, not temporary cache entries. **Never delete a character who is linked from a filed event merely because the arc ended.** Closing an arc instead triggers a cast-closeout pass:

| `narrativeStatus` | Use | Default treatment |
|---|---|---|
| `active` | Main party or expected next-session figure | Keep current status and objectives live |
| `active-local` | Important while the current arc remains open | Keep visible; review at arc close |
| `recurring` | Has a concrete return hook outside the current scene | Keep the hook, stop copying session summaries |
| `dormant` | Arc ended with no immediate return route | Preserve the compact dossier and links; exclude it from any active-only subset, but keep it searchable in the full directory |
| `closed` | Dead, permanently departed, or narratively resolved | Preserve final state and last-seen event; no new updates unless the record reopens |

Every local/supporting character should carry `arcId`, `lastSeenEvent`, and a short `returnHooks[]` list. At arc close, promote only characters with an actual unresolved hook to `recurring`; move the rest to `dormant` or `closed`. Dormant records do not accumulate repetitive “still absent” paragraphs. They remain because old scenes, reputation entries, investigations, and search links must continue to resolve. This follows the project rule that bloat means duplicated facts—not one canonical record for a person who really existed.

**Do not optimise the numbers.** They catch drift. If the prose reads well and the measurements disagree, the prose wins.

### Illustrating the filing (required — do this without being asked)

Every new session event or long narrative filing ships **with images**. This is a step of the process, not a favour to be requested. A filing that reads well and shows nothing is not finished.

**Step by step:**

1. **Pick the beats.** One lead image for the record, plus one image for each section that contains a *place, an object, or a piece of evidence a reader would want to look at*. Three to six section images for a long filing is the working band. Do not illustrate every section — illustrate the ones where seeing the thing changes how the paragraph lands.
2. **Write the prompt sheet first — before generating anything.** Generations cost. Pull the concrete nouns out of the section (materials, measurements, damage, light sources, what is written on things) and write a block per image listing the source lines, a "must appear" checklist, and the prompt. Review that sheet against the prose, *then* spend the calls. Full procedure and worked examples: [`docs/IMAGE_GENERATION_GUIDE.md`](../docs/IMAGE_GENERATION_GUIDE.md).
3. **Generate the image.** Use the `generate_image` tool, prompting from the prose itself: the actual weather, the actual materials, the actual time of day, the actual damage. Ask for **in-world documentary photography or survey plate**, not concept art or a poster.
4. **Text in the image: only when the story requires it.** Decorative lettering is forbidden — left free, the model invents nonsense words. But when the prose turns on something written (a memorial plank, a summit marker, a spelling that caused the disaster), that text is the *subject* and must be specified letter for letter, in caps, in quotes, with the medium described ("burned in with a hot iron, strokes wobbling"). Then check the spelling by eye afterwards.
5. **Look at every image you generated.** `read_file` each one and actually inspect it against the checklist. The model will hand back a blank signpost without comment.
6. **Fix defects by editing, not rerolling.** `generate_image` accepts an `images` array — pass the existing file and describe only the change. This keeps the composition you already paid for.
7. **Save to the right place.** `Reputation-Matrix2/assets/images/events/<event-slug>/<prefix>-<nn>-<subject>.jpg` — zero-padded, ordered by appearance. Example: `assets/images/events/mount-ebot/ebot-03-cave.jpg`.
8. **Compress before committing.** Generated files land far too large for a static site. This environment has **ImageMagick v6 only** — there is no `magick`, `cwebp`, `pngquant`, or `optipng`. Use:

   ```bash
   convert in.png -resize 1600x1600\> -strip -interlace Plane -quality 82 out.jpg
   ```

   Target **under ~300 KB per image**. Check with `ls -la` and re-run at a lower quality if any file is over.
9. **Wire it into the JSON.** Paths are relative to `Reputation-Matrix2/`, and both fields are optional per level:

   ```json
   "image": "assets/images/events/mount-ebot/ebot-01-mountain.jpg",
   "imageCaption": "Mount Ebot from the valley track, photographed on a later survey. One T."
   ```

   `image` / `imageCaption` on the **record** renders the lead figure; the same two keys on a **section** object render an inline figure inside that section.
10. **Write the caption in archive voice.** A caption is a filing, not alt text. It states what is shown, when it was taken, and what it proves or costs. "The bridge" is a failure. "Machined slots at knee and shin height, razors angled to catch a leg going forward" is a caption.
11. **Verify.** Confirm the JSON parses, load the article, and check every figure actually renders — a wrong path fails silently into a placeholder.

### Attaching exhibits (clickable in-world documents)

When the prose says a document exists — an invoice, an order, a ledger, a telegram, a passport — the reader should be able to **open and read it**. Those artifacts live in `data/props.json` and render as full custom-CSS paper in a modal.

This is **step 6 of the filing process**, run immediately after the prose: [`docs/SESSION_FILING_PROCESS.md` → Step 6](../docs/SESSION_FILING_PROCESS.md#step-6--exhibits-file-the-paper-the-story-mentions). The craft standard — which documents earn a prop, how to write in the issuer's voice, the addendum form — is [`docs/STORY_FORMAT_GUIDE.md` §9B](../docs/STORY_FORMAT_GUIDE.md#9b-exhibits--the-documents-the-story-names). What follows is the field reference.

1. Add a prop object under `props` keyed `prop_<subject>_<kind>`, with the keys in this order: `kind`, `icon`, `title`, `subtitle`, `items`, `articles`, `note`, `body`, then optional `stamps` and `torn`.
2. `kind` must be one of the styled forms: `invoice`, `order`, `ledger`, `letter`, `telegram`, `contract`, `note`, `map`, `passport`, `addendum`. `stamps` may include `sealed`, `evidence`, `overdue`, `void`, `noaction`, `paid`.
3. `items` holds item keys from `INVENTORY_SYSTEM`; `articles` holds article IDs. Those arrays are the wiring — an exhibit tile grid appears automatically on every item page and article listed, and the modal links back. No renderer code is ever touched to add a document.
4. `body` is an HTML string built **only** from the documented `.pd-*` classes in `app/styles/systems/exhibits.css`. Do not invent classes and **never use an inline style** — both render as unstyled text and both fail the audit. The vocabulary:
   - **Structure** — `pd-head`, `pd-org`, `pd-sub`, `pd-title`, `pd-label`, `pd-meta` (a `<dl>`), `pd-table`, `pd-total`, `pd-clause`, `pd-fine`
   - **Annotation** — `pd-margin` (`pd-margin--red` for alarm), `pd-flagged` for the clause somebody marked up, `pd-strike` on a struck table row
   - **Signature** — `pd-sign`, `pd-sigline`, `pd-sigcap`, `pd-signoff`
   - **Layout** — `pd-center`, `pd-right`, `pd-spaced`, `pd-inset`, `pd-wire` (a `<pre>` for telegram copy)
   - **Carved / printed objects** — `pd-carved`, `pd-rubbed` (a name weather or a hand took back), `pd-epitaph`
   - **Addendum slips** — `pd-late` (the "attached N years later" line), `pd-quote`, `pd-wah`
   - **Kind-specific** — `pd-cartouche`, `pd-elev`, `pd-contour` (maps); `pp-cover`, `pp-body`, `pp-photo`, `pp-fields`, `pp-mrz` (passports); `pd-classbar`

   If a document needs something the list does not cover, add the class to `exhibits.css` **first**, then use it.
5. Write the paper as the issuing organisation would, not as the archive would. Waluigi's opinion goes in the `pd-margin` aside and the `note` field, and nowhere else.
6. To open a document from inside prose, use the inline trigger `[[prop:prop_id|invoice]]`.
7. **Every `## Addendum:` heading in a filing gets an `addendum` prop.** An addendum is the archive going back to a closed file and adding one more thing, so it is filed as a separate slip rather than buried mid-article: `pd-late` for the "attached N years later" line, `pd-quote` for verbatim speech, `pd-wah` for the sign-off. Say on the paper *why* the addendum exists — what was noticed, who noticed it, and why it was not in the original filing. Search for new ones with `grep -in addendum data/events.json`.
8. Verify with **`python3 tools/check-exhibits.py`** — it fails on a broken `props.json`, an unstyled `kind` or stamp, an invented class, an inline style, an unresolvable `items` / `articles` id, a prop linked to nothing, and a `[[prop:…]]` marker with no prop behind it; it warns on an `## Addendum:` heading with no slip. Then load the article and confirm the tile opens and no raw `[[prop:` text survives.

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

Simulating the passage of one in-game day requires updating several interconnected systems. This process ensures all changes are cohesive and reflected across the application, including the new scripted WAHwire posts that trigger on specific dates.

To advance the world state by one day, edit the following files:

1.  **`calendar.js`**: Increment the `day` value in the `CURRENT_GAME_DATE` constant. This is the master clock for the world.
2.  **`events/scheduled-posts.js`**: This file contains the scripted WAHwire posts for the ongoing world war. To add new events, create new post objects with a future `scheduledDate`.
3.  **`quests/*.js`**: Advance the status of any ongoing personal, main, or world quests. Change a step's status from `'active'` to `'completed'` and the next from `'locked'` to `'active'`.
4.  **`map-battle-data-*.js`**: Update the `x` and `y` coordinates of tactical units on the map to reflect a day's movement or the outcome of a battle.
5.  **`assembly-data.js` / `assembly-intel-data.js`**: Add new, non-scheduled WAHwire posts from various characters reacting to the day's events to make the world feel alive.
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

Cooperative combat techniques belong in `data/brosAttacks.json`. Add one definition per confirmed technique with a stable `id`, name, participants, source event, steps, risks, result, and a Waluigi note. The reader-facing archive is the `#/bros-attacks` route inside the main Waluipedia `index.html` (nav entry "Bros Attacks"), rendered from the `brosAttacks` data key; it is intentionally read-only and has no editor. There is no separate `bros-attacks.html` file. The Foundry export lives in `tools/foundry/bros-attacks/`: one valid dnd5e feat JSON per technique plus `manifest.json`. It is intentionally static and contains only the defined techniques as importable feat items. Each feat has two uses, spends one use per participant, and refreshes on a Foundry short rest (the rules text calls this a very short rest). Update the source definitions and regenerate the static item files together. Do not add a live in-page editor or let Foundry become a second source of truth.

The all-systems generator may record a technique only when one source beat names both partners together and the generated record carries a verbatim 8–40 word excerpt naming both. Merely appearing in the same event is not evidence of a Bros Attack. Accepted records still run the Foundry sync immediately.

#### Bros Attack resource design

Bros Attacks use a small shared-feeling resource rather than unlimited button presses. Each named participant spends **1 Bros Energy** from a personal maximum of **2** when the technique is used. The participating characters regain their spent Bros Energy after a very short rest. This keeps the technique available for a dramatic second attempt without making cooperation free or turning it into a long-rest-only super move. The archive page should show the cost, maximum, refresh rule, steps, risk, result, and source filing for every defined attack. Foundry also runs a short motion drill before the rolls: mouse and touch gestures support tap, swipe up, swipe right, and hold. Team mode alternates the displayed turn between the two partners and says “wait” through the status line; Solo mode lets one player complete the entire sequence. The drill must be readable, forgiving enough to retry, and never replace the actual dnd5e rolls or damage rules. Motions should express the fiction of the technique: Chop Bros uses an upward lift, repeated vertical axe strokes, and a rightward advance; Support Fire uses aim alignment, a timing call, a tap to fire, and a safe reset. Movement gestures do not require holding the mouse button; only an explicitly labeled tap uses a click. Animated arrows, target zones, and partner labels should tell players what their hands are doing before the next turn arrives. Every step has a visible 10-second countdown with a warning at three seconds. A timeout counts as one mistake; three mistakes fail the drill, spend no energy, make no rolls, and close the overlay automatically so players never have to hunt for a quit control after a failed attempt. A successful drill closes automatically and returns to the Bros Attack window before the normal rules resolve. Foundry items should represent the same rule with two uses and short-rest recovery; never add an attack to Foundry that is not present in `data/brosAttacks.json`.

#### Bros Attack drill difficulty

The drill has three difficulty tiers, set by the GM in **Configure Settings → Bros. Attacks → Bros Attack difficulty** and shown as buttons at the top of the Bros Attacks window. Difficulty changes what a technique costs and how hard the motion drill is; it never changes what the technique does in the fiction.

| Tier | Energy per partner | Bonus to the combined total | Time per step | Mistakes allowed |
| --- | --- | --- | --- | --- |
| 🟢 Easy | 1 | +0 | 10s | 3 |
| 🟡 Medium | 1 | +2 | 8s | 2 |
| 🔴 Hard | 2 | +5 | 6s | 1 |

Easy is the baseline and is deliberately forgiving: it is the difficulty the two shipped techniques were designed and tested at, and the numbers above are exactly the original drill. Medium and Hard narrow the target zones, speed up the sweeps, shorten the reaction window, and tighten the charge band, then pay the pair back with a flat bonus on the resolved total. Hard costs 2 energy per partner, which is the entire pool, so a hard attempt is once per short rest and a failed one hurts. Never let a tier cost more than the maximum of 2, and never make a tier unplayable: zones stay at least 5% wide, tap windows at least 180ms, and the charge band always keeps a reachable start and end. When adding a technique, tune it on Easy first and let the multipliers derive the harder tiers rather than hand-writing per-tier numbers.

Players cannot change difficulty unless the GM enables **Players may pick the difficulty**; otherwise the buttons render disabled with the current tier marked. Difficulty is a world setting, so the whole table plays at one tier.

### Bros items (shop kits that perform techniques)

Bros items live in `data/shop-items/items_bros.js` and use the shop category `bros`, which renders as the **⭐ Bros Attack Kits** department in Wario's Shop. They are the purchasable, spendable counterpart to Bros Attacks: where an attack is a technique a pair knows, an item is a physical kit that lets a pair perform or learn one.

Write them with the same evidence discipline as everything else. Every kit needs a `priceReason`, `vendorReason`, `levelRequirementReason`, and `shippingDetail` that a reader can argue with — who sells it, why it costs what it costs, and why that vendor has it. Prices should sit against the rest of the catalog, not float free. Two kinds exist:

- **Teaching kits** carry `brosAttack`, `teachesTechnique`, and `energyRule`. Using one spends the item, not energy, at any difficulty — the kit buys the performance. Once used, both partners have permanently learned the technique and fall back to the normal economy: 1 energy each from a maximum of 2, refreshed on a very short rest. A `teachesTechnique` id must match an `id` in `data/brosAttacks.json`; never ship a kit that teaches a technique the archive does not define.
- **Support items** carry no technique. They change the economy around the drill instead (a spare drill card, a chime that calls a very short rest) and should say plainly in `effectDetails` what they do in rules terms.

Kits run the same style of action-command drill as Bros Attacks, but they are not the same thing: the item is consumed instead of energy, and the GM can hand one out to teach a pair a technique they never earned in play. Keep the drills recognisably related and mechanically distinct.

GM controls live in the module. **Players can see Bros items** (world setting, on by default) hides item rows, quantities, and cost hints from non-GMs when switched off, so a GM can run a kit as a surprise. Quantities are set from the console with `game.brosAttacks.setItemCount(actor, attackId, quantity)`, which updates the kit's quantity, deletes it at zero, and returns null if the actor has no such kit. Adding a new bros item means registering the category in all five places listed in `tools/SHOP_BADGES.md` and regenerating `data/shop-departments.json`.

### Annotations (the Chatter Hub)

Annotations are in-world margin comments: the public arguing with the filing. They live in `data/annotations.json` (a flat list) and surface two ways — inline highlights on the article they are attached to, and the **Chatter Hub** at `#/annotations`, which ranks them by Recent, Top Liked, and Most Replies alongside the Loudest Voices and Loudest Factions leaderboards. Inline highlights are gated on the reader's comment preference and toggle with `C`.

An annotation is a character speaking, not a footnote. Give it a real voice, a faction, and a position — agreement, accusation, correction, or grievance. Quote a phrase that actually appears in the article body; the matcher anchors highlights on that quote, and a quote that does not appear silently fails to highlight. Prefer short, exact quotes over long ones. Attach annotations to the article they argue with, use characters who plausibly read that filing, and let replies disagree with each other rather than forming a queue of agreement. Likes and reply counts are part of the fiction: a wrong comment with a high like count says something about the public, and that is often the more interesting entry. Do not use annotations to smuggle in facts the article should have stated, and do not annotate a character who has no page into prominence.
