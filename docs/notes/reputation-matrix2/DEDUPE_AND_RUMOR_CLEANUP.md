# Dedupe and Rumor Cleanup

Completed in this pass:
- Removed duplicate post IDs and exact duplicate post bodies/signatures
- Rebuilt `assembly-data.js` and all chunk files from the cleaned post set
- Normalized a first batch of rumor IDs to cleaner canonical targets where possible
- Added inline placeholder images to a subset of posts that were missing images for better media coverage / stress testing

## Results
- Original posts scanned: 16,955
- Cleaned posts kept: 16,554
- Duplicate posts removed: 401
- Posts with images after patch: 1,028

## Notes
Some rumor IDs are still non-canonical because they appear to represent draft/story shorthand rather than confirmed `events.json` IDs. These should be normalized in a second lore pass rather than blindly merged.

Examples still needing canonical mapping:
- `toad_trail_begins`
- `purple_legion_mystery`
- `greenhouse_inferno`
- `project_orange`
- `ghost_gate_trap`
- `spider_grove_ambush`
- `archie_portal_reveal`
- `archie_third_eye_escape`
- `toadsmith_poultice_escape`
- `oracle_assassination_escape`

## What changed on disk
- Rebuilt `assembly-data.js`
- Rebuilt all `assembly-data-chunk-*.js` files from the cleaned dataset
