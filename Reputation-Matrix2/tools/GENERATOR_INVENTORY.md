# Generator inventory — live data only

There is **no committed pending-job list**. Pending work is derived from the
current data every time the CLI, scheduler, or GUI asks for it:

```bash
cd Reputation-Matrix2
python3 tools/generate_all.py --inventory
```

The GUI calls the same `SystemSpec.count_pending()` functions on every poll.
A successful write changes the source data; the next poll recounts it and the
number falls. Checkpoints are diagnostic/resume metadata only and never own the
queue. If a checkpoint says complete while the source still reports work, the
runner reopens the stale checkpoint and the source wins.

## What “complete” means

| System | Live source of truth | A job leaves pending when… |
|---|---|---|
| `faction-dossiers` | `data/factionsGenerated.json` | the stub has a validated 500–1,000 word dossier, or a reviewed non-faction tombstone |
| `shop_items` | authored shop shards plus v2-vetted generated stock | the live rarity deficit decreases after a `shop-v2` item is written |
| `wahwire-prune` | `data/wahwire/posts.json` | a legacy post becomes canon or retired |
| `wahwire-author` | events versus canon/`wahwire-v2` post links | a vetted post links the uncovered event |
| `wahwire-discuss` | canon/`wahwire-v2` thread lengths | a vetted thread reaches the configured discussion target |
| `wahwire-profile` | `data/wahwire/profiles.json` | the account has a completed profile |
| `abilities` | `data/abilityShop.json` | the live class/level deficit is filled |
| `crafting` | `data/crafting.json` | the recipe has a validated school |
| `reputation` | events, battles, major battles and trials | either operator `reputationChanges` or record-wide `effects` is non-empty |
| `bros_attacks` | `data/brosAttacks.json` plus source-grounded candidate events | the target is reached or the source event is represented by an accepted technique |
| `injury-table` | `data/injuries.json` | the d100 row carries a `_generated` stamp (still `temporary: true` until reviewed) |
| `locations` | `data/locations.json` | live count reaches the location floor |
| `events` | `data/events.json` | live count reaches the event floor |
| `battles` | `data/battles.json` | live count reaches the battle floor |

## Important distinctions

- **Success removes work.** The adapter writes atomically, then its next live
  count no longer includes that record.
- **Failure stays pending.** A rejected model response wrote nothing, so the
  record correctly remains work for a later run.
- **A partial dossier stays pending.** Its accepted sections are resumable under
  `tools/.genkit/draft-faction-dossiers/`, but the record count falls only after
  the assembled dossier passes final validation.
- **Targets are not static queues.** Rarity shares and the curated Bros Attack
  ceiling define desired state. The concrete tasks are still rebuilt from disk.
- **Dependencies can create work.** A new WAHwire post can create a thread job;
  a reputation pass can mint a faction stub. The scheduler revives a previously
  drained adapter when its live count becomes non-zero.

Do not copy inventory totals into documentation or use checkpoint counts as
pending counts. Run `--inventory` or inspect the GUI for the current numbers.
