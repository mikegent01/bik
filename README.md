# Waluipedia — The Vigilance Terminal

<!-- RNN:LAST-WEEK:START -->
## 📺 Last Week on the Rakasha News Network

> **EP 001 — The Box That Danced and the Boy Who Died Twice**  
> Hunt Day HARVESTIDE 30, 1040 BF · covering Harvestide 18 – Harvestnoon 1, 1040 BF · runtime 5:28  
> Anchor: **Whisper-in-Wind**, Death Speaker, Spirit-Walker Clan · Field: **Acolyte Dan**, Runner of the Cold Roads

**▶ [Watch the broadcast](Reputation-Matrix2/app/pages/standalone/rakasha-news-network.html)** — the Rakasha desk reads back everything the party survived last week, composited live from `Reputation-Matrix2/animation_frames/`.

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

*Cadence: a new RNN broadcast is cut **every week that applicable new events exist**. File the session, then run `python3 tools/build-rnn-broadcast.py` and drop the new script in `tools/rnn-scripts/`. The newest episode always sits here, labelled “last week”.*

<!-- RNN:LAST-WEEK:END -->

An in-world encyclopedia, campaign chronicle and faction-simulation terminal for the
Waluipedia tabletop campaign. `index.html` is the encyclopedia shell; `Reputation-Matrix2/`
is the systems layer (factions, reputation, maps, laws, newspapers, standalone pages);
`tools/` holds the Python generators that keep the two in sync.

## Where things live

| Path | What it is |
|---|---|
| `index.html` | The Waluipedia shell: router, article renderer, home feed, operator toolkit |
| `Reputation-Matrix2/data/` | Canonical data — `events.json`, `characters.json`, books, clans, broadcasts |
| `Reputation-Matrix2/app/pages/standalone/` | Self-contained pages (field journal, simulator, RNN broadcast) |
| `Reputation-Matrix2/app/core/` | Shared renderers, including `rakasha-news.js` (The Blood-Echo broadsheet) |
| `Reputation-Matrix2/animation_frames/` | Rakasha News Network anchor sprites and title card |
| `tools/` | Python build scripts (`update-index-home.py`, `build-rnn-broadcast.py`, …) |
| `docs/` | Project structure, asset map, and the Waluipedia Story Format Guide |

## Routine jobs

- **File a session** → append to `Reputation-Matrix2/data/events.json`, then refresh the
  home feed with `python3 tools/update-index-home.py`.
- **Cut the news** → `python3 tools/build-rnn-broadcast.py` (see the cadence rule above).
- **Refresh update stamps** → `node generate-updates.js`.

Craft standards for narrative filings live in
[`docs/STORY_FORMAT_GUIDE.md`](docs/STORY_FORMAT_GUIDE.md); engineering conventions live in
[`Reputation-Matrix2/gemini.md`](Reputation-Matrix2/gemini.md).
