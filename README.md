# Waluipedia — The Vigilance Terminal

<!-- RNN:LAST-WEEK:START -->
## 📺 Last Week on the Rakasha News Network

> **EP 002 — The Wrong Mountain and the God Who Runs the Place**  
> Hunt Day AETHEL 18, 1040 BF · covering Aethel 1 – 17, 1040 BF · runtime 6:47  
> Anchor: **Whisper-in-Wind**, Death Speaker, Spirit-Walker Clan · Field: **Acolyte Dan**, Runner of the Cold Roads

**▶ [Watch the broadcast](Reputation-Matrix2/app/pages/standalone/rakasha-news-network.html)** — the Rakasha desk reads back everything the party survived last week, composited live from `Reputation-Matrix2/animation_frames/`.

| Segment | Story | Cold open line |
|---|---|---|
| **COLD OPEN** | Rakasha News Network | Iron rusts. Flesh rots. Maps lie. Only the Hunt remains. |
| **LEAD STORY** | One Letter, One Mountain, Eighteen Hours | On the seventeenth of Aethel the yellow one they call Wario put his brother in a produce sack, l… |
| **THE INTERVIEW** | The Host With the Crown | Five nights earlier, the same two brothers walked into an office because a stranger promised the… |
| **THE MANOR** | Ghosts, a Warrant, and an Alliance Nobody Trusts | Aethel opened at the ruined manor. The green plumber found a broken travelling circle and took t… |
| **THE HEALER'S DEBT** | The Medicine Came Back Out | A Spark-Weaver calling himself Parson Pellinost healed the one called Archie without being asked… |
| **THE VATS** | What Is Under the Star-Lit Library | Fleeing the Iron-Hides, the Oracle moved Archie and the comatose Bones to the place he calls the… |
| **THE ANCHOR** | He Stood in the Candles and Said No to a God | Archie Miser then demanded to be sent to Shadeward for his friends. He was told a month had alre… |
| **FIELD REPORT** | The Slope With the Seams | Whisper-in-Wind, I am on the wrong mountain and I want that on the record before anything else! … |
| **WIND WHISPERS** | Whispers on the Breeze | Heard in a waiting room: the green plumber went under the knife near death, and a surgeon he cal… |
| **SIGN OFF** | Sign Off | That is the week. Check your map before you climb. Check who drew it before you trust it. |

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
