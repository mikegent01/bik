## Run report

**Files** 
CREATED
  `tools/queue-map-pois.py` ~ New CLI utility. Reads the interactive map data and pushes unwritten Points of Interest into `locations.json` as stubs so the Genkit Location Generator expands them into full articles. Supports targeting specific regions (e.g. `python tools/queue-map-pois.py mushroom_kingdom`).
  `tools/merge-records.py` ~ New CLI utility. Merges duplicate records (e.g., combining a duplicate location's lore into the primary record and safely removing the duplicate while leaving a redirect note).

EDITED
  `Reputation-Matrix2/app/pages/maps/map-renderer.js` ~ Removed the dull grey fallback coloring from map POI markers. They now use a solid background of their controlling faction's color, giving the map immediate geopolitical vibrancy.
  `Reputation-Matrix2/tools/genkit/systems/desk.py` ~ Heavily reinforced the prompt instructions for Location, Event, and Battle generators. The AI is now explicitly instructed to "use double newlines (\n\n) to separate paragraphs and use Markdown headers (##) for section titles. Do not output giant unbroken walls of text."
  `index.html` ~ Touched up the `mdToHtml` regex so that if the AI occasionally forgets a line break before a header (e.g., `text. ### Origins`), the parser intercepts it and injects proper paragraph breaks anyway.
  `Reputation-Matrix2/tools/genkit/webui_template.html` ~ The Genkit dashboard now automatically alphabetically sorts the "Generation mix" options. Added `localStorage` bindings so all Genkit settings (Endpoint, workers, temp, generation weights) automatically save and restore on refresh.
  `Reputation-Matrix2/data/locations.json`, `Reputation-Matrix2/data/events.json` ~ Ran a one-time sweep script to automatically inject paragraph breaks into existing generated records that were previously suffering from the "wall of text" formatting bug.

**Events filed** — None
**XP** — No XP awarded this run.

**Index** — Not applicable.
**RNN** — Not applicable.

**Not done / open**
  · WAHwire constraints were already addressed in the previous commit, but you'll need to hit "Retry quarantined tasks" in the newly updated Genkit UI to finally push them through!
