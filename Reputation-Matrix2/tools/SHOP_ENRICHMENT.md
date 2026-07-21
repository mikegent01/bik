# Wario Shop enrichment pass

`enrich_shop_items.py` uses a local LM Studio model to give every shop item an original description, balanced XP price, concise visible effects, and clickable 5e-inspired homebrew rules text.

## Desktop GUI (recommended)

Start LM Studio's **OpenAI-compatible local server**, then double-click the Python file or run:

```bash
python tools/enrich_shop_items.py --gui
```

The GUI lets you set the endpoint/model, limit an initial test, or target one `items_###.js` chunk. It shows a live summary of every changed item: old → new XP price, new description, pricing reason, and all generated effect rules. Select a row to inspect the full before/after description and rules.

**Default behavior writes data.** After every valid model reply, the tool atomically saves a JSON checkpoint and overwrites only that source item chunk. It is designed for an overnight job: if the server or computer stops, start it again and completed items are skipped. Use **Review-only** only when you want JSON previews first; restart normally to write those saved results into source files.

## Command line

```bash
# Normal, resumable in-place run (all unfinished items)
python tools/enrich_shop_items.py

# Safe small test that writes only three successful items
python tools/enrich_shop_items.py --limit 3

# Preview/checkpoint results without changing source modules
python tools/enrich_shop_items.py --review-only --limit 5

# Resume one chunk, e.g. the Doughnut Hole data
python tools/enrich_shop_items.py --chunk items_052.js
```

Default endpoint: `http://127.0.0.1:1234/v1/chat/completions`. Override it with `--endpoint` or `LM_STUDIO_URL`; set `--model` / `LM_STUDIO_MODEL` if the server needs a model name. If a blank model field gets an HTTP 400 response, select/copy the loaded model's identifier from LM Studio into the GUI's **Model** field (or use `--model`).

The request uses `tools/shop-item-response-template.json` as an explicit fill-in template. It intentionally does **not** send OpenAI's `response_format` option because some LM Studio server versions reject that option with HTTP 400. Any future server error now includes LM Studio's actual response body, so it is actionable rather than just saying "Bad Request".

## Data and safeguards

- The source remains split into `shop-items/items_###.js`; no huge shop-data file is created.
- Each source chunk has its own gitignored JSON checkpoint in `tools/.shop-enrichment/`, allowing inspection and recovery.
- Checkpoint and source writes use temporary files plus atomic replacement to avoid corrupting an item chunk on interruption.
- Duplicate IDs are handled using each module's original source key, so one record cannot overwrite another by accident.
- The tool validates the model response before saving: exact response fields, 2–4 short effects, matching rule-detail entries, non-empty text, and a sane whole-XP range.
- Rules are **5e-inspired homebrew**, not official D&D 5e material.
