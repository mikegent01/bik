# Wario Shop enrichment pass

`enrich_shop_items.py` is a resumable, local-first pipeline for giving every shop item an original description, short effects, clickable 5e-inspired rules text, and a reviewed XP price.

## Before starting

1. In **LM Studio**, load an instruction model and start the **OpenAI-compatible local server**.
2. From `Reputation-Matrix2`, run a small test first:

```bash
python tools/enrich_shop_items.py --dry-run --limit 3
python tools/enrich_shop_items.py --limit 3
```

The default endpoint is `http://127.0.0.1:1234/v1/chat/completions`. Override it with `--endpoint` or `LM_STUDIO_URL`; use `--model` / `LM_STUDIO_MODEL` if your server requires a model name.

## Overnight workflow

```bash
# One request per item. Results are checkpointed after every successful request.
python tools/enrich_shop_items.py --delay 0.25

# Inspect the JSON work shards, then make the accepted edits live.
python tools/enrich_shop_items.py --apply
npm run build
```

Work lives in `tools/.shop-enrichment/items_###.json` and is gitignored. If the server or computer stops, run the same command again: processed item IDs are skipped. To work on one source shard, use `--chunk items_052.js`.

## Guardrails

- The source stays split in the existing `shop-items/items_###.js` modules; no giant shop file is created.
- Each work shard is JSON, so it is easy to inspect, edit, archive, or hand off.
- The script only applies generated records when explicitly given `--apply`.
- It preserves each item's ID, category, vendor, stock, level requirement, and other non-editorial fields. It validates the response shape and sensible XP bounds before checkpointing it.
- The rules language is **5e-inspired homebrew**, not a claim of official D&D 5e rules.
