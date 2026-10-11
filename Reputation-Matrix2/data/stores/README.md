# Filing stores — shards

Four bundles feed the static site (`events.json`, `characters.json`,
`locations.json`, `battles.json`). Those files are **generated**. Edit the
shards in this folder; then run:

```bash
python3 tools/build-json-stores.py --build --check
```

## Layout (two levels, not four)

```
stores/
  events/
    material/          ← real world (Midlands, Mushroom Kingdom, …)
      1040.json        ← whole year, if it fits under ~250 KB
      1040-harvestide.json  ← month only when that year would be fat
    feyward/
    shadeward/
    mirror/
    unsorted/
  characters/          ← no calendar; one file per world (then -b, -c)
  locations/
  battles/             ← same world/year shape as events
  manifest.json        ← generated: id → shard, plus original order
```

Month folders do not exist. A month is a *filename* (`1040-aethel.json`)
so a listing stays readable and we never nest year/month/day.

`unsorted/` is for records the plane classifier will not guess at.

## Why the bundles still exist

`index.html` fetches `data/events.json` in one request. Sharding that
fetch into twenty files would make the encyclopedia slower, not cheaper.
The token win is on the *agent* side: Read one 200 KB shard, not 4.4 MB.
