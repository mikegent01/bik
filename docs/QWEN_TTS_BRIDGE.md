# The Local Qwen-TTS Bridge — Read Aloud

**The site can read any article aloud through your local
[Qwen3-TTS Enhanced Studio](http://127.0.0.1:7860/), in Waluigi's voice.**

The 🔊 **Read aloud** chip on article, commentary-track, and day-log pages
feeds the page to the studio one chunk at a time — and the chunk after the
one you are hearing is already synthesizing while the current one plays. The
result sounds like one continuous take instead of synth… pause… synth…
pause.

---

## Setup

1. Run the Qwen3-TTS Enhanced Studio (Gradio) locally — default
   `http://127.0.0.1:7860/`.
2. In its **Voice Studio**, save a voice profile named **`Waluigi`** (the
   bridge's default; it uses whatever profiles the studio has saved).
3. Open the site (locally, or the deployed page — see
   [Security notes](#security-notes--localhost)), open any article, and
   click **🔊 Read aloud**.
4. ⚙️ in the player bar configures: studio URL, voice profile, model
   (`/generate_base_17` = the bigger saved-voice model, `/generate_base_06`
   = the faster one), and chunk size (chars, default 450). **Test voice**
   synthesizes a one-liner to confirm the wiring.

Settings persist in `localStorage` under `waluipedia-tts`.

## How the pipeline works

```
chunk 1 synth ──▶ play chunk 1 ──────────────▶ (ends)
                    │
                    └── chunk 2 synth (in flight) ──▶ play chunk 2 ──▶ …
                                                  └── chunk 3 synth (in flight)
```

* The page's readable text is harvested from the rendered article (title,
  lead summary, prose blocks, Waluigi's notes — not the TOC, rail, or
  infoboxes).
* Text is split into **sentence-aware chunks** (~450 chars): sentences stay
  whole, paragraphs are chunk boundaries, and monster sentences with no
  punctuation are hard-split. Nothing is sent in one giant request, because
  the model has a context limit and long single takes degrade.
* While chunk *N* plays, chunk *N+1* synthesizes — **one request in flight
  at a time**, so a modest local GPU is never asked to run two pieces of
  speech at once. If a prefetch is still running when playback ends, the
  player *joins* it rather than re-synthesizing (one synthesis per chunk,
  ever).
* Pause/resume, skip chunk, and stop are in the player bar. Navigating to
  another page stops the reading.

## The Gradio API it speaks

Only saved-voice endpoints are used (the studio's dropdown voices —
`Freeman`, `Luigi`, `Waluigi`, …):

| Call | Purpose |
|---|---|
| `POST /gradio_api/call/generate_base_17` | enqueue `{data:[voice, text, lang, xvector_only=false, seed=0, temp=0.8, top_p=0.95, rep=1.15, max_new_tokens=2048]}` |
| `GET /gradio_api/call/generate_base_17/<event_id>` | SSE stream; `event: complete` carries `[progress, FileData, status]` |
| `GET /gradio_api/file=<path>` (or the `url` in FileData) | fetch the rendered wav/mp3 |

Fallbacks, in order: `/gradio_api/call` (Gradio 5.x) → `/call` (4.x); audio
via FileData `url` → constructed `/gradio_api/file=` URL. `/generate_base_06`
is identical in shape and is the config's "faster" model option.

## Testing

```
node tools/tests/test-qwen-tts-bridge.mjs
```

Runs the bridge core (extracted straight from `index.html`) against
`tools/mock_gradio_tts.py`, a fake studio that logs every request. Asserts
the whole contract: chunker behavior, client payload (`voice=Waluigi`, exact
text), the pipeline (chunk 2's synthesis is on the mock's log *while chunk 1
is still playing*; each chunk synthesized exactly once, in order), and the
error path (dead endpoint → `Bridge error: the studio is unreachable…`, and
the player stops cleanly). No jsdom required.

## Security notes & localhost

* The bridge is **browser-side only** — no repo server component, nothing
  leaves the reader's machine except requests to their own studio.
* Browsers treat `http://127.0.0.1` / `http://localhost` as trustworthy
  origins, so this works even from the HTTPS-deployed page; Chrome may show
  a one-time **local network access** prompt — allow it. (If the site itself
  is served over HTTPS and the browser blocks the call, open the site
  locally instead.)
* If the studio is not running, the bridge says so and stops:
  *"Bridge error: the studio is unreachable at http://127.0.0.1:7860."*

## Where the code lives

* `index.html` — the block between `READ-ALOUD-BRIDGE-START` and
  `READ-ALOUD-BRIDGE-END` markers: config, harvester, chunker, Gradio
  client, the `ReadAloud` controller, and the player bar. The 🔊 chip is
  wired into `view_article`, `view_commentary`, and `view_daylog`.
* `app/styles/waluipedia.css` — `.readaloud-*` / `.ra-*` player bar styles.
* `tools/mock_gradio_tts.py` + `tools/tests/test-qwen-tts-bridge.mjs` — the
  headless contract test.
