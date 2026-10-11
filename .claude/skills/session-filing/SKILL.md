---
name: session-filing
description: Turn a session transcript into Waluipedia canon. Use when filing a session, writing an event, or the user mentions Step 1–9 / locations first.
---

# Session filing

Read `docs/SESSION_FILING_PROCESS.md`. Do not write the event first.

Order: transcript beat list → locations → characters → XP / spoils → **then** the event → exhibits (`props`) → investigation session row → `mainPage.json` / feed → artifacts.

`mike` in a transcript is the GM. Never write him in.

## Token gate

Do not Read `events.json` / `characters.json` / `locations.json` / `battles.json` / `investigations.json` / `commentaries.json` / `articleAnalyses.json` whole. They are generated.

```bash
python3 tools/filing-context.py packet <event-id>
python3 tools/filing-context.py stub characters <id>
python3 tools/filing-context.py stub locations <id>
python3 tools/filing-context.py get investigations <id>
```

Edit a shard under `Reputation-Matrix2/data/stores/`, then:

```bash
python3 tools/build-json-stores.py --build --check
```

World folders: `material` (real world), `feyward`, `shadeward`, `mirror`. Year in the filename; month only when that year is fat.

New chat per filing. `/clear` between jobs.
